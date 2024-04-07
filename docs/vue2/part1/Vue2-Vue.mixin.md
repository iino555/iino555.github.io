---
title: "Vue.mixin"
description: "语法；Vue.mixin( mixin: Object )"
tags: ["Vue2"]
---

# Vue.mixin( mixin )

## 1# 定义

混入 (mixin) 是 Vue 中一种提供灵活的方式来共享组件间可复用功能的机制。一个混入对象可以包含任意组件选项，例如数据、计算属性、方法、生命周期钩子等。当组件使用混入对象时，该组件将会继承并合并混入对象中的所有选项，从而扩展自身的功能。 

### (1) 全局混入：Vue.mixin( mixin )

**语法**：`Vue.mixin( options: { Object } )`

```js
Vue.mixin({
  created: function () {
    var myOption = this.$options.myOption;
    if (myOption) {
      console.log(myOption);
    }
  },
});

new Vue({
  myOption: "hello, Vue!",
}).$mount("#app");
// 输出： hello, Vue!
```

### (2) 局部混入：mixins

**语法**：`mixins: [ m1, m2 ]`

```js
// 定义一个混入对象
var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello, mixin!')
    }
  }
}

// 定义一个使用混入对象的组件
var Component = Vue.extend({
  mixins: [myMixin]
})

var component = new Component()
// 输出： hello, mixin
```

## 2# 示例：选项合并

当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”。

### (1) 混入数据对象

 数据对象在内部会进行递归合并， 且**同名时以组件数据优先**。

```js
// 情况1：混入数据对象
var dataMixin = {
  data: function () {
    return {
      p1: "Hello",
      p2: "abc",
    };
  },
};
var vm = new Vue({
  mixins: [dataMixin],
  data: function () {
    return {
      p2: "xyz",
    };
  },
});

console.log(vm.$options.data());
// 输出 { "p2": "xyz", "p1": "Hello" }
```

### (2) 混入钩子函数

 同名钩子函数将合并为一个数组， 且都会被调用。另外，混入的钩子函数将在组件自身钩子**之前**调用。 

```js
// 情况2：混入钩子函数
var hookMixin = {
  created: function () {
    console.log("Mixin hook: created");
  },
};
var vm = new Vue({
  mixins: [hookMixin],
  created: function () {
    console.log("Component hook: created");
  },
});

console.log(vm.$options.created.length); // 2

/* 输出
Mixin hook: created
Component hook: created
2
*/
```

### (3) 混入对象值选项

 值为对象的选项将会被合并为同一个对象，且**同名时以组件对象优先**。 如 `methods`、`components` 、`filters` 和 `directives` 等选项。

```js
// 情况3：混入对象值选项
var optionsMixin = {
  methods: {
    f1: function () {
      console.log('Mixin method: f1');
    },
    f2: function () {
      console.log('Mixin method: f2');
    }
  }
};

var vm = new Vue({
  mixins: [optionsMixin],
  methods: {
    f2: function () {
      console.log('Component method: f2');
    }
  }
});

vm.f1(); // Mixin method: f1
vm.f2(); // Component method: f2
```

### (4) 混入自定义选项

```js
// 情况4：混入自定义选项
var optionsMixin = {
    myOption: "Mixin options: myOption",
};

var vm = new Vue({
    mixins: [optionsMixin],
    myOption: "Component options: myOption",
});

console.log(vm.$options.myOption);
// 输出：Component options: myOption
```

## 3# 示例：自定义选项合并

```
// Vue.config.optionMergeStrategies

activated: ƒ mergeHook( parentVal, childVal )
beforeCreate: ƒ mergeHook( parentVal, childVal )
beforeDestroy: ƒ mergeHook( parentVal, childVal )
beforeMount: ƒ mergeHook( parentVal, childVal )
beforeUpdate: ƒ mergeHook( parentVal, childVal )
components: ƒ mergeAssets( parentVal, childVal, vm, key )
computed: ƒ ( parentVal, childVal, vm, key )
created: ƒ mergeHook( parentVal, childVal )
data: ƒ ( parentVal, childVal, vm )
deactivated: ƒ mergeHook( parentVal, childVal )
destroyed: ƒ mergeHook( parentVal, childVal )
directives: ƒ mergeAssets( parentVal, childVal, vm, key )
el: ƒ (parent, child, vm, key)
errorCaptured: ƒ mergeHook( parentVal, childVal )
filters: ƒ mergeAssets( parentVal, childVal, vm, key )
inject: ƒ ( parentVal, childVal, vm, key )
methods: ƒ ( parentVal, childVal, vm, key )
mounted: ƒ mergeHook( parentVal, childVal )
props: ƒ ( parentVal, childVal, vm, key )
propsData: ƒ (parent, child, vm, key)
provide: ƒ mergeDataOrFn( parentVal, childVal, vm )
serverPrefetch: ƒ mergeHook( parentVal, childVal )
updated: ƒ mergeHook( parentVal, childVal )
watch: ƒ ( parentVal, childVal, vm, key )
```

### (1) 自定义选项合并策略

对于自定义选项，如果想让自定义选项以自定义逻辑合并，可以向 `Vue.config.optionMergeStrategies` 添加一个函数：

```js
Vue.config.optionMergeStrategies.myOption = function (toVal, fromVal) {
  console.log("toVal=" + toVal); // 待合并的值
  console.log("fromVal=" + fromVal); // 待合并的值
  return "Merged options：xx"; // 返回合并后的最终结果
};
```

完整示例如下：

```javascript
// 混入自定义选项
var myOptionMixin = {
  myOption: "Mixin options: myOption",
};

// 加入合并策略
Vue.config.optionMergeStrategies.myOption = function (toVal, fromVal) {
  console.log("toVal=" + JSON.stringify(toVal));
  console.log("fromVal=" + JSON.stringify(fromVal));
  return [].concat(toVal, fromVal); // 返回合并后的值
};

var vm = new Vue({
  mixins: [myOptionMixin],
  myOption: "Component options: myOption",
});

console.log(vm.$options.myOption);
// 默认策略输出：Component options: myOption

/* 加入策略后
toVal=undefined
fromVal="Mixin options: myOption"

toVal=[null,"Mixin options: myOption"]
fromVal="Component options: myOption"

[undefined, 'Mixin options: myOption', 'Component options: myOption']
*/
```

### (2) 对象值选项的合并策略

对于值为对象的选项，可以使用与 `methods` 或 `created` 相同的合并策略：

```javascript
var strategies = Vue.config.optionMergeStrategies;
strategies.myOption = strategies.methods; // methods 合并策略
strategies.myOption = strategies.created; // created 合并策略
```

完整示例如下：

```js
// 混入自定义选项
var myOptionMixin = {
  myOption: { v: "Mixin options: myOption" },
};

// 加入合并策略
var strategies = Vue.config.optionMergeStrategies;
strategies.myOption = strategies.methods; // methods 合并策略
// strategies.myOption = strategies.created; // created 合并策略

var vm = new Vue({
  mixins: [myOptionMixin],
  myOption: { v: "Component options: myOption" },
});

console.log(vm.$options.myOption);
// 默认策略输出：{v: 'Component options: myOption'}

/* 加入 methods 合并策略后输出：{v: 'Component options: myOption'} */

/* 加入 created 合并策略后输出：
[{"v": "Mixin options: myOption"}, {"v": "Component options: myOption"}]
*/
```