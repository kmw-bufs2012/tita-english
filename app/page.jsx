const words = [
  { english: 'repair', korean: '수리하다', hint: '리페어샵에서 고치는 장면' },
  { english: 'brave', korean: '용감한', hint: '브레이크 없이 한 걸음 앞으로' },
  { english: 'memory', korean: '기억', hint: '머릿속 메모리 카드' },
  { english: 'choose', korean: '고르다', hint: '츄즈, 치즈 고르기' },
  { english: 'journey', korean: '여행', hint: '하루하루 이어지는 길' },
  { english: 'future', korean: '미래', hint: '퓨처, 앞으로 펼쳐질 화면' },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-orange-50 px-5 py-8 text-slate-900">
      <section className="mx-auto max-w-4xl">
        <div className="rounded-3xl bg-white p-6 shadow-xl shadow-orange-100">
          <p className="mb-2 text-sm font-bold text-orange-500">Tita English Workshop</p>
          <h1 className="text-3xl font-black tracking-tight sm:text-5xl">
            티타의 영어 정비공방
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            중학 영단어를 짧게 보고, 뜻을 확인하고, 연상 힌트로 기억하는 작은 학습 앱입니다.
            오늘은 앱의 뼈대부터 안전하게 세워 두었습니다.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {words.map((word) => (
            <article key={word.english} className="rounded-2xl bg-white p-5 shadow-md shadow-orange-100">
              <h2 className="text-2xl font-black text-orange-600">{word.english}</h2>
              <p className="mt-2 text-lg font-bold">{word.korean}</p>
              <p className="mt-3 rounded-xl bg-orange-50 p-3 text-sm leading-6 text-slate-600">
                기억법: {word.hint}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
