import { StyleValue, computed, reactive } from 'vue';
import { SelectProps } from '../src/index.vue';
import { componentSizeMap } from '../../../constant/index';

export default function useInput(props: SelectProps) {
  const iconMap = {
    down: 'icon-down',
    up: 'icon-up'
  };

  const state = reactive({
    expandSelectOptions: false
  });

  const arrowIcon = computed(() => {
    return state.expandSelectOptions ? iconMap.up : iconMap.down;
  });

  const selectConatinerStyles = computed(() => {
    const res: StyleValue = {};
    if (props.size) {
      res.height = `${componentSizeMap[props.size]}px`;
    }
    if (props.block) {
      res.width = '100%';
      res.display = 'block';
    }
    return res;
  });

  const selectContainerClass = computed(() => {
    const res: string[] = ['size_' + props.size!];

    return res;
  });

  function handleClickOutside(isOutside: boolean) {
    if (isOutside) {
      state.expandSelectOptions = false;
    } else {
      state.expandSelectOptions = true;
    }
  }

  function handleClear() {}

  return {
    handleClear,
    handleClickOutside,
    state,
    selectConatinerStyles,
    selectContainerClass,
    arrowIcon
  };
}
