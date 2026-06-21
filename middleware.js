// 로그인 세션이 없으면 /login 으로 보내는 미들웨어
// 보호 대상: 모든 페이지 + /api/* (인증 라우트와 정적 자원은 제외)
import { NextResponse } from "next/server";
import { verifySession, COOKIE_NAME } from "./app/lib/auth";

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // 인증 라우트·로그인 페이지는 통과
  if (
    pathname === "/login" ||
    pathname.startsWith("/api/auth/")
  ) {
    return NextResponse.next();
  }

  const token = req.cookies.get(COOKIE_NAME)?.value;
  const secret = process.env.AUTH_SECRET || "";
  const session = secret ? await verifySession(token, secret) : null;

  if (!session) {
    // API 호출은 401 JSON으로, 페이지는 /login 으로 리다이렉트
    if (pathname.startsWith("/api/")) {
      return new NextResponse(JSON.stringify({ error: "unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.search = "";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  // 정적 자원/파비콘은 미들웨어에서 제외
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
