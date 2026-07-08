// 90일 완성 문법 과정 — 공용 타입 정의

export type GrammarExample = {
  en: string;
  ko: string;
};

export type GrammarQuizItem = {
  q: string;
  choices: string[];
  answer: number; // choices 배열의 정답 인덱스
  explain: string; // 한국어 해설 (왜 맞고 왜 틀렸는지)
};

export type GrammarUnit = {
  id: string; // m01~m45, h01~h35, c01~c25
  title: string;
  key: string; // 한 줄 핵심
  hook: string; // 기억 연상 팁
  summary: string; // 개념 설명
  rules: string[];
  examples: GrammarExample[];
  quiz: GrammarQuizItem[];
  link?: string; // (고등) 중학 문법과의 연결점 한 줄
};

export type MockTest = {
  id: string; // k85~k90
  day: number; // 85~90
  title: string;
  questions: GrammarQuizItem[];
};

export type CourseStageNo = 1 | 2 | 3;

export type CourseDay = {
  day: number; // 1~90
  stage: CourseStageNo;
  unitIds: string[]; // 이 Day에 학습할 유닛 id 목록 (모의 테스트 날은 빈 배열)
  mockId?: string; // 모의 테스트 날(Day 85~90)만 존재
};

export type CourseStageInfo = {
  stage: CourseStageNo;
  label: string;
  range: [number, number]; // [시작 Day, 끝 Day]
  desc: string;
};
