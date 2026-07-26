import assert from "node:assert/strict";
import test from "node:test";

import {
  MAX_TTS_CHARACTERS,
  getWordSpeechText,
  prepareTtsText,
} from "./ttsText.mjs";

test("일본어 단어는 저장된 정확한 읽기를 사용한다", () => {
  assert.equal(getWordSpeechText({ en: "出納", pron: "すいとう" }), "すいとう");
  assert.equal(getWordSpeechText({ en: "老舗", pron: "しにせ" }), "しにせ");
});

test("영단어는 한글 발음 표기 대신 원문을 사용한다", () => {
  assert.equal(getWordSpeechText({ en: "borrow", pron: "바로우" }), "borrow");
});

test("마지막 음절이 잘리지 않도록 문장 끝 표시를 붙인다", () => {
  assert.equal(prepareTtsText("すいとう"), "すいとう。");
  assert.equal(prepareTtsText("Hello"), "Hello.");
  assert.equal(prepareTtsText("こんにちは！"), "こんにちは！");
});

test("긴 문장을 몰래 자르지 않고 거부한다", () => {
  assert.equal(prepareTtsText("あ".repeat(MAX_TTS_CHARACTERS + 1)), null);
});
