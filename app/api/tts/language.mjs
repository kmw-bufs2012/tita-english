const JAPANESE_CHARACTERS = /[\u3040-\u30ff\u3400-\u9fff]/;
const LATIN_CHARACTERS = /[A-Za-z]/;

export function getTtsLanguageOptions(text) {
  const value = String(text || "");
  const hasJapanese = JAPANESE_CHARACTERS.test(value);
  const hasLatin = LATIN_CHARACTERS.test(value);

  if (hasJapanese && !hasLatin) {
    return {
      language_code: "ja",
      apply_language_text_normalization: true,
    };
  }

  if (hasLatin && !hasJapanese) {
    return { language_code: "en" };
  }

  // 언어가 섞였거나 문자가 없는 경우 ElevenLabs가 문맥으로 판별하게 둔다.
  return {};
}
