---
title: "vm.$props-and-props"
description: "$props 是一个属性，它表示 Vue 实例接收 `props` 属性的集合。"
tags: ["Vue2"]
---

# $props-and-props

## 1# props

**语法**：`props: Array<string> | Object`

在 Vue.js 中，`props` 是一种允许父组件向子组件传递数据的机制，它是 Vue 组件之间通信的重要方式之一。其中 `props` 可以是数组或对象，用于接收来自父组件的数据。

(1) **数组形式**：使用简单的数组来定义 `props`，数组中列出的是组件中需要从父组件接收的属性名称。 

```js
// case 1. 数组形式
Vue.component('my-component', {
  props: ['title', 'content']
});
```

(2) **对象形式**：使用对象来定义 `props`，可以配置更多选项，如类型检测、必需性、默认值和自定义验证器等。 各个参数的解释如下： 

-  **type**：指定 `props` 的类型，可以是以下原生构造函数中的一种：`String`、`Number`、`Boolean`、`Array`、`Object`、`Date`、`Function`、`Symbol`，也可以是自定义构造函数。如果需要接受多种类型，可以使用一个包含多种类型的数组。 
- **required**：布尔值，指定该 prop 是否是必需的。如果设置为 true，父组件在使用该子组件时必须传入该 prop。
- **default**：设置 prop 的默认值，当父组件没有传入该 prop 时，将会使用默认值。
- **validator**：自定义验证函数，用于验证传入的 prop 是否符合特定要求。该函数应返回 true 或 false。

```js
// case 2. 对象形式
Vue.component('my-component', {
  props: {
    title: String, // 简写
    content: {
      type: String,
      required: true,
      default: 'Default Content',
      validator: function(value) {
        return value.length <= 100;
      }
    }
  }
});
```

## 2# $props

在 Vue.js 中，`$props` 是 Vue 实例的一个属性，用于访问当前组件接收到的 `props` 对象。

```html
<div id="app">
  <my-component message="Hello, Vue!" message-title="Props"></my-component>
  <!-- 注意点：在字符串模板中需使用 kebab-case (短横线分隔命名) 传递 props，否则接收结果为 undefined -->
</div>

<script>
  Vue.component("my-component", {
    props: ['message', 'messageTitle'],
    template: "<div>{{ messageTitle }} : {{ message }}</div>",
    mounted() {
      // 内部访问 $props
      console.log(this.$props);
      // 输出：{message: "Hello, Vue!", messageTitle: "Props" }
    },
  });

  new Vue({
    el: "#app",
    mounted() {
      let vm = this.$children[0];
      // 外部访问 $props
      console.log(vm.$props);
      // 输出：{message: "Hello, Vue!", messageTitle: "Props" }
    },
  });
</script>
```

> **`vm.$props` 与 `this.$props` 的区别**：`vm.$props` 是 Vue 实例的属性，用于访问组件接收到的 props 对象，在组件内外都可使用；而 `this.$props` 是组件内部属性，指向当前组件接收到的 props 对象。