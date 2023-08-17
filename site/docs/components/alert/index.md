# Alert 提示

## 基础用法

<j-alert message="THIS IS ALERT" />
<j-alert type="warning" message="THIS IS ALERT" />
<j-alert type="success" message="THIS IS ALERT" />
<j-alert type="error" message="THIS IS ALERT" />

```html
<j-alert message="THIS IS ALERT" />
<j-alert type="warning" message="THIS IS ALERT" />
<j-alert type="success" message="THIS IS ALERT" />
<j-alert type="error" message="THIS IS ALERT" />
```

## 可关闭

<j-alert closed message="THIS IS ALERT" />
<j-alert closed type="warning" message="THIS IS ALERT" />

```html
<j-alert closed message="THIS IS ALERT" />
<j-alert closed type="warning" message="THIS IS ALERT" />
```

## 显示图标

<j-alert showIcon message="THIS IS ALERT" />
<j-alert showIcon closed type="warning" message="THIS IS ALERT" />
<j-alert showIcon type="success" message="THIS IS ALERT" />
<j-alert showIcon closed type="error" message="THIS IS ALERT" />

```html
<j-alert showIcon message="THIS IS ALERT" />
<j-alert showIcon closed type="warning" message="THIS IS ALERT" />
<j-alert showIcon type="success" message="THIS IS ALERT" />
<j-alert showIcon closed type="error" message="THIS IS ALERT" />
```

## 源代码

[jayden-ui > alert](https://github.com/SpinninJayWE/Jayden-UI/tree/master/packages/components/src/message)

<style scoped>
    .j-message {
        margin-top: 20px;

    }
</style>
