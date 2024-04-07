---
title: "vm.$attrs"
description: "$attrs 是一个只读属性，它表示父作用域中未被接收的非 prop 特性 (class 和 style 除外) 。"
tags: ["Vue2"]
---

# $attrs

## 1# 定义

在 Vue.js 中，`$attrs` 是 Vue.js 中一个特殊的属性对象，用于在子组件中接收父组件传递的非 `prop` 特性。在 Vue 组件中，父组件向子组件传递属性时，除了 `props` 外，还可以传递其他非 `prop` 特性。这些非 `prop` 特性 (**`class` 和 `style` 除外**) 会被自动添加到子组件的 `$attrs` 对象中，

> **注意**：在 Vue2 中，`$attrs` 对象**不包含** `class` 和 `style` 属性。然而，在 Vue3 中，`class` 和 `style` 属性会被转换为对象形式，并可以通过 `$attrs.class` 和 `$attrs.style` 进行访问。


## 2# 示例

```js
// 子组件
const ChildComponent = {
  template: `<p>{{ aProp }}</p>`,
  mounted() {
    console.log(this.$attrs); //输出: {b-prop: 'prop-2'}
    console.log(this.$props); // 输出: {a-prop: 'prop-1'}
    console.log(this.$attrs.class); // undefined
    console.log(this.$attrs.style); // undefined
  },
  props: ["aProp"],
};

// 父组件
new Vue({
  el: "#app",
  components: {
    "child-component": ChildComponent,
  },
  template: `
    <child-component
      v-bind:class="{ 'class-a': true }"
      v-bind:style="{ color: 'red' }"
      a-prop="prop-1"
      b-prop="prop-2"
    ></child-component>
    `,
});
```

除了 `class` 和 `style` 属性外，还有以下这些在 Vue 模板中具有特定的功能或作用的特殊属性，**不会被包含在 `$attrs` 对象**中。

|  特殊属性 | 描述                                                                               |
| --------: | :--------------------------------------------------------------------------------- |
|     `key` | 用于标识唯一的 VNode，以便 Vue 可以更高效地更新虚拟 DOM。                          |
|     `ref` | 用于在父组件中引用子组件或元素。                                                   |
|    `slot` | 用于分发内容到子组件的具名插槽。                                                   |
|      `is` | 用于动态组件的特殊属性，指定组件的名称。                                           |
|   `v-for` | 用于循环渲染列表的指令。                                                           |
|    `v-on` | 或 `@` 用于绑定事件监听器的指令。                                                  |
|  `v-bind` | 或 `:` 用于动态绑定属性的指令。                                                    |
| `v-model` | 用于实现表单输入元素的双向绑定。                                                   |
|  `v-show` | 用于根据条件显示或隐藏元素的指令。                                                 |
|    `v-if` | 或 `v-else-if` 或 `v-else` 用于条件性地渲染元素的指令。                            |
|  `v-html` | 用于将数据作为 HTML 插入的指令，需谨慎使用以避免 XSS 攻击。                        |
|   `v-pre` | 用于跳过该元素和子元素的编译过程，用于性能优化。                                   |
| `v-cloak` | 用于解决 Vue 渲染时闪烁的问题，`v-cloak` 只有在 Vue 实例完成编译时才会移除该属性。 |


## 3# 关键点

* **顺序问题**：不保证 `$attrs` 中属性的顺序与父组件中声明的顺序一致。
* **属性继承**：使用 v-bind="$attrs" 可将所有父组件的属性直接继承到子组件元素上。
* **事件监听器**：通过 `$attrs` 传递的事件监听器需手动绑定。
* **大小写问题**：虽然 Vue.js 会尽可能地保留属性的原始形式，但 `$attrs` 中的属性名仍然会遵循 HTML 的规范，即不区分大小写。

### (1) 顺序问题

在这个案例中，父组件传递了三个属性 b-prop、a-prop 和 c-prop 给子组件，其中属性的传递顺序为 `bProp > aProp > cProp`。在子组件中，属性的声明顺序为 `cProp > aProp > bProp`，输出顺序为 `aProp > bProp > cProp`。

