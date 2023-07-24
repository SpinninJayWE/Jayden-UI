<template>
  <div class="app">
    <!-- <Button /> -->
    <!-- <Modal /> -->
    <!-- <Input /> -->
    <!-- <Icon /> -->
    <!-- <Popover /> -->
    <!-- <Select /> -->
    <div class="content-container">
      <JMessage message="i'm message box" />
      <JMessage closed type="warning" message="i'm message box" />
      <JMessage type="success" message="i'm message box" />
      <JMessage closed type="error" message="i'm message box" />
      <br />
      <j-button @click="showMessage">click show message</j-button>
      <j-button @click="closeAllMessage">close all message</j-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import Modal from './exp/modal.vue';
import Button from './exp/button.vue';
import Input from './exp/input.vue';
import Icon from './exp/icon.vue';
import Popover from './exp/popover.vue';
import Select from './exp/select.vue';
import { JMessage, Message } from '@jayden-ui/components';

function showMessage() {
  const res = Message({
    type: 'success',
    message: '哈喽 你们好',
    closed: true
  });
}

function closeAllMessage() {
  Message.closeAll();
}
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
