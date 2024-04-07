---
title: "vm.$root"
description: "$root 是一个只读属性，它表示 Vue 实例树的根实例。"
tags: ["Vue2"]
---

# $root

## 1# 定义

在 Vue.js 中，`$root` 是 Vue 实例树的根实例。它提供了一种访问根实例的方式，即使在组件嵌套的情况下也能够方便地访问根实例的属性和方法。

## 2# 关键点

### (1) 访问属性

```js
// 根实例
new Vue({
  el: "#app",
  data: {
    msg: "Hello from Root Vue",
  },
  components: {
    // 子组件
    "child-component": {
      template: `
      <div>
        <p>$root.msg in Child Component: {{ $root.msg }}</p>
        <grandchild-component></grandchild-component>
      </div>
      `,
      components: {
        // 孙子组件
        "grandchild-component": {
          template: `<p>$root.msg in Grandchild Component: {{ $root.msg }}</p>`,
        },
      },
    },
  },
  template: `<child-component></child-component>`,
});
```

### (2) 访问方法

```js
// 根实例
new Vue({
  el: "#app",
  data: {
    msg: "Hello from Root Vue",
  },
  methods: {
    log() {
      console.log("this.msg=", this.msg);
    },
  },
  components: {
    // 子组件
    "child-component": {
      template: `<grandchild-component></grandchild-component>`,
      components: {
        // 孙子组件
        "grandchild-component": {
          template: `<button @click="$root.log()">调用 $root.log() </button>`,
        },
      },
    },
  },
  template: `<child-component></child-component>`,
});
```

### (3) 传递数据

```js
// 根实例
new Vue({
  el: "#app",
  created() {
    // 绑定事件: this.$root.$on('eventName', data);
    this.$root.$on("rootEvent", (data) => {
      console.log("root component: data=", data);
    });
  },
  components: {
    // 子组件
    "child-component": {
      template: `<grandchild-component></grandchild-component>`,
      components: {
        // 孙子组件
        "grandchild-component": {
          // 触发事件并传参：this.$root.$emit('eventName', data)
          template: `<button @click="$root.$emit('rootEvent', 'hello from grandchild')">触发事件：$root.$emit() </button>`,
        },
      },
    },
  },
  template: `<child-component></child-component>`,
});
```