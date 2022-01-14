(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[85275],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,b=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return n?a.createElement(b,r(r({ref:t},s),{},{components:n})):a.createElement(b,r({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90008:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var a=n(22122),o=n(19756),i=(n(67294),n(3905)),r={title:"Check Application State",description:"View an application instances by KubeVela dashboard"},c={unversionedId:"how-to/dashboard/application/get-application-instance",id:"version-v1.2/how-to/dashboard/application/get-application-instance",isDocsHomePage:!1,title:"Check Application State",description:"View an application instances by KubeVela dashboard",source:"@site/versioned_docs/version-v1.2/how-to/dashboard/application/get-application-instance.md",sourceDirName:"how-to/dashboard/application",slug:"/how-to/dashboard/application/get-application-instance",permalink:"/docs/how-to/dashboard/application/get-application-instance",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/how-to/dashboard/application/get-application-instance.md",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642176699,formattedLastUpdatedAt:"1/14/2022",frontMatter:{title:"Check Application State",description:"View an application instances by KubeVela dashboard"},sidebar:"version-v1.2/docs",previous:{title:"Deploy Application",permalink:"/docs/how-to/dashboard/application/deploy-application"},next:{title:"View Application Logs",permalink:"/docs/how-to/dashboard/application/get-application-log"}},p=[{value:"Next Step",id:"next-step",children:[]}],l={toc:p};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Different tabs of environment will show different application instances inside."),(0,i.kt)("p",null,"By default, it will display all instances deployed in the environment, you can filter the status by select targets."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"pod list",src:n(84677).Z})),(0,i.kt)("p",null,'As the picture shows, check the application pod details by click the expand button("+") on the left. You can view the pod status including the events and error message about it.'),(0,i.kt)("p",null,"For cloud resources, there will be a link to the cloud console for management."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"rds-instances",src:n(44635).Z})),(0,i.kt)("h3",{id:"next-step"},"Next Step"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./get-application-log"},"View Application Logs"))))}s.isMDXComponent=!0},84677:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pod-list-5f3ab65c80c9c662869ab0774e3763f7.jpg"},44635:function(e,t,n){"use strict";t.Z=n.p+"assets/images/rds-instances-22ec1ed5cc39b0a3b0ca0528134eb8f1.jpg"}}]);