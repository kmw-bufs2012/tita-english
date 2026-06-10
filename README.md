# 티타의 영어 정비공방 — Vercel 배포판

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

## 주의
- ElevenLabs는 **유료 Starter(월 $5)부터 API 사용 가능** (무료 플랜은 401 오류)
- 키를 나중에 수정하면: Vercel → 프로젝트 → Settings → Environment Variables 수정 → Deployments에서 Redeploy
- 키는 서버에만 저장되고 코드/브라우저에 노출되지 않아요
