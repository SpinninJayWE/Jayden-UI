<template>
  <div class="app">
    <!-- <Button />
    <Modal />
    <Input />
    <Icon /> -->
    <j-select></j-select>
  </div>
</template>
<script setup lang="ts">
import Modal from './exp/modal.vue';
import Button from './exp/button.vue';
import Input from './exp/input.vue';
import Icon from './exp/icon.vue';
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
