<template>
  <div class="app">
    <!-- <Button /> -->
    <!-- <Modal /> -->
    <!-- <Input /> -->
    <Icon />
    <!-- <Popover /> -->
    <!-- <Select /> -->
    <!-- <Alert /> -->
    <!-- <Message /> -->
    <!-- <Carousel /> -->
    <!-- <Slider /> -->
    <!-- <Card /> -->
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
import Card from './exp/card.vue';
import { ref } from 'vue';
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
