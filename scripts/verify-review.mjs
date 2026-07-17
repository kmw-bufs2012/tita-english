/* SR 학습 엔진 검증 (테스트 프레임워크 없음 → Node 순수 assert, 새 의존성 0)
   실행: node scripts/verify-review.mjs */
import {
  emptyState, unitKey, nextStage, dueAt, isDue, completeLearn, completeReview,
  migrate, buildDailyPlan, isGraduable, filterUnseen, expectedDays,
  DAY_MS, DAILY_CARD_CAP,
} from "../app/lib/review.js";

let fail = 0;
const ok = (c, m) => { console.log((c ? "  ✅ " : "  ❌ ") + m); if (!c) fail += 1; };
const T0 = 1_700_000_000_000; // 고정 기준 시각(테스트 결정성)

console.log("1. 단계 전이·복습 예정일");
ok(nextStage("new") === "learned", "new → learned");
ok(nextStage("review1") === "review2", "review1 → review2");
ok(nextStage("review3") === "review3", "review3(졸업)에서 더 안 올라감");
ok(dueAt({ stage: "learned", stampedAt: T0 }) === T0 + 1 * DAY_MS, "learned → +1일 예정");
ok(dueAt({ stage: "review1", stampedAt: T0 }) === T0 + 3 * DAY_MS, "review1 → +3일 예정");
ok(dueAt({ stage: "review2", stampedAt: T0 }) === T0 + 7 * DAY_MS, "review2 → +7일 예정");
ok(dueAt({ stage: "review3", stampedAt: T0 }) === null, "review3 → 예정 없음(졸업)");
ok(isDue({ stage: "learned", stampedAt: T0 }, T0 + DAY_MS) === true, "하루 뒤 복습 대상");
ok(isDue({ stage: "learned", stampedAt: T0 }, T0 + DAY_MS - 1) === false, "아직이면 대상 아님");

console.log("\n2. 복습 완료 → 단계 전진·정답률·known 등록");
let s = emptyState();
s = completeLearn(s, "lib", "d0", T0);
ok(s.units[unitKey("lib", "d0")].stage === "learned", "학습 완료 → learned");
const words = [{ en: "Apple" }, { en: "banana" }];
s = completeReview(s, "lib", "d0", 0.8, words, T0 + DAY_MS); // → review1
ok(s.units[unitKey("lib", "d0")].stage === "review1", "1차 복습 → review1");
ok(Object.keys(s.known).length === 0, "review1은 아직 known 미등록");
s = completeReview(s, "lib", "d0", 1.0, words, T0 + 4 * DAY_MS); // → review2
ok(s.units[unitKey("lib", "d0")].stage === "review2", "2차 복습 → review2");
ok(s.known["apple"] === 1 && s.known["banana"] === 1, "review2 도달 → 소문자 known 등록");
ok((s.sessions.lib || []).length === 2, "덱 세션 정답률 2회 기록");

console.log("\n3. known 기반 중복 제외");
const pool = [{ en: "Apple" }, { en: "Cherry" }, { en: "BANANA" }];
const unseen = filterUnseen(pool, s.known);
ok(unseen.length === 1 && unseen[0].en === "Cherry", "이미 아는 단어(대소문자 무시) 제외");

console.log("\n4. 마이그레이션 (기존 learned → 초기 단계)");
const deckUnits = [
  { deck: "lib", unitId: "d0", cardCount: 2, words: [{ en: "a" }, { en: "b" }] }, // 완료
  { deck: "lib", unitId: "d1", cardCount: 2, words: [{ en: "c" }, { en: "d" }] }, // 부분
];
const learnedMap = { a: true, b: true, c: true }; // d0 완료, d1 부분
let m = migrate(emptyState(), deckUnits, learnedMap, T0);
ok(m.units[unitKey("lib", "d0")].stage === "learned", "20/20 완료 Day → learned");
ok(!m.units[unitKey("lib", "d1")], "부분 진행 Day → new(항목 없음)");

console.log("\n5. 데일리 플랜 우선순위 + 60장 상한");
// 복습 대상 3개(단계 다르게) + 신규 다수
let p = emptyState();
p.units[unitKey("lib", "d0")] = { stage: "learned", stampedAt: T0 };  // 1차복습 대기
p.units[unitKey("lib", "d1")] = { stage: "review1", stampedAt: T0 };  // 2차복습 대기
p.units[unitKey("hs", "d0")] = { stage: "review2", stampedAt: T0 };   // 3차복습 대기
const planUnits = [
  { deck: "lib", unitId: "d0", cardCount: 20, words: [] },
  { deck: "lib", unitId: "d1", cardCount: 20, words: [] },
  { deck: "hs", unitId: "d0", cardCount: 20, words: [] },
  { deck: "lib", unitId: "d2", cardCount: 20, words: [] }, // 신규
  { deck: "lib", unitId: "d3", cardCount: 20, words: [] }, // 신규
];
const plan = buildDailyPlan(p, planUnits, T0 + 30 * DAY_MS);
ok(plan.reviews.length === 3, "복습 대상 3개 모두 due");
ok(plan.reviews[0].stage === "review2" && plan.reviews[2].stage === "learned", "우선순위: 늦은 단계 먼저");
ok(plan.reviewCards === 60, "복습 카드 60장");
ok(plan.newLocked === true, "복습만으로 60장 → 신규 잠금");
ok(plan.news.length === 0, "신규 없음(잠김)");

// 복습이 적을 때는 신규가 60장까지 채워짐
let p2 = emptyState();
p2.units[unitKey("lib", "d0")] = { stage: "learned", stampedAt: T0 }; // 20장 복습
const plan2 = buildDailyPlan(p2, planUnits, T0 + 30 * DAY_MS);
ok(plan2.reviewCards === 20 && !plan2.newLocked, "복습 20장 → 신규 허용");
ok(plan2.totalCards <= DAILY_CARD_CAP, "총 카드 60장 이하 유지 (실제 " + plan2.totalCards + ")");

console.log("\n6. 덱 졸업 판정 (연속 3회 90%+)");
let g = emptyState();
g.sessions.lib = [0.95, 0.92, 0.91];
ok(isGraduable(g, "lib") === true, "연속 3회 90%+ → 졸업 가능");
g.sessions.hs = [0.95, 0.8, 0.95];
ok(isGraduable(g, "hs") === false, "중간에 90% 미만 있으면 불가");
g.sessions.biz = [0.95, 0.95];
ok(isGraduable(g, "biz") === false, "3회 미만이면 불가");

console.log("\n7. 예상 소요일");
ok(expectedDays(0) === 0 && expectedDays(1) === 1 && expectedDays(40) === 2, "남은 단어÷20 올림");

console.log("\n" + (fail === 0 ? "🎉 SR 엔진 전체 통과" : `💥 실패 ${fail}건`));
process.exit(fail === 0 ? 0 : 1);
