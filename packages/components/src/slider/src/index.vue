<template>
  <div class="j-slider" :style="sliderCssVar">
    <div v-if="$slots.prepend" class="j-slider-prepend">
      <slot name="prepend"></slot>
    </div>
    <div
      ref="sliderWrapperRef"
      :style="sliderStyles"
      class="j-slider-inner-wrapper"
    >
      <div ref="sliderTrackRef" class="inner-track">
        <div class="track-content"></div>
        <div class="track-fill"></div>
      </div>
      <div ref="thumbRef" class="inner-thumb"></div>
    </div>
    <div v-if="$slots.append" class="j-slider-append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import useSlider from '../hooks/use-slider';
import useSliderDom from '../hooks/use-slider-dom';
import '../style/index.scss';

defineOptions({
  name: 'j-slider'
});

export type SliderProps = {
  modelValue?: number;
  disabled?: boolean;
  readonly?: boolean;
  min?: number;
  max?: number;
  step?: number;
  fillColor?: string;
  trackColor?: string;
  thumbColor?: string;
};

const emit = defineEmits(['update:modelValue']);
const props = withDefaults(defineProps<SliderProps>(), {
  modelValue: 0,
  disabled: false,
  min: 0,
  max: 100,
  step: 0,
  readonly: false,
  fillColor: '',
  trackColor: '',
  thumbColor: ''
});

const { sliderCssVar, thumbRef, sliderWrapperRef, sliderTrackRef } = useSlider(
  props,
  emit
);

const { sliderStyles } = useSliderDom(props);
</script>
