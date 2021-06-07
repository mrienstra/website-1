(self.webpackChunkgridjs_website=self.webpackChunkgridjs_website||[]).push([[5980],{8008:function(e,n,r){"use strict";r.d(n,{$:function(){return u}});var t=r(93552),a=r(41904),s={search:{placeholder:"\ud83d\udd0d Busqueda..."},sort:{sortAsc:"Ordenar la columna en orden ascendente",sortDesc:"Ordenar la columna en orden descendente"},pagination:{previous:"Anterior",next:"Siguiente",navigate:function(e,n){return"P\xe1gina "+e+" de "+n},page:function(e){return"P\xe1gina "+e},showing:"Mostrando los resultados",of:"sobre",to:"a",results:""},loading:"Cargando...",noRecordsFound:"Nig\xfan resultado encontrado",error:"Se produjo un error al recuperar datos"},o={search:{placeholder:"\ud83d\udd0d Recherche..."},sort:{sortAsc:"Trier la colonne dans l'ordre croissant",sortDesc:"Trier la colonne dans l'ordre d\xe9croissant"},pagination:{previous:"Pr\xe9c\xe9dent",next:"Suivant",navigate:function(e,n){return"Page "+e+" de "+n},page:function(e){return"Page "+e},showing:"Affichage des r\xe9sultats",of:"sur",to:"\xe0",results:""},loading:"Chargement...",noRecordsFound:"Aucun r\xe9sultat trouv\xe9",error:"Une erreur est survenue lors de la r\xe9cup\xe9ration des donn\xe9es"},d=r(16589),i=r(67294),l=r(85384),u=function(e){function n(){return e.apply(this,arguments)||this}return(0,t.Z)(n,e),n.prototype.render=function(){return i.createElement(d.Z,{children:this.props.children,transformCode:function(e){return"\nfunction () {\n  "+e+"\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    if (typeof (grid) == 'object' && wrapperRef && wrapperRef.current && wrapperRef.current.childNodes.length === 0) {\n      grid.render(wrapperRef.current);\n    }\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n"},live:!0,scope:Object.assign({Grid:a.rj,html:a.dy,h:a.h,gCreateRef:a.Vf,gComponent:a.wA,PluginPosition:a.t8,BaseComponent:a.H6,CodeBlock:d.Z,useEffect:i.useEffect,useRef:i.useRef,faker:l,esES:s,frFR:o},this.props.scope)})},n}(i.Component)},72714:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var t=r(22122),a=r(19756),s=(r(67294),r(3905)),o=r(8008),d=["components"],i={id:"nested-header",title:"Nested Header",keywords:["javascript","table","javascript table","gridjs","grid js","nested","nested header"]},l={unversionedId:"examples/nested-header",id:"examples/nested-header",isDocsHomePage:!1,title:"Nested Header",description:"Grid.js supports nested headers. All you need to do is to define nested columns attribute in your column config:",source:"@site/docs/examples/nested-header.md",sourceDirName:"examples",slug:"/examples/nested-header",permalink:"/docs/examples/nested-header",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/nested-header.md",version:"current",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1601125206,formattedLastUpdatedAt:"9/26/2020",frontMatter:{id:"nested-header",title:"Nested Header",keywords:["javascript","table","javascript table","gridjs","grid js","nested","nested header"]},sidebar:"sidebar",previous:{title:"React Component in cells",permalink:"/docs/examples/react-cells"},next:{title:"forceRender",permalink:"/docs/examples/force-render"}},u=[],c={toc:u};function m(e){var n=e.components,r=(0,a.Z)(e,d);return(0,s.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Grid.js supports nested headers. All you need to do is to define nested ",(0,s.kt)("inlineCode",{parentName:"p"},"columns")," attribute in your column config:"),(0,s.kt)(o.$,{children:"\nconst grid = new Grid({\n  columns: [\n      { \n        name: 'Name',\n        columns: [{\n          name: 'First'\n        }, {\n          name: 'Last'\n        }]\n      },\n      'Email',\n      { \n        name: 'Address',\n        columns: [{\n          name: 'Country'\n        }, {\n          name: 'City',\n          columns: [{\n            name: 'Name'\n          }]\n        }]\n      },\n   ],\n  data: Array(5).fill().map(x => [\n    faker.name.firstName(),\n    faker.name.lastName(),\n    faker.internet.email(),\n    faker.address.countryCode(),\n    faker.address.city(),\n  ])\n});\n",mdxType:"LiveExample"}),(0,s.kt)("br",null),(0,s.kt)("p",null,'You can also enable "sorting" when using nested headers:'),(0,s.kt)(o.$,{children:"\nconst grid = new Grid({\n  sort: true,\n  columns: [\n      { \n        name: 'Name',\n        columns: [{\n          name: 'First'\n        }, {\n          name: 'Last'\n        }]\n      },\n      'Email',\n   ],\n  data: Array(5).fill().map(x => [\n    faker.name.firstName(),\n    faker.name.lastName(),\n    faker.internet.email(),\n  ])\n});\n",mdxType:"LiveExample"}),(0,s.kt)("br",null),(0,s.kt)("p",null,"It can also be used with ",(0,s.kt)("inlineCode",{parentName:"p"},"fixedHeader")," option:"),(0,s.kt)(o.$,{children:"\nconst grid = new Grid({\n  sort: true,\n  fixedHeader: true,\n  height: '400px',\n  columns: [\n      { \n        name: 'Name',\n        columns: [{\n          name: 'First'\n        }, {\n          name: 'Last'\n        }]\n      },\n      'Email',\n   ],\n  data: Array(50).fill().map(x => [\n    faker.name.firstName(),\n    faker.name.lastName(),\n    faker.internet.email(),\n  ])\n});\n",mdxType:"LiveExample"}))}m.isMDXComponent=!0}}]);