"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[130],{58153:(n,e,t)=>{t.d(e,{ZP:()=>c});var a=t(87462),o=(t(67294),t(3905));const s={toc:[]};function c(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Guide Coming Soon",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This how to guide is not available in your language of choice at the moment.\nPlease feel free to browse ",(0,o.kt)("a",{parentName:"p",href:"/next/wallet.rs/how_tos/more_examples"},"more examples")," which may suit your requirements.")))}c.isMDXComponent=!0},21625:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>_,contentTitle:()=>T,default:()=>N,frontMatter:()=>w,metadata:()=>v,toc:()=>I});var a=t(87462),o=(t(67294),t(3905)),s=t(34259),c=t(18679),i=t(69319);const l={toc:[]};function r(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{className:"language-javascript",mdxType:"CodeBlock"},"/**\n * This example lists the transactions of the first account\n */\nconst getUnlockedManager = require('./account-manager');\n\nasync function run() {\n    try {\n        const manager = await getUnlockedManager();\n        const account = await manager.getAccount('Alice');\n        \n        await account.sync();\n        const transactions = await account.transactions()\n        console.log('Listing Transactions:', transactions);\n    } catch (error) {\n        console.log('Error: ', error);\n    }\n    process.exit(0);\n}\n\nrun();\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,o.kt)(i.Z,{className:"language-bash",mdxType:"CodeBlock"},"node 12c-list-transactions.js"))}r.isMDXComponent=!0;const d={toc:[]};function u(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Listing Transactions: [\n  {\n    payload: { type: 6, essence: [Object], unlocks: [Array] },\n    blockId: '0x7bebed05d7687206a24e0461305af41900fe57f4480bff08ac79d0f193f99a63',\n    inclusionState: 'Confirmed',\n    timestamp: '1663005355019',\n    transactionId: '0xc4cd87bb0f33f2be15fab5454628ca21dc7f516120e7ddae8f87f4308b123412',\n    networkId: '8342982141227064571',\n    incoming: false,\n    note: null\n  }\n  [...]\n]\n")))}u.isMDXComponent=!0;const p={toc:[]};function m(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{className:"language-python",mdxType:"CodeBlock"},"from iota_wallet import IotaWallet\n\n# In this example we will list the sent transactions\n\nwallet = IotaWallet('./alice-database')\n\naccount = wallet.get_account('Alice')\n\nwallet.set_stronghold_password(\"some_hopefully_secure_password\")\n\n# All transactions sent from the the account\ntransactions = account.transactions()\nprint(f'Transactions: {transactions}')\n\n# Pending transactions\npending_transactions = account.pending_transactions()\nprint(f'Pending transactions: {pending_transactions}')\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"binding/python/native/examples")," folder:"),(0,o.kt)(i.Z,{className:"language-bash",mdxType:"CodeBlock"},"python3 11-list-transactions.py"))}m.isMDXComponent=!0;const f={toc:[]};function b(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Transactions:[\n    {\n        'payload':{\n            'type':6,\n            'essence':{\n                'type':1,\n                'networkId':'8342982141227064571',\n                'inputs':[\n                    {\n                        'type':0,\n                        'transactionId':'0x79edb042038431009408d734a337f6fae9dcec97b0d7572665d0c184ea74b82f',\n                        'transactionOutputIndex':0\n                    },\n                    {\n                        'type':0,\n                        'transactionId':'0xf4676daae96cf629c04d8d62989dec6d9dbbac221959d72c399729f92047ec14',\n                        'transactionOutputIndex':0\n                    }\n                ],\n                'inputsCommitment':'0x51a6fe8c7670746c2a45f620be0055c1853f84599c68490a7258ee3c41ba2332',\n                'outputs':[\n                    {\n                        'type':3,\n                        'amount':'50600',\n                        'unlockConditions':[\n                            {\n                                'type':0,\n                                'address':{\n                                    'type':0,\n                                    'pubKeyHash':'0xf8ba764448d689422aa59a5c5dc97108450a29cb8956208f631ab4a82338468a'\n                                }\n                            }\n                        ]\n                    },\n                    {\n                        'type':3,\n                        'amount':'1000000001',\n                        'unlockConditions':[\n                            {\n                                'type':0,\n                                'address':{\n                                    'type':0,\n                                    'pubKeyHash':'0xf4d94c9f4e63d553c81e644225fa3bbc412f820c4eafd495aeb0bb05a29922b2'\n                                }\n                            }\n                        ]\n                    }\n                ]\n            },\n            'unlocks':[\n                {\n                    'type':0,\n                    'signature':{\n                        'type':0,\n                        'publicKey':'0xee4164cca9a455db3164ec2a3c3ebc2db57aec8c4cb3231c3dc6cda0c700e1bd',\n                        'signature':'0xf474de893c5a47d9114d2a95f1bd0e4c83b464e8a17886a07ea8d04046949a17dbb8173183c08d4cadbe530c7f42a65fa3286a5f28644a76cf59f6411a04220f'\n                    }\n                },\n                {\n                    'type':1,\n                    'reference':0\n                }\n            ]\n        },\n        'blockId':'0x99d29eceb87b44664361f7faf9d8f3b072c6e3e890953fdf956f6d148d9b04b2',\n        'inclusionState':'Pending',\n        'timestamp':'1665992931904',\n        'transactionId':'0xeed7357bf0c0bbdca809e5e537af5a10872e488b26a157af78c68e104420ad75',\n        'networkId':'8342982141227064571',\n        'incoming':False,\n        'note':None\n    }\n]\nPending transactions:[\n    {\n        'payload':{\n            'type':6,\n            'essence':{\n                'type':1,\n                'networkId':'8342982141227064571',\n                'inputs':[\n                    {\n                        'type':0,\n                        'transactionId':'0x79edb042038431009408d734a337f6fae9dcec97b0d7572665d0c184ea74b82f',\n                        'transactionOutputIndex':0\n                    },\n                    {\n                        'type':0,\n                        'transactionId':'0xf4676daae96cf629c04d8d62989dec6d9dbbac221959d72c399729f92047ec14',\n                        'transactionOutputIndex':0\n                    }\n                ],\n                'inputsCommitment':'0x51a6fe8c7670746c2a45f620be0055c1853f84599c68490a7258ee3c41ba2332',\n                'outputs':[\n                    {\n                        'type':3,\n                        'amount':'50600',\n                        'unlockConditions':[\n                            {\n                                'type':0,\n                                'address':{\n                                    'type':0,\n                                    'pubKeyHash':'0xf8ba764448d689422aa59a5c5dc97108450a29cb8956208f631ab4a82338468a'\n                                }\n                            }\n                        ]\n                    },\n                    {\n                        'type':3,\n                        'amount':'1000000001',\n                        'unlockConditions':[\n                            {\n                                'type':0,\n                                'address':{\n                                    'type':0,\n                                    'pubKeyHash':'0xf4d94c9f4e63d553c81e644225fa3bbc412f820c4eafd495aeb0bb05a29922b2'\n                                }\n                            }\n                        ]\n                    }\n                ]\n            },\n            'unlocks':[\n                {\n                    'type':0,\n                    'signature':{\n                        'type':0,\n                        'publicKey':'0xee4164cca9a455db3164ec2a3c3ebc2db57aec8c4cb3231c3dc6cda0c700e1bd',\n                        'signature':'0xf474de893c5a47d9114d2a95f1bd0e4c83b464e8a17886a07ea8d04046949a17dbb8173183c08d4cadbe530c7f42a65fa3286a5f28644a76cf59f6411a04220f'\n                    }\n                },\n                {\n                    'type':1,\n                    'reference':0\n                }\n            ]\n        },\n        'blockId':'0x99d29eceb87b44664361f7faf9d8f3b072c6e3e890953fdf956f6d148d9b04b2',\n        'inclusionState':'Pending',\n        'timestamp':'1665992931904',\n        'transactionId':'0xeed7357bf0c0bbdca809e5e537af5a10872e488b26a157af78c68e104420ad75',\n        'networkId':'8342982141227064571',\n        'incoming':False,\n        'note':None\n    }\n]\n")))}b.isMDXComponent=!0;const y={toc:[]};function h(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},y,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{className:"language-java",mdxType:"CodeBlock"},"// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport org.iota.Wallet;\nimport org.iota.types.*;\nimport org.iota.types.account_methods.SyncAccount;\nimport org.iota.types.exceptions.InitializeWalletException;\nimport org.iota.types.exceptions.WalletException;\nimport org.iota.types.ids.account.AccountAlias;\nimport org.iota.types.secret.StrongholdSecretManager;\n\npublic class ListTransactions {\n    public static void main(String[] args) throws WalletException, InterruptedException, InitializeWalletException {\n        // This example assumes that a wallet has already been created using the \xb4CreateWallet.java\xb4 example.\n        // If you have not run the \xb4CreateAccount.java\xb4 example yet, run it first to ensure that the wallet can be loaded correctly.\n        Wallet wallet = new Wallet(new WalletConfig()\n                .withClientOptions(new ClientConfig().withNodes(Env.NODE))\n                .withSecretManager(\n                        new StrongholdSecretManager(Env.STRONGHOLD_PASSWORD, null, Env.STRONGHOLD_SNAPSHOT_PATH))\n                .withCoinType(CoinType.Shimmer)\n        );\n\n        // Get account and sync it with the registered node to ensure that its balances are up-to-date.\n        AccountHandle a = wallet.getAccount(new AccountAlias(Env.ACCOUNT_NAME));\n        a.syncAccount(new SyncAccount().withOptions(new SyncOptions()));\n\n        // Get transactions.\n        Transaction[] transactions = a.getTransactions();\n\n        // Print transactions.\n        for (Transaction tx : transactions)\n            System.out.println(tx.toString());\n    }\n\n}"))}h.isMDXComponent=!0;const g={toc:[]};function x(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},g,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "outputId":"0xd96c9cdf8c6b095f7ab44105f8298c766a7433664db651bfbd7832566d59f1030000",\n   "metadata":{\n      "blockId":"0xf56489d9df639ab25e9a72070c4bb5409a8818ccdb5718125538e792f2f27e99",\n      "transactionId":"0xd96c9cdf8c6b095f7ab44105f8298c766a7433664db651bfbd7832566d59f103",\n      "outputIndex":0,\n      "isSpent":false,\n      "milestoneIndexBooked":1235250,\n      "milestoneTimestampBooked":1664311584,\n      "ledgerIndex":1244051\n   },\n   "output":{\n      "type":6,\n      "amount":"52000",\n      "nftId":"0x0000000000000000000000000000000000000000000000000000000000000000",\n      "unlockConditions":[\n         {\n            "type":0,\n            "address":{\n               "type":0,\n               "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n            }\n         }\n      ],\n      "features":[\n         {\n            "type":2,\n            "data":"0x5368696d6d65722e20546f6b656e697a652045766572797468696e672e2048656c6c6f2066726f6d20746865204a6176612062696e64696e672e"\n         }\n      ]\n   },\n   "isSpent":false,\n   "address":{\n      "type":0,\n      "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n   },\n   "networkId":"8342982141227064571",\n   "remainder":false,\n   "chain":[\n      {\n         "hardened":true,\n         "bs":[\n            128,\n            0,\n            0,\n            44\n         ]\n      },\n      {\n         "hardened":true,\n         "bs":[\n            128,\n            0,\n            16,\n            123\n         ]\n      },\n      {\n         "hardened":true,\n         "bs":[\n            128,\n            0,\n            0,\n            0\n         ]\n      },\n      {\n         "hardened":true,\n         "bs":[\n            128,\n            0,\n            0,\n            0\n         ]\n      },\n      {\n         "hardened":true,\n         "bs":[\n            128,\n            0,\n            0,\n            0\n         ]\n      }\n   ]\n}\n')))}x.isMDXComponent=!0;var k=t(58153);const w={title:"List Transactions",description:"How to list all the transactions related to a wallet.rs account.",image:"/img/logo/iota_mark_light.png",keywords:["how to","account","list transactions","nodejs","python","java","rust"]},T=void 0,v={unversionedId:"how_tos/outputs_and_transactions/list_transactions",id:"how_tos/outputs_and_transactions/list_transactions",title:"List Transactions",description:"How to list all the transactions related to a wallet.rs account.",source:"@site/next/external/wallet.rs/documentation/docs/how_tos/outputs_and_transactions/05_list_transactions.mdx",sourceDirName:"how_tos/outputs_and_transactions",slug:"/how_tos/outputs_and_transactions/list_transactions",permalink:"/next/wallet.rs/how_tos/outputs_and_transactions/list_transactions",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/next/external/wallet.rs/documentation/docs/how_tos/outputs_and_transactions/05_list_transactions.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"List Transactions",description:"How to list all the transactions related to a wallet.rs account.",image:"/img/logo/iota_mark_light.png",keywords:["how to","account","list transactions","nodejs","python","java","rust"]},sidebar:"docs",previous:{title:"Claim Outputs",permalink:"/next/wallet.rs/how_tos/outputs_and_transactions/claim_outputs"},next:{title:"Destroy an Alias Output",permalink:"/next/wallet.rs/how_tos/outputs_and_transactions/destroy_alias_output"}},_={},I=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],C={toc:I};function N(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},C,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can list all the transactions related to an account by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"Account.transactions()")," function after you\nhave instantiated the account. Bear in mind that you will need to call the ",(0,o.kt)("inlineCode",{parentName:"p"},"Account.sync()")," function to get the latest\ninformation from the node."),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)("p",null,"The following example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an account manager."),(0,o.kt)("li",{parentName:"ol"},"Get Alice's account which was ",(0,o.kt)("a",{parentName:"li",href:"/next/wallet.rs/how_tos/accounts_and_addresses/create_a_wallet_account"},"created in the first guide"),"."),(0,o.kt)("li",{parentName:"ol"},"Sync the account to get the latest transactions from the node."),(0,o.kt)("li",{parentName:"ol"},"List the transactions using the ",(0,o.kt)("inlineCode",{parentName:"li"},"Account.transactions()")," function.")),(0,o.kt)(s.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(k.ZP,{mdxType:"RustCode"})),(0,o.kt)(c.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(r,{mdxType:"NodejsCode"})),(0,o.kt)(c.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(m,{mdxType:"PythonCode"})),(0,o.kt)(c.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(h,{mdxType:"JavaCode"}))),(0,o.kt)("h2",{id:"expected-output"},"Expected Output"),(0,o.kt)(s.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(k.ZP,{mdxType:"RustOutput"})),(0,o.kt)(c.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(u,{mdxType:"NodejsOutput"})),(0,o.kt)(c.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(b,{mdxType:"PythonOutput"})),(0,o.kt)(c.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(x,{mdxType:"JavaOutput"}))))}N.isMDXComponent=!0},18679:(n,e,t)=>{t.d(e,{Z:()=>c});var a=t(67294),o=t(86010);const s="tabItem_Ymn6";function c(n){let{children:e,hidden:t,className:c}=n;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(s,c),hidden:t},e)}},34259:(n,e,t)=>{t.d(e,{Z:()=>m});var a=t(87462),o=t(67294),s=t(86010),c=t(51048),i=t(33609),l=t(1943),r=t(72957);const d="tabList__CuJ",u="tabItem_LNqP";function p(n){var e;const{lazy:t,block:c,defaultValue:p,values:m,groupId:f,className:b}=n,y=o.Children.map(n.children,(n=>{if((0,o.isValidElement)(n)&&"value"in n.props)return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??y.map((n=>{let{props:{value:e,label:t,attributes:a}}=n;return{value:e,label:t,attributes:a}})),g=(0,i.l)(h,((n,e)=>n.value===e.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const x=null===p?p:p??(null==(e=y.find((n=>n.props.default)))?void 0:e.props.value)??y[0].props.value;if(null!==x&&!h.some((n=>n.value===x)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${x}" but none of its children has the corresponding value. Available values are: ${h.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,l.U)(),[T,v]=(0,o.useState)(x),_=[],{blockElementScrollPositionUntilNextRender:I}=(0,r.o5)();if(null!=f){const n=k[f];null!=n&&n!==T&&h.some((e=>e.value===n))&&v(n)}const C=n=>{const e=n.currentTarget,t=_.indexOf(e),a=h[t].value;a!==T&&(I(e),v(a),null!=f&&w(f,String(a)))},N=n=>{var e;let t=null;switch(n.key){case"ArrowRight":{const e=_.indexOf(n.currentTarget)+1;t=_[e]??_[0];break}case"ArrowLeft":{const e=_.indexOf(n.currentTarget)-1;t=_[e]??_[_.length-1];break}}null==(e=t)||e.focus()};return o.createElement("div",{className:(0,s.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},b)},h.map((n=>{let{value:e,label:t,attributes:c}=n;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:n=>_.push(n),onKeyDown:N,onFocus:C,onClick:C},c,{className:(0,s.Z)("tabs__item",u,null==c?void 0:c.className,{"tabs__item--active":T===e})}),t??e)}))),t?(0,o.cloneElement)(y.filter((n=>n.props.value===T))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},y.map(((n,e)=>(0,o.cloneElement)(n,{key:e,hidden:n.props.value!==T})))))}function m(n){const e=(0,c.Z)();return o.createElement(p,(0,a.Z)({key:String(e)},n))}}}]);