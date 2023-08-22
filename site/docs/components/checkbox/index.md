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

通过 **disabled** 属性实现禁用
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

通过 **readonly** 属性实现只读

<j-checkbox readonly :defaultChecked='true' label="Readonly"> </j-checkbox>

```html
<j-checkbox readonly :defaultChecked="true" label="Readonly"> </j-checkbox>
```

## 自定义 true/false label

通过 **trueLabel/falseLabel** 自定义选中/未选中的值
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

## 多选框组 checkbox-group

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

<j-checkbox-group v-model="checkList">
<j-checkbox label="OPT1"> </j-checkbox>
<j-checkbox label="OPT2"> </j-checkbox>
<j-checkbox label="OPT3"> </j-checkbox>
<j-checkbox label="OPT4"> </j-checkbox>
<j-checkbox label="selected and disabled" disabled> </j-checkbox>
<j-checkbox label="disabled" disabled> </j-checkbox>
</j-checkbox-group>

```html
<j-checkbox-group v-model="checkList">
  <j-checkbox label="OPT1"> </j-checkbox>
  <j-checkbox label="OPT2"> </j-checkbox>
  <j-checkbox label="OPT3"> </j-checkbox>
  <j-checkbox label="OPT4"> </j-checkbox>
  <j-checkbox label="selected and disabled" disabled> </j-checkbox>
  <j-checkbox label="disabled" disabled> </j-checkbox>
</j-checkbox-group>

<script setup>
  import { ref } from 'vue';

  const checkList = ref(['OPT1', 'selected and disabled']);
</script>
```

## 可选项目数量的限制

通过 **min** 和 **max** 属性限制数量范围
<j-checkbox-group :min="1" :max="2" v-model="checkList2">
<j-checkbox label="OPT1"> </j-checkbox>
<j-checkbox label="OPT2"> </j-checkbox>
<j-checkbox label="OPT3"> </j-checkbox>
<j-checkbox label="OPT4"> </j-checkbox>
<j-checkbox label="OPT5"> </j-checkbox>
<j-checkbox label="OPT6"> </j-checkbox>
</j-checkbox-group>

```html
<j-checkbox-group :min="1" :max="2" v-model="checkList">
  <j-checkbox label="OPT1"> </j-checkbox>
  <j-checkbox label="OPT2"> </j-checkbox>
  <j-checkbox label="OPT3"> </j-checkbox>
  <j-checkbox label="OPT4"> </j-checkbox>
  <j-checkbox label="OPT5"> </j-checkbox>
  <j-checkbox label="OPT6"> </j-checkbox>
</j-checkbox-group>

<script setup>
  import { ref } from 'vue';

  const checkList = ref(['OPT1', 'selected and disabled']);
</script>
```

## 源代码

[jayden-ui > checkbox](https://github.com/SpinninJayWE/Jayden-UI/tree/master/packages/components/src/checkbox)

<script setup>
import { ref } from 'vue';
const option = ref(true);
const option2 = ref(false);

const custom = ref('Active');

const checkList = ref(['OPT1', 'selected and disabled']);

const checkList2 = ref(['OPT2']);
</script>
<style>
 .j-checkbox {
      margin-right: 20px;
    }

</style>
