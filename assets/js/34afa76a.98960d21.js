(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[15740],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},36727:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var n=a(22122),i=a(19756),r=(a(67294),a(3905)),o={title:"Deploy Helm Chart"},l={unversionedId:"tutorials/helm",id:"version-v1.2/tutorials/helm",isDocsHomePage:!1,title:"Deploy Helm Chart",description:"This section introduces that how you deploy Helm Chart into multi-environments and clusters.",source:"@site/versioned_docs/version-v1.2/tutorials/helm.md",sourceDirName:"tutorials",slug:"/tutorials/helm",permalink:"/docs/tutorials/helm",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/tutorials/helm.md",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642176699,formattedLastUpdatedAt:"1/14/2022",frontMatter:{title:"Deploy Helm Chart"},sidebar:"version-v1.2/docs",previous:{title:"Deploy Container Image",permalink:"/docs/tutorials/webservice"},next:{title:"Deploy Cloud Service",permalink:"/docs/tutorials/consume-cloud-services"}},s=[{value:"Before starting",id:"before-starting",children:[]},{value:"Enable fluxcd addon",id:"enable-fluxcd-addon",children:[]},{value:"Creating Redis application",id:"creating-redis-application",children:[]},{value:"Modify deployment parameters",id:"modify-deployment-parameters",children:[]}],p={toc:s};function c(e){var t=e.components,o=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section introduces that how you deploy Helm Chart into multi-environments and clusters."),(0,r.kt)("p",null,"The typical usage of deploying Helm Chart is to integrate middleware, many from in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bitnami/charts"},"bitnami")," or open-source application tools such as Gitlab, Jenkins in ",(0,r.kt)("a",{parentName:"p",href:"https://hub.helm.sh/"},"Helm Official Repo"),". KubeVela can help you easily deploy these applications to any managed cluster and manage them."),(0,r.kt)("p",null,"Starting from here, you will learn to use the KubeVela Addons to install plug-ins. The Helm Chart is currently supported by the FluxCD addon. In addition to the Helm Chart, FluxCD addon also supports Kustomize."),(0,r.kt)("h2",{id:"before-starting"},"Before starting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Choose a Helm Chart you needed. Or in this case, we take ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bitnami/charts/tree/master/bitnami/redis"},"bitnami/redis")," as an example."),(0,r.kt)("li",{parentName:"ul"},"Ensure that the cluster you deliver has a usable default StorageClass. Most of our delivery middleware requires data persistence, and the default StorageClass is needed to allocate PV.")),(0,r.kt)("h2",{id:"enable-fluxcd-addon"},"Enable fluxcd addon"),(0,r.kt)("p",null,"Enabling Addon should have been experienced in the installation of KubeVela, like installing VelaUX. In this case, you will learn to enable addon in the UI page."),(0,r.kt)("p",null,"Let's get into the page of ",(0,r.kt)("inlineCode",{parentName:"p"},"Addon"),". This page will automatically list the community Addons that can be installed. They are all from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/catalog/tree/master/addons"},"Official Repo"),". We click ",(0,r.kt)("inlineCode",{parentName:"p"},"fluxcd")," to check the details and status of this addon."),(0,r.kt)("p",null,"From the details, we can know that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Definitions\uff1a The extension capabilities provided by the addon may include component, trait, etc. For the fluxcd addon, it provides two component types, ",(0,r.kt)("inlineCode",{parentName:"p"},"helm")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"kustomize"),", among which ",(0,r.kt)("inlineCode",{parentName:"p"},"helm")," is the type we need to pay attention to and use here.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Readme\uff1a Addon description, explain the capabilities and related information."))),(0,r.kt)("p",null,"We can click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Enable")," button. After the fluxcd addon is enabled, it will be installed on all clusters connected to KubeVela, so it will take a certain amount of time."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"fluxcd addon",src:a(30607).Z})),(0,r.kt)("p",null,"When the addon is ",(0,r.kt)("inlineCode",{parentName:"p"},"enabled"),", it means that it's ready to. You can start to deploy Helm Chart."),(0,r.kt)("h2",{id:"creating-redis-application"},"Creating Redis application"),(0,r.kt)("p",null,"You've must have mastered creating applications through the previous sections. When it comes to creating Redis with Helm Chart, all you need is to select type as ",(0,r.kt)("inlineCode",{parentName:"p"},"helm"),", then Then select the Target which has the default StorageClass that provides PV, and at last enter the deployment parameter configuration page."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"helm app config",src:a(53546).Z})),(0,r.kt)("p",null,"As shown, you need to do the following configuration:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Repo Type: Git, Helm, and OSS are supported. In this example, we choose Helm."),(0,r.kt)("li",{parentName:"ul"},"Repo URL: Fill in the repo address you needed. we type in: ",(0,r.kt)("a",{parentName:"li",href:"https://charts.bitnami.com/bitnami"},"https://charts.bitnami.com/bitnami")),(0,r.kt)("li",{parentName:"ul"},"Chart Path: Chart package path, here we fill in: redis"),(0,r.kt)("li",{parentName:"ul"},"Values: Custom parameters of Chart. Since we are using ACK cluster in the example, PV has a minimum capacity requirement, 15Gi. In the same way, other parameters can also be configured according to your cluster's status.")),(0,r.kt)("p",null,"After filling in the above parameters, click ",(0,r.kt)("inlineCode",{parentName:"p"},"Create")," to complete the application creation and enter the application configuration page. The following steps will stay the same as you've learned in ",(0,r.kt)("a",{parentName:"p",href:"../quick-start"},"Deploy First Application"),"."),(0,r.kt)("h2",{id:"modify-deployment-parameters"},"Modify deployment parameters"),(0,r.kt)("p",null,"Here we're unlocking new skills! Modify the parameters of the application. For any type of application, he can enter the application configuration page at any time by clicking the ",(0,r.kt)("inlineCode",{parentName:"p"},"Edit Properties")," button at the top right of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Baseline Config")," page. This page is the same as the page when we created the application. It is automatically generated by combining the parameters defined by the Definition of each application type and the KubeVela UISchema specification."),(0,r.kt)("p",null,"After modifying the deployment parameters, the workflow of the environment must be executed to make the modified parameters take effect in the specified environment. Due to the existence of Revision, the configuration parameters will be saved in each historical version."),(0,r.kt)("p",null,"At this point, Helm Chart in KubeVela is no stranger to you, go ahead and try more!"))}c.isMDXComponent=!0},30607:function(e,t,a){"use strict";t.Z=a.p+"assets/images/addon-fluxcd-04a0b195ce4f3ea6e981bca6c8928c81.jpg"},53546:function(e,t,a){"use strict";t.Z=a.p+"assets/images/helm-app-config-91914c84d2aad9128e0d93c9cca224dd.jpg"}}]);