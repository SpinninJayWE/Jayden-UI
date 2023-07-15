<template>
  <div class="app">
    <Button />
    <Modal />
    <br />
    <div class="content-container">
      <h1>文本框</h1>
      <h3>大小尺寸 Size</h3>
      <j-input size="small" v-model="ipt" label="Small"></j-input>
      &nbsp;
      <j-input size="medium" v-model="ipt" label="Medium"></j-input>
      &nbsp;
      <j-input
        type="password"
        size="large"
        v-model="ipt"
        label="Large"
      ></j-input>
      <h3>状态 Status</h3>
      <j-input v-model="ipt" label="Writable"></j-input>
      &nbsp;
      <j-input v-model="ipt" readonly label="Readonly"></j-input>
      &nbsp;
      <j-input v-model="ipt" disabled label="Disabled"></j-input>
      <h3>块级铺满 Block</h3>
      <j-input block v-model="ipt" label="Medium"></j-input>
      <h3>清除按钮 Clearable</h3>
      <j-input v-model="ipt" clearable label="Clearable"></j-input>
    </div>
  </div>
</template>
<script setup lang="ts">
import Modal from './exp/modal.vue';
import Button from './exp/button.vue';
import { ref } from 'vue';

const ipt = ref('123');
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
