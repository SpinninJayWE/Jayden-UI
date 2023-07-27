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

function getTranslateValues(transformString: string) {
  // 将 transform 字符串转为矩阵数组
  const transformMatrix = transformString
    .match(/^matrix\(([^(]+)\)$/)[1]
    .split(',')
    .map(parseFloat);
  // 取出 X、Y 轴的平移量
  const translateX = transformMatrix[4];
  const translateY = transformMatrix[5];
  // 返回平移量
  return { x: translateX, y: translateY };
}
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

  const clientViewSize = reactive({
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

  function handleCarouselMouseDown(e: MouseEvent) {
    const initialX = e.clientX;
    const carouselInnerWrapperRefVal = carouselInnerWrapperRef.value;

    if (carouselInnerWrapperRefVal) {
      carouselInnerWrapperRefVal.style.willChange = 'transform';
      carouselInnerWrapperRefVal.style.transitionDuration = '0ms';
    }

    const initTranslate = getComputedStyle(
      carouselInnerWrapperRefVal!
    ).transform;
    const { x, y } = getTranslateValues(initTranslate);
    function handleMouseMove(e: MouseEvent) {
      const deltaX = e.clientX - initialX;
      const translateX = x + deltaX;

      if (carouselInnerWrapperRefVal) {
        carouselInnerWrapperRefVal.style.transform = `translate3d(${translateX}px, 0, 0)`;
      }
    }

    function handleMouseUp(e: MouseEvent) {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.onselectstart = null;
      const deltaX = e.clientX - initialX;
      const translateX = x + deltaX;

      let newTranslateX =
        Math.round(-translateX / clientViewSize.width) * clientViewSize.width;

      if (newTranslateX >= clientViewSize.fullWidth) {
        newTranslateX = -(clientViewSize.width * (carouselItemCount.value - 1));
      } else if (newTranslateX <= 0) {
        newTranslateX = 0;
      } else {
        newTranslateX = -newTranslateX;
      }
      if (carouselInnerWrapperRefVal) {
        carouselInnerWrapperRefVal.style.willChange = '';
        carouselInnerWrapperRefVal.style.transitionDuration = '400ms';
        carouselInnerWrapperRefVal.style.transform = `translate3d(${newTranslateX}px, 0, 0)`;
      }
    }

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.onselectstart = () => false;
  }
  return {
    innerWrapperStyles,
    carouselStyles,
    clientViewSize,
    carouselRef,
    carouselInnerWrapperRef,
    handleCarouselMouseDown
  };
}
