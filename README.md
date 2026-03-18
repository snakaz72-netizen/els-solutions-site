# ELSソリューションズ株式会社 - コーポレートサイト

Next.js + TailwindCSS + TiDB Cloud で構築された、ESG & サステナビリティソリューション企業のコーポレートサイトです。

## 技術スタック

| 技術 | バージョン | 用途 |
|------|-----------|------|
| Next.js | 15 | フレームワーク |
| React | 18 | UIライブラリ |
| TailwindCSS | 4 | スタイリング |
| Framer Motion | 12 | アニメーション |
| mysql2 | 3 | TiDB Cloud接続 |
| TypeScript | 5 | 型安全性 |

## ページ構成

| パス | 内容 |
|------|------|
| `/` | ホーム（ヒーロー・バリュー・製品紹介・CTA） |
| `/products/recopallet` | RECOPALLET製品ページ |
| `/products/continewm` | CONTINEWM製品ページ |
| `/about` | 会社概要 |
| `/contact` | お問い合わせフォーム |
| `/api/inquiry` | お問い合わせAPI（POST） |

## ローカル開発

```bash
# 依存関係のインストール
pnpm install

# 開発サーバー起動
pnpm dev

# ビルド
pnpm build

# プロダクションサーバー起動
pnpm start
```

## デプロイ手順

### 1. TiDB Cloud の設定

1. [TiDB Cloud](https://tidbcloud.com/) にログイン
2. 新しいクラスターを作成（Serverless Tier 推奨 - 無料枠あり）
3. クラスター作成後、**Connect** をクリック
4. **General** タブで接続情報を確認
5. 接続文字列をメモ（形式: `mysql://user:password@host:4000/database`）

### 2. GitHub リポジトリの作成

```bash
# リポジトリを初期化
cd els-solutions-nextjs
git init
git add .
git commit -m "Initial commit: ELS Solutions corporate site"

# GitHubにプッシュ
git remote add origin https://github.com/YOUR_USERNAME/els-solutions-site.git
git branch -M main
git push -u origin main
```

### 3. Vercel へのデプロイ

1. [Vercel](https://vercel.com/) にログイン
2. **Add New Project** をクリック
3. GitHubリポジトリ `els-solutions-site` を選択
4. **Framework Preset** が `Next.js` になっていることを確認
5. **Environment Variables** に以下を設定:

| 変数名 | 値 | 説明 |
|--------|-----|------|
| `DATABASE_URL` | `mysql://user:password@host:4000/database?ssl={"rejectUnauthorized":true}` | TiDB Cloud接続文字列 |

6. **Deploy** をクリック

### 4. カスタムドメインの設定（任意）

1. Vercelプロジェクトの **Settings** > **Domains**
2. カスタムドメインを追加
3. DNSレコードを設定（Vercelの指示に従う）

## データベース

お問い合わせフォームの送信データはTiDB Cloudに保存されます。テーブルは初回アクセス時に自動作成されます。

### inquiries テーブル

| カラム | 型 | 説明 |
|--------|-----|------|
| id | INT (AUTO_INCREMENT) | 主キー |
| companyName | VARCHAR(255) | 会社名 |
| department | VARCHAR(255) | 部署名 |
| position | VARCHAR(255) | 役職 |
| contactName | VARCHAR(255) | お名前 |
| contactNameKana | VARCHAR(255) | フリガナ |
| email | VARCHAR(320) | メールアドレス |
| phone | VARCHAR(50) | 電話番号 |
| productName | VARCHAR(255) | 関心のある製品 |
| message | TEXT | お問い合わせ内容 |
| status | ENUM | ステータス（new/read/replied） |
| createdAt | TIMESTAMP | 作成日時 |

## 注意事項

- `DATABASE_URL` が未設定の場合、お問い合わせフォームはコンソールログに記録されます（サイト自体は正常に動作します）
- TiDB CloudのServerless Tierは無料枠があり、小規模サイトには十分です
- 書体はMeiryo UI（Windows環境）+ Noto Sans JP（Google Fonts）のフォールバック構成です
