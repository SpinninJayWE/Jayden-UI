import { StyleValue, computed, ref } from 'vue';
import { ModalProps } from '../types';

export default function useModal(props: ModalProps, emit: any) {
  const modalWrapperRef = ref<HTMLElement>();
  const visable = computed({
    get() {
      return props.visable;
    },
    set(value) {
      emit('update:visable', value);
    }
  });

  const formatWrpMgStyles = computed(() => {
    const modalWrapperRefVal = modalWrapperRef.value;
    const res: StyleValue = {
      marginLeft: 0,
      marginTop: 0
    };

    if (modalWrapperRefVal) {
      const { clientHeight } = modalWrapperRefVal;
      res.marginLeft = -(props.width! / 2) + 'px';
      res.marginTop = -(clientHeight / 2) + 'px';
    }

    return res;
  });

  function formatWhMgStyles(value: number | string, type: 'width' | 'height') {
    const res: StyleValue = {};
    if (value) {
      if (typeof value === 'string') {
        res[type] = value;
      } else {
        res[type] = value + 'px';
      }
    }

    return res;
  }

  const wrapperStyles = computed(() => {
    const { width, height } = props;

    const res: StyleValue = {
      ...formatWhMgStyles(width!, 'width'),
      ...formatWhMgStyles(height!, 'height'),
      ...formatWrpMgStyles.value
    };

    if (props.position === 'top') {
      res.top = '20%';
    }

    return res;
  });

  function handleMaskClick() {
    if (props.clkOutSideClose) {
      close();
    }
  }

  function handleCancel() {
    emit('close');
    close();
  }
  function handleOk() {
    emit('confirm');
    close();
  }

  function close() {
    visable.value = false;
  }

  return {
    modalWrapperRef,
    visable,
    wrapperStyles,
    handleMaskClick,
    handleCancel,
    handleOk
  };
}
