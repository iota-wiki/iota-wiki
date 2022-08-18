"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[45989],{20738:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],l={toc:[]};function s(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"More advanced examples can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/develop/examples"},"examples")," folder."))}s.isMDXComponent=!0},44663:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return k}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=n(69319),l=n(20738),s=["components"],c={title:"How To Create A Block"},u=void 0,d={unversionedId:"libraries/rust/how_to/create_block",id:"libraries/rust/how_to/create_block",title:"How To Create A Block",description:"Run it with",source:"@site/content/build/iota.rs/develop/documentation/docs/libraries/rust/how_to/create_block.mdx",sourceDirName:"libraries/rust/how_to",slug:"/libraries/rust/how_to/create_block",permalink:"/iota.rs/develop/libraries/rust/how_to/create_block",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/content/build/iota.rs/develop/documentation/docs/libraries/rust/how_to/create_block.mdx",tags:[],version:"current",frontMatter:{title:"How To Create A Block"},sidebar:"docs",previous:{title:"How To Get A Block",permalink:"/iota.rs/develop/libraries/rust/how_to/get_block"},next:{title:"How To Post A Block",permalink:"/iota.rs/develop/libraries/rust/how_to/post_block"}},p={},k=[],m={toc:k};function b(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example simple_block --release\n\nuse std::env;\n\nuse dotenv::dotenv;\nuse iota_client::{Client, Result};\n\n/// In this example we will send a block without a payload\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    dotenv().ok();\n\n    let node_url = env::var("NODE_URL").unwrap();\n\n    let client = Client::builder()\n        .with_node(&node_url)?\n        .with_node_sync_disabled()\n        .finish()?;\n\n    let block = client.block().finish().await?;\n\n    println!(\n        "Empty block sent: {}/block/{}",\n        env::var("EXPLORER_URL").unwrap(),\n        block.id()\n    );\n    Ok(())\n}\n'),(0,i.kt)("p",null,"Run it with"),(0,i.kt)(a.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example simple_block --release"),(0,i.kt)(l.ZP,{mdxType:"MoreExamples"}))}b.isMDXComponent=!0}}]);