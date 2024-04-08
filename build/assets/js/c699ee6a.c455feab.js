"use strict";(self.webpackChunkiino555_github_io=self.webpackChunkiino555_github_io||[]).push([[2763],{2891:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>i});var t=s(4848),o=s(8453);const l={title:"vm.$slots",description:"$slots \u662f\u4e00\u4e2a\u53ea\u8bfb\u5c5e\u6027\uff0c\u5b83\u63d0\u4f9b\u4e86\u5bf9\u7ec4\u4ef6\u4e2d\u9ed8\u8ba4\u63d2\u69fd\u4e0e\u5177\u540d\u63d2\u69fd\u5185\u5bb9\u7684\u8bbf\u95ee\u3002",tags:["Vue2"]},c="$slots",r={id:"vue2/part2/Vue2-$slots",title:"vm.$slots",description:"$slots \u662f\u4e00\u4e2a\u53ea\u8bfb\u5c5e\u6027\uff0c\u5b83\u63d0\u4f9b\u4e86\u5bf9\u7ec4\u4ef6\u4e2d\u9ed8\u8ba4\u63d2\u69fd\u4e0e\u5177\u540d\u63d2\u69fd\u5185\u5bb9\u7684\u8bbf\u95ee\u3002",source:"@site/docs/vue2/part2/Vue2-$slots.md",sourceDirName:"vue2/part2",slug:"/vue2/part2/Vue2-$slots",permalink:"/docs/vue2/part2/Vue2-$slots",draft:!1,unlisted:!1,tags:[{label:"Vue2",permalink:"/docs/tags/vue-2"}],version:"current",frontMatter:{title:"vm.$slots",description:"$slots \u662f\u4e00\u4e2a\u53ea\u8bfb\u5c5e\u6027\uff0c\u5b83\u63d0\u4f9b\u4e86\u5bf9\u7ec4\u4ef6\u4e2d\u9ed8\u8ba4\u63d2\u69fd\u4e0e\u5177\u540d\u63d2\u69fd\u5185\u5bb9\u7684\u8bbf\u95ee\u3002",tags:["Vue2"]},sidebar:"vue2Sidebar",previous:{title:"vm.$scopedSlots",permalink:"/docs/vue2/part2/Vue2-$scopedSlots"}},d={},i=[{value:"1# \u5b9a\u4e49",id:"1-\u5b9a\u4e49",level:2},{value:"2# \u793a\u4f8b",id:"2-\u793a\u4f8b",level:2},{value:"(1) \u7236\u7ec4\u4ef6",id:"1-\u7236\u7ec4\u4ef6",level:3},{value:"(2) \u5b50\u7ec4\u4ef6",id:"2-\u5b50\u7ec4\u4ef6",level:3}];function u(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"slots",children:"$slots"}),"\n",(0,t.jsx)(n.h2,{id:"1-\u5b9a\u4e49",children:"1# \u5b9a\u4e49"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"$slots"})," \u662f\u4e00\u4e2a\u7ec4\u4ef6\u5b9e\u4f8b\u7684\u5c5e\u6027\uff0c\u5b83\u63d0\u4f9b\u4e86\u5bf9\u7ec4\u4ef6\u4e2d\u9ed8\u8ba4\u63d2\u69fd\u4e0e\u5177\u540d\u63d2\u69fd\u5185\u5bb9\u7684\u8bbf\u95ee\u3002\u5728 Vue.js \u4e2d\uff0c",(0,t.jsx)(n.code,{children:"$slots"})," \u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5176\u952e\u662f\u63d2\u69fd\u7684\u540d\u5b57\uff08\u5b57\u7b26\u4e32\u7c7b\u578b\uff09\uff0c\u503c\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u5305\u542b\u4e86\u6240\u6709\u63d2\u5165\u5230\u8be5\u63d2\u69fd\u7684\u865a\u62df\u8282\u70b9 ",(0,t.jsx)(n.strong,{children:"VNode"}),"\u3002\u5982\u679c\u6ca1\u6709\u7ed9\u63d2\u69fd\u6307\u5b9a\u540d\u5b57\uff0c\u90a3\u4e48\u8fd9\u4e9b\u8282\u70b9\u4f1a\u88ab\u653e\u5728 ",(0,t.jsx)(n.code,{children:"$slots.default"})," \u4e2d\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"2-\u793a\u4f8b",children:"2# \u793a\u4f8b"}),"\n",(0,t.jsx)(n.h3,{id:"1-\u7236\u7ec4\u4ef6",children:"(1) \u7236\u7ec4\u4ef6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'new Vue({\n    el: "#app",\n    template: `\n    <div>\n      <my-component>\n        \x3c!-- \u9ed8\u8ba4\u63d2\u69fd\u5185\u5bb9 --\x3e\n        <p>\u9ed8\u8ba4\u63d2\u69fd\u7684\u5185\u5bb9</p>\n\n        \x3c!-- \u5177\u540d\u63d2\u69fd namedSlot --\x3e\n        <template v-slot:namedSlot>\n          <p>\u5177\u540d\u63d2\u69fd\u7684\u5185\u5bb9</p>\n        </template>\n\n        \x3c!-- \u4f5c\u7528\u57df\u63d2\u69fd scopedSlot --\x3e\n        <template v-slot:scopedSlot="{ user }">\n          <p>\u4f5c\u7528\u57df\u63d2\u69fd\u7684\u5185\u5bb9 {{ user }}</p>\n        </template>\n      </my-component>\n    </div>\n  `,\n});\n'})}),"\n",(0,t.jsx)(n.h3,{id:"2-\u5b50\u7ec4\u4ef6",children:"(2) \u5b50\u7ec4\u4ef6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'Vue.component("my-component", {  \n  data() {  \n    return {  \n      user: {  \n        name: "lee",  \n        age: 27,  \n      },  \n    };  \n  },  \n  mounted() {  \n    console.log("\u9ed8\u8ba4\u63d2\u69fd:", this.$slots.default); // \u8bbf\u95ee\u9ed8\u8ba4\u63d2\u69fd\n    console.log("\u5177\u540d\u63d2\u69fd:", this.$slots.namedSlot); // \u8bbf\u95ee\u5177\u540d\u63d2\u69fd\n    console.log("\u4f5c\u7528\u57df\u63d2\u69fd:", this.$scopedSlots.scopedSlot); // \u8bbf\u95ee\u4f5c\u7528\u57df\u63d2\u69fd\n  },  \n  template: `  \n    <div>  \n      \x3c!-- \u9ed8\u8ba4\u63d2\u69fd --\x3e  \n      <slot></slot>  \n  \n      \x3c!-- \u5177\u540d\u63d2\u69fd --\x3e  \n      <slot name="namedSlot"></slot>  \n  \n      \x3c!-- \u4f5c\u7528\u57df\u63d2\u69fd --\x3e  \n      <slot name="scopedSlot" :user="user"></slot>  \n    </div>  \n  `,  \n});\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u6ce8\u610f"}),"\uff1a\u5bf9\u4e8e Vue2 \u4e2d\u7684\u63d2\u69fd\uff0c",(0,t.jsx)(n.code,{children:"this.$slots"})," \u7528\u4e8e\u8bbf\u95ee\u9ed8\u8ba4\u63d2\u69fd\u548c\u5177\u540d\u63d2\u69fd\uff0c\u800c ",(0,t.jsx)(n.code,{children:"this.$scopedSlots"})," \u7528\u4e8e\u8bbf\u95ee\u4f5c\u7528\u57df\u63d2\u69fd\u3002\u8fd9\u662f\u56e0\u4e3a\u5728 Vue 2.x \u4e2d\uff0c\u4f5c\u7528\u57df\u63d2\u69fd\u88ab\u7279\u6b8a\u5904\u7406\uff0c\u5141\u8bb8\u5b50\u7ec4\u4ef6\u5411\u7236\u7ec4\u4ef6\u7684\u63d2\u69fd\u5185\u5bb9\u4f20\u9012\u6570\u636e\u3002\u800c\u5728 Vue3 \u4e2d\uff0c",(0,t.jsx)(n.code,{children:"this.$scopedSlots"})," \u5df2\u7ecf\u88ab\u79fb\u9664\uff0c\u53d6\u800c\u4ee3\u4e4b\u7684\u662f\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"this.$slots"})," \u6765\u8bbf\u95ee\u6240\u6709\u7c7b\u578b\u7684\u63d2\u69fd\uff0c\u5305\u62ec\u4f5c\u7528\u57df\u63d2\u69fd\u3002"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>r});var t=s(6540);const o={},l=t.createContext(o);function c(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);