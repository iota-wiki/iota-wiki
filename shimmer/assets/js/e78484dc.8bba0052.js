"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[24737],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=s(n),h=l,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:l,a[1]=r;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var o=n(87462),l=(n(67294),n(3905));const i={description:"Official IOTA Wallet Library Software Rust API reference.",image:"/img/logo/wallet_light.png",keywords:["api","rust","cargo","crate"]},a="Wallet API Reference",r={unversionedId:"references/java/wallet",id:"references/java/wallet",title:"Wallet API Reference",description:"Official IOTA Wallet Library Software Rust API reference.",source:"@site/shimmer/external/wallet.rs/documentation/docs/references/java/wallet.md",sourceDirName:"references/java",slug:"/references/java/wallet",permalink:"/shimmer/wallet.rs/references/java/wallet",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/shimmer/external/wallet.rs/documentation/docs/references/java/wallet.md",tags:[],version:"current",frontMatter:{description:"Official IOTA Wallet Library Software Rust API reference.",image:"/img/logo/wallet_light.png",keywords:["api","rust","cargo","crate"]},sidebar:"docs",previous:{title:"Account API Reference",permalink:"/shimmer/wallet.rs/references/java/account"},next:{title:"account",permalink:"/shimmer/wallet.rs/references/python/iota_wallet/account"}},c={},s=[{value:"<code>public AccountHandle createAccount(String alias) throws WalletException</code>",id:"public-accounthandle-createaccountstring-alias-throws-walletexception",level:2},{value:"<code>public AccountHandle getAccount(AccountIdentifier accountIdentifier) throws WalletException</code>",id:"public-accounthandle-getaccountaccountidentifier-accountidentifier-throws-walletexception",level:2},{value:"<code>public AccountHandle[] getAccounts() throws WalletException</code>",id:"public-accounthandle-getaccounts-throws-walletexception",level:2},{value:"<code>public void backup(String destination, String password) throws WalletException</code>",id:"public-void-backupstring-destination-string-password-throws-walletexception",level:2},{value:"<code>public void changeStrongholdPassword(String currentPassword, String newPassword) throws WalletException</code>",id:"public-void-changestrongholdpasswordstring-currentpassword-string-newpassword-throws-walletexception",level:2},{value:"<code>public void clearStrongholdPassword() throws WalletException</code>",id:"public-void-clearstrongholdpassword-throws-walletexception",level:2},{value:"<code>public boolean isStrongholdPasswordAvailable() throws WalletException</code>",id:"public-boolean-isstrongholdpasswordavailable-throws-walletexception",level:2},{value:"<code>public void recoverAccounts(int accountStartIndex, int accountGapLimit, int addressGapLimit, SyncOptions syncOptions) throws WalletException</code>",id:"public-void-recoveraccountsint-accountstartindex-int-accountgaplimit-int-addressgaplimit-syncoptions-syncoptions-throws-walletexception",level:2},{value:"<code>public void restoreBackup(String source, String password) throws WalletException</code>",id:"public-void-restorebackupstring-source-string-password-throws-walletexception",level:2},{value:"<code>public void removeLatestAccount() throws WalletException</code>",id:"public-void-removelatestaccount-throws-walletexception",level:2},{value:"<code>public String generateMnemonic() throws WalletException</code>",id:"public-string-generatemnemonic-throws-walletexception",level:2},{value:"<code>public void verifyMnemonic(String mnemonic) throws WalletException</code>",id:"public-void-verifymnemonicstring-mnemonic-throws-walletexception",level:2},{value:"<code>public void setClientOptions(ClientConfig config) throws WalletException</code>",id:"public-void-setclientoptionsclientconfig-config-throws-walletexception",level:2},{value:"<code>public LedgerNanoStatus getLedgerNanoStatus() throws WalletException</code>",id:"public-ledgernanostatus-getledgernanostatus-throws-walletexception",level:2},{value:"<code>public JsonObject getNodeInfo(String url, NodeAuth auth) throws WalletException</code>",id:"public-jsonobject-getnodeinfostring-url-nodeauth-auth-throws-walletexception",level:2},{value:"<code>public void setStrongholdPassword(String password) throws WalletException</code>",id:"public-void-setstrongholdpasswordstring-password-throws-walletexception",level:2},{value:"<code>public void setStrongholdPasswordClearInterval(int interval) throws WalletException</code>",id:"public-void-setstrongholdpasswordclearintervalint-interval-throws-walletexception",level:2},{value:"<code>public void storeMnemonic(String mnemonic) throws WalletException</code>",id:"public-void-storemnemonicstring-mnemonic-throws-walletexception",level:2},{value:"<code>public void startBackgroundSync(SyncOptions options, int intervalInMilliseconds) throws WalletException</code>",id:"public-void-startbackgroundsyncsyncoptions-options-int-intervalinmilliseconds-throws-walletexception",level:2},{value:"<code>public void stopBackgroundSync() throws WalletException</code>",id:"public-void-stopbackgroundsync-throws-walletexception",level:2},{value:"<code>public void emitTestEvent(JsonElement event) throws WalletException</code>",id:"public-void-emittesteventjsonelement-event-throws-walletexception",level:2},{value:"<code>public String bech32ToHex(String bech32) throws WalletException</code>",id:"public-string-bech32tohexstring-bech32-throws-walletexception",level:2},{value:"<code>public String hexToBech32(String hex, String bech32Hrp) throws WalletException</code>",id:"public-string-hextobech32string-hex-string-bech32hrp-throws-walletexception",level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"wallet-api-reference"},"Wallet API Reference"),(0,l.kt)("h2",{id:"public-accounthandle-createaccountstring-alias-throws-walletexception"},(0,l.kt)("inlineCode",{parentName:"h2"},"public AccountHandle createAccount(String alias) throws WalletException")),(0,l.kt)("p",null,"Create an account with the given alias and return an AccountHandle for it."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"alias")," \u2014 The name of the account."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Returns:")," An AccountHandle object.")),(0,l.kt)("h2",{id:"public-accounthandle-getaccountaccountidentifier-accountidentifier-throws-walletexception"},(0,l.kt)("inlineCode",{parentName:"h2"},"public AccountHandle getAccount(AccountIdentifier accountIdentifier) throws WalletException")),(0,l.kt)("p",null,"Return a given account from the wallet."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"accountIdentifier")," \u2014 The account identifier."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Returns:")," An AccountHandle object.")),(0,l.kt)("h2",{id:"public-accounthandle-getaccounts-throws-walletexception"},(0,l.kt)("inlineCode",{parentName:"h2"},"public AccountHandle[] getAccounts() throws WalletException")),(0,l.kt)("p",null,"Returns all the accounts from the wallet."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Returns:")," An array of AccountHandles.")),(0,l.kt)("h2",{id:"public-void-backupstring-destination-string-password-throws-walletexception"},(0,l.kt)("inlineCode",{parentName:"h2"},"public void backup(String destination, String password) throws WalletException")),(0,l.kt)("p",null,"Backup the wallet to the specified destination, encrypting it with the specified password."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"destination")," \u2014 The path to the file to be created."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"password")," \u2014 The password to encrypt the backup with.")))),(0,l.kt)("h2",{id:"public-void-changestrongholdpasswordstring-currentpassword-string-newpassword-throws-walletexception"},(0,l.kt)("inlineCode",{parentName:"h2"},"public void changeStrongholdPassword(String currentPassword, String newPassword) throws WalletException")),(0,l.kt)("p",null,"Change the password of the Stronghold file."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"currentPassword")," \u2014 The current password for the Stronghold"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"newPassword")," \u2014 The new password you want to use for your Stronghold.")))),(0,l.kt)("h2",{id:"public-void-clearstrongholdpassword-throws-walletexception"},(0,l.kt)("inlineCode",{parentName:"h2"},"public void clearStrongholdPassword() throws WalletException")),(0,l.kt)("p",null,"Clears the Stronghold password from memory."),(0,l.kt)("h2",{id:"public-boolean-isstrongholdpasswordavailable-throws-walletexception"},(0,l.kt)("inlineCode",{parentName:"h2"},"public boolean isStrongholdPasswordAvailable() throws WalletException")),(0,l.kt)("p",null,"Checks if the Stronghold password is available."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Returns:")," A boolean value.")),(0,l.kt)("h2",{id:"public-void-recoveraccountsint-accountstartindex-int-accountgaplimit-int-addressgaplimit-syncoptions-syncoptions-throws-walletexception"},(0,l.kt)("inlineCode",{parentName:"h2"},"public void recoverAccounts(int accountStartIndex, int accountGapLimit, int addressGapLimit, SyncOptions syncOptions) throws WalletException")),(0,l.kt)("p",null,"Find accounts with unspent outputs."),(0,l.kt)("h2",{id:"public-void-restorebackupstring-source-string-password-throws-walletexception"},(0,l.kt)("inlineCode",{parentName:"h2"},"public void restoreBackup(String source, String password) throws WalletException")),(0,l.kt)("p",null,"Restore a backup from a Stronghold file Replaces client_options, coin_type, secret_manager and accounts. Returns an error if accounts were already created If Stronghold is used as secret_manager, the existing Stronghold file will be overwritten. If a mnemonic was stored, it will be gone."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"source")," \u2014 The path to the backup file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"password")," \u2014 The password you used to encrypt the backup file.")))),(0,l.kt)("h2",{id:"public-void-removelatestaccount-throws-walletexception"},(0,l.kt)("inlineCode",{parentName:"h2"},"public void removeLatestAccount() throws WalletException")),(0,l.kt)("p",null,"Removes the latest account (account with the largest account index)."),(0,l.kt)("h2",{id:"public-string-generatemnemonic-throws-walletexception"},(0,l.kt)("inlineCode",{parentName:"h2"},"public String generateMnemonic() throws WalletException")),(0,l.kt)("p",null,"Generate a mnemonic phrase"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Returns:")," A string of words.")),(0,l.kt)("h2",{id:"public-void-verifymnemonicstring-mnemonic-throws-walletexception"},(0,l.kt)("inlineCode",{parentName:"h2"},"public void verifyMnemonic(String mnemonic) throws WalletException")),(0,l.kt)("p",null,"Checks if the given mnemonic is valid."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"mnemonic")," \u2014 The mnemonic to verify."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Returns:")," The wallet address.")),(0,l.kt)("h2",{id:"public-void-setclientoptionsclientconfig-config-throws-walletexception"},(0,l.kt)("inlineCode",{parentName:"h2"},"public void setClientOptions(ClientConfig config) throws WalletException")),(0,l.kt)("p",null,"Updates the client options for all accounts."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"config")," \u2014 A ClientConfig object that contains the options to set.")),(0,l.kt)("h2",{id:"public-ledgernanostatus-getledgernanostatus-throws-walletexception"},(0,l.kt)("inlineCode",{parentName:"h2"},"public LedgerNanoStatus getLedgerNanoStatus() throws WalletException")),(0,l.kt)("p",null,"Get the status of the Ledger Nano."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Returns:")," The status of the Ledger Nano")),(0,l.kt)("h2",{id:"public-jsonobject-getnodeinfostring-url-nodeauth-auth-throws-walletexception"},(0,l.kt)("inlineCode",{parentName:"h2"},"public JsonObject getNodeInfo(String url, NodeAuth auth) throws WalletException")),(0,l.kt)("p",null,"Get node information."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"url")," \u2014 The URL of the node you want information from."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"auth")," \u2014 The authentication information for the node."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Returns:")," A JsonObject")),(0,l.kt)("h2",{id:"public-void-setstrongholdpasswordstring-password-throws-walletexception"},(0,l.kt)("inlineCode",{parentName:"h2"},"public void setStrongholdPassword(String password) throws WalletException")),(0,l.kt)("p",null,"Set the stronghold password clear interval."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"password")," \u2014 The password to set for the stronghold.")),(0,l.kt)("h2",{id:"public-void-setstrongholdpasswordclearintervalint-interval-throws-walletexception"},(0,l.kt)("inlineCode",{parentName:"h2"},"public void setStrongholdPasswordClearInterval(int interval) throws WalletException")),(0,l.kt)("p",null,"Set the stronghold password clear interval."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"interval")," \u2014 The number of seconds to wait before clearing the password.")),(0,l.kt)("h2",{id:"public-void-storemnemonicstring-mnemonic-throws-walletexception"},(0,l.kt)("inlineCode",{parentName:"h2"},"public void storeMnemonic(String mnemonic) throws WalletException")),(0,l.kt)("p",null,"Store a mnemonic into the Stronghold vault."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"mnemonic")," \u2014 The mnemonic to store.")),(0,l.kt)("h2",{id:"public-void-startbackgroundsyncsyncoptions-options-int-intervalinmilliseconds-throws-walletexception"},(0,l.kt)("inlineCode",{parentName:"h2"},"public void startBackgroundSync(SyncOptions options, int intervalInMilliseconds) throws WalletException")),(0,l.kt)("p",null,"Start a background sync with the specified options and interval."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options for the sync."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"intervalInMilliseconds")," \u2014 The interval in milliseconds at which the background sync will be performed.")))),(0,l.kt)("h2",{id:"public-void-stopbackgroundsync-throws-walletexception"},(0,l.kt)("inlineCode",{parentName:"h2"},"public void stopBackgroundSync() throws WalletException")),(0,l.kt)("p",null,"Stop the background sync process."),(0,l.kt)("h2",{id:"public-void-emittesteventjsonelement-event-throws-walletexception"},(0,l.kt)("inlineCode",{parentName:"h2"},"public void emitTestEvent(JsonElement event) throws WalletException")),(0,l.kt)("p",null,"Emits an event for testing if the event system is working"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"event")," \u2014 The event to emit.")),(0,l.kt)("h2",{id:"public-string-bech32tohexstring-bech32-throws-walletexception"},(0,l.kt)("inlineCode",{parentName:"h2"},"public String bech32ToHex(String bech32) throws WalletException")),(0,l.kt)("p",null,"Converts a bech32 address to a hex address."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"bech32")," \u2014 The bech32 string to convert to hex."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Returns:")," A hex string.")),(0,l.kt)("h2",{id:"public-string-hextobech32string-hex-string-bech32hrp-throws-walletexception"},(0,l.kt)("inlineCode",{parentName:"h2"},"public String hexToBech32(String hex, String bech32Hrp) throws WalletException")),(0,l.kt)("p",null,"Converts a hex address to a bech32 address."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hex")," \u2014 The hex address to convert."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bech32Hrp")," \u2014 The bech32 human-readable part."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Returns:")," The bech32 address.")))}d.isMDXComponent=!0}}]);