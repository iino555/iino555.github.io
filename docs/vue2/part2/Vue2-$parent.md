---
title: "vm.$parent"
description: "$parent 是一个只读属性，它表示当前实例的父组件实例。"
tags: ["Vue2"]
---

# $parent

## 1# 定义

在 Vue.js 中，`$parent` 是一个只读属性，允许我们访问当前组件实例的父组件实例。尽管 `$parent` 提供了访问父组件的能力，但直接使用它进行组件间通信是不推荐的，因为这会增加组件间的耦合度，从而降低代码的可维护性和可测试性。

```js
new Vue({
  el: "#app",
  data() {
    return {
      msg: "hello from parent",
    };
  },
  components: {
    "my-component": {
      template: "<p>{{ $parent.msg }}</p>",
    },
  },
});
```

## 2# 示例

为了保持组件的独立性和可复用性，我们应当优先考虑使用 `props` 进行下行数据传递，使用 `events` 进行上行事件通知，或者利用 Vuex 进行全局状态管理。

### (1) 父组件

```html
<template>  
  <div>  
    <p>我是父组件</p>  
    <child-component :message="parentMessage" @child-event="handleChildEvent"></child-component>  
  </div>  
</template>  
  
<script>  
import ChildComponent from './ChildComponent.vue';
  
export default {  
  components: {  
    ChildComponent  
  },  
  data() {  
    return {  
      parentMessage: '这是来自父组件的消息'  
    };  
  },  
  methods: {  
    handleChildEvent(payload) {  
      console.log('子组件事件被触发', payload);  
    }  
  }  
};  
</script>
```

### (2) 子组件

```html
<template>  
  <div>  
    <p>我是子组件</p>  
    <button @click="notifyParent">通知父组件</button>  
    <p>{{ message }}</p>  
  </div>  
</template>  
  
<script>  
export default {  
  props: {  
    message: {  
      type: String,  
      required: true  
    }  
  },  
  methods: {  
    notifyParent() {  
      this.$emit('child-event', '这是来自子组件的事件');  
    }  
  }  
};  
</script>
```