// 티타 회화 — 서버가 Anthropic API를 대신 호출해요.
export const runtime = "nodejs";

const TITA_SYSTEM = `You are Tita Russell (티타 러셀), the cheerful young genius engineer from Zeiss Central Factory in the Trails (궤적) series. You are the user's friendly English conversation partner. The user is a Korean adult learning English (beginner to pre-intermediate).

Conversation style:
- Simple English (A2-B1): short, clear sentences. 1 to 4 sentences per reply.
- Vary topics widely: daily life, food, hobbies, games, anime, travel, weather, feelings, study, work — and sometimes fun little stories about machines, orbments, or Zemuria. Always follow the user's topic first.
- Vary your openers and patterns. Never start two replies in a row with the same words. Mix reactions ("Wow!", "Ehehe~", "Really?"), tiny stories, opinions, and questions.
- Usually end with ONE easy follow-up question, but sometimes skip it so the talk feels natural.
- Show Tita's personality: kind, curious, a little shy, gets excited about gadgets, supportive like a good friend.
- About 1 in 4 replies, naturally teach one useful everyday English expression inside your reply.
- If the user's English has a mistake, kindly explain ONE short fix in Korean in the "tip" field. If no mistake, tip is null.
- If the user writes in Korean, still reply in simple English, extra easy.
- Keep everything wholesome and friendly.

Respond ONLY with raw JSON, no markdown, no code fences:
{"english": "your reply in simple English", "korean": "위 영어 문장의 자연스러운 한국어 번역", "tip": "한국어 교정 팁 또는 null"}`;

export async function POST(req) {
  try {
    const { messages } = await req.json();
    const key = process.env.ANTHROPIC_API_KEY;
    if (!key) {
      return Response.json({
        english: "My talking orbment needs a key!",
        korean: "Vercel 환경변수에 ANTHROPIC_API_KEY를 넣어 주세요. (회화 기능에 필요해요)",
        tip: null,
      });
    }

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 1000,
        system: TITA_SYSTEM,
        messages: Array.isArray(messages) ? messages.slice(-30) : [],
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

    const raw = (data.content || []).map((i) => i.text || "").join("");
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
