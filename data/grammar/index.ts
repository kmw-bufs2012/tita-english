// 90일 완성 문법 과정 — 데이터 조립과 스케줄
import type { CourseDay, CourseStageInfo, GrammarUnit, MockTest } from "./types";
import { MIDDLE_UNITS } from "./middle";
import { HIGH_UNITS } from "./high";
import { CSAT_UNITS, MOCK_TESTS } from "./csat";

export type { CourseDay, CourseStageInfo, GrammarUnit, MockTest, GrammarQuizItem } from "./types";
export { MIDDLE_UNITS, HIGH_UNITS, CSAT_UNITS, MOCK_TESTS };

export const COURSE_STAGES: CourseStageInfo[] = [
  { stage: 1, label: "1단계 · 중학 문법", range: [1, 30], desc: "be동사부터 관계대명사까지, 기초 부품 45개를 조립해요." },
  { stage: 2, label: "2단계 · 고등 문법", range: [31, 60], desc: "가정법·분사구문·도치까지, 심화 모듈 35개를 정비해요." },
  { stage: 3, label: "3단계 · 수능 어법", range: [61, 90], desc: "빈출 유형 25개 + 종합 모의 테스트 6회로 실전 완성!" },
];

const ALL_UNITS: GrammarUnit[] = [...MIDDLE_UNITS, ...HIGH_UNITS, ...CSAT_UNITS];

export const UNIT_BY_ID: Record<string, GrammarUnit> = Object.fromEntries(
  ALL_UNITS.map((u) => [u.id, u])
);

export const MOCK_BY_ID: Record<string, MockTest> = Object.fromEntries(
  MOCK_TESTS.map((m) => [m.id, m])
);

// ── 90일 스케줄 ──────────────────────────────
// 1단계(Day 1~30): 45유닛 — 홀수 Day 2유닛, 짝수 Day 1유닛 (하루 10~15분)
// 2단계(Day 31~60): 35유닛 — Day 31·37·43·49·55만 2유닛, 나머지 1유닛
// 3단계(Day 61~90): 25유형 — Day 61~83 1유형, Day 84 2유형, Day 85~90 종합 모의 테스트
function buildCourseDays(): CourseDay[] {
  const days: CourseDay[] = [];
  let mi = 0;
  for (let d = 1; d <= 30; d += 1) {
    const take = d % 2 === 1 ? 2 : 1;
    days.push({ day: d, stage: 1, unitIds: MIDDLE_UNITS.slice(mi, mi + take).map((u) => u.id) });
    mi += take;
  }
  let hi = 0;
  const doubleDays = new Set([31, 37, 43, 49, 55]);
  for (let d = 31; d <= 60; d += 1) {
    const take = doubleDays.has(d) ? 2 : 1;
    days.push({ day: d, stage: 2, unitIds: HIGH_UNITS.slice(hi, hi + take).map((u) => u.id) });
    hi += take;
  }
  let ci = 0;
  for (let d = 61; d <= 84; d += 1) {
    const take = d === 84 ? 2 : 1;
    days.push({ day: d, stage: 3, unitIds: CSAT_UNITS.slice(ci, ci + take).map((u) => u.id) });
    ci += take;
  }
  for (let d = 85; d <= 90; d += 1) {
    days.push({ day: d, stage: 3, unitIds: [], mockId: "k" + d });
  }
  return days;
}

export const COURSE_DAYS: CourseDay[] = buildCourseDays();

export const DAY_BY_NO: Record<number, CourseDay> = Object.fromEntries(
  COURSE_DAYS.map((d) => [d.day, d])
);

// 단계별 건너뛰기 테스트 문제 풀 (해당 단계 전체 유닛의 퀴즈)
export function stageQuizPool(stage: 1 | 2 | 3) {
  const units = stage === 1 ? MIDDLE_UNITS : stage === 2 ? HIGH_UNITS : CSAT_UNITS;
  return units.flatMap((u) => u.quiz);
}
