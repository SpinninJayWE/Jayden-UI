<template>
  <div
    v-cos="clickOutSideParams"
    ref="referenceRef"
    v-if="$slots.reference"
    class="reference-content"
  >
    <slot name="reference"></slot>
  </div>
  <Teleport :to="'body'">
    <Transition :name="'fade' || `slider-${placement}`">
      <div
        ref="popoverRef"
        v-if="$slots.default && popoverVisable"
        class="j-popover-content"
        :style="popoverContentStyles"
      >
        <div class="j-popover-inner" :style="popoverInnerStyles">
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
import { clickOutside } from 'jayden-ui-directives';
import { reactive } from '@vue/reactivity';
import { StyleValue, computed } from 'vue';
defineOptions({
  name: 'j-popover'
});

const vCos = clickOutside;

export type PopoverProps = {
  modelValue?: boolean | undefined;
  content?: string;
  width?: number;
  trigger?: 'click' | 'hover' | 'contentmenu';
  placement?: 'top' | 'right' | 'bottom' | 'left';
  offset?: [number, number];
  clkOutSideClosePop?: boolean;
  popoverInnerStyles?: StyleValue;
};

const emit = defineEmits(['update:modelValue', 'onClickOutside']);

const props = withDefaults(defineProps<PopoverProps>(), {
  modelValue: undefined,
  content: '',
  width: 120,
  trigger: 'click',
  placement: 'bottom',
  offset: [0, 0],
  clkOutSideClosePop: true
});

const { popoverVisable, referenceRef, popoverRef } = usePopover(props, emit);

const { popoverContentStyles } = usePopoverDom(props);

const clickOutSideParams = reactive({
  whitelist: computed(() => {
    const res = [];
    if (popoverRef.value) {
      res.push(popoverRef.value);
    }

    return res;
  }),
  callback(val: 'inside' | 'whitelist' | 'outside') {
    if (val === 'outside' && props.clkOutSideClosePop) {
      popoverVisable.value = false;
    }
    emit('onClickOutside', val);
  }
});
</script>

<style lang="scss" scoped></style>
