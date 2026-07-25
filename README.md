# 티타의 어학 정비공방 (Tita's Language Workshop)

『궤적』시리즈의 천재 정비공 **티타 러셀**과 함께 어학을 "조립"하듯 익히는 학습 앱이에요.

## 학습 목표

**일본어 QA / LQA 취업** — JLPT **N1 160~170점**(180점 만점) 고득점.
학습자는 이미 N1 140점 수준이므로, 앱은 "0에서 N1까지"가 아니라 **140 → 165 구간의 델타**만 겨냥합니다.

### 왜 이 구성인가 (근거)

- N1 `文字·語彙`는 **漢字読み · 文脈規定 · 言い換え類義 · 用法** 4개 대문제로만 구성되고,
  N2 이하에 있는 `表記`·`語形成`가 **없습니다.** → 철자·조어 암기는 점수가 되지 않습니다.
- JLPT는 원점수가 아니라 **척도점수(IRT·등화)** 라서, 쉬운 문항을 더 맞혀도 점수가 오르지 않고
  변별력 높은 문항을 맞혀야 오릅니다. 그 변별력이 곧 **유의어 구분**입니다.
- 그래서 카드의 핵심 필드는 뜻(`ko`)이 아니라 **유의어와의 차이(`syn`)** 와 **오용 주의(`ng`)** 입니다.
- 어휘 직접 배점은 180점 중 약 33점(≈18%)뿐이므로, 남은 점수는 독해·청해에 있습니다.
  **어휘 학습만으로 165점에 도달하지는 않습니다** — 문법 유형 훈련과 청해 훈련이 병행되어야 합니다.

## 기능

- **단어 학습 (일본어 400 + 영어 1500)** — Day당 20개 단위, 간격 반복(SR) 스케줄
  - **類義語 200** (우선순위 1): N1 「言い換え類義」·「用法」 직결. 각 항목이 비슷한 말과의 **차이**와 **함께 쓰이는 말**을 함께 담아요
  - **複合動詞 200** (우선순위 2): 뒤 동사(`〜出す`·`〜込む`·`〜切る`·`〜抜く` 등) 의미 패턴별로 묶어, 처음 보는 복합동사도 뜻을 추측할 수 있게 배치. 독해·청해에 동시 기여
  - **중학 영단어 1500**: 버그 리포트 작성·영문 스펙 독해용 유지 학습
  - 카드 앞면은 표기 + 요미, 뒷면은 뜻 · 연상 · 용례 · **비슷한 말과 차이** · **이렇게 쓰면 틀려요**
- **영어 문법 — QA·LQA 실무 18유닛**: 버그 리포트를 정확히 쓰고 영문 스펙을 읽는 데 실제로 필요한 문법만 골랐어요.
  ① 현상 서술(`is not displayed`) → ② 재현 절차·경과(`has been fixed` / `when`·`if`) → ③ 기대 동작·품질 지적(`should be displayed` / `truncated text`) 순서
  - **ADHD 친화 설계**: 단원마다 ‘딱 이거 하나만!’ 한 줄 핵심 + 티타식 ‘기억 꿀팁(연상)’을 맨 위에 먼저 보여줘 한눈에 이해
  - **한 번에 하나씩**: 자세한 설명·핵심 규칙·예문·확인 문제는 접어 두고 원할 때만 톡 펼쳐 인지 부하를 줄여요
  - **확인 문제는 한 문제씩**: 진행 막대와 함께 한 문제씩 풀고 즉시 피드백, 마지막에 점수 확인
- **연상법 카드**: 단어마다 DeepSeek API가 만들어 주는 한국어 연상법으로 쉽게 암기
- **손글씨 쓰기 연습(필기 노트)**: 화면에 직접 써 보며 표기 익히기. Vercel Storage에서 Redis를 연결하면(`KV_REDIS_URL` 또는 `KV_REST_API_URL`·`KV_REST_API_TOKEN`) 필기 기록이 기기 간에 자동으로 동기화돼요. 연결하지 않으면 이 기기에만 저장돼요
- **조립 퀴즈**: Day당 20문제로 즉석 복습, 티타의 음성 응원
- **티타 보이스(TTS)**: ElevenLabs `eleven_multilingual_v2` 음성으로 단어·문장을 들려줘요 (일본어 지원 모델)

## 보존된(비노출) 학습 데이터

진로 변경에 따라 **메뉴에서만 제거**하고 데이터는 리포지토리에 그대로 남겨 둔 코스입니다.
다시 쓰려면 탭 목록(`ModeTabs`)·`SR_DECK_META`·`SCREEN_KEYS`에 되살리면 됩니다.

