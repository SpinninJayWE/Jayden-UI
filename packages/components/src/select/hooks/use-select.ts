import { computed, reactive, toRaw } from 'vue';
import { SelectProps } from '../src/index.vue';
import { isArray } from '../../../utils';

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
    return state.visbaleDropOptions ? iconMap.up : iconMap.down;
  });

  function handleClickOutside(isOutside: boolean) {
    // if (isOutside) {
    //   state.visbaleDropOptions = false;
    // } else {
    //   state.visbaleDropOptions = true;
    // }
  }

  function handleClear() {
    if (props.multiple && Array.isArray(selectVal.value)) {
      selectVal.value.length = 0;
    } else {
      selectVal.value = undefined;
    }
  }

  function setSelect(val: any) {
    if (!props.multiple) {
      selectVal.value = val;
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
    handleClickOutside,
    selectVal,
    state,
    arrowIcon
  };
}
