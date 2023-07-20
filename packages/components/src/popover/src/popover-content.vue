<template>
  <Teleport to="body">
    <Transition :name="'scale' || `slider-${placement}`">
      <div
        v-bind="$attrs"
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
import { PropType, StyleValue } from 'vue';

defineOptions({
  inheritAttrs: false
});

const porps = defineProps({
  placement: {
    type: String,
    default: 'bottom'
  },
  popoverContentStyles: {
    type: Object as PropType<StyleValue>,
    default: () => {}
  }
});
</script>
