# Utsugi0101.dev

高橋空希（Utsugi0101）の個人サイトです。ReactとViteで構築しています。

## ローカルで確認する

```bash
npm ci
npm run dev
```

公開用ビルドは `npm run build`、コードチェックは `npm run lint` で行います。

## コンテンツを編集する

プロフィール、活動履歴、連絡先は [`src/data/portfolio.ts`](src/data/portfolio.ts) に集約しています。通常の更新ではコンポーネントやCSSを触る必要はありません。

- プロフィール: `profileFacts`
- 活動履歴: `activityItems`
- 活動の分類: `activityCategories`
- 連絡先: `contactLinks`
- 友人リンク: [`src/data/friends.ts`](src/data/friends.ts)

公開内容を更新したときは [`src/siteMeta.ts`](src/siteMeta.ts) の `SITE_LAST_UPDATED` も変更してください。検索・SNS共有用のタイトルと説明文は [`index.html`](index.html) にあります。

## ページ構成

- Home: `/#/`
- About: `/#/about`
- Activities: `/#/activities`
- Photos: `/#/photos`
- Links: `/#/links`

公開サーバー側のフォールバック設定に依存せずページ移動を確認できるよう、現在はReact RouterのHashRouterを使用しています。各ページは [`src/pages`](src/pages) にあります。共通スタイルは [`src/assets/site.css`](src/assets/site.css) です。
