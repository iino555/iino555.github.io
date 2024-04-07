---
title: "Vue.nextTick"
description: "语法：Vue.nextTick([callback: Function, context: Object])"
tags: ["Vue2"]
---

# Vue.nextTick( [callback, context] )

## 1# 定义

**语法**：`Vue.nextTick([callback: Function, context: Object])`

在 Vue 中，更新 DOM 是异步执行的。当数据发生变化时， 首先会将所有变更缓冲在同一事件循环中，并去除重复操作，以避免不必要的计算和 DOM 操作；随后，Vue 会在下一个事件循环中刷新队列并执行实际操作。

在 Vue 内部会先尝试使用原生的 `Promise.then`、`MutationObserver` 和 `setImmediate` 处理异步队列，如果不支持这些方法，则会回退到使用 `setTimeout(fn, 0)`。这样的机制确保了 Vue 在处理异步更新时的高效性和性能优化。

为了在数据变化后等待 Vue 完成更新 DOM，可以使用 `nextTick` 函数，确保在操作 DOM 之前获取到最新的状态。

## 2# 示例

### (1) Vue.nextTick()

```js
var vm = new Vue({
  el: "#app",
  data: {
    message: "old message",
  },
  template: `<div>{{ message }}</div>`,
});

// 两秒后更改数据
setTimeout(() => {
  vm.message = "new message"; // 更改数据
  console.log(vm.$el.textContent === "new message"); // false
  Vue.nextTick(function () { // 箭头函数 or 匿名函数皆可
    console.log(vm.$el.textContent === "new message"); // true
  });
}, 2000);
```

### (2) this.nextTick()

```js
new Vue({
  el: "#app",
  data: {
    message: "old message",
  },
  template: `<div>{{ message }}</div>`,
  mounted() {
    // 两秒后更改数据
    setTimeout(() => {
      this.message = "new message"; // 更改数据
      console.log(this.$el.textContent === "new message"); // false
      this.$nextTick(() => { // 箭头函数 or 匿名函数皆可
        console.log(this.$el.textContent === "new message"); // true
      });
    }, 2000);
  },
});
```

### (3) this.$nextTick().then()

```js
new Vue({
  el: "#app",
  data: {
    message: "old message",
  },
  template: `<div>{{ message }}</div>`,
  mounted() {
    // 两秒后更改数据
    setTimeout(() => {
      this.message = "new message"; // 更改数据
      console.log(this.$el.textContent === "new message"); // false
      this.$nextTick().then(() => { // 箭头函数 or 匿名函数皆可
        console.log(this.$el.textContent === "new message"); // true
      });
    }, 2000);
  },
});
```

### (4) await this.$nextTick()

```js
new Vue({
  el: "#app",
  data: {
    message: "old message",
  },
  template: `<div>{{ message }}</div>`,
  mounted() {
    // 两秒后更改数据
    setTimeout(async () => {
      this.message = "new message"; // 更改数据
      console.log(this.$el.textContent === "new message"); // false
      await this.$nextTick(); // 等待数据更新
      console.log(this.$el.textContent === "new message"); // true
    }, 2000);
  },
});
```