<template>
  <div
    :disabled="disabled"
    v-wr
    class="j-button"
    @click="clickBtn"
    :class="buttonClass"
    :style="buttonStyles"
  >
    <slot name="icon">
      <div v-if="icon || iconBtn" @mousedown.stop.prevent class="j-button-icon">
        <Icon :size="size" :icon="icon" />
      </div>
    </slot>

    <div v-if="!iconBtn" @mousedown.stop.prevent class="j-button-text">
      <slot></slot>
    </div>
    <slot name="icon-right"> </slot>
  </div>
</template>

<script lang="ts" setup>
import './style/index.scss';
import { msdWr } from 'jayden-ui-directives';
import { StyleValue, computed } from 'vue';
import { Icon } from '..';
import { IconNames } from '../icon/types';
defineOptions({
  name: 'j-button'
});

const emit = defineEmits(['click']);
type ButtonProps = {
  type?: '' | 'primary' | 'warn' | 'info' | 'err' | 'success';
  size?: 'so-small' | 'small' | 'medium' | 'large';
  disabled?: boolean;
  btnType?: 'btn' | 'text' | 'icon';
  icon?: IconNames | null;
  iconBtn?: boolean;
  block?: boolean;
};

const vWr = msdWr;

const props = withDefaults(defineProps<ButtonProps>(), {
  type: '',
  size: 'medium',
  disabled: false,
  icon: null,
  iconBtn: false,
  block: false
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

const buttonStyles = computed(() => {
  const styles: StyleValue = {};
  if (props.block) {
    styles.display = 'flex';
  }
  return styles;
});

const clickBtn = (e: MouseEvent) => {
  if (props.disabled) return;
  emit('click', e);
};
</script>
