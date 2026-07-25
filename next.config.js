/** @type {import('next').NextConfig} */

// 화면별 주소(예: /quiz, /chat)로 직접 들어오거나 새로고침해도
// 메인 앱(app/page.jsx)이 그대로 뜨도록 재작성한다.
// 실제 화면 선택은 클라이언트가 주소(pathname)를 읽어 복원한다.
const SUBPAGES = ["cards", "write", "quiz", "grammar", "java", "compose", "chat"];

const nextConfig = {
  async rewrites() {
    return SUBPAGES.map((s) => ({ source: `/${s}`, destination: "/" }));
  },
};

module.exports = nextConfig;
