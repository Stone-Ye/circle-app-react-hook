"use strict";(self.webpackChunkcicle_app=self.webpackChunkcicle_app||[]).push([[53],{5172:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(9428),o="HeadNav_top_nav__ZUJ2B",u=n(6871),c=n(184);function l(e){var t=e.title,n=(0,u.s0)();(0,u.TH)();return(0,c.jsx)("div",{className:o,children:(0,c.jsx)(r.l2,{onBack:function(){n("/home")},children:t})})}},1053:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(3433),o=n(4942),u=n(9439),c=n(2791),l=n(9428),a=n(6871),s=n(3965),i={bodyForm:"Post_bodyForm__ft6HX"},f=n(6177),d=n(5172),m=n(184);function p(){var e=(0,a.s0)(),t=(0,c.useRef)(null),n=(0,c.useState)([]),p=(0,u.Z)(n,2),g=p[0],h=p[1],I=(0,c.useState)(!1),v=(0,u.Z)(I,2),x=v[0],S=v[1],j=(0,c.useState)(1),y=(0,u.Z)(j,2),Z=y[0],N=y[1];(0,c.useEffect)((function(){h((0,s.HC)())}),[]);return(0,m.jsxs)("div",{className:i.containerPost,children:[(0,m.jsx)(d.Z,{title:"Post"}),(0,m.jsx)("div",{className:i.bodyForm,children:(0,m.jsxs)(l.l0,{name:"form",onFinish:function(t){var n;console.log("Todo form values: ",t);var u=(n={productId:""},(0,o.Z)(n,"productId",""),(0,o.Z)(n,"imgs",[]),(0,o.Z)(n,"title",""),(0,o.Z)(n,"price",""),(0,o.Z)(n,"desc",""),(0,o.Z)(n,"seller",""),(0,o.Z)(n,"viewCount",0),n),c=(0,s.du)(),a=(0,s.vW)(),i=(0,s.yu)(),f=c.length;u.productId=f,u.category=g[Z-1].title,u.price=t.price,u.desc=t.desc,u.imgs=t.img.map((function(e){return e.url})),u.title=t.name,u.seller=a,i[a].postList.push(f),(0,s.Zv)([].concat((0,r.Z)(c),[u])),(0,s.dp)(i),l.FN.show({content:"Post product is successful",afterClose:function(){e("/home",{replace:!0})}})},footer:(0,m.jsx)(l.zx,{block:!0,type:"submit",color:"primary",size:"large",children:"\u63d0\u4ea4"}),children:[(0,m.jsx)(l.l0.Item,{name:"name",label:"ProductsName",rules:[{required:!0}],children:(0,m.jsx)(l.II,{placeholder:"productsName"})}),(0,m.jsx)(l.l0.Item,{name:"category",label:"Category",children:(0,m.jsxs)(l.Lt,{onChange:function(){return S(!0)},ref:t,children:[1!=Z?g[Z-1].title:"Sport & Hobby",(0,m.jsx)(l.Lt.Item,{title:"",children:x?(0,m.jsx)("div",{children:(0,m.jsx)(l.Ke,{activeKey:Z,onChange:function(e){return function(e,t){var n;console.log("onChangeCallback index:",t),N(t),S(!1),null===(n=e.current)||void 0===n||n.close()}(t,e)},children:g.map((function(e){return(0,m.jsx)(l.Ke.Item,{title:e.title},e.categoryId)}))})}):null},"sorter")]})}),(0,m.jsx)(l.l0.Item,{name:"price",label:"Price",rules:[{required:!0}],children:(0,m.jsx)(l.II,{placeholder:"price "})}),(0,m.jsx)(l.l0.Item,{name:"desc",label:"Description",children:(0,m.jsx)(l.Kx,{placeholder:"description "})}),(0,m.jsx)(l.l0.Item,{name:"img",label:"Upload Images",rules:[{required:!0}],children:(0,m.jsx)(l.wA,{upload:f.Q,maxCount:3,multiple:!0})})]})})]})}},3965:function(e,t,n){n.d(t,{$D:function(){return c},Ag:function(){return f},HC:function(){return d},PJ:function(){return g},YT:function(){return m},Zv:function(){return i},b4:function(){return o},dp:function(){return a},du:function(){return s},qm:function(){return u},vW:function(){return r},yS:function(){return p},yu:function(){return l}});var r=function(){return localStorage.getItem("userName")},o=function(e){return localStorage.setItem("userName",e)},u=function(){return localStorage.removeItem("userName")},c=function(){return!!r()},l=function(){return JSON.parse(localStorage.getItem("allUserInfos"))},a=function(e){return localStorage.setItem("allUserInfos",JSON.stringify(e))},s=function(){return JSON.parse(localStorage.getItem("productsData"))},i=function(e){return localStorage.setItem("productsData",JSON.stringify(e))},f=function(){return JSON.parse(localStorage.getItem("allUserInfos"))[r()]},d=function(){return JSON.parse(localStorage.getItem("categorysData"))},m=function(){return JSON.parse(localStorage.getItem("allProductCommentInfos"))},p=function(e){return localStorage.setItem("allProductCommentInfos",JSON.stringify(e))},g=function(e){return s()[e]}},6177:function(e,t,n){n.d(t,{Q:function(){return l}});var r=n(4165),o=n(5861),u=n(4569),c=n.n(u),l=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n,o,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("file",t),e.next=4,c().post("http://139.199.86.158:8100/upload/singleImage",n);case 4:return o=e.sent,console.log("res: ",o),u=o?o.data.data:"",console.log("responseUrl: ",u),e.abrupt("return",{url:u});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=53.cb865089.chunk.js.map