---
title: "Vue.delete"
description: "语法：Vue.delete(target: Object | Array, property: String | Number)"
tags: ["Vue2"]
---

# Vue.delete( target, property )

## 1# 定义

**语法**：`Vue.delete(target: Object | Array, property: String | Number)`

`Vue.delete(target, property)` 方法用于删除对象的属性，确保删除操作能触发视图更新。在 Vue.js 2.2.0+ 版本中还支持在数组上使用索引进行删除操作。 这个方法主要用于解决 Vue 不能检测到属性被删除的限制。

- `target: { Object | Array }`：要删除属性的目标对象或数组。
- `property: { String | Number }`：要删除的属性的名称或者数组的索引。

> **注意**：目标对象不能是一个 Vue 实例或 Vue 实例的根数据对象。 

```js
// 错误示例：对 Vue 实例删除属性
new Vue({
  data: {
    message: "Hello, Vue!",
  },
  created() {
    // 这里会导致警告，并且不会触发视图更新
    // [Vue warn]: Avoid deleting properties on a Vue instance
    //             or its root $data - just set it to null.
    Vue.delete(this, "message");
  },
});
```

## 2# 示例

在这个示例中，演示使用 `Vue.delete` 和 `this.$delete` 方法来删除对象属性，并触发视图的相应更新。在 Vue 实例的 `data` 中定义了一个名为 `user` 的对象，其中包含 `name` 和 `age` 两个属性，以及一个 `hobbies` 数组。在 `mounted` 钩子函数中，通过定时器分别调用 `Vue.delete` 和 `this.$delete` 来删除 `user` 对象中的属性，以此验证当数据发生变化时，视图会进行相应的更新。 

```js
new Vue({
  el: "#app",
  data: {
    index: 0,
    user: {
      name: "Alice",
      age: 25,
      hobbies: ["Coding", "Swimming", "Reading"],
    },
  },
  mounted() {
    const deleteOperations = [
      () => Vue.delete(this.user, "age"), // 删除属性 age
      () => this.$delete(this.user, "name"), // 删除属性 name
      () => Vue.delete(this.user.hobbies, 1), // 删除数组 hobbies 的第一个元素
      () => this.$delete(this.user.hobbies, 1), // 再次删除数组 hobbies 的第一个元素
    ];
    let t = setInterval(() => {
      if (this.index < deleteOperations.length) {
        deleteOperations[this.index].call(this); // 确保箭头函数上下文
        this.index += 1;
      } else {
        clearInterval(t);
      }
    }, 2000);
  },
  render(h) {
    return h("div", [
      h("h2", "User:"),
      this.user.name ? h("p", "Name: " + this.user.name) : null,
      this.user.age ? h("p", "Age: " + this.user.age) : null,
      h("p", "Hobbies:"),
      h("ul", this.user.hobbies.map((hobby) => h("li", hobby))),
    ]);
  },
});
```