(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{174:function(t,n,o){},244:function(t,n,o){"use strict";var e=o(174);o.n(e).a},271:function(t,n,o){"use strict";o.r(n);var e=o(197);e.a.Defaults.modifiers.computeStyle.gpuAcceleration=!1;var i={name:"Dropdown",data:function(){return{option:"Option 1",showInput:!0,items:["Option 1","Option 2","Option 3"]}},mounted:function(){this.$nextTick(function(){new e.a(this.$refs.showInputButton,this.$refs.dropdown,{placement:"bottom-start"});this.showInput=!1})},methods:{afterClick:function(t){this.option=t,this.showInput=!1}}},u=(o(244),o(3)),s=Object(u.a)(i,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("button",{ref:"showInputButton",staticClass:"btn-primary",on:{click:function(n){t.showInput=!t.showInput}}},[t._v(t._s(t.option))]),t._v(" "),t.showInput?o("div",{ref:"dropdown",staticClass:"popover-custom"},[o("ul",t._l(t.items,function(n){return o("li",{on:{mousedown:function(t){t.preventDefault()},mouseup:function(o){return o.preventDefault(),t.afterClick(n)}}},[t._v(t._s(n))])}),0)]):t._e()])},[],!1,null,"ac848636",null);n.default=s.exports}}]);