---
title: "Vue.set"
description: "语法：Vue.set( target: Object | Array, property: String | Number, value: any )"
tags: ["Vue2"]
---

#  Vue.set( target, property, value )

## 1# 定义

**语法**：`Vue.set( target: Object | Array, property: String | Number, value: any )`

`Vue.set(target, property, value)` 是 Vue.js 提供的一个方法，用于在 Vue 实例的响应式对象中添加新的  property ，并确保新  property  也是响应式的，从而触发视图更新。它必须用于向响应式对象上添加新 property，因为 Vue 无法探测普通的新增 property ，比如 `this.obj.newProperty = 'hi'`。 

- `target: { Object | Array }`：要添加属性的目标对象或数组。
- `property: { String | Number }`：要添加的属性的名称或者数组的索引。
- `value: { any }`：要设置的值。

>  **注意**：对象不能是 Vue 实例，或者 Vue 实例的根数据对象。 

```js
// 错误示例：向 Vue 实例添加新属性
new Vue({
  data: {
    message: 'Hello'
  },
  created() {
    // 这里会导致警告，并且不会触发视图更新
    // [Vue warn]: Avoid adding reactive properties to a Vue instance 
    //             or its root $data at runtime
    Vue.set(this, 'newProperty', 'Vue');
  }
})
```

## 2# 示例

### (1) Vue.set(object, property, value)

```js
new Vue({
  data: {
    obj: {
      message: "Hello",
    },
  },
  created() {
    console.log(this.obj);
    // 输出：{ message: 'Hello', newProperty: 'Vue', newProperty2: 'Vue2' }
    // 由于 log 打印的是对象 this.obj 的引用，因此输出的是修改后的对象内容

    // 使用对象拷贝的方式打印数据
    const objBeforeSet = JSON.stringify(this.obj);
    console.log(JSON.parse(objBeforeSet)); // 输出 Vue.set 之前的属性
    // 输出：{ message: 'Hello' }

    // 使用 Vue.set 添加新属性
    Vue.set(this.obj, "newProperty", "Vue");
    const objAfterVueSet = JSON.stringify(this.obj);
    console.log(JSON.parse(objAfterVueSet)); // 输出 Vue.set 之后的属性
    // 输出：{ message: 'Hello', newProperty: 'Vue' }

    // 使用 this.$set 添加新属性
    this.$set(this.obj, "newProperty2", "Vue2");
    const objAfterThisSet = JSON.stringify(this.obj);
    console.log(JSON.parse(objAfterThisSet)); // 输出 this.$set 之后的属性
    // 输出：{ message: 'Hello', newProperty: 'Vue', newProperty2: 'Vue2' }
  },
});
```

### (2) Vue.set(array, index, value)

```js
// case 2. 向数组添加新属性
new Vue({
  data: {
    arr: ["a", "b", "c"],
  },
  created() {
    console.log(this.arr); // 输出: ['a', 'b', 'c']

    // 使用 Vue.set 添加新属性
    Vue.set(this.arr, 3, "d");
    console.log(this.arr); // 输出: ['a', 'b', 'c', 'd']

    // 使用 this.$set 添加新属性
    this.$set(this.arr, 4, "e");
    console.log(this.arr); // 输出: ['a', 'b', 'c', 'd', 'e']
  },
});
```