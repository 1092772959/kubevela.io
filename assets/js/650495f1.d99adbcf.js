(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[86778],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return u}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return n?o.createElement(f,i(i({ref:t},s),{},{components:n})):o.createElement(f,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64777:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var o=n(22122),r=n(19756),a=(n(67294),n(3905)),i={title:"Introduction"},l={unversionedId:"platform-engineers/oam/oam-model",id:"version-v1.2/platform-engineers/oam/oam-model",isDocsHomePage:!1,title:"Introduction",description:"This and next documentation will explain Open Application Model (OAM) and how to extend this model in detail.",source:"@site/versioned_docs/version-v1.2/platform-engineers/oam/oam-model.md",sourceDirName:"platform-engineers/oam",slug:"/platform-engineers/oam/oam-model",permalink:"/docs/platform-engineers/oam/oam-model",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/oam/oam-model.md",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642176699,formattedLastUpdatedAt:"1/14/2022",frontMatter:{title:"Introduction"},sidebar:"version-v1.2/docs",previous:{title:"Install Addon",permalink:"/docs/how-to/cli/addon/addon"},next:{title:"X-Definition",permalink:"/docs/platform-engineers/oam/x-definition"}},p=[{value:"An Abstraction to Model Application Deployment Process",id:"an-abstraction-to-model-application-deployment-process",children:[]},{value:"No Configuration Drift",id:"no-configuration-drift",children:[]}],c={toc:p};function s(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This and next documentation will explain Open Application Model (OAM) and how to extend this model in detail."),(0,a.kt)("h2",{id:"an-abstraction-to-model-application-deployment-process"},"An Abstraction to Model Application Deployment Process"),(0,a.kt)("p",null,"OAM allows end users to work with a simple artifact to capture the complete application deployment workflow with easier primitives. This provides a simpler path for on-boarding end users to the platform without leaking low level details in runtime infrastructure and allows users to fully focus on the application delivery itself."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt",src:n(62302).Z})),(0,a.kt)("p",null,"Every application deployment plan can be composed by multiple components with attachable operational behaviors (traits), the deployment policy and workflow. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: <name>\nspec:\n  components:\n    - name: <component name>\n      type: <component type>\n      properties:\n        <parameter values>\n      traits:\n        - type: <trait type>\n          properties:\n            <traits parameter values>\n    - name: <component name>\n      type: <component type>\n      properties:\n        <parameter values>\n  policies:\n  - name: <policy name>\n    type: <policy type>\n    properties:\n      <policy parameter values>\n  workflow:\n    - name: <step name>\n      type: <step type>\n      properties:\n        <step parameter values>   \n")),(0,a.kt)("p",null,"This ",(0,a.kt)("inlineCode",{parentName:"p"},"Application")," entity will reference component, trait, policy and workflow step types which are essentially programmable modules that are maintained by platform team. Hence, this abstraction is highly extensible and can be customized in-place at ease."),(0,a.kt)("p",null,"Please check the next section (",(0,a.kt)("a",{parentName:"p",href:"/docs/platform-engineers/oam/x-definition"},"X-Definition"),") to learn how this programmable capability is achieved."),(0,a.kt)("h2",{id:"no-configuration-drift"},"No Configuration Drift"),(0,a.kt)("p",null,"Despite the efficiency and extensibility in abstracting application deployment, programmable (Infrastructure-as-Code) approach may lead to an issue called ",(0,a.kt)("em",{parentName:"p"},"Infrastructure/Configuration Drift"),", i.e. the rendered component instances are not in line with the expected configuration. This could be caused by incomplete coverage, less-than-perfect processes or emergency changes. This makes them can be barely used as a platform level building block."),(0,a.kt)("p",null,"Hence, KubeVela is designed to maintain all these programmable capabilities with ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/controller/"},"Kubernetes Control Loop")," and leverage Kubernetes control plane to eliminate the issue of configuration drifting, while still keeps the flexibly and velocity enabled by IaC."))}s.isMDXComponent=!0},62302:function(e,t,n){"use strict";t.Z=n.p+"assets/images/model-92e2ae5a5bd9367698a296fb9bd45ec5.png"}}]);