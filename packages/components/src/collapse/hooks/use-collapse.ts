import { CollapseProps } from '../src/index.vue';
import { provide, ref, watch } from 'vue';
import { COLLAPSE } from './constant';
import { castArray } from '../../../utils/arrays';

export type CollapseActiveName = string | number;

export type CollapseModelValue = CollapseActiveName[] | CollapseActiveName;

function useCollapse(props: CollapseProps, emit: any) {
  const activeNames = ref<CollapseActiveName[]>(
    castArray<CollapseActiveName>(props.modelValue)
  );

  watch(
    () => props.modelValue,
    (val) => {
      activeNames.value = castArray<CollapseActiveName>(val);
    }
  );

  const setActiveNames = (_activeNames: CollapseActiveName[]) => {
    activeNames.value = _activeNames;
    const value = props.accordion ? activeNames.value[0] : activeNames.value;
    emit('update:modelValue', value);
    emit('change', value);
  };

  function handleItemClick(name: CollapseActiveName) {
    if (props.accordion) {
      setActiveNames([activeNames.value[0] === name ? '' : name]);
    } else {
      const _activeNames = [...activeNames.value];
      const index = _activeNames.indexOf(name);

      if (index > -1) {
        _activeNames.splice(index, 1);
      } else {
        _activeNames.push(name);
      }
      setActiveNames(_activeNames);
    }
  }

  provide(COLLAPSE, {
    activeNames,
    handleItemClick
  });

  return {};
}

function useCollapseDom(props: CollapseProps) {}

export { useCollapse, useCollapseDom };
