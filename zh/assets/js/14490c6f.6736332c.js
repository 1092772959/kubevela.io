(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[276],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||p;return t?a.createElement(k,l(l({ref:n},c),{},{components:t})):a.createElement(k,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,l=new Array(p);l[0]=u;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<p;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},40058:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return i},default:function(){return c}});var a=t(22122),r=t(19756),p=(t(67294),t(3905)),l={title:"\u5b66\u4e60\u4f7f\u7528 Appfile"},o={unversionedId:"developers/learn-appfile",id:"version-v1.1/developers/learn-appfile",isDocsHomePage:!1,title:"\u5b66\u4e60\u4f7f\u7528 Appfile",description:"appfile \u7684\u793a\u4f8b\u5982\u4e0b:",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/developers/learn-appfile.md",sourceDirName:"developers",slug:"/developers/learn-appfile",permalink:"/zh/docs/v1.1/developers/learn-appfile",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/developers/learn-appfile.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1631690672,formattedLastUpdatedAt:"2021/9/15",frontMatter:{title:"\u5b66\u4e60\u4f7f\u7528 Appfile"}},i=[{value:"Schema",id:"schema",children:[]},{value:"\u793a\u4f8b\u6d41\u7a0b",id:"\u793a\u4f8b\u6d41\u7a0b",children:[{value:"\u73af\u5883\u8981\u6c42",id:"\u73af\u5883\u8981\u6c42",children:[]},{value:"1. \u4e0b\u8f7d\u6d4b\u8bd5\u7684 app \u7684\u6e90\u7801",id:"1-\u4e0b\u8f7d\u6d4b\u8bd5\u7684-app-\u7684\u6e90\u7801",children:[]},{value:"2. \u4f7f\u7528\u547d\u4ee4\u90e8\u7f72 app",id:"2-\u4f7f\u7528\u547d\u4ee4\u90e8\u7f72-app",children:[]},{value:"\u53ef\u9009 \u914d\u7f6e\u5176\u4ed6\u7c7b\u578b\u7684 workload",id:"\u53ef\u9009-\u914d\u7f6e\u5176\u4ed6\u7c7b\u578b\u7684-workload",children:[]}]},{value:"\u4e0b\u4e00\u6b65?",id:"\u4e0b\u4e00\u6b65",children:[]}],s={toc:i};function c(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"appfile")," \u7684\u793a\u4f8b\u5982\u4e0b:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},'name: testapp\n\nservices:\n  frontend: # 1st service\n\n    image: oamdev/testapp:v1\n    build:\n      docker:\n        file: Dockerfile\n        context: .\n\n    cmd: ["node", "server.js"]\n    port: 8080\n\n    route: # trait\n      domain: example.com\n      rules:\n        - path: /testapp\n          rewriteTarget: /\n\n  backend: # 2nd service\n    type: task # workload type\n    image: perl \n    cmd: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]\n')),(0,p.kt)("p",null,"\u5728\u5e95\u5c42\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"Appfile")," \u4f1a\u4ece\u6e90\u7801\u6784\u5efa\u955c\u50cf\uff0c\u7136\u540e\u7528\u955c\u50cf\u540d\u79f0\u521b\u5efa ",(0,p.kt)("inlineCode",{parentName:"p"},"application")," \u8d44\u6e90"),(0,p.kt)("h2",{id:"schema"},"Schema"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u5728\u6df1\u5165\u5b66\u4e60 Appfile \u7684\u8be6\u7ec6 schema \u4e4b\u524d\uff0c\u6211\u4eec\u5efa\u8bae\u4f60\u5148\u719f\u6089 KubeVela \u7684",(0,p.kt)("a",{parentName:"p",href:"../core-concepts/application"},"\u6838\u5fc3\u6982\u5ff5"))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},'name: _app-name_\n\nservices:\n  _service-name_:\n    # If `build` section exists, this field will be used as the name to build image. Otherwise, KubeVela will try to pull the image with given name directly.\n    image: oamdev/testapp:v1\n\n    build:\n      docker:\n        file: _Dockerfile_path_ # relative path is supported, e.g. "./Dockerfile"\n        context: _build_context_path_ # relative path is supported, e.g. "."\n\n      push:\n        local: kind # optionally push to local KinD cluster instead of remote registry\n\n    type: webservice (default) | worker | task\n\n    # detailed configurations of workload\n    ... properties of the specified workload  ...\n\n    _trait_1_:\n      # properties of trait 1\n\n    _trait_2_:\n      # properties of trait 2\n\n    ... more traits and their properties ...\n  \n  _another_service_name_: # more services can be defined\n    ...\n  \n')),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u60f3\u4e86\u89e3\u600e\u6837\u8bbe\u7f6e\u7279\u5b9a\u7c7b\u578b\u7684 workload \u6216\u8005 trait\uff0c\u8bf7\u9605\u8bfb",(0,p.kt)("a",{parentName:"p",href:"./check-ref-doc"},"\u53c2\u8003\u6587\u6863\u624b\u518c"))),(0,p.kt)("h2",{id:"\u793a\u4f8b\u6d41\u7a0b"},"\u793a\u4f8b\u6d41\u7a0b"),(0,p.kt)("p",null,"\u5728\u4ee5\u4e0b\u7684\u6d41\u7a0b\u4e2d\uff0c\u6211\u4eec\u4f1a\u6784\u5efa\u5e76\u90e8\u7f72\u4e00\u4e2a NodeJs \u7684\u793a\u4f8b app\u3002\u8be5 app \u7684\u6e90\u6587\u4ef6\u5728",(0,p.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/tree/master/docs/examples/testapp"},"\u8fd9\u91cc"),"\u3002"),(0,p.kt)("h3",{id:"\u73af\u5883\u8981\u6c42"},"\u73af\u5883\u8981\u6c42"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")," \u9700\u8981\u5728\u4e3b\u673a\u4e0a\u5b89\u88c5 docker"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"../install"},"KubeVela")," \u9700\u8981\u5b89\u88c5 KubeVela \u5e76\u914d\u7f6e")),(0,p.kt)("h3",{id:"1-\u4e0b\u8f7d\u6d4b\u8bd5\u7684-app-\u7684\u6e90\u7801"},"1. \u4e0b\u8f7d\u6d4b\u8bd5\u7684 app \u7684\u6e90\u7801"),(0,p.kt)("p",null,"git clone \u7136\u540e\u8fdb\u5165 testapp \u76ee\u5f55:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/oam-dev/kubevela.git\n$ cd kubevela/docs/examples/testapp\n")),(0,p.kt)("p",null,"\u8fd9\u4e2a\u793a\u4f8b\u5305\u542b NodeJs app \u7684\u6e90\u7801\u548c\u7528\u4e8e\u6784\u5efa app \u955c\u50cf\u7684Dockerfile"),(0,p.kt)("h3",{id:"2-\u4f7f\u7528\u547d\u4ee4\u90e8\u7f72-app"},"2. \u4f7f\u7528\u547d\u4ee4\u90e8\u7f72 app"),(0,p.kt)("p",null,"\u6211\u4eec\u5c06\u4f1a\u4f7f\u7528\u76ee\u5f55\u4e2d\u7684 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/tree/master/docs/examples/testapp/vela.yaml"},"vela.yaml")," \u6587\u4ef6\u6765\u6784\u5efa\u548c\u90e8\u7f72 app"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u8bf7\u4fee\u6539 ",(0,p.kt)("inlineCode",{parentName:"p"},"oamdev")," \u4e3a\u4f60\u81ea\u5df1\u6ce8\u518c\u7684\u8d26\u53f7\u3002\u6216\u8005\u4f60\u53ef\u4ee5\u5c1d\u8bd5 ",(0,p.kt)("inlineCode",{parentName:"p"},"\u672c\u5730\u6d4b\u8bd5\u65b9\u5f0f"),"\u3002")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},"    image: oamdev/testapp:v1 # change this to your image\n")),(0,p.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela up\nParsing vela.yaml ...\nLoading templates ...\n\nBuilding service (express-server)...\nSending build context to Docker daemon  71.68kB\nStep 1/10 : FROM mhart/alpine-node:12\n ---\x3e 9d88359808c3\n...\n\npushing image (oamdev/testapp:v1)...\n...\n\nRendering configs for service (express-server)...\nWriting deploy config to (.vela/deploy.yaml)\n\nApplying deploy configs ...\nChecking if app has been deployed...\nApp has not been deployed, creating a new deployment...\n\u2705 App has been deployed \ud83d\ude80\ud83d\ude80\ud83d\ude80\n    Port forward: vela port-forward testapp\n             SSH: vela exec testapp\n         Logging: vela logs testapp\n      App status: vela status testapp\n  Service status: vela status testapp --svc express-server\n")),(0,p.kt)("p",null,"\u68c0\u67e5\u670d\u52a1\u72b6\u6001\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela status testapp\n  About:\n  \n    Name:       testapp\n    Namespace:  default\n    Created at: 2020-11-02 11:08:32.138484 +0800 CST\n    Updated at: 2020-11-02 11:08:32.138485 +0800 CST\n  \n  Services:\n  \n    - Name: express-server\n      Type: webservice\n      HEALTHY Ready: 1/1\n      Last Deployment:\n        Created at: 2020-11-02 11:08:33 +0800 CST\n        Updated at: 2020-11-02T11:08:32+08:00\n      Routes:\n\n")),(0,p.kt)("h4",{id:"\u672c\u5730\u6d4b\u8bd5\u65b9\u5f0f"},"\u672c\u5730\u6d4b\u8bd5\u65b9\u5f0f"),(0,p.kt)("p",null,"\u5982\u679c\u4f60\u672c\u5730\u6709\u8fd0\u884c\u7684 ",(0,p.kt)("a",{parentName:"p",href:"../install"},"kind")," \u96c6\u7fa4\uff0c\u4f60\u53ef\u4ee5\u5c1d\u8bd5\u63a8\u9001\u5230\u672c\u5730\u3002\u8fd9\u79cd\u65b9\u6cd5\u65e0\u9700\u6ce8\u518c\u8fdc\u7a0b\u5bb9\u5668\u4ed3\u5e93\u3002"),(0,p.kt)("p",null,"\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"build")," \u4e2d\u6dfb\u52a0 local \u7684\u9009\u9879\u503c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},"    build:\n      # push image into local kind cluster without remote transfer\n      push:\n        local: kind\n\n      docker:\n        file: Dockerfile\n        context: .\n")),(0,p.kt)("p",null,"\u7136\u540e\u90e8\u7f72\u5230 kind\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela up\n")),(0,p.kt)("details",null,(0,p.kt)("summary",null,"(\u8fdb\u9636) \u68c0\u67e5\u6e32\u67d3\u540e\u7684 manifests \u6587\u4ef6"),(0,p.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cVela \u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"./vela/deploy.yaml")," \u6e32\u67d3\u6700\u540e\u7684 manifests \u6587\u4ef6\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1alpha2\nkind: ApplicationConfiguration\nmetadata:\n  name: testapp\n  namespace: default\nspec:\n  components:\n  - componentName: express-server\n---\napiVersion: core.oam.dev/v1alpha2\nkind: Component\nmetadata:\n  name: express-server\n  namespace: default\nspec:\n  workload:\n    apiVersion: apps/v1\n    kind: Deployment\n    metadata:\n      name: express-server\n    ...\n---\napiVersion: core.oam.dev/v1alpha2\nkind: HealthScope\nmetadata:\n  name: testapp-default-health\n  namespace: default\nspec:\n  ...\n"))),(0,p.kt)("h3",{id:"\u53ef\u9009-\u914d\u7f6e\u5176\u4ed6\u7c7b\u578b\u7684-workload"},"[\u53ef\u9009]"," \u914d\u7f6e\u5176\u4ed6\u7c7b\u578b\u7684 workload"),(0,p.kt)("p",null,"\u81f3\u6b64\uff0c\u6211\u4eec\u6210\u529f\u5730\u90e8\u7f72\u4e00\u4e2a\u9ed8\u8ba4\u7c7b\u578b\u7684 workload \u7684 ",(0,p.kt)("em",{parentName:"p"},(0,p.kt)("a",{parentName:"em",href:"../end-user/components/cue/webservice"},"web \u670d\u52a1")),"\u3002\u6211\u4eec\u4e5f\u53ef\u4ee5\u6dfb\u52a0 ",(0,p.kt)("em",{parentName:"p"},(0,p.kt)("a",{parentName:"em",href:"../end-user/components/cue/task"},"Task"))," \u7c7b\u578b\u7684\u670d\u52a1\u5230\u540c\u4e00\u4e2a app \u4e2d\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},'services:\n  pi:\n    type: task\n    image: perl \n    cmd: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]\n\n  express-server:\n    ...\n')),(0,p.kt)("p",null,"\u7136\u540e\u518d\u6b21\u90e8\u7f72 Applfile \u6765\u5347\u7ea7\u5e94\u7528\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela up\n")),(0,p.kt)("p",null,"\u606d\u559c\uff01\u4f60\u5df2\u7ecf\u5b66\u4f1a\u4e86\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"Appfile")," \u6765\u90e8\u7f72\u5e94\u7528\u4e86\u3002"),(0,p.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65?"),(0,p.kt)("p",null,"\u66f4\u591a\u5173\u4e8e app \u7684\u64cd\u4f5c\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"./check-logs"},"Check Application Logs")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"./exec-cmd"},"Execute Commands in Application Container")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"./port-forward"},"Access Application via Route"))))}c.isMDXComponent=!0}}]);