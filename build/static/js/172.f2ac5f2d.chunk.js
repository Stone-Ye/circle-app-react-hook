"use strict";(self.webpackChunkcicle_app=self.webpackChunkcicle_app||[]).push([[172],{5172:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(9428),s="HeadNav_top_nav__ZUJ2B",a=n(6871),l=n(184);function o(e){var t=e.title,n=(0,a.s0)();(0,a.TH)();return(0,l.jsx)("div",{className:s,children:(0,l.jsx)(r.l2,{onBack:function(){n("/home")},children:t})})}},6172:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(9439),s=n(2791),a=n(6871),l={container:"MessageDetails_container__Hygys",leftMessage:"MessageDetails_leftMessage__p8cwu",rightMessage:"MessageDetails_rightMessage__5u9gd",avatar:"MessageDetails_avatar__R-RT4",sendMessage:"MessageDetails_sendMessage__Qn+PJ"},o=n(3965);var i=function(e){return s.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),s.createElement("g",{id:"AddCircleOutline-AddCircleOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},s.createElement("g",{id:"AddCircleOutline-\u7f16\u7ec4"},s.createElement("rect",{id:"AddCircleOutline-\u77e9\u5f62",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),s.createElement("path",{d:"M24,2 C36.1502645,2 46,11.8497355 46,24 C46,36.1502645 36.1502645,46 24,46 C11.8497355,46 2,36.1502645 2,24 C2,11.8497355 11.8497355,2 24,2 Z M24,5 C13.5065898,5 5,13.5065898 5,24 C5,34.4934102 13.5065898,43 24,43 C34.4934102,43 43,34.4934102 43,24 C43,13.5065898 34.4934102,5 24,5 Z M25.5,14.9 L25.5,22.5 L25.5,22.5 L33.1,22.5 C33.3209139,22.5 33.5,22.6790861 33.5,22.9 L33.5,25.1 C33.5,25.3209139 33.3209139,25.5 33.1,25.5 L25.5,25.5 L25.5,25.5 L25.5,33.1 C25.5,33.3209139 25.3209139,33.5 25.1,33.5 L22.9,33.5 C22.6790861,33.5 22.5,33.3209139 22.5,33.1 L22.5,25.5 L22.5,25.5 L14.9,25.5 C14.6790861,25.5 14.5,25.3209139 14.5,25.1 L14.5,22.9 C14.5,22.6790861 14.6790861,22.5 14.9,22.5 L22.5,22.5 L22.5,22.5 L22.5,14.9 C22.5,14.6790861 22.6790861,14.5 22.9,14.5 L25.1,14.5 C25.3209139,14.5 25.5,14.6790861 25.5,14.9 Z",id:"AddCircleOutline-\u5f62\u72b6",fill:"currentColor",fillRule:"nonzero"}))))},c=n(2681),u=n(6454),g=n(9428),f=n(2840),d=n(5172),m=n(184);function h(){var e=(0,a.TH)().state,t=(0,s.useState)([]),n=(0,r.Z)(t,2),h=n[0],v=n[1],L=(0,s.useState)(""),C=(0,r.Z)(L,2),I=C[0],x=C[1],j=(0,s.useState)(""),w=(0,r.Z)(j,2),p=w[0],S=w[1],M=(0,s.useState)(""),N=(0,r.Z)(M,2),O=N[0],y=N[1],_=(0,s.useState)(""),Z=(0,r.Z)(_,2),k=Z[0],F=Z[1];console.log("state: ",e),(0,s.useEffect)((function(){if(e){var t=e.userId,n=(0,o.yu)(),r=(0,o.vW)();if(t in n[r].messageInfos){var s=n[r].messageInfos[t];v(s)}y(t),x(n[r].avatarUrl),S(n[t].avatarUrl)}}),[e]);var b=function(e){var t=e.index,n=(e.key,e.style,h[t]),r=n.obj,s=n.time,a=n.content;return"me"==r?(0,m.jsxs)("div",{className:l.leftMessage,children:[(0,m.jsx)("div",{children:s}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{children:a}),(0,m.jsx)("img",{src:I})]})]},a):(0,m.jsxs)("div",{className:l.rightMessage,children:[(0,m.jsx)("div",{children:s}),(0,m.jsxs)("div",{children:[(0,m.jsx)("img",{src:p}),(0,m.jsx)("p",{children:a})]})]},a)};return e?(0,m.jsxs)("div",{className:l.container,children:[(0,m.jsx)(d.Z,{title:O}),h==[]?"":(0,m.jsx)("div",{className:l.body,children:(0,m.jsx)(g.aV,{children:(0,m.jsx)(u.qj,{disableHeight:!0,children:function(e){var t=e.width;return(0,m.jsx)(u.aV,{rowCount:h.length,rowRenderer:b,width:t,height:200*h.length,rowHeight:200,overscanRowCount:10})}})})}),(0,m.jsxs)("div",{className:l.sendMessage,children:[(0,m.jsx)(i,{fontSize:30}),(0,m.jsx)(g.II,{placeholder:"",value:k,onChange:function(e){F(e)}}),(0,m.jsx)(c.Z,{fontSize:30,onClick:function(){return function(t){console.log("message: ",t);var n=(0,o.yu)(),r=(0,o.vW)(),s=e.userId;s in n[r].messageInfos==0&&(n[r].messageInfos[s]=[]),n[r].messageInfos[s].push({obj:"me",time:(0,f.G)(),content:t}),r in n[s].messageInfos==0&&(n[s].messageInfos[r]=[]),console.log("allUserInfos: ",n),console.log("curusername: ",r),console.log("allUserInfos[userId]['messageInfos']",n[s].messageInfos),n[s].messageInfos[r].push({obj:"other",time:(0,f.G)(),content:t});var a=n[r].messageInfos[s];v(a),console.log("messagelist: ",a),console.log("userId: ",s),console.log("allUserInfos: ",n),(0,o.dp)(n),F("")}(k)}})]})]}):(0,m.jsx)(m.Fragment,{})}},3965:function(e,t,n){n.d(t,{$D:function(){return l},Ag:function(){return g},HC:function(){return f},PJ:function(){return h},YT:function(){return d},Zv:function(){return u},b4:function(){return s},dp:function(){return i},du:function(){return c},qm:function(){return a},vW:function(){return r},yS:function(){return m},yu:function(){return o}});var r=function(){return localStorage.getItem("userName")},s=function(e){return localStorage.setItem("userName",e)},a=function(){return localStorage.removeItem("userName")},l=function(){return!!r()},o=function(){return JSON.parse(localStorage.getItem("allUserInfos"))},i=function(e){return localStorage.setItem("allUserInfos",JSON.stringify(e))},c=function(){return JSON.parse(localStorage.getItem("productsData"))},u=function(e){return localStorage.setItem("productsData",JSON.stringify(e))},g=function(){return JSON.parse(localStorage.getItem("allUserInfos"))[r()]},f=function(){return JSON.parse(localStorage.getItem("categorysData"))},d=function(){return JSON.parse(localStorage.getItem("allProductCommentInfos"))},m=function(e){return localStorage.setItem("allProductCommentInfos",JSON.stringify(e))},h=function(e){return c()[e]}},2840:function(e,t,n){function r(){var e=new Date,t=a(e.getMonth()+1),n=a(e.getDate());return a(e.getHours())+":"+a(e.getMinutes())+" "+n+"/"+t+"/"+e.getFullYear()}function s(){var e=new Date,t=a(e.getMonth()+1),n=a(e.getDate()),r=a(e.getHours()),s=a(e.getMinutes());return e.getFullYear()+"/"+t+"/"+n+" "+r+":"+s}function a(e){return e>=0&&e<=9?"0"+e:e}n.d(t,{G:function(){return s},X:function(){return r}})},2681:function(e,t,n){var r=n(2791);t.Z=function(e){return r.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),r.createElement("g",{id:"TravelOutline-TravelOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.createElement("g",{id:"TravelOutline-\u7f16\u7ec4"},r.createElement("rect",{id:"TravelOutline-\u77e9\u5f62",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),r.createElement("path",{d:"M44,31 L44,38 C44,41.3137085 41.3137085,44 38,44 L31,44 L31,41 L38,41 C39.5976809,41 40.9036609,39.75108 40.9949073,38.1762728 L41,38 L41,31 L44,31 Z M7,31 L7,38 C7,39.5976809 8.24891996,40.9036609 9.82372721,40.9949073 L10,41 L17,41 L17,44 L10,44 C6.6862915,44 4,41.3137085 4,38 L4,31 L7,31 Z M35.0117916,13.4953015 C35.1166207,13.7467969 35.1142891,14.0301778 35.0053359,14.2799142 L25.6937022,35.6235281 C25.5554891,35.9405947 25.1859051,36.0858047 24.8682132,35.9478636 C24.7040314,35.8765762 24.5781952,35.7386683 24.5223976,35.568873 L22.8381152,30.2710706 C22.4583134,29.0764282 22.6605228,27.7728272 23.3843858,26.749381 L27.7570153,20.567063 L20.9489383,24.5446033 C19.9288237,25.1405934 18.6974178,25.2551281 17.5848853,24.8574981 L12.4105493,23.0081401 C12.0854696,22.888567 11.9190648,22.5286234 12.0388737,22.2041835 C12.0990839,22.0411356 12.2244836,21.9103966 12.3850699,21.843247 L33.7040276,12.9570142 C34.2138006,12.7445291 34.7993065,12.9855285 35.0117916,13.4953015 Z M38,4 C41.3137085,4 44,6.6862915 44,10 L44,17 L41,17 L41,10 C41,8.40231912 39.75108,7.09633912 38.1762728,7.00509269 L38,7 L31,7 L31,4 L38,4 Z M17,4 L17,7 L10,7 C8.40231912,7 7.09633912,8.24891996 7.00509269,9.82372721 L7,10 L7,17 L4,17 L4,10 C4,6.6862915 6.6862915,4 10,4 L17,4 Z",id:"TravelOutline-\u5f62\u72b6\u7ed3\u5408",fill:"currentColor",fillRule:"nonzero"}))))}}}]);
//# sourceMappingURL=172.f2ac5f2d.chunk.js.map