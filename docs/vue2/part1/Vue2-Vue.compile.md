---
title: "Vue.compile"
description: "语法：Vue.compile( template: String )"
tags: ["Vue2"]
---

# Vue.compile( template )

## 1# 定义

**语法**：`Vue.compile( template: String )`

`Vue.compile` 函数将字符串形式的模板编译为可复用的渲染函数，实现了在运行时动态生成模板并进行渲染的功能。当渲染函数 `render` 被调用时，会返回一个虚拟DOM树，Vue会将其转换为真实的 DOM 并呈现在页面上。静态渲染函数 `staticRenderFns` 则用于处理模板中没有动态绑定的部分，以提升性能。

## 2# 示例

### (1) 字符串模板渲染

在这个示例中，使用 `Vue.compile()` 的编译功能来将模板字符串编译为渲染函数和静态渲染函数。

```
 <!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8" />
     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <title>Vue CDN Example</title>
     <!-- 引入 Vue.js 的 CDN 文件 -->
     <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
 </head>
 <body>
     <div id="app"></div>
 ​
     <script>
         // 定义模板字符串
         const template = "<div>{{ msg }}</div>";
         
         // 编译模板字符串，获取渲染函数和静态渲染函数
         const { render, staticRenderFns } = Vue.compile(template);
         
         // 创建 Vue 实例并挂载到 #app 元素上
         new Vue({
             // 数据
             data: {
                 msg: "Hello, Vue!",
             },
             // 渲染函数
             render: render,
             // 静态渲染函数
             staticRenderFns: staticRenderFns,
         }).$mount("#app");
     </script>
 </body>
 </html>
```

### (2) 动态模板渲染

这个示例中，创建了一个包含 `input` 输入框和 `div` 元素的页面。通过监听输入框的输入事件，在动态修改模板内容后，利用`Vue.compile()`编译模板，并利用`$forceUpdate()`方法实时更新视图显示。

```
 <body>
     <input type="text" />
     <div id="app"></div>
     <script>
         let template = "<div>{{ msg }}</div>";
         const { render, staticRenderFns } = Vue.compile(template);
 ​
         let app = new Vue({
             data: {
                 msg: "Hello, Vue!",
             },
             render: render,
             staticRenderFns: staticRenderFns,
         }).$mount("#app");
 ​
         // 监听输入框的输入事件，动态修改模板的内容
         let input = document.getElementsByTagName("input")[0];
         input.addEventListener("input", function () {
             // 更新模板中的内容
             template = "<div>{{ msg }}--" + input.value + "</div>";
 ​
             // 重新调用 Vue.compile 函数进行编译
             let { render, staticRenderFns } = Vue.compile(template);
 ​
             // 更新Vue实例的渲染函数和静态渲染函数
             app.$options.render = render;
             app.$options.staticRenderFns = staticRenderFns;
 ​
             // 强制重渲染
             app.$forceUpdate();
         });
     </script>
 </body>
```