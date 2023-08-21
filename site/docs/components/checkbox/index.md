# Checkbox 复选框

## 基本用法

**Checkbox** 复选框 表示两种状态之间的切换

<j-checkbox v-model="option" label="option"> </j-checkbox>
<j-checkbox v-model="option2" label="option2"> </j-checkbox>

```html
<j-checkbox v-model="option" label="option"> </j-checkbox>
<j-checkbox v-model="option2" label="option2"> </j-checkbox>
<script setup>
  import { ref } from 'vue';
  const option = ref(true);
  const option2 = ref(false);
</script>
```

## 禁用状态

通过**disabled**属性实现禁用
<j-checkbox v-model="option" label="Not Disabled"> </j-checkbox>
<j-checkbox disabled v-model="option2" label="Disabled"> </j-checkbox>

```html
<j-checkbox v-model="option" label="Not Disabled"> </j-checkbox>
<j-checkbox disabled v-model="option2" label="Disabled"> </j-checkbox>
<script setup>
  import { ref } from 'vue';
  const option = ref(true);
  const option2 = ref(false);
</script>
```

## 只读状态

通过**readonly**属性实现只读

<j-checkbox readonly :defaultChecked='true' label="Readonly"> </j-checkbox>

```html
<j-checkbox readonly :defaultChecked="true" label="Readonly"> </j-checkbox>
```

## 自定义 true/false label

通过 trueLabel/falseLabel 自定义选中/未选中的值
<j-checkbox
    trueLabel="Active"
    falseLabel="Inactive"
    v-model="custom"
    :label="custom"
    >
</j-checkbox>

```html
<j-checkbox
  trueLabel="Active"
  falseLabel="Inactive"
  v-model="custom"
  :label="custom"
>
</j-checkbox>

<script setup>
  import { ref } from 'vue';

  const custom = ref('Active');
</script>
```

## 自定义颜色

可通过多个属性设置checkbox的颜色
<j-checkbox borderColor="red" label="borderColor"> </j-checkbox>
<j-checkbox labelColor="#5f27cd" label="labelColor"> </j-checkbox>
<j-checkbox
          :defaultChecked="true"
          labelActiveColor="#10ac84"
          label="labelActiveColor"
        >
</j-checkbox>
<j-checkbox
          :defaultChecked="true"
          fillColor="#00d2d3"
          label="fillColor"
        >
</j-checkbox>
<j-checkbox :defaultChecked="true" color="#000" label="color">
</j-checkbox>
<j-checkbox
          borderColor="red"
          labelColor="#5f27cd"
          labelActiveColor="#10ac84"
          fillColor="#00d2d3"
          color="#000"
          :defaultChecked="true"
          label="Full"
        >
</j-checkbox>

```html
<j-checkbox borderColor="red" label="borderColor"> </j-checkbox>
<j-checkbox labelColor="#5f27cd" label="labelColor"> </j-checkbox>
<j-checkbox
  :defaultChecked="true"
  labelActiveColor="#10ac84"
  label="labelActiveColor"
>
</j-checkbox>
<j-checkbox :defaultChecked="true" fillColor="#00d2d3" label="fillColor">
</j-checkbox>
<j-checkbox :defaultChecked="true" color="#000" label="color"> </j-checkbox>
<j-checkbox
  borderColor="red"
  labelColor="#5f27cd"
  labelActiveColor="#10ac84"
  fillColor="#00d2d3"
  color="#000"
  :defaultChecked="true"
  label="Full"
>
</j-checkbox>
```

## 源代码

[jayden-ui > checkbox](https://github.com/SpinninJayWE/Jayden-UI/tree/master/packages/components/src/checkbox)

<script setup>
import { ref } from 'vue';
const option = ref(true);
const option2 = ref(false);

const custom = ref('Active');
</script>
<style>
 .j-checkbox {
      margin-right: 20px;
    }

</style>
