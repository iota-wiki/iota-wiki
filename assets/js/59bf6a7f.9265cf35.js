"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[86391],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(t),f=r,h=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return t?o.createElement(h,l(l({ref:n},d),{},{components:t})):o.createElement(h,l({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3272:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=t(87462),r=(t(67294),t(3905));const a={},l="INX Interface Interaction",i={type:"mdx",permalink:"/tutorials/hornet-inx-interaction",source:"@site/tutorials/pages/hornet-inx-interaction.md",title:"INX Interface Interaction",description:"In this tutorial, you will learn how to interact with the IOTA Node Extension (INX) interface via JavaScript (NodeJS) with both simple requests and streaming requests. The extension uses the inx.proto file to generate the required gRPC client to connect to HORNET. gRPC is a modern open source high performance Remote Procedure Call (RPC) framework that can run in any environment.",frontMatter:{}},s=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Set Up",id:"set-up",level:3},{value:"Prepare development environment",id:"prepare-development-environment",level:4},{value:"Prepare configuration file",id:"prepare-configuration-file",level:4},{value:"Prepare proto file",id:"prepare-proto-file",level:4},{value:"Prepare and run files for simple requests",id:"prepare-and-run-files-for-simple-requests",level:3},{value:"Create new file <code>ReadBlock.js</code> and add the following code.",id:"create-new-file-readblockjs-and-add-the-following-code",level:4},{value:"Run <code>ReadBlock.js</code>",id:"run-readblockjs",level:4},{value:"Create new file <code>ReadNodeConfiguration.js</code> and add the following code.",id:"create-new-file-readnodeconfigurationjs-and-add-the-following-code",level:4},{value:"Run <code>ReadNodeConfiguration.js</code>",id:"run-readnodeconfigurationjs",level:4},{value:"Create new file <code>ReadNodeStatus.js</code> and add the following code.",id:"create-new-file-readnodestatusjs-and-add-the-following-code",level:4},{value:"Run <code>ReadNodeStatus.js</code>",id:"run-readnodestatusjs",level:4},{value:"Prepare and run files for streaming requests",id:"prepare-and-run-files-for-streaming-requests",level:3},{value:"Create new file <code>ListenToBlocks.js</code> and add the following code.",id:"create-new-file-listentoblocksjs-and-add-the-following-code",level:4},{value:"Run <code>ListenToBlocks.js</code>",id:"run-listentoblocksjs",level:4},{value:"Create new file <code>ListenToLatestMilestones.js</code> and add the following code.",id:"create-new-file-listentolatestmilestonesjs-and-add-the-following-code",level:4},{value:"Run <code>ListenToLatestMilestones.js</code>",id:"run-listentolatestmilestonesjs",level:4},{value:"Create new file <code>ReadUnspentOutputs.js</code> and add the following code.",id:"create-new-file-readunspentoutputsjs-and-add-the-following-code",level:4},{value:"Run <code>ReadUnspentOutputs.js</code>",id:"run-readunspentoutputsjs",level:4}],c={toc:s};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"inx-interface-interaction"},"INX Interface Interaction"),(0,r.kt)("p",null,"In this tutorial, you will learn how to interact with the IOTA Node Extension (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/inx"},"INX"),") interface via JavaScript (NodeJS) with both simple requests and streaming requests. The extension uses the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/inx/blob/develop/proto/inx.proto"},"inx.proto")," file to generate the required gRPC client to connect to HORNET. ",(0,r.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC")," is a modern open source high performance Remote Procedure Call (RPC) framework that can run in any environment."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Network",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Option 1: Running ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/hornet/tree/develop/private_tangle"},"Hornet Private Tangle")," (Branch ",(0,r.kt)("strong",{parentName:"li"},"develop")," for the latest ",(0,r.kt)("a",{parentName:"li",href:"https://blog.shimmer.network/stardust-upgrade-in-a-nutshell/"},"Stardust")," features)"),(0,r.kt)("li",{parentName:"ul"},"Option 2: Running a node in ",(0,r.kt)("a",{parentName:"li",href:"https://blog.shimmer.network/shimmer-beta-network-is-live/"},"Shimmer Beta Network")))),(0,r.kt)("li",{parentName:"ul"},"Development Environment and Libraries",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Installed ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"set-up"},"Set Up"),(0,r.kt)("h4",{id:"prepare-development-environment"},"Prepare development environment"),(0,r.kt)("p",null,"Create a new folder for the tutorial in a location of your choice and navigate to it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir inx-interaction\ncd inx-interaction\n")),(0,r.kt)("p",null,"Run the Node.js initializer to configure the project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm init --yes\n")),(0,r.kt)("p",null,"Overwrite the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"{\n  'name': 'inx-interaction',\n  'version': '1.0.0',\n  'description': '',\n  'main': 'index.js',\n  'dependencies':\n    {\n      '@grpc/grpc-js': '^1.5.5',\n      '@koa/router': '^10.1.1',\n      'koa': '^2.13.4',\n      'koa-logger': '^3.2.1',\n    },\n  'scripts': { 'test': 'echo \"Error: no test specified\" && exit 1' },\n  'author': '',\n  'license': 'Apache-2.0',\n}\n")),(0,r.kt)("p",null,"Install new dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"prepare-configuration-file"},"Prepare configuration file"),(0,r.kt)("p",null,"Create new file ",(0,r.kt)("inlineCode",{parentName:"p"},"config.js")," and add the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const grpc = require('@grpc/grpc-js');\nconst protoLoader = require('@grpc/proto-loader');\nconst PROTO_PATH = './inx.proto';\n\nconst INX_ADDRESS = 'localhost:9029';\n\nconst protoOptions = {\n  keepCase: true,\n  longs: String,\n  enums: String,\n  defaults: true,\n  oneofs: true,\n};\n\n// Load the `inx.proto` file\nconst packageDefinition = protoLoader.loadSync(PROTO_PATH, protoOptions);\nconst INX = grpc.loadPackageDefinition(packageDefinition).inx.INX;\n\n// Instantiate an INX client\nconst client = new INX(INX_ADDRESS, grpc.credentials.createInsecure());\n\nmodule.exports = client;\n")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"prepare-proto-file"},"Prepare proto file"),(0,r.kt)("p",null,"Copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"inx-proto")," file from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/inx/blob/develop/proto/inx.proto"},"here")," into your folder. The ",(0,r.kt)("inlineCode",{parentName:"p"},"inx-proto")," file contains the definition of all available endpoints and below you will see a few example of both simple requests and streaming requests."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"prepare-and-run-files-for-simple-requests"},"Prepare and run files for simple requests"),(0,r.kt)("h4",{id:"create-new-file-readblockjs-and-add-the-following-code"},"Create new file ",(0,r.kt)("inlineCode",{parentName:"h4"},"ReadBlock.js")," and add the following code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const client = require('./config.js');\n\n// Some console output will be printed in a different color for better readability\nconst consoleColor = '\\x1b[36m%s\\x1b[0m';\n\nasync function run() {\n  // Fetch random tip\n  const TipsRequest = { count: 1, allowSemiLazy: false };\n\n  const tipBlockId = await new Promise((resolve, reject) => {\n    client.RequestTips(TipsRequest, function (error, answer) {\n      if (error) {\n        reject(error);\n      } else {\n        console.log(consoleColor, 'Random tip');\n        console.log(answer, '\\n');\n\n        const blockId = answer.tips[0].id.toString('hex');\n        resolve(blockId);\n      }\n    });\n  });\n\n  // Fetch block\n  const blockIdBuff = Buffer.from(tipBlockId.toString(), 'hex');\n  const blockId = { id: blockIdBuff };\n\n  await client.ReadBlock(blockId, function (error, answer) {\n    if (error) {\n      console.log(error);\n    } else {\n      console.log(consoleColor, 'Block');\n      console.log(answer, '\\n');\n    }\n  });\n\n  // Fetch block metadata\n  await client.ReadBlockMetadata(blockId, function (error, answer) {\n    if (error) {\n      console.log(error);\n    } else {\n      console.log(consoleColor, 'Block Metadata');\n      console.log(answer, '\\n');\n    }\n  });\n}\n\nrun().catch((err) => console.error(err));\n")),(0,r.kt)("h4",{id:"run-readblockjs"},"Run ",(0,r.kt)("inlineCode",{parentName:"h4"},"ReadBlock.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"node ./ReadBlock.js\n")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"create-new-file-readnodeconfigurationjs-and-add-the-following-code"},"Create new file ",(0,r.kt)("inlineCode",{parentName:"h4"},"ReadNodeConfiguration.js")," and add the following code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const client = require('./config.js');\n\n// Some console output will be printed in a different color for better readability\nconst consoleColor = '\\x1b[36m%s\\x1b[0m';\n\nasync function run() {\n  // Fetch and log node configuration\n  await client.ReadNodeConfiguration({}, function (error, answer) {\n    if (error) {\n      console.log(error);\n    } else {\n      console.log(consoleColor, 'Node Configuration');\n      console.log(answer, '\\n');\n    }\n  });\n}\n\nrun().catch((err) => console.error(err));\n")),(0,r.kt)("h4",{id:"run-readnodeconfigurationjs"},"Run ",(0,r.kt)("inlineCode",{parentName:"h4"},"ReadNodeConfiguration.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"node ./ReadNodeConfiguration.js\n")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"create-new-file-readnodestatusjs-and-add-the-following-code"},"Create new file ",(0,r.kt)("inlineCode",{parentName:"h4"},"ReadNodeStatus.js")," and add the following code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const client = require('./config.js');\n\n// Some console output will be printed in a different color for better readability\nconst consoleColor = '\\x1b[36m%s\\x1b[0m';\n\nasync function run() {\n  // Fetch and log node status\n  await client.ReadNodeStatus({}, function (error, answer) {\n    if (error) {\n      console.log(error);\n    } else {\n      console.log(consoleColor, 'Node Status');\n      console.log(answer, '\\n');\n    }\n  });\n}\n\nrun().catch((err) => console.error(err));\n")),(0,r.kt)("h4",{id:"run-readnodestatusjs"},"Run ",(0,r.kt)("inlineCode",{parentName:"h4"},"ReadNodeStatus.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"node ./ReadNodeStatus.js\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"prepare-and-run-files-for-streaming-requests"},"Prepare and run files for streaming requests"),(0,r.kt)("h4",{id:"create-new-file-listentoblocksjs-and-add-the-following-code"},"Create new file ",(0,r.kt)("inlineCode",{parentName:"h4"},"ListenToBlocks.js")," and add the following code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const client = require('./config.js');\n\n// Listen to the stream of blocks\n// Further Options:\n// client.ListenToSolidBlocks();\n// client.ListenToReferencedBlocks();\n\nvar call = client.ListenToBlocks();\ncall.on('data', function (answer) {\n  console.log(answer);\n});\ncall.on('end', function () {\n  // The server has finished sending\n});\ncall.on('error', function (error) {\n  // An error has occurred and the stream has been closed.\n});\ncall.on('status', function (status) {\n  // process status\n});\n")),(0,r.kt)("h4",{id:"run-listentoblocksjs"},"Run ",(0,r.kt)("inlineCode",{parentName:"h4"},"ListenToBlocks.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"node ./ListenToBlocks.js\n")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"create-new-file-listentolatestmilestonesjs-and-add-the-following-code"},"Create new file ",(0,r.kt)("inlineCode",{parentName:"h4"},"ListenToLatestMilestones.js")," and add the following code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const client = require('./config.js');\n\n// Listen to the stream of latest milestones\nvar call = client.ListenToLatestMilestones();\ncall.on('data', function (answer) {\n  console.log(answer);\n});\ncall.on('end', function () {\n  // The server has finished sending\n});\ncall.on('error', function (error) {\n  // An error has occurred and the stream has been closed.\n});\ncall.on('status', function (status) {\n  // process status\n});\n")),(0,r.kt)("h4",{id:"run-listentolatestmilestonesjs"},"Run ",(0,r.kt)("inlineCode",{parentName:"h4"},"ListenToLatestMilestones.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"node ./ListenToLatestMilestones.js\n")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"create-new-file-readunspentoutputsjs-and-add-the-following-code"},"Create new file ",(0,r.kt)("inlineCode",{parentName:"h4"},"ReadUnspentOutputs.js")," and add the following code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const client = require('./config.js');\n\n// Listen to the stream of latest milestones\nvar call = client.ReadUnspentOutputs();\ncall.on('data', function (answer) {\n  console.log(answer);\n});\ncall.on('end', function () {\n  // The server has finished sending\n});\ncall.on('error', function (error) {\n  // An error has occurred and the stream has been closed.\n});\ncall.on('status', function (status) {\n  // process status\n});\n")),(0,r.kt)("h4",{id:"run-readunspentoutputsjs"},"Run ",(0,r.kt)("inlineCode",{parentName:"h4"},"ReadUnspentOutputs.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"node ./ReadUnspentOutputs.js\n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Feel free to try out additional endpoints of the interface as defined in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/inx/blob/develop/proto/inx.proto"},"inx-proto")," file."))}d.isMDXComponent=!0}}]);