import { Rule, ValidationStatus } from '../../types';
import { WritableComputedRef, computed, ref } from 'vue';

const checkRulesPass = (
  rules: ((val?: string | number) => Rule)[],
  modeValue: string | number
): Rule => {
  if (rules.length === 0) return true;
  let res: Rule = true;

  for (const rule of rules) {
    const ruleRes = rule(modeValue);
    if (ruleRes !== true) {
      res = ruleRes ? ruleRes : 'Field validation failed';
      break;
    }
  }
  return res;
};

export default function useInputControls(
  props: {
    disabled: boolean;
    readonly: boolean;
    rules?: ((val?: string | number) => Rule)[] | null;
  },
  modelValue: WritableComputedRef<string | number>
) {
  const validationStatus = ref<ValidationStatus>(ValidationStatus.default);
  const validationErrorMessage = ref('');

  function verifyRules(val?: string | number) {
    if (props.disabled || props.readonly) return;
    const rules = props.rules;
    if (!rules || rules.length === 0) return;

    const checkRes = checkRulesPass(rules, val || modelValue.value);

    if (checkRes === true) {
      validationStatus.value = ValidationStatus.success;
      validationErrorMessage.value = '';
    } else {
      validationStatus.value = ValidationStatus.failure;
      validationErrorMessage.value = checkRes as string;
    }
  }

  function clearRules() {
    validationStatus.value = ValidationStatus.default;
    validationErrorMessage.value = '';
  }

  const showIssueDetails = computed(() => {
    const validationStatusVal = validationStatus.value;
    return !!(
      validationStatusVal === ValidationStatus.success ||
      validationStatusVal === ValidationStatus.failure
    );
  });

  return {
    showIssueDetails,
    validationStatus,
    validationErrorMessage,
    verifyRules,
    clearRules
  };
}
