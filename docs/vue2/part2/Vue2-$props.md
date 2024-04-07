---
title: "vm.$props"
description: "$props 是一个只读属性，它表示 Vue 实例接收 prop 特性的集合。"
tags: ["Vue2"]
---

# $props

## 1# 定义

在 Vue.js 中，`$props` 是 Vue 实例的一个只读属性，用于访问当前组件接收到的 `props` 对象。在 Vue.js 中，`props` 可以通过两种方式传入：

(1) **直接传入值**：可以直接将 `props` 作为组件的属性进行传入

```js
// 子组件
const ChildComponent = {
  template: `<p>Child Component</p>`,
  mounted() {
    console.log(this.$props);
    // 输出: { aProp: "prop-1" }
    console.log(this.$attrs);
    // 输出: { b-prop: 'prop-2' }
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
      a-prop="prop-1" 
      b-prop="prop-2"
    ></child-component>
    `,
});
```

(2) **动态绑定**：也可以通过动态绑定的方式传入 `props`，这样可以使得 `props` 的值根据父组件的数据进行动态更新。可以使用 `v-bind` 指令或简写的:语法来实现动态绑定

```js
// 子组件
const ChildComponent = {
  template: `<p>Child Component</p>`,
  mounted() {
    console.log(this.$props);
    /* 输出: 
    {
      aProp: "prop-3"
      bProp: "prop-4"
    }
    */
  },
  props: ["aProp", "bProp"]
};

// 父组件
new Vue({
  el: "#app",
  components: {
    "child-component": ChildComponent,
  },
  data: {
    aProp: "prop-3",
    bProp: "prop-4",
  },
  template: `
    <child-component
      v-bind:a-prop="aProp"
      :b-prop="bProp"
    ></child-component>
    `,
});
```

## 2# 关键点

* **命名冲突**：子组件与父组件的 `prop` 名称相同会导致冲突，应使用唯一命名或约定来避免。
* **大小写问题**：使用字符串模板时大小写不敏感，但在 DOM 模板中使用时需将驼峰命名法的 `prop` 属性名转换为等价的短横线分隔来命名。
* **单向数据流**：`$props` 是只读的，子组件不能修改，需通过父组件的事件来更新。
* **禁用继承**：如果你不希望组件的根元素继承 attribute，你可以在组件的选项中设置 `inheritAttrs: false`。

### (1) 命名冲突

如果子组件中定义了与父组件 `prop` 相同名称的属性，则会导致命名冲突。这可能会导致意外行为或错误，因为子组件的属性会覆盖父组件传递的 `prop` 。为了避免这种情况，通常建议在命名 `prop` 时使用唯一的命名或者采用命名约定。

```js
// 子组件
const ChildComponent = {
  // [Vue warn]: The data property "myProp" is already declared as a prop.
  // Use prop default value instead.
  template: `<div>{{ myProp }}</div>`,
  // 这里的 myProp 与父组件传递的 my-prop 属性名冲突
  props: ["myProp"],
  data() {
    return {
      // 子组件内部定义的 myProp 属性
      myProp: "prop from child",
    };
  },
};

// 父组件
new Vue({
  el: "#app",
  components: {
    "child-component": ChildComponent,
  },
  template: `<child-component my-prop="prop from parent" ></child-component>`,
});
```

### (2) 大小写问题

在 Vue.js 中，如果你有一个组件接受一个名为 `myProp` 的 prop，那么在模板中，你需要使用 `my-prop` 这种短横线分隔的形式来绑定这个 prop，而不是直接使用 `myProp`。这是因为 Vue 模板编译器在解析模板时会将属性名转换为短横线分隔的形式，以确保与 DOM 元素属性的兼容性。

```js
// 子组件
const ChildComponent = {
  /* 显示结果
    propA=prop-1
    propB=prop-2
    propC=prop-3
    propD=prop-4
  */
  template: `
    <div>
      <p>propA={{ propA }}</p>
      <p>propB={{ propB }}</p>
      <p>propC={{ propC }}</p>
      <p>propD={{ propD }}</p>
    </div>
  `,
  props: ["propA", "propB", "propC", "propD"],
};

