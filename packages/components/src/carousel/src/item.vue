<template>
  <div
    :style="{
      ...innerItemStyle
    }"
    class="j-carousel-item"
  >
    <slot> {{ props.name }} / {{ props.label }} </slot>
  </div>
</template>

<script setup lang="ts">
import { CSSProperties, ComputedRef, inject } from 'vue';

const innerItemStyle = inject('innerItemStyle') as ComputedRef<CSSProperties>;

type CarouselItemProps = {
  name?: string;
  label?: string;
};

const props = withDefaults(defineProps<CarouselItemProps>(), {
  name: '',
  label: ''
});

defineOptions({
  name: 'j-carousel-item'
});
</script>

<style scoped></style>
