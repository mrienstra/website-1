(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{155:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return s})),t.d(e,"metadata",(function(){return l})),t.d(e,"toc",(function(){return d})),t.d(e,"default",(function(){return u}));var a=t(3),i=t(8),o=(t(0),t(172)),r=t(173),s={id:"advanced-plugins",title:"Advanced Plugins"},l={unversionedId:"plugin/advanced-plugins",id:"plugin/advanced-plugins",isDocsHomePage:!1,title:"Advanced Plugins",description:"Now that we know how to write a basic plugin, let's take a look at some complex examples.",source:"@site/docs/plugin/advanced-plugins.md",slug:"/plugin/advanced-plugins",permalink:"/docs/plugin/advanced-plugins",editUrl:"https://github.com/grid-js/website/edit/master/docs/plugin/advanced-plugins.md",version:"current",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1604780355,formattedLastUpdatedAt:"11/7/2020",sidebar:"sidebar",previous:{title:"Writing a Plugin",permalink:"/docs/plugin/writing-plugin"},next:{title:"React",permalink:"/docs/integrations/react"}},d=[{value:"Using the pipeline",id:"using-the-pipeline",children:[]},{value:"Using the translation",id:"using-the-translation",children:[]}],p={toc:d};function u(n){var e=n.components,t=Object(i.a)(n,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Now that we know how to write a basic plugin, let's take a look at some complex examples."),Object(o.b)("h2",{id:"using-the-pipeline"},"Using the pipeline"),Object(o.b)("p",null,"Grid.js has an internal pipeline which is the brain of Grid.js and takes care of processing, filter and refining the data.\nYou can always get access to the current pipeline by using ",Object(o.b)("inlineCode",{parentName:"p"},"this.config.pipeline")," in your plugin component (make sure you have extended ",Object(o.b)("inlineCode",{parentName:"p"},"BaseComponent"),")."),Object(o.b)("p",null,"In this example, we have a table of Name (string) and Salary (double) and our custom plugin is in charge of summing salaries\nand displaying the total in the footer."),Object(o.b)(r.a,{children:"\nclass TotalSalaryPlugin extends BaseComponent {\n  constructor(...props) {\n    super(...props);\n    \n    this.state = {\n      total: 0\n    };\n  }\n  \n  setTotal() {\n    this.config.pipeline.process().then(data => {\n      this.setState({\n        total: data.toArray().reduce((prev, row) => prev + row[1], 0)\n      });\n    });\n  }\n  \n  componentDidMount() {\n    // initial setState\n    this.setTotal();\n    this.config.pipeline.on('updated', this.setTotal.bind(this));\n  }\n  \n  render() {\n    return h('b', {}, `Total: $${this.state.total.toLocaleString()}`);\n  }\n}\n  \nconst grid = new Grid({\n  search: true,\n  sort: true,\n  columns: ['Name', 'Salary'],\n  data: [\n    ['John', Math.round(Math.random() * 100000)],\n    ['Mark', Math.round(Math.random() * 100000)],\n    ['Josh', Math.round(Math.random() * 100000)],\n    ['Sara', Math.round(Math.random() * 100000)],\n    ['Maria', Math.round(Math.random() * 100000)],\n  ]\n});\n  \ngrid.plugin.add({\n  id: 'salaryplugin',\n  component: TotalSalaryPlugin,\n  position: PluginPosition.Footer,\n});\n",mdxType:"LiveExample"}),Object(o.b)("h2",{id:"using-the-translation"},"Using the translation"),Object(o.b)("p",null,"Likewise, you can get access to the Translator object and localize strings in your custom plugin. ",Object(o.b)("inlineCode",{parentName:"p"},"_")," is a method of ",Object(o.b)("inlineCode",{parentName:"p"},"BaseComponent"),"\nand since you've extended ",Object(o.b)("inlineCode",{parentName:"p"},"BaseComponent"),", you will have access to ",Object(o.b)("inlineCode",{parentName:"p"},"this._")," throughout your custom plugin:"),Object(o.b)(r.a,{children:"\nclass HelloPlugin extends BaseComponent {\n  render() {\n    return h('b', {}, this._('hello'));\n  }\n}\n  \nconst grid = new Grid({\n  columns: ['Name', 'Salary'],\n  data: [\n    ['John', Math.round(Math.random() * 100000)],\n    ['Mark', Math.round(Math.random() * 100000)],\n    ['Josh', Math.round(Math.random() * 100000)],\n  ],\n  language: {\n    'hello': 'bonjour!!'\n  }\n});\n  \ngrid.plugin.add({\n  id: 'bonjour',\n  component: HelloPlugin,\n  position: PluginPosition.Header,\n});\n",mdxType:"LiveExample"}))}u.isMDXComponent=!0},173:function(n,e,t){"use strict";t.d(e,"a",(function(){return l}));var a=t(175),i=t(174),o=t(0),r=t.n(o),s=t(176);class l extends o.Component{render(){return r.a.createElement(i.a,{children:this.props.children,transformCode:n=>`\nfunction () {\n  ${n}\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    if (wrapperRef && wrapperRef.current && wrapperRef.current.childNodes.length === 0) {\n      grid.render(wrapperRef.current);\n    }\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n`,live:!0,scope:{Grid:a.d,html:a.h,h:a.g,gCreateRef:a.f,gComponent:a.c,PluginPosition:a.e,BaseComponent:a.a,BaseProps:a.BaseProps,CodeBlock:i.a,useEffect:o.useEffect,useRef:o.useRef,faker:s,...this.props.scope}})}}}}]);