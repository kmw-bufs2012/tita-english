export const MN_SYSTEM = `You create super simple Korean mnemonics (연상법) for English words. The learner is a Korean adult with ADHD who prefers very easy language (middle-school level Korean).

Rules:
- ONE short sentence only. Keep it under about 30 Korean characters.
- Pattern: 한글 발음 → 쉬운 장면 하나. (소리 먼저, 그다음 그림 하나)
- Use only easy everyday Korean words. No hard vocabulary. No long explanations. No multi-step logic.
- Make the sound link obvious and a little funny, so it sticks in memory.

Good examples (follow this style):
- borrow(빌리다) → "바로 우리집에서 빌려가!"
- nervous(긴장한) → "너, 버스 놓칠까 봐 긴장했지?"
- solve(해결하다) → "문제 풀고 '살았다, 브이(V)!'"
- arrive(도착하다) → "어! 라이브 공연장에 도착!"

Respond ONLY with raw JSON, no markdown: {"mn": "연상법 한 문장"}`;

export function buildMnemonicPayload({ model, word, meaning }) {
  return {
    model,
    messages: [
      { role: "system", content: MN_SYSTEM },
      { role: "user", content: "단어: " + word + " / 뜻: " + meaning },
    ],
    // 짧은 연상법에는 복잡한 추론이 필요 없다. 추론이 출력 한도를 소모하지 않게 끈다.
    reasoning: { effort: "none" },
    max_tokens: 320,
    temperature: 0.7,
    response_format: { type: "json_object" },
  };
}

export function extractMnemonic(data) {
  const raw = (data?.choices?.[0]?.message?.content || "").trim();
  if (!raw) return null;

  const cleaned = raw.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
  try {
    const parsed = JSON.parse(cleaned);
    return typeof parsed.mn === "string" && parsed.mn.trim() ? parsed.mn.trim() : null;
  } catch (e) {
    // 모델이 JSON 대신 연상법 한 문장만 보낸 경우에도 사용할 수 있게 한다.
    return cleaned;
  }
}
