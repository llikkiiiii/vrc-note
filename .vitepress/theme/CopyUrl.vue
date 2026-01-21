<script setup>
import { ref } from 'vue'

defineProps(['url'])

const copied = ref(false)

const copy = (url) => {
  navigator.clipboard.writeText(url)
  
  // 「コピー完了」を表示
  copied.value = true
  
  // 1.5秒後にメッセージを消す
  setTimeout(() => {
    copied.value = false
  }, 1500)
}
</script>

<template>
  <div class="copy-container">
    <span class="copy-url" @click="copy(url)" title="クリックでコピー">
      {{ url }}
    </span>

    <transition name="fade">
      <span v-if="copied" class="copy-badge">コピー完了！</span>
    </transition>
  </div>
</template>

<style scoped>
.copy-container {
  display: inline-flex;
  align-items: center;
  /* 右側にバッジが出るための最小幅を確保（バッジが出ても文字がズレにくくするため） */
  min-width: fit-content;
  gap: 10px;
}

.copy-url {
  font-family: var(--vp-font-family-mono);
  font-size: 0.9em;
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-soft);
  padding: 3px 8px;
  border-radius: 4px;
  cursor: copy;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.2s;
  white-space: nowrap;
}

.copy-url:hover {
  background-color: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-1);
}

/* 通知バッジのスタイル（右側に表示） */
.copy-badge {
  font-size: 0.75em;
  font-weight: bold;
  color: #ffffff !important;
  background-color: #2e7d32 !important; /* りっきーさんの緑色に固定 */
  padding: 2px 10px;
  border-radius: 12px;
  white-space: nowrap;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* 右側にふわっと現れるアニメーション */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}
.fade-enter-from {
  opacity: 0;
  transform: translateX(-5px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(5px);
}
</style>