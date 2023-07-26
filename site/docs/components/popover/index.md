# Popover 弹出框

## 基础演示 / 支持四个方向显示

<j-popover trigger="hover">
    <template #reference>
    <j-button>Hover Show Popover from bottom</j-button>
    </template>
    <template #default> Popover content </template>
</j-popover>
<j-popover placement="right" trigger="hover">
    <template #reference>
    <j-button>Hover Show Popover from right</j-button>
    </template>
    <template #default> Popover content </template>
</j-popover>
<j-popover placement="left" trigger="hover">
    <template #reference>
    <j-button type="info">Hover Show Popover from left</j-button>
    </template>
    <template #default> Popover content </template>
</j-popover>
<j-popover placement="top" trigger="hover">
    <template #reference>
    <j-button>Hover Show Popover from top</j-button>
    </template>
    <template #default> Popover content </template>
</j-popover>

```html
<j-popover trigger="hover">
  <template #reference>
    <j-button>Hover Show Popover from bottom</j-button>
  </template>
  <template #default> Popover content </template>
</j-popover>
<j-popover placement="right" trigger="hover">
  <template #reference>
    <j-button>Hover Show Popover from right</j-button>
  </template>
  <template #default> Popover content </template>
</j-popover>
...
```

## 点击触发 / 双向绑定

<j-popover placement="top" trigger="click">
    <template #reference>
    <j-button>Click Show Popover from top</j-button>
    </template>
    <template #default> Popover content </template>
</j-popover>
<j-popover v-model="showPopover" placement="top" trigger="click">
    <template #reference>
    <j-button
        >{{ showPopover }} &nbsp;Click Show Popover from Bidirectional
    </j-button>
    </template>
    <template #default> Popover Content </template>
</j-popover>

::: code-group Code

```html [Vue Template]
<j-popover placement="top" trigger="click">
  <template #reference>
    <j-button>Click Show Popover from top</j-button>
  </template>
  <template #default> Popover content </template>
</j-popover>
<j-popover v-model="showPopover" placement="top" trigger="click">
  <template #reference>
    <j-button
      >{{ showPopover }} &nbsp;Click Show Popover from Bidirectional
    </j-button>
  </template>
  <template #default> Popover Content </template>
</j-popover>
```

```ts [Vue Setup]
import { ref } from 'vue';
const showPopover = ref(false);
```

:::

## 指定样式和宽度

<j-popover
      :popover-inner-styles="{ height: 60 + 'px', backgroundColor: 'red', color: 'white' }"
      :width="160"
      placement="bottom"
      trigger="click"
    >
<template #reference>
<j-button>Click Show Popover from Custom Styles </j-button>
</template>
<template #default> Popover Content </template>
</j-popover>

```html
<j-popover
  :popover-inner-styles="{ height: 60 + 'px', backgroundColor: 'red', color: 'white'}"
  :width="160"
  placement="bottom"
  trigger="click"
>
  <template #reference>
    <j-button>Click Show Popover from Custom Styles </j-button>
  </template>
  <template #default> Popover Content </template>
</j-popover>
```

<script setup lang="ts">
import { ref } from 'vue';

const showPopover = ref(false);
</script>

<style lang='scss' scoped>
    .j-button {
        margin-bottom: 12px;
        margin-right: 12px;
    }
</style>
