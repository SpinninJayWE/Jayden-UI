import { componentSizeMap } from '../../../constant';
import { SelectProps } from '../src/index.vue';
import { StyleValue, computed, ref } from 'vue';
export default function useSelectDom(props: SelectProps, emit: any) {
  const selectRef = ref<HTMLElement | null>(null);

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

  const popoverWidth = computed(() => {
    let res = 120;
    if (selectRef.value) {
      res = selectRef.value.clientWidth;
    }

    return res;
  });
  return {
    selectRef,
    popoverWidth,
    selectConatinerStyles,
    selectContainerClass
  };
}
