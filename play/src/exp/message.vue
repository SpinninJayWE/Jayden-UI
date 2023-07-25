<template>
  <div class="content-container">
    <h2>Message 消息提示</h2>
    <h3>基础用法</h3>
    <p>默认三秒关闭</p>
    <j-button @click="showMessage('info')">click show message</j-button>
    <h3>支持多种状态</h3>
    <j-button type="info" @click="showMessage('info')"
      >click show info message</j-button
    >&nbsp;
    <j-button type="warning" @click="showMessage('warning')"
      >click show warning message</j-button
    >&nbsp;
    <j-button type="success" @click="showMessage('success')"
      >click show success message</j-button
    >&nbsp;
    <j-button type="error" @click="showMessage('error')"
      >click show error message</j-button
    >
    <h3>显示图标/关闭按钮</h3>
    <j-button type="success" @click="showMessage('success', true, true)"
      >click show success message</j-button
    >
    <h3>关闭所有 message</h3>
    <j-button type="success" @click="showMultipleMessage('success')"
      >Open multiple message</j-button
    >
    &nbsp;
    <j-button type="info" @click="closeAllMessage">Close All</j-button>
  </div>
</template>

<script setup lang="ts">
import { JMessage } from '@jayden-ui/components';

function showMessage(type = 'info', closed = false, showIcon = false) {
  JMessage({
    type,
    message: `is from ${type} message`,
    closed,
    showIcon
  });
}

async function showMultipleMessage(type = 'success') {
  for (let index = 0; index < 10; index++) {
    await new Promise((resolve) => setTimeout(resolve, index === 0 ? 0 : 100));
    JMessage({
      type,
      message: ` is from ${type} message ${index + 1}`,
      showIcon: true
    });
  }
}
function closeAllMessage() {
  JMessage.closeAll();
}
</script>

<style scoped></style>
