(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[69616],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||c;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<c;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55716:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return i},default:function(){return u}});var r=n(22122),o=n(19756),c=(n(67294),n(3905)),a={title:"KubeVela CLI"},l={unversionedId:"developers/references/devex/cli",id:"version-v1.2/developers/references/devex/cli",isDocsHomePage:!1,title:"KubeVela CLI",description:"Auto-completion",source:"@site/versioned_docs/version-v1.2/developers/references/devex/cli.md",sourceDirName:"developers/references/devex",slug:"/developers/references/devex/cli",permalink:"/zh/docs/developers/references/devex/cli",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/developers/references/devex/cli.md",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642176699,formattedLastUpdatedAt:"2022/1/14",frontMatter:{title:"KubeVela CLI"}},i=[{value:"Auto-completion",id:"auto-completion",children:[]}],s={toc:i};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h3",{id:"auto-completion"},"Auto-completion"),(0,c.kt)("h4",{id:"bash"},"bash"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"To load completions in your current shell session:\n$ source <(vela completion bash)\n\nTo load completions for every new session, execute once:\nLinux:\n  $ vela completion bash > /etc/bash_completion.d/vela\nMacOS:\n  $ vela completion bash > /usr/local/etc/bash_completion.d/vela\n")),(0,c.kt)("h4",{id:"zsh"},"zsh"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'To load completions in your current shell session:\n$ source <(vela completion zsh)\n\nTo load completions for every new session, execute once:\n$ vela completion zsh > "${fpath[1]}/_vela"\n')))}u.isMDXComponent=!0}}]);