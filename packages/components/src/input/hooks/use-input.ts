import { StyleValue, computed, ref } from 'vue';
import { InputProps } from '../index.vue';

export default function useInput(props: InputProps, emit: any) {
  const clearTiggerRef = ref<HTMLElement>();

  const iptValue = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit('update:modelValue', value);
    }
  });

  function handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    iptValue.value = target.value;
    return target.value;
  }

  const iptClass = computed(() => {
    const res = ['size-' + props.size];
    if (props.disabled) {
      res.push('disabled');
    }

    if (props.block) {
      res.push('j-block-ipt');
    }
    return res;
  });

  const labelStyles = computed(() => {
    const res: StyleValue = {};

    if ((props.disabled || props.readonly) && iptValue.value) {
      res.transform = 'translate(-5px, -16px)';
    }

    return res;
  });

  const showClearTigger = computed(() => {
    return !!(
      iptValue.value &&
      (!props.readonly ||
        !props.fromSelect ||
        (props.readonly && props.fromSelect)) &&
      !props.disabled &&
      props.clearable
    );
  });

  const inputStyles = computed(() => {
    const res: StyleValue = {};

    if (showClearTigger.value) {
      const clearTiggerRefVal = clearTiggerRef.value;
      if (clearTiggerRefVal) {
        const clearTiggerWidth = clearTiggerRefVal.clientWidth;
        res.marginRight = `${clearTiggerWidth}px`;
      }
    }

    return res;
  });

  return {
    handleInput,
    clearTiggerRef,
    iptValue,
    iptClass,
    labelStyles,
    showClearTigger,
    inputStyles
  };
}
