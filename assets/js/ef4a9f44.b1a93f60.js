"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[45832],{14108:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={description:"How to interact with the L1 ledger in Solo.",image:"/img/logo/WASP_logo_dark.png",keywords:["testing","solo","UTXO","tokens","ledger","l1"]},l="The L1 Ledger",d={unversionedId:"guide/solo/the-l1-ledger",id:"guide/solo/the-l1-ledger",title:"The L1 Ledger",description:"How to interact with the L1 ledger in Solo.",source:"@site/content/build/wasp/develop/documentation/docs/guide/solo/the-l1-ledger.md",sourceDirName:"guide/solo",slug:"/guide/solo/the-l1-ledger",permalink:"/smart-contracts/develop/guide/solo/the-l1-ledger",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/solo/the-l1-ledger.md",tags:[],version:"current",frontMatter:{description:"How to interact with the L1 ledger in Solo.",image:"/img/logo/WASP_logo_dark.png",keywords:["testing","solo","UTXO","tokens","ledger","l1"]},sidebar:"tutorialSidebar",previous:{title:"First Example",permalink:"/smart-contracts/develop/guide/solo/first-example"},next:{title:"Deploying Wasm Smart Contracts",permalink:"/smart-contracts/develop/guide/solo/deploying-sc"}},c={},p=[],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-l1-ledger"},"The L1 Ledger"),(0,a.kt)("p",null,"IOTA Smart Contracts work as a ",(0,a.kt)("strong",{parentName:"p"},"layer 2")," (",(0,a.kt)("strong",{parentName:"p"},"L2"),") extension of the ",(0,a.kt)("em",{parentName:"p"},"IOTA Multi-Asset Ledger")," (",(0,a.kt)("strong",{parentName:"p"},"L1"),").\nThe specifics of the ledger is outside the scope of this documentation; for now it is sufficient to know that the ledger contains balances of different kinds of assets (base tokens, native tokens, foundries and NFTs) locked in addresses.\nAssets can only be moved on the ledger by unlocking the corresponding address with its private key."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"In this tutorial we will use ",(0,a.kt)("inlineCode",{parentName:"p"},"private key")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"wallet")," as synonyms."))),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"Address: iota1pr7vescn4nqc9lpvv37unzryqc43vw5wuf2zx8tlq2wud0369hjjugg54mf\n    IOTA: 4012720\n    Native token 0x08fcccc313acc182fc2c647dc98864062b163a8ee254231d7f029dc6be3a2de52e0100000000: 100\n    NFT 0x94cd51b79d9608ed6e38780d48e9fc8c295b893077739b28ce591c45b33dec44\n")),(0,a.kt)("p",null,"In this example, the address owns some base tokens (IOTA), 100 units of a native token with ID ",(0,a.kt)("inlineCode",{parentName:"p"},"0x08fc..."),", and an NFT with ID ",(0,a.kt)("inlineCode",{parentName:"p"},"0x94cd..."),"."),(0,a.kt)("p",null,"You can find more information about the ledger in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lzpap/tips/blob/master/tips/TIP-0018/tip-0018.md"},"Multi-Asset Ledger TIP"),"."),(0,a.kt)("p",null,"In normal operation, the L2 state is maintained by a committee of Wasp nodes, while the L1 ledger is provided and maintained by a network of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/hornet"},"Hornet")," nodes, which is a distributed implementation of the IOTA Multi-Asset Ledger."),(0,a.kt)("p",null,"The Solo environment implements a standalone in-memory ledger, simulating the behavior of a real L1 ledger without the need to run a network of Hornet nodes."),(0,a.kt)("p",null,"The following example creates a new wallet (private/public key pair) and requests some base tokens from the faucet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func TestTutorialL1(t *testing.T) {\n    env := solo.New(t)\n    _, userAddress := env.NewKeyPairWithFunds(env.NewSeedFromIndex(1))\n    t.Logf("address of the user is: %s", userAddress.Bech32(parameters.L1.Protocol.Bech32HRP))\n    numBaseTokens := env.L1BaseTokens(userAddress)\n    t.Logf("balance of the user is: %d base tokens", numBaseTokens)\n    env.AssertL1BaseTokens(userAddress, utxodb.FundsFromFaucetAmount)\n}\n')),(0,a.kt)("p",null,"The output of the test is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"=== RUN   TestTutorialL1\n47:49.136622566 INFO    TestTutorialL1.db   dbmanager/dbmanager.go:64   creating new in-memory database for: CHAIN_REGISTRY\n47:49.136781104 INFO    TestTutorialL1  solo/solo.go:162    Solo environment has been created: logical time: 00:01.001000000, time step: 1ms\n    tutorial_test.go:32: address of the user is: tgl1qp5d8zm9rr9rcae2hq95plx0rquy5gu2mpedurm2kze238neuhh5csjngz0\n    tutorial_test.go:34: balance of the user is: 1000000000 base tokens\n--- PASS: TestTutorialL1 (0.00s)\n")),(0,a.kt)("p",null,"The L1 ledger in Solo can be accessed via the Solo instance called ",(0,a.kt)("inlineCode",{parentName:"p"},"env"),".\nThe ledger is unique for the lifetime of the Solo environment.\nEven if several L2 chains are deployed during the test, all of them will live\non the same L1 ledger; this way Solo makes it possible to test cross-chain transactions.\n(Note that in the test above we did not deploy any chains: the L1 ledger exists\nindependently of any chains.)"))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);