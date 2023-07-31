import { Ref, computed, onMounted, reactive } from 'vue';
import { ClientViewSize } from '../types';
import { CarouselItemProps } from '../src/item.vue';
import { useResizeObserver } from '@vueuse/core';
import { CarouselProps } from '../src/index.vue';
type TranslateValues = { x: number; y: number };

// 获取 transform 字符串中的平移量
function getTranslateValues(transformString: string): TranslateValues {
  const transformMatrix =
    transformString
      .match(/^matrix\(([^(]+)\)$/)?.[1]
      ?.split(',')
      ?.map(parseFloat) ?? [];
  const [translateX, translateY] = transformMatrix.slice(4);
  return { x: translateX, y: translateY };
}

type CarouselMouseOnAction = 'dragStart' | 'draging' | 'drop';

type HandleCarouselMouseDownArgs = {
  e: MouseEvent;
  carouselInnerWrapperRef: Ref<HTMLElement | null | undefined>;
  clientViewSize: ClientViewSize;
  carouselItemCount: number;
  prev: () => void;
  next: () => void;
  callBack?: (action: CarouselMouseOnAction, translateX?: number) => void;
};

// 处理轮播图的鼠标按下事件
function handleCarouselMouseDown({
  e,
  carouselInnerWrapperRef,
  clientViewSize,
  carouselItemCount,
  prev,
  next,
  callBack
}: HandleCarouselMouseDownArgs): void {
  const initialX = e.clientX;
  const carouselInnerWrapperRefVal = carouselInnerWrapperRef.value;

  const start = performance.now();

  callBack && callBack('dragStart');
  // 设置 carouselInnerWrapperRef 的样式
  carouselInnerWrapperRefVal?.style.setProperty('will-change', 'transform');
  carouselInnerWrapperRefVal?.style.setProperty('transition-duration', '0ms');

  // 获取初始平移量
  const initTranslate = getComputedStyle(carouselInnerWrapperRefVal!).transform;
  const { x } = getTranslateValues(initTranslate);

  // 处理鼠标移动事件
  function handleMouseMove(e: MouseEvent): void {
    const deltaX = e.clientX - initialX;
    const translateX = x + deltaX;

    // 设置 carouselInnerWrapperRef 的样式
    carouselInnerWrapperRefVal?.style.setProperty(
      'transform',
      `translate3d(${translateX}px, 0, 0)`
    );
    callBack && callBack('draging');
  }

  // 处理鼠标放开事件
  function handleMouseUp(e: MouseEvent): void {
    const dragEndDuration = performance.now() - start;

    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    document.onselectstart = null;

    const deltaX = e.clientX - initialX;
    const translateX = x + deltaX;
    if (dragEndDuration < 100) {
      if (deltaX < 0) {
        next();
      } else if (deltaX > 0) {
        prev();
      }
      return callBack && callBack('drop');
    }

    // 计算新的平移量
    let newTranslateX =
      Math.round(-translateX / clientViewSize.width) * clientViewSize.width;
    newTranslateX =
      newTranslateX >= clientViewSize.fullWidth
        ? -(clientViewSize.width * (carouselItemCount - 1))
        : newTranslateX <= 0
        ? 0
        : -newTranslateX;

    setCarouselInnerWrapTrasnlate(carouselInnerWrapperRefVal!, {
      x: newTranslateX
    });
    callBack && callBack('drop', newTranslateX);
  }

  // 添加事件监听器
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
  document.onselectstart = () => false;
}

function setCarouselInnerWrapTrasnlate(
  target: HTMLElement,
  matrix: { x?: number; y?: number }
) {
  if (matrix.x === undefined) {
    matrix.x = 0;
  }
  if (matrix.y === undefined) {
    matrix.y = 0;
  }

  // 设置 carouselInnerWrapperRef 的样式
  target?.style.setProperty('will-change', '');
  target?.style.setProperty('transition-duration', '400ms');

  target?.style.setProperty(
    'transform',
    `translate3d(${matrix.x}px, ${matrix.y}px, 0)`
  );
}

export default function useCarousel(
  carouselInnerWrapperRef: Ref<HTMLElement | null | undefined>,
  clientViewSize: ClientViewSize,
  carouselItems: Ref<CarouselItemProps[]>,
  props: CarouselProps
) {
  let carouselAutoPlayTimer: NodeJS.Timeout | null = null;
  const state = reactive({
    isDraging: false,
    activeItemIndex: 0,
    activeItemName: ''
  });

  useResizeObserver(carouselInnerWrapperRef, () => {
    setactiveItem(state.activeItemIndex, true);
  });

  const prevDisabled = computed(() => {
    let res = false;
    if (state.activeItemIndex === 0) {
      res = true;
    }
    return res;
  });

  const nextDisabled = computed(() => {
    let res = false;
    if (state.activeItemIndex === carouselItems.value.length - 1) {
      res = true;
    }
    return res;
  });

  const carouselProgress = computed(() => {
    const curActiveidx = state.activeItemIndex + 1;
    const itemsLength = carouselItems.value.length;
    return (curActiveidx / itemsLength) * 100;
  });

  function setDragState(action: CarouselMouseOnAction) {
    if (action === 'dragStart' || action === 'draging') {
      clearCarouselAotuPlayTimer();
      state.isDraging = true;
    } else {
      startCarouselCountdown();
      state.isDraging = false;
    }
  }

  const handleMouseEventAction = (
    action: CarouselMouseOnAction,
    translateX?: number
  ) => {
    setDragState(action);
    if (action === 'drop' && translateX !== undefined) {
      const x = translateX === 0 ? 0 : -translateX;
      setactiveItem(x / clientViewSize.width);
    }
  };

  const prev = () => {
    if (prevDisabled.value) return;
    setactiveItem(--state.activeItemIndex, true);
  };

  const next = () => {
    if (nextDisabled.value) return;
    setactiveItem(++state.activeItemIndex, true);
  };

  function setactiveItem(
    itemIdx: number = state.activeItemIndex,
    setWrapTrasnlate: boolean = false
  ) {
    state.activeItemIndex = itemIdx;
    const curItem = carouselItems.value.find((item, idx) => idx === itemIdx);
    if (curItem) {
      state.activeItemName = curItem.name || '';
    }
    if (setWrapTrasnlate && carouselInnerWrapperRef.value) {
      setCarouselInnerWrapTrasnlate(carouselInnerWrapperRef.value, {
        x: -(itemIdx * clientViewSize.width)
      });
    }
  }

  function clearCarouselAotuPlayTimer() {
    if (carouselAutoPlayTimer) {
      clearInterval(carouselAutoPlayTimer);
      carouselAutoPlayTimer = null;
    }
  }

  function startCarouselCountdown() {
    clearCarouselAotuPlayTimer();
    if (!props.autoplay) return;
    carouselAutoPlayTimer = setInterval(() => {
      const idx =
        state.activeItemIndex === carouselItems.value.length - 1
          ? 0
          : state.activeItemIndex + 1;
      setactiveItem(idx, true);
    }, props.interval);
  }

  onMounted(() => {
    startCarouselCountdown();
  });
  return {
    carouselProgress,
    state,
    // 将参数打包成对象，便于管理和维护
    handleCarouselMouseDown: (e: MouseEvent) =>
      handleCarouselMouseDown({
        e,
        carouselInnerWrapperRef,
        clientViewSize,
        carouselItemCount: carouselItems.value.length,
        prev,
        next,
        callBack: handleMouseEventAction
      }),
    prev,
    next,
    triggerDisabled: {
      prevDisabled,
      nextDisabled
    },
    setactiveItem
  };
}
