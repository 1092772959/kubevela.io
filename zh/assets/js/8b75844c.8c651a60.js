(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[18859],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),k=r,d=m["".concat(p,".").concat(k)]||m[k]||u[k]||l;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62004:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return c}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),i={title:"\u4f7f\u7528\u5de5\u4f5c\u6d41\u5b9e\u73b0\u591a\u96c6\u7fa4\u90e8\u7f72"},o={unversionedId:"case-studies/workflow-with-ocm",id:"version-v1.1/case-studies/workflow-with-ocm",isDocsHomePage:!1,title:"\u4f7f\u7528\u5de5\u4f5c\u6d41\u5b9e\u73b0\u591a\u96c6\u7fa4\u90e8\u7f72",description:"\u672c\u6848\u4f8b\uff0c\u5c06\u4e3a\u4f60\u8bb2\u8ff0\u5982\u4f55\u4f7f\u7528 KubeVela \u505a\u591a\u96c6\u7fa4\u5e94\u7528\u90e8\u7f72\uff0c\u5c06\u5305\u542b\u4ece\u96c6\u7fa4\u521b\u5efa\u3001\u96c6\u7fa4\u6ce8\u518c\u3001\u73af\u5883\u521d\u59cb\u5316\u3001\u591a\u96c6\u7fa4\u8c03\u5ea6\uff0c\u4e00\u76f4\u5230\u5e94\u7528\u591a\u96c6\u7fa4\u90e8\u7f72\u7684\u5b8c\u6574\u6d41\u7a0b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/case-studies/workflow-with-ocm.md",sourceDirName:"case-studies",slug:"/case-studies/workflow-with-ocm",permalink:"/zh/docs/v1.1/case-studies/workflow-with-ocm",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/case-studies/workflow-with-ocm.md",version:"v1.1",lastUpdatedBy:"Tianxin Dong",lastUpdatedAt:1634187324,formattedLastUpdatedAt:"2021/10/14",frontMatter:{title:"\u4f7f\u7528\u5de5\u4f5c\u6d41\u5b9e\u73b0\u591a\u96c6\u7fa4\u90e8\u7f72"}},p=[{value:"\u5f00\u59cb\u4e4b\u524d",id:"\u5f00\u59cb\u4e4b\u524d",children:[]},{value:"\u521d\u59cb\u5316\u963f\u91cc\u4e91\u8d44\u6e90\u521b\u5efa\u529f\u80fd",id:"\u521d\u59cb\u5316\u963f\u91cc\u4e91\u8d44\u6e90\u521b\u5efa\u529f\u80fd",children:[{value:"\u521b\u5efa\u73af\u5883\u521d\u59cb\u5316 <code>terraform-alibaba</code>",id:"\u521b\u5efa\u73af\u5883\u521d\u59cb\u5316-terraform-alibaba",children:[]}]},{value:"\u521d\u59cb\u5316\u591a\u96c6\u7fa4\u8c03\u5ea6\u529f\u80fd",id:"\u521d\u59cb\u5316\u591a\u96c6\u7fa4\u8c03\u5ea6\u529f\u80fd",children:[{value:"\u521b\u5efa\u73af\u5883\u521d\u59cb\u5316",id:"\u521b\u5efa\u73af\u5883\u521d\u59cb\u5316",children:[]}]},{value:"\u90e8\u7f72\u5e94\u7528\u5230\u6307\u5b9a\u96c6\u7fa4",id:"\u90e8\u7f72\u5e94\u7528\u5230\u6307\u5b9a\u96c6\u7fa4",children:[]}],s={toc:p};function c(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6848\u4f8b\uff0c\u5c06\u4e3a\u4f60\u8bb2\u8ff0\u5982\u4f55\u4f7f\u7528 KubeVela \u505a\u591a\u96c6\u7fa4\u5e94\u7528\u90e8\u7f72\uff0c\u5c06\u5305\u542b\u4ece\u96c6\u7fa4\u521b\u5efa\u3001\u96c6\u7fa4\u6ce8\u518c\u3001\u73af\u5883\u521d\u59cb\u5316\u3001\u591a\u96c6\u7fa4\u8c03\u5ea6\uff0c\u4e00\u76f4\u5230\u5e94\u7528\u591a\u96c6\u7fa4\u90e8\u7f72\u7684\u5b8c\u6574\u6d41\u7a0b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 KubeVela \u4e2d\u7684\u73af\u5883\u521d\u59cb\u5316\uff08Initializer\uff09\u529f\u80fd\uff0c\u6211\u4eec\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a Kubernetes \u96c6\u7fa4\u5e76\u6ce8\u518c\u5230\u4e2d\u592e\u7ba1\u63a7\u96c6\u7fa4\uff0c\u540c\u6837\u901a\u8fc7\u73af\u5883\u521d\u59cb\u5316\u529f\u80fd\uff0c\u53ef\u4ee5\u5c06\u5e94\u7528\u7ba1\u7406\u6240\u9700\u7684\u7cfb\u7edf\u4f9d\u8d56\u4e00\u5e76\u5b89\u88c5\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 KubeVela \u7684\u591a\u96c6\u7fa4\u591a\u73af\u5883\u90e8\u7f72\uff08EnvBinding\uff09\u529f\u80fd\uff0c\u53ef\u4ee5\u5bf9\u5e94\u7528\u8fdb\u884c\u5dee\u5f02\u5316\u914d\u7f6e\uff0c\u5e76\u9009\u62e9\u8d44\u6e90\u4e0b\u53d1\u5230\u54ea\u4e9b\u96c6\u7fa4\u3002")),(0,l.kt)("h2",{id:"\u5f00\u59cb\u4e4b\u524d"},"\u5f00\u59cb\u4e4b\u524d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9996\u5148\u4f60\u9700\u8981\u6709\u4e00\u4e2a Kubernetes \u7248\u672c\u4e3a 1.20+ \u7684\u96c6\u7fa4\u4f5c\u4e3a\u7ba1\u63a7\u96c6\u7fa4\uff0c\u5e76\u4e14\u5df2\u7ecf\u5b89\u88c5\u597d KubeVela \uff0c\u7ba1\u63a7\u96c6\u7fa4\u9700\u8981\u6709\u4e00\u4e2a\u53ef\u4ee5\u901a\u8fc7\u516c\u7f51\u8bbf\u95ee\u7684 APIServer\n\u7684\u5730\u5740\u3002\u5982\u679c\u4e0d\u505a\u7279\u6b8a\u8bf4\u660e\uff0c\u5b9e\u8df5\u6848\u4f8b\u4e0a\u7684\u6240\u6709\u6b65\u9aa4\u90fd\u5728\u7ba1\u63a7\u96c6\u7fa4\u4e0a\u64cd\u4f5c\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u8fd9\u4e2a\u573a\u666f\u4e2d\uff0cKubeVela \u80cc\u540e\u91c7\u7528",(0,l.kt)("a",{parentName:"li",href:"https://open-cluster-management.io/getting-started/quick-start/"},"OCM(open-cluster-management)"),"\u6280\u672f\u505a\u5b9e\u9645\u7684\u591a\u96c6\u7fa4\u8d44\u6e90\u5206\u53d1\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u672c\u5b9e\u8df5\u6848\u4f8b\u76f8\u5173\u7684 YAML \u63cf\u8ff0\u548c Shell \u811a\u672c\u90fd\u5728 KubeVela \u9879\u76ee\u7684 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/oam-dev/kubevela/tree/master/docs/examples/workflow-with-ocm"},"docs/examples/workflow-with-ocm")," \u4e0b\uff0c\n\u8bf7\u4e0b\u8f7d\u8be5\u6848\u4f8b\uff0c\u5728\u8be5\u76ee\u5f55\u6267\u884c\u4e0b\u9762\u7684\u7ec8\u7aef\u547d\u4ee4\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u672c\u5b9e\u8df5\u6848\u4f8b\u5c06\u4ee5\u963f\u91cc\u4e91\u7684 ACK \u96c6\u7fa4\u4f5c\u4e3a\u4f8b\u5b50\uff0c\u521b\u5efa\u963f\u91cc\u4e91\u8d44\u6e90\u9700\u8981\u4f7f\u7528\u76f8\u5e94\u7684\u9274\u6743\uff0c\u9700\u8981\u4fdd\u5b58\u4f60\u963f\u91cc\u4e91\u8d26\u53f7\u7684 AK/SK \u5230\u7ba1\u63a7\u96c6\u7fa4\u7684 Secret \u4e2d\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"export ALICLOUD_ACCESS_KEY=xxx; export ALICLOUD_SECRET_KEY=yyy\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5982\u679c\u4f60\u60f3\u4f7f\u7528\u963f\u91cc\u4e91\u5b89\u5168\u4ee4\u724c\u670d\u52a1\uff0c\u8fd8\u8981\u5bfc\u51fa\u73af\u5883\u53d8\u91cf ALICLOUD_SECURITY_TOKEN \u3002\nexport ALICLOUD_SECURITY_TOKEN=zzz  \n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# prepare-alibaba-credentials.sh \u811a\u672c\u4f1a\u8bfb\u53d6\u73af\u5883\u53d8\u91cf\u5e76\u521b\u5efa secret \u5230\u5f53\u524d\u96c6\u7fa4\u3002\nsh hack/prepare-alibaba-credentials.sh\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get secret -n vela-system\nNAME                                         TYPE                                  DATA   AGE\nalibaba-account-creds                        Opaque                                1      11s\n")))),(0,l.kt)("h2",{id:"\u521d\u59cb\u5316\u963f\u91cc\u4e91\u8d44\u6e90\u521b\u5efa\u529f\u80fd"},"\u521d\u59cb\u5316\u963f\u91cc\u4e91\u8d44\u6e90\u521b\u5efa\u529f\u80fd"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 KubeVela \u7684\u73af\u5883\u521d\u59cb\u5316\u529f\u80fd\uff0c\u5f00\u542f\u963f\u91cc\u4e91\u8d44\u6e90\u521b\u5efa\u7684\u7cfb\u7edf\u529f\u80fd\uff0c\u8fd9\u4e2a\u521d\u59cb\u5316\u8fc7\u7a0b\u4e3b\u8981\u662f\u5c06\u4e4b\u524d\u914d\u7f6e\u7684\u9274\u6743\u4fe1\u606f\u63d0\u4f9b\u51fa\u6765\uff0c\u5e76\u521d\u59cb\u5316 Terraform \u7cfb\u7edf\u63d2\u4ef6\u3002\u6211\u4eec\u5c06\u8fd9\u4e2a\u521d\u59cb\u5316\u5bf9\u8c61\u547d\u540d\u4e3a\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"terraform-alibaba"),"\uff0c\u5e76\u90e8\u7f72\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f initializers/init-terraform-alibaba.yaml\n")),(0,l.kt)("h3",{id:"\u521b\u5efa\u73af\u5883\u521d\u59cb\u5316-terraform-alibaba"},"\u521b\u5efa\u73af\u5883\u521d\u59cb\u5316 ",(0,l.kt)("inlineCode",{parentName:"h3"},"terraform-alibaba")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f initializers/init-terraform-alibaba.yaml\n")),(0,l.kt)("p",null,"\u5f53\u73af\u5883\u521d\u59cb\u5316 ",(0,l.kt)("inlineCode",{parentName:"p"},"terraform-alibaba")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"PHASE")," \u5b57\u6bb5\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"success")," \u8868\u793a\u73af\u5883\u521d\u59cb\u5316\u6210\u529f\uff0c\u8fd9\u53ef\u80fd\u9700\u8981\u7b49\u5f851\u5206\u949f\u5de6\u53f3\u7684\u65f6\u95f4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get initializers.core.oam.dev -n vela-system\nNAMESPACE     NAME                  PHASE     AGE\nvela-system   terraform-alibaba     success   94s\n")),(0,l.kt)("h2",{id:"\u521d\u59cb\u5316\u591a\u96c6\u7fa4\u8c03\u5ea6\u529f\u80fd"},"\u521d\u59cb\u5316\u591a\u96c6\u7fa4\u8c03\u5ea6\u529f\u80fd"),(0,l.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 KubeVela \u7684\u73af\u5883\u521d\u59cb\u5316\u529f\u80fd\uff0c\u5f00\u542f\u591a\u96c6\u7fa4\u8c03\u5ea6\u7684\u7cfb\u7edf\u529f\u80fd\uff0c\u8fd9\u4e2a\u521d\u59cb\u5316\u8fc7\u7a0b\u4e3b\u8981\u662f\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 ACK \u96c6\u7fa4\uff0c\u4f7f\u7528 OCM \u591a\u96c6\u7fa4\u7ba1\u7406\u65b9\u6848\u7ba1\u7406\u65b0\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u6211\u4eec\u5c06\u8fd9\u4e2a\u521d\u59cb\u5316\u5bf9\u8c61\u547d\u540d\u4e3a\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"managed-cluster"),"\uff0c\u5e76\u90e8\u7f72\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f initializers/init-managed-cluster.yaml\n")),(0,l.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u4e3a\u4e86\u8ba9\u521b\u5efa\u597d\u7684\u96c6\u7fa4\u53ef\u4ee5\u88ab\u7ba1\u63a7\u96c6\u7fa4\u6240\u4f7f\u7528\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u5c06\u521b\u5efa\u7684\u96c6\u7fa4\u6ce8\u518c\u5230\u7ba1\u63a7\u96c6\u7fa4\u3002\u6211\u4eec\u901a\u8fc7\u5b9a\u4e49\u4e00\u4e2a\u5de5\u4f5c\u6d41\u8282\u70b9\u6765\u4f20\u9012\u65b0\u521b\u5efa\u96c6\u7fa4\u7684\u8bc1\u4e66\u4fe1\u606f\uff0c\u518d\u5b9a\u4e49\u4e00\u4e2a\u5de5\u4f5c\u6d41\u8282\u70b9\u6765\u5b8c\u6210\u96c6\u7fa4\u6ce8\u518c\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49\u6267\u884c\u96c6\u7fa4\u521b\u5efa\u7684\u5de5\u4f5c\u6d41\u8282\u70b9\uff0c\u547d\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"strong"},"create-ack")),"\uff0c\u8fdb\u884c\u90e8\u7f72\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f definitions/create-ack.yaml\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49\u96c6\u7fa4\u6ce8\u518c\u7684\u5de5\u4f5c\u6d41\u8282\u70b9\uff0c\u547d\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"strong"},"register-cluster")),"\uff0c\u8fdb\u884c\u90e8\u7f72\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f definitions/register-cluster.yaml\n")),(0,l.kt)("h3",{id:"\u521b\u5efa\u73af\u5883\u521d\u59cb\u5316"},"\u521b\u5efa\u73af\u5883\u521d\u59cb\u5316"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u5de5\u4f5c\u6d41\u8282\u70b9\u5b9a\u4e49 ",(0,l.kt)("inlineCode",{parentName:"li"},"create-ack")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"register-cluster"),"\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f definitions/create-ack.yaml.yaml\nkubectl apply -f definitions/register-cluster.yaml\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539\u5de5\u4f5c\u6d41\u8282\u70b9 ",(0,l.kt)("inlineCode",{parentName:"li"},"register-ack")," \u7684 hubAPIServer \u7684\u53c2\u6570\u4e3a\u7ba1\u63a7\u96c6\u7fa4\u7684 APIServer \u7684\u516c\u7f51\u5730\u5740\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  - name: register-ack\n    type: register-cluster\n    inputs:\n      - from: connInfo\n        parameterKey: connInfo\n    properties:\n      # \u7528\u6237\u9700\u8981\u586b\u5199\u7ba1\u63a7\u96c6\u7fa4\u7684 APIServer \u7684\u516c\u7f51\u5730\u5740\n      hubAPIServer: {{ public network address of APIServer }}\n      env: prod\n      initNameSpace: default\n      patchLabels:\n        purpose: test\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u73af\u5883\u521d\u59cb\u5316 ",(0,l.kt)("inlineCode",{parentName:"li"},"managed-cluster"),"\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl apply -f initializers/init-managed-cluster.yaml\n")),(0,l.kt)("p",null,"\u5f53\u73af\u5883\u521d\u59cb\u5316 ",(0,l.kt)("inlineCode",{parentName:"p"},"managed-cluster")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"PHASE")," \u5b57\u6bb5\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"success")," \u8868\u793a\u73af\u5883\u521d\u59cb\u5316\u6210\u529f\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u7b49\u5f85 15-20 \u5206\u949f\u5de6\u53f3\u7684\u65f6\u95f4\uff08\u963f\u91cc\u4e91\u521b\u5efa\u4e00\u4e2aack\u96c6\u7fa4\u9700\u8981 15 \u5206\u949f\u5de6\u53f3\uff09\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get initializers.core.oam.dev -n vela-system\nNAMESPACE     NAME                  PHASE     AGE\nvela-system   managed-cluster       success   20m\n")),(0,l.kt)("p",null,"\u5f53\u73af\u5883\u521d\u59cb\u5316 ",(0,l.kt)("inlineCode",{parentName:"p"},"managed-cluster")," \u521d\u59cb\u5316\u6210\u529f\u540e\uff0c\u4f60\u53ef\u4ee5\u770b\u5230\u65b0\u96c6\u7fa4 ",(0,l.kt)("inlineCode",{parentName:"p"},"poc-01")," \u5df2\u7ecf\u88ab\u88ab\u6ce8\u518c\u5230\u7ba1\u63a7\u96c6\u7fa4\u4e2d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get managedclusters.cluster.open-cluster-management.io\nNAME     HUB ACCEPTED   MANAGED CLUSTER URLS         JOINED   AVAILABLE   AGE\npoc-01   true          {{ APIServer address }}       True     True        30s\n")),(0,l.kt)("h2",{id:"\u90e8\u7f72\u5e94\u7528\u5230\u6307\u5b9a\u96c6\u7fa4"},"\u90e8\u7f72\u5e94\u7528\u5230\u6307\u5b9a\u96c6\u7fa4"),(0,l.kt)("p",null,"\u7ba1\u7406\u5458\u5b8c\u6210\u591a\u96c6\u7fa4\u7684\u6ce8\u518c\u4e4b\u540e\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u4e2d\u6307\u5b9a\u5c06\u8d44\u6e90\u90e8\u7f72\u5230\u54ea\u4e2a\u96c6\u7fa4\u4e2d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f app.yaml\n")),(0,l.kt)("p",null,"\u68c0\u67e5\u5e94\u7528\u90e8\u7f72\u8ba1\u5212 ",(0,l.kt)("inlineCode",{parentName:"p"},"workflow-demo")," \u662f\u5426\u6210\u529f\u521b\u5efa\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get app workflow-demo\nNAME            COMPONENT        TYPE         PHASE     HEALTHY   STATUS   AGE\nworkflow-demo   podinfo-server   webservice   running   true               7s\n")),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5207\u6362\u5230\u65b0\u521b\u5efa\u7684 ACK \u96c6\u7fa4\u4e0a\uff0c\u67e5\u770b\u8d44\u6e90\u662f\u5426\u88ab\u6210\u529f\u5730\u90e8\u7f72\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployments\nNAME             READY   UP-TO-DATE   AVAILABLE   AGE\npodinfo-server   1/1     1            1           40s\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get service\nNAME                                          TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)          AGE\npodinfo-server-auxiliaryworkload-85d7b756f9   LoadBalancer   192.168.57.21   < EIP >         9898:31132/TCP   50s\n")),(0,l.kt)("p",null,"Service ",(0,l.kt)("inlineCode",{parentName:"p"},"podinfo-server")," \u7ed1\u5b9a\u4e86\u4e00\u4e2a EXTERNAL-IP\uff0c\u5141\u8bb8\u7528\u6237\u901a\u8fc7\u516c\u7f51\u8bbf\u95ee\u5e94\u7528\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u4e2d\u8f93\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"http://<EIP>:9898")," \u6765\u8bbf\u95ee\u521a\u521a\u521b\u5efa\u7684\u5e94\u7528\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"workflow-with-ocm-demo",src:n(86376).Z})),(0,l.kt)("p",null,"\u4e0a\u8ff0\u5e94\u7528\u90e8\u7f72\u8ba1\u5212 ",(0,l.kt)("inlineCode",{parentName:"p"},"workflow-demo")," \u4e2d\u4f7f\u7528\u4e86\u5185\u7f6e\u7684\u5e94\u7528\u7b56\u7565 ",(0,l.kt)("inlineCode",{parentName:"p"},"env-binding")," \u5bf9\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u8fdb\u884c\u5dee\u5f02\u5316\u914d\u7f6e\uff0c\u4fee\u6539\u4e86\u7ec4\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"podinfo-server")," \u7684\u955c\u50cf\uff0c\n\u4ee5\u53ca\u8fd0\u7ef4\u7279\u5f81 ",(0,l.kt)("inlineCode",{parentName:"p"},"expose")," \u7684\u7c7b\u578b\u4ee5\u5141\u8bb8\u96c6\u7fa4\u5916\u90e8\u7684\u8bf7\u6c42\u8bbf\u95ee\uff0c\u540c\u65f6\u5e94\u7528\u7b56\u7565 ",(0,l.kt)("inlineCode",{parentName:"p"},"env-binding")," \u6307\u5b9a\u4e86\u8d44\u6e90\u8c03\u5ea6\u7b56\u7565\uff0c\u5c06\u8d44\u6e90\u90e8\u7f72\u5230\u65b0\u6ce8\u518c\u7684 ACK \u96c6\u7fa4\u5185\u3002"),(0,l.kt)("p",null,"\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u7684\u4ea4\u4ed8\u5de5\u4f5c\u6d41\u4e5f\u4f7f\u7528\u4e86\u5185\u7f6e\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"deploy2env")," \u4ea4\u4ed8\u5de5\u4f5c\u6d41\u5b9a\u4e49\uff0c\u6307\u5b9a\u5177\u4f53\u54ea\u4e00\u4e2a\u914d\u7f6e\u540e\u7684\u7ec4\u4ef6\u90e8\u7f72\u5230\u96c6\u7fa4\u4e2d\u3002"))}c.isMDXComponent=!0},86376:function(e,t,n){"use strict";t.Z=n.p+"assets/images/workflow-with-ocm-demo-7149acc0759bd7b339765f4319aff5f9.png"}}]);