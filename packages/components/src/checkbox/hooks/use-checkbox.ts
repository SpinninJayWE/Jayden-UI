import { UPDATE_MODELVALUE } from '../../../constant';
import { CheckLabel, CheckboxProps, valueType } from '../src/index.vue';
import { onMounted, watch, ref, computed } from 'vue';
export default function useCheckbox(props: CheckboxProps, emit: any) {
  const checked = ref<valueType>(false);
  const checkedRef = ref<HTMLInputElement>();

  const formatCheckStaus = (val: valueType) => {
    if (props.falseLabel === undefined && props.trueLabel === undefined)
      return val;
    if (val === props.trueLabel) {
      return true;
    } else if (val === props.falseLabel) {
      return false;
    }
    return false;
  };

  const checkedFToLabel = (val: valueType) => {
    if (
      (props.falseLabel === undefined && val === false) ||
      (props.trueLabel === false && val === true)
    )
      return val;

  };

  const handleCheckboxInputChange = (val: Event) => {
    const target = val.target as HTMLInputElement;
    const isChecked = target.checked;
    setChecked(isChecked);
  };

  const setChecked = (value: valueType | undefined) => {
    if (value !== null && value !== undefined) {
      checked.value = value;
    }

    emit(UPDATE_MODELVALUE, checked.value);
  };

  watch(
    () => props.modelValue,
    (val) => {
      if (val !== null && val !== undefined && checked.value !== val) {
        setChecked(formatCheckStaus(val));
      }
    }
  );

  onMounted(() => {
    setChecked(props.modelValue);
  });
  return {
    checked,
    checkedRef,
    handleCheckboxInputChange
  };
}
