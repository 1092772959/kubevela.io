(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[84686],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=l,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(y,o(o({ref:n},c),{},{components:t})):a.createElement(y,o({ref:n},c))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},69326:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p},default:function(){return c}});var a=t(22122),l=t(19756),r=(t(67294),t(3905)),o={title:"Multi-Cluster App Delivery"},i={unversionedId:"case-studies/multi-cluster",id:"version-v1.2/case-studies/multi-cluster",isDocsHomePage:!1,title:"Multi-Cluster App Delivery",description:"This section will introduce how to use KubeVela for multi-cluster application delivery and why.",source:"@site/versioned_docs/version-v1.2/case-studies/multi-cluster.md",sourceDirName:"case-studies",slug:"/case-studies/multi-cluster",permalink:"/zh/docs/case-studies/multi-cluster",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/case-studies/multi-cluster.md",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642176699,formattedLastUpdatedAt:"2022/1/14",frontMatter:{title:"Multi-Cluster App Delivery"},sidebar:"version-v1.2/docs",previous:{title:"Health Check",permalink:"/zh/docs/end-user/policies/health"},next:{title:"Dependency and Data Passing",permalink:"/zh/docs/end-user/workflow/component-dependency-parameter"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Preparation",id:"preparation",children:[]},{value:"Deploy Application to multi cluster",id:"deploy-application-to-multi-cluster",children:[]},{value:"More use cases",id:"more-use-cases",children:[]}],s={toc:p};function c(e){var n=e.components,o=(0,l.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section will introduce how to use KubeVela for multi-cluster application delivery and why."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"There are more and more situations come out that organizations need multi-cluster technology for application delivery:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For scalability, a single Kubernetes cluster has its limit around 5K nodes or less, it is unable to handle the large scale application load."),(0,r.kt)("li",{parentName:"ul"},"For stability/availability, application can deploy in multi-cluster for backup which provides more stability and availability."),(0,r.kt)("li",{parentName:"ul"},"For security, you may need to deploy in different zones/areas as government policy requires.")),(0,r.kt)("p",null,"The following guide will the multi-cluster that helps you easily deploy an application to different environments."),(0,r.kt)("h2",{id:"preparation"},"Preparation"),(0,r.kt)("p",null,"You can simply join an existing cluster into KubeVela by specify its KubeConfig like below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"vela cluster join <your kubeconfig path>\n")),(0,r.kt)("p",null,"It will use field ",(0,r.kt)("inlineCode",{parentName:"p"},"context.cluster")," in KubeConfig as the cluster name automatically,\nyou can also specify the name by ",(0,r.kt)("inlineCode",{parentName:"p"},"--name")," parameter. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vela cluster join stage-cluster.kubeconfig --name cluster-staging\nvela cluster join prod-cluster.kubeconfig --name cluster-prod\n")),(0,r.kt)("p",null,"After clusters joined, you could list all clusters managed by KubeVela currently."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela cluster list\nCLUSTER         TYPE    ENDPOINT                \ncluster-prod    tls     https://47.88.4.97:6443 \ncluster-staging tls     https://47.88.7.230:6443\n")),(0,r.kt)("p",null,"You can also detach a cluster if you're not using it any more."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ vela cluster detach cluster-prod\n")),(0,r.kt)("p",null,"If there's still any application running in the cluster, the command will be rejected."),(0,r.kt)("h2",{id:"deploy-application-to-multi-cluster"},"Deploy Application to multi cluster"),(0,r.kt)("p",null,"KubeVela regards a Kubernetes cluster as an environment, so you can deploy an application into\none or more environments."),(0,r.kt)("p",null,"Below is an example, deploy to a staging environment first, check the application running well,\nand finally promote to production environment."),(0,r.kt)("p",null,"For different environments, the deployment configuration can also have some nuance. In the staging environment, we only need one replica for the webservice and do not need the worker. In the production environment, we setup 3 replicas for the webservice and enable the worker."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: example-app\n  namespace: default\nspec:\n  components:\n    - name: hello-world-server\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n      traits:\n        - type: scaler\n          properties:\n            replicas: 1\n    - name: data-worker\n      type: worker\n      properties:\n        image: busybox\n        cmd:\n          - sleep\n          - '1000000'\n  policies:\n    - name: example-multi-env-policy\n      type: env-binding\n      properties:\n        envs:\n          - name: staging\n            placement: # selecting the cluster to deploy to\n              clusterSelector:\n                name: cluster-staging\n            selector: # selecting which component to use\n              components:\n                - hello-world-server\n\n          - name: prod\n            placement:\n              clusterSelector:\n                name: cluster-prod\n            patch: # overlay patch on above components\n              components:\n                - name: hello-world-server\n                  type: webservice\n                  traits:\n                    - type: scaler\n                      properties:\n                        replicas: 3\n\n    - name: health-policy-demo\n      type: health\n      properties:\n        probeInterval: 5\n        probeTimeout: 10\n\n  workflow:\n    steps:\n      # deploy to staging env\n      - name: deploy-staging\n        type: deploy2env\n        properties:\n          policy: example-multi-env-policy\n          env: staging\n\n      # manual check\n      - name: manual-approval\n        type: suspend\n\n      # deploy to prod env\n      - name: deploy-prod\n        type: deploy2env\n        properties:\n          policy: example-multi-env-policy\n          env: prod\n")),(0,r.kt)("p",null,"After the application deployed, it will run as the workflow steps."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can refer to ",(0,r.kt)("a",{parentName:"p",href:"../end-user/policies/envbinding"},"Env Binding")," and ",(0,r.kt)("a",{parentName:"p",href:"../end-user/policies/health"},"Health Check")," policy user guide for parameter details.")),(0,r.kt)("p",null,"It will deploy application to staging environment first, you can check the ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," status by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"> kubectl get application example-app\nNAME          COMPONENT            TYPE         PHASE                HEALTHY   STATUS       AGE\nexample-app   hello-world-server   webservice   workflowSuspending   true      Ready:1/1    10s\n")),(0,r.kt)("p",null,"We can see that the workflow is suspended at ",(0,r.kt)("inlineCode",{parentName:"p"},"manual-approval"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n  status:\n    workflow:\n      appRevision: example-app-v1:44a6447e3653bcc2\n      contextBackend:\n        apiVersion: v1\n        kind: ConfigMap\n        name: workflow-example-app-context\n        uid: 56ddcde6-8a83-4ac3-bf94-d19f8f55eb3d\n      mode: StepByStep\n      steps:\n      - id: wek2b31nai\n        name: deploy-staging\n        phase: succeeded\n        type: deploy2env\n      - id: 7j5eb764mk\n        name: manual-approval\n        phase: succeeded\n        type: suspend\n      suspend: true\n      terminated: false\n      waitCount: 0\n")),(0,r.kt)("p",null,"You can also check the health status in the ",(0,r.kt)("inlineCode",{parentName:"p"},"status.service")," field below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n  status:\n    services:\n    - env: staging\n      healthy: true\n      message: 'Ready:1/1 '\n      name: hello-world-server\n      scopes:\n      - apiVersion: core.oam.dev/v1alpha2\n        kind: HealthScope\n        name: health-policy-demo\n        namespace: test\n        uid: 6e6230a3-93f3-4dba-ba09-dd863b6c4a88\n      traits:\n      - healthy: true\n        type: scaler\n      workloadDefinition:\n        apiVersion: apps/v1\n        kind: Deployment\n")),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"resume")," command after everything verified in statging cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"> vela workflow resume example-app\nSuccessfully resume workflow: example-app\n")),(0,r.kt)("p",null,"Recheck the ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," status:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"> kubectl get application example-app\nNAME          COMPONENT            TYPE         PHASE     HEALTHY   STATUS       AGE\nexample-app   hello-world-server   webservice   running   true      Ready:1/1    62s\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  status:\n    services:\n    - env: staging\n      healthy: true\n      message: 'Ready:1/1 '\n      name: hello-world-server\n      scopes:\n      - apiVersion: core.oam.dev/v1alpha2\n        kind: HealthScope\n        name: health-policy-demo\n        namespace: default\n        uid: 9174ac61-d262-444b-bb6c-e5f0caee706a\n      traits:\n      - healthy: true\n        type: scaler\n      workloadDefinition:\n        apiVersion: apps/v1\n        kind: Deployment\n    - env: prod\n      healthy: true\n      message: 'Ready:3/3 '\n      name: hello-world-server\n      scopes:\n      - apiVersion: core.oam.dev/v1alpha2\n        kind: HealthScope\n        name: health-policy-demo\n        namespace: default\n        uid: 9174ac61-d262-444b-bb6c-e5f0caee706a\n      traits:\n      - healthy: true\n        type: scaler\n      workloadDefinition:\n        apiVersion: apps/v1\n        kind: Deployment\n    - env: prod\n      healthy: true\n      message: 'Ready:1/1 '\n      name: data-worker\n      scopes:\n      - apiVersion: core.oam.dev/v1alpha2\n        kind: HealthScope\n        name: health-policy-demo\n        namespace: default\n        uid: 9174ac61-d262-444b-bb6c-e5f0caee706a\n      workloadDefinition:\n        apiVersion: apps/v1\n        kind: Deployment\n")),(0,r.kt)("p",null,"All the step status in workflow is succeeded:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n  status:\n    workflow:\n      appRevision: example-app-v1:44a6447e3653bcc2\n      contextBackend:\n        apiVersion: v1\n        kind: ConfigMap\n        name: workflow-example-app-context\n        uid: e1e7bd2d-8743-4239-9de7-55a0dd76e5d3\n      mode: StepByStep\n      steps:\n      - id: q8yx7pr8wb\n        name: deploy-staging\n        phase: succeeded\n        type: deploy2env\n      - id: 6oxrtvki9o\n        name: manual-approval\n        phase: succeeded\n        type: suspend\n      - id: uk287p8c31\n        name: deploy-prod\n        phase: succeeded\n        type: deploy2env\n      suspend: false\n      terminated: false\n      waitCount: 0\n")),(0,r.kt)("h2",{id:"more-use-cases"},"More use cases"),(0,r.kt)("p",null,"KubeVela can provide many strategies to deploy an application to multiple clusters by composing env-binding policy and workflow steps."),(0,r.kt)("p",null,"You can have a glimpse of how does it work as below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:t(8877).Z})),(0,r.kt)("p",null,"More use cases about the multi cluster application deployment are coming soon."))}c.isMDXComponent=!0},8877:function(e,n,t){"use strict";n.Z=t.p+"assets/images/workflow-multi-env-dd2ffa93c55be421715141a552fed715.png"}}]);