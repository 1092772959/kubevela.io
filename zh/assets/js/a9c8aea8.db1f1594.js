(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[26555],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return f}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(c,".").concat(f)]||u[f]||s[f]||a;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15333:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var i=n(22122),r=n(19756),a=(n(67294),n(3905)),o={title:"Core Concept"},l={unversionedId:"getting-started/core-concept",id:"version-v1.2/getting-started/core-concept",isDocsHomePage:!1,title:"Core Concept",description:'KubeVela revolves around cloud-native application delivery and management scenarios. The application delivery model behind it is Open Application Model, or OAM for short. It describes various components and operational traits required for application as a unified, and infrastructure-independent "deployment plan". As a result, we can achieve standardized and efficient application delivery in a multi-cloud/hybrid-cloud environment. KubeVela includes the following core concepts:',source:"@site/versioned_docs/version-v1.2/getting-started/core-concept.md",sourceDirName:"getting-started",slug:"/getting-started/core-concept",permalink:"/zh/docs/getting-started/core-concept",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/getting-started/core-concept.md",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642176699,formattedLastUpdatedAt:"2022/1/14",frontMatter:{title:"Core Concept"},sidebar:"version-v1.2/docs",previous:{title:"Introduction",permalink:"/zh/docs/"},next:{title:"Architecture",permalink:"/zh/docs/getting-started/architecture"}},c=[{value:"Application",id:"application",children:[{value:"Component",id:"component",children:[]},{value:"Trait",id:"trait",children:[]},{value:"Workflow",id:"workflow",children:[]},{value:"Policy",id:"policy",children:[]},{value:"Revision",id:"revision",children:[]}]},{value:"Environment",id:"environment",children:[]},{value:"Target",id:"target",children:[]},{value:"Cluster",id:"cluster",children:[]},{value:"Addon",id:"addon",children:[]},{value:"Next Step",id:"next-step",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"KubeVela revolves around cloud-native application delivery and management scenarios. The application delivery model behind it is ",(0,a.kt)("a",{parentName:"p",href:"../platform-engineers/oam/oam-model"},"Open Application Model"),', or OAM for short. It describes various components and operational traits required for application as a unified, and infrastructure-independent "deployment plan". As a result, we can achieve standardized and efficient application delivery in a multi-cloud/hybrid-cloud environment. KubeVela includes the following core concepts:'),(0,a.kt)("h2",{id:"application"},"Application"),(0,a.kt)("p",null,"An application defines the delivery and management requirements of an artifact (binary, Docker image, Helm Chart...) or cloud service included in a microservice business unit. It consists of four parts: ",(0,a.kt)("a",{parentName:"p",href:"#component"},"Component"),", ",(0,a.kt)("a",{parentName:"p",href:"#trait"},"Trait"),", ",(0,a.kt)("a",{parentName:"p",href:"#workflow"},"Workflow")," and ",(0,a.kt)("a",{parentName:"p",href:"#policy"},"Policy")," and its lifecycle includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",null,"Deploy")," Execute Workflow. Instantiate application in one environment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",null,"Recycle")," Delete the instance of the application and reclaim its resources.")),(0,a.kt)("h3",{id:"component"},"Component"),(0,a.kt)("p",null,"Component defines the artifact of application\uff0cThe best practice is to having one core component and subordinate components around it. Its type decided by ",(0,a.kt)("a",{parentName:"p",href:"../platform-engineers/oam/x-definition#componentdefinition"},"Component Definition")," ."),(0,a.kt)("h3",{id:"trait"},"Trait"),(0,a.kt)("p",null,"Triat are plugable operations that can attach to Component, for example: scaler for replicas(manual and auto), PVC, gateway, DNS and so on. You can draw out-of-box Trait from the ecosystem or simply customize by ",(0,a.kt)("a",{parentName:"p",href:"../platform-engineers/oam/x-definition#traitdefinition"},"Trait Definition"),"."),(0,a.kt)("h3",{id:"workflow"},"Workflow"),(0,a.kt)("p",null,"Workflow allows you to define critical step in the process of application delivery, typical steps will be manual approve, data passing, release across multi-cluster, notification and etc. Its type can be defined and customized by ",(0,a.kt)("a",{parentName:"p",href:"../platform-engineers/oam/x-definition#workflowstepdefinition"},"Workflow Step Definition"),"."),(0,a.kt)("h3",{id:"policy"},"Policy"),(0,a.kt)("p",null,"Policy defines a strategy of certain aspect for application as to quality assurance, security, firewall rules, SLO and etc. Its type can be defined and customized by ",(0,a.kt)("a",{parentName:"p",href:"../platform-engineers/oam/x-definition#policydefinition"},"Policy Definition"),"."),(0,a.kt)("h3",{id:"revision"},"Revision"),(0,a.kt)("p",null,"Revision generates each time when the application deployed and holds all infos in one snapshot. You use it for rolling back to whichever version whenever you needed."),(0,a.kt)("h2",{id:"environment"},"Environment"),(0,a.kt)("p",null,"Environment refers to the environment for development, testing, and production and it can include multiple Targets. Only applications in the same environment can visit and share resource with each other."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",null,"Bind Application with Environment")," The application can be bound to multiple Environments, and for each environment, you can set the unique parameter difference for each environment.")),(0,a.kt)("h2",{id:"target"},"Target"),(0,a.kt)("p",null,"Target describes the space where the application resources actually delivered. One target describes one Kubernetes cluster and namespace, it can also describe a region or VPC for cloud providers. In the target, credentials of cloud resources created will automatically delievered to the Kubernetes cluster."),(0,a.kt)("h2",{id:"cluster"},"Cluster"),(0,a.kt)("p",null,"Import and manage your Kubernetes cluster in KubeVela\u3002Kubernetes cluster is currently the main way for KubeVela application delivery."),(0,a.kt)("h2",{id:"addon"},"Addon"),(0,a.kt)("p",null,"Addon is where you can freely pull in third-party capability that fulfills your need. This relies on the highly scalable design pattern of KubeVela. Each Addon will have its own ",(0,a.kt)("a",{parentName:"p",href:"../platform-engineers/oam/x-definition"},"X-Definition"),"."),(0,a.kt)("h2",{id:"next-step"},"Next Step"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"View ",(0,a.kt)("a",{parentName:"li",href:"../tutorials/webservice"},"Tutorials")," to look on more of what you can achieve with KubeVela."),(0,a.kt)("li",{parentName:"ul"},"View ",(0,a.kt)("a",{parentName:"li",href:"../how-to/dashboard/application/create-application"},"How To guides")," to check out more features.")))}d.isMDXComponent=!0}}]);