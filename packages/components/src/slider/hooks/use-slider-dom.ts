import { StyleValue, computed } from 'vue';
import { SliderProps } from '../src/index.vue';

export default function useSliderDom(props: SliderProps) {
  const sliderStyles = computed(() => {
    const styles: StyleValue = {};
    return styles;
  });

  return {
    sliderStyles
  };
}
