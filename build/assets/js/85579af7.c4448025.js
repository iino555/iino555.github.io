"use strict";(self.webpackChunkiino555_github_io=self.webpackChunkiino555_github_io||[]).push([[3653],{1599:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>s,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var i=t(4848),c=t(8453);const d={title:"vm.$children",description:"$children \u662f\u4e00\u4e2a\u53ea\u8bfb\u5c5e\u6027\uff0c\u5b83\u8868\u793a\u5f53\u524d\u5b9e\u4f8b\u7684\u76f4\u63a5\u5b50\u7ec4\u4ef6\u3002",tags:["Vue2"]},a="$children",l={id:"vue2/part2/Vue2-$children",title:"vm.$children",description:"$children \u662f\u4e00\u4e2a\u53ea\u8bfb\u5c5e\u6027\uff0c\u5b83\u8868\u793a\u5f53\u524d\u5b9e\u4f8b\u7684\u76f4\u63a5\u5b50\u7ec4\u4ef6\u3002",source:"@site/docs/vue2/part2/Vue2-$children.md",sourceDirName:"vue2/part2",slug:"/vue2/part2/Vue2-$children",permalink:"/docs/vue2/part2/Vue2-$children",draft:!1,unlisted:!1,tags:[{label:"Vue2",permalink:"/docs/tags/vue-2"}],version:"current",frontMatter:{title:"vm.$children",description:"$children \u662f\u4e00\u4e2a\u53ea\u8bfb\u5c5e\u6027\uff0c\u5b83\u8868\u793a\u5f53\u524d\u5b9e\u4f8b\u7684\u76f4\u63a5\u5b50\u7ec4\u4ef6\u3002",tags:["Vue2"]},sidebar:"vue2Sidebar",previous:{title:"vm.$attrs",permalink:"/docs/vue2/part2/Vue2-$attrs"},next:{title:"vm.$data-and-data",permalink:"/docs/vue2/part2/Vue2-$data-and-data"}},r={},o=[{value:"1# \u5b9a\u4e49",id:"1-\u5b9a\u4e49",level:2},{value:"2# \u793a\u4f8b",id:"2-\u793a\u4f8b",level:2}];function h(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"children",children:"$children"}),"\n",(0,i.jsx)(e.h2,{id:"1-\u5b9a\u4e49",children:"1# \u5b9a\u4e49"}),"\n",(0,i.jsxs)(e.p,{children:["\u5728 Vue.js \u4e2d\uff0c",(0,i.jsx)(e.code,{children:"$children"})," \u662f Vue \u5b9e\u4f8b\u7684\u4e00\u4e2a\u5c5e\u6027\uff0c\u7528\u4e8e\u8bbf\u95ee\u5f53\u524d\u5b9e\u4f8b\u7684\u76f4\u63a5\u5b50\u7ec4\u4ef6\u3002\u5b83\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u5305\u542b\u4e86\u5f53\u524d\u5b9e\u4f8b\u7684\u6240\u6709\u76f4\u63a5\u5b50\u7ec4\u4ef6\u5b9e\u4f8b\u3002\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"$children"})," \u5c5e\u6027\u53ef\u4ee5\u8bbf\u95ee\u5f53\u524d\u5b9e\u4f8b\u7684\u6240\u6709\u76f4\u63a5\u5b50\u7ec4\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u904d\u5386 ",(0,i.jsx)(e.code,{children:"$children"})," \u6570\u7ec4\u6765\u64cd\u4f5c\u6216\u8bbf\u95ee\u6bcf\u4e2a\u5b50\u7ec4\u4ef6\u5b9e\u4f8b\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"2-\u793a\u4f8b",children:"2# \u793a\u4f8b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'// \u6839\u5b9e\u4f8b\nnew Vue({\n  el: "#app",\n  data() {\n    return {\n      childDataList: null,\n    };\n  },\n  methods: {\n    showChildDataByProp() {\n      this.childDataList = this.$children.map(\n        (child, index) => `\u8bbf\u95ee\u5b50\u7ec4\u4ef6 ${index + 1} \u7684\u5c5e\u6027: ${child.childData}`\n      );\n    },\n    showChildDataByFunc() {\n      this.childDataList = this.$children.map(\n        (child, index) => `\u8c03\u7528\u5b50\u7ec4\u4ef6 ${index + 1} \u7684\u65b9\u6cd5: ${child.getChildData()}`\n      );\n    },\n  },\n  template: `  \n  <div>  \n    <child-component></child-component>\n    <child-component></child-component>\n    <button @click="showChildDataByProp()">\u4f7f\u7528 $children \u8bbf\u95ee\u5c5e\u6027</button>\n    <button @click="showChildDataByFunc()">\u4f7f\u7528 $children \u8bbf\u95ee\u65b9\u6cd5</button>\n    <p v-if="childDataList">childDataList: {{ childDataList }}</p>\n  </div>\n  `,\n  components: {\n    // \u5b50\u7ec4\u4ef6\n    "child-component": {\n      data() {\n        return {\n          childData: "hello from child component",\n        };\n      },\n      methods: {\n        getChildData() {\n          return this.childData + "2";\n        },\n      },\n      template: `<p>\u5b50\u7ec4\u4ef6\u5c5e\u6027\uff1a{{ childData }}</p>`,\n    },\n  },\n});\n'})})]})}function s(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>l});var i=t(6540);const c={},d=i.createContext(c);function a(n){const e=i.useContext(d);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:a(n.components),i.createElement(d.Provider,{value:e},n.children)}}}]);