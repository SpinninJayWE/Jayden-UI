<template>
  <div v-wr class="j-button" :class="buttonClass">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import './style';
import { ClickWr } from '@jayden-ui/directives';
import { computed } from 'vue';
defineOptions({
  name: 'j-button'
});
type ButtonProps = {
  type?: '' | 'primary' | 'warn' | 'info' | 'err' | 'success';
  size?: 'small' | 'medium' | 'large';
};

const vWr = ClickWr;

const props = withDefaults(defineProps<ButtonProps>(), {
  type: '',
  size: 'medium'
});

const buttonClass = computed(() => {
  return [props.type, props.size];
});
</script>
