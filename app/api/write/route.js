// 티타 작문 채점 — 서버가 DeepSeek API를 대신 호출해요.
export const runtime = "nodejs";

const DEEPSEEK_MODEL = process.env.DEEPSEEK_MODEL || "deepseek-v4-flash";

const WRITE_SYSTEM = `You are Tita Russell (티타 러셀), the cheerful young genius engineer from the Trails (궤적) series, acting as a warm, encouraging English WRITING tutor for a Korean learner (beginner to pre-intermediate, A2-B1).

You will receive a writing task and the learner's English answer. There are three task types:
- "sentence": the learner translated a given Korean sentence into English. Judge whether it conveys the Korean meaning naturally and correctly.
- "free": the learner wrote a few sentences about a given topic. Judge naturalness, grammar, and whether it fits the topic.
- "biz": the learner wrote a real IT/business workplace text (email, Slack/chat message, bug report, PR description, release note, meeting notes, report, etc.) for the given scenario. Judge professional clarity, appropriate tone/politeness, correct format/structure for that document type, and grammar. For this type you may write up to 6 sentences and use a realistic professional register (greetings, sign-offs, bullet-like structure are fine).

Respond ONLY with raw JSON, no markdown, no code fences:
{"model": "...", "good": "...", "feedback": "...", "score": N}

Field rules:
- "model": a natural, correct English version the learner can learn from. For "sentence" tasks, give the best natural English translation of the Korean. For "free" tasks, give an improved version of THEIR writing that keeps their ideas but fixes errors and sounds natural. For "biz" tasks, give a polished, professional workplace version appropriate to the document type. Keep it at an appropriate level (A2-B1) for sentence/free; biz may be slightly higher (B1-B2) but still clear.
- "good": ONE short, warm sentence IN KOREAN about what the learner did well. Be specific and genuine.
- "feedback": a short explanation IN KOREAN of the 1-3 most important fixes (grammar, word choice, word order, or naturalness). Use simple language. If the answer is already great, say so and offer one tiny optional improvement.
- "score": an integer 0-100 reflecting accuracy and naturalness for their level. Be encouraging but honest (a solid correct answer is 85-100; understandable with small errors 65-84; major errors 40-64; off-task or empty below 40).

Keep Korean natural with normal punctuation. Never include the characters that would break JSON.`;

function getDeepSeekText(data) {
  return (data?.choices?.[0]?.message?.content || "").trim();
}

export async function POST(req) {
  try {
    const { mode, prompt, answer } = await req.json();
    const key = process.env.DEEPSEEK_API_KEY;
    if (!key) {
      return Response.json({
        model: "",
        good: "",
        feedback: "Vercel 환경변수에 DEEPSEEK_API_KEY를 넣어 주세요. (작문 채점에 필요해요)",
        score: 0,
      });
    }

    const taskType = mode === "free" ? "free" : mode === "biz" ? "biz" : "sentence";
    const userContent =
      taskType === "free"
        ? `Task type: free\nTopic (Korean): ${prompt}\nLearner's English writing:\n${answer}`
        : taskType === "biz"
        ? `Task type: biz\nWorkplace scenario (Korean): ${prompt}\nLearner's English writing:\n${answer}`
        : `Task type: sentence\nKorean sentence to translate: ${prompt}\nLearner's English answer:\n${answer}`;

    const res = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + key,
      },
      body: JSON.stringify({
        model: DEEPSEEK_MODEL,
        messages: [
          { role: "system", content: WRITE_SYSTEM },
          { role: "user", content: userContent },
        ],
        max_tokens: 800,
        temperature: 0.4,
        response_format: { type: "json_object" },
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      const msg = data?.error?.message || "api " + res.status;
      return Response.json({
        model: "",
        good: "",
        feedback: "API 오류: " + String(msg).slice(0, 150),
        score: 0,
      });
    }

    const raw = getDeepSeekText(data);
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
