import { CarouselProps } from '../src/index.vue';
import { computed, ref, StyleValue } from 'vue';
export default function useCarouselDom(props: CarouselProps, emit: any) {
  const carouselRef = ref<HTMLElement | null>();
  const carouselStyles = computed(() => {
    const res: StyleValue = {};
    if (props.height) {
      res.height = props.height + 'px';
    }
    return res;
  });

  const clientViewInfo = computed(() => {
    const res = {
      width: 0,
      height: 0
    };

    if (carouselRef.value) {
      res.width = carouselRef.value.clientWidth;
      res.height = carouselRef.value.clientHeight;
    }
    return res;
  });
  return {
    carouselStyles,
    clientViewInfo,
    carouselRef
  };
}
