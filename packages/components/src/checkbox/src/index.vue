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
        :value="modelValue"
        @change="handleCheckboxInputChange"
        class="j-checkbox-input"
        type="checkbox"
        aria-hidden="false"
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
import { ComponentSize } from '@/constant';
import '../style/index.scss';
import useCheckBoxDom from '../hooks/use-checkbox-dom';
import { onMounted, ref, watch } from 'vue';
defineOptions({
  name: 'j-checkbox'
});

type valueType = boolean | string | number | null;
export type CheckboxProps = {
  modelValue?: valueType;
  size?: ComponentSize;
  label?: string;
};

const emit = defineEmits(['update:modelValue']);

const props = withDefaults(defineProps<CheckboxProps>(), {
  label: '',
  size: 'medium',
  modelValue: null
});

const checked = ref<valueType>(false);

const checkedRef = ref<HTMLInputElement>();

const handleCheckboxInputChange = (val: Event) => {
  const target = val.target as HTMLInputElement;
  const isChecked = target.checked;
  checked.value = isChecked;
  emit('update:modelValue', isChecked);
};

const initChecked = () => {
  if (props.modelValue !== null) {
    checked.value = props.modelValue;
    if (typeof props.modelValue === 'boolean') {
      checkedRef.value?.checked = props.modelValue;
    }
  }
};

watch(
  () => props.modelValue,
  () => {
    initChecked();
  }
);

const { checkboxInputStyles } = useCheckBoxDom(props);

onMounted(() => {
  initChecked();
});
</script>

<style lang="scss" scoped></style>
