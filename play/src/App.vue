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
    <!-- <Collapse /> -->
    <div class="content-container">
      <h2>Checkbox 复选框</h2>
      <h3>基本用法</h3>
      Checkbox复选框 表示两种状态之间的切换
      <div>
        <j-checkbox v-model="option" label="option"> </j-checkbox>
        <j-checkbox v-model="option2" label="option2"> </j-checkbox>
      </div>
      <h3>禁用状态</h3>
      通过disabled属性实现禁用
      <div>
        <j-checkbox v-model="option" label="Not Disabled"> </j-checkbox>
        <j-checkbox disabled v-model="option2" label="Disabled"> </j-checkbox>
      </div>
      <h3>只读状态</h3>
      通过readonly属性实现只读
      <div>
        <j-checkbox readonly label="Readonly"> </j-checkbox>
      </div>
      <h3>自定义 true/false label</h3>
      通过 trueLabel/falseLabel 自定义选中/未选中的值
      <div>
        <j-checkbox
          trueLabel="Active"
          falseLabel="Inactive"
          v-model="custom"
          :label="custom"
        >
        </j-checkbox>
      </div>
      <h3>自定义颜色</h3>
      可通过多个属性设置checkbox的颜色
      <div>
        <j-checkbox borderColor="red" label="borderColor"> </j-checkbox>
        <j-checkbox labelColor="#5f27cd" label="labelColor"> </j-checkbox>
        <j-checkbox
          :defaultChecked="true"
          labelActiveColor="#10ac84"
          label="labelActiveColor"
        >
        </j-checkbox>
        <j-checkbox
          :defaultChecked="true"
          fillColor="#00d2d3"
          label="fillColor"
        >
        </j-checkbox>
        <j-checkbox :defaultChecked="true" color="#000" label="color">
        </j-checkbox>
        <j-checkbox
          borderColor="red"
          labelColor="#5f27cd"
          labelActiveColor="#10ac84"
          fillColor="#00d2d3"
          color="#000"
          :defaultChecked="true"
          label="Full"
        >
        </j-checkbox>
      </div>
      <h3>多选框组 checkbox-group</h3>
      适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。
      {{ checkList }}
      <j-checkbox-group v-model="checkList">
        <j-checkbox label="OPT1"> </j-checkbox>
        <j-checkbox label="OPT2"> </j-checkbox>
        <j-checkbox label="OPT3"> </j-checkbox>
        <j-checkbox label="OPT4"> </j-checkbox>
        <j-checkbox label="OPT5"> </j-checkbox>
        <j-checkbox label="OPT6"> </j-checkbox>
      </j-checkbox-group>
      <h3>可选项目数量的限制</h3>
      通过min和max属性限制数量范围
      <j-checkbox-group :min="1" :max="2" v-model="checkList2">
        <j-checkbox label="OPT1"> </j-checkbox>
        <j-checkbox label="OPT2"> </j-checkbox>
        <j-checkbox label="OPT3"> </j-checkbox>
        <j-checkbox label="OPT4"> </j-checkbox>
        <j-checkbox label="OPT5"> </j-checkbox>
        <j-checkbox label="OPT6"> </j-checkbox>
      </j-checkbox-group>
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
import Collapse from './exp/collapse.vue';
import { ref } from 'vue';

const option = ref(true);
const option2 = ref(false);

const custom = ref('Active');

const checkList = ref(['OPT1', 'OPT3']);

const checkList2 = ref(['OPT2']);
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

    .j-checkbox {
      margin-right: 20px;
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
