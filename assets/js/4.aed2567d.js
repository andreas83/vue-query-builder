(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{151:function(e,r,a){},197:function(e,r,a){"use strict";var t=a(151);a.n(t).a},202:function(e,r,a){"use strict";a.r(r);var t={data:function(){return{rules:[{type:"text",id:"first-name",label:"First Name"},{type:"text",id:"last-name",label:"Last Name"},{type:"radio",id:"plan-type",label:"Plan Type",choices:[{label:"Standard",value:"standard"},{label:"Premium",value:"premium"}]}],query:{logicalOperator:"all",children:[{type:"query-builder-rule",query:{rule:"plan-type",selectedOperand:"Plan Type",value:"premium"}},{type:"query-builder-group",query:{logicalOperator:"any",children:[{type:"query-builder-rule",query:{rule:"first-name",selectedOperator:"equals",selectedOperand:"First Name",value:"John"}},{type:"query-builder-rule",query:{rule:"first-name",selectedOperator:"equals",selectedOperand:"First Name",value:"Sally"}}]}}]}}}},u=(a(197),a(0)),l=Object(u.a)(t,function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"vue-query-builder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-query-builder","aria-hidden":"true"}},[e._v("#")]),e._v(" Vue Query Builder")]),e._v(" "),a("p",[e._v("Vue Query Builder is a user interface that makes it easy for your users to create queries of any kind. It's useful if you need a tool for generating reports, filtering data, and more.")]),e._v(" "),a("p",[e._v('Each instance of Vue Query Builder consists of groups and rules. Groups can contain rules and other groups. Each group has, by default, a match type of either "match all" (AND) or "match any" (OR). The component outputs JSON which you can pass to your server to parse.')]),e._v(" "),a("h3",{attrs:{id:"basic-demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-demo","aria-hidden":"true"}},[e._v("#")]),e._v(" Basic Demo")]),e._v(" "),a("br"),e._v(" "),a("vue-query-builder",{attrs:{rules:e.rules},model:{value:e.query,callback:function(r){e.query=r},expression:"query"}})],1)},[],!1,null,null,null);r.default=l.exports}}]);