---
layout: home

hero:
  name: "りっきーのVRChat備忘録"
  text: "役立ちメモ。"
  tagline: "技術的なメモの共有や、思い出の記録。"
  image:
    src: /images/VRChat_2025-11-07_21-59-02.777_3840x2160_4-3.png
    alt: VRChat Photo
  actions:
    - theme: brand
      text: アバターをアップロードする方法を見る
      link: /avatar-upload
    - theme: alt
      text: ツール詳細を見る
      link: /tool-details

features:
  - icon: 📖
    title: 備忘録
    details: アップロード手順やツールの使い方など、実用的な情報を整理。
  - icon: 📸
    title: 記録
    details: 改変のこだわりや、VRChatでの日々の思い出を記録.
  - icon: 🛠️
    title: ツール
    details: VPMリポジトリURLのコピーなど、作業を時短する機能を搭載。
---

## ドキュメント

りっきーのVRChat備忘録へようこそ。
必要な情報を探すには、以下のリンクを活用してください。

### [★ VRCにアバターをアップロードする方法 ★](/avatar-upload)
最小限のセットアップ手順とアップロード方法について解説。

### [👤 りっきーのプロフィール](/profile)
VRChatでの活動やプロフィールについて紹介。

### [📦 便利な改変ツールの総まとめ](/tool-details)
アバター改変時に役立つツールや設定項目について。

### [🦄 りっきーのアバター改変](/avatar-custom)
こだわりや改変記録のまとめ。

<style scoped>
/* タイトルのグラデーション設定 */
:deep(.VPHero .name) {
  background: linear-gradient(120deg, #2e7d32 0%, #66bb6a 100%);
  -webkit-background-clip: text;
  background-clip: text;
}

/* --- ボタンを大きく強調する修正 --- */
:deep(.VPButton.brand) {
  font-size: 1.15rem !important; /* 文字を一回り大きく */
  padding: 0 32px !important;    /* 横幅にゆとりを持たせる */
  height: 54px !important;       /* ボタン自体を太くする */
  line-height: 52px !important;
  font-weight: 700 !important;   /* 文字を太字に */
  box-shadow: 0 4px 12px rgba(46, 125, 50, 0.25); /* 緑の影で存在感を出す */
}

/* サブボタン（ツール詳細）とのサイズ比率を調整 */
:deep(.VPButton.alt) {
  font-size: 0.95rem !important;
  height: 54px !important;
  line-height: 52px !important;
}

/* --- 画像の拡大表示設定 --- */
:deep(.VPHero .image-container) {
  display: flex;
  justify-content: center;
  max-width: 100% !important;
  width: 100%;
}

:deep(.VPHero .image-src) {
  max-width: 850px !important;
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.15);
}

@media (min-width: 960px) {
  :deep(.VPHero .container) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

/* リンク色固定 */
h3 a {
  color: var(--vp-c-brand-1) !important;
}
</style>