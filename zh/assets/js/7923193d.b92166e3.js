(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[59098],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(f,i(i({ref:t},s),{},{components:n})):o.createElement(f,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77006:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return s}});var o=n(22122),r=n(19756),a=(n(67294),n(3905)),i={title:"Deploy Application",description:"deploy an application to environment by KubeVela dashboard"},p={unversionedId:"how-to/dashboard/application/deploy-application",id:"version-v1.2/how-to/dashboard/application/deploy-application",isDocsHomePage:!1,title:"Deploy Application",description:"deploy an application to environment by KubeVela dashboard",source:"@site/versioned_docs/version-v1.2/how-to/dashboard/application/deploy-application.md",sourceDirName:"how-to/dashboard/application",slug:"/how-to/dashboard/application/deploy-application",permalink:"/zh/docs/how-to/dashboard/application/deploy-application",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/how-to/dashboard/application/deploy-application.md",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642176699,formattedLastUpdatedAt:"2022/1/14",frontMatter:{title:"Deploy Application",description:"deploy an application to environment by KubeVela dashboard"},sidebar:"version-v1.2/docs",previous:{title:"Bind Application with Environment",permalink:"/zh/docs/how-to/dashboard/application/bind-new-environment"},next:{title:"Check Application State",permalink:"/zh/docs/how-to/dashboard/application/get-application-instance"}},l=[{value:"First time deploy",id:"first-time-deploy",children:[]},{value:"Upgrade the application",id:"upgrade-the-application",children:[]},{value:"Next Step",id:"next-step",children:[]}],c={toc:l};function s(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"After application created and bond with an environment, you can deploy the application instance."),(0,a.kt)("h3",{id:"first-time-deploy"},"First time deploy"),(0,a.kt)("p",null,"You can view the application detail page by click the application name or the UI card."),(0,a.kt)("p",null,"The tabs on the right side of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Baseline Config")," are environments which bond by the application. Choose one of the environment you want to deploy. Click that tab, you'll see the picture below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"app-not-deploy",src:n(5467).Z})),(0,a.kt)("p",null,"If this is the first time deploy, you'll see the Deploy button in the middle of the environment page, just click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Deploy")," button to deploy."),(0,a.kt)("p",null,"Then the workflow start to running, you can see the workflow status on the top right corner."),(0,a.kt)("p",null,"If you have configured a suspend workflow step, it will run and stop in that state. It will wait until you have checked your application well and click the approve button."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"workflow-suspend",src:n(68360).Z})),(0,a.kt)("p",null,"If there's something wrong with the workflow step, the workflow node will become red. Move your mouse to hover that area, you'll see the error reason."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"workflow-error",src:n(47909).Z})),(0,a.kt)("h3",{id:"upgrade-the-application"},"Upgrade the application"),(0,a.kt)("p",null,"There's a ",(0,a.kt)("inlineCode",{parentName:"p"},"Deploy")," button on the top right corner, you can click that for deploy. On the right side of the button, there's detail button, you can choose which workflow to run if there's multiple environments configured."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"select-workflow",src:n(94380).Z})),(0,a.kt)("p",null,"You can upgrade the application in any state, as KubeVela is a declarative system. There will be a kindly reminder for you if the workflow is running when you want to upgrade."),(0,a.kt)("h3",{id:"next-step"},"Next Step"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./get-application-instance"},"Check Application State"))))}s.isMDXComponent=!0},5467:function(e,t,n){"use strict";t.Z=n.p+"assets/images/app-not-deploy-8e19108c2f9a47b69a003f5f3531de20.jpg"},94380:function(e,t,n){"use strict";t.Z=n.p+"assets/images/select-workflow-e7c88b798b83072f15fb7170eed42075.jpg"},47909:function(e,t,n){"use strict";t.Z=n.p+"assets/images/workflow-error-60eb5c766cccf359b68de3621748cd8c.jpg"},68360:function(e,t,n){"use strict";t.Z=n.p+"assets/images/workflow-suspend-c5d95aade908022475093f07b760c74a.jpg"}}]);