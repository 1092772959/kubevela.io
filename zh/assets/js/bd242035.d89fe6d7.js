(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[15303],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5939:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return p}});var n=a(22122),o=a(19756),r=(a(67294),a(3905)),l={title:"Introduction",slug:"/"},i={unversionedId:"getting-started/introduction",id:"version-v1.2/getting-started/introduction",isDocsHomePage:!1,title:"Introduction",description:"What is KubeVela?",source:"@site/versioned_docs/version-v1.2/getting-started/introduction.md",sourceDirName:"getting-started",slug:"/",permalink:"/zh/docs/",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/getting-started/introduction.md",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642176699,formattedLastUpdatedAt:"2022/1/14",frontMatter:{title:"Introduction",slug:"/"},sidebar:"version-v1.2/docs",next:{title:"Core Concept",permalink:"/zh/docs/getting-started/core-concept"}},s=[{value:"What is KubeVela?",id:"what-is-kubevela",children:[]},{value:"Why KubeVela?",id:"why-kubevela",children:[]},{value:"Who should use KubeVela?",id:"who-should-use-kubevela",children:[]},{value:"Comparisons",id:"comparisons",children:[{value:"KubeVela vs. CI/CD systems",id:"kubevela-vs-cicd-systems",children:[]},{value:"KubeVela vs. Platform-as-a-Service (PaaS)",id:"kubevela-vs-platform-as-a-service-paas",children:[]},{value:"KubeVela vs. Serverless",id:"kubevela-vs-serverless",children:[]},{value:"KubeVela vs. Platform agnostic developer tools",id:"kubevela-vs-platform-agnostic-developer-tools",children:[]},{value:"KubeVela vs. Helm",id:"kubevela-vs-helm",children:[]},{value:"KubeVela vs. Kubernetes",id:"kubevela-vs-kubernetes",children:[]}]},{value:"What&#39;s Next",id:"whats-next",children:[]}],u={toc:s};function p(e){var t=e.components,l=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-kubevela"},"What is KubeVela?"),(0,r.kt)("p",null,"KubeVela is a modern application platform that makes it easier and faster to deliver and manage applications across hybrid, multi-cloud environments. At the mean time, it is highly extensible and programmable, which can adapt to your needs as they grow. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(67136).Z})),(0,r.kt)("h2",{id:"why-kubevela"},"Why KubeVela?"),(0,r.kt)("p",null,"The trend of cloud-native technology is moving towards pursuing consistent experience of application delivery across clouds and on-prem clusters. Kubernetes is becoming the standard layer which is excellent in abstracting away low-level infrastructure details. But it does not provide abstractions to model application deployment on top of hybrid and distributed environments. The lack of application level context have impacted user experience, slowed down productivity, led to unexpected errors due to misconfigurations in production."),(0,r.kt)("p",null,"Meanwhile, modeling the deployment of a microservice application is a highly fragmented and challenging process. Thus, many solutions that tried to solve the problem so far are either over simplified and could not fix the real issue, or too complicated to use at all. On the other hand, though many solutions provided friendly UI layer, the platform themselves are not customizable. This means as the needs of your platform grow, it is inevitable for the feature requirements to outgrow the capabilities of such systems."),(0,r.kt)("p",null,"This is why KubeVela appears here. It can simplify the application delivery experience across hybrid environments (e.g. multi-cluster/multi-cloud/hybrid-cloud/distributed-cloud), while also be flexible enough to satisfy the fast growth of businesses requirements. KubeVela can be used by platform-engineers as an extensible application engine, while developers can also use it as an out-of-box application platforms with lots of addons available."),(0,r.kt)("h2",{id:"who-should-use-kubevela"},"Who should use KubeVela?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Application developers, operators, DevOps engineers",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"think about a modern Continuous Delivery (CD) platform."))),(0,r.kt)("li",{parentName:"ul"},"Platform builders for PaaS, Serverless, application management/delivery systems",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"think about an application delivery engine that you could build your advanced platform with."))),(0,r.kt)("li",{parentName:"ul"},"ISV, SaaS owners, and application architects who need to distribute software to anywhere",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"think about an App Store but on Kubernetes and clouds.")))),(0,r.kt)("h2",{id:"comparisons"},"Comparisons"),(0,r.kt)("h3",{id:"kubevela-vs-cicd-systems"},"KubeVela vs. CI/CD systems"),(0,r.kt)("p",null,"KubeVela is a CD (Continuous Delivery) control plane that works at downstream of your CI process. So you will reuse the CI process you already adopted and KubeVela will take over CD process by empowering it with modern application delivery best practices such as declarative CD workflow, programmable workflow steps, pull model, multi-cloud/cluster delivery, unified cloud resource provision/binding, and much more. "),(0,r.kt)("p",null,"If you already adopted GitOps practice in CD section, KubeVela is even easier to fit in as it's fully declarative by design. All KubeVela features including CD workflow and multi-cloud/cluster delivery will be immediately available in your GitOps process by simply putting a KubeVela application YAML inside your configuration repository."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Feel free to check the ",(0,r.kt)("a",{parentName:"p",href:"https://kubevela.io/docs/case-studies/jenkins-cicd"},"Best Practices")," documentation for more details. ")),(0,r.kt)("h3",{id:"kubevela-vs-platform-as-a-service-paas"},"KubeVela vs. Platform-as-a-Service (PaaS)"),(0,r.kt)("p",null,"The typical examples are Heroku and Cloud Foundry. They provide full application deployment and management capabilities and aim to improve developer experience and efficiency. In this context, KubeVela shares the same goal."),(0,r.kt)("p",null,"Though the biggest difference lies in ",(0,r.kt)("strong",{parentName:"p"},"flexibility"),"."),(0,r.kt)("p",null,"KubeVela is fully programmable. All of its deployment workflow and component feature set are LEGO-style CUE modules and can be extended or removed in-place when your needs change. Comparatively, traditional PaaS systems are highly restricted, i.e. they have to enforce constraints in the supported types of applications and capabilities. When your needs expand, you always outgrow the capabilities of the PaaS system - this will never happen in KubeVela platform."),(0,r.kt)("p",null,"Also, as a CD control plane, KubeVela is working on top of runtime infrastructures (and we believe this is the right form for next-gen PaaS), while most existing PaaS systems tend to be installed as a plugin inside runtime cluster."),(0,r.kt)("h3",{id:"kubevela-vs-serverless"},"KubeVela vs. Serverless"),(0,r.kt)("p",null,'Serverless platform such as AWS Lambda provides extraordinary user experience and agility to deploy serverless applications. However, those platforms impose even more constraints in extensibility. They are arguably "hard-coded" PaaS, so KubeVela differ from them in similar way.'),(0,r.kt)("p",null,"On the other hand, KubeVela can easily deploy both Kubernetes based serverless workloads such as Knative/OpenFaaS, or cloud based functions such as AWS Lambda."),(0,r.kt)("h3",{id:"kubevela-vs-platform-agnostic-developer-tools"},"KubeVela vs. Platform agnostic developer tools"),(0,r.kt)("p",null,"The typical example is Hashicorp's Waypoint. Waypoint is a developer facing tool which introduces a consistent workflow (i.e., build, deploy, release) to ship applications on top of different platforms."),(0,r.kt)("p",null,"KubeVela can be integrated with such tools seamlessly. In this case, developers would use the Waypoint workflow as the UI to deploy and release applications with KubeVela as the underlying deployment platform."),(0,r.kt)("h3",{id:"kubevela-vs-helm"},"KubeVela vs. Helm"),(0,r.kt)("p",null,"Helm is a package manager for Kubernetes that provides package, install, and upgrade a set of YAML files for Kubernetes as a unit. "),(0,r.kt)("p",null,"KubeVela as a modern deployment system can naturally deploy Helm charts. For example, you could use KubeVela to define an application that is composed by a WordPress chart and a AWS RDS Terraform module, orchestrate the components' topology, and then deploy them to multiple environments following certain strategy."),(0,r.kt)("p",null,"Of course, KubeVela also supports other encapsulation formats including Kustomize etc."),(0,r.kt)("h3",{id:"kubevela-vs-kubernetes"},"KubeVela vs. Kubernetes"),(0,r.kt)("p",null,"KubeVela is a modern application deployment system built with cloud native stack. It leverages ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/spec"},"Open Application Model")," and Kubernetes as control plane to resolve a hard problem - making shipping applications enjoyable."),(0,r.kt)("p",null,"Welcome onboard and sail Vela!"),(0,r.kt)("h2",{id:"whats-next"},"What's Next"),(0,r.kt)("p",null,"Here are some recommended next steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start to ",(0,r.kt)("a",{parentName:"li",href:"./install"},"install KubeVela"),"."),(0,r.kt)("li",{parentName:"ul"},"Learn KubeVela's ",(0,r.kt)("a",{parentName:"li",href:"./getting-started/core-concept"},"core concepts"),"."),(0,r.kt)("li",{parentName:"ul"},"Learn KubeVela's ",(0,r.kt)("a",{parentName:"li",href:"./getting-started/architecture"},"architecture"),".")))}p.isMDXComponent=!0},67136:function(e,t,a){"use strict";t.Z=a.p+"assets/images/what-is-kubevela-0c2584fd19c8a603b9dea994cfdadcb2.png"}}]);