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
    <!-- <Card /> -->
    <!-- <div class="content-container">
      <div>
        <j-button @click="show = !show">show/hide</j-button>
      </div>
      <j-collapse-transition>
        <div v-if="show" style="padding: 18px; background-color: aqua">
          <p>1111</p>
          <p>222</p>
          <p>333</p>
          <p>444</p>
          <p>555</p>
        </div>
      </j-collapse-transition>
      <div>
        <j-button @click="show = !show">show/hide</j-button>
      </div>
    </div> -->
    <div class="content-container">
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
import Card from './exp/card.vue';
import { ref } from 'vue';

const collapse = ref(['1', '4']);
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
