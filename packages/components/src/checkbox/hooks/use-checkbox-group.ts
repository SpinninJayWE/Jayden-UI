import { CheckboxGroupProps } from '../src/checkbox-group.vue';
import { ComputedRef, Ref, computed, provide, ref, watch } from 'vue';
import { castArray } from '../../../utils/arrays';
import { UPDATE_MODELVALUE } from '../../../constant';

export type checkboxLabel = string | number;
export type CheckBoxProvides = {
  isGroup: boolean;
  updateCheckboxsMemberChecked: (
    label: checkboxLabel | undefined,
    checked: boolean
  ) => void;
  checkedList: Ref<checkboxLabel[]>;
  modelValueUpdateCount: Ref<number>;
  limits: ComputedRef<{ isMaxed: boolean; isMined: boolean }>;
};

export default function useCheckboxGruoup(
  props: CheckboxGroupProps,
  emit: any
) {
  const modelValueUpdateCount = ref(0);
  const checkedList = ref<checkboxLabel[]>(castArray(props.modelValue));

  const onUpdateCheckboxsMemberChecked = (
    label: checkboxLabel | undefined,
    checked: boolean
  ) => {
    if (!label) return;
    const checkedListVal = checkedList.value;
    if (checked && !checkedListVal.includes(label)) {
      checkedList.value.push(label);
    } else if (!checked && checkedListVal.includes(label)) {
      checkedList.value = checkedList.value.filter((item) => item !== label);
    }

    emit(UPDATE_MODELVALUE, checkedList.value);
    emit('change', checkedList.value);
  };

  watch(
    () => props.modelValue,
    (val) => {
      modelValueUpdateCount.value++;
      if (val !== checkedList.value && val) {
        checkedList.value = castArray(val);
      }
    },
    {
      deep: true
    }
  );

  provide<CheckBoxProvides>('checkboxProvides', {
    isGroup: true,
    updateCheckboxsMemberChecked: onUpdateCheckboxsMemberChecked,
    checkedList,
    modelValueUpdateCount,
    limits: computed(() => {
      const res = {
        isMaxed: false,
        isMined: false
      };

      const checklistLneght = checkedList.value.length;
      const min = props.min;
      const max = props.max;
      if (min !== undefined && checklistLneght <= min) {
        res.isMined = true;
      }
      if (max !== undefined && checklistLneght >= max) {
        res.isMaxed = true;
      }

      return res;
    })
  });
  return {};
}
