"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[73752],{62857:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},assets:function(){return c},toc:function(){return h},default:function(){return p}});var a=n(83117),o=n(80102),i=(n(67294),n(3905)),r=["components"],s={description:"Introducing nodes and what they can do in the IOTA network (Tangle).",image:"/img/logo/HornetLogo.png",keywords:["IOTA Node","Hornet Node","messages","syncing","synchronizing","UTXO","explanation"]},l="Nodes 101",d={unversionedId:"getting_started/nodes_101",id:"getting_started/nodes_101",title:"Nodes 101",description:"Introducing nodes and what they can do in the IOTA network (Tangle).",source:"@site/external/hornet/documentation/docs/getting_started/nodes_101.md",sourceDirName:"getting_started",slug:"/getting_started/nodes_101",permalink:"/hornet/getting_started/nodes_101",editUrl:"https://github.com/gohornet/hornet/edit/mainnet/external/hornet/documentation/docs/getting_started/nodes_101.md",tags:[],version:"current",frontMatter:{description:"Introducing nodes and what they can do in the IOTA network (Tangle).",image:"/img/logo/HornetLogo.png",keywords:["IOTA Node","Hornet Node","messages","syncing","synchronizing","UTXO","explanation"]},sidebar:"mySidebar",previous:{title:"Getting Started",permalink:"/hornet/getting_started/"},next:{title:"Security 101",permalink:"/hornet/getting_started/security_101"}},c={},h=[{value:"Attaching New Messages to the Tangle",id:"attaching-new-messages-to-the-tangle",level:2},{value:"Synchronizing With the Rest of the Network",id:"synchronizing-with-the-rest-of-the-network",level:2},{value:"Deciding Which Messages Are Confirmed",id:"deciding-which-messages-are-confirmed",level:2},{value:"Keeping a Record of the Balances on Addresses Via <code>UTXO</code>",id:"keeping-a-record-of-the-balances-on-addresses-via-utxo",level:2},{value:"Exposing APIs for Clients",id:"exposing-apis-for-clients",level:2},{value:"HTTP Rest API",id:"http-rest-api",level:3},{value:"Event API",id:"event-api",level:3}],u={toc:h};function p(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nodes-101"},"Nodes 101"),(0,i.kt)("p",null,"The IOTA network is a distributed type of network called Tangle. The network is distributed among several servers\ncalled nodes which are the backbone of an IOTA network."),(0,i.kt)("p",null,"Nodes are responsible for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Providing an API to interact with the Tangle/IOTA network."),(0,i.kt)("li",{parentName:"ul"},"Validating ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.iota.org/chrysalis-docs/guides/developer#messages-payloads-and-transactions"},"messages")," and ledger mutations for consistency."),(0,i.kt)("li",{parentName:"ul"},"Providing data for other nodes to synchronize to the latest state of the network.")),(0,i.kt)("h2",{id:"attaching-new-messages-to-the-tangle"},"Attaching New Messages to the Tangle"),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"message")," is a data structure that is actually being broadcast in the IOTA network and represents a vertex in the\nTangle graph. When nodes receive a new message, they attach it to the Tangle by adding the message to their local database."),(0,i.kt)("p",null,"As a result, at any point in time, all nodes may have different messages in their local databases. These messages make\nup a node's view of the Tangle."),(0,i.kt)("p",null,"To distribute the messages across the rest of the network, nodes synchronize their local databases with their neighbors."),(0,i.kt)("h2",{id:"synchronizing-with-the-rest-of-the-network"},"Synchronizing With the Rest of the Network"),(0,i.kt)("p",null,"Like any distributed system, nodes in an IOTA network synchronize their databases with other nodes called neighbors to form a\nsingle source of truth."),(0,i.kt)("p",null,"When one node, no matter where it is in the world, receives a message, it will try to ",(0,i.kt)("em",{parentName:"p"},"gossip")," it to all its neighbors. This way, all of the nodes will eventually see all the messages, and store them in their local databases."),(0,i.kt)("p",null,"To synchronize, nodes in IOTA networks use milestones. If the node has the history of messages that a milestone references, that milestone is solid. Therefore, nodes know if they are synchronized if the index of their latest solid milestone is the same as the index of the latest milestone that it has received."),(0,i.kt)("p",null,"When a node is synchronized, it then has enough information to decide which transactions it considers confirmed."),(0,i.kt)("h2",{id:"deciding-which-messages-are-confirmed"},"Deciding Which Messages Are Confirmed"),(0,i.kt)("p",null,"Messages remain pending until the node is sure of their validity."),(0,i.kt)("p",null,"Even when a message is valid, there are situations in which nodes may not be able to make a decision, like in the case of a double spend."),(0,i.kt)("p",null,"When nodes detect double spends, they must decide which message to consider confirmed and which one to ignore. Nodes do this by using consensus rules that are built into their node software using a network protocol."),(0,i.kt)("h2",{id:"keeping-a-record-of-the-balances-on-addresses-via-utxo"},"Keeping a Record of the Balances on Addresses Via ",(0,i.kt)("inlineCode",{parentName:"h2"},"UTXO")),(0,i.kt)("p",null,"All nodes keep a record of the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/guides/developer#unspent-transaction-output-utxo"},"Unspent Transaction Outputs (UTXO)")," so they can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check that a transaction is not transferring more IOTA tokens than are available on the address."),(0,i.kt)("li",{parentName:"ul"},"Respond to clients' requests for their balance."),(0,i.kt)("li",{parentName:"ul"},"Once the node has confirmed a transaction with the Tangle, update the node's record of balances. ")),(0,i.kt)("h2",{id:"exposing-apis-for-clients"},"Exposing APIs for Clients"),(0,i.kt)("p",null,"Nodes come with two sets of low-level APIs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HTTP(rest) API."),(0,i.kt)("li",{parentName:"ul"},"Event API.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Developers do not need to communicate with nodes using a mentioned low-level API. Developers can leverage the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/iota.rs/libraries/overview/"},"iota client libraries")," that provide a high-level abstraction to all features IOTA nodes provide, either on HTTP API level or Event API level."))),(0,i.kt)("h3",{id:"http-rest-api"},"HTTP Rest API"),(0,i.kt)("p",null,"The HTTP API allows clients to interact with the Tangle and ask nodes to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Get tip messages."),(0,i.kt)("li",{parentName:"ul"},"Attach new messages to the Tangle."),(0,i.kt)("li",{parentName:"ul"},"Do proof of work (POW)."),(0,i.kt)("li",{parentName:"ul"},"Get messages from the Tangle.")),(0,i.kt)("h3",{id:"event-api"},"Event API"),(0,i.kt)("p",null,"The Event API allows clients to poll nodes for new messages and other events that happen on nodes. This type of API is useful for building applications such as custodial wallets that need to monitor the Tangle for updates to the balances of certain addresses."))}p.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=o,g=u["".concat(l,".").concat(p)]||u[p]||h[p]||i;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);