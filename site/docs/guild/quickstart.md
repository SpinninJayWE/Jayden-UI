# 第一步：使用教程

**<p>介绍如何在项目中使用Jayden-ui</p>**

## 用法

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```ts
// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import JayUi from 'jayden-ui';

const app = createApp(App);

app.use(JayUi);
app.mount('#app');
```

**_Volar 支持_** <br>
如果您使用 Volar，请在 tsconfig.json 中通过 compilerOptions.type 指定全局组件类型。

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["jayden-ui/es/src/components.d.ts"]
  }
}
```

### 手动引入

**Jayden-ui 提供了基于 ES Module 的开箱即用的 Tree Shaking**<br>

::: tip
因为样式和组件是捆绑在一起 所以在引入组件时不需要再单独引入css
:::

```html
<template>
  <button>我是 ElButton</button>
</template>

<script>
  import { Button } from 'jayden-ui';
  export default {
    components: { Button }
  };
</script>
```
