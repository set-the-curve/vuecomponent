(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{194:function(t,e,n){var content=n(246);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("ea657a52",content,!0,{sourceMap:!1})},195:function(t,e,n){var content=n(248);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("4a6bab44",content,!0,{sourceMap:!1})},245:function(t,e,n){"use strict";var o=n(194);n.n(o).a},246:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,".bg-white[data-v-fa2b5378]{background-color:#fff}.bg-light-gray[data-v-fa2b5378]{background-color:#f7f8fb}.bg-blue[data-v-fa2b5378]{background-color:#011627}.font-green[data-v-fa2b5378]{color:#41ead4}.font-secondary[data-v-fa2b5378]{color:#fdfffc}.border-right[data-v-fa2b5378]{border-right:1px solid #dee2e6}.tab-content[data-v-fa2b5378]{border-bottom:1px solid #dee2e6;padding:1rem}.tab-content[data-v-fa2b5378],.tabActive[data-v-fa2b5378]{border-left:1px solid #dee2e6;border-right:1px solid #dee2e6}.tabActive[data-v-fa2b5378]{border-top:1px solid #dee2e6;border-bottom:none!important}.tab[data-v-fa2b5378]{cursor:pointer;padding:.5rem;display:inline-block;border-bottom:1px solid #dee2e6}",""])},247:function(t,e,n){"use strict";var o=n(195);n.n(o).a},248:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,".center[data-v-932fb104]{display:flex;justify-content:center}p[data-v-932fb104]{padding-top:1rem;padding-bottom:2rem}.pad-top[data-v-932fb104]{padding-top:20px}.page-content[data-v-932fb104]{padding-top:2rem;padding-left:3rem;padding-right:3rem;width:100%}",""])},273:function(t,e,n){"use strict";n.r(e);var o={name:"Tabs",components:{},props:{width:String,height:String,names:Array},data:function(){return{tabIndex:0}},methods:{nextItem:function(){},prevItem:function(){}}},r=(n(245),n(7)),d={name:"TabsInfo",components:{Tabs:Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabs",style:{width:t.width,height:t.height}},[t._l(t.names,function(e,o){return n("div",{staticClass:"tab",class:{tabActive:t.tabIndex==""+o},on:{click:function(e){t.tabIndex=""+o}}},[t._v(t._s(e))])}),t._v(" "),n("div",{staticClass:"tab-content"},[t._l(t.names,function(e,n){return t.tabIndex==""+n?t._t("tab-"+n):t._e()})],2)],2)},[],!1,null,"fa2b5378",null).exports},data:function(){return{names:["tab0","tab1","tab2"]}},methods:{}},c=(n(247),Object(r.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-content"},[n("h1",[t._v("Tabs")]),t._v(" "),n("p",[t._v("A Vue component for tabbed content.  Click between tabs to cycle content.  Flexible tabs allows the user to create/destroy tabs.")]),t._v(" "),n("div",{staticClass:"center"},[n("Tabs",{attrs:{names:t.names},scopedSlots:t._u([{key:"tab-0",fn:function(){return[t._v("\n        Tab 0 content\n      ")]},proxy:!0},{key:"tab-1",fn:function(){return[t._v("\n        Tab 1 content\n      ")]},proxy:!0},{key:"tab-2",fn:function(){return[t._v("\n        Tab 2 content\n      ")]},proxy:!0}])})],1)])},[],!1,null,"932fb104",null));e.default=c.exports}}]);