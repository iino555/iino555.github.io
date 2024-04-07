---
title: "Vue.directive"
description: "语法：Vue.directive(id: String, [definition: Function | Object ])"
tags: ["Vue2"]
---

# Vue.directive( id, [definition] )

## 1# 定义

**语法**：`Vue.directive(id: String, [definition: Function | Object ])` 

`Vue.directive` 是 Vue.js 提供的全局指令注册方法，用于自定义指令。我们可以通过它来扩展 Vue.js 的模板语法，使得我们能够创建自己的指令，以实现一些特殊的效果。 

- `id`：指令的标识符，是一个字符串，用于在模板中调用指令。
- `definition`：指令的定义，可以是一个函数或一个包含钩子函数的对象。钩子函数有：
  - `bind`：只调用一次，指令第一次绑定到元素时触发。
  - `inserted`：被绑定元素插入父节点时触发。
  - `update`：组件更新时触发，但可能在其子组件更新之前。
  - `componentUpdated`：组件更新后触发。
  - `unbind`：只调用一次，指令与元素解绑时触发。

> **注意**：`directives` 是用于注册自定义指令的 Vue 实例选项，而 `Vue.directive` 是全局方法，用于注册全局自定义指令或在组件中注册局部自定义指令。 

## 2# 关键点

### (1) 使用

```js
// case 1. 传递 id + definition 参数
Vue.directive('my-directive', {
  bind: function () {},
  inserted: function () {},
  update: function () {},
  componentUpdated: function () {},
  unbind: function () {}
});

// case 2. 传递 id + function 参数，该 function 为 update 钩子函数
Vue.directive('my-directive', function (el, binding, vnode, oldVnode) {
  // 这个函数用作 update()
});

// case 3. 传递 id 参数，返回已注册的指令
var myDirective = Vue.directive('my-directive')
```

### (2) 传参

```html
<!-- case 1. 不带值与参数 -->
<div v-my-directive="someValue"></div>
<!-- case 2. 仅带值 binding.value -->
<div v-my-directive="someValue"></div>
<!-- case 3. 仅带参数 binding.arg -->
<div v-my-directive:[arg1, args2]></div>
<!-- case 4. 带值与参数 binding.arg + binding.value -->
<div v-my-directive:[arg1, args2]="someValue"></div>
```

### (3) 钩子函数

```js
Vue.directive('my-directive', {
  bind: function (el, binding, vnode) {
    // 调用时机：在元素绑定到指令时调用
    // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
  },
  inserted: function (el, binding, vnode) {
    // 调用时机：元素插入父节点时调用
    // 被绑定元素插入父节点时调用(仅保证父节点存在，但不一定已被插入文档中)。
  },
  update: function (el, binding, vnode, oldVnode) {
    // 调用时机：在元素所在组件更新时调用，也可以在初始绑定值发生变化时调用，
    //           可以通过比较新旧值来执行相应的操作
    // 所在组件的VNode更新时调用，但是可能发生在其子VNode更新之前。
  },
  componentUpdated: function (el, binding, vnode, oldVnode) {
    // 调用时机：在元素所在组件及其子组件全部更新后调用
    // 指令所在组件的VNode及其子VNode全部更新后调用。
  },
  unbind: function (el, binding, vnode) {
    // 调用时机：在指令与元素解绑时调用
    // 只调用一次，指令与元素解绑时调用。
  }
});
```