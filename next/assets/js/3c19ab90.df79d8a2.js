"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[18548],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),o=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=o(a),m=n,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return a?r.createElement(k,i(i({ref:t},c),{},{components:a})):r.createElement(k,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},91350:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const l={description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},i="Class: Sha512",s={unversionedId:"references/crypto/classes/Sha512",id:"references/crypto/classes/Sha512",title:"Class: Sha512",description:"iota.js API reference",source:"@site/next/external/iota.js/documentation/docs/references/crypto/classes/Sha512.md",sourceDirName:"references/crypto/classes",slug:"/references/crypto/classes/Sha512",permalink:"/next/iotajs/references/crypto/classes/Sha512",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/next/external/iota.js/documentation/docs/references/crypto/classes/Sha512.md",tags:[],version:"current",frontMatter:{description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},sidebar:"docs",previous:{title:"Class: Sha256",permalink:"/next/iotajs/references/crypto/classes/Sha256"},next:{title:"Class: Slip0010",permalink:"/next/iotajs/references/crypto/classes/Slip0010"}},p={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Methods",id:"methods",level:3},{value:"Properties",id:"properties-1",level:2},{value:"SIZE_224",id:"size_224",level:3},{value:"SIZE_256",id:"size_256",level:3},{value:"SIZE_384",id:"size_384",level:3},{value:"SIZE_512",id:"size_512",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Methods",id:"methods-1",level:2},{value:"sum512",id:"sum512",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"update",id:"update",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"digest",id:"digest",level:3},{value:"Returns",id:"returns-2",level:4}],c={toc:o};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"class-sha512"},"Class: Sha512"),(0,n.kt)("p",null,"Class to help with Sha512 scheme\nTypeScript conversion from ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/emn178/js-sha512"},"https://github.com/emn178/js-sha512"),"."),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/next/iotajs/references/crypto/classes/Sha512#size_224"},"SIZE","_","224")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/next/iotajs/references/crypto/classes/Sha512#size_256"},"SIZE","_","256")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/next/iotajs/references/crypto/classes/Sha512#size_384"},"SIZE","_","384")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/next/iotajs/references/crypto/classes/Sha512#size_512"},"SIZE","_","512"))),(0,n.kt)("h3",{id:"constructors"},"Constructors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/next/iotajs/references/crypto/classes/Sha512#constructor"},"constructor"))),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/next/iotajs/references/crypto/classes/Sha512#sum512"},"sum512")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/next/iotajs/references/crypto/classes/Sha512#update"},"update")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/next/iotajs/references/crypto/classes/Sha512#digest"},"digest"))),(0,n.kt)("h2",{id:"properties-1"},"Properties"),(0,n.kt)("h3",{id:"size_224"},"SIZE","_","224"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"SIZE","_","224"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,n.kt)("inlineCode",{parentName:"p"},"224")),(0,n.kt)("p",null,"Sha512 224."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"size_256"},"SIZE","_","256"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"SIZE","_","256"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,n.kt)("inlineCode",{parentName:"p"},"256")),(0,n.kt)("p",null,"Sha512 256."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"size_384"},"SIZE","_","384"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"SIZE","_","384"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,n.kt)("inlineCode",{parentName:"p"},"384")),(0,n.kt)("p",null,"Sha512 384."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"size_512"},"SIZE","_","512"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"SIZE","_","512"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,n.kt)("inlineCode",{parentName:"p"},"512")),(0,n.kt)("p",null,"Sha512 512."),(0,n.kt)("h2",{id:"constructors-1"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new Sha512"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"bits?"),")"),(0,n.kt)("p",null,"Create a new instance of Sha512."),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"bits")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Sha512.SIZE_512")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of bits.")))),(0,n.kt)("h2",{id:"methods-1"},"Methods"),(0,n.kt)("h3",{id:"sum512"},"sum512"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"sum512"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,n.kt)("p",null,"Perform Sum 512 on the data."),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"data")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Uint8Array")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The data to operate on.")))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,n.kt)("p",null,"The sum 512 of the data."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"update"},"update"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"update"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"message"),"): ",(0,n.kt)("a",{parentName:"p",href:"/next/iotajs/references/crypto/classes/Sha512"},(0,n.kt)("inlineCode",{parentName:"a"},"Sha512"))),(0,n.kt)("p",null,"Update the hash with the data."),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"message")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Uint8Array")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The data to update the hash with.")))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/next/iotajs/references/crypto/classes/Sha512"},(0,n.kt)("inlineCode",{parentName:"a"},"Sha512"))),(0,n.kt)("p",null,"The instance for chaining."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"digest"},"digest"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"digest"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,n.kt)("p",null,"Get the digest."),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,n.kt)("p",null,"The digest."))}u.isMDXComponent=!0}}]);