# 課題 1: 基礎文法、概念

---

## コーディング課題

### 1. FizzBuzz

```ts
// ====================
// 1. FizzBuzz
// 必要な知識:
// - `for` ループ
// - `if-else` 文, `%` (剰余) 演算子
// - (別解) 三項演算子
// ====================

type FizzBuzz = 'FizzBuzz' | 'Fizz' | 'Buzz' | number;

function fizzBuzz(): void {
  for (let i = 1; i <= 100; i++) {
    const result: FizzBuzz =
      i % 15 === 0
        ? 'FizzBuzz'
        : i % 3 === 0
          ? 'Fizz'
          : i % 5 === 0
            ? 'Buzz'
            : i;
    console.log(result);
  }
}

// 呼び出し例・出力確認
console.log('【1. FizzBuzz】');
fizzBuzz();
console.log('---------');

// 出力は 1 から始まり、15番目が "FizzBuzz" となるなど、上記ルールに従った100行の出力がされていればOK
```

#### 呼び出し例・出力確認

```ts
```bash
【1. FizzBuzz】
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
FizzBuzz
31
32
Fizz
34
Buzz
Fizz
37
38
Fizz
Buzz
41
Fizz
43
44
FizzBuzz
46
47
Fizz
49
Buzz
Fizz
52
53
Fizz
Buzz
56
Fizz
58
59
FizzBuzz
61
62
Fizz
64
Buzz
Fizz
67
68
Fizz
Buzz
71
Fizz
73
74
FizzBuzz
76
77
Fizz
79
Buzz
Fizz
82
83
Fizz
Buzz
86
Fizz
88
89
FizzBuzz
91
92
Fizz
94
Buzz
Fizz
97
98
Fizz
Buzz
---------
```

### 2. 配列データの集計

```ts
// ====================
// 2. 配列データの集計
// 必要な知識:
// - 関数
// - 配列 (`number[]`)
// - `for` ループ
// - タプル
// ====================
function calculateSumAndAverage(nums: number[]): [number, number] {
  if (nums.length === 0) {
    // 配列が空の場合は0を返す
    return [0, 0];
  }
  const sum = nums.reduce((acc, curr) => acc + curr, 0); // 配列の合計値をreduceで計算
  const average = sum / nums.length; // 合計値を配列の長さで割ることで平均を計算
  return [sum, average]; // 合計値と平均値をタプルで返す
}

// 呼び出し例・出力確認
console.log('【2. 配列データの集計】');
const [sum1, average1] = calculateSumAndAverage([10, 20, 30, 40, 50]);
console.log(`合計: ${sum1}, 平均: ${average1}`);

const [sum2, average2] = calculateSumAndAverage([5, 10, 15]);
console.log(`合計: ${sum2}, 平均: ${average2}`);

const [sum3, average3] = calculateSumAndAverage([]);
console.log(`合計: ${sum3}, 平均: ${average3}`);
console.log('---------');

// 以下のように出力されれば OK
// 【2. 配列データの集計】
// 合計: 150, 平均: 30
// 合計: 30, 平均: 10
// 合計: 0, 平均: 0
// ---------
```

#### 呼び出し例・出力確認

```bash
【2. 配列データの集計】
合計: 150, 平均: 30
合計: 30, 平均: 10
合計: 0, 平均: 0
---------
```

### 3. 生徒名簿のフィルタリング

```ts
// ====================
// 3. 生徒名簿のフィルタリング
// 必要な知識:
// - `type` エイリアス
// - 配列, タプル
// - `for` ループ
// - `if` 文, `&&` (AND) 演算子
// ====================
// 生徒の型定義: [名前, 年齢, 留年経験]
type Student = [string, number, boolean];

