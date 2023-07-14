<template>
  <div
    :disabled="disabled"
    v-wr
    class="j-button"
    @click="clickBtn"
    :class="buttonClass"
  >
    <div @mousedown.stop.prevent class="j-button-icon">
      <slot name="icon"></slot>
    </div>
    <div @mousedown.stop.prevent class="j-button-text">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import './style/index.scss';
import { msdWr } from 'jayden-ui-directives';
import { computed } from 'vue';
defineOptions({
  name: 'j-button'
});

const emit = defineEmits(['click']);
type ButtonProps = {
  type?: '' | 'primary' | 'warn' | 'info' | 'err' | 'success';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  btnType?: 'btn' | 'text' | 'icon';
};

const vWr = msdWr;

const props = withDefaults(defineProps<ButtonProps>(), {
  type: '',
  size: 'medium',
  disabled: false
});

const buttonClass = computed(() => {
  return [props.type, props.size, props.disabled ? 'disabled' : ''];
});

const clickBtn = (e: MouseEvent) => {
  if (props.disabled) return;
  emit('click', e);
};
</script>
