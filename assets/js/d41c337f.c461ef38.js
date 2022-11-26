"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[18184],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||c;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},71776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const c={},i=void 0,o={unversionedId:"reference/java_api/AccountSynchronizer",id:"reference/java_api/AccountSynchronizer",title:"AccountSynchronizer",description:"Account sync helper.",source:"@site/iota/external/wallet.rs/production/documentation/docs/reference/java_api/AccountSynchronizer.mdx",sourceDirName:"reference/java_api",slug:"/reference/java_api/AccountSynchronizer",permalink:"/wallet.rs/reference/java_api/AccountSynchronizer",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/iota/external/wallet.rs/production/documentation/docs/reference/java_api/AccountSynchronizer.mdx",tags:[],version:"current",frontMatter:{}},l={},s=[{value:"gapLimit(limit): AccountSynchronizer",id:"gaplimitlimit-accountsynchronizer",level:3},{value:"skipPersistence(): AccountSynchronizer",id:"skippersistence-accountsynchronizer",level:3},{value:"skipChangeAddresses(): AccountSynchronizer",id:"skipchangeaddresses-accountsynchronizer",level:3},{value:"addressIndex(address_index): AccountSynchronizer",id:"addressindexaddress_index-accountsynchronizer",level:3},{value:"execute(): SyncedAccount",id:"execute-syncedaccount",level:3}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Account sync helper."),(0,a.kt)("h3",{id:"gaplimitlimit-accountsynchronizer"},"gapLimit(limit): ",(0,a.kt)("a",{parentName:"h3",href:"#accountsynchronizer"},"AccountSynchronizer")),(0,a.kt)("p",null,"Number of address indexes that are generated."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"long"),(0,a.kt)("td",{parentName:"tr",align:null},"The maximum gap we cross without finding an address with balance")))),(0,a.kt)("h3",{id:"skippersistence-accountsynchronizer"},"skipPersistence(): ",(0,a.kt)("a",{parentName:"h3",href:"#accountsynchronizer"},"AccountSynchronizer")),(0,a.kt)("p",null,"Skip saving new messages and addresses on the account object.\nThe found data is returned on the ",(0,a.kt)("inlineCode",{parentName:"p"},"execute")," call but won't be persisted on the database."),(0,a.kt)("h3",{id:"skipchangeaddresses-accountsynchronizer"},"skipChangeAddresses(): ",(0,a.kt)("a",{parentName:"h3",href:"#accountsynchronizer"},"AccountSynchronizer")),(0,a.kt)("p",null,"Skip syncing existing change addresses."),(0,a.kt)("h3",{id:"addressindexaddress_index-accountsynchronizer"},"addressIndex(address_index): ",(0,a.kt)("a",{parentName:"h3",href:"#accountsynchronizer"},"AccountSynchronizer")),(0,a.kt)("p",null,"Initial address index to start syncing."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"address_index"),(0,a.kt)("td",{parentName:"tr",align:null},"long"),(0,a.kt)("td",{parentName:"tr",align:null},"The starting index")))),(0,a.kt)("h3",{id:"execute-syncedaccount"},"execute(): ",(0,a.kt)("a",{parentName:"h3",href:"#syncedaccount"},"SyncedAccount")),(0,a.kt)("p",null,"Syncs account with the tangle.\nThe account syncing process ensures that the latest metadata (balance, transactions)\nassociated with an account is fetched from the tangle and is stored locally."))}d.isMDXComponent=!0}}]);