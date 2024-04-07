---
title: "vm.$scopedSlots"
description: "$scopedSlots 是一个只读属性，它提供了对组件中作用域插槽的访问。"
tags: ["Vue2"]
---

# $scopedSlots

## 1# 定义

`$scopedSlots` 是一个组件实例的属性，它提供了对组件中作用域插槽的访问。在 Vue.js 中，`$scopedSlots` 是一个对象，其中包含了所有作用域插槽的渲染函数。

每个作用域插槽都会在 `$scopedSlots` 对象中以其名称为键存储。当在模板中使用作用域插槽时，Vue.js 会自动生成一个渲染函数，并将其存储在 `$scopedSlots` 对象中。

## 2# 示例

```js
new Vue({
  el: "#app",
  template: `  
    <my-component>  
      <template v-slot:scopedSlot1="{ slotData }">  
        <p>作用域插槽 scopedSlot1 的内容：{{ slotData }}</p>  
      </template>  
      <template v-slot:scopedSlot2="{ slotData }">  
        <p>作用域插槽 scopedSlot2 的内容：{{ slotData }}</p>  
      </template>  
    </my-component>  
  `,
  components: {
    "my-component": {
      data() {
        return {
          slotData: { v1: "lee", v2: '27' },
        };
      },
      mounted() {
        console.log(this.$scopedSlots);
        /* 输出
        {
          scopedSlot1: ƒ ()
          scopedSlot2: ƒ ()
        }
        */
      },
      template: `  
        <div>  
          <!-- 作用域插槽 -->  
          <slot name="scopedSlot1" :slotData="slotData"></slot>  
          <slot name="scopedSlot2" :slotData="slotData"></slot>  
        </div>  
          `,
    },
  },
});
```