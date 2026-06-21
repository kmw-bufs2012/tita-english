"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Wrench, LogIn } from "lucide-react";

const C = {
  paper: "#FAF3E7",
  card: "#FFFDF8",
  ink: "#463125",
  inkSoft: "#8A715D",
  copper: "#C2671F",
  copperSoft: "#E8C9A8",
  pink: "#F26AA0",
  pinkDeep: "#E04C8B",
  pinkSoft: "#FDE7F0",
  red: "#D96459",
};

export default function LoginPage() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setErr("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: user.trim(), password }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        router.replace("/");
        router.refresh();
      } else {
        setErr(data.error || "로그인 실패");
      }
    } catch (e) {
      setErr("앗, 통신이 끊겼어요. 다시 시도해 주세요.");
    }
    setLoading(false);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ background: C.paper, fontFamily: "'Gowun Dodum', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jua&family=Gowun+Dodum&display=swap');
        .press { transition: transform .08s ease; }
        .press:active { transform: scale(.97); }
      `}</style>

      <div className="w-full max-w-sm flex flex-col gap-4">
        <div className="flex items-center justify-center gap-2 mb-1">
          <Wrench size={22} style={{ color: C.copper }} />
          <h1 className="text-xl" style={{ color: C.ink, fontFamily: "'Jua', sans-serif" }}>
            티타의 영어 정비공방
          </h1>
        </div>
        <p className="text-center text-xs" style={{ color: C.inkSoft }}>
          공방 출입 인증 — 정비사만 들어올 수 있어요
        </p>

        <form
          onSubmit={submit}
          className="rounded-2xl p-5 flex flex-col gap-3"
          style={{ background: C.card, border: "2px solid " + C.copperSoft, boxShadow: "0 3px 0 " + C.copperSoft }}
        >
          <label className="text-xs font-bold" style={{ color: C.ink }}>아이디</label>
          <input
            type="text"
            autoComplete="username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="rounded-xl px-3 py-2 text-sm"
            style={{ background: C.paper, border: "2px solid " + C.copperSoft, color: C.ink, outline: "none" }}
            required
          />
          <label className="text-xs font-bold mt-1" style={{ color: C.ink }}>비밀번호</label>
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-xl px-3 py-2 text-sm"
            style={{ background: C.paper, border: "2px solid " + C.copperSoft, color: C.ink, outline: "none" }}
            required
          />

          {err && (
            <p className="text-xs rounded-lg p-2" style={{ background: "#FBE9E6", border: "1px dashed " + C.red, color: C.red }}>
              {err}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !user || !password}
            className="rounded-xl py-2 text-sm font-bold press flex items-center justify-center gap-2 mt-1"
            style={{
              background: loading || !user || !password ? C.copperSoft : C.pinkDeep,
              color: "#fff",
            }}
          >
            <LogIn size={16} />
            {loading ? "정비공방 문 여는 중…" : "로그인"}
          </button>
        </form>

        <p className="text-center text-[11px]" style={{ color: C.inkSoft }}>
          ✓ 비밀번호는 서버에서만 검증되고 브라우저에는 저장되지 않아요
        </p>
      </div>
    </div>
  );
}
