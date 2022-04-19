"use strict";(self.webpackChunk_webdevstudios_docs=self.webpackChunk_webdevstudios_docs||[]).push([[621],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||o;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2878:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={sidebar_position:1,title:"Frontend Setup"},l=void 0,p={unversionedId:"frontend/index",id:"frontend/index",title:"Frontend Setup",description:"The following steps will stand up a local install of Next.js.",source:"@site/docs/frontend/index.md",sourceDirName:"frontend",slug:"/frontend/",permalink:"/nextjs-wordpress-starter/docs/frontend/",editUrl:"https://github.com/WebDevStudios/nextjs-wordpress-starter/blob/main/docs/frontend/index.md",tags:[],version:"current",lastUpdatedBy:"Greg Rickaby",lastUpdatedAt:1650383854,formattedLastUpdatedAt:"4/19/2022",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Frontend Setup"},sidebar:"tutorialSidebar",previous:{title:"Menus",permalink:"/nextjs-wordpress-starter/docs/backend/menus"},next:{title:"Architecture",permalink:"/nextjs-wordpress-starter/docs/frontend/overview"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install",id:"install",level:2},{value:"Setup ENV Variables",id:"setup-env-variables",level:2},{value:"Start the Development Server",id:"start-the-development-server",level:2}],d={toc:c};function f(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following steps will stand up a local install of Next.js."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before you get started, make sure you have the following dependencies installed on your computer:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node 16")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"NPM 8"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you run into issues with NPM installing, try using ",(0,o.kt)("inlineCode",{parentName:"p"},"npm i --legacy-peer-deps")," instead.")),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1: Clone the frontend framework with ",(0,o.kt)("inlineCode",{parentName:"strong"},"create-next-app"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-next-app -e https://github.com/WebDevStudios/nextjs-wordpress-starter/tree/main --use-npm nextjs-wordpress-starter\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2: Change directories")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd nextjs-wordpress-starter\n")),(0,o.kt)("h2",{id:"setup-env-variables"},"Setup ENV Variables"),(0,o.kt)("p",null,"ENV variables are like constants in ",(0,o.kt)("inlineCode",{parentName:"p"},"wp-config.php"),". They're required in order for things like authentication with WordPress and other 3rd party services."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1: Copy the ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/WebDevStudios/nextjs-wordpress-starter/blob/main/.env.sample"},"sample ENV file"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cp .env.sample .env\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2: Open the ",(0,o.kt)("inlineCode",{parentName:"strong"},".env")," file in your code editor")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3: Add your credentials and save the file")),(0,o.kt)("p",null,"Learn more about configuring in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/frontend/env-variables"},"ENV Var documentation"),"."),(0,o.kt)("h2",{id:"start-the-development-server"},"Start the Development Server"),(0,o.kt)("p",null,"You can kick-off a development server by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot",src:n(2114).Z,width:"830",height:"366"})),(0,o.kt)("p",null,"It'll take a few seconds to compile, and then you can view the frontend at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," You did it! \ud83d\udc4f\ud83c\udffb"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot",src:n(3023).Z,width:"2866",height:"990"})))}f.isMDXComponent=!0},3023:function(e,t,n){t.Z=n.p+"assets/images/screenshot-frontend-794a33b2e35166f30319fcadcce81889.png"},2114:function(e,t,n){t.Z=n.p+"assets/images/screenshot-npm-run-dev-63b31a10ed0291554a6e0027eecaa199.png"}}]);