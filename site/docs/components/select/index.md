# Select 下拉选择器

## 基础用法

<j-select :options="options" v-model:select="select"> </j-select>

::: code-group

```html [Vue Template]
<j-select :options="options" v-model:select="select"> </j-select>
```

```ts [Vue Setup]
import { ref } from 'vue';
const select = ref('');
const options = ref([
  {
    label: '选项1',
    value: 39
  },
  {
    label: '选项2',
    value: 0
  },
  {
    label: '选项3',
    value: 29
  },
  {
    label: '选项4',
    value: 74
  },
  {
    label: '选项5',
    value: 37
  },
  {
    label: '选项6',
    value: 74
  },
  {
    label: '选项7',
    value: 46
  },
  {
    label: '选项8',
    value: 40
  },
  {
    label: '选项9',
    value: 96
  },
  {
    label: '选项10',
    value: 82
  }
]);
```

:::

## 多选

**multiple=true** 开启多选模式
<j-select
    multiple
    style="width: 500px"
    :options="options"
    v-model:select="select2">
</j-select>

::: code-group

```html [Vue Template]
<j-select
  multiple
  style="width: 500px"
  :options="options"
  v-model:select="select"
>
</j-select>
```

```ts [Vue Setup]
import { ref } from 'vue';
const select = ref([]);
const options = ref([
  {
    label: '选项1',
    value: 39
  },
  {
    label: '选项2',
    value: 1
  },
  {
    label: '选项3',
    value: 29
  },
  {
    label: '选项4',
    value: 74
  },
  {
    label: '选项5',
    value: 37
  },
  {
    label: '选项6',
    value: 74
  },
  {
    label: '选项7',
    value: 46
  },
  {
    label: '选项8',
    value: 40
  },
  {
    label: '选项9',
    value: 96
  },
  {
    label: '选项10',
    value: 82
  }
]);
```

:::

## 禁用 Option Item

将Options数组项的 **_disabled_** 属性设置为 **true** 禁用Item
<j-select
    multiple 
    style="width: 500px"
    :options="disabledOptions"
    v-model:select="select3">
</j-select>

::: code-group

```html [Vue Template]
<j-select
  multiple
  style="width: 500px"
  :options="options"
  v-model:select="select"
>
</j-select>
```

```ts [Vue Setup]
import { ref } from 'vue';
const select = ref([]);
const options = ref([
  {
    label: '选项1',
    value: 88,
    disabled: true // [!code focus]
  },
  {
    label: '选项2',
    value: 50,
    disabled: false
  },
  {
    label: '选项3',
    value: 14,
    disabled: true
  },
  {
    label: '选项4',
    value: 86,
    disabled: false
  },
  {
    label: '选项5',
    value: 33,
    disabled: true
  },
  {
    label: '选项6',
    value: 20,
    disabled: false
  },
  {
    label: '选项7',
    value: 64,
    disabled: true
  },
  {
    label: '选项8',
    value: 1,
    disabled: false
  },
  {
    label: '选项9',
    value: 63,
    disabled: true
  },
  {
    label: '选项10',
    value: 61,
    disabled: false
  }
]);
```

:::

## 源代码

[jayden-ui > select](https://github.com/SpinninJayWE/Jayden-UI/tree/master/packages/components/src/select)

<script setup lang="ts">
import { ref } from 'vue';

function gOptions(disabled = false) {
  const options = [];

  for (let i = 0; i < 10; i++) {
    const option = {
      label: `选项${i + 1}`,
      value: Math.floor(Math.random() * 100)
    };
    if (disabled) {
        option.disabled = i % 2 === 0
    }
    options.push(option);
  }

  return options;
}
const select = ref('');
const select2 = ref([]);
const select3 = ref([])
const options = ref([
    {
        "label": "选项1",
        "value": 39
    },
    {
        "label": "选项2",
        "value": 1
    },
    {
        "label": "选项3",
        "value": 29
    },
    {
        "label": "选项4",
        "value": 74
    },
    {
        "label": "选项5",
        "value": 37
    },
    {
        "label": "选项6",
        "value": 25
    },
    {
        "label": "选项7",
        "value": 46
    },
    {
        "label": "选项8",
        "value": 40
    },
    {
        "label": "选项9",
        "value": 96
    },
    {
        "label": "选项10",
        "value": 82
    }
]);
const disabledOptions = ref([
    {
        "label": "选项1",
        "value": 88,
        "disabled": true
    },
    {
        "label": "选项2",
        "value": 50,
        "disabled": false
    },
    {
        "label": "选项3",
        "value": 14,
        "disabled": true
    },
    {
        "label": "选项4",
        "value": 86,
        "disabled": false
    },
    {
        "label": "选项5",
        "value": 33,
        "disabled": true
    },
    {
        "label": "选项6",
        "value": 20,
        "disabled": false
    },
    {
        "label": "选项7",
        "value": 64,
        "disabled": true
    },
    {
        "label": "选项8",
        "value": 1,
        "disabled": false
    },
    {
        "label": "选项9",
        "value": 63,
        "disabled": true
    },
    {
        "label": "选项10",
        "value": 61,
        "disabled": false
    }
])

</script>
