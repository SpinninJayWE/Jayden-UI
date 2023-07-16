<template>
  <div class="content-container">
    <h1>文本框</h1>
    <h3>大小尺寸 Size</h3>
    <j-input size="small" v-model="ipt" label="Small"></j-input>
    &nbsp;
    <j-input size="medium" v-model="ipt" label="Medium"></j-input>
    &nbsp;
    <j-input type="password" size="large" v-model="ipt" label="Large"></j-input>
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
</template>

<script setup lang="ts">
import { ref } from 'vue';

const ipt = ref('');
</script>

<style scoped></style>
