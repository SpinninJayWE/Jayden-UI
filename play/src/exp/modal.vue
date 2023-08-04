<template>
  <div class="content-container">
    <h2>Modal 模态框</h2>
    <h3>基础样式</h3>
    <j-button @click="modalShow = true" type="primary">Open Modal</j-button>

    <j-modal
      :clkOutSideClose="true"
      position="top"
      title="aaa"
      v-model:visable="modalShow"
    >
      <h2>Button 按钮</h2>
      <h3>默认尺寸</h3>
      <j-button type="primary">主题按钮</j-button>
    </j-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const modalShow = ref(false);
</script>

<style scoped></style>
