import { useResizeObserver } from '@vueuse/core';
import { CarouselProps } from '../src/index.vue';
import {
  Component,
  computed,
  getCurrentInstance,
  isVNode,
  onMounted,
  provide,
  reactive,
  ref,
  StyleValue
} from 'vue';
import { ClientViewSize } from '../types';

export default function useCarouselDom(props: CarouselProps, emit: any) {
  const carouselRef = ref<HTMLElement | null>();
  const carouselInnerWrapperRef = ref<HTMLElement | null>();
  const carouselStyles = computed(() => {
    const res: StyleValue = {};
    if (props.height) {
      res.height = props.height + 'px';
    }
    return res;
  });

  const clientViewSize: ClientViewSize = reactive({
    width: 0,
    height: 0,
    fullWidth: 0
  });

  function setClientViewSize() {
    const carouselRefVal = carouselRef.value;
    if (carouselRefVal) {
      clientViewSize.width = carouselRefVal.offsetWidth;
      clientViewSize.height = carouselRefVal.offsetHeight;
      clientViewSize.fullWidth =
        carouselRefVal.offsetWidth * carouselItemCount.value;
    }
  }

  useResizeObserver(carouselRef, setClientViewSize);

  onMounted(() => {
    setClientViewSize();
  });

  const carouselItemCount = computed(() => {
    let res = 0;
    const currentInsDefSlots = getCurrentInstance()?.slots.default;
    if (currentInsDefSlots && currentInsDefSlots().length) {
      const defSlots = currentInsDefSlots();
      defSlots.forEach((item) => {
        const type = item.type;
        if (typeof type !== 'string' && !isVNode(type)) {
          if ((type as Component).name === 'j-carousel-item') {
            res++;
          }
        }
      });
      res = currentInsDefSlots().length;
    }
    return res;
  });

  const innerWrapperStyles = computed(() => {
    const res: StyleValue = {};
    const clientViewSizeVal = clientViewSize;
    (res.width = clientViewSizeVal.width * carouselItemCount.value + 'px'),
      (res.height = clientViewSizeVal.height + 'px');

    return res;
  });

  const innerItemStyle = computed(() => {
    const res: StyleValue = {};
    res.width = clientViewSize.width + 'px';
    return res;
  });

  provide('innerItemStyle', innerItemStyle);

  return {
    innerWrapperStyles,
    carouselStyles,
    clientViewSize,
    carouselRef,
    carouselInnerWrapperRef,
    carouselItemCount
  };
}
