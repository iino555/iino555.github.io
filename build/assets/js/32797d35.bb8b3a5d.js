"use strict";(self.webpackChunkiino555_github_io=self.webpackChunkiino555_github_io||[]).push([[6449],{9071:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>a,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var t=i(4848),r=i(8453);const l={title:"Vue.filter",description:"\u8bed\u6cd5\uff1aVue.filter( id: String, [definition]: Function )",tags:["Vue2"]},s="Vue.filter( id, [definition] )",c={id:"vue2/part1/Vue2-Vue.filter",title:"Vue.filter",description:"\u8bed\u6cd5\uff1aVue.filter( id: String, [definition]: Function )",source:"@site/docs/vue2/part1/Vue2-Vue.filter.md",sourceDirName:"vue2/part1",slug:"/vue2/part1/Vue2-Vue.filter",permalink:"/docs/vue2/part1/Vue2-Vue.filter",draft:!1,unlisted:!1,tags:[{label:"Vue2",permalink:"/docs/tags/vue-2"}],version:"current",frontMatter:{title:"Vue.filter",description:"\u8bed\u6cd5\uff1aVue.filter( id: String, [definition]: Function )",tags:["Vue2"]},sidebar:"vue2Sidebar",previous:{title:"Vue.extend",permalink:"/docs/vue2/part1/Vue2-Vue.extend"},next:{title:"Vue.mixin",permalink:"/docs/vue2/part1/Vue2-Vue.mixin"}},d={},o=[{value:"1# \u5b9a\u4e49",id:"1-\u5b9a\u4e49",level:2},{value:"2# \u793a\u4f8b",id:"2-\u793a\u4f8b",level:2},{value:"(1) Vue.filter(id, definition: Function)",id:"1-vuefilterid-definition-function",level:3},{value:"(2) filters: Object",id:"2-filters-object",level:3}];function u(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"vuefilter-id-definition-",children:"Vue.filter( id, [definition] )"}),"\n",(0,t.jsx)(n.h2,{id:"1-\u5b9a\u4e49",children:"1# \u5b9a\u4e49"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u8bed\u6cd5"}),"\uff1a",(0,t.jsx)(n.code,{children:"Vue.filter( id: String, [definition]: Function )"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"id"}),"\uff1a\u8fc7\u6ee4\u5668\u7684\u540d\u79f0\uff0c\u4f5c\u4e3a\u5728\u6a21\u677f\u4e2d\u5f15\u7528\u8fc7\u6ee4\u5668\u7684\u6807\u8bc6\u7b26\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"definition"}),"\uff1a\u8fc7\u6ee4\u5668\u7684\u5b9e\u73b0\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u5728 ",(0,t.jsx)(n.strong,{children:"Vue3"})," \u4e2d ",(0,t.jsx)(n.code,{children:"definition"})," \u53ef\u4ee5\u662f\u4e00\u4e2a\u51fd\u6570\u6216\u5bf9\u8c61\uff0c\u800c\u5728 ",(0,t.jsx)(n.strong,{children:"Vue2"})," \u4e2d\u53ea\u80fd\u662f\u4e00\u4e2a",(0,t.jsx)(n.strong,{children:"\u51fd\u6570"}),"\u3002\u4e14\u8be5\u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u7ed1\u5b9a\u503c\uff0c\u5176\u4ed6\u53c2\u6570\u5219\u662f\u8fc7\u6ee4\u5668\u8c03\u7528\u65f6\u4f20\u9012\u7684\u53c2\u6570\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// case 1. \u4e0d\u4f20\u9012\u53c2\u6570\nVue.filter('my-filter', function (value) {\n  return value?.toUpperCase();\n});\n\n// case 2. \u4f20\u9012\u5176\u4ed6\u53c2\u6570\nVue.filter('my-filter', function (value, arg1, arg2) {\n  return value?.toUpperCase() + arg1 + arg2;\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Vue.filter"})," \u662f Vue.js \u4e2d\u7528\u4e8e\u5168\u5c40\u6ce8\u518c\u8fc7\u6ee4\u5668\u7684\u65b9\u6cd5\u3002\u8fc7\u6ee4\u5668\u53ef\u4ee5\u7528\u5728\u4e24\u4e2a\u5730\u65b9\uff1a",(0,t.jsxs)(n.strong,{children:["\u53cc\u82b1\u62ec\u53f7\u63d2\u503c\u548c ",(0,t.jsx)(n.code,{children:"v-bind"})," \u8868\u8fbe\u5f0f"]})," (\u540e\u8005\u4ece 2.1.0+ \u5f00\u59cb\u652f\u6301)\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'\x3c!-- case 1. \u76f4\u63a5\u4f7f\u7528\uff0c\u5728\u53cc\u82b1\u62ec\u53f7\u4e2d --\x3e\n<div>{{ message | my-filter }}</div>\n\n\x3c!-- case 2. \u76f4\u63a5\u4f7f\u7528\uff0c\u5728 `v-bind` \u4e2d --\x3e\n<div v-bind:msg="message | my-filter"></div>\n\n\x3c!-- case 3. \u4f20\u9012\u53c2\u6570 --\x3e\n<div>{{ message | my-filter }}</div>\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u8fc7\u6ee4\u5668\u5728Vue.js\u4e2d\u5177\u6709\u4ee5\u4e0b\u529f\u80fd\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u94fe\u5f0f\u8c03\u7528"}),"\uff1a\u53ef\u4ee5\u4e32\u8054\u591a\u4e2a\u8fc7\u6ee4\u5668\uff0c\u4f9d\u6b21\u5bf9\u6570\u636e\u8fdb\u884c\u5904\u7406\uff0c\u5f62\u6210\u64cd\u4f5c\u94fe\u3002\u5982 ",(0,t.jsx)(n.code,{children:"{{  m | f1 | f2 }}"})," \u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u63a5\u6536\u53c2\u6570"}),"\uff1a\u8fc7\u6ee4\u5668\u53ef\u4ee5\u63a5\u6536\u53c2\u6570\uff0c\u6839\u636e\u53c2\u6570\u7684\u4e0d\u540c\u6765\u5b9e\u73b0\u4e0d\u540c\u7684\u6570\u636e\u5904\u7406\u903b\u8f91\u3002\u5982  ",(0,t.jsx)(n.code,{children:"{{ m | f1('v1', 'v2')}}"})," \u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u5168\u5c40\u548c\u5c40\u90e8\u5b9a\u4e49"}),"\uff1a\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"Vue.filter"})," \u6216  ",(0,t.jsx)(n.code,{children:"filters"})," \u5728\u5168\u5c40\u8303\u56f4\u6216\u7ec4\u4ef6\u5185\u90e8\u5b9a\u4e49\u8fc7\u6ee4\u5668\uff0c\u65b9\u4fbf\u5728\u4e0d\u540c\u7ec4\u4ef6\u4e2d\u590d\u7528\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u4e0e\u6307\u4ee4\u7ed3\u5408"}),"\uff1a\u53ef\u4ee5\u4e0e\u53cc\u82b1\u62ec\u53f7\u63d2\u503c\u548c ",(0,t.jsx)(n.code,{children:"v-bind"})," \u8868\u8fbe\u5f0f\u7ed3\u5408\u4f7f\u7528\uff0c\u4ece\u800c\u5b9e\u73b0\u52a8\u6001\u5c55\u793a\u7ecf\u8fc7\u8fc7\u6ee4\u5668\u5904\u7406\u540e\u7684\u6570\u636e\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"2-\u793a\u4f8b",children:"2# \u793a\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u9a7c\u5cf0\u547d\u540d\u8fc7\u6ee4\u5668\u7684\u793a\u4f8b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<template>\n  <div id="app">\n    <el-input v-model="message" style="display: inline-block; width: 20%" />\n    <p>Original Message: {{ message }}</p>\n    <p>CamelCase Filter Result (Local): {{ message | camelCase }}</p>\n    <p>CamelCase Filter Result (Global): {{ message | camelCaseGlobal }}</p>\n  </div>\n</template>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"1-vuefilterid-definition-function",children:"(1) Vue.filter(id, definition: Function)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'// case 1. \u4f7f\u7528 Vue.filter \u5b9a\u4e49\u5168\u5c40\u8fc7\u6ee4\u5668\nVue.filter("camelCaseGlobal", function (value) {\n  if (!value) return "";\n  return value.replace(/[_\\s](\\w)/g, function (match, letter) {\n    return letter.toUpperCase();\n  });\n});\n'})}),"\n",(0,t.jsx)(n.h3,{id:"2-filters-object",children:"(2) filters: Object"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'export default {\n  data() {\n    return {\n      message: "hello_world",\n    };\n  },\n  // case 2. \u4f7f\u7528 filters \u5b9a\u4e49\u5c40\u90e8\u8fc7\u6ee4\u5668\n  filters: {\n    camelCase: function (value) {\n      if (!value) return "";\n      return value.replace(/[_\\s](\\w)/g, function (match, letter) {\n        return letter.toUpperCase();\n      });\n    },\n  },\n};\n'})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var t=i(6540);const r={},l=t.createContext(r);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);