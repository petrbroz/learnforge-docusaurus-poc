(self.webpackChunklearnforge_docusaurus_poc=self.webpackChunklearnforge_docusaurus_poc||[]).push([[198],{2924:function(e,t,n){"use strict";var a=n(7294).createContext(void 0);t.Z=a},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},5350:function(e,t,n){"use strict";var a=n(7294),o=n(2924);t.Z=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},9850:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return y},default:function(){return w},frontMatter:function(){return g},metadata:function(){return x},toc:function(){return T}});var a=n(2122),o=n(9756),r=n(7294),u=n(3905),l=n(1756),s="function sayHello(name) {\n    console.log('Hello', name);\n}\n",i=n(9443);var c=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},d=n(6010),m="tabItem_1uMI",p="tabItemActive_2DSg";var v=37,k=39;var f=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,o=e.values,u=e.groupId,l=e.className,s=c(),i=s.tabGroupChoices,f=s.setTabGroupChoices,h=(0,r.useState)(a),b=h[0],g=h[1],y=r.Children.toArray(e.children),x=[];if(null!=u){var T=i[u];null!=T&&T!==b&&o.some((function(e){return e.value===T}))&&g(T)}var C=function(e){var t=e.currentTarget,n=x.indexOf(t),a=o[n].value;g(a),null!=u&&(f(u,a),setTimeout((function(){var e,n,a,o,r,u,l,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,o=e.bottom,r=e.right,u=window,l=u.innerHeight,s=u.innerWidth,n>=0&&r<=s&&o<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case k:var a=x.indexOf(e.target)+1;n=x[a]||x[0];break;case v:var o=x.indexOf(e.target)-1;n=x[o]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":n},l)},o.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,d.Z)("tabs__item",m,{"tabs__item--active":b===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:w,onFocus:C,onClick:C},n)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))};var h=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},b=["components"],g={},y=void 0,x={unversionedId:"hello",id:"hello",isDocsHomePage:!1,title:"hello",description:"Toto je m\u016fj prvn\xed Docusaurus dokument!",source:"@site/i18n/cz/docusaurus-plugin-content-docs/current/hello.mdx",sourceDirName:".",slug:"/hello",permalink:"/learnforge-docusaurus-poc/cz/docs/hello",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/hello.mdx",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"P\u0159elo\u017ete va\u0161i str\xe1nku",permalink:"/learnforge-docusaurus-poc/cz/docs/tutorial-extras/translate-your-site"}},T=[{value:"Importovan\xe9 uk\xe1zky k\xf3du",id:"importovan\xe9-uk\xe1zky-k\xf3du",children:[]},{value:"Z\xe1lo\u017eky",id:"z\xe1lo\u017eky",children:[]}],C={toc:T};function w(e){var t=e.components,n=(0,o.Z)(e,b);return(0,u.kt)("wrapper",(0,a.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"ahoj"},"Ahoj"),(0,u.kt)("p",null,"Toto je m\u016fj ",(0,u.kt)("strong",{parentName:"p"},"prvn\xed Docusaurus dokument"),"!"),(0,u.kt)("p",null,"Zde je p\xe1r uk\xe1zek toho, co Docusaurus dok\xe1\u017ee s form\xe1tem MD(X)..."),(0,u.kt)("h2",{id:"importovan\xe9-uk\xe1zky-k\xf3du"},"Importovan\xe9 uk\xe1zky k\xf3du"),(0,u.kt)(l.Z,{className:"language-jsx",title:"app.js",mdxType:"CodeBlock"},s),(0,u.kt)("h2",{id:"z\xe1lo\u017eky"},"Z\xe1lo\u017eky"),(0,u.kt)(f,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},(0,u.kt)(h,{value:"apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e (and standard Markdown features **still** _work_?)"),(0,u.kt)(h,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,u.kt)(h,{value:"banana",mdxType:"TabItem"},(0,u.kt)(l.Z,{className:"language-jsx",title:"app.js",mdxType:"CodeBlock"},s))))}w.isMDXComponent=!0}}]);