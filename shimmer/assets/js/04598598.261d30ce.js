"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[37224],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>m});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,d=p["".concat(s,".").concat(m)]||p[m]||c[m]||n;return r?a.createElement(d,l(l({ref:t},f),{},{components:r})):a.createElement(d,l({ref:t},f))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,l=new Array(n);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<n;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},84880:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var a=r(87462),i=(r(67294),r(3905));const n={title:"Firefly Wallet",description:"The Shimmer Firefly Wallet sets a new standard for Software Wallets in DLT. Learn everything here."},l="Firefly Wallet",o={unversionedId:"wallets/firefly/general",id:"wallets/firefly/general",title:"Firefly Wallet",description:"The Shimmer Firefly Wallet sets a new standard for Software Wallets in DLT. Learn everything here.",source:"@site/shimmer/use/wallets/firefly/general.md",sourceDirName:"wallets/firefly",slug:"/wallets/firefly/general",permalink:"/shimmer/use/wallets/firefly/general",draft:!1,editUrl:"https://github.com/iota-wiki/iota-wiki/edit/main/shimmer/use/wallets/firefly/general.md",tags:[],version:"current",lastUpdatedAt:1664315461,formattedLastUpdatedAt:"Sep 27, 2022",frontMatter:{title:"Firefly Wallet",description:"The Shimmer Firefly Wallet sets a new standard for Software Wallets in DLT. Learn everything here."},sidebar:"use",previous:{title:"What is a Wallet?",permalink:"/shimmer/use/wallets/what-is-a-wallet"},next:{title:"Firefly user guide",permalink:"/shimmer/use/wallets/firefly/user-guide"}},s={},u=[{value:"General overview and introduction",id:"general-overview-and-introduction",level:2},{value:"Useful Links",id:"useful-links",level:2}],f={toc:u};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"firefly-wallet"},"Firefly Wallet"),(0,i.kt)("h2",{id:"general-overview-and-introduction"},"General overview and introduction"),(0,i.kt)("p",null,"Firefly is the secure entry point to the Shimmer ecosystem."),(0,i.kt)("p",null,"It is built with a bright future in mind. It will evolve into a tool that offers much more than just a software wallet for your Shimmer tokens. Firefly provides a modular design that makes it easy to add innovative new features later on. Shimmer\u2019s new wallet guides you through the complexities of crypto, protected and with ease while using cutting-edge technology to secure your tokens."),(0,i.kt)("p",null,"Some of the most important features are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Written in Rust"),": Rust offers security from the ground up \u2013 while maintaining speed, low memory usage, and scalability. This allows us to build apps with better performance and higher security."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Modular design"),": Firefly separates different functionalities in module crates, like seed storage, handling transactions, and cryptography. Module crate groups together related functions to make the functionality easy to share between multiple projects that aim to use the same feature."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Secured with Stronghold"),": Sensitive actions like address generation and transaction signing occur in isolated application memory built upon the IOTA Stronghold library, keeping the seed away from potential attackers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Crypto.rs"),": Crypto.rs combines all cryptographic algorithms used by many of the projects at the IOTA Foundation. It reduces the risk of using unsafe crypto implementations, making it easier to audit, resulting in verifiably safer code.")),(0,i.kt)("p",null,"Find more information on the official website and download the Firefly wallet exclusively from:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://firefly.iota.org/"},(0,i.kt)("strong",{parentName:"a"},"Firefly")),(0,i.kt)("strong",{parentName:"li"},":")," official Website"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/firefly/releases"},(0,i.kt)("strong",{parentName:"a"},"Firefly Github Releases")),": official Firefly GitHub Repo with the latest release version")),(0,i.kt)("h2",{id:"useful-links"},"Useful Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://discord.com/channels/397872799483428865/748265907351978115"},(0,i.kt)("strong",{parentName:"a"},"Firefly Discord Channel")),": Discuss the Firefly wallet, ask questions and engage with the IOTA community on Discord"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/firefly"},(0,i.kt)("strong",{parentName:"a"},"Firefly GitHub")),": Firefly codebase and development repository")))}c.isMDXComponent=!0}}]);