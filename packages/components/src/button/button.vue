<template>
  <div class="j-button" :class="buttonClass">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import './style/index.scss';
import { computed } from 'vue';
defineOptions({
  name: 'j-button'
});
type ButtonProps = {
  type?: string;
};

const props = defineProps<ButtonProps>();

const buttonClass = computed(() => {
  return [props.type];
});
</script>
