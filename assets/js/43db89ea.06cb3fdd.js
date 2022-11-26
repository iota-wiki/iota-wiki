"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[77104],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},76478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const i={description:"Hornet is an EDF-supported community node written in Go. Bee is an IOTA Node implemented by the Foundation and written in Rust. We recommend using Hornet since it has several optional features that are not implemented in Bee.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["Node","Hornet","Bee","Golang","Rust","explanation"]},a="Node Software",l={unversionedId:"explanations/node_software",id:"explanations/node_software",title:"Node Software",description:"Hornet is an EDF-supported community node written in Go. Bee is an IOTA Node implemented by the Foundation and written in Rust. We recommend using Hornet since it has several optional features that are not implemented in Bee.",source:"@site/iota/external/introduction-docs/production/docs/explanations/node_software.md",sourceDirName:"explanations",slug:"/explanations/node_software",permalink:"/introduction/explanations/node_software",draft:!1,editUrl:"https://github.com/iotaledger/introduction-docs/edit/main/docs/iota/external/introduction-docs/production/docs/explanations/node_software.md",tags:[],version:"current",frontMatter:{description:"Hornet is an EDF-supported community node written in Go. Bee is an IOTA Node implemented by the Foundation and written in Rust. We recommend using Hornet since it has several optional features that are not implemented in Bee.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["Node","Hornet","Bee","Golang","Rust","explanation"]},sidebar:"mySidebar",previous:{title:"How the IOTA Chrysalis Phase 2 Token Migration Works",permalink:"/introduction/explanations/update/migration_mechanism"},next:{title:"Libraries",permalink:"/introduction/explanations/libraries"}},s={},p=[{value:"Hornet and Bee",id:"hornet-and-bee",level:2},{value:"Hornet",id:"hornet",level:2},{value:"Bee",id:"bee",level:2},{value:"Node API Specification",id:"node-api-specification",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"node-software"},"Node Software"),(0,r.kt)("p",null,"We have been running the network exclusively on the Go powered Hornet node since the summer of 2020. For Chrysalis, we introduced the options of using an updated version of Hornet or our new Rust-based Bee node."),(0,r.kt)("h2",{id:"hornet-and-bee"},"Hornet and Bee"),(0,r.kt)("p",null,"Both Hornet and Bee are the officially supported nodes for IOTA."),(0,r.kt)("p",null,"Hornet is an EDF-supported community node written in Go and has already proven itself to be a stable and performant implementation. "),(0,r.kt)("p",null,"Bee is an IOTA Node implemented by the Foundation and written in Rust."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"At this stage, we recommend using Hornet since it has several optional features that are not implemented in Bee so far.")),(0,r.kt)("h2",{id:"hornet"},"Hornet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gohornet/hornet"},"Official GitHub Repository"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.iota.org/hornet/welcome"},"Documentation"),".")),(0,r.kt)("h2",{id:"bee"},"Bee"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/bee/tree/chrysalis-pt-2"},"Official GitHub Repository"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.iota.org/bee/welcome"},"Documentation"),".")),(0,r.kt)("h2",{id:"node-api-specification"},"Node API Specification"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://editor.swagger.io/?url=https://raw.githubusercontent.com/iotaledger/tips/main/tips/TIP-0013/rest-api.yaml"},"rest-api specification"),".")))}u.isMDXComponent=!0}}]);