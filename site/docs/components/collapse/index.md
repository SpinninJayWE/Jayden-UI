# Collapse 折叠面板

## 基础用法

<j-collapse >
<j-collapse-item title="Consistency" name="1">
    <div>
    Consistent with real life: in line with the process and logic of
    real life, and comply with languages and habits that the users are
    used to;
    </div>
    <div>
    Consistent within interface: all elements should be consistent, such
    as: design style, icons and texts, position of elements, etc.
    </div>
</j-collapse-item>
<j-collapse-item title="Feedback" name="2">
    <div>
    Operation feedback: enable the users to clearly perceive their
    operations by style updates and interactive effects;
    </div>
    <div>
    Visual feedback: reflect current state by updating or rearranging
    elements of the page.
    </div>
</j-collapse-item>
<j-collapse-item title="Efficiency" name="3">
    <div>
    Simplify the process: keep operating process simple and intuitive;
    </div>
    <div>
    Definite and clear: enunciate your intentions clearly so that the
    users can quickly understand and make decisions;
    </div>
    <div>
    Easy to identify: the interface should be straightforward, which
    helps the users to identify and frees them from memorizing and
    recalling.
    </div>
</j-collapse-item>
<j-collapse-item title="Controllability" name="4">
    <div>
    Decision making: giving advices about operations is acceptable, but
    do not make decisions for the users;
    </div>
    <div>
    Controlled consequences: users should be granted the freedom to
    operate, including canceling, aborting or terminating current
    operation.
    </div>
</j-collapse-item>
</j-collapse>

::: details Code

```html
<j-collapse>
  <j-collapse-item title="Consistency" name="1">
    <div>
      Consistent with real life: in line with the process and logic of real
      life, and comply with languages and habits that the users are used to;
    </div>
    <div>
      Consistent within interface: all elements should be consistent, such as:
      design style, icons and texts, position of elements, etc.
    </div>
  </j-collapse-item>
  <j-collapse-item title="Feedback" name="2">
    <div>
      Operation feedback: enable the users to clearly perceive their operations
      by style updates and interactive effects;
    </div>
    <div>
      Visual feedback: reflect current state by updating or rearranging elements
      of the page.
    </div>
  </j-collapse-item>
  <j-collapse-item title="Efficiency" name="3">
    <div>
      Simplify the process: keep operating process simple and intuitive;
    </div>
    <div>
      Definite and clear: enunciate your intentions clearly so that the users
      can quickly understand and make decisions;
    </div>
    <div>
      Easy to identify: the interface should be straightforward, which helps the
      users to identify and frees them from memorizing and recalling.
    </div>
  </j-collapse-item>
  <j-collapse-item title="Controllability" name="4">
    <div>
      Decision making: giving advices about operations is acceptable, but do not
      make decisions for the users;
    </div>
    <div>
      Controlled consequences: users should be granted the freedom to operate,
      including canceling, aborting or terminating current operation.
    </div>
  </j-collapse-item>
</j-collapse>
```

:::

## 手风琴模式 （一次只能展开一个）

<j-collapse accordion>
<j-collapse-item title="Consistency" name="1">
    <div>
    Consistent with real life: in line with the process and logic of
    real life, and comply with languages and habits that the users are
    used to;
    </div>
    <div>
    Consistent within interface: all elements should be consistent, such
    as: design style, icons and texts, position of elements, etc.
    </div>
</j-collapse-item>
<j-collapse-item title="Feedback" name="2">
    <div>
    Operation feedback: enable the users to clearly perceive their
    operations by style updates and interactive effects;
    </div>
    <div>
    Visual feedback: reflect current state by updating or rearranging
    elements of the page.
    </div>
</j-collapse-item>
<j-collapse-item title="Efficiency" name="3">
    <div>
    Simplify the process: keep operating process simple and intuitive;
    </div>
    <div>
    Definite and clear: enunciate your intentions clearly so that the
    users can quickly understand and make decisions;
    </div>
    <div>
    Easy to identify: the interface should be straightforward, which
    helps the users to identify and frees them from memorizing and
    recalling.
    </div>
