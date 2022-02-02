"use strict";(self.webpackChunk_webdevstudios_docs=self.webpackChunk_webdevstudios_docs||[]).push([[833],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,u(u({ref:t},l),{},{components:n})):r.createElement(f,u({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,u[1]=s;for(var c=2;c<o;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3070:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),u=["components"],s={title:"Menus"},i=void 0,c={unversionedId:"frontend/menus",id:"frontend/menus",title:"Menus",description:"WordPress Navigation Menus are accessed in NextJS using React Context.",source:"@site/docs/frontend/menus.md",sourceDirName:"frontend",slug:"/frontend/menus",permalink:"/nextjs-wordpress-starter/docs/frontend/menus",editUrl:"https://github.com/WebDevStudios/nextjs-wordpress-starter/blob/canary/docs/frontend/menus.md",tags:[],version:"current",lastUpdatedBy:"Greg Rickaby",lastUpdatedAt:1643763266,formattedLastUpdatedAt:"2/2/2022",frontMatter:{title:"Menus"},sidebar:"tutorialSidebar",previous:{title:"ENV Variables",permalink:"/nextjs-wordpress-starter/docs/frontend/env-variables"},next:{title:"Previews",permalink:"/nextjs-wordpress-starter/docs/frontend/previews"}},l=[{value:"MenuContext",id:"menucontext",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Data Structure",id:"data-structure",children:[],level:2}],p={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"WordPress ",(0,o.kt)("a",{parentName:"p",href:"/docs/backend/menus"},"Navigation Menus")," are accessed in NextJS using React ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"Context"),"."),(0,o.kt)("h2",{id:"menucontext"},"MenuContext"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"MenuContext")," is a React ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"Context")," object that stores menu data without having to pass it down through the component tree as props."),(0,o.kt)("p",null,"Storing menu data as context allows menu data to be available in all components by simply importing the ",(0,o.kt)("inlineCode",{parentName:"p"},"MenuContext")," object directly in the component."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JS"},"import {MenuContext} from '@/components/common/MenuProvider'\nimport {useContext} from 'react'\n\n/**\n * Render the Header component.\n *\n * @author WebDevStudios\n * @return {Element} The Header component.\n */\nexport default function Header() {\n  const {menus} = useContext(MenuContext)\n  return (\n    <Navigation menu={menus?.primary_menu} />\n  )\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"MenuContext")," returns all registered WordPress menus, so you'll to need to dig down into the object to access a specific menu."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": Menu slugs containing dashes (",(0,o.kt)("inlineCode",{parentName:"p"},"-"),") will be converted to underscores (",(0,o.kt)("inlineCode",{parentName:"p"},"_"),") in the application.")),(0,o.kt)("h2",{id:"data-structure"},"Data Structure"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"MenuContext")," object will contain data on all registered menus as nested objects."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "primary_menu":[],\n  "footer_menu":[]\n}\n')),(0,o.kt)("p",null,"Each menu will contain an array of menu items with a nested ",(0,o.kt)("inlineCode",{parentName:"p"},"children")," array (if required)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "primary_menu":[\n {\n   "label": "Homepage",\n   "path": "/",\n },\n {\n   "label": "About",\n   "path": "/about-us",\n   "children":[\n    {\n              "label":"Leadeship",\n              "path": "about-us/leadeship",\n            },\n            {\n              "label":"Our Team",\n              "path": "about-us/our-team",\n            },\n    {\n              "label":"Services",\n              "path": "about-us/services",\n            }\n   ]\n },\n {\n   "label": "Contact",\n   "path": "/contact",\n },\n  ],\n  "footer_menu":[]\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," To access data of a specific menu you must access the object directly.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JS"},"const {menus} = useContext(MenuContext)\nconst primary = menus?.primary_menu;\n")))}d.isMDXComponent=!0}}]);