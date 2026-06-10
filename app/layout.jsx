import './globals.css';

export const metadata = {
  title: '티타의 영어 정비공방',
  description: '중학 영단어를 짧고 가볍게 공부하는 영어 학습 앱',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
