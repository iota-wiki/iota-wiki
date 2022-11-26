"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[50893],{73275:(e,t,n)=>{n.d(t,{ZP:()=>r});var a=n(87462),o=(n(67294),n(3905));const i={toc:[]};function r(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Dotenv",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe to use in production environments.")))}r.isMDXComponent=!0},67839:(e,t,n)=>{n.d(t,{ZP:()=>r});var a=n(87462),o=(n(67294),n(3905));const i={toc:[]};function r(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Guide Coming Soon",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This how to guide is not available in your language of choice at the moment.\nPlease feel free to browse ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/iota.rs/how_tos/more_examples"},"more examples")," which may suit your requirements.")))}r.isMDXComponent=!0},48375:(e,t,n)=>{n.d(t,{ZP:()=>r});var a=n(87462),o=(n(67294),n(3905));const i={toc:[]};function r(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Iota.js",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can also find this guide in the native ",(0,o.kt)("a",{href:n.exampleURL}," iota.js library"))))}r.isMDXComponent=!0},1708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>C,contentTitle:()=>N,default:()=>O,frontMatter:()=>v,metadata:()=>T,toc:()=>I});var a=n(87462),o=(n(67294),n(3905)),i=n(34259),r=n(18679),u=n(69319);const s={toc:[]};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u.Z,{className:"language-java",mdxType:"CodeBlock"},'package output_builder;\n\nimport org.iota.Client;\nimport org.iota.types.ClientConfig;\nimport org.iota.types.ClientException;\nimport org.iota.types.Output;\nimport org.iota.types.UnlockCondition;\nimport org.iota.types.ids.NftId;\nimport org.iota.types.output_builder.NftOutputBuilderParams;\nimport org.iota.types.secret.GenerateAddressesOptions;\nimport org.iota.types.secret.MnemonicSecretManager;\nimport org.iota.types.secret.Range;\n\npublic class BuildNftOutput {\n    public static void main(String[] args) throws ClientException {\n        // Build the client.\n        Client client = new Client(new ClientConfig().withNodes(new String[]{"https://api.testnet.shimmer.network"}));\n\n        // Configure a simple NFT output.\n        MnemonicSecretManager secretManager = new MnemonicSecretManager("endorse answer radar about source reunion marriage tag sausage weekend frost daring base attack because joke dream slender leisure group reason prepare broken river");\n        String hexAddress = client.bech32ToHex(client.generateAddresses(secretManager, new GenerateAddressesOptions().withRange(new Range(0, 1)))[0]);\n        NftId nftId = new NftId("0x7ffec9e1233204d9c6dce6812b1539ee96af691ca2e4d9065daa85907d33e5d3");\n        UnlockCondition[] unlockConditions = new UnlockCondition[]{new UnlockCondition("{ type: 0, address: { type: 0, pubKeyHash: \\"" + hexAddress + "\\" } }")};\n        NftOutputBuilderParams params = new NftOutputBuilderParams()\n                .withNftId(nftId)\n                .withUnlockConditions(unlockConditions);\n\n        // Build the output.\n        Output output = client.buildNftOutput(params);\n\n        // Print the output.\n        System.out.println(output.toString());\n\n    }\n}'))}l.isMDXComponent=!0;const d={toc:[]};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": 6,\n  "amount": "45900",\n  "nftId": "0x7ffec9e1233204d9c6dce6812b1539ee96af691ca2e4d9065daa85907d33e5d3",\n  "unlockConditions": [\n    {\n      "type": 0,\n      "address": {\n        "type": 0,\n        "pubKeyHash": "0x7ffec9e1233204d9c6dce6812b1539ee96af691ca2e4d9065daa85907d33e5d3"\n      }\n    }\n  ]\n}\n')))}p.isMDXComponent=!0;var c=n(67839);const m={toc:[]};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u.Z,{className:"language-python",mdxType:"CodeBlock"},'from iota_client import IotaClient, MnemonicSecretManager\n\n# Create an IotaClient instance\nclient = IotaClient({\'nodes\': [\'https://api.testnet.shimmer.network\']})\n\nsecret_manager = MnemonicSecretManager("flame fever pig forward exact dash body idea link scrub tennis minute " +\n                                       "surge unaware prosper over waste kitten ceiling human knife arch situate civil")\n\nnft_output = client.build_nft_output(\n    unlock_conditions=[\n        {\n            "type": 0,\n            "address": {\n                "type": 0,\n                "pubKeyHash": client.bech32_to_hex("rms1qzpf0tzpf8yqej5zyhjl9k3km7y6j0xjnxxh7m2g3jtj2z5grej67sl6l46"),\n            },\n        },\n    ],\n    # Nft Id needs to be set to 0 when minting\n    nft_id="0x0000000000000000000000000000000000000000000000000000000000000000",\n    amount=\'1000000\',\n    immutable_features=[\n        {\n            "type": 2,\n            # `hello` hex encoded\n            "data": "0x68656c6c6f"\n        }\n    ],\n    features=[\n        {\n            "type": 2,\n            # `hello` hex encoded\n            "data": "0x68656c6c6f"\n        }\n    ]\n)\n\n# Create and post a block with the nft output\nblock = client.build_and_post_block(secret_manager, {"outputs": [nft_output]})\nprint(f\'{block}\')\n'),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"binding/python/native/examples")," folder:"),(0,o.kt)(u.Z,{className:"language-bash",mdxType:"CodeBlock"},"python3 10_mint_nft.py"))}f.isMDXComponent=!0;const _={toc:[]};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"[\n  '0xa05ab7a0ab2842dedda5bd788b30ad98e32e32a35951896093de40833e9719fa',\n  {\n    'protocolVersion': 2,\n    'parents': [\n      '0x5031f5dd9defa4a663c33183f32259e35013d940b8453cb2f985f49363a905af',\n      '0x9a1692a4976bafb78318cdfcb0277e12f80f0db1fc441765503095ec6d326071',\n      '0xaeb154db6b9f32cd56bb622f209dec6565645296650c132c957d31139dd01ded',\n      '0xd28cfe9950c7a7be8eceb921107fc5fb6ac5c67013e59ea23e30a39d45a459f2'\n    ],\n    'payload': {\n      'type': 6,\n      'essence': {\n        'type': 1,\n        'networkId': '8342982141227064571',\n        'inputs': [\n          {\n            'type': 0,\n            'transactionId': '0x434e6b652e801b80841d72f29ba7ea82c6222118c8e18177e16225e7e3668252',\n            'transactionOutputIndex': 0\n          },\n          {\n            'type': 0,\n            'transactionId': '0x470d590d4a747e52db3e7d908a732311b10ffebe5cad65030c8b7a57484ba125',\n            'transactionOutputIndex': 0\n          }\n        ],\n        'inputsCommitment': '0x6dd5e1990b10aa6cd458cf88d0febfbe5d4b97ab50ead3059a6f1338e93f6892',\n        'outputs': [\n          {\n            'type': 6,\n            'amount': '1000000',\n            'nftId': '0x0000000000000000000000000000000000000000000000000000000000000000',\n            'unlockConditions': [\n              {\n                'type': 0,\n                'address': {\n                  'type': 0,\n                  'pubKeyHash': '0x8297ac4149c80cca8225e5f2da36df89a93cd2998d7f6d488c97250a881e65af'\n                }\n              }\n            ],\n            'features': [\n              {\n                'type': 2,\n                'data': '0x68656c6c6f'\n              }\n            ],\n            'immutableFeatures': [\n              {\n                'type': 2,\n                'data': '0x68656c6c6f'\n              }\n            ]\n          },\n          {\n            'type': 3,\n            'amount': '50600',\n            'unlockConditions': [\n              {\n                'type': 0,\n                'address': {\n                  'type': 0,\n                  'pubKeyHash': '0x8297ac4149c80cca8225e5f2da36df89a93cd2998d7f6d488c97250a881e65af'\n                }\n              }\n            ]\n          }\n        ]\n      },\n      'unlocks': [\n        {\n          'type': 0,\n          'signature': {\n            'type': 0,\n            'publicKey': '0xe62838fda7e8b77bf80e49967f0f089ae2a7230547d5231649732952f6336fae',\n            'signature': '0x044689897d08227e0134489c4c29398e8ae745727a99dcad7ceb36e4228a0b9a71939ece341f17c6d62c9bef93f9fc72c426c4fae159dcca24bdfed1182e3903'\n          }\n        },\n        {\n          'type': 1,\n          'reference': 0\n        }\n      ]\n    },\n    'nonce': '13835058055282177567'\n  }\n]\n")))}h.isMDXComponent=!0;var b=n(73275);const k={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function y(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(b.ZP,{mdxType:"DotEnvWarning"}),(0,o.kt)(u.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example nft --release\n\nuse iota_client::{\n    block::{\n        address::{Address, NftAddress},\n        output::{\n            unlock_condition::{AddressUnlockCondition, UnlockCondition},\n            BasicOutputBuilder, NftId, NftOutputBuilder, Output, OutputId,\n        },\n        payload::{transaction::TransactionEssence, Payload},\n    },\n    node_api::indexer::query_parameters::QueryParameter,\n    request_funds_from_faucet,\n    secret::{mnemonic::MnemonicSecretManager, SecretManager},\n    Client, Result,\n};\n\n/// In this example we will create an NFT output\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // This example uses dotenv, which is not safe for use in production!\n    // Configure your own mnemonic in the ".env" file. Since the output amount cannot be zero, the seed must contain\n    // non-zero balance.\n    dotenv::dotenv().ok();\n\n    let node_url = std::env::var("NODE_URL").unwrap();\n    let faucet_url = std::env::var("FAUCET_URL").unwrap();\n\n    // Create a client instance.\n    let client = Client::builder().with_node(&node_url)?.finish()?;\n\n    let secret_manager = SecretManager::Mnemonic(MnemonicSecretManager::try_from_mnemonic(\n        &std::env::var("NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC_1").unwrap(),\n    )?);\n\n    let token_supply = client.get_token_supply().await?;\n\n    let address = client.get_addresses(&secret_manager).with_range(0..1).get_raw().await?[0];\n    request_funds_from_faucet(&faucet_url, &address.to_bech32(client.get_bech32_hrp().await?)).await?;\n    tokio::time::sleep(std::time::Duration::from_secs(20)).await;\n\n    //////////////////////////////////\n    // create new nft output\n    //////////////////////////////////\n\n    let outputs = vec![\n        // address of the owner of the NFT\n        NftOutputBuilder::new_with_amount(1_000_000, NftId::null())?\n            .add_unlock_condition(UnlockCondition::Address(AddressUnlockCondition::new(address)))\n            // address of the minter of the NFT\n            // .add_feature(Feature::Issuer(IssuerFeature::new(address)))\n            .finish_output(token_supply)?,\n    ];\n\n    let block = client\n        .block()\n        .with_secret_manager(&secret_manager)\n        .with_outputs(outputs)?\n        .finish()\n        .await?;\n\n    println!(\n        "Transaction with new NFT output sent: {node_url}/api/core/v2/blocks/{}",\n        block.id()\n    );\n    let _ = client.retry_until_included(&block.id(), None, None).await?;\n\n    //////////////////////////////////\n    // move funds from an NFT address\n    //////////////////////////////////\n\n    let nft_output_id = get_nft_output_id(block.payload().unwrap())?;\n    let nft_id = NftId::from(&nft_output_id);\n\n    let nft_address = NftAddress::new(nft_id);\n    let bech32_nft_address = Address::Nft(nft_address).to_bech32(client.get_bech32_hrp().await?);\n    println!("bech32_nft_address {bech32_nft_address}");\n    println!(\n        "Faucet request {:?}",\n        request_funds_from_faucet(&faucet_url, &bech32_nft_address).await?\n    );\n    tokio::time::sleep(std::time::Duration::from_secs(20)).await;\n\n    let output_ids = client\n        .basic_output_ids(vec![QueryParameter::Address(bech32_nft_address)])\n        .await?;\n    let output_response = client.get_output(&output_ids[0]).await?;\n    let output = Output::try_from_dto(&output_response.output, token_supply)?;\n\n    let block = client\n        .block()\n        .with_secret_manager(&secret_manager)\n        .with_input(nft_output_id.into())?\n        .with_input(output_ids[0].into())?\n        .with_outputs(vec![\n            NftOutputBuilder::new_with_amount(1_000_000 + output.amount(), nft_id)?\n                .add_unlock_condition(UnlockCondition::Address(AddressUnlockCondition::new(address)))\n                .finish_output(token_supply)?,\n        ])?\n        .finish()\n        .await?;\n\n    println!(\n        "Transaction with input(basic output) to NFT output sent: {node_url}/api/core/v2/blocks/{}",\n        block.id()\n    );\n\n    let _ = client.retry_until_included(&block.id(), None, None).await?;\n\n    //////////////////////////////////\n    // burn NFT\n    //////////////////////////////////\n\n    let nft_output_id = get_nft_output_id(block.payload().unwrap())?;\n    let output_response = client.get_output(&nft_output_id).await?;\n    let output = Output::try_from_dto(&output_response.output, token_supply)?;\n    let outputs = vec![\n        BasicOutputBuilder::new_with_amount(output.amount())?\n            .add_unlock_condition(UnlockCondition::Address(AddressUnlockCondition::new(address)))\n            .finish_output(token_supply)?,\n    ];\n\n    let block = client\n        .block()\n        .with_secret_manager(&secret_manager)\n        .with_input(nft_output_id.into())?\n        .with_outputs(outputs)?\n        .finish()\n        .await?;\n    println!("Burn transaction sent: {node_url}/api/core/v2/blocks/{}", block.id());\n    let _ = client.retry_until_included(&block.id(), None, None).await?;\n    Ok(())\n}\n\n// helper function to get the output id for the first NFT output\nfn get_nft_output_id(payload: &Payload) -> Result<OutputId> {\n    match payload {\n        Payload::Transaction(tx_payload) => {\n            let TransactionEssence::Regular(regular) = tx_payload.essence();\n            for (index, output) in regular.outputs().iter().enumerate() {\n                if let Output::Nft(_nft_output) = output {\n                    return Ok(OutputId::new(tx_payload.id(), index.try_into().unwrap())?);\n                }\n            }\n            panic!("No nft output in transaction essence")\n        }\n        _ => panic!("No tx payload"),\n    }\n}\n'),(0,o.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,o.kt)("p",null,"Run the example by running the following command:"),(0,o.kt)(u.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example nft --release"))}y.isMDXComponent=!0;const w={toc:[]};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"Transaction with new NFT output sent: https://api.testnet.shimmer.network/api/core/v2/blocks/0xcfc8599956396ec01a0f4fed2f218f10f43876df28b3e9115d3695f99a536a4b\nbech32_nft_address rms1zzke7q909dzj95v6nlcdlafz0ylc6dux5a2qwenq0xfuc9hcr8h76spvz3f\n")))}g.isMDXComponent=!0;var x=n(48375);const v={title:"Build an NFT Output",description:"The following example will build and send an NFT output.",keywords:["how to","block","output","NFT","create NFT","java","nodejs","python","rust"]},N=void 0,T={unversionedId:"how_tos/build_nft_output",id:"how_tos/build_nft_output",title:"Build an NFT Output",description:"The following example will build and send an NFT output.",source:"@site/shimmer/external/iota.rs/documentation/docs/how_tos/11_build_nft_output.mdx",sourceDirName:"how_tos",slug:"/how_tos/build_nft_output",permalink:"/shimmer/iota.rs/how_tos/build_nft_output",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/shimmer/external/iota.rs/documentation/docs/how_tos/11_build_nft_output.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Build an NFT Output",description:"The following example will build and send an NFT output.",keywords:["how to","block","output","NFT","create NFT","java","nodejs","python","rust"]},sidebar:"docs",previous:{title:"Send a Transaction",permalink:"/shimmer/iota.rs/how_tos/prepare_sign_transaction"},next:{title:"Build a Foundry Output",permalink:"/shimmer/iota.rs/how_tos/build_foundry_output"}},C={},I=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],M={toc:I};function O(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},M,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following code example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"Client")," which will connect to the ",(0,o.kt)("a",{parentName:"li",href:"https://api.testnet.shimmer.network"},"Shimmer Testnet"),"."),(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"SecretManager")," from a ",(0,o.kt)("a",{parentName:"li",href:"/shimmer/iota.rs/how_tos/generate_mnemonic"},"mnemonic"),"."),(0,o.kt)("li",{parentName:"ol"},"Build an NFT output."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/shimmer/iota.rs/how_tos/create_block"},"Build")," and ",(0,o.kt)("a",{parentName:"li",href:"/shimmer/iota.rs/how_tos/post_block"},"post")," a block with the NFT output created in step 3.")),(0,o.kt)(x.ZP,{exampleURL:"https://wiki.iota.org/iotajs/how_tos/mint_nft",mdxType:"IotaJs"}),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(y,{mdxType:"RustCode"})),(0,o.kt)(r.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(c.ZP,{mdxType:"NodejsCode"})),(0,o.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(f,{mdxType:"PythonCode"})),(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(l,{mdxType:"JavaCode"}))),(0,o.kt)("h2",{id:"expected-output"},"Expected Output"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(g,{mdxType:"RustOutput"})),(0,o.kt)(r.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(c.ZP,{mdxType:"NodejsOutput"})),(0,o.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(h,{mdxType:"PythonOutput"})),(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(p,{mdxType:"JavaOutput"}))))}O.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(86010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),o=n(67294),i=n(86010),r=n(51048),u=n(33609),s=n(1943),l=n(72957);const d="tabList__CuJ",p="tabItem_LNqP";function c(e){var t;const{lazy:n,block:r,defaultValue:c,values:m,groupId:f,className:_}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,u.l)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===c?c:c??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:g}=(0,s.U)(),[x,v]=(0,o.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,l.o5)();if(null!=f){const e=w[f];null!=e&&e!==x&&b.some((t=>t.value===e))&&v(e)}const C=e=>{const t=e.currentTarget,n=N.indexOf(t),a=b[n].value;a!==x&&(T(t),v(a),null!=f&&g(f,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},_)},b.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>N.push(e),onKeyDown:I,onFocus:C,onClick:C},r,{className:(0,i.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,o.cloneElement)(h.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,r.Z)();return o.createElement(c,(0,a.Z)({key:String(t)},e))}}}]);