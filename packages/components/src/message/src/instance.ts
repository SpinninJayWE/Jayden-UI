import { App, ComponentInternalInstance, VNode, shallowReactive } from 'vue';
import { MessageProps } from './index.vue';

export type MessageHandler = {
  close: () => void;
};

export type MessageContext = {
  id: string;
  app: App<Element>;
  handler: MessageHandler;
  vm: ComponentInternalInstance;
  props: MessageProps;
};

export const instances: MessageContext[] = shallowReactive([]);
