# Card 卡片

## 基本展示

<j-card>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
ratione debitis quis est labore voluptatibus! Eaque cupiditate minima,
at placeat totam, magni doloremque veniam neque porro libero rerum unde
voluptatem!
</j-card>

```html
<j-card>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione
  debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat
  totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
</j-card>
```

## 展示标题和副标题

通过**title**和**subTitle**属性添加标题、副标题
<j-card title="Card Title" subTitle="Card subtitle sceondary text">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
ratione debitis quis est labore voluptatibus! Eaque cupiditate minima,
at placeat totam, magni doloremque veniam neque porro libero rerum unde
voluptatem!
</j-card>

```html
<j-card title="Card Title" subTitle="Card subtitle sceondary text">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione
  debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat
  totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
</j-card>
```

## 标题/副标题 插槽

通过**title**、**subtitle**插槽自定义标题、副标题内容
<j-card>
<template #title>
<j-icon :icon="'icon-view-fill'"></j-icon> Card Title
</template>
<template #subtitle>
<j-icon :icon="'icon-email-fill'"></j-icon>
Card Card subtitle sceondary text
</template>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
ratione debitis quis est labore voluptatibus! Eaque cupiditate minima,
at placeat totam, magni doloremque veniam neque porro libero rerum unde
voluptatem!
</j-card>

```html
<j-card>
  <template #title>
    <j-icon :icon="'icon-view-fill'"></j-icon> Card Title
  </template>
  <template #subtitle>
    <j-icon :icon="'icon-email-fill'"></j-icon>
    Card Card subtitle sceondary text
  </template>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione
  debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat
  totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
</j-card>
```

## 操作（底部）插槽

通过**actions** 插槽 自定义底部内容
<j-card>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
ratione debitis quis est labore voluptatibus! Eaque cupiditate minima,
at placeat totam, magni doloremque veniam neque porro libero rerum unde
voluptatem!
<template #actions>
<j-button>Click Me</j-button>
&nbsp;
<j-button :type="'warn'">Clear</j-button>
</template>
</j-card>

## 阴影级别

阴影级别 通过**elevation**属性设定 范围0-24
<j-card :elevation="elevation">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
ratione debitis quis est labore voluptatibus! Eaque cupiditate minima,
at placeat totam, magni doloremque veniam neque porro libero rerum unde
voluptatem!
<j-slider :min="0" :max="24" v-model="elevation">
<template #prepend> elevation {{ elevation }} </template>
</j-slider>
</j-card>

```html
<j-card :elevation="elevation">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione
  debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat
  totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
  <j-slider :min="0" :max="24" v-model="elevation">
    <template #prepend> elevation {{ elevation }} </template>
  </j-slider>
</j-card>

<script setup>
  import { ref } from 'vue';
  const elevation = ref();
</script>
```

## 完整案例

<j-card title="Title" subTitle="Subtitle">
<template #header>
    <img
    style="width: 100%; object-fit: cover; aspect-ratio: 16/9"
    src="https://img1.baidu.com/it/u=1556499325,2437056787&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
    />
</template>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
ratione debitis quis est labore voluptatibus! Eaque cupiditate minima,
at placeat totam, magni doloremque veniam neque porro libero rerum unde
voluptatem!
<template #actions>
    <j-button>Click Me</j-button>
    &nbsp;
    <j-button :type="'warn'">Clear</j-button>
</template>
</j-card>

```html
<j-card title="Title" subTitle="Subtitle">
  <template #header>
    <img
      style="width: 100%; object-fit: cover; aspect-ratio: 16/9"
      src="https://img1.baidu.com/it/u=1556499325,2437056787&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
    />
  </template>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione
  debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat
  totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
  <template #actions>
    <j-button>Click Me</j-button>
    &nbsp;
    <j-button :type="'warn'">Clear</j-button>
  </template>
</j-card>

<script setup>
  import { ref } from 'vue';
  const elevation = ref(4);
</script>
```

<script setup>
import { ref } from 'vue';
const elevation = ref(4);
</script>
