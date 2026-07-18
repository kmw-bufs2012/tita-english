/* ───────────────────────────────────────────────
   중학 1800 → 1500 선별 (취업 로드맵 개편)
   ──────────────────────────────────────────────
   [선정 기준] "실무 IT 백엔드에서 비교적 덜 쓰일 용어"를 의미 범주로 제거.
   취업까지 30개월·Java/Spring 병행 학습자라 영어 총량을 줄이는 것이 목적.
   원본 WORD_LIB(1800 문자열)은 손대지 않고 보존하며, 아래 목록으로
   활성 목록만 필터링한다.

   [수량 구성] 제거 300 = 원본 내 중복 정리 4(yawn·stare·reason·chance 재등장분)
              + 아래 선별 296  →  활성 정확히 1,500 (Day 75개)

   [보호 원칙] CS·개발 문맥에서 재등장하는 단어는 흔한 일상어라도 유지:
   curl(HTTP), seed(난수/DB), stream(스트림), trunk(트렁크 기반 개발),
   bucket(S3), worm(악성코드), magic(매직 넘버), slice(슬라이스),
   stash/squash/prune/purge/swap/shuffle(git·CS), sweep(GC) 등.
─────────────────────────────────────────────── */
export const MS_TRIM_REMOVED = [
  // 동물·곤충 (31) — 백엔드 실무 텍스트 등장 빈도 최하
  "hamster","rat","squirrel","gorilla","camel","kangaroo","octopus","lizard","crocodile","hawk","crow","sparrow","pigeon","swan","goose","hen","rooster","peacock","feather","beak","dragonfly","beetle","ladybug","grasshopper","mosquito","snail","fur","paw","claw","cage","aquarium",
  // 자연·농촌 (27)
  "blossom","bush","weed","sunflower","tulip","lily","crop","harvest","grain","wheat","barley","pond","waterfall","tide","coast","shore","peninsula","frost","glacier","cliff","soil","mud","jungle","typhoon","hurricane","drought","volcano",
  // 관혼상제·축제 (12)
  "anniversary","wedding","funeral","ceremony","celebration","firework","parade","marry","divorce","celebrate","congratulate","festive",
  // 동화·마법 (10)
  "heaven","angel","monster","fairy","dragon","miracle","magician","clown","magical","legendary",
  // 비IT 직업 (12)
  "fisherman","sailor","baker","butcher","dentist","vet","poet","chef","waiter","soldier","athlete","referee",
  // 의류·패션 (19)
  "blouse","vest","stocking","sneaker","sandal","slipper","ribbon","zipper","sleeve","collar","jewel","necklace","bracelet","earring","sunglasses","undress","untie","sew","knit",
  // 음식·재료 (26)
  "supper","appetite","grocery","seafood","shrimp","crab","sauce","spice","jam","yogurt","flour","vinegar","garlic","cucumber","cabbage","pumpkin","mushroom","plum","kiwi","pineapple","mango","coconut","walnut","chestnut","peel","knead",
  // 집안·살림 (24)
  "hut","cottage","attic","mattress","drawer","bookcase","couch","curtain","carpet","rug","heater","freezer","stove","faucet","bathtub","shampoo","toothbrush","toothpaste","broom","mop","laundry","detergent","hanger","vacuum",
  // 악기·공연 (5)
  "flute","trumpet","orchestra","choir","melody",
  // 스포츠 (8)
  "volleyball","badminton","hockey","boxing","wrestling","marathon","racket","foul",
  // 여행·이국 (7)
  "voyage","cruise","souvenir","suitcase","harbor","ferry","palace",
  // 학교 유물 (4)
  "kindergarten","abacus","beaker","oration",
  // 저빈도 문학 동사 (80) — 성인 일상·실무 텍스트 저빈도
  "behold","chuckle","clasp","clench","covet","cuddle","dangle","detest","drench","elude","encircle","fathom","fend","fertilize","fidget","flounder","flutter","forage","foretell","forfeit","garner","glisten","gnaw","gobble","gratify","haggle","jab","jeer","jerk","jingle","jostle","lash","loathe","mangle","meander","muddle","munch","muster","nestle","nibble","oust","outdo","outrun","outsmart","pamper","partake","peddle","perch","perpetuate","pester","pluck","poach","pounce","pout","prowl","pummel","quake","rake","recoil","recount","relish","relive","resound","retort","ripen","ruffle","rummage","rupture","rustle","sadden","scald","scamper","scavenge","scoff","scold","scoop","scorch","scour","sculpt","seclude",
  // 저빈도 감정 형용사 (31) — 합성 감정어 위주
  "softhearted","warmhearted","coldhearted","goodhearted","kindhearted","illtempered","illnatured","shorttempered","softspoken","levelheaded","strongwilled","amiable","affable","heartwarming","heartbreaking","tearful","joyless","lighthearted","overjoyed","ecstatic","heartsick","lonesome","wretched","mournful","melancholy","dejected","disheartened","haughty","pompous","obstinate","illbred",
];
export const MS_TRIM_SET = new Set(MS_TRIM_REMOVED);
