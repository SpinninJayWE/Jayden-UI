<template>
  <div class="j-popover">
    <div ref="referenceRef" v-if="$slots.reference" class="reference-content">
      <slot name="reference"></slot>
    </div>
    <Teleport to="body">
      <Transition name="slider-bottom">
        <div
          ref="popoverRef"
          v-if="$slots.default && state.showPopover"
          class="j-popover-content"
          :style="popoverContentStyles"
        >
          <slot></slot>
        </div>
      </Transition>
    </Teleport>
  </div>
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
  placement: 'top' | 'right' | 'bottom' | 'left';
};

const props = withDefaults(defineProps<PopoverProps>(), {
  content: '',
  width: 120,
  trigger: 'click',
  placement: 'top'
});

const { state, referenceRef, popoverRef, popoverContentStyles } =
  usePopover(props);
</script>

<style lang="scss" scoped></style>
