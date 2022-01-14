(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[39476],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=m(t),u=o,k=d["".concat(l,".").concat(u)]||d[u]||s[u]||r;return t?a.createElement(k,i(i({ref:n},c),{},{components:t})):a.createElement(k,i({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var m=2;m<r;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},66522:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var a=t(22122),o=t(19756),r=(t(67294),t(3905)),i={title:"CUE Components"},p={unversionedId:"platform-engineers/components/custom-component",id:"version-v1.2/platform-engineers/components/custom-component",isDocsHomePage:!1,title:"CUE Components",description:"In this section, it will introduce how to use CUE to declare app components via ComponentDefinition.",source:"@site/versioned_docs/version-v1.2/platform-engineers/components/custom-component.md",sourceDirName:"platform-engineers/components",slug:"/platform-engineers/components/custom-component",permalink:"/zh/docs/platform-engineers/components/custom-component",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/components/custom-component.md",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642176699,formattedLastUpdatedAt:"2022/1/14",frontMatter:{title:"CUE Components"},sidebar:"version-v1.2/docs",previous:{title:"Make Addon and Build Registry",permalink:"/zh/docs/platform-engineers/addon/intro"},next:{title:"Terraform Components",permalink:"/zh/docs/platform-engineers/components/component-terraform"}},l=[{value:"Declare <code>ComponentDefinition</code>",id:"declare-componentdefinition",children:[]},{value:"Declare an <code>Application</code>",id:"declare-an-application",children:[{value:"Under The Hood",id:"under-the-hood",children:[]}]},{value:"CUE <code>Context</code>",id:"cue-context",children:[{value:"Full available information in CUE <code>context</code>",id:"full-available-information-in-cue-context",children:[]}]},{value:"Composition",id:"composition",children:[]},{value:"How-to",id:"how-to",children:[]},{value:"What&#39;s Next",id:"whats-next",children:[]}],m={toc:l};function c(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this section, it will introduce how to use ",(0,r.kt)("a",{parentName:"p",href:"https://cuelang.org/"},"CUE")," to declare app components via ",(0,r.kt)("inlineCode",{parentName:"p"},"ComponentDefinition"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Before reading this part, please make sure you've learned the ",(0,r.kt)("a",{parentName:"p",href:"../definition-and-templates"},"Definition CRD")," in KubeVela.")),(0,r.kt)("h2",{id:"declare-componentdefinition"},"Declare ",(0,r.kt)("inlineCode",{parentName:"h2"},"ComponentDefinition")),(0,r.kt)("p",null,"First, generate ",(0,r.kt)("inlineCode",{parentName:"p"},"ComponentDefinition")," scaffolds via ",(0,r.kt)("inlineCode",{parentName:"p"},"vela def init")," with existed YAML file."),(0,r.kt)("p",null,"The YAML file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: "apps/v1"\nkind: "Deployment"\nspec:\n  selector:\n    matchLabels:\n      "app.oam.dev/component": "name"\n  template:\n    metadata:\n      labels:\n        "app.oam.dev/component": "name"\n    spec:\n      containers: \n      - name: "name"\n        image: "image"\n')),(0,r.kt)("p",null,"Generate ",(0,r.kt)("inlineCode",{parentName:"p"},"ComponentDefinition")," based on the YAML file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vela def init stateless -t component --template-yaml ./stateless.yaml -o stateless.cue\n")),(0,r.kt)("p",null,"It generates a file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ cat stateless.cue\nstateless: {\n    annotations: {}\n    attributes: workload: definition: {\n        apiVersion: "<change me> apps/v1"\n        kind:       "<change me> Deployment"\n    }\n    description: ""\n    labels: {}\n    type: "component"\n}\n\ntemplate: {\n    output: {\n        spec: {\n            selector: matchLabels: "app.oam.dev/component": "name"\n            template: {\n                metadata: labels: "app.oam.dev/component": "name"\n                spec: containers: [{\n                    name:  "name"\n                    image: "image"\n                }]\n            }\n        }\n        apiVersion: "apps/v1"\n        kind:       "Deployment"\n    }\n    outputs: {}\n    parameters: {}\n}\n')),(0,r.kt)("p",null,"In detail:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".spec.workload")," is required to indicate the workload type of this component."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".spec.schematic.cue.template")," is a CUE template, specifically:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"output")," filed defines the template for the abstraction."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"parameter")," filed defines the template parameters, i.e. the configurable properties exposed in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Application"),"abstraction (and JSON schema will be automatically generated based on them).")))),(0,r.kt)("p",null,"Add parameters in this auto-generated custom component file :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'stateless: {\n    annotations: {}\n    attributes: workload: definition: {\n        apiVersion: "<change me> apps/v1"\n        kind:       "<change me> Deployment"\n    }\n    description: ""\n    labels: {}\n    type: "component"\n}\n\ntemplate: {\n    output: {\n        spec: {\n            selector: matchLabels: "app.oam.dev/component": parameter.name\n            template: {\n                metadata: labels: "app.oam.dev/component": parameter.name\n                spec: containers: [{\n                    name:  parameter.name\n                    image: parameter.image\n                }]\n            }\n        }\n        apiVersion: "apps/v1"\n        kind:       "Deployment"\n    }\n    outputs: {}\n    parameters: {\n    name: string\n    image: string\n  }\n}\n')),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"vela def vet")," to validate the format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela def vet stateless.cue\nValidation succeed.\n")),(0,r.kt)("p",null,"Declare another component named ",(0,r.kt)("inlineCode",{parentName:"p"},"task")," which is an abstraction for run-to-completion workload."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vela def init task -t component -o task.cue\n")),(0,r.kt)("p",null,"It generates a file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ cat task.cue\ntask: {\n    annotations: {}\n    attributes: workload: definition: {\n        apiVersion: "<change me> apps/v1"\n        kind:       "<change me> Deployment"\n    }\n    description: ""\n    labels: {}\n    type: "component"\n}\n\ntemplate: {\n    output: {}\n    parameter: {}\n}\n')),(0,r.kt)("p",null,"Edit the generated component file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'task: {\n    annotations: {}\n    attributes: workload: definition: {\n        apiVersion: "batch/v1"\n        kind:       "Job"\n    }\n    description: ""\n    labels: {}\n    type: "component"\n}\n\ntemplate: {\n  output: {\n    apiVersion: "batch/v1"\n    kind:       "Job"\n    spec: {\n      parallelism: parameter.count\n      completions: parameter.count\n      template: spec: {\n        restartPolicy: parameter.restart\n        containers: [{\n          image: parameter.image\n          if parameter["cmd"] != _|_ {\n            command: parameter.cmd\n          }\n        }]\n      }\n    }\n  }\n    parameter: {\n    count:   *1 | int\n    image:   string\n    restart: *"Never" | string\n    cmd?: [...string]\n  }\n}\n')),(0,r.kt)("p",null,"Apply above ",(0,r.kt)("inlineCode",{parentName:"p"},"ComponentDefinition")," files to your Kubernetes cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela def apply stateless.cue\nComponentDefinition stateless created in namespace vela-system.\n$ vela def apply task.cue\nComponentDefinition task created in namespace vela-system.\n")),(0,r.kt)("h2",{id:"declare-an-application"},"Declare an ",(0,r.kt)("inlineCode",{parentName:"h2"},"Application")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ComponentDefinition")," can be instantiated in ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," abstraction as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: hello\n      type: stateless\n      properties:\n        image: crccheck/hello-world\n        name: mysvc\n    - name: countdown\n      type: task\n      properties:\n        image: centos:7\n        cmd:\n          - "bin/bash"\n          - "-c"\n          - "for i in 9 8 7 6 5 4 3 2 1 ; do echo $i ; done"\n')),(0,r.kt)("h3",{id:"under-the-hood"},"Under The Hood"),(0,r.kt)("details",null,(0,r.kt)("p",null,"Above application resource will generate and manage following Kubernetes resources in your target cluster based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"output")," in CUE template and user input in ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," properties."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: backend\n  ... # skip tons of metadata info\nspec:\n  template:\n    spec:\n      containers:\n        - name: mysvc\n          image: crccheck/hello-world\n    metadata:\n      labels:\n        app.oam.dev/component: mysvc\n  selector:\n    matchLabels:\n      app.oam.dev/component: mysvc\n---\napiVersion: batch/v1\nkind: Job\nmetadata:\n  name: countdown\n  ... # skip tons of metadata info\nspec:\n  parallelism: 1\n  completions: 1\n  template:\n    metadata:\n      name: countdown\n    spec:\n      containers:\n        - name: countdown\n          image: 'centos:7'\n          command:\n            - bin/bash\n            - '-c'\n            - for i in 9 8 7 6 5 4 3 2 1 ; do echo $i ; done\n      restartPolicy: Never\n"))),(0,r.kt)("h2",{id:"cue-context"},"CUE ",(0,r.kt)("inlineCode",{parentName:"h2"},"Context")),(0,r.kt)("p",null,"KubeVela allows you to reference the runtime information of your application via ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," keyword."),(0,r.kt)("p",null,"The most widely used context is application name(",(0,r.kt)("inlineCode",{parentName:"p"},"context.appName"),") component name(",(0,r.kt)("inlineCode",{parentName:"p"},"context.name"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cue"},"context: {\n  appName: string\n  name: string\n}\n")),(0,r.kt)("p",null,"For example, let's say you want to use the component name filled in by users as the container name in the workload instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cue"},"parameter: {\n    image: string\n}\noutput: {\n  ...\n    spec: {\n        containers: [{\n            name:  context.name\n            image: parameter.image\n        }]\n    }\n  ...\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," information are auto-injected before resources are applied to target cluster.")),(0,r.kt)("h3",{id:"full-available-information-in-cue-context"},"Full available information in CUE ",(0,r.kt)("inlineCode",{parentName:"h3"},"context")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Context Variable"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"context.appRevision")),(0,r.kt)("td",{parentName:"tr",align:"center"},"The revision of the application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"context.appRevisionNum")),(0,r.kt)("td",{parentName:"tr",align:"center"},"The revision number(",(0,r.kt)("inlineCode",{parentName:"td"},"int")," type) of the application, e.g., ",(0,r.kt)("inlineCode",{parentName:"td"},"context.appRevisionNum")," will be ",(0,r.kt)("inlineCode",{parentName:"td"},"1")," if ",(0,r.kt)("inlineCode",{parentName:"td"},"context.appRevision")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"app-v1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"context.appName")),(0,r.kt)("td",{parentName:"tr",align:"center"},"The name of the application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"context.name")),(0,r.kt)("td",{parentName:"tr",align:"center"},"The name of the component of the application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"context.namespace")),(0,r.kt)("td",{parentName:"tr",align:"center"},"The namespace of the application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"context.output")),(0,r.kt)("td",{parentName:"tr",align:"center"},"The rendered workload API resource of the component, this usually used in trait")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"context.outputs.<resourceName>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"The rendered trait API resource of the component, this usually used in trait")))),(0,r.kt)("h2",{id:"composition"},"Composition"),(0,r.kt)("p",null,"It's common that a component definition is composed by multiple API resources, for example, a ",(0,r.kt)("inlineCode",{parentName:"p"},"webserver")," component that is composed by a Deployment and a Service. CUE is a great solution to achieve this in simplified primitives."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Another approach to do composition in KubeVela of course is ",(0,r.kt)("a",{parentName:"p",href:"../helm/component"},"using Helm"),".")),(0,r.kt)("h2",{id:"how-to"},"How-to"),(0,r.kt)("p",null,"KubeVela requires you to define the template of workload type in ",(0,r.kt)("inlineCode",{parentName:"p"},"output")," section, and leave all the other resource templates in ",(0,r.kt)("inlineCode",{parentName:"p"},"outputs")," section with format as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cue"},"outputs: <unique-name>: \n  <full template data>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'The reason for this requirement is KubeVela needs to know it is currently rendering a workload so it could do some "magic" like patching annotations/labels or other data during it.')),(0,r.kt)("p",null,"Below is the example for ",(0,r.kt)("inlineCode",{parentName:"p"},"webserver")," definition: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'webserver: {\n    annotations: {}\n    attributes: workload: definition: {\n        apiVersion: "apps/v1"\n        kind:       "Deployment"\n    }\n    description: ""\n    labels: {}\n    type: "component"\n}\n\ntemplate: {\n  output: {\n    apiVersion: "apps/v1"\n    kind:       "Deployment"\n    spec: {\n      selector: matchLabels: {\n        "app.oam.dev/component": context.name\n      }\n      template: {\n        metadata: labels: {\n          "app.oam.dev/component": context.name\n        }\n        spec: {\n          containers: [{\n            name:  context.name\n            image: parameter.image\n\n            if parameter["cmd"] != _|_ {\n              command: parameter.cmd\n            }\n\n            if parameter["env"] != _|_ {\n              env: parameter.env\n            }\n\n            if context["config"] != _|_ {\n              env: context.config\n            }\n\n            ports: [{\n              containerPort: parameter.port\n            }]\n\n            if parameter["cpu"] != _|_ {\n              resources: {\n                limits:\n                  cpu: parameter.cpu\n                requests:\n                  cpu: parameter.cpu\n              }\n            }\n          }]\n        }\n      }\n    }\n  }\n  // an extra template\n  outputs: service: {\n    apiVersion: "v1"\n    kind:       "Service"\n    spec: {\n      selector: {\n        "app.oam.dev/component": context.name\n      }\n      ports: [\n        {\n          port:       parameter.port\n          targetPort: parameter.port\n        },\n      ]\n    }\n  }\n    parameter: {\n    image: string\n    cmd?: [...string]\n    port: *80 | int\n    env?: [...{\n      name:   string\n      value?: string\n      valueFrom?: {\n        secretKeyRef: {\n          name: string\n          key:  string\n        }\n      }\n    }]\n    cpu?: string\n  }\n}\n')),(0,r.kt)("p",null,"Apply to your Kubernetes cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela def apply webserver.cue\nComponentDefinition webserver created in namespace vela-system.\n")),(0,r.kt)("p",null,"The user could now declare an ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," with it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: webserver-demo\n  namespace: default\nspec:\n  components:\n    - name: hello-world\n      type: webserver\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n        env:\n        - name: "foo"\n          value: "bar"\n        cpu: "100m"\n')),(0,r.kt)("p",null,"It will generate and manage below API resources in target cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deployment\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"NAME             READY   UP-TO-DATE   AVAILABLE   AGE\nhello-world-v1   1/1     1            1           15s\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get svc\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"NAME                           TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE\nhello-world-trait-7bdcff98f7   ClusterIP   <your ip>       <none>        8000/TCP   32s\n")),(0,r.kt)("h2",{id:"whats-next"},"What's Next"),(0,r.kt)("p",null,"Please check the ",(0,r.kt)("a",{parentName:"p",href:"../cue/basic"},"Learning CUE")," documentation about why we support CUE as first-class templating solution and more details about using CUE efficiently."))}c.isMDXComponent=!0}}]);