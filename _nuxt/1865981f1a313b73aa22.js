/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{206:function(e,t,n){"use strict";(function(e){for(var n="undefined"!=typeof window&&"undefined"!=typeof document,o=["Edge","Trident","Firefox"],r=0,i=0;i<o.length;i+=1)if(n&&navigator.userAgent.indexOf(o[i])>=0){r=1;break}var f=n&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},r))}};function l(e){return e&&"[object Function]"==={}.toString.call(e)}function d(element,e){if(1!==element.nodeType)return[];var t=element.ownerDocument.defaultView.getComputedStyle(element,null);return e?t[e]:t}function c(element){return"HTML"===element.nodeName?element:element.parentNode||element.host}function h(element){if(!element)return document.body;switch(element.nodeName){case"HTML":case"BODY":return element.ownerDocument.body;case"#document":return element.body}var e=d(element),t=e.overflow,n=e.overflowX,o=e.overflowY;return/(auto|scroll|overlay)/.test(t+o+n)?element:h(c(element))}var m=n&&!(!window.MSInputMethodContext||!document.documentMode),v=n&&/MSIE 10/.test(navigator.userAgent);function w(e){return 11===e?m:10===e?v:m||v}function y(element){if(!element)return document.documentElement;for(var e=w(10)?document.body:null,t=element.offsetParent||null;t===e&&element.nextElementSibling;)t=(element=element.nextElementSibling).offsetParent;var n=t&&t.nodeName;return n&&"BODY"!==n&&"HTML"!==n?-1!==["TH","TD","TABLE"].indexOf(t.nodeName)&&"static"===d(t,"position")?y(t):t:element?element.ownerDocument.documentElement:document.documentElement}function E(e){return null!==e.parentNode?E(e.parentNode):e}function x(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,o=n?e:t,r=n?t:e,f=document.createRange();f.setStart(o,0),f.setEnd(r,0);var element,l,d=f.commonAncestorContainer;if(e!==d&&t!==d||o.contains(r))return"BODY"===(l=(element=d).nodeName)||"HTML"!==l&&y(element.firstElementChild)!==element?y(d):d;var c=E(e);return c.host?x(c.host,t):x(e,E(t).host)}function O(element){var e="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",t=element.nodeName;if("BODY"===t||"HTML"===t){var html=element.ownerDocument.documentElement;return(element.ownerDocument.scrollingElement||html)[e]}return element[e]}function L(e,t){var n="x"===t?"Left":"Top",o="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+o+"Width"],10)}function T(e,body,html,t){return Math.max(body["offset"+e],body["scroll"+e],html["client"+e],html["offset"+e],html["scroll"+e],w(10)?parseInt(html["offset"+e])+parseInt(t["margin"+("Height"===e?"Top":"Left")])+parseInt(t["margin"+("Height"===e?"Bottom":"Right")]):0)}function C(e){var body=e.body,html=e.documentElement,t=w(10)&&getComputedStyle(html);return{height:T("Height",body,html,t),width:T("Width",body,html,t)}}var D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},M=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),N=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},F=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var t in source)Object.prototype.hasOwnProperty.call(source,t)&&(e[t]=source[t])}return e};function k(e){return F({},e,{right:e.left+e.width,bottom:e.top+e.height})}function S(element){var rect={};try{if(w(10)){rect=element.getBoundingClientRect();var e=O(element,"top"),t=O(element,"left");rect.top+=e,rect.left+=t,rect.bottom+=e,rect.right+=t}else rect=element.getBoundingClientRect()}catch(e){}var n={left:rect.left,top:rect.top,width:rect.right-rect.left,height:rect.bottom-rect.top},o="HTML"===element.nodeName?C(element.ownerDocument):{},r=o.width||element.clientWidth||n.right-n.left,f=o.height||element.clientHeight||n.bottom-n.top,l=element.offsetWidth-r,c=element.offsetHeight-f;if(l||c){var h=d(element);l-=L(h,"x"),c-=L(h,"y"),n.width-=l,n.height-=c}return k(n)}function W(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=w(10),r="HTML"===t.nodeName,f=S(e),l=S(t),c=h(e),m=d(t),v=parseFloat(m.borderTopWidth,10),y=parseFloat(m.borderLeftWidth,10);n&&r&&(l.top=Math.max(l.top,0),l.left=Math.max(l.left,0));var E=k({top:f.top-l.top-v,left:f.left-l.left-y,width:f.width,height:f.height});if(E.marginTop=0,E.marginLeft=0,!o&&r){var x=parseFloat(m.marginTop,10),L=parseFloat(m.marginLeft,10);E.top-=v-x,E.bottom-=v-x,E.left-=y-L,E.right-=y-L,E.marginTop=x,E.marginLeft=L}return(o&&!n?t.contains(c):t===c&&"BODY"!==c.nodeName)&&(E=function(rect,element){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],t=O(element,"top"),n=O(element,"left"),o=e?-1:1;return rect.top+=t*o,rect.bottom+=t*o,rect.left+=n*o,rect.right+=n*o,rect}(E,t)),E}function H(element){if(!element||!element.parentElement||w())return document.documentElement;for(var e=element.parentElement;e&&"none"===d(e,"transform");)e=e.parentElement;return e||document.documentElement}function B(e,t,n,o){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],f={top:0,left:0},l=r?H(e):x(e,t);if("viewport"===o)f=function(element){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],html=element.ownerDocument.documentElement,t=W(element,html),n=Math.max(html.clientWidth,window.innerWidth||0),o=Math.max(html.clientHeight,window.innerHeight||0),r=e?0:O(html),f=e?0:O(html,"left");return k({top:r-t.top+t.marginTop,left:f-t.left+t.marginLeft,width:n,height:o})}(l,r);else{var m=void 0;"scrollParent"===o?"BODY"===(m=h(c(t))).nodeName&&(m=e.ownerDocument.documentElement):m="window"===o?e.ownerDocument.documentElement:o;var v=W(m,l,r);if("HTML"!==m.nodeName||function e(element){var t=element.nodeName;if("BODY"===t||"HTML"===t)return!1;if("fixed"===d(element,"position"))return!0;var n=c(element);return!!n&&e(n)}(l))f=v;else{var w=C(e.ownerDocument),y=w.height,E=w.width;f.top+=v.top-v.marginTop,f.bottom=y+v.top,f.left+=v.left-v.marginLeft,f.right=E+v.left}}var L="number"==typeof(n=n||0);return f.left+=L?n:n.left||0,f.top+=L?n:n.top||0,f.right-=L?n:n.right||0,f.bottom-=L?n:n.bottom||0,f}function P(e,t,n,o,r){var f=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var l=B(n,o,f,r),d={top:{width:l.width,height:t.top-l.top},right:{width:l.right-t.right,height:l.height},bottom:{width:l.width,height:l.bottom-t.bottom},left:{width:t.left-l.left,height:l.height}},c=Object.keys(d).map(function(e){return F({key:e},d[e],{area:(t=d[e],t.width*t.height)});var t}).sort(function(a,b){return b.area-a.area}),h=c.filter(function(e){var t=e.width,o=e.height;return t>=n.clientWidth&&o>=n.clientHeight}),m=h.length>0?h[0].key:c[0].key,v=e.split("-")[1];return m+(v?"-"+v:"")}function A(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return W(n,o?H(t):x(t,n),o)}function I(element){var e=element.ownerDocument.defaultView.getComputedStyle(element),t=parseFloat(e.marginTop||0)+parseFloat(e.marginBottom||0),n=parseFloat(e.marginLeft||0)+parseFloat(e.marginRight||0);return{width:element.offsetWidth+n,height:element.offsetHeight+t}}function j(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function R(e,t,n){n=n.split("-")[0];var o=I(e),r={width:o.width,height:o.height},f=-1!==["right","left"].indexOf(n),l=f?"top":"left",d=f?"left":"top",c=f?"height":"width",h=f?"width":"height";return r[l]=t[l]+t[c]/2-o[c]/2,r[d]=n===d?t[d]-o[h]:t[j(d)],r}function U(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function Y(e,data,t){return(void 0===t?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var o=U(e,function(e){return e[t]===n});return e.indexOf(o)}(e,"name",t))).forEach(function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var t=e.function||e.fn;e.enabled&&l(t)&&(data.offsets.popper=k(data.offsets.popper),data.offsets.reference=k(data.offsets.reference),data=t(data,e))}),data}function V(e,t){return e.some(function(e){var n=e.name;return e.enabled&&n===t})}function K(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),i=0;i<t.length;i++){var o=t[i],r=o?""+o+n:e;if(void 0!==document.body.style[r])return r}return null}function z(element){var e=element.ownerDocument;return e?e.defaultView:window}function G(e,t,n,o){n.updateBound=o,z(e).addEventListener("resize",n.updateBound,{passive:!0});var r=h(e);return function e(t,n,o,r){var f="BODY"===t.nodeName,l=f?t.ownerDocument.defaultView:t;l.addEventListener(n,o,{passive:!0}),f||e(h(l.parentNode),n,o,r),r.push(l)}(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}function J(){var e,t;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.reference,t=this.state,z(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t))}function _(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function X(element,e){Object.keys(e).forEach(function(t){var n="";-1!==["width","height","top","right","bottom","left"].indexOf(t)&&_(e[t])&&(n="px"),element.style[t]=e[t]+n})}var Q=n&&/Firefox/i.test(navigator.userAgent);function Z(e,t,n){var o=U(e,function(e){return e.name===t}),r=!!o&&e.some(function(e){return e.name===n&&e.enabled&&e.order<o.order});if(!r){var f="`"+t+"`",l="`"+n+"`";console.warn(l+" modifier is required by "+f+" modifier in order to work, be sure to include it before "+f+"!")}return r}var $=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],ee=$.slice(3);function te(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=ee.indexOf(e),o=ee.slice(n+1).concat(ee.slice(0,n));return t?o.reverse():o}var ne={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function oe(e,t,n,o){var r=[0,0],f=-1!==["right","left"].indexOf(o),l=e.split(/(\+|\-)/).map(function(e){return e.trim()}),d=l.indexOf(U(l,function(e){return-1!==e.search(/,|\s/)}));l[d]&&-1===l[d].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var c=/\s*,\s*|\s+/,h=-1!==d?[l.slice(0,d).concat([l[d].split(c)[0]]),[l[d].split(c)[1]].concat(l.slice(d+1))]:[l];return(h=h.map(function(e,o){var r=(1===o?!f:f)?"height":"width",l=!1;return e.reduce(function(a,b){return""===a[a.length-1]&&-1!==["+","-"].indexOf(b)?(a[a.length-1]=b,l=!0,a):l?(a[a.length-1]+=b,l=!1,a):a.concat(b)},[]).map(function(e){return function(e,t,n,o){var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),f=+r[1],l=r[2];if(!f)return e;if(0===l.indexOf("%")){var element=void 0;switch(l){case"%p":element=n;break;case"%":case"%r":default:element=o}return k(element)[t]/100*f}if("vh"===l||"vw"===l)return("vh"===l?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*f;return f}(e,r,t,n)})})).forEach(function(e,t){e.forEach(function(n,o){_(n)&&(r[t]+=n*("-"===e[o-1]?-1:1))})}),r}var re={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(data){var e=data.placement,t=e.split("-")[0],n=e.split("-")[1];if(n){var o=data.offsets,r=o.reference,f=o.popper,l=-1!==["bottom","top"].indexOf(t),d=l?"left":"top",c=l?"width":"height",h={start:N({},d,r[d]),end:N({},d,r[d]+r[c]-f[c])};data.offsets.popper=F({},f,h[n])}return data}},offset:{order:200,enabled:!0,fn:function(data,e){var t=e.offset,n=data.placement,o=data.offsets,r=o.popper,f=o.reference,l=n.split("-")[0],d=void 0;return d=_(+t)?[+t,0]:oe(t,r,f,l),"left"===l?(r.top+=d[0],r.left-=d[1]):"right"===l?(r.top+=d[0],r.left+=d[1]):"top"===l?(r.left+=d[0],r.top-=d[1]):"bottom"===l&&(r.left+=d[0],r.top+=d[1]),data.popper=r,data},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(data,e){var t=e.boundariesElement||y(data.instance.popper);data.instance.reference===t&&(t=y(t));var n=K("transform"),o=data.instance.popper.style,r=o.top,f=o.left,l=o[n];o.top="",o.left="",o[n]="";var d=B(data.instance.popper,data.instance.reference,e.padding,t,data.positionFixed);o.top=r,o.left=f,o[n]=l,e.boundaries=d;var c=e.priority,h=data.offsets.popper,m={primary:function(t){var n=h[t];return h[t]<d[t]&&!e.escapeWithReference&&(n=Math.max(h[t],d[t])),N({},t,n)},secondary:function(t){var n="right"===t?"left":"top",o=h[n];return h[t]>d[t]&&!e.escapeWithReference&&(o=Math.min(h[n],d[t]-("right"===t?h.width:h.height))),N({},n,o)}};return c.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";h=F({},h,m[t](e))}),data.offsets.popper=h,data},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(data){var e=data.offsets,t=e.popper,n=e.reference,o=data.placement.split("-")[0],r=Math.floor,f=-1!==["top","bottom"].indexOf(o),l=f?"right":"bottom",d=f?"left":"top",c=f?"width":"height";return t[l]<r(n[d])&&(data.offsets.popper[d]=r(n[d])-t[c]),t[d]>r(n[l])&&(data.offsets.popper[d]=r(n[l])),data}},arrow:{order:500,enabled:!0,fn:function(data,e){var t;if(!Z(data.instance.modifiers,"arrow","keepTogether"))return data;var n=e.element;if("string"==typeof n){if(!(n=data.instance.popper.querySelector(n)))return data}else if(!data.instance.popper.contains(n))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),data;var o=data.placement.split("-")[0],r=data.offsets,f=r.popper,l=r.reference,c=-1!==["left","right"].indexOf(o),h=c?"height":"width",m=c?"Top":"Left",v=m.toLowerCase(),w=c?"left":"top",y=c?"bottom":"right",E=I(n)[h];l[y]-E<f[v]&&(data.offsets.popper[v]-=f[v]-(l[y]-E)),l[v]+E>f[y]&&(data.offsets.popper[v]+=l[v]+E-f[y]),data.offsets.popper=k(data.offsets.popper);var x=l[v]+l[h]/2-E/2,O=d(data.instance.popper),L=parseFloat(O["margin"+m],10),T=parseFloat(O["border"+m+"Width"],10),C=x-data.offsets.popper[v]-L-T;return C=Math.max(Math.min(f[h]-E,C),0),data.arrowElement=n,data.offsets.arrow=(N(t={},v,Math.round(C)),N(t,w,""),t),data},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(data,e){if(V(data.instance.modifiers,"inner"))return data;if(data.flipped&&data.placement===data.originalPlacement)return data;var t=B(data.instance.popper,data.instance.reference,e.padding,e.boundariesElement,data.positionFixed),n=data.placement.split("-")[0],o=j(n),r=data.placement.split("-")[1]||"",f=[];switch(e.behavior){case ne.FLIP:f=[n,o];break;case ne.CLOCKWISE:f=te(n);break;case ne.COUNTERCLOCKWISE:f=te(n,!0);break;default:f=e.behavior}return f.forEach(function(l,d){if(n!==l||f.length===d+1)return data;n=data.placement.split("-")[0],o=j(n);var c=data.offsets.popper,h=data.offsets.reference,m=Math.floor,v="left"===n&&m(c.right)>m(h.left)||"right"===n&&m(c.left)<m(h.right)||"top"===n&&m(c.bottom)>m(h.top)||"bottom"===n&&m(c.top)<m(h.bottom),w=m(c.left)<m(t.left),y=m(c.right)>m(t.right),E=m(c.top)<m(t.top),x=m(c.bottom)>m(t.bottom),O="left"===n&&w||"right"===n&&y||"top"===n&&E||"bottom"===n&&x,L=-1!==["top","bottom"].indexOf(n),T=!!e.flipVariations&&(L&&"start"===r&&w||L&&"end"===r&&y||!L&&"start"===r&&E||!L&&"end"===r&&x),C=!!e.flipVariationsByContent&&(L&&"start"===r&&y||L&&"end"===r&&w||!L&&"start"===r&&x||!L&&"end"===r&&E),D=T||C;(v||O||D)&&(data.flipped=!0,(v||O)&&(n=f[d+1]),D&&(r=function(e){return"end"===e?"start":"start"===e?"end":e}(r)),data.placement=n+(r?"-"+r:""),data.offsets.popper=F({},data.offsets.popper,R(data.instance.popper,data.offsets.reference,data.placement)),data=Y(data.instance.modifiers,data,"flip"))}),data},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(data){var e=data.placement,t=e.split("-")[0],n=data.offsets,o=n.popper,r=n.reference,f=-1!==["left","right"].indexOf(t),l=-1===["top","left"].indexOf(t);return o[f?"left":"top"]=r[t]-(l?o[f?"width":"height"]:0),data.placement=j(e),data.offsets.popper=k(o),data}},hide:{order:800,enabled:!0,fn:function(data){if(!Z(data.instance.modifiers,"hide","preventOverflow"))return data;var e=data.offsets.reference,t=U(data.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(e.bottom<t.top||e.left>t.right||e.top>t.bottom||e.right<t.left){if(!0===data.hide)return data;data.hide=!0,data.attributes["x-out-of-boundaries"]=""}else{if(!1===data.hide)return data;data.hide=!1,data.attributes["x-out-of-boundaries"]=!1}return data}},computeStyle:{order:850,enabled:!0,fn:function(data,e){var t=e.x,n=e.y,o=data.offsets.popper,r=U(data.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==r&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var f=void 0!==r?r:e.gpuAcceleration,l=y(data.instance.popper),d=S(l),c={position:o.position},h=function(data,e){var t=data.offsets,n=t.popper,o=t.reference,r=Math.round,f=Math.floor,l=function(e){return e},d=r(o.width),c=r(n.width),h=-1!==["left","right"].indexOf(data.placement),m=-1!==data.placement.indexOf("-"),v=e?h||m||d%2==c%2?r:f:l,w=e?r:l;return{left:v(d%2==1&&c%2==1&&!m&&e?n.left-1:n.left),top:w(n.top),bottom:w(n.bottom),right:v(n.right)}}(data,window.devicePixelRatio<2||!Q),m="bottom"===t?"top":"bottom",v="right"===n?"left":"right",w=K("transform"),E=void 0,x=void 0;if(x="bottom"===m?"HTML"===l.nodeName?-l.clientHeight+h.bottom:-d.height+h.bottom:h.top,E="right"===v?"HTML"===l.nodeName?-l.clientWidth+h.right:-d.width+h.right:h.left,f&&w)c[w]="translate3d("+E+"px, "+x+"px, 0)",c[m]=0,c[v]=0,c.willChange="transform";else{var O="bottom"===m?-1:1,L="right"===v?-1:1;c[m]=x*O,c[v]=E*L,c.willChange=m+", "+v}var T={"x-placement":data.placement};return data.attributes=F({},T,data.attributes),data.styles=F({},c,data.styles),data.arrowStyles=F({},data.offsets.arrow,data.arrowStyles),data},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(data){var element,e;return X(data.instance.popper,data.styles),element=data.instance.popper,e=data.attributes,Object.keys(e).forEach(function(t){!1!==e[t]?element.setAttribute(t,e[t]):element.removeAttribute(t)}),data.arrowElement&&Object.keys(data.arrowStyles).length&&X(data.arrowElement,data.arrowStyles),data},onLoad:function(e,t,n,o,r){var f=A(r,t,e,n.positionFixed),l=P(n.placement,f,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",l),X(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},ie=function(){function e(t,n){var o=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};D(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(o.update)},this.update=f(this.update.bind(this)),this.options=F({},e.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(F({},e.Defaults.modifiers,r.modifiers)).forEach(function(t){o.options.modifiers[t]=F({},e.Defaults.modifiers[t]||{},r.modifiers?r.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return F({name:e},o.options.modifiers[e])}).sort(function(a,b){return a.order-b.order}),this.modifiers.forEach(function(e){e.enabled&&l(e.onLoad)&&e.onLoad(o.reference,o.popper,o.options,e,o.state)}),this.update();var d=this.options.eventsEnabled;d&&this.enableEventListeners(),this.state.eventsEnabled=d}return M(e,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var data={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};data.offsets.reference=A(this.state,this.popper,this.reference,this.options.positionFixed),data.placement=P(this.options.placement,data.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),data.originalPlacement=data.placement,data.positionFixed=this.options.positionFixed,data.offsets.popper=R(this.popper,data.offsets.reference,data.placement),data.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",data=Y(this.modifiers,data),this.state.isCreated?this.options.onUpdate(data):(this.state.isCreated=!0,this.options.onCreate(data))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,V(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[K("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=G(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return J.call(this)}}]),e}();ie.Utils=("undefined"!=typeof window?window:e).PopperUtils,ie.placements=$,ie.Defaults=re,t.a=ie}).call(this,n(20))}}]);