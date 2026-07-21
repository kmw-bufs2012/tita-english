// 필기 노트 동기화 — Upstash Redis(또는 Vercel KV) REST API로 기기 간 저장 상태를 공유해요.
export const runtime = "nodejs";

const NOTES_KEY = "tita-notes-v1";
const MISSING_ENV_MSG =
  "KV_REST_API_URL · KV_REST_API_TOKEN 환경변수가 필요해요. (기기 간 동기화용 — Vercel KV나 Upstash Redis 무료 플랜을 연결하면 발급돼요)";

function kvConfig() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url, token } : null;
}

export async function GET() {
  const kv = kvConfig();
  if (!kv) return Response.json({ ok: false, notes: {}, error: MISSING_ENV_MSG });

  try {
    const res = await fetch(kv.url + "/get/" + NOTES_KEY, {
      headers: { Authorization: "Bearer " + kv.token },
      cache: "no-store",
    });
    const data = await res.json();
    let notes = {};
    if (data && data.result) {
      try { notes = JSON.parse(data.result); } catch (e) {}
    }
    return Response.json({ ok: true, notes });
  } catch (e) {
    return Response.json({ ok: false, notes: {}, error: "동기화 서버에 연결하지 못했어요." });
  }
}

export async function POST(req) {
  const kv = kvConfig();
  if (!kv) return Response.json({ ok: false, error: MISSING_ENV_MSG });

  try {
    const { notes } = await req.json();
    await fetch(kv.url + "/set/" + NOTES_KEY, {
      method: "POST",
      headers: { Authorization: "Bearer " + kv.token, "Content-Type": "text/plain" },
      body: JSON.stringify(notes || {}),
    });
    return Response.json({ ok: true });
  } catch (e) {
    return Response.json({ ok: false, error: "저장하지 못했어요." }, { status: 500 });
  }
}
