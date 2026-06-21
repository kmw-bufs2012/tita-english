// 로그아웃 — 세션 쿠키 비우기
import { COOKIE_NAME } from "../../../lib/auth";

export const runtime = "nodejs";

export async function POST() {
  const isProd = process.env.NODE_ENV === "production";
  const cookie =
    COOKIE_NAME + "=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0" + (isProd ? "; Secure" : "");
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json", "Set-Cookie": cookie },
  });
}
