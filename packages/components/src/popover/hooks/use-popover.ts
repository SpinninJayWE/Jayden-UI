import {
  StyleValue,
  computed,
  onMounted,
  onUnmounted,
  reactive,
  ref
} from 'vue';
import { PopoverProps } from '../src/popover.vue';

export default function usePopover(props: PopoverProps) {
  const referenceRef = ref<HTMLElement>();
  const popoverRef = ref<HTMLElement>();

  const state = reactive({
    showPopover: false
  });

  const popoverContentStyles = computed(() => {
    const res: StyleValue = {};
    if (props.width) {
      res.width = props.width + 'px';
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
    const referenceRef = ref<HTMLElement>();
    const popoverRef = ref<HTMLElement>();

    state.showPopover ? hidePopover() : showPopover();
  }

  function showPopover() {
    state.showPopover = true;
  }

  function hidePopover() {
    state.showPopover = false;
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
