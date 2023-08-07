<template>
  <div class="j-card" :class="['elevation-' + elevation]">
    <div v-if="$slots.header" class="j-card-header" style="padding: 0">
      <slot name="header"></slot>
    </div>
    <div v-if="visbaledByTitles.titleContainer" class="j-card-header">
      <div v-if="visbaledByTitles.title" class="j-card-title">
        <slot name="title">
          {{ title }}
        </slot>
      </div>
      <div v-if="visbaledByTitles.subTitle" class="j-card-subtitle">
        <slot name="subtitle">
          {{ subTitle }}
        </slot>
      </div>
    </div>
    <div
      :style="{
        padding: visbaledByTitles.titleContainer ? '0 16px 16px' : '16px'
      }"
      class="j-card-content"
      v-if="$slots.default"
    >
      <slot></slot>
    </div>
    <div v-if="$slots.actions" class="j-catd-actions">
      <slot name="actions"> </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Elevation } from '@/types';
import '../style/index.scss';
import useCard from '../hooks/use-card';
defineOptions({
  name: 'j-card'
});

export type CardProps = {
  title?: string;
  subTitle?: string;
  elevation?: Elevation;
};

const props = withDefaults(defineProps<CardProps>(), {
  title: '',
  subTitle: '',
  elevation: 4
});

const { visbaledByTitles } = useCard(props);
</script>

<style lang="scss" scoped></style>
