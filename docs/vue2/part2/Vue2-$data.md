---
title: "vm.$data"
description: "$data 是一个属性，它表示 Vue 实例中数据对象的根。"
tags: ["Vue2"]
---

# $data

## 1# 定义


在 Vue2 中，`$data` 是 Vue 实例对象的一个属性，用于存储该实例的数据。它包含了 Vue 实例中所有响应式数据的引用，包括在实例创建时传入的 `data` 对象中定义的数据，以及通过 Vue 实例方法或其他方式动态添加的响应式数据。

## 2# 示例

```js
// 方式一: Object - 对象形式的数据选项
var vm = new Vue({
  data: {
    message: 'Hello Vue!'
  }
});
console.log(vm.$data.message);
// 输出 'Hello Vue!'

// 方式二: Function - 函数形式的数据选项
var vm2 = new Vue({
  data() {
    return {
       message: 'Hello Vue!'
    }
  }
});
console.log(vm2.$data.message);
// 输出 'Hello Vue!'
```

> **异同点**：两种方式都用于定义 Vue 实例的初始数据。**方式一直接将数据选项作为对象传递给data属性**，合并到 Vue 实例的 `$data` 属性中，但不能直接访问实例的其他属性或方法。**方式二将数据选项定义为返回对象的函数**，在实例创建时被调用，可以通过函数内部的 `this` 访问实例的其他属性或方法，提供了更大的灵活性。


## 3# 关键点

### (1) 属性冲突

属性名以 `_` 或 `$` 开头的属性不会被 Vue 实例代理，以避免与 Vue 内部属性和 API 方法冲突，但仍可通过 `vm.$data._property` 的方式访问这些属性。 

```js
// 创建一个 Vue 实例
var vm = new Vue({
  el: "#app",
  data: {
    _aValue: "a-value",
    $bValue: "b-value",
  },
  mounted() {
    // 属性名以 `_` 或 `$` 开头的属性不会被 Vue 实例代理
    console.log(this._aValue); // 输出：undefined
    console.log(this.$bValue); // 输出：undefined
      
    // 可以通过 this.$data 来访问这些属性
    console.log(this.$data); 
    // 输出: a-value
  },
});

// 尽管属性不会被代理，仍然可以通过 vm.$data 来访问这些属性
console.log(vm.$data._aValue); // 输出: a-value
console.log(vm.$data.$bValue); // 输出: b-value
```

### (2) 组件数据

当定义一个组件时，需要将 data 声明为返回初始数据对象的函数。这样做是为了确保每个实例都有独立的数据对象，避免潜在的数据共享问题。

**注意**：在 `Vue.extend()` 中 `data` 选项必须是函数。

```js
// [Vue warn]: The "data" option should be a function 
// 			   that returns a per
Vue.extend({
  data: {
    counter: 0,
  },
});

// 同上，因为 Vue.component 会自动调用 Vue.extend()
Vue.component("my-component", {
  data: {
    counter: 0,
  },
});
```

### (3) 箭头函数

在 `data` 属性上使用箭头函数时，函数内部的 `this` 不会指向这个组件的实例，但仍可以接收第一个参数作为当前组件的实例。 

```js
new Vue({
  data: (vm) => ({ aThis: vm, bThis: this }),
  created() {
    console.log(this.aThis == this); // true
    console.log(this.bThis == window); // true

    console.log(this.$data);
    // 输出： { aThis: Vue, bThis: Window }
  },
});
```
> **注意**：`this.$data` 和 `vm.$data` 都指向同一个 Vue 实例的数据对象。不同点在于前者适用于**在实例内部**方法或生命周期钩子函数中使用，后者适用于**在实例外部**对数据进行访问和操作。