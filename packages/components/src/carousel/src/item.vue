<template>
  <div
    :style="{
      ...innerItemStyle
    }"
    class="j-carousel-item"
  >
    <slot>
      <div class="default-c-item">
        NAME: {{ props.name }} &nbsp; LABEL:{{ props.label }}
      </div></slot
    >
  </div>
</template>

<script setup lang="ts">
import { CSSProperties, ComputedRef, inject } from 'vue';
import { CarouselItemRegister } from '../hooks/use-carouse-items';

const innerItemStyle = inject('innerItemStyle') as ComputedRef<CSSProperties>;

const register = inject('carouselItemRegister') as CarouselItemRegister;

export type CarouselItemProps = {
  name?: string;
  label?: string;
};

const props = withDefaults(defineProps<CarouselItemProps>(), {
  name: '',
  label: ''
});

register(props);

defineOptions({
  name: 'j-carousel-item'
});
</script>

<style scoped></style>
