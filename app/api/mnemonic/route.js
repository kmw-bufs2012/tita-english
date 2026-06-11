// AI 연상법 생성 창구 — 아주 쉽고 짧은 한 줄 연상법을 만들어 줘요.
export const runtime = "nodejs";

const MN_SYSTEM = `You create super simple Korean mnemonics (연상법) for English words. The learner is a Korean adult with ADHD who prefers very easy language (middle-school level Korean).

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
        max_tokens: 200,
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
