// AI 연상법 생성 창구 — 단어+뜻을 받아 한국어 발음 연상법 1개를 만들어 줘요.
export const runtime = "nodejs";

const MN_SYSTEM = `You create Korean sound-association mnemonics (연상법) for English vocabulary. The learner is a Korean adult with ADHD.

Rules:
- Link the English word's SOUND (한글 발음으로) to its Korean meaning in ONE short, vivid, playful sentence (max 2 short sentences).
- Write in Korean. Naturally include the rough Korean pronunciation of the word.
- Make it concrete and visual so it sticks in memory.
- Respond ONLY with raw JSON, no markdown: {"mn": "연상법 문장"}`;

export async function POST(req) {
  try {
    const { word, meaning } = await req.json();
    if (!word || !meaning) return Response.json({ mn: null, error: "단어/뜻 누락" }, { status: 400 });

    const key = process.env.ANTHROPIC_API_KEY;
    if (!key) {
      return Response.json({ mn: null, error: "Vercel 환경변수 ANTHROPIC_API_KEY가 필요해요" });
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
        max_tokens: 300,
        system: MN_SYSTEM,
        messages: [{ role: "user", content: "단어: " + word + " / 뜻: " + meaning }],
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      const msg = (data && data.error && data.error.message) || ("api " + res.status);
      return Response.json({ mn: null, error: String(msg).slice(0, 120) });
    }

    const raw = (data.content || []).map((i) => i.text || "").join("");
    try {
      const parsed = JSON.parse(raw.replace(/```json|```/g, "").trim());
      return Response.json({ mn: parsed.mn || raw });
    } catch (e) {
      return Response.json({ mn: raw.trim() || null });
    }
  } catch (e) {
    return Response.json({ mn: null, error: "서버 오류" }, { status: 500 });
  }
}
