<template>
  <div class="j-input" :class="iptClass">
    <div class="j-ipt-control">
      <input
        :disabled="disabled || readonly"
        :value="iptValue"
        @input="handleInput"
        class="j-ipt"
        :type="type"
        required
      />
      <div :style="{ ...labelStyles }" class="j-ipt-label">
        {{ props.label }}
      </div>
      <div class="j-jpt-border-bottom"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { StyleValue, computed } from 'vue';
import './style/index.scss';
defineOptions({
  name: 'j-input'
});

type InputProps = {
  modelValue: string | number;
  type?: 'text' | 'password';
  label?: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  readonly?: boolean;
  block?: boolean;
};

const emit = defineEmits(['update:modelValue']);

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  type: 'text',
  label: 'Label',
  size: 'medium',
  disabled: false,
  readonly: false,
  block: false
});

const iptValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  }
});

function handleInput(e: Event) {
  const target = e.target as HTMLInputElement;
  iptValue.value = target.value;
}

const iptClass = computed(() => {
  const res = ['size-' + props.size];
  if (props.disabled) {
    res.push('disabled');
  }

  if (props.block) {
    res.push('j-block-ipt');
  }
  return res;
});

const labelStyles = computed(() => {
  const res: StyleValue = {};

  if ((props.disabled || props.readonly) && iptValue.value) {
    res.transform = 'translate(-5px, -16px)';
  }

  return res;
});
</script>

<style scoped></style>
