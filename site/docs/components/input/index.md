# Input 输入框

## 大小尺寸 Size

<j-input size="small" v-model="ipt" label="Small"></j-input>
<j-input size="medium" v-model="ipt" label="Medium"></j-input>
<j-input type="password" size="large" v-model="ipt" label="Large"></j-input>

```html
<j-input size="small" v-model="ipt" label="Small"></j-input>
<j-input size="medium" v-model="ipt" label="Medium"></j-input>
<j-input type="password" size="large" v-model="ipt" label="Large"></j-input>
```

## 状态 Status

<j-input v-model="ipt" label="Writable"></j-input>
<j-input v-model="ipt" readonly label="Readonly"></j-input>
<j-input v-model="ipt" disabled label="Disabled"></j-input>

```html
<j-input v-model="ipt" label="Writable"></j-input>
<j-input v-model="ipt" readonly label="Readonly"></j-input>
<j-input v-model="ipt" disabled label="Disabled"></j-input>
```

## 块级铺满 Block

<j-input block v-model="ipt" label="Medium"></j-input>

```html
<j-input block v-model="ipt" label="Medium"></j-input>
```

## 清除按钮 Clearable

<j-input v-model="ipt" clearable label="Clearable"></j-input>

```html
<j-input v-model="ipt" clearable label="Clearable"></j-input>
```

## 自定义校验器 CustomValidator

<j-input
      :rules="[
        (val) => !!val || '不能为空',
        (val) => !((val as string).length < 6) || '不能小于6位数'
      ]"
      v-model="ipt"
      clearable
      label="CustomValidator"
    ></j-input>

```html
<j-input
  :rules="[
    (val) => !!val || '不能为空',
    (val) => !((val as string).length < 6) || '不能小于6位数'
  ]"
  v-model="ipt"
  clearable
  label="CustomValidator"
></j-input>
```

## 源代码

[jayden-ui > input](https://github.com/SpinninJayWE/Jayden-UI/tree/master/packages/components/src/input)

<script setup lang="ts">
import { ref } from 'vue';
const ipt = ref('');
</script>
<style scoped>

  .j-input {
    margin-bottom: 16px;
    margin-right: 20px;
  }
</style>
