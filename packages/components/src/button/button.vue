<template>
  <div
    :disabled="disabled"
    v-wr
    class="j-button"
    @click="clickBtn"
    :class="buttonClass"
  >
    <div v-if="icon || iconBtn" @mousedown.stop.prevent class="j-button-icon">
      <slot name="icon"></slot>
    </div>
    <div v-if="!iconBtn" @mousedown.stop.prevent class="j-button-text">
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
  type?: '' | 'so-small' | 'primary' | 'warn' | 'info' | 'err' | 'success';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  btnType?: 'btn' | 'text' | 'icon';
  icon?: string | null;
  iconBtn?: boolean;
};

const vWr = msdWr;

const props = withDefaults(defineProps<ButtonProps>(), {
  type: '',
  size: 'medium',
  disabled: false,
  icon: null,
  iconBtn: false
});

const buttonClass = computed(() => {
  const classs: string[] = [props.type, props.size];
  if (props.disabled) {
    classs.push('disabled');
  }

  if (props.iconBtn) {
    classs.push('icon-btn');
  }

  return classs;
});

const clickBtn = (e: MouseEvent) => {
  if (props.disabled) return;
  emit('click', e);
};
</script>
