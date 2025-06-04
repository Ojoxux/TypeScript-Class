# TypeScript Class

TypeScriptの学習と実験のためのプロジェクトです。

## 技術スタック

- TypeScript
- Biome (フォーマッター & リンター)
- ts-go (TypeScriptコンパイラ) - 注意: repo主のローカル環境依存
- Vitest (テスト)

## セットアップ

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev

# ビルド
pnpm build

# リント
pnpm lint

# フォーマット
pnpm format

# テスト
pnpm test
```

## プロジェクト構成

```
.
├── src/          # ソースコード
├── dist/         # ビルド出力
├── biome.json    # Biome設定
├── tsconfig.json # TypeScript設定
└── package.json  # プロジェクト設定
```

## 開発環境

- Node.js
- pnpm
- TypeScript
- Biome
- ts-go (注意: ローカル環境依存)

## ts-goについて

このプロジェクトでは、ts-go（TypeScriptのGo実装）を使用しています。ただし、以下の点に注意が必要です：

- ts-goはローカル環境に依存しています
- 他の環境で実行する場合は、ts-goのリポジトリをクローンしてビルドする必要があります
- `package.json`の`tsgo`スクリプトのパスを適切に変更する必要があります
