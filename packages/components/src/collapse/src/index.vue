<template>
  <div class="j-collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import {
  CollapseModelValue,
  useCollapse,
  useCollapseDom
} from '../hooks/use-collapse';
import '../style/index.scss';
defineOptions({
  name: 'JCollapse'
});

export type CollapseProps = {
  modelValue?: CollapseModelValue;
  accordion?: boolean;
};

const emit = defineEmits(['update:modelValue', 'change']);

const props = withDefaults(defineProps<CollapseProps>(), {
  modelValue: '',
  accordion: false
});
useCollapse(props, emit);

useCollapseDom(props);
</script>

<style lang="scss" scoped></style>
