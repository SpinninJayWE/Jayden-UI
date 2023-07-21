import { computed, reactive } from 'vue';
import { SelectProps } from '../src/index.vue';
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

  function onOptionSelect(val: any) {
    setSelect(val);
    emit('onChange', selectVal.value);
  }

  return {
    onOptionSelect,
    handleClear,
    selectVal,
    state,
    arrowIcon
  };
}
