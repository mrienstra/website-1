(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{166:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return p}));var s=t(3),a=t(8),r=(t(0),t(172)),o=t(173),i={id:"css-style",title:"CSS Style",keywords:["javascript","table","javascript table","gridjs","grid js","styling","css style"]},c={unversionedId:"examples/css-style",id:"examples/css-style",isDocsHomePage:!1,title:"CSS Style",description:"You can easily customize your Grid.js instance and add CSS styles to it:",source:"@site/docs/examples/css-style.md",slug:"/examples/css-style",permalink:"/docs/examples/css-style",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/css-style.md",version:"current",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1593637169,formattedLastUpdatedAt:"7/1/2020",sidebar:"sidebar",previous:{title:"Custom HTTP client",permalink:"/docs/examples/custom-http-client"},next:{title:"CSS ClassName",permalink:"/docs/examples/css-classname"}},d=[],l={toc:d};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(s.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"You can easily customize your Grid.js instance and add CSS styles to it:"),Object(r.b)(o.a,{children:"\nconst grid = new Grid({\n  columns: ['Name', 'Email', 'Phone Number'],\n  search: true,\n  data: [\n    ['John', 'john@example.com', '(353) 01 222 3333'],\n    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],\n    ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],\n    ['Nisen', 'nis900@gmail.com',   '313 333 1923']\n  ],\n  style: {\n    table: {\n      border: '3px solid #ccc'\n    },\n    th: {\n      'background-color': 'rgba(0, 0, 0, 0.1)',\n      color: '#000',\n      'border-bottom': '3px solid #ccc',\n      'text-align': 'center'\n    },\n    td: {\n      'text-align': 'center'\n    }\n  }\n});\n",mdxType:"LiveExample"}),Object(r.b)("br",null),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"See ",Object(r.b)("a",{parentName:"p",href:"/docs/config/style"},"style")," config for more details."))))}p.isMDXComponent=!0},173:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var s=t(175),a=t(174),r=t(0),o=t.n(r),i=t(176);class c extends r.Component{render(){return o.a.createElement(a.a,{children:this.props.children,transformCode:e=>`\nfunction () {\n  ${e}\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    if (wrapperRef && wrapperRef.current && wrapperRef.current.childNodes.length === 0) {\n      grid.render(wrapperRef.current);\n    }\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n`,live:!0,scope:{Grid:s.d,html:s.h,h:s.g,gCreateRef:s.f,gComponent:s.c,PluginPosition:s.e,BaseComponent:s.a,BaseProps:s.BaseProps,CodeBlock:a.a,useEffect:r.useEffect,useRef:r.useRef,faker:i,...this.props.scope}})}}}}]);