// 티타 영어 정비공방 — 간격 반복(SR) 학습 엔진 (순수 함수 · localStorage 비의존)
// 이 모듈은 상태 객체(srState)를 입력받아 새 상태/계산 결과를 돌려줍니다.
// 저장/로드는 page.jsx가 담당하고, 여기서는 규칙만 담습니다.
//
// SR 적용 덱(취업 로드맵 학습 순서): Java 입문(java) → IT 기초(itb) → 중학(lib)
// → IT 심화(ita) → IT 실무(itf). 중학을 기초 뒤로 미루는 이유: 에러·코드 어휘가
// Java 기초 공부 시기에 먼저 필요하기 때문.
//
// 학습 단계:  new → learned → review1 → review2 → review3(졸업)
// 복습 간격:  learned +1일 → 1차복습 / review1 +3일 → 2차복습 / review2 +7일 → 3차복습(최종)

export const SR_DECKS = ["java", "itb", "lib", "ita", "itf"]; // 학습(SR)/졸업 경로 순서
export const DAILY_CARD_CAP = 60;                   // 하루 총 카드(신규+복습) 상한
export const GRAD_WINDOW = 3;                        // 졸업 판정에 보는 최근 복습 세션 수
export const GRAD_ACCURACY = 0.9;                    // 졸업 정답률 임계
export const DAY_MS = 24 * 60 * 60 * 1000;

// 현재 단계에서 "다음 복습까지" 남은 간격(일). new/review3은 예정 복습이 없음.
export const STAGE_INTERVAL = { learned: 1, review1: 3, review2: 7 };
export const STAGE_ORDER = ["new", "learned", "review1", "review2", "review3"];

export function emptyState() {
  return { v: 1, units: {}, sessions: {}, known: {} };
}

export function unitKey(deck, unitId) {
  return deck + ":" + unitId;
}

export function nextStage(stage) {
  const i = STAGE_ORDER.indexOf(stage);
  if (i < 0) return "learned";
  return STAGE_ORDER[Math.min(i + 1, STAGE_ORDER.length - 1)];
}

// 유닛의 다음 복습 예정 시각(ms). new/review3 또는 미학습이면 null.
export function dueAt(unit) {
  if (!unit) return null;
  const iv = STAGE_INTERVAL[unit.stage];
  if (iv == null) return null; // new · review3(졸업)
  return (unit.stampedAt || 0) + iv * DAY_MS;
}

export function isDue(unit, now) {
  const d = dueAt(unit);
  return d != null && d <= now;
}

// 복습 우선순위: 늦은 단계일수록 높음 (2차복습 대기 > 1차복습 대기 > 신규학습 복습대기)
export function reviewRank(unit) {
  return { review2: 3, review1: 2, learned: 1 }[unit && unit.stage] || 0;
}

export function getUnit(state, deck, unitId) {
  return (state.units || {})[unitKey(deck, unitId)] || null;
}

// 소문자 정규화된 영단어 기준으로 known 집합에 없는 단어만 남김.
export function filterUnseen(words, known) {
  const k = known || {};
  return (words || []).filter((w) => !k[String(w.en || w).toLowerCase()]);
}

// 남은 단어 수(중복 제외) 기준 예상 소요일 (하루 20개).
export function expectedDays(remainingCount, perDay = 20) {
  return Math.max(0, Math.ceil((remainingCount || 0) / perDay));
}

// ── 상태 전이 (항상 새 상태 반환) ──────────────────────────────

function cloneState(state) {
  const s = state || emptyState();
  return {
    v: s.v || 1,
    units: { ...(s.units || {}) },
    sessions: { ...(s.sessions || {}) },
    known: { ...(s.known || {}) },
  };
}

// 신규 Day/세트를 처음 끝냈을 때: new → learned.
export function completeLearn(state, deck, unitId, now) {
  const s = cloneState(state);
  s.units[unitKey(deck, unitId)] = { stage: "learned", stampedAt: now };
  return s;
}

