(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[16612],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,v=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(v,o(o({ref:t},c),{},{components:n})):a.createElement(v,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},44005:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p},default:function(){return c}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),o={title:"VelaUX"},i={unversionedId:"reference/addons/velaux",id:"version-v1.2/reference/addons/velaux",isDocsHomePage:!1,title:"VelaUX",description:"Install",source:"@site/versioned_docs/version-v1.2/reference/addons/velaux.md",sourceDirName:"reference/addons",slug:"/reference/addons/velaux",permalink:"/zh/docs/reference/addons/velaux",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/reference/addons/velaux.md",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642176699,formattedLastUpdatedAt:"2022/1/14",frontMatter:{title:"VelaUX"},sidebar:"version-v1.2/docs",previous:{title:"Built-in Addons",permalink:"/zh/docs/reference/addons/overview"},next:{title:"Alibaba Cloud ACK",permalink:"/zh/docs/end-user/components/cloud-services/terraform/alibaba-ack"}},p=[{value:"Install",id:"install",children:[]},{value:"Visit VelaUX by port-forward",id:"visit-velaux-by-port-forward",children:[]},{value:"Setup with Specified Service Type",id:"setup-with-specified-service-type",children:[]},{value:"Setup with Ingress domain",id:"setup-with-ingress-domain",children:[]},{value:"Specify the addon image",id:"specify-the-addon-image",children:[]}],s={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"vela addon enable velaux\n")),(0,l.kt)("p",null,"expected output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Addon: velaux enabled Successfully.\n")),(0,l.kt)("p",null,"By default, velaux didn't have any exposed port."),(0,l.kt)("h2",{id:"visit-velaux-by-port-forward"},"Visit VelaUX by port-forward"),(0,l.kt)("p",null,"Port forward will work as a proxy to allow visiting VelaUX dashboard by local port."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vela port-forward addon-velaux -n vela-system\n")),(0,l.kt)("p",null,"Choose ",(0,l.kt)("inlineCode",{parentName:"p"},"> Cluster: local | Namespace: vela-system | Component: velaux | Kind: Service")," for visit."),(0,l.kt)("h2",{id:"setup-with-specified-service-type"},"Setup with Specified Service Type"),(0,l.kt)("p",null,"There are three service types for VelaUX addon which aligned with Kubernetes service, they're ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterIP"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"NodePort")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),".\nBy default the service type is ClusterIP for security."),(0,l.kt)("p",null,"If you want to expose your VelaUX dashboard for convenient, you can specify the service type."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LoadBalancer")," type requires your cluster has cloud LoadBalancer available.",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"vela addon enable velaux serviceType=LoadBalancer\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NodePort")," type requires you can access the Kubernetes Node IP/Port.",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"vela addon enable velaux serviceType=NodePort\n")))),(0,l.kt)("p",null,"After specify the service type to ",(0,l.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"NodePort"),", you can obtain the access address through ",(0,l.kt)("inlineCode",{parentName:"p"},"vela status"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vela status addon-velaux -n vela-system --endpoint\n")),(0,l.kt)("p",null,"The expected output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+----------------------------+----------------------+\n|  REF(KIND/NAMESPACE/NAME)  |       ENDPOINT       |\n+----------------------------+----------------------+\n| Service/vela-system/velaux | http://<IP address> |\n+----------------------------+----------------------+\n")),(0,l.kt)("h2",{id:"setup-with-ingress-domain"},"Setup with Ingress domain"),(0,l.kt)("p",null,"If you have ingress and domain available in your cluster, you can also deploy VelaUX by specify a domain like below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"vela addon enable velaux domain=example.doamin.com\n")),(0,l.kt)("p",null,"The expected output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'I0112 15:23:40.428364   34884 apply.go:106] "patching object" name="addon-velaux" resource="core.oam.dev/v1beta1, Kind=Application"\nI0112 15:23:40.676894   34884 apply.go:106] "patching object" name="addon-secret-velaux" resource="/v1, Kind=Secret"\nAddon: velaux enabled Successfully.\nPlease access the velaux from the following endpoints:\n+----------------------------+---------------------------+\n|  REF(KIND/NAMESPACE/NAME)  |         ENDPOINT          |\n+----------------------------+---------------------------+\n| Ingress/vela-system/velaux | http://example.doamin.com |\n+----------------------------+---------------------------+\n')),(0,l.kt)("h2",{id:"specify-the-addon-image"},"Specify the addon image"),(0,l.kt)("p",null,"By default the image repo is docker hub, you can specify the image repo by the ",(0,l.kt)("inlineCode",{parentName:"p"},"repo")," parameter: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vela addon enable velaux repo=acr.kubevela.net\n")),(0,l.kt)("p",null,"But it has API request limit, so you can try specify the ",(0,l.kt)("inlineCode",{parentName:"p"},"acr.kubevela.net")," image registry as alternative,\nIt's maintained by KubeVela team, we will upload/sync the built-in addon image for convenience."),(0,l.kt)("p",null,"This feature can also help you to build your private installation, just upload all images to your private image registry."))}c.isMDXComponent=!0}}]);