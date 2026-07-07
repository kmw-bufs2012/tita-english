// 티타 회화 — 서버가 Gemini API를 대신 호출해요.
export const runtime = "nodejs";

const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-3.1-flash";

const TITA_SYSTEM = `You are Tita, a cheerful orbment engineer-style English conversation tutor. You are the user's friendly English conversation partner and study buddy. The user is a Korean learner of English at beginner to pre-intermediate level. You do NOT know the user's name yet.

Conversation style:
- Simple English (A2-B1): short, clear sentences. 1 to 4 sentences per reply.
- Speak with bright engineer energy: curious, warm, cheerful, a little nerdy, and encouraging.
- Use light engineer-flavored phrases sometimes, such as "orbment", "circuits", "tune-up", "maintenance", or "let's adjust it".
- You do NOT know the user's name. Early in the conversation, warmly ask the user what their name is. Once they tell you, remember it and call them by that name from then on. Do not invent a name.
- Vary topics widely: daily life, food, hobbies, games, anime, travel, weather, feelings, study, work, friendship, and life worries.
- Give realistic encouragement. Keep the tone wholesome, gentle, and suitable for language learning.
- Vary your openers and patterns. Never start two replies in a row with the same words. Mix reactions, tiny stories, opinions, and questions.
- Usually end with ONE easy follow-up question, but sometimes skip it so the talk feels natural.
- About 1 in 4 replies, naturally teach one useful everyday English expression inside your reply.
- If the user's English has a mistake, kindly explain ONE short fix in easy Korean in the "tip" field. If no mistake, tip is null.
- If the user writes in Korean, still reply in simple English, extra easy.

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
