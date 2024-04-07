---
title: "vm.$children"
description: "$children 是一个只读属性，它表示当前实例的直接子组件。"
tags: ["Vue2"]
---

# $children

## 1# 定义

在 Vue.js 中，`$children` 是 Vue 实例的一个属性，用于访问当前实例的直接子组件。它是一个数组，包含了当前实例的所有直接子组件实例。通过 `$children` 属性可以访问当前实例的所有直接子组件，也可以通过遍历 `$children` 数组来操作或访问每个子组件实例的属性和方法。

## 2# 示例

```js
// 根实例
new Vue({
  el: "#app",
  data() {
    return {
      childDataList: null,
    };
  },
  methods: {
    showChildDataByProp() {
      this.childDataList = this.$children.map(
        (child, index) => `访问子组件 ${index + 1} 的属性: ${child.childData}`
      );
    },
    showChildDataByFunc() {
      this.childDataList = this.$children.map(
        (child, index) => `调用子组件 ${index + 1} 的方法: ${child.getChildData()}`
      );
    },
  },
  template: `  
  <div>  
    <child-component></child-component>
    <child-component></child-component>
    <button @click="showChildDataByProp()">使用 $children 访问属性</button>
    <button @click="showChildDataByFunc()">使用 $children 访问方法</button>
    <p v-if="childDataList">childDataList: {{ childDataList }}</p>
  </div>
  `,
  components: {
    // 子组件
    "child-component": {
      data() {
        return {
          childData: "hello from child component",
        };
      },
      methods: {
        getChildData() {
          return this.childData + "2";
        },
      },
      template: `<p>子组件属性：{{ childData }}</p>`,
    },
  },
});
```
