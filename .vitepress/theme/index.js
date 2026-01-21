// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css' // ここで読み込んでいるか確認！
import CopyUrl from './CopyUrl.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CopyUrl', CopyUrl)
  }
}