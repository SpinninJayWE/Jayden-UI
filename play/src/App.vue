<template>
  <div class="app">
    <!-- <Button /> -->
    <!-- <Modal /> -->
    <!-- <Input /> -->
    <Icon />
    <div class="content-container">
      <h2>Select 下拉框</h2>
      <h3>基础演示</h3>
      <j-select v-model:select="select"> </j-select>
    </div>
    <div class="content-container">
      <h2>Popover</h2>
      <h3>基础演示</h3>
      <j-popover trigger="hover">
        <template #reference>
          <j-button>Hover Show Popover from bottom</j-button>
        </template>
        <template #default> Popover content </template>
      </j-popover>
      &nbsp;
      <j-popover placement="right" trigger="hover">
        <template #reference>
          <j-button>Hover Show Popover from right</j-button>
        </template>
        <template #default> Popover content </template>
      </j-popover>
      &nbsp;
      <j-popover placement="left" trigger="hover">
        <template #reference>
          <j-button type="info">Hover Show Popover from left</j-button>
        </template>
        <template #default> Popover content </template>
      </j-popover>
      &nbsp;
      <j-popover placement="top" trigger="click">
        <template #reference>
          <j-button>Hover Show Popover from top</j-button>
        </template>
        <template #default> Popover content </template>
      </j-popover>
    </div>
  </div>
</template>
<script setup lang="ts">
import Modal from './exp/modal.vue';
import Button from './exp/button.vue';
import Input from './exp/input.vue';
import Icon from './exp/icon.vue';
import { ref } from 'vue';

const select = ref([1]);
</script>
<style lang="scss" scoped>
.app {
  padding: 25px;
  box-sizing: border-box;
}

.app .content-container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  :deep() {
    .reference-content {
      margin-bottom: 20px;
    }
  }
}
</style>
