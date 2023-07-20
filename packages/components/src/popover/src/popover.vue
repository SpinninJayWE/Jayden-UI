<template>
  <div ref="referenceRef" v-if="$slots.reference" class="reference-content">
    <slot name="reference"></slot>
  </div>
  <Teleport to="body">
    <Transition
      @before-enter="handleTsBeforeEnter"
      @enter="handleTsEnter"
      :name="'scale' || `slider-${placement}`"
      :duration="{ enter: 3500, leave: 1000 }"
    >
      <div
        ref="popoverRef"
        v-if="$slots.default && state.showPopover"
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
};

const props = withDefaults(defineProps<PopoverProps>(), {
  content: '',
  width: 120,
  trigger: 'click',
  placement: 'bottom',
  offset: [0, 0]
});

const { state, referenceRef, popoverRef, handleTsBeforeEnter, handleTsEnter } =
  usePopover(props);

const { popoverContentStyles } = usePopoverDom(props, referenceRef, popoverRef);
</script>

<style lang="scss" scoped></style>
