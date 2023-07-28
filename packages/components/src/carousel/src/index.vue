<template>
  <div
    @mousedown="handleCarouselMouseDown"
    ref="carouselRef"
    class="j-carousel"
    :style="carouselStyles"
  >
    <div
      ref="carouselInnerWrapperRef"
      :style="{
        ...innerWrapperStyles
      }"
      class="j-carousel-inner-wrapper"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import useCarousel from '../hooks/use-carousel';
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

const {
  carouselRef,
  carouselInnerWrapperRef,
  carouselStyles,
  innerWrapperStyles,
  clientViewSize,
  carouselItemCount
} = useCarouselDom(props, emit);

const { handleCarouselMouseDown } = useCarousel(
  carouselInnerWrapperRef,
  clientViewSize,
  carouselItemCount
);

defineOptions({
  name: 'j-carousel'
});
</script>
