---
title: "vm.$el-and-el"
description: "$el 是一个只读属性，它表示 Vue 实例的根 DOM 元素。"
tags: ["Vue2"]
---

# $el-and-el

## 1# el

在 Vue.js 中，`el` 是一个选项，用于指定 Vue 实例挂载的 DOM 元素。

```js
var vm = new Vue({
  el: '#app',
});
```

## 2# $el

`$el` 是一个属性，用于引用 Vue 实例挂载的根 DOM 元素。

```js
let vm = new Vue({
  el: "#app",
});
console.log(vm.$el);
// 输出：<div id="app"></div>

let vm2 = new Vue({}).$mount("#app");
console.log(vm2.$el);
// 输出：<div id="app"></div>
```

> 注意：在 Vue.js 中，`el` 选项用于指定 Vue 实例挂载的 DOM 元素，而 `$mount` 方法则是手动将 Vue 实例挂载到 DOM 上的方法。如果在创建 Vue 实例时同时指定了 `el` 选项和调用了 `$mount` 方法，则 `$mount` 方法会覆盖 `el` 选项指定的挂载元素。