const JAPANESE_TEXT = /[\u3040-\u30ff\u3400-\u9fff]/;
const JAPANESE_READING = /[\u3040-\u30ff]/;
const TERMINAL_PUNCTUATION = /[.!?。！？…]$/;

export const MAX_TTS_CHARACTERS = 5000;

export function getWordSpeechText(word) {
  const written = String(word?.en || "").trim();
  const reading = String(word?.pron || "").trim();

  if (JAPANESE_TEXT.test(written) && JAPANESE_READING.test(reading)) {
    return reading;
  }

  return written;
}

export function prepareTtsText(text) {
  const value = String(text || "").trim();
  if (!value) return "";
  if (value.length > MAX_TTS_CHARACTERS) return null;
  if (TERMINAL_PUNCTUATION.test(value)) return value;

  return value + (JAPANESE_TEXT.test(value) ? "。" : ".");
}
