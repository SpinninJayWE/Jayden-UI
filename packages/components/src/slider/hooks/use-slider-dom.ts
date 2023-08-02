import { StyleValue, computed } from 'vue';
import { SliderProps } from '../src/index.vue';

export default function useSliderDom(props: SliderProps) {
  const sliderStyles = computed(() => {
    const styles: StyleValue = {};
    if (props.disabled) {
      styles.pointerEvents = 'none';
      styles.filter = 'var(--j-disabled-effect)';
    }
    if (props.readonly) {
      styles.pointerEvents = 'none';
    }
    return styles;
  });

  return {
    sliderStyles
  };
}
