(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{159:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return c}));var a=t(3),l=t(8),i=(t(0),t(172)),r={id:"angular",title:"Angular"},o={unversionedId:"integrations/angular",id:"integrations/angular",isDocsHomePage:!1,title:"Angular",description:"Install",source:"@site/docs/integrations/angular.md",slug:"/integrations/angular",permalink:"/docs/integrations/angular",editUrl:"https://github.com/grid-js/website/edit/master/docs/integrations/angular.md",version:"current",lastUpdatedBy:"Salama Ashoush",lastUpdatedAt:1599746275,formattedLastUpdatedAt:"9/10/2020",sidebar:"sidebar",previous:{title:"Vue",permalink:"/docs/integrations/vue"},next:{title:"Svelte",permalink:"/docs/integrations/svelte"}},s=[{value:"Install",id:"install",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Outputs",id:"outputs",children:[]},{value:"Can I use Grid.js rendering helpers? Yes",id:"can-i-use-gridjs-rendering-helpers-yes",children:[]},{value:"Can I use Angular components in plugins, formatters, etc? Not yet",id:"can-i-use-angular-components-in-plugins-formatters-etc-not-yet",children:[]}],d={toc:s};function c(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"install"},"Install"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm install gridjs gridjs-angular\n")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"In your module"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"import { GridjsAngularModule } from 'gridjs-angular';\n\n@NgModule({\n  imports: [CommonModule,GridjsAngularModule],\n  declarations: [...],\n  exports: [...],\n})\nexport class AppModule {}\n")),Object(i.b)("p",null,"In your component template"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},'import { Component } from "@angular/core";\nimport { GridJsConfig } from "gridjs-angular";\n\n@Component({\n  template: `\n    <gridjs-angular\n      [gridConfig]="gridConfig"\n      (cellClick)="handleCellClick($event)"\n      (rowClick)="handleRowClick($event)"\n      (beforeLoad)="handleBeforeLoad($event)"\n      (gridLoad)="handleGridLoad($event)"\n    ></gridjs-angular>\n  `,\n})\nclass ExampleComponent {\n  public gridConfig: GridJsConfig = {\n    columns: ["Name", "Email", "Phone Number"],\n    data: [\n      ["John", "john@example.com", "(353) 01 222 3333"],\n      ["Mark", "mark@gmail.com", "(01) 22 888 4444"],\n      ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],\n      ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],\n      ["Afshin", "afshin@mail.com", "(353) 22 87 8356"],\n    ],\n  };\n\n  handleCellClick(event: any) {\n    console.log("cellClicked", event);\n  }\n\n  handleRowClick(event: any) {\n    console.log("rowClicked", event);\n  }\n\n  handleBeforeLoad(event: any) {\n    console.log("beforeLoad", event);\n  }\n\n  handleGridLoad(event: any) {\n    console.log("load", event);\n  }\n}\n')),Object(i.b)("p",null,"Finally don't forget to add gridjs theme in your index.html"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<link\n  href="https://unpkg.com/gridjs/dist/theme/mermaid.min.css"\n  rel="stylesheet"\n/>\n')),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can pass all Grid.js configs to the ",Object(i.b)("inlineCode",{parentName:"p"},"<gridjs-angular>")," component as inputs. See ",Object(i.b)("a",{parentName:"p",href:"https://gridjs.io/docs/config"},"Grid.js Config")," for more details.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"gridConfig")," You can pass Grid.js config as one object and it will be merged with other Grid.js inputs.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"plugins")," Grid.js plugins array. See ",Object(i.b)("a",{parentName:"p",href:"https://gridjs.io/docs/plugin/basics"},"Grid.js Plugins")))),Object(i.b)("h2",{id:"outputs"},"Outputs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You can pass all Grid.js events as outputs with a little difference ",Object(i.b)("inlineCode",{parentName:"li"},"load")," event renamed to ",Object(i.b)("inlineCode",{parentName:"li"},"beforeLoad"),". See ",Object(i.b)("a",{parentName:"li",href:"https://gridjs.io/docs/examples/event-handler"},"Grid.js Events"))),Object(i.b)("h2",{id:"can-i-use-gridjs-rendering-helpers-yes"},"Can I use Grid.js rendering helpers? Yes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Using ",Object(i.b)("inlineCode",{parentName:"li"},"h")," function is working fine. See this example plugin.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"}," {\n    id: 'myplugin',\n    component: h(() => h('h1', {}, 'Hello world!'), {}),\n    position: PluginPosition.Header,\n  }\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You can also use ",Object(i.b)("inlineCode",{parentName:"li"},"html")," in column formatter like this.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"}," {\n    name: 'Email',\n    formatter: (_, row) => html(\n        `<a href='mailto:${row.cells[1].data}'>${row.cells[1].data}</a>`\n      )\n  }\n")),Object(i.b)("h2",{id:"can-i-use-angular-components-in-plugins-formatters-etc-not-yet"},"Can I use Angular components in plugins, formatters, etc? Not yet"))}c.isMDXComponent=!0}}]);