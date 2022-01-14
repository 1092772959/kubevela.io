(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[54238],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35106:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={title:"Overview"},l={unversionedId:"platform-engineers/cloud-services",id:"version-v1.2/platform-engineers/cloud-services",isDocsHomePage:!1,title:"Overview",description:"Cloud services are important components of your application, and KubeVela allows you to provision and consume them in a consistent experience.",source:"@site/versioned_docs/version-v1.2/platform-engineers/cloud-services.md",sourceDirName:"platform-engineers",slug:"/platform-engineers/cloud-services",permalink:"/docs/platform-engineers/cloud-services",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/cloud-services.md",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642176699,formattedLastUpdatedAt:"1/14/2022",frontMatter:{title:"Overview"}},c=[{value:"How Does KubeVela Manage Cloud Services?",id:"how-does-kubevela-manage-cloud-services",children:[]},{value:"Does KubeVela Talk to the Clouds?",id:"does-kubevela-talk-to-the-clouds",children:[]},{value:"Can a Instance of Cloud Services be Shared by Multiple Applications?",id:"can-a-instance-of-cloud-services-be-shared-by-multiple-applications",children:[]}],s={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Cloud services are important components of your application, and KubeVela allows you to provision and consume them in a consistent experience."),(0,a.kt)("h2",{id:"how-does-kubevela-manage-cloud-services"},"How Does KubeVela Manage Cloud Services?"),(0,a.kt)("p",null,"In KubeVela, the needed cloud services are claimed as ",(0,a.kt)("em",{parentName:"p"},"components")," in an application, and consumed via ",(0,a.kt)("em",{parentName:"p"},"Service Binding Trait")," by other components."),(0,a.kt)("h2",{id:"does-kubevela-talk-to-the-clouds"},"Does KubeVela Talk to the Clouds?"),(0,a.kt)("p",null,"KubeVela relies on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/terraform-controller"},"Terraform Controller")," or ",(0,a.kt)("a",{parentName:"p",href:"http://crossplane.io/"},"Crossplane")," as providers to talk to the clouds. Please check the documentations below for detailed steps."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./components/component-terraform"},"Terraform")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./crossplane"},"Crossplane"))),(0,a.kt)("h2",{id:"can-a-instance-of-cloud-services-be-shared-by-multiple-applications"},"Can a Instance of Cloud Services be Shared by Multiple Applications?"),(0,a.kt)("p",null,"Yes. Though we currently defer this to providers so by default the cloud service instances are not shared and dedicated per ",(0,a.kt)("inlineCode",{parentName:"p"},"Application"),". A workaround for now is you could use a separate ",(0,a.kt)("inlineCode",{parentName:"p"},"Application")," to declare the cloud service only, then other ",(0,a.kt)("inlineCode",{parentName:"p"},"Application")," can consume it via service binding trait in a shared approach."),(0,a.kt)("p",null,"In the future, we are considering making this part as a standard feature of KubeVela so you could claim whether a given cloud service component should be shared or not."))}u.isMDXComponent=!0}}]);