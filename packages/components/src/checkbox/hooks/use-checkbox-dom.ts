import { checkboxSizeMap } from '../../../constant';
import { CheckboxProps } from '../src/index.vue';
import { StyleValue, computed } from 'vue';
export default function useCheckBoxDom(props: CheckboxProps) {
  const checkboxInputStyles = computed(() => {
    const res: StyleValue = {};

    if (props.size) {
      const size = checkboxSizeMap[props.size] + 'px';
      res.height = size;
    }

    return res;
  });

  return {
    checkboxInputStyles
  };
}
