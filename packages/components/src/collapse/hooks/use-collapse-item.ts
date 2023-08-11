import { CollapseItemProps } from '../src/item.vue';
import { COLLAPSE } from './constant';
import { Ref, StyleValue, computed, inject } from 'vue';
import { CollapseActiveName } from './use-collapse';

function useCollapseItem(props: CollapseItemProps) {
  const collapse = inject<{
    activeNames: Ref<CollapseActiveName[]>;
    handleItemClick: (name: CollapseActiveName) => void;
  }>(COLLAPSE);

  const isActive = computed(
    () => collapse?.activeNames.value.includes(props.name)
  );

  const handleHeaderClick = () => {
    if (props.disabled) return;
    collapse?.handleItemClick(props.name);
  };
  return {
    handleHeaderClick,
    isActive
  };
}

function useCollapseItemDom(props: CollapseItemProps) {
  const collapse = inject<{
    activeNames: Ref<CollapseActiveName[]>;
    handleItemClick: (name: CollapseActiveName) => void;
  }>(COLLAPSE);

  const isActive = computed(
    () => collapse?.activeNames.value.includes(props.name)
  );

  const arrowStyle = computed(() => {
    const styles: StyleValue = {};

    if (isActive.value) {
      styles.transform = 'rotate(90deg)';
    }
    return styles;
  });

  return {
    arrowStyle
  };
}

export { useCollapseItem, useCollapseItemDom };
