"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[1770],{64091:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var a=t(87462),o=t(63366),r=(t(67294),t(3905)),i=t(87308),s=["components"],l={description:"Easily integrate with your exchange, custody solution, or product using the wallet.rs library.",keywords:["integrate","exchange","account model","addresses","wallet.rs","setup","NodeJS","explanation"]},c="Stardust Exchange Integration Guide",d={unversionedId:"libraries/nodejs/exchange_guide",id:"libraries/nodejs/exchange_guide",title:"Stardust Exchange Integration Guide",description:"Easily integrate with your exchange, custody solution, or product using the wallet.rs library.",source:"@site/content/build/wallet.rs/develop/documentation/docs/libraries/nodejs/exchange_guide.md",sourceDirName:"libraries/nodejs",slug:"/libraries/nodejs/exchange_guide",permalink:"/wallet.rs/develop/libraries/nodejs/exchange_guide",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/content/build/wallet.rs/develop/documentation/docs/libraries/nodejs/exchange_guide.md",tags:[],version:"current",frontMatter:{description:"Easily integrate with your exchange, custody solution, or product using the wallet.rs library.",keywords:["integrate","exchange","account model","addresses","wallet.rs","setup","NodeJS","explanation"]},sidebar:"docs",previous:{title:"Examples",permalink:"/wallet.rs/develop/libraries/nodejs/examples"},next:{title:"Troubleshooting",permalink:"/wallet.rs/develop/troubleshooting"}},u={},p=[{value:"Account Approaches",id:"account-approaches",level:2},{value:"Multi-Account Approach",id:"multi-account-approach",level:3},{value:"Single Account Approach",id:"single-account-approach",level:3},{value:"Implementation Guide",id:"implementation-guide",level:2},{value:"How Does it Work?",id:"how-does-it-work",level:3},{value:"1. Set Up the Wallet.rs Library",id:"1-set-up-the-walletrs-library",level:3},{value:"1 Generate a mnemonic",id:"1-generate-a-mnemonic",level:4},{value:"2 Create an account",id:"2-create-an-account",level:4},{value:"3. Generate a User Address to Deposit Funds",id:"3-generate-a-user-address-to-deposit-funds",level:3},{value:"4. Check the Account Balance",id:"4-check-the-account-balance",level:3},{value:"5. Listen to Events",id:"5-listen-to-events",level:3},{value:"6. Enable Withdrawals",id:"6-enable-withdrawals",level:3}],m={toc:p};function h(e){var n=e.components,t=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stardust-exchange-integration-guide"},"Stardust Exchange Integration Guide"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can easily integrate wallet.rs with your exchange, custody solution, or product."))),(0,r.kt)("h2",{id:"account-approaches"},"Account Approaches"),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"/wallet.rs/develop/welcome"},"wallet.rs"),", you can use an account model to ",(0,r.kt)("a",{parentName:"p",href:"#multi-account-approach"},"create an account for each user")," or ",(0,r.kt)("a",{parentName:"p",href:"#single-account-approach"},"use one account and generate multiple addresses"),", which you can then link to the users in your database. The wallet library is as flexible as possible and can back up any of your use cases."),(0,r.kt)("p",null,"The library supports derivation for multiple accounts from a single seed. An account is simply a deterministic identifier from which multiple addresses can be further derived. "),(0,r.kt)("p",null,"The library also allows consumers to assign a meaningful alias to each account. Since addresses are reusable, they can be mapped to your users in a clear and concise way."),(0,r.kt)("h3",{id:"multi-account-approach"},"Multi-Account Approach"),(0,r.kt)("p",null,"You should use the multi-account approach if you want to create an account for each individual user. You can link the accounts to the internal user IDs as an account alias, which are distinctly separated."),(0,r.kt)("h3",{id:"single-account-approach"},"Single Account Approach"),(0,r.kt)("p",null,"You should use the single account approach if you want to create a single account and then create an address for each user. You will need to link the associated addresses to the internal user IDs and store who owns which address in a database. Most exchanges are familiar with the single account approach and find it easier to use, implement, and backup."),(0,r.kt)("h2",{id:"implementation-guide"},"Implementation Guide"),(0,r.kt)("p",null,"This guide explains how to implement the Wallet library in your exchange."),(0,r.kt)("p",null,"Features of the Wallet Library:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Secure seed management."),(0,r.kt)("li",{parentName:"ul"},"Account management with multiple accounts and multiple addresses."),(0,r.kt)("li",{parentName:"ul"},"Confirmation monitoring."),(0,r.kt)("li",{parentName:"ul"},"Deposit address monitoring."),(0,r.kt)("li",{parentName:"ul"},"Backup and restore functionality.")),(0,r.kt)("h3",{id:"how-does-it-work"},"How Does it Work?"),(0,r.kt)("p",null,"The Wallet Library is a stateful package with a standardized interface for developers to build applications involving value transactions. It offers abstractions to handle payments and can optionally interact with ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/stronghold.rs/getting_started"},"Stronghold")," for seed handling, seed storage, and state backup."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are not familiar with the wallet.rs library, you can find more information in the ",(0,r.kt)("a",{parentName:"p",href:"/wallet.rs/develop/welcome"},"documentation"),"."))),(0,r.kt)("p",null,"You can use the following examples as a guide to implementing ",(0,r.kt)("em",{parentName:"p"},"the multi-account approach")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeJS")," binding:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#1-set-up-the-wallet-library"},"Set up the wallet.rs library"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#2-create-an-account-for-a-user"},"Create an account for each user"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#3-generate-a-user-address-to-deposit-funds"},"Generate a user address to deposit funds"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#4-check-the-account-balance"},"Check the user balance"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#5-listen-to-events"},"Listen to events"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#6-enable-withdrawals"},"Enable withdrawals"),".")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are looking for other languages, please read the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wallet.rs/develop/overview"},"wallet.rs library overview"),"."))),(0,r.kt)("p",null,"Since all ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet.rs")," bindings are based on core principles provided by the ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library, the outlined approach is very similar regardless of the programming language you choose."),(0,r.kt)("h3",{id:"1-set-up-the-walletrs-library"},"1. Set Up the Wallet.rs Library"),(0,r.kt)("p",null,"First, you should install the components that are needed to use ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet.rs")," and the binding of your choice; it may vary a bit from language to language. In the case of the ",(0,r.kt)("a",{parentName:"p",href:"/wallet.rs/develop/libraries/nodejs/getting_started"},"NodeJs binding"),", it is straightforward since it is distributed via the ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," package manager."),(0,r.kt)("p",null,"You can read more about ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/introduction/guides/backup_security"},"backup and security in this guide"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @iota/wallet dotenv\n")),(0,r.kt)("h4",{id:"1-generate-a-mnemonic"},"1 Generate a mnemonic"),(0,r.kt)(i.Z,{className:"language-javascript",mdxType:"CodeBlock"},"/**\n * This example generates a new random mnemonic\n */\n\nconst { AccountManager, CoinType } = require('@iota/wallet');\n\nasync function run() {\n    try {\n        const manager = new AccountManager({\n            storagePath: './mnemonic-generation',\n            clientOptions: {\n                offline: true\n            },\n            coinType: CoinType.Shimmer,\n            // Placeholder can't be used for address generation or signing, but we can use it since we only want to generate a mnemonic\n            secretManager: \"Placeholder\",\n        });\n\n        console.log('Generated mnemonic:', await manager.generateMnemonic());\n        // Set generated mnemonic as env variable for MNEMONIC so it can be used in 1-create-account.js\n\n        // delete unecessary db folder again\n        require('fs').rmSync('./mnemonic-generation', { recursive: true, force: true });\n\n    } catch (error) {\n        console.log('Error: ', error);\n    }\n    process.exit(0);\n}\n\nrun();\n"),(0,r.kt)("p",null,"You can then create a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"touch .env\n")),(0,r.kt)("p",null,"You can now add your ",(0,r.kt)("inlineCode",{parentName:"p"},"SH_PASSWORD")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MNEMONIC")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'SH_PASSWORD="here is your super secure password"\nMNEMONIC="here is your super secure 24 word mnemonic, it\'s only needed here the first time"\n')),(0,r.kt)("p",null,"After you have updated the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file, you can initialize the ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountManager")," instance with a secret manager(",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/stronghold.rs/getting_started"},(0,r.kt)("inlineCode",{parentName:"a"},"Stronghold"))," by default) and client options."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Manage your password with the utmost care."))),(0,r.kt)("p",null,"By default, the Stronghold file will be called ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet.stronghold"),". It will store the seed (derived from the mnemonic) that serves as a cryptographic key from which all accounts and related addresses are generated."),(0,r.kt)("p",null,"One of the key principles behind the ",(0,r.kt)("inlineCode",{parentName:"p"},"stronghold")," is that no one can get a seed out of it, so you should also back up your 24-word mnemonic in a secure place because there is no way to recover it from the ",(0,r.kt)("inlineCode",{parentName:"p"},".stronghold")," file. You deal with accounts using the ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountManager")," instance exclusively, where all complexities are hidden under the hood and are dealt with securely."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Keep the ",(0,r.kt)("inlineCode",{parentName:"p"},"stronghold")," password and the ",(0,r.kt)("inlineCode",{parentName:"p"},"stronghold")," database on separate devices. See the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/introduction/guides/backup_security"},"backup and security guide")," for more information."))),(0,r.kt)("h4",{id:"2-create-an-account"},"2 Create an account"),(0,r.kt)("p",null,"You can import the Wallet Library and create an account manager using the following example:"),(0,r.kt)(i.Z,{className:"language-javascript",mdxType:"CodeBlock"},"/**\n * This example creates a new database and account\n */\n\nrequire('dotenv').config();\nconst { AccountManager, CoinType } = require('@iota/wallet');\n\nasync function run() {\n    try {\n        const accountManagerOptions = {\n            storagePath: './alice-database',\n            clientOptions: {\n                nodes: ['https://api.testnet.shimmer.network'],\n            },\n            // CoinType.IOTA can be used to access Shimmer staking rewards, but it's\n            // recommended to use the Shimmer coin type to be compatible with other wallets.\n            coinType: CoinType.Shimmer,\n            secretManager: {\n                Stronghold: {\n                    snapshotPath: `./wallet.stronghold`,\n                    password: `${process.env.SH_PASSWORD}`,\n                },\n            },\n        };\n\n        const manager = new AccountManager(accountManagerOptions);\n\n        // Mnemonic only needs to be set the first time\n        await manager.storeMnemonic(process.env.MNEMONIC);\n\n        const account = await manager.createAccount({\n            alias: 'Alice',\n            coinType: CoinType.IOTA,\n        });\n        console.log('Account created:', account);\n\n    } catch (error) {\n        console.log('Error: ', error);\n    }\n    process.exit(0);\n}\n\nrun();\n"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Alias")," must be unique and can be whatever fits your use case. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Alias")," is typically used to identify an account later on. Each account is also represented by an ",(0,r.kt)("inlineCode",{parentName:"p"},"index")," which is incremented by one every time a new account is created. You can refer to any account via its ",(0,r.kt)("inlineCode",{parentName:"p"},"index"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"alias"),"."),(0,r.kt)("p",null,"You get an instance of any created account using ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountManager.getAccount(accountId|alias)")," or get all accounts with ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountManager.getAccounts()"),"."),(0,r.kt)("p",null,"Common methods of ",(0,r.kt)("inlineCode",{parentName:"p"},"account")," instance include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"account.listAddresses()")," - returns list of addresses related to the account."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"account.generateAddress()")," - generate a new address for the address index incremented by 1."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"account.balance()")," - returns the balance for the given account."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"account.sync()")," - sync the account information with the tangle.")),(0,r.kt)("h3",{id:"3-generate-a-user-address-to-deposit-funds"},"3. Generate a User Address to Deposit Funds"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Wallet.rs")," is a stateful library. This means it caches all relevant information in storage to provide performance benefits while dealing with, potentially, many accounts and addresses."),(0,r.kt)(i.Z,{className:"language-javascript",mdxType:"CodeBlock"},"/**\n * This example generates an address for an account\n */\n\nrequire('dotenv').config();\nconst { AccountManager } = require('@iota/wallet');\n\nasync function run() {\n    try {\n        const manager = new AccountManager({\n            storagePath: './alice-database',\n        });\n\n        await manager.setStrongholdPassword(`${process.env.SH_PASSWORD}`)\n        \n        const account = await manager.getAccount('Alice');\n\n        const address = await account.generateAddress()\n\n        console.log('Address generated:', address);\n\n    } catch (error) {\n        console.log('Error: ', error);\n    }\n    process.exit(0);\n}\n\nrun();\n"),(0,r.kt)("p",null,"Every account can have multiple addresses. Addresses are represented by an ",(0,r.kt)("inlineCode",{parentName:"p"},"index")," which is incremented by one every time a new address is created. You can access the addresses using the ",(0,r.kt)("inlineCode",{parentName:"p"},"account.listAddress()")," method: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    const addresses = account.listAddresses()\n\n    console.log('Need a refill? Send it to this address:', addresses[0])\n")),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("a",{parentName:"p",href:"https://faucet.testnet.shimmer.network/"},"Faucet")," to add test tokens and test your account."),(0,r.kt)("p",null,"There are two types of addresses, ",(0,r.kt)("inlineCode",{parentName:"p"},"internal")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," (external). This approach is known as a ",(0,r.kt)("em",{parentName:"p"},"BIP32 Hierarchical Deterministic wallet (HD Wallet)"),". "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each set of addresses is independent of each other and has an independent ",(0,r.kt)("inlineCode",{parentName:"li"},"index")," id."),(0,r.kt)("li",{parentName:"ul"},"Addresses that are created by ",(0,r.kt)("inlineCode",{parentName:"li"},"account.generateAddress()")," are indicated as ",(0,r.kt)("inlineCode",{parentName:"li"},"internal=false")," (public)."),(0,r.kt)("li",{parentName:"ul"},"Internal addresses (",(0,r.kt)("inlineCode",{parentName:"li"},"internal=true"),") are called ",(0,r.kt)("inlineCode",{parentName:"li"},"change")," addresses and are used to send the excess funds to them.")),(0,r.kt)("h3",{id:"4-check-the-account-balance"},"4. Check the Account Balance"),(0,r.kt)("p",null,"You can get the available account balance across all addresses of the given account using the following example:"),(0,r.kt)(i.Z,{className:"language-javascript",mdxType:"CodeBlock"},"/**\n * This example gets the balance of an account\n */\n\nrequire('dotenv').config();\nconst { AccountManager } = require('@iota/wallet');\n\nasync function run() {\n    try {\n        const manager = new AccountManager({\n            storagePath: './alice-database',\n        });\n\n        const account = await manager.getAccount('Alice');\n        const addressObject = await account.listAddresses();\n        console.log('Addresses before:', addressObject);\n\n        // syncOnlyMostBasicOutputs if not interested in outputs that are timelocked, \n        // have a storage deposit return or are nft/alias/foundry outputs\n        const synced = await account.sync({ syncOnlyMostBasicOutputs: true });\n        console.log('Syncing... - ', synced);\n\n        console.log('Available balance', await account.getBalance());\n\n        // Use the Faucet to send testnet tokens to your address:\n        console.log(\"Fill your address with the Faucet: https://faucet.testnet.shimmer.network/\")\n    } catch (error) {\n        console.log('Error: ', error);\n    }\n    process.exit(0);\n}\n\nrun();\n"),(0,r.kt)("h3",{id:"5-listen-to-events"},"5. Listen to Events"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet.rs")," library supports several events for listening. A provided callback is triggered as soon as an event occurs (which usually happens during syncing)."),(0,r.kt)("p",null,"You can use the following example to listen to new output events:"),(0,r.kt)(i.Z,{className:"language-javascript",mdxType:"CodeBlock"},"/**\n * This example listen to the NewOutput event\n */\n\nrequire('dotenv').config();\nconst { AccountManager } = require('@iota/wallet');\n\nasync function run() {\n    try {\n        const manager = new AccountManager({\n            storagePath: './alice-database',\n        });\n\n        const callback = function(err, data) {\n            if(err) console.log(\"err:\", err)\n\n            const event = JSON.parse(data)\n            console.log(\"Event for account:\", event.accountIndex)\n            console.log(\"data:\", event.event)\n\n            // Exit after receiving an event\n            process.exit(0);\n        }\n\n        // provide event type to filter only for events with this type\n        manager.listen(['NewOutput'], callback);\n\n        const account = await manager.getAccount('Alice');\n\n        // Use the Faucet to send testnet tokens to your address:\n        console.log(\"Fill your address with the Faucet: https://faucet.testnet.shimmer.network/\")\n        const addressObjects = await account.listAddresses();\n        console.log('Send funds to:', addressObjects[0].address);\n\n        // Sync every 5 seconds until the faucet transaction gets confirmed\n        for (let i = 0; i < 100; i++) {\n            await new Promise(resolve => setTimeout(resolve, 5000));\n        \n            // Sync to detect new outputs\n            // syncOnlyMostBasicOutputs if not interested in outputs that are timelocked, \n            // have a storage deposit return or are nft/alias/foundry outputs\n            await account.sync({ syncOnlyMostBasicOutputs: true });\n        }\n\n    } catch (error) {\n        console.log('Error: ', error);\n    }\n    process.exit(0);\n}\n\nrun();\n"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example output:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"NewOutput: {\n  output: {\n    outputId: '0x2df0120a5e0ff2b941ec72dff3464a5b2c3ad8a0c96fe4c87243e4425b9a3fe30000',\n    metadata: [Object],\n    output: [Object],\n    isSpent: false,\n    address: [Object],\n    networkId: '1862946857608115868',\n    remainder: false,\n    chain: [Array]\n  },\n  transaction: null,\n  transactionInputs: null\n}\n")),(0,r.kt)("p",null,"Alternatively you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"account.listOutputs()")," to get all outputs that are stored in the account, or ",(0,r.kt)("inlineCode",{parentName:"p"},"account.listUnspentOutputs()"),", to get only unspent outputs."),(0,r.kt)("h3",{id:"6-enable-withdrawals"},"6. Enable Withdrawals"),(0,r.kt)("p",null,"You can use the following example to send tokens to an address."),(0,r.kt)(i.Z,{className:"language-javascript",mdxType:"CodeBlock"},"/**\n * This example sends tokens to an address.\n */\n\nrequire('dotenv').config();\nconst { AccountManager } = require('@iota/wallet');\n\nasync function run() {\n    try {\n        const manager = new AccountManager({\n            storagePath: './alice-database',\n        });\n\n        await manager.setStrongholdPassword(`${process.env.SH_PASSWORD}`)\n\n        const account = await manager.getAccount('Alice');\n        console.log('Account:', account);\n\n        const response = await account.sendAmount([\n            {\n                //TODO: Replace with the address of your choice!\n                address: 'rms1qrrv7flg6lz5cssvzv2lsdt8c673khad060l4quev6q09tkm9mgtupgf0h0',\n                amount: '1000000',\n            },\n        ]);\n\n        console.log(response);\n\n        console.log(\n            `Check your block on https://explorer.testnet.shimmer.network/testnet/block/${response.blockId}`,\n        );\n    } catch (error) {\n        console.log('Error: ', error);\n    }\n    process.exit(0);\n}\n\nrun();\n"),(0,r.kt)("p",null,"The full function signature is ",(0,r.kt)("inlineCode",{parentName:"p"},"account.sendAmount(outputs[, options])"),"."),(0,r.kt)("p",null,"Default options are fine and successful; however, you can provide additional options, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"remainderValueStrategy"),", which can have the following values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"changeAddress"),": Send the remainder value to an internal address."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reuseAddress"),": Send the remainder value back to its original address."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"customAddress"),": Send the remainder value back to a provided account address.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"TransactionOptions {\n    remainderValueStrategy?: RemainderValueStrategy;\n    taggedDataPayload?: ITaggedDataPayload;\n    customInputs?: string[];\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"account.sendAmount()")," function returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"transaction")," with it's id. The ",(0,r.kt)("inlineCode",{parentName:"p"},"blockId")," can be used later for checking a confirmation status. You can obtain individual transactions related to the given account using the ",(0,r.kt)("inlineCode",{parentName:"p"},"account.listTransactions()")," function."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Dust Protection")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When sending tokens, you should consider a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/muXxer/tips/blob/master/tips/TIP-0019/tip-0019.md"},"dust protection")," mechanism.\n"))))}h.isMDXComponent=!0}}]);