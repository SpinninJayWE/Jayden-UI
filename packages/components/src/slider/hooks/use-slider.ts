import { SliderProps } from '../src/index.vue';
import { CSSProperties, computed, reactive, ref, watch } from 'vue';
import useMouseMove, { MoveStatus } from '../../../hooks/common/use-mousemove';
import {
  clamp,
  convertPercentageToValue,
  convertValueToPercentage
} from '../../../utils';

export default function useSlider(props: SliderProps, emit: any) {
  const sliderWrapperRef = ref<HTMLElement>();
  const sliderTrackRef = ref<HTMLElement>();
  const thumbRef = ref<HTMLElement>();

  const state = reactive({
    sliderThumbProg: 0,
    sliderThumbSize: 18,
    sliderTrackSize: 8
  });

  const sliderCssVar = computed(() => {
    const res: CSSProperties = {
      '--j-slider-thumb-postion': state.sliderThumbProg + '%',
      '--j-slider-thumb-size': state.sliderThumbSize + 'px',
      '--slider-track-size': state.sliderTrackSize + 'px'
    };

    return res;
  });

  const disabled = computed(() => {
    return !!(props.disabled || props.readonly);
  });

  let initialX = 0;
  let initiaThumbProg = 0;
  const { moveStatus } = useMouseMove([thumbRef, sliderTrackRef], {
    moveStart(e) {
      if (disabled.value) return;
      initialX = e.clientX;
      initiaThumbProg = state.sliderThumbProg;

      if (
        sliderWrapperRef.value &&
        sliderTrackRef.value?.contains(e.target as HTMLElement)
      ) {
        initiaThumbProg = state.sliderThumbProg = Math.round(
          (e.offsetX / sliderWrapperRef.value.offsetWidth) * 100
        );
        setModelValue(state.sliderThumbProg);
      }
    },
    Moving(e) {
      if (disabled.value) return;
      const deltaX = e.clientX - initialX;
      const clientWidth = sliderWrapperRef.value?.clientWidth || 0;
      const deltaXP = (deltaX / clientWidth) * 100;
      state.sliderThumbProg = clamp(initiaThumbProg + deltaXP);
      setModelValue(state.sliderThumbProg);
    },
    moveEnd(e) {
      if (disabled.value) return;
      const deltaX = e.clientX - initialX;
      const clientWidth = sliderWrapperRef.value?.clientWidth || 0;
      const deltaXP = (deltaX / clientWidth) * 100;
      state.sliderThumbProg = clamp(initiaThumbProg + deltaXP);
      setModelValue(state.sliderThumbProg);
    }
  });

  function setProgByValue(val: number) {
    // 初始化进度条的值
    const { min, max } = props;
    if (min !== undefined && max !== undefined) {
      const prog = convertValueToPercentage(val, {
        min,
        max
      });
      state.sliderThumbProg = clamp(prog);
    }
  }

  const setModelValue = (val: number) => {
    const { min, max } = props;
    if (min !== undefined && max != undefined) {
      const modelValue = Math.trunc(
        convertPercentageToValue(val, { min, max })
      );
      emit('update:modelValue', modelValue);
    }
  };

  watch(
    () => props.modelValue,
    (val) => {
      if (val !== undefined && moveStatus.value !== MoveStatus.MOVING) {
        setProgByValue(val);
      }
    }
  );

  if (props.modelValue !== undefined) {
    setProgByValue(props.modelValue);
  }
  return {
    state,
    sliderCssVar,
    thumbRef,
    sliderWrapperRef,
    sliderTrackRef
  };
}
