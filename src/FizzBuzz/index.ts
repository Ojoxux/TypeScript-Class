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
