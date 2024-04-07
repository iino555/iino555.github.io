---
title: "vm.$listeners"
description: "$listeners 是一个对象，它包含了父作用域中（不含.native修饰器的）v-on事件监听器。"
tags: ["Vue2"]
---

# $listeners

## 1# 定义

在Vue.js中，`$listeners` 是一个对象，它包含了父作用域中（不含`.native`修饰器的）`v-on`事件监听器。它可以用在子组件内部，以监听在父组件上定义的事件。

当你在父组件中使用 `v-on` 或者 `@` 来监听一个事件时，如果这个事件**没有**在子组件中通过 `props` 明确声明为自定义事件（即不是子组件通过 `$emit` 触发的事件），那么这个事件监听器就会被包含在子组件的`$listeners`对象中。

## 2# 示例

### (1) 子组件

```js
// 子组件
const ChildComponent = {
  template: `
    <div>
      <button @click="$emit('click')">Click me</button>
      <button @click="$emit('custom-event')">Click me</button>
    <div>
  `,
  mounted() {
    console.log(this.$listeners);
    /* 输出：
    {
      click: ƒ invoker()
      custom-event: ƒ invoker()
    }
    */
  },
};
```

### (2) 父组件

```js
// 父组件
new Vue({
  el: "#app",
  components: {
    "child-component": ChildComponent,
  },
  template: `
  <child-component 
    @click="handleClick" 
    @custom-event="handleCustomEvent" 
  ></child-component>`,
  methods: {
    // 仅 click 事件被调用
    handleClick() {
      console.log("handleClick in parent");
    },
    handleCustomEvent() {
      console.log("handleCustomEvent in parent");
    },
  },
});
```

## 3# 关键点

* **属性来源**：`$listeners` 包含了父组件中（不含 `.native` 修饰器的）所有通过 `v-on` 或 `@` 绑定的事件监听器。
* **属性继承**：通过 `v-on="$listeners"` 可以一次性地将这些事件监听器绑定到子组件的元素上，避免了逐个手动绑定的繁琐。

### (1) 属性来源

```js
// 子组件
const ChildComponent = {
  template: `<p>{{ Object.keys($listeners) }}</p>`,
  mounted() {
    console.log(this.$listeners);
    /* 输出：
    {
      event-a: ƒ invoker()
      event-b: ƒ invoker()
    }
    */
  },
};
// 父组件
new Vue({
  el: "#app",
  components: {
    "child-component": ChildComponent,
  },
  template: `
    <child-component 
      @click.native="handleEvent"
      v-on:event-a="handleEvent"
      @event-b="handleEvent"
    ></child-component>`,
  methods: {
    handleEvent() {
      console.log("handleEvent in parent");
    },
  },
});
```

### (2) 属性继承

```js
// 子组件
const ChildComponent = {
  template: `<grandchild-component v-on="$listeners"></grandchild-component>`,
  mounted() {
    console.log(this.$listeners);
    /* 输出：
    {
    event-a: ƒ invoker()
    event-b: ƒ invoker()
    }
    */
  },
  components: {
    // 孙子组件
    "grandchild-component": {
      template: `
      <div>
        <button @click="$emit('event-a')">trigger event-a</button>
        <button @click="$emit('event-b')">trigger event-b</button>
      </div>`,
    },
  },
};

// 父组件
new Vue({
  el: "#app",
  components: {
    "child-component": ChildComponent,
  },
  template: `
  <child-component 
    @event-a="handleEventA" 
    @event-b="handleEventB">
  </child-component>`,
  methods: {
    handleEventA() {
      console.log("handleEventA in parent");
    },
    handleEventB() {
      console.log("handleEventB in parent");
    },
  },
});
```

> **注意**：在 Vue2 中，`$attrs` 主要用于传递父组件传递给子组件的属性，而 `$listeners` 专门用于传递父组件中注册的事件监听器给子组件。然而，在 Vue3中，`$listeners` 已被废弃，取而代之的是通过`v-on="$attrs"`来同时传递属性和事件监听器。