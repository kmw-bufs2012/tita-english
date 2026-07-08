import type { GrammarUnit, MockTest } from "./types";

export const CSAT_UNITS: GrammarUnit[] = [
  {
    "id": "c01",
    "title": "주어-동사 수일치",
    "key": "밑줄 친 동사를 보면 먼저 '진짜 주어'를 찾아 단수인지 복수인지 확인한다.",
    "hook": "주어 찾고 → 수식어 지우고 → 단복수 맞추기, '찾지맞'으로 기억하세요.",
    "summary": "수능 어법에서 가장 자주 나오는 유형이 바로 주어와 동사의 수일치입니다. 출제자는 주어와 동사 사이에 전치사구, 관계사절, 분사구 같은 긴 수식어를 끼워 넣어 눈을 속입니다. 그래서 동사에 밑줄이 있으면 바로 앞 명사가 아니라 문장의 진짜 주어를 찾는 것이 핵심입니다. the number of는 단수, a number of는 복수 취급이고, each·every·one of는 단수 동사를 씁니다. 주어가 동명사구나 to부정사구이면 항상 단수로 받는다는 점도 자주 출제됩니다. 수식어를 괄호로 묶어 지워 버리면 정답이 훨씬 쉽게 보입니다.",
    "rules": [
      "1단계: 밑줄 친 동사가 어느 절에 속해 있는지 확인합니다.",
      "2단계: 그 절의 진짜 주어를 찾고, 주어와 동사 사이의 전치사구·관계사절·분사구는 괄호로 묶어 지웁니다.",
      "3단계: 진짜 주어가 단수인지 복수인지 판단합니다.",
      "4단계: the number of(단수), a number of(복수), each·every·one of(단수), 동명사구 주어(단수) 같은 함정 표현을 점검합니다.",
      "5단계: 판단한 수에 맞게 동사 형태가 옳은지 최종 확인합니다."
    ],
    "examples": [
      {
        "en": "The number of students who participate in volunteer programs has increased steadily over the past decade.",
        "ko": "봉사활동 프로그램에 참여하는 학생들의 수는 지난 10년 동안 꾸준히 증가해 왔다."
      },
      {
        "en": "Each of the paintings displayed in the gallery was created by a local artist during the war.",
        "ko": "그 미술관에 전시된 그림들 각각은 전쟁 중에 한 지역 화가에 의해 그려졌다."
      },
      {
        "en": "Understanding the habits of wild animals requires years of patient observation in the field.",
        "ko": "야생 동물의 습성을 이해하는 것은 현장에서의 수년간의 끈기 있는 관찰을 필요로 한다."
      }
    ],
    "quiz": [
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? The rapid growth of online shopping platforms (   ) changed the way people buy goods.",
        "choices": [
          "has",
          "have",
          "having"
        ],
        "answer": 0,
        "explain": "주어는 platforms가 아니라 The rapid growth(성장)라는 단수 명사입니다. of online shopping platforms는 수식어이므로 지우고 보면 단수 동사 has가 맞습니다. have는 복수 주어에 쓰고, having은 동사 자리에 올 수 없어서 틀립니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "A variety of opinions were expressed at the meeting.",
          "The list of items to be delivered were long.",
          "Everyone in the two classes was invited to the festival."
        ],
        "answer": 1,
        "explain": "두 번째 문장의 주어는 items가 아니라 단수 명사 The list이므로 was long이 되어야 합니다. a variety of 뒤에는 복수 명사가 오면 복수 취급이라 첫 문장은 맞고, everyone은 항상 단수라 세 번째 문장도 맞습니다."
      },
      {
        "q": "(A)/(B)에 알맞은 짝은? Many people (A)[believe/believes] that regular exercise, along with a balanced diet, (B)[help/helps] prevent disease.",
        "choices": [
          "believes - help",
          "believe - help",
          "believe - helps"
        ],
        "answer": 2,
        "explain": "(A)의 주어 Many people은 복수이므로 believe가 맞습니다. (B)의 주어는 단수인 regular exercise이고, along with a balanced diet는 수에 영향을 주지 않는 수식어이므로 helps가 맞습니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? One of the most common mistakes beginners make (   ) skipping the basics.",
        "choices": [
          "are",
          "is",
          "be"
        ],
        "answer": 1,
        "explain": "주어는 복수처럼 보이는 mistakes가 아니라 One(하나)입니다. one of + 복수명사는 항상 단수 취급하므로 is가 정답입니다. are는 복수 동사라 틀리고, be는 원형이라 동사 자리에 그대로 올 수 없습니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? The books that the librarian recommended (   ) now available in the reading room.",
        "choices": [
          "is",
          "being",
          "are"
        ],
        "answer": 2,
        "explain": "문장의 주어는 복수 명사 The books입니다. that the librarian recommended는 주어를 꾸미는 관계사절이므로 지우고 보면 복수 동사 are가 맞습니다. 바로 앞의 recommended나 단수 명사 librarian에 속으면 안 됩니다."
      }
    ]
  },
  {
    "id": "c02",
    "title": "능동태 vs 수동태",
    "key": "밑줄 친 동사의 주어가 그 동작을 '하는' 쪽인지 '당하는' 쪽인지 확인한다.",
    "hook": "주어가 하면 능동, 당하면 be+p.p., 그리고 목적어가 남아 있으면 능동이라고 기억하세요.",
    "summary": "수능에서는 동사에 밑줄을 긋고 능동태와 수동태 중 무엇이 맞는지 묻는 문제가 해마다 나옵니다. 판단의 첫걸음은 주어와 동사의 의미 관계를 따져 보는 것입니다. 주어가 동작을 직접 하면 능동, 동작을 받으면 be + 과거분사의 수동이 됩니다. 더 확실한 방법은 동사 뒤를 보는 것인데, 타동사인데 뒤에 목적어가 없으면 수동태일 가능성이 큽니다. 반대로 happen, occur, appear, remain 같은 자동사는 목적어가 없어도 절대 수동태로 쓸 수 없다는 점이 단골 함정입니다. 시제가 복잡해 보여도 have been p.p., be being p.p.처럼 결국 be + p.p. 구조인지 확인하면 됩니다.",
    "rules": [
      "1단계: 밑줄 친 동사의 주어를 찾습니다.",
      "2단계: 주어가 동작을 하는지(능동) 받는지(수동) 의미로 판단합니다.",
      "3단계: 동사 뒤에 목적어가 있으면 능동, 타동사인데 목적어가 없으면 수동을 의심합니다.",
      "4단계: happen, occur, appear, disappear, remain 같은 자동사는 수동태가 불가능함을 확인합니다.",
      "5단계: 수동이 맞다면 be + 과거분사 형태가 시제에 맞게 쓰였는지 점검합니다."
    ],
    "examples": [
      {
        "en": "The ancient temple was built more than a thousand years ago by skilled craftsmen.",
        "ko": "그 고대 사원은 천 년도 더 전에 숙련된 장인들에 의해 지어졌다."
      },
      {
        "en": "Researchers have conducted numerous experiments to test the effects of sleep on memory.",
        "ko": "연구자들은 수면이 기억력에 미치는 영향을 검증하기 위해 수많은 실험을 수행해 왔다."
      },
      {
        "en": "The results of the survey will be announced at next week's international conference.",
        "ko": "그 설문 조사의 결과는 다음 주 국제 학회에서 발표될 것이다."
      }
    ],
    "quiz": [
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? The novel, which (   ) into more than twenty languages, remains popular worldwide.",
        "choices": [
          "has been translated",
          "has translated",
          "is translating"
        ],
        "answer": 0,
        "explain": "소설은 스스로 번역하는 것이 아니라 사람에 의해 '번역되는' 대상입니다. 또 translate는 타동사인데 뒤에 목적어가 없으므로 수동태 has been translated가 맞습니다. 나머지 두 개는 능동태라서 소설이 직접 번역한다는 이상한 뜻이 됩니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "The bridge was destroyed by the flood last summer.",
          "New employees are required to attend the safety training.",
          "The problem was happened because of a simple mistake."
        ],
        "answer": 2,
        "explain": "happen은 목적어를 갖지 않는 자동사라서 수동태로 쓸 수 없고, The problem happened가 되어야 합니다. 다리는 홍수에 의해 파괴되는 대상이고, 신입 사원은 요구를 받는 대상이므로 앞의 두 문장은 수동태가 맞습니다."
      },
      {
        "q": "(A)/(B)에 알맞은 짝은? The award (A)[gave/was given] to the young scientist whose research (B)[attracted/was attracted] worldwide attention.",
        "choices": [
          "gave - attracted",
          "was given - attracted",
          "was given - was attracted"
        ],
        "answer": 1,
        "explain": "(A)에서 상은 스스로 주는 것이 아니라 '주어지는' 것이므로 was given이 맞습니다. (B)에서 연구는 뒤에 목적어 worldwide attention을 직접 끌어당기는 주체이므로 능동태 attracted가 맞습니다. 목적어가 남아 있으면 능동이라는 점을 기억하세요."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? When the fire alarm rang, everyone in the building (   ) to leave immediately.",
        "choices": [
          "was told",
          "told",
          "has told"
        ],
        "answer": 0,
        "explain": "건물 안의 사람들은 나가라는 말을 '들은', 즉 지시를 받은 쪽이므로 수동태 was told가 맞습니다. tell은 타동사인데 빈칸 뒤에 목적어가 없다는 점도 수동의 근거입니다. told와 has told는 능동이라 누구에게 말했는지 목적어가 있어야 합니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? Millions of plastic bottles (   ) away every day around the world.",
        "choices": [
          "throw",
          "have thrown",
          "are thrown"
        ],
        "answer": 2,
        "explain": "플라스틱 병은 사람에 의해 '버려지는' 대상이므로 수동태 are thrown이 맞습니다. throw는 타동사인데 뒤에 목적어가 없다는 것도 힌트입니다. 능동태인 throw나 have thrown을 쓰면 병이 스스로 무언가를 던진다는 뜻이 되어 틀립니다."
      }
    ]
  },
  {
    "id": "c03",
    "title": "현재분사 vs 과거분사",
    "key": "분사가 꾸미는 명사가 그 동작을 '하는' 쪽이면 -ing, '당하는' 쪽이면 p.p.를 고른다.",
    "hook": "명사가 능동이면 -ing, 수동이면 p.p., 감정동사는 '주는 쪽 -ing, 느끼는 쪽 p.p.'로 외우세요.",
    "summary": "분사 문제는 밑줄 친 -ing형과 p.p.형 중 어느 것이 맞는지 묻는 유형으로, 수능과 모의평가에서 빠지지 않고 출제됩니다. 판단 기준은 분사가 꾸미는 명사와 분사의 의미 관계입니다. 명사가 그 동작을 직접 하면 현재분사 -ing, 동작을 받으면 과거분사 p.p.를 씁니다. 분사구문에서는 생략된 주어, 즉 주절의 주어와의 관계로 똑같이 판단하면 됩니다. interesting과 interested 같은 감정동사 분사는 감정을 일으키는 대상에 -ing, 감정을 느끼는 사람에 p.p.를 쓴다는 것이 단골 포인트입니다. 밑줄 근처의 명사만 보지 말고 반드시 의미 관계까지 따져 보세요.",
    "rules": [
      "1단계: 밑줄 친 분사가 어떤 명사를 꾸미는지, 또는 분사구문이면 주절의 주어가 무엇인지 찾습니다.",
      "2단계: 그 명사가 분사의 동작을 하는 주체인지, 당하는 대상인지 판단합니다.",
      "3단계: 능동 관계면 현재분사 -ing, 수동 관계면 과거분사 p.p.를 고릅니다.",
      "4단계: 감정동사(interest, excite, bore 등)는 감정을 주는 쪽이면 -ing, 느끼는 쪽이면 p.p.인지 확인합니다.",
      "5단계: 선택한 분사를 넣고 문장 전체의 의미가 자연스러운지 확인합니다."
    ],
    "examples": [
      {
        "en": "The children playing in the park did not notice the dark clouds approaching from the west.",
        "ko": "공원에서 놀고 있던 아이들은 서쪽에서 다가오는 먹구름을 알아차리지 못했다."
      },
      {
        "en": "Written in simple English, the book is suitable for young learners around the world.",
        "ko": "쉬운 영어로 쓰여 있어서, 그 책은 전 세계의 어린 학습자들에게 적합하다."
      },
      {
        "en": "The audience seemed deeply moved by the singer's touching performance at the charity concert.",
        "ko": "관객들은 자선 음악회에서 그 가수의 감동적인 공연에 깊이 감동한 듯 보였다."
      }
    ],
    "quiz": [
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? The window (   ) by the storm has not been repaired yet.",
        "choices": [
          "broken",
          "breaking",
          "breaks"
        ],
        "answer": 0,
        "explain": "창문은 폭풍에 의해 '깨진' 대상이므로 수동을 나타내는 과거분사 broken이 맞습니다. breaking은 창문이 스스로 깨뜨린다는 능동의 뜻이 되어 어색합니다. 이 문장의 본동사는 has not been repaired이므로 breaks 같은 동사가 또 올 수도 없습니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "The movie was so boring that half the audience fell asleep.",
          "Students interesting in the contest should sign up by Friday.",
          "The man standing at the gate is our new coach."
        ],
        "answer": 1,
        "explain": "학생들은 흥미를 '느끼는' 쪽이므로 interesting이 아니라 interested를 써야 합니다. 감정을 느끼는 사람에게는 p.p.를 씁니다. 첫 문장의 영화는 지루함을 '주는' 쪽이라 boring이 맞고, 세 번째 문장의 남자는 직접 서 있는 주체라 standing이 맞습니다."
      },
      {
        "q": "(A)/(B)에 알맞은 짝은? The tourists (A)[exhausting/exhausted] from the long hike rested beside a stream (B)[flowing/flowed] down the mountain.",
        "choices": [
          "exhausted - flowing",
          "exhausting - flowing",
          "exhausted - flowed"
        ],
        "answer": 0,
        "explain": "(A)의 관광객들은 지침을 '느끼는' 사람이므로 과거분사 exhausted가 맞습니다. (B)의 개울은 스스로 흘러내리는 주체이므로 능동의 현재분사 flowing이 맞습니다. flow는 '흐르다'라는 자동사라서 과거분사 flowed로 명사를 꾸밀 수 없습니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? (   ) his homework, Minsu went out to play soccer with his friends.",
        "choices": [
          "Finished",
          "Having finished",
          "Finish"
        ],
        "answer": 1,
        "explain": "분사구문의 생략된 주어는 주절의 주어 Minsu입니다. 민수가 숙제를 직접 '끝낸' 능동 관계이고 축구하러 나가기 전에 끝난 일이므로 Having finished가 맞습니다. Finished는 민수가 끝내진다는 수동의 뜻이 되고, Finish는 동사원형이라 이 자리에 올 수 없습니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? The chef served a dish (   ) with fresh herbs from his garden.",
        "choices": [
          "decorating",
          "decorates",
          "decorated"
        ],
        "answer": 2,
        "explain": "요리는 허브로 '장식되는' 대상이므로 수동을 나타내는 과거분사 decorated가 맞습니다. decorating은 요리가 스스로 장식한다는 뜻이 되어 어색합니다. 이미 served라는 본동사가 있으므로 decorates 같은 동사를 또 쓸 수 없습니다."
      }
    ]
  },
  {
    "id": "c04",
    "title": "본동사 vs 준동사 (동사 자리 판별)",
    "key": "그 절에 이미 본동사가 있는지 세어 보고, 없으면 동사, 있으면 준동사(-ing/p.p./to부정사)를 고른다.",
    "hook": "한 절에 본동사는 딱 하나, '동사 개수 세기'부터 시작하세요.",
    "summary": "이 유형은 밑줄 친 자리에 동사가 와야 하는지, 아니면 분사나 to부정사 같은 준동사가 와야 하는지 묻습니다. 원리는 간단해서, 접속사나 관계사가 없다면 한 절에는 본동사가 하나만 존재할 수 있습니다. 출제자는 주어 뒤에 긴 분사구나 관계사절을 붙여서 본동사가 어디 있는지 헷갈리게 만듭니다. 그래서 먼저 문장의 뼈대를 찾아 본동사가 이미 있는지 확인하는 습관이 필요합니다. 본동사가 없으면 밑줄 자리는 동사여야 하고, 이미 있으면 준동사 형태가 와야 합니다. 문장이 아무리 길어도 접속사 개수보다 동사가 하나 더 많으면 된다는 원칙만 기억하면 됩니다.",
    "rules": [
      "1단계: 밑줄이 포함된 절의 범위를 정하고, 접속사·관계사가 몇 개인지 확인합니다.",
      "2단계: 그 절 안에서 이미 확실한 본동사가 있는지 찾습니다.",
      "3단계: 본동사가 없으면 밑줄 자리에는 수와 시제를 갖춘 동사가 와야 합니다.",
      "4단계: 본동사가 이미 있으면 밑줄 자리에는 분사·동명사·to부정사 같은 준동사가 와야 합니다.",
      "5단계: 준동사를 골랐다면 꾸미는 명사와 능동(-ing)·수동(p.p.) 관계까지 맞는지 확인합니다."
    ],
    "examples": [
      {
        "en": "The company, founded in 1995 by two college friends, has grown into one of the largest firms in the region.",
        "ko": "대학 친구 두 명이 1995년에 세운 그 회사는 그 지역에서 가장 큰 회사들 중 하나로 성장했다."
      },
      {
        "en": "Visitors entering the museum must leave their bags at the front desk before the tour begins.",
        "ko": "박물관에 들어가는 방문객들은 관람이 시작되기 전에 안내 데스크에 가방을 맡겨야 한다."
      },
      {
        "en": "To adapt to a completely new environment requires patience and an open mind.",
        "ko": "완전히 새로운 환경에 적응하는 것은 인내심과 열린 마음을 필요로 한다."
      }
    ],
    "quiz": [
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? The birds (   ) south every winter return to the same lake each spring.",
        "choices": [
          "flying",
          "fly",
          "flew"
        ],
        "answer": 0,
        "explain": "이 문장의 본동사는 뒤에 있는 return입니다. 접속사가 없으니 동사는 하나만 올 수 있어서, 빈칸에는 The birds를 꾸미는 준동사인 현재분사 flying이 와야 합니다. fly나 flew를 넣으면 한 절에 동사가 두 개가 되어 틀립니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "The girl wearing a red coat waved at us from across the street.",
          "Learning a foreign language takes time and steady effort.",
          "People who live near the airport complaining about the noise."
        ],
        "answer": 2,
        "explain": "세 번째 문장에서 who live는 관계사절의 동사일 뿐이고, 주어 People의 본동사가 없습니다. complaining을 complain으로 바꿔야 완전한 문장이 됩니다. 첫 문장은 waved, 두 번째 문장은 takes라는 본동사가 있어서 어법상 맞습니다."
      },
      {
        "q": "(A)/(B)에 알맞은 짝은? The scientists (A)[hoping/hoped] to find a cure (B)[conducting/conducted] hundreds of experiments.",
        "choices": [
          "hoping - conducted",
          "hoped - conducting",
          "hoping - conducting"
        ],
        "answer": 0,
        "explain": "이 문장에는 접속사가 없으므로 본동사는 하나여야 합니다. (B)를 본동사 conducted로 삼으면, (A)는 주어 The scientists를 꾸미는 분사 hoping이 됩니다. 과학자들이 직접 바라는 능동 관계이므로 hoping이 맞고, 둘 다 준동사로 만들면 본동사가 사라져 틀립니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? It is important (   ) the instructions carefully before using the machine.",
        "choices": [
          "read",
          "to read",
          "reads"
        ],
        "answer": 1,
        "explain": "이 문장의 본동사는 이미 is가 있습니다. It은 가주어이고 진짜 주어가 빈칸부터 시작되므로, 준동사인 to부정사 to read가 와야 합니다. read나 reads를 넣으면 한 절에 본동사가 두 개가 되어 틀립니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? The festival, (   ) every autumn in the old town, attracts thousands of visitors.",
        "choices": [
          "holds",
          "is held",
          "held"
        ],
        "answer": 2,
        "explain": "본동사는 콤마 뒤의 attracts이므로, 콤마 사이의 삽입구에는 동사가 아니라 분사가 와야 합니다. 축제는 '열리는' 대상이므로 수동의 과거분사 held가 맞습니다. holds나 is held를 넣으면 접속사 없이 동사가 두 개가 되어 틀립니다."
      }
    ]
  },
  {
    "id": "c05",
    "title": "관계대명사 vs 관계부사",
    "key": "관계사 뒤 문장이 주어나 목적어가 빠진 불완전한 문장이면 관계대명사, 완전한 문장이면 관계부사를 고른다.",
    "hook": "'뒤가 비면 대명사, 뒤가 차면 부사'라고 기억하세요.",
    "summary": "관계사 문제는 which·who·that 같은 관계대명사와 where·when·why·how 같은 관계부사 중 무엇이 맞는지 묻는 유형입니다. 선행사가 장소나 시간이라고 해서 무조건 where나 when을 고르면 함정에 빠집니다. 진짜 기준은 관계사 뒤에 이어지는 문장의 완전성입니다. 뒤 문장에 주어나 목적어가 빠져 있으면 그 빈자리를 채우는 관계대명사가 필요하고, 주어·목적어가 다 갖춰진 완전한 문장이면 관계부사가 필요합니다. 관계부사는 전치사 + 관계대명사로 바꿔 쓸 수 있다는 점, 그리고 콤마 뒤에는 that을 쓸 수 없다는 점도 함께 출제됩니다. 선행사 대신 뒤 문장의 구조를 먼저 보는 습관을 들이세요.",
    "rules": [
      "1단계: 밑줄 친 관계사 뒤에 이어지는 절을 끝까지 읽습니다.",
      "2단계: 그 절에 주어나 목적어가 빠져 있는지, 아니면 완전한 문장인지 판단합니다.",
      "3단계: 불완전하면 관계대명사(who, which, that 등), 완전하면 관계부사(where, when, why, how)를 고릅니다.",
      "4단계: 관계부사 자리라면 선행사(장소, 시간, 이유, 방법)와 종류가 맞는지, 또는 전치사 + 관계대명사로 바꿀 수 있는지 확인합니다.",
      "5단계: 선행사가 없으면 what, 콤마 뒤면 that 불가 같은 추가 규칙을 점검합니다."
    ],
    "examples": [
      {
        "en": "The small town where I spent my childhood has changed beyond recognition over the years.",
        "ko": "내가 어린 시절을 보낸 그 작은 마을은 세월이 흐르면서 몰라보게 변했다."
      },
      {
        "en": "She finally met the author whose novel had inspired her to become a writer.",
        "ko": "그녀는 마침내 자신이 작가가 되도록 영감을 준 소설을 쓴 그 작가를 만났다."
      },
      {
        "en": "I still remember the day when we first climbed that mountain together in the early morning fog.",
        "ko": "나는 이른 아침 안개 속에서 우리가 처음으로 그 산을 함께 올랐던 날을 아직도 기억한다."
      }
    ],
    "quiz": [
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? This is the house (   ) the famous poet was born.",
        "choices": [
          "which",
          "where",
          "whom"
        ],
        "answer": 1,
        "explain": "빈칸 뒤의 the famous poet was born은 주어와 동사를 다 갖춘 완전한 문장입니다. 뒤가 완전하고 선행사가 장소(the house)이므로 관계부사 where가 맞습니다. which나 whom은 뒤 문장에 주어나 목적어의 빈자리가 있어야 쓸 수 있습니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "Seoul is the city which I want to live.",
          "The reason why he was late remains unclear.",
          "The hotel where we stayed offered a great view of the sea."
        ],
        "answer": 0,
        "explain": "live는 자동사라서 I want to live는 목적어가 빠진 문장이 아니라 완전한 문장입니다. 그래서 which가 아니라 where 또는 which ... in을 써야 합니다. 두 번째와 세 번째 문장은 관계부사 뒤에 완전한 문장이 이어져서 어법상 맞습니다."
      },
      {
        "q": "(A)/(B)에 알맞은 짝은? The village (A)[which/where] we visited last summer is famous for a festival (B)[which/where] attracts many tourists.",
        "choices": [
          "where - which",
          "which - where",
          "which - which"
        ],
        "answer": 2,
        "explain": "(A) 뒤의 we visited는 타동사 visited의 목적어가 빠진 불완전한 문장이므로 관계대명사 which가 맞습니다. (B) 뒤의 attracts many tourists는 주어가 빠져 있으므로 주어 역할을 하는 which가 맞습니다. 선행사가 장소라고 무조건 where를 고르면 안 됩니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? Do you know the exact time (   ) the accident occurred?",
        "choices": [
          "which",
          "when",
          "what"
        ],
        "answer": 1,
        "explain": "빈칸 뒤의 the accident occurred는 주어와 동사가 모두 있는 완전한 문장입니다. 선행사가 시간(the exact time)이고 뒤가 완전하므로 관계부사 when이 맞습니다. what은 선행사가 없을 때만 쓰고, which는 뒤가 불완전할 때 씁니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? The scientist explained the process (   ) plants convert sunlight into energy.",
        "choices": [
          "which",
          "where",
          "by which"
        ],
        "answer": 2,
        "explain": "빈칸 뒤의 plants convert sunlight into energy는 주어와 목적어를 다 갖춘 완전한 문장입니다. 그래서 관계대명사 which는 쓸 수 없고, '그 과정을 통해'라는 뜻의 전치사 + 관계대명사인 by which가 맞습니다. where는 선행사가 장소일 때 쓰므로 과정(process)에는 어울리지 않습니다."
      }
    ]
  },
  {
    "id": "c06",
    "title": "what vs that",
    "key": "밑줄 뒤의 절이 불완전하면 what, 주어·목적어가 다 갖춰진 완전한 절이면 that을 쓴다.",
    "hook": "빈자리가 보이면 what, 꽉 찬 문장이면 that!",
    "summary": "수능 어법에서 가장 자주 나오는 유형 중 하나로, 명사절을 이끄는 what과 that 중 무엇이 맞는지 묻습니다. 판단 기준은 단 하나, 뒤에 오는 절이 완전한가 불완전한가입니다. what은 그 자체가 절 안에서 주어나 목적어 역할을 하므로 뒤에는 무언가 빠진 불완전한 절이 옵니다. 반면 that은 접속사일 뿐이라 뒤에 주어와 목적어가 모두 갖춰진 완전한 절이 와야 합니다. 또한 전치사 바로 뒤에는 that절이 올 수 없고 what절은 올 수 있다는 점도 자주 출제됩니다. 밑줄을 보면 해석보다 먼저 절의 구조부터 확인하는 습관이 중요합니다.",
    "rules": [
      "1단계: 밑줄 친 what/that 뒤의 절을 끝까지 읽는다.",
      "2단계: 그 절에서 주어와 (타동사라면) 목적어가 모두 있는지 확인한다.",
      "3단계: 주어나 목적어 자리가 비어 있으면 불완전한 절이므로 what을 고른다.",
      "4단계: 빠진 것이 없는 완전한 절이면 that을 고른다.",
      "5단계: 밑줄 바로 앞이 전치사라면 that은 불가능하므로 what인지 다시 확인한다."
    ],
    "examples": [
      {
        "en": "What matters most in a friendship is honesty, not how often you meet.",
        "ko": "우정에서 가장 중요한 것은 얼마나 자주 만나느냐가 아니라 정직함이다."
      },
      {
        "en": "Scientists found that the birds change their songs when the city gets noisy.",
        "ko": "과학자들은 도시가 시끄러워지면 새들이 자신의 노래를 바꾼다는 것을 발견했다."
      },
      {
        "en": "She could not believe what her little brother had built with only paper and glue.",
        "ko": "그녀는 어린 남동생이 종이와 풀만으로 만들어 낸 것을 믿을 수가 없었다."
      }
    ],
    "quiz": [
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? The report shows ( ) many teenagers sleep less than six hours on weekdays.",
        "choices": [
          "what",
          "that",
          "which"
        ],
        "answer": 1,
        "explain": "빈칸 뒤 'many teenagers sleep ...'은 주어와 동사가 다 갖춰진 완전한 절이므로 접속사 that이 맞습니다. what은 뒤에 주어나 목적어가 빠진 불완전한 절이 올 때 쓰고, which는 앞에 꾸며 줄 명사가 없어서 틀립니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? ( ) surprised the judges was the child's calm voice on the big stage.",
        "choices": [
          "What",
          "That",
          "It"
        ],
        "answer": 0,
        "explain": "빈칸 뒤 'surprised the judges'에는 주어가 빠져 있으므로, 스스로 주어 역할까지 하는 What이 필요합니다. That은 완전한 절 앞에만 쓸 수 있고, It을 넣으면 뒤의 동사 was와 연결할 방법이 없어 틀립니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "I agree that exercise improves memory.",
          "The teacher explained that the moon affects the tides.",
          "Nobody knows that will happen to the old library next year."
        ],
        "answer": 2,
        "explain": "세 번째 문장은 'will happen' 앞에 주어가 없는 불완전한 절이므로 that이 아니라 what을 써야 합니다. 첫 번째와 두 번째 문장은 that 뒤에 주어와 동사가 모두 있는 완전한 절이라 올바릅니다."
      },
      {
        "q": "(A)/(B)에 알맞은 짝은? The problem is (A)[what / that] we ignore (B)[what / that] our bodies tell us.",
        "choices": [
          "A: what — B: that",
          "A: that — B: what",
          "A: that — B: that"
        ],
        "answer": 1,
        "explain": "(A) 뒤 'we ignore ~'는 주어와 목적어가 갖춰진 완전한 절이므로 that이 맞습니다. (B) 뒤 'our bodies tell us'는 tell의 목적어(무엇을 말하는지)가 빠진 불완전한 절이므로 what이 맞습니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? You can learn a lot from ( ) old people say about their past mistakes.",
        "choices": [
          "that",
          "which",
          "what"
        ],
        "answer": 2,
        "explain": "빈칸 뒤 'old people say'는 say의 목적어가 빠진 불완전한 절이므로 what이 맞습니다. 게다가 전치사 from 바로 뒤에는 that절을 쓸 수 없다는 점도 기억하세요."
      }
    ]
  },
  {
    "id": "c07",
    "title": "병렬구조",
    "key": "and/or/but 뒤에 밑줄이 있으면, 접속사 앞의 짝을 찾아 형태를 똑같이 맞춘다.",
    "hook": "접속사가 보이면 뒤보다 먼저 앞의 짝꿍부터 찾아라!",
    "summary": "등위접속사 and, or, but과 상관접속사 not only A but also B, both A and B 등은 문법적으로 같은 형태끼리 연결해야 합니다. 수능에서는 세 개를 나열하다가 마지막 항목의 형태를 슬쩍 바꿔 놓고 밑줄을 치는 방식이 가장 흔합니다. 동사면 동사끼리, to부정사면 to부정사끼리, 동명사면 동명사끼리 짝을 맞추는 것이 핵심입니다. 특히 나열이 길어지면 밑줄과 짝이 멀리 떨어져 있어서 눈으로 놓치기 쉽습니다. 밑줄 근처만 보지 말고 접속사 앞으로 거슬러 올라가 첫 번째 항목의 형태를 확인하는 습관을 들이세요.",
    "rules": [
      "1단계: 밑줄 근처에서 and, or, but 같은 접속사를 찾는다.",
      "2단계: 접속사 앞으로 거슬러 올라가 무엇과 무엇이 연결되는지 짝을 찾는다.",
      "3단계: 짝의 문법 형태(동사, to부정사, 동명사, 명사 등)를 확인한다.",
      "4단계: 밑줄 친 부분을 짝과 같은 형태로 맞춘다.",
      "5단계: not only A but also B 같은 상관접속사도 A와 B의 형태가 같은지 확인한다."
    ],
    "examples": [
      {
        "en": "The volunteers spent the morning cleaning the beach, sorting the trash, and recording the data.",
        "ko": "자원봉사자들은 해변을 청소하고, 쓰레기를 분류하고, 자료를 기록하며 아침 시간을 보냈다."
      },
      {
        "en": "To succeed in a new country, you must learn the language, respect the culture, and build local friendships.",
        "ko": "새로운 나라에서 성공하려면 언어를 배우고, 문화를 존중하고, 현지 친구 관계를 쌓아야 한다."
      },
      {
        "en": "The medicine not only reduces pain but also helps patients sleep better.",
        "ko": "그 약은 통증을 줄여 줄 뿐만 아니라 환자들이 더 잘 자도록 돕는다."
      }
    ],
    "quiz": [
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? Reading novels helps students expand their vocabulary, understand other cultures, and ( ) their imagination.",
        "choices": [
          "developing",
          "to developing",
          "develop"
        ],
        "answer": 2,
        "explain": "and가 expand, understand, ( )를 나열하고 있으므로 같은 동사원형 develop이 맞습니다. developing이나 to developing은 앞의 두 짝과 형태가 달라져 병렬이 깨집니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "She enjoys painting landscapes and to take photos of wild birds.",
          "He turned off the lights and locked the door before leaving.",
          "The course teaches you how to plan, write, and revise an essay."
        ],
        "answer": 0,
        "explain": "첫 번째 문장은 and가 painting과 짝을 이루므로 to take가 아니라 taking으로 써야 합니다. 두 번째는 turned와 locked, 세 번째는 to plan, (to) write, (to) revise로 형태가 잘 맞아 올바릅니다."
      },
      {
        "q": "(A)/(B)에 알맞은 짝은? The manager asked us to arrive early, (A)[checking / check] the equipment, and (B)[reporting / report] any problems.",
        "choices": [
          "A: checking — B: report",
          "A: check — B: report",
          "A: check — B: reporting"
        ],
        "answer": 1,
        "explain": "to arrive와 나열되는 항목이므로 (A)와 (B) 모두 to가 생략된 동사원형 check, report로 맞춰야 합니다. checking이나 reporting을 쓰면 to부정사 나열과 형태가 달라져 병렬이 깨집니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? The new policy aims to cut costs, improve safety, and ( ) worker satisfaction.",
        "choices": [
          "increasing",
          "increased",
          "increase"
        ],
        "answer": 2,
        "explain": "to cut, (to) improve와 나열되는 자리이므로 동사원형 increase가 맞습니다. to부정사가 나열될 때 두 번째부터는 to를 생략하고 원형만 쓸 수 있다는 점이 포인트입니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? Walking to school not only saves money but also ( ) your health.",
        "choices": [
          "improves",
          "improving",
          "to improve"
        ],
        "answer": 0,
        "explain": "not only A but also B에서 A 자리에 saves라는 3인칭 단수 동사가 왔으므로 B도 같은 형태인 improves가 맞습니다. 주어 Walking to school은 동명사구라서 단수 취급한다는 것도 함께 기억하세요."
      }
    ]
  },
  {
    "id": "c08",
    "title": "대명사의 수·격 일치",
    "key": "대명사가 가리키는 명사를 찾아 단수/복수를 맞추고, 문장 속 역할에 맞는 격(주격·목적격·소유격·재귀)을 확인한다.",
    "hook": "대명사를 보면 먼저 '주인 명사'를 찾고, 그다음 자리(격)를 보라!",
    "summary": "수능에서는 it/them, its/their처럼 대명사의 단수·복수가 가리키는 명사와 맞는지를 자주 묻습니다. 밑줄 친 대명사만 보면 답이 안 나오고, 반드시 앞 문장으로 돌아가 무엇을 가리키는지 찾아야 합니다. 특히 company, team, museum처럼 여러 사람이 모인 단체라도 문법적으로는 단수 취급하는 명사가 함정으로 자주 나옵니다. 또 주어와 목적어가 같은 대상이면 재귀대명사(-self/-selves)를 써야 하고, 다른 대상이면 일반 목적격을 써야 합니다. 전치사 뒤에는 목적격이 온다는 격 문제도 함께 출제되니, 수와 격을 둘 다 점검하세요.",
    "rules": [
      "1단계: 밑줄 친 대명사가 가리키는 명사를 앞에서 찾는다.",
      "2단계: 그 명사가 단수인지 복수인지 확인해 대명사의 수를 맞춘다.",
      "3단계: 대명사가 문장에서 주어, 목적어, 소유 중 어떤 역할인지 보고 격을 정한다.",
      "4단계: 주어와 목적어가 같은 사람·사물이면 재귀대명사(-self/-selves)를 쓴다.",
      "5단계: 전치사 바로 뒤라면 목적격이 맞는지 마지막으로 확인한다."
    ],
    "examples": [
      {
        "en": "Every plant in the garden has its own label showing where it came from.",
        "ko": "정원의 모든 식물에는 어디에서 왔는지를 보여 주는 자기만의 이름표가 붙어 있다."
      },
      {
        "en": "The twins painted the fence themselves instead of hiring a worker.",
        "ko": "그 쌍둥이는 일꾼을 고용하는 대신 직접 울타리를 칠했다."
      },
      {
        "en": "Whales protect their young by keeping them in the middle of the group.",
        "ko": "고래는 새끼들을 무리 한가운데에 두어 보호한다."
      }
    ],
    "quiz": [
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? The company changed ( ) logo to attract younger customers.",
        "choices": [
          "their",
          "its",
          "it"
        ],
        "answer": 1,
        "explain": "company는 단체지만 문법적으로 단수 명사이므로 단수 소유격 its가 맞습니다. their는 복수라서 틀리고, it은 소유격이 아니어서 logo를 꾸밀 수 없습니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? After the long race, the runners treated ( ) to a big dinner.",
        "choices": [
          "them",
          "themself",
          "themselves"
        ],
        "answer": 2,
        "explain": "주어 the runners와 대접받는 대상이 같은 사람들이므로 재귀대명사 themselves를 써야 합니다. them을 쓰면 다른 사람들을 대접했다는 뜻이 되고, themself는 복수 주어에 맞지 않는 형태입니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "The museum opened their doors early for the school group.",
          "My sister and I made ourselves sandwiches for the picnic.",
          "The dog wagged its tail when it saw the mailman."
        ],
        "answer": 0,
        "explain": "museum은 단수 명사이므로 their가 아니라 its doors라고 써야 합니다. 두 번째는 주어(내 동생과 나)와 만들어 준 대상이 같아 ourselves가 맞고, 세 번째는 단수 its와 it이 개를 잘 가리키고 있어 올바릅니다."
      },
      {
        "q": "(A)/(B)에 알맞은 짝은? Students who forget (A)[his / their] passwords should reset (B)[them / themselves] on the website.",
        "choices": [
          "A: his — B: them",
          "A: their — B: them",
          "A: their — B: themselves"
        ],
        "answer": 1,
        "explain": "(A)는 복수 명사 Students를 가리키므로 their가 맞습니다. (B)는 reset의 대상이 학생 자신이 아니라 비밀번호(passwords)이므로 재귀대명사가 아닌 them을 써야 합니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? The prize was shared between my brother and ( ).",
        "choices": [
          "I",
          "myself",
          "me"
        ],
        "answer": 2,
        "explain": "전치사 between 뒤에는 목적격이 와야 하므로 me가 맞습니다. I는 주격이라 전치사 뒤에 올 수 없고, myself는 주어와 같은 대상을 다시 가리킬 때만 쓰는 재귀대명사입니다."
      }
    ]
  },
  {
    "id": "c09",
    "title": "형용사 vs 부사",
    "key": "밑줄이 꾸미는 대상을 찾는다 — 명사를 꾸미거나 보어 자리면 형용사, 동사·형용사·문장 전체를 꾸미면 부사.",
    "hook": "꾸밈 받는 말을 찾아 화살표를 그려라 — 화살표 끝이 명사면 형용사!",
    "summary": "형용사와 부사 중 무엇이 맞는지 묻는 문제는 '무엇을 꾸미는가'만 정확히 찾으면 풀립니다. 명사를 꾸미거나 be동사 뒤 보어 자리에는 형용사가 오고, 동사나 형용사, 문장 전체를 꾸밀 때는 부사가 옵니다. 수능 최대 함정은 look, sound, feel, smell, taste 같은 감각동사와 remain, stay 같은 상태 유지 동사입니다. 이 동사들 뒤는 주어의 상태를 설명하는 보어 자리라서, 우리말로는 '~하게'로 해석되어도 반드시 형용사를 써야 합니다. 해석에 의존하지 말고 동사의 종류와 문장 구조로 판단하는 연습이 필요합니다.",
    "rules": [
      "1단계: 밑줄 친 단어가 꾸미는 대상을 찾아 화살표를 그린다.",
      "2단계: 화살표 끝이 명사라면 형용사를 고른다.",
      "3단계: 밑줄 앞 동사가 감각동사(look, feel, taste 등)나 상태동사(remain, stay)라면 보어 자리이므로 형용사를 고른다.",
      "4단계: 일반 동사의 동작 방식이나 형용사·문장 전체를 꾸민다면 부사를 고른다.",
      "5단계: 우리말 해석('~하게')에 속지 말고 문장 구조로만 판단한다."
    ],
    "examples": [
      {
        "en": "The soup tasted strange, so nobody at the table finished the bowl.",
        "ko": "수프 맛이 이상해서 식탁에 앉은 누구도 그릇을 비우지 않았다."
      },
      {
        "en": "She answered the difficult question surprisingly quickly.",
        "ko": "그녀는 그 어려운 질문에 놀라울 만큼 빠르게 대답했다."
      },
      {
        "en": "The streets remained quiet even after the festival ended.",
        "ko": "축제가 끝난 뒤에도 거리는 조용한 상태로 남아 있었다."
      }
    ],
    "quiz": [
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? The old bridge looks ( ) after the storm, so the city closed it.",
        "choices": [
          "dangerous",
          "dangerously",
          "danger"
        ],
        "answer": 0,
        "explain": "look은 감각동사라서 뒤에 주어의 상태를 설명하는 형용사 보어 dangerous가 와야 합니다. '위험하게 보인다'라는 해석 때문에 부사 dangerously를 고르면 안 되고, 명사 danger는 보어로 어색합니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? The population of the town grew ( ) after the new factory opened.",
        "choices": [
          "rapid",
          "rapidly",
          "rapidness"
        ],
        "answer": 1,
        "explain": "여기서 grew는 '증가했다'라는 뜻의 일반 동사이고, 빈칸은 그 동작이 얼마나 빨랐는지 꾸미는 자리이므로 부사 rapidly가 맞습니다. 형용사 rapid는 동사를 꾸밀 수 없습니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "The children stayed calm during the fire drill.",
          "He solved the puzzle more easily than his teacher expected.",
          "The manager spoke so quiet that nobody heard the announcement."
        ],
        "answer": 2,
        "explain": "세 번째 문장의 spoke는 말하는 동작을 나타내는 동사이므로 형용사 quiet가 아니라 부사 quietly로 꾸며야 합니다. 첫 번째는 상태동사 stayed 뒤 보어라 형용사 calm이 맞고, 두 번째는 동사 solved를 부사 easily가 꾸며 올바릅니다."
      },
      {
        "q": "(A)/(B)에 알맞은 짝은? The medicine worked (A)[effective / effectively], and the patient felt (B)[strong / strongly] again within a week.",
        "choices": [
          "A: effectively — B: strong",
          "A: effective — B: strongly",
          "A: effectively — B: strongly"
        ],
        "answer": 0,
        "explain": "(A)는 동사 worked를 꾸미므로 부사 effectively가 맞습니다. (B)는 감각동사 felt 뒤의 보어 자리라서 형용사 strong을 써야 하며, strongly를 쓰면 틀립니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? Please handle the glass bottles ( ) when you pack the box.",
        "choices": [
          "careful",
          "carefully",
          "care"
        ],
        "answer": 1,
        "explain": "빈칸은 동사 handle(다루다)의 방식을 꾸미는 자리이므로 부사 carefully가 맞습니다. 형용사 careful은 명사나 보어 자리에만 쓸 수 있고, 명사 care는 여기서 문법적으로 들어갈 수 없습니다."
      }
    ]
  },
  {
    "id": "c10",
    "title": "to부정사 vs 동명사",
    "key": "앞의 동사(또는 전치사)가 목적어로 무엇을 취하는지 확인한다 — 전치사 뒤는 무조건 동명사.",
    "hook": "enjoy·finish·mind·avoid·give up은 -ing파, want·hope·decide·plan은 to파!",
    "summary": "동사 뒤 목적어 자리에 to부정사와 동명사 중 무엇이 오는지는 앞 동사가 결정합니다. enjoy, finish, mind, avoid, quit, give up 등은 동명사만, want, hope, decide, plan, promise 등은 to부정사만 목적어로 취합니다. 전치사 뒤에는 예외 없이 동명사가 온다는 규칙도 자주 출제됩니다. 가장 까다로운 것은 remember, forget, stop처럼 둘 다 쓸 수 있지만 뜻이 달라지는 동사입니다. 이때 to부정사는 앞으로 할 일, 동명사는 이미 한 일을 나타낸다는 시간 차이를 문맥으로 판단해야 합니다. 결국 동사별 성향을 외우고, 헷갈리는 동사는 문맥의 시간을 확인하는 것이 순서입니다.",
    "rules": [
      "1단계: 밑줄 바로 앞의 동사나 전치사를 확인한다.",
      "2단계: 앞이 전치사(또는 give up 같은 구동사)라면 무조건 동명사를 고른다.",
      "3단계: enjoy, finish, mind, avoid, quit 계열 동사면 동명사를 고른다.",
      "4단계: want, hope, decide, plan, promise 계열 동사면 to부정사를 고른다.",
      "5단계: remember, forget, stop처럼 둘 다 가능한 동사면 문맥을 보고 미래의 일이면 to부정사, 과거의 일이면 동명사를 고른다."
    ],
    "examples": [
      {
        "en": "She decided to study marine biology after visiting the aquarium.",
        "ko": "그녀는 수족관을 방문한 뒤 해양 생물학을 공부하기로 결심했다."
      },
      {
        "en": "He avoided answering the reporter's questions about the accident.",
        "ko": "그는 그 사고에 관한 기자의 질문에 대답하는 것을 피했다."
      },
      {
        "en": "Thank you for helping me carry these heavy boxes upstairs.",
        "ko": "이 무거운 상자들을 위층으로 옮기는 것을 도와줘서 고맙습니다."
      }
    ],
    "quiz": [
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? The doctor advised him to give up ( ) late-night snacks.",
        "choices": [
          "to eat",
          "eat",
          "eating"
        ],
        "answer": 2,
        "explain": "give up의 up은 전치사이므로 뒤에는 반드시 동명사 eating이 와야 합니다. 전치사 뒤에는 to부정사나 동사원형이 올 수 없다는 것이 핵심 규칙입니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? They hope ( ) the project before the deadline.",
        "choices": [
          "finishing",
          "to finish",
          "finished"
        ],
        "answer": 1,
        "explain": "hope는 to부정사만 목적어로 취하는 동사이므로 to finish가 맞습니다. hope는 아직 일어나지 않은 미래의 일을 바라는 동사라서 미래 성격의 to부정사와 어울린다고 기억하면 쉽습니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "My father quit to smoke last year for his health.",
          "I don't mind waiting a few more minutes for the bus.",
          "We plan to visit our grandparents this summer."
        ],
        "answer": 0,
        "explain": "quit은 동명사만 목적어로 취하므로 quit smoking이라고 써야 합니다. mind는 동명사 waiting과, plan은 to부정사 to visit과 짝을 이루므로 두 번째와 세 번째 문장은 올바릅니다."
      },
      {
        "q": "(A)/(B)에 알맞은 짝은? Don't forget (A)[to lock / locking] the door tonight; I still remember (B)[to lose / losing] my bag when I left it open.",
        "choices": [
          "A: locking — B: to lose",
          "A: to lock — B: to lose",
          "A: to lock — B: losing"
        ],
        "answer": 2,
        "explain": "(A)는 오늘 밤 '앞으로 할 일'을 잊지 말라는 뜻이므로 to lock이 맞습니다. (B)는 가방을 잃어버렸던 '과거의 일'을 기억하는 것이므로 동명사 losing을 써야 합니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? She is interested in ( ) a small bakery in her hometown.",
        "choices": [
          "opening",
          "to open",
          "open"
        ],
        "answer": 0,
        "explain": "전치사 in 뒤에는 반드시 동명사가 와야 하므로 opening이 맞습니다. be interested in처럼 전치사로 끝나는 표현 뒤에 to부정사를 쓰면 안 된다는 것이 단골 출제 포인트입니다."
      }
    ]
  },
  {
    "id": "c11",
    "title": "분사구문",
    "key": "밑줄 친 분사와 주절의 주어가 '하는' 관계면 -ing, '당하는' 관계면 p.p.를 고른다.",
    "hook": "주어 찾고 → 능동이면 ing, 수동이면 p.p. — '주·능·수' 3초 체크!",
    "summary": "분사구문은 수능 어법에서 거의 매년 출제되는 최다 빈출 유형입니다. 문장 앞이나 뒤, 혹은 콤마 사이에 -ing나 p.p.가 밑줄로 나오고, 둘 중 무엇이 맞는지 판단하게 합니다. 핵심은 분사의 의미상 주어, 즉 주절의 주어를 찾아서 그 주어가 분사의 동작을 '직접 하는지'(능동 → -ing) 아니면 '당하는지'(수동 → p.p.)를 확인하는 것입니다. Not knowing처럼 부정어가 분사 앞에 오는 형태, with + 목적어 + 분사 형태도 함께 자주 나옵니다. 감정동사(surprise, excite 등)는 주어가 감정을 느끼면 p.p., 감정을 일으키면 -ing라는 점도 꼭 기억하세요.",
    "rules": [
      "1단계: 밑줄 친 부분이 분사구문(콤마로 분리된 -ing/p.p. 덩어리)인지 확인한다.",
      "2단계: 주절의 주어를 찾아 분사의 의미상 주어로 놓는다.",
      "3단계: 주어가 분사의 동작을 직접 하면 능동이므로 -ing를 고른다.",
      "4단계: 주어가 동작을 당하는 대상이면 수동이므로 p.p.를 고른다.",
      "5단계: with + 목적어 + 분사 구조라면 주어 대신 그 목적어와의 능동/수동 관계로 판단한다."
    ],
    "examples": [
      {
        "en": "Walking along the beach, she found a small bottle with a letter inside.",
        "ko": "해변을 따라 걷다가, 그녀는 안에 편지가 든 작은 병을 발견했다."
      },
      {
        "en": "Surrounded by tall mountains, the village stays cool even in summer.",
        "ko": "높은 산들로 둘러싸여 있어서, 그 마을은 여름에도 시원하다."
      },
      {
        "en": "He listened to the lecture with his eyes fixed on the screen.",
        "ko": "그는 화면에 시선을 고정한 채 강의를 들었다."
      }
    ],
    "quiz": [
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은?\n( ) in simple language, the science book attracts many young readers.",
        "choices": [
          "Writing",
          "Written",
          "To write"
        ],
        "answer": 1,
        "explain": "주어인 책(the book)은 누군가에 의해 '쓰여진' 것이므로 수동 관계라서 Written이 맞습니다. Writing은 책이 스스로 글을 쓴다는 이상한 뜻이 되고, To write는 분사구문 자리에 올 수 없습니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "Feeling tired after the game, he went straight home.",
          "Exhausting from the long journey, she fell asleep on the sofa.",
          "Seen from the airplane, the island looks like a heart."
        ],
        "answer": 1,
        "explain": "두 번째 문장의 그녀는 지친 감정을 '느끼는' 쪽이므로 Exhausted(p.p.)로 써야 합니다. 감정동사는 주어가 감정을 느끼면 p.p.를 씁니다. 나머지 두 문장은 능동(Feeling)과 수동(Seen) 관계가 올바르게 쓰였습니다."
      },
      {
        "q": "(A)/(B)에 알맞은 짝은?\n(A) [Judging / Judged] from her smile, the interview went well.\nThe old letter, (B) [writing / written] in faded ink, was hard to read.",
        "choices": [
          "Judging - written",
          "Judged - writing",
          "Judging - writing"
        ],
        "answer": 0,
        "explain": "Judging from(~로 판단하건대)은 굳어진 표현이라 항상 -ing를 씁니다. 편지는 잉크로 '쓰여진' 것이므로 수동인 written이 맞습니다. 그래서 Judging - written 짝이 정답입니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은?\nNot ( ) what to say, the boy just stood there in silence.",
        "choices": [
          "known",
          "to know",
          "knowing"
        ],
        "answer": 2,
        "explain": "소년이 무슨 말을 할지 '알지 못하는' 주체이므로 능동인 knowing이 맞고, 부정어 Not은 분사 바로 앞에 둡니다. known은 소년이 알려진다는 수동 뜻이 되어 어색하고, to know는 분사구문 자리에 쓸 수 없습니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은?\nShe watched the sunset with her arms ( ) around her knees.",
        "choices": [
          "wrapped",
          "wrapping",
          "to wrap"
        ],
        "answer": 0,
        "explain": "with + 목적어 + 분사 구조에서는 목적어와 분사의 관계를 봅니다. 팔(arms)은 무릎에 '감겨진' 상태이므로 수동인 wrapped가 맞습니다. wrapping은 팔이 스스로 감는다는 능동 뜻이라 어색합니다."
      }
    ]
  },
  {
    "id": "c12",
    "title": "시제 판별 (완료시제 중심)",
    "key": "밑줄 친 동사의 시제를 봤을 때, 문장 속 시간 표시어(since, for, by the time, last year 등)와 시제가 맞는지 확인한다.",
    "hook": "since/for는 완료, last year는 과거, by the time+과거는 과거완료 — 시간 표시어가 답을 알려준다!",
    "summary": "시제 문제는 수능에서 단독으로도 나오고 밑줄 5개 중 하나로도 자주 섞여 나옵니다. 특히 현재완료와 단순과거의 구별, 과거완료(had p.p.)의 쓰임이 핵심 출제 포인트입니다. 판단의 열쇠는 문장 안의 시간 표시어입니다. since, for, so far가 있으면 현재완료, last year나 ago처럼 명확한 과거 시점이 있으면 단순과거를 씁니다. 과거의 어떤 시점보다 더 먼저 일어난 일은 과거완료로 표현하며, by + 미래 시점이 있으면 미래완료(will have p.p.)가 짝을 이룹니다. 시간 표시어와 시제의 짝만 정확히 외워도 대부분의 문제를 풀 수 있습니다.",
    "rules": [
      "1단계: 밑줄 친 동사 주변에서 시간 표시어(since, for, ago, last ~, by the time 등)를 찾는다.",
      "2단계: since + 과거 시점, for + 기간, so far가 있으면 현재완료(have p.p.)를 고른다.",
      "3단계: ago, last year, yesterday처럼 끝난 과거 시점이 있으면 단순과거를 고른다.",
      "4단계: 과거의 기준 시점보다 먼저 일어난 일이면 과거완료(had p.p.)를 고른다.",
      "5단계: by + 미래 시점이 있으면 미래완료(will have p.p.)를 고른다."
    ],
    "examples": [
      {
        "en": "The old bookstore has served this neighborhood for over thirty years.",
        "ko": "그 오래된 서점은 30년 넘게 이 동네에 봉사해 왔다."
      },
      {
        "en": "When the firefighters arrived, the flames had already spread to the roof.",
        "ko": "소방관들이 도착했을 때, 불길은 이미 지붕까지 번져 있었다."
      },
      {
        "en": "By the end of this year, the company will have opened ten new branches.",
        "ko": "올해 말이면 그 회사는 열 개의 새 지점을 열게 될 것이다."
      }
    ],
    "quiz": [
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은?\nDr. Kim ( ) rare plants in this forest since she moved here in 2015.",
        "choices": [
          "studied",
          "studies",
          "has studied"
        ],
        "answer": 2,
        "explain": "since 2015처럼 '~ 이후로 지금까지'를 나타내는 말이 있으면 현재완료(has studied)를 씁니다. studied는 과거에 끝난 일처럼 들리고, studies는 지속 기간을 담지 못해서 틀립니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "I have visited my uncle in Canada two years ago.",
          "She has never tasted such spicy food before.",
          "We have known each other for a decade."
        ],
        "answer": 0,
        "explain": "two years ago는 명확히 끝난 과거 시점이므로 현재완료가 아니라 단순과거 visited를 써야 합니다. 현재완료는 ago와 함께 쓸 수 없습니다. 나머지 두 문장은 경험(never ~ before)과 기간(for a decade)을 나타내므로 현재완료가 맞습니다."
      },
      {
        "q": "(A)/(B)에 알맞은 짝은?\nBy the time we (A) [reached / have reached] the station, the last train (B) [has left / had left].",
        "choices": [
          "have reached - has left",
          "reached - had left",
          "reached - has left"
        ],
        "answer": 1,
        "explain": "by the time 뒤에는 기준이 되는 과거 시점이므로 단순과거 reached를 쓰고, 기차가 떠난 것은 그보다 먼저 일어난 일이므로 과거완료 had left를 씁니다. 과거 이야기에 현재완료(has left)를 섞으면 틀립니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은?\nBy next March, the workers ( ) the new bridge across the river.",
        "choices": [
          "have completed",
          "had completed",
          "will have completed"
        ],
        "answer": 2,
        "explain": "By next March는 미래의 기한을 나타내므로, 그때까지 완료될 일은 미래완료 will have completed로 씁니다. 현재완료나 과거완료는 미래 기한과 짝이 맞지 않습니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은?\nThis is the first time that I ( ) a whale in the open sea.",
        "choices": [
          "saw",
          "have seen",
          "had seen"
        ],
        "answer": 1,
        "explain": "This is the first time 뒤에는 '지금까지의 경험'을 나타내는 현재완료 have seen을 씁니다. saw는 단순한 과거 사실이라 어울리지 않고, had seen은 과거 기준의 완료라서 현재(This is)와 맞지 않습니다."
      }
    ]
  },
  {
    "id": "c13",
    "title": "가정법",
    "key": "밑줄을 봤을 때 if절과 주절의 동사 형태가 한 세트(과거↔would 동사원형 / 과거완료↔would have p.p.)로 맞는지 확인한다.",
    "hook": "지금 반대는 '한 칸 과거', 옛날 반대는 '두 칸 과거(had p.p.)' — 시제를 뒤로 당겨라!",
    "summary": "가정법은 현실과 반대되는 상황을 상상하는 표현으로, 수능에서는 if절과 주절의 동사 짝이 맞는지를 묻는 문제가 주로 나옵니다. 현재 사실의 반대는 가정법 과거(if + 과거, 주절 would/could + 동사원형), 과거 사실의 반대는 가정법 과거완료(if + had p.p., 주절 would/could + have p.p.)를 씁니다. I wish, as if 뒤에도 같은 원리로 한 시제 뒤로 물러난 동사를 씁니다. 또한 Without이나 But for가 if절을 대신하는 형태, It's time + 과거동사 형태도 자주 출제됩니다. 밑줄 하나만 보지 말고 반드시 짝이 되는 절의 동사와 함께 세트로 확인하는 습관이 중요합니다.",
    "rules": [
      "1단계: 문장에 if, wish, as if, without, but for 등 가정의 신호가 있는지 찾는다.",
      "2단계: 현재 사실의 반대인지, 과거 사실의 반대인지 문맥으로 판단한다.",
      "3단계: 현재 반대면 if절은 과거형(be동사는 were), 주절은 would/could + 동사원형인지 확인한다.",
      "4단계: 과거 반대면 if절은 had p.p., 주절은 would/could + have p.p.인지 확인한다.",
      "5단계: wish나 as if 뒤 동사도 실제 시점보다 한 단계 과거로 물러났는지 확인한다."
    ],
    "examples": [
      {
        "en": "If the museum were open on Mondays, more tourists would visit the town.",
        "ko": "만약 그 박물관이 월요일에 문을 연다면, 더 많은 관광객이 그 마을을 방문할 텐데."
      },
      {
        "en": "If the sailors had checked the weather, they would not have lost their way at sea.",
        "ko": "만약 선원들이 날씨를 확인했더라면, 바다에서 길을 잃지 않았을 텐데."
      },
      {
        "en": "Without her constant encouragement, I could not have completed the marathon.",
        "ko": "그녀의 끊임없는 격려가 없었다면, 나는 마라톤을 완주하지 못했을 것이다."
      }
    ],
    "quiz": [
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은?\nIf I ( ) the mayor of this city, I would build more libraries.",
        "choices": [
          "am",
          "were",
          "had been"
        ],
        "answer": 1,
        "explain": "지금 시장이 아닌 현실의 반대를 상상하므로 가정법 과거를 쓰며, be동사는 were를 씁니다. am은 실제 사실을 말하는 직설법이고, had been은 과거 사실의 반대일 때 쓰는 형태라 주절의 would build와 짝이 맞지 않습니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은?\nIf the driver had slowed down at the corner, the accident ( ).",
        "choices": [
          "would not happen",
          "did not happen",
          "would not have happened"
        ],
        "answer": 2,
        "explain": "if절이 had slowed로 가정법 과거완료이므로 주절은 would have p.p. 형태인 would not have happened가 짝입니다. 과거에 이미 일어난 일의 반대를 말할 때는 두 절 모두 완료 형태로 맞춰야 합니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "I wish I can play the violin like my sister.",
          "He talks as if he had lived in Paris for years.",
          "But for the seatbelt, she could have been seriously hurt."
        ],
        "answer": 0,
        "explain": "wish 뒤에는 현실의 반대를 나타내기 위해 한 시제 물러난 could를 써야 하므로 can은 틀립니다. as if + had p.p.는 과거보다 앞선 일처럼 말하는 표현이고, But for는 '~이 없었다면'으로 could have p.p.와 자연스럽게 어울립니다."
      },
      {
        "q": "(A)/(B)에 알맞은 짝은?\nIt is high time you (A) [go / went] to bed.\nShe treats me as if I (B) [were / am] a little child.",
        "choices": [
          "go - am",
          "went - were",
          "went - am"
        ],
        "answer": 1,
        "explain": "It is high time 뒤에는 '벌써 했어야 한다'는 뜻으로 과거형 went를 씁니다. as if 뒤도 사실이 아닌 상상이므로 were를 씁니다. 둘 다 형태만 과거일 뿐 현재의 이야기를 한다는 점이 가정법의 특징입니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은?\n( ) the loud alarm, everyone in the building would have kept sleeping during the fire.",
        "choices": [
          "Because of",
          "Despite",
          "Without"
        ],
        "answer": 2,
        "explain": "주절이 would have kept라는 가정법 형태이므로 '~이 없었다면'이라는 가정의 뜻을 가진 Without이 정답입니다. Because of(때문에)와 Despite(에도 불구하고)는 실제 사실을 말할 때 쓰는 표현이라 가정법 주절과 어울리지 않습니다."
      }
    ]
  },
  {
    "id": "c14",
    "title": "도치 구문",
    "key": "부정어·Only·So 등이 문장 앞에 나오면 그 뒤가 '조동사(do/have/be) + 주어 + 동사' 의문문 어순인지 확인한다.",
    "hook": "부정어가 앞으로 튀어나오면 문장은 의문문처럼 뒤집힌다 — 'Never have I'를 통째로 외워라!",
    "summary": "도치 구문은 강조를 위해 부정어나 부사(구)를 문장 맨 앞으로 보내고, 주어와 동사의 순서를 바꾸는 구문입니다. 수능에서는 Never, Little, Hardly, Not until, Only + 부사구 등이 문두에 왔을 때 뒤따르는 어순이 올바른지를 묻습니다. 일반동사 문장은 do/does/did + 주어 + 동사원형, 완료 문장은 have/had + 주어 + p.p.처럼 의문문과 같은 어순이 되어야 합니다. so/neither로 '~도 그렇다'를 말할 때의 도치, 장소 부사구가 문두에 올 때 주어와 동사 전체가 자리를 바꾸는 형태도 함께 나옵니다. 문두의 신호어를 발견하는 순간 어순부터 점검하는 습관을 들이세요.",
    "rules": [
      "1단계: 문장 맨 앞에 부정어(Never, Little, Hardly, Not until)나 Only + 부사구, So + 형용사가 있는지 확인한다.",
      "2단계: 신호어가 있으면 그 뒤 어순이 조동사 + 주어 + 동사(의문문 어순)인지 확인한다.",
      "3단계: 일반동사 문장이면 do/does/did가 주어 앞에 왔는지, 동사가 원형인지 확인한다.",
      "4단계: so/neither 뒤에서도 동사(조동사) + 주어 순서인지 확인한다.",
      "5단계: 장소 부사구가 문두면 동사 + 주어 순서로 완전히 뒤바뀌었는지 확인한다."
    ],
    "examples": [
      {
        "en": "Never had the small town seen such a heavy snowfall in its history.",
        "ko": "그 작은 마을은 역사상 그렇게 많은 눈이 내린 것을 본 적이 없었다."
      },
      {
        "en": "Only when the lights went out did the audience realize the show was over.",
        "ko": "불이 꺼지고 나서야 관객들은 공연이 끝났다는 것을 깨달았다."
      },
      {
        "en": "At the top of the hill stands a lighthouse built two centuries ago.",
        "ko": "언덕 꼭대기에는 2세기 전에 지어진 등대가 서 있다."
      }
    ],
    "quiz": [
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은?\nNever ( ) such a moving performance in my life.",
        "choices": [
          "have I seen",
          "I have seen",
          "I saw"
        ],
        "answer": 0,
        "explain": "부정어 Never가 문장 맨 앞에 오면 뒤는 의문문 어순이 되어 have I seen처럼 조동사가 주어 앞에 와야 합니다. I have seen이나 I saw는 평서문 어순이라 도치 규칙에 어긋납니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은?\nOnly after the report was published ( ) how serious the problem was.",
        "choices": [
          "people realized",
          "people did realize",
          "did people realize"
        ],
        "answer": 2,
        "explain": "Only + 부사절이 문두에 오면 주절은 did people realize처럼 조동사 + 주어 + 동사원형 순서가 됩니다. people realized는 도치가 안 된 어순이고, people did realize는 조동사가 주어 뒤에 있어 틀립니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "Hardly had she opened the door when the cat ran outside.",
          "So delicious the soup was that everyone asked for more.",
          "In front of the station stood a huge bronze statue."
        ],
        "answer": 1,
        "explain": "So + 형용사가 문두에 오면 So delicious was the soup처럼 동사가 주어 앞으로 나와야 하는데, 두 번째 문장은 어순이 그대로라 틀립니다. 첫 문장은 Hardly 뒤의 had she 도치, 셋째 문장은 장소 부사구 뒤의 동사 + 주어 도치가 올바릅니다."
      },
      {
        "q": "(A)/(B)에 알맞은 짝은?\nNot until midnight (A) [the singer appeared / did the singer appear] on stage.\nMy brother loves hiking, and (B) [so do I / so I do].",
        "choices": [
          "the singer appeared - so I do",
          "did the singer appear - so do I",
          "did the singer appear - so I do"
        ],
        "answer": 1,
        "explain": "Not until이 문두에 오면 주절은 did the singer appear처럼 도치되어야 합니다. '나도 그렇다'는 so do I처럼 조동사 + 주어 순서를 씁니다. 두 자리 모두 조동사가 주어보다 앞에 오는 것이 핵심입니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은?\nLittle ( ) that their small experiment would change medical history.",
        "choices": [
          "the scientists knew",
          "knew the scientists",
          "did the scientists know"
        ],
        "answer": 2,
        "explain": "부정의 뜻을 가진 Little이 문두에 오면 did the scientists know처럼 do 조동사 + 주어 + 동사원형 순서로 도치됩니다. the scientists knew는 도치가 없고, knew the scientists는 일반동사를 그대로 앞에 보낸 잘못된 형태입니다."
      }
    ]
  },
  {
    "id": "c15",
    "title": "접속사 vs 전치사",
    "key": "밑줄 뒤에 '주어 + 동사'가 있으면 접속사(although, while, because), 명사(구)만 있으면 전치사(despite, during, because of)를 고른다.",
    "hook": "뒤를 보라! 주어+동사면 접속사, 명사 덩어리면 전치사 — '뒤·주·동' 확인!",
    "summary": "접속사와 전치사의 구별은 수능 어법의 단골 출제 포인트입니다. 뜻이 비슷한 짝, 즉 although와 despite(양보), because와 because of(이유), while과 during(시간)을 놓고 무엇이 맞는지 묻습니다. 판단 기준은 뜻이 아니라 뒤에 오는 구조입니다. 뒤에 주어와 동사를 갖춘 절이 오면 접속사를, 명사나 동명사 같은 명사 덩어리만 오면 전치사를 써야 합니다. despite of처럼 존재하지 않는 형태를 함정으로 내는 경우도 있으니 주의하세요. 밑줄을 보는 순간 뒤 구조부터 확인하면 몇 초 안에 답을 고를 수 있는 유형입니다.",
    "rules": [
      "1단계: 밑줄 친 단어 바로 뒤의 구조를 본다.",
      "2단계: 뒤에 주어 + 동사가 갖춰진 절이 오면 접속사(although, because, while)를 고른다.",
      "3단계: 뒤에 명사, 대명사, 동명사만 오면 전치사(despite, because of, during)를 고른다.",
      "4단계: despite of, because of + 절 같은 존재하지 않는 조합은 바로 오답 처리한다.",
      "5단계: 뜻이 자연스러운지 마지막으로 확인해 양보/이유/시간 관계를 점검한다."
    ],
    "examples": [
      {
        "en": "Although the tickets were expensive, the concert hall was completely full.",
        "ko": "표가 비쌌음에도 불구하고, 콘서트홀은 완전히 가득 찼다."
      },
      {
        "en": "The flight was delayed for three hours because of the thick fog.",
        "ko": "짙은 안개 때문에 비행기가 세 시간 지연되었다."
      },
      {
        "en": "During the summer festival, the streets are filled with music and dancing.",
        "ko": "여름 축제 기간 동안, 거리는 음악과 춤으로 가득 찬다."
      }
    ],
    "quiz": [
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은?\n( ) the heavy rain, the outdoor market opened as usual.",
        "choices": [
          "Although",
          "Despite",
          "Because"
        ],
        "answer": 1,
        "explain": "빈칸 뒤에 the heavy rain이라는 명사구만 있으므로 전치사 Despite가 맞습니다. Although와 Because는 접속사라서 뒤에 주어와 동사가 있는 절이 와야 합니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은?\nThe baby slept peacefully ( ) her parents were preparing dinner.",
        "choices": [
          "during",
          "despite",
          "while"
        ],
        "answer": 2,
        "explain": "빈칸 뒤에 her parents were preparing이라는 주어 + 동사 절이 오므로 접속사 while이 정답입니다. during은 전치사라 뒤에 명사만 올 수 있고, despite는 '~에도 불구하고'라는 뜻이라 문맥에도 맞지 않습니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "Because of the road was icy, the school bus arrived late.",
          "During the interview, she answered every question calmly.",
          "Even though he was nervous, his speech sounded confident."
        ],
        "answer": 0,
        "explain": "Because of는 전치사라서 뒤에 명사만 와야 하는데, 첫 문장은 the road was icy라는 절이 왔으므로 접속사 Because로 고쳐야 합니다. 나머지 두 문장은 전치사 During + 명사, 접속사 Even though + 절로 구조가 올바릅니다."
      },
      {
        "q": "(A)/(B)에 알맞은 짝은?\n(A) [While / During] I was studying abroad, I learned to cook for myself.\nThe game was canceled (B) [because / because of] the sudden storm.",
        "choices": [
          "During - because",
          "While - because",
          "While - because of"
        ],
        "answer": 2,
        "explain": "(A) 뒤에는 I was studying이라는 절이 오므로 접속사 While을, (B) 뒤에는 the sudden storm이라는 명사구만 오므로 전치사 because of를 씁니다. 뒤 구조가 절이냐 명사냐만 확인하면 됩니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은?\n( ) his lack of experience, the young chef won first prize in the contest.",
        "choices": [
          "In spite of",
          "Although",
          "While"
        ],
        "answer": 0,
        "explain": "빈칸 뒤에 his lack of experience라는 명사구가 오므로 전치사 역할을 하는 In spite of가 정답입니다. Although와 While은 접속사라서 뒤에 주어와 동사가 필요합니다."
      }
    ]
  },
  {
    "id": "c16",
    "title": "재귀대명사",
    "key": "밑줄 친 대명사가 가리키는 대상이 그 절의 주어와 같으면 -self, 다르면 him/her/them.",
    "hook": "주어로 되돌아가면 셀프(-self), 남을 가리키면 그냥 목적격!",
    "summary": "수능 어법에서 재귀대명사는 목적어 자리에 himself가 올지 him이 올지 고르게 하는 형태로 출제됩니다. 판단 기준은 딱 하나, 그 동사나 전치사의 목적어가 같은 절의 주어와 동일 인물인지입니다. 동일 인물이면 재귀대명사(-self)를 쓰고, 다른 사람이면 일반 목적격 대명사를 씁니다. 또 by oneself(혼자서), for oneself(스스로)처럼 굳어진 표현과, 명사를 강조하는 강조 용법(the CEO himself)도 함께 나옵니다. 주어가 멀리 떨어져 있거나 절이 두 개 이상 겹쳐 있을 때 혼동을 유도하므로, 반드시 밑줄이 속한 절의 주어부터 찾는 습관이 필요합니다.",
    "rules": [
      "1단계: 밑줄 친 대명사가 속한 절의 주어를 찾는다.",
      "2단계: 대명사가 실제로 가리키는 사람이 누구인지 확인한다.",
      "3단계: 주어와 가리키는 대상이 같은 사람이면 -self(재귀대명사)를 쓴다.",
      "4단계: 주어와 다른 사람이면 him, her, them 같은 목적격을 쓴다.",
      "5단계: by oneself, for oneself 등 관용 표현과 강조 용법(주어 바로 뒤나 문장 끝의 -self)은 통째로 외워 둔다."
    ],
    "examples": [
      {
        "en": "After the long debate, the young politician found herself doubting the very policy she had once defended.",
        "ko": "긴 토론이 끝난 후, 그 젊은 정치인은 자신이 한때 옹호했던 바로 그 정책을 스스로 의심하고 있음을 깨달았다."
      },
      {
        "en": "Children who are allowed to solve small problems for themselves tend to develop stronger confidence than those whose parents constantly help them.",
        "ko": "작은 문제들을 스스로 해결하도록 허용된 아이들은 부모가 끊임없이 도와주는 아이들보다 더 강한 자신감을 기르는 경향이 있다."
      },
      {
        "en": "The director himself admitted that the film's success owed much to the actors who trusted him completely.",
        "ko": "감독 자신도 그 영화의 성공이 자신을 전적으로 믿어 준 배우들 덕분이라고 인정했다."
      }
    ],
    "quiz": [
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? Despite the criticism, the scientist continued to remind ( ) that every great discovery had once been doubted.",
        "choices": [
          "her",
          "herself",
          "hers"
        ],
        "answer": 1,
        "explain": "remind의 목적어가 주어인 the scientist 자신이므로 재귀대명사 herself가 맞습니다. her는 다른 여성을 가리킬 때 쓰고, hers는 소유대명사라서 목적어 자리에 어울리지 않습니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "The old craftsman taught him everything about woodworking before retiring.",
          "Travelers who prepare thoroughly can protect themselves from most emergencies.",
          "She looked at her in the mirror and smiled at the confident woman she had become."
        ],
        "answer": 2,
        "explain": "세 번째 문장은 거울 속에서 '자기 자신'을 본 것이므로 her가 아니라 herself가 되어야 합니다. 첫 문장은 장인이 '다른 사람(그)'을 가르친 것이라 him이 맞고, 두 번째는 주어와 목적어가 같아 themselves가 맞습니다."
      },
      {
        "q": "(A)/(B)에 알맞은 짝은? The manager praised (A) for the project, but the team members knew they had done most of the work (B).",
        "choices": [
          "A: himself / B: themselves",
          "A: him / B: themselves",
          "A: himself / B: them"
        ],
        "answer": 0,
        "explain": "매니저가 '자기 자신'을 칭찬한 상황이므로 (A)는 himself, 팀원들이 '스스로' 일을 했다는 강조이므로 (B)는 themselves입니다. him을 쓰면 매니저가 다른 남자를 칭찬한 것이 되어 문맥과 맞지 않습니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? The novelist preferred to live by ( ) in a quiet village, far from the noise of the publishing world.",
        "choices": [
          "her",
          "she",
          "herself"
        ],
        "answer": 2,
        "explain": "by oneself는 '혼자서'라는 뜻의 관용 표현이므로 herself가 정답입니다. by her는 '그녀 옆에서/그녀에 의해'라는 다른 뜻이 되고, she는 주격이라 전치사 뒤에 올 수 없습니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "The committee members congratulated themselves on finishing the report early.",
          "My grandfather built the entire cabin him, without hiring any workers.",
          "The witness asked the lawyer to explain the procedure to her once more."
        ],
        "answer": 1,
        "explain": "두 번째 문장은 '직접, 스스로'라는 강조의 뜻이므로 him이 아니라 himself를 써야 합니다. 첫 문장은 주어와 목적어가 같아 themselves가 맞고, 세 번째는 증인이 변호사에게 '자신(다른 사람인 화자 입장에서 목적격)'에게 설명해 달라는 것이라 her가 자연스럽습니다."
      }
    ]
  },
  {
    "id": "c17",
    "title": "대동사 (do vs be)",
    "key": "대동사가 대신하는 앞의 동사가 일반동사면 do/does/did, be동사(또는 진행·수동)면 be동사를 쓴다.",
    "hook": "앞 동사를 복사해 붙여 보라 — 일반동사면 do, be면 be!",
    "summary": "대동사는 앞에 나온 동사(구)의 반복을 피하려고 do나 be로 줄여 쓰는 표현입니다. 수능에서는 비교 구문의 than, as 뒤나 so/neither 도치 구문에서 do와 be 중 무엇이 맞는지 묻는 형태로 자주 출제됩니다. 판단법은 간단합니다. 대동사 자리에 앞 동사를 그대로 넣어 보고, 그 동사가 일반동사면 do/does/did를, be동사나 진행형·수동태면 be동사를 씁니다. 시제와 주어의 수도 대동사에 그대로 반영해야 하므로, does인지 did인지까지 확인해야 합니다. 조동사(can, will 등)가 있던 자리라면 그 조동사를 그대로 반복한다는 점도 함께 기억하세요.",
    "rules": [
      "1단계: 대동사(do/be) 자리가 앞의 어떤 동사를 대신하는지 찾는다.",
      "2단계: 그 동사가 일반동사이면 do 계열(do/does/did)을 쓴다.",
      "3단계: 그 동사가 be동사이거나 진행형·수동태이면 be 계열(is/are/was/were)을 쓴다.",
      "4단계: 원래 문장의 시제(현재/과거)와 새 주어의 수(단수/복수)를 대동사에 맞춘다.",
      "5단계: 앞에 조동사(can, will, should 등)가 있으면 do가 아니라 그 조동사를 반복한다."
    ],
    "examples": [
      {
        "en": "Teenagers today spend far more time on screens than their parents did at the same age.",
        "ko": "오늘날 십 대들은 그들의 부모가 같은 나이였을 때 그랬던 것보다 훨씬 더 많은 시간을 화면 앞에서 보낸다."
      },
      {
        "en": "The northern region is as vulnerable to climate change as the coastal areas are, though for different reasons.",
        "ko": "북부 지역은 이유는 다르지만 해안 지역이 그런 것만큼 기후 변화에 취약하다."
      },
      {
        "en": "My sister never enjoyed crowded festivals, and neither did I until I volunteered at one last summer.",
        "ko": "내 여동생은 붐비는 축제를 결코 즐기지 않았고, 지난여름 한 축제에서 자원봉사를 하기 전까지는 나도 그랬다."
      }
    ],
    "quiz": [
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? Modern readers trust online reviews far more than earlier generations ( ).",
        "choices": [
          "were",
          "did",
          "do so"
        ],
        "answer": 1,
        "explain": "대신하는 동사가 일반동사 trusted(과거)이므로 대동사는 did가 맞습니다. were는 be동사를 대신할 때 쓰고, do so는 시제가 과거와 맞지 않아 어색합니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "The new library is more crowded on weekends than it does on weekdays.",
          "She practices the violin every day, and so does her younger brother.",
          "Wolves were once common in this forest, and so were bears."
        ],
        "answer": 0,
        "explain": "첫 번째 문장은 앞 동사가 is(be동사)이므로 does가 아니라 is를 써야 합니다. 두 번째는 일반동사 practices를 does가 받아 맞고, 세 번째는 were를 were가 받아 맞습니다."
      },
      {
        "q": "(A)/(B)에 알맞은 짝은? The volunteers worked much harder than the paid staff (A), and they were prouder of the result than anyone else (B).",
        "choices": [
          "A: were / B: did",
          "A: did / B: did",
          "A: did / B: was"
        ],
        "answer": 2,
        "explain": "(A)는 일반동사 worked를 받으므로 did, (B)는 were prouder의 be동사를 받고 anyone else가 단수이므로 was가 맞습니다. (A)에 were를 쓰거나 (B)에 did를 쓰면 앞 동사의 종류와 어긋납니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? The desert is not silent at night; in fact, it is as full of sound as any city street ( ).",
        "choices": [
          "is",
          "does",
          "has"
        ],
        "answer": 0,
        "explain": "앞 동사가 is full(be동사)이므로 대동사도 is가 되어야 합니다. does는 일반동사를, has는 완료형을 대신할 때 쓰므로 여기서는 틀립니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "He can memorize long speeches quickly, and so can his twin sister.",
          "The old bridge was repaired last year, as was the road leading to it.",
          "Most plants respond to sunlight, just as this rare cactus is."
        ],
        "answer": 2,
        "explain": "세 번째 문장은 일반동사 respond를 대신하므로 is가 아니라 does를 써야 합니다. 첫 문장은 조동사 can을 그대로 반복해서 맞고, 두 번째는 수동태 was repaired를 was가 받아 맞습니다."
      }
    ]
  },
  {
    "id": "c18",
    "title": "it vs that vs what (가주어·강조구문 판별)",
    "key": "뒤 절이 완전하면 that(가주어·강조구문), 불완전하면 what(선행사 포함 관계대명사).",
    "hook": "절이 꽉 차 있으면 that, 구멍(빠진 성분)이 있으면 what!",
    "summary": "수능에서 that과 what의 구별은 거의 매년 나오는 최다 빈출 포인트입니다. 핵심은 뒤에 오는 절이 완전한지 불완전한지 확인하는 것입니다. 주어나 목적어가 빠져 '구멍'이 있는 불완전한 절 앞에는 what을 쓰고, 성분이 모두 갖춰진 완전한 절 앞에는 that을 씁니다. 여기에 It is ~ that 형태가 나오면 가주어 구문인지 강조구문인지도 판별해야 합니다. It is와 that을 지웠을 때 남은 부분이 완전한 문장이 되면 강조구문이고, that절 자체가 진짜 주어 역할을 하면 가주어 구문입니다. 문장 맨 앞의 What절은 명사절로서 주어가 되며, 이때 단수 취급한다는 것까지 알아 두세요.",
    "rules": [
      "1단계: 밑줄 친 that/what 뒤의 절에서 주어, 목적어가 다 있는지 확인한다.",
      "2단계: 절에 빠진 성분(구멍)이 있으면 what, 완전하면 that을 쓴다.",
      "3단계: It is ~ that 문장이면 It is와 that을 지워 본다.",
      "4단계: 지우고 남은 말이 완전한 문장으로 재배열되면 강조구문, that절이 진짜 주어면 가주어 구문이다.",
      "5단계: 문장 맨 앞의 What절이 주어이면 동사는 단수로 받는지 확인한다."
    ],
    "examples": [
      {
        "en": "What matters most in a job interview is not your resume but the attitude you show in the first few minutes.",
        "ko": "면접에서 가장 중요한 것은 이력서가 아니라 처음 몇 분 동안 당신이 보여 주는 태도이다."
      },
      {
        "en": "It is surprising that such a small island can support so many different species of birds.",
        "ko": "그렇게 작은 섬이 그토록 많은 다양한 종의 새들을 부양할 수 있다는 것은 놀랍다."
      },
      {
        "en": "It was during the economic crisis that the company discovered the true loyalty of its customers.",
        "ko": "그 회사가 고객들의 진정한 충성심을 발견한 것은 바로 경제 위기 동안이었다."
      }
    ],
    "quiz": [
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? ( ) the ancient farmers understood about the seasons still amazes modern scientists.",
        "choices": [
          "That",
          "It",
          "What"
        ],
        "answer": 2,
        "explain": "understood의 목적어가 빠진 불완전한 절이므로 What이 정답입니다. That은 완전한 절 앞에 쓰고, It은 뒤의 절을 이끄는 접속사 역할을 할 수 없습니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? It is widely believed ( ) regular sleep patterns improve long-term memory in students.",
        "choices": [
          "what",
          "that",
          "which"
        ],
        "answer": 1,
        "explain": "뒤의 절(regular sleep patterns improve memory)이 주어와 목적어를 다 갖춘 완전한 절이므로 that이 맞습니다. what과 which는 뒤에 빠진 성분이 있는 불완전한 절이 와야 하므로 틀립니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "It was the villagers' cooperation that saved the harvest from the sudden flood.",
          "What the researchers found in the cave changed our view of early human life.",
          "That she suggested at the meeting was a completely new marketing strategy."
        ],
        "answer": 2,
        "explain": "세 번째 문장은 suggested의 목적어가 빠진 불완전한 절이므로 That이 아니라 What을 써야 합니다. 첫 문장은 the villagers' cooperation을 강조하는 강조구문으로 맞고, 두 번째는 found의 목적어가 빠져 What이 올바릅니다."
      },
      {
        "q": "(A)/(B)에 알맞은 짝은? (A) keeps tourists coming back to this city is its food culture, and it is the night markets (B) travelers praise most enthusiastically.",
        "choices": [
          "A: What / B: that",
          "A: That / B: what",
          "A: What / B: what"
        ],
        "answer": 0,
        "explain": "(A)는 keeps의 주어가 빠진 불완전한 절이므로 What, (B)는 it is ~ that 강조구문으로 the night markets를 강조하므로 that이 맞습니다. (B)에 what을 쓰면 강조구문이 성립하지 않습니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "It was in 1998 what the two rival companies finally agreed to merge.",
          "It is essential that every crew member check the equipment before departure.",
          "What seems obvious to experts is often confusing to beginners."
        ],
        "answer": 0,
        "explain": "첫 번째 문장은 in 1998을 강조하는 It is ~ that 강조구문이므로 what이 아니라 that을 써야 합니다. 두 번째는 that절이 완전해서 맞고, 세 번째는 seems의 주어가 빠진 불완전한 절이라 What이 올바릅니다."
      }
    ]
  },
  {
    "id": "c19",
    "title": "비교 구문 어법",
    "key": "as ~ as 사이에는 원급, than 앞에는 비교급이 오는지, 그리고 비교 대상의 형태가 서로 같은지 확인한다.",
    "hook": "as는 원급 짝꿍, than은 비교급 짝꿍 — 짝이 어긋나면 바로 오답!",
    "summary": "비교 구문은 수능 어법에서 형태 짝 맞추기로 출제되는 대표 유형입니다. as ~ as 사이에는 반드시 원급(형용사·부사의 원래 형태)이 오고, than 앞에는 비교급이 와야 합니다. 'the 비교급, the 비교급(~할수록 더 ~하다)' 구문에서 원급이나 최상급을 섞어 놓는 함정도 자주 나옵니다. superior, inferior, senior 같은 라틴어 유래 형용사는 than이 아니라 to를 쓴다는 점도 단골 출제 포인트입니다. 또한 비교되는 두 대상은 문법적으로 같은 형태여야 하므로, 명사와 명사, to부정사와 to부정사처럼 짝이 맞는지 확인해야 합니다. 배수 표현은 'twice as ~ as'처럼 배수사가 as 앞에 온다는 어순도 기억하세요.",
    "rules": [
      "1단계: 문장에서 as ~ as, than, the 비교급 같은 비교 신호를 찾는다.",
      "2단계: as ~ as 사이면 원급, than 앞이면 비교급이 쓰였는지 확인한다.",
      "3단계: superior, inferior, senior, prior 뒤에는 than이 아니라 to가 왔는지 본다.",
      "4단계: 비교되는 두 대상이 같은 문법 형태(명사끼리, 동명사끼리 등)인지 확인한다.",
      "5단계: 배수 표현은 '배수사 + as + 원급 + as' 어순인지 점검한다."
    ],
    "examples": [
      {
        "en": "The harder the students practiced their presentations, the more confident they became in front of the audience.",
        "ko": "학생들이 발표를 열심히 연습할수록, 그들은 청중 앞에서 더 자신감이 생겼다."
      },
      {
        "en": "In many ways, listening carefully is more valuable than speaking fluently in international negotiations.",
        "ko": "여러 면에서, 국제 협상에서는 주의 깊게 듣는 것이 유창하게 말하는 것보다 더 가치가 있다."
      },
      {
        "en": "The new solar panels generate twice as much electricity as the old models installed a decade ago.",
        "ko": "새 태양광 패널은 십 년 전에 설치된 구형 모델보다 두 배나 많은 전기를 생산한다."
      }
    ],
    "quiz": [
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? The documentary was far more moving ( ) any fictional film I had seen that year.",
        "choices": [
          "as",
          "than",
          "to"
        ],
        "answer": 1,
        "explain": "앞에 비교급 more moving이 있으므로 짝이 되는 than이 정답입니다. as는 원급(as moving as)과 짝을 이루고, to는 superior 같은 특정 형용사에만 쓰입니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "This handmade paper is superior than the machine-made kind in both texture and durability.",
          "The deeper divers go, the more pressure their bodies must endure.",
          "Her second novel sold three times as many copies as her first one."
        ],
        "answer": 0,
        "explain": "superior는 라틴어 유래 형용사라서 than이 아니라 to를 써야 합니다(superior to). 두 번째는 'the 비교급, the 비교급' 구문이 올바르고, 세 번째는 '배수사 + as + 원급 + as' 어순이 맞습니다."
      },
      {
        "q": "(A)/(B)에 알맞은 짝은? Climbing in winter is (A) more dangerous than climbing in summer, and the risk grows (B) as the altitude increases.",
        "choices": [
          "A: very / B: higher",
          "A: much / B: high",
          "A: much / B: higher"
        ],
        "answer": 2,
        "explain": "비교급 more dangerous를 강조할 때는 very가 아니라 much를 쓰고, '고도가 높아질수록 위험이 커진다'는 흐름이므로 (B)는 비교급 higher가 자연스럽습니다. very는 원급만 꾸밀 수 있어 (A)에 올 수 없습니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? No other invention in the past century has changed daily life as ( ) as the smartphone.",
        "choices": [
          "profoundly",
          "more profoundly",
          "most profoundly"
        ],
        "answer": 0,
        "explain": "as ~ as 사이에는 원급이 와야 하므로 부사의 원급 profoundly가 정답입니다. 비교급 more profoundly나 최상급 most profoundly는 as ~ as 구문 안에 들어갈 수 없습니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "The population of the capital is larger than that of all the other cities combined.",
          "Reading a map is sometimes faster than to follow a navigation app blindly.",
          "The less energy a building wastes, the lower its maintenance costs become."
        ],
        "answer": 1,
        "explain": "두 번째 문장은 비교 대상의 형태가 어긋났습니다. 동명사 Reading과 짝을 맞추려면 to follow가 아니라 following이어야 합니다. 첫 문장은 that of로 비교 대상을 맞춰 맞고, 세 번째는 'the 비교급, the 비교급' 구문이 올바릅니다."
      }
    ]
  },
  {
    "id": "c20",
    "title": "수량 표현 (few/little, many/much, number/amount)",
    "key": "꾸미는 명사가 셀 수 있는 복수 명사인지, 셀 수 없는 명사인지부터 확인한다.",
    "hook": "셀 수 있으면 few·many·number, 못 세면 little·much·amount!",
    "summary": "수량 표현 문제는 뒤에 오는 명사가 가산(셀 수 있는) 명사인지 불가산(셀 수 없는) 명사인지를 묻는 유형입니다. few와 many는 복수 가산 명사와, little과 much는 불가산 명사와 짝을 이룹니다. a number of는 '많은'이라는 뜻으로 복수 명사와 복수 동사를 쓰지만, the number of는 '~의 수'라는 뜻으로 단수 동사를 쓴다는 구별이 최다 빈출 포인트입니다. amount는 불가산 명사(정보, 돈, 물 등)에만 쓰인다는 것도 확인해야 합니다. 또한 few(거의 없는)와 a few(약간 있는)처럼 관사 하나로 의미가 달라지는 표현은 문맥 파악 문제로도 연결됩니다. 밑줄을 보면 먼저 뒤 명사의 종류를 확인하고, number/amount 구문이면 동사의 수 일치까지 함께 점검하세요.",
    "rules": [
      "1단계: 수량 표현 뒤의 명사가 셀 수 있는 복수 명사인지, 셀 수 없는 명사인지 확인한다.",
      "2단계: 복수 가산 명사면 few, many, a number of를, 불가산 명사면 little, much, an amount of를 쓴다.",
      "3단계: a number of + 복수 명사는 복수 동사, the number of + 복수 명사는 단수 동사로 받는지 확인한다.",
      "4단계: few/little(부정: 거의 없는)과 a few/a little(긍정: 약간 있는)의 의미 차이를 문맥과 대조한다.",
      "5단계: fewer는 가산 명사, less는 불가산 명사와 짝이 맞는지 마지막으로 점검한다."
    ],
    "examples": [
      {
        "en": "A number of volunteers were planting trees along the riverbank when the storm warning was issued.",
        "ko": "폭풍 경보가 발령되었을 때 많은 자원봉사자들이 강둑을 따라 나무를 심고 있었다."
      },
      {
        "en": "The number of students choosing science majors has declined steadily over the past decade.",
        "ko": "과학 전공을 선택하는 학생들의 수는 지난 십 년 동안 꾸준히 감소해 왔다."
      },
      {
        "en": "Because there was little rainfall last spring, farmers had to draw a large amount of water from underground wells.",
        "ko": "지난봄에 강수량이 거의 없었기 때문에, 농부들은 지하 우물에서 많은 양의 물을 끌어 올려야 했다."
      }
    ],
    "quiz": [
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? The museum received so ( ) visitors last winter that it considered closing two galleries.",
        "choices": [
          "few",
          "little",
          "much"
        ],
        "answer": 0,
        "explain": "visitors는 셀 수 있는 복수 명사이므로 few가 정답입니다. little과 much는 물이나 정보처럼 셀 수 없는 명사에만 쓸 수 있습니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "Much of the information on that website has never been verified by experts.",
          "The number of endangered species in the region have doubled since 2010.",
          "A few brave journalists continued to report from the flooded area."
        ],
        "answer": 1,
        "explain": "the number of(~의 수)는 단수 취급하므로 have가 아니라 has doubled가 되어야 합니다. 첫 문장은 불가산 명사 information에 Much를 써서 맞고, 세 번째는 복수 명사 journalists에 A few가 맞습니다."
      },
      {
        "q": "(A)/(B)에 알맞은 짝은? The charity collected a huge (A) of money this year, even though (B) donors than expected attended the annual event.",
        "choices": [
          "A: number / B: less",
          "A: amount / B: less",
          "A: amount / B: fewer"
        ],
        "answer": 2,
        "explain": "money는 셀 수 없는 명사이므로 (A)는 amount, donors는 셀 수 있는 복수 명사이므로 (B)는 fewer가 맞습니다. number는 가산 명사에, less는 불가산 명사에 쓰기 때문에 나머지 짝은 틀립니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은? A number of ancient manuscripts ( ) currently being restored by a team of international experts.",
        "choices": [
          "is",
          "are",
          "has"
        ],
        "answer": 1,
        "explain": "a number of(많은) 뒤의 복수 명사 manuscripts가 실제 주어이므로 복수 동사 are가 정답입니다. the number of였다면 단수 is를 쓰지만, 여기서는 '많은 문서들'이라는 뜻이라 복수로 받아야 합니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "There is little hope of finding the lost expedition after so many months.",
          "Many residents complained about the noise from the construction site.",
          "The factory produced a large number of pollution before the new law took effect."
        ],
        "answer": 2,
        "explain": "pollution은 셀 수 없는 명사이므로 a large number of가 아니라 a large amount of를 써야 합니다. 첫 문장은 불가산 명사 hope에 little이 맞고, 두 번째는 복수 명사 residents에 Many가 맞습니다."
      }
    ]
  },
  {
    "id": "c21",
    "title": "어순 (간접의문문, so/such)",
    "key": "의문사절 안은 '의문사+주어+동사' 평서문 어순인지, so 뒤엔 형용사/부사·such 뒤엔 (a+형용사+)명사가 왔는지 확인한다.",
    "hook": "'물음표가 없으면 뒤집지 마라' — 문장 속 의문문은 주어·동사 원위치, so는 형용사 짝꿍·such는 명사 짝꿍!",
    "summary": "수능 어법에서는 wonder, ask, know 같은 동사 뒤에 오는 간접의문문의 어순에 밑줄을 긋는 문제가 자주 나옵니다. 직접 물어보는 의문문은 'Where did he go?'처럼 조동사가 주어 앞에 오지만, 문장 안에 들어간 간접의문문은 'I wonder where he went.'처럼 '의문사+주어+동사'의 평서문 어순이 되어야 합니다. 여기서 do/does/did가 남아 있으면 틀린 문장입니다. 또 하나의 단골 포인트는 so와 such의 구별입니다. so는 형용사나 부사를 꾸미고(so tired, so quickly), such는 명사 덩어리를 꾸미기 때문에(such a long day) 밑줄 뒤에 무엇이 오는지 보고 판단해야 합니다. 예외적으로 'so+형용사+a+명사(so nice a day)' 어순도 가능하다는 점까지 알아 두면 함정을 피할 수 있습니다.",
    "rules": [
      "1단계: 밑줄 부분이 의문사절이면 문장 전체가 물음표로 끝나는 직접의문문인지, 동사 뒤에 안긴 간접의문문인지 확인한다.",
      "2단계: 간접의문문이면 '의문사+주어+동사' 순서인지 확인하고, do/does/did나 뒤집힌 어순이 보이면 틀린 것으로 판단한다.",
      "3단계: 밑줄이 so/such이면 바로 뒤 단어의 품사를 본다. 형용사·부사뿐이면 so, 명사로 끝나는 덩어리면 such를 고른다.",
      "4단계: 관사의 위치를 확인한다. 'such a+형용사+명사'와 'so+형용사+a+명사'는 맞고, 'so a+형용사+명사'는 틀린 어순이다.",
      "5단계: 'so/such ~ that ...' 구문이면 that절이 결과를 나타내는지 해석으로 마지막 확인을 한다."
    ],
    "examples": [
      {
        "en": "The scientists could not explain why the birds suddenly changed their migration route that year.",
        "ko": "과학자들은 그해에 새들이 왜 갑자기 이동 경로를 바꾸었는지 설명할 수 없었다."
      },
      {
        "en": "It was such an inspiring speech that many students stayed after class to discuss it.",
        "ko": "그것은 매우 감동적인 연설이어서 많은 학생들이 수업이 끝난 뒤에도 남아 그것에 대해 토론했다."
      },
      {
        "en": "The trail was so steep that even experienced hikers had to stop and rest every few minutes.",
        "ko": "그 등산로는 너무 가팔라서 숙련된 등산객들조차 몇 분마다 멈춰 쉬어야 했다."
      }
    ],
    "quiz": [
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은?\nThe reporter asked the mayor ( ) to reduce traffic in the downtown area.",
        "choices": [
          "how the city planned",
          "how did the city plan",
          "how planned the city"
        ],
        "answer": 0,
        "explain": "asked 뒤에 안긴 간접의문문이므로 '의문사(how)+주어(the city)+동사(planned)'의 평서문 어순이 맞습니다. 'how did the city plan'은 직접의문문 어순이라 문장 속에서는 쓸 수 없고, 'how planned the city'는 주어와 동사가 뒤집혀서 틀렸습니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "I wonder why she left the meeting so early.",
          "Nobody knows where did he hide the key.",
          "It was such a boring lecture that half the students fell asleep."
        ],
        "answer": 1,
        "explain": "두 번째 문장은 knows 뒤의 간접의문문이므로 'where he hid the key'처럼 주어+동사 순서여야 하는데 did가 남아 있어 틀렸습니다. 첫 번째는 올바른 간접의문문 어순이고, 세 번째는 'such a+형용사+명사'로 올바른 형태입니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은?\nThe storm was ( ) that all flights were canceled for two days.",
        "choices": [
          "such severe",
          "so a severe",
          "so severe"
        ],
        "answer": 2,
        "explain": "빈칸 뒤에 명사 없이 형용사 severe만 있으므로 형용사를 꾸미는 so가 맞습니다. such는 뒤에 명사가 와야 해서 'such severe'는 틀렸고, 'so a severe'는 관사 위치가 잘못된 어순입니다."
      },
      {
        "q": "(A)/(B)에 알맞은 짝은?\nThe engineer explained (A)[how the machine works / how does the machine work], but it was (B)[such / so] a complex device that few of us understood her.",
        "choices": [
          "how the machine works – such",
          "how does the machine work – such",
          "how the machine works – so"
        ],
        "answer": 0,
        "explain": "(A)는 explained 뒤의 간접의문문이므로 '의문사+주어+동사' 어순인 'how the machine works'가 맞습니다. (B)는 뒤에 'a complex device'라는 명사 덩어리가 오므로 such를 써야 하고, 'so a complex device'는 틀린 어순입니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "He spoke so quietly that we could hardly hear him.",
          "It was so nice a day that we decided to walk to work.",
          "Do you know when will the results be announced?"
        ],
        "answer": 2,
        "explain": "세 번째 문장은 know 뒤의 간접의문문이므로 'when the results will be announced'처럼 주어+동사 순서여야 하는데 will이 주어 앞으로 나와 틀렸습니다. 첫 번째는 so가 부사 quietly를 꾸며 맞고, 두 번째의 'so+형용사+a+명사(so nice a day)'는 예외적으로 허용되는 올바른 어순입니다."
      }
    ]
  },
  {
    "id": "c22",
    "title": "사역·지각동사의 목적격 보어",
    "key": "make/have/let·지각동사 뒤 목적어와 보어의 관계가 능동이면 동사원형(진행이면 -ing), 수동이면 p.p.인지 확인한다.",
    "hook": "'시키고 보고 듣는 동사는 to를 삼킨다' — 목적어가 직접 하면 원형, 당하면 p.p., get만 to를 살려 둔다!",
    "summary": "수능에서는 make, have, let 같은 사역동사와 see, hear, watch, feel 같은 지각동사 뒤 목적격 보어에 밑줄을 긋는 문제가 꾸준히 출제됩니다. 판단의 핵심은 '목적어와 보어의 관계'입니다. 목적어가 그 동작을 직접 하는 능동 관계이면 to 없는 동사원형을 쓰고, 지각동사는 동작이 진행 중임을 강조할 때 -ing형도 가능합니다. 반대로 목적어가 그 동작을 당하는 수동 관계이면 과거분사(p.p.)를 써야 합니다. 같은 사역의 뜻이라도 get은 예외적으로 'get+목적어+to부정사'를 쓰기 때문에 have와 get을 나란히 놓고 헷갈리게 하는 문제가 많습니다. 밑줄을 보면 먼저 앞 동사가 사역·지각동사인지 확인하고, 그다음 목적어가 하는지 당하는지를 따지는 순서로 접근하세요.",
    "rules": [
      "1단계: 밑줄 친 보어 앞에 make/have/let(사역) 또는 see/hear/watch/feel(지각) 같은 동사가 있는지 확인한다.",
      "2단계: 목적어가 보어의 동작을 직접 하는지(능동), 당하는지(수동) 해석해 본다.",
      "3단계: 능동이면 to 없는 동사원형을 고르고, 지각동사에서 진행 중인 장면을 묘사하면 -ing형도 정답이 될 수 있다.",
      "4단계: 수동이면 동사원형이 아니라 과거분사(p.p.)를 골라야 한다.",
      "5단계: 동사가 get이면 사역이라도 'get+목적어+to부정사(능동)/p.p.(수동)'인지 별도로 확인한다."
    ],
    "examples": [
      {
        "en": "The principal made every student turn off their phones before entering the exam hall.",
        "ko": "교장 선생님은 모든 학생이 시험장에 들어가기 전에 휴대폰을 끄게 했다."
      },
      {
        "en": "Walking along the beach, we watched the fishermen pulling their heavy nets out of the water.",
        "ko": "해변을 따라 걸으며 우리는 어부들이 무거운 그물을 물 밖으로 끌어올리고 있는 것을 지켜보았다."
      },
      {
        "en": "She had her old wooden desk painted bright blue to match the new curtains.",
        "ko": "그녀는 새 커튼과 어울리도록 낡은 나무 책상을 밝은 파란색으로 칠하게 했다."
      }
    ],
    "quiz": [
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은?\nThe teacher had the students ( ) their essays before the deadline.",
        "choices": [
          "submit",
          "to submit",
          "submitted"
        ],
        "answer": 0,
        "explain": "사역동사 have 뒤에서 목적어(the students)가 제출하는 동작을 직접 하는 능동 관계이므로 동사원형 submit이 맞습니다. to submit은 get일 때 쓰는 형태이고, submitted는 목적어가 '제출당하는' 수동 관계일 때만 씁니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은?\nI saw a stranger ( ) around the parking lot late at night.",
        "choices": [
          "to wander",
          "wandering",
          "wandered"
        ],
        "answer": 1,
        "explain": "지각동사 saw 뒤에서 낯선 사람이 직접 서성이는 능동 관계이고, 진행 중인 장면을 본 것이므로 wandering이 맞습니다(동사원형 wander도 가능하지만 보기에 없습니다). to wander는 지각동사 뒤에 쓸 수 없고, wandered는 수동 관계일 때 쓰는 형태라 틀렸습니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "She made her brother clean the garage.",
          "He got his car repaired at the local shop.",
          "The coach let the players to rest after the long match."
        ],
        "answer": 2,
        "explain": "세 번째 문장의 let은 사역동사이므로 목적격 보어로 to rest가 아니라 동사원형 rest를 써야 합니다. 첫 번째는 make+목적어+동사원형으로 맞고, 두 번째는 차가 '수리되는' 수동 관계라 get+목적어+p.p.로 올바릅니다."
      },
      {
        "q": "(A)/(B)에 알맞은 짝은?\nThe manager had the report (A)[translate / translated] into English, and she got the interns (B)[check / to check] the figures.",
        "choices": [
          "translate – check",
          "translated – to check",
          "translated – check"
        ],
        "answer": 1,
        "explain": "(A)는 보고서가 '번역되는' 수동 관계이므로 과거분사 translated가 맞습니다. (B)는 인턴들이 직접 확인하는 능동 관계이지만 동사가 get이므로 to check를 써야 합니다. get은 사역의 뜻이라도 원형이 아닌 to부정사를 쓴다는 점이 함정입니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은?\nEvery Sunday morning, we heard the church bells ( ) across the valley.",
        "choices": [
          "rang",
          "ring",
          "to ring"
        ],
        "answer": 1,
        "explain": "지각동사 heard 뒤에서 종이 직접 울리는 능동 관계이므로 동사원형 ring이 맞습니다. rang은 과거형이라 보어 자리에 올 수 없고, 지각동사 뒤에는 to부정사를 쓰지 않으므로 to ring도 틀렸습니다."
      }
    ]
  },
  {
    "id": "c23",
    "title": "전치사 + 관계대명사와 관계사 생략",
    "key": "관계사절 안이 완전하면 '전치사+which/whom'이 필요하고, 전치사 뒤에는 that을 쓸 수 없으며 생략은 목적격 관계대명사만 가능하다.",
    "hook": "'전치사는 that과 원수' — 절이 완전하면 전치사를 앞에 붙이고, that은 전치사 뒤로 절대 못 간다!",
    "summary": "수능 어법에서는 'in which', 'with whom'처럼 전치사와 관계대명사가 붙어 있는 자리에 밑줄을 긋고 which/that/what 중에서 고르게 하는 문제가 자주 나옵니다. 판단 기준은 관계사절 안의 문장 구조입니다. 관계사 뒤의 절이 주어·목적어가 다 갖춰진 완전한 문장이라면, 빠진 것은 '전치사+명사'이므로 '전치사+which/whom' 형태가 필요합니다. 이때 절대 규칙은 전치사 바로 뒤에는 that이나 who를 쓸 수 없다는 것입니다. 즉 'in that', 'with who'가 보이면 바로 틀린 표현입니다. 또 관계대명사의 생략은 동사나 전치사의 목적어 역할을 할 때만 가능하고, 주격 관계대명사나 '전치사+관계대명사'의 관계대명사는 생략할 수 없다는 점도 함께 확인해야 합니다.",
    "rules": [
      "1단계: 밑줄 친 관계사 뒤의 절이 완전한지(주어·목적어가 다 있는지) 확인한다.",
      "2단계: 절이 불완전하면 which/whom/that 같은 일반 관계대명사가 맞고, 완전하면 '전치사+which/whom'이 필요하다.",
      "3단계: 전치사 바로 뒤에 that이나 who가 있으면 무조건 틀린 것으로 판단한다(in that, with who는 불가).",
      "4단계: 어떤 전치사를 쓸지는 선행사를 관계사절 안에 다시 넣어 보고 자연스러운 전치사를 고른다(live in the house → in which).",
      "5단계: 관계대명사가 생략된 문장이면 그 관계대명사가 목적격인지 확인하고, 주격이거나 전치사가 앞에 있으면 생략할 수 없다."
    ],
    "examples": [
      {
        "en": "The village in which my grandparents spent their childhood has changed beyond recognition.",
        "ko": "나의 조부모님이 어린 시절을 보낸 그 마을은 알아볼 수 없을 만큼 변했다."
      },
      {
        "en": "The colleague with whom I shared an office for ten years retired last month.",
        "ko": "내가 10년 동안 사무실을 함께 쓴 그 동료는 지난달에 은퇴했다."
      },
      {
        "en": "The advice she gave me at the airport turned out to be more valuable than any guidebook.",
        "ko": "그녀가 공항에서 내게 해 준 조언은 어떤 여행 안내서보다 더 가치 있는 것으로 드러났다."
      }
    ],
    "quiz": [
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은?\nThe house ( ) I grew up was torn down last year.",
        "choices": [
          "in which",
          "which",
          "in that"
        ],
        "answer": 0,
        "explain": "관계사 뒤의 'I grew up'은 주어와 동사가 갖춰진 완전한 절이므로 '전치사+관계대명사'인 in which가 맞습니다(grow up in the house). which만 쓰면 절 안에 빠진 자리가 없어서 틀리고, 전치사 뒤에는 that을 쓸 수 없으므로 in that도 틀렸습니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "This is the book about which everyone is talking.",
          "The city in that she was born is famous for its old harbor.",
          "The man with whom I traveled was a photographer."
        ],
        "answer": 1,
        "explain": "전치사 바로 뒤에는 that을 쓸 수 없으므로 'in that'은 'in which'로 고쳐야 합니다. 첫 번째의 about which와 세 번째의 with whom은 모두 '전치사+관계대명사'의 올바른 형태입니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은?\nIs this the report ( ) the director asked for at the meeting?",
        "choices": [
          "which",
          "what",
          "in which"
        ],
        "answer": 0,
        "explain": "관계사절 안에서 asked for의 목적어가 빠져 있는 불완전한 절이므로 목적격 관계대명사 which가 맞습니다(생략도 가능합니다). what은 선행사 the report가 이미 있어서 쓸 수 없고, in which는 절이 완전할 때 쓰는 형태라 틀렸습니다."
      },
      {
        "q": "(A)/(B)에 알맞은 짝은?\nThe topic (A)[which / on which] the professor lectured was completely new to us, and the notes (B)[that / what] he handed out helped a lot.",
        "choices": [
          "which – that",
          "on which – that",
          "on which – what"
        ],
        "answer": 1,
        "explain": "(A)는 'the professor lectured'가 완전한 절이므로 전치사를 붙인 on which가 필요합니다(lecture on the topic). (B)는 handed out의 목적어가 빠진 불완전한 절이므로 관계대명사 that이 맞고, what은 선행사 the notes가 있으므로 쓸 수 없습니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은?\nThe ease ( ) she solved the difficult puzzle amazed everyone in the room.",
        "choices": [
          "which",
          "with that",
          "with which"
        ],
        "answer": 2,
        "explain": "'she solved the difficult puzzle'은 완전한 절이므로 '전치사+관계대명사'인 with which가 맞습니다(solve it with ease). which만 쓰면 절 안에 빈자리가 없어 틀리고, 전치사 뒤에 that은 올 수 없으므로 with that도 틀렸습니다."
      }
    ]
  },
  {
    "id": "c24",
    "title": "동격 that vs 관계대명사 that",
    "key": "that 뒤의 절이 완전하면 명사의 내용을 설명하는 동격 that, 불완전하면 관계대명사 that이며 동격 자리에 which는 쓸 수 없다.",
    "hook": "'뒤가 꽉 차면 동격, 구멍 나면 관계사' — the fact/news/idea 뒤 완전한 절엔 that만 통과!",
    "summary": "수능에서는 the fact, the news, the idea, the belief 같은 명사 뒤의 that에 밑줄을 긋고 which나 what으로 바꿔 놓는 함정 문제가 단골로 출제됩니다. 판단의 열쇠는 that 뒤 절의 완전성입니다. that 뒤에 주어와 목적어가 모두 갖춰진 완전한 절이 오면, 그 that은 앞 명사의 '내용'을 풀어 주는 동격의 접속사이므로 which로 바꿀 수 없습니다. 반대로 that 뒤의 절에 주어나 목적어가 빠져 있으면 관계대명사 that이고, 이때는 which(사물)나 who(사람)로 바꿔 쓸 수 있습니다. 같은 명사라도 뒤 절의 모양에 따라 둘 다 가능하기 때문에, 명사만 보고 판단하지 말고 반드시 절 안의 구조를 확인해야 합니다. what은 선행사를 포함한 관계대명사라서 앞에 명사가 있으면 쓸 수 없다는 것도 자주 나오는 포인트입니다.",
    "rules": [
      "1단계: 밑줄 친 that 앞에 the fact, the news, the idea, the belief 같은 추상명사가 있는지 확인한다.",
      "2단계: that 뒤의 절에서 주어와 목적어가 모두 갖춰져 있는지 살펴본다.",
      "3단계: 절이 완전하면 동격의 that이므로 그대로 두고, which나 what으로 바뀌어 있으면 틀린 것으로 판단한다.",
      "4단계: 절이 불완전하면 관계대명사이므로 that과 which 둘 다 가능하다고 판단한다.",
      "5단계: 마지막으로 '앞 명사 = that절의 내용'이라는 동격 해석이 자연스러운지 확인한다."
    ],
    "examples": [
      {
        "en": "The fact that honey never spoils has fascinated scientists for decades.",
        "ko": "꿀이 절대 상하지 않는다는 사실은 수십 년 동안 과학자들을 매혹시켜 왔다."
      },
      {
        "en": "She finally accepted the offer that the company had made two weeks earlier.",
        "ko": "그녀는 마침내 그 회사가 2주 전에 했던 제안을 받아들였다."
      },
      {
        "en": "The belief that failure is a necessary step toward success helped him keep experimenting.",
        "ko": "실패가 성공으로 가는 필수적인 단계라는 믿음이 그가 계속 실험하도록 도와주었다."
      }
    ],
    "quiz": [
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은?\nThe news ( ) the factory would close shocked the whole town.",
        "choices": [
          "that",
          "which",
          "what"
        ],
        "answer": 0,
        "explain": "빈칸 뒤의 'the factory would close'는 주어와 동사가 갖춰진 완전한 절이고, 이 절이 the news의 내용을 설명하므로 동격의 접속사 that이 맞습니다. 동격 자리에는 which를 쓸 수 없고, what은 앞에 명사(the news)가 있으면 쓸 수 없습니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은?\nThe rumor ( ) spread quickly through the school turned out to be completely false.",
        "choices": [
          "what",
          "that",
          "whether"
        ],
        "answer": 1,
        "explain": "빈칸 뒤의 절은 spread의 주어가 빠진 불완전한 절이므로 주격 관계대명사 that이 맞습니다(which도 가능). what은 선행사 the rumor가 이미 있어서 쓸 수 없고, whether는 명사 뒤에서 이런 식으로 절을 이끌 수 없습니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "I support the idea that students should read more novels.",
          "The fact that he apologized changed nothing.",
          "We heard the announcement which the concert had been canceled."
        ],
        "answer": 2,
        "explain": "세 번째 문장에서 'the concert had been canceled'는 완전한 절이고 the announcement의 내용을 설명하므로 which가 아니라 동격의 that을 써야 합니다. 첫 번째와 두 번째는 모두 완전한 절 앞에 동격 that을 올바르게 쓴 문장입니다."
      },
      {
        "q": "(A)/(B)에 알맞은 짝은?\nThe belief (A)[that / which] hard work always pays off gave her strength, and the promise (B)[which / what] her mentor made kept her going.",
        "choices": [
          "that – which",
          "which – that",
          "which – what"
        ],
        "answer": 0,
        "explain": "(A)는 'hard work always pays off'가 완전한 절이므로 the belief의 내용을 설명하는 동격 that이 맞습니다. (B)는 made의 목적어가 빠진 불완전한 절이므로 관계대명사 which가 맞고, what은 선행사 the promise가 있어서 쓸 수 없습니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은?\nThere is no doubt ( ) the new policy will affect small businesses across the country.",
        "choices": [
          "what",
          "that",
          "which"
        ],
        "answer": 1,
        "explain": "빈칸 뒤는 주어와 목적어가 모두 갖춰진 완전한 절이고, doubt의 내용을 설명하므로 동격의 that이 맞습니다. 완전한 절 앞에는 관계대명사 which를 쓸 수 없고, what도 불완전한 절을 이끌기 때문에 틀렸습니다."
      }
    ]
  },
  {
    "id": "c25",
    "title": "혼동 동사 (rise/raise, lie/lay 등 자동사 vs 타동사)",
    "key": "밑줄 친 동사 뒤에 목적어가 있으면 타동사(raise, lay, seat), 없으면 자동사(rise, lie, sit)가 맞는지 확인한다.",
    "hook": "'뒤에 목적어가 있으면 a로 시작하는 raise·lay를 잡아라' — 혼자 움직이면 rise/lie, 무언가를 움직이면 raise/lay!",
    "summary": "수능 어법에서는 모양이 비슷한 자동사와 타동사 짝을 바꿔치기하는 문제가 거의 매년 나옵니다. 대표 짝은 rise(오르다)–raise(올리다), lie(눕다/놓여 있다)–lay(놓다, 눕히다), sit(앉다)–seat(앉히다), arise(발생하다)–arouse(불러일으키다)입니다. 판단 기준은 아주 단순해서, 밑줄 친 동사 바로 뒤에 목적어(명사)가 있으면 타동사, 없으면 자동사를 골라야 합니다. 여기에 불규칙 변화가 함정으로 겹칩니다. lie는 lie–lay–lain으로 변해서 자동사 lie의 과거형이 타동사 lay와 모양이 같고, '거짓말하다'의 lie는 lie–lied–lied로 또 다릅니다. rise는 rise–rose–risen, raise는 raise–raised–raised라는 변화형까지 함께 외워 두어야 시제가 섞인 문제에서 흔들리지 않습니다.",
    "rules": [
      "1단계: 밑줄 친 동사 바로 뒤에 목적어 역할을 하는 명사가 있는지 확인한다.",
      "2단계: 목적어가 있으면 타동사 raise/lay/seat/arouse 계열이 맞는지 확인한다.",
      "3단계: 목적어가 없고 뒤에 부사나 전치사구만 있으면 자동사 rise/lie/sit/arise 계열이 맞는지 확인한다.",
      "4단계: 과거형이 보이면 불규칙 변화표(rise–rose–risen, raise–raised, lie–lay–lain, lay–laid–laid)를 대입해 형태를 검증한다.",
      "5단계: lay가 보이면 '자동사 lie의 과거'인지 '타동사 lay의 현재'인지 시제와 목적어 유무로 구별한다."
    ],
    "examples": [
      {
        "en": "Ocean temperatures have risen steadily over the past thirty years, threatening coral reefs worldwide.",
        "ko": "지난 30년 동안 해수 온도가 꾸준히 상승하여 전 세계의 산호초를 위협하고 있다."
      },
      {
        "en": "The nurse laid the sleeping infant in the crib and quietly closed the door.",
        "ko": "간호사는 잠든 아기를 아기 침대에 눕히고 조용히 문을 닫았다."
      },
      {
        "en": "An unexpected question arose during the discussion, and no one in the room could answer it.",
        "ko": "토론 중에 예상치 못한 질문이 제기되었고, 그 방에 있는 누구도 그것에 답할 수 없었다."
      }
    ],
    "quiz": [
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은?\nThe sun ( ) over the mountains as we finally reached the campsite.",
        "choices": [
          "raised",
          "rose",
          "lay"
        ],
        "answer": 1,
        "explain": "해가 '스스로 떠오르는' 것이고 뒤에 목적어가 없으므로 자동사 rise의 과거형 rose가 맞습니다. raised는 '무엇을 올리다'라는 타동사라 목적어가 필요하고, lay는 '누워 있었다'는 뜻이라 해가 뜨는 상황과 맞지 않습니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은?\nShe ( ) the baby gently on the bed and turned off the light.",
        "choices": [
          "laid",
          "lay",
          "lied"
        ],
        "answer": 0,
        "explain": "뒤에 목적어 the baby가 있으므로 타동사 lay(놓다, 눕히다)의 과거형 laid가 맞습니다. lay를 고르면 자동사 lie의 과거형이 되어 목적어를 가질 수 없고, lied는 '거짓말했다'는 뜻이라 문맥에 맞지 않습니다."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "Prices have risen sharply since last spring.",
          "He was lying on the sofa when I came in.",
          "The government decided to rise taxes on imported goods."
        ],
        "answer": 2,
        "explain": "세 번째 문장은 taxes라는 목적어가 있으므로 자동사 rise가 아니라 타동사 raise를 써서 'to raise taxes'로 고쳐야 합니다. 첫 번째는 목적어 없이 자동사 rise의 완료형을 쓴 것이고, 두 번째는 '누워 있었다'는 자동사 lie의 진행형으로 모두 맞습니다."
      },
      {
        "q": "(A)/(B)에 알맞은 짝은?\nThe old letters (A)[lay / laid] untouched in the drawer for years, and yesterday my grandmother finally (B)[rose / raised] the lid of the box to read them again.",
        "choices": [
          "lay – raised",
          "laid – raised",
          "lay – rose"
        ],
        "answer": 0,
        "explain": "(A)는 편지들이 '놓여 있었다'는 뜻으로 목적어가 없으므로 자동사 lie의 과거형 lay가 맞습니다. (B)는 the lid라는 목적어가 있으므로 타동사 raise의 과거형 raised를 써야 합니다. laid와 rose는 각각 목적어 유무 조건과 반대라서 틀렸습니다."
      },
      {
        "q": "다음 문장의 빈칸(괄호)에 어법상 알맞은 것은?\nA serious problem ( ) during the final test of the new software.",
        "choices": [
          "aroused",
          "raised",
          "arose"
        ],
        "answer": 2,
        "explain": "문제가 '저절로 생겨난' 것이고 뒤에 목적어가 없으므로 자동사 arise의 과거형 arose가 맞습니다. aroused와 raised는 모두 목적어가 필요한 타동사여서 목적어 없는 이 문장에는 쓸 수 없습니다."
      }
    ]
  }
];

