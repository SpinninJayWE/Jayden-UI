<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-show="visable" @click="handleMaskClick" class="j-modal-overlay">
        <div
          ref="modalWrapperRef"
          @click.stop
          class="j-modal-wrapper"
          :style="{
            ...wrapperStyles
          }"
        >
          <div v-wr class="j-modal header">
            <div class="title">
              <slot name="title">
                {{ title }}
              </slot>
            </div>
            <div @click="visable = false" class="close">x</div>
          </div>
          <div class="content">
            <slot></slot>
          </div>
          <div v-wr class="footer">
            <slot name="footer">
              <div class="default-footer">
                <Button @click="handleCancel">取消</Button>
                <Button @click="handleOk" :type="'primary'">确定</Button>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import Button from '../button';
import { ClickWr } from 'jayden-ui-directives';
import './style/index.scss';
import useModal from './use-modal';
defineOptions({
  name: 'j-modal'
});

export type ModalProps = {
  visable: boolean;
  width?: number | string;
  height?: number | string;
  clkOutSideClose?: boolean;
  title?: string;
  position?: 'center' | 'top';
};

const vWr = ClickWr;

const emit = defineEmits(['update:visable', 'close', 'confirm']);

const props = withDefaults(defineProps<ModalProps>(), {
  value: false,
  width: 420,
  height: 'auto',
  clkOutSideClose: false,
  title: '',
  position: 'center'
});

const {
  modalWrapperRef,
  visable,
  wrapperStyles,
  handleMaskClick,
  handleCancel,
  handleOk
} = useModal(props, emit);
</script>

<style lang="scss" scoped></style>
