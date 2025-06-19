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
