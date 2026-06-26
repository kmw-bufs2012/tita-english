import './globals.css';

export const metadata = {
  title: '티타의 영어 정비공방',
  description: '중학 영단어를 짧고 가볍게 공부하는 영어 학습 앱',
};

// 모바일에서 화면이 축소되지 않고 기기 너비에 맞게 보이도록 (반응형 핵심).
// maximumScale은 지정하지 않아 접근성을 위한 확대(핀치 줌)는 그대로 허용.
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAF3E7',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
