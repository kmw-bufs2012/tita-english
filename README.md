# 티타의 영어 정비공방 (Tita's English Workshop)

『궤적』시리즈의 천재 정비공 **티타 러셀**과 함께 영어를 "조립"하듯 익히는 학습 앱이에요.
연상법(니모닉) 카드로 단어를 외우고, 손글씨로 따라 쓰고, 티타와 직접 영어로 대화할 수 있어요.

## 기능

- **단어 학습 (특제 32 / 중학 1800 / 고등 4800)**
  - 특제 세트 32개: 티타 테마의 엄선 단어
  - 중학 1800: 초등 수준 기초 단어를 빼고 **진짜 중학 필수 어휘 1800개** (Day당 20개 · 90일)
  - 고등 4800: 수능·학술 고급 어휘 **4800개** (Day당 20개 · 240일)
- **연상법 카드**: 단어마다 AI가 만들어 주는 한국어 연상법으로 쉽게 암기
- **손글씨 쓰기 연습**: 화면에 직접 써 보며 철자 익히기
- **랜덤 퀴즈**: 학습한 단어로 즉석 복습, 티타의 음성 응원
- **티타와 영어 회화**: AI 티타와 자유롭게 영어로 대화. 티타가 먼저 **이름을 물어보고**, 알려준 이름으로 불러 줘요. 틀린 표현은 한국어로 짧게 교정해 줍니다.
- **티타 보이스(TTS)**: ElevenLabs 음성으로 단어·문장을 들려줘요

## 배포 순서 (전부 마우스 클릭으로 가능)

1. **GitHub 업로드**
   - github.com → 오른쪽 위 `+` → New repository → 이름 `tita-english` → Create
   - "uploading an existing file" 클릭 → 이 폴더 안의 **내용물 전부**(app 폴더, package.json 등)를 창에 드래그 → Commit changes

2. **Vercel 연결**
   - vercel.com → Add New → Project → 방금 만든 `tita-english` 저장소 Import

3. **환경변수 3개 입력** (Deploy 누르기 전 Environment Variables 칸)
   | 이름 | 값 |
   |---|---|
   | `ELEVENLABS_API_KEY` | ElevenLabs API 키 (sk_...) |
   | `ELEVENLABS_VOICE_ID` | My Voices → Tita의 ID (영문+숫자) |
   | `ANTHROPIC_API_KEY` | console.anthropic.com에서 발급 (회화 기능용) |

4. **Deploy** 클릭 → 끝나면 나오는 주소로 접속!

## 로컬 실행 (선택)

```bash
npm install
npm run dev      # http://localhost:3000
```

환경변수는 프로젝트 루트에 `.env.local` 파일을 만들어 위 3개 키를 넣으면 돼요.

## 주의

- ElevenLabs는 **유료 Starter(월 $5)부터 API 사용 가능** (무료 플랜은 401 오류)
- 키를 나중에 수정하면: Vercel → 프로젝트 → Settings → Environment Variables 수정 → Deployments에서 Redeploy
- 키는 서버에만 저장되고 코드/브라우저에 노출되지 않아요

## 기술 스택

Next.js 14 · React 18 · Tailwind CSS · lucide-react · Anthropic API(회화) · ElevenLabs(음성)
