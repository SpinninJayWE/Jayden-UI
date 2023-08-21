import { componentDisabeld } from '../../../utils';
import { checkboxSizeMap } from '../../../constant';
import { CheckboxProps } from '../src/checkbox.vue';
import { StyleValue, computed } from 'vue';
export default function useCheckBoxDom(props: CheckboxProps) {
  const checkboxInputStyles = computed(() => {
    const res: StyleValue = {};

    if (props.size) {
      const size = checkboxSizeMap[props.size] + 'px';
      res.height = size;
    }
    if (props.readonly) {
      res.pointerEvents = 'none';
    }
    componentDisabeld(props.disabled, res);

    if (props.borderColor) {
      res['--j-checkbox-border-color'] = props.borderColor;
    }
    if (props.labelColor) {
      res['--j-checkbox-label-color'] = props.labelColor;
    }
    if (props.labelActiveColor) {
      res['--j-checkbox-label-active-color'] = props.labelActiveColor;
    }
    if (props.color) {
      res['--j-checkbox-color'] = props.color;
    }
    if (props.fillColor) {
      res['--j-checkbox-fill-color'] = props.fillColor;
    }
    return res;
  });

  return {
    checkboxInputStyles
  };
}
