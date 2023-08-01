<template>
  <div class="j-slider" :style="{ ...sliderStyles, ...sliderCssVar }">
    <div class="j-slider-prepend">
      <slot name="prepend"><Icon :icon="'icon-a-sorting2'"></Icon></slot>
    </div>
    <div class="j-slider-inner-wrapper">
      <div class="inner-track">
        <div class="track-content"></div>
        <div class="track-fill"></div>
      </div>
      <div @mousedown="handleThumbMouseDown" class="inner-thumb"></div>
    </div>
    <div class="j-slider-append">
      <slot name="append"><Icon :icon="'icon-add'"></Icon></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import useSlider from '../hooks/use-slider';
import useSliderDom from '../hooks/use-slider-dom';
import Icon from '../../icon';
import '../style/index.scss';

defineOptions({
  name: 'j-slider'
});

export type SliderProps = {
  value?: number;
};
const props = withDefaults(defineProps<SliderProps>(), {
  value: 0
});

const { sliderCssVar, handleThumbMouseDown } = useSlider(props);

const { sliderStyles } = useSliderDom(props);
</script>
