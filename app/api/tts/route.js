// 브라우저 → (이 서버) → ElevenLabs → 다시 브라우저
// API 키는 Vercel 환경변수에만 있어서 밖으로 안 새요.
export const runtime = "nodejs";

export async function POST(req) {
  try {
    const { text } = await req.json();
    if (!text) return Response.json({ error: "no text" }, { status: 400 });

    const key = process.env.ELEVENLABS_API_KEY;
    const voiceId = process.env.ELEVENLABS_VOICE_ID;
    if (!key || !voiceId) {
      return Response.json(
        { error: "환경변수 ELEVENLABS_API_KEY / ELEVENLABS_VOICE_ID가 비어 있어요" },
        { status: 500 }
      );
    }

    const res = await fetch(
      "https://api.elevenlabs.io/v1/text-to-speech/" + voiceId + "?output_format=mp3_44100_128",
      {
        method: "POST",
        headers: { "xi-api-key": key, "Content-Type": "application/json" },
        body: JSON.stringify({
          text: String(text).slice(0, 600),
          model_id: "eleven_multilingual_v2",
          voice_settings: { stability: 0.5, similarity_boost: 0.75 },
        }),
      }
    );

    if (!res.ok) {
      let detail = "";
      try { detail = (await res.text()).slice(0, 300); } catch (e) {}
      return Response.json({ error: "elevenlabs " + res.status + " " + detail }, { status: res.status });
    }

    const audio = await res.arrayBuffer();
    return new Response(audio, {
      headers: { "Content-Type": "audio/mpeg", "Cache-Control": "no-store" },
    });
  } catch (e) {
    return Response.json({ error: String(e) }, { status: 500 });
  }
}
