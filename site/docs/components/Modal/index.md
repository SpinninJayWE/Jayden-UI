# Modal 模态框

## 基础演示 ‘点击蒙层关闭’

<j-button @click="modalShow = true" type="primary">Open Modal </j-button>

<j-modal
        :clkOutSideClose="true"
        position="top"
        title="Modal"
        v-model:visable="modalShow"
    >
content...
</j-modal>

```html
<j-button @click="modalShow = true" type="primary">Open Modal </j-button>

<j-modal
  :clkOutSideClose="true"
  position="top"
  title="Modal"
  v-model:visable="modalShow"
>
  content...
</j-modal>
```

## 自定义标题

<j-button @click="modalShow2 = true" type="primary">Open </j-button>
<j-modal
        :clkOutSideClose="true"
        position="top"
        title="Modal"
        v-model:visable="modalShow2"
    >
<template #title>

<div>我是标题</div>
</template>
 content...
</j-modal>

```html
<j-button @click="modalShow2 = true" type="primary">Open </j-button>
<j-modal
  :clkOutSideClose="true"
  position="top"
  title="Modal"
  v-model:visable="modalShow2"
>
  <template #title>
    <div>我是标题</div>
  </template>
  content...
</j-modal>
```

## 自定义页脚 ‘点击蒙层不关闭’

<j-button @click="modalShow3 = true" type="primary">Open</j-button>
<j-modal
        position="top"
        title="Modal"
        v-model:visable="modalShow3"
    >
<template #footer>

  <div>我是页脚</div>
</template>
 content...
</j-modal>

```html
<j-button @click="modalShow3 = true" type="primary">Open</j-button>
<j-modal position="top" title="Modal" v-model:visable="modalShow3">
  <template #footer>
    <div>我是页脚</div>
  </template>
  content...
</j-modal>
```

## 源代码

[jayden-ui > modal](https://github.com/SpinninJayWE/Jayden-UI/tree/master/packages/components/src/modal)

<script setup>
import { ref } from 'vue'

const modalShow = ref(false)

const modalShow2 = ref(false)
const modalShow3 = ref(false)
</script>
