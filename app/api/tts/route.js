// 브라우저 → (이 서버) → ElevenLabs → 다시 브라우저
// API 키는 Vercel 환경변수에만 있어서 밖으로 안 새요.
export const runtime = "nodejs";

export async function POST(req) {
  try {
    const { text, simBoost, speakerBoost } = await req.json();
    if (!text) return Response.json({ error: "no text" }, { status: 400 });

    const key = process.env.ELEVENLABS_API_KEY;
    const voiceId = process.env.ELEVENLABS_VOICE_ID;

    // 사용자 토글(클라이언트에서 전달). 기본값은 B안: 안정 우선.
    // - 유사도 부스트 ON → 0.9(원본/샘플에 더 밀착), OFF → 0.75(더 안정적, 기본).
    // - 스피커 부스트: 기본 ON. 전달이 불안정하면 OFF로 끌 수 있음.
    const similarity = simBoost === true ? 0.9 : 0.75;
    const speakerOn = speakerBoost !== false;

    // 말하기 속도 (느릴수록 작은 값). ElevenLabs 허용 범위 0.7~1.2, 기본 1.0.
    // 환경변수 ELEVENLABS_SPEED로 조정 가능, 기본은 살짝 느린 0.85.
    let speed = parseFloat(process.env.ELEVENLABS_SPEED);
    if (!Number.isFinite(speed)) speed = 0.85;
    speed = Math.min(1.2, Math.max(0.7, speed));

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
          // 톤 일관성을 위해 multilingual_v2 사용 (turbo보다 운율이 안정적).
          model_id: "eleven_multilingual_v2",
          // seed 고정 → 같은 문장은 매번 (거의) 같은 목소리로 생성 (best-effort 결정론).
          // seed는 voice_settings 안이 아니라 본문 최상위 필드여야 함.
          seed: 12345,
          voice_settings: {
            // 매우 일관성 우선: stability를 0.8로 올려 문장마다 톤이 흔들리는 걸 최대한 억제.
            // (0.85+는 단조·로봇톤이 되어 아이용 앱엔 부적합 → 0.8이 안전 상한.)
            stability: 0.8,
            // 유사도 부스트 토글값 (기본 0.75 = 안정, ON 시 0.9 = 원본 밀착).
            similarity_boost: similarity,
            // style>0 은 변동을 키우므로 0으로 고정.
            style: 0.0,
            // 스피커 부스트 토글값 (기본 ON).
            use_speaker_boost: speakerOn,
            // 속도는 변경하지 않음 (사용자 요청).
            speed: speed,
          },
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
