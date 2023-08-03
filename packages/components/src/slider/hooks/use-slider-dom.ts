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

    if (props.fillColor) {
      styles['--slider-track-fill-color'] = props.fillColor;
    }
    if (props.trackColor) {
      styles['--slider-track-color'] = props.trackColor;
    }
    if (props.thumbColor) {
      styles['--slider-thumb-color'] = props.thumbColor;
    }
    return styles;
  });

  return {
    sliderStyles
  };
}
