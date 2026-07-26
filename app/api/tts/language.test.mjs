import assert from "node:assert/strict";
import test from "node:test";

import { getTtsLanguageOptions } from "./language.mjs";

test("일본어 문장은 일본어와 일본어 정규화를 사용한다", () => {
  assert.deepEqual(getTtsLanguageOptions("こんにちは。ティタです。"), {
    language_code: "ja",
    apply_language_text_normalization: true,
  });
});

test("영어 문장은 영어로 처리하고 일본어 정규화를 사용하지 않는다", () => {
  assert.deepEqual(getTtsLanguageOptions("Hello! I'm Tita!"), {
    language_code: "en",
  });
});

test("일본어와 영어가 섞인 문장은 특정 언어를 강제하지 않는다", () => {
  assert.deepEqual(getTtsLanguageOptions("ティタ says hello."), {});
});

test("숫자와 기호만 있는 문장은 특정 언어를 강제하지 않는다", () => {
  assert.deepEqual(getTtsLanguageOptions("123!?"), {});
});
