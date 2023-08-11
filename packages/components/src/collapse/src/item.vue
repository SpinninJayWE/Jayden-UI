<template>
  <div class="j-collapse-item">
    <div @click.stop="handleHeaderClick" class="j-collapse-item-header">
      <div class="header-title">
        <slot name="header">{{ title }}</slot>
      </div>
      <div :style="arrowStyle" class="right-arrow">
        <Icon :size="'small'" :icon="'icon-right'"></Icon>
      </div>
    </div>
    <CollapseTransition>
      <div v-show="isActive" class="j-collapse-item-content">
        <slot></slot>
      </div>
    </CollapseTransition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Icon, CollapseTransition } from '../../index';
import {
  useCollapseItem,
  useCollapseItemDom
} from '../hooks/use-collapse-item';

defineOptions({
  name: 'JCollapseItem'
});

export type CollapseItemProps = {
  name: string | number;
  title?: string;
  disabled?: boolean;
};

const props = withDefaults(defineProps<CollapseItemProps>(), {
  name: '',
  title: '',
  disabled: false
});

const { handleHeaderClick, isActive } = useCollapseItem(props);

const { arrowStyle } = useCollapseItemDom(props);
</script>

<style lang="scss" scoped></style>
../hooks/use-collapse-item
