<template>
  <div v-if="icon" class="j-icon" :class="iconClass" :style="iconStyles">
    <i class="iconfont" :class="[icon]"></i>
  </div>
</template>

<script lang="ts" setup>
import './style/index.scss';
import { StyleValue, computed } from 'vue';
import { IconNames } from './types/index';
defineOptions({
  name: 'j-icon'
});
type IconProps = {
  color?: string;
  size?: 'so-small' | 'small' | 'medium' | 'large';
  disabled?: boolean;
  icon: IconNames | null;
  hover?: boolean;
};

const props = withDefaults(defineProps<IconProps>(), {
  iconColor: '',
  size: 'medium',
  disabled: false,
  icon: null,
  hover: true
});

const iconClass = computed(() => {
  return ['size_' + props.size];
});

const iconStyles = computed(() => {
  const styles: StyleValue = {};
  if (props.color) {
    styles.color = props.color;
  }
  if (props.hover) {
    styles.cursor = 'pointer';
  }

  return styles;
});
</script>
