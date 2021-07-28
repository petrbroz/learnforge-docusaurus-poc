"use strict";(self.webpackChunklearnforge_docusaurus_poc=self.webpackChunklearnforge_docusaurus_poc||[]).push([[89],{4428:function(e,a,t){t.r(a),t.d(a,{default:function(){return u}});var n=t(7294),r=t(2263),l=t(3575),i=t(3146),s=t(6742),c=t(4973);var m=function(e){var a=e.metadata,t=a.previousPage,r=a.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,c.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(s.Z,{className:"pagination-nav__link",to:t},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(c.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.createElement(s.Z,{className:"pagination-nav__link",to:r},n.createElement("div",{className:"pagination-nav__label"},n.createElement(c.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},o=t(5601),d=t(9306);var u=function(e){var a=e.metadata,t=e.items,s=e.sidebar,c=(0,r.Z)().siteConfig.title,u=a.blogDescription,g=a.blogTitle,h="/"===a.permalink?c:g;return n.createElement(l.Z,{title:h,description:u,wrapperClassName:d.kM.wrapper.blogPages,pageClassName:d.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"}},n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("aside",{className:"col col--3"},n.createElement(o.Z,{sidebar:s})),n.createElement("main",{className:"col col--7"},t.map((function(e){var a=e.content;return n.createElement(i.Z,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},n.createElement(a,null))})),n.createElement(m,{metadata:a})))))}},3146:function(e,a,t){t.d(a,{Z:function(){return p}});var n=t(7294),r=t(6010),l=t(3905),i=t(4973),s=t(6742),c=t(9306),m=t(3491),o=t(1217),d=t(6146),u="blogPostTitle_GeHD",g="blogPostData_291c",h="blogPostDetailsFull_3kfx";var p=function(e){var a,t,p,v=(t=(0,c.c2)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),E=e.children,b=e.frontMatter,f=e.metadata,_=e.truncated,Z=e.isBlogPostPage,N=void 0!==Z&&Z,k=f.date,T=f.formattedDate,w=f.permalink,L=f.tags,I=f.readingTime,x=f.title,M=f.editUrl,P=b.author,A=b.image,U=b.keywords,y=b.author_url||b.authorURL,C=b.author_title||b.authorTitle,R=b.author_image_url||b.authorImageURL;return n.createElement(n.Fragment,null,n.createElement(o.Z,{keywords:U,image:A}),n.createElement("article",{className:N?void 0:"margin-bottom--xl"},(p=N?"h1":"h2",n.createElement("header",null,n.createElement(p,{className:u},N?x:n.createElement(s.Z,{to:w},x)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:k},T),I&&n.createElement(n.Fragment,null," \xb7 ",v(I))),n.createElement("div",{className:"avatar margin-vert--md"},R&&n.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:y},n.createElement("img",{src:R,alt:P})),n.createElement("div",{className:"avatar__intro"},P&&n.createElement(n.Fragment,null,n.createElement("div",{className:"avatar__name"},n.createElement(s.Z,{href:y},P)),n.createElement("small",{className:"avatar__subtitle"},C)))))),n.createElement("div",{className:"markdown"},n.createElement(l.Zo,{components:m.Z},E)),(L.length>0||_)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(a={},a[h]=N,a))},L.length>0&&n.createElement("div",{className:"col"},n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),L.map((function(e){var a=e.label,t=e.permalink;return n.createElement(s.Z,{key:t,className:"margin-horiz--sm",to:t},a)}))),N&&M&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:M})),!N&&_&&n.createElement("div",{className:"col text--right"},n.createElement(s.Z,{to:f.permalink,"aria-label":"Read more about "+x},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},5601:function(e,a,t){t.d(a,{Z:function(){return g}});var n=t(7294),r=t(6010),l=t(6742),i="sidebar_2ahu",s="sidebarItemTitle_2hhb",c="sidebarItemList_2xAf",m="sidebarItem_2UVv",o="sidebarItemLink_1RT6",d="sidebarItemLinkActive_12pM",u=t(4973);function g(e){var a=e.sidebar;return 0===a.items.length?null:n.createElement("nav",{className:(0,r.Z)(i,"thin-scrollbar"),"aria-label":(0,u.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,r.Z)(s,"margin-bottom--md")},a.title),n.createElement("ul",{className:c},a.items.map((function(e){return n.createElement("li",{key:e.permalink,className:m},n.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:o,activeClassName:d},e.title))}))))}},6146:function(e,a,t){t.d(a,{Z:function(){return d}});var n=t(7294),r=t(4973),l=t(2122),i=t(9756),s=t(6010),c="iconEdit_2_ui",m=["className"],o=function(e){var a=e.className,t=(0,i.Z)(e,m);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(c,a),"aria-hidden":"true"},t),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function d(e){var a=e.editUrl;return n.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener"},n.createElement(o,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},6159:function(e,a,t){t.d(a,{N:function(){return u},Z:function(){return g}});var n=t(9756),r=t(2122),l=t(7294),i=t(6010),s=t(4973),c=t(9306),m="enhancedAnchor_2LWZ",o="h1Heading_27L5",d=["id"],u=function(e){var a=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,r.Z)({},a,{id:void 0,className:o}),a.children))},g=function(e){return"h1"===e?u:(a=e,function(e){var t,r=e.id,o=(0,n.Z)(e,d),u=(0,c.LU)().navbar.hideOnScroll;return r?l.createElement(a,o,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor",(t={},t[m]=!u,t)),id:r}),o.children,l.createElement("a",{className:"hash-link",href:"#"+r,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(a,o)});var a}},3491:function(e,a,t){var n=t(7294),r=t(6742),l=t(1756),i=t(6159),s={code:function(e){var a=e.children;return(0,n.isValidElement)(a)?a:a.includes("\n")?n.createElement(l.Z,e):n.createElement("code",e)},a:function(e){return n.createElement(r.Z,e)},pre:function(e){var a,t=e.children;return(0,n.isValidElement)(null==t||null==(a=t.props)?void 0:a.children)?null==t?void 0:t.props.children:n.createElement(l.Z,(0,n.isValidElement)(t)?null==t?void 0:t.props:{children:t})},h1:(0,i.Z)("h1"),h2:(0,i.Z)("h2"),h3:(0,i.Z)("h3"),h4:(0,i.Z)("h4"),h5:(0,i.Z)("h5"),h6:(0,i.Z)("h6")};a.Z=s}}]);