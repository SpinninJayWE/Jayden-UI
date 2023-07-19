<template>
  <div class="app">
    <!-- <Button /> -->
    <!-- <Modal /> -->
    <!-- <Input /> -->
    <!-- <Icon /> -->
    <!-- <div class="content-container">
      <h2>Select 下拉框</h2>
      <h3>基础演示</h3>
      <j-select v-model:select="select"> </j-select>
    </div> -->
    <div class="content-container">
      <h2>Popover</h2>
      <h3>基础演示</h3>
      <j-popover trigger="hover">
        <template #reference>
          <j-button>Click Show Popover</j-button>
        </template>
        <div>
          <j-button block>111</j-button>
          <br />
          <j-button block>111</j-button>
          <br />
          <j-button block>111</j-button>
        </div>
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
<style scoped>
.app {
  padding: 25px;
  box-sizing: border-box;
}

.app .content-container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}
</style>
