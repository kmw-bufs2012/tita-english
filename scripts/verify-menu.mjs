/* 메뉴 개편 검증 (Node 순수 assert, 새 의존성 0)
   실행: node scripts/verify-menu.mjs
   ①문법 레벨=중학1개 ②문법 데이터 잔존 ③SCREEN_KEYS에 compose·chat 없음
   ④작문·회화 컴포넌트·데이터 상수 잔존 ⑤문법 ADHD 코스 기능 코드 존재
   ⑥하단 네비 grid-cols-5 & 탭 5개 */
import { readFileSync } from "node:fs";

let fail = 0;
const ok = (c, m) => { console.log((c ? "  ✅ " : "  ❌ ") + m); if (!c) fail += 1; };
const src = readFileSync(new URL("../app/page.jsx", import.meta.url), "utf8");

console.log("① 문법 레벨 = 중학 1개");
const levelsBlock = src.match(/const GRAMMAR_LEVELS = \[([\s\S]*?)\n\];/)[1];
const levelIds = [...levelsBlock.matchAll(/\{ id: "(\w+)"/g)].map((m) => m[1]);
ok(levelIds.length === 1 && levelIds[0] === "ms", "GRAMMAR_LEVELS = " + JSON.stringify(levelIds));

console.log("\n② 문법 데이터·상수 보존");
ok(src.includes("ms: MIDDLE_GRAMMAR") && src.includes("hs: HIGH_GRAMMAR") && src.includes("sn: CSAT_GRAMMAR"), "GRAMMAR 객체에 ms/hs/sn 데이터 잔존");
ok(/co:\s*\[/.test(src) && /gr:\s*\[/.test(src), "GRAMMAR 객체에 co/gr 데이터 잔존");
ok(src.includes("MIDDLE_GRAMMAR") && src.includes("HIGH_GRAMMAR") && src.includes("CSAT_GRAMMAR"), "MIDDLE/HIGH/CSAT_GRAMMAR 상수 참조 유지");

console.log("\n③ SCREEN_KEYS에 compose·chat 없음");
const screenLine = src.match(/const SCREEN_KEYS = \[(.*?)\];/)[1];
ok(!screenLine.includes("compose") && !screenLine.includes("chat"), "SCREEN_KEYS = [" + screenLine + "]");
ok(screenLine.includes("grammar") && screenLine.includes("write"), "문법·필기 탭은 유지");
ok(!src.includes('screen === "compose"') && !src.includes('screen === "chat"'), "compose/chat 렌더 라인 제거됨");

console.log("\n④ 작문·회화 컴포넌트·데이터 보존");
ok(src.includes("function ComposeScreen"), "ComposeScreen 컴포넌트 잔존");
ok(src.includes("function ChatScreen"), "ChatScreen 컴포넌트 잔존");
ok(/SENTENCE_PROMPTS\s*=/.test(src), "SENTENCE_PROMPTS 데이터 잔존");
ok(/BIZ_PROMPTS\s*=/.test(src) && /FREE_TOPICS\s*=/.test(src), "BIZ_PROMPTS·FREE_TOPICS 데이터 잔존");

console.log("\n⑤ 문법 ADHD 코스 기능");
ok(src.includes("tita-grammar-v1"), "완료 저장 키 tita-grammar-v1");
ok(src.includes("const grammarComplete") && src.includes("addXp(10)"), "완료 시 +10XP");
ok(src.includes("오늘의 문법"), "오늘의 문법 카드(다음 미완료 유닛)");
ok(src.includes("이어서 하기"), "이어하기 버튼");
ok(src.includes("중학 문법 진행") && src.includes("doneCount"), "진행률 바 n/40");
ok(src.includes("onFinish") && src.includes("확인문제 끝까지 풀면 유닛 완료"), "확인문제 완료 → 유닛 완료 판정");
ok(src.includes("grammar={grammar} onComplete={grammarComplete} setLast={grammarSetLast}"), "GrammarScreen 부모 배선");

console.log("\n⑥ 하단 네비 5탭");
const navBlock = src.match(/max-w-md mx-auto grid grid-cols-(\d)/);
ok(navBlock && navBlock[1] === "5", "하단 네비 grid-cols-" + (navBlock ? navBlock[1] : "?"));
const navArr = src.match(/\{ key: "home", Icon: Home, label: "홈" \}[\s\S]*?\]\.map\(\(\{ key, Icon, label \}\)/);
const navKeys = navArr ? [...navArr[0].matchAll(/key: "(\w+)"/g)].map((m) => m[1]) : [];
ok(JSON.stringify(navKeys) === JSON.stringify(["home", "cards", "write", "quiz", "grammar"]), "네비 탭 = " + JSON.stringify(navKeys));

console.log("\n" + (fail === 0 ? "🎉 메뉴 개편 검증 전체 통과" : `💥 실패 ${fail}건`));
process.exit(fail === 0 ? 0 : 1);
