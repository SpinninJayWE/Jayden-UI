<template>
  <component
    :is="'label'"
    :style="checkboxInputStyles"
    class="j-checkbox"
    :class="{ 'is-checked': checked }"
  >
    <span class="j-checkbox-content">
      <input
        ref="checkedRef"
        v-model="checked"
        @change="handleCheckboxInputChange"
        class="j-checkbox-input"
        type="checkbox"
      />
      <span class="j-checkbox-inner"></span>
    </span>
    <span class="j-checkbox-label">
      <slot />
      <template v-if="!$slots.default">
        {{ label }}
      </template>
    </span>
  </component>
</template>

<script setup lang="ts">
import { ComponentSize, UPDATE_MODELVALUE } from '../../../constant';
import '../style/index.scss';
import useCheckBoxDom from '../hooks/use-checkbox-dom';
import useCheckbox from '../hooks/use-checkbox';
defineOptions({
  name: 'j-checkbox'
});

export type valueType = boolean | string | number | null;
export type CheckLabel = string | number;
export type CheckboxProps = {
  modelValue?: valueType;
  size?: ComponentSize;
  label?: string;
  trueLabel?: CheckLabel;
  falseLabel?: CheckLabel;
  disabled?: boolean;
};

const emit = defineEmits([UPDATE_MODELVALUE]);

const props = withDefaults(defineProps<CheckboxProps>(), {
  label: '',
  size: 'medium',
  modelValue: null,
  trueLabel: undefined,
  falseLabel: undefined,
  disabled: false
});

const { checked, checkedRef, handleCheckboxInputChange } = useCheckbox(
  props,
  emit
);

const { checkboxInputStyles } = useCheckBoxDom(props);
</script>

<style lang="scss" scoped></style>
