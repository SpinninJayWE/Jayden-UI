<template>
  <div class="app">
    <!-- <Button />
    <Modal />
    <Input />
    <Icon />
    <Popover />
    <Select />
    <Alert />
    <Message /> -->
    <div class="content-container">
      <j-carousel :height="500">
        <j-carousel-item name="jay" label="jj">
          <img
            src="https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_640.jpg"
          />
        </j-carousel-item>
        <j-carousel-item name="bb" label="bbb">
          <img
            src="https://cdn.pixabay.com/photo/2014/09/03/20/15/shoes-434918_1280.jpg"
          />
        </j-carousel-item>
        <j-carousel-item name="cc" label="ccc">
          <img
            src="https://cdn.pixabay.com/photo/2019/07/07/14/03/fiat-500-4322521_640.jpg"
          />
        </j-carousel-item>
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
