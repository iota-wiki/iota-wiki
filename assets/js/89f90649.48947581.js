"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[61832],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>p});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=c(a),p=i,g=m["".concat(d,".").concat(p)]||m[p]||h[p]||r;return a?n.createElement(g,s(s({ref:t},l),{},{components:a})):n.createElement(g,s({ref:t},l))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},79689:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={image:"/img/integration-services/logo/integration_services.png",description:"The dashboard is part of the Integration Services Suite and enables management of identities and streams.",keywords:["explanation","ecommerce","dashboard","ui","credentials","decentralized identity","streams","verify credential"]},s="Dashboard",o={unversionedId:"explanations/services/dashboard/dashboard",id:"explanations/services/dashboard/dashboard",title:"Dashboard",description:"The dashboard is part of the Integration Services Suite and enables management of identities and streams.",source:"@site/iota/external/integration-services/production/documentation/docs/explanations/services/dashboard/dashboard.md",sourceDirName:"explanations/services/dashboard",slug:"/explanations/services/dashboard/",permalink:"/integration-services/explanations/services/dashboard/",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/iota/external/integration-services/production/documentation/docs/explanations/services/dashboard/dashboard.md",tags:[],version:"current",frontMatter:{image:"/img/integration-services/logo/integration_services.png",description:"The dashboard is part of the Integration Services Suite and enables management of identities and streams.",keywords:["explanation","ecommerce","dashboard","ui","credentials","decentralized identity","streams","verify credential"]},sidebar:"docs",previous:{title:"Use Cases",permalink:"/integration-services/explanations/services/SSI-bridge/use-cases"},next:{title:"UI Components",permalink:"/integration-services/explanations/services/dashboard/ui-components"}},d={},c=[{value:"Login and Registration",id:"login-and-registration",level:2},{value:"Identity Management",id:"identity-management",level:2},{value:"Stream Management",id:"stream-management",level:2},{value:"Channel History",id:"channel-history",level:2},{value:"Verify Credential",id:"verify-credential",level:2}],l={toc:c};function h(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dashboard"},"Dashboard"),(0,i.kt)("p",null,"The Integration Services also includes a dashboard to view and manage all your identities, credentials and streams. The dashboard supports nearly every feature currently supported by the Audit Trail Gateway and SSI Bridge APIs. You can run the dashboard directly with the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run dev")," script in the ",(0,i.kt)("inlineCode",{parentName:"p"},"./dashboard")," directory. The dashboard gets automatically deployed if you chosen to install the Integration Services by docker-compose or Kubernetes. The dashboard can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/integration-services/tree/master/dashboard"},"Integration Services repository"),"."),(0,i.kt)("h2",{id:"login-and-registration"},"Login and Registration"),(0,i.kt)("p",null,"This is the first page visible after opening the dashboard. An already created decentralized identity can be used to login. If no identity was created yet a new one can be registered by clicking on the ",(0,i.kt)("em",{parentName:"p"},"register a new DID")," link.\n",(0,i.kt)("img",{alt:"Login-Screen",src:a(48021).Z,width:"1020",height:"664"})),(0,i.kt)("p",null,"A new DID can be registered on this page. Depending on the identity template you select in the first dropdown different form fields will be shown. A username, first name and last name are mandatory for creating a new DID with the Person template.\n",(0,i.kt)("img",{alt:"Register-Screen",src:a(24712).Z,width:"1020",height:"664"})),(0,i.kt)("h2",{id:"identity-management"},"Identity Management"),(0,i.kt)("p",null,"Identities can be managed in the ",(0,i.kt)("em",{parentName:"p"},"Identities")," tab. Here you can search for identities by name or ID. New identities can be created. The most important information is directly visible in the table. Detailed information about each identity can be viewed by clicking on the table entries.\n",(0,i.kt)("img",{alt:"Identities-Screen",src:a(96851).Z,width:"1020",height:"664"})),(0,i.kt)("p",null,"This is the detail page of the root identity. The identity claim and all credential attached to the identity can be viewed. Here you can also create, revoke and download verifiable credentials if you have sufficient permissions.\n",(0,i.kt)("img",{alt:"Identities-Detail-Screen",src:a(62120).Z,width:"1020",height:"664"})),(0,i.kt)("h2",{id:"stream-management"},"Stream Management"),(0,i.kt)("p",null,"This tab is for managing streams, you can search for streams by the address, topic or source. Additionally you can create new streams. The table shows if you are the author or a subscriber of the listed stream. A detailed view of a stream can be opened by clicking on the table entries.\n",(0,i.kt)("img",{alt:"Streams-Screen",src:a(42562).Z,width:"1020",height:"664"})),(0,i.kt)("p",null,"The detailed view of a stream shows meta information, authorized subscribers and pending subscribers. Pending subscribers can be authorized with just the click of a button. Furthermore, while you are on the detail page, it is polling for new data on the stream in a predefined interval. If you are the author of a stream or have write permissions you can add new messages to the stream here.\n",(0,i.kt)("img",{alt:"Streams-Detail-Screen",src:a(39455).Z,width:"1020",height:"664"})),(0,i.kt)("h2",{id:"channel-history"},"Channel History"),(0,i.kt)("p",null,"In the channel history tab you can fetch the whole history of a stream directly from the Tangle. For encrypted streams a preshared key is needed. For reading public streams you don't have to be subscribed.\n",(0,i.kt)("img",{alt:"Channel-History-Screen",src:a(90934).Z,width:"1020",height:"664"})),(0,i.kt)("h2",{id:"verify-credential"},"Verify Credential"),(0,i.kt)("p",null,"In this tab you can upload verifiable credentials in a .json format to verify them. The verification result will be shown to you.\n",(0,i.kt)("img",{alt:"Verify-Credential-Screen",src:a(75432).Z,width:"1020",height:"664"})))}h.isMDXComponent=!0},90934:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/history_hd-ea917569851ea131f60f77f566e7c8ce.gif"},96851:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/identities_hd-d7f26c57b51d242b51ae720ed18f2077.gif"},62120:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/identity_detail_hd-48260157aacb87b24a568f0a7dcef535.gif"},48021:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/login_hd-c461909bb0bad273ffd79ad433e0bccb.gif"},24712:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/register_hd-663efa81195c3bd064297ea053780924.gif"},39455:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/streams_detail_hd-2bf01b2e39800cac4b6e0bc2b7caebe9.gif"},42562:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/streams_hd-a47f3eef9dad8681a89e3eb311ae77ac.gif"},75432:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/verify_hd-ef4e88ae4ea6357a9dfde4bfefd8426e.gif"}}]);