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
