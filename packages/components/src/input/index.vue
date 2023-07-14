<template>
  <div class="j-input" :class="iptClass">
    <div class="j-ipt-control">
      <input
        :value="iptValue"
        @input="handleInput"
        class="j-ipt"
        :type="type"
      />
      <div class="j-ipt-label">
        {{ props.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import './style/index.scss';
defineOptions({
  name: 'j-input'
});

type InputProps = {
  modelValue: string | number;
  type?: 'text' | 'password';
  label?: string;
  size?: 'small' | 'medium' | 'large';
};

const emit = defineEmits(['update:modelValue']);

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  type: 'text',
  label: 'Label',
  size: 'medium'
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
  return res;
});
</script>

<style scoped></style>