export const MOCK_TESTS: MockTest[] = [
  {
    "id": "k85",
    "day": 85,
    "title": "종합 모의 테스트 1회",
    "questions": [
      {
        "q": "다음 문장의 괄호에 어법상 알맞은 것을 고르시오.\nThe number of students who join the reading club every spring (   ) steadily over the past five years.",
        "choices": [
          "has grown",
          "have grown",
          "growing"
        ],
        "answer": 0,
        "explain": "the number of(~의 수)는 항상 단수 취급하므로 has가 맞아요. over the past five years(지난 5년 동안)가 있으니 현재완료 has grown이 자연스러워요. have grown은 복수 동사라서 틀리고, growing은 본동사가 될 수 없어요."
      },
      {
        "q": "다음 문장의 괄호에 어법상 알맞은 것을 고르시오.\nThe old bridge (   ) by workers when the storm suddenly hit the town.",
        "choices": [
          "was repairing",
          "was being repaired",
          "repaired"
        ],
        "answer": 1,
        "explain": "다리는 스스로 수리하는 게 아니라 '수리되는' 것이므로 수동태가 필요해요. 폭풍이 쳤을 때 한창 수리 중이었으니 진행 수동태 was being repaired가 정답이에요. was repairing과 repaired는 다리가 직접 수리한다는 뜻이 되어 어색해요."
      },
      {
        "q": "다음 문장의 괄호에 어법상 알맞은 것을 고르시오.\nThe audience was deeply moved by the (   ) story of the young violinist.",
        "choices": [
          "touched",
          "touch",
          "touching"
        ],
        "answer": 2,
        "explain": "이야기가 사람에게 감동을 '주는' 쪽이므로 현재분사 touching(감동적인)이 맞아요. touched는 감동을 '받은' 사람을 꾸밀 때 쓰고, touch는 동사 원형이라 명사를 꾸밀 수 없어요."
      },
      {
        "q": "다음 중 어법상 틀린 문장을 고르시오.",
        "choices": [
          "The letters written by my grandmother are kept in a wooden box.",
          "The tourists visiting the palace taking pictures of the ancient walls.",
          "The dog barking outside kept me awake all night."
        ],
        "answer": 1,
        "explain": "두 번째 문장에는 진짜 동사(본동사)가 하나도 없어요. visiting과 taking은 모두 분사라서 taking을 took 같은 본동사로 바꿔야 해요. 나머지 문장은 각각 are kept, kept라는 본동사가 제대로 있어요."
      },
      {
        "q": "다음 문장의 괄호에 어법상 알맞은 것을 고르시오.\nWe stayed at a small hotel (   ) windows looked out over the sea.",
        "choices": [
          "whose",
          "which",
          "who"
        ],
        "answer": 0,
        "explain": "'호텔의 창문'처럼 소유 관계를 나타내므로 소유격 관계대명사 whose가 맞아요. which나 who 뒤에는 주어나 목적어가 빠진 문장이 와야 하는데, 여기서는 windows라는 명사가 바로 이어지므로 안 돼요."
      },
      {
        "q": "다음 문장의 괄호에 어법상 알맞은 것을 고르시오.\n(   ) surprised everyone was that the youngest player scored the winning goal.",
        "choices": [
          "That",
          "Which",
          "What"
        ],
        "answer": 2,
        "explain": "괄호 뒤 surprised everyone은 주어가 빠진 불완전한 문장이므로 What(~하는 것)이 정답이에요. What절 전체가 문장의 주어 역할을 해요. That은 뒤에 완전한 문장이 와야 하고, Which는 이런 자리에 쓸 수 없어요."
      },
      {
        "q": "다음 (A), (B)에 들어갈 말로 짝지어진 것을 고르시오.\nSuccess in learning a language depends on practicing every day, reviewing mistakes, and (A)[to keep / keeping] a positive attitude. The teacher also advised us to read aloud and (B)[record / recording] our voices.",
        "choices": [
          "(A) to keep – (B) recording",
          "(A) keeping – (B) record",
          "(A) to keep – (B) record"
        ],
        "answer": 1,
        "explain": "(A)는 practicing, reviewing과 나란히 연결되므로 같은 형태인 keeping이 맞아요. (B)는 to read와 병렬이라 (to) record가 되어야 해요. and로 이어질 때는 앞뒤 형태를 똑같이 맞추는 게 핵심이에요."
      },
      {
        "q": "다음 문장의 괄호에 어법상 알맞은 것을 고르시오.\nThe climate of Korea is milder than (   ) of Mongolia.",
        "choices": [
          "that",
          "those",
          "it"
        ],
        "answer": 0,
        "explain": "앞에 나온 단수 명사 climate를 대신하므로 that이 정답이에요. those는 복수 명사를 대신할 때 쓰고, it은 뒤에 of Mongolia 같은 수식어를 붙일 수 없어요."
      },
      {
        "q": "다음 문장의 괄호에 어법상 알맞은 것을 고르시오.\nThe medicine worked so (   ) that the patient recovered within a week.",
        "choices": [
          "effective",
          "effectiveness",
          "effectively"
        ],
        "answer": 2,
        "explain": "동사 worked(효과가 있었다)를 꾸며 주려면 부사 effectively가 필요해요. effective는 형용사라 명사를 꾸미고, effectiveness는 명사라서 동사를 꾸밀 수 없어요."
      },
      {
        "q": "다음 문장의 괄호에 어법상 알맞은 것을 고르시오.\nDon't forget (   ) the door when you leave the office tonight.",
        "choices": [
          "to lock",
          "locking",
          "locked"
        ],
        "answer": 0,
        "explain": "forget to-V는 '앞으로 할 일을 잊지 마라'는 뜻이에요. 오늘 밤 나갈 때 잠가야 할 일이므로 to lock이 정답이에요. forget locking은 '과거에 잠갔던 사실을 잊다'라는 뜻이라 상황에 맞지 않아요."
      },
      {
        "q": "다음 문장의 괄호에 어법상 알맞은 것을 고르시오.\n(   ) from the top of the mountain, the village looked like a tiny toy town.",
        "choices": [
          "Seeing",
          "Seen",
          "To see"
        ],
        "answer": 1,
        "explain": "주어인 마을(the village)은 스스로 보는 게 아니라 '보이는' 대상이므로 과거분사 Seen이 맞아요. Seeing이면 마을이 직접 본다는 이상한 뜻이 돼요. 분사구문에서는 주어와의 능동·수동 관계를 꼭 확인하세요."
      },
      {
        "q": "다음 문장의 괄호에 어법상 알맞은 것을 고르시오.\nBy the time the guests arrived, we (   ) all the food for the party.",
        "choices": [
          "prepare",
          "have prepared",
          "had prepared"
        ],
        "answer": 2,
        "explain": "손님이 도착한 것(과거)보다 음식 준비가 더 먼저 끝났으므로 과거완료 had prepared가 정답이에요. have prepared는 현재완료라서 과거 기준 시점과 맞지 않고, prepare는 현재형이라 아예 시제가 어긋나요."
      },
      {
        "q": "다음 문장의 괄호에 어법상 알맞은 것을 고르시오.\nIf I (   ) more money last year, I would have traveled around Europe.",
        "choices": [
          "had saved",
          "saved",
          "have saved"
        ],
        "answer": 0,
        "explain": "last year라는 과거 사실을 반대로 상상하는 가정법 과거완료예요. 그래서 If절에는 had saved, 주절에는 would have traveled를 써요. saved는 가정법 과거(현재 반대)라서 시점이 안 맞아요."
      },
      {
        "q": "다음 문장의 괄호에 어법상 알맞은 것을 고르시오.\nNever (   ) such a beautiful sunset before she visited the island.",
        "choices": [
          "she had seen",
          "had she seen",
          "she has seen"
        ],
        "answer": 1,
        "explain": "Never 같은 부정어가 문장 맨 앞에 오면 주어와 동사의 순서를 바꾸는 도치가 일어나요. 그래서 had she seen이 정답이에요. she had seen은 도치가 안 된 형태라 틀려요."
      },
      {
        "q": "다음 (A), (B)에 들어갈 말로 짝지어진 것을 고르시오.\n(A)[During / While] the concert, the audience remained silent. The picnic was canceled (B)[because / because of] it rained heavily.",
        "choices": [
          "(A) While – (B) because of",
          "(A) During – (B) because of",
          "(A) During – (B) because"
        ],
        "answer": 2,
        "explain": "(A) 뒤에는 the concert라는 명사만 있으니 전치사 During이 맞아요. (B) 뒤에는 it rained라는 '주어+동사' 문장이 오니 접속사 because가 필요해요. 명사 앞엔 전치사, 문장 앞엔 접속사라고 기억하세요."
      },
      {
        "q": "다음 문장의 괄호에 어법상 알맞은 것을 고르시오.\nThe little girl looked at (   ) in the mirror and smiled.",
        "choices": [
          "herself",
          "her",
          "hers"
        ],
        "answer": 0,
        "explain": "주어인 소녀가 거울 속의 '자기 자신'을 보는 것이므로 재귀대명사 herself가 맞아요. her를 쓰면 다른 여자를 본다는 뜻이 되고, hers(그녀의 것)는 의미가 통하지 않아요."
      },
      {
        "q": "다음 문장의 괄호에 어법상 알맞은 것을 고르시오.\nMy sister enjoys cooking much more than I (   ).",
        "choices": [
          "am",
          "do",
          "have"
        ],
        "answer": 1,
        "explain": "앞의 일반동사 enjoys를 반복하지 않으려면 대동사 do를 써요. 'than I do'는 'than I enjoy cooking'을 줄인 말이에요. be동사 am이나 have는 앞 동사가 be동사·완료형일 때만 쓸 수 있어요."
      },
      {
        "q": "다음 문장의 괄호에 어법상 알맞은 것을 고르시오.\nThe new smartphone is (   ) than the previous model.",
        "choices": [
          "very lighter",
          "more lighter",
          "much lighter"
        ],
        "answer": 2,
        "explain": "비교급을 강조할 때는 much, far, even 같은 말을 써서 much lighter가 정답이에요. very는 비교급을 강조할 수 없고, more lighter는 비교급을 두 번 겹쳐 쓴 틀린 표현이에요."
      },
      {
        "q": "다음 문장의 괄호에 어법상 알맞은 것을 고르시오.\nCould you tell me (   )?",
        "choices": [
          "where the nearest station is",
          "where is the nearest station",
          "where does the nearest station"
        ],
        "answer": 0,
        "explain": "의문문이 다른 문장 속에 들어가면(간접의문문) '의문사+주어+동사' 순서로 써야 해요. 그래서 where the nearest station is가 맞아요. where is~처럼 동사가 먼저 오는 건 직접 물어볼 때만 쓰는 어순이에요."
      },
      {
        "q": "다음 문장의 괄호에 어법상 알맞은 것을 고르시오.\nThe teacher had the students (   ) their essays before submitting them.",
        "choices": [
          "to revise",
          "revise",
          "revised"
        ],
        "answer": 1,
        "explain": "사역동사 have는 '목적어+동사원형' 형태를 써서 revise가 정답이에요. 학생들이 직접 고치는 능동 관계이기 때문이에요. to revise는 have와 함께 쓸 수 없고, revised는 목적어가 '고침을 당할' 때만 써요."
      }
    ]
  },
  {
    "id": "k86",
    "day": 86,
    "title": "종합 모의 테스트 2회",
    "questions": [
      {
        "q": "다음 중 어법상 틀린 문장을 고르시오.",
        "choices": [
          "Each of the candidates was given ten minutes to present a plan.",
          "Two-thirds of the island is covered with dense forest.",
          "The quality of the products sold at the market have improved recently."
        ],
        "answer": 2,
        "explain": "세 번째 문장의 주어는 products가 아니라 단수 명사 quality이므로 have가 아니라 has를 써야 해요. each of는 항상 단수 취급이고, 분수 표현은 뒤 명사(island, 단수)에 동사를 맞추므로 앞 두 문장은 맞아요."
      },
      {
        "q": "다음 문장의 괄호에 어법상 알맞은 것을 고르시오.\nThe ancient manuscript is believed (   ) by monks in the twelfth century.",
        "choices": [
          "to have been written",
          "to have written",
          "to be writing"
        ],
        "answer": 0,
        "explain": "문서는 수도사들에 의해 '쓰인' 것이므로 수동이 필요하고, 믿는 시점(현재)보다 쓰인 때(12세기)가 더 과거이므로 완료형이 필요해요. 그래서 to have been written이 정답이에요. to have written은 문서가 직접 썼다는 능동의 뜻이라 틀려요."
      },
      {
        "q": "다음 문장의 괄호에 어법상 알맞은 것을 고르시오.\nThe company built a new laboratory (   ) researchers can test their ideas freely.",
        "choices": [
          "which",
          "in which",
          "in that"
        ],
        "answer": 1,
        "explain": "괄호 뒤가 주어·목적어가 모두 갖춰진 완전한 문장이므로 '전치사+관계대명사'인 in which(그 안에서)가 맞아요. which만 쓰려면 뒤 문장에 빈자리가 있어야 하고, 관계대명사 that은 전치사 바로 뒤에 올 수 없어요."
      },
      {
        "q": "다음 문장의 괄호에 어법상 알맞은 것을 고르시오.\nThe news (   ) the two companies would merge surprised the entire industry.",
        "choices": [
          "what",
          "which",
          "that"
        ],
        "answer": 2,
        "explain": "괄호 뒤가 완전한 문장이고, news의 내용을 그대로 설명해 주는 동격의 that이 정답이에요. what은 불완전한 문장 앞에 쓰고, which는 뒤 문장에 빈자리가 있어야 해서 둘 다 안 돼요."
      },
      {
        "q": "다음 (A), (B)에 들어갈 말로 짝지어진 것을 고르시오.\nThe exhausted traveler (A)[lay / laid] down on the grass to rest. She (B)[raised / rose] her hand to ask a question.",
        "choices": [
          "(A) lay – (B) raised",
          "(A) laid – (B) rose",
          "(A) lay – (B) rose"
        ],
        "answer": 0,
        "explain": "(A)는 목적어 없이 '눕다'라는 뜻이므로 자동사 lie의 과거형 lay가 맞아요. laid는 '~을 놓다(lay)'의 과거형이라 목적어가 필요해요. (B)는 her hand라는 목적어가 있으니 타동사 raised(들어 올렸다)가 맞고, rose는 목적어를 못 가져요."
      },
      {
        "q": "다음 중 어법상 틀린 문장을 고르시오.",
        "choices": [
          "The results announced this morning pleased the investors.",
          "Students interesting in the program should apply by Friday.",
          "The novel translated into ten languages became a global bestseller."
        ],
        "answer": 1,
        "explain": "학생들은 프로그램에 흥미를 '느끼는' 쪽이므로 interesting이 아니라 과거분사 interested를 써야 해요. 감정을 주면 -ing, 감정을 받으면 -ed가 원칙이에요. 나머지 문장의 announced, translated는 각각 '발표된', '번역된'이라는 수동 의미로 올바르게 쓰였어요."
      },
      {
        "q": "다음 문장의 괄호에 어법상 알맞은 것을 고르시오.\nThe lecture was quite different from (   ) we had expected to hear.",
        "choices": [
          "what",
          "that",
          "which"
        ],
        "answer": 0,
        "explain": "괄호 뒤 문장은 hear의 목적어가 빠진 불완전한 문장이고, 앞에 꾸며 줄 명사(선행사)도 없으므로 what(~하는 것)이 정답이에요. that과 which는 선행사가 있어야 쓸 수 있어요."
      },
      {
        "q": "다음 중 어법상 틀린 문장을 고르시오.",
        "choices": [
          "The program helps children build confidence, make friends, and develop new skills.",
          "She spent the weekend cleaning the house and organizing her closet.",
          "To succeed, you must plan carefully, act quickly, and being patient with results."
        ],
        "answer": 2,
        "explain": "세 번째 문장은 must 뒤에 plan, act가 동사원형으로 나열되었으므로 being이 아니라 be를 써야 해요. and로 연결되는 말들은 형태를 똑같이 맞춰야 해요. 앞 두 문장은 원형끼리, -ing끼리 잘 맞춰져 있어요."
      },
      {
        "q": "다음 (A), (B)에 들어갈 말로 짝지어진 것을 고르시오.\nThe chef's new dish tasted (A)[strange / strangely] to some customers. However, the restaurant still ran (B)[smooth / smoothly] that evening.",
        "choices": [
          "(A) strangely – (B) smoothly",
          "(A) strange – (B) smoothly",
          "(A) strange – (B) smooth"
        ],
        "answer": 1,
        "explain": "(A)의 taste는 감각동사라서 뒤에 형용사 strange를 써요. '이상한 맛이 났다'는 뜻이에요. (B)는 동사 ran(운영되었다)을 꾸미는 자리이므로 부사 smoothly가 맞아요."
      },
      {
        "q": "다음 문장의 괄호에 어법상 알맞은 것을 고르시오.\n(   ) all the evidence, the jury reached a unanimous verdict.",
        "choices": [
          "Having considered",
          "Considered",
          "Being considering"
        ],
        "answer": 0,
        "explain": "배심원단이 증거를 직접 '검토한' 능동 관계이고, 검토가 판결보다 먼저 일어났으므로 완료 분사구문 Having considered가 정답이에요. Considered는 수동의 뜻이 되어 어색하고, Being considering은 문법에 없는 형태예요."
      },
      {
        "q": "다음 문장의 괄호에 어법상 알맞은 것을 고르시오.\n(   ) for your timely advice, our project would have failed completely.",
        "choices": [
          "It had not been",
          "Had not it been",
          "Had it not been"
        ],
        "answer": 2,
        "explain": "If it had not been for(~이 없었다면)에서 If를 생략하면 Had it not been for로 도치돼요. 부정어 not은 주어 it 뒤에 와야 하므로 Had not it been은 어순이 틀렸어요."
      },
      {
        "q": "다음 문장의 괄호에 어법상 알맞은 것을 고르시오.\nOnly after the storm passed (   ) how much damage the flood had caused.",
        "choices": [
          "the residents realized",
          "did the residents realize",
          "the residents did realize"
        ],
        "answer": 1,
        "explain": "Only after ~ 같은 'Only+부사어'가 문장 맨 앞에 오면 주어와 동사를 도치해야 해요. 그래서 did the residents realize가 정답이에요. 나머지 둘은 도치가 되지 않았거나 어순이 틀린 형태예요."
      },
      {
        "q": "다음 문장의 괄호에 어법상 알맞은 것을 고르시오.\n(   ) the heavy traffic, we arrived at the airport just in time for our flight.",
        "choices": [
          "Despite",
          "Although",
          "Even though"
        ],
        "answer": 0,
        "explain": "괄호 뒤에 the heavy traffic이라는 명사만 있으므로 전치사 Despite(~에도 불구하고)가 맞아요. Although와 Even though는 접속사라서 뒤에 '주어+동사'가 있는 문장이 와야 해요."
      },
      {
        "q": "다음 문장의 괄호에 어법상 알맞은 것을 고르시오.\nThe critics praised the film far more highly than the general audience (   ).",
        "choices": [
          "was",
          "were",
          "did"
        ],
        "answer": 2,
        "explain": "앞의 일반동사 praised를 대신하는 대동사가 필요하므로 did가 정답이에요. 'than the audience did'는 'than the audience praised it'을 줄인 말이에요. be동사 was/were는 앞 동사가 be동사일 때만 써요."
      },
      {
        "q": "다음 문장의 괄호에 어법상 알맞은 것을 고르시오.\n(   ) was not until the museum closed that we realized we had lost our tickets.",
        "choices": [
          "What",
          "It",
          "That"
        ],
        "answer": 1,
        "explain": "It is not until A that B(A하고 나서야 비로소 B하다)라는 강조 구문이므로 It이 정답이에요. 이때 It은 특별한 뜻 없이 형식적으로 쓰는 말이에요. What이나 That으로는 이 구문을 만들 수 없어요."
      },
      {
        "q": "다음 문장의 괄호에 어법상 알맞은 것을 고르시오.\nThe more carefully you listen to others, (   ) you understand their true feelings.",
        "choices": [
          "the good",
          "better",
          "the better"
        ],
        "answer": 2,
        "explain": "'the 비교급, the 비교급' 구문으로 '~할수록 더 …하다'라는 뜻이에요. 앞에 The more carefully가 있으니 뒤에도 the better처럼 the를 붙인 비교급이 와야 해요. the good은 원급이고, better만 쓰면 the가 빠져서 틀려요."
      },
      {
        "q": "다음 (A), (B)에 들어갈 말로 짝지어진 것을 고르시오.\n(A)[A number of / The number of] volunteers have joined the cleanup campaign this year. Unfortunately, (B)[few / little] time remains before the event begins.",
        "choices": [
          "(A) A number of – (B) little",
          "(A) The number of – (B) few",
          "(A) A number of – (B) few"
        ],
        "answer": 0,
        "explain": "(A)는 뒤에 복수 동사 have joined가 있으므로 '많은'이라는 뜻의 a number of가 맞아요. the number of는 단수 취급이에요. (B)의 time은 셀 수 없는 명사라서 little을 쓰고, few는 셀 수 있는 복수 명사에만 써요."
      },
      {
        "q": "다음 문장의 괄호에 어법상 알맞은 것을 고르시오.\nIt was (   ) that everyone in the class wanted a copy.",
        "choices": [
          "a so useful book",
          "so useful a book",
          "so a useful book"
        ],
        "answer": 1,
        "explain": "so는 'so+형용사+a+명사'의 특별한 어순을 만들어요. 그래서 so useful a book이 정답이에요. 관사 a가 형용사 뒤로 가는 것이 포인트이고, 나머지 둘은 어순이 틀렸어요."
      },
      {
        "q": "다음 문장의 괄호에 어법상 알맞은 것을 고르시오.\nThe security guard noticed a stranger (   ) around the parking lot late at night.",
        "choices": [
          "wandering",
          "to wander",
          "wandered"
        ],
        "answer": 0,
        "explain": "notice 같은 지각동사는 목적어 뒤에 동사원형이나 -ing를 목적격 보어로 써요. 낯선 사람이 직접 돌아다니는 능동 관계이므로 wandering이 정답이에요. to wander는 지각동사와 쓸 수 없고, wandered는 수동의 뜻이라 어색해요."
      },
      {
        "q": "다음 중 어법상 틀린 문장을 고르시오.",
        "choices": [
          "The scientist who discovered the vaccine received an international award.",
          "This is the house which my grandfather was born in 1950.",
          "She finally met the author whose novels she had admired for years."
        ],
        "answer": 1,
        "explain": "두 번째 문장은 which 뒤가 빠진 자리 없이 완전한 문장이라 틀렸어요. 장소를 나타내는 관계부사 where나 in which로 바꿔야 해요. 첫 번째는 who 뒤에 주어가, 세 번째는 whose가 소유 관계를 나타내어 모두 올바른 문장이에요."
      }
    ]
  },
  {
    "id": "k87",
    "day": 87,
    "title": "종합 모의 테스트 3회",
    "questions": [
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\nThe list of items that need to be repaired ( ) on the manager's desk every Monday morning.",
        "choices": [
          "are placed",
          "is placed",
          "been placed"
        ],
        "answer": 1,
        "explain": "주어는 items가 아니라 단수 명사 the list예요. 그래서 단수 동사 is placed가 맞아요. are placed는 복수 주어에 쓰고, been placed는 앞에 has/have가 없으면 혼자 쓸 수 없어요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\nThe ancient temple, which ( ) by thousands of tourists every year, was built in the ninth century.",
        "choices": [
          "is visited",
          "visits",
          "visiting"
        ],
        "answer": 0,
        "explain": "사원은 관광객에게 '방문되는' 대상이므로 수동태 is visited가 맞아요. visits는 사원이 스스로 방문한다는 이상한 뜻이 되고, visiting은 동사 자리에 혼자 올 수 없어요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\nThe scientist presented data ( ) that ocean temperatures have risen sharply.",
        "choices": [
          "shown",
          "showed",
          "showing"
        ],
        "answer": 2,
        "explain": "자료가 '보여 주는' 것이므로 능동 의미의 현재분사 showing이 맞아요. shown은 '보여진'이라는 수동 뜻이라 뒤에 목적어(that절)를 가질 수 없고, showed는 이미 동사 presented가 있어서 또 올 수 없어요."
      },
      {
        "q": "다음 중 어법상 틀린 문장을 고르시오.",
        "choices": [
          "The students taking the exam in the hall looked very nervous.",
          "The birds singing outside my window every morning at dawn.",
          "The man standing at the gate is my uncle from Busan."
        ],
        "answer": 1,
        "explain": "두 번째 문장에는 진짜 동사(본동사)가 없어요. singing은 새를 꾸며 주는 말일 뿐이라, sing 같은 본동사가 따로 필요해요. 나머지 문장은 looked, is라는 본동사가 제대로 있어요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\nShe moved to a small town ( ) she could focus on her writing without distractions.",
        "choices": [
          "which",
          "what",
          "where"
        ],
        "answer": 2,
        "explain": "뒤 문장(she could focus...)이 주어와 목적어를 다 갖춘 완전한 문장이므로 장소를 나타내는 관계부사 where가 맞아요. which는 뒤가 불완전할 때 쓰고, what은 앞에 꾸며 줄 명사(town)가 있으면 쓸 수 없어요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\n( ) surprised everyone was that the young player broke the national record.",
        "choices": [
          "That",
          "What",
          "Which"
        ],
        "answer": 1,
        "explain": "괄호 뒤에 surprised의 주어가 없는 불완전한 문장이 오므로 '~한 것'이라는 뜻의 What이 맞아요. That은 뒤에 완전한 문장이 와야 하고, Which는 이렇게 문장 맨 앞 주어 자리에 혼자 쓰지 않아요."
      },
      {
        "q": "(A), (B)에 들어갈 말이 어법상 알맞게 짝지어진 것을 고르시오.\nHe spent the weekend cleaning the garage, (A)[repaired / repairing] the fence, and (B)[to paint / painting] the walls.",
        "choices": [
          "(A) repaired - (B) painting",
          "(A) repairing - (B) to paint",
          "(A) repairing - (B) painting"
        ],
        "answer": 2,
        "explain": "and로 연결되는 세 동작은 같은 모양이어야 해요(병렬 구조). 앞에 cleaning이 있으니 repairing, painting으로 맞춰야 해요. repaired나 to paint를 쓰면 모양이 어긋나서 틀려요."
      },
      {
        "q": "다음 중 어법상 틀린 문장을 고르시오.",
        "choices": [
          "Each student has to bring his or her own laptop to the workshop.",
          "The committee announced its final decision after the long meeting.",
          "One of my friends lost their passport, so he had to visit the embassy."
        ],
        "answer": 2,
        "explain": "세 번째 문장은 한 사람(one of my friends)을 앞에서는 their, 뒤에서는 he로 받아서 대명사가 서로 어긋나요. 같은 사람이면 his처럼 하나로 통일해야 해요. 나머지 문장은 대명사가 주어와 잘 맞아요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\nThe medicine worked so ( ) that the patient recovered within a few days.",
        "choices": [
          "effectively",
          "effective",
          "effectiveness"
        ],
        "answer": 0,
        "explain": "동사 worked를 꾸며 주는 말이므로 부사 effectively가 맞아요. 형용사 effective는 명사를 꾸미거나 be동사 뒤에 쓰고, effectiveness는 명사라서 동사를 꾸밀 수 없어요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\nOn his way home, he stopped ( ) some flowers for his mother at the market.",
        "choices": [
          "to buy",
          "buying",
          "bought"
        ],
        "answer": 0,
        "explain": "'꽃을 사기 위해 멈췄다'는 뜻이므로 목적을 나타내는 to buy가 맞아요. stopped buying은 '사던 것을 그만두다'라는 다른 뜻이 되고, bought는 이미 stopped가 동사라서 올 수 없어요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\n( ) from the top of the tower, the city lights looked like scattered jewels.",
        "choices": [
          "Seeing",
          "To see",
          "Seen"
        ],
        "answer": 2,
        "explain": "주어인 도시의 불빛(the city lights)은 '보여지는' 대상이므로 수동 의미의 과거분사 Seen이 맞아요. Seeing을 쓰면 불빛이 스스로 본다는 이상한 뜻이 돼요. 분사구문은 주어와의 관계로 능동·수동을 정해요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\nBy the time the rescue team arrived, the climbers ( ) for six hours in the freezing wind.",
        "choices": [
          "had waited",
          "have waited",
          "are waiting"
        ],
        "answer": 0,
        "explain": "구조대가 도착한 과거 시점보다 더 먼저부터 기다린 일이므로 과거완료 had waited가 맞아요. have waited는 현재와 이어질 때 쓰고, are waiting은 지금 진행 중일 때 써서 과거 이야기와 안 맞아요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\nIf she ( ) the warning message earlier, she would not have missed the flight.",
        "choices": [
          "reads",
          "had read",
          "would read"
        ],
        "answer": 1,
        "explain": "'과거에 읽었더라면 놓치지 않았을 텐데'라는 가정법 과거완료예요. 주절에 would not have missed가 있으니 if절에는 had read를 써요. reads는 단순 현재, would read는 if절 안에 쓸 수 없는 형태예요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\nNot until the final scene ( ) the true identity of the mysterious hero.",
        "choices": [
          "the audience realized",
          "the audience did realize",
          "did the audience realize"
        ],
        "answer": 2,
        "explain": "Not until 같은 부정 표현이 문장 앞에 오면 주어와 동사의 순서를 바꿔요(도치). 그래서 did the audience realize가 맞아요. 나머지 둘은 도치가 안 되었거나 did의 위치가 잘못됐어요."
      },
      {
        "q": "(A), (B)에 들어갈 말이 어법상 알맞게 짝지어진 것을 고르시오.\n(A)[During / While] the negotiation, both sides remained calm (B)[despite / although] the pressure from the media.",
        "choices": [
          "(A) While - (B) despite",
          "(A) During - (B) despite",
          "(A) During - (B) although"
        ],
        "answer": 1,
        "explain": "(A) 뒤에는 the negotiation이라는 명사만 있으므로 전치사 During이 맞아요. (B) 뒤에도 the pressure라는 명사가 오므로 전치사 despite가 맞아요. While과 although는 접속사라서 뒤에 '주어+동사'가 와야 해요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\nThe children were proud of ( ) for finishing the marathon without any help.",
        "choices": [
          "themselves",
          "them",
          "theirs"
        ],
        "answer": 0,
        "explain": "주어(the children)와 전치사 뒤의 대상이 같은 사람이므로 재귀대명사 themselves를 써요. them을 쓰면 다른 사람들을 자랑스러워한다는 뜻이 되고, theirs는 '그들의 것'이라 어울리지 않아요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\nShe enjoys classical music far more than her brother ( ).",
        "choices": [
          "is",
          "does",
          "has"
        ],
        "answer": 1,
        "explain": "앞의 일반동사 enjoys를 대신하는 대동사가 필요하므로 does가 맞아요. is는 be동사를 대신할 때, has는 완료형(has enjoyed 등)을 대신할 때 쓰기 때문에 여기서는 틀려요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\n( ) was the heavy snowfall that forced the airport to close for two days.",
        "choices": [
          "It",
          "What",
          "There"
        ],
        "answer": 0,
        "explain": "'공항을 닫게 만든 것은 바로 폭설이었다'라는 It ~ that 강조 구문이에요. 강조할 말(the heavy snowfall)을 It was와 that 사이에 넣어요. What과 There는 이 강조 구문에 쓸 수 없어요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\nThe new bridge is twice ( ) the old one across the river.",
        "choices": [
          "long as",
          "longer as",
          "as long as"
        ],
        "answer": 2,
        "explain": "'~의 두 배만큼 길다'는 배수 표현은 'twice as 원급 as'로 써요. 그래서 as long as가 맞아요. longer as처럼 비교급과 as를 섞어 쓰면 틀리고, long as는 앞의 as가 빠져서 틀려요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\nShe had her old computer ( ) by a technician yesterday.",
        "choices": [
          "repair",
          "repaired",
          "to repair"
        ],
        "answer": 1,
        "explain": "컴퓨터는 기사에게 '수리되는' 대상이므로 have의 목적격 보어 자리에 과거분사 repaired를 써요. repair(동사원형)는 목적어가 직접 행동할 때 쓰고, have는 보어로 to부정사를 쓰지 않아요."
      }
    ]
  },
  {
    "id": "k88",
    "day": 88,
    "title": "종합 모의 테스트 4회",
    "questions": [
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\n( ) of the information in the report was collected from public sources.",
        "choices": [
          "Many",
          "A few",
          "Much"
        ],
        "answer": 2,
        "explain": "information은 셀 수 없는 명사라서 Much를 써요. Many와 A few는 셀 수 있는 복수 명사에만 쓸 수 있어요. 동사가 was인 것도 단수 취급의 힌트예요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\nExcuse me, could you tell me ( ) from here?",
        "choices": [
          "where is the station",
          "where the station is",
          "where does the station is"
        ],
        "answer": 1,
        "explain": "의문문이 문장 안으로 들어가면(간접의문문) '의문사+주어+동사'의 순서로 써요. 그래서 where the station is가 맞아요. where is the station은 직접 물을 때의 어순이고, does와 is를 같이 쓰는 것은 아예 틀린 형태예요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\nThe conference provided a platform ( ) young researchers could share their new ideas.",
        "choices": [
          "on which",
          "which",
          "whom"
        ],
        "answer": 0,
        "explain": "뒤 문장이 완전하므로 '전치사+관계대명사'인 on which가 맞아요. 원래 share ideas on a platform에서 on이 앞으로 나온 거예요. which나 whom만 쓰면 뒤 문장에 빈자리가 있어야 해서 틀려요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\nThe news ( ) the factory would close down shocked the entire town.",
        "choices": [
          "which",
          "what",
          "that"
        ],
        "answer": 2,
        "explain": "the news의 내용을 그대로 설명하는 완전한 문장이 뒤에 오므로 동격의 that이 맞아요. which는 뒤 문장이 불완전할 때 쓰는 관계대명사이고, what은 앞에 명사(the news)가 있으면 쓸 수 없어요."
      },
      {
        "q": "다음 중 어법상 틀린 문장을 고르시오.",
        "choices": [
          "The company raised the prices of its products last month.",
          "He laid the baby gently on the bed and turned off the light.",
          "She was so tired that she laid down on the sofa for a while."
        ],
        "answer": 2,
        "explain": "'눕다'는 lie이고 과거형은 lay예요. 그래서 세 번째 문장은 she lay down으로 써야 해요. laid는 '~을 놓다'라는 lay의 과거형이라 뒤에 목적어가 필요해요. 첫째와 둘째 문장은 raise와 lay를 바르게 썼어요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\nNeither of the two solutions proposed at the meeting ( ) practical enough to adopt.",
        "choices": [
          "seem",
          "seems",
          "seeming"
        ],
        "answer": 1,
        "explain": "neither of 뒤에 복수 명사가 와도 neither 자체는 단수 취급이라 seems가 맞아요. seem은 복수 동사라서 틀리고, seeming은 본동사 자리에 혼자 올 수 없어요."
      },
      {
        "q": "(A), (B)에 들어갈 말이 어법상 알맞게 짝지어진 것을 고르시오.\nThe novel, (A)[writing / written] in the 1920s, still (B)[reads / is read] by millions of people today.",
        "choices": [
          "(A) written - (B) is read",
          "(A) writing - (B) is read",
          "(A) written - (B) reads"
        ],
        "answer": 0,
        "explain": "소설은 '쓰여진' 것이므로 (A)는 과거분사 written이 맞아요. 또 소설은 사람들에게 '읽히는' 대상이고 뒤에 by가 있으니 (B)는 수동태 is read가 맞아요. writing과 reads는 소설이 직접 행동한다는 이상한 뜻이 돼요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\nThe audience was deeply ( ) by the pianist's emotional performance.",
        "choices": [
          "moved",
          "moving",
          "move"
        ],
        "answer": 0,
        "explain": "관객은 감동을 '받는' 쪽이므로 과거분사 moved가 맞아요. moving은 '감동을 주는'이라는 뜻이라 연주 같은 원인에 쓰고, move는 분사가 아니라서 be동사 뒤 이 자리에 올 수 없어요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\nThe professor mentioned a theory, ( ) name I couldn't remember after the lecture.",
        "choices": [
          "which",
          "whose",
          "that"
        ],
        "answer": 1,
        "explain": "'그 이론의 이름'처럼 소유 관계를 나타내므로 소유격 관계대명사 whose가 맞아요. which와 that은 뒤의 명사 name과 소유 관계로 연결해 줄 수 없고, that은 콤마 뒤에 쓸 수도 없어요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\nThe biggest problem is ( ) we don't have enough time to test the product.",
        "choices": [
          "what",
          "which",
          "that"
        ],
        "answer": 2,
        "explain": "괄호 뒤가 주어, 목적어를 모두 갖춘 완전한 문장이므로 접속사 that이 맞아요. what과 which는 뒤 문장에 빈자리(불완전한 부분)가 있을 때만 쓸 수 있어요."
      },
      {
        "q": "다음 중 어법상 틀린 문장을 고르시오.",
        "choices": [
          "The course teaches students how to read critically, write clearly, and speak confidently.",
          "She likes hiking in the mountains and to swim in the sea on weekends.",
          "He turned off the lights, locked the door, and left the office quietly."
        ],
        "answer": 1,
        "explain": "두 번째 문장은 and 앞뒤 모양이 hiking과 to swim으로 서로 달라서 병렬 구조가 깨졌어요. hiking and swimming처럼 같은 형태로 맞춰야 해요. 나머지 문장은 동사 모양이 잘 맞춰져 있어요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\nThe climate of Korea is quite different from ( ) of Vietnam.",
        "choices": [
          "it",
          "those",
          "that"
        ],
        "answer": 2,
        "explain": "앞에 나온 단수 명사 the climate를 대신하므로 that이 맞아요. those는 복수 명사를 대신할 때 쓰고, it은 뒤에 of Vietnam 같은 꾸미는 말을 붙일 수 없어요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\nPlease remember ( ) the documents before you leave the office; they must arrive by Friday.",
        "choices": [
          "to send",
          "sending",
          "sent"
        ],
        "answer": 0,
        "explain": "'앞으로 보낼 것을 기억하라'는 뜻이므로 remember to send가 맞아요. remember sending은 '(과거에) 보낸 일을 기억하다'라는 뜻이라 문맥과 안 맞고, sent는 이 자리에 올 수 없는 형태예요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\n( ) what to say, she remained silent during the entire discussion.",
        "choices": [
          "Not known",
          "Not knowing",
          "Knowing not"
        ],
        "answer": 1,
        "explain": "분사구문의 부정은 분사 바로 앞에 Not을 붙여서 Not knowing으로 써요. 그녀가 스스로 '모르는' 것이므로 능동의 knowing이 맞고, Not known은 수동이라 틀려요. Knowing not은 Not의 위치가 잘못됐어요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\nI wish I ( ) harder when I had the chance to study abroad.",
        "choices": [
          "had studied",
          "studied",
          "have studied"
        ],
        "answer": 0,
        "explain": "이미 지나간 과거의 일을 후회하는 것이므로 'I wish + 과거완료(had studied)'를 써요. studied는 지금 사실과 반대되는 소망에 쓰고, have studied는 wish 뒤에 쓸 수 없는 형태예요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\nHardly ( ) the house when it suddenly began to rain heavily.",
        "choices": [
          "she had left",
          "had she left",
          "she left"
        ],
        "answer": 1,
        "explain": "Hardly 같은 부정어가 문장 맨 앞에 오면 주어와 동사를 뒤바꿔요(도치). 그래서 had she left가 맞아요. 'Hardly had+주어+과거분사, when+과거'는 '~하자마자 …했다'라는 정해진 표현이에요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\n( ) the fact that he was seriously injured, he completed the race.",
        "choices": [
          "Although",
          "Because",
          "Despite"
        ],
        "answer": 2,
        "explain": "괄호 뒤에 the fact라는 명사가 오므로 전치사 Despite가 맞아요. Although는 접속사라서 뒤에 '주어+동사'가 와야 해요. Because는 접속사인 데다 '~ 때문에'라는 뜻이라 문맥과도 안 맞아요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\nThe more you practice speaking English, ( ) you will become.",
        "choices": [
          "more confident",
          "the confident more",
          "the more confident"
        ],
        "answer": 2,
        "explain": "'~하면 할수록 더 …하다'는 'the 비교급, the 비교급' 구문이에요. 그래서 the more confident가 맞아요. more confident는 the가 빠져서 틀리고, the confident more는 단어 순서가 잘못됐어요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\nThe doctor advised the patient ( ) fatty food and get more exercise.",
        "choices": [
          "avoiding",
          "to avoid",
          "avoid"
        ],
        "answer": 1,
        "explain": "advise는 '목적어+to부정사'의 형태로 쓰는 동사예요. 그래서 목적격 보어 자리에 to avoid가 맞아요. avoiding이나 동사원형 avoid는 advise의 보어 자리에 올 수 없어요."
      },
      {
        "q": "다음 문장의 괄호 안에 어법상 알맞은 것을 고르시오.\nThe soup at the new restaurant tasted a little ( ) to me.",
        "choices": [
          "strange",
          "strangely",
          "strangeness"
        ],
        "answer": 0,
        "explain": "taste 같은 감각동사 뒤에는 부사가 아니라 형용사를 써요. 그래서 strange가 맞아요. strangely는 부사라서 틀리고, strangeness는 명사라서 이 자리에 올 수 없어요."
      }
    ]
  },
  {
    "id": "k89",
    "day": 89,
    "title": "종합 모의 테스트 5회",
    "questions": [
      {
        "q": "[수일치] 빈칸에 알맞은 것은? The number of tourists visiting the old palace ( ) sharply since the drama became popular.",
        "choices": [
          "have risen",
          "has risen",
          "rising"
        ],
        "answer": 1,
        "explain": "주어는 'The number of ~(~의 수)'로 항상 단수 취급하므로 has risen이 맞아요. have risen은 복수 주어에 쓰는 형태라서 틀리고, rising은 동사 역할을 할 수 없어서 문장이 완성되지 않아요."
      },
      {
        "q": "[능동/수동] 빈칸에 알맞은 것은? The results of the experiment ( ) to the committee next Monday.",
        "choices": [
          "will report",
          "have reported",
          "will be reported"
        ],
        "answer": 2,
        "explain": "실험 결과는 스스로 보고하는 것이 아니라 '보고되는' 대상이므로 수동태 will be reported가 맞아요. will report와 have reported는 능동태라서 결과가 직접 보고하는 이상한 뜻이 되고, next Monday(미래)와도 have reported는 시제가 맞지 않아요."
      },
      {
        "q": "[분사] (A), (B)에 알맞은 짝은? The children looked (A)[bored / boring] during the long lecture, and the teacher tried to make the class more (B)[excited / exciting].",
        "choices": [
          "(A) bored — (B) exciting",
          "(A) boring — (B) exciting",
          "(A) bored — (B) excited"
        ],
        "answer": 0,
        "explain": "아이들은 지루함을 '느끼는' 쪽이므로 bored, 수업은 신나는 감정을 '일으키는' 쪽이므로 exciting이 맞아요. 감정을 느끼면 -ed, 감정을 만들어내면 -ing를 쓴다고 기억하세요."
      },
      {
        "q": "[본동사 vs 준동사] 어법상 틀린 문장은?",
        "choices": [
          "Finding a parking space near the stadium is almost impossible on weekends.",
          "The man sitting next to me on the train suddenly stood up and getting off at the next station.",
          "To master a foreign language requires years of steady practice."
        ],
        "answer": 1,
        "explain": "두 번째 문장은 stood up과 and로 이어지므로 같은 과거동사 got off가 와야 하는데 준동사 getting off를 써서 틀렸어요. 첫 문장의 Finding과 셋째 문장의 To master는 주어 역할을 하는 준동사로 올바르게 쓰였어요."
      },
      {
        "q": "[관계사] 빈칸에 알맞은 것은? This is the small town ( ) my grandmother spent her childhood.",
        "choices": [
          "which",
          "who",
          "where"
        ],
        "answer": 2,
        "explain": "빈칸 뒤 문장(my grandmother spent her childhood)이 주어·목적어가 모두 갖춰진 완전한 문장이므로 장소를 나타내는 관계부사 where가 맞아요. which나 who는 뒤에 빠진 자리가 있는 불완전한 문장이 와야 해서 틀려요."
      },
      {
        "q": "[what/that] 빈칸에 알맞은 것은? ( ) surprised everyone was that the youngest player scored the winning goal.",
        "choices": [
          "What",
          "That",
          "Which"
        ],
        "answer": 0,
        "explain": "빈칸 뒤 surprised everyone에는 주어가 빠져 있으므로, 빠진 자리를 채우면서 명사절을 만드는 What(~한 것)이 맞아요. That은 완전한 문장 앞에만 쓸 수 있고, Which는 이렇게 문장 맨 앞의 명사절을 이끌 수 없어요."
      },
      {
        "q": "[병렬] 빈칸에 알맞은 것은? Regular exercise helps you sleep better, reduce stress, and ( ) your energy level.",
        "choices": [
          "boosting",
          "boost",
          "boosted"
        ],
        "answer": 1,
        "explain": "sleep, reduce와 and로 나란히 연결되므로 같은 동사원형 boost를 써야 해요. boosting이나 boosted를 쓰면 앞의 두 동사와 모양이 달라져 병렬 구조가 깨져요."
      },
      {
        "q": "[대명사 일치] 어법상 틀린 문장은?",
        "choices": [
          "Every employee must submit his or her report by Friday.",
          "The climate of Norway is much colder than that of Spain.",
          "Both of the twins raised its hand when the teacher asked the question."
        ],
        "answer": 2,
        "explain": "Both of the twins는 복수이므로 its가 아니라 their hands가 되어야 해요. 첫 문장의 Every는 단수 취급이라 his or her가 맞고, 둘째 문장의 that은 the climate를 대신하는 올바른 단수 대명사예요."
      },
      {
        "q": "[형용사/부사] (A), (B)에 알맞은 짝은? She spoke so (A)[quietly / quiet] that we could (B)[hard / hardly] hear her.",
        "choices": [
          "(A) quietly — (B) hardly",
          "(A) quiet — (B) hardly",
          "(A) quietly — (B) hard"
        ],
        "answer": 0,
        "explain": "동사 spoke를 꾸미므로 부사 quietly가 맞고, '거의 ~할 수 없다'는 뜻은 hardly예요. quiet는 형용사라 동사를 꾸밀 수 없고, hard는 '열심히'라는 뜻이라 문맥에 맞지 않아요."
      },
      {
        "q": "[to부정사 vs 동명사] 빈칸에 알맞은 것은? On his way home, he stopped ( ) some flowers for his mother.",
        "choices": [
          "buying",
          "to buy",
          "bought"
        ],
        "answer": 1,
        "explain": "'꽃을 사기 위해 멈췄다'는 뜻이므로 목적을 나타내는 to buy가 맞아요. stop buying은 '사는 것을 그만두다'라는 전혀 다른 뜻이 되고, bought는 동사가 두 개가 되어 틀려요."
      },
      {
        "q": "[분사구문] 빈칸에 알맞은 것은? ( ) from the top of the tower, the whole city looks like a toy village.",
        "choices": [
          "Seeing",
          "Having seen",
          "Seen"
        ],
        "answer": 2,
        "explain": "주어인 the whole city는 '보는' 것이 아니라 '보이는' 대상이므로 수동의 과거분사 Seen이 맞아요. Seeing이나 Having seen을 쓰면 도시가 직접 본다는 이상한 뜻이 돼요."
      },
      {
        "q": "[시제] 빈칸에 알맞은 것은? She ( ) in this neighborhood since she graduated from college ten years ago.",
        "choices": [
          "has lived",
          "lived",
          "lives"
        ],
        "answer": 0,
        "explain": "since(~이후로)가 있으면 과거부터 지금까지 계속된 일이므로 현재완료 has lived를 써요. 단순과거 lived나 현재 lives는 '10년 전부터 지금까지 계속'이라는 의미를 담지 못해요."
      },
      {
        "q": "[가정법] 빈칸에 알맞은 것은? If I ( ) about the traffic jam earlier, I would have taken the subway instead.",
        "choices": [
          "knew",
          "had known",
          "have known"
        ],
        "answer": 1,
        "explain": "뒤에 would have taken이 있으므로 과거 일을 반대로 가정하는 가정법 과거완료예요. if절에는 had known(had + 과거분사)을 써야 하고, knew는 현재 사실 반대(가정법 과거), have known은 가정법에 쓰지 않는 형태예요."
      },
      {
        "q": "[도치] 빈칸에 알맞은 것은? Never ( ) such a beautiful sunset before she visited the island.",
        "choices": [
          "had she seen",
          "she had seen",
          "she saw"
        ],
        "answer": 0,
        "explain": "Never 같은 부정어가 문장 맨 앞에 오면 조동사와 주어의 순서를 바꾸는 도치가 일어나요. 그래서 had she seen이 맞고, she had seen처럼 평소 어순 그대로 두면 틀려요."
      },
      {
        "q": "[접속사 vs 전치사] (A), (B)에 알맞은 짝은? (A)[Despite / Although] the heavy rain, the outdoor concert went on, and (B)[during / while] the performance the sky finally cleared.",
        "choices": [
          "(A) Although — (B) during",
          "(A) Despite — (B) while",
          "(A) Despite — (B) during"
        ],
        "answer": 2,
        "explain": "the heavy rain, the performance는 둘 다 명사 덩어리이므로 전치사 Despite와 during을 써야 해요. Although와 while은 접속사라서 뒤에 '주어 + 동사'가 있는 문장이 와야 해요."
      },
      {
        "q": "[대동사] 빈칸에 알맞은 것은? My sister enjoys horror movies much more than I ( ).",
        "choices": [
          "am",
          "do",
          "have"
        ],
        "answer": 1,
        "explain": "앞의 일반동사 enjoys를 대신하는 대동사가 필요하므로 do가 맞아요. am은 be동사를, have는 완료형을 대신할 때 쓰는 것이라 여기서는 틀려요."
      },
      {
        "q": "[비교] 어법상 틀린 문장은?",
        "choices": [
          "The harder you practice, the more confident you will become.",
          "This smartphone is twice as expensive as the previous model.",
          "No other mountain in Korea is more higher than Hallasan."
        ],
        "answer": 2,
        "explain": "higher 자체가 이미 비교급이므로 more를 또 붙인 more higher는 틀려요. 첫 문장은 'the 비교급, the 비교급' 구문, 둘째 문장은 '배수 + as ~ as' 구문으로 모두 올바르게 쓰였어요."
      },
      {
        "q": "[어순] 빈칸에 알맞은 것은? Could you tell me ( ) the nearest subway station?",
        "choices": [
          "how I can get to",
          "how can I get to",
          "can I how get to"
        ],
        "answer": 0,
        "explain": "의문문이 다른 문장 안에 들어가면(간접의문문) '의문사 + 주어 + 동사' 순서로 써야 해요. 그래서 how I can get to가 맞고, how can I처럼 의문문 어순 그대로 쓰면 틀려요."
      },
      {
        "q": "[전치사 + 관계대명사] 빈칸에 알맞은 것은? The professor gave us a list of topics, most of ( ) were related to climate change.",
        "choices": [
          "them",
          "which",
          "that"
        ],
        "answer": 1,
        "explain": "콤마 뒤에서 접속사 없이 두 문장을 이어 주려면 관계대명사 which가 필요해요. them은 대명사라 문장을 연결하는 힘이 없고, that은 전치사 of 바로 뒤에 올 수 없어요."
      },
      {
        "q": "[혼동 동사] 빈칸에 알맞은 것은? Exhausted after the hike, he ( ) down on the grass and fell asleep.",
        "choices": [
          "lay",
          "laid",
          "lied"
        ],
        "answer": 0,
        "explain": "'눕다'는 lie - lay - lain으로 변화하므로 과거형 lay가 맞아요. laid는 '~을 놓다(lay)'의 과거형이라 목적어가 필요하고, lied는 '거짓말하다'의 과거형이라 뜻이 달라요."
      }
    ]
  },
  {
    "id": "k90",
    "day": 90,
    "title": "종합 모의 테스트 최종회",
    "questions": [
      {
        "q": "[도치] 빈칸에 알맞은 것은? Only after the committee had reviewed all the documents ( ) to announce the final decision.",
        "choices": [
          "it agreed",
          "agreed it",
          "did it agree"
        ],
        "answer": 2,
        "explain": "'Only + 부사절'이 문장 맨 앞에 오면 주절은 반드시 도치되어 '조동사 + 주어 + 동사원형' 순서가 돼요. 그래서 did it agree가 맞고, it agreed는 도치를 안 해서, agreed it은 조동사 없이 순서만 바꿔서 틀려요."
      },
      {
        "q": "[재귀대명사] 빈칸에 알맞은 것은? The novelist based the main character on ( ), drawing on her own painful memories.",
        "choices": [
          "herself",
          "her",
          "hers"
        ],
        "answer": 0,
        "explain": "주어(The novelist)와 전치사 on의 대상이 같은 사람이므로 재귀대명사 herself를 써야 해요. her를 쓰면 작가가 아닌 다른 여자를 가리키게 되고, hers는 '그녀의 것'이라는 뜻이라 어색해요."
      },
      {
        "q": "[it/that/what] 빈칸에 알맞은 것은? ( ) was not until the museum closed that we realized we had lost our tickets.",
        "choices": [
          "What",
          "It",
          "That"
        ],
        "answer": 1,
        "explain": "'It was not until A that B(A하고 나서야 비로소 B했다)'라는 강조 구문이므로 It이 맞아요. What이나 That으로 시작하면 이 구문이 성립하지 않아서 문장이 이어지지 않아요."
      },
      {
        "q": "[수량 표현] (A), (B)에 알맞은 짝은? (A)[A number of / The number of] volunteers has doubled this year, and (B)[much / many] of them are teenagers.",
        "choices": [
          "(A) A number of — (B) many",
          "(A) The number of — (B) much",
          "(A) The number of — (B) many"
        ],
        "answer": 2,
        "explain": "뒤의 동사가 단수 has doubled이므로 단수 취급하는 The number of(~의 수)가 맞아요. A number of(많은)는 복수 취급이라 틀리고, them은 셀 수 있는 사람들이므로 much가 아닌 many를 써야 해요."
      },
      {
        "q": "[목적격 보어] 빈칸에 알맞은 것은? The security guard noticed a stranger ( ) around the parking lot late at night.",
        "choices": [
          "wandering",
          "wandered",
          "to wander"
        ],
        "answer": 0,
        "explain": "notice 같은 지각동사는 '목적어 + 동사원형/현재분사' 형태를 쓰는데, 낯선 사람이 스스로 돌아다니는 중이므로 wandering이 맞아요. wandered는 수동의 뜻이 되어 어색하고, 지각동사 뒤에는 to부정사를 쓰지 않아요."
      },
      {
        "q": "[동격 that] 빈칸에 알맞은 것은? The news ( ) the two companies would merge sent the stock price soaring.",
        "choices": [
          "what",
          "that",
          "which"
        ],
        "answer": 1,
        "explain": "빈칸 뒤가 완전한 문장이고, 그 내용이 곧 The news의 내용이므로 동격의 that이 맞아요. what과 which는 뒤에 빠진 자리가 있는 불완전한 문장이 와야 해서 틀려요."
      },
      {
        "q": "[가정법] 빈칸에 알맞은 것은? Had it not been for your warning, we ( ) into the flooded tunnel.",
        "choices": [
          "would have driven",
          "would drive",
          "had driven"
        ],
        "answer": 0,
        "explain": "Had it not been for는 If it had not been for(~이 없었더라면)에서 if가 생략되고 도치된 가정법 과거완료예요. 주절에는 would have driven을 써야 하고, would drive는 가정법 과거, had driven은 주절에 올 수 없는 형태예요."
      },
      {
        "q": "[능동/수동] 어법상 틀린 문장은?",
        "choices": [
          "The missing hiker is believed to have survived on wild berries for a week.",
          "Much of what we call common sense is based on untested assumptions.",
          "The old theater was disappeared from the map after the redevelopment project."
        ],
        "answer": 2,
        "explain": "disappear(사라지다)는 목적어가 없는 자동사라서 수동태로 쓸 수 없으므로 was disappeared는 disappeared로 고쳐야 해요. 첫 문장의 is believed to have survived와 둘째 문장의 is based on은 올바른 수동태예요."
      },
      {
        "q": "[관계사] 빈칸에 알맞은 것은? The scientist proposed a theory, ( ) validity has been debated for decades.",
        "choices": [
          "which",
          "whose",
          "that"
        ],
        "answer": 1,
        "explain": "빈칸 뒤의 명사 validity와 '그 이론의 타당성'이라는 소유 관계이므로 소유격 관계대명사 whose가 맞아요. which는 뒤에 명사가 바로 올 수 없고, that은 콤마 뒤 계속적 용법에 쓸 수 없어요."
      },
      {
        "q": "[병렬] (A), (B)에 알맞은 짝은? The report criticized the city not for spending too much money but for (A)[failing / to fail] to plan ahead, and it urged officials to act quickly and (B)[decisively / decisive].",
        "choices": [
          "(A) failing — (B) decisively",
          "(A) to fail — (B) decisively",
          "(A) failing — (B) decisive"
        ],
        "answer": 0,
        "explain": "'not for A but for B' 구조에서 앞의 spending과 짝을 맞춰야 하므로 동명사 failing이 맞아요. (B)는 부사 quickly와 and로 연결되어 동사 act를 꾸미므로 부사 decisively를 써야 해요."
      },
      {
        "q": "[what/that] 빈칸에 알맞은 것은? The most valuable lesson ( ) travel teaches us is how little we actually need.",
        "choices": [
          "what",
          "who",
          "that"
        ],
        "answer": 2,
        "explain": "앞에 선행사 The most valuable lesson이 있고 뒤 문장에는 teaches의 목적어가 빠져 있으므로 관계대명사 that이 맞아요. what은 선행사가 이미 있으면 쓸 수 없고, who는 사람 선행사에만 써요."
      },
      {
        "q": "[분사구문] 빈칸에 알맞은 것은? ( ) all of its funding, the research team had no choice but to abandon the project.",
        "choices": [
          "Losing",
          "Having lost",
          "Lost"
        ],
        "answer": 1,
        "explain": "자금을 잃은 것이 프로젝트를 포기한 것보다 먼저 일어난 일이므로 완료형 분사구문 Having lost가 가장 정확해요. Lost는 주어인 연구팀이 '잃어진' 대상이라는 수동의 뜻이 되어 틀리고, Losing은 두 일이 동시에 일어나는 것처럼 보여 시간 관계가 어긋나요."
      },
      {
        "q": "[대동사] 빈칸에 알맞은 것은? The critics praised the film far more warmly than the general audience ( ).",
        "choices": [
          "did",
          "was",
          "praised"
        ],
        "answer": 0,
        "explain": "앞의 일반동사 praised를 반복하지 않고 대신하는 대동사 did가 맞아요. was는 be동사를 대신할 때만 쓰고, praised를 그대로 다시 쓰는 것은 목적어까지 빠져 있어 어색한 반복이 돼요."
      },
      {
        "q": "[시제] 빈칸에 알맞은 것은? By the time the rescue team arrives at the site tomorrow, the survivors ( ) underground for three days.",
        "choices": [
          "are trapped",
          "have been trapped",
          "will have been trapped"
        ],
        "answer": 2,
        "explain": "'내일 그때까지 3일 동안 갇혀 있게 될 것'이라는 미래의 특정 시점까지 계속되는 일이므로 미래완료 will have been trapped가 맞아요. are trapped는 단순 현재, have been trapped는 현재까지의 일만 나타내서 tomorrow와 맞지 않아요."
      },
      {
        "q": "[접속사 vs 전치사] 빈칸에 알맞은 것은? ( ) the fact that the evidence was weak, the prosecutor decided to bring the case to trial.",
        "choices": [
          "Although",
          "Despite",
          "While"
        ],
        "answer": 1,
        "explain": "빈칸 뒤의 the fact는 명사이므로 전치사 Despite(~에도 불구하고)가 맞아요. Although와 While은 접속사라서 바로 뒤에 '주어 + 동사'가 와야 해요. 뒤의 that절은 the fact를 설명하는 동격절일 뿐이에요."
      },
      {
        "q": "[혼동 동사] (A), (B)에 알맞은 짝은? The rising temperature (A)[raised / rose] concerns among farmers, whose crops had (B)[lain / laid] under the snow all winter.",
        "choices": [
          "(A) rose — (B) laid",
          "(A) raised — (B) laid",
          "(A) raised — (B) lain"
        ],
        "answer": 2,
        "explain": "(A)는 뒤에 목적어 concerns가 있으므로 타동사 raise의 과거형 raised가 맞아요. (B)는 '눕다, 놓여 있다'라는 자동사 lie의 과거분사 lain이 맞고, laid는 목적어가 필요한 lay(놓다)의 형태라 틀려요."
      },
      {
        "q": "[수일치] 빈칸에 알맞은 것은? The quality of the ingredients, rather than the chef's fancy techniques, ( ) what makes this restaurant special.",
        "choices": [
          "is",
          "are",
          "being"
        ],
        "answer": 0,
        "explain": "진짜 주어는 The quality(단수)이고, 'rather than ~' 부분은 끼어든 말이라 수일치에 영향을 주지 않아요. 그래서 단수동사 is가 맞고, are는 복수형이라 틀리며 being은 본동사가 될 수 없어요."
      },
      {
        "q": "[비교] 빈칸에 알맞은 것은? The population of the capital is three times ( ) of the second-largest city.",
        "choices": [
          "larger than those",
          "as large as that",
          "as larger as that"
        ],
        "answer": 1,
        "explain": "배수 표현은 'three times as + 원급 + as' 형태를 쓰므로 as large as가 맞고, population(단수)을 받는 대명사는 that이에요. those는 복수 명사를 받을 때 쓰고, as larger as처럼 as ~ as 사이에 비교급을 넣으면 틀려요."
      },
      {
        "q": "[형용사/부사] 어법상 틀린 문장은?",
        "choices": [
          "Strange as it may sound, the desert can be freezing cold at night.",
          "The soup tasted so bitterly that nobody at the table finished it.",
          "The manager seemed reluctant to approve the plan."
        ],
        "answer": 1,
        "explain": "taste 같은 감각동사 뒤에는 부사가 아니라 형용사가 와야 하므로 bitterly는 bitter로 고쳐야 해요. 첫 문장은 '형용사 + as + 주어 + 동사(비록 ~일지라도)' 구문이고, 셋째 문장의 seemed 뒤 형용사 reluctant도 올바르게 쓰였어요."
      },
      {
        "q": "[목적격 보어] 빈칸에 알맞은 것은? The manager had the broken copier ( ) before the Monday meeting.",
        "choices": [
          "repair",
          "repairing",
          "repaired"
        ],
        "answer": 2,
        "explain": "복사기는 스스로 수리하는 것이 아니라 '수리되는' 대상이므로 사역동사 had 뒤에 과거분사 repaired를 써야 해요. repair(동사원형)나 repairing은 복사기가 직접 수리한다는 능동의 뜻이 되어 틀려요."
      }
    ]
  }
];
