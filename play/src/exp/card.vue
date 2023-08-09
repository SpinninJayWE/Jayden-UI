<template>
  <div class="content-container">
    <h2>基本展示</h2>
    <j-card>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione
      debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat
      totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
    </j-card>
    <h2>展示标题和副标题</h2>
    <j-card title="Card Title" subTitle="Card subtitle sceondary text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione
      debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat
      totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
    </j-card>
    <h2>标题/副标题 插槽</h2>
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
    <h2>底部操作 插槽 Actions Slot</h2>
    <j-card>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione
      debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat
      totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
      <template #actions>
        <j-button>Click Me</j-button>
        &nbsp;
        <j-button :type="'warn'">Clear</j-button>
      </template>
    </j-card>
    <h2>阴影级别</h2>
    阴影级别 通过elevation设定 范围0-24
    <j-card :elevation="elevation">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione
      debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat
      totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
      <j-slider :min="0" :max="24" v-model="elevation">
        <template #prepend> elevation {{ elevation }} </template>
      </j-slider>
    </j-card>
    <h2>完整案例</h2>
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const elevation = ref(4);
</script>

<style scoped></style>
