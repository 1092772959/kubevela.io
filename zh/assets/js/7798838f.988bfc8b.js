(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[21206],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),m=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=m(n),d=r,f=s["".concat(i,".").concat(d)]||s[d]||u[d]||p;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<p;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9748:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return i},default:function(){return c}});var a=n(22122),r=n(19756),p=(n(67294),n(3905)),l={"\u6807\u9898":"\u6dfb\u52a0 Trait \u7279\u6027"},o={unversionedId:"platform-engineers/helm/trait",id:"version-v1.1/platform-engineers/helm/trait",isDocsHomePage:!1,title:"trait",description:"KubeVela \u4e2d\u7684 Trait \u7279\u6027\u53ef\u4ee5\u4ece\u57fa\u4e8eHelm\u7684\u7ec4\u4ef6\u65e0\u7f1d\u6dfb\u52a0.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/platform-engineers/helm/trait.md",sourceDirName:"platform-engineers/helm",slug:"/platform-engineers/helm/trait",permalink:"/zh/docs/v1.1/platform-engineers/helm/trait",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/helm/trait.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1631690672,formattedLastUpdatedAt:"2021/9/15",frontMatter:{"\u6807\u9898":"\u6dfb\u52a0 Trait \u7279\u6027"}},i=[{value:"\u9a8c\u8bc1\u7279\u6027\u5de5\u4f5c\u6b63\u786e",id:"\u9a8c\u8bc1\u7279\u6027\u5de5\u4f5c\u6b63\u786e",children:[]},{value:"\u66f4\u65b0\u5e94\u7528",id:"\u66f4\u65b0\u5e94\u7528",children:[]},{value:"\u53bb\u9664 Trait \u7279\u6027",id:"\u53bb\u9664-trait-\u7279\u6027",children:[]}],m={toc:i};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"KubeVela \u4e2d\u7684 Trait \u7279\u6027\u53ef\u4ee5\u4ece\u57fa\u4e8eHelm\u7684\u7ec4\u4ef6\u65e0\u7f1d\u6dfb\u52a0."),(0,p.kt)("p",null,"\u5728\u4ee5\u4e0b\u5e94\u7528\u5b9e\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u57fa\u4e8e Helm \u7ec4\u4ef6\u6dfb\u52a0\u4e24\u4e2a Trait \u7279\u6027 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/charts/vela-core/templates/defwithtemplate/manualscale.yaml"},"scaler")," \u548c ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/docs/examples/helm-module/virtual-group-td.yaml"},"virtualgroup"),"."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: myapp\n  namespace: default\nspec:\n  components:\n    - name: demo-podinfo \n      type: webapp-chart\n      properties: \n        image:\n          tag: "5.1.2"\n      traits:\n        - type: scaler\n          properties:\n            replicas: 4\n        - type: virtualgroup\n          properties:\n            group: "my-group1"\n            type: "cluster"\n')),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f: \u5f53\u6211\u4eec\u4f7f\u7528\u57fa\u4e8e Helm \u7684 Trait \u7279\u6027\u65f6, ",(0,p.kt)("em",{parentName:"p"},"\u8bf7\u786e\u8ba4\u5728\u4f60 Helm \u56fe\u6807\u4e2d\u7684\u76ee\u6807\u8d1f\u8f7d\u4e25\u683c\u6309\u7167 qualified-full-name convention in Helm \u7684\u547d\u540d\u65b9\u5f0f.")," ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/captainroy-hy/podinfo/blob/c2b9603036f1f033ec2534ca0edee8eff8f5b335/charts/podinfo/templates/deployment.yaml#L4"},"\u4ee5\u6b64\u8868\u4e3a\u4f8b"),",\n\u8d1f\u8f7d\u540d\u4e3a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/captainroy-hy/podinfo/blob/c2b9603036f1f033ec2534ca0edee8eff8f5b335/charts/podinfo/templates/_helpers.tpl#L13"},"\u7248\u672c\u540d\u548c\u56fe\u8868\u540d"),".")),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u8fd9\u662f\u56e0\u4e3a KubeVela \u4f9d\u8d56\u547d\u540d\u53bb\u53d1\u73b0\u8d1f\u8f7d,\u5426\u5219\u5c06\u4e0d\u80fd\u628a Trait \u7279\u6027\u8d4b\u4e88\u8d1f\u8f7d. KubeVela \u5c06\u4f1a\u57fa\u4e8e\u4f60\u7684\u5e94\u7528\u548c\u7ec4\u4ef6\u81ea\u52a8\u751f\u6210\u7248\u672c\u540d, \u6240\u4ee5\u4f60\u9700\u8981\u4fdd\u8bc1\u4e0d\u80fd\u8d85\u51fa\u4f60\u7684 Helm \u56fe\u8868\u4e2d\u547d\u540d\u6a21\u7248\u683c\u5f0f.")),(0,p.kt)("h2",{id:"\u9a8c\u8bc1\u7279\u6027\u5de5\u4f5c\u6b63\u786e"},"\u9a8c\u8bc1\u7279\u6027\u5de5\u4f5c\u6b63\u786e"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u56e0\u4e3a\u5e94\u7528\u5185\u90e8\u7684\u8c03\u6574\u751f\u6548\u9700\u8981\u51e0\u79d2\u949f\u65f6\u95f4.")),(0,p.kt)("p",null,"\u68c0\u67e5\u7f29\u653e\u7ec4 ",(0,p.kt)("inlineCode",{parentName:"p"},"scaler")," \u7279\u6027\u751f\u6548."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get manualscalertrait\nNAME                            AGE\ndemo-podinfo-scaler-d8f78c6fc   13m\n")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment myapp-demo-podinfo -o json | jq .spec.replicas\n4\n")),(0,p.kt)("p",null,"\u68c0\u67e5\u865a\u62df\u7ec4 ",(0,p.kt)("inlineCode",{parentName:"p"},"virtualgroup")," \u7279\u6027."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get deployment myapp-demo-podinfo -o json | jq .spec.template.metadata.labels\n{\n  "app.cluster.virtual.group": "my-group1",\n  "app.kubernetes.io/name": "myapp-demo-podinfo"\n}\n')),(0,p.kt)("h2",{id:"\u66f4\u65b0\u5e94\u7528"},"\u66f4\u65b0\u5e94\u7528"),(0,p.kt)("p",null,"\u5f53\u5e94\u7528\u5df2\u88ab\u90e8\u7f72\u4e14 workload \u8d1f\u8f7d/ Trait \u7279\u6027\u90fd\u88ab\u987a\u5229\u5efa\u7acb\u65f6,\n\u4f60\u53ef\u4ee5\u66f4\u65b0\u5e94\u7528, \u53d8\u5316\u4f1a\u88ab\u8d1f\u8f7d\u5b9e\u4f8b\u6240\u54cd\u5e94."),(0,p.kt)("p",null,"\u8ba9\u6211\u4eec\u5bf9\u5b9e\u4f8b\u5e94\u7528\u7684\u914d\u7f6e\u505a\u51e0\u4e2a\u6539\u52a8."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: myapp\n  namespace: default\nspec:\n  components:\n    - name: demo-podinfo \n      type: webapp-chart\n      properties: \n        image:\n          tag: "5.1.3" # 5.1.2 => 5.1.3 \n      traits:\n        - type: scaler\n          properties:\n            replicas: 2 # 4 => 2\n        - type: virtualgroup\n          properties:\n            group: "my-group2" # my-group1 => my-group2\n            type: "cluster"\n')),(0,p.kt)("p",null,"\u5728\u51e0\u5206\u949f\u540e\u5e94\u7528\u65b0\u914d\u7f6e\u5e76\u68c0\u67e5\u6548\u679c."),(0,p.kt)("p",null,"\u68c0\u67e5\u4ece\u5e94\u7528\u5c5e\u6027 ",(0,p.kt)("inlineCode",{parentName:"p"},"properties")," \u7684\u65b0\u503c (",(0,p.kt)("inlineCode",{parentName:"p"},"image.tag = 5.1.3"),") \u5df2\u88ab\u8d4b\u4e88\u56fe\u8868."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment myapp-demo-podinfo -o json | jq '.spec.template.spec.containers[0].image'\n\"ghcr.io/stefanprodan/podinfo:5.1.3\"\n")),(0,p.kt)("p",null,"\u5b9e\u9645\u4e0a, Helm \u66f4\u65b0\u4e86\u7248\u672c\u53f7 (revision 1 => 2)."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ helm ls -A\nNAME                NAMESPACE   REVISION    UPDATED                                 STATUS      CHART           APP VERSION\nmyapp-demo-podinfo  default     2           2021-03-15 08:52:00.037690148 +0000 UTC deployed    podinfo-5.1.4   5.1.4\n")),(0,p.kt)("p",null,"\u68c0\u67e5 ",(0,p.kt)("inlineCode",{parentName:"p"},"scaler")," \u7684\u7279\u6027."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment myapp-demo-podinfo -o json | jq .spec.replicas\n2\n")),(0,p.kt)("p",null,"\u68c0\u67e5 ",(0,p.kt)("inlineCode",{parentName:"p"},"virtualgroup")," \u7684\u7279\u6027."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get deployment myapp-demo-podinfo -o json | jq .spec.template.metadata.labels\n{\n  "app.cluster.virtual.group": "my-group2",\n  "app.kubernetes.io/name": "myapp-demo-podinfo"\n}\n')),(0,p.kt)("h2",{id:"\u53bb\u9664-trait-\u7279\u6027"},"\u53bb\u9664 Trait \u7279\u6027"),(0,p.kt)("p",null,"\u8ba9\u6211\u4eec\u8bd5\u8bd5\u4ece\u5e94\u7528\u4e2d\u53bb\u9664\u7279\u6027."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: Application\nmetadata:\n  name: myapp\n  namespace: default\nspec:\n  components:\n    - name: demo-podinfo \n      type: webapp-chart \n      settings: \n        image:\n          tag: "5.1.3"\n      traits:\n        # - name: scaler\n        #   properties:\n        #    replicas: 2 \n        - name: virtualgroup\n          properties:\n            group: "my-group2"\n            type: "cluster"\n')),(0,p.kt)("p",null,"\u66f4\u65b0\u5e94\u7528\u5b9e\u4f8b\u5e76\u68c0\u67e5 ",(0,p.kt)("inlineCode",{parentName:"p"},"manualscalertrait")," \u5df2\u88ab\u5220\u9664."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get manualscalertrait\nNo resources found\n")))}c.isMDXComponent=!0}}]);