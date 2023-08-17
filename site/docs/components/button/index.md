# 按钮 Button

## 默认尺寸

<j-button size="so-small" type="primary">Extra small Button</j-button>
<j-button>默认按钮</j-button>

```html
<j-button size="so-small" type="primary">Extra small Button</j-button>
<j-button>默认按钮</j-button>
```

## 小尺寸

<j-button :size="'small'" type="primary">主题按钮</j-button>
<j-button :size="'small'">默认按钮</j-button>

```html
<j-button :size="'small'" type="primary">主题按钮</j-button>
<j-button :size="'small'">默认按钮</j-button>
```

## 大尺寸

<br />
<j-button :size="'large'" type="primary">主题按钮</j-button>
<j-button :size="'large'">默认按钮</j-button>

```html
<j-button :size="'large'" type="primary">主题按钮</j-button>
<j-button :size="'large'">默认按钮</j-button>
```

## 按钮状态

<br />
<j-button type="primary">主要按钮</j-button>
<j-button>默认按钮</j-button>
<j-button type="warn">警告按钮</j-button>
<j-button type="info">信息按钮</j-button>
<j-button type="err">错误按钮</j-button>
<j-button type="success">成功按钮</j-button>
<j-button disabled type="success">禁用按钮</j-button>

```html
<j-button type="primary">主要按钮</j-button>
<j-button>默认按钮</j-button>
<j-button type="warn">警告按钮</j-button>
<j-button type="info">信息按钮</j-button>
<j-button type="err">错误按钮</j-button>
<j-button type="success">成功按钮</j-button>
<j-button disabled type="success">禁用按钮</j-button>
```

## 按钮图标 IconButton

属性 **_iconBtn_** 设置为 **_true_** 将开启图标按钮模式
<j-button :icon="'icon-delete'" :size="'so-small'" icon-btn > </j-button>
<j-button :icon="'icon-add'" :size="'small'" icon-btn type="primary">
</j-button>
<j-button :icon="'icon-ascending'" icon-btn type="warn"> </j-button>
<j-button :icon="'icon-atm'" :size="'large'" icon-btn :type="'success'">
</j-button>

```html
<j-button :icon="'icon-delete'" :size="'so-small'" icon-btn> </j-button>
<j-button :icon="'icon-add'" :size="'small'" icon-btn type="primary">
</j-button>
<j-button :icon="'icon-ascending'" icon-btn type="warn"> </j-button>
<j-button :icon="'icon-atm'" :size="'large'" icon-btn :type="'success'">
</j-button>
```

## 通过icon插槽

通过 **_slot icon_** 可以自定义插入图标

<j-button :type="'success'">
ATM-FILL
<template #icon> <j-icon :icon="'icon-atm-fill'" /> </template>
</j-button>
<j-button :size="'large'" :type="'warn'">
ATM-FILL
<template #icon> <j-icon :icon="'icon-close'" /> </template>
</j-button>

```html
<j-button :type="'success'">
  ATM-FILL
  <template #icon> <j-icon :icon="'icon-atm-fill'" /> </template>
</j-button>
<j-button :size="'large'" :type="'warn'">
  ATM-FILL
  <template #icon> <j-icon :icon="'icon-close'" /> </template>
</j-button>
```

## 源代码

[jayden-ui > button](https://github.com/SpinninJayWE/Jayden-UI/tree/master/packages/components/src/button)

<style lang='scss' scoped>
    .j-button {
        margin-bottom: 12px;
        margin-right: 12px;
    }
</style>
