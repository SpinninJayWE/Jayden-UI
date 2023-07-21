<template>
  <div class="j-select-options">
    <div
      v-if="options.length || !options"
      @click="handleOptionSelect"
      class="j-select-option-inner"
    >
      <div
        v-wr
        class="j-select-options-item"
        v-for="item in options"
        :key="generateOptionItemKey(item.value)"
        :data-itemkey="generateOptionItemKey(item.value)"
        :class="{ selected: itemSelected(item) }"
      >
        <div @click.stop class="label-text">
          {{ item.label }}
        </div>
        <Icon
          @click.stop
          class="icon"
          v-if="itemSelected(item)"
          :icon="'icon-selected'"
        />
      </div>
    </div>
    <div
      style="
        padding: 16px;
        box-sizing: border-box;
        height: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
      "
      v-else
    >
      No Data
    </div>
  </div>
</template>

<script setup lang="ts">
import '../style/options.scss';
import { msdWr } from 'jayden-ui-directives';
import Icon from '../../icon';
import { computed } from 'vue';
import { number } from 'vue-types';

type Basicdata = string | number | boolean | null | undefined;

type OptionsItem = {
  label: Basicdata;
  value: Basicdata;
};
interface SelectOptionProps {
  multiple?: boolean;
  labelKey?: string;
  valueKey?: string;
  select?: Basicdata | Basicdata[];
  options?: OptionsItem[];
}

const emit = defineEmits(['select']);

const props = withDefaults(defineProps<SelectOptionProps>(), {
  select: undefined,
  multiple: true,
  labelKey: '',
  valueKey: '',
  options: []
});

const vWr = msdWr;

const optionsFromMap = computed(() => {
  return props.options.reduce((pre, cur) => {
    return pre.set(
      typeof cur.value === 'number' ? cur.value + '' : cur.value,
      cur
    );
  }, new Map());
});

const itemSelected = (item: OptionsItem) => {
  if (props.multiple && Array.isArray(props.select)) {
    return props.select.includes(item.value);
  } else {
    return item.value === props.select;
  }
};

const generateOptionItemKey = (val: Basicdata) => {
  if (val && typeof val !== 'boolean') {
    if (typeof val === 'number') {
      val = 'jsNum:' + val;
    }
  } else {
    val = '';
  }

  return val;
};

const rocessingValue = (val: string | undefined) => {
  const split = val?.split(':');
  let res: string | number = val || '';
  if (split?.length && split.length >= 1) {
    if (split[0] === 'jsNum') {
      res = Number(split[1]);
    }
  }
  return res;
};

function handleOptionSelect(e: Event) {
  const optItemTarget = e.target as HTMLElement;
  if (optItemTarget.classList.contains('j-select-options-item')) {
    const optItemKey = optItemTarget.dataset.itemkey;

    emit('select', rocessingValue(optItemKey));
  }
}
</script>

<style lang="scss" scoped></style>
