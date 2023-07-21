<template>
  <div ref="referenceRef" v-if="$slots.reference" class="reference-content">
    <slot name="reference"></slot>
  </div>
  <Teleport to="body">
    <Transition
      @before-enter="handleTsBeforeEnter"
      @enter="handleTsEnter"
      :name="'fade' || `slider-${placement}`"
    >
      <div
        ref="popoverRef"
        v-if="$slots.default && popoverVisable"
        class="j-popover-content"
        :style="popoverContentStyles"
      >
        <div class="j-popover-inner">
          <slot></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import '../style/popover.scss';
import usePopover from '../hooks/use-popover';
import usePopoverDom from '../hooks/use-popover-dom';

defineOptions({
  name: 'j-popover'
});

export type PopoverProps = {
  content?: string;
  width?: number;
  trigger?: 'click' | 'hover' | 'contentmenu';
  placement?: 'top' | 'right' | 'bottom' | 'left';
  offset?: [number, number];
  modelValue?: boolean;
};

const emit = defineEmits(['update:modelValue']);

const props = withDefaults(defineProps<PopoverProps>(), {
  content: '',
  width: 120,
  trigger: 'click',
  placement: 'bottom',
  offset: [0, 0],
  modelValue: false
});

const {
  popoverVisable,
  referenceRef,
  popoverRef,
  handleTsBeforeEnter,
  handleTsEnter
} = usePopover(props, emit);

const { popoverContentStyles } = usePopoverDom(props);
</script>

<style lang="scss" scoped></style>
