import { ComputedRef, Ref, reactive } from 'vue';
import { ClientViewSize } from '../types';

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

type CarouselMouseOnAction = 'mouseDown' | 'mouseMove' | 'mouseUp';

type HandleCarouselMouseDownArgs = {
  e: MouseEvent;
  carouselInnerWrapperRef: Ref<HTMLElement | null | undefined>;
  clientViewSize: ClientViewSize;
  carouselItemCount: number;
  callBack?: (action: CarouselMouseOnAction) => void;
};

// 处理轮播图的鼠标按下事件
function handleCarouselMouseDown({
  e,
  carouselInnerWrapperRef,
  clientViewSize,
  carouselItemCount,
  callBack
}: HandleCarouselMouseDownArgs): void {
  const initialX = e.clientX;
  const carouselInnerWrapperRefVal = carouselInnerWrapperRef.value;

  if (callBack) {
    callBack('mouseDown');
  }
  // 设置 carouselInnerWrapperRef 的样式
  carouselInnerWrapperRefVal?.style.setProperty('will-change', 'transform');
  carouselInnerWrapperRefVal?.style.setProperty('transition-duration', '0ms');

  // 获取初始平移量
  const initTranslate = getComputedStyle(carouselInnerWrapperRefVal!).transform;
  const { x } = getTranslateValues(initTranslate);

  // 处理鼠标移动事件
  function handleMouseMove(e: MouseEvent): void {
    if (callBack) {
      callBack('mouseMove');
    }
    const deltaX = e.clientX - initialX;
    const translateX = x + deltaX;

    // 设置 carouselInnerWrapperRef 的样式
    carouselInnerWrapperRefVal?.style.setProperty(
      'transform',
      `translate3d(${translateX}px, 0, 0)`
    );
  }

  // 处理鼠标放开事件
  function handleMouseUp(e: MouseEvent): void {
    if (callBack) {
      callBack('mouseUp');
    }
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    document.onselectstart = null;

    const deltaX = e.clientX - initialX;
    const translateX = x + deltaX;

    // 计算新的平移量
    let newTranslateX =
      Math.round(-translateX / clientViewSize.width) * clientViewSize.width;
    newTranslateX =
      newTranslateX >= clientViewSize.fullWidth
        ? -(clientViewSize.width * (carouselItemCount - 1))
        : newTranslateX <= 0
        ? 0
        : -newTranslateX;

    // 设置 carouselInnerWrapperRef 的样式
    carouselInnerWrapperRefVal?.style.setProperty('will-change', '');
    carouselInnerWrapperRefVal?.style.setProperty(
      'transition-duration',
      '400ms'
    );
    carouselInnerWrapperRefVal?.style.setProperty(
      'transform',
      `translate3d(${newTranslateX}px, 0, 0)`
    );
  }

  // 添加事件监听器
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
  document.onselectstart = () => false;
}

export default function useCarousel(
  carouselInnerWrapperRef: Ref<HTMLElement | null | undefined>,
  clientViewSize: ClientViewSize,
  carouselItemCount: ComputedRef<number>
) {
  const state = reactive({
    isMoving: false
  });

  const handleMouseEventAction = (action: string) => {
    console.log(action);
  };

  return {
    // 将参数打包成对象，便于管理和维护
    handleCarouselMouseDown: (e: MouseEvent) =>
      handleCarouselMouseDown({
        e,
        carouselInnerWrapperRef,
        clientViewSize,
        carouselItemCount: carouselItemCount.value,
        callBack: handleMouseEventAction
      })
  };
}
