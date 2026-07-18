/* 취업 로드맵 개편 검증 (Node 순수 assert, 새 의존성 0)
   실행: node scripts/verify-career.mjs
   ①덱별 정확 수량 ②신규 4덱 상호 중복 0 ③필드 완비 ④SR 학습 순서
   ⑤ModeTabs 표시 순서 ⑥QUIZ_POOL=활성 5덱 2,550 ⑦제거 덱 데이터 잔존
   ⑧중학 제거 300(중복4+선별296) 목록 존재 */
import { readFileSync } from "node:fs";
import { JAVA_INTRO_WORDS } from "../app/data/javaIntro.js";
import { IT_BASIC_WORDS } from "../app/data/itBasic.js";
import { IT_ADV_WORDS } from "../app/data/itAdvanced.js";
import { IT_FIELD_WORDS } from "../app/data/itField.js";
import { MS_TRIM_REMOVED, MS_TRIM_SET } from "../app/data/middleTrim.js";
import { SR_DECKS } from "../app/lib/review.js";

let fail = 0;
const ok = (c, m) => { console.log((c ? "  ✅ " : "  ❌ ") + m); if (!c) fail += 1; };
const src = readFileSync(new URL("../app/page.jsx", import.meta.url), "utf8");

console.log("① 덱별 수량");
ok(JAVA_INTRO_WORDS.length === 200, `Java 입문 = 200 (실제 ${JAVA_INTRO_WORDS.length})`);
ok(IT_BASIC_WORDS.length === 200, `IT 기초 = 200 (실제 ${IT_BASIC_WORDS.length})`);
ok(IT_ADV_WORDS.length === 500, `IT 심화 = 500 (실제 ${IT_ADV_WORDS.length})`);
ok(IT_FIELD_WORDS.length === 150, `IT 실무 = 150 (실제 ${IT_FIELD_WORDS.length})`);
// 중학 1500: page.jsx의 WORD_LIB에서 동일 로직으로 재현
const libम = src.match(/const WORD_LIB =\n?\s*"([\s\S]*?)";/);
const libAll = libम[1].split(";").filter((s) => s.includes("|")).map((s) => s.split("|")[0].trim());
const seen = new Set();
const active = [];
for (const w of libAll) { if (seen.has(w) || MS_TRIM_SET.has(w)) continue; seen.add(w); active.push(w); }
ok(libAll.length === 1800, `중학 원본 1800 보존 (실제 ${libAll.length})`);
ok(active.length === 1500, `중학 활성 = 1500 (실제 ${active.length})`);
ok(Math.ceil(active.length / 20) === 75, "중학 Day 75개");

console.log("\n② 신규 4덱 상호 중복 0 (소문자 정규화)");
const lc = (a) => a.map((w) => w.en.toLowerCase());
const all4 = [...lc(JAVA_INTRO_WORDS), ...lc(IT_BASIC_WORDS), ...lc(IT_ADV_WORDS), ...lc(IT_FIELD_WORDS)];
ok(new Set(all4).size === all4.length, `4덱 합계 ${all4.length}개 전부 유일`);

console.log("\n③ 필드 완비 (en/pron/ko/mn)");
const decks = { Java: JAVA_INTRO_WORDS, 기초: IT_BASIC_WORDS, 심화: IT_ADV_WORDS, 실무: IT_FIELD_WORDS };
for (const [k, v] of Object.entries(decks)) ok(v.every((w) => w.en && w.pron && w.ko && w.mn), k + " 전 항목 4필드");

console.log("\n④ SR 학습 순서 (Java→기초→중학→심화→실무)");
ok(JSON.stringify(SR_DECKS) === JSON.stringify(["java", "itb", "lib", "ita", "itf"]), "SR_DECKS = " + JSON.stringify(SR_DECKS));
const metaOrder = [...src.matchAll(/\{ deck: "(\w+)", label: "[^"]+", days: DAYS\w*/g)].map((m) => m[1]);
ok(JSON.stringify(metaOrder) === JSON.stringify(["java", "itb", "lib", "ita", "itf"]), "SR_DECK_META 순서 = " + JSON.stringify(metaOrder));
ok(src.includes('const SR_NEXT_DECK = { java: "itb", itb: "lib", lib: "ita", ita: "itf", itf: null }'), "졸업 경로 java→itb→lib→ita→itf");

console.log("\n⑤ ModeTabs 표시 순서 (Java→중학→기초→심화→실무)");
const tabsBlock = src.match(/function ModeTabs[\s\S]*?\];/)[0];
const tabOrder = [...tabsBlock.matchAll(/\{ id: "(\w+)"/g)].map((m) => m[1]);
ok(JSON.stringify(tabOrder) === JSON.stringify(["java", "lib", "itb", "ita", "itf"]), "탭 순서 = " + JSON.stringify(tabOrder));

console.log("\n⑥ QUIZ_POOL = 활성 5덱 2,550");
ok(src.includes("const QUIZ_POOL = [...JAVA_INTRO_WORDS, ...LIB_WORDS_ACTIVE, ...IT_BASIC_WORDS, ...IT_ADV_WORDS, ...IT_FIELD_WORDS]"), "QUIZ_POOL 구성 정확");
const expectedTotal = 200 + active.length + 200 + 500 + 150;
ok(expectedTotal === 2550, `합계 2,550 (계산 ${expectedTotal})`);

console.log("\n⑦ 제거 덱 데이터 상수 잔존");
for (const c of ["WORD_LIB_HS", "const SETS = [", "MIND_SETS", "PY_SETS", "WORD_LIB_PRO", "WORD_LIB_GRAD", "WORD_LIB_BIZ"]) ok(src.includes(c), c + " 보존");
ok(src.includes("const SET_GROUPS = {}"), "그룹 덱 UI 제거(SET_GROUPS 비움)");

console.log("\n⑧ 중학 제거 목록");
ok(MS_TRIM_REMOVED.length === 296, `선별 296 (실제 ${MS_TRIM_REMOVED.length}) — 중복 정리 4와 합쳐 총 300 제거`);
ok(MS_TRIM_REMOVED.every((w) => libAll.includes(w)), "제거 대상 전부 원본 1800에 실존");
ok(active.every((w) => !MS_TRIM_SET.has(w)), "활성 1500에 제거어 미포함");

console.log("\n" + (fail === 0 ? "🎉 취업 로드맵 검증 전체 통과" : `💥 실패 ${fail}건`));
process.exit(fail === 0 ? 0 : 1);
