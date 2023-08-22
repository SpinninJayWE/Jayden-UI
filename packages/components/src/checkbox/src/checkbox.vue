<template>
  <component
    :is="'label'"
    :style="checkboxInputStyles"
    class="j-checkbox"
    :class="{ 'is-checked': checked }"
  >
    <span class="j-checkbox-content">
      <input
        v-model="checked"
        :readonly="readonly"
        :disabled="disabledComputed"
        @change="handleCheckboxInputChange"
        class="j-checkbox-input"
        type="checkbox"
        @keydown="handleCheckboxKeyDown"
      />
      <span class="j-checkbox-inner">
        <div class="icon-box">
          <Icon :icon="icon || 'icon-selected'" />
        </div>
      </span>
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
import Icon, { IconName } from '../../icon';
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
  readonly?: boolean;
  disabled?: boolean;
  borderColor?: string;
  labelColor?: string;
  labelActiveColor?: string;
  color?: string;
  fillColor?: string;
  defaultChecked?: boolean;
  icon?: IconName;
};

const emit = defineEmits([UPDATE_MODELVALUE, 'change']);

const props = withDefaults(defineProps<CheckboxProps>(), {
  label: '',
  size: 'medium',
  modelValue: undefined,
  trueLabel: undefined,
  falseLabel: undefined,
  readonly: false,
  disabled: false,
  borderColor: undefined,
  labelColor: undefined,
  labelActiveColor: undefined,
  color: undefined,
  fillColor: undefined,
  defaultChecked: false,
  icon: undefined
});

const {
  checked,
  disabledComputed,
  handleCheckboxInputChange,
  handleCheckboxKeyDown
} = useCheckbox(props, emit);

const { checkboxInputStyles } = useCheckBoxDom(props, disabledComputed);
</script>

<style lang="scss" scoped></style>