// 복습 세션 완료: 단계 전진 + 세션 정답률 기록 + review2 이상 도달 시 단어를 known에 등록.
// words: 이 유닛의 단어 배열([{en}] 또는 [en]) — known 등록용.
export function completeReview(state, deck, unitId, accuracy, words, now) {
  const s = cloneState(state);
  const key = unitKey(deck, unitId);
  const cur = s.units[key] || { stage: "learned", stampedAt: now };
  const stage = nextStage(cur.stage);
  s.units[key] = { stage, stampedAt: now };

  // 덱별 최근 복습 세션 정답률 (최근 GRAD_WINDOW개만 유지)
  const acc = Math.max(0, Math.min(1, Number(accuracy)));
  const list = [...(s.sessions[deck] || []), acc].slice(-GRAD_WINDOW);
  s.sessions[deck] = list;

  // review2·review3 도달 단어는 "이미 아는 단어"로 등록
  if (stage === "review2" || stage === "review3") {
    for (const w of words || []) {
      const en = String(w.en || w).toLowerCase();
      if (en) s.known[en] = 1;
    }
  }
  return s;
}

// 기존 진행 데이터 마이그레이션: SR 필드가 없던 시절의 learned 맵으로 초기 단계 산출.
//  - 유닛의 모든 단어가 학습됨(20/20 등) → learned (다음날 1차복습 예정)
//  - 부분/미학습 → new (SR 항목 없음)
// deckUnits: [{ deck, unitId, words:[{en}] }] (SR 덱 유닛 전체)
export function migrate(state, deckUnits, learnedMap, now) {
  const s = cloneState(state);
  const learned = learnedMap || {};
  for (const u of deckUnits || []) {
    const key = unitKey(u.deck, u.unitId);
    if (s.units[key]) continue; // 이미 SR 상태 있으면 보존
    const words = u.words || [];
    if (words.length > 0 && words.every((w) => learned[w.en])) {
      s.units[key] = { stage: "learned", stampedAt: now };
    }
  }
  return s;
}

// ── 데일리 플랜 (오늘의 정비 목록) ────────────────────────────
// deckUnits: 추천 순서대로 나열된 [{ deck, unitId, cardCount, words }] (SR 덱 전체).
// 반환: { reviews[], news[], reviewCards, newCards, totalCards, newLocked }
export function buildDailyPlan(state, deckUnits, now) {
  const s = state || emptyState();
  const units = s.units || {};

  // 1) 오늘 복습 대상: stage learned/review1/review2 이면서 예정일이 지난 유닛
  const reviews = [];
  for (const u of deckUnits) {
    const unit = units[unitKey(u.deck, u.unitId)];
    if (unit && isDue(unit, now)) {
      reviews.push({ ...u, stage: unit.stage, due: dueAt(unit), rank: reviewRank(unit) });
    }
  }
  // 늦은 단계 우선(2차>1차>신규복습), 같으면 더 오래 밀린 것 먼저
  reviews.sort((a, b) => (b.rank - a.rank) || (a.due - b.due));
  const reviewCards = reviews.reduce((n, u) => n + (u.cardCount || 0), 0);

  // 2) 신규 Day/세트: 아직 시작 안 한(SR 상태 없는) 유닛을 추천 순서대로
  const news = [];
  const newLocked = reviewCards >= DAILY_CARD_CAP;
  if (!newLocked) {
    let budget = DAILY_CARD_CAP - reviewCards;
    for (const u of deckUnits) {
      if (units[unitKey(u.deck, u.unitId)]) continue; // 이미 학습/복습 진행 중
      const c = u.cardCount || 0;
      if (c <= budget) {
        news.push({ ...u });
        budget -= c;
        if (budget <= 0) break;
      }
      // 이번 유닛이 예산 초과여도, 첫 신규 하나는 넘어가고 다음 유닛을 보지 않음(순차 코스 유지)
      else break;
    }
  }
  const newCards = news.reduce((n, u) => n + (u.cardCount || 0), 0);
  return {
    reviews,
    news,
    reviewCards,
    newCards,
    totalCards: reviewCards + newCards,
    newLocked,
  };
}

// 덱 졸업 가능 여부: 최근 GRAD_WINDOW개 복습 세션이 모두 임계 정답률 이상.
export function isGraduable(state, deck) {
  const list = ((state && state.sessions) || {})[deck] || [];
  if (list.length < GRAD_WINDOW) return false;
  return list.slice(-GRAD_WINDOW).every((a) => a >= GRAD_ACCURACY);
}
