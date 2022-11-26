"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[28155],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),c=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return r?o.createElement(h,i(i({ref:t},s),{},{components:r})):o.createElement(h,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},16967:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={keywords:["how to"],description:"How to get your project documented.",image:"/img/iota-wiki.png"},i="Writing as a Dev",l={unversionedId:"contribute-to-wiki/getting_started/developer",id:"contribute-to-wiki/getting_started/developer",title:"Writing as a Dev",description:"How to get your project documented.",source:"@site/common/community/contribute-to-wiki/getting_started/developer.md",sourceDirName:"contribute-to-wiki/getting_started",slug:"/contribute-to-wiki/getting_started/developer",permalink:"/next/community/contribute-to-wiki/getting_started/developer",draft:!1,editUrl:"https://github.com/iota-wiki/iota-wiki/edit/main/common/community/contribute-to-wiki/getting_started/developer.md",tags:[],version:"current",lastUpdatedAt:1669374092,formattedLastUpdatedAt:"Nov 25, 2022",frontMatter:{keywords:["how to"],description:"How to get your project documented.",image:"/img/iota-wiki.png"},sidebar:"learn",previous:{title:"Edit an Article",permalink:"/next/community/contribute-to-wiki/getting_started/edit_an_article"},next:{title:"Quick Advice",permalink:"/next/community/contribute-to-wiki/getting_started/quick_advice"}},u={},c=[{value:"Make a Friend",id:"make-a-friend",level:2},{value:"Prepare Your Repository",id:"prepare-your-repository",level:2},{value:"Write Documentation",id:"write-documentation",level:2},{value:"Write Documentation As You Work",id:"write-documentation-as-you-work",level:3},{value:"Further Reads",id:"further-reads",level:2}],s={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"writing-as-a-dev"},"Writing as a Dev"),(0,n.kt)("p",null,"As a developer, you are responsible for documenting your project. You are the one to choose its content, write it, and keep it updated with every release of your software. The ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.iota.org/team"},"wiki maintainers")," and technical writers from IOTA Foundation will help you to coordinate the work, set up your project, and bring it to standard."),(0,n.kt)("h2",{id:"make-a-friend"},"Make a Friend"),(0,n.kt)("p",null,"Before you start, contact a technical writer. We could then take a look at your project, assess its state, give you an advice, and plan the work together. Reach out to us through the ",(0,n.kt)("inlineCode",{parentName:"p"},"#iota-wiki")," Discord channel or, if you work at IOTA Foundation, the ",(0,n.kt)("inlineCode",{parentName:"p"},"#dev-documentation")," Slack channel, Slack DMs or through e-mail."),(0,n.kt)("p",null,"Active technical writers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Aleksei Korolev"),(0,n.kt)("li",{parentName:"ul"},"Lucas Tortora")),(0,n.kt)("h2",{id:"prepare-your-repository"},"Prepare Your Repository"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/next/community/contribute-to-wiki/how_tos/documentation_setup"},"Setting Up Documentation"),"."),(0,n.kt)("h2",{id:"write-documentation"},"Write Documentation"),(0,n.kt)("p",null,"There are ",(0,n.kt)("a",{parentName:"p",href:"/next/community/contribute-to-wiki/reference/structure/overview"},"four kinds of documentation"),". The reference can be generated automatically from inline comments in your code: say, with ",(0,n.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/rustdoc/index.html"},"rustdoc"),", ",(0,n.kt)("a",{parentName:"p",href:"https://typedoc.org/"},"typedoc"),", ",(0,n.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/technotes/tools/windows/javadoc.html"},"javadoc"),", or ",(0,n.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/pydoc.html"},"pydoc"),". Tutorials are handled by the IOTA Foundation's DevX team. This leaves you with ",(0,n.kt)("a",{parentName:"p",href:"/next/community/contribute-to-wiki/how_tos/how_to_write_how_tos"},"how to guides")," and explanation articles."),(0,n.kt)("p",null,"You do not have to write perfectly. It is a technical writer's job to produce a perfectly polished article. But we need to base our writing on something, and when it comes to a brand new feature or a code change, you momentarily become the world's only expert in it. Keep in mind your users prefer even a rough, flawed article over a blank page when you release your software. And it is much less work for technical writers to streamline your text a bit instead of doing our own research of your project."),(0,n.kt)("h3",{id:"write-documentation-as-you-work"},"Write Documentation As You Work"),(0,n.kt)("p",null,"Documentation is not optional. If a feature is new and undocumented, then nobody knows that they can use it. This feature does not exist. If you change an existing feature and forget to update the documentation, then users will follow your instructions only to fail. From their point of view, you have introduced a bug. Documentation is fused with your code, and you should treat it as an inherent part of your job, in the same right as coding and testing is."),(0,n.kt)("p",null,"To help you help us, we have prepared a ",(0,n.kt)("a",{parentName:"p",href:"/next/community/contribute-to-wiki/explanations/tools/writing_tools"},"collection of tools")," and tips for those who write documentation.\nThe naive approach to planning documentation is to create a separate ticket before every release, to treat documentation as one of the product's features. We would instead suggest your team to treat documentation as a mandatory part of every task:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Documentation as a part of every ticket"),(0,n.kt)("th",{parentName:"tr",align:null},"Documentation as a separate ticket"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"You have it listed for every feature by default."),(0,n.kt)("td",{parentName:"tr",align:null},"You can forget to create it.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"You release the feature documented."),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation tickets get deprioritized over other features and bug fixes. The documentation comes weeks later.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"The polished version is in the works right away."),(0,n.kt)("td",{parentName:"tr",align:null},"TWs get involved at the last moment, shortly before a major version release.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"You write it while it is fresh."),(0,n.kt)("td",{parentName:"tr",align:null},"You will have to recall every detail later.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"You write one small piece at a time."),(0,n.kt)("td",{parentName:"tr",align:null},"You write in huge intimidating chunks.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"You write regularly and build a habit."),(0,n.kt)("td",{parentName:"tr",align:null},"You write once every few months and you treat writing as an unpleasant odd job.")))),(0,n.kt)("h2",{id:"further-reads"},"Further Reads"),(0,n.kt)("p",null,"Once again, technical writers are here to help. To let us know that you got some work for us, see ",(0,n.kt)("a",{parentName:"p",href:"/next/community/contribute-to-wiki/how_tos/request_tw"},"Request a Technical Writer"),"."),(0,n.kt)("p",null,"Technical writers follow the ",(0,n.kt)("a",{parentName:"p",href:"/next/community/contribute-to-wiki/reference/style/manifesto"},"full style guide"),", but we have prepared a ",(0,n.kt)("a",{parentName:"p",href:"/next/community/contribute-to-wiki/getting_started/quick_advice"},"single-page version")," of it for you."),(0,n.kt)("p",null,"We also keep a list of ",(0,n.kt)("a",{parentName:"p",href:"/next/community/contribute-to-wiki/explanations/tools/writing_tools"},"writing tools")," that might help you."))}d.isMDXComponent=!0}}]);