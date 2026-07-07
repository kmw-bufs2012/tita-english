# 티타의 영어 정비공방 (Tita's English Workshop)

『궤적』시리즈의 천재 정비공 **티타 러셀**과 함께 영어를 "조립"하듯 익히는 학습 앱이에요.
연상법(니모닉) 카드로 단어를 외우고, 손글씨로 따라 쓰고, 티타와 직접 영어로 대화할 수 있어요.

## 기능

- **단어 학습 (특제 1000 / 중학 1800 / 고등 4800 / 대학·IT·AI 2500 / 대학원 IT·AI 3000 / IT 실무 2000 · 총 15100개)**
  - 특제 세트 1000개: 티타 테마의 엄선 단어 (기초 부품·감정 회로·기술 모듈·회화 엔진 각 250개, 연상법 포함)
  - 중학 1800: 초등 수준 기초 단어를 빼고 **진짜 중학 필수 어휘 1800개** (Day당 20개 · 90일)
  - 고등 4800: 수능·학술 고급 어휘 **4800개** (Day당 20개 · 240일)
  - 대학·IT·AI 2500: 대학 학술 어휘 1000 + IT 공식문서 용어 900 + AI 모델 용어 600 (Day당 20개 · 125일) — 실무·전공 영어를 읽기 위한 전문 어휘
  - 대학원 IT·AI 3000: 연구·논문 수준의 고급 용어 **3000개** (ML 이론·딥러닝·AI 분야·시스템/PL·보안/암호·데이터/양자, Day당 20개 · 150일)
  - IT 비즈니스 실무 2000: 현업 워크플레이스 영어 **2000개** (회의·이메일·협업 / PM·애자일 / 재무·영업·마케팅 / HR·운영, Day당 20개 · 100일)
- **영어 문법 (중학·고등·수능·대학·대학원)**: 단계별 문법 단원(중학 22 · 고등 24 · 수능 어법 20 · **대학 22** · **대학원 학술 영문법 20**, 총 108단원) 학습. 대학 과정은 학술 글 읽기·에세이 쓰기·전문 영어에 필요한 고급 문법을, 대학원 과정은 명사화·헤징·분열문·학술 시제 등 논문 영어 문법까지 다뤄요
  - **ADHD 친화 설계**: 단원마다 ‘딱 이거 하나만!’ 한 줄 핵심 + 티타식 ‘기억 꿀팁(연상)’을 맨 위에 먼저 보여줘 한눈에 이해
  - **한 번에 하나씩**: 자세한 설명·핵심 규칙·예문·확인 문제는 접어 두고 원할 때만 톡 펼쳐 인지 부하를 줄여요
  - **확인 문제는 한 문제씩**: 진행 막대와 함께 한 문제씩 풀고 즉시 피드백, 마지막에 점수 확인
- **연상법 카드**: 단어마다 Gemini API가 만들어 주는 한국어 연상법으로 쉽게 암기
- **손글씨 쓰기 연습**: 화면에 직접 써 보며 철자 익히기
- **조립 퀴즈**: 데이(세트)당 20문제로 즉석 복습, 티타의 음성 응원
- **작문 연습 (AI 채점)**: **문장 영작**(기초·중급·고급·실전 4단계) · **자유 작문** · **IT 비즈니스 실무 작문**을 Gemini API로 채점해 줘요 — 모범답안·잘한 점·교정 팁·점수(0~100)를 한 번에. 합격(60점↑) 시 XP 적립. 각 모드별로 엄선된 화제 리스트(문장 영작 3,600개 · 자유 작문 1,600개 · IT 실무 1,000개, **총 6,200개**)를 제공해 누를 때마다 새 문제가 나와요
  - **IT 비즈니스 실무 작문**: 이메일·Slack 메시지·버그 리포트·PR 설명·릴리스 노트·회의록·보고 등 현업 시나리오. 전문성·톤·형식까지 함께 봐 줘요
- **티타와 영어 회화**: Gemini API 기반 AI 티타와 자유롭게 영어로 대화. 티타가 먼저 **이름을 물어보고**, 알려준 이름으로 불러 줘요. 틀린 표현은 한국어로 짧게 교정해 줍니다.
- **티타 보이스(TTS)**: ElevenLabs 음성으로 단어·문장을 들려줘요

## 배포 순서 (전부 마우스 클릭으로 가능)

1. **GitHub 업로드**
   - github.com → 오른쪽 위 `+` → New repository → 이름 `tita-english` → Create
   - "uploading an existing file" 클릭 → 이 폴더 안의 **내용물 전부**(app 폴더, package.json 등)를 창에 드래그 → Commit changes

2. **Vercel 연결**
   - vercel.com → Add New → Project → 방금 만든 `tita-english` 저장소 Import

3. **환경변수 6개 입력** (Deploy 누르기 전 Environment Variables 칸)
   | 이름 | 값 |
   |---|---|
   | `ELEVENLABS_API_KEY` | ElevenLabs API 키 (sk_...) |
   | `ELEVENLABS_VOICE_ID` | My Voices → Tita의 ID (영문+숫자) |
   | `GEMINI_API_KEY` | Google AI Studio에서 발급한 Gemini API 키 |
   | `AUTH_USER` | **로그인 아이디** (예: `tita`) — 본인만 알아두기 |
   | `AUTH_PASSWORD` | **로그인 비밀번호** (충분히 길고 복잡하게) |
   | `AUTH_SECRET` | 세션 서명용 비밀키 (랜덤 32+자, 예: `openssl rand -hex 32` 결과) |

   선택 환경변수:
   | 이름 | 값 |
   |---|---|
   | `GEMINI_MODEL` | 기본값은 `gemini-3.1-flash`. 다른 모델을 쓰고 싶을 때만 모델명으로 바꿔요 |

4. **Deploy** 클릭 → 끝나면 나오는 주소로 접속!

## 로컬 실행 (선택)

```bash
npm install
npm run dev      # http://localhost:3000
```

환경변수는 프로젝트 루트에 `.env.local` 파일을 만들어 위 키를 넣으면 돼요.
예시:

```bash
GEMINI_API_KEY=여기에_제미나이_API_키
GEMINI_MODEL=gemini-3.1-flash
ELEVENLABS_API_KEY=여기에_ElevenLabs_API_키
ELEVENLABS_VOICE_ID=여기에_보이스_ID
AUTH_USER=tita
AUTH_PASSWORD=충분히_긴_비밀번호
AUTH_SECRET=랜덤_32자_이상_문자열
```

## 🔒 나만 쓰는 비공개 모드 (Private + 로그인)

이 앱은 **본인만 접속 가능**하도록 두 겹의 보호가 가능해요.

### 1) 앱 로그인 (이미 코드에 포함)
- 모든 페이지·API가 미들웨어로 보호돼요. 세션 쿠키 없으면 자동으로 `/login`으로 이동.
- 위에서 설정한 `AUTH_USER` / `AUTH_PASSWORD`로만 로그인 가능.
- 세션은 30일 유지되며 헤더의 ↩️ 버튼으로 로그아웃.
- 비밀번호 평문은 서버 환경변수에만 있고, 쿠키는 HMAC-SHA256(`AUTH_SECRET`)으로 서명·검증돼요.

### 2) GitHub 저장소를 Private으로
- github.com → 저장소 → **Settings** → 맨 아래 **Danger Zone** → **Change repository visibility** → **Make private** → 저장소 이름 확인 후 변경
- (대안) 처음 만들 때 New repository → **Private** 선택

### 3) Vercel 배포 자체에도 자물쇠를 (선택)
- 앱 로그인 외에 Vercel 단계에서도 막고 싶다면:
- Vercel → 프로젝트 → **Settings → Deployment Protection** → **Vercel Authentication** ON (팀원만 접근) 또는 **Password Protection** 설정

## 주의

- Gemini API 키를 넣지 않으면 회화·작문 채점·연상법 생성 기능이 작동하지 않아요
- 기본 Gemini 모델은 `gemini-3.1-flash`를 사용해요
- ElevenLabs는 **유료 Starter(월 $5)부터 API 사용 가능** (무료 플랜은 401 오류)
- 키를 나중에 수정하면: Vercel → 프로젝트 → Settings → Environment Variables 수정 → Deployments에서 Redeploy
- 키는 서버에만 저장되고 코드/브라우저에 노출되지 않아요

## 기술 스택

Next.js 14 · React 18 · Tailwind CSS · lucide-react · Gemini API(회화·작문 채점·연상법) · ElevenLabs(음성)
