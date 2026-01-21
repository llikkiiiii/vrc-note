<script setup>
defineProps(['name', 'desc', 'url', 'img', 'caption'])
</script>

<template>
  <a :href="url" target="_blank" class="tool-card-wrapper">
    <div class="tool-card-content">
      <div class="tool-main-row">
        <div class="tool-text-stack">
          <div class="tool-name">{{ name }}</div>
          <div class="tool-desc">{{ desc }}</div>
          <div class="tool-url-text">🔗 {{ url }}</div>
        </div>
        <div v-if="img" class="tool-img-box">
          <img :src="img" class="tool-side-img" />
        </div>
      </div>
      <div v-if="caption" class="tool-footer-caption">
        {{ caption }}
      </div>
    </div>
  </a>
</template>

<style scoped>
.tool-card-wrapper {
  display: block;
  text-decoration: none !important;
  margin: 16px 0;
}

.tool-card-content {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 20px;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.tool-card-wrapper:hover .tool-card-content {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.tool-main-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.tool-text-stack {
  flex: 1;
}

.tool-name {
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--vp-c-text-1) !important;
  margin-bottom: 6px;
}

.tool-desc {
  font-size: 0.85rem;
  color: var(--vp-c-text-2) !important;
  line-height: 1.5;
  margin-bottom: 10px;
}

.tool-url-text {
  font-size: 0.8rem;
  color: var(--vp-c-brand-1);
  word-break: break-all;
}

.tool-img-box {
  width: 120px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.tool-side-img {
  max-width: 100%;
  max-height: 80px;
  object-fit: contain;
}

.tool-footer-caption {
  margin-top: 15px;
  padding-top: 10px;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 0.85rem;
  color: var(--vp-c-brand-1) !important;
  font-weight: 500;
}
</style>