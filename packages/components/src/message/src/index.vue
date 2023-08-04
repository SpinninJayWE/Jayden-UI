<template>
  <Transition :on-before-leave="onClose" name="j-message">
    <div
      v-wr
      v-if="visable"
      ref="jMessageRef"
      class="j-message"
      :class="messageClass"
      :style="messageStyles"
    >
      <div v-if="showIcon" class="j-message-icon">
        <Icon :icon="statusIcon"></Icon>
      </div>
      <div class="j-message-inner">
        <div v-if="typeof message === 'string'" class="j-message-content">
          <slot v-if="$slots.default"></slot>
          <span v-else-if="typeof message === 'string'" v-html="message"></span>
          <div v-else-if="isVNode(message)">
            <component :is="message" v-bind="(message as VNode).props" />
          </div>
        </div>
      </div>
      <div v-if="closed" class="j-message-close">
        <Button
          @click="close"
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
import {
  StyleValue,
  VNode,
  computed,
  isVNode,
  onMounted,
  onUnmounted,
  ref
} from 'vue';
import Button from '../../button';
import { msdWr } from 'jayden-ui-directives';
import { instances } from './instance';
import { IconNames } from '../../icon/types/index';
import Icon from '../../icon';
import { useMouseInElement } from '@vueuse/core';
import { watch } from 'vue';
type MessageMsg = string | (() => string | VNode) | VNode;
type MessageShowType = 'alert' | 'pop-up';

defineOptions({
  name: 'j-alert'
});

const defaultMt = 20;

export interface MessageProps {
  showType?: MessageShowType;
  type?: ComponentStatus;
  message?: MessageMsg;
  closed?: boolean;
  onClose?: (() => void) | null;
  id?: string | null;
  defaultVisable?: boolean;
  duration?: number;
  showIcon?: boolean;
}

const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  message: '',
  showType: 'alert',
  closed: false,
  onClose: null,
  id: null,
  defaultVisable: true,
  duration: 3000,
  showIcon: false
});

const statusIcon = computed(() => {
  const icons: { [key in ComponentStatus]: IconNames } = {
    info: 'icon-jinggao',
    success: 'icon-chenggong1',
    warning: 'icon-xinxi-yuankuang',
    error: 'icon-cuowuguanbiquxiao-yuankuang'
  };

  return icons[props.type];
});

const vWr = msdWr;

const visable = ref(props.defaultVisable);
const jMessageRef = ref<HTMLElement>();
let timer: NodeJS.Timeout | null = null;

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
    res.zIndex = 0;
  } else if (props.showType === 'pop-up') {
    let idx = 0;
    if (props.id) {
      idx = instances.findIndex((item) => item.id === props.id) || 0;
    }
    res.display = 'inline-flex';
    res.position = 'fixed';
    res.left = '50%';
    res.top = idx * 54 + defaultMt + 'px';
    res.marginTop = idx * defaultMt + 'px';
    const JMessageRefVal = jMessageRef.value;
    if (JMessageRefVal) {
      res.marginLeft = -JMessageRefVal.clientWidth / 2 + 'px';
    }
  }
  return res;
});

function open() {
  visable.value = true;
}

function close() {
  visable.value = false;
}

const countdownClose = () => {
  if (props.duration === 0) return;
  stopCountdownClose();
  timer = setTimeout(() => {
    close();
  }, props.duration);
};

const stopCountdownClose = () => {
  if (timer) {
    clearTimeout(timer);
  }
};

onMounted(() => {
  if (props.showType === 'pop-up') {
    open();
    countdownClose();
    const { isOutside } = useMouseInElement(jMessageRef);
    watch(isOutside, (val) => {
      if (!val && timer) {
        stopCountdownClose();
      } else {
        countdownClose();
      }
    });
  }
});

onUnmounted(() => {
  if (timer) {
    stopCountdownClose();
  }
});

defineExpose({
  open,
  close
});
</script>
