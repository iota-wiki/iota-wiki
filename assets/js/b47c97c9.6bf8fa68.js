"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[12657],{65269:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],i={description:"There currently are 6 core smart contracts that are always deployed on each  chain, root, _default, accounts, blob, blocklog, and governance.",image:"/img/Banner/banner_wasp_core_contracts_overview.png",keywords:["smart contracts","core","initialization","request handling","on-chain ledger","accounts","data","receipts","reference"]},s="Core Contracts",p={unversionedId:"guide/core_concepts/core_contracts/overview",id:"guide/core_concepts/core_contracts/overview",title:"Core Contracts",description:"There currently are 6 core smart contracts that are always deployed on each  chain, root, _default, accounts, blob, blocklog, and governance.",source:"@site/content/build/wasp/develop/documentation/docs/guide/core_concepts/core_contracts/overview.md",sourceDirName:"guide/core_concepts/core_contracts",slug:"/guide/core_concepts/core_contracts/overview",permalink:"/smart-contracts/develop/guide/core_concepts/core_contracts/overview",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/core_concepts/core_contracts/overview.md",tags:[],version:"current",frontMatter:{description:"There currently are 6 core smart contracts that are always deployed on each  chain, root, _default, accounts, blob, blocklog, and governance.",image:"/img/Banner/banner_wasp_core_contracts_overview.png",keywords:["smart contracts","core","initialization","request handling","on-chain ledger","accounts","data","receipts","reference"]},sidebar:"tutorialSidebar",previous:{title:"Sandbox Interface",permalink:"/smart-contracts/develop/guide/core_concepts/sandbox"},next:{title:"The `root` Contract",permalink:"/smart-contracts/develop/guide/core_concepts/core_contracts/root"}},l={},u=[],d={toc:u};function m(e){var t=e.components,i=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"core-contracts"},"Core Contracts"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Wasp Node Core Contracts Overview",src:r(79607).Z,width:"862",height:"200"})),(0,a.kt)("p",null,"There are currently 7 core smart contracts that are always deployed on each\nchain. These are responsible for the vital functions of the chain and\nprovide infrastructure for all other smart contracts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/core_concepts/core_contracts/root"},(0,a.kt)("inlineCode",{parentName:"a"},"root"))," - Responsible for the initialization of the chain, maintains registry of deployed contracts.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/core_concepts/core_contracts/accounts"},(0,a.kt)("inlineCode",{parentName:"a"},"accounts")),": Manages the on-chain ledger of accounts.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/core_concepts/core_contracts/blob"},(0,a.kt)("inlineCode",{parentName:"a"},"blob")),": Responsible for the registry of binary objects of arbitrary size.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/core_concepts/core_contracts/blocklog"},(0,a.kt)("inlineCode",{parentName:"a"},"blocklog")),": Keeps track of the blocks and receipts of requests that were processed by the chain.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/core_concepts/core_contracts/governance"},(0,a.kt)("inlineCode",{parentName:"a"},"governance")),": Handles the administrative functions of the chain. For example: rotation of the committee of validators of the chain, fees and other chain-specific configurations.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/core_concepts/core_contracts/errors"},(0,a.kt)("inlineCode",{parentName:"a"},"errors")),": Keeps a map of error codes to error messages templates. These error codes are used in request receipts.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/core_concepts/core_contracts/evm"},(0,a.kt)("inlineCode",{parentName:"a"},"evm")),": Provides the necessary infrastructure to accept Ethereum\ntransactions and execute EVM code."))))}m.isMDXComponent=!0},79607:function(e,t,r){t.Z=r.p+"assets/images/banner_wasp_core_contracts_overview-68ccb1b72988e5e707cb46c0ee9aed30.png"},3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);