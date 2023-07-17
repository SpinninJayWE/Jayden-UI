<template>
  <div class="j-input" :class="iptClass">
    <div class="j-ipt-control">
      <input
        ref="inputRef"
        :disabled="disabled || readonly"
        :value="iptValue"
        @input="onInput"
        @blur="onBlur"
        class="j-ipt"
        :type="type"
        required
        :style="inputStyles"
      />
      <div
        :style="{ ...labelStyles }"
        class="j-ipt-label"
        :class="[validationStatus]"
      >
        {{ props.label }}
      </div>
      <div class="j-jpt-border-bottom" :class="[validationStatus]"></div>
      <Transition name="scale">
        <div
          v-if="showClearTigger"
          ref="clearTiggerRef"
          class="claer-tigger-icon"
        >
          <slot name="clear">
            <Button
              size="so-small"
              @click="clearInput"
              icon-btn
              icon="icon-close"
            >
            </Button>
          </slot>
        </div>
      </Transition>
    </div>
    <div
      v-if="showIssueDetails"
      class="j-ipt-details"
      :class="[validationStatus]"
    >
      {{ validationStatus }}
      &nbsp;
      {{ validationErrorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import './style/index.scss';
import Button from '../button';
import useInput from './hooks/use-input';
import { RuleFuncs } from '../../types/validator';
import { useInputControls } from '../../hooks/from-controls';
import { ref } from 'vue';

defineOptions({
  name: 'j-input'
});

export type InputProps = {
  modelValue: string | number;
  type?: 'text' | 'password';
  label?: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  readonly?: boolean;
  block?: boolean;
  clearable?: boolean;
  rules?: RuleFuncs;
};

const emit = defineEmits(['update:modelValue']);

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  type: 'text',
  label: 'Label',
  size: 'medium',
  disabled: false,
  readonly: false,
  block: false,
  clearable: false,
  rules: null
});

const inputRef = ref<HTMLInputElement>();

const {
  handleInput,
  clearTiggerRef,
  iptValue,
  iptClass,
  labelStyles,
  showClearTigger,
  inputStyles
} = useInput(props, emit);

const {
  showIssueDetails,
  validationStatus,
  validationErrorMessage,
  verifyRules,
  clearRules
} = useInputControls(
  {
    disabled: props.disabled,
    readonly: props.readonly,
    rules: props.rules
  },
  iptValue
);

const onInput = (e: Event) => {
  const targetVal = handleInput(e);

  verifyRules(targetVal);
};

const onBlur = (e: Event) => {
  verifyRules((e.target as HTMLInputElement).value);
};

const clearInput = () => {
  iptValue.value = '';
  clearRules();
};
</script>

<style scoped></style>
