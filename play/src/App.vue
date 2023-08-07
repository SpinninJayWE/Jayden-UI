<template>
  <div class="app">
    <!-- <Button /> -->
    <!-- <Modal /> -->
    <!-- <Input /> -->
    <!-- <Icon /> -->
    <!-- <Popover /> -->
    <!-- <Select /> -->
    <!-- <Alert /> -->
    <!-- <Message /> -->
    <!-- <Carousel /> -->
    <!-- <Slider /> -->
    <div class="content-container">
      <h2>基本展示</h2>
      <j-card>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
        ratione debitis quis est labore voluptatibus! Eaque cupiditate minima,
        at placeat totam, magni doloremque veniam neque porro libero rerum unde
        voluptatem!
      </j-card>
      <h2>展示标题和副标题</h2>
      <j-card title="Card Title" subTitle="Card subtitle sceondary text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
        ratione debitis quis est labore voluptatibus! Eaque cupiditate minima,
        at placeat totam, magni doloremque veniam neque porro libero rerum unde
        voluptatem!
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
        ratione debitis quis est labore voluptatibus! Eaque cupiditate minima,
        at placeat totam, magni doloremque veniam neque porro libero rerum unde
        voluptatem!
      </j-card>
      <h2>底部操作 插槽 Actions Slot</h2>
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
      <h2>阴影级别</h2>
      阴影级别 通过elevation设定 范围0-24
      <j-card :elevation="elevation">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
        ratione debitis quis est labore voluptatibus! Eaque cupiditate minima,
        at placeat totam, magni doloremque veniam neque porro libero rerum unde
        voluptatem!
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
    </div>
  </div>
</template>
<script setup lang="ts">
import Modal from './exp/modal.vue';
import Button from './exp/button.vue';
import Input from './exp/input.vue';
import Icon from './exp/icon.vue';
import Popover from './exp/popover.vue';
import Select from './exp/select.vue';
import Alert from './exp/alert.vue';
import Message from './exp/message.vue';
import Carousel from './exp/carousel.vue';
import Slider from './exp/slider.vue';
import { ref } from 'vue';

const elevation = ref(4);
</script>
<style lang="scss" scoped>
.app {
  padding: 25px;
  box-sizing: border-box;
}

.app .content-container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  :deep() {
    .reference-content {
      margin-bottom: 20px;
    }
    .j-message {
      margin-top: 20px;
    }
  }
  .card {
    padding-bottom: 20px;
    box-sizing: border-box;
    margin: 0 auto;
    width: 50%;
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
}
</style>
