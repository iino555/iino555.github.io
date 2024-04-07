---
title: "Vue.component"
description: "语法：Vue.component(id: String, [definition: Function | Object ])" 
tags: ["Vue2"]
---

# Vue.component( id, [definition] )

## 1# 定义

**语法**：`Vue.component(id: String, [definition: Function | Object ])`

 `Vue.component` 同于注册或获取全局组件。注册还会自动使用给定的 `id` 设置组件的名称 。

```js
// case 1. 传入 id 与 Vue.extend(definition)
Vue.component('component-name', Vue.extend(definition));

// case 2. 传入 id 与 definition，自动调用 Vue.extend(definition)
Vue.component('component-name', definition);

// case 3. 只传入 id
Vue.component('component-name');
```

## 2# 示例

在这个示例中，分别演示了在 Vue 中使用 `Vue.component` 方法注册组件的不同方式： 第一种和第二种方式都传入了组件的定义（包括数据、模板等），区别在于第一种方式显式调用了 `Vue.extend`，而第二种方式不需要显式调用。第三种方式只传入了组件的 id，在这种情况下需要在其他地方手动注册该组件才能使用。 

### (1) Vue.component(id, Vue.extend(options))

```js
// case 1. 传入 id 与 Vue.extend(definition)
Vue.component(
  "my-component-1",
  Vue.extend({
    data() {
      return {
        message: "Hello from component 1",
      };
    },
    template: "<div>{{ message }}</div>",
  })
);
```

### (2) Vue.component(id, options)


```js
// case 2. 传入 id 与 definition，自动调用 Vue.extend(definition)
Vue.component("my-component-2", {
  data() {
    return {
      message: "Hello from component 2",
    };
  },
  template: "<div>{{ message }}</div>",
});
```

### (3) Vue.component(id)

在 Vue 中，使用 `Vue.component('component-name')` 方法可以用来获取已注册的组件，并返回相应的组件构造器。这个方法并不用于注册新的组件，而是用于获取已注册的组件。 

```js
// case 3. 只传入 id
Vue.component("my-component-3");

// 在 Vue 实例中使用这些组件
new Vue({
  el: "#app",
  template: `
    <div>
      <my-component-1></my-component-1>
      <my-component-2></my-component-2>
      <my-component-3>Hello from component 3</my-component-3>
    </div>
  `,
  // [Vue warn]: Unknown custom element: \<my-component-3\> - did you register the component correctly
});
```