| 코스 | 파일 | 규모 |
|---|---|---|
| Java 입문 영단어 | `app/data/javaIntro.js` | 200 |
| IT 기초 핵심 | `app/data/itBasic.js` | 200 |
| IT 심화 핵심 | `app/data/itAdvanced.js` | 500 |
| IT 실무 | `app/data/itField.js` | 150 |
| Java 문법·프로그래밍 실습 | `app/data/java/lessons.js` + `app/api/java-run/route.js` | 18유닛 |
| 영어 문법(고등·수능) | `app/data/grammar/high.js`, `csat.js` | — |
| 영어 문법(중학) 제외분 22유닛 | `app/data/grammar/middle.js` | 40유닛 중 18개만 노출 |
| 파이썬 실무 | `app/data/pythonWords.js` | — |

기존 학습 진행도(`tita-english-v1` · `tita-sr-v1` · `tita-grammar-v1` · `tita-java-v1` · `tita-write-v1`)는
**전혀 파괴되지 않습니다.** 탭을 되살리면 이전 진도가 그대로 이어집니다.

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
   | `DEEPSEEK_API_KEY` | openrouter.ai에서 발급한 오픈라우터 API 키 (sk-or-v1-...) — DeepSeek V4 Flash를 오픈라우터 경유로 호출해요 |
   | `AUTH_USER` | **로그인 아이디** (예: `tita`) — 본인만 알아두기 |
   | `AUTH_PASSWORD` | **로그인 비밀번호** (충분히 길고 복잡하게) |
   | `AUTH_SECRET` | 세션 서명용 비밀키 (랜덤 32+자, 예: `openssl rand -hex 32` 결과) |

   선택 환경변수:
   | 이름 | 값 |
   |---|---|
   | `DEEPSEEK_MODEL` | 기본값은 `deepseek/deepseek-v4-flash`(오픈라우터 모델 슬러그). 다른 모델을 쓰고 싶을 때만 바꿔요 |
   | `KV_REDIS_URL` | **필기 노트를 기기 간에 동기화**하고 싶을 때만 추가. Vercel 프로젝트에서 Storage → Redis(Redis Cloud)를 프리픽스 `KV`로 연결하면 자동으로 채워져요. (`REDIS_URL` 이름도 인식) |
   | `KV_REST_API_URL` / `KV_REST_API_TOKEN` | 위 대신 Upstash(REST 방식)를 쓸 때. Storage → Upstash for Redis 연결 시 자동으로 채워져요. (`UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` 이름도 인식) |
   | `JDOODLE_CLIENT_ID` / `JDOODLE_CLIENT_SECRET` | **Java 코드 실행**에 필요. [jdoodle.com/compiler-api](https://www.jdoodle.com/compiler-api) 무료 가입(신용카드 불필요, 하루 200회) 후 발급되는 값을 넣으면 Java 코드 실행·정답 판정이 동작해요. (공개 Piston API는 2026-02-15부터 화이트리스트 전용으로 바뀌어 더 이상 기본으로 쓸 수 없어요) |
   | `PISTON_URL` | JDoodle 대신 **자체 Piston 서버**나 화이트리스트를 발급받은 Piston을 쓸 때만 설정 (예: `https://your-piston.example.com/api/v2/piston`). JDOODLE 값이 설정돼 있으면 그쪽이 우선이니, Piston을 쓰려면 JDOODLE 값은 비워 두세요 |

4. **Deploy** 클릭 → 끝나면 나오는 주소로 접속!

## 로컬 실행 (선택)

```bash
npm install
npm run dev      # http://localhost:3000
```

환경변수는 프로젝트 루트에 `.env.local` 파일을 만들어 위 키를 넣으면 돼요.
예시:

```bash
DEEPSEEK_API_KEY=여기에_오픈라우터_API_키
DEEPSEEK_MODEL=deepseek/deepseek-v4-flash
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

- DeepSeek API 키를 넣지 않으면 회화·작문 채점·연상법 생성 기능이 작동하지 않아요
- 기본 DeepSeek 모델은 오픈라우터 경유 `deepseek/deepseek-v4-flash`를 사용해요
- ElevenLabs는 **유료 Starter(월 $5)부터 API 사용 가능** (무료 플랜은 401 오류)
- 키를 나중에 수정하면: Vercel → 프로젝트 → Settings → Environment Variables 수정 → Deployments에서 Redeploy
- 키는 서버에만 저장되고 코드/브라우저에 노출되지 않아요

## 기술 스택

Next.js 14 · React 18 · Tailwind CSS · lucide-react · DeepSeek API(회화·작문 채점·연상법) · ElevenLabs(음성)
