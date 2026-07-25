/* ───────────────────────────────────────────────
   Java 입문 문법 — 프로그래밍 실습 코스 (성인 ADHD 친화형)
   ──────────────────────────────────────────────
   목표: 수도권 중소기업 백엔드(Java+Spring) 취업 로드맵의 "Java 입문" 단계.
   영어 단어(Java 입문 200)와 짝을 이뤄, 실제로 코드를 짜고 돌려 보는 힘을 길러요.

   각 유닛 스키마:
   { id, day, title,
     key,      // "딱 이거 하나만!" 한 줄 핵심
     hook,     // 티타식 기억 꿀팁(연상)
     summary,  // 자세한 설명(한 문단)
     rules[],  // 핵심 규칙 목록
     example: { code, output, explain },   // 실행 가능한 예제 + 예상 출력 + 해설
     practice: { task, starter, expectedOutput, hint } // 실습 과제 + 시작 코드 + 정답 출력 + 힌트
   }
   - example.code / practice.starter 는 그대로 컴파일되는 완전한 Java 소스(모두 public class Main).
   - practice.expectedOutput 은 과제를 올바로 풀었을 때 stdout(끝 공백 제외)과 정확히 일치.
─────────────────────────────────────────────── */

export const JAVA_LESSONS = [
  {
    id: "j-hello", day: 1, title: "첫 프로그램 · Hello World",
    key: "모든 Java 프로그램은 main 메서드에서 시작해요.",
    hook: "무대(main)에 올라야 공연이 시작돼요. public static void main = 시작 버튼!",
    summary:
      "Java 코드는 클래스(class) 안에 들어가고, 프로그램은 public static void main(String[] args) 메서드에서 실행이 시작돼요. 화면에 글자를 찍을 때는 System.out.println(...)을 써요. 문장 끝에는 꼭 세미콜론(;)을 붙입니다.",
    rules: [
      "class 이름과 파일 이름은 같아야 해요 (여기서는 Main).",
      "println은 출력 후 줄바꿈, print는 줄바꿈 없이 출력해요.",
      "모든 실행 문장은 세미콜론(;)으로 끝나요.",
    ],
    example: {
      code:
        'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, Java!");\n  }\n}',
      output: "Hello, Java!",
      explain: "main 안의 println이 실행되어 큰따옴표 안 글자가 화면에 찍혀요.",
    },
    practice: {
      task: '화면에 정확히 "Hello, Tita!" 라고 출력하세요.',
      starter:
        'public class Main {\n  public static void main(String[] args) {\n    // 여기에 코드를 작성하세요\n  }\n}',
      expectedOutput: "Hello, Tita!",
      hint: 'System.out.println("Hello, Tita!"); 를 main 안에 넣으세요.',
    },
  },
  {
    id: "j-var", day: 2, title: "변수와 기본 자료형",
    key: "변수는 '타입 이름 = 값;' 순서로 만들어요.",
    hook: "상자에 이름표(변수명)와 종류(타입)를 붙이고 물건(값)을 담는다고 생각해요.",
    summary:
      "변수는 값을 담는 이름 붙은 상자예요. Java는 타입을 먼저 정해요: 정수는 int, 실수는 double, 참/거짓은 boolean, 글자 하나는 char. 한 번 정한 타입에는 그 종류의 값만 담을 수 있어요.",
    rules: [
      "int age = 20; 처럼 '타입 이름 = 값;' 순서예요.",
      "double은 소수점, boolean은 true/false, char는 작은따옴표 'A'.",
      "변수 이름은 소문자로 시작하고 camelCase로 써요 (myAge).",
    ],
    example: {
      code:
        'public class Main {\n  public static void main(String[] args) {\n    int age = 20;\n    double height = 175.5;\n    boolean isStudent = true;\n    System.out.println(age);\n    System.out.println(height);\n    System.out.println(isStudent);\n  }\n}',
      output: "20\n175.5\ntrue",
      explain: "각 변수를 만들고 println으로 값을 한 줄씩 찍었어요.",
    },
    practice: {
      task: "int 변수 score에 95를 담고, 그 값을 출력하세요.",
      starter:
        'public class Main {\n  public static void main(String[] args) {\n    // score 변수를 만들고 출력하세요\n  }\n}',
      expectedOutput: "95",
      hint: "int score = 95; 다음 줄에 System.out.println(score);",
    },
  },
  {
    id: "j-string", day: 3, title: "문자열 String",
    key: "여러 글자는 String, 큰따옴표로 감싸요.",
    hook: "String = 글자를 실(string)에 꿴 목걸이. + 로 목걸이를 이어 붙여요.",
    summary:
      "String은 글자들의 묶음이에요. 큰따옴표(\")로 감싸고, + 연산자로 문자열을 이어 붙일 수 있어요(연결). 숫자와 문자열을 + 하면 숫자가 문자열로 바뀌어 이어져요.",
    rules: [
      'String name = "Tita"; 처럼 큰따옴표를 써요.',
      '문자열 연결: "Hi, " + name → "Hi, Tita"',
      '문자열 + 숫자: "점수: " + 95 → "점수: 95"',
    ],
    example: {
      code:
        'public class Main {\n  public static void main(String[] args) {\n    String name = "Tita";\n    int score = 95;\n    System.out.println("Hi, " + name + "! Score: " + score);\n  }\n}',
      output: "Hi, Tita! Score: 95",
      explain: "문자열과 변수, 숫자를 + 로 이어 한 줄로 출력했어요.",
    },
    practice: {
      task: 'String 변수 city에 "Seoul"을 담고, "I live in Seoul" 이라고 출력하세요.',
      starter:
        'public class Main {\n  public static void main(String[] args) {\n    // city 변수를 만들고 문장을 완성해 출력하세요\n  }\n}',
      expectedOutput: "I live in Seoul",
      hint: 'String city = "Seoul"; 다음 System.out.println("I live in " + city);',
    },
  },
  {
    id: "j-op", day: 4, title: "산술 연산자",
    key: "+ - * / 와 나머지 % 로 계산해요.",
    hook: "%는 '나머지 지킴이'. 10을 3으로 나누면 나머지 1을 딱 지켜줘요.",
    summary:
      "숫자 계산은 +(덧셈) -(뺄셈) *(곱셈) /(나눗셈) %(나머지)로 해요. 주의: 정수끼리 나누면 소수점이 버려져요(7/2 = 3). 소수 결과가 필요하면 double을 써요.",
    rules: [
      "int 7 / 2 = 3 (몫만 남고 소수점 버림).",
      "7 % 2 = 1 (나머지). 짝수/홀수 판별에 자주 써요.",
      "double 7.0 / 2 = 3.5 (하나라도 실수면 실수 계산).",
    ],
    example: {
      code:
        'public class Main {\n  public static void main(String[] args) {\n    int a = 17, b = 5;\n    System.out.println(a + b);\n    System.out.println(a / b);\n    System.out.println(a % b);\n  }\n}',
      output: "22\n3\n2",
      explain: "17+5=22, 17/5는 몫 3, 17%5는 나머지 2.",
    },
    practice: {
      task: "int 변수 a=23, b=4 를 만들고 a를 b로 나눈 나머지를 출력하세요.",
      starter:
        'public class Main {\n  public static void main(String[] args) {\n    int a = 23, b = 4;\n    // 나머지를 출력하세요\n  }\n}',
      expectedOutput: "3",
      hint: "나머지는 % 연산자예요: System.out.println(a % b);",
    },
  },
  {
    id: "j-cast", day: 5, title: "형변환 (타입 캐스팅)",
    key: "(int)처럼 괄호로 타입을 강제로 바꿔요.",
    hook: "(int) 는 소수점 '싹둑 가위'. 3.9도 3으로 잘라버려요(반올림 아님!).",
    summary:
      "다른 타입으로 값을 바꾸는 걸 형변환이라 해요. 작은 그릇→큰 그릇(int→double)은 자동, 큰 그릇→작은 그릇(double→int)은 (int)처럼 직접 표시해야 해요. double→int는 소수점을 버려요(반올림 아님).",
    rules: [
      "자동 형변환: int → double (안전해서 저절로).",
      "강제 형변환: (int)3.9 → 3 (소수점 버림).",
      "int / int 결과를 실수로: (double)7 / 2 → 3.5",
    ],
    example: {
      code:
        'public class Main {\n  public static void main(String[] args) {\n    double pi = 3.9;\n    int cut = (int) pi;\n    System.out.println(cut);\n    System.out.println((double) 7 / 2);\n  }\n}',
      output: "3\n3.5",
      explain: "(int)3.9는 3으로 잘리고, (double)7/2는 실수 나눗셈이라 3.5.",
    },
    practice: {
      task: "double 변수 temp=36.7 을 (int)로 바꿔 출력하세요.",
      starter:
        'public class Main {\n  public static void main(String[] args) {\n    double temp = 36.7;\n    // (int)로 바꿔 출력하세요\n  }\n}',
      expectedOutput: "36",
      hint: "System.out.println((int) temp); — 소수점은 버려져요.",
    },
  },
  {
    id: "j-if", day: 6, title: "조건문 if / else",
    key: "if (조건) { ... } else { ... } — 조건이 true면 if 블록 실행.",
    hook: "if는 갈림길. 조건이 참이면 왼쪽, 아니면(else) 오른쪽 길로 가요.",
    summary:
      "if는 조건이 true일 때만 { } 안 코드를 실행해요. else는 조건이 false일 때, else if는 또 다른 조건을 이어서 검사해요. 비교는 == (같다), != (다르다), > < >= <= 를 써요.",
    rules: [
      "== 는 '같다' 비교 (= 는 대입이라 서로 달라요).",
      "조건은 boolean 결과여야 해요 (score >= 60).",
      "else if 로 여러 갈래를 만들 수 있어요.",
    ],
    example: {
      code:
        'public class Main {\n  public static void main(String[] args) {\n    int score = 75;\n    if (score >= 90) {\n      System.out.println("A");\n    } else if (score >= 60) {\n      System.out.println("Pass");\n    } else {\n      System.out.println("Fail");\n    }\n  }\n}',
      output: "Pass",
      explain: "75는 90 미만이지만 60 이상이라 else if 블록의 Pass가 출력돼요.",
    },
    practice: {
      task: 'int 변수 age=20 이 19 이상이면 "adult", 아니면 "minor"를 출력하세요.',
      starter:
        'public class Main {\n  public static void main(String[] args) {\n    int age = 20;\n    // if / else 로 판단해 출력하세요\n  }\n}',
      expectedOutput: "adult",
      hint: 'if (age >= 19) { System.out.println("adult"); } else { System.out.println("minor"); }',
    },
  },
  {
    id: "j-logic", day: 7, title: "비교·논리 연산자",
    key: "&&(그리고) ||(또는) !(아니다) 로 조건을 합쳐요.",
    hook: "&&는 '둘 다', ||는 '하나만'. 문 두 개 다 열려야 통과(&&), 하나만 열려도 통과(||).",
    summary:
      "여러 조건을 합칠 땐 && (둘 다 참이어야 참), || (하나만 참이어도 참), ! (참↔거짓 뒤집기)를 써요. 나이 범위 검사처럼 두 조건을 동시에 볼 때 유용해요.",
    rules: [
      "a && b : a 와 b 가 모두 true 일 때만 true.",
      "a || b : 둘 중 하나라도 true 면 true.",
      "!a : a 가 true 면 false, false 면 true.",
    ],
    example: {
      code:
        'public class Main {\n  public static void main(String[] args) {\n    int age = 25;\n    boolean ok = age >= 20 && age < 30;\n    System.out.println(ok);\n    System.out.println(!ok);\n  }\n}',
      output: "true\nfalse",
      explain: "25는 20 이상이고 30 미만이라 둘 다 참 → true. !ok 는 그 반대.",
    },
    practice: {
      task: "int 변수 n=8 이 짝수이면서 10 미만이면 true를 출력하세요. (n%2==0 과 n<10)",
      starter:
        'public class Main {\n  public static void main(String[] args) {\n    int n = 8;\n    // 두 조건을 && 로 합쳐 출력하세요\n  }\n}',
      expectedOutput: "true",
      hint: "System.out.println(n % 2 == 0 && n < 10);",
    },
  },
  {
    id: "j-for", day: 8, title: "반복문 for",
    key: "for (초기값; 조건; 증가) { ... } — 정해진 횟수만큼 반복.",
    hook: "for는 '계단 오르기'. 시작(초기값)→계속 오를지(조건)→한 칸 올라(증가) 반복.",
    summary:
      "같은 일을 여러 번 할 때 for를 써요. 괄호 안은 세 부분: 초기값(i=1), 계속 조건(i<=5), 매회 변화(i++). 조건이 참인 동안 { } 안을 반복해요.",
    rules: [
      "for (int i = 1; i <= 5; i++) 는 1부터 5까지 5번 반복.",
      "i++ 는 i = i + 1 과 같아요 (1씩 증가).",
      "반복 변수 i 는 보통 0 또는 1부터 시작해요.",
    ],
    example: {
      code:
        'public class Main {\n  public static void main(String[] args) {\n    for (int i = 1; i <= 3; i++) {\n      System.out.println("count " + i);\n    }\n  }\n}',
      output: "count 1\ncount 2\ncount 3",
      explain: "i가 1,2,3 일 때 각각 한 줄씩 출력하고 4가 되면 조건이 거짓이라 멈춰요.",
    },
    practice: {
      task: "for문으로 1부터 5까지 한 줄에 하나씩 숫자를 출력하세요.",
      starter:
        'public class Main {\n  public static void main(String[] args) {\n    // for문으로 1~5를 출력하세요\n  }\n}',
      expectedOutput: "1\n2\n3\n4\n5",
      hint: "for (int i = 1; i <= 5; i++) { System.out.println(i); }",
    },
  },
  {
    id: "j-while", day: 9, title: "반복문 while",
    key: "while (조건) { ... } — 조건이 참인 동안 계속 반복.",
    hook: "while은 '~하는 동안'. 조건이 참인 '동안' 계속 돌아요. 조건을 바꿔줘야 멈춰요!",
    summary:
      "반복 횟수가 정해지지 않았을 때 while을 써요. 조건이 true인 동안 { } 안을 반복해요. 블록 안에서 조건에 영향을 주는 값을 바꿔주지 않으면 무한 반복(무한 루프)에 빠지니 주의!",
    rules: [
      "while (조건) 은 조건이 참인 동안 반복.",
      "블록 안에서 변수를 바꿔 언젠가 조건이 거짓이 되게 해야 해요.",
      "횟수가 정해졌으면 for, 아니면 while 이 자연스러워요.",
    ],
    example: {
      code:
        'public class Main {\n  public static void main(String[] args) {\n    int n = 3;\n    while (n > 0) {\n      System.out.println(n);\n      n--;\n    }\n    System.out.println("go!");\n  }\n}',
      output: "3\n2\n1\ngo!",
      explain: "n을 3부터 1씩 줄이며 출력하고, 0이 되면 조건이 거짓이라 멈춘 뒤 go! 출력.",
    },
    practice: {
      task: "while문으로 5, 4, 3, 2, 1 을 한 줄에 하나씩 출력하세요.",
      starter:
        'public class Main {\n  public static void main(String[] args) {\n    int n = 5;\n    // while문으로 5부터 1까지 출력하세요\n  }\n}',
      expectedOutput: "5\n4\n3\n2\n1",
      hint: "while (n > 0) { System.out.println(n); n--; }",
    },
  },
  {
    id: "j-array", day: 10, title: "배열 (array)",
    key: "같은 타입 여러 개는 배열에, 번호(인덱스)는 0부터.",
    hook: "배열은 '칸 나뉜 사물함'. 첫 칸이 0번! length는 칸 개수.",
    summary:
      "배열은 같은 타입의 값 여러 개를 한 줄로 모아 담아요. int[] nums = {10,20,30}; 처럼 만들고, nums[0]로 첫 번째(0번)에 접근해요. nums.length는 칸의 개수예요.",
    rules: [
      "선언: int[] nums = {10, 20, 30};",
      "인덱스는 0부터: 첫 값은 nums[0], 마지막은 nums[length-1].",
      "칸 개수는 nums.length (괄호 없음).",
    ],
    example: {
      code:
        'public class Main {\n  public static void main(String[] args) {\n    int[] nums = {10, 20, 30};\n    System.out.println(nums[0]);\n    System.out.println(nums[2]);\n    System.out.println(nums.length);\n  }\n}',
      output: "10\n30\n3",
      explain: "0번은 10, 2번은 30, 칸은 모두 3개예요.",
    },
    practice: {
      task: 'String[] fruits = {"apple", "banana", "cherry"}; 에서 마지막 값을 출력하세요.',
      starter:
        'public class Main {\n  public static void main(String[] args) {\n    String[] fruits = {"apple", "banana", "cherry"};\n    // 마지막 값을 출력하세요\n  }\n}',
      expectedOutput: "cherry",
      hint: "마지막 인덱스는 length-1: System.out.println(fruits[fruits.length - 1]);",
    },
  },
  {
    id: "j-foreach", day: 11, title: "향상된 for문 (for-each)",
    key: "for (타입 x : 배열) — 배열을 처음부터 끝까지 하나씩.",
    hook: "for-each는 '한 명씩 호명'. 배열 속 값을 x에 하나씩 담아 순서대로 불러줘요.",
    summary:
      "배열의 모든 값을 차례로 꺼낼 때 for-each가 간편해요. 인덱스 없이 for (int x : nums) 라고 쓰면 x에 값이 하나씩 담기며 반복돼요. 값을 읽어 처리할 때 딱 좋아요.",
    rules: [
      "for (int x : nums) — nums의 값을 x에 하나씩.",
      "인덱스가 필요 없을 때 코드가 짧아져요.",
      "합계 구하기 같은 순회에 자주 써요.",
    ],
    example: {
      code:
        'public class Main {\n  public static void main(String[] args) {\n    int[] nums = {1, 2, 3, 4};\n    int sum = 0;\n    for (int x : nums) {\n      sum = sum + x;\n    }\n    System.out.println(sum);\n  }\n}',
      output: "10",
      explain: "x에 1,2,3,4가 차례로 담기며 sum에 더해져 최종 10.",
    },
    practice: {
      task: "int[] nums = {5, 10, 15}; 의 모든 값을 더한 합계를 출력하세요.",
      starter:
        'public class Main {\n  public static void main(String[] args) {\n    int[] nums = {5, 10, 15};\n    int sum = 0;\n    // for-each로 합계를 구해 출력하세요\n  }\n}',
      expectedOutput: "30",
      hint: "for (int x : nums) { sum += x; } 후 System.out.println(sum);",
    },
  },
  {
    id: "j-method", day: 12, title: "메서드 (method)",
    key: "반환타입 이름(매개변수) { ... return 값; } — 기능을 함수로 묶기.",
    hook: "메서드는 '자판기'. 재료(매개변수)를 넣으면 결과(return)를 뱉어요.",
    summary:
      "반복되는 기능을 이름 붙여 묶은 게 메서드예요. int add(int a, int b) { return a + b; } 처럼 만들고, add(2,3)으로 호출해요. return은 결과를 돌려주고, 돌려줄 게 없으면 반환타입을 void로 해요. (여기서는 static으로 만들어 main에서 바로 불러요.)",
    rules: [
      "형태: 반환타입 이름(매개변수들) { ... }",
      "return 은 결과를 돌려주고 메서드를 끝내요.",
      "돌려줄 값이 없으면 반환타입은 void.",
    ],
    example: {
      code:
        'public class Main {\n  static int add(int a, int b) {\n    return a + b;\n  }\n  public static void main(String[] args) {\n    int result = add(2, 3);\n    System.out.println(result);\n  }\n}',
      output: "5",
      explain: "add(2,3)이 2+3=5를 돌려주고 result에 담겨 출력돼요.",
    },
    practice: {
      task: "두 수를 곱해 돌려주는 static int multiply(int a, int b) 를 만들고, multiply(4, 5)의 결과를 출력하세요.",
      starter:
        'public class Main {\n  // multiply 메서드를 여기에 만드세요\n  public static void main(String[] args) {\n    // multiply(4, 5) 결과를 출력하세요\n  }\n}',
      expectedOutput: "20",
      hint: "static int multiply(int a, int b) { return a * b; } 후 main에서 System.out.println(multiply(4, 5));",
    },
  },
  {
    id: "j-class", day: 13, title: "클래스와 객체",
    key: "class는 설계도, new 로 만든 실체가 객체.",
    hook: "class는 '붕어빵 틀', 객체는 그 틀로 찍은 '붕어빵'. new가 굽는 순간!",
    summary:
      "클래스는 데이터(필드)와 동작을 담는 설계도예요. new 키워드로 그 설계도를 실제 물건(객체)으로 만들어요. 객체의 필드에는 점(.)으로 접근해요: dog.name. 백엔드에서 다루는 대부분의 데이터가 이렇게 객체로 표현돼요.",
    rules: [
      "class 안에 필드(변수)를 선언해요.",
      "객체 생성: Dog dog = new Dog();",
      "필드 접근: dog.name = \"Bo\"; / dog.name 읽기.",
    ],
    example: {
      code:
        'class Dog {\n  String name;\n  int age;\n}\npublic class Main {\n  public static void main(String[] args) {\n    Dog dog = new Dog();\n    dog.name = "Bo";\n    dog.age = 3;\n    System.out.println(dog.name + " is " + dog.age);\n  }\n}',
      output: "Bo is 3",
      explain: "Dog 설계도로 객체를 만들고 필드에 값을 넣어 읽어 출력했어요.",
    },
    practice: {
      task: 'class Book 에 String title 필드를 두고, 객체를 만들어 title에 "Java"를 넣은 뒤 출력하세요.',
      starter:
        'class Book {\n  // title 필드를 선언하세요\n}\npublic class Main {\n  public static void main(String[] args) {\n    // Book 객체를 만들고 title을 설정해 출력하세요\n  }\n}',
      expectedOutput: "Java",
      hint: 'class Book { String title; } / Book b = new Book(); b.title = "Java"; System.out.println(b.title);',
    },
  },
  {
    id: "j-ctor", day: 14, title: "생성자 (constructor)",
    key: "생성자는 객체를 만들 때 필드를 초기화해요. 이름은 클래스와 같고 반환타입 없음.",
    hook: "생성자는 '개업 준비'. new 하는 순간 딱 한 번 불려 가게를 세팅해요.",
    summary:
      "생성자는 new로 객체를 만들 때 자동으로 실행되는 특별한 메서드예요. 이름이 클래스와 똑같고 반환타입을 쓰지 않아요. 매개변수를 받아 필드를 채우면, 객체를 만들면서 바로 값을 넣을 수 있어요. this.name은 '이 객체의 name 필드'를 뜻해요.",
    rules: [
      "생성자 이름 = 클래스 이름, 반환타입 없음.",
      "new Dog(\"Bo\", 3) 처럼 값을 넘겨 초기화해요.",
      "this.field 는 매개변수와 필드 이름이 같을 때 필드를 가리켜요.",
    ],
    example: {
      code:
        'class Dog {\n  String name;\n  int age;\n  Dog(String name, int age) {\n    this.name = name;\n    this.age = age;\n  }\n}\npublic class Main {\n  public static void main(String[] args) {\n    Dog dog = new Dog("Bo", 3);\n    System.out.println(dog.name + " " + dog.age);\n  }\n}',
      output: "Bo 3",
      explain: "생성자가 넘어온 값을 this.name, this.age에 넣어 객체를 한 번에 세팅했어요.",
    },
    practice: {
      task: 'class Point 에 int x, y 필드와 생성자를 만들고, new Point(3, 7) 로 만들어 "3,7" 형태로 출력하세요.',
      starter:
        'class Point {\n  // 필드 x, y 와 생성자를 만드세요\n}\npublic class Main {\n  public static void main(String[] args) {\n    // Point 객체를 만들어 "x,y" 형태로 출력하세요\n  }\n}',
      expectedOutput: "3,7",
      hint: 'Point(int x, int y){ this.x=x; this.y=y; } / System.out.println(p.x + "," + p.y);',
    },
  },
  {
    id: "j-encap", day: 15, title: "캡슐화 · private / getter",
    key: "필드는 private으로 숨기고, 메서드(getter/setter)로 다뤄요.",
    hook: "private은 '내 방 문 잠그기'. 밖에서 직접 못 만지고, 창구(메서드)로만 주고받아요.",
    summary:
      "객체의 필드를 private으로 숨기고, public 메서드로만 읽고 쓰게 하는 걸 캡슐화라고 해요. 값을 읽는 메서드를 getter(getName), 바꾸는 메서드를 setter(setName)라 불러요. 잘못된 값이 들어오는 걸 메서드에서 막을 수 있어 안전해요. Spring에서 매우 흔한 패턴이에요.",
    rules: [
      "필드는 private, 접근 메서드는 public.",
      "getX() 는 값을 return, setX(v) 는 값을 저장.",
      "이름 규칙: getName / setName (필드 name 기준).",
    ],
    example: {
      code:
        'class User {\n  private String name;\n  public void setName(String n) { this.name = n; }\n  public String getName() { return this.name; }\n}\npublic class Main {\n  public static void main(String[] args) {\n    User u = new User();\n    u.setName("Tita");\n    System.out.println(u.getName());\n  }\n}',
      output: "Tita",
      explain: "private name은 setName으로 저장하고 getName으로 읽어요. 밖에선 직접 못 만져요.",
    },
    practice: {
      task: 'class Account 에 private int balance 를 두고, setBalance(1000) 후 getBalance() 값을 출력하세요.',
      starter:
        'class Account {\n  private int balance;\n  // setBalance, getBalance 를 만드세요\n}\npublic class Main {\n  public static void main(String[] args) {\n    // Account 객체로 1000을 넣고 읽어 출력하세요\n  }\n}',
      expectedOutput: "1000",
      hint: "public void setBalance(int b){ this.balance = b; } / public int getBalance(){ return balance; }",
    },
  },
  {
    id: "j-static", day: 16, title: "static 이란?",
    key: "static은 객체 없이 클래스에 딱 붙어 바로 쓰는 것.",
    hook: "static은 '공용 물건'. 객체마다 새로 안 만들고 모두가 같이 써요.",
    summary:
      "static이 붙은 필드/메서드는 객체를 만들지 않고 '클래스이름.이름'으로 바로 써요. main이 static인 이유도 객체 없이 프로그램을 시작해야 하기 때문이에요. 유틸리티 함수(Math.max 등)가 대표적인 static 메서드예요.",
    rules: [
      "static 메서드는 ClassName.method() 로 호출.",
      "객체(new) 없이도 쓸 수 있어요.",
      "static 메서드 안에서는 static 아닌 필드를 바로 못 써요.",
    ],
    example: {
      code:
        'public class Main {\n  static int square(int n) {\n    return n * n;\n  }\n  public static void main(String[] args) {\n    System.out.println(square(6));\n    System.out.println(Math.max(3, 9));\n  }\n}',
      output: "36\n9",
      explain: "square는 객체 없이 바로 호출됐고, Math.max도 static이라 그대로 써요.",
    },
    practice: {
      task: "static 메서드 cube(int n) 를 만들어 n의 세제곱을 돌려주고, cube(3) 결과를 출력하세요.",
      starter:
        'public class Main {\n  // static int cube(int n) 를 만드세요\n  public static void main(String[] args) {\n    // cube(3) 결과를 출력하세요\n  }\n}',
      expectedOutput: "27",
      hint: "static int cube(int n){ return n * n * n; } / System.out.println(cube(3));",
    },
  },
  {
    id: "j-list", day: 17, title: "컬렉션 맛보기 · ArrayList",
    key: "크기가 변하는 목록은 ArrayList. add로 넣고 get으로 꺼내요.",
    hook: "배열이 '고정 사물함'이면 ArrayList는 '늘어나는 가방'. 계속 add 할 수 있어요.",
    summary:
      "배열은 크기가 고정이지만, ArrayList는 값을 계속 추가/삭제할 수 있는 목록이에요. import java.util.ArrayList; 후 만들어요. add(값)로 넣고, get(인덱스)로 꺼내고, size()로 개수를 세요. 실무 데이터 목록에서 아주 자주 써요.",
    rules: [
      "import java.util.ArrayList; 가 필요해요.",
      "생성: ArrayList<String> list = new ArrayList<>();",
      "add(값) 추가 · get(i) 꺼내기 · size() 개수.",
    ],
    example: {
      code:
        'import java.util.ArrayList;\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<String> list = new ArrayList<>();\n    list.add("a");\n    list.add("b");\n    System.out.println(list.get(0));\n    System.out.println(list.size());\n  }\n}',
      output: "a\n2",
      explain: '"a","b"를 넣고 0번(a)과 개수(2)를 출력했어요.',
    },
    practice: {
      task: 'ArrayList<Integer> 를 만들어 10, 20 을 넣고, 개수(size)를 출력하세요.',
      starter:
        'import java.util.ArrayList;\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<Integer> list = new ArrayList<>();\n    // 10, 20 을 넣고 size를 출력하세요\n  }\n}',
      expectedOutput: "2",
      hint: "list.add(10); list.add(20); System.out.println(list.size());",
    },
  },
  {
    id: "j-exception", day: 18, title: "예외 처리 try / catch",
    key: "위험한 코드는 try, 문제가 나면 catch가 받아줘요.",
    hook: "try는 '외줄타기', catch는 '아래 안전망'. 떨어져도(에러) 프로그램이 안 죽어요.",
    summary:
      "실행 중 오류(예외)가 나면 프로그램이 멈춰요. try { 위험한 코드 } catch (예외타입 e) { 대처 } 로 감싸면, 오류가 나도 catch 블록이 받아 프로그램을 계속 이어갈 수 있어요. 0으로 나누기, 배열 범위 초과 등이 대표적 예외예요.",
    rules: [
      "try 블록에 오류 가능성이 있는 코드를 둬요.",
      "catch (ArithmeticException e) 처럼 예외 타입을 받아요.",
      "오류가 없으면 catch는 건너뛰어요.",
    ],
    example: {
      code:
        'public class Main {\n  public static void main(String[] args) {\n    try {\n      int r = 10 / 0;\n      System.out.println(r);\n    } catch (ArithmeticException e) {\n      System.out.println("cannot divide by zero");\n    }\n    System.out.println("done");\n  }\n}',
      output: "cannot divide by zero\ndone",
      explain: "10/0에서 예외가 나 catch가 받고, 프로그램은 멈추지 않고 done까지 출력해요.",
    },
    practice: {
      task: 'try/catch로 배열 범위를 벗어난 접근을 잡아 "out of range" 를 출력하세요. (int[] a={1}; a[5] 접근)',
      starter:
        'public class Main {\n  public static void main(String[] args) {\n    int[] a = {1};\n    // try/catch로 a[5] 접근 오류를 잡아 "out of range" 출력\n  }\n}',
      expectedOutput: "out of range",
      hint: 'try { System.out.println(a[5]); } catch (Exception e) { System.out.println("out of range"); }',
    },
  },
];

export const JAVA_LESSON_COUNT = JAVA_LESSONS.length;
