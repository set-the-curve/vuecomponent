(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{176:function(t,o,r){var content=r(221);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("1b84eac9",content,!0,{sourceMap:!1})},177:function(t,o,r){var content=r(223);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("64de3686",content,!0,{sourceMap:!1})},220:function(t,o,r){"use strict";var e=r(176);r.n(e).a},221:function(t,o,r){(t.exports=r(16)(!1)).push([t.i,".alert[data-v-352b44b2]{padding:10px;display:flex}.content[data-v-352b44b2]{flex-grow:1}.close[data-v-352b44b2]{cursor:pointer}",""])},222:function(t,o,r){"use strict";var e=r(177);r.n(e).a},223:function(t,o,r){(t.exports=r(16)(!1)).push([t.i,".center[data-v-5072f684]{display:flex;justify-content:center}p[data-v-5072f684]{padding-top:1rem;padding-bottom:2rem}.pad-top[data-v-5072f684]{padding-top:20px}.page-content[data-v-5072f684]{padding-top:2rem;padding-left:3rem;padding-right:3rem;width:100%}.space-top[data-v-5072f684]{padding-top:3rem}",""])},293:function(t,o,r){"use strict";r.r(o);var e={name:"Alert",components:{},props:{borderColor:String,backgroundColor:String,textColor:String},data:function(){return{show:!0}}},l=(r(220),r(7)),n={components:{Alert:Object(l.a)(e,function(){var t=this,o=t.$createElement,r=t._self._c||o;return t.show?r("div",{staticClass:"alert",style:{borderColor:t.borderColor,backgroundColor:t.backgroundColor,color:t.textColor}},[r("div",{staticClass:"content"},[t._t("default")],2),t._v(" "),r("span",{staticClass:"close",on:{click:function(o){t.show=!1}}},[r("fa",{attrs:{icon:"times",size:"1x"}})],1)]):t._e()},[],!1,null,"352b44b2",null).exports}},c=(r(222),Object(l.a)(n,function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"page-content"},[r("h1",[t._v("Alerts")]),t._v(" "),r("p",[t._v("A Vue component for alerts with flexible contents.")]),t._v(" "),r("div",[r("div",{staticClass:"pad-top"},[r("Alert",{attrs:{backgroundColor:"#e7ecf3",borderColor:"#e7ecf3",textColor:"#486491"}},[t._v("\n        Alert!  I am an alert.\n      ")])],1),t._v(" "),r("div",{staticClass:"pad-top"},[r("Alert",{attrs:{backgroundColor:"#48BEFF",borderColor:"#48BEFF",textColor:"#1f2d3d"}},[t._v("\n        Alert!  I am an alert too.\n      ")])],1),t._v(" "),r("div",{staticClass:"pad-top"},[r("Alert",{attrs:{backgroundColor:"#43C59E",borderColor:"#43C59E",textColor:"#fff"}},[t._v("\n        Alert!  Don't forget about me.\n      ")])],1),t._v(" "),r("div",{staticClass:"pad-top"},[r("Alert",{attrs:{backgroundColor:"#AF1B3F",borderColor:"#AF1B3F",textColor:"#fff"}},[t._v("\n        Alert!  Click the x button to close me\n      ")])],1)]),t._v(" "),t._m(0)])},[function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"space-top"},[o("iframe",{staticStyle:{transform:"scale(1)",width:"100%",height:"900px",border:"0",overflow:"scroll"},attrs:{src:"https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=dracula&wt=sharp&l=vue&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=true&fm=Hack&fs=14px&lh=133%25&si=false&es=1x&wm=false&code=%253Ctemplate%253E%250A%2520%2520%253Cdiv%2520class%253D%2522alert%2522%2520v-if%253D%2522show%2522%2520v-bind%253Astyle%253D%2522%257B%2520borderColor%253A%2520borderColor%252C%2520backgroundColor%253A%2520backgroundColor%252C%2520color%253A%2520textColor%2520%257D%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522content%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cslot%253E%253C%252Fslot%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cspan%2520%2540click%253D%2522show%253Dfalse%2522%2520class%253D%2522close%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cfa%2520icon%253D%2522times%2522%2520size%253D%25221x%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Ftemplate%253E%250A%250A%253Cscript%253E%250Aexport%2520default%2520%257B%250A%2520%2520name%253A%2520'Alert'%252C%250A%2520%2520props%253A%2520%257B%250A%2520%2520%2520%2520borderColor%253A%2520String%252C%250A%2520%2520%2520%2520backgroundColor%253A%2520String%252C%250A%2520%2520%2520%2520textColor%253A%2520String%252C%250A%2520%2520%257D%252C%250A%2520%2520data()%2520%257B%250A%2520%2520%2520%2520return%2520%257B%250A%2520%2520%2520%2520%2520%2520show%253A%2520true%250A%2520%2520%2520%2520%257D%250A%2520%2520%257D%250A%257D%250A%253C%252Fscript%253E%250A%250A%253Cstyle%2520lang%253D%2522scss%2522%2520scoped%253E%250A.alert%2520%257B%250A%2520%2520padding%253A%252010px%253B%250A%2520%2520display%253A%2520flex%253B%250A%257D%250A%250A.content%2520%257B%250A%2520%2520flex-grow%253A%25201%253B%250A%257D%250A%250A.close%2520%257B%250A%2520%2520cursor%253A%2520pointer%253B%250A%257D%250A%253C%252Fstyle%253E",sandbox:"allow-scripts allow-same-origin"}})])}],!1,null,"5072f684",null));o.default=c.exports}}]);