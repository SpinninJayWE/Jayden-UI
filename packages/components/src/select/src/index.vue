<template>
  <Popover
    :width="popoverWidth"
    v-model="state.visbaleDropOptions"
    :popover-inner-styles="{ padding: 0 }"
  >
    <template #reference>
      <div
        ref="selectRef"
        class="j-select"
        :class="[...selectContainerClass]"
        v-bind="$attrs"
      >
        <div
          v-wr
          class="j-select-wrapper"
          :style="{ ...selectConatinerStyles }"
        >
          <div v-if="$slots.prefix" class="prefix-content">
            <slot name="prefix"></slot>
          </div>
          <div class="main-content">
            {{
              isArray(selectVal) ? (selectVal as any[]).toString() : selectVal
            }}
          </div>
          <div class="suffix-content">
            <div class="arrow">
              <slot name="suffix">
                <Icon :icon="arrowIcon"></Icon>
              </slot>
            </div>
            <div class="clear">
              <Button
                @click.stop="handleClear"
                :size="'so-small'"
                icon-btn
                :icon="'icon-close'"
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </template>
    <Options
      @select="onOptionSelect"
      v-bind="{ options, multiple, labelKey, valueKey, select }"
    />
  </Popover>
</template>

<script lang="ts" setup>
import '../style/index.scss';
import { ComponentSize } from '../../../constant/index';
import useInput from '../hooks/use-select';
import { RuleFuncs } from '@/types';
import { Icon, Button, Popover } from '../../index';
import { msdWr } from 'jayden-ui-directives';
import Options from './options.vue';
import useSelectDom from '../hooks/use-select-dom';
import { isArray } from '../../../utils';
defineOptions({
  name: 'j-select',
  inheritAttrs: false
});

type Basicdata = string | number | boolean | null | undefined;

type OptionsItem = {
  label: Basicdata;
  value: Basicdata;
  disabled?: boolean;
};
export type SelectProps = {
  select?: Basicdata | Basicdata[];
  labelKey?: string;
  valueKey?: string;
  size?: ComponentSize;
  multiple?: boolean;
  rules?: RuleFuncs;
  block?: boolean;
  options?: OptionsItem[];
};

const vWr = msdWr;

const emit = defineEmits(['update:select', 'onChange']);
const props = withDefaults(defineProps<SelectProps>(), {
  select: undefined,
  label: '',
  valueKey: '',
  size: 'medium',
  multiple: false,
  rules: null,
  block: false,
  options: []
});

const { onOptionSelect, handleClear, state, arrowIcon, selectVal } = useInput(
  props,
  emit
);

const { selectRef, popoverWidth, selectConatinerStyles, selectContainerClass } =
  useSelectDom(props, emit);
</script>
