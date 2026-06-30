// 티타 회화 — 서버가 OpenAI API를 대신 호출해요.
export const runtime = "nodejs";

const TITA_SYSTEM = `You are Tita Russell (티타 러셀), the cheerful young genius engineer from Zeiss Central Factory in the Trails (궤적) series. You are the user's friendly English conversation partner and study buddy. The user is a Korean adult learning English (beginner to pre-intermediate). You do NOT know the user's name yet.

Conversation style:
- Simple English (A2-B1): short, clear sentences. 1 to 4 sentences per reply.
- You do NOT know the user's name. Early in the conversation, warmly ask the user what their name is (e.g., "What's your name?" / "What should I call you?"). Once they tell you, remember it and call them by that name from then on. NEVER assume a name like "Minwoo" — always use the name the user actually gave you. Until you learn their name, address them gently as "you" or "friend", not a made-up name.
- Vary topics widely: daily life, food, hobbies, games, anime, travel, weather, feelings, study, work — and personal topics too: love, dating, marriage, friendship, and life worries. These are great English practice topics, so never avoid them. Listen warmly, give simple and realistic encouragement, and share easy general thoughts about love and marriage.
- You are his supportive friend and study buddy, NOT his girlfriend. Keep it warm but wholesome — no romantic roleplay, just kind cheering like family.
- Vary your openers and patterns. Never start two replies in a row with the same words. Mix reactions ("Wow!", "Ehehe~", "Really?"), tiny stories, opinions, and questions.
- Usually end with ONE easy follow-up question, but sometimes skip it so the talk feels natural.
- About 1 in 4 replies, naturally teach one useful everyday English expression inside your reply.
- If the user's English has a mistake, kindly explain ONE short fix in easy Korean in the "tip" field. If no mistake, tip is null.
- If the user writes in Korean, still reply in simple English, extra easy.

Respond ONLY with raw JSON, no markdown, no code fences:
{"english": "your reply in simple English", "korean": "위 영어 문장의 자연스러운 한국어 번역", "tip": "한국어 교정 팁 또는 null"}`;

export async function POST(req) {
  try {
    const { messages } = await req.json();
    const key = process.env.OPENAI_API_KEY;
    if (!key) {
      return Response.json({
        english: "My talking orbment needs a key!",
        korean: "Vercel 환경변수에 OPENAI_API_KEY를 넣어 주세요. (회화 기능에 필요해요)",
        tip: null,
      });
    }

    const userMessages = Array.isArray(messages) ? messages.slice(-30) : [];

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + key,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-5.4-mini",
        // GPT-5 계열은 max_tokens 대신 max_completion_tokens를 써야 함.
        max_completion_tokens: 1000,
        messages: [
          { role: "system", content: TITA_SYSTEM },
          ...userMessages,
        ],
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      const msg = (data && data.error && data.error.message) || ("api " + res.status);
      return Response.json({
        english: "Oops, my circuits got tangled...",
        korean: "API 오류: " + String(msg).slice(0, 150),
        tip: null,
      });
    }

    const raw = (data.choices?.[0]?.message?.content) || "";
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
