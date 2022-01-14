(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[65888],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return u}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(n),u=r,m=f["".concat(p,".").concat(u)]||f[u]||d[u]||a;return n?i.createElement(m,o(o({ref:t},s),{},{components:n})):i.createElement(m,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},51639:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var i=n(22122),r=n(19756),a=(n(67294),n(3905)),o={title:"vela def init"},l={unversionedId:"cli/vela_def_init",id:"version-v1.2/cli/vela_def_init",isDocsHomePage:!1,title:"vela def init",description:"Init a new definition",source:"@site/versioned_docs/version-v1.2/cli/vela_def_init.md",sourceDirName:"cli",slug:"/cli/vela_def_init",permalink:"/zh/docs/cli/vela_def_init",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/cli/vela_def_init.md",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642176699,formattedLastUpdatedAt:"2022/1/14",frontMatter:{title:"vela def init"}},p=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}],c={toc:p};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Init a new definition"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Init a new definition with given arguments or interactively"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We support parsing a single YAML file (like kubernetes objects) into the cue-style template.\nHowever, we do not support variables in YAML file currently, which prevents users from directly feeding files like helm chart directly.\nWe may introduce such features in the future.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vela def init DEF_NAME [flags]\n")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# Command below initiate an empty TraitDefinition named my-ingress\n> vela def init my-ingress -t trait --desc "My ingress trait definition." > ./my-ingress.cue\n# Command below initiate a definition named my-def interactively and save it to ./my-def.cue\n> vela def init my-def -i --output ./my-def.cue\n# Command below initiate a ComponentDefinition named my-webservice with the template parsed from ./template.yaml.\n> vela def init my-webservice -i --template-yaml ./template.yaml\n# Command below initiate a typed ComponentDefinition named vswitch from Alibaba Cloud.\n> vela def init vswitch --type component --provider alibaba --desc xxx --git https://github.com/kubevela-contrib/terraform-modules.git --path alibaba/vswitch\n')),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -d, --desc string            Specify the description of the new definition.\n      --git string             Specify which git repository the configuration(HCL) is stored in. Valid when --provider/-p is set.\n  -h, --help                   help for init\n  -i, --interactive            Specify whether use interactive process to help generate definitions.\n  -o, --output string          Specify the output path of the generated definition. If empty, the definition will be printed in the console.\n      --path string            Specify which path the configuration(HCL) is stored in the Git repository. Valid when --git is set.\n  -p, --provider alibaba       Specify which provider the cloud resource definition belongs to. Only alibaba, `aws`, `azure` are supported.\n  -y, --template-yaml string   Specify the template yaml file that definition will use to build the schema. If empty, a default template for the given definition type will be used.\n  -t, --type string            Specify the type of the new definition. Valid types: scope, workflow-step, component, trait, policy, workload\n")),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"vela_def"},"vela def"),"\t - Manage Definitions")),(0,a.kt)("h4",{id:"go-back-to-cli-commands-homepage"},"Go Back to ",(0,a.kt)("a",{parentName:"h4",href:"vela"},"CLI Commands")," Homepage."),(0,a.kt)("h6",{id:"auto-generated-by-spf13cobra-on-12-jan-2022-refer-to-script-in-kubevela"},"Auto generated by spf13/cobra on 12-Jan-2022, refer to ",(0,a.kt)("a",{parentName:"h6",href:"https://github.com/oam-dev/kubevela/tree/master/hack/docgen"},"script in KubeVela"),"."))}s.isMDXComponent=!0}}]);