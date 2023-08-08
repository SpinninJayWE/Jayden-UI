# Message 消息提示

常用于主动操作后的反馈提示。

## 基础用法

默认三秒关闭
<j-button @click="showMessage('info')">click show message</j-button>

::: code-group

```html [Vue Template]
<j-button @click="showMessage('info')">click show message</j-button>
```

```ts [Vue Setup]
import { JMessage } from 'jayden-ui';

function showMessage(type = 'info') {
  JMessage({
    type,
    message: `is from ${type} message`
  });
}
```

:::

## 支持多种状态

<j-button type="info" @click="showMessage('info')" >click show info message</j-button
    >
<j-button type="warn" @click="showMessage('warning')" >click show warning message</j-button
    >
<j-button type="success" @click="showMessage('success')" >click show success message</j-button
    >
<j-button type="err" @click="showMessage('error')" >click show error message</j-button
    >

::: code-group

```html [Vue Template]
<j-button type="info" @click="showMessage('info')"
  >click show info message</j-button
>
<j-button type="warn" @click="showMessage('warning')"
  >click show warning message</j-button
>
<j-button type="success" @click="showMessage('success')"
  >click show success message</j-button
>
<j-button type="err" @click="showMessage('error')"
  >click show error message</j-button
>
```

```ts [Vue Setup]
import { JMessage } from 'jayden-ui';

function showMessage(type = 'info') {
  JMessage({
    type,
    message: `is from ${type} message`
  });
}
```

:::

## 显示图标/关闭按钮

<j-button type="success" @click="showMessage('success', true, true)" >click show success message</j-button
    >

::: code-group

```html [Vue Template]
<j-button type="success" @click="showMessage('success', true, true)"
  >click show success message</j-button
>
```

```ts [Vue Setup]
import { JMessage } from 'jayden-ui';
function showMessage(type = 'info', closed: boolean, showIcon: boolean) {
  JMessage({
    type,
    message: `is from ${type} message`,
    closed,
    showIcon
  });
}
```

:::

## 关闭所有 message

<j-button type="success" @click="showMultipleMessage('success')" >Open multiple message</j-button
    >
<j-button type="info" @click="closeAllMessage">Close All</j-button>

::: code-group

```html [Vue Template]
<j-button type="success" @click="showMultipleMessage('success')"
  >Open multiple message</j-button
>
<j-button type="info" @click="closeAllMessage">Close All</j-button>
```

```ts [Vue Setup]
import { JMessage } from 'jayden-ui';
async function showMultipleMessage(type = 'success') {
  for (let index = 0; index < 10; index++) {
    await new Promise((resolve) => setTimeout(resolve, index === 0 ? 0 : 100));
    JMessage({
      type,
      message: ` is from ${type} message ${index + 1}`,
      showIcon: true
    });
  }
}
function closeAllMessage() {
  JMessage.closeAll();
}
```

:::

<script setup lang="ts">
import { JMessage } from '../../../../packages/jayden-ui';

function showMessage(type = 'info', closed = false, showIcon = false) {
  JMessage({
    type,
    message: `is from ${type} message`,
    closed,
    showIcon
  });
}

async function showMultipleMessage(type = 'success') {
  for (let index = 0; index < 10; index++) {
    await new Promise((resolve) => setTimeout(resolve, index === 0 ? 0 : 100));
    JMessage({
      type,
      message: ` is from ${type} message ${index + 1}`,
      showIcon: true
    });
  }
}
function closeAllMessage() {
  JMessage.closeAll();
}
</script>

<style scoped>
    .j-button {
        margin-right: 20px;
        margin-bottom: 16px;
    }
</style>
