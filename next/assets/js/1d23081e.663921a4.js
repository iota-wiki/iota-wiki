"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[58992],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={description:"INX-MQTT provides an event-based real-time streaming node API.",image:"/img/Banner/banner_hornet.png",keywords:["IOTA Node","Hornet Node","INX","MQTT","IOTA","Shimmer","Node Software","Welcome","explanation"]},a="Welcome to INX-MQTT",c={unversionedId:"welcome",id:"welcome",title:"Welcome to INX-MQTT",description:"INX-MQTT provides an event-based real-time streaming node API.",source:"@site/next/external/inx-mqtt/documentation/docs/welcome.md",sourceDirName:".",slug:"/welcome",permalink:"/next/inx-mqtt/welcome",draft:!1,editUrl:"https://github.com/gohornet/inx-mqtt/edit/develop/documentation/docs/next/external/inx-mqtt/documentation/docs/welcome.md",tags:[],version:"current",frontMatter:{description:"INX-MQTT provides an event-based real-time streaming node API.",image:"/img/Banner/banner_hornet.png",keywords:["IOTA Node","Hornet Node","INX","MQTT","IOTA","Shimmer","Node Software","Welcome","explanation"]},sidebar:"mySidebar",next:{title:"Core Configuration",permalink:"/next/inx-mqtt/configuration"}},l={},p=[{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"API",id:"api",level:2},{value:"Source Code",id:"source-code",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"welcome-to-inx-mqtt"},"Welcome to INX-MQTT"),(0,o.kt)("p",null,"INX-MQTT provides an event-based real-time streaming node API.\nThe built-in MQTT broker offers a list of topics clients can subscribe to, to receive the latest blocks and outputs attached on the tangle."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"The recommended setup is to use the provided ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/iotaledger/inx-mqtt"},"Docker images"),".\nThese images are also used in our ",(0,o.kt)("a",{parentName:"p",href:"http://wiki.iota.org/hornet/develop/how_tos/using_docker"},"HORNET recommended setup using Docker"),"."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"The MQTT broker is configured by default to connect to your HORNET instance."),(0,o.kt)("p",null,"You can find all the configuration options in the ",(0,o.kt)("a",{parentName:"p",href:"/next/inx-mqtt/configuration"},"configuration section"),"."),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,"The MQTT broker exposes a custom set of topics that can be used by wallets and applications to receive events from nodes."),(0,o.kt)("p",null,"You can find more information about the API in the ",(0,o.kt)("a",{parentName:"p",href:"/next/inx-mqtt/api_reference"},"API reference section"),"."),(0,o.kt)("h2",{id:"source-code"},"Source Code"),(0,o.kt)("p",null,"The source code of the project is available on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/inx-mqtt"},"GitHub"),"."))}u.isMDXComponent=!0}}]);