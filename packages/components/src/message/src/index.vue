<template>
  <Transition :on-before-leave="onClose" name="j-message">
    <div
      v-wr
      v-show="visable"
      class="j-message"
      :class="messageClass"
      :style="messageStyles"
    >
      <div class="j-message-inner">
        <div v-if="typeof message === 'string'" class="j-message-content">
          <slot v-if="$slots.default"></slot>
          <span v-else-if="typeof message === 'string'" v-html="message"></span>
          <div v-else-if="isVNode(message)">
            <component :is="message" v-bind="(message as VNode).props" />
          </div>
          {{ id }}
        </div>
      </div>
      <div v-if="closed" class="j-message-close">
        <Button
          @click="visable = false"
          :icon="'icon-close'"
          :size="'so-small'"
          icon-btn
        />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import '../style/index.scss';
import { ComponentStatus } from '../../../constant/index';
import { StyleValue, VNode, computed, isVNode, ref } from 'vue';
import Button from '../../button';
import { msdWr } from 'jayden-ui-directives';
import { instances } from './instance';
type MessageMsg = string | (() => string | VNode) | VNode;
type MessageShowType = 'alert' | 'pop-up';

const defaultMt = 20;

export interface MessageProps {
  showType?: MessageShowType;
  type?: ComponentStatus;
  message?: MessageMsg;
  closed?: boolean;
  onClose?: (() => void) | null;
  id?: string | null;
  defaultVisable?: boolean;
}

const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  message: '',
  showType: 'alert',
  closed: false,
  onClose: null,
  id: null,
  defaultVisable: true
});

const vWr = msdWr;

const visable = ref(props.defaultVisable);

const messageClass = computed(() => {
  const res: string[] = [];
  if (props.type) {
    res.push(props.type);
  }

  return res;
});

const messageStyles = computed(() => {
  const res: StyleValue = {};
  if (props.showType === 'alert') {
    res.display = 'flex';
  } else if (props.showType === 'pop-up') {
    let idx = 0;
    if (props.id) {
      idx = instances.findIndex((item) => item.id === props.id) || 0;
    }

    res.display = 'inline-flex';
    res.position = 'absolute';
    res.left = '50%';
    res.transform = 'translateX(-50%)';
    res.top = idx * 54 + defaultMt + 'px';
    res.marginTop = idx * defaultMt + 'px';
  }
  return res;
});

function open() {
  visable.value = true;
}

function close() {
  visable.value = false;
}

defineExpose({
  open,
  close
});
</script>
