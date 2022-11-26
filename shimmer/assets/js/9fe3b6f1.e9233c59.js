"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[32311],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),h=m(a),d=i,u=h["".concat(l,".").concat(d)]||h[d]||c[d]||s;return a?n.createElement(u,o(o({ref:t},p),{},{components:a})):n.createElement(u,o({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,o=new Array(s);o[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var m=2;m<s;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6059:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>m});var n=a(87462),i=(a(67294),a(3905));const s={description:"While online nodes may leverage FPC to vote on timestamps, nodes that join the network at a later time use an approach based on the approval weight to determine the validity of timestamps.",image:"https://i.imgur.com/rndN8qc.jpg",slug:"4.2Timestamps",keywords:["epoch","message timestamp","sync","approval weight","mana","consensus","transaction"]},o="4.2 Timestamps",r={unversionedId:"4.2 Timestamps",id:"4.2 Timestamps",title:"4.2 Timestamps",description:"While online nodes may leverage FPC to vote on timestamps, nodes that join the network at a later time use an approach based on the approval weight to determine the validity of timestamps.",source:"@site/shimmer/external/iota-2.0-research-specifications/4.2 Timestamps.md",sourceDirName:".",slug:"/4.2Timestamps",permalink:"/shimmer/IOTA-2.0-Research-Specifications/4.2Timestamps",draft:!1,editUrl:"https://github.com/iotaledger/IOTA-2.0-Research-Specifications/edit/main/docusaurus/shimmer/external/iota-2.0-research-specifications/4.2 Timestamps.md",tags:[],version:"current",frontMatter:{description:"While online nodes may leverage FPC to vote on timestamps, nodes that join the network at a later time use an approach based on the approval weight to determine the validity of timestamps.",image:"https://i.imgur.com/rndN8qc.jpg",slug:"4.2Timestamps",keywords:["epoch","message timestamp","sync","approval weight","mana","consensus","transaction"]},sidebar:"tutorialSidebar",previous:{title:"4.1 The Tangle",permalink:"/shimmer/IOTA-2.0-Research-Specifications/4.1TheTangle"},next:{title:"4.3 Tip Selection Algorithm",permalink:"/shimmer/IOTA-2.0-Research-Specifications/4.3TipSelectionAlgorithm"}},l={},m=[{value:"4.2.1 Motivation",id:"421-motivation",level:2},{value:"4.2.2 Preliminaries",id:"422-preliminaries",level:2},{value:"4.2.2.1 Requirements",id:"4221-requirements",level:3},{value:"4.2.2.2 Dependencies",id:"4222-dependencies",level:3},{value:"4.2.3.3 Modules Dependent on Timestamps",id:"4233-modules-dependent-on-timestamps",level:3},{value:"4.2.2.4 Parameters",id:"4224-parameters",level:3},{value:"4.2.2.5 Clock Synchronization",id:"4225-clock-synchronization",level:3},{value:"4.2.3 General Timestamp Rules",id:"423-general-timestamp-rules",level:2},{value:"4.2.3.1 Age of Parents",id:"4231-age-of-parents",level:3},{value:"4.2.3.2 Message Timestamp vs Transaction Timestamp",id:"4232-message-timestamp-vs-transaction-timestamp",level:3},{value:"4.2.3.3 Reattachments",id:"4233-reattachments",level:3},{value:"4.2.3.4 Age of UTXO",id:"4234-age-of-utxo",level:3},{value:"4.2.4 Consensus on timestamps",id:"424-consensus-on-timestamps",level:2},{value:"4.2.4.1 Not in Sync",id:"4241-not-in-sync",level:3},{value:"4.2.4.2 Future Timestamps",id:"4242-future-timestamps",level:3},{value:"4.2.5 Tangle Time",id:"425-tangle-time",level:2},{value:"4.2.5.1 Motivation",id:"4251-motivation",level:3},{value:"4.2.5.2 Tangle Time",id:"4252-tangle-time",level:3},{value:"4.2.6 Epochs",id:"426-epochs",level:2},{value:"4.2.6 Limitations",id:"426-limitations",level:2}],p={toc:m};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"42-timestamps"},"4.2 Timestamps"),(0,i.kt)("h2",{id:"421-motivation"},"4.2.1 Motivation"),(0,i.kt)("p",null,"In order to enable snapshotting based on time constraints rather than special messages in the Tangle (e.g. checkpoints), nodes need to share the same perception of time. Specifically, they need to have consensus on the ",(0,i.kt)("em",{parentName:"p"},"age of messages"),". This is one of the reasons that messages must contain a field ",(0,i.kt)("inlineCode",{parentName:"p"},"timestamp")," which represents the creation time of the message and is signed by the issuing node. "),(0,i.kt)("p",null,"Having consensus on the creation time of messages enables not only total ordering but also new applications that require certain guarantees regarding time. Specifically, we use message timestamps to enforce timestamps in transactions, which may also be used in computing the Mana associated to a particular node ID. "),(0,i.kt)("p",null,"In this document, we propose a mechanism to achieve consensus on message timestamps by combining a synchronous and an asynchronous approach. While online nodes may leverage FPC to vote on timestamps, nodes that join the network at a later time use an approach based on the ",(0,i.kt)("em",{parentName:"p"},"approval weight")," (described in ",(0,i.kt)("a",{parentName:"p",href:"./6.4Finalization"},"Section 6.4 - Approval Weight and Finality"),") to determine the validity of timestamps. "),(0,i.kt)("p",null,'This specification also outlines a tool called "Epochs", which groups messages into different objective periods.  This tool may be used for the following purposes:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"finality and approval weight:"),'  the activity of certain nodes within an epoch can be recorded, and then the approval weight (i.e. the number of nodes, weighted by consensus, which issued a message referencing a particular message) can then be measured as a percentage of "active consensus mana".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"committee selection:")," a committee elected as the highest active consensus mana holders can be easily and objectively formed for the DRNG committee. ")),(0,i.kt)("h2",{id:"422-preliminaries"},"4.2.2 Preliminaries"),(0,i.kt)("h3",{id:"4221-requirements"},"4.2.2.1 Requirements"),(0,i.kt)("p",null,"In DLTs, there are many ways to potentially introduce timestamps.  Any useful timestamping scheme however must satisfy the following requirements.  "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Nodes must have consensus on the timestamp associated to each message."),(0,i.kt)("li",{parentName:"ol"},"For every time ",(0,i.kt)("inlineCode",{parentName:"li"},"t"),", there is a ",(0,i.kt)("inlineCode",{parentName:"li"},"t_1>t")," such that any new message issued with timestamp ",(0,i.kt)("inlineCode",{parentName:"li"},"t")," and received by a node after ",(0,i.kt)("inlineCode",{parentName:"li"},"t_1")," (measured by its local clock) will be considered too far in the past and will be orphaned. ")),(0,i.kt)("h3",{id:"4222-dependencies"},"4.2.2.2 Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Opinion Setting"),(0,i.kt)("li",{parentName:"ul"},"FPC: used to perform voting on timestamps."),(0,i.kt)("li",{parentName:"ul"},"Approval weight: corrects opinions on timestamps when out of sync.")),(0,i.kt)("h3",{id:"4233-modules-dependent-on-timestamps"},"4.2.3.3 Modules Dependent on Timestamps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tip selection: only messages with correct timestamps will be eligible for tip selection."),(0,i.kt)("li",{parentName:"ul"},"Active Consensus Mana in approval weight uses epochs."),(0,i.kt)("li",{parentName:"ul"},"DRNG uses Epochs."),(0,i.kt)("li",{parentName:"ul"},"The Congestion control orders messages by timestamps, and only processes messages whose timestamp is close to the current time.  "),(0,i.kt)("li",{parentName:"ul"},"The rate control system uses timestamps to compute the correct PoWs."),(0,i.kt)("li",{parentName:"ul"},"The snapshotting uses timestamps to determine which messages to prune from the tangle.")),(0,i.kt)("h3",{id:"4224-parameters"},"4.2.2.4 Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DLARGE")),(0,i.kt)("td",{parentName:"tr",align:null},"duration"),(0,i.kt)("td",{parentName:"tr",align:null},"Gratuitous network delay estimate~ 15 s")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"W")),(0,i.kt)("td",{parentName:"tr",align:null},"duration"),(0,i.kt)("td",{parentName:"tr",align:null},"window ~1 minute. Require W>2DLARGE")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DELTA")),(0,i.kt)("td",{parentName:"tr",align:null},"duration"),(0,i.kt)("td",{parentName:"tr",align:null},"Maximal difference between a message timestamp and its parents' message timestamp. Require DELTA>W+DLARGE")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TW")),(0,i.kt)("td",{parentName:"tr",align:null},"duration"),(0,i.kt)("td",{parentName:"tr",align:null},"Maximal difference between message timestamp and transaction timestamp")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"EPOCHLENGTH")),(0,i.kt)("td",{parentName:"tr",align:null},"duration"),(0,i.kt)("td",{parentName:"tr",align:null},"Length of each epoch = 1 hour")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SYNCH_THRESHOLD")),(0,i.kt)("td",{parentName:"tr",align:null},"duration"),(0,i.kt)("td",{parentName:"tr",align:null},"the max difference between ",(0,i.kt)("inlineCode",{parentName:"td"},"CurrentTime")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"TangleTime")," in which we consider our node in sync")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TIMESTAMP_CUTOFF")),(0,i.kt)("td",{parentName:"tr",align:null},"duration"),(0,i.kt)("td",{parentName:"tr",align:null},"messages with timestamp older than this will be disliked with level 3 knowledge")))),(0,i.kt)("h3",{id:"4225-clock-synchronization"},"4.2.2.5 Clock Synchronization"),(0,i.kt)("p",null,"Nodes need to share a reasonably similar perception of time in order to effectively judge the accuracy of timestamps. Therefore, we propose that nodes synchronize their clock on startup and resynchronize periodically every ",(0,i.kt)("inlineCode",{parentName:"p"},"60min")," to counter ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Clock_drift"},"drift")," of local clocks. Instead of changing a nodes' system clock, we introduce an ",(0,i.kt)("inlineCode",{parentName:"p"},"offset")," parameter to adjust for differences between ",(0,i.kt)("em",{parentName:"p"},"network time")," and local time of a node. Initially, the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Network_Time_Protocol"},"Network Time Protocol (NTP)")," (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/beevik/ntp"},"Go implementation"),") may be used to achieve this task. "),(0,i.kt)("p",null,"We gracefully shut down the node if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"initial synchronization of time fails"),(0,i.kt)("li",{parentName:"ul"},"resynchronization fails for more than ",(0,i.kt)("inlineCode",{parentName:"li"},"maxSyncAttempts")," times ")),(0,i.kt)("h2",{id:"423-general-timestamp-rules"},"4.2.3 General Timestamp Rules"),(0,i.kt)("p",null,"Every message contains a timestamp, which is signed by the issuing node.  Thus the timestamp itself is objective and immutable.  Furthermore, transactions will also contain a timestamp, which will be also signed and thus immutable.  We first discuss the rules regarding message timestamps."),(0,i.kt)("p",null,"In order for a message to be eligible for tip selection, the timestamp of every message in its past cone (both weak and strong) must satisfy certain requirements. These requirements fall into two categories: objective and subjective. The objective criteria only depend on information written directly in the Tangle and are applied immediately upon solidification.  Thus all nodes immediately have consensus on the objective criteria.  In this section, we will discuss these objective criteria."),(0,i.kt)("p",null,"The quality of the timestamp is a subjective criterion since it is based on the solidification time of the message.  Thus, nodes must use a consensus algorithm, e.g. FPC, to decide which messages should be rejected based on subjective criteria. Specifically, nodes will use FPC to vote on whether or not a timestamp plus ",(0,i.kt)("inlineCode",{parentName:"p"},"W")," is before the arrival time. "),(0,i.kt)("p",null,"Consensus matters are not discussed in this document: see sections ",(0,i.kt)("a",{parentName:"p",href:"./6.1ObjectsofConsensus"},"6.1"),", ",(0,i.kt)("a",{parentName:"p",href:"./6.2OpinionSetting"},"6.2")," and ",(0,i.kt)("a",{parentName:"p",href:"./6.3FastProbabilisticConsensus"},"6.3")," to discuss how FPC votes on timestamps. "),(0,i.kt)("p",null,"Lastly, for any time ",(0,i.kt)("inlineCode",{parentName:"p"},"t"),", a node is sure that it has received all the messages with timestamp less than ",(0,i.kt)("inlineCode",{parentName:"p"},"t")," which will be finalized when"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CurrentTime >= t + TIMESTAMP_CUTOFF = t + W + 2*DLARGE"),", i.e. wait ~1.5 minutes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SyncStatus = TRUE"),"\nIndeed, after ",(0,i.kt)("inlineCode",{parentName:"li"},"TIMESTAMP_CUTOFF = W + 2*DLARGE")," all messages which arrive will be considered bad with level of knowledge 3: see ",(0,i.kt)("a",{parentName:"li",href:"./6.1ObjectsofConsensus"},"Section 6.1 - Object of Consensus"),". If the node is in sync, then it will have received all old messages which will be confirmed. ")),(0,i.kt)("h3",{id:"4231-age-of-parents"},"4.2.3.1 Age of Parents"),(0,i.kt)("p",null,"It is problematic when incoming messages reference extremely old messages. If any new message may reference any message in the Tangle, then a node will need to keep all messages readily available, precluding snapshotting. For this reason, we require that the difference between the timestamp of a message and the timestamp of its parents must be at most ",(0,i.kt)("inlineCode",{parentName:"p"},"DELTA")," units of time. Additionally, we require that timestamps are monotonic, i.e. parents must have a timestamp smaller than their children's timestamps."),(0,i.kt)("h3",{id:"4232-message-timestamp-vs-transaction-timestamp"},"4.2.3.2 Message Timestamp vs Transaction Timestamp"),(0,i.kt)("p",null,"Transactions contain a timestamp that is signed by the user when creating the transaction. It is thus different from the timestamp in the message which is created and signed by the node. We require "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"transaction.timestamp+TW >= message.timestamp >= transaction.timestamp\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"TW")," defines the maximum allowed difference between both timestamps."),(0,i.kt)("p",null,"If a node receives a transaction from a user with an invalid timestamp it does not create a message but discards the transaction with a corresponding error message to the user. To prevent a user's local clock differences causing issues the node should offer an API endpoint to retrieve its ",(0,i.kt)("inlineCode",{parentName:"p"},"SyncedTime")," according to the network time. "),(0,i.kt)("h3",{id:"4233-reattachments"},"4.2.3.3 Reattachments"),(0,i.kt)("p",null,"Reattachments of a transaction are possible during the time window ",(0,i.kt)("inlineCode",{parentName:"p"},"TW"),". Specifically, a transaction may be reattached in a new message as long as the condition ",(0,i.kt)("inlineCode",{parentName:"p"},"message.timestamp-TW >= transaction.timestamp")," is fulfilled. If for some reason a transaction is not ",(0,i.kt)("em",{parentName:"p"},"picked up")," (even after reattachment) and thus being orphaned, the user needs to create a new transaction with a current timestamp. "),(0,i.kt)("h3",{id:"4234-age-of-utxo"},"4.2.3.4 Age of UTXO"),(0,i.kt)("p",null,"Inputs to a transaction (unspent outputs) inherit their spent time from the transaction timestamp. Similarly, unspent outputs inherit their creation time from the transaction timestamp as well. For a transaction to be considered valid we require"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"transaction.timestamp >= inputs.timestamp\n")),(0,i.kt)("p",null,"In other words, all inputs to a transaction need to have a smaller or equal timestamp than the transaction. In turn, all created unspent outputs will have a greater or equal timestamp than all inputs."),(0,i.kt)("h2",{id:"424-consensus-on-timestamps"},"4.2.4 Consensus on timestamps"),(0,i.kt)("p",null,"The accuracy of the timestamps will be enforced through FPC voting.  Specifically, FPC will allow nodes to come to consensus on whether or not ",(0,i.kt)("inlineCode",{parentName:"p"},"timestamp+W")," is greater than the arrival time: see ",(0,i.kt)("a",{parentName:"p",href:"./6.2OpinionSetting"},"Section 6.2 - Opinion Setting"),". Messages which are deemed to fail this criterion will be rejected. Messages whose entire past cone is both valid, and satisfies this criterion, will be flagged as ",(0,i.kt)("inlineCode",{parentName:"p"},"eligible")," and can be referenced messages selected by the Tip Selection Algorithm: see ",(0,i.kt)("a",{parentName:"p",href:"./4.3TipSelectionAlgorithm"},"Section 4.3 - Tip Selection Algorithm"),"."),(0,i.kt)("h3",{id:"4241-not-in-sync"},"4.2.4.1 Not in Sync"),(0,i.kt)("p",null,"Any node not in sync will receive messages much later than the rest of the network.  Thus, all messages will appear to have inaccurate timestamps and will be wrongfully rejected by the algorithms in ",(0,i.kt)("a",{parentName:"p",href:"./6.2OpinionSetting"},"Section 6.2 - Opinion Setting"),". Thus nodes will not actively participate in any voting until their status is in sync, see Section 4.2.5. "),(0,i.kt)("p",null,"In general, a node that just completed the syncing phase must check, for each message, how much mana is in its future cone and set the opinion accordingly."),(0,i.kt)("p",null,"More specifically:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run the solidification up to being in sync (by following beacons)"),(0,i.kt)("li",{parentName:"ol"},"Derive local markers"),(0,i.kt)("li",{parentName:"ol"},"Decide eligibility for every message (5-10% mana min threshold)")),(0,i.kt)("p",null,"Clearly this synchronization procedure may only work to make an apparently bad timestamp reset to be a good timestamp.  For example, if a node receives a message one day later than the rest of the network, the node will initially reject the timestamp. However, the resync mechanism will recognize the message is correct because it is buried under an entire day's worth of messages. "),(0,i.kt)("p",null,"What about the converse situation? Being out of sync will only delay the arrival of a message.  If a node receives a message with a timestamp satisfying ",(0,i.kt)("inlineCode",{parentName:"p"},"timestamp+W>arrivalTime"),", this condition would also be satisfied for all nodes which received the message earlier.  Thus, if a node is out of sync and is receiving messages later than everyone else, if this node likes a timestamp, all other notes will have already liked it. Therefore, nodes will not like timestamps which were previously rejected by most of the network.  "),(0,i.kt)("h3",{id:"4242-future-timestamps"},"4.2.4.2 Future Timestamps"),(0,i.kt)("p",null,"Note that the resync mechanism only works because we only dislike a message if it is too old.  If we disliked messages whose timestamps were in the future, then it is possible that some nodes would like it, and others disliked it.  Suppose for example at 11:00:00 a node issues a message ",(0,i.kt)("inlineCode",{parentName:"p"},"X")," with timestamp 12:00:00, and that then all nodes rejected this timestamp for being too far in the future.  Now suppose at 12:00:00 a new node ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," joins the network at receives ",(0,i.kt)("inlineCode",{parentName:"p"},"X"),".  According to node ",(0,i.kt)("inlineCode",{parentName:"p"},"N"),", the timestamp of ",(0,i.kt)("inlineCode",{parentName:"p"},"X")," is accurate, and will accept it, while other nodes will reject it.  The resynchronization mechanism fails in this case.  "),(0,i.kt)("p",null,"To protect against messages with a timestamp that is issued in the future, the ",(0,i.kt)("a",{parentName:"p",href:"./4.6CongestionControl"},"congestion control algorithm")," does not schedule the message until the timestamp is less than or equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"CurrentTime"),". Thus messages from the future will not be added to the Tangle until the appropriate time. If an attacker sends too many future messages, these messages may overload the scheduler's queues. However, this is a standard type of attack that the congestion control algorithm is prepared to handle.  "),(0,i.kt)("h2",{id:"425-tangle-time"},"4.2.5 Tangle Time"),(0,i.kt)("h3",{id:"4251-motivation"},"4.2.5.1 Motivation"),(0,i.kt)("p",null,"For a variety of reasons, a node needs to be able to determine if it is in sync with the rest of the network, including the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"to signal to clients that its perception is healthy,"),(0,i.kt)("li",{parentName:"ul"},"to know when to issue messages (nodes out of sync should not issue messages, lest they are added to the wrong part of the Tangle),"),(0,i.kt)("li",{parentName:"ul"},"to schedule messages at the correct rate: out of sync nodes should schedule faster in order to catch up with the network,"),(0,i.kt)("li",{parentName:"ul"},"and to optimize FPC: nodes should not query while syncing, but instead rely on the approval weight. ")),(0,i.kt)("h3",{id:"4252-tangle-time"},"4.2.5.2 Tangle Time"),(0,i.kt)("p",null,'Every DLT is a clock, or more specifically a network of synchronized clocks. This clock has a natural correspondence with "real time". If the DLT clock differs significantly from local time, then the we can conclude that our DLT clock is off from all the other clocks, and thus the node is out of sync.  '),(0,i.kt)("p",null,'For IOTA 2.0, we make precise the meaning of the DLT clock with what we dub "Tangle time".  '),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vbnet"},"FUNCTION Time = TangleTime\n RETURN largest timestamp of all grade 3 final messages\n")),(0,i.kt)("p",null,"Thus Tangle time is the last timestamp in a message which was been confirmed. Tangle time cannot be attacked without controlling enough mana to accept incorrect timestamps, making it a reliable, attack-resistant quantity."),(0,i.kt)("p",null," Typically speaking, ",(0,i.kt)("inlineCode",{parentName:"p"},"CurrentTime - TangleTime")," is, on average, the  approximate confirmation time of messages.  Thus, if this difference is too far off, then we can conclude that we do not know which messages are confirmed and thus we are out of sync.  In this spirit, we are able to define the following two functions. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vbnet"},"FUNCTION Time = SyncAmount\nRETURN CurrentTime - TangleTime\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vbnet"},"FUNCTION bool = SyncStatus\nIF SyncAmount <= SYNCH_THRESHOLD\n    RETURN TRUE\nELSE\n    RETURN FALSE\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://i.imgur.com/rndN8qc.jpg"},(0,i.kt)("img",{parentName:"a",src:"https://i.imgur.com/rndN8qc.jpg",alt:"Tangle time"}))),(0,i.kt)("h2",{id:"426-epochs"},"4.2.6 Epochs"),(0,i.kt)("p",null,"Epochs are universal time intervals that group messages in the Tangle based on their timestamps."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An epoch is identified by its unique epoch index. Epoch indices are strictly increasing with respect to time."),(0,i.kt)("li",{parentName:"ul"},"Every time interval ",(0,i.kt)("inlineCode",{parentName:"li"},"EPOCHLENGTH"),", a new epoch is started and the previous ends."),(0,i.kt)("li",{parentName:"ul"},"A message ",(0,i.kt)("inlineCode",{parentName:"li"},"M")," or a transaction belongs to an ",(0,i.kt)("inlineCode",{parentName:"li"},"Epoch X"),", if its timestamp falls into the time window of\n",(0,i.kt)("inlineCode",{parentName:"li"},"Epoch X")," such that T(",(0,i.kt)("inlineCode",{parentName:"li"},"M"),")\u2208 [t",(0,i.kt)("sub",null,"X-1"),", t",(0,i.kt)("sub",null,"X"),"), where",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"T(",(0,i.kt)("inlineCode",{parentName:"li"},"M"),") is the timestamp of message ",(0,i.kt)("inlineCode",{parentName:"li"},"M"),","),(0,i.kt)("li",{parentName:"ul"},"t",(0,i.kt)("sub",null,"x-1")," is the end of the previous epoch,"),(0,i.kt)("li",{parentName:"ul"},"and t",(0,i.kt)("sub",null,"x")," is the end of ",(0,i.kt)("inlineCode",{parentName:"li"},"Epoch X"),"."))),(0,i.kt)("li",{parentName:"ul"},"A transaction might not be in the same epoch as the message containing it. "),(0,i.kt)("li",{parentName:"ul"},"The start of the network corresponds to t",(0,i.kt)("sub",null,"1"),", that is the end of ",(0,i.kt)("inlineCode",{parentName:"li"},"Epoch 1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Epoch 0")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Epoch 1")," are special epochs, since they only contain the genesis message(s), and their content is defined before starting the network. These two epochs might be used to initialize the network and active consensus mana states to a desired values."),(0,i.kt)("li",{parentName:"ul"},"For every network, the end of ",(0,i.kt)("inlineCode",{parentName:"li"},"Epoch 0")," is defined as an arbitrary point in time, similarly to how ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Unix_time"},"Unix epoch time")," is defined as 00:00:00 UTC on 1 January 1970."),(0,i.kt)("li",{parentName:"ul"},"Epoch interval ",(0,i.kt)("inlineCode",{parentName:"li"},"EPOCHLENGTH")," cannot be chosen arbitrarily: it must be much larger than ",(0,i.kt)("inlineCode",{parentName:"li"},"DELTA"),".  Furthermore, short epochs can potentially cause make certain calculations involving the approval wait more complicated.")),(0,i.kt)("p",null,"Figure 1 gives a brief overview of how the Tangle is divided into epochs:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://imgur.com/GeupIER.png"},(0,i.kt)("img",{parentName:"a",src:"https://imgur.com/GeupIER.png",alt:"Tangle epochs"}))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Epoch 0")," contains the genesis message(s), that hold the genesis output(s). By allowing multiple outputs to exist before the start of the network, a desired initial state for the network can be set.\n",(0,i.kt)("inlineCode",{parentName:"p"},"Epoch 2")," is the first epoch after the start of the network, when nodes may start issuing messages. Note, that a message can be valid with one strong parent only."),(0,i.kt)("p",null,"Upon processing a message and verifying its timestamp as described in ",(0,i.kt)("a",{parentName:"p",href:"./6.2OpinionSetting"},"Opinion Setting Specification"),", the message is solidified and can be added to the epoch.\n",(0,i.kt)("inlineCode",{parentName:"p"},"Epoch 2")," ends at t",(0,i.kt)("sub",null,"2"),", but it can happen that a message is issued just before t",(0,i.kt)("sub",null,"2"),", therefore it reaches most nodes and gets solidified during ",(0,i.kt)("inlineCode",{parentName:"p"},"Epoch 3"),". In this case, the node can still determine the correct epoch the message belongs to due to the consensus on the message timestamp. This also means, that finalizing an epoch (declaring that no more messages can be added to it) is delayed after the end of the epoch by at least ",(0,i.kt)("inlineCode",{parentName:"p"},"W")," time."),(0,i.kt)("h2",{id:"426-limitations"},"4.2.6 Limitations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When not in sync, a different behavior is required which complicates the protocol."),(0,i.kt)("li",{parentName:"ul"},"Using NTP as clock synchronization mechanism as proposed is a single point of failure. It can only be considered as an initial implementation into GoShimmer and needs to be replaced by a decentralized alternative.")))}c.isMDXComponent=!0}}]);