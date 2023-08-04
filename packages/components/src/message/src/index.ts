import { componentStatus, ComponentStatus } from '../../../constant';
import { MessageProps } from './index.vue';
import MessageComp from './index.vue';
import { MessageContext, MessageHandler, instances } from './instance';
import { App, createApp } from 'vue';

let seed = 1;
const messageTtpes = componentStatus;

const normalizeOptions = (params: MessageProps): MessageProps => {
  return {
    ...params,
    showType: 'pop-up',
    defaultVisable: false
  };
};

function getMessageRootContainer() {
  let container = document.createDocumentFragment();
  return container;
}

function mountMessage(message: App<Element>) {
  const container = getMessageRootContainer();
  const vm = message.mount(container);
  document.body.appendChild(container);
  return vm;
}

const closeMessage = (instance: MessageContext) => {
  const idx = instances.indexOf(instance);

  if (idx === -1) return;
  instances.splice(idx, 1);
  setTimeout(() => {
    instance.app.unmount();
  }, 300);
};

function createMessage(options: MessageProps): MessageContext {
  const id = `j-message-${seed++}`;

  const userOnClose = options.onClose;
  const props: MessageProps = {
    ...options,
    id,
    onClose: () => {
      userOnClose?.();
      closeMessage(instance);
    }
  };

  const Message = createApp(MessageComp, props);
  const vm = mountMessage(Message);

  const instance: MessageContext = {
    id,
    app: Message,
    vm,
    props,
    handler: {
      close() {
        vm.close();
      }
    }
  };

  return instance;
}

const message = (options: MessageProps): MessageHandler => {
  options = normalizeOptions(options);
  const instance: MessageContext = createMessage(options);
  instances.push(instance);
  return instance.handler;
};

messageTtpes.forEach((type) => {
  message[type] = (options: MessageProps) => {
    options = normalizeOptions(options);
    return message({ ...options, type });
  };
});

message.closeAll = (type?: ComponentStatus) => {
  if (!instances.length) return;

  for (const c in instances) {
    if (!type || instances[c].props.type === type) {
      instances[c].handler.close();
    }
  }
};

export default message;