function filterStudents(students: Student[]): string[] {
  if (students.length === 0) return [];
  const result: string[] = [];
  for (const student of students) {
    if (student[1] >= 20 && !student[2]) {
      result.push(student[0]);
    }
  }
  return result;

  // HACK: フィルタリングとマッピングを一度に行って返すやり方
  /*
  return students
    .filter((student) => student[1] >= 20 && !student[2])
    .map((student) => student[0]);
   */
}

// 呼び出し例・出力確認
console.log('【3. 生徒名簿のフィルタリング】');
const studentList: Student[] = [
  ['Taro', 22, true], // 留年経験あり
  ['Jiro', 20, false], // 対象
  ['Saburo', 19, false], // 年齢が20歳未満
  ['Shiro', 21, false], // 対象
  ['Goro', 23, true], // 留年経験あり
];
const filtered = filterStudents(studentList);
console.log(filtered);
console.log('---------');

// 以下のように出力されれば OK
// 【3. 生徒名簿のフィルタリング】
// [ 'Jiro', 'Shiro' ]
// ---------
```

#### 呼び出し例・出力確認

```bash
【3. 生徒名簿のフィルタリング】
[ 'Jiro', 'Shiro' ]
---------
```

### 4. 書籍情報のフォーマット

```ts
// ====================
// 4. 書籍情報のフォーマット
// 必要な知識:
// - `type` エイリアス (オブジェクト型)
// - 配列 (`Book[]`)
// - `for...of` ループ (または `forEach` メソッド)
// - 文字列テンプレート
// ====================
type Book = {
  title: string;
  author: string;
  publishedYear: number;
};

function formatBookInfo(books: Book[]): string[] {
  if (books.length === 0) return [];
  const result: string[] = [];
  for (const book of books) {
    result.push(`「${book.title}」- ${book.author} (${book.publishedYear}年)`);
  }
  return result;

  /*
  // HACK: mapを用いて1行で書くやり方
  if (books.length === 0) return [];
  return books.map(
    (book) => `「${book.title}」- ${book.author} (${book.publishedYear}年)`
  );
  */
}

// 呼び出し例・出力確認
console.log('【4. 書籍情報のフォーマット】');
const books: Book[] = [
  { title: '吾輩は猫である', author: '夏目漱石', publishedYear: 1905 },
  { title: '走れメロス', author: '太宰治', publishedYear: 1940 },
  { title: '羅生門', author: '芥川龍之介', publishedYear: 1915 },
];
const formattedBooks = formatBookInfo(books);
for (const b of formattedBooks) {
  console.log(b);
}
console.log('---------');

// 以下のように出力されれば OK
// 【4. 書籍情報のフォーマット】
// 「吾輩は猫である」- 夏目漱石 (1905年)
// 「走れメロス」- 太宰治 (1940年)
// 「羅生門」- 芥川龍之介 (1915年)
// ---------
```

#### 呼び出し例・出力確認

```bash
【4. 書籍情報のフォーマット】
「吾輩は猫である」- 夏目漱石 (1905年)
「走れメロス」- 太宰治 (1940年)
「羅生門」- 芥川龍之介 (1915年)
---------
```

---

## 記述課題

### 1. JavaScript と TypeScript の関係性を 100~200 文字で説明してください

TypeScriptは、JavaScriptをもとに作られたプログラミング言語で、JavaScriptに「型」を加えたものです。型を使うことで、コードの間違いを早く見つけやすくなり、大きなアプリを作るときに便利です。TypeScriptで書いたコードは、最終的にJavaScriptに変換されて、ブラウザやNode.jsで動きます。

### 2. TypeScript における「型」とは何か、100~200 文字で説明してください

TypeScriptの「型」は、変数や関数に「どんな値を使うか」をあらかじめ決めるルールです。たとえば、「この変数は数字しか使えません」や「この関数は文字を受け取って、数字を返します」といったふうに決めておけます。

こうすることで、間違って文字を数字として使うなどのバグを、実行する前に見つけることができます。そのため、コードが読みやすくなり、大きなアプリやチーム開発でも安心して使えます。