import type { GrammarUnit } from "./types";

export const HIGH_UNITS: GrammarUnit[] = [
  {
    "id": "h01",
    "title": "현재완료 vs 과거시제 (완료시제 심화)",
    "key": "과거시제는 '끝난 그때'의 일, 현재완료는 '지금까지 이어지는 영향'을 말해요.",
    "hook": "과거시제는 닫힌 문, 현재완료는 지금까지 열려 있는 문이라고 기억하세요!",
    "summary": "과거시제와 현재완료는 둘 다 지나간 일을 말하지만, 시선이 완전히 달라요. 과거시제는 yesterday, in 2020, last week처럼 '언제'가 딱 정해진, 이미 끝난 과거의 한 시점을 가리켜요. 반면 현재완료(have p.p.)는 그 일이 지금의 나에게 어떤 영향을 주는지, 혹은 지금까지 계속되는지를 말해요. 예를 들어 I lost my key는 '그때 잃어버렸다'는 과거 사실이고, I have lost my key는 '잃어버려서 지금도 못 찾고 있다'는 현재 상태까지 담아요. 그래서 명확한 과거 시점 표현(yesterday, ago, last ~)과 현재완료는 함께 쓸 수 없어요. 대신 since, for, just, already, yet, ever 같은 표현이 현재완료와 잘 어울려요. '언제 했는지'가 중요하면 과거, '지금 어떤지'가 중요하면 현재완료라고 생각하면 돼요.",
    "rules": [
      "과거시제: 끝난 과거의 한 시점 — yesterday, last week, in 2020, ~ ago와 함께 써요.",
      "현재완료: 과거의 일이 현재까지 영향을 주거나 계속됨 — since, for, just, already, yet, ever와 함께 써요.",
      "명확한 과거 시점 부사(yesterday, ago 등)와 현재완료는 절대 함께 쓸 수 없어요.",
      "When ~? 처럼 '언제'를 묻는 의문문에는 과거시제만 써요.",
      "since + 시작 시점, for + 기간: 둘 다 현재완료의 단짝이에요.",
      "have been to는 '가 본 적 있다(경험)', have gone to는 '가 버려서 지금 없다(결과)'예요."
    ],
    "examples": [
      {
        "en": "I lost my wallet yesterday.",
        "ko": "저는 어제 지갑을 잃어버렸어요."
      },
      {
        "en": "I have lost my wallet, so I can't buy lunch.",
        "ko": "지갑을 잃어버려서 지금 점심을 살 수 없어요."
      },
      {
        "en": "She has lived in Busan since 2019.",
        "ko": "그녀는 2019년부터 지금까지 부산에 살고 있어요."
      },
      {
        "en": "She lived in Busan when she was a child.",
        "ko": "그녀는 어렸을 때 부산에 살았어요."
      },
      {
        "en": "Have you ever tried Indian food?",
        "ko": "인도 음식을 먹어 본 적 있으세요?"
      },
      {
        "en": "He has gone to Canada, so he isn't here now.",
        "ko": "그는 캐나다로 가 버려서 지금 여기에 없어요."
      },
      {
        "en": "We haven't finished the report yet.",
        "ko": "우리는 아직 보고서를 끝내지 못했어요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? I ___ my homework two hours ago.",
        "choices": [
          "have finished",
          "finished",
          "have been finishing"
        ],
        "answer": 1,
        "explain": "two hours ago는 끝난 과거 시점이라 과거시제 finished가 맞아요. ago는 현재완료(have finished)와 함께 쓸 수 없어요."
      },
      {
        "q": "빈칸에 알맞은 것은? She ___ in this company since 2021.",
        "choices": [
          "worked",
          "works",
          "has worked"
        ],
        "answer": 2,
        "explain": "since 2021은 '2021년부터 지금까지'라는 뜻이라 현재완료 has worked가 맞아요. worked는 이미 끝난 일처럼 들려서 since와 어울리지 않아요."
      },
      {
        "q": "다음 중 문법적으로 틀린 문장은?",
        "choices": [
          "I have visited Jeju last summer.",
          "I visited Jeju last summer.",
          "I have visited Jeju three times."
        ],
        "answer": 0,
        "explain": "last summer 같은 명확한 과거 시점은 현재완료와 함께 쓸 수 없어서 첫 번째 문장이 틀렸어요. 횟수(three times)는 현재완료와 잘 어울려요."
      },
      {
        "q": "'그는 파리에 가 버려서 지금 없다'는 뜻이 되는 문장은?",
        "choices": [
          "He has been to Paris.",
          "He went to Paris in 2020.",
          "He has gone to Paris."
        ],
        "answer": 2,
        "explain": "has gone to는 '가 버려서 지금 없다'는 결과를 나타내요. has been to는 '가 본 적 있다'는 경험이라 뜻이 달라요."
      },
      {
        "q": "빈칸에 알맞은 것은? When ___ you buy that phone?",
        "choices": [
          "have",
          "did",
          "has"
        ],
        "answer": 1,
        "explain": "When은 '언제'라는 특정 과거 시점을 묻기 때문에 과거시제 did를 써야 해요. 현재완료(have)는 '언제'를 묻는 질문에 쓸 수 없어요."
      },
      {
        "q": "두 문장의 차이로 옳은 설명은? (A) I read the book. (B) I have read the book.",
        "choices": [
          "(A)는 지금도 읽는 중이라는 뜻이다.",
          "(B)는 읽어 봤기 때문에 지금 내용을 안다는 느낌을 준다.",
          "(A)와 (B)는 뜻이 완전히 같다."
        ],
        "answer": 1,
        "explain": "(B) 현재완료는 '읽은 경험이 지금까지 영향을 준다', 즉 지금 내용을 안다는 뉘앙스예요. (A)는 그냥 과거에 읽었다는 사실만 말해요."
      },
      {
        "q": "빈칸에 알맞은 것은? We have known each other ___ ten years.",
        "choices": [
          "for",
          "since",
          "ago"
        ],
        "answer": 0,
        "explain": "ten years는 '10년 동안'이라는 기간이라 for를 써요. since 뒤에는 2015년처럼 시작한 '시점'이 와야 해요."
      }
    ],
    "link": "중학에서 배운 현재완료(have p.p.)의 네 가지 용법이 기억나나요? 이 단원은 그걸 과거시제와 확실히 구분하는 눈을 길러요."
  },
  {
    "id": "h02",
    "title": "현재완료진행과 과거완료진행",
    "key": "have/had been -ing는 '어느 시점까지 쭉 계속해 온 동작'을 생생하게 보여줘요.",
    "hook": "been -ing는 동작에 달린 긴 꼬리! 꼬리가 지금까지 오면 have, 과거 어느 순간까지면 had예요.",
    "summary": "현재완료진행(have been -ing)은 과거에 시작한 동작이 지금까지 쭉 계속되고 있음을 강조해요. I have been studying English for two hours라고 하면 '두 시간 전부터 지금 이 순간까지 계속 공부 중'이라는 뜻이에요. 방금 끝났지만 그 흔적이 남아 있을 때도 써요. 예를 들어 땀에 젖은 친구에게 You have been running!이라고 말할 수 있어요. 과거완료진행(had been -ing)은 기준점이 과거로 옮겨간 버전이에요. 과거의 어떤 순간까지 그 전부터 쭉 계속되던 동작을 나타내요. know, like, believe처럼 상태를 나타내는 동사는 진행형으로 잘 쓰지 않으니, 그때는 현재완료나 과거완료를 그대로 써요.",
    "rules": [
      "현재완료진행: have/has been -ing — 과거부터 지금까지 계속되는 동작, '기간'을 강조해요.",
      "과거완료진행: had been -ing — 과거의 기준 시점까지 그 전부터 계속되던 동작이에요.",
      "for(기간), since(시작점), How long ~? 과 아주 잘 어울려요.",
      "방금 끝난 동작의 흔적(젖은 머리, 빨간 눈 등)을 설명할 때도 완료진행을 써요.",
      "know, love, believe, want 같은 상태동사는 진행형 대신 have p.p. / had p.p.를 써요.",
      "완료형(have painted)은 '결과·완료', 완료진행(have been painting)은 '과정·계속'에 초점이에요."
    ],
    "examples": [
      {
        "en": "I have been studying English for two hours.",
        "ko": "저는 두 시간째 계속 영어를 공부하고 있어요."
      },
      {
        "en": "It has been raining since last night.",
        "ko": "어젯밤부터 지금까지 계속 비가 내리고 있어요."
      },
      {
        "en": "Your eyes are red. Have you been crying?",
        "ko": "눈이 빨갛네요. 계속 울고 있었던 거예요?"
      },
      {
        "en": "She had been waiting for an hour when the bus finally came.",
        "ko": "버스가 마침내 왔을 때, 그녀는 한 시간째 기다리고 있던 참이었어요."
      },
      {
        "en": "He was tired because he had been working all night.",
        "ko": "그는 밤새 계속 일했기 때문에 피곤했어요."
      },
      {
        "en": "How long have you been learning the guitar?",
        "ko": "기타를 배운 지 얼마나 되셨어요?"
      },
      {
        "en": "The ground was wet because it had been raining.",
        "ko": "비가 계속 내렸었기 때문에 땅이 젖어 있었어요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? She ___ for the exam since Monday.",
        "choices": [
          "has been preparing",
          "is preparing",
          "had been preparing"
        ],
        "answer": 0,
        "explain": "since Monday(월요일부터 지금까지)이므로 현재완료진행이 맞아요. had been preparing은 기준이 과거일 때 쓰는데, 여기는 지금까지 이어지는 상황이에요."
      },
      {
        "q": "빈칸에 알맞은 것은? When I arrived, they ___ for me for thirty minutes.",
        "choices": [
          "have been waiting",
          "are waiting",
          "had been waiting"
        ],
        "answer": 2,
        "explain": "'내가 도착했을 때(과거)'까지 30분간 계속 기다리고 있었으므로 과거완료진행이 맞아요. have been waiting은 기준이 '지금'일 때만 써요."
      },
      {
        "q": "친구의 손에 페인트가 잔뜩 묻어 있어요. 가장 자연스러운 말은?",
        "choices": [
          "You paint the wall.",
          "You have been painting the wall.",
          "You will paint the wall."
        ],
        "answer": 1,
        "explain": "방금까지 계속하던 동작의 흔적(손에 묻은 페인트)을 말할 때는 현재완료진행을 써요. 현재시제나 미래시제는 눈앞의 흔적을 설명하지 못해요."
      },
      {
        "q": "다음 중 문법적으로 틀린 문장은?",
        "choices": [
          "I have been reading this novel for a week.",
          "I have been knowing him for ten years.",
          "It has been snowing all day."
        ],
        "answer": 1,
        "explain": "know는 상태동사라 진행형으로 쓰지 않아요. I have known him for ten years가 맞는 표현이에요."
      },
      {
        "q": "He was out of breath because he ___. 빈칸에 가장 자연스러운 것은?",
        "choices": [
          "has run",
          "runs",
          "had been running"
        ],
        "answer": 2,
        "explain": "숨이 찼던 과거 시점 이전부터 계속 달리고 있었으므로 과거완료진행이 맞아요. has run은 기준이 현재라서 과거의 이유를 설명하는 이 문장과 안 맞아요."
      },
      {
        "q": "두 문장의 차이로 옳은 것은? (A) I have painted the fence. (B) I have been painting the fence.",
        "choices": [
          "(A)는 다 칠했다는 완료, (B)는 계속 칠하는 중이라는 과정에 초점이 있다.",
          "(A)와 (B)는 아무 차이가 없다.",
          "(B)는 미래에 칠할 거라는 뜻이다."
        ],
        "answer": 0,
        "explain": "완료형은 '끝났다'는 결과, 완료진행형은 '계속하고 있다'는 과정을 강조해요. (B)는 미래가 아니라 지금까지의 계속을 말해요."
      },
      {
        "q": "빈칸에 알맞은 것은? How long ___ you been living in Seoul?",
        "choices": [
          "do",
          "have",
          "had"
        ],
        "answer": 1,
        "explain": "'지금까지 얼마나 오래'를 묻는 질문이므로 현재완료진행의 have가 맞아요. had를 쓰면 과거의 어느 시점까지 이야기가 되어 질문 상황과 안 맞아요."
      }
    ],
    "link": "중학에서 배운 진행형(be -ing)과 현재완료(have p.p.)가 합쳐진 모양이에요. 두 재료를 이미 알고 있으니 조립만 하면 돼요."
  },
  {
    "id": "h03",
    "title": "미래완료와 시제의 활용",
    "key": "will have p.p.는 '미래의 어느 시점까지는 끝나 있을 일'을 미리 내다보는 시제예요.",
    "hook": "미래완료는 타임머신 예약 확인 문자예요. '그 시각까지는 완료되어 있을 예정입니다!'",
    "summary": "미래완료(will have p.p.)는 미래의 특정 시점을 기준으로, 그때까지는 어떤 일이 완료되어 있을 거라고 말하는 시제예요. 예를 들어 By next month, I will have finished this project는 '다음 달이 되면 프로젝트가 이미 끝나 있을 것'이라는 뜻이에요. by(~까지는), by the time(~할 무렵에는) 같은 표현과 단짝이에요. 여기서 중요한 함정이 하나 있어요. 시간이나 조건을 나타내는 부사절(when, before, if 등) 안에서는 미래의 일이라도 will을 쓰지 않고 현재시제를 써요. 그래서 By the time you arrive, I will have cooked dinner처럼 부사절은 현재시제, 주절은 미래완료가 돼요. '미래의 결승선을 먼저 정해 놓고, 그 전에 끝나 있을 일'을 말한다고 생각하면 쉬워요.",
    "rules": [
      "미래완료: will have p.p. — 미래의 기준 시점까지 완료될 일을 나타내요.",
      "by + 시점, by the time + 주어 + 동사와 자주 함께 써요.",
      "시간·조건의 부사절(when, before, after, if, by the time)에서는 미래여도 현재시제를 써요.",
      "완료의 기준점: 과거 기준 → had p.p., 현재 기준 → have p.p., 미래 기준 → will have p.p.",
      "'횟수 채우기'에도 써요: I will have watched it three times. (그때면 세 번째 보는 게 돼요.)",
      "미래완료진행(will have been -ing)은 미래 시점까지 계속되고 있을 동작의 기간을 강조해요."
    ],
    "examples": [
      {
        "en": "By next year, I will have graduated from university.",
        "ko": "내년이면 저는 대학을 졸업해 있을 거예요."
      },
      {
        "en": "The movie will have started by the time we get there.",
        "ko": "우리가 도착할 무렵이면 영화는 이미 시작해 있을 거예요."
      },
      {
        "en": "She will have finished the report by Friday.",
        "ko": "그녀는 금요일까지는 보고서를 끝내 놓을 거예요."
      },
      {
        "en": "If I read this book again, I will have read it three times.",
        "ko": "이 책을 또 읽으면 세 번 읽는 게 돼요."
      },
      {
        "en": "By ten o'clock, the kids will have gone to bed.",
        "ko": "10시쯤이면 아이들은 이미 잠자리에 들어 있을 거예요."
      },
      {
        "en": "Next month, we will have been dating for five years.",
        "ko": "다음 달이면 우리가 사귄 지 5년이 돼요."
      },
      {
        "en": "Call me when you finish work, not before.",
        "ko": "일이 끝나면 전화해 주세요. 그 전엔 말고요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? By 2030, robots ___ many of our jobs.",
        "choices": [
          "have taken",
          "took",
          "will have taken"
        ],
        "answer": 2,
        "explain": "By 2030은 미래의 기준 시점이므로 '그때까지 완료'를 뜻하는 미래완료 will have taken이 맞아요. have taken은 기준이 현재일 때 써요."
      },
      {
        "q": "빈칸에 알맞은 것은? By the time you ___, I will have cleaned the house.",
        "choices": [
          "will arrive",
          "arrive",
          "arrived"
        ],
        "answer": 1,
        "explain": "by the time이 이끄는 시간 부사절에서는 미래라도 현재시제를 써요. will arrive처럼 will을 넣으면 틀려요."
      },
      {
        "q": "'다음 주면 이 회사에서 일한 지 10년이 된다'를 바르게 표현한 것은?",
        "choices": [
          "Next week, I will have worked here for ten years.",
          "Next week, I worked here for ten years.",
          "Next week, I have worked here for ten years."
        ],
        "answer": 0,
        "explain": "미래 시점(next week)까지 채워질 기간을 말하므로 미래완료가 맞아요. 현재완료는 기준이 '지금'이라 next week와 함께 쓰면 어색해요."
      },
      {
        "q": "다음 중 미래완료를 쓰기에 가장 알맞은 상황은?",
        "choices": [
          "지금 막 끝낸 숙제 이야기를 할 때",
          "어제 끝낸 숙제 이야기를 할 때",
          "내일 밤까지는 끝나 있을 숙제 이야기를 할 때"
        ],
        "answer": 2,
        "explain": "미래완료는 미래의 기준 시점까지 완료될 일에 써요. 지금 막 끝낸 일은 현재완료, 어제 끝낸 일은 과거시제가 맞아요."
      },
      {
        "q": "빈칸에 알맞은 것은? The train ___ by the time we reach the station.",
        "choices": [
          "leaves",
          "will have left",
          "has left"
        ],
        "answer": 1,
        "explain": "우리가 도착하는 미래 시점 전에 기차가 떠나 있을 것이므로 미래완료가 맞아요. has left는 기준이 지금이라 미래 상황과 안 맞아요."
      },
      {
        "q": "기준 시점과 완료시제의 짝이 틀린 것은?",
        "choices": [
          "과거 기준 — had p.p.",
          "미래 기준 — will have p.p.",
          "현재 기준 — will p.p."
        ],
        "answer": 2,
        "explain": "현재 기준의 완료는 have p.p.예요. will p.p.라는 형태는 없고, will 뒤에는 동사원형이나 have p.p.가 와요."
      },
      {
        "q": "빈칸에 알맞은 것은? If it rains tomorrow, we ___ the picnic.",
        "choices": [
          "cancel yesterday",
          "will cancel",
          "will have been cancel"
        ],
        "answer": 1,
        "explain": "조건 부사절(If it rains)은 현재시제, 주절은 미래시제 will cancel이 맞아요. will have been cancel은 존재하지 않는 형태예요."
      }
    ],
    "link": "중학에서 배운 미래시제 will과 현재완료 have p.p.를 이어 붙이면 미래완료가 돼요. 새 시제가 아니라 아는 것의 조합이에요."
  },
  {
    "id": "h04",
    "title": "조동사 + have p.p. (추측과 후회)",
    "key": "조동사 + have p.p.는 '지나간 일'에 대한 추측과 후회를 담는 만능 공식이에요.",
    "hook": "have p.p.는 과거로 가는 문, 조동사는 그 문에 붙이는 감정 스티커! must는 확신, should는 후회예요.",
    "summary": "조동사 뒤에 have p.p.를 붙이면 과거의 일에 대한 생각을 표현할 수 있어요. must have p.p.는 '~했음이 틀림없어'라는 강한 추측이에요. 바닥이 젖어 있으면 It must have rained라고 하죠. may/might have p.p.는 '~했을지도 몰라'라는 약한 추측이고, can't have p.p.는 '~했을 리가 없어'라는 강한 부정 추측이에요. should have p.p.는 '~했어야 했는데 (안 했다)'라는 후회나 아쉬움을 나타내요. 반대로 shouldn't have p.p.는 '~하지 말았어야 했는데 (해 버렸다)'예요. needn't have p.p.는 '~할 필요가 없었는데 (괜히 했다)'라는 뜻이에요. 조동사가 확신의 세기와 감정을 정하고, have p.p.가 시점을 과거로 돌린다고 기억하면 돼요.",
    "rules": [
      "must have p.p.: ~했음이 틀림없다 (과거에 대한 강한 확신)",
      "may/might have p.p.: ~했을지도 모른다 (과거에 대한 약한 추측)",
      "can't/couldn't have p.p.: ~했을 리가 없다 (강한 부정 추측)",
      "should have p.p.: ~했어야 했는데 안 했다 (후회·비판)",
      "shouldn't have p.p.: ~하지 말았어야 했는데 해 버렸다",
      "needn't have p.p.: ~할 필요가 없었는데 괜히 했다"
    ],
    "examples": [
      {
        "en": "The ground is wet. It must have rained last night.",
        "ko": "땅이 젖어 있네요. 어젯밤에 비가 온 게 틀림없어요."
      },
      {
        "en": "She may have missed the train.",
        "ko": "그녀는 기차를 놓쳤을지도 몰라요."
      },
      {
        "en": "He can't have stolen the money. He was with me all day.",
        "ko": "그가 돈을 훔쳤을 리가 없어요. 하루 종일 저와 함께 있었거든요."
      },
      {
        "en": "I should have studied harder for the test.",
        "ko": "시험공부를 더 열심히 했어야 했는데요."
      },
      {
        "en": "You shouldn't have eaten that old sandwich.",
        "ko": "그 오래된 샌드위치는 먹지 말았어야 했어요."
      },
      {
        "en": "I needn't have brought an umbrella. It didn't rain at all.",
        "ko": "우산을 가져올 필요가 없었는데요. 비가 전혀 안 왔거든요."
      },
      {
        "en": "They might have forgotten about the meeting.",
        "ko": "그들은 회의에 대해 잊어버렸을지도 몰라요."
      }
    ],
    "quiz": [
      {
        "q": "친구가 시험에서 만점을 받았어요. 빈칸에 가장 자연스러운 것은? She ___ very hard.",
        "choices": [
          "can't have studied",
          "must have studied",
          "shouldn't have studied"
        ],
        "answer": 1,
        "explain": "만점이라는 확실한 근거가 있으니 '열심히 공부한 게 틀림없다'는 must have studied가 맞아요. can't have studied는 정반대인 '공부했을 리 없다'는 뜻이에요."
      },
      {
        "q": "'너에게 진작 말했어야 했는데 (안 했어)'를 바르게 표현한 것은?",
        "choices": [
          "I should have told you earlier.",
          "I must have told you earlier.",
          "I may have told you earlier."
        ],
        "answer": 0,
        "explain": "하지 않은 일에 대한 후회는 should have p.p.로 표현해요. must have는 후회가 아니라 '틀림없이 ~했다'는 추측이에요."
      },
      {
        "q": "빈칸에 알맞은 것은? He ___ the window. He wasn't even home yesterday.",
        "choices": [
          "must have broken",
          "should have broken",
          "can't have broken"
        ],
        "answer": 2,
        "explain": "어제 집에 없었다는 확실한 근거가 있으니 '깼을 리가 없다'는 can't have broken이 맞아요. must have broken은 '깬 게 틀림없다'라 정반대예요."
      },
      {
        "q": "다음 문장의 뜻으로 알맞은 것은? You needn't have bought a ticket.",
        "choices": [
          "표를 사면 안 됐다.",
          "표를 살 필요가 없었는데 괜히 샀다.",
          "표를 사지 못했다."
        ],
        "answer": 1,
        "explain": "needn't have p.p.는 '할 필요가 없었는데 이미 해 버렸다'는 뜻이에요. 금지(사면 안 됐다)와는 달라요."
      },
      {
        "q": "빈칸에 알맞은 것은? I'm not sure, but she ___ my message. She hasn't replied yet.",
        "choices": [
          "must have read",
          "can't have read",
          "might not have read"
        ],
        "answer": 2,
        "explain": "'확실하지 않다(I'm not sure)'고 했으므로 약한 추측인 might not have read(안 읽었을지도 몰라)가 맞아요. must have read는 확신할 때만 써요."
      },
      {
        "q": "shouldn't have p.p.의 뉘앙스로 옳은 것은?",
        "choices": [
          "그 일을 하지 말았어야 했는데 이미 해 버렸다.",
          "그 일을 앞으로 하면 안 된다.",
          "그 일을 했을 리가 없다."
        ],
        "answer": 0,
        "explain": "shouldn't have p.p.는 이미 저지른 과거의 일에 대한 후회예요. 앞으로의 금지는 shouldn't + 동사원형으로 표현해요."
      },
      {
        "q": "'그가 길을 잃었을지도 몰라요'를 바르게 옮긴 것은?",
        "choices": [
          "He should have gotten lost.",
          "He may have gotten lost.",
          "He must get lost."
        ],
        "answer": 1,
        "explain": "과거 일에 대한 약한 추측은 may have p.p.예요. should have gotten lost는 '길을 잃었어야 했다'는 이상한 뜻이 돼요."
      }
    ],
    "link": "중학에서 배운 조동사(must, should, may)의 기본 뜻에 have p.p.만 더하면 과거 추측과 후회가 돼요."
  },
  {
    "id": "h05",
    "title": "수동태 심화 (4·5형식 수동태, by 이외의 전치사, 조동사 수동태)",
    "key": "목적어가 두 개여도, 조동사가 있어도, 수동태의 심장은 언제나 be + p.p.예요.",
    "hook": "수동태는 카메라 방향 바꾸기예요. 주인공(주어)이 바뀌어도 be + p.p.라는 카메라는 그대로!",
    "summary": "수동태의 기본은 be + p.p.지만, 문장이 복잡해지면 응용이 필요해요. 4형식 문장(give A B)은 목적어가 두 개라 수동태도 두 가지로 만들 수 있어요. He gave me a book은 I was given a book 또는 A book was given to me가 돼요. 5형식 문장은 목적격보어를 그대로 뒤에 남겨요. They call him a genius가 He is called a genius가 되는 식이에요. 조동사가 있으면 '조동사 + be + p.p.' 순서로 써요. 예를 들어 The rule must be followed처럼요. 또 행위자가 아닌 감정이나 상태를 말할 때는 by 대신 다른 전치사를 써요. be interested in, be covered with, be known to처럼 짝으로 외워 두는 게 좋아요. buy, make처럼 to 대신 for를 쓰는 동사도 있으니 주의하세요.",
    "rules": [
      "4형식 수동태: 간접목적어(사람) 또는 직접목적어(사물)를 주어로 두 가지가 가능해요.",
      "직접목적어를 주어로 쓰면 사람 앞에 to나 for가 붙어요. (give → to, buy/make → for)",
      "5형식 수동태: 목적격보어(명사·형용사)는 be p.p. 뒤에 그대로 남겨요.",
      "조동사 수동태: 조동사 + be + p.p. (must be done, can be seen, will be built)",
      "by 이외의 전치사: be interested in, be surprised at, be covered with, be filled with, be known to, be satisfied with",
      "buy, make, cook 같은 동사는 사람을 주어로 한 수동태가 어색해서 보통 사물만 주어로 써요."
    ],
    "examples": [
      {
        "en": "I was given a second chance by my boss.",
        "ko": "저는 상사에게 두 번째 기회를 받았어요."
      },
      {
        "en": "A letter was sent to every customer.",
        "ko": "모든 고객에게 편지가 발송되었어요."
      },
      {
        "en": "He is called 'Captain' by his teammates.",
        "ko": "그는 팀 동료들에게 '캡틴'이라고 불려요."
      },
      {
        "en": "This form must be filled out before the interview.",
        "ko": "이 서류는 면접 전에 작성되어야 해요."
      },
      {
        "en": "She is interested in Korean history.",
        "ko": "그녀는 한국 역사에 관심이 있어요."
      },
      {
        "en": "The mountain was covered with snow.",
        "ko": "그 산은 눈으로 덮여 있었어요."
      },
      {
        "en": "This song is known to everyone in Korea.",
        "ko": "이 노래는 한국의 모든 사람에게 알려져 있어요."
      }
    ],
    "quiz": [
      {
        "q": "They gave her a prize.를 수동태로 바르게 바꾼 것은?",
        "choices": [
          "She was given a prize.",
          "She gave a prize.",
          "A prize was given her by they."
        ],
        "answer": 0,
        "explain": "간접목적어 her를 주어로 올리면 She was given a prize가 돼요. 세 번째 보기는 her 앞에 to가 빠졌고 by they도 by them이어야 해요."
      },
      {
        "q": "빈칸에 알맞은 것은? The homework ___ by tomorrow.",
        "choices": [
          "must finish",
          "must be finished",
          "must be finishing"
        ],
        "answer": 1,
        "explain": "숙제는 '끝내지는' 대상이므로 조동사 수동태 must be finished가 맞아요. must finish는 숙제가 스스로 뭔가를 끝낸다는 이상한 뜻이 돼요."
      },
      {
        "q": "빈칸에 알맞은 전치사는? The bottle is filled ___ water.",
        "choices": [
          "by",
          "at",
          "with"
        ],
        "answer": 2,
        "explain": "be filled with는 '~로 가득 차 있다'는 짝꿍 표현이에요. 수동태라고 무조건 by를 쓰는 게 아니에요."
      },
      {
        "q": "They elected him president.를 수동태로 바르게 바꾼 것은?",
        "choices": [
          "He was elected president.",
          "President was elected him.",
          "Him was elected president."
        ],
        "answer": 0,
        "explain": "5형식 수동태는 목적어 him이 주어 He가 되고, 보어 president는 그대로 뒤에 남아요. 주어 자리에는 목적격 Him이 아니라 주격 He를 써야 해요."
      },
      {
        "q": "빈칸에 알맞은 것은? A birthday cake was made ___ me by my mother.",
        "choices": [
          "to",
          "for",
          "with"
        ],
        "answer": 1,
        "explain": "make는 직접목적어를 주어로 한 수동태에서 사람 앞에 for를 쓰는 동사예요. give처럼 to를 쓰면 틀려요."
      },
      {
        "q": "다음 중 문법적으로 틀린 문장은?",
        "choices": [
          "The window can be opened easily.",
          "He was surprised at the news.",
          "The problem will be solve soon."
        ],
        "answer": 2,
        "explain": "조동사 수동태는 will be solved처럼 be 뒤에 과거분사가 와야 해요. solve는 원형이라 틀렸어요."
      },
      {
        "q": "빈칸에 알맞은 것은? The actor is known ___ people all over the world.",
        "choices": [
          "with",
          "to",
          "in"
        ],
        "answer": 1,
        "explain": "be known to는 '~에게 알려져 있다'는 뜻이에요. be known for(~로 유명하다)와 헷갈리지 않게 뜻으로 구분하세요."
      }
    ],
    "link": "중학에서 배운 기본 수동태(be + p.p.)에 목적어 두 개, 보어, 조동사라는 옵션을 하나씩 얹는 단원이에요."
  },
  {
    "id": "h06",
    "title": "that절 수동태 (It is said that ~)",
    "key": "'사람들이 ~라고 말한다'는 It is said that ~ 또는 '주어 + is said to ~' 두 가지로 바꿀 수 있어요.",
    "hook": "It is said that은 소문 전달 공식! '카더라'를 고급스럽게 말하는 두 가지 포장지가 있어요.",
    "summary": "They say that he is rich(사람들이 그가 부자라고 말해요)처럼 that절이 목적어인 문장은 특별한 수동태를 만들어요. 첫 번째 방법은 가주어 It을 쓰는 It is said that he is rich예요. 두 번째 방법은 that절의 주어를 문장 맨 앞으로 꺼내는 He is said to be rich예요. 이때 that절의 동사는 to부정사로 바뀌어요. say뿐 아니라 believe, think, know, report, expect 같은 동사도 똑같이 쓸 수 있어요. 여기서 시제가 중요한데, that절의 시제가 주절과 같으면 to + 동사원형, 주절보다 앞선 과거면 to have p.p.를 써요. 예를 들어 He is said to have been rich는 '그가 (예전에) 부자였다고들 해요'라는 뜻이에요. 뉴스나 신문 기사에서 아주 많이 쓰는 격식 있는 표현이에요.",
    "rules": [
      "They say that S + V → It is said that S + V (가주어 It 사용)",
      "They say that S + V → S is said to + 동사원형 (that절 주어를 앞으로)",
      "say, believe, think, know, report, expect 등이 이 패턴을 만들어요.",
      "that절의 시제가 주절과 같으면 to + 동사원형을 써요.",
      "that절의 시제가 주절보다 앞서면(더 과거면) to have p.p.를 써요.",
      "It is said to ~ 처럼 It 뒤에 바로 to부정사를 붙이면 틀려요. It 뒤에는 that절이 와야 해요."
    ],
    "examples": [
      {
        "en": "It is said that laughter is the best medicine.",
        "ko": "웃음이 최고의 약이라고들 해요."
      },
      {
        "en": "He is said to be the best chef in the city.",
        "ko": "그는 이 도시 최고의 요리사라고 알려져 있어요."
      },
      {
        "en": "It is believed that the castle is over 500 years old.",
        "ko": "그 성은 500년이 넘은 것으로 여겨져요."
      },
      {
        "en": "She is thought to be very generous.",
        "ko": "그녀는 매우 너그러운 사람으로 여겨져요."
      },
      {
        "en": "The singer is said to have lived in this town.",
        "ko": "그 가수는 예전에 이 마을에 살았다고 해요."
      },
      {
        "en": "It is reported that the company will hire 100 new workers.",
        "ko": "그 회사가 신입 직원 100명을 채용할 것이라고 보도되었어요."
      },
      {
        "en": "The bridge is known to be the oldest in the country.",
        "ko": "그 다리는 이 나라에서 가장 오래된 것으로 알려져 있어요."
      }
    ],
    "quiz": [
      {
        "q": "They say that she is a genius.를 바르게 바꾼 것은?",
        "choices": [
          "She is said that a genius.",
          "It is said that she is a genius.",
          "It says that she is a genius."
        ],
        "answer": 1,
        "explain": "가주어 It을 쓰면 It is said that ~ 형태가 돼요. 첫 번째 보기처럼 사람 주어 뒤에 that절을 바로 붙일 수는 없어요."
      },
      {
        "q": "It is believed that he lives alone.을 he로 시작해 바꾸면?",
        "choices": [
          "He is believed that lives alone.",
          "He believes to live alone.",
          "He is believed to live alone."
        ],
        "answer": 2,
        "explain": "that절의 주어를 앞으로 꺼내면 동사는 to부정사(to live)로 바뀌어요. He believes는 '그가 믿는다'는 능동이라 뜻이 달라져요."
      },
      {
        "q": "빈칸에 알맞은 것은? The actress is said ___ in Paris when she was young.",
        "choices": [
          "to live",
          "to have lived",
          "living"
        ],
        "answer": 1,
        "explain": "when she was young이라는 과거의 일이므로, 주절(is said)보다 앞선 시제를 나타내는 to have lived를 써요. to live는 지금도 산다는 뜻이 돼요."
      },
      {
        "q": "다음 중 문법적으로 틀린 문장은?",
        "choices": [
          "It is said to that he is honest.",
          "It is said that he is honest.",
          "He is said to be honest."
        ],
        "answer": 0,
        "explain": "It is said 뒤에는 that절이 바로 와야 해요. to와 that을 겹쳐 쓴 첫 번째 문장은 틀린 형태예요."
      },
      {
        "q": "'그 회사가 파산했다고 보도되었다'를 바르게 옮긴 것은?",
        "choices": [
          "The company reports to go bankrupt.",
          "It was reported that the company had gone bankrupt.",
          "It reported that the company goes bankrupt."
        ],
        "answer": 1,
        "explain": "보도된 것이므로 수동태 It was reported that ~이 맞아요. 나머지는 회사가 직접 보도한다는 능동의 뜻이 되어 어색해요."
      },
      {
        "q": "이 패턴(It is said that ~)을 만들 수 있는 동사가 아닌 것은?",
        "choices": [
          "believe",
          "think",
          "sleep"
        ],
        "answer": 2,
        "explain": "believe, think처럼 that절을 목적어로 갖는 동사만 이 패턴이 가능해요. sleep은 목적어를 갖지 않는 동사라 수동태 자체를 만들 수 없어요."
      },
      {
        "q": "He is expected to win the game.의 뜻으로 알맞은 것은?",
        "choices": [
          "그는 경기에서 이길 것으로 기대돼요.",
          "그는 경기에서 이기기를 기대해요.",
          "그는 경기에서 이겼다고 해요."
        ],
        "answer": 0,
        "explain": "is expected는 수동태라 '(사람들에 의해) 기대된다'는 뜻이에요. '그가 기대한다'는 He expects to win이라고 해야 해요."
      }
    ],
    "link": "중학에서 배운 수동태(be p.p.)와 가주어 It이 만나는 단원이에요. 두 개념을 합치면 뉴스에서 쓰는 격식 표현이 완성돼요."
  },
  {
    "id": "h07",
    "title": "가정법 과거",
    "key": "If + 과거형, would + 동사원형 — 과거형으로 '지금의 반대'를 상상하는 문법이에요.",
    "hook": "가정법 과거는 이름 사기꾼! 과거형 옷을 입었지만 사실은 '지금'의 아쉬운 상상을 말해요.",
    "summary": "가정법 과거는 현재 사실과 반대되는 일을 상상할 때 쓰는 표현이에요. 이름에 '과거'가 들어가지만 실제로는 '지금'에 대한 이야기라는 게 최대 함정이에요. 형태는 'If + 주어 + 동사의 과거형, 주어 + would/could/might + 동사원형'이에요. If I had wings, I would fly to you는 '(지금 날개가 없지만) 있다면 날아갈 텐데'라는 뜻이에요. be동사는 주어에 상관없이 were를 쓰는 게 원칙이라 If I were you(내가 너라면)처럼 말해요. 진짜 일어날 수 있는 일은 조건문(If it rains, I will stay home)으로, 현실과 반대인 상상은 가정법 과거로 표현한다는 차이를 꼭 기억하세요. I wish + 과거형도 같은 원리로 '지금 ~라면 좋을 텐데'라는 아쉬움을 나타내요.",
    "rules": [
      "형태: If + 주어 + 동사 과거형, 주어 + would/could/might + 동사원형",
      "뜻: 현재 사실의 반대를 상상해요. 과거형을 쓰지만 '지금' 이야기예요.",
      "be동사는 주어와 상관없이 were를 써요. (If I were you ~)",
      "실현 가능성이 있는 일은 조건문(If + 현재형, will ~)으로 구별해서 써요.",
      "I wish + 과거형: '지금 ~라면 좋을 텐데'라는 현재의 아쉬움이에요.",
      "주절에 will이나 현재형을 쓰면 안 돼요. 반드시 would/could/might + 동사원형이에요."
    ],
    "examples": [
      {
        "en": "If I had more time, I would learn to play the piano.",
        "ko": "시간이 더 있다면 피아노를 배울 텐데요."
      },
      {
        "en": "If I were you, I would apologize to her first.",
        "ko": "제가 당신이라면 그녀에게 먼저 사과하겠어요."
      },
      {
        "en": "If he lived closer, we could meet more often.",
        "ko": "그가 더 가까이 산다면 우리는 더 자주 만날 수 있을 텐데요."
      },
      {
        "en": "What would you do if you won the lottery?",
        "ko": "복권에 당첨된다면 무엇을 하시겠어요?"
      },
      {
        "en": "I wish I spoke English fluently.",
        "ko": "영어를 유창하게 말할 수 있으면 좋을 텐데요."
      },
      {
        "en": "If it weren't raining, we could go hiking.",
        "ko": "비가 오지 않는다면 하이킹을 갈 수 있을 텐데요."
      },
      {
        "en": "She would travel around the world if she had enough money.",
        "ko": "돈이 충분하다면 그녀는 세계 여행을 할 거예요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? If I ___ a car, I would drive you home.",
        "choices": [
          "have",
          "had",
          "will have"
        ],
        "answer": 1,
        "explain": "가정법 과거는 If절에 동사의 과거형을 써요. 지금 차가 없다는 현재 사실의 반대를 상상하는 것이라 have(현재형)는 틀려요."
      },
      {
        "q": "빈칸에 알맞은 것은? If I were you, I ___ that job offer.",
        "choices": [
          "will accept",
          "accept",
          "would accept"
        ],
        "answer": 2,
        "explain": "가정법 과거의 주절에는 would + 동사원형을 써요. will은 실제로 일어날 수 있는 조건문에서만 쓰는 말이에요."
      },
      {
        "q": "If she had a passport, she would travel abroad.가 알려 주는 현재의 사실은?",
        "choices": [
          "그녀는 지금 여권이 없다.",
          "그녀는 예전에 여권이 있었다.",
          "그녀는 지금 해외여행 중이다."
        ],
        "answer": 0,
        "explain": "가정법 과거는 현재 사실의 반대를 말하므로, 실제로는 '지금 여권이 없다'는 뜻이에요. 과거형이지만 과거 이야기가 아니라는 게 핵심이에요."
      },
      {
        "q": "다음 중 문법적으로 가장 어색한 문장은?",
        "choices": [
          "If I were taller, I would play basketball.",
          "If I am were rich, I would buy a house.",
          "If it snowed tomorrow, I would build a snowman."
        ],
        "answer": 1,
        "explain": "be동사는 하나만 써야 하는데 am과 were를 겹쳐 쓴 두 번째 문장이 틀렸어요. If I were rich가 맞는 형태예요."
      },
      {
        "q": "'키가 더 크면 좋을 텐데'를 바르게 옮긴 것은?",
        "choices": [
          "I wish I am taller.",
          "I wish I will be taller.",
          "I wish I were taller."
        ],
        "answer": 2,
        "explain": "I wish 뒤에는 가정법 과거(과거형/were)를 써서 현재의 아쉬움을 표현해요. am이나 will be 같은 현재·미래형은 쓸 수 없어요."
      },
      {
        "q": "두 문장의 차이로 옳은 것은? (A) If it rains, I will stay home. (B) If it rained, I would stay home.",
        "choices": [
          "(A)는 일어날 수 있는 일, (B)는 현재 사실과 반대인 상상이다.",
          "(A)와 (B)는 뜻이 완전히 같다.",
          "(B)는 어제 비가 왔다는 뜻이다."
        ],
        "answer": 0,
        "explain": "(A)는 실제로 비가 올 수 있는 조건문이고, (B)는 '(지금 비가 안 오지만) 온다면'이라는 가정법이에요. (B)의 과거형은 과거 사실이 아니라 상상의 표시예요."
      },
      {
        "q": "빈칸에 알맞은 것은? If he ___ harder, he could pass the exam.",
        "choices": [
          "studies",
          "studied",
          "will study"
        ],
        "answer": 1,
        "explain": "주절에 could가 있으니 가정법 과거예요. If절에는 과거형 studied를 써야 하고, 현재형이나 will은 쓸 수 없어요."
      }
    ],
    "link": "중학에서 배운 조건문(If + 현재형, will ~)이 기억나나요? 이 단원은 거기서 한 발 나아가 '현실과 반대인 상상'을 표현하는 법을 배워요."
  },
  {
    "id": "h08",
    "title": "가정법 과거완료",
    "key": "과거 사실의 반대는 If + had p.p., 주절은 would/could have p.p.로 말해요.",
    "hook": "이미 지나간 일에 '아 그때 그랬더라면!' 하고 이불킥할 때 쓰는 문법 — had p.p.는 과거로 보내는 타임머신 티켓이에요.",
    "summary": "가정법 과거완료는 이미 끝난 과거의 일을 반대로 상상할 때 쓰는 표현이에요. '그때 공부했더라면 합격했을 텐데'처럼 후회나 아쉬움을 말할 때 딱이에요. 형태는 If절에 had + 과거분사(p.p.)를 쓰고, 주절에는 would/could/might + have + p.p.를 써요. 가정법 과거가 '지금' 사실의 반대라면, 가정법 과거완료는 '그때' 사실의 반대라는 점이 달라요. 예를 들어 If I had known, I would have called you.는 '그때 알았더라면 전화했을 텐데'라는 뜻이고, 실제로는 몰라서 전화를 안 했다는 거예요. 시제가 하나씩 뒤로 밀린다고 생각하면 기억하기 쉬워요. 해석할 때는 항상 '실제로는 반대였다'는 숨은 뜻을 같이 읽어야 해요.",
    "rules": [
      "형태: If + 주어 + had p.p., 주어 + would/could/might + have p.p.",
      "의미: 과거 사실의 반대를 상상하며 후회·아쉬움을 표현해요.",
      "가정법 과거(과거형, would + 동사원형)는 현재의 반대, 가정법 과거완료는 과거의 반대예요.",
      "If를 생략하면 Had + 주어 + p.p. 순서로 도치돼요. (Had I known = If I had known)",
      "주절에 have p.p.를 빼먹고 would + 동사원형만 쓰면 가정법 과거가 되어 시점이 달라져요."
    ],
    "examples": [
      {
        "en": "If I had studied harder, I would have passed the exam.",
        "ko": "더 열심히 공부했더라면 시험에 합격했을 거예요."
      },
      {
        "en": "If you had told me earlier, I could have helped you.",
        "ko": "더 일찍 말해 줬더라면 제가 도와줄 수 있었을 거예요."
      },
      {
        "en": "If we had left home ten minutes earlier, we wouldn't have missed the train.",
        "ko": "집에서 10분만 일찍 나왔더라면 기차를 놓치지 않았을 거예요."
      },
      {
        "en": "If she had checked the weather, she would have brought an umbrella.",
        "ko": "날씨를 확인했더라면 그녀는 우산을 챙겼을 거예요."
      },
      {
        "en": "If I hadn't been so tired, I would have gone to the party.",
        "ko": "그렇게 피곤하지 않았더라면 파티에 갔을 거예요."
      },
      {
        "en": "Had he saved his file, he wouldn't have lost his homework.",
        "ko": "파일을 저장해 뒀더라면 그는 숙제를 날리지 않았을 거예요."
      },
      {
        "en": "If they had booked a table, they might have gotten a seat by the window.",
        "ko": "테이블을 예약했더라면 그들은 창가 자리를 잡았을지도 몰라요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? If I ___ your message, I would have replied right away.",
        "choices": [
          "saw",
          "had seen",
          "have seen"
        ],
        "answer": 1,
        "explain": "주절이 would have replied이므로 If절에는 had p.p.가 와야 해요. saw를 쓰면 가정법 과거가 되어 '과거에 답장했을 텐데'라는 시점과 맞지 않아요."
      },
      {
        "q": "빈칸에 알맞은 것은? If she had taken the subway, she ___ late for the meeting.",
        "choices": [
          "wouldn't have been",
          "wasn't",
          "won't be"
        ],
        "answer": 0,
        "explain": "If절이 had taken이므로 주절은 would have p.p.가 짝이에요. wasn't나 won't be는 단순 과거·미래라서 '과거 사실의 반대 상상'을 표현하지 못해요."
      },
      {
        "q": "다음 문장의 실제 의미로 알맞은 것은? If he had brought his wallet, he could have bought lunch.",
        "choices": [
          "그는 지갑을 가져와서 점심을 샀어요.",
          "그는 앞으로 지갑을 가져올 예정이에요.",
          "그는 지갑을 안 가져와서 점심을 못 샀어요."
        ],
        "answer": 2,
        "explain": "가정법 과거완료는 과거 사실의 반대예요. '가져왔더라면 살 수 있었을 텐데'이니 실제로는 안 가져와서 못 샀다는 뜻이에요. 첫 번째 보기는 실제 일어난 일과 정반대라서 틀려요."
      },
      {
        "q": "밑줄 친 부분 중 틀린 곳은? If we (A) had known about the sale, we (B) would buy (C) more clothes then.",
        "choices": [
          "(A) had known",
          "(B) would buy",
          "(C) more clothes"
        ],
        "answer": 1,
        "explain": "then(그때)이라는 과거 시점이 있으므로 주절은 would have bought가 되어야 해요. would buy만 쓰면 현재나 미래를 상상하는 가정법 과거가 되어 버려요."
      },
      {
        "q": "Had I charged my phone, I wouldn't have gotten lost. 와 같은 뜻의 문장은?",
        "choices": [
          "If I had charged my phone, I wouldn't have gotten lost.",
          "If I charged my phone, I won't get lost.",
          "Because I charged my phone, I didn't get lost."
        ],
        "answer": 0,
        "explain": "If를 생략하면 Had + 주어 + p.p.로 도치되니, 원래 문장은 If I had charged my phone이에요. 세 번째 보기는 실제로 충전했다는 뜻이라 반대 상황이에요."
      },
      {
        "q": "우리말에 맞는 영어는? '네가 나를 깨웠더라면 나는 늦잠을 자지 않았을 거야.'",
        "choices": [
          "If you wake me up, I don't oversleep.",
          "If you woke me up, I wouldn't oversleep.",
          "If you had woken me up, I wouldn't have overslept."
        ],
        "answer": 2,
        "explain": "이미 지나간 과거 일에 대한 후회이므로 If + had p.p., would have p.p.를 써요. 두 번째 보기는 가정법 과거라서 '지금 안 깨워 준다면'이라는 현재 이야기가 돼요."
      },
      {
        "q": "문법적으로 옳은 문장은?",
        "choices": [
          "If it hadn't rained, we would had a picnic.",
          "If it hadn't rained, we would have had a picnic.",
          "If it didn't rained, we would have had a picnic."
        ],
        "answer": 1,
        "explain": "주절은 would + have + p.p.이므로 would have had가 맞아요. would had는 would 뒤에 동사원형(have)이 아닌 과거형을 써서 틀렸고, didn't rained는 didn't 뒤에 원형 rain을 써야 해요."
      }
    ],
    "link": "중학교에서 배운 가정법 과거(If + 과거형, would + 동사원형)의 시제를 한 칸씩 과거로 민 것이 가정법 과거완료예요."
  },
  {
    "id": "h09",
    "title": "혼합 가정법",
    "key": "과거의 일이 지금까지 영향을 줄 때, If + had p.p.(과거) + would 동사원형(현재)을 섞어요.",
    "hook": "어제 밤새 게임한 결과가 오늘의 다크서클로! 과거의 원인 + 현재의 결과 = 시제 섞어 쓰는 혼합 가정법이에요.",
    "summary": "혼합 가정법은 If절과 주절의 시점이 서로 다를 때 쓰는 가정법이에요. 가장 흔한 형태는 '과거에 ~했더라면, 지금 ~할 텐데'예요. 그래서 If절은 가정법 과거완료(had p.p.)를 쓰고, 주절은 가정법 과거(would + 동사원형)를 써요. 예를 들어 If I had slept well, I wouldn't be tired now.는 '어젯밤에 잘 잤더라면 지금 피곤하지 않을 텐데'라는 뜻이에요. 주절에 now, today 같은 현재를 나타내는 말이 자주 붙는 게 힌트예요. 두 절의 시점을 따로따로 확인하는 습관이 핵심이에요. 시점만 잡으면 형태는 이미 배운 두 가정법의 조합일 뿐이에요.",
    "rules": [
      "기본 형태: If + 주어 + had p.p.(과거의 조건), 주어 + would/could + 동사원형(현재의 결과)",
      "의미: 과거에 ~했더라면 지금 ~할 텐데 (과거의 원인 → 현재의 결과)",
      "주절의 now, today, still 같은 현재 표시어가 혼합 가정법의 대표 힌트예요.",
      "If절과 주절의 시점을 각각 따로 판단해서 시제를 정해요.",
      "주절에 would have p.p.를 쓰면 결과까지 과거가 되어 순수 가정법 과거완료가 돼요."
    ],
    "examples": [
      {
        "en": "If I had slept earlier last night, I wouldn't be so sleepy now.",
        "ko": "어젯밤에 더 일찍 잤더라면 지금 이렇게 졸리지 않을 거예요."
      },
      {
        "en": "If she had taken the job in Seoul, she would live near us now.",
        "ko": "그녀가 서울에서 그 일자리를 잡았더라면 지금 우리 근처에 살고 있을 거예요."
      },
      {
        "en": "If we had saved money last year, we could travel abroad this summer.",
        "ko": "작년에 돈을 모아 뒀더라면 이번 여름에 해외여행을 갈 수 있을 거예요."
      },
      {
        "en": "If he hadn't broken his leg, he would be on the soccer team today.",
        "ko": "다리를 다치지 않았더라면 그는 오늘 축구팀에 있을 거예요."
      },
      {
        "en": "If I had learned to drive, I wouldn't need to take the bus every day.",
        "ko": "운전을 배워 뒀더라면 매일 버스를 탈 필요가 없을 거예요."
      },
      {
        "en": "If you had charged the battery, we could watch the movie now.",
        "ko": "배터리를 충전해 놨더라면 우리는 지금 영화를 볼 수 있을 거예요."
      },
      {
        "en": "If they had planted the trees ten years ago, this street would be much cooler now.",
        "ko": "10년 전에 나무를 심었더라면 이 거리는 지금 훨씬 시원할 거예요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? If I had eaten breakfast, I ___ hungry now.",
        "choices": [
          "wouldn't have been",
          "won't be",
          "wouldn't be"
        ],
        "answer": 2,
        "explain": "now가 있으니 결과는 현재예요. 그래서 주절은 would + 동사원형인 wouldn't be가 맞아요. wouldn't have been을 쓰면 '그때 배고프지 않았을 텐데'라는 과거 이야기가 돼요."
      },
      {
        "q": "빈칸에 알맞은 것은? If she ___ abroad in college, she would speak English more fluently now.",
        "choices": [
          "had studied",
          "studies",
          "would study"
        ],
        "answer": 0,
        "explain": "대학 시절(과거)의 조건이므로 If절은 had p.p.인 had studied가 맞아요. studies는 단순 현재라서 과거 사실의 반대를 나타내지 못해요."
      },
      {
        "q": "다음 문장의 실제 의미로 알맞은 것은? If he had moved to Busan, he wouldn't work at this office now.",
        "choices": [
          "그는 부산으로 이사해서 이 사무실에서 일하지 않아요.",
          "그는 부산으로 이사하지 않아서 지금 이 사무실에서 일해요.",
          "그는 곧 부산으로 이사해서 회사를 그만둘 예정이에요."
        ],
        "answer": 1,
        "explain": "가정법은 사실의 반대예요. '이사했더라면 지금 여기서 일하지 않을 텐데'이니 실제로는 이사를 안 했고 지금 여기서 일하고 있어요. 첫 번째 보기는 가정을 사실로 착각한 오답이에요."
      },
      {
        "q": "밑줄 친 부분 중 틀린 곳은? If I (A) hadn't lost my passport, I (B) would have been on the plane (C) right now.",
        "choices": [
          "(A) hadn't lost",
          "(B) would have been",
          "(C) right now"
        ],
        "answer": 1,
        "explain": "right now(바로 지금)가 있으므로 주절은 would be가 되어야 해요. would have been은 과거의 결과를 말할 때 쓰는 형태라서 '지금'과 어울리지 않아요."
      },
      {
        "q": "두 문장을 혼합 가정법 한 문장으로 바르게 합친 것은? I didn't bring my umbrella. + I am wet now.",
        "choices": [
          "If I brought my umbrella, I wouldn't have been wet.",
          "If I had brought my umbrella, I wouldn't be wet now.",
          "If I bring my umbrella, I won't be wet now."
        ],
        "answer": 1,
        "explain": "우산을 안 가져온 것은 과거이므로 had brought, 젖어 있는 것은 현재이므로 wouldn't be가 짝이에요. 첫 번째 보기는 시제를 반대로 섞어서 틀렸어요."
      },
      {
        "q": "혼합 가정법 문장으로 알맞은 것은?",
        "choices": [
          "If we had left earlier, we would be home by now.",
          "If we had left earlier, we would have been home yesterday.",
          "If we leave earlier, we will be home by now."
        ],
        "answer": 0,
        "explain": "had left(과거 조건) + would be ... by now(현재 결과)의 조합이 혼합 가정법이에요. 두 번째 보기는 조건도 결과도 과거라서 순수 가정법 과거완료예요."
      },
      {
        "q": "빈칸에 알맞은 것은? If Tom ___ to my advice back then, he ___ in trouble now.",
        "choices": [
          "had listened / wouldn't be",
          "listened / wouldn't have been",
          "listens / won't be"
        ],
        "answer": 0,
        "explain": "back then(그때)은 과거, now는 현재이니 had listened와 wouldn't be의 조합이 맞아요. 두 번째 보기는 앞뒤 시제를 서로 뒤바꿔 놓은 오답이에요."
      }
    ],
    "link": "중학교 가정법 과거(현재의 반대)와 고등 가정법 과거완료(과거의 반대)를 시점에 맞게 반씩 이어 붙인 문법이에요."
  },
  {
    "id": "h10",
    "title": "I wish, as if, without(but for) 가정법",
    "key": "if 없이도 가정법! I wish는 아쉬움, as if는 ~인 척, without/but for는 '~이 없다면'이에요.",
    "hook": "I wish는 '아 부럽다·아쉽다' 한숨, as if는 연기 대상 배우, without은 '너 없으면 난 안 돼' 고백 — 셋 다 if 없는 가정법 삼총사예요.",
    "summary": "가정법은 if 문장에서만 나오는 게 아니에요. I wish 뒤에 과거형을 쓰면 '지금 ~라면 좋을 텐데', had p.p.를 쓰면 '그때 ~했더라면 좋았을 텐데'라는 아쉬움을 표현해요. as if(as though)는 '마치 ~인 것처럼'이라는 뜻으로, 과거형을 쓰면 지금 사실의 반대, had p.p.를 쓰면 과거 사실의 반대를 흉내 내는 거예요. without이나 but for는 '~이 없다면/없었다면'이라는 뜻으로, if절 하나를 통째로 대신해요. 이때 진짜 시점은 주절의 동사 형태를 보고 판단해요. 주절이 would + 동사원형이면 현재 이야기, would have p.p.면 과거 이야기예요. 셋 다 결국 '사실의 반대'라는 가정법의 핵심은 똑같아요.",
    "rules": [
      "I wish + 과거형: 현재에 대한 아쉬움 / I wish + had p.p.: 과거에 대한 후회",
      "as if + 과거형: 마치 (지금) ~인 것처럼 / as if + had p.p.: 마치 (과거에) ~했던 것처럼",
      "Without(But for) + 명사, 주어 + would + 동사원형: ~이 없다면 (현재)",
      "Without(But for) + 명사, 주어 + would have p.p.: ~이 없었다면 (과거)",
      "Without은 If it were not for(현재) / If it had not been for(과거)로 바꿔 쓸 수 있어요.",
      "I wish 뒤 be동사는 격식체에서 주어와 상관없이 were를 써요. (I wish I were taller)"
    ],
    "examples": [
      {
        "en": "I wish I had more free time these days.",
        "ko": "요즘 자유 시간이 더 많으면 좋을 텐데요."
      },
      {
        "en": "I wish I had bought that concert ticket last week.",
        "ko": "지난주에 그 콘서트 티켓을 사 뒀더라면 좋았을 텐데요."
      },
      {
        "en": "He talks as if he knew everything about cars.",
        "ko": "그는 마치 자동차에 대해 다 아는 것처럼 말해요."
      },
      {
        "en": "She looked as if she had seen a ghost.",
        "ko": "그녀는 마치 귀신이라도 본 것 같은 표정이었어요."
      },
      {
        "en": "Without your help, I would give up this project.",
        "ko": "당신의 도움이 없다면 저는 이 프로젝트를 포기할 거예요."
      },
      {
        "en": "But for the seatbelt, he would have been badly hurt.",
        "ko": "안전벨트가 없었다면 그는 크게 다쳤을 거예요."
      },
      {
        "en": "I wish I were as brave as my sister.",
        "ko": "제가 언니만큼 용감하면 좋을 텐데요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? I wish I ___ how to swim. Then I could join you at the beach today.",
        "choices": [
          "knew",
          "know",
          "had known"
        ],
        "answer": 0,
        "explain": "'오늘' 함께하고 싶다는 현재의 아쉬움이므로 I wish + 과거형인 knew가 맞아요. had known을 쓰면 과거에 대한 후회가 되어 뒤 문장과 어울리지 않아요."
      },
      {
        "q": "다음 문장의 실제 의미로 알맞은 것은? He spends money as if he were a millionaire.",
        "choices": [
          "그는 백만장자여서 돈을 많이 써요.",
          "그는 백만장자가 되려고 저축하고 있어요.",
          "그는 백만장자가 아닌데 백만장자처럼 돈을 써요."
        ],
        "answer": 2,
        "explain": "as if + 과거형(were)은 현재 사실의 반대, 즉 '실제로는 아닌데 그런 척'이라는 뜻이에요. 첫 번째 보기는 가정을 사실로 착각한 오답이에요."
      },
      {
        "q": "빈칸에 알맞은 것은? I wish I ___ to bed earlier last night. I overslept this morning.",
        "choices": [
          "went",
          "had gone",
          "go"
        ],
        "answer": 1,
        "explain": "last night이라는 과거에 대한 후회이므로 I wish + had p.p.인 had gone이 맞아요. went를 쓰면 '지금 일찍 자면 좋을 텐데'라는 현재 소망이 돼요."
      },
      {
        "q": "Without water, no plant could survive. 와 같은 뜻의 문장은?",
        "choices": [
          "If it were not for water, no plant could survive.",
          "If there is water, no plant could survive.",
          "If it had not been for water, no plant could have survived."
        ],
        "answer": 0,
        "explain": "주절이 could survive(동사원형)이므로 현재 이야기이고, Without은 If it were not for로 바꿔요. 세 번째 보기는 과거 시제 버전이라 시점이 달라요."
      },
      {
        "q": "빈칸에 알맞은 것은? She talks about Paris as if she ___ there many times, but she has never left Korea.",
        "choices": [
          "goes",
          "will go",
          "had been"
        ],
        "answer": 2,
        "explain": "실제로는 간 적이 없는데 '가 봤던 것처럼' 말하는 것이므로, 과거 사실의 반대를 나타내는 as if + had p.p.가 맞아요. goes는 단순 사실 표현이라 '~인 척'의 느낌이 없어요."
      },
      {
        "q": "밑줄 친 부분 중 틀린 곳은? (A) But for your advice, I (B) would make (C) a big mistake at yesterday's interview.",
        "choices": [
          "(A) But for",
          "(B) would make",
          "(C) a big mistake"
        ],
        "answer": 1,
        "explain": "yesterday's interview는 과거 일이므로 would have made가 되어야 해요. would make는 현재·미래에 대한 가정이라 '어제'와 맞지 않아요."
      },
      {
        "q": "문법적으로 옳은 문장은?",
        "choices": [
          "I wish I can play the guitar.",
          "I wish you have told me the truth then.",
          "I wish it were the weekend already."
        ],
        "answer": 2,
        "explain": "I wish 뒤 현재의 아쉬움은 과거형(were)으로 표현하니 세 번째가 맞아요. can은 could로, 과거 후회인 두 번째는 have told가 아니라 had told로 써야 해요."
      }
    ],
    "link": "중학교에서 배운 가정법 과거의 '한 시제 물러나기' 원리를 if 없는 문장(I wish, as if, without)까지 넓힌 거예요."
  },
  {
    "id": "h11",
    "title": "to부정사 심화 (의미상 주어, seem to, 완료부정사)",
    "key": "to부정사의 행위자는 for(보통)/of(성격), 시점이 앞서면 to have p.p.를 써요.",
    "hook": "for는 누구나 받는 기본 택배, of는 '역시 당신답네요' 칭찬 카드! 그리고 to have p.p.는 부정사계의 '왕년에 말이야' 회상 모드예요.",
    "summary": "to부정사의 동작을 실제로 하는 사람을 '의미상 주어'라고 해요. 보통은 to부정사 앞에 for + 목적격을 붙여서 It is hard for me to get up early.처럼 써요. 그런데 kind, nice, foolish처럼 사람의 성격을 평가하는 형용사 뒤에서는 of + 목적격을 써요. 또 seem to는 '~인 것 같다'는 뜻인데, It seems that ... 문장으로 바꿔 쓸 수 있어요. 이때 본동사보다 앞선 일을 말하려면 to 뒤에 have p.p.를 쓰는데, 이것을 완료부정사라고 해요. He seems to have been sick.은 '그가 (전에) 아팠던 것 같다'는 뜻이에요. to부정사 하나로도 시점 차이를 표현할 수 있다는 게 포인트예요.",
    "rules": [
      "의미상 주어의 기본형: for + 목적격 + to부정사 (It is easy for him to cook.)",
      "kind, nice, smart, foolish, rude 등 성격 평가 형용사 뒤에서는 of + 목적격을 써요.",
      "단순부정사(to + 동사원형): 본동사와 같은 시점 또는 그 이후",
      "완료부정사(to have p.p.): 본동사보다 앞선 시점",
      "seem to V = It seems that 주어 + 현재 / seem to have p.p. = It seems that 주어 + 과거(현재완료)",
      "문장의 주어와 의미상 주어가 같으면 for/of 표시를 생략해요."
    ],
    "examples": [
      {
        "en": "It is difficult for me to wake up before seven.",
        "ko": "제가 7시 전에 일어나는 것은 어려워요."
      },
      {
        "en": "It was kind of you to carry my bags.",
        "ko": "제 가방을 들어 주시다니 친절하시네요."
      },
      {
        "en": "It was foolish of him to leave his keys in the car.",
        "ko": "차 안에 열쇠를 두고 내리다니 그는 어리석었어요."
      },
      {
        "en": "She seems to enjoy her new job.",
        "ko": "그녀는 새 직장을 즐기고 있는 것 같아요."
      },
      {
        "en": "He seems to have lost some weight since last month.",
        "ko": "그는 지난달 이후로 살이 좀 빠진 것 같아요."
      },
      {
        "en": "The bus seems to have already left the stop.",
        "ko": "버스는 이미 정류장을 떠난 것 같아요."
      },
      {
        "en": "It is important for students to take breaks while studying.",
        "ko": "학생들이 공부하는 동안 휴식을 취하는 것은 중요해요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? It was very generous ___ her to share her lunch with everyone.",
        "choices": [
          "for",
          "of",
          "to"
        ],
        "answer": 1,
        "explain": "generous(너그러운)는 사람의 성격을 칭찬하는 형용사라서 의미상 주어를 of + 목적격으로 써요. for는 easy, hard처럼 성격과 무관한 형용사와 짝이에요."
      },
      {
        "q": "빈칸에 알맞은 것은? This box is too heavy ___ to lift alone.",
        "choices": [
          "of a child",
          "a child",
          "for a child"
        ],
        "answer": 2,
        "explain": "heavy는 성격 평가 형용사가 아니므로 기본형인 for + 목적격을 써요. of는 kind, foolish 같은 성격 형용사에서만 쓰는 특별 케이스예요."
      },
      {
        "q": "He seems to have studied in Canada. 와 같은 뜻의 문장은?",
        "choices": [
          "It seems that he studied in Canada.",
          "It seems that he studies in Canada.",
          "It seemed that he will study in Canada."
        ],
        "answer": 0,
        "explain": "완료부정사 to have studied는 seems보다 앞선 과거의 일이므로 that절에 과거형 studied를 써요. studies를 쓰면 '지금 캐나다에서 공부하는 것 같다'가 되어 시점이 달라요."
      },
      {
        "q": "빈칸에 알맞은 것은? The ground is wet. It seems ___ last night.",
        "choices": [
          "to have rained",
          "to rain",
          "raining"
        ],
        "answer": 0,
        "explain": "비가 온 것은 last night, 즉 seems보다 앞선 일이므로 완료부정사 to have rained를 써요. to rain은 지금이나 앞으로 비가 오는 것 같다는 뜻이 돼요."
      },
      {
        "q": "밑줄 친 부분 중 틀린 곳은? It is necessary (A) of everyone (B) to wear a helmet (C) on this bike trail.",
        "choices": [
          "(A)만 틀렸어요",
          "(B)와 (C)가 틀렸어요",
          "(A)를 for everyone으로 고쳐야 해요"
        ],
        "answer": 2,
        "explain": "necessary는 성격 평가 형용사가 아니므로 의미상 주어는 for everyone이에요. (B)와 (C)는 아무 문제가 없어요."
      },
      {
        "q": "It seemed that she had forgotten our appointment. 를 to부정사로 바꾸면?",
        "choices": [
          "She seemed to forget our appointment.",
          "She seemed to have forgotten our appointment.",
          "She seems to forgetting our appointment."
        ],
        "answer": 1,
        "explain": "had forgotten은 seemed(과거)보다 더 앞선 일이므로 완료부정사 to have forgotten을 써요. to forget을 쓰면 잊은 시점이 seemed와 같아져서 원래 뜻과 달라져요."
      },
      {
        "q": "우리말에 맞는 영어는? '아이들이 채소를 먹는 것은 중요해요.'",
        "choices": [
          "It is important for children to eat vegetables.",
          "It is important of children to eat vegetables.",
          "Children are important to eat vegetables."
        ],
        "answer": 0,
        "explain": "important는 for + 목적격으로 의미상 주어를 나타내요. 세 번째 보기는 '아이들이 중요하다'는 이상한 뜻이 되어 버려요."
      }
    ],
    "link": "중학교에서 배운 'It ~ to부정사' 가주어 문장에 행위자(for/of)와 시점(to have p.p.) 정보를 얹은 확장판이에요."
  },
  {
    "id": "h12",
    "title": "동명사 심화 (의미상 주어, 완료동명사, 관용 표현)",
    "key": "동명사의 주인은 소유격/목적격으로, 앞선 일은 having p.p.로, 그리고 관용 표현은 통째로 외워요.",
    "hook": "mind my opening the window? 동명사 앞의 my는 명찰이에요 — '이 동작의 주인은 저예요!' 그리고 look forward to -ing는 세트 메뉴니 낱개로 뜯지 마세요.",
    "summary": "동명사(-ing)의 동작을 하는 사람이 문장 주어와 다르면, 동명사 앞에 소유격이나 목적격을 붙여서 표시해요. Do you mind my opening the window?에서 창문을 여는 사람은 you가 아니라 '나'예요. 격식체에서는 소유격(my), 일상 회화에서는 목적격(me)도 자주 써요. 본동사보다 앞선 일을 말할 때는 having + p.p., 즉 완료동명사를 써요. He denied having broken the vase.는 '(전에) 꽃병을 깬 것을 부인했다'는 뜻이에요. 마지막으로 look forward to -ing, be used to -ing, cannot help -ing 같은 관용 표현은 뜻과 형태를 세트로 외워야 해요. 특히 이런 표현 속 to는 전치사라서 뒤에 동사원형이 아니라 -ing가 온다는 점을 조심하세요.",
    "rules": [
      "동명사의 의미상 주어: 소유격(격식) 또는 목적격(구어) + -ing (my/me opening)",
      "완료동명사 having p.p.: 본동사보다 앞선 일을 나타내요.",
      "look forward to -ing: ~을 기대하다 (to는 전치사!)",
      "be used to -ing: ~에 익숙하다 / used to + 동사원형: ~하곤 했다 — 완전히 다른 표현이에요.",
      "cannot help -ing: ~하지 않을 수 없다 (= cannot but + 동사원형)",
      "be worth -ing(~할 가치가 있다), be busy -ing(~하느라 바쁘다), feel like -ing(~하고 싶다)도 자주 나와요."
    ],
    "examples": [
      {
        "en": "Do you mind my sitting next to you?",
        "ko": "제가 옆에 앉아도 괜찮을까요?"
      },
      {
        "en": "I'm sure of his passing the driving test.",
        "ko": "저는 그가 운전면허 시험에 합격할 거라고 확신해요."
      },
      {
        "en": "She denied having eaten the last piece of cake.",
        "ko": "그녀는 마지막 케이크 조각을 먹은 것을 부인했어요."
      },
      {
        "en": "He is proud of having finished the marathon last year.",
        "ko": "그는 작년에 마라톤을 완주한 것을 자랑스러워해요."
      },
      {
        "en": "I'm looking forward to meeting you next week.",
        "ko": "다음 주에 만나 뵙기를 기대하고 있어요."
      },
      {
        "en": "She is used to speaking in front of large crowds.",
        "ko": "그녀는 많은 사람들 앞에서 말하는 데 익숙해요."
      },
      {
        "en": "I couldn't help laughing at his funny dance.",
        "ko": "그의 웃긴 춤에 웃음을 참을 수가 없었어요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? I'm looking forward to ___ from you soon.",
        "choices": [
          "hear",
          "heard",
          "hearing"
        ],
        "answer": 2,
        "explain": "look forward to의 to는 전치사라서 뒤에 동명사 hearing이 와야 해요. to를 부정사로 착각해서 hear를 고르는 게 가장 흔한 실수예요."
      },
      {
        "q": "빈칸에 알맞은 것은? He admitted ___ the window while playing baseball last week.",
        "choices": [
          "to break",
          "having broken",
          "break"
        ],
        "answer": 1,
        "explain": "창문을 깬 것은 admitted보다 앞선 last week의 일이므로 완료동명사 having broken을 써요. admit은 동명사를 목적어로 쓰는 동사라 to break도 안 돼요."
      },
      {
        "q": "두 문장의 뜻 차이로 옳은 것은? (a) I used to get up at six. (b) I am used to getting up at six.",
        "choices": [
          "(a)는 과거 습관, (b)는 지금 익숙하다는 뜻이에요.",
          "(a)와 (b)는 완전히 같은 뜻이에요.",
          "(a)는 익숙하다, (b)는 과거 습관이라는 뜻이에요."
        ],
        "answer": 0,
        "explain": "used to + 동사원형은 '예전에 ~하곤 했다', be used to -ing는 '~에 익숙하다'예요. 형태가 비슷해서 뜻이 같다고 착각하기 쉽지만 전혀 다른 표현이에요."
      },
      {
        "q": "빈칸에 알맞은 것은? Would you mind ___ turning down the music? I'm trying to study.",
        "choices": [
          "your",
          "my",
          "yours"
        ],
        "answer": 0,
        "explain": "음악을 줄여야 하는 사람은 상대방이므로 의미상 주어 your를 써요. my를 쓰면 '제가 줄여도 될까요?'가 되어 상황과 맞지 않아요."
      },
      {
        "q": "밑줄 친 부분 중 틀린 곳은? This museum (A) is worth (B) to visit if you (C) are interested in history.",
        "choices": [
          "(B)를 visiting으로 고쳐야 해요",
          "(A)를 is worthy로 고쳐야 해요",
          "(C)를 interest로 고쳐야 해요"
        ],
        "answer": 0,
        "explain": "be worth 뒤에는 동명사가 와서 be worth visiting이 되어야 해요. (A)와 (C)는 그대로 두어도 맞는 표현이에요."
      },
      {
        "q": "I cannot help worrying about the results. 와 같은 뜻의 문장은?",
        "choices": [
          "I don't want to worry about the results.",
          "I cannot but worry about the results.",
          "I can stop worrying about the results."
        ],
        "answer": 1,
        "explain": "cannot help -ing = cannot but + 동사원형으로, '걱정하지 않을 수 없다'는 뜻이에요. 첫 번째 보기는 '걱정하기 싫다'라서 억지로라도 하게 된다는 원래 뉘앙스와 달라요."
      },
      {
        "q": "빈칸에 알맞은 것은? She is ashamed of ___ rude to the waiter yesterday.",
        "choices": [
          "being",
          "having been",
          "to be"
        ],
        "answer": 1,
        "explain": "무례하게 군 것은 yesterday, 즉 지금 부끄러워하는 것보다 앞선 일이므로 완료동명사 having been을 써요. being을 쓰면 지금도 무례하게 굴고 있다는 느낌이 돼요."
      }
    ],
    "link": "중학교에서 배운 동명사 목적어(enjoy -ing)에 '누가 했는지(소유격)'와 '언제 했는지(having p.p.)' 정보를 더한 심화예요."
  },
  {
    "id": "h13",
    "title": "분사구문 만들기",
    "key": "접속사와 주어를 지우고 동사를 -ing로 바꾸면 부사절이 홀쭉한 분사구문이 돼요.",
    "hook": "분사구문은 문장 다이어트예요 — 접속사 빼고, 겹치는 주어 빼고, 동사에 -ing 입히면 끝! 3단계 컷이에요.",
    "summary": "분사구문은 시간, 이유, 조건 같은 부사절을 짧게 줄인 표현이에요. 만드는 방법은 딱 세 단계예요. 첫째, 접속사(when, because, if 등)를 지워요. 둘째, 부사절의 주어가 주절의 주어와 같으면 지워요. 셋째, 동사를 -ing 형태로 바꿔요. 예를 들어 When she saw me, she smiled.는 Seeing me, she smiled.가 돼요. 부정할 때는 분사 바로 앞에 Not을 붙여요. 해석은 문맥에 따라 '~할 때, ~해서, ~하면서' 등으로 유연하게 하면 돼요. 뜻을 분명히 하고 싶으면 While walking처럼 접속사를 남겨 둘 수도 있어요.",
    "rules": [
      "1단계: 접속사를 지워요. 2단계: 주절과 같은 주어를 지워요. 3단계: 동사를 -ing로 바꿔요.",
      "부정형은 분사 바로 앞에 Not을 붙여요. (Not knowing the answer, ...)",
      "해석은 문맥에 따라 시간(~할 때), 이유(~해서), 동시동작(~하면서), 조건(~하면) 등으로 해요.",
      "의미를 분명히 하려면 접속사를 남길 수 있어요. (While eating dinner, ...)",
      "부사절과 주절의 주어가 다르면 주어를 지우면 안 돼요 — 지우면 주절 주어가 한 것처럼 읽혀요."
    ],
    "examples": [
      {
        "en": "Feeling tired, I went to bed early.",
        "ko": "피곤해서 저는 일찍 잠자리에 들었어요."
      },
      {
        "en": "Walking along the beach, we found a beautiful shell.",
        "ko": "해변을 따라 걷다가 우리는 예쁜 조개껍데기를 발견했어요."
      },
      {
        "en": "Not knowing her phone number, I couldn't call her.",
        "ko": "그녀의 전화번호를 몰라서 전화할 수 없었어요."
      },
      {
        "en": "Turning left at the bank, you will see the bookstore.",
        "ko": "은행에서 왼쪽으로 돌면 그 서점이 보일 거예요."
      },
      {
        "en": "Listening to music, she cleaned her room.",
        "ko": "음악을 들으면서 그녀는 방을 청소했어요."
      },
      {
        "en": "Living near the station, he never worries about being late.",
        "ko": "역 근처에 살아서 그는 지각 걱정을 전혀 하지 않아요."
      },
      {
        "en": "While waiting for the bus, I read the news on my phone.",
        "ko": "버스를 기다리는 동안 저는 휴대폰으로 뉴스를 읽었어요."
      }
    ],
    "quiz": [
      {
        "q": "Because I was hungry, I ordered two hamburgers. 를 분사구문으로 바르게 바꾼 것은?",
        "choices": [
          "Being hungry, I ordered two hamburgers.",
          "Been hungry, I ordered two hamburgers.",
          "I being hungry, ordered two hamburgers."
        ],
        "answer": 0,
        "explain": "접속사 Because와 주어 I를 지우고 was를 -ing인 Being으로 바꿔요. Been은 -ing 형태가 아니라서 분사구문을 시작할 수 없어요."
      },
      {
        "q": "빈칸에 알맞은 것은? ___ the news, she jumped for joy.",
        "choices": [
          "Heard",
          "Hearing",
          "To hearing"
        ],
        "answer": 1,
        "explain": "부사절 When she heard the news를 줄인 것이므로 동사를 -ing로 바꾼 Hearing이 맞아요. Heard는 과거형 그대로라서 분사구문이 될 수 없어요."
      },
      {
        "q": "Not having enough money, he couldn't buy the shoes. 의 원래 부사절로 알맞은 것은?",
        "choices": [
          "Though he had enough money",
          "If he has enough money",
          "Because he didn't have enough money"
        ],
        "answer": 2,
        "explain": "Not + -ing는 부정 분사구문이고, 문맥상 이유를 나타내니 Because he didn't have가 원래 모습이에요. Though(비록 ~지만)를 고르면 '돈이 있었는데도 못 샀다'는 이상한 뜻이 돼요."
      },
      {
        "q": "분사구문의 해석이 자연스러운 것은? Smiling brightly, the baby waved at me.",
        "choices": [
          "환하게 웃으면서 아기가 저에게 손을 흔들었어요.",
          "환하게 웃는다면 아기가 저에게 손을 흔들 거예요.",
          "환하게 웃었지만 아기는 저에게 손을 흔들지 않았어요."
        ],
        "answer": 0,
        "explain": "웃는 것과 손 흔드는 것이 동시에 일어나므로 '~하면서'라는 동시동작 해석이 자연스러워요. 조건(~한다면)이나 양보(~했지만)로 읽을 근거가 문장에 없어요."
      },
      {
        "q": "밑줄 친 부분 중 틀린 곳은? (A) Don't knowing what to say, I (B) just stayed (C) quiet.",
        "choices": [
          "(B) just stayed",
          "(A) Don't knowing",
          "(C) quiet"
        ],
        "answer": 1,
        "explain": "분사구문의 부정은 don't가 아니라 분사 앞에 Not을 붙여 Not knowing으로 써요. (B)와 (C)는 문제없는 표현이에요."
      },
      {
        "q": "If you exercise every day, you will feel healthier. 를 분사구문으로 바꾸면?",
        "choices": [
          "Exercised every day, you will feel healthier.",
          "You exercising every day, will feel healthier.",
          "Exercising every day, you will feel healthier."
        ],
        "answer": 2,
        "explain": "접속사 If와 겹치는 주어 you를 지우고 exercise를 Exercising으로 바꿔요. 첫 번째 보기의 Exercised는 과거분사라 '운동되어져서'라는 수동의 뜻이 되어 버려요."
      },
      {
        "q": "다음 중 분사구문을 만들 때 주어를 지우면 안 되는 문장은?",
        "choices": [
          "When he arrived home, he took a shower.",
          "Because I was sleepy, I drank some coffee.",
          "Because it was raining, we stayed inside."
        ],
        "answer": 2,
        "explain": "세 번째 문장은 부사절 주어(it)와 주절 주어(we)가 달라서 It raining, we stayed inside.처럼 주어를 남겨야 해요. 나머지 둘은 앞뒤 주어가 같아서 지워도 돼요."
      }
    ],
    "link": "중학교에서 배운 현재분사(-ing)와 부사절 접속사(when, because)를 합쳐 문장을 줄이는 기술이에요."
  },
  {
    "id": "h14",
    "title": "분사구문 심화 (완료·수동·with 분사구문)",
    "key": "앞선 일은 Having p.p., 수동은 (Being) p.p., 'with + 명사 + 분사'는 동시 상황 묘사예요.",
    "hook": "Having p.p.는 '먼저 다 해놓고' 배지, 과거분사로 시작하면 '당하는 중' 배지, with는 카메라 두 대로 동시에 찍는 브이로그 모드예요!",
    "summary": "분사구문에도 시제와 태가 있어요. 부사절의 일이 주절보다 먼저 일어났으면 Having + p.p.로 시작하는 완료분사구문을 써요. Having finished my homework, I watched TV.는 '숙제를 다 끝낸 뒤에 TV를 봤다'는 뜻이에요. 부사절이 수동태였다면 Being p.p.나 Having been p.p.가 되는데, 이때 Being과 Having been은 보통 생략해서 과거분사로 문장을 바로 시작해요. Seen from the sky, the island looks like a heart.처럼요. 마지막으로 'with + 명사 + 분사'는 '~한 채로, ~하면서'라는 뜻으로 동시 상황을 묘사해요. 명사가 스스로 하면 -ing, 당하는 입장이면 p.p.를 골라요. 셋 다 형태만 보면 어렵지만, 원래 부사절로 되돌려 보면 금방 이해돼요.",
    "rules": [
      "완료분사구문 Having p.p.: 주절보다 먼저 일어난 일을 나타내요.",
      "수동 분사구문: Being/Having been은 보통 생략하고 과거분사(p.p.)로 시작해요.",
      "with + 명사 + -ing: 명사가 스스로 그 동작을 할 때 (with her hair blowing)",
      "with + 명사 + p.p.: 명사가 그 동작을 당할 때 (with his arms crossed)",
      "분사 형태가 헷갈리면 부사절로 되돌려 시제와 태를 확인해요.",
      "완료 수동은 (Having been) + p.p.로, 결국 p.p. 하나만 남는 경우가 많아요."
    ],
    "examples": [
      {
        "en": "Having finished the report, she finally took a break.",
        "ko": "보고서를 다 끝낸 뒤에 그녀는 마침내 휴식을 취했어요."
      },
      {
        "en": "Having lived in Japan for five years, he speaks Japanese well.",
        "ko": "일본에서 5년 동안 살았기 때문에 그는 일본어를 잘해요."
      },
      {
        "en": "Written in easy English, this book is good for beginners.",
        "ko": "쉬운 영어로 쓰여 있어서 이 책은 초보자에게 좋아요."
      },
      {
        "en": "Seen from a distance, the rock looks like a sleeping cat.",
        "ko": "멀리서 보면 그 바위는 잠자는 고양이처럼 보여요."
      },
      {
        "en": "He was reading a book with his dog sleeping at his feet.",
        "ko": "그는 발치에서 개가 잠든 채로 책을 읽고 있었어요."
      },
      {
        "en": "She stood on the stage with her eyes closed.",
        "ko": "그녀는 눈을 감은 채 무대 위에 서 있었어요."
      },
      {
        "en": "Having been built fifty years ago, the bridge needs repairs.",
        "ko": "50년 전에 지어졌기 때문에 그 다리는 수리가 필요해요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? ___ all his money, he had to walk home.",
        "choices": [
          "Spending",
          "Having spent",
          "Spent"
        ],
        "answer": 1,
        "explain": "돈을 다 쓴 것이 걸어간 것보다 먼저 일어난 일이므로 완료분사구문 Having spent를 써요. Spending은 두 일이 동시에 일어나는 느낌이라 순서가 표현되지 않아요."
      },
      {
        "q": "빈칸에 알맞은 것은? ___ in 1990, this song is still popular today.",
        "choices": [
          "Released",
          "Releasing",
          "Having releasing"
        ],
        "answer": 0,
        "explain": "노래는 발표'되는' 것이므로 수동이고, Being이 생략된 과거분사 Released로 시작해요. Releasing이면 노래가 스스로 무언가를 발표한다는 이상한 뜻이 돼요."
      },
      {
        "q": "빈칸에 알맞은 것은? She was listening to the lecture with her arms ___.",
        "choices": [
          "folding",
          "fold",
          "folded"
        ],
        "answer": 2,
        "explain": "팔은 스스로 접는 게 아니라 '접힌' 상태이므로 with + 명사 + p.p.인 folded를 써요. folding을 쓰면 팔이 스스로 접는 동작을 한다는 뜻이 돼요."
      },
      {
        "q": "Because it had been washed many times, the shirt lost its color. 를 분사구문으로 바꾸면?",
        "choices": [
          "Washing many times, the shirt lost its color.",
          "Having been washed many times, the shirt lost its color.",
          "To wash many times, the shirt lost its color."
        ],
        "answer": 1,
        "explain": "먼저 일어난 일(had been washed)이면서 수동이므로 Having been washed가 맞아요. Washing은 셔츠가 스스로 빨래를 한다는 능동의 뜻이 되어 버려요."
      },
      {
        "q": "빈칸에 알맞은 것은? Don't talk with your mouth ___.",
        "choices": [
          "full",
          "fully",
          "filling"
        ],
        "answer": 0,
        "explain": "with + 명사 뒤에는 분사뿐 아니라 형용사도 올 수 있어서 '입이 가득 찬 채로'는 with your mouth full이에요. filling은 입이 스스로 무언가를 채운다는 뜻이라 어색해요."
      },
      {
        "q": "Having read the book before, I didn't buy it again. 의 의미로 알맞은 것은?",
        "choices": [
          "전에 그 책을 읽어 봤기 때문에 다시 사지 않았어요.",
          "그 책을 읽으면서 동시에 사지 않기로 했어요.",
          "그 책을 아직 안 읽어서 사지 않았어요."
        ],
        "answer": 0,
        "explain": "Having p.p.는 주절보다 먼저 일어난 일이므로 '전에 이미 읽었다'는 뜻이에요. 두 번째 보기는 동시동작으로 잘못 읽은 것이고, 세 번째는 부정의 뜻이 없는데 부정으로 읽은 오답이에요."
      },
      {
        "q": "밑줄 친 부분 중 틀린 곳은? He fell asleep (A) on the sofa (B) with the TV (C) turning on.",
        "choices": [
          "(A) on the sofa",
          "(B) with the TV",
          "(C) turning on"
        ],
        "answer": 2,
        "explain": "TV는 '켜져 있는' 상태이므로 수동 의미의 turned on을 써야 해요. turning on이면 TV가 스스로 무언가를 켜고 있다는 능동의 뜻이 되어 어색해요."
      }
    ],
    "link": "중학교에서 배운 현재분사(능동)와 과거분사(수동)의 구별을 분사구문의 시제와 with 구문까지 그대로 확장한 거예요."
  },
  {
    "id": "h15",
    "title": "관계대명사 심화 (전치사 + 관계대명사, 계속적 용법)",
    "key": "전치사는 관계대명사 앞으로 이사 갈 수 있고, 콤마가 붙으면 '그런데 그건 말이죠~' 하고 덧붙이는 설명이에요.",
    "hook": "콤마(,)는 수다쟁이 스위치! 콤마 뒤의 which는 '아 참, 그거 말인데요~' 하고 TMI를 푸는 친구예요.",
    "summary": "관계대명사절 안에 전치사가 있으면, 그 전치사를 관계대명사 바로 앞으로 옮길 수 있어요. 예를 들어 'the house which I live in'을 'the house in which I live'로 쓸 수 있죠. 단, 전치사 바로 뒤에서는 who 대신 whom을 쓰고, that은 절대 못 써요. 그리고 관계대명사 앞에 콤마(,)를 찍으면 '계속적 용법'이 되는데, 앞말을 콕 집어 한정하는 게 아니라 '그런데 그것은~' 하고 부가 설명을 덧붙이는 거예요. 계속적 용법에서도 that은 쓸 수 없고, which는 앞 문장 전체를 받을 수도 있어요. 'He was late, which made me angry.'처럼 '그가 늦었고, 그 사실이 나를 화나게 했다'는 뜻이 되죠. 콤마 하나로 뉘앙스가 확 달라지니 꼭 구분해 두세요.",
    "rules": [
      "전치사는 관계대명사 앞으로 이동 가능: the pen with which I write (= the pen which I write with)",
      "전치사 바로 뒤에는 whom / which만 가능, that과 who는 불가 (in that ×, with who ×)",
      "전치사가 관계대명사 앞에 오면 관계대명사 생략 불가",
      "계속적 용법(콤마+관계사)은 앞말에 대한 부가 설명, that은 사용 불가",
      "계속적 용법의 which는 앞 문장 전체 내용을 받을 수 있음",
      "계속적 용법은 '접속사 + 대명사'로 바꿔 해석 가능 (, who = and he/she)"
    ],
    "examples": [
      {
        "en": "This is the house in which my grandmother was born.",
        "ko": "이곳이 저희 할머니가 태어나신 집이에요."
      },
      {
        "en": "The man to whom I spoke was very kind.",
        "ko": "제가 이야기를 나눈 그 남자분은 아주 친절했어요."
      },
      {
        "en": "She gave me a box in which there were old letters.",
        "ko": "그녀는 저에게 오래된 편지들이 들어 있는 상자를 주었어요."
      },
      {
        "en": "My brother, who lives in Busan, is visiting us this weekend.",
        "ko": "제 형은 부산에 사는데, 이번 주말에 저희를 보러 와요."
      },
      {
        "en": "I lent him my umbrella, which he never returned.",
        "ko": "저는 그에게 우산을 빌려줬는데, 그는 그것을 끝내 돌려주지 않았어요."
      },
      {
        "en": "She passed the exam, which surprised everyone.",
        "ko": "그녀가 시험에 합격했는데, 그 일은 모두를 놀라게 했어요."
      },
      {
        "en": "The topic about which we talked was really interesting.",
        "ko": "우리가 이야기했던 그 주제는 정말 흥미로웠어요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? This is the city ___ which I grew up.",
        "choices": [
          "in",
          "at",
          "on"
        ],
        "answer": 0,
        "explain": "grow up in a city(도시에서 자라다)의 in이 관계대명사 앞으로 온 형태예요. at이나 on은 '도시 안에서 산다'는 의미와 어울리지 않아요."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "The friend on whom I rely is Mina.",
          "The friend with that I traveled is Mina.",
          "The friend who helped me is Mina."
        ],
        "answer": 1,
        "explain": "전치사 바로 뒤에는 that을 쓸 수 없어서 with that은 틀렸어요. with whom으로 고쳐야 해요."
      },
      {
        "q": "빈칸에 알맞은 것은? He failed the test, ___ made his mom worried.",
        "choices": [
          "that",
          "who",
          "which"
        ],
        "answer": 2,
        "explain": "콤마 뒤 계속적 용법에서 앞 문장 전체(시험에 떨어진 일)를 받는 것은 which예요. that은 콤마 뒤에 올 수 없고, who는 사람만 받아요."
      },
      {
        "q": "'I met Tom, who told me the news.'의 자연스러운 해석은?",
        "choices": [
          "나는 그 소식을 전해 준 톰만 골라 만났어요.",
          "나는 톰을 만났는데, 그가 그 소식을 전해 줬어요.",
          "나는 톰이 만든 뉴스를 봤어요."
        ],
        "answer": 1,
        "explain": "콤마가 있는 계속적 용법은 '그런데 그가 ~했다'라고 이어서 설명하는 거예요. 여러 톰 중 하나를 골라 한정하는 뜻이 아니에요."
      },
      {
        "q": "두 문장을 한 문장으로 바르게 합친 것은? (This is the chair. + I sit on it every day.)",
        "choices": [
          "This is the chair on which I sit every day.",
          "This is the chair which I sit every day.",
          "This is the chair on that I sit every day."
        ],
        "answer": 0,
        "explain": "sit on의 on을 관계대명사 which 앞으로 옮긴 형태가 맞아요. 두 번째 보기는 on이 사라져서 틀렸고, on that은 전치사 뒤에 that을 써서 틀렸어요."
      },
      {
        "q": "빈칸에 알맞은 것은? My aunt, ___ is a nurse, works at night.",
        "choices": [
          "that",
          "who",
          "which"
        ],
        "answer": 1,
        "explain": "콤마 뒤에서 사람(aunt)을 받는 관계대명사는 who예요. that은 계속적 용법에 못 쓰고, which는 사물을 받아요."
      },
      {
        "q": "다음 중 관계대명사를 생략할 수 없는 문장은?",
        "choices": [
          "The movie which I watched was fun.",
          "The bag which she bought was cheap.",
          "The team for which he plays is famous."
        ],
        "answer": 2,
        "explain": "전치사(for)가 관계대명사 바로 앞에 오면 생략할 수 없어요. 나머지 둘은 목적격 관계대명사라 생략해도 돼요."
      }
    ],
    "link": "중학교 때 배운 who/which/that의 주격·목적격 구분이 그대로 바탕이 되고, 여기에 전치사 이동과 콤마만 더해진 거예요."
  },
  {
    "id": "h16",
    "title": "관계대명사 what",
    "key": "what은 '선행사를 이미 품은' 관계대명사로, the thing(s) which(~하는 것)와 같아요.",
    "hook": "what은 도시락 싸 온 관계대명사! 선행사(the thing)를 이미 안에 싸 들고 다녀서 앞에 명사가 필요 없어요.",
    "summary": "보통 관계대명사는 the book which처럼 앞에 꾸며 줄 명사(선행사)가 필요해요. 그런데 what은 특별하게도 선행사를 자기 안에 이미 품고 있어서, 앞에 명사 없이 바로 쓰여요. 뜻은 '~하는 것'이고, the thing(s) which로 바꿔 쓸 수 있죠. what이 이끄는 덩어리는 명사절이라서 문장에서 주어, 목적어, 보어 자리에 들어가요. 'What I want is rest.'처럼 주어가 되기도 하고, 'I believe what he said.'처럼 목적어가 되기도 해요. 반대로 앞에 선행사가 이미 있으면 what을 쓰면 안 되고 which나 that을 써야 해요. '앞에 명사가 있으면 that/which, 없으면 what'이라고 기억하면 헷갈리지 않아요.",
    "rules": [
      "what = the thing(s) which/that, 뜻은 '~하는 것'",
      "what 앞에는 선행사(명사)를 쓰지 않음 (the thing what ×)",
      "what절은 명사절로 주어·목적어·보어 역할을 함",
      "what절이 주어면 단수 취급 (What matters is ~)",
      "선행사가 이미 있으면 what 불가, that/which 사용",
      "의문사 what(무엇)과 구분: '~하는 것'으로 해석되면 관계대명사"
    ],
    "examples": [
      {
        "en": "What I need right now is a cup of coffee.",
        "ko": "제가 지금 필요한 것은 커피 한 잔이에요."
      },
      {
        "en": "I can't believe what she told me yesterday.",
        "ko": "저는 어제 그녀가 저에게 말한 것을 믿을 수가 없어요."
      },
      {
        "en": "This is exactly what I was looking for.",
        "ko": "이것이 바로 제가 찾고 있던 거예요."
      },
      {
        "en": "What he did for the poor moved many people.",
        "ko": "그가 가난한 사람들을 위해 한 일은 많은 사람들을 감동시켰어요."
      },
      {
        "en": "Show me what you bought at the mall.",
        "ko": "쇼핑몰에서 산 것을 저에게 보여 주세요."
      },
      {
        "en": "What matters most is your health, not your grades.",
        "ko": "가장 중요한 것은 성적이 아니라 당신의 건강이에요."
      },
      {
        "en": "Don't judge people by what they wear.",
        "ko": "사람을 입은 것(옷차림)으로 판단하지 마세요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? ___ she said made everyone laugh.",
        "choices": [
          "That",
          "What",
          "Which"
        ],
        "answer": 1,
        "explain": "앞에 선행사가 없고 '그녀가 말한 것'이라는 뜻의 명사절 주어가 필요하니 What이에요. That절도 주어가 될 수 있지만 뒤에 said의 목적어가 비어 있어서 안 맞아요."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "I like what you made.",
          "I like the cake what you made.",
          "I like the cake that you made."
        ],
        "answer": 1,
        "explain": "선행사 the cake가 이미 있으면 what을 쓸 수 없어요. what은 선행사를 이미 포함하고 있기 때문이에요."
      },
      {
        "q": "'What I want is your honest opinion.'에서 What절의 역할은?",
        "choices": [
          "목적어",
          "보어",
          "주어"
        ],
        "answer": 2,
        "explain": "What I want(내가 원하는 것)가 is 앞에서 문장의 주어 역할을 하고 있어요. is 뒤의 your honest opinion이 보어예요."
      },
      {
        "q": "빈칸에 알맞은 것은? Thank you for ___ you have done for me.",
        "choices": [
          "what",
          "that",
          "which"
        ],
        "answer": 0,
        "explain": "전치사 for 뒤에 '당신이 해 준 것'이라는 명사절이 필요하므로 선행사를 포함한 what을 써요. that절과 which는 전치사 바로 뒤 이 자리에 올 수 없어요."
      },
      {
        "q": "what을 두 단어 이상으로 바꿔 쓴 것으로 알맞은 것은? I ate what she cooked.",
        "choices": [
          "the food which",
          "the food who",
          "food what"
        ],
        "answer": 0,
        "explain": "what은 '선행사 + 관계대명사', 즉 the food which(그녀가 요리한 음식)로 풀 수 있어요. who는 사람에게만 쓰고, 선행사 뒤에 what은 못 써요."
      },
      {
        "q": "다음 중 what의 쓰임이 나머지와 다른 하나는?",
        "choices": [
          "What you need is sleep.",
          "I know what he wants.",
          "What time does the movie start?"
        ],
        "answer": 2,
        "explain": "세 번째는 '몇 시'라고 묻는 의문사 what이에요. 나머지 둘은 '~하는 것'으로 해석되는 관계대명사 what이에요."
      },
      {
        "q": "빈칸에 알맞은 동사 형태는? What he needs ___ new shoes.",
        "choices": [
          "are",
          "is",
          "be"
        ],
        "answer": 1,
        "explain": "What절이 주어일 때는 하나의 덩어리로 보고 단수 취급해서 is를 써요. 뒤에 복수 명사(shoes)가 와도 주어는 What절이에요."
      }
    ],
    "link": "중학교에서 배운 목적격 관계대명사 that/which에서 선행사만 안으로 흡수한 형태가 바로 what이에요."
  },
  {
    "id": "h17",
    "title": "관계부사 (when, where, why, how)",
    "key": "관계부사는 '전치사 + which'를 한 단어로 압축한 것으로, 시간·장소·이유·방법인 선행사를 설명해요.",
    "hook": "관계부사 4인방은 택배 압축팩! in which, at which처럼 부피 큰 걸 when, where 한 단어로 쏙 압축해 줘요.",
    "summary": "관계대명사 뒤에는 주어나 목적어가 빠진 불완전한 문장이 오지만, 관계부사 뒤에는 빠진 것 없는 완전한 문장이 와요. 관계부사는 '전치사 + which'가 한 단어로 줄어든 것이기 때문이에요. 선행사가 시간(the day)이면 when, 장소(the place)면 where, 이유(the reason)면 why, 방법이면 how를 써요. 예를 들어 'the day on which we met'은 'the day when we met'으로 쓸 수 있죠. 특히 how는 독특해서 the way how처럼 선행사와 같이 쓰면 안 되고, the way나 how 중 하나만 골라 써야 해요. the time, the place, the reason 같은 뻔한 선행사는 생략되는 경우도 많아요. '뒤 문장이 완전하면 관계부사, 불완전하면 관계대명사'가 최고의 판별법이에요.",
    "rules": [
      "when: 시간 선행사 (the day, the year 등) 뒤에 사용",
      "where: 장소 선행사 (the place, the city 등) 뒤에 사용",
      "why: 이유 선행사 the reason 뒤에 사용",
      "how: the way와 함께 쓰지 않음 → the way 또는 how 하나만 (the way how ×)",
      "관계부사 = 전치사 + which (when = on/in which, where = in/at which)",
      "관계부사 뒤에는 완전한 문장, 관계대명사 뒤에는 불완전한 문장"
    ],
    "examples": [
      {
        "en": "I still remember the day when we first met.",
        "ko": "저는 우리가 처음 만난 그날을 아직도 기억해요."
      },
      {
        "en": "This is the cafe where I do my homework every day.",
        "ko": "여기가 제가 매일 숙제를 하는 카페예요."
      },
      {
        "en": "Nobody knows the reason why she quit her job.",
        "ko": "그녀가 일을 그만둔 이유를 아무도 몰라요."
      },
      {
        "en": "Can you show me how you solved this problem?",
        "ko": "이 문제를 어떻게 풀었는지 보여 줄 수 있나요?"
      },
      {
        "en": "Summer is the season when many people go to the beach.",
        "ko": "여름은 많은 사람들이 해변에 가는 계절이에요."
      },
      {
        "en": "We visited the town where my father grew up.",
        "ko": "우리는 아버지가 자라신 마을을 방문했어요."
      },
      {
        "en": "That's the way she always talks to her friends.",
        "ko": "그것이 그녀가 늘 친구들에게 말하는 방식이에요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? Do you know a restaurant ___ we can eat cheap pasta?",
        "choices": [
          "which",
          "when",
          "where"
        ],
        "answer": 2,
        "explain": "선행사가 장소(restaurant)이고 뒤 문장(we can eat cheap pasta)이 완전하므로 where예요. which를 쓰려면 뒤에 목적어가 빠져 있어야 해요."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "Tell me the way how you fixed it.",
          "Tell me how you fixed it.",
          "Tell me the way you fixed it."
        ],
        "answer": 0,
        "explain": "the way와 how는 절대 나란히 쓸 수 없고 둘 중 하나만 써야 해요. 나머지 두 문장은 둘 다 올바른 표현이에요."
      },
      {
        "q": "'the year when I was born'과 뜻이 같은 것은?",
        "choices": [
          "the year which I was born",
          "the year in which I was born",
          "the year at which I was born"
        ],
        "answer": 1,
        "explain": "when은 '전치사 + which'의 압축이고, 연도 앞에는 in을 쓰므로 in which가 맞아요. 전치사 없이 which만 쓰면 뒤 문장이 완전해서 틀려요."
      },
      {
        "q": "빈칸에 알맞은 것은? That's the reason ___ I called you last night.",
        "choices": [
          "why",
          "where",
          "what"
        ],
        "answer": 0,
        "explain": "선행사 the reason 뒤에는 이유의 관계부사 why를 써요. where는 장소, what은 아예 선행사와 같이 쓸 수 없어요."
      },
      {
        "q": "빈칸에 알맞은 것은? I visited the museum ___ was built 100 years ago.",
        "choices": [
          "where",
          "when",
          "which"
        ],
        "answer": 2,
        "explain": "뒤 문장에 주어가 빠져 있는 불완전한 문장이므로 관계대명사 which가 필요해요. where는 뒤에 완전한 문장이 올 때만 써요."
      },
      {
        "q": "두 문장을 바르게 합친 것은? (Monday is the day. + I feel most tired on that day.)",
        "choices": [
          "Monday is the day where I feel most tired.",
          "Monday is the day when I feel most tired.",
          "Monday is the day why I feel most tired."
        ],
        "answer": 1,
        "explain": "선행사 the day는 시간이므로 관계부사 when을 써요. where는 장소, why는 the reason 뒤에만 써요."
      },
      {
        "q": "다음 중 밑줄 친 관계부사가 어법상 옳은 문장은?",
        "choices": [
          "I like the park when we played.",
          "I miss the days where we were young.",
          "Spring is when the flowers start to bloom."
        ],
        "answer": 2,
        "explain": "선행사 없이도 when이 '~하는 때'라는 뜻으로 쓰일 수 있어서 세 번째가 맞아요. 첫 번째는 장소니 where, 두 번째는 시간이니 when을 써야 해요."
      }
    ],
    "link": "중학교에서 배운 관계대명사 which에 전치사가 합쳐진 압축형이 관계부사라서, which의 쓰임을 알면 절반은 끝난 거예요."
  },
  {
    "id": "h18",
    "title": "복합관계사 (whoever, whatever, however)",
    "key": "관계사 + ever는 '~든지'(명사절) 또는 '아무리/누가 ~하더라도'(양보 부사절) 두 가지 뜻이에요.",
    "hook": "-ever는 뷔페 이용권! whoever는 '누구든 다 환영', whatever는 '뭐든 다 OK', however는 '아무리 그래 봤자~'예요.",
    "summary": "관계사 뒤에 -ever를 붙이면 복합관계사가 돼요. whoever, whatever, whichever는 두 가지로 쓰여요. 첫째, '~하는 사람은 누구든지(anyone who)', '~하는 것은 무엇이든지(anything that)'라는 명사절로 쓰여 주어나 목적어가 돼요. 둘째, '누가 ~하더라도(no matter who)', '무엇을 ~하더라도(no matter what)'라는 양보의 부사절로 쓰여요. whenever는 '~할 때는 언제든지', wherever는 '~하는 곳은 어디든지'라는 뜻이에요. however는 특히 조심해야 하는데, 바로 뒤에 형용사나 부사를 붙여서 'however hard(아무리 열심히 해도)'처럼 써요. 헷갈릴 때는 no matter who/what/how로 바꿔 해석해 보면 뜻이 또렷해져요.",
    "rules": [
      "whoever = anyone who(~하는 사람은 누구든지) 또는 no matter who(누가 ~하더라도)",
      "whatever = anything that(~하는 것은 무엇이든지) 또는 no matter what(무엇을 ~하더라도)",
      "whichever = 정해진 것들 중 '어느 것이든지'",
      "whenever(언제든지) / wherever(어디든지)는 시간·장소의 부사절을 이끎",
      "however + 형용사/부사 + 주어 + 동사: '아무리 ~하더라도'",
      "양보의 복합관계사는 no matter who/what/how 등으로 바꿔 쓸 수 있음"
    ],
    "examples": [
      {
        "en": "Whoever comes first will get a free ticket.",
        "ko": "먼저 오는 사람은 누구든지 무료 티켓을 받게 돼요."
      },
      {
        "en": "You can order whatever you want from the menu.",
        "ko": "메뉴에서 원하는 것은 무엇이든지 주문해도 돼요."
      },
      {
        "en": "However tired you are, you should brush your teeth.",
        "ko": "아무리 피곤해도 이는 닦아야 해요."
      },
      {
        "en": "Whenever I hear this song, I think of my school days.",
        "ko": "이 노래를 들을 때마다 저는 학창 시절이 떠올라요."
      },
      {
        "en": "My dog follows me wherever I go.",
        "ko": "제 강아지는 제가 가는 곳 어디든지 따라와요."
      },
      {
        "en": "Whatever happens, I will be on your side.",
        "ko": "무슨 일이 일어나더라도 저는 당신 편에 설 거예요."
      },
      {
        "en": "Take whichever seat you like.",
        "ko": "마음에 드는 자리 어느 것이든 앉으세요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? ___ breaks the rules will be punished.",
        "choices": [
          "Whatever",
          "Whoever",
          "However"
        ],
        "answer": 1,
        "explain": "'규칙을 어기는 사람은 누구든지'라는 뜻으로 사람을 나타내는 Whoever가 맞아요. Whatever는 사물, However는 뒤에 형용사나 부사가 필요해요."
      },
      {
        "q": "'However rich he is, he never wastes money.'의 뜻은?",
        "choices": [
          "그는 부자가 되는 방법을 알아서 돈을 아껴요.",
          "하지만 그는 부자라서 돈을 낭비해요.",
          "그는 아무리 부자여도 절대 돈을 낭비하지 않아요."
        ],
        "answer": 2,
        "explain": "however + 형용사는 '아무리 ~하더라도'라는 양보의 뜻이에요. 접속부사 however(하지만)와 헷갈리면 안 돼요."
      },
      {
        "q": "빈칸에 알맞은 것은? Call me ___ you need help.",
        "choices": [
          "whenever",
          "whoever",
          "whichever"
        ],
        "answer": 0,
        "explain": "'도움이 필요할 때는 언제든지'라는 시간의 뜻이므로 whenever예요. whoever는 사람, whichever는 정해진 것 중 선택을 나타내요."
      },
      {
        "q": "'Whatever you decide, I will support you.'에서 Whatever와 바꿔 쓸 수 있는 것은?",
        "choices": [
          "No matter what",
          "No matter how",
          "Anything what"
        ],
        "answer": 0,
        "explain": "양보의 whatever는 no matter what(무엇을 ~하더라도)과 같아요. no matter how는 however에 해당하고, anything what은 어법상 틀린 표현이에요."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "However hard I tried, I failed.",
          "However I tried hard, I failed.",
          "No matter how hard I tried, I failed."
        ],
        "answer": 1,
        "explain": "however 바로 뒤에는 형용사나 부사(hard)가 붙어야 해서 However hard의 순서가 맞아요. hard가 뒤로 가면 틀린 문장이 돼요."
      },
      {
        "q": "빈칸에 알맞은 것은? There are two colors. Choose ___ you prefer.",
        "choices": [
          "whoever",
          "however",
          "whichever"
        ],
        "answer": 2,
        "explain": "두 가지 색이라는 정해진 범위 안에서 '어느 것이든' 고르는 것이므로 whichever예요. whoever는 사람에게 쓰고, however는 선택의 뜻이 없어요."
      },
      {
        "q": "'Whoever wins the game'이 명사절일 때의 해석은?",
        "choices": [
          "누가 경기를 이기더라도",
          "경기를 이기는 사람은 누구든지",
          "경기에서 이기는 방법은 무엇이든지"
        ],
        "answer": 1,
        "explain": "명사절 whoever는 anyone who, 즉 '~하는 사람은 누구든지'예요. '누가 ~하더라도'는 부사절(양보)로 쓰일 때의 해석이에요."
      }
    ],
    "link": "중학교에서 배운 관계대명사 who/what에 -ever만 붙여서 '누구든/뭐든'으로 범위를 확 넓힌 거예요."
  },
  {
    "id": "h19",
    "title": "명사절 심화 (that, whether, 의문사절)",
    "key": "that절·whether절·의문사절은 문장 안에서 주어·목적어·보어로 쓰이는 '큰 명사 덩어리'예요.",
    "hook": "명사절은 문장계의 러시아 인형(마트료시카)! 문장 안에 또 하나의 작은 문장이 명사인 척 쏙 들어가 있어요.",
    "summary": "명사절은 '주어 + 동사'를 갖춘 절이 통째로 명사처럼 쓰이는 거예요. 확실한 사실을 말할 때는 that절을 써서 'I know that she is honest.'처럼 표현해요. 확실하지 않아서 '~인지 아닌지'를 말할 때는 whether나 if를 쓰는데, 주어 자리나 전치사 뒤, or not 바로 앞에는 whether만 쓸 수 있어요. 의문사절은 의문문이 문장 속으로 들어간 것인데, 이때 어순이 '의문사 + 주어 + 동사'로 바뀌는 게 핵심이에요. 'I don't know where he lives.'처럼 does 같은 조동사가 사라지고 평서문 어순이 되죠. 이걸 간접의문문이라고 불러요. 명사절이 주어로 쓰이면 단수 취급하고, 길면 가주어 It으로 바꿔 뒤로 보내는 경우가 많아요.",
    "rules": [
      "that절: 확실한 사실, '~라는 것' (목적어일 때 that 생략 가능)",
      "whether/if절: 불확실한 일, '~인지 아닌지'",
      "주어 자리, 전치사 뒤, whether or not 형태에는 if 불가, whether만 가능",
      "의문사절(간접의문문)은 '의문사 + 주어 + 동사' 어순 (do/does/did 삭제)",
      "명사절 주어는 단수 취급, 길면 가주어 It ~ that ... 으로 전환",
      "생각·추측 동사(think, believe)의 간접의문문은 의문사가 문장 맨 앞으로 (Who do you think ~?)"
    ],
    "examples": [
      {
        "en": "I believe that everyone deserves a second chance.",
        "ko": "저는 모든 사람이 두 번째 기회를 받을 자격이 있다고 믿어요."
      },
      {
        "en": "Whether we win or lose doesn't matter to me.",
        "ko": "우리가 이기든 지든 저에게는 중요하지 않아요."
      },
      {
        "en": "She asked me if I could help her move this weekend.",
        "ko": "그녀는 제가 이번 주말에 이사를 도와줄 수 있는지 물었어요."
      },
      {
        "en": "Do you know where the nearest bus stop is?",
        "ko": "가장 가까운 버스 정류장이 어디에 있는지 아세요?"
      },
      {
        "en": "It is surprising that he finished the marathon.",
        "ko": "그가 마라톤을 완주했다는 것은 놀라운 일이에요."
      },
      {
        "en": "I wonder why she didn't answer my message.",
        "ko": "그녀가 왜 제 메시지에 답하지 않았는지 궁금해요."
      },
      {
        "en": "The problem is that we don't have enough time.",
        "ko": "문제는 우리에게 시간이 충분하지 않다는 거예요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? ___ he will join us or not is still unknown.",
        "choices": [
          "If",
          "Whether",
          "That"
        ],
        "answer": 1,
        "explain": "주어 자리이면서 or not이 있으므로 Whether만 가능해요. if는 주어 자리에 쓸 수 없고, That은 '~인지 아닌지'라는 뜻이 없어요."
      },
      {
        "q": "어순이 올바른 문장은?",
        "choices": [
          "I don't know what she wants.",
          "I don't know what does she want.",
          "I don't know she what wants."
        ],
        "answer": 0,
        "explain": "간접의문문은 '의문사 + 주어 + 동사' 어순이라 does가 사라지고 what she wants가 돼요. 의문문 어순(does she)을 그대로 쓰면 틀려요."
      },
      {
        "q": "다음 중 that을 생략할 수 있는 문장은?",
        "choices": [
          "That he is smart is true.",
          "I think that he is smart.",
          "It is true that he is smart."
        ],
        "answer": 1,
        "explain": "동사(think)의 목적어로 쓰인 that만 생략할 수 있어요. 주어 자리나 It ~ that 구문의 that은 생략하면 문장이 어색해져요."
      },
      {
        "q": "빈칸에 알맞은 것은? I'm worried about ___ she is safe.",
        "choices": [
          "whether",
          "if",
          "what"
        ],
        "answer": 0,
        "explain": "전치사 about 뒤에는 if절을 쓸 수 없고 whether만 가능해요. what을 쓰면 뒤 문장이 완전해서 어법에 맞지 않아요."
      },
      {
        "q": "'Do you think? + Who is he?'를 한 문장으로 바르게 합친 것은?",
        "choices": [
          "Do you think who he is?",
          "Who do you think is he?",
          "Who do you think he is?"
        ],
        "answer": 2,
        "explain": "think 같은 생각 동사의 간접의문문은 의문사(Who)가 문장 맨 앞으로 나가고, 뒤는 '주어 + 동사(he is)' 어순이 돼요. is he처럼 뒤집으면 틀려요."
      },
      {
        "q": "빈칸에 알맞은 동사 형태는? That she lied to us ___ me sad.",
        "choices": [
          "make",
          "makes",
          "making"
        ],
        "answer": 1,
        "explain": "That절 주어는 하나의 덩어리로 보고 단수 취급하므로 makes를 써요. 절 안에 여러 단어가 있어도 주어는 that절 전체 하나예요."
      },
      {
        "q": "'It is clear that he loves music.'에서 It의 역할은?",
        "choices": [
          "앞 문장의 음악을 가리키는 대명사",
          "날씨를 나타내는 비인칭 주어",
          "that절을 대신하는 가주어"
        ],
        "answer": 2,
        "explain": "진짜 주어인 that절이 길어서 뒤로 보내고, 빈 주어 자리를 가주어 It이 채운 거예요. 무언가를 실제로 가리키는 대명사가 아니에요."
      }
    ],
    "link": "중학교에서 배운 'I think (that) ~' 문장과 간접의문문 어순이 그대로 확장된 내용이에요."
  },
  {
    "id": "h20",
    "title": "부사절 심화 (양보·조건·목적·결과)",
    "key": "although(양보), unless(조건), so that(목적), so ~ that(결과)이 문장에 이유와 흐름을 만들어요.",
    "hook": "so that은 '하려고', so ~ that은 '해서 결국'! that 앞에 형용사가 끼어 있으면 결과, 없으면 목적이에요.",
    "summary": "부사절은 문장에 '언제, 왜, 어떤 조건에서'라는 정보를 더해 주는 절이에요. 양보의 although/though/even though는 '비록 ~이지만'이라는 뜻으로, 예상과 반대되는 결과를 이어 줘요. 조건의 unless는 'if ~ not(~하지 않으면)'과 같아서, unless 뒤에 not을 또 쓰면 안 돼요. 목적의 so that은 '~하기 위해서'라는 뜻이고 보통 can/will 같은 조동사와 함께 쓰여요. 결과의 'so + 형용사/부사 + that'은 '너무 ~해서 그 결과 ...하다'라는 뜻이에요. 명사가 낄 때는 'such a + 형용사 + 명사 + that' 순서가 되는 것도 기억하세요. 그리고 시간·조건의 부사절에서는 미래의 일도 현재시제로 쓴다는 규칙이 여기서도 그대로 적용돼요.",
    "rules": [
      "양보: although / though / even though + 주어 + 동사 = '비록 ~이지만'",
      "조건: unless = if ~ not, unless절 안에 not 중복 금지",
      "목적: so that + 주어 + can/will = '~하기 위해서'",
      "결과: so + 형용사/부사 + that ... = '너무 ~해서 ...하다'",
      "such + a(n) + 형용사 + 명사 + that (명사가 들어가면 so 대신 such)",
      "시간·조건 부사절에서는 미래 대신 현재시제 (If it rains tomorrow, ~)"
    ],
    "examples": [
      {
        "en": "Although it was raining hard, we went hiking.",
        "ko": "비가 심하게 왔지만, 우리는 등산을 갔어요."
      },
      {
        "en": "Unless you hurry, you will miss the last train.",
        "ko": "서두르지 않으면 막차를 놓칠 거예요."
      },
      {
        "en": "I saved money so that I could buy a new laptop.",
        "ko": "저는 새 노트북을 사기 위해서 돈을 모았어요."
      },
      {
        "en": "The soup was so hot that I couldn't eat it right away.",
        "ko": "수프가 너무 뜨거워서 바로 먹을 수가 없었어요."
      },
      {
        "en": "It was such a boring movie that I fell asleep.",
        "ko": "너무 지루한 영화여서 저는 잠들어 버렸어요."
      },
      {
        "en": "Even though he was tired, he finished his report.",
        "ko": "그는 피곤했는데도 보고서를 끝냈어요."
      },
      {
        "en": "Speak louder so that everyone can hear you.",
        "ko": "모두가 들을 수 있도록 더 크게 말해 주세요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? ___ she was sick, she came to work.",
        "choices": [
          "Because",
          "Although",
          "Unless"
        ],
        "answer": 1,
        "explain": "'아팠는데도 출근했다'는 예상 밖 결과이므로 양보의 Although예요. Because(아파서 출근했다)는 논리가 이상하고, Unless는 조건이에요."
      },
      {
        "q": "'If you don't study, you will fail.'과 뜻이 같은 것은?",
        "choices": [
          "Unless you study, you will fail.",
          "Unless you don't study, you will fail.",
          "Although you study, you will fail."
        ],
        "answer": 0,
        "explain": "unless 자체에 not의 뜻이 들어 있어서 Unless you study가 맞아요. unless 뒤에 don't를 또 쓰면 부정이 두 번 겹쳐 틀려요."
      },
      {
        "q": "빈칸에 알맞은 것은? I turned off my phone ___ I could focus on studying.",
        "choices": [
          "so that",
          "even though",
          "unless"
        ],
        "answer": 0,
        "explain": "'집중하기 위해서'라는 목적이므로 so that + can 형태가 맞아요. even though는 양보, unless는 조건이라 뜻이 안 통해요."
      },
      {
        "q": "'The box was so heavy that I couldn't lift it.'의 뜻은?",
        "choices": [
          "상자를 들기 위해 무겁게 만들었어요.",
          "상자가 무거웠지만 나는 들 수 있었어요.",
          "상자가 너무 무거워서 들 수 없었어요."
        ],
        "answer": 2,
        "explain": "so + 형용사 + that은 '너무 ~해서 (그 결과) ...하다'는 결과의 뜻이에요. 목적(~하기 위해)으로 해석하면 안 돼요."
      },
      {
        "q": "빈칸에 알맞은 것은? It was ___ nice day that we had a picnic.",
        "choices": [
          "so a",
          "such a",
          "so"
        ],
        "answer": 1,
        "explain": "명사(day)가 들어간 결과 구문은 'such a + 형용사 + 명사 + that' 순서예요. so 뒤에는 명사 없이 형용사나 부사만 와요."
      },
      {
        "q": "빈칸에 알맞은 동사 형태는? Unless it ___ tomorrow, we will play soccer.",
        "choices": [
          "will rain",
          "rained",
          "rains"
        ],
        "answer": 2,
        "explain": "조건 부사절에서는 미래의 일이라도 현재시제(rains)를 써요. will rain을 쓰는 것이 가장 흔한 실수예요."
      },
      {
        "q": "다음 중 어법과 의미가 모두 자연스러운 문장은?",
        "choices": [
          "He is so a fast runner that nobody can catch him.",
          "He ran such fast that nobody could catch him.",
          "He ran so fast that nobody could catch him."
        ],
        "answer": 2,
        "explain": "부사 fast 앞에는 so를 써서 so fast that이 맞아요. so a fast runner는 어순이 틀렸고(such a fast runner가 맞음), such 뒤에는 명사가 있어야 해요."
      }
    ],
    "link": "중학교에서 배운 because/if 부사절에 양보(although)·목적(so that)·결과(so ~ that)라는 새 카드가 추가된 거예요."
  },
  {
    "id": "h21",
    "title": "접속사 vs 전치사 (while/during, although/despite)",
    "key": "뒤에 '주어 + 동사'가 오면 접속사(while, although), 명사(구)만 오면 전치사(during, despite)예요.",
    "hook": "접속사는 문장을 태우는 2인승(주어+동사), 전치사는 명사 하나만 태우는 1인승 스쿠터예요!",
    "summary": "while과 during은 둘 다 '~ 동안'이라는 뜻이지만 태울 수 있는 손님이 달라요. while은 접속사라서 뒤에 '주어 + 동사'가 통째로 오고, during은 전치사라서 뒤에 명사(구)만 와요. 'while I was sleeping'과 'during the night'을 비교해 보면 감이 오죠. although와 despite도 마찬가지예요. although는 접속사라서 'although it rained'처럼 쓰고, despite는 전치사라서 'despite the rain'처럼 명사만 받아요. despite of는 아예 없는 표현이고, of를 쓰고 싶으면 in spite of라고 해야 해요. because(접속사)와 because of(전치사)도 같은 원리로 구분돼요. 결국 시험 포인트는 딱 하나, '빈칸 뒤를 보라!'예요. 주어와 동사가 보이면 접속사, 명사만 보이면 전치사를 고르면 돼요.",
    "rules": [
      "접속사 + 주어 + 동사: while, although, though, because",
      "전치사 + 명사(구): during, despite, in spite of, because of",
      "while(~하는 동안) ↔ during(~ 동안): 뜻은 같고 뒤 구조만 다름",
      "although(비록 ~이지만) ↔ despite / in spite of(~에도 불구하고)",
      "despite of는 틀린 표현 (despite 또는 in spite of만 가능)",
      "전치사 뒤에 동사를 쓰려면 동명사(-ing)로 바꿔야 함 (despite being tired)"
    ],
    "examples": [
      {
        "en": "My phone rang while I was taking a shower.",
        "ko": "제가 샤워하는 동안 전화가 울렸어요."
      },
      {
        "en": "Please turn off your phone during the movie.",
        "ko": "영화가 상영되는 동안에는 휴대폰을 꺼 주세요."
      },
      {
        "en": "Although he studied hard, he didn't pass the exam.",
        "ko": "그는 열심히 공부했지만 시험에 통과하지 못했어요."
      },
      {
        "en": "Despite the heavy traffic, we arrived on time.",
        "ko": "교통 체증이 심했는데도 우리는 제시간에 도착했어요."
      },
      {
        "en": "She kept smiling in spite of the bad news.",
        "ko": "그녀는 나쁜 소식에도 불구하고 계속 미소를 지었어요."
      },
      {
        "en": "The game was canceled because of the storm.",
        "ko": "폭풍 때문에 경기가 취소되었어요."
      },
      {
        "en": "Despite feeling nervous, he gave a great speech.",
        "ko": "긴장했음에도 불구하고 그는 훌륭한 연설을 했어요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? I fell asleep ___ the boring lecture.",
        "choices": [
          "while",
          "during",
          "although"
        ],
        "answer": 1,
        "explain": "빈칸 뒤가 명사구(the boring lecture)이므로 전치사 during이에요. while은 접속사라 뒤에 주어와 동사가 와야 해요."
      },
      {
        "q": "빈칸에 알맞은 것은? ___ she was tired, she kept working.",
        "choices": [
          "Despite",
          "During",
          "Although"
        ],
        "answer": 2,
        "explain": "빈칸 뒤에 주어(she)와 동사(was)가 있으므로 접속사 Although를 써요. Despite와 During은 전치사라 명사만 받을 수 있어요."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "Despite of the rain, we played outside.",
          "In spite of the rain, we played outside.",
          "Despite the rain, we played outside."
        ],
        "answer": 0,
        "explain": "despite of라는 표현은 아예 없어요. despite만 쓰거나 in spite of로 써야 해요."
      },
      {
        "q": "'while he was in Japan'과 뜻이 같은 것은?",
        "choices": [
          "during he was in Japan",
          "during his stay in Japan",
          "although his stay in Japan"
        ],
        "answer": 1,
        "explain": "during은 전치사라서 명사구 his stay in Japan을 받아야 해요. during 뒤에 주어와 동사를 그대로 쓰면 틀려요."
      },
      {
        "q": "빈칸에 알맞은 것은? The flight was delayed ___ the fog.",
        "choices": [
          "because of",
          "because",
          "although"
        ],
        "answer": 0,
        "explain": "빈칸 뒤가 명사(the fog)뿐이므로 전치사 because of를 써요. because는 접속사라서 the fog is thick처럼 주어와 동사가 필요해요."
      },
      {
        "q": "빈칸에 알맞은 것은? He went to school despite ___ sick.",
        "choices": [
          "he was",
          "being",
          "was"
        ],
        "answer": 1,
        "explain": "despite는 전치사라서 동사를 쓰려면 동명사 being으로 바꿔야 해요. 주어와 동사(he was)를 쓰려면 despite 대신 although가 필요해요."
      },
      {
        "q": "두 문장의 빈칸에 들어갈 짝으로 알맞은 것은? (A) ___ the vacation, I read five books. (B) ___ I was on vacation, I read five books.",
        "choices": [
          "While - During",
          "Despite - Although",
          "During - While"
        ],
        "answer": 2,
        "explain": "(A)는 뒤가 명사(the vacation)라 전치사 During, (B)는 주어와 동사가 있어 접속사 While이에요. 뒤 구조만 보면 바로 풀려요."
      }
    ],
    "link": "중학교에서 배운 because와 because of의 구분법(뒤에 문장이냐 명사냐)이 while/during, although/despite에도 똑같이 적용돼요."
  },
  {
    "id": "h22",
    "title": "도치 (부정어 도치, only 도치, so/neither)",
    "key": "부정어나 only가 문장 앞에 오면 주어와 동사의 순서가 의문문처럼 뒤집혀요.",
    "hook": "Never를 앞세우면 문장도 깜짝 놀라서 벌러덩 뒤집힌다!",
    "summary": "도치는 강조하고 싶은 말을 문장 맨 앞으로 보내면서 주어와 동사의 순서를 바꾸는 거예요. Never, Little, Hardly, Not only 같은 부정어가 문장 앞에 오면 그 뒤는 의문문 어순이 돼요. 그래서 Never I have seen이 아니라 Never have I seen처럼 조동사가 주어 앞으로 나와요. Only 뒤에 시간이나 조건 표현이 붙어서 문장 앞에 올 때도 똑같이 도치가 일어나요. 그리고 상대방 말에 '나도 그래'라고 맞장구칠 때는 So do I, '나도 안 그래'는 Neither do I를 써요. 이때 동사는 앞 문장의 동사 종류(be동사, 조동사, 일반동사)에 맞춰야 해요. 규칙은 하나예요. 특별한 말이 앞에 나오면 어순이 의문문처럼 바뀐다, 이것만 기억하면 돼요.",
    "rules": [
      "부정어(Never, Little, Hardly, Rarely, Not only 등)가 문장 앞에 오면 '부정어 + 조동사 + 주어 + 동사' 어순이 돼요.",
      "일반동사 문장은 do/does/did를 빌려와서 도치해요. (Never did I dream ~)",
      "Only + 시간/조건 표현(Only then, Only after ~)이 문장 앞에 오면 뒤 문장을 도치해요.",
      "Not only A but also B에서 Not only가 앞에 오면 A 부분만 도치하고, but also 뒤는 정상 어순이에요.",
      "긍정문 맞장구는 So + (조)동사 + 주어, 부정문 맞장구는 Neither + (조)동사 + 주어예요.",
      "So/Neither 뒤의 동사는 앞 문장 동사에 맞춰요. (be동사면 be, can이면 can, 일반동사면 do/does/did)"
    ],
    "examples": [
      {
        "en": "Never have I seen such a beautiful sunset.",
        "ko": "저는 그렇게 아름다운 노을을 본 적이 없어요."
      },
      {
        "en": "Little did she know that her life was about to change.",
        "ko": "그녀는 자신의 인생이 곧 바뀔 거라는 걸 전혀 몰랐어요."
      },
      {
        "en": "Hardly ever does he eat breakfast on weekdays.",
        "ko": "그는 평일에는 아침을 거의 먹지 않아요."
      },
      {
        "en": "Only after the exam did I realize my mistake.",
        "ko": "시험이 끝난 후에야 저는 제 실수를 깨달았어요."
      },
      {
        "en": "Not only does she speak English, but she also speaks Japanese.",
        "ko": "그녀는 영어를 할 뿐만 아니라 일본어도 해요."
      },
      {
        "en": "I love this song. — So do I!",
        "ko": "저 이 노래 정말 좋아해요. — 저도요!"
      },
      {
        "en": "He can't swim, and neither can his brother.",
        "ko": "그는 수영을 못 하고, 그의 형도 못 해요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? Never ___ such a strange story before.",
        "choices": [
          "have I heard",
          "I have heard",
          "I heard have"
        ],
        "answer": 0,
        "explain": "Never가 문장 앞에 오면 조동사 have가 주어 I 앞으로 나와야 해요. 'I have heard'는 도치가 안 된 평서문 어순이라 틀렸어요."
      },
      {
        "q": "'나도 배고파요'라고 맞장구치려면? I'm hungry. — ___",
        "choices": [
          "So do I.",
          "So am I.",
          "So I am."
        ],
        "answer": 1,
        "explain": "앞 문장 동사가 be동사(am)니까 맞장구도 be동사로, So am I가 맞아요. So do I는 일반동사 문장에 쓰는 맞장구예요."
      },
      {
        "q": "다음 중 어법상 올바른 문장은?",
        "choices": [
          "Only then she understood the truth.",
          "Only then understood she the truth.",
          "Only then did she understand the truth."
        ],
        "answer": 2,
        "explain": "Only then이 문장 앞에 오면 did를 빌려와 주어 앞에 놓아야 해요. 첫 번째 보기는 도치를 안 해서 틀렸어요."
      },
      {
        "q": "빈칸에 알맞은 것은? Little ___ that the shop was already closed.",
        "choices": [
          "did we know",
          "we knew",
          "we did know"
        ],
        "answer": 0,
        "explain": "Little(전혀 ~않다)이 앞에 오면 did + 주어 + 동사원형 순서가 돼요. 'we knew'는 도치가 빠져서 틀렸어요."
      },
      {
        "q": "'그녀도 커피를 안 마셔요'를 바르게 표현한 것은? I don't drink coffee, and ___.",
        "choices": [
          "so does she",
          "neither she does",
          "neither does she"
        ],
        "answer": 2,
        "explain": "부정문 맞장구는 Neither + 조동사 + 주어 순서로 neither does she가 맞아요. neither she does는 어순이 뒤집히지 않아서 틀렸어요."
      },
      {
        "q": "Not only ___ the piano, but he also writes his own songs. 빈칸은?",
        "choices": [
          "does he play",
          "he plays",
          "he does play"
        ],
        "answer": 0,
        "explain": "Not only가 문장 앞에 오면 does he play처럼 도치해야 해요. 'he plays'는 Not only가 앞에 없을 때의 평범한 어순이에요."
      },
      {
        "q": "다음 문장에서 틀린 부분은? Hardly I could believe the news yesterday.",
        "choices": [
          "Hardly를 문장 끝으로 옮겨야 한다",
          "I could를 could I로 바꿔야 한다",
          "believe를 believed로 바꿔야 한다"
        ],
        "answer": 1,
        "explain": "부정어 Hardly가 문장 앞에 있으니 조동사 could가 주어 I 앞으로 가야 해요. believe는 조동사 뒤라 원형 그대로가 맞아요."
      }
    ],
    "link": "중학교에서 배운 의문문 어순(조동사 + 주어)이 그대로 도치문의 어순이 돼요."
  },
  {
    "id": "h23",
    "title": "강조 (It ~ that 강조구문, do 강조)",
    "key": "It is ~ that 사이에 강조할 말을 넣고, 동사는 do/does/did를 앞에 붙여 강조해요.",
    "hook": "It~that은 스포트라이트, do는 확성기라고 생각하세요!",
    "summary": "영어에서 어떤 말을 특별히 강조하고 싶을 때 쓰는 두 가지 대표 방법이 있어요. 첫 번째는 It is(was) ~ that 강조구문인데, 강조하고 싶은 말을 It is와 that 사이에 끼워 넣는 거예요. 주어, 목적어, 시간, 장소 표현은 강조할 수 있지만 동사는 이 자리에 넣을 수 없어요. 사람을 강조할 때는 that 대신 who를 써도 돼요. 두 번째는 do 강조인데, 일반동사 앞에 do/does/did를 붙여서 '정말로 ~한다'는 느낌을 줘요. 이때 뒤의 동사는 반드시 원형으로 써야 해요. 이 두 가지만 알면 '바로 그거야!'라는 느낌을 영어로 표현할 수 있어요.",
    "rules": [
      "It is(was) + [강조할 말] + that + [나머지 문장] 순서로 만들어요.",
      "강조할 수 있는 것은 주어, 목적어, 부사(시간·장소)이고, 동사는 It ~ that 사이에 못 넣어요.",
      "강조하는 대상이 사람이면 that 대신 who를 쓸 수 있어요.",
      "원래 문장이 과거면 It was, 현재면 It is를 써요.",
      "동사를 강조할 때는 동사 앞에 do/does/did를 붙이고, 뒤의 동사는 원형으로 써요.",
      "do 강조의 do는 주어와 시제에 맞춰요. (She does like / They did come)"
    ],
    "examples": [
      {
        "en": "It was Mina that broke the window yesterday.",
        "ko": "어제 창문을 깬 사람은 바로 미나였어요."
      },
      {
        "en": "It is this book that I want to read.",
        "ko": "제가 읽고 싶은 것은 바로 이 책이에요."
      },
      {
        "en": "It was in Busan that we first met.",
        "ko": "우리가 처음 만난 곳은 바로 부산이었어요."
      },
      {
        "en": "It was last Friday that the concert was held.",
        "ko": "콘서트가 열린 것은 바로 지난 금요일이었어요."
      },
      {
        "en": "I do believe you are telling the truth.",
        "ko": "저는 당신이 진실을 말하고 있다고 정말로 믿어요."
      },
      {
        "en": "She does enjoy cooking on weekends.",
        "ko": "그녀는 주말에 요리하는 걸 정말 즐겨요."
      },
      {
        "en": "We did warn him about the icy road.",
        "ko": "우리는 빙판길에 대해 그에게 분명히 경고했어요."
      }
    ],
    "quiz": [
      {
        "q": "'제가 잃어버린 것은 바로 제 지갑이에요'를 강조구문으로 바르게 쓴 것은?",
        "choices": [
          "It is my wallet that I lost.",
          "It is I that my wallet lost.",
          "My wallet is it that I lost."
        ],
        "answer": 0,
        "explain": "강조할 말 my wallet을 It is와 that 사이에 넣으면 돼요. 두 번째 보기는 강조 대상과 나머지 문장이 뒤섞여서 뜻이 이상해져요."
      },
      {
        "q": "빈칸에 알맞은 것은? He ___ finish his homework, I saw it myself!",
        "choices": [
          "do finished",
          "did finished",
          "did finish"
        ],
        "answer": 2,
        "explain": "과거 일을 강조하니 did를 쓰고 뒤의 동사는 원형 finish로 써야 해요. did finished는 과거형을 두 번 쓴 셈이라 틀렸어요."
      },
      {
        "q": "It was at the library ___ I left my umbrella. 빈칸은?",
        "choices": [
          "what",
          "that",
          "which"
        ],
        "answer": 1,
        "explain": "It ~ 강조구문의 짝은 that이에요. what은 '~하는 것'이라는 뜻의 다른 문법이라 여기에 못 써요."
      },
      {
        "q": "다음 중 It ~ that 사이에 넣어 강조할 수 없는 것은? Jane bought a cake at the bakery.",
        "choices": [
          "bought",
          "Jane",
          "at the bakery"
        ],
        "answer": 0,
        "explain": "동사(bought)는 It ~ that 강조구문에 넣을 수 없어요. 동사를 강조하려면 do/does/did 강조를 써야 해요."
      },
      {
        "q": "She ___ like spicy food, even though she says she doesn't. 빈칸은?",
        "choices": [
          "do",
          "does",
          "is"
        ],
        "answer": 1,
        "explain": "주어가 3인칭 단수 She이고 현재니까 does를 써요. do는 I나 you, 복수 주어에 쓰는 형태예요."
      },
      {
        "q": "It was Tom ___ called you last night. 빈칸에 들어갈 수 없는 것은?",
        "choices": [
          "that",
          "who",
          "which"
        ],
        "answer": 2,
        "explain": "강조 대상이 사람(Tom)이면 that이나 who를 쓸 수 있어요. which는 사물에 쓰는 말이라 사람에게는 못 써요."
      },
      {
        "q": "다음 문장에서 틀린 부분은? It was yesterday when it that I saw the movie.",
        "choices": [
          "was를 is로 바꿔야 한다",
          "when it을 빼야 한다",
          "saw를 see로 바꿔야 한다"
        ],
        "answer": 1,
        "explain": "강조구문은 It was yesterday that ~ 형태만 있으면 되니 불필요한 when it을 빼야 해요. 과거 일이므로 was와 saw는 그대로 맞아요."
      }
    ],
    "link": "중학교에서 배운 do/does/did가 부정문·의문문뿐 아니라 강조에도 쓰인다는 걸 확장한 거예요."
  },
  {
    "id": "h24",
    "title": "병렬구조",
    "key": "and, but, or로 연결되는 말들은 서로 같은 문법 형태여야 해요.",
    "hook": "병렬구조는 줄다리기 팀 유니폼 — 한 팀이면 옷도 맞춰 입어야죠!",
    "summary": "병렬구조는 and, but, or 같은 접속사로 여러 개를 나열할 때 형태를 맞추는 규칙이에요. 예를 들어 동명사와 동명사, to부정사와 to부정사, 명사와 명사처럼 같은 옷을 입혀야 해요. I like swimming and to run처럼 형태가 다르면 어색한 문장이 돼요. not only A but also B, both A and B, either A or B 같은 짝꿍 표현에서도 A와 B는 반드시 같은 형태여야 해요. 비교 구문 than 앞뒤도 같은 형태로 맞추는 게 좋아요. 시험에서도, 글쓰기에서도 정말 자주 나오는 규칙이에요. 나열된 것들의 형태만 확인하면 되니까 눈에 잘 띄는 문법이에요.",
    "rules": [
      "and, but, or로 연결된 말들은 품사와 형태를 똑같이 맞춰요.",
      "동사를 나열할 때는 시제와 형태도 맞춰요. (came, saw, and won)",
      "both A and B, either A or B, neither A nor B의 A와 B는 같은 형태여야 해요.",
      "not only A but also B의 A와 B도 같은 형태여야 해요.",
      "to부정사를 나열할 때 두 번째부터는 to를 생략할 수 있어요. (to sing and (to) dance)",
      "비교급 than 앞뒤도 같은 형태로 맞춰요. (Reading is better than watching)"
    ],
    "examples": [
      {
        "en": "She enjoys reading, cooking, and hiking.",
        "ko": "그녀는 독서, 요리, 그리고 등산을 즐겨요."
      },
      {
        "en": "My goal is to save money and to travel abroad.",
        "ko": "제 목표는 돈을 모아서 해외여행을 가는 거예요."
      },
      {
        "en": "He came home, took a shower, and went to bed.",
        "ko": "그는 집에 와서 샤워를 하고 잠자리에 들었어요."
      },
      {
        "en": "The movie was both exciting and touching.",
        "ko": "그 영화는 흥미진진하면서도 감동적이었어요."
      },
      {
        "en": "You can either call me or send me a text.",
        "ko": "저에게 전화를 하거나 문자를 보내시면 돼요."
      },
      {
        "en": "She is not only smart but also kind.",
        "ko": "그녀는 똑똑할 뿐만 아니라 친절하기도 해요."
      },
      {
        "en": "Walking to work is healthier than driving.",
        "ko": "걸어서 출근하는 게 운전하는 것보다 건강에 좋아요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? I like swimming, jogging, and ___.",
        "choices": [
          "to cycle",
          "cycle",
          "cycling"
        ],
        "answer": 2,
        "explain": "swimming, jogging이 동명사(-ing)니까 마지막도 cycling으로 맞춰야 해요. to cycle은 형태가 달라서 병렬이 깨져요."
      },
      {
        "q": "다음 중 병렬구조가 올바른 문장은?",
        "choices": [
          "He is smart, funny, and hardworking.",
          "He is smart, funny, and works hard.",
          "He is smart, funny, and to work hard."
        ],
        "answer": 0,
        "explain": "smart, funny와 같은 형용사인 hardworking으로 맞춘 문장이 맞아요. works hard는 동사라서 형용사 나열에 끼면 병렬이 깨져요."
      },
      {
        "q": "She wants to learn Spanish and ___ in Spain someday. 빈칸은?",
        "choices": [
          "living",
          "lived",
          "to live"
        ],
        "answer": 2,
        "explain": "to learn과 짝을 이루려면 to live로 써야 해요. living은 동명사라 to부정사와 형태가 안 맞아요."
      },
      {
        "q": "다음 문장에서 틀린 부분은? Ms. Kim is famous not only for her paintings but also she teaches well.",
        "choices": [
          "not only를 only not으로 바꿔야 한다",
          "she teaches well을 for her teaching으로 바꿔야 한다",
          "famous를 famously로 바꿔야 한다"
        ],
        "answer": 1,
        "explain": "not only 뒤가 for her paintings(전치사구)니까 but also 뒤도 for her teaching으로 맞춰야 해요. 문장(she teaches well)을 넣으면 형태가 달라 병렬이 깨져요."
      },
      {
        "q": "Yesterday he cleaned his room, washed the dishes, and ___ the trash. 빈칸은?",
        "choices": [
          "took out",
          "takes out",
          "taking out"
        ],
        "answer": 0,
        "explain": "cleaned, washed가 과거형이니 took out으로 시제를 맞춰야 해요. takes out은 현재형이라 나열의 흐름이 깨져요."
      },
      {
        "q": "Either you apologize to her ___ you lose a good friend. 빈칸은?",
        "choices": [
          "nor",
          "or",
          "and"
        ],
        "answer": 1,
        "explain": "either의 짝꿍은 or예요. nor는 neither와 짝을 이루는 말이라 여기에 쓰면 틀려요."
      },
      {
        "q": "다음 중 어법상 어색한 문장은?",
        "choices": [
          "I prefer texting to calling.",
          "Both the food and the service were great.",
          "She likes to dance and singing at parties."
        ],
        "answer": 2,
        "explain": "to dance와 singing은 형태가 달라서 병렬이 깨졌어요. to dance and (to) sing이나 dancing and singing으로 맞춰야 해요."
      }
    ],
    "link": "중학교에서 배운 접속사 and, but, or의 쓰임을 '형태 맞추기' 규칙으로 한 단계 정교하게 만든 거예요."
  },
  {
    "id": "h25",
    "title": "수일치 기본 (주어와 동사 찾기)",
    "key": "동사의 단수·복수는 바로 앞 명사가 아니라 '진짜 주어'에 맞춰요.",
    "hook": "동사는 껌딱지처럼 가까운 명사가 아니라 진짜 주인님(주어)만 따라간다!",
    "summary": "수일치는 주어가 단수면 단수 동사, 복수면 복수 동사를 쓰는 규칙이에요. 문제는 주어와 동사 사이에 다른 말들이 끼어들 때예요. The box of apples is heavy에서 주어는 apples가 아니라 The box니까 is를 써야 해요. of, in, with 같은 전치사 뒤의 명사는 주어가 아니라는 걸 꼭 기억하세요. 주어 뒤에 붙은 관계절이나 분사구도 마찬가지로 무시하고 진짜 주어를 찾아야 해요. 동명사나 to부정사가 주어면 하나의 덩어리로 보고 단수 취급해요. 동사를 만나면 먼저 '주어가 누구지?'라고 되묻는 습관이 수일치의 전부예요.",
    "rules": [
      "단수 주어에는 단수 동사(is, was, -s), 복수 주어에는 복수 동사(are, were, 원형)를 써요.",
      "주어와 동사 사이의 전치사구(of, in, with ~)는 수일치에 영향을 주지 않아요.",
      "주어를 꾸미는 관계절이나 분사구도 건너뛰고 진짜 주어에 맞춰요.",
      "동명사(-ing)나 to부정사가 주어면 단수 취급해요.",
      "A and B는 복수지만, 하나의 개념이면 단수예요. (Bread and butter is ~)",
      "There is/are 문장은 뒤에 오는 명사가 진짜 주어예요."
    ],
    "examples": [
      {
        "en": "The color of these flowers is really bright.",
        "ko": "이 꽃들의 색깔은 정말 밝아요."
      },
      {
        "en": "The students in this class are very friendly.",
        "ko": "이 반 학생들은 아주 다정해요."
      },
      {
        "en": "Eating vegetables every day is good for your health.",
        "ko": "매일 채소를 먹는 것은 건강에 좋아요."
      },
      {
        "en": "The man standing by the door is my uncle.",
        "ko": "문 옆에 서 있는 남자는 제 삼촌이에요."
      },
      {
        "en": "There are three cafes near my office.",
        "ko": "제 사무실 근처에는 카페가 세 곳 있어요."
      },
      {
        "en": "My brother and my sister live in Seoul.",
        "ko": "제 남동생과 여동생은 서울에 살아요."
      },
      {
        "en": "The price of the concert tickets was too high.",
        "ko": "그 콘서트 티켓의 가격은 너무 비쌌어요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? The smell of fresh cookies ___ the whole house.",
        "choices": [
          "fills",
          "fill",
          "have filled"
        ],
        "answer": 0,
        "explain": "주어는 cookies가 아니라 The smell(단수)이니 fills가 맞아요. of fresh cookies는 전치사구라 수일치와 상관없어요."
      },
      {
        "q": "다음 중 어법상 올바른 문장은?",
        "choices": [
          "Learning new languages take time.",
          "Learning new languages are taking time.",
          "Learning new languages takes time."
        ],
        "answer": 2,
        "explain": "동명사 주어 Learning ~은 단수 취급이라 takes가 맞아요. languages가 복수라고 해서 take를 쓰면 진짜 주어를 놓친 거예요."
      },
      {
        "q": "There ___ a park and two schools in my town. 빈칸은?",
        "choices": [
          "is",
          "are",
          "be"
        ],
        "answer": 0,
        "explain": "There is/are는 바로 뒤의 명사에 맞추는데, 가장 가까운 a park이 단수라 is를 흔히 써요. are는 뒤 명사가 복수로 시작할 때 써요."
      },
      {
        "q": "The books on the top shelf ___ to my grandmother. 빈칸은?",
        "choices": [
          "belongs",
          "belong",
          "is belonging"
        ],
        "answer": 1,
        "explain": "주어는 shelf가 아니라 The books(복수)라서 belong이 맞아요. 동사 바로 앞의 shelf에 속으면 안 돼요."
      },
      {
        "q": "다음 문장에서 틀린 부분은? The woman carrying two bags were my teacher.",
        "choices": [
          "carrying을 carried로 바꿔야 한다",
          "bags를 bag으로 바꿔야 한다",
          "were를 was로 바꿔야 한다"
        ],
        "answer": 2,
        "explain": "주어는 The woman(단수)이므로 was를 써야 해요. carrying two bags는 주어를 꾸미는 말일 뿐이라 수일치와 관계없어요."
      },
      {
        "q": "빈칸에 알맞은 것은? To make new friends ___ not always easy.",
        "choices": [
          "are",
          "were",
          "is"
        ],
        "answer": 2,
        "explain": "to부정사 주어는 단수 취급이라 is가 맞아요. friends가 복수라고 are를 고르면 함정에 걸린 거예요."
      },
      {
        "q": "Ham and cheese ___ my favorite sandwich. 빈칸은?",
        "choices": [
          "are",
          "is",
          "have been"
        ],
        "answer": 1,
        "explain": "Ham and cheese는 샌드위치 한 종류를 가리키는 하나의 덩어리라 단수 취급해서 is를 써요. 서로 다른 두 사람이나 물건이면 are를 쓰겠지만 여기서는 아니에요."
      }
    ],
    "link": "중학교에서 배운 3인칭 단수 동사에 -s 붙이기 규칙을 '긴 주어에서도 지키기'로 확장한 거예요."
  },
  {
    "id": "h26",
    "title": "수일치 심화 (부분 표현, every/each, 관계절 속 동사)",
    "key": "some/most of는 뒤 명사에, every/each는 무조건 단수에, 관계절 동사는 선행사에 맞춰요.",
    "hook": "some of는 눈치파(뒤를 본다), every는 고집파(무조건 단수), 관계절은 효자파(선행사만 본다)!",
    "summary": "수일치의 심화 버전은 세 가지 유형만 잡으면 돼요. 첫째, some of, most of, half of, the rest of 같은 부분 표현은 of 뒤의 명사에 동사를 맞춰요. 즉 some of the water는 단수, some of the students는 복수예요. 둘째, every와 each는 뜻이 '모든, 각각'이라 복수 같지만, 뒤에 단수 명사가 오고 동사도 단수를 써요. 셋째, 관계절 안의 동사는 관계사가 아니라 앞의 선행사에 맞춰요. the people who live처럼 선행사가 복수면 관계절 동사도 복수예요. one of + 복수명사가 주어일 때는 진짜 주어가 one이라서 단수 동사를 쓰는 것도 자주 나오는 함정이에요. 유형별로 '어디를 보고 맞추는가'만 기억하면 돼요.",
    "rules": [
      "some/most/half/the rest/percent + of + 명사는 of 뒤 명사에 동사를 맞춰요.",
      "every, each 뒤에는 단수 명사 + 단수 동사가 와요. (Every student has ~)",
      "each of + 복수명사도 동사는 단수예요. (Each of the rooms has ~)",
      "관계절 속 동사는 선행사의 수에 맞춰요. (the girl who lives / the girls who live)",
      "one of + 복수명사가 주어면 동사는 단수예요. (One of my friends is ~)",
      "the number of는 단수(수 자체), a number of는 복수(많은 ~) 동사를 써요."
    ],
    "examples": [
      {
        "en": "Most of the information on this site is free.",
        "ko": "이 사이트에 있는 정보의 대부분은 무료예요."
      },
      {
        "en": "Some of my coworkers bring lunch from home.",
        "ko": "제 동료들 중 몇몇은 집에서 점심을 싸 와요."
      },
      {
        "en": "Every seat in the theater was taken.",
        "ko": "극장의 모든 좌석이 꽉 찼어요."
      },
      {
        "en": "Each of the players gets a new uniform.",
        "ko": "선수들 각자가 새 유니폼을 받아요."
      },
      {
        "en": "I have a friend who works at a bank.",
        "ko": "저는 은행에서 일하는 친구가 한 명 있어요."
      },
      {
        "en": "One of the windows was left open all night.",
        "ko": "창문 중 하나가 밤새 열려 있었어요."
      },
      {
        "en": "The number of tourists is growing every year.",
        "ko": "관광객의 수가 해마다 늘고 있어요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? Half of the pizza ___ already gone.",
        "choices": [
          "is",
          "are",
          "have"
        ],
        "answer": 0,
        "explain": "부분 표현은 of 뒤 명사에 맞추는데 the pizza가 단수라 is예요. half라는 말만 보고 복수로 착각하면 안 돼요."
      },
      {
        "q": "Every child in the class ___ a different talent. 빈칸은?",
        "choices": [
          "have",
          "has",
          "are having"
        ],
        "answer": 1,
        "explain": "every 뒤에는 단수 명사와 단수 동사가 와서 has가 맞아요. '모든'이라는 뜻 때문에 have를 고르면 함정에 빠진 거예요."
      },
      {
        "q": "다음 중 어법상 올바른 문장은?",
        "choices": [
          "One of my friends live in Canada.",
          "One of my friend lives in Canada.",
          "One of my friends lives in Canada."
        ],
        "answer": 2,
        "explain": "one of 뒤에는 복수명사(friends)가 오고 진짜 주어는 one이라 동사는 lives예요. 첫 번째는 동사, 두 번째는 명사의 수가 틀렸어요."
      },
      {
        "q": "I know a lot of people who ___ early in the morning. 빈칸은?",
        "choices": [
          "exercises",
          "exercise",
          "is exercising"
        ],
        "answer": 1,
        "explain": "관계절 동사는 선행사 people(복수)에 맞춰서 exercise예요. 바로 앞의 who만 보고 단수 동사를 고르면 안 돼요."
      },
      {
        "q": "Each of the boxes ___ carefully checked before shipping. 빈칸은?",
        "choices": [
          "were",
          "have been",
          "was"
        ],
        "answer": 2,
        "explain": "each of + 복수명사라도 주어는 each라서 단수 동사 was를 써요. boxes만 보고 were를 고르는 게 대표적인 실수예요."
      },
      {
        "q": "다음 문장에서 틀린 부분은? Some of the students in my class comes from Jeju.",
        "choices": [
          "Some을 Any로 바꿔야 한다",
          "comes를 come으로 바꿔야 한다",
          "students를 student로 바꿔야 한다"
        ],
        "answer": 1,
        "explain": "some of 뒤의 the students가 복수니까 동사도 복수 come이어야 해요. Some 자체는 아무 문제가 없어요."
      },
      {
        "q": "A number of shops in this street ___ closed last month. 빈칸은?",
        "choices": [
          "were",
          "was",
          "has"
        ],
        "answer": 0,
        "explain": "a number of는 '많은 ~'이라는 뜻으로 복수 취급해서 were가 맞아요. the number of(~의 수)와 헷갈려서 was를 고르면 틀려요."
      }
    ],
    "link": "중학교에서 배운 some/any와 관계대명사 who/which에 '동사를 어디에 맞출지' 규칙을 얹은 거예요."
  },
  {
    "id": "h27",
    "title": "시제 일치와 화법 전환",
    "key": "주절이 과거면 종속절도 한 시제 뒤로, 남의 말을 옮길 땐 시제·대명사·시간 표현을 바꿔요.",
    "hook": "과거로 가는 타임머신을 타면 문장 속 모두가 같이 한 칸씩 과거로 밀려나요!",
    "summary": "시제 일치는 주절 동사가 과거일 때 그 뒤에 오는 절의 시제도 한 단계 과거로 맞추는 규칙이에요. He says he is busy가 과거가 되면 He said he was busy가 돼요. 화법 전환은 남이 한 말을 따옴표 그대로(직접화법) 전하느냐, 내 문장 속에 녹여서(간접화법) 전하느냐의 차이예요. 간접화법으로 바꿀 때는 시제를 한 칸 뒤로, 대명사는 말하는 사람 기준으로, now는 then, today는 that day처럼 시간 표현도 바꿔요. 의문문을 옮길 때는 asked를 쓰고 어순은 평서문으로 돌려놓아야 해요. 다만 '지구는 둥글다' 같은 변하지 않는 사실은 주절이 과거여도 현재형을 그대로 써요. 규칙이 많아 보여도 결국 '말한 시점 기준으로 자연스럽게 밀어내기' 하나예요.",
    "rules": [
      "주절이 과거면 종속절 시제도 한 단계 과거로 써요. (is → was, will → would)",
      "종속절의 과거는 과거완료(had + p.p.)로 바꿔요.",
      "변하지 않는 진리·습관은 주절이 과거여도 현재형을 유지해요.",
      "간접화법에서 say to는 tell로 바꾸고, that절로 연결해요.",
      "의문문 전환은 ask를 쓰고, 의문사가 없으면 if/whether를 붙이며 어순은 평서문으로 돌려요.",
      "대명사와 시간·장소 표현도 바꿔요. (I → he/she, now → then, here → there, tomorrow → the next day)"
    ],
    "examples": [
      {
        "en": "I thought the movie was boring.",
        "ko": "저는 그 영화가 지루하다고 생각했어요."
      },
      {
        "en": "She said that she would call me back.",
        "ko": "그녀는 저에게 다시 전화하겠다고 말했어요."
      },
      {
        "en": "He told me that he had lost his keys.",
        "ko": "그는 저에게 열쇠를 잃어버렸다고 말했어요."
      },
      {
        "en": "Our teacher said that the Earth goes around the Sun.",
        "ko": "선생님은 지구가 태양 주위를 돈다고 말씀하셨어요."
      },
      {
        "en": "She asked me if I was free that day.",
        "ko": "그녀는 제가 그날 시간이 있는지 물었어요."
      },
      {
        "en": "He asked me where I lived.",
        "ko": "그는 제가 어디에 사는지 물었어요."
      },
      {
        "en": "Mina said that she was tired then.",
        "ko": "미나는 그때 자기가 피곤하다고 말했어요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? I didn't know that she ___ a famous singer.",
        "choices": [
          "is",
          "was",
          "will be"
        ],
        "answer": 1,
        "explain": "주절 didn't know가 과거니까 종속절도 was로 맞춰요. is를 쓰면 시제 일치가 깨져요."
      },
      {
        "q": "He said, \"I will visit you tomorrow.\"를 간접화법으로 바르게 바꾼 것은?",
        "choices": [
          "He said that he will visit me tomorrow.",
          "He said that I would visit him tomorrow.",
          "He said that he would visit me the next day."
        ],
        "answer": 2,
        "explain": "will은 would로, tomorrow는 the next day로, I는 말한 사람인 he로 바꿔야 해요. 첫 번째는 시제, 두 번째는 대명사가 안 바뀌어서 틀렸어요."
      },
      {
        "q": "She asked me, \"Do you like coffee?\"를 간접화법으로 바르게 바꾼 것은?",
        "choices": [
          "She asked me if I liked coffee.",
          "She asked me did I like coffee.",
          "She asked me that I liked coffee."
        ],
        "answer": 0,
        "explain": "의문사 없는 의문문은 if를 붙이고 평서문 어순으로 바꿔서 if I liked coffee가 돼요. did I like처럼 의문문 어순을 그대로 두면 틀려요."
      },
      {
        "q": "The teacher said that water ___ at 100 degrees Celsius. 빈칸은?",
        "choices": [
          "boiled",
          "had boiled",
          "boils"
        ],
        "answer": 2,
        "explain": "물이 100도에서 끓는 건 변하지 않는 사실이라 주절이 과거여도 현재형 boils를 써요. 무조건 과거로 바꾸는 게 아니라는 예외예요."
      },
      {
        "q": "He told me that he ___ the report the day before. 빈칸은?",
        "choices": [
          "finishes",
          "had finished",
          "will finish"
        ],
        "answer": 1,
        "explain": "말한 시점보다 더 전에 끝낸 일이니 과거완료 had finished를 써요. 과거보다 더 과거는 had + p.p.로 표현해요."
      },
      {
        "q": "다음 문장에서 틀린 부분은? She said to me that she was hungry now.",
        "choices": [
          "said to를 told로, now를 then으로 바꿔야 한다",
          "was를 is로 바꿔야 한다",
          "that을 what으로 바꿔야 한다"
        ],
        "answer": 0,
        "explain": "간접화법에서는 said to me보다 told me가 자연스럽고, now는 then으로 바꿔야 해요. was는 시제 일치가 된 올바른 형태예요."
      },
      {
        "q": "He asked me ___ I had seen his phone. 빈칸에 들어갈 수 없는 것은?",
        "choices": [
          "whether",
          "that",
          "if"
        ],
        "answer": 1,
        "explain": "의문사 없는 질문을 옮길 때는 if나 whether를 써요. that은 질문이 아니라 평서문을 옮길 때 쓰는 말이에요."
      }
    ],
    "link": "중학교에서 배운 현재·과거·미래 시제와 that절을 합쳐서 '시점 맞추기'로 발전시킨 거예요."
  },
  {
    "id": "h28",
    "title": "부정 표현 (부분부정·전체부정·이중부정)",
    "key": "not + all/always는 '다 그런 건 아니다', no/never는 '하나도 아니다', 부정 두 번은 강한 긍정이에요.",
    "hook": "not all은 반쪽 부정, never는 완전 부정, 부정 곱하기 부정은 수학처럼 플러스!",
    "summary": "영어의 부정에는 세 가지 얼굴이 있어요. 첫 번째는 부분부정으로, not이 all, every, always, both 같은 '전부'를 뜻하는 말과 만나면 '전부 ~한 것은 아니다'라는 뜻이 돼요. Not all students like math는 '수학을 싫어하는 학생도 있다'는 뜻이지 '모두 싫어한다'가 아니에요. 두 번째는 전체부정으로, no, none, never, neither를 쓰면 '하나도, 전혀 ~않다'가 돼요. 세 번째는 이중부정인데, 한 문장에 부정이 두 번 들어가면 서로 상쇄되어 강한 긍정이 돼요. There is no one who doesn't like her는 '모두가 그녀를 좋아한다'는 뜻이에요. 부정어가 어디까지 부정하는지만 따지면 해석이 훨씬 정확해져요.",
    "rules": [
      "not + all/every/always/both/necessarily는 부분부정으로 '전부(항상) ~한 것은 아니다'예요.",
      "no, none, never, neither, not ~ any는 전체부정으로 '전혀 ~않다'예요.",
      "both의 부정은 부분부정(둘 다는 아님), neither는 전체부정(둘 다 아님)이에요.",
      "이중부정(never ~ without, no ~ not 등)은 강한 긍정의 뜻이 돼요.",
      "never ~ without -ing는 '~하면 반드시 ~한다'로 해석해요.",
      "영어는 한 문장에 부정어를 하나만 쓰는 게 원칙이에요. (I don't know nothing은 비표준)"
    ],
    "examples": [
      {
        "en": "Not all coffee shops open early in the morning.",
        "ko": "모든 커피숍이 아침 일찍 문을 여는 것은 아니에요."
      },
      {
        "en": "The rich are not always happy.",
        "ko": "부자라고 항상 행복한 것은 아니에요."
      },
      {
        "en": "I don't like both of these shirts.",
        "ko": "이 셔츠 둘 다 마음에 드는 것은 아니에요."
      },
      {
        "en": "None of the answers were correct.",
        "ko": "그 답들 중 맞는 것은 하나도 없었어요."
      },
      {
        "en": "Neither of my parents can speak French.",
        "ko": "저희 부모님은 두 분 다 프랑스어를 못 하세요."
      },
      {
        "en": "She never goes out without taking her phone.",
        "ko": "그녀는 외출할 때 반드시 휴대폰을 챙겨요."
      },
      {
        "en": "It is not impossible to finish this today.",
        "ko": "오늘 이것을 끝내는 게 불가능한 일은 아니에요."
      }
    ],
    "quiz": [
      {
        "q": "Not every student passed the exam.의 올바른 해석은?",
        "choices": [
          "모든 학생이 시험에 떨어졌어요.",
          "모든 학생이 시험에 합격한 것은 아니에요.",
          "어떤 학생도 시험을 보지 않았어요."
        ],
        "answer": 1,
        "explain": "not + every는 부분부정이라 '전부 합격한 것은 아니다', 즉 합격한 사람도 떨어진 사람도 있다는 뜻이에요. '모두 떨어졌다'는 전체부정으로 착각한 해석이에요."
      },
      {
        "q": "'그 두 영화 다 안 봤어요(하나도 안 봄)'를 바르게 표현한 것은?",
        "choices": [
          "I haven't seen both of the movies.",
          "I haven't seen all the movies.",
          "I have seen neither of the movies."
        ],
        "answer": 2,
        "explain": "둘 다 아닌 전체부정은 neither를 써요. not both는 '둘 다 본 것은 아니다'라는 부분부정이라 하나는 봤을 수도 있다는 뜻이 돼요."
      },
      {
        "q": "He never visits Busan without eating milmyeon.의 뜻은?",
        "choices": [
          "그는 부산에 가면 반드시 밀면을 먹어요.",
          "그는 부산에서 절대 밀면을 먹지 않아요.",
          "그는 밀면을 먹으러 부산에 가지 않아요."
        ],
        "answer": 0,
        "explain": "never ~ without은 이중부정이라 '~하면 반드시 ~한다'는 강한 긍정이에요. 부정어가 두 개라고 부정으로 해석하면 정반대 뜻이 돼요."
      },
      {
        "q": "빈칸에 알맞은 것은? ___ of the three plans worked, so we had to start over.",
        "choices": [
          "Some",
          "All",
          "None"
        ],
        "answer": 2,
        "explain": "처음부터 다시 해야 했다는 내용이니 '하나도 성공하지 못했다'는 전체부정 None이 맞아요. Some이나 All이면 다시 시작할 이유가 약해져요."
      },
      {
        "q": "It is not uncommon to see foreigners in this town.의 뜻에 가장 가까운 것은?",
        "choices": [
          "이 동네에서 외국인을 보는 것은 드문 일이에요.",
          "이 동네에서 외국인을 보는 것은 꽤 흔한 일이에요.",
          "이 동네에는 외국인이 전혀 없어요."
        ],
        "answer": 1,
        "explain": "not + uncommon은 부정이 두 번 겹쳐서 '드물지 않다', 즉 흔하다는 긍정의 뜻이 돼요. 첫 번째 보기는 not을 빼먹은 해석이에요."
      },
      {
        "q": "다음 중 '항상 옳은 것은 아니다'라는 부분부정 문장은?",
        "choices": [
          "The news is never right.",
          "The news is not right at all.",
          "The news is not always right."
        ],
        "answer": 2,
        "explain": "not always가 '항상 ~한 것은 아니다'라는 부분부정이에요. never와 not ~ at all은 '전혀 아니다'라는 전체부정이라 뜻이 달라요."
      },
      {
        "q": "다음 문장에서 표준 영어로 고쳐야 할 부분은? I didn't tell nobody about the surprise party.",
        "choices": [
          "nobody를 anybody로 바꿔야 한다",
          "didn't를 don't로 바꿔야 한다",
          "about을 to로 바꿔야 한다"
        ],
        "answer": 0,
        "explain": "영어는 한 문장에 부정어를 하나만 쓰는 게 원칙이라 didn't ~ anybody로 써야 해요. didn't nobody처럼 부정을 겹치면 비표준 표현이 돼요."
      }
    ],
    "link": "중학교에서 배운 not, no, never의 기본 부정을 '어디까지 부정하는가'라는 범위 문제로 확장한 거예요."
  },
  {
    "id": "h29",
    "title": "비교 구문 심화 (배수 표현, the 비교급 the 비교급, 최상급 표현)",
    "key": "배수는 '배수사 + as 원급 as', 비례는 'The 비교급, the 비교급', 최상급은 원급·비교급으로도 바꿔 쓸 수 있어요.",
    "hook": "곱하기(three times)로 재고, 시소(the more, the more)처럼 같이 움직이고, 1등은 세 가지 옷(원급·비교급·최상급)을 갈아입어요!",
    "summary": "비교 구문의 심화 버전을 배워 볼게요. 먼저 '몇 배'를 말할 때는 twice, three times 같은 배수사를 as ~ as 앞에 붙여서 'three times as big as(3배만큼 큰)'처럼 써요. 두 번째로 'The 비교급 + 주어 + 동사, the 비교급 + 주어 + 동사'는 '~하면 할수록 더 …하다'라는 비례 관계를 나타내요. 이때 문장 맨 앞의 the를 빼먹으면 안 돼요. 세 번째로 최상급의 뜻은 최상급 없이도 표현할 수 있어요. 예를 들어 'No other student is taller than Mina(미나보다 키 큰 학생은 없다)'는 결국 미나가 제일 크다는 뜻이에요. 'one of the 최상급 + 복수명사(가장 ~한 것들 중 하나)' 뒤에 복수명사가 온다는 점도 시험 단골이에요.",
    "rules": [
      "배수 표현: 배수사(twice, three times ...) + as + 원급 + as = '~의 몇 배만큼 …한'. three times 이상은 'three times + 비교급 + than'으로도 써요.",
      "'The 비교급 + 주어 + 동사, the 비교급 + 주어 + 동사' = '~하면 할수록 더 …해요'. 양쪽 모두 the가 필요해요.",
      "최상급 = 'No (other) + 단수명사 ... 비교급 + than A' 또는 'A ... 비교급 + than any other + 단수명사'로 바꿔 쓸 수 있어요.",
      "one of the + 최상급 + 복수명사: '가장 ~한 것들 중 하나'. 명사는 반드시 복수형이에요.",
      "비교급 강조는 much, even, far, still, a lot을 써요. very는 비교급을 강조할 수 없어요.",
      "최상급 강조는 by far, much를 쓰고, 범위는 in + 장소/집단, of + 복수명사로 나타내요."
    ],
    "examples": [
      {
        "en": "This bridge is three times as long as that one.",
        "ko": "이 다리는 저 다리보다 세 배만큼 길어요."
      },
      {
        "en": "The more you practice, the better you will speak English.",
        "ko": "연습하면 할수록 영어를 더 잘 말하게 될 거예요."
      },
      {
        "en": "No other city in Korea is bigger than Seoul.",
        "ko": "한국의 어떤 다른 도시도 서울보다 크지 않아요. (서울이 제일 커요.)"
      },
      {
        "en": "Seoul is bigger than any other city in Korea.",
        "ko": "서울은 한국의 다른 어떤 도시보다도 커요."
      },
      {
        "en": "This is one of the most popular songs in the world.",
        "ko": "이것은 세계에서 가장 인기 있는 노래들 중 하나예요."
      },
      {
        "en": "My new phone is much faster than my old one.",
        "ko": "제 새 휴대폰은 예전 것보다 훨씬 빨라요."
      },
      {
        "en": "The higher we climbed, the colder the air became.",
        "ko": "우리가 높이 올라갈수록 공기는 더 차가워졌어요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? This room is twice ______ mine.",
        "choices": [
          "as large as",
          "larger as",
          "as larger as"
        ],
        "answer": 0,
        "explain": "배수사 twice 뒤에는 'as + 원급 + as'가 와요. as 사이에는 비교급(larger)이 아니라 원급(large)을 써야 해요."
      },
      {
        "q": "'네가 많이 읽을수록 더 많이 알게 된다'를 바르게 쓴 것은?",
        "choices": [
          "More you read, more you know.",
          "The more you read, the more you know.",
          "The most you read, the most you know."
        ],
        "answer": 1,
        "explain": "'~할수록 더 …하다'는 'The 비교급, the 비교급' 구문이에요. 양쪽에 the가 꼭 붙어야 하고, 최상급(most)이 아니라 비교급을 써요."
      },
      {
        "q": "다음 중 어법상 틀린 부분이 있는 문장은?",
        "choices": [
          "He is one of the fastest runners in his school.",
          "She is one of the smartest student in her class.",
          "This is one of the oldest buildings in the city."
        ],
        "answer": 1,
        "explain": "'one of the 최상급' 뒤에는 복수명사가 와야 하므로 student가 아니라 students가 맞아요. 나머지 두 문장은 runners, buildings로 올바르게 복수형이에요."
      },
      {
        "q": "'Nothing is more important than health.'와 뜻이 같은 문장은?",
        "choices": [
          "Health is less important than anything.",
          "Health is as important as nothing.",
          "Health is the most important thing."
        ],
        "answer": 2,
        "explain": "'어떤 것도 건강보다 중요하지 않다'는 결국 '건강이 가장 중요하다'는 최상급 의미예요. 첫 번째 보기는 반대로 건강이 덜 중요하다는 뜻이 돼요."
      },
      {
        "q": "비교급을 강조할 수 없는 단어는?",
        "choices": [
          "very",
          "much",
          "far"
        ],
        "answer": 0,
        "explain": "비교급 강조는 much, far, even, still, a lot이 담당해요. very는 원급(very tall)만 꾸밀 수 있고 비교급 앞에는 못 와요."
      },
      {
        "q": "빈칸에 알맞은 것은? Mt. Everest is higher than ______ mountain in the world.",
        "choices": [
          "any other",
          "all other",
          "some other"
        ],
        "answer": 0,
        "explain": "최상급 의미를 나타내는 '비교급 + than any other + 단수명사' 구문이에요. any other 뒤에 단수명사 mountain이 오는 형태를 통째로 외워 두세요."
      },
      {
        "q": "우리말과 같도록 빈칸에 알맞은 것은? '날이 어두워질수록 우리는 더 무서워졌어요.' → The darker it got, ______ we became.",
        "choices": [
          "the scared",
          "more scared",
          "the more scared"
        ],
        "answer": 2,
        "explain": "뒤쪽도 'the + 비교급' 형태여야 하므로 the more scared가 맞아요. the나 more 중 하나라도 빠지면 비례 구문이 성립하지 않아요."
      }
    ],
    "link": "중학교에서 배운 'as 원급 as'와 '비교급 + than'에 배수사, the, no other를 얹으면 그대로 고등 비교 구문이 돼요."
  },
  {
    "id": "h30",
    "title": "원급·비교급 관용 표현",
    "key": "no more than은 '겨우(only)', not more than은 '많아야(at most)' — no와 not의 온도 차를 기억하세요.",
    "hook": "no는 감정을 팍 담아 '겨우 이것뿐?!', not은 담담하게 '많아 봐야 그 정도'라고 말하는 츤데레 콤비예요!",
    "summary": "원급과 비교급에는 통째로 외워야 하는 관용 표현들이 있어요. 'as ~ as possible'은 '가능한 한 ~하게'라는 뜻으로, 'as ~ as one can'으로 바꿔 쓸 수 있어요. 'no more than'은 '겨우, 단지(only)'라는 아쉬운 느낌이고, 'not more than'은 '많아야(at most)'라는 담담한 계산이에요. 반대로 'no less than'은 '자그마치(as much as)', 'not less than'은 '적어도(at least)'예요. 'not so much A as B'는 'A라기보다는 B'라는 뜻으로 독해에 자주 나와요. 'know better than to 동사원형'은 '~할 만큼 어리석지 않다'는 표현이에요. 이런 표현들은 문법 규칙보다 숙어처럼 뜻을 통째로 기억하는 게 제일 빨라요.",
    "rules": [
      "as ~ as possible = as ~ as one can: '가능한 한 ~하게'",
      "no more than = only '겨우' / not more than = at most '많아야'",
      "no less than = as much as '자그마치' / not less than = at least '적어도'",
      "not so much A as B: 'A라기보다는 (오히려) B'",
      "know better than to 동사원형: '~할 만큼 어리석지 않다'",
      "no longer = not ~ any longer: '더 이상 ~않다'"
    ],
    "examples": [
      {
        "en": "Please call me back as soon as possible.",
        "ko": "가능한 한 빨리 저에게 다시 전화해 주세요."
      },
      {
        "en": "He had no more than ten dollars in his pocket.",
        "ko": "그는 주머니에 겨우 10달러밖에 없었어요."
      },
      {
        "en": "The repair will cost not more than fifty dollars.",
        "ko": "그 수리는 많아야 50달러밖에 안 들 거예요."
      },
      {
        "en": "She paid no less than a million won for the ticket.",
        "ko": "그녀는 그 티켓에 자그마치 백만 원이나 냈어요."
      },
      {
        "en": "He is not so much a singer as an actor.",
        "ko": "그는 가수라기보다는 배우예요."
      },
      {
        "en": "I know better than to trust a stranger online.",
        "ko": "저는 온라인에서 낯선 사람을 믿을 만큼 어리석지 않아요."
      },
      {
        "en": "She no longer lives in this town.",
        "ko": "그녀는 더 이상 이 마을에 살지 않아요."
      }
    ],
    "quiz": [
      {
        "q": "'Run as fast as you can.'과 뜻이 같은 문장은?",
        "choices": [
          "Run as fast as possible.",
          "Run faster than you can.",
          "Run as possible as fast."
        ],
        "answer": 0,
        "explain": "'as ~ as one can'은 'as ~ as possible'과 같은 뜻이에요. 세 번째 보기는 possible과 fast의 위치가 뒤바뀐 엉터리 어순이에요."
      },
      {
        "q": "밑줄 친 부분의 뜻은? He slept for no more than three hours.",
        "choices": [
          "적어도 세 시간",
          "겨우 세 시간",
          "많아야 세 시간"
        ],
        "answer": 1,
        "explain": "no more than은 only, 즉 '겨우'라는 아쉬움을 담은 표현이에요. '많아야(at most)'는 not more than이니 헷갈리지 마세요."
      },
      {
        "q": "빈칸에 알맞은 것은? His success was ______ luck as hard work.",
        "choices": [
          "not as much",
          "not so many",
          "not so much"
        ],
        "answer": 2,
        "explain": "'A라기보다는 B'는 not so much A as B로 써요. luck은 셀 수 없는 명사라서가 아니라, 이 표현 자체가 so much로 굳어진 숙어이기 때문에 many를 쓰면 틀려요."
      },
      {
        "q": "'그는 거짓말을 할 만큼 어리석지 않다'를 바르게 쓴 것은?",
        "choices": [
          "He knows better than to tell a lie.",
          "He knows better than telling a lie.",
          "He knows well than to tell a lie."
        ],
        "answer": 0,
        "explain": "know better than 뒤에는 to부정사가 와요. 동명사(telling)를 쓰거나 better 대신 well을 쓰면 숙어가 깨져요."
      },
      {
        "q": "'not less than 20 people'의 뜻으로 알맞은 것은?",
        "choices": [
          "겨우 20명",
          "많아야 20명",
          "적어도 20명"
        ],
        "answer": 2,
        "explain": "not less than은 at least, 즉 '적어도'예요. '겨우'는 no more than, '많아야'는 not more than이 담당해요."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "I can no longer wait for him.",
          "I cannot wait for him any longer.",
          "I can no any longer wait for him."
        ],
        "answer": 2,
        "explain": "no longer와 not ~ any longer는 둘 중 하나만 써야 해요. no와 any longer를 한 문장에 겹쳐 쓰면 부정이 뒤엉켜서 틀린 문장이 돼요."
      },
      {
        "q": "빈칸에 알맞은 것은? She donated ______ than one billion won. (자그마치 10억 원이나)",
        "choices": [
          "not less",
          "no less",
          "no more"
        ],
        "answer": 1,
        "explain": "'자그마치, ~씩이나'라는 놀라움은 no less than이에요. not less than은 '적어도', no more than은 '겨우'라서 뜻이 달라져요."
      }
    ],
    "link": "중학교 때 외운 'as soon as possible'이 바로 원급 관용 표현의 출발점이에요. 여기에 no/not 시리즈만 더하면 돼요."
  },
  {
    "id": "h31",
    "title": "가주어·가목적어 it",
    "key": "긴 주어·목적어는 뒤로 보내고, 그 빈자리에 대타 선수 it을 세워요.",
    "hook": "it은 자리만 지키는 알바생이에요. 진짜 사장님(to부정사·that절)은 항상 문장 뒤쪽 사무실에 계세요!",
    "summary": "영어는 머리(주어)가 무거운 문장을 싫어해요. 그래서 to부정사구나 that절처럼 긴 주어는 문장 뒤로 보내고, 원래 자리에는 뜻이 없는 가주어 it을 놓아요. 'It is important to exercise every day.'에서 it은 해석하지 않고, 진짜 주어는 뒤의 to exercise every day예요. 목적어 자리에서도 똑같은 일이 벌어져요. make, find, think, believe, consider 같은 동사는 5형식에서 ' 동사 + it + 형용사 + to부정사' 형태로 가목적어 it을 써요. 예를 들어 'I found it difficult to solve the problem.'에서 it이 가목적어, to solve 이하가 진목적어예요. 가목적어 자리에 it을 빼먹는 것이 시험에서 가장 많이 나오는 함정이에요.",
    "rules": [
      "가주어 구문: It + be동사 + 형용사/명사 + to부정사/that절. it은 해석하지 않아요.",
      "to부정사의 의미상 주어는 'for + 목적격'으로 써요. (It is hard for me to ...)",
      "kind, nice, foolish처럼 사람의 성격을 나타내는 형용사 뒤에는 'of + 목적격'을 써요.",
      "가목적어 구문: make/find/think/believe/consider + it + 형용사(명사) + to부정사/that절.",
      "가목적어 it은 생략할 수 없어요. 'I found difficult to ~'는 틀린 문장이에요.",
      "It seems that ~, It is said that ~ 같은 굳어진 가주어 표현도 함께 기억해요."
    ],
    "examples": [
      {
        "en": "It is important to drink enough water every day.",
        "ko": "매일 물을 충분히 마시는 것은 중요해요."
      },
      {
        "en": "It was surprising that she passed the exam on her first try.",
        "ko": "그녀가 첫 시도에 시험에 합격했다는 것은 놀라웠어요."
      },
      {
        "en": "It is hard for me to get up early in winter.",
        "ko": "겨울에 일찍 일어나는 것은 저에게 힘들어요."
      },
      {
        "en": "It was very kind of you to help the old man.",
        "ko": "그 노인을 도와주시다니 당신은 정말 친절하셨어요."
      },
      {
        "en": "I found it difficult to explain my feelings in English.",
        "ko": "제 감정을 영어로 설명하는 것이 어렵다는 걸 알게 됐어요."
      },
      {
        "en": "The internet makes it possible to work from home.",
        "ko": "인터넷은 집에서 일하는 것을 가능하게 해 줘요."
      },
      {
        "en": "She thought it strange that the door was open.",
        "ko": "그녀는 문이 열려 있는 것을 이상하게 생각했어요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? I think ______ important to keep a diary.",
        "choices": [
          "that",
          "it",
          "this"
        ],
        "answer": 1,
        "explain": "think + 가목적어 it + 형용사 + to부정사 구조예요. 진짜 목적어인 to keep a diary가 뒤에 있으니 자리 지킴이 it이 필요해요."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "It is fun to play board games.",
          "The app made easy to order food.",
          "It seems that he is tired."
        ],
        "answer": 1,
        "explain": "made 뒤에 가목적어 it이 빠졌어요. 'made it easy to order food'가 맞아요. 가목적어 it은 절대 생략할 수 없어요."
      },
      {
        "q": "빈칸에 알맞은 것은? It was foolish ______ him to believe the rumor.",
        "choices": [
          "of",
          "for",
          "to"
        ],
        "answer": 0,
        "explain": "foolish는 사람의 성격·성질을 나타내는 형용사라서 의미상 주어를 'of + 목적격'으로 써요. hard, easy 같은 일반 형용사였다면 for를 썼을 거예요."
      },
      {
        "q": "'To learn a new language is not easy.'를 가주어 구문으로 바르게 바꾼 것은?",
        "choices": [
          "It is not easy learn a new language.",
          "That is not easy to learn a new language.",
          "It is not easy to learn a new language."
        ],
        "answer": 2,
        "explain": "긴 주어 to learn ~을 뒤로 보내고 가주어 It을 앞에 세우면 돼요. 가주어는 That이 아니라 반드시 It이고, to도 빠지면 안 돼요."
      },
      {
        "q": "밑줄 친 It의 쓰임이 나머지와 다른 것은?",
        "choices": [
          "It is true that he moved to Busan.",
          "It is my favorite book about space.",
          "It is impossible to finish this today."
        ],
        "answer": 1,
        "explain": "두 번째 It은 '그것'이라고 해석되는 진짜 대명사예요. 나머지 둘은 that절과 to부정사를 대신하는, 해석하지 않는 가주어예요."
      },
      {
        "q": "빈칸에 알맞은 것은? Smartphones make ______ to find directions anywhere.",
        "choices": [
          "it easy",
          "easy it",
          "easily"
        ],
        "answer": 0,
        "explain": "make + it + 형용사 + to부정사 어순이에요. it이 먼저, 형용사가 다음이에요. 부사 easily는 목적격보어 자리에 올 수 없어요."
      },
      {
        "q": "빈칸에 알맞은 것은? It is difficult ______ children to sit still for an hour.",
        "choices": [
          "of",
          "with",
          "for"
        ],
        "answer": 2,
        "explain": "difficult는 성격 형용사가 아니므로 의미상 주어는 'for + 목적격'이에요. of는 kind, nice, foolish 같은 성격 형용사 전용이에요."
      }
    ],
    "link": "중학교에서 배운 'It is fun to swim.'의 It이 바로 가주어예요. 고등에서는 이 it이 목적어 자리(가목적어)까지 진출해요."
  },
  {
    "id": "h32",
    "title": "생략과 공통 구문 (대부정사 포함)",
    "key": "반복되는 말은 지우되, 대부정사는 to 하나만 남겨서 '아까 그거!'라고 신호를 보내요.",
    "hook": "영어도 말 줄이기의 달인이에요. 'ㅇㅋ'처럼 to 한 글자만 남겨도 다 알아들어요!",
    "summary": "영어는 한 번 말한 내용을 다시 말하는 걸 싫어해서, 반복되는 부분을 과감히 생략해요. 부사절에서 '주어 + be동사'는 주절의 주어와 같을 때 생략할 수 있어요. 'While (I was) walking home, I met Jane.'처럼요. 대부정사는 앞에 나온 동사구를 반복하는 대신 to만 남기는 것이에요. 'You can leave early if you want to (leave early).'에서 to 하나가 leave early 전체를 대신해요. 공통 구문은 두 개의 동사나 어구가 하나의 목적어나 어구를 함께 쓰는 구조예요. 'He can and will pass the exam.'에서 can과 will이 pass the exam을 공유하고 있어요. 생략된 말을 머릿속으로 되살려서 읽는 연습이 독해의 핵심이에요.",
    "rules": [
      "부사절의 '주어 + be동사'는 주절의 주어와 같으면 생략 가능해요. (when, while, if, though 뒤)",
      "대부정사: 앞에 나온 동사구의 반복을 피해 to만 남겨요. (want to, hope to, would like to 뒤에서 자주)",
      "if possible(가능하다면), if necessary(필요하다면) 같은 굳어진 생략 표현을 외워 두세요.",
      "공통 구문: A and B가 하나의 목적어를 공유해요. (He wrote and directed the movie.)",
      "반복되는 동사는 조동사나 do로 대신할 수 있어요. (She sings better than I do.)",
      "생략을 발견하면 무엇이 빠졌는지 복원해서 해석해야 오역을 막을 수 있어요."
    ],
    "examples": [
      {
        "en": "While waiting for the bus, I listened to music.",
        "ko": "버스를 기다리는 동안 저는 음악을 들었어요. (While 뒤에 I was가 생략)"
      },
      {
        "en": "You don't have to come, but I hope you want to.",
        "ko": "안 오셔도 되지만, 오고 싶어 하시길 바라요. (to 뒤에 come이 생략)"
      },
      {
        "en": "Call me tonight, if possible.",
        "ko": "가능하다면 오늘 밤에 전화해 주세요. (if 뒤에 it is가 생략)"
      },
      {
        "en": "He wrote and directed this famous movie.",
        "ko": "그가 이 유명한 영화를 쓰고 감독했어요. (wrote와 directed가 목적어를 공유)"
      },
      {
        "en": "I asked him to join us, but he didn't want to.",
        "ko": "저는 그에게 함께하자고 했지만, 그는 그러고 싶어 하지 않았어요."
      },
      {
        "en": "Though tired, she finished the report before midnight.",
        "ko": "피곤했지만 그녀는 자정 전에 보고서를 끝냈어요. (Though 뒤에 she was가 생략)"
      },
      {
        "en": "My brother eats much more than I do.",
        "ko": "제 남동생은 저보다 훨씬 많이 먹어요. (do가 eat을 대신)"
      }
    ],
    "quiz": [
      {
        "q": "'When (   ) young, he lived in a small village.' 괄호에 생략된 말은?",
        "choices": [
          "he is",
          "he was",
          "it was"
        ],
        "answer": 1,
        "explain": "부사절에서는 주절의 주어와 같은 '주어 + be동사'가 생략돼요. 주절이 과거(lived)이므로 he was가 생략된 거예요."
      },
      {
        "q": "밑줄 친 to가 대신하는 것은? You can borrow my umbrella if you need to.",
        "choices": [
          "borrow my umbrella",
          "need my umbrella",
          "can borrow"
        ],
        "answer": 0,
        "explain": "대부정사 to는 바로 앞 문맥의 동사구를 통째로 대신해요. 여기서는 '내 우산을 빌리다(borrow my umbrella)' 전체를 가리켜요."
      },
      {
        "q": "빈칸에 알맞은 것은? I didn't go to the party, but I really wanted ______.",
        "choices": [
          "to",
          "it",
          "so"
        ],
        "answer": 0,
        "explain": "wanted 뒤에 to go to the party의 반복을 피하려고 to만 남기는 대부정사를 써요. it이나 so는 want의 이런 용법과 어울리지 않아요."
      },
      {
        "q": "'She speaks Japanese better than I speak Japanese.'를 자연스럽게 줄인 것은?",
        "choices": [
          "She speaks Japanese better than I am.",
          "She speaks Japanese better than I do.",
          "She speaks Japanese better than do."
        ],
        "answer": 1,
        "explain": "일반동사 speak의 반복은 do로 대신해요. be동사(am)는 일반동사를 대신할 수 없고, 주어 I를 통째로 지우는 것도 안 돼요."
      },
      {
        "q": "다음 문장에서 hot and iced가 공유하는 말은? The cafe serves hot and iced coffee.",
        "choices": [
          "serves",
          "coffee",
          "the cafe"
        ],
        "answer": 1,
        "explain": "hot coffee와 iced coffee에서 반복되는 coffee를 한 번만 쓴 공통 구문이에요. 두 형용사가 명사 coffee 하나를 나눠 쓰고 있어요."
      },
      {
        "q": "'if necessary'의 알맞은 해석은?",
        "choices": [
          "필요하다면",
          "필요했기 때문에",
          "필요할 리 없지만"
        ],
        "answer": 0,
        "explain": "if (it is) necessary에서 it is가 생략된 굳어진 표현으로 '필요하다면'이라는 뜻이에요. 이유(because)의 뜻은 없어요."
      },
      {
        "q": "다음 중 어법상 어색한 문장은?",
        "choices": [
          "Though sleepy, I kept studying.",
          "You may use my pen if you want to.",
          "While watched TV, she fell asleep."
        ],
        "answer": 2,
        "explain": "While 뒤에 she was를 생략하려면 능동 진행의 watching이 남아야 해요. watched를 쓰면 '그녀가 TV에게 시청당하는' 이상한 뜻이 돼요."
      }
    ],
    "link": "중학교 비교 구문에서 'than I do'의 do를 배웠다면, 이제 그 '반복 줄이기' 원리를 부사절과 to부정사까지 넓히는 거예요."
  },
  {
    "id": "h33",
    "title": "삽입과 동격",
    "key": "삽입은 콤마 사이에 끼어든 참견, 동격은 명사를 다시 설명해 주는 친절한 이름표예요.",
    "hook": "삽입어구는 문장 사이에 끼어든 수다쟁이 친구 — 괄호 치고 건너뛰어도 문장은 멀쩡해요!",
    "summary": "삽입은 문장 중간에 콤마나 대시로 다른 말이 끼어드는 것이에요. I think, I believe, it seems 같은 표현이 관계사절 안에 끼어들면 'the man who I think is honest(내 생각에 정직한 그 남자)'처럼 돼요. 이때 I think를 괄호로 묶고 건너뛰면 문장 구조가 선명하게 보여요. however, therefore 같은 연결 부사도 콤마와 함께 문장 중간에 삽입될 수 있어요. 동격은 명사 바로 뒤에 그 명사를 다시 설명하는 말을 붙이는 것이에요. 'my friend Tom(내 친구 톰)'처럼 명사끼리 나란히 놓기도 하고, 'the fact that he lied(그가 거짓말했다는 사실)'처럼 that절로 내용을 풀어 주기도 해요. 동격의 that절은 관계대명사절과 달리 뒤 문장이 완전하다는 점이 구별 포인트예요.",
    "rules": [
      "삽입어구는 콤마, 대시, 괄호로 표시되며 빼도 문장이 성립해요.",
      "관계사절 속 삽입: who/which 뒤에 I think, I believe 등이 끼어들어도 격은 삽입어구를 빼고 판단해요.",
      "however, therefore, in fact 같은 연결어도 문장 중간에 삽입될 수 있어요.",
      "동격의 콤마: 명사, + 명사구 형태로 앞 명사를 다시 설명해요. (Mr. Kim, our teacher, ...)",
      "동격의 that: fact, news, idea, belief, hope 같은 명사 뒤에서 '~라는'으로 해석해요.",
      "동격의 that절은 완전한 문장, 관계대명사 that절은 불완전한 문장이 뒤따라요."
    ],
    "examples": [
      {
        "en": "The man who I think is the best cook won the contest.",
        "ko": "제 생각에 최고의 요리사인 그 남자가 대회에서 우승했어요."
      },
      {
        "en": "This plan, however, has one serious problem.",
        "ko": "하지만 이 계획에는 한 가지 심각한 문제가 있어요."
      },
      {
        "en": "Mr. Park, our science teacher, loves telling jokes.",
        "ko": "우리 과학 선생님이신 박 선생님은 농담하는 것을 좋아하세요."
      },
      {
        "en": "The news that the singer will retire shocked her fans.",
        "ko": "그 가수가 은퇴할 거라는 소식은 팬들에게 충격을 주었어요."
      },
      {
        "en": "We cannot ignore the fact that the climate is changing.",
        "ko": "우리는 기후가 변하고 있다는 사실을 무시할 수 없어요."
      },
      {
        "en": "Her dream, to open a small bakery, finally came true.",
        "ko": "작은 빵집을 여는 것이라는 그녀의 꿈이 마침내 이루어졌어요."
      },
      {
        "en": "The story is, in fact, based on real events.",
        "ko": "그 이야기는 사실 실제 사건을 바탕으로 하고 있어요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? She is the student who ______ is the most creative in our class.",
        "choices": [
          "I believing",
          "do I believe",
          "I believe"
        ],
        "answer": 2,
        "explain": "관계사절 안에 I believe가 삽입된 구조예요. 삽입어구는 '주어 + 동사'의 평범한 어순 그대로 들어가요."
      },
      {
        "q": "밑줄 친 that의 쓰임이 동격인 것은?",
        "choices": [
          "I heard the rumor that he moved abroad.",
          "This is the book that I bought yesterday.",
          "The house that stands on the hill is old."
        ],
        "answer": 0,
        "explain": "첫 번째는 that 뒤가 완전한 문장이라서 rumor의 내용을 설명하는 동격이에요. 나머지 둘은 뒤가 불완전한 관계대명사절이에요."
      },
      {
        "q": "삽입어구를 골라 보세요. The result, it seems, was better than expected.",
        "choices": [
          "The result",
          "it seems",
          "than expected"
        ],
        "answer": 1,
        "explain": "콤마 사이에 낀 it seems는 빼도 문장이 성립하는 삽입어구예요. 'The result was better than expected.'만으로 완전한 문장이 되죠."
      },
      {
        "q": "'the idea ______ everyone deserves respect'의 빈칸에 알맞은 것은?",
        "choices": [
          "which",
          "that",
          "what"
        ],
        "answer": 1,
        "explain": "idea의 내용을 설명하는 완전한 문장이 뒤따르므로 동격의 that이 필요해요. which나 what은 뒤에 불완전한 문장이 와야 해서 안 돼요."
      },
      {
        "q": "동격 표현이 쓰인 문장은?",
        "choices": [
          "Sejong, the greatest king of Joseon, made Hangeul.",
          "The king who made Hangeul was wise.",
          "Hangeul was made in the Joseon period."
        ],
        "answer": 0,
        "explain": "콤마 사이의 the greatest king of Joseon이 Sejong을 다시 설명하는 동격이에요. 두 번째 보기는 관계대명사절로 꾸민 문장이에요."
      },
      {
        "q": "다음 문장의 자연스러운 해석은? He is, so to speak, a walking dictionary.",
        "choices": [
          "그는 말하자면 걸어 다니는 사전이에요.",
          "그는 말하면서 사전을 들고 걸어요.",
          "그는 사전에게 말을 걸어요."
        ],
        "answer": 0,
        "explain": "so to speak은 '말하자면'이라는 굳어진 삽입 표현이에요. 단어 그대로 '말하며 걷는다'로 해석하면 완전히 다른 뜻이 돼요."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "The fact that she won made us proud.",
          "The fact which she won made us proud.",
          "Nobody knew the fact that the shop had closed."
        ],
        "answer": 1,
        "explain": "fact 뒤에 완전한 문장(she won)이 오면 동격의 that을 써야 해요. which는 뒤에 주어나 목적어가 빠진 불완전한 문장이 필요하므로 틀렸어요."
      }
    ],
    "link": "중학교에서 배운 관계대명사 that과 지금 배운 동격의 that은 생김새가 같아요. 뒤 문장이 완전한지로 구별하는 눈만 키우면 돼요."
  },
  {
    "id": "h34",
    "title": "무생물 주어 구문",
    "key": "사물이 주어여도 겁내지 말고, 주어를 '~ 때문에/덕분에'로 바꿔 사람 중심으로 해석하세요.",
    "hook": "영어에서는 비가 사람을 붙잡고(prevent), 사진이 말을 걸어요(remind) — 사물들이 다 살아 있는 토이 스토리 문법이에요!",
    "summary": "영어는 사물이나 추상 명사를 주어로 삼는 것을 아주 좋아해요. 'The heavy rain prevented us from going out.'을 그대로 옮기면 '폭우가 우리가 나가는 것을 막았다'가 되지만, 자연스러운 한국어는 '폭우 때문에 우리는 나가지 못했어요'예요. 즉 무생물 주어는 원인·이유·수단·조건처럼 부사어로 바꿔 해석하는 것이 요령이에요. 이 구문에 자주 나오는 동사들이 정해져 있어요. make(하게 만들다), prevent/keep A from -ing(막다), enable A to(가능하게 하다), remind A of(떠올리게 하다), bring/take(데려가다), cause(야기하다) 등이에요. 동사별 짝꿍 전치사(from, of, to)까지 세트로 외우면 영작과 독해가 동시에 잡혀요. 거꾸로 한국어의 '~ 덕분에, ~ 때문에'를 영어로 옮길 때 무생물 주어를 쓰면 훨씬 영어다운 문장이 돼요.",
    "rules": [
      "무생물 주어는 '~ 때문에, ~ 덕분에, ~하면'처럼 부사어로 바꿔 해석하면 자연스러워요.",
      "prevent/keep/stop + A + from -ing: 'A가 ~하지 못하게 막다'",
      "make + A + 동사원형: 'A가 ~하게 만들다' (사역)",
      "enable/allow + A + to부정사: 'A가 ~할 수 있게 하다'",
      "remind + A + of + B: 'A에게 B를 떠올리게 하다'",
      "bring/take/lead + A + to + 장소: 'A를 ~로 데려가다·이끌다'"
    ],
    "examples": [
      {
        "en": "The heavy snow prevented us from driving to work.",
        "ko": "폭설 때문에 우리는 차로 출근하지 못했어요."
      },
      {
        "en": "This song always makes me feel happy.",
        "ko": "이 노래를 들으면 저는 항상 기분이 좋아져요."
      },
      {
        "en": "The internet enables us to talk with people around the world.",
        "ko": "인터넷 덕분에 우리는 전 세계 사람들과 이야기할 수 있어요."
      },
      {
        "en": "This photo reminds me of our trip to Jeju.",
        "ko": "이 사진을 보면 우리의 제주 여행이 떠올라요."
      },
      {
        "en": "Ten minutes' walk will bring you to the station.",
        "ko": "10분만 걸으면 역에 도착하실 거예요."
      },
      {
        "en": "What made you change your mind?",
        "ko": "무엇 때문에 마음을 바꾸셨어요? (왜 마음을 바꾸셨어요?)"
      },
      {
        "en": "The loud noise kept the baby from sleeping.",
        "ko": "시끄러운 소음 때문에 아기가 잠들지 못했어요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? The storm prevented the plane ______ taking off.",
        "choices": [
          "to",
          "from",
          "of"
        ],
        "answer": 1,
        "explain": "prevent A from -ing가 한 세트예요. '폭풍 때문에 비행기가 이륙하지 못했다'는 뜻으로, to나 of를 쓰면 숙어가 깨져요."
      },
      {
        "q": "'This medicine will make you feel better.'의 가장 자연스러운 해석은?",
        "choices": [
          "이 약이 당신을 더 잘 느낍니다.",
          "이 약을 먹으면 몸이 나아질 거예요.",
          "당신은 이 약을 더 좋게 만들 거예요."
        ],
        "answer": 1,
        "explain": "무생물 주어는 '~하면, ~ 덕분에'로 풀어 해석해야 자연스러워요. 주어를 그대로 직역하면 어색한 번역 투가 돼요."
      },
      {
        "q": "빈칸에 알맞은 것은? This smell reminds me ______ my grandmother's kitchen.",
        "choices": [
          "of",
          "from",
          "with"
        ],
        "answer": 0,
        "explain": "remind A of B는 'A에게 B를 떠올리게 하다'라는 짝꿍 표현이에요. from은 prevent와, with는 provide와 어울리는 전치사예요."
      },
      {
        "q": "'그 장학금 덕분에 그녀는 유학을 갈 수 있었다'를 무생물 주어로 바르게 쓴 것은?",
        "choices": [
          "The scholarship enabled her to study abroad.",
          "The scholarship enabled her studying abroad.",
          "She enabled the scholarship to study abroad."
        ],
        "answer": 0,
        "explain": "enable + A + to부정사 구조가 맞아요. 동명사(studying)를 쓰면 틀리고, 세 번째 보기는 그녀가 장학금을 유학 보내는 이상한 뜻이 돼요."
      },
      {
        "q": "빈칸에 알맞은 것은? What ______ you come all the way here?",
        "choices": [
          "caused",
          "made",
          "forced"
        ],
        "answer": 1,
        "explain": "빈칸 뒤가 동사원형 come이므로 사역동사 make가 필요해요. cause와 force는 뒤에 to come처럼 to부정사가 와야 해요."
      },
      {
        "q": "'Five minutes' walk will take you to the beach.'와 뜻이 같은 문장은?",
        "choices": [
          "You should walk on the beach for five minutes.",
          "The beach takes five minutes to walk on.",
          "If you walk for five minutes, you will get to the beach."
        ],
        "answer": 2,
        "explain": "무생물 주어 '5분의 걷기'는 조건(~하면)으로 풀어요. '5분 걸으면 해변에 도착한다'가 정확한 의미이고, '해변에서 5분 걷기'와는 달라요."
      },
      {
        "q": "다음 중 어법상 틀린 문장은?",
        "choices": [
          "The rain kept us from playing outside.",
          "The news made her cry.",
          "The bad weather stopped us to go camping."
        ],
        "answer": 2,
        "explain": "stop A from -ing가 맞는 형태라서 'stopped us from going camping'이 되어야 해요. stop 뒤에 to부정사를 쓰면 '막다'라는 뜻이 안 돼요."
      }
    ],
    "link": "중학교 5형식에서 배운 'make + 목적어 + 동사원형'의 주어 자리에 사물을 앉히기만 하면 바로 무생물 주어 구문이에요."
  },
  {
    "id": "h35",
    "title": "문장 전환 종합 (구 ↔ 절 바꾸기)",
    "key": "같은 뜻, 다른 옷 — 구는 짧은 티셔츠, 절은 '주어 + 동사'가 달린 정장이에요.",
    "hook": "구와 절은 같은 사람의 사복과 교복이에요. 갈아입혀도(전환해도) 사람(의미)은 그대로예요!",
    "summary": "지금까지 배운 문법을 총동원해서 구와 절을 서로 바꾸는 연습을 해요. 구는 '주어 + 동사'가 없는 덩어리이고, 절은 '주어 + 동사'를 갖춘 덩어리예요. 예를 들어 'too ~ to부정사(너무 ~해서 …할 수 없다)'는 'so ~ that + 주어 + can't'라는 절로 바꿀 수 있어요. 반대로 '~ enough to'는 'so ~ that + 주어 + can'이 돼요. 전치사구도 절로 바뀌어요. because of + 명사는 because + 주어 + 동사로, in spite of + 명사는 though + 주어 + 동사로 바뀌죠. 'On -ing(~하자마자)'는 'As soon as + 주어 + 동사'와 같아요. 바꿀 때 시제와 주어를 정확히 맞추는 것이 점수를 가르는 포인트예요.",
    "rules": [
      "too + 형용사 + to부정사 = so + 형용사 + that + 주어 + can't/couldn't + 동사원형",
      "형용사 + enough + to부정사 = so + 형용사 + that + 주어 + can/could + 동사원형",
      "because of/due to + 명사(구) = because/since + 주어 + 동사",
      "in spite of/despite + 명사(구) = though/although + 주어 + 동사",
      "On + -ing = As soon as + 주어 + 동사: '~하자마자'",
      "구 → 절 전환 시 주절의 시제에 맞춰 절의 시제를 정하고, 숨어 있던 주어를 살려 줘요."
    ],
    "examples": [
      {
        "en": "The box was too heavy for me to carry. = The box was so heavy that I couldn't carry it.",
        "ko": "그 상자는 너무 무거워서 제가 옮길 수 없었어요."
      },
      {
        "en": "She is old enough to travel alone. = She is so old that she can travel alone.",
        "ko": "그녀는 혼자 여행할 만큼 나이가 들었어요."
      },
      {
        "en": "The game was canceled because of the rain. = The game was canceled because it rained.",
        "ko": "비 때문에 경기가 취소되었어요."
      },
      {
        "en": "In spite of his injury, he finished the race. = Though he was injured, he finished the race.",
        "ko": "부상에도 불구하고 그는 경주를 완주했어요."
      },
      {
        "en": "On arriving home, she turned on the TV. = As soon as she arrived home, she turned on the TV.",
        "ko": "집에 도착하자마자 그녀는 TV를 켰어요."
      },
      {
        "en": "I hope to see you again soon. = I hope that I will see you again soon.",
        "ko": "곧 다시 뵙기를 바라요."
      },
      {
        "en": "This book is easy enough for children to read. = This book is so easy that children can read it.",
        "ko": "이 책은 아이들이 읽을 수 있을 만큼 쉬워요."
      }
    ],
    "quiz": [
      {
        "q": "'He is too young to drive a car.'와 뜻이 같은 문장은?",
        "choices": [
          "He is so young that he can drive a car.",
          "He is so young that he can't drive a car.",
          "He is young enough to drive a car."
        ],
        "answer": 1,
        "explain": "too ~ to는 '너무 ~해서 …할 수 없다'는 부정의 뜻이므로 that절에 can't가 필요해요. can을 쓰면 정반대로 '운전할 수 있다'가 돼요."
      },
      {
        "q": "빈칸에 알맞은 것은? The flight was delayed ______ the thick fog.",
        "choices": [
          "because",
          "because of",
          "though"
        ],
        "answer": 1,
        "explain": "빈칸 뒤가 명사구(the thick fog)이므로 전치사 because of가 와요. because는 뒤에 '주어 + 동사'가 있는 절이 와야 해요."
      },
      {
        "q": "'Despite the cold weather, they went hiking.'을 절로 바르게 바꾼 것은?",
        "choices": [
          "Though the weather was cold, they went hiking.",
          "Because the weather was cold, they went hiking.",
          "Despite the weather was cold, they went hiking."
        ],
        "answer": 0,
        "explain": "despite(~에도 불구하고)는 접속사 though로 바꾸고 '주어 + 동사'를 살려요. despite 뒤에 절을 그대로 붙이는 세 번째 보기는 어법상 틀려요."
      },
      {
        "q": "'On hearing the alarm, everyone left the building.'과 뜻이 같은 것은?",
        "choices": [
          "Before they heard the alarm, everyone left.",
          "Although they heard the alarm, everyone left.",
          "As soon as they heard the alarm, everyone left the building."
        ],
        "answer": 2,
        "explain": "On + -ing는 '~하자마자'라는 뜻으로 As soon as절과 같아요. before(~하기 전에)나 although(~에도 불구하고)는 의미가 완전히 달라요."
      },
      {
        "q": "'The coffee is so hot that I can't drink it.'을 구로 바르게 바꾼 것은?",
        "choices": [
          "The coffee is too hot for me to drink.",
          "The coffee is hot enough for me to drink.",
          "The coffee is too hot for me to drink it."
        ],
        "answer": 0,
        "explain": "so ~ that can't는 too ~ to로 바꿔요. 이때 to drink 뒤의 it은 반드시 지워야 해요. 문장의 주어 coffee가 곧 마시는 대상이라 중복이거든요."
      },
      {
        "q": "빈칸에 알맞은 것은? She is smart enough ______ the puzzle in a minute.",
        "choices": [
          "solving",
          "to solve",
          "that she solves"
        ],
        "answer": 1,
        "explain": "enough 뒤에는 to부정사가 와서 '~할 만큼 충분히'라는 뜻을 만들어요. 동명사나 that절을 바로 붙이면 어법에 어긋나요."
      },
      {
        "q": "'I expect that he will win the game.'을 구를 이용해 바꾼 것은?",
        "choices": [
          "I expect him winning the game.",
          "I expect that him to win.",
          "I expect him to win the game."
        ],
        "answer": 2,
        "explain": "expect는 'expect + 목적어 + to부정사'로 that절을 구로 줄일 수 있어요. 동명사(winning)를 쓰거나 that과 to를 섞어 쓰면 틀려요."
      }
    ],
    "link": "중학교에서 따로 배운 too ~ to, enough to, because of가 사실은 전부 '구 ↔ 절 갈아입기'라는 한 가지 원리였다는 걸 확인하는 유닛이에요."
  }
];
