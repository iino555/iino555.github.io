---
title: "vm.$refs"
description: "$refs 是一个只读属性，它包含已注册过 ref 特性的所有 DOM 元素和子组件实例。"
tags: ["Vue2"]
---

# $refs

## 1# 定义

在 Vue.js 中，`$refs` 是一个对象，它持有已注册过 `ref` 特性 (**attribute**) 的所有 DOM 元素和子组件实例。`$refs` 只在组件渲染完成后填充，并且它是响应式的，但不应作为一种可靠的解决方案来直接访问 DOM 或子组件。它更常用于直接访问和操作子组件或 DOM 元素，特别是在某些特定场景或紧急情况下。

## 2# 示例

```js
new Vue({
  el: "#app",
  template: `
  <div>
    <!-- 原生输入框，使用 ref -->  
    <input type="text" ref="nativeInput" placeholder="root component input here">
    <!-- 组件输入框，使用 ref -->  
    <my-component ref="componentInput"></my-component>  
  </div>  
  `,
  mounted() {
    console.log(this.$refs);
    /* 输出
    {
      componentInput: VueComponent 
      nativeInput: input
    }
    */
  },
  components: {
    "my-component": {
      template: `<input type="text" ref="nativeInput" placeholder="child component input here">`,
    },
  },
});
```

## 3# 关键点

* **避免响应式数据**：虽然`$refs`可以访问DOM元素或子组件实例，但不应用于响应式数据。Vue提倡使用数据绑定来管理组件状态。
* **等待渲染完成后再操作**：在`created`或`beforeMount`钩子中不能访问`$refs`，应在`mounted`钩子或之后操作。确保在组件完全渲染后再访问`$refs`，以避免意外行为。
* **不适用于动态内容**：由于`ref`是静态的，不应用于动态创建的内容。对于动态内容，应考虑使用其他方法，如`v-for`指令和事件处理来管理状态和操作DOM。
