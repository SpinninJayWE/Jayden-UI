<template>
  <!-- isDraging: {{ state.isDraging }} activeItemIdx:
  {{ state.activeItemIndex }} activeItemName: {{ state.activeItemName }} items:
  {{ carouselItems.length }} carouselProgress: {{ carouselProgress }} -->
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
    <div v-if="!hideArrow" @click="prev" class="j-carousel-trigger-prev">
      <slot name="prev">
        <Button
          :disabled="triggerDisabled.prevDisabled.value"
          icon-btn
          :icon="'icon-left'"
          :size="'large'"
        />
      </slot>
    </div>
    <div v-if="!hideArrow" @click="next" class="j-carousel-trigger-next">
      <slot name="next">
        <Button
          :disabled="triggerDisabled.nextDisabled.value"
          icon-btn
          :icon="'icon-right'"
          :size="'large'"
        />
      </slot>
    </div>
    <div v-if="!hideAndicator" class="j-carousel-trigger-indication">
      <div
        @click="setactiveItem(index, true)"
        v-for="(item, index) in carouselItems"
        class="indication-item"
        :class="{ 'item-active': state.activeItemIndex === index }"
        :key="item.name"
      ></div>
    </div>
    <div v-if="showProgress" class="j-carousel-indication-progress">
      <div
        :style="{
          width: carouselProgress + '%'
        }"
        class="inner-progress"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '../../button';
import useCarouselItems from '../hooks/use-carouse-items';
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
  hideArrow?: boolean;
  hideAndicator?: boolean;
  showProgress?: boolean;
};

const emit = defineEmits([]);

const props = withDefaults(defineProps<CarouselProps>(), {
  height: 300,
  loop: false,
  direction: 'horizontal',
  pauseOnHover: false,
  autoplay: false,
  interval: 3000,
  hideArrow: false,
  hideAndicator: false,
  showProgress: false
});

const { carouselItems } = useCarouselItems();
const {
  carouselRef,
  carouselInnerWrapperRef,
  carouselStyles,
  innerWrapperStyles,
  clientViewSize
} = useCarouselDom(props, emit, carouselItems);

const {
  state,
  handleCarouselMouseDown,
  prev,
  next,
  setactiveItem,
  triggerDisabled,
  carouselProgress
} = useCarousel(carouselInnerWrapperRef, clientViewSize, carouselItems, props);

defineOptions({
  name: 'j-carousel'
});

defineExpose({
  prev,
  next,
  setactiveItem
});
</script>
