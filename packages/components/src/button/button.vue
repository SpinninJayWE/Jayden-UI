<template>
  <div v-wr class="j-button" :class="buttonClass">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import '../../../theme-chalk/src/index.scss';
import { ClickWr } from '../../../directives/index';
import './style/index.scss';
import { computed } from 'vue';
defineOptions({
  name: 'j-button'
});
type ButtonProps = {
  type?: string;
};

const vWr = ClickWr;

const props = defineProps<ButtonProps>();

const buttonClass = computed(() => {
  return [props.type];
});
</script>
