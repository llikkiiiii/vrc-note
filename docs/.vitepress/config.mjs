import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "りっきーのVRChat備忘録",
  description: "役立ちメモ。",
  // GitHub Pagesで公開するための設定（リポジトリ名に合わせる）
  base: '/vrc-note/', 
  
  themeConfig: {
    // サイトのロゴやナビゲーションが必要な場合はここに追加していきます
    nav: [
      { text: 'ホーム', link: '/' },
    ],
    sidebar: [
      {
        text: 'ドキュメント',
        items: [
          { text: 'アバターアップロード', link: '/avatar-upload' },
          { text: 'ツール詳細', link: '/tool-details' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/llikkiiiii/vrc-note' }
    ]
  }
})