<template>
  <div class="j-icon" :class="buttonClass">jay icon</div>
</template>

<script lang="ts" setup>
import './style/index.scss';
import { computed } from 'vue';
defineOptions({
  name: 'j-icon'
});
type ButtonProps = {
  type?: string;
};

const props = defineProps<ButtonProps>();

const buttonClass = computed(() => {
  return [props.type];
});
</script>
