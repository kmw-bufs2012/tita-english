/** @type {import('next').NextConfig} */

// 화면별 주소(예: /quiz, /chat)로 직접 들어오거나 새로고침해도
// 메인 앱(app/page.jsx)이 그대로 뜨도록 재작성한다.
// 실제 화면 선택은 클라이언트가 주소(pathname)를 읽어 복원한다.
// java·compose·chat은 화면이 제거된 경로. rewrite만 남겨 두면 SCREEN_KEYS에 없으므로
// 클라이언트가 홈으로 복원한다 → 옛 북마크가 404 대신 홈으로 안내된다.
const SUBPAGES = ["cards", "write", "quiz", "grammar", "java", "compose", "chat"];

const nextConfig = {
  async rewrites() {
    return SUBPAGES.map((s) => ({ source: `/${s}`, destination: "/" }));
  },
};

module.exports = nextConfig;
