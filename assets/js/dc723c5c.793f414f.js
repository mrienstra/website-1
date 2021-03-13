(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return d}));var a=n(3),l=n(8),b=(n(0),n(172)),r={id:"columns",title:"columns"},i={unversionedId:"config/columns",id:"config/columns",isDocsHomePage:!1,title:"columns",description:"To define the columns of the table",source:"@site/docs/config/columns.md",slug:"/config/columns",permalink:"/docs/config/columns",editUrl:"https://github.com/grid-js/website/edit/master/docs/config/columns.md",version:"current",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1604260573,formattedLastUpdatedAt:"11/1/2020",sidebar:"sidebar",previous:{title:"from",permalink:"/docs/config/from"},next:{title:"server",permalink:"/docs/config/server"}},o=[],c={toc:o};function d(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"To define the columns of the table"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"optional")," (you can render a table without the header)"),Object(b.b)("li",{parentName:"ul"},"Type: ",Object(b.b)("inlineCode",{parentName:"li"},"string[]")," or ",Object(b.b)("inlineCode",{parentName:"li"},"TColumn[]"))),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-js"},'new Grid({\n  columns: ["Name", "Email", "Phone Number"]\n});\n')),Object(b.b)("p",null,"or"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-js"},'new Grid({\n  columns: [{\n    name: "Name",\n    sort: true,\n  }, {\n    name: "Email"\n  }, {\n    name: "Phone Number",\n    width: \'50%\'\n  }]\n});\n')),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"TColumn")," type has the following properties:"),Object(b.b)("div",{className:"full-width"},Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Description"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"id ",Object(b.b)("inlineCode",{parentName:"td"},"optional")),Object(b.b)("td",{parentName:"tr",align:null},"column ID"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"phoneNumber"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"data ",Object(b.b)("inlineCode",{parentName:"td"},"optional")),Object(b.b)("td",{parentName:"tr",align:null},"Cell default data"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"function")," or TCell"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"(row) => row.name.firstName")," or ",Object(b.b)("inlineCode",{parentName:"td"},"myData"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"name"),Object(b.b)("td",{parentName:"tr",align:null},"column name"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"Name"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"width ",Object(b.b)("inlineCode",{parentName:"td"},"optional")),Object(b.b)("td",{parentName:"tr",align:null},"width of the column"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"200px")," or ",Object(b.b)("inlineCode",{parentName:"td"},"30%"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"sort ",Object(b.b)("inlineCode",{parentName:"td"},"optional")),Object(b.b)("td",{parentName:"tr",align:null},"to enable/disable sort"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"true")," or ",Object(b.b)("inlineCode",{parentName:"td"},"0"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"hidden ",Object(b.b)("inlineCode",{parentName:"td"},"optional")),Object(b.b)("td",{parentName:"tr",align:null},"to show/hide the column"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"true")," or ",Object(b.b)("inlineCode",{parentName:"td"},"0"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"formatter ",Object(b.b)("inlineCode",{parentName:"td"},"optional")),Object(b.b)("td",{parentName:"tr",align:null},"custom cell formatting"),Object(b.b)("td",{parentName:"tr",align:null},"function"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"(cell: TCell, row: Row<TCell>, column: TColumn) => ComponentChild;"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"attributes ",Object(b.b)("inlineCode",{parentName:"td"},"optional")),Object(b.b)("td",{parentName:"tr",align:null},"custom cell attributes"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"HTMLAttributes")," or function"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"(cell: TCell, row: Row<TCell>, column: TColumn) => HTMLAttributes;")))))),Object(b.b)("div",{className:"admonition admonition-info alert alert--info"},Object(b.b)("div",{parentName:"div",className:"admonition-heading"},Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",{parentName:"h5",className:"admonition-icon"},Object(b.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(b.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(b.b)("div",{parentName:"div",className:"admonition-content"},Object(b.b)("p",{parentName:"div"},"See ",Object(b.b)("a",{parentName:"p",href:"/docs/examples/cell-formatting"},"Cell formatting")," example for more details."))))}d.isMDXComponent=!0}}]);