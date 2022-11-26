"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[65510],{21343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var a=n(87462),i=(n(67294),n(3905)),o=n(74434),r=n(23189),s=n(5623);const d={title:"Create a Decentralized Identity",sidebar_label:"Create a DID Document",description:"Create DID Documents and publish them",image:"/img/Identity_icon.png",keywords:["Documents","DID","Create","Publish"]},l=void 0,c={unversionedId:"getting_started/create_and_publish",id:"getting_started/create_and_publish",title:"Create a Decentralized Identity",description:"Create DID Documents and publish them",source:"@site/shimmer/external/identity.rs/0.7-alpha/documentation/docs/getting_started/create_and_publish.mdx",sourceDirName:"getting_started",slug:"/getting_started/create_and_publish",permalink:"/shimmer/identity.rs/getting_started/create_and_publish",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/documentation/shimmer/external/identity.rs/0.7-alpha/documentation/docs/getting_started/create_and_publish.mdx",tags:[],version:"current",frontMatter:{title:"Create a Decentralized Identity",sidebar_label:"Create a DID Document",description:"Create DID Documents and publish them",image:"/img/Identity_icon.png",keywords:["Documents","DID","Create","Publish"]},sidebar:"docs",previous:{title:"Install the Library",permalink:"/shimmer/identity.rs/getting_started/install"},next:{title:"Introduction",permalink:"/shimmer/identity.rs/concepts/decentralized_identifiers/overview"}},u={},h=[{value:"Identity Generation Process",id:"identity-generation-process",level:2}],p={toc:h};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you want to benefit from Self-Sovereign Identity, you need to create a ",(0,i.kt)("a",{parentName:"p",href:"../concepts/decentralized_identifiers/overview"},"Decentralized Identity"),". This identity consists of many parts that have different functions. This page will cover the basics about identity creation and publishing."),(0,i.kt)("h2",{id:"identity-generation-process"},"Identity Generation Process"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The generation of an identity requires a address with funds to cover the ",(0,i.kt)("a",{parentName:"li",href:"../concepts/decentralized_identifiers/alias#storage-deposit"},"Storage Deposit"),". In test networks, a faucet can be used to request funds."),(0,i.kt)("li",{parentName:"ol"},"Create the content of the DID Document, a minimal document contains one verification method."),(0,i.kt)("li",{parentName:"ol"},"Construct a new ",(0,i.kt)("a",{parentName:"li",href:"../concepts/decentralized_identifiers/alias"},"Alias Output")," that includes the DID Document in the ",(0,i.kt)("a",{parentName:"li",href:"../concepts/decentralized_identifiers/alias"},"State Metadata"),"."),(0,i.kt)("li",{parentName:"ol"},"Publish the generated Alias Output.")),(0,i.kt)("p",null,"The DID is only known once the ",(0,i.kt)("a",{parentName:"p",href:"../concepts/decentralized_identifiers/alias"},"Alias Output")," is successfully published, since the DID's ",(0,i.kt)("a",{parentName:"p",href:"../specs/did/iota_did_method_spec#iota-tag"},"Tag")," contains the ",(0,i.kt)("a",{parentName:"p",href:"../concepts/decentralized_identifiers/alias#alias-id"},"Alias ID"),"."),(0,i.kt)("p",null,"See the example below to create an identity in Rust or Node.js."),(0,i.kt)("p",null,"As this page is a simple overview about creating an identity, further wiki pages are available for more in-depth explanation. Note that the Iota Identity Framework follows ",(0,i.kt)("a",{parentName:"p",href:"../specs/did/iota_did_method_spec"},"IOTA DID Method Specification"),"."),(0,i.kt)(o.Z,{nodeContent:s.Z,rustContent:r.Z,nodeGithubLink:"https://github.com/iotaledger/identity.rs/blob/main/bindings/wasm/examples/src/0_basic/0_create_did.ts",rustGithubLink:"https://github.com/iotaledger/identity.rs/blob/main/examples/0_basic/0_create_did.rs",mdxType:"CodeSnippet"}))}m.isMDXComponent=!0},74434:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(86010),i=n(67294),o=n(69319);function r(e){let{nodeReplitLink:t,nodeContent:n,rustContent:r,nodeGithubLink:s,rustGithubLink:d}=e;const[l,c]=i.useState("node"),u=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",class:"bi bi-box-arrow-up-right",viewBox:"0 0 16 16"},i.createElement("path",{"fill-rule":"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}),i.createElement("path",{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"}));return(0,i.useEffect)((()=>{let e=localStorage.getItem("lang"),a=e||"node";"node"!==a||t||n||(a="rust"),"rust"!==a||r||(a="node"),c(a)})),i.createElement("div",null,i.createElement("div",{className:(0,a.Z)("langSelector")},r&&i.createElement("button",{className:(0,a.Z)("button","languageButton",{activeButton:"rust"==l,inactiveButton:"rust"!==l}),onClick:()=>{localStorage.setItem("lang","rust"),c("rust")}},"Rust"),(t||n)&&i.createElement("button",{className:(0,a.Z)("button","languageButton","mr-sm",{activeButton:"node"===l,inactiveButton:"node"!==l}),onClick:()=>{localStorage.setItem("lang","node"),c("node")}},"Node.js")),i.createElement("div",{className:(0,a.Z)("codeSnippetContainer")},"node"===l&&t?i.createElement(i.Fragment,null,i.createElement("iframe",{frameborder:"0",width:"100%",height:"700px",src:t})):"node"===l&&n?i.createElement("div",{className:(0,a.Z)("nodeContainer")},i.createElement(o.Z,{className:(0,a.Z)("noMarginBottom"),language:"typescript"},n)):i.createElement("div",{className:(0,a.Z)("rustContainer")},i.createElement(o.Z,{className:(0,a.Z)("noMarginBottom"),language:"rust"},r))),i.createElement("div",{className:(0,a.Z)("githubLink")},s&&"node"===l&&i.createElement("a",{href:s,target:"_blank"},"GitHub\xa0",u),d&&"rust"===l&&i.createElement("a",{href:d,target:"_blank"},"GitHub\xa0",u)))}},5623:(e,t,n)=>{n.d(t,{Z:()=>a});const a='// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport { Bip39 } from "@iota/crypto.js";\nimport {\n    IotaDID,\n    IotaDocument,\n    IotaIdentityClient,\n    IotaVerificationMethod,\n    KeyPair,\n    KeyType,\n    MethodScope,\n} from "@iota/identity-wasm/node";\nimport { Client, MnemonicSecretManager, SecretManager } from "@iota/iota-client-wasm/node";\nimport { Bech32Helper, IAliasOutput } from "@iota/iota.js";\nimport { API_ENDPOINT, ensureAddressHasFunds } from "../util";\n\n/** Demonstrate how to create a DID Document and publish it in a new Alias Output. */\nexport async function createIdentity(): Promise<{\n    didClient: IotaIdentityClient;\n    secretManager: SecretManager;\n    walletAddressBech32: string;\n    did: IotaDID;\n}> {\n    const client = new Client({\n        primaryNode: API_ENDPOINT,\n        localPow: true,\n    });\n    const didClient = new IotaIdentityClient(client);\n\n    // Get the Bech32 human-readable part (HRP) of the network.\n    const networkHrp: string = await didClient.getNetworkHrp();\n\n    // Generate a random mnemonic for our wallet.\n    const secretManager: MnemonicSecretManager = {\n        mnemonic: Bip39.randomMnemonic(),\n    };\n    const walletAddressBech32 = (await client.generateAddresses(secretManager, {\n        accountIndex: 0,\n        range: {\n            start: 0,\n            end: 1,\n        },\n    }))[0];\n    console.log("Wallet address Bech32:", walletAddressBech32);\n\n    // Request funds for the wallet, if needed - only works on development networks.\n    await ensureAddressHasFunds(client, walletAddressBech32);\n\n    // Create a new DID document with a placeholder DID.\n    // The DID will be derived from the Alias Id of the Alias Output after publishing.\n    const document = new IotaDocument(networkHrp);\n\n    // Insert a new Ed25519 verification method in the DID document.\n    let keypair = new KeyPair(KeyType.Ed25519);\n    let method = new IotaVerificationMethod(document.id(), keypair.type(), keypair.public(), "#key-1");\n    document.insertMethod(method, MethodScope.VerificationMethod());\n\n    // Construct an Alias Output containing the DID document, with the wallet address\n    // set as both the state controller and governor.\n    const address = Bech32Helper.addressFromBech32(walletAddressBech32, networkHrp);\n    const aliasOutput: IAliasOutput = await didClient.newDidOutput(address, document);\n    console.log("Alias Output:", JSON.stringify(aliasOutput, null, 2));\n\n    // Publish the Alias Output and get the published DID document.\n    const published = await didClient.publishDidOutput(secretManager, aliasOutput);\n    console.log("Published DID document:", JSON.stringify(published, null, 2));\n\n    return {\n        didClient,\n        secretManager,\n        walletAddressBech32,\n        did: published.id(),\n    };\n}\n'},23189:(e,t,n)=>{n.d(t,{Z:()=>a});const a='// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nuse examples::get_address_with_funds;\nuse examples::random_stronghold_path;\nuse identity_iota::crypto::KeyPair;\nuse identity_iota::crypto::KeyType;\nuse identity_iota::did::MethodScope;\nuse identity_iota::iota::IotaClientExt;\nuse identity_iota::iota::IotaDocument;\nuse identity_iota::iota::IotaIdentityClientExt;\nuse identity_iota::iota::IotaVerificationMethod;\nuse identity_iota::iota::NetworkName;\nuse iota_client::block::address::Address;\nuse iota_client::block::output::AliasOutput;\nuse iota_client::secret::stronghold::StrongholdSecretManager;\nuse iota_client::secret::SecretManager;\nuse iota_client::Client;\n\n/// Demonstrates how to create a DID Document and publish it in a new Alias Output.\n///\n/// In this example we connect to a locally running private network, but it can be adapted\n/// to run on any IOTA node by setting the network and faucet endpoints.\n///\n/// See the following instructions on running your own private network\n/// https://wiki.iota.org/hornet/develop/how_tos/private_tangle\n#[tokio::main]\nasync fn main() -> anyhow::Result<()> {\n  // The API endpoint of an IOTA node, e.g. Hornet.\n  let api_endpoint: &str = "http://127.0.0.1:14265";\n\n  // The faucet endpoint allows requesting funds for testing purposes.\n  let faucet_endpoint: &str = "http://127.0.0.1:8091/api/enqueue";\n\n  // Create a new client to interact with the IOTA ledger.\n  let client: Client = Client::builder().with_primary_node(api_endpoint, None)?.finish()?;\n\n  // Create a new secret manager backed by a Stronghold.\n  let mut secret_manager: SecretManager = SecretManager::Stronghold(\n    StrongholdSecretManager::builder()\n      .password("secure_password")\n      .build(random_stronghold_path())?,\n  );\n\n  // Get an address with funds for testing.\n  let address: Address = get_address_with_funds(&client, &mut secret_manager, faucet_endpoint).await?;\n\n  // Get the Bech32 human-readable part (HRP) of the network.\n  let network_name: NetworkName = client.network_name().await?;\n\n  // Create a new DID document with a placeholder DID.\n  // The DID will be derived from the Alias Id of the Alias Output after publishing.\n  let mut document: IotaDocument = IotaDocument::new(&network_name);\n\n  // Insert a new Ed25519 verification method in the DID document.\n  let keypair: KeyPair = KeyPair::new(KeyType::Ed25519)?;\n  let method: IotaVerificationMethod =\n    IotaVerificationMethod::new(document.id().clone(), keypair.type_(), keypair.public(), "#key-1")?;\n  document.insert_method(method, MethodScope::VerificationMethod)?;\n\n  // Construct an Alias Output containing the DID document, with the wallet address\n  // set as both the state controller and governor.\n  let alias_output: AliasOutput = client.new_did_output(address, document, None).await?;\n\n  // Publish the Alias Output and get the published DID document.\n  let document: IotaDocument = client.publish_did_output(&secret_manager, alias_output).await?;\n  println!("Published DID document: {:#}", document);\n\n  Ok(())\n}\n'}}]);