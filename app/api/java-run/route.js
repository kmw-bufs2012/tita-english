// Java 코드 실행 + AI 첨삭
//  1) Piston(공개 코드 실행 API)으로 Java를 컴파일·실행해요.  실행기 주소는 PISTON_URL 로 바꿀 수 있어요.
//  2) DEEPSEEK_API_KEY 가 있으면 OpenRouter 경유로 티타가 코드에 한국어 첨삭을 달아요.
// 둘 중 하나가 없거나 실패해도 나머지는 최대한 돌려주고, 사유를 그대로 알려줘요(조용한 실패 방지).
export const runtime = "nodejs";

const PISTON_URL = process.env.PISTON_URL || "https://emkc.org/api/v2/piston";
const JAVA_VERSION = process.env.PISTON_JAVA_VERSION || "15.0.2";
const DEEPSEEK_MODEL = process.env.DEEPSEEK_MODEL || "deepseek/deepseek-v4-flash";

const TUTOR_SYSTEM = `You are Tita Russell (티타 러셀), the cheerful young genius engineer from the Trails (궤적) series, now a warm, encouraging JAVA programming tutor for a Korean absolute-beginner who is studying Java to become a backend developer.

You will receive: the practice task (Korean), the learner's Java code, whether it PASSED the expected output, and the program's stdout/stderr.

Respond ONLY with raw JSON, no markdown, no code fences:
{"good": "...", "feedback": "..."}

Field rules (write BOTH in natural Korean, simple and kind):
- "good": ONE short, genuine sentence about what the learner did well (e.g. correct use of a loop, right syntax). Always find something real to praise.
- "feedback": 1-3 short, concrete tips. If there is a COMPILE ERROR or RUNTIME ERROR, explain in plain Korean what it means and how to fix it (point at the likely line/keyword). If it PASSED, confirm briefly and offer one tiny optional improvement or a note on style/convention. Keep it beginner-friendly; avoid jargon or explain it. Never include characters that would break JSON.`;

function abortable(ms) {
  const c = new AbortController();
  const t = setTimeout(() => c.abort(), ms);
  return { signal: c.signal, clear: () => clearTimeout(t) };
}

async function runOnPiston(code) {
  const a = abortable(20000);
  try {
    const res = await fetch(PISTON_URL + "/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language: "java",
        version: JAVA_VERSION,
        files: [{ name: "Main.java", content: code }],
      }),
      signal: a.signal,
    });
    const data = await res.json();
    if (!res.ok) {
      const msg = (data && (data.message || data.error)) || "실행 서버 오류 " + res.status;
      return { ok: false, error: String(msg).slice(0, 200) };
    }
    const compile = data.compile || {};
    const run = data.run || {};
    const compileErr = (compile.code && compile.code !== 0) ? (compile.stderr || compile.output || "") : "";
    return {
      ok: true,
      stdout: (run.stdout || "").replace(/\s+$/, ""),
      stderr: (run.stderr || "").replace(/\s+$/, ""),
      compileError: compileErr.replace(/\s+$/, ""),
    };
  } catch (e) {
    const msg = e && e.name === "AbortError" ? "실행 시간이 초과됐어요(20초). 코드를 줄여 다시 시도해 주세요." : "코드 실행 서버에 연결하지 못했어요.";
    return { ok: false, error: msg };
  } finally {
    a.clear();
  }
}

function normalize(s) {
  // 줄 끝 공백/캐리지리턴 정리 후 양끝 트림 — 출력 비교를 관대하게
  return (s || "").replace(/\r/g, "").split("\n").map((l) => l.replace(/\s+$/, "")).join("\n").trim();
}

async function aiFeedback({ task, code, passed, stdout, stderr, compileError }) {
  const key = process.env.DEEPSEEK_API_KEY;
  if (!key) return null;
  const a = abortable(20000);
  try {
    const userContent =
      `Task (Korean): ${task || "(없음)"}\n` +
      `Passed expected output: ${passed ? "YES" : "NO"}\n` +
      `Compile error: ${compileError || "(none)"}\n` +
      `Runtime stderr: ${stderr || "(none)"}\n` +
      `Program stdout: ${stdout || "(none)"}\n\n` +
      `Learner's Java code:\n${code}`;
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: { "content-type": "application/json", authorization: "Bearer " + key },
      body: JSON.stringify({
        model: DEEPSEEK_MODEL,
        messages: [
          { role: "system", content: TUTOR_SYSTEM },
          { role: "user", content: userContent },
        ],
        max_tokens: 500,
        temperature: 0.4,
        response_format: { type: "json_object" },
      }),
      signal: a.signal,
    });
    const data = await res.json();
    if (!res.ok) return null;
    const raw = (data?.choices?.[0]?.message?.content || "").trim();
    try {
      const parsed = JSON.parse(raw.replace(/```json|```/g, "").trim());
      return { good: parsed.good || "", feedback: parsed.feedback || "" };
    } catch (e) {
      return { good: "", feedback: raw.slice(0, 300) };
    }
  } catch (e) {
    return null;
  } finally {
    a.clear();
  }
}

export async function POST(req) {
  try {
    const { code, expectedOutput, task } = await req.json();
    if (typeof code !== "string" || !code.trim()) {
      return Response.json({ ok: false, error: "실행할 코드가 비어 있어요." }, { status: 400 });
    }

    const exec = await runOnPiston(code);
    if (!exec.ok) {
      return Response.json({ ok: false, error: exec.error });
    }

    const hasExpected = typeof expectedOutput === "string" && expectedOutput.length > 0;
    const passed = hasExpected && !exec.compileError && !exec.stderr
      ? normalize(exec.stdout) === normalize(expectedOutput)
      : false;

    const ai = await aiFeedback({
      task,
      code,
      passed,
      stdout: exec.stdout,
      stderr: exec.stderr,
      compileError: exec.compileError,
    });

    return Response.json({
      ok: true,
      stdout: exec.stdout,
      stderr: exec.stderr,
      compileError: exec.compileError,
      hasExpected,
      passed,
      feedback: ai ? ai.feedback : "",
      good: ai ? ai.good : "",
      aiOn: !!ai,
    });
  } catch (e) {
    return Response.json({ ok: false, error: "서버 오류가 났어요. 다시 시도해 주세요." }, { status: 500 });
  }
}
