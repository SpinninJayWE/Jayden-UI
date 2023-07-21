import {
  StyleValue,
  computed,
  onMounted,
  onUnmounted,
  ref,
  nextTick
} from 'vue';
import { PopoverProps } from '../src/popover.vue';
import { useResizeObserver } from '@vueuse/core';

// function initPopover() {
//   const popoverContainer = document.querySelector('#popover-container');
//   if (!popoverContainer) {
//     let createPopoverConatainer = document.createElement('div');
//     createPopoverConatainer.id = '#popover-container';
//     document.body.appendChild(createPopoverConatainer);
//     console.log('init popover');
//   }
// }

// initPopover();

function getViewportSize() {
  const width = document.documentElement.clientWidth || window.innerWidth;
  const height = document.documentElement.clientHeight || window.innerHeight;
  return { width, height };
}

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

function setPopoverPosition(
  referenceRefVal: HTMLElement,
  popoverRefVal: HTMLElement,
  placement: PopoverProps['placement'],
  offset: [number, number]
) {
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
  popoverRefVal.style.left = left + 'px';
  popoverRefVal.style.top = top + 'px';

  return {
    left,
    top
  };
}

export default function usePopover(props: PopoverProps, emit: any) {
  const referenceRef = ref<HTMLElement>();
  const popoverRef = ref<HTMLElement>();

  useResizeObserver(document.body, handleResize);

  const popoverVisable =
    typeof props.modelValue === 'boolean'
      ? computed({
          get() {
            return props.modelValue;
          },
          set(value) {
            emit('update:modelValue', value);
          }
        })
      : ref(false);

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

  onMounted(() => {
    const trigger = props.trigger;
    bindTriggerEvent(trigger);
  });

  onUnmounted(() => {
    const trigger = props.trigger;
    removeTriggerEvent(trigger);
  });

  function togglePopover() {
    popoverVisable.value ? hidePopover() : showPopover();
  }

  async function showPopover() {
    popoverVisable.value = true;
    await nextTick();

    const referenceRefVal = referenceRef.value as HTMLElement;
    const popoverRefVal = popoverRef.value as HTMLElement;
    setPopoverPosition(
      referenceRefVal,
      popoverRefVal,
      props.placement,
      props.offset!
    );
  }
  function hidePopover() {
    popoverVisable.value = false;
  }

  function handleResize() {
    if (popoverVisable.value) {
      showPopover();
    }
  }

  function teleportContainer() {
    const popoverContainer = document.querySelector('##popover-container');
    return popoverContainer?.id || 'body';
  }

  return {
    teleportContainer,
    popoverVisable,
    referenceRef,
    popoverRef
  };
}
