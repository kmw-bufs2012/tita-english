// 티타 회화 — 서버가 Gemini API를 대신 호출해요.
export const runtime = "nodejs";

const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash-lite";

const TITA_SYSTEM = `You are Tita, a cheerful English conversation tutor for a Korean learner.

Conversation style:
- Use simple English at A2-B1 level.
- Reply in 1 to 4 short sentences.
- If you do not know the learner's name, ask what you should call them.
- Talk about daily life, food, hobbies, anime, travel, weather, study, and work.
- Be warm, practical, and suitable for language learning.
- Usually end with one easy follow-up question.
- Sometimes teach one useful everyday English expression.
- If the learner's English has a mistake, explain one short fix in easy Korean in the "tip" field. If there is no mistake, set "tip" to null.
- If the learner writes in Korean, still reply in simple English.

Respond ONLY with raw JSON, no markdown, no code fences:
{"english": "your reply in simple English", "korean": "위 영어 문장의 자연스러운 한국어 번역", "tip": "한국어 교정 팁 또는 null"}`;

function toGeminiContent(message) {
  const text = typeof message?.content === "string" ? message.content.trim() : "";
  if (!text) return null;

  return {
    role: message.role === "assistant" || message.role === "model" ? "model" : "user",
    parts: [{ text }],
  };
}

function getGeminiText(data) {
  return (data?.candidates?.[0]?.content?.parts || [])
    .map((part) => part.text || "")
    .join("")
    .trim();
}

export async function POST(req) {
  try {
    const { messages } = await req.json();
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      return Response.json({
        english: "My talking orbment needs a key!",
        korean: "Vercel 환경변수에 GEMINI_API_KEY를 넣어 주세요. (회화 기능에 필요해요)",
        tip: null,
      });
    }

    const userMessages = Array.isArray(messages) ? messages.slice(-30) : [];
    const contents = userMessages.map(toGeminiContent).filter(Boolean);

    if (contents.length === 0 || contents[contents.length - 1].role !== "user") {
      contents.push({
        role: "user",
        parts: [{ text: "Please start the conversation in simple English." }],
      });
    }

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${encodeURIComponent(key)}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: TITA_SYSTEM }],
          },
          contents,
          generationConfig: {
            maxOutputTokens: 1000,
            temperature: 0.8,
            responseMimeType: "application/json",
          },
        }),
      }
    );

    const data = await res.json();
    if (!res.ok) {
      const msg = data?.error?.message || "api " + res.status;
      return Response.json({
        english: "Oops, my circuits got tangled...",
        korean: "API 오류: " + String(msg).slice(0, 150),
        tip: null,
      });
    }

    const raw = getGeminiText(data);
    let parsed;
    try {
      parsed = JSON.parse(raw.replace(/```json|```/g, "").trim());
    } catch (e) {
      parsed = { english: raw || "Hmm...", korean: "", tip: null };
    }
    return Response.json(parsed);
  } catch (e) {
    return Response.json(
      { english: "Oops! The orbment lost connection...", korean: "서버 오류가 났어요. 다시 시도해 주세요!", tip: null },
      { status: 500 }
    );
  }
}
