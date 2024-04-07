---
title: "Vue.use"
description: "语法：Vue.use( plugin: Object | Function, [options: Object] )"
tags: ["Vue2"]
---

# Vue.use( plugin )

## 1# 定义

**语法**：`Vue.use( plugin: Object | Function, [options: Object] )`

安装 Vue.js 插件。如果插件是一个对象，必须提供 `install` 方法。如果插件是一个函数，它会被作为 `install` 方法。`install` 方法调用时，会将 Vue 作为参数传入。

该方法需要在调用 `new Vue()` 之前被调用。

当 `install` 方法被同一个插件多次调用，插件将只会被安装一次。

```js
// case 1. 一个参数（Object），调用 MyPlugin.install(Vue)
Vue.use(MyPlugin)

// case 2. 两个参数，调用 MyPlugin.install(Vue, options)
Vue.use(MyPlugin, { someOption: true })

// case 3. 一个参数（Function），调用 MyPluginFn(Vue)
Vue.use(MyPluginFn)

// case 4. 两个参数，调用 MyPlugin(Vue, options)
Vue.use(MyPluginFn, { someOption: true })

new Vue({  
  // ...组件选项  
})
```

## 2# 示例

在这个示例中，给出了四种高亮插件示例，展示了不同的调用方式和实现逻辑。这些示例涵盖了使用对象或函数作为插件安装方法，并演示了如何在Vue应用程序中创建灵活的自定义指令来实现文本高亮显示的功能。

### (1) 对象调用: install(Vue)

```js
// 高亮插件示例1：一个参数（Object）调用
const HighlightPlugin1 = {
  install(Vue) {
    Vue.directive('highlight', {
      bind(el, binding) {
        el.style.backgroundColor = 'yellow';
      }
    });
  }
};
Vue.use(HighlightPlugin1);

```

### (2) 对象调用: install(Vue, options)

```js
// 高亮插件示例2：两个参数调用
const HighlightPlugin2 = {
  install(Vue, options) {
    Vue.directive('highlight', {
      bind(el, binding) {
        el.style.backgroundColor = options.someOption ? 'yellow' : binding.value;
      }
    });
  }
};
Vue.use(HighlightPlugin2, { someOption: true });
```

### (3) 函数调用: function(Vue)

```js
// 高亮插件示例3：一个参数（Function）调用
const HighlightPlugin3 = function(Vue) {
  Vue.directive('highlight', {
    bind(el, binding) {
      el.style.backgroundColor = 'lightgreen';
    }
  });
};
Vue.use(HighlightPlugin3);
```

### (4) 函数调用: function(Vue, options)

```js
// 高亮插件示例4：两个参数调用
const HighlightPlugin4 = function(Vue, options) {
  Vue.directive('highlight', {
    bind(el, binding) {
      el.style.backgroundColor = options.someOption ? 'lightblue' : binding.value;
    }
  });
};
Vue.use(HighlightPlugin4, { someOption: true });
```
