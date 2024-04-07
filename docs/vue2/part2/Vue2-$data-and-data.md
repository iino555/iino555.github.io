---
title: "vm.$data-and-data"
description: "$data 是一个属性，它表示 Vue 实例中数据对象的根，即 data 选项中定义的数据。"
tags: ["Vue2"]
---

# $data-and-data

## 1# data

在 Vue.js 中创建 Vue 实例时，Vue 会递归地将 `data` 对象的属性转换为 `getter/setter`，以便实现数据的响应式变化。

```js
var vm = new Vue({
  data: {
    name: "lee",
  },
  created() {
    // data 中的属性会自动被 Vue 实例代理
    // 并转换成相应的 getter/setter
    console.log(this.$data);
    /*
    name: "lee"
    get name: ƒ reactiveGetter()
    set name: ƒ reactiveSetter(newVal)
    */
  },
});
console.log(vm.$data);
/*
name: "lee"
get name: ƒ reactiveGetter()
set name: ƒ reactiveSetter(newVal)
*/
```

## 2# $data

在 Vue.js 中，`$data` 是一个属性，它表示 Vue 实例中数据对象的根，即 `data` 选项中定义的数据。当你在 Vue 实例中定义了 `data` 属性时，Vue.js 会将这些属性合并到 `$data` 对象中，并且 `$data` 对象的属性会变成响应式的，即当这些属性的值发生变化时，Vue.js 会自动更新相关的视图。
