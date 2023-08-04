import { computed, reactive } from 'vue';
import { OptionsItem, SelectProps } from '../src/index.vue';
import { isArray } from '../../../utils';
import { IconName } from '../../icon/types';

export default function useInput(props: SelectProps, emit: any) {
  const iconMap = {
    down: 'icon-down',
    up: 'icon-up'
  };

  const selectVal = computed({
    get() {
      return props.select;
    },
    set(value) {
      emit('update:select', value);
    }
  });

  const selectLables = computed(() => {
    const select = selectVal.value;
    let res: any = null;
    if (!props.multiple) {
      const optItem = props.options?.find((oItem) => oItem.value === select);
      if (optItem) {
        res = optItem.label;
      }
    } else if (Array.isArray(select)) {
      res = [];
      select.forEach((item) => {
        const optItem = props.options?.find((oItem) => oItem.value === item);
        if (optItem) {
          res.push(optItem.label);
        }
      });
    }

    return res;
  });

  const state = reactive({
    visbaleDropOptions: false
  });

  const arrowIcon = computed(() => {
    return state.visbaleDropOptions
      ? (iconMap.up as IconName)
      : (iconMap.down as IconName);
  });

  function handleClear() {
    if (props.multiple && Array.isArray(selectVal.value)) {
      selectVal.value.length = 0;
    } else {
      selectVal.value = undefined;
    }
    state.visbaleDropOptions = false;
  }

  function setSelect(val: any) {
    if (!props.multiple) {
      selectVal.value = val;
      state.visbaleDropOptions = false;
    } else if (Array.isArray(selectVal.value)) {
      const isInSelect = selectVal.value.findIndex((item) => item === val);
      if (isInSelect === -1) {
        selectVal.value.push(val);
      } else {
        selectVal.value.splice(isInSelect, 1);
      }
    }
  }

  function onOptionSelect(val: OptionsItem) {
    setSelect(val.value);
    emit('onChange', val);
  }

  return {
    onOptionSelect,
    handleClear,
    selectVal,
    selectLables,
    state,
    arrowIcon
  };
}
