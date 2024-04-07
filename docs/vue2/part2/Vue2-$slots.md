---
title: "vm.$slots"
description: "$slots 是一个只读属性，它提供了对组件中默认插槽与具名插槽内容的访问。"
tags: ["Vue2"]
---

# $slots

## 1# 定义

`$slots` 是一个组件实例的属性，它提供了对组件中默认插槽与具名插槽内容的访问。在 Vue.js 中，`$slots` 是一个对象，其键是插槽的名字（字符串类型），值是一个数组，包含了所有插入到该插槽的虚拟节点 **VNode**。如果没有给插槽指定名字，那么这些节点会被放在 `$slots.default` 中。

## 2# 示例

### (1) 父组件

```js
new Vue({
    el: "#app",
    template: `
    <div>
      <my-component>
        <!-- 默认插槽内容 -->
        <p>默认插槽的内容</p>

        <!-- 具名插槽 namedSlot -->
        <template v-slot:namedSlot>
          <p>具名插槽的内容</p>
        </template>

        <!-- 作用域插槽 scopedSlot -->
        <template v-slot:scopedSlot="{ user }">
          <p>作用域插槽的内容 {{ user }}</p>
        </template>
      </my-component>
    </div>
  `,
});
```

### (2) 子组件

```js
Vue.component("my-component", {  
  data() {  
    return {  
      user: {  
        name: "lee",  
        age: 27,  
      },  
    };  
  },  
  mounted() {  
    console.log("默认插槽:", this.$slots.default); // 访问默认插槽
    console.log("具名插槽:", this.$slots.namedSlot); // 访问具名插槽
    console.log("作用域插槽:", this.$scopedSlots.scopedSlot); // 访问作用域插槽
  },  
  template: `  
    <div>  
      <!-- 默认插槽 -->  
      <slot></slot>  
  
      <!-- 具名插槽 -->  
      <slot name="namedSlot"></slot>  
  
      <!-- 作用域插槽 -->  
      <slot name="scopedSlot" :user="user"></slot>  
    </div>  
  `,  
});
```

> **注意**：对于 Vue2 中的插槽，`this.$slots` 用于访问默认插槽和具名插槽，而 `this.$scopedSlots` 用于访问作用域插槽。这是因为在 Vue 2.x 中，作用域插槽被特殊处理，允许子组件向父组件的插槽内容传递数据。而在 Vue3 中，`this.$scopedSlots` 已经被移除，取而代之的是使用 `this.$slots` 来访问所有类型的插槽，包括作用域插槽。
