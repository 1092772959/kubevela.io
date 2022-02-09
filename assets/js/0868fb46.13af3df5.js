(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[62413],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return p}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},A=Object.keys(e);for(a=0;a<A.length;a++)r=A[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(a=0;a<A.length;a++)r=A[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,A=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(r),p=n,m=c["".concat(i,".").concat(p)]||c[p]||s[p]||A;return r?a.createElement(m,o(o({ref:t},d),{},{components:r})):a.createElement(m,o({ref:t},d))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var A=r.length,o=new Array(A);o[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<A;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},18280:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return i},default:function(){return d}});var a=r(22122),n=r(19756),A=(r(67294),r(3905)),o={title:"Deploy Cloud Service",description:"This section introduces the delivery of services provided by cloud vendors through KubeVela and orchestrating your services in the Kubernetes cluster."},l={unversionedId:"tutorials/consume-cloud-services",id:"version-v1.2/tutorials/consume-cloud-services",isDocsHomePage:!1,title:"Deploy Cloud Service",description:"This section introduces the delivery of services provided by cloud vendors through KubeVela and orchestrating your services in the Kubernetes cluster.",source:"@site/versioned_docs/version-v1.2/tutorials/consume-cloud-services.md",sourceDirName:"tutorials",slug:"/tutorials/consume-cloud-services",permalink:"/docs/tutorials/consume-cloud-services",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/tutorials/consume-cloud-services.md",version:"v1.2",lastUpdatedBy:"Zheng Xi Zhou",lastUpdatedAt:1644395623,formattedLastUpdatedAt:"2/9/2022",frontMatter:{title:"Deploy Cloud Service",description:"This section introduces the delivery of services provided by cloud vendors through KubeVela and orchestrating your services in the Kubernetes cluster."},sidebar:"version-v1.2/docs",previous:{title:"Deploy Helm Chart",permalink:"/docs/tutorials/helm"},next:{title:"Deploy Kubernetes Objects",permalink:"/docs/tutorials/k8s-object"}},i=[{value:"Before starting",id:"before-starting",children:[]},{value:"Enabling cloud vendor Addons",id:"enabling-cloud-vendor-addons",children:[]},{value:"Creating your cloud service",id:"creating-your-cloud-service",children:[]},{value:"Viewing cloud resource creation status",id:"viewing-cloud-resource-creation-status",children:[]},{value:"FAQ",id:"faq",children:[]}],u={toc:i};function d(e){var t=e.components,o=(0,n.Z)(e,["components"]);return(0,A.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,A.kt)("p",null,"Integrating cloud service is the most frequent need in our daily development, varying from the Object storage, Cloud\ndatabase to LoadBalancer, Cache, or search engine. Faster to load them save more time, meanwhile, to orchestrate\ndifferent resources from multi-cloud is quite a pain point."),(0,A.kt)("p",null,"In this section, we introduce an example to show you how to deploy cloud services."),(0,A.kt)("h2",{id:"before-starting"},"Before starting"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"Has a cloud vendor account with proper access to your target cloud resources")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"Ensure your account has a sufficient balance")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"Connect to a Kubernetes cluster on this cloud vendor for hosting your cloud services"))),(0,A.kt)("h2",{id:"enabling-cloud-vendor-addons"},"Enabling cloud vendor Addons"),(0,A.kt)("p",null,"First, visit ",(0,A.kt)("a",{parentName:"p",href:"../install#3-install-velaux"},"VelaUX (KubeVela Dashboard)"),", switch to the tab ",(0,A.kt)("inlineCode",{parentName:"p"},"Addon"),", and click up addon\n",(0,A.kt)("inlineCode",{parentName:"p"},"terraform-xxx"),". ",(0,A.kt)("inlineCode",{parentName:"p"},"xxx")," stands for the cloud provider name. We support the following Addons:"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"provider-alibaba"),(0,A.kt)("li",{parentName:"ul"},"provider-aws"),(0,A.kt)("li",{parentName:"ul"},"provider-azure"),(0,A.kt)("li",{parentName:"ul"},"provider-tencent")),(0,A.kt)("p",null,"We can provision cloud resources in Alibaba Cloud, AWS, Azure and Tencent Cloud respectively."),(0,A.kt)("p",null,"Follow the instructions on all the properties of the addon for each cloud provider to set the addon and enable it."),(0,A.kt)("p",null,"For example, for Alibaba Cloud, you need to set the following properties:"),(0,A.kt)("blockquote",null,(0,A.kt)("p",{parentName:"blockquote"},"Notice: KubeVela encrypts all the keys, hence no need to worry about its safety.")),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"addon-alibaba",src:r(20509).Z})),(0,A.kt)("p",null,"Then fill in your ALICLOUD_ACCESS_KEY, ALICLOUD_REGION, and ALICLOUD_SECRET_KEY to enable it\u3002"),(0,A.kt)("p",null,"The creating process of cloud services pulls configuration from GitHub. If your control plane\ncluster that runs KubeVela is very hard to connect to GitHub, please open up the ",(0,A.kt)("inlineCode",{parentName:"p"},"GithubBlocked")," option in ",(0,A.kt)("inlineCode",{parentName:"p"},"terraform"),"\naddon."),(0,A.kt)("p",null,"KubeVela supports the following types of resources and more later on:"),(0,A.kt)("table",null,(0,A.kt)("thead",{parentName:"table"},(0,A.kt)("tr",{parentName:"thead"},(0,A.kt)("th",{parentName:"tr",align:null},"Orchestration Type"),(0,A.kt)("th",{parentName:"tr",align:null},"Cloud Provider"),(0,A.kt)("th",{parentName:"tr",align:null},"Cloud Resource"),(0,A.kt)("th",{parentName:"tr",align:null},"Description"))),(0,A.kt)("tbody",{parentName:"table"},(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null},"Terraform"),(0,A.kt)("td",{parentName:"tr",align:null},"Alibaba Cloud"),(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("a",{parentName:"td",href:"../end-user/components/cloud-services/terraform/alibaba-ack"},"ACK")),(0,A.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Alibaba Cloud ACK cluster")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("a",{parentName:"td",href:"../end-user/components/cloud-services/terraform/alibaba-amqp"},"AMQP")),(0,A.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Alibaba Cloud AMQP (RabbitMQ)")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("a",{parentName:"td",href:"../end-user/components/cloud-services/terraform/alibaba-ask"},"ASK")),(0,A.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Alibaba Cloud Serverless Kubernetes (ASK)")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("a",{parentName:"td",href:"../end-user/components/cloud-services/terraform/alibaba-eip"},"EIP")),(0,A.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Alibaba Cloud EIP")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("a",{parentName:"td",href:"../end-user/components/cloud-services/terraform/alibaba-mse"},"MSE")),(0,A.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Alibaba Cloud MSE")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("a",{parentName:"td",href:"../end-user/components/cloud-services/terraform/alibaba-oss"},"OSS")),(0,A.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Alibaba Cloud OSS")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("a",{parentName:"td",href:"../end-user/components/cloud-services/terraform/alibaba-rds"},"RDS")),(0,A.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Alibaba Cloud RDS")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("a",{parentName:"td",href:"../end-user/components/cloud-services/terraform/alibaba-redis"},"Redis")),(0,A.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Alibaba Cloud Redis")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("a",{parentName:"td",href:"../end-user/components/cloud-services/terraform/alibaba-rocketmq"},"RocketMQ")),(0,A.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Alibaba Cloud RocketMQ")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("a",{parentName:"td",href:"../end-user/components/cloud-services/terraform/alibaba-sls-project"},"SLS Project")),(0,A.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Alibaba Cloud SLS Project")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("a",{parentName:"td",href:"../end-user/components/cloud-services/terraform/alibaba-sls-store"},"SLS Store")),(0,A.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Alibaba Cloud SLS Store")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("a",{parentName:"td",href:"../end-user/components/cloud-services/terraform/alibaba-vpc"},"VPC")),(0,A.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Alibaba Cloud VPC")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("a",{parentName:"td",href:"../end-user/components/cloud-services/terraform/alibaba-vswitch"},"VSwitch")),(0,A.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Alibaba Cloud VSwitch")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null},"AWS"),(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("a",{parentName:"td",href:"../end-user/components/cloud-services/terraform/aws-s3"},"S3")),(0,A.kt)("td",{parentName:"tr",align:null},"Terraform configuration for AWS S3 bucket")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("a",{parentName:"td",href:"../end-user/components/cloud-services/terraform/aws-rds"},"S3")),(0,A.kt)("td",{parentName:"tr",align:null},"Terraform configuration for AWS RDS")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("a",{parentName:"td",href:"../end-user/components/cloud-services/terraform/aws-security-group"},"S3")),(0,A.kt)("td",{parentName:"tr",align:null},"Terraform configuration for AWS Security Group")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("a",{parentName:"td",href:"../end-user/components/cloud-services/terraform/aws-subnet"},"S3")),(0,A.kt)("td",{parentName:"tr",align:null},"Terraform configuration for AWS S3 Subnet")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("a",{parentName:"td",href:"../end-user/components/cloud-services/terraform/aws-vpc"},"S3")),(0,A.kt)("td",{parentName:"tr",align:null},"Terraform configuration for AWS S3 VPC")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null},"Azure"),(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("a",{parentName:"td",href:"../end-user/components/cloud-services/terraform/azure-database-mariadb"},"Mariadb")),(0,A.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Azure Database Mariadb")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("a",{parentName:"td",href:"../end-user/components/cloud-services/terraform/azure-storage-account"},"Storage Account")),(0,A.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Azure Storage Account")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("a",{parentName:"td",href:"../end-user/components/cloud-services/terraform/azure-resource-group"},"Storage Account")),(0,A.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Azure Resource group")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("a",{parentName:"td",href:"../end-user/components/cloud-services/terraform/azure-subnet"},"Storage Account")),(0,A.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Azure Subnet")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("a",{parentName:"td",href:"../end-user/components/cloud-services/terraform/azure-virtual-network"},"Storage Account")),(0,A.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Azure Virtual network")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null},"Tencent Cloud"),(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("a",{parentName:"td",href:"../end-user/components/cloud-services/terraform/tencent-vpc"},"Mariadb")),(0,A.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Tencent Cloud VPC")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null}),(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("a",{parentName:"td",href:"../end-user/components/cloud-services/terraform/tencent-subnet"},"Mariadb")),(0,A.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Tencent Cloud Subnet")))),(0,A.kt)("h2",{id:"creating-your-cloud-service"},"Creating your cloud service"),(0,A.kt)("p",null,"First ",(0,A.kt)("a",{parentName:"p",href:"../how-to/dashboard/application/create-application"},"create an application"),". Please choose the type of your cloud service,\nwhich has a prefix of ",(0,A.kt)("inlineCode",{parentName:"p"},"aws-"),", ",(0,A.kt)("inlineCode",{parentName:"p"},"azure"),", ",(0,A.kt)("inlineCode",{parentName:"p"},"alibaba-")," or ",(0,A.kt)("inlineCode",{parentName:"p"},"tencent-"),"."),(0,A.kt)("p",null,"For different vendors, these parameters update accordingly. "),(0,A.kt)("p",null,"For example, ",(0,A.kt)("inlineCode",{parentName:"p"},"aws-s3")," has the following parameters:"),(0,A.kt)("p",null,(0,A.kt)("img",{src:r(31789).Z})),(0,A.kt)("p",null,(0,A.kt)("inlineCode",{parentName:"p"},"azure-database-mariadb")," has the following parameters:"),(0,A.kt)("p",null,(0,A.kt)("img",{src:r(80065).Z})),(0,A.kt)("p",null,(0,A.kt)("inlineCode",{parentName:"p"},"alibaba-rds")," has the following parameters:"),(0,A.kt)("p",null,(0,A.kt)("img",{src:r(64356).Z})),(0,A.kt)("p",null,"All cloud resources have some common parameters."),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"DeleteResource: Whether to delete the corresponding cloud service when the app is deleted"),(0,A.kt)("li",{parentName:"ul"},"ProviderRef: The Provider which is referenced by a cloud service"),(0,A.kt)("li",{parentName:"ul"},"Region: Region is cloud provider's region. It will override ",(0,A.kt)("inlineCode",{parentName:"li"},"providerRef"),".")),(0,A.kt)("p",null,"Set the above parameters according to your needs to complete creating the application, and then ",(0,A.kt)("a",{parentName:"p",href:"../how-to/dashboard/application/deploy-application"},"deploy the application"),"."),(0,A.kt)("h2",{id:"viewing-cloud-resource-creation-status"},"Viewing cloud resource creation status"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"Check the cloud instance list")),(0,A.kt)("p",null,"Like other apps, cloud service apps also need to switch to the corresponding environment page to view instance information.\nBy default, there are several targets in an environment, and the cloud service will generate a corresponding number of instances."),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"rds-instances",src:r(44635).Z})),(0,A.kt)("p",null,"In the instance list, the instance name, status, resource type, and location are displayed. In the beginning, the name is empty,\nbecause the cloud service instance generation takes a certain amount of time, and the name will appear when the instance is generated normally."),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"View the cloud resource in the console of the cloud provider")),(0,A.kt)("p",null,"You can visit the instance in the console of the cloud provider. For example, you can check the name or console to visit it.\n",(0,A.kt)("img",{src:r(2379).Z})),(0,A.kt)("p",null,"For example, you can check Alibaba Cloud RDS instance in ",(0,A.kt)("a",{parentName:"p",href:"https://console.aliyun.com"},"https://console.aliyun.com"),"."),(0,A.kt)("p",null,(0,A.kt)("img",{src:r(86662).Z})),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"Check details and status of the cloud instance")),(0,A.kt)("p",null,"Click the ",(0,A.kt)("inlineCode",{parentName:"p"},"Check the detail")," button to view the application details."),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"rds-status",src:r(50811).Z})),(0,A.kt)("p",null,"You will find that each instance generates a Secret resource, which generally records the service's access address and\nkey information. Secret resources will be distributed to the cluster and Namespace where the target is located while the\ncontrol cluster exists. Therefore, other applications in the same environment can directly use the resource in the\nenvironment variable to obtain the access address and key."),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"env-secret",src:r(85733).Z})),(0,A.kt)("p",null,"In the last section ",(0,A.kt)("inlineCode",{parentName:"p"},"Component Status"),", the health status and the message of the cloud service instance is displayed."),(0,A.kt)("h2",{id:"faq"},"FAQ"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"The cloud service is always ProvisioningAndChecking and has no name")),(0,A.kt)("blockquote",null,(0,A.kt)("p",{parentName:"blockquote"},"The creation of cloud services generally takes a certain amount of time. Please wait or enter the cloud vendor console to view the creation progress.")))}d.isMDXComponent=!0},20509:function(e,t,r){"use strict";t.Z=r.p+"assets/images/addon-alibaba-8a416daa30d74ec6add6fdc2641b9693.jpg"},86662:function(e,t,r){"use strict";t.Z=r.p+"assets/images/alibaba-cloud-rds-console-12ffa85cb2fdc38e72251c3ca7959dfd.png"},64356:function(e,t,r){"use strict";t.Z=r.p+"assets/images/alibaba-rds-parameters-c83b9873566298ecca4b3db6c08c22cb.png"},2379:function(e,t,r){"use strict";t.Z=r.p+"assets/images/application-console-link-cc9babc074e743d2b636d763376d82ae.png"},31789:function(e,t){"use strict";t.Z="data:image/png;base64,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or50zqd9FGAyMzNt5cqVVl5entwFAAAAaLZSBgTV3Cq7FQjylq603OnTbGzXS6z060wrWLbcKvbtSx5iM2bMsPPPP9+6detmt99+u1177bXWvn177/v3v/+d3P2/8rvf/c5atWpl06dPT25K6eDBg/brX//aLr30UsvLy0tuBgAAAJqtlAHB5xHVy3z3/9snnbvZrMv7W8ZFHW1O/9/ayA7dbPv8Bb49PiKggNCyZUu78847raamxtsbb7wR9cnmzZvt3XfftVmzZvl7TUX65JNP7PPPP7dDhw55n47T9tdee83efPNNW716tfdLCAgZGRn+furUqfbOO+/4iEK4j+XLl9vrr7/uTaMatbW1Vlpaau+9956Hg06dOtkrr7xiWVlZvn86IxAAAADAmSx1QKiutbr6wrr6YInlz59js7r0sIz/d5Ytuv5GK1iy1KoOHvrBlKEQEDR6cPjwYS/+n3/+eTvvvPPs6aef9n3Gjx9vv/zlL+3BBx/09zt27PARB01Nys/P93O98MILdsEFF3hTGOjcubMHAbn33nu9b+7cuTZx4kS78MILrUuXLrZo0SLfrv20v+5D+2n7v/71L9u7d68NGjTILrroIuvYsaN16NDBZs+e7ccAAAAAzV3KgFBjlVZd/z99i9H6d96zqV172Kq77rKp3TtY4fKlvs+Rbzg6OiCoqO/atasNHjzY+vbta23btvU1CQoCoqJegeGRRx7x99nZ2darVy9fr1BUVGTffPONF/V6v3jxYnvn3Xfs3HPPtRtvvNFHAoYOHernfOaZZ6xnz57WqWOnaD3Crl27PGhohOCLL76wBQsWWJ8+ffx+dP0NGzZY//797ZJLLrGFCxdaWVnZkc/BCAIAAACauZQBoVY1c219UCivspX/+5yt/uvfrGZfic0dMsQ2f/r5kZ20TiFWXCsgtGnTxovyp556yh599FEv4lWgjxgxwvfRtxApIDz88MP+XgFB+ygQ6BuQNNVIgeC5557z7VpMrFGBmTNn+tQjTTFSQNBIgK6laUTBnDlzfL2DAof633rrLbvssst8JGHJkiU+hUmjCN27d7edO3f6MYQDAAAAII2A4L6rnWurq622Rj9+YFZx+PCRFcwNUEBQ8R/WG4im8ahoVwDQlKPJkydbixYtPDyInvr37t3brrjiCg8IH330kZ8jXvjHKSBohKFdu3Ye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"},80065:function(e,t,r){"use strict";t.Z=r.p+"assets/images/azure-database-mariadb-parameters-9eb037f73a5cb08c913ba4138d54ead4.png"},85733:function(e,t,r){"use strict";t.Z=r.p+"assets/images/env-secret-58fdadc7740c54cd53e07c80309afb4a.jpg"},44635:function(e,t,r){"use strict";t.Z=r.p+"assets/images/rds-instances-22ec1ed5cc39b0a3b0ca0528134eb8f1.jpg"},50811:function(e,t,r){"use strict";t.Z=r.p+"assets/images/rds-status-5580d4537c3319a82905003327d23a9f.jpg"}}]);