(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[26819],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return g}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(t),g=r,f=u["".concat(c,".").concat(g)]||u[g]||d[g]||o;return t?a.createElement(f,l(l({ref:n},s),{},{components:t})):a.createElement(f,l({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},95461:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return s}});var a=t(22122),r=t(19756),o=(t(67294),t(3905)),l={title:"Configuring data/env in Application"},i={unversionedId:"developers/config-app",id:"version-v1.2/developers/config-app",isDocsHomePage:!1,title:"Configuring data/env in Application",description:"vela provides a config command to manage config data.",source:"@site/versioned_docs/version-v1.2/developers/config-app.md",sourceDirName:"developers",slug:"/developers/config-app",permalink:"/docs/developers/config-app",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/developers/config-app.md",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642176699,formattedLastUpdatedAt:"1/14/2022",frontMatter:{title:"Configuring data/env in Application"}},c=[{value:"<code>vela config set</code>",id:"vela-config-set",children:[]},{value:"<code>vela config get</code>",id:"vela-config-get",children:[]},{value:"<code>vela config del</code>",id:"vela-config-del",children:[]},{value:"<code>vela config ls</code>",id:"vela-config-ls",children:[]},{value:"Configure env in application",id:"configure-env-in-application",children:[]}],p={toc:c};function s(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"vela")," provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," command to manage config data."),(0,o.kt)("h2",{id:"vela-config-set"},(0,o.kt)("inlineCode",{parentName:"h2"},"vela config set")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vela config set test a=b c=d\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"reading existing config data and merging with user input\nconfig data saved successfully \u2705\n")),(0,o.kt)("h2",{id:"vela-config-get"},(0,o.kt)("inlineCode",{parentName:"h2"},"vela config get")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vela config get test\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"Data:\n  a: b\n  c: d\n")),(0,o.kt)("h2",{id:"vela-config-del"},(0,o.kt)("inlineCode",{parentName:"h2"},"vela config del")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vela config del test\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"config (test) deleted successfully\n")),(0,o.kt)("h2",{id:"vela-config-ls"},(0,o.kt)("inlineCode",{parentName:"h2"},"vela config ls")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vela config set test a=b\nvela config set test2 c=d\nvela config ls\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"NAME\ntest\ntest2\n")),(0,o.kt)("h2",{id:"configure-env-in-application"},"Configure env in application"),(0,o.kt)("p",null,"The config data can be set as the env in applications."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vela config set demo DEMO_HELLO=helloworld\n")),(0,o.kt)("p",null,"Save the following to ",(0,o.kt)("inlineCode",{parentName:"p"},"vela.yaml")," in current directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: testapp\nservices:\n  env-config-demo:\n    image: heroku/nodejs-hello-world\n    config: demo\n")),(0,o.kt)("p",null,"Then run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vela up\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"Parsing vela.yaml ...\nLoading templates ...\n\nRendering configs for service (env-config-demo)...\nWriting deploy config to (.vela/deploy.yaml)\n\nApplying deploy configs ...\nChecking if app has been deployed...\nApp has not been deployed, creating a new deployment...\n\u2705 App has been deployed \ud83d\ude80\ud83d\ude80\ud83d\ude80\n    Port forward: vela port-forward testapp\n             SSH: vela exec testapp\n         Logging: vela logs testapp\n      App status: vela status testapp\n  Service status: vela status testapp --svc env-config-demo\n")),(0,o.kt)("p",null,"Check env var:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vela exec testapp -- printenv | grep DEMO_HELLO\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"DEMO_HELLO=helloworld\n")))}s.isMDXComponent=!0}}]);