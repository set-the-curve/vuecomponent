(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{195:function(t,n,o){var content=o(260);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("68a1e5fb",content,!0,{sourceMap:!1})},196:function(t,n,o){var content=o(262);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("05efb05a",content,!0,{sourceMap:!1})},259:function(t,n,o){"use strict";var e=o(195);o.n(e).a},260:function(t,n,o){(t.exports=o(16)(!1)).push([t.i,".popover-custom[data-v-6aa84c50]{background-color:#fff;width:200px;border:1px solid #c7c7c7;box-shadow:0 5px 20px 0 rgba(21,27,38,.08)}button[data-v-6aa84c50]:focus,input[data-v-6aa84c50]:focus,select[data-v-6aa84c50]:focus,textarea[data-v-6aa84c50]:focus{outline:none}input[type=text][data-v-6aa84c50],textarea[data-v-6aa84c50]{outline:none;padding:0;border:none;font-size:1rem!important}input[data-v-6aa84c50]{font-size:.84rem!important}button[data-v-6aa84c50],input[data-v-6aa84c50],select[data-v-6aa84c50],textarea[data-v-6aa84c50]{font-family:inherit}input[type=text][data-v-6aa84c50]:focus,textarea[data-v-6aa84c50]:focus{box-shadow:none;border:none}button[data-v-6aa84c50]{border:none;font-size:1rem}.noborder[data-v-6aa84c50]{border:none!important}.showInputButton[data-v-6aa84c50]{cursor:pointer;border:1px solid transparent;color:#999;font-weight:500;font-size:1rem}.inputWrapper[data-v-6aa84c50],.showInputButton[data-v-6aa84c50]{display:inline-block;padding:10px}.inputWrapper[data-v-6aa84c50]{border:1px solid grey;border-radius:3px}.inputField[data-v-6aa84c50]{display:inline-block;font-weight:500;font-size:1rem}[dir=ltr] ul[data-v-6aa84c50]{margin-left:0}[dir=ltr] ul[data-v-6aa84c50],[dir=rtl] ul[data-v-6aa84c50]{margin-right:0}[dir=rtl] ul[data-v-6aa84c50]{margin-left:0}[dir=ltr] ul[data-v-6aa84c50]{padding-left:0}[dir=rtl] ul[data-v-6aa84c50]{padding-right:0}ul[data-v-6aa84c50]{cursor:pointer;list-style-type:none;margin-top:0;margin-bottom:0}li[data-v-6aa84c50]{padding:10px}li[data-v-6aa84c50]:hover{color:#fff;background-color:#4582ec}",""])},261:function(t,n,o){"use strict";var e=o(196);o.n(e).a},262:function(t,n,o){(t.exports=o(16)(!1)).push([t.i,".center[data-v-a62933c2]{display:flex;justify-content:center}p[data-v-a62933c2]{padding-top:1rem;padding-bottom:2rem}.pad-top[data-v-a62933c2]{padding-top:20px}.page-content[data-v-a62933c2]{padding-top:2rem;padding-left:3rem;padding-right:3rem;width:100%}.space-top[data-v-a62933c2]{padding-top:3rem}",""])},302:function(t,n,o){"use strict";o.r(n);var e=o(217);e.a.Defaults.modifiers.computeStyle.gpuAcceleration=!1;var r={name:"Dropdown",data:function(){return{option:"Option 1",showInput:!0,items:["Option 1","Option 2","Option 3"]}},mounted:function(){this.$nextTick(function(){new e.a(this.$refs.showInputButton,this.$refs.dropdown,{placement:"bottom-start"});this.showInput=!1})},methods:{afterClick:function(t){this.option=t,this.showInput=!1}}},c=(o(259),o(7)),d={components:{Dropdown:Object(c.a)(r,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("button",{ref:"showInputButton",staticClass:"btn-primary",on:{click:function(n){t.showInput=!t.showInput}}},[t._v(t._s(t.option))]),t._v(" "),t.showInput?o("div",{ref:"dropdown",staticClass:"popover-custom"},[o("ul",t._l(t.items,function(n){return o("li",{on:{mousedown:function(t){t.preventDefault()},mouseup:function(o){return o.preventDefault(),t.afterClick(n)}}},[t._v(t._s(n))])}),0)]):t._e()])},[],!1,null,"6aa84c50",null).exports},data:function(){return{}},methods:{}},l=(o(261),Object(c.a)(d,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"page-content"},[n("h1",[this._v("Dropdown")]),this._v(" "),n("div",[n("Dropdown")],1)])},[],!1,null,"a62933c2",null));n.default=l.exports}}]);