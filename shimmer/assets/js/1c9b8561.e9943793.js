"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[26199],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},17905:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const i={description:"In this section we describe individual crates and components of Stronghold.",image:"/img/Banner/banner_stronghold_structure.png",keywords:["reference","ToC","crates","components"]},a="IOTA Stronghold Structure",s={unversionedId:"reference/structure/overview",id:"reference/structure/overview",title:"IOTA Stronghold Structure",description:"In this section we describe individual crates and components of Stronghold.",source:"@site/shimmer/external/stronghold.rs/develop/documentation/docs/reference/structure/overview.md",sourceDirName:"reference/structure",slug:"/reference/structure/overview",permalink:"/shimmer/stronghold.rs/reference/structure/overview",draft:!1,editUrl:"https://github.com/iotaledger/stronghold/edit/dev/documentation/shimmer/external/stronghold.rs/develop/documentation/docs/reference/structure/overview.md",tags:[],version:"current",frontMatter:{description:"In this section we describe individual crates and components of Stronghold.",image:"/img/Banner/banner_stronghold_structure.png",keywords:["reference","ToC","crates","components"]},sidebar:"mySidebar",previous:{title:"Overview",permalink:"/shimmer/stronghold.rs/reference/overview"},next:{title:"Structure: Client",permalink:"/shimmer/stronghold.rs/reference/structure/client"}},c={},l=[],u={toc:l};function m(e){let{components:r,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"iota-stronghold-structure"},"IOTA Stronghold Structure"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Stronghold Structure",src:t(58877).Z,width:"862",height:"200"})),(0,o.kt)("p",null,"In this section we describe the individual crates and components of Stronghold:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/shimmer/stronghold.rs/reference/structure/client"},"Client")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/shimmer/stronghold.rs/reference/structure/engine/overview"},"Engine"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/shimmer/stronghold.rs/reference/structure/engine/snapshot"},"Snapshot")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/shimmer/stronghold.rs/reference/structure/engine/vault"},"Vault")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/shimmer/stronghold.rs/reference/structure/engine/store"},"Store")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/shimmer/stronghold.rs/reference/structure/engine/runtime"},"Runtime")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/shimmer/stronghold.rs/reference/structure/derive"},"Derive")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/shimmer/stronghold.rs/reference/structure/utils"},"Utils"))))}m.isMDXComponent=!0},58877:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/banner_stronghold_structure-5352a68b4b52ea1b4ba1a59b2ee970b0.png"}}]);