(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[9318],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,b=u["".concat(l,".").concat(f)]||u[f]||s[f]||a;return n?r.createElement(b,i(i({ref:t},d),{},{components:n})):r.createElement(b,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37832:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={title:"Delete Application",description:"delete an application by KubeVela dashboard"},c={unversionedId:"how-to/dashboard/application/delete-application",id:"version-v1.2/how-to/dashboard/application/delete-application",isDocsHomePage:!1,title:"Delete Application",description:"delete an application by KubeVela dashboard",source:"@site/versioned_docs/version-v1.2/how-to/dashboard/application/delete-application.md",sourceDirName:"how-to/dashboard/application",slug:"/how-to/dashboard/application/delete-application",permalink:"/zh/docs/how-to/dashboard/application/delete-application",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/how-to/dashboard/application/delete-application.md",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642176699,formattedLastUpdatedAt:"2022/1/14",frontMatter:{title:"Delete Application",description:"delete an application by KubeVela dashboard"},sidebar:"version-v1.2/docs",previous:{title:"Recycle Application Instance",permalink:"/zh/docs/how-to/dashboard/application/recycle-environment"},next:{title:"Deploy First Application",permalink:"/zh/docs/end-user/quick-start-cli"}},l=[],p={toc:l};function d(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Before you delete an application, you should recycle all instances bond in environments."),(0,a.kt)("p",null,"After all application instance were recycled, you can click ",(0,a.kt)("inlineCode",{parentName:"p"},"Remove")," for deletion."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"delete application",src:n(20363).Z})),(0,a.kt)("p",null,"As the picture shows, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Remove")," button is hidden in the application detail."))}d.isMDXComponent=!0},20363:function(e,t,n){"use strict";t.Z=n.p+"assets/images/app-delete-2040ad684a714e54065057d357229e1b.jpg"}}]);