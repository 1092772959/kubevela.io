(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[12464],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42679:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return u}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),l={title:"Provision and Binding Cloud Resources"},i={unversionedId:"end-user/components/cloud-services/provider-and-consume-cloud-services",id:"version-v1.2/end-user/components/cloud-services/provider-and-consume-cloud-services",isDocsHomePage:!1,title:"Provision and Binding Cloud Resources",description:"Cloud-oriented development is now becoming the norm, there is an urgent need to integrate cloud resources from different",source:"@site/versioned_docs/version-v1.2/end-user/components/cloud-services/provider-and-consume-cloud-services.md",sourceDirName:"end-user/components/cloud-services",slug:"/end-user/components/cloud-services/provider-and-consume-cloud-services",permalink:"/docs/end-user/components/cloud-services/provider-and-consume-cloud-services",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/components/cloud-services/provider-and-consume-cloud-services.md",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642176699,formattedLastUpdatedAt:"1/14/2022",frontMatter:{title:"Provision and Binding Cloud Resources"},sidebar:"version-v1.2/docs",previous:{title:"Gateway for Public Access",permalink:"/docs/end-user/traits/ingress"},next:{title:"Rollout",permalink:"/docs/end-user/traits/rollout"}},s=[{value:"Supported Cloud Resource list",id:"supported-cloud-resource-list",children:[]},{value:"Terraform",id:"terraform",children:[{value:"Provision cloud resources",id:"provision-cloud-resources",children:[]},{value:"Bind cloud resources",id:"bind-cloud-resources",children:[]}]},{value:"Next",id:"next",children:[]}],c={toc:s};function u(e){var t=e.components,l=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Cloud-oriented development is now becoming the norm, there is an urgent need to integrate cloud resources from different\nsources and types. Whether it is the most basic object storage, cloud database, or load balancing, it is all faced with\nthe challenges of hybrid cloud, multi-cloud and other complex environments. KubeVela is perfect to satisfy the needs."),(0,o.kt)("p",null,"KubeVela efficiently and securely integrates different types of cloud resources through resource binding capabilities in\ncloud resource Components and Traits. At present, you can directly use the default components of those cloud resources below.\nAt the same time, more new cloud resources will gradually become the default option under the support of the community in the future.\nYou can use cloud resources of various manufacturers in a standardized and unified way."),(0,o.kt)("p",null,"This tutorial will talk about how to provision and consume Cloud Resources by Terraform."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f This section requires your platform engineers have already enabled ",(0,o.kt)("a",{parentName:"p",href:"../../../install#4-optional-enable-addons"},"add-on 'terraform/provider-alicloud'"),".")),(0,o.kt)("h2",{id:"supported-cloud-resource-list"},"Supported Cloud Resource list"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Orchestration Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Cloud Provider"),(0,o.kt)("th",{parentName:"tr",align:null},"Cloud Resource"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Terraform"),(0,o.kt)("td",{parentName:"tr",align:null},"Alibaba Cloud"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"./terraform/alibaba-ack"},"ACK")),(0,o.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Alibaba Cloud ACK cluster")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"./terraform/alibaba-eip"},"EIP")),(0,o.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Alibaba Cloud EIP")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"./terraform/alibaba-oss"},"OSS")),(0,o.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Alibaba Cloud OSS")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"./terraform/alibaba-rds"},"RDS")),(0,o.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Alibaba Cloud RDS")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"./terraform/alibaba-redis"},"Redis")),(0,o.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Alibaba Cloud Redis")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"./terraform/alibaba-vpc"},"VPC")),(0,o.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Alibaba Cloud VPC")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Azure"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"./terraform/azure-database-mariadb"},"Mariadb")),(0,o.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Azure Database Mariadb")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Azure"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"./terraform/azure-storage-account"},"Storage Account")),(0,o.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Azure Storage Account")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"AWS"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"./terraform/aws-s3"},"S3")),(0,o.kt)("td",{parentName:"tr",align:null},"Terraform configuration for AWS S3 bucket")))),(0,o.kt)("h2",{id:"terraform"},"Terraform"),(0,o.kt)("p",null,"All supported Terraform cloud resources can be seen in the list above. You can also filter them by command by ",(0,o.kt)("inlineCode",{parentName:"p"},"vela components --label type=terraform"),"."),(0,o.kt)("h3",{id:"provision-cloud-resources"},"Provision cloud resources"),(0,o.kt)("p",null,"Use the following Application to provision an OSS bucket:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: provision-cloud-resource-sample\nspec:\n  components:\n    - name: sample-oss\n      type: alibaba-oss\n      properties:\n        bucket: vela-website-0911\n        acl: private\n        writeConnectionSecretToRef:\n          name: oss-conn\n")),(0,o.kt)("p",null,"The above ",(0,o.kt)("inlineCode",{parentName:"p"},"alibaba-oss")," component will create an OSS bucket named ",(0,o.kt)("inlineCode",{parentName:"p"},"vela-website-0911"),", with private acl, with connection information stored in a secreted named ",(0,o.kt)("inlineCode",{parentName:"p"},"oss-conn"),".\ndescription, whether it's compulsory, and default value."),(0,o.kt)("p",null,"Apply the above application, then check the status:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela ls\nAPP                             COMPONENT   TYPE        TRAITS  PHASE   HEALTHY STATUS                                          CREATED-TIME\nprovision-cloud-resource-sample sample-oss  alibaba-oss         running healthy Cloud resources are deployed and ready to use   2021-09-11 12:55:57 +0800 CST\n")),(0,o.kt)("p",null,"After the phase becomes ",(0,o.kt)("inlineCode",{parentName:"p"},"running")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"healthy"),", you can then check the OSS bucket in Alibaba Cloud console or by ",(0,o.kt)("a",{parentName:"p",href:"https://partners-intl.aliyun.com/help/doc-detail/50452.htm"},"ossutil"),"\ncommand."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ossutil ls oss://\nCreationTime                                 Region    StorageClass    BucketName\n2021-09-11 12:56:17 +0800 CST        oss-cn-beijing        Standard    oss://vela-website-0911\n")),(0,o.kt)("h3",{id:"bind-cloud-resources"},"Bind cloud resources"),(0,o.kt)("p",null,"Let's deploy\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/tree/master/docs/examples/terraform/cloud-resource-provision-and-consume/application.yaml"},"application"),"\nbelow to provision Alibaba Cloud OSS and RDS cloud resources, and consume them by the web component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: webapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: zzxwill/flask-web-application:v0.3.1-crossplane\n        port: 80\n      traits:\n        - type: service-binding\n          properties:\n            envMappings:\n              # environments refer to db-conn secret\n              DB_PASSWORD:\n                secret: db-conn                                   # 1) If the env name is the same as the secret key, secret key can be omitted.\n              endpoint:\n                secret: db-conn\n                key: DB_HOST                                      # 2) If the env name is different from secret key, secret key has to be set.\n              username:\n                secret: db-conn\n                key: DB_USER\n              # environments refer to oss-conn secret\n              BUCKET_NAME:\n                secret: oss-conn\n\n    - name: sample-db\n      type: alibaba-rds\n      properties:\n        instance_name: sample-db\n        account_name: oamtest\n        password: U34rfwefwefffaked\n        writeConnectionSecretToRef:\n          name: db-conn\n\n    - name: sample-oss\n      type: alibaba-oss\n      properties:\n        bucket: vela-website-0911\n        acl: private\n        writeConnectionSecretToRef:\n          name: oss-conn\n")),(0,o.kt)("p",null,"The component ",(0,o.kt)("inlineCode",{parentName:"p"},"sample-db")," will generate secret ",(0,o.kt)("inlineCode",{parentName:"p"},"db-conn")," with ",(0,o.kt)("a",{parentName:"p",href:"./terraform/alibaba-rds#outputs"},"these keys"),", and the component\n",(0,o.kt)("inlineCode",{parentName:"p"},"sample-oss")," will generate secret ",(0,o.kt)("inlineCode",{parentName:"p"},"oss-conn"),". These secrets are binded to the Envs of component ",(0,o.kt)("inlineCode",{parentName:"p"},"express-server")," by trait\n",(0,o.kt)("a",{parentName:"p",href:"../../traits/service-binding"},"Service Binding"),". Then the component can consume instances of OSS and RDS."),(0,o.kt)("p",null,"Deploy and verify the application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela ls\nAPP     COMPONENT       TYPE        TRAITS          PHASE           HEALTHY     STATUS  CREATED-TIME\nwebapp  express-server  webservice  service-binding running         healthy             2021-09-08 16:50:41 +0800 CST\n\u251c\u2500      sample-db       alibaba-rds                 running         healthy             2021-09-08 16:50:41 +0800 CST\n\u2514\u2500      sample-oss      alibaba-oss                 running         healthy             2021-09-08 16:50:41 +0800 CST\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela port-forward webapp\nForwarding from 127.0.0.1:8080 -> 80\nForwarding from [::1]:8080 -> 80\n\nForward successfully! Opening browser ...\n")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(12506).Z})),(0,o.kt)("h2",{id:"next"},"Next"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../component-observability"},"Component Observability")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../workflow/component-dependency-parameter"},"Data Pass Between Components ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../../case-studies/multi-cluster"},"Multi-Cluster and Environment"))))}u.isMDXComponent=!0},12506:function(e,t,n){"use strict";t.Z=n.p+"assets/images/crossplane-visit-application-v3-b3536448afa1f842f48ee2acb03920de.jpg"}}]);