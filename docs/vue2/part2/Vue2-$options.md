---
title: "vm.$options"
description: "$options 是一个只读属性，它包含了创建该实例时传递的选项对象和其他一些选项信息。"
tags: ["Vue2"]
---

# $options

## 1# 定义

`$options` 是 Vue 实例的一个只读属性，它包含了创建该实例时传递的选项对象和其他一些选项信息。这个属性提供了对 Vue 实例的配置选项的直接访问。

<details>
  <summary>完整示例</summary>

```js
new Vue({
  el: '#app',
  data() {
    return {
      message: 'Hello Vue!'
    };
  },
  render(h) {
    console.log(this.$options);
    return h('div', this.message);
  },
  template: `<div>{{ $potions }}</div>`,
  props: ['prop'],
  propsData: {
    prop: 'value'
  },
  provide: {
    theme: 'dark'
  },
  inject: ['theme'],
  emits: ['custom-event'],
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    }
  },
  methods: {
    greet() {
      console.log('Hello!');
    }
  },
  watch: {
    message(newValue, oldValue) {
      console.log('Message changed:', oldValue, '->', newValue);
    }
  },
  beforeCreate() {
    console.log('beforeCreate hook');
  },
  created() {
    console.log('created hook');
  },
  beforeMount() {
    console.log('beforeMount hook');
  },
  mounted() {
    console.log('mounted hook');
  },
  beforeUpdate() {
    console.log('beforeUpdate hook');
  },
  updated() {
    console.log('updated hook');
  },
  activated() {
    console.log('activated hook');
  },
  deactivated() {
    console.log('deactivated hook');
  },
  beforeDestroy() {
    console.log('beforeDestroy hook');
  },
  destroyed() {
    console.log('destroyed hook');
  },
  components: {
    'my-component': {
      template: '<div>My Component</div>'
    }
  },
  directives: {
    'my-directive': {
      bind(el, binding) {
        // custom directive logic
      }
    }
  },
  mixins: [],
  extends: {},
  filters: {},
  name: 'MyComponent',
  functional: false,
  inheritAttrs: true,
  comments: false,
  delimiters: ['${', '}'],
  serverPrefetch() {
    // server prefetch logic
  },
  errorCaptured(err, vm, info) {
    // error captured logic
  }
});
```
</details>


<details>
  <summary>展示结果</summary>

```json
{
  activated: [ƒ]
  beforeCreate: [ƒ]
  beforeDestroy: [ƒ]
  beforeMount: [ƒ]
  beforeUpdate: [ƒ]
  comments: false
  components: {my-component: {…}}
  computed: {reversedMessage: ƒ}
  created: [ƒ]
  data: ƒ mergedInstanceDataFn()
  deactivated: [ƒ]
  delimiters: (2) ['${', '}']
  destroyed: [ƒ]
  directives: {my-directive: {…}}
  el: "#app"
  emits: ['custom-event']
  errorCaptured: [ƒ]
  extends: {}
  filters: {}
  functional: false
  inheritAttrs: true
  inject: {theme: {…}}
  methods: {greet: ƒ}
  mixins: []
  mounted: [ƒ]
  name: "MyComponent"
  props: {prop: {…}}
  propsData: {prop: 'value'}
  provide: ƒ mergedInstanceDataFn()
  render: ƒ render(h)
  serverPrefetch: [ƒ]
  template: "<div>{{ $potions }}</div>"
  updated: [ƒ]
  watch: {message: ƒ}
  _base: ƒ Vue(options)
  _propKeys: ['prop']
}
```
</details>


## 2# 属性

具体来说，`$options` 对象包含了以下属性：


### (1) 基础配置

- **`el`**: 挂载元素。
- **`data`**: 初始数据对象。
- **`template`**: 模板字符串。
- **`render`**: 渲染函数。

### (2) 组件通信与属性

- **`props`**: 父组件传递的属性。
- **`propsData`**: 用于实例化时传递 props 的数据对象。
- **`provide`**: 用于子组件中的依赖注入。
- **`inject`**: 用于在子组件中注入的键名。
- **`emits`**: 指定组件可以触发的事件。

### (3) 计算与方法

- **`computed`**: 计算属性。
- **`methods`**: 方法。
- **`watch`**: 侦听器。

### (4) 生命周期钩子

- **`beforeCreate`**: 实例初始化之后被调用。
- **`created`**: 实例创建完成后被调用。
- **`beforeMount`**: 挂载开始之前被调用。
- **`mounted`**: 挂载完成后被调用。
- **`beforeUpdate`**: 数据更新时，渲染之前被调用。
- **`updated`**: 数据更新后，渲染完成后被调用。
- **`activated`**: keep-alive 组件激活时调用。
- **`deactivated`**: keep-alive 组件停用时调用。
- **`beforeDestroy`**: 实例销毁之前调用。
- **`destroyed`**: 实例销毁后调用。

### (5) 组件注册与扩展

- **`components`**: 注册的组件。
- **`directives`**: 自定义指令。
- **`mixins`**: 混入。
- **`extends`**: 扩展实例对象。
- **`filters`**: 过滤器。

### (6) 其他选项

- **`name`**: 实例名称。
- **`functional`**: 标记组件为函数式组件。
- **`inheritAttrs`**: 控制组件是否继承父元素的属性。
- **`comments`**: 保留注释的配置。
- **`delimiters`**: 用于改变纯文本插入分隔符。
- **`serverPrefetch`**: 服务端渲染期间调用，一般用于数据预取。
- **`errorCaptured`**: 当捕获一个来自子孙组件的错误时被调用。
