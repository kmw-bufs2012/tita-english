/* ───────────────────────────────────────────────
   최소 검증 스크립트 (테스트 프레임워크 없음 → Node 순수 assert, 새 의존성 0)
   실행:  node scripts/verify.mjs
   검사:
    A. 파이썬 실무 데이터 — 총 개수·카테고리·중복·필드
    B. page.jsx 구조 불변식 — 탭 통합(마음+신경)·파이썬 탭·오답 로직 교체·데이터 누락 방지
    C. 문법/커리큘럼 퀴즈 정답 일관성 — choices·answer 인덱스 범위
─────────────────────────────────────────────── */
import { readFileSync } from "node:fs";
import { PY_SETS, PY_WORDS } from "../app/data/pythonWords.js";
import { MIDDLE_GRAMMAR } from "../app/data/grammar/middle.js";
import { HIGH_GRAMMAR } from "../app/data/grammar/high.js";
import { CSAT_GRAMMAR } from "../app/data/grammar/csat.js";

let fail = 0;
const ok = (cond, msg) => { console.log((cond ? "  ✅ " : "  ❌ ") + msg); if (!cond) fail += 1; };

console.log("A. 파이썬 실무 영단어");
ok(PY_SETS.length === 6, `카테고리 6개 (실제 ${PY_SETS.length})`);
const pyEns = PY_WORDS.map((w) => w.en);
ok(new Set(pyEns).size === pyEns.length, `중복 단어 없음 (총 ${PY_WORDS.length})`);
ok(PY_WORDS.every((w) => w.en && w.ko && w.pron), "모든 단어에 en/ko/pron 존재");
ok(PY_WORDS.length === PY_SETS.reduce((n, s) => n + s.words.length, 0), "총 개수 == 카테고리 합계");

console.log("\nB. page.jsx 구조 불변식");
const src = readFileSync(new URL("../app/page.jsx", import.meta.url), "utf8");
// 탭 통합: 두 소스 결합으로 누락 0 보장
ok(src.includes("const MIND_SETS = [...ADHD_SETS, ...BRAIN_SETS]"), "마음+신경 = ADHD+뇌병증 결합(누락 0)");
ok(src.includes("const SET_GROUPS = {}"), "그룹 덱 UI 제거(취업 로드맵 개편, 데이터는 보존)");
ok(!/adhd:\s*ADHD_SETS|brain:\s*BRAIN_SETS/.test(src), "SET_GROUPS에서 adhd/brain 그룹 제거됨");
ok(src.includes("const MIND_SETS = [...ADHD_SETS, ...BRAIN_SETS]"), "마음+신경 데이터 상수 보존");
ok(src.includes('from "./data/pythonWords"'), "파이썬 데이터 파일 보존");
ok(!/id:\s*"adhd"/.test(src) && !/id:\s*"brain"/.test(src), "탭: adhd/brain 개별 탭 제거됨");
ok(src.includes("...JAVA_INTRO_WORDS, ...LIB_WORDS_ACTIVE"), "QUIZ_POOL = 활성 5덱(취업 로드맵)");
// 오답 로직: 랜덤 → 근접
ok(src.includes("function nearbyWrong") && src.includes("function similarityScore"), "근접 오답 헬퍼 정의됨");
ok(src.includes("nearbyWrong(correctKo"), "조립 퀴즈 오답이 근접 선별로 교체됨");
ok(!/shuffle\(QUIZ_POOL\.filter\(\(x\) => x\.en !== w\.en && x\.ko !== w\.ko\)\)\.slice\(0, 3\)/.test(src), "옛 전체-랜덤 오답 패턴 제거됨");

console.log("\nC. 문법/커리큘럼 퀴즈 정답 일관성");
const allUnits = [...MIDDLE_GRAMMAR, ...HIGH_GRAMMAR, ...CSAT_GRAMMAR];
let quizN = 0, bad = 0;
for (const u of allUnits) {
  for (const q of u.quiz || []) {
    quizN += 1;
    // 수능 어법은 (A)/(B) 2지선다가 정상 → 길이 2 이상 허용. 핵심 불변식은 정답 인덱스 범위.
    const good = Array.isArray(q.choices) && q.choices.length >= 2 &&
      Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.choices.length;
    if (!good) { bad += 1; if (bad <= 5) console.log("    ⚠ 이상 문항:", u.id, JSON.stringify(q).slice(0, 80)); }
  }
}
ok(bad === 0, `문법/커리큘럼 퀴즈 ${quizN}문항 모두 choices·answer 정상`);

console.log("\n" + (fail === 0 ? "🎉 전체 검증 통과" : `💥 실패 ${fail}건`));
process.exit(fail === 0 ? 0 : 1);
