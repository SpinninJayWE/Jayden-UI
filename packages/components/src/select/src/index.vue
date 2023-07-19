<template>
  <div
    v-os.j-select-dropdown="handleClickOutside"
    class="j-select"
    :class="[...selectContainerClass]"
  >
    <div v-wr class="j-select-wrapper" :style="{ ...selectConatinerStyles }">
      <div v-if="$slots.prefix" class="prefix-content">
        <slot name="prefix"></slot>
      </div>
      <div class="main-content">
        {{ iptValue }}
      </div>
      <div class="suffix-content">
        <div class="arrow">
          <slot name="suffix">
            <Icon :icon="arrowIcon"></Icon>
          </slot>
        </div>
        <div class="clear">
          <Button
            @click="handleClear"
            :size="'so-small'"
            icon-btn
            :icon="'icon-close'"
          ></Button>
        </div>
      </div>
    </div>
    <Transition name="slider-y">
      <div v-show="state.expandSelectOptions" class="j-select-dropdown-wrapper">
        <Options />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import '../style/index.scss';
import { computed } from 'vue';
import { ComponentSize } from '../../../constant/index';
import useInput from '../hooks/use-select';
import { RuleFuncs } from '@/types';
import { Icon, Button } from '../../index';
import { clickOutside, msdWr } from 'jayden-ui-directives';
import Options from './options.vue';
defineOptions({
  name: 'j-select'
});

type StringOrNumber = string | number;
export type SelectProps = {
  select?: StringOrNumber | StringOrNumber[] | undefined;
  label?: StringOrNumber;
  valueKey?: string;
  size?: ComponentSize;
  multiple?: boolean;
  rules?: RuleFuncs;
  block?: boolean;
};

const vOs = clickOutside;
const vWr = msdWr;

const emit = defineEmits(['update:select']);
const props = withDefaults(defineProps<SelectProps>(), {
  select: undefined,
  label: '',
  valueKey: '',
  size: 'medium',
  multiple: false,
  rules: null,
  block: false
});

const iptValue = computed({
  get() {
    return props.select;
  },
  set(value) {
    emit('update:select', value);
  }
});

function handleClear() {
  iptValue.value = undefined;
}

const {
  handleClickOutside,
  state,
  selectConatinerStyles,
  selectContainerClass,
  arrowIcon
} = useInput(props);
</script>
