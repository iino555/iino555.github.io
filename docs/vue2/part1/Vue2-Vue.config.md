---
title: "Vue.config"
description: "Vue.config 是 Vue 提供的一个全局配置对象"
tags: ["Vue2"]
---

# Vue.config

## 1# 定义

 `Vue.config` 是 Vue 提供的一个全局配置对象，可以用来配置 Vue 的行为。 

|                         配置选项 | 类型     | 描述                                                         |
| -------------------------------: | -------- | :----------------------------------------------------------- |
|                Vue.config.silent | Boolean  | 设置为 `true` 时，不会在控制台输出警告信息。                 |
|         Vue.config.productionTip | Boolean  | 设置为 `false` 时，阻止 Vue 在启动时生成生产提示。（2.2+）   |
|              Vue.config.devtools | Boolean  | 控制是否允许 `vue-devtools` 检查代码。                       |
|           Vue.config.performance | Boolean  | 设置为 `true` 时，会在浏览器开发工具中启用性能追踪。（2.2+） |
| Vue.config.optionMergeStrategies | Function | 自定义合并策略的选项。                                       |
|          Vue.config.errorHandler | Function | 指定一个全局错误处理函数。                                   |
|           Vue.config.warnHandler | Function | 指定一个全局警告处理函数。                                   |
|       Vue.config.ignoredElements | Array    | 用于忽略特定的自定义元素警告（2.5+ 支持 RegExp）。           |
|              Vue.config.keyCodes | Object   | 给 `v-on` 自定义键位别名。                                   |

## 2# 示例

```js
// 取消 Vue 所有的日志与警告
Vue.config.silent = true;

// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false;

// 启用 vue-devtools 检查代码
Vue.config.devtools = true;

// 启用性能追踪
Vue.config.performance = true;

// 设置自定义选项 myOption 的合并策略
Vue.config.optionMergeStrategies.myOption = = function (toVal, fromVal) {
  // 返回合并后的值
}

// 令自定义选项 myOption 使用 created 合并策略
var strategies = Vue.config.optionMergeStrategies
strategies.myOption = strategies.created

// 捕获全局错误信息
Vue.config.errorHandler = function (err, vm, info) {
   // err   具体错误信息
   // vm    触发错误的 Vue 实例
   // info  是 Vue 特定的错误信息，如错误所在的钩子函数
}

// 捕获全局警告信息
Vue.config.warnHandler = function (msg, vm, trace) {
  // msg    具体警告信息
  // vm     触发警告的 Vue 实例
  // trace  是组件的继承关系追踪
}

// 忽略 Vue 没有注册的元素
Vue.config.ignoredElements = {
  ’el-tip‘, // String
  '/^el-/', // RegExp : 2.5+ 支持
}

// 给 v-on 自定义键位别名
Vue.config.keyCodes = {
  myEnter: 13, // enter 的别名 - camelCase 不可用
  'my-enter': 13, // enter 的别名 - 可用
}
// <input v-on:keyup.my-enter="confirm" placeholder="按 Enter 确认" />
```