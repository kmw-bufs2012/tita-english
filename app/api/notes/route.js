// 필기 노트 동기화 — Redis Cloud(redis:// URL) 또는 Upstash/Vercel KV(REST API)로 기기 간 저장 상태를 공유해요.
// 단어별 {t: 저장시각, s: 획배열} 형식으로 최신 저장이 이기는(LWW) 병합을 해서,
// 한 기기의 푸시가 다른 기기의 단어를 지우지 않아요. s가 빈 배열이면 "지움" 표시(tombstone)로 전파돼요.
import { createClient } from "redis";

export const runtime = "nodejs";

const NOTES_KEY = "tita-notes-v2";
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

/* 구형(획배열만) 데이터도 {t,s}로 읽어요 */
function normalizeEntry(e) {
  if (Array.isArray(e)) return { t: 0, s: e };
  if (e && Array.isArray(e.s)) return { t: e.t || 0, s: e.s };
  return null;
}

/* 단어별로 저장 시각이 최신인 쪽을 채택 */
function mergeNotes(base, incoming) {
  const out = { ...base };
  for (const [word, raw] of Object.entries(incoming || {})) {
    const inc = normalizeEntry(raw);
    if (!inc) continue;
    const cur = normalizeEntry(out[word]);
    if (!cur || inc.t >= cur.t) out[word] = { t: inc.t, s: inc.s };
  }
  return out;
}

// 서버리스 호출 간 커넥션 재사용. redis://로 접속이 안 되면 rediss://(TLS)로 한 번 더 시도해요.
let redisClient = null;
let workingUrl = null;
async function getRedis() {
  if (redisClient && redisClient.isOpen) return redisClient;
  const base = redisUrl();
  const candidates = workingUrl
    ? [workingUrl]
    : base.startsWith("redis://")
    ? [base, "rediss://" + base.slice("redis://".length)]
    : [base];
  let lastErr = null;
  for (const url of candidates) {
    try {
      const client = createClient({ url, socket: { connectTimeout: 4000, reconnectStrategy: false } });
      client.on("error", () => {});
      await client.connect();
      redisClient = client;
      workingUrl = url;
      return client;
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr;
}

async function backendGet() {
  if (redisUrl()) {
    const client = await getRedis();
    return client.get(NOTES_KEY);
  }
  const kv = restConfig();
  const res = await fetch(kv.url + "/get/" + NOTES_KEY, {
    headers: { Authorization: "Bearer " + kv.token },
    cache: "no-store",
  });
  const data = await res.json();
  return data && data.result ? data.result : null;
}

async function backendSet(value) {
  if (redisUrl()) {
    const client = await getRedis();
    await client.set(NOTES_KEY, value);
    return;
  }
  const kv = restConfig();
  await fetch(kv.url + "/set/" + NOTES_KEY, {
    method: "POST",
    headers: { Authorization: "Bearer " + kv.token, "Content-Type": "text/plain" },
    body: value,
  });
}

function errDetail(e) {
  const msg = e && e.message ? e.message : String(e);
  return "동기화 서버 연결 실패: " + msg.slice(0, 120);
}

async function readServerNotes() {
  const raw = await backendGet();
  if (!raw) return {};
  try { return JSON.parse(raw) || {}; } catch (e) { return {}; }
}

export async function GET() {
  if (!redisUrl() && !restConfig()) return Response.json({ ok: false, notes: {}, error: MISSING_ENV_MSG });
  try {
    return Response.json({ ok: true, notes: await readServerNotes() });
  } catch (e) {
    return Response.json({ ok: false, notes: {}, error: errDetail(e) });
  }
}

export async function POST(req) {
  if (!redisUrl() && !restConfig()) return Response.json({ ok: false, error: MISSING_ENV_MSG });
  try {
    const { notes } = await req.json();
    const merged = mergeNotes(await readServerNotes(), notes);
    await backendSet(JSON.stringify(merged));
    // 병합 결과를 돌려줘서 클라이언트가 다른 기기의 최신 필기까지 한 번에 받아가요
    return Response.json({ ok: true, notes: merged });
  } catch (e) {
    return Response.json({ ok: false, error: errDetail(e) }, { status: 500 });
  }
}
