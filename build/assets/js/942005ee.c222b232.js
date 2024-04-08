"use strict";(self.webpackChunkiino555_github_io=self.webpackChunkiino555_github_io||[]).push([[9177],{7624:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>t,toc:()=>c});var r=s(4848),o=s(8453);const i={title:"vm.$options",description:"$options \u662f\u4e00\u4e2a\u53ea\u8bfb\u5c5e\u6027\uff0c\u5b83\u5305\u542b\u4e86\u521b\u5efa\u8be5\u5b9e\u4f8b\u65f6\u4f20\u9012\u7684\u9009\u9879\u5bf9\u8c61\u548c\u5176\u4ed6\u4e00\u4e9b\u9009\u9879\u4fe1\u606f\u3002",tags:["Vue2"]},d="$options",t={id:"vue2/part2/Vue2-$options",title:"vm.$options",description:"$options \u662f\u4e00\u4e2a\u53ea\u8bfb\u5c5e\u6027\uff0c\u5b83\u5305\u542b\u4e86\u521b\u5efa\u8be5\u5b9e\u4f8b\u65f6\u4f20\u9012\u7684\u9009\u9879\u5bf9\u8c61\u548c\u5176\u4ed6\u4e00\u4e9b\u9009\u9879\u4fe1\u606f\u3002",source:"@site/docs/vue2/part2/Vue2-$options.md",sourceDirName:"vue2/part2",slug:"/vue2/part2/Vue2-$options",permalink:"/docs/vue2/part2/Vue2-$options",draft:!1,unlisted:!1,tags:[{label:"Vue2",permalink:"/docs/tags/vue-2"}],version:"current",frontMatter:{title:"vm.$options",description:"$options \u662f\u4e00\u4e2a\u53ea\u8bfb\u5c5e\u6027\uff0c\u5b83\u5305\u542b\u4e86\u521b\u5efa\u8be5\u5b9e\u4f8b\u65f6\u4f20\u9012\u7684\u9009\u9879\u5bf9\u8c61\u548c\u5176\u4ed6\u4e00\u4e9b\u9009\u9879\u4fe1\u606f\u3002",tags:["Vue2"]},sidebar:"vue2Sidebar",previous:{title:"vm.$listeners",permalink:"/docs/vue2/part2/Vue2-$listeners"},next:{title:"vm.$parent",permalink:"/docs/vue2/part2/Vue2-$parent"}},l={},c=[{value:"1# \u5b9a\u4e49",id:"1-\u5b9a\u4e49",level:2},{value:"2# \u5c5e\u6027",id:"2-\u5c5e\u6027",level:2},{value:"(1) \u57fa\u7840\u914d\u7f6e",id:"1-\u57fa\u7840\u914d\u7f6e",level:3},{value:"(2) \u7ec4\u4ef6\u901a\u4fe1\u4e0e\u5c5e\u6027",id:"2-\u7ec4\u4ef6\u901a\u4fe1\u4e0e\u5c5e\u6027",level:3},{value:"(3) \u8ba1\u7b97\u4e0e\u65b9\u6cd5",id:"3-\u8ba1\u7b97\u4e0e\u65b9\u6cd5",level:3},{value:"(4) \u751f\u547d\u5468\u671f\u94a9\u5b50",id:"4-\u751f\u547d\u5468\u671f\u94a9\u5b50",level:3},{value:"(5) \u7ec4\u4ef6\u6ce8\u518c\u4e0e\u6269\u5c55",id:"5-\u7ec4\u4ef6\u6ce8\u518c\u4e0e\u6269\u5c55",level:3},{value:"(6) \u5176\u4ed6\u9009\u9879",id:"6-\u5176\u4ed6\u9009\u9879",level:3}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"options",children:"$options"}),"\n",(0,r.jsx)(n.h2,{id:"1-\u5b9a\u4e49",children:"1# \u5b9a\u4e49"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$options"})," \u662f Vue \u5b9e\u4f8b\u7684\u4e00\u4e2a\u53ea\u8bfb\u5c5e\u6027\uff0c\u5b83\u5305\u542b\u4e86\u521b\u5efa\u8be5\u5b9e\u4f8b\u65f6\u4f20\u9012\u7684\u9009\u9879\u5bf9\u8c61\u548c\u5176\u4ed6\u4e00\u4e9b\u9009\u9879\u4fe1\u606f\u3002\u8fd9\u4e2a\u5c5e\u6027\u63d0\u4f9b\u4e86\u5bf9 Vue \u5b9e\u4f8b\u7684\u914d\u7f6e\u9009\u9879\u7684\u76f4\u63a5\u8bbf\u95ee\u3002"]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"\u5b8c\u6574\u793a\u4f8b"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"new Vue({\n  el: '#app',\n  data() {\n    return {\n      message: 'Hello Vue!'\n    };\n  },\n  render(h) {\n    console.log(this.$options);\n    return h('div', this.message);\n  },\n  template: `<div>{{ $potions }}</div>`,\n  props: ['prop'],\n  propsData: {\n    prop: 'value'\n  },\n  provide: {\n    theme: 'dark'\n  },\n  inject: ['theme'],\n  emits: ['custom-event'],\n  computed: {\n    reversedMessage() {\n      return this.message.split('').reverse().join('');\n    }\n  },\n  methods: {\n    greet() {\n      console.log('Hello!');\n    }\n  },\n  watch: {\n    message(newValue, oldValue) {\n      console.log('Message changed:', oldValue, '->', newValue);\n    }\n  },\n  beforeCreate() {\n    console.log('beforeCreate hook');\n  },\n  created() {\n    console.log('created hook');\n  },\n  beforeMount() {\n    console.log('beforeMount hook');\n  },\n  mounted() {\n    console.log('mounted hook');\n  },\n  beforeUpdate() {\n    console.log('beforeUpdate hook');\n  },\n  updated() {\n    console.log('updated hook');\n  },\n  activated() {\n    console.log('activated hook');\n  },\n  deactivated() {\n    console.log('deactivated hook');\n  },\n  beforeDestroy() {\n    console.log('beforeDestroy hook');\n  },\n  destroyed() {\n    console.log('destroyed hook');\n  },\n  components: {\n    'my-component': {\n      template: '<div>My Component</div>'\n    }\n  },\n  directives: {\n    'my-directive': {\n      bind(el, binding) {\n        // custom directive logic\n      }\n    }\n  },\n  mixins: [],\n  extends: {},\n  filters: {},\n  name: 'MyComponent',\n  functional: false,\n  inheritAttrs: true,\n  comments: false,\n  delimiters: ['${', '}'],\n  serverPrefetch() {\n    // server prefetch logic\n  },\n  errorCaptured(err, vm, info) {\n    // error captured logic\n  }\n});\n"})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"\u5c55\u793a\u7ed3\u679c"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"{\n  activated: [\u0192]\n  beforeCreate: [\u0192]\n  beforeDestroy: [\u0192]\n  beforeMount: [\u0192]\n  beforeUpdate: [\u0192]\n  comments: false\n  components: {my-component: {\u2026}}\n  computed: {reversedMessage: \u0192}\n  created: [\u0192]\n  data: \u0192 mergedInstanceDataFn()\n  deactivated: [\u0192]\n  delimiters: (2) ['${', '}']\n  destroyed: [\u0192]\n  directives: {my-directive: {\u2026}}\n  el: \"#app\"\n  emits: ['custom-event']\n  errorCaptured: [\u0192]\n  extends: {}\n  filters: {}\n  functional: false\n  inheritAttrs: true\n  inject: {theme: {\u2026}}\n  methods: {greet: \u0192}\n  mixins: []\n  mounted: [\u0192]\n  name: \"MyComponent\"\n  props: {prop: {\u2026}}\n  propsData: {prop: 'value'}\n  provide: \u0192 mergedInstanceDataFn()\n  render: \u0192 render(h)\n  serverPrefetch: [\u0192]\n  template: \"<div>{{ $potions }}</div>\"\n  updated: [\u0192]\n  watch: {message: \u0192}\n  _base: \u0192 Vue(options)\n  _propKeys: ['prop']\n}\n"})})]}),"\n",(0,r.jsx)(n.h2,{id:"2-\u5c5e\u6027",children:"2# \u5c5e\u6027"}),"\n",(0,r.jsxs)(n.p,{children:["\u5177\u4f53\u6765\u8bf4\uff0c",(0,r.jsx)(n.code,{children:"$options"})," \u5bf9\u8c61\u5305\u542b\u4e86\u4ee5\u4e0b\u5c5e\u6027\uff1a"]}),"\n",(0,r.jsx)(n.h3,{id:"1-\u57fa\u7840\u914d\u7f6e",children:"(1) \u57fa\u7840\u914d\u7f6e"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"el"})}),": \u6302\u8f7d\u5143\u7d20\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"data"})}),": \u521d\u59cb\u6570\u636e\u5bf9\u8c61\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"template"})}),": \u6a21\u677f\u5b57\u7b26\u4e32\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"render"})}),": \u6e32\u67d3\u51fd\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"2-\u7ec4\u4ef6\u901a\u4fe1\u4e0e\u5c5e\u6027",children:"(2) \u7ec4\u4ef6\u901a\u4fe1\u4e0e\u5c5e\u6027"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"props"})}),": \u7236\u7ec4\u4ef6\u4f20\u9012\u7684\u5c5e\u6027\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"propsData"})}),": \u7528\u4e8e\u5b9e\u4f8b\u5316\u65f6\u4f20\u9012 props \u7684\u6570\u636e\u5bf9\u8c61\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"provide"})}),": \u7528\u4e8e\u5b50\u7ec4\u4ef6\u4e2d\u7684\u4f9d\u8d56\u6ce8\u5165\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"inject"})}),": \u7528\u4e8e\u5728\u5b50\u7ec4\u4ef6\u4e2d\u6ce8\u5165\u7684\u952e\u540d\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"emits"})}),": \u6307\u5b9a\u7ec4\u4ef6\u53ef\u4ee5\u89e6\u53d1\u7684\u4e8b\u4ef6\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"3-\u8ba1\u7b97\u4e0e\u65b9\u6cd5",children:"(3) \u8ba1\u7b97\u4e0e\u65b9\u6cd5"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"computed"})}),": \u8ba1\u7b97\u5c5e\u6027\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"methods"})}),": \u65b9\u6cd5\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"watch"})}),": \u4fa6\u542c\u5668\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"4-\u751f\u547d\u5468\u671f\u94a9\u5b50",children:"(4) \u751f\u547d\u5468\u671f\u94a9\u5b50"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"beforeCreate"})}),": \u5b9e\u4f8b\u521d\u59cb\u5316\u4e4b\u540e\u88ab\u8c03\u7528\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"created"})}),": \u5b9e\u4f8b\u521b\u5efa\u5b8c\u6210\u540e\u88ab\u8c03\u7528\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"beforeMount"})}),": \u6302\u8f7d\u5f00\u59cb\u4e4b\u524d\u88ab\u8c03\u7528\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"mounted"})}),": \u6302\u8f7d\u5b8c\u6210\u540e\u88ab\u8c03\u7528\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"beforeUpdate"})}),": \u6570\u636e\u66f4\u65b0\u65f6\uff0c\u6e32\u67d3\u4e4b\u524d\u88ab\u8c03\u7528\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"updated"})}),": \u6570\u636e\u66f4\u65b0\u540e\uff0c\u6e32\u67d3\u5b8c\u6210\u540e\u88ab\u8c03\u7528\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"activated"})}),": keep-alive \u7ec4\u4ef6\u6fc0\u6d3b\u65f6\u8c03\u7528\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"deactivated"})}),": keep-alive \u7ec4\u4ef6\u505c\u7528\u65f6\u8c03\u7528\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"beforeDestroy"})}),": \u5b9e\u4f8b\u9500\u6bc1\u4e4b\u524d\u8c03\u7528\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"destroyed"})}),": \u5b9e\u4f8b\u9500\u6bc1\u540e\u8c03\u7528\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"5-\u7ec4\u4ef6\u6ce8\u518c\u4e0e\u6269\u5c55",children:"(5) \u7ec4\u4ef6\u6ce8\u518c\u4e0e\u6269\u5c55"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"components"})}),": \u6ce8\u518c\u7684\u7ec4\u4ef6\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"directives"})}),": \u81ea\u5b9a\u4e49\u6307\u4ee4\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"mixins"})}),": \u6df7\u5165\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"extends"})}),": \u6269\u5c55\u5b9e\u4f8b\u5bf9\u8c61\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"filters"})}),": \u8fc7\u6ee4\u5668\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"6-\u5176\u4ed6\u9009\u9879",children:"(6) \u5176\u4ed6\u9009\u9879"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"name"})}),": \u5b9e\u4f8b\u540d\u79f0\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"functional"})}),": \u6807\u8bb0\u7ec4\u4ef6\u4e3a\u51fd\u6570\u5f0f\u7ec4\u4ef6\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"inheritAttrs"})}),": \u63a7\u5236\u7ec4\u4ef6\u662f\u5426\u7ee7\u627f\u7236\u5143\u7d20\u7684\u5c5e\u6027\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"comments"})}),": \u4fdd\u7559\u6ce8\u91ca\u7684\u914d\u7f6e\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"delimiters"})}),": \u7528\u4e8e\u6539\u53d8\u7eaf\u6587\u672c\u63d2\u5165\u5206\u9694\u7b26\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"serverPrefetch"})}),": \u670d\u52a1\u7aef\u6e32\u67d3\u671f\u95f4\u8c03\u7528\uff0c\u4e00\u822c\u7528\u4e8e\u6570\u636e\u9884\u53d6\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"errorCaptured"})}),": \u5f53\u6355\u83b7\u4e00\u4e2a\u6765\u81ea\u5b50\u5b59\u7ec4\u4ef6\u7684\u9519\u8bef\u65f6\u88ab\u8c03\u7528\u3002"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>t});var r=s(6540);const o={},i=r.createContext(o);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);