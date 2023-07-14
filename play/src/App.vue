<template>
  <div class="app">
    <!-- <Button /> -->
    <!-- <Modal /> -->
    <!-- <j-input size="small" v-model="ipt" label="Input"></j-input> -->
    &nbsp;
    <j-input size="medium" v-model="ipt" label="Input"></j-input>
    &nbsp;
    <!-- <j-input size="large" v-model="ipt" label="Input"></j-input> -->
  </div>
</template>
<script setup lang="ts">
import Modal from './exp/modal.vue';
import Button from './exp/button.vue';
import { ref } from 'vue';

const ipt = ref('');
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
