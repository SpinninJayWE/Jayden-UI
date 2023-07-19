<template>
  <div ref="referenceRef" v-if="$slots.reference" class="reference-content">
    <slot name="reference"></slot>
  </div>
  <Teleport to="body">
    <Transition :name="'scale' || `slider-${placement}`">
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

const { state, referenceRef, popoverRef, popoverContentStyles } =
  usePopover(props);
</script>

<style lang="scss" scoped></style>
