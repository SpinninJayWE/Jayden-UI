<template>
  <div class="content-container">
    <h2>Alert 提示</h2>
    <h3>基础用法</h3>
    <j-alert message="THIS IS ALERT" />
    <j-alert type="warning" message="THIS IS ALERT" />
    <j-alert type="success" message="THIS IS ALERT" />
    <j-alert type="error" message="THIS IS ALERT" />
    <h3>可关闭</h3>
    <j-alert closed message="THIS IS ALERT" />
    <j-alert closed type="warning" message="THIS IS ALERT" />
    <h3>显示图标</h3>
    <j-alert showIcon message="THIS IS ALERT" />
    <j-alert showIcon closed type="warning" message="THIS IS ALERT" />
    <j-alert showIcon type="success" message="THIS IS ALERT" />
    <j-alert showIcon closed type="error" message="THIS IS ALERT" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
