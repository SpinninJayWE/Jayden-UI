<template>
  <div class="app">
    <Button />
    <Modal />
    <Input />
    <Icon />
    <Popover />
    <Select />
    <Alert />
    <Message />
  </div>
</template>
<script setup lang="ts">
import Modal from './exp/modal.vue';
import Button from './exp/button.vue';
import Input from './exp/input.vue';
import Icon from './exp/icon.vue';
import Popover from './exp/popover.vue';
import Select from './exp/select.vue';
import Alert from './exp/alert.vue';
import Message from './exp/message.vue';
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
    .j-message {
      margin-top: 20px;
    }
  }
}
</style>
