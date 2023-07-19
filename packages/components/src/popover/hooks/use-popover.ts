import {
  StyleValue,
  computed,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  nextTick
} from 'vue';
import { PopoverProps } from '../src/popover.vue';
import { useResizeObserver } from '@vueuse/core';

const popoverDefaultOffset = 15;

function calculatePopoverPosition({
  referenceTop,
  referenceLeft,
  referenceWidth,
  referenceHeight,
  popoverWidth,
  popoverHeight,
  placement,
  offset
}: {
  referenceTop: number;
  referenceLeft: number;
  referenceWidth: number;
  referenceHeight: number;
  popoverWidth: number;
  popoverHeight: number;
  placement: 'top' | 'left' | 'right' | 'bottom' | undefined;
  offset: [number, number];
}): { left: number; top: number } {
  let left = 0;
  let top = 0;

  switch (placement) {
    case 'top':
      left = referenceLeft + referenceWidth / 2 - popoverWidth / 2 + offset[0];
      top = referenceTop - popoverHeight + offset[1];
      break;
    case 'left':
      left = referenceLeft - popoverWidth + offset[0];
      top = referenceTop + referenceHeight / 2 - popoverHeight / 2 + offset[1];
      break;
    case 'right':
      left = referenceLeft + referenceWidth + offset[0];
      top = referenceTop + referenceHeight / 2 - popoverHeight / 2 + offset[1];
      break;
    case 'bottom':
      left = referenceLeft + referenceWidth / 2 - popoverWidth / 2 + offset[0];
      top = referenceTop + referenceHeight + offset[1];
      break;
    default:
      break;
  }

  return { left, top };
}

function setPopoverPostion(
  referenceRefVal: HTMLElement,
  popoverRefVal: HTMLElement,
  placement: PopoverProps['placement'],
  offset: [number, number]
) {
  // top left right bottom

  // 获取参考元素的尺寸和位置信息
  const referenceRect = referenceRefVal.getBoundingClientRect();
  const referenceTop = referenceRect.top + window.pageYOffset;
  const referenceLeft = referenceRect.left + window.pageXOffset;
  const referenceWidth = referenceRefVal.offsetWidth;
  const referenceHeight = referenceRefVal.offsetHeight;

  // 获取弹出框元素的尺寸信息
  const popoverWidth = popoverRefVal.clientWidth;
  const popoverHeight = popoverRefVal.clientHeight;

  // 计算弹出框的 left 和 top 值
  const { left, top } = calculatePopoverPosition({
    referenceTop,
    referenceLeft,
    referenceWidth,
    referenceHeight,
    popoverWidth,
    popoverHeight,
    placement,
    offset
  });

  // 设置弹出框的位置
  popoverRefVal.style.position = 'absolute';
  popoverRefVal.style.left = left + 'px';
  popoverRefVal.style.top = top + 'px';
}

export default function usePopover(props: PopoverProps) {
  const referenceRef = ref<HTMLElement>();
  const popoverRef = ref<HTMLElement>();

  useResizeObserver(document.body, handleResize);

  const state = reactive({
    showPopover: false
  });

  const popoverContentStyles = computed(() => {
    const res: StyleValue = {};
    if (props.width) {
      res.width = props.width + 'px';
    }
    const placement = props.placement;

    const marginOffset = popoverDefaultOffset + 'px';
    if (placement === 'left') {
      res.paddingRight = marginOffset;
    } else if (placement === 'right') {
      res.paddingLeft = marginOffset;
    } else if (placement === 'top') {
      res.paddingBottom = marginOffset;
    } else if (placement === 'bottom') {
      res.paddingTop = marginOffset;
    }
    return res;
  });
  onMounted(() => {
    initPopover();
    const trigger = props.trigger;
    bindTriggerEvent(trigger);
  });

  onUnmounted(() => {
    const trigger = props.trigger;
    removeTriggerEvent(trigger);
  });

  function bindTriggerEvent(trigger: PopoverProps['trigger']) {
    const referenceRefVal = referenceRef.value;
    if (referenceRefVal) {
      if (trigger === 'click') {
        referenceRefVal.addEventListener('click', togglePopover);
      } else if (trigger === 'hover') {
        referenceRefVal.addEventListener('mouseenter', showPopover);
        referenceRefVal.addEventListener('mouseleave', hidePopover);
      }
    }
  }

  function removeTriggerEvent(trigger: PopoverProps['trigger']) {
    const referenceRefVal = referenceRef.value;
    if (referenceRefVal) {
      if (trigger === 'click') {
        referenceRefVal.removeEventListener('click', togglePopover);
      } else if (trigger === 'hover') {
        referenceRefVal.removeEventListener('mouseenter', showPopover);
        referenceRefVal.removeEventListener('mouseleave', hidePopover);
      }
    }
  }

  function togglePopover() {
    state.showPopover ? hidePopover() : showPopover();
  }

  async function showPopover() {
    state.showPopover = true;
    await nextTick();
    const referenceRefVal = referenceRef.value as HTMLElement;
    const popoverRefVal = popoverRef.value as HTMLElement;
    setPopoverPostion(
      referenceRefVal,
      popoverRefVal,
      props.placement,
      props.offset
    );
  }
  function hidePopover() {
    state.showPopover = false;
  }

  function handleResize() {
    if (state.showPopover) {
      showPopover();
    }
  }

  function initPopover() {
    const popoverContainer = document.querySelector('#popover-container');
    if (!popoverContainer) {
      let createPopoverConatainer = document.createElement('div');
      createPopoverConatainer.id = '#popover-container';
      document.body.appendChild(createPopoverConatainer);
    }
  }
  return {
    state,
    referenceRef,
    popoverRef,
    popoverContentStyles
  };
}
