<template>
  <div ref="carouselRef" class="j-carousel" :style="carouselStyles">
    <div
      :style="{
        width: clientViewInfo.width * 2 + 'px',
        height: clientViewInfo.height + 'px'
      }"
      class="j-carousel-inner-content"
    >
      <div
        :style="{
          width: clientViewInfo.width + 'px'
        }"
        class="j-carousel-item red"
      ></div>
      <div
        :style="{
          width: clientViewInfo.width + 'px'
        }"
        class="j-carousel-item"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useCarouselDom from '../hooks/use-carousel-dom';
import '../style/index.scss';

type Direction = 'horizontal' | 'vertical';
export type CarouselProps = {
  height?: number;
  loop?: boolean;
  direction?: Direction;
  pauseOnHover?: boolean;
  autoplay?: boolean;
  interval?: number;
};

const emit = defineEmits([]);

const props = withDefaults(defineProps<CarouselProps>(), {
  height: 300,
  loop: false,
  direction: 'horizontal',
  pauseOnHover: false,
  autoplay: false,
  interval: 3000
});

const { carouselRef, clientViewInfo, carouselStyles } = useCarouselDom(
  props,
  emit
);

defineOptions({
  name: 'j-carousel'
});
</script>