```js
// 子组件
const ChildComponent = {
  template: `<p>{{ aProp }}</p>`,
  mounted() {
    console.log(this.$props);
    /* 输出顺序为： a > b > c
    {
      aProp: "prop-1"
      bProp: "prop-2"
      cProp: "prop-3"
    }
    */
  },
  // 声明顺序为：c > a > b
  props: ["cProp", "aProp", "bProp"],
};
// 父组件
new Vue({
  el: "#app",
  components: {
    "child-component": ChildComponent,
  },
  // 传入顺序为： b > a > c
  template: `
      <child-component
        b-prop="prop-2"
        a-prop="prop-1"
        c-prop="prop-3"
      ></child-component>
      `,
});
```
### (2) 属性继承

这个案例中包含了三个组件：父组件、子组件和孙子组件。在子组件中使用 v-bind="$attrs" 可将所有父组件的属性直接继承到子组件元素上。

```js
// 子组件
const ChildComponent = {
  template: `<grandchild-component v-bind="$attrs" c-prop="prop-3"></grandchild-component>`,
  components: {
    // 孙子组件
    "grandchild-component": {
      template: `<p>$attrs={{$attrs}}</p>`,
      // 显示结果：$attrs={ "c-prop": "prop-3", "a-prop": "prop-1", "b-prop": "prop-2" }
    },
  },
};
// 父组件
new Vue({
  el: "#app",
  components: {
    "child-component": ChildComponent,
  },
  template: `<child-component a-prop="prop-1" b-prop="prop-2"></child-component>`,
});
```

### (3) 事件监听器

在这个案例中，父组件通过 `v-bind:click="handleClick"` 将一个名为 `handleClick` 的方法传递给子组件作为 `click` 事件监听器。在子组件中，需使用 `@click="$attrs['click']"` 手动将父组件传递的 `click` 事件监听器绑定到按钮元素上。

```js
// 子组件
const ChildComponent = {
  template: `<button @click="$attrs['click']">Click me</button>`,
};
// 父组件
new Vue({
  el: "#app",
  components: {
    "child-component": ChildComponent,
  },
  template: `<child-component v-bind:click="handleClick"></child-component>`,
  methods: {
    handleClick() {
      console.log("button clicked!");
    },
  },
});
```

### (4) 大小写问题

在父组件中，定义了两个属性：aProp 和 aprop，并给它们分别赋了值 "prop-1" 和 "prop-2"。然后，将这两个属性传递给了子组件 child-component，并在子组件中使用这两个属性。

由于 Vue.js 在内部处理属性时可能会尽量保留原始的属性名大小写，因此 `$attrs` 对象中可能会同时包含 aprop 和 aProp 这两个键。然而，需要注意的是，尽管 Vue.js 在内部可能保留了属性名的大小写，但在最终的 HTML 输出中，属性名仍然会被转换为小写，这是由 HTML 规范决定的。因此，在浏览器的 DOM 中，这两个属性实际上会被视为同一个属性。

```js
// 子组件
const ChildComponent = {
  template: `
  <div>
    <p>$attrs={{ $attrs }}</p>
    <p>$attrs.aprop={{ $attrs.aprop }}</p>
    <p>$attrs.aProp={{ $attrs.aProp }}</p>
  </div>
  `,
};
// 父组件
new Vue({
  el: "#app",
  components: {
    "child-component": ChildComponent,
  },
  template: `<child-component aProp="prop-1" aprop="prop-2"></child-component>`,
});
```

上述模板对应的 HTML 结构为；

```html
<div aprop="prop-1">
  <p>$attrs={ "aprop": "prop-2", "aProp": "prop-1" }</p>
  <p>$attrs.aprop=prop-2</p>
  <p>$attrs.aProp=prop-1</p>
  <p aprop="prop-1">$attrs 绑定为属性</p>
</div>
```

> **`$attrs` 和 `$props` 的联系**：`$attrs` 和 `$props` 都提供了一种访问组件外部数据的方法，但它们的使用场景和作用有所不同。通常 `$props` 用于访问明确传递给组件的属性，而 `$attrs` 用于访问组件外部传递的、但未被显式声明为 `prop` 的属性。