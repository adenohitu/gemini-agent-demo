# Instagram モックアプリ

## プロジェクト概要

React Router v7 と Mantine UI を使用した Instagram のモックアプリケーション。静的なページとして動作し、バックエンド機能は実装せずモック表示のみを行う。

## 技術スタック

### フレームワーク・ライブラリ

- **React**: v19.1.0 - UI ライブラリ
- **React Router**: v7.7.1 - ルーティング（最新版）
- **Mantine UI**: v8.2.3 - UI コンポーネントライブラリ
- **TypeScript**: v5.8.3 - 型安全性

### ビルド・開発ツール

- **Vite**: v6.3.3 - バンドラー・開発サーバー
- **Tailwind CSS**: v4.1.4 - CSS フレームワーク（補助的利用）
- **PostCSS**: v8.5.6 - CSS 処理
- **postcss-preset-mantine**: v1.18.0 - Mantine 用 PostCSS 設定

### 開発環境

- **Node.js**: v20 以上推奨
- **Package Manager**: npm
- **OS**: macOS（開発環境）
- **Shell**: zsh

## ディレクトリ構造

```
/
├── .github/
│   └── copilot-instructions.md  # このファイル
├── app/
│   ├── root.tsx                 # ルートレイアウト
│   ├── routes.ts                # ルート定義
│   ├── app.css                  # グローバルスタイル
│   ├── routes/                  # ページコンポーネント
│   ├── components/              # 共通コンポーネント（予定）
│   ├── layouts/                 # レイアウトコンポーネント（予定）
│   └── mockData/                # モックデータ（予定）
├── public/                      # 静的ファイル
├── package.json                 # 依存関係
├── vite.config.ts              # Vite設定
├── tsconfig.json               # TypeScript設定
├── postcss.config.js           # PostCSS設定（予定）
└── README.md                   # プロジェクト説明
```

## 設定ファイル

### package.json

- `type: "module"` - ES モジュール使用
- React Router v7 の最新スクリプト使用
- Mantine UI 関連パッケージ導入済み

### vite.config.ts

- React Router Vite プラグイン設定済み
- Tailwind CSS Vite プラグイン設定済み
- TypeScript paths 解決設定済み

## 予定するページ構成

### ルート設計

- `/` - トップページ（フィード画面）
- `/login` - ログインページ
- `/user/:username` - ユーザーページ
- `/settings` - 設定画面

### レイアウト

- **MainLayout**: ナビゲーション付きメインレイアウト
- **LoginLayout**: ログイン専用シンプルレイアウト

## UI 設計方針

### Mantine UI コンポーネント使用

- 基本的に Mantine コンポーネントをそのまま使用
- カスタム CSS は最小限に抑制
- Mantine のテーマシステムを活用

### レスポンシブ対応

- モバイルファースト設計
- Mantine のレスポンシブシステム使用
- ブレイクポイント: sm(768px)、md(1024px)、lg(1200px)

### カラーパレット（Instagram 風）

- プライマリ: Instagram 風グラデーション
- ベース: 白・グレー系
- アクセント: ピンク・紫系

## 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 型チェック
npm run typecheck

# プロダクション起動
npm run start
```

## モック機能

### データ

- ユーザー情報: 架空のプロフィール
- 投稿: 画像・テキスト・いいね数等
- ストーリー: サムネイル画像
- フォロー関係: 静的な関係性

### 動作

- ログイン: フォーム表示のみ（認証なし）
- 投稿: 表示のみ（投稿機能なし）
- いいね: 表示切り替えのみ
- フォロー: 表示切り替えのみ

## 注意事項

### 実装方針

- バックエンド API は実装しない
- 実際のデータ永続化は行わない
- 見た目と基本的なインタラクションのみ実装
- Mantine コンポーネントを最大限活用

### パフォーマンス

- React Router v7 のデータローダー未使用
- 静的データのため読み込み高速
- 画像は外部 URL 使用（著作権に注意）

## 今後の拡張可能性

- 実際の API 連携
- 認証機能追加
- データ永続化
- リアルタイム機能
