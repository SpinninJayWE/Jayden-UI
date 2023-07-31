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
    <br />
    <div class="content-container">
      <h2>Carousel 轮播</h2>
      <h3>基础用法</h3>
      可以通过箭头按钮、指示器、拖拽切换轮播
      <j-carousel>
        <j-carousel-item name="A" label="AA"></j-carousel-item>
        <j-carousel-item name="B" label="BB"></j-carousel-item>
        <j-carousel-item name="C" label="CC"></j-carousel-item>
        <j-carousel-item name="D" label="DD"></j-carousel-item>
      </j-carousel>
      <br />
      <h3>自定义内容、指定高度</h3>
      通过j-carousel-item default slot 自定义内容 通过 prop height 指定高度
      <j-carousel :height="600">
        <j-carousel-item>
          <img
            src="https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_640.jpg"
          />
        </j-carousel-item>
        <j-carousel-item>
          <img
            src="https://cdn.pixabay.com/photo/2014/09/03/20/15/shoes-434918_1280.jpg"
          />
        </j-carousel-item>
        <j-carousel-item>
          <img
            src="https://cdn.pixabay.com/photo/2019/07/07/14/03/fiat-500-4322521_640.jpg"
          />
        </j-carousel-item>
        <j-carousel-item>
          <img
            src="https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />
        </j-carousel-item>
      </j-carousel>
      <h3>显示进度条</h3>
      通过prop showProgress显示进度条
      <j-carousel showProgress>
        <j-carousel-item name="A" label="AA"></j-carousel-item>
        <j-carousel-item name="B" label="BB"></j-carousel-item>
        <j-carousel-item name="C" label="CC"></j-carousel-item>
        <j-carousel-item name="D" label="DD"></j-carousel-item>
      </j-carousel>
      <h3>隐藏触发器</h3>
      通过props hideAndicator/hideArrow 隐藏触发器
      <j-carousel hideAndicator hideArrow>
        <j-carousel-item name="A" label="AA"></j-carousel-item>
        <j-carousel-item name="B" label="BB"></j-carousel-item>
        <j-carousel-item name="C" label="CC"></j-carousel-item>
        <j-carousel-item name="D" label="DD"></j-carousel-item>
      </j-carousel>
      <h3>自动轮播</h3>
      通过props autoplay 启用轮播 默认3000ms切换一次
      <j-carousel autoplay showProgress>
        <j-carousel-item name="A" label="AA"></j-carousel-item>
        <j-carousel-item name="B" label="BB"></j-carousel-item>
        <j-carousel-item name="C" label="CC"></j-carousel-item>
        <j-carousel-item name="D" label="DD"></j-carousel-item>
      </j-carousel>
      <h3>指定轮播切换周期</h3>
      通过props interval(ms) 配置轮播切换周期
      <j-carousel :interval="1000" autoplay showProgress>
        <j-carousel-item name="A" label="AA"></j-carousel-item>
        <j-carousel-item name="B" label="BB"></j-carousel-item>
        <j-carousel-item name="C" label="CC"></j-carousel-item>
        <j-carousel-item name="D" label="DD"></j-carousel-item>
      </j-carousel>
      <h3>通过插槽自定义切换按钮</h3>
      通过prev/next slot 自定义切换按钮
      <j-carousel>
        <j-carousel-item name="A" label="AA"></j-carousel-item>
        <j-carousel-item name="B" label="BB"></j-carousel-item>
        <j-carousel-item name="C" label="CC"></j-carousel-item>
        <j-carousel-item name="D" label="DD"></j-carousel-item>
        <template #prev>
          <j-button icon="icon-left">PREV</j-button>
        </template>
        <template #next>
          <j-button>
            <template #icon-right> <j-icon :icon="'icon-right'" /> </template>
            NEXT
          </j-button>
        </template>
      </j-carousel>
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
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
  }
}
</style>
