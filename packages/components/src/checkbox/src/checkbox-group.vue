<template>
  <div class="j-checkbox-group">
    <slot> </slot>
  </div>
</template>

<script setup lang="ts">
import { UPDATE_MODELVALUE } from '../../../constant';
import useCheckboxGroup, { checkboxLabel } from '../hooks/use-checkbox-group';

defineOptions({
  name: 'j-checkbox-group'
});

const emit = defineEmits([UPDATE_MODELVALUE, 'change']);

export type CheckboxGroupProps = {
  modelValue?: checkboxLabel[];
  disabled?: boolean;
  min?: number;
  max?: number;
};

const props = withDefaults(defineProps<CheckboxGroupProps>(), {});

useCheckboxGroup(props, emit);
</script>

<style scoped></style>