// 父组件
new Vue({
  el: "#app",
  components: {
    "child-component": ChildComponent,
  },
  data() {
    return {
      propC: "prop-3",
      propD: "prop-4",
    };
  },
  // 使用 字符串模板
  template: `
    <child-component 
      propA="prop-1"
      prop-b="prop-2"
      :propC="propC"
      :prop-d="propD"
    ></child-component>`,
});
```

在字符串模板中，无论是使用 camelCase (驼峰命名法) 的 prop 名，还是 kebab-case (短横线分隔命名) 的 prop 名，都能准确传递。但是在 DOM 模板中使用时，则需要将驼峰命名法的 prop 名转换为等价的短横线分隔命名。

```html
<!-- 使用 DOM 模板 -->
<div id="app">
  <child-component 
    propA="prop-1"
    prop-b="prop-2"
    :propC="propC"
    :prop-d="propD"
  ></child-component>
  <!-- 
    Note that HTML attributes are case-insensitive and camelCased props need to 
    use their kebab-case equivalents when using in-DOM templates. 
   -->
</div>

<script>
  // 子组件
  const ChildComponent = {
    /* 显示结果
      propA=
      propB=prop-2
      propC=
      propD=prop-4
    */
    template: `
      <div>
        <p>propA={{ propA }}</p>
        <p>propB={{ propB }}</p>
        <p>propC={{ propC }}</p>
        <p>propD={{ propD }}</p>
      </div>
    `,
    props: ["propA", "propB", "propC", "propD"],
  };

  // 父组件
  new Vue({
    el: "#app",
    components: {
      "child-component": ChildComponent,
    },
    data() {
      return {
        propC: "prop-3",
        propD: "prop-4",
      };
    },
  });
</script>
```

### (3) 单向数据流

`$props` 是只读的，子组件不能直接修改 `$props` 中的属性值。如果需要修改 `props`，应该在父组件中通过事件来进行修改。

```js
// 子组件
const ChildComponent = {
  template: `
    <div>  
      <p>{{ dynamicProp }}</p>  
      <button @click="update">更新 dynamicProp</button>  
    </div>
  `,
  props: ["dynamicProp"],
  methods: {
    update() {
      // [Vue warn]: Avoid mutating a prop directly since the value will be overwritten
      // whenever the parent component re-renders.
      // this.dynamicProp = "changed dynamic prop from child";

      // 正确方式 - 通知父组件更新 (注意：需使用短横线的写法)
      this.$emit("update-prop", this.dynamicProp + "- changed");
    },
  },
};

// 父组件
new Vue({
  el: "#app",
  components: {
    "child-component": ChildComponent,
  },
  data() {
    return {
      dynamicValue: "dynamic prop from parent",
    };
  },
  methods: {
    // 通过父组件的方法来更新数据
    updateProp(newVal) {
      this.dynamicValue = newVal;
    },
  },
  template: `
    <child-component 
      :dynamic-prop="dynamicValue"  
      @update-prop="updateProp" >
    </child-component>
  `,
});
```

### (4) 禁用继承

在 Vue 组件中，默认情况下，子组件会继承父组件传递的所有属性。通过设置 `inheritAttrs: false` 可以禁用组件根元素对父组件传递的属性的继承，并且可以手动绑定要应用的属性，从而更灵活地控制组件的属性传递和渲染行为。

```js
// 子组件
const ChildComponent = {
  /* 显示结果：
    $attrs={ "c-prop": "prop-3" }
    $attrs={ "c-prop": "prop-3", "a-prop": "prop-1", "b-prop": "prop-2" }
    $attrs={ "c-prop": "prop-3", "d-prop": "prop-2" }
  */
  template: `
    <div>
      <grandchild-component c-prop="prop-3"></grandchild-component>
      <grandchild-component c-prop="prop-3" v-bind="$attrs"></grandchild-component>
      <grandchild-component c-prop="prop-3" v-bind:d-prop="$attrs['b-prop']"></grandchild-component>
    </div>
    `,
  inheritAttrs: false, // 禁用继承
  components: {
    // 孙子组件
    "grandchild-component": {
      template: `<p>$attrs={{$attrs}}</p>`,
    },
  },
};
const ChildComponent2 = {
  // 手动绑定属性
  template: `<grandchild-component c-prop="prop-3" v-bind:d-prop="$attrs['a-prop']"></grandchild-component>`,
  inheritAttrs: false, // 禁用继承
  components: {
    // 孙子组件
    "grandchild-component": {
      template: `<p>$attrs={{$attrs}}</p>`,
      // 显示结果：$attrs={ "c-prop": "prop-3", "d-prop": "prop-1" }
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