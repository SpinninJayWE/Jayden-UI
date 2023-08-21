import { UPDATE_MODELVALUE } from '../../../constant';
import { CheckLabel, CheckboxProps, valueType } from '../src/checkbox.vue';
import { onMounted, watch, ref } from 'vue';
export default function useCheckbox(props: CheckboxProps, emit: any) {
  const checked = ref<valueType>(props.defaultChecked || false);
  const checkedRef = ref<HTMLInputElement>();

  const formatCheckStatus = (val: valueType) => {
    if (val === props.trueLabel) {
      return true;
    } else if (val === props.falseLabel) {
      return false;
    } else if (typeof val !== 'boolean') {
      return false;
    }
    return val; // 如果未匹配到trueLabel或falseLabel，则返回原始值
  };

  const formatCheckStatusToLabel = (val: valueType) => {
    if (props.trueLabel !== undefined && val) {
      return props.trueLabel;
    } else if (props.falseLabel !== undefined && !val) {
      return props.falseLabel;
    }
    return val;
  };

  const handleCheckboxInputChange = (val: Event) => {
    const target = val.target as HTMLInputElement;
    const isChecked = target.checked;

    emit(UPDATE_MODELVALUE, formatCheckStatusToLabel(isChecked));
    emit('change', formatCheckStatusToLabel(isChecked));
  };

  const handleCheckboxKeyDown = (e: KeyboardEvent) => {
    if (props.readonly || props.disabled) return;
    if (e.key === 'Enter') {
      checked.value = !checked.value;
      emit(UPDATE_MODELVALUE, formatCheckStatusToLabel(checked.value));
      emit('change', formatCheckStatusToLabel(checked.value));
    }
  };

  const setChecked = (value: valueType | undefined) => {
    if (value !== null && value !== undefined && checked.value !== value) {
      checked.value = value;
    }
  };

  watch(
    () => props.modelValue,
    (val) => {
      setChecked(formatCheckStatus(val));
    }
  );

  onMounted(() => {
    if (props.modelValue === undefined) return;
    setChecked(formatCheckStatus(props.modelValue));
  });
  return {
    checked,
    checkedRef,
    handleCheckboxInputChange,
    handleCheckboxKeyDown
  };
}
