---
title: "Vue.observable"
description: "语法：Vue.observable( data: object )"
tags: ["Vue2"]
---

# Vue.observable( object )

## 1# 定义

**语法**：`Vue.observable( data: object )`

`Vue.observable` 让一个对象可响应。Vue 内部会用它来处理 `data` 函数返回的对象。 

返回的对象可以直接用于 **渲染函数** 和 **计算属性** 内，并且会在发生变更时触发相应的更新。此外，也可以作为最小化的跨组件状态存储器，用于简单的场景：

```js
const state = Vue.observable({ count: 0 });
new Vue({
  render: function (h) {
    return h(
      "button",
      { on: { click: () => { state.count++; } } },
      `count is: ${state.count}`
    );
  },
}).$mount("#app");
```

## 2# 示例

 在这个示例中，使用 `Vue.observable` 创建了一个包含 `count` 属性的响应式对象 `state`。然后在 Vue 实例中定义了一个计算属性 `doubleCount` 来计算 `count` 的两倍值，并在渲染函数中直接使用 `state.count` 和 `doubleCount` 计算属性。 

```js
const state = Vue.observable({
  count: 0
});

new Vue({
  // case 1. 计算属性内
  computed: {
    doubleCount() {
      return state.count * 2;
    },
  },
  // case 2. 渲染函数内
  render(h) {
    return h('div', [
      h('p', 'count is: ' + state.count),
      h('p', 'double count is: ' + this.doubleCount),
      h('button', {
        on: {
          click: () => { state.count++; }
        }
      }, 'Increment')
    ])
  },
}).$mount("#app");
```