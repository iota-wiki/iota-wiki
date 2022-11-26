"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[45033],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>h});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),k=u(n),h=l,s=k["".concat(o,".").concat(h)]||k[h]||m[h]||r;return n?a.createElement(s,i(i({ref:e},p),{},{components:n})):a.createElement(s,i({ref:e},p))}));function h(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=k;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:l,i[1]=d;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},37144:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var a=n(87462),l=(n(67294),n(3905));const r={},i=void 0,d={unversionedId:"libraries/java/api/ClientBuilder",id:"libraries/java/api/ClientBuilder",title:"ClientBuilder",description:"The options builder for a client connected to multiple nodes.",source:"@site/iota/external/iota.rs/production/documentation/docs/libraries/java/api/ClientBuilder.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/ClientBuilder",permalink:"/iota.rs/libraries/java/api/ClientBuilder",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/iota/external/iota.rs/production/documentation/docs/libraries/java/api/ClientBuilder.mdx",tags:[],version:"current",frontMatter:{}},o={},u=[{value:"ClientBuilder(): ClientBuilder",id:"clientbuilder-clientbuilder",level:3},{value:"withNode(node): ClientBuilder",id:"withnodenode-clientbuilder",level:3},{value:"withNodes(nodes): ClientBuilder",id:"withnodesnodes-clientbuilder",level:3},{value:"withNodeAuth(node, jwt, username, password): ClientBuilder",id:"withnodeauthnode-jwt-username-password-clientbuilder",level:3},{value:"withPrimaryNode(node, jwt, username, password): ClientBuilder",id:"withprimarynodenode-jwt-username-password-clientbuilder",level:3},{value:"withPrimaryPowNode(node, jwt, username, password): ClientBuilder",id:"withprimarypownodenode-jwt-username-password-clientbuilder",level:3},{value:"withPermanode(node, jwt, username, password): ClientBuilder",id:"withpermanodenode-jwt-username-password-clientbuilder",level:3},{value:"withNodePoolUrls(node_pool_urls): ClientBuilder",id:"withnodepoolurlsnode_pool_urls-clientbuilder",level:3},{value:"withOfflineMode(): ClientBuilder",id:"withofflinemode-clientbuilder",level:3},{value:"withNetwork(network): ClientBuilder",id:"withnetworknetwork-clientbuilder",level:3},{value:"withNodeSyncInterval(node_sync_interval): ClientBuilder",id:"withnodesyncintervalnode_sync_interval-clientbuilder",level:3},{value:"withNodeSyncDisabled(): ClientBuilder",id:"withnodesyncdisabled-clientbuilder",level:3},{value:"withQuorum(quorum): ClientBuilder",id:"withquorumquorum-clientbuilder",level:3},{value:"withQuorumSize(quorum_size): ClientBuilder",id:"withquorumsizequorum_size-clientbuilder",level:3},{value:"withQuorumThreshold(threshold): ClientBuilder",id:"withquorumthresholdthreshold-clientbuilder",level:3},{value:"withMqttBrokerOptions(options): ClientBuilder",id:"withmqttbrokeroptionsoptions-clientbuilder",level:3},{value:"withLocalPow(local): ClientBuilder",id:"withlocalpowlocal-clientbuilder",level:3},{value:"withTipsInterval(tips): ClientBuilder",id:"withtipsintervaltips-clientbuilder",level:3},{value:"withRequestTimeout(timeout): ClientBuilder",id:"withrequesttimeouttimeout-clientbuilder",level:3},{value:"withApiTimeout(api, timeout): ClientBuilder",id:"withapitimeoutapi-timeout-clientbuilder",level:3},{value:"finish(): Client",id:"finish-client",level:3}],p={toc:u};function m(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The options builder for a client connected to multiple nodes."),(0,l.kt)("h3",{id:"clientbuilder-clientbuilder"},"ClientBuilder(): ",(0,l.kt)("a",{parentName:"h3",href:"#clientbuilder"},"ClientBuilder")),(0,l.kt)("p",null,"Create a new instance of the Client"),(0,l.kt)("h3",{id:"withnodenode-clientbuilder"},"withNode(node): ",(0,l.kt)("a",{parentName:"h3",href:"#clientbuilder"},"ClientBuilder")),(0,l.kt)("p",null,"Adds an IOTA node by its URL."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The node URL")))),(0,l.kt)("h3",{id:"withnodesnodes-clientbuilder"},"withNodes(nodes): ",(0,l.kt)("a",{parentName:"h3",href:"#clientbuilder"},"ClientBuilder")),(0,l.kt)("p",null,"Adds a list of IOTA nodes by their URLs."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"String[]"),(0,l.kt)("td",{parentName:"tr",align:null},"The list of node URLs")))),(0,l.kt)("h3",{id:"withnodeauthnode-jwt-username-password-clientbuilder"},"withNodeAuth(node, jwt, username, password): ",(0,l.kt)("a",{parentName:"h3",href:"#clientbuilder"},"ClientBuilder")),(0,l.kt)("p",null,"Adds an IOTA node by its URL with optional jwt and or basic authentication"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The node URL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jwt"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The JWT, can be ",(0,l.kt)("inlineCode",{parentName:"td"},"null"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The username, can be ",(0,l.kt)("inlineCode",{parentName:"td"},"null"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The password, can be ",(0,l.kt)("inlineCode",{parentName:"td"},"null"),". Only checked if username is not ",(0,l.kt)("inlineCode",{parentName:"td"},"null"))))),(0,l.kt)("h3",{id:"withprimarynodenode-jwt-username-password-clientbuilder"},"withPrimaryNode(node, jwt, username, password): ",(0,l.kt)("a",{parentName:"h3",href:"#clientbuilder"},"ClientBuilder")),(0,l.kt)("p",null,"Adds an IOTA node by its URL to be used as primary node, with optional jwt and or basic authentication"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The node URL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jwt"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The JWT, can be ",(0,l.kt)("inlineCode",{parentName:"td"},"null"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The username, can be ",(0,l.kt)("inlineCode",{parentName:"td"},"null"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The password, can be ",(0,l.kt)("inlineCode",{parentName:"td"},"null"),". Only checked if username is not ",(0,l.kt)("inlineCode",{parentName:"td"},"null"))))),(0,l.kt)("h3",{id:"withprimarypownodenode-jwt-username-password-clientbuilder"},"withPrimaryPowNode(node, jwt, username, password): ",(0,l.kt)("a",{parentName:"h3",href:"#clientbuilder"},"ClientBuilder")),(0,l.kt)("p",null,"Adds an IOTA node by its URL to be used as primary PoW node (for remote PoW), with optional jwt and or basic\nauthentication"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The node URL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jwt"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The JWT, can be ",(0,l.kt)("inlineCode",{parentName:"td"},"null"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The username, can be ",(0,l.kt)("inlineCode",{parentName:"td"},"null"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The password, can be ",(0,l.kt)("inlineCode",{parentName:"td"},"null"),". Only checked if username is not ",(0,l.kt)("inlineCode",{parentName:"td"},"null"))))),(0,l.kt)("h3",{id:"withpermanodenode-jwt-username-password-clientbuilder"},"withPermanode(node, jwt, username, password): ",(0,l.kt)("a",{parentName:"h3",href:"#clientbuilder"},"ClientBuilder")),(0,l.kt)("p",null,"Adds an IOTA permanode by its URL, with optional jwt and or basic authentication"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The node URL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jwt"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The JWT, can be ",(0,l.kt)("inlineCode",{parentName:"td"},"null"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The username, can be ",(0,l.kt)("inlineCode",{parentName:"td"},"null"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The password, can be ",(0,l.kt)("inlineCode",{parentName:"td"},"null"),". Only checked if username is not ",(0,l.kt)("inlineCode",{parentName:"td"},"null"))))),(0,l.kt)("h3",{id:"withnodepoolurlsnode_pool_urls-clientbuilder"},"withNodePoolUrls(node_pool_urls): ",(0,l.kt)("a",{parentName:"h3",href:"#clientbuilder"},"ClientBuilder")),(0,l.kt)("p",null,"Get node list from the node_pool_urls"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node_pool_urls"),(0,l.kt)("td",{parentName:"tr",align:null},"String[]"),(0,l.kt)("td",{parentName:"tr",align:null},"node_pool_urls list of node URLs for the node pool")))),(0,l.kt)("h3",{id:"withofflinemode-clientbuilder"},"withOfflineMode(): ",(0,l.kt)("a",{parentName:"h3",href:"#clientbuilder"},"ClientBuilder")),(0,l.kt)("p",null,"Allows creating the client without nodes for offline address generation or signing"),(0,l.kt)("h3",{id:"withnetworknetwork-clientbuilder"},"withNetwork(network): ",(0,l.kt)("a",{parentName:"h3",href:"#clientbuilder"},"ClientBuilder")),(0,l.kt)("p",null,"Client connected to the default Network pool unless specified."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'import org.iota.client.ClientBuilder;\nClient clientOptions = new ClientBuilder().with_network("devnet").build();\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"network"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The network we connect to")))),(0,l.kt)("h3",{id:"withnodesyncintervalnode_sync_interval-clientbuilder"},"withNodeSyncInterval(node_sync_interval): ",(0,l.kt)("a",{parentName:"h3",href:"#clientbuilder"},"ClientBuilder")),(0,l.kt)("p",null,"Set the node sync interval"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node_sync_interval"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"The interval in seconds")))),(0,l.kt)("h3",{id:"withnodesyncdisabled-clientbuilder"},"withNodeSyncDisabled(): ",(0,l.kt)("a",{parentName:"h3",href:"#clientbuilder"},"ClientBuilder")),(0,l.kt)("p",null,"Disables the node syncing process.\nEvery node will be considered healthy and ready to use."),(0,l.kt)("h3",{id:"withquorumquorum-clientbuilder"},"withQuorum(quorum): ",(0,l.kt)("a",{parentName:"h3",href:"#clientbuilder"},"ClientBuilder")),(0,l.kt)("p",null,"Set if quorum should be used or not"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quorum"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")," if we use a quorum")))),(0,l.kt)("h3",{id:"withquorumsizequorum_size-clientbuilder"},"withQuorumSize(quorum_size): ",(0,l.kt)("a",{parentName:"h3",href:"#clientbuilder"},"ClientBuilder")),(0,l.kt)("p",null,"Set amount of nodes which should be used for quorum"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quorum_size"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of nodes")))),(0,l.kt)("h3",{id:"withquorumthresholdthreshold-clientbuilder"},"withQuorumThreshold(threshold): ",(0,l.kt)("a",{parentName:"h3",href:"#clientbuilder"},"ClientBuilder")),(0,l.kt)("p",null,"Set quorum threshold"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"threshold"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"The percentage of nodes that need to agree (0-100)")))),(0,l.kt)("h3",{id:"withmqttbrokeroptionsoptions-clientbuilder"},"withMqttBrokerOptions(options): ",(0,l.kt)("a",{parentName:"h3",href:"#clientbuilder"},"ClientBuilder")),(0,l.kt)("p",null,"Sets the MQTT broker options."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#brokeroptions"},"BrokerOptions")),(0,l.kt)("td",{parentName:"tr",align:null},"the MQTT options")))),(0,l.kt)("h3",{id:"withlocalpowlocal-clientbuilder"},"withLocalPow(local): ",(0,l.kt)("a",{parentName:"h3",href:"#clientbuilder"},"ClientBuilder")),(0,l.kt)("p",null,"Sets whether the PoW should be done locally or remotely."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"local"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Enables or disables local PoW")))),(0,l.kt)("h3",{id:"withtipsintervaltips-clientbuilder"},"withTipsInterval(tips): ",(0,l.kt)("a",{parentName:"h3",href:"#clientbuilder"},"ClientBuilder")),(0,l.kt)("p",null,"Sets after how many seconds new tips will be requested during PoW"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tips"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"delay in seconds")))),(0,l.kt)("h3",{id:"withrequesttimeouttimeout-clientbuilder"},"withRequestTimeout(timeout): ",(0,l.kt)("a",{parentName:"h3",href:"#clientbuilder"},"ClientBuilder")),(0,l.kt)("p",null,"Sets the default request timeout in seconds."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"The request timeout in seconds")))),(0,l.kt)("h3",{id:"withapitimeoutapi-timeout-clientbuilder"},"withApiTimeout(api, timeout): ",(0,l.kt)("a",{parentName:"h3",href:"#clientbuilder"},"ClientBuilder")),(0,l.kt)("p",null,"Sets the request timeout in seconds for a specific API usage."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"api"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#api"},"Api")),(0,l.kt)("td",{parentName:"tr",align:null},"The API we set the timeout for")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"The request timeout in seconds")))),(0,l.kt)("h3",{id:"finish-client"},"finish(): ",(0,l.kt)("a",{parentName:"h3",href:"#client"},"Client")),(0,l.kt)("p",null,"Build the Client instance."))}m.isMDXComponent=!0}}]);