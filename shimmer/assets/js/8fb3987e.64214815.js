"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[57867],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={},o="Interface: NativeTokenOptions",l={unversionedId:"references/nodejs/interfaces/NativeTokenOptions",id:"references/nodejs/interfaces/NativeTokenOptions",title:"Interface: NativeTokenOptions",description:"Native token options for minting",source:"@site/shimmer/external/wallet.rs/documentation/docs/references/nodejs/interfaces/NativeTokenOptions.md",sourceDirName:"references/nodejs/interfaces",slug:"/references/nodejs/interfaces/NativeTokenOptions",permalink:"/shimmer/wallet.rs/references/nodejs/interfaces/NativeTokenOptions",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/shimmer/external/wallet.rs/documentation/docs/references/nodejs/interfaces/NativeTokenOptions.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Interface: NativeTokenBalance",permalink:"/shimmer/wallet.rs/references/nodejs/interfaces/NativeTokenBalance"},next:{title:"Interface: NetworkInfo",permalink:"/shimmer/wallet.rs/references/nodejs/interfaces/NetworkInfo"}},p={},s=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"circulatingSupply",id:"circulatingsupply",level:3},{value:"maximumSupply",id:"maximumsupply",level:3},{value:"foundryMetadata",id:"foundrymetadata",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-nativetokenoptions"},"Interface: NativeTokenOptions"),(0,a.kt)("p",null,"Native token options for minting"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/NativeTokenOptions#circulatingsupply"},"circulatingSupply")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/NativeTokenOptions#maximumsupply"},"maximumSupply")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/NativeTokenOptions#foundrymetadata"},"foundryMetadata"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"circulatingsupply"},"circulatingSupply"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"circulatingSupply"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Hex encoded number"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"maximumsupply"},"maximumSupply"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"maximumSupply"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Hex encoded number"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"foundrymetadata"},"foundryMetadata"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"foundryMetadata"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Hex encoded bytes"))}u.isMDXComponent=!0}}]);