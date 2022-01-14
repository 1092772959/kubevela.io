(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[10084],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=m(n),u=r,k=s["".concat(o,".").concat(u)]||s[u]||c[u]||l;return n?a.createElement(k,p(p({ref:t},d),{},{components:n})):a.createElement(k,p({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var m=2;m<l;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},63327:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return o},default:function(){return d}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),p={title:"Multi-Environment"},i={unversionedId:"end-user/policies/envbinding",id:"version-v1.2/end-user/policies/envbinding",isDocsHomePage:!1,title:"Multi-Environment",description:"This documentation will introduce how to use env-binding to automate multi-stage application rollout across multiple environments.",source:"@site/versioned_docs/version-v1.2/end-user/policies/envbinding.md",sourceDirName:"end-user/policies",slug:"/end-user/policies/envbinding",permalink:"/zh/docs/end-user/policies/envbinding",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/policies/envbinding.md",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642176699,formattedLastUpdatedAt:"2022/1/14",frontMatter:{title:"Multi-Environment"},sidebar:"version-v1.2/docs",previous:{title:"Needs More\uff1f",permalink:"/zh/docs/end-user/traits/more"},next:{title:"Built-in Workflow Steps",permalink:"/zh/docs/end-user/workflow/built-in-workflow-defs"}},o=[{value:"Background",id:"background",children:[]},{value:"Multi-env Application Deployment",id:"multi-env-application-deployment",children:[]},{value:"Appendix: Parameter List",id:"appendix-parameter-list",children:[]}],m={toc:o};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This documentation will introduce how to use env-binding to automate multi-stage application rollout across multiple environments."),(0,l.kt)("h2",{id:"background"},"Background"),(0,l.kt)("p",null,"Users usually have two or more environments to deploy applications to. For example, dev environment to test the application code, and production environment to deploy applications to serve live traffic. For different environments, the deployment configuration also has some nuance."),(0,l.kt)("h2",{id:"multi-env-application-deployment"},"Multi-env Application Deployment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: example-app\n  namespace: demo\nspec:\n  components:\n    - name: hello-world-server\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n      traits:\n        - type: scaler\n          properties:\n            replicas: 1\n    - name: data-worker\n      type: worker\n      properties:\n        image: busybox\n        cmd:\n          - sleep\n          - '1000000'\n  policies:\n    - name: example-multi-env-policy\n      type: env-binding\n      properties:\n        envs:\n          - name: test\n            placement: # selecting the namespace (in local cluster) to deploy to\n              namespaceSelector:\n                name: test\n            selector: # selecting which component to use\n              components:\n                - data-worker\n\n          - name: staging\n            placement: # selecting the cluster to deploy to\n              clusterSelector:\n                name: cluster-staging\n\n          - name: prod\n            placement: # selecting both namespace and cluster to deploy to\n              clusterSelector:\n                name: cluster-prod\n              namespaceSelector:\n                name: prod\n            patch: # overlay patch on above components\n              components:\n                - name: hello-world-server\n                  type: webservice\n                  traits:\n                    - type: scaler\n                      properties:\n                        replicas: 3\n\n  workflow:\n    steps:\n      # deploy to test env\n      - name: deploy-test\n        type: deploy2env\n        properties:\n          policy: example-multi-env-policy\n          env: test\n\n      # deploy to staging env\n      - name: deploy-staging\n        type: deploy2env\n        properties:\n          policy: example-multi-env-policy\n          env: staging\n\n      # manual check\n      - name: manual-approval \n        type: suspend\n\n      # deploy to prod env\n      - name: deploy-prod\n        type: deploy2env\n        properties:\n          policy: example-multi-env-policy\n          env: prod\n")),(0,l.kt)("p",null,"We apply the Application ",(0,l.kt)("inlineCode",{parentName:"p"},"policy-demo")," in the example."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Before applying this example application, you need a namespace named ",(0,l.kt)("inlineCode",{parentName:"p"},"demo")," in the current cluster and namespace ",(0,l.kt)("inlineCode",{parentName:"p"},"test")," in both the current cluster and the staging cluster. You need namespace ",(0,l.kt)("inlineCode",{parentName:"p"},"prod")," in cluster ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster-prod")," as well. You can create it by executing cmd ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl create ns <namespace>"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vela up -f app.yaml\n")),(0,l.kt)("p",null,"After the Application is created, a configured Application will be created under the ",(0,l.kt)("inlineCode",{parentName:"p"},"demo")," namespace."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get app -n demo\nNAME          COMPONENT            TYPE         PHASE     HEALTHY   STATUS   AGE\nexample-app   hello-world-server   webservice   running                      25s\n")),(0,l.kt)("p",null,"If you want to learn more about ",(0,l.kt)("inlineCode",{parentName:"p"},"env-binding"),", please refer to ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"../../case-studies/multi-cluster"},"Multi Cluster Deployment")),"."),(0,l.kt)("h2",{id:"appendix-parameter-list"},"Appendix: Parameter List"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Desc"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"envs"),(0,l.kt)("td",{parentName:"tr",align:"left"},"environment configuration"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"env")," array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"null")))),(0,l.kt)("p",null,"env"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Desc"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"name"),(0,l.kt)("td",{parentName:"tr",align:"left"},"environment name"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"patch"),(0,l.kt)("td",{parentName:"tr",align:"left"},"configure the components of the Application"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"patch")),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"placement"),(0,l.kt)("td",{parentName:"tr",align:"left"},"resource scheduling strategy, choose to deploy the configured resources to the specified cluster or namespace"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"placement")),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"selector"),(0,l.kt)("td",{parentName:"tr",align:"left"},"identify which components to be deployed for this environment, default to be empty which means deploying all components"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"selector")),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"null")))),(0,l.kt)("p",null,"patch"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Desc"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"components"),(0,l.kt)("td",{parentName:"tr",align:"left"},"components that need to be configured"),(0,l.kt)("td",{parentName:"tr",align:"left"},"component array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"null")))),(0,l.kt)("p",null,"placement"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Desc"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"clusterSelector"),(0,l.kt)("td",{parentName:"tr",align:"left"},"select deploy cluster by cluster name"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"clusterSelector")),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"namespaceSelector"),(0,l.kt)("td",{parentName:"tr",align:"left"},"select deploy namespace by namespace name"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"namespaceSelector")),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"null")))),(0,l.kt)("p",null,"selector"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Desc"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"components"),(0,l.kt)("td",{parentName:"tr",align:"left"},"component names to be used"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string array"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"null")))),(0,l.kt)("p",null,"clusterSelector"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Desc"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"name"),(0,l.kt)("td",{parentName:"tr",align:"left"},"cluster name"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"null")))),(0,l.kt)("p",null,"namespaceSelector"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Desc"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"name"),(0,l.kt)("td",{parentName:"tr",align:"left"},"namespace name"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"null")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You need to upgrade to KubeVela v1.1.5+ to enable ",(0,l.kt)("inlineCode",{parentName:"p"},"namespaceSelector"),".")))}d.isMDXComponent=!0}}]);