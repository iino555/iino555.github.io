"use strict";(self.webpackChunkiino555_github_io=self.webpackChunkiino555_github_io||[]).push([[6035],{5563:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var l=t(4848),i=t(8453);const s={title:"vm.$listeners",description:"$listeners \u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5b83\u5305\u542b\u4e86\u7236\u4f5c\u7528\u57df\u4e2d\uff08\u4e0d\u542b.native\u4fee\u9970\u5668\u7684\uff09v-on\u4e8b\u4ef6\u76d1\u542c\u5668\u3002",tags:["Vue2"]},o="$listeners",c={id:"vue2/part2/Vue2-$listeners",title:"vm.$listeners",description:"$listeners \u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5b83\u5305\u542b\u4e86\u7236\u4f5c\u7528\u57df\u4e2d\uff08\u4e0d\u542b.native\u4fee\u9970\u5668\u7684\uff09v-on\u4e8b\u4ef6\u76d1\u542c\u5668\u3002",source:"@site/docs/vue2/part2/Vue2-$listeners.md",sourceDirName:"vue2/part2",slug:"/vue2/part2/Vue2-$listeners",permalink:"/docs/vue2/part2/Vue2-$listeners",draft:!1,unlisted:!1,tags:[{label:"Vue2",permalink:"/docs/tags/vue-2"}],version:"current",frontMatter:{title:"vm.$listeners",description:"$listeners \u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5b83\u5305\u542b\u4e86\u7236\u4f5c\u7528\u57df\u4e2d\uff08\u4e0d\u542b.native\u4fee\u9970\u5668\u7684\uff09v-on\u4e8b\u4ef6\u76d1\u542c\u5668\u3002",tags:["Vue2"]},sidebar:"vue2Sidebar",previous:{title:"vm.$isServer",permalink:"/docs/vue2/part2/Vue2-$isServer"},next:{title:"vm.$options",permalink:"/docs/vue2/part2/Vue2-$options"}},r={},d=[{value:"1# \u5b9a\u4e49",id:"1-\u5b9a\u4e49",level:2},{value:"2# \u793a\u4f8b",id:"2-\u793a\u4f8b",level:2},{value:"(1) \u5b50\u7ec4\u4ef6",id:"1-\u5b50\u7ec4\u4ef6",level:3},{value:"(2) \u7236\u7ec4\u4ef6",id:"2-\u7236\u7ec4\u4ef6",level:3},{value:"3# \u5173\u952e\u70b9",id:"3-\u5173\u952e\u70b9",level:2},{value:"(1) \u5c5e\u6027\u6765\u6e90",id:"1-\u5c5e\u6027\u6765\u6e90",level:3},{value:"(2) \u5c5e\u6027\u7ee7\u627f",id:"2-\u5c5e\u6027\u7ee7\u627f",level:3}];function a(n){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"listeners",children:"$listeners"}),"\n",(0,l.jsx)(e.h2,{id:"1-\u5b9a\u4e49",children:"1# \u5b9a\u4e49"}),"\n",(0,l.jsxs)(e.p,{children:["\u5728Vue.js\u4e2d\uff0c",(0,l.jsx)(e.code,{children:"$listeners"})," \u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5b83\u5305\u542b\u4e86\u7236\u4f5c\u7528\u57df\u4e2d\uff08\u4e0d\u542b",(0,l.jsx)(e.code,{children:".native"}),"\u4fee\u9970\u5668\u7684\uff09",(0,l.jsx)(e.code,{children:"v-on"}),"\u4e8b\u4ef6\u76d1\u542c\u5668\u3002\u5b83\u53ef\u4ee5\u7528\u5728\u5b50\u7ec4\u4ef6\u5185\u90e8\uff0c\u4ee5\u76d1\u542c\u5728\u7236\u7ec4\u4ef6\u4e0a\u5b9a\u4e49\u7684\u4e8b\u4ef6\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u5f53\u4f60\u5728\u7236\u7ec4\u4ef6\u4e2d\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"v-on"})," \u6216\u8005 ",(0,l.jsx)(e.code,{children:"@"})," \u6765\u76d1\u542c\u4e00\u4e2a\u4e8b\u4ef6\u65f6\uff0c\u5982\u679c\u8fd9\u4e2a\u4e8b\u4ef6",(0,l.jsx)(e.strong,{children:"\u6ca1\u6709"}),"\u5728\u5b50\u7ec4\u4ef6\u4e2d\u901a\u8fc7 ",(0,l.jsx)(e.code,{children:"props"})," \u660e\u786e\u58f0\u660e\u4e3a\u81ea\u5b9a\u4e49\u4e8b\u4ef6\uff08\u5373\u4e0d\u662f\u5b50\u7ec4\u4ef6\u901a\u8fc7 ",(0,l.jsx)(e.code,{children:"$emit"})," \u89e6\u53d1\u7684\u4e8b\u4ef6\uff09\uff0c\u90a3\u4e48\u8fd9\u4e2a\u4e8b\u4ef6\u76d1\u542c\u5668\u5c31\u4f1a\u88ab\u5305\u542b\u5728\u5b50\u7ec4\u4ef6\u7684",(0,l.jsx)(e.code,{children:"$listeners"}),"\u5bf9\u8c61\u4e2d\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"2-\u793a\u4f8b",children:"2# \u793a\u4f8b"}),"\n",(0,l.jsx)(e.h3,{id:"1-\u5b50\u7ec4\u4ef6",children:"(1) \u5b50\u7ec4\u4ef6"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"// \u5b50\u7ec4\u4ef6\nconst ChildComponent = {\n  template: `\n    <div>\n      <button @click=\"$emit('click')\">Click me</button>\n      <button @click=\"$emit('custom-event')\">Click me</button>\n    <div>\n  `,\n  mounted() {\n    console.log(this.$listeners);\n    /* \u8f93\u51fa\uff1a\n    {\n      click: \u0192 invoker()\n      custom-event: \u0192 invoker()\n    }\n    */\n  },\n};\n"})}),"\n",(0,l.jsx)(e.h3,{id:"2-\u7236\u7ec4\u4ef6",children:"(2) \u7236\u7ec4\u4ef6"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:'// \u7236\u7ec4\u4ef6\nnew Vue({\n  el: "#app",\n  components: {\n    "child-component": ChildComponent,\n  },\n  template: `\n  <child-component \n    @click="handleClick" \n    @custom-event="handleCustomEvent" \n  ></child-component>`,\n  methods: {\n    // \u4ec5 click \u4e8b\u4ef6\u88ab\u8c03\u7528\n    handleClick() {\n      console.log("handleClick in parent");\n    },\n    handleCustomEvent() {\n      console.log("handleCustomEvent in parent");\n    },\n  },\n});\n'})}),"\n",(0,l.jsx)(e.h2,{id:"3-\u5173\u952e\u70b9",children:"3# \u5173\u952e\u70b9"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u5c5e\u6027\u6765\u6e90"}),"\uff1a",(0,l.jsx)(e.code,{children:"$listeners"})," \u5305\u542b\u4e86\u7236\u7ec4\u4ef6\u4e2d\uff08\u4e0d\u542b ",(0,l.jsx)(e.code,{children:".native"})," \u4fee\u9970\u5668\u7684\uff09\u6240\u6709\u901a\u8fc7 ",(0,l.jsx)(e.code,{children:"v-on"})," \u6216 ",(0,l.jsx)(e.code,{children:"@"})," \u7ed1\u5b9a\u7684\u4e8b\u4ef6\u76d1\u542c\u5668\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u5c5e\u6027\u7ee7\u627f"}),"\uff1a\u901a\u8fc7 ",(0,l.jsx)(e.code,{children:'v-on="$listeners"'})," \u53ef\u4ee5\u4e00\u6b21\u6027\u5730\u5c06\u8fd9\u4e9b\u4e8b\u4ef6\u76d1\u542c\u5668\u7ed1\u5b9a\u5230\u5b50\u7ec4\u4ef6\u7684\u5143\u7d20\u4e0a\uff0c\u907f\u514d\u4e86\u9010\u4e2a\u624b\u52a8\u7ed1\u5b9a\u7684\u7e41\u7410\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"1-\u5c5e\u6027\u6765\u6e90",children:"(1) \u5c5e\u6027\u6765\u6e90"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:'// \u5b50\u7ec4\u4ef6\nconst ChildComponent = {\n  template: `<p>{{ Object.keys($listeners) }}</p>`,\n  mounted() {\n    console.log(this.$listeners);\n    /* \u8f93\u51fa\uff1a\n    {\n      event-a: \u0192 invoker()\n      event-b: \u0192 invoker()\n    }\n    */\n  },\n};\n// \u7236\u7ec4\u4ef6\nnew Vue({\n  el: "#app",\n  components: {\n    "child-component": ChildComponent,\n  },\n  template: `\n    <child-component \n      @click.native="handleEvent"\n      v-on:event-a="handleEvent"\n      @event-b="handleEvent"\n    ></child-component>`,\n  methods: {\n    handleEvent() {\n      console.log("handleEvent in parent");\n    },\n  },\n});\n'})}),"\n",(0,l.jsx)(e.h3,{id:"2-\u5c5e\u6027\u7ee7\u627f",children:"(2) \u5c5e\u6027\u7ee7\u627f"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:'// \u5b50\u7ec4\u4ef6\nconst ChildComponent = {\n  template: `<grandchild-component v-on="$listeners"></grandchild-component>`,\n  mounted() {\n    console.log(this.$listeners);\n    /* \u8f93\u51fa\uff1a\n    {\n    event-a: \u0192 invoker()\n    event-b: \u0192 invoker()\n    }\n    */\n  },\n  components: {\n    // \u5b59\u5b50\u7ec4\u4ef6\n    "grandchild-component": {\n      template: `\n      <div>\n        <button @click="$emit(\'event-a\')">trigger event-a</button>\n        <button @click="$emit(\'event-b\')">trigger event-b</button>\n      </div>`,\n    },\n  },\n};\n\n// \u7236\u7ec4\u4ef6\nnew Vue({\n  el: "#app",\n  components: {\n    "child-component": ChildComponent,\n  },\n  template: `\n  <child-component \n    @event-a="handleEventA" \n    @event-b="handleEventB">\n  </child-component>`,\n  methods: {\n    handleEventA() {\n      console.log("handleEventA in parent");\n    },\n    handleEventB() {\n      console.log("handleEventB in parent");\n    },\n  },\n});\n'})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u6ce8\u610f"}),"\uff1a\u5728 Vue2 \u4e2d\uff0c",(0,l.jsx)(e.code,{children:"$attrs"})," \u4e3b\u8981\u7528\u4e8e\u4f20\u9012\u7236\u7ec4\u4ef6\u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6\u7684\u5c5e\u6027\uff0c\u800c ",(0,l.jsx)(e.code,{children:"$listeners"})," \u4e13\u95e8\u7528\u4e8e\u4f20\u9012\u7236\u7ec4\u4ef6\u4e2d\u6ce8\u518c\u7684\u4e8b\u4ef6\u76d1\u542c\u5668\u7ed9\u5b50\u7ec4\u4ef6\u3002\u7136\u800c\uff0c\u5728 Vue3\u4e2d\uff0c",(0,l.jsx)(e.code,{children:"$listeners"})," \u5df2\u88ab\u5e9f\u5f03\uff0c\u53d6\u800c\u4ee3\u4e4b\u7684\u662f\u901a\u8fc7",(0,l.jsx)(e.code,{children:'v-on="$attrs"'}),"\u6765\u540c\u65f6\u4f20\u9012\u5c5e\u6027\u548c\u4e8b\u4ef6\u76d1\u542c\u5668\u3002"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(a,{...n})}):a(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>c});var l=t(6540);const i={},s=l.createContext(i);function o(n){const e=l.useContext(s);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),l.createElement(s.Provider,{value:e},n.children)}}}]);