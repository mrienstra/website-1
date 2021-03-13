(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{157:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return m})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return l}));var a=t(3),s=t(8),o=(t(0),t(172)),i=t(173),r=t(1733),c={id:"css-in-js",title:"CSS-in-JS",keywords:["javascript","table","javascript table","gridjs","grid js","styling","css in js"]},m={unversionedId:"examples/css-in-js",id:"examples/css-in-js",isDocsHomePage:!1,title:"CSS-in-JS",description:"You can use any CSS-in-JS frameworks with Grid.js. In this example, we are using Emotion to style",source:"@site/docs/examples/css-in-js.md",slug:"/examples/css-in-js",permalink:"/docs/examples/css-in-js",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/css-in-js.md",version:"current",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1607981083,formattedLastUpdatedAt:"12/14/2020",sidebar:"sidebar",previous:{title:"CSS ClassName",permalink:"/docs/examples/css-classname"},next:{title:"Cell formatting",permalink:"/docs/examples/cell-formatting"}},d=[],p={toc:d};function l(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can use any CSS-in-JS frameworks with Grid.js. In this example, we are using ",Object(o.b)("a",{parentName:"p",href:"https://emotion.sh/"},"Emotion")," to style\nour Grid.js instance."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\u201cCSS-in-JS\u201d refers to a pattern where CSS is composed using JavaScript instead of defined in external files."))),Object(o.b)("p",null,"Import your favorite CSS-in-JS tool first:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { css } from '@emotion/css';\n")),Object(o.b)("p",null,"And then use the ",Object(o.b)("inlineCode",{parentName:"p"},"className")," config to connect them together:"),Object(o.b)(i.a,{children:"\nconst grid = new Grid({\n  columns: ['Name', 'Email', 'Phone Number'],\n  search: true,\n  data: [\n    ['John', 'john@example.com', '(353) 01 222 3333'],\n    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],\n    ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],\n    ['Nisen', 'nis900@gmail.com',   '313 333 1923']\n  ],\n  className: {\n    container: css`\n      * {\n        font-family: 'Tahoma';\n      }\n    `,\n    table: css`\n      tr:hover td {\n        background-color: rgba(0, 0, 0, 0.1);\n      }\n    `,\n    th: css`\n      text-align: center;\n      &:hover {\n        background-color: #999;\n        color: #fff;\n      }\n    `,\n    td: css`\n      color: #999;\n      &:hover {\n        color: #000;\n      }\n    `\n  }\n});\n",scope:{css:r.a},mdxType:"LiveExample"}),Object(o.b)("br",null),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"See ",Object(o.b)("a",{parentName:"p",href:"/docs/config/className"},"className")," config for more details."))))}l.isMDXComponent=!0},173:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(175),s=t(174),o=t(0),i=t.n(o),r=t(176);class c extends o.Component{render(){return i.a.createElement(s.a,{children:this.props.children,transformCode:e=>`\nfunction () {\n  ${e}\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    if (wrapperRef && wrapperRef.current && wrapperRef.current.childNodes.length === 0) {\n      grid.render(wrapperRef.current);\n    }\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n`,live:!0,scope:{Grid:a.d,html:a.h,h:a.g,gCreateRef:a.f,gComponent:a.c,PluginPosition:a.e,BaseComponent:a.a,BaseProps:a.BaseProps,CodeBlock:s.a,useEffect:o.useEffect,useRef:o.useRef,faker:r,...this.props.scope}})}}}}]);