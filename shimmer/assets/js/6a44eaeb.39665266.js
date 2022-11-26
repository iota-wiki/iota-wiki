"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[18030],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=l(r),u=a,m=f["".concat(c,".").concat(u)]||f[u]||d[u]||i;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},89135:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},s="Interface: IMigratedFunds",o={unversionedId:"references/client/interfaces/IMigratedFunds",id:"references/client/interfaces/IMigratedFunds",title:"Interface: IMigratedFunds",description:"iota.js API reference",source:"@site/shimmer/external/iota.js/documentation/docs/references/client/interfaces/IMigratedFunds.md",sourceDirName:"references/client/interfaces",slug:"/references/client/interfaces/IMigratedFunds",permalink:"/shimmer/iotajs/references/client/interfaces/IMigratedFunds",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/shimmer/external/iota.js/documentation/docs/references/client/interfaces/IMigratedFunds.md",tags:[],version:"current",frontMatter:{description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},sidebar:"docs",previous:{title:"Interface: IMetadataFeature",permalink:"/shimmer/iotajs/references/client/interfaces/IMetadataFeature"},next:{title:"Interface: IMilestonePayload",permalink:"/shimmer/iotajs/references/client/interfaces/IMilestonePayload"}},c={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"tailTransactionHash",id:"tailtransactionhash",level:3},{value:"address",id:"address",level:3},{value:"deposit",id:"deposit",level:3}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-imigratedfunds"},"Interface: IMigratedFunds"),(0,a.kt)("p",null,"The migrated funds for receipts."),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IMigratedFunds#tailtransactionhash"},"tailTransactionHash")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IMigratedFunds#address"},"address")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IMigratedFunds#deposit"},"deposit"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"tailtransactionhash"},"tailTransactionHash"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"tailTransactionHash"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The tail transaction hash of the migration bundle."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"address"},"address"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"address"),": ",(0,a.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/api_ref#addresstypes"},(0,a.kt)("inlineCode",{parentName:"a"},"AddressTypes"))),(0,a.kt)("p",null,"The target address of the migrated funds."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"deposit"},"deposit"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"deposit"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The amount of the deposit."))}d.isMDXComponent=!0}}]);