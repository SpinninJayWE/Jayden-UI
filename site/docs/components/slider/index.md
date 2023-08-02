# Slider 滑块

## 基础使用

<j-slider></j-slider>

```html
<j-slider></j-slider>
```

## 自定义插槽

使用 **append** 和 **prepend** 插槽来轻松自定义 j-slider 以便适应任何情况。
<j-slider>
<template #prepend> Slider </template>
<template #append>
<j-icon :icon="'icon-add'"></j-icon>
</template>
</j-slider>

```html
<j-slider>
  <template #prepend> Slider </template>
  <template #append>
    <j-icon :icon="'icon-add'"></j-icon>
  </template>
</j-slider>
```

## 设置禁用

通过disabled属性设置禁用

<j-slider :modelValue="5" disabled></j-slider>

```html
<j-slider :modelValue="5" disabled></j-slider>
```

## 只读

通过readonly属性设置禁用

<j-slider :modelValue="5" readonly></j-slider>

```html
<j-slider :modelValue="5" readonly></j-slider>
```

## 绑定 v-model

通过v-model 双向数据绑定
<j-slider v-model="num">
<template #append>
<j-button :icon="'icon-add'" @click="num++"> {{ num }}</j-button>
</template>
<template #prepend>
<j-button :icon="'icon-reduce'" @click="num--">
{{ num }}
</j-button>
</template>
</j-slider>

```html
<template>
  <j-slider v-model="num">
    <template #append>
      <j-button :icon="'icon-add'" @click="num++"> {{ num }}</j-button>
    </template>
    <template #prepend>
      <j-button :icon="'icon-reduce'" @click="num--"> {{ num }} </j-button>
    </template>
  </j-slider>
</template>

<script setup>
  import { ref } from 'vue';

  const num = ref(50);
</script>
```

## 指定最大最小值

通过props min/max 指定最大最小值
<j-slider :min="-50" :max="50" v-model="num2">
<template #append>
<j-button :icon="'icon-add'" @click="num2++"> {{ num2 }}</j-button>
</template>
<template #prepend>
<j-button :icon="'icon-reduce'" @click="num2--">
{{ num2 }}
</j-button>
</template>
</j-slider>

```html
<j-slider :min="-50" :max="50" v-model="num">
  <template #append>
    <j-button :icon="'icon-add'" @click="num++"> {{ num }}</j-button>
  </template>
  <template #prepend>
    <j-button :icon="'icon-reduce'" @click="num--"> {{ num }} </j-button>
  </template>
</j-slider>

<script setup>
  import { ref } from 'vue';

  const num = ref(50);
</script>
```

## 趣味用法

<div class="card">
<div
    class="color-bgc"
    :style="{
    backgroundColor: `rgb(${r}, ${g}, ${b})`
    }"
></div>
<div class="content">
    <j-slider :min="0" :max="255" v-model="r">
    <template #prepend> R </template>
    <template #append>
        <j-input
        size="small"
        style="width: 35px"
        label="R"
        :modelValue="r"
        readonly
        />
    </template>
    </j-slider>
    <j-slider :min="0" :max="255" v-model="g">
    <template #prepend> G </template>
    <template #append>
        <j-input
        size="small"
        style="width: 35px"
        label="G"
        :modelValue="g"
        readonly
        />
    </template>
    </j-slider>
    <j-slider :min="0" :max="255" v-model="b">
    <template #prepend> B </template>
    <template #append>
        <j-input
        size="small"
        style="width: 35px"
        label="B"
        :modelValue="b"
        readonly
        />
    </template>
    </j-slider>
</div>
</div>

### code detail

::: code-group

```html [Vue Template]
<div class="card">
  <div
    class="color-bgc"
    :style="{
    backgroundColor: `rgb(${r}, ${g}, ${b})`
    }"
  ></div>
  <div class="content">
    <j-slider :min="0" :max="255" v-model="r">
      <template #prepend> R </template>
      <template #append>
        <j-input
          size="small"
          style="width: 35px"
          label="R"
          :modelValue="r"
          readonly
        />
      </template>
    </j-slider>
    <j-slider :min="0" :max="255" v-model="g">
      <template #prepend> G </template>
      <template #append>
        <j-input
          size="small"
          style="width: 35px"
          label="G"
          :modelValue="g"
          readonly
        />
      </template>
    </j-slider>
    <j-slider :min="0" :max="255" v-model="b">
      <template #prepend> B </template>
      <template #append>
        <j-input
          size="small"
          style="width: 35px"
          label="B"
          :modelValue="b"
          readonly
        />
      </template>
    </j-slider>
  </div>
</div>
```

```js [Vue Script]
import { ref } from 'vue';
const r = ref(155);
const g = ref(155);
const b = ref(155);
```

:::

<script setup >
import { ref } from 'vue';

const num = ref(50);
const num2 = ref(-15);

const r = ref(155);
const g = ref(155);
const b = ref(155);

</script>
<style lang="scss" scoped>


  .card {
    padding-bottom: 20px;
    box-sizing: border-box;
    margin: 0 auto;
    box-shadow: 0 6px 8px rgba($color: #000000, $alpha: 0.4);
    .color-bgc {
      height: 400px;
    }
    .content {
      padding: 0 16px;
      box-sizing: border-box;
      .j-slider {
        margin-top: 32px;
      }
    }
  }
</style>
