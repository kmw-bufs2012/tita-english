// AI 연상법 생성 창구 — 오픈라우터(OpenRouter) 경유로 DeepSeek V4 Flash가 짧은 한 줄 연상법을 만들어 줘요.
import { buildMnemonicPayload, extractMnemonic } from "./core.mjs";

export const runtime = "nodejs";

const DEEPSEEK_MODEL = process.env.DEEPSEEK_MODEL || "deepseek/deepseek-v4-flash";

export async function POST(req) {
  try {
    const { word, meaning } = await req.json();
    if (!word || !meaning) return Response.json({ mn: null, error: "단어/뜻 누락" }, { status: 400 });

    const key = process.env.OPENROUTER_API_KEY || process.env.DEEPSEEK_API_KEY;
    if (!key) {
      return Response.json(
        { mn: null, error: "Vercel 환경변수 OPENROUTER_API_KEY 또는 DEEPSEEK_API_KEY가 필요해요" },
        { status: 500 }
      );
    }

    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + key,
      },
      body: JSON.stringify(buildMnemonicPayload({ model: DEEPSEEK_MODEL, word, meaning })),
    });

    let data = {};
    try { data = await res.json(); } catch (e) {}
    if (!res.ok) {
      const msg = data?.error?.message || "api " + res.status;
      return Response.json(
        { mn: null, error: String(msg).slice(0, 120) },
        { status: 502 }
      );
    }

    const mnemonic = extractMnemonic(data);
    if (!mnemonic) {
      return Response.json(
        { mn: null, error: "AI 응답이 비어 있어요. 다시 눌러 주세요." },
        { status: 502 }
      );
    }
    return Response.json({ mn: mnemonic });
  } catch (e) {
    return Response.json({ mn: null, error: "서버 오류" }, { status: 500 });
  }
}