</j-collapse-item>
<j-collapse-item title="Controllability" name="4">
    <div>
    Decision making: giving advices about operations is acceptable, but
    do not make decisions for the users;
    </div>
    <div>
    Controlled consequences: users should be granted the freedom to
    operate, including canceling, aborting or terminating current
    operation.
    </div>
</j-collapse-item>
</j-collapse>

```html
<j-collapse accordion> ... </j-collapse>
```

## 自定义折叠面板标题

<j-collapse accordion>
<j-collapse-item title="Consistency" name="1">
<template #header>
Consistency  <j-icon icon="icon-global"></j-icon>
</template>

<div>
Consistent with real life: in line with the process and logic of
real life, and comply with languages and habits that the users are
used to;
</div>
<div>
Consistent within interface: all elements should be consistent, such
as: design style, icons and texts, position of elements, etc.
</div>
</j-collapse-item>
<j-collapse-item title="Feedback" name="2">
    <div>
    Operation feedback: enable the users to clearly perceive their
    operations by style updates and interactive effects;
    </div>
    <div>
    Visual feedback: reflect current state by updating or rearranging
    elements of the page.
    </div>
</j-collapse-item>
<j-collapse-item title="Efficiency" name="3">
    <div>
    Simplify the process: keep operating process simple and intuitive;
    </div>
    <div>
    Definite and clear: enunciate your intentions clearly so that the
    users can quickly understand and make decisions;
    </div>
    <div>
    Easy to identify: the interface should be straightforward, which
    helps the users to identify and frees them from memorizing and
    recalling.
    </div>
</j-collapse-item>
<j-collapse-item title="Controllability" name="4">
    <div>
    Decision making: giving advices about operations is acceptable, but
    do not make decisions for the users;
    </div>
    <div>
    Controlled consequences: users should be granted the freedom to
    operate, including canceling, aborting or terminating current
    operation.
    </div>
</j-collapse-item>
</j-collapse>

```html
<j-collapse>
  <j-collapse-item title="Consistency" name="1">
    <template #header>
      Consistency <j-icon icon="icon-global"></j-icon>
    </template> </j-collapse-item
  >...
</j-collapse>
```

## 双向数据绑定

<j-collapse v-model="collapse">
<j-collapse-item title="Consistency" name="1">
    <div>
    Consistent with real life: in line with the process and logic of
    real life, and comply with languages and habits that the users are
    used to;
    </div>
    <div>
    Consistent within interface: all elements should be consistent, such
    as: design style, icons and texts, position of elements, etc.
    </div>
</j-collapse-item>
<j-collapse-item title="Feedback" name="2">
    <div>
    Operation feedback: enable the users to clearly perceive their
    operations by style updates and interactive effects;
    </div>
    <div>
    Visual feedback: reflect current state by updating or rearranging
    elements of the page.
    </div>
</j-collapse-item>
<j-collapse-item title="Efficiency" name="3">
    <div>
    Simplify the process: keep operating process simple and intuitive;
    </div>
    <div>
    Definite and clear: enunciate your intentions clearly so that the
    users can quickly understand and make decisions;
    </div>
    <div>
    Easy to identify: the interface should be straightforward, which
    helps the users to identify and frees them from memorizing and
    recalling.
    </div>
</j-collapse-item>
<j-collapse-item title="Controllability" name="4">
    <div>
    Decision making: giving advices about operations is acceptable, but
    do not make decisions for the users;
    </div>
    <div>
    Controlled consequences: users should be granted the freedom to
    operate, including canceling, aborting or terminating current
    operation.
    </div>
</j-collapse-item>
</j-collapse>

::: code-group

```html
<j-collapse v-model="collapse">
  <j-collapse-item title="Consistency" name="1">
    <div>
      Consistent with real life: in line with the process and logic of real
      life, and comply with languages and habits that the users are used to;
    </div>
    <div>
      Consistent within interface: all elements should be consistent, such as:
      design style, icons and texts, position of elements, etc.
    </div>
  </j-collapse-item>
  ...
</j-collapse>
```

```js [vue script setup]
import { ref } from 'vue';
const collapse = ref(['1', '3']);
```

<script setup lang="ts">
import { ref } from 'vue';

const collapse = ref(['1', '3']);
</script>
