<template>
  <div class="content-container">
    <h2>Popover</h2>
    <h3>基础演示 / 支持四个方向显示</h3>
    <j-popover trigger="hover">
      <template #reference>
        <j-button>Hover Show Popover from bottom</j-button>
      </template>
      <template #default> Popover content </template>
    </j-popover>
    &nbsp;
    <j-popover placement="right" trigger="hover">
      <template #reference>
        <j-button>Hover Show Popover from right</j-button>
      </template>
      <template #default> Popover content </template>
    </j-popover>
    &nbsp;
    <j-popover placement="left" trigger="hover">
      <template #reference>
        <j-button type="info">Hover Show Popover from left</j-button>
      </template>
      <template #default> Popover content </template>
    </j-popover>
    &nbsp;
    <j-popover placement="top" trigger="hover">
      <template #reference>
        <j-button>Hover Show Popover from top</j-button>
      </template>
      <template #default> Popover content </template>
    </j-popover>
    <h3>点击触发 / 双向绑定</h3>
    <j-popover placement="top" trigger="click">
      <template #reference>
        <j-button>Click Show Popover from top</j-button>
      </template>
      <template #default> Popover content </template>
    </j-popover>
    &nbsp;
    <j-popover v-model="showPopover" placement="top" trigger="click">
      <template #reference>
        <j-button
          >{{ showPopover }} &nbsp;Click Show Popover from Bidirectional
        </j-button>
      </template>
      <template #default> Popover content </template>
    </j-popover>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showPopover = ref(false);
</script>

<style scoped></style>
