<template>
  <div class="content-container">
    <h1>Icon 图标</h1>
    <h2>基础用法</h2>
    <j-icon icon="icon-search"></j-icon>
    <h2>默认提供四种大小</h2>
    so-small
    <j-icon icon="icon-global" size="so-small" iconColor="red"></j-icon>
    small
    <j-icon icon="'icon-global'" size="small"></j-icon>
    medium
    <j-icon icon="icon-global"></j-icon>
    large
    <j-icon icon="icon-global" size="large"></j-icon>
    <h2>设置图标颜色</h2>
    <j-icon color="#0abde3" icon="icon-time"></j-icon>
    <j-icon style="color: aquamarine" icon="icon-time"></j-icon>
    <h2>通过style设置图标大小</h2>
    <j-icon style="font-size: 32px" icon="icon-security-fill"></j-icon>
    <h2>设置图标粗体</h2>
    <j-icon color="#0abde3" icon="icon-time" blod></j-icon>
    <j-icon
      color="#0abde3"
      icon="icon-customer-businessman-fill"
      :blod="600"
    ></j-icon>
    <h2>图标合集</h2>
    <div class="icon-list">
      <div
        @click="handleClick(icon)"
        v-for="icon in Icons"
        :key="icon"
        class="icon-item"
      >
        <j-icon :hover="false" :icon="icon"></j-icon>
        <span>{{ icon }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconName, JMessage } from '@jayden-ui/components';
import { ref } from 'vue';

const Icons = ref(Object.values(IconName));
function copyToClipboard(text: string) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      JMessage({
        type: 'success',
        showIcon: true,
        message: `复制成功 ~ `
      });
    })
    .catch((error) => {
      JMessage({
        type: 'error',
        showIcon: true,
        message: '复制到剪贴板失败！'
      });
    });
}

function handleClick(iconName: string) {
  copyToClipboard(`
  <j-icon  icon="${iconName}"></j-icon>
  `);
}
</script>

<style lang="scss" scoped>
.j-icon {
  margin-right: 8px;
}

.icon-list {
  overflow: hidden;
  list-style: none;
  padding: 0 !important;
  border-top: 1px solid #dcdfe6;
  border-left: 1px solid #dcdfe6;
  border-radius: 4px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.icon-list .icon-item {
  padding: 0 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: var(--el-text-color-regular);
  height: 90px;
  font-size: 13px;
  border-right: 1px solid #dcdfe6;
  border-bottom: 1px solid #dcdfe6;
  transition: background-color 0.25s ease;
  span {
    margin-top: 4px;
  }
}
.icon-list .icon-item:hover {
  cursor: pointer;
  background-color: #f6f7f8;
}
</style>
