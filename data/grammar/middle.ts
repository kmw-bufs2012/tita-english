import type { GrammarUnit } from "./types";

export const MIDDLE_UNITS: GrammarUnit[] = [
  {
    "id": "m01",
    "title": "be동사 현재형 (am, are, is)",
    "key": "주어가 누구냐에 따라 be동사는 am, are, is 중 딱 하나로 정해져요.",
    "hook": "\"나는 암(am), 너는 아(are), 걔는 이즈(is)\" — 나·너·걔 삼총사로 리듬 타면 절대 안 잊어요!",
    "summary": "be동사는 '~이다, ~있다'라는 뜻을 가진 특별한 동사예요. 현재형은 am, are, is 세 가지뿐이고, 주어에 따라 골라 쓰면 돼요. I(나)는 항상 am, you(너)와 복수 주어(we, they 등)는 are를 써요. he, she, it처럼 한 명·한 개를 가리키는 3인칭 단수 주어에는 is를 써요. 주어와 be동사는 세트라서, 주어만 보면 be동사가 자동으로 정해져요. 이 짝만 외우면 영어 문장의 절반은 해결돼요.",
    "rules": [
      "I 뒤에는 항상 am을 써요.",
      "you, we, they 같은 복수·2인칭 주어 뒤에는 are를 써요.",
      "he, she, it 같은 3인칭 단수 주어 뒤에는 is를 써요.",
      "My brother처럼 한 사람을 가리키는 명사 주어도 is를 써요.",
      "be동사는 '~이다(신분·상태)'와 '~에 있다(장소)' 두 가지 뜻으로 쓰여요."
    ],
    "examples": [
      {
        "en": "I am a middle school student.",
        "ko": "저는 중학생이에요."
      },
      {
        "en": "You are my best friend.",
        "ko": "너는 내 가장 친한 친구야."
      },
      {
        "en": "She is very kind.",
        "ko": "그녀는 아주 친절해요."
      },
      {
        "en": "We are in the library now.",
        "ko": "우리는 지금 도서관에 있어요."
      },
      {
        "en": "My dog is under the table.",
        "ko": "우리 강아지는 탁자 아래에 있어요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? \"I ___ hungry now.\"",
        "choices": [
          "am",
          "is",
          "are"
        ],
        "answer": 0,
        "explain": "주어가 I이면 be동사는 무조건 am이에요. is와 are는 I와 절대 짝이 될 수 없어요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"My mom ___ a nurse.\"",
        "choices": [
          "are",
          "is",
          "am"
        ],
        "answer": 1,
        "explain": "My mom은 '엄마 한 명', 즉 3인칭 단수라서 is를 써요. are는 복수 주어에 쓰는 말이라 틀려요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"Tom and Jerry ___ funny.\"",
        "choices": [
          "is",
          "am",
          "are"
        ],
        "answer": 2,
        "explain": "Tom and Jerry는 두 명이니까 복수 주어예요. 복수에는 are를 쓰고, is는 한 명일 때만 써요."
      },
      {
        "q": "다음 중 틀린 문장은?",
        "choices": [
          "He is my teacher.",
          "They is at home.",
          "You are tall."
        ],
        "answer": 1,
        "explain": "They는 복수라서 is가 아니라 are를 써야 해요. They are at home.이 맞는 문장이에요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"The books ___ on the desk.\"",
        "choices": [
          "is",
          "are",
          "am"
        ],
        "answer": 1,
        "explain": "The books는 책이 여러 권인 복수 주어라서 are를 써요. 단어 끝의 -s를 보고 복수인지 확인하는 습관을 들이면 좋아요."
      }
    ]
  },
  {
    "id": "m02",
    "title": "be동사 부정문과 의문문",
    "key": "부정은 be동사 뒤에 not, 질문은 be동사를 주어 앞으로 보내면 끝이에요.",
    "hook": "be동사는 성격이 급해서 not도 자기 바로 뒤에 붙이고, 궁금하면 자기가 먼저 문장 맨 앞으로 튀어나가요!",
    "summary": "be동사 문장은 부정문과 의문문 만들기가 아주 쉬워요. 부정문은 be동사 바로 뒤에 not만 붙이면 돼요. 예를 들어 She is tall.을 She is not tall.로 바꾸면 끝이에요. 의문문은 be동사와 주어의 자리를 바꿔서 Is she tall?처럼 만들어요. is not은 isn't, are not은 aren't로 줄여 쓸 수 있어요. 대답할 때는 Yes, she is. / No, she isn't.처럼 be동사로 짧게 답해요.",
    "rules": [
      "부정문은 be동사 바로 뒤에 not을 붙여요.",
      "is not은 isn't, are not은 aren't로 줄일 수 있어요.",
      "am not은 amn't로 줄이지 않고, I'm not으로 써요.",
      "의문문은 be동사를 주어 앞으로 옮기고 물음표를 붙여요.",
      "대답은 Yes, 주어 + be동사. / No, 주어 + be동사 + not.으로 해요."
    ],
    "examples": [
      {
        "en": "I am not tired today.",
        "ko": "저는 오늘 피곤하지 않아요."
      },
      {
        "en": "He isn't a soccer player.",
        "ko": "그는 축구 선수가 아니에요."
      },
      {
        "en": "Are you ready for the test?",
        "ko": "너 시험 준비됐어?"
      },
      {
        "en": "Is this your umbrella?",
        "ko": "이거 네 우산이야?"
      },
      {
        "en": "No, they aren't at school.",
        "ko": "아니요, 그들은 학교에 없어요."
      }
    ],
    "quiz": [
      {
        "q": "부정문으로 알맞은 것은? \"She is angry.\"",
        "choices": [
          "She not is angry.",
          "She isn't angry.",
          "She don't angry."
        ],
        "answer": 1,
        "explain": "be동사 부정은 is 뒤에 not을 붙여서 isn't로 써요. not을 is 앞에 두거나 don't를 쓰면 틀려요."
      },
      {
        "q": "의문문으로 알맞은 것은? \"They are twins.\"",
        "choices": [
          "They are twins?",
          "Do they are twins?",
          "Are they twins?"
        ],
        "answer": 2,
        "explain": "be동사 의문문은 be동사를 주어 앞으로 보내요. be동사가 있는 문장에는 Do를 쓰지 않아요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"___ your sister at home? — Yes, she is.\"",
        "choices": [
          "Is",
          "Are",
          "Am"
        ],
        "answer": 0,
        "explain": "your sister는 3인칭 단수라서 Is로 물어봐요. 대답의 she is를 보면 힌트를 얻을 수 있어요."
      },
      {
        "q": "다음 중 틀린 문장은?",
        "choices": [
          "I'm not sleepy.",
          "We aren't busy.",
          "He not is short."
        ],
        "answer": 2,
        "explain": "not은 be동사 뒤에 와야 해서 He is not short. 또는 He isn't short.가 맞아요. not이 is 앞에 오면 틀려요."
      },
      {
        "q": "질문에 알맞은 대답은? \"Are you a new student?\"",
        "choices": [
          "Yes, you are.",
          "Yes, I am.",
          "Yes, I do."
        ],
        "answer": 1,
        "explain": "you로 물어보면 나(I)에 대한 질문이니까 I am으로 답해요. be동사 질문에 do로 답하면 틀려요."
      }
    ]
  },
  {
    "id": "m03",
    "title": "be동사 과거형 (was, were)",
    "key": "과거의 be동사는 딱 두 개, am·is는 was로, are는 were로 변신해요.",
    "hook": "\"와스(was)는 혼자, 워(were)는 우르르\" — 한 명이면 was, 여럿이 우르르 몰려오면 were!",
    "summary": "어제 일이나 지난 일을 말할 때는 be동사의 과거형을 써요. 과거형은 was와 were 딱 두 개뿐이라 현재형보다 오히려 쉬워요. I, he, she, it처럼 단수 주어에는 was를 쓰고, you, we, they처럼 복수 주어와 you에는 were를 써요. 뜻은 '~이었다, ~에 있었다'가 돼요. yesterday(어제), last night(어젯밤) 같은 과거 시간 표현과 자주 같이 나와요. 부정문과 의문문 만드는 방법은 현재형과 똑같아요.",
    "rules": [
      "I, he, she, it 등 단수 주어의 과거형은 was예요.",
      "you, we, they 등 복수 주어와 you의 과거형은 were예요.",
      "부정문은 was not(wasn't), were not(weren't)으로 써요.",
      "의문문은 Was/Were를 주어 앞에 두면 돼요.",
      "yesterday, last week 같은 과거 표현이 나오면 was/were를 써요."
    ],
    "examples": [
      {
        "en": "I was sick yesterday.",
        "ko": "저는 어제 아팠어요."
      },
      {
        "en": "The movie was really boring.",
        "ko": "그 영화는 정말 지루했어요."
      },
      {
        "en": "We were in Busan last summer.",
        "ko": "우리는 지난여름에 부산에 있었어요."
      },
      {
        "en": "Were you at the party last night?",
        "ko": "너 어젯밤 파티에 있었어?"
      },
      {
        "en": "The children weren't hungry then.",
        "ko": "그때 아이들은 배고프지 않았어요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? \"He ___ late for school this morning.\"",
        "choices": [
          "were",
          "is",
          "was"
        ],
        "answer": 2,
        "explain": "this morning(오늘 아침)은 이미 지난 일이고 He는 단수라서 was를 써요. were는 복수 주어에 쓰는 과거형이에요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"They ___ tired after the game.\"",
        "choices": [
          "was",
          "were",
          "are was"
        ],
        "answer": 1,
        "explain": "They는 복수라서 과거형 were를 써요. was는 단수 주어일 때만 쓸 수 있어요."
      },
      {
        "q": "다음 중 틀린 문장은?",
        "choices": [
          "You was my classmate last year.",
          "It was very cold yesterday.",
          "We were at the beach."
        ],
        "answer": 0,
        "explain": "you의 과거형은 단수든 복수든 항상 were예요. You were my classmate가 맞는 문장이에요."
      },
      {
        "q": "의문문으로 알맞은 것은? \"The test was easy.\"",
        "choices": [
          "Was the test easy?",
          "Did the test was easy?",
          "The test were easy?"
        ],
        "answer": 0,
        "explain": "be동사 과거의 의문문도 be동사(Was)를 주어 앞으로 보내면 돼요. Did와 was를 같이 쓰면 틀려요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"I ___ at home last night. I was at the gym.\"",
        "choices": [
          "was",
          "am not",
          "wasn't"
        ],
        "answer": 2,
        "explain": "뒤에 '체육관에 있었다'고 했으니 집에는 '없었다'는 부정이 필요해서 wasn't를 써요. last night이 있어서 현재형 am not은 쓸 수 없어요."
      }
    ]
  },
  {
    "id": "m04",
    "title": "일반동사 현재형과 3인칭 단수 -s",
    "key": "주어가 he, she, it이면 일반동사 뒤에 -s를 꼭 붙여요.",
    "hook": "걔(he/she/it) 얘기할 땐 동사가 수줍어서 꼬리에 '스~(-s)' 하고 뱀소리를 내요!",
    "summary": "일반동사는 eat, play, like처럼 움직임이나 상태를 나타내는 보통 동사예요. 현재의 습관이나 사실을 말할 때 현재형을 써요. 주어가 I, you, we, they면 동사 원래 모양 그대로 쓰면 돼요. 하지만 주어가 he, she, it 같은 3인칭 단수면 동사 끝에 -s나 -es를 붙여야 해요. study처럼 '자음+y'로 끝나면 y를 i로 바꾸고 -es를 붙여서 studies가 돼요. have는 특별히 has로 모양이 통째로 바뀌니 따로 외워 두세요.",
    "rules": [
      "주어가 I, you, we, they면 동사원형을 그대로 써요.",
      "주어가 3인칭 단수(he, she, it 등)면 동사에 -s를 붙여요.",
      "-o, -ch, -sh, -x, -s로 끝나는 동사는 -es를 붙여요 (goes, watches).",
      "'자음+y'로 끝나면 y를 i로 바꾸고 -es를 붙여요 (study → studies).",
      "have의 3인칭 단수형은 haves가 아니라 has예요."
    ],
    "examples": [
      {
        "en": "I drink milk every morning.",
        "ko": "저는 매일 아침 우유를 마셔요."
      },
      {
        "en": "She plays the piano well.",
        "ko": "그녀는 피아노를 잘 쳐요."
      },
      {
        "en": "My dad watches the news at nine.",
        "ko": "아빠는 9시에 뉴스를 보세요."
      },
      {
        "en": "Mina studies English every day.",
        "ko": "미나는 매일 영어를 공부해요."
      },
      {
        "en": "He has two cats and a bird.",
        "ko": "그는 고양이 두 마리와 새 한 마리를 키워요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? \"My sister ___ K-pop music.\"",
        "choices": [
          "like",
          "likes",
          "liking"
        ],
        "answer": 1,
        "explain": "My sister는 3인칭 단수라서 동사에 -s를 붙인 likes를 써요. like 그대로 쓰면 -s가 빠져서 틀려요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"He ___ to school by bus.\"",
        "choices": [
          "go",
          "gos",
          "goes"
        ],
        "answer": 2,
        "explain": "go는 -o로 끝나서 -es를 붙인 goes가 돼요. 그냥 -s만 붙인 gos는 없는 단어예요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"The baby ___ every night.\"",
        "choices": [
          "cries",
          "crys",
          "cry"
        ],
        "answer": 0,
        "explain": "cry는 '자음+y'로 끝나서 y를 i로 바꾸고 -es를 붙인 cries가 맞아요. crys처럼 y를 그대로 두면 틀려요."
      },
      {
        "q": "다음 중 틀린 문장은?",
        "choices": [
          "They live in Seoul.",
          "She haves a nice bag.",
          "We eat lunch together."
        ],
        "answer": 1,
        "explain": "have의 3인칭 단수형은 has라서 She has a nice bag.이 맞아요. haves라는 형태는 없어요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"My friends ___ basketball after school.\"",
        "choices": [
          "plays",
          "playes",
          "play"
        ],
        "answer": 2,
        "explain": "My friends는 복수 주어라서 -s 없이 동사원형 play를 써요. -s는 주어가 3인칭 단수일 때만 붙여요."
      }
    ]
  },
  {
    "id": "m05",
    "title": "일반동사 부정문과 의문문 (do, does)",
    "key": "일반동사의 부정과 질문에는 도우미 do/does를 부르고, 뒤의 동사는 원형으로 돌려놔요.",
    "hook": "do/does는 -s를 대신 짊어지는 짐꾼이에요. 짐꾼이 does로 -s를 들었으면 동사는 빈손(원형)이어야죠!",
    "summary": "일반동사는 be동사와 달리 혼자서 부정문이나 의문문을 만들지 못해요. 그래서 도우미 동사 do와 does의 힘을 빌려요. 부정문은 동사 앞에 don't나 doesn't를 넣고, 의문문은 Do나 Does를 문장 맨 앞에 놓아요. 주어가 3인칭 단수면 does를 쓰고, 나머지 주어에는 do를 써요. 중요한 건, does가 이미 -s를 가져갔기 때문에 뒤에 오는 동사는 반드시 원형으로 써야 한다는 거예요. likes가 아니라 like로 돌아가는 거죠.",
    "rules": [
      "부정문은 don't/doesn't를 동사 앞에 넣어요.",
      "주어가 3인칭 단수면 doesn't, 나머지는 don't를 써요.",
      "의문문은 Do/Does를 주어 앞에 놓고 물음표를 붙여요.",
      "do/does 뒤의 동사는 항상 원형으로 써요 (doesn't likes ✗).",
      "대답은 Yes, I do. / No, she doesn't.처럼 do/does로 해요."
    ],
    "examples": [
      {
        "en": "I don't like carrots.",
        "ko": "저는 당근을 좋아하지 않아요."
      },
      {
        "en": "He doesn't wear glasses.",
        "ko": "그는 안경을 쓰지 않아요."
      },
      {
        "en": "Do you know that girl?",
        "ko": "너 저 여자애 알아?"
      },
      {
        "en": "Does your brother cook dinner?",
        "ko": "네 형이 저녁을 요리하니?"
      },
      {
        "en": "No, we don't have homework today.",
        "ko": "아니요, 우리는 오늘 숙제가 없어요."
      }
    ],
    "quiz": [
      {
        "q": "부정문으로 알맞은 것은? \"She speaks French.\"",
        "choices": [
          "She doesn't speaks French.",
          "She don't speak French.",
          "She doesn't speak French."
        ],
        "answer": 2,
        "explain": "3인칭 단수라 doesn't를 쓰고, 뒤의 동사는 원형 speak로 써요. doesn't speaks처럼 -s를 남기면 틀려요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"___ they live near here?\"",
        "choices": [
          "Do",
          "Does",
          "Are"
        ],
        "answer": 0,
        "explain": "they는 복수 주어라서 Do로 물어봐요. live는 일반동사라 Are로 시작하면 틀려요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"___ your dad drive to work?\"",
        "choices": [
          "Do",
          "Does",
          "Is"
        ],
        "answer": 1,
        "explain": "your dad는 3인칭 단수라서 Does를 써요. Do는 I, you, we, they에 쓰는 도우미예요."
      },
      {
        "q": "다음 중 틀린 문장은?",
        "choices": [
          "I don't eat breakfast.",
          "Does he plays the guitar?",
          "Do you like pizza?"
        ],
        "answer": 1,
        "explain": "Does가 이미 -s를 가져갔으니 동사는 원형 play를 써야 해요. Does he play the guitar?가 맞아요."
      },
      {
        "q": "질문에 알맞은 대답은? \"Does Mina walk to school?\"",
        "choices": [
          "No, she isn't.",
          "Yes, she does.",
          "Yes, she do."
        ],
        "answer": 1,
        "explain": "Does로 물으면 does로 답해요. she는 3인칭 단수라서 do가 아니라 does이고, be동사 isn't로 답하면 틀려요."
      }
    ]
  },
  {
    "id": "m06",
    "title": "일반동사 과거형 (규칙·불규칙)",
    "key": "규칙 동사는 -ed만 붙이고, 불규칙 동사는 노래처럼 통째로 외워요.",
    "hook": "규칙파는 얌전히 '-드(-ed)' 배지를 달지만, 불규칙파는 go→went처럼 성형수술 수준으로 변신해요!",
    "summary": "지나간 일을 말할 때 일반동사는 과거형으로 바꿔요. 대부분의 동사는 끝에 -ed만 붙이면 되는 규칙 동사예요. want는 wanted, play는 played가 되는 식이죠. 다만 stop처럼 '모음 하나+자음 하나'로 끝나면 자음을 겹쳐 stopped로 쓰고, '자음+y'로 끝나면 y를 i로 바꿔 studied로 써요. 문제는 불규칙 동사인데, go→went, eat→ate처럼 규칙 없이 변해서 자주 나오는 것부터 외워야 해요. 과거형은 주어가 누구든 모양이 똑같아서 그 점은 편해요.",
    "rules": [
      "규칙 동사의 과거형은 동사 끝에 -ed를 붙여요.",
      "-e로 끝나는 동사는 -d만 붙여요 (live → lived).",
      "'자음+y'로 끝나면 y를 i로 바꾸고 -ed를 붙여요 (cry → cried).",
      "불규칙 동사는 go→went, eat→ate처럼 따로 외워야 해요.",
      "과거형은 주어가 단수든 복수든 모양이 같아요."
    ],
    "examples": [
      {
        "en": "I watched a funny video last night.",
        "ko": "저는 어젯밤에 웃긴 영상을 봤어요."
      },
      {
        "en": "She cleaned her room on Sunday.",
        "ko": "그녀는 일요일에 자기 방을 청소했어요."
      },
      {
        "en": "We went to the museum last week.",
        "ko": "우리는 지난주에 박물관에 갔어요."
      },
      {
        "en": "He ate all the cookies.",
        "ko": "그가 쿠키를 전부 먹었어요."
      },
      {
        "en": "They made a big snowman.",
        "ko": "그들은 커다란 눈사람을 만들었어요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? \"I ___ my grandma last weekend.\"",
        "choices": [
          "visit",
          "visited",
          "visits"
        ],
        "answer": 1,
        "explain": "last weekend는 과거이므로 -ed를 붙인 visited를 써요. visit이나 visits는 현재형이라 시간과 맞지 않아요."
      },
      {
        "q": "go의 과거형으로 알맞은 것은?",
        "choices": [
          "goed",
          "wented",
          "went"
        ],
        "answer": 2,
        "explain": "go는 불규칙 동사라서 과거형이 went예요. goed처럼 -ed를 붙이면 틀려요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"The bus ___ at the corner.\"",
        "choices": [
          "stopped",
          "stoped",
          "stops yesterday"
        ],
        "answer": 0,
        "explain": "stop은 '모음 하나+자음 하나'로 끝나서 p를 하나 더 쓰고 -ed를 붙인 stopped가 맞아요. stoped는 철자가 틀린 형태예요."
      },
      {
        "q": "다음 중 틀린 문장은?",
        "choices": [
          "She studied math last night.",
          "He buyed a new phone.",
          "We lived in Daegu in 2020."
        ],
        "answer": 1,
        "explain": "buy는 불규칙 동사라서 과거형이 bought예요. buyed처럼 -ed를 붙이면 안 돼요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"My cat ___ on my bed all day yesterday.\"",
        "choices": [
          "sleeped",
          "sleeps",
          "slept"
        ],
        "answer": 2,
        "explain": "sleep은 불규칙 동사라서 과거형이 slept예요. yesterday가 있으니 현재형 sleeps도 쓸 수 없어요."
      }
    ]
  },
  {
    "id": "m07",
    "title": "과거 부정문과 의문문 (did)",
    "key": "과거의 부정과 질문은 주어와 상관없이 무조건 did 하나로 해결하고, 동사는 원형으로 써요.",
    "hook": "did는 과거 담당 만능 리모컨! did가 '과거' 버튼을 눌렀으니 동사는 다시 원형으로 리셋돼요.",
    "summary": "일반동사 과거의 부정문과 의문문은 did가 담당해요. do/does는 현재용이고, 과거에는 주어가 누구든 did 하나만 쓰면 돼서 오히려 편해요. 부정문은 동사 앞에 didn't를 넣고, 의문문은 Did를 문장 맨 앞에 놓아요. 여기서 제일 많이 틀리는 부분이 있어요. did가 이미 과거라는 표시를 했기 때문에, 뒤의 동사는 과거형이 아니라 원형으로 써야 해요. didn't went가 아니라 didn't go가 맞는 거예요.",
    "rules": [
      "과거 부정문은 didn't(did not)를 동사 앞에 넣어요.",
      "과거 의문문은 Did를 주어 앞에 놓아요.",
      "did는 주어가 누구든 모양이 똑같아요.",
      "didn't와 Did 뒤의 동사는 반드시 원형으로 써요.",
      "대답은 Yes, I did. / No, he didn't.처럼 did로 해요."
    ],
    "examples": [
      {
        "en": "I didn't finish my homework.",
        "ko": "저는 숙제를 다 못 끝냈어요."
      },
      {
        "en": "She didn't call me yesterday.",
        "ko": "그녀는 어제 저에게 전화하지 않았어요."
      },
      {
        "en": "Did you sleep well last night?",
        "ko": "어젯밤에 잘 잤어?"
      },
      {
        "en": "Did he win the game?",
        "ko": "그가 경기에서 이겼나요?"
      },
      {
        "en": "No, we didn't take the subway.",
        "ko": "아니요, 우리는 지하철을 타지 않았어요."
      }
    ],
    "quiz": [
      {
        "q": "부정문으로 알맞은 것은? \"He bought new shoes.\"",
        "choices": [
          "He didn't bought new shoes.",
          "He didn't buy new shoes.",
          "He doesn't bought new shoes."
        ],
        "answer": 1,
        "explain": "didn't가 과거를 이미 표시했으니 동사는 원형 buy로 써요. didn't bought처럼 과거형을 또 쓰면 과거가 두 번이라 틀려요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"___ you see the rainbow this morning?\"",
        "choices": [
          "Do",
          "Does",
          "Did"
        ],
        "answer": 2,
        "explain": "this morning은 지나간 시간이라 과거 의문문 Did를 써요. Do와 Does는 현재를 물을 때만 써요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"Did she ___ the door?\"",
        "choices": [
          "lock",
          "locked",
          "locks"
        ],
        "answer": 0,
        "explain": "Did가 앞에 있으면 동사는 원형 lock을 써요. Did와 locked를 같이 쓰면 과거 표시가 겹쳐서 틀려요."
      },
      {
        "q": "다음 중 맞는 문장은?",
        "choices": [
          "They didn't came to the party.",
          "Did he studied hard?",
          "I didn't hear the alarm."
        ],
        "answer": 2,
        "explain": "didn't 뒤에 원형 hear를 쓴 세 번째 문장이 맞아요. came과 studied는 원형으로 바꿔야 해서 나머지는 틀려요."
      },
      {
        "q": "질문에 알맞은 대답은? \"Did they win yesterday?\"",
        "choices": [
          "No, they don't.",
          "No, they didn't.",
          "No, they weren't."
        ],
        "answer": 1,
        "explain": "Did로 물으면 did로 답해서 No, they didn't.가 맞아요. don't는 현재형 대답이라 시간이 맞지 않아요."
      }
    ]
  },
  {
    "id": "m08",
    "title": "진행형 (현재진행·과거진행)",
    "key": "진행형은 'be동사 + 동사-ing' 세트로, 지금(또는 그때) 하는 중인 일을 나타내요.",
    "hook": "-ing는 '~하는 주우웅~' 소리예요. be동사가 카메라를 켜고 -ing가 실시간 방송을 하는 거죠!",
    "summary": "진행형은 어떤 동작이 '진행되는 중'임을 나타내는 표현이에요. 만드는 공식은 'be동사 + 동사-ing'로 아주 간단해요. 현재진행형은 am/are/is + -ing로 '지금 ~하고 있다'는 뜻이에요. 과거진행형은 was/were + -ing로 '그때 ~하고 있었다'는 뜻이 되고요. be동사는 주어에 맞게 고르고, 동사에는 -ing를 붙이면 돼요. make처럼 -e로 끝나면 e를 빼고 making, run처럼 짧은 동사는 자음을 겹쳐 running으로 써요. 부정문과 의문문은 be동사 문장과 똑같은 방법으로 만들어요.",
    "rules": [
      "진행형의 공식은 'be동사 + 동사-ing'예요.",
      "현재진행은 am/are/is + -ing, 과거진행은 was/were + -ing를 써요.",
      "-e로 끝나는 동사는 e를 빼고 -ing를 붙여요 (make → making).",
      "'모음 하나+자음 하나'로 끝나면 자음을 겹쳐요 (run → running).",
      "부정은 be동사 뒤에 not, 질문은 be동사를 주어 앞으로 보내요."
    ],
    "examples": [
      {
        "en": "I am doing my homework now.",
        "ko": "저는 지금 숙제를 하고 있어요."
      },
      {
        "en": "She is making a sandwich.",
        "ko": "그녀는 샌드위치를 만들고 있어요."
      },
      {
        "en": "The kids are running in the park.",
        "ko": "아이들이 공원에서 뛰고 있어요."
      },
      {
        "en": "He was taking a shower at seven.",
        "ko": "그는 7시에 샤워를 하고 있었어요."
      },
      {
        "en": "Were you listening to music then?",
        "ko": "너 그때 음악 듣고 있었어?"
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? \"Look! The bird ___ in the sky.\"",
        "choices": [
          "is flying",
          "flying",
          "flies yesterday"
        ],
        "answer": 0,
        "explain": "Look!(봐!)은 지금 벌어지는 일이라 현재진행 is flying을 써요. -ing만 쓰고 be동사를 빼면 문장이 안 돼요."
      },
      {
        "q": "swim의 -ing형으로 알맞은 것은?",
        "choices": [
          "swiming",
          "swimming",
          "swimeing"
        ],
        "answer": 1,
        "explain": "swim은 '모음 하나+자음 하나'로 끝나서 m을 겹쳐 swimming으로 써요. swiming은 자음을 안 겹쳐서 틀려요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"They ___ TV when I came home.\"",
        "choices": [
          "are watching",
          "watching were",
          "were watching"
        ],
        "answer": 2,
        "explain": "'내가 집에 왔을 때'는 과거이므로 과거진행 were watching을 써요. are watching은 현재진행이라 시간이 맞지 않아요."
      },
      {
        "q": "다음 중 틀린 문장은?",
        "choices": [
          "He is writeing a letter.",
          "I was reading a book.",
          "We are waiting for the bus."
        ],
        "answer": 0,
        "explain": "write는 -e로 끝나서 e를 빼고 writing으로 써야 해요. writeing처럼 e를 남기면 틀려요."
      },
      {
        "q": "의문문으로 알맞은 것은? \"She is crying.\"",
        "choices": [
          "Does she is crying?",
          "Is she crying?",
          "She is crying, is?"
        ],
        "answer": 1,
        "explain": "진행형의 의문문은 be동사 Is를 주어 앞으로 보내면 돼요. 진행형에는 Does를 쓰지 않아요."
      }
    ]
  },
  {
    "id": "m09",
    "title": "미래 표현 (will, be going to)",
    "key": "미래는 will이나 be going to로 말하고, 둘 다 뒤에는 동사원형이 와요.",
    "hook": "will은 그 자리에서 \"내가 할게!\" 번쩍 손 들기, be going to는 달력에 미리 적어 둔 계획이에요!",
    "summary": "앞으로 일어날 일은 will이나 be going to로 표현해요. will은 '~할 것이다'라는 뜻으로, 말하는 순간 결심한 일이나 단순한 예측에 잘 어울려요. be going to는 이미 마음먹어 둔 계획이나, 하늘에 먹구름이 보일 때처럼 근거 있는 예측에 써요. 둘 다 뒤에는 반드시 동사원형이 와요. will은 주어와 상관없이 모양이 같지만, be going to의 be동사는 주어에 맞춰 am/are/is로 바꿔요. 부정은 will not(won't) 또는 be동사 뒤에 not을 붙이면 돼요.",
    "rules": [
      "미래는 'will + 동사원형' 또는 'be going to + 동사원형'으로 표현해요.",
      "will은 주어가 누구든 모양이 변하지 않아요.",
      "be going to의 be동사는 주어에 맞게 am/are/is로 바꿔요.",
      "will의 부정은 will not이고 줄이면 won't예요.",
      "즉석 결심은 will, 미리 세운 계획은 be going to가 잘 어울려요."
    ],
    "examples": [
      {
        "en": "I will help you with your bag.",
        "ko": "제가 가방 드는 거 도와드릴게요."
      },
      {
        "en": "It will rain tomorrow.",
        "ko": "내일 비가 올 거예요."
      },
      {
        "en": "She is going to visit her uncle next month.",
        "ko": "그녀는 다음 달에 삼촌을 방문할 예정이에요."
      },
      {
        "en": "We are going to have a picnic on Saturday.",
        "ko": "우리는 토요일에 소풍을 갈 거예요."
      },
      {
        "en": "He won't be late again.",
        "ko": "그는 다시는 늦지 않을 거예요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? \"I ___ call you tonight.\"",
        "choices": [
          "will",
          "wills",
          "am will"
        ],
        "answer": 0,
        "explain": "will은 주어가 누구든 모양이 변하지 않아서 그대로 will을 써요. wills나 am will 같은 형태는 없어요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"She is going to ___ a doctor.\"",
        "choices": [
          "became",
          "become",
          "becomes"
        ],
        "answer": 1,
        "explain": "be going to 뒤에는 항상 동사원형이 와요. became(과거형)이나 becomes(-s형)를 쓰면 틀려요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"They ___ going to move to Jeju next year.\"",
        "choices": [
          "is",
          "am",
          "are"
        ],
        "answer": 2,
        "explain": "be going to의 be동사는 주어에 맞춰요. They는 복수라서 are를 쓰고, is는 3인칭 단수용이에요."
      },
      {
        "q": "다음 중 틀린 문장은?",
        "choices": [
          "He will passes the test.",
          "I'm going to learn Chinese.",
          "We will meet at six."
        ],
        "answer": 0,
        "explain": "will 뒤에는 동사원형이 와야 해서 He will pass the test.가 맞아요. will과 -s형 passes를 같이 쓰면 틀려요."
      },
      {
        "q": "will not의 줄임말로 알맞은 것은?",
        "choices": [
          "willn't",
          "won't",
          "not'll"
        ],
        "answer": 1,
        "explain": "will not의 줄임말은 특이하게 won't예요. willn't라고 쓰기 쉽지만 그런 형태는 없으니 통째로 외워 두세요."
      }
    ]
  },
  {
    "id": "m10",
    "title": "현재완료 기초 (have + 과거분사)",
    "key": "현재완료는 have/has + 과거분사, 과거의 일이 지금까지 연결될 때 써요.",
    "hook": "\"해브 피피(have p.p.)!\" 과거에 쏜 화살이 지금 내 앞에 꽂혀 있는 그림을 떠올리세요.",
    "summary": "현재완료는 'have(has) + 과거분사' 모양이에요. 과거에 일어난 일이 지금과 연결되어 있을 때 쓰는 시제예요. 예를 들어 'I lost my key.'는 그냥 과거의 일이지만, 'I have lost my key.'는 잃어버려서 지금도 없다는 느낌까지 담아요. 주어가 he, she, it처럼 3인칭 단수면 have 대신 has를 써요. 부정문은 have/has 뒤에 not을 붙이고, 의문문은 Have/Has를 주어 앞으로 보내면 돼요.",
    "rules": [
      "현재완료의 기본 형태는 have/has + 과거분사(p.p.)예요.",
      "주어가 3인칭 단수(he, she, it 등)면 has를 써요.",
      "부정문은 have not(haven't) / has not(hasn't) + 과거분사로 만들어요.",
      "의문문은 Have/Has + 주어 + 과거분사 순서로 써요.",
      "yesterday, last year, ago 같은 명확한 과거 표현과는 함께 쓸 수 없어요."
    ],
    "examples": [
      {
        "en": "I have finished my homework.",
        "ko": "저는 숙제를 다 끝냈어요. (그래서 지금 자유예요.)"
      },
      {
        "en": "She has lost her umbrella.",
        "ko": "그녀는 우산을 잃어버렸어요. (지금도 없어요.)"
      },
      {
        "en": "We have cleaned the room.",
        "ko": "우리는 방 청소를 마쳤어요."
      },
      {
        "en": "Have you eaten lunch?",
        "ko": "점심 먹었어요?"
      },
      {
        "en": "He hasn't read this book.",
        "ko": "그는 이 책을 읽지 않았어요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? She ___ washed the dishes.",
        "choices": [
          "has",
          "have",
          "is"
        ],
        "answer": 0,
        "explain": "주어 She는 3인칭 단수라서 has를 써요. have는 I, you, 복수 주어에 쓰고, is 뒤에는 과거분사가 이렇게 오지 않아요."
      },
      {
        "q": "빈칸에 알맞은 것은? They have ___ the movie.",
        "choices": [
          "see",
          "saw",
          "seen"
        ],
        "answer": 2,
        "explain": "현재완료는 have 뒤에 과거분사가 와야 하므로 seen이 정답이에요. saw는 과거형이라 have와 같이 쓸 수 없어요."
      },
      {
        "q": "다음 중 틀린 문장은?",
        "choices": [
          "I have visited Busan.",
          "He have finished the test.",
          "We have played soccer."
        ],
        "answer": 1,
        "explain": "He는 3인칭 단수라서 has finished라고 해야 해요. 나머지 두 문장은 주어에 맞게 have를 잘 썼어요."
      },
      {
        "q": "의문문으로 알맞은 것은?",
        "choices": [
          "Have you found your phone?",
          "Do you have found your phone?",
          "You have found your phone?"
        ],
        "answer": 0,
        "explain": "현재완료 의문문은 Have를 주어 앞으로 보내요. Do와 have found를 같이 쓰면 조동사가 두 개라 틀려요."
      },
      {
        "q": "함께 쓸 수 없는 것은? I have met her ___.",
        "choices": [
          "before",
          "many times",
          "yesterday"
        ],
        "answer": 2,
        "explain": "yesterday는 명확한 과거 시점이라 현재완료와 함께 쓸 수 없어요. before나 many times는 현재완료와 잘 어울려요."
      }
    ]
  },
  {
    "id": "m11",
    "title": "현재완료의 네 가지 용법 (경험·계속·완료·결과)",
    "key": "현재완료는 경험, 계속, 완료, 결과 네 가지 뜻으로 쓰여요.",
    "hook": "\"경계완결!\" 경험·계속·완료·결과 — 네 글자 주문으로 외우면 시험장에서 바로 튀어나와요.",
    "summary": "현재완료는 모양은 하나지만 뜻은 네 가지예요. '경험'은 '~해 본 적 있다'로, ever, never, before 같은 말과 자주 쓰여요. '계속'은 '지금까지 쭉 ~해 왔다'로, for(~ 동안)와 since(~ 이후로)가 힌트예요. '완료'는 '방금/이미 ~했다'로 just, already, yet과 함께 다녀요. '결과'는 과거의 일 때문에 지금 어떤 상태가 되었다는 뜻이에요. 함께 쓰인 단어를 보면 어떤 용법인지 쉽게 알 수 있어요.",
    "rules": [
      "경험 용법은 '~해 본 적 있다'는 뜻이고 ever, never, once, before가 힌트예요.",
      "계속 용법은 '쭉 ~해 왔다'는 뜻이고 for + 기간, since + 시작 시점과 함께 써요.",
      "완료 용법은 '방금/이미 ~했다'는 뜻이고 just, already, yet이 힌트예요.",
      "결과 용법은 과거의 일이 남긴 현재 상태를 나타내요. (예: gone → 가서 지금 없음)",
      "have been to는 '가 본 적 있다', have gone to는 '가 버려서 지금 없다'로 구별해요."
    ],
    "examples": [
      {
        "en": "I have never tried sushi.",
        "ko": "저는 초밥을 먹어 본 적이 없어요. (경험)"
      },
      {
        "en": "She has lived in Seoul since 2020.",
        "ko": "그녀는 2020년부터 서울에 살고 있어요. (계속)"
      },
      {
        "en": "They have just arrived at the station.",
        "ko": "그들은 방금 역에 도착했어요. (완료)"
      },
      {
        "en": "He has gone to Canada.",
        "ko": "그는 캐나다로 가 버렸어요. (결과: 지금 여기 없어요.)"
      },
      {
        "en": "We have known each other for ten years.",
        "ko": "우리는 10년 동안 서로 알고 지냈어요. (계속)"
      }
    ],
    "quiz": [
      {
        "q": "다음 문장의 용법은? I have already sent the email.",
        "choices": [
          "경험",
          "완료",
          "계속"
        ],
        "answer": 1,
        "explain": "already(이미)는 완료 용법의 대표 힌트예요. 경험이라면 ever나 before, 계속이라면 for나 since가 왔을 거예요."
      },
      {
        "q": "빈칸에 알맞은 것은? She has studied English ___ five years.",
        "choices": [
          "since",
          "from",
          "for"
        ],
        "answer": 2,
        "explain": "five years는 '기간'이므로 for를 써요. since 뒤에는 2020처럼 시작한 '시점'이 와야 해요."
      },
      {
        "q": "'그는 파리에 가 본 적이 있다'로 알맞은 것은?",
        "choices": [
          "He has been to Paris.",
          "He has gone to Paris.",
          "He went to Paris now."
        ],
        "answer": 0,
        "explain": "'가 본 적 있다'는 경험이므로 has been to를 써요. has gone to는 '가 버려서 지금 없다'는 결과의 뜻이에요."
      },
      {
        "q": "빈칸에 알맞은 것은? ___ you ever ridden a horse?",
        "choices": [
          "Do",
          "Did",
          "Have"
        ],
        "answer": 2,
        "explain": "ever와 과거분사 ridden이 있으니 현재완료 경험 의문문이에요. 그래서 Have로 시작해야 해요."
      },
      {
        "q": "다음 중 '계속' 용법인 문장은?",
        "choices": [
          "I have just cleaned my desk.",
          "He has worked here since March.",
          "She has visited Jeju twice."
        ],
        "answer": 1,
        "explain": "since March(3월부터 지금까지 쭉)가 있으니 계속 용법이에요. just는 완료, twice는 경험의 힌트예요."
      }
    ]
  },
  {
    "id": "m12",
    "title": "과거완료 기초 (had + 과거분사)",
    "key": "과거완료(had + 과거분사)는 과거의 한 시점보다 더 먼저 일어난 일을 나타내요.",
    "hook": "\"과거보다 한 칸 더 과거!\" 계단 두 칸 아래에 있는 일은 had p.p.라고 기억하세요.",
    "summary": "과거완료는 'had + 과거분사' 모양이에요. 과거에 일어난 두 가지 일 중에서 더 먼저 일어난 일을 나타낼 때 써요. 예를 들어 '역에 도착했을 때(과거), 기차는 이미 떠나 있었다(더 먼저)'처럼요. 이렇게 과거보다 앞선 시간을 '대과거'라고 불러요. 주어가 무엇이든 상관없이 항상 had를 쓰니까 오히려 현재완료보다 형태는 쉬워요. before, after, when 같은 말과 함께 자주 쓰여요.",
    "rules": [
      "과거완료의 형태는 주어와 상관없이 항상 had + 과거분사예요.",
      "과거의 두 사건 중 먼저 일어난 일에 과거완료를 써요.",
      "나중에 일어난 일은 보통 단순 과거로 표현해요.",
      "부정문은 had not(hadn't) + 과거분사로 만들어요.",
      "기준이 되는 과거 시점이 없으면 과거완료를 쓸 이유가 없어요."
    ],
    "examples": [
      {
        "en": "The train had left when I got to the station.",
        "ko": "제가 역에 도착했을 때 기차는 이미 떠나 있었어요."
      },
      {
        "en": "She had already eaten dinner before I called her.",
        "ko": "제가 전화하기 전에 그녀는 이미 저녁을 먹었어요."
      },
      {
        "en": "He was tired because he had worked all day.",
        "ko": "그는 하루 종일 일했기 때문에 피곤했어요."
      },
      {
        "en": "I found the wallet that I had dropped.",
        "ko": "저는 제가 떨어뜨렸던 지갑을 찾았어요."
      },
      {
        "en": "They hadn't met before the party.",
        "ko": "그들은 그 파티 전에는 만난 적이 없었어요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? When we arrived, the movie ___ already started.",
        "choices": [
          "has",
          "had",
          "have"
        ],
        "answer": 1,
        "explain": "도착한 것(과거)보다 영화 시작이 더 먼저이므로 과거완료 had started를 써요. has/have는 현재완료라 과거 기준 문장에 맞지 않아요."
      },
      {
        "q": "빈칸에 알맞은 것은? He had ___ his homework before dinner.",
        "choices": [
          "do",
          "did",
          "done"
        ],
        "answer": 2,
        "explain": "had 뒤에는 과거분사가 와야 하므로 done이 정답이에요. did는 과거형이라 had와 함께 쓸 수 없어요."
      },
      {
        "q": "다음 중 틀린 문장은?",
        "choices": [
          "She had finished the book before class.",
          "I had never seen snow before that day.",
          "They had went home when I came."
        ],
        "answer": 2,
        "explain": "go의 과거분사는 gone이라서 had gone home이라고 해야 해요. went는 과거형이므로 had 뒤에 올 수 없어요."
      },
      {
        "q": "더 먼저 일어난 일은? \"I lost the pen that my dad had bought for me.\"",
        "choices": [
          "아빠가 펜을 사 준 것",
          "내가 펜을 잃어버린 것",
          "두 일이 동시에 일어남"
        ],
        "answer": 0,
        "explain": "had bought가 과거완료이므로 아빠가 사 준 일이 더 먼저예요. 잃어버린 것(lost)은 그 뒤에 일어난 과거의 일이에요."
      },
      {
        "q": "부정문으로 알맞은 것은? (그녀는 그 전에 김치를 먹어 본 적이 없었다)",
        "choices": [
          "She didn't had eaten kimchi before.",
          "She hadn't eaten kimchi before.",
          "She hasn't ate kimchi before."
        ],
        "answer": 1,
        "explain": "과거완료 부정은 hadn't + 과거분사예요. didn't 뒤에 had eaten을 쓰면 동사가 겹쳐서 틀려요."
      }
    ]
  },
  {
    "id": "m13",
    "title": "조동사 can, may",
    "key": "can은 능력·허가, may는 정중한 허가·추측을 나타내고, 뒤에는 항상 동사원형이 와요.",
    "hook": "can은 \"캔 따는 힘!\"(능력), may는 \"메이비(maybe)\"(아마도, 추측)로 소리로 기억하세요.",
    "summary": "조동사는 동사 앞에서 뜻을 더해 주는 도우미예요. can은 '~할 수 있다'(능력)와 '~해도 된다'(허가)를 나타내요. may는 '~해도 될까요?'처럼 더 정중한 허가와, '~일지도 모른다'는 추측에 쓰여요. 조동사 뒤에는 항상 동사원형이 오고, 주어가 3인칭 단수여도 cans, mays처럼 s를 붙이지 않아요. can의 과거형은 could이고, be able to로 바꿔 쓸 수도 있어요. 부정은 cannot(can't), may not으로 만들어요.",
    "rules": [
      "조동사 뒤에는 항상 동사원형이 와요.",
      "can은 능력(~할 수 있다)과 허가(~해도 된다)를 나타내요.",
      "may는 정중한 허가(~해도 됩니다)와 추측(~일지도 모른다)에 써요.",
      "can은 be able to로 바꿔 쓸 수 있고, 과거형은 could예요.",
      "조동사는 주어가 3인칭 단수여도 모양이 변하지 않아요."
    ],
    "examples": [
      {
        "en": "My sister can speak three languages.",
        "ko": "제 여동생은 세 개의 언어를 말할 수 있어요."
      },
      {
        "en": "Can I borrow your pencil?",
        "ko": "연필 좀 빌려도 될까요?"
      },
      {
        "en": "May I come in?",
        "ko": "들어가도 될까요?"
      },
      {
        "en": "It may rain this afternoon.",
        "ko": "오늘 오후에 비가 올지도 몰라요."
      },
      {
        "en": "I couldn't sleep last night.",
        "ko": "저는 어젯밤에 잠을 잘 수 없었어요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? He can ___ very fast.",
        "choices": [
          "runs",
          "run",
          "running"
        ],
        "answer": 1,
        "explain": "조동사 can 뒤에는 동사원형이 와야 하므로 run이 정답이에요. 주어가 He라도 runs처럼 s를 붙이면 안 돼요."
      },
      {
        "q": "'그녀는 아플지도 몰라요'로 알맞은 것은?",
        "choices": [
          "She may is sick.",
          "She mays be sick.",
          "She may be sick."
        ],
        "answer": 2,
        "explain": "may 뒤에는 동사원형 be가 와요. may is는 동사가 겹치고, mays처럼 조동사에 s를 붙이는 것도 틀려요."
      },
      {
        "q": "다음 중 틀린 문장은?",
        "choices": [
          "I can swimming well.",
          "You may use my phone.",
          "She can drive a car."
        ],
        "answer": 0,
        "explain": "can 뒤에는 동사원형 swim이 와야 하므로 swimming은 틀려요. 나머지 문장은 조동사 + 동사원형을 잘 지켰어요."
      },
      {
        "q": "can과 바꿔 쓸 수 있는 것은? \"She can fix computers.\"",
        "choices": [
          "She is able to fix computers.",
          "She has to fix computers.",
          "She would fix computers."
        ],
        "answer": 0,
        "explain": "can(~할 수 있다)은 be able to로 바꿔 쓸 수 있어요. has to는 '~해야 한다'라서 뜻이 완전히 달라져요."
      },
      {
        "q": "선생님께 정중하게 허락을 구할 때 가장 알맞은 것은?",
        "choices": [
          "I go to the restroom.",
          "May I go to the restroom?",
          "I may can go to the restroom?"
        ],
        "answer": 1,
        "explain": "May I ~?는 정중하게 허락을 구하는 표현이에요. may can처럼 조동사 두 개를 나란히 쓸 수는 없어요."
      }
    ]
  },
  {
    "id": "m14",
    "title": "조동사 must, have to, should",
    "key": "must와 have to는 '꼭 해야 한다', should는 '하는 게 좋다'는 부드러운 충고예요.",
    "hook": "must는 \"머스트 = 무조건!\", should는 \"슈~웃 하고 살짝 미는 충고\"로 강도 차이를 기억하세요.",
    "summary": "must와 have to는 둘 다 '~해야 한다'는 강한 의무를 나타내요. 주어가 3인칭 단수면 have to는 has to가 되지만, must는 그대로예요. should는 '~하는 게 좋겠다'는 부드러운 충고나 조언이에요. 조심할 것은 부정문이에요. must not은 '절대 하면 안 된다'는 금지이지만, don't have to는 '할 필요가 없다'는 뜻으로 완전히 달라요. 이 차이는 시험에 정말 자주 나와요.",
    "rules": [
      "must와 have to는 '~해야 한다'는 의무를 나타내요.",
      "should는 '~하는 게 좋다'는 부드러운 충고예요.",
      "must not(mustn't)은 '~하면 안 된다'는 금지예요.",
      "don't have to는 '~할 필요가 없다'는 뜻으로, 금지가 아니에요.",
      "must의 과거는 had to로 표현해요."
    ],
    "examples": [
      {
        "en": "You must wear a seatbelt in the car.",
        "ko": "차에서는 안전벨트를 꼭 매야 해요."
      },
      {
        "en": "She has to get up early tomorrow.",
        "ko": "그녀는 내일 일찍 일어나야 해요."
      },
      {
        "en": "You should drink more water.",
        "ko": "물을 더 많이 마시는 게 좋아요."
      },
      {
        "en": "You must not touch the wet paint.",
        "ko": "덜 마른 페인트를 만지면 안 돼요."
      },
      {
        "en": "It's Sunday, so I don't have to go to school.",
        "ko": "일요일이라서 저는 학교에 갈 필요가 없어요."
      }
    ],
    "quiz": [
      {
        "q": "'너는 여기서 수영하면 안 된다(금지)'로 알맞은 것은?",
        "choices": [
          "You don't have to swim here.",
          "You must not swim here.",
          "You should swim here."
        ],
        "answer": 1,
        "explain": "금지는 must not으로 표현해요. don't have to는 '수영할 필요가 없다'는 뜻이라 금지가 아니에요."
      },
      {
        "q": "빈칸에 알맞은 것은? He ___ to finish the report today.",
        "choices": [
          "must",
          "should",
          "has"
        ],
        "answer": 2,
        "explain": "빈칸 뒤에 to가 있으니 has to(~해야 한다)가 정답이에요. must와 should 뒤에는 to 없이 동사원형이 바로 와요."
      },
      {
        "q": "친구가 감기에 걸렸을 때 부드럽게 조언하는 말은?",
        "choices": [
          "You should see a doctor.",
          "You must not see a doctor.",
          "You had to see a doctor."
        ],
        "answer": 0,
        "explain": "should는 '~하는 게 좋겠다'는 부드러운 조언이에요. must not은 금지, had to는 과거의 의무라 상황에 맞지 않아요."
      },
      {
        "q": "'입장이 무료라서 돈을 낼 필요가 없다'의 빈칸은? You ___ pay.",
        "choices": [
          "must not",
          "should",
          "don't have to"
        ],
        "answer": 2,
        "explain": "'할 필요가 없다'는 don't have to예요. must not을 쓰면 '돈을 내면 안 된다'는 금지가 되어 버려요."
      },
      {
        "q": "다음 중 틀린 문장은?",
        "choices": [
          "She must clean her room.",
          "He musts study hard.",
          "We should be quiet in the library."
        ],
        "answer": 1,
        "explain": "조동사 must는 주어가 3인칭 단수여도 s를 붙이지 않아요. He must study라고 해야 해요."
      }
    ]
  },
  {
    "id": "m15",
    "title": "조동사 관용 표현 (would like to, had better 등)",
    "key": "would like to는 '~하고 싶다'의 정중한 표현, had better는 '~하는 게 좋을 거야'라는 강한 충고예요.",
    "hook": "would like to는 \"우아하게 주문하는 말\", had better는 \"안 하면 큰일 나~\" 하는 엄마 목소리로 기억하세요.",
    "summary": "조동사가 들어간 관용 표현 몇 가지를 묶어서 배워요. would like to는 want to보다 정중하게 '~하고 싶어요'라고 말하는 표현이에요. had better는 '~하는 게 좋을 거야'인데, 안 하면 곤란해진다는 경고의 느낌이 있어서 should보다 강해요. used to는 '예전에는 ~하곤 했다(지금은 아니다)'는 과거의 습관을 나타내요. Would you like ~?는 상대에게 정중하게 권하는 말이에요. had better의 부정은 had better not으로, not의 위치를 조심해야 해요.",
    "rules": [
      "would like to + 동사원형은 '~하고 싶다'의 정중한 표현이에요.",
      "had better + 동사원형은 '~하는 게 좋을 거야'라는 강한 충고·경고예요.",
      "had better의 부정은 had better not + 동사원형이에요.",
      "used to + 동사원형은 '예전에 ~하곤 했다(지금은 아님)'는 뜻이에요.",
      "Would you like + 명사/to 동사원형?은 정중하게 권유하는 표현이에요."
    ],
    "examples": [
      {
        "en": "I would like to order a cheeseburger.",
        "ko": "치즈버거를 주문하고 싶어요."
      },
      {
        "en": "You had better take an umbrella.",
        "ko": "우산을 가져가는 게 좋을 거예요."
      },
      {
        "en": "You had better not be late again.",
        "ko": "다시는 늦지 않는 게 좋을 거예요."
      },
      {
        "en": "I used to play the piano when I was young.",
        "ko": "저는 어릴 때 피아노를 치곤 했어요. (지금은 안 쳐요.)"
      },
      {
        "en": "Would you like some tea?",
        "ko": "차 좀 드시겠어요?"
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? I would like ___ a window seat.",
        "choices": [
          "book",
          "to book",
          "booking"
        ],
        "answer": 1,
        "explain": "would like 뒤에는 to + 동사원형이 와요. would like는 want to의 정중한 표현이라고 기억하면 쉬워요."
      },
      {
        "q": "had better의 부정으로 알맞은 것은?",
        "choices": [
          "You had not better go out.",
          "You don't had better go out.",
          "You had better not go out."
        ],
        "answer": 2,
        "explain": "had better의 부정은 not이 better 뒤에 와서 had better not이 돼요. had not better는 어순이 틀린 표현이에요."
      },
      {
        "q": "'나는 예전에 안경을 썼다(지금은 아니다)'로 알맞은 것은?",
        "choices": [
          "I used to wear glasses.",
          "I am used to wear glasses.",
          "I would like to wear glasses."
        ],
        "answer": 0,
        "explain": "과거의 습관은 used to + 동사원형이에요. would like to는 '~하고 싶다'라서 뜻이 달라요."
      },
      {
        "q": "손님에게 정중하게 권할 때 알맞은 것은?",
        "choices": [
          "You want juice?",
          "Do you had better juice?",
          "Would you like some juice?"
        ],
        "answer": 2,
        "explain": "Would you like ~?가 정중한 권유 표현이에요. had better는 충고할 때 쓰는 말이라 권유에는 어울리지 않아요."
      },
      {
        "q": "다음 중 틀린 문장은?",
        "choices": [
          "We had better hurry.",
          "She used to living in Daegu.",
          "I would like to join the club."
        ],
        "answer": 1,
        "explain": "used to 뒤에는 동사원형 live가 와야 해요. living을 쓰면 '~에 익숙하다'는 be used to -ing와 헷갈린 거예요."
      }
    ]
  },
  {
    "id": "m16",
    "title": "명사와 관사 (a, an, the)",
    "key": "처음 말하는 하나는 a/an, 서로 아는 바로 그것은 the예요.",
    "hook": "a/an은 \"아무거나 하나~\", the는 손가락으로 콕 집으며 \"바로 그거!\"라고 외치는 장면을 상상하세요.",
    "summary": "관사는 명사 앞에 붙는 작은 모자 같은 말이에요. a와 an은 '하나의, 어떤'이라는 뜻으로, 셀 수 있는 명사 하나를 처음 말할 때 써요. 발음이 모음 소리(아, 에, 이, 오, 우)로 시작하면 an을 쓰는데, 철자가 아니라 '소리'가 기준이에요. 그래서 an hour, a university가 되는 거예요. the는 앞에서 이미 말했거나 서로 아는 '바로 그것'을 가리킬 때 쓰고, 세상에 하나뿐인 the sun, the moon에도 써요. 식사 이름이나 운동 이름 앞에는 보통 관사를 쓰지 않아요.",
    "rules": [
      "a/an은 셀 수 있는 단수 명사를 처음 말할 때 써요.",
      "a와 an은 첫 '소리'로 정해요. 모음 소리면 an이에요. (an hour, a university)",
      "the는 이미 말했거나 서로 아는 특정한 것, 세상에 하나뿐인 것에 써요.",
      "식사(breakfast, lunch)와 운동 경기(soccer, tennis) 이름 앞에는 관사를 쓰지 않아요.",
      "play the piano처럼 악기 이름 앞에는 the를 붙여요."
    ],
    "examples": [
      {
        "en": "I saw a cat. The cat was sleeping.",
        "ko": "고양이 한 마리를 봤어요. 그 고양이는 자고 있었어요."
      },
      {
        "en": "She is an honest student.",
        "ko": "그녀는 정직한 학생이에요."
      },
      {
        "en": "The sun rises in the east.",
        "ko": "해는 동쪽에서 떠요."
      },
      {
        "en": "We usually have breakfast at seven.",
        "ko": "우리는 보통 7시에 아침을 먹어요."
      },
      {
        "en": "My brother plays the guitar every day.",
        "ko": "제 남동생은 매일 기타를 쳐요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? It takes ___ hour by bus.",
        "choices": [
          "a",
          "an",
          "the"
        ],
        "answer": 1,
        "explain": "hour는 h가 소리 나지 않아 '아워'라는 모음 소리로 시작하므로 an을 써요. 철자가 아니라 소리가 기준이에요."
      },
      {
        "q": "빈칸에 알맞은 것은? He goes to ___ university in Seoul.",
        "choices": [
          "a",
          "an",
          "관사 없음"
        ],
        "answer": 0,
        "explain": "university는 '유'라는 자음 소리로 시작하므로 a를 써요. 철자가 u로 시작한다고 an을 고르면 안 돼요."
      },
      {
        "q": "빈칸에 알맞은 것은? I bought a book. ___ book was really fun.",
        "choices": [
          "A",
          "An",
          "The"
        ],
        "answer": 2,
        "explain": "앞에서 이미 말한 '바로 그 책'이므로 The를 써요. 처음 말할 때는 a, 두 번째부터는 the라고 기억하세요."
      },
      {
        "q": "다음 중 틀린 문장은?",
        "choices": [
          "We play soccer after school.",
          "I had a lunch with my friend.",
          "The moon is bright tonight."
        ],
        "answer": 1,
        "explain": "식사 이름 lunch 앞에는 관사를 쓰지 않아서 I had lunch가 맞아요. 운동 이름과 하나뿐인 달의 관사 사용은 올바른 문장이에요."
      },
      {
        "q": "빈칸에 알맞은 것은? Can you play ___ violin?",
        "choices": [
          "a",
          "관사 없음",
          "the"
        ],
        "answer": 2,
        "explain": "악기 이름 앞에는 the를 붙여서 play the violin이라고 해요. 운동 이름과 달리 악기에는 관사가 필요해요."
      }
    ]
  },
  {
    "id": "m17",
    "title": "셀 수 있는·없는 명사와 some, any",
    "key": "셀 수 없는 명사에는 a/an도 복수형도 못 쓰고, some은 긍정문·any는 부정문과 의문문에 써요.",
    "hook": "물, 돈, 빵은 \"주르륵 흘러서 못 세는 것들\", some은 \"썸 타는 긍정 분위기\", any는 \"애니(any)씽? 하고 묻는 말\"로 기억하세요.",
    "summary": "명사에는 셀 수 있는 것과 없는 것이 있어요. apple, chair처럼 하나, 둘 셀 수 있으면 a를 붙이거나 복수형으로 만들 수 있어요. water, money, bread, information처럼 셀 수 없는 명사는 a/an을 붙일 수도, -s를 붙일 수도 없어요. 셀 수 없는 명사의 양은 a glass of water, two pieces of bread처럼 단위로 표현해요. '조금, 몇 개'라고 할 때 some은 주로 긍정문에, any는 부정문과 의문문에 써요. 단, 무언가를 권하는 의문문에서는 Would you like some coffee?처럼 some을 쓸 수 있어요.",
    "rules": [
      "셀 수 있는 명사는 a/an을 붙이거나 복수형으로 쓸 수 있어요.",
      "셀 수 없는 명사(water, money, information 등)에는 a/an과 복수형을 쓸 수 없어요.",
      "셀 수 없는 명사의 양은 a cup of, a piece of 같은 단위로 세요.",
      "some은 주로 긍정문에, any는 부정문과 의문문에 써요.",
      "권유하는 의문문에서는 Would you like some ~?처럼 some을 써요."
    ],
    "examples": [
      {
        "en": "I drink a glass of milk every morning.",
        "ko": "저는 매일 아침 우유 한 잔을 마셔요."
      },
      {
        "en": "There is some cheese in the fridge.",
        "ko": "냉장고에 치즈가 좀 있어요."
      },
      {
        "en": "We don't have any eggs now.",
        "ko": "지금 우리는 달걀이 하나도 없어요."
      },
      {
        "en": "Do you have any questions?",
        "ko": "질문 있으세요?"
      },
      {
        "en": "She gave me two pieces of advice.",
        "ko": "그녀는 저에게 두 가지 조언을 해 줬어요."
      }
    ],
    "quiz": [
      {
        "q": "다음 중 틀린 문장은?",
        "choices": [
          "I need some money.",
          "He bought two breads.",
          "She drank a cup of coffee."
        ],
        "answer": 1,
        "explain": "bread는 셀 수 없는 명사라 breads라고 못 써요. two pieces of bread처럼 단위로 세야 해요."
      },
      {
        "q": "빈칸에 알맞은 것은? I'm thirsty. I want ___ water.",
        "choices": [
          "any",
          "a",
          "some"
        ],
        "answer": 2,
        "explain": "긍정문에서 '조금'은 some을 써요. any는 부정문·의문문용이고, water는 셀 수 없어서 a도 붙일 수 없어요."
      },
      {
        "q": "빈칸에 알맞은 것은? Is there ___ juice in the bottle?",
        "choices": [
          "any",
          "a",
          "many"
        ],
        "answer": 0,
        "explain": "의문문이므로 any를 써요. juice는 셀 수 없는 명사라 a와 many는 붙일 수 없어요."
      },
      {
        "q": "빈칸에 알맞은 것은? She didn't buy ___ apples.",
        "choices": [
          "some",
          "any",
          "an"
        ],
        "answer": 1,
        "explain": "didn't가 있는 부정문이므로 any를 써요. some은 긍정문에 쓰는 게 기본이에요."
      },
      {
        "q": "다음 중 셀 수 없는 명사는?",
        "choices": [
          "banana",
          "chair",
          "information"
        ],
        "answer": 2,
        "explain": "information은 셀 수 없는 명사라서 an informations처럼 쓸 수 없어요. banana와 chair는 하나, 둘 셀 수 있어요."
      }
    ]
  },
  {
    "id": "m18",
    "title": "인칭대명사·소유대명사·재귀대명사",
    "key": "대명사는 자리에 따라 모양이 바뀌어요. 주격-목적격-소유격, '~의 것'은 소유대명사, '자기 자신'은 -self예요.",
    "hook": "\"아이-마이-미-마인!\" 랩 비트처럼 리듬 타며 외우고, -self는 셀카(selfie) 찍는 '나 자신'으로 기억하세요.",
    "summary": "대명사는 명사를 대신하는 말인데, 문장에서 하는 역할에 따라 모양이 바뀌어요. 주어 자리에는 주격(I, he, she, they), 동사나 전치사 뒤 목적어 자리에는 목적격(me, him, her, them)을 써요. 명사 앞에서 '~의'라고 꾸며 주는 것은 소유격(my, his, her)이에요. 소유대명사(mine, yours, hers)는 '~의 것'이라는 뜻으로, 뒤에 명사 없이 혼자 쓰여요. 재귀대명사(myself, himself, themselves)는 주어와 목적어가 같은 사람일 때 '자기 자신'을 나타내요. by oneself는 '혼자서, 스스로'라는 관용 표현이에요.",
    "rules": [
      "주어 자리에는 주격(I, we, he, she, they)을 써요.",
      "동사나 전치사의 목적어 자리에는 목적격(me, us, him, her, them)을 써요.",
      "소유격(my, your, his) 뒤에는 명사가 오고, 소유대명사(mine, yours, his)는 혼자 써요.",
      "주어와 목적어가 같은 사람이면 재귀대명사(-self/-selves)를 써요.",
      "by + 재귀대명사는 '혼자서, 스스로'라는 뜻이에요."
    ],
    "examples": [
      {
        "en": "This bag is mine, and that one is hers.",
        "ko": "이 가방은 제 것이고, 저것은 그녀의 것이에요."
      },
      {
        "en": "My mom loves me very much.",
        "ko": "엄마는 저를 아주 많이 사랑하세요."
      },
      {
        "en": "He looked at himself in the mirror.",
        "ko": "그는 거울 속 자기 모습을 봤어요."
      },
      {
        "en": "I made this cake by myself.",
        "ko": "저는 이 케이크를 혼자서 만들었어요."
      },
      {
        "en": "Their house is bigger than ours.",
        "ko": "그들의 집은 우리 집보다 커요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? Ms. Park teaches ___ math.",
        "choices": [
          "we",
          "us",
          "our"
        ],
        "answer": 1,
        "explain": "동사 teaches의 목적어 자리이므로 목적격 us를 써요. we는 주어 자리, our는 뒤에 명사가 있어야 해요."
      },
      {
        "q": "빈칸에 알맞은 것은? That umbrella isn't mine. It's ___.",
        "choices": [
          "your",
          "you",
          "yours"
        ],
        "answer": 2,
        "explain": "뒤에 명사 없이 '너의 것'이라고 해야 하므로 소유대명사 yours를 써요. your는 뒤에 명사가 꼭 필요해요."
      },
      {
        "q": "빈칸에 알맞은 것은? She introduced ___ to the new students.",
        "choices": [
          "herself",
          "her",
          "she"
        ],
        "answer": 0,
        "explain": "소개하는 사람과 소개되는 사람이 같은 She이므로 재귀대명사 herself를 써요. her를 쓰면 다른 여자를 소개했다는 뜻이 돼요."
      },
      {
        "q": "다음 중 틀린 문장은?",
        "choices": [
          "Him is my best friend.",
          "I saw them at the park.",
          "This is her notebook."
        ],
        "answer": 0,
        "explain": "주어 자리에는 주격을 써야 하므로 He is my best friend가 맞아요. Him은 목적어 자리에서만 써요."
      },
      {
        "q": "'그는 그 문제를 스스로 풀었다'로 알맞은 것은?",
        "choices": [
          "He solved the problem by him.",
          "He solved the problem by himself.",
          "He solved the problem by his."
        ],
        "answer": 1,
        "explain": "'혼자서, 스스로'는 by + 재귀대명사라서 by himself가 맞아요. by him은 '그에 의해서'라는 다른 뜻이 돼요."
      }
    ]
  },
  {
    "id": "m19",
    "title": "지시대명사와 부정대명사 (this, that, one, it, all, both, each)",
    "key": "정해진 '바로 그것'은 it, 같은 종류의 '아무거나 하나'는 one이에요.",
    "hook": "잃어버린 내 폰을 찾으면 it(그거!), 새로 하나 사면 one(하나 사지 뭐)라고 외쳐 보세요.",
    "summary": "지시대명사는 손가락으로 가리키듯 사물을 콕 집어 말하는 말이에요. 가까이 있으면 this(이것), 멀리 있으면 that(저것)을 쓰고, 여러 개면 these와 those로 바꿔요. 부정대명사는 정해지지 않은 대상을 가리키는데, one은 앞에 나온 명사와 같은 종류의 '아무거나 하나'를 뜻해요. 반대로 it은 앞에서 말한 '바로 그것'을 다시 가리켜요. all은 셋 이상 전부, both는 둘 다, each는 하나하나를 뜻하고, each 뒤에는 단수 명사와 단수 동사가 와요.",
    "rules": [
      "가까운 것은 this/these, 먼 것은 that/those로 가리켜요.",
      "앞에 나온 바로 그 물건은 it, 같은 종류의 다른 하나는 one을 써요.",
      "both는 '둘 다'라서 항상 복수 취급하고, each는 '각각'이라서 항상 단수 취급해요.",
      "all은 셋 이상 전부를 가리키며 뒤에 오는 명사에 따라 단수·복수가 정해져요.",
      "one의 복수형은 ones예요 (예: the red ones)."
    ],
    "examples": [
      {
        "en": "This is my bag, and that is yours.",
        "ko": "이것은 제 가방이고, 저것은 당신 것이에요."
      },
      {
        "en": "I lost my pen, so I need to buy one.",
        "ko": "펜을 잃어버려서 하나 사야 해요."
      },
      {
        "en": "I like this cake. It is really sweet.",
        "ko": "저는 이 케이크가 좋아요. 그것은 정말 달아요."
      },
      {
        "en": "Both of my parents like music.",
        "ko": "우리 부모님은 두 분 다 음악을 좋아하세요."
      },
      {
        "en": "Each student has a different dream.",
        "ko": "학생들은 각자 다른 꿈을 가지고 있어요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? A: Do you have an umbrella? B: No, but I can borrow ___.",
        "choices": [
          "one",
          "it",
          "each"
        ],
        "answer": 0,
        "explain": "정해지지 않은 우산 '아무거나 하나'를 빌리는 것이므로 one이 맞아요. it은 앞에서 이미 정해진 '바로 그 우산'을 가리킬 때 쓰기 때문에 틀려요."
      },
      {
        "q": "빈칸에 알맞은 것은? ___ of my two brothers are tall.",
        "choices": [
          "Each",
          "Both",
          "This"
        ],
        "answer": 1,
        "explain": "'두 명 다'라는 뜻이고 동사가 복수(are)이므로 both가 정답이에요. each는 단수 취급이라 뒤에 is가 와야 해서 틀려요."
      },
      {
        "q": "틀린 문장을 고르세요.",
        "choices": [
          "Each child has a toy.",
          "All the doors were open.",
          "Both my friend like pizza."
        ],
        "answer": 2,
        "explain": "both는 '둘 다'라서 복수 명사와 복수 동사가 필요해요. Both my friends like pizza.가 맞는 문장이에요. 나머지 둘은 올바른 문장이에요."
      },
      {
        "q": "빈칸에 알맞은 것은? Look at ___ stars over there!",
        "choices": [
          "this",
          "these",
          "those"
        ],
        "answer": 2,
        "explain": "over there(저기 멀리)에 있는 복수 명사 stars를 가리키므로 those가 맞아요. these는 가까이 있는 것을 가리킬 때 써서 틀려요."
      },
      {
        "q": "빈칸에 알맞은 것은? I found your phone. Here ___ is.",
        "choices": [
          "one",
          "it",
          "that"
        ],
        "answer": 1,
        "explain": "'네 폰'이라는 정해진 바로 그 물건을 가리키므로 it이 정답이에요. one을 쓰면 아무 폰이나 하나라는 이상한 뜻이 돼요."
      }
    ]
  },
  {
    "id": "m20",
    "title": "형용사와 부사",
    "key": "형용사는 명사를 꾸미고, 부사는 동사·형용사·다른 부사를 꾸며요.",
    "hook": "형용사에 -ly 꼬리를 달면 부사로 변신! 단, friendly처럼 태어날 때부터 -ly인 형용사도 있으니 조심하세요.",
    "summary": "형용사는 명사의 모양이나 상태를 설명하는 말이에요. a fast car처럼 명사 앞에서 꾸미거나, The car is fast.처럼 be동사 뒤에서 주어를 설명해요. 부사는 동사, 형용사, 다른 부사를 꾸며서 '어떻게, 얼마나'를 알려 줘요. 보통 형용사에 -ly를 붙여 만들지만(quick → quickly), fast와 hard처럼 형용사와 부사의 모양이 같은 단어도 있어요. 특히 hardly는 hard의 부사가 아니라 '거의 ~않다'라는 전혀 다른 뜻이니 주의해야 해요.",
    "rules": [
      "형용사는 명사 앞이나 be동사 뒤에서 명사(주어)를 설명해요.",
      "부사는 동사, 형용사, 다른 부사를 꾸미고 보통 '형용사 + -ly' 모양이에요.",
      "fast, hard, late, early는 형용사와 부사의 모양이 똑같아요.",
      "hardly(거의 ~않다), lately(최근에)는 hard, late와 뜻이 완전히 달라요.",
      "always, usually, often 같은 빈도부사는 일반동사 앞, be동사 뒤에 놓아요."
    ],
    "examples": [
      {
        "en": "She is a careful driver.",
        "ko": "그녀는 조심스러운 운전자예요."
      },
      {
        "en": "He drives carefully at night.",
        "ko": "그는 밤에 조심스럽게 운전해요."
      },
      {
        "en": "The train arrived late again.",
        "ko": "기차가 또 늦게 도착했어요."
      },
      {
        "en": "I usually get up at seven.",
        "ko": "저는 보통 7시에 일어나요."
      },
      {
        "en": "This soup is really hot.",
        "ko": "이 수프는 정말 뜨거워요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? He speaks English very ___.",
        "choices": [
          "well",
          "good",
          "goodly"
        ],
        "answer": 0,
        "explain": "동사 speaks를 꾸미므로 부사 well이 필요해요. good은 형용사라서 동사를 꾸밀 수 없고, goodly라는 부사는 없어요."
      },
      {
        "q": "틀린 문장을 고르세요.",
        "choices": [
          "She sings beautifully.",
          "He is a fastly runner.",
          "The test was easy."
        ],
        "answer": 1,
        "explain": "fast는 형용사와 부사 모양이 같아서 fastly라는 단어는 없어요. a fast runner가 맞아요. 나머지 두 문장은 올바른 표현이에요."
      },
      {
        "q": "빈칸에 알맞은 것은? I studied ___ for the exam, but I could ___ sleep.",
        "choices": [
          "hardly / hard",
          "hard / hard",
          "hard / hardly"
        ],
        "answer": 2,
        "explain": "'열심히 공부했다'는 hard, '거의 잘 수 없었다'는 hardly예요. hardly는 hard에 -ly를 붙인 부사가 아니라 '거의 ~않다'라는 다른 단어예요."
      },
      {
        "q": "빈도부사의 위치가 올바른 문장은?",
        "choices": [
          "She always is kind to me.",
          "She is always kind to me.",
          "Always she is kind to me."
        ],
        "answer": 1,
        "explain": "빈도부사 always는 be동사 뒤에 와요. 그래서 She is always kind가 맞아요. 일반동사라면 반대로 동사 앞에 놓아요."
      },
      {
        "q": "빈칸에 알맞은 것은? The movie was ___ boring.",
        "choices": [
          "terrible",
          "terribleness",
          "terribly"
        ],
        "answer": 2,
        "explain": "형용사 boring을 꾸미는 것은 부사이므로 terribly가 정답이에요. terrible은 형용사라서 다른 형용사를 꾸밀 수 없어요."
      }
    ]
  },
  {
    "id": "m21",
    "title": "수량 형용사 (many, much, a few, a little)",
    "key": "셀 수 있으면 many·a few, 셀 수 없으면 much·a little을 써요.",
    "hook": "many의 n은 '낱개(개수)', much의 ch는 '치즈처럼 덩어리(양)'라고 외워 보세요!",
    "summary": "수량 형용사는 명사의 개수나 양이 얼마나 되는지 알려 주는 말이에요. 셀 수 있는 명사에는 many(많은)와 a few(조금 있는)를 쓰고, 물이나 돈처럼 셀 수 없는 명사에는 much(많은)와 a little(조금 있는)을 써요. 여기서 함정이 하나 있어요. a를 빼고 few, little만 쓰면 '거의 없는'이라는 부정적인 뜻으로 변해요. a lot of는 셀 수 있든 없든 둘 다 쓸 수 있는 만능 표현이라 헷갈릴 때 유용해요.",
    "rules": [
      "many + 셀 수 있는 명사의 복수형 (many books)",
      "much + 셀 수 없는 명사 (much water), 주로 부정문과 의문문에서 써요.",
      "a few(조금 있는)와 few(거의 없는)는 셀 수 있는 명사에 써요.",
      "a little(조금 있는)과 little(거의 없는)은 셀 수 없는 명사에 써요.",
      "a lot of / lots of는 셀 수 있는 명사와 셀 수 없는 명사 모두에 쓸 수 있어요."
    ],
    "examples": [
      {
        "en": "How many apples do you want?",
        "ko": "사과 몇 개를 원하세요?"
      },
      {
        "en": "We don't have much time.",
        "ko": "우리는 시간이 많지 않아요."
      },
      {
        "en": "A few friends came to my party.",
        "ko": "친구 몇 명이 제 파티에 왔어요."
      },
      {
        "en": "There is a little milk in the glass.",
        "ko": "잔에 우유가 조금 있어요."
      },
      {
        "en": "He has few hobbies, so weekends are boring.",
        "ko": "그는 취미가 거의 없어서 주말이 지루해요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? How ___ money do you need?",
        "choices": [
          "many",
          "much",
          "a few"
        ],
        "answer": 1,
        "explain": "money는 셀 수 없는 명사라서 much를 써요. many는 셀 수 있는 명사의 개수를 물을 때만 쓸 수 있어요."
      },
      {
        "q": "틀린 문장을 고르세요.",
        "choices": [
          "I have many homework today.",
          "She drinks a lot of coffee.",
          "There are many stars tonight."
        ],
        "answer": 0,
        "explain": "homework는 셀 수 없는 명사라서 many와 함께 쓸 수 없어요. much homework 또는 a lot of homework가 맞아요."
      },
      {
        "q": "빈칸에 알맞은 것은? Hurry up! We have ___ time before the bus leaves.",
        "choices": [
          "a few",
          "few",
          "little"
        ],
        "answer": 2,
        "explain": "'서둘러!'라고 했으니 시간이 '거의 없다'는 부정적인 뜻의 little이 맞아요. a little은 '조금은 있다'는 긍정적인 뜻이라 어울리지 않아요."
      },
      {
        "q": "빈칸에 알맞은 것은? Don't worry. I have ___ questions, so it won't take long.",
        "choices": [
          "a little",
          "a few",
          "much"
        ],
        "answer": 1,
        "explain": "questions는 셀 수 있는 명사의 복수형이므로 a few가 맞아요. a little은 셀 수 없는 명사에만 쓸 수 있어요."
      },
      {
        "q": "셀 수 있는 명사와 셀 수 없는 명사 모두에 쓸 수 있는 것은?",
        "choices": [
          "a lot of",
          "many",
          "a little"
        ],
        "answer": 0,
        "explain": "a lot of는 개수든 양이든 다 쓸 수 있는 만능 표현이에요. many는 셀 수 있는 명사, a little은 셀 수 없는 명사에만 써요."
      }
    ]
  },
  {
    "id": "m22",
    "title": "비교급 만들기와 비교 구문",
    "key": "'~보다 더'는 비교급 + than으로 표현해요.",
    "hook": "짧은 단어는 -er 스티커를 붙이고, 3음절 넘는 긴 단어는 앞에 more 트럭으로 실어 나른다고 상상해 보세요!",
    "summary": "두 가지를 비교해서 '~보다 더 ~하다'라고 말할 때 비교급을 써요. 짧은 단어는 뒤에 -er을 붙이고(tall → taller), 긴 단어는 앞에 more를 붙여요(beautiful → more beautiful). 비교하는 대상 앞에는 than을 놓아요. good은 better, bad는 worse처럼 규칙 없이 변하는 단어들은 그냥 외워야 해요. 비교의 차이를 강조하고 싶으면 비교급 앞에 much, even, far를 붙여서 '훨씬 더'라고 말할 수 있는데, 이때 very는 절대 쓸 수 없어요.",
    "rules": [
      "1음절 짧은 형용사·부사는 뒤에 -er을 붙여요 (old → older).",
      "「자음+y」로 끝나면 y를 i로 바꾸고 -er을 붙여요 (easy → easier).",
      "3음절 이상 긴 단어는 앞에 more를 붙여요 (more expensive).",
      "good-better, bad-worse, many/much-more는 불규칙 변화라 외워야 해요.",
      "비교급 강조는 much, even, far를 쓰고 very는 쓸 수 없어요."
    ],
    "examples": [
      {
        "en": "My brother is taller than me.",
        "ko": "제 남동생은 저보다 키가 커요."
      },
      {
        "en": "This question is easier than that one.",
        "ko": "이 문제는 저 문제보다 더 쉬워요."
      },
      {
        "en": "Health is more important than money.",
        "ko": "건강이 돈보다 더 중요해요."
      },
      {
        "en": "Your idea is much better than mine.",
        "ko": "당신 아이디어가 제 것보다 훨씬 좋아요."
      },
      {
        "en": "Today is worse than yesterday.",
        "ko": "오늘이 어제보다 더 나빠요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? This bag is ___ than that one.",
        "choices": [
          "heavy",
          "heavier",
          "more heavy"
        ],
        "answer": 1,
        "explain": "heavy는 「자음+y」로 끝나니 y를 i로 바꿔 heavier가 돼요. 짧은 단어라 more heavy처럼 more를 붙이지 않아요."
      },
      {
        "q": "빈칸에 알맞은 것은? This phone is ___ expensive than mine.",
        "choices": [
          "most",
          "expensiver",
          "more"
        ],
        "answer": 2,
        "explain": "expensive는 3음절 긴 단어라 more expensive로 비교급을 만들어요. expensiver라는 단어는 없고, most는 최상급에 쓰는 말이에요."
      },
      {
        "q": "틀린 문장을 고르세요.",
        "choices": [
          "My cold got worse last night.",
          "She runs faster than him.",
          "This movie is very better than that one."
        ],
        "answer": 2,
        "explain": "비교급은 very로 강조할 수 없어요. much better처럼 much, even, far를 써야 해요. 나머지 두 문장은 올바른 비교 표현이에요."
      },
      {
        "q": "good의 비교급으로 알맞은 것은?",
        "choices": [
          "better",
          "gooder",
          "more good"
        ],
        "answer": 0,
        "explain": "good은 불규칙 변화라서 better로 바뀌어요. gooder나 more good은 존재하지 않는 형태예요."
      },
      {
        "q": "빈칸에 알맞은 것은? Winter here is ___ colder than in Seoul.",
        "choices": [
          "very",
          "much",
          "more"
        ],
        "answer": 1,
        "explain": "비교급 colder를 강조할 때는 much(훨씬)를 써요. very는 원급만 강조할 수 있고, colder에 이미 -er이 있어서 more를 겹쳐 쓰면 틀려요."
      }
    ]
  },
  {
    "id": "m23",
    "title": "최상급과 원급 비교 (as ~ as)",
    "key": "최고 하나를 뽑을 땐 the + 최상급, 둘이 똑같을 땐 as + 원급 + as를 써요.",
    "hook": "금메달 수여식엔 the가 딱 한 명에게만! 무승부 경기는 as~as 사이에 원급을 그대로 끼워 넣으면 끝!",
    "summary": "셋 이상 중에서 '가장 ~하다'라고 최고를 뽑을 때 최상급을 써요. 짧은 단어는 -est를 붙이고, 긴 단어는 앞에 most를 붙이는데, 최상급 앞에는 거의 항상 the를 붙여요. 비교 범위는 in(장소·집단)이나 of(기간·여럿)로 나타내요. 두 대상이 정도가 같을 때는 as + 원급 + as를 쓰는데, 가운데에는 비교급이 아니라 반드시 원래 모양(원급)이 들어가요. '~만큼 ~하지 않다'는 not as(so) ~ as로 표현해요.",
    "rules": [
      "짧은 단어는 the + -est, 긴 단어는 the most + 원급으로 최상급을 만들어요.",
      "good-best, bad-worst, many/much-most는 불규칙 최상급이에요.",
      "최상급 뒤 비교 범위는 in + 장소·집단, of + 기간·여럿으로 써요.",
      "as ~ as 사이에는 비교급·최상급이 아닌 원급을 넣어요.",
      "'~만큼 ~하지 않다'는 not as(so) + 원급 + as로 표현해요."
    ],
    "examples": [
      {
        "en": "Mt. Halla is the highest mountain in South Korea.",
        "ko": "한라산은 남한에서 가장 높은 산이에요."
      },
      {
        "en": "This is the most famous restaurant in our town.",
        "ko": "여기는 우리 동네에서 가장 유명한 식당이에요."
      },
      {
        "en": "August is the hottest month of the year.",
        "ko": "8월은 일 년 중 가장 더운 달이에요."
      },
      {
        "en": "My cat is as big as your dog.",
        "ko": "우리 고양이는 당신의 개만큼 커요."
      },
      {
        "en": "This book is not as difficult as it looks.",
        "ko": "이 책은 보기만큼 어렵지 않아요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? Jimin is the ___ singer in our class.",
        "choices": [
          "better",
          "good",
          "best"
        ],
        "answer": 2,
        "explain": "'반에서 가장 잘하는'이라는 최상급 자리이므로 good의 불규칙 최상급 best가 맞아요. better는 둘을 비교할 때 쓰는 비교급이에요."
      },
      {
        "q": "빈칸에 알맞은 것은? My bike is as ___ as yours.",
        "choices": [
          "fast",
          "faster",
          "fastest"
        ],
        "answer": 0,
        "explain": "as ~ as 사이에는 원급을 그대로 넣어야 하므로 fast가 정답이에요. faster처럼 비교급을 넣는 것이 가장 흔한 실수예요."
      },
      {
        "q": "틀린 문장을 고르세요.",
        "choices": [
          "It was the worst day of my life.",
          "Seoul is one of the biggest cities in Asia.",
          "He is most smart student in the school."
        ],
        "answer": 2,
        "explain": "최상급 앞에는 the를 붙이고, smart는 짧은 단어라 -est를 써서 the smartest student가 맞아요. 나머지 두 문장은 올바른 최상급 표현이에요."
      },
      {
        "q": "빈칸에 알맞은 것은? December 25th is the busiest day ___ the year for him.",
        "choices": [
          "in",
          "of",
          "at"
        ],
        "answer": 1,
        "explain": "the year 같은 기간이 비교 범위일 때는 of를 써요. in은 in our school처럼 장소나 집단 앞에 써요."
      },
      {
        "q": "'이 방은 저 방만큼 크지 않아요.'를 올바르게 옮긴 것은?",
        "choices": [
          "This room is not as big as that one.",
          "This room is not big as that one.",
          "This room is as not big as that one."
        ],
        "answer": 0,
        "explain": "'~만큼 ~하지 않다'는 not as + 원급 + as 순서로 써요. not은 as 앞에 놓아야 하고, 앞쪽 as를 빼먹으면 틀린 문장이 돼요."
      }
    ]
  },
  {
    "id": "m24",
    "title": "문장의 1형식과 2형식",
    "key": "1형식은 주어+동사로 끝나고, 2형식은 주어를 설명하는 보어가 꼭 필요해요.",
    "hook": "1형식은 '새가 난다'처럼 혼자서도 완성! 2형식 동사는 = (등호)라고 생각하세요. She = happy!",
    "summary": "문장의 형식은 동사 뒤에 무엇이 오는지에 따라 나뉘어요. 1형식은 「주어 + 동사」만으로 뜻이 완성되는 문장이에요. 뒤에 시간이나 장소 표현이 붙어도 그건 꾸미는 말일 뿐이라 형식에는 포함되지 않아요. 2형식은 「주어 + 동사 + 주격보어」로, 보어가 주어의 상태나 정체를 설명해 줘요. be동사, become, look 같은 동사가 대표적이에요. 2형식 동사 뒤 보어 자리에는 부사가 아니라 형용사나 명사가 와야 한다는 것이 시험 단골 포인트예요.",
    "rules": [
      "1형식은 「주어 + 동사」만으로 완전한 문장이에요 (go, come, live, happen 등).",
      "장소·시간 표현(수식어)은 문장 형식을 세는 데 포함되지 않아요.",
      "2형식은 「주어 + 동사 + 주격보어」이고 보어가 주어를 설명해요.",
      "2형식 대표 동사는 be, become, get, stay, seem 등이에요.",
      "2형식 보어 자리에는 형용사나 명사가 오고, 부사는 올 수 없어요."
    ],
    "examples": [
      {
        "en": "The sun rises in the east.",
        "ko": "해는 동쪽에서 떠요."
      },
      {
        "en": "An accident happened last night.",
        "ko": "어젯밤에 사고가 일어났어요."
      },
      {
        "en": "My grandmother lives in Busan.",
        "ko": "우리 할머니는 부산에 사세요."
      },
      {
        "en": "She became a nurse last year.",
        "ko": "그녀는 작년에 간호사가 되었어요."
      },
      {
        "en": "The weather got cold suddenly.",
        "ko": "날씨가 갑자기 추워졌어요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? He seems ___ these days.",
        "choices": [
          "happily",
          "happy",
          "happiness of"
        ],
        "answer": 1,
        "explain": "seem은 2형식 동사라서 뒤에 주어를 설명하는 형용사 보어가 와요. happily는 부사라 보어 자리에 올 수 없어요."
      },
      {
        "q": "다음 중 1형식 문장은?",
        "choices": [
          "She became a doctor.",
          "The baby is cute.",
          "Birds fly in the sky."
        ],
        "answer": 2,
        "explain": "Birds fly는 주어와 동사만으로 완성되고, in the sky는 꾸미는 말이라 1형식이에요. 나머지 둘은 보어(a doctor, cute)가 있는 2형식이에요."
      },
      {
        "q": "틀린 문장을 고르세요.",
        "choices": [
          "My dream came true.",
          "Stay warmly in winter.",
          "The milk went bad."
        ],
        "answer": 1,
        "explain": "stay는 2형식 동사라서 보어 자리에 형용사 warm이 와야 해요. 부사 warmly는 보어가 될 수 없어요. 나머지 둘은 올바른 2형식 문장이에요."
      },
      {
        "q": "빈칸에 알맞은 것은? Something strange ___ this morning.",
        "choices": [
          "happened",
          "became",
          "got"
        ],
        "answer": 0,
        "explain": "happen(일어나다)은 뒤에 아무것도 없이 쓰는 1형식 동사라 이 자리에 딱 맞아요. became과 got은 뒤에 보어가 필요해서 문장이 완성되지 않아요."
      },
      {
        "q": "다음 문장의 형식은? \"Her voice stayed calm.\"",
        "choices": [
          "2형식",
          "1형식",
          "3형식"
        ],
        "answer": 0,
        "explain": "calm이 주어 her voice의 상태를 설명하는 주격보어라서 2형식이에요. 보어가 있으니 1형식이 아니고, 목적어가 없으니 3형식도 아니에요."
      }
    ]
  },
  {
    "id": "m25",
    "title": "문장의 3형식과 4형식 (수여동사)",
    "key": "4형식은 「누구에게 + 무엇을」 순서이고, 3형식으로 바꾸면 to/for/of가 필요해요.",
    "hook": "선물 주는(give) 동사는 욕심쟁이라 목적어를 두 개나 챙겨요. 순서를 바꾸면 통행료로 to를 내야 해요!",
    "summary": "3형식은 「주어 + 동사 + 목적어」로 이루어진 문장이에요. 4형식은 give, send처럼 '주다'라는 뜻이 있는 수여동사가 「간접목적어(~에게) + 직접목적어(~을)」 두 개의 목적어를 갖는 문장이에요. 4형식은 두 목적어의 순서를 바꿔 3형식으로 만들 수 있는데, 이때 '~에게' 앞에 전치사를 붙여요. give, send, show, teach는 to를, make, buy, cook은 for를, ask는 of를 써요. 어떤 동사가 어떤 전치사와 짝인지가 시험의 핵심이에요.",
    "rules": [
      "3형식은 「주어 + 동사 + 목적어」 구조예요.",
      "4형식은 「주어 + 수여동사 + 간접목적어(~에게) + 직접목적어(~을)」 순서예요.",
      "4형식을 3형식으로 바꾸면 「동사 + 직접목적어 + 전치사 + 간접목적어」가 돼요.",
      "give, send, show, teach, tell은 전치사 to와 짝이에요.",
      "make, buy, cook은 for, ask는 of와 짝이에요."
    ],
    "examples": [
      {
        "en": "I sent her a long letter.",
        "ko": "저는 그녀에게 긴 편지를 보냈어요."
      },
      {
        "en": "He showed the picture to his friends.",
        "ko": "그는 친구들에게 그 사진을 보여 줬어요."
      },
      {
        "en": "My dad cooked dinner for us.",
        "ko": "아빠가 우리를 위해 저녁을 요리해 주셨어요."
      },
      {
        "en": "Ms. Park teaches us science.",
        "ko": "박 선생님은 우리에게 과학을 가르쳐 주세요."
      },
      {
        "en": "Can I ask a favor of you?",
        "ko": "부탁 하나 드려도 될까요?"
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? She gave the book ___ me.",
        "choices": [
          "for",
          "to",
          "of"
        ],
        "answer": 1,
        "explain": "give는 3형식으로 바꿀 때 to와 짝인 동사예요. for는 buy, make 같은 동사와, of는 ask와 함께 써요."
      },
      {
        "q": "빈칸에 알맞은 것은? My mom bought a new jacket ___ me.",
        "choices": [
          "for",
          "to",
          "at"
        ],
        "answer": 0,
        "explain": "buy는 3형식으로 바꿀 때 for를 쓰는 동사예요. '~를 위해 사 준다'는 느낌으로 기억하면 쉬워요. to를 쓰면 틀려요."
      },
      {
        "q": "다음 4형식 문장을 3형식으로 바르게 바꾼 것은? \"He told me the truth.\"",
        "choices": [
          "He told the truth for me.",
          "He told me to the truth.",
          "He told the truth to me."
        ],
        "answer": 2,
        "explain": "3형식은 「동사 + 직접목적어 + 전치사 + 간접목적어」 순서이고 tell은 to와 짝이에요. for를 쓰거나 순서를 바꾸지 않으면 틀려요."
      },
      {
        "q": "틀린 문장을 고르세요.",
        "choices": [
          "She made a doll for her sister.",
          "I will send to him a text.",
          "They asked a question of the teacher."
        ],
        "answer": 1,
        "explain": "4형식이면 I will send him a text, 3형식이면 I will send a text to him이어야 해요. 동사 바로 뒤에 to him이 오는 순서는 틀려요."
      },
      {
        "q": "다음 문장의 형식은? \"My uncle writes novels.\"",
        "choices": [
          "3형식",
          "2형식",
          "4형식"
        ],
        "answer": 0,
        "explain": "novels라는 목적어가 하나만 있으므로 3형식이에요. 목적어가 두 개('누구에게 무엇을')여야 4형식이 돼요."
      }
    ]
  },
  {
    "id": "m26",
    "title": "문장의 5형식 (목적격 보어)",
    "key": "5형식은 목적어 뒤에 목적어를 설명하는 보어가 하나 더 오는 문장이에요.",
    "hook": "5형식은 목적어에게 별명표를 붙이는 문장! We call him Captain. → him에게 'Captain' 이름표 착!",
    "summary": "5형식은 「주어 + 동사 + 목적어 + 목적격보어」로 이루어진 문장이에요. 목적격보어는 목적어의 이름, 상태, 행동을 설명해 줘요. call과 name 뒤에는 명사 보어가 오고(call him a genius), make, keep, find 뒤에는 형용사 보어가 자주 와요(make me happy). want, ask, tell 같은 동사는 목적격보어로 to부정사를 써요(want you to come). 4형식과 헷갈리기 쉬운데, 목적어 뒤의 말이 목적어와 같은 대상을 가리키면(him = Captain) 5형식이고, 다른 것이면 4형식이에요.",
    "rules": [
      "5형식은 「주어 + 동사 + 목적어 + 목적격보어」 구조예요.",
      "call, name의 목적격보어는 명사예요 (We named the dog Max).",
      "make, keep, find, leave의 목적격보어로는 형용사가 와요.",
      "want, ask, tell, allow의 목적격보어는 to부정사예요.",
      "목적어와 보어가 같은 대상이면 5형식, 서로 다른 것이면 4형식이에요."
    ],
    "examples": [
      {
        "en": "We call our cat Mimi.",
        "ko": "우리는 우리 고양이를 미미라고 불러요."
      },
      {
        "en": "The news made everyone sad.",
        "ko": "그 소식은 모두를 슬프게 했어요."
      },
      {
        "en": "Please keep the door open.",
        "ko": "문을 열어 두세요."
      },
      {
        "en": "I want you to join our club.",
        "ko": "저는 당신이 우리 동아리에 들어오길 원해요."
      },
      {
        "en": "She told me to wait outside.",
        "ko": "그녀는 저에게 밖에서 기다리라고 말했어요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? The blanket keeps me ___.",
        "choices": [
          "warm",
          "warmly",
          "to warm"
        ],
        "answer": 0,
        "explain": "keep의 목적격보어 자리에는 형용사가 와야 하므로 warm이 맞아요. 부사 warmly는 보어가 될 수 없어요."
      },
      {
        "q": "빈칸에 알맞은 것은? My parents want me ___ early.",
        "choices": [
          "get up",
          "to get up",
          "got up"
        ],
        "answer": 1,
        "explain": "want는 목적격보어로 to부정사를 쓰는 동사라서 to get up이 정답이에요. 동사원형 get up은 사역동사 뒤에서만 써요."
      },
      {
        "q": "틀린 문장을 고르세요.",
        "choices": [
          "We elected her class president.",
          "The teacher allowed us to use phones.",
          "Don't leave the window openly."
        ],
        "answer": 2,
        "explain": "leave의 목적격보어는 형용사여야 하므로 open이 맞아요. 부사 openly를 쓰면 틀린 문장이 돼요. 나머지 둘은 올바른 5형식이에요."
      },
      {
        "q": "다음 중 5형식 문장은?",
        "choices": [
          "She bought him a watch.",
          "They named the baby Jiho.",
          "He gave me some advice."
        ],
        "answer": 1,
        "explain": "the baby = Jiho로 목적어와 보어가 같은 대상이라 5형식이에요. 나머지 둘은 him ≠ a watch처럼 목적어가 두 개인 4형식이에요."
      },
      {
        "q": "빈칸에 알맞은 것은? The doctor advised him ___ smoking.",
        "choices": [
          "stop",
          "stopped",
          "to stop"
        ],
        "answer": 2,
        "explain": "advise는 목적격보어로 to부정사를 쓰는 동사라서 to stop이 정답이에요. 동사원형이나 과거형은 이 자리에 올 수 없어요."
      }
    ]
  },
  {
    "id": "m27",
    "title": "감각동사와 사역동사",
    "key": "감각동사 뒤에는 형용사, 사역동사 뒤에는 동사원형이 와요.",
    "hook": "느낌은 형용사로(smell good), 시키는 건 원형 그대로(make him clean)! '느낌은 형, 심부름은 원형'이라고 외우세요.",
    "summary": "감각동사는 look, sound, smell, taste, feel처럼 오감으로 느끼는 것을 나타내요. 감각동사 뒤에는 부사가 아니라 형용사가 와요. '~처럼 보인다'라고 명사를 이어 붙이고 싶으면 like를 먼저 써야 해요(look like a star). 사역동사는 make, have, let처럼 남에게 무언가를 '시키는' 동사예요. 사역동사의 목적격보어 자리에는 to 없는 동사원형이 와요(made me laugh). 다만 help는 특별해서 동사원형과 to부정사를 둘 다 쓸 수 있어요.",
    "rules": [
      "감각동사(look, sound, smell, taste, feel) 뒤에는 형용사가 와요.",
      "감각동사 뒤에 명사를 쓰려면 like를 먼저 붙여요 (sounds like a plan).",
      "사역동사(make, have, let)의 목적격보어는 to 없는 동사원형이에요.",
      "let은 '허락하다', have는 '하게 하다', make는 '(강제로) 시키다'의 느낌이에요.",
      "help는 목적격보어로 동사원형과 to부정사를 모두 쓸 수 있어요."
    ],
    "examples": [
      {
        "en": "This soup tastes salty.",
        "ko": "이 수프는 짠맛이 나요."
      },
      {
        "en": "That sounds like a great plan.",
        "ko": "그거 정말 좋은 계획처럼 들리네요."
      },
      {
        "en": "My mom made me clean my room.",
        "ko": "엄마는 제가 방을 청소하게 시키셨어요."
      },
      {
        "en": "Let me carry your bag.",
        "ko": "제가 가방을 들어 드릴게요."
      },
      {
        "en": "He helped me (to) find my seat.",
        "ko": "그는 제가 자리를 찾도록 도와줬어요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? These flowers smell ___.",
        "choices": [
          "sweetly",
          "sweet",
          "like sweet"
        ],
        "answer": 1,
        "explain": "감각동사 smell 뒤에는 형용사 sweet이 와요. 부사 sweetly는 올 수 없고, like는 뒤에 명사가 올 때만 써요."
      },
      {
        "q": "빈칸에 알맞은 것은? My dad let me ___ his car.",
        "choices": [
          "to wash",
          "washed",
          "wash"
        ],
        "answer": 2,
        "explain": "let은 사역동사라서 목적격보어로 to 없는 동사원형 wash를 써요. to wash는 want, tell 같은 동사 뒤에서만 써요."
      },
      {
        "q": "틀린 문장을 고르세요.",
        "choices": [
          "You look tired today.",
          "The teacher had us to read aloud.",
          "This bread tastes like cheese."
        ],
        "answer": 1,
        "explain": "have가 사역동사로 쓰이면 보어는 동사원형이라 had us read aloud가 맞아요. to read를 쓰면 틀려요. 나머지 둘은 올바른 문장이에요."
      },
      {
        "q": "빈칸에 알맞은 것은? He looks ___ a movie star.",
        "choices": [
          "like",
          "as if to",
          "such"
        ],
        "answer": 0,
        "explain": "감각동사 뒤에 a movie star라는 명사가 오므로 like가 필요해요. like 없이 look 뒤에 바로 명사를 붙일 수 없어요."
      },
      {
        "q": "빈칸에 두 형태가 모두 가능한 동사는? She ___ me (to) move the boxes.",
        "choices": [
          "made",
          "let",
          "helped"
        ],
        "answer": 2,
        "explain": "help는 목적격보어로 동사원형과 to부정사를 둘 다 쓸 수 있는 특별한 동사예요. made와 let은 동사원형만 가능해서 to move를 쓰면 틀려요."
      }
    ]
  },
  {
    "id": "m28",
    "title": "to부정사의 명사적 용법",
    "key": "to + 동사원형이 '~하는 것'이라는 뜻으로 주어·목적어·보어 자리에 들어가요.",
    "hook": "'투'하고 문 두드리면(to) 동사가 명사 옷 입고 나와요 — '먹다'가 '먹는 것'으로 변신!",
    "summary": "to부정사는 'to + 동사원형' 모양이에요. 이게 명사처럼 쓰이면 '~하는 것, ~하기'라는 뜻이 돼요. 문장에서 주어 자리(~하는 것은), 목적어 자리(~하는 것을), 보어 자리(~하는 것이다)에 들어갈 수 있어요. 주어가 길어지면 It을 앞에 세우고 진짜 주어인 to부정사를 뒤로 보내기도 해요. 예를 들어 'It is fun to swim.'은 '수영하는 것은 재미있다'라는 뜻이에요. to 뒤에는 항상 동사원형이 온다는 것만 꽉 잡으면 돼요.",
    "rules": [
      "to 뒤에는 반드시 동사원형이 와요 (to going ×, to go ○).",
      "명사적 용법은 '~하는 것, ~하기'로 해석해요.",
      "주어·목적어·보어 자리에 to부정사를 넣을 수 있어요.",
      "주어가 긴 to부정사이면 It ~ to 구문으로 바꿔 쓸 수 있어요.",
      "want, hope, plan 같은 동사는 뒤에 to부정사를 목적어로 가져요."
    ],
    "examples": [
      {
        "en": "I want to learn English.",
        "ko": "저는 영어를 배우고 싶어요."
      },
      {
        "en": "To read books is fun.",
        "ko": "책을 읽는 것은 재미있어요."
      },
      {
        "en": "My dream is to be a doctor.",
        "ko": "제 꿈은 의사가 되는 것이에요."
      },
      {
        "en": "It is easy to make a sandwich.",
        "ko": "샌드위치를 만드는 것은 쉬워요."
      },
      {
        "en": "She hopes to visit Paris.",
        "ko": "그녀는 파리에 가기를 바라요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? I want ___ a new bike.",
        "choices": [
          "to buy",
          "buying",
          "buy"
        ],
        "answer": 0,
        "explain": "want는 뒤에 to부정사를 목적어로 가져요. buying이나 동사원형 buy는 want 뒤에 올 수 없어요."
      },
      {
        "q": "빈칸에 알맞은 것은? ___ is important to sleep well.",
        "choices": [
          "That",
          "It",
          "This"
        ],
        "answer": 1,
        "explain": "진짜 주어 to sleep well을 뒤로 보내고 가짜 주어 It을 앞에 써요. That이나 This는 이 자리에 쓰지 않아요."
      },
      {
        "q": "밑줄 친 to부정사가 '~하는 것'(명사)으로 쓰인 문장은? ",
        "choices": [
          "I have a book to read.",
          "He came to see me.",
          "To cook is my hobby."
        ],
        "answer": 2,
        "explain": "To cook은 '요리하는 것'이라는 뜻의 주어예요. 나머지는 각각 명사를 꾸미는 형용사적 용법, 목적을 나타내는 부사적 용법이에요."
      },
      {
        "q": "틀린 문장을 고르세요.",
        "choices": [
          "She plans to move next year.",
          "He wants to going home.",
          "To win is not everything."
        ],
        "answer": 1,
        "explain": "to 뒤에는 동사원형이 와야 하므로 to going은 틀렸어요. to go home으로 고쳐야 해요."
      },
      {
        "q": "빈칸에 알맞은 것은? My goal is ___ the test.",
        "choices": [
          "passes",
          "to pass",
          "passed"
        ],
        "answer": 1,
        "explain": "보어 자리에 to부정사를 써서 '시험에 합격하는 것'이라는 뜻을 만들어요. passes나 passed는 보어 자리에 이렇게 쓸 수 없어요."
      }
    ]
  },
  {
    "id": "m29",
    "title": "to부정사의 형용사적·부사적 용법",
    "key": "명사 뒤의 to부정사는 '~할'(꾸미기), 그 외 자리는 '~하기 위해'(이유·목적)로 해석해요.",
    "hook": "명사 뒤에 딱 붙으면 스티커(꾸미기), 문장에 둥둥 떠 있으면 화살표(목적)라고 상상해 보세요!",
    "summary": "to부정사는 명사 옷도 입지만 형용사 옷, 부사 옷도 입어요. 형용사적 용법은 명사 바로 뒤에 붙어서 '~할, ~해야 할'이라고 꾸며 줘요. 'water to drink'는 '마실 물'이라는 뜻이에요. 부사적 용법은 '~하기 위해서'라는 목적이나 '~해서'라는 감정의 이유를 나타내요. 'I ran to catch the bus.'는 '버스를 타기 위해 달렸다'예요. 위치를 보면 구분이 쉬워요. 명사 뒤에 딱 붙어 있으면 형용사, 동사나 감정 형용사 뒤에 있으면 부사라고 생각하면 돼요.",
    "rules": [
      "형용사적 용법은 명사 바로 뒤에서 '~할'이라고 꾸며요.",
      "부사적 용법의 대표 뜻은 '~하기 위해서'(목적)예요.",
      "happy, sad, glad 같은 감정 형용사 뒤의 to부정사는 '~해서'(감정의 원인)로 해석해요.",
      "형용사적 용법인지 확인하려면 앞의 명사와 '~할 + 명사'로 자연스럽게 이어지는지 보세요.",
      "이 용법들도 to 뒤에는 무조건 동사원형이 와요."
    ],
    "examples": [
      {
        "en": "I need something to eat.",
        "ko": "저는 먹을 것이 필요해요."
      },
      {
        "en": "She has a lot of homework to do.",
        "ko": "그녀는 해야 할 숙제가 많아요."
      },
      {
        "en": "He went to the store to buy milk.",
        "ko": "그는 우유를 사기 위해 가게에 갔어요."
      },
      {
        "en": "I was happy to see you again.",
        "ko": "당신을 다시 만나서 기뻤어요."
      },
      {
        "en": "We study hard to get good grades.",
        "ko": "우리는 좋은 성적을 받기 위해 열심히 공부해요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? Do you have time ___ me?",
        "choices": [
          "help",
          "helping",
          "to help"
        ],
        "answer": 2,
        "explain": "명사 time을 뒤에서 꾸미는 형용사적 용법으로 to help(도와줄 시간)를 써요. 동사원형이나 -ing는 이 자리에 올 수 없어요."
      },
      {
        "q": "to부정사가 '목적(~하기 위해)'으로 쓰인 문장은?",
        "choices": [
          "She got up early to exercise.",
          "I have a letter to send.",
          "To sing is her job."
        ],
        "answer": 0,
        "explain": "to exercise는 '운동하기 위해' 일찍 일어났다는 목적이에요. 나머지는 명사를 꾸미는 형용사적 용법과 주어로 쓰인 명사적 용법이에요."
      },
      {
        "q": "빈칸에 알맞은 것은? I was sad ___ the news.",
        "choices": [
          "heard",
          "to hear",
          "hears"
        ],
        "answer": 1,
        "explain": "감정 형용사 sad 뒤에 to부정사를 쓰면 '그 소식을 들어서 슬펐다'라는 감정의 원인이 돼요. heard나 hears는 형태가 맞지 않아요."
      },
      {
        "q": "밑줄 친 부분의 해석이 알맞은 것은? There is nothing to worry about.",
        "choices": [
          "걱정하기 위해",
          "걱정해서",
          "걱정할"
        ],
        "answer": 2,
        "explain": "nothing이라는 명사를 꾸미는 형용사적 용법이라 '걱정할 것이 없다'로 해석해요. 목적이나 감정의 원인이 아니에요."
      },
      {
        "q": "틀린 문장을 고르세요.",
        "choices": [
          "He came here to fixes the door.",
          "I need a pen to write with.",
          "She was glad to win the game."
        ],
        "answer": 0,
        "explain": "to 뒤에는 동사원형이 와야 하므로 to fixes는 틀리고 to fix로 고쳐야 해요. 나머지 두 문장은 올바른 형용사적·부사적 용법이에요."
      }
    ]
  },
  {
    "id": "m30",
    "title": "to부정사 관용 표현 (too ~ to, enough to)",
    "key": "too ~ to는 '너무 ~해서 못 한다', ~ enough to는 '충분히 ~해서 할 수 있다'예요.",
    "hook": "too는 '투(too)덜투덜' 불평하며 못 하고, enough는 '이너프! 충분해!' 하며 해내는 그림을 떠올려요!",
    "summary": "to부정사에는 통째로 외우면 좋은 표현이 있어요. 'too + 형용사 + to + 동사원형'은 '너무 ~해서 ...할 수 없다'라는 부정의 뜻이에요. 반대로 '형용사 + enough + to + 동사원형'은 '...할 만큼 충분히 ~하다'라는 긍정의 뜻이에요. 주의할 점은 enough가 형용사 뒤에 온다는 거예요. 'enough tall'이 아니라 'tall enough'가 맞아요. too ~ to 문장은 'so ~ that ... can't' 문장으로 바꿔 쓸 수도 있어요.",
    "rules": [
      "too + 형용사/부사 + to부정사 = '너무 ~해서 ...할 수 없다'.",
      "형용사/부사 + enough + to부정사 = '...할 만큼 충분히 ~하다'.",
      "enough는 형용사나 부사 뒤에 놓아요 (tall enough ○, enough tall ×).",
      "too ~ to는 문장에 not이 없어도 '할 수 없다'는 부정의 뜻이에요.",
      "too ~ to는 so ~ that + 주어 + can't로 바꿔 쓸 수 있어요."
    ],
    "examples": [
      {
        "en": "The soup is too hot to eat.",
        "ko": "그 수프는 너무 뜨거워서 먹을 수 없어요."
      },
      {
        "en": "He is old enough to drive.",
        "ko": "그는 운전할 수 있을 만큼 나이가 충분해요."
      },
      {
        "en": "I was too tired to walk home.",
        "ko": "저는 너무 피곤해서 집까지 걸어갈 수 없었어요."
      },
      {
        "en": "She is strong enough to carry the box.",
        "ko": "그녀는 그 상자를 들 만큼 충분히 힘이 세요."
      },
      {
        "en": "This shirt is too small to wear.",
        "ko": "이 셔츠는 너무 작아서 입을 수 없어요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? The bag is ___ heavy to lift.",
        "choices": [
          "enough",
          "too",
          "very"
        ],
        "answer": 1,
        "explain": "'너무 무거워서 들 수 없다'는 too ~ to 구문이에요. very는 to부정사와 이런 짝을 이루지 못해요."
      },
      {
        "q": "어순이 올바른 문장을 고르세요.",
        "choices": [
          "He is enough tall to reach the shelf.",
          "He is tall to reach enough the shelf.",
          "He is tall enough to reach the shelf."
        ],
        "answer": 2,
        "explain": "enough는 형용사 tall 뒤에 와야 해요. enough tall처럼 앞에 쓰면 틀려요."
      },
      {
        "q": "'She is too young to watch this movie.'의 뜻으로 알맞은 것은?",
        "choices": [
          "그녀는 이 영화를 보기에는 너무 어려서 볼 수 없다.",
          "그녀는 어리지만 이 영화를 볼 수 있다.",
          "그녀는 이 영화를 볼 만큼 충분히 어리다."
        ],
        "answer": 0,
        "explain": "too ~ to는 not이 없어도 '너무 ~해서 할 수 없다'는 부정의 뜻이에요. 긍정으로 해석하면 안 돼요."
      },
      {
        "q": "빈칸에 알맞은 것은? The water is warm ___ to swim in.",
        "choices": [
          "too",
          "enough",
          "so"
        ],
        "answer": 1,
        "explain": "'수영할 만큼 충분히 따뜻하다'는 긍정의 뜻이므로 enough를 써요. too를 쓰면 '너무 따뜻해서 못 한다'는 반대 뜻이 돼요."
      },
      {
        "q": "'The box is too big to hide.'와 뜻이 같은 문장은?",
        "choices": [
          "The box is so big that I can hide it.",
          "The box is big enough to hide.",
          "The box is so big that I can't hide it."
        ],
        "answer": 2,
        "explain": "too ~ to는 so ~ that + can't로 바꿔요. can을 쓰거나 enough를 쓰면 '숨길 수 있다'는 반대 뜻이 돼요."
      }
    ]
  },
  {
    "id": "m31",
    "title": "동명사 기초",
    "key": "동사에 -ing를 붙이면 '~하는 것'이라는 명사(동명사)가 돼요.",
    "hook": "동사가 '잉~(-ing)' 하고 콧노래 부르면 명사로 변신 완료! 노래하는 동사 = 동명사!",
    "summary": "동명사는 '동사원형 + -ing' 모양으로, '~하는 것, ~하기'라는 명사 역할을 해요. 명사니까 주어, 목적어, 보어 자리에 들어갈 수 있어요. 'Swimming is fun.'은 '수영하는 것은 재미있다'라는 뜻이에요. 동명사가 주어일 때는 하나의 덩어리로 보고 단수 취급해서 is를 써요. 그리고 in, at, about 같은 전치사 뒤에 동사가 올 때는 반드시 동명사를 써야 해요. enjoy, finish 같은 동사도 뒤에 동명사를 목적어로 가져요.",
    "rules": [
      "동명사는 동사원형에 -ing를 붙여 만들고 '~하는 것'으로 해석해요.",
      "동명사는 명사처럼 주어·목적어·보어 자리에 쓰여요.",
      "동명사 주어는 단수 취급해요 (Running is fun. ○).",
      "전치사 뒤에 동사가 오면 무조건 동명사로 써요 (good at singing).",
      "enjoy, finish, keep 등은 뒤에 동명사를 목적어로 가져요."
    ],
    "examples": [
      {
        "en": "Dancing is my favorite hobby.",
        "ko": "춤추는 것은 제가 가장 좋아하는 취미예요."
      },
      {
        "en": "He enjoys playing soccer.",
        "ko": "그는 축구 하는 것을 즐겨요."
      },
      {
        "en": "She is good at drawing.",
        "ko": "그녀는 그림 그리기를 잘해요."
      },
      {
        "en": "My job is teaching kids.",
        "ko": "제 직업은 아이들을 가르치는 것이에요."
      },
      {
        "en": "Thank you for coming today.",
        "ko": "오늘 와 주셔서 감사해요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? He finished ___ his room.",
        "choices": [
          "cleaning",
          "to clean",
          "clean"
        ],
        "answer": 0,
        "explain": "finish는 뒤에 동명사를 목적어로 가져요. to clean이나 동사원형은 finish 뒤에 올 수 없어요."
      },
      {
        "q": "빈칸에 알맞은 것은? She is interested in ___ photos.",
        "choices": [
          "take",
          "to take",
          "taking"
        ],
        "answer": 2,
        "explain": "전치사 in 뒤에 동사가 올 때는 반드시 동명사를 써요. to부정사나 동사원형은 전치사 뒤에 쓸 수 없어요."
      },
      {
        "q": "틀린 문장을 고르세요.",
        "choices": [
          "Cooking is easy for me.",
          "Watching movies are fun.",
          "He keeps talking in class."
        ],
        "answer": 1,
        "explain": "동명사 주어는 단수 취급하므로 are가 아니라 is를 써야 해요. 나머지 두 문장은 올바른 동명사 문장이에요."
      },
      {
        "q": "빈칸에 알맞은 것은? ___ early is good for your health.",
        "choices": [
          "Get up",
          "Getting up",
          "Got up"
        ],
        "answer": 1,
        "explain": "주어 자리에는 명사가 필요하므로 동명사 Getting up(일찍 일어나는 것)을 써요. 동사원형이나 과거형은 주어가 될 수 없어요."
      },
      {
        "q": "밑줄 친 -ing가 '~하는 것'(동명사)인 문장은?",
        "choices": [
          "The baby is sleeping now.",
          "They were singing loudly.",
          "His hobby is collecting coins."
        ],
        "answer": 2,
        "explain": "collecting coins는 '동전을 모으는 것'이라는 보어로 쓰인 동명사예요. 나머지 두 문장의 -ing는 진행형을 만드는 현재분사예요."
      }
    ]
  },
  {
    "id": "m32",
    "title": "동명사 vs to부정사 (목적어로 구분하기)",
    "key": "enjoy·finish·mind는 동명사만, want·hope·decide는 to부정사만 목적어로 가져요.",
    "hook": "즐기고(enjoy) 끝내는(finish) 건 이미 하는 일이라 -ing, 원하고(want) 결심하는(decide) 건 앞으로 할 일이라 to(→미래 화살표)!",
    "summary": "동사 뒤에 또 동사가 올 때, 어떤 동사는 동명사만, 어떤 동사는 to부정사만 데려와요. enjoy, finish, mind, keep, give up은 동명사(-ing)만 목적어로 가져요. want, hope, decide, plan, promise는 to부정사만 목적어로 가져요. 느낌으로 기억하면 쉬워요. 동명사 짝꿍들은 이미 하고 있거나 해 본 일, to부정사 짝꿍들은 앞으로 하려는 일과 어울려요. like, love, start, begin은 둘 다 쓸 수 있고 뜻 차이도 거의 없어요.",
    "rules": [
      "enjoy, finish, mind, keep, give up 뒤에는 동명사만 와요.",
      "want, hope, decide, plan, promise 뒤에는 to부정사만 와요.",
      "like, love, start, begin은 동명사와 to부정사를 둘 다 쓸 수 있어요.",
      "동명사 짝꿍은 '이미·계속', to부정사 짝꿍은 '앞으로'의 느낌과 어울려요.",
      "헷갈리면 대표 짝 'enjoy -ing / want to'부터 먼저 외워요."
    ],
    "examples": [
      {
        "en": "I decided to join the club.",
        "ko": "저는 그 동아리에 가입하기로 결심했어요."
      },
      {
        "en": "She gave up eating late at night.",
        "ko": "그녀는 밤늦게 먹는 것을 그만두었어요."
      },
      {
        "en": "Do you mind opening the window?",
        "ko": "창문을 열어 주실 수 있나요?"
      },
      {
        "en": "He promised to call me back.",
        "ko": "그는 저에게 다시 전화하겠다고 약속했어요."
      },
      {
        "en": "It started to rain in the morning.",
        "ko": "아침에 비가 내리기 시작했어요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? We plan ___ a trip this summer.",
        "choices": [
          "taking",
          "to take",
          "took"
        ],
        "answer": 1,
        "explain": "plan은 to부정사만 목적어로 가져요. taking을 쓰면 틀려요."
      },
      {
        "q": "빈칸에 알맞은 것은? Would you mind ___ the door?",
        "choices": [
          "closing",
          "to close",
          "closed"
        ],
        "answer": 0,
        "explain": "mind는 동명사만 목적어로 가져요. to close는 mind 뒤에 올 수 없어요."
      },
      {
        "q": "틀린 문장을 고르세요.",
        "choices": [
          "I hope to see you soon.",
          "She loves baking bread.",
          "He enjoys to swim in the sea."
        ],
        "answer": 2,
        "explain": "enjoy는 동명사만 목적어로 가지므로 enjoys swimming으로 고쳐야 해요. hope + to와 love + -ing는 올바른 짝이에요."
      },
      {
        "q": "두 빈칸에 알맞은 짝은? He kept ___ , and I decided ___ him.",
        "choices": [
          "to laugh / helping",
          "laughing / to help",
          "laughing / helping"
        ],
        "answer": 1,
        "explain": "keep은 동명사(laughing), decide는 to부정사(to help)를 목적어로 가져요. 짝을 바꾸면 둘 다 틀려요."
      },
      {
        "q": "동명사와 to부정사를 둘 다 목적어로 쓸 수 있는 동사는?",
        "choices": [
          "finish",
          "want",
          "begin"
        ],
        "answer": 2,
        "explain": "begin은 begin doing과 begin to do 둘 다 가능해요. finish는 동명사만, want는 to부정사만 가져요."
      }
    ]
  },
  {
    "id": "m33",
    "title": "현재분사와 과거분사",
    "key": "-ing(현재분사)는 '~하는(능동)', -ed(과거분사)는 '~된, ~해진(수동)'이에요.",
    "hook": "-ing는 지금 움직이는 액션캠, -ed는 이미 찍혀 버린 사진! 움직이면 -ing, 당했으면 -ed!",
    "summary": "분사는 동사가 형용사처럼 변한 모양이에요. 현재분사는 '동사 + -ing'로 '~하는, ~하고 있는'이라는 능동의 뜻이에요. 과거분사는 보통 '동사 + -ed'(불규칙도 있어요)로 '~된, ~당한'이라는 수동의 뜻이에요. 'a crying baby'는 '울고 있는 아기', 'a broken window'는 '깨진 창문'이에요. 감정 동사에서 특히 헷갈리는데, 감정을 일으키는 쪽이면 -ing, 감정을 느끼는 쪽이면 -ed를 써요. 그래서 지루한 영화는 boring, 지루함을 느낀 나는 bored예요.",
    "rules": [
      "현재분사(-ing)는 '~하는'이라는 능동·진행의 뜻이에요.",
      "과거분사(-ed 등)는 '~된, ~당한'이라는 수동·완료의 뜻이에요.",
      "분사는 형용사처럼 명사를 앞이나 뒤에서 꾸며요.",
      "감정을 주는 사물·상황에는 -ing, 감정을 느끼는 사람에는 -ed를 써요.",
      "과거분사에는 broken, written처럼 불규칙 모양도 있으니 따로 외워요."
    ],
    "examples": [
      {
        "en": "Look at the sleeping cat.",
        "ko": "자고 있는 고양이를 보세요."
      },
      {
        "en": "He fixed the broken chair.",
        "ko": "그는 부서진 의자를 고쳤어요."
      },
      {
        "en": "The movie was really boring.",
        "ko": "그 영화는 정말 지루했어요."
      },
      {
        "en": "I was surprised at the gift.",
        "ko": "저는 그 선물에 놀랐어요."
      },
      {
        "en": "This is a letter written in English.",
        "ko": "이것은 영어로 쓰인 편지예요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? The ___ leaves fell on the road.",
        "choices": [
          "fall",
          "falling",
          "fell"
        ],
        "answer": 1,
        "explain": "'떨어지고 있는 잎'이라는 능동·진행의 뜻이므로 현재분사 falling을 써요. 동사원형이나 과거형은 명사를 꾸밀 수 없어요."
      },
      {
        "q": "빈칸에 알맞은 것은? I ate a ___ egg for breakfast.",
        "choices": [
          "boil",
          "boiling",
          "boiled"
        ],
        "answer": 2,
        "explain": "달걀은 '삶아진' 것이므로 수동의 뜻인 과거분사 boiled를 써요. boiling은 '펄펄 끓고 있는'이라는 뜻이 돼요."
      },
      {
        "q": "빈칸에 알맞은 것은? The news was ___ , so everyone was shocked.",
        "choices": [
          "shocking",
          "shocked",
          "shock"
        ],
        "answer": 0,
        "explain": "뉴스는 충격을 주는 쪽이므로 -ing인 shocking을 써요. shocked는 충격을 받은 사람에게 쓰는 말이에요."
      },
      {
        "q": "틀린 문장을 고르세요.",
        "choices": [
          "I am interested in science.",
          "The game was exciting.",
          "She was very boring after the long class."
        ],
        "answer": 2,
        "explain": "지루함을 느낀 사람에게는 bored를 써야 해요. boring을 쓰면 '그녀가 지루한(재미없는) 사람'이라는 뜻이 돼 버려요."
      },
      {
        "q": "빈칸에 알맞은 것은? Do you know the girl ___ over there?",
        "choices": [
          "stands",
          "standing",
          "stood"
        ],
        "answer": 1,
        "explain": "'저기 서 있는 소녀'처럼 명사를 뒤에서 꾸밀 때 현재분사 standing을 써요. stands는 동사라 이 자리에 올 수 없어요."
      }
    ]
  },
  {
    "id": "m34",
    "title": "수동태 기초 (be + 과거분사)",
    "key": "'~되다, ~당하다'는 be동사 + 과거분사로 나타내요.",
    "hook": "수동태는 카메라 방향 바꾸기! 하는 사람 말고 '당하는 것'을 주인공으로 찍으면 be + p.p.!",
    "summary": "능동태는 '누가 ~한다', 수동태는 '~가 ...된다/당한다'에 초점을 맞춘 문장이에요. 수동태의 기본 모양은 'be동사 + 과거분사(p.p.)'예요. 능동태의 목적어가 수동태의 주어가 되고, 원래 주어는 'by + 행위자'로 뒤에 붙여요. 'Tom cleans the room.'을 수동태로 바꾸면 'The room is cleaned by Tom.'이 돼요. be동사는 새 주어의 수와 인칭에 맞춰야 해요. 누가 했는지 안 중요하거나 모를 때는 by 부분을 생략하기도 해요.",
    "rules": [
      "수동태의 기본 형태는 be동사 + 과거분사예요.",
      "능동태의 목적어가 수동태의 주어 자리로 와요.",
      "행위자는 by + 목적격으로 표시해요 (by him ○, by he ×).",
      "be동사는 새 주어에 맞춰요 (The rooms are cleaned.).",
      "행위자가 중요하지 않으면 by ~는 생략할 수 있어요."
    ],
    "examples": [
      {
        "en": "This cake was made by my mom.",
        "ko": "이 케이크는 엄마가 만드셨어요."
      },
      {
        "en": "English is spoken in many countries.",
        "ko": "영어는 많은 나라에서 사용돼요."
      },
      {
        "en": "The window was broken by the ball.",
        "ko": "그 창문은 공에 맞아 깨졌어요."
      },
      {
        "en": "These photos were taken in Jeju.",
        "ko": "이 사진들은 제주에서 찍혔어요."
      },
      {
        "en": "The door is locked at night.",
        "ko": "그 문은 밤에 잠겨요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? This song ___ loved by many people.",
        "choices": [
          "is",
          "are",
          "be"
        ],
        "answer": 0,
        "explain": "주어 This song이 단수이므로 is를 써요. are는 복수 주어에, be는 그대로 쓸 수 없어요."
      },
      {
        "q": "빈칸에 알맞은 것은? The letter was ___ by Jane.",
        "choices": [
          "write",
          "wrote",
          "written"
        ],
        "answer": 2,
        "explain": "수동태는 be + 과거분사이므로 write의 과거분사 written을 써요. wrote는 과거형이라 be동사 뒤에 올 수 없어요."
      },
      {
        "q": "'He cleans the classroom.'을 수동태로 바르게 바꾼 것은?",
        "choices": [
          "The classroom cleans by him.",
          "The classroom is cleaned by him.",
          "The classroom is clean by he."
        ],
        "answer": 1,
        "explain": "목적어를 주어로 옮기고 is cleaned(be + p.p.)를 쓰고, by 뒤에는 목적격 him을 써요. by he는 틀린 형태예요."
      },
      {
        "q": "틀린 문장을 고르세요.",
        "choices": [
          "The cookies were baked this morning.",
          "The pizza was delivered quickly.",
          "My bag was steal yesterday."
        ],
        "answer": 2,
        "explain": "be동사 뒤에는 과거분사가 와야 하므로 was stolen으로 고쳐야 해요. steal은 동사원형이라 틀렸어요."
      },
      {
        "q": "빈칸에 알맞은 것은? These desks ___ used by students.",
        "choices": [
          "is",
          "are",
          "was"
        ],
        "answer": 1,
        "explain": "주어 These desks가 복수이므로 are를 써요. is와 was는 단수 주어에 쓰는 형태예요."
      }
    ]
  },
  {
    "id": "m35",
    "title": "수동태의 시제·부정문·의문문",
    "key": "수동태는 be동사만 바꿔요 — 시제도, not도, 의문문도 전부 be동사가 담당해요.",
    "hook": "수동태 리모컨 버튼은 be동사 하나뿐! 과거로, 부정으로, 질문으로 — 채널은 be가 다 돌려요!",
    "summary": "수동태에서 시제를 바꾸고 싶으면 be동사만 바꾸면 돼요. 현재는 is/are + p.p., 과거는 was/were + p.p., 미래는 will be + p.p.예요. 과거분사는 그대로 두는 게 포인트예요. 부정문은 be동사 뒤에 not을 넣어서 'is not made'처럼 써요. 의문문은 be동사를 주어 앞으로 보내서 'Was it made in Korea?'처럼 만들어요. 조동사 will이 있으면 will not be + p.p., Will + 주어 + be + p.p.? 순서가 돼요.",
    "rules": [
      "수동태의 시제는 be동사로만 표현해요 (is → was → will be).",
      "과거분사는 시제와 상관없이 항상 그대로예요.",
      "부정문은 be동사 바로 뒤에 not을 넣어요 (was not built).",
      "의문문은 be동사를 주어 앞으로 보내요 (Is it sold here?).",
      "미래 수동태는 will be + 과거분사 순서를 지켜요."
    ],
    "examples": [
      {
        "en": "The bridge was built in 1990.",
        "ko": "그 다리는 1990년에 지어졌어요."
      },
      {
        "en": "The concert will be held next week.",
        "ko": "그 콘서트는 다음 주에 열릴 거예요."
      },
      {
        "en": "This toy is not sold in Korea.",
        "ko": "이 장난감은 한국에서 팔리지 않아요."
      },
      {
        "en": "Was this picture painted by your sister?",
        "ko": "이 그림은 당신의 여동생이 그렸나요?"
      },
      {
        "en": "The homework was not checked yesterday.",
        "ko": "그 숙제는 어제 검사되지 않았어요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? The new library ___ built next year.",
        "choices": [
          "will",
          "will be",
          "is being"
        ],
        "answer": 1,
        "explain": "미래 수동태는 will be + 과거분사예요. will만 쓰면 be가 빠져서 수동태가 되지 않아요."
      },
      {
        "q": "부정문으로 바르게 바꾼 것은? The room was cleaned.",
        "choices": [
          "The room was not cleaned.",
          "The room did not cleaned.",
          "The room not was cleaned."
        ],
        "answer": 0,
        "explain": "수동태 부정문은 be동사 뒤에 not을 넣어요. did not을 쓰거나 not을 be 앞에 두면 틀려요."
      },
      {
        "q": "의문문으로 바르게 바꾼 것은? The car was washed yesterday.",
        "choices": [
          "Did the car washed yesterday?",
          "The car was washed yesterday?",
          "Was the car washed yesterday?"
        ],
        "answer": 2,
        "explain": "수동태 의문문은 be동사를 주어 앞으로 보내요. Did를 쓰면 수동태의 be동사와 겹쳐서 틀려요."
      },
      {
        "q": "빈칸에 알맞은 것은? This phone ___ made in 2020.",
        "choices": [
          "is",
          "was",
          "will"
        ],
        "answer": 1,
        "explain": "2020년이라는 과거의 일이므로 was를 써요. is는 현재, will은 뒤에 be가 없으면 수동태가 안 돼요."
      },
      {
        "q": "틀린 문장을 고르세요.",
        "choices": [
          "The party will be not cancel.",
          "The keys were not found.",
          "Is breakfast served at seven?"
        ],
        "answer": 0,
        "explain": "will의 부정은 will not be + 과거분사 순서라서 will not be canceled로 고쳐야 해요. not의 위치와 cancel의 형태가 둘 다 틀렸어요."
      }
    ]
  },
  {
    "id": "m36",
    "title": "등위 접속사 (and, but, or, so)",
    "key": "and는 더하기, but은 반대, or는 선택, so는 결과예요.",
    "hook": "'앤드'는 손잡고(+), '벗'은 등 돌리고(↔), '오어'는 갈림길(?), '쏘'는 화살표 결과(→)를 그려 보세요!",
    "summary": "등위 접속사는 단어와 단어, 문장과 문장을 같은 자격으로 이어 주는 다리예요. and는 '그리고'로 비슷한 것을 더해요. but은 '그러나'로 반대되는 내용을 이어요. or는 '또는'으로 둘 중 하나를 고르게 해요. so는 '그래서'로 앞의 원인과 뒤의 결과를 연결해요. 연결할 때는 앞뒤 형태를 맞추는 게 좋아요. 예를 들어 'sing and dance'처럼 동사는 동사끼리 이어요. because는 이유, so는 결과라는 점도 헷갈리지 않게 기억해요.",
    "rules": [
      "and는 '그리고', 비슷한 내용을 더할 때 써요.",
      "but은 '그러나', 앞뒤가 반대될 때 써요.",
      "or는 '또는', 둘 중 하나를 선택할 때 써요.",
      "so는 '그래서', 앞이 원인이고 뒤가 결과일 때 써요.",
      "접속사 앞뒤는 같은 형태끼리 이어요 (명사+명사, 동사+동사)."
    ],
    "examples": [
      {
        "en": "I like apples and bananas.",
        "ko": "저는 사과와 바나나를 좋아해요."
      },
      {
        "en": "He is short but very fast.",
        "ko": "그는 키가 작지만 아주 빨라요."
      },
      {
        "en": "Do you want tea or coffee?",
        "ko": "차를 드릴까요, 아니면 커피를 드릴까요?"
      },
      {
        "en": "It was cold, so I wore a coat.",
        "ko": "날씨가 추워서 저는 코트를 입었어요."
      },
      {
        "en": "We can walk or take the bus.",
        "ko": "우리는 걸어가거나 버스를 탈 수 있어요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? I was hungry, ___ I made some noodles.",
        "choices": [
          "but",
          "or",
          "so"
        ],
        "answer": 2,
        "explain": "배가 고픈 것이 원인이고 라면을 만든 것이 결과이므로 so를 써요. but은 반대, or는 선택일 때 써요."
      },
      {
        "q": "빈칸에 알맞은 것은? She studied hard, ___ she failed the test.",
        "choices": [
          "but",
          "so",
          "and"
        ],
        "answer": 0,
        "explain": "열심히 공부했는데 시험에 떨어졌다는 반대 내용이므로 but을 써요. so를 쓰면 '그래서 떨어졌다'가 되어 어색해요."
      },
      {
        "q": "빈칸에 알맞은 것은? Which do you like better, summer ___ winter?",
        "choices": [
          "and",
          "or",
          "so"
        ],
        "answer": 1,
        "explain": "여름과 겨울 중 하나를 고르는 질문이므로 or를 써요. and는 둘 다 더할 때 쓰는 말이에요."
      },
      {
        "q": "틀린 문장을 고르세요.",
        "choices": [
          "He likes to swim and running.",
          "I want juice and cookies.",
          "She was tired, so she went to bed early."
        ],
        "answer": 0,
        "explain": "and 앞뒤는 같은 형태여야 하므로 to swim and to run(또는 swimming and running)으로 맞춰야 해요. 형태가 서로 달라서 틀렸어요."
      },
      {
        "q": "빈칸에 알맞은 것은? Hurry up, ___ you will miss the train.",
        "choices": [
          "and",
          "or",
          "but"
        ],
        "answer": 1,
        "explain": "'명령문 + or'는 '~해라, 그렇지 않으면 ...'이라는 뜻이에요. and를 쓰면 '그러면 ~할 것이다'라는 반대 느낌이 돼요."
      }
    ]
  },
  {
    "id": "m37",
    "title": "시간 접속사 (when, before, after, while)",
    "key": "시간 접속사 뒤에는 '주어+동사'가 오고, 미래 일이라도 시간절 안에서는 현재형을 써요.",
    "hook": "when=~할 때(땡!), before=~하기 전(비포=앞), after=~한 후(애프터=뒤), while=~하는 동안(와~일하는 동안). 시간표처럼 순서만 잡으면 끝!",
    "summary": "시간 접속사는 두 문장을 '시간 순서'로 이어 주는 말이에요. when은 '~할 때', before는 '~하기 전에', after는 '~한 후에', while은 '~하는 동안'이라는 뜻이에요. 접속사 뒤에는 반드시 '주어+동사'가 통째로 와요. 접속사가 이끄는 부분(시간절)은 문장 앞에 와도 되고 뒤에 와도 되는데, 앞에 오면 쉼표를 찍어요. 가장 중요한 함정 하나! 미래의 일이라도 시간절 안에서는 will을 쓰지 않고 현재형을 써요. 'When he will come'이 아니라 'When he comes'라고 해야 해요.",
    "rules": [
      "when은 '~할 때', before는 '~하기 전에', after는 '~한 후에', while은 '~하는 동안'을 뜻해요.",
      "접속사 뒤에는 '주어+동사'가 있는 완전한 절이 와요.",
      "시간절이 문장 앞에 오면 쉼표(,)로 구분해요.",
      "미래의 일이라도 시간절 안에서는 will 대신 현재형을 써요.",
      "while 뒤에는 보통 진행 중인 동작이 와서 '~하는 동안'을 나타내요."
    ],
    "examples": [
      {
        "en": "When I was young, I lived in Busan.",
        "ko": "제가 어렸을 때, 저는 부산에 살았어요."
      },
      {
        "en": "Wash your hands before you eat dinner.",
        "ko": "저녁을 먹기 전에 손을 씻으세요."
      },
      {
        "en": "After the movie ended, we went home.",
        "ko": "영화가 끝난 후에 우리는 집에 갔어요."
      },
      {
        "en": "My phone rang while I was studying.",
        "ko": "제가 공부하는 동안 제 전화가 울렸어요."
      },
      {
        "en": "I will call you when I arrive at the station.",
        "ko": "역에 도착하면 너에게 전화할게."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? \"Brush your teeth ___ you go to bed.\" (자기 전에 이를 닦아라)",
        "choices": [
          "before",
          "after",
          "while"
        ],
        "answer": 0,
        "explain": "'자러 가기 전에' 닦는 것이므로 before가 맞아요. after를 쓰면 '자러 간 후에'가 되어 순서가 뒤집혀요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"___ I was taking a shower, someone knocked on the door.\"",
        "choices": [
          "Before",
          "While",
          "After"
        ],
        "answer": 1,
        "explain": "샤워가 '진행되는 동안' 노크 소리가 난 것이므로 while이 맞아요. before/after는 진행 중이 아니라 앞뒤 순서만 나타내요."
      },
      {
        "q": "어법상 올바른 문장은?",
        "choices": [
          "I will text you when I will get home.",
          "I will text you when I got home.",
          "I will text you when I get home."
        ],
        "answer": 2,
        "explain": "시간절(when ~) 안에서는 미래라도 현재형 get을 써요. when I will get처럼 will을 넣으면 틀려요."
      },
      {
        "q": "두 문장을 자연스럽게 이은 것은? \"He did his homework. Then he played games.\"",
        "choices": [
          "He played games before he did his homework.",
          "After he did his homework, he played games.",
          "While he did his homework, he had played games first."
        ],
        "answer": 1,
        "explain": "숙제가 먼저, 게임이 나중이므로 'After he did his homework'가 순서에 맞아요. 첫 번째 보기는 순서가 반대예요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"___ it rains, I stay at home.\" (비가 올 때 나는 집에 있는다)",
        "choices": [
          "When",
          "After",
          "Before"
        ],
        "answer": 0,
        "explain": "'비가 올 때'라는 뜻이므로 when이 맞아요. after는 '비가 온 후에', before는 '비가 오기 전에'라서 뜻이 달라져요."
      }
    ]
  },
  {
    "id": "m38",
    "title": "이유·조건·명사절 접속사 (because, if, that)",
    "key": "because는 이유, if는 조건, that은 '~라는 것'으로 문장을 명사처럼 만들어 줘요.",
    "hook": "because=왜냐하면(비!커즈 이유가 커즈), if=만약(이프...프면?), that=그거!(문장을 통째로 포장하는 포장지). 접속사는 문장 택배 기사예요.",
    "summary": "because는 '~하기 때문에'라는 이유를 말할 때 써요. if는 '만약 ~하면'이라는 조건을 말할 때 쓰고, 조건절 안에서는 미래 일이라도 현재형을 써요. that은 '~라는 것'이라는 뜻으로, 문장 하나를 통째로 명사처럼 만들어서 think, know, believe 같은 동사 뒤에 넣어 줘요. 이때 that은 말할 때 자주 생략돼요. 세 접속사 모두 뒤에는 '주어+동사'가 있는 완전한 절이 와요. because 뒤에는 이유, because of 뒤에는 명사만 온다는 것도 함께 기억하세요.",
    "rules": [
      "because 뒤에는 '주어+동사'로 된 이유가 와요.",
      "because of 뒤에는 절이 아니라 명사만 와요.",
      "if는 '만약 ~하면'이고, 조건절 안에서는 미래라도 현재형을 써요.",
      "that절은 '~라는 것'이라는 뜻으로 think, know 등의 목적어가 돼요.",
      "목적어로 쓰인 that은 생략할 수 있어요."
    ],
    "examples": [
      {
        "en": "I stayed home because I was sick.",
        "ko": "저는 아파서 집에 있었어요."
      },
      {
        "en": "If you hurry, you can catch the bus.",
        "ko": "서두르면 그 버스를 탈 수 있어요."
      },
      {
        "en": "I think that this song is great.",
        "ko": "저는 이 노래가 훌륭하다고 생각해요."
      },
      {
        "en": "We know that she works hard.",
        "ko": "우리는 그녀가 열심히 일한다는 것을 알아요."
      },
      {
        "en": "If it snows tomorrow, we will make a snowman.",
        "ko": "내일 눈이 오면 우리는 눈사람을 만들 거예요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? \"He was late ___ he missed the bus.\"",
        "choices": [
          "if",
          "that",
          "because"
        ],
        "answer": 2,
        "explain": "버스를 놓친 것이 늦은 '이유'이므로 because가 맞아요. if는 조건, that은 '~라는 것'이라 뜻이 안 맞아요."
      },
      {
        "q": "어법상 올바른 문장은?",
        "choices": [
          "If it will rain, I will take an umbrella.",
          "If it rains, I will take an umbrella.",
          "If it rained tomorrow, I will take an umbrella."
        ],
        "answer": 1,
        "explain": "if 조건절 안에서는 미래라도 현재형 rains를 써요. will rain처럼 will을 넣으면 틀려요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"I believe ___ he is honest.\"",
        "choices": [
          "because",
          "if",
          "that"
        ],
        "answer": 2,
        "explain": "'그가 정직하다는 것'을 믿는 것이므로 believe의 목적어를 만드는 that이 맞아요. because를 쓰면 '정직하기 때문에 믿는다'가 되어 문장이 어색해져요."
      },
      {
        "q": "어법상 틀린 문장은?",
        "choices": [
          "She cried because of the sad movie.",
          "She cried because the movie was sad.",
          "She cried because of the movie was sad."
        ],
        "answer": 2,
        "explain": "because of 뒤에는 명사만 와야 하는데 세 번째 보기는 '주어+동사'가 왔어요. 절이 오면 because를 써야 해요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"___ you are tired, take a rest.\" (피곤하면 쉬어라)",
        "choices": [
          "If",
          "That",
          "Because of"
        ],
        "answer": 0,
        "explain": "'만약 피곤하면'이라는 조건이므로 If가 맞아요. Because of 뒤에는 절이 올 수 없고, That은 조건의 뜻이 없어요."
      }
    ]
  },
  {
    "id": "m39",
    "title": "명령문·제안문·감탄문",
    "key": "명령문은 동사원형으로 시작하고, 제안은 Let's, 감탄은 What+명사 / How+형용사예요.",
    "hook": "명령은 다짜고짜 동사부터(Sit!), 제안은 렛츠고(Let's go!), 감탄은 왓+명사·하우+형용사. '왓명하형'만 외우면 감탄 끝!",
    "summary": "명령문은 상대에게 '~해라'라고 시키는 문장으로, 주어 You를 빼고 동사원형으로 시작해요. '~하지 마라'는 Don't를 동사원형 앞에 붙여요. 제안문은 'Let's+동사원형'으로 '~하자'라고 말해요. 감탄문은 '정말 ~하구나!'라고 놀라움을 표현하는 문장이에요. 명사를 강조하면 'What+(a/an)+형용사+명사(+주어+동사)!', 형용사나 부사를 강조하면 'How+형용사/부사(+주어+동사)!'를 써요. What 뒤에는 명사가 있고 How 뒤에는 명사가 없다는 게 구별 포인트예요.",
    "rules": [
      "명령문은 주어 없이 동사원형으로 시작해요.",
      "부정 명령문은 'Don't+동사원형'으로 써요.",
      "제안문은 'Let's+동사원형'이고, 부정은 'Let's not+동사원형'이에요.",
      "감탄문에서 명사를 강조하면 'What+(a/an)+형용사+명사!'를 써요.",
      "형용사나 부사만 강조하면 'How+형용사/부사!'를 써요."
    ],
    "examples": [
      {
        "en": "Open the window, please.",
        "ko": "창문 좀 열어 주세요."
      },
      {
        "en": "Don't touch the wet paint.",
        "ko": "덜 마른 페인트를 만지지 마세요."
      },
      {
        "en": "Let's have lunch together.",
        "ko": "같이 점심 먹어요."
      },
      {
        "en": "What a beautiful day it is!",
        "ko": "정말 아름다운 날이네요!"
      },
      {
        "en": "How fast he runs!",
        "ko": "그는 정말 빨리 달리네요!"
      }
    ],
    "quiz": [
      {
        "q": "어법상 올바른 명령문은?",
        "choices": [
          "Be quiet in the library.",
          "You be quiet in the library.",
          "Are quiet in the library."
        ],
        "answer": 0,
        "explain": "명령문은 주어 없이 동사원형 Be로 시작해요. Are는 동사원형이 아니어서 명령문에 쓸 수 없어요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"___ go swimming this weekend!\" (이번 주말에 수영하러 가자)",
        "choices": [
          "What",
          "Let's",
          "How"
        ],
        "answer": 1,
        "explain": "'~하자'라는 제안은 'Let's+동사원형'으로 표현해요. What과 How는 감탄문에 쓰는 말이에요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"___ a smart dog it is!\"",
        "choices": [
          "How",
          "So",
          "What"
        ],
        "answer": 2,
        "explain": "뒤에 'a smart dog'라는 명사 덩어리가 있으므로 What을 써요. How 뒤에는 명사 없이 형용사나 부사만 와요."
      },
      {
        "q": "어법상 틀린 문장은?",
        "choices": [
          "Don't be late for class.",
          "Don't run in the hallway.",
          "Don't to eat in the classroom."
        ],
        "answer": 2,
        "explain": "Don't 뒤에는 동사원형이 와야 하므로 'Don't to eat'은 틀려요. to를 빼고 'Don't eat'이라고 해야 해요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"___ kind she is!\" (그녀는 정말 친절하구나!)",
        "choices": [
          "What",
          "How",
          "Let's"
        ],
        "answer": 1,
        "explain": "kind는 형용사이고 뒤에 명사가 없으므로 How를 써요. What을 쓰려면 'What a kind girl!'처럼 명사가 있어야 해요."
      }
    ]
  },
  {
    "id": "m40",
    "title": "의문사 의문문",
    "key": "의문사(who, what, when, where, why, how)를 문장 맨 앞에 두고, 그 뒤는 의문문 어순을 따라요.",
    "hook": "누가(who)·뭘(what)·언제(when)·어디서(where)·왜(why)·어떻게(how) — 기자 6하원칙! 의문사는 항상 무대 맨 앞줄 VIP석이에요.",
    "summary": "의문사 의문문은 Yes/No로 답할 수 없고 구체적인 정보를 묻는 질문이에요. who(누가), what(무엇), when(언제), where(어디서), why(왜), how(어떻게)를 문장 맨 앞에 놓아요. be동사 문장은 '의문사+be동사+주어?', 일반동사 문장은 '의문사+do/does/did+주어+동사원형?' 순서예요. how는 뒤에 형용사를 붙여 how old(몇 살), how much(얼마), how often(얼마나 자주)처럼 확장할 수 있어요. 의문사가 주어일 때는 'Who made this?'처럼 do를 쓰지 않고 바로 동사가 와요.",
    "rules": [
      "의문사는 항상 문장 맨 앞에 와요.",
      "be동사 의문문은 '의문사+be동사+주어?' 순서예요.",
      "일반동사 의문문은 '의문사+do/does/did+주어+동사원형?' 순서예요.",
      "how는 how old, how much, how often처럼 다른 말과 짝지어 쓸 수 있어요.",
      "의문사가 주어이면 do/does 없이 '의문사+동사?'로 물어요."
    ],
    "examples": [
      {
        "en": "Where do you live?",
        "ko": "당신은 어디에 사세요?"
      },
      {
        "en": "What did she buy at the store?",
        "ko": "그녀는 가게에서 무엇을 샀나요?"
      },
      {
        "en": "Why is he angry today?",
        "ko": "그는 오늘 왜 화가 났나요?"
      },
      {
        "en": "How often do you exercise?",
        "ko": "당신은 얼마나 자주 운동하세요?"
      },
      {
        "en": "Who broke this cup?",
        "ko": "누가 이 컵을 깨뜨렸나요?"
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? \"___ is your birthday?\" — \"It's May 5th.\"",
        "choices": [
          "Where",
          "When",
          "Who"
        ],
        "answer": 1,
        "explain": "대답이 날짜이므로 '언제'를 묻는 When이 맞아요. Where는 장소, Who는 사람을 물을 때 써요."
      },
      {
        "q": "어법상 올바른 문장은?",
        "choices": [
          "What time you get up?",
          "What time do you get up?",
          "What time you do get up?"
        ],
        "answer": 1,
        "explain": "일반동사 의문문은 '의문사+do+주어+동사원형' 순서라서 'What time do you get up?'이 맞아요. do가 빠지거나 주어 뒤로 가면 틀려요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"___ old is your brother?\" — \"He is ten.\"",
        "choices": [
          "How",
          "What",
          "Why"
        ],
        "answer": 0,
        "explain": "나이는 'How old ~?'로 물어요. What old나 Why old라는 표현은 없어요."
      },
      {
        "q": "어법상 틀린 문장은?",
        "choices": [
          "Who wants some pizza?",
          "Who does want some pizza?",
          "Who ate my sandwich?"
        ],
        "answer": 1,
        "explain": "Who가 주어일 때는 does 없이 'Who wants ~?'처럼 바로 동사를 써요. 그래서 'Who does want ~?'는 틀린 문장이에요."
      },
      {
        "q": "대답에 어울리는 질문은? \"Because I lost my key.\"",
        "choices": [
          "Where are you going?",
          "How did you come here?",
          "Why are you standing outside?"
        ],
        "answer": 2,
        "explain": "Because(왜냐하면)로 답했으니 '왜'를 묻는 Why 질문이 맞아요. Where와 How에는 장소나 방법으로 답해야 해요."
      }
    ]
  },
  {
    "id": "m41",
    "title": "부가의문문과 간접의문문 기초",
    "key": "부가의문문은 '긍정이면 부정 꼬리', 간접의문문은 '의문사+주어+동사' 순서예요.",
    "hook": "부가의문문은 문장 끝에 붙는 반대말 꼬리(그렇지? 안 그래?), 간접의문문은 질문이 문장 속으로 들어가며 얌전해져서 주어·동사가 제자리로 돌아가요.",
    "summary": "부가의문문은 문장 끝에 붙여서 '그렇지?'라고 확인하는 짧은 꼬리 질문이에요. 앞 문장이 긍정이면 꼬리는 부정, 앞 문장이 부정이면 꼬리는 긍정으로 만들어요. 동사는 앞 문장과 같은 종류(be동사, 조동사, do/does/did)를 쓰고, 주어는 대명사로 바꿔요. 간접의문문은 질문이 다른 문장 안에 들어간 형태예요. 이때는 의문문 어순이 아니라 '의문사+주어+동사'의 평서문 어순으로 바뀌어요. 'Where is he?'가 'I know where he is.'가 되는 것처럼요.",
    "rules": [
      "부가의문문은 앞이 긍정이면 부정 꼬리, 앞이 부정이면 긍정 꼬리를 붙여요.",
      "꼬리의 동사는 앞 문장의 be동사·조동사를 그대로, 일반동사면 do/does/did를 써요.",
      "꼬리의 주어는 반드시 대명사(he, she, it, they 등)로 바꿔요.",
      "간접의문문은 '의문사+주어+동사'의 평서문 어순을 써요.",
      "의문사가 없는 질문을 문장 속에 넣을 때는 if(~인지)를 써요."
    ],
    "examples": [
      {
        "en": "You like coffee, don't you?",
        "ko": "당신은 커피를 좋아하죠, 그렇죠?"
      },
      {
        "en": "She isn't a nurse, is she?",
        "ko": "그녀는 간호사가 아니죠, 그렇죠?"
      },
      {
        "en": "Tom can swim, can't he?",
        "ko": "톰은 수영할 수 있죠, 그렇죠?"
      },
      {
        "en": "I don't know where she lives.",
        "ko": "저는 그녀가 어디에 사는지 몰라요."
      },
      {
        "en": "Do you know if the shop is open?",
        "ko": "그 가게가 열었는지 아세요?"
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? \"It is cold today, ___?\"",
        "choices": [
          "is it",
          "isn't it",
          "doesn't it"
        ],
        "answer": 1,
        "explain": "앞 문장이 긍정(is)이므로 부정 꼬리 isn't it을 붙여요. be동사 문장에는 doesn't이 아니라 be동사를 그대로 써요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"Your parents don't drive, ___?\"",
        "choices": [
          "don't they",
          "do they",
          "are they"
        ],
        "answer": 1,
        "explain": "앞 문장이 부정(don't)이므로 긍정 꼬리 do they가 맞아요. 일반동사 문장이라 are도 쓸 수 없어요."
      },
      {
        "q": "어법상 올바른 문장은?",
        "choices": [
          "Tell me what time it is.",
          "Tell me what time is it.",
          "Tell me what is it time."
        ],
        "answer": 0,
        "explain": "간접의문문은 '의문사+주어+동사' 순서라서 what time it is가 맞아요. is it처럼 뒤집으면 직접 의문문 어순이라 틀려요."
      },
      {
        "q": "두 문장을 하나로 만든 것은? \"I wonder. + Why did he leave early?\"",
        "choices": [
          "I wonder why did he leave early.",
          "I wonder why he leave early.",
          "I wonder why he left early."
        ],
        "answer": 2,
        "explain": "간접의문문에서는 did가 사라지고 동사가 과거형 left로 바뀌어 'why he left early'가 돼요. did를 남기거나 동사를 원형으로 두면 틀려요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"Jenny was at the party, ___?\"",
        "choices": [
          "wasn't she",
          "didn't she",
          "wasn't Jenny"
        ],
        "answer": 0,
        "explain": "앞이 was(긍정)이므로 wasn't를 쓰고, 주어는 대명사 she로 바꿔야 해요. 꼬리에 Jenny라는 이름을 그대로 쓰면 틀려요."
      }
    ]
  },
  {
    "id": "m42",
    "title": "관계대명사 기초 (who, which)",
    "key": "사람 뒤에는 who, 사물·동물 뒤에는 which를 붙여 두 문장을 하나로 이어요.",
    "hook": "who는 '후~'하고 사람을 부르는 소리, which는 '위치'가 어디냐고 물건을 찾는 소리! 사람은 who, 물건은 which.",
    "summary": "관계대명사는 앞에 나온 명사(선행사)를 꾸며 주는 절을 이어 주는 말이에요. 접속사와 대명사, 두 가지 역할을 한 번에 해요. 선행사가 사람이면 who, 사물이나 동물이면 which를 써요. 예를 들어 'I have a friend. + He plays the guitar.'는 'I have a friend who plays the guitar.'로 합칠 수 있어요. 관계대명사가 주어 역할을 하면 바로 뒤에 동사가 오고, 그 동사는 선행사의 수에 맞춰요. 선행사가 단수면 단수 동사, 복수면 복수 동사를 쓰는 거예요.",
    "rules": [
      "선행사가 사람이면 who를 써요.",
      "선행사가 사물이나 동물이면 which를 써요.",
      "관계대명사절은 선행사 바로 뒤에 붙여요.",
      "주격 관계대명사 뒤에는 바로 동사가 와요.",
      "관계대명사절의 동사는 선행사의 단수·복수에 맞춰요."
    ],
    "examples": [
      {
        "en": "I have a friend who speaks Chinese.",
        "ko": "저는 중국어를 하는 친구가 있어요."
      },
      {
        "en": "She bought a bag which has many pockets.",
        "ko": "그녀는 주머니가 많은 가방을 샀어요."
      },
      {
        "en": "The man who lives next door is a doctor.",
        "ko": "옆집에 사는 남자는 의사예요."
      },
      {
        "en": "Look at the bird which is sitting on the roof.",
        "ko": "지붕 위에 앉아 있는 새를 보세요."
      },
      {
        "en": "We watched a movie which made everyone cry.",
        "ko": "우리는 모두를 울린 영화를 봤어요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? \"I know a girl ___ sings very well.\"",
        "choices": [
          "which",
          "who",
          "where"
        ],
        "answer": 1,
        "explain": "선행사 a girl이 사람이므로 who를 써요. which는 사물이나 동물에만 쓸 수 있어요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"This is the cake ___ my mom made.\"",
        "choices": [
          "which",
          "who",
          "when"
        ],
        "answer": 0,
        "explain": "선행사 the cake가 사물이므로 which가 맞아요. who는 사람에게만 써요."
      },
      {
        "q": "어법상 틀린 문장은?",
        "choices": [
          "He has a dog which barks a lot.",
          "I met a woman who teaches math.",
          "She likes the boy which sits in front."
        ],
        "answer": 2,
        "explain": "the boy는 사람이므로 which가 아니라 who를 써야 해요. 나머지 두 문장은 선행사와 관계대명사가 바르게 짝지어졌어요."
      },
      {
        "q": "두 문장을 하나로 만든 것은? \"I read a book. + It was about space.\"",
        "choices": [
          "I read a book who was about space.",
          "I read a book which it was about space.",
          "I read a book which was about space."
        ],
        "answer": 2,
        "explain": "관계대명사 which가 It을 대신하므로 It은 빼고 'which was about space'라고 해요. which 뒤에 it을 또 쓰면 대명사가 두 번 나와서 틀려요."
      },
      {
        "q": "빈칸에 알맞은 동사 형태는? \"The students who ___ in this class are friendly.\"",
        "choices": [
          "is",
          "are",
          "be"
        ],
        "answer": 1,
        "explain": "선행사 The students가 복수이므로 관계대명사절의 동사도 복수형 are를 써요. is는 단수 선행사일 때 써요."
      }
    ]
  },
  {
    "id": "m43",
    "title": "관계대명사 that과 목적격 생략",
    "key": "that은 사람·사물 모두에 쓸 수 있고, 목적격 관계대명사는 통째로 생략할 수 있어요.",
    "hook": "that은 어디든 끼는 만능키! 그리고 목적격은 투명 망토를 입어서 안 보여도 문장이 멀쩡해요. '명사+명사(주어)'가 붙어 있으면 투명 망토 자리예요.",
    "summary": "관계대명사 that은 who와 which를 대신해서 사람, 사물, 동물 모두에 쓸 수 있는 만능 관계대명사예요. 관계대명사가 절 안에서 목적어 역할을 하면 '목적격'이라고 하는데, 목적격 관계대명사 뒤에는 '주어+동사'가 이어져요. 이 목적격 who(m), which, that은 통째로 생략할 수 있어요. 그래서 'the movie that I saw'는 'the movie I saw'라고 해도 똑같은 뜻이에요. 명사 바로 뒤에 또 다른 주어와 동사가 붙어 있으면 관계대명사가 생략된 자리라고 보면 돼요. 단, 주격 관계대명사는 생략할 수 없어요.",
    "rules": [
      "that은 선행사가 사람이든 사물이든 모두 쓸 수 있어요.",
      "목적격 관계대명사 뒤에는 '주어+동사'가 와요.",
      "목적격 관계대명사(whom, which, that)는 생략할 수 있어요.",
      "주격 관계대명사는 생략하면 안 돼요.",
      "관계대명사절 끝에는 선행사를 가리키는 목적어를 다시 쓰지 않아요."
    ],
    "examples": [
      {
        "en": "This is the pen that I lost yesterday.",
        "ko": "이것이 제가 어제 잃어버린 펜이에요."
      },
      {
        "en": "The pizza we ordered was delicious.",
        "ko": "우리가 주문한 피자는 맛있었어요."
      },
      {
        "en": "He is the singer that everyone loves.",
        "ko": "그는 모두가 사랑하는 가수예요."
      },
      {
        "en": "The shoes she wants are too expensive.",
        "ko": "그녀가 원하는 신발은 너무 비싸요."
      },
      {
        "en": "Did you find the letter that I sent you?",
        "ko": "제가 보낸 편지를 찾았나요?"
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? \"He is the actor ___ I like most.\"",
        "choices": [
          "that",
          "which",
          "what"
        ],
        "answer": 0,
        "explain": "선행사 the actor가 사람이므로 that을 쓸 수 있어요. which는 사람에 못 쓰고, what은 선행사가 있을 때 쓸 수 없어요."
      },
      {
        "q": "관계대명사를 생략할 수 있는 문장은?",
        "choices": [
          "I like the girl who lives upstairs.",
          "This is the phone that I use every day.",
          "He has a cat which sleeps all day."
        ],
        "answer": 1,
        "explain": "두 번째 문장의 that은 뒤에 '주어(I)+동사(use)'가 오는 목적격이라 생략할 수 있어요. 나머지는 관계대명사 바로 뒤에 동사가 오는 주격이라 생략하면 안 돼요."
      },
      {
        "q": "어법상 틀린 문장은?",
        "choices": [
          "The book that I read was fun.",
          "The bag that she carries it is heavy.",
          "The song that he wrote is popular."
        ],
        "answer": 1,
        "explain": "that이 이미 the bag을 대신하므로 절 끝에 it을 또 쓰면 안 돼요. 'The bag that she carries is heavy.'가 맞아요."
      },
      {
        "q": "다음 문장에서 생략된 것은? \"The cookies my sister baked are all gone.\"",
        "choices": [
          "주격 관계대명사 who",
          "be동사 are",
          "목적격 관계대명사 that"
        ],
        "answer": 2,
        "explain": "The cookies와 my sister 사이에 목적격 관계대명사 that(또는 which)이 생략되어 있어요. 목적격만 이렇게 생략할 수 있어요."
      },
      {
        "q": "두 문장을 하나로 만든 것은? \"She is wearing the dress. + She bought it last week.\"",
        "choices": [
          "She is wearing the dress that she bought last week.",
          "She is wearing the dress that she bought it last week.",
          "She is wearing the dress who she bought last week."
        ],
        "answer": 0,
        "explain": "that이 it을 대신하므로 it은 빼야 해요. 선행사 the dress는 사물이라 who도 쓸 수 없어요."
      }
    ]
  },
  {
    "id": "m44",
    "title": "There is/are 와 비인칭 주어 it",
    "key": "'~이 있다'는 There is/are, 날씨·시간·요일·거리는 뜻 없는 주어 it으로 말해요.",
    "hook": "There is/are는 '저기~ 있어요!' 하고 소개하는 안내원, it은 날씨·시간 담당의 얼굴 없는 알바생(해석 금지!)이에요.",
    "summary": "'~이 있다'라고 존재를 말할 때는 There is/are로 문장을 시작해요. 뒤에 오는 명사가 진짜 주어라서, 단수면 There is, 복수면 There are를 써요. 부정은 There isn't/aren't, 질문은 Is/Are there ~?로 만들어요. 한편 날씨, 시간, 요일, 날짜, 거리, 명암을 말할 때는 주어 자리에 it을 놓는데, 이 it은 '그것'이라고 해석하지 않아요. 그래서 '비인칭 주어'라고 불러요. 'It is rainy.'는 '그것은 비다'가 아니라 그냥 '비가 와요'라는 뜻이에요.",
    "rules": [
      "뒤의 명사가 단수이면 There is, 복수이면 There are를 써요.",
      "부정문은 There isn't/aren't, 의문문은 Is/Are there ~?로 만들어요.",
      "이때 there는 '거기'라고 해석하지 않아요.",
      "날씨·시간·요일·날짜·거리·명암은 비인칭 주어 it으로 표현해요.",
      "비인칭 주어 it은 '그것'이라고 해석하지 않아요."
    ],
    "examples": [
      {
        "en": "There is a park near my house.",
        "ko": "우리 집 근처에 공원이 하나 있어요."
      },
      {
        "en": "There are two cats under the table.",
        "ko": "탁자 아래에 고양이 두 마리가 있어요."
      },
      {
        "en": "Is there a bank around here?",
        "ko": "이 근처에 은행이 있나요?"
      },
      {
        "en": "It is Friday today.",
        "ko": "오늘은 금요일이에요."
      },
      {
        "en": "It is very dark outside.",
        "ko": "밖이 아주 어두워요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? \"There ___ many people at the concert.\"",
        "choices": [
          "is",
          "are",
          "be"
        ],
        "answer": 1,
        "explain": "뒤의 many people이 복수이므로 There are를 써요. is는 단수 명사가 올 때 써요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"___ is snowing outside.\" (밖에 눈이 오고 있다)",
        "choices": [
          "There",
          "That",
          "It"
        ],
        "answer": 2,
        "explain": "날씨를 말할 때는 비인칭 주어 It을 써요. There is는 '~이 있다'는 존재를 말할 때 쓰는 표현이에요."
      },
      {
        "q": "어법상 틀린 문장은?",
        "choices": [
          "There is an egg in the basket.",
          "There is some water in the bottle.",
          "There is three rooms in the house."
        ],
        "answer": 2,
        "explain": "three rooms는 복수이므로 There are를 써야 해요. 앞의 두 문장은 단수·셀 수 없는 명사라 is가 맞아요."
      },
      {
        "q": "밑줄 친 It의 쓰임이 나머지와 다른 것은?",
        "choices": [
          "It is ten o'clock now.",
          "It is my new watch.",
          "It is far from here to the airport."
        ],
        "answer": 1,
        "explain": "두 번째 문장의 It은 '그것(시계)'을 가리키는 진짜 대명사예요. 나머지는 시간과 거리를 나타내는, 해석하지 않는 비인칭 주어예요."
      },
      {
        "q": "질문에 알맞은 대답은? \"Are there any apples in the fridge?\"",
        "choices": [
          "Yes, there are.",
          "Yes, it is.",
          "Yes, they is."
        ],
        "answer": 0,
        "explain": "Are there ~?로 물으면 there를 그대로 써서 'Yes, there are.'로 답해요. it is는 질문의 형태와 맞지 않고, they is는 수 일치가 틀렸어요."
      }
    ]
  },
  {
    "id": "m45",
    "title": "전치사 (시간·장소)",
    "key": "시간·장소 모두 '점은 at, 면·요일은 on, 큰 덩어리는 in'이에요.",
    "hook": "at은 점(콕!), on은 표면·달력에 딱 붙는 스티커, in은 상자 안에 퐁당! 좁은 것부터 at→on→in, 점점 커져요.",
    "summary": "전치사는 명사 앞에 붙어서 시간과 장소를 알려 주는 작은 말이에요. 시간에서는 정확한 시각에 at(at 7:00), 요일과 날짜에 on(on Monday), 월·연도·계절처럼 긴 기간에 in(in July)을 써요. 장소에서도 규칙이 비슷해요. 한 지점에는 at(at the bus stop), 표면 위에는 on(on the desk), 공간이나 도시·나라 안에는 in(in Seoul)을 써요. '점→면→공간' 순서로 점점 커진다고 기억하면 헷갈리지 않아요. under(아래), next to(옆), in front of(앞), behind(뒤) 같은 위치 전치사도 함께 알아 두세요.",
    "rules": [
      "정확한 시각에는 at을 써요 (at 9:30, at noon).",
      "요일과 날짜에는 on을 써요 (on Sunday, on May 5th).",
      "월·연도·계절·아침/오후에는 in을 써요 (in March, in 2026, in the morning).",
      "장소는 지점이면 at, 표면 위면 on, 공간·도시·나라 안이면 in을 써요.",
      "위치는 under(아래), next to(옆), in front of(앞), behind(뒤)로 나타내요."
    ],
    "examples": [
      {
        "en": "The class starts at nine o'clock.",
        "ko": "수업은 9시에 시작해요."
      },
      {
        "en": "We play soccer on Saturdays.",
        "ko": "우리는 토요일마다 축구를 해요."
      },
      {
        "en": "My family goes camping in summer.",
        "ko": "우리 가족은 여름에 캠핑을 가요."
      },
      {
        "en": "Your keys are on the kitchen table.",
        "ko": "당신의 열쇠는 부엌 식탁 위에 있어요."
      },
      {
        "en": "The bakery is next to the flower shop.",
        "ko": "그 빵집은 꽃 가게 옆에 있어요."
      }
    ],
    "quiz": [
      {
        "q": "빈칸에 알맞은 것은? \"My birthday is ___ October.\"",
        "choices": [
          "at",
          "on",
          "in"
        ],
        "answer": 2,
        "explain": "October는 '월'이므로 in을 써요. on은 요일·날짜, at은 정확한 시각에 써요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"See you ___ Friday!\"",
        "choices": [
          "on",
          "in",
          "at"
        ],
        "answer": 0,
        "explain": "Friday는 요일이므로 on을 써요. in Friday나 at Friday라고 하면 틀려요."
      },
      {
        "q": "빈칸에 알맞은 것은? \"Let's meet ___ the bus stop ___ six.\"",
        "choices": [
          "in / on",
          "at / at",
          "on / in"
        ],
        "answer": 1,
        "explain": "버스 정류장은 한 지점이라 at, 6시는 정확한 시각이라 역시 at을 써요. 둘 다 '점'이라고 생각하면 쉬워요."
      },
      {
        "q": "어법상 틀린 문장은?",
        "choices": [
          "The picture is on the wall.",
          "He lives in Canada.",
          "She is at the morning busy."
        ],
        "answer": 2,
        "explain": "'아침에'는 in the morning이라고 해야 해요. 벽 표면에는 on, 나라 안에는 in이 맞으므로 앞의 두 문장은 올바라요."
      },
      {
        "q": "그림 설명으로 알맞은 것은? 공이 상자 '안'에 있어요.",
        "choices": [
          "The ball is under the box.",
          "The ball is behind the box.",
          "The ball is in the box."
        ],
        "answer": 2,
        "explain": "상자 '안'이므로 in을 써요. under는 '아래', behind는 '뒤'라는 뜻이라 그림과 맞지 않아요."
      }
    ]
  }
];
