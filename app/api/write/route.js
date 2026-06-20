// 티타 작문 채점 — 서버가 Anthropic API를 대신 호출해요.
export const runtime = "nodejs";

const WRITE_SYSTEM = `You are Tita Russell (티타 러셀), the cheerful young genius engineer from the Trails (궤적) series, acting as a warm, encouraging English WRITING tutor for a Korean learner (beginner to pre-intermediate, A2-B1).

You will receive a writing task and the learner's English answer. There are two task types:
- "sentence": the learner translated a given Korean sentence into English. Judge whether it conveys the Korean meaning naturally and correctly.
- "free": the learner wrote a few sentences about a given topic. Judge naturalness, grammar, and whether it fits the topic.

Respond ONLY with raw JSON, no markdown, no code fences:
{"model": "...", "good": "...", "feedback": "...", "score": N}

Field rules:
- "model": a natural, correct English version the learner can learn from. For "sentence" tasks, give the best natural English translation of the Korean. For "free" tasks, give an improved version of THEIR writing that keeps their ideas but fixes errors and sounds natural. Keep it at an appropriate level (A2-B1), 1-4 sentences.
- "good": ONE short, warm sentence IN KOREAN about what the learner did well. Be specific and genuine.
- "feedback": a short explanation IN KOREAN of the 1-3 most important fixes (grammar, word choice, word order, or naturalness). Use simple language. If the answer is already great, say so and offer one tiny optional improvement.
- "score": an integer 0-100 reflecting accuracy and naturalness for their level. Be encouraging but honest (a solid correct answer is 85-100; understandable with small errors 65-84; major errors 40-64; off-task or empty below 40).

Keep Korean natural with normal punctuation. Never include the characters that would break JSON.`;

export async function POST(req) {
  try {
    const { mode, prompt, answer } = await req.json();
    const key = process.env.ANTHROPIC_API_KEY;
    if (!key) {
      return Response.json({
        model: "",
        good: "",
        feedback: "Vercel 환경변수에 ANTHROPIC_API_KEY를 넣어 주세요. (작문 채점에 필요해요)",
        score: 0,
      });
    }

    const taskType = mode === "free" ? "free" : "sentence";
    const userContent =
      taskType === "free"
        ? `Task type: free\nTopic (Korean): ${prompt}\nLearner's English writing:\n${answer}`
        : `Task type: sentence\nKorean sentence to translate: ${prompt}\nLearner's English answer:\n${answer}`;

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 800,
        system: WRITE_SYSTEM,
        messages: [{ role: "user", content: userContent }],
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      const msg = (data && data.error && data.error.message) || ("api " + res.status);
      return Response.json({
        model: "",
        good: "",
        feedback: "API 오류: " + String(msg).slice(0, 150),
        score: 0,
      });
    }

    const raw = (data.content || []).map((i) => i.text || "").join("");
    let parsed;
    try {
      parsed = JSON.parse(raw.replace(/```json|```/g, "").trim());
    } catch (e) {
      parsed = { model: raw || "", good: "", feedback: "채점 결과를 읽지 못했어요. 다시 시도해 주세요!", score: 0 };
    }
    // 점수 안전 처리
    let score = parseInt(parsed.score, 10);
    if (isNaN(score)) score = 0;
    parsed.score = Math.max(0, Math.min(100, score));
    return Response.json(parsed);
  } catch (e) {
    return Response.json(
      { model: "", good: "", feedback: "서버 오류가 났어요. 다시 시도해 주세요!", score: 0 },
      { status: 500 }
    );
  }
}
