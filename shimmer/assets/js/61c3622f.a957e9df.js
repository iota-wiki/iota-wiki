"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[72147],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>c});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),s=p(a),c=l,N=s["".concat(d,".").concat(c)]||s[c]||m[c]||r;return a?n.createElement(N,i(i({ref:t},k),{},{components:a})):n.createElement(N,i({ref:t},k))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},29321:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const r={description:"The communication layer represents the base Tangle layer where so called `Blocks` are gossiped around. A `Block` contains payloads, and it is up to upper layers to interpret and derive functionality out of them.",image:"/img/logo/goshimmer_light.png",keywords:["client library","HTTP API","block","encoded block id","consensus","payload"]},i="Communication Layer APIs",o={unversionedId:"apis/communication",id:"apis/communication",title:"Communication Layer APIs",description:"The communication layer represents the base Tangle layer where so called `Blocks` are gossiped around. A `Block` contains payloads, and it is up to upper layers to interpret and derive functionality out of them.",source:"@site/shimmer/external/goshimmer/documentation/docs/apis/communication.md",sourceDirName:"apis",slug:"/apis/communication",permalink:"/shimmer/goshimmer/apis/communication",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/shimmer/external/goshimmer/documentation/docs/apis/communication.md",tags:[],version:"current",frontMatter:{description:"The communication layer represents the base Tangle layer where so called `Blocks` are gossiped around. A `Block` contains payloads, and it is up to upper layers to interpret and derive functionality out of them.",image:"/img/logo/goshimmer_light.png",keywords:["client library","HTTP API","block","encoded block id","consensus","payload"]},sidebar:"docs",previous:{title:"Manual Peering API methods",permalink:"/shimmer/goshimmer/apis/manual_peering"},next:{title:"Ledgerstate API Methods",permalink:"/shimmer/goshimmer/apis/ledgerstate"}},d={},p=[{value:"<code>/blocks/:blockID</code>",id:"blocksblockid",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3},{value:"cURL",id:"curl",level:4},{value:"Client lib - <code>GetBlock</code>",id:"client-lib---getblock",level:4},{value:"Response Examples",id:"response-examples",level:3},{value:"Results",id:"results",level:3},{value:"<code>/blocks/:blockID/metadata</code>",id:"blocksblockidmetadata",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Examples",id:"examples-1",level:3},{value:"cURL",id:"curl-1",level:4},{value:"Client lib - <code>GetBlockMetadata</code>",id:"client-lib---getblockmetadata",level:4},{value:"Response Examples",id:"response-examples-1",level:3},{value:"Results",id:"results-1",level:3},{value:"<code>/data</code>",id:"data",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Body",id:"body",level:4},{value:"Examples",id:"examples-2",level:3},{value:"cURL",id:"curl-2",level:4},{value:"Client lib - <code>Data</code>",id:"client-lib---data",level:4},{value:"<code>Data(data []byte) (string, error)</code>",id:"datadata-byte-string-error",level:5},{value:"Response Examples",id:"response-examples-2",level:3},{value:"Results",id:"results-2",level:3},{value:"<code>/blocks/payload</code>",id:"blockspayload",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Body",id:"body-1",level:4},{value:"Examples",id:"examples-3",level:3},{value:"cURL",id:"curl-3",level:4},{value:"Client lib - <code>SendPayload</code>",id:"client-lib---sendpayload",level:4},{value:"<code>SendPayload(payload []byte) (string, error)</code>",id:"sendpayloadpayload-byte-string-error",level:5},{value:"Response Examples",id:"response-examples-3",level:3},{value:"Results",id:"results-3",level:3}],k={toc:p};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"communication-layer-apis"},"Communication Layer APIs"),(0,l.kt)("p",null,"The communication layer represents the base Tangle layer where so called ",(0,l.kt)("inlineCode",{parentName:"p"},"Blocks")," are gossiped around. A ",(0,l.kt)("inlineCode",{parentName:"p"},"Block")," contains payloads and it is up to upper layers to interpret and derive functionality out of them."),(0,l.kt)("p",null,"The API provides the following functions to interact with this primitive layer:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#blocksblockid"},"/blocks/:blockID")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#blocksblockidmetadata"},"/blocks/:blockID/metadata")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#data"},"/data")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#blockspayload"},"/blocks/payload"))),(0,l.kt)("p",null,"Client lib APIs:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#client-lib---getblock"},"GetBlock()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#client-lib---getblockmetadata"},"GetBlockMetadata()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#client-lib---data"},"Data()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#client-lib---sendpayload"},"SendPayload()"))),(0,l.kt)("h2",{id:"blocksblockid"},(0,l.kt)("inlineCode",{parentName:"h2"},"/blocks/:blockID")),(0,l.kt)("p",null,"Return block from the tangle."),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"blockID")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required or Optional")),(0,l.kt)("td",{parentName:"tr",align:null},"required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"ID of a block to retrieve")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},"string")))),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("h4",{id:"curl"},"cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'http://localhost:8080/blocks/:blockID'\n")),(0,l.kt)("p",null,"where ",(0,l.kt)("inlineCode",{parentName:"p"},":blockID")," is the base58 encoded block ID, e.g. 4MSkwAPzGwnjCJmTfbpW4z4GRC7HZHZNS33c2JikKXJc."),(0,l.kt)("h4",{id:"client-lib---getblock"},"Client lib - ",(0,l.kt)("inlineCode",{parentName:"h4"},"GetBlock")),(0,l.kt)("p",null,"Blocks can be retrieved via ",(0,l.kt)("inlineCode",{parentName:"p"},"GetBlock(base58EncodedID string) (*jsonmodels.Block, error) ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'block, err := goshimAPI.GetBlock(base58EncodedBlockID)\nif err != nil {\n    // return error\n}\n\n// will print "Hello GoShimmer World"\nfmt.Println(string(block.Payload))\n')),(0,l.kt)("p",null,"Note that we're getting actual ",(0,l.kt)("inlineCode",{parentName:"p"},"Block")," objects from this call which represent a vertex in the communication layer Tangle. It does not matter what type of payload the block contains, meaning that this will also return blocks which contain a transactions or DRNG payloads."),(0,l.kt)("h3",{id:"response-examples"},"Response Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "4MSkwAPzGwnjCJmTfbpW4z4GRC7HZHZNS33c2JikKXJc",\n    "strongParents": [\n        "6LrXyDCorw8bTWKFaEmm3CZG6Nb6Ga8Bmosi1GPypGc1",\n        "B89koPthm9zDx1p1fbkHwoyC1Buq896Spu3Mx1SmSete"\n    ],\n    "weakParents": [],\n    "strongChildren": [\n        "4E4ucAA9UTTd1UC6ri4GYaS4dpzEnHPjs5gMEYhpUK8p",\n        "669BRH69afQ7VfZGmNTMTeh2wnwXGKdBxtUCcRQ9CPzq"\n    ],\n    "weakChildren": [],\n    "issuerPublicKey": "9DB3j9cWYSuEEtkvanrzqkzCQMdH1FGv3TawJdVbDxkd",\n    "issuingTime": 1621873309,\n    "sequenceNumber": 4354,\n    "payloadType": "GenericDataPayloadType(0)",\n    "payload": "BAAAAAAAAAA=",\n    "signature": "2J5XuVnmaHo54WipirWo7drJeXG3iRsnLYfzaPPuy6TXKiVBqv6ZYg2NjYP75xvgvut1SKNm8oYTchGi5t2SjyWJ"\n}\n')),(0,l.kt)("h3",{id:"results"},"Results"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Return field"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Block ID.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"strongParents")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"[]string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"List of strong parents' block IDs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"weakParents")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"[]string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"List of weak parents' block IDs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"strongChildren")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"[]string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"List of strong children' block IDs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"weakChildren")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"[]string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"List of weak children' block IDs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"issuerPublicKey")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"[]string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Public key of issuing node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"issuingTime")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"int64")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Time this block was issued")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"sequenceNumber")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"uint64")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Block sequence number.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"payloadType")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Payload type.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"payload")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"[]byte")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The contents of the block.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"signature")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Block signature.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Error block. Omitted if success.")))),(0,l.kt)("h2",{id:"blocksblockidmetadata"},(0,l.kt)("inlineCode",{parentName:"h2"},"/blocks/:blockID/metadata")),(0,l.kt)("p",null,"Return block metadata."),(0,l.kt)("h3",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"blockID")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required or Optional")),(0,l.kt)("td",{parentName:"tr",align:null},"required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"ID of a block to retrieve")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},"string")))),(0,l.kt)("h3",{id:"examples-1"},"Examples"),(0,l.kt)("h4",{id:"curl-1"},"cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'http://localhost:8080/blocks/:blockID/metadata'\n")),(0,l.kt)("p",null,"where ",(0,l.kt)("inlineCode",{parentName:"p"},":blockID")," is the base58 encoded block ID, e.g. 4MSkwAPzGwnjCJmTfbpW4z4GRC7HZHZNS33c2JikKXJc."),(0,l.kt)("h4",{id:"client-lib---getblockmetadata"},"Client lib - ",(0,l.kt)("inlineCode",{parentName:"h4"},"GetBlockMetadata")),(0,l.kt)("p",null,"Block metadata can be retrieved via ",(0,l.kt)("inlineCode",{parentName:"p"},"GetBlockMetadata(base58EncodedID string) (*jsonmodels.BlockMetadata, error)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"block, err := goshimAPI.GetBlockMetadata(base58EncodedBlockID)\nif err != nil {\n    // return error\n}\n\n// will print whether block is finalized\nfmt.Println(string(block.Finalized))\n")),(0,l.kt)("h3",{id:"response-examples-1"},"Response Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "4MSkwAPzGwnjCJmTfbpW4z4GRC7HZHZNS33c2JikKXJc",\n    "receivedTime": 1621873309,\n    "solid": true,\n    "solidificationTime": 1621873309,\n    "structureDetails": {\n        "rank": 23323,\n        "pastMarkerGap": 0,\n        "isPastMarker": true,\n        "pastMarkers": {\n            "markers": {\n                "1": 21904\n            },\n            "highestIndex": 21904,\n            "lowestIndex": 21904\n        }\n    },\n    "conflictID": "ConflictID(MasterConflictID)",\n    "scheduled": false,\n    "booked": true,\n    "invalid": false,\n    "confirmationState": 3,\n    "confirmationStateTime": 1621873310\n}\n')),(0,l.kt)("h3",{id:"results-1"},"Results"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Return field"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Block ID.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"receivedTime")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"int64")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Time when block was received by the node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"solid")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Flag indicating whether the block is solid.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"solidificationTime")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"int64")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Time when block was solidified by the node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"structureDetails")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"StructureDetails")),(0,l.kt)("td",{parentName:"tr",align:"left"},"List of weak children' block IDs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"conflictID")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Name of conflict that the block is part of.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"scheduled")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Flag indicating whether the block is scheduled.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"booked")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Flag indicating whether the block is booked.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"eligible")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Flag indicating whether the block is eligible.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"invalid")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Flag indicating whether the block is invalid.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"finalized")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Flag indicating whether the block is finalized.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"finalizedTime")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Time when block was finalized.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Error block. Omitted if success.")))),(0,l.kt)("h2",{id:"data"},(0,l.kt)("inlineCode",{parentName:"h2"},"/data")),(0,l.kt)("p",null,"Method: ",(0,l.kt)("inlineCode",{parentName:"p"},"POST")),(0,l.kt)("p",null,"A data block is simply a ",(0,l.kt)("inlineCode",{parentName:"p"},"Block")," containing some raw data (literally bytes). This type of block has therefore no real functionality other than that it is retrievable via ",(0,l.kt)("inlineCode",{parentName:"p"},"GetBlock"),"."),(0,l.kt)("h3",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"data")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required or Optional")),(0,l.kt)("td",{parentName:"tr",align:null},"required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"data bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},"base64 serialized bytes")))),(0,l.kt)("h4",{id:"body"},"Body"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": "dataBytes"\n}\n')),(0,l.kt)("h3",{id:"examples-2"},"Examples"),(0,l.kt)("h4",{id:"curl-2"},"cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'http://localhost:8080/data' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\"data\": \"dataBytes\"}'\n")),(0,l.kt)("h4",{id:"client-lib---data"},"Client lib - ",(0,l.kt)("inlineCode",{parentName:"h4"},"Data")),(0,l.kt)("h5",{id:"datadata-byte-string-error"},(0,l.kt)("inlineCode",{parentName:"h5"},"Data(data []byte) (string, error)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'blockID, err := goshimAPI.Data([]byte("Hello GoShimmer World"))\nif err != nil {\n    // return error\n}\n')),(0,l.kt)("p",null,"Note that there is no need to do any additional work, since things like tip-selection, PoW and other tasks are done by the node itself."),(0,l.kt)("h3",{id:"response-examples-2"},"Response Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "blockID" \n}\n')),(0,l.kt)("h3",{id:"results-2"},"Results"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Return field"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Block ID of the block. Omitted if error.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Error block. Omitted if success.")))),(0,l.kt)("h2",{id:"blockspayload"},(0,l.kt)("inlineCode",{parentName:"h2"},"/blocks/payload")),(0,l.kt)("p",null,"Method: ",(0,l.kt)("inlineCode",{parentName:"p"},"POST")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SendPayload()")," takes a ",(0,l.kt)("inlineCode",{parentName:"p"},"payload")," object of any type (data, transaction, drng, etc.) as a byte slice, issues a block with the given payload and returns its ",(0,l.kt)("inlineCode",{parentName:"p"},"blockID"),". Note that the payload must be valid, otherwise an error is returned."),(0,l.kt)("h3",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"payload")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required or Optional")),(0,l.kt)("td",{parentName:"tr",align:null},"required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"payload bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},"base64 serialized bytes")))),(0,l.kt)("h4",{id:"body-1"},"Body"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "payload": "payloadBytes"\n}\n')),(0,l.kt)("h3",{id:"examples-3"},"Examples"),(0,l.kt)("h4",{id:"curl-3"},"cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'http://localhost:8080/blocks/payload' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\"payload\": \"payloadBytes\"}'\n")),(0,l.kt)("h4",{id:"client-lib---sendpayload"},"Client lib - ",(0,l.kt)("inlineCode",{parentName:"h4"},"SendPayload")),(0,l.kt)("h5",{id:"sendpayloadpayload-byte-string-error"},(0,l.kt)("inlineCode",{parentName:"h5"},"SendPayload(payload []byte) (string, error)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'helloPayload := payload.NewData([]byte{"Hello GoShimmer World!"})\nblockID, err := goshimAPI.SendPayload(helloPayload.Bytes())\n')),(0,l.kt)("h3",{id:"response-examples-3"},"Response Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'{\n  "id": "blockID" \n}\n')),(0,l.kt)("h3",{id:"results-3"},"Results"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Return field"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Block ID of the block. Omitted if error.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Error block. Omitted if success.")))),(0,l.kt)("p",null,"Note that there is no need to do any additional work, since things like tip-selection, PoW and other tasks are done by the node itself."))}m.isMDXComponent=!0}}]);