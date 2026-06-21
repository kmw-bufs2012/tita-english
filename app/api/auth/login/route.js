// 로그인 — 환경변수의 ID/PW와 비교 후 HttpOnly 세션 쿠키 발급
import { signSession, COOKIE_NAME, SESSION_MAX_AGE } from "../../../lib/auth";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const { user, password } = await req.json();
    const AUTH_USER = process.env.AUTH_USER;
    const AUTH_PASSWORD = process.env.AUTH_PASSWORD;
    const AUTH_SECRET = process.env.AUTH_SECRET;

    if (!AUTH_USER || !AUTH_PASSWORD || !AUTH_SECRET) {
      return Response.json(
        { ok: false, error: "Vercel 환경변수 AUTH_USER · AUTH_PASSWORD · AUTH_SECRET 가 모두 필요해요." },
        { status: 500 }
      );
    }

    if (typeof user !== "string" || typeof password !== "string" || user !== AUTH_USER || password !== AUTH_PASSWORD) {
      // 타이밍 공격 회피 위해 약간 지연
      await new Promise((r) => setTimeout(r, 300));
      return Response.json({ ok: false, error: "아이디 또는 비밀번호가 올바르지 않아요." }, { status: 401 });
    }

    const exp = Math.floor(Date.now() / 1000) + SESSION_MAX_AGE;
    const token = await signSession({ u: user, exp }, AUTH_SECRET);
    const isProd = process.env.NODE_ENV === "production";
    const cookie =
      COOKIE_NAME +
      "=" +
      token +
      "; Path=/; HttpOnly; SameSite=Lax; Max-Age=" +
      SESSION_MAX_AGE +
      (isProd ? "; Secure" : "");

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", "Set-Cookie": cookie },
    });
  } catch (e) {
    return Response.json({ ok: false, error: "서버 오류가 났어요. 다시 시도해 주세요." }, { status: 500 });
  }
}
