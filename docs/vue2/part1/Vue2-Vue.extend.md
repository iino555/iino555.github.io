---
title: "Vue.extend"
description: "语法：Vue.extend( options: Object )"
tags: ["Vue2"]
---

# Vue.extend( options )

## 1# 定义

**语法**：`Vue.extend( options: Object )`

`Vue.extend` 是一个 Vue.js 中的方法，用于创建一个“子类”，基于传入的选项对象返回一个组件构造函数。这个方法可以用来扩展现有的组件选项，使得可以复用一些通用的组件选项。 

## 2# 示例

在这个示例中，首先创建一个 Vue 组件 `button-counter`，该组件包含一个按钮，每次点击按钮时，计数器会加一并显示在按钮上。接着，创建了一个 Vue 实例，并注册 `button-counter` 组件，并将其挂载到页面上。

### (1) Vue.component(id, options)

```js
// step 1. 定义一个名为 button-counter 的新组件
const buttonCounter = Vue.component("button-counter", {
  data: function () {
    return {
      count: 0,
    };
  },
  template: `<button v-on:click="count++">click times: {{ count }}</button>`,
});

// step 2. 创建 Vue 实例，并注册 'button-counter' 组件
new Vue({
  components: {
    "button-counter": buttonCounter,
  },
  template: `<div><button-counter></button-counter></div>`,
}).$mount("#app");
```