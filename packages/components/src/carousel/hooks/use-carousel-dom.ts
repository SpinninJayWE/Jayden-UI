import { useResizeObserver } from '@vueuse/core';
import { CarouselProps } from '../src/index.vue';
import {
  computed,
  onMounted,
  provide,
  reactive,
  Ref,
  ref,
  StyleValue
} from 'vue';
import { ClientViewSize } from '../types';
import { CarouselItemProps } from '../src/item.vue';

export default function useCarouselDom(
  props: CarouselProps,
  emit: any,
  carouselItems: Ref<CarouselItemProps[]>
) {
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
        carouselRefVal.offsetWidth * carouselItems.value.length;
    }
  }

  useResizeObserver(carouselRef, setClientViewSize);

  onMounted(() => {
    setClientViewSize();
  });

  const innerWrapperStyles = computed(() => {
    const res: StyleValue = {};
    const clientViewSizeVal = clientViewSize;
    (res.width = clientViewSizeVal.width * carouselItems.value.length + 'px'),
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
    carouselItems
  };
}
