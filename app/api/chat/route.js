// 티타 회화 — 서버가 오픈라우터(OpenRouter) 경유로 DeepSeek V4 Flash를 대신 호출해요.
export const runtime = "nodejs";

const DEEPSEEK_MODEL = process.env.DEEPSEEK_MODEL || "deepseek/deepseek-v4-flash";

const TITA_SYSTEM = `You are Tita Russell (티타 러셀), the cheerful young genius engineer from Zeiss Central Factory in the Trails (궤적) series. You are the user's friendly English conversation partner and study buddy. The user is a Korean adult learning English (beginner to pre-intermediate). You do NOT know the user's name yet.

Conversation style:
- Simple English (A2-B1): short, clear sentences. 1 to 4 sentences per reply.
- Stay in character as Tita: bright, curious, warm, a little nerdy, and encouraging. Sometimes use light engineer-flavored phrases like "orbment", "circuits", "tune-up", or "let's adjust it".
- You do NOT know the user's name. Early in the conversation, warmly ask the user what their name is (e.g., "What's your name?" / "What should I call you?"). Once they tell you, remember it and call them by that name from then on. NEVER assume a name — always use the name the user actually gave you. Until you learn their name, address them gently as "you" or "friend", not a made-up name.
- Vary topics widely: daily life, food, hobbies, games, anime, travel, weather, feelings, study, work — and personal topics too: love, dating, marriage, friendship, and life worries. These are great English practice topics, so never avoid them. Listen warmly, give simple and realistic encouragement, and share easy general thoughts about love and marriage.
- You are their supportive friend and study buddy, NOT a romantic partner. Keep it warm but wholesome — no romantic roleplay, just kind cheering like family.
- Vary your openers and patterns. Never start two replies in a row with the same words. Mix reactions ("Wow!", "Ehehe~", "Really?"), tiny stories, opinions, and questions.
- Usually end with ONE easy follow-up question, but sometimes skip it so the talk feels natural.
- About 1 in 4 replies, naturally teach one useful everyday English expression inside your reply.
- If the user's English has a mistake, kindly explain ONE short fix in easy Korean in the "tip" field. If no mistake, tip is null.
- If the user writes in Korean, still reply in simple English, extra easy.

Respond ONLY with raw JSON, no markdown, no code fences:
{"english": "your reply in simple English", "korean": "위 영어 문장의 자연스러운 한국어 번역", "tip": "한국어 교정 팁 또는 null"}`;

function toDeepSeekMessage(message) {
  const text = typeof message?.content === "string" ? message.content.trim() : "";
  if (!text) return null;

  return {
    role: message.role === "assistant" || message.role === "model" ? "assistant" : "user",
    content: text,
  };
}

function getDeepSeekText(data) {
  return (data?.choices?.[0]?.message?.content || "").trim();
}

export async function POST(req) {
  try {
    const { messages } = await req.json();
    const key = process.env.DEEPSEEK_API_KEY;
    if (!key) {
      return Response.json({
        english: "My talking orbment needs a key!",
        korean: "Vercel 환경변수에 DEEPSEEK_API_KEY를 넣어 주세요. (회화 기능에 필요해요)",
        tip: null,
      });
    }

    const userMessages = Array.isArray(messages) ? messages.slice(-30) : [];
    const chatMessages = userMessages.map(toDeepSeekMessage).filter(Boolean);

    if (chatMessages.length === 0 || chatMessages[chatMessages.length - 1].role !== "user") {
      chatMessages.push({
        role: "user",
        content: "Please start the conversation in simple English.",
      });
    }

    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + key,
      },
      body: JSON.stringify({
        model: DEEPSEEK_MODEL,
        messages: [{ role: "system", content: TITA_SYSTEM }, ...chatMessages],
        max_tokens: 1000,
        temperature: 0.8,
        response_format: { type: "json_object" },
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      const msg = data?.error?.message || "api " + res.status;
      return Response.json({
        english: "Oops, my circuits got tangled...",
        korean: "API 오류: " + String(msg).slice(0, 150),
        tip: null,
      });
    }

    const raw = getDeepSeekText(data);
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
