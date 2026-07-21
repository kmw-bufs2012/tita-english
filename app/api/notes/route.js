// 필기 노트 동기화 — Redis Cloud(redis:// URL) 또는 Upstash/Vercel KV(REST API)로 기기 간 저장 상태를 공유해요.
import { createClient } from "redis";

export const runtime = "nodejs";

const NOTES_KEY = "tita-notes-v1";
const MISSING_ENV_MSG =
  "KV_REDIS_URL(Redis Cloud) 또는 KV_REST_API_URL·KV_REST_API_TOKEN(Upstash) 환경변수가 필요해요. (기기 간 동기화용 — Vercel Storage에서 Redis를 연결하면 발급돼요)";

function redisUrl() {
  return process.env.KV_REDIS_URL || process.env.REDIS_URL || null;
}

function restConfig() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url, token } : null;
}

// 서버리스 함수 호출 간 커넥션 재사용
let redisClient = null;
async function getRedis() {
  if (redisClient && redisClient.isOpen) return redisClient;
  redisClient = createClient({ url: redisUrl() });
  redisClient.on("error", () => {});
  await redisClient.connect();
  return redisClient;
}

async function redisGet() {
  const client = await getRedis();
  return client.get(NOTES_KEY);
}

async function redisSet(value) {
  const client = await getRedis();
  await client.set(NOTES_KEY, value);
}

async function restGet(kv) {
  const res = await fetch(kv.url + "/get/" + NOTES_KEY, {
    headers: { Authorization: "Bearer " + kv.token },
    cache: "no-store",
  });
  const data = await res.json();
  return data && data.result ? data.result : null;
}

async function restSet(kv, value) {
  await fetch(kv.url + "/set/" + NOTES_KEY, {
    method: "POST",
    headers: { Authorization: "Bearer " + kv.token, "Content-Type": "text/plain" },
    body: value,
  });
}

export async function GET() {
  const rest = restConfig();
  if (!redisUrl() && !rest) return Response.json({ ok: false, notes: {}, error: MISSING_ENV_MSG });

  try {
    const raw = redisUrl() ? await redisGet() : await restGet(rest);
    let notes = {};
    if (raw) {
      try { notes = JSON.parse(raw); } catch (e) {}
    }
    return Response.json({ ok: true, notes });
  } catch (e) {
    return Response.json({ ok: false, notes: {}, error: "동기화 서버에 연결하지 못했어요." });
  }
}

export async function POST(req) {
  const rest = restConfig();
  if (!redisUrl() && !rest) return Response.json({ ok: false, error: MISSING_ENV_MSG });

  try {
    const { notes } = await req.json();
    const value = JSON.stringify(notes || {});
    if (redisUrl()) await redisSet(value);
    else await restSet(rest, value);
    return Response.json({ ok: true });
  } catch (e) {
    return Response.json({ ok: false, error: "저장하지 못했어요." }, { status: 500 });
  }
}
