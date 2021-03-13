(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(8),i=(n(0),n(172)),s=n(173),d={id:"wide-table",title:"Wide Table",keywords:["javascript","table","javascript table","gridjs","grid js","wide table","large","wide"]},o={unversionedId:"examples/wide-table",id:"examples/wide-table",isDocsHomePage:!1,title:"Wide Table",description:"Grid.js supports wide tables, too:",source:"@site/docs/examples/wide-table.md",slug:"/examples/wide-table",permalink:"/docs/examples/wide-table",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/wide-table.md",version:"current",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1593637169,formattedLastUpdatedAt:"7/1/2020",sidebar:"sidebar",previous:{title:"Loading State",permalink:"/docs/examples/loading-state"},next:{title:"Fixed Header",permalink:"/docs/examples/fixed-header"}},c=[],p={toc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Grid.js supports wide tables, too:"),Object(i.b)(s.a,{children:"\nconst grid = new Grid({\n  columns: [\n      'Name',\n      'Email',\n      'Title',\n      'Company',\n      'Country',\n      'County',\n   ],\n  sort: true,\n  pagination: true,\n  data: Array(50).fill().map(x => [\n    faker.name.findName(),\n    faker.internet.email(),\n    faker.name.title(),\n    faker.company.companyName(),\n    faker.address.country(),\n    faker.address.county(),\n  ])\n});\n",mdxType:"LiveExample"}),Object(i.b)("br",null),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Grid.js automatically calculates the width of columns when ",Object(i.b)("inlineCode",{parentName:"p"},"autoWidth")," is set to ",Object(i.b)("inlineCode",{parentName:"p"},"true")))))}l.isMDXComponent=!0},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(175),r=n(174),i=n(0),s=n.n(i),d=n(176);class o extends i.Component{render(){return s.a.createElement(r.a,{children:this.props.children,transformCode:e=>`\nfunction () {\n  ${e}\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    if (wrapperRef && wrapperRef.current && wrapperRef.current.childNodes.length === 0) {\n      grid.render(wrapperRef.current);\n    }\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n`,live:!0,scope:{Grid:a.d,html:a.h,h:a.g,gCreateRef:a.f,gComponent:a.c,PluginPosition:a.e,BaseComponent:a.a,BaseProps:a.BaseProps,CodeBlock:r.a,useEffect:i.useEffect,useRef:i.useRef,faker:d,...this.props.scope}})}}}}]);