"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[53925],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},52668:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={description:"The Faucet endpoint allows requesting funds from the Faucet.",image:"/img/logo/goshimmer_light.png",keywords:["client library","HTTP API","tokens","funds","address","faucet","testnet","node Id"]},o="Faucet API Methods",i={unversionedId:"apis/faucet",id:"apis/faucet",title:"Faucet API Methods",description:"The Faucet endpoint allows requesting funds from the Faucet.",source:"@site/iota/external/goshimmer/develop/documentation/docs/apis/faucet.md",sourceDirName:"apis",slug:"/apis/faucet",permalink:"/goshimmer/apis/faucet",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/iota/external/goshimmer/develop/documentation/docs/apis/faucet.md",tags:[],version:"current",frontMatter:{description:"The Faucet endpoint allows requesting funds from the Faucet.",image:"/img/logo/goshimmer_light.png",keywords:["client library","HTTP API","tokens","funds","address","faucet","testnet","node Id"]},sidebar:"docs",previous:{title:"Snapshot API Methods",permalink:"/goshimmer/apis/snapshot"},next:{title:"Spammer API Methods",permalink:"/goshimmer/apis/spammer"}},d={},p=[{value:"<code>/faucet</code>",id:"faucet",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Body",id:"body",level:4},{value:"Examples",id:"examples",level:3},{value:"cURL",id:"curl",level:4},{value:"Client lib - SendFaucetRequest",id:"client-lib---sendfaucetrequest",level:4},{value:"<code>SendFaucetRequest(base58EncodedAddr string, powTarget int, pledgeIDs ...string) (*jsonmodels.FaucetResponse, error)</code>",id:"sendfaucetrequestbase58encodedaddr-string-powtarget-int-pledgeids-string-jsonmodelsfaucetresponse-error",level:5},{value:"Response examples",id:"response-examples",level:3},{value:"Results",id:"results",level:3}],s={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"faucet-api-methods"},"Faucet API Methods"),(0,r.kt)("p",null,"Faucet endpoint allows requesting funds from the Faucet."),(0,r.kt)("p",null,"The API provides the following functions and endpoints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#faucet"},"/faucet"))),(0,r.kt)("p",null,"Client lib APIs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#client-lib---sendfaucetrequest"},"SendFaucetRequest()"))),(0,r.kt)("h2",{id:"faucet"},(0,r.kt)("inlineCode",{parentName:"h2"},"/faucet")),(0,r.kt)("p",null,"Method: ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")),(0,r.kt)("p",null,"POST request asking for funds from the faucet to be transferred to address in the request."),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"address")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required or Optional")),(0,r.kt)("td",{parentName:"tr",align:null},"required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"address to pledge funds to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},"string")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"accessManaPledgeID")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required or Optional")),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"node ID to pledge access mana to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},"string")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"consensusManaPledgeID")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required or Optional")),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"node ID to pledge consensus mana to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},"string")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"powTarget")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required or Optional")),(0,r.kt)("td",{parentName:"tr",align:null},"required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"proof of the PoW being done, ",(0,r.kt)("strong",{parentName:"td"},"only used in HTTP api"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},"uint64")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"nonce")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required or Optional")),(0,r.kt)("td",{parentName:"tr",align:null},"required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:null},"target Proof of Work difficulty,",(0,r.kt)("strong",{parentName:"td"},"only used in client lib"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},"uint64")))),(0,r.kt)("h4",{id:"body"},"Body"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "address": "target address",\n  "accessManaPledgeID": "nodeID",\n  "consensusManaPledgeID": "nodeID",\n  "nonce": 50\n}\n\n')),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("h4",{id:"curl"},"cURL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/faucet\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "address": "target address",\n    "accessManaPledgeID": "nodeID",\n    "consensusManaPledgeID": "nodeID",\n  "nonce": 50\n}\'\n')),(0,r.kt)("h4",{id:"client-lib---sendfaucetrequest"},"Client lib - SendFaucetRequest"),(0,r.kt)("h5",{id:"sendfaucetrequestbase58encodedaddr-string-powtarget-int-pledgeids-string-jsonmodelsfaucetresponse-error"},(0,r.kt)("inlineCode",{parentName:"h5"},"SendFaucetRequest(base58EncodedAddr string, powTarget int, pledgeIDs ...string) (*jsonmodels.FaucetResponse, error)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"_, err = webConnector.client.SendFaucetRequest(addr.Address().Base58(), powTarget)\nif err != nil {\n    // return error\n}\n")),(0,r.kt)("h3",{id:"response-examples"},"Response examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "4MSkwAPzGwnjCJmTfbpW4z4GRC7HZHZNS33c2JikKXJc" \n}\n')),(0,r.kt)("h3",{id:"results"},"Results"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Return field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Block ID of the faucet request. Omitted if error.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"error")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Error block. Omitted if success.")))))}u.isMDXComponent=!0}}]);