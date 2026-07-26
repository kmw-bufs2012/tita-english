import assert from "node:assert/strict";
import test from "node:test";

import { buildMnemonicPayload, extractMnemonic } from "./core.mjs";

test("연상법 요청은 불필요한 추론을 끈다", () => {
  const payload = buildMnemonicPayload({
    model: "deepseek/deepseek-v4-flash",
    word: "borrow",
    meaning: "빌리다",
  });

  assert.deepEqual(payload.reasoning, { effort: "none" });
  assert.equal(payload.max_tokens, 320);
  assert.equal(payload.messages[1].content, "단어: borrow / 뜻: 빌리다");
});

test("정상 JSON 응답에서 연상법을 꺼낸다", () => {
  const data = { choices: [{ message: { content: '{"mn":"바로 우리집에서 빌려가!"}' } }] };
  assert.equal(extractMnemonic(data), "바로 우리집에서 빌려가!");
});

test("코드 블록 JSON과 일반 문장도 처리한다", () => {
  const fenced = { choices: [{ message: { content: '```json\n{"mn":"어! 라이브 공연장에 도착!"}\n```' } }] };
  const plain = { choices: [{ message: { content: "문제 풀고 살았다, 브이!" } }] };

  assert.equal(extractMnemonic(fenced), "어! 라이브 공연장에 도착!");
  assert.equal(extractMnemonic(plain), "문제 풀고 살았다, 브이!");
});

test("비어 있거나 mn이 없는 응답은 실패로 처리한다", () => {
  assert.equal(extractMnemonic({ choices: [{ message: { content: "" } }] }), null);
  assert.equal(extractMnemonic({ choices: [{ message: { content: '{"other":"값"}' } }] }), null);
});
