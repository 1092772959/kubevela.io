(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[44748],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36911:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var o=n(22122),r=n(19756),i=(n(67294),n(3905)),a={title:"Deploy Kubernetes Objects"},s={unversionedId:"tutorials/k8s-object",id:"version-v1.2/tutorials/k8s-object",isDocsHomePage:!1,title:"Deploy Kubernetes Objects",description:"This section introduces that how you can deploy Kubernetes objects into multi environments and clusters.",source:"@site/versioned_docs/version-v1.2/tutorials/k8s-object.mdx",sourceDirName:"tutorials",slug:"/tutorials/k8s-object",permalink:"/zh/docs/tutorials/k8s-object",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/tutorials/k8s-object.mdx",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642176699,formattedLastUpdatedAt:"2022/1/14",frontMatter:{title:"Deploy Kubernetes Objects"},sidebar:"version-v1.2/docs",previous:{title:"Deploy Cloud Service",permalink:"/zh/docs/tutorials/consume-cloud-services"},next:{title:"Working with Jenkins",permalink:"/zh/docs/tutorials/jenkins"}},l=[{value:"Before starting",id:"before-starting",children:[]},{value:"Scheduling and creating Targets",id:"scheduling-and-creating-targets",children:[]},{value:"Creating Kubernetes application",id:"creating-kubernetes-application",children:[]},{value:"Deploying test environment",id:"deploying-test-environment",children:[]},{value:"Deploying prod environment",id:"deploying-prod-environment",children:[]},{value:"Next step",id:"next-step",children:[]}],c={toc:l};function p(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section introduces that how you can deploy Kubernetes objects into multi environments and clusters."),(0,i.kt)("p",null,"KubeVela supports you to render, orchestrate and deploy Kubernetes objects. The common usage type is Deployment+Service. Using customized Workflow, you can deploy an application into multi-cluster in sequence. Hence you'll get to know:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Deploy Kubernetes objects."),(0,i.kt)("li",{parentName:"ol"},"Workflow and its usage."),(0,i.kt)("li",{parentName:"ol"},"Multi-env/cluster in application delivery."),(0,i.kt)("li",{parentName:"ol"},"The control loop of application deployment: Rollback, Terminate and Continue.")),(0,i.kt)("h2",{id:"before-starting"},"Before starting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Prepare a Deployment+Service yaml config resource.")),(0,i.kt)("h2",{id:"scheduling-and-creating-targets"},"Scheduling and creating Targets"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../getting-started/core-concept#target"},"Target")," defines the namespace in runtime cluster for application delivery. Once Target created, namespace in runtime cluster created accordingly."),(0,i.kt)("p",null,"Clicking ",(0,i.kt)("inlineCode",{parentName:"p"},"New Target")," into the creating process. Type in necessary Infos as Project, Cluster, Namespace to create. We create targets for 2 clusters. We create targets for 2 clusters. If you only have 1 cluster you can also use its namespaces to create several targets. For now, we at least give it to 3 Targets: 1 for test and 2 for prod environments."),(0,i.kt)("h2",{id:"creating-kubernetes-application"},"Creating Kubernetes application"),(0,i.kt)("p",null,"After Target was created, we begin to create an application. Same to ",(0,i.kt)("a",{parentName:"p",href:"../quick-start"},"Deploy First Application"),", we need to submit basic Infos:"),(0,i.kt)("p",null,"(1) Select type: k8s-objects; NOTE that in one application please maintain at most one Workload type of resource, meaning without more than a Deployment or Statefulset."),(0,i.kt)("p",null,"(2) We schedule two environments, test and prod. Test environment links to the target for dev and prod environment select the other two targets."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2279).Z})),(0,i.kt)("p",null,"(3) Upload your Yaml file. Note that, the name of the resource you specified must not conflict with existing ones. Also, the editor automatically formats the Yaml file."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2896).Z})),(0,i.kt)("p",null,"After above, click ",(0,i.kt)("inlineCode",{parentName:"p"},"Create")," to finish."),(0,i.kt)("h2",{id:"deploying-test-environment"},"Deploying test environment"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(73798).Z})),(0,i.kt)("p",null,"Enter the further page, the application has automatically generated 2 environments and 2 workflows. Each environment has its workflow by default. A workflow consists of one or more steps such as ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy2env"),"."),(0,i.kt)("p",null,"Firstly let's switch to the Tab of the test environment, click Deploy on the page. Since we only assigned one target for the test environment, there's one step for workflow. Looking at the status of its execution in the upper-right, it turns green when succeeded. If it shows red means that workflow went into trouble, you can click on the red sign to look through the detailed reason. Fix it accordingly and the deployment will continue to be regained."),(0,i.kt)("p",null,"After deployment is finished, refresh the list of instances to see Pods. Click for more if Pod shows abnormality."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(84677).Z})),(0,i.kt)("p",null,"As for the test environment, it sure can be updated at any time. When we update the parameters(image, instance), execute the workflow for an upgrade. Note that, choose the workflow for the test environment."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(94380).Z})),(0,i.kt)("h2",{id:"deploying-prod-environment"},"Deploying prod environment"),(0,i.kt)("p",null,"Let's switch to the Tab of the prod environment. It shows that it's not deployed yet. So now you can understand one basic thing for KubeVela, different environments in one application are completely dependant on each other, of each is an individual Application CR."),(0,i.kt)("p",null,"As we have two targets for the prod environment, it'll execute in sequence. If you hope to set up a manual approval before it gets into the second target, this is where workflow comes in."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(66415).Z})),(0,i.kt)("p",null,"we can see two generated workflow. Now we click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit")," in the workflow of the prod environment, drag out the ",(0,i.kt)("inlineCode",{parentName:"p"},"suspend")," into the board at the right. Set up the configuration you needed."),(0,i.kt)("p",null,"Then we need to orchestrate their sequence. First disconnect existing steps (by clicking the line + delete button), connect the suspend step in the middle. After editing, you need to click the Save button on the upper right to save."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(25062).Z})),(0,i.kt)("p",null,"Back to the page of prod environment, click Deploy."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(68360).Z})),(0,i.kt)("p",null,"Monitoring the status on the upper right. When the first target finished deploying, a window pops up for you to give out a command."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"suspend")," has three operations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rollback: the revision reverts to the latest one in history, even with the first Target."),(0,i.kt)("li",{parentName:"ul"},"Terminate: stop the deployment process but it will not change the first Target that already deployed."),(0,i.kt)("li",{parentName:"ul"},"Continue: enter the execution of the next step.")),(0,i.kt)("p",null,"If continued, the deployment goes on. In the list of instances, you can check out all the details."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(95277).Z})),(0,i.kt)("p",null,"Congrats! Now you've learned how to deploy Kubernetes objects."),(0,i.kt)("h2",{id:"next-step"},"Next step"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./helm"},"Deploy Helm Chart"))))}p.isMDXComponent=!0},73798:function(e,t,n){"use strict";t.Z=n.p+"assets/images/app-dashboard-1ae37672b0cb8e31c268632386177585.jpg"},66415:function(e,t,n){"use strict";t.Z=n.p+"assets/images/app-workflow-83ca875d8c9d2e999d3602a15b1e745c.jpg"},2896:function(e,t,n){"use strict";t.Z=n.p+"assets/images/config-k8s-app-4f70a4523395d14f7a63238e37db8ca7.jpg"},2279:function(e,t,n){"use strict";t.Z=n.p+"assets/images/create-k8s-app-0d60b6112e197fb5ce618b2745503e82.jpg"},95277:function(e,t,n){"use strict";t.Z=n.p+"assets/images/multiple-target-pods-78341133751097ef14e41eab85257745.jpg"},84677:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pod-list-5f3ab65c80c9c662869ab0774e3763f7.jpg"},94380:function(e,t,n){"use strict";t.Z=n.p+"assets/images/select-workflow-e7c88b798b83072f15fb7170eed42075.jpg"},25062:function(e,t,n){"use strict";t.Z=n.p+"assets/images/workflow-edit-d7e36aca89b22c7d1735d7035b39eaa4.jpg"},68360:function(e,t,n){"use strict";t.Z=n.p+"assets/images/workflow-suspend-c5d95aade908022475093f07b760c74a.jpg"}}]);