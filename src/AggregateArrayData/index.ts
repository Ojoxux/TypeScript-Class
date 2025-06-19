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
