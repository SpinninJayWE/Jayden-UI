import { SliderProps } from '../src/index.vue';
import { CSSProperties, StyleValue, computed, reactive } from 'vue';
export default function useSlider(props: SliderProps) {
  const state = reactive({
    sliderThumbProg: 20,
    sliderThumbSize: 20
  });
  const sliderCssVar = computed(() => {
    const res: CSSProperties = {
      '--j-slider-thumb-postion': state.sliderThumbProg + '%',
      '--j-slider-thumb-size': state.sliderThumbSize + 'px'
    };

    return res;
  });
  return {
    state,
    sliderCssVar
  };
}
