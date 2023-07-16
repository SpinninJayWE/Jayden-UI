<template>
  <div class="content-container">
    <h2>Button 按钮</h2>
    <h3>默认尺寸</h3>
    <j-button size="so-small" type="primary">Extra small Button</j-button>
    &nbsp;
    <j-button>正常按钮</j-button>
    <h3>小尺寸</h3>
    <j-button :size="'small'" type="primary">主题按钮</j-button>
    &nbsp;
    <j-button :size="'small'">正常按钮</j-button>
    <h3>大尺寸</h3>
    <j-button :size="'large'" type="primary">主题按钮</j-button>
    &nbsp;
    <j-button :size="'large'">正常按钮</j-button>
    <h3>按钮状态</h3>
    <j-button type="primary">主要按钮</j-button>
    &nbsp;
    <j-button>默认按钮</j-button>
    &nbsp;
    <j-button type="warn">警告按钮</j-button>
    &nbsp;
    <j-button type="info">信息按钮</j-button>
    &nbsp;
    <j-button type="err">错误按钮</j-button>
    &nbsp;
    <j-button type="success">成功按钮</j-button>
    &nbsp;
    <j-button disabled type="success">禁用按钮</j-button>
    <h3>按钮图标 Icon Btn</h3>
    <j-button :size="'so-small'" icon-btn>
      <template #icon> X </template>
    </j-button>
    &nbsp;
    <j-button :size="'small'" icon-btn type="primary">
      <template #icon> X </template>
    </j-button>
    &nbsp;
    <j-button icon-btn type="warn">
      <template #icon> X </template>
    </j-button>
    &nbsp;
    <j-button :size="'large'" icon-btn :type="'success'">
      <template #icon> X </template>
    </j-button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
