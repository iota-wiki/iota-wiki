"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[58926],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),d=r,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||n;return o?a.createElement(h,l(l({ref:t},p),{},{components:o})):a.createElement(h,l({ref:t},p))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,l=new Array(n);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<n;c++)l[c]=o[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},69168:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=o(87462),r=(o(67294),o(3905));const n={description:"Solo is a testing framework that allows developers to validate real smart contracts and entire inter-chain protocols.",image:"/img/logo/WASP_logo_dark.png",keywords:["testing framework","golang","rust","inter-chain protocols","validate smart contracts","install","how-to"]},l="Testing Smart Contracts with Solo",s={unversionedId:"guide/solo/what-is-solo",id:"guide/solo/what-is-solo",title:"Testing Smart Contracts with Solo",description:"Solo is a testing framework that allows developers to validate real smart contracts and entire inter-chain protocols.",source:"@site/shimmer/external/wasp/documentation/docs/guide/solo/what-is-solo.md",sourceDirName:"guide/solo",slug:"/guide/solo/what-is-solo",permalink:"/shimmer/smart-contracts/guide/solo/what-is-solo",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/shimmer/external/wasp/documentation/docs/guide/solo/what-is-solo.md",tags:[],version:"current",frontMatter:{description:"Solo is a testing framework that allows developers to validate real smart contracts and entire inter-chain protocols.",image:"/img/logo/WASP_logo_dark.png",keywords:["testing framework","golang","rust","inter-chain protocols","validate smart contracts","install","how-to"]},sidebar:"tutorialSidebar",previous:{title:"The Common Account",permalink:"/shimmer/smart-contracts/guide/core_concepts/accounts/the-common-account"},next:{title:"First Example",permalink:"/shimmer/smart-contracts/guide/solo/first-example"}},i={},c=[{value:"What is Solo?",id:"what-is-solo",level:2},{value:"Installation",id:"installation",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Access the Solo Framework",id:"access-the-solo-framework",level:3},{value:"Clone the Wasp Repository",id:"clone-the-wasp-repository",level:4},{value:"Install the Solo Package",id:"install-the-solo-package",level:4},{value:"Example Contracts",id:"example-contracts",level:3},{value:"Run <code>*_test</code> Files",id:"run-_test-files",level:3}],p={toc:c};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"testing-smart-contracts-with-solo"},"Testing Smart Contracts with Solo"),(0,r.kt)("h2",{id:"what-is-solo"},"What is Solo?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/develop/packages/solo"},(0,r.kt)("em",{parentName:"a"},"Solo"))," is a testing framework that allows developers to\nvalidate real smart contracts and entire inter-chain protocols before deploying them on the distributed network."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://tip.golang.org/doc/go1.18"},"Go (version 1.18)"),". As ",(0,r.kt)("em",{parentName:"p"},"Solo")," tests are written in Go, you must\n",(0,r.kt)("a",{parentName:"p",href:"https://go.dev/doc/install"},"install Go"),"."),(0,r.kt)("h3",{id:"access-the-solo-framework"},"Access the Solo Framework"),(0,r.kt)("p",null,"You can access the Solo package by cloning the ",(0,r.kt)("a",{parentName:"p",href:"#clone-the-wasp-repository"},"Wasp repository"),"\nor ",(0,r.kt)("a",{parentName:"p",href:"#install-the-solo-package"},"installing the Solo package"),"."),(0,r.kt)("h4",{id:"clone-the-wasp-repository"},"Clone the Wasp Repository"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Solo")," is part of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp.git"},(0,r.kt)("em",{parentName:"a"},"Wasp")," codebase repository"),". You can access the Solo\nframework by cloning the repository with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/iotaledger/wasp.git\n")),(0,r.kt)("p",null,"After you have cloned the repository, you can access the Solo package in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/packages/solo")," folder."),(0,r.kt)("h4",{id:"install-the-solo-package"},"Install the Solo Package"),(0,r.kt)("p",null,"You can install the Solo package separately using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"go get github.com/iotaledger/wasp/packages/solo\n")),(0,r.kt)("admonition",{title:"Go Docs",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can browse the Solo Go API reference (updated to the ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," branch) in\n",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/iotaledger/wasp/packages/solo"},"go-docs"),".")),(0,r.kt)("h3",{id:"example-contracts"},"Example Contracts"),(0,r.kt)("p",null,"You will need a smart contract to test along with Solo.\nYou can find example implementations of Rust/Wasm smart contracts, including source code and tests, in the Wasp\nrepository\u2019s ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/develop/contracts/wasm"},"contracts/wasm folder"),"."),(0,r.kt)("p",null,"For information on creating Wasm smart contracts, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/shimmer/smart-contracts/guide/wasm_vm/intro"},"Wasm VM chapter"),"."),(0,r.kt)("p",null,"The following sections will present some Solo usage examples. You can find the example code in\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/develop/documentation/tutorial-examples"},"Wasp repository"),"."),(0,r.kt)("h3",{id:"run-_test-files"},"Run ",(0,r.kt)("inlineCode",{parentName:"h3"},"*_test")," Files"),(0,r.kt)("p",null,"You can run ",(0,r.kt)("inlineCode",{parentName:"p"},"*_test")," files by moving to their directory and running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go test\n")),(0,r.kt)("p",null,"If you run this command from the ",(0,r.kt)("inlineCode",{parentName:"p"},"/documentation/tutorial-examples")," folder, you will run the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/develop/documentation/tutorial-examples/tutorial-test.go"},"Tutorial Test"),", which\ncontains all the examples explained in the following sections."))}m.isMDXComponent=!0}}]);