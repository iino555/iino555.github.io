---
title: "Vue.filter"
description: "语法：Vue.filter( id: String, [definition]: Function )"
tags: ["Vue2"]
---

# Vue.filter( id, [definition] )

## 1# 定义

**语法**：`Vue.filter( id: String, [definition]: Function )`

- **id**：过滤器的名称，作为在模板中引用过滤器的标识符。
- **definition**：过滤器的实现。

> 注意：在 **Vue3** 中 `definition` 可以是一个函数或对象，而在 **Vue2** 中只能是一个**函数**。且该函数的第一个参数为绑定值，其他参数则是过滤器调用时传递的参数。

```js
// case 1. 不传递参数
Vue.filter('my-filter', function (value) {
  return value?.toUpperCase();
});

// case 2. 传递其他参数
Vue.filter('my-filter', function (value, arg1, arg2) {
  return value?.toUpperCase() + arg1 + arg2;
});
```

`Vue.filter` 是 Vue.js 中用于全局注册过滤器的方法。过滤器可以用在两个地方：**双花括号插值和 `v-bind` 表达式** (后者从 2.1.0+ 开始支持)。

```html
<!-- case 1. 直接使用，在双花括号中 -->
<div>{{ message | my-filter }}</div>

<!-- case 2. 直接使用，在 `v-bind` 中 -->
<div v-bind:msg="message | my-filter"></div>

<!-- case 3. 传递参数 -->
<div>{{ message | my-filter }}</div>
```

过滤器在Vue.js中具有以下功能：

1. **链式调用**：可以串联多个过滤器，依次对数据进行处理，形成操作链。如 `{{  m | f1 | f2 }}` 。
2. **接收参数**：过滤器可以接收参数，根据参数的不同来实现不同的数据处理逻辑。如  `{{ m | f1('v1', 'v2')}}` 。
3. **全局和局部定义**：可以通过 `Vue.filter` 或  `filters` 在全局范围或组件内部定义过滤器，方便在不同组件中复用。
4. **与指令结合**：可以与双花括号插值和 `v-bind` 表达式结合使用，从而实现动态展示经过过滤器处理后的数据。

## 2# 示例

以下是一个驼峰命名过滤器的示例：

```html
<template>
  <div id="app">
    <el-input v-model="message" style="display: inline-block; width: 20%" />
    <p>Original Message: {{ message }}</p>
    <p>CamelCase Filter Result (Local): {{ message | camelCase }}</p>
    <p>CamelCase Filter Result (Global): {{ message | camelCaseGlobal }}</p>
  </div>
</template>
```

### (1) Vue.filter(id, definition: Function)

```js
// case 1. 使用 Vue.filter 定义全局过滤器
Vue.filter("camelCaseGlobal", function (value) {
  if (!value) return "";
  return value.replace(/[_\s](\w)/g, function (match, letter) {
    return letter.toUpperCase();
  });
});
```

### (2) filters: Object

```js
export default {
  data() {
    return {
      message: "hello_world",
    };
  },
  // case 2. 使用 filters 定义局部过滤器
  filters: {
    camelCase: function (value) {
      if (!value) return "";
      return value.replace(/[_\s](\w)/g, function (match, letter) {
        return letter.toUpperCase();
      });
    },
  },
};
```