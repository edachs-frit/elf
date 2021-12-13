"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,h=u["".concat(c,".").concat(f)]||u[f]||p[f]||i;return n?o.createElement(h,a(a({ref:t},d),{},{components:n})):o.createElement(h,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3688:function(e,t,n){n.d(t,{S:function(){return E}});var o=n(7294);function r(e){return e&&e.origin?e.origin:"https://stackblitz.com"}function i(){return Math.random().toString(36).substring(7)}function a(e){var t="";return e?(e.forceEmbedLayout&&(t+="embed=1"),e.clickToLoad&&(t+=(t.length?"&":"")+"ctl=1"),e.openFile&&(t+=(t.length?"&":"")+"file="+e.openFile),!e.view||"preview"!==e.view&&"editor"!==e.view||(t+=(t.length?"&":"")+"view="+e.view),e.theme&&(t+=(t.length?"&":"")+"theme="+e.theme),e.hideExplorer&&(t+=(t.length?"&":"")+"hideExplorer=1"),e.hideNavigation&&(t+=(t.length?"&":"")+"hideNavigation=1;"),e.hideDevTools&&(t+=(t.length?"&":"")+"hidedevtools=1"),e.initialPath&&(t+=(t.length?"&":"")+"initialpath="+encodeURIComponent(e.initialPath)),"number"==typeof e.devToolsHeight&&e.devToolsHeight>0&&e.devToolsHeight<100&&(t+=(t.length?"&":"")+"devtoolsheight="+e.devToolsHeight),t.length?"?"+t:t):t}function s(e,t,n){if(null===e.parentNode)throw new Error("Invalid Element");t.id=e.id,d(t,n),e.parentNode.replaceChild(t,e)}function c(e){if("string"==typeof e){var t=document.getElementById(e);if(null!==t)return t}else if(e instanceof HTMLElement)return e;throw new Error("Invalid Element")}function l(e){return e&&!1===e.newWindow?"_self":"_blank"}function d(e,t){t&&(t.hasOwnProperty("height")&&(e.height=""+t.height),t.hasOwnProperty("width")&&(e.width=""+t.width)),e.height||(e.height="300"),e.width||e.setAttribute("style","width:100%;")}var p=function(e){var t=this;this.pending={},this.port=e,this.port.onmessage=function(e){if(e.data.payload.__reqid){var n=e.data.payload.__reqid,o=e.data.payload.__success;if(t.pending[n]){if(delete e.data.payload.__reqid,delete e.data.payload.__success,o){var r=0===Object.keys(e.data.payload).length&&e.data.payload.constructor===Object?null:e.data.payload;t.pending[n].resolve(r)}else{var i=e.data.payload.error?e.data.type+": "+e.data.payload.error:e.data.type;t.pending[n].reject(i)}delete t.pending[n]}}}};p.prototype.request=function(e){var t=this,n=i();return new Promise((function(o,r){t.pending[n]={resolve:o,reject:r},e.payload.__reqid=n,t.port.postMessage(e)}))};var u=function(e,t){var n=this;this.rdc=new p(e),this.preview={},Object.defineProperty(this.preview,"origin",{value:t.previewOrigin,writable:!1}),this.editor={openFile:function(e){return n.rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}})}}};u.prototype.applyFsDiff=function(e){return this.rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})},u.prototype.getFsSnapshot=function(){return this.rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},u.prototype.getDependencies=function(){return this.rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})};var f=[],h=function(e){var t=this;this.id=i(),this.element=e,this.pending=new Promise((function(e,n){var o=function(n){n.data.action&&"SDK_INIT_SUCCESS"===n.data.action&&n.data.id===t.id&&(t.vm=new u(n.ports[0],n.data.payload),e(t.vm),i())},r=function(){t.element.contentWindow&&t.element.contentWindow.postMessage({action:"SDK_INIT",id:t.id},"*")};function i(){window.clearInterval(s),window.removeEventListener("message",o)}window.addEventListener("message",o),r();var a=0,s=window.setInterval((function(){if(t.vm)i();else{if(a>=20)return i(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),void f.forEach((function(e,n){e.id===t.id&&f.splice(n,1)}));a++,r()}}),500)})),f.push(this)},m=["typescript","create-react-app","angular-cli","javascript","polymer","vue"];function y(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function g(e){-1===m.indexOf(e.template)&&console.warn("Unsupported project template, must be one of: "+m.join(", "));var t=document.createElement("form");return t.method="POST",t.setAttribute("style","display:none;"),t.appendChild(y("project[title]",e.title)),t.appendChild(y("project[description]",e.description)),t.appendChild(y("project[template]",e.template)),e.tags&&e.tags.forEach((function(e){t.appendChild(y("project[tags][]",e))})),e.dependencies&&t.appendChild(y("project[dependencies]",JSON.stringify(e.dependencies))),e.settings&&t.appendChild(y("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(n){t.appendChild(y("project[files]["+n+"]",e.files[n]))})),t}function v(e,t){var n=g(e);return n.action=r(t)+"/run"+a(t),n.id="sb","<html><head><title></title></head><body>"+n.outerHTML+"<script>document.getElementById('sb').submit();<\/script></body></html>"}function w(e,t){var n=g(e);n.action=r(t)+"/run"+a(t),n.target=l(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}var b={connect:function(e){if(!e||!e.contentWindow)return Promise.reject("Provided element is not an iframe.");var t=function(e){var t=e instanceof Element?"element":"id";return f.find((function(n){return n[t]===e}))||null}(e);return t?t.pending:new h(e).pending},openGithubProject:function(e,t){window.open(r(t)+"/github/"+e+a(t),l(t))},openProject:function(e,t){w(e,t)},openProjectId:function(e,t){window.open(r(t)+"/edit/"+e+a(t),l(t))},embedGithubProject:function(e,t,n){var o=c(e),i=document.createElement("iframe");return i.src=r(n)+"/github/"+t+a(n),s(o,i,n),b.connect(i)},embedProject:function(e,t,n){var o=c(e),r=v(t,n),i=document.createElement("iframe");return s(o,i,n),i.contentDocument&&i.contentDocument.write(r),b.connect(i)},embedProjectId:function(e,t,n){var o=c(e),i=document.createElement("iframe");return i.src=r(n)+"/edit/"+t+a(n),s(o,i,n),b.connect(i)}},k=b,S=n(5350),j={core:{"@ngneat/elf":"latest"},entities:{"@ngneat/elf-entities":"latest"},requests:{"@ngneat/elf-requests":"latest"},pagination:{"@ngneat/elf-pagination":"latest"},devtools:{"@ngneat/elf-devtools":"latest"},persist:{"@ngneat/elf-persist-state":"latest"},history:{"@ngneat/elf-state-history":"latest"},rxjs:{rxjs:"latest"},immer:{immer:"latest"}};function E(e){var t=e.src,n=e.packages,r=void 0===n?[]:n,i=(0,o.useRef)(),a=["core","rxjs"].concat(r),s=(0,S.Z)().isDarkTheme;return(0,o.useEffect)((function(){var e=a.reduce((function(e,t){return Object.assign(e,j[t]),e}),{});k.embedProject(i.current,{description:"this is descrption",title:"Elf Core",files:{"index.html":"","index.ts":t},template:"typescript",dependencies:e,settings:{compile:{clearConsole:!0}}},{hideDevTools:!1,devToolsHeight:99,theme:s?"dark":"light",height:"500px"})}),[]),o.createElement("section",{style:{height:"500px"}},o.createElement("div",{ref:i}))}},2924:function(e,t,n){var o=n(7294).createContext(void 0);t.Z=o},5350:function(e,t,n){var o=n(7294),r=n(2924);t.Z=function(){var e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},6882:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var o=n(3117),r=n(102),i=(n(7294),n(3905)),a=n(3688),s=["components"],c={},l="State History",d={unversionedId:"features/history",id:"features/history",isDocsHomePage:!1,title:"State History",description:"The stateHistory function provides a convenient way for undo and redo functionality, saving you the trouble of maintaining a history in the app yourself.",source:"@site/docs/features/history.mdx",sourceDirName:"features",slug:"/features/history",permalink:"/elf/docs/features/history",editUrl:"https://github.com/ngneat/elf/docusaurus/edit/main/website/docs/features/history.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Persist State",permalink:"/elf/docs/features/persist-state"},next:{title:"DevTools",permalink:"/elf/docs/dev-tools"}},p=[],u={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"state-history"},"State History"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"stateHistory")," function provides a convenient way for ",(0,i.kt)("inlineCode",{parentName:"p"},"undo")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"redo")," functionality, saving you the trouble of maintaining a history in the app yourself."),(0,i.kt)("p",null,"First, you need to install the package by using the CLI command ",(0,i.kt)("inlineCode",{parentName:"p"},"elf-cli install")," and selecting the stat-history\npackage, or via npm:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @ngneat/elf-state-history\n")),(0,i.kt)("p",null,"Then, call the ",(0,i.kt)("inlineCode",{parentName:"p"},"stateHistory")," method when you want to start monitoring."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Store, createState } from '@ngneat/elf';\nimport { stateHistory } from '@ngneat/elf-state-history';\n\nconst { state, config } = createState(withEntities<Todo>());\n\nconst todosStore = new Store({ state, name, config });\n\nexport const todosStateHistory = stateHistory(todosStore);\n")),(0,i.kt)("p",null,"This allows you to use the following methods and queries to jump to points in the store's history timeline:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undo"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"redo"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"jumpToPast"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"jumpToFuture"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"hasPast"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"hasFuture"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"hasPast$"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"hasFuture$")),(0,i.kt)("p",null,"You can also call the ",(0,i.kt)("inlineCode",{parentName:"p"},"pause")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"resume")," methods to toggle the monitoring of the state changes."),(0,i.kt)("p",null,"As the second parameter you can pass a ",(0,i.kt)("inlineCode",{parentName:"p"},"StateHistoryOptions")," object, which can be used to define the store's maximum age and state comparator function."),(0,i.kt)(a.S,{src:"import { Store, createState, withProps } from '@ngneat/elf';\nimport { stateHistory } from '@ngneat/elf-state-history';\n\nconst { state, config } = createState(\n  withProps<{ user: string }>({\n    user: '',\n  })\n);\n\nconst todosStore = new Store({ state, name: 'auth', config });\n\nexport const todosStateHistory = stateHistory(todosStore);\n\ntodosStore.subscribe(console.log);\n\ntodosStore.update((state) => ({\n  ...state,\n  user: 'Elf',\n}));\n\ntodosStateHistory.undo();\n",packages:["history"],mdxType:"LiveDemo"}))}f.isMDXComponent=!0}}]);