(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[13],{

/***/ "../node_modules/compute-scroll-into-view/dist/index.module.js":
/*!*********************************************************************!*\
  !*** ../node_modules/compute-scroll-into-view/dist/index.module.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function t(t){return"object"==typeof t&&null!=t&&1===t.nodeType}function e(t,e){return(!e||"hidden"!==t)&&"visible"!==t&&"clip"!==t}function n(t,n){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var r=getComputedStyle(t,null);return e(r.overflowY,n)||e(r.overflowX,n)||function(t){var e=function(t){if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}}(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)}(t)}return!1}function r(t,e,n,r,i,o,l,d){return o<t&&l>e||o>t&&l<e?0:o<=t&&d<=n||l>=e&&d>=n?o-t-r:l>e&&d<n||o<t&&d>n?l-e+i:0}/* harmony default export */ __webpack_exports__["default"] = (function(e,i){var o=window,l=i.scrollMode,d=i.block,u=i.inline,h=i.boundary,a=i.skipOverflowHiddenElements,c="function"==typeof h?h:function(t){return t!==h};if(!t(e))throw new TypeError("Invalid target");for(var f=document.scrollingElement||document.documentElement,s=[],p=e;t(p)&&c(p);){if((p=p.parentElement)===f){s.push(p);break}null!=p&&p===document.body&&n(p)&&!n(document.documentElement)||null!=p&&n(p,a)&&s.push(p)}for(var m=o.visualViewport?o.visualViewport.width:innerWidth,g=o.visualViewport?o.visualViewport.height:innerHeight,w=window.scrollX||pageXOffset,v=window.scrollY||pageYOffset,W=e.getBoundingClientRect(),b=W.height,H=W.width,y=W.top,E=W.right,M=W.bottom,V=W.left,x="start"===d||"nearest"===d?y:"end"===d?M:y+b/2,I="center"===u?V+H/2:"end"===u?E:V,C=[],T=0;T<s.length;T++){var k=s[T],B=k.getBoundingClientRect(),D=B.height,O=B.width,R=B.top,X=B.right,Y=B.bottom,L=B.left;if("if-needed"===l&&y>=0&&V>=0&&M<=g&&E<=m&&y>=R&&M<=Y&&V>=L&&E<=X)return C;var S=getComputedStyle(k),j=parseInt(S.borderLeftWidth,10),q=parseInt(S.borderTopWidth,10),z=parseInt(S.borderRightWidth,10),A=parseInt(S.borderBottomWidth,10),F=0,G=0,J="offsetWidth"in k?k.offsetWidth-k.clientWidth-j-z:0,K="offsetHeight"in k?k.offsetHeight-k.clientHeight-q-A:0;if(f===k)F="start"===d?x:"end"===d?x-g:"nearest"===d?r(v,v+g,g,q,A,v+x,v+x+b,b):x-g/2,G="start"===u?I:"center"===u?I-m/2:"end"===u?I-m:r(w,w+m,m,j,z,w+I,w+I+H,H),F=Math.max(0,F+v),G=Math.max(0,G+w);else{F="start"===d?x-R-q:"end"===d?x-Y+A+K:"nearest"===d?r(R,Y,D,q,A+K,x,x+b,b):x-(R+D/2)+K/2,G="start"===u?I-L-j:"center"===u?I-(L+O/2)+J/2:"end"===u?I-X+z+J:r(L,X,O,j,z+J,I,I+H,H);var N=k.scrollLeft,P=k.scrollTop;x+=P-(F=Math.max(0,Math.min(P+F,k.scrollHeight-D+K))),I+=N-(G=Math.max(0,Math.min(N+G,k.scrollWidth-O+J)))}C.push({el:k,top:F,left:G})}return C});
//# sourceMappingURL=index.module.js.map


/***/ }),

/***/ "../node_modules/direction/index.js":
/*!******************************************!*\
  !*** ../node_modules/direction/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = direction

var RTL = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC'
var LTR =
  'A-Za-z\u00C0-\u00D6\u00D8-\u00F6' +
  '\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C' +
  '\uFE00-\uFE6F\uFEFD-\uFFFF'

var rtl = new RegExp('^[^' + LTR + ']*[' + RTL + ']')
var ltr = new RegExp('^[^' + RTL + ']*[' + LTR + ']')

function direction(value) {
  value = String(value || '')

  if (rtl.test(value)) {
    return 'rtl'
  }

  if (ltr.test(value)) {
    return 'ltr'
  }

  return 'neutral'
}


/***/ }),

/***/ "../node_modules/immer/dist/immer.esm.js":
/*!***********************************************!*\
  !*** ../node_modules/immer/dist/immer.esm.js ***!
  \***********************************************/
/*! exports provided: default, Immer, applyPatches, castDraft, castImmutable, createDraft, current, enableAllPlugins, enableES5, enableMapSet, enablePatches, finishDraft, freeze, immerable, isDraft, isDraftable, nothing, original, produce, produceWithPatches, setAutoFreeze, setUseProxies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Immer", function() { return un; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPatches", function() { return pn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castDraft", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castImmutable", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDraft", function() { return ln; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "current", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableAllPlugins", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableES5", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableMapSet", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enablePatches", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishDraft", function() { return dn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freeze", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "immerable", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraft", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraftable", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "original", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produce", function() { return fn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produceWithPatches", function() { return cn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAutoFreeze", function() { return sn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUseProxies", function() { return vn; });
function n(n){for(var t=arguments.length,r=Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];if(true){var i=Y[n],o=i?"function"==typeof i?i.apply(null,r):i:"unknown error nr: "+n;throw Error("[Immer] "+o)}throw Error("[Immer] minified error nr: "+n+(r.length?" "+r.map((function(n){return"'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function t(n){return!!n&&!!n[Q]}function r(n){return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var t=Object.getPrototypeOf(n);if(null===t)return!0;var r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===Z}(n)||Array.isArray(n)||!!n[L]||!!n.constructor[L]||s(n)||v(n))}function e(r){return t(r)||n(23,r),r[Q].t}function i(n,t,r){void 0===r&&(r=!1),0===o(n)?(r?Object.keys:nn)(n).forEach((function(e){r&&"symbol"==typeof e||t(e,n[e],n)})):n.forEach((function(r,e){return t(e,r,n)}))}function o(n){var t=n[Q];return t?t.i>3?t.i-4:t.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,t){return 2===o(n)?n.has(t):Object.prototype.hasOwnProperty.call(n,t)}function a(n,t){return 2===o(n)?n.get(t):n[t]}function f(n,t,r){var e=o(n);2===e?n.set(t,r):3===e?(n.delete(t),n.add(r)):n[t]=r}function c(n,t){return n===t?0!==n||1/n==1/t:n!=n&&t!=t}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var t=tn(n);delete t[Q];for(var r=nn(t),e=0;e<r.length;e++){var i=r[e],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),t)}function d(n,e){return void 0===e&&(e=!1),y(n)||t(n)||!r(n)?n:(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,t){return d(t,!0)}),!0),n)}function h(){n(2)}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(t){var r=rn[t];return r||n(18,t),r}function m(n,t){rn[n]||(rn[n]=t)}function _(){return false||U||n(0),U}function j(n,t){t&&(b("Patches"),n.u=[],n.s=[],n.v=t)}function O(n){g(n),n.p.forEach(S),n.p=null}function g(n){n===U&&(U=n.l)}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var t=n[Q];0===t.i||1===t.i?t.j():t.O=!0}function P(t,e){e._=e.p.length;var i=e.p[0],o=void 0!==t&&t!==i;return e.h.g||b("ES5").S(e,t,o),o?(i[Q].P&&(O(e),n(4)),r(t)&&(t=M(e,t),e.l||x(e,t)),e.u&&b("Patches").M(i[Q],t,e.u,e.s)):t=M(e,i,[]),O(e),e.u&&e.v(e.u,e.s),t!==H?t:void 0}function M(n,t,r){if(y(t))return t;var e=t[Q];if(!e)return i(t,(function(i,o){return A(n,e,t,i,o,r)}),!0),t;if(e.A!==n)return t;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(t,i){return A(n,e,o,t,i,r)})),x(n,o,!1),r&&n.u&&b("Patches").R(e,r,n.u,n.s)}return e.o}function A(e,i,o,a,c,s){if( true&&c===o&&n(5),t(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!t(v))return;e.m=!1}if(r(c)&&!y(c)){if(!e.h.F&&e._<1)return;M(e,c),i&&i.A.l||x(e,c)}}function x(n,t,r){void 0===r&&(r=!1),n.h.F&&n.m&&d(t,r)}function z(n,t){var r=n[Q];return(r?p(r):n)[t]}function I(n,t){if(t in n)for(var r=Object.getPrototypeOf(n);r;){var e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=Object.getPrototypeOf(r)}}function k(n){n.P||(n.P=!0,n.l&&k(n.l))}function E(n){n.o||(n.o=l(n.t))}function R(n,t,r){var e=s(t)?b("MapSet").N(t,r):v(t)?b("MapSet").T(t,r):n.g?function(n,t){var r=Array.isArray(n),e={i:r?1:0,A:t?t.A:_(),P:!1,I:!1,D:{},l:t,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;r&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(t,r):b("ES5").J(t,r);return(r?r.A:_()).p.push(e),e}function D(e){return t(e)||n(22,e),function n(t){if(!r(t))return t;var e,u=t[Q],c=o(t);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=F(t,c),u.I=!1}else e=F(t,c);return i(e,(function(t,r){u&&a(u.t,t)===r||f(e,t,n(r))})),3===c?new Set(e):e}(e)}function F(n,t){switch(t){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function N(){function r(n,t){var r=s[n];return r?r.enumerable=t:s[n]=r={configurable:!0,enumerable:t,get:function(){var t=this[Q];return true&&f(t),en.get(t,n)},set:function(t){var r=this[Q]; true&&f(r),en.set(r,n,t)}},r}function e(n){for(var t=n.length-1;t>=0;t--){var r=n[t][Q];if(!r.P)switch(r.i){case 5:a(r)&&k(r);break;case 4:o(r)&&k(r)}}}function o(n){for(var t=n.t,r=n.k,e=nn(r),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=t[o];if(void 0===a&&!u(t,o))return!0;var f=r[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return!0}}var v=!!t[Q];return e.length!==nn(t).length+(v?0:1)}function a(n){var t=n.k;if(t.length!==n.t.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);return!(!r||r.get)}function f(t){t.O&&n(3,JSON.stringify(p(t)))}var s={};m("ES5",{J:function(n,t){var e=Array.isArray(n),i=function(n,t){if(n){for(var e=Array(t.length),i=0;i<t.length;i++)Object.defineProperty(e,""+i,r(i,!0));return e}var o=tn(t);delete o[Q];for(var u=nn(o),a=0;a<u.length;a++){var f=u[a];o[f]=r(f,n||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(t),o)}(e,n),o={i:e?5:4,A:t?t.A:_(),P:!1,I:!1,D:{},l:t,t:n,k:i,o:null,O:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,r,o){o?t(r)&&r[Q].A===n&&e(n.p):(n.u&&function n(t){if(t&&"object"==typeof t){var r=t[Q];if(r){var e=r.t,o=r.k,f=r.D,c=r.i;if(4===c)i(o,(function(t){t!==Q&&(void 0!==e[t]||u(e,t)?f[t]||n(o[t]):(f[t]=!0,k(r)))})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,k(r))}));else if(5===c){if(a(r)&&(k(r),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)void 0===f[l]&&n(o[l])}}}}(n.p[0]),e(n.p))},K:function(n){return 4===n.i?o(n):a(n)}})}function T(){function e(n){if(!r(n))return n;if(Array.isArray(n))return n.map(e);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],e(n[1])]})));if(v(n))return new Set(Array.from(n).map(e));var t=Object.create(Object.getPrototypeOf(n));for(var i in n)t[i]=e(n[i]);return u(n,L)&&(t[L]=n[L]),t}function f(n){return t(n)?e(n):n}var c="add";m("Patches",{$:function(t,r){return r.forEach((function(r){for(var i=r.path,u=r.op,f=t,s=0;s<i.length-1;s++){var v=o(f),p=""+i[s];0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||n(24),"function"==typeof f&&"prototype"===p&&n(24),"object"!=typeof(f=a(f,p))&&n(15,i.join("/"))}var l=o(f),d=e(r.value),h=i[i.length-1];switch(u){case"replace":switch(l){case 2:return f.set(h,d);case 3:n(16);default:return f[h]=d}case c:switch(l){case 1:return f.splice(h,0,d);case 2:return f.set(h,d);case 3:return f.add(d);default:return f[h]=d}case"remove":switch(l){case 1:return f.splice(h,1);case 2:return f.delete(h);case 3:return f.delete(r.value);default:return delete f[h]}default:n(17,u)}})),t},R:function(n,t,r,e){switch(n.i){case 0:case 4:case 2:return function(n,t,r,e){var o=n.t,s=n.o;i(n.D,(function(n,i){var v=a(o,n),p=a(s,n),l=i?u(o,n)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=t.concat(n);r.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)})}}))}(n,t,r,e);case 5:case 1:return function(n,t,r,e){var i=n.t,o=n.D,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,r];r=s[0],e=s[1]}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=t.concat([v]);r.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])})}for(var l=i.length;l<u.length;l++){var d=t.concat([l]);r.push({op:c,path:d,value:f(u[l])})}i.length<u.length&&e.push({op:"replace",path:t.concat(["length"]),value:i.length})}(n,t,r,e);case 3:return function(n,t,r,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=t.concat([u]);r.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=t.concat([u]);r.push({op:c,path:o,value:n}),e.unshift({op:"remove",path:o,value:n})}u++}))}(n,t,r,e)}},M:function(n,t,r,e){r.push({op:"replace",path:[],value:t===H?void 0:t}),e.push({op:"replace",path:[],value:n.t})}})}function C(){function t(n,t){function r(){this.constructor=n}a(n,t),n.prototype=(r.prototype=t.prototype,new r)}function e(n){n.o||(n.D=new Map,n.o=new Map(n.t))}function o(n){n.o||(n.o=new Set,n.t.forEach((function(t){if(r(t)){var e=R(n.A.h,t,n);n.p.set(t,e),n.o.add(e)}else n.o.add(t)})))}function u(t){t.O&&n(3,JSON.stringify(p(t)))}var a=function(n,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r])})(n,t)},f=function(){function n(n,t){return this[Q]={i:2,l:t,A:t?t.A:_(),P:!1,I:!1,o:void 0,D:void 0,t:n,k:this,C:!1,O:!1},this}t(n,Map);var o=n.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q]).size}}),o.has=function(n){return p(this[Q]).has(n)},o.set=function(n,t){var r=this[Q];return u(r),p(r).has(n)&&p(r).get(n)===t||(e(r),k(r),r.D.set(n,!0),r.o.set(n,t),r.D.set(n,!0)),this},o.delete=function(n){if(!this.has(n))return!1;var t=this[Q];return u(t),e(t),k(t),t.D.set(n,!1),t.o.delete(n),!0},o.clear=function(){var n=this[Q];u(n),p(n).size&&(e(n),k(n),n.D=new Map,i(n.t,(function(t){n.D.set(t,!1)})),n.o.clear())},o.forEach=function(n,t){var r=this;p(this[Q]).forEach((function(e,i){n.call(t,r.get(i),i,r)}))},o.get=function(n){var t=this[Q];u(t);var i=p(t).get(n);if(t.I||!r(i))return i;if(i!==t.t.get(n))return i;var o=R(t.A.h,i,t);return e(t),t.o.set(n,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var n,t=this,r=this.keys();return(n={})[V]=function(){return t.values()},n.next=function(){var n=r.next();return n.done?n:{done:!1,value:t.get(n.value)}},n},o.entries=function(){var n,t=this,r=this.keys();return(n={})[V]=function(){return t.entries()},n.next=function(){var n=r.next();if(n.done)return n;var e=t.get(n.value);return{done:!1,value:[n.value,e]}},n},o[V]=function(){return this.entries()},n}(),c=function(){function n(n,t){return this[Q]={i:3,l:t,A:t?t.A:_(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,O:!1,C:!1},this}t(n,Set);var r=n.prototype;return Object.defineProperty(r,"size",{get:function(){return p(this[Q]).size}}),r.has=function(n){var t=this[Q];return u(t),t.o?!!t.o.has(n)||!(!t.p.has(n)||!t.o.has(t.p.get(n))):t.t.has(n)},r.add=function(n){var t=this[Q];return u(t),this.has(n)||(o(t),k(t),t.o.add(n)),this},r.delete=function(n){if(!this.has(n))return!1;var t=this[Q];return u(t),o(t),k(t),t.o.delete(n)||!!t.p.has(n)&&t.o.delete(t.p.get(n))},r.clear=function(){var n=this[Q];u(n),p(n).size&&(o(n),k(n),n.o.clear())},r.values=function(){var n=this[Q];return u(n),o(n),n.o.values()},r.entries=function(){var n=this[Q];return u(n),o(n),n.o.entries()},r.keys=function(){return this.values()},r[V]=function(){return this.values()},r.forEach=function(n,t){for(var r=this.values(),e=r.next();!e.done;)n.call(t,e.value,e.value,this),e=r.next()},n}();m("MapSet",{N:function(n,t){return new f(n,t)},T:function(n,t){return new c(n,t)}})}function J(){N(),C(),T()}function K(n){return n}function $(n){return n}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return"Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return"Unsupported patch operation: "+n},18:function(n){return"The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return"'current' expects a draft, got: "+n},23:function(n){return"'original' expects a draft, got: "+n},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,tn=Object.getOwnPropertyDescriptors||function(n){var t={};return nn(n).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(n,r)})),t},rn={},en={get:function(n,t){if(t===Q)return n;var e=p(n);if(!u(e,t))return function(n,t,r){var e,i=I(t,r);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,t);var i=e[t];return n.I||!r(i)?i:i===z(n.t,t)?(E(n),n.o[t]=R(n.A.h,i,n)):i},has:function(n,t){return t in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,t,r){var e=I(p(n),t);if(null==e?void 0:e.set)return e.set.call(n.k,r),!0;if(!n.P){var i=z(p(n),t),o=null==i?void 0:i[Q];if(o&&o.t===r)return n.o[t]=r,n.D[t]=!1,!0;if(c(r,i)&&(void 0!==r||u(n.t,t)))return!0;E(n),k(n)}return n.o[t]===r&&"number"!=typeof r&&(void 0!==r||t in n.o)||(n.o[t]=r,n.D[t]=!0,!0)},deleteProperty:function(n,t){return void 0!==z(n.t,t)||t in n.t?(n.D[t]=!1,E(n),k(n)):delete n.D[t],n.o&&delete n.o[t],!0},getOwnPropertyDescriptor:function(n,t){var r=p(n),e=Reflect.getOwnPropertyDescriptor(r,t);return e?{writable:!0,configurable:1!==n.i||"length"!==t,enumerable:e.enumerable,value:r[t]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},on={};i(en,(function(n,t){on[n]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),on.deleteProperty=function(t,r){return true&&isNaN(parseInt(r))&&n(13),en.deleteProperty.call(this,t[0],r)},on.set=function(t,r,e){return true&&"length"!==r&&isNaN(parseInt(r))&&n(14),en.set.call(this,t[0],r,e,t[0])};var un=function(){function e(t){var e=this;this.g=B,this.F=!0,this.produce=function(t,i,o){if("function"==typeof t&&"function"!=typeof i){var u=i;i=t;var a=e;return function(n){var t=this;void 0===n&&(n=u);for(var r=arguments.length,e=Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var r;return(r=i).call.apply(r,[t,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),r(t)){var c=w(e),s=R(e,t,void 0),v=!0;try{f=i(s),v=!1}finally{v?O(c):g(c)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw O(c),n})):(j(c,o),P(f,c))}if(!t||"object"!=typeof t){if((f=i(t))===H)return;return void 0===f&&(f=t),e.F&&d(f,!0),f}n(21,t)},this.produceWithPatches=function(n,t){return"function"==typeof n?function(t){for(var r=arguments.length,i=Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return e.produceWithPatches(t,(function(t){return n.apply(void 0,[t].concat(i))}))}:[e.produce(n,t,(function(n,t){r=n,i=t})),r,i];var r,i},"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze)}var i=e.prototype;return i.createDraft=function(e){r(e)||n(8),t(e)&&(e=D(e));var i=w(this),o=R(this,e,void 0);return o[Q].C=!0,g(i),o},i.finishDraft=function(t,r){var e=t&&t[Q]; true&&(e&&e.C||n(9),e.I&&n(10));var i=e.A;return j(i,r),P(void 0,i)},i.setAutoFreeze=function(n){this.F=n},i.setUseProxies=function(t){t&&!B&&n(20),this.g=t},i.applyPatches=function(n,r){var e;for(e=r.length-1;e>=0;e--){var i=r[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}var o=b("Patches").$;return t(n)?o(n,r):this.produce(n,(function(n){return o(n,r.slice(e+1))}))},e}(),an=new un,fn=an.produce,cn=an.produceWithPatches.bind(an),sn=an.setAutoFreeze.bind(an),vn=an.setUseProxies.bind(an),pn=an.applyPatches.bind(an),ln=an.createDraft.bind(an),dn=an.finishDraft.bind(an);/* harmony default export */ __webpack_exports__["default"] = (fn);
//# sourceMappingURL=immer.esm.js.map


/***/ }),

/***/ "../node_modules/is-hotkey/lib/index.js":
/*!**********************************************!*\
  !*** ../node_modules/is-hotkey/lib/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Constants.
 */

var IS_MAC = typeof window != 'undefined' && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);

var MODIFIERS = {
  alt: 'altKey',
  control: 'ctrlKey',
  meta: 'metaKey',
  shift: 'shiftKey'
};

var ALIASES = {
  add: '+',
  break: 'pause',
  cmd: 'meta',
  command: 'meta',
  ctl: 'control',
  ctrl: 'control',
  del: 'delete',
  down: 'arrowdown',
  esc: 'escape',
  ins: 'insert',
  left: 'arrowleft',
  mod: IS_MAC ? 'meta' : 'control',
  opt: 'alt',
  option: 'alt',
  return: 'enter',
  right: 'arrowright',
  space: ' ',
  spacebar: ' ',
  up: 'arrowup',
  win: 'meta',
  windows: 'meta'
};

var CODES = {
  backspace: 8,
  tab: 9,
  enter: 13,
  shift: 16,
  control: 17,
  alt: 18,
  pause: 19,
  capslock: 20,
  escape: 27,
  ' ': 32,
  pageup: 33,
  pagedown: 34,
  end: 35,
  home: 36,
  arrowleft: 37,
  arrowup: 38,
  arrowright: 39,
  arrowdown: 40,
  insert: 45,
  delete: 46,
  meta: 91,
  numlock: 144,
  scrolllock: 145,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  '\'': 222
};

for (var f = 1; f < 20; f++) {
  CODES['f' + f] = 111 + f;
}

/**
 * Is hotkey?
 */

function isHotkey(hotkey, options, event) {
  if (options && !('byKey' in options)) {
    event = options;
    options = null;
  }

  if (!Array.isArray(hotkey)) {
    hotkey = [hotkey];
  }

  var array = hotkey.map(function (string) {
    return parseHotkey(string, options);
  });
  var check = function check(e) {
    return array.some(function (object) {
      return compareHotkey(object, e);
    });
  };
  var ret = event == null ? check : check(event);
  return ret;
}

function isCodeHotkey(hotkey, event) {
  return isHotkey(hotkey, event);
}

function isKeyHotkey(hotkey, event) {
  return isHotkey(hotkey, { byKey: true }, event);
}

/**
 * Parse.
 */

function parseHotkey(hotkey, options) {
  var byKey = options && options.byKey;
  var ret = {};

  // Special case to handle the `+` key since we use it as a separator.
  hotkey = hotkey.replace('++', '+add');
  var values = hotkey.split('+');
  var length = values.length;

  // Ensure that all the modifiers are set to false unless the hotkey has them.

  for (var k in MODIFIERS) {
    ret[MODIFIERS[k]] = false;
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var value = _step.value;

      var optional = value.endsWith('?') && value.length > 1;

      if (optional) {
        value = value.slice(0, -1);
      }

      var name = toKeyName(value);
      var modifier = MODIFIERS[name];

      if (length === 1 || !modifier) {
        if (byKey) {
          ret.key = name;
        } else {
          ret.which = toKeyCode(value);
        }
      }

      if (modifier) {
        ret[modifier] = optional ? null : true;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return ret;
}

/**
 * Compare.
 */

function compareHotkey(object, event) {
  for (var key in object) {
    var expected = object[key];
    var actual = void 0;

    if (expected == null) {
      continue;
    }

    if (key === 'key' && event.key != null) {
      actual = event.key.toLowerCase();
    } else if (key === 'which') {
      actual = expected === 91 && event.which === 93 ? 91 : event.which;
    } else {
      actual = event[key];
    }

    if (actual == null && expected === false) {
      continue;
    }

    if (actual !== expected) {
      return false;
    }
  }

  return true;
}

/**
 * Utils.
 */

function toKeyCode(name) {
  name = toKeyName(name);
  var code = CODES[name] || name.toUpperCase().charCodeAt(0);
  return code;
}

function toKeyName(name) {
  name = name.toLowerCase();
  name = ALIASES[name] || name;
  return name;
}

/**
 * Export.
 */

exports.default = isHotkey;
exports.isHotkey = isHotkey;
exports.isCodeHotkey = isCodeHotkey;
exports.isKeyHotkey = isKeyHotkey;
exports.parseHotkey = parseHotkey;
exports.compareHotkey = compareHotkey;
exports.toKeyCode = toKeyCode;
exports.toKeyName = toKeyName;

/***/ }),

/***/ "../node_modules/is-plain-object/dist/is-plain-object.mjs":
/*!****************************************************************!*\
  !*** ../node_modules/is-plain-object/dist/is-plain-object.mjs ***!
  \****************************************************************/
/*! exports provided: isPlainObject */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  var ctor,prot;

  if (isObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (ctor === undefined) return true;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
}




/***/ }),

/***/ "../node_modules/lodash/_baseTrim.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_baseTrim.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "../node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "../node_modules/lodash/_trimmedEndIndex.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash/_trimmedEndIndex.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "../node_modules/lodash/debounce.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/debounce.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "../node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "../node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "../node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "../node_modules/lodash/now.js":
/*!*************************************!*\
  !*** ../node_modules/lodash/now.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "../node_modules/lodash/throttle.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/throttle.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(/*! ./debounce */ "../node_modules/lodash/debounce.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../node_modules/lodash/isObject.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ "../node_modules/lodash/toNumber.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/toNumber.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "../node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "../node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "../node_modules/scroll-into-view-if-needed/es/index.js":
/*!**************************************************************!*\
  !*** ../node_modules/scroll-into-view-if-needed/es/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! compute-scroll-into-view */ "../node_modules/compute-scroll-into-view/dist/index.module.js");


function isOptionsObject(options) {
  return options === Object(options) && Object.keys(options).length !== 0;
}

function defaultBehavior(actions, behavior) {
  if (behavior === void 0) {
    behavior = 'auto';
  }

  var canSmoothScroll = ('scrollBehavior' in document.body.style);
  actions.forEach(function (_ref) {
    var el = _ref.el,
        top = _ref.top,
        left = _ref.left;

    if (el.scroll && canSmoothScroll) {
      el.scroll({
        top: top,
        left: left,
        behavior: behavior
      });
    } else {
      el.scrollTop = top;
      el.scrollLeft = left;
    }
  });
}

function getOptions(options) {
  if (options === false) {
    return {
      block: 'end',
      inline: 'nearest'
    };
  }

  if (isOptionsObject(options)) {
    return options;
  }

  return {
    block: 'start',
    inline: 'nearest'
  };
}

function scrollIntoView(target, options) {
  var targetIsDetached = !target.ownerDocument.documentElement.contains(target);

  if (isOptionsObject(options) && typeof options.behavior === 'function') {
    return options.behavior(targetIsDetached ? [] : Object(compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__["default"])(target, options));
  }

  if (targetIsDetached) {
    return;
  }

  var computeOptions = getOptions(options);
  return defaultBehavior(Object(compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__["default"])(target, computeOptions), computeOptions.behavior);
}

/* harmony default export */ __webpack_exports__["default"] = (scrollIntoView);

/***/ }),

/***/ "../node_modules/slate-react/dist/index.es.js":
/*!****************************************************!*\
  !*** ../node_modules/slate-react/dist/index.es.js ***!
  \****************************************************/
/*! exports provided: AndroidEditable, DefaultEditable, DefaultElement, DefaultLeaf, DefaultPlaceholder, Editable, ReactEditor, Slate, useEditor, useFocused, useReadOnly, useSelected, useSlate, useSlateStatic, withReact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndroidEditable", function() { return AndroidEditable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultEditable", function() { return Editable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultElement", function() { return DefaultElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLeaf", function() { return DefaultLeaf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultPlaceholder", function() { return DefaultPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editable", function() { return Editable$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactEditor", function() { return ReactEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slate", function() { return Slate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEditor", function() { return useEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFocused", function() { return useFocused; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReadOnly", function() { return useReadOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSelected", function() { return useSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSlate", function() { return useSlate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSlateStatic", function() { return useSlateStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withReact", function() { return withReact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ "../node_modules/slate/dist/index.es.js");
/* harmony import */ var direction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! direction */ "../node_modules/direction/index.js");
/* harmony import */ var direction__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(direction__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/throttle */ "../node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! scroll-into-view-if-needed */ "../node_modules/scroll-into-view-if-needed/es/index.js");
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! is-hotkey */ "../node_modules/is-hotkey/lib/index.js");
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(is_hotkey__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tiny-invariant */ "../node_modules/slate-react/node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);









function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/**
 * Leaf content strings.
 */

var String = props => {
  var {
    isLast,
    leaf,
    parent,
    text
  } = props;
  var editor = useSlateStatic();
  var path = ReactEditor.findPath(editor, text);
  var parentPath = slate__WEBPACK_IMPORTED_MODULE_1__["Path"].parent(path); // COMPAT: Render text inside void nodes with a zero-width space.
  // So the node can contain selection but the text is not visible.

  if (editor.isVoid(parent)) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ZeroWidthString, {
      length: slate__WEBPACK_IMPORTED_MODULE_1__["Node"].string(parent).length
    });
  } // COMPAT: If this is the last text node in an empty block, render a zero-
  // width space that will convert into a line break when copying and pasting
  // to support expected plain text.


  if (leaf.text === '' && parent.children[parent.children.length - 1] === text && !editor.isInline(parent) && slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].string(editor, parentPath) === '') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ZeroWidthString, {
      isLineBreak: true
    });
  } // COMPAT: If the text is empty, it's because it's on the edge of an inline
  // node, so we render a zero-width space so that the selection can be
  // inserted next to it still.


  if (leaf.text === '') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ZeroWidthString, null);
  } // COMPAT: Browsers will collapse trailing new lines at the end of blocks,
  // so we need to add an extra trailing new lines to prevent that.


  if (isLast && leaf.text.slice(-1) === '\n') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextString, {
      isTrailing: true,
      text: leaf.text
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextString, {
    text: leaf.text
  });
};
/**
 * Leaf strings with text in them.
 */


var TextString = props => {
  var {
    text,
    isTrailing = false
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "data-slate-string": true
  }, text, isTrailing ? '\n' : null);
};
/**
 * Leaf strings without text, render as zero-width strings.
 */


var ZeroWidthString = props => {
  var {
    length = 0,
    isLineBreak = false
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "data-slate-zero-width": isLineBreak ? 'n' : 'z',
    "data-slate-length": length
  }, '\uFEFF', isLineBreak ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null) : null);
};

/**
 * Two weak maps that allow us rebuild a path given a node. They are populated
 * at render time such that after a render occurs we can always backtrack.
 */
var NODE_TO_INDEX = new WeakMap();
var NODE_TO_PARENT = new WeakMap();
/**
 * Weak maps that allow us to go between Slate nodes and DOM nodes. These
 * are used to resolve DOM event-related logic into Slate actions.
 */

var EDITOR_TO_WINDOW = new WeakMap();
var EDITOR_TO_ELEMENT = new WeakMap();
var ELEMENT_TO_NODE = new WeakMap();
var KEY_TO_ELEMENT = new WeakMap();
var NODE_TO_ELEMENT = new WeakMap();
var NODE_TO_KEY = new WeakMap();
/**
 * Weak maps for storing editor-related state.
 */

var IS_READ_ONLY = new WeakMap();
var IS_FOCUSED = new WeakMap();
/**
 * Weak map for associating the context `onChange` context with the plugin.
 */

var EDITOR_TO_ON_CHANGE = new WeakMap();
var EDITOR_TO_RESTORE_DOM = new WeakMap();
/**
 * Symbols.
 */

var PLACEHOLDER_SYMBOL = Symbol('placeholder');

// prevent inconsistent rendering by React with IME input

var keyForString = 0;
/**
 * Individual leaves in a text node with unique formatting.
 */

var Leaf = props => {
  var {
    leaf,
    isLast,
    text,
    parent,
    renderPlaceholder,
    renderLeaf = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultLeaf, Object.assign({}, props))
  } = props;
  var placeholderRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    var placeholderEl = placeholderRef === null || placeholderRef === void 0 ? void 0 : placeholderRef.current;
    var editorEl = document.querySelector('[data-slate-editor="true"]');

    if (!placeholderEl || !editorEl) {
      return;
    }

    editorEl.style.minHeight = "".concat(placeholderEl.clientHeight, "px");
    return () => {
      editorEl.style.minHeight = 'auto';
    };
  }, [placeholderRef, leaf]);
  var children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(String, {
    key: keyForString++,
    isLast: isLast,
    leaf: leaf,
    parent: parent,
    text: text
  });

  if (leaf[PLACEHOLDER_SYMBOL]) {
    var placeholderProps = {
      children: leaf.placeholder,
      attributes: {
        'data-slate-placeholder': true,
        style: {
          position: 'absolute',
          pointerEvents: 'none',
          width: '100%',
          maxWidth: '100%',
          display: 'block',
          opacity: '0.333',
          userSelect: 'none',
          textDecoration: 'none'
        },
        contentEditable: false,
        ref: placeholderRef
      }
    };
    children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, renderPlaceholder(placeholderProps), children);
  } // COMPAT: Having the `data-` attributes on these leaf elements ensures that
  // in certain misbehaving browsers they aren't weirdly cloned/destroyed by
  // contenteditable behaviors. (2019/05/08)


  var attributes = {
    'data-slate-leaf': true
  };
  return renderLeaf({
    attributes,
    children,
    leaf,
    text
  });
};

var MemoizedLeaf = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Leaf, (prev, next) => {
  return next.parent === prev.parent && next.isLast === prev.isLast && next.renderLeaf === prev.renderLeaf && next.renderPlaceholder === prev.renderPlaceholder && next.text === prev.text && slate__WEBPACK_IMPORTED_MODULE_1__["Text"].equals(next.leaf, prev.leaf) && next.leaf[PLACEHOLDER_SYMBOL] === prev.leaf[PLACEHOLDER_SYMBOL];
});
var DefaultLeaf = props => {
  var {
    attributes,
    children
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", Object.assign({}, attributes), children);
};

var IS_IOS = typeof navigator !== 'undefined' && typeof window !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var IS_APPLE = typeof navigator !== 'undefined' && /Mac OS X/.test(navigator.userAgent);
var IS_ANDROID = typeof navigator !== 'undefined' && /Android/.test(navigator.userAgent);
var IS_FIREFOX = typeof navigator !== 'undefined' && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
var IS_SAFARI = typeof navigator !== 'undefined' && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent); // "modern" Edge was released at 79.x

var IS_EDGE_LEGACY = typeof navigator !== 'undefined' && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])/i.test(navigator.userAgent);
var IS_CHROME = typeof navigator !== 'undefined' && /Chrome/i.test(navigator.userAgent); // Native `beforeInput` events don't work well with react on Chrome 75
// and older, Chrome 76+ can use `beforeInput` though.

var IS_CHROME_LEGACY = typeof navigator !== 'undefined' && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])/i.test(navigator.userAgent); // Firefox did not support `beforeInput` until `v87`.

var IS_FIREFOX_LEGACY = typeof navigator !== 'undefined' && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])).*/i.test(navigator.userAgent); // Check if DOM is available as React does internally.
// https://github.com/facebook/react/blob/master/packages/shared/ExecutionEnvironment.js

var CAN_USE_DOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined'); // COMPAT: Firefox/Edge Legacy don't support the `beforeinput` event
// Chrome Legacy doesn't support `beforeinput` correctly

var HAS_BEFORE_INPUT_SUPPORT = !IS_CHROME_LEGACY && !IS_EDGE_LEGACY && // globalThis is undefined in older browsers
typeof globalThis !== 'undefined' && globalThis.InputEvent && // @ts-ignore The `getTargetRanges` property isn't recognized.
typeof globalThis.InputEvent.prototype.getTargetRanges === 'function';

/**
 * Prevent warning on SSR by falling back to useEffect when DOM isn't available
 */

var useIsomorphicLayoutEffect = CAN_USE_DOM ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];

var shallowCompare = (obj1, obj2) => Object.keys(obj1).length === Object.keys(obj2).length && Object.keys(obj1).every(key => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]);
/**
 * Check if a list of decorator ranges are equal to another.
 *
 * PERF: this requires the two lists to also have the ranges inside them in the
 * same order, but this is an okay constraint for us since decorations are
 * kept in order, and the odd case where they aren't is okay to re-render for.
 */

var isDecoratorRangeListEqual = (list, another) => {
  if (list.length !== another.length) {
    return false;
  }

  for (var i = 0; i < list.length; i++) {
    var range = list[i];
    var other = another[i];

    var rangeOwnProps = _objectWithoutProperties(range, ["anchor", "focus"]);

    var otherOwnProps = _objectWithoutProperties(other, ["anchor", "focus"]);

    if (!slate__WEBPACK_IMPORTED_MODULE_1__["Range"].equals(range, other) || range[PLACEHOLDER_SYMBOL] !== other[PLACEHOLDER_SYMBOL] || !shallowCompare(rangeOwnProps, otherOwnProps)) {
      return false;
    }
  }

  return true;
};

/**
 * Text.
 */

var Text = props => {
  var {
    decorations,
    isLast,
    parent,
    renderPlaceholder,
    renderLeaf,
    text
  } = props;
  var editor = useSlateStatic();
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var leaves = slate__WEBPACK_IMPORTED_MODULE_1__["Text"].decorations(text, decorations);
  var key = ReactEditor.findKey(editor, text);
  var children = [];

  for (var i = 0; i < leaves.length; i++) {
    var leaf = leaves[i];
    children.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MemoizedLeaf, {
      isLast: isLast && i === leaves.length - 1,
      key: "".concat(key.id, "-").concat(i),
      renderPlaceholder: renderPlaceholder,
      leaf: leaf,
      text: text,
      parent: parent,
      renderLeaf: renderLeaf
    }));
  } // Update element-related weak maps with the DOM element ref.


  useIsomorphicLayoutEffect(() => {
    if (ref.current) {
      KEY_TO_ELEMENT.set(key, ref.current);
      NODE_TO_ELEMENT.set(text, ref.current);
      ELEMENT_TO_NODE.set(ref.current, text);
    } else {
      KEY_TO_ELEMENT.delete(key);
      NODE_TO_ELEMENT.delete(text);
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "data-slate-node": "text",
    ref: ref
  }, children);
};

var MemoizedText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Text, (prev, next) => {
  return next.parent === prev.parent && next.isLast === prev.isLast && next.renderLeaf === prev.renderLeaf && next.text === prev.text && isDecoratorRangeListEqual(next.decorations, prev.decorations);
});

/**
 * A React context for sharing the `selected` state of an element.
 */

var SelectedContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(false);
/**
 * Get the current `selected` state of an element.
 */

var useSelected = () => {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(SelectedContext);
};

/**
 * Element.
 */

var Element = props => {
  var {
    decorations,
    element,
    renderElement = p => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultElement, Object.assign({}, p)),
    renderPlaceholder,
    renderLeaf,
    selection
  } = props;
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var editor = useSlateStatic();
  var readOnly = useReadOnly();
  var isInline = editor.isInline(element);
  var key = ReactEditor.findKey(editor, element);
  var children = useChildren({
    decorations,
    node: element,
    renderElement,
    renderPlaceholder,
    renderLeaf,
    selection
  }); // Attributes that the developer must mix into the element in their
  // custom node renderer component.

  var attributes = {
    'data-slate-node': 'element',
    ref
  };

  if (isInline) {
    attributes['data-slate-inline'] = true;
  } // If it's a block node with inline children, add the proper `dir` attribute
  // for text direction.


  if (!isInline && slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].hasInlines(editor, element)) {
    var text = slate__WEBPACK_IMPORTED_MODULE_1__["Node"].string(element);
    var dir = direction__WEBPACK_IMPORTED_MODULE_2___default()(text);

    if (dir === 'rtl') {
      attributes.dir = dir;
    }
  } // If it's a void node, wrap the children in extra void-specific elements.


  if (slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isVoid(editor, element)) {
    attributes['data-slate-void'] = true;

    if (!readOnly && isInline) {
      attributes.contentEditable = false;
    }

    var Tag = isInline ? 'span' : 'div';
    var [[_text]] = slate__WEBPACK_IMPORTED_MODULE_1__["Node"].texts(element);
    children = readOnly ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, {
      "data-slate-spacer": true,
      style: {
        height: '0',
        color: 'transparent',
        outline: 'none',
        position: 'absolute'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MemoizedText, {
      renderPlaceholder: renderPlaceholder,
      decorations: [],
      isLast: false,
      parent: element,
      text: _text
    }));
    NODE_TO_INDEX.set(_text, 0);
    NODE_TO_PARENT.set(_text, element);
  } // Update element-related weak maps with the DOM element ref.


  useIsomorphicLayoutEffect(() => {
    if (ref.current) {
      KEY_TO_ELEMENT.set(key, ref.current);
      NODE_TO_ELEMENT.set(element, ref.current);
      ELEMENT_TO_NODE.set(ref.current, element);
    } else {
      KEY_TO_ELEMENT.delete(key);
      NODE_TO_ELEMENT.delete(element);
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectedContext.Provider, {
    value: !!selection
  }, renderElement({
    attributes,
    children,
    element
  }));
};

var MemoizedElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Element, (prev, next) => {
  return prev.element === next.element && prev.renderElement === next.renderElement && prev.renderLeaf === next.renderLeaf && isDecoratorRangeListEqual(prev.decorations, next.decorations) && (prev.selection === next.selection || !!prev.selection && !!next.selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].equals(prev.selection, next.selection));
});
/**
 * The default element renderer.
 */

var DefaultElement = props => {
  var {
    attributes,
    children,
    element
  } = props;
  var editor = useSlateStatic();
  var Tag = editor.isInline(element) ? 'span' : 'div';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, Object.assign({}, attributes, {
    style: {
      position: 'relative'
    }
  }), children);
};

/**
 * A React context for sharing the editor object.
 */

var EditorContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
/**
 * Get the current editor object from the React context.
 */

var useSlateStatic = () => {
  var editor = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(EditorContext);

  if (!editor) {
    throw new Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
  }

  return editor;
};

/**
 * A React context for sharing the `decorate` prop of the editable.
 */

var DecorateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(() => []);
/**
 * Get the current `decorate` prop of the editable.
 */

var useDecorate = () => {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(DecorateContext);
};

/**
 * Children.
 */

var useChildren = props => {
  var {
    decorations,
    node,
    renderElement,
    renderPlaceholder,
    renderLeaf,
    selection
  } = props;
  var decorate = useDecorate();
  var editor = useSlateStatic();
  var path = ReactEditor.findPath(editor, node);
  var children = [];
  var isLeafBlock = slate__WEBPACK_IMPORTED_MODULE_1__["Element"].isElement(node) && !editor.isInline(node) && slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].hasInlines(editor, node);

  for (var i = 0; i < node.children.length; i++) {
    var p = path.concat(i);
    var n = node.children[i];
    var key = ReactEditor.findKey(editor, n);
    var range = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].range(editor, p);
    var sel = selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].intersection(range, selection);
    var ds = decorate([n, p]);

    for (var dec of decorations) {
      var d = slate__WEBPACK_IMPORTED_MODULE_1__["Range"].intersection(dec, range);

      if (d) {
        ds.push(d);
      }
    }

    if (slate__WEBPACK_IMPORTED_MODULE_1__["Element"].isElement(n)) {
      children.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MemoizedElement, {
        decorations: ds,
        element: n,
        key: key.id,
        renderElement: renderElement,
        renderPlaceholder: renderPlaceholder,
        renderLeaf: renderLeaf,
        selection: sel
      }));
    } else {
      children.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MemoizedText, {
        decorations: ds,
        key: key.id,
        isLast: isLeafBlock && i === node.children.length - 1,
        parent: node,
        renderPlaceholder: renderPlaceholder,
        renderLeaf: renderLeaf,
        text: n
      }));
    }

    NODE_TO_INDEX.set(n, i);
    NODE_TO_PARENT.set(n, node);
  }

  return children;
};

/**
 * Hotkey mappings for each platform.
 */

var HOTKEYS = {
  bold: 'mod+b',
  compose: ['down', 'left', 'right', 'up', 'backspace', 'enter'],
  moveBackward: 'left',
  moveForward: 'right',
  moveWordBackward: 'ctrl+left',
  moveWordForward: 'ctrl+right',
  deleteBackward: 'shift?+backspace',
  deleteForward: 'shift?+delete',
  extendBackward: 'shift+left',
  extendForward: 'shift+right',
  italic: 'mod+i',
  splitBlock: 'shift?+enter',
  undo: 'mod+z'
};
var APPLE_HOTKEYS = {
  moveLineBackward: 'opt+up',
  moveLineForward: 'opt+down',
  moveWordBackward: 'opt+left',
  moveWordForward: 'opt+right',
  deleteBackward: ['ctrl+backspace', 'ctrl+h'],
  deleteForward: ['ctrl+delete', 'ctrl+d'],
  deleteLineBackward: 'cmd+shift?+backspace',
  deleteLineForward: ['cmd+shift?+delete', 'ctrl+k'],
  deleteWordBackward: 'opt+shift?+backspace',
  deleteWordForward: 'opt+shift?+delete',
  extendLineBackward: 'opt+shift+up',
  extendLineForward: 'opt+shift+down',
  redo: 'cmd+shift+z',
  transposeCharacter: 'ctrl+t'
};
var WINDOWS_HOTKEYS = {
  deleteWordBackward: 'ctrl+shift?+backspace',
  deleteWordForward: 'ctrl+shift?+delete',
  redo: ['ctrl+y', 'ctrl+shift+z']
};
/**
 * Create a platform-aware hotkey checker.
 */

var create = key => {
  var generic = HOTKEYS[key];
  var apple = APPLE_HOTKEYS[key];
  var windows = WINDOWS_HOTKEYS[key];
  var isGeneric = generic && Object(is_hotkey__WEBPACK_IMPORTED_MODULE_5__["isKeyHotkey"])(generic);
  var isApple = apple && Object(is_hotkey__WEBPACK_IMPORTED_MODULE_5__["isKeyHotkey"])(apple);
  var isWindows = windows && Object(is_hotkey__WEBPACK_IMPORTED_MODULE_5__["isKeyHotkey"])(windows);
  return event => {
    if (isGeneric && isGeneric(event)) return true;
    if (IS_APPLE && isApple && isApple(event)) return true;
    if (!IS_APPLE && isWindows && isWindows(event)) return true;
    return false;
  };
};
/**
 * Hotkeys.
 */


var Hotkeys = {
  isBold: create('bold'),
  isCompose: create('compose'),
  isMoveBackward: create('moveBackward'),
  isMoveForward: create('moveForward'),
  isDeleteBackward: create('deleteBackward'),
  isDeleteForward: create('deleteForward'),
  isDeleteLineBackward: create('deleteLineBackward'),
  isDeleteLineForward: create('deleteLineForward'),
  isDeleteWordBackward: create('deleteWordBackward'),
  isDeleteWordForward: create('deleteWordForward'),
  isExtendBackward: create('extendBackward'),
  isExtendForward: create('extendForward'),
  isExtendLineBackward: create('extendLineBackward'),
  isExtendLineForward: create('extendLineForward'),
  isItalic: create('italic'),
  isMoveLineBackward: create('moveLineBackward'),
  isMoveLineForward: create('moveLineForward'),
  isMoveWordBackward: create('moveWordBackward'),
  isMoveWordForward: create('moveWordForward'),
  isRedo: create('redo'),
  isSplitBlock: create('splitBlock'),
  isTransposeCharacter: create('transposeCharacter'),
  isUndo: create('undo')
};

/**
 * A React context for sharing the `readOnly` state of the editor.
 */

var ReadOnlyContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(false);
/**
 * Get the current `readOnly` state of the editor.
 */

var useReadOnly = () => {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ReadOnlyContext);
};

/**
 * A React context for sharing the editor object, in a way that re-renders the
 * context whenever changes occur.
 */

var SlateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
/**
 * Get the current editor object from the React context.
 */

var useSlate = () => {
  var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(SlateContext);

  if (!context) {
    throw new Error("The `useSlate` hook must be used inside the <SlateProvider> component's context.");
  }

  var [editor] = context;
  return editor;
};

/**
 * Types.
 */
/**
 * Returns the host window of a DOM node
 */

var getDefaultView = value => {
  return value && value.ownerDocument && value.ownerDocument.defaultView || null;
};
/**
 * Check if a DOM node is a comment node.
 */

var isDOMComment = value => {
  return isDOMNode(value) && value.nodeType === 8;
};
/**
 * Check if a DOM node is an element node.
 */

var isDOMElement = value => {
  return isDOMNode(value) && value.nodeType === 1;
};
/**
 * Check if a value is a DOM node.
 */

var isDOMNode = value => {
  var window = getDefaultView(value);
  return !!window && value instanceof window.Node;
};
/**
 * Check if a value is a DOM selection.
 */

var isDOMSelection = value => {
  var window = value && value.anchorNode && getDefaultView(value.anchorNode);
  return !!window && value instanceof window.Selection;
};
/**
 * Check if a DOM node is an element node.
 */

var isDOMText = value => {
  return isDOMNode(value) && value.nodeType === 3;
};
/**
 * Checks whether a paste event is a plaintext-only event.
 */

var isPlainTextOnlyPaste = event => {
  return event.clipboardData && event.clipboardData.getData('text/plain') !== '' && event.clipboardData.types.length === 1;
};
/**
 * Normalize a DOM point so that it always refers to a text node.
 */

var normalizeDOMPoint = domPoint => {
  var [node, offset] = domPoint; // If it's an element node, its offset refers to the index of its children
  // including comment nodes, so try to find the right text child node.

  if (isDOMElement(node) && node.childNodes.length) {
    var isLast = offset === node.childNodes.length;
    var index = isLast ? offset - 1 : offset;
    [node, index] = getEditableChildAndIndex(node, index, isLast ? 'backward' : 'forward'); // If the editable child found is in front of input offset, we instead seek to its end

    isLast = index < offset; // If the node has children, traverse until we have a leaf node. Leaf nodes
    // can be either text nodes, or other void DOM nodes.

    while (isDOMElement(node) && node.childNodes.length) {
      var i = isLast ? node.childNodes.length - 1 : 0;
      node = getEditableChild(node, i, isLast ? 'backward' : 'forward');
    } // Determine the new offset inside the text node.


    offset = isLast && node.textContent != null ? node.textContent.length : 0;
  } // Return the node and offset.


  return [node, offset];
};
/**
 * Determines wether the active element is nested within a shadowRoot
 */

var hasShadowRoot = () => {
  return !!(window.document.activeElement && window.document.activeElement.shadowRoot);
};
/**
 * Get the nearest editable child and index at `index` in a `parent`, preferring
 * `direction`.
 */

var getEditableChildAndIndex = (parent, index, direction) => {
  var {
    childNodes
  } = parent;
  var child = childNodes[index];
  var i = index;
  var triedForward = false;
  var triedBackward = false; // While the child is a comment node, or an element node with no children,
  // keep iterating to find a sibling non-void, non-comment node.

  while (isDOMComment(child) || isDOMElement(child) && child.childNodes.length === 0 || isDOMElement(child) && child.getAttribute('contenteditable') === 'false') {
    if (triedForward && triedBackward) {
      break;
    }

    if (i >= childNodes.length) {
      triedForward = true;
      i = index - 1;
      direction = 'backward';
      continue;
    }

    if (i < 0) {
      triedBackward = true;
      i = index + 1;
      direction = 'forward';
      continue;
    }

    child = childNodes[i];
    index = i;
    i += direction === 'forward' ? 1 : -1;
  }

  return [child, index];
};
/**
 * Get the nearest editable child at `index` in a `parent`, preferring
 * `direction`.
 */

var getEditableChild = (parent, index, direction) => {
  var [child] = getEditableChildAndIndex(parent, index, direction);
  return child;
};
/**
 * Get a plaintext representation of the content of a node, accounting for block
 * elements which get a newline appended.
 *
 * The domNode must be attached to the DOM.
 */

var getPlainText = domNode => {
  var text = '';

  if (isDOMText(domNode) && domNode.nodeValue) {
    return domNode.nodeValue;
  }

  if (isDOMElement(domNode)) {
    for (var childNode of Array.from(domNode.childNodes)) {
      text += getPlainText(childNode);
    }

    var display = getComputedStyle(domNode).getPropertyValue('display');

    if (display === 'block' || display === 'list' || domNode.tagName === 'BR') {
      text += '\n';
    }
  }

  return text;
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Children = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, useChildren(props));
/**
 * Editable.
 */


var Editable = props => {
  var {
    autoFocus,
    decorate = defaultDecorate,
    onDOMBeforeInput: propsOnDOMBeforeInput,
    placeholder,
    readOnly = false,
    renderElement,
    renderLeaf,
    renderPlaceholder = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultPlaceholder, Object.assign({}, props)),
    scrollSelectionIntoView = defaultScrollSelectionIntoView,
    style = {},
    as: Component = 'div'
  } = props,
      attributes = _objectWithoutProperties(props, ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as"]);

  var editor = useSlate(); // Rerender editor when composition status changed

  var [isComposing, setIsComposing] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null); // Update internal state on each render.

  IS_READ_ONLY.set(editor, readOnly); // Keep track of some state for the event handler logic.

  var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    isComposing: false,
    isDraggingInternally: false,
    isUpdatingSelection: false,
    latestElement: null
  }), []); // Whenever the editor updates...

  useIsomorphicLayoutEffect(() => {
    // Update element-related weak maps with the DOM element ref.
    var window;

    if (ref.current && (window = getDefaultView(ref.current))) {
      EDITOR_TO_WINDOW.set(editor, window);
      EDITOR_TO_ELEMENT.set(editor, ref.current);
      NODE_TO_ELEMENT.set(editor, ref.current);
      ELEMENT_TO_NODE.set(ref.current, editor);
    } else {
      NODE_TO_ELEMENT.delete(editor);
    } // Make sure the DOM selection state is in sync.


    var {
      selection
    } = editor;
    var root = ReactEditor.findDocumentOrShadowRoot(editor);
    var domSelection = root.getSelection();

    if (state.isComposing || !domSelection || !ReactEditor.isFocused(editor)) {
      return;
    }

    var hasDomSelection = domSelection.type !== 'None'; // If the DOM selection is properly unset, we're done.

    if (!selection && !hasDomSelection) {
      return;
    } // verify that the dom selection is in the editor


    var editorElement = EDITOR_TO_ELEMENT.get(editor);
    var hasDomSelectionInEditor = false;

    if (editorElement.contains(domSelection.anchorNode) && editorElement.contains(domSelection.focusNode)) {
      hasDomSelectionInEditor = true;
    } // If the DOM selection is in the editor and the editor selection is already correct, we're done.


    if (hasDomSelection && hasDomSelectionInEditor && selection) {
      var slateRange = ReactEditor.toSlateRange(editor, domSelection, {
        exactMatch: true
      });

      if (slateRange && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].equals(slateRange, selection)) {
        return;
      }
    } // when <Editable/> is being controlled through external value
    // then its children might just change - DOM responds to it on its own
    // but Slate's value is not being updated through any operation
    // and thus it doesn't transform selection on its own


    if (selection && !ReactEditor.hasRange(editor, selection)) {
      editor.selection = ReactEditor.toSlateRange(editor, domSelection, {
        exactMatch: false
      });
      return;
    } // Otherwise the DOM selection is out of sync, so update it.


    state.isUpdatingSelection = true;
    var newDomRange = selection && ReactEditor.toDOMRange(editor, selection);

    if (newDomRange) {
      if (slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isBackward(selection)) {
        domSelection.setBaseAndExtent(newDomRange.endContainer, newDomRange.endOffset, newDomRange.startContainer, newDomRange.startOffset);
      } else {
        domSelection.setBaseAndExtent(newDomRange.startContainer, newDomRange.startOffset, newDomRange.endContainer, newDomRange.endOffset);
      }

      scrollSelectionIntoView(editor, newDomRange);
    } else {
      domSelection.removeAllRanges();
    }

    setTimeout(() => {
      // COMPAT: In Firefox, it's not enough to create a range, you also need
      // to focus the contenteditable element too. (2016/11/16)
      if (newDomRange && IS_FIREFOX) {
        var el = ReactEditor.toDOMNode(editor, editor);
        el.focus();
      }

      state.isUpdatingSelection = false;
    });
  }); // The autoFocus TextareaHTMLAttribute doesn't do anything on a div, so it
  // needs to be manually focused.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (ref.current && autoFocus) {
      ref.current.focus();
    }
  }, [autoFocus]); // Listen on the native `beforeinput` event to get real "Level 2" events. This
  // is required because React's `beforeinput` is fake and never really attaches
  // to the real event sadly. (2019/11/01)
  // https://github.com/facebook/react/issues/11211

  var onDOMBeforeInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
    if (!readOnly && hasEditableTarget(editor, event.target) && !isDOMEventHandled(event, propsOnDOMBeforeInput)) {
      var {
        selection
      } = editor;
      var {
        inputType: type
      } = event;
      var data = event.dataTransfer || event.data || undefined; // These two types occur while a user is composing text and can't be
      // cancelled. Let them through and wait for the composition to end.

      if (type === 'insertCompositionText' || type === 'deleteCompositionText') {
        return;
      }

      event.preventDefault(); // COMPAT: For the deleting forward/backward input types we don't want
      // to change the selection because it is the range that will be deleted,
      // and those commands determine that for themselves.

      if (!type.startsWith('delete') || type.startsWith('deleteBy')) {
        var [targetRange] = event.getTargetRanges();

        if (targetRange) {
          var range = ReactEditor.toSlateRange(editor, targetRange, {
            exactMatch: false
          });

          if (!selection || !slate__WEBPACK_IMPORTED_MODULE_1__["Range"].equals(selection, range)) {
            slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].select(editor, range);
          }
        }
      } // COMPAT: If the selection is expanded, even if the command seems like
      // a delete forward/backward command it should delete the selection.


      if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection) && type.startsWith('delete')) {
        var direction = type.endsWith('Backward') ? 'backward' : 'forward';
        slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor, {
          direction
        });
        return;
      }

      switch (type) {
        case 'deleteByComposition':
        case 'deleteByCut':
        case 'deleteByDrag':
          {
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor);
            break;
          }

        case 'deleteContent':
        case 'deleteContentForward':
          {
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteForward(editor);
            break;
          }

        case 'deleteContentBackward':
          {
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteBackward(editor);
            break;
          }

        case 'deleteEntireSoftLine':
          {
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteBackward(editor, {
              unit: 'line'
            });
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteForward(editor, {
              unit: 'line'
            });
            break;
          }

        case 'deleteHardLineBackward':
          {
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteBackward(editor, {
              unit: 'block'
            });
            break;
          }

        case 'deleteSoftLineBackward':
          {
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteBackward(editor, {
              unit: 'line'
            });
            break;
          }

        case 'deleteHardLineForward':
          {
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteForward(editor, {
              unit: 'block'
            });
            break;
          }

        case 'deleteSoftLineForward':
          {
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteForward(editor, {
              unit: 'line'
            });
            break;
          }

        case 'deleteWordBackward':
          {
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteBackward(editor, {
              unit: 'word'
            });
            break;
          }

        case 'deleteWordForward':
          {
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteForward(editor, {
              unit: 'word'
            });
            break;
          }

        case 'insertLineBreak':
        case 'insertParagraph':
          {
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].insertBreak(editor);
            break;
          }

        case 'insertFromComposition':
        case 'insertFromDrop':
        case 'insertFromPaste':
        case 'insertFromYank':
        case 'insertReplacementText':
        case 'insertText':
          {
            if (type === 'insertFromComposition') {
              // COMPAT: in Safari, `compositionend` is dispatched after the
              // `beforeinput` for "insertFromComposition". But if we wait for it
              // then we will abort because we're still composing and the selection
              // won't be updated properly.
              // https://www.w3.org/TR/input-events-2/
              state.isComposing && setIsComposing(false);
              state.isComposing = false;
            }

            var window = ReactEditor.getWindow(editor);

            if (data instanceof window.DataTransfer) {
              ReactEditor.insertData(editor, data);
            } else if (typeof data === 'string') {
              slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].insertText(editor, data);
            }

            break;
          }
      }
    }
  }, [readOnly, propsOnDOMBeforeInput]); // Attach a native DOM event handler for `beforeinput` events, because React's
  // built-in `onBeforeInput` is actually a leaky polyfill that doesn't expose
  // real `beforeinput` events sadly... (2019/11/04)
  // https://github.com/facebook/react/issues/11211

  useIsomorphicLayoutEffect(() => {
    if (ref.current && HAS_BEFORE_INPUT_SUPPORT) {
      // @ts-ignore The `beforeinput` event isn't recognized.
      ref.current.addEventListener('beforeinput', onDOMBeforeInput);
    }

    return () => {
      if (ref.current && HAS_BEFORE_INPUT_SUPPORT) {
        // @ts-ignore The `beforeinput` event isn't recognized.
        ref.current.removeEventListener('beforeinput', onDOMBeforeInput);
      }
    };
  }, [onDOMBeforeInput]); // Listen on the native `selectionchange` event to be able to update any time
  // the selection changes. This is required because React's `onSelect` is leaky
  // and non-standard so it doesn't fire until after a selection has been
  // released. This causes issues in situations where another change happens
  // while a selection is being dragged.

  var onDOMSelectionChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default()(() => {
    if (!readOnly && !state.isComposing && !state.isUpdatingSelection && !state.isDraggingInternally) {
      var root = ReactEditor.findDocumentOrShadowRoot(editor);
      var {
        activeElement
      } = root;
      var el = ReactEditor.toDOMNode(editor, editor);
      var domSelection = root.getSelection();

      if (activeElement === el) {
        state.latestElement = activeElement;
        IS_FOCUSED.set(editor, true);
      } else {
        IS_FOCUSED.delete(editor);
      }

      if (!domSelection) {
        return slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].deselect(editor);
      }

      var {
        anchorNode,
        focusNode
      } = domSelection;
      var anchorNodeSelectable = hasEditableTarget(editor, anchorNode) || isTargetInsideVoid(editor, anchorNode);
      var focusNodeSelectable = hasEditableTarget(editor, focusNode) || isTargetInsideVoid(editor, focusNode);

      if (anchorNodeSelectable && focusNodeSelectable) {
        var range = ReactEditor.toSlateRange(editor, domSelection, {
          exactMatch: false
        });
        slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].select(editor, range);
      } else {
        slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].deselect(editor);
      }
    }
  }, 100), [readOnly]); // Attach a native DOM event handler for `selectionchange`, because React's
  // built-in `onSelect` handler doesn't fire for all selection changes. It's a
  // leaky polyfill that only fires on keypresses or clicks. Instead, we want to
  // fire for any change to the selection inside the editor. (2019/11/04)
  // https://github.com/facebook/react/issues/5785

  useIsomorphicLayoutEffect(() => {
    var window = ReactEditor.getWindow(editor);
    window.document.addEventListener('selectionchange', onDOMSelectionChange);
    return () => {
      window.document.removeEventListener('selectionchange', onDOMSelectionChange);
    };
  }, [onDOMSelectionChange]);
  var decorations = decorate([editor, []]);

  if (placeholder && editor.children.length === 1 && Array.from(slate__WEBPACK_IMPORTED_MODULE_1__["Node"].texts(editor)).length === 1 && slate__WEBPACK_IMPORTED_MODULE_1__["Node"].string(editor) === '' && !isComposing) {
    var start = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].start(editor, []);
    decorations.push({
      [PLACEHOLDER_SYMBOL]: true,
      placeholder,
      anchor: start,
      focus: start
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReadOnlyContext.Provider, {
    value: readOnly
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DecorateContext.Provider, {
    value: decorate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component // COMPAT: The Grammarly Chrome extension works by changing the DOM
  // out from under `contenteditable` elements, which leads to weird
  // behaviors so we have to disable it like editor. (2017/04/24)
  , Object.assign({
    "data-gramm": false,
    role: readOnly ? undefined : 'textbox'
  }, attributes, {
    // COMPAT: Certain browsers don't support the `beforeinput` event, so we'd
    // have to use hacks to make these replacement-based features work.
    spellCheck: !HAS_BEFORE_INPUT_SUPPORT ? false : attributes.spellCheck,
    autoCorrect: !HAS_BEFORE_INPUT_SUPPORT ? 'false' : attributes.autoCorrect,
    autoCapitalize: !HAS_BEFORE_INPUT_SUPPORT ? 'false' : attributes.autoCapitalize,
    "data-slate-editor": true,
    "data-slate-node": "value",
    contentEditable: readOnly ? undefined : true,
    suppressContentEditableWarning: true,
    ref: ref,
    style: _objectSpread({
      // Allow positioning relative to the editable element.
      position: 'relative',
      // Prevent the default outline styles.
      outline: 'none',
      // Preserve adjacent whitespace and new lines.
      whiteSpace: 'pre-wrap',
      // Allow words to break if they are too long.
      wordWrap: 'break-word'
    }, style),
    onBeforeInput: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      // COMPAT: Certain browsers don't support the `beforeinput` event, so we
      // fall back to React's leaky polyfill instead just for it. It
      // only works for the `insertText` input type.
      if (!HAS_BEFORE_INPUT_SUPPORT && !readOnly && !isEventHandled(event, attributes.onBeforeInput) && hasEditableTarget(editor, event.target)) {
        event.preventDefault();

        if (!state.isComposing) {
          var text = event.data;
          slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].insertText(editor, text);
        }
      }
    }, [readOnly]),
    onBlur: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (readOnly || state.isUpdatingSelection || !hasEditableTarget(editor, event.target) || isEventHandled(event, attributes.onBlur)) {
        return;
      } // COMPAT: If the current `activeElement` is still the previous
      // one, this is due to the window being blurred when the tab
      // itself becomes unfocused, so we want to abort early to allow to
      // editor to stay focused when the tab becomes focused again.


      var root = ReactEditor.findDocumentOrShadowRoot(editor);

      if (state.latestElement === root.activeElement) {
        return;
      }

      var {
        relatedTarget
      } = event;
      var el = ReactEditor.toDOMNode(editor, editor); // COMPAT: The event should be ignored if the focus is returning
      // to the editor from an embedded editable element (eg. an <input>
      // element inside a void node).

      if (relatedTarget === el) {
        return;
      } // COMPAT: The event should be ignored if the focus is moving from
      // the editor to inside a void node's spacer element.


      if (isDOMElement(relatedTarget) && relatedTarget.hasAttribute('data-slate-spacer')) {
        return;
      } // COMPAT: The event should be ignored if the focus is moving to a
      // non- editable section of an element that isn't a void node (eg.
      // a list item of the check list example).


      if (relatedTarget != null && isDOMNode(relatedTarget) && ReactEditor.hasDOMNode(editor, relatedTarget)) {
        var node = ReactEditor.toSlateNode(editor, relatedTarget);

        if (slate__WEBPACK_IMPORTED_MODULE_1__["Element"].isElement(node) && !editor.isVoid(node)) {
          return;
        }
      } // COMPAT: Safari doesn't always remove the selection even if the content-
      // editable element no longer has focus. Refer to:
      // https://stackoverflow.com/questions/12353247/force-contenteditable-div-to-stop-accepting-input-after-it-loses-focus-under-web


      if (IS_SAFARI) {
        var domSelection = root.getSelection();
        domSelection === null || domSelection === void 0 ? void 0 : domSelection.removeAllRanges();
      }

      IS_FOCUSED.delete(editor);
    }, [readOnly, attributes.onBlur]),
    onClick: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (!readOnly && hasTarget(editor, event.target) && !isEventHandled(event, attributes.onClick) && isDOMNode(event.target)) {
        var node = ReactEditor.toSlateNode(editor, event.target);
        var path = ReactEditor.findPath(editor, node);

        var _start = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].start(editor, path);

        var end = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].end(editor, path);
        var startVoid = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].void(editor, {
          at: _start
        });
        var endVoid = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].void(editor, {
          at: end
        });

        if (startVoid && endVoid && slate__WEBPACK_IMPORTED_MODULE_1__["Path"].equals(startVoid[1], endVoid[1])) {
          var range = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].range(editor, _start);
          slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].select(editor, range);
        }
      }
    }, [readOnly, attributes.onClick]),
    onCompositionEnd: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCompositionEnd)) {
        state.isComposing && setIsComposing(false);
        state.isComposing = false; // COMPAT: In Chrome, `beforeinput` events for compositions
        // aren't correct and never fire the "insertFromComposition"
        // type that we need. So instead, insert whenever a composition
        // ends since it will already have been committed to the DOM.

        if (!IS_SAFARI && !IS_FIREFOX_LEGACY && !IS_IOS && event.data) {
          slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].insertText(editor, event.data);
        }
      }
    }, [attributes.onCompositionEnd]),
    onCompositionUpdate: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCompositionUpdate)) {
        !state.isComposing && setIsComposing(true);
        state.isComposing = true;
      }
    }, [attributes.onCompositionUpdate]),
    onCompositionStart: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCompositionStart)) {
        var {
          selection
        } = editor;

        if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection)) {
          slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor);
        }
      }
    }, [attributes.onCompositionStart]),
    onCopy: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCopy)) {
        event.preventDefault();
        ReactEditor.setFragmentData(editor, event.clipboardData);
      }
    }, [attributes.onCopy]),
    onCut: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (!readOnly && hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCut)) {
        event.preventDefault();
        ReactEditor.setFragmentData(editor, event.clipboardData);
        var {
          selection
        } = editor;

        if (selection) {
          if (slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection)) {
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor);
          } else {
            var node = slate__WEBPACK_IMPORTED_MODULE_1__["Node"].parent(editor, selection.anchor.path);

            if (slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isVoid(editor, node)) {
              slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].delete(editor);
            }
          }
        }
      }
    }, [readOnly, attributes.onCut]),
    onDragOver: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDragOver)) {
        // Only when the target is void, call `preventDefault` to signal
        // that drops are allowed. Editable content is droppable by
        // default, and calling `preventDefault` hides the cursor.
        var node = ReactEditor.toSlateNode(editor, event.target);

        if (slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isVoid(editor, node)) {
          event.preventDefault();
        }
      }
    }, [attributes.onDragOver]),
    onDragStart: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDragStart)) {
        var node = ReactEditor.toSlateNode(editor, event.target);
        var path = ReactEditor.findPath(editor, node);
        var voidMatch = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isVoid(editor, node) || slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].void(editor, {
          at: path,
          voids: true
        }); // If starting a drag on a void node, make sure it is selected
        // so that it shows up in the selection's fragment.

        if (voidMatch) {
          var range = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].range(editor, path);
          slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].select(editor, range);
        }

        state.isDraggingInternally = true;
        ReactEditor.setFragmentData(editor, event.dataTransfer);
      }
    }, [attributes.onDragStart]),
    onDrop: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (!readOnly && hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDrop)) {
        event.preventDefault(); // Keep a reference to the dragged range before updating selection

        var draggedRange = editor.selection; // Find the range where the drop happened

        var range = ReactEditor.findEventRange(editor, event);
        var data = event.dataTransfer;
        slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].select(editor, range);

        if (state.isDraggingInternally) {
          if (draggedRange) {
            slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].delete(editor, {
              at: draggedRange
            });
          }

          state.isDraggingInternally = false;
        }

        ReactEditor.insertData(editor, data); // When dragging from another source into the editor, it's possible
        // that the current editor does not have focus.

        if (!ReactEditor.isFocused(editor)) {
          ReactEditor.focus(editor);
        }
      }
    }, [readOnly, attributes.onDrop]),
    onDragEnd: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      // When dropping on a different droppable element than the current editor,
      // `onDrop` is not called. So we need to clean up in `onDragEnd` instead.
      // Note: `onDragEnd` is only called when `onDrop` is not called
      if (!readOnly && state.isDraggingInternally && hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDragEnd)) {
        state.isDraggingInternally = false;
      }
    }, [readOnly, attributes.onDragEnd]),
    onFocus: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (!readOnly && !state.isUpdatingSelection && hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onFocus)) {
        var el = ReactEditor.toDOMNode(editor, editor);
        var root = ReactEditor.findDocumentOrShadowRoot(editor);
        state.latestElement = root.activeElement; // COMPAT: If the editor has nested editable elements, the focus
        // can go to them. In Firefox, this must be prevented because it
        // results in issues with keyboard navigation. (2017/03/30)

        if (IS_FIREFOX && event.target !== el) {
          el.focus();
          return;
        }

        IS_FOCUSED.set(editor, true);
      }
    }, [readOnly, attributes.onFocus]),
    onKeyDown: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (!readOnly && hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onKeyDown)) {
        var {
          nativeEvent
        } = event;
        var {
          selection
        } = editor;
        var element = editor.children[selection !== null ? selection.focus.path[0] : 0];
        var isRTL = direction__WEBPACK_IMPORTED_MODULE_2___default()(slate__WEBPACK_IMPORTED_MODULE_1__["Node"].string(element)) === 'rtl'; // COMPAT: Since we prevent the default behavior on
        // `beforeinput` events, the browser doesn't think there's ever
        // any history stack to undo or redo, so we have to manage these
        // hotkeys ourselves. (2019/11/06)

        if (Hotkeys.isRedo(nativeEvent)) {
          event.preventDefault();
          var maybeHistoryEditor = editor;

          if (typeof maybeHistoryEditor.redo === 'function') {
            maybeHistoryEditor.redo();
          }

          return;
        }

        if (Hotkeys.isUndo(nativeEvent)) {
          event.preventDefault();
          var _maybeHistoryEditor = editor;

          if (typeof _maybeHistoryEditor.undo === 'function') {
            _maybeHistoryEditor.undo();
          }

          return;
        } // COMPAT: Certain browsers don't handle the selection updates
        // properly. In Chrome, the selection isn't properly extended.
        // And in Firefox, the selection isn't properly collapsed.
        // (2017/10/17)


        if (Hotkeys.isMoveLineBackward(nativeEvent)) {
          event.preventDefault();
          slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].move(editor, {
            unit: 'line',
            reverse: true
          });
          return;
        }

        if (Hotkeys.isMoveLineForward(nativeEvent)) {
          event.preventDefault();
          slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].move(editor, {
            unit: 'line'
          });
          return;
        }

        if (Hotkeys.isExtendLineBackward(nativeEvent)) {
          event.preventDefault();
          slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].move(editor, {
            unit: 'line',
            edge: 'focus',
            reverse: true
          });
          return;
        }

        if (Hotkeys.isExtendLineForward(nativeEvent)) {
          event.preventDefault();
          slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].move(editor, {
            unit: 'line',
            edge: 'focus'
          });
          return;
        } // COMPAT: If a void node is selected, or a zero-width text node
        // adjacent to an inline is selected, we need to handle these
        // hotkeys manually because browsers won't be able to skip over
        // the void node with the zero-width space not being an empty
        // string.


        if (Hotkeys.isMoveBackward(nativeEvent)) {
          event.preventDefault();

          if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isCollapsed(selection)) {
            slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].move(editor, {
              reverse: !isRTL
            });
          } else {
            slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].collapse(editor, {
              edge: 'start'
            });
          }

          return;
        }

        if (Hotkeys.isMoveForward(nativeEvent)) {
          event.preventDefault();

          if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isCollapsed(selection)) {
            slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].move(editor, {
              reverse: isRTL
            });
          } else {
            slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].collapse(editor, {
              edge: 'end'
            });
          }

          return;
        }

        if (Hotkeys.isMoveWordBackward(nativeEvent)) {
          event.preventDefault();

          if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection)) {
            slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].collapse(editor, {
              edge: 'focus'
            });
          }

          slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].move(editor, {
            unit: 'word',
            reverse: !isRTL
          });
          return;
        }

        if (Hotkeys.isMoveWordForward(nativeEvent)) {
          event.preventDefault();

          if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection)) {
            slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].collapse(editor, {
              edge: 'focus'
            });
          }

          slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].move(editor, {
            unit: 'word',
            reverse: isRTL
          });
          return;
        } // COMPAT: Certain browsers don't support the `beforeinput` event, so we
        // fall back to guessing at the input intention for hotkeys.
        // COMPAT: In iOS, some of these hotkeys are handled in the


        if (!HAS_BEFORE_INPUT_SUPPORT) {
          // We don't have a core behavior for these, but they change the
          // DOM if we don't prevent them, so we have to.
          if (Hotkeys.isBold(nativeEvent) || Hotkeys.isItalic(nativeEvent) || Hotkeys.isTransposeCharacter(nativeEvent)) {
            event.preventDefault();
            return;
          }

          if (Hotkeys.isSplitBlock(nativeEvent)) {
            event.preventDefault();
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].insertBreak(editor);
            return;
          }

          if (Hotkeys.isDeleteBackward(nativeEvent)) {
            event.preventDefault();

            if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection)) {
              slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor, {
                direction: 'backward'
              });
            } else {
              slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteBackward(editor);
            }

            return;
          }

          if (Hotkeys.isDeleteForward(nativeEvent)) {
            event.preventDefault();

            if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection)) {
              slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor, {
                direction: 'forward'
              });
            } else {
              slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteForward(editor);
            }

            return;
          }

          if (Hotkeys.isDeleteLineBackward(nativeEvent)) {
            event.preventDefault();

            if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection)) {
              slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor, {
                direction: 'backward'
              });
            } else {
              slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteBackward(editor, {
                unit: 'line'
              });
            }

            return;
          }

          if (Hotkeys.isDeleteLineForward(nativeEvent)) {
            event.preventDefault();

            if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection)) {
              slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor, {
                direction: 'forward'
              });
            } else {
              slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteForward(editor, {
                unit: 'line'
              });
            }

            return;
          }

          if (Hotkeys.isDeleteWordBackward(nativeEvent)) {
            event.preventDefault();

            if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection)) {
              slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor, {
                direction: 'backward'
              });
            } else {
              slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteBackward(editor, {
                unit: 'word'
              });
            }

            return;
          }

          if (Hotkeys.isDeleteWordForward(nativeEvent)) {
            event.preventDefault();

            if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection)) {
              slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor, {
                direction: 'forward'
              });
            } else {
              slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteForward(editor, {
                unit: 'word'
              });
            }

            return;
          }
        } else {
          if (IS_CHROME || IS_SAFARI) {
            // COMPAT: Chrome and Safari support `beforeinput` event but do not fire
            // an event when deleting backwards in a selected void inline node
            if (selection && (Hotkeys.isDeleteBackward(nativeEvent) || Hotkeys.isDeleteForward(nativeEvent)) && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isCollapsed(selection)) {
              var currentNode = slate__WEBPACK_IMPORTED_MODULE_1__["Node"].parent(editor, selection.anchor.path);

              if (slate__WEBPACK_IMPORTED_MODULE_1__["Element"].isElement(currentNode) && slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isVoid(editor, currentNode) && slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isInline(editor, currentNode)) {
                event.preventDefault();
                slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].delete(editor, {
                  unit: 'block'
                });
                return;
              }
            }
          }
        }
      }
    }, [readOnly, attributes.onKeyDown]),
    onPaste: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (!readOnly && hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onPaste)) {
        // COMPAT: Certain browsers don't support the `beforeinput` event, so we
        // fall back to React's `onPaste` here instead.
        // COMPAT: Firefox, Chrome and Safari don't emit `beforeinput` events
        // when "paste without formatting" is used, so fallback. (2020/02/20)
        if (!HAS_BEFORE_INPUT_SUPPORT || isPlainTextOnlyPaste(event.nativeEvent)) {
          event.preventDefault();
          ReactEditor.insertData(editor, event.clipboardData);
        }
      }
    }, [readOnly, attributes.onPaste])
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Children, {
    decorations: decorations,
    node: editor,
    renderElement: renderElement,
    renderPlaceholder: renderPlaceholder,
    renderLeaf: renderLeaf,
    selection: editor.selection
  }))));
};
/**
 * The default placeholder element
 */

var DefaultPlaceholder = (_ref) => {
  var {
    attributes,
    children
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", Object.assign({}, attributes), children);
};
/**
 * A default memoized decorate function.
 */

var defaultDecorate = () => [];
/**
 * A default implement to scroll dom range into view.
 */

var defaultScrollSelectionIntoView = (editor, domRange) => {
  var leafEl = domRange.startContainer.parentElement;
  leafEl.getBoundingClientRect = domRange.getBoundingClientRect.bind(domRange);
  Object(scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_4__["default"])(leafEl, {
    scrollMode: 'if-needed'
  });
  delete leafEl.getBoundingClientRect;
};
/**
 * Check if the target is in the editor.
 */

var hasTarget = (editor, target) => {
  return isDOMNode(target) && ReactEditor.hasDOMNode(editor, target);
};
/**
 * Check if the target is editable and in the editor.
 */

var hasEditableTarget = (editor, target) => {
  return isDOMNode(target) && ReactEditor.hasDOMNode(editor, target, {
    editable: true
  });
};
/**
 * Check if the target is inside void and in the editor.
 */

var isTargetInsideVoid = (editor, target) => {
  var slateNode = hasTarget(editor, target) && ReactEditor.toSlateNode(editor, target);
  return slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isVoid(editor, slateNode);
};
/**
 * Check if an event is overrided by a handler.
 */

var isEventHandled = (event, handler) => {
  if (!handler) {
    return false;
  } // The custom event handler may return a boolean to specify whether the event
  // shall be treated as being handled or not.


  var shouldTreatEventAsHandled = handler(event);

  if (shouldTreatEventAsHandled != null) {
    return shouldTreatEventAsHandled;
  }

  return event.isDefaultPrevented() || event.isPropagationStopped();
};
/**
 * Check if a DOM event is overrided by a handler.
 */

var isDOMEventHandled = (event, handler) => {
  if (!handler) {
    return false;
  } // The custom event handler may return a boolean to specify whether the event
  // shall be treated as being handled or not.


  var shouldTreatEventAsHandled = handler(event);

  if (shouldTreatEventAsHandled != null) {
    return shouldTreatEventAsHandled;
  }

  return event.defaultPrevented;
};

/**
 * An auto-incrementing identifier for keys.
 */
var n = 0;
/**
 * A class that keeps track of a key string. We use a full class here because we
 * want to be able to use them as keys in `WeakMap` objects.
 */

class Key {
  constructor() {
    this.id = "".concat(n++);
  }

}

var ReactEditor = {
  /**
   * Return the host window of the current editor.
   */
  getWindow(editor) {
    var window = EDITOR_TO_WINDOW.get(editor);

    if (!window) {
      throw new Error('Unable to find a host window element for this editor');
    }

    return window;
  },

  /**
   * Find a key for a Slate node.
   */
  findKey(editor, node) {
    var key = NODE_TO_KEY.get(node);

    if (!key) {
      key = new Key();
      NODE_TO_KEY.set(node, key);
    }

    return key;
  },

  /**
   * Find the path of Slate node.
   */
  findPath(editor, node) {
    var path = [];
    var child = node;

    while (true) {
      var parent = NODE_TO_PARENT.get(child);

      if (parent == null) {
        if (slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isEditor(child)) {
          return path;
        } else {
          break;
        }
      }

      var i = NODE_TO_INDEX.get(child);

      if (i == null) {
        break;
      }

      path.unshift(i);
      child = parent;
    }

    throw new Error("Unable to find the path for Slate node: ".concat(JSON.stringify(node)));
  },

  /**
   * Find the DOM node that implements DocumentOrShadowRoot for the editor.
   */
  findDocumentOrShadowRoot(editor) {
    var el = ReactEditor.toDOMNode(editor, editor);
    var root = el.getRootNode();

    if ((root instanceof Document || root instanceof ShadowRoot) && root.getSelection != null) {
      return root;
    }

    return el.ownerDocument;
  },

  /**
   * Check if the editor is focused.
   */
  isFocused(editor) {
    return !!IS_FOCUSED.get(editor);
  },

  /**
   * Check if the editor is in read-only mode.
   */
  isReadOnly(editor) {
    return !!IS_READ_ONLY.get(editor);
  },

  /**
   * Blur the editor.
   */
  blur(editor) {
    var el = ReactEditor.toDOMNode(editor, editor);
    var root = ReactEditor.findDocumentOrShadowRoot(editor);
    IS_FOCUSED.set(editor, false);

    if (root.activeElement === el) {
      el.blur();
    }
  },

  /**
   * Focus the editor.
   */
  focus(editor) {
    var el = ReactEditor.toDOMNode(editor, editor);
    var root = ReactEditor.findDocumentOrShadowRoot(editor);
    IS_FOCUSED.set(editor, true);

    if (root.activeElement !== el) {
      el.focus({
        preventScroll: true
      });
    }
  },

  /**
   * Deselect the editor.
   */
  deselect(editor) {
    var el = ReactEditor.toDOMNode(editor, editor);
    var {
      selection
    } = editor;
    var root = ReactEditor.findDocumentOrShadowRoot(editor);
    var domSelection = root.getSelection();

    if (domSelection && domSelection.rangeCount > 0) {
      domSelection.removeAllRanges();
    }

    if (selection) {
      slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].deselect(editor);
    }
  },

  /**
   * Check if a DOM node is within the editor.
   */
  hasDOMNode(editor, target) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      editable = false
    } = options;
    var editorEl = ReactEditor.toDOMNode(editor, editor);
    var targetEl; // COMPAT: In Firefox, reading `target.nodeType` will throw an error if
    // target is originating from an internal "restricted" element (e.g. a
    // stepper arrow on a number input). (2018/05/04)
    // https://github.com/ianstormtaylor/slate/issues/1819

    try {
      targetEl = isDOMElement(target) ? target : target.parentElement;
    } catch (err) {
      if (!err.message.includes('Permission denied to access property "nodeType"')) {
        throw err;
      }
    }

    if (!targetEl) {
      return false;
    }

    return targetEl.closest("[data-slate-editor]") === editorEl && (!editable || targetEl.isContentEditable || !!targetEl.getAttribute('data-slate-zero-width'));
  },

  /**
   * Insert data from a `DataTransfer` into the editor.
   */
  insertData(editor, data) {
    editor.insertData(data);
  },

  /**
   * Sets data from the currently selected fragment on a `DataTransfer`.
   */
  setFragmentData(editor, data) {
    editor.setFragmentData(data);
  },

  /**
   * Find the native DOM element from a Slate node.
   */
  toDOMNode(editor, node) {
    var domNode = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isEditor(node) ? EDITOR_TO_ELEMENT.get(editor) : KEY_TO_ELEMENT.get(ReactEditor.findKey(editor, node));

    if (!domNode) {
      throw new Error("Cannot resolve a DOM node from Slate node: ".concat(JSON.stringify(node)));
    }

    return domNode;
  },

  /**
   * Find a native DOM selection point from a Slate point.
   */
  toDOMPoint(editor, point) {
    var [node] = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].node(editor, point.path);
    var el = ReactEditor.toDOMNode(editor, node);
    var domPoint; // If we're inside a void node, force the offset to 0, otherwise the zero
    // width spacing character will result in an incorrect offset of 1

    if (slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].void(editor, {
      at: point
    })) {
      point = {
        path: point.path,
        offset: 0
      };
    } // For each leaf, we need to isolate its content, which means filtering
    // to its direct text and zero-width spans. (We have to filter out any
    // other siblings that may have been rendered alongside them.)


    var selector = "[data-slate-string], [data-slate-zero-width]";
    var texts = Array.from(el.querySelectorAll(selector));
    var start = 0;

    for (var text of texts) {
      var domNode = text.childNodes[0];

      if (domNode == null || domNode.textContent == null) {
        continue;
      }

      var {
        length
      } = domNode.textContent;
      var attr = text.getAttribute('data-slate-length');
      var trueLength = attr == null ? length : parseInt(attr, 10);
      var end = start + trueLength;

      if (point.offset <= end) {
        var offset = Math.min(length, Math.max(0, point.offset - start));
        domPoint = [domNode, offset];
        break;
      }

      start = end;
    }

    if (!domPoint) {
      throw new Error("Cannot resolve a DOM point from Slate point: ".concat(JSON.stringify(point)));
    }

    return domPoint;
  },

  /**
   * Find a native DOM range from a Slate `range`.
   *
   * Notice: the returned range will always be ordinal regardless of the direction of Slate `range` due to DOM API limit.
   *
   * there is no way to create a reverse DOM Range using Range.setStart/setEnd
   * according to https://dom.spec.whatwg.org/#concept-range-bp-set.
   */
  toDOMRange(editor, range) {
    var {
      anchor,
      focus
    } = range;
    var isBackward = slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isBackward(range);
    var domAnchor = ReactEditor.toDOMPoint(editor, anchor);
    var domFocus = slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isCollapsed(range) ? domAnchor : ReactEditor.toDOMPoint(editor, focus);
    var window = ReactEditor.getWindow(editor);
    var domRange = window.document.createRange();
    var [startNode, startOffset] = isBackward ? domFocus : domAnchor;
    var [endNode, endOffset] = isBackward ? domAnchor : domFocus; // A slate Point at zero-width Leaf always has an offset of 0 but a native DOM selection at
    // zero-width node has an offset of 1 so we have to check if we are in a zero-width node and
    // adjust the offset accordingly.

    var startEl = isDOMElement(startNode) ? startNode : startNode.parentElement;
    var isStartAtZeroWidth = !!startEl.getAttribute('data-slate-zero-width');
    var endEl = isDOMElement(endNode) ? endNode : endNode.parentElement;
    var isEndAtZeroWidth = !!endEl.getAttribute('data-slate-zero-width');
    domRange.setStart(startNode, isStartAtZeroWidth ? 1 : startOffset);
    domRange.setEnd(endNode, isEndAtZeroWidth ? 1 : endOffset);
    return domRange;
  },

  /**
   * Find a Slate node from a native DOM `element`.
   */
  toSlateNode(editor, domNode) {
    var domEl = isDOMElement(domNode) ? domNode : domNode.parentElement;

    if (domEl && !domEl.hasAttribute('data-slate-node')) {
      domEl = domEl.closest("[data-slate-node]");
    }

    var node = domEl ? ELEMENT_TO_NODE.get(domEl) : null;

    if (!node) {
      throw new Error("Cannot resolve a Slate node from DOM node: ".concat(domEl));
    }

    return node;
  },

  /**
   * Get the target range from a DOM `event`.
   */
  findEventRange(editor, event) {
    if ('nativeEvent' in event) {
      event = event.nativeEvent;
    }

    var {
      clientX: x,
      clientY: y,
      target
    } = event;

    if (x == null || y == null) {
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(event));
    }

    var node = ReactEditor.toSlateNode(editor, event.target);
    var path = ReactEditor.findPath(editor, node); // If the drop target is inside a void node, move it into either the
    // next or previous node, depending on which side the `x` and `y`
    // coordinates are closest to.

    if (slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isVoid(editor, node)) {
      var rect = target.getBoundingClientRect();
      var isPrev = editor.isInline(node) ? x - rect.left < rect.left + rect.width - x : y - rect.top < rect.top + rect.height - y;
      var edge = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].point(editor, path, {
        edge: isPrev ? 'start' : 'end'
      });
      var point = isPrev ? slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].before(editor, edge) : slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].after(editor, edge);

      if (point) {
        var _range = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].range(editor, point);

        return _range;
      }
    } // Else resolve a range from the caret position where the drop occured.


    var domRange;
    var {
      document
    } = window; // COMPAT: In Firefox, `caretRangeFromPoint` doesn't exist. (2016/07/25)

    if (document.caretRangeFromPoint) {
      domRange = document.caretRangeFromPoint(x, y);
    } else {
      var position = document.caretPositionFromPoint(x, y);

      if (position) {
        domRange = document.createRange();
        domRange.setStart(position.offsetNode, position.offset);
        domRange.setEnd(position.offsetNode, position.offset);
      }
    }

    if (!domRange) {
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(event));
    } // Resolve a Slate range from the DOM range.


    var range = ReactEditor.toSlateRange(editor, domRange, {
      exactMatch: false
    });
    return range;
  },

  /**
   * Find a Slate point from a DOM selection's `domNode` and `domOffset`.
   */
  toSlatePoint(editor, domPoint, exactMatch) {
    var [nearestNode, nearestOffset] = exactMatch ? domPoint : normalizeDOMPoint(domPoint);
    var parentNode = nearestNode.parentNode;
    var textNode = null;
    var offset = 0;

    if (parentNode) {
      var voidNode = parentNode.closest('[data-slate-void="true"]');
      var leafNode = parentNode.closest('[data-slate-leaf]');
      var domNode = null; // Calculate how far into the text node the `nearestNode` is, so that we
      // can determine what the offset relative to the text node is.

      if (leafNode) {
        textNode = leafNode.closest('[data-slate-node="text"]');

        var _window = ReactEditor.getWindow(editor);

        var range = _window.document.createRange();

        range.setStart(textNode, 0);
        range.setEnd(nearestNode, nearestOffset);
        var contents = range.cloneContents();
        var removals = [...Array.prototype.slice.call(contents.querySelectorAll('[data-slate-zero-width]')), ...Array.prototype.slice.call(contents.querySelectorAll('[contenteditable=false]'))];
        removals.forEach(el => {
          el.parentNode.removeChild(el);
        }); // COMPAT: Edge has a bug where Range.prototype.toString() will
        // convert \n into \r\n. The bug causes a loop when slate-react
        // attempts to reposition its cursor to match the native position. Use
        // textContent.length instead.
        // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10291116/

        offset = contents.textContent.length;
        domNode = textNode;
      } else if (voidNode) {
        // For void nodes, the element with the offset key will be a cousin, not an
        // ancestor, so find it by going down from the nearest void parent.
        leafNode = voidNode.querySelector('[data-slate-leaf]'); // COMPAT: In read-only editors the leaf is not rendered.

        if (!leafNode) {
          offset = 1;
        } else {
          textNode = leafNode.closest('[data-slate-node="text"]');
          domNode = leafNode;
          offset = domNode.textContent.length;
          domNode.querySelectorAll('[data-slate-zero-width]').forEach(el => {
            offset -= el.textContent.length;
          });
        }
      } // COMPAT: If the parent node is a Slate zero-width space, editor is
      // because the text node should have no characters. However, during IME
      // composition the ASCII characters will be prepended to the zero-width
      // space, so subtract 1 from the offset to account for the zero-width
      // space character.


      if (domNode && offset === domNode.textContent.length && parentNode.hasAttribute('data-slate-zero-width')) {
        offset--;
      }
    }

    if (!textNode) {
      if (exactMatch) {
        return null;
      }

      throw new Error("Cannot resolve a Slate point from DOM point: ".concat(domPoint));
    } // COMPAT: If someone is clicking from one Slate editor into another,
    // the select event fires twice, once for the old editor's `element`
    // first, and then afterwards for the correct `element`. (2017/03/03)


    var slateNode = ReactEditor.toSlateNode(editor, textNode);
    var path = ReactEditor.findPath(editor, slateNode);
    return {
      path,
      offset
    };
  },

  /**
   * Find a Slate range from a DOM range or selection.
   */
  toSlateRange(editor, domRange, options) {
    var {
      exactMatch
    } = options;
    var el = isDOMSelection(domRange) ? domRange.anchorNode : domRange.startContainer;
    var anchorNode;
    var anchorOffset;
    var focusNode;
    var focusOffset;
    var isCollapsed;

    if (el) {
      if (isDOMSelection(domRange)) {
        anchorNode = domRange.anchorNode;
        anchorOffset = domRange.anchorOffset;
        focusNode = domRange.focusNode;
        focusOffset = domRange.focusOffset; // COMPAT: There's a bug in chrome that always returns `true` for
        // `isCollapsed` for a Selection that comes from a ShadowRoot.
        // (2020/08/08)
        // https://bugs.chromium.org/p/chromium/issues/detail?id=447523

        if (IS_CHROME && hasShadowRoot()) {
          isCollapsed = domRange.anchorNode === domRange.focusNode && domRange.anchorOffset === domRange.focusOffset;
        } else {
          isCollapsed = domRange.isCollapsed;
        }
      } else {
        anchorNode = domRange.startContainer;
        anchorOffset = domRange.startOffset;
        focusNode = domRange.endContainer;
        focusOffset = domRange.endOffset;
        isCollapsed = domRange.collapsed;
      }
    }

    if (anchorNode == null || focusNode == null || anchorOffset == null || focusOffset == null) {
      throw new Error("Cannot resolve a Slate range from DOM range: ".concat(domRange));
    }

    var anchor = ReactEditor.toSlatePoint(editor, [anchorNode, anchorOffset], exactMatch);

    if (!anchor) {
      return null;
    }

    var focus = isCollapsed ? anchor : ReactEditor.toSlatePoint(editor, [focusNode, focusOffset], exactMatch);

    if (!focus) {
      return null;
    }

    return {
      anchor,
      focus
    };
  },

  hasRange(editor, range) {
    var {
      anchor,
      focus
    } = range;
    return slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].hasPath(editor, anchor.path) && slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].hasPath(editor, focus.path);
  }

};

/**
 * Returns the number of characters that are the same at the beginning of the
 * String.
 *
 * @param prev  the previous text
 * @param next  the next text
 * @returns the offset of the start of the difference; null if there is no difference
 */

function getDiffStart(prev, next) {
  var length = Math.min(prev.length, next.length);

  for (var i = 0; i < length; i++) {
    if (prev.charAt(i) !== next.charAt(i)) return i;
  }

  if (prev.length !== next.length) return length;
  return null;
}
/**
 * Returns the number of characters that are the same at the end of the String
 * up to `max`. Max prevents double-counting characters when there are
 * multiple duplicate characters around the diff area.
 *
 * @param prev  the previous text
 * @param next  the next text
 * @param max  the max length to test.
 * @returns number of characters that are the same at the end of the string
 */


function getDiffEnd(prev, next, max) {
  var prevLength = prev.length;
  var nextLength = next.length;
  var length = Math.min(prevLength, nextLength, max);

  for (var i = 0; i < length; i++) {
    var prevChar = prev.charAt(prevLength - i - 1);
    var nextChar = next.charAt(nextLength - i - 1);
    if (prevChar !== nextChar) return i;
  }

  if (prev.length !== next.length) return length;
  return null;
}
/**
 * Takes two strings and returns an object representing two offsets. The
 * first, `start` represents the number of characters that are the same at
 * the front of the String. The `end` represents the number of characters
 * that are the same at the end of the String.
 *
 * Returns null if they are identical.
 *
 * @param prev  the previous text
 * @param next  the next text
 * @returns the difference text range; null if there are no differences.
 */


function getDiffOffsets(prev, next) {
  if (prev === next) return null;
  var start = getDiffStart(prev, next);
  if (start === null) return null;
  var maxEnd = Math.min(prev.length - start, next.length - start);
  var end = getDiffEnd(prev, next, maxEnd);
  if (end === null) return null;
  return {
    start,
    end
  };
}
/**
 * Takes a text string and returns a slice from the string at the given text range
 *
 * @param text  the text
 * @param offsets  the text range
 * @returns the text slice at text range
 */


function sliceText(text, offsets) {
  return text.slice(offsets.start, text.length - offsets.end);
}
/**
 * Takes two strings and returns a smart diff that can be used to describe the
 * change in a way that can be used as operations like inserting, removing or
 * replacing text.
 *
 * @param prev the previous text
 * @param next the next text
 * @returns the text difference
 */


function diffText(prev, next) {
  if (prev === undefined || next === undefined) return null;
  var offsets = getDiffOffsets(prev, next);
  if (offsets == null) return null;
  var insertText = sliceText(next, offsets);
  var removeText = sliceText(prev, offsets);
  return {
    start: offsets.start,
    end: prev.length - offsets.end,
    insertText,
    removeText
  };
}
function combineInsertedText(insertedText) {
  return insertedText.reduce((acc, _ref) => {
    var {
      text
    } = _ref;
    return "".concat(acc).concat(text.insertText);
  }, '');
}
function getTextInsertion(editor, domNode) {
  var node = ReactEditor.toSlateNode(editor, domNode);

  if (!slate__WEBPACK_IMPORTED_MODULE_1__["Text"].isText(node)) {
    return undefined;
  }

  var prevText = node.text;
  var nextText = domNode.textContent; // textContent will pad an extra \n when the textContent ends with an \n

  if (nextText.endsWith('\n')) {
    nextText = nextText.slice(0, nextText.length - 1);
  } // If the text is no different, there is no diff.


  if (nextText !== prevText) {
    var textDiff = diffText(prevText, nextText);

    if (textDiff !== null) {
      var textPath = ReactEditor.findPath(editor, node);
      return {
        text: textDiff,
        path: textPath
      };
    }
  }

  return undefined;
}
function normalizeTextInsertionRange(editor, range, _ref2) {
  var {
    path,
    text
  } = _ref2;
  var insertionRange = {
    anchor: {
      path,
      offset: text.start
    },
    focus: {
      path,
      offset: text.end
    }
  };

  if (!range || !slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isCollapsed(range)) {
    return insertionRange;
  }

  var {
    insertText,
    removeText
  } = text;
  var isSingleCharacterInsertion = insertText.length === 1 || removeText.length === 1;
  /**
   * This code handles edge cases that arise from text diffing when the
   * inserted or removed character is a single character, and the character
   * right before or after the anchor is the same as the one being inserted or
   * removed.
   *
   * Take this example: hello|o
   *
   * If another `o` is inserted at the selection's anchor in the example above,
   * it should be inserted at the anchor, but using text diffing, we actually
   * detect that the character was inserted after the second `o`:
   *
   * helloo[o]|
   *
   * Instead, in these very specific edge cases, we assume that the character
   * needs to be inserted after the anchor rather than where the diff was found:
   *
   * hello[o]|o
   */

  if (isSingleCharacterInsertion && slate__WEBPACK_IMPORTED_MODULE_1__["Path"].equals(range.anchor.path, path)) {
    var [_text] = Array.from(slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].nodes(editor, {
      at: range,
      match: slate__WEBPACK_IMPORTED_MODULE_1__["Text"].isText
    }));

    if (_text) {
      var [node] = _text;
      var {
        anchor
      } = range;
      var characterBeforeAnchor = node.text[anchor.offset - 1];
      var characterAfterAnchor = node.text[anchor.offset];

      if (insertText.length === 1 && insertText === characterAfterAnchor) {
        // Assume text should be inserted at the anchor
        return range;
      }

      if (removeText.length === 1 && removeText === characterBeforeAnchor) {
        // Assume text should be removed right before the anchor
        return {
          anchor: {
            path,
            offset: anchor.offset - 1
          },
          focus: {
            path,
            offset: anchor.offset
          }
        };
      }
    }
  }

  return insertionRange;
}

function gatherMutationData(editor, mutations) {
  var addedNodes = [];
  var removedNodes = [];
  var insertedText = [];
  var characterDataMutations = [];
  mutations.forEach(mutation => {
    switch (mutation.type) {
      case 'childList':
        {
          if (mutation.addedNodes.length) {
            mutation.addedNodes.forEach(addedNode => {
              addedNodes.push(addedNode);
            });
          }

          mutation.removedNodes.forEach(removedNode => {
            removedNodes.push(removedNode);
          });
          break;
        }

      case 'characterData':
        {
          characterDataMutations.push(mutation); // Changes to text nodes should consider the parent element

          var {
            parentNode
          } = mutation.target;

          if (!parentNode) {
            return;
          }

          var textInsertion = getTextInsertion(editor, parentNode);

          if (!textInsertion) {
            return;
          } // If we've already detected a diff at that path, we can return early


          if (insertedText.some((_ref) => {
            var {
              path
            } = _ref;
            return slate__WEBPACK_IMPORTED_MODULE_1__["Path"].equals(path, textInsertion.path);
          })) {
            return;
          } // Add the text diff to the array of detected text insertions that need to be reconciled


          insertedText.push(textInsertion);
        }
    }
  });
  return {
    addedNodes,
    removedNodes,
    insertedText,
    characterDataMutations
  };
}
/**
 * In general, when a line break occurs, there will be more `addedNodes` than `removedNodes`.
 *
 * This isn't always the case however. In some cases, there will be more `removedNodes` than
 * `addedNodes`.
 *
 * To account for these edge cases, the most reliable strategy to detect line break mutations
 * is to check whether a new block was inserted of the same type as the current block.
 */

var isLineBreak = (editor, _ref2) => {
  var {
    addedNodes
  } = _ref2;
  var {
    selection
  } = editor;
  var parentNode = selection ? slate__WEBPACK_IMPORTED_MODULE_1__["Node"].parent(editor, selection.anchor.path) : null;
  var parentDOMNode = parentNode ? ReactEditor.toDOMNode(editor, parentNode) : null;

  if (!parentDOMNode) {
    return false;
  }

  return addedNodes.some(addedNode => addedNode instanceof HTMLElement && addedNode.tagName === (parentDOMNode === null || parentDOMNode === void 0 ? void 0 : parentDOMNode.tagName));
};
/**
 * So long as we check for line break mutations before deletion mutations,
 * we can safely assume that a set of mutations was a deletion if there are
 * removed nodes.
 */

var isDeletion = (_, _ref3) => {
  var {
    removedNodes
  } = _ref3;
  return removedNodes.length > 0;
};
/**
 * If the selection was expanded and there are removed nodes,
 * the contents of the selection need to be replaced with the diff
 */

var isReplaceExpandedSelection = (_ref4, _ref5) => {
  var {
    selection
  } = _ref4;
  var {
    removedNodes
  } = _ref5;
  return selection ? slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection) && removedNodes.length > 0 : false;
};
/**
 * Plain text insertion
 */

var isTextInsertion = (_, _ref6) => {
  var {
    insertedText
  } = _ref6;
  return insertedText.length > 0;
};
/**
 * Edge case. Detect mutations that remove leaf nodes and also update character data
 */

var isRemoveLeafNodes = (_, _ref7) => {
  var {
    addedNodes,
    characterDataMutations,
    removedNodes
  } = _ref7;
  return removedNodes.length > 0 && addedNodes.length === 0 && characterDataMutations.length > 0;
};

function restoreDOM(editor) {
  try {
    var onRestoreDOM = EDITOR_TO_RESTORE_DOM.get(editor);

    if (onRestoreDOM) {
      onRestoreDOM();
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
}

/**
 * Based loosely on:
 *
 * https://github.com/facebook/draft-js/blob/master/src/component/handlers/composition/DOMObserver.js
 * https://github.com/ProseMirror/prosemirror-view/blob/master/src/domobserver.js
 *
 * The input manager attempts to map observed mutations on the document to a
 * set of operations in order to reconcile Slate's internal value with the DOM.
 *
 * Mutations are processed synchronously as they come in. Only mutations that occur
 * during a user input loop are processed, as other mutations can occur within the
 * document that were not initiated by user input.
 *
 * The mutation reconciliation process attempts to match mutations to the following
 * patterns:
 *
 * - Text updates
 * - Deletions
 * - Line breaks
 *
 * @param editor
 */


class AndroidInputManager {
  constructor(editor) {
    this.editor = editor;
    /**
     * Handle MutationObserver flush
     *
     * @param mutations
     */

    this.flush = mutations => {

      try {
        this.reconcileMutations(mutations);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err); // Failed to reconcile mutations, restore DOM to its previous state

        restoreDOM(this.editor);
      }
    };
    /**
     * Reconcile a batch of mutations
     *
     * @param mutations
     */


    this.reconcileMutations = mutations => {
      var mutationData = gatherMutationData(this.editor, mutations);
      var {
        insertedText,
        removedNodes
      } = mutationData;

      if (isReplaceExpandedSelection(this.editor, mutationData)) {
        var text = combineInsertedText(insertedText);
        this.replaceExpandedSelection(text);
      } else if (isLineBreak(this.editor, mutationData)) {
        this.insertBreak();
      } else if (isRemoveLeafNodes(this.editor, mutationData)) {
        this.removeLeafNodes(removedNodes);
      } else if (isDeletion(this.editor, mutationData)) {
        this.deleteBackward();
      } else if (isTextInsertion(this.editor, mutationData)) {
        this.insertText(insertedText);
      }
    };
    /**
     * Apply text diff
     */


    this.insertText = insertedText => {
      var {
        selection
      } = this.editor; // Insert the batched text diffs

      insertedText.forEach(insertion => {
        slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].insertText(this.editor, insertion.text.insertText, {
          at: normalizeTextInsertionRange(this.editor, selection, insertion)
        });
      });
    };
    /**
     * Handle line breaks
     */


    this.insertBreak = () => {
      var {
        selection
      } = this.editor;
      slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].insertBreak(this.editor); // To-do: Need a more granular solution to restoring only a specific portion
      // of the document. Restoring the entire document is expensive.

      restoreDOM(this.editor);

      if (selection) {
        // Compat: Move selection to the newly inserted block if it has not moved
        setTimeout(() => {
          if (this.editor.selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].equals(selection, this.editor.selection)) {
            slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].move(this.editor);
          }
        }, 100);
      }
    };
    /**
     * Handle expanded selection being deleted or replaced by text
     */


    this.replaceExpandedSelection = text => {

      slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(this.editor);

      if (text.length) {
        // Selection was replaced by text, insert the entire text diff
        slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].insertText(this.editor, text);
      }

      restoreDOM(this.editor);
    };
    /**
     * Handle `backspace` that merges blocks
     */


    this.deleteBackward = () => {
      slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteBackward(this.editor);
      ReactEditor.focus(this.editor);
      restoreDOM(this.editor);
    };
    /**
     * Handle mutations that remove specific leaves
     */


    this.removeLeafNodes = nodes => {
      for (var node of nodes) {
        var slateNode = ReactEditor.toSlateNode(this.editor, node);

        if (slateNode) {
          var path = ReactEditor.findPath(this.editor, slateNode);
          slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].delete(this.editor, {
            at: path
          });
          restoreDOM(this.editor);
        }
      }
    };

    this.editor = editor;
  }

}

function useMutationObserver(node, callback, options) {
  var [mutationObserver] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => new MutationObserver(callback));
  useIsomorphicLayoutEffect(() => {
    // Disconnect mutation observer during render phase
    mutationObserver.disconnect();
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!node.current) {
      throw new Error('Failed to attach MutationObserver, `node` is undefined');
    } // Attach mutation observer after render phase has finished


    mutationObserver.observe(node.current, options); // Clean up after effect

    return mutationObserver.disconnect.bind(mutationObserver);
  });
}

function useTrackUserInput() {
  var editor = useSlateStatic();
  var receivedUserInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  var animationFrameRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var onUserInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (receivedUserInput.current === false) {
      var window = ReactEditor.getWindow(editor);
      receivedUserInput.current = true;

      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = window.requestAnimationFrame(() => {
        receivedUserInput.current = false;
        animationFrameRef.current = null;
      });
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // Reset user input tracking on every render
    if (receivedUserInput.current) {
      receivedUserInput.current = false;
    }
  });
  return {
    receivedUserInput,
    onUserInput
  };
}

var MUTATION_OBSERVER_CONFIG = {
  childList: true,
  characterData: true,
  characterDataOldValue: true,
  subtree: true
};
function useAndroidInputManager(node) {
  var editor = useSlateStatic();
  var [inputManager] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => new AndroidInputManager(editor));
  var {
    receivedUserInput,
    onUserInput
  } = useTrackUserInput();
  var timeoutId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var isReconciling = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  var flush = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(mutations => {
    if (!receivedUserInput.current) {
      return;
    }

    isReconciling.current = true;
    inputManager.flush(mutations);

    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(() => {
      isReconciling.current = false;
      timeoutId.current = null;
    }, 250);
  }, []);
  useMutationObserver(node, flush, MUTATION_OBSERVER_CONFIG);
  return {
    isReconciling,
    onUserInput
  };
}

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/**
 * Editable.
 */

var AndroidEditable = props => {
  var {
    autoFocus,
    decorate = defaultDecorate,
    onDOMBeforeInput: propsOnDOMBeforeInput,
    placeholder,
    readOnly = false,
    renderElement,
    renderLeaf,
    renderPlaceholder = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultPlaceholder, Object.assign({}, props)),
    style = {},
    as: Component = 'div'
  } = props,
      attributes = _objectWithoutProperties(props, ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "style", "as"]);

  var editor = useSlate();
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var inputManager = useAndroidInputManager(ref); // Update internal state on each render.

  IS_READ_ONLY.set(editor, readOnly); // Keep track of some state for the event handler logic.

  var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    isUpdatingSelection: false,
    latestElement: null
  }), []);
  var [contentKey, setContentKey] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  var onRestoreDOM = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setContentKey(prev => prev + 1);
  }, [contentKey]); // Whenever the editor updates...

  useIsomorphicLayoutEffect(() => {
    // Update element-related weak maps with the DOM element ref.
    var window;

    if (ref.current && (window = getDefaultView(ref.current))) {
      EDITOR_TO_WINDOW.set(editor, window);
      EDITOR_TO_ELEMENT.set(editor, ref.current);
      NODE_TO_ELEMENT.set(editor, ref.current);
      ELEMENT_TO_NODE.set(ref.current, editor);
      EDITOR_TO_RESTORE_DOM.set(editor, onRestoreDOM);
    } else {
      NODE_TO_ELEMENT.delete(editor);
      EDITOR_TO_RESTORE_DOM.delete(editor);
    }

    try {
      // Make sure the DOM selection state is in sync.
      var {
        selection
      } = editor;
      var root = ReactEditor.findDocumentOrShadowRoot(editor);
      var domSelection = root.getSelection();

      if (!domSelection || !ReactEditor.isFocused(editor)) {
        return;
      }

      var hasDomSelection = domSelection.type !== 'None'; // If the DOM selection is properly unset, we're done.

      if (!selection && !hasDomSelection) {
        return;
      } // verify that the dom selection is in the editor


      var editorElement = EDITOR_TO_ELEMENT.get(editor);
      var hasDomSelectionInEditor = false;

      if (editorElement.contains(domSelection.anchorNode) && editorElement.contains(domSelection.focusNode)) {
        hasDomSelectionInEditor = true;
      } // If the DOM selection is in the editor and the editor selection is already correct, we're done.


      if (hasDomSelection && hasDomSelectionInEditor && selection) {
        var slateRange = ReactEditor.toSlateRange(editor, domSelection, {
          exactMatch: true
        });

        if (slateRange && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].equals(slateRange, selection)) {
          return;
        }
      } // when <Editable/> is being controlled through external value
      // then its children might just change - DOM responds to it on its own
      // but Slate's value is not being updated through any operation
      // and thus it doesn't transform selection on its own


      if (selection && !ReactEditor.hasRange(editor, selection)) {
        editor.selection = ReactEditor.toSlateRange(editor, domSelection, {
          exactMatch: false
        });
        return;
      } // Otherwise the DOM selection is out of sync, so update it.


      var el = ReactEditor.toDOMNode(editor, editor);
      state.isUpdatingSelection = true;
      var newDomRange = selection && ReactEditor.toDOMRange(editor, selection);

      if (newDomRange) {
        if (slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isBackward(selection)) {
          domSelection.setBaseAndExtent(newDomRange.endContainer, newDomRange.endOffset, newDomRange.startContainer, newDomRange.startOffset);
        } else {
          domSelection.setBaseAndExtent(newDomRange.startContainer, newDomRange.startOffset, newDomRange.endContainer, newDomRange.endOffset);
        }

        var leafEl = newDomRange.startContainer.parentElement;
        leafEl.getBoundingClientRect = newDomRange.getBoundingClientRect.bind(newDomRange);
        Object(scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_4__["default"])(leafEl, {
          scrollMode: 'if-needed',
          boundary: el
        }); // @ts-ignore

        delete leafEl.getBoundingClientRect;
      } else {
        domSelection.removeAllRanges();
      }

      setTimeout(() => {
        state.isUpdatingSelection = false;
      });
    } catch (_unused) {
      // Failed to update selection, likely due to reconciliation error
      state.isUpdatingSelection = false;
    }
  }); // The autoFocus TextareaHTMLAttribute doesn't do anything on a div, so it
  // needs to be manually focused.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (ref.current && autoFocus) {
      ref.current.focus();
    }
  }, [autoFocus]); // Listen on the native `beforeinput` event to get real "Level 2" events. This
  // is required because React's `beforeinput` is fake and never really attaches
  // to the real event sadly. (2019/11/01)
  // https://github.com/facebook/react/issues/11211

  var onDOMBeforeInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
    if (!readOnly && hasEditableTarget(editor, event.target) && !isDOMEventHandled(event, propsOnDOMBeforeInput)) {
      inputManager.onUserInput();
    }
  }, [readOnly, propsOnDOMBeforeInput]); // Attach a native DOM event handler for `beforeinput` events, because React's
  // built-in `onBeforeInput` is actually a leaky polyfill that doesn't expose
  // real `beforeinput` events sadly... (2019/11/04)

  useIsomorphicLayoutEffect(() => {
    var node = ref.current; // @ts-ignore The `beforeinput` event isn't recognized.

    node === null || node === void 0 ? void 0 : node.addEventListener('beforeinput', onDOMBeforeInput); // @ts-ignore The `beforeinput` event isn't recognized.

    return () => node === null || node === void 0 ? void 0 : node.removeEventListener('beforeinput', onDOMBeforeInput);
  }, [contentKey, propsOnDOMBeforeInput]); // Listen on the native `selectionchange` event to be able to update any time
  // the selection changes. This is required because React's `onSelect` is leaky
  // and non-standard so it doesn't fire until after a selection has been
  // released. This causes issues in situations where another change happens
  // while a selection is being dragged.

  var onDOMSelectionChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default()(() => {
    try {
      if (!readOnly && !state.isUpdatingSelection && !inputManager.isReconciling.current) {
        var root = ReactEditor.findDocumentOrShadowRoot(editor);
        var {
          activeElement
        } = root;
        var el = ReactEditor.toDOMNode(editor, editor);
        var domSelection = root.getSelection();

        if (activeElement === el) {
          state.latestElement = activeElement;
          IS_FOCUSED.set(editor, true);
        } else {
          IS_FOCUSED.delete(editor);
        }

        if (!domSelection) {
          return slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].deselect(editor);
        }

        var {
          anchorNode,
          focusNode
        } = domSelection;
        var anchorNodeSelectable = hasEditableTarget(editor, anchorNode) || isTargetInsideVoid(editor, anchorNode);
        var focusNodeSelectable = hasEditableTarget(editor, focusNode) || isTargetInsideVoid(editor, focusNode);

        if (anchorNodeSelectable && focusNodeSelectable) {
          var range = ReactEditor.toSlateRange(editor, domSelection, {
            exactMatch: false
          });
          slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].select(editor, range);
        } else {
          slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].deselect(editor);
        }
      }
    } catch (_unused2) {// Failed to update selection, likely due to reconciliation error
    }
  }, 100), [readOnly]); // Attach a native DOM event handler for `selectionchange`, because React's
  // built-in `onSelect` handler doesn't fire for all selection changes. It's a
  // leaky polyfill that only fires on keypresses or clicks. Instead, we want to
  // fire for any change to the selection inside the editor. (2019/11/04)
  // https://github.com/facebook/react/issues/5785

  useIsomorphicLayoutEffect(() => {
    var window = ReactEditor.getWindow(editor);
    window.document.addEventListener('selectionchange', onDOMSelectionChange);
    return () => {
      window.document.removeEventListener('selectionchange', onDOMSelectionChange);
    };
  });
  var decorations = decorate([editor, []]);

  if (placeholder && editor.children.length === 1 && Array.from(slate__WEBPACK_IMPORTED_MODULE_1__["Node"].texts(editor)).length === 1 && slate__WEBPACK_IMPORTED_MODULE_1__["Node"].string(editor) === '') {
    var start = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].start(editor, []);
    decorations.push({
      [PLACEHOLDER_SYMBOL]: true,
      placeholder,
      anchor: start,
      focus: start
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReadOnlyContext.Provider, {
    value: readOnly
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DecorateContext.Provider, {
    value: decorate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, Object.assign({
    key: contentKey,
    role: readOnly ? undefined : 'textbox'
  }, attributes, {
    spellCheck: attributes.spellCheck,
    autoCorrect: attributes.autoCorrect,
    autoCapitalize: attributes.autoCapitalize,
    "data-slate-editor": true,
    "data-slate-node": "value",
    contentEditable: readOnly ? undefined : true,
    suppressContentEditableWarning: true,
    ref: ref,
    style: _objectSpread$1({
      // Allow positioning relative to the editable element.
      position: 'relative',
      // Prevent the default outline styles.
      outline: 'none',
      // Preserve adjacent whitespace and new lines.
      whiteSpace: 'pre-wrap',
      // Allow words to break if they are too long.
      wordWrap: 'break-word'
    }, style),
    onCopy: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCopy)) {
        event.preventDefault();
        ReactEditor.setFragmentData(editor, event.clipboardData);
      }
    }, [attributes.onCopy]),
    onCut: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (!readOnly && hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onCut)) {
        event.preventDefault();
        ReactEditor.setFragmentData(editor, event.clipboardData);
        var {
          selection
        } = editor;

        if (selection) {
          if (slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isExpanded(selection)) {
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].deleteFragment(editor);
          } else {
            var node = slate__WEBPACK_IMPORTED_MODULE_1__["Node"].parent(editor, selection.anchor.path);

            if (slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isVoid(editor, node)) {
              slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].delete(editor);
            }
          }
        }
      }
    }, [readOnly, attributes.onCut]),
    onFocus: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (!readOnly && !state.isUpdatingSelection && hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onFocus)) {
        var root = ReactEditor.findDocumentOrShadowRoot(editor);
        state.latestElement = root.activeElement;
        IS_FOCUSED.set(editor, true);
      }
    }, [readOnly, attributes.onFocus]),
    onBlur: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      if (readOnly || state.isUpdatingSelection || !hasEditableTarget(editor, event.target) || isEventHandled(event, attributes.onBlur)) {
        return;
      } // COMPAT: If the current `activeElement` is still the previous
      // one, this is due to the window being blurred when the tab
      // itself becomes unfocused, so we want to abort early to allow to
      // editor to stay focused when the tab becomes focused again.


      var root = ReactEditor.findDocumentOrShadowRoot(editor);

      if (state.latestElement === root.activeElement) {
        return;
      }

      var {
        relatedTarget
      } = event;
      var el = ReactEditor.toDOMNode(editor, editor); // COMPAT: The event should be ignored if the focus is returning
      // to the editor from an embedded editable element (eg. an <input>
      // element inside a void node).

      if (relatedTarget === el) {
        return;
      } // COMPAT: The event should be ignored if the focus is moving from
      // the editor to inside a void node's spacer element.


      if (isDOMElement(relatedTarget) && relatedTarget.hasAttribute('data-slate-spacer')) {
        return;
      } // COMPAT: The event should be ignored if the focus is moving to a
      // non- editable section of an element that isn't a void node (eg.
      // a list item of the check list example).


      if (relatedTarget != null && isDOMNode(relatedTarget) && ReactEditor.hasDOMNode(editor, relatedTarget)) {
        var node = ReactEditor.toSlateNode(editor, relatedTarget);

        if (slate__WEBPACK_IMPORTED_MODULE_1__["Element"].isElement(node) && !editor.isVoid(node)) {
          return;
        }
      }

      IS_FOCUSED.delete(editor);
    }, [readOnly, attributes.onBlur]),
    onPaste: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
      // This unfortunately needs to be handled with paste events instead.
      if (hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onPaste) && !readOnly) {
        event.preventDefault();
        ReactEditor.insertData(editor, event.clipboardData);
      }
    }, [readOnly, attributes.onPaste])
  }), useChildren({
    decorations,
    node: editor,
    renderElement,
    renderPlaceholder,
    renderLeaf,
    selection: editor.selection
  }))));
};

/**
 * A React context for sharing the `focused` state of the editor.
 */

var FocusedContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(false);
/**
 * Get the current `focused` state of the editor.
 */

var useFocused = () => {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(FocusedContext);
};

/**
 * A wrapper around the provider to handle `onChange` events, because the editor
 * is a mutable singleton so it won't ever register as "changed" otherwise.
 */

var Slate = props => {
  var {
    editor,
    children,
    onChange,
    value
  } = props,
      rest = _objectWithoutProperties(props, ["editor", "children", "onChange", "value"]);

  var [key, setKey] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(slate__WEBPACK_IMPORTED_MODULE_1__["Node"].isNodeList(value), "[Slate] value is invalid! Expected a list of elements but got: ".concat(JSON.stringify(value)));
    Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isEditor(editor), "[Slate] editor is invalid! you passed: ".concat(JSON.stringify(editor)));
    editor.children = value;
    Object.assign(editor, rest);
    return [editor];
  }, [key, value, ...Object.values(rest)]);
  var onContextChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    onChange(editor.children);
    setKey(key + 1);
  }, [key, onChange]);
  EDITOR_TO_ON_CHANGE.set(editor, onContextChange);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    return () => {
      EDITOR_TO_ON_CHANGE.set(editor, () => {});
    };
  }, []);
  var [isFocused, setIsFocused] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(ReactEditor.isFocused(editor));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setIsFocused(ReactEditor.isFocused(editor));
  });
  useIsomorphicLayoutEffect(() => {
    var fn = () => setIsFocused(ReactEditor.isFocused(editor));

    document.addEventListener('focus', fn, true);
    return () => document.removeEventListener('focus', fn, true);
  }, []);
  useIsomorphicLayoutEffect(() => {
    var fn = () => setIsFocused(ReactEditor.isFocused(editor));

    document.addEventListener('blur', fn, true);
    return () => document.removeEventListener('blur', fn, true);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SlateContext.Provider, {
    value: context
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EditorContext.Provider, {
    value: editor
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FocusedContext.Provider, {
    value: isFocused
  }, children)));
};

/**
 * Get the current editor object from the React context.
 * @deprecated Use useSlateStatic instead.
 */

var useEditor = () => {
  var editor = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(EditorContext);

  if (!editor) {
    throw new Error("The `useEditor` hook must be used inside the <Slate> component's context.");
  }

  return editor;
};

/**
 * Utilities for single-line deletion
 */

var doRectsIntersect = (rect, compareRect) => {
  var middle = (compareRect.top + compareRect.bottom) / 2;
  return rect.top <= middle && rect.bottom >= middle;
};

var areRangesSameLine = (editor, range1, range2) => {
  var rect1 = ReactEditor.toDOMRange(editor, range1).getBoundingClientRect();
  var rect2 = ReactEditor.toDOMRange(editor, range2).getBoundingClientRect();
  return doRectsIntersect(rect1, rect2) && doRectsIntersect(rect2, rect1);
};
/**
 * A helper utility that returns the end portion of a `Range`
 * which is located on a single line.
 *
 * @param {Editor} editor The editor object to compare against
 * @param {Range} parentRange The parent range to compare against
 * @returns {Range} A valid portion of the parentRange which is one a single line
 */


var findCurrentLineRange = (editor, parentRange) => {
  var parentRangeBoundary = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].range(editor, slate__WEBPACK_IMPORTED_MODULE_1__["Range"].end(parentRange));
  var positions = Array.from(slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].positions(editor, {
    at: parentRange
  }));
  var left = 0;
  var right = positions.length;
  var middle = Math.floor(right / 2);

  if (areRangesSameLine(editor, slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].range(editor, positions[left]), parentRangeBoundary)) {
    return slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].range(editor, positions[left], parentRangeBoundary);
  }

  if (positions.length < 2) {
    return slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].range(editor, positions[positions.length - 1], parentRangeBoundary);
  }

  while (middle !== positions.length && middle !== left) {
    if (areRangesSameLine(editor, slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].range(editor, positions[middle]), parentRangeBoundary)) {
      right = middle;
    } else {
      left = middle;
    }

    middle = Math.floor((left + right) / 2);
  }

  return slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].range(editor, positions[right], parentRangeBoundary);
};

/**
 * `withReact` adds React and DOM specific behaviors to the editor.
 *
 * If you are using TypeScript, you must extend Slate's CustomTypes to use
 * this plugin.
 *
 * See https://docs.slatejs.org/concepts/11-typescript to learn how.
 */

var withReact = editor => {
  var e = editor;
  var {
    apply,
    onChange,
    deleteBackward
  } = e;

  e.deleteBackward = unit => {
    if (unit !== 'line') {
      return deleteBackward(unit);
    }

    if (editor.selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isCollapsed(editor.selection)) {
      var parentBlockEntry = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].above(editor, {
        match: n => slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isBlock(editor, n),
        at: editor.selection
      });

      if (parentBlockEntry) {
        var [, parentBlockPath] = parentBlockEntry;
        var parentElementRange = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].range(editor, parentBlockPath, editor.selection.anchor);
        var currentLineRange = findCurrentLineRange(e, parentElementRange);

        if (!slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isCollapsed(currentLineRange)) {
          slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].delete(editor, {
            at: currentLineRange
          });
        }
      }
    }
  };

  e.apply = op => {
    var matches = [];

    switch (op.type) {
      case 'insert_text':
      case 'remove_text':
      case 'set_node':
        {
          for (var [node, path] of slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].levels(e, {
            at: op.path
          })) {
            var key = ReactEditor.findKey(e, node);
            matches.push([path, key]);
          }

          break;
        }

      case 'insert_node':
      case 'remove_node':
      case 'merge_node':
      case 'split_node':
        {
          for (var [_node, _path] of slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].levels(e, {
            at: slate__WEBPACK_IMPORTED_MODULE_1__["Path"].parent(op.path)
          })) {
            var _key = ReactEditor.findKey(e, _node);

            matches.push([_path, _key]);
          }

          break;
        }

      case 'move_node':
        {
          for (var [_node2, _path2] of slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].levels(e, {
            at: slate__WEBPACK_IMPORTED_MODULE_1__["Path"].common(slate__WEBPACK_IMPORTED_MODULE_1__["Path"].parent(op.path), slate__WEBPACK_IMPORTED_MODULE_1__["Path"].parent(op.newPath))
          })) {
            var _key2 = ReactEditor.findKey(e, _node2);

            matches.push([_path2, _key2]);
          }

          break;
        }
    }

    apply(op);

    for (var [_path3, _key3] of matches) {
      var [_node3] = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].node(e, _path3);
      NODE_TO_KEY.set(_node3, _key3);
    }
  };

  e.setFragmentData = data => {
    var {
      selection
    } = e;

    if (!selection) {
      return;
    }

    var [start, end] = slate__WEBPACK_IMPORTED_MODULE_1__["Range"].edges(selection);
    var startVoid = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].void(e, {
      at: start.path
    });
    var endVoid = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].void(e, {
      at: end.path
    });

    if (slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isCollapsed(selection) && !startVoid) {
      return;
    } // Create a fake selection so that we can add a Base64-encoded copy of the
    // fragment to the HTML, to decode on future pastes.


    var domRange = ReactEditor.toDOMRange(e, selection);
    var contents = domRange.cloneContents();
    var attach = contents.childNodes[0]; // Make sure attach is non-empty, since empty nodes will not get copied.

    contents.childNodes.forEach(node => {
      if (node.textContent && node.textContent.trim() !== '') {
        attach = node;
      }
    }); // COMPAT: If the end node is a void node, we need to move the end of the
    // range from the void node's spacer span, to the end of the void node's
    // content, since the spacer is before void's content in the DOM.

    if (endVoid) {
      var [voidNode] = endVoid;
      var r = domRange.cloneRange();
      var domNode = ReactEditor.toDOMNode(e, voidNode);
      r.setEndAfter(domNode);
      contents = r.cloneContents();
    } // COMPAT: If the start node is a void node, we need to attach the encoded
    // fragment to the void node's content node instead of the spacer, because
    // attaching it to empty `<div>/<span>` nodes will end up having it erased by
    // most browsers. (2018/04/27)


    if (startVoid) {
      attach = contents.querySelector('[data-slate-spacer]');
    } // Remove any zero-width space spans from the cloned DOM so that they don't
    // show up elsewhere when pasted.


    Array.from(contents.querySelectorAll('[data-slate-zero-width]')).forEach(zw => {
      var isNewline = zw.getAttribute('data-slate-zero-width') === 'n';
      zw.textContent = isNewline ? '\n' : '';
    }); // Set a `data-slate-fragment` attribute on a non-empty node, so it shows up
    // in the HTML, and can be used for intra-Slate pasting. If it's a text
    // node, wrap it in a `<span>` so we have something to set an attribute on.

    if (isDOMText(attach)) {
      var span = document.createElement('span'); // COMPAT: In Chrome and Safari, if we don't add the `white-space` style
      // then leading and trailing spaces will be ignored. (2017/09/21)

      span.style.whiteSpace = 'pre';
      span.appendChild(attach);
      contents.appendChild(span);
      attach = span;
    }

    var fragment = e.getFragment();
    var string = JSON.stringify(fragment);
    var encoded = window.btoa(encodeURIComponent(string));
    attach.setAttribute('data-slate-fragment', encoded);
    data.setData('application/x-slate-fragment', encoded); // Add the content to a <div> so that we can get its inner HTML.

    var div = document.createElement('div');
    div.appendChild(contents);
    div.setAttribute('hidden', 'true');
    document.body.appendChild(div);
    data.setData('text/html', div.innerHTML);
    data.setData('text/plain', getPlainText(div));
    document.body.removeChild(div);
    return data;
  };

  e.insertData = data => {
    var fragment = data.getData('application/x-slate-fragment');

    if (fragment) {
      var decoded = decodeURIComponent(window.atob(fragment));
      var parsed = JSON.parse(decoded);
      e.insertFragment(parsed);
      return;
    }

    var text = data.getData('text/plain');

    if (text) {
      var lines = text.split(/\r\n|\r|\n/);
      var split = false;

      for (var line of lines) {
        if (split) {
          slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].splitNodes(e, {
            always: true
          });
        }

        e.insertText(line);
        split = true;
      }
    }
  };

  e.onChange = () => {
    // COMPAT: React doesn't batch `setState` hook calls, which means that the
    // children and selection can get out of sync for one render pass. So we
    // have to use this unstable API to ensure it batches them. (2019/12/03)
    // https://github.com/facebook/react/issues/14259#issuecomment-439702367
    react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.unstable_batchedUpdates(() => {
      var onContextChange = EDITOR_TO_ON_CHANGE.get(e);

      if (onContextChange) {
        onContextChange();
      }

      onChange();
    });
  };

  return e;
};

// Components
var Editable$1 = IS_ANDROID ? AndroidEditable : Editable;


//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "../node_modules/slate-react/node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/slate-react/node_modules/tiny-invariant/dist/tiny-invariant.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction) {
    throw new Error(prefix);
  } else {
    throw new Error(prefix + ": " + (message || ''));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (invariant);


/***/ }),

/***/ "../node_modules/slate/dist/index.es.js":
/*!**********************************************!*\
  !*** ../node_modules/slate/dist/index.es.js ***!
  \**********************************************/
/*! exports provided: Editor, Element, Location, Node, Operation, Path, PathRef, Point, PointRef, Range, RangeRef, Span, Text, Transforms, createEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return Element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Operation", function() { return Operation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return Path; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathRef", function() { return PathRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointRef", function() { return PointRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeRef", function() { return RangeRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Span", function() { return Span; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transforms", function() { return Transforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEditor", function() { return createEditor; });
/* harmony import */ var is_plain_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-plain-object */ "../node_modules/is-plain-object/dist/is-plain-object.mjs");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "../node_modules/immer/dist/immer.esm.js");



function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var DIRTY_PATHS = new WeakMap();
var FLUSHING = new WeakMap();
var NORMALIZING = new WeakMap();
var PATH_REFS = new WeakMap();
var POINT_REFS = new WeakMap();
var RANGE_REFS = new WeakMap();

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/**
 * Create a new Slate `Editor` object.
 */

var createEditor = () => {
  var editor = {
    children: [],
    operations: [],
    selection: null,
    marks: null,
    isInline: () => false,
    isVoid: () => false,
    onChange: () => {},
    apply: op => {
      for (var ref of Editor.pathRefs(editor)) {
        PathRef.transform(ref, op);
      }

      for (var _ref of Editor.pointRefs(editor)) {
        PointRef.transform(_ref, op);
      }

      for (var _ref2 of Editor.rangeRefs(editor)) {
        RangeRef.transform(_ref2, op);
      }

      var set = new Set();
      var dirtyPaths = [];

      var add = path => {
        if (path) {
          var key = path.join(',');

          if (!set.has(key)) {
            set.add(key);
            dirtyPaths.push(path);
          }
        }
      };

      var oldDirtyPaths = DIRTY_PATHS.get(editor) || [];
      var newDirtyPaths = getDirtyPaths(op);

      for (var path of oldDirtyPaths) {
        var newPath = Path.transform(path, op);
        add(newPath);
      }

      for (var _path of newDirtyPaths) {
        add(_path);
      }

      DIRTY_PATHS.set(editor, dirtyPaths);
      Transforms.transform(editor, op);
      editor.operations.push(op);
      Editor.normalize(editor); // Clear any formats applied to the cursor if the selection changes.

      if (op.type === 'set_selection') {
        editor.marks = null;
      }

      if (!FLUSHING.get(editor)) {
        FLUSHING.set(editor, true);
        Promise.resolve().then(() => {
          FLUSHING.set(editor, false);
          editor.onChange();
          editor.operations = [];
        });
      }
    },
    addMark: (key, value) => {
      var {
        selection
      } = editor;

      if (selection) {
        if (Range.isExpanded(selection)) {
          Transforms.setNodes(editor, {
            [key]: value
          }, {
            match: Text.isText,
            split: true
          });
        } else {
          var marks = _objectSpread$9(_objectSpread$9({}, Editor.marks(editor) || {}), {}, {
            [key]: value
          });

          editor.marks = marks;

          if (!FLUSHING.get(editor)) {
            editor.onChange();
          }
        }
      }
    },
    deleteBackward: unit => {
      var {
        selection
      } = editor;

      if (selection && Range.isCollapsed(selection)) {
        Transforms.delete(editor, {
          unit,
          reverse: true
        });
      }
    },
    deleteForward: unit => {
      var {
        selection
      } = editor;

      if (selection && Range.isCollapsed(selection)) {
        Transforms.delete(editor, {
          unit
        });
      }
    },
    deleteFragment: direction => {
      var {
        selection
      } = editor;

      if (selection && Range.isExpanded(selection)) {
        Transforms.delete(editor, {
          reverse: direction === 'backward'
        });
      }
    },
    getFragment: () => {
      var {
        selection
      } = editor;

      if (selection) {
        return Node.fragment(editor, selection);
      }

      return [];
    },
    insertBreak: () => {
      Transforms.splitNodes(editor, {
        always: true
      });
    },
    insertFragment: fragment => {
      Transforms.insertFragment(editor, fragment);
    },
    insertNode: node => {
      Transforms.insertNodes(editor, node);
    },
    insertText: text => {
      var {
        selection,
        marks
      } = editor;

      if (selection) {
        // If the cursor is at the end of an inline, move it outside of
        // the inline before inserting
        if (Range.isCollapsed(selection)) {
          var inline = Editor.above(editor, {
            match: n => Editor.isInline(editor, n),
            mode: 'highest'
          });

          if (inline) {
            var [, inlinePath] = inline;

            if (Editor.isEnd(editor, selection.anchor, inlinePath)) {
              var point = Editor.after(editor, inlinePath);
              Transforms.setSelection(editor, {
                anchor: point,
                focus: point
              });
            }
          }
        }

        if (marks) {
          var node = _objectSpread$9({
            text
          }, marks);

          Transforms.insertNodes(editor, node);
        } else {
          Transforms.insertText(editor, text);
        }

        editor.marks = null;
      }
    },
    normalizeNode: entry => {
      var [node, path] = entry; // There are no core normalizations for text nodes.

      if (Text.isText(node)) {
        return;
      } // Ensure that block and inline nodes have at least one text child.


      if (Element.isElement(node) && node.children.length === 0) {
        var child = {
          text: ''
        };
        Transforms.insertNodes(editor, child, {
          at: path.concat(0),
          voids: true
        });
        return;
      } // Determine whether the node should have block or inline children.


      var shouldHaveInlines = Editor.isEditor(node) ? false : Element.isElement(node) && (editor.isInline(node) || node.children.length === 0 || Text.isText(node.children[0]) || editor.isInline(node.children[0])); // Since we'll be applying operations while iterating, keep track of an
      // index that accounts for any added/removed nodes.

      var n = 0;

      for (var i = 0; i < node.children.length; i++, n++) {
        var currentNode = Node.get(editor, path);
        if (Text.isText(currentNode)) continue;
        var _child = node.children[i];
        var prev = currentNode.children[n - 1];
        var isLast = i === node.children.length - 1;
        var isInlineOrText = Text.isText(_child) || Element.isElement(_child) && editor.isInline(_child); // Only allow block nodes in the top-level children and parent blocks
        // that only contain block nodes. Similarly, only allow inline nodes in
        // other inline nodes, or parent blocks that only contain inlines and
        // text.

        if (isInlineOrText !== shouldHaveInlines) {
          Transforms.removeNodes(editor, {
            at: path.concat(n),
            voids: true
          });
          n--;
        } else if (Element.isElement(_child)) {
          // Ensure that inline nodes are surrounded by text nodes.
          if (editor.isInline(_child)) {
            if (prev == null || !Text.isText(prev)) {
              var newChild = {
                text: ''
              };
              Transforms.insertNodes(editor, newChild, {
                at: path.concat(n),
                voids: true
              });
              n++;
            } else if (isLast) {
              var _newChild = {
                text: ''
              };
              Transforms.insertNodes(editor, _newChild, {
                at: path.concat(n + 1),
                voids: true
              });
              n++;
            }
          }
        } else {
          // Merge adjacent text nodes that are empty or match.
          if (prev != null && Text.isText(prev)) {
            if (Text.equals(_child, prev, {
              loose: true
            })) {
              Transforms.mergeNodes(editor, {
                at: path.concat(n),
                voids: true
              });
              n--;
            } else if (prev.text === '') {
              Transforms.removeNodes(editor, {
                at: path.concat(n - 1),
                voids: true
              });
              n--;
            } else if (_child.text === '') {
              Transforms.removeNodes(editor, {
                at: path.concat(n),
                voids: true
              });
              n--;
            }
          }
        }
      }
    },
    removeMark: key => {
      var {
        selection
      } = editor;

      if (selection) {
        if (Range.isExpanded(selection)) {
          Transforms.unsetNodes(editor, key, {
            match: Text.isText,
            split: true
          });
        } else {
          var marks = _objectSpread$9({}, Editor.marks(editor) || {});

          delete marks[key];
          editor.marks = marks;

          if (!FLUSHING.get(editor)) {
            editor.onChange();
          }
        }
      }
    }
  };
  return editor;
};
/**
 * Get the "dirty" paths generated from an operation.
 */

var getDirtyPaths = op => {
  switch (op.type) {
    case 'insert_text':
    case 'remove_text':
    case 'set_node':
      {
        var {
          path
        } = op;
        return Path.levels(path);
      }

    case 'insert_node':
      {
        var {
          node,
          path: _path2
        } = op;
        var levels = Path.levels(_path2);
        var descendants = Text.isText(node) ? [] : Array.from(Node.nodes(node), _ref3 => {
          var [, p] = _ref3;
          return _path2.concat(p);
        });
        return [...levels, ...descendants];
      }

    case 'merge_node':
      {
        var {
          path: _path3
        } = op;
        var ancestors = Path.ancestors(_path3);
        var previousPath = Path.previous(_path3);
        return [...ancestors, previousPath];
      }

    case 'move_node':
      {
        var {
          path: _path4,
          newPath
        } = op;

        if (Path.equals(_path4, newPath)) {
          return [];
        }

        var oldAncestors = [];
        var newAncestors = [];

        for (var ancestor of Path.ancestors(_path4)) {
          var p = Path.transform(ancestor, op);
          oldAncestors.push(p);
        }

        for (var _ancestor of Path.ancestors(newPath)) {
          var _p = Path.transform(_ancestor, op);

          newAncestors.push(_p);
        }

        var newParent = newAncestors[newAncestors.length - 1];
        var newIndex = newPath[newPath.length - 1];
        var resultPath = newParent.concat(newIndex);
        return [...oldAncestors, ...newAncestors, resultPath];
      }

    case 'remove_node':
      {
        var {
          path: _path5
        } = op;

        var _ancestors = Path.ancestors(_path5);

        return [..._ancestors];
      }

    case 'split_node':
      {
        var {
          path: _path6
        } = op;

        var _levels = Path.levels(_path6);

        var nextPath = Path.next(_path6);
        return [..._levels, nextPath];
      }

    default:
      {
        return [];
      }
  }
};

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/**
 * Constants for string distance checking.
 */
var SPACE = /\s/;
var PUNCTUATION = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
var CHAMELEON = /['\u2018\u2019]/;
/**
 * Get the distance to the end of the first character in a string of text.
 */

var getCharacterDistance = function getCharacterDistance(str) {
  var isRTL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var isLTR = !isRTL;
  var dist = 0; // prev types:
  // NSEQ: non sequenceable codepoint.
  // MOD: modifier
  // ZWJ: zero width joiner
  // VAR: variation selector
  // BMP: sequenceable codepoint from basic multilingual plane
  // RI: regional indicator
  // KC: keycap
  // TAG: tag

  var prev = null;
  var codepoints = isLTR ? str : codepointsIteratorRTL(str);

  for (var codepoint of codepoints) {
    var code = codepoint.codePointAt(0);
    if (!code) break; // Check if codepoint is part of a sequence.

    if (isZWJ(code)) {
      dist += codepoint.length;
      prev = 'ZWJ';
      continue;
    }

    var [isKeycapStart, isKeycapEnd] = isLTR ? [isKeycap, isCombiningEnclosingKeycap] : [isCombiningEnclosingKeycap, isKeycap];

    if (isKeycapStart(code)) {
      if (prev === 'KC') {
        break;
      }

      dist += codepoint.length;
      prev = 'KC';
      continue;
    }

    if (isKeycapEnd(code)) {
      dist += codepoint.length;
      break;
    }

    if (isVariationSelector(code)) {
      dist += codepoint.length;

      if (isLTR && prev === 'BMP') {
        break;
      }

      prev = 'VAR';
      continue;
    }

    if (isBMPEmoji(code)) {
      if (isLTR && prev && prev !== 'ZWJ' && prev !== 'VAR') {
        break;
      }

      dist += codepoint.length;

      if (isRTL && prev === 'VAR') {
        break;
      }

      prev = 'BMP';
      continue;
    }

    if (isModifier(code)) {
      dist += codepoint.length;
      prev = 'MOD';
      continue;
    }

    var [isTagStart, isTagEnd] = isLTR ? [isBlackFlag, isCancelTag] : [isCancelTag, isBlackFlag];

    if (isTagStart(code)) {
      if (prev === 'TAG') break;
      dist += codepoint.length;
      prev = 'TAG';
      continue;
    }

    if (isTagEnd(code)) {
      dist += codepoint.length;
      break;
    }

    if (prev === 'TAG' && isTag(code)) {
      dist += codepoint.length;
      continue;
    }

    if (isRegionalIndicator(code)) {
      dist += codepoint.length;

      if (prev === 'RI') {
        break;
      }

      prev = 'RI';
      continue;
    }

    if (!isBMP(code)) {
      // If previous code point is not sequenceable, it means we are not in a
      // sequence.
      if (prev === 'NSEQ') {
        break;
      }

      dist += codepoint.length;
      prev = 'NSEQ';
      continue;
    } // Modifier 'groups up' with what ever character is before that (even whitespace), need to
    // look ahead.


    if (isLTR && prev === 'MOD') {
      dist += codepoint.length;
      break;
    } // If while loop ever gets here, we're done (e.g latin chars).


    break;
  }

  return dist || 1;
};
/**
 * Get the distance to the end of the first word in a string of text.
 */

var getWordDistance = function getWordDistance(text) {
  var isRTL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var dist = 0;
  var started = false;

  while (text.length > 0) {
    var charDist = getCharacterDistance(text, isRTL);
    var [char, remaining] = splitByCharacterDistance(text, charDist, isRTL);

    if (isWordCharacter(char, remaining, isRTL)) {
      started = true;
      dist += charDist;
    } else if (!started) {
      dist += charDist;
    } else {
      break;
    }

    text = remaining;
  }

  return dist;
};
/**
 * Split a string in two parts at a given distance starting from the end when
 * `isRTL` is set to `true`.
 */

var splitByCharacterDistance = (str, dist, isRTL) => {
  if (isRTL) {
    var at = str.length - dist;
    return [str.slice(at, str.length), str.slice(0, at)];
  }

  return [str.slice(0, dist), str.slice(dist)];
};
/**
 * Check if a character is a word character. The `remaining` argument is used
 * because sometimes you must read subsequent characters to truly determine it.
 */

var isWordCharacter = function isWordCharacter(char, remaining) {
  var isRTL = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (SPACE.test(char)) {
    return false;
  } // Chameleons count as word characters as long as they're in a word, so
  // recurse to see if the next one is a word character or not.


  if (CHAMELEON.test(char)) {
    var charDist = getCharacterDistance(remaining, isRTL);
    var [nextChar, nextRemaining] = splitByCharacterDistance(remaining, charDist, isRTL);

    if (isWordCharacter(nextChar, nextRemaining, isRTL)) {
      return true;
    }
  }

  if (PUNCTUATION.test(char)) {
    return false;
  }

  return true;
};
/**
 * Does `code` form Modifier with next one.
 *
 * https://emojipedia.org/modifiers/
 */


var isModifier = code => {
  return code >= 0x1f3fb && code <= 0x1f3ff;
};
/**
 * Is `code` a Variation Selector.
 *
 * https://codepoints.net/variation_selectors
 */


var isVariationSelector = code => {
  return code <= 0xfe0f && code >= 0xfe00;
};
/**
 * Is `code` a code point used in keycap sequence.
 *
 * https://emojipedia.org/emoji-keycap-sequence/
 */


var isKeycap = code => {
  return code >= 0x30 && code <= 0x39 || // digits
  code === 0x23 || // number sign
  code === 0x2a;
};
/**
 * Is `code` a Combining Enclosing Keycap.
 *
 * https://emojipedia.org/combining-enclosing-keycap/
 */


var isCombiningEnclosingKeycap = code => {
  return code === 0x20e3;
};
/**
 * Is `code` one of the BMP codes used in emoji sequences.
 *
 * https://emojipedia.org/emoji-zwj-sequences/
 */


var isBMPEmoji = code => {
  // This requires tiny bit of maintanance, better ideas?
  // Fortunately it only happens if new Unicode Standard
  // is released. Fails gracefully if upkeep lags behind,
  // same way Slate previously behaved with all emojis.
  return code === 0x2764 || // heart (❤)
  code === 0x2642 || // male (♂)
  code === 0x2640 || // female (♀)
  code === 0x2620 || // scull (☠)
  code === 0x2695 || // medical (⚕)
  code === 0x2708 || // plane (✈️)
  code === 0x25ef || // large circle (◯)
  code === 0x2b06 || // up arrow (⬆)
  code === 0x2197 || // up-right arrow (↗)
  code === 0x27a1 || // right arrow (➡)
  code === 0x2198 || // down-right arrow (↘)
  code === 0x2b07 || // down arrow (⬇)
  code === 0x2199 || // down-left arrow (↙)
  code === 0x2b05 || // left arrow (⬅)
  code === 0x2196 || // up-left arrow (↖)
  code === 0x2195 || // up-down arrow (↕)
  code === 0x2194 || // left-right arrow (↔)
  code === 0x21a9 || // right arrow curving left (↩)
  code === 0x21aa || // left arrow curving right (↪)
  code === 0x2934 || // right arrow curving up (⤴)
  code === 0x2935 // right arrow curving down (⤵)
  ;
};
/**
 * Is `code` a Regional Indicator.
 *
 * https://en.wikipedia.org/wiki/Regional_indicator_symbol
 */


var isRegionalIndicator = code => {
  return code >= 0x1f1e6 && code <= 0x1f1ff;
};
/**
 * Is `code` from basic multilingual plane.
 *
 * https://codepoints.net/basic_multilingual_plane
 */


var isBMP = code => {
  return code <= 0xffff;
};
/**
 * Is `code` a Zero Width Joiner.
 *
 * https://emojipedia.org/zero-width-joiner/
 */


var isZWJ = code => {
  return code === 0x200d;
};
/**
 * Is `code` a Black Flag.
 *
 * https://emojipedia.org/black-flag/
 */


var isBlackFlag = code => {
  return code === 0x1f3f4;
};
/**
 * Is `code` a Tag.
 *
 * https://emojipedia.org/emoji-tag-sequence/
 */


var isTag = code => {
  return code >= 0xe0000 && code <= 0xe007f;
};
/**
 * Is `code` a Cancel Tag.
 *
 * https://emojipedia.org/cancel-tag/
 */


var isCancelTag = code => {
  return code === 0xe007f;
};
/**
 * Iterate on codepoints from right to left.
 */


var codepointsIteratorRTL = function* codepointsIteratorRTL(str) {
  var end = str.length - 1;

  for (var i = 0; i < str.length; i++) {
    var char1 = str.charAt(end - i);

    if (isLowSurrogate(char1.charCodeAt(0))) {
      var char2 = str.charAt(end - i - 1);

      if (isHighSurrogate(char2.charCodeAt(0))) {
        yield char2 + char1;
        i++;
        continue;
      }
    }

    yield char1;
  }
};
/**
 * Is `charCode` a high surrogate.
 *
 * https://en.wikipedia.org/wiki/Universal_Character_Set_characters#Surrogates
 */

var isHighSurrogate = charCode => {
  return charCode >= 0xd800 && charCode <= 0xdbff;
};
/**
 * Is `charCode` a low surrogate.
 *
 * https://en.wikipedia.org/wiki/Universal_Character_Set_characters#Surrogates
 */


var isLowSurrogate = charCode => {
  return charCode >= 0xdc00 && charCode <= 0xdfff;
};

/**
 * Shared the function with isElementType utility
 */

var isElement = value => {
  return Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(value) && Node.isNodeList(value.children) && !Editor.isEditor(value);
};

var Element = {
  /**
   * Check if a value implements the 'Ancestor' interface.
   */
  isAncestor(value) {
    return Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(value) && Node.isNodeList(value.children);
  },

  /**
   * Check if a value implements the `Element` interface.
   */
  isElement,

  /**
   * Check if a value is an array of `Element` objects.
   */
  isElementList(value) {
    return Array.isArray(value) && value.every(val => Element.isElement(val));
  },

  /**
   * Check if a set of props is a partial of Element.
   */
  isElementProps(props) {
    return props.children !== undefined;
  },

  /**
   * Check if a value implements the `Element` interface and has elementKey with selected value.
   * Default it check to `type` key value
   */
  isElementType: function isElementType(value, elementVal) {
    var elementKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'type';
    return isElement(value) && value[elementKey] === elementVal;
  },

  /**
   * Check if an element matches set of properties.
   *
   * Note: this checks custom properties, and it does not ensure that any
   * children are equivalent.
   */
  matches(element, props) {
    for (var key in props) {
      if (key === 'children') {
        continue;
      }

      if (element[key] !== props[key]) {
        return false;
      }
    }

    return true;
  }

};

var _excluded$4 = ["text"],
    _excluded2$3 = ["text"];

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var IS_EDITOR_CACHE = new WeakMap();
var Editor = {
  /**
   * Get the ancestor above a location in the document.
   */
  above(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      voids = false,
      mode = 'lowest',
      at = editor.selection,
      match
    } = options;

    if (!at) {
      return;
    }

    var path = Editor.path(editor, at);
    var reverse = mode === 'lowest';

    for (var [n, p] of Editor.levels(editor, {
      at: path,
      voids,
      match,
      reverse
    })) {
      if (!Text.isText(n) && !Path.equals(path, p)) {
        return [n, p];
      }
    }
  },

  /**
   * Add a custom property to the leaf text nodes in the current selection.
   *
   * If the selection is currently collapsed, the marks will be added to the
   * `editor.marks` property instead, and applied when text is inserted next.
   */
  addMark(editor, key, value) {
    editor.addMark(key, value);
  },

  /**
   * Get the point after a location.
   */
  after(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var anchor = Editor.point(editor, at, {
      edge: 'end'
    });
    var focus = Editor.end(editor, []);
    var range = {
      anchor,
      focus
    };
    var {
      distance = 1
    } = options;
    var d = 0;
    var target;

    for (var p of Editor.positions(editor, _objectSpread$8(_objectSpread$8({}, options), {}, {
      at: range
    }))) {
      if (d > distance) {
        break;
      }

      if (d !== 0) {
        target = p;
      }

      d++;
    }

    return target;
  },

  /**
   * Get the point before a location.
   */
  before(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var anchor = Editor.start(editor, []);
    var focus = Editor.point(editor, at, {
      edge: 'start'
    });
    var range = {
      anchor,
      focus
    };
    var {
      distance = 1
    } = options;
    var d = 0;
    var target;

    for (var p of Editor.positions(editor, _objectSpread$8(_objectSpread$8({}, options), {}, {
      at: range,
      reverse: true
    }))) {
      if (d > distance) {
        break;
      }

      if (d !== 0) {
        target = p;
      }

      d++;
    }

    return target;
  },

  /**
   * Delete content in the editor backward from the current selection.
   */
  deleteBackward(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      unit = 'character'
    } = options;
    editor.deleteBackward(unit);
  },

  /**
   * Delete content in the editor forward from the current selection.
   */
  deleteForward(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      unit = 'character'
    } = options;
    editor.deleteForward(unit);
  },

  /**
   * Delete the content in the current selection.
   */
  deleteFragment(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      direction = 'forward'
    } = options;
    editor.deleteFragment(direction);
  },

  /**
   * Get the start and end points of a location.
   */
  edges(editor, at) {
    return [Editor.start(editor, at), Editor.end(editor, at)];
  },

  /**
   * Get the end point of a location.
   */
  end(editor, at) {
    return Editor.point(editor, at, {
      edge: 'end'
    });
  },

  /**
   * Get the first node at a location.
   */
  first(editor, at) {
    var path = Editor.path(editor, at, {
      edge: 'start'
    });
    return Editor.node(editor, path);
  },

  /**
   * Get the fragment at a location.
   */
  fragment(editor, at) {
    var range = Editor.range(editor, at);
    var fragment = Node.fragment(editor, range);
    return fragment;
  },

  /**
   * Check if a node has block children.
   */
  hasBlocks(editor, element) {
    return element.children.some(n => Editor.isBlock(editor, n));
  },

  /**
   * Check if a node has inline and text children.
   */
  hasInlines(editor, element) {
    return element.children.some(n => Text.isText(n) || Editor.isInline(editor, n));
  },

  /**
   * Check if a node has text children.
   */
  hasTexts(editor, element) {
    return element.children.every(n => Text.isText(n));
  },

  /**
   * Insert a block break at the current selection.
   *
   * If the selection is currently expanded, it will be deleted first.
   */
  insertBreak(editor) {
    editor.insertBreak();
  },

  /**
   * Insert a fragment at the current selection.
   *
   * If the selection is currently expanded, it will be deleted first.
   */
  insertFragment(editor, fragment) {
    editor.insertFragment(fragment);
  },

  /**
   * Insert a node at the current selection.
   *
   * If the selection is currently expanded, it will be deleted first.
   */
  insertNode(editor, node) {
    editor.insertNode(node);
  },

  /**
   * Insert text at the current selection.
   *
   * If the selection is currently expanded, it will be deleted first.
   */
  insertText(editor, text) {
    editor.insertText(text);
  },

  /**
   * Check if a value is a block `Element` object.
   */
  isBlock(editor, value) {
    return Element.isElement(value) && !editor.isInline(value);
  },

  /**
   * Check if a value is an `Editor` object.
   */
  isEditor(value) {
    if (!Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(value)) return false;
    var cachedIsEditor = IS_EDITOR_CACHE.get(value);

    if (cachedIsEditor !== undefined) {
      return cachedIsEditor;
    }

    var isEditor = typeof value.addMark === 'function' && typeof value.apply === 'function' && typeof value.deleteBackward === 'function' && typeof value.deleteForward === 'function' && typeof value.deleteFragment === 'function' && typeof value.insertBreak === 'function' && typeof value.insertFragment === 'function' && typeof value.insertNode === 'function' && typeof value.insertText === 'function' && typeof value.isInline === 'function' && typeof value.isVoid === 'function' && typeof value.normalizeNode === 'function' && typeof value.onChange === 'function' && typeof value.removeMark === 'function' && (value.marks === null || Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(value.marks)) && (value.selection === null || Range.isRange(value.selection)) && Node.isNodeList(value.children) && Operation.isOperationList(value.operations);
    IS_EDITOR_CACHE.set(value, isEditor);
    return isEditor;
  },

  /**
   * Check if a point is the end point of a location.
   */
  isEnd(editor, point, at) {
    var end = Editor.end(editor, at);
    return Point.equals(point, end);
  },

  /**
   * Check if a point is an edge of a location.
   */
  isEdge(editor, point, at) {
    return Editor.isStart(editor, point, at) || Editor.isEnd(editor, point, at);
  },

  /**
   * Check if an element is empty, accounting for void nodes.
   */
  isEmpty(editor, element) {
    var {
      children
    } = element;
    var [first] = children;
    return children.length === 0 || children.length === 1 && Text.isText(first) && first.text === '' && !editor.isVoid(element);
  },

  /**
   * Check if a value is an inline `Element` object.
   */
  isInline(editor, value) {
    return Element.isElement(value) && editor.isInline(value);
  },

  /**
   * Check if the editor is currently normalizing after each operation.
   */
  isNormalizing(editor) {
    var isNormalizing = NORMALIZING.get(editor);
    return isNormalizing === undefined ? true : isNormalizing;
  },

  /**
   * Check if a point is the start point of a location.
   */
  isStart(editor, point, at) {
    // PERF: If the offset isn't `0` we know it's not the start.
    if (point.offset !== 0) {
      return false;
    }

    var start = Editor.start(editor, at);
    return Point.equals(point, start);
  },

  /**
   * Check if a value is a void `Element` object.
   */
  isVoid(editor, value) {
    return Element.isElement(value) && editor.isVoid(value);
  },

  /**
   * Get the last node at a location.
   */
  last(editor, at) {
    var path = Editor.path(editor, at, {
      edge: 'end'
    });
    return Editor.node(editor, path);
  },

  /**
   * Get the leaf text node at a location.
   */
  leaf(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var path = Editor.path(editor, at, options);
    var node = Node.leaf(editor, path);
    return [node, path];
  },

  /**
   * Iterate through all of the levels at a location.
   */
  *levels(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      at = editor.selection,
      reverse = false,
      voids = false
    } = options;
    var {
      match
    } = options;

    if (match == null) {
      match = () => true;
    }

    if (!at) {
      return;
    }

    var levels = [];
    var path = Editor.path(editor, at);

    for (var [n, p] of Node.levels(editor, path)) {
      if (!match(n, p)) {
        continue;
      }

      levels.push([n, p]);

      if (!voids && Editor.isVoid(editor, n)) {
        break;
      }
    }

    if (reverse) {
      levels.reverse();
    }

    yield* levels;
  },

  /**
   * Get the marks that would be added to text at the current selection.
   */
  marks(editor) {
    var {
      marks,
      selection
    } = editor;

    if (!selection) {
      return null;
    }

    if (marks) {
      return marks;
    }

    if (Range.isExpanded(selection)) {
      var [match] = Editor.nodes(editor, {
        match: Text.isText
      });

      if (match) {
        var [_node] = match;

        var _rest = _objectWithoutProperties(_node, _excluded$4);

        return _rest;
      } else {
        return {};
      }
    }

    var {
      anchor
    } = selection;
    var {
      path
    } = anchor;
    var [node] = Editor.leaf(editor, path);

    if (anchor.offset === 0) {
      var prev = Editor.previous(editor, {
        at: path,
        match: Text.isText
      });
      var block = Editor.above(editor, {
        match: n => Editor.isBlock(editor, n)
      });

      if (prev && block) {
        var [prevNode, prevPath] = prev;
        var [, blockPath] = block;

        if (Path.isAncestor(blockPath, prevPath)) {
          node = prevNode;
        }
      }
    }

    var rest = _objectWithoutProperties(node, _excluded2$3);

    return rest;
  },

  /**
   * Get the matching node in the branch of the document after a location.
   */
  next(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      mode = 'lowest',
      voids = false
    } = options;
    var {
      match,
      at = editor.selection
    } = options;

    if (!at) {
      return;
    }

    var pointAfterLocation = Editor.after(editor, at, {
      voids
    });
    if (!pointAfterLocation) return;
    var [, to] = Editor.last(editor, []);
    var span = [pointAfterLocation.path, to];

    if (Path.isPath(at) && at.length === 0) {
      throw new Error("Cannot get the next node from the root node!");
    }

    if (match == null) {
      if (Path.isPath(at)) {
        var [parent] = Editor.parent(editor, at);

        match = n => parent.children.includes(n);
      } else {
        match = () => true;
      }
    }

    var [next] = Editor.nodes(editor, {
      at: span,
      match,
      mode,
      voids
    });
    return next;
  },

  /**
   * Get the node at a location.
   */
  node(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var path = Editor.path(editor, at, options);
    var node = Node.get(editor, path);
    return [node, path];
  },

  /**
   * Iterate through all of the nodes in the Editor.
   */
  *nodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      at = editor.selection,
      mode = 'all',
      universal = false,
      reverse = false,
      voids = false
    } = options;
    var {
      match
    } = options;

    if (!match) {
      match = () => true;
    }

    if (!at) {
      return;
    }

    var from;
    var to;

    if (Span.isSpan(at)) {
      from = at[0];
      to = at[1];
    } else {
      var first = Editor.path(editor, at, {
        edge: 'start'
      });
      var last = Editor.path(editor, at, {
        edge: 'end'
      });
      from = reverse ? last : first;
      to = reverse ? first : last;
    }

    var nodeEntries = Node.nodes(editor, {
      reverse,
      from,
      to,
      pass: _ref => {
        var [n] = _ref;
        return voids ? false : Editor.isVoid(editor, n);
      }
    });
    var matches = [];
    var hit;

    for (var [node, path] of nodeEntries) {
      var isLower = hit && Path.compare(path, hit[1]) === 0; // In highest mode any node lower than the last hit is not a match.

      if (mode === 'highest' && isLower) {
        continue;
      }

      if (!match(node, path)) {
        // If we've arrived at a leaf text node that is not lower than the last
        // hit, then we've found a branch that doesn't include a match, which
        // means the match is not universal.
        if (universal && !isLower && Text.isText(node)) {
          return;
        } else {
          continue;
        }
      } // If there's a match and it's lower than the last, update the hit.


      if (mode === 'lowest' && isLower) {
        hit = [node, path];
        continue;
      } // In lowest mode we emit the last hit, once it's guaranteed lowest.


      var emit = mode === 'lowest' ? hit : [node, path];

      if (emit) {
        if (universal) {
          matches.push(emit);
        } else {
          yield emit;
        }
      }

      hit = [node, path];
    } // Since lowest is always emitting one behind, catch up at the end.


    if (mode === 'lowest' && hit) {
      if (universal) {
        matches.push(hit);
      } else {
        yield hit;
      }
    } // Universal defers to ensure that the match occurs in every branch, so we
    // yield all of the matches after iterating.


    if (universal) {
      yield* matches;
    }
  },

  /**
   * Normalize any dirty objects in the editor.
   */
  normalize(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      force = false
    } = options;

    var getDirtyPaths = editor => {
      return DIRTY_PATHS.get(editor) || [];
    };

    if (!Editor.isNormalizing(editor)) {
      return;
    }

    if (force) {
      var allPaths = Array.from(Node.nodes(editor), _ref2 => {
        var [, p] = _ref2;
        return p;
      });
      DIRTY_PATHS.set(editor, allPaths);
    }

    if (getDirtyPaths(editor).length === 0) {
      return;
    }

    Editor.withoutNormalizing(editor, () => {
      /*
        Fix dirty elements with no children.
        editor.normalizeNode() does fix this, but some normalization fixes also require it to work.
        Running an initial pass avoids the catch-22 race condition.
      */
      for (var dirtyPath of getDirtyPaths(editor)) {
        if (Node.has(editor, dirtyPath)) {
          var entry = Editor.node(editor, dirtyPath);
          var [node, _] = entry;
          /*
            The default normalizer inserts an empty text node in this scenario, but it can be customised.
            So there is some risk here.
                       As long as the normalizer only inserts child nodes for this case it is safe to do in any order;
            by definition adding children to an empty node can't cause other paths to change.
          */

          if (Element.isElement(node) && node.children.length === 0) {
            editor.normalizeNode(entry);
          }
        }
      }

      var max = getDirtyPaths(editor).length * 42; // HACK: better way?

      var m = 0;

      while (getDirtyPaths(editor).length !== 0) {
        if (m > max) {
          throw new Error("\n            Could not completely normalize the editor after ".concat(max, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.\n          "));
        }

        var _dirtyPath = getDirtyPaths(editor).pop(); // If the node doesn't exist in the tree, it does not need to be normalized.


        if (Node.has(editor, _dirtyPath)) {
          var _entry = Editor.node(editor, _dirtyPath);

          editor.normalizeNode(_entry);
        }

        m++;
      }
    });
  },

  /**
   * Get the parent node of a location.
   */
  parent(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var path = Editor.path(editor, at, options);
    var parentPath = Path.parent(path);
    var entry = Editor.node(editor, parentPath);
    return entry;
  },

  /**
   * Get the path of a location.
   */
  path(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      depth,
      edge
    } = options;

    if (Path.isPath(at)) {
      if (edge === 'start') {
        var [, firstPath] = Node.first(editor, at);
        at = firstPath;
      } else if (edge === 'end') {
        var [, lastPath] = Node.last(editor, at);
        at = lastPath;
      }
    }

    if (Range.isRange(at)) {
      if (edge === 'start') {
        at = Range.start(at);
      } else if (edge === 'end') {
        at = Range.end(at);
      } else {
        at = Path.common(at.anchor.path, at.focus.path);
      }
    }

    if (Point.isPoint(at)) {
      at = at.path;
    }

    if (depth != null) {
      at = at.slice(0, depth);
    }

    return at;
  },

  hasPath(editor, path) {
    return Node.has(editor, path);
  },

  /**
   * Create a mutable ref for a `Path` object, which will stay in sync as new
   * operations are applied to the editor.
   */
  pathRef(editor, path) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      affinity = 'forward'
    } = options;
    var ref = {
      current: path,
      affinity,

      unref() {
        var {
          current
        } = ref;
        var pathRefs = Editor.pathRefs(editor);
        pathRefs.delete(ref);
        ref.current = null;
        return current;
      }

    };
    var refs = Editor.pathRefs(editor);
    refs.add(ref);
    return ref;
  },

  /**
   * Get the set of currently tracked path refs of the editor.
   */
  pathRefs(editor) {
    var refs = PATH_REFS.get(editor);

    if (!refs) {
      refs = new Set();
      PATH_REFS.set(editor, refs);
    }

    return refs;
  },

  /**
   * Get the start or end point of a location.
   */
  point(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      edge = 'start'
    } = options;

    if (Path.isPath(at)) {
      var path;

      if (edge === 'end') {
        var [, lastPath] = Node.last(editor, at);
        path = lastPath;
      } else {
        var [, firstPath] = Node.first(editor, at);
        path = firstPath;
      }

      var node = Node.get(editor, path);

      if (!Text.isText(node)) {
        throw new Error("Cannot get the ".concat(edge, " point in the node at path [").concat(at, "] because it has no ").concat(edge, " text node."));
      }

      return {
        path,
        offset: edge === 'end' ? node.text.length : 0
      };
    }

    if (Range.isRange(at)) {
      var [start, end] = Range.edges(at);
      return edge === 'start' ? start : end;
    }

    return at;
  },

  /**
   * Create a mutable ref for a `Point` object, which will stay in sync as new
   * operations are applied to the editor.
   */
  pointRef(editor, point) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      affinity = 'forward'
    } = options;
    var ref = {
      current: point,
      affinity,

      unref() {
        var {
          current
        } = ref;
        var pointRefs = Editor.pointRefs(editor);
        pointRefs.delete(ref);
        ref.current = null;
        return current;
      }

    };
    var refs = Editor.pointRefs(editor);
    refs.add(ref);
    return ref;
  },

  /**
   * Get the set of currently tracked point refs of the editor.
   */
  pointRefs(editor) {
    var refs = POINT_REFS.get(editor);

    if (!refs) {
      refs = new Set();
      POINT_REFS.set(editor, refs);
    }

    return refs;
  },

  /**
   * Return all the positions in `at` range where a `Point` can be placed.
   *
   * By default, moves forward by individual offsets at a time, but
   * the `unit` option can be used to to move by character, word, line, or block.
   *
   * The `reverse` option can be used to change iteration direction.
   *
   * Note: By default void nodes are treated as a single point and iteration
   * will not happen inside their content unless you pass in true for the
   * `voids` option, then iteration will occur.
   */
  *positions(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      at = editor.selection,
      unit = 'offset',
      reverse = false,
      voids = false
    } = options;

    if (!at) {
      return;
    }
    /**
     * Algorithm notes:
     *
     * Each step `distance` is dynamic depending on the underlying text
     * and the `unit` specified.  Each step, e.g., a line or word, may
     * span multiple text nodes, so we iterate through the text both on
     * two levels in step-sync:
     *
     * `leafText` stores the text on a text leaf level, and is advanced
     * through using the counters `leafTextOffset` and `leafTextRemaining`.
     *
     * `blockText` stores the text on a block level, and is shortened
     * by `distance` every time it is advanced.
     *
     * We only maintain a window of one blockText and one leafText because
     * a block node always appears before all of its leaf nodes.
     */


    var range = Editor.range(editor, at);
    var [start, end] = Range.edges(range);
    var first = reverse ? end : start;
    var isNewBlock = false;
    var blockText = '';
    var distance = 0; // Distance for leafText to catch up to blockText.

    var leafTextRemaining = 0;
    var leafTextOffset = 0; // Iterate through all nodes in range, grabbing entire textual content
    // of block nodes in blockText, and text nodes in leafText.
    // Exploits the fact that nodes are sequenced in such a way that we first
    // encounter the block node, then all of its text nodes, so when iterating
    // through the blockText and leafText we just need to remember a window of
    // one block node and leaf node, respectively.

    for (var [node, path] of Editor.nodes(editor, {
      at,
      reverse,
      voids
    })) {
      /*
       * ELEMENT NODE - Yield position(s) for voids, collect blockText for blocks
       */
      if (Element.isElement(node)) {
        // Void nodes are a special case, so by default we will always
        // yield their first point. If the `voids` option is set to true,
        // then we will iterate over their content.
        if (!voids && editor.isVoid(node)) {
          yield Editor.start(editor, path);
          continue;
        } // Inline element nodes are ignored as they don't themselves
        // contribute to `blockText` or `leafText` - their parent and
        // children do.


        if (editor.isInline(node)) continue; // Block element node - set `blockText` to its text content.

        if (Editor.hasInlines(editor, node)) {
          // We always exhaust block nodes before encountering a new one:
          //   console.assert(blockText === '',
          //     `blockText='${blockText}' - `+
          //     `not exhausted before new block node`, path)
          // Ensure range considered is capped to `range`, in the
          // start/end edge cases where block extends beyond range.
          // Equivalent to this, but presumably more performant:
          //   blockRange = Editor.range(editor, ...Editor.edges(editor, path))
          //   blockRange = Range.intersection(range, blockRange) // intersect
          //   blockText = Editor.string(editor, blockRange, { voids })
          var e = Path.isAncestor(path, end.path) ? end : Editor.end(editor, path);
          var s = Path.isAncestor(path, start.path) ? start : Editor.start(editor, path);
          blockText = Editor.string(editor, {
            anchor: s,
            focus: e
          }, {
            voids
          });
          isNewBlock = true;
        }
      }
      /*
       * TEXT LEAF NODE - Iterate through text content, yielding
       * positions every `distance` offset according to `unit`.
       */


      if (Text.isText(node)) {
        var isFirst = Path.equals(path, first.path); // Proof that we always exhaust text nodes before encountering a new one:
        //   console.assert(leafTextRemaining <= 0,
        //     `leafTextRemaining=${leafTextRemaining} - `+
        //     `not exhausted before new leaf text node`, path)
        // Reset `leafText` counters for new text node.

        if (isFirst) {
          leafTextRemaining = reverse ? first.offset : node.text.length - first.offset;
          leafTextOffset = first.offset; // Works for reverse too.
        } else {
          leafTextRemaining = node.text.length;
          leafTextOffset = reverse ? leafTextRemaining : 0;
        } // Yield position at the start of node (potentially).


        if (isFirst || isNewBlock || unit === 'offset') {
          yield {
            path,
            offset: leafTextOffset
          };
          isNewBlock = false;
        } // Yield positions every (dynamically calculated) `distance` offset.


        while (true) {
          // If `leafText` has caught up with `blockText` (distance=0),
          // and if blockText is exhausted, break to get another block node,
          // otherwise advance blockText forward by the new `distance`.
          if (distance === 0) {
            if (blockText === '') break;
            distance = calcDistance(blockText, unit, reverse); // Split the string at the previously found distance and use the
            // remaining string for the next iteration.

            blockText = splitByCharacterDistance(blockText, distance, reverse)[1];
          } // Advance `leafText` by the current `distance`.


          leafTextOffset = reverse ? leafTextOffset - distance : leafTextOffset + distance;
          leafTextRemaining = leafTextRemaining - distance; // If `leafText` is exhausted, break to get a new leaf node
          // and set distance to the overflow amount, so we'll (maybe)
          // catch up to blockText in the next leaf text node.

          if (leafTextRemaining < 0) {
            distance = -leafTextRemaining;
            break;
          } // Successfully walked `distance` offsets through `leafText`
          // to catch up with `blockText`, so we can reset `distance`
          // and yield this position in this node.


          distance = 0;
          yield {
            path,
            offset: leafTextOffset
          };
        }
      }
    } // Proof that upon completion, we've exahusted both leaf and block text:
    //   console.assert(leafTextRemaining <= 0, "leafText wasn't exhausted")
    //   console.assert(blockText === '', "blockText wasn't exhausted")
    // Helper:
    // Return the distance in offsets for a step of size `unit` on given string.


    function calcDistance(text, unit, reverse) {
      if (unit === 'character') {
        return getCharacterDistance(text, reverse);
      } else if (unit === 'word') {
        return getWordDistance(text, reverse);
      } else if (unit === 'line' || unit === 'block') {
        return text.length;
      }

      return 1;
    }
  },

  /**
   * Get the matching node in the branch of the document before a location.
   */
  previous(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      mode = 'lowest',
      voids = false
    } = options;
    var {
      match,
      at = editor.selection
    } = options;

    if (!at) {
      return;
    }

    var pointBeforeLocation = Editor.before(editor, at, {
      voids
    });

    if (!pointBeforeLocation) {
      return;
    }

    var [, to] = Editor.first(editor, []); // The search location is from the start of the document to the path of
    // the point before the location passed in

    var span = [pointBeforeLocation.path, to];

    if (Path.isPath(at) && at.length === 0) {
      throw new Error("Cannot get the previous node from the root node!");
    }

    if (match == null) {
      if (Path.isPath(at)) {
        var [parent] = Editor.parent(editor, at);

        match = n => parent.children.includes(n);
      } else {
        match = () => true;
      }
    }

    var [previous] = Editor.nodes(editor, {
      reverse: true,
      at: span,
      match,
      mode,
      voids
    });
    return previous;
  },

  /**
   * Get a range of a location.
   */
  range(editor, at, to) {
    if (Range.isRange(at) && !to) {
      return at;
    }

    var start = Editor.start(editor, at);
    var end = Editor.end(editor, to || at);
    return {
      anchor: start,
      focus: end
    };
  },

  /**
   * Create a mutable ref for a `Range` object, which will stay in sync as new
   * operations are applied to the editor.
   */
  rangeRef(editor, range) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      affinity = 'forward'
    } = options;
    var ref = {
      current: range,
      affinity,

      unref() {
        var {
          current
        } = ref;
        var rangeRefs = Editor.rangeRefs(editor);
        rangeRefs.delete(ref);
        ref.current = null;
        return current;
      }

    };
    var refs = Editor.rangeRefs(editor);
    refs.add(ref);
    return ref;
  },

  /**
   * Get the set of currently tracked range refs of the editor.
   */
  rangeRefs(editor) {
    var refs = RANGE_REFS.get(editor);

    if (!refs) {
      refs = new Set();
      RANGE_REFS.set(editor, refs);
    }

    return refs;
  },

  /**
   * Remove a custom property from all of the leaf text nodes in the current
   * selection.
   *
   * If the selection is currently collapsed, the removal will be stored on
   * `editor.marks` and applied to the text inserted next.
   */
  removeMark(editor, key) {
    editor.removeMark(key);
  },

  /**
   * Manually set if the editor should currently be normalizing.
   *
   * Note: Using this incorrectly can leave the editor in an invalid state.
   *
   */
  setNormalizing(editor, isNormalizing) {
    NORMALIZING.set(editor, isNormalizing);
  },

  /**
   * Get the start point of a location.
   */
  start(editor, at) {
    return Editor.point(editor, at, {
      edge: 'start'
    });
  },

  /**
   * Get the text string content of a location.
   *
   * Note: by default the text of void nodes is considered to be an empty
   * string, regardless of content, unless you pass in true for the voids option
   */
  string(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      voids = false
    } = options;
    var range = Editor.range(editor, at);
    var [start, end] = Range.edges(range);
    var text = '';

    for (var [node, path] of Editor.nodes(editor, {
      at: range,
      match: Text.isText,
      voids
    })) {
      var t = node.text;

      if (Path.equals(path, end.path)) {
        t = t.slice(0, end.offset);
      }

      if (Path.equals(path, start.path)) {
        t = t.slice(start.offset);
      }

      text += t;
    }

    return text;
  },

  /**
   * Convert a range into a non-hanging one.
   */
  unhangRange(editor, range) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      voids = false
    } = options;
    var [start, end] = Range.edges(range); // PERF: exit early if we can guarantee that the range isn't hanging.

    if (start.offset !== 0 || end.offset !== 0 || Range.isCollapsed(range)) {
      return range;
    }

    var endBlock = Editor.above(editor, {
      at: end,
      match: n => Editor.isBlock(editor, n)
    });
    var blockPath = endBlock ? endBlock[1] : [];
    var first = Editor.start(editor, []);
    var before = {
      anchor: first,
      focus: end
    };
    var skip = true;

    for (var [node, path] of Editor.nodes(editor, {
      at: before,
      match: Text.isText,
      reverse: true,
      voids
    })) {
      if (skip) {
        skip = false;
        continue;
      }

      if (node.text !== '' || Path.isBefore(path, blockPath)) {
        end = {
          path,
          offset: node.text.length
        };
        break;
      }
    }

    return {
      anchor: start,
      focus: end
    };
  },

  /**
   * Match a void node in the current branch of the editor.
   */
  void(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return Editor.above(editor, _objectSpread$8(_objectSpread$8({}, options), {}, {
      match: n => Editor.isVoid(editor, n)
    }));
  },

  /**
   * Call a function, deferring normalization until after it completes.
   */
  withoutNormalizing(editor, fn) {
    var value = Editor.isNormalizing(editor);
    Editor.setNormalizing(editor, false);

    try {
      fn();
    } finally {
      Editor.setNormalizing(editor, value);
    }

    Editor.normalize(editor);
  }

};

var Location = {
  /**
   * Check if a value implements the `Location` interface.
   */
  isLocation(value) {
    return Path.isPath(value) || Point.isPoint(value) || Range.isRange(value);
  }

};
var Span = {
  /**
   * Check if a value implements the `Span` interface.
   */
  isSpan(value) {
    return Array.isArray(value) && value.length === 2 && value.every(Path.isPath);
  }

};

var _excluded$3 = ["children"],
    _excluded2$2 = ["text"];
var IS_NODE_LIST_CACHE = new WeakMap();
var Node = {
  /**
   * Get the node at a specific path, asserting that it's an ancestor node.
   */
  ancestor(root, path) {
    var node = Node.get(root, path);

    if (Text.isText(node)) {
      throw new Error("Cannot get the ancestor node at path [".concat(path, "] because it refers to a text node instead: ").concat(node));
    }

    return node;
  },

  /**
   * Return a generator of all the ancestor nodes above a specific path.
   *
   * By default the order is bottom-up, from lowest to highest ancestor in
   * the tree, but you can pass the `reverse: true` option to go top-down.
   */
  *ancestors(root, path) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    for (var p of Path.ancestors(path, options)) {
      var n = Node.ancestor(root, p);
      var entry = [n, p];
      yield entry;
    }
  },

  /**
   * Get the child of a node at a specific index.
   */
  child(root, index) {
    if (Text.isText(root)) {
      throw new Error("Cannot get the child of a text node: ".concat(JSON.stringify(root)));
    }

    var c = root.children[index];

    if (c == null) {
      throw new Error("Cannot get child at index `".concat(index, "` in node: ").concat(JSON.stringify(root)));
    }

    return c;
  },

  /**
   * Iterate over the children of a node at a specific path.
   */
  *children(root, path) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      reverse = false
    } = options;
    var ancestor = Node.ancestor(root, path);
    var {
      children
    } = ancestor;
    var index = reverse ? children.length - 1 : 0;

    while (reverse ? index >= 0 : index < children.length) {
      var child = Node.child(ancestor, index);
      var childPath = path.concat(index);
      yield [child, childPath];
      index = reverse ? index - 1 : index + 1;
    }
  },

  /**
   * Get an entry for the common ancesetor node of two paths.
   */
  common(root, path, another) {
    var p = Path.common(path, another);
    var n = Node.get(root, p);
    return [n, p];
  },

  /**
   * Get the node at a specific path, asserting that it's a descendant node.
   */
  descendant(root, path) {
    var node = Node.get(root, path);

    if (Editor.isEditor(node)) {
      throw new Error("Cannot get the descendant node at path [".concat(path, "] because it refers to the root editor node instead: ").concat(node));
    }

    return node;
  },

  /**
   * Return a generator of all the descendant node entries inside a root node.
   */
  *descendants(root) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    for (var [node, path] of Node.nodes(root, options)) {
      if (path.length !== 0) {
        // NOTE: we have to coerce here because checking the path's length does
        // guarantee that `node` is not a `Editor`, but TypeScript doesn't know.
        yield [node, path];
      }
    }
  },

  /**
   * Return a generator of all the element nodes inside a root node. Each iteration
   * will return an `ElementEntry` tuple consisting of `[Element, Path]`. If the
   * root node is an element it will be included in the iteration as well.
   */
  *elements(root) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    for (var [node, path] of Node.nodes(root, options)) {
      if (Element.isElement(node)) {
        yield [node, path];
      }
    }
  },

  /**
   * Extract props from a Node.
   */
  extractProps(node) {
    if (Element.isAncestor(node)) {
      var properties = _objectWithoutProperties(node, _excluded$3);

      return properties;
    } else {
      var properties = _objectWithoutProperties(node, _excluded2$2);

      return properties;
    }
  },

  /**
   * Get the first node entry in a root node from a path.
   */
  first(root, path) {
    var p = path.slice();
    var n = Node.get(root, p);

    while (n) {
      if (Text.isText(n) || n.children.length === 0) {
        break;
      } else {
        n = n.children[0];
        p.push(0);
      }
    }

    return [n, p];
  },

  /**
   * Get the sliced fragment represented by a range inside a root node.
   */
  fragment(root, range) {
    if (Text.isText(root)) {
      throw new Error("Cannot get a fragment starting from a root text node: ".concat(JSON.stringify(root)));
    }

    var newRoot = Object(immer__WEBPACK_IMPORTED_MODULE_1__["produce"])({
      children: root.children
    }, r => {
      var [start, end] = Range.edges(range);
      var nodeEntries = Node.nodes(r, {
        reverse: true,
        pass: _ref => {
          var [, path] = _ref;
          return !Range.includes(range, path);
        }
      });

      for (var [, path] of nodeEntries) {
        if (!Range.includes(range, path)) {
          var parent = Node.parent(r, path);
          var index = path[path.length - 1];
          parent.children.splice(index, 1);
        }

        if (Path.equals(path, end.path)) {
          var leaf = Node.leaf(r, path);
          leaf.text = leaf.text.slice(0, end.offset);
        }

        if (Path.equals(path, start.path)) {
          var _leaf = Node.leaf(r, path);

          _leaf.text = _leaf.text.slice(start.offset);
        }
      }

      if (Editor.isEditor(r)) {
        r.selection = null;
      }
    });
    return newRoot.children;
  },

  /**
   * Get the descendant node referred to by a specific path. If the path is an
   * empty array, it refers to the root node itself.
   */
  get(root, path) {
    var node = root;

    for (var i = 0; i < path.length; i++) {
      var p = path[i];

      if (Text.isText(node) || !node.children[p]) {
        throw new Error("Cannot find a descendant at path [".concat(path, "] in node: ").concat(JSON.stringify(root)));
      }

      node = node.children[p];
    }

    return node;
  },

  /**
   * Check if a descendant node exists at a specific path.
   */
  has(root, path) {
    var node = root;

    for (var i = 0; i < path.length; i++) {
      var p = path[i];

      if (Text.isText(node) || !node.children[p]) {
        return false;
      }

      node = node.children[p];
    }

    return true;
  },

  /**
   * Check if a value implements the `Node` interface.
   */
  isNode(value) {
    return Text.isText(value) || Element.isElement(value) || Editor.isEditor(value);
  },

  /**
   * Check if a value is a list of `Node` objects.
   */
  isNodeList(value) {
    if (!Array.isArray(value)) {
      return false;
    }

    var cachedResult = IS_NODE_LIST_CACHE.get(value);

    if (cachedResult !== undefined) {
      return cachedResult;
    }

    var isNodeList = value.every(val => Node.isNode(val));
    IS_NODE_LIST_CACHE.set(value, isNodeList);
    return isNodeList;
  },

  /**
   * Get the last node entry in a root node from a path.
   */
  last(root, path) {
    var p = path.slice();
    var n = Node.get(root, p);

    while (n) {
      if (Text.isText(n) || n.children.length === 0) {
        break;
      } else {
        var i = n.children.length - 1;
        n = n.children[i];
        p.push(i);
      }
    }

    return [n, p];
  },

  /**
   * Get the node at a specific path, ensuring it's a leaf text node.
   */
  leaf(root, path) {
    var node = Node.get(root, path);

    if (!Text.isText(node)) {
      throw new Error("Cannot get the leaf node at path [".concat(path, "] because it refers to a non-leaf node: ").concat(node));
    }

    return node;
  },

  /**
   * Return a generator of the in a branch of the tree, from a specific path.
   *
   * By default the order is top-down, from lowest to highest node in the tree,
   * but you can pass the `reverse: true` option to go bottom-up.
   */
  *levels(root, path) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    for (var p of Path.levels(path, options)) {
      var n = Node.get(root, p);
      yield [n, p];
    }
  },

  /**
   * Check if a node matches a set of props.
   */
  matches(node, props) {
    return Element.isElement(node) && Element.isElementProps(props) && Element.matches(node, props) || Text.isText(node) && Text.isTextProps(props) && Text.matches(node, props);
  },

  /**
   * Return a generator of all the node entries of a root node. Each entry is
   * returned as a `[Node, Path]` tuple, with the path referring to the node's
   * position inside the root node.
   */
  *nodes(root) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      pass,
      reverse = false
    } = options;
    var {
      from = [],
      to
    } = options;
    var visited = new Set();
    var p = [];
    var n = root;

    while (true) {
      if (to && (reverse ? Path.isBefore(p, to) : Path.isAfter(p, to))) {
        break;
      }

      if (!visited.has(n)) {
        yield [n, p];
      } // If we're allowed to go downward and we haven't descended yet, do.


      if (!visited.has(n) && !Text.isText(n) && n.children.length !== 0 && (pass == null || pass([n, p]) === false)) {
        visited.add(n);
        var nextIndex = reverse ? n.children.length - 1 : 0;

        if (Path.isAncestor(p, from)) {
          nextIndex = from[p.length];
        }

        p = p.concat(nextIndex);
        n = Node.get(root, p);
        continue;
      } // If we're at the root and we can't go down, we're done.


      if (p.length === 0) {
        break;
      } // If we're going forward...


      if (!reverse) {
        var newPath = Path.next(p);

        if (Node.has(root, newPath)) {
          p = newPath;
          n = Node.get(root, p);
          continue;
        }
      } // If we're going backward...


      if (reverse && p[p.length - 1] !== 0) {
        var _newPath = Path.previous(p);

        p = _newPath;
        n = Node.get(root, p);
        continue;
      } // Otherwise we're going upward...


      p = Path.parent(p);
      n = Node.get(root, p);
      visited.add(n);
    }
  },

  /**
   * Get the parent of a node at a specific path.
   */
  parent(root, path) {
    var parentPath = Path.parent(path);
    var p = Node.get(root, parentPath);

    if (Text.isText(p)) {
      throw new Error("Cannot get the parent of path [".concat(path, "] because it does not exist in the root."));
    }

    return p;
  },

  /**
   * Get the concatenated text string of a node's content.
   *
   * Note that this will not include spaces or line breaks between block nodes.
   * It is not a user-facing string, but a string for performing offset-related
   * computations for a node.
   */
  string(node) {
    if (Text.isText(node)) {
      return node.text;
    } else {
      return node.children.map(Node.string).join('');
    }
  },

  /**
   * Return a generator of all leaf text nodes in a root node.
   */
  *texts(root) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    for (var [node, path] of Node.nodes(root, options)) {
      if (Text.isText(node)) {
        yield [node, path];
      }
    }
  }

};

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Operation = {
  /**
   * Check of a value is a `NodeOperation` object.
   */
  isNodeOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith('_node');
  },

  /**
   * Check of a value is an `Operation` object.
   */
  isOperation(value) {
    if (!Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(value)) {
      return false;
    }

    switch (value.type) {
      case 'insert_node':
        return Path.isPath(value.path) && Node.isNode(value.node);

      case 'insert_text':
        return typeof value.offset === 'number' && typeof value.text === 'string' && Path.isPath(value.path);

      case 'merge_node':
        return typeof value.position === 'number' && Path.isPath(value.path) && Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(value.properties);

      case 'move_node':
        return Path.isPath(value.path) && Path.isPath(value.newPath);

      case 'remove_node':
        return Path.isPath(value.path) && Node.isNode(value.node);

      case 'remove_text':
        return typeof value.offset === 'number' && typeof value.text === 'string' && Path.isPath(value.path);

      case 'set_node':
        return Path.isPath(value.path) && Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(value.properties) && Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(value.newProperties);

      case 'set_selection':
        return value.properties === null && Range.isRange(value.newProperties) || value.newProperties === null && Range.isRange(value.properties) || Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(value.properties) && Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(value.newProperties);

      case 'split_node':
        return Path.isPath(value.path) && typeof value.position === 'number' && Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(value.properties);

      default:
        return false;
    }
  },

  /**
   * Check if a value is a list of `Operation` objects.
   */
  isOperationList(value) {
    return Array.isArray(value) && value.every(val => Operation.isOperation(val));
  },

  /**
   * Check of a value is a `SelectionOperation` object.
   */
  isSelectionOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith('_selection');
  },

  /**
   * Check of a value is a `TextOperation` object.
   */
  isTextOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith('_text');
  },

  /**
   * Invert an operation, returning a new operation that will exactly undo the
   * original when applied.
   */
  inverse(op) {
    switch (op.type) {
      case 'insert_node':
        {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            type: 'remove_node'
          });
        }

      case 'insert_text':
        {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            type: 'remove_text'
          });
        }

      case 'merge_node':
        {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            type: 'split_node',
            path: Path.previous(op.path)
          });
        }

      case 'move_node':
        {
          var {
            newPath,
            path
          } = op; // PERF: in this case the move operation is a no-op anyways.

          if (Path.equals(newPath, path)) {
            return op;
          } // If the move happens completely within a single parent the path and
          // newPath are stable with respect to each other.


          if (Path.isSibling(path, newPath)) {
            return _objectSpread$7(_objectSpread$7({}, op), {}, {
              path: newPath,
              newPath: path
            });
          } // If the move does not happen within a single parent it is possible
          // for the move to impact the true path to the location where the node
          // was removed from and where it was inserted. We have to adjust for this
          // and find the original path. We can accomplish this (only in non-sibling)
          // moves by looking at the impact of the move operation on the node
          // after the original move path.


          var inversePath = Path.transform(path, op);
          var inverseNewPath = Path.transform(Path.next(path), op);
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            path: inversePath,
            newPath: inverseNewPath
          });
        }

      case 'remove_node':
        {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            type: 'insert_node'
          });
        }

      case 'remove_text':
        {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            type: 'insert_text'
          });
        }

      case 'set_node':
        {
          var {
            properties,
            newProperties
          } = op;
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            properties: newProperties,
            newProperties: properties
          });
        }

      case 'set_selection':
        {
          var {
            properties: _properties,
            newProperties: _newProperties
          } = op;

          if (_properties == null) {
            return _objectSpread$7(_objectSpread$7({}, op), {}, {
              properties: _newProperties,
              newProperties: null
            });
          } else if (_newProperties == null) {
            return _objectSpread$7(_objectSpread$7({}, op), {}, {
              properties: null,
              newProperties: _properties
            });
          } else {
            return _objectSpread$7(_objectSpread$7({}, op), {}, {
              properties: _newProperties,
              newProperties: _properties
            });
          }
        }

      case 'split_node':
        {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            type: 'merge_node',
            path: Path.next(op.path)
          });
        }
    }
  }

};

var Path = {
  /**
   * Get a list of ancestor paths for a given path.
   *
   * The paths are sorted from deepest to shallowest ancestor. However, if the
   * `reverse: true` option is passed, they are reversed.
   */
  ancestors(path) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      reverse = false
    } = options;
    var paths = Path.levels(path, options);

    if (reverse) {
      paths = paths.slice(1);
    } else {
      paths = paths.slice(0, -1);
    }

    return paths;
  },

  /**
   * Get the common ancestor path of two paths.
   */
  common(path, another) {
    var common = [];

    for (var i = 0; i < path.length && i < another.length; i++) {
      var av = path[i];
      var bv = another[i];

      if (av !== bv) {
        break;
      }

      common.push(av);
    }

    return common;
  },

  /**
   * Compare a path to another, returning an integer indicating whether the path
   * was before, at, or after the other.
   *
   * Note: Two paths of unequal length can still receive a `0` result if one is
   * directly above or below the other. If you want exact matching, use
   * [[Path.equals]] instead.
   */
  compare(path, another) {
    var min = Math.min(path.length, another.length);

    for (var i = 0; i < min; i++) {
      if (path[i] < another[i]) return -1;
      if (path[i] > another[i]) return 1;
    }

    return 0;
  },

  /**
   * Check if a path ends after one of the indexes in another.
   */
  endsAfter(path, another) {
    var i = path.length - 1;
    var as = path.slice(0, i);
    var bs = another.slice(0, i);
    var av = path[i];
    var bv = another[i];
    return Path.equals(as, bs) && av > bv;
  },

  /**
   * Check if a path ends at one of the indexes in another.
   */
  endsAt(path, another) {
    var i = path.length;
    var as = path.slice(0, i);
    var bs = another.slice(0, i);
    return Path.equals(as, bs);
  },

  /**
   * Check if a path ends before one of the indexes in another.
   */
  endsBefore(path, another) {
    var i = path.length - 1;
    var as = path.slice(0, i);
    var bs = another.slice(0, i);
    var av = path[i];
    var bv = another[i];
    return Path.equals(as, bs) && av < bv;
  },

  /**
   * Check if a path is exactly equal to another.
   */
  equals(path, another) {
    return path.length === another.length && path.every((n, i) => n === another[i]);
  },

  /**
   * Check if the path of previous sibling node exists
   */
  hasPrevious(path) {
    return path[path.length - 1] > 0;
  },

  /**
   * Check if a path is after another.
   */
  isAfter(path, another) {
    return Path.compare(path, another) === 1;
  },

  /**
   * Check if a path is an ancestor of another.
   */
  isAncestor(path, another) {
    return path.length < another.length && Path.compare(path, another) === 0;
  },

  /**
   * Check if a path is before another.
   */
  isBefore(path, another) {
    return Path.compare(path, another) === -1;
  },

  /**
   * Check if a path is a child of another.
   */
  isChild(path, another) {
    return path.length === another.length + 1 && Path.compare(path, another) === 0;
  },

  /**
   * Check if a path is equal to or an ancestor of another.
   */
  isCommon(path, another) {
    return path.length <= another.length && Path.compare(path, another) === 0;
  },

  /**
   * Check if a path is a descendant of another.
   */
  isDescendant(path, another) {
    return path.length > another.length && Path.compare(path, another) === 0;
  },

  /**
   * Check if a path is the parent of another.
   */
  isParent(path, another) {
    return path.length + 1 === another.length && Path.compare(path, another) === 0;
  },

  /**
   * Check is a value implements the `Path` interface.
   */
  isPath(value) {
    return Array.isArray(value) && (value.length === 0 || typeof value[0] === 'number');
  },

  /**
   * Check if a path is a sibling of another.
   */
  isSibling(path, another) {
    if (path.length !== another.length) {
      return false;
    }

    var as = path.slice(0, -1);
    var bs = another.slice(0, -1);
    var al = path[path.length - 1];
    var bl = another[another.length - 1];
    return al !== bl && Path.equals(as, bs);
  },

  /**
   * Get a list of paths at every level down to a path. Note: this is the same
   * as `Path.ancestors`, but including the path itself.
   *
   * The paths are sorted from shallowest to deepest. However, if the `reverse:
   * true` option is passed, they are reversed.
   */
  levels(path) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      reverse = false
    } = options;
    var list = [];

    for (var i = 0; i <= path.length; i++) {
      list.push(path.slice(0, i));
    }

    if (reverse) {
      list.reverse();
    }

    return list;
  },

  /**
   * Given a path, get the path to the next sibling node.
   */
  next(path) {
    if (path.length === 0) {
      throw new Error("Cannot get the next path of a root path [".concat(path, "], because it has no next index."));
    }

    var last = path[path.length - 1];
    return path.slice(0, -1).concat(last + 1);
  },

  /**
   * Given a path, return a new path referring to the parent node above it.
   */
  parent(path) {
    if (path.length === 0) {
      throw new Error("Cannot get the parent path of the root path [".concat(path, "]."));
    }

    return path.slice(0, -1);
  },

  /**
   * Given a path, get the path to the previous sibling node.
   */
  previous(path) {
    if (path.length === 0) {
      throw new Error("Cannot get the previous path of a root path [".concat(path, "], because it has no previous index."));
    }

    var last = path[path.length - 1];

    if (last <= 0) {
      throw new Error("Cannot get the previous path of a first child path [".concat(path, "] because it would result in a negative index."));
    }

    return path.slice(0, -1).concat(last - 1);
  },

  /**
   * Get a path relative to an ancestor.
   */
  relative(path, ancestor) {
    if (!Path.isAncestor(ancestor, path) && !Path.equals(path, ancestor)) {
      throw new Error("Cannot get the relative path of [".concat(path, "] inside ancestor [").concat(ancestor, "], because it is not above or equal to the path."));
    }

    return path.slice(ancestor.length);
  },

  /**
   * Transform a path by an operation.
   */
  transform(path, operation) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return Object(immer__WEBPACK_IMPORTED_MODULE_1__["produce"])(path, p => {
      var {
        affinity = 'forward'
      } = options; // PERF: Exit early if the operation is guaranteed not to have an effect.

      if (!path || (path === null || path === void 0 ? void 0 : path.length) === 0) {
        return;
      }

      if (p === null) {
        return null;
      }

      switch (operation.type) {
        case 'insert_node':
          {
            var {
              path: op
            } = operation;

            if (Path.equals(op, p) || Path.endsBefore(op, p) || Path.isAncestor(op, p)) {
              p[op.length - 1] += 1;
            }

            break;
          }

        case 'remove_node':
          {
            var {
              path: _op
            } = operation;

            if (Path.equals(_op, p) || Path.isAncestor(_op, p)) {
              return null;
            } else if (Path.endsBefore(_op, p)) {
              p[_op.length - 1] -= 1;
            }

            break;
          }

        case 'merge_node':
          {
            var {
              path: _op2,
              position
            } = operation;

            if (Path.equals(_op2, p) || Path.endsBefore(_op2, p)) {
              p[_op2.length - 1] -= 1;
            } else if (Path.isAncestor(_op2, p)) {
              p[_op2.length - 1] -= 1;
              p[_op2.length] += position;
            }

            break;
          }

        case 'split_node':
          {
            var {
              path: _op3,
              position: _position
            } = operation;

            if (Path.equals(_op3, p)) {
              if (affinity === 'forward') {
                p[p.length - 1] += 1;
              } else if (affinity === 'backward') ; else {
                return null;
              }
            } else if (Path.endsBefore(_op3, p)) {
              p[_op3.length - 1] += 1;
            } else if (Path.isAncestor(_op3, p) && path[_op3.length] >= _position) {
              p[_op3.length - 1] += 1;
              p[_op3.length] -= _position;
            }

            break;
          }

        case 'move_node':
          {
            var {
              path: _op4,
              newPath: onp
            } = operation; // If the old and new path are the same, it's a no-op.

            if (Path.equals(_op4, onp)) {
              return;
            }

            if (Path.isAncestor(_op4, p) || Path.equals(_op4, p)) {
              var copy = onp.slice();

              if (Path.endsBefore(_op4, onp) && _op4.length < onp.length) {
                copy[_op4.length - 1] -= 1;
              }

              return copy.concat(p.slice(_op4.length));
            } else if (Path.isSibling(_op4, onp) && (Path.isAncestor(onp, p) || Path.equals(onp, p))) {
              if (Path.endsBefore(_op4, p)) {
                p[_op4.length - 1] -= 1;
              } else {
                p[_op4.length - 1] += 1;
              }
            } else if (Path.endsBefore(onp, p) || Path.equals(onp, p) || Path.isAncestor(onp, p)) {
              if (Path.endsBefore(_op4, p)) {
                p[_op4.length - 1] -= 1;
              }

              p[onp.length - 1] += 1;
            } else if (Path.endsBefore(_op4, p)) {
              if (Path.equals(onp, p)) {
                p[onp.length - 1] += 1;
              }

              p[_op4.length - 1] -= 1;
            }

            break;
          }
      }
    });
  }

};

var PathRef = {
  /**
   * Transform the path ref's current value by an operation.
   */
  transform(ref, op) {
    var {
      current,
      affinity
    } = ref;

    if (current == null) {
      return;
    }

    var path = Path.transform(current, op, {
      affinity
    });
    ref.current = path;

    if (path == null) {
      ref.unref();
    }
  }

};

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Point = {
  /**
   * Compare a point to another, returning an integer indicating whether the
   * point was before, at, or after the other.
   */
  compare(point, another) {
    var result = Path.compare(point.path, another.path);

    if (result === 0) {
      if (point.offset < another.offset) return -1;
      if (point.offset > another.offset) return 1;
      return 0;
    }

    return result;
  },

  /**
   * Check if a point is after another.
   */
  isAfter(point, another) {
    return Point.compare(point, another) === 1;
  },

  /**
   * Check if a point is before another.
   */
  isBefore(point, another) {
    return Point.compare(point, another) === -1;
  },

  /**
   * Check if a point is exactly equal to another.
   */
  equals(point, another) {
    // PERF: ensure the offsets are equal first since they are cheaper to check.
    return point.offset === another.offset && Path.equals(point.path, another.path);
  },

  /**
   * Check if a value implements the `Point` interface.
   */
  isPoint(value) {
    return Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(value) && typeof value.offset === 'number' && Path.isPath(value.path);
  },

  /**
   * Transform a point by an operation.
   */
  transform(point, op) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return Object(immer__WEBPACK_IMPORTED_MODULE_1__["produce"])(point, p => {
      if (p === null) {
        return null;
      }

      var {
        affinity = 'forward'
      } = options;
      var {
        path,
        offset
      } = p;

      switch (op.type) {
        case 'insert_node':
        case 'move_node':
          {
            p.path = Path.transform(path, op, options);
            break;
          }

        case 'insert_text':
          {
            if (Path.equals(op.path, path) && op.offset <= offset) {
              p.offset += op.text.length;
            }

            break;
          }

        case 'merge_node':
          {
            if (Path.equals(op.path, path)) {
              p.offset += op.position;
            }

            p.path = Path.transform(path, op, options);
            break;
          }

        case 'remove_text':
          {
            if (Path.equals(op.path, path) && op.offset <= offset) {
              p.offset -= Math.min(offset - op.offset, op.text.length);
            }

            break;
          }

        case 'remove_node':
          {
            if (Path.equals(op.path, path) || Path.isAncestor(op.path, path)) {
              return null;
            }

            p.path = Path.transform(path, op, options);
            break;
          }

        case 'split_node':
          {
            if (Path.equals(op.path, path)) {
              if (op.position === offset && affinity == null) {
                return null;
              } else if (op.position < offset || op.position === offset && affinity === 'forward') {
                p.offset -= op.position;
                p.path = Path.transform(path, op, _objectSpread$6(_objectSpread$6({}, options), {}, {
                  affinity: 'forward'
                }));
              }
            } else {
              p.path = Path.transform(path, op, options);
            }

            break;
          }
      }
    });
  }

};

var PointRef = {
  /**
   * Transform the point ref's current value by an operation.
   */
  transform(ref, op) {
    var {
      current,
      affinity
    } = ref;

    if (current == null) {
      return;
    }

    var point = Point.transform(current, op, {
      affinity
    });
    ref.current = point;

    if (point == null) {
      ref.unref();
    }
  }

};

var _excluded$2 = ["anchor", "focus"];

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Range = {
  /**
   * Get the start and end points of a range, in the order in which they appear
   * in the document.
   */
  edges(range) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      reverse = false
    } = options;
    var {
      anchor,
      focus
    } = range;
    return Range.isBackward(range) === reverse ? [anchor, focus] : [focus, anchor];
  },

  /**
   * Get the end point of a range.
   */
  end(range) {
    var [, end] = Range.edges(range);
    return end;
  },

  /**
   * Check if a range is exactly equal to another.
   */
  equals(range, another) {
    return Point.equals(range.anchor, another.anchor) && Point.equals(range.focus, another.focus);
  },

  /**
   * Check if a range includes a path, a point or part of another range.
   */
  includes(range, target) {
    if (Range.isRange(target)) {
      if (Range.includes(range, target.anchor) || Range.includes(range, target.focus)) {
        return true;
      }

      var [rs, re] = Range.edges(range);
      var [ts, te] = Range.edges(target);
      return Point.isBefore(rs, ts) && Point.isAfter(re, te);
    }

    var [start, end] = Range.edges(range);
    var isAfterStart = false;
    var isBeforeEnd = false;

    if (Point.isPoint(target)) {
      isAfterStart = Point.compare(target, start) >= 0;
      isBeforeEnd = Point.compare(target, end) <= 0;
    } else {
      isAfterStart = Path.compare(target, start.path) >= 0;
      isBeforeEnd = Path.compare(target, end.path) <= 0;
    }

    return isAfterStart && isBeforeEnd;
  },

  /**
   * Get the intersection of a range with another.
   */
  intersection(range, another) {
    var rest = _objectWithoutProperties(range, _excluded$2);

    var [s1, e1] = Range.edges(range);
    var [s2, e2] = Range.edges(another);
    var start = Point.isBefore(s1, s2) ? s2 : s1;
    var end = Point.isBefore(e1, e2) ? e1 : e2;

    if (Point.isBefore(end, start)) {
      return null;
    } else {
      return _objectSpread$5({
        anchor: start,
        focus: end
      }, rest);
    }
  },

  /**
   * Check if a range is backward, meaning that its anchor point appears in the
   * document _after_ its focus point.
   */
  isBackward(range) {
    var {
      anchor,
      focus
    } = range;
    return Point.isAfter(anchor, focus);
  },

  /**
   * Check if a range is collapsed, meaning that both its anchor and focus
   * points refer to the exact same position in the document.
   */
  isCollapsed(range) {
    var {
      anchor,
      focus
    } = range;
    return Point.equals(anchor, focus);
  },

  /**
   * Check if a range is expanded.
   *
   * This is the opposite of [[Range.isCollapsed]] and is provided for legibility.
   */
  isExpanded(range) {
    return !Range.isCollapsed(range);
  },

  /**
   * Check if a range is forward.
   *
   * This is the opposite of [[Range.isBackward]] and is provided for legibility.
   */
  isForward(range) {
    return !Range.isBackward(range);
  },

  /**
   * Check if a value implements the [[Range]] interface.
   */
  isRange(value) {
    return Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(value) && Point.isPoint(value.anchor) && Point.isPoint(value.focus);
  },

  /**
   * Iterate through all of the point entries in a range.
   */
  *points(range) {
    yield [range.anchor, 'anchor'];
    yield [range.focus, 'focus'];
  },

  /**
   * Get the start point of a range.
   */
  start(range) {
    var [start] = Range.edges(range);
    return start;
  },

  /**
   * Transform a range by an operation.
   */
  transform(range, op) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return Object(immer__WEBPACK_IMPORTED_MODULE_1__["produce"])(range, r => {
      if (r === null) {
        return null;
      }

      var {
        affinity = 'inward'
      } = options;
      var affinityAnchor;
      var affinityFocus;

      if (affinity === 'inward') {
        // If the range is collapsed, make sure to use the same affinity to
        // avoid the two points passing each other and expanding in the opposite
        // direction
        var isCollapsed = Range.isCollapsed(r);

        if (Range.isForward(r)) {
          affinityAnchor = 'forward';
          affinityFocus = isCollapsed ? affinityAnchor : 'backward';
        } else {
          affinityAnchor = 'backward';
          affinityFocus = isCollapsed ? affinityAnchor : 'forward';
        }
      } else if (affinity === 'outward') {
        if (Range.isForward(r)) {
          affinityAnchor = 'backward';
          affinityFocus = 'forward';
        } else {
          affinityAnchor = 'forward';
          affinityFocus = 'backward';
        }
      } else {
        affinityAnchor = affinity;
        affinityFocus = affinity;
      }

      var anchor = Point.transform(r.anchor, op, {
        affinity: affinityAnchor
      });
      var focus = Point.transform(r.focus, op, {
        affinity: affinityFocus
      });

      if (!anchor || !focus) {
        return null;
      }

      r.anchor = anchor;
      r.focus = focus;
    });
  }

};

var RangeRef = {
  /**
   * Transform the range ref's current value by an operation.
   */
  transform(ref, op) {
    var {
      current,
      affinity
    } = ref;

    if (current == null) {
      return;
    }

    var path = Range.transform(current, op, {
      affinity
    });
    ref.current = path;

    if (path == null) {
      ref.unref();
    }
  }

};

/*
  Custom deep equal comparison for Slate nodes.

  We don't need general purpose deep equality;
  Slate only supports plain values, Arrays, and nested objects.
  Complex values nested inside Arrays are not supported.

  Slate objects are designed to be serialised, so
  missing keys are deliberately normalised to undefined.
 */

var isDeepEqual = (node, another) => {
  for (var key in node) {
    var a = node[key];
    var b = another[key];

    if (Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(a) && Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(b)) {
      if (!isDeepEqual(a, b)) return false;
    } else if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return false;

      for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
      }

      return true;
    } else if (a !== b) {
      return false;
    }
  }
  /*
    Deep object equality is only necessary in one direction; in the reverse direction
    we are only looking for keys that are missing.
    As above, undefined keys are normalised to missing.
  */


  for (var _key in another) {
    if (node[_key] === undefined && another[_key] !== undefined) {
      return false;
    }
  }

  return true;
};

var _excluded$1 = ["text"],
    _excluded2$1 = ["anchor", "focus"];

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Text = {
  /**
   * Check if two text nodes are equal.
   *
   * When loose is set, the text is not compared. This is
   * used to check whether sibling text nodes can be merged.
   */
  equals(text, another) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      loose = false
    } = options;

    function omitText(obj) {
      var rest = _objectWithoutProperties(obj, _excluded$1);

      return rest;
    }

    return isDeepEqual(loose ? omitText(text) : text, loose ? omitText(another) : another);
  },

  /**
   * Check if a value implements the `Text` interface.
   */
  isText(value) {
    return Object(is_plain_object__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(value) && typeof value.text === 'string';
  },

  /**
   * Check if a value is a list of `Text` objects.
   */
  isTextList(value) {
    return Array.isArray(value) && value.every(val => Text.isText(val));
  },

  /**
   * Check if some props are a partial of Text.
   */
  isTextProps(props) {
    return props.text !== undefined;
  },

  /**
   * Check if an text matches set of properties.
   *
   * Note: this is for matching custom properties, and it does not ensure that
   * the `text` property are two nodes equal.
   */
  matches(text, props) {
    for (var key in props) {
      if (key === 'text') {
        continue;
      }

      if (!text.hasOwnProperty(key) || text[key] !== props[key]) {
        return false;
      }
    }

    return true;
  },

  /**
   * Get the leaves for a text node given decorations.
   */
  decorations(node, decorations) {
    var leaves = [_objectSpread$4({}, node)];

    for (var dec of decorations) {
      var rest = _objectWithoutProperties(dec, _excluded2$1);

      var [start, end] = Range.edges(dec);
      var next = [];
      var o = 0;

      for (var leaf of leaves) {
        var {
          length
        } = leaf.text;
        var offset = o;
        o += length; // If the range encompases the entire leaf, add the range.

        if (start.offset <= offset && end.offset >= o) {
          Object.assign(leaf, rest);
          next.push(leaf);
          continue;
        } // If the range expanded and match the leaf, or starts after, or ends before it, continue.


        if (start.offset !== end.offset && (start.offset === o || end.offset === offset) || start.offset > o || end.offset < offset || end.offset === offset && offset !== 0) {
          next.push(leaf);
          continue;
        } // Otherwise we need to split the leaf, at the start, end, or both,
        // and add the range to the middle intersecting section. Do the end
        // split first since we don't need to update the offset that way.


        var middle = leaf;
        var before = void 0;
        var after = void 0;

        if (end.offset < o) {
          var off = end.offset - offset;
          after = _objectSpread$4(_objectSpread$4({}, middle), {}, {
            text: middle.text.slice(off)
          });
          middle = _objectSpread$4(_objectSpread$4({}, middle), {}, {
            text: middle.text.slice(0, off)
          });
        }

        if (start.offset > offset) {
          var _off = start.offset - offset;

          before = _objectSpread$4(_objectSpread$4({}, middle), {}, {
            text: middle.text.slice(0, _off)
          });
          middle = _objectSpread$4(_objectSpread$4({}, middle), {}, {
            text: middle.text.slice(_off)
          });
        }

        Object.assign(middle, rest);

        if (before) {
          next.push(before);
        }

        next.push(middle);

        if (after) {
          next.push(after);
        }
      }

      leaves = next;
    }

    return leaves;
  }

};

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var applyToDraft = (editor, selection, op) => {
  switch (op.type) {
    case 'insert_node':
      {
        var {
          path,
          node
        } = op;
        var parent = Node.parent(editor, path);
        var index = path[path.length - 1];

        if (index > parent.children.length) {
          throw new Error("Cannot apply an \"insert_node\" operation at path [".concat(path, "] because the destination is past the end of the node."));
        }

        parent.children.splice(index, 0, node);

        if (selection) {
          for (var [point, key] of Range.points(selection)) {
            selection[key] = Point.transform(point, op);
          }
        }

        break;
      }

    case 'insert_text':
      {
        var {
          path: _path,
          offset,
          text
        } = op;
        if (text.length === 0) break;

        var _node = Node.leaf(editor, _path);

        var before = _node.text.slice(0, offset);

        var after = _node.text.slice(offset);

        _node.text = before + text + after;

        if (selection) {
          for (var [_point, _key] of Range.points(selection)) {
            selection[_key] = Point.transform(_point, op);
          }
        }

        break;
      }

    case 'merge_node':
      {
        var {
          path: _path2
        } = op;

        var _node2 = Node.get(editor, _path2);

        var prevPath = Path.previous(_path2);
        var prev = Node.get(editor, prevPath);

        var _parent = Node.parent(editor, _path2);

        var _index = _path2[_path2.length - 1];

        if (Text.isText(_node2) && Text.isText(prev)) {
          prev.text += _node2.text;
        } else if (!Text.isText(_node2) && !Text.isText(prev)) {
          prev.children.push(..._node2.children);
        } else {
          throw new Error("Cannot apply a \"merge_node\" operation at path [".concat(_path2, "] to nodes of different interfaces: ").concat(_node2, " ").concat(prev));
        }

        _parent.children.splice(_index, 1);

        if (selection) {
          for (var [_point2, _key2] of Range.points(selection)) {
            selection[_key2] = Point.transform(_point2, op);
          }
        }

        break;
      }

    case 'move_node':
      {
        var {
          path: _path3,
          newPath
        } = op;

        if (Path.isAncestor(_path3, newPath)) {
          throw new Error("Cannot move a path [".concat(_path3, "] to new path [").concat(newPath, "] because the destination is inside itself."));
        }

        var _node3 = Node.get(editor, _path3);

        var _parent2 = Node.parent(editor, _path3);

        var _index2 = _path3[_path3.length - 1]; // This is tricky, but since the `path` and `newPath` both refer to
        // the same snapshot in time, there's a mismatch. After either
        // removing the original position, the second step's path can be out
        // of date. So instead of using the `op.newPath` directly, we
        // transform `op.path` to ascertain what the `newPath` would be after
        // the operation was applied.

        _parent2.children.splice(_index2, 1);

        var truePath = Path.transform(_path3, op);
        var newParent = Node.get(editor, Path.parent(truePath));
        var newIndex = truePath[truePath.length - 1];
        newParent.children.splice(newIndex, 0, _node3);

        if (selection) {
          for (var [_point3, _key3] of Range.points(selection)) {
            selection[_key3] = Point.transform(_point3, op);
          }
        }

        break;
      }

    case 'remove_node':
      {
        var {
          path: _path4
        } = op;
        var _index3 = _path4[_path4.length - 1];

        var _parent3 = Node.parent(editor, _path4);

        _parent3.children.splice(_index3, 1); // Transform all of the points in the value, but if the point was in the
        // node that was removed we need to update the range or remove it.


        if (selection) {
          for (var [_point4, _key4] of Range.points(selection)) {
            var result = Point.transform(_point4, op);

            if (selection != null && result != null) {
              selection[_key4] = result;
            } else {
              var _prev = void 0;

              var next = void 0;

              for (var [n, p] of Node.texts(editor)) {
                if (Path.compare(p, _path4) === -1) {
                  _prev = [n, p];
                } else {
                  next = [n, p];
                  break;
                }
              }

              var preferNext = false;

              if (_prev && next) {
                if (Path.equals(next[1], _path4)) {
                  preferNext = !Path.hasPrevious(next[1]);
                } else {
                  preferNext = Path.common(_prev[1], _path4).length < Path.common(next[1], _path4).length;
                }
              }

              if (_prev && !preferNext) {
                _point4.path = _prev[1];
                _point4.offset = _prev[0].text.length;
              } else if (next) {
                _point4.path = next[1];
                _point4.offset = 0;
              } else {
                selection = null;
              }
            }
          }
        }

        break;
      }

    case 'remove_text':
      {
        var {
          path: _path5,
          offset: _offset,
          text: _text
        } = op;
        if (_text.length === 0) break;

        var _node4 = Node.leaf(editor, _path5);

        var _before = _node4.text.slice(0, _offset);

        var _after = _node4.text.slice(_offset + _text.length);

        _node4.text = _before + _after;

        if (selection) {
          for (var [_point5, _key5] of Range.points(selection)) {
            selection[_key5] = Point.transform(_point5, op);
          }
        }

        break;
      }

    case 'set_node':
      {
        var {
          path: _path6,
          properties,
          newProperties
        } = op;

        if (_path6.length === 0) {
          throw new Error("Cannot set properties on the root node!");
        }

        var _node5 = Node.get(editor, _path6);

        for (var _key6 in newProperties) {
          if (_key6 === 'children' || _key6 === 'text') {
            throw new Error("Cannot set the \"".concat(_key6, "\" property of nodes!"));
          }

          var value = newProperties[_key6];

          if (value == null) {
            delete _node5[_key6];
          } else {
            _node5[_key6] = value;
          }
        } // properties that were previously defined, but are now missing, must be deleted


        for (var _key7 in properties) {
          if (!newProperties.hasOwnProperty(_key7)) {
            delete _node5[_key7];
          }
        }

        break;
      }

    case 'set_selection':
      {
        var {
          newProperties: _newProperties
        } = op;

        if (_newProperties == null) {
          selection = _newProperties;
        } else {
          if (selection == null) {
            if (!Range.isRange(_newProperties)) {
              throw new Error("Cannot apply an incomplete \"set_selection\" operation properties ".concat(JSON.stringify(_newProperties), " when there is no current selection."));
            }

            selection = _objectSpread$3({}, _newProperties);
          }

          for (var _key8 in _newProperties) {
            var _value = _newProperties[_key8];

            if (_value == null) {
              if (_key8 === 'anchor' || _key8 === 'focus') {
                throw new Error("Cannot remove the \"".concat(_key8, "\" selection property"));
              }

              delete selection[_key8];
            } else {
              selection[_key8] = _value;
            }
          }
        }

        break;
      }

    case 'split_node':
      {
        var {
          path: _path7,
          position,
          properties: _properties
        } = op;

        if (_path7.length === 0) {
          throw new Error("Cannot apply a \"split_node\" operation at path [".concat(_path7, "] because the root node cannot be split."));
        }

        var _node6 = Node.get(editor, _path7);

        var _parent4 = Node.parent(editor, _path7);

        var _index4 = _path7[_path7.length - 1];
        var newNode;

        if (Text.isText(_node6)) {
          var _before2 = _node6.text.slice(0, position);

          var _after2 = _node6.text.slice(position);

          _node6.text = _before2;
          newNode = _objectSpread$3(_objectSpread$3({}, _properties), {}, {
            text: _after2
          });
        } else {
          var _before3 = _node6.children.slice(0, position);

          var _after3 = _node6.children.slice(position);

          _node6.children = _before3;
          newNode = _objectSpread$3(_objectSpread$3({}, _properties), {}, {
            children: _after3
          });
        }

        _parent4.children.splice(_index4 + 1, 0, newNode);

        if (selection) {
          for (var [_point6, _key9] of Range.points(selection)) {
            selection[_key9] = Point.transform(_point6, op);
          }
        }

        break;
      }
  }

  return selection;
};

var GeneralTransforms = {
  /**
   * Transform the editor by an operation.
   */
  transform(editor, op) {
    editor.children = Object(immer__WEBPACK_IMPORTED_MODULE_1__["createDraft"])(editor.children);
    var selection = editor.selection && Object(immer__WEBPACK_IMPORTED_MODULE_1__["createDraft"])(editor.selection);

    try {
      selection = applyToDraft(editor, selection, op);
    } finally {
      editor.children = Object(immer__WEBPACK_IMPORTED_MODULE_1__["finishDraft"])(editor.children);

      if (selection) {
        editor.selection = Object(immer__WEBPACK_IMPORTED_MODULE_1__["isDraft"])(selection) ? Object(immer__WEBPACK_IMPORTED_MODULE_1__["finishDraft"])(selection) : selection;
      } else {
        editor.selection = null;
      }
    }
  }

};

var _excluded = ["text"],
    _excluded2 = ["children"];

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var NodeTransforms = {
  /**
   * Insert nodes at a specific location in the Editor.
   */
  insertNodes(editor, nodes) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        hanging = false,
        voids = false,
        mode = 'lowest'
      } = options;
      var {
        at,
        match,
        select
      } = options;

      if (Node.isNode(nodes)) {
        nodes = [nodes];
      }

      if (nodes.length === 0) {
        return;
      }

      var [node] = nodes; // By default, use the selection as the target location. But if there is
      // no selection, insert at the end of the document since that is such a
      // common use case when inserting from a non-selected state.

      if (!at) {
        if (editor.selection) {
          at = editor.selection;
        } else if (editor.children.length > 0) {
          at = Editor.end(editor, []);
        } else {
          at = [0];
        }

        select = true;
      }

      if (select == null) {
        select = false;
      }

      if (Range.isRange(at)) {
        if (!hanging) {
          at = Editor.unhangRange(editor, at);
        }

        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var [, end] = Range.edges(at);
          var pointRef = Editor.pointRef(editor, end);
          Transforms.delete(editor, {
            at
          });
          at = pointRef.unref();
        }
      }

      if (Point.isPoint(at)) {
        if (match == null) {
          if (Text.isText(node)) {
            match = n => Text.isText(n);
          } else if (editor.isInline(node)) {
            match = n => Text.isText(n) || Editor.isInline(editor, n);
          } else {
            match = n => Editor.isBlock(editor, n);
          }
        }

        var [entry] = Editor.nodes(editor, {
          at: at.path,
          match,
          mode,
          voids
        });

        if (entry) {
          var [, _matchPath] = entry;
          var pathRef = Editor.pathRef(editor, _matchPath);
          var isAtEnd = Editor.isEnd(editor, at, _matchPath);
          Transforms.splitNodes(editor, {
            at,
            match,
            mode,
            voids
          });
          var path = pathRef.unref();
          at = isAtEnd ? Path.next(path) : path;
        } else {
          return;
        }
      }

      var parentPath = Path.parent(at);
      var index = at[at.length - 1];

      if (!voids && Editor.void(editor, {
        at: parentPath
      })) {
        return;
      }

      for (var _node of nodes) {
        var _path = parentPath.concat(index);

        index++;
        editor.apply({
          type: 'insert_node',
          path: _path,
          node: _node
        });
        at = Path.next(at);
      }

      at = Path.previous(at);

      if (select) {
        var point = Editor.end(editor, at);

        if (point) {
          Transforms.select(editor, point);
        }
      }
    });
  },

  /**
   * Lift nodes at a specific location upwards in the document tree, splitting
   * their parent in two if necessary.
   */
  liftNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        at = editor.selection,
        mode = 'lowest',
        voids = false
      } = options;
      var {
        match
      } = options;

      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : n => Editor.isBlock(editor, n);
      }

      if (!at) {
        return;
      }

      var matches = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });
      var pathRefs = Array.from(matches, _ref => {
        var [, p] = _ref;
        return Editor.pathRef(editor, p);
      });

      for (var pathRef of pathRefs) {
        var path = pathRef.unref();

        if (path.length < 2) {
          throw new Error("Cannot lift node at a path [".concat(path, "] because it has a depth of less than `2`."));
        }

        var parentNodeEntry = Editor.node(editor, Path.parent(path));
        var [parent, parentPath] = parentNodeEntry;
        var index = path[path.length - 1];
        var {
          length
        } = parent.children;

        if (length === 1) {
          var toPath = Path.next(parentPath);
          Transforms.moveNodes(editor, {
            at: path,
            to: toPath,
            voids
          });
          Transforms.removeNodes(editor, {
            at: parentPath,
            voids
          });
        } else if (index === 0) {
          Transforms.moveNodes(editor, {
            at: path,
            to: parentPath,
            voids
          });
        } else if (index === length - 1) {
          var _toPath = Path.next(parentPath);

          Transforms.moveNodes(editor, {
            at: path,
            to: _toPath,
            voids
          });
        } else {
          var splitPath = Path.next(path);

          var _toPath2 = Path.next(parentPath);

          Transforms.splitNodes(editor, {
            at: splitPath,
            voids
          });
          Transforms.moveNodes(editor, {
            at: path,
            to: _toPath2,
            voids
          });
        }
      }
    });
  },

  /**
   * Merge a node at a location with the previous node of the same depth,
   * removing any empty containing nodes after the merge if necessary.
   */
  mergeNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        match,
        at = editor.selection
      } = options;
      var {
        hanging = false,
        voids = false,
        mode = 'lowest'
      } = options;

      if (!at) {
        return;
      }

      if (match == null) {
        if (Path.isPath(at)) {
          var [parent] = Editor.parent(editor, at);

          match = n => parent.children.includes(n);
        } else {
          match = n => Editor.isBlock(editor, n);
        }
      }

      if (!hanging && Range.isRange(at)) {
        at = Editor.unhangRange(editor, at);
      }

      if (Range.isRange(at)) {
        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var [, end] = Range.edges(at);
          var pointRef = Editor.pointRef(editor, end);
          Transforms.delete(editor, {
            at
          });
          at = pointRef.unref();

          if (options.at == null) {
            Transforms.select(editor, at);
          }
        }
      }

      var [current] = Editor.nodes(editor, {
        at,
        match,
        voids,
        mode
      });
      var prev = Editor.previous(editor, {
        at,
        match,
        voids,
        mode
      });

      if (!current || !prev) {
        return;
      }

      var [node, path] = current;
      var [prevNode, prevPath] = prev;

      if (path.length === 0 || prevPath.length === 0) {
        return;
      }

      var newPath = Path.next(prevPath);
      var commonPath = Path.common(path, prevPath);
      var isPreviousSibling = Path.isSibling(path, prevPath);
      var levels = Array.from(Editor.levels(editor, {
        at: path
      }), _ref2 => {
        var [n] = _ref2;
        return n;
      }).slice(commonPath.length).slice(0, -1); // Determine if the merge will leave an ancestor of the path empty as a
      // result, in which case we'll want to remove it after merging.

      var emptyAncestor = Editor.above(editor, {
        at: path,
        mode: 'highest',
        match: n => levels.includes(n) && hasSingleChildNest(editor, n)
      });
      var emptyRef = emptyAncestor && Editor.pathRef(editor, emptyAncestor[1]);
      var properties;
      var position; // Ensure that the nodes are equivalent, and figure out what the position
      // and extra properties of the merge will be.

      if (Text.isText(node) && Text.isText(prevNode)) {
        var rest = _objectWithoutProperties(node, _excluded);

        position = prevNode.text.length;
        properties = rest;
      } else if (Element.isElement(node) && Element.isElement(prevNode)) {
        var rest = _objectWithoutProperties(node, _excluded2);

        position = prevNode.children.length;
        properties = rest;
      } else {
        throw new Error("Cannot merge the node at path [".concat(path, "] with the previous sibling because it is not the same kind: ").concat(JSON.stringify(node), " ").concat(JSON.stringify(prevNode)));
      } // If the node isn't already the next sibling of the previous node, move
      // it so that it is before merging.


      if (!isPreviousSibling) {
        Transforms.moveNodes(editor, {
          at: path,
          to: newPath,
          voids
        });
      } // If there was going to be an empty ancestor of the node that was merged,
      // we remove it from the tree.


      if (emptyRef) {
        Transforms.removeNodes(editor, {
          at: emptyRef.current,
          voids
        });
      } // If the target node that we're merging with is empty, remove it instead
      // of merging the two. This is a common rich text editor behavior to
      // prevent losing formatting when deleting entire nodes when you have a
      // hanging selection.
      // if prevNode is first child in parent,don't remove it.


      if (Element.isElement(prevNode) && Editor.isEmpty(editor, prevNode) || Text.isText(prevNode) && prevNode.text === '' && prevPath[prevPath.length - 1] !== 0) {
        Transforms.removeNodes(editor, {
          at: prevPath,
          voids
        });
      } else {
        editor.apply({
          type: 'merge_node',
          path: newPath,
          position,
          properties
        });
      }

      if (emptyRef) {
        emptyRef.unref();
      }
    });
  },

  /**
   * Move the nodes at a location to a new location.
   */
  moveNodes(editor, options) {
    Editor.withoutNormalizing(editor, () => {
      var {
        to,
        at = editor.selection,
        mode = 'lowest',
        voids = false
      } = options;
      var {
        match
      } = options;

      if (!at) {
        return;
      }

      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : n => Editor.isBlock(editor, n);
      }

      var toRef = Editor.pathRef(editor, to);
      var targets = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });
      var pathRefs = Array.from(targets, _ref3 => {
        var [, p] = _ref3;
        return Editor.pathRef(editor, p);
      });

      for (var pathRef of pathRefs) {
        var path = pathRef.unref();
        var newPath = toRef.current;

        if (path.length !== 0) {
          editor.apply({
            type: 'move_node',
            path,
            newPath
          });
        }

        if (toRef.current && Path.isSibling(newPath, path) && Path.isAfter(newPath, path)) {
          // When performing a sibling move to a later index, the path at the destination is shifted
          // to before the insertion point instead of after. To ensure our group of nodes are inserted
          // in the correct order we increment toRef to account for that
          toRef.current = Path.next(toRef.current);
        }
      }

      toRef.unref();
    });
  },

  /**
   * Remove the nodes at a specific location in the document.
   */
  removeNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        hanging = false,
        voids = false,
        mode = 'lowest'
      } = options;
      var {
        at = editor.selection,
        match
      } = options;

      if (!at) {
        return;
      }

      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : n => Editor.isBlock(editor, n);
      }

      if (!hanging && Range.isRange(at)) {
        at = Editor.unhangRange(editor, at);
      }

      var depths = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });
      var pathRefs = Array.from(depths, _ref4 => {
        var [, p] = _ref4;
        return Editor.pathRef(editor, p);
      });

      for (var pathRef of pathRefs) {
        var path = pathRef.unref();

        if (path) {
          var [node] = Editor.node(editor, path);
          editor.apply({
            type: 'remove_node',
            path,
            node
          });
        }
      }
    });
  },

  /**
   * Set new properties on the nodes at a location.
   */
  setNodes(editor, props) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        match,
        at = editor.selection
      } = options;
      var {
        hanging = false,
        mode = 'lowest',
        split = false,
        voids = false
      } = options;

      if (!at) {
        return;
      }

      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : n => Editor.isBlock(editor, n);
      }

      if (!hanging && Range.isRange(at)) {
        at = Editor.unhangRange(editor, at);
      }

      if (split && Range.isRange(at)) {
        if (Range.isCollapsed(at) && Editor.leaf(editor, at.anchor)[0].text.length > 0) {
          // If the range is collapsed in a non-empty node and 'split' is true, there's nothing to
          // set that won't get normalized away
          return;
        }

        var rangeRef = Editor.rangeRef(editor, at, {
          affinity: 'inward'
        });
        var [start, end] = Range.edges(at);
        var splitMode = mode === 'lowest' ? 'lowest' : 'highest';
        var endAtEndOfNode = Editor.isEnd(editor, end, end.path);
        Transforms.splitNodes(editor, {
          at: end,
          match,
          mode: splitMode,
          voids,
          always: !endAtEndOfNode
        });
        var startAtStartOfNode = Editor.isStart(editor, start, start.path);
        Transforms.splitNodes(editor, {
          at: start,
          match,
          mode: splitMode,
          voids,
          always: !startAtStartOfNode
        });
        at = rangeRef.unref();

        if (options.at == null) {
          Transforms.select(editor, at);
        }
      }

      for (var [node, path] of Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      })) {
        var properties = {};
        var newProperties = {}; // You can't set properties on the editor node.

        if (path.length === 0) {
          continue;
        }

        var hasChanges = false;

        for (var k in props) {
          if (k === 'children' || k === 'text') {
            continue;
          }

          if (props[k] !== node[k]) {
            hasChanges = true; // Omit new properties from the old properties list

            if (node.hasOwnProperty(k)) properties[k] = node[k]; // Omit properties that have been removed from the new properties list

            if (props[k] != null) newProperties[k] = props[k];
          }
        }

        if (hasChanges) {
          editor.apply({
            type: 'set_node',
            path,
            properties,
            newProperties
          });
        }
      }
    });
  },

  /**
   * Split the nodes at a specific location.
   */
  splitNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        mode = 'lowest',
        voids = false
      } = options;
      var {
        match,
        at = editor.selection,
        height = 0,
        always = false
      } = options;

      if (match == null) {
        match = n => Editor.isBlock(editor, n);
      }

      if (Range.isRange(at)) {
        at = deleteRange(editor, at);
      } // If the target is a path, the default height-skipping and position
      // counters need to account for us potentially splitting at a non-leaf.


      if (Path.isPath(at)) {
        var path = at;
        var point = Editor.point(editor, path);
        var [parent] = Editor.parent(editor, path);

        match = n => n === parent;

        height = point.path.length - path.length + 1;
        at = point;
        always = true;
      }

      if (!at) {
        return;
      }

      var beforeRef = Editor.pointRef(editor, at, {
        affinity: 'backward'
      });
      var [highest] = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });

      if (!highest) {
        return;
      }

      var voidMatch = Editor.void(editor, {
        at,
        mode: 'highest'
      });
      var nudge = 0;

      if (!voids && voidMatch) {
        var [voidNode, voidPath] = voidMatch;

        if (Element.isElement(voidNode) && editor.isInline(voidNode)) {
          var after = Editor.after(editor, voidPath);

          if (!after) {
            var text = {
              text: ''
            };
            var afterPath = Path.next(voidPath);
            Transforms.insertNodes(editor, text, {
              at: afterPath,
              voids
            });
            after = Editor.point(editor, afterPath);
          }

          at = after;
          always = true;
        }

        var siblingHeight = at.path.length - voidPath.length;
        height = siblingHeight + 1;
        always = true;
      }

      var afterRef = Editor.pointRef(editor, at);
      var depth = at.path.length - height;
      var [, highestPath] = highest;
      var lowestPath = at.path.slice(0, depth);
      var position = height === 0 ? at.offset : at.path[depth] + nudge;

      for (var [node, _path2] of Editor.levels(editor, {
        at: lowestPath,
        reverse: true,
        voids
      })) {
        var split = false;

        if (_path2.length < highestPath.length || _path2.length === 0 || !voids && Editor.isVoid(editor, node)) {
          break;
        }

        var _point = beforeRef.current;
        var isEnd = Editor.isEnd(editor, _point, _path2);

        if (always || !beforeRef || !Editor.isEdge(editor, _point, _path2)) {
          split = true;
          var properties = Node.extractProps(node);
          editor.apply({
            type: 'split_node',
            path: _path2,
            position,
            properties
          });
        }

        position = _path2[_path2.length - 1] + (split || isEnd ? 1 : 0);
      }

      if (options.at == null) {
        var _point2 = afterRef.current || Editor.end(editor, []);

        Transforms.select(editor, _point2);
      }

      beforeRef.unref();
      afterRef.unref();
    });
  },

  /**
   * Unset properties on the nodes at a location.
   */
  unsetNodes(editor, props) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!Array.isArray(props)) {
      props = [props];
    }

    var obj = {};

    for (var key of props) {
      obj[key] = null;
    }

    Transforms.setNodes(editor, obj, options);
  },

  /**
   * Unwrap the nodes at a location from a parent node, splitting the parent if
   * necessary to ensure that only the content in the range is unwrapped.
   */
  unwrapNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        mode = 'lowest',
        split = false,
        voids = false
      } = options;
      var {
        at = editor.selection,
        match
      } = options;

      if (!at) {
        return;
      }

      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : n => Editor.isBlock(editor, n);
      }

      if (Path.isPath(at)) {
        at = Editor.range(editor, at);
      }

      var rangeRef = Range.isRange(at) ? Editor.rangeRef(editor, at) : null;
      var matches = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });
      var pathRefs = Array.from(matches, _ref5 => {
        var [, p] = _ref5;
        return Editor.pathRef(editor, p);
      } // unwrapNode will call liftNode which does not support splitting the node when nested.
      // If we do not reverse the order and call it from top to the bottom, it will remove all blocks
      // that wrap target node. So we reverse the order.
      ).reverse();

      var _loop = function _loop(pathRef) {
        var path = pathRef.unref();
        var [node] = Editor.node(editor, path);
        var range = Editor.range(editor, path);

        if (split && rangeRef) {
          range = Range.intersection(rangeRef.current, range);
        }

        Transforms.liftNodes(editor, {
          at: range,
          match: n => Element.isAncestor(node) && node.children.includes(n),
          voids
        });
      };

      for (var pathRef of pathRefs) {
        _loop(pathRef);
      }

      if (rangeRef) {
        rangeRef.unref();
      }
    });
  },

  /**
   * Wrap the nodes at a location in a new container node, splitting the edges
   * of the range first to ensure that only the content in the range is wrapped.
   */
  wrapNodes(editor, element) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        mode = 'lowest',
        split = false,
        voids = false
      } = options;
      var {
        match,
        at = editor.selection
      } = options;

      if (!at) {
        return;
      }

      if (match == null) {
        if (Path.isPath(at)) {
          match = matchPath(editor, at);
        } else if (editor.isInline(element)) {
          match = n => Editor.isInline(editor, n) || Text.isText(n);
        } else {
          match = n => Editor.isBlock(editor, n);
        }
      }

      if (split && Range.isRange(at)) {
        var [start, end] = Range.edges(at);
        var rangeRef = Editor.rangeRef(editor, at, {
          affinity: 'inward'
        });
        Transforms.splitNodes(editor, {
          at: end,
          match,
          voids
        });
        Transforms.splitNodes(editor, {
          at: start,
          match,
          voids
        });
        at = rangeRef.unref();

        if (options.at == null) {
          Transforms.select(editor, at);
        }
      }

      var roots = Array.from(Editor.nodes(editor, {
        at,
        match: editor.isInline(element) ? n => Editor.isBlock(editor, n) : n => Editor.isEditor(n),
        mode: 'lowest',
        voids
      }));

      for (var [, rootPath] of roots) {
        var a = Range.isRange(at) ? Range.intersection(at, Editor.range(editor, rootPath)) : at;

        if (!a) {
          continue;
        }

        var matches = Array.from(Editor.nodes(editor, {
          at: a,
          match,
          mode,
          voids
        }));

        if (matches.length > 0) {
          var _ret = function () {
            var [first] = matches;
            var last = matches[matches.length - 1];
            var [, firstPath] = first;
            var [, lastPath] = last;

            if (firstPath.length === 0 && lastPath.length === 0) {
              // if there's no matching parent - usually means the node is an editor - don't do anything
              return "continue";
            }

            var commonPath = Path.equals(firstPath, lastPath) ? Path.parent(firstPath) : Path.common(firstPath, lastPath);
            var range = Editor.range(editor, firstPath, lastPath);
            var commonNodeEntry = Editor.node(editor, commonPath);
            var [commonNode] = commonNodeEntry;
            var depth = commonPath.length + 1;
            var wrapperPath = Path.next(lastPath.slice(0, depth));

            var wrapper = _objectSpread$2(_objectSpread$2({}, element), {}, {
              children: []
            });

            Transforms.insertNodes(editor, wrapper, {
              at: wrapperPath,
              voids
            });
            Transforms.moveNodes(editor, {
              at: range,
              match: n => Element.isAncestor(commonNode) && commonNode.children.includes(n),
              to: wrapperPath.concat(0),
              voids
            });
          }();

          if (_ret === "continue") continue;
        }
      }
    });
  }

};

var hasSingleChildNest = (editor, node) => {
  if (Element.isElement(node)) {
    var element = node;

    if (Editor.isVoid(editor, node)) {
      return true;
    } else if (element.children.length === 1) {
      return hasSingleChildNest(editor, element.children[0]);
    } else {
      return false;
    }
  } else if (Editor.isEditor(node)) {
    return false;
  } else {
    return true;
  }
};
/**
 * Convert a range into a point by deleting it's content.
 */


var deleteRange = (editor, range) => {
  if (Range.isCollapsed(range)) {
    return range.anchor;
  } else {
    var [, end] = Range.edges(range);
    var pointRef = Editor.pointRef(editor, end);
    Transforms.delete(editor, {
      at: range
    });
    return pointRef.unref();
  }
};

var matchPath = (editor, path) => {
  var [node] = Editor.node(editor, path);
  return n => n === node;
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var SelectionTransforms = {
  /**
   * Collapse the selection.
   */
  collapse(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      edge = 'anchor'
    } = options;
    var {
      selection
    } = editor;

    if (!selection) {
      return;
    } else if (edge === 'anchor') {
      Transforms.select(editor, selection.anchor);
    } else if (edge === 'focus') {
      Transforms.select(editor, selection.focus);
    } else if (edge === 'start') {
      var [start] = Range.edges(selection);
      Transforms.select(editor, start);
    } else if (edge === 'end') {
      var [, end] = Range.edges(selection);
      Transforms.select(editor, end);
    }
  },

  /**
   * Unset the selection.
   */
  deselect(editor) {
    var {
      selection
    } = editor;

    if (selection) {
      editor.apply({
        type: 'set_selection',
        properties: selection,
        newProperties: null
      });
    }
  },

  /**
   * Move the selection's point forward or backward.
   */
  move(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      selection
    } = editor;
    var {
      distance = 1,
      unit = 'character',
      reverse = false
    } = options;
    var {
      edge = null
    } = options;

    if (!selection) {
      return;
    }

    if (edge === 'start') {
      edge = Range.isBackward(selection) ? 'focus' : 'anchor';
    }

    if (edge === 'end') {
      edge = Range.isBackward(selection) ? 'anchor' : 'focus';
    }

    var {
      anchor,
      focus
    } = selection;
    var opts = {
      distance,
      unit
    };
    var props = {};

    if (edge == null || edge === 'anchor') {
      var point = reverse ? Editor.before(editor, anchor, opts) : Editor.after(editor, anchor, opts);

      if (point) {
        props.anchor = point;
      }
    }

    if (edge == null || edge === 'focus') {
      var _point = reverse ? Editor.before(editor, focus, opts) : Editor.after(editor, focus, opts);

      if (_point) {
        props.focus = _point;
      }
    }

    Transforms.setSelection(editor, props);
  },

  /**
   * Set the selection to a new value.
   */
  select(editor, target) {
    var {
      selection
    } = editor;
    target = Editor.range(editor, target);

    if (selection) {
      Transforms.setSelection(editor, target);
      return;
    }

    if (!Range.isRange(target)) {
      throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(JSON.stringify(target)));
    }

    editor.apply({
      type: 'set_selection',
      properties: selection,
      newProperties: target
    });
  },

  /**
   * Set new properties on one of the selection's points.
   */
  setPoint(editor, props) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var {
      selection
    } = editor;
    var {
      edge = 'both'
    } = options;

    if (!selection) {
      return;
    }

    if (edge === 'start') {
      edge = Range.isBackward(selection) ? 'focus' : 'anchor';
    }

    if (edge === 'end') {
      edge = Range.isBackward(selection) ? 'anchor' : 'focus';
    }

    var {
      anchor,
      focus
    } = selection;
    var point = edge === 'anchor' ? anchor : focus;
    Transforms.setSelection(editor, {
      [edge === 'anchor' ? 'anchor' : 'focus']: _objectSpread$1(_objectSpread$1({}, point), props)
    });
  },

  /**
   * Set new properties on the selection.
   */
  setSelection(editor, props) {
    var {
      selection
    } = editor;
    var oldProps = {};
    var newProps = {};

    if (!selection) {
      return;
    }

    for (var k in props) {
      if (k === 'anchor' && props.anchor != null && !Point.equals(props.anchor, selection.anchor) || k === 'focus' && props.focus != null && !Point.equals(props.focus, selection.focus) || k !== 'anchor' && k !== 'focus' && props[k] !== selection[k]) {
        oldProps[k] = selection[k];
        newProps[k] = props[k];
      }
    }

    if (Object.keys(oldProps).length > 0) {
      editor.apply({
        type: 'set_selection',
        properties: oldProps,
        newProperties: newProps
      });
    }
  }

};

var TextTransforms = {
  /**
   * Delete content in the editor.
   */
  delete(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        reverse = false,
        unit = 'character',
        distance = 1,
        voids = false
      } = options;
      var {
        at = editor.selection,
        hanging = false
      } = options;

      if (!at) {
        return;
      }

      if (Range.isRange(at) && Range.isCollapsed(at)) {
        at = at.anchor;
      }

      if (Point.isPoint(at)) {
        var furthestVoid = Editor.void(editor, {
          at,
          mode: 'highest'
        });

        if (!voids && furthestVoid) {
          var [, voidPath] = furthestVoid;
          at = voidPath;
        } else {
          var opts = {
            unit,
            distance
          };
          var target = reverse ? Editor.before(editor, at, opts) || Editor.start(editor, []) : Editor.after(editor, at, opts) || Editor.end(editor, []);
          at = {
            anchor: at,
            focus: target
          };
          hanging = true;
        }
      }

      if (Path.isPath(at)) {
        Transforms.removeNodes(editor, {
          at,
          voids
        });
        return;
      }

      if (Range.isCollapsed(at)) {
        return;
      }

      if (!hanging) {
        var [, _end] = Range.edges(at);
        var endOfDoc = Editor.end(editor, []);

        if (!Point.equals(_end, endOfDoc)) {
          at = Editor.unhangRange(editor, at, {
            voids
          });
        }
      }

      var [start, end] = Range.edges(at);
      var startBlock = Editor.above(editor, {
        match: n => Editor.isBlock(editor, n),
        at: start,
        voids
      });
      var endBlock = Editor.above(editor, {
        match: n => Editor.isBlock(editor, n),
        at: end,
        voids
      });
      var isAcrossBlocks = startBlock && endBlock && !Path.equals(startBlock[1], endBlock[1]);
      var isSingleText = Path.equals(start.path, end.path);
      var startVoid = voids ? null : Editor.void(editor, {
        at: start,
        mode: 'highest'
      });
      var endVoid = voids ? null : Editor.void(editor, {
        at: end,
        mode: 'highest'
      }); // If the start or end points are inside an inline void, nudge them out.

      if (startVoid) {
        var before = Editor.before(editor, start);

        if (before && startBlock && Path.isAncestor(startBlock[1], before.path)) {
          start = before;
        }
      }

      if (endVoid) {
        var after = Editor.after(editor, end);

        if (after && endBlock && Path.isAncestor(endBlock[1], after.path)) {
          end = after;
        }
      } // Get the highest nodes that are completely inside the range, as well as
      // the start and end nodes.


      var matches = [];
      var lastPath;

      for (var entry of Editor.nodes(editor, {
        at,
        voids
      })) {
        var [node, path] = entry;

        if (lastPath && Path.compare(path, lastPath) === 0) {
          continue;
        }

        if (!voids && Editor.isVoid(editor, node) || !Path.isCommon(path, start.path) && !Path.isCommon(path, end.path)) {
          matches.push(entry);
          lastPath = path;
        }
      }

      var pathRefs = Array.from(matches, _ref => {
        var [, p] = _ref;
        return Editor.pathRef(editor, p);
      });
      var startRef = Editor.pointRef(editor, start);
      var endRef = Editor.pointRef(editor, end);

      if (!isSingleText && !startVoid) {
        var _point = startRef.current;
        var [_node] = Editor.leaf(editor, _point);
        var {
          path: _path
        } = _point;
        var {
          offset
        } = start;

        var text = _node.text.slice(offset);

        if (text.length > 0) editor.apply({
          type: 'remove_text',
          path: _path,
          offset,
          text
        });
      }

      for (var pathRef of pathRefs) {
        var _path2 = pathRef.unref();

        Transforms.removeNodes(editor, {
          at: _path2,
          voids
        });
      }

      if (!endVoid) {
        var _point2 = endRef.current;
        var [_node2] = Editor.leaf(editor, _point2);
        var {
          path: _path3
        } = _point2;

        var _offset = isSingleText ? start.offset : 0;

        var _text = _node2.text.slice(_offset, end.offset);

        if (_text.length > 0) editor.apply({
          type: 'remove_text',
          path: _path3,
          offset: _offset,
          text: _text
        });
      }

      if (!isSingleText && isAcrossBlocks && endRef.current && startRef.current) {
        Transforms.mergeNodes(editor, {
          at: endRef.current,
          hanging: true,
          voids
        });
      }

      var point = reverse ? startRef.unref() || endRef.unref() : endRef.unref() || startRef.unref();

      if (options.at == null && point) {
        Transforms.select(editor, point);
      }
    });
  },

  /**
   * Insert a fragment at a specific location in the editor.
   */
  insertFragment(editor, fragment) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        hanging = false,
        voids = false
      } = options;
      var {
        at = editor.selection
      } = options;

      if (!fragment.length) {
        return;
      }

      if (!at) {
        return;
      } else if (Range.isRange(at)) {
        if (!hanging) {
          at = Editor.unhangRange(editor, at);
        }

        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var [, end] = Range.edges(at);

          if (!voids && Editor.void(editor, {
            at: end
          })) {
            return;
          }

          var pointRef = Editor.pointRef(editor, end);
          Transforms.delete(editor, {
            at
          });
          at = pointRef.unref();
        }
      } else if (Path.isPath(at)) {
        at = Editor.start(editor, at);
      }

      if (!voids && Editor.void(editor, {
        at
      })) {
        return;
      } // If the insert point is at the edge of an inline node, move it outside
      // instead since it will need to be split otherwise.


      var inlineElementMatch = Editor.above(editor, {
        at,
        match: n => Editor.isInline(editor, n),
        mode: 'highest',
        voids
      });

      if (inlineElementMatch) {
        var [, _inlinePath] = inlineElementMatch;

        if (Editor.isEnd(editor, at, _inlinePath)) {
          var after = Editor.after(editor, _inlinePath);
          at = after;
        } else if (Editor.isStart(editor, at, _inlinePath)) {
          var before = Editor.before(editor, _inlinePath);
          at = before;
        }
      }

      var blockMatch = Editor.above(editor, {
        match: n => Editor.isBlock(editor, n),
        at,
        voids
      });
      var [, blockPath] = blockMatch;
      var isBlockStart = Editor.isStart(editor, at, blockPath);
      var isBlockEnd = Editor.isEnd(editor, at, blockPath);
      var isBlockEmpty = isBlockStart && isBlockEnd;
      var mergeStart = !isBlockStart || isBlockStart && isBlockEnd;
      var mergeEnd = !isBlockEnd;
      var [, firstPath] = Node.first({
        children: fragment
      }, []);
      var [, lastPath] = Node.last({
        children: fragment
      }, []);
      var matches = [];

      var matcher = _ref2 => {
        var [n, p] = _ref2;
        var isRoot = p.length === 0;

        if (isRoot) {
          return false;
        }

        if (isBlockEmpty) {
          return true;
        }

        if (mergeStart && Path.isAncestor(p, firstPath) && Element.isElement(n) && !editor.isVoid(n) && !editor.isInline(n)) {
          return false;
        }

        if (mergeEnd && Path.isAncestor(p, lastPath) && Element.isElement(n) && !editor.isVoid(n) && !editor.isInline(n)) {
          return false;
        }

        return true;
      };

      for (var entry of Node.nodes({
        children: fragment
      }, {
        pass: matcher
      })) {
        if (matcher(entry)) {
          matches.push(entry);
        }
      }

      var starts = [];
      var middles = [];
      var ends = [];
      var starting = true;
      var hasBlocks = false;

      for (var [node] of matches) {
        if (Element.isElement(node) && !editor.isInline(node)) {
          starting = false;
          hasBlocks = true;
          middles.push(node);
        } else if (starting) {
          starts.push(node);
        } else {
          ends.push(node);
        }
      }

      var [inlineMatch] = Editor.nodes(editor, {
        at,
        match: n => Text.isText(n) || Editor.isInline(editor, n),
        mode: 'highest',
        voids
      });
      var [, inlinePath] = inlineMatch;
      var isInlineStart = Editor.isStart(editor, at, inlinePath);
      var isInlineEnd = Editor.isEnd(editor, at, inlinePath);
      var middleRef = Editor.pathRef(editor, isBlockEnd ? Path.next(blockPath) : blockPath);
      var endRef = Editor.pathRef(editor, isInlineEnd ? Path.next(inlinePath) : inlinePath);
      var blockPathRef = Editor.pathRef(editor, blockPath);
      Transforms.splitNodes(editor, {
        at,
        match: n => hasBlocks ? Editor.isBlock(editor, n) : Text.isText(n) || Editor.isInline(editor, n),
        mode: hasBlocks ? 'lowest' : 'highest',
        voids
      });
      var startRef = Editor.pathRef(editor, !isInlineStart || isInlineStart && isInlineEnd ? Path.next(inlinePath) : inlinePath);
      Transforms.insertNodes(editor, starts, {
        at: startRef.current,
        match: n => Text.isText(n) || Editor.isInline(editor, n),
        mode: 'highest',
        voids
      });

      if (isBlockEmpty && middles.length) {
        Transforms.delete(editor, {
          at: blockPathRef.unref(),
          voids
        });
      }

      Transforms.insertNodes(editor, middles, {
        at: middleRef.current,
        match: n => Editor.isBlock(editor, n),
        mode: 'lowest',
        voids
      });
      Transforms.insertNodes(editor, ends, {
        at: endRef.current,
        match: n => Text.isText(n) || Editor.isInline(editor, n),
        mode: 'highest',
        voids
      });

      if (!options.at) {
        var path;

        if (ends.length > 0) {
          path = Path.previous(endRef.current);
        } else if (middles.length > 0) {
          path = Path.previous(middleRef.current);
        } else {
          path = Path.previous(startRef.current);
        }

        var _end2 = Editor.end(editor, path);

        Transforms.select(editor, _end2);
      }

      startRef.unref();
      middleRef.unref();
      endRef.unref();
    });
  },

  /**
   * Insert a string of text in the Editor.
   */
  insertText(editor, text) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        voids = false
      } = options;
      var {
        at = editor.selection
      } = options;

      if (!at) {
        return;
      }

      if (Path.isPath(at)) {
        at = Editor.range(editor, at);
      }

      if (Range.isRange(at)) {
        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var end = Range.end(at);

          if (!voids && Editor.void(editor, {
            at: end
          })) {
            return;
          }

          var pointRef = Editor.pointRef(editor, end);
          Transforms.delete(editor, {
            at,
            voids
          });
          at = pointRef.unref();
          Transforms.setSelection(editor, {
            anchor: at,
            focus: at
          });
        }
      }

      if (!voids && Editor.void(editor, {
        at
      })) {
        return;
      }

      var {
        path,
        offset
      } = at;
      if (text.length > 0) editor.apply({
        type: 'insert_text',
        path,
        offset,
        text
      });
    });
  }

};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Transforms = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, GeneralTransforms), NodeTransforms), SelectionTransforms), TextTransforms);


//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "../packages/plugins/content/slate/lib-es/components/DialogVisibleProvider.js":
/*!************************************************************************************!*\
  !*** ../packages/plugins/content/slate/lib-es/components/DialogVisibleProvider.js ***!
  \************************************************************************************/
/*! exports provided: useDialogIsVisible, useSetDialogIsVisible, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDialogIsVisible", function() { return useDialogIsVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSetDialogIsVisible", function() { return useSetDialogIsVisible; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

var DialogContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
var DialogVisibleProvider = function (_a) {
    var children = _a.children;
    var _b = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), 2), visible = _b[0], setVisible = _b[1];
    var value = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return ({ visible: visible, setVisible: setVisible }); }, [visible, setVisible]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DialogContext.Provider, { value: value }, children));
};
var useDialogIsVisible = function () {
    var _a;
    return (_a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(DialogContext)) === null || _a === void 0 ? void 0 : _a.visible;
};
var useSetDialogIsVisible = function () {
    var _a;
    return (_a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(DialogContext)) === null || _a === void 0 ? void 0 : _a.setVisible;
};
/* harmony default export */ __webpack_exports__["default"] = (DialogVisibleProvider);
//# sourceMappingURL=DialogVisibleProvider.js.map

/***/ }),

/***/ "../packages/plugins/content/slate/lib-es/components/SlateProvider.js":
/*!****************************************************************************!*\
  !*** ../packages/plugins/content/slate/lib-es/components/SlateProvider.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_page_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-page/editor */ "../packages/editor/lib-es/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.debounce */ "../node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate */ "../node_modules/slate/dist/index.es.js");
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slate-react */ "../node_modules/slate-react/dist/index.es.js");
/* harmony import */ var _slateEnhancer_withInline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../slateEnhancer/withInline */ "../packages/plugins/content/slate/lib-es/slateEnhancer/withInline.js");
/* harmony import */ var _slateEnhancer_withPaste__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../slateEnhancer/withPaste */ "../packages/plugins/content/slate/lib-es/slateEnhancer/withPaste.js");
/* harmony import */ var _DialogVisibleProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DialogVisibleProvider */ "../packages/plugins/content/slate/lib-es/components/DialogVisibleProvider.js");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};








var SlateProvider = function (props) {
    var data = props.data, plugins = props.plugins, children = props.children, defaultPluginType = props.defaultPluginType;
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(data === null || data === void 0 ? void 0 : data.slate), 2), value = _a[0], setValue = _a[1];
    var valueRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(value);
    valueRef.current = value;
    var editor = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
        return Object(_slateEnhancer_withPaste__WEBPACK_IMPORTED_MODULE_6__["default"])(plugins, defaultPluginType)(Object(slate_react__WEBPACK_IMPORTED_MODULE_4__["withReact"])(Object(_slateEnhancer_withInline__WEBPACK_IMPORTED_MODULE_5__["default"])(plugins)(Object(slate__WEBPACK_IMPORTED_MODULE_3__["createEditor"])())));
    }, []);
    var onChangeDebounced = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(function () {
        props.onChange({
            slate: valueRef.current,
            selection: editor.selection,
        }, {
            // mark as not undoable when state is same
            // that happens if only selection was changed
            notUndoable: Object(_react_page_editor__WEBPACK_IMPORTED_MODULE_0__["deepEquals"])(valueRef.current, data.slate),
        });
    }, 200), [props.onChange, editor, data.slate]);
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
        if (data.selection) {
            // update seleciton, if changed from outside (e.g. through undo)
            slate__WEBPACK_IMPORTED_MODULE_3__["Transforms"].select(editor, data.selection);
        }
        else {
            // deselect, otherwise slate might throw an eerror if cursor is now on a non existing dom node
            slate__WEBPACK_IMPORTED_MODULE_3__["Transforms"].deselect(editor);
        }
        setValue(data === null || data === void 0 ? void 0 : data.slate);
    }, [data === null || data === void 0 ? void 0 : data.slate, data === null || data === void 0 ? void 0 : data.selection]);
    var onChange = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (v) {
        if (editor.selection) {
            setValue(v);
            onChangeDebounced();
        }
    }, [onChangeDebounced]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_DialogVisibleProvider__WEBPACK_IMPORTED_MODULE_7__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(slate_react__WEBPACK_IMPORTED_MODULE_4__["Slate"], { editor: editor, value: value, onChange: onChange }, children)));
};
/* harmony default export */ __webpack_exports__["default"] = (SlateProvider);
//# sourceMappingURL=SlateProvider.js.map

/***/ }),

/***/ "../packages/plugins/content/slate/lib-es/slateEnhancer/withInline.js":
/*!****************************************************************************!*\
  !*** ../packages/plugins/content/slate/lib-es/slateEnhancer/withInline.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var withInline = function (plugins) { return function (editor) {
    var isInline = editor.isInline;
    editor.isInline = function (element) {
        return plugins.some(function (plugin) {
            return plugin.pluginType === 'component' &&
                plugin.object === 'inline' &&
                plugin.type === element.type;
        })
            ? true
            : isInline(element);
    };
    return editor;
}; };
/* harmony default export */ __webpack_exports__["default"] = (withInline);
//# sourceMappingURL=withInline.js.map

/***/ }),

/***/ "../packages/plugins/content/slate/lib-es/slateEnhancer/withPaste.js":
/*!***************************************************************************!*\
  !*** ../packages/plugins/content/slate/lib-es/slateEnhancer/withPaste.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_page_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-page/editor */ "../packages/editor/lib-es/index.js");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ "../node_modules/slate/dist/index.es.js");
/* harmony import */ var _htmlToSlate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../htmlToSlate */ "../packages/plugins/content/slate/lib-es/htmlToSlate/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var withPaste = function (plugins, defaultPluginType) { return function (editor) {
    var insertData = editor.insertData;
    var htmlToSlate = Object(_htmlToSlate__WEBPACK_IMPORTED_MODULE_2__["HtmlToSlate"])({ plugins: plugins });
    editor.insertData = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var slateData, html, slate, text, node, lines, nextWillbeParagraph, i, thisLine, nextLine, nextIsEmpty, thisLineText;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    slateData = data.getData('application/x-slate-fragment');
                    if (slateData) {
                        insertData(data);
                        return [2 /*return*/];
                    }
                    html = data.getData('text/html');
                    if (!html) return [3 /*break*/, 2];
                    return [4 /*yield*/, htmlToSlate(html)];
                case 1:
                    slate = (_a.sent()).slate;
                    slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].insertFragment(editor, slate);
                    return [2 /*return*/];
                case 2:
                    text = data.getData('text/plain');
                    if (text) {
                        // check if its a react-page data
                        try {
                            node = JSON.parse(text);
                            if (Object(_react_page_editor__WEBPACK_IMPORTED_MODULE_0__["objIsNode"])(node)) {
                                return [2 /*return*/];
                            }
                        }
                        catch (e) {
                            //ignore
                        }
                        lines = text.split('\n');
                        nextWillbeParagraph = false;
                        for (i = 0; i < lines.length; i++) {
                            thisLine = lines[i];
                            nextLine = lines[i + 1];
                            nextIsEmpty = !nextLine || !nextLine.trim();
                            thisLineText = thisLine + (nextIsEmpty ? '' : '\n');
                            if (!thisLine.trim()) {
                                // this line is empty,
                                nextWillbeParagraph = true;
                            }
                            else if (nextWillbeParagraph) {
                                slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].insertNodes(editor, {
                                    type: defaultPluginType,
                                    children: [{ text: thisLineText }],
                                });
                                nextWillbeParagraph = false;
                            }
                            else {
                                slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].insertText(editor, thisLineText);
                                nextWillbeParagraph = false;
                            }
                        }
                        return [2 /*return*/];
                    }
                    insertData(data);
                    return [2 /*return*/];
            }
        });
    }); };
    return editor;
}; };
/* harmony default export */ __webpack_exports__["default"] = (withPaste);
//# sourceMappingURL=withPaste.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9jb21wdXRlLXNjcm9sbC1pbnRvLXZpZXcvZGlzdC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvZGlyZWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL2ltbWVyL2Rpc3QvaW1tZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL2lzLWhvdGtleS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvaXMtcGxhaW4tb2JqZWN0L2Rpc3QvaXMtcGxhaW4tb2JqZWN0Lm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUcmltLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdHJpbW1lZEVuZEluZGV4LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbm93LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC90aHJvdHRsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9OdW1iZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvc2Nyb2xsLWludG8tdmlldy1pZi1uZWVkZWQvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvc2xhdGUtcmVhY3QvZGlzdC9pbmRleC5lcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9zbGF0ZS1yZWFjdC9ub2RlX21vZHVsZXMvdGlueS1pbnZhcmlhbnQvZGlzdC90aW55LWludmFyaWFudC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvc2xhdGUvZGlzdC9pbmRleC5lcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL3BhY2thZ2VzL3BsdWdpbnMvY29udGVudC9zbGF0ZS9saWItZXMvY29tcG9uZW50cy9EaWFsb2dWaXNpYmxlUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9wYWNrYWdlcy9wbHVnaW5zL2NvbnRlbnQvc2xhdGUvbGliLWVzL2NvbXBvbmVudHMvU2xhdGVQcm92aWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL3BhY2thZ2VzL3BsdWdpbnMvY29udGVudC9zbGF0ZS9saWItZXMvc2xhdGVFbmhhbmNlci93aXRoSW5saW5lLmpzIiwid2VicGFjazovL19OX0UvLi4vcGFja2FnZXMvcGx1Z2lucy9jb250ZW50L3NsYXRlL2xpYi1lcy9zbGF0ZUVuaGFuY2VyL3dpdGhQYXN0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQSxjQUFjLGtEQUFrRCxnQkFBZ0Isb0RBQW9ELGdCQUFnQiwrREFBK0QsK0JBQStCLHVEQUF1RCxrQkFBa0IsOERBQThELElBQUksZ0RBQWdELFNBQVMsYUFBYSxJQUFJLHdFQUF3RSxJQUFJLFNBQVMsNEJBQTRCLG9GQUFtRyw2RUFBYyxrSUFBa0ksY0FBYywrQ0FBK0MsdUVBQXVFLFdBQVcsRUFBRSw0QkFBNEIsVUFBVSxNQUFNLDJGQUEyRixvV0FBb1csV0FBVyxLQUFLLGtHQUFrRyw0RUFBNEUsdVJBQXVSLHNNQUFzTSxLQUFLLGlMQUFpTCxpQ0FBaUMsMkdBQTJHLFFBQVEsa0JBQWtCLEVBQUUsU0FBUztBQUN6NkU7Ozs7Ozs7Ozs7Ozs7QUNEWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMERBQTBELGdFQUFnRTtBQUMxSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEI7Ozs7Ozs7Ozs7OztBQ3BQQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUV5Qjs7Ozs7Ozs7Ozs7O0FDakN6QixzQkFBc0IsbUJBQU8sQ0FBQyxzRUFBb0I7O0FBRWxEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDbEJBLGVBQWUsbUJBQU8sQ0FBQyxzREFBWTtBQUNuQyxVQUFVLG1CQUFPLENBQUMsNENBQU87QUFDekIsZUFBZSxtQkFBTyxDQUFDLHNEQUFZOztBQUVuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPLFlBQVk7QUFDOUIsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsOENBQThDLGtCQUFrQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUM5TEEsV0FBVyxtQkFBTyxDQUFDLGdEQUFTOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3RCQSxlQUFlLG1CQUFPLENBQUMsc0RBQVk7QUFDbkMsZUFBZSxtQkFBTyxDQUFDLHNEQUFZOztBQUVuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFlBQVksNENBQU07QUFDbEI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sZ0RBQVU7QUFDaEI7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNENBQU07O0FBRXhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxlQUFlLDZCQUE2QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBLGlCQUFpQixnQkFBZ0I7QUFDakM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUyxxRUFBYTtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBYTtBQUN4QixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSw0Q0FBNEMsZ0NBQWdDLG9DQUFvQyxvREFBb0Qsc0JBQXNCLDBDQUEwQyxnRUFBZ0UsRUFBRSxFQUFFLEVBQUUsZ0NBQWdDLEVBQUUsYUFBYTs7QUFFelYsa0NBQWtDLGdCQUFnQixzQkFBc0IsT0FBTyx1REFBdUQsYUFBYSx5REFBeUQsMkNBQTJDLEVBQUUsRUFBRSxFQUFFLDZDQUE2QywyRUFBMkUsRUFBRSxPQUFPLG1EQUFtRCxrRkFBa0YsRUFBRSxFQUFFLEVBQUUsRUFBRSxlQUFlO0FBQzFoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsNkVBQTZFLGNBQWM7QUFDM0Y7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLDZFQUE2RSxjQUFjO0FBQzNGO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHFFQUFhO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwybkJBQTJuQixxRUFBYTtBQUN4b0I7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLDREQUE0RDs7QUFFNUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0RBQWtEOztBQUVsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxREFBcUQ7OztBQUdyRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7OztBQUdBLDRDQUE0Qzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFVBQVU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELFFBQVE7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQSxvQ0FBb0Msa0JBQWtCO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBLFdBQVc7OztBQUdYO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsY0FBYztBQUNoRjtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FB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QzVEO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSxtREFBbUQsU0FBUztBQUM1RDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLG1EQUFtRCxTQUFTO0FBQzVEO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQSxxREFBcUQsU0FBUztBQUM5RDtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWCxxREFBcUQsU0FBUztBQUM5RDtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWCxxREFBcUQsU0FBUztBQUM5RDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1EQUFtRCxTQUFTO0FBQzVEO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQix1Q0FBdUM7QUFDMUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFEQUFPO0FBQ2xCO0FBQ0E7QUFDQSxPQUFPLFdBQVc7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FB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QTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU8sd0NBQXdDO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7O0FBRTlCLGdFQUFnRTs7QUFFaEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0REFBNEQsY0FBYztBQUMxRTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNENBQTRDLGdDQUFnQyxvQ0FBb0Msb0RBQW9ELHNCQUFzQiwwQ0FBMEMsZ0VBQWdFLEVBQUUsRUFBRSxFQUFFLGdDQUFnQyxFQUFFLGFBQWE7O0FBRXpWLGtDQUFrQyxnQkFBZ0Isc0JBQXNCLE9BQU8sdURBQXVELGFBQWEseURBQXlELDJDQUEyQyxFQUFFLEVBQUUsRUFBRSw2Q0FBNkMsMkVBQTJFLEVBQUUsT0FBTyxtREFBbUQsa0ZBQWtGLEVBQUUsRUFBRSxFQUFFLEVBQUUsZUFBZTtBQUMxaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esa0ZBQWtGO0FBQ2xGLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPLEVBQUU7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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LFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUMrQztBQUNaO0FBQ1U7QUFDN0MsdURBQXVEO0FBQ3ZEO0FBQ0Esc0JBQXNCLGdFQUFXLEVBQUUsbUJBQW1CO0FBQ3RELHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdEQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG9FQUFTO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsa0JBQWtCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnREFBVTtBQUMxQztBQUNBLGdEQUFnRCxxQkFBcUI7QUFDckUsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnREFBVTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUssRUFBRTtBQUNQO0FBQ0EsRUFBRTtBQUNhLHdFQUFTLEVBQUM7QUFDekIscUMiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHQodCl7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIHQmJm51bGwhPXQmJjE9PT10Lm5vZGVUeXBlfWZ1bmN0aW9uIGUodCxlKXtyZXR1cm4oIWV8fFwiaGlkZGVuXCIhPT10KSYmXCJ2aXNpYmxlXCIhPT10JiZcImNsaXBcIiE9PXR9ZnVuY3Rpb24gbih0LG4pe2lmKHQuY2xpZW50SGVpZ2h0PHQuc2Nyb2xsSGVpZ2h0fHx0LmNsaWVudFdpZHRoPHQuc2Nyb2xsV2lkdGgpe3ZhciByPWdldENvbXB1dGVkU3R5bGUodCxudWxsKTtyZXR1cm4gZShyLm92ZXJmbG93WSxuKXx8ZShyLm92ZXJmbG93WCxuKXx8ZnVuY3Rpb24odCl7dmFyIGU9ZnVuY3Rpb24odCl7aWYoIXQub3duZXJEb2N1bWVudHx8IXQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldylyZXR1cm4gbnVsbDt0cnl7cmV0dXJuIHQub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5mcmFtZUVsZW1lbnR9Y2F0Y2godCl7cmV0dXJuIG51bGx9fSh0KTtyZXR1cm4hIWUmJihlLmNsaWVudEhlaWdodDx0LnNjcm9sbEhlaWdodHx8ZS5jbGllbnRXaWR0aDx0LnNjcm9sbFdpZHRoKX0odCl9cmV0dXJuITF9ZnVuY3Rpb24gcih0LGUsbixyLGksbyxsLGQpe3JldHVybiBvPHQmJmw+ZXx8bz50JiZsPGU/MDpvPD10JiZkPD1ufHxsPj1lJiZkPj1uP28tdC1yOmw+ZSYmZDxufHxvPHQmJmQ+bj9sLWUraTowfWV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGUsaSl7dmFyIG89d2luZG93LGw9aS5zY3JvbGxNb2RlLGQ9aS5ibG9jayx1PWkuaW5saW5lLGg9aS5ib3VuZGFyeSxhPWkuc2tpcE92ZXJmbG93SGlkZGVuRWxlbWVudHMsYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBoP2g6ZnVuY3Rpb24odCl7cmV0dXJuIHQhPT1ofTtpZighdChlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCB0YXJnZXRcIik7Zm9yKHZhciBmPWRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnR8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxzPVtdLHA9ZTt0KHApJiZjKHApOyl7aWYoKHA9cC5wYXJlbnRFbGVtZW50KT09PWYpe3MucHVzaChwKTticmVha31udWxsIT1wJiZwPT09ZG9jdW1lbnQuYm9keSYmbihwKSYmIW4oZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KXx8bnVsbCE9cCYmbihwLGEpJiZzLnB1c2gocCl9Zm9yKHZhciBtPW8udmlzdWFsVmlld3BvcnQ/by52aXN1YWxWaWV3cG9ydC53aWR0aDppbm5lcldpZHRoLGc9by52aXN1YWxWaWV3cG9ydD9vLnZpc3VhbFZpZXdwb3J0LmhlaWdodDppbm5lckhlaWdodCx3PXdpbmRvdy5zY3JvbGxYfHxwYWdlWE9mZnNldCx2PXdpbmRvdy5zY3JvbGxZfHxwYWdlWU9mZnNldCxXPWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksYj1XLmhlaWdodCxIPVcud2lkdGgseT1XLnRvcCxFPVcucmlnaHQsTT1XLmJvdHRvbSxWPVcubGVmdCx4PVwic3RhcnRcIj09PWR8fFwibmVhcmVzdFwiPT09ZD95OlwiZW5kXCI9PT1kP006eStiLzIsST1cImNlbnRlclwiPT09dT9WK0gvMjpcImVuZFwiPT09dT9FOlYsQz1bXSxUPTA7VDxzLmxlbmd0aDtUKyspe3ZhciBrPXNbVF0sQj1rLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLEQ9Qi5oZWlnaHQsTz1CLndpZHRoLFI9Qi50b3AsWD1CLnJpZ2h0LFk9Qi5ib3R0b20sTD1CLmxlZnQ7aWYoXCJpZi1uZWVkZWRcIj09PWwmJnk+PTAmJlY+PTAmJk08PWcmJkU8PW0mJnk+PVImJk08PVkmJlY+PUwmJkU8PVgpcmV0dXJuIEM7dmFyIFM9Z2V0Q29tcHV0ZWRTdHlsZShrKSxqPXBhcnNlSW50KFMuYm9yZGVyTGVmdFdpZHRoLDEwKSxxPXBhcnNlSW50KFMuYm9yZGVyVG9wV2lkdGgsMTApLHo9cGFyc2VJbnQoUy5ib3JkZXJSaWdodFdpZHRoLDEwKSxBPXBhcnNlSW50KFMuYm9yZGVyQm90dG9tV2lkdGgsMTApLEY9MCxHPTAsSj1cIm9mZnNldFdpZHRoXCJpbiBrP2sub2Zmc2V0V2lkdGgtay5jbGllbnRXaWR0aC1qLXo6MCxLPVwib2Zmc2V0SGVpZ2h0XCJpbiBrP2sub2Zmc2V0SGVpZ2h0LWsuY2xpZW50SGVpZ2h0LXEtQTowO2lmKGY9PT1rKUY9XCJzdGFydFwiPT09ZD94OlwiZW5kXCI9PT1kP3gtZzpcIm5lYXJlc3RcIj09PWQ/cih2LHYrZyxnLHEsQSx2K3gsdit4K2IsYik6eC1nLzIsRz1cInN0YXJ0XCI9PT11P0k6XCJjZW50ZXJcIj09PXU/SS1tLzI6XCJlbmRcIj09PXU/SS1tOnIodyx3K20sbSxqLHosdytJLHcrSStILEgpLEY9TWF0aC5tYXgoMCxGK3YpLEc9TWF0aC5tYXgoMCxHK3cpO2Vsc2V7Rj1cInN0YXJ0XCI9PT1kP3gtUi1xOlwiZW5kXCI9PT1kP3gtWStBK0s6XCJuZWFyZXN0XCI9PT1kP3IoUixZLEQscSxBK0sseCx4K2IsYik6eC0oUitELzIpK0svMixHPVwic3RhcnRcIj09PXU/SS1MLWo6XCJjZW50ZXJcIj09PXU/SS0oTCtPLzIpK0ovMjpcImVuZFwiPT09dT9JLVgreitKOnIoTCxYLE8saix6K0osSSxJK0gsSCk7dmFyIE49ay5zY3JvbGxMZWZ0LFA9ay5zY3JvbGxUb3A7eCs9UC0oRj1NYXRoLm1heCgwLE1hdGgubWluKFArRixrLnNjcm9sbEhlaWdodC1EK0spKSksSSs9Ti0oRz1NYXRoLm1heCgwLE1hdGgubWluKE4rRyxrLnNjcm9sbFdpZHRoLU8rSikpKX1DLnB1c2goe2VsOmssdG9wOkYsbGVmdDpHfSl9cmV0dXJuIEN9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tb2R1bGUuanMubWFwXG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBkaXJlY3Rpb25cblxudmFyIFJUTCA9ICdcXHUwNTkxLVxcdTA3RkZcXHVGQjFELVxcdUZERkRcXHVGRTcwLVxcdUZFRkMnXG52YXIgTFRSID1cbiAgJ0EtWmEtelxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNicgK1xuICAnXFx1MDBGOC1cXHUwMkI4XFx1MDMwMC1cXHUwNTkwXFx1MDgwMC1cXHUxRkZGXFx1MjAwRVxcdTJDMDAtXFx1RkIxQycgK1xuICAnXFx1RkUwMC1cXHVGRTZGXFx1RkVGRC1cXHVGRkZGJ1xuXG52YXIgcnRsID0gbmV3IFJlZ0V4cCgnXlteJyArIExUUiArICddKlsnICsgUlRMICsgJ10nKVxudmFyIGx0ciA9IG5ldyBSZWdFeHAoJ15bXicgKyBSVEwgKyAnXSpbJyArIExUUiArICddJylcblxuZnVuY3Rpb24gZGlyZWN0aW9uKHZhbHVlKSB7XG4gIHZhbHVlID0gU3RyaW5nKHZhbHVlIHx8ICcnKVxuXG4gIGlmIChydGwudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gJ3J0bCdcbiAgfVxuXG4gIGlmIChsdHIudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gJ2x0cidcbiAgfVxuXG4gIHJldHVybiAnbmV1dHJhbCdcbn1cbiIsImZ1bmN0aW9uIG4obil7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgscj1BcnJheSh0PjE/dC0xOjApLGU9MTtlPHQ7ZSsrKXJbZS0xXT1hcmd1bWVudHNbZV07aWYoXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVil7dmFyIGk9WVtuXSxvPWk/XCJmdW5jdGlvblwiPT10eXBlb2YgaT9pLmFwcGx5KG51bGwscik6aTpcInVua25vd24gZXJyb3IgbnI6IFwiK247dGhyb3cgRXJyb3IoXCJbSW1tZXJdIFwiK28pfXRocm93IEVycm9yKFwiW0ltbWVyXSBtaW5pZmllZCBlcnJvciBucjogXCIrbisoci5sZW5ndGg/XCIgXCIrci5tYXAoKGZ1bmN0aW9uKG4pe3JldHVyblwiJ1wiK24rXCInXCJ9KSkuam9pbihcIixcIik6XCJcIikrXCIuIEZpbmQgdGhlIGZ1bGwgZXJyb3IgYXQ6IGh0dHBzOi8vYml0Lmx5LzNjWEVLV2ZcIil9ZnVuY3Rpb24gdChuKXtyZXR1cm4hIW4mJiEhbltRXX1mdW5jdGlvbiByKG4pe3JldHVybiEhbiYmKGZ1bmN0aW9uKG4pe2lmKCFufHxcIm9iamVjdFwiIT10eXBlb2YgbilyZXR1cm4hMTt2YXIgdD1PYmplY3QuZ2V0UHJvdG90eXBlT2Yobik7aWYobnVsbD09PXQpcmV0dXJuITA7dmFyIHI9T2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodCxcImNvbnN0cnVjdG9yXCIpJiZ0LmNvbnN0cnVjdG9yO3JldHVybiByPT09T2JqZWN0fHxcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiZGdW5jdGlvbi50b1N0cmluZy5jYWxsKHIpPT09Wn0obil8fEFycmF5LmlzQXJyYXkobil8fCEhbltMXXx8ISFuLmNvbnN0cnVjdG9yW0xdfHxzKG4pfHx2KG4pKX1mdW5jdGlvbiBlKHIpe3JldHVybiB0KHIpfHxuKDIzLHIpLHJbUV0udH1mdW5jdGlvbiBpKG4sdCxyKXt2b2lkIDA9PT1yJiYocj0hMSksMD09PW8obik/KHI/T2JqZWN0LmtleXM6bm4pKG4pLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ImJlwic3ltYm9sXCI9PXR5cGVvZiBlfHx0KGUsbltlXSxuKX0pKTpuLmZvckVhY2goKGZ1bmN0aW9uKHIsZSl7cmV0dXJuIHQoZSxyLG4pfSkpfWZ1bmN0aW9uIG8obil7dmFyIHQ9bltRXTtyZXR1cm4gdD90Lmk+Mz90LmktNDp0Lmk6QXJyYXkuaXNBcnJheShuKT8xOnMobik/Mjp2KG4pPzM6MH1mdW5jdGlvbiB1KG4sdCl7cmV0dXJuIDI9PT1vKG4pP24uaGFzKHQpOk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLHQpfWZ1bmN0aW9uIGEobix0KXtyZXR1cm4gMj09PW8obik/bi5nZXQodCk6blt0XX1mdW5jdGlvbiBmKG4sdCxyKXt2YXIgZT1vKG4pOzI9PT1lP24uc2V0KHQscik6Mz09PWU/KG4uZGVsZXRlKHQpLG4uYWRkKHIpKTpuW3RdPXJ9ZnVuY3Rpb24gYyhuLHQpe3JldHVybiBuPT09dD8wIT09bnx8MS9uPT0xL3Q6biE9biYmdCE9dH1mdW5jdGlvbiBzKG4pe3JldHVybiBYJiZuIGluc3RhbmNlb2YgTWFwfWZ1bmN0aW9uIHYobil7cmV0dXJuIHEmJm4gaW5zdGFuY2VvZiBTZXR9ZnVuY3Rpb24gcChuKXtyZXR1cm4gbi5vfHxuLnR9ZnVuY3Rpb24gbChuKXtpZihBcnJheS5pc0FycmF5KG4pKXJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChuKTt2YXIgdD10bihuKTtkZWxldGUgdFtRXTtmb3IodmFyIHI9bm4odCksZT0wO2U8ci5sZW5ndGg7ZSsrKXt2YXIgaT1yW2VdLG89dFtpXTshMT09PW8ud3JpdGFibGUmJihvLndyaXRhYmxlPSEwLG8uY29uZmlndXJhYmxlPSEwKSwoby5nZXR8fG8uc2V0KSYmKHRbaV09e2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCxlbnVtZXJhYmxlOm8uZW51bWVyYWJsZSx2YWx1ZTpuW2ldfSl9cmV0dXJuIE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKG4pLHQpfWZ1bmN0aW9uIGQobixlKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9ITEpLHkobil8fHQobil8fCFyKG4pP246KG8obik+MSYmKG4uc2V0PW4uYWRkPW4uY2xlYXI9bi5kZWxldGU9aCksT2JqZWN0LmZyZWV6ZShuKSxlJiZpKG4sKGZ1bmN0aW9uKG4sdCl7cmV0dXJuIGQodCwhMCl9KSwhMCksbil9ZnVuY3Rpb24gaCgpe24oMil9ZnVuY3Rpb24geShuKXtyZXR1cm4gbnVsbD09bnx8XCJvYmplY3RcIiE9dHlwZW9mIG58fE9iamVjdC5pc0Zyb3plbihuKX1mdW5jdGlvbiBiKHQpe3ZhciByPXJuW3RdO3JldHVybiByfHxuKDE4LHQpLHJ9ZnVuY3Rpb24gbShuLHQpe3JuW25dfHwocm5bbl09dCl9ZnVuY3Rpb24gXygpe3JldHVyblwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlZ8fFV8fG4oMCksVX1mdW5jdGlvbiBqKG4sdCl7dCYmKGIoXCJQYXRjaGVzXCIpLG4udT1bXSxuLnM9W10sbi52PXQpfWZ1bmN0aW9uIE8obil7ZyhuKSxuLnAuZm9yRWFjaChTKSxuLnA9bnVsbH1mdW5jdGlvbiBnKG4pe249PT1VJiYoVT1uLmwpfWZ1bmN0aW9uIHcobil7cmV0dXJuIFU9e3A6W10sbDpVLGg6bixtOiEwLF86MH19ZnVuY3Rpb24gUyhuKXt2YXIgdD1uW1FdOzA9PT10Lml8fDE9PT10Lmk/dC5qKCk6dC5PPSEwfWZ1bmN0aW9uIFAodCxlKXtlLl89ZS5wLmxlbmd0aDt2YXIgaT1lLnBbMF0sbz12b2lkIDAhPT10JiZ0IT09aTtyZXR1cm4gZS5oLmd8fGIoXCJFUzVcIikuUyhlLHQsbyksbz8oaVtRXS5QJiYoTyhlKSxuKDQpKSxyKHQpJiYodD1NKGUsdCksZS5sfHx4KGUsdCkpLGUudSYmYihcIlBhdGNoZXNcIikuTShpW1FdLHQsZS51LGUucykpOnQ9TShlLGksW10pLE8oZSksZS51JiZlLnYoZS51LGUucyksdCE9PUg/dDp2b2lkIDB9ZnVuY3Rpb24gTShuLHQscil7aWYoeSh0KSlyZXR1cm4gdDt2YXIgZT10W1FdO2lmKCFlKXJldHVybiBpKHQsKGZ1bmN0aW9uKGksbyl7cmV0dXJuIEEobixlLHQsaSxvLHIpfSksITApLHQ7aWYoZS5BIT09bilyZXR1cm4gdDtpZighZS5QKXJldHVybiB4KG4sZS50LCEwKSxlLnQ7aWYoIWUuSSl7ZS5JPSEwLGUuQS5fLS07dmFyIG89ND09PWUuaXx8NT09PWUuaT9lLm89bChlLmspOmUubztpKDM9PT1lLmk/bmV3IFNldChvKTpvLChmdW5jdGlvbih0LGkpe3JldHVybiBBKG4sZSxvLHQsaSxyKX0pKSx4KG4sbywhMSksciYmbi51JiZiKFwiUGF0Y2hlc1wiKS5SKGUscixuLnUsbi5zKX1yZXR1cm4gZS5vfWZ1bmN0aW9uIEEoZSxpLG8sYSxjLHMpe2lmKFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmM9PT1vJiZuKDUpLHQoYykpe3ZhciB2PU0oZSxjLHMmJmkmJjMhPT1pLmkmJiF1KGkuRCxhKT9zLmNvbmNhdChhKTp2b2lkIDApO2lmKGYobyxhLHYpLCF0KHYpKXJldHVybjtlLm09ITF9aWYocihjKSYmIXkoYykpe2lmKCFlLmguRiYmZS5fPDEpcmV0dXJuO00oZSxjKSxpJiZpLkEubHx8eChlLGMpfX1mdW5jdGlvbiB4KG4sdCxyKXt2b2lkIDA9PT1yJiYocj0hMSksbi5oLkYmJm4ubSYmZCh0LHIpfWZ1bmN0aW9uIHoobix0KXt2YXIgcj1uW1FdO3JldHVybihyP3Aocik6bilbdF19ZnVuY3Rpb24gSShuLHQpe2lmKHQgaW4gbilmb3IodmFyIHI9T2JqZWN0LmdldFByb3RvdHlwZU9mKG4pO3I7KXt2YXIgZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsdCk7aWYoZSlyZXR1cm4gZTtyPU9iamVjdC5nZXRQcm90b3R5cGVPZihyKX19ZnVuY3Rpb24gayhuKXtuLlB8fChuLlA9ITAsbi5sJiZrKG4ubCkpfWZ1bmN0aW9uIEUobil7bi5vfHwobi5vPWwobi50KSl9ZnVuY3Rpb24gUihuLHQscil7dmFyIGU9cyh0KT9iKFwiTWFwU2V0XCIpLk4odCxyKTp2KHQpP2IoXCJNYXBTZXRcIikuVCh0LHIpOm4uZz9mdW5jdGlvbihuLHQpe3ZhciByPUFycmF5LmlzQXJyYXkobiksZT17aTpyPzE6MCxBOnQ/dC5BOl8oKSxQOiExLEk6ITEsRDp7fSxsOnQsdDpuLGs6bnVsbCxvOm51bGwsajpudWxsLEM6ITF9LGk9ZSxvPWVuO3ImJihpPVtlXSxvPW9uKTt2YXIgdT1Qcm94eS5yZXZvY2FibGUoaSxvKSxhPXUucmV2b2tlLGY9dS5wcm94eTtyZXR1cm4gZS5rPWYsZS5qPWEsZn0odCxyKTpiKFwiRVM1XCIpLkoodCxyKTtyZXR1cm4ocj9yLkE6XygpKS5wLnB1c2goZSksZX1mdW5jdGlvbiBEKGUpe3JldHVybiB0KGUpfHxuKDIyLGUpLGZ1bmN0aW9uIG4odCl7aWYoIXIodCkpcmV0dXJuIHQ7dmFyIGUsdT10W1FdLGM9byh0KTtpZih1KXtpZighdS5QJiYodS5pPDR8fCFiKFwiRVM1XCIpLksodSkpKXJldHVybiB1LnQ7dS5JPSEwLGU9Rih0LGMpLHUuST0hMX1lbHNlIGU9Rih0LGMpO3JldHVybiBpKGUsKGZ1bmN0aW9uKHQscil7dSYmYSh1LnQsdCk9PT1yfHxmKGUsdCxuKHIpKX0pKSwzPT09Yz9uZXcgU2V0KGUpOmV9KGUpfWZ1bmN0aW9uIEYobix0KXtzd2l0Y2godCl7Y2FzZSAyOnJldHVybiBuZXcgTWFwKG4pO2Nhc2UgMzpyZXR1cm4gQXJyYXkuZnJvbShuKX1yZXR1cm4gbChuKX1mdW5jdGlvbiBOKCl7ZnVuY3Rpb24gcihuLHQpe3ZhciByPXNbbl07cmV0dXJuIHI/ci5lbnVtZXJhYmxlPXQ6c1tuXT1yPXtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTp0LGdldDpmdW5jdGlvbigpe3ZhciB0PXRoaXNbUV07cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmZih0KSxlbi5nZXQodCxuKX0sc2V0OmZ1bmN0aW9uKHQpe3ZhciByPXRoaXNbUV07XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmZihyKSxlbi5zZXQocixuLHQpfX0scn1mdW5jdGlvbiBlKG4pe2Zvcih2YXIgdD1uLmxlbmd0aC0xO3Q+PTA7dC0tKXt2YXIgcj1uW3RdW1FdO2lmKCFyLlApc3dpdGNoKHIuaSl7Y2FzZSA1OmEocikmJmsocik7YnJlYWs7Y2FzZSA0Om8ocikmJmsocil9fX1mdW5jdGlvbiBvKG4pe2Zvcih2YXIgdD1uLnQscj1uLmssZT1ubihyKSxpPWUubGVuZ3RoLTE7aT49MDtpLS0pe3ZhciBvPWVbaV07aWYobyE9PVEpe3ZhciBhPXRbb107aWYodm9pZCAwPT09YSYmIXUodCxvKSlyZXR1cm4hMDt2YXIgZj1yW29dLHM9ZiYmZltRXTtpZihzP3MudCE9PWE6IWMoZixhKSlyZXR1cm4hMH19dmFyIHY9ISF0W1FdO3JldHVybiBlLmxlbmd0aCE9PW5uKHQpLmxlbmd0aCsodj8wOjEpfWZ1bmN0aW9uIGEobil7dmFyIHQ9bi5rO2lmKHQubGVuZ3RoIT09bi50Lmxlbmd0aClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsdC5sZW5ndGgtMSk7cmV0dXJuISghcnx8ci5nZXQpfWZ1bmN0aW9uIGYodCl7dC5PJiZuKDMsSlNPTi5zdHJpbmdpZnkocCh0KSkpfXZhciBzPXt9O20oXCJFUzVcIix7SjpmdW5jdGlvbihuLHQpe3ZhciBlPUFycmF5LmlzQXJyYXkobiksaT1mdW5jdGlvbihuLHQpe2lmKG4pe2Zvcih2YXIgZT1BcnJheSh0Lmxlbmd0aCksaT0wO2k8dC5sZW5ndGg7aSsrKU9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiXCIraSxyKGksITApKTtyZXR1cm4gZX12YXIgbz10bih0KTtkZWxldGUgb1tRXTtmb3IodmFyIHU9bm4obyksYT0wO2E8dS5sZW5ndGg7YSsrKXt2YXIgZj11W2FdO29bZl09cihmLG58fCEhb1tmXS5lbnVtZXJhYmxlKX1yZXR1cm4gT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodCksbyl9KGUsbiksbz17aTplPzU6NCxBOnQ/dC5BOl8oKSxQOiExLEk6ITEsRDp7fSxsOnQsdDpuLGs6aSxvOm51bGwsTzohMSxDOiExfTtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGksUSx7dmFsdWU6byx3cml0YWJsZTohMH0pLGl9LFM6ZnVuY3Rpb24obixyLG8pe28/dChyKSYmcltRXS5BPT09biYmZShuLnApOihuLnUmJmZ1bmN0aW9uIG4odCl7aWYodCYmXCJvYmplY3RcIj09dHlwZW9mIHQpe3ZhciByPXRbUV07aWYocil7dmFyIGU9ci50LG89ci5rLGY9ci5ELGM9ci5pO2lmKDQ9PT1jKWkobywoZnVuY3Rpb24odCl7dCE9PVEmJih2b2lkIDAhPT1lW3RdfHx1KGUsdCk/Zlt0XXx8bihvW3RdKTooZlt0XT0hMCxrKHIpKSl9KSksaShlLChmdW5jdGlvbihuKXt2b2lkIDAhPT1vW25dfHx1KG8sbil8fChmW25dPSExLGsocikpfSkpO2Vsc2UgaWYoNT09PWMpe2lmKGEocikmJihrKHIpLGYubGVuZ3RoPSEwKSxvLmxlbmd0aDxlLmxlbmd0aClmb3IodmFyIHM9by5sZW5ndGg7czxlLmxlbmd0aDtzKyspZltzXT0hMTtlbHNlIGZvcih2YXIgdj1lLmxlbmd0aDt2PG8ubGVuZ3RoO3YrKylmW3ZdPSEwO2Zvcih2YXIgcD1NYXRoLm1pbihvLmxlbmd0aCxlLmxlbmd0aCksbD0wO2w8cDtsKyspdm9pZCAwPT09ZltsXSYmbihvW2xdKX19fX0obi5wWzBdKSxlKG4ucCkpfSxLOmZ1bmN0aW9uKG4pe3JldHVybiA0PT09bi5pP28obik6YShuKX19KX1mdW5jdGlvbiBUKCl7ZnVuY3Rpb24gZShuKXtpZighcihuKSlyZXR1cm4gbjtpZihBcnJheS5pc0FycmF5KG4pKXJldHVybiBuLm1hcChlKTtpZihzKG4pKXJldHVybiBuZXcgTWFwKEFycmF5LmZyb20obi5lbnRyaWVzKCkpLm1hcCgoZnVuY3Rpb24obil7cmV0dXJuW25bMF0sZShuWzFdKV19KSkpO2lmKHYobikpcmV0dXJuIG5ldyBTZXQoQXJyYXkuZnJvbShuKS5tYXAoZSkpO3ZhciB0PU9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKG4pKTtmb3IodmFyIGkgaW4gbil0W2ldPWUobltpXSk7cmV0dXJuIHUobixMKSYmKHRbTF09bltMXSksdH1mdW5jdGlvbiBmKG4pe3JldHVybiB0KG4pP2Uobik6bn12YXIgYz1cImFkZFwiO20oXCJQYXRjaGVzXCIseyQ6ZnVuY3Rpb24odCxyKXtyZXR1cm4gci5mb3JFYWNoKChmdW5jdGlvbihyKXtmb3IodmFyIGk9ci5wYXRoLHU9ci5vcCxmPXQscz0wO3M8aS5sZW5ndGgtMTtzKyspe3ZhciB2PW8oZikscD1cIlwiK2lbc107MCE9PXYmJjEhPT12fHxcIl9fcHJvdG9fX1wiIT09cCYmXCJjb25zdHJ1Y3RvclwiIT09cHx8bigyNCksXCJmdW5jdGlvblwiPT10eXBlb2YgZiYmXCJwcm90b3R5cGVcIj09PXAmJm4oMjQpLFwib2JqZWN0XCIhPXR5cGVvZihmPWEoZixwKSkmJm4oMTUsaS5qb2luKFwiL1wiKSl9dmFyIGw9byhmKSxkPWUoci52YWx1ZSksaD1pW2kubGVuZ3RoLTFdO3N3aXRjaCh1KXtjYXNlXCJyZXBsYWNlXCI6c3dpdGNoKGwpe2Nhc2UgMjpyZXR1cm4gZi5zZXQoaCxkKTtjYXNlIDM6bigxNik7ZGVmYXVsdDpyZXR1cm4gZltoXT1kfWNhc2UgYzpzd2l0Y2gobCl7Y2FzZSAxOnJldHVybiBmLnNwbGljZShoLDAsZCk7Y2FzZSAyOnJldHVybiBmLnNldChoLGQpO2Nhc2UgMzpyZXR1cm4gZi5hZGQoZCk7ZGVmYXVsdDpyZXR1cm4gZltoXT1kfWNhc2VcInJlbW92ZVwiOnN3aXRjaChsKXtjYXNlIDE6cmV0dXJuIGYuc3BsaWNlKGgsMSk7Y2FzZSAyOnJldHVybiBmLmRlbGV0ZShoKTtjYXNlIDM6cmV0dXJuIGYuZGVsZXRlKHIudmFsdWUpO2RlZmF1bHQ6cmV0dXJuIGRlbGV0ZSBmW2hdfWRlZmF1bHQ6bigxNyx1KX19KSksdH0sUjpmdW5jdGlvbihuLHQscixlKXtzd2l0Y2gobi5pKXtjYXNlIDA6Y2FzZSA0OmNhc2UgMjpyZXR1cm4gZnVuY3Rpb24obix0LHIsZSl7dmFyIG89bi50LHM9bi5vO2kobi5ELChmdW5jdGlvbihuLGkpe3ZhciB2PWEobyxuKSxwPWEocyxuKSxsPWk/dShvLG4pP1wicmVwbGFjZVwiOmM6XCJyZW1vdmVcIjtpZih2IT09cHx8XCJyZXBsYWNlXCIhPT1sKXt2YXIgZD10LmNvbmNhdChuKTtyLnB1c2goXCJyZW1vdmVcIj09PWw/e29wOmwscGF0aDpkfTp7b3A6bCxwYXRoOmQsdmFsdWU6cH0pLGUucHVzaChsPT09Yz97b3A6XCJyZW1vdmVcIixwYXRoOmR9OlwicmVtb3ZlXCI9PT1sP3tvcDpjLHBhdGg6ZCx2YWx1ZTpmKHYpfTp7b3A6XCJyZXBsYWNlXCIscGF0aDpkLHZhbHVlOmYodil9KX19KSl9KG4sdCxyLGUpO2Nhc2UgNTpjYXNlIDE6cmV0dXJuIGZ1bmN0aW9uKG4sdCxyLGUpe3ZhciBpPW4udCxvPW4uRCx1PW4ubztpZih1Lmxlbmd0aDxpLmxlbmd0aCl7dmFyIGE9W3UsaV07aT1hWzBdLHU9YVsxXTt2YXIgcz1bZSxyXTtyPXNbMF0sZT1zWzFdfWZvcih2YXIgdj0wO3Y8aS5sZW5ndGg7disrKWlmKG9bdl0mJnVbdl0hPT1pW3ZdKXt2YXIgcD10LmNvbmNhdChbdl0pO3IucHVzaCh7b3A6XCJyZXBsYWNlXCIscGF0aDpwLHZhbHVlOmYodVt2XSl9KSxlLnB1c2goe29wOlwicmVwbGFjZVwiLHBhdGg6cCx2YWx1ZTpmKGlbdl0pfSl9Zm9yKHZhciBsPWkubGVuZ3RoO2w8dS5sZW5ndGg7bCsrKXt2YXIgZD10LmNvbmNhdChbbF0pO3IucHVzaCh7b3A6YyxwYXRoOmQsdmFsdWU6Zih1W2xdKX0pfWkubGVuZ3RoPHUubGVuZ3RoJiZlLnB1c2goe29wOlwicmVwbGFjZVwiLHBhdGg6dC5jb25jYXQoW1wibGVuZ3RoXCJdKSx2YWx1ZTppLmxlbmd0aH0pfShuLHQscixlKTtjYXNlIDM6cmV0dXJuIGZ1bmN0aW9uKG4sdCxyLGUpe3ZhciBpPW4udCxvPW4ubyx1PTA7aS5mb3JFYWNoKChmdW5jdGlvbihuKXtpZighby5oYXMobikpe3ZhciBpPXQuY29uY2F0KFt1XSk7ci5wdXNoKHtvcDpcInJlbW92ZVwiLHBhdGg6aSx2YWx1ZTpufSksZS51bnNoaWZ0KHtvcDpjLHBhdGg6aSx2YWx1ZTpufSl9dSsrfSkpLHU9MCxvLmZvckVhY2goKGZ1bmN0aW9uKG4pe2lmKCFpLmhhcyhuKSl7dmFyIG89dC5jb25jYXQoW3VdKTtyLnB1c2goe29wOmMscGF0aDpvLHZhbHVlOm59KSxlLnVuc2hpZnQoe29wOlwicmVtb3ZlXCIscGF0aDpvLHZhbHVlOm59KX11Kyt9KSl9KG4sdCxyLGUpfX0sTTpmdW5jdGlvbihuLHQscixlKXtyLnB1c2goe29wOlwicmVwbGFjZVwiLHBhdGg6W10sdmFsdWU6dD09PUg/dm9pZCAwOnR9KSxlLnB1c2goe29wOlwicmVwbGFjZVwiLHBhdGg6W10sdmFsdWU6bi50fSl9fSl9ZnVuY3Rpb24gQygpe2Z1bmN0aW9uIHQobix0KXtmdW5jdGlvbiByKCl7dGhpcy5jb25zdHJ1Y3Rvcj1ufWEobix0KSxuLnByb3RvdHlwZT0oci5wcm90b3R5cGU9dC5wcm90b3R5cGUsbmV3IHIpfWZ1bmN0aW9uIGUobil7bi5vfHwobi5EPW5ldyBNYXAsbi5vPW5ldyBNYXAobi50KSl9ZnVuY3Rpb24gbyhuKXtuLm98fChuLm89bmV3IFNldCxuLnQuZm9yRWFjaCgoZnVuY3Rpb24odCl7aWYocih0KSl7dmFyIGU9UihuLkEuaCx0LG4pO24ucC5zZXQodCxlKSxuLm8uYWRkKGUpfWVsc2Ugbi5vLmFkZCh0KX0pKSl9ZnVuY3Rpb24gdSh0KXt0Lk8mJm4oMyxKU09OLnN0cmluZ2lmeShwKHQpKSl9dmFyIGE9ZnVuY3Rpb24obix0KXtyZXR1cm4oYT1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24obix0KXtuLl9fcHJvdG9fXz10fXx8ZnVuY3Rpb24obix0KXtmb3IodmFyIHIgaW4gdCl0Lmhhc093blByb3BlcnR5KHIpJiYobltyXT10W3JdKX0pKG4sdCl9LGY9ZnVuY3Rpb24oKXtmdW5jdGlvbiBuKG4sdCl7cmV0dXJuIHRoaXNbUV09e2k6MixsOnQsQTp0P3QuQTpfKCksUDohMSxJOiExLG86dm9pZCAwLEQ6dm9pZCAwLHQ6bixrOnRoaXMsQzohMSxPOiExfSx0aGlzfXQobixNYXApO3ZhciBvPW4ucHJvdG90eXBlO3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkobyxcInNpemVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHAodGhpc1tRXSkuc2l6ZX19KSxvLmhhcz1mdW5jdGlvbihuKXtyZXR1cm4gcCh0aGlzW1FdKS5oYXMobil9LG8uc2V0PWZ1bmN0aW9uKG4sdCl7dmFyIHI9dGhpc1tRXTtyZXR1cm4gdShyKSxwKHIpLmhhcyhuKSYmcChyKS5nZXQobik9PT10fHwoZShyKSxrKHIpLHIuRC5zZXQobiwhMCksci5vLnNldChuLHQpLHIuRC5zZXQobiwhMCkpLHRoaXN9LG8uZGVsZXRlPWZ1bmN0aW9uKG4pe2lmKCF0aGlzLmhhcyhuKSlyZXR1cm4hMTt2YXIgdD10aGlzW1FdO3JldHVybiB1KHQpLGUodCksayh0KSx0LkQuc2V0KG4sITEpLHQuby5kZWxldGUobiksITB9LG8uY2xlYXI9ZnVuY3Rpb24oKXt2YXIgbj10aGlzW1FdO3UobikscChuKS5zaXplJiYoZShuKSxrKG4pLG4uRD1uZXcgTWFwLGkobi50LChmdW5jdGlvbih0KXtuLkQuc2V0KHQsITEpfSkpLG4uby5jbGVhcigpKX0sby5mb3JFYWNoPWZ1bmN0aW9uKG4sdCl7dmFyIHI9dGhpcztwKHRoaXNbUV0pLmZvckVhY2goKGZ1bmN0aW9uKGUsaSl7bi5jYWxsKHQsci5nZXQoaSksaSxyKX0pKX0sby5nZXQ9ZnVuY3Rpb24obil7dmFyIHQ9dGhpc1tRXTt1KHQpO3ZhciBpPXAodCkuZ2V0KG4pO2lmKHQuSXx8IXIoaSkpcmV0dXJuIGk7aWYoaSE9PXQudC5nZXQobikpcmV0dXJuIGk7dmFyIG89Uih0LkEuaCxpLHQpO3JldHVybiBlKHQpLHQuby5zZXQobixvKSxvfSxvLmtleXM9ZnVuY3Rpb24oKXtyZXR1cm4gcCh0aGlzW1FdKS5rZXlzKCl9LG8udmFsdWVzPWZ1bmN0aW9uKCl7dmFyIG4sdD10aGlzLHI9dGhpcy5rZXlzKCk7cmV0dXJuKG49e30pW1ZdPWZ1bmN0aW9uKCl7cmV0dXJuIHQudmFsdWVzKCl9LG4ubmV4dD1mdW5jdGlvbigpe3ZhciBuPXIubmV4dCgpO3JldHVybiBuLmRvbmU/bjp7ZG9uZTohMSx2YWx1ZTp0LmdldChuLnZhbHVlKX19LG59LG8uZW50cmllcz1mdW5jdGlvbigpe3ZhciBuLHQ9dGhpcyxyPXRoaXMua2V5cygpO3JldHVybihuPXt9KVtWXT1mdW5jdGlvbigpe3JldHVybiB0LmVudHJpZXMoKX0sbi5uZXh0PWZ1bmN0aW9uKCl7dmFyIG49ci5uZXh0KCk7aWYobi5kb25lKXJldHVybiBuO3ZhciBlPXQuZ2V0KG4udmFsdWUpO3JldHVybntkb25lOiExLHZhbHVlOltuLnZhbHVlLGVdfX0sbn0sb1tWXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVudHJpZXMoKX0sbn0oKSxjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gbihuLHQpe3JldHVybiB0aGlzW1FdPXtpOjMsbDp0LEE6dD90LkE6XygpLFA6ITEsSTohMSxvOnZvaWQgMCx0Om4sazp0aGlzLHA6bmV3IE1hcCxPOiExLEM6ITF9LHRoaXN9dChuLFNldCk7dmFyIHI9bi5wcm90b3R5cGU7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwic2l6ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcCh0aGlzW1FdKS5zaXplfX0pLHIuaGFzPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXNbUV07cmV0dXJuIHUodCksdC5vPyEhdC5vLmhhcyhuKXx8ISghdC5wLmhhcyhuKXx8IXQuby5oYXModC5wLmdldChuKSkpOnQudC5oYXMobil9LHIuYWRkPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXNbUV07cmV0dXJuIHUodCksdGhpcy5oYXMobil8fChvKHQpLGsodCksdC5vLmFkZChuKSksdGhpc30sci5kZWxldGU9ZnVuY3Rpb24obil7aWYoIXRoaXMuaGFzKG4pKXJldHVybiExO3ZhciB0PXRoaXNbUV07cmV0dXJuIHUodCksbyh0KSxrKHQpLHQuby5kZWxldGUobil8fCEhdC5wLmhhcyhuKSYmdC5vLmRlbGV0ZSh0LnAuZ2V0KG4pKX0sci5jbGVhcj1mdW5jdGlvbigpe3ZhciBuPXRoaXNbUV07dShuKSxwKG4pLnNpemUmJihvKG4pLGsobiksbi5vLmNsZWFyKCkpfSxyLnZhbHVlcz1mdW5jdGlvbigpe3ZhciBuPXRoaXNbUV07cmV0dXJuIHUobiksbyhuKSxuLm8udmFsdWVzKCl9LHIuZW50cmllcz1mdW5jdGlvbigpe3ZhciBuPXRoaXNbUV07cmV0dXJuIHUobiksbyhuKSxuLm8uZW50cmllcygpfSxyLmtleXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZXMoKX0scltWXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlcygpfSxyLmZvckVhY2g9ZnVuY3Rpb24obix0KXtmb3IodmFyIHI9dGhpcy52YWx1ZXMoKSxlPXIubmV4dCgpOyFlLmRvbmU7KW4uY2FsbCh0LGUudmFsdWUsZS52YWx1ZSx0aGlzKSxlPXIubmV4dCgpfSxufSgpO20oXCJNYXBTZXRcIix7TjpmdW5jdGlvbihuLHQpe3JldHVybiBuZXcgZihuLHQpfSxUOmZ1bmN0aW9uKG4sdCl7cmV0dXJuIG5ldyBjKG4sdCl9fSl9ZnVuY3Rpb24gSigpe04oKSxDKCksVCgpfWZ1bmN0aW9uIEsobil7cmV0dXJuIG59ZnVuY3Rpb24gJChuKXtyZXR1cm4gbn12YXIgRyxVLFc9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbChcInhcIiksWD1cInVuZGVmaW5lZFwiIT10eXBlb2YgTWFwLHE9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFNldCxCPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBQcm94eSYmdm9pZCAwIT09UHJveHkucmV2b2NhYmxlJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgUmVmbGVjdCxIPVc/U3ltYm9sLmZvcihcImltbWVyLW5vdGhpbmdcIik6KChHPXt9KVtcImltbWVyLW5vdGhpbmdcIl09ITAsRyksTD1XP1N5bWJvbC5mb3IoXCJpbW1lci1kcmFmdGFibGVcIik6XCJfXyRpbW1lcl9kcmFmdGFibGVcIixRPVc/U3ltYm9sLmZvcihcImltbWVyLXN0YXRlXCIpOlwiX18kaW1tZXJfc3RhdGVcIixWPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvcnx8XCJAQGl0ZXJhdG9yXCIsWT17MDpcIklsbGVnYWwgc3RhdGVcIiwxOlwiSW1tZXIgZHJhZnRzIGNhbm5vdCBoYXZlIGNvbXB1dGVkIHByb3BlcnRpZXNcIiwyOlwiVGhpcyBvYmplY3QgaGFzIGJlZW4gZnJvemVuIGFuZCBzaG91bGQgbm90IGJlIG11dGF0ZWRcIiwzOmZ1bmN0aW9uKG4pe3JldHVyblwiQ2Fubm90IHVzZSBhIHByb3h5IHRoYXQgaGFzIGJlZW4gcmV2b2tlZC4gRGlkIHlvdSBwYXNzIGFuIG9iamVjdCBmcm9tIGluc2lkZSBhbiBpbW1lciBmdW5jdGlvbiB0byBhbiBhc3luYyBwcm9jZXNzPyBcIitufSw0OlwiQW4gaW1tZXIgcHJvZHVjZXIgcmV0dXJuZWQgYSBuZXcgdmFsdWUgKmFuZCogbW9kaWZpZWQgaXRzIGRyYWZ0LiBFaXRoZXIgcmV0dXJuIGEgbmV3IHZhbHVlICpvciogbW9kaWZ5IHRoZSBkcmFmdC5cIiw1OlwiSW1tZXIgZm9yYmlkcyBjaXJjdWxhciByZWZlcmVuY2VzXCIsNjpcIlRoZSBmaXJzdCBvciBzZWNvbmQgYXJndW1lbnQgdG8gYHByb2R1Y2VgIG11c3QgYmUgYSBmdW5jdGlvblwiLDc6XCJUaGUgdGhpcmQgYXJndW1lbnQgdG8gYHByb2R1Y2VgIG11c3QgYmUgYSBmdW5jdGlvbiBvciB1bmRlZmluZWRcIiw4OlwiRmlyc3QgYXJndW1lbnQgdG8gYGNyZWF0ZURyYWZ0YCBtdXN0IGJlIGEgcGxhaW4gb2JqZWN0LCBhbiBhcnJheSwgb3IgYW4gaW1tZXJhYmxlIG9iamVjdFwiLDk6XCJGaXJzdCBhcmd1bWVudCB0byBgZmluaXNoRHJhZnRgIG11c3QgYmUgYSBkcmFmdCByZXR1cm5lZCBieSBgY3JlYXRlRHJhZnRgXCIsMTA6XCJUaGUgZ2l2ZW4gZHJhZnQgaXMgYWxyZWFkeSBmaW5hbGl6ZWRcIiwxMTpcIk9iamVjdC5kZWZpbmVQcm9wZXJ0eSgpIGNhbm5vdCBiZSB1c2VkIG9uIGFuIEltbWVyIGRyYWZ0XCIsMTI6XCJPYmplY3Quc2V0UHJvdG90eXBlT2YoKSBjYW5ub3QgYmUgdXNlZCBvbiBhbiBJbW1lciBkcmFmdFwiLDEzOlwiSW1tZXIgb25seSBzdXBwb3J0cyBkZWxldGluZyBhcnJheSBpbmRpY2VzXCIsMTQ6XCJJbW1lciBvbmx5IHN1cHBvcnRzIHNldHRpbmcgYXJyYXkgaW5kaWNlcyBhbmQgdGhlICdsZW5ndGgnIHByb3BlcnR5XCIsMTU6ZnVuY3Rpb24obil7cmV0dXJuXCJDYW5ub3QgYXBwbHkgcGF0Y2gsIHBhdGggZG9lc24ndCByZXNvbHZlOiBcIitufSwxNjonU2V0cyBjYW5ub3QgaGF2ZSBcInJlcGxhY2VcIiBwYXRjaGVzLicsMTc6ZnVuY3Rpb24obil7cmV0dXJuXCJVbnN1cHBvcnRlZCBwYXRjaCBvcGVyYXRpb246IFwiK259LDE4OmZ1bmN0aW9uKG4pe3JldHVyblwiVGhlIHBsdWdpbiBmb3IgJ1wiK24rXCInIGhhcyBub3QgYmVlbiBsb2FkZWQgaW50byBJbW1lci4gVG8gZW5hYmxlIHRoZSBwbHVnaW4sIGltcG9ydCBhbmQgY2FsbCBgZW5hYmxlXCIrbitcIigpYCB3aGVuIGluaXRpYWxpemluZyB5b3VyIGFwcGxpY2F0aW9uLlwifSwyMDpcIkNhbm5vdCB1c2UgcHJveGllcyBpZiBQcm94eSwgUHJveHkucmV2b2NhYmxlIG9yIFJlZmxlY3QgYXJlIG5vdCBhdmFpbGFibGVcIiwyMTpmdW5jdGlvbihuKXtyZXR1cm5cInByb2R1Y2UgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIHRoaW5ncyB0aGF0IGFyZSBkcmFmdGFibGU6IHBsYWluIG9iamVjdHMsIGFycmF5cywgTWFwLCBTZXQgb3IgY2xhc3NlcyB0aGF0IGFyZSBtYXJrZWQgd2l0aCAnW2ltbWVyYWJsZV06IHRydWUnLiBHb3QgJ1wiK24rXCInXCJ9LDIyOmZ1bmN0aW9uKG4pe3JldHVyblwiJ2N1cnJlbnQnIGV4cGVjdHMgYSBkcmFmdCwgZ290OiBcIitufSwyMzpmdW5jdGlvbihuKXtyZXR1cm5cIidvcmlnaW5hbCcgZXhwZWN0cyBhIGRyYWZ0LCBnb3Q6IFwiK259LDI0OlwiUGF0Y2hpbmcgcmVzZXJ2ZWQgYXR0cmlidXRlcyBsaWtlIF9fcHJvdG9fXywgcHJvdG90eXBlIGFuZCBjb25zdHJ1Y3RvciBpcyBub3QgYWxsb3dlZFwifSxaPVwiXCIrT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvcixubj1cInVuZGVmaW5lZFwiIT10eXBlb2YgUmVmbGVjdCYmUmVmbGVjdC5vd25LZXlzP1JlZmxlY3Qub3duS2V5czp2b2lkIDAhPT1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzP2Z1bmN0aW9uKG4pe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhuKS5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhuKSl9Ok9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLHRuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzfHxmdW5jdGlvbihuKXt2YXIgdD17fTtyZXR1cm4gbm4obikuZm9yRWFjaCgoZnVuY3Rpb24ocil7dFtyXT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG4scil9KSksdH0scm49e30sZW49e2dldDpmdW5jdGlvbihuLHQpe2lmKHQ9PT1RKXJldHVybiBuO3ZhciBlPXAobik7aWYoIXUoZSx0KSlyZXR1cm4gZnVuY3Rpb24obix0LHIpe3ZhciBlLGk9SSh0LHIpO3JldHVybiBpP1widmFsdWVcImluIGk/aS52YWx1ZTpudWxsPT09KGU9aS5nZXQpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLmNhbGwobi5rKTp2b2lkIDB9KG4sZSx0KTt2YXIgaT1lW3RdO3JldHVybiBuLkl8fCFyKGkpP2k6aT09PXoobi50LHQpPyhFKG4pLG4ub1t0XT1SKG4uQS5oLGksbikpOml9LGhhczpmdW5jdGlvbihuLHQpe3JldHVybiB0IGluIHAobil9LG93bktleXM6ZnVuY3Rpb24obil7cmV0dXJuIFJlZmxlY3Qub3duS2V5cyhwKG4pKX0sc2V0OmZ1bmN0aW9uKG4sdCxyKXt2YXIgZT1JKHAobiksdCk7aWYobnVsbD09ZT92b2lkIDA6ZS5zZXQpcmV0dXJuIGUuc2V0LmNhbGwobi5rLHIpLCEwO2lmKCFuLlApe3ZhciBpPXoocChuKSx0KSxvPW51bGw9PWk/dm9pZCAwOmlbUV07aWYobyYmby50PT09cilyZXR1cm4gbi5vW3RdPXIsbi5EW3RdPSExLCEwO2lmKGMocixpKSYmKHZvaWQgMCE9PXJ8fHUobi50LHQpKSlyZXR1cm4hMDtFKG4pLGsobil9cmV0dXJuIG4ub1t0XT09PXImJlwibnVtYmVyXCIhPXR5cGVvZiByJiYodm9pZCAwIT09cnx8dCBpbiBuLm8pfHwobi5vW3RdPXIsbi5EW3RdPSEwLCEwKX0sZGVsZXRlUHJvcGVydHk6ZnVuY3Rpb24obix0KXtyZXR1cm4gdm9pZCAwIT09eihuLnQsdCl8fHQgaW4gbi50PyhuLkRbdF09ITEsRShuKSxrKG4pKTpkZWxldGUgbi5EW3RdLG4ubyYmZGVsZXRlIG4ub1t0XSwhMH0sZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOmZ1bmN0aW9uKG4sdCl7dmFyIHI9cChuKSxlPVJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsdCk7cmV0dXJuIGU/e3dyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZToxIT09bi5pfHxcImxlbmd0aFwiIT09dCxlbnVtZXJhYmxlOmUuZW51bWVyYWJsZSx2YWx1ZTpyW3RdfTplfSxkZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbigpe24oMTEpfSxnZXRQcm90b3R5cGVPZjpmdW5jdGlvbihuKXtyZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG4udCl9LHNldFByb3RvdHlwZU9mOmZ1bmN0aW9uKCl7bigxMil9fSxvbj17fTtpKGVuLChmdW5jdGlvbihuLHQpe29uW25dPWZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50c1swXT1hcmd1bWVudHNbMF1bMF0sdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fSkpLG9uLmRlbGV0ZVByb3BlcnR5PWZ1bmN0aW9uKHQscil7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmaXNOYU4ocGFyc2VJbnQocikpJiZuKDEzKSxlbi5kZWxldGVQcm9wZXJ0eS5jYWxsKHRoaXMsdFswXSxyKX0sb24uc2V0PWZ1bmN0aW9uKHQscixlKXtyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcImxlbmd0aFwiIT09ciYmaXNOYU4ocGFyc2VJbnQocikpJiZuKDE0KSxlbi5zZXQuY2FsbCh0aGlzLHRbMF0scixlLHRbMF0pfTt2YXIgdW49ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQpe3ZhciBlPXRoaXM7dGhpcy5nPUIsdGhpcy5GPSEwLHRoaXMucHJvZHVjZT1mdW5jdGlvbih0LGksbyl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgaSl7dmFyIHU9aTtpPXQ7dmFyIGE9ZTtyZXR1cm4gZnVuY3Rpb24obil7dmFyIHQ9dGhpczt2b2lkIDA9PT1uJiYobj11KTtmb3IodmFyIHI9YXJndW1lbnRzLmxlbmd0aCxlPUFycmF5KHI+MT9yLTE6MCksbz0xO288cjtvKyspZVtvLTFdPWFyZ3VtZW50c1tvXTtyZXR1cm4gYS5wcm9kdWNlKG4sKGZ1bmN0aW9uKG4pe3ZhciByO3JldHVybihyPWkpLmNhbGwuYXBwbHkocixbdCxuXS5jb25jYXQoZSkpfSkpfX12YXIgZjtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBpJiZuKDYpLHZvaWQgMCE9PW8mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIG8mJm4oNykscih0KSl7dmFyIGM9dyhlKSxzPVIoZSx0LHZvaWQgMCksdj0hMDt0cnl7Zj1pKHMpLHY9ITF9ZmluYWxseXt2P08oYyk6ZyhjKX1yZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgUHJvbWlzZSYmZiBpbnN0YW5jZW9mIFByb21pc2U/Zi50aGVuKChmdW5jdGlvbihuKXtyZXR1cm4gaihjLG8pLFAobixjKX0pLChmdW5jdGlvbihuKXt0aHJvdyBPKGMpLG59KSk6KGooYyxvKSxQKGYsYykpfWlmKCF0fHxcIm9iamVjdFwiIT10eXBlb2YgdCl7aWYoKGY9aSh0KSk9PT1IKXJldHVybjtyZXR1cm4gdm9pZCAwPT09ZiYmKGY9dCksZS5GJiZkKGYsITApLGZ9bigyMSx0KX0sdGhpcy5wcm9kdWNlV2l0aFBhdGNoZXM9ZnVuY3Rpb24obix0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuP2Z1bmN0aW9uKHQpe2Zvcih2YXIgcj1hcmd1bWVudHMubGVuZ3RoLGk9QXJyYXkocj4xP3ItMTowKSxvPTE7bzxyO28rKylpW28tMV09YXJndW1lbnRzW29dO3JldHVybiBlLnByb2R1Y2VXaXRoUGF0Y2hlcyh0LChmdW5jdGlvbih0KXtyZXR1cm4gbi5hcHBseSh2b2lkIDAsW3RdLmNvbmNhdChpKSl9KSl9OltlLnByb2R1Y2Uobix0LChmdW5jdGlvbihuLHQpe3I9bixpPXR9KSkscixpXTt2YXIgcixpfSxcImJvb2xlYW5cIj09dHlwZW9mKG51bGw9PXQ/dm9pZCAwOnQudXNlUHJveGllcykmJnRoaXMuc2V0VXNlUHJveGllcyh0LnVzZVByb3hpZXMpLFwiYm9vbGVhblwiPT10eXBlb2YobnVsbD09dD92b2lkIDA6dC5hdXRvRnJlZXplKSYmdGhpcy5zZXRBdXRvRnJlZXplKHQuYXV0b0ZyZWV6ZSl9dmFyIGk9ZS5wcm90b3R5cGU7cmV0dXJuIGkuY3JlYXRlRHJhZnQ9ZnVuY3Rpb24oZSl7cihlKXx8big4KSx0KGUpJiYoZT1EKGUpKTt2YXIgaT13KHRoaXMpLG89Uih0aGlzLGUsdm9pZCAwKTtyZXR1cm4gb1tRXS5DPSEwLGcoaSksb30saS5maW5pc2hEcmFmdD1mdW5jdGlvbih0LHIpe3ZhciBlPXQmJnRbUV07XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKGUmJmUuQ3x8big5KSxlLkkmJm4oMTApKTt2YXIgaT1lLkE7cmV0dXJuIGooaSxyKSxQKHZvaWQgMCxpKX0saS5zZXRBdXRvRnJlZXplPWZ1bmN0aW9uKG4pe3RoaXMuRj1ufSxpLnNldFVzZVByb3hpZXM9ZnVuY3Rpb24odCl7dCYmIUImJm4oMjApLHRoaXMuZz10fSxpLmFwcGx5UGF0Y2hlcz1mdW5jdGlvbihuLHIpe3ZhciBlO2ZvcihlPXIubGVuZ3RoLTE7ZT49MDtlLS0pe3ZhciBpPXJbZV07aWYoMD09PWkucGF0aC5sZW5ndGgmJlwicmVwbGFjZVwiPT09aS5vcCl7bj1pLnZhbHVlO2JyZWFrfX12YXIgbz1iKFwiUGF0Y2hlc1wiKS4kO3JldHVybiB0KG4pP28obixyKTp0aGlzLnByb2R1Y2UobiwoZnVuY3Rpb24obil7cmV0dXJuIG8obixyLnNsaWNlKGUrMSkpfSkpfSxlfSgpLGFuPW5ldyB1bixmbj1hbi5wcm9kdWNlLGNuPWFuLnByb2R1Y2VXaXRoUGF0Y2hlcy5iaW5kKGFuKSxzbj1hbi5zZXRBdXRvRnJlZXplLmJpbmQoYW4pLHZuPWFuLnNldFVzZVByb3hpZXMuYmluZChhbikscG49YW4uYXBwbHlQYXRjaGVzLmJpbmQoYW4pLGxuPWFuLmNyZWF0ZURyYWZ0LmJpbmQoYW4pLGRuPWFuLmZpbmlzaERyYWZ0LmJpbmQoYW4pO2V4cG9ydCBkZWZhdWx0IGZuO2V4cG9ydHt1biBhcyBJbW1lcixwbiBhcyBhcHBseVBhdGNoZXMsSyBhcyBjYXN0RHJhZnQsJCBhcyBjYXN0SW1tdXRhYmxlLGxuIGFzIGNyZWF0ZURyYWZ0LEQgYXMgY3VycmVudCxKIGFzIGVuYWJsZUFsbFBsdWdpbnMsTiBhcyBlbmFibGVFUzUsQyBhcyBlbmFibGVNYXBTZXQsVCBhcyBlbmFibGVQYXRjaGVzLGRuIGFzIGZpbmlzaERyYWZ0LGQgYXMgZnJlZXplLEwgYXMgaW1tZXJhYmxlLHQgYXMgaXNEcmFmdCxyIGFzIGlzRHJhZnRhYmxlLEggYXMgbm90aGluZyxlIGFzIG9yaWdpbmFsLGZuIGFzIHByb2R1Y2UsY24gYXMgcHJvZHVjZVdpdGhQYXRjaGVzLHNuIGFzIHNldEF1dG9GcmVlemUsdm4gYXMgc2V0VXNlUHJveGllc307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbW1lci5lc20uanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbi8qKlxuICogQ29uc3RhbnRzLlxuICovXG5cbnZhciBJU19NQUMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIC9NYWN8aVBvZHxpUGhvbmV8aVBhZC8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnBsYXRmb3JtKTtcblxudmFyIE1PRElGSUVSUyA9IHtcbiAgYWx0OiAnYWx0S2V5JyxcbiAgY29udHJvbDogJ2N0cmxLZXknLFxuICBtZXRhOiAnbWV0YUtleScsXG4gIHNoaWZ0OiAnc2hpZnRLZXknXG59O1xuXG52YXIgQUxJQVNFUyA9IHtcbiAgYWRkOiAnKycsXG4gIGJyZWFrOiAncGF1c2UnLFxuICBjbWQ6ICdtZXRhJyxcbiAgY29tbWFuZDogJ21ldGEnLFxuICBjdGw6ICdjb250cm9sJyxcbiAgY3RybDogJ2NvbnRyb2wnLFxuICBkZWw6ICdkZWxldGUnLFxuICBkb3duOiAnYXJyb3dkb3duJyxcbiAgZXNjOiAnZXNjYXBlJyxcbiAgaW5zOiAnaW5zZXJ0JyxcbiAgbGVmdDogJ2Fycm93bGVmdCcsXG4gIG1vZDogSVNfTUFDID8gJ21ldGEnIDogJ2NvbnRyb2wnLFxuICBvcHQ6ICdhbHQnLFxuICBvcHRpb246ICdhbHQnLFxuICByZXR1cm46ICdlbnRlcicsXG4gIHJpZ2h0OiAnYXJyb3dyaWdodCcsXG4gIHNwYWNlOiAnICcsXG4gIHNwYWNlYmFyOiAnICcsXG4gIHVwOiAnYXJyb3d1cCcsXG4gIHdpbjogJ21ldGEnLFxuICB3aW5kb3dzOiAnbWV0YSdcbn07XG5cbnZhciBDT0RFUyA9IHtcbiAgYmFja3NwYWNlOiA4LFxuICB0YWI6IDksXG4gIGVudGVyOiAxMyxcbiAgc2hpZnQ6IDE2LFxuICBjb250cm9sOiAxNyxcbiAgYWx0OiAxOCxcbiAgcGF1c2U6IDE5LFxuICBjYXBzbG9jazogMjAsXG4gIGVzY2FwZTogMjcsXG4gICcgJzogMzIsXG4gIHBhZ2V1cDogMzMsXG4gIHBhZ2Vkb3duOiAzNCxcbiAgZW5kOiAzNSxcbiAgaG9tZTogMzYsXG4gIGFycm93bGVmdDogMzcsXG4gIGFycm93dXA6IDM4LFxuICBhcnJvd3JpZ2h0OiAzOSxcbiAgYXJyb3dkb3duOiA0MCxcbiAgaW5zZXJ0OiA0NSxcbiAgZGVsZXRlOiA0NixcbiAgbWV0YTogOTEsXG4gIG51bWxvY2s6IDE0NCxcbiAgc2Nyb2xsbG9jazogMTQ1LFxuICAnOyc6IDE4NixcbiAgJz0nOiAxODcsXG4gICcsJzogMTg4LFxuICAnLSc6IDE4OSxcbiAgJy4nOiAxOTAsXG4gICcvJzogMTkxLFxuICAnYCc6IDE5MixcbiAgJ1snOiAyMTksXG4gICdcXFxcJzogMjIwLFxuICAnXSc6IDIyMSxcbiAgJ1xcJyc6IDIyMlxufTtcblxuZm9yICh2YXIgZiA9IDE7IGYgPCAyMDsgZisrKSB7XG4gIENPREVTWydmJyArIGZdID0gMTExICsgZjtcbn1cblxuLyoqXG4gKiBJcyBob3RrZXk/XG4gKi9cblxuZnVuY3Rpb24gaXNIb3RrZXkoaG90a2V5LCBvcHRpb25zLCBldmVudCkge1xuICBpZiAob3B0aW9ucyAmJiAhKCdieUtleScgaW4gb3B0aW9ucykpIHtcbiAgICBldmVudCA9IG9wdGlvbnM7XG4gICAgb3B0aW9ucyA9IG51bGw7XG4gIH1cblxuICBpZiAoIUFycmF5LmlzQXJyYXkoaG90a2V5KSkge1xuICAgIGhvdGtleSA9IFtob3RrZXldO1xuICB9XG5cbiAgdmFyIGFycmF5ID0gaG90a2V5Lm1hcChmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHBhcnNlSG90a2V5KHN0cmluZywgb3B0aW9ucyk7XG4gIH0pO1xuICB2YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjayhlKSB7XG4gICAgcmV0dXJuIGFycmF5LnNvbWUoZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgcmV0dXJuIGNvbXBhcmVIb3RrZXkob2JqZWN0LCBlKTtcbiAgICB9KTtcbiAgfTtcbiAgdmFyIHJldCA9IGV2ZW50ID09IG51bGwgPyBjaGVjayA6IGNoZWNrKGV2ZW50KTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gaXNDb2RlSG90a2V5KGhvdGtleSwgZXZlbnQpIHtcbiAgcmV0dXJuIGlzSG90a2V5KGhvdGtleSwgZXZlbnQpO1xufVxuXG5mdW5jdGlvbiBpc0tleUhvdGtleShob3RrZXksIGV2ZW50KSB7XG4gIHJldHVybiBpc0hvdGtleShob3RrZXksIHsgYnlLZXk6IHRydWUgfSwgZXZlbnQpO1xufVxuXG4vKipcbiAqIFBhcnNlLlxuICovXG5cbmZ1bmN0aW9uIHBhcnNlSG90a2V5KGhvdGtleSwgb3B0aW9ucykge1xuICB2YXIgYnlLZXkgPSBvcHRpb25zICYmIG9wdGlvbnMuYnlLZXk7XG4gIHZhciByZXQgPSB7fTtcblxuICAvLyBTcGVjaWFsIGNhc2UgdG8gaGFuZGxlIHRoZSBgK2Aga2V5IHNpbmNlIHdlIHVzZSBpdCBhcyBhIHNlcGFyYXRvci5cbiAgaG90a2V5ID0gaG90a2V5LnJlcGxhY2UoJysrJywgJythZGQnKTtcbiAgdmFyIHZhbHVlcyA9IGhvdGtleS5zcGxpdCgnKycpO1xuICB2YXIgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aDtcblxuICAvLyBFbnN1cmUgdGhhdCBhbGwgdGhlIG1vZGlmaWVycyBhcmUgc2V0IHRvIGZhbHNlIHVubGVzcyB0aGUgaG90a2V5IGhhcyB0aGVtLlxuXG4gIGZvciAodmFyIGsgaW4gTU9ESUZJRVJTKSB7XG4gICAgcmV0W01PRElGSUVSU1trXV0gPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHZhbHVlc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICB2YXIgb3B0aW9uYWwgPSB2YWx1ZS5lbmRzV2l0aCgnPycpICYmIHZhbHVlLmxlbmd0aCA+IDE7XG5cbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIC0xKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5hbWUgPSB0b0tleU5hbWUodmFsdWUpO1xuICAgICAgdmFyIG1vZGlmaWVyID0gTU9ESUZJRVJTW25hbWVdO1xuXG4gICAgICBpZiAobGVuZ3RoID09PSAxIHx8ICFtb2RpZmllcikge1xuICAgICAgICBpZiAoYnlLZXkpIHtcbiAgICAgICAgICByZXQua2V5ID0gbmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXQud2hpY2ggPSB0b0tleUNvZGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtb2RpZmllcikge1xuICAgICAgICByZXRbbW9kaWZpZXJdID0gb3B0aW9uYWwgPyBudWxsIDogdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxuLyoqXG4gKiBDb21wYXJlLlxuICovXG5cbmZ1bmN0aW9uIGNvbXBhcmVIb3RrZXkob2JqZWN0LCBldmVudCkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgdmFyIGV4cGVjdGVkID0gb2JqZWN0W2tleV07XG4gICAgdmFyIGFjdHVhbCA9IHZvaWQgMDtcblxuICAgIGlmIChleHBlY3RlZCA9PSBudWxsKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSAna2V5JyAmJiBldmVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgYWN0dWFsID0gZXZlbnQua2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICd3aGljaCcpIHtcbiAgICAgIGFjdHVhbCA9IGV4cGVjdGVkID09PSA5MSAmJiBldmVudC53aGljaCA9PT0gOTMgPyA5MSA6IGV2ZW50LndoaWNoO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY3R1YWwgPSBldmVudFtrZXldO1xuICAgIH1cblxuICAgIGlmIChhY3R1YWwgPT0gbnVsbCAmJiBleHBlY3RlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhY3R1YWwgIT09IGV4cGVjdGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogVXRpbHMuXG4gKi9cblxuZnVuY3Rpb24gdG9LZXlDb2RlKG5hbWUpIHtcbiAgbmFtZSA9IHRvS2V5TmFtZShuYW1lKTtcbiAgdmFyIGNvZGUgPSBDT0RFU1tuYW1lXSB8fCBuYW1lLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKTtcbiAgcmV0dXJuIGNvZGU7XG59XG5cbmZ1bmN0aW9uIHRvS2V5TmFtZShuYW1lKSB7XG4gIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gIG5hbWUgPSBBTElBU0VTW25hbWVdIHx8IG5hbWU7XG4gIHJldHVybiBuYW1lO1xufVxuXG4vKipcbiAqIEV4cG9ydC5cbiAqL1xuXG5leHBvcnRzLmRlZmF1bHQgPSBpc0hvdGtleTtcbmV4cG9ydHMuaXNIb3RrZXkgPSBpc0hvdGtleTtcbmV4cG9ydHMuaXNDb2RlSG90a2V5ID0gaXNDb2RlSG90a2V5O1xuZXhwb3J0cy5pc0tleUhvdGtleSA9IGlzS2V5SG90a2V5O1xuZXhwb3J0cy5wYXJzZUhvdGtleSA9IHBhcnNlSG90a2V5O1xuZXhwb3J0cy5jb21wYXJlSG90a2V5ID0gY29tcGFyZUhvdGtleTtcbmV4cG9ydHMudG9LZXlDb2RlID0gdG9LZXlDb2RlO1xuZXhwb3J0cy50b0tleU5hbWUgPSB0b0tleU5hbWU7IiwiLyohXG4gKiBpcy1wbGFpbi1vYmplY3QgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzLXBsYWluLW9iamVjdD5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNywgSm9uIFNjaGxpbmtlcnQuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuZnVuY3Rpb24gaXNPYmplY3Qobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cblxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvKSB7XG4gIHZhciBjdG9yLHByb3Q7XG5cbiAgaWYgKGlzT2JqZWN0KG8pID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIGhhcyBtb2RpZmllZCBjb25zdHJ1Y3RvclxuICBjdG9yID0gby5jb25zdHJ1Y3RvcjtcbiAgaWYgKGN0b3IgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG5cbiAgLy8gSWYgaGFzIG1vZGlmaWVkIHByb3RvdHlwZVxuICBwcm90ID0gY3Rvci5wcm90b3R5cGU7XG4gIGlmIChpc09iamVjdChwcm90KSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiBjb25zdHJ1Y3RvciBkb2VzIG5vdCBoYXZlIGFuIE9iamVjdC1zcGVjaWZpYyBtZXRob2RcbiAgaWYgKHByb3QuaGFzT3duUHJvcGVydHkoJ2lzUHJvdG90eXBlT2YnKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBNb3N0IGxpa2VseSBhIHBsYWluIE9iamVjdFxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IHsgaXNQbGFpbk9iamVjdCB9O1xuIiwidmFyIHRyaW1tZWRFbmRJbmRleCA9IHJlcXVpcmUoJy4vX3RyaW1tZWRFbmRJbmRleCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltU3RhcnQgPSAvXlxccysvO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRyaW1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gdHJpbS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHRyaW1tZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVHJpbShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZ1xuICAgID8gc3RyaW5nLnNsaWNlKDAsIHRyaW1tZWRFbmRJbmRleChzdHJpbmcpICsgMSkucmVwbGFjZShyZVRyaW1TdGFydCwgJycpXG4gICAgOiBzdHJpbmc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRyaW07XG4iLCIvKiogVXNlZCB0byBtYXRjaCBhIHNpbmdsZSB3aGl0ZXNwYWNlIGNoYXJhY3Rlci4gKi9cbnZhciByZVdoaXRlc3BhY2UgPSAvXFxzLztcblxuLyoqXG4gKiBVc2VkIGJ5IGBfLnRyaW1gIGFuZCBgXy50cmltRW5kYCB0byBnZXQgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG5vbi13aGl0ZXNwYWNlXG4gKiBjaGFyYWN0ZXIgb2YgYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVyLlxuICovXG5mdW5jdGlvbiB0cmltbWVkRW5kSW5kZXgoc3RyaW5nKSB7XG4gIHZhciBpbmRleCA9IHN0cmluZy5sZW5ndGg7XG5cbiAgd2hpbGUgKGluZGV4LS0gJiYgcmVXaGl0ZXNwYWNlLnRlc3Qoc3RyaW5nLmNoYXJBdChpbmRleCkpKSB7fVxuICByZXR1cm4gaW5kZXg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHJpbW1lZEVuZEluZGV4O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIG5vdyA9IHJlcXVpcmUoJy4vbm93JyksXG4gICAgdG9OdW1iZXIgPSByZXF1aXJlKCcuL3RvTnVtYmVyJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICB0aW1lV2FpdGluZyA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmdcbiAgICAgID8gbmF0aXZlTWluKHRpbWVXYWl0aW5nLCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSlcbiAgICAgIDogdGltZVdhaXRpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbm93O1xuIiwidmFyIGRlYm91bmNlID0gcmVxdWlyZSgnLi9kZWJvdW5jZScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSB0aHJvdHRsZWQgZnVuY3Rpb24gdGhhdCBvbmx5IGludm9rZXMgYGZ1bmNgIGF0IG1vc3Qgb25jZSBwZXJcbiAqIGV2ZXJ5IGB3YWl0YCBtaWxsaXNlY29uZHMuIFRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgXG4gKiBtZXRob2QgdG8gY2FuY2VsIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvXG4gKiBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS4gUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2BcbiAqIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZSBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGBcbiAqIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZCB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGVcbiAqIHRocm90dGxlZCBmdW5jdGlvbi4gU3Vic2VxdWVudCBjYWxscyB0byB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHJldHVybiB0aGVcbiAqIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2AgaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIHRocm90dGxlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy50aHJvdHRsZWAgYW5kIGBfLmRlYm91bmNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHRocm90dGxlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRocm90dGxlIGludm9jYXRpb25zIHRvLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHRocm90dGxlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgZXhjZXNzaXZlbHkgdXBkYXRpbmcgdGhlIHBvc2l0aW9uIHdoaWxlIHNjcm9sbGluZy5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdzY3JvbGwnLCBfLnRocm90dGxlKHVwZGF0ZVBvc2l0aW9uLCAxMDApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHJlbmV3VG9rZW5gIHdoZW4gdGhlIGNsaWNrIGV2ZW50IGlzIGZpcmVkLCBidXQgbm90IG1vcmUgdGhhbiBvbmNlIGV2ZXJ5IDUgbWludXRlcy5cbiAqIHZhciB0aHJvdHRsZWQgPSBfLnRocm90dGxlKHJlbmV3VG9rZW4sIDMwMDAwMCwgeyAndHJhaWxpbmcnOiBmYWxzZSB9KTtcbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCB0aHJvdHRsZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgdGhyb3R0bGVkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCB0aHJvdHRsZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGVhZGluZyA9IHRydWUsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICdsZWFkaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLmxlYWRpbmcgOiBsZWFkaW5nO1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cbiAgcmV0dXJuIGRlYm91bmNlKGZ1bmMsIHdhaXQsIHtcbiAgICAnbGVhZGluZyc6IGxlYWRpbmcsXG4gICAgJ21heFdhaXQnOiB3YWl0LFxuICAgICd0cmFpbGluZyc6IHRyYWlsaW5nXG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRocm90dGxlO1xuIiwidmFyIGJhc2VUcmltID0gcmVxdWlyZSgnLi9fYmFzZVRyaW0nKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IGJhc2VUcmltKHZhbHVlKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9OdW1iZXI7XG4iLCJpbXBvcnQgY29tcHV0ZSBmcm9tICdjb21wdXRlLXNjcm9sbC1pbnRvLXZpZXcnO1xuXG5mdW5jdGlvbiBpc09wdGlvbnNPYmplY3Qob3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucyA9PT0gT2JqZWN0KG9wdGlvbnMpICYmIE9iamVjdC5rZXlzKG9wdGlvbnMpLmxlbmd0aCAhPT0gMDtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEJlaGF2aW9yKGFjdGlvbnMsIGJlaGF2aW9yKSB7XG4gIGlmIChiZWhhdmlvciA9PT0gdm9pZCAwKSB7XG4gICAgYmVoYXZpb3IgPSAnYXV0byc7XG4gIH1cblxuICB2YXIgY2FuU21vb3RoU2Nyb2xsID0gKCdzY3JvbGxCZWhhdmlvcicgaW4gZG9jdW1lbnQuYm9keS5zdHlsZSk7XG4gIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBlbCA9IF9yZWYuZWwsXG4gICAgICAgIHRvcCA9IF9yZWYudG9wLFxuICAgICAgICBsZWZ0ID0gX3JlZi5sZWZ0O1xuXG4gICAgaWYgKGVsLnNjcm9sbCAmJiBjYW5TbW9vdGhTY3JvbGwpIHtcbiAgICAgIGVsLnNjcm9sbCh7XG4gICAgICAgIHRvcDogdG9wLFxuICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICBiZWhhdmlvcjogYmVoYXZpb3JcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5zY3JvbGxUb3AgPSB0b3A7XG4gICAgICBlbC5zY3JvbGxMZWZ0ID0gbGVmdDtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJsb2NrOiAnZW5kJyxcbiAgICAgIGlubGluZTogJ25lYXJlc3QnXG4gICAgfTtcbiAgfVxuXG4gIGlmIChpc09wdGlvbnNPYmplY3Qob3B0aW9ucykpIHtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYmxvY2s6ICdzdGFydCcsXG4gICAgaW5saW5lOiAnbmVhcmVzdCdcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsSW50b1ZpZXcodGFyZ2V0LCBvcHRpb25zKSB7XG4gIHZhciB0YXJnZXRJc0RldGFjaGVkID0gIXRhcmdldC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyh0YXJnZXQpO1xuXG4gIGlmIChpc09wdGlvbnNPYmplY3Qob3B0aW9ucykgJiYgdHlwZW9mIG9wdGlvbnMuYmVoYXZpb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5iZWhhdmlvcih0YXJnZXRJc0RldGFjaGVkID8gW10gOiBjb21wdXRlKHRhcmdldCwgb3B0aW9ucykpO1xuICB9XG5cbiAgaWYgKHRhcmdldElzRGV0YWNoZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgY29tcHV0ZU9wdGlvbnMgPSBnZXRPcHRpb25zKG9wdGlvbnMpO1xuICByZXR1cm4gZGVmYXVsdEJlaGF2aW9yKGNvbXB1dGUodGFyZ2V0LCBjb21wdXRlT3B0aW9ucyksIGNvbXB1dGVPcHRpb25zLmJlaGF2aW9yKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2Nyb2xsSW50b1ZpZXc7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VNZW1vLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBhdGgsIE5vZGUsIEVkaXRvciwgVGV4dCBhcyBUZXh0JDEsIFJhbmdlLCBFbGVtZW50IGFzIEVsZW1lbnQkMSwgVHJhbnNmb3JtcyB9IGZyb20gJ3NsYXRlJztcbmltcG9ydCBnZXREaXJlY3Rpb24gZnJvbSAnZGlyZWN0aW9uJztcbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gvdGhyb3R0bGUnO1xuaW1wb3J0IHNjcm9sbEludG9WaWV3IGZyb20gJ3Njcm9sbC1pbnRvLXZpZXctaWYtbmVlZGVkJztcbmltcG9ydCB7IGlzS2V5SG90a2V5IH0gZnJvbSAnaXMtaG90a2V5JztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuLyoqXHJcbiAqIExlYWYgY29udGVudCBzdHJpbmdzLlxyXG4gKi9cblxudmFyIFN0cmluZyA9IHByb3BzID0+IHtcbiAgdmFyIHtcbiAgICBpc0xhc3QsXG4gICAgbGVhZixcbiAgICBwYXJlbnQsXG4gICAgdGV4dFxuICB9ID0gcHJvcHM7XG4gIHZhciBlZGl0b3IgPSB1c2VTbGF0ZVN0YXRpYygpO1xuICB2YXIgcGF0aCA9IFJlYWN0RWRpdG9yLmZpbmRQYXRoKGVkaXRvciwgdGV4dCk7XG4gIHZhciBwYXJlbnRQYXRoID0gUGF0aC5wYXJlbnQocGF0aCk7IC8vIENPTVBBVDogUmVuZGVyIHRleHQgaW5zaWRlIHZvaWQgbm9kZXMgd2l0aCBhIHplcm8td2lkdGggc3BhY2UuXG4gIC8vIFNvIHRoZSBub2RlIGNhbiBjb250YWluIHNlbGVjdGlvbiBidXQgdGhlIHRleHQgaXMgbm90IHZpc2libGUuXG5cbiAgaWYgKGVkaXRvci5pc1ZvaWQocGFyZW50KSkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChaZXJvV2lkdGhTdHJpbmcsIHtcbiAgICAgIGxlbmd0aDogTm9kZS5zdHJpbmcocGFyZW50KS5sZW5ndGhcbiAgICB9KTtcbiAgfSAvLyBDT01QQVQ6IElmIHRoaXMgaXMgdGhlIGxhc3QgdGV4dCBub2RlIGluIGFuIGVtcHR5IGJsb2NrLCByZW5kZXIgYSB6ZXJvLVxuICAvLyB3aWR0aCBzcGFjZSB0aGF0IHdpbGwgY29udmVydCBpbnRvIGEgbGluZSBicmVhayB3aGVuIGNvcHlpbmcgYW5kIHBhc3RpbmdcbiAgLy8gdG8gc3VwcG9ydCBleHBlY3RlZCBwbGFpbiB0ZXh0LlxuXG5cbiAgaWYgKGxlYWYudGV4dCA9PT0gJycgJiYgcGFyZW50LmNoaWxkcmVuW3BhcmVudC5jaGlsZHJlbi5sZW5ndGggLSAxXSA9PT0gdGV4dCAmJiAhZWRpdG9yLmlzSW5saW5lKHBhcmVudCkgJiYgRWRpdG9yLnN0cmluZyhlZGl0b3IsIHBhcmVudFBhdGgpID09PSAnJykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChaZXJvV2lkdGhTdHJpbmcsIHtcbiAgICAgIGlzTGluZUJyZWFrOiB0cnVlXG4gICAgfSk7XG4gIH0gLy8gQ09NUEFUOiBJZiB0aGUgdGV4dCBpcyBlbXB0eSwgaXQncyBiZWNhdXNlIGl0J3Mgb24gdGhlIGVkZ2Ugb2YgYW4gaW5saW5lXG4gIC8vIG5vZGUsIHNvIHdlIHJlbmRlciBhIHplcm8td2lkdGggc3BhY2Ugc28gdGhhdCB0aGUgc2VsZWN0aW9uIGNhbiBiZVxuICAvLyBpbnNlcnRlZCBuZXh0IHRvIGl0IHN0aWxsLlxuXG5cbiAgaWYgKGxlYWYudGV4dCA9PT0gJycpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoWmVyb1dpZHRoU3RyaW5nLCBudWxsKTtcbiAgfSAvLyBDT01QQVQ6IEJyb3dzZXJzIHdpbGwgY29sbGFwc2UgdHJhaWxpbmcgbmV3IGxpbmVzIGF0IHRoZSBlbmQgb2YgYmxvY2tzLFxuICAvLyBzbyB3ZSBuZWVkIHRvIGFkZCBhbiBleHRyYSB0cmFpbGluZyBuZXcgbGluZXMgdG8gcHJldmVudCB0aGF0LlxuXG5cbiAgaWYgKGlzTGFzdCAmJiBsZWFmLnRleHQuc2xpY2UoLTEpID09PSAnXFxuJykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0U3RyaW5nLCB7XG4gICAgICBpc1RyYWlsaW5nOiB0cnVlLFxuICAgICAgdGV4dDogbGVhZi50ZXh0XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dFN0cmluZywge1xuICAgIHRleHQ6IGxlYWYudGV4dFxuICB9KTtcbn07XG4vKipcclxuICogTGVhZiBzdHJpbmdzIHdpdGggdGV4dCBpbiB0aGVtLlxyXG4gKi9cblxuXG52YXIgVGV4dFN0cmluZyA9IHByb3BzID0+IHtcbiAgdmFyIHtcbiAgICB0ZXh0LFxuICAgIGlzVHJhaWxpbmcgPSBmYWxzZVxuICB9ID0gcHJvcHM7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIFwiZGF0YS1zbGF0ZS1zdHJpbmdcIjogdHJ1ZVxuICB9LCB0ZXh0LCBpc1RyYWlsaW5nID8gJ1xcbicgOiBudWxsKTtcbn07XG4vKipcclxuICogTGVhZiBzdHJpbmdzIHdpdGhvdXQgdGV4dCwgcmVuZGVyIGFzIHplcm8td2lkdGggc3RyaW5ncy5cclxuICovXG5cblxudmFyIFplcm9XaWR0aFN0cmluZyA9IHByb3BzID0+IHtcbiAgdmFyIHtcbiAgICBsZW5ndGggPSAwLFxuICAgIGlzTGluZUJyZWFrID0gZmFsc2VcbiAgfSA9IHByb3BzO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBcImRhdGEtc2xhdGUtemVyby13aWR0aFwiOiBpc0xpbmVCcmVhayA/ICduJyA6ICd6JyxcbiAgICBcImRhdGEtc2xhdGUtbGVuZ3RoXCI6IGxlbmd0aFxuICB9LCAnXFx1RkVGRicsIGlzTGluZUJyZWFrID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSA6IG51bGwpO1xufTtcblxuLyoqXHJcbiAqIFR3byB3ZWFrIG1hcHMgdGhhdCBhbGxvdyB1cyByZWJ1aWxkIGEgcGF0aCBnaXZlbiBhIG5vZGUuIFRoZXkgYXJlIHBvcHVsYXRlZFxyXG4gKiBhdCByZW5kZXIgdGltZSBzdWNoIHRoYXQgYWZ0ZXIgYSByZW5kZXIgb2NjdXJzIHdlIGNhbiBhbHdheXMgYmFja3RyYWNrLlxyXG4gKi9cbnZhciBOT0RFX1RPX0lOREVYID0gbmV3IFdlYWtNYXAoKTtcbnZhciBOT0RFX1RPX1BBUkVOVCA9IG5ldyBXZWFrTWFwKCk7XG4vKipcclxuICogV2VhayBtYXBzIHRoYXQgYWxsb3cgdXMgdG8gZ28gYmV0d2VlbiBTbGF0ZSBub2RlcyBhbmQgRE9NIG5vZGVzLiBUaGVzZVxyXG4gKiBhcmUgdXNlZCB0byByZXNvbHZlIERPTSBldmVudC1yZWxhdGVkIGxvZ2ljIGludG8gU2xhdGUgYWN0aW9ucy5cclxuICovXG5cbnZhciBFRElUT1JfVE9fV0lORE9XID0gbmV3IFdlYWtNYXAoKTtcbnZhciBFRElUT1JfVE9fRUxFTUVOVCA9IG5ldyBXZWFrTWFwKCk7XG52YXIgRUxFTUVOVF9UT19OT0RFID0gbmV3IFdlYWtNYXAoKTtcbnZhciBLRVlfVE9fRUxFTUVOVCA9IG5ldyBXZWFrTWFwKCk7XG52YXIgTk9ERV9UT19FTEVNRU5UID0gbmV3IFdlYWtNYXAoKTtcbnZhciBOT0RFX1RPX0tFWSA9IG5ldyBXZWFrTWFwKCk7XG4vKipcclxuICogV2VhayBtYXBzIGZvciBzdG9yaW5nIGVkaXRvci1yZWxhdGVkIHN0YXRlLlxyXG4gKi9cblxudmFyIElTX1JFQURfT05MWSA9IG5ldyBXZWFrTWFwKCk7XG52YXIgSVNfRk9DVVNFRCA9IG5ldyBXZWFrTWFwKCk7XG4vKipcclxuICogV2VhayBtYXAgZm9yIGFzc29jaWF0aW5nIHRoZSBjb250ZXh0IGBvbkNoYW5nZWAgY29udGV4dCB3aXRoIHRoZSBwbHVnaW4uXHJcbiAqL1xuXG52YXIgRURJVE9SX1RPX09OX0NIQU5HRSA9IG5ldyBXZWFrTWFwKCk7XG52YXIgRURJVE9SX1RPX1JFU1RPUkVfRE9NID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxyXG4gKiBTeW1ib2xzLlxyXG4gKi9cblxudmFyIFBMQUNFSE9MREVSX1NZTUJPTCA9IFN5bWJvbCgncGxhY2Vob2xkZXInKTtcblxuLy8gcHJldmVudCBpbmNvbnNpc3RlbnQgcmVuZGVyaW5nIGJ5IFJlYWN0IHdpdGggSU1FIGlucHV0XG5cbnZhciBrZXlGb3JTdHJpbmcgPSAwO1xuLyoqXHJcbiAqIEluZGl2aWR1YWwgbGVhdmVzIGluIGEgdGV4dCBub2RlIHdpdGggdW5pcXVlIGZvcm1hdHRpbmcuXHJcbiAqL1xuXG52YXIgTGVhZiA9IHByb3BzID0+IHtcbiAgdmFyIHtcbiAgICBsZWFmLFxuICAgIGlzTGFzdCxcbiAgICB0ZXh0LFxuICAgIHBhcmVudCxcbiAgICByZW5kZXJQbGFjZWhvbGRlcixcbiAgICByZW5kZXJMZWFmID0gcHJvcHMgPT4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRGVmYXVsdExlYWYsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSlcbiAgfSA9IHByb3BzO1xuICB2YXIgcGxhY2Vob2xkZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIHBsYWNlaG9sZGVyRWwgPSBwbGFjZWhvbGRlclJlZiA9PT0gbnVsbCB8fCBwbGFjZWhvbGRlclJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGxhY2Vob2xkZXJSZWYuY3VycmVudDtcbiAgICB2YXIgZWRpdG9yRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zbGF0ZS1lZGl0b3I9XCJ0cnVlXCJdJyk7XG5cbiAgICBpZiAoIXBsYWNlaG9sZGVyRWwgfHwgIWVkaXRvckVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWRpdG9yRWwuc3R5bGUubWluSGVpZ2h0ID0gXCJcIi5jb25jYXQocGxhY2Vob2xkZXJFbC5jbGllbnRIZWlnaHQsIFwicHhcIik7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGVkaXRvckVsLnN0eWxlLm1pbkhlaWdodCA9ICdhdXRvJztcbiAgICB9O1xuICB9LCBbcGxhY2Vob2xkZXJSZWYsIGxlYWZdKTtcbiAgdmFyIGNoaWxkcmVuID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU3RyaW5nLCB7XG4gICAga2V5OiBrZXlGb3JTdHJpbmcrKyxcbiAgICBpc0xhc3Q6IGlzTGFzdCxcbiAgICBsZWFmOiBsZWFmLFxuICAgIHBhcmVudDogcGFyZW50LFxuICAgIHRleHQ6IHRleHRcbiAgfSk7XG5cbiAgaWYgKGxlYWZbUExBQ0VIT0xERVJfU1lNQk9MXSkge1xuICAgIHZhciBwbGFjZWhvbGRlclByb3BzID0ge1xuICAgICAgY2hpbGRyZW46IGxlYWYucGxhY2Vob2xkZXIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICdkYXRhLXNsYXRlLXBsYWNlaG9sZGVyJzogdHJ1ZSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgb3BhY2l0eTogJzAuMzMzJyxcbiAgICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJ1xuICAgICAgICB9LFxuICAgICAgICBjb250ZW50RWRpdGFibGU6IGZhbHNlLFxuICAgICAgICByZWY6IHBsYWNlaG9sZGVyUmVmXG4gICAgICB9XG4gICAgfTtcbiAgICBjaGlsZHJlbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCByZW5kZXJQbGFjZWhvbGRlcihwbGFjZWhvbGRlclByb3BzKSwgY2hpbGRyZW4pO1xuICB9IC8vIENPTVBBVDogSGF2aW5nIHRoZSBgZGF0YS1gIGF0dHJpYnV0ZXMgb24gdGhlc2UgbGVhZiBlbGVtZW50cyBlbnN1cmVzIHRoYXRcbiAgLy8gaW4gY2VydGFpbiBtaXNiZWhhdmluZyBicm93c2VycyB0aGV5IGFyZW4ndCB3ZWlyZGx5IGNsb25lZC9kZXN0cm95ZWQgYnlcbiAgLy8gY29udGVudGVkaXRhYmxlIGJlaGF2aW9ycy4gKDIwMTkvMDUvMDgpXG5cblxuICB2YXIgYXR0cmlidXRlcyA9IHtcbiAgICAnZGF0YS1zbGF0ZS1sZWFmJzogdHJ1ZVxuICB9O1xuICByZXR1cm4gcmVuZGVyTGVhZih7XG4gICAgYXR0cmlidXRlcyxcbiAgICBjaGlsZHJlbixcbiAgICBsZWFmLFxuICAgIHRleHRcbiAgfSk7XG59O1xuXG52YXIgTWVtb2l6ZWRMZWFmID0gLyojX19QVVJFX18qL1JlYWN0Lm1lbW8oTGVhZiwgKHByZXYsIG5leHQpID0+IHtcbiAgcmV0dXJuIG5leHQucGFyZW50ID09PSBwcmV2LnBhcmVudCAmJiBuZXh0LmlzTGFzdCA9PT0gcHJldi5pc0xhc3QgJiYgbmV4dC5yZW5kZXJMZWFmID09PSBwcmV2LnJlbmRlckxlYWYgJiYgbmV4dC5yZW5kZXJQbGFjZWhvbGRlciA9PT0gcHJldi5yZW5kZXJQbGFjZWhvbGRlciAmJiBuZXh0LnRleHQgPT09IHByZXYudGV4dCAmJiBUZXh0JDEuZXF1YWxzKG5leHQubGVhZiwgcHJldi5sZWFmKSAmJiBuZXh0LmxlYWZbUExBQ0VIT0xERVJfU1lNQk9MXSA9PT0gcHJldi5sZWFmW1BMQUNFSE9MREVSX1NZTUJPTF07XG59KTtcbnZhciBEZWZhdWx0TGVhZiA9IHByb3BzID0+IHtcbiAgdmFyIHtcbiAgICBhdHRyaWJ1dGVzLFxuICAgIGNoaWxkcmVuXG4gIH0gPSBwcm9wcztcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBPYmplY3QuYXNzaWduKHt9LCBhdHRyaWJ1dGVzKSwgY2hpbGRyZW4pO1xufTtcblxudmFyIElTX0lPUyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICF3aW5kb3cuTVNTdHJlYW07XG52YXIgSVNfQVBQTEUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvTWFjIE9TIFgvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG52YXIgSVNfQU5EUk9JRCA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9BbmRyb2lkLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xudmFyIElTX0ZJUkVGT1ggPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvXig/IS4qU2VhbW9ua2V5KSg/PS4qRmlyZWZveCkuKi9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG52YXIgSVNfU0FGQVJJID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL1ZlcnNpb25cXC9bXFxkXFwuXSsuKlNhZmFyaS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTsgLy8gXCJtb2Rlcm5cIiBFZGdlIHdhcyByZWxlYXNlZCBhdCA3OS54XG5cbnZhciBJU19FREdFX0xFR0FDWSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9FZGdlP1xcLyg/OlswLTZdWzAtOV18WzAtN11bMC04XSkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xudmFyIElTX0NIUk9NRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9DaHJvbWUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpOyAvLyBOYXRpdmUgYGJlZm9yZUlucHV0YCBldmVudHMgZG9uJ3Qgd29yayB3ZWxsIHdpdGggcmVhY3Qgb24gQ2hyb21lIDc1XG4vLyBhbmQgb2xkZXIsIENocm9tZSA3NisgY2FuIHVzZSBgYmVmb3JlSW5wdXRgIHRob3VnaC5cblxudmFyIElTX0NIUk9NRV9MRUdBQ1kgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvQ2hyb21lP1xcLyg/OlswLTddWzAtNV18WzAtNl1bMC05XSkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpOyAvLyBGaXJlZm94IGRpZCBub3Qgc3VwcG9ydCBgYmVmb3JlSW5wdXRgIHVudGlsIGB2ODdgLlxuXG52YXIgSVNfRklSRUZPWF9MRUdBQ1kgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvXig/IS4qU2VhbW9ua2V5KSg/PS4qRmlyZWZveFxcLyg/OlswLTddWzAtOV18WzAtOF1bMC02XSkpLiovaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpOyAvLyBDaGVjayBpZiBET00gaXMgYXZhaWxhYmxlIGFzIFJlYWN0IGRvZXMgaW50ZXJuYWxseS5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL21hc3Rlci9wYWNrYWdlcy9zaGFyZWQvRXhlY3V0aW9uRW52aXJvbm1lbnQuanNcblxudmFyIENBTl9VU0VfRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50ICE9PSAndW5kZWZpbmVkJyk7IC8vIENPTVBBVDogRmlyZWZveC9FZGdlIExlZ2FjeSBkb24ndCBzdXBwb3J0IHRoZSBgYmVmb3JlaW5wdXRgIGV2ZW50XG4vLyBDaHJvbWUgTGVnYWN5IGRvZXNuJ3Qgc3VwcG9ydCBgYmVmb3JlaW5wdXRgIGNvcnJlY3RseVxuXG52YXIgSEFTX0JFRk9SRV9JTlBVVF9TVVBQT1JUID0gIUlTX0NIUk9NRV9MRUdBQ1kgJiYgIUlTX0VER0VfTEVHQUNZICYmIC8vIGdsb2JhbFRoaXMgaXMgdW5kZWZpbmVkIGluIG9sZGVyIGJyb3dzZXJzXG50eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsVGhpcy5JbnB1dEV2ZW50ICYmIC8vIEB0cy1pZ25vcmUgVGhlIGBnZXRUYXJnZXRSYW5nZXNgIHByb3BlcnR5IGlzbid0IHJlY29nbml6ZWQuXG50eXBlb2YgZ2xvYmFsVGhpcy5JbnB1dEV2ZW50LnByb3RvdHlwZS5nZXRUYXJnZXRSYW5nZXMgPT09ICdmdW5jdGlvbic7XG5cbi8qKlxyXG4gKiBQcmV2ZW50IHdhcm5pbmcgb24gU1NSIGJ5IGZhbGxpbmcgYmFjayB0byB1c2VFZmZlY3Qgd2hlbiBET00gaXNuJ3QgYXZhaWxhYmxlXHJcbiAqL1xuXG52YXIgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCA9IENBTl9VU0VfRE9NID8gdXNlTGF5b3V0RWZmZWN0IDogdXNlRWZmZWN0O1xuXG52YXIgc2hhbGxvd0NvbXBhcmUgPSAob2JqMSwgb2JqMikgPT4gT2JqZWN0LmtleXMob2JqMSkubGVuZ3RoID09PSBPYmplY3Qua2V5cyhvYmoyKS5sZW5ndGggJiYgT2JqZWN0LmtleXMob2JqMSkuZXZlcnkoa2V5ID0+IG9iajIuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBvYmoxW2tleV0gPT09IG9iajJba2V5XSk7XG4vKipcclxuICogQ2hlY2sgaWYgYSBsaXN0IG9mIGRlY29yYXRvciByYW5nZXMgYXJlIGVxdWFsIHRvIGFub3RoZXIuXHJcbiAqXHJcbiAqIFBFUkY6IHRoaXMgcmVxdWlyZXMgdGhlIHR3byBsaXN0cyB0byBhbHNvIGhhdmUgdGhlIHJhbmdlcyBpbnNpZGUgdGhlbSBpbiB0aGVcclxuICogc2FtZSBvcmRlciwgYnV0IHRoaXMgaXMgYW4gb2theSBjb25zdHJhaW50IGZvciB1cyBzaW5jZSBkZWNvcmF0aW9ucyBhcmVcclxuICoga2VwdCBpbiBvcmRlciwgYW5kIHRoZSBvZGQgY2FzZSB3aGVyZSB0aGV5IGFyZW4ndCBpcyBva2F5IHRvIHJlLXJlbmRlciBmb3IuXHJcbiAqL1xuXG52YXIgaXNEZWNvcmF0b3JSYW5nZUxpc3RFcXVhbCA9IChsaXN0LCBhbm90aGVyKSA9PiB7XG4gIGlmIChsaXN0Lmxlbmd0aCAhPT0gYW5vdGhlci5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcmFuZ2UgPSBsaXN0W2ldO1xuICAgIHZhciBvdGhlciA9IGFub3RoZXJbaV07XG5cbiAgICB2YXIgcmFuZ2VPd25Qcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhyYW5nZSwgW1wiYW5jaG9yXCIsIFwiZm9jdXNcIl0pO1xuXG4gICAgdmFyIG90aGVyT3duUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob3RoZXIsIFtcImFuY2hvclwiLCBcImZvY3VzXCJdKTtcblxuICAgIGlmICghUmFuZ2UuZXF1YWxzKHJhbmdlLCBvdGhlcikgfHwgcmFuZ2VbUExBQ0VIT0xERVJfU1lNQk9MXSAhPT0gb3RoZXJbUExBQ0VIT0xERVJfU1lNQk9MXSB8fCAhc2hhbGxvd0NvbXBhcmUocmFuZ2VPd25Qcm9wcywgb3RoZXJPd25Qcm9wcykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxyXG4gKiBUZXh0LlxyXG4gKi9cblxudmFyIFRleHQgPSBwcm9wcyA9PiB7XG4gIHZhciB7XG4gICAgZGVjb3JhdGlvbnMsXG4gICAgaXNMYXN0LFxuICAgIHBhcmVudCxcbiAgICByZW5kZXJQbGFjZWhvbGRlcixcbiAgICByZW5kZXJMZWFmLFxuICAgIHRleHRcbiAgfSA9IHByb3BzO1xuICB2YXIgZWRpdG9yID0gdXNlU2xhdGVTdGF0aWMoKTtcbiAgdmFyIHJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIGxlYXZlcyA9IFRleHQkMS5kZWNvcmF0aW9ucyh0ZXh0LCBkZWNvcmF0aW9ucyk7XG4gIHZhciBrZXkgPSBSZWFjdEVkaXRvci5maW5kS2V5KGVkaXRvciwgdGV4dCk7XG4gIHZhciBjaGlsZHJlbiA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVhdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGxlYWYgPSBsZWF2ZXNbaV07XG4gICAgY2hpbGRyZW4ucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWVtb2l6ZWRMZWFmLCB7XG4gICAgICBpc0xhc3Q6IGlzTGFzdCAmJiBpID09PSBsZWF2ZXMubGVuZ3RoIC0gMSxcbiAgICAgIGtleTogXCJcIi5jb25jYXQoa2V5LmlkLCBcIi1cIikuY29uY2F0KGkpLFxuICAgICAgcmVuZGVyUGxhY2Vob2xkZXI6IHJlbmRlclBsYWNlaG9sZGVyLFxuICAgICAgbGVhZjogbGVhZixcbiAgICAgIHRleHQ6IHRleHQsXG4gICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgIHJlbmRlckxlYWY6IHJlbmRlckxlYWZcbiAgICB9KSk7XG4gIH0gLy8gVXBkYXRlIGVsZW1lbnQtcmVsYXRlZCB3ZWFrIG1hcHMgd2l0aCB0aGUgRE9NIGVsZW1lbnQgcmVmLlxuXG5cbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlZi5jdXJyZW50KSB7XG4gICAgICBLRVlfVE9fRUxFTUVOVC5zZXQoa2V5LCByZWYuY3VycmVudCk7XG4gICAgICBOT0RFX1RPX0VMRU1FTlQuc2V0KHRleHQsIHJlZi5jdXJyZW50KTtcbiAgICAgIEVMRU1FTlRfVE9fTk9ERS5zZXQocmVmLmN1cnJlbnQsIHRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBLRVlfVE9fRUxFTUVOVC5kZWxldGUoa2V5KTtcbiAgICAgIE5PREVfVE9fRUxFTUVOVC5kZWxldGUodGV4dCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgXCJkYXRhLXNsYXRlLW5vZGVcIjogXCJ0ZXh0XCIsXG4gICAgcmVmOiByZWZcbiAgfSwgY2hpbGRyZW4pO1xufTtcblxudmFyIE1lbW9pemVkVGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5tZW1vKFRleHQsIChwcmV2LCBuZXh0KSA9PiB7XG4gIHJldHVybiBuZXh0LnBhcmVudCA9PT0gcHJldi5wYXJlbnQgJiYgbmV4dC5pc0xhc3QgPT09IHByZXYuaXNMYXN0ICYmIG5leHQucmVuZGVyTGVhZiA9PT0gcHJldi5yZW5kZXJMZWFmICYmIG5leHQudGV4dCA9PT0gcHJldi50ZXh0ICYmIGlzRGVjb3JhdG9yUmFuZ2VMaXN0RXF1YWwobmV4dC5kZWNvcmF0aW9ucywgcHJldi5kZWNvcmF0aW9ucyk7XG59KTtcblxuLyoqXHJcbiAqIEEgUmVhY3QgY29udGV4dCBmb3Igc2hhcmluZyB0aGUgYHNlbGVjdGVkYCBzdGF0ZSBvZiBhbiBlbGVtZW50LlxyXG4gKi9cblxudmFyIFNlbGVjdGVkQ29udGV4dCA9IC8qI19fUFVSRV9fKi9jcmVhdGVDb250ZXh0KGZhbHNlKTtcbi8qKlxyXG4gKiBHZXQgdGhlIGN1cnJlbnQgYHNlbGVjdGVkYCBzdGF0ZSBvZiBhbiBlbGVtZW50LlxyXG4gKi9cblxudmFyIHVzZVNlbGVjdGVkID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChTZWxlY3RlZENvbnRleHQpO1xufTtcblxuLyoqXHJcbiAqIEVsZW1lbnQuXHJcbiAqL1xuXG52YXIgRWxlbWVudCA9IHByb3BzID0+IHtcbiAgdmFyIHtcbiAgICBkZWNvcmF0aW9ucyxcbiAgICBlbGVtZW50LFxuICAgIHJlbmRlckVsZW1lbnQgPSBwID0+IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERlZmF1bHRFbGVtZW50LCBPYmplY3QuYXNzaWduKHt9LCBwKSksXG4gICAgcmVuZGVyUGxhY2Vob2xkZXIsXG4gICAgcmVuZGVyTGVhZixcbiAgICBzZWxlY3Rpb25cbiAgfSA9IHByb3BzO1xuICB2YXIgcmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgZWRpdG9yID0gdXNlU2xhdGVTdGF0aWMoKTtcbiAgdmFyIHJlYWRPbmx5ID0gdXNlUmVhZE9ubHkoKTtcbiAgdmFyIGlzSW5saW5lID0gZWRpdG9yLmlzSW5saW5lKGVsZW1lbnQpO1xuICB2YXIga2V5ID0gUmVhY3RFZGl0b3IuZmluZEtleShlZGl0b3IsIGVsZW1lbnQpO1xuICB2YXIgY2hpbGRyZW4gPSB1c2VDaGlsZHJlbih7XG4gICAgZGVjb3JhdGlvbnMsXG4gICAgbm9kZTogZWxlbWVudCxcbiAgICByZW5kZXJFbGVtZW50LFxuICAgIHJlbmRlclBsYWNlaG9sZGVyLFxuICAgIHJlbmRlckxlYWYsXG4gICAgc2VsZWN0aW9uXG4gIH0pOyAvLyBBdHRyaWJ1dGVzIHRoYXQgdGhlIGRldmVsb3BlciBtdXN0IG1peCBpbnRvIHRoZSBlbGVtZW50IGluIHRoZWlyXG4gIC8vIGN1c3RvbSBub2RlIHJlbmRlcmVyIGNvbXBvbmVudC5cblxuICB2YXIgYXR0cmlidXRlcyA9IHtcbiAgICAnZGF0YS1zbGF0ZS1ub2RlJzogJ2VsZW1lbnQnLFxuICAgIHJlZlxuICB9O1xuXG4gIGlmIChpc0lubGluZSkge1xuICAgIGF0dHJpYnV0ZXNbJ2RhdGEtc2xhdGUtaW5saW5lJ10gPSB0cnVlO1xuICB9IC8vIElmIGl0J3MgYSBibG9jayBub2RlIHdpdGggaW5saW5lIGNoaWxkcmVuLCBhZGQgdGhlIHByb3BlciBgZGlyYCBhdHRyaWJ1dGVcbiAgLy8gZm9yIHRleHQgZGlyZWN0aW9uLlxuXG5cbiAgaWYgKCFpc0lubGluZSAmJiBFZGl0b3IuaGFzSW5saW5lcyhlZGl0b3IsIGVsZW1lbnQpKSB7XG4gICAgdmFyIHRleHQgPSBOb2RlLnN0cmluZyhlbGVtZW50KTtcbiAgICB2YXIgZGlyID0gZ2V0RGlyZWN0aW9uKHRleHQpO1xuXG4gICAgaWYgKGRpciA9PT0gJ3J0bCcpIHtcbiAgICAgIGF0dHJpYnV0ZXMuZGlyID0gZGlyO1xuICAgIH1cbiAgfSAvLyBJZiBpdCdzIGEgdm9pZCBub2RlLCB3cmFwIHRoZSBjaGlsZHJlbiBpbiBleHRyYSB2b2lkLXNwZWNpZmljIGVsZW1lbnRzLlxuXG5cbiAgaWYgKEVkaXRvci5pc1ZvaWQoZWRpdG9yLCBlbGVtZW50KSkge1xuICAgIGF0dHJpYnV0ZXNbJ2RhdGEtc2xhdGUtdm9pZCddID0gdHJ1ZTtcblxuICAgIGlmICghcmVhZE9ubHkgJiYgaXNJbmxpbmUpIHtcbiAgICAgIGF0dHJpYnV0ZXMuY29udGVudEVkaXRhYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIFRhZyA9IGlzSW5saW5lID8gJ3NwYW4nIDogJ2Rpdic7XG4gICAgdmFyIFtbX3RleHRdXSA9IE5vZGUudGV4dHMoZWxlbWVudCk7XG4gICAgY2hpbGRyZW4gPSByZWFkT25seSA/IG51bGwgOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUYWcsIHtcbiAgICAgIFwiZGF0YS1zbGF0ZS1zcGFjZXJcIjogdHJ1ZSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGhlaWdodDogJzAnLFxuICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgICAgfVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1lbW9pemVkVGV4dCwge1xuICAgICAgcmVuZGVyUGxhY2Vob2xkZXI6IHJlbmRlclBsYWNlaG9sZGVyLFxuICAgICAgZGVjb3JhdGlvbnM6IFtdLFxuICAgICAgaXNMYXN0OiBmYWxzZSxcbiAgICAgIHBhcmVudDogZWxlbWVudCxcbiAgICAgIHRleHQ6IF90ZXh0XG4gICAgfSkpO1xuICAgIE5PREVfVE9fSU5ERVguc2V0KF90ZXh0LCAwKTtcbiAgICBOT0RFX1RPX1BBUkVOVC5zZXQoX3RleHQsIGVsZW1lbnQpO1xuICB9IC8vIFVwZGF0ZSBlbGVtZW50LXJlbGF0ZWQgd2VhayBtYXBzIHdpdGggdGhlIERPTSBlbGVtZW50IHJlZi5cblxuXG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZWYuY3VycmVudCkge1xuICAgICAgS0VZX1RPX0VMRU1FTlQuc2V0KGtleSwgcmVmLmN1cnJlbnQpO1xuICAgICAgTk9ERV9UT19FTEVNRU5ULnNldChlbGVtZW50LCByZWYuY3VycmVudCk7XG4gICAgICBFTEVNRU5UX1RPX05PREUuc2V0KHJlZi5jdXJyZW50LCBlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgS0VZX1RPX0VMRU1FTlQuZGVsZXRlKGtleSk7XG4gICAgICBOT0RFX1RPX0VMRU1FTlQuZGVsZXRlKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3RlZENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogISFzZWxlY3Rpb25cbiAgfSwgcmVuZGVyRWxlbWVudCh7XG4gICAgYXR0cmlidXRlcyxcbiAgICBjaGlsZHJlbixcbiAgICBlbGVtZW50XG4gIH0pKTtcbn07XG5cbnZhciBNZW1vaXplZEVsZW1lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QubWVtbyhFbGVtZW50LCAocHJldiwgbmV4dCkgPT4ge1xuICByZXR1cm4gcHJldi5lbGVtZW50ID09PSBuZXh0LmVsZW1lbnQgJiYgcHJldi5yZW5kZXJFbGVtZW50ID09PSBuZXh0LnJlbmRlckVsZW1lbnQgJiYgcHJldi5yZW5kZXJMZWFmID09PSBuZXh0LnJlbmRlckxlYWYgJiYgaXNEZWNvcmF0b3JSYW5nZUxpc3RFcXVhbChwcmV2LmRlY29yYXRpb25zLCBuZXh0LmRlY29yYXRpb25zKSAmJiAocHJldi5zZWxlY3Rpb24gPT09IG5leHQuc2VsZWN0aW9uIHx8ICEhcHJldi5zZWxlY3Rpb24gJiYgISFuZXh0LnNlbGVjdGlvbiAmJiBSYW5nZS5lcXVhbHMocHJldi5zZWxlY3Rpb24sIG5leHQuc2VsZWN0aW9uKSk7XG59KTtcbi8qKlxyXG4gKiBUaGUgZGVmYXVsdCBlbGVtZW50IHJlbmRlcmVyLlxyXG4gKi9cblxudmFyIERlZmF1bHRFbGVtZW50ID0gcHJvcHMgPT4ge1xuICB2YXIge1xuICAgIGF0dHJpYnV0ZXMsXG4gICAgY2hpbGRyZW4sXG4gICAgZWxlbWVudFxuICB9ID0gcHJvcHM7XG4gIHZhciBlZGl0b3IgPSB1c2VTbGF0ZVN0YXRpYygpO1xuICB2YXIgVGFnID0gZWRpdG9yLmlzSW5saW5lKGVsZW1lbnQpID8gJ3NwYW4nIDogJ2Rpdic7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUYWcsIE9iamVjdC5hc3NpZ24oe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBzdHlsZToge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICB9XG4gIH0pLCBjaGlsZHJlbik7XG59O1xuXG4vKipcclxuICogQSBSZWFjdCBjb250ZXh0IGZvciBzaGFyaW5nIHRoZSBlZGl0b3Igb2JqZWN0LlxyXG4gKi9cblxudmFyIEVkaXRvckNvbnRleHQgPSAvKiNfX1BVUkVfXyovY3JlYXRlQ29udGV4dChudWxsKTtcbi8qKlxyXG4gKiBHZXQgdGhlIGN1cnJlbnQgZWRpdG9yIG9iamVjdCBmcm9tIHRoZSBSZWFjdCBjb250ZXh0LlxyXG4gKi9cblxudmFyIHVzZVNsYXRlU3RhdGljID0gKCkgPT4ge1xuICB2YXIgZWRpdG9yID0gdXNlQ29udGV4dChFZGl0b3JDb250ZXh0KTtcblxuICBpZiAoIWVkaXRvcikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBgdXNlU2xhdGVTdGF0aWNgIGhvb2sgbXVzdCBiZSB1c2VkIGluc2lkZSB0aGUgPFNsYXRlPiBjb21wb25lbnQncyBjb250ZXh0LlwiKTtcbiAgfVxuXG4gIHJldHVybiBlZGl0b3I7XG59O1xuXG4vKipcclxuICogQSBSZWFjdCBjb250ZXh0IGZvciBzaGFyaW5nIHRoZSBgZGVjb3JhdGVgIHByb3Agb2YgdGhlIGVkaXRhYmxlLlxyXG4gKi9cblxudmFyIERlY29yYXRlQ29udGV4dCA9IC8qI19fUFVSRV9fKi9jcmVhdGVDb250ZXh0KCgpID0+IFtdKTtcbi8qKlxyXG4gKiBHZXQgdGhlIGN1cnJlbnQgYGRlY29yYXRlYCBwcm9wIG9mIHRoZSBlZGl0YWJsZS5cclxuICovXG5cbnZhciB1c2VEZWNvcmF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoRGVjb3JhdGVDb250ZXh0KTtcbn07XG5cbi8qKlxyXG4gKiBDaGlsZHJlbi5cclxuICovXG5cbnZhciB1c2VDaGlsZHJlbiA9IHByb3BzID0+IHtcbiAgdmFyIHtcbiAgICBkZWNvcmF0aW9ucyxcbiAgICBub2RlLFxuICAgIHJlbmRlckVsZW1lbnQsXG4gICAgcmVuZGVyUGxhY2Vob2xkZXIsXG4gICAgcmVuZGVyTGVhZixcbiAgICBzZWxlY3Rpb25cbiAgfSA9IHByb3BzO1xuICB2YXIgZGVjb3JhdGUgPSB1c2VEZWNvcmF0ZSgpO1xuICB2YXIgZWRpdG9yID0gdXNlU2xhdGVTdGF0aWMoKTtcbiAgdmFyIHBhdGggPSBSZWFjdEVkaXRvci5maW5kUGF0aChlZGl0b3IsIG5vZGUpO1xuICB2YXIgY2hpbGRyZW4gPSBbXTtcbiAgdmFyIGlzTGVhZkJsb2NrID0gRWxlbWVudCQxLmlzRWxlbWVudChub2RlKSAmJiAhZWRpdG9yLmlzSW5saW5lKG5vZGUpICYmIEVkaXRvci5oYXNJbmxpbmVzKGVkaXRvciwgbm9kZSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHAgPSBwYXRoLmNvbmNhdChpKTtcbiAgICB2YXIgbiA9IG5vZGUuY2hpbGRyZW5baV07XG4gICAgdmFyIGtleSA9IFJlYWN0RWRpdG9yLmZpbmRLZXkoZWRpdG9yLCBuKTtcbiAgICB2YXIgcmFuZ2UgPSBFZGl0b3IucmFuZ2UoZWRpdG9yLCBwKTtcbiAgICB2YXIgc2VsID0gc2VsZWN0aW9uICYmIFJhbmdlLmludGVyc2VjdGlvbihyYW5nZSwgc2VsZWN0aW9uKTtcbiAgICB2YXIgZHMgPSBkZWNvcmF0ZShbbiwgcF0pO1xuXG4gICAgZm9yICh2YXIgZGVjIG9mIGRlY29yYXRpb25zKSB7XG4gICAgICB2YXIgZCA9IFJhbmdlLmludGVyc2VjdGlvbihkZWMsIHJhbmdlKTtcblxuICAgICAgaWYgKGQpIHtcbiAgICAgICAgZHMucHVzaChkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoRWxlbWVudCQxLmlzRWxlbWVudChuKSkge1xuICAgICAgY2hpbGRyZW4ucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWVtb2l6ZWRFbGVtZW50LCB7XG4gICAgICAgIGRlY29yYXRpb25zOiBkcyxcbiAgICAgICAgZWxlbWVudDogbixcbiAgICAgICAga2V5OiBrZXkuaWQsXG4gICAgICAgIHJlbmRlckVsZW1lbnQ6IHJlbmRlckVsZW1lbnQsXG4gICAgICAgIHJlbmRlclBsYWNlaG9sZGVyOiByZW5kZXJQbGFjZWhvbGRlcixcbiAgICAgICAgcmVuZGVyTGVhZjogcmVuZGVyTGVhZixcbiAgICAgICAgc2VsZWN0aW9uOiBzZWxcbiAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGRyZW4ucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWVtb2l6ZWRUZXh0LCB7XG4gICAgICAgIGRlY29yYXRpb25zOiBkcyxcbiAgICAgICAga2V5OiBrZXkuaWQsXG4gICAgICAgIGlzTGFzdDogaXNMZWFmQmxvY2sgJiYgaSA9PT0gbm9kZS5jaGlsZHJlbi5sZW5ndGggLSAxLFxuICAgICAgICBwYXJlbnQ6IG5vZGUsXG4gICAgICAgIHJlbmRlclBsYWNlaG9sZGVyOiByZW5kZXJQbGFjZWhvbGRlcixcbiAgICAgICAgcmVuZGVyTGVhZjogcmVuZGVyTGVhZixcbiAgICAgICAgdGV4dDogblxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIE5PREVfVE9fSU5ERVguc2V0KG4sIGkpO1xuICAgIE5PREVfVE9fUEFSRU5ULnNldChuLCBub2RlKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlbjtcbn07XG5cbi8qKlxyXG4gKiBIb3RrZXkgbWFwcGluZ3MgZm9yIGVhY2ggcGxhdGZvcm0uXHJcbiAqL1xuXG52YXIgSE9US0VZUyA9IHtcbiAgYm9sZDogJ21vZCtiJyxcbiAgY29tcG9zZTogWydkb3duJywgJ2xlZnQnLCAncmlnaHQnLCAndXAnLCAnYmFja3NwYWNlJywgJ2VudGVyJ10sXG4gIG1vdmVCYWNrd2FyZDogJ2xlZnQnLFxuICBtb3ZlRm9yd2FyZDogJ3JpZ2h0JyxcbiAgbW92ZVdvcmRCYWNrd2FyZDogJ2N0cmwrbGVmdCcsXG4gIG1vdmVXb3JkRm9yd2FyZDogJ2N0cmwrcmlnaHQnLFxuICBkZWxldGVCYWNrd2FyZDogJ3NoaWZ0PytiYWNrc3BhY2UnLFxuICBkZWxldGVGb3J3YXJkOiAnc2hpZnQ/K2RlbGV0ZScsXG4gIGV4dGVuZEJhY2t3YXJkOiAnc2hpZnQrbGVmdCcsXG4gIGV4dGVuZEZvcndhcmQ6ICdzaGlmdCtyaWdodCcsXG4gIGl0YWxpYzogJ21vZCtpJyxcbiAgc3BsaXRCbG9jazogJ3NoaWZ0PytlbnRlcicsXG4gIHVuZG86ICdtb2Qreidcbn07XG52YXIgQVBQTEVfSE9US0VZUyA9IHtcbiAgbW92ZUxpbmVCYWNrd2FyZDogJ29wdCt1cCcsXG4gIG1vdmVMaW5lRm9yd2FyZDogJ29wdCtkb3duJyxcbiAgbW92ZVdvcmRCYWNrd2FyZDogJ29wdCtsZWZ0JyxcbiAgbW92ZVdvcmRGb3J3YXJkOiAnb3B0K3JpZ2h0JyxcbiAgZGVsZXRlQmFja3dhcmQ6IFsnY3RybCtiYWNrc3BhY2UnLCAnY3RybCtoJ10sXG4gIGRlbGV0ZUZvcndhcmQ6IFsnY3RybCtkZWxldGUnLCAnY3RybCtkJ10sXG4gIGRlbGV0ZUxpbmVCYWNrd2FyZDogJ2NtZCtzaGlmdD8rYmFja3NwYWNlJyxcbiAgZGVsZXRlTGluZUZvcndhcmQ6IFsnY21kK3NoaWZ0PytkZWxldGUnLCAnY3RybCtrJ10sXG4gIGRlbGV0ZVdvcmRCYWNrd2FyZDogJ29wdCtzaGlmdD8rYmFja3NwYWNlJyxcbiAgZGVsZXRlV29yZEZvcndhcmQ6ICdvcHQrc2hpZnQ/K2RlbGV0ZScsXG4gIGV4dGVuZExpbmVCYWNrd2FyZDogJ29wdCtzaGlmdCt1cCcsXG4gIGV4dGVuZExpbmVGb3J3YXJkOiAnb3B0K3NoaWZ0K2Rvd24nLFxuICByZWRvOiAnY21kK3NoaWZ0K3onLFxuICB0cmFuc3Bvc2VDaGFyYWN0ZXI6ICdjdHJsK3QnXG59O1xudmFyIFdJTkRPV1NfSE9US0VZUyA9IHtcbiAgZGVsZXRlV29yZEJhY2t3YXJkOiAnY3RybCtzaGlmdD8rYmFja3NwYWNlJyxcbiAgZGVsZXRlV29yZEZvcndhcmQ6ICdjdHJsK3NoaWZ0PytkZWxldGUnLFxuICByZWRvOiBbJ2N0cmwreScsICdjdHJsK3NoaWZ0K3onXVxufTtcbi8qKlxyXG4gKiBDcmVhdGUgYSBwbGF0Zm9ybS1hd2FyZSBob3RrZXkgY2hlY2tlci5cclxuICovXG5cbnZhciBjcmVhdGUgPSBrZXkgPT4ge1xuICB2YXIgZ2VuZXJpYyA9IEhPVEtFWVNba2V5XTtcbiAgdmFyIGFwcGxlID0gQVBQTEVfSE9US0VZU1trZXldO1xuICB2YXIgd2luZG93cyA9IFdJTkRPV1NfSE9US0VZU1trZXldO1xuICB2YXIgaXNHZW5lcmljID0gZ2VuZXJpYyAmJiBpc0tleUhvdGtleShnZW5lcmljKTtcbiAgdmFyIGlzQXBwbGUgPSBhcHBsZSAmJiBpc0tleUhvdGtleShhcHBsZSk7XG4gIHZhciBpc1dpbmRvd3MgPSB3aW5kb3dzICYmIGlzS2V5SG90a2V5KHdpbmRvd3MpO1xuICByZXR1cm4gZXZlbnQgPT4ge1xuICAgIGlmIChpc0dlbmVyaWMgJiYgaXNHZW5lcmljKGV2ZW50KSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKElTX0FQUExFICYmIGlzQXBwbGUgJiYgaXNBcHBsZShldmVudCkpIHJldHVybiB0cnVlO1xuICAgIGlmICghSVNfQVBQTEUgJiYgaXNXaW5kb3dzICYmIGlzV2luZG93cyhldmVudCkpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbn07XG4vKipcclxuICogSG90a2V5cy5cclxuICovXG5cblxudmFyIEhvdGtleXMgPSB7XG4gIGlzQm9sZDogY3JlYXRlKCdib2xkJyksXG4gIGlzQ29tcG9zZTogY3JlYXRlKCdjb21wb3NlJyksXG4gIGlzTW92ZUJhY2t3YXJkOiBjcmVhdGUoJ21vdmVCYWNrd2FyZCcpLFxuICBpc01vdmVGb3J3YXJkOiBjcmVhdGUoJ21vdmVGb3J3YXJkJyksXG4gIGlzRGVsZXRlQmFja3dhcmQ6IGNyZWF0ZSgnZGVsZXRlQmFja3dhcmQnKSxcbiAgaXNEZWxldGVGb3J3YXJkOiBjcmVhdGUoJ2RlbGV0ZUZvcndhcmQnKSxcbiAgaXNEZWxldGVMaW5lQmFja3dhcmQ6IGNyZWF0ZSgnZGVsZXRlTGluZUJhY2t3YXJkJyksXG4gIGlzRGVsZXRlTGluZUZvcndhcmQ6IGNyZWF0ZSgnZGVsZXRlTGluZUZvcndhcmQnKSxcbiAgaXNEZWxldGVXb3JkQmFja3dhcmQ6IGNyZWF0ZSgnZGVsZXRlV29yZEJhY2t3YXJkJyksXG4gIGlzRGVsZXRlV29yZEZvcndhcmQ6IGNyZWF0ZSgnZGVsZXRlV29yZEZvcndhcmQnKSxcbiAgaXNFeHRlbmRCYWNrd2FyZDogY3JlYXRlKCdleHRlbmRCYWNrd2FyZCcpLFxuICBpc0V4dGVuZEZvcndhcmQ6IGNyZWF0ZSgnZXh0ZW5kRm9yd2FyZCcpLFxuICBpc0V4dGVuZExpbmVCYWNrd2FyZDogY3JlYXRlKCdleHRlbmRMaW5lQmFja3dhcmQnKSxcbiAgaXNFeHRlbmRMaW5lRm9yd2FyZDogY3JlYXRlKCdleHRlbmRMaW5lRm9yd2FyZCcpLFxuICBpc0l0YWxpYzogY3JlYXRlKCdpdGFsaWMnKSxcbiAgaXNNb3ZlTGluZUJhY2t3YXJkOiBjcmVhdGUoJ21vdmVMaW5lQmFja3dhcmQnKSxcbiAgaXNNb3ZlTGluZUZvcndhcmQ6IGNyZWF0ZSgnbW92ZUxpbmVGb3J3YXJkJyksXG4gIGlzTW92ZVdvcmRCYWNrd2FyZDogY3JlYXRlKCdtb3ZlV29yZEJhY2t3YXJkJyksXG4gIGlzTW92ZVdvcmRGb3J3YXJkOiBjcmVhdGUoJ21vdmVXb3JkRm9yd2FyZCcpLFxuICBpc1JlZG86IGNyZWF0ZSgncmVkbycpLFxuICBpc1NwbGl0QmxvY2s6IGNyZWF0ZSgnc3BsaXRCbG9jaycpLFxuICBpc1RyYW5zcG9zZUNoYXJhY3RlcjogY3JlYXRlKCd0cmFuc3Bvc2VDaGFyYWN0ZXInKSxcbiAgaXNVbmRvOiBjcmVhdGUoJ3VuZG8nKVxufTtcblxuLyoqXHJcbiAqIEEgUmVhY3QgY29udGV4dCBmb3Igc2hhcmluZyB0aGUgYHJlYWRPbmx5YCBzdGF0ZSBvZiB0aGUgZWRpdG9yLlxyXG4gKi9cblxudmFyIFJlYWRPbmx5Q29udGV4dCA9IC8qI19fUFVSRV9fKi9jcmVhdGVDb250ZXh0KGZhbHNlKTtcbi8qKlxyXG4gKiBHZXQgdGhlIGN1cnJlbnQgYHJlYWRPbmx5YCBzdGF0ZSBvZiB0aGUgZWRpdG9yLlxyXG4gKi9cblxudmFyIHVzZVJlYWRPbmx5ID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChSZWFkT25seUNvbnRleHQpO1xufTtcblxuLyoqXHJcbiAqIEEgUmVhY3QgY29udGV4dCBmb3Igc2hhcmluZyB0aGUgZWRpdG9yIG9iamVjdCwgaW4gYSB3YXkgdGhhdCByZS1yZW5kZXJzIHRoZVxyXG4gKiBjb250ZXh0IHdoZW5ldmVyIGNoYW5nZXMgb2NjdXIuXHJcbiAqL1xuXG52YXIgU2xhdGVDb250ZXh0ID0gLyojX19QVVJFX18qL2NyZWF0ZUNvbnRleHQobnVsbCk7XG4vKipcclxuICogR2V0IHRoZSBjdXJyZW50IGVkaXRvciBvYmplY3QgZnJvbSB0aGUgUmVhY3QgY29udGV4dC5cclxuICovXG5cbnZhciB1c2VTbGF0ZSA9ICgpID0+IHtcbiAgdmFyIGNvbnRleHQgPSB1c2VDb250ZXh0KFNsYXRlQ29udGV4dCk7XG5cbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGB1c2VTbGF0ZWAgaG9vayBtdXN0IGJlIHVzZWQgaW5zaWRlIHRoZSA8U2xhdGVQcm92aWRlcj4gY29tcG9uZW50J3MgY29udGV4dC5cIik7XG4gIH1cblxuICB2YXIgW2VkaXRvcl0gPSBjb250ZXh0O1xuICByZXR1cm4gZWRpdG9yO1xufTtcblxuLyoqXHJcbiAqIFR5cGVzLlxyXG4gKi9cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBob3N0IHdpbmRvdyBvZiBhIERPTSBub2RlXHJcbiAqL1xuXG52YXIgZ2V0RGVmYXVsdFZpZXcgPSB2YWx1ZSA9PiB7XG4gIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5vd25lckRvY3VtZW50ICYmIHZhbHVlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgbnVsbDtcbn07XG4vKipcclxuICogQ2hlY2sgaWYgYSBET00gbm9kZSBpcyBhIGNvbW1lbnQgbm9kZS5cclxuICovXG5cbnZhciBpc0RPTUNvbW1lbnQgPSB2YWx1ZSA9PiB7XG4gIHJldHVybiBpc0RPTU5vZGUodmFsdWUpICYmIHZhbHVlLm5vZGVUeXBlID09PSA4O1xufTtcbi8qKlxyXG4gKiBDaGVjayBpZiBhIERPTSBub2RlIGlzIGFuIGVsZW1lbnQgbm9kZS5cclxuICovXG5cbnZhciBpc0RPTUVsZW1lbnQgPSB2YWx1ZSA9PiB7XG4gIHJldHVybiBpc0RPTU5vZGUodmFsdWUpICYmIHZhbHVlLm5vZGVUeXBlID09PSAxO1xufTtcbi8qKlxyXG4gKiBDaGVjayBpZiBhIHZhbHVlIGlzIGEgRE9NIG5vZGUuXHJcbiAqL1xuXG52YXIgaXNET01Ob2RlID0gdmFsdWUgPT4ge1xuICB2YXIgd2luZG93ID0gZ2V0RGVmYXVsdFZpZXcodmFsdWUpO1xuICByZXR1cm4gISF3aW5kb3cgJiYgdmFsdWUgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZTtcbn07XG4vKipcclxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhIERPTSBzZWxlY3Rpb24uXHJcbiAqL1xuXG52YXIgaXNET01TZWxlY3Rpb24gPSB2YWx1ZSA9PiB7XG4gIHZhciB3aW5kb3cgPSB2YWx1ZSAmJiB2YWx1ZS5hbmNob3JOb2RlICYmIGdldERlZmF1bHRWaWV3KHZhbHVlLmFuY2hvck5vZGUpO1xuICByZXR1cm4gISF3aW5kb3cgJiYgdmFsdWUgaW5zdGFuY2VvZiB3aW5kb3cuU2VsZWN0aW9uO1xufTtcbi8qKlxyXG4gKiBDaGVjayBpZiBhIERPTSBub2RlIGlzIGFuIGVsZW1lbnQgbm9kZS5cclxuICovXG5cbnZhciBpc0RPTVRleHQgPSB2YWx1ZSA9PiB7XG4gIHJldHVybiBpc0RPTU5vZGUodmFsdWUpICYmIHZhbHVlLm5vZGVUeXBlID09PSAzO1xufTtcbi8qKlxyXG4gKiBDaGVja3Mgd2hldGhlciBhIHBhc3RlIGV2ZW50IGlzIGEgcGxhaW50ZXh0LW9ubHkgZXZlbnQuXHJcbiAqL1xuXG52YXIgaXNQbGFpblRleHRPbmx5UGFzdGUgPSBldmVudCA9PiB7XG4gIHJldHVybiBldmVudC5jbGlwYm9hcmREYXRhICYmIGV2ZW50LmNsaXBib2FyZERhdGEuZ2V0RGF0YSgndGV4dC9wbGFpbicpICE9PSAnJyAmJiBldmVudC5jbGlwYm9hcmREYXRhLnR5cGVzLmxlbmd0aCA9PT0gMTtcbn07XG4vKipcclxuICogTm9ybWFsaXplIGEgRE9NIHBvaW50IHNvIHRoYXQgaXQgYWx3YXlzIHJlZmVycyB0byBhIHRleHQgbm9kZS5cclxuICovXG5cbnZhciBub3JtYWxpemVET01Qb2ludCA9IGRvbVBvaW50ID0+IHtcbiAgdmFyIFtub2RlLCBvZmZzZXRdID0gZG9tUG9pbnQ7IC8vIElmIGl0J3MgYW4gZWxlbWVudCBub2RlLCBpdHMgb2Zmc2V0IHJlZmVycyB0byB0aGUgaW5kZXggb2YgaXRzIGNoaWxkcmVuXG4gIC8vIGluY2x1ZGluZyBjb21tZW50IG5vZGVzLCBzbyB0cnkgdG8gZmluZCB0aGUgcmlnaHQgdGV4dCBjaGlsZCBub2RlLlxuXG4gIGlmIChpc0RPTUVsZW1lbnQobm9kZSkgJiYgbm9kZS5jaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgIHZhciBpc0xhc3QgPSBvZmZzZXQgPT09IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7XG4gICAgdmFyIGluZGV4ID0gaXNMYXN0ID8gb2Zmc2V0IC0gMSA6IG9mZnNldDtcbiAgICBbbm9kZSwgaW5kZXhdID0gZ2V0RWRpdGFibGVDaGlsZEFuZEluZGV4KG5vZGUsIGluZGV4LCBpc0xhc3QgPyAnYmFja3dhcmQnIDogJ2ZvcndhcmQnKTsgLy8gSWYgdGhlIGVkaXRhYmxlIGNoaWxkIGZvdW5kIGlzIGluIGZyb250IG9mIGlucHV0IG9mZnNldCwgd2UgaW5zdGVhZCBzZWVrIHRvIGl0cyBlbmRcblxuICAgIGlzTGFzdCA9IGluZGV4IDwgb2Zmc2V0OyAvLyBJZiB0aGUgbm9kZSBoYXMgY2hpbGRyZW4sIHRyYXZlcnNlIHVudGlsIHdlIGhhdmUgYSBsZWFmIG5vZGUuIExlYWYgbm9kZXNcbiAgICAvLyBjYW4gYmUgZWl0aGVyIHRleHQgbm9kZXMsIG9yIG90aGVyIHZvaWQgRE9NIG5vZGVzLlxuXG4gICAgd2hpbGUgKGlzRE9NRWxlbWVudChub2RlKSAmJiBub2RlLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICB2YXIgaSA9IGlzTGFzdCA/IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGggLSAxIDogMDtcbiAgICAgIG5vZGUgPSBnZXRFZGl0YWJsZUNoaWxkKG5vZGUsIGksIGlzTGFzdCA/ICdiYWNrd2FyZCcgOiAnZm9yd2FyZCcpO1xuICAgIH0gLy8gRGV0ZXJtaW5lIHRoZSBuZXcgb2Zmc2V0IGluc2lkZSB0aGUgdGV4dCBub2RlLlxuXG5cbiAgICBvZmZzZXQgPSBpc0xhc3QgJiYgbm9kZS50ZXh0Q29udGVudCAhPSBudWxsID8gbm9kZS50ZXh0Q29udGVudC5sZW5ndGggOiAwO1xuICB9IC8vIFJldHVybiB0aGUgbm9kZSBhbmQgb2Zmc2V0LlxuXG5cbiAgcmV0dXJuIFtub2RlLCBvZmZzZXRdO1xufTtcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdldGhlciB0aGUgYWN0aXZlIGVsZW1lbnQgaXMgbmVzdGVkIHdpdGhpbiBhIHNoYWRvd1Jvb3RcclxuICovXG5cbnZhciBoYXNTaGFkb3dSb290ID0gKCkgPT4ge1xuICByZXR1cm4gISEod2luZG93LmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuc2hhZG93Um9vdCk7XG59O1xuLyoqXHJcbiAqIEdldCB0aGUgbmVhcmVzdCBlZGl0YWJsZSBjaGlsZCBhbmQgaW5kZXggYXQgYGluZGV4YCBpbiBhIGBwYXJlbnRgLCBwcmVmZXJyaW5nXHJcbiAqIGBkaXJlY3Rpb25gLlxyXG4gKi9cblxudmFyIGdldEVkaXRhYmxlQ2hpbGRBbmRJbmRleCA9IChwYXJlbnQsIGluZGV4LCBkaXJlY3Rpb24pID0+IHtcbiAgdmFyIHtcbiAgICBjaGlsZE5vZGVzXG4gIH0gPSBwYXJlbnQ7XG4gIHZhciBjaGlsZCA9IGNoaWxkTm9kZXNbaW5kZXhdO1xuICB2YXIgaSA9IGluZGV4O1xuICB2YXIgdHJpZWRGb3J3YXJkID0gZmFsc2U7XG4gIHZhciB0cmllZEJhY2t3YXJkID0gZmFsc2U7IC8vIFdoaWxlIHRoZSBjaGlsZCBpcyBhIGNvbW1lbnQgbm9kZSwgb3IgYW4gZWxlbWVudCBub2RlIHdpdGggbm8gY2hpbGRyZW4sXG4gIC8vIGtlZXAgaXRlcmF0aW5nIHRvIGZpbmQgYSBzaWJsaW5nIG5vbi12b2lkLCBub24tY29tbWVudCBub2RlLlxuXG4gIHdoaWxlIChpc0RPTUNvbW1lbnQoY2hpbGQpIHx8IGlzRE9NRWxlbWVudChjaGlsZCkgJiYgY2hpbGQuY2hpbGROb2Rlcy5sZW5ndGggPT09IDAgfHwgaXNET01FbGVtZW50KGNoaWxkKSAmJiBjaGlsZC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpID09PSAnZmFsc2UnKSB7XG4gICAgaWYgKHRyaWVkRm9yd2FyZCAmJiB0cmllZEJhY2t3YXJkKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoaSA+PSBjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgdHJpZWRGb3J3YXJkID0gdHJ1ZTtcbiAgICAgIGkgPSBpbmRleCAtIDE7XG4gICAgICBkaXJlY3Rpb24gPSAnYmFja3dhcmQnO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICB0cmllZEJhY2t3YXJkID0gdHJ1ZTtcbiAgICAgIGkgPSBpbmRleCArIDE7XG4gICAgICBkaXJlY3Rpb24gPSAnZm9yd2FyZCc7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBjaGlsZCA9IGNoaWxkTm9kZXNbaV07XG4gICAgaW5kZXggPSBpO1xuICAgIGkgKz0gZGlyZWN0aW9uID09PSAnZm9yd2FyZCcgPyAxIDogLTE7XG4gIH1cblxuICByZXR1cm4gW2NoaWxkLCBpbmRleF07XG59O1xuLyoqXHJcbiAqIEdldCB0aGUgbmVhcmVzdCBlZGl0YWJsZSBjaGlsZCBhdCBgaW5kZXhgIGluIGEgYHBhcmVudGAsIHByZWZlcnJpbmdcclxuICogYGRpcmVjdGlvbmAuXHJcbiAqL1xuXG52YXIgZ2V0RWRpdGFibGVDaGlsZCA9IChwYXJlbnQsIGluZGV4LCBkaXJlY3Rpb24pID0+IHtcbiAgdmFyIFtjaGlsZF0gPSBnZXRFZGl0YWJsZUNoaWxkQW5kSW5kZXgocGFyZW50LCBpbmRleCwgZGlyZWN0aW9uKTtcbiAgcmV0dXJuIGNoaWxkO1xufTtcbi8qKlxyXG4gKiBHZXQgYSBwbGFpbnRleHQgcmVwcmVzZW50YXRpb24gb2YgdGhlIGNvbnRlbnQgb2YgYSBub2RlLCBhY2NvdW50aW5nIGZvciBibG9ja1xyXG4gKiBlbGVtZW50cyB3aGljaCBnZXQgYSBuZXdsaW5lIGFwcGVuZGVkLlxyXG4gKlxyXG4gKiBUaGUgZG9tTm9kZSBtdXN0IGJlIGF0dGFjaGVkIHRvIHRoZSBET00uXHJcbiAqL1xuXG52YXIgZ2V0UGxhaW5UZXh0ID0gZG9tTm9kZSA9PiB7XG4gIHZhciB0ZXh0ID0gJyc7XG5cbiAgaWYgKGlzRE9NVGV4dChkb21Ob2RlKSAmJiBkb21Ob2RlLm5vZGVWYWx1ZSkge1xuICAgIHJldHVybiBkb21Ob2RlLm5vZGVWYWx1ZTtcbiAgfVxuXG4gIGlmIChpc0RPTUVsZW1lbnQoZG9tTm9kZSkpIHtcbiAgICBmb3IgKHZhciBjaGlsZE5vZGUgb2YgQXJyYXkuZnJvbShkb21Ob2RlLmNoaWxkTm9kZXMpKSB7XG4gICAgICB0ZXh0ICs9IGdldFBsYWluVGV4dChjaGlsZE5vZGUpO1xuICAgIH1cblxuICAgIHZhciBkaXNwbGF5ID0gZ2V0Q29tcHV0ZWRTdHlsZShkb21Ob2RlKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5Jyk7XG5cbiAgICBpZiAoZGlzcGxheSA9PT0gJ2Jsb2NrJyB8fCBkaXNwbGF5ID09PSAnbGlzdCcgfHwgZG9tTm9kZS50YWdOYW1lID09PSAnQlInKSB7XG4gICAgICB0ZXh0ICs9ICdcXG4nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXh0O1xufTtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBDaGlsZHJlbiA9IHByb3BzID0+IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCB1c2VDaGlsZHJlbihwcm9wcykpO1xuLyoqXHJcbiAqIEVkaXRhYmxlLlxyXG4gKi9cblxuXG52YXIgRWRpdGFibGUgPSBwcm9wcyA9PiB7XG4gIHZhciB7XG4gICAgYXV0b0ZvY3VzLFxuICAgIGRlY29yYXRlID0gZGVmYXVsdERlY29yYXRlLFxuICAgIG9uRE9NQmVmb3JlSW5wdXQ6IHByb3BzT25ET01CZWZvcmVJbnB1dCxcbiAgICBwbGFjZWhvbGRlcixcbiAgICByZWFkT25seSA9IGZhbHNlLFxuICAgIHJlbmRlckVsZW1lbnQsXG4gICAgcmVuZGVyTGVhZixcbiAgICByZW5kZXJQbGFjZWhvbGRlciA9IHByb3BzID0+IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERlZmF1bHRQbGFjZWhvbGRlciwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKSxcbiAgICBzY3JvbGxTZWxlY3Rpb25JbnRvVmlldyA9IGRlZmF1bHRTY3JvbGxTZWxlY3Rpb25JbnRvVmlldyxcbiAgICBzdHlsZSA9IHt9LFxuICAgIGFzOiBDb21wb25lbnQgPSAnZGl2J1xuICB9ID0gcHJvcHMsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJhdXRvRm9jdXNcIiwgXCJkZWNvcmF0ZVwiLCBcIm9uRE9NQmVmb3JlSW5wdXRcIiwgXCJwbGFjZWhvbGRlclwiLCBcInJlYWRPbmx5XCIsIFwicmVuZGVyRWxlbWVudFwiLCBcInJlbmRlckxlYWZcIiwgXCJyZW5kZXJQbGFjZWhvbGRlclwiLCBcInNjcm9sbFNlbGVjdGlvbkludG9WaWV3XCIsIFwic3R5bGVcIiwgXCJhc1wiXSk7XG5cbiAgdmFyIGVkaXRvciA9IHVzZVNsYXRlKCk7IC8vIFJlcmVuZGVyIGVkaXRvciB3aGVuIGNvbXBvc2l0aW9uIHN0YXR1cyBjaGFuZ2VkXG5cbiAgdmFyIFtpc0NvbXBvc2luZywgc2V0SXNDb21wb3NpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICB2YXIgcmVmID0gdXNlUmVmKG51bGwpOyAvLyBVcGRhdGUgaW50ZXJuYWwgc3RhdGUgb24gZWFjaCByZW5kZXIuXG5cbiAgSVNfUkVBRF9PTkxZLnNldChlZGl0b3IsIHJlYWRPbmx5KTsgLy8gS2VlcCB0cmFjayBvZiBzb21lIHN0YXRlIGZvciB0aGUgZXZlbnQgaGFuZGxlciBsb2dpYy5cblxuICB2YXIgc3RhdGUgPSB1c2VNZW1vKCgpID0+ICh7XG4gICAgaXNDb21wb3Npbmc6IGZhbHNlLFxuICAgIGlzRHJhZ2dpbmdJbnRlcm5hbGx5OiBmYWxzZSxcbiAgICBpc1VwZGF0aW5nU2VsZWN0aW9uOiBmYWxzZSxcbiAgICBsYXRlc3RFbGVtZW50OiBudWxsXG4gIH0pLCBbXSk7IC8vIFdoZW5ldmVyIHRoZSBlZGl0b3IgdXBkYXRlcy4uLlxuXG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFVwZGF0ZSBlbGVtZW50LXJlbGF0ZWQgd2VhayBtYXBzIHdpdGggdGhlIERPTSBlbGVtZW50IHJlZi5cbiAgICB2YXIgd2luZG93O1xuXG4gICAgaWYgKHJlZi5jdXJyZW50ICYmICh3aW5kb3cgPSBnZXREZWZhdWx0VmlldyhyZWYuY3VycmVudCkpKSB7XG4gICAgICBFRElUT1JfVE9fV0lORE9XLnNldChlZGl0b3IsIHdpbmRvdyk7XG4gICAgICBFRElUT1JfVE9fRUxFTUVOVC5zZXQoZWRpdG9yLCByZWYuY3VycmVudCk7XG4gICAgICBOT0RFX1RPX0VMRU1FTlQuc2V0KGVkaXRvciwgcmVmLmN1cnJlbnQpO1xuICAgICAgRUxFTUVOVF9UT19OT0RFLnNldChyZWYuY3VycmVudCwgZWRpdG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTk9ERV9UT19FTEVNRU5ULmRlbGV0ZShlZGl0b3IpO1xuICAgIH0gLy8gTWFrZSBzdXJlIHRoZSBET00gc2VsZWN0aW9uIHN0YXRlIGlzIGluIHN5bmMuXG5cblxuICAgIHZhciB7XG4gICAgICBzZWxlY3Rpb25cbiAgICB9ID0gZWRpdG9yO1xuICAgIHZhciByb290ID0gUmVhY3RFZGl0b3IuZmluZERvY3VtZW50T3JTaGFkb3dSb290KGVkaXRvcik7XG4gICAgdmFyIGRvbVNlbGVjdGlvbiA9IHJvb3QuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgICBpZiAoc3RhdGUuaXNDb21wb3NpbmcgfHwgIWRvbVNlbGVjdGlvbiB8fCAhUmVhY3RFZGl0b3IuaXNGb2N1c2VkKGVkaXRvcikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaGFzRG9tU2VsZWN0aW9uID0gZG9tU2VsZWN0aW9uLnR5cGUgIT09ICdOb25lJzsgLy8gSWYgdGhlIERPTSBzZWxlY3Rpb24gaXMgcHJvcGVybHkgdW5zZXQsIHdlJ3JlIGRvbmUuXG5cbiAgICBpZiAoIXNlbGVjdGlvbiAmJiAhaGFzRG9tU2VsZWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyB2ZXJpZnkgdGhhdCB0aGUgZG9tIHNlbGVjdGlvbiBpcyBpbiB0aGUgZWRpdG9yXG5cblxuICAgIHZhciBlZGl0b3JFbGVtZW50ID0gRURJVE9SX1RPX0VMRU1FTlQuZ2V0KGVkaXRvcik7XG4gICAgdmFyIGhhc0RvbVNlbGVjdGlvbkluRWRpdG9yID0gZmFsc2U7XG5cbiAgICBpZiAoZWRpdG9yRWxlbWVudC5jb250YWlucyhkb21TZWxlY3Rpb24uYW5jaG9yTm9kZSkgJiYgZWRpdG9yRWxlbWVudC5jb250YWlucyhkb21TZWxlY3Rpb24uZm9jdXNOb2RlKSkge1xuICAgICAgaGFzRG9tU2VsZWN0aW9uSW5FZGl0b3IgPSB0cnVlO1xuICAgIH0gLy8gSWYgdGhlIERPTSBzZWxlY3Rpb24gaXMgaW4gdGhlIGVkaXRvciBhbmQgdGhlIGVkaXRvciBzZWxlY3Rpb24gaXMgYWxyZWFkeSBjb3JyZWN0LCB3ZSdyZSBkb25lLlxuXG5cbiAgICBpZiAoaGFzRG9tU2VsZWN0aW9uICYmIGhhc0RvbVNlbGVjdGlvbkluRWRpdG9yICYmIHNlbGVjdGlvbikge1xuICAgICAgdmFyIHNsYXRlUmFuZ2UgPSBSZWFjdEVkaXRvci50b1NsYXRlUmFuZ2UoZWRpdG9yLCBkb21TZWxlY3Rpb24sIHtcbiAgICAgICAgZXhhY3RNYXRjaDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzbGF0ZVJhbmdlICYmIFJhbmdlLmVxdWFscyhzbGF0ZVJhbmdlLCBzZWxlY3Rpb24pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IC8vIHdoZW4gPEVkaXRhYmxlLz4gaXMgYmVpbmcgY29udHJvbGxlZCB0aHJvdWdoIGV4dGVybmFsIHZhbHVlXG4gICAgLy8gdGhlbiBpdHMgY2hpbGRyZW4gbWlnaHQganVzdCBjaGFuZ2UgLSBET00gcmVzcG9uZHMgdG8gaXQgb24gaXRzIG93blxuICAgIC8vIGJ1dCBTbGF0ZSdzIHZhbHVlIGlzIG5vdCBiZWluZyB1cGRhdGVkIHRocm91Z2ggYW55IG9wZXJhdGlvblxuICAgIC8vIGFuZCB0aHVzIGl0IGRvZXNuJ3QgdHJhbnNmb3JtIHNlbGVjdGlvbiBvbiBpdHMgb3duXG5cblxuICAgIGlmIChzZWxlY3Rpb24gJiYgIVJlYWN0RWRpdG9yLmhhc1JhbmdlKGVkaXRvciwgc2VsZWN0aW9uKSkge1xuICAgICAgZWRpdG9yLnNlbGVjdGlvbiA9IFJlYWN0RWRpdG9yLnRvU2xhdGVSYW5nZShlZGl0b3IsIGRvbVNlbGVjdGlvbiwge1xuICAgICAgICBleGFjdE1hdGNoOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBPdGhlcndpc2UgdGhlIERPTSBzZWxlY3Rpb24gaXMgb3V0IG9mIHN5bmMsIHNvIHVwZGF0ZSBpdC5cblxuXG4gICAgc3RhdGUuaXNVcGRhdGluZ1NlbGVjdGlvbiA9IHRydWU7XG4gICAgdmFyIG5ld0RvbVJhbmdlID0gc2VsZWN0aW9uICYmIFJlYWN0RWRpdG9yLnRvRE9NUmFuZ2UoZWRpdG9yLCBzZWxlY3Rpb24pO1xuXG4gICAgaWYgKG5ld0RvbVJhbmdlKSB7XG4gICAgICBpZiAoUmFuZ2UuaXNCYWNrd2FyZChzZWxlY3Rpb24pKSB7XG4gICAgICAgIGRvbVNlbGVjdGlvbi5zZXRCYXNlQW5kRXh0ZW50KG5ld0RvbVJhbmdlLmVuZENvbnRhaW5lciwgbmV3RG9tUmFuZ2UuZW5kT2Zmc2V0LCBuZXdEb21SYW5nZS5zdGFydENvbnRhaW5lciwgbmV3RG9tUmFuZ2Uuc3RhcnRPZmZzZXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9tU2VsZWN0aW9uLnNldEJhc2VBbmRFeHRlbnQobmV3RG9tUmFuZ2Uuc3RhcnRDb250YWluZXIsIG5ld0RvbVJhbmdlLnN0YXJ0T2Zmc2V0LCBuZXdEb21SYW5nZS5lbmRDb250YWluZXIsIG5ld0RvbVJhbmdlLmVuZE9mZnNldCk7XG4gICAgICB9XG5cbiAgICAgIHNjcm9sbFNlbGVjdGlvbkludG9WaWV3KGVkaXRvciwgbmV3RG9tUmFuZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb21TZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBDT01QQVQ6IEluIEZpcmVmb3gsIGl0J3Mgbm90IGVub3VnaCB0byBjcmVhdGUgYSByYW5nZSwgeW91IGFsc28gbmVlZFxuICAgICAgLy8gdG8gZm9jdXMgdGhlIGNvbnRlbnRlZGl0YWJsZSBlbGVtZW50IHRvby4gKDIwMTYvMTEvMTYpXG4gICAgICBpZiAobmV3RG9tUmFuZ2UgJiYgSVNfRklSRUZPWCkge1xuICAgICAgICB2YXIgZWwgPSBSZWFjdEVkaXRvci50b0RPTU5vZGUoZWRpdG9yLCBlZGl0b3IpO1xuICAgICAgICBlbC5mb2N1cygpO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZS5pc1VwZGF0aW5nU2VsZWN0aW9uID0gZmFsc2U7XG4gICAgfSk7XG4gIH0pOyAvLyBUaGUgYXV0b0ZvY3VzIFRleHRhcmVhSFRNTEF0dHJpYnV0ZSBkb2Vzbid0IGRvIGFueXRoaW5nIG9uIGEgZGl2LCBzbyBpdFxuICAvLyBuZWVkcyB0byBiZSBtYW51YWxseSBmb2N1c2VkLlxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlZi5jdXJyZW50ICYmIGF1dG9Gb2N1cykge1xuICAgICAgcmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICB9XG4gIH0sIFthdXRvRm9jdXNdKTsgLy8gTGlzdGVuIG9uIHRoZSBuYXRpdmUgYGJlZm9yZWlucHV0YCBldmVudCB0byBnZXQgcmVhbCBcIkxldmVsIDJcIiBldmVudHMuIFRoaXNcbiAgLy8gaXMgcmVxdWlyZWQgYmVjYXVzZSBSZWFjdCdzIGBiZWZvcmVpbnB1dGAgaXMgZmFrZSBhbmQgbmV2ZXIgcmVhbGx5IGF0dGFjaGVzXG4gIC8vIHRvIHRoZSByZWFsIGV2ZW50IHNhZGx5LiAoMjAxOS8xMS8wMSlcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMTIxMVxuXG4gIHZhciBvbkRPTUJlZm9yZUlucHV0ID0gdXNlQ2FsbGJhY2soZXZlbnQgPT4ge1xuICAgIGlmICghcmVhZE9ubHkgJiYgaGFzRWRpdGFibGVUYXJnZXQoZWRpdG9yLCBldmVudC50YXJnZXQpICYmICFpc0RPTUV2ZW50SGFuZGxlZChldmVudCwgcHJvcHNPbkRPTUJlZm9yZUlucHV0KSkge1xuICAgICAgdmFyIHtcbiAgICAgICAgc2VsZWN0aW9uXG4gICAgICB9ID0gZWRpdG9yO1xuICAgICAgdmFyIHtcbiAgICAgICAgaW5wdXRUeXBlOiB0eXBlXG4gICAgICB9ID0gZXZlbnQ7XG4gICAgICB2YXIgZGF0YSA9IGV2ZW50LmRhdGFUcmFuc2ZlciB8fCBldmVudC5kYXRhIHx8IHVuZGVmaW5lZDsgLy8gVGhlc2UgdHdvIHR5cGVzIG9jY3VyIHdoaWxlIGEgdXNlciBpcyBjb21wb3NpbmcgdGV4dCBhbmQgY2FuJ3QgYmVcbiAgICAgIC8vIGNhbmNlbGxlZC4gTGV0IHRoZW0gdGhyb3VnaCBhbmQgd2FpdCBmb3IgdGhlIGNvbXBvc2l0aW9uIHRvIGVuZC5cblxuICAgICAgaWYgKHR5cGUgPT09ICdpbnNlcnRDb21wb3NpdGlvblRleHQnIHx8IHR5cGUgPT09ICdkZWxldGVDb21wb3NpdGlvblRleHQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gQ09NUEFUOiBGb3IgdGhlIGRlbGV0aW5nIGZvcndhcmQvYmFja3dhcmQgaW5wdXQgdHlwZXMgd2UgZG9uJ3Qgd2FudFxuICAgICAgLy8gdG8gY2hhbmdlIHRoZSBzZWxlY3Rpb24gYmVjYXVzZSBpdCBpcyB0aGUgcmFuZ2UgdGhhdCB3aWxsIGJlIGRlbGV0ZWQsXG4gICAgICAvLyBhbmQgdGhvc2UgY29tbWFuZHMgZGV0ZXJtaW5lIHRoYXQgZm9yIHRoZW1zZWx2ZXMuXG5cbiAgICAgIGlmICghdHlwZS5zdGFydHNXaXRoKCdkZWxldGUnKSB8fCB0eXBlLnN0YXJ0c1dpdGgoJ2RlbGV0ZUJ5JykpIHtcbiAgICAgICAgdmFyIFt0YXJnZXRSYW5nZV0gPSBldmVudC5nZXRUYXJnZXRSYW5nZXMoKTtcblxuICAgICAgICBpZiAodGFyZ2V0UmFuZ2UpIHtcbiAgICAgICAgICB2YXIgcmFuZ2UgPSBSZWFjdEVkaXRvci50b1NsYXRlUmFuZ2UoZWRpdG9yLCB0YXJnZXRSYW5nZSwge1xuICAgICAgICAgICAgZXhhY3RNYXRjaDogZmFsc2VcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmICghc2VsZWN0aW9uIHx8ICFSYW5nZS5lcXVhbHMoc2VsZWN0aW9uLCByYW5nZSkpIHtcbiAgICAgICAgICAgIFRyYW5zZm9ybXMuc2VsZWN0KGVkaXRvciwgcmFuZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSAvLyBDT01QQVQ6IElmIHRoZSBzZWxlY3Rpb24gaXMgZXhwYW5kZWQsIGV2ZW4gaWYgdGhlIGNvbW1hbmQgc2VlbXMgbGlrZVxuICAgICAgLy8gYSBkZWxldGUgZm9yd2FyZC9iYWNrd2FyZCBjb21tYW5kIGl0IHNob3VsZCBkZWxldGUgdGhlIHNlbGVjdGlvbi5cblxuXG4gICAgICBpZiAoc2VsZWN0aW9uICYmIFJhbmdlLmlzRXhwYW5kZWQoc2VsZWN0aW9uKSAmJiB0eXBlLnN0YXJ0c1dpdGgoJ2RlbGV0ZScpKSB7XG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSB0eXBlLmVuZHNXaXRoKCdCYWNrd2FyZCcpID8gJ2JhY2t3YXJkJyA6ICdmb3J3YXJkJztcbiAgICAgICAgRWRpdG9yLmRlbGV0ZUZyYWdtZW50KGVkaXRvciwge1xuICAgICAgICAgIGRpcmVjdGlvblxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnZGVsZXRlQnlDb21wb3NpdGlvbic6XG4gICAgICAgIGNhc2UgJ2RlbGV0ZUJ5Q3V0JzpcbiAgICAgICAgY2FzZSAnZGVsZXRlQnlEcmFnJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBFZGl0b3IuZGVsZXRlRnJhZ21lbnQoZWRpdG9yKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdkZWxldGVDb250ZW50JzpcbiAgICAgICAgY2FzZSAnZGVsZXRlQ29udGVudEZvcndhcmQnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEVkaXRvci5kZWxldGVGb3J3YXJkKGVkaXRvcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnZGVsZXRlQ29udGVudEJhY2t3YXJkJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBFZGl0b3IuZGVsZXRlQmFja3dhcmQoZWRpdG9yKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdkZWxldGVFbnRpcmVTb2Z0TGluZSc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgRWRpdG9yLmRlbGV0ZUJhY2t3YXJkKGVkaXRvciwge1xuICAgICAgICAgICAgICB1bml0OiAnbGluZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgRWRpdG9yLmRlbGV0ZUZvcndhcmQoZWRpdG9yLCB7XG4gICAgICAgICAgICAgIHVuaXQ6ICdsaW5lJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnZGVsZXRlSGFyZExpbmVCYWNrd2FyZCc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgRWRpdG9yLmRlbGV0ZUJhY2t3YXJkKGVkaXRvciwge1xuICAgICAgICAgICAgICB1bml0OiAnYmxvY2snXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdkZWxldGVTb2Z0TGluZUJhY2t3YXJkJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBFZGl0b3IuZGVsZXRlQmFja3dhcmQoZWRpdG9yLCB7XG4gICAgICAgICAgICAgIHVuaXQ6ICdsaW5lJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnZGVsZXRlSGFyZExpbmVGb3J3YXJkJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBFZGl0b3IuZGVsZXRlRm9yd2FyZChlZGl0b3IsIHtcbiAgICAgICAgICAgICAgdW5pdDogJ2Jsb2NrJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnZGVsZXRlU29mdExpbmVGb3J3YXJkJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBFZGl0b3IuZGVsZXRlRm9yd2FyZChlZGl0b3IsIHtcbiAgICAgICAgICAgICAgdW5pdDogJ2xpbmUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdkZWxldGVXb3JkQmFja3dhcmQnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEVkaXRvci5kZWxldGVCYWNrd2FyZChlZGl0b3IsIHtcbiAgICAgICAgICAgICAgdW5pdDogJ3dvcmQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdkZWxldGVXb3JkRm9yd2FyZCc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgRWRpdG9yLmRlbGV0ZUZvcndhcmQoZWRpdG9yLCB7XG4gICAgICAgICAgICAgIHVuaXQ6ICd3b3JkJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnaW5zZXJ0TGluZUJyZWFrJzpcbiAgICAgICAgY2FzZSAnaW5zZXJ0UGFyYWdyYXBoJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBFZGl0b3IuaW5zZXJ0QnJlYWsoZWRpdG9yKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdpbnNlcnRGcm9tQ29tcG9zaXRpb24nOlxuICAgICAgICBjYXNlICdpbnNlcnRGcm9tRHJvcCc6XG4gICAgICAgIGNhc2UgJ2luc2VydEZyb21QYXN0ZSc6XG4gICAgICAgIGNhc2UgJ2luc2VydEZyb21ZYW5rJzpcbiAgICAgICAgY2FzZSAnaW5zZXJ0UmVwbGFjZW1lbnRUZXh0JzpcbiAgICAgICAgY2FzZSAnaW5zZXJ0VGV4dCc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnNlcnRGcm9tQ29tcG9zaXRpb24nKSB7XG4gICAgICAgICAgICAgIC8vIENPTVBBVDogaW4gU2FmYXJpLCBgY29tcG9zaXRpb25lbmRgIGlzIGRpc3BhdGNoZWQgYWZ0ZXIgdGhlXG4gICAgICAgICAgICAgIC8vIGBiZWZvcmVpbnB1dGAgZm9yIFwiaW5zZXJ0RnJvbUNvbXBvc2l0aW9uXCIuIEJ1dCBpZiB3ZSB3YWl0IGZvciBpdFxuICAgICAgICAgICAgICAvLyB0aGVuIHdlIHdpbGwgYWJvcnQgYmVjYXVzZSB3ZSdyZSBzdGlsbCBjb21wb3NpbmcgYW5kIHRoZSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgLy8gd29uJ3QgYmUgdXBkYXRlZCBwcm9wZXJseS5cbiAgICAgICAgICAgICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL2lucHV0LWV2ZW50cy0yL1xuICAgICAgICAgICAgICBzdGF0ZS5pc0NvbXBvc2luZyAmJiBzZXRJc0NvbXBvc2luZyhmYWxzZSk7XG4gICAgICAgICAgICAgIHN0YXRlLmlzQ29tcG9zaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB3aW5kb3cgPSBSZWFjdEVkaXRvci5nZXRXaW5kb3coZWRpdG9yKTtcblxuICAgICAgICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiB3aW5kb3cuRGF0YVRyYW5zZmVyKSB7XG4gICAgICAgICAgICAgIFJlYWN0RWRpdG9yLmluc2VydERhdGEoZWRpdG9yLCBkYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIEVkaXRvci5pbnNlcnRUZXh0KGVkaXRvciwgZGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIFtyZWFkT25seSwgcHJvcHNPbkRPTUJlZm9yZUlucHV0XSk7IC8vIEF0dGFjaCBhIG5hdGl2ZSBET00gZXZlbnQgaGFuZGxlciBmb3IgYGJlZm9yZWlucHV0YCBldmVudHMsIGJlY2F1c2UgUmVhY3Qnc1xuICAvLyBidWlsdC1pbiBgb25CZWZvcmVJbnB1dGAgaXMgYWN0dWFsbHkgYSBsZWFreSBwb2x5ZmlsbCB0aGF0IGRvZXNuJ3QgZXhwb3NlXG4gIC8vIHJlYWwgYGJlZm9yZWlucHV0YCBldmVudHMgc2FkbHkuLi4gKDIwMTkvMTEvMDQpXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTEyMTFcblxuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmVmLmN1cnJlbnQgJiYgSEFTX0JFRk9SRV9JTlBVVF9TVVBQT1JUKSB7XG4gICAgICAvLyBAdHMtaWdub3JlIFRoZSBgYmVmb3JlaW5wdXRgIGV2ZW50IGlzbid0IHJlY29nbml6ZWQuXG4gICAgICByZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmVpbnB1dCcsIG9uRE9NQmVmb3JlSW5wdXQpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAocmVmLmN1cnJlbnQgJiYgSEFTX0JFRk9SRV9JTlBVVF9TVVBQT1JUKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgVGhlIGBiZWZvcmVpbnB1dGAgZXZlbnQgaXNuJ3QgcmVjb2duaXplZC5cbiAgICAgICAgcmVmLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmVmb3JlaW5wdXQnLCBvbkRPTUJlZm9yZUlucHV0KTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbb25ET01CZWZvcmVJbnB1dF0pOyAvLyBMaXN0ZW4gb24gdGhlIG5hdGl2ZSBgc2VsZWN0aW9uY2hhbmdlYCBldmVudCB0byBiZSBhYmxlIHRvIHVwZGF0ZSBhbnkgdGltZVxuICAvLyB0aGUgc2VsZWN0aW9uIGNoYW5nZXMuIFRoaXMgaXMgcmVxdWlyZWQgYmVjYXVzZSBSZWFjdCdzIGBvblNlbGVjdGAgaXMgbGVha3lcbiAgLy8gYW5kIG5vbi1zdGFuZGFyZCBzbyBpdCBkb2Vzbid0IGZpcmUgdW50aWwgYWZ0ZXIgYSBzZWxlY3Rpb24gaGFzIGJlZW5cbiAgLy8gcmVsZWFzZWQuIFRoaXMgY2F1c2VzIGlzc3VlcyBpbiBzaXR1YXRpb25zIHdoZXJlIGFub3RoZXIgY2hhbmdlIGhhcHBlbnNcbiAgLy8gd2hpbGUgYSBzZWxlY3Rpb24gaXMgYmVpbmcgZHJhZ2dlZC5cblxuICB2YXIgb25ET01TZWxlY3Rpb25DaGFuZ2UgPSB1c2VDYWxsYmFjayh0aHJvdHRsZSgoKSA9PiB7XG4gICAgaWYgKCFyZWFkT25seSAmJiAhc3RhdGUuaXNDb21wb3NpbmcgJiYgIXN0YXRlLmlzVXBkYXRpbmdTZWxlY3Rpb24gJiYgIXN0YXRlLmlzRHJhZ2dpbmdJbnRlcm5hbGx5KSB7XG4gICAgICB2YXIgcm9vdCA9IFJlYWN0RWRpdG9yLmZpbmREb2N1bWVudE9yU2hhZG93Um9vdChlZGl0b3IpO1xuICAgICAgdmFyIHtcbiAgICAgICAgYWN0aXZlRWxlbWVudFxuICAgICAgfSA9IHJvb3Q7XG4gICAgICB2YXIgZWwgPSBSZWFjdEVkaXRvci50b0RPTU5vZGUoZWRpdG9yLCBlZGl0b3IpO1xuICAgICAgdmFyIGRvbVNlbGVjdGlvbiA9IHJvb3QuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgICAgIGlmIChhY3RpdmVFbGVtZW50ID09PSBlbCkge1xuICAgICAgICBzdGF0ZS5sYXRlc3RFbGVtZW50ID0gYWN0aXZlRWxlbWVudDtcbiAgICAgICAgSVNfRk9DVVNFRC5zZXQoZWRpdG9yLCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIElTX0ZPQ1VTRUQuZGVsZXRlKGVkaXRvcik7XG4gICAgICB9XG5cbiAgICAgIGlmICghZG9tU2VsZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBUcmFuc2Zvcm1zLmRlc2VsZWN0KGVkaXRvcik7XG4gICAgICB9XG5cbiAgICAgIHZhciB7XG4gICAgICAgIGFuY2hvck5vZGUsXG4gICAgICAgIGZvY3VzTm9kZVxuICAgICAgfSA9IGRvbVNlbGVjdGlvbjtcbiAgICAgIHZhciBhbmNob3JOb2RlU2VsZWN0YWJsZSA9IGhhc0VkaXRhYmxlVGFyZ2V0KGVkaXRvciwgYW5jaG9yTm9kZSkgfHwgaXNUYXJnZXRJbnNpZGVWb2lkKGVkaXRvciwgYW5jaG9yTm9kZSk7XG4gICAgICB2YXIgZm9jdXNOb2RlU2VsZWN0YWJsZSA9IGhhc0VkaXRhYmxlVGFyZ2V0KGVkaXRvciwgZm9jdXNOb2RlKSB8fCBpc1RhcmdldEluc2lkZVZvaWQoZWRpdG9yLCBmb2N1c05vZGUpO1xuXG4gICAgICBpZiAoYW5jaG9yTm9kZVNlbGVjdGFibGUgJiYgZm9jdXNOb2RlU2VsZWN0YWJsZSkge1xuICAgICAgICB2YXIgcmFuZ2UgPSBSZWFjdEVkaXRvci50b1NsYXRlUmFuZ2UoZWRpdG9yLCBkb21TZWxlY3Rpb24sIHtcbiAgICAgICAgICBleGFjdE1hdGNoOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgVHJhbnNmb3Jtcy5zZWxlY3QoZWRpdG9yLCByYW5nZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBUcmFuc2Zvcm1zLmRlc2VsZWN0KGVkaXRvcik7XG4gICAgICB9XG4gICAgfVxuICB9LCAxMDApLCBbcmVhZE9ubHldKTsgLy8gQXR0YWNoIGEgbmF0aXZlIERPTSBldmVudCBoYW5kbGVyIGZvciBgc2VsZWN0aW9uY2hhbmdlYCwgYmVjYXVzZSBSZWFjdCdzXG4gIC8vIGJ1aWx0LWluIGBvblNlbGVjdGAgaGFuZGxlciBkb2Vzbid0IGZpcmUgZm9yIGFsbCBzZWxlY3Rpb24gY2hhbmdlcy4gSXQncyBhXG4gIC8vIGxlYWt5IHBvbHlmaWxsIHRoYXQgb25seSBmaXJlcyBvbiBrZXlwcmVzc2VzIG9yIGNsaWNrcy4gSW5zdGVhZCwgd2Ugd2FudCB0b1xuICAvLyBmaXJlIGZvciBhbnkgY2hhbmdlIHRvIHRoZSBzZWxlY3Rpb24gaW5zaWRlIHRoZSBlZGl0b3IuICgyMDE5LzExLzA0KVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzU3ODVcblxuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICB2YXIgd2luZG93ID0gUmVhY3RFZGl0b3IuZ2V0V2luZG93KGVkaXRvcik7XG4gICAgd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdGlvbmNoYW5nZScsIG9uRE9NU2VsZWN0aW9uQ2hhbmdlKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3NlbGVjdGlvbmNoYW5nZScsIG9uRE9NU2VsZWN0aW9uQ2hhbmdlKTtcbiAgICB9O1xuICB9LCBbb25ET01TZWxlY3Rpb25DaGFuZ2VdKTtcbiAgdmFyIGRlY29yYXRpb25zID0gZGVjb3JhdGUoW2VkaXRvciwgW11dKTtcblxuICBpZiAocGxhY2Vob2xkZXIgJiYgZWRpdG9yLmNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJiBBcnJheS5mcm9tKE5vZGUudGV4dHMoZWRpdG9yKSkubGVuZ3RoID09PSAxICYmIE5vZGUuc3RyaW5nKGVkaXRvcikgPT09ICcnICYmICFpc0NvbXBvc2luZykge1xuICAgIHZhciBzdGFydCA9IEVkaXRvci5zdGFydChlZGl0b3IsIFtdKTtcbiAgICBkZWNvcmF0aW9ucy5wdXNoKHtcbiAgICAgIFtQTEFDRUhPTERFUl9TWU1CT0xdOiB0cnVlLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICBhbmNob3I6IHN0YXJ0LFxuICAgICAgZm9jdXM6IHN0YXJ0XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhZE9ubHlDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHJlYWRPbmx5XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERlY29yYXRlQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBkZWNvcmF0ZVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQgLy8gQ09NUEFUOiBUaGUgR3JhbW1hcmx5IENocm9tZSBleHRlbnNpb24gd29ya3MgYnkgY2hhbmdpbmcgdGhlIERPTVxuICAvLyBvdXQgZnJvbSB1bmRlciBgY29udGVudGVkaXRhYmxlYCBlbGVtZW50cywgd2hpY2ggbGVhZHMgdG8gd2VpcmRcbiAgLy8gYmVoYXZpb3JzIHNvIHdlIGhhdmUgdG8gZGlzYWJsZSBpdCBsaWtlIGVkaXRvci4gKDIwMTcvMDQvMjQpXG4gICwgT2JqZWN0LmFzc2lnbih7XG4gICAgXCJkYXRhLWdyYW1tXCI6IGZhbHNlLFxuICAgIHJvbGU6IHJlYWRPbmx5ID8gdW5kZWZpbmVkIDogJ3RleHRib3gnXG4gIH0sIGF0dHJpYnV0ZXMsIHtcbiAgICAvLyBDT01QQVQ6IENlcnRhaW4gYnJvd3NlcnMgZG9uJ3Qgc3VwcG9ydCB0aGUgYGJlZm9yZWlucHV0YCBldmVudCwgc28gd2UnZFxuICAgIC8vIGhhdmUgdG8gdXNlIGhhY2tzIHRvIG1ha2UgdGhlc2UgcmVwbGFjZW1lbnQtYmFzZWQgZmVhdHVyZXMgd29yay5cbiAgICBzcGVsbENoZWNrOiAhSEFTX0JFRk9SRV9JTlBVVF9TVVBQT1JUID8gZmFsc2UgOiBhdHRyaWJ1dGVzLnNwZWxsQ2hlY2ssXG4gICAgYXV0b0NvcnJlY3Q6ICFIQVNfQkVGT1JFX0lOUFVUX1NVUFBPUlQgPyAnZmFsc2UnIDogYXR0cmlidXRlcy5hdXRvQ29ycmVjdCxcbiAgICBhdXRvQ2FwaXRhbGl6ZTogIUhBU19CRUZPUkVfSU5QVVRfU1VQUE9SVCA/ICdmYWxzZScgOiBhdHRyaWJ1dGVzLmF1dG9DYXBpdGFsaXplLFxuICAgIFwiZGF0YS1zbGF0ZS1lZGl0b3JcIjogdHJ1ZSxcbiAgICBcImRhdGEtc2xhdGUtbm9kZVwiOiBcInZhbHVlXCIsXG4gICAgY29udGVudEVkaXRhYmxlOiByZWFkT25seSA/IHVuZGVmaW5lZCA6IHRydWUsXG4gICAgc3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nOiB0cnVlLFxuICAgIHJlZjogcmVmLFxuICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgIC8vIEFsbG93IHBvc2l0aW9uaW5nIHJlbGF0aXZlIHRvIHRoZSBlZGl0YWJsZSBlbGVtZW50LlxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IG91dGxpbmUgc3R5bGVzLlxuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgLy8gUHJlc2VydmUgYWRqYWNlbnQgd2hpdGVzcGFjZSBhbmQgbmV3IGxpbmVzLlxuICAgICAgd2hpdGVTcGFjZTogJ3ByZS13cmFwJyxcbiAgICAgIC8vIEFsbG93IHdvcmRzIHRvIGJyZWFrIGlmIHRoZXkgYXJlIHRvbyBsb25nLlxuICAgICAgd29yZFdyYXA6ICdicmVhay13b3JkJ1xuICAgIH0sIHN0eWxlKSxcbiAgICBvbkJlZm9yZUlucHV0OiB1c2VDYWxsYmFjayhldmVudCA9PiB7XG4gICAgICAvLyBDT01QQVQ6IENlcnRhaW4gYnJvd3NlcnMgZG9uJ3Qgc3VwcG9ydCB0aGUgYGJlZm9yZWlucHV0YCBldmVudCwgc28gd2VcbiAgICAgIC8vIGZhbGwgYmFjayB0byBSZWFjdCdzIGxlYWt5IHBvbHlmaWxsIGluc3RlYWQganVzdCBmb3IgaXQuIEl0XG4gICAgICAvLyBvbmx5IHdvcmtzIGZvciB0aGUgYGluc2VydFRleHRgIGlucHV0IHR5cGUuXG4gICAgICBpZiAoIUhBU19CRUZPUkVfSU5QVVRfU1VQUE9SVCAmJiAhcmVhZE9ubHkgJiYgIWlzRXZlbnRIYW5kbGVkKGV2ZW50LCBhdHRyaWJ1dGVzLm9uQmVmb3JlSW5wdXQpICYmIGhhc0VkaXRhYmxlVGFyZ2V0KGVkaXRvciwgZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICghc3RhdGUuaXNDb21wb3NpbmcpIHtcbiAgICAgICAgICB2YXIgdGV4dCA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgRWRpdG9yLmluc2VydFRleHQoZWRpdG9yLCB0ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtyZWFkT25seV0pLFxuICAgIG9uQmx1cjogdXNlQ2FsbGJhY2soZXZlbnQgPT4ge1xuICAgICAgaWYgKHJlYWRPbmx5IHx8IHN0YXRlLmlzVXBkYXRpbmdTZWxlY3Rpb24gfHwgIWhhc0VkaXRhYmxlVGFyZ2V0KGVkaXRvciwgZXZlbnQudGFyZ2V0KSB8fCBpc0V2ZW50SGFuZGxlZChldmVudCwgYXR0cmlidXRlcy5vbkJsdXIpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gQ09NUEFUOiBJZiB0aGUgY3VycmVudCBgYWN0aXZlRWxlbWVudGAgaXMgc3RpbGwgdGhlIHByZXZpb3VzXG4gICAgICAvLyBvbmUsIHRoaXMgaXMgZHVlIHRvIHRoZSB3aW5kb3cgYmVpbmcgYmx1cnJlZCB3aGVuIHRoZSB0YWJcbiAgICAgIC8vIGl0c2VsZiBiZWNvbWVzIHVuZm9jdXNlZCwgc28gd2Ugd2FudCB0byBhYm9ydCBlYXJseSB0byBhbGxvdyB0b1xuICAgICAgLy8gZWRpdG9yIHRvIHN0YXkgZm9jdXNlZCB3aGVuIHRoZSB0YWIgYmVjb21lcyBmb2N1c2VkIGFnYWluLlxuXG5cbiAgICAgIHZhciByb290ID0gUmVhY3RFZGl0b3IuZmluZERvY3VtZW50T3JTaGFkb3dSb290KGVkaXRvcik7XG5cbiAgICAgIGlmIChzdGF0ZS5sYXRlc3RFbGVtZW50ID09PSByb290LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIge1xuICAgICAgICByZWxhdGVkVGFyZ2V0XG4gICAgICB9ID0gZXZlbnQ7XG4gICAgICB2YXIgZWwgPSBSZWFjdEVkaXRvci50b0RPTU5vZGUoZWRpdG9yLCBlZGl0b3IpOyAvLyBDT01QQVQ6IFRoZSBldmVudCBzaG91bGQgYmUgaWdub3JlZCBpZiB0aGUgZm9jdXMgaXMgcmV0dXJuaW5nXG4gICAgICAvLyB0byB0aGUgZWRpdG9yIGZyb20gYW4gZW1iZWRkZWQgZWRpdGFibGUgZWxlbWVudCAoZWcuIGFuIDxpbnB1dD5cbiAgICAgIC8vIGVsZW1lbnQgaW5zaWRlIGEgdm9pZCBub2RlKS5cblxuICAgICAgaWYgKHJlbGF0ZWRUYXJnZXQgPT09IGVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gQ09NUEFUOiBUaGUgZXZlbnQgc2hvdWxkIGJlIGlnbm9yZWQgaWYgdGhlIGZvY3VzIGlzIG1vdmluZyBmcm9tXG4gICAgICAvLyB0aGUgZWRpdG9yIHRvIGluc2lkZSBhIHZvaWQgbm9kZSdzIHNwYWNlciBlbGVtZW50LlxuXG5cbiAgICAgIGlmIChpc0RPTUVsZW1lbnQocmVsYXRlZFRhcmdldCkgJiYgcmVsYXRlZFRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2xhdGUtc3BhY2VyJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBDT01QQVQ6IFRoZSBldmVudCBzaG91bGQgYmUgaWdub3JlZCBpZiB0aGUgZm9jdXMgaXMgbW92aW5nIHRvIGFcbiAgICAgIC8vIG5vbi0gZWRpdGFibGUgc2VjdGlvbiBvZiBhbiBlbGVtZW50IHRoYXQgaXNuJ3QgYSB2b2lkIG5vZGUgKGVnLlxuICAgICAgLy8gYSBsaXN0IGl0ZW0gb2YgdGhlIGNoZWNrIGxpc3QgZXhhbXBsZSkuXG5cblxuICAgICAgaWYgKHJlbGF0ZWRUYXJnZXQgIT0gbnVsbCAmJiBpc0RPTU5vZGUocmVsYXRlZFRhcmdldCkgJiYgUmVhY3RFZGl0b3IuaGFzRE9NTm9kZShlZGl0b3IsIHJlbGF0ZWRUYXJnZXQpKSB7XG4gICAgICAgIHZhciBub2RlID0gUmVhY3RFZGl0b3IudG9TbGF0ZU5vZGUoZWRpdG9yLCByZWxhdGVkVGFyZ2V0KTtcblxuICAgICAgICBpZiAoRWxlbWVudCQxLmlzRWxlbWVudChub2RlKSAmJiAhZWRpdG9yLmlzVm9pZChub2RlKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSAvLyBDT01QQVQ6IFNhZmFyaSBkb2Vzbid0IGFsd2F5cyByZW1vdmUgdGhlIHNlbGVjdGlvbiBldmVuIGlmIHRoZSBjb250ZW50LVxuICAgICAgLy8gZWRpdGFibGUgZWxlbWVudCBubyBsb25nZXIgaGFzIGZvY3VzLiBSZWZlciB0bzpcbiAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEyMzUzMjQ3L2ZvcmNlLWNvbnRlbnRlZGl0YWJsZS1kaXYtdG8tc3RvcC1hY2NlcHRpbmctaW5wdXQtYWZ0ZXItaXQtbG9zZXMtZm9jdXMtdW5kZXItd2ViXG5cblxuICAgICAgaWYgKElTX1NBRkFSSSkge1xuICAgICAgICB2YXIgZG9tU2VsZWN0aW9uID0gcm9vdC5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgZG9tU2VsZWN0aW9uID09PSBudWxsIHx8IGRvbVNlbGVjdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZG9tU2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgfVxuXG4gICAgICBJU19GT0NVU0VELmRlbGV0ZShlZGl0b3IpO1xuICAgIH0sIFtyZWFkT25seSwgYXR0cmlidXRlcy5vbkJsdXJdKSxcbiAgICBvbkNsaWNrOiB1c2VDYWxsYmFjayhldmVudCA9PiB7XG4gICAgICBpZiAoIXJlYWRPbmx5ICYmIGhhc1RhcmdldChlZGl0b3IsIGV2ZW50LnRhcmdldCkgJiYgIWlzRXZlbnRIYW5kbGVkKGV2ZW50LCBhdHRyaWJ1dGVzLm9uQ2xpY2spICYmIGlzRE9NTm9kZShldmVudC50YXJnZXQpKSB7XG4gICAgICAgIHZhciBub2RlID0gUmVhY3RFZGl0b3IudG9TbGF0ZU5vZGUoZWRpdG9yLCBldmVudC50YXJnZXQpO1xuICAgICAgICB2YXIgcGF0aCA9IFJlYWN0RWRpdG9yLmZpbmRQYXRoKGVkaXRvciwgbm9kZSk7XG5cbiAgICAgICAgdmFyIF9zdGFydCA9IEVkaXRvci5zdGFydChlZGl0b3IsIHBhdGgpO1xuXG4gICAgICAgIHZhciBlbmQgPSBFZGl0b3IuZW5kKGVkaXRvciwgcGF0aCk7XG4gICAgICAgIHZhciBzdGFydFZvaWQgPSBFZGl0b3Iudm9pZChlZGl0b3IsIHtcbiAgICAgICAgICBhdDogX3N0YXJ0XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgZW5kVm9pZCA9IEVkaXRvci52b2lkKGVkaXRvciwge1xuICAgICAgICAgIGF0OiBlbmRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHN0YXJ0Vm9pZCAmJiBlbmRWb2lkICYmIFBhdGguZXF1YWxzKHN0YXJ0Vm9pZFsxXSwgZW5kVm9pZFsxXSkpIHtcbiAgICAgICAgICB2YXIgcmFuZ2UgPSBFZGl0b3IucmFuZ2UoZWRpdG9yLCBfc3RhcnQpO1xuICAgICAgICAgIFRyYW5zZm9ybXMuc2VsZWN0KGVkaXRvciwgcmFuZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW3JlYWRPbmx5LCBhdHRyaWJ1dGVzLm9uQ2xpY2tdKSxcbiAgICBvbkNvbXBvc2l0aW9uRW5kOiB1c2VDYWxsYmFjayhldmVudCA9PiB7XG4gICAgICBpZiAoaGFzRWRpdGFibGVUYXJnZXQoZWRpdG9yLCBldmVudC50YXJnZXQpICYmICFpc0V2ZW50SGFuZGxlZChldmVudCwgYXR0cmlidXRlcy5vbkNvbXBvc2l0aW9uRW5kKSkge1xuICAgICAgICBzdGF0ZS5pc0NvbXBvc2luZyAmJiBzZXRJc0NvbXBvc2luZyhmYWxzZSk7XG4gICAgICAgIHN0YXRlLmlzQ29tcG9zaW5nID0gZmFsc2U7IC8vIENPTVBBVDogSW4gQ2hyb21lLCBgYmVmb3JlaW5wdXRgIGV2ZW50cyBmb3IgY29tcG9zaXRpb25zXG4gICAgICAgIC8vIGFyZW4ndCBjb3JyZWN0IGFuZCBuZXZlciBmaXJlIHRoZSBcImluc2VydEZyb21Db21wb3NpdGlvblwiXG4gICAgICAgIC8vIHR5cGUgdGhhdCB3ZSBuZWVkLiBTbyBpbnN0ZWFkLCBpbnNlcnQgd2hlbmV2ZXIgYSBjb21wb3NpdGlvblxuICAgICAgICAvLyBlbmRzIHNpbmNlIGl0IHdpbGwgYWxyZWFkeSBoYXZlIGJlZW4gY29tbWl0dGVkIHRvIHRoZSBET00uXG5cbiAgICAgICAgaWYgKCFJU19TQUZBUkkgJiYgIUlTX0ZJUkVGT1hfTEVHQUNZICYmICFJU19JT1MgJiYgZXZlbnQuZGF0YSkge1xuICAgICAgICAgIEVkaXRvci5pbnNlcnRUZXh0KGVkaXRvciwgZXZlbnQuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbYXR0cmlidXRlcy5vbkNvbXBvc2l0aW9uRW5kXSksXG4gICAgb25Db21wb3NpdGlvblVwZGF0ZTogdXNlQ2FsbGJhY2soZXZlbnQgPT4ge1xuICAgICAgaWYgKGhhc0VkaXRhYmxlVGFyZ2V0KGVkaXRvciwgZXZlbnQudGFyZ2V0KSAmJiAhaXNFdmVudEhhbmRsZWQoZXZlbnQsIGF0dHJpYnV0ZXMub25Db21wb3NpdGlvblVwZGF0ZSkpIHtcbiAgICAgICAgIXN0YXRlLmlzQ29tcG9zaW5nICYmIHNldElzQ29tcG9zaW5nKHRydWUpO1xuICAgICAgICBzdGF0ZS5pc0NvbXBvc2luZyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgW2F0dHJpYnV0ZXMub25Db21wb3NpdGlvblVwZGF0ZV0pLFxuICAgIG9uQ29tcG9zaXRpb25TdGFydDogdXNlQ2FsbGJhY2soZXZlbnQgPT4ge1xuICAgICAgaWYgKGhhc0VkaXRhYmxlVGFyZ2V0KGVkaXRvciwgZXZlbnQudGFyZ2V0KSAmJiAhaXNFdmVudEhhbmRsZWQoZXZlbnQsIGF0dHJpYnV0ZXMub25Db21wb3NpdGlvblN0YXJ0KSkge1xuICAgICAgICB2YXIge1xuICAgICAgICAgIHNlbGVjdGlvblxuICAgICAgICB9ID0gZWRpdG9yO1xuXG4gICAgICAgIGlmIChzZWxlY3Rpb24gJiYgUmFuZ2UuaXNFeHBhbmRlZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgRWRpdG9yLmRlbGV0ZUZyYWdtZW50KGVkaXRvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbYXR0cmlidXRlcy5vbkNvbXBvc2l0aW9uU3RhcnRdKSxcbiAgICBvbkNvcHk6IHVzZUNhbGxiYWNrKGV2ZW50ID0+IHtcbiAgICAgIGlmIChoYXNFZGl0YWJsZVRhcmdldChlZGl0b3IsIGV2ZW50LnRhcmdldCkgJiYgIWlzRXZlbnRIYW5kbGVkKGV2ZW50LCBhdHRyaWJ1dGVzLm9uQ29weSkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgUmVhY3RFZGl0b3Iuc2V0RnJhZ21lbnREYXRhKGVkaXRvciwgZXZlbnQuY2xpcGJvYXJkRGF0YSk7XG4gICAgICB9XG4gICAgfSwgW2F0dHJpYnV0ZXMub25Db3B5XSksXG4gICAgb25DdXQ6IHVzZUNhbGxiYWNrKGV2ZW50ID0+IHtcbiAgICAgIGlmICghcmVhZE9ubHkgJiYgaGFzRWRpdGFibGVUYXJnZXQoZWRpdG9yLCBldmVudC50YXJnZXQpICYmICFpc0V2ZW50SGFuZGxlZChldmVudCwgYXR0cmlidXRlcy5vbkN1dCkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgUmVhY3RFZGl0b3Iuc2V0RnJhZ21lbnREYXRhKGVkaXRvciwgZXZlbnQuY2xpcGJvYXJkRGF0YSk7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgc2VsZWN0aW9uXG4gICAgICAgIH0gPSBlZGl0b3I7XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgIGlmIChSYW5nZS5pc0V4cGFuZGVkKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgIEVkaXRvci5kZWxldGVGcmFnbWVudChlZGl0b3IpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IE5vZGUucGFyZW50KGVkaXRvciwgc2VsZWN0aW9uLmFuY2hvci5wYXRoKTtcblxuICAgICAgICAgICAgaWYgKEVkaXRvci5pc1ZvaWQoZWRpdG9yLCBub2RlKSkge1xuICAgICAgICAgICAgICBUcmFuc2Zvcm1zLmRlbGV0ZShlZGl0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtyZWFkT25seSwgYXR0cmlidXRlcy5vbkN1dF0pLFxuICAgIG9uRHJhZ092ZXI6IHVzZUNhbGxiYWNrKGV2ZW50ID0+IHtcbiAgICAgIGlmIChoYXNUYXJnZXQoZWRpdG9yLCBldmVudC50YXJnZXQpICYmICFpc0V2ZW50SGFuZGxlZChldmVudCwgYXR0cmlidXRlcy5vbkRyYWdPdmVyKSkge1xuICAgICAgICAvLyBPbmx5IHdoZW4gdGhlIHRhcmdldCBpcyB2b2lkLCBjYWxsIGBwcmV2ZW50RGVmYXVsdGAgdG8gc2lnbmFsXG4gICAgICAgIC8vIHRoYXQgZHJvcHMgYXJlIGFsbG93ZWQuIEVkaXRhYmxlIGNvbnRlbnQgaXMgZHJvcHBhYmxlIGJ5XG4gICAgICAgIC8vIGRlZmF1bHQsIGFuZCBjYWxsaW5nIGBwcmV2ZW50RGVmYXVsdGAgaGlkZXMgdGhlIGN1cnNvci5cbiAgICAgICAgdmFyIG5vZGUgPSBSZWFjdEVkaXRvci50b1NsYXRlTm9kZShlZGl0b3IsIGV2ZW50LnRhcmdldCk7XG5cbiAgICAgICAgaWYgKEVkaXRvci5pc1ZvaWQoZWRpdG9yLCBub2RlKSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbYXR0cmlidXRlcy5vbkRyYWdPdmVyXSksXG4gICAgb25EcmFnU3RhcnQ6IHVzZUNhbGxiYWNrKGV2ZW50ID0+IHtcbiAgICAgIGlmIChoYXNUYXJnZXQoZWRpdG9yLCBldmVudC50YXJnZXQpICYmICFpc0V2ZW50SGFuZGxlZChldmVudCwgYXR0cmlidXRlcy5vbkRyYWdTdGFydCkpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBSZWFjdEVkaXRvci50b1NsYXRlTm9kZShlZGl0b3IsIGV2ZW50LnRhcmdldCk7XG4gICAgICAgIHZhciBwYXRoID0gUmVhY3RFZGl0b3IuZmluZFBhdGgoZWRpdG9yLCBub2RlKTtcbiAgICAgICAgdmFyIHZvaWRNYXRjaCA9IEVkaXRvci5pc1ZvaWQoZWRpdG9yLCBub2RlKSB8fCBFZGl0b3Iudm9pZChlZGl0b3IsIHtcbiAgICAgICAgICBhdDogcGF0aCxcbiAgICAgICAgICB2b2lkczogdHJ1ZVxuICAgICAgICB9KTsgLy8gSWYgc3RhcnRpbmcgYSBkcmFnIG9uIGEgdm9pZCBub2RlLCBtYWtlIHN1cmUgaXQgaXMgc2VsZWN0ZWRcbiAgICAgICAgLy8gc28gdGhhdCBpdCBzaG93cyB1cCBpbiB0aGUgc2VsZWN0aW9uJ3MgZnJhZ21lbnQuXG5cbiAgICAgICAgaWYgKHZvaWRNYXRjaCkge1xuICAgICAgICAgIHZhciByYW5nZSA9IEVkaXRvci5yYW5nZShlZGl0b3IsIHBhdGgpO1xuICAgICAgICAgIFRyYW5zZm9ybXMuc2VsZWN0KGVkaXRvciwgcmFuZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUuaXNEcmFnZ2luZ0ludGVybmFsbHkgPSB0cnVlO1xuICAgICAgICBSZWFjdEVkaXRvci5zZXRGcmFnbWVudERhdGEoZWRpdG9yLCBldmVudC5kYXRhVHJhbnNmZXIpO1xuICAgICAgfVxuICAgIH0sIFthdHRyaWJ1dGVzLm9uRHJhZ1N0YXJ0XSksXG4gICAgb25Ecm9wOiB1c2VDYWxsYmFjayhldmVudCA9PiB7XG4gICAgICBpZiAoIXJlYWRPbmx5ICYmIGhhc1RhcmdldChlZGl0b3IsIGV2ZW50LnRhcmdldCkgJiYgIWlzRXZlbnRIYW5kbGVkKGV2ZW50LCBhdHRyaWJ1dGVzLm9uRHJvcCkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gS2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgZHJhZ2dlZCByYW5nZSBiZWZvcmUgdXBkYXRpbmcgc2VsZWN0aW9uXG5cbiAgICAgICAgdmFyIGRyYWdnZWRSYW5nZSA9IGVkaXRvci5zZWxlY3Rpb247IC8vIEZpbmQgdGhlIHJhbmdlIHdoZXJlIHRoZSBkcm9wIGhhcHBlbmVkXG5cbiAgICAgICAgdmFyIHJhbmdlID0gUmVhY3RFZGl0b3IuZmluZEV2ZW50UmFuZ2UoZWRpdG9yLCBldmVudCk7XG4gICAgICAgIHZhciBkYXRhID0gZXZlbnQuZGF0YVRyYW5zZmVyO1xuICAgICAgICBUcmFuc2Zvcm1zLnNlbGVjdChlZGl0b3IsIHJhbmdlKTtcblxuICAgICAgICBpZiAoc3RhdGUuaXNEcmFnZ2luZ0ludGVybmFsbHkpIHtcbiAgICAgICAgICBpZiAoZHJhZ2dlZFJhbmdlKSB7XG4gICAgICAgICAgICBUcmFuc2Zvcm1zLmRlbGV0ZShlZGl0b3IsIHtcbiAgICAgICAgICAgICAgYXQ6IGRyYWdnZWRSYW5nZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3RhdGUuaXNEcmFnZ2luZ0ludGVybmFsbHkgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlYWN0RWRpdG9yLmluc2VydERhdGEoZWRpdG9yLCBkYXRhKTsgLy8gV2hlbiBkcmFnZ2luZyBmcm9tIGFub3RoZXIgc291cmNlIGludG8gdGhlIGVkaXRvciwgaXQncyBwb3NzaWJsZVxuICAgICAgICAvLyB0aGF0IHRoZSBjdXJyZW50IGVkaXRvciBkb2VzIG5vdCBoYXZlIGZvY3VzLlxuXG4gICAgICAgIGlmICghUmVhY3RFZGl0b3IuaXNGb2N1c2VkKGVkaXRvcikpIHtcbiAgICAgICAgICBSZWFjdEVkaXRvci5mb2N1cyhlZGl0b3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW3JlYWRPbmx5LCBhdHRyaWJ1dGVzLm9uRHJvcF0pLFxuICAgIG9uRHJhZ0VuZDogdXNlQ2FsbGJhY2soZXZlbnQgPT4ge1xuICAgICAgLy8gV2hlbiBkcm9wcGluZyBvbiBhIGRpZmZlcmVudCBkcm9wcGFibGUgZWxlbWVudCB0aGFuIHRoZSBjdXJyZW50IGVkaXRvcixcbiAgICAgIC8vIGBvbkRyb3BgIGlzIG5vdCBjYWxsZWQuIFNvIHdlIG5lZWQgdG8gY2xlYW4gdXAgaW4gYG9uRHJhZ0VuZGAgaW5zdGVhZC5cbiAgICAgIC8vIE5vdGU6IGBvbkRyYWdFbmRgIGlzIG9ubHkgY2FsbGVkIHdoZW4gYG9uRHJvcGAgaXMgbm90IGNhbGxlZFxuICAgICAgaWYgKCFyZWFkT25seSAmJiBzdGF0ZS5pc0RyYWdnaW5nSW50ZXJuYWxseSAmJiBoYXNUYXJnZXQoZWRpdG9yLCBldmVudC50YXJnZXQpICYmICFpc0V2ZW50SGFuZGxlZChldmVudCwgYXR0cmlidXRlcy5vbkRyYWdFbmQpKSB7XG4gICAgICAgIHN0YXRlLmlzRHJhZ2dpbmdJbnRlcm5hbGx5ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSwgW3JlYWRPbmx5LCBhdHRyaWJ1dGVzLm9uRHJhZ0VuZF0pLFxuICAgIG9uRm9jdXM6IHVzZUNhbGxiYWNrKGV2ZW50ID0+IHtcbiAgICAgIGlmICghcmVhZE9ubHkgJiYgIXN0YXRlLmlzVXBkYXRpbmdTZWxlY3Rpb24gJiYgaGFzRWRpdGFibGVUYXJnZXQoZWRpdG9yLCBldmVudC50YXJnZXQpICYmICFpc0V2ZW50SGFuZGxlZChldmVudCwgYXR0cmlidXRlcy5vbkZvY3VzKSkge1xuICAgICAgICB2YXIgZWwgPSBSZWFjdEVkaXRvci50b0RPTU5vZGUoZWRpdG9yLCBlZGl0b3IpO1xuICAgICAgICB2YXIgcm9vdCA9IFJlYWN0RWRpdG9yLmZpbmREb2N1bWVudE9yU2hhZG93Um9vdChlZGl0b3IpO1xuICAgICAgICBzdGF0ZS5sYXRlc3RFbGVtZW50ID0gcm9vdC5hY3RpdmVFbGVtZW50OyAvLyBDT01QQVQ6IElmIHRoZSBlZGl0b3IgaGFzIG5lc3RlZCBlZGl0YWJsZSBlbGVtZW50cywgdGhlIGZvY3VzXG4gICAgICAgIC8vIGNhbiBnbyB0byB0aGVtLiBJbiBGaXJlZm94LCB0aGlzIG11c3QgYmUgcHJldmVudGVkIGJlY2F1c2UgaXRcbiAgICAgICAgLy8gcmVzdWx0cyBpbiBpc3N1ZXMgd2l0aCBrZXlib2FyZCBuYXZpZ2F0aW9uLiAoMjAxNy8wMy8zMClcblxuICAgICAgICBpZiAoSVNfRklSRUZPWCAmJiBldmVudC50YXJnZXQgIT09IGVsKSB7XG4gICAgICAgICAgZWwuZm9jdXMoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBJU19GT0NVU0VELnNldChlZGl0b3IsIHRydWUpO1xuICAgICAgfVxuICAgIH0sIFtyZWFkT25seSwgYXR0cmlidXRlcy5vbkZvY3VzXSksXG4gICAgb25LZXlEb3duOiB1c2VDYWxsYmFjayhldmVudCA9PiB7XG4gICAgICBpZiAoIXJlYWRPbmx5ICYmIGhhc0VkaXRhYmxlVGFyZ2V0KGVkaXRvciwgZXZlbnQudGFyZ2V0KSAmJiAhaXNFdmVudEhhbmRsZWQoZXZlbnQsIGF0dHJpYnV0ZXMub25LZXlEb3duKSkge1xuICAgICAgICB2YXIge1xuICAgICAgICAgIG5hdGl2ZUV2ZW50XG4gICAgICAgIH0gPSBldmVudDtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBzZWxlY3Rpb25cbiAgICAgICAgfSA9IGVkaXRvcjtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBlZGl0b3IuY2hpbGRyZW5bc2VsZWN0aW9uICE9PSBudWxsID8gc2VsZWN0aW9uLmZvY3VzLnBhdGhbMF0gOiAwXTtcbiAgICAgICAgdmFyIGlzUlRMID0gZ2V0RGlyZWN0aW9uKE5vZGUuc3RyaW5nKGVsZW1lbnQpKSA9PT0gJ3J0bCc7IC8vIENPTVBBVDogU2luY2Ugd2UgcHJldmVudCB0aGUgZGVmYXVsdCBiZWhhdmlvciBvblxuICAgICAgICAvLyBgYmVmb3JlaW5wdXRgIGV2ZW50cywgdGhlIGJyb3dzZXIgZG9lc24ndCB0aGluayB0aGVyZSdzIGV2ZXJcbiAgICAgICAgLy8gYW55IGhpc3Rvcnkgc3RhY2sgdG8gdW5kbyBvciByZWRvLCBzbyB3ZSBoYXZlIHRvIG1hbmFnZSB0aGVzZVxuICAgICAgICAvLyBob3RrZXlzIG91cnNlbHZlcy4gKDIwMTkvMTEvMDYpXG5cbiAgICAgICAgaWYgKEhvdGtleXMuaXNSZWRvKG5hdGl2ZUV2ZW50KSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdmFyIG1heWJlSGlzdG9yeUVkaXRvciA9IGVkaXRvcjtcblxuICAgICAgICAgIGlmICh0eXBlb2YgbWF5YmVIaXN0b3J5RWRpdG9yLnJlZG8gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIG1heWJlSGlzdG9yeUVkaXRvci5yZWRvKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEhvdGtleXMuaXNVbmRvKG5hdGl2ZUV2ZW50KSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdmFyIF9tYXliZUhpc3RvcnlFZGl0b3IgPSBlZGl0b3I7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIF9tYXliZUhpc3RvcnlFZGl0b3IudW5kbyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgX21heWJlSGlzdG9yeUVkaXRvci51bmRvKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIENPTVBBVDogQ2VydGFpbiBicm93c2VycyBkb24ndCBoYW5kbGUgdGhlIHNlbGVjdGlvbiB1cGRhdGVzXG4gICAgICAgIC8vIHByb3Blcmx5LiBJbiBDaHJvbWUsIHRoZSBzZWxlY3Rpb24gaXNuJ3QgcHJvcGVybHkgZXh0ZW5kZWQuXG4gICAgICAgIC8vIEFuZCBpbiBGaXJlZm94LCB0aGUgc2VsZWN0aW9uIGlzbid0IHByb3Blcmx5IGNvbGxhcHNlZC5cbiAgICAgICAgLy8gKDIwMTcvMTAvMTcpXG5cblxuICAgICAgICBpZiAoSG90a2V5cy5pc01vdmVMaW5lQmFja3dhcmQobmF0aXZlRXZlbnQpKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBUcmFuc2Zvcm1zLm1vdmUoZWRpdG9yLCB7XG4gICAgICAgICAgICB1bml0OiAnbGluZScsXG4gICAgICAgICAgICByZXZlcnNlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEhvdGtleXMuaXNNb3ZlTGluZUZvcndhcmQobmF0aXZlRXZlbnQpKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBUcmFuc2Zvcm1zLm1vdmUoZWRpdG9yLCB7XG4gICAgICAgICAgICB1bml0OiAnbGluZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoSG90a2V5cy5pc0V4dGVuZExpbmVCYWNrd2FyZChuYXRpdmVFdmVudCkpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIFRyYW5zZm9ybXMubW92ZShlZGl0b3IsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdsaW5lJyxcbiAgICAgICAgICAgIGVkZ2U6ICdmb2N1cycsXG4gICAgICAgICAgICByZXZlcnNlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEhvdGtleXMuaXNFeHRlbmRMaW5lRm9yd2FyZChuYXRpdmVFdmVudCkpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIFRyYW5zZm9ybXMubW92ZShlZGl0b3IsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdsaW5lJyxcbiAgICAgICAgICAgIGVkZ2U6ICdmb2N1cydcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gQ09NUEFUOiBJZiBhIHZvaWQgbm9kZSBpcyBzZWxlY3RlZCwgb3IgYSB6ZXJvLXdpZHRoIHRleHQgbm9kZVxuICAgICAgICAvLyBhZGphY2VudCB0byBhbiBpbmxpbmUgaXMgc2VsZWN0ZWQsIHdlIG5lZWQgdG8gaGFuZGxlIHRoZXNlXG4gICAgICAgIC8vIGhvdGtleXMgbWFudWFsbHkgYmVjYXVzZSBicm93c2VycyB3b24ndCBiZSBhYmxlIHRvIHNraXAgb3ZlclxuICAgICAgICAvLyB0aGUgdm9pZCBub2RlIHdpdGggdGhlIHplcm8td2lkdGggc3BhY2Ugbm90IGJlaW5nIGFuIGVtcHR5XG4gICAgICAgIC8vIHN0cmluZy5cblxuXG4gICAgICAgIGlmIChIb3RrZXlzLmlzTW92ZUJhY2t3YXJkKG5hdGl2ZUV2ZW50KSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICBpZiAoc2VsZWN0aW9uICYmIFJhbmdlLmlzQ29sbGFwc2VkKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgIFRyYW5zZm9ybXMubW92ZShlZGl0b3IsIHtcbiAgICAgICAgICAgICAgcmV2ZXJzZTogIWlzUlRMXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVHJhbnNmb3Jtcy5jb2xsYXBzZShlZGl0b3IsIHtcbiAgICAgICAgICAgICAgZWRnZTogJ3N0YXJ0J1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEhvdGtleXMuaXNNb3ZlRm9yd2FyZChuYXRpdmVFdmVudCkpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgaWYgKHNlbGVjdGlvbiAmJiBSYW5nZS5pc0NvbGxhcHNlZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICBUcmFuc2Zvcm1zLm1vdmUoZWRpdG9yLCB7XG4gICAgICAgICAgICAgIHJldmVyc2U6IGlzUlRMXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVHJhbnNmb3Jtcy5jb2xsYXBzZShlZGl0b3IsIHtcbiAgICAgICAgICAgICAgZWRnZTogJ2VuZCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChIb3RrZXlzLmlzTW92ZVdvcmRCYWNrd2FyZChuYXRpdmVFdmVudCkpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgaWYgKHNlbGVjdGlvbiAmJiBSYW5nZS5pc0V4cGFuZGVkKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgIFRyYW5zZm9ybXMuY29sbGFwc2UoZWRpdG9yLCB7XG4gICAgICAgICAgICAgIGVkZ2U6ICdmb2N1cydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIFRyYW5zZm9ybXMubW92ZShlZGl0b3IsIHtcbiAgICAgICAgICAgIHVuaXQ6ICd3b3JkJyxcbiAgICAgICAgICAgIHJldmVyc2U6ICFpc1JUTFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChIb3RrZXlzLmlzTW92ZVdvcmRGb3J3YXJkKG5hdGl2ZUV2ZW50KSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICBpZiAoc2VsZWN0aW9uICYmIFJhbmdlLmlzRXhwYW5kZWQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgVHJhbnNmb3Jtcy5jb2xsYXBzZShlZGl0b3IsIHtcbiAgICAgICAgICAgICAgZWRnZTogJ2ZvY3VzJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgVHJhbnNmb3Jtcy5tb3ZlKGVkaXRvciwge1xuICAgICAgICAgICAgdW5pdDogJ3dvcmQnLFxuICAgICAgICAgICAgcmV2ZXJzZTogaXNSVExcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gQ09NUEFUOiBDZXJ0YWluIGJyb3dzZXJzIGRvbid0IHN1cHBvcnQgdGhlIGBiZWZvcmVpbnB1dGAgZXZlbnQsIHNvIHdlXG4gICAgICAgIC8vIGZhbGwgYmFjayB0byBndWVzc2luZyBhdCB0aGUgaW5wdXQgaW50ZW50aW9uIGZvciBob3RrZXlzLlxuICAgICAgICAvLyBDT01QQVQ6IEluIGlPUywgc29tZSBvZiB0aGVzZSBob3RrZXlzIGFyZSBoYW5kbGVkIGluIHRoZVxuXG5cbiAgICAgICAgaWYgKCFIQVNfQkVGT1JFX0lOUFVUX1NVUFBPUlQpIHtcbiAgICAgICAgICAvLyBXZSBkb24ndCBoYXZlIGEgY29yZSBiZWhhdmlvciBmb3IgdGhlc2UsIGJ1dCB0aGV5IGNoYW5nZSB0aGVcbiAgICAgICAgICAvLyBET00gaWYgd2UgZG9uJ3QgcHJldmVudCB0aGVtLCBzbyB3ZSBoYXZlIHRvLlxuICAgICAgICAgIGlmIChIb3RrZXlzLmlzQm9sZChuYXRpdmVFdmVudCkgfHwgSG90a2V5cy5pc0l0YWxpYyhuYXRpdmVFdmVudCkgfHwgSG90a2V5cy5pc1RyYW5zcG9zZUNoYXJhY3RlcihuYXRpdmVFdmVudCkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKEhvdGtleXMuaXNTcGxpdEJsb2NrKG5hdGl2ZUV2ZW50KSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIEVkaXRvci5pbnNlcnRCcmVhayhlZGl0b3IpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChIb3RrZXlzLmlzRGVsZXRlQmFja3dhcmQobmF0aXZlRXZlbnQpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0aW9uICYmIFJhbmdlLmlzRXhwYW5kZWQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICBFZGl0b3IuZGVsZXRlRnJhZ21lbnQoZWRpdG9yLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnYmFja3dhcmQnXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgRWRpdG9yLmRlbGV0ZUJhY2t3YXJkKGVkaXRvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoSG90a2V5cy5pc0RlbGV0ZUZvcndhcmQobmF0aXZlRXZlbnQpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0aW9uICYmIFJhbmdlLmlzRXhwYW5kZWQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICBFZGl0b3IuZGVsZXRlRnJhZ21lbnQoZWRpdG9yLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnZm9yd2FyZCdcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBFZGl0b3IuZGVsZXRlRm9yd2FyZChlZGl0b3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKEhvdGtleXMuaXNEZWxldGVMaW5lQmFja3dhcmQobmF0aXZlRXZlbnQpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0aW9uICYmIFJhbmdlLmlzRXhwYW5kZWQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICBFZGl0b3IuZGVsZXRlRnJhZ21lbnQoZWRpdG9yLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnYmFja3dhcmQnXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgRWRpdG9yLmRlbGV0ZUJhY2t3YXJkKGVkaXRvciwge1xuICAgICAgICAgICAgICAgIHVuaXQ6ICdsaW5lJ1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChIb3RrZXlzLmlzRGVsZXRlTGluZUZvcndhcmQobmF0aXZlRXZlbnQpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0aW9uICYmIFJhbmdlLmlzRXhwYW5kZWQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICBFZGl0b3IuZGVsZXRlRnJhZ21lbnQoZWRpdG9yLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnZm9yd2FyZCdcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBFZGl0b3IuZGVsZXRlRm9yd2FyZChlZGl0b3IsIHtcbiAgICAgICAgICAgICAgICB1bml0OiAnbGluZSdcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoSG90a2V5cy5pc0RlbGV0ZVdvcmRCYWNrd2FyZChuYXRpdmVFdmVudCkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24gJiYgUmFuZ2UuaXNFeHBhbmRlZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgIEVkaXRvci5kZWxldGVGcmFnbWVudChlZGl0b3IsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdiYWNrd2FyZCdcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBFZGl0b3IuZGVsZXRlQmFja3dhcmQoZWRpdG9yLCB7XG4gICAgICAgICAgICAgICAgdW5pdDogJ3dvcmQnXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKEhvdGtleXMuaXNEZWxldGVXb3JkRm9yd2FyZChuYXRpdmVFdmVudCkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24gJiYgUmFuZ2UuaXNFeHBhbmRlZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgIEVkaXRvci5kZWxldGVGcmFnbWVudChlZGl0b3IsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdmb3J3YXJkJ1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIEVkaXRvci5kZWxldGVGb3J3YXJkKGVkaXRvciwge1xuICAgICAgICAgICAgICAgIHVuaXQ6ICd3b3JkJ1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoSVNfQ0hST01FIHx8IElTX1NBRkFSSSkge1xuICAgICAgICAgICAgLy8gQ09NUEFUOiBDaHJvbWUgYW5kIFNhZmFyaSBzdXBwb3J0IGBiZWZvcmVpbnB1dGAgZXZlbnQgYnV0IGRvIG5vdCBmaXJlXG4gICAgICAgICAgICAvLyBhbiBldmVudCB3aGVuIGRlbGV0aW5nIGJhY2t3YXJkcyBpbiBhIHNlbGVjdGVkIHZvaWQgaW5saW5lIG5vZGVcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24gJiYgKEhvdGtleXMuaXNEZWxldGVCYWNrd2FyZChuYXRpdmVFdmVudCkgfHwgSG90a2V5cy5pc0RlbGV0ZUZvcndhcmQobmF0aXZlRXZlbnQpKSAmJiBSYW5nZS5pc0NvbGxhcHNlZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgIHZhciBjdXJyZW50Tm9kZSA9IE5vZGUucGFyZW50KGVkaXRvciwgc2VsZWN0aW9uLmFuY2hvci5wYXRoKTtcblxuICAgICAgICAgICAgICBpZiAoRWxlbWVudCQxLmlzRWxlbWVudChjdXJyZW50Tm9kZSkgJiYgRWRpdG9yLmlzVm9pZChlZGl0b3IsIGN1cnJlbnROb2RlKSAmJiBFZGl0b3IuaXNJbmxpbmUoZWRpdG9yLCBjdXJyZW50Tm9kZSkpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIFRyYW5zZm9ybXMuZGVsZXRlKGVkaXRvciwge1xuICAgICAgICAgICAgICAgICAgdW5pdDogJ2Jsb2NrJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtyZWFkT25seSwgYXR0cmlidXRlcy5vbktleURvd25dKSxcbiAgICBvblBhc3RlOiB1c2VDYWxsYmFjayhldmVudCA9PiB7XG4gICAgICBpZiAoIXJlYWRPbmx5ICYmIGhhc0VkaXRhYmxlVGFyZ2V0KGVkaXRvciwgZXZlbnQudGFyZ2V0KSAmJiAhaXNFdmVudEhhbmRsZWQoZXZlbnQsIGF0dHJpYnV0ZXMub25QYXN0ZSkpIHtcbiAgICAgICAgLy8gQ09NUEFUOiBDZXJ0YWluIGJyb3dzZXJzIGRvbid0IHN1cHBvcnQgdGhlIGBiZWZvcmVpbnB1dGAgZXZlbnQsIHNvIHdlXG4gICAgICAgIC8vIGZhbGwgYmFjayB0byBSZWFjdCdzIGBvblBhc3RlYCBoZXJlIGluc3RlYWQuXG4gICAgICAgIC8vIENPTVBBVDogRmlyZWZveCwgQ2hyb21lIGFuZCBTYWZhcmkgZG9uJ3QgZW1pdCBgYmVmb3JlaW5wdXRgIGV2ZW50c1xuICAgICAgICAvLyB3aGVuIFwicGFzdGUgd2l0aG91dCBmb3JtYXR0aW5nXCIgaXMgdXNlZCwgc28gZmFsbGJhY2suICgyMDIwLzAyLzIwKVxuICAgICAgICBpZiAoIUhBU19CRUZPUkVfSU5QVVRfU1VQUE9SVCB8fCBpc1BsYWluVGV4dE9ubHlQYXN0ZShldmVudC5uYXRpdmVFdmVudCkpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIFJlYWN0RWRpdG9yLmluc2VydERhdGEoZWRpdG9yLCBldmVudC5jbGlwYm9hcmREYXRhKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtyZWFkT25seSwgYXR0cmlidXRlcy5vblBhc3RlXSlcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENoaWxkcmVuLCB7XG4gICAgZGVjb3JhdGlvbnM6IGRlY29yYXRpb25zLFxuICAgIG5vZGU6IGVkaXRvcixcbiAgICByZW5kZXJFbGVtZW50OiByZW5kZXJFbGVtZW50LFxuICAgIHJlbmRlclBsYWNlaG9sZGVyOiByZW5kZXJQbGFjZWhvbGRlcixcbiAgICByZW5kZXJMZWFmOiByZW5kZXJMZWFmLFxuICAgIHNlbGVjdGlvbjogZWRpdG9yLnNlbGVjdGlvblxuICB9KSkpKTtcbn07XG4vKipcclxuICogVGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgZWxlbWVudFxyXG4gKi9cblxudmFyIERlZmF1bHRQbGFjZWhvbGRlciA9IChfcmVmKSA9PiB7XG4gIHZhciB7XG4gICAgYXR0cmlidXRlcyxcbiAgICBjaGlsZHJlblxuICB9ID0gX3JlZjtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBPYmplY3QuYXNzaWduKHt9LCBhdHRyaWJ1dGVzKSwgY2hpbGRyZW4pO1xufTtcbi8qKlxyXG4gKiBBIGRlZmF1bHQgbWVtb2l6ZWQgZGVjb3JhdGUgZnVuY3Rpb24uXHJcbiAqL1xuXG52YXIgZGVmYXVsdERlY29yYXRlID0gKCkgPT4gW107XG4vKipcclxuICogQSBkZWZhdWx0IGltcGxlbWVudCB0byBzY3JvbGwgZG9tIHJhbmdlIGludG8gdmlldy5cclxuICovXG5cbnZhciBkZWZhdWx0U2Nyb2xsU2VsZWN0aW9uSW50b1ZpZXcgPSAoZWRpdG9yLCBkb21SYW5nZSkgPT4ge1xuICB2YXIgbGVhZkVsID0gZG9tUmFuZ2Uuc3RhcnRDb250YWluZXIucGFyZW50RWxlbWVudDtcbiAgbGVhZkVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9IGRvbVJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdC5iaW5kKGRvbVJhbmdlKTtcbiAgc2Nyb2xsSW50b1ZpZXcobGVhZkVsLCB7XG4gICAgc2Nyb2xsTW9kZTogJ2lmLW5lZWRlZCdcbiAgfSk7XG4gIGRlbGV0ZSBsZWFmRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0O1xufTtcbi8qKlxyXG4gKiBDaGVjayBpZiB0aGUgdGFyZ2V0IGlzIGluIHRoZSBlZGl0b3IuXHJcbiAqL1xuXG52YXIgaGFzVGFyZ2V0ID0gKGVkaXRvciwgdGFyZ2V0KSA9PiB7XG4gIHJldHVybiBpc0RPTU5vZGUodGFyZ2V0KSAmJiBSZWFjdEVkaXRvci5oYXNET01Ob2RlKGVkaXRvciwgdGFyZ2V0KTtcbn07XG4vKipcclxuICogQ2hlY2sgaWYgdGhlIHRhcmdldCBpcyBlZGl0YWJsZSBhbmQgaW4gdGhlIGVkaXRvci5cclxuICovXG5cbnZhciBoYXNFZGl0YWJsZVRhcmdldCA9IChlZGl0b3IsIHRhcmdldCkgPT4ge1xuICByZXR1cm4gaXNET01Ob2RlKHRhcmdldCkgJiYgUmVhY3RFZGl0b3IuaGFzRE9NTm9kZShlZGl0b3IsIHRhcmdldCwge1xuICAgIGVkaXRhYmxlOiB0cnVlXG4gIH0pO1xufTtcbi8qKlxyXG4gKiBDaGVjayBpZiB0aGUgdGFyZ2V0IGlzIGluc2lkZSB2b2lkIGFuZCBpbiB0aGUgZWRpdG9yLlxyXG4gKi9cblxudmFyIGlzVGFyZ2V0SW5zaWRlVm9pZCA9IChlZGl0b3IsIHRhcmdldCkgPT4ge1xuICB2YXIgc2xhdGVOb2RlID0gaGFzVGFyZ2V0KGVkaXRvciwgdGFyZ2V0KSAmJiBSZWFjdEVkaXRvci50b1NsYXRlTm9kZShlZGl0b3IsIHRhcmdldCk7XG4gIHJldHVybiBFZGl0b3IuaXNWb2lkKGVkaXRvciwgc2xhdGVOb2RlKTtcbn07XG4vKipcclxuICogQ2hlY2sgaWYgYW4gZXZlbnQgaXMgb3ZlcnJpZGVkIGJ5IGEgaGFuZGxlci5cclxuICovXG5cbnZhciBpc0V2ZW50SGFuZGxlZCA9IChldmVudCwgaGFuZGxlcikgPT4ge1xuICBpZiAoIWhhbmRsZXIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gLy8gVGhlIGN1c3RvbSBldmVudCBoYW5kbGVyIG1heSByZXR1cm4gYSBib29sZWFuIHRvIHNwZWNpZnkgd2hldGhlciB0aGUgZXZlbnRcbiAgLy8gc2hhbGwgYmUgdHJlYXRlZCBhcyBiZWluZyBoYW5kbGVkIG9yIG5vdC5cblxuXG4gIHZhciBzaG91bGRUcmVhdEV2ZW50QXNIYW5kbGVkID0gaGFuZGxlcihldmVudCk7XG5cbiAgaWYgKHNob3VsZFRyZWF0RXZlbnRBc0hhbmRsZWQgIT0gbnVsbCkge1xuICAgIHJldHVybiBzaG91bGRUcmVhdEV2ZW50QXNIYW5kbGVkO1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCk7XG59O1xuLyoqXHJcbiAqIENoZWNrIGlmIGEgRE9NIGV2ZW50IGlzIG92ZXJyaWRlZCBieSBhIGhhbmRsZXIuXHJcbiAqL1xuXG52YXIgaXNET01FdmVudEhhbmRsZWQgPSAoZXZlbnQsIGhhbmRsZXIpID0+IHtcbiAgaWYgKCFoYW5kbGVyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIFRoZSBjdXN0b20gZXZlbnQgaGFuZGxlciBtYXkgcmV0dXJuIGEgYm9vbGVhbiB0byBzcGVjaWZ5IHdoZXRoZXIgdGhlIGV2ZW50XG4gIC8vIHNoYWxsIGJlIHRyZWF0ZWQgYXMgYmVpbmcgaGFuZGxlZCBvciBub3QuXG5cblxuICB2YXIgc2hvdWxkVHJlYXRFdmVudEFzSGFuZGxlZCA9IGhhbmRsZXIoZXZlbnQpO1xuXG4gIGlmIChzaG91bGRUcmVhdEV2ZW50QXNIYW5kbGVkICE9IG51bGwpIHtcbiAgICByZXR1cm4gc2hvdWxkVHJlYXRFdmVudEFzSGFuZGxlZDtcbiAgfVxuXG4gIHJldHVybiBldmVudC5kZWZhdWx0UHJldmVudGVkO1xufTtcblxuLyoqXHJcbiAqIEFuIGF1dG8taW5jcmVtZW50aW5nIGlkZW50aWZpZXIgZm9yIGtleXMuXHJcbiAqL1xudmFyIG4gPSAwO1xuLyoqXHJcbiAqIEEgY2xhc3MgdGhhdCBrZWVwcyB0cmFjayBvZiBhIGtleSBzdHJpbmcuIFdlIHVzZSBhIGZ1bGwgY2xhc3MgaGVyZSBiZWNhdXNlIHdlXHJcbiAqIHdhbnQgdG8gYmUgYWJsZSB0byB1c2UgdGhlbSBhcyBrZXlzIGluIGBXZWFrTWFwYCBvYmplY3RzLlxyXG4gKi9cblxuY2xhc3MgS2V5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pZCA9IFwiXCIuY29uY2F0KG4rKyk7XG4gIH1cblxufVxuXG52YXIgUmVhY3RFZGl0b3IgPSB7XG4gIC8qKlxyXG4gICAqIFJldHVybiB0aGUgaG9zdCB3aW5kb3cgb2YgdGhlIGN1cnJlbnQgZWRpdG9yLlxyXG4gICAqL1xuICBnZXRXaW5kb3coZWRpdG9yKSB7XG4gICAgdmFyIHdpbmRvdyA9IEVESVRPUl9UT19XSU5ET1cuZ2V0KGVkaXRvcik7XG5cbiAgICBpZiAoIXdpbmRvdykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gZmluZCBhIGhvc3Qgd2luZG93IGVsZW1lbnQgZm9yIHRoaXMgZWRpdG9yJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfSxcblxuICAvKipcclxuICAgKiBGaW5kIGEga2V5IGZvciBhIFNsYXRlIG5vZGUuXHJcbiAgICovXG4gIGZpbmRLZXkoZWRpdG9yLCBub2RlKSB7XG4gICAgdmFyIGtleSA9IE5PREVfVE9fS0VZLmdldChub2RlKTtcblxuICAgIGlmICgha2V5KSB7XG4gICAgICBrZXkgPSBuZXcgS2V5KCk7XG4gICAgICBOT0RFX1RPX0tFWS5zZXQobm9kZSwga2V5KTtcbiAgICB9XG5cbiAgICByZXR1cm4ga2V5O1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEZpbmQgdGhlIHBhdGggb2YgU2xhdGUgbm9kZS5cclxuICAgKi9cbiAgZmluZFBhdGgoZWRpdG9yLCBub2RlKSB7XG4gICAgdmFyIHBhdGggPSBbXTtcbiAgICB2YXIgY2hpbGQgPSBub2RlO1xuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHZhciBwYXJlbnQgPSBOT0RFX1RPX1BBUkVOVC5nZXQoY2hpbGQpO1xuXG4gICAgICBpZiAocGFyZW50ID09IG51bGwpIHtcbiAgICAgICAgaWYgKEVkaXRvci5pc0VkaXRvcihjaGlsZCkpIHtcbiAgICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaSA9IE5PREVfVE9fSU5ERVguZ2V0KGNoaWxkKTtcblxuICAgICAgaWYgKGkgPT0gbnVsbCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcGF0aC51bnNoaWZ0KGkpO1xuICAgICAgY2hpbGQgPSBwYXJlbnQ7XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGZpbmQgdGhlIHBhdGggZm9yIFNsYXRlIG5vZGU6IFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShub2RlKSkpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEZpbmQgdGhlIERPTSBub2RlIHRoYXQgaW1wbGVtZW50cyBEb2N1bWVudE9yU2hhZG93Um9vdCBmb3IgdGhlIGVkaXRvci5cclxuICAgKi9cbiAgZmluZERvY3VtZW50T3JTaGFkb3dSb290KGVkaXRvcikge1xuICAgIHZhciBlbCA9IFJlYWN0RWRpdG9yLnRvRE9NTm9kZShlZGl0b3IsIGVkaXRvcik7XG4gICAgdmFyIHJvb3QgPSBlbC5nZXRSb290Tm9kZSgpO1xuXG4gICAgaWYgKChyb290IGluc3RhbmNlb2YgRG9jdW1lbnQgfHwgcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpICYmIHJvb3QuZ2V0U2VsZWN0aW9uICE9IG51bGwpIHtcbiAgICAgIHJldHVybiByb290O1xuICAgIH1cblxuICAgIHJldHVybiBlbC5vd25lckRvY3VtZW50O1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIHRoZSBlZGl0b3IgaXMgZm9jdXNlZC5cclxuICAgKi9cbiAgaXNGb2N1c2VkKGVkaXRvcikge1xuICAgIHJldHVybiAhIUlTX0ZPQ1VTRUQuZ2V0KGVkaXRvcik7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgdGhlIGVkaXRvciBpcyBpbiByZWFkLW9ubHkgbW9kZS5cclxuICAgKi9cbiAgaXNSZWFkT25seShlZGl0b3IpIHtcbiAgICByZXR1cm4gISFJU19SRUFEX09OTFkuZ2V0KGVkaXRvcik7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQmx1ciB0aGUgZWRpdG9yLlxyXG4gICAqL1xuICBibHVyKGVkaXRvcikge1xuICAgIHZhciBlbCA9IFJlYWN0RWRpdG9yLnRvRE9NTm9kZShlZGl0b3IsIGVkaXRvcik7XG4gICAgdmFyIHJvb3QgPSBSZWFjdEVkaXRvci5maW5kRG9jdW1lbnRPclNoYWRvd1Jvb3QoZWRpdG9yKTtcbiAgICBJU19GT0NVU0VELnNldChlZGl0b3IsIGZhbHNlKTtcblxuICAgIGlmIChyb290LmFjdGl2ZUVsZW1lbnQgPT09IGVsKSB7XG4gICAgICBlbC5ibHVyKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxyXG4gICAqIEZvY3VzIHRoZSBlZGl0b3IuXHJcbiAgICovXG4gIGZvY3VzKGVkaXRvcikge1xuICAgIHZhciBlbCA9IFJlYWN0RWRpdG9yLnRvRE9NTm9kZShlZGl0b3IsIGVkaXRvcik7XG4gICAgdmFyIHJvb3QgPSBSZWFjdEVkaXRvci5maW5kRG9jdW1lbnRPclNoYWRvd1Jvb3QoZWRpdG9yKTtcbiAgICBJU19GT0NVU0VELnNldChlZGl0b3IsIHRydWUpO1xuXG4gICAgaWYgKHJvb3QuYWN0aXZlRWxlbWVudCAhPT0gZWwpIHtcbiAgICAgIGVsLmZvY3VzKHtcbiAgICAgICAgcHJldmVudFNjcm9sbDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxyXG4gICAqIERlc2VsZWN0IHRoZSBlZGl0b3IuXHJcbiAgICovXG4gIGRlc2VsZWN0KGVkaXRvcikge1xuICAgIHZhciBlbCA9IFJlYWN0RWRpdG9yLnRvRE9NTm9kZShlZGl0b3IsIGVkaXRvcik7XG4gICAgdmFyIHtcbiAgICAgIHNlbGVjdGlvblxuICAgIH0gPSBlZGl0b3I7XG4gICAgdmFyIHJvb3QgPSBSZWFjdEVkaXRvci5maW5kRG9jdW1lbnRPclNoYWRvd1Jvb3QoZWRpdG9yKTtcbiAgICB2YXIgZG9tU2VsZWN0aW9uID0gcm9vdC5nZXRTZWxlY3Rpb24oKTtcblxuICAgIGlmIChkb21TZWxlY3Rpb24gJiYgZG9tU2VsZWN0aW9uLnJhbmdlQ291bnQgPiAwKSB7XG4gICAgICBkb21TZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgVHJhbnNmb3Jtcy5kZXNlbGVjdChlZGl0b3IpO1xuICAgIH1cbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIERPTSBub2RlIGlzIHdpdGhpbiB0aGUgZWRpdG9yLlxyXG4gICAqL1xuICBoYXNET01Ob2RlKGVkaXRvciwgdGFyZ2V0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICBlZGl0YWJsZSA9IGZhbHNlXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgdmFyIGVkaXRvckVsID0gUmVhY3RFZGl0b3IudG9ET01Ob2RlKGVkaXRvciwgZWRpdG9yKTtcbiAgICB2YXIgdGFyZ2V0RWw7IC8vIENPTVBBVDogSW4gRmlyZWZveCwgcmVhZGluZyBgdGFyZ2V0Lm5vZGVUeXBlYCB3aWxsIHRocm93IGFuIGVycm9yIGlmXG4gICAgLy8gdGFyZ2V0IGlzIG9yaWdpbmF0aW5nIGZyb20gYW4gaW50ZXJuYWwgXCJyZXN0cmljdGVkXCIgZWxlbWVudCAoZS5nLiBhXG4gICAgLy8gc3RlcHBlciBhcnJvdyBvbiBhIG51bWJlciBpbnB1dCkuICgyMDE4LzA1LzA0KVxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9pYW5zdG9ybXRheWxvci9zbGF0ZS9pc3N1ZXMvMTgxOVxuXG4gICAgdHJ5IHtcbiAgICAgIHRhcmdldEVsID0gaXNET01FbGVtZW50KHRhcmdldCkgPyB0YXJnZXQgOiB0YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmICghZXJyLm1lc3NhZ2UuaW5jbHVkZXMoJ1Blcm1pc3Npb24gZGVuaWVkIHRvIGFjY2VzcyBwcm9wZXJ0eSBcIm5vZGVUeXBlXCInKSkge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXRFbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRFbC5jbG9zZXN0KFwiW2RhdGEtc2xhdGUtZWRpdG9yXVwiKSA9PT0gZWRpdG9yRWwgJiYgKCFlZGl0YWJsZSB8fCB0YXJnZXRFbC5pc0NvbnRlbnRFZGl0YWJsZSB8fCAhIXRhcmdldEVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGF0ZS16ZXJvLXdpZHRoJykpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEluc2VydCBkYXRhIGZyb20gYSBgRGF0YVRyYW5zZmVyYCBpbnRvIHRoZSBlZGl0b3IuXHJcbiAgICovXG4gIGluc2VydERhdGEoZWRpdG9yLCBkYXRhKSB7XG4gICAgZWRpdG9yLmluc2VydERhdGEoZGF0YSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogU2V0cyBkYXRhIGZyb20gdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBmcmFnbWVudCBvbiBhIGBEYXRhVHJhbnNmZXJgLlxyXG4gICAqL1xuICBzZXRGcmFnbWVudERhdGEoZWRpdG9yLCBkYXRhKSB7XG4gICAgZWRpdG9yLnNldEZyYWdtZW50RGF0YShkYXRhKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBGaW5kIHRoZSBuYXRpdmUgRE9NIGVsZW1lbnQgZnJvbSBhIFNsYXRlIG5vZGUuXHJcbiAgICovXG4gIHRvRE9NTm9kZShlZGl0b3IsIG5vZGUpIHtcbiAgICB2YXIgZG9tTm9kZSA9IEVkaXRvci5pc0VkaXRvcihub2RlKSA/IEVESVRPUl9UT19FTEVNRU5ULmdldChlZGl0b3IpIDogS0VZX1RPX0VMRU1FTlQuZ2V0KFJlYWN0RWRpdG9yLmZpbmRLZXkoZWRpdG9yLCBub2RlKSk7XG5cbiAgICBpZiAoIWRvbU5vZGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCByZXNvbHZlIGEgRE9NIG5vZGUgZnJvbSBTbGF0ZSBub2RlOiBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkobm9kZSkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG9tTm9kZTtcbiAgfSxcblxuICAvKipcclxuICAgKiBGaW5kIGEgbmF0aXZlIERPTSBzZWxlY3Rpb24gcG9pbnQgZnJvbSBhIFNsYXRlIHBvaW50LlxyXG4gICAqL1xuICB0b0RPTVBvaW50KGVkaXRvciwgcG9pbnQpIHtcbiAgICB2YXIgW25vZGVdID0gRWRpdG9yLm5vZGUoZWRpdG9yLCBwb2ludC5wYXRoKTtcbiAgICB2YXIgZWwgPSBSZWFjdEVkaXRvci50b0RPTU5vZGUoZWRpdG9yLCBub2RlKTtcbiAgICB2YXIgZG9tUG9pbnQ7IC8vIElmIHdlJ3JlIGluc2lkZSBhIHZvaWQgbm9kZSwgZm9yY2UgdGhlIG9mZnNldCB0byAwLCBvdGhlcndpc2UgdGhlIHplcm9cbiAgICAvLyB3aWR0aCBzcGFjaW5nIGNoYXJhY3RlciB3aWxsIHJlc3VsdCBpbiBhbiBpbmNvcnJlY3Qgb2Zmc2V0IG9mIDFcblxuICAgIGlmIChFZGl0b3Iudm9pZChlZGl0b3IsIHtcbiAgICAgIGF0OiBwb2ludFxuICAgIH0pKSB7XG4gICAgICBwb2ludCA9IHtcbiAgICAgICAgcGF0aDogcG9pbnQucGF0aCxcbiAgICAgICAgb2Zmc2V0OiAwXG4gICAgICB9O1xuICAgIH0gLy8gRm9yIGVhY2ggbGVhZiwgd2UgbmVlZCB0byBpc29sYXRlIGl0cyBjb250ZW50LCB3aGljaCBtZWFucyBmaWx0ZXJpbmdcbiAgICAvLyB0byBpdHMgZGlyZWN0IHRleHQgYW5kIHplcm8td2lkdGggc3BhbnMuIChXZSBoYXZlIHRvIGZpbHRlciBvdXQgYW55XG4gICAgLy8gb3RoZXIgc2libGluZ3MgdGhhdCBtYXkgaGF2ZSBiZWVuIHJlbmRlcmVkIGFsb25nc2lkZSB0aGVtLilcblxuXG4gICAgdmFyIHNlbGVjdG9yID0gXCJbZGF0YS1zbGF0ZS1zdHJpbmddLCBbZGF0YS1zbGF0ZS16ZXJvLXdpZHRoXVwiO1xuICAgIHZhciB0ZXh0cyA9IEFycmF5LmZyb20oZWwucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuICAgIHZhciBzdGFydCA9IDA7XG5cbiAgICBmb3IgKHZhciB0ZXh0IG9mIHRleHRzKSB7XG4gICAgICB2YXIgZG9tTm9kZSA9IHRleHQuY2hpbGROb2Rlc1swXTtcblxuICAgICAgaWYgKGRvbU5vZGUgPT0gbnVsbCB8fCBkb21Ob2RlLnRleHRDb250ZW50ID09IG51bGwpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciB7XG4gICAgICAgIGxlbmd0aFxuICAgICAgfSA9IGRvbU5vZGUudGV4dENvbnRlbnQ7XG4gICAgICB2YXIgYXR0ciA9IHRleHQuZ2V0QXR0cmlidXRlKCdkYXRhLXNsYXRlLWxlbmd0aCcpO1xuICAgICAgdmFyIHRydWVMZW5ndGggPSBhdHRyID09IG51bGwgPyBsZW5ndGggOiBwYXJzZUludChhdHRyLCAxMCk7XG4gICAgICB2YXIgZW5kID0gc3RhcnQgKyB0cnVlTGVuZ3RoO1xuXG4gICAgICBpZiAocG9pbnQub2Zmc2V0IDw9IGVuZCkge1xuICAgICAgICB2YXIgb2Zmc2V0ID0gTWF0aC5taW4obGVuZ3RoLCBNYXRoLm1heCgwLCBwb2ludC5vZmZzZXQgLSBzdGFydCkpO1xuICAgICAgICBkb21Qb2ludCA9IFtkb21Ob2RlLCBvZmZzZXRdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgc3RhcnQgPSBlbmQ7XG4gICAgfVxuXG4gICAgaWYgKCFkb21Qb2ludCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHJlc29sdmUgYSBET00gcG9pbnQgZnJvbSBTbGF0ZSBwb2ludDogXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KHBvaW50KSkpO1xuICAgIH1cblxuICAgIHJldHVybiBkb21Qb2ludDtcbiAgfSxcblxuICAvKipcclxuICAgKiBGaW5kIGEgbmF0aXZlIERPTSByYW5nZSBmcm9tIGEgU2xhdGUgYHJhbmdlYC5cclxuICAgKlxyXG4gICAqIE5vdGljZTogdGhlIHJldHVybmVkIHJhbmdlIHdpbGwgYWx3YXlzIGJlIG9yZGluYWwgcmVnYXJkbGVzcyBvZiB0aGUgZGlyZWN0aW9uIG9mIFNsYXRlIGByYW5nZWAgZHVlIHRvIERPTSBBUEkgbGltaXQuXHJcbiAgICpcclxuICAgKiB0aGVyZSBpcyBubyB3YXkgdG8gY3JlYXRlIGEgcmV2ZXJzZSBET00gUmFuZ2UgdXNpbmcgUmFuZ2Uuc2V0U3RhcnQvc2V0RW5kXHJcbiAgICogYWNjb3JkaW5nIHRvIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1yYW5nZS1icC1zZXQuXHJcbiAgICovXG4gIHRvRE9NUmFuZ2UoZWRpdG9yLCByYW5nZSkge1xuICAgIHZhciB7XG4gICAgICBhbmNob3IsXG4gICAgICBmb2N1c1xuICAgIH0gPSByYW5nZTtcbiAgICB2YXIgaXNCYWNrd2FyZCA9IFJhbmdlLmlzQmFja3dhcmQocmFuZ2UpO1xuICAgIHZhciBkb21BbmNob3IgPSBSZWFjdEVkaXRvci50b0RPTVBvaW50KGVkaXRvciwgYW5jaG9yKTtcbiAgICB2YXIgZG9tRm9jdXMgPSBSYW5nZS5pc0NvbGxhcHNlZChyYW5nZSkgPyBkb21BbmNob3IgOiBSZWFjdEVkaXRvci50b0RPTVBvaW50KGVkaXRvciwgZm9jdXMpO1xuICAgIHZhciB3aW5kb3cgPSBSZWFjdEVkaXRvci5nZXRXaW5kb3coZWRpdG9yKTtcbiAgICB2YXIgZG9tUmFuZ2UgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICB2YXIgW3N0YXJ0Tm9kZSwgc3RhcnRPZmZzZXRdID0gaXNCYWNrd2FyZCA/IGRvbUZvY3VzIDogZG9tQW5jaG9yO1xuICAgIHZhciBbZW5kTm9kZSwgZW5kT2Zmc2V0XSA9IGlzQmFja3dhcmQgPyBkb21BbmNob3IgOiBkb21Gb2N1czsgLy8gQSBzbGF0ZSBQb2ludCBhdCB6ZXJvLXdpZHRoIExlYWYgYWx3YXlzIGhhcyBhbiBvZmZzZXQgb2YgMCBidXQgYSBuYXRpdmUgRE9NIHNlbGVjdGlvbiBhdFxuICAgIC8vIHplcm8td2lkdGggbm9kZSBoYXMgYW4gb2Zmc2V0IG9mIDEgc28gd2UgaGF2ZSB0byBjaGVjayBpZiB3ZSBhcmUgaW4gYSB6ZXJvLXdpZHRoIG5vZGUgYW5kXG4gICAgLy8gYWRqdXN0IHRoZSBvZmZzZXQgYWNjb3JkaW5nbHkuXG5cbiAgICB2YXIgc3RhcnRFbCA9IGlzRE9NRWxlbWVudChzdGFydE5vZGUpID8gc3RhcnROb2RlIDogc3RhcnROb2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgdmFyIGlzU3RhcnRBdFplcm9XaWR0aCA9ICEhc3RhcnRFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xhdGUtemVyby13aWR0aCcpO1xuICAgIHZhciBlbmRFbCA9IGlzRE9NRWxlbWVudChlbmROb2RlKSA/IGVuZE5vZGUgOiBlbmROb2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgdmFyIGlzRW5kQXRaZXJvV2lkdGggPSAhIWVuZEVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGF0ZS16ZXJvLXdpZHRoJyk7XG4gICAgZG9tUmFuZ2Uuc2V0U3RhcnQoc3RhcnROb2RlLCBpc1N0YXJ0QXRaZXJvV2lkdGggPyAxIDogc3RhcnRPZmZzZXQpO1xuICAgIGRvbVJhbmdlLnNldEVuZChlbmROb2RlLCBpc0VuZEF0WmVyb1dpZHRoID8gMSA6IGVuZE9mZnNldCk7XG4gICAgcmV0dXJuIGRvbVJhbmdlO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEZpbmQgYSBTbGF0ZSBub2RlIGZyb20gYSBuYXRpdmUgRE9NIGBlbGVtZW50YC5cclxuICAgKi9cbiAgdG9TbGF0ZU5vZGUoZWRpdG9yLCBkb21Ob2RlKSB7XG4gICAgdmFyIGRvbUVsID0gaXNET01FbGVtZW50KGRvbU5vZGUpID8gZG9tTm9kZSA6IGRvbU5vZGUucGFyZW50RWxlbWVudDtcblxuICAgIGlmIChkb21FbCAmJiAhZG9tRWwuaGFzQXR0cmlidXRlKCdkYXRhLXNsYXRlLW5vZGUnKSkge1xuICAgICAgZG9tRWwgPSBkb21FbC5jbG9zZXN0KFwiW2RhdGEtc2xhdGUtbm9kZV1cIik7XG4gICAgfVxuXG4gICAgdmFyIG5vZGUgPSBkb21FbCA/IEVMRU1FTlRfVE9fTk9ERS5nZXQoZG9tRWwpIDogbnVsbDtcblxuICAgIGlmICghbm9kZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHJlc29sdmUgYSBTbGF0ZSBub2RlIGZyb20gRE9NIG5vZGU6IFwiLmNvbmNhdChkb21FbCkpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgdGFyZ2V0IHJhbmdlIGZyb20gYSBET00gYGV2ZW50YC5cclxuICAgKi9cbiAgZmluZEV2ZW50UmFuZ2UoZWRpdG9yLCBldmVudCkge1xuICAgIGlmICgnbmF0aXZlRXZlbnQnIGluIGV2ZW50KSB7XG4gICAgICBldmVudCA9IGV2ZW50Lm5hdGl2ZUV2ZW50O1xuICAgIH1cblxuICAgIHZhciB7XG4gICAgICBjbGllbnRYOiB4LFxuICAgICAgY2xpZW50WTogeSxcbiAgICAgIHRhcmdldFxuICAgIH0gPSBldmVudDtcblxuICAgIGlmICh4ID09IG51bGwgfHwgeSA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcmVzb2x2ZSBhIFNsYXRlIHJhbmdlIGZyb20gYSBET00gZXZlbnQ6IFwiLmNvbmNhdChldmVudCkpO1xuICAgIH1cblxuICAgIHZhciBub2RlID0gUmVhY3RFZGl0b3IudG9TbGF0ZU5vZGUoZWRpdG9yLCBldmVudC50YXJnZXQpO1xuICAgIHZhciBwYXRoID0gUmVhY3RFZGl0b3IuZmluZFBhdGgoZWRpdG9yLCBub2RlKTsgLy8gSWYgdGhlIGRyb3AgdGFyZ2V0IGlzIGluc2lkZSBhIHZvaWQgbm9kZSwgbW92ZSBpdCBpbnRvIGVpdGhlciB0aGVcbiAgICAvLyBuZXh0IG9yIHByZXZpb3VzIG5vZGUsIGRlcGVuZGluZyBvbiB3aGljaCBzaWRlIHRoZSBgeGAgYW5kIGB5YFxuICAgIC8vIGNvb3JkaW5hdGVzIGFyZSBjbG9zZXN0IHRvLlxuXG4gICAgaWYgKEVkaXRvci5pc1ZvaWQoZWRpdG9yLCBub2RlKSkge1xuICAgICAgdmFyIHJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgaXNQcmV2ID0gZWRpdG9yLmlzSW5saW5lKG5vZGUpID8geCAtIHJlY3QubGVmdCA8IHJlY3QubGVmdCArIHJlY3Qud2lkdGggLSB4IDogeSAtIHJlY3QudG9wIDwgcmVjdC50b3AgKyByZWN0LmhlaWdodCAtIHk7XG4gICAgICB2YXIgZWRnZSA9IEVkaXRvci5wb2ludChlZGl0b3IsIHBhdGgsIHtcbiAgICAgICAgZWRnZTogaXNQcmV2ID8gJ3N0YXJ0JyA6ICdlbmQnXG4gICAgICB9KTtcbiAgICAgIHZhciBwb2ludCA9IGlzUHJldiA/IEVkaXRvci5iZWZvcmUoZWRpdG9yLCBlZGdlKSA6IEVkaXRvci5hZnRlcihlZGl0b3IsIGVkZ2UpO1xuXG4gICAgICBpZiAocG9pbnQpIHtcbiAgICAgICAgdmFyIF9yYW5nZSA9IEVkaXRvci5yYW5nZShlZGl0b3IsIHBvaW50KTtcblxuICAgICAgICByZXR1cm4gX3JhbmdlO1xuICAgICAgfVxuICAgIH0gLy8gRWxzZSByZXNvbHZlIGEgcmFuZ2UgZnJvbSB0aGUgY2FyZXQgcG9zaXRpb24gd2hlcmUgdGhlIGRyb3Agb2NjdXJlZC5cblxuXG4gICAgdmFyIGRvbVJhbmdlO1xuICAgIHZhciB7XG4gICAgICBkb2N1bWVudFxuICAgIH0gPSB3aW5kb3c7IC8vIENPTVBBVDogSW4gRmlyZWZveCwgYGNhcmV0UmFuZ2VGcm9tUG9pbnRgIGRvZXNuJ3QgZXhpc3QuICgyMDE2LzA3LzI1KVxuXG4gICAgaWYgKGRvY3VtZW50LmNhcmV0UmFuZ2VGcm9tUG9pbnQpIHtcbiAgICAgIGRvbVJhbmdlID0gZG9jdW1lbnQuY2FyZXRSYW5nZUZyb21Qb2ludCh4LCB5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBvc2l0aW9uID0gZG9jdW1lbnQuY2FyZXRQb3NpdGlvbkZyb21Qb2ludCh4LCB5KTtcblxuICAgICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICAgIGRvbVJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgZG9tUmFuZ2Uuc2V0U3RhcnQocG9zaXRpb24ub2Zmc2V0Tm9kZSwgcG9zaXRpb24ub2Zmc2V0KTtcbiAgICAgICAgZG9tUmFuZ2Uuc2V0RW5kKHBvc2l0aW9uLm9mZnNldE5vZGUsIHBvc2l0aW9uLm9mZnNldCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFkb21SYW5nZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHJlc29sdmUgYSBTbGF0ZSByYW5nZSBmcm9tIGEgRE9NIGV2ZW50OiBcIi5jb25jYXQoZXZlbnQpKTtcbiAgICB9IC8vIFJlc29sdmUgYSBTbGF0ZSByYW5nZSBmcm9tIHRoZSBET00gcmFuZ2UuXG5cblxuICAgIHZhciByYW5nZSA9IFJlYWN0RWRpdG9yLnRvU2xhdGVSYW5nZShlZGl0b3IsIGRvbVJhbmdlLCB7XG4gICAgICBleGFjdE1hdGNoOiBmYWxzZVxuICAgIH0pO1xuICAgIHJldHVybiByYW5nZTtcbiAgfSxcblxuICAvKipcclxuICAgKiBGaW5kIGEgU2xhdGUgcG9pbnQgZnJvbSBhIERPTSBzZWxlY3Rpb24ncyBgZG9tTm9kZWAgYW5kIGBkb21PZmZzZXRgLlxyXG4gICAqL1xuICB0b1NsYXRlUG9pbnQoZWRpdG9yLCBkb21Qb2ludCwgZXhhY3RNYXRjaCkge1xuICAgIHZhciBbbmVhcmVzdE5vZGUsIG5lYXJlc3RPZmZzZXRdID0gZXhhY3RNYXRjaCA/IGRvbVBvaW50IDogbm9ybWFsaXplRE9NUG9pbnQoZG9tUG9pbnQpO1xuICAgIHZhciBwYXJlbnROb2RlID0gbmVhcmVzdE5vZGUucGFyZW50Tm9kZTtcbiAgICB2YXIgdGV4dE5vZGUgPSBudWxsO1xuICAgIHZhciBvZmZzZXQgPSAwO1xuXG4gICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgIHZhciB2b2lkTm9kZSA9IHBhcmVudE5vZGUuY2xvc2VzdCgnW2RhdGEtc2xhdGUtdm9pZD1cInRydWVcIl0nKTtcbiAgICAgIHZhciBsZWFmTm9kZSA9IHBhcmVudE5vZGUuY2xvc2VzdCgnW2RhdGEtc2xhdGUtbGVhZl0nKTtcbiAgICAgIHZhciBkb21Ob2RlID0gbnVsbDsgLy8gQ2FsY3VsYXRlIGhvdyBmYXIgaW50byB0aGUgdGV4dCBub2RlIHRoZSBgbmVhcmVzdE5vZGVgIGlzLCBzbyB0aGF0IHdlXG4gICAgICAvLyBjYW4gZGV0ZXJtaW5lIHdoYXQgdGhlIG9mZnNldCByZWxhdGl2ZSB0byB0aGUgdGV4dCBub2RlIGlzLlxuXG4gICAgICBpZiAobGVhZk5vZGUpIHtcbiAgICAgICAgdGV4dE5vZGUgPSBsZWFmTm9kZS5jbG9zZXN0KCdbZGF0YS1zbGF0ZS1ub2RlPVwidGV4dFwiXScpO1xuXG4gICAgICAgIHZhciBfd2luZG93ID0gUmVhY3RFZGl0b3IuZ2V0V2luZG93KGVkaXRvcik7XG5cbiAgICAgICAgdmFyIHJhbmdlID0gX3dpbmRvdy5kb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuXG4gICAgICAgIHJhbmdlLnNldFN0YXJ0KHRleHROb2RlLCAwKTtcbiAgICAgICAgcmFuZ2Uuc2V0RW5kKG5lYXJlc3ROb2RlLCBuZWFyZXN0T2Zmc2V0KTtcbiAgICAgICAgdmFyIGNvbnRlbnRzID0gcmFuZ2UuY2xvbmVDb250ZW50cygpO1xuICAgICAgICB2YXIgcmVtb3ZhbHMgPSBbLi4uQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoY29udGVudHMucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc2xhdGUtemVyby13aWR0aF0nKSksIC4uLkFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGNvbnRlbnRzLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjb250ZW50ZWRpdGFibGU9ZmFsc2VdJykpXTtcbiAgICAgICAgcmVtb3ZhbHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gICAgICAgIH0pOyAvLyBDT01QQVQ6IEVkZ2UgaGFzIGEgYnVnIHdoZXJlIFJhbmdlLnByb3RvdHlwZS50b1N0cmluZygpIHdpbGxcbiAgICAgICAgLy8gY29udmVydCBcXG4gaW50byBcXHJcXG4uIFRoZSBidWcgY2F1c2VzIGEgbG9vcCB3aGVuIHNsYXRlLXJlYWN0XG4gICAgICAgIC8vIGF0dGVtcHRzIHRvIHJlcG9zaXRpb24gaXRzIGN1cnNvciB0byBtYXRjaCB0aGUgbmF0aXZlIHBvc2l0aW9uLiBVc2VcbiAgICAgICAgLy8gdGV4dENvbnRlbnQubGVuZ3RoIGluc3RlYWQuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzEwMjkxMTE2L1xuXG4gICAgICAgIG9mZnNldCA9IGNvbnRlbnRzLnRleHRDb250ZW50Lmxlbmd0aDtcbiAgICAgICAgZG9tTm9kZSA9IHRleHROb2RlO1xuICAgICAgfSBlbHNlIGlmICh2b2lkTm9kZSkge1xuICAgICAgICAvLyBGb3Igdm9pZCBub2RlcywgdGhlIGVsZW1lbnQgd2l0aCB0aGUgb2Zmc2V0IGtleSB3aWxsIGJlIGEgY291c2luLCBub3QgYW5cbiAgICAgICAgLy8gYW5jZXN0b3IsIHNvIGZpbmQgaXQgYnkgZ29pbmcgZG93biBmcm9tIHRoZSBuZWFyZXN0IHZvaWQgcGFyZW50LlxuICAgICAgICBsZWFmTm9kZSA9IHZvaWROb2RlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNsYXRlLWxlYWZdJyk7IC8vIENPTVBBVDogSW4gcmVhZC1vbmx5IGVkaXRvcnMgdGhlIGxlYWYgaXMgbm90IHJlbmRlcmVkLlxuXG4gICAgICAgIGlmICghbGVhZk5vZGUpIHtcbiAgICAgICAgICBvZmZzZXQgPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRleHROb2RlID0gbGVhZk5vZGUuY2xvc2VzdCgnW2RhdGEtc2xhdGUtbm9kZT1cInRleHRcIl0nKTtcbiAgICAgICAgICBkb21Ob2RlID0gbGVhZk5vZGU7XG4gICAgICAgICAgb2Zmc2V0ID0gZG9tTm9kZS50ZXh0Q29udGVudC5sZW5ndGg7XG4gICAgICAgICAgZG9tTm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zbGF0ZS16ZXJvLXdpZHRoXScpLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgb2Zmc2V0IC09IGVsLnRleHRDb250ZW50Lmxlbmd0aDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBDT01QQVQ6IElmIHRoZSBwYXJlbnQgbm9kZSBpcyBhIFNsYXRlIHplcm8td2lkdGggc3BhY2UsIGVkaXRvciBpc1xuICAgICAgLy8gYmVjYXVzZSB0aGUgdGV4dCBub2RlIHNob3VsZCBoYXZlIG5vIGNoYXJhY3RlcnMuIEhvd2V2ZXIsIGR1cmluZyBJTUVcbiAgICAgIC8vIGNvbXBvc2l0aW9uIHRoZSBBU0NJSSBjaGFyYWN0ZXJzIHdpbGwgYmUgcHJlcGVuZGVkIHRvIHRoZSB6ZXJvLXdpZHRoXG4gICAgICAvLyBzcGFjZSwgc28gc3VidHJhY3QgMSBmcm9tIHRoZSBvZmZzZXQgdG8gYWNjb3VudCBmb3IgdGhlIHplcm8td2lkdGhcbiAgICAgIC8vIHNwYWNlIGNoYXJhY3Rlci5cblxuXG4gICAgICBpZiAoZG9tTm9kZSAmJiBvZmZzZXQgPT09IGRvbU5vZGUudGV4dENvbnRlbnQubGVuZ3RoICYmIHBhcmVudE5vZGUuaGFzQXR0cmlidXRlKCdkYXRhLXNsYXRlLXplcm8td2lkdGgnKSkge1xuICAgICAgICBvZmZzZXQtLTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRleHROb2RlKSB7XG4gICAgICBpZiAoZXhhY3RNYXRjaCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHJlc29sdmUgYSBTbGF0ZSBwb2ludCBmcm9tIERPTSBwb2ludDogXCIuY29uY2F0KGRvbVBvaW50KSk7XG4gICAgfSAvLyBDT01QQVQ6IElmIHNvbWVvbmUgaXMgY2xpY2tpbmcgZnJvbSBvbmUgU2xhdGUgZWRpdG9yIGludG8gYW5vdGhlcixcbiAgICAvLyB0aGUgc2VsZWN0IGV2ZW50IGZpcmVzIHR3aWNlLCBvbmNlIGZvciB0aGUgb2xkIGVkaXRvcidzIGBlbGVtZW50YFxuICAgIC8vIGZpcnN0LCBhbmQgdGhlbiBhZnRlcndhcmRzIGZvciB0aGUgY29ycmVjdCBgZWxlbWVudGAuICgyMDE3LzAzLzAzKVxuXG5cbiAgICB2YXIgc2xhdGVOb2RlID0gUmVhY3RFZGl0b3IudG9TbGF0ZU5vZGUoZWRpdG9yLCB0ZXh0Tm9kZSk7XG4gICAgdmFyIHBhdGggPSBSZWFjdEVkaXRvci5maW5kUGF0aChlZGl0b3IsIHNsYXRlTm9kZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGgsXG4gICAgICBvZmZzZXRcbiAgICB9O1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEZpbmQgYSBTbGF0ZSByYW5nZSBmcm9tIGEgRE9NIHJhbmdlIG9yIHNlbGVjdGlvbi5cclxuICAgKi9cbiAgdG9TbGF0ZVJhbmdlKGVkaXRvciwgZG9tUmFuZ2UsIG9wdGlvbnMpIHtcbiAgICB2YXIge1xuICAgICAgZXhhY3RNYXRjaFxuICAgIH0gPSBvcHRpb25zO1xuICAgIHZhciBlbCA9IGlzRE9NU2VsZWN0aW9uKGRvbVJhbmdlKSA/IGRvbVJhbmdlLmFuY2hvck5vZGUgOiBkb21SYW5nZS5zdGFydENvbnRhaW5lcjtcbiAgICB2YXIgYW5jaG9yTm9kZTtcbiAgICB2YXIgYW5jaG9yT2Zmc2V0O1xuICAgIHZhciBmb2N1c05vZGU7XG4gICAgdmFyIGZvY3VzT2Zmc2V0O1xuICAgIHZhciBpc0NvbGxhcHNlZDtcblxuICAgIGlmIChlbCkge1xuICAgICAgaWYgKGlzRE9NU2VsZWN0aW9uKGRvbVJhbmdlKSkge1xuICAgICAgICBhbmNob3JOb2RlID0gZG9tUmFuZ2UuYW5jaG9yTm9kZTtcbiAgICAgICAgYW5jaG9yT2Zmc2V0ID0gZG9tUmFuZ2UuYW5jaG9yT2Zmc2V0O1xuICAgICAgICBmb2N1c05vZGUgPSBkb21SYW5nZS5mb2N1c05vZGU7XG4gICAgICAgIGZvY3VzT2Zmc2V0ID0gZG9tUmFuZ2UuZm9jdXNPZmZzZXQ7IC8vIENPTVBBVDogVGhlcmUncyBhIGJ1ZyBpbiBjaHJvbWUgdGhhdCBhbHdheXMgcmV0dXJucyBgdHJ1ZWAgZm9yXG4gICAgICAgIC8vIGBpc0NvbGxhcHNlZGAgZm9yIGEgU2VsZWN0aW9uIHRoYXQgY29tZXMgZnJvbSBhIFNoYWRvd1Jvb3QuXG4gICAgICAgIC8vICgyMDIwLzA4LzA4KVxuICAgICAgICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NDc1MjNcblxuICAgICAgICBpZiAoSVNfQ0hST01FICYmIGhhc1NoYWRvd1Jvb3QoKSkge1xuICAgICAgICAgIGlzQ29sbGFwc2VkID0gZG9tUmFuZ2UuYW5jaG9yTm9kZSA9PT0gZG9tUmFuZ2UuZm9jdXNOb2RlICYmIGRvbVJhbmdlLmFuY2hvck9mZnNldCA9PT0gZG9tUmFuZ2UuZm9jdXNPZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXNDb2xsYXBzZWQgPSBkb21SYW5nZS5pc0NvbGxhcHNlZDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW5jaG9yTm9kZSA9IGRvbVJhbmdlLnN0YXJ0Q29udGFpbmVyO1xuICAgICAgICBhbmNob3JPZmZzZXQgPSBkb21SYW5nZS5zdGFydE9mZnNldDtcbiAgICAgICAgZm9jdXNOb2RlID0gZG9tUmFuZ2UuZW5kQ29udGFpbmVyO1xuICAgICAgICBmb2N1c09mZnNldCA9IGRvbVJhbmdlLmVuZE9mZnNldDtcbiAgICAgICAgaXNDb2xsYXBzZWQgPSBkb21SYW5nZS5jb2xsYXBzZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFuY2hvck5vZGUgPT0gbnVsbCB8fCBmb2N1c05vZGUgPT0gbnVsbCB8fCBhbmNob3JPZmZzZXQgPT0gbnVsbCB8fCBmb2N1c09mZnNldCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcmVzb2x2ZSBhIFNsYXRlIHJhbmdlIGZyb20gRE9NIHJhbmdlOiBcIi5jb25jYXQoZG9tUmFuZ2UpKTtcbiAgICB9XG5cbiAgICB2YXIgYW5jaG9yID0gUmVhY3RFZGl0b3IudG9TbGF0ZVBvaW50KGVkaXRvciwgW2FuY2hvck5vZGUsIGFuY2hvck9mZnNldF0sIGV4YWN0TWF0Y2gpO1xuXG4gICAgaWYgKCFhbmNob3IpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBmb2N1cyA9IGlzQ29sbGFwc2VkID8gYW5jaG9yIDogUmVhY3RFZGl0b3IudG9TbGF0ZVBvaW50KGVkaXRvciwgW2ZvY3VzTm9kZSwgZm9jdXNPZmZzZXRdLCBleGFjdE1hdGNoKTtcblxuICAgIGlmICghZm9jdXMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBhbmNob3IsXG4gICAgICBmb2N1c1xuICAgIH07XG4gIH0sXG5cbiAgaGFzUmFuZ2UoZWRpdG9yLCByYW5nZSkge1xuICAgIHZhciB7XG4gICAgICBhbmNob3IsXG4gICAgICBmb2N1c1xuICAgIH0gPSByYW5nZTtcbiAgICByZXR1cm4gRWRpdG9yLmhhc1BhdGgoZWRpdG9yLCBhbmNob3IucGF0aCkgJiYgRWRpdG9yLmhhc1BhdGgoZWRpdG9yLCBmb2N1cy5wYXRoKTtcbiAgfVxuXG59O1xuXG4vKipcclxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCBhcmUgdGhlIHNhbWUgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGVcclxuICogU3RyaW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0gcHJldiAgdGhlIHByZXZpb3VzIHRleHRcclxuICogQHBhcmFtIG5leHQgIHRoZSBuZXh0IHRleHRcclxuICogQHJldHVybnMgdGhlIG9mZnNldCBvZiB0aGUgc3RhcnQgb2YgdGhlIGRpZmZlcmVuY2U7IG51bGwgaWYgdGhlcmUgaXMgbm8gZGlmZmVyZW5jZVxyXG4gKi9cblxuZnVuY3Rpb24gZ2V0RGlmZlN0YXJ0KHByZXYsIG5leHQpIHtcbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKHByZXYubGVuZ3RoLCBuZXh0Lmxlbmd0aCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChwcmV2LmNoYXJBdChpKSAhPT0gbmV4dC5jaGFyQXQoaSkpIHJldHVybiBpO1xuICB9XG5cbiAgaWYgKHByZXYubGVuZ3RoICE9PSBuZXh0Lmxlbmd0aCkgcmV0dXJuIGxlbmd0aDtcbiAgcmV0dXJuIG51bGw7XG59XG4vKipcclxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCBhcmUgdGhlIHNhbWUgYXQgdGhlIGVuZCBvZiB0aGUgU3RyaW5nXHJcbiAqIHVwIHRvIGBtYXhgLiBNYXggcHJldmVudHMgZG91YmxlLWNvdW50aW5nIGNoYXJhY3RlcnMgd2hlbiB0aGVyZSBhcmVcclxuICogbXVsdGlwbGUgZHVwbGljYXRlIGNoYXJhY3RlcnMgYXJvdW5kIHRoZSBkaWZmIGFyZWEuXHJcbiAqXHJcbiAqIEBwYXJhbSBwcmV2ICB0aGUgcHJldmlvdXMgdGV4dFxyXG4gKiBAcGFyYW0gbmV4dCAgdGhlIG5leHQgdGV4dFxyXG4gKiBAcGFyYW0gbWF4ICB0aGUgbWF4IGxlbmd0aCB0byB0ZXN0LlxyXG4gKiBAcmV0dXJucyBudW1iZXIgb2YgY2hhcmFjdGVycyB0aGF0IGFyZSB0aGUgc2FtZSBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmdcclxuICovXG5cblxuZnVuY3Rpb24gZ2V0RGlmZkVuZChwcmV2LCBuZXh0LCBtYXgpIHtcbiAgdmFyIHByZXZMZW5ndGggPSBwcmV2Lmxlbmd0aDtcbiAgdmFyIG5leHRMZW5ndGggPSBuZXh0Lmxlbmd0aDtcbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKHByZXZMZW5ndGgsIG5leHRMZW5ndGgsIG1heCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHZhciBwcmV2Q2hhciA9IHByZXYuY2hhckF0KHByZXZMZW5ndGggLSBpIC0gMSk7XG4gICAgdmFyIG5leHRDaGFyID0gbmV4dC5jaGFyQXQobmV4dExlbmd0aCAtIGkgLSAxKTtcbiAgICBpZiAocHJldkNoYXIgIT09IG5leHRDaGFyKSByZXR1cm4gaTtcbiAgfVxuXG4gIGlmIChwcmV2Lmxlbmd0aCAhPT0gbmV4dC5sZW5ndGgpIHJldHVybiBsZW5ndGg7XG4gIHJldHVybiBudWxsO1xufVxuLyoqXHJcbiAqIFRha2VzIHR3byBzdHJpbmdzIGFuZCByZXR1cm5zIGFuIG9iamVjdCByZXByZXNlbnRpbmcgdHdvIG9mZnNldHMuIFRoZVxyXG4gKiBmaXJzdCwgYHN0YXJ0YCByZXByZXNlbnRzIHRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyB0aGF0IGFyZSB0aGUgc2FtZSBhdFxyXG4gKiB0aGUgZnJvbnQgb2YgdGhlIFN0cmluZy4gVGhlIGBlbmRgIHJlcHJlc2VudHMgdGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzXHJcbiAqIHRoYXQgYXJlIHRoZSBzYW1lIGF0IHRoZSBlbmQgb2YgdGhlIFN0cmluZy5cclxuICpcclxuICogUmV0dXJucyBudWxsIGlmIHRoZXkgYXJlIGlkZW50aWNhbC5cclxuICpcclxuICogQHBhcmFtIHByZXYgIHRoZSBwcmV2aW91cyB0ZXh0XHJcbiAqIEBwYXJhbSBuZXh0ICB0aGUgbmV4dCB0ZXh0XHJcbiAqIEByZXR1cm5zIHRoZSBkaWZmZXJlbmNlIHRleHQgcmFuZ2U7IG51bGwgaWYgdGhlcmUgYXJlIG5vIGRpZmZlcmVuY2VzLlxyXG4gKi9cblxuXG5mdW5jdGlvbiBnZXREaWZmT2Zmc2V0cyhwcmV2LCBuZXh0KSB7XG4gIGlmIChwcmV2ID09PSBuZXh0KSByZXR1cm4gbnVsbDtcbiAgdmFyIHN0YXJ0ID0gZ2V0RGlmZlN0YXJ0KHByZXYsIG5leHQpO1xuICBpZiAoc3RhcnQgPT09IG51bGwpIHJldHVybiBudWxsO1xuICB2YXIgbWF4RW5kID0gTWF0aC5taW4ocHJldi5sZW5ndGggLSBzdGFydCwgbmV4dC5sZW5ndGggLSBzdGFydCk7XG4gIHZhciBlbmQgPSBnZXREaWZmRW5kKHByZXYsIG5leHQsIG1heEVuZCk7XG4gIGlmIChlbmQgPT09IG51bGwpIHJldHVybiBudWxsO1xuICByZXR1cm4ge1xuICAgIHN0YXJ0LFxuICAgIGVuZFxuICB9O1xufVxuLyoqXHJcbiAqIFRha2VzIGEgdGV4dCBzdHJpbmcgYW5kIHJldHVybnMgYSBzbGljZSBmcm9tIHRoZSBzdHJpbmcgYXQgdGhlIGdpdmVuIHRleHQgcmFuZ2VcclxuICpcclxuICogQHBhcmFtIHRleHQgIHRoZSB0ZXh0XHJcbiAqIEBwYXJhbSBvZmZzZXRzICB0aGUgdGV4dCByYW5nZVxyXG4gKiBAcmV0dXJucyB0aGUgdGV4dCBzbGljZSBhdCB0ZXh0IHJhbmdlXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIHNsaWNlVGV4dCh0ZXh0LCBvZmZzZXRzKSB7XG4gIHJldHVybiB0ZXh0LnNsaWNlKG9mZnNldHMuc3RhcnQsIHRleHQubGVuZ3RoIC0gb2Zmc2V0cy5lbmQpO1xufVxuLyoqXHJcbiAqIFRha2VzIHR3byBzdHJpbmdzIGFuZCByZXR1cm5zIGEgc21hcnQgZGlmZiB0aGF0IGNhbiBiZSB1c2VkIHRvIGRlc2NyaWJlIHRoZVxyXG4gKiBjaGFuZ2UgaW4gYSB3YXkgdGhhdCBjYW4gYmUgdXNlZCBhcyBvcGVyYXRpb25zIGxpa2UgaW5zZXJ0aW5nLCByZW1vdmluZyBvclxyXG4gKiByZXBsYWNpbmcgdGV4dC5cclxuICpcclxuICogQHBhcmFtIHByZXYgdGhlIHByZXZpb3VzIHRleHRcclxuICogQHBhcmFtIG5leHQgdGhlIG5leHQgdGV4dFxyXG4gKiBAcmV0dXJucyB0aGUgdGV4dCBkaWZmZXJlbmNlXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGRpZmZUZXh0KHByZXYsIG5leHQpIHtcbiAgaWYgKHByZXYgPT09IHVuZGVmaW5lZCB8fCBuZXh0ID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xuICB2YXIgb2Zmc2V0cyA9IGdldERpZmZPZmZzZXRzKHByZXYsIG5leHQpO1xuICBpZiAob2Zmc2V0cyA9PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgdmFyIGluc2VydFRleHQgPSBzbGljZVRleHQobmV4dCwgb2Zmc2V0cyk7XG4gIHZhciByZW1vdmVUZXh0ID0gc2xpY2VUZXh0KHByZXYsIG9mZnNldHMpO1xuICByZXR1cm4ge1xuICAgIHN0YXJ0OiBvZmZzZXRzLnN0YXJ0LFxuICAgIGVuZDogcHJldi5sZW5ndGggLSBvZmZzZXRzLmVuZCxcbiAgICBpbnNlcnRUZXh0LFxuICAgIHJlbW92ZVRleHRcbiAgfTtcbn1cbmZ1bmN0aW9uIGNvbWJpbmVJbnNlcnRlZFRleHQoaW5zZXJ0ZWRUZXh0KSB7XG4gIHJldHVybiBpbnNlcnRlZFRleHQucmVkdWNlKChhY2MsIF9yZWYpID0+IHtcbiAgICB2YXIge1xuICAgICAgdGV4dFxuICAgIH0gPSBfcmVmO1xuICAgIHJldHVybiBcIlwiLmNvbmNhdChhY2MpLmNvbmNhdCh0ZXh0Lmluc2VydFRleHQpO1xuICB9LCAnJyk7XG59XG5mdW5jdGlvbiBnZXRUZXh0SW5zZXJ0aW9uKGVkaXRvciwgZG9tTm9kZSkge1xuICB2YXIgbm9kZSA9IFJlYWN0RWRpdG9yLnRvU2xhdGVOb2RlKGVkaXRvciwgZG9tTm9kZSk7XG5cbiAgaWYgKCFUZXh0JDEuaXNUZXh0KG5vZGUpKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHZhciBwcmV2VGV4dCA9IG5vZGUudGV4dDtcbiAgdmFyIG5leHRUZXh0ID0gZG9tTm9kZS50ZXh0Q29udGVudDsgLy8gdGV4dENvbnRlbnQgd2lsbCBwYWQgYW4gZXh0cmEgXFxuIHdoZW4gdGhlIHRleHRDb250ZW50IGVuZHMgd2l0aCBhbiBcXG5cblxuICBpZiAobmV4dFRleHQuZW5kc1dpdGgoJ1xcbicpKSB7XG4gICAgbmV4dFRleHQgPSBuZXh0VGV4dC5zbGljZSgwLCBuZXh0VGV4dC5sZW5ndGggLSAxKTtcbiAgfSAvLyBJZiB0aGUgdGV4dCBpcyBubyBkaWZmZXJlbnQsIHRoZXJlIGlzIG5vIGRpZmYuXG5cblxuICBpZiAobmV4dFRleHQgIT09IHByZXZUZXh0KSB7XG4gICAgdmFyIHRleHREaWZmID0gZGlmZlRleHQocHJldlRleHQsIG5leHRUZXh0KTtcblxuICAgIGlmICh0ZXh0RGlmZiAhPT0gbnVsbCkge1xuICAgICAgdmFyIHRleHRQYXRoID0gUmVhY3RFZGl0b3IuZmluZFBhdGgoZWRpdG9yLCBub2RlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6IHRleHREaWZmLFxuICAgICAgICBwYXRoOiB0ZXh0UGF0aFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplVGV4dEluc2VydGlvblJhbmdlKGVkaXRvciwgcmFuZ2UsIF9yZWYyKSB7XG4gIHZhciB7XG4gICAgcGF0aCxcbiAgICB0ZXh0XG4gIH0gPSBfcmVmMjtcbiAgdmFyIGluc2VydGlvblJhbmdlID0ge1xuICAgIGFuY2hvcjoge1xuICAgICAgcGF0aCxcbiAgICAgIG9mZnNldDogdGV4dC5zdGFydFxuICAgIH0sXG4gICAgZm9jdXM6IHtcbiAgICAgIHBhdGgsXG4gICAgICBvZmZzZXQ6IHRleHQuZW5kXG4gICAgfVxuICB9O1xuXG4gIGlmICghcmFuZ2UgfHwgIVJhbmdlLmlzQ29sbGFwc2VkKHJhbmdlKSkge1xuICAgIHJldHVybiBpbnNlcnRpb25SYW5nZTtcbiAgfVxuXG4gIHZhciB7XG4gICAgaW5zZXJ0VGV4dCxcbiAgICByZW1vdmVUZXh0XG4gIH0gPSB0ZXh0O1xuICB2YXIgaXNTaW5nbGVDaGFyYWN0ZXJJbnNlcnRpb24gPSBpbnNlcnRUZXh0Lmxlbmd0aCA9PT0gMSB8fCByZW1vdmVUZXh0Lmxlbmd0aCA9PT0gMTtcbiAgLyoqXHJcbiAgICogVGhpcyBjb2RlIGhhbmRsZXMgZWRnZSBjYXNlcyB0aGF0IGFyaXNlIGZyb20gdGV4dCBkaWZmaW5nIHdoZW4gdGhlXHJcbiAgICogaW5zZXJ0ZWQgb3IgcmVtb3ZlZCBjaGFyYWN0ZXIgaXMgYSBzaW5nbGUgY2hhcmFjdGVyLCBhbmQgdGhlIGNoYXJhY3RlclxyXG4gICAqIHJpZ2h0IGJlZm9yZSBvciBhZnRlciB0aGUgYW5jaG9yIGlzIHRoZSBzYW1lIGFzIHRoZSBvbmUgYmVpbmcgaW5zZXJ0ZWQgb3JcclxuICAgKiByZW1vdmVkLlxyXG4gICAqXHJcbiAgICogVGFrZSB0aGlzIGV4YW1wbGU6IGhlbGxvfG9cclxuICAgKlxyXG4gICAqIElmIGFub3RoZXIgYG9gIGlzIGluc2VydGVkIGF0IHRoZSBzZWxlY3Rpb24ncyBhbmNob3IgaW4gdGhlIGV4YW1wbGUgYWJvdmUsXHJcbiAgICogaXQgc2hvdWxkIGJlIGluc2VydGVkIGF0IHRoZSBhbmNob3IsIGJ1dCB1c2luZyB0ZXh0IGRpZmZpbmcsIHdlIGFjdHVhbGx5XHJcbiAgICogZGV0ZWN0IHRoYXQgdGhlIGNoYXJhY3RlciB3YXMgaW5zZXJ0ZWQgYWZ0ZXIgdGhlIHNlY29uZCBgb2A6XHJcbiAgICpcclxuICAgKiBoZWxsb29bb118XHJcbiAgICpcclxuICAgKiBJbnN0ZWFkLCBpbiB0aGVzZSB2ZXJ5IHNwZWNpZmljIGVkZ2UgY2FzZXMsIHdlIGFzc3VtZSB0aGF0IHRoZSBjaGFyYWN0ZXJcclxuICAgKiBuZWVkcyB0byBiZSBpbnNlcnRlZCBhZnRlciB0aGUgYW5jaG9yIHJhdGhlciB0aGFuIHdoZXJlIHRoZSBkaWZmIHdhcyBmb3VuZDpcclxuICAgKlxyXG4gICAqIGhlbGxvW29dfG9cclxuICAgKi9cblxuICBpZiAoaXNTaW5nbGVDaGFyYWN0ZXJJbnNlcnRpb24gJiYgUGF0aC5lcXVhbHMocmFuZ2UuYW5jaG9yLnBhdGgsIHBhdGgpKSB7XG4gICAgdmFyIFtfdGV4dF0gPSBBcnJheS5mcm9tKEVkaXRvci5ub2RlcyhlZGl0b3IsIHtcbiAgICAgIGF0OiByYW5nZSxcbiAgICAgIG1hdGNoOiBUZXh0JDEuaXNUZXh0XG4gICAgfSkpO1xuXG4gICAgaWYgKF90ZXh0KSB7XG4gICAgICB2YXIgW25vZGVdID0gX3RleHQ7XG4gICAgICB2YXIge1xuICAgICAgICBhbmNob3JcbiAgICAgIH0gPSByYW5nZTtcbiAgICAgIHZhciBjaGFyYWN0ZXJCZWZvcmVBbmNob3IgPSBub2RlLnRleHRbYW5jaG9yLm9mZnNldCAtIDFdO1xuICAgICAgdmFyIGNoYXJhY3RlckFmdGVyQW5jaG9yID0gbm9kZS50ZXh0W2FuY2hvci5vZmZzZXRdO1xuXG4gICAgICBpZiAoaW5zZXJ0VGV4dC5sZW5ndGggPT09IDEgJiYgaW5zZXJ0VGV4dCA9PT0gY2hhcmFjdGVyQWZ0ZXJBbmNob3IpIHtcbiAgICAgICAgLy8gQXNzdW1lIHRleHQgc2hvdWxkIGJlIGluc2VydGVkIGF0IHRoZSBhbmNob3JcbiAgICAgICAgcmV0dXJuIHJhbmdlO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVtb3ZlVGV4dC5sZW5ndGggPT09IDEgJiYgcmVtb3ZlVGV4dCA9PT0gY2hhcmFjdGVyQmVmb3JlQW5jaG9yKSB7XG4gICAgICAgIC8vIEFzc3VtZSB0ZXh0IHNob3VsZCBiZSByZW1vdmVkIHJpZ2h0IGJlZm9yZSB0aGUgYW5jaG9yXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgb2Zmc2V0OiBhbmNob3Iub2Zmc2V0IC0gMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZm9jdXM6IHtcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBvZmZzZXQ6IGFuY2hvci5vZmZzZXRcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluc2VydGlvblJhbmdlO1xufVxuXG5mdW5jdGlvbiBnYXRoZXJNdXRhdGlvbkRhdGEoZWRpdG9yLCBtdXRhdGlvbnMpIHtcbiAgdmFyIGFkZGVkTm9kZXMgPSBbXTtcbiAgdmFyIHJlbW92ZWROb2RlcyA9IFtdO1xuICB2YXIgaW5zZXJ0ZWRUZXh0ID0gW107XG4gIHZhciBjaGFyYWN0ZXJEYXRhTXV0YXRpb25zID0gW107XG4gIG11dGF0aW9ucy5mb3JFYWNoKG11dGF0aW9uID0+IHtcbiAgICBzd2l0Y2ggKG11dGF0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2NoaWxkTGlzdCc6XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAobXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG11dGF0aW9uLmFkZGVkTm9kZXMuZm9yRWFjaChhZGRlZE5vZGUgPT4ge1xuICAgICAgICAgICAgICBhZGRlZE5vZGVzLnB1c2goYWRkZWROb2RlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG11dGF0aW9uLnJlbW92ZWROb2Rlcy5mb3JFYWNoKHJlbW92ZWROb2RlID0+IHtcbiAgICAgICAgICAgIHJlbW92ZWROb2Rlcy5wdXNoKHJlbW92ZWROb2RlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdjaGFyYWN0ZXJEYXRhJzpcbiAgICAgICAge1xuICAgICAgICAgIGNoYXJhY3RlckRhdGFNdXRhdGlvbnMucHVzaChtdXRhdGlvbik7IC8vIENoYW5nZXMgdG8gdGV4dCBub2RlcyBzaG91bGQgY29uc2lkZXIgdGhlIHBhcmVudCBlbGVtZW50XG5cbiAgICAgICAgICB2YXIge1xuICAgICAgICAgICAgcGFyZW50Tm9kZVxuICAgICAgICAgIH0gPSBtdXRhdGlvbi50YXJnZXQ7XG5cbiAgICAgICAgICBpZiAoIXBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgdGV4dEluc2VydGlvbiA9IGdldFRleHRJbnNlcnRpb24oZWRpdG9yLCBwYXJlbnROb2RlKTtcblxuICAgICAgICAgIGlmICghdGV4dEluc2VydGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gLy8gSWYgd2UndmUgYWxyZWFkeSBkZXRlY3RlZCBhIGRpZmYgYXQgdGhhdCBwYXRoLCB3ZSBjYW4gcmV0dXJuIGVhcmx5XG5cblxuICAgICAgICAgIGlmIChpbnNlcnRlZFRleHQuc29tZSgoX3JlZikgPT4ge1xuICAgICAgICAgICAgdmFyIHtcbiAgICAgICAgICAgICAgcGF0aFxuICAgICAgICAgICAgfSA9IF9yZWY7XG4gICAgICAgICAgICByZXR1cm4gUGF0aC5lcXVhbHMocGF0aCwgdGV4dEluc2VydGlvbi5wYXRoKTtcbiAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gLy8gQWRkIHRoZSB0ZXh0IGRpZmYgdG8gdGhlIGFycmF5IG9mIGRldGVjdGVkIHRleHQgaW5zZXJ0aW9ucyB0aGF0IG5lZWQgdG8gYmUgcmVjb25jaWxlZFxuXG5cbiAgICAgICAgICBpbnNlcnRlZFRleHQucHVzaCh0ZXh0SW5zZXJ0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgYWRkZWROb2RlcyxcbiAgICByZW1vdmVkTm9kZXMsXG4gICAgaW5zZXJ0ZWRUZXh0LFxuICAgIGNoYXJhY3RlckRhdGFNdXRhdGlvbnNcbiAgfTtcbn1cbi8qKlxyXG4gKiBJbiBnZW5lcmFsLCB3aGVuIGEgbGluZSBicmVhayBvY2N1cnMsIHRoZXJlIHdpbGwgYmUgbW9yZSBgYWRkZWROb2Rlc2AgdGhhbiBgcmVtb3ZlZE5vZGVzYC5cclxuICpcclxuICogVGhpcyBpc24ndCBhbHdheXMgdGhlIGNhc2UgaG93ZXZlci4gSW4gc29tZSBjYXNlcywgdGhlcmUgd2lsbCBiZSBtb3JlIGByZW1vdmVkTm9kZXNgIHRoYW5cclxuICogYGFkZGVkTm9kZXNgLlxyXG4gKlxyXG4gKiBUbyBhY2NvdW50IGZvciB0aGVzZSBlZGdlIGNhc2VzLCB0aGUgbW9zdCByZWxpYWJsZSBzdHJhdGVneSB0byBkZXRlY3QgbGluZSBicmVhayBtdXRhdGlvbnNcclxuICogaXMgdG8gY2hlY2sgd2hldGhlciBhIG5ldyBibG9jayB3YXMgaW5zZXJ0ZWQgb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGUgY3VycmVudCBibG9jay5cclxuICovXG5cbnZhciBpc0xpbmVCcmVhayA9IChlZGl0b3IsIF9yZWYyKSA9PiB7XG4gIHZhciB7XG4gICAgYWRkZWROb2Rlc1xuICB9ID0gX3JlZjI7XG4gIHZhciB7XG4gICAgc2VsZWN0aW9uXG4gIH0gPSBlZGl0b3I7XG4gIHZhciBwYXJlbnROb2RlID0gc2VsZWN0aW9uID8gTm9kZS5wYXJlbnQoZWRpdG9yLCBzZWxlY3Rpb24uYW5jaG9yLnBhdGgpIDogbnVsbDtcbiAgdmFyIHBhcmVudERPTU5vZGUgPSBwYXJlbnROb2RlID8gUmVhY3RFZGl0b3IudG9ET01Ob2RlKGVkaXRvciwgcGFyZW50Tm9kZSkgOiBudWxsO1xuXG4gIGlmICghcGFyZW50RE9NTm9kZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBhZGRlZE5vZGVzLnNvbWUoYWRkZWROb2RlID0+IGFkZGVkTm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIGFkZGVkTm9kZS50YWdOYW1lID09PSAocGFyZW50RE9NTm9kZSA9PT0gbnVsbCB8fCBwYXJlbnRET01Ob2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJlbnRET01Ob2RlLnRhZ05hbWUpKTtcbn07XG4vKipcclxuICogU28gbG9uZyBhcyB3ZSBjaGVjayBmb3IgbGluZSBicmVhayBtdXRhdGlvbnMgYmVmb3JlIGRlbGV0aW9uIG11dGF0aW9ucyxcclxuICogd2UgY2FuIHNhZmVseSBhc3N1bWUgdGhhdCBhIHNldCBvZiBtdXRhdGlvbnMgd2FzIGEgZGVsZXRpb24gaWYgdGhlcmUgYXJlXHJcbiAqIHJlbW92ZWQgbm9kZXMuXHJcbiAqL1xuXG52YXIgaXNEZWxldGlvbiA9IChfLCBfcmVmMykgPT4ge1xuICB2YXIge1xuICAgIHJlbW92ZWROb2Rlc1xuICB9ID0gX3JlZjM7XG4gIHJldHVybiByZW1vdmVkTm9kZXMubGVuZ3RoID4gMDtcbn07XG4vKipcclxuICogSWYgdGhlIHNlbGVjdGlvbiB3YXMgZXhwYW5kZWQgYW5kIHRoZXJlIGFyZSByZW1vdmVkIG5vZGVzLFxyXG4gKiB0aGUgY29udGVudHMgb2YgdGhlIHNlbGVjdGlvbiBuZWVkIHRvIGJlIHJlcGxhY2VkIHdpdGggdGhlIGRpZmZcclxuICovXG5cbnZhciBpc1JlcGxhY2VFeHBhbmRlZFNlbGVjdGlvbiA9IChfcmVmNCwgX3JlZjUpID0+IHtcbiAgdmFyIHtcbiAgICBzZWxlY3Rpb25cbiAgfSA9IF9yZWY0O1xuICB2YXIge1xuICAgIHJlbW92ZWROb2Rlc1xuICB9ID0gX3JlZjU7XG4gIHJldHVybiBzZWxlY3Rpb24gPyBSYW5nZS5pc0V4cGFuZGVkKHNlbGVjdGlvbikgJiYgcmVtb3ZlZE5vZGVzLmxlbmd0aCA+IDAgOiBmYWxzZTtcbn07XG4vKipcclxuICogUGxhaW4gdGV4dCBpbnNlcnRpb25cclxuICovXG5cbnZhciBpc1RleHRJbnNlcnRpb24gPSAoXywgX3JlZjYpID0+IHtcbiAgdmFyIHtcbiAgICBpbnNlcnRlZFRleHRcbiAgfSA9IF9yZWY2O1xuICByZXR1cm4gaW5zZXJ0ZWRUZXh0Lmxlbmd0aCA+IDA7XG59O1xuLyoqXHJcbiAqIEVkZ2UgY2FzZS4gRGV0ZWN0IG11dGF0aW9ucyB0aGF0IHJlbW92ZSBsZWFmIG5vZGVzIGFuZCBhbHNvIHVwZGF0ZSBjaGFyYWN0ZXIgZGF0YVxyXG4gKi9cblxudmFyIGlzUmVtb3ZlTGVhZk5vZGVzID0gKF8sIF9yZWY3KSA9PiB7XG4gIHZhciB7XG4gICAgYWRkZWROb2RlcyxcbiAgICBjaGFyYWN0ZXJEYXRhTXV0YXRpb25zLFxuICAgIHJlbW92ZWROb2Rlc1xuICB9ID0gX3JlZjc7XG4gIHJldHVybiByZW1vdmVkTm9kZXMubGVuZ3RoID4gMCAmJiBhZGRlZE5vZGVzLmxlbmd0aCA9PT0gMCAmJiBjaGFyYWN0ZXJEYXRhTXV0YXRpb25zLmxlbmd0aCA+IDA7XG59O1xuXG5mdW5jdGlvbiByZXN0b3JlRE9NKGVkaXRvcikge1xuICB0cnkge1xuICAgIHZhciBvblJlc3RvcmVET00gPSBFRElUT1JfVE9fUkVTVE9SRV9ET00uZ2V0KGVkaXRvcik7XG5cbiAgICBpZiAob25SZXN0b3JlRE9NKSB7XG4gICAgICBvblJlc3RvcmVET00oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG59XG5cbi8qKlxyXG4gKiBCYXNlZCBsb29zZWx5IG9uOlxyXG4gKlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZHJhZnQtanMvYmxvYi9tYXN0ZXIvc3JjL2NvbXBvbmVudC9oYW5kbGVycy9jb21wb3NpdGlvbi9ET01PYnNlcnZlci5qc1xyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vUHJvc2VNaXJyb3IvcHJvc2VtaXJyb3Itdmlldy9ibG9iL21hc3Rlci9zcmMvZG9tb2JzZXJ2ZXIuanNcclxuICpcclxuICogVGhlIGlucHV0IG1hbmFnZXIgYXR0ZW1wdHMgdG8gbWFwIG9ic2VydmVkIG11dGF0aW9ucyBvbiB0aGUgZG9jdW1lbnQgdG8gYVxyXG4gKiBzZXQgb2Ygb3BlcmF0aW9ucyBpbiBvcmRlciB0byByZWNvbmNpbGUgU2xhdGUncyBpbnRlcm5hbCB2YWx1ZSB3aXRoIHRoZSBET00uXHJcbiAqXHJcbiAqIE11dGF0aW9ucyBhcmUgcHJvY2Vzc2VkIHN5bmNocm9ub3VzbHkgYXMgdGhleSBjb21lIGluLiBPbmx5IG11dGF0aW9ucyB0aGF0IG9jY3VyXHJcbiAqIGR1cmluZyBhIHVzZXIgaW5wdXQgbG9vcCBhcmUgcHJvY2Vzc2VkLCBhcyBvdGhlciBtdXRhdGlvbnMgY2FuIG9jY3VyIHdpdGhpbiB0aGVcclxuICogZG9jdW1lbnQgdGhhdCB3ZXJlIG5vdCBpbml0aWF0ZWQgYnkgdXNlciBpbnB1dC5cclxuICpcclxuICogVGhlIG11dGF0aW9uIHJlY29uY2lsaWF0aW9uIHByb2Nlc3MgYXR0ZW1wdHMgdG8gbWF0Y2ggbXV0YXRpb25zIHRvIHRoZSBmb2xsb3dpbmdcclxuICogcGF0dGVybnM6XHJcbiAqXHJcbiAqIC0gVGV4dCB1cGRhdGVzXHJcbiAqIC0gRGVsZXRpb25zXHJcbiAqIC0gTGluZSBicmVha3NcclxuICpcclxuICogQHBhcmFtIGVkaXRvclxyXG4gKi9cblxuXG5jbGFzcyBBbmRyb2lkSW5wdXRNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoZWRpdG9yKSB7XG4gICAgdGhpcy5lZGl0b3IgPSBlZGl0b3I7XG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGUgTXV0YXRpb25PYnNlcnZlciBmbHVzaFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtdXRhdGlvbnNcclxuICAgICAqL1xuXG4gICAgdGhpcy5mbHVzaCA9IG11dGF0aW9ucyA9PiB7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMucmVjb25jaWxlTXV0YXRpb25zKG11dGF0aW9ucyk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpOyAvLyBGYWlsZWQgdG8gcmVjb25jaWxlIG11dGF0aW9ucywgcmVzdG9yZSBET00gdG8gaXRzIHByZXZpb3VzIHN0YXRlXG5cbiAgICAgICAgcmVzdG9yZURPTSh0aGlzLmVkaXRvcik7XG4gICAgICB9XG4gICAgfTtcbiAgICAvKipcclxuICAgICAqIFJlY29uY2lsZSBhIGJhdGNoIG9mIG11dGF0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtdXRhdGlvbnNcclxuICAgICAqL1xuXG5cbiAgICB0aGlzLnJlY29uY2lsZU11dGF0aW9ucyA9IG11dGF0aW9ucyA9PiB7XG4gICAgICB2YXIgbXV0YXRpb25EYXRhID0gZ2F0aGVyTXV0YXRpb25EYXRhKHRoaXMuZWRpdG9yLCBtdXRhdGlvbnMpO1xuICAgICAgdmFyIHtcbiAgICAgICAgaW5zZXJ0ZWRUZXh0LFxuICAgICAgICByZW1vdmVkTm9kZXNcbiAgICAgIH0gPSBtdXRhdGlvbkRhdGE7XG5cbiAgICAgIGlmIChpc1JlcGxhY2VFeHBhbmRlZFNlbGVjdGlvbih0aGlzLmVkaXRvciwgbXV0YXRpb25EYXRhKSkge1xuICAgICAgICB2YXIgdGV4dCA9IGNvbWJpbmVJbnNlcnRlZFRleHQoaW5zZXJ0ZWRUZXh0KTtcbiAgICAgICAgdGhpcy5yZXBsYWNlRXhwYW5kZWRTZWxlY3Rpb24odGV4dCk7XG4gICAgICB9IGVsc2UgaWYgKGlzTGluZUJyZWFrKHRoaXMuZWRpdG9yLCBtdXRhdGlvbkRhdGEpKSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0QnJlYWsoKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNSZW1vdmVMZWFmTm9kZXModGhpcy5lZGl0b3IsIG11dGF0aW9uRGF0YSkpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMZWFmTm9kZXMocmVtb3ZlZE5vZGVzKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNEZWxldGlvbih0aGlzLmVkaXRvciwgbXV0YXRpb25EYXRhKSkge1xuICAgICAgICB0aGlzLmRlbGV0ZUJhY2t3YXJkKCk7XG4gICAgICB9IGVsc2UgaWYgKGlzVGV4dEluc2VydGlvbih0aGlzLmVkaXRvciwgbXV0YXRpb25EYXRhKSkge1xuICAgICAgICB0aGlzLmluc2VydFRleHQoaW5zZXJ0ZWRUZXh0KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxyXG4gICAgICogQXBwbHkgdGV4dCBkaWZmXHJcbiAgICAgKi9cblxuXG4gICAgdGhpcy5pbnNlcnRUZXh0ID0gaW5zZXJ0ZWRUZXh0ID0+IHtcbiAgICAgIHZhciB7XG4gICAgICAgIHNlbGVjdGlvblxuICAgICAgfSA9IHRoaXMuZWRpdG9yOyAvLyBJbnNlcnQgdGhlIGJhdGNoZWQgdGV4dCBkaWZmc1xuXG4gICAgICBpbnNlcnRlZFRleHQuZm9yRWFjaChpbnNlcnRpb24gPT4ge1xuICAgICAgICBUcmFuc2Zvcm1zLmluc2VydFRleHQodGhpcy5lZGl0b3IsIGluc2VydGlvbi50ZXh0Lmluc2VydFRleHQsIHtcbiAgICAgICAgICBhdDogbm9ybWFsaXplVGV4dEluc2VydGlvblJhbmdlKHRoaXMuZWRpdG9yLCBzZWxlY3Rpb24sIGluc2VydGlvbilcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIGxpbmUgYnJlYWtzXHJcbiAgICAgKi9cblxuXG4gICAgdGhpcy5pbnNlcnRCcmVhayA9ICgpID0+IHtcbiAgICAgIHZhciB7XG4gICAgICAgIHNlbGVjdGlvblxuICAgICAgfSA9IHRoaXMuZWRpdG9yO1xuICAgICAgRWRpdG9yLmluc2VydEJyZWFrKHRoaXMuZWRpdG9yKTsgLy8gVG8tZG86IE5lZWQgYSBtb3JlIGdyYW51bGFyIHNvbHV0aW9uIHRvIHJlc3RvcmluZyBvbmx5IGEgc3BlY2lmaWMgcG9ydGlvblxuICAgICAgLy8gb2YgdGhlIGRvY3VtZW50LiBSZXN0b3JpbmcgdGhlIGVudGlyZSBkb2N1bWVudCBpcyBleHBlbnNpdmUuXG5cbiAgICAgIHJlc3RvcmVET00odGhpcy5lZGl0b3IpO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgIC8vIENvbXBhdDogTW92ZSBzZWxlY3Rpb24gdG8gdGhlIG5ld2x5IGluc2VydGVkIGJsb2NrIGlmIGl0IGhhcyBub3QgbW92ZWRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuZWRpdG9yLnNlbGVjdGlvbiAmJiBSYW5nZS5lcXVhbHMoc2VsZWN0aW9uLCB0aGlzLmVkaXRvci5zZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICBUcmFuc2Zvcm1zLm1vdmUodGhpcy5lZGl0b3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIGV4cGFuZGVkIHNlbGVjdGlvbiBiZWluZyBkZWxldGVkIG9yIHJlcGxhY2VkIGJ5IHRleHRcclxuICAgICAqL1xuXG5cbiAgICB0aGlzLnJlcGxhY2VFeHBhbmRlZFNlbGVjdGlvbiA9IHRleHQgPT4ge1xuXG4gICAgICBFZGl0b3IuZGVsZXRlRnJhZ21lbnQodGhpcy5lZGl0b3IpO1xuXG4gICAgICBpZiAodGV4dC5sZW5ndGgpIHtcbiAgICAgICAgLy8gU2VsZWN0aW9uIHdhcyByZXBsYWNlZCBieSB0ZXh0LCBpbnNlcnQgdGhlIGVudGlyZSB0ZXh0IGRpZmZcbiAgICAgICAgRWRpdG9yLmluc2VydFRleHQodGhpcy5lZGl0b3IsIHRleHQpO1xuICAgICAgfVxuXG4gICAgICByZXN0b3JlRE9NKHRoaXMuZWRpdG9yKTtcbiAgICB9O1xuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIGBiYWNrc3BhY2VgIHRoYXQgbWVyZ2VzIGJsb2Nrc1xyXG4gICAgICovXG5cblxuICAgIHRoaXMuZGVsZXRlQmFja3dhcmQgPSAoKSA9PiB7XG4gICAgICBFZGl0b3IuZGVsZXRlQmFja3dhcmQodGhpcy5lZGl0b3IpO1xuICAgICAgUmVhY3RFZGl0b3IuZm9jdXModGhpcy5lZGl0b3IpO1xuICAgICAgcmVzdG9yZURPTSh0aGlzLmVkaXRvcik7XG4gICAgfTtcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBtdXRhdGlvbnMgdGhhdCByZW1vdmUgc3BlY2lmaWMgbGVhdmVzXHJcbiAgICAgKi9cblxuXG4gICAgdGhpcy5yZW1vdmVMZWFmTm9kZXMgPSBub2RlcyA9PiB7XG4gICAgICBmb3IgKHZhciBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIHZhciBzbGF0ZU5vZGUgPSBSZWFjdEVkaXRvci50b1NsYXRlTm9kZSh0aGlzLmVkaXRvciwgbm9kZSk7XG5cbiAgICAgICAgaWYgKHNsYXRlTm9kZSkge1xuICAgICAgICAgIHZhciBwYXRoID0gUmVhY3RFZGl0b3IuZmluZFBhdGgodGhpcy5lZGl0b3IsIHNsYXRlTm9kZSk7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5kZWxldGUodGhpcy5lZGl0b3IsIHtcbiAgICAgICAgICAgIGF0OiBwYXRoXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVzdG9yZURPTSh0aGlzLmVkaXRvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5lZGl0b3IgPSBlZGl0b3I7XG4gIH1cblxufVxuXG5mdW5jdGlvbiB1c2VNdXRhdGlvbk9ic2VydmVyKG5vZGUsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIHZhciBbbXV0YXRpb25PYnNlcnZlcl0gPSB1c2VTdGF0ZSgoKSA9PiBuZXcgTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjaykpO1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAvLyBEaXNjb25uZWN0IG11dGF0aW9uIG9ic2VydmVyIGR1cmluZyByZW5kZXIgcGhhc2VcbiAgICBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgfSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFub2RlLmN1cnJlbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGF0dGFjaCBNdXRhdGlvbk9ic2VydmVyLCBgbm9kZWAgaXMgdW5kZWZpbmVkJyk7XG4gICAgfSAvLyBBdHRhY2ggbXV0YXRpb24gb2JzZXJ2ZXIgYWZ0ZXIgcmVuZGVyIHBoYXNlIGhhcyBmaW5pc2hlZFxuXG5cbiAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUobm9kZS5jdXJyZW50LCBvcHRpb25zKTsgLy8gQ2xlYW4gdXAgYWZ0ZXIgZWZmZWN0XG5cbiAgICByZXR1cm4gbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0LmJpbmQobXV0YXRpb25PYnNlcnZlcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VUcmFja1VzZXJJbnB1dCgpIHtcbiAgdmFyIGVkaXRvciA9IHVzZVNsYXRlU3RhdGljKCk7XG4gIHZhciByZWNlaXZlZFVzZXJJbnB1dCA9IHVzZVJlZihmYWxzZSk7XG4gIHZhciBhbmltYXRpb25GcmFtZVJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIG9uVXNlcklucHV0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChyZWNlaXZlZFVzZXJJbnB1dC5jdXJyZW50ID09PSBmYWxzZSkge1xuICAgICAgdmFyIHdpbmRvdyA9IFJlYWN0RWRpdG9yLmdldFdpbmRvdyhlZGl0b3IpO1xuICAgICAgcmVjZWl2ZWRVc2VySW5wdXQuY3VycmVudCA9IHRydWU7XG5cbiAgICAgIGlmIChhbmltYXRpb25GcmFtZVJlZi5jdXJyZW50KSB7XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZVJlZi5jdXJyZW50KTtcbiAgICAgIH1cblxuICAgICAgYW5pbWF0aW9uRnJhbWVSZWYuY3VycmVudCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICByZWNlaXZlZFVzZXJJbnB1dC5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIGFuaW1hdGlvbkZyYW1lUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gUmVzZXQgdXNlciBpbnB1dCB0cmFja2luZyBvbiBldmVyeSByZW5kZXJcbiAgICBpZiAocmVjZWl2ZWRVc2VySW5wdXQuY3VycmVudCkge1xuICAgICAgcmVjZWl2ZWRVc2VySW5wdXQuY3VycmVudCA9IGZhbHNlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgcmVjZWl2ZWRVc2VySW5wdXQsXG4gICAgb25Vc2VySW5wdXRcbiAgfTtcbn1cblxudmFyIE1VVEFUSU9OX09CU0VSVkVSX0NPTkZJRyA9IHtcbiAgY2hpbGRMaXN0OiB0cnVlLFxuICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxuICBjaGFyYWN0ZXJEYXRhT2xkVmFsdWU6IHRydWUsXG4gIHN1YnRyZWU6IHRydWVcbn07XG5mdW5jdGlvbiB1c2VBbmRyb2lkSW5wdXRNYW5hZ2VyKG5vZGUpIHtcbiAgdmFyIGVkaXRvciA9IHVzZVNsYXRlU3RhdGljKCk7XG4gIHZhciBbaW5wdXRNYW5hZ2VyXSA9IHVzZVN0YXRlKCgpID0+IG5ldyBBbmRyb2lkSW5wdXRNYW5hZ2VyKGVkaXRvcikpO1xuICB2YXIge1xuICAgIHJlY2VpdmVkVXNlcklucHV0LFxuICAgIG9uVXNlcklucHV0XG4gIH0gPSB1c2VUcmFja1VzZXJJbnB1dCgpO1xuICB2YXIgdGltZW91dElkID0gdXNlUmVmKG51bGwpO1xuICB2YXIgaXNSZWNvbmNpbGluZyA9IHVzZVJlZihmYWxzZSk7XG4gIHZhciBmbHVzaCA9IHVzZUNhbGxiYWNrKG11dGF0aW9ucyA9PiB7XG4gICAgaWYgKCFyZWNlaXZlZFVzZXJJbnB1dC5jdXJyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaXNSZWNvbmNpbGluZy5jdXJyZW50ID0gdHJ1ZTtcbiAgICBpbnB1dE1hbmFnZXIuZmx1c2gobXV0YXRpb25zKTtcblxuICAgIGlmICh0aW1lb3V0SWQuY3VycmVudCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZC5jdXJyZW50KTtcbiAgICB9XG5cbiAgICB0aW1lb3V0SWQuY3VycmVudCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaXNSZWNvbmNpbGluZy5jdXJyZW50ID0gZmFsc2U7XG4gICAgICB0aW1lb3V0SWQuY3VycmVudCA9IG51bGw7XG4gICAgfSwgMjUwKTtcbiAgfSwgW10pO1xuICB1c2VNdXRhdGlvbk9ic2VydmVyKG5vZGUsIGZsdXNoLCBNVVRBVElPTl9PQlNFUlZFUl9DT05GSUcpO1xuICByZXR1cm4ge1xuICAgIGlzUmVjb25jaWxpbmcsXG4gICAgb25Vc2VySW5wdXRcbiAgfTtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyQxKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDEodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQxKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkMShPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cbi8qKlxyXG4gKiBFZGl0YWJsZS5cclxuICovXG5cbnZhciBBbmRyb2lkRWRpdGFibGUgPSBwcm9wcyA9PiB7XG4gIHZhciB7XG4gICAgYXV0b0ZvY3VzLFxuICAgIGRlY29yYXRlID0gZGVmYXVsdERlY29yYXRlLFxuICAgIG9uRE9NQmVmb3JlSW5wdXQ6IHByb3BzT25ET01CZWZvcmVJbnB1dCxcbiAgICBwbGFjZWhvbGRlcixcbiAgICByZWFkT25seSA9IGZhbHNlLFxuICAgIHJlbmRlckVsZW1lbnQsXG4gICAgcmVuZGVyTGVhZixcbiAgICByZW5kZXJQbGFjZWhvbGRlciA9IHByb3BzID0+IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERlZmF1bHRQbGFjZWhvbGRlciwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKSxcbiAgICBzdHlsZSA9IHt9LFxuICAgIGFzOiBDb21wb25lbnQgPSAnZGl2J1xuICB9ID0gcHJvcHMsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJhdXRvRm9jdXNcIiwgXCJkZWNvcmF0ZVwiLCBcIm9uRE9NQmVmb3JlSW5wdXRcIiwgXCJwbGFjZWhvbGRlclwiLCBcInJlYWRPbmx5XCIsIFwicmVuZGVyRWxlbWVudFwiLCBcInJlbmRlckxlYWZcIiwgXCJyZW5kZXJQbGFjZWhvbGRlclwiLCBcInN0eWxlXCIsIFwiYXNcIl0pO1xuXG4gIHZhciBlZGl0b3IgPSB1c2VTbGF0ZSgpO1xuICB2YXIgcmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgaW5wdXRNYW5hZ2VyID0gdXNlQW5kcm9pZElucHV0TWFuYWdlcihyZWYpOyAvLyBVcGRhdGUgaW50ZXJuYWwgc3RhdGUgb24gZWFjaCByZW5kZXIuXG5cbiAgSVNfUkVBRF9PTkxZLnNldChlZGl0b3IsIHJlYWRPbmx5KTsgLy8gS2VlcCB0cmFjayBvZiBzb21lIHN0YXRlIGZvciB0aGUgZXZlbnQgaGFuZGxlciBsb2dpYy5cblxuICB2YXIgc3RhdGUgPSB1c2VNZW1vKCgpID0+ICh7XG4gICAgaXNVcGRhdGluZ1NlbGVjdGlvbjogZmFsc2UsXG4gICAgbGF0ZXN0RWxlbWVudDogbnVsbFxuICB9KSwgW10pO1xuICB2YXIgW2NvbnRlbnRLZXksIHNldENvbnRlbnRLZXldID0gdXNlU3RhdGUoMCk7XG4gIHZhciBvblJlc3RvcmVET00gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0Q29udGVudEtleShwcmV2ID0+IHByZXYgKyAxKTtcbiAgfSwgW2NvbnRlbnRLZXldKTsgLy8gV2hlbmV2ZXIgdGhlIGVkaXRvciB1cGRhdGVzLi4uXG5cbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgLy8gVXBkYXRlIGVsZW1lbnQtcmVsYXRlZCB3ZWFrIG1hcHMgd2l0aCB0aGUgRE9NIGVsZW1lbnQgcmVmLlxuICAgIHZhciB3aW5kb3c7XG5cbiAgICBpZiAocmVmLmN1cnJlbnQgJiYgKHdpbmRvdyA9IGdldERlZmF1bHRWaWV3KHJlZi5jdXJyZW50KSkpIHtcbiAgICAgIEVESVRPUl9UT19XSU5ET1cuc2V0KGVkaXRvciwgd2luZG93KTtcbiAgICAgIEVESVRPUl9UT19FTEVNRU5ULnNldChlZGl0b3IsIHJlZi5jdXJyZW50KTtcbiAgICAgIE5PREVfVE9fRUxFTUVOVC5zZXQoZWRpdG9yLCByZWYuY3VycmVudCk7XG4gICAgICBFTEVNRU5UX1RPX05PREUuc2V0KHJlZi5jdXJyZW50LCBlZGl0b3IpO1xuICAgICAgRURJVE9SX1RPX1JFU1RPUkVfRE9NLnNldChlZGl0b3IsIG9uUmVzdG9yZURPTSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIE5PREVfVE9fRUxFTUVOVC5kZWxldGUoZWRpdG9yKTtcbiAgICAgIEVESVRPUl9UT19SRVNUT1JFX0RPTS5kZWxldGUoZWRpdG9yKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgLy8gTWFrZSBzdXJlIHRoZSBET00gc2VsZWN0aW9uIHN0YXRlIGlzIGluIHN5bmMuXG4gICAgICB2YXIge1xuICAgICAgICBzZWxlY3Rpb25cbiAgICAgIH0gPSBlZGl0b3I7XG4gICAgICB2YXIgcm9vdCA9IFJlYWN0RWRpdG9yLmZpbmREb2N1bWVudE9yU2hhZG93Um9vdChlZGl0b3IpO1xuICAgICAgdmFyIGRvbVNlbGVjdGlvbiA9IHJvb3QuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgICAgIGlmICghZG9tU2VsZWN0aW9uIHx8ICFSZWFjdEVkaXRvci5pc0ZvY3VzZWQoZWRpdG9yKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBoYXNEb21TZWxlY3Rpb24gPSBkb21TZWxlY3Rpb24udHlwZSAhPT0gJ05vbmUnOyAvLyBJZiB0aGUgRE9NIHNlbGVjdGlvbiBpcyBwcm9wZXJseSB1bnNldCwgd2UncmUgZG9uZS5cblxuICAgICAgaWYgKCFzZWxlY3Rpb24gJiYgIWhhc0RvbVNlbGVjdGlvbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIHZlcmlmeSB0aGF0IHRoZSBkb20gc2VsZWN0aW9uIGlzIGluIHRoZSBlZGl0b3JcblxuXG4gICAgICB2YXIgZWRpdG9yRWxlbWVudCA9IEVESVRPUl9UT19FTEVNRU5ULmdldChlZGl0b3IpO1xuICAgICAgdmFyIGhhc0RvbVNlbGVjdGlvbkluRWRpdG9yID0gZmFsc2U7XG5cbiAgICAgIGlmIChlZGl0b3JFbGVtZW50LmNvbnRhaW5zKGRvbVNlbGVjdGlvbi5hbmNob3JOb2RlKSAmJiBlZGl0b3JFbGVtZW50LmNvbnRhaW5zKGRvbVNlbGVjdGlvbi5mb2N1c05vZGUpKSB7XG4gICAgICAgIGhhc0RvbVNlbGVjdGlvbkluRWRpdG9yID0gdHJ1ZTtcbiAgICAgIH0gLy8gSWYgdGhlIERPTSBzZWxlY3Rpb24gaXMgaW4gdGhlIGVkaXRvciBhbmQgdGhlIGVkaXRvciBzZWxlY3Rpb24gaXMgYWxyZWFkeSBjb3JyZWN0LCB3ZSdyZSBkb25lLlxuXG5cbiAgICAgIGlmIChoYXNEb21TZWxlY3Rpb24gJiYgaGFzRG9tU2VsZWN0aW9uSW5FZGl0b3IgJiYgc2VsZWN0aW9uKSB7XG4gICAgICAgIHZhciBzbGF0ZVJhbmdlID0gUmVhY3RFZGl0b3IudG9TbGF0ZVJhbmdlKGVkaXRvciwgZG9tU2VsZWN0aW9uLCB7XG4gICAgICAgICAgZXhhY3RNYXRjaDogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc2xhdGVSYW5nZSAmJiBSYW5nZS5lcXVhbHMoc2xhdGVSYW5nZSwgc2VsZWN0aW9uKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSAvLyB3aGVuIDxFZGl0YWJsZS8+IGlzIGJlaW5nIGNvbnRyb2xsZWQgdGhyb3VnaCBleHRlcm5hbCB2YWx1ZVxuICAgICAgLy8gdGhlbiBpdHMgY2hpbGRyZW4gbWlnaHQganVzdCBjaGFuZ2UgLSBET00gcmVzcG9uZHMgdG8gaXQgb24gaXRzIG93blxuICAgICAgLy8gYnV0IFNsYXRlJ3MgdmFsdWUgaXMgbm90IGJlaW5nIHVwZGF0ZWQgdGhyb3VnaCBhbnkgb3BlcmF0aW9uXG4gICAgICAvLyBhbmQgdGh1cyBpdCBkb2Vzbid0IHRyYW5zZm9ybSBzZWxlY3Rpb24gb24gaXRzIG93blxuXG5cbiAgICAgIGlmIChzZWxlY3Rpb24gJiYgIVJlYWN0RWRpdG9yLmhhc1JhbmdlKGVkaXRvciwgc2VsZWN0aW9uKSkge1xuICAgICAgICBlZGl0b3Iuc2VsZWN0aW9uID0gUmVhY3RFZGl0b3IudG9TbGF0ZVJhbmdlKGVkaXRvciwgZG9tU2VsZWN0aW9uLCB7XG4gICAgICAgICAgZXhhY3RNYXRjaDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gT3RoZXJ3aXNlIHRoZSBET00gc2VsZWN0aW9uIGlzIG91dCBvZiBzeW5jLCBzbyB1cGRhdGUgaXQuXG5cblxuICAgICAgdmFyIGVsID0gUmVhY3RFZGl0b3IudG9ET01Ob2RlKGVkaXRvciwgZWRpdG9yKTtcbiAgICAgIHN0YXRlLmlzVXBkYXRpbmdTZWxlY3Rpb24gPSB0cnVlO1xuICAgICAgdmFyIG5ld0RvbVJhbmdlID0gc2VsZWN0aW9uICYmIFJlYWN0RWRpdG9yLnRvRE9NUmFuZ2UoZWRpdG9yLCBzZWxlY3Rpb24pO1xuXG4gICAgICBpZiAobmV3RG9tUmFuZ2UpIHtcbiAgICAgICAgaWYgKFJhbmdlLmlzQmFja3dhcmQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgIGRvbVNlbGVjdGlvbi5zZXRCYXNlQW5kRXh0ZW50KG5ld0RvbVJhbmdlLmVuZENvbnRhaW5lciwgbmV3RG9tUmFuZ2UuZW5kT2Zmc2V0LCBuZXdEb21SYW5nZS5zdGFydENvbnRhaW5lciwgbmV3RG9tUmFuZ2Uuc3RhcnRPZmZzZXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvbVNlbGVjdGlvbi5zZXRCYXNlQW5kRXh0ZW50KG5ld0RvbVJhbmdlLnN0YXJ0Q29udGFpbmVyLCBuZXdEb21SYW5nZS5zdGFydE9mZnNldCwgbmV3RG9tUmFuZ2UuZW5kQ29udGFpbmVyLCBuZXdEb21SYW5nZS5lbmRPZmZzZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxlYWZFbCA9IG5ld0RvbVJhbmdlLnN0YXJ0Q29udGFpbmVyLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGxlYWZFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPSBuZXdEb21SYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QuYmluZChuZXdEb21SYW5nZSk7XG4gICAgICAgIHNjcm9sbEludG9WaWV3KGxlYWZFbCwge1xuICAgICAgICAgIHNjcm9sbE1vZGU6ICdpZi1uZWVkZWQnLFxuICAgICAgICAgIGJvdW5kYXJ5OiBlbFxuICAgICAgICB9KTsgLy8gQHRzLWlnbm9yZVxuXG4gICAgICAgIGRlbGV0ZSBsZWFmRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9tU2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgfVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc3RhdGUuaXNVcGRhdGluZ1NlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoX3VudXNlZCkge1xuICAgICAgLy8gRmFpbGVkIHRvIHVwZGF0ZSBzZWxlY3Rpb24sIGxpa2VseSBkdWUgdG8gcmVjb25jaWxpYXRpb24gZXJyb3JcbiAgICAgIHN0YXRlLmlzVXBkYXRpbmdTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICB9XG4gIH0pOyAvLyBUaGUgYXV0b0ZvY3VzIFRleHRhcmVhSFRNTEF0dHJpYnV0ZSBkb2Vzbid0IGRvIGFueXRoaW5nIG9uIGEgZGl2LCBzbyBpdFxuICAvLyBuZWVkcyB0byBiZSBtYW51YWxseSBmb2N1c2VkLlxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlZi5jdXJyZW50ICYmIGF1dG9Gb2N1cykge1xuICAgICAgcmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICB9XG4gIH0sIFthdXRvRm9jdXNdKTsgLy8gTGlzdGVuIG9uIHRoZSBuYXRpdmUgYGJlZm9yZWlucHV0YCBldmVudCB0byBnZXQgcmVhbCBcIkxldmVsIDJcIiBldmVudHMuIFRoaXNcbiAgLy8gaXMgcmVxdWlyZWQgYmVjYXVzZSBSZWFjdCdzIGBiZWZvcmVpbnB1dGAgaXMgZmFrZSBhbmQgbmV2ZXIgcmVhbGx5IGF0dGFjaGVzXG4gIC8vIHRvIHRoZSByZWFsIGV2ZW50IHNhZGx5LiAoMjAxOS8xMS8wMSlcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMTIxMVxuXG4gIHZhciBvbkRPTUJlZm9yZUlucHV0ID0gdXNlQ2FsbGJhY2soZXZlbnQgPT4ge1xuICAgIGlmICghcmVhZE9ubHkgJiYgaGFzRWRpdGFibGVUYXJnZXQoZWRpdG9yLCBldmVudC50YXJnZXQpICYmICFpc0RPTUV2ZW50SGFuZGxlZChldmVudCwgcHJvcHNPbkRPTUJlZm9yZUlucHV0KSkge1xuICAgICAgaW5wdXRNYW5hZ2VyLm9uVXNlcklucHV0KCk7XG4gICAgfVxuICB9LCBbcmVhZE9ubHksIHByb3BzT25ET01CZWZvcmVJbnB1dF0pOyAvLyBBdHRhY2ggYSBuYXRpdmUgRE9NIGV2ZW50IGhhbmRsZXIgZm9yIGBiZWZvcmVpbnB1dGAgZXZlbnRzLCBiZWNhdXNlIFJlYWN0J3NcbiAgLy8gYnVpbHQtaW4gYG9uQmVmb3JlSW5wdXRgIGlzIGFjdHVhbGx5IGEgbGVha3kgcG9seWZpbGwgdGhhdCBkb2Vzbid0IGV4cG9zZVxuICAvLyByZWFsIGBiZWZvcmVpbnB1dGAgZXZlbnRzIHNhZGx5Li4uICgyMDE5LzExLzA0KVxuXG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIHZhciBub2RlID0gcmVmLmN1cnJlbnQ7IC8vIEB0cy1pZ25vcmUgVGhlIGBiZWZvcmVpbnB1dGAgZXZlbnQgaXNuJ3QgcmVjb2duaXplZC5cblxuICAgIG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZS5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmVpbnB1dCcsIG9uRE9NQmVmb3JlSW5wdXQpOyAvLyBAdHMtaWdub3JlIFRoZSBgYmVmb3JlaW5wdXRgIGV2ZW50IGlzbid0IHJlY29nbml6ZWQuXG5cbiAgICByZXR1cm4gKCkgPT4gbm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JlZm9yZWlucHV0Jywgb25ET01CZWZvcmVJbnB1dCk7XG4gIH0sIFtjb250ZW50S2V5LCBwcm9wc09uRE9NQmVmb3JlSW5wdXRdKTsgLy8gTGlzdGVuIG9uIHRoZSBuYXRpdmUgYHNlbGVjdGlvbmNoYW5nZWAgZXZlbnQgdG8gYmUgYWJsZSB0byB1cGRhdGUgYW55IHRpbWVcbiAgLy8gdGhlIHNlbGVjdGlvbiBjaGFuZ2VzLiBUaGlzIGlzIHJlcXVpcmVkIGJlY2F1c2UgUmVhY3QncyBgb25TZWxlY3RgIGlzIGxlYWt5XG4gIC8vIGFuZCBub24tc3RhbmRhcmQgc28gaXQgZG9lc24ndCBmaXJlIHVudGlsIGFmdGVyIGEgc2VsZWN0aW9uIGhhcyBiZWVuXG4gIC8vIHJlbGVhc2VkLiBUaGlzIGNhdXNlcyBpc3N1ZXMgaW4gc2l0dWF0aW9ucyB3aGVyZSBhbm90aGVyIGNoYW5nZSBoYXBwZW5zXG4gIC8vIHdoaWxlIGEgc2VsZWN0aW9uIGlzIGJlaW5nIGRyYWdnZWQuXG5cbiAgdmFyIG9uRE9NU2VsZWN0aW9uQ2hhbmdlID0gdXNlQ2FsbGJhY2sodGhyb3R0bGUoKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXJlYWRPbmx5ICYmICFzdGF0ZS5pc1VwZGF0aW5nU2VsZWN0aW9uICYmICFpbnB1dE1hbmFnZXIuaXNSZWNvbmNpbGluZy5jdXJyZW50KSB7XG4gICAgICAgIHZhciByb290ID0gUmVhY3RFZGl0b3IuZmluZERvY3VtZW50T3JTaGFkb3dSb290KGVkaXRvcik7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgYWN0aXZlRWxlbWVudFxuICAgICAgICB9ID0gcm9vdDtcbiAgICAgICAgdmFyIGVsID0gUmVhY3RFZGl0b3IudG9ET01Ob2RlKGVkaXRvciwgZWRpdG9yKTtcbiAgICAgICAgdmFyIGRvbVNlbGVjdGlvbiA9IHJvb3QuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgPT09IGVsKSB7XG4gICAgICAgICAgc3RhdGUubGF0ZXN0RWxlbWVudCA9IGFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgSVNfRk9DVVNFRC5zZXQoZWRpdG9yLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBJU19GT0NVU0VELmRlbGV0ZShlZGl0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkb21TZWxlY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4gVHJhbnNmb3Jtcy5kZXNlbGVjdChlZGl0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBhbmNob3JOb2RlLFxuICAgICAgICAgIGZvY3VzTm9kZVxuICAgICAgICB9ID0gZG9tU2VsZWN0aW9uO1xuICAgICAgICB2YXIgYW5jaG9yTm9kZVNlbGVjdGFibGUgPSBoYXNFZGl0YWJsZVRhcmdldChlZGl0b3IsIGFuY2hvck5vZGUpIHx8IGlzVGFyZ2V0SW5zaWRlVm9pZChlZGl0b3IsIGFuY2hvck5vZGUpO1xuICAgICAgICB2YXIgZm9jdXNOb2RlU2VsZWN0YWJsZSA9IGhhc0VkaXRhYmxlVGFyZ2V0KGVkaXRvciwgZm9jdXNOb2RlKSB8fCBpc1RhcmdldEluc2lkZVZvaWQoZWRpdG9yLCBmb2N1c05vZGUpO1xuXG4gICAgICAgIGlmIChhbmNob3JOb2RlU2VsZWN0YWJsZSAmJiBmb2N1c05vZGVTZWxlY3RhYmxlKSB7XG4gICAgICAgICAgdmFyIHJhbmdlID0gUmVhY3RFZGl0b3IudG9TbGF0ZVJhbmdlKGVkaXRvciwgZG9tU2VsZWN0aW9uLCB7XG4gICAgICAgICAgICBleGFjdE1hdGNoOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIFRyYW5zZm9ybXMuc2VsZWN0KGVkaXRvciwgcmFuZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFRyYW5zZm9ybXMuZGVzZWxlY3QoZWRpdG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKF91bnVzZWQyKSB7Ly8gRmFpbGVkIHRvIHVwZGF0ZSBzZWxlY3Rpb24sIGxpa2VseSBkdWUgdG8gcmVjb25jaWxpYXRpb24gZXJyb3JcbiAgICB9XG4gIH0sIDEwMCksIFtyZWFkT25seV0pOyAvLyBBdHRhY2ggYSBuYXRpdmUgRE9NIGV2ZW50IGhhbmRsZXIgZm9yIGBzZWxlY3Rpb25jaGFuZ2VgLCBiZWNhdXNlIFJlYWN0J3NcbiAgLy8gYnVpbHQtaW4gYG9uU2VsZWN0YCBoYW5kbGVyIGRvZXNuJ3QgZmlyZSBmb3IgYWxsIHNlbGVjdGlvbiBjaGFuZ2VzLiBJdCdzIGFcbiAgLy8gbGVha3kgcG9seWZpbGwgdGhhdCBvbmx5IGZpcmVzIG9uIGtleXByZXNzZXMgb3IgY2xpY2tzLiBJbnN0ZWFkLCB3ZSB3YW50IHRvXG4gIC8vIGZpcmUgZm9yIGFueSBjaGFuZ2UgdG8gdGhlIHNlbGVjdGlvbiBpbnNpZGUgdGhlIGVkaXRvci4gKDIwMTkvMTEvMDQpXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvNTc4NVxuXG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIHZhciB3aW5kb3cgPSBSZWFjdEVkaXRvci5nZXRXaW5kb3coZWRpdG9yKTtcbiAgICB3aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0aW9uY2hhbmdlJywgb25ET01TZWxlY3Rpb25DaGFuZ2UpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2VsZWN0aW9uY2hhbmdlJywgb25ET01TZWxlY3Rpb25DaGFuZ2UpO1xuICAgIH07XG4gIH0pO1xuICB2YXIgZGVjb3JhdGlvbnMgPSBkZWNvcmF0ZShbZWRpdG9yLCBbXV0pO1xuXG4gIGlmIChwbGFjZWhvbGRlciAmJiBlZGl0b3IuY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIEFycmF5LmZyb20oTm9kZS50ZXh0cyhlZGl0b3IpKS5sZW5ndGggPT09IDEgJiYgTm9kZS5zdHJpbmcoZWRpdG9yKSA9PT0gJycpIHtcbiAgICB2YXIgc3RhcnQgPSBFZGl0b3Iuc3RhcnQoZWRpdG9yLCBbXSk7XG4gICAgZGVjb3JhdGlvbnMucHVzaCh7XG4gICAgICBbUExBQ0VIT0xERVJfU1lNQk9MXTogdHJ1ZSxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgYW5jaG9yOiBzdGFydCxcbiAgICAgIGZvY3VzOiBzdGFydFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWRPbmx5Q29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiByZWFkT25seVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEZWNvcmF0ZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogZGVjb3JhdGVcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICBrZXk6IGNvbnRlbnRLZXksXG4gICAgcm9sZTogcmVhZE9ubHkgPyB1bmRlZmluZWQgOiAndGV4dGJveCdcbiAgfSwgYXR0cmlidXRlcywge1xuICAgIHNwZWxsQ2hlY2s6IGF0dHJpYnV0ZXMuc3BlbGxDaGVjayxcbiAgICBhdXRvQ29ycmVjdDogYXR0cmlidXRlcy5hdXRvQ29ycmVjdCxcbiAgICBhdXRvQ2FwaXRhbGl6ZTogYXR0cmlidXRlcy5hdXRvQ2FwaXRhbGl6ZSxcbiAgICBcImRhdGEtc2xhdGUtZWRpdG9yXCI6IHRydWUsXG4gICAgXCJkYXRhLXNsYXRlLW5vZGVcIjogXCJ2YWx1ZVwiLFxuICAgIGNvbnRlbnRFZGl0YWJsZTogcmVhZE9ubHkgPyB1bmRlZmluZWQgOiB0cnVlLFxuICAgIHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZzogdHJ1ZSxcbiAgICByZWY6IHJlZixcbiAgICBzdHlsZTogX29iamVjdFNwcmVhZCQxKHtcbiAgICAgIC8vIEFsbG93IHBvc2l0aW9uaW5nIHJlbGF0aXZlIHRvIHRoZSBlZGl0YWJsZSBlbGVtZW50LlxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IG91dGxpbmUgc3R5bGVzLlxuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgLy8gUHJlc2VydmUgYWRqYWNlbnQgd2hpdGVzcGFjZSBhbmQgbmV3IGxpbmVzLlxuICAgICAgd2hpdGVTcGFjZTogJ3ByZS13cmFwJyxcbiAgICAgIC8vIEFsbG93IHdvcmRzIHRvIGJyZWFrIGlmIHRoZXkgYXJlIHRvbyBsb25nLlxuICAgICAgd29yZFdyYXA6ICdicmVhay13b3JkJ1xuICAgIH0sIHN0eWxlKSxcbiAgICBvbkNvcHk6IHVzZUNhbGxiYWNrKGV2ZW50ID0+IHtcbiAgICAgIGlmIChoYXNFZGl0YWJsZVRhcmdldChlZGl0b3IsIGV2ZW50LnRhcmdldCkgJiYgIWlzRXZlbnRIYW5kbGVkKGV2ZW50LCBhdHRyaWJ1dGVzLm9uQ29weSkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgUmVhY3RFZGl0b3Iuc2V0RnJhZ21lbnREYXRhKGVkaXRvciwgZXZlbnQuY2xpcGJvYXJkRGF0YSk7XG4gICAgICB9XG4gICAgfSwgW2F0dHJpYnV0ZXMub25Db3B5XSksXG4gICAgb25DdXQ6IHVzZUNhbGxiYWNrKGV2ZW50ID0+IHtcbiAgICAgIGlmICghcmVhZE9ubHkgJiYgaGFzRWRpdGFibGVUYXJnZXQoZWRpdG9yLCBldmVudC50YXJnZXQpICYmICFpc0V2ZW50SGFuZGxlZChldmVudCwgYXR0cmlidXRlcy5vbkN1dCkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgUmVhY3RFZGl0b3Iuc2V0RnJhZ21lbnREYXRhKGVkaXRvciwgZXZlbnQuY2xpcGJvYXJkRGF0YSk7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgc2VsZWN0aW9uXG4gICAgICAgIH0gPSBlZGl0b3I7XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgIGlmIChSYW5nZS5pc0V4cGFuZGVkKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgIEVkaXRvci5kZWxldGVGcmFnbWVudChlZGl0b3IpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IE5vZGUucGFyZW50KGVkaXRvciwgc2VsZWN0aW9uLmFuY2hvci5wYXRoKTtcblxuICAgICAgICAgICAgaWYgKEVkaXRvci5pc1ZvaWQoZWRpdG9yLCBub2RlKSkge1xuICAgICAgICAgICAgICBUcmFuc2Zvcm1zLmRlbGV0ZShlZGl0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtyZWFkT25seSwgYXR0cmlidXRlcy5vbkN1dF0pLFxuICAgIG9uRm9jdXM6IHVzZUNhbGxiYWNrKGV2ZW50ID0+IHtcbiAgICAgIGlmICghcmVhZE9ubHkgJiYgIXN0YXRlLmlzVXBkYXRpbmdTZWxlY3Rpb24gJiYgaGFzRWRpdGFibGVUYXJnZXQoZWRpdG9yLCBldmVudC50YXJnZXQpICYmICFpc0V2ZW50SGFuZGxlZChldmVudCwgYXR0cmlidXRlcy5vbkZvY3VzKSkge1xuICAgICAgICB2YXIgcm9vdCA9IFJlYWN0RWRpdG9yLmZpbmREb2N1bWVudE9yU2hhZG93Um9vdChlZGl0b3IpO1xuICAgICAgICBzdGF0ZS5sYXRlc3RFbGVtZW50ID0gcm9vdC5hY3RpdmVFbGVtZW50O1xuICAgICAgICBJU19GT0NVU0VELnNldChlZGl0b3IsIHRydWUpO1xuICAgICAgfVxuICAgIH0sIFtyZWFkT25seSwgYXR0cmlidXRlcy5vbkZvY3VzXSksXG4gICAgb25CbHVyOiB1c2VDYWxsYmFjayhldmVudCA9PiB7XG4gICAgICBpZiAocmVhZE9ubHkgfHwgc3RhdGUuaXNVcGRhdGluZ1NlbGVjdGlvbiB8fCAhaGFzRWRpdGFibGVUYXJnZXQoZWRpdG9yLCBldmVudC50YXJnZXQpIHx8IGlzRXZlbnRIYW5kbGVkKGV2ZW50LCBhdHRyaWJ1dGVzLm9uQmx1cikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBDT01QQVQ6IElmIHRoZSBjdXJyZW50IGBhY3RpdmVFbGVtZW50YCBpcyBzdGlsbCB0aGUgcHJldmlvdXNcbiAgICAgIC8vIG9uZSwgdGhpcyBpcyBkdWUgdG8gdGhlIHdpbmRvdyBiZWluZyBibHVycmVkIHdoZW4gdGhlIHRhYlxuICAgICAgLy8gaXRzZWxmIGJlY29tZXMgdW5mb2N1c2VkLCBzbyB3ZSB3YW50IHRvIGFib3J0IGVhcmx5IHRvIGFsbG93IHRvXG4gICAgICAvLyBlZGl0b3IgdG8gc3RheSBmb2N1c2VkIHdoZW4gdGhlIHRhYiBiZWNvbWVzIGZvY3VzZWQgYWdhaW4uXG5cblxuICAgICAgdmFyIHJvb3QgPSBSZWFjdEVkaXRvci5maW5kRG9jdW1lbnRPclNoYWRvd1Jvb3QoZWRpdG9yKTtcblxuICAgICAgaWYgKHN0YXRlLmxhdGVzdEVsZW1lbnQgPT09IHJvb3QuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICAgIH0gPSBldmVudDtcbiAgICAgIHZhciBlbCA9IFJlYWN0RWRpdG9yLnRvRE9NTm9kZShlZGl0b3IsIGVkaXRvcik7IC8vIENPTVBBVDogVGhlIGV2ZW50IHNob3VsZCBiZSBpZ25vcmVkIGlmIHRoZSBmb2N1cyBpcyByZXR1cm5pbmdcbiAgICAgIC8vIHRvIHRoZSBlZGl0b3IgZnJvbSBhbiBlbWJlZGRlZCBlZGl0YWJsZSBlbGVtZW50IChlZy4gYW4gPGlucHV0PlxuICAgICAgLy8gZWxlbWVudCBpbnNpZGUgYSB2b2lkIG5vZGUpLlxuXG4gICAgICBpZiAocmVsYXRlZFRhcmdldCA9PT0gZWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBDT01QQVQ6IFRoZSBldmVudCBzaG91bGQgYmUgaWdub3JlZCBpZiB0aGUgZm9jdXMgaXMgbW92aW5nIGZyb21cbiAgICAgIC8vIHRoZSBlZGl0b3IgdG8gaW5zaWRlIGEgdm9pZCBub2RlJ3Mgc3BhY2VyIGVsZW1lbnQuXG5cblxuICAgICAgaWYgKGlzRE9NRWxlbWVudChyZWxhdGVkVGFyZ2V0KSAmJiByZWxhdGVkVGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1zbGF0ZS1zcGFjZXInKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIENPTVBBVDogVGhlIGV2ZW50IHNob3VsZCBiZSBpZ25vcmVkIGlmIHRoZSBmb2N1cyBpcyBtb3ZpbmcgdG8gYVxuICAgICAgLy8gbm9uLSBlZGl0YWJsZSBzZWN0aW9uIG9mIGFuIGVsZW1lbnQgdGhhdCBpc24ndCBhIHZvaWQgbm9kZSAoZWcuXG4gICAgICAvLyBhIGxpc3QgaXRlbSBvZiB0aGUgY2hlY2sgbGlzdCBleGFtcGxlKS5cblxuXG4gICAgICBpZiAocmVsYXRlZFRhcmdldCAhPSBudWxsICYmIGlzRE9NTm9kZShyZWxhdGVkVGFyZ2V0KSAmJiBSZWFjdEVkaXRvci5oYXNET01Ob2RlKGVkaXRvciwgcmVsYXRlZFRhcmdldCkpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBSZWFjdEVkaXRvci50b1NsYXRlTm9kZShlZGl0b3IsIHJlbGF0ZWRUYXJnZXQpO1xuXG4gICAgICAgIGlmIChFbGVtZW50JDEuaXNFbGVtZW50KG5vZGUpICYmICFlZGl0b3IuaXNWb2lkKG5vZGUpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIElTX0ZPQ1VTRUQuZGVsZXRlKGVkaXRvcik7XG4gICAgfSwgW3JlYWRPbmx5LCBhdHRyaWJ1dGVzLm9uQmx1cl0pLFxuICAgIG9uUGFzdGU6IHVzZUNhbGxiYWNrKGV2ZW50ID0+IHtcbiAgICAgIC8vIFRoaXMgdW5mb3J0dW5hdGVseSBuZWVkcyB0byBiZSBoYW5kbGVkIHdpdGggcGFzdGUgZXZlbnRzIGluc3RlYWQuXG4gICAgICBpZiAoaGFzRWRpdGFibGVUYXJnZXQoZWRpdG9yLCBldmVudC50YXJnZXQpICYmICFpc0V2ZW50SGFuZGxlZChldmVudCwgYXR0cmlidXRlcy5vblBhc3RlKSAmJiAhcmVhZE9ubHkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgUmVhY3RFZGl0b3IuaW5zZXJ0RGF0YShlZGl0b3IsIGV2ZW50LmNsaXBib2FyZERhdGEpO1xuICAgICAgfVxuICAgIH0sIFtyZWFkT25seSwgYXR0cmlidXRlcy5vblBhc3RlXSlcbiAgfSksIHVzZUNoaWxkcmVuKHtcbiAgICBkZWNvcmF0aW9ucyxcbiAgICBub2RlOiBlZGl0b3IsXG4gICAgcmVuZGVyRWxlbWVudCxcbiAgICByZW5kZXJQbGFjZWhvbGRlcixcbiAgICByZW5kZXJMZWFmLFxuICAgIHNlbGVjdGlvbjogZWRpdG9yLnNlbGVjdGlvblxuICB9KSkpKTtcbn07XG5cbi8qKlxyXG4gKiBBIFJlYWN0IGNvbnRleHQgZm9yIHNoYXJpbmcgdGhlIGBmb2N1c2VkYCBzdGF0ZSBvZiB0aGUgZWRpdG9yLlxyXG4gKi9cblxudmFyIEZvY3VzZWRDb250ZXh0ID0gLyojX19QVVJFX18qL2NyZWF0ZUNvbnRleHQoZmFsc2UpO1xuLyoqXHJcbiAqIEdldCB0aGUgY3VycmVudCBgZm9jdXNlZGAgc3RhdGUgb2YgdGhlIGVkaXRvci5cclxuICovXG5cbnZhciB1c2VGb2N1c2VkID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChGb2N1c2VkQ29udGV4dCk7XG59O1xuXG4vKipcclxuICogQSB3cmFwcGVyIGFyb3VuZCB0aGUgcHJvdmlkZXIgdG8gaGFuZGxlIGBvbkNoYW5nZWAgZXZlbnRzLCBiZWNhdXNlIHRoZSBlZGl0b3JcclxuICogaXMgYSBtdXRhYmxlIHNpbmdsZXRvbiBzbyBpdCB3b24ndCBldmVyIHJlZ2lzdGVyIGFzIFwiY2hhbmdlZFwiIG90aGVyd2lzZS5cclxuICovXG5cbnZhciBTbGF0ZSA9IHByb3BzID0+IHtcbiAgdmFyIHtcbiAgICBlZGl0b3IsXG4gICAgY2hpbGRyZW4sXG4gICAgb25DaGFuZ2UsXG4gICAgdmFsdWVcbiAgfSA9IHByb3BzLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiZWRpdG9yXCIsIFwiY2hpbGRyZW5cIiwgXCJvbkNoYW5nZVwiLCBcInZhbHVlXCJdKTtcblxuICB2YXIgW2tleSwgc2V0S2V5XSA9IHVzZVN0YXRlKDApO1xuICB2YXIgY29udGV4dCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGludmFyaWFudChOb2RlLmlzTm9kZUxpc3QodmFsdWUpLCBcIltTbGF0ZV0gdmFsdWUgaXMgaW52YWxpZCEgRXhwZWN0ZWQgYSBsaXN0IG9mIGVsZW1lbnRzIGJ1dCBnb3Q6IFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeSh2YWx1ZSkpKTtcbiAgICBpbnZhcmlhbnQoRWRpdG9yLmlzRWRpdG9yKGVkaXRvciksIFwiW1NsYXRlXSBlZGl0b3IgaXMgaW52YWxpZCEgeW91IHBhc3NlZDogXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KGVkaXRvcikpKTtcbiAgICBlZGl0b3IuY2hpbGRyZW4gPSB2YWx1ZTtcbiAgICBPYmplY3QuYXNzaWduKGVkaXRvciwgcmVzdCk7XG4gICAgcmV0dXJuIFtlZGl0b3JdO1xuICB9LCBba2V5LCB2YWx1ZSwgLi4uT2JqZWN0LnZhbHVlcyhyZXN0KV0pO1xuICB2YXIgb25Db250ZXh0Q2hhbmdlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIG9uQ2hhbmdlKGVkaXRvci5jaGlsZHJlbik7XG4gICAgc2V0S2V5KGtleSArIDEpO1xuICB9LCBba2V5LCBvbkNoYW5nZV0pO1xuICBFRElUT1JfVE9fT05fQ0hBTkdFLnNldChlZGl0b3IsIG9uQ29udGV4dENoYW5nZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIEVESVRPUl9UT19PTl9DSEFOR0Uuc2V0KGVkaXRvciwgKCkgPT4ge30pO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgdmFyIFtpc0ZvY3VzZWQsIHNldElzRm9jdXNlZF0gPSB1c2VTdGF0ZShSZWFjdEVkaXRvci5pc0ZvY3VzZWQoZWRpdG9yKSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNGb2N1c2VkKFJlYWN0RWRpdG9yLmlzRm9jdXNlZChlZGl0b3IpKTtcbiAgfSk7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIHZhciBmbiA9ICgpID0+IHNldElzRm9jdXNlZChSZWFjdEVkaXRvci5pc0ZvY3VzZWQoZWRpdG9yKSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZuLCB0cnVlKTtcbiAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmbiwgdHJ1ZSk7XG4gIH0sIFtdKTtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIGZuID0gKCkgPT4gc2V0SXNGb2N1c2VkKFJlYWN0RWRpdG9yLmlzRm9jdXNlZChlZGl0b3IpKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmbiwgdHJ1ZSk7XG4gICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmbiwgdHJ1ZSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNsYXRlQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBjb250ZXh0XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEVkaXRvckNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogZWRpdG9yXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEZvY3VzZWRDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGlzRm9jdXNlZFxuICB9LCBjaGlsZHJlbikpKTtcbn07XG5cbi8qKlxyXG4gKiBHZXQgdGhlIGN1cnJlbnQgZWRpdG9yIG9iamVjdCBmcm9tIHRoZSBSZWFjdCBjb250ZXh0LlxyXG4gKiBAZGVwcmVjYXRlZCBVc2UgdXNlU2xhdGVTdGF0aWMgaW5zdGVhZC5cclxuICovXG5cbnZhciB1c2VFZGl0b3IgPSAoKSA9PiB7XG4gIHZhciBlZGl0b3IgPSB1c2VDb250ZXh0KEVkaXRvckNvbnRleHQpO1xuXG4gIGlmICghZWRpdG9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGB1c2VFZGl0b3JgIGhvb2sgbXVzdCBiZSB1c2VkIGluc2lkZSB0aGUgPFNsYXRlPiBjb21wb25lbnQncyBjb250ZXh0LlwiKTtcbiAgfVxuXG4gIHJldHVybiBlZGl0b3I7XG59O1xuXG4vKipcclxuICogVXRpbGl0aWVzIGZvciBzaW5nbGUtbGluZSBkZWxldGlvblxyXG4gKi9cblxudmFyIGRvUmVjdHNJbnRlcnNlY3QgPSAocmVjdCwgY29tcGFyZVJlY3QpID0+IHtcbiAgdmFyIG1pZGRsZSA9IChjb21wYXJlUmVjdC50b3AgKyBjb21wYXJlUmVjdC5ib3R0b20pIC8gMjtcbiAgcmV0dXJuIHJlY3QudG9wIDw9IG1pZGRsZSAmJiByZWN0LmJvdHRvbSA+PSBtaWRkbGU7XG59O1xuXG52YXIgYXJlUmFuZ2VzU2FtZUxpbmUgPSAoZWRpdG9yLCByYW5nZTEsIHJhbmdlMikgPT4ge1xuICB2YXIgcmVjdDEgPSBSZWFjdEVkaXRvci50b0RPTVJhbmdlKGVkaXRvciwgcmFuZ2UxKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIHJlY3QyID0gUmVhY3RFZGl0b3IudG9ET01SYW5nZShlZGl0b3IsIHJhbmdlMikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiBkb1JlY3RzSW50ZXJzZWN0KHJlY3QxLCByZWN0MikgJiYgZG9SZWN0c0ludGVyc2VjdChyZWN0MiwgcmVjdDEpO1xufTtcbi8qKlxyXG4gKiBBIGhlbHBlciB1dGlsaXR5IHRoYXQgcmV0dXJucyB0aGUgZW5kIHBvcnRpb24gb2YgYSBgUmFuZ2VgXHJcbiAqIHdoaWNoIGlzIGxvY2F0ZWQgb24gYSBzaW5nbGUgbGluZS5cclxuICpcclxuICogQHBhcmFtIHtFZGl0b3J9IGVkaXRvciBUaGUgZWRpdG9yIG9iamVjdCB0byBjb21wYXJlIGFnYWluc3RcclxuICogQHBhcmFtIHtSYW5nZX0gcGFyZW50UmFuZ2UgVGhlIHBhcmVudCByYW5nZSB0byBjb21wYXJlIGFnYWluc3RcclxuICogQHJldHVybnMge1JhbmdlfSBBIHZhbGlkIHBvcnRpb24gb2YgdGhlIHBhcmVudFJhbmdlIHdoaWNoIGlzIG9uZSBhIHNpbmdsZSBsaW5lXHJcbiAqL1xuXG5cbnZhciBmaW5kQ3VycmVudExpbmVSYW5nZSA9IChlZGl0b3IsIHBhcmVudFJhbmdlKSA9PiB7XG4gIHZhciBwYXJlbnRSYW5nZUJvdW5kYXJ5ID0gRWRpdG9yLnJhbmdlKGVkaXRvciwgUmFuZ2UuZW5kKHBhcmVudFJhbmdlKSk7XG4gIHZhciBwb3NpdGlvbnMgPSBBcnJheS5mcm9tKEVkaXRvci5wb3NpdGlvbnMoZWRpdG9yLCB7XG4gICAgYXQ6IHBhcmVudFJhbmdlXG4gIH0pKTtcbiAgdmFyIGxlZnQgPSAwO1xuICB2YXIgcmlnaHQgPSBwb3NpdGlvbnMubGVuZ3RoO1xuICB2YXIgbWlkZGxlID0gTWF0aC5mbG9vcihyaWdodCAvIDIpO1xuXG4gIGlmIChhcmVSYW5nZXNTYW1lTGluZShlZGl0b3IsIEVkaXRvci5yYW5nZShlZGl0b3IsIHBvc2l0aW9uc1tsZWZ0XSksIHBhcmVudFJhbmdlQm91bmRhcnkpKSB7XG4gICAgcmV0dXJuIEVkaXRvci5yYW5nZShlZGl0b3IsIHBvc2l0aW9uc1tsZWZ0XSwgcGFyZW50UmFuZ2VCb3VuZGFyeSk7XG4gIH1cblxuICBpZiAocG9zaXRpb25zLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gRWRpdG9yLnJhbmdlKGVkaXRvciwgcG9zaXRpb25zW3Bvc2l0aW9ucy5sZW5ndGggLSAxXSwgcGFyZW50UmFuZ2VCb3VuZGFyeSk7XG4gIH1cblxuICB3aGlsZSAobWlkZGxlICE9PSBwb3NpdGlvbnMubGVuZ3RoICYmIG1pZGRsZSAhPT0gbGVmdCkge1xuICAgIGlmIChhcmVSYW5nZXNTYW1lTGluZShlZGl0b3IsIEVkaXRvci5yYW5nZShlZGl0b3IsIHBvc2l0aW9uc1ttaWRkbGVdKSwgcGFyZW50UmFuZ2VCb3VuZGFyeSkpIHtcbiAgICAgIHJpZ2h0ID0gbWlkZGxlO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZWZ0ID0gbWlkZGxlO1xuICAgIH1cblxuICAgIG1pZGRsZSA9IE1hdGguZmxvb3IoKGxlZnQgKyByaWdodCkgLyAyKTtcbiAgfVxuXG4gIHJldHVybiBFZGl0b3IucmFuZ2UoZWRpdG9yLCBwb3NpdGlvbnNbcmlnaHRdLCBwYXJlbnRSYW5nZUJvdW5kYXJ5KTtcbn07XG5cbi8qKlxyXG4gKiBgd2l0aFJlYWN0YCBhZGRzIFJlYWN0IGFuZCBET00gc3BlY2lmaWMgYmVoYXZpb3JzIHRvIHRoZSBlZGl0b3IuXHJcbiAqXHJcbiAqIElmIHlvdSBhcmUgdXNpbmcgVHlwZVNjcmlwdCwgeW91IG11c3QgZXh0ZW5kIFNsYXRlJ3MgQ3VzdG9tVHlwZXMgdG8gdXNlXHJcbiAqIHRoaXMgcGx1Z2luLlxyXG4gKlxyXG4gKiBTZWUgaHR0cHM6Ly9kb2NzLnNsYXRlanMub3JnL2NvbmNlcHRzLzExLXR5cGVzY3JpcHQgdG8gbGVhcm4gaG93LlxyXG4gKi9cblxudmFyIHdpdGhSZWFjdCA9IGVkaXRvciA9PiB7XG4gIHZhciBlID0gZWRpdG9yO1xuICB2YXIge1xuICAgIGFwcGx5LFxuICAgIG9uQ2hhbmdlLFxuICAgIGRlbGV0ZUJhY2t3YXJkXG4gIH0gPSBlO1xuXG4gIGUuZGVsZXRlQmFja3dhcmQgPSB1bml0ID0+IHtcbiAgICBpZiAodW5pdCAhPT0gJ2xpbmUnKSB7XG4gICAgICByZXR1cm4gZGVsZXRlQmFja3dhcmQodW5pdCk7XG4gICAgfVxuXG4gICAgaWYgKGVkaXRvci5zZWxlY3Rpb24gJiYgUmFuZ2UuaXNDb2xsYXBzZWQoZWRpdG9yLnNlbGVjdGlvbikpIHtcbiAgICAgIHZhciBwYXJlbnRCbG9ja0VudHJ5ID0gRWRpdG9yLmFib3ZlKGVkaXRvciwge1xuICAgICAgICBtYXRjaDogbiA9PiBFZGl0b3IuaXNCbG9jayhlZGl0b3IsIG4pLFxuICAgICAgICBhdDogZWRpdG9yLnNlbGVjdGlvblxuICAgICAgfSk7XG5cbiAgICAgIGlmIChwYXJlbnRCbG9ja0VudHJ5KSB7XG4gICAgICAgIHZhciBbLCBwYXJlbnRCbG9ja1BhdGhdID0gcGFyZW50QmxvY2tFbnRyeTtcbiAgICAgICAgdmFyIHBhcmVudEVsZW1lbnRSYW5nZSA9IEVkaXRvci5yYW5nZShlZGl0b3IsIHBhcmVudEJsb2NrUGF0aCwgZWRpdG9yLnNlbGVjdGlvbi5hbmNob3IpO1xuICAgICAgICB2YXIgY3VycmVudExpbmVSYW5nZSA9IGZpbmRDdXJyZW50TGluZVJhbmdlKGUsIHBhcmVudEVsZW1lbnRSYW5nZSk7XG5cbiAgICAgICAgaWYgKCFSYW5nZS5pc0NvbGxhcHNlZChjdXJyZW50TGluZVJhbmdlKSkge1xuICAgICAgICAgIFRyYW5zZm9ybXMuZGVsZXRlKGVkaXRvciwge1xuICAgICAgICAgICAgYXQ6IGN1cnJlbnRMaW5lUmFuZ2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBlLmFwcGx5ID0gb3AgPT4ge1xuICAgIHZhciBtYXRjaGVzID0gW107XG5cbiAgICBzd2l0Y2ggKG9wLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2luc2VydF90ZXh0JzpcbiAgICAgIGNhc2UgJ3JlbW92ZV90ZXh0JzpcbiAgICAgIGNhc2UgJ3NldF9ub2RlJzpcbiAgICAgICAge1xuICAgICAgICAgIGZvciAodmFyIFtub2RlLCBwYXRoXSBvZiBFZGl0b3IubGV2ZWxzKGUsIHtcbiAgICAgICAgICAgIGF0OiBvcC5wYXRoXG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBSZWFjdEVkaXRvci5maW5kS2V5KGUsIG5vZGUpO1xuICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKFtwYXRoLCBrZXldKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdpbnNlcnRfbm9kZSc6XG4gICAgICBjYXNlICdyZW1vdmVfbm9kZSc6XG4gICAgICBjYXNlICdtZXJnZV9ub2RlJzpcbiAgICAgIGNhc2UgJ3NwbGl0X25vZGUnOlxuICAgICAgICB7XG4gICAgICAgICAgZm9yICh2YXIgW19ub2RlLCBfcGF0aF0gb2YgRWRpdG9yLmxldmVscyhlLCB7XG4gICAgICAgICAgICBhdDogUGF0aC5wYXJlbnQob3AucGF0aClcbiAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgdmFyIF9rZXkgPSBSZWFjdEVkaXRvci5maW5kS2V5KGUsIF9ub2RlKTtcblxuICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKFtfcGF0aCwgX2tleV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ21vdmVfbm9kZSc6XG4gICAgICAgIHtcbiAgICAgICAgICBmb3IgKHZhciBbX25vZGUyLCBfcGF0aDJdIG9mIEVkaXRvci5sZXZlbHMoZSwge1xuICAgICAgICAgICAgYXQ6IFBhdGguY29tbW9uKFBhdGgucGFyZW50KG9wLnBhdGgpLCBQYXRoLnBhcmVudChvcC5uZXdQYXRoKSlcbiAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgdmFyIF9rZXkyID0gUmVhY3RFZGl0b3IuZmluZEtleShlLCBfbm9kZTIpO1xuXG4gICAgICAgICAgICBtYXRjaGVzLnB1c2goW19wYXRoMiwgX2tleTJdKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFwcGx5KG9wKTtcblxuICAgIGZvciAodmFyIFtfcGF0aDMsIF9rZXkzXSBvZiBtYXRjaGVzKSB7XG4gICAgICB2YXIgW19ub2RlM10gPSBFZGl0b3Iubm9kZShlLCBfcGF0aDMpO1xuICAgICAgTk9ERV9UT19LRVkuc2V0KF9ub2RlMywgX2tleTMpO1xuICAgIH1cbiAgfTtcblxuICBlLnNldEZyYWdtZW50RGF0YSA9IGRhdGEgPT4ge1xuICAgIHZhciB7XG4gICAgICBzZWxlY3Rpb25cbiAgICB9ID0gZTtcblxuICAgIGlmICghc2VsZWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIFtzdGFydCwgZW5kXSA9IFJhbmdlLmVkZ2VzKHNlbGVjdGlvbik7XG4gICAgdmFyIHN0YXJ0Vm9pZCA9IEVkaXRvci52b2lkKGUsIHtcbiAgICAgIGF0OiBzdGFydC5wYXRoXG4gICAgfSk7XG4gICAgdmFyIGVuZFZvaWQgPSBFZGl0b3Iudm9pZChlLCB7XG4gICAgICBhdDogZW5kLnBhdGhcbiAgICB9KTtcblxuICAgIGlmIChSYW5nZS5pc0NvbGxhcHNlZChzZWxlY3Rpb24pICYmICFzdGFydFZvaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIENyZWF0ZSBhIGZha2Ugc2VsZWN0aW9uIHNvIHRoYXQgd2UgY2FuIGFkZCBhIEJhc2U2NC1lbmNvZGVkIGNvcHkgb2YgdGhlXG4gICAgLy8gZnJhZ21lbnQgdG8gdGhlIEhUTUwsIHRvIGRlY29kZSBvbiBmdXR1cmUgcGFzdGVzLlxuXG5cbiAgICB2YXIgZG9tUmFuZ2UgPSBSZWFjdEVkaXRvci50b0RPTVJhbmdlKGUsIHNlbGVjdGlvbik7XG4gICAgdmFyIGNvbnRlbnRzID0gZG9tUmFuZ2UuY2xvbmVDb250ZW50cygpO1xuICAgIHZhciBhdHRhY2ggPSBjb250ZW50cy5jaGlsZE5vZGVzWzBdOyAvLyBNYWtlIHN1cmUgYXR0YWNoIGlzIG5vbi1lbXB0eSwgc2luY2UgZW1wdHkgbm9kZXMgd2lsbCBub3QgZ2V0IGNvcGllZC5cblxuICAgIGNvbnRlbnRzLmNoaWxkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgIGlmIChub2RlLnRleHRDb250ZW50ICYmIG5vZGUudGV4dENvbnRlbnQudHJpbSgpICE9PSAnJykge1xuICAgICAgICBhdHRhY2ggPSBub2RlO1xuICAgICAgfVxuICAgIH0pOyAvLyBDT01QQVQ6IElmIHRoZSBlbmQgbm9kZSBpcyBhIHZvaWQgbm9kZSwgd2UgbmVlZCB0byBtb3ZlIHRoZSBlbmQgb2YgdGhlXG4gICAgLy8gcmFuZ2UgZnJvbSB0aGUgdm9pZCBub2RlJ3Mgc3BhY2VyIHNwYW4sIHRvIHRoZSBlbmQgb2YgdGhlIHZvaWQgbm9kZSdzXG4gICAgLy8gY29udGVudCwgc2luY2UgdGhlIHNwYWNlciBpcyBiZWZvcmUgdm9pZCdzIGNvbnRlbnQgaW4gdGhlIERPTS5cblxuICAgIGlmIChlbmRWb2lkKSB7XG4gICAgICB2YXIgW3ZvaWROb2RlXSA9IGVuZFZvaWQ7XG4gICAgICB2YXIgciA9IGRvbVJhbmdlLmNsb25lUmFuZ2UoKTtcbiAgICAgIHZhciBkb21Ob2RlID0gUmVhY3RFZGl0b3IudG9ET01Ob2RlKGUsIHZvaWROb2RlKTtcbiAgICAgIHIuc2V0RW5kQWZ0ZXIoZG9tTm9kZSk7XG4gICAgICBjb250ZW50cyA9IHIuY2xvbmVDb250ZW50cygpO1xuICAgIH0gLy8gQ09NUEFUOiBJZiB0aGUgc3RhcnQgbm9kZSBpcyBhIHZvaWQgbm9kZSwgd2UgbmVlZCB0byBhdHRhY2ggdGhlIGVuY29kZWRcbiAgICAvLyBmcmFnbWVudCB0byB0aGUgdm9pZCBub2RlJ3MgY29udGVudCBub2RlIGluc3RlYWQgb2YgdGhlIHNwYWNlciwgYmVjYXVzZVxuICAgIC8vIGF0dGFjaGluZyBpdCB0byBlbXB0eSBgPGRpdj4vPHNwYW4+YCBub2RlcyB3aWxsIGVuZCB1cCBoYXZpbmcgaXQgZXJhc2VkIGJ5XG4gICAgLy8gbW9zdCBicm93c2Vycy4gKDIwMTgvMDQvMjcpXG5cblxuICAgIGlmIChzdGFydFZvaWQpIHtcbiAgICAgIGF0dGFjaCA9IGNvbnRlbnRzLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNsYXRlLXNwYWNlcl0nKTtcbiAgICB9IC8vIFJlbW92ZSBhbnkgemVyby13aWR0aCBzcGFjZSBzcGFucyBmcm9tIHRoZSBjbG9uZWQgRE9NIHNvIHRoYXQgdGhleSBkb24ndFxuICAgIC8vIHNob3cgdXAgZWxzZXdoZXJlIHdoZW4gcGFzdGVkLlxuXG5cbiAgICBBcnJheS5mcm9tKGNvbnRlbnRzLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNsYXRlLXplcm8td2lkdGhdJykpLmZvckVhY2goencgPT4ge1xuICAgICAgdmFyIGlzTmV3bGluZSA9IHp3LmdldEF0dHJpYnV0ZSgnZGF0YS1zbGF0ZS16ZXJvLXdpZHRoJykgPT09ICduJztcbiAgICAgIHp3LnRleHRDb250ZW50ID0gaXNOZXdsaW5lID8gJ1xcbicgOiAnJztcbiAgICB9KTsgLy8gU2V0IGEgYGRhdGEtc2xhdGUtZnJhZ21lbnRgIGF0dHJpYnV0ZSBvbiBhIG5vbi1lbXB0eSBub2RlLCBzbyBpdCBzaG93cyB1cFxuICAgIC8vIGluIHRoZSBIVE1MLCBhbmQgY2FuIGJlIHVzZWQgZm9yIGludHJhLVNsYXRlIHBhc3RpbmcuIElmIGl0J3MgYSB0ZXh0XG4gICAgLy8gbm9kZSwgd3JhcCBpdCBpbiBhIGA8c3Bhbj5gIHNvIHdlIGhhdmUgc29tZXRoaW5nIHRvIHNldCBhbiBhdHRyaWJ1dGUgb24uXG5cbiAgICBpZiAoaXNET01UZXh0KGF0dGFjaCkpIHtcbiAgICAgIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpOyAvLyBDT01QQVQ6IEluIENocm9tZSBhbmQgU2FmYXJpLCBpZiB3ZSBkb24ndCBhZGQgdGhlIGB3aGl0ZS1zcGFjZWAgc3R5bGVcbiAgICAgIC8vIHRoZW4gbGVhZGluZyBhbmQgdHJhaWxpbmcgc3BhY2VzIHdpbGwgYmUgaWdub3JlZC4gKDIwMTcvMDkvMjEpXG5cbiAgICAgIHNwYW4uc3R5bGUud2hpdGVTcGFjZSA9ICdwcmUnO1xuICAgICAgc3Bhbi5hcHBlbmRDaGlsZChhdHRhY2gpO1xuICAgICAgY29udGVudHMuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICBhdHRhY2ggPSBzcGFuO1xuICAgIH1cblxuICAgIHZhciBmcmFnbWVudCA9IGUuZ2V0RnJhZ21lbnQoKTtcbiAgICB2YXIgc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZnJhZ21lbnQpO1xuICAgIHZhciBlbmNvZGVkID0gd2luZG93LmJ0b2EoZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZykpO1xuICAgIGF0dGFjaC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2xhdGUtZnJhZ21lbnQnLCBlbmNvZGVkKTtcbiAgICBkYXRhLnNldERhdGEoJ2FwcGxpY2F0aW9uL3gtc2xhdGUtZnJhZ21lbnQnLCBlbmNvZGVkKTsgLy8gQWRkIHRoZSBjb250ZW50IHRvIGEgPGRpdj4gc28gdGhhdCB3ZSBjYW4gZ2V0IGl0cyBpbm5lciBIVE1MLlxuXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjb250ZW50cyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJ3RydWUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgZGF0YS5zZXREYXRhKCd0ZXh0L2h0bWwnLCBkaXYuaW5uZXJIVE1MKTtcbiAgICBkYXRhLnNldERhdGEoJ3RleHQvcGxhaW4nLCBnZXRQbGFpblRleHQoZGl2KSk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaXYpO1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIGUuaW5zZXJ0RGF0YSA9IGRhdGEgPT4ge1xuICAgIHZhciBmcmFnbWVudCA9IGRhdGEuZ2V0RGF0YSgnYXBwbGljYXRpb24veC1zbGF0ZS1mcmFnbWVudCcpO1xuXG4gICAgaWYgKGZyYWdtZW50KSB7XG4gICAgICB2YXIgZGVjb2RlZCA9IGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cuYXRvYihmcmFnbWVudCkpO1xuICAgICAgdmFyIHBhcnNlZCA9IEpTT04ucGFyc2UoZGVjb2RlZCk7XG4gICAgICBlLmluc2VydEZyYWdtZW50KHBhcnNlZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRleHQgPSBkYXRhLmdldERhdGEoJ3RleHQvcGxhaW4nKTtcblxuICAgIGlmICh0ZXh0KSB7XG4gICAgICB2YXIgbGluZXMgPSB0ZXh0LnNwbGl0KC9cXHJcXG58XFxyfFxcbi8pO1xuICAgICAgdmFyIHNwbGl0ID0gZmFsc2U7XG5cbiAgICAgIGZvciAodmFyIGxpbmUgb2YgbGluZXMpIHtcbiAgICAgICAgaWYgKHNwbGl0KSB7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5zcGxpdE5vZGVzKGUsIHtcbiAgICAgICAgICAgIGFsd2F5czogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5pbnNlcnRUZXh0KGxpbmUpO1xuICAgICAgICBzcGxpdCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGUub25DaGFuZ2UgPSAoKSA9PiB7XG4gICAgLy8gQ09NUEFUOiBSZWFjdCBkb2Vzbid0IGJhdGNoIGBzZXRTdGF0ZWAgaG9vayBjYWxscywgd2hpY2ggbWVhbnMgdGhhdCB0aGVcbiAgICAvLyBjaGlsZHJlbiBhbmQgc2VsZWN0aW9uIGNhbiBnZXQgb3V0IG9mIHN5bmMgZm9yIG9uZSByZW5kZXIgcGFzcy4gU28gd2VcbiAgICAvLyBoYXZlIHRvIHVzZSB0aGlzIHVuc3RhYmxlIEFQSSB0byBlbnN1cmUgaXQgYmF0Y2hlcyB0aGVtLiAoMjAxOS8xMi8wMylcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE0MjU5I2lzc3VlY29tbWVudC00Mzk3MDIzNjdcbiAgICBSZWFjdERPTS51bnN0YWJsZV9iYXRjaGVkVXBkYXRlcygoKSA9PiB7XG4gICAgICB2YXIgb25Db250ZXh0Q2hhbmdlID0gRURJVE9SX1RPX09OX0NIQU5HRS5nZXQoZSk7XG5cbiAgICAgIGlmIChvbkNvbnRleHRDaGFuZ2UpIHtcbiAgICAgICAgb25Db250ZXh0Q2hhbmdlKCk7XG4gICAgICB9XG5cbiAgICAgIG9uQ2hhbmdlKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIGU7XG59O1xuXG4vLyBDb21wb25lbnRzXG52YXIgRWRpdGFibGUkMSA9IElTX0FORFJPSUQgPyBBbmRyb2lkRWRpdGFibGUgOiBFZGl0YWJsZTtcblxuZXhwb3J0IHsgQW5kcm9pZEVkaXRhYmxlLCBFZGl0YWJsZSBhcyBEZWZhdWx0RWRpdGFibGUsIERlZmF1bHRFbGVtZW50LCBEZWZhdWx0TGVhZiwgRGVmYXVsdFBsYWNlaG9sZGVyLCBFZGl0YWJsZSQxIGFzIEVkaXRhYmxlLCBSZWFjdEVkaXRvciwgU2xhdGUsIHVzZUVkaXRvciwgdXNlRm9jdXNlZCwgdXNlUmVhZE9ubHksIHVzZVNlbGVjdGVkLCB1c2VTbGF0ZSwgdXNlU2xhdGVTdGF0aWMsIHdpdGhSZWFjdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXMuanMubWFwXG4iLCJ2YXIgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcbnZhciBwcmVmaXggPSAnSW52YXJpYW50IGZhaWxlZCc7XG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmIChjb25kaXRpb24pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHByZWZpeCk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHByZWZpeCArIFwiOiBcIiArIChtZXNzYWdlIHx8ICcnKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW52YXJpYW50O1xuIiwiaW1wb3J0IHsgaXNQbGFpbk9iamVjdCB9IGZyb20gJ2lzLXBsYWluLW9iamVjdCc7XG5pbXBvcnQgeyBwcm9kdWNlLCBjcmVhdGVEcmFmdCwgZmluaXNoRHJhZnQsIGlzRHJhZnQgfSBmcm9tICdpbW1lcic7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG52YXIgRElSVFlfUEFUSFMgPSBuZXcgV2Vha01hcCgpO1xudmFyIEZMVVNISU5HID0gbmV3IFdlYWtNYXAoKTtcbnZhciBOT1JNQUxJWklORyA9IG5ldyBXZWFrTWFwKCk7XG52YXIgUEFUSF9SRUZTID0gbmV3IFdlYWtNYXAoKTtcbnZhciBQT0lOVF9SRUZTID0gbmV3IFdlYWtNYXAoKTtcbnZhciBSQU5HRV9SRUZTID0gbmV3IFdlYWtNYXAoKTtcblxuZnVuY3Rpb24gb3duS2V5cyQ5KG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSB7IHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsgfSBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQ5KHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMkOShPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzJDkoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG4vKipcclxuICogQ3JlYXRlIGEgbmV3IFNsYXRlIGBFZGl0b3JgIG9iamVjdC5cclxuICovXG5cbnZhciBjcmVhdGVFZGl0b3IgPSAoKSA9PiB7XG4gIHZhciBlZGl0b3IgPSB7XG4gICAgY2hpbGRyZW46IFtdLFxuICAgIG9wZXJhdGlvbnM6IFtdLFxuICAgIHNlbGVjdGlvbjogbnVsbCxcbiAgICBtYXJrczogbnVsbCxcbiAgICBpc0lubGluZTogKCkgPT4gZmFsc2UsXG4gICAgaXNWb2lkOiAoKSA9PiBmYWxzZSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgYXBwbHk6IG9wID0+IHtcbiAgICAgIGZvciAodmFyIHJlZiBvZiBFZGl0b3IucGF0aFJlZnMoZWRpdG9yKSkge1xuICAgICAgICBQYXRoUmVmLnRyYW5zZm9ybShyZWYsIG9wKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgX3JlZiBvZiBFZGl0b3IucG9pbnRSZWZzKGVkaXRvcikpIHtcbiAgICAgICAgUG9pbnRSZWYudHJhbnNmb3JtKF9yZWYsIG9wKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgX3JlZjIgb2YgRWRpdG9yLnJhbmdlUmVmcyhlZGl0b3IpKSB7XG4gICAgICAgIFJhbmdlUmVmLnRyYW5zZm9ybShfcmVmMiwgb3ApO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2V0ID0gbmV3IFNldCgpO1xuICAgICAgdmFyIGRpcnR5UGF0aHMgPSBbXTtcblxuICAgICAgdmFyIGFkZCA9IHBhdGggPT4ge1xuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgIHZhciBrZXkgPSBwYXRoLmpvaW4oJywnKTtcblxuICAgICAgICAgIGlmICghc2V0LmhhcyhrZXkpKSB7XG4gICAgICAgICAgICBzZXQuYWRkKGtleSk7XG4gICAgICAgICAgICBkaXJ0eVBhdGhzLnB1c2gocGF0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB2YXIgb2xkRGlydHlQYXRocyA9IERJUlRZX1BBVEhTLmdldChlZGl0b3IpIHx8IFtdO1xuICAgICAgdmFyIG5ld0RpcnR5UGF0aHMgPSBnZXREaXJ0eVBhdGhzKG9wKTtcblxuICAgICAgZm9yICh2YXIgcGF0aCBvZiBvbGREaXJ0eVBhdGhzKSB7XG4gICAgICAgIHZhciBuZXdQYXRoID0gUGF0aC50cmFuc2Zvcm0ocGF0aCwgb3ApO1xuICAgICAgICBhZGQobmV3UGF0aCk7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIF9wYXRoIG9mIG5ld0RpcnR5UGF0aHMpIHtcbiAgICAgICAgYWRkKF9wYXRoKTtcbiAgICAgIH1cblxuICAgICAgRElSVFlfUEFUSFMuc2V0KGVkaXRvciwgZGlydHlQYXRocyk7XG4gICAgICBUcmFuc2Zvcm1zLnRyYW5zZm9ybShlZGl0b3IsIG9wKTtcbiAgICAgIGVkaXRvci5vcGVyYXRpb25zLnB1c2gob3ApO1xuICAgICAgRWRpdG9yLm5vcm1hbGl6ZShlZGl0b3IpOyAvLyBDbGVhciBhbnkgZm9ybWF0cyBhcHBsaWVkIHRvIHRoZSBjdXJzb3IgaWYgdGhlIHNlbGVjdGlvbiBjaGFuZ2VzLlxuXG4gICAgICBpZiAob3AudHlwZSA9PT0gJ3NldF9zZWxlY3Rpb24nKSB7XG4gICAgICAgIGVkaXRvci5tYXJrcyA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICghRkxVU0hJTkcuZ2V0KGVkaXRvcikpIHtcbiAgICAgICAgRkxVU0hJTkcuc2V0KGVkaXRvciwgdHJ1ZSk7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIEZMVVNISU5HLnNldChlZGl0b3IsIGZhbHNlKTtcbiAgICAgICAgICBlZGl0b3Iub25DaGFuZ2UoKTtcbiAgICAgICAgICBlZGl0b3Iub3BlcmF0aW9ucyA9IFtdO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFkZE1hcms6IChrZXksIHZhbHVlKSA9PiB7XG4gICAgICB2YXIge1xuICAgICAgICBzZWxlY3Rpb25cbiAgICAgIH0gPSBlZGl0b3I7XG5cbiAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgaWYgKFJhbmdlLmlzRXhwYW5kZWQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgIFRyYW5zZm9ybXMuc2V0Tm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgICBba2V5XTogdmFsdWVcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBtYXRjaDogVGV4dC5pc1RleHQsXG4gICAgICAgICAgICBzcGxpdDogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBtYXJrcyA9IF9vYmplY3RTcHJlYWQkOShfb2JqZWN0U3ByZWFkJDkoe30sIEVkaXRvci5tYXJrcyhlZGl0b3IpIHx8IHt9KSwge30sIHtcbiAgICAgICAgICAgIFtrZXldOiB2YWx1ZVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgZWRpdG9yLm1hcmtzID0gbWFya3M7XG5cbiAgICAgICAgICBpZiAoIUZMVVNISU5HLmdldChlZGl0b3IpKSB7XG4gICAgICAgICAgICBlZGl0b3Iub25DaGFuZ2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGRlbGV0ZUJhY2t3YXJkOiB1bml0ID0+IHtcbiAgICAgIHZhciB7XG4gICAgICAgIHNlbGVjdGlvblxuICAgICAgfSA9IGVkaXRvcjtcblxuICAgICAgaWYgKHNlbGVjdGlvbiAmJiBSYW5nZS5pc0NvbGxhcHNlZChzZWxlY3Rpb24pKSB7XG4gICAgICAgIFRyYW5zZm9ybXMuZGVsZXRlKGVkaXRvciwge1xuICAgICAgICAgIHVuaXQsXG4gICAgICAgICAgcmV2ZXJzZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlbGV0ZUZvcndhcmQ6IHVuaXQgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgc2VsZWN0aW9uXG4gICAgICB9ID0gZWRpdG9yO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uICYmIFJhbmdlLmlzQ29sbGFwc2VkKHNlbGVjdGlvbikpIHtcbiAgICAgICAgVHJhbnNmb3Jtcy5kZWxldGUoZWRpdG9yLCB7XG4gICAgICAgICAgdW5pdFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlbGV0ZUZyYWdtZW50OiBkaXJlY3Rpb24gPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgc2VsZWN0aW9uXG4gICAgICB9ID0gZWRpdG9yO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uICYmIFJhbmdlLmlzRXhwYW5kZWQoc2VsZWN0aW9uKSkge1xuICAgICAgICBUcmFuc2Zvcm1zLmRlbGV0ZShlZGl0b3IsIHtcbiAgICAgICAgICByZXZlcnNlOiBkaXJlY3Rpb24gPT09ICdiYWNrd2FyZCdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXRGcmFnbWVudDogKCkgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgc2VsZWN0aW9uXG4gICAgICB9ID0gZWRpdG9yO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBOb2RlLmZyYWdtZW50KGVkaXRvciwgc2VsZWN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFtdO1xuICAgIH0sXG4gICAgaW5zZXJ0QnJlYWs6ICgpID0+IHtcbiAgICAgIFRyYW5zZm9ybXMuc3BsaXROb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgYWx3YXlzOiB0cnVlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGluc2VydEZyYWdtZW50OiBmcmFnbWVudCA9PiB7XG4gICAgICBUcmFuc2Zvcm1zLmluc2VydEZyYWdtZW50KGVkaXRvciwgZnJhZ21lbnQpO1xuICAgIH0sXG4gICAgaW5zZXJ0Tm9kZTogbm9kZSA9PiB7XG4gICAgICBUcmFuc2Zvcm1zLmluc2VydE5vZGVzKGVkaXRvciwgbm9kZSk7XG4gICAgfSxcbiAgICBpbnNlcnRUZXh0OiB0ZXh0ID0+IHtcbiAgICAgIHZhciB7XG4gICAgICAgIHNlbGVjdGlvbixcbiAgICAgICAgbWFya3NcbiAgICAgIH0gPSBlZGl0b3I7XG5cbiAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgLy8gSWYgdGhlIGN1cnNvciBpcyBhdCB0aGUgZW5kIG9mIGFuIGlubGluZSwgbW92ZSBpdCBvdXRzaWRlIG9mXG4gICAgICAgIC8vIHRoZSBpbmxpbmUgYmVmb3JlIGluc2VydGluZ1xuICAgICAgICBpZiAoUmFuZ2UuaXNDb2xsYXBzZWQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgIHZhciBpbmxpbmUgPSBFZGl0b3IuYWJvdmUoZWRpdG9yLCB7XG4gICAgICAgICAgICBtYXRjaDogbiA9PiBFZGl0b3IuaXNJbmxpbmUoZWRpdG9yLCBuKSxcbiAgICAgICAgICAgIG1vZGU6ICdoaWdoZXN0J1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKGlubGluZSkge1xuICAgICAgICAgICAgdmFyIFssIGlubGluZVBhdGhdID0gaW5saW5lO1xuXG4gICAgICAgICAgICBpZiAoRWRpdG9yLmlzRW5kKGVkaXRvciwgc2VsZWN0aW9uLmFuY2hvciwgaW5saW5lUGF0aCkpIHtcbiAgICAgICAgICAgICAgdmFyIHBvaW50ID0gRWRpdG9yLmFmdGVyKGVkaXRvciwgaW5saW5lUGF0aCk7XG4gICAgICAgICAgICAgIFRyYW5zZm9ybXMuc2V0U2VsZWN0aW9uKGVkaXRvciwge1xuICAgICAgICAgICAgICAgIGFuY2hvcjogcG9pbnQsXG4gICAgICAgICAgICAgICAgZm9jdXM6IHBvaW50XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXJrcykge1xuICAgICAgICAgIHZhciBub2RlID0gX29iamVjdFNwcmVhZCQ5KHtcbiAgICAgICAgICAgIHRleHRcbiAgICAgICAgICB9LCBtYXJrcyk7XG5cbiAgICAgICAgICBUcmFuc2Zvcm1zLmluc2VydE5vZGVzKGVkaXRvciwgbm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5pbnNlcnRUZXh0KGVkaXRvciwgdGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBlZGl0b3IubWFya3MgPSBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgbm9ybWFsaXplTm9kZTogZW50cnkgPT4ge1xuICAgICAgdmFyIFtub2RlLCBwYXRoXSA9IGVudHJ5OyAvLyBUaGVyZSBhcmUgbm8gY29yZSBub3JtYWxpemF0aW9ucyBmb3IgdGV4dCBub2Rlcy5cblxuICAgICAgaWYgKFRleHQuaXNUZXh0KG5vZGUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gRW5zdXJlIHRoYXQgYmxvY2sgYW5kIGlubGluZSBub2RlcyBoYXZlIGF0IGxlYXN0IG9uZSB0ZXh0IGNoaWxkLlxuXG5cbiAgICAgIGlmIChFbGVtZW50LmlzRWxlbWVudChub2RlKSAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIgY2hpbGQgPSB7XG4gICAgICAgICAgdGV4dDogJydcbiAgICAgICAgfTtcbiAgICAgICAgVHJhbnNmb3Jtcy5pbnNlcnROb2RlcyhlZGl0b3IsIGNoaWxkLCB7XG4gICAgICAgICAgYXQ6IHBhdGguY29uY2F0KDApLFxuICAgICAgICAgIHZvaWRzOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIERldGVybWluZSB3aGV0aGVyIHRoZSBub2RlIHNob3VsZCBoYXZlIGJsb2NrIG9yIGlubGluZSBjaGlsZHJlbi5cblxuXG4gICAgICB2YXIgc2hvdWxkSGF2ZUlubGluZXMgPSBFZGl0b3IuaXNFZGl0b3Iobm9kZSkgPyBmYWxzZSA6IEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpICYmIChlZGl0b3IuaXNJbmxpbmUobm9kZSkgfHwgbm9kZS5jaGlsZHJlbi5sZW5ndGggPT09IDAgfHwgVGV4dC5pc1RleHQobm9kZS5jaGlsZHJlblswXSkgfHwgZWRpdG9yLmlzSW5saW5lKG5vZGUuY2hpbGRyZW5bMF0pKTsgLy8gU2luY2Ugd2UnbGwgYmUgYXBwbHlpbmcgb3BlcmF0aW9ucyB3aGlsZSBpdGVyYXRpbmcsIGtlZXAgdHJhY2sgb2YgYW5cbiAgICAgIC8vIGluZGV4IHRoYXQgYWNjb3VudHMgZm9yIGFueSBhZGRlZC9yZW1vdmVkIG5vZGVzLlxuXG4gICAgICB2YXIgbiA9IDA7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKywgbisrKSB7XG4gICAgICAgIHZhciBjdXJyZW50Tm9kZSA9IE5vZGUuZ2V0KGVkaXRvciwgcGF0aCk7XG4gICAgICAgIGlmIChUZXh0LmlzVGV4dChjdXJyZW50Tm9kZSkpIGNvbnRpbnVlO1xuICAgICAgICB2YXIgX2NoaWxkID0gbm9kZS5jaGlsZHJlbltpXTtcbiAgICAgICAgdmFyIHByZXYgPSBjdXJyZW50Tm9kZS5jaGlsZHJlbltuIC0gMV07XG4gICAgICAgIHZhciBpc0xhc3QgPSBpID09PSBub2RlLmNoaWxkcmVuLmxlbmd0aCAtIDE7XG4gICAgICAgIHZhciBpc0lubGluZU9yVGV4dCA9IFRleHQuaXNUZXh0KF9jaGlsZCkgfHwgRWxlbWVudC5pc0VsZW1lbnQoX2NoaWxkKSAmJiBlZGl0b3IuaXNJbmxpbmUoX2NoaWxkKTsgLy8gT25seSBhbGxvdyBibG9jayBub2RlcyBpbiB0aGUgdG9wLWxldmVsIGNoaWxkcmVuIGFuZCBwYXJlbnQgYmxvY2tzXG4gICAgICAgIC8vIHRoYXQgb25seSBjb250YWluIGJsb2NrIG5vZGVzLiBTaW1pbGFybHksIG9ubHkgYWxsb3cgaW5saW5lIG5vZGVzIGluXG4gICAgICAgIC8vIG90aGVyIGlubGluZSBub2Rlcywgb3IgcGFyZW50IGJsb2NrcyB0aGF0IG9ubHkgY29udGFpbiBpbmxpbmVzIGFuZFxuICAgICAgICAvLyB0ZXh0LlxuXG4gICAgICAgIGlmIChpc0lubGluZU9yVGV4dCAhPT0gc2hvdWxkSGF2ZUlubGluZXMpIHtcbiAgICAgICAgICBUcmFuc2Zvcm1zLnJlbW92ZU5vZGVzKGVkaXRvciwge1xuICAgICAgICAgICAgYXQ6IHBhdGguY29uY2F0KG4pLFxuICAgICAgICAgICAgdm9pZHM6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBuLS07XG4gICAgICAgIH0gZWxzZSBpZiAoRWxlbWVudC5pc0VsZW1lbnQoX2NoaWxkKSkge1xuICAgICAgICAgIC8vIEVuc3VyZSB0aGF0IGlubGluZSBub2RlcyBhcmUgc3Vycm91bmRlZCBieSB0ZXh0IG5vZGVzLlxuICAgICAgICAgIGlmIChlZGl0b3IuaXNJbmxpbmUoX2NoaWxkKSkge1xuICAgICAgICAgICAgaWYgKHByZXYgPT0gbnVsbCB8fCAhVGV4dC5pc1RleHQocHJldikpIHtcbiAgICAgICAgICAgICAgdmFyIG5ld0NoaWxkID0ge1xuICAgICAgICAgICAgICAgIHRleHQ6ICcnXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIFRyYW5zZm9ybXMuaW5zZXJ0Tm9kZXMoZWRpdG9yLCBuZXdDaGlsZCwge1xuICAgICAgICAgICAgICAgIGF0OiBwYXRoLmNvbmNhdChuKSxcbiAgICAgICAgICAgICAgICB2b2lkczogdHJ1ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgbisrO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0xhc3QpIHtcbiAgICAgICAgICAgICAgdmFyIF9uZXdDaGlsZCA9IHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAnJ1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBUcmFuc2Zvcm1zLmluc2VydE5vZGVzKGVkaXRvciwgX25ld0NoaWxkLCB7XG4gICAgICAgICAgICAgICAgYXQ6IHBhdGguY29uY2F0KG4gKyAxKSxcbiAgICAgICAgICAgICAgICB2b2lkczogdHJ1ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgbisrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBNZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzIHRoYXQgYXJlIGVtcHR5IG9yIG1hdGNoLlxuICAgICAgICAgIGlmIChwcmV2ICE9IG51bGwgJiYgVGV4dC5pc1RleHQocHJldikpIHtcbiAgICAgICAgICAgIGlmIChUZXh0LmVxdWFscyhfY2hpbGQsIHByZXYsIHtcbiAgICAgICAgICAgICAgbG9vc2U6IHRydWVcbiAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAgIFRyYW5zZm9ybXMubWVyZ2VOb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICAgICAgICBhdDogcGF0aC5jb25jYXQobiksXG4gICAgICAgICAgICAgICAgdm9pZHM6IHRydWVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIG4tLTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJldi50ZXh0ID09PSAnJykge1xuICAgICAgICAgICAgICBUcmFuc2Zvcm1zLnJlbW92ZU5vZGVzKGVkaXRvciwge1xuICAgICAgICAgICAgICAgIGF0OiBwYXRoLmNvbmNhdChuIC0gMSksXG4gICAgICAgICAgICAgICAgdm9pZHM6IHRydWVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIG4tLTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoX2NoaWxkLnRleHQgPT09ICcnKSB7XG4gICAgICAgICAgICAgIFRyYW5zZm9ybXMucmVtb3ZlTm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgICAgICAgYXQ6IHBhdGguY29uY2F0KG4pLFxuICAgICAgICAgICAgICAgIHZvaWRzOiB0cnVlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBuLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICByZW1vdmVNYXJrOiBrZXkgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgc2VsZWN0aW9uXG4gICAgICB9ID0gZWRpdG9yO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgIGlmIChSYW5nZS5pc0V4cGFuZGVkKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICBUcmFuc2Zvcm1zLnVuc2V0Tm9kZXMoZWRpdG9yLCBrZXksIHtcbiAgICAgICAgICAgIG1hdGNoOiBUZXh0LmlzVGV4dCxcbiAgICAgICAgICAgIHNwbGl0OiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG1hcmtzID0gX29iamVjdFNwcmVhZCQ5KHt9LCBFZGl0b3IubWFya3MoZWRpdG9yKSB8fCB7fSk7XG5cbiAgICAgICAgICBkZWxldGUgbWFya3Nba2V5XTtcbiAgICAgICAgICBlZGl0b3IubWFya3MgPSBtYXJrcztcblxuICAgICAgICAgIGlmICghRkxVU0hJTkcuZ2V0KGVkaXRvcikpIHtcbiAgICAgICAgICAgIGVkaXRvci5vbkNoYW5nZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGVkaXRvcjtcbn07XG4vKipcclxuICogR2V0IHRoZSBcImRpcnR5XCIgcGF0aHMgZ2VuZXJhdGVkIGZyb20gYW4gb3BlcmF0aW9uLlxyXG4gKi9cblxudmFyIGdldERpcnR5UGF0aHMgPSBvcCA9PiB7XG4gIHN3aXRjaCAob3AudHlwZSkge1xuICAgIGNhc2UgJ2luc2VydF90ZXh0JzpcbiAgICBjYXNlICdyZW1vdmVfdGV4dCc6XG4gICAgY2FzZSAnc2V0X25vZGUnOlxuICAgICAge1xuICAgICAgICB2YXIge1xuICAgICAgICAgIHBhdGhcbiAgICAgICAgfSA9IG9wO1xuICAgICAgICByZXR1cm4gUGF0aC5sZXZlbHMocGF0aCk7XG4gICAgICB9XG5cbiAgICBjYXNlICdpbnNlcnRfbm9kZSc6XG4gICAgICB7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgbm9kZSxcbiAgICAgICAgICBwYXRoOiBfcGF0aDJcbiAgICAgICAgfSA9IG9wO1xuICAgICAgICB2YXIgbGV2ZWxzID0gUGF0aC5sZXZlbHMoX3BhdGgyKTtcbiAgICAgICAgdmFyIGRlc2NlbmRhbnRzID0gVGV4dC5pc1RleHQobm9kZSkgPyBbXSA6IEFycmF5LmZyb20oTm9kZS5ub2Rlcyhub2RlKSwgX3JlZjMgPT4ge1xuICAgICAgICAgIHZhciBbLCBwXSA9IF9yZWYzO1xuICAgICAgICAgIHJldHVybiBfcGF0aDIuY29uY2F0KHApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFsuLi5sZXZlbHMsIC4uLmRlc2NlbmRhbnRzXTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ21lcmdlX25vZGUnOlxuICAgICAge1xuICAgICAgICB2YXIge1xuICAgICAgICAgIHBhdGg6IF9wYXRoM1xuICAgICAgICB9ID0gb3A7XG4gICAgICAgIHZhciBhbmNlc3RvcnMgPSBQYXRoLmFuY2VzdG9ycyhfcGF0aDMpO1xuICAgICAgICB2YXIgcHJldmlvdXNQYXRoID0gUGF0aC5wcmV2aW91cyhfcGF0aDMpO1xuICAgICAgICByZXR1cm4gWy4uLmFuY2VzdG9ycywgcHJldmlvdXNQYXRoXTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ21vdmVfbm9kZSc6XG4gICAgICB7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgcGF0aDogX3BhdGg0LFxuICAgICAgICAgIG5ld1BhdGhcbiAgICAgICAgfSA9IG9wO1xuXG4gICAgICAgIGlmIChQYXRoLmVxdWFscyhfcGF0aDQsIG5ld1BhdGgpKSB7XG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9sZEFuY2VzdG9ycyA9IFtdO1xuICAgICAgICB2YXIgbmV3QW5jZXN0b3JzID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgYW5jZXN0b3Igb2YgUGF0aC5hbmNlc3RvcnMoX3BhdGg0KSkge1xuICAgICAgICAgIHZhciBwID0gUGF0aC50cmFuc2Zvcm0oYW5jZXN0b3IsIG9wKTtcbiAgICAgICAgICBvbGRBbmNlc3RvcnMucHVzaChwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIF9hbmNlc3RvciBvZiBQYXRoLmFuY2VzdG9ycyhuZXdQYXRoKSkge1xuICAgICAgICAgIHZhciBfcCA9IFBhdGgudHJhbnNmb3JtKF9hbmNlc3Rvciwgb3ApO1xuXG4gICAgICAgICAgbmV3QW5jZXN0b3JzLnB1c2goX3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5ld1BhcmVudCA9IG5ld0FuY2VzdG9yc1tuZXdBbmNlc3RvcnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBuZXdJbmRleCA9IG5ld1BhdGhbbmV3UGF0aC5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIHJlc3VsdFBhdGggPSBuZXdQYXJlbnQuY29uY2F0KG5ld0luZGV4KTtcbiAgICAgICAgcmV0dXJuIFsuLi5vbGRBbmNlc3RvcnMsIC4uLm5ld0FuY2VzdG9ycywgcmVzdWx0UGF0aF07XG4gICAgICB9XG5cbiAgICBjYXNlICdyZW1vdmVfbm9kZSc6XG4gICAgICB7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgcGF0aDogX3BhdGg1XG4gICAgICAgIH0gPSBvcDtcblxuICAgICAgICB2YXIgX2FuY2VzdG9ycyA9IFBhdGguYW5jZXN0b3JzKF9wYXRoNSk7XG5cbiAgICAgICAgcmV0dXJuIFsuLi5fYW5jZXN0b3JzXTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ3NwbGl0X25vZGUnOlxuICAgICAge1xuICAgICAgICB2YXIge1xuICAgICAgICAgIHBhdGg6IF9wYXRoNlxuICAgICAgICB9ID0gb3A7XG5cbiAgICAgICAgdmFyIF9sZXZlbHMgPSBQYXRoLmxldmVscyhfcGF0aDYpO1xuXG4gICAgICAgIHZhciBuZXh0UGF0aCA9IFBhdGgubmV4dChfcGF0aDYpO1xuICAgICAgICByZXR1cm4gWy4uLl9sZXZlbHMsIG5leHRQYXRoXTtcbiAgICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbi8qKlxyXG4gKiBDb25zdGFudHMgZm9yIHN0cmluZyBkaXN0YW5jZSBjaGVja2luZy5cclxuICovXG52YXIgU1BBQ0UgPSAvXFxzLztcbnZhciBQVU5DVFVBVElPTiA9IC9bXFx1MDAyMS1cXHUwMDIzXFx1MDAyNS1cXHUwMDJBXFx1MDAyQy1cXHUwMDJGXFx1MDAzQVxcdTAwM0JcXHUwMDNGXFx1MDA0MFxcdTAwNUItXFx1MDA1RFxcdTAwNUZcXHUwMDdCXFx1MDA3RFxcdTAwQTFcXHUwMEE3XFx1MDBBQlxcdTAwQjZcXHUwMEI3XFx1MDBCQlxcdTAwQkZcXHUwMzdFXFx1MDM4N1xcdTA1NUEtXFx1MDU1RlxcdTA1ODlcXHUwNThBXFx1MDVCRVxcdTA1QzBcXHUwNUMzXFx1MDVDNlxcdTA1RjNcXHUwNUY0XFx1MDYwOVxcdTA2MEFcXHUwNjBDXFx1MDYwRFxcdTA2MUJcXHUwNjFFXFx1MDYxRlxcdTA2NkEtXFx1MDY2RFxcdTA2RDRcXHUwNzAwLVxcdTA3MERcXHUwN0Y3LVxcdTA3RjlcXHUwODMwLVxcdTA4M0VcXHUwODVFXFx1MDk2NFxcdTA5NjVcXHUwOTcwXFx1MEFGMFxcdTBERjRcXHUwRTRGXFx1MEU1QVxcdTBFNUJcXHUwRjA0LVxcdTBGMTJcXHUwRjE0XFx1MEYzQS1cXHUwRjNEXFx1MEY4NVxcdTBGRDAtXFx1MEZENFxcdTBGRDlcXHUwRkRBXFx1MTA0QS1cXHUxMDRGXFx1MTBGQlxcdTEzNjAtXFx1MTM2OFxcdTE0MDBcXHUxNjZEXFx1MTY2RVxcdTE2OUJcXHUxNjlDXFx1MTZFQi1cXHUxNkVEXFx1MTczNVxcdTE3MzZcXHUxN0Q0LVxcdTE3RDZcXHUxN0Q4LVxcdTE3REFcXHUxODAwLVxcdTE4MEFcXHUxOTQ0XFx1MTk0NVxcdTFBMUVcXHUxQTFGXFx1MUFBMC1cXHUxQUE2XFx1MUFBOC1cXHUxQUFEXFx1MUI1QS1cXHUxQjYwXFx1MUJGQy1cXHUxQkZGXFx1MUMzQi1cXHUxQzNGXFx1MUM3RVxcdTFDN0ZcXHUxQ0MwLVxcdTFDQzdcXHUxQ0QzXFx1MjAxMC1cXHUyMDI3XFx1MjAzMC1cXHUyMDQzXFx1MjA0NS1cXHUyMDUxXFx1MjA1My1cXHUyMDVFXFx1MjA3RFxcdTIwN0VcXHUyMDhEXFx1MjA4RVxcdTIzMjlcXHUyMzJBXFx1Mjc2OC1cXHUyNzc1XFx1MjdDNVxcdTI3QzZcXHUyN0U2LVxcdTI3RUZcXHUyOTgzLVxcdTI5OThcXHUyOUQ4LVxcdTI5REJcXHUyOUZDXFx1MjlGRFxcdTJDRjktXFx1MkNGQ1xcdTJDRkVcXHUyQ0ZGXFx1MkQ3MFxcdTJFMDAtXFx1MkUyRVxcdTJFMzAtXFx1MkUzQlxcdTMwMDEtXFx1MzAwM1xcdTMwMDgtXFx1MzAxMVxcdTMwMTQtXFx1MzAxRlxcdTMwMzBcXHUzMDNEXFx1MzBBMFxcdTMwRkJcXHVBNEZFXFx1QTRGRlxcdUE2MEQtXFx1QTYwRlxcdUE2NzNcXHVBNjdFXFx1QTZGMi1cXHVBNkY3XFx1QTg3NC1cXHVBODc3XFx1QThDRVxcdUE4Q0ZcXHVBOEY4LVxcdUE4RkFcXHVBOTJFXFx1QTkyRlxcdUE5NUZcXHVBOUMxLVxcdUE5Q0RcXHVBOURFXFx1QTlERlxcdUFBNUMtXFx1QUE1RlxcdUFBREVcXHVBQURGXFx1QUFGMFxcdUFBRjFcXHVBQkVCXFx1RkQzRVxcdUZEM0ZcXHVGRTEwLVxcdUZFMTlcXHVGRTMwLVxcdUZFNTJcXHVGRTU0LVxcdUZFNjFcXHVGRTYzXFx1RkU2OFxcdUZFNkFcXHVGRTZCXFx1RkYwMS1cXHVGRjAzXFx1RkYwNS1cXHVGRjBBXFx1RkYwQy1cXHVGRjBGXFx1RkYxQVxcdUZGMUJcXHVGRjFGXFx1RkYyMFxcdUZGM0ItXFx1RkYzRFxcdUZGM0ZcXHVGRjVCXFx1RkY1RFxcdUZGNUYtXFx1RkY2NV0vO1xudmFyIENIQU1FTEVPTiA9IC9bJ1xcdTIwMThcXHUyMDE5XS87XG4vKipcclxuICogR2V0IHRoZSBkaXN0YW5jZSB0byB0aGUgZW5kIG9mIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaW4gYSBzdHJpbmcgb2YgdGV4dC5cclxuICovXG5cbnZhciBnZXRDaGFyYWN0ZXJEaXN0YW5jZSA9IGZ1bmN0aW9uIGdldENoYXJhY3RlckRpc3RhbmNlKHN0cikge1xuICB2YXIgaXNSVEwgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICB2YXIgaXNMVFIgPSAhaXNSVEw7XG4gIHZhciBkaXN0ID0gMDsgLy8gcHJldiB0eXBlczpcbiAgLy8gTlNFUTogbm9uIHNlcXVlbmNlYWJsZSBjb2RlcG9pbnQuXG4gIC8vIE1PRDogbW9kaWZpZXJcbiAgLy8gWldKOiB6ZXJvIHdpZHRoIGpvaW5lclxuICAvLyBWQVI6IHZhcmlhdGlvbiBzZWxlY3RvclxuICAvLyBCTVA6IHNlcXVlbmNlYWJsZSBjb2RlcG9pbnQgZnJvbSBiYXNpYyBtdWx0aWxpbmd1YWwgcGxhbmVcbiAgLy8gUkk6IHJlZ2lvbmFsIGluZGljYXRvclxuICAvLyBLQzoga2V5Y2FwXG4gIC8vIFRBRzogdGFnXG5cbiAgdmFyIHByZXYgPSBudWxsO1xuICB2YXIgY29kZXBvaW50cyA9IGlzTFRSID8gc3RyIDogY29kZXBvaW50c0l0ZXJhdG9yUlRMKHN0cik7XG5cbiAgZm9yICh2YXIgY29kZXBvaW50IG9mIGNvZGVwb2ludHMpIHtcbiAgICB2YXIgY29kZSA9IGNvZGVwb2ludC5jb2RlUG9pbnRBdCgwKTtcbiAgICBpZiAoIWNvZGUpIGJyZWFrOyAvLyBDaGVjayBpZiBjb2RlcG9pbnQgaXMgcGFydCBvZiBhIHNlcXVlbmNlLlxuXG4gICAgaWYgKGlzWldKKGNvZGUpKSB7XG4gICAgICBkaXN0ICs9IGNvZGVwb2ludC5sZW5ndGg7XG4gICAgICBwcmV2ID0gJ1pXSic7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgW2lzS2V5Y2FwU3RhcnQsIGlzS2V5Y2FwRW5kXSA9IGlzTFRSID8gW2lzS2V5Y2FwLCBpc0NvbWJpbmluZ0VuY2xvc2luZ0tleWNhcF0gOiBbaXNDb21iaW5pbmdFbmNsb3NpbmdLZXljYXAsIGlzS2V5Y2FwXTtcblxuICAgIGlmIChpc0tleWNhcFN0YXJ0KGNvZGUpKSB7XG4gICAgICBpZiAocHJldiA9PT0gJ0tDJykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZGlzdCArPSBjb2RlcG9pbnQubGVuZ3RoO1xuICAgICAgcHJldiA9ICdLQyc7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNLZXljYXBFbmQoY29kZSkpIHtcbiAgICAgIGRpc3QgKz0gY29kZXBvaW50Lmxlbmd0aDtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChpc1ZhcmlhdGlvblNlbGVjdG9yKGNvZGUpKSB7XG4gICAgICBkaXN0ICs9IGNvZGVwb2ludC5sZW5ndGg7XG5cbiAgICAgIGlmIChpc0xUUiAmJiBwcmV2ID09PSAnQk1QJykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcHJldiA9ICdWQVInO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGlzQk1QRW1vamkoY29kZSkpIHtcbiAgICAgIGlmIChpc0xUUiAmJiBwcmV2ICYmIHByZXYgIT09ICdaV0onICYmIHByZXYgIT09ICdWQVInKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBkaXN0ICs9IGNvZGVwb2ludC5sZW5ndGg7XG5cbiAgICAgIGlmIChpc1JUTCAmJiBwcmV2ID09PSAnVkFSJykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcHJldiA9ICdCTVAnO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGlzTW9kaWZpZXIoY29kZSkpIHtcbiAgICAgIGRpc3QgKz0gY29kZXBvaW50Lmxlbmd0aDtcbiAgICAgIHByZXYgPSAnTU9EJztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBbaXNUYWdTdGFydCwgaXNUYWdFbmRdID0gaXNMVFIgPyBbaXNCbGFja0ZsYWcsIGlzQ2FuY2VsVGFnXSA6IFtpc0NhbmNlbFRhZywgaXNCbGFja0ZsYWddO1xuXG4gICAgaWYgKGlzVGFnU3RhcnQoY29kZSkpIHtcbiAgICAgIGlmIChwcmV2ID09PSAnVEFHJykgYnJlYWs7XG4gICAgICBkaXN0ICs9IGNvZGVwb2ludC5sZW5ndGg7XG4gICAgICBwcmV2ID0gJ1RBRyc7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNUYWdFbmQoY29kZSkpIHtcbiAgICAgIGRpc3QgKz0gY29kZXBvaW50Lmxlbmd0aDtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChwcmV2ID09PSAnVEFHJyAmJiBpc1RhZyhjb2RlKSkge1xuICAgICAgZGlzdCArPSBjb2RlcG9pbnQubGVuZ3RoO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGlzUmVnaW9uYWxJbmRpY2F0b3IoY29kZSkpIHtcbiAgICAgIGRpc3QgKz0gY29kZXBvaW50Lmxlbmd0aDtcblxuICAgICAgaWYgKHByZXYgPT09ICdSSScpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHByZXYgPSAnUkknO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFpc0JNUChjb2RlKSkge1xuICAgICAgLy8gSWYgcHJldmlvdXMgY29kZSBwb2ludCBpcyBub3Qgc2VxdWVuY2VhYmxlLCBpdCBtZWFucyB3ZSBhcmUgbm90IGluIGFcbiAgICAgIC8vIHNlcXVlbmNlLlxuICAgICAgaWYgKHByZXYgPT09ICdOU0VRJykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZGlzdCArPSBjb2RlcG9pbnQubGVuZ3RoO1xuICAgICAgcHJldiA9ICdOU0VRJztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH0gLy8gTW9kaWZpZXIgJ2dyb3VwcyB1cCcgd2l0aCB3aGF0IGV2ZXIgY2hhcmFjdGVyIGlzIGJlZm9yZSB0aGF0IChldmVuIHdoaXRlc3BhY2UpLCBuZWVkIHRvXG4gICAgLy8gbG9vayBhaGVhZC5cblxuXG4gICAgaWYgKGlzTFRSICYmIHByZXYgPT09ICdNT0QnKSB7XG4gICAgICBkaXN0ICs9IGNvZGVwb2ludC5sZW5ndGg7XG4gICAgICBicmVhaztcbiAgICB9IC8vIElmIHdoaWxlIGxvb3AgZXZlciBnZXRzIGhlcmUsIHdlJ3JlIGRvbmUgKGUuZyBsYXRpbiBjaGFycykuXG5cblxuICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRpc3QgfHwgMTtcbn07XG4vKipcclxuICogR2V0IHRoZSBkaXN0YW5jZSB0byB0aGUgZW5kIG9mIHRoZSBmaXJzdCB3b3JkIGluIGEgc3RyaW5nIG9mIHRleHQuXHJcbiAqL1xuXG52YXIgZ2V0V29yZERpc3RhbmNlID0gZnVuY3Rpb24gZ2V0V29yZERpc3RhbmNlKHRleHQpIHtcbiAgdmFyIGlzUlRMID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgdmFyIGRpc3QgPSAwO1xuICB2YXIgc3RhcnRlZCA9IGZhbHNlO1xuXG4gIHdoaWxlICh0ZXh0Lmxlbmd0aCA+IDApIHtcbiAgICB2YXIgY2hhckRpc3QgPSBnZXRDaGFyYWN0ZXJEaXN0YW5jZSh0ZXh0LCBpc1JUTCk7XG4gICAgdmFyIFtjaGFyLCByZW1haW5pbmddID0gc3BsaXRCeUNoYXJhY3RlckRpc3RhbmNlKHRleHQsIGNoYXJEaXN0LCBpc1JUTCk7XG5cbiAgICBpZiAoaXNXb3JkQ2hhcmFjdGVyKGNoYXIsIHJlbWFpbmluZywgaXNSVEwpKSB7XG4gICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgIGRpc3QgKz0gY2hhckRpc3Q7XG4gICAgfSBlbHNlIGlmICghc3RhcnRlZCkge1xuICAgICAgZGlzdCArPSBjaGFyRGlzdDtcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGV4dCA9IHJlbWFpbmluZztcbiAgfVxuXG4gIHJldHVybiBkaXN0O1xufTtcbi8qKlxyXG4gKiBTcGxpdCBhIHN0cmluZyBpbiB0d28gcGFydHMgYXQgYSBnaXZlbiBkaXN0YW5jZSBzdGFydGluZyBmcm9tIHRoZSBlbmQgd2hlblxyXG4gKiBgaXNSVExgIGlzIHNldCB0byBgdHJ1ZWAuXHJcbiAqL1xuXG52YXIgc3BsaXRCeUNoYXJhY3RlckRpc3RhbmNlID0gKHN0ciwgZGlzdCwgaXNSVEwpID0+IHtcbiAgaWYgKGlzUlRMKSB7XG4gICAgdmFyIGF0ID0gc3RyLmxlbmd0aCAtIGRpc3Q7XG4gICAgcmV0dXJuIFtzdHIuc2xpY2UoYXQsIHN0ci5sZW5ndGgpLCBzdHIuc2xpY2UoMCwgYXQpXTtcbiAgfVxuXG4gIHJldHVybiBbc3RyLnNsaWNlKDAsIGRpc3QpLCBzdHIuc2xpY2UoZGlzdCldO1xufTtcbi8qKlxyXG4gKiBDaGVjayBpZiBhIGNoYXJhY3RlciBpcyBhIHdvcmQgY2hhcmFjdGVyLiBUaGUgYHJlbWFpbmluZ2AgYXJndW1lbnQgaXMgdXNlZFxyXG4gKiBiZWNhdXNlIHNvbWV0aW1lcyB5b3UgbXVzdCByZWFkIHN1YnNlcXVlbnQgY2hhcmFjdGVycyB0byB0cnVseSBkZXRlcm1pbmUgaXQuXHJcbiAqL1xuXG52YXIgaXNXb3JkQ2hhcmFjdGVyID0gZnVuY3Rpb24gaXNXb3JkQ2hhcmFjdGVyKGNoYXIsIHJlbWFpbmluZykge1xuICB2YXIgaXNSVEwgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuXG4gIGlmIChTUEFDRS50ZXN0KGNoYXIpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIENoYW1lbGVvbnMgY291bnQgYXMgd29yZCBjaGFyYWN0ZXJzIGFzIGxvbmcgYXMgdGhleSdyZSBpbiBhIHdvcmQsIHNvXG4gIC8vIHJlY3Vyc2UgdG8gc2VlIGlmIHRoZSBuZXh0IG9uZSBpcyBhIHdvcmQgY2hhcmFjdGVyIG9yIG5vdC5cblxuXG4gIGlmIChDSEFNRUxFT04udGVzdChjaGFyKSkge1xuICAgIHZhciBjaGFyRGlzdCA9IGdldENoYXJhY3RlckRpc3RhbmNlKHJlbWFpbmluZywgaXNSVEwpO1xuICAgIHZhciBbbmV4dENoYXIsIG5leHRSZW1haW5pbmddID0gc3BsaXRCeUNoYXJhY3RlckRpc3RhbmNlKHJlbWFpbmluZywgY2hhckRpc3QsIGlzUlRMKTtcblxuICAgIGlmIChpc1dvcmRDaGFyYWN0ZXIobmV4dENoYXIsIG5leHRSZW1haW5pbmcsIGlzUlRMKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKFBVTkNUVUFUSU9OLnRlc3QoY2hhcikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4vKipcclxuICogRG9lcyBgY29kZWAgZm9ybSBNb2RpZmllciB3aXRoIG5leHQgb25lLlxyXG4gKlxyXG4gKiBodHRwczovL2Vtb2ppcGVkaWEub3JnL21vZGlmaWVycy9cclxuICovXG5cblxudmFyIGlzTW9kaWZpZXIgPSBjb2RlID0+IHtcbiAgcmV0dXJuIGNvZGUgPj0gMHgxZjNmYiAmJiBjb2RlIDw9IDB4MWYzZmY7XG59O1xuLyoqXHJcbiAqIElzIGBjb2RlYCBhIFZhcmlhdGlvbiBTZWxlY3Rvci5cclxuICpcclxuICogaHR0cHM6Ly9jb2RlcG9pbnRzLm5ldC92YXJpYXRpb25fc2VsZWN0b3JzXHJcbiAqL1xuXG5cbnZhciBpc1ZhcmlhdGlvblNlbGVjdG9yID0gY29kZSA9PiB7XG4gIHJldHVybiBjb2RlIDw9IDB4ZmUwZiAmJiBjb2RlID49IDB4ZmUwMDtcbn07XG4vKipcclxuICogSXMgYGNvZGVgIGEgY29kZSBwb2ludCB1c2VkIGluIGtleWNhcCBzZXF1ZW5jZS5cclxuICpcclxuICogaHR0cHM6Ly9lbW9qaXBlZGlhLm9yZy9lbW9qaS1rZXljYXAtc2VxdWVuY2UvXHJcbiAqL1xuXG5cbnZhciBpc0tleWNhcCA9IGNvZGUgPT4ge1xuICByZXR1cm4gY29kZSA+PSAweDMwICYmIGNvZGUgPD0gMHgzOSB8fCAvLyBkaWdpdHNcbiAgY29kZSA9PT0gMHgyMyB8fCAvLyBudW1iZXIgc2lnblxuICBjb2RlID09PSAweDJhO1xufTtcbi8qKlxyXG4gKiBJcyBgY29kZWAgYSBDb21iaW5pbmcgRW5jbG9zaW5nIEtleWNhcC5cclxuICpcclxuICogaHR0cHM6Ly9lbW9qaXBlZGlhLm9yZy9jb21iaW5pbmctZW5jbG9zaW5nLWtleWNhcC9cclxuICovXG5cblxudmFyIGlzQ29tYmluaW5nRW5jbG9zaW5nS2V5Y2FwID0gY29kZSA9PiB7XG4gIHJldHVybiBjb2RlID09PSAweDIwZTM7XG59O1xuLyoqXHJcbiAqIElzIGBjb2RlYCBvbmUgb2YgdGhlIEJNUCBjb2RlcyB1c2VkIGluIGVtb2ppIHNlcXVlbmNlcy5cclxuICpcclxuICogaHR0cHM6Ly9lbW9qaXBlZGlhLm9yZy9lbW9qaS16d2otc2VxdWVuY2VzL1xyXG4gKi9cblxuXG52YXIgaXNCTVBFbW9qaSA9IGNvZGUgPT4ge1xuICAvLyBUaGlzIHJlcXVpcmVzIHRpbnkgYml0IG9mIG1haW50YW5hbmNlLCBiZXR0ZXIgaWRlYXM/XG4gIC8vIEZvcnR1bmF0ZWx5IGl0IG9ubHkgaGFwcGVucyBpZiBuZXcgVW5pY29kZSBTdGFuZGFyZFxuICAvLyBpcyByZWxlYXNlZC4gRmFpbHMgZ3JhY2VmdWxseSBpZiB1cGtlZXAgbGFncyBiZWhpbmQsXG4gIC8vIHNhbWUgd2F5IFNsYXRlIHByZXZpb3VzbHkgYmVoYXZlZCB3aXRoIGFsbCBlbW9qaXMuXG4gIHJldHVybiBjb2RlID09PSAweDI3NjQgfHwgLy8gaGVhcnQgKOKdpClcbiAgY29kZSA9PT0gMHgyNjQyIHx8IC8vIG1hbGUgKOKZgilcbiAgY29kZSA9PT0gMHgyNjQwIHx8IC8vIGZlbWFsZSAo4pmAKVxuICBjb2RlID09PSAweDI2MjAgfHwgLy8gc2N1bGwgKOKYoClcbiAgY29kZSA9PT0gMHgyNjk1IHx8IC8vIG1lZGljYWwgKOKalSlcbiAgY29kZSA9PT0gMHgyNzA4IHx8IC8vIHBsYW5lICjinIjvuI8pXG4gIGNvZGUgPT09IDB4MjVlZiB8fCAvLyBsYXJnZSBjaXJjbGUgKOKXrylcbiAgY29kZSA9PT0gMHgyYjA2IHx8IC8vIHVwIGFycm93ICjirIYpXG4gIGNvZGUgPT09IDB4MjE5NyB8fCAvLyB1cC1yaWdodCBhcnJvdyAo4oaXKVxuICBjb2RlID09PSAweDI3YTEgfHwgLy8gcmlnaHQgYXJyb3cgKOKeoSlcbiAgY29kZSA9PT0gMHgyMTk4IHx8IC8vIGRvd24tcmlnaHQgYXJyb3cgKOKGmClcbiAgY29kZSA9PT0gMHgyYjA3IHx8IC8vIGRvd24gYXJyb3cgKOKshylcbiAgY29kZSA9PT0gMHgyMTk5IHx8IC8vIGRvd24tbGVmdCBhcnJvdyAo4oaZKVxuICBjb2RlID09PSAweDJiMDUgfHwgLy8gbGVmdCBhcnJvdyAo4qyFKVxuICBjb2RlID09PSAweDIxOTYgfHwgLy8gdXAtbGVmdCBhcnJvdyAo4oaWKVxuICBjb2RlID09PSAweDIxOTUgfHwgLy8gdXAtZG93biBhcnJvdyAo4oaVKVxuICBjb2RlID09PSAweDIxOTQgfHwgLy8gbGVmdC1yaWdodCBhcnJvdyAo4oaUKVxuICBjb2RlID09PSAweDIxYTkgfHwgLy8gcmlnaHQgYXJyb3cgY3VydmluZyBsZWZ0ICjihqkpXG4gIGNvZGUgPT09IDB4MjFhYSB8fCAvLyBsZWZ0IGFycm93IGN1cnZpbmcgcmlnaHQgKOKGqilcbiAgY29kZSA9PT0gMHgyOTM0IHx8IC8vIHJpZ2h0IGFycm93IGN1cnZpbmcgdXAgKOKktClcbiAgY29kZSA9PT0gMHgyOTM1IC8vIHJpZ2h0IGFycm93IGN1cnZpbmcgZG93biAo4qS1KVxuICA7XG59O1xuLyoqXHJcbiAqIElzIGBjb2RlYCBhIFJlZ2lvbmFsIEluZGljYXRvci5cclxuICpcclxuICogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUmVnaW9uYWxfaW5kaWNhdG9yX3N5bWJvbFxyXG4gKi9cblxuXG52YXIgaXNSZWdpb25hbEluZGljYXRvciA9IGNvZGUgPT4ge1xuICByZXR1cm4gY29kZSA+PSAweDFmMWU2ICYmIGNvZGUgPD0gMHgxZjFmZjtcbn07XG4vKipcclxuICogSXMgYGNvZGVgIGZyb20gYmFzaWMgbXVsdGlsaW5ndWFsIHBsYW5lLlxyXG4gKlxyXG4gKiBodHRwczovL2NvZGVwb2ludHMubmV0L2Jhc2ljX211bHRpbGluZ3VhbF9wbGFuZVxyXG4gKi9cblxuXG52YXIgaXNCTVAgPSBjb2RlID0+IHtcbiAgcmV0dXJuIGNvZGUgPD0gMHhmZmZmO1xufTtcbi8qKlxyXG4gKiBJcyBgY29kZWAgYSBaZXJvIFdpZHRoIEpvaW5lci5cclxuICpcclxuICogaHR0cHM6Ly9lbW9qaXBlZGlhLm9yZy96ZXJvLXdpZHRoLWpvaW5lci9cclxuICovXG5cblxudmFyIGlzWldKID0gY29kZSA9PiB7XG4gIHJldHVybiBjb2RlID09PSAweDIwMGQ7XG59O1xuLyoqXHJcbiAqIElzIGBjb2RlYCBhIEJsYWNrIEZsYWcuXHJcbiAqXHJcbiAqIGh0dHBzOi8vZW1vamlwZWRpYS5vcmcvYmxhY2stZmxhZy9cclxuICovXG5cblxudmFyIGlzQmxhY2tGbGFnID0gY29kZSA9PiB7XG4gIHJldHVybiBjb2RlID09PSAweDFmM2Y0O1xufTtcbi8qKlxyXG4gKiBJcyBgY29kZWAgYSBUYWcuXHJcbiAqXHJcbiAqIGh0dHBzOi8vZW1vamlwZWRpYS5vcmcvZW1vamktdGFnLXNlcXVlbmNlL1xyXG4gKi9cblxuXG52YXIgaXNUYWcgPSBjb2RlID0+IHtcbiAgcmV0dXJuIGNvZGUgPj0gMHhlMDAwMCAmJiBjb2RlIDw9IDB4ZTAwN2Y7XG59O1xuLyoqXHJcbiAqIElzIGBjb2RlYCBhIENhbmNlbCBUYWcuXHJcbiAqXHJcbiAqIGh0dHBzOi8vZW1vamlwZWRpYS5vcmcvY2FuY2VsLXRhZy9cclxuICovXG5cblxudmFyIGlzQ2FuY2VsVGFnID0gY29kZSA9PiB7XG4gIHJldHVybiBjb2RlID09PSAweGUwMDdmO1xufTtcbi8qKlxyXG4gKiBJdGVyYXRlIG9uIGNvZGVwb2ludHMgZnJvbSByaWdodCB0byBsZWZ0LlxyXG4gKi9cblxuXG52YXIgY29kZXBvaW50c0l0ZXJhdG9yUlRMID0gZnVuY3Rpb24qIGNvZGVwb2ludHNJdGVyYXRvclJUTChzdHIpIHtcbiAgdmFyIGVuZCA9IHN0ci5sZW5ndGggLSAxO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGNoYXIxID0gc3RyLmNoYXJBdChlbmQgLSBpKTtcblxuICAgIGlmIChpc0xvd1N1cnJvZ2F0ZShjaGFyMS5jaGFyQ29kZUF0KDApKSkge1xuICAgICAgdmFyIGNoYXIyID0gc3RyLmNoYXJBdChlbmQgLSBpIC0gMSk7XG5cbiAgICAgIGlmIChpc0hpZ2hTdXJyb2dhdGUoY2hhcjIuY2hhckNvZGVBdCgwKSkpIHtcbiAgICAgICAgeWllbGQgY2hhcjIgKyBjaGFyMTtcbiAgICAgICAgaSsrO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB5aWVsZCBjaGFyMTtcbiAgfVxufTtcbi8qKlxyXG4gKiBJcyBgY2hhckNvZGVgIGEgaGlnaCBzdXJyb2dhdGUuXHJcbiAqXHJcbiAqIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VuaXZlcnNhbF9DaGFyYWN0ZXJfU2V0X2NoYXJhY3RlcnMjU3Vycm9nYXRlc1xyXG4gKi9cblxudmFyIGlzSGlnaFN1cnJvZ2F0ZSA9IGNoYXJDb2RlID0+IHtcbiAgcmV0dXJuIGNoYXJDb2RlID49IDB4ZDgwMCAmJiBjaGFyQ29kZSA8PSAweGRiZmY7XG59O1xuLyoqXHJcbiAqIElzIGBjaGFyQ29kZWAgYSBsb3cgc3Vycm9nYXRlLlxyXG4gKlxyXG4gKiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Vbml2ZXJzYWxfQ2hhcmFjdGVyX1NldF9jaGFyYWN0ZXJzI1N1cnJvZ2F0ZXNcclxuICovXG5cblxudmFyIGlzTG93U3Vycm9nYXRlID0gY2hhckNvZGUgPT4ge1xuICByZXR1cm4gY2hhckNvZGUgPj0gMHhkYzAwICYmIGNoYXJDb2RlIDw9IDB4ZGZmZjtcbn07XG5cbi8qKlxyXG4gKiBTaGFyZWQgdGhlIGZ1bmN0aW9uIHdpdGggaXNFbGVtZW50VHlwZSB1dGlsaXR5XHJcbiAqL1xuXG52YXIgaXNFbGVtZW50ID0gdmFsdWUgPT4ge1xuICByZXR1cm4gaXNQbGFpbk9iamVjdCh2YWx1ZSkgJiYgTm9kZS5pc05vZGVMaXN0KHZhbHVlLmNoaWxkcmVuKSAmJiAhRWRpdG9yLmlzRWRpdG9yKHZhbHVlKTtcbn07XG5cbnZhciBFbGVtZW50ID0ge1xuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGltcGxlbWVudHMgdGhlICdBbmNlc3RvcicgaW50ZXJmYWNlLlxyXG4gICAqL1xuICBpc0FuY2VzdG9yKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzUGxhaW5PYmplY3QodmFsdWUpICYmIE5vZGUuaXNOb2RlTGlzdCh2YWx1ZS5jaGlsZHJlbik7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSB2YWx1ZSBpbXBsZW1lbnRzIHRoZSBgRWxlbWVudGAgaW50ZXJmYWNlLlxyXG4gICAqL1xuICBpc0VsZW1lbnQsXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhbiBhcnJheSBvZiBgRWxlbWVudGAgb2JqZWN0cy5cclxuICAgKi9cbiAgaXNFbGVtZW50TGlzdCh2YWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5ldmVyeSh2YWwgPT4gRWxlbWVudC5pc0VsZW1lbnQodmFsKSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBzZXQgb2YgcHJvcHMgaXMgYSBwYXJ0aWFsIG9mIEVsZW1lbnQuXHJcbiAgICovXG4gIGlzRWxlbWVudFByb3BzKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLmNoaWxkcmVuICE9PSB1bmRlZmluZWQ7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSB2YWx1ZSBpbXBsZW1lbnRzIHRoZSBgRWxlbWVudGAgaW50ZXJmYWNlIGFuZCBoYXMgZWxlbWVudEtleSB3aXRoIHNlbGVjdGVkIHZhbHVlLlxyXG4gICAqIERlZmF1bHQgaXQgY2hlY2sgdG8gYHR5cGVgIGtleSB2YWx1ZVxyXG4gICAqL1xuICBpc0VsZW1lbnRUeXBlOiBmdW5jdGlvbiBpc0VsZW1lbnRUeXBlKHZhbHVlLCBlbGVtZW50VmFsKSB7XG4gICAgdmFyIGVsZW1lbnRLZXkgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6ICd0eXBlJztcbiAgICByZXR1cm4gaXNFbGVtZW50KHZhbHVlKSAmJiB2YWx1ZVtlbGVtZW50S2V5XSA9PT0gZWxlbWVudFZhbDtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhbiBlbGVtZW50IG1hdGNoZXMgc2V0IG9mIHByb3BlcnRpZXMuXHJcbiAgICpcclxuICAgKiBOb3RlOiB0aGlzIGNoZWNrcyBjdXN0b20gcHJvcGVydGllcywgYW5kIGl0IGRvZXMgbm90IGVuc3VyZSB0aGF0IGFueVxyXG4gICAqIGNoaWxkcmVuIGFyZSBlcXVpdmFsZW50LlxyXG4gICAqL1xuICBtYXRjaGVzKGVsZW1lbnQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICBpZiAoa2V5ID09PSAnY2hpbGRyZW4nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudFtrZXldICE9PSBwcm9wc1trZXldKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG59O1xuXG52YXIgX2V4Y2x1ZGVkJDQgPSBbXCJ0ZXh0XCJdLFxuICAgIF9leGNsdWRlZDIkMyA9IFtcInRleHRcIl07XG5cbmZ1bmN0aW9uIG93bktleXMkOChvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgeyBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IH0ga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkOCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzJDgoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyQ4KE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxudmFyIElTX0VESVRPUl9DQUNIRSA9IG5ldyBXZWFrTWFwKCk7XG52YXIgRWRpdG9yID0ge1xuICAvKipcclxuICAgKiBHZXQgdGhlIGFuY2VzdG9yIGFib3ZlIGEgbG9jYXRpb24gaW4gdGhlIGRvY3VtZW50LlxyXG4gICAqL1xuICBhYm92ZShlZGl0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHtcbiAgICAgIHZvaWRzID0gZmFsc2UsXG4gICAgICBtb2RlID0gJ2xvd2VzdCcsXG4gICAgICBhdCA9IGVkaXRvci5zZWxlY3Rpb24sXG4gICAgICBtYXRjaFxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgaWYgKCFhdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwYXRoID0gRWRpdG9yLnBhdGgoZWRpdG9yLCBhdCk7XG4gICAgdmFyIHJldmVyc2UgPSBtb2RlID09PSAnbG93ZXN0JztcblxuICAgIGZvciAodmFyIFtuLCBwXSBvZiBFZGl0b3IubGV2ZWxzKGVkaXRvciwge1xuICAgICAgYXQ6IHBhdGgsXG4gICAgICB2b2lkcyxcbiAgICAgIG1hdGNoLFxuICAgICAgcmV2ZXJzZVxuICAgIH0pKSB7XG4gICAgICBpZiAoIVRleHQuaXNUZXh0KG4pICYmICFQYXRoLmVxdWFscyhwYXRoLCBwKSkge1xuICAgICAgICByZXR1cm4gW24sIHBdO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcclxuICAgKiBBZGQgYSBjdXN0b20gcHJvcGVydHkgdG8gdGhlIGxlYWYgdGV4dCBub2RlcyBpbiB0aGUgY3VycmVudCBzZWxlY3Rpb24uXHJcbiAgICpcclxuICAgKiBJZiB0aGUgc2VsZWN0aW9uIGlzIGN1cnJlbnRseSBjb2xsYXBzZWQsIHRoZSBtYXJrcyB3aWxsIGJlIGFkZGVkIHRvIHRoZVxyXG4gICAqIGBlZGl0b3IubWFya3NgIHByb3BlcnR5IGluc3RlYWQsIGFuZCBhcHBsaWVkIHdoZW4gdGV4dCBpcyBpbnNlcnRlZCBuZXh0LlxyXG4gICAqL1xuICBhZGRNYXJrKGVkaXRvciwga2V5LCB2YWx1ZSkge1xuICAgIGVkaXRvci5hZGRNYXJrKGtleSwgdmFsdWUpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgcG9pbnQgYWZ0ZXIgYSBsb2NhdGlvbi5cclxuICAgKi9cbiAgYWZ0ZXIoZWRpdG9yLCBhdCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICB2YXIgYW5jaG9yID0gRWRpdG9yLnBvaW50KGVkaXRvciwgYXQsIHtcbiAgICAgIGVkZ2U6ICdlbmQnXG4gICAgfSk7XG4gICAgdmFyIGZvY3VzID0gRWRpdG9yLmVuZChlZGl0b3IsIFtdKTtcbiAgICB2YXIgcmFuZ2UgPSB7XG4gICAgICBhbmNob3IsXG4gICAgICBmb2N1c1xuICAgIH07XG4gICAgdmFyIHtcbiAgICAgIGRpc3RhbmNlID0gMVxuICAgIH0gPSBvcHRpb25zO1xuICAgIHZhciBkID0gMDtcbiAgICB2YXIgdGFyZ2V0O1xuXG4gICAgZm9yICh2YXIgcCBvZiBFZGl0b3IucG9zaXRpb25zKGVkaXRvciwgX29iamVjdFNwcmVhZCQ4KF9vYmplY3RTcHJlYWQkOCh7fSwgb3B0aW9ucyksIHt9LCB7XG4gICAgICBhdDogcmFuZ2VcbiAgICB9KSkpIHtcbiAgICAgIGlmIChkID4gZGlzdGFuY2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChkICE9PSAwKSB7XG4gICAgICAgIHRhcmdldCA9IHA7XG4gICAgICB9XG5cbiAgICAgIGQrKztcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgcG9pbnQgYmVmb3JlIGEgbG9jYXRpb24uXHJcbiAgICovXG4gIGJlZm9yZShlZGl0b3IsIGF0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIHZhciBhbmNob3IgPSBFZGl0b3Iuc3RhcnQoZWRpdG9yLCBbXSk7XG4gICAgdmFyIGZvY3VzID0gRWRpdG9yLnBvaW50KGVkaXRvciwgYXQsIHtcbiAgICAgIGVkZ2U6ICdzdGFydCdcbiAgICB9KTtcbiAgICB2YXIgcmFuZ2UgPSB7XG4gICAgICBhbmNob3IsXG4gICAgICBmb2N1c1xuICAgIH07XG4gICAgdmFyIHtcbiAgICAgIGRpc3RhbmNlID0gMVxuICAgIH0gPSBvcHRpb25zO1xuICAgIHZhciBkID0gMDtcbiAgICB2YXIgdGFyZ2V0O1xuXG4gICAgZm9yICh2YXIgcCBvZiBFZGl0b3IucG9zaXRpb25zKGVkaXRvciwgX29iamVjdFNwcmVhZCQ4KF9vYmplY3RTcHJlYWQkOCh7fSwgb3B0aW9ucyksIHt9LCB7XG4gICAgICBhdDogcmFuZ2UsXG4gICAgICByZXZlcnNlOiB0cnVlXG4gICAgfSkpKSB7XG4gICAgICBpZiAoZCA+IGRpc3RhbmNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoZCAhPT0gMCkge1xuICAgICAgICB0YXJnZXQgPSBwO1xuICAgICAgfVxuXG4gICAgICBkKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfSxcblxuICAvKipcclxuICAgKiBEZWxldGUgY29udGVudCBpbiB0aGUgZWRpdG9yIGJhY2t3YXJkIGZyb20gdGhlIGN1cnJlbnQgc2VsZWN0aW9uLlxyXG4gICAqL1xuICBkZWxldGVCYWNrd2FyZChlZGl0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHtcbiAgICAgIHVuaXQgPSAnY2hhcmFjdGVyJ1xuICAgIH0gPSBvcHRpb25zO1xuICAgIGVkaXRvci5kZWxldGVCYWNrd2FyZCh1bml0KTtcbiAgfSxcblxuICAvKipcclxuICAgKiBEZWxldGUgY29udGVudCBpbiB0aGUgZWRpdG9yIGZvcndhcmQgZnJvbSB0aGUgY3VycmVudCBzZWxlY3Rpb24uXHJcbiAgICovXG4gIGRlbGV0ZUZvcndhcmQoZWRpdG9yKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICB1bml0ID0gJ2NoYXJhY3RlcidcbiAgICB9ID0gb3B0aW9ucztcbiAgICBlZGl0b3IuZGVsZXRlRm9yd2FyZCh1bml0KTtcbiAgfSxcblxuICAvKipcclxuICAgKiBEZWxldGUgdGhlIGNvbnRlbnQgaW4gdGhlIGN1cnJlbnQgc2VsZWN0aW9uLlxyXG4gICAqL1xuICBkZWxldGVGcmFnbWVudChlZGl0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHtcbiAgICAgIGRpcmVjdGlvbiA9ICdmb3J3YXJkJ1xuICAgIH0gPSBvcHRpb25zO1xuICAgIGVkaXRvci5kZWxldGVGcmFnbWVudChkaXJlY3Rpb24pO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgc3RhcnQgYW5kIGVuZCBwb2ludHMgb2YgYSBsb2NhdGlvbi5cclxuICAgKi9cbiAgZWRnZXMoZWRpdG9yLCBhdCkge1xuICAgIHJldHVybiBbRWRpdG9yLnN0YXJ0KGVkaXRvciwgYXQpLCBFZGl0b3IuZW5kKGVkaXRvciwgYXQpXTtcbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIGVuZCBwb2ludCBvZiBhIGxvY2F0aW9uLlxyXG4gICAqL1xuICBlbmQoZWRpdG9yLCBhdCkge1xuICAgIHJldHVybiBFZGl0b3IucG9pbnQoZWRpdG9yLCBhdCwge1xuICAgICAgZWRnZTogJ2VuZCdcbiAgICB9KTtcbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIGZpcnN0IG5vZGUgYXQgYSBsb2NhdGlvbi5cclxuICAgKi9cbiAgZmlyc3QoZWRpdG9yLCBhdCkge1xuICAgIHZhciBwYXRoID0gRWRpdG9yLnBhdGgoZWRpdG9yLCBhdCwge1xuICAgICAgZWRnZTogJ3N0YXJ0J1xuICAgIH0pO1xuICAgIHJldHVybiBFZGl0b3Iubm9kZShlZGl0b3IsIHBhdGgpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgZnJhZ21lbnQgYXQgYSBsb2NhdGlvbi5cclxuICAgKi9cbiAgZnJhZ21lbnQoZWRpdG9yLCBhdCkge1xuICAgIHZhciByYW5nZSA9IEVkaXRvci5yYW5nZShlZGl0b3IsIGF0KTtcbiAgICB2YXIgZnJhZ21lbnQgPSBOb2RlLmZyYWdtZW50KGVkaXRvciwgcmFuZ2UpO1xuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIG5vZGUgaGFzIGJsb2NrIGNoaWxkcmVuLlxyXG4gICAqL1xuICBoYXNCbG9ja3MoZWRpdG9yLCBlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuY2hpbGRyZW4uc29tZShuID0+IEVkaXRvci5pc0Jsb2NrKGVkaXRvciwgbikpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgbm9kZSBoYXMgaW5saW5lIGFuZCB0ZXh0IGNoaWxkcmVuLlxyXG4gICAqL1xuICBoYXNJbmxpbmVzKGVkaXRvciwgZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmNoaWxkcmVuLnNvbWUobiA9PiBUZXh0LmlzVGV4dChuKSB8fCBFZGl0b3IuaXNJbmxpbmUoZWRpdG9yLCBuKSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBub2RlIGhhcyB0ZXh0IGNoaWxkcmVuLlxyXG4gICAqL1xuICBoYXNUZXh0cyhlZGl0b3IsIGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5jaGlsZHJlbi5ldmVyeShuID0+IFRleHQuaXNUZXh0KG4pKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBJbnNlcnQgYSBibG9jayBicmVhayBhdCB0aGUgY3VycmVudCBzZWxlY3Rpb24uXHJcbiAgICpcclxuICAgKiBJZiB0aGUgc2VsZWN0aW9uIGlzIGN1cnJlbnRseSBleHBhbmRlZCwgaXQgd2lsbCBiZSBkZWxldGVkIGZpcnN0LlxyXG4gICAqL1xuICBpbnNlcnRCcmVhayhlZGl0b3IpIHtcbiAgICBlZGl0b3IuaW5zZXJ0QnJlYWsoKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBJbnNlcnQgYSBmcmFnbWVudCBhdCB0aGUgY3VycmVudCBzZWxlY3Rpb24uXHJcbiAgICpcclxuICAgKiBJZiB0aGUgc2VsZWN0aW9uIGlzIGN1cnJlbnRseSBleHBhbmRlZCwgaXQgd2lsbCBiZSBkZWxldGVkIGZpcnN0LlxyXG4gICAqL1xuICBpbnNlcnRGcmFnbWVudChlZGl0b3IsIGZyYWdtZW50KSB7XG4gICAgZWRpdG9yLmluc2VydEZyYWdtZW50KGZyYWdtZW50KTtcbiAgfSxcblxuICAvKipcclxuICAgKiBJbnNlcnQgYSBub2RlIGF0IHRoZSBjdXJyZW50IHNlbGVjdGlvbi5cclxuICAgKlxyXG4gICAqIElmIHRoZSBzZWxlY3Rpb24gaXMgY3VycmVudGx5IGV4cGFuZGVkLCBpdCB3aWxsIGJlIGRlbGV0ZWQgZmlyc3QuXHJcbiAgICovXG4gIGluc2VydE5vZGUoZWRpdG9yLCBub2RlKSB7XG4gICAgZWRpdG9yLmluc2VydE5vZGUobm9kZSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogSW5zZXJ0IHRleHQgYXQgdGhlIGN1cnJlbnQgc2VsZWN0aW9uLlxyXG4gICAqXHJcbiAgICogSWYgdGhlIHNlbGVjdGlvbiBpcyBjdXJyZW50bHkgZXhwYW5kZWQsIGl0IHdpbGwgYmUgZGVsZXRlZCBmaXJzdC5cclxuICAgKi9cbiAgaW5zZXJ0VGV4dChlZGl0b3IsIHRleHQpIHtcbiAgICBlZGl0b3IuaW5zZXJ0VGV4dCh0ZXh0KTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGlzIGEgYmxvY2sgYEVsZW1lbnRgIG9iamVjdC5cclxuICAgKi9cbiAgaXNCbG9jayhlZGl0b3IsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuaXNFbGVtZW50KHZhbHVlKSAmJiAhZWRpdG9yLmlzSW5saW5lKHZhbHVlKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGlzIGFuIGBFZGl0b3JgIG9iamVjdC5cclxuICAgKi9cbiAgaXNFZGl0b3IodmFsdWUpIHtcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QodmFsdWUpKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIGNhY2hlZElzRWRpdG9yID0gSVNfRURJVE9SX0NBQ0hFLmdldCh2YWx1ZSk7XG5cbiAgICBpZiAoY2FjaGVkSXNFZGl0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGNhY2hlZElzRWRpdG9yO1xuICAgIH1cblxuICAgIHZhciBpc0VkaXRvciA9IHR5cGVvZiB2YWx1ZS5hZGRNYXJrID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZS5hcHBseSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUuZGVsZXRlQmFja3dhcmQgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlLmRlbGV0ZUZvcndhcmQgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlLmRlbGV0ZUZyYWdtZW50ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZS5pbnNlcnRCcmVhayA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUuaW5zZXJ0RnJhZ21lbnQgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlLmluc2VydE5vZGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlLmluc2VydFRleHQgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlLmlzSW5saW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZS5pc1ZvaWQgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlLm5vcm1hbGl6ZU5vZGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlLm9uQ2hhbmdlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZS5yZW1vdmVNYXJrID09PSAnZnVuY3Rpb24nICYmICh2YWx1ZS5tYXJrcyA9PT0gbnVsbCB8fCBpc1BsYWluT2JqZWN0KHZhbHVlLm1hcmtzKSkgJiYgKHZhbHVlLnNlbGVjdGlvbiA9PT0gbnVsbCB8fCBSYW5nZS5pc1JhbmdlKHZhbHVlLnNlbGVjdGlvbikpICYmIE5vZGUuaXNOb2RlTGlzdCh2YWx1ZS5jaGlsZHJlbikgJiYgT3BlcmF0aW9uLmlzT3BlcmF0aW9uTGlzdCh2YWx1ZS5vcGVyYXRpb25zKTtcbiAgICBJU19FRElUT1JfQ0FDSEUuc2V0KHZhbHVlLCBpc0VkaXRvcik7XG4gICAgcmV0dXJuIGlzRWRpdG9yO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgcG9pbnQgaXMgdGhlIGVuZCBwb2ludCBvZiBhIGxvY2F0aW9uLlxyXG4gICAqL1xuICBpc0VuZChlZGl0b3IsIHBvaW50LCBhdCkge1xuICAgIHZhciBlbmQgPSBFZGl0b3IuZW5kKGVkaXRvciwgYXQpO1xuICAgIHJldHVybiBQb2ludC5lcXVhbHMocG9pbnQsIGVuZCk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBwb2ludCBpcyBhbiBlZGdlIG9mIGEgbG9jYXRpb24uXHJcbiAgICovXG4gIGlzRWRnZShlZGl0b3IsIHBvaW50LCBhdCkge1xuICAgIHJldHVybiBFZGl0b3IuaXNTdGFydChlZGl0b3IsIHBvaW50LCBhdCkgfHwgRWRpdG9yLmlzRW5kKGVkaXRvciwgcG9pbnQsIGF0KTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhbiBlbGVtZW50IGlzIGVtcHR5LCBhY2NvdW50aW5nIGZvciB2b2lkIG5vZGVzLlxyXG4gICAqL1xuICBpc0VtcHR5KGVkaXRvciwgZWxlbWVudCkge1xuICAgIHZhciB7XG4gICAgICBjaGlsZHJlblxuICAgIH0gPSBlbGVtZW50O1xuICAgIHZhciBbZmlyc3RdID0gY2hpbGRyZW47XG4gICAgcmV0dXJuIGNoaWxkcmVuLmxlbmd0aCA9PT0gMCB8fCBjaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgVGV4dC5pc1RleHQoZmlyc3QpICYmIGZpcnN0LnRleHQgPT09ICcnICYmICFlZGl0b3IuaXNWb2lkKGVsZW1lbnQpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYW4gaW5saW5lIGBFbGVtZW50YCBvYmplY3QuXHJcbiAgICovXG4gIGlzSW5saW5lKGVkaXRvciwgdmFsdWUpIHtcbiAgICByZXR1cm4gRWxlbWVudC5pc0VsZW1lbnQodmFsdWUpICYmIGVkaXRvci5pc0lubGluZSh2YWx1ZSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgdGhlIGVkaXRvciBpcyBjdXJyZW50bHkgbm9ybWFsaXppbmcgYWZ0ZXIgZWFjaCBvcGVyYXRpb24uXHJcbiAgICovXG4gIGlzTm9ybWFsaXppbmcoZWRpdG9yKSB7XG4gICAgdmFyIGlzTm9ybWFsaXppbmcgPSBOT1JNQUxJWklORy5nZXQoZWRpdG9yKTtcbiAgICByZXR1cm4gaXNOb3JtYWxpemluZyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGlzTm9ybWFsaXppbmc7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBwb2ludCBpcyB0aGUgc3RhcnQgcG9pbnQgb2YgYSBsb2NhdGlvbi5cclxuICAgKi9cbiAgaXNTdGFydChlZGl0b3IsIHBvaW50LCBhdCkge1xuICAgIC8vIFBFUkY6IElmIHRoZSBvZmZzZXQgaXNuJ3QgYDBgIHdlIGtub3cgaXQncyBub3QgdGhlIHN0YXJ0LlxuICAgIGlmIChwb2ludC5vZmZzZXQgIT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgc3RhcnQgPSBFZGl0b3Iuc3RhcnQoZWRpdG9yLCBhdCk7XG4gICAgcmV0dXJuIFBvaW50LmVxdWFscyhwb2ludCwgc3RhcnQpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYSB2b2lkIGBFbGVtZW50YCBvYmplY3QuXHJcbiAgICovXG4gIGlzVm9pZChlZGl0b3IsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuaXNFbGVtZW50KHZhbHVlKSAmJiBlZGl0b3IuaXNWb2lkKHZhbHVlKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIGxhc3Qgbm9kZSBhdCBhIGxvY2F0aW9uLlxyXG4gICAqL1xuICBsYXN0KGVkaXRvciwgYXQpIHtcbiAgICB2YXIgcGF0aCA9IEVkaXRvci5wYXRoKGVkaXRvciwgYXQsIHtcbiAgICAgIGVkZ2U6ICdlbmQnXG4gICAgfSk7XG4gICAgcmV0dXJuIEVkaXRvci5ub2RlKGVkaXRvciwgcGF0aCk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBsZWFmIHRleHQgbm9kZSBhdCBhIGxvY2F0aW9uLlxyXG4gICAqL1xuICBsZWFmKGVkaXRvciwgYXQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIHBhdGggPSBFZGl0b3IucGF0aChlZGl0b3IsIGF0LCBvcHRpb25zKTtcbiAgICB2YXIgbm9kZSA9IE5vZGUubGVhZihlZGl0b3IsIHBhdGgpO1xuICAgIHJldHVybiBbbm9kZSwgcGF0aF07XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogSXRlcmF0ZSB0aHJvdWdoIGFsbCBvZiB0aGUgbGV2ZWxzIGF0IGEgbG9jYXRpb24uXHJcbiAgICovXG4gICpsZXZlbHMoZWRpdG9yKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICBhdCA9IGVkaXRvci5zZWxlY3Rpb24sXG4gICAgICByZXZlcnNlID0gZmFsc2UsXG4gICAgICB2b2lkcyA9IGZhbHNlXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgdmFyIHtcbiAgICAgIG1hdGNoXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICBpZiAobWF0Y2ggPT0gbnVsbCkge1xuICAgICAgbWF0Y2ggPSAoKSA9PiB0cnVlO1xuICAgIH1cblxuICAgIGlmICghYXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbGV2ZWxzID0gW107XG4gICAgdmFyIHBhdGggPSBFZGl0b3IucGF0aChlZGl0b3IsIGF0KTtcblxuICAgIGZvciAodmFyIFtuLCBwXSBvZiBOb2RlLmxldmVscyhlZGl0b3IsIHBhdGgpKSB7XG4gICAgICBpZiAoIW1hdGNoKG4sIHApKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsZXZlbHMucHVzaChbbiwgcF0pO1xuXG4gICAgICBpZiAoIXZvaWRzICYmIEVkaXRvci5pc1ZvaWQoZWRpdG9yLCBuKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgbGV2ZWxzLnJldmVyc2UoKTtcbiAgICB9XG5cbiAgICB5aWVsZCogbGV2ZWxzO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgbWFya3MgdGhhdCB3b3VsZCBiZSBhZGRlZCB0byB0ZXh0IGF0IHRoZSBjdXJyZW50IHNlbGVjdGlvbi5cclxuICAgKi9cbiAgbWFya3MoZWRpdG9yKSB7XG4gICAgdmFyIHtcbiAgICAgIG1hcmtzLFxuICAgICAgc2VsZWN0aW9uXG4gICAgfSA9IGVkaXRvcjtcblxuICAgIGlmICghc2VsZWN0aW9uKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAobWFya3MpIHtcbiAgICAgIHJldHVybiBtYXJrcztcbiAgICB9XG5cbiAgICBpZiAoUmFuZ2UuaXNFeHBhbmRlZChzZWxlY3Rpb24pKSB7XG4gICAgICB2YXIgW21hdGNoXSA9IEVkaXRvci5ub2RlcyhlZGl0b3IsIHtcbiAgICAgICAgbWF0Y2g6IFRleHQuaXNUZXh0XG4gICAgICB9KTtcblxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHZhciBbX25vZGVdID0gbWF0Y2g7XG5cbiAgICAgICAgdmFyIF9yZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9ub2RlLCBfZXhjbHVkZWQkNCk7XG5cbiAgICAgICAgcmV0dXJuIF9yZXN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciB7XG4gICAgICBhbmNob3JcbiAgICB9ID0gc2VsZWN0aW9uO1xuICAgIHZhciB7XG4gICAgICBwYXRoXG4gICAgfSA9IGFuY2hvcjtcbiAgICB2YXIgW25vZGVdID0gRWRpdG9yLmxlYWYoZWRpdG9yLCBwYXRoKTtcblxuICAgIGlmIChhbmNob3Iub2Zmc2V0ID09PSAwKSB7XG4gICAgICB2YXIgcHJldiA9IEVkaXRvci5wcmV2aW91cyhlZGl0b3IsIHtcbiAgICAgICAgYXQ6IHBhdGgsXG4gICAgICAgIG1hdGNoOiBUZXh0LmlzVGV4dFxuICAgICAgfSk7XG4gICAgICB2YXIgYmxvY2sgPSBFZGl0b3IuYWJvdmUoZWRpdG9yLCB7XG4gICAgICAgIG1hdGNoOiBuID0+IEVkaXRvci5pc0Jsb2NrKGVkaXRvciwgbilcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocHJldiAmJiBibG9jaykge1xuICAgICAgICB2YXIgW3ByZXZOb2RlLCBwcmV2UGF0aF0gPSBwcmV2O1xuICAgICAgICB2YXIgWywgYmxvY2tQYXRoXSA9IGJsb2NrO1xuXG4gICAgICAgIGlmIChQYXRoLmlzQW5jZXN0b3IoYmxvY2tQYXRoLCBwcmV2UGF0aCkpIHtcbiAgICAgICAgICBub2RlID0gcHJldk5vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhub2RlLCBfZXhjbHVkZWQyJDMpO1xuXG4gICAgcmV0dXJuIHJlc3Q7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBtYXRjaGluZyBub2RlIGluIHRoZSBicmFuY2ggb2YgdGhlIGRvY3VtZW50IGFmdGVyIGEgbG9jYXRpb24uXHJcbiAgICovXG4gIG5leHQoZWRpdG9yKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICBtb2RlID0gJ2xvd2VzdCcsXG4gICAgICB2b2lkcyA9IGZhbHNlXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgdmFyIHtcbiAgICAgIG1hdGNoLFxuICAgICAgYXQgPSBlZGl0b3Iuc2VsZWN0aW9uXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICBpZiAoIWF0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBvaW50QWZ0ZXJMb2NhdGlvbiA9IEVkaXRvci5hZnRlcihlZGl0b3IsIGF0LCB7XG4gICAgICB2b2lkc1xuICAgIH0pO1xuICAgIGlmICghcG9pbnRBZnRlckxvY2F0aW9uKSByZXR1cm47XG4gICAgdmFyIFssIHRvXSA9IEVkaXRvci5sYXN0KGVkaXRvciwgW10pO1xuICAgIHZhciBzcGFuID0gW3BvaW50QWZ0ZXJMb2NhdGlvbi5wYXRoLCB0b107XG5cbiAgICBpZiAoUGF0aC5pc1BhdGgoYXQpICYmIGF0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGdldCB0aGUgbmV4dCBub2RlIGZyb20gdGhlIHJvb3Qgbm9kZSFcIik7XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoID09IG51bGwpIHtcbiAgICAgIGlmIChQYXRoLmlzUGF0aChhdCkpIHtcbiAgICAgICAgdmFyIFtwYXJlbnRdID0gRWRpdG9yLnBhcmVudChlZGl0b3IsIGF0KTtcblxuICAgICAgICBtYXRjaCA9IG4gPT4gcGFyZW50LmNoaWxkcmVuLmluY2x1ZGVzKG4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWF0Y2ggPSAoKSA9PiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBbbmV4dF0gPSBFZGl0b3Iubm9kZXMoZWRpdG9yLCB7XG4gICAgICBhdDogc3BhbixcbiAgICAgIG1hdGNoLFxuICAgICAgbW9kZSxcbiAgICAgIHZvaWRzXG4gICAgfSk7XG4gICAgcmV0dXJuIG5leHQ7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBub2RlIGF0IGEgbG9jYXRpb24uXHJcbiAgICovXG4gIG5vZGUoZWRpdG9yLCBhdCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICB2YXIgcGF0aCA9IEVkaXRvci5wYXRoKGVkaXRvciwgYXQsIG9wdGlvbnMpO1xuICAgIHZhciBub2RlID0gTm9kZS5nZXQoZWRpdG9yLCBwYXRoKTtcbiAgICByZXR1cm4gW25vZGUsIHBhdGhdO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEl0ZXJhdGUgdGhyb3VnaCBhbGwgb2YgdGhlIG5vZGVzIGluIHRoZSBFZGl0b3IuXHJcbiAgICovXG4gICpub2RlcyhlZGl0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHtcbiAgICAgIGF0ID0gZWRpdG9yLnNlbGVjdGlvbixcbiAgICAgIG1vZGUgPSAnYWxsJyxcbiAgICAgIHVuaXZlcnNhbCA9IGZhbHNlLFxuICAgICAgcmV2ZXJzZSA9IGZhbHNlLFxuICAgICAgdm9pZHMgPSBmYWxzZVxuICAgIH0gPSBvcHRpb25zO1xuICAgIHZhciB7XG4gICAgICBtYXRjaFxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgaWYgKCFtYXRjaCkge1xuICAgICAgbWF0Y2ggPSAoKSA9PiB0cnVlO1xuICAgIH1cblxuICAgIGlmICghYXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZnJvbTtcbiAgICB2YXIgdG87XG5cbiAgICBpZiAoU3Bhbi5pc1NwYW4oYXQpKSB7XG4gICAgICBmcm9tID0gYXRbMF07XG4gICAgICB0byA9IGF0WzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZmlyc3QgPSBFZGl0b3IucGF0aChlZGl0b3IsIGF0LCB7XG4gICAgICAgIGVkZ2U6ICdzdGFydCdcbiAgICAgIH0pO1xuICAgICAgdmFyIGxhc3QgPSBFZGl0b3IucGF0aChlZGl0b3IsIGF0LCB7XG4gICAgICAgIGVkZ2U6ICdlbmQnXG4gICAgICB9KTtcbiAgICAgIGZyb20gPSByZXZlcnNlID8gbGFzdCA6IGZpcnN0O1xuICAgICAgdG8gPSByZXZlcnNlID8gZmlyc3QgOiBsYXN0O1xuICAgIH1cblxuICAgIHZhciBub2RlRW50cmllcyA9IE5vZGUubm9kZXMoZWRpdG9yLCB7XG4gICAgICByZXZlcnNlLFxuICAgICAgZnJvbSxcbiAgICAgIHRvLFxuICAgICAgcGFzczogX3JlZiA9PiB7XG4gICAgICAgIHZhciBbbl0gPSBfcmVmO1xuICAgICAgICByZXR1cm4gdm9pZHMgPyBmYWxzZSA6IEVkaXRvci5pc1ZvaWQoZWRpdG9yLCBuKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgbWF0Y2hlcyA9IFtdO1xuICAgIHZhciBoaXQ7XG5cbiAgICBmb3IgKHZhciBbbm9kZSwgcGF0aF0gb2Ygbm9kZUVudHJpZXMpIHtcbiAgICAgIHZhciBpc0xvd2VyID0gaGl0ICYmIFBhdGguY29tcGFyZShwYXRoLCBoaXRbMV0pID09PSAwOyAvLyBJbiBoaWdoZXN0IG1vZGUgYW55IG5vZGUgbG93ZXIgdGhhbiB0aGUgbGFzdCBoaXQgaXMgbm90IGEgbWF0Y2guXG5cbiAgICAgIGlmIChtb2RlID09PSAnaGlnaGVzdCcgJiYgaXNMb3dlcikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFtYXRjaChub2RlLCBwYXRoKSkge1xuICAgICAgICAvLyBJZiB3ZSd2ZSBhcnJpdmVkIGF0IGEgbGVhZiB0ZXh0IG5vZGUgdGhhdCBpcyBub3QgbG93ZXIgdGhhbiB0aGUgbGFzdFxuICAgICAgICAvLyBoaXQsIHRoZW4gd2UndmUgZm91bmQgYSBicmFuY2ggdGhhdCBkb2Vzbid0IGluY2x1ZGUgYSBtYXRjaCwgd2hpY2hcbiAgICAgICAgLy8gbWVhbnMgdGhlIG1hdGNoIGlzIG5vdCB1bml2ZXJzYWwuXG4gICAgICAgIGlmICh1bml2ZXJzYWwgJiYgIWlzTG93ZXIgJiYgVGV4dC5pc1RleHQobm9kZSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gSWYgdGhlcmUncyBhIG1hdGNoIGFuZCBpdCdzIGxvd2VyIHRoYW4gdGhlIGxhc3QsIHVwZGF0ZSB0aGUgaGl0LlxuXG5cbiAgICAgIGlmIChtb2RlID09PSAnbG93ZXN0JyAmJiBpc0xvd2VyKSB7XG4gICAgICAgIGhpdCA9IFtub2RlLCBwYXRoXTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IC8vIEluIGxvd2VzdCBtb2RlIHdlIGVtaXQgdGhlIGxhc3QgaGl0LCBvbmNlIGl0J3MgZ3VhcmFudGVlZCBsb3dlc3QuXG5cblxuICAgICAgdmFyIGVtaXQgPSBtb2RlID09PSAnbG93ZXN0JyA/IGhpdCA6IFtub2RlLCBwYXRoXTtcblxuICAgICAgaWYgKGVtaXQpIHtcbiAgICAgICAgaWYgKHVuaXZlcnNhbCkge1xuICAgICAgICAgIG1hdGNoZXMucHVzaChlbWl0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5aWVsZCBlbWl0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGhpdCA9IFtub2RlLCBwYXRoXTtcbiAgICB9IC8vIFNpbmNlIGxvd2VzdCBpcyBhbHdheXMgZW1pdHRpbmcgb25lIGJlaGluZCwgY2F0Y2ggdXAgYXQgdGhlIGVuZC5cblxuXG4gICAgaWYgKG1vZGUgPT09ICdsb3dlc3QnICYmIGhpdCkge1xuICAgICAgaWYgKHVuaXZlcnNhbCkge1xuICAgICAgICBtYXRjaGVzLnB1c2goaGl0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHlpZWxkIGhpdDtcbiAgICAgIH1cbiAgICB9IC8vIFVuaXZlcnNhbCBkZWZlcnMgdG8gZW5zdXJlIHRoYXQgdGhlIG1hdGNoIG9jY3VycyBpbiBldmVyeSBicmFuY2gsIHNvIHdlXG4gICAgLy8geWllbGQgYWxsIG9mIHRoZSBtYXRjaGVzIGFmdGVyIGl0ZXJhdGluZy5cblxuXG4gICAgaWYgKHVuaXZlcnNhbCkge1xuICAgICAgeWllbGQqIG1hdGNoZXM7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxyXG4gICAqIE5vcm1hbGl6ZSBhbnkgZGlydHkgb2JqZWN0cyBpbiB0aGUgZWRpdG9yLlxyXG4gICAqL1xuICBub3JtYWxpemUoZWRpdG9yKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICBmb3JjZSA9IGZhbHNlXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICB2YXIgZ2V0RGlydHlQYXRocyA9IGVkaXRvciA9PiB7XG4gICAgICByZXR1cm4gRElSVFlfUEFUSFMuZ2V0KGVkaXRvcikgfHwgW107XG4gICAgfTtcblxuICAgIGlmICghRWRpdG9yLmlzTm9ybWFsaXppbmcoZWRpdG9yKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChmb3JjZSkge1xuICAgICAgdmFyIGFsbFBhdGhzID0gQXJyYXkuZnJvbShOb2RlLm5vZGVzKGVkaXRvciksIF9yZWYyID0+IHtcbiAgICAgICAgdmFyIFssIHBdID0gX3JlZjI7XG4gICAgICAgIHJldHVybiBwO1xuICAgICAgfSk7XG4gICAgICBESVJUWV9QQVRIUy5zZXQoZWRpdG9yLCBhbGxQYXRocyk7XG4gICAgfVxuXG4gICAgaWYgKGdldERpcnR5UGF0aHMoZWRpdG9yKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBFZGl0b3Iud2l0aG91dE5vcm1hbGl6aW5nKGVkaXRvciwgKCkgPT4ge1xuICAgICAgLypcclxuICAgICAgICBGaXggZGlydHkgZWxlbWVudHMgd2l0aCBubyBjaGlsZHJlbi5cclxuICAgICAgICBlZGl0b3Iubm9ybWFsaXplTm9kZSgpIGRvZXMgZml4IHRoaXMsIGJ1dCBzb21lIG5vcm1hbGl6YXRpb24gZml4ZXMgYWxzbyByZXF1aXJlIGl0IHRvIHdvcmsuXHJcbiAgICAgICAgUnVubmluZyBhbiBpbml0aWFsIHBhc3MgYXZvaWRzIHRoZSBjYXRjaC0yMiByYWNlIGNvbmRpdGlvbi5cclxuICAgICAgKi9cbiAgICAgIGZvciAodmFyIGRpcnR5UGF0aCBvZiBnZXREaXJ0eVBhdGhzKGVkaXRvcikpIHtcbiAgICAgICAgaWYgKE5vZGUuaGFzKGVkaXRvciwgZGlydHlQYXRoKSkge1xuICAgICAgICAgIHZhciBlbnRyeSA9IEVkaXRvci5ub2RlKGVkaXRvciwgZGlydHlQYXRoKTtcbiAgICAgICAgICB2YXIgW25vZGUsIF9dID0gZW50cnk7XG4gICAgICAgICAgLypcclxuICAgICAgICAgICAgVGhlIGRlZmF1bHQgbm9ybWFsaXplciBpbnNlcnRzIGFuIGVtcHR5IHRleHQgbm9kZSBpbiB0aGlzIHNjZW5hcmlvLCBidXQgaXQgY2FuIGJlIGN1c3RvbWlzZWQuXHJcbiAgICAgICAgICAgIFNvIHRoZXJlIGlzIHNvbWUgcmlzayBoZXJlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgIEFzIGxvbmcgYXMgdGhlIG5vcm1hbGl6ZXIgb25seSBpbnNlcnRzIGNoaWxkIG5vZGVzIGZvciB0aGlzIGNhc2UgaXQgaXMgc2FmZSB0byBkbyBpbiBhbnkgb3JkZXI7XHJcbiAgICAgICAgICAgIGJ5IGRlZmluaXRpb24gYWRkaW5nIGNoaWxkcmVuIHRvIGFuIGVtcHR5IG5vZGUgY2FuJ3QgY2F1c2Ugb3RoZXIgcGF0aHMgdG8gY2hhbmdlLlxyXG4gICAgICAgICAgKi9cblxuICAgICAgICAgIGlmIChFbGVtZW50LmlzRWxlbWVudChub2RlKSAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZWRpdG9yLm5vcm1hbGl6ZU5vZGUoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgbWF4ID0gZ2V0RGlydHlQYXRocyhlZGl0b3IpLmxlbmd0aCAqIDQyOyAvLyBIQUNLOiBiZXR0ZXIgd2F5P1xuXG4gICAgICB2YXIgbSA9IDA7XG5cbiAgICAgIHdoaWxlIChnZXREaXJ0eVBhdGhzKGVkaXRvcikubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlmIChtID4gbWF4KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiXFxuICAgICAgICAgICAgQ291bGQgbm90IGNvbXBsZXRlbHkgbm9ybWFsaXplIHRoZSBlZGl0b3IgYWZ0ZXIgXCIuY29uY2F0KG1heCwgXCIgaXRlcmF0aW9ucyEgVGhpcyBpcyB1c3VhbGx5IGR1ZSB0byBpbmNvcnJlY3Qgbm9ybWFsaXphdGlvbiBsb2dpYyB0aGF0IGxlYXZlcyBhIG5vZGUgaW4gYW4gaW52YWxpZCBzdGF0ZS5cXG4gICAgICAgICAgXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfZGlydHlQYXRoID0gZ2V0RGlydHlQYXRocyhlZGl0b3IpLnBvcCgpOyAvLyBJZiB0aGUgbm9kZSBkb2Vzbid0IGV4aXN0IGluIHRoZSB0cmVlLCBpdCBkb2VzIG5vdCBuZWVkIHRvIGJlIG5vcm1hbGl6ZWQuXG5cblxuICAgICAgICBpZiAoTm9kZS5oYXMoZWRpdG9yLCBfZGlydHlQYXRoKSkge1xuICAgICAgICAgIHZhciBfZW50cnkgPSBFZGl0b3Iubm9kZShlZGl0b3IsIF9kaXJ0eVBhdGgpO1xuXG4gICAgICAgICAgZWRpdG9yLm5vcm1hbGl6ZU5vZGUoX2VudHJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG0rKztcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIHBhcmVudCBub2RlIG9mIGEgbG9jYXRpb24uXHJcbiAgICovXG4gIHBhcmVudChlZGl0b3IsIGF0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIHZhciBwYXRoID0gRWRpdG9yLnBhdGgoZWRpdG9yLCBhdCwgb3B0aW9ucyk7XG4gICAgdmFyIHBhcmVudFBhdGggPSBQYXRoLnBhcmVudChwYXRoKTtcbiAgICB2YXIgZW50cnkgPSBFZGl0b3Iubm9kZShlZGl0b3IsIHBhcmVudFBhdGgpO1xuICAgIHJldHVybiBlbnRyeTtcbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIHBhdGggb2YgYSBsb2NhdGlvbi5cclxuICAgKi9cbiAgcGF0aChlZGl0b3IsIGF0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICBkZXB0aCxcbiAgICAgIGVkZ2VcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIGlmIChQYXRoLmlzUGF0aChhdCkpIHtcbiAgICAgIGlmIChlZGdlID09PSAnc3RhcnQnKSB7XG4gICAgICAgIHZhciBbLCBmaXJzdFBhdGhdID0gTm9kZS5maXJzdChlZGl0b3IsIGF0KTtcbiAgICAgICAgYXQgPSBmaXJzdFBhdGg7XG4gICAgICB9IGVsc2UgaWYgKGVkZ2UgPT09ICdlbmQnKSB7XG4gICAgICAgIHZhciBbLCBsYXN0UGF0aF0gPSBOb2RlLmxhc3QoZWRpdG9yLCBhdCk7XG4gICAgICAgIGF0ID0gbGFzdFBhdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFJhbmdlLmlzUmFuZ2UoYXQpKSB7XG4gICAgICBpZiAoZWRnZSA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICBhdCA9IFJhbmdlLnN0YXJ0KGF0KTtcbiAgICAgIH0gZWxzZSBpZiAoZWRnZSA9PT0gJ2VuZCcpIHtcbiAgICAgICAgYXQgPSBSYW5nZS5lbmQoYXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXQgPSBQYXRoLmNvbW1vbihhdC5hbmNob3IucGF0aCwgYXQuZm9jdXMucGF0aCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFBvaW50LmlzUG9pbnQoYXQpKSB7XG4gICAgICBhdCA9IGF0LnBhdGg7XG4gICAgfVxuXG4gICAgaWYgKGRlcHRoICE9IG51bGwpIHtcbiAgICAgIGF0ID0gYXQuc2xpY2UoMCwgZGVwdGgpO1xuICAgIH1cblxuICAgIHJldHVybiBhdDtcbiAgfSxcblxuICBoYXNQYXRoKGVkaXRvciwgcGF0aCkge1xuICAgIHJldHVybiBOb2RlLmhhcyhlZGl0b3IsIHBhdGgpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG11dGFibGUgcmVmIGZvciBhIGBQYXRoYCBvYmplY3QsIHdoaWNoIHdpbGwgc3RheSBpbiBzeW5jIGFzIG5ld1xyXG4gICAqIG9wZXJhdGlvbnMgYXJlIGFwcGxpZWQgdG8gdGhlIGVkaXRvci5cclxuICAgKi9cbiAgcGF0aFJlZihlZGl0b3IsIHBhdGgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIHtcbiAgICAgIGFmZmluaXR5ID0gJ2ZvcndhcmQnXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgdmFyIHJlZiA9IHtcbiAgICAgIGN1cnJlbnQ6IHBhdGgsXG4gICAgICBhZmZpbml0eSxcblxuICAgICAgdW5yZWYoKSB7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgY3VycmVudFxuICAgICAgICB9ID0gcmVmO1xuICAgICAgICB2YXIgcGF0aFJlZnMgPSBFZGl0b3IucGF0aFJlZnMoZWRpdG9yKTtcbiAgICAgICAgcGF0aFJlZnMuZGVsZXRlKHJlZik7XG4gICAgICAgIHJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgICB9XG5cbiAgICB9O1xuICAgIHZhciByZWZzID0gRWRpdG9yLnBhdGhSZWZzKGVkaXRvcik7XG4gICAgcmVmcy5hZGQocmVmKTtcbiAgICByZXR1cm4gcmVmO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgc2V0IG9mIGN1cnJlbnRseSB0cmFja2VkIHBhdGggcmVmcyBvZiB0aGUgZWRpdG9yLlxyXG4gICAqL1xuICBwYXRoUmVmcyhlZGl0b3IpIHtcbiAgICB2YXIgcmVmcyA9IFBBVEhfUkVGUy5nZXQoZWRpdG9yKTtcblxuICAgIGlmICghcmVmcykge1xuICAgICAgcmVmcyA9IG5ldyBTZXQoKTtcbiAgICAgIFBBVEhfUkVGUy5zZXQoZWRpdG9yLCByZWZzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmcztcbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIHN0YXJ0IG9yIGVuZCBwb2ludCBvZiBhIGxvY2F0aW9uLlxyXG4gICAqL1xuICBwb2ludChlZGl0b3IsIGF0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICBlZGdlID0gJ3N0YXJ0J1xuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgaWYgKFBhdGguaXNQYXRoKGF0KSkge1xuICAgICAgdmFyIHBhdGg7XG5cbiAgICAgIGlmIChlZGdlID09PSAnZW5kJykge1xuICAgICAgICB2YXIgWywgbGFzdFBhdGhdID0gTm9kZS5sYXN0KGVkaXRvciwgYXQpO1xuICAgICAgICBwYXRoID0gbGFzdFBhdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgWywgZmlyc3RQYXRoXSA9IE5vZGUuZmlyc3QoZWRpdG9yLCBhdCk7XG4gICAgICAgIHBhdGggPSBmaXJzdFBhdGg7XG4gICAgICB9XG5cbiAgICAgIHZhciBub2RlID0gTm9kZS5nZXQoZWRpdG9yLCBwYXRoKTtcblxuICAgICAgaWYgKCFUZXh0LmlzVGV4dChub2RlKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZ2V0IHRoZSBcIi5jb25jYXQoZWRnZSwgXCIgcG9pbnQgaW4gdGhlIG5vZGUgYXQgcGF0aCBbXCIpLmNvbmNhdChhdCwgXCJdIGJlY2F1c2UgaXQgaGFzIG5vIFwiKS5jb25jYXQoZWRnZSwgXCIgdGV4dCBub2RlLlwiKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhdGgsXG4gICAgICAgIG9mZnNldDogZWRnZSA9PT0gJ2VuZCcgPyBub2RlLnRleHQubGVuZ3RoIDogMFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoUmFuZ2UuaXNSYW5nZShhdCkpIHtcbiAgICAgIHZhciBbc3RhcnQsIGVuZF0gPSBSYW5nZS5lZGdlcyhhdCk7XG4gICAgICByZXR1cm4gZWRnZSA9PT0gJ3N0YXJ0JyA/IHN0YXJ0IDogZW5kO1xuICAgIH1cblxuICAgIHJldHVybiBhdDtcbiAgfSxcblxuICAvKipcclxuICAgKiBDcmVhdGUgYSBtdXRhYmxlIHJlZiBmb3IgYSBgUG9pbnRgIG9iamVjdCwgd2hpY2ggd2lsbCBzdGF5IGluIHN5bmMgYXMgbmV3XHJcbiAgICogb3BlcmF0aW9ucyBhcmUgYXBwbGllZCB0byB0aGUgZWRpdG9yLlxyXG4gICAqL1xuICBwb2ludFJlZihlZGl0b3IsIHBvaW50KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICBhZmZpbml0eSA9ICdmb3J3YXJkJ1xuICAgIH0gPSBvcHRpb25zO1xuICAgIHZhciByZWYgPSB7XG4gICAgICBjdXJyZW50OiBwb2ludCxcbiAgICAgIGFmZmluaXR5LFxuXG4gICAgICB1bnJlZigpIHtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBjdXJyZW50XG4gICAgICAgIH0gPSByZWY7XG4gICAgICAgIHZhciBwb2ludFJlZnMgPSBFZGl0b3IucG9pbnRSZWZzKGVkaXRvcik7XG4gICAgICAgIHBvaW50UmVmcy5kZWxldGUocmVmKTtcbiAgICAgICAgcmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICAgIH1cblxuICAgIH07XG4gICAgdmFyIHJlZnMgPSBFZGl0b3IucG9pbnRSZWZzKGVkaXRvcik7XG4gICAgcmVmcy5hZGQocmVmKTtcbiAgICByZXR1cm4gcmVmO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgc2V0IG9mIGN1cnJlbnRseSB0cmFja2VkIHBvaW50IHJlZnMgb2YgdGhlIGVkaXRvci5cclxuICAgKi9cbiAgcG9pbnRSZWZzKGVkaXRvcikge1xuICAgIHZhciByZWZzID0gUE9JTlRfUkVGUy5nZXQoZWRpdG9yKTtcblxuICAgIGlmICghcmVmcykge1xuICAgICAgcmVmcyA9IG5ldyBTZXQoKTtcbiAgICAgIFBPSU5UX1JFRlMuc2V0KGVkaXRvciwgcmVmcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZnM7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogUmV0dXJuIGFsbCB0aGUgcG9zaXRpb25zIGluIGBhdGAgcmFuZ2Ugd2hlcmUgYSBgUG9pbnRgIGNhbiBiZSBwbGFjZWQuXHJcbiAgICpcclxuICAgKiBCeSBkZWZhdWx0LCBtb3ZlcyBmb3J3YXJkIGJ5IGluZGl2aWR1YWwgb2Zmc2V0cyBhdCBhIHRpbWUsIGJ1dFxyXG4gICAqIHRoZSBgdW5pdGAgb3B0aW9uIGNhbiBiZSB1c2VkIHRvIHRvIG1vdmUgYnkgY2hhcmFjdGVyLCB3b3JkLCBsaW5lLCBvciBibG9jay5cclxuICAgKlxyXG4gICAqIFRoZSBgcmV2ZXJzZWAgb3B0aW9uIGNhbiBiZSB1c2VkIHRvIGNoYW5nZSBpdGVyYXRpb24gZGlyZWN0aW9uLlxyXG4gICAqXHJcbiAgICogTm90ZTogQnkgZGVmYXVsdCB2b2lkIG5vZGVzIGFyZSB0cmVhdGVkIGFzIGEgc2luZ2xlIHBvaW50IGFuZCBpdGVyYXRpb25cclxuICAgKiB3aWxsIG5vdCBoYXBwZW4gaW5zaWRlIHRoZWlyIGNvbnRlbnQgdW5sZXNzIHlvdSBwYXNzIGluIHRydWUgZm9yIHRoZVxyXG4gICAqIGB2b2lkc2Agb3B0aW9uLCB0aGVuIGl0ZXJhdGlvbiB3aWxsIG9jY3VyLlxyXG4gICAqL1xuICAqcG9zaXRpb25zKGVkaXRvcikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIge1xuICAgICAgYXQgPSBlZGl0b3Iuc2VsZWN0aW9uLFxuICAgICAgdW5pdCA9ICdvZmZzZXQnLFxuICAgICAgcmV2ZXJzZSA9IGZhbHNlLFxuICAgICAgdm9pZHMgPSBmYWxzZVxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgaWYgKCFhdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEFsZ29yaXRobSBub3RlczpcclxuICAgICAqXHJcbiAgICAgKiBFYWNoIHN0ZXAgYGRpc3RhbmNlYCBpcyBkeW5hbWljIGRlcGVuZGluZyBvbiB0aGUgdW5kZXJseWluZyB0ZXh0XHJcbiAgICAgKiBhbmQgdGhlIGB1bml0YCBzcGVjaWZpZWQuICBFYWNoIHN0ZXAsIGUuZy4sIGEgbGluZSBvciB3b3JkLCBtYXlcclxuICAgICAqIHNwYW4gbXVsdGlwbGUgdGV4dCBub2Rlcywgc28gd2UgaXRlcmF0ZSB0aHJvdWdoIHRoZSB0ZXh0IGJvdGggb25cclxuICAgICAqIHR3byBsZXZlbHMgaW4gc3RlcC1zeW5jOlxyXG4gICAgICpcclxuICAgICAqIGBsZWFmVGV4dGAgc3RvcmVzIHRoZSB0ZXh0IG9uIGEgdGV4dCBsZWFmIGxldmVsLCBhbmQgaXMgYWR2YW5jZWRcclxuICAgICAqIHRocm91Z2ggdXNpbmcgdGhlIGNvdW50ZXJzIGBsZWFmVGV4dE9mZnNldGAgYW5kIGBsZWFmVGV4dFJlbWFpbmluZ2AuXHJcbiAgICAgKlxyXG4gICAgICogYGJsb2NrVGV4dGAgc3RvcmVzIHRoZSB0ZXh0IG9uIGEgYmxvY2sgbGV2ZWwsIGFuZCBpcyBzaG9ydGVuZWRcclxuICAgICAqIGJ5IGBkaXN0YW5jZWAgZXZlcnkgdGltZSBpdCBpcyBhZHZhbmNlZC5cclxuICAgICAqXHJcbiAgICAgKiBXZSBvbmx5IG1haW50YWluIGEgd2luZG93IG9mIG9uZSBibG9ja1RleHQgYW5kIG9uZSBsZWFmVGV4dCBiZWNhdXNlXHJcbiAgICAgKiBhIGJsb2NrIG5vZGUgYWx3YXlzIGFwcGVhcnMgYmVmb3JlIGFsbCBvZiBpdHMgbGVhZiBub2Rlcy5cclxuICAgICAqL1xuXG5cbiAgICB2YXIgcmFuZ2UgPSBFZGl0b3IucmFuZ2UoZWRpdG9yLCBhdCk7XG4gICAgdmFyIFtzdGFydCwgZW5kXSA9IFJhbmdlLmVkZ2VzKHJhbmdlKTtcbiAgICB2YXIgZmlyc3QgPSByZXZlcnNlID8gZW5kIDogc3RhcnQ7XG4gICAgdmFyIGlzTmV3QmxvY2sgPSBmYWxzZTtcbiAgICB2YXIgYmxvY2tUZXh0ID0gJyc7XG4gICAgdmFyIGRpc3RhbmNlID0gMDsgLy8gRGlzdGFuY2UgZm9yIGxlYWZUZXh0IHRvIGNhdGNoIHVwIHRvIGJsb2NrVGV4dC5cblxuICAgIHZhciBsZWFmVGV4dFJlbWFpbmluZyA9IDA7XG4gICAgdmFyIGxlYWZUZXh0T2Zmc2V0ID0gMDsgLy8gSXRlcmF0ZSB0aHJvdWdoIGFsbCBub2RlcyBpbiByYW5nZSwgZ3JhYmJpbmcgZW50aXJlIHRleHR1YWwgY29udGVudFxuICAgIC8vIG9mIGJsb2NrIG5vZGVzIGluIGJsb2NrVGV4dCwgYW5kIHRleHQgbm9kZXMgaW4gbGVhZlRleHQuXG4gICAgLy8gRXhwbG9pdHMgdGhlIGZhY3QgdGhhdCBub2RlcyBhcmUgc2VxdWVuY2VkIGluIHN1Y2ggYSB3YXkgdGhhdCB3ZSBmaXJzdFxuICAgIC8vIGVuY291bnRlciB0aGUgYmxvY2sgbm9kZSwgdGhlbiBhbGwgb2YgaXRzIHRleHQgbm9kZXMsIHNvIHdoZW4gaXRlcmF0aW5nXG4gICAgLy8gdGhyb3VnaCB0aGUgYmxvY2tUZXh0IGFuZCBsZWFmVGV4dCB3ZSBqdXN0IG5lZWQgdG8gcmVtZW1iZXIgYSB3aW5kb3cgb2ZcbiAgICAvLyBvbmUgYmxvY2sgbm9kZSBhbmQgbGVhZiBub2RlLCByZXNwZWN0aXZlbHkuXG5cbiAgICBmb3IgKHZhciBbbm9kZSwgcGF0aF0gb2YgRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgYXQsXG4gICAgICByZXZlcnNlLFxuICAgICAgdm9pZHNcbiAgICB9KSkge1xuICAgICAgLypcclxuICAgICAgICogRUxFTUVOVCBOT0RFIC0gWWllbGQgcG9zaXRpb24ocykgZm9yIHZvaWRzLCBjb2xsZWN0IGJsb2NrVGV4dCBmb3IgYmxvY2tzXHJcbiAgICAgICAqL1xuICAgICAgaWYgKEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpKSB7XG4gICAgICAgIC8vIFZvaWQgbm9kZXMgYXJlIGEgc3BlY2lhbCBjYXNlLCBzbyBieSBkZWZhdWx0IHdlIHdpbGwgYWx3YXlzXG4gICAgICAgIC8vIHlpZWxkIHRoZWlyIGZpcnN0IHBvaW50LiBJZiB0aGUgYHZvaWRzYCBvcHRpb24gaXMgc2V0IHRvIHRydWUsXG4gICAgICAgIC8vIHRoZW4gd2Ugd2lsbCBpdGVyYXRlIG92ZXIgdGhlaXIgY29udGVudC5cbiAgICAgICAgaWYgKCF2b2lkcyAmJiBlZGl0b3IuaXNWb2lkKG5vZGUpKSB7XG4gICAgICAgICAgeWllbGQgRWRpdG9yLnN0YXJ0KGVkaXRvciwgcGF0aCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gLy8gSW5saW5lIGVsZW1lbnQgbm9kZXMgYXJlIGlnbm9yZWQgYXMgdGhleSBkb24ndCB0aGVtc2VsdmVzXG4gICAgICAgIC8vIGNvbnRyaWJ1dGUgdG8gYGJsb2NrVGV4dGAgb3IgYGxlYWZUZXh0YCAtIHRoZWlyIHBhcmVudCBhbmRcbiAgICAgICAgLy8gY2hpbGRyZW4gZG8uXG5cblxuICAgICAgICBpZiAoZWRpdG9yLmlzSW5saW5lKG5vZGUpKSBjb250aW51ZTsgLy8gQmxvY2sgZWxlbWVudCBub2RlIC0gc2V0IGBibG9ja1RleHRgIHRvIGl0cyB0ZXh0IGNvbnRlbnQuXG5cbiAgICAgICAgaWYgKEVkaXRvci5oYXNJbmxpbmVzKGVkaXRvciwgbm9kZSkpIHtcbiAgICAgICAgICAvLyBXZSBhbHdheXMgZXhoYXVzdCBibG9jayBub2RlcyBiZWZvcmUgZW5jb3VudGVyaW5nIGEgbmV3IG9uZTpcbiAgICAgICAgICAvLyAgIGNvbnNvbGUuYXNzZXJ0KGJsb2NrVGV4dCA9PT0gJycsXG4gICAgICAgICAgLy8gICAgIGBibG9ja1RleHQ9JyR7YmxvY2tUZXh0fScgLSBgK1xuICAgICAgICAgIC8vICAgICBgbm90IGV4aGF1c3RlZCBiZWZvcmUgbmV3IGJsb2NrIG5vZGVgLCBwYXRoKVxuICAgICAgICAgIC8vIEVuc3VyZSByYW5nZSBjb25zaWRlcmVkIGlzIGNhcHBlZCB0byBgcmFuZ2VgLCBpbiB0aGVcbiAgICAgICAgICAvLyBzdGFydC9lbmQgZWRnZSBjYXNlcyB3aGVyZSBibG9jayBleHRlbmRzIGJleW9uZCByYW5nZS5cbiAgICAgICAgICAvLyBFcXVpdmFsZW50IHRvIHRoaXMsIGJ1dCBwcmVzdW1hYmx5IG1vcmUgcGVyZm9ybWFudDpcbiAgICAgICAgICAvLyAgIGJsb2NrUmFuZ2UgPSBFZGl0b3IucmFuZ2UoZWRpdG9yLCAuLi5FZGl0b3IuZWRnZXMoZWRpdG9yLCBwYXRoKSlcbiAgICAgICAgICAvLyAgIGJsb2NrUmFuZ2UgPSBSYW5nZS5pbnRlcnNlY3Rpb24ocmFuZ2UsIGJsb2NrUmFuZ2UpIC8vIGludGVyc2VjdFxuICAgICAgICAgIC8vICAgYmxvY2tUZXh0ID0gRWRpdG9yLnN0cmluZyhlZGl0b3IsIGJsb2NrUmFuZ2UsIHsgdm9pZHMgfSlcbiAgICAgICAgICB2YXIgZSA9IFBhdGguaXNBbmNlc3RvcihwYXRoLCBlbmQucGF0aCkgPyBlbmQgOiBFZGl0b3IuZW5kKGVkaXRvciwgcGF0aCk7XG4gICAgICAgICAgdmFyIHMgPSBQYXRoLmlzQW5jZXN0b3IocGF0aCwgc3RhcnQucGF0aCkgPyBzdGFydCA6IEVkaXRvci5zdGFydChlZGl0b3IsIHBhdGgpO1xuICAgICAgICAgIGJsb2NrVGV4dCA9IEVkaXRvci5zdHJpbmcoZWRpdG9yLCB7XG4gICAgICAgICAgICBhbmNob3I6IHMsXG4gICAgICAgICAgICBmb2N1czogZVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHZvaWRzXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaXNOZXdCbG9jayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8qXHJcbiAgICAgICAqIFRFWFQgTEVBRiBOT0RFIC0gSXRlcmF0ZSB0aHJvdWdoIHRleHQgY29udGVudCwgeWllbGRpbmdcclxuICAgICAgICogcG9zaXRpb25zIGV2ZXJ5IGBkaXN0YW5jZWAgb2Zmc2V0IGFjY29yZGluZyB0byBgdW5pdGAuXHJcbiAgICAgICAqL1xuXG5cbiAgICAgIGlmIChUZXh0LmlzVGV4dChub2RlKSkge1xuICAgICAgICB2YXIgaXNGaXJzdCA9IFBhdGguZXF1YWxzKHBhdGgsIGZpcnN0LnBhdGgpOyAvLyBQcm9vZiB0aGF0IHdlIGFsd2F5cyBleGhhdXN0IHRleHQgbm9kZXMgYmVmb3JlIGVuY291bnRlcmluZyBhIG5ldyBvbmU6XG4gICAgICAgIC8vICAgY29uc29sZS5hc3NlcnQobGVhZlRleHRSZW1haW5pbmcgPD0gMCxcbiAgICAgICAgLy8gICAgIGBsZWFmVGV4dFJlbWFpbmluZz0ke2xlYWZUZXh0UmVtYWluaW5nfSAtIGArXG4gICAgICAgIC8vICAgICBgbm90IGV4aGF1c3RlZCBiZWZvcmUgbmV3IGxlYWYgdGV4dCBub2RlYCwgcGF0aClcbiAgICAgICAgLy8gUmVzZXQgYGxlYWZUZXh0YCBjb3VudGVycyBmb3IgbmV3IHRleHQgbm9kZS5cblxuICAgICAgICBpZiAoaXNGaXJzdCkge1xuICAgICAgICAgIGxlYWZUZXh0UmVtYWluaW5nID0gcmV2ZXJzZSA/IGZpcnN0Lm9mZnNldCA6IG5vZGUudGV4dC5sZW5ndGggLSBmaXJzdC5vZmZzZXQ7XG4gICAgICAgICAgbGVhZlRleHRPZmZzZXQgPSBmaXJzdC5vZmZzZXQ7IC8vIFdvcmtzIGZvciByZXZlcnNlIHRvby5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZWFmVGV4dFJlbWFpbmluZyA9IG5vZGUudGV4dC5sZW5ndGg7XG4gICAgICAgICAgbGVhZlRleHRPZmZzZXQgPSByZXZlcnNlID8gbGVhZlRleHRSZW1haW5pbmcgOiAwO1xuICAgICAgICB9IC8vIFlpZWxkIHBvc2l0aW9uIGF0IHRoZSBzdGFydCBvZiBub2RlIChwb3RlbnRpYWxseSkuXG5cblxuICAgICAgICBpZiAoaXNGaXJzdCB8fCBpc05ld0Jsb2NrIHx8IHVuaXQgPT09ICdvZmZzZXQnKSB7XG4gICAgICAgICAgeWllbGQge1xuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIG9mZnNldDogbGVhZlRleHRPZmZzZXRcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlzTmV3QmxvY2sgPSBmYWxzZTtcbiAgICAgICAgfSAvLyBZaWVsZCBwb3NpdGlvbnMgZXZlcnkgKGR5bmFtaWNhbGx5IGNhbGN1bGF0ZWQpIGBkaXN0YW5jZWAgb2Zmc2V0LlxuXG5cbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAvLyBJZiBgbGVhZlRleHRgIGhhcyBjYXVnaHQgdXAgd2l0aCBgYmxvY2tUZXh0YCAoZGlzdGFuY2U9MCksXG4gICAgICAgICAgLy8gYW5kIGlmIGJsb2NrVGV4dCBpcyBleGhhdXN0ZWQsIGJyZWFrIHRvIGdldCBhbm90aGVyIGJsb2NrIG5vZGUsXG4gICAgICAgICAgLy8gb3RoZXJ3aXNlIGFkdmFuY2UgYmxvY2tUZXh0IGZvcndhcmQgYnkgdGhlIG5ldyBgZGlzdGFuY2VgLlxuICAgICAgICAgIGlmIChkaXN0YW5jZSA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKGJsb2NrVGV4dCA9PT0gJycpIGJyZWFrO1xuICAgICAgICAgICAgZGlzdGFuY2UgPSBjYWxjRGlzdGFuY2UoYmxvY2tUZXh0LCB1bml0LCByZXZlcnNlKTsgLy8gU3BsaXQgdGhlIHN0cmluZyBhdCB0aGUgcHJldmlvdXNseSBmb3VuZCBkaXN0YW5jZSBhbmQgdXNlIHRoZVxuICAgICAgICAgICAgLy8gcmVtYWluaW5nIHN0cmluZyBmb3IgdGhlIG5leHQgaXRlcmF0aW9uLlxuXG4gICAgICAgICAgICBibG9ja1RleHQgPSBzcGxpdEJ5Q2hhcmFjdGVyRGlzdGFuY2UoYmxvY2tUZXh0LCBkaXN0YW5jZSwgcmV2ZXJzZSlbMV07XG4gICAgICAgICAgfSAvLyBBZHZhbmNlIGBsZWFmVGV4dGAgYnkgdGhlIGN1cnJlbnQgYGRpc3RhbmNlYC5cblxuXG4gICAgICAgICAgbGVhZlRleHRPZmZzZXQgPSByZXZlcnNlID8gbGVhZlRleHRPZmZzZXQgLSBkaXN0YW5jZSA6IGxlYWZUZXh0T2Zmc2V0ICsgZGlzdGFuY2U7XG4gICAgICAgICAgbGVhZlRleHRSZW1haW5pbmcgPSBsZWFmVGV4dFJlbWFpbmluZyAtIGRpc3RhbmNlOyAvLyBJZiBgbGVhZlRleHRgIGlzIGV4aGF1c3RlZCwgYnJlYWsgdG8gZ2V0IGEgbmV3IGxlYWYgbm9kZVxuICAgICAgICAgIC8vIGFuZCBzZXQgZGlzdGFuY2UgdG8gdGhlIG92ZXJmbG93IGFtb3VudCwgc28gd2UnbGwgKG1heWJlKVxuICAgICAgICAgIC8vIGNhdGNoIHVwIHRvIGJsb2NrVGV4dCBpbiB0aGUgbmV4dCBsZWFmIHRleHQgbm9kZS5cblxuICAgICAgICAgIGlmIChsZWFmVGV4dFJlbWFpbmluZyA8IDApIHtcbiAgICAgICAgICAgIGRpc3RhbmNlID0gLWxlYWZUZXh0UmVtYWluaW5nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfSAvLyBTdWNjZXNzZnVsbHkgd2Fsa2VkIGBkaXN0YW5jZWAgb2Zmc2V0cyB0aHJvdWdoIGBsZWFmVGV4dGBcbiAgICAgICAgICAvLyB0byBjYXRjaCB1cCB3aXRoIGBibG9ja1RleHRgLCBzbyB3ZSBjYW4gcmVzZXQgYGRpc3RhbmNlYFxuICAgICAgICAgIC8vIGFuZCB5aWVsZCB0aGlzIHBvc2l0aW9uIGluIHRoaXMgbm9kZS5cblxuXG4gICAgICAgICAgZGlzdGFuY2UgPSAwO1xuICAgICAgICAgIHlpZWxkIHtcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBvZmZzZXQ6IGxlYWZUZXh0T2Zmc2V0XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gUHJvb2YgdGhhdCB1cG9uIGNvbXBsZXRpb24sIHdlJ3ZlIGV4YWh1c3RlZCBib3RoIGxlYWYgYW5kIGJsb2NrIHRleHQ6XG4gICAgLy8gICBjb25zb2xlLmFzc2VydChsZWFmVGV4dFJlbWFpbmluZyA8PSAwLCBcImxlYWZUZXh0IHdhc24ndCBleGhhdXN0ZWRcIilcbiAgICAvLyAgIGNvbnNvbGUuYXNzZXJ0KGJsb2NrVGV4dCA9PT0gJycsIFwiYmxvY2tUZXh0IHdhc24ndCBleGhhdXN0ZWRcIilcbiAgICAvLyBIZWxwZXI6XG4gICAgLy8gUmV0dXJuIHRoZSBkaXN0YW5jZSBpbiBvZmZzZXRzIGZvciBhIHN0ZXAgb2Ygc2l6ZSBgdW5pdGAgb24gZ2l2ZW4gc3RyaW5nLlxuXG5cbiAgICBmdW5jdGlvbiBjYWxjRGlzdGFuY2UodGV4dCwgdW5pdCwgcmV2ZXJzZSkge1xuICAgICAgaWYgKHVuaXQgPT09ICdjaGFyYWN0ZXInKSB7XG4gICAgICAgIHJldHVybiBnZXRDaGFyYWN0ZXJEaXN0YW5jZSh0ZXh0LCByZXZlcnNlKTtcbiAgICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ3dvcmQnKSB7XG4gICAgICAgIHJldHVybiBnZXRXb3JkRGlzdGFuY2UodGV4dCwgcmV2ZXJzZSk7XG4gICAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdsaW5lJyB8fCB1bml0ID09PSAnYmxvY2snKSB7XG4gICAgICAgIHJldHVybiB0ZXh0Lmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgbWF0Y2hpbmcgbm9kZSBpbiB0aGUgYnJhbmNoIG9mIHRoZSBkb2N1bWVudCBiZWZvcmUgYSBsb2NhdGlvbi5cclxuICAgKi9cbiAgcHJldmlvdXMoZWRpdG9yKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICBtb2RlID0gJ2xvd2VzdCcsXG4gICAgICB2b2lkcyA9IGZhbHNlXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgdmFyIHtcbiAgICAgIG1hdGNoLFxuICAgICAgYXQgPSBlZGl0b3Iuc2VsZWN0aW9uXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICBpZiAoIWF0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBvaW50QmVmb3JlTG9jYXRpb24gPSBFZGl0b3IuYmVmb3JlKGVkaXRvciwgYXQsIHtcbiAgICAgIHZvaWRzXG4gICAgfSk7XG5cbiAgICBpZiAoIXBvaW50QmVmb3JlTG9jYXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgWywgdG9dID0gRWRpdG9yLmZpcnN0KGVkaXRvciwgW10pOyAvLyBUaGUgc2VhcmNoIGxvY2F0aW9uIGlzIGZyb20gdGhlIHN0YXJ0IG9mIHRoZSBkb2N1bWVudCB0byB0aGUgcGF0aCBvZlxuICAgIC8vIHRoZSBwb2ludCBiZWZvcmUgdGhlIGxvY2F0aW9uIHBhc3NlZCBpblxuXG4gICAgdmFyIHNwYW4gPSBbcG9pbnRCZWZvcmVMb2NhdGlvbi5wYXRoLCB0b107XG5cbiAgICBpZiAoUGF0aC5pc1BhdGgoYXQpICYmIGF0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGdldCB0aGUgcHJldmlvdXMgbm9kZSBmcm9tIHRoZSByb290IG5vZGUhXCIpO1xuICAgIH1cblxuICAgIGlmIChtYXRjaCA9PSBudWxsKSB7XG4gICAgICBpZiAoUGF0aC5pc1BhdGgoYXQpKSB7XG4gICAgICAgIHZhciBbcGFyZW50XSA9IEVkaXRvci5wYXJlbnQoZWRpdG9yLCBhdCk7XG5cbiAgICAgICAgbWF0Y2ggPSBuID0+IHBhcmVudC5jaGlsZHJlbi5pbmNsdWRlcyhuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1hdGNoID0gKCkgPT4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgW3ByZXZpb3VzXSA9IEVkaXRvci5ub2RlcyhlZGl0b3IsIHtcbiAgICAgIHJldmVyc2U6IHRydWUsXG4gICAgICBhdDogc3BhbixcbiAgICAgIG1hdGNoLFxuICAgICAgbW9kZSxcbiAgICAgIHZvaWRzXG4gICAgfSk7XG4gICAgcmV0dXJuIHByZXZpb3VzO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCBhIHJhbmdlIG9mIGEgbG9jYXRpb24uXHJcbiAgICovXG4gIHJhbmdlKGVkaXRvciwgYXQsIHRvKSB7XG4gICAgaWYgKFJhbmdlLmlzUmFuZ2UoYXQpICYmICF0bykge1xuICAgICAgcmV0dXJuIGF0O1xuICAgIH1cblxuICAgIHZhciBzdGFydCA9IEVkaXRvci5zdGFydChlZGl0b3IsIGF0KTtcbiAgICB2YXIgZW5kID0gRWRpdG9yLmVuZChlZGl0b3IsIHRvIHx8IGF0KTtcbiAgICByZXR1cm4ge1xuICAgICAgYW5jaG9yOiBzdGFydCxcbiAgICAgIGZvY3VzOiBlbmRcbiAgICB9O1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG11dGFibGUgcmVmIGZvciBhIGBSYW5nZWAgb2JqZWN0LCB3aGljaCB3aWxsIHN0YXkgaW4gc3luYyBhcyBuZXdcclxuICAgKiBvcGVyYXRpb25zIGFyZSBhcHBsaWVkIHRvIHRoZSBlZGl0b3IuXHJcbiAgICovXG4gIHJhbmdlUmVmKGVkaXRvciwgcmFuZ2UpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIHtcbiAgICAgIGFmZmluaXR5ID0gJ2ZvcndhcmQnXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgdmFyIHJlZiA9IHtcbiAgICAgIGN1cnJlbnQ6IHJhbmdlLFxuICAgICAgYWZmaW5pdHksXG5cbiAgICAgIHVucmVmKCkge1xuICAgICAgICB2YXIge1xuICAgICAgICAgIGN1cnJlbnRcbiAgICAgICAgfSA9IHJlZjtcbiAgICAgICAgdmFyIHJhbmdlUmVmcyA9IEVkaXRvci5yYW5nZVJlZnMoZWRpdG9yKTtcbiAgICAgICAgcmFuZ2VSZWZzLmRlbGV0ZShyZWYpO1xuICAgICAgICByZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgICAgfVxuXG4gICAgfTtcbiAgICB2YXIgcmVmcyA9IEVkaXRvci5yYW5nZVJlZnMoZWRpdG9yKTtcbiAgICByZWZzLmFkZChyZWYpO1xuICAgIHJldHVybiByZWY7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBzZXQgb2YgY3VycmVudGx5IHRyYWNrZWQgcmFuZ2UgcmVmcyBvZiB0aGUgZWRpdG9yLlxyXG4gICAqL1xuICByYW5nZVJlZnMoZWRpdG9yKSB7XG4gICAgdmFyIHJlZnMgPSBSQU5HRV9SRUZTLmdldChlZGl0b3IpO1xuXG4gICAgaWYgKCFyZWZzKSB7XG4gICAgICByZWZzID0gbmV3IFNldCgpO1xuICAgICAgUkFOR0VfUkVGUy5zZXQoZWRpdG9yLCByZWZzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmcztcbiAgfSxcblxuICAvKipcclxuICAgKiBSZW1vdmUgYSBjdXN0b20gcHJvcGVydHkgZnJvbSBhbGwgb2YgdGhlIGxlYWYgdGV4dCBub2RlcyBpbiB0aGUgY3VycmVudFxyXG4gICAqIHNlbGVjdGlvbi5cclxuICAgKlxyXG4gICAqIElmIHRoZSBzZWxlY3Rpb24gaXMgY3VycmVudGx5IGNvbGxhcHNlZCwgdGhlIHJlbW92YWwgd2lsbCBiZSBzdG9yZWQgb25cclxuICAgKiBgZWRpdG9yLm1hcmtzYCBhbmQgYXBwbGllZCB0byB0aGUgdGV4dCBpbnNlcnRlZCBuZXh0LlxyXG4gICAqL1xuICByZW1vdmVNYXJrKGVkaXRvciwga2V5KSB7XG4gICAgZWRpdG9yLnJlbW92ZU1hcmsoa2V5KTtcbiAgfSxcblxuICAvKipcclxuICAgKiBNYW51YWxseSBzZXQgaWYgdGhlIGVkaXRvciBzaG91bGQgY3VycmVudGx5IGJlIG5vcm1hbGl6aW5nLlxyXG4gICAqXHJcbiAgICogTm90ZTogVXNpbmcgdGhpcyBpbmNvcnJlY3RseSBjYW4gbGVhdmUgdGhlIGVkaXRvciBpbiBhbiBpbnZhbGlkIHN0YXRlLlxyXG4gICAqXHJcbiAgICovXG4gIHNldE5vcm1hbGl6aW5nKGVkaXRvciwgaXNOb3JtYWxpemluZykge1xuICAgIE5PUk1BTElaSU5HLnNldChlZGl0b3IsIGlzTm9ybWFsaXppbmcpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgc3RhcnQgcG9pbnQgb2YgYSBsb2NhdGlvbi5cclxuICAgKi9cbiAgc3RhcnQoZWRpdG9yLCBhdCkge1xuICAgIHJldHVybiBFZGl0b3IucG9pbnQoZWRpdG9yLCBhdCwge1xuICAgICAgZWRnZTogJ3N0YXJ0J1xuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgdGV4dCBzdHJpbmcgY29udGVudCBvZiBhIGxvY2F0aW9uLlxyXG4gICAqXHJcbiAgICogTm90ZTogYnkgZGVmYXVsdCB0aGUgdGV4dCBvZiB2b2lkIG5vZGVzIGlzIGNvbnNpZGVyZWQgdG8gYmUgYW4gZW1wdHlcclxuICAgKiBzdHJpbmcsIHJlZ2FyZGxlc3Mgb2YgY29udGVudCwgdW5sZXNzIHlvdSBwYXNzIGluIHRydWUgZm9yIHRoZSB2b2lkcyBvcHRpb25cclxuICAgKi9cbiAgc3RyaW5nKGVkaXRvciwgYXQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIHtcbiAgICAgIHZvaWRzID0gZmFsc2VcbiAgICB9ID0gb3B0aW9ucztcbiAgICB2YXIgcmFuZ2UgPSBFZGl0b3IucmFuZ2UoZWRpdG9yLCBhdCk7XG4gICAgdmFyIFtzdGFydCwgZW5kXSA9IFJhbmdlLmVkZ2VzKHJhbmdlKTtcbiAgICB2YXIgdGV4dCA9ICcnO1xuXG4gICAgZm9yICh2YXIgW25vZGUsIHBhdGhdIG9mIEVkaXRvci5ub2RlcyhlZGl0b3IsIHtcbiAgICAgIGF0OiByYW5nZSxcbiAgICAgIG1hdGNoOiBUZXh0LmlzVGV4dCxcbiAgICAgIHZvaWRzXG4gICAgfSkpIHtcbiAgICAgIHZhciB0ID0gbm9kZS50ZXh0O1xuXG4gICAgICBpZiAoUGF0aC5lcXVhbHMocGF0aCwgZW5kLnBhdGgpKSB7XG4gICAgICAgIHQgPSB0LnNsaWNlKDAsIGVuZC5vZmZzZXQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoUGF0aC5lcXVhbHMocGF0aCwgc3RhcnQucGF0aCkpIHtcbiAgICAgICAgdCA9IHQuc2xpY2Uoc3RhcnQub2Zmc2V0KTtcbiAgICAgIH1cblxuICAgICAgdGV4dCArPSB0O1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0O1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENvbnZlcnQgYSByYW5nZSBpbnRvIGEgbm9uLWhhbmdpbmcgb25lLlxyXG4gICAqL1xuICB1bmhhbmdSYW5nZShlZGl0b3IsIHJhbmdlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICB2b2lkcyA9IGZhbHNlXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgdmFyIFtzdGFydCwgZW5kXSA9IFJhbmdlLmVkZ2VzKHJhbmdlKTsgLy8gUEVSRjogZXhpdCBlYXJseSBpZiB3ZSBjYW4gZ3VhcmFudGVlIHRoYXQgdGhlIHJhbmdlIGlzbid0IGhhbmdpbmcuXG5cbiAgICBpZiAoc3RhcnQub2Zmc2V0ICE9PSAwIHx8IGVuZC5vZmZzZXQgIT09IDAgfHwgUmFuZ2UuaXNDb2xsYXBzZWQocmFuZ2UpKSB7XG4gICAgICByZXR1cm4gcmFuZ2U7XG4gICAgfVxuXG4gICAgdmFyIGVuZEJsb2NrID0gRWRpdG9yLmFib3ZlKGVkaXRvciwge1xuICAgICAgYXQ6IGVuZCxcbiAgICAgIG1hdGNoOiBuID0+IEVkaXRvci5pc0Jsb2NrKGVkaXRvciwgbilcbiAgICB9KTtcbiAgICB2YXIgYmxvY2tQYXRoID0gZW5kQmxvY2sgPyBlbmRCbG9ja1sxXSA6IFtdO1xuICAgIHZhciBmaXJzdCA9IEVkaXRvci5zdGFydChlZGl0b3IsIFtdKTtcbiAgICB2YXIgYmVmb3JlID0ge1xuICAgICAgYW5jaG9yOiBmaXJzdCxcbiAgICAgIGZvY3VzOiBlbmRcbiAgICB9O1xuICAgIHZhciBza2lwID0gdHJ1ZTtcblxuICAgIGZvciAodmFyIFtub2RlLCBwYXRoXSBvZiBFZGl0b3Iubm9kZXMoZWRpdG9yLCB7XG4gICAgICBhdDogYmVmb3JlLFxuICAgICAgbWF0Y2g6IFRleHQuaXNUZXh0LFxuICAgICAgcmV2ZXJzZTogdHJ1ZSxcbiAgICAgIHZvaWRzXG4gICAgfSkpIHtcbiAgICAgIGlmIChza2lwKSB7XG4gICAgICAgIHNraXAgPSBmYWxzZTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLnRleHQgIT09ICcnIHx8IFBhdGguaXNCZWZvcmUocGF0aCwgYmxvY2tQYXRoKSkge1xuICAgICAgICBlbmQgPSB7XG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICBvZmZzZXQ6IG5vZGUudGV4dC5sZW5ndGhcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFuY2hvcjogc3RhcnQsXG4gICAgICBmb2N1czogZW5kXG4gICAgfTtcbiAgfSxcblxuICAvKipcclxuICAgKiBNYXRjaCBhIHZvaWQgbm9kZSBpbiB0aGUgY3VycmVudCBicmFuY2ggb2YgdGhlIGVkaXRvci5cclxuICAgKi9cbiAgdm9pZChlZGl0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgcmV0dXJuIEVkaXRvci5hYm92ZShlZGl0b3IsIF9vYmplY3RTcHJlYWQkOChfb2JqZWN0U3ByZWFkJDgoe30sIG9wdGlvbnMpLCB7fSwge1xuICAgICAgbWF0Y2g6IG4gPT4gRWRpdG9yLmlzVm9pZChlZGl0b3IsIG4pXG4gICAgfSkpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENhbGwgYSBmdW5jdGlvbiwgZGVmZXJyaW5nIG5vcm1hbGl6YXRpb24gdW50aWwgYWZ0ZXIgaXQgY29tcGxldGVzLlxyXG4gICAqL1xuICB3aXRob3V0Tm9ybWFsaXppbmcoZWRpdG9yLCBmbikge1xuICAgIHZhciB2YWx1ZSA9IEVkaXRvci5pc05vcm1hbGl6aW5nKGVkaXRvcik7XG4gICAgRWRpdG9yLnNldE5vcm1hbGl6aW5nKGVkaXRvciwgZmFsc2UpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZuKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIEVkaXRvci5zZXROb3JtYWxpemluZyhlZGl0b3IsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBFZGl0b3Iubm9ybWFsaXplKGVkaXRvcik7XG4gIH1cblxufTtcblxudmFyIExvY2F0aW9uID0ge1xuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGltcGxlbWVudHMgdGhlIGBMb2NhdGlvbmAgaW50ZXJmYWNlLlxyXG4gICAqL1xuICBpc0xvY2F0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIFBhdGguaXNQYXRoKHZhbHVlKSB8fCBQb2ludC5pc1BvaW50KHZhbHVlKSB8fCBSYW5nZS5pc1JhbmdlKHZhbHVlKTtcbiAgfVxuXG59O1xudmFyIFNwYW4gPSB7XG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaW1wbGVtZW50cyB0aGUgYFNwYW5gIGludGVyZmFjZS5cclxuICAgKi9cbiAgaXNTcGFuKHZhbHVlKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMiAmJiB2YWx1ZS5ldmVyeShQYXRoLmlzUGF0aCk7XG4gIH1cblxufTtcblxudmFyIF9leGNsdWRlZCQzID0gW1wiY2hpbGRyZW5cIl0sXG4gICAgX2V4Y2x1ZGVkMiQyID0gW1widGV4dFwiXTtcbnZhciBJU19OT0RFX0xJU1RfQ0FDSEUgPSBuZXcgV2Vha01hcCgpO1xudmFyIE5vZGUgPSB7XG4gIC8qKlxyXG4gICAqIEdldCB0aGUgbm9kZSBhdCBhIHNwZWNpZmljIHBhdGgsIGFzc2VydGluZyB0aGF0IGl0J3MgYW4gYW5jZXN0b3Igbm9kZS5cclxuICAgKi9cbiAgYW5jZXN0b3Iocm9vdCwgcGF0aCkge1xuICAgIHZhciBub2RlID0gTm9kZS5nZXQocm9vdCwgcGF0aCk7XG5cbiAgICBpZiAoVGV4dC5pc1RleHQobm9kZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBnZXQgdGhlIGFuY2VzdG9yIG5vZGUgYXQgcGF0aCBbXCIuY29uY2F0KHBhdGgsIFwiXSBiZWNhdXNlIGl0IHJlZmVycyB0byBhIHRleHQgbm9kZSBpbnN0ZWFkOiBcIikuY29uY2F0KG5vZGUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcblxuICAvKipcclxuICAgKiBSZXR1cm4gYSBnZW5lcmF0b3Igb2YgYWxsIHRoZSBhbmNlc3RvciBub2RlcyBhYm92ZSBhIHNwZWNpZmljIHBhdGguXHJcbiAgICpcclxuICAgKiBCeSBkZWZhdWx0IHRoZSBvcmRlciBpcyBib3R0b20tdXAsIGZyb20gbG93ZXN0IHRvIGhpZ2hlc3QgYW5jZXN0b3IgaW5cclxuICAgKiB0aGUgdHJlZSwgYnV0IHlvdSBjYW4gcGFzcyB0aGUgYHJldmVyc2U6IHRydWVgIG9wdGlvbiB0byBnbyB0b3AtZG93bi5cclxuICAgKi9cbiAgKmFuY2VzdG9ycyhyb290LCBwYXRoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXG4gICAgZm9yICh2YXIgcCBvZiBQYXRoLmFuY2VzdG9ycyhwYXRoLCBvcHRpb25zKSkge1xuICAgICAgdmFyIG4gPSBOb2RlLmFuY2VzdG9yKHJvb3QsIHApO1xuICAgICAgdmFyIGVudHJ5ID0gW24sIHBdO1xuICAgICAgeWllbGQgZW50cnk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgY2hpbGQgb2YgYSBub2RlIGF0IGEgc3BlY2lmaWMgaW5kZXguXHJcbiAgICovXG4gIGNoaWxkKHJvb3QsIGluZGV4KSB7XG4gICAgaWYgKFRleHQuaXNUZXh0KHJvb3QpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZ2V0IHRoZSBjaGlsZCBvZiBhIHRleHQgbm9kZTogXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KHJvb3QpKSk7XG4gICAgfVxuXG4gICAgdmFyIGMgPSByb290LmNoaWxkcmVuW2luZGV4XTtcblxuICAgIGlmIChjID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBnZXQgY2hpbGQgYXQgaW5kZXggYFwiLmNvbmNhdChpbmRleCwgXCJgIGluIG5vZGU6IFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkocm9vdCkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYztcbiAgfSxcblxuICAvKipcclxuICAgKiBJdGVyYXRlIG92ZXIgdGhlIGNoaWxkcmVuIG9mIGEgbm9kZSBhdCBhIHNwZWNpZmljIHBhdGguXHJcbiAgICovXG4gICpjaGlsZHJlbihyb290LCBwYXRoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICByZXZlcnNlID0gZmFsc2VcbiAgICB9ID0gb3B0aW9ucztcbiAgICB2YXIgYW5jZXN0b3IgPSBOb2RlLmFuY2VzdG9yKHJvb3QsIHBhdGgpO1xuICAgIHZhciB7XG4gICAgICBjaGlsZHJlblxuICAgIH0gPSBhbmNlc3RvcjtcbiAgICB2YXIgaW5kZXggPSByZXZlcnNlID8gY2hpbGRyZW4ubGVuZ3RoIC0gMSA6IDA7XG5cbiAgICB3aGlsZSAocmV2ZXJzZSA/IGluZGV4ID49IDAgOiBpbmRleCA8IGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgdmFyIGNoaWxkID0gTm9kZS5jaGlsZChhbmNlc3RvciwgaW5kZXgpO1xuICAgICAgdmFyIGNoaWxkUGF0aCA9IHBhdGguY29uY2F0KGluZGV4KTtcbiAgICAgIHlpZWxkIFtjaGlsZCwgY2hpbGRQYXRoXTtcbiAgICAgIGluZGV4ID0gcmV2ZXJzZSA/IGluZGV4IC0gMSA6IGluZGV4ICsgMTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IGFuIGVudHJ5IGZvciB0aGUgY29tbW9uIGFuY2VzZXRvciBub2RlIG9mIHR3byBwYXRocy5cclxuICAgKi9cbiAgY29tbW9uKHJvb3QsIHBhdGgsIGFub3RoZXIpIHtcbiAgICB2YXIgcCA9IFBhdGguY29tbW9uKHBhdGgsIGFub3RoZXIpO1xuICAgIHZhciBuID0gTm9kZS5nZXQocm9vdCwgcCk7XG4gICAgcmV0dXJuIFtuLCBwXTtcbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIG5vZGUgYXQgYSBzcGVjaWZpYyBwYXRoLCBhc3NlcnRpbmcgdGhhdCBpdCdzIGEgZGVzY2VuZGFudCBub2RlLlxyXG4gICAqL1xuICBkZXNjZW5kYW50KHJvb3QsIHBhdGgpIHtcbiAgICB2YXIgbm9kZSA9IE5vZGUuZ2V0KHJvb3QsIHBhdGgpO1xuXG4gICAgaWYgKEVkaXRvci5pc0VkaXRvcihub2RlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGdldCB0aGUgZGVzY2VuZGFudCBub2RlIGF0IHBhdGggW1wiLmNvbmNhdChwYXRoLCBcIl0gYmVjYXVzZSBpdCByZWZlcnMgdG8gdGhlIHJvb3QgZWRpdG9yIG5vZGUgaW5zdGVhZDogXCIpLmNvbmNhdChub2RlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogUmV0dXJuIGEgZ2VuZXJhdG9yIG9mIGFsbCB0aGUgZGVzY2VuZGFudCBub2RlIGVudHJpZXMgaW5zaWRlIGEgcm9vdCBub2RlLlxyXG4gICAqL1xuICAqZGVzY2VuZGFudHMocm9vdCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIGZvciAodmFyIFtub2RlLCBwYXRoXSBvZiBOb2RlLm5vZGVzKHJvb3QsIG9wdGlvbnMpKSB7XG4gICAgICBpZiAocGF0aC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgLy8gTk9URTogd2UgaGF2ZSB0byBjb2VyY2UgaGVyZSBiZWNhdXNlIGNoZWNraW5nIHRoZSBwYXRoJ3MgbGVuZ3RoIGRvZXNcbiAgICAgICAgLy8gZ3VhcmFudGVlIHRoYXQgYG5vZGVgIGlzIG5vdCBhIGBFZGl0b3JgLCBidXQgVHlwZVNjcmlwdCBkb2Vzbid0IGtub3cuXG4gICAgICAgIHlpZWxkIFtub2RlLCBwYXRoXTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogUmV0dXJuIGEgZ2VuZXJhdG9yIG9mIGFsbCB0aGUgZWxlbWVudCBub2RlcyBpbnNpZGUgYSByb290IG5vZGUuIEVhY2ggaXRlcmF0aW9uXHJcbiAgICogd2lsbCByZXR1cm4gYW4gYEVsZW1lbnRFbnRyeWAgdHVwbGUgY29uc2lzdGluZyBvZiBgW0VsZW1lbnQsIFBhdGhdYC4gSWYgdGhlXHJcbiAgICogcm9vdCBub2RlIGlzIGFuIGVsZW1lbnQgaXQgd2lsbCBiZSBpbmNsdWRlZCBpbiB0aGUgaXRlcmF0aW9uIGFzIHdlbGwuXHJcbiAgICovXG4gICplbGVtZW50cyhyb290KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgZm9yICh2YXIgW25vZGUsIHBhdGhdIG9mIE5vZGUubm9kZXMocm9vdCwgb3B0aW9ucykpIHtcbiAgICAgIGlmIChFbGVtZW50LmlzRWxlbWVudChub2RlKSkge1xuICAgICAgICB5aWVsZCBbbm9kZSwgcGF0aF07XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxyXG4gICAqIEV4dHJhY3QgcHJvcHMgZnJvbSBhIE5vZGUuXHJcbiAgICovXG4gIGV4dHJhY3RQcm9wcyhub2RlKSB7XG4gICAgaWYgKEVsZW1lbnQuaXNBbmNlc3Rvcihub2RlKSkge1xuICAgICAgdmFyIHByb3BlcnRpZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMobm9kZSwgX2V4Y2x1ZGVkJDMpO1xuXG4gICAgICByZXR1cm4gcHJvcGVydGllcztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHByb3BlcnRpZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMobm9kZSwgX2V4Y2x1ZGVkMiQyKTtcblxuICAgICAgcmV0dXJuIHByb3BlcnRpZXM7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgZmlyc3Qgbm9kZSBlbnRyeSBpbiBhIHJvb3Qgbm9kZSBmcm9tIGEgcGF0aC5cclxuICAgKi9cbiAgZmlyc3Qocm9vdCwgcGF0aCkge1xuICAgIHZhciBwID0gcGF0aC5zbGljZSgpO1xuICAgIHZhciBuID0gTm9kZS5nZXQocm9vdCwgcCk7XG5cbiAgICB3aGlsZSAobikge1xuICAgICAgaWYgKFRleHQuaXNUZXh0KG4pIHx8IG4uY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbiA9IG4uY2hpbGRyZW5bMF07XG4gICAgICAgIHAucHVzaCgwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW24sIHBdO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgc2xpY2VkIGZyYWdtZW50IHJlcHJlc2VudGVkIGJ5IGEgcmFuZ2UgaW5zaWRlIGEgcm9vdCBub2RlLlxyXG4gICAqL1xuICBmcmFnbWVudChyb290LCByYW5nZSkge1xuICAgIGlmIChUZXh0LmlzVGV4dChyb290KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGdldCBhIGZyYWdtZW50IHN0YXJ0aW5nIGZyb20gYSByb290IHRleHQgbm9kZTogXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KHJvb3QpKSk7XG4gICAgfVxuXG4gICAgdmFyIG5ld1Jvb3QgPSBwcm9kdWNlKHtcbiAgICAgIGNoaWxkcmVuOiByb290LmNoaWxkcmVuXG4gICAgfSwgciA9PiB7XG4gICAgICB2YXIgW3N0YXJ0LCBlbmRdID0gUmFuZ2UuZWRnZXMocmFuZ2UpO1xuICAgICAgdmFyIG5vZGVFbnRyaWVzID0gTm9kZS5ub2RlcyhyLCB7XG4gICAgICAgIHJldmVyc2U6IHRydWUsXG4gICAgICAgIHBhc3M6IF9yZWYgPT4ge1xuICAgICAgICAgIHZhciBbLCBwYXRoXSA9IF9yZWY7XG4gICAgICAgICAgcmV0dXJuICFSYW5nZS5pbmNsdWRlcyhyYW5nZSwgcGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBmb3IgKHZhciBbLCBwYXRoXSBvZiBub2RlRW50cmllcykge1xuICAgICAgICBpZiAoIVJhbmdlLmluY2x1ZGVzKHJhbmdlLCBwYXRoKSkge1xuICAgICAgICAgIHZhciBwYXJlbnQgPSBOb2RlLnBhcmVudChyLCBwYXRoKTtcbiAgICAgICAgICB2YXIgaW5kZXggPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG4gICAgICAgICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoUGF0aC5lcXVhbHMocGF0aCwgZW5kLnBhdGgpKSB7XG4gICAgICAgICAgdmFyIGxlYWYgPSBOb2RlLmxlYWYociwgcGF0aCk7XG4gICAgICAgICAgbGVhZi50ZXh0ID0gbGVhZi50ZXh0LnNsaWNlKDAsIGVuZC5vZmZzZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFBhdGguZXF1YWxzKHBhdGgsIHN0YXJ0LnBhdGgpKSB7XG4gICAgICAgICAgdmFyIF9sZWFmID0gTm9kZS5sZWFmKHIsIHBhdGgpO1xuXG4gICAgICAgICAgX2xlYWYudGV4dCA9IF9sZWFmLnRleHQuc2xpY2Uoc3RhcnQub2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoRWRpdG9yLmlzRWRpdG9yKHIpKSB7XG4gICAgICAgIHIuc2VsZWN0aW9uID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbmV3Um9vdC5jaGlsZHJlbjtcbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIGRlc2NlbmRhbnQgbm9kZSByZWZlcnJlZCB0byBieSBhIHNwZWNpZmljIHBhdGguIElmIHRoZSBwYXRoIGlzIGFuXHJcbiAgICogZW1wdHkgYXJyYXksIGl0IHJlZmVycyB0byB0aGUgcm9vdCBub2RlIGl0c2VsZi5cclxuICAgKi9cbiAgZ2V0KHJvb3QsIHBhdGgpIHtcbiAgICB2YXIgbm9kZSA9IHJvb3Q7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwID0gcGF0aFtpXTtcblxuICAgICAgaWYgKFRleHQuaXNUZXh0KG5vZGUpIHx8ICFub2RlLmNoaWxkcmVuW3BdKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIGEgZGVzY2VuZGFudCBhdCBwYXRoIFtcIi5jb25jYXQocGF0aCwgXCJdIGluIG5vZGU6IFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkocm9vdCkpKTtcbiAgICAgIH1cblxuICAgICAgbm9kZSA9IG5vZGUuY2hpbGRyZW5bcF07XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBkZXNjZW5kYW50IG5vZGUgZXhpc3RzIGF0IGEgc3BlY2lmaWMgcGF0aC5cclxuICAgKi9cbiAgaGFzKHJvb3QsIHBhdGgpIHtcbiAgICB2YXIgbm9kZSA9IHJvb3Q7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwID0gcGF0aFtpXTtcblxuICAgICAgaWYgKFRleHQuaXNUZXh0KG5vZGUpIHx8ICFub2RlLmNoaWxkcmVuW3BdKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgbm9kZSA9IG5vZGUuY2hpbGRyZW5bcF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSB2YWx1ZSBpbXBsZW1lbnRzIHRoZSBgTm9kZWAgaW50ZXJmYWNlLlxyXG4gICAqL1xuICBpc05vZGUodmFsdWUpIHtcbiAgICByZXR1cm4gVGV4dC5pc1RleHQodmFsdWUpIHx8IEVsZW1lbnQuaXNFbGVtZW50KHZhbHVlKSB8fCBFZGl0b3IuaXNFZGl0b3IodmFsdWUpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYSBsaXN0IG9mIGBOb2RlYCBvYmplY3RzLlxyXG4gICAqL1xuICBpc05vZGVMaXN0KHZhbHVlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBjYWNoZWRSZXN1bHQgPSBJU19OT0RFX0xJU1RfQ0FDSEUuZ2V0KHZhbHVlKTtcblxuICAgIGlmIChjYWNoZWRSZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGNhY2hlZFJlc3VsdDtcbiAgICB9XG5cbiAgICB2YXIgaXNOb2RlTGlzdCA9IHZhbHVlLmV2ZXJ5KHZhbCA9PiBOb2RlLmlzTm9kZSh2YWwpKTtcbiAgICBJU19OT0RFX0xJU1RfQ0FDSEUuc2V0KHZhbHVlLCBpc05vZGVMaXN0KTtcbiAgICByZXR1cm4gaXNOb2RlTGlzdDtcbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIGxhc3Qgbm9kZSBlbnRyeSBpbiBhIHJvb3Qgbm9kZSBmcm9tIGEgcGF0aC5cclxuICAgKi9cbiAgbGFzdChyb290LCBwYXRoKSB7XG4gICAgdmFyIHAgPSBwYXRoLnNsaWNlKCk7XG4gICAgdmFyIG4gPSBOb2RlLmdldChyb290LCBwKTtcblxuICAgIHdoaWxlIChuKSB7XG4gICAgICBpZiAoVGV4dC5pc1RleHQobikgfHwgbi5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaSA9IG4uY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICAgICAgbiA9IG4uY2hpbGRyZW5baV07XG4gICAgICAgIHAucHVzaChpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW24sIHBdO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgbm9kZSBhdCBhIHNwZWNpZmljIHBhdGgsIGVuc3VyaW5nIGl0J3MgYSBsZWFmIHRleHQgbm9kZS5cclxuICAgKi9cbiAgbGVhZihyb290LCBwYXRoKSB7XG4gICAgdmFyIG5vZGUgPSBOb2RlLmdldChyb290LCBwYXRoKTtcblxuICAgIGlmICghVGV4dC5pc1RleHQobm9kZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBnZXQgdGhlIGxlYWYgbm9kZSBhdCBwYXRoIFtcIi5jb25jYXQocGF0aCwgXCJdIGJlY2F1c2UgaXQgcmVmZXJzIHRvIGEgbm9uLWxlYWYgbm9kZTogXCIpLmNvbmNhdChub2RlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogUmV0dXJuIGEgZ2VuZXJhdG9yIG9mIHRoZSBpbiBhIGJyYW5jaCBvZiB0aGUgdHJlZSwgZnJvbSBhIHNwZWNpZmljIHBhdGguXHJcbiAgICpcclxuICAgKiBCeSBkZWZhdWx0IHRoZSBvcmRlciBpcyB0b3AtZG93biwgZnJvbSBsb3dlc3QgdG8gaGlnaGVzdCBub2RlIGluIHRoZSB0cmVlLFxyXG4gICAqIGJ1dCB5b3UgY2FuIHBhc3MgdGhlIGByZXZlcnNlOiB0cnVlYCBvcHRpb24gdG8gZ28gYm90dG9tLXVwLlxyXG4gICAqL1xuICAqbGV2ZWxzKHJvb3QsIHBhdGgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgICBmb3IgKHZhciBwIG9mIFBhdGgubGV2ZWxzKHBhdGgsIG9wdGlvbnMpKSB7XG4gICAgICB2YXIgbiA9IE5vZGUuZ2V0KHJvb3QsIHApO1xuICAgICAgeWllbGQgW24sIHBdO1xuICAgIH1cbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIG5vZGUgbWF0Y2hlcyBhIHNldCBvZiBwcm9wcy5cclxuICAgKi9cbiAgbWF0Y2hlcyhub2RlLCBwcm9wcykge1xuICAgIHJldHVybiBFbGVtZW50LmlzRWxlbWVudChub2RlKSAmJiBFbGVtZW50LmlzRWxlbWVudFByb3BzKHByb3BzKSAmJiBFbGVtZW50Lm1hdGNoZXMobm9kZSwgcHJvcHMpIHx8IFRleHQuaXNUZXh0KG5vZGUpICYmIFRleHQuaXNUZXh0UHJvcHMocHJvcHMpICYmIFRleHQubWF0Y2hlcyhub2RlLCBwcm9wcyk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogUmV0dXJuIGEgZ2VuZXJhdG9yIG9mIGFsbCB0aGUgbm9kZSBlbnRyaWVzIG9mIGEgcm9vdCBub2RlLiBFYWNoIGVudHJ5IGlzXHJcbiAgICogcmV0dXJuZWQgYXMgYSBgW05vZGUsIFBhdGhdYCB0dXBsZSwgd2l0aCB0aGUgcGF0aCByZWZlcnJpbmcgdG8gdGhlIG5vZGUnc1xyXG4gICAqIHBvc2l0aW9uIGluc2lkZSB0aGUgcm9vdCBub2RlLlxyXG4gICAqL1xuICAqbm9kZXMocm9vdCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIge1xuICAgICAgcGFzcyxcbiAgICAgIHJldmVyc2UgPSBmYWxzZVxuICAgIH0gPSBvcHRpb25zO1xuICAgIHZhciB7XG4gICAgICBmcm9tID0gW10sXG4gICAgICB0b1xuICAgIH0gPSBvcHRpb25zO1xuICAgIHZhciB2aXNpdGVkID0gbmV3IFNldCgpO1xuICAgIHZhciBwID0gW107XG4gICAgdmFyIG4gPSByb290O1xuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmICh0byAmJiAocmV2ZXJzZSA/IFBhdGguaXNCZWZvcmUocCwgdG8pIDogUGF0aC5pc0FmdGVyKHAsIHRvKSkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmICghdmlzaXRlZC5oYXMobikpIHtcbiAgICAgICAgeWllbGQgW24sIHBdO1xuICAgICAgfSAvLyBJZiB3ZSdyZSBhbGxvd2VkIHRvIGdvIGRvd253YXJkIGFuZCB3ZSBoYXZlbid0IGRlc2NlbmRlZCB5ZXQsIGRvLlxuXG5cbiAgICAgIGlmICghdmlzaXRlZC5oYXMobikgJiYgIVRleHQuaXNUZXh0KG4pICYmIG4uY2hpbGRyZW4ubGVuZ3RoICE9PSAwICYmIChwYXNzID09IG51bGwgfHwgcGFzcyhbbiwgcF0pID09PSBmYWxzZSkpIHtcbiAgICAgICAgdmlzaXRlZC5hZGQobik7XG4gICAgICAgIHZhciBuZXh0SW5kZXggPSByZXZlcnNlID8gbi5jaGlsZHJlbi5sZW5ndGggLSAxIDogMDtcblxuICAgICAgICBpZiAoUGF0aC5pc0FuY2VzdG9yKHAsIGZyb20pKSB7XG4gICAgICAgICAgbmV4dEluZGV4ID0gZnJvbVtwLmxlbmd0aF07XG4gICAgICAgIH1cblxuICAgICAgICBwID0gcC5jb25jYXQobmV4dEluZGV4KTtcbiAgICAgICAgbiA9IE5vZGUuZ2V0KHJvb3QsIHApO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gLy8gSWYgd2UncmUgYXQgdGhlIHJvb3QgYW5kIHdlIGNhbid0IGdvIGRvd24sIHdlJ3JlIGRvbmUuXG5cblxuICAgICAgaWYgKHAubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSAvLyBJZiB3ZSdyZSBnb2luZyBmb3J3YXJkLi4uXG5cblxuICAgICAgaWYgKCFyZXZlcnNlKSB7XG4gICAgICAgIHZhciBuZXdQYXRoID0gUGF0aC5uZXh0KHApO1xuXG4gICAgICAgIGlmIChOb2RlLmhhcyhyb290LCBuZXdQYXRoKSkge1xuICAgICAgICAgIHAgPSBuZXdQYXRoO1xuICAgICAgICAgIG4gPSBOb2RlLmdldChyb290LCBwKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBJZiB3ZSdyZSBnb2luZyBiYWNrd2FyZC4uLlxuXG5cbiAgICAgIGlmIChyZXZlcnNlICYmIHBbcC5sZW5ndGggLSAxXSAhPT0gMCkge1xuICAgICAgICB2YXIgX25ld1BhdGggPSBQYXRoLnByZXZpb3VzKHApO1xuXG4gICAgICAgIHAgPSBfbmV3UGF0aDtcbiAgICAgICAgbiA9IE5vZGUuZ2V0KHJvb3QsIHApO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gLy8gT3RoZXJ3aXNlIHdlJ3JlIGdvaW5nIHVwd2FyZC4uLlxuXG5cbiAgICAgIHAgPSBQYXRoLnBhcmVudChwKTtcbiAgICAgIG4gPSBOb2RlLmdldChyb290LCBwKTtcbiAgICAgIHZpc2l0ZWQuYWRkKG4pO1xuICAgIH1cbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIHBhcmVudCBvZiBhIG5vZGUgYXQgYSBzcGVjaWZpYyBwYXRoLlxyXG4gICAqL1xuICBwYXJlbnQocm9vdCwgcGF0aCkge1xuICAgIHZhciBwYXJlbnRQYXRoID0gUGF0aC5wYXJlbnQocGF0aCk7XG4gICAgdmFyIHAgPSBOb2RlLmdldChyb290LCBwYXJlbnRQYXRoKTtcblxuICAgIGlmIChUZXh0LmlzVGV4dChwKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGdldCB0aGUgcGFyZW50IG9mIHBhdGggW1wiLmNvbmNhdChwYXRoLCBcIl0gYmVjYXVzZSBpdCBkb2VzIG5vdCBleGlzdCBpbiB0aGUgcm9vdC5cIikpO1xuICAgIH1cblxuICAgIHJldHVybiBwO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgY29uY2F0ZW5hdGVkIHRleHQgc3RyaW5nIG9mIGEgbm9kZSdzIGNvbnRlbnQuXHJcbiAgICpcclxuICAgKiBOb3RlIHRoYXQgdGhpcyB3aWxsIG5vdCBpbmNsdWRlIHNwYWNlcyBvciBsaW5lIGJyZWFrcyBiZXR3ZWVuIGJsb2NrIG5vZGVzLlxyXG4gICAqIEl0IGlzIG5vdCBhIHVzZXItZmFjaW5nIHN0cmluZywgYnV0IGEgc3RyaW5nIGZvciBwZXJmb3JtaW5nIG9mZnNldC1yZWxhdGVkXHJcbiAgICogY29tcHV0YXRpb25zIGZvciBhIG5vZGUuXHJcbiAgICovXG4gIHN0cmluZyhub2RlKSB7XG4gICAgaWYgKFRleHQuaXNUZXh0KG5vZGUpKSB7XG4gICAgICByZXR1cm4gbm9kZS50ZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbm9kZS5jaGlsZHJlbi5tYXAoTm9kZS5zdHJpbmcpLmpvaW4oJycpO1xuICAgIH1cbiAgfSxcblxuICAvKipcclxuICAgKiBSZXR1cm4gYSBnZW5lcmF0b3Igb2YgYWxsIGxlYWYgdGV4dCBub2RlcyBpbiBhIHJvb3Qgbm9kZS5cclxuICAgKi9cbiAgKnRleHRzKHJvb3QpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICBmb3IgKHZhciBbbm9kZSwgcGF0aF0gb2YgTm9kZS5ub2Rlcyhyb290LCBvcHRpb25zKSkge1xuICAgICAgaWYgKFRleHQuaXNUZXh0KG5vZGUpKSB7XG4gICAgICAgIHlpZWxkIFtub2RlLCBwYXRoXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufTtcblxuZnVuY3Rpb24gb3duS2V5cyQ3KG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSB7IHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsgfSBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQ3KHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMkNyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzJDcoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG52YXIgT3BlcmF0aW9uID0ge1xuICAvKipcclxuICAgKiBDaGVjayBvZiBhIHZhbHVlIGlzIGEgYE5vZGVPcGVyYXRpb25gIG9iamVjdC5cclxuICAgKi9cbiAgaXNOb2RlT3BlcmF0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIE9wZXJhdGlvbi5pc09wZXJhdGlvbih2YWx1ZSkgJiYgdmFsdWUudHlwZS5lbmRzV2l0aCgnX25vZGUnKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBvZiBhIHZhbHVlIGlzIGFuIGBPcGVyYXRpb25gIG9iamVjdC5cclxuICAgKi9cbiAgaXNPcGVyYXRpb24odmFsdWUpIHtcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc3dpdGNoICh2YWx1ZS50eXBlKSB7XG4gICAgICBjYXNlICdpbnNlcnRfbm9kZSc6XG4gICAgICAgIHJldHVybiBQYXRoLmlzUGF0aCh2YWx1ZS5wYXRoKSAmJiBOb2RlLmlzTm9kZSh2YWx1ZS5ub2RlKTtcblxuICAgICAgY2FzZSAnaW5zZXJ0X3RleHQnOlxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlLm9mZnNldCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHZhbHVlLnRleHQgPT09ICdzdHJpbmcnICYmIFBhdGguaXNQYXRoKHZhbHVlLnBhdGgpO1xuXG4gICAgICBjYXNlICdtZXJnZV9ub2RlJzpcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZS5wb3NpdGlvbiA9PT0gJ251bWJlcicgJiYgUGF0aC5pc1BhdGgodmFsdWUucGF0aCkgJiYgaXNQbGFpbk9iamVjdCh2YWx1ZS5wcm9wZXJ0aWVzKTtcblxuICAgICAgY2FzZSAnbW92ZV9ub2RlJzpcbiAgICAgICAgcmV0dXJuIFBhdGguaXNQYXRoKHZhbHVlLnBhdGgpICYmIFBhdGguaXNQYXRoKHZhbHVlLm5ld1BhdGgpO1xuXG4gICAgICBjYXNlICdyZW1vdmVfbm9kZSc6XG4gICAgICAgIHJldHVybiBQYXRoLmlzUGF0aCh2YWx1ZS5wYXRoKSAmJiBOb2RlLmlzTm9kZSh2YWx1ZS5ub2RlKTtcblxuICAgICAgY2FzZSAncmVtb3ZlX3RleHQnOlxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlLm9mZnNldCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHZhbHVlLnRleHQgPT09ICdzdHJpbmcnICYmIFBhdGguaXNQYXRoKHZhbHVlLnBhdGgpO1xuXG4gICAgICBjYXNlICdzZXRfbm9kZSc6XG4gICAgICAgIHJldHVybiBQYXRoLmlzUGF0aCh2YWx1ZS5wYXRoKSAmJiBpc1BsYWluT2JqZWN0KHZhbHVlLnByb3BlcnRpZXMpICYmIGlzUGxhaW5PYmplY3QodmFsdWUubmV3UHJvcGVydGllcyk7XG5cbiAgICAgIGNhc2UgJ3NldF9zZWxlY3Rpb24nOlxuICAgICAgICByZXR1cm4gdmFsdWUucHJvcGVydGllcyA9PT0gbnVsbCAmJiBSYW5nZS5pc1JhbmdlKHZhbHVlLm5ld1Byb3BlcnRpZXMpIHx8IHZhbHVlLm5ld1Byb3BlcnRpZXMgPT09IG51bGwgJiYgUmFuZ2UuaXNSYW5nZSh2YWx1ZS5wcm9wZXJ0aWVzKSB8fCBpc1BsYWluT2JqZWN0KHZhbHVlLnByb3BlcnRpZXMpICYmIGlzUGxhaW5PYmplY3QodmFsdWUubmV3UHJvcGVydGllcyk7XG5cbiAgICAgIGNhc2UgJ3NwbGl0X25vZGUnOlxuICAgICAgICByZXR1cm4gUGF0aC5pc1BhdGgodmFsdWUucGF0aCkgJiYgdHlwZW9mIHZhbHVlLnBvc2l0aW9uID09PSAnbnVtYmVyJyAmJiBpc1BsYWluT2JqZWN0KHZhbHVlLnByb3BlcnRpZXMpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYSBsaXN0IG9mIGBPcGVyYXRpb25gIG9iamVjdHMuXHJcbiAgICovXG4gIGlzT3BlcmF0aW9uTGlzdCh2YWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5ldmVyeSh2YWwgPT4gT3BlcmF0aW9uLmlzT3BlcmF0aW9uKHZhbCkpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIG9mIGEgdmFsdWUgaXMgYSBgU2VsZWN0aW9uT3BlcmF0aW9uYCBvYmplY3QuXHJcbiAgICovXG4gIGlzU2VsZWN0aW9uT3BlcmF0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIE9wZXJhdGlvbi5pc09wZXJhdGlvbih2YWx1ZSkgJiYgdmFsdWUudHlwZS5lbmRzV2l0aCgnX3NlbGVjdGlvbicpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIG9mIGEgdmFsdWUgaXMgYSBgVGV4dE9wZXJhdGlvbmAgb2JqZWN0LlxyXG4gICAqL1xuICBpc1RleHRPcGVyYXRpb24odmFsdWUpIHtcbiAgICByZXR1cm4gT3BlcmF0aW9uLmlzT3BlcmF0aW9uKHZhbHVlKSAmJiB2YWx1ZS50eXBlLmVuZHNXaXRoKCdfdGV4dCcpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEludmVydCBhbiBvcGVyYXRpb24sIHJldHVybmluZyBhIG5ldyBvcGVyYXRpb24gdGhhdCB3aWxsIGV4YWN0bHkgdW5kbyB0aGVcclxuICAgKiBvcmlnaW5hbCB3aGVuIGFwcGxpZWQuXHJcbiAgICovXG4gIGludmVyc2Uob3ApIHtcbiAgICBzd2l0Y2ggKG9wLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2luc2VydF9ub2RlJzpcbiAgICAgICAge1xuICAgICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkJDcoX29iamVjdFNwcmVhZCQ3KHt9LCBvcCksIHt9LCB7XG4gICAgICAgICAgICB0eXBlOiAncmVtb3ZlX25vZGUnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAnaW5zZXJ0X3RleHQnOlxuICAgICAgICB7XG4gICAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQkNyhfb2JqZWN0U3ByZWFkJDcoe30sIG9wKSwge30sIHtcbiAgICAgICAgICAgIHR5cGU6ICdyZW1vdmVfdGV4dCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdtZXJnZV9ub2RlJzpcbiAgICAgICAge1xuICAgICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkJDcoX29iamVjdFNwcmVhZCQ3KHt9LCBvcCksIHt9LCB7XG4gICAgICAgICAgICB0eXBlOiAnc3BsaXRfbm9kZScsXG4gICAgICAgICAgICBwYXRoOiBQYXRoLnByZXZpb3VzKG9wLnBhdGgpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAnbW92ZV9ub2RlJzpcbiAgICAgICAge1xuICAgICAgICAgIHZhciB7XG4gICAgICAgICAgICBuZXdQYXRoLFxuICAgICAgICAgICAgcGF0aFxuICAgICAgICAgIH0gPSBvcDsgLy8gUEVSRjogaW4gdGhpcyBjYXNlIHRoZSBtb3ZlIG9wZXJhdGlvbiBpcyBhIG5vLW9wIGFueXdheXMuXG5cbiAgICAgICAgICBpZiAoUGF0aC5lcXVhbHMobmV3UGF0aCwgcGF0aCkpIHtcbiAgICAgICAgICAgIHJldHVybiBvcDtcbiAgICAgICAgICB9IC8vIElmIHRoZSBtb3ZlIGhhcHBlbnMgY29tcGxldGVseSB3aXRoaW4gYSBzaW5nbGUgcGFyZW50IHRoZSBwYXRoIGFuZFxuICAgICAgICAgIC8vIG5ld1BhdGggYXJlIHN0YWJsZSB3aXRoIHJlc3BlY3QgdG8gZWFjaCBvdGhlci5cblxuXG4gICAgICAgICAgaWYgKFBhdGguaXNTaWJsaW5nKHBhdGgsIG5ld1BhdGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZCQ3KF9vYmplY3RTcHJlYWQkNyh7fSwgb3ApLCB7fSwge1xuICAgICAgICAgICAgICBwYXRoOiBuZXdQYXRoLFxuICAgICAgICAgICAgICBuZXdQYXRoOiBwYXRoXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IC8vIElmIHRoZSBtb3ZlIGRvZXMgbm90IGhhcHBlbiB3aXRoaW4gYSBzaW5nbGUgcGFyZW50IGl0IGlzIHBvc3NpYmxlXG4gICAgICAgICAgLy8gZm9yIHRoZSBtb3ZlIHRvIGltcGFjdCB0aGUgdHJ1ZSBwYXRoIHRvIHRoZSBsb2NhdGlvbiB3aGVyZSB0aGUgbm9kZVxuICAgICAgICAgIC8vIHdhcyByZW1vdmVkIGZyb20gYW5kIHdoZXJlIGl0IHdhcyBpbnNlcnRlZC4gV2UgaGF2ZSB0byBhZGp1c3QgZm9yIHRoaXNcbiAgICAgICAgICAvLyBhbmQgZmluZCB0aGUgb3JpZ2luYWwgcGF0aC4gV2UgY2FuIGFjY29tcGxpc2ggdGhpcyAob25seSBpbiBub24tc2libGluZylcbiAgICAgICAgICAvLyBtb3ZlcyBieSBsb29raW5nIGF0IHRoZSBpbXBhY3Qgb2YgdGhlIG1vdmUgb3BlcmF0aW9uIG9uIHRoZSBub2RlXG4gICAgICAgICAgLy8gYWZ0ZXIgdGhlIG9yaWdpbmFsIG1vdmUgcGF0aC5cblxuXG4gICAgICAgICAgdmFyIGludmVyc2VQYXRoID0gUGF0aC50cmFuc2Zvcm0ocGF0aCwgb3ApO1xuICAgICAgICAgIHZhciBpbnZlcnNlTmV3UGF0aCA9IFBhdGgudHJhbnNmb3JtKFBhdGgubmV4dChwYXRoKSwgb3ApO1xuICAgICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkJDcoX29iamVjdFNwcmVhZCQ3KHt9LCBvcCksIHt9LCB7XG4gICAgICAgICAgICBwYXRoOiBpbnZlcnNlUGF0aCxcbiAgICAgICAgICAgIG5ld1BhdGg6IGludmVyc2VOZXdQYXRoXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAncmVtb3ZlX25vZGUnOlxuICAgICAgICB7XG4gICAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQkNyhfb2JqZWN0U3ByZWFkJDcoe30sIG9wKSwge30sIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnNlcnRfbm9kZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdyZW1vdmVfdGV4dCc6XG4gICAgICAgIHtcbiAgICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZCQ3KF9vYmplY3RTcHJlYWQkNyh7fSwgb3ApLCB7fSwge1xuICAgICAgICAgICAgdHlwZTogJ2luc2VydF90ZXh0J1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ3NldF9ub2RlJzpcbiAgICAgICAge1xuICAgICAgICAgIHZhciB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzLFxuICAgICAgICAgICAgbmV3UHJvcGVydGllc1xuICAgICAgICAgIH0gPSBvcDtcbiAgICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZCQ3KF9vYmplY3RTcHJlYWQkNyh7fSwgb3ApLCB7fSwge1xuICAgICAgICAgICAgcHJvcGVydGllczogbmV3UHJvcGVydGllcyxcbiAgICAgICAgICAgIG5ld1Byb3BlcnRpZXM6IHByb3BlcnRpZXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdzZXRfc2VsZWN0aW9uJzpcbiAgICAgICAge1xuICAgICAgICAgIHZhciB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBfcHJvcGVydGllcyxcbiAgICAgICAgICAgIG5ld1Byb3BlcnRpZXM6IF9uZXdQcm9wZXJ0aWVzXG4gICAgICAgICAgfSA9IG9wO1xuXG4gICAgICAgICAgaWYgKF9wcm9wZXJ0aWVzID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkJDcoX29iamVjdFNwcmVhZCQ3KHt9LCBvcCksIHt9LCB7XG4gICAgICAgICAgICAgIHByb3BlcnRpZXM6IF9uZXdQcm9wZXJ0aWVzLFxuICAgICAgICAgICAgICBuZXdQcm9wZXJ0aWVzOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKF9uZXdQcm9wZXJ0aWVzID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkJDcoX29iamVjdFNwcmVhZCQ3KHt9LCBvcCksIHt9LCB7XG4gICAgICAgICAgICAgIHByb3BlcnRpZXM6IG51bGwsXG4gICAgICAgICAgICAgIG5ld1Byb3BlcnRpZXM6IF9wcm9wZXJ0aWVzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQkNyhfb2JqZWN0U3ByZWFkJDcoe30sIG9wKSwge30sIHtcbiAgICAgICAgICAgICAgcHJvcGVydGllczogX25ld1Byb3BlcnRpZXMsXG4gICAgICAgICAgICAgIG5ld1Byb3BlcnRpZXM6IF9wcm9wZXJ0aWVzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAnc3BsaXRfbm9kZSc6XG4gICAgICAgIHtcbiAgICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZCQ3KF9vYmplY3RTcHJlYWQkNyh7fSwgb3ApLCB7fSwge1xuICAgICAgICAgICAgdHlwZTogJ21lcmdlX25vZGUnLFxuICAgICAgICAgICAgcGF0aDogUGF0aC5uZXh0KG9wLnBhdGgpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxufTtcblxudmFyIFBhdGggPSB7XG4gIC8qKlxyXG4gICAqIEdldCBhIGxpc3Qgb2YgYW5jZXN0b3IgcGF0aHMgZm9yIGEgZ2l2ZW4gcGF0aC5cclxuICAgKlxyXG4gICAqIFRoZSBwYXRocyBhcmUgc29ydGVkIGZyb20gZGVlcGVzdCB0byBzaGFsbG93ZXN0IGFuY2VzdG9yLiBIb3dldmVyLCBpZiB0aGVcclxuICAgKiBgcmV2ZXJzZTogdHJ1ZWAgb3B0aW9uIGlzIHBhc3NlZCwgdGhleSBhcmUgcmV2ZXJzZWQuXHJcbiAgICovXG4gIGFuY2VzdG9ycyhwYXRoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICByZXZlcnNlID0gZmFsc2VcbiAgICB9ID0gb3B0aW9ucztcbiAgICB2YXIgcGF0aHMgPSBQYXRoLmxldmVscyhwYXRoLCBvcHRpb25zKTtcblxuICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICBwYXRocyA9IHBhdGhzLnNsaWNlKDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXRocyA9IHBhdGhzLnNsaWNlKDAsIC0xKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0aHM7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBjb21tb24gYW5jZXN0b3IgcGF0aCBvZiB0d28gcGF0aHMuXHJcbiAgICovXG4gIGNvbW1vbihwYXRoLCBhbm90aGVyKSB7XG4gICAgdmFyIGNvbW1vbiA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aCAmJiBpIDwgYW5vdGhlci5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGF2ID0gcGF0aFtpXTtcbiAgICAgIHZhciBidiA9IGFub3RoZXJbaV07XG5cbiAgICAgIGlmIChhdiAhPT0gYnYpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNvbW1vbi5wdXNoKGF2KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tbW9uO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENvbXBhcmUgYSBwYXRoIHRvIGFub3RoZXIsIHJldHVybmluZyBhbiBpbnRlZ2VyIGluZGljYXRpbmcgd2hldGhlciB0aGUgcGF0aFxyXG4gICAqIHdhcyBiZWZvcmUsIGF0LCBvciBhZnRlciB0aGUgb3RoZXIuXHJcbiAgICpcclxuICAgKiBOb3RlOiBUd28gcGF0aHMgb2YgdW5lcXVhbCBsZW5ndGggY2FuIHN0aWxsIHJlY2VpdmUgYSBgMGAgcmVzdWx0IGlmIG9uZSBpc1xyXG4gICAqIGRpcmVjdGx5IGFib3ZlIG9yIGJlbG93IHRoZSBvdGhlci4gSWYgeW91IHdhbnQgZXhhY3QgbWF0Y2hpbmcsIHVzZVxyXG4gICAqIFtbUGF0aC5lcXVhbHNdXSBpbnN0ZWFkLlxyXG4gICAqL1xuICBjb21wYXJlKHBhdGgsIGFub3RoZXIpIHtcbiAgICB2YXIgbWluID0gTWF0aC5taW4ocGF0aC5sZW5ndGgsIGFub3RoZXIubGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWluOyBpKyspIHtcbiAgICAgIGlmIChwYXRoW2ldIDwgYW5vdGhlcltpXSkgcmV0dXJuIC0xO1xuICAgICAgaWYgKHBhdGhbaV0gPiBhbm90aGVyW2ldKSByZXR1cm4gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHBhdGggZW5kcyBhZnRlciBvbmUgb2YgdGhlIGluZGV4ZXMgaW4gYW5vdGhlci5cclxuICAgKi9cbiAgZW5kc0FmdGVyKHBhdGgsIGFub3RoZXIpIHtcbiAgICB2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTtcbiAgICB2YXIgYXMgPSBwYXRoLnNsaWNlKDAsIGkpO1xuICAgIHZhciBicyA9IGFub3RoZXIuc2xpY2UoMCwgaSk7XG4gICAgdmFyIGF2ID0gcGF0aFtpXTtcbiAgICB2YXIgYnYgPSBhbm90aGVyW2ldO1xuICAgIHJldHVybiBQYXRoLmVxdWFscyhhcywgYnMpICYmIGF2ID4gYnY7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBwYXRoIGVuZHMgYXQgb25lIG9mIHRoZSBpbmRleGVzIGluIGFub3RoZXIuXHJcbiAgICovXG4gIGVuZHNBdChwYXRoLCBhbm90aGVyKSB7XG4gICAgdmFyIGkgPSBwYXRoLmxlbmd0aDtcbiAgICB2YXIgYXMgPSBwYXRoLnNsaWNlKDAsIGkpO1xuICAgIHZhciBicyA9IGFub3RoZXIuc2xpY2UoMCwgaSk7XG4gICAgcmV0dXJuIFBhdGguZXF1YWxzKGFzLCBicyk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBwYXRoIGVuZHMgYmVmb3JlIG9uZSBvZiB0aGUgaW5kZXhlcyBpbiBhbm90aGVyLlxyXG4gICAqL1xuICBlbmRzQmVmb3JlKHBhdGgsIGFub3RoZXIpIHtcbiAgICB2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTtcbiAgICB2YXIgYXMgPSBwYXRoLnNsaWNlKDAsIGkpO1xuICAgIHZhciBicyA9IGFub3RoZXIuc2xpY2UoMCwgaSk7XG4gICAgdmFyIGF2ID0gcGF0aFtpXTtcbiAgICB2YXIgYnYgPSBhbm90aGVyW2ldO1xuICAgIHJldHVybiBQYXRoLmVxdWFscyhhcywgYnMpICYmIGF2IDwgYnY7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBwYXRoIGlzIGV4YWN0bHkgZXF1YWwgdG8gYW5vdGhlci5cclxuICAgKi9cbiAgZXF1YWxzKHBhdGgsIGFub3RoZXIpIHtcbiAgICByZXR1cm4gcGF0aC5sZW5ndGggPT09IGFub3RoZXIubGVuZ3RoICYmIHBhdGguZXZlcnkoKG4sIGkpID0+IG4gPT09IGFub3RoZXJbaV0pO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIHRoZSBwYXRoIG9mIHByZXZpb3VzIHNpYmxpbmcgbm9kZSBleGlzdHNcclxuICAgKi9cbiAgaGFzUHJldmlvdXMocGF0aCkge1xuICAgIHJldHVybiBwYXRoW3BhdGgubGVuZ3RoIC0gMV0gPiAwO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgcGF0aCBpcyBhZnRlciBhbm90aGVyLlxyXG4gICAqL1xuICBpc0FmdGVyKHBhdGgsIGFub3RoZXIpIHtcbiAgICByZXR1cm4gUGF0aC5jb21wYXJlKHBhdGgsIGFub3RoZXIpID09PSAxO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgcGF0aCBpcyBhbiBhbmNlc3RvciBvZiBhbm90aGVyLlxyXG4gICAqL1xuICBpc0FuY2VzdG9yKHBhdGgsIGFub3RoZXIpIHtcbiAgICByZXR1cm4gcGF0aC5sZW5ndGggPCBhbm90aGVyLmxlbmd0aCAmJiBQYXRoLmNvbXBhcmUocGF0aCwgYW5vdGhlcikgPT09IDA7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBwYXRoIGlzIGJlZm9yZSBhbm90aGVyLlxyXG4gICAqL1xuICBpc0JlZm9yZShwYXRoLCBhbm90aGVyKSB7XG4gICAgcmV0dXJuIFBhdGguY29tcGFyZShwYXRoLCBhbm90aGVyKSA9PT0gLTE7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBwYXRoIGlzIGEgY2hpbGQgb2YgYW5vdGhlci5cclxuICAgKi9cbiAgaXNDaGlsZChwYXRoLCBhbm90aGVyKSB7XG4gICAgcmV0dXJuIHBhdGgubGVuZ3RoID09PSBhbm90aGVyLmxlbmd0aCArIDEgJiYgUGF0aC5jb21wYXJlKHBhdGgsIGFub3RoZXIpID09PSAwO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgcGF0aCBpcyBlcXVhbCB0byBvciBhbiBhbmNlc3RvciBvZiBhbm90aGVyLlxyXG4gICAqL1xuICBpc0NvbW1vbihwYXRoLCBhbm90aGVyKSB7XG4gICAgcmV0dXJuIHBhdGgubGVuZ3RoIDw9IGFub3RoZXIubGVuZ3RoICYmIFBhdGguY29tcGFyZShwYXRoLCBhbm90aGVyKSA9PT0gMDtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHBhdGggaXMgYSBkZXNjZW5kYW50IG9mIGFub3RoZXIuXHJcbiAgICovXG4gIGlzRGVzY2VuZGFudChwYXRoLCBhbm90aGVyKSB7XG4gICAgcmV0dXJuIHBhdGgubGVuZ3RoID4gYW5vdGhlci5sZW5ndGggJiYgUGF0aC5jb21wYXJlKHBhdGgsIGFub3RoZXIpID09PSAwO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgcGF0aCBpcyB0aGUgcGFyZW50IG9mIGFub3RoZXIuXHJcbiAgICovXG4gIGlzUGFyZW50KHBhdGgsIGFub3RoZXIpIHtcbiAgICByZXR1cm4gcGF0aC5sZW5ndGggKyAxID09PSBhbm90aGVyLmxlbmd0aCAmJiBQYXRoLmNvbXBhcmUocGF0aCwgYW5vdGhlcikgPT09IDA7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaXMgYSB2YWx1ZSBpbXBsZW1lbnRzIHRoZSBgUGF0aGAgaW50ZXJmYWNlLlxyXG4gICAqL1xuICBpc1BhdGgodmFsdWUpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgKHZhbHVlLmxlbmd0aCA9PT0gMCB8fCB0eXBlb2YgdmFsdWVbMF0gPT09ICdudW1iZXInKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHBhdGggaXMgYSBzaWJsaW5nIG9mIGFub3RoZXIuXHJcbiAgICovXG4gIGlzU2libGluZyhwYXRoLCBhbm90aGVyKSB7XG4gICAgaWYgKHBhdGgubGVuZ3RoICE9PSBhbm90aGVyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBhcyA9IHBhdGguc2xpY2UoMCwgLTEpO1xuICAgIHZhciBicyA9IGFub3RoZXIuc2xpY2UoMCwgLTEpO1xuICAgIHZhciBhbCA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgICB2YXIgYmwgPSBhbm90aGVyW2Fub3RoZXIubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIGFsICE9PSBibCAmJiBQYXRoLmVxdWFscyhhcywgYnMpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCBhIGxpc3Qgb2YgcGF0aHMgYXQgZXZlcnkgbGV2ZWwgZG93biB0byBhIHBhdGguIE5vdGU6IHRoaXMgaXMgdGhlIHNhbWVcclxuICAgKiBhcyBgUGF0aC5hbmNlc3RvcnNgLCBidXQgaW5jbHVkaW5nIHRoZSBwYXRoIGl0c2VsZi5cclxuICAgKlxyXG4gICAqIFRoZSBwYXRocyBhcmUgc29ydGVkIGZyb20gc2hhbGxvd2VzdCB0byBkZWVwZXN0LiBIb3dldmVyLCBpZiB0aGUgYHJldmVyc2U6XHJcbiAgICogdHJ1ZWAgb3B0aW9uIGlzIHBhc3NlZCwgdGhleSBhcmUgcmV2ZXJzZWQuXHJcbiAgICovXG4gIGxldmVscyhwYXRoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICByZXZlcnNlID0gZmFsc2VcbiAgICB9ID0gb3B0aW9ucztcbiAgICB2YXIgbGlzdCA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gcGF0aC5sZW5ndGg7IGkrKykge1xuICAgICAgbGlzdC5wdXNoKHBhdGguc2xpY2UoMCwgaSkpO1xuICAgIH1cblxuICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICBsaXN0LnJldmVyc2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdDtcbiAgfSxcblxuICAvKipcclxuICAgKiBHaXZlbiBhIHBhdGgsIGdldCB0aGUgcGF0aCB0byB0aGUgbmV4dCBzaWJsaW5nIG5vZGUuXHJcbiAgICovXG4gIG5leHQocGF0aCkge1xuICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGdldCB0aGUgbmV4dCBwYXRoIG9mIGEgcm9vdCBwYXRoIFtcIi5jb25jYXQocGF0aCwgXCJdLCBiZWNhdXNlIGl0IGhhcyBubyBuZXh0IGluZGV4LlwiKSk7XG4gICAgfVxuXG4gICAgdmFyIGxhc3QgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIHBhdGguc2xpY2UoMCwgLTEpLmNvbmNhdChsYXN0ICsgMSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2l2ZW4gYSBwYXRoLCByZXR1cm4gYSBuZXcgcGF0aCByZWZlcnJpbmcgdG8gdGhlIHBhcmVudCBub2RlIGFib3ZlIGl0LlxyXG4gICAqL1xuICBwYXJlbnQocGF0aCkge1xuICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGdldCB0aGUgcGFyZW50IHBhdGggb2YgdGhlIHJvb3QgcGF0aCBbXCIuY29uY2F0KHBhdGgsIFwiXS5cIikpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXRoLnNsaWNlKDAsIC0xKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBHaXZlbiBhIHBhdGgsIGdldCB0aGUgcGF0aCB0byB0aGUgcHJldmlvdXMgc2libGluZyBub2RlLlxyXG4gICAqL1xuICBwcmV2aW91cyhwYXRoKSB7XG4gICAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZ2V0IHRoZSBwcmV2aW91cyBwYXRoIG9mIGEgcm9vdCBwYXRoIFtcIi5jb25jYXQocGF0aCwgXCJdLCBiZWNhdXNlIGl0IGhhcyBubyBwcmV2aW91cyBpbmRleC5cIikpO1xuICAgIH1cblxuICAgIHZhciBsYXN0ID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKGxhc3QgPD0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGdldCB0aGUgcHJldmlvdXMgcGF0aCBvZiBhIGZpcnN0IGNoaWxkIHBhdGggW1wiLmNvbmNhdChwYXRoLCBcIl0gYmVjYXVzZSBpdCB3b3VsZCByZXN1bHQgaW4gYSBuZWdhdGl2ZSBpbmRleC5cIikpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXRoLnNsaWNlKDAsIC0xKS5jb25jYXQobGFzdCAtIDEpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCBhIHBhdGggcmVsYXRpdmUgdG8gYW4gYW5jZXN0b3IuXHJcbiAgICovXG4gIHJlbGF0aXZlKHBhdGgsIGFuY2VzdG9yKSB7XG4gICAgaWYgKCFQYXRoLmlzQW5jZXN0b3IoYW5jZXN0b3IsIHBhdGgpICYmICFQYXRoLmVxdWFscyhwYXRoLCBhbmNlc3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBnZXQgdGhlIHJlbGF0aXZlIHBhdGggb2YgW1wiLmNvbmNhdChwYXRoLCBcIl0gaW5zaWRlIGFuY2VzdG9yIFtcIikuY29uY2F0KGFuY2VzdG9yLCBcIl0sIGJlY2F1c2UgaXQgaXMgbm90IGFib3ZlIG9yIGVxdWFsIHRvIHRoZSBwYXRoLlwiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGguc2xpY2UoYW5jZXN0b3IubGVuZ3RoKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBUcmFuc2Zvcm0gYSBwYXRoIGJ5IGFuIG9wZXJhdGlvbi5cclxuICAgKi9cbiAgdHJhbnNmb3JtKHBhdGgsIG9wZXJhdGlvbikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICByZXR1cm4gcHJvZHVjZShwYXRoLCBwID0+IHtcbiAgICAgIHZhciB7XG4gICAgICAgIGFmZmluaXR5ID0gJ2ZvcndhcmQnXG4gICAgICB9ID0gb3B0aW9uczsgLy8gUEVSRjogRXhpdCBlYXJseSBpZiB0aGUgb3BlcmF0aW9uIGlzIGd1YXJhbnRlZWQgbm90IHRvIGhhdmUgYW4gZWZmZWN0LlxuXG4gICAgICBpZiAoIXBhdGggfHwgKHBhdGggPT09IG51bGwgfHwgcGF0aCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGF0aC5sZW5ndGgpID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHAgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAob3BlcmF0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnaW5zZXJ0X25vZGUnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhciB7XG4gICAgICAgICAgICAgIHBhdGg6IG9wXG4gICAgICAgICAgICB9ID0gb3BlcmF0aW9uO1xuXG4gICAgICAgICAgICBpZiAoUGF0aC5lcXVhbHMob3AsIHApIHx8IFBhdGguZW5kc0JlZm9yZShvcCwgcCkgfHwgUGF0aC5pc0FuY2VzdG9yKG9wLCBwKSkge1xuICAgICAgICAgICAgICBwW29wLmxlbmd0aCAtIDFdICs9IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdyZW1vdmVfbm9kZSc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIHtcbiAgICAgICAgICAgICAgcGF0aDogX29wXG4gICAgICAgICAgICB9ID0gb3BlcmF0aW9uO1xuXG4gICAgICAgICAgICBpZiAoUGF0aC5lcXVhbHMoX29wLCBwKSB8fCBQYXRoLmlzQW5jZXN0b3IoX29wLCBwKSkge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUGF0aC5lbmRzQmVmb3JlKF9vcCwgcCkpIHtcbiAgICAgICAgICAgICAgcFtfb3AubGVuZ3RoIC0gMV0gLT0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ21lcmdlX25vZGUnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhciB7XG4gICAgICAgICAgICAgIHBhdGg6IF9vcDIsXG4gICAgICAgICAgICAgIHBvc2l0aW9uXG4gICAgICAgICAgICB9ID0gb3BlcmF0aW9uO1xuXG4gICAgICAgICAgICBpZiAoUGF0aC5lcXVhbHMoX29wMiwgcCkgfHwgUGF0aC5lbmRzQmVmb3JlKF9vcDIsIHApKSB7XG4gICAgICAgICAgICAgIHBbX29wMi5sZW5ndGggLSAxXSAtPSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChQYXRoLmlzQW5jZXN0b3IoX29wMiwgcCkpIHtcbiAgICAgICAgICAgICAgcFtfb3AyLmxlbmd0aCAtIDFdIC09IDE7XG4gICAgICAgICAgICAgIHBbX29wMi5sZW5ndGhdICs9IHBvc2l0aW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnc3BsaXRfbm9kZSc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIHtcbiAgICAgICAgICAgICAgcGF0aDogX29wMyxcbiAgICAgICAgICAgICAgcG9zaXRpb246IF9wb3NpdGlvblxuICAgICAgICAgICAgfSA9IG9wZXJhdGlvbjtcblxuICAgICAgICAgICAgaWYgKFBhdGguZXF1YWxzKF9vcDMsIHApKSB7XG4gICAgICAgICAgICAgIGlmIChhZmZpbml0eSA9PT0gJ2ZvcndhcmQnKSB7XG4gICAgICAgICAgICAgICAgcFtwLmxlbmd0aCAtIDFdICs9IDE7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWZmaW5pdHkgPT09ICdiYWNrd2FyZCcpIDsgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUGF0aC5lbmRzQmVmb3JlKF9vcDMsIHApKSB7XG4gICAgICAgICAgICAgIHBbX29wMy5sZW5ndGggLSAxXSArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChQYXRoLmlzQW5jZXN0b3IoX29wMywgcCkgJiYgcGF0aFtfb3AzLmxlbmd0aF0gPj0gX3Bvc2l0aW9uKSB7XG4gICAgICAgICAgICAgIHBbX29wMy5sZW5ndGggLSAxXSArPSAxO1xuICAgICAgICAgICAgICBwW19vcDMubGVuZ3RoXSAtPSBfcG9zaXRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdtb3ZlX25vZGUnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhciB7XG4gICAgICAgICAgICAgIHBhdGg6IF9vcDQsXG4gICAgICAgICAgICAgIG5ld1BhdGg6IG9ucFxuICAgICAgICAgICAgfSA9IG9wZXJhdGlvbjsgLy8gSWYgdGhlIG9sZCBhbmQgbmV3IHBhdGggYXJlIHRoZSBzYW1lLCBpdCdzIGEgbm8tb3AuXG5cbiAgICAgICAgICAgIGlmIChQYXRoLmVxdWFscyhfb3A0LCBvbnApKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFBhdGguaXNBbmNlc3Rvcihfb3A0LCBwKSB8fCBQYXRoLmVxdWFscyhfb3A0LCBwKSkge1xuICAgICAgICAgICAgICB2YXIgY29weSA9IG9ucC5zbGljZSgpO1xuXG4gICAgICAgICAgICAgIGlmIChQYXRoLmVuZHNCZWZvcmUoX29wNCwgb25wKSAmJiBfb3A0Lmxlbmd0aCA8IG9ucC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb3B5W19vcDQubGVuZ3RoIC0gMV0gLT0gMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBjb3B5LmNvbmNhdChwLnNsaWNlKF9vcDQubGVuZ3RoKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFBhdGguaXNTaWJsaW5nKF9vcDQsIG9ucCkgJiYgKFBhdGguaXNBbmNlc3RvcihvbnAsIHApIHx8IFBhdGguZXF1YWxzKG9ucCwgcCkpKSB7XG4gICAgICAgICAgICAgIGlmIChQYXRoLmVuZHNCZWZvcmUoX29wNCwgcCkpIHtcbiAgICAgICAgICAgICAgICBwW19vcDQubGVuZ3RoIC0gMV0gLT0gMTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwW19vcDQubGVuZ3RoIC0gMV0gKz0gMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChQYXRoLmVuZHNCZWZvcmUob25wLCBwKSB8fCBQYXRoLmVxdWFscyhvbnAsIHApIHx8IFBhdGguaXNBbmNlc3RvcihvbnAsIHApKSB7XG4gICAgICAgICAgICAgIGlmIChQYXRoLmVuZHNCZWZvcmUoX29wNCwgcCkpIHtcbiAgICAgICAgICAgICAgICBwW19vcDQubGVuZ3RoIC0gMV0gLT0gMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHBbb25wLmxlbmd0aCAtIDFdICs9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFBhdGguZW5kc0JlZm9yZShfb3A0LCBwKSkge1xuICAgICAgICAgICAgICBpZiAoUGF0aC5lcXVhbHMob25wLCBwKSkge1xuICAgICAgICAgICAgICAgIHBbb25wLmxlbmd0aCAtIDFdICs9IDE7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBwW19vcDQubGVuZ3RoIC0gMV0gLT0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn07XG5cbnZhciBQYXRoUmVmID0ge1xuICAvKipcclxuICAgKiBUcmFuc2Zvcm0gdGhlIHBhdGggcmVmJ3MgY3VycmVudCB2YWx1ZSBieSBhbiBvcGVyYXRpb24uXHJcbiAgICovXG4gIHRyYW5zZm9ybShyZWYsIG9wKSB7XG4gICAgdmFyIHtcbiAgICAgIGN1cnJlbnQsXG4gICAgICBhZmZpbml0eVxuICAgIH0gPSByZWY7XG5cbiAgICBpZiAoY3VycmVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBhdGggPSBQYXRoLnRyYW5zZm9ybShjdXJyZW50LCBvcCwge1xuICAgICAgYWZmaW5pdHlcbiAgICB9KTtcbiAgICByZWYuY3VycmVudCA9IHBhdGg7XG5cbiAgICBpZiAocGF0aCA9PSBudWxsKSB7XG4gICAgICByZWYudW5yZWYoKTtcbiAgICB9XG4gIH1cblxufTtcblxuZnVuY3Rpb24gb3duS2V5cyQ2KG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSB7IHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsgfSBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQ2KHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMkNihPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzJDYoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG52YXIgUG9pbnQgPSB7XG4gIC8qKlxyXG4gICAqIENvbXBhcmUgYSBwb2ludCB0byBhbm90aGVyLCByZXR1cm5pbmcgYW4gaW50ZWdlciBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlXHJcbiAgICogcG9pbnQgd2FzIGJlZm9yZSwgYXQsIG9yIGFmdGVyIHRoZSBvdGhlci5cclxuICAgKi9cbiAgY29tcGFyZShwb2ludCwgYW5vdGhlcikge1xuICAgIHZhciByZXN1bHQgPSBQYXRoLmNvbXBhcmUocG9pbnQucGF0aCwgYW5vdGhlci5wYXRoKTtcblxuICAgIGlmIChyZXN1bHQgPT09IDApIHtcbiAgICAgIGlmIChwb2ludC5vZmZzZXQgPCBhbm90aGVyLm9mZnNldCkgcmV0dXJuIC0xO1xuICAgICAgaWYgKHBvaW50Lm9mZnNldCA+IGFub3RoZXIub2Zmc2V0KSByZXR1cm4gMTtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBwb2ludCBpcyBhZnRlciBhbm90aGVyLlxyXG4gICAqL1xuICBpc0FmdGVyKHBvaW50LCBhbm90aGVyKSB7XG4gICAgcmV0dXJuIFBvaW50LmNvbXBhcmUocG9pbnQsIGFub3RoZXIpID09PSAxO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgcG9pbnQgaXMgYmVmb3JlIGFub3RoZXIuXHJcbiAgICovXG4gIGlzQmVmb3JlKHBvaW50LCBhbm90aGVyKSB7XG4gICAgcmV0dXJuIFBvaW50LmNvbXBhcmUocG9pbnQsIGFub3RoZXIpID09PSAtMTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHBvaW50IGlzIGV4YWN0bHkgZXF1YWwgdG8gYW5vdGhlci5cclxuICAgKi9cbiAgZXF1YWxzKHBvaW50LCBhbm90aGVyKSB7XG4gICAgLy8gUEVSRjogZW5zdXJlIHRoZSBvZmZzZXRzIGFyZSBlcXVhbCBmaXJzdCBzaW5jZSB0aGV5IGFyZSBjaGVhcGVyIHRvIGNoZWNrLlxuICAgIHJldHVybiBwb2ludC5vZmZzZXQgPT09IGFub3RoZXIub2Zmc2V0ICYmIFBhdGguZXF1YWxzKHBvaW50LnBhdGgsIGFub3RoZXIucGF0aCk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSB2YWx1ZSBpbXBsZW1lbnRzIHRoZSBgUG9pbnRgIGludGVyZmFjZS5cclxuICAgKi9cbiAgaXNQb2ludCh2YWx1ZSkge1xuICAgIHJldHVybiBpc1BsYWluT2JqZWN0KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUub2Zmc2V0ID09PSAnbnVtYmVyJyAmJiBQYXRoLmlzUGF0aCh2YWx1ZS5wYXRoKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBUcmFuc2Zvcm0gYSBwb2ludCBieSBhbiBvcGVyYXRpb24uXHJcbiAgICovXG4gIHRyYW5zZm9ybShwb2ludCwgb3ApIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgcmV0dXJuIHByb2R1Y2UocG9pbnQsIHAgPT4ge1xuICAgICAgaWYgKHAgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciB7XG4gICAgICAgIGFmZmluaXR5ID0gJ2ZvcndhcmQnXG4gICAgICB9ID0gb3B0aW9ucztcbiAgICAgIHZhciB7XG4gICAgICAgIHBhdGgsXG4gICAgICAgIG9mZnNldFxuICAgICAgfSA9IHA7XG5cbiAgICAgIHN3aXRjaCAob3AudHlwZSkge1xuICAgICAgICBjYXNlICdpbnNlcnRfbm9kZSc6XG4gICAgICAgIGNhc2UgJ21vdmVfbm9kZSc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgcC5wYXRoID0gUGF0aC50cmFuc2Zvcm0ocGF0aCwgb3AsIG9wdGlvbnMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ2luc2VydF90ZXh0JzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZiAoUGF0aC5lcXVhbHMob3AucGF0aCwgcGF0aCkgJiYgb3Aub2Zmc2V0IDw9IG9mZnNldCkge1xuICAgICAgICAgICAgICBwLm9mZnNldCArPSBvcC50ZXh0Lmxlbmd0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ21lcmdlX25vZGUnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlmIChQYXRoLmVxdWFscyhvcC5wYXRoLCBwYXRoKSkge1xuICAgICAgICAgICAgICBwLm9mZnNldCArPSBvcC5wb3NpdGlvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcC5wYXRoID0gUGF0aC50cmFuc2Zvcm0ocGF0aCwgb3AsIG9wdGlvbnMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ3JlbW92ZV90ZXh0JzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZiAoUGF0aC5lcXVhbHMob3AucGF0aCwgcGF0aCkgJiYgb3Aub2Zmc2V0IDw9IG9mZnNldCkge1xuICAgICAgICAgICAgICBwLm9mZnNldCAtPSBNYXRoLm1pbihvZmZzZXQgLSBvcC5vZmZzZXQsIG9wLnRleHQubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ3JlbW92ZV9ub2RlJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZiAoUGF0aC5lcXVhbHMob3AucGF0aCwgcGF0aCkgfHwgUGF0aC5pc0FuY2VzdG9yKG9wLnBhdGgsIHBhdGgpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwLnBhdGggPSBQYXRoLnRyYW5zZm9ybShwYXRoLCBvcCwgb3B0aW9ucyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnc3BsaXRfbm9kZSc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgaWYgKFBhdGguZXF1YWxzKG9wLnBhdGgsIHBhdGgpKSB7XG4gICAgICAgICAgICAgIGlmIChvcC5wb3NpdGlvbiA9PT0gb2Zmc2V0ICYmIGFmZmluaXR5ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcC5wb3NpdGlvbiA8IG9mZnNldCB8fCBvcC5wb3NpdGlvbiA9PT0gb2Zmc2V0ICYmIGFmZmluaXR5ID09PSAnZm9yd2FyZCcpIHtcbiAgICAgICAgICAgICAgICBwLm9mZnNldCAtPSBvcC5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBwLnBhdGggPSBQYXRoLnRyYW5zZm9ybShwYXRoLCBvcCwgX29iamVjdFNwcmVhZCQ2KF9vYmplY3RTcHJlYWQkNih7fSwgb3B0aW9ucyksIHt9LCB7XG4gICAgICAgICAgICAgICAgICBhZmZpbml0eTogJ2ZvcndhcmQnXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwLnBhdGggPSBQYXRoLnRyYW5zZm9ybShwYXRoLCBvcCwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59O1xuXG52YXIgUG9pbnRSZWYgPSB7XG4gIC8qKlxyXG4gICAqIFRyYW5zZm9ybSB0aGUgcG9pbnQgcmVmJ3MgY3VycmVudCB2YWx1ZSBieSBhbiBvcGVyYXRpb24uXHJcbiAgICovXG4gIHRyYW5zZm9ybShyZWYsIG9wKSB7XG4gICAgdmFyIHtcbiAgICAgIGN1cnJlbnQsXG4gICAgICBhZmZpbml0eVxuICAgIH0gPSByZWY7XG5cbiAgICBpZiAoY3VycmVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBvaW50ID0gUG9pbnQudHJhbnNmb3JtKGN1cnJlbnQsIG9wLCB7XG4gICAgICBhZmZpbml0eVxuICAgIH0pO1xuICAgIHJlZi5jdXJyZW50ID0gcG9pbnQ7XG5cbiAgICBpZiAocG9pbnQgPT0gbnVsbCkge1xuICAgICAgcmVmLnVucmVmKCk7XG4gICAgfVxuICB9XG5cbn07XG5cbnZhciBfZXhjbHVkZWQkMiA9IFtcImFuY2hvclwiLCBcImZvY3VzXCJdO1xuXG5mdW5jdGlvbiBvd25LZXlzJDUob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDUodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQ1KE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkNShPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cbnZhciBSYW5nZSA9IHtcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBzdGFydCBhbmQgZW5kIHBvaW50cyBvZiBhIHJhbmdlLCBpbiB0aGUgb3JkZXIgaW4gd2hpY2ggdGhleSBhcHBlYXJcclxuICAgKiBpbiB0aGUgZG9jdW1lbnQuXHJcbiAgICovXG4gIGVkZ2VzKHJhbmdlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICByZXZlcnNlID0gZmFsc2VcbiAgICB9ID0gb3B0aW9ucztcbiAgICB2YXIge1xuICAgICAgYW5jaG9yLFxuICAgICAgZm9jdXNcbiAgICB9ID0gcmFuZ2U7XG4gICAgcmV0dXJuIFJhbmdlLmlzQmFja3dhcmQocmFuZ2UpID09PSByZXZlcnNlID8gW2FuY2hvciwgZm9jdXNdIDogW2ZvY3VzLCBhbmNob3JdO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgZW5kIHBvaW50IG9mIGEgcmFuZ2UuXHJcbiAgICovXG4gIGVuZChyYW5nZSkge1xuICAgIHZhciBbLCBlbmRdID0gUmFuZ2UuZWRnZXMocmFuZ2UpO1xuICAgIHJldHVybiBlbmQ7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSByYW5nZSBpcyBleGFjdGx5IGVxdWFsIHRvIGFub3RoZXIuXHJcbiAgICovXG4gIGVxdWFscyhyYW5nZSwgYW5vdGhlcikge1xuICAgIHJldHVybiBQb2ludC5lcXVhbHMocmFuZ2UuYW5jaG9yLCBhbm90aGVyLmFuY2hvcikgJiYgUG9pbnQuZXF1YWxzKHJhbmdlLmZvY3VzLCBhbm90aGVyLmZvY3VzKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHJhbmdlIGluY2x1ZGVzIGEgcGF0aCwgYSBwb2ludCBvciBwYXJ0IG9mIGFub3RoZXIgcmFuZ2UuXHJcbiAgICovXG4gIGluY2x1ZGVzKHJhbmdlLCB0YXJnZXQpIHtcbiAgICBpZiAoUmFuZ2UuaXNSYW5nZSh0YXJnZXQpKSB7XG4gICAgICBpZiAoUmFuZ2UuaW5jbHVkZXMocmFuZ2UsIHRhcmdldC5hbmNob3IpIHx8IFJhbmdlLmluY2x1ZGVzKHJhbmdlLCB0YXJnZXQuZm9jdXMpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgW3JzLCByZV0gPSBSYW5nZS5lZGdlcyhyYW5nZSk7XG4gICAgICB2YXIgW3RzLCB0ZV0gPSBSYW5nZS5lZGdlcyh0YXJnZXQpO1xuICAgICAgcmV0dXJuIFBvaW50LmlzQmVmb3JlKHJzLCB0cykgJiYgUG9pbnQuaXNBZnRlcihyZSwgdGUpO1xuICAgIH1cblxuICAgIHZhciBbc3RhcnQsIGVuZF0gPSBSYW5nZS5lZGdlcyhyYW5nZSk7XG4gICAgdmFyIGlzQWZ0ZXJTdGFydCA9IGZhbHNlO1xuICAgIHZhciBpc0JlZm9yZUVuZCA9IGZhbHNlO1xuXG4gICAgaWYgKFBvaW50LmlzUG9pbnQodGFyZ2V0KSkge1xuICAgICAgaXNBZnRlclN0YXJ0ID0gUG9pbnQuY29tcGFyZSh0YXJnZXQsIHN0YXJ0KSA+PSAwO1xuICAgICAgaXNCZWZvcmVFbmQgPSBQb2ludC5jb21wYXJlKHRhcmdldCwgZW5kKSA8PSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBpc0FmdGVyU3RhcnQgPSBQYXRoLmNvbXBhcmUodGFyZ2V0LCBzdGFydC5wYXRoKSA+PSAwO1xuICAgICAgaXNCZWZvcmVFbmQgPSBQYXRoLmNvbXBhcmUodGFyZ2V0LCBlbmQucGF0aCkgPD0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNBZnRlclN0YXJ0ICYmIGlzQmVmb3JlRW5kO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgaW50ZXJzZWN0aW9uIG9mIGEgcmFuZ2Ugd2l0aCBhbm90aGVyLlxyXG4gICAqL1xuICBpbnRlcnNlY3Rpb24ocmFuZ2UsIGFub3RoZXIpIHtcbiAgICB2YXIgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhyYW5nZSwgX2V4Y2x1ZGVkJDIpO1xuXG4gICAgdmFyIFtzMSwgZTFdID0gUmFuZ2UuZWRnZXMocmFuZ2UpO1xuICAgIHZhciBbczIsIGUyXSA9IFJhbmdlLmVkZ2VzKGFub3RoZXIpO1xuICAgIHZhciBzdGFydCA9IFBvaW50LmlzQmVmb3JlKHMxLCBzMikgPyBzMiA6IHMxO1xuICAgIHZhciBlbmQgPSBQb2ludC5pc0JlZm9yZShlMSwgZTIpID8gZTEgOiBlMjtcblxuICAgIGlmIChQb2ludC5pc0JlZm9yZShlbmQsIHN0YXJ0KSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkJDUoe1xuICAgICAgICBhbmNob3I6IHN0YXJ0LFxuICAgICAgICBmb2N1czogZW5kXG4gICAgICB9LCByZXN0KTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSByYW5nZSBpcyBiYWNrd2FyZCwgbWVhbmluZyB0aGF0IGl0cyBhbmNob3IgcG9pbnQgYXBwZWFycyBpbiB0aGVcclxuICAgKiBkb2N1bWVudCBfYWZ0ZXJfIGl0cyBmb2N1cyBwb2ludC5cclxuICAgKi9cbiAgaXNCYWNrd2FyZChyYW5nZSkge1xuICAgIHZhciB7XG4gICAgICBhbmNob3IsXG4gICAgICBmb2N1c1xuICAgIH0gPSByYW5nZTtcbiAgICByZXR1cm4gUG9pbnQuaXNBZnRlcihhbmNob3IsIGZvY3VzKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHJhbmdlIGlzIGNvbGxhcHNlZCwgbWVhbmluZyB0aGF0IGJvdGggaXRzIGFuY2hvciBhbmQgZm9jdXNcclxuICAgKiBwb2ludHMgcmVmZXIgdG8gdGhlIGV4YWN0IHNhbWUgcG9zaXRpb24gaW4gdGhlIGRvY3VtZW50LlxyXG4gICAqL1xuICBpc0NvbGxhcHNlZChyYW5nZSkge1xuICAgIHZhciB7XG4gICAgICBhbmNob3IsXG4gICAgICBmb2N1c1xuICAgIH0gPSByYW5nZTtcbiAgICByZXR1cm4gUG9pbnQuZXF1YWxzKGFuY2hvciwgZm9jdXMpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgcmFuZ2UgaXMgZXhwYW5kZWQuXHJcbiAgICpcclxuICAgKiBUaGlzIGlzIHRoZSBvcHBvc2l0ZSBvZiBbW1JhbmdlLmlzQ29sbGFwc2VkXV0gYW5kIGlzIHByb3ZpZGVkIGZvciBsZWdpYmlsaXR5LlxyXG4gICAqL1xuICBpc0V4cGFuZGVkKHJhbmdlKSB7XG4gICAgcmV0dXJuICFSYW5nZS5pc0NvbGxhcHNlZChyYW5nZSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSByYW5nZSBpcyBmb3J3YXJkLlxyXG4gICAqXHJcbiAgICogVGhpcyBpcyB0aGUgb3Bwb3NpdGUgb2YgW1tSYW5nZS5pc0JhY2t3YXJkXV0gYW5kIGlzIHByb3ZpZGVkIGZvciBsZWdpYmlsaXR5LlxyXG4gICAqL1xuICBpc0ZvcndhcmQocmFuZ2UpIHtcbiAgICByZXR1cm4gIVJhbmdlLmlzQmFja3dhcmQocmFuZ2UpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaW1wbGVtZW50cyB0aGUgW1tSYW5nZV1dIGludGVyZmFjZS5cclxuICAgKi9cbiAgaXNSYW5nZSh2YWx1ZSkge1xuICAgIHJldHVybiBpc1BsYWluT2JqZWN0KHZhbHVlKSAmJiBQb2ludC5pc1BvaW50KHZhbHVlLmFuY2hvcikgJiYgUG9pbnQuaXNQb2ludCh2YWx1ZS5mb2N1cyk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogSXRlcmF0ZSB0aHJvdWdoIGFsbCBvZiB0aGUgcG9pbnQgZW50cmllcyBpbiBhIHJhbmdlLlxyXG4gICAqL1xuICAqcG9pbnRzKHJhbmdlKSB7XG4gICAgeWllbGQgW3JhbmdlLmFuY2hvciwgJ2FuY2hvciddO1xuICAgIHlpZWxkIFtyYW5nZS5mb2N1cywgJ2ZvY3VzJ107XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBzdGFydCBwb2ludCBvZiBhIHJhbmdlLlxyXG4gICAqL1xuICBzdGFydChyYW5nZSkge1xuICAgIHZhciBbc3RhcnRdID0gUmFuZ2UuZWRnZXMocmFuZ2UpO1xuICAgIHJldHVybiBzdGFydDtcbiAgfSxcblxuICAvKipcclxuICAgKiBUcmFuc2Zvcm0gYSByYW5nZSBieSBhbiBvcGVyYXRpb24uXHJcbiAgICovXG4gIHRyYW5zZm9ybShyYW5nZSwgb3ApIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgcmV0dXJuIHByb2R1Y2UocmFuZ2UsIHIgPT4ge1xuICAgICAgaWYgKHIgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciB7XG4gICAgICAgIGFmZmluaXR5ID0gJ2lud2FyZCdcbiAgICAgIH0gPSBvcHRpb25zO1xuICAgICAgdmFyIGFmZmluaXR5QW5jaG9yO1xuICAgICAgdmFyIGFmZmluaXR5Rm9jdXM7XG5cbiAgICAgIGlmIChhZmZpbml0eSA9PT0gJ2lud2FyZCcpIHtcbiAgICAgICAgLy8gSWYgdGhlIHJhbmdlIGlzIGNvbGxhcHNlZCwgbWFrZSBzdXJlIHRvIHVzZSB0aGUgc2FtZSBhZmZpbml0eSB0b1xuICAgICAgICAvLyBhdm9pZCB0aGUgdHdvIHBvaW50cyBwYXNzaW5nIGVhY2ggb3RoZXIgYW5kIGV4cGFuZGluZyBpbiB0aGUgb3Bwb3NpdGVcbiAgICAgICAgLy8gZGlyZWN0aW9uXG4gICAgICAgIHZhciBpc0NvbGxhcHNlZCA9IFJhbmdlLmlzQ29sbGFwc2VkKHIpO1xuXG4gICAgICAgIGlmIChSYW5nZS5pc0ZvcndhcmQocikpIHtcbiAgICAgICAgICBhZmZpbml0eUFuY2hvciA9ICdmb3J3YXJkJztcbiAgICAgICAgICBhZmZpbml0eUZvY3VzID0gaXNDb2xsYXBzZWQgPyBhZmZpbml0eUFuY2hvciA6ICdiYWNrd2FyZCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWZmaW5pdHlBbmNob3IgPSAnYmFja3dhcmQnO1xuICAgICAgICAgIGFmZmluaXR5Rm9jdXMgPSBpc0NvbGxhcHNlZCA/IGFmZmluaXR5QW5jaG9yIDogJ2ZvcndhcmQnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGFmZmluaXR5ID09PSAnb3V0d2FyZCcpIHtcbiAgICAgICAgaWYgKFJhbmdlLmlzRm9yd2FyZChyKSkge1xuICAgICAgICAgIGFmZmluaXR5QW5jaG9yID0gJ2JhY2t3YXJkJztcbiAgICAgICAgICBhZmZpbml0eUZvY3VzID0gJ2ZvcndhcmQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFmZmluaXR5QW5jaG9yID0gJ2ZvcndhcmQnO1xuICAgICAgICAgIGFmZmluaXR5Rm9jdXMgPSAnYmFja3dhcmQnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZmZpbml0eUFuY2hvciA9IGFmZmluaXR5O1xuICAgICAgICBhZmZpbml0eUZvY3VzID0gYWZmaW5pdHk7XG4gICAgICB9XG5cbiAgICAgIHZhciBhbmNob3IgPSBQb2ludC50cmFuc2Zvcm0oci5hbmNob3IsIG9wLCB7XG4gICAgICAgIGFmZmluaXR5OiBhZmZpbml0eUFuY2hvclxuICAgICAgfSk7XG4gICAgICB2YXIgZm9jdXMgPSBQb2ludC50cmFuc2Zvcm0oci5mb2N1cywgb3AsIHtcbiAgICAgICAgYWZmaW5pdHk6IGFmZmluaXR5Rm9jdXNcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWFuY2hvciB8fCAhZm9jdXMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHIuYW5jaG9yID0gYW5jaG9yO1xuICAgICAgci5mb2N1cyA9IGZvY3VzO1xuICAgIH0pO1xuICB9XG5cbn07XG5cbnZhciBSYW5nZVJlZiA9IHtcbiAgLyoqXHJcbiAgICogVHJhbnNmb3JtIHRoZSByYW5nZSByZWYncyBjdXJyZW50IHZhbHVlIGJ5IGFuIG9wZXJhdGlvbi5cclxuICAgKi9cbiAgdHJhbnNmb3JtKHJlZiwgb3ApIHtcbiAgICB2YXIge1xuICAgICAgY3VycmVudCxcbiAgICAgIGFmZmluaXR5XG4gICAgfSA9IHJlZjtcblxuICAgIGlmIChjdXJyZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcGF0aCA9IFJhbmdlLnRyYW5zZm9ybShjdXJyZW50LCBvcCwge1xuICAgICAgYWZmaW5pdHlcbiAgICB9KTtcbiAgICByZWYuY3VycmVudCA9IHBhdGg7XG5cbiAgICBpZiAocGF0aCA9PSBudWxsKSB7XG4gICAgICByZWYudW5yZWYoKTtcbiAgICB9XG4gIH1cblxufTtcblxuLypcclxuICBDdXN0b20gZGVlcCBlcXVhbCBjb21wYXJpc29uIGZvciBTbGF0ZSBub2Rlcy5cclxuXG4gIFdlIGRvbid0IG5lZWQgZ2VuZXJhbCBwdXJwb3NlIGRlZXAgZXF1YWxpdHk7XHJcbiAgU2xhdGUgb25seSBzdXBwb3J0cyBwbGFpbiB2YWx1ZXMsIEFycmF5cywgYW5kIG5lc3RlZCBvYmplY3RzLlxyXG4gIENvbXBsZXggdmFsdWVzIG5lc3RlZCBpbnNpZGUgQXJyYXlzIGFyZSBub3Qgc3VwcG9ydGVkLlxyXG5cbiAgU2xhdGUgb2JqZWN0cyBhcmUgZGVzaWduZWQgdG8gYmUgc2VyaWFsaXNlZCwgc29cclxuICBtaXNzaW5nIGtleXMgYXJlIGRlbGliZXJhdGVseSBub3JtYWxpc2VkIHRvIHVuZGVmaW5lZC5cclxuICovXG5cbnZhciBpc0RlZXBFcXVhbCA9IChub2RlLCBhbm90aGVyKSA9PiB7XG4gIGZvciAodmFyIGtleSBpbiBub2RlKSB7XG4gICAgdmFyIGEgPSBub2RlW2tleV07XG4gICAgdmFyIGIgPSBhbm90aGVyW2tleV07XG5cbiAgICBpZiAoaXNQbGFpbk9iamVjdChhKSAmJiBpc1BsYWluT2JqZWN0KGIpKSB7XG4gICAgICBpZiAoIWlzRGVlcEVxdWFsKGEsIGIpKSByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGEpICYmIEFycmF5LmlzQXJyYXkoYikpIHtcbiAgICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhW2ldICE9PSBiW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoYSAhPT0gYikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICAvKlxyXG4gICAgRGVlcCBvYmplY3QgZXF1YWxpdHkgaXMgb25seSBuZWNlc3NhcnkgaW4gb25lIGRpcmVjdGlvbjsgaW4gdGhlIHJldmVyc2UgZGlyZWN0aW9uXHJcbiAgICB3ZSBhcmUgb25seSBsb29raW5nIGZvciBrZXlzIHRoYXQgYXJlIG1pc3NpbmcuXHJcbiAgICBBcyBhYm92ZSwgdW5kZWZpbmVkIGtleXMgYXJlIG5vcm1hbGlzZWQgdG8gbWlzc2luZy5cclxuICAqL1xuXG5cbiAgZm9yICh2YXIgX2tleSBpbiBhbm90aGVyKSB7XG4gICAgaWYgKG5vZGVbX2tleV0gPT09IHVuZGVmaW5lZCAmJiBhbm90aGVyW19rZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbnZhciBfZXhjbHVkZWQkMSA9IFtcInRleHRcIl0sXG4gICAgX2V4Y2x1ZGVkMiQxID0gW1wiYW5jaG9yXCIsIFwiZm9jdXNcIl07XG5cbmZ1bmN0aW9uIG93bktleXMkNChvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgeyBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IH0ga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkNCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzJDQoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyQ0KE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxudmFyIFRleHQgPSB7XG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIHR3byB0ZXh0IG5vZGVzIGFyZSBlcXVhbC5cclxuICAgKlxyXG4gICAqIFdoZW4gbG9vc2UgaXMgc2V0LCB0aGUgdGV4dCBpcyBub3QgY29tcGFyZWQuIFRoaXMgaXNcclxuICAgKiB1c2VkIHRvIGNoZWNrIHdoZXRoZXIgc2libGluZyB0ZXh0IG5vZGVzIGNhbiBiZSBtZXJnZWQuXHJcbiAgICovXG4gIGVxdWFscyh0ZXh0LCBhbm90aGVyKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICBsb29zZSA9IGZhbHNlXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICBmdW5jdGlvbiBvbWl0VGV4dChvYmopIHtcbiAgICAgIHZhciByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwgX2V4Y2x1ZGVkJDEpO1xuXG4gICAgICByZXR1cm4gcmVzdDtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNEZWVwRXF1YWwobG9vc2UgPyBvbWl0VGV4dCh0ZXh0KSA6IHRleHQsIGxvb3NlID8gb21pdFRleHQoYW5vdGhlcikgOiBhbm90aGVyKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGltcGxlbWVudHMgdGhlIGBUZXh0YCBpbnRlcmZhY2UuXHJcbiAgICovXG4gIGlzVGV4dCh2YWx1ZSkge1xuICAgIHJldHVybiBpc1BsYWluT2JqZWN0KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUudGV4dCA9PT0gJ3N0cmluZyc7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhIGxpc3Qgb2YgYFRleHRgIG9iamVjdHMuXHJcbiAgICovXG4gIGlzVGV4dExpc3QodmFsdWUpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUuZXZlcnkodmFsID0+IFRleHQuaXNUZXh0KHZhbCkpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIHNvbWUgcHJvcHMgYXJlIGEgcGFydGlhbCBvZiBUZXh0LlxyXG4gICAqL1xuICBpc1RleHRQcm9wcyhwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy50ZXh0ICE9PSB1bmRlZmluZWQ7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYW4gdGV4dCBtYXRjaGVzIHNldCBvZiBwcm9wZXJ0aWVzLlxyXG4gICAqXHJcbiAgICogTm90ZTogdGhpcyBpcyBmb3IgbWF0Y2hpbmcgY3VzdG9tIHByb3BlcnRpZXMsIGFuZCBpdCBkb2VzIG5vdCBlbnN1cmUgdGhhdFxyXG4gICAqIHRoZSBgdGV4dGAgcHJvcGVydHkgYXJlIHR3byBub2RlcyBlcXVhbC5cclxuICAgKi9cbiAgbWF0Y2hlcyh0ZXh0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgaWYgKGtleSA9PT0gJ3RleHQnKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRleHQuaGFzT3duUHJvcGVydHkoa2V5KSB8fCB0ZXh0W2tleV0gIT09IHByb3BzW2tleV0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgbGVhdmVzIGZvciBhIHRleHQgbm9kZSBnaXZlbiBkZWNvcmF0aW9ucy5cclxuICAgKi9cbiAgZGVjb3JhdGlvbnMobm9kZSwgZGVjb3JhdGlvbnMpIHtcbiAgICB2YXIgbGVhdmVzID0gW19vYmplY3RTcHJlYWQkNCh7fSwgbm9kZSldO1xuXG4gICAgZm9yICh2YXIgZGVjIG9mIGRlY29yYXRpb25zKSB7XG4gICAgICB2YXIgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhkZWMsIF9leGNsdWRlZDIkMSk7XG5cbiAgICAgIHZhciBbc3RhcnQsIGVuZF0gPSBSYW5nZS5lZGdlcyhkZWMpO1xuICAgICAgdmFyIG5leHQgPSBbXTtcbiAgICAgIHZhciBvID0gMDtcblxuICAgICAgZm9yICh2YXIgbGVhZiBvZiBsZWF2ZXMpIHtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBsZW5ndGhcbiAgICAgICAgfSA9IGxlYWYudGV4dDtcbiAgICAgICAgdmFyIG9mZnNldCA9IG87XG4gICAgICAgIG8gKz0gbGVuZ3RoOyAvLyBJZiB0aGUgcmFuZ2UgZW5jb21wYXNlcyB0aGUgZW50aXJlIGxlYWYsIGFkZCB0aGUgcmFuZ2UuXG5cbiAgICAgICAgaWYgKHN0YXJ0Lm9mZnNldCA8PSBvZmZzZXQgJiYgZW5kLm9mZnNldCA+PSBvKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihsZWFmLCByZXN0KTtcbiAgICAgICAgICBuZXh0LnB1c2gobGVhZik7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gLy8gSWYgdGhlIHJhbmdlIGV4cGFuZGVkIGFuZCBtYXRjaCB0aGUgbGVhZiwgb3Igc3RhcnRzIGFmdGVyLCBvciBlbmRzIGJlZm9yZSBpdCwgY29udGludWUuXG5cblxuICAgICAgICBpZiAoc3RhcnQub2Zmc2V0ICE9PSBlbmQub2Zmc2V0ICYmIChzdGFydC5vZmZzZXQgPT09IG8gfHwgZW5kLm9mZnNldCA9PT0gb2Zmc2V0KSB8fCBzdGFydC5vZmZzZXQgPiBvIHx8IGVuZC5vZmZzZXQgPCBvZmZzZXQgfHwgZW5kLm9mZnNldCA9PT0gb2Zmc2V0ICYmIG9mZnNldCAhPT0gMCkge1xuICAgICAgICAgIG5leHQucHVzaChsZWFmKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSAvLyBPdGhlcndpc2Ugd2UgbmVlZCB0byBzcGxpdCB0aGUgbGVhZiwgYXQgdGhlIHN0YXJ0LCBlbmQsIG9yIGJvdGgsXG4gICAgICAgIC8vIGFuZCBhZGQgdGhlIHJhbmdlIHRvIHRoZSBtaWRkbGUgaW50ZXJzZWN0aW5nIHNlY3Rpb24uIERvIHRoZSBlbmRcbiAgICAgICAgLy8gc3BsaXQgZmlyc3Qgc2luY2Ugd2UgZG9uJ3QgbmVlZCB0byB1cGRhdGUgdGhlIG9mZnNldCB0aGF0IHdheS5cblxuXG4gICAgICAgIHZhciBtaWRkbGUgPSBsZWFmO1xuICAgICAgICB2YXIgYmVmb3JlID0gdm9pZCAwO1xuICAgICAgICB2YXIgYWZ0ZXIgPSB2b2lkIDA7XG5cbiAgICAgICAgaWYgKGVuZC5vZmZzZXQgPCBvKSB7XG4gICAgICAgICAgdmFyIG9mZiA9IGVuZC5vZmZzZXQgLSBvZmZzZXQ7XG4gICAgICAgICAgYWZ0ZXIgPSBfb2JqZWN0U3ByZWFkJDQoX29iamVjdFNwcmVhZCQ0KHt9LCBtaWRkbGUpLCB7fSwge1xuICAgICAgICAgICAgdGV4dDogbWlkZGxlLnRleHQuc2xpY2Uob2ZmKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG1pZGRsZSA9IF9vYmplY3RTcHJlYWQkNChfb2JqZWN0U3ByZWFkJDQoe30sIG1pZGRsZSksIHt9LCB7XG4gICAgICAgICAgICB0ZXh0OiBtaWRkbGUudGV4dC5zbGljZSgwLCBvZmYpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhcnQub2Zmc2V0ID4gb2Zmc2V0KSB7XG4gICAgICAgICAgdmFyIF9vZmYgPSBzdGFydC5vZmZzZXQgLSBvZmZzZXQ7XG5cbiAgICAgICAgICBiZWZvcmUgPSBfb2JqZWN0U3ByZWFkJDQoX29iamVjdFNwcmVhZCQ0KHt9LCBtaWRkbGUpLCB7fSwge1xuICAgICAgICAgICAgdGV4dDogbWlkZGxlLnRleHQuc2xpY2UoMCwgX29mZilcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBtaWRkbGUgPSBfb2JqZWN0U3ByZWFkJDQoX29iamVjdFNwcmVhZCQ0KHt9LCBtaWRkbGUpLCB7fSwge1xuICAgICAgICAgICAgdGV4dDogbWlkZGxlLnRleHQuc2xpY2UoX29mZilcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5hc3NpZ24obWlkZGxlLCByZXN0KTtcblxuICAgICAgICBpZiAoYmVmb3JlKSB7XG4gICAgICAgICAgbmV4dC5wdXNoKGJlZm9yZSk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXh0LnB1c2gobWlkZGxlKTtcblxuICAgICAgICBpZiAoYWZ0ZXIpIHtcbiAgICAgICAgICBuZXh0LnB1c2goYWZ0ZXIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxlYXZlcyA9IG5leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlYXZlcztcbiAgfVxuXG59O1xuXG5mdW5jdGlvbiBvd25LZXlzJDMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDModGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkMyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIGFwcGx5VG9EcmFmdCA9IChlZGl0b3IsIHNlbGVjdGlvbiwgb3ApID0+IHtcbiAgc3dpdGNoIChvcC50eXBlKSB7XG4gICAgY2FzZSAnaW5zZXJ0X25vZGUnOlxuICAgICAge1xuICAgICAgICB2YXIge1xuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgbm9kZVxuICAgICAgICB9ID0gb3A7XG4gICAgICAgIHZhciBwYXJlbnQgPSBOb2RlLnBhcmVudChlZGl0b3IsIHBhdGgpO1xuICAgICAgICB2YXIgaW5kZXggPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgaWYgKGluZGV4ID4gcGFyZW50LmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBhcHBseSBhbiBcXFwiaW5zZXJ0X25vZGVcXFwiIG9wZXJhdGlvbiBhdCBwYXRoIFtcIi5jb25jYXQocGF0aCwgXCJdIGJlY2F1c2UgdGhlIGRlc3RpbmF0aW9uIGlzIHBhc3QgdGhlIGVuZCBvZiB0aGUgbm9kZS5cIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMCwgbm9kZSk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgIGZvciAodmFyIFtwb2ludCwga2V5XSBvZiBSYW5nZS5wb2ludHMoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgc2VsZWN0aW9uW2tleV0gPSBQb2ludC50cmFuc2Zvcm0ocG9pbnQsIG9wKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIGNhc2UgJ2luc2VydF90ZXh0JzpcbiAgICAgIHtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBwYXRoOiBfcGF0aCxcbiAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgdGV4dFxuICAgICAgICB9ID0gb3A7XG4gICAgICAgIGlmICh0ZXh0Lmxlbmd0aCA9PT0gMCkgYnJlYWs7XG5cbiAgICAgICAgdmFyIF9ub2RlID0gTm9kZS5sZWFmKGVkaXRvciwgX3BhdGgpO1xuXG4gICAgICAgIHZhciBiZWZvcmUgPSBfbm9kZS50ZXh0LnNsaWNlKDAsIG9mZnNldCk7XG5cbiAgICAgICAgdmFyIGFmdGVyID0gX25vZGUudGV4dC5zbGljZShvZmZzZXQpO1xuXG4gICAgICAgIF9ub2RlLnRleHQgPSBiZWZvcmUgKyB0ZXh0ICsgYWZ0ZXI7XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgIGZvciAodmFyIFtfcG9pbnQsIF9rZXldIG9mIFJhbmdlLnBvaW50cyhzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICBzZWxlY3Rpb25bX2tleV0gPSBQb2ludC50cmFuc2Zvcm0oX3BvaW50LCBvcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICBjYXNlICdtZXJnZV9ub2RlJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBwYXRoOiBfcGF0aDJcbiAgICAgICAgfSA9IG9wO1xuXG4gICAgICAgIHZhciBfbm9kZTIgPSBOb2RlLmdldChlZGl0b3IsIF9wYXRoMik7XG5cbiAgICAgICAgdmFyIHByZXZQYXRoID0gUGF0aC5wcmV2aW91cyhfcGF0aDIpO1xuICAgICAgICB2YXIgcHJldiA9IE5vZGUuZ2V0KGVkaXRvciwgcHJldlBhdGgpO1xuXG4gICAgICAgIHZhciBfcGFyZW50ID0gTm9kZS5wYXJlbnQoZWRpdG9yLCBfcGF0aDIpO1xuXG4gICAgICAgIHZhciBfaW5kZXggPSBfcGF0aDJbX3BhdGgyLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIGlmIChUZXh0LmlzVGV4dChfbm9kZTIpICYmIFRleHQuaXNUZXh0KHByZXYpKSB7XG4gICAgICAgICAgcHJldi50ZXh0ICs9IF9ub2RlMi50ZXh0O1xuICAgICAgICB9IGVsc2UgaWYgKCFUZXh0LmlzVGV4dChfbm9kZTIpICYmICFUZXh0LmlzVGV4dChwcmV2KSkge1xuICAgICAgICAgIHByZXYuY2hpbGRyZW4ucHVzaCguLi5fbm9kZTIuY2hpbGRyZW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBhcHBseSBhIFxcXCJtZXJnZV9ub2RlXFxcIiBvcGVyYXRpb24gYXQgcGF0aCBbXCIuY29uY2F0KF9wYXRoMiwgXCJdIHRvIG5vZGVzIG9mIGRpZmZlcmVudCBpbnRlcmZhY2VzOiBcIikuY29uY2F0KF9ub2RlMiwgXCIgXCIpLmNvbmNhdChwcmV2KSk7XG4gICAgICAgIH1cblxuICAgICAgICBfcGFyZW50LmNoaWxkcmVuLnNwbGljZShfaW5kZXgsIDEpO1xuXG4gICAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgICBmb3IgKHZhciBbX3BvaW50MiwgX2tleTJdIG9mIFJhbmdlLnBvaW50cyhzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICBzZWxlY3Rpb25bX2tleTJdID0gUG9pbnQudHJhbnNmb3JtKF9wb2ludDIsIG9wKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIGNhc2UgJ21vdmVfbm9kZSc6XG4gICAgICB7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgcGF0aDogX3BhdGgzLFxuICAgICAgICAgIG5ld1BhdGhcbiAgICAgICAgfSA9IG9wO1xuXG4gICAgICAgIGlmIChQYXRoLmlzQW5jZXN0b3IoX3BhdGgzLCBuZXdQYXRoKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBtb3ZlIGEgcGF0aCBbXCIuY29uY2F0KF9wYXRoMywgXCJdIHRvIG5ldyBwYXRoIFtcIikuY29uY2F0KG5ld1BhdGgsIFwiXSBiZWNhdXNlIHRoZSBkZXN0aW5hdGlvbiBpcyBpbnNpZGUgaXRzZWxmLlwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX25vZGUzID0gTm9kZS5nZXQoZWRpdG9yLCBfcGF0aDMpO1xuXG4gICAgICAgIHZhciBfcGFyZW50MiA9IE5vZGUucGFyZW50KGVkaXRvciwgX3BhdGgzKTtcblxuICAgICAgICB2YXIgX2luZGV4MiA9IF9wYXRoM1tfcGF0aDMubGVuZ3RoIC0gMV07IC8vIFRoaXMgaXMgdHJpY2t5LCBidXQgc2luY2UgdGhlIGBwYXRoYCBhbmQgYG5ld1BhdGhgIGJvdGggcmVmZXIgdG9cbiAgICAgICAgLy8gdGhlIHNhbWUgc25hcHNob3QgaW4gdGltZSwgdGhlcmUncyBhIG1pc21hdGNoLiBBZnRlciBlaXRoZXJcbiAgICAgICAgLy8gcmVtb3ZpbmcgdGhlIG9yaWdpbmFsIHBvc2l0aW9uLCB0aGUgc2Vjb25kIHN0ZXAncyBwYXRoIGNhbiBiZSBvdXRcbiAgICAgICAgLy8gb2YgZGF0ZS4gU28gaW5zdGVhZCBvZiB1c2luZyB0aGUgYG9wLm5ld1BhdGhgIGRpcmVjdGx5LCB3ZVxuICAgICAgICAvLyB0cmFuc2Zvcm0gYG9wLnBhdGhgIHRvIGFzY2VydGFpbiB3aGF0IHRoZSBgbmV3UGF0aGAgd291bGQgYmUgYWZ0ZXJcbiAgICAgICAgLy8gdGhlIG9wZXJhdGlvbiB3YXMgYXBwbGllZC5cblxuICAgICAgICBfcGFyZW50Mi5jaGlsZHJlbi5zcGxpY2UoX2luZGV4MiwgMSk7XG5cbiAgICAgICAgdmFyIHRydWVQYXRoID0gUGF0aC50cmFuc2Zvcm0oX3BhdGgzLCBvcCk7XG4gICAgICAgIHZhciBuZXdQYXJlbnQgPSBOb2RlLmdldChlZGl0b3IsIFBhdGgucGFyZW50KHRydWVQYXRoKSk7XG4gICAgICAgIHZhciBuZXdJbmRleCA9IHRydWVQYXRoW3RydWVQYXRoLmxlbmd0aCAtIDFdO1xuICAgICAgICBuZXdQYXJlbnQuY2hpbGRyZW4uc3BsaWNlKG5ld0luZGV4LCAwLCBfbm9kZTMpO1xuXG4gICAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgICBmb3IgKHZhciBbX3BvaW50MywgX2tleTNdIG9mIFJhbmdlLnBvaW50cyhzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICBzZWxlY3Rpb25bX2tleTNdID0gUG9pbnQudHJhbnNmb3JtKF9wb2ludDMsIG9wKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIGNhc2UgJ3JlbW92ZV9ub2RlJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBwYXRoOiBfcGF0aDRcbiAgICAgICAgfSA9IG9wO1xuICAgICAgICB2YXIgX2luZGV4MyA9IF9wYXRoNFtfcGF0aDQubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgdmFyIF9wYXJlbnQzID0gTm9kZS5wYXJlbnQoZWRpdG9yLCBfcGF0aDQpO1xuXG4gICAgICAgIF9wYXJlbnQzLmNoaWxkcmVuLnNwbGljZShfaW5kZXgzLCAxKTsgLy8gVHJhbnNmb3JtIGFsbCBvZiB0aGUgcG9pbnRzIGluIHRoZSB2YWx1ZSwgYnV0IGlmIHRoZSBwb2ludCB3YXMgaW4gdGhlXG4gICAgICAgIC8vIG5vZGUgdGhhdCB3YXMgcmVtb3ZlZCB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgcmFuZ2Ugb3IgcmVtb3ZlIGl0LlxuXG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgIGZvciAodmFyIFtfcG9pbnQ0LCBfa2V5NF0gb2YgUmFuZ2UucG9pbnRzKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBQb2ludC50cmFuc2Zvcm0oX3BvaW50NCwgb3ApO1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0aW9uICE9IG51bGwgJiYgcmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgc2VsZWN0aW9uW19rZXk0XSA9IHJlc3VsdDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhciBfcHJldiA9IHZvaWQgMDtcblxuICAgICAgICAgICAgICB2YXIgbmV4dCA9IHZvaWQgMDtcblxuICAgICAgICAgICAgICBmb3IgKHZhciBbbiwgcF0gb2YgTm9kZS50ZXh0cyhlZGl0b3IpKSB7XG4gICAgICAgICAgICAgICAgaWYgKFBhdGguY29tcGFyZShwLCBfcGF0aDQpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgX3ByZXYgPSBbbiwgcF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG5leHQgPSBbbiwgcF07XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB2YXIgcHJlZmVyTmV4dCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgIGlmIChfcHJldiAmJiBuZXh0KSB7XG4gICAgICAgICAgICAgICAgaWYgKFBhdGguZXF1YWxzKG5leHRbMV0sIF9wYXRoNCkpIHtcbiAgICAgICAgICAgICAgICAgIHByZWZlck5leHQgPSAhUGF0aC5oYXNQcmV2aW91cyhuZXh0WzFdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcHJlZmVyTmV4dCA9IFBhdGguY29tbW9uKF9wcmV2WzFdLCBfcGF0aDQpLmxlbmd0aCA8IFBhdGguY29tbW9uKG5leHRbMV0sIF9wYXRoNCkubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChfcHJldiAmJiAhcHJlZmVyTmV4dCkge1xuICAgICAgICAgICAgICAgIF9wb2ludDQucGF0aCA9IF9wcmV2WzFdO1xuICAgICAgICAgICAgICAgIF9wb2ludDQub2Zmc2V0ID0gX3ByZXZbMF0udGV4dC5sZW5ndGg7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dCkge1xuICAgICAgICAgICAgICAgIF9wb2ludDQucGF0aCA9IG5leHRbMV07XG4gICAgICAgICAgICAgICAgX3BvaW50NC5vZmZzZXQgPSAwO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGVjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIGNhc2UgJ3JlbW92ZV90ZXh0JzpcbiAgICAgIHtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBwYXRoOiBfcGF0aDUsXG4gICAgICAgICAgb2Zmc2V0OiBfb2Zmc2V0LFxuICAgICAgICAgIHRleHQ6IF90ZXh0XG4gICAgICAgIH0gPSBvcDtcbiAgICAgICAgaWYgKF90ZXh0Lmxlbmd0aCA9PT0gMCkgYnJlYWs7XG5cbiAgICAgICAgdmFyIF9ub2RlNCA9IE5vZGUubGVhZihlZGl0b3IsIF9wYXRoNSk7XG5cbiAgICAgICAgdmFyIF9iZWZvcmUgPSBfbm9kZTQudGV4dC5zbGljZSgwLCBfb2Zmc2V0KTtcblxuICAgICAgICB2YXIgX2FmdGVyID0gX25vZGU0LnRleHQuc2xpY2UoX29mZnNldCArIF90ZXh0Lmxlbmd0aCk7XG5cbiAgICAgICAgX25vZGU0LnRleHQgPSBfYmVmb3JlICsgX2FmdGVyO1xuXG4gICAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgICBmb3IgKHZhciBbX3BvaW50NSwgX2tleTVdIG9mIFJhbmdlLnBvaW50cyhzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICBzZWxlY3Rpb25bX2tleTVdID0gUG9pbnQudHJhbnNmb3JtKF9wb2ludDUsIG9wKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIGNhc2UgJ3NldF9ub2RlJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBwYXRoOiBfcGF0aDYsXG4gICAgICAgICAgcHJvcGVydGllcyxcbiAgICAgICAgICBuZXdQcm9wZXJ0aWVzXG4gICAgICAgIH0gPSBvcDtcblxuICAgICAgICBpZiAoX3BhdGg2Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBzZXQgcHJvcGVydGllcyBvbiB0aGUgcm9vdCBub2RlIVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfbm9kZTUgPSBOb2RlLmdldChlZGl0b3IsIF9wYXRoNik7XG5cbiAgICAgICAgZm9yICh2YXIgX2tleTYgaW4gbmV3UHJvcGVydGllcykge1xuICAgICAgICAgIGlmIChfa2V5NiA9PT0gJ2NoaWxkcmVuJyB8fCBfa2V5NiA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3Qgc2V0IHRoZSBcXFwiXCIuY29uY2F0KF9rZXk2LCBcIlxcXCIgcHJvcGVydHkgb2Ygbm9kZXMhXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgdmFsdWUgPSBuZXdQcm9wZXJ0aWVzW19rZXk2XTtcblxuICAgICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBkZWxldGUgX25vZGU1W19rZXk2XTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX25vZGU1W19rZXk2XSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBwcm9wZXJ0aWVzIHRoYXQgd2VyZSBwcmV2aW91c2x5IGRlZmluZWQsIGJ1dCBhcmUgbm93IG1pc3NpbmcsIG11c3QgYmUgZGVsZXRlZFxuXG5cbiAgICAgICAgZm9yICh2YXIgX2tleTcgaW4gcHJvcGVydGllcykge1xuICAgICAgICAgIGlmICghbmV3UHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShfa2V5NykpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBfbm9kZTVbX2tleTddO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgY2FzZSAnc2V0X3NlbGVjdGlvbic6XG4gICAgICB7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgbmV3UHJvcGVydGllczogX25ld1Byb3BlcnRpZXNcbiAgICAgICAgfSA9IG9wO1xuXG4gICAgICAgIGlmIChfbmV3UHJvcGVydGllcyA9PSBudWxsKSB7XG4gICAgICAgICAgc2VsZWN0aW9uID0gX25ld1Byb3BlcnRpZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHNlbGVjdGlvbiA9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoIVJhbmdlLmlzUmFuZ2UoX25ld1Byb3BlcnRpZXMpKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBhcHBseSBhbiBpbmNvbXBsZXRlIFxcXCJzZXRfc2VsZWN0aW9uXFxcIiBvcGVyYXRpb24gcHJvcGVydGllcyBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkoX25ld1Byb3BlcnRpZXMpLCBcIiB3aGVuIHRoZXJlIGlzIG5vIGN1cnJlbnQgc2VsZWN0aW9uLlwiKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGVjdGlvbiA9IF9vYmplY3RTcHJlYWQkMyh7fSwgX25ld1Byb3BlcnRpZXMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAodmFyIF9rZXk4IGluIF9uZXdQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICB2YXIgX3ZhbHVlID0gX25ld1Byb3BlcnRpZXNbX2tleThdO1xuXG4gICAgICAgICAgICBpZiAoX3ZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgaWYgKF9rZXk4ID09PSAnYW5jaG9yJyB8fCBfa2V5OCA9PT0gJ2ZvY3VzJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCByZW1vdmUgdGhlIFxcXCJcIi5jb25jYXQoX2tleTgsIFwiXFxcIiBzZWxlY3Rpb24gcHJvcGVydHlcIikpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZGVsZXRlIHNlbGVjdGlvbltfa2V5OF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZWxlY3Rpb25bX2tleThdID0gX3ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgY2FzZSAnc3BsaXRfbm9kZSc6XG4gICAgICB7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgcGF0aDogX3BhdGg3LFxuICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgIHByb3BlcnRpZXM6IF9wcm9wZXJ0aWVzXG4gICAgICAgIH0gPSBvcDtcblxuICAgICAgICBpZiAoX3BhdGg3Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBhcHBseSBhIFxcXCJzcGxpdF9ub2RlXFxcIiBvcGVyYXRpb24gYXQgcGF0aCBbXCIuY29uY2F0KF9wYXRoNywgXCJdIGJlY2F1c2UgdGhlIHJvb3Qgbm9kZSBjYW5ub3QgYmUgc3BsaXQuXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfbm9kZTYgPSBOb2RlLmdldChlZGl0b3IsIF9wYXRoNyk7XG5cbiAgICAgICAgdmFyIF9wYXJlbnQ0ID0gTm9kZS5wYXJlbnQoZWRpdG9yLCBfcGF0aDcpO1xuXG4gICAgICAgIHZhciBfaW5kZXg0ID0gX3BhdGg3W19wYXRoNy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIG5ld05vZGU7XG5cbiAgICAgICAgaWYgKFRleHQuaXNUZXh0KF9ub2RlNikpIHtcbiAgICAgICAgICB2YXIgX2JlZm9yZTIgPSBfbm9kZTYudGV4dC5zbGljZSgwLCBwb3NpdGlvbik7XG5cbiAgICAgICAgICB2YXIgX2FmdGVyMiA9IF9ub2RlNi50ZXh0LnNsaWNlKHBvc2l0aW9uKTtcblxuICAgICAgICAgIF9ub2RlNi50ZXh0ID0gX2JlZm9yZTI7XG4gICAgICAgICAgbmV3Tm9kZSA9IF9vYmplY3RTcHJlYWQkMyhfb2JqZWN0U3ByZWFkJDMoe30sIF9wcm9wZXJ0aWVzKSwge30sIHtcbiAgICAgICAgICAgIHRleHQ6IF9hZnRlcjJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgX2JlZm9yZTMgPSBfbm9kZTYuY2hpbGRyZW4uc2xpY2UoMCwgcG9zaXRpb24pO1xuXG4gICAgICAgICAgdmFyIF9hZnRlcjMgPSBfbm9kZTYuY2hpbGRyZW4uc2xpY2UocG9zaXRpb24pO1xuXG4gICAgICAgICAgX25vZGU2LmNoaWxkcmVuID0gX2JlZm9yZTM7XG4gICAgICAgICAgbmV3Tm9kZSA9IF9vYmplY3RTcHJlYWQkMyhfb2JqZWN0U3ByZWFkJDMoe30sIF9wcm9wZXJ0aWVzKSwge30sIHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBfYWZ0ZXIzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBfcGFyZW50NC5jaGlsZHJlbi5zcGxpY2UoX2luZGV4NCArIDEsIDAsIG5ld05vZGUpO1xuXG4gICAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgICBmb3IgKHZhciBbX3BvaW50NiwgX2tleTldIG9mIFJhbmdlLnBvaW50cyhzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICBzZWxlY3Rpb25bX2tleTldID0gUG9pbnQudHJhbnNmb3JtKF9wb2ludDYsIG9wKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgfVxuXG4gIHJldHVybiBzZWxlY3Rpb247XG59O1xuXG52YXIgR2VuZXJhbFRyYW5zZm9ybXMgPSB7XG4gIC8qKlxyXG4gICAqIFRyYW5zZm9ybSB0aGUgZWRpdG9yIGJ5IGFuIG9wZXJhdGlvbi5cclxuICAgKi9cbiAgdHJhbnNmb3JtKGVkaXRvciwgb3ApIHtcbiAgICBlZGl0b3IuY2hpbGRyZW4gPSBjcmVhdGVEcmFmdChlZGl0b3IuY2hpbGRyZW4pO1xuICAgIHZhciBzZWxlY3Rpb24gPSBlZGl0b3Iuc2VsZWN0aW9uICYmIGNyZWF0ZURyYWZ0KGVkaXRvci5zZWxlY3Rpb24pO1xuXG4gICAgdHJ5IHtcbiAgICAgIHNlbGVjdGlvbiA9IGFwcGx5VG9EcmFmdChlZGl0b3IsIHNlbGVjdGlvbiwgb3ApO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBlZGl0b3IuY2hpbGRyZW4gPSBmaW5pc2hEcmFmdChlZGl0b3IuY2hpbGRyZW4pO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgIGVkaXRvci5zZWxlY3Rpb24gPSBpc0RyYWZ0KHNlbGVjdGlvbikgPyBmaW5pc2hEcmFmdChzZWxlY3Rpb24pIDogc2VsZWN0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWRpdG9yLnNlbGVjdGlvbiA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn07XG5cbnZhciBfZXhjbHVkZWQgPSBbXCJ0ZXh0XCJdLFxuICAgIF9leGNsdWRlZDIgPSBbXCJjaGlsZHJlblwiXTtcblxuZnVuY3Rpb24gb3duS2V5cyQyKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSB7IHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsgfSBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQyKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMkMihPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzJDIoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG52YXIgTm9kZVRyYW5zZm9ybXMgPSB7XG4gIC8qKlxyXG4gICAqIEluc2VydCBub2RlcyBhdCBhIHNwZWNpZmljIGxvY2F0aW9uIGluIHRoZSBFZGl0b3IuXHJcbiAgICovXG4gIGluc2VydE5vZGVzKGVkaXRvciwgbm9kZXMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgRWRpdG9yLndpdGhvdXROb3JtYWxpemluZyhlZGl0b3IsICgpID0+IHtcbiAgICAgIHZhciB7XG4gICAgICAgIGhhbmdpbmcgPSBmYWxzZSxcbiAgICAgICAgdm9pZHMgPSBmYWxzZSxcbiAgICAgICAgbW9kZSA9ICdsb3dlc3QnXG4gICAgICB9ID0gb3B0aW9ucztcbiAgICAgIHZhciB7XG4gICAgICAgIGF0LFxuICAgICAgICBtYXRjaCxcbiAgICAgICAgc2VsZWN0XG4gICAgICB9ID0gb3B0aW9ucztcblxuICAgICAgaWYgKE5vZGUuaXNOb2RlKG5vZGVzKSkge1xuICAgICAgICBub2RlcyA9IFtub2Rlc107XG4gICAgICB9XG5cbiAgICAgIGlmIChub2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgW25vZGVdID0gbm9kZXM7IC8vIEJ5IGRlZmF1bHQsIHVzZSB0aGUgc2VsZWN0aW9uIGFzIHRoZSB0YXJnZXQgbG9jYXRpb24uIEJ1dCBpZiB0aGVyZSBpc1xuICAgICAgLy8gbm8gc2VsZWN0aW9uLCBpbnNlcnQgYXQgdGhlIGVuZCBvZiB0aGUgZG9jdW1lbnQgc2luY2UgdGhhdCBpcyBzdWNoIGFcbiAgICAgIC8vIGNvbW1vbiB1c2UgY2FzZSB3aGVuIGluc2VydGluZyBmcm9tIGEgbm9uLXNlbGVjdGVkIHN0YXRlLlxuXG4gICAgICBpZiAoIWF0KSB7XG4gICAgICAgIGlmIChlZGl0b3Iuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgYXQgPSBlZGl0b3Iuc2VsZWN0aW9uO1xuICAgICAgICB9IGVsc2UgaWYgKGVkaXRvci5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgYXQgPSBFZGl0b3IuZW5kKGVkaXRvciwgW10pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGF0ID0gWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZWN0ID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGVjdCA9PSBudWxsKSB7XG4gICAgICAgIHNlbGVjdCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoUmFuZ2UuaXNSYW5nZShhdCkpIHtcbiAgICAgICAgaWYgKCFoYW5naW5nKSB7XG4gICAgICAgICAgYXQgPSBFZGl0b3IudW5oYW5nUmFuZ2UoZWRpdG9yLCBhdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoUmFuZ2UuaXNDb2xsYXBzZWQoYXQpKSB7XG4gICAgICAgICAgYXQgPSBhdC5hbmNob3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIFssIGVuZF0gPSBSYW5nZS5lZGdlcyhhdCk7XG4gICAgICAgICAgdmFyIHBvaW50UmVmID0gRWRpdG9yLnBvaW50UmVmKGVkaXRvciwgZW5kKTtcbiAgICAgICAgICBUcmFuc2Zvcm1zLmRlbGV0ZShlZGl0b3IsIHtcbiAgICAgICAgICAgIGF0XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYXQgPSBwb2ludFJlZi51bnJlZigpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChQb2ludC5pc1BvaW50KGF0KSkge1xuICAgICAgICBpZiAobWF0Y2ggPT0gbnVsbCkge1xuICAgICAgICAgIGlmIChUZXh0LmlzVGV4dChub2RlKSkge1xuICAgICAgICAgICAgbWF0Y2ggPSBuID0+IFRleHQuaXNUZXh0KG4pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZWRpdG9yLmlzSW5saW5lKG5vZGUpKSB7XG4gICAgICAgICAgICBtYXRjaCA9IG4gPT4gVGV4dC5pc1RleHQobikgfHwgRWRpdG9yLmlzSW5saW5lKGVkaXRvciwgbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1hdGNoID0gbiA9PiBFZGl0b3IuaXNCbG9jayhlZGl0b3IsIG4pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBbZW50cnldID0gRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgICAgIGF0OiBhdC5wYXRoLFxuICAgICAgICAgIG1hdGNoLFxuICAgICAgICAgIG1vZGUsXG4gICAgICAgICAgdm9pZHNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgdmFyIFssIF9tYXRjaFBhdGhdID0gZW50cnk7XG4gICAgICAgICAgdmFyIHBhdGhSZWYgPSBFZGl0b3IucGF0aFJlZihlZGl0b3IsIF9tYXRjaFBhdGgpO1xuICAgICAgICAgIHZhciBpc0F0RW5kID0gRWRpdG9yLmlzRW5kKGVkaXRvciwgYXQsIF9tYXRjaFBhdGgpO1xuICAgICAgICAgIFRyYW5zZm9ybXMuc3BsaXROb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICAgIGF0LFxuICAgICAgICAgICAgbWF0Y2gsXG4gICAgICAgICAgICBtb2RlLFxuICAgICAgICAgICAgdm9pZHNcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YXIgcGF0aCA9IHBhdGhSZWYudW5yZWYoKTtcbiAgICAgICAgICBhdCA9IGlzQXRFbmQgPyBQYXRoLm5leHQocGF0aCkgOiBwYXRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgcGFyZW50UGF0aCA9IFBhdGgucGFyZW50KGF0KTtcbiAgICAgIHZhciBpbmRleCA9IGF0W2F0Lmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAoIXZvaWRzICYmIEVkaXRvci52b2lkKGVkaXRvciwge1xuICAgICAgICBhdDogcGFyZW50UGF0aFxuICAgICAgfSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfbm9kZSBvZiBub2Rlcykge1xuICAgICAgICB2YXIgX3BhdGggPSBwYXJlbnRQYXRoLmNvbmNhdChpbmRleCk7XG5cbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgZWRpdG9yLmFwcGx5KHtcbiAgICAgICAgICB0eXBlOiAnaW5zZXJ0X25vZGUnLFxuICAgICAgICAgIHBhdGg6IF9wYXRoLFxuICAgICAgICAgIG5vZGU6IF9ub2RlXG4gICAgICAgIH0pO1xuICAgICAgICBhdCA9IFBhdGgubmV4dChhdCk7XG4gICAgICB9XG5cbiAgICAgIGF0ID0gUGF0aC5wcmV2aW91cyhhdCk7XG5cbiAgICAgIGlmIChzZWxlY3QpIHtcbiAgICAgICAgdmFyIHBvaW50ID0gRWRpdG9yLmVuZChlZGl0b3IsIGF0KTtcblxuICAgICAgICBpZiAocG9pbnQpIHtcbiAgICAgICAgICBUcmFuc2Zvcm1zLnNlbGVjdChlZGl0b3IsIHBvaW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIExpZnQgbm9kZXMgYXQgYSBzcGVjaWZpYyBsb2NhdGlvbiB1cHdhcmRzIGluIHRoZSBkb2N1bWVudCB0cmVlLCBzcGxpdHRpbmdcclxuICAgKiB0aGVpciBwYXJlbnQgaW4gdHdvIGlmIG5lY2Vzc2FyeS5cclxuICAgKi9cbiAgbGlmdE5vZGVzKGVkaXRvcikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBFZGl0b3Iud2l0aG91dE5vcm1hbGl6aW5nKGVkaXRvciwgKCkgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgYXQgPSBlZGl0b3Iuc2VsZWN0aW9uLFxuICAgICAgICBtb2RlID0gJ2xvd2VzdCcsXG4gICAgICAgIHZvaWRzID0gZmFsc2VcbiAgICAgIH0gPSBvcHRpb25zO1xuICAgICAgdmFyIHtcbiAgICAgICAgbWF0Y2hcbiAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgICBpZiAobWF0Y2ggPT0gbnVsbCkge1xuICAgICAgICBtYXRjaCA9IFBhdGguaXNQYXRoKGF0KSA/IG1hdGNoUGF0aChlZGl0b3IsIGF0KSA6IG4gPT4gRWRpdG9yLmlzQmxvY2soZWRpdG9yLCBuKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFhdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBtYXRjaGVzID0gRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgICBhdCxcbiAgICAgICAgbWF0Y2gsXG4gICAgICAgIG1vZGUsXG4gICAgICAgIHZvaWRzXG4gICAgICB9KTtcbiAgICAgIHZhciBwYXRoUmVmcyA9IEFycmF5LmZyb20obWF0Y2hlcywgX3JlZiA9PiB7XG4gICAgICAgIHZhciBbLCBwXSA9IF9yZWY7XG4gICAgICAgIHJldHVybiBFZGl0b3IucGF0aFJlZihlZGl0b3IsIHApO1xuICAgICAgfSk7XG5cbiAgICAgIGZvciAodmFyIHBhdGhSZWYgb2YgcGF0aFJlZnMpIHtcbiAgICAgICAgdmFyIHBhdGggPSBwYXRoUmVmLnVucmVmKCk7XG5cbiAgICAgICAgaWYgKHBhdGgubGVuZ3RoIDwgMikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBsaWZ0IG5vZGUgYXQgYSBwYXRoIFtcIi5jb25jYXQocGF0aCwgXCJdIGJlY2F1c2UgaXQgaGFzIGEgZGVwdGggb2YgbGVzcyB0aGFuIGAyYC5cIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBhcmVudE5vZGVFbnRyeSA9IEVkaXRvci5ub2RlKGVkaXRvciwgUGF0aC5wYXJlbnQocGF0aCkpO1xuICAgICAgICB2YXIgW3BhcmVudCwgcGFyZW50UGF0aF0gPSBwYXJlbnROb2RlRW50cnk7XG4gICAgICAgIHZhciBpbmRleCA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBsZW5ndGhcbiAgICAgICAgfSA9IHBhcmVudC5jaGlsZHJlbjtcblxuICAgICAgICBpZiAobGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdmFyIHRvUGF0aCA9IFBhdGgubmV4dChwYXJlbnRQYXRoKTtcbiAgICAgICAgICBUcmFuc2Zvcm1zLm1vdmVOb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICAgIGF0OiBwYXRoLFxuICAgICAgICAgICAgdG86IHRvUGF0aCxcbiAgICAgICAgICAgIHZvaWRzXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5yZW1vdmVOb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICAgIGF0OiBwYXJlbnRQYXRoLFxuICAgICAgICAgICAgdm9pZHNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIFRyYW5zZm9ybXMubW92ZU5vZGVzKGVkaXRvciwge1xuICAgICAgICAgICAgYXQ6IHBhdGgsXG4gICAgICAgICAgICB0bzogcGFyZW50UGF0aCxcbiAgICAgICAgICAgIHZvaWRzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IGxlbmd0aCAtIDEpIHtcbiAgICAgICAgICB2YXIgX3RvUGF0aCA9IFBhdGgubmV4dChwYXJlbnRQYXRoKTtcblxuICAgICAgICAgIFRyYW5zZm9ybXMubW92ZU5vZGVzKGVkaXRvciwge1xuICAgICAgICAgICAgYXQ6IHBhdGgsXG4gICAgICAgICAgICB0bzogX3RvUGF0aCxcbiAgICAgICAgICAgIHZvaWRzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHNwbGl0UGF0aCA9IFBhdGgubmV4dChwYXRoKTtcblxuICAgICAgICAgIHZhciBfdG9QYXRoMiA9IFBhdGgubmV4dChwYXJlbnRQYXRoKTtcblxuICAgICAgICAgIFRyYW5zZm9ybXMuc3BsaXROb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICAgIGF0OiBzcGxpdFBhdGgsXG4gICAgICAgICAgICB2b2lkc1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIFRyYW5zZm9ybXMubW92ZU5vZGVzKGVkaXRvciwge1xuICAgICAgICAgICAgYXQ6IHBhdGgsXG4gICAgICAgICAgICB0bzogX3RvUGF0aDIsXG4gICAgICAgICAgICB2b2lkc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogTWVyZ2UgYSBub2RlIGF0IGEgbG9jYXRpb24gd2l0aCB0aGUgcHJldmlvdXMgbm9kZSBvZiB0aGUgc2FtZSBkZXB0aCxcclxuICAgKiByZW1vdmluZyBhbnkgZW1wdHkgY29udGFpbmluZyBub2RlcyBhZnRlciB0aGUgbWVyZ2UgaWYgbmVjZXNzYXJ5LlxyXG4gICAqL1xuICBtZXJnZU5vZGVzKGVkaXRvcikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBFZGl0b3Iud2l0aG91dE5vcm1hbGl6aW5nKGVkaXRvciwgKCkgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgbWF0Y2gsXG4gICAgICAgIGF0ID0gZWRpdG9yLnNlbGVjdGlvblxuICAgICAgfSA9IG9wdGlvbnM7XG4gICAgICB2YXIge1xuICAgICAgICBoYW5naW5nID0gZmFsc2UsXG4gICAgICAgIHZvaWRzID0gZmFsc2UsXG4gICAgICAgIG1vZGUgPSAnbG93ZXN0J1xuICAgICAgfSA9IG9wdGlvbnM7XG5cbiAgICAgIGlmICghYXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAobWF0Y2ggPT0gbnVsbCkge1xuICAgICAgICBpZiAoUGF0aC5pc1BhdGgoYXQpKSB7XG4gICAgICAgICAgdmFyIFtwYXJlbnRdID0gRWRpdG9yLnBhcmVudChlZGl0b3IsIGF0KTtcblxuICAgICAgICAgIG1hdGNoID0gbiA9PiBwYXJlbnQuY2hpbGRyZW4uaW5jbHVkZXMobik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWF0Y2ggPSBuID0+IEVkaXRvci5pc0Jsb2NrKGVkaXRvciwgbik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFoYW5naW5nICYmIFJhbmdlLmlzUmFuZ2UoYXQpKSB7XG4gICAgICAgIGF0ID0gRWRpdG9yLnVuaGFuZ1JhbmdlKGVkaXRvciwgYXQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoUmFuZ2UuaXNSYW5nZShhdCkpIHtcbiAgICAgICAgaWYgKFJhbmdlLmlzQ29sbGFwc2VkKGF0KSkge1xuICAgICAgICAgIGF0ID0gYXQuYW5jaG9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBbLCBlbmRdID0gUmFuZ2UuZWRnZXMoYXQpO1xuICAgICAgICAgIHZhciBwb2ludFJlZiA9IEVkaXRvci5wb2ludFJlZihlZGl0b3IsIGVuZCk7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5kZWxldGUoZWRpdG9yLCB7XG4gICAgICAgICAgICBhdFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGF0ID0gcG9pbnRSZWYudW5yZWYoKTtcblxuICAgICAgICAgIGlmIChvcHRpb25zLmF0ID09IG51bGwpIHtcbiAgICAgICAgICAgIFRyYW5zZm9ybXMuc2VsZWN0KGVkaXRvciwgYXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgW2N1cnJlbnRdID0gRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgICBhdCxcbiAgICAgICAgbWF0Y2gsXG4gICAgICAgIHZvaWRzLFxuICAgICAgICBtb2RlXG4gICAgICB9KTtcbiAgICAgIHZhciBwcmV2ID0gRWRpdG9yLnByZXZpb3VzKGVkaXRvciwge1xuICAgICAgICBhdCxcbiAgICAgICAgbWF0Y2gsXG4gICAgICAgIHZvaWRzLFxuICAgICAgICBtb2RlXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFjdXJyZW50IHx8ICFwcmV2KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIFtub2RlLCBwYXRoXSA9IGN1cnJlbnQ7XG4gICAgICB2YXIgW3ByZXZOb2RlLCBwcmV2UGF0aF0gPSBwcmV2O1xuXG4gICAgICBpZiAocGF0aC5sZW5ndGggPT09IDAgfHwgcHJldlBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld1BhdGggPSBQYXRoLm5leHQocHJldlBhdGgpO1xuICAgICAgdmFyIGNvbW1vblBhdGggPSBQYXRoLmNvbW1vbihwYXRoLCBwcmV2UGF0aCk7XG4gICAgICB2YXIgaXNQcmV2aW91c1NpYmxpbmcgPSBQYXRoLmlzU2libGluZyhwYXRoLCBwcmV2UGF0aCk7XG4gICAgICB2YXIgbGV2ZWxzID0gQXJyYXkuZnJvbShFZGl0b3IubGV2ZWxzKGVkaXRvciwge1xuICAgICAgICBhdDogcGF0aFxuICAgICAgfSksIF9yZWYyID0+IHtcbiAgICAgICAgdmFyIFtuXSA9IF9yZWYyO1xuICAgICAgICByZXR1cm4gbjtcbiAgICAgIH0pLnNsaWNlKGNvbW1vblBhdGgubGVuZ3RoKS5zbGljZSgwLCAtMSk7IC8vIERldGVybWluZSBpZiB0aGUgbWVyZ2Ugd2lsbCBsZWF2ZSBhbiBhbmNlc3RvciBvZiB0aGUgcGF0aCBlbXB0eSBhcyBhXG4gICAgICAvLyByZXN1bHQsIGluIHdoaWNoIGNhc2Ugd2UnbGwgd2FudCB0byByZW1vdmUgaXQgYWZ0ZXIgbWVyZ2luZy5cblxuICAgICAgdmFyIGVtcHR5QW5jZXN0b3IgPSBFZGl0b3IuYWJvdmUoZWRpdG9yLCB7XG4gICAgICAgIGF0OiBwYXRoLFxuICAgICAgICBtb2RlOiAnaGlnaGVzdCcsXG4gICAgICAgIG1hdGNoOiBuID0+IGxldmVscy5pbmNsdWRlcyhuKSAmJiBoYXNTaW5nbGVDaGlsZE5lc3QoZWRpdG9yLCBuKVxuICAgICAgfSk7XG4gICAgICB2YXIgZW1wdHlSZWYgPSBlbXB0eUFuY2VzdG9yICYmIEVkaXRvci5wYXRoUmVmKGVkaXRvciwgZW1wdHlBbmNlc3RvclsxXSk7XG4gICAgICB2YXIgcHJvcGVydGllcztcbiAgICAgIHZhciBwb3NpdGlvbjsgLy8gRW5zdXJlIHRoYXQgdGhlIG5vZGVzIGFyZSBlcXVpdmFsZW50LCBhbmQgZmlndXJlIG91dCB3aGF0IHRoZSBwb3NpdGlvblxuICAgICAgLy8gYW5kIGV4dHJhIHByb3BlcnRpZXMgb2YgdGhlIG1lcmdlIHdpbGwgYmUuXG5cbiAgICAgIGlmIChUZXh0LmlzVGV4dChub2RlKSAmJiBUZXh0LmlzVGV4dChwcmV2Tm9kZSkpIHtcbiAgICAgICAgdmFyIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMobm9kZSwgX2V4Y2x1ZGVkKTtcblxuICAgICAgICBwb3NpdGlvbiA9IHByZXZOb2RlLnRleHQubGVuZ3RoO1xuICAgICAgICBwcm9wZXJ0aWVzID0gcmVzdDtcbiAgICAgIH0gZWxzZSBpZiAoRWxlbWVudC5pc0VsZW1lbnQobm9kZSkgJiYgRWxlbWVudC5pc0VsZW1lbnQocHJldk5vZGUpKSB7XG4gICAgICAgIHZhciByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG5vZGUsIF9leGNsdWRlZDIpO1xuXG4gICAgICAgIHBvc2l0aW9uID0gcHJldk5vZGUuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBwcm9wZXJ0aWVzID0gcmVzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBtZXJnZSB0aGUgbm9kZSBhdCBwYXRoIFtcIi5jb25jYXQocGF0aCwgXCJdIHdpdGggdGhlIHByZXZpb3VzIHNpYmxpbmcgYmVjYXVzZSBpdCBpcyBub3QgdGhlIHNhbWUga2luZDogXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShub2RlKSwgXCIgXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShwcmV2Tm9kZSkpKTtcbiAgICAgIH0gLy8gSWYgdGhlIG5vZGUgaXNuJ3QgYWxyZWFkeSB0aGUgbmV4dCBzaWJsaW5nIG9mIHRoZSBwcmV2aW91cyBub2RlLCBtb3ZlXG4gICAgICAvLyBpdCBzbyB0aGF0IGl0IGlzIGJlZm9yZSBtZXJnaW5nLlxuXG5cbiAgICAgIGlmICghaXNQcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgICAgVHJhbnNmb3Jtcy5tb3ZlTm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgYXQ6IHBhdGgsXG4gICAgICAgICAgdG86IG5ld1BhdGgsXG4gICAgICAgICAgdm9pZHNcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIElmIHRoZXJlIHdhcyBnb2luZyB0byBiZSBhbiBlbXB0eSBhbmNlc3RvciBvZiB0aGUgbm9kZSB0aGF0IHdhcyBtZXJnZWQsXG4gICAgICAvLyB3ZSByZW1vdmUgaXQgZnJvbSB0aGUgdHJlZS5cblxuXG4gICAgICBpZiAoZW1wdHlSZWYpIHtcbiAgICAgICAgVHJhbnNmb3Jtcy5yZW1vdmVOb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICBhdDogZW1wdHlSZWYuY3VycmVudCxcbiAgICAgICAgICB2b2lkc1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gSWYgdGhlIHRhcmdldCBub2RlIHRoYXQgd2UncmUgbWVyZ2luZyB3aXRoIGlzIGVtcHR5LCByZW1vdmUgaXQgaW5zdGVhZFxuICAgICAgLy8gb2YgbWVyZ2luZyB0aGUgdHdvLiBUaGlzIGlzIGEgY29tbW9uIHJpY2ggdGV4dCBlZGl0b3IgYmVoYXZpb3IgdG9cbiAgICAgIC8vIHByZXZlbnQgbG9zaW5nIGZvcm1hdHRpbmcgd2hlbiBkZWxldGluZyBlbnRpcmUgbm9kZXMgd2hlbiB5b3UgaGF2ZSBhXG4gICAgICAvLyBoYW5naW5nIHNlbGVjdGlvbi5cbiAgICAgIC8vIGlmIHByZXZOb2RlIGlzIGZpcnN0IGNoaWxkIGluIHBhcmVudCxkb24ndCByZW1vdmUgaXQuXG5cblxuICAgICAgaWYgKEVsZW1lbnQuaXNFbGVtZW50KHByZXZOb2RlKSAmJiBFZGl0b3IuaXNFbXB0eShlZGl0b3IsIHByZXZOb2RlKSB8fCBUZXh0LmlzVGV4dChwcmV2Tm9kZSkgJiYgcHJldk5vZGUudGV4dCA9PT0gJycgJiYgcHJldlBhdGhbcHJldlBhdGgubGVuZ3RoIC0gMV0gIT09IDApIHtcbiAgICAgICAgVHJhbnNmb3Jtcy5yZW1vdmVOb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICBhdDogcHJldlBhdGgsXG4gICAgICAgICAgdm9pZHNcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlZGl0b3IuYXBwbHkoe1xuICAgICAgICAgIHR5cGU6ICdtZXJnZV9ub2RlJyxcbiAgICAgICAgICBwYXRoOiBuZXdQYXRoLFxuICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgIHByb3BlcnRpZXNcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbXB0eVJlZikge1xuICAgICAgICBlbXB0eVJlZi51bnJlZigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIE1vdmUgdGhlIG5vZGVzIGF0IGEgbG9jYXRpb24gdG8gYSBuZXcgbG9jYXRpb24uXHJcbiAgICovXG4gIG1vdmVOb2RlcyhlZGl0b3IsIG9wdGlvbnMpIHtcbiAgICBFZGl0b3Iud2l0aG91dE5vcm1hbGl6aW5nKGVkaXRvciwgKCkgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgdG8sXG4gICAgICAgIGF0ID0gZWRpdG9yLnNlbGVjdGlvbixcbiAgICAgICAgbW9kZSA9ICdsb3dlc3QnLFxuICAgICAgICB2b2lkcyA9IGZhbHNlXG4gICAgICB9ID0gb3B0aW9ucztcbiAgICAgIHZhciB7XG4gICAgICAgIG1hdGNoXG4gICAgICB9ID0gb3B0aW9ucztcblxuICAgICAgaWYgKCFhdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXRjaCA9PSBudWxsKSB7XG4gICAgICAgIG1hdGNoID0gUGF0aC5pc1BhdGgoYXQpID8gbWF0Y2hQYXRoKGVkaXRvciwgYXQpIDogbiA9PiBFZGl0b3IuaXNCbG9jayhlZGl0b3IsIG4pO1xuICAgICAgfVxuXG4gICAgICB2YXIgdG9SZWYgPSBFZGl0b3IucGF0aFJlZihlZGl0b3IsIHRvKTtcbiAgICAgIHZhciB0YXJnZXRzID0gRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgICBhdCxcbiAgICAgICAgbWF0Y2gsXG4gICAgICAgIG1vZGUsXG4gICAgICAgIHZvaWRzXG4gICAgICB9KTtcbiAgICAgIHZhciBwYXRoUmVmcyA9IEFycmF5LmZyb20odGFyZ2V0cywgX3JlZjMgPT4ge1xuICAgICAgICB2YXIgWywgcF0gPSBfcmVmMztcbiAgICAgICAgcmV0dXJuIEVkaXRvci5wYXRoUmVmKGVkaXRvciwgcCk7XG4gICAgICB9KTtcblxuICAgICAgZm9yICh2YXIgcGF0aFJlZiBvZiBwYXRoUmVmcykge1xuICAgICAgICB2YXIgcGF0aCA9IHBhdGhSZWYudW5yZWYoKTtcbiAgICAgICAgdmFyIG5ld1BhdGggPSB0b1JlZi5jdXJyZW50O1xuXG4gICAgICAgIGlmIChwYXRoLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIGVkaXRvci5hcHBseSh7XG4gICAgICAgICAgICB0eXBlOiAnbW92ZV9ub2RlJyxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBuZXdQYXRoXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9SZWYuY3VycmVudCAmJiBQYXRoLmlzU2libGluZyhuZXdQYXRoLCBwYXRoKSAmJiBQYXRoLmlzQWZ0ZXIobmV3UGF0aCwgcGF0aCkpIHtcbiAgICAgICAgICAvLyBXaGVuIHBlcmZvcm1pbmcgYSBzaWJsaW5nIG1vdmUgdG8gYSBsYXRlciBpbmRleCwgdGhlIHBhdGggYXQgdGhlIGRlc3RpbmF0aW9uIGlzIHNoaWZ0ZWRcbiAgICAgICAgICAvLyB0byBiZWZvcmUgdGhlIGluc2VydGlvbiBwb2ludCBpbnN0ZWFkIG9mIGFmdGVyLiBUbyBlbnN1cmUgb3VyIGdyb3VwIG9mIG5vZGVzIGFyZSBpbnNlcnRlZFxuICAgICAgICAgIC8vIGluIHRoZSBjb3JyZWN0IG9yZGVyIHdlIGluY3JlbWVudCB0b1JlZiB0byBhY2NvdW50IGZvciB0aGF0XG4gICAgICAgICAgdG9SZWYuY3VycmVudCA9IFBhdGgubmV4dCh0b1JlZi5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0b1JlZi51bnJlZigpO1xuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIFJlbW92ZSB0aGUgbm9kZXMgYXQgYSBzcGVjaWZpYyBsb2NhdGlvbiBpbiB0aGUgZG9jdW1lbnQuXHJcbiAgICovXG4gIHJlbW92ZU5vZGVzKGVkaXRvcikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBFZGl0b3Iud2l0aG91dE5vcm1hbGl6aW5nKGVkaXRvciwgKCkgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgaGFuZ2luZyA9IGZhbHNlLFxuICAgICAgICB2b2lkcyA9IGZhbHNlLFxuICAgICAgICBtb2RlID0gJ2xvd2VzdCdcbiAgICAgIH0gPSBvcHRpb25zO1xuICAgICAgdmFyIHtcbiAgICAgICAgYXQgPSBlZGl0b3Iuc2VsZWN0aW9uLFxuICAgICAgICBtYXRjaFxuICAgICAgfSA9IG9wdGlvbnM7XG5cbiAgICAgIGlmICghYXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAobWF0Y2ggPT0gbnVsbCkge1xuICAgICAgICBtYXRjaCA9IFBhdGguaXNQYXRoKGF0KSA/IG1hdGNoUGF0aChlZGl0b3IsIGF0KSA6IG4gPT4gRWRpdG9yLmlzQmxvY2soZWRpdG9yLCBuKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFoYW5naW5nICYmIFJhbmdlLmlzUmFuZ2UoYXQpKSB7XG4gICAgICAgIGF0ID0gRWRpdG9yLnVuaGFuZ1JhbmdlKGVkaXRvciwgYXQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGVwdGhzID0gRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgICBhdCxcbiAgICAgICAgbWF0Y2gsXG4gICAgICAgIG1vZGUsXG4gICAgICAgIHZvaWRzXG4gICAgICB9KTtcbiAgICAgIHZhciBwYXRoUmVmcyA9IEFycmF5LmZyb20oZGVwdGhzLCBfcmVmNCA9PiB7XG4gICAgICAgIHZhciBbLCBwXSA9IF9yZWY0O1xuICAgICAgICByZXR1cm4gRWRpdG9yLnBhdGhSZWYoZWRpdG9yLCBwKTtcbiAgICAgIH0pO1xuXG4gICAgICBmb3IgKHZhciBwYXRoUmVmIG9mIHBhdGhSZWZzKSB7XG4gICAgICAgIHZhciBwYXRoID0gcGF0aFJlZi51bnJlZigpO1xuXG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgdmFyIFtub2RlXSA9IEVkaXRvci5ub2RlKGVkaXRvciwgcGF0aCk7XG4gICAgICAgICAgZWRpdG9yLmFwcGx5KHtcbiAgICAgICAgICAgIHR5cGU6ICdyZW1vdmVfbm9kZScsXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgbm9kZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogU2V0IG5ldyBwcm9wZXJ0aWVzIG9uIHRoZSBub2RlcyBhdCBhIGxvY2F0aW9uLlxyXG4gICAqL1xuICBzZXROb2RlcyhlZGl0b3IsIHByb3BzKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIEVkaXRvci53aXRob3V0Tm9ybWFsaXppbmcoZWRpdG9yLCAoKSA9PiB7XG4gICAgICB2YXIge1xuICAgICAgICBtYXRjaCxcbiAgICAgICAgYXQgPSBlZGl0b3Iuc2VsZWN0aW9uXG4gICAgICB9ID0gb3B0aW9ucztcbiAgICAgIHZhciB7XG4gICAgICAgIGhhbmdpbmcgPSBmYWxzZSxcbiAgICAgICAgbW9kZSA9ICdsb3dlc3QnLFxuICAgICAgICBzcGxpdCA9IGZhbHNlLFxuICAgICAgICB2b2lkcyA9IGZhbHNlXG4gICAgICB9ID0gb3B0aW9ucztcblxuICAgICAgaWYgKCFhdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXRjaCA9PSBudWxsKSB7XG4gICAgICAgIG1hdGNoID0gUGF0aC5pc1BhdGgoYXQpID8gbWF0Y2hQYXRoKGVkaXRvciwgYXQpIDogbiA9PiBFZGl0b3IuaXNCbG9jayhlZGl0b3IsIG4pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWhhbmdpbmcgJiYgUmFuZ2UuaXNSYW5nZShhdCkpIHtcbiAgICAgICAgYXQgPSBFZGl0b3IudW5oYW5nUmFuZ2UoZWRpdG9yLCBhdCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzcGxpdCAmJiBSYW5nZS5pc1JhbmdlKGF0KSkge1xuICAgICAgICBpZiAoUmFuZ2UuaXNDb2xsYXBzZWQoYXQpICYmIEVkaXRvci5sZWFmKGVkaXRvciwgYXQuYW5jaG9yKVswXS50ZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAvLyBJZiB0aGUgcmFuZ2UgaXMgY29sbGFwc2VkIGluIGEgbm9uLWVtcHR5IG5vZGUgYW5kICdzcGxpdCcgaXMgdHJ1ZSwgdGhlcmUncyBub3RoaW5nIHRvXG4gICAgICAgICAgLy8gc2V0IHRoYXQgd29uJ3QgZ2V0IG5vcm1hbGl6ZWQgYXdheVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByYW5nZVJlZiA9IEVkaXRvci5yYW5nZVJlZihlZGl0b3IsIGF0LCB7XG4gICAgICAgICAgYWZmaW5pdHk6ICdpbndhcmQnXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgW3N0YXJ0LCBlbmRdID0gUmFuZ2UuZWRnZXMoYXQpO1xuICAgICAgICB2YXIgc3BsaXRNb2RlID0gbW9kZSA9PT0gJ2xvd2VzdCcgPyAnbG93ZXN0JyA6ICdoaWdoZXN0JztcbiAgICAgICAgdmFyIGVuZEF0RW5kT2ZOb2RlID0gRWRpdG9yLmlzRW5kKGVkaXRvciwgZW5kLCBlbmQucGF0aCk7XG4gICAgICAgIFRyYW5zZm9ybXMuc3BsaXROb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICBhdDogZW5kLFxuICAgICAgICAgIG1hdGNoLFxuICAgICAgICAgIG1vZGU6IHNwbGl0TW9kZSxcbiAgICAgICAgICB2b2lkcyxcbiAgICAgICAgICBhbHdheXM6ICFlbmRBdEVuZE9mTm9kZVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHN0YXJ0QXRTdGFydE9mTm9kZSA9IEVkaXRvci5pc1N0YXJ0KGVkaXRvciwgc3RhcnQsIHN0YXJ0LnBhdGgpO1xuICAgICAgICBUcmFuc2Zvcm1zLnNwbGl0Tm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgYXQ6IHN0YXJ0LFxuICAgICAgICAgIG1hdGNoLFxuICAgICAgICAgIG1vZGU6IHNwbGl0TW9kZSxcbiAgICAgICAgICB2b2lkcyxcbiAgICAgICAgICBhbHdheXM6ICFzdGFydEF0U3RhcnRPZk5vZGVcbiAgICAgICAgfSk7XG4gICAgICAgIGF0ID0gcmFuZ2VSZWYudW5yZWYoKTtcblxuICAgICAgICBpZiAob3B0aW9ucy5hdCA9PSBudWxsKSB7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5zZWxlY3QoZWRpdG9yLCBhdCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgW25vZGUsIHBhdGhdIG9mIEVkaXRvci5ub2RlcyhlZGl0b3IsIHtcbiAgICAgICAgYXQsXG4gICAgICAgIG1hdGNoLFxuICAgICAgICBtb2RlLFxuICAgICAgICB2b2lkc1xuICAgICAgfSkpIHtcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSB7fTtcbiAgICAgICAgdmFyIG5ld1Byb3BlcnRpZXMgPSB7fTsgLy8gWW91IGNhbid0IHNldCBwcm9wZXJ0aWVzIG9uIHRoZSBlZGl0b3Igbm9kZS5cblxuICAgICAgICBpZiAocGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBoYXNDaGFuZ2VzID0gZmFsc2U7XG5cbiAgICAgICAgZm9yICh2YXIgayBpbiBwcm9wcykge1xuICAgICAgICAgIGlmIChrID09PSAnY2hpbGRyZW4nIHx8IGsgPT09ICd0ZXh0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHByb3BzW2tdICE9PSBub2RlW2tdKSB7XG4gICAgICAgICAgICBoYXNDaGFuZ2VzID0gdHJ1ZTsgLy8gT21pdCBuZXcgcHJvcGVydGllcyBmcm9tIHRoZSBvbGQgcHJvcGVydGllcyBsaXN0XG5cbiAgICAgICAgICAgIGlmIChub2RlLmhhc093blByb3BlcnR5KGspKSBwcm9wZXJ0aWVzW2tdID0gbm9kZVtrXTsgLy8gT21pdCBwcm9wZXJ0aWVzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgbmV3IHByb3BlcnRpZXMgbGlzdFxuXG4gICAgICAgICAgICBpZiAocHJvcHNba10gIT0gbnVsbCkgbmV3UHJvcGVydGllc1trXSA9IHByb3BzW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNDaGFuZ2VzKSB7XG4gICAgICAgICAgZWRpdG9yLmFwcGx5KHtcbiAgICAgICAgICAgIHR5cGU6ICdzZXRfbm9kZScsXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgcHJvcGVydGllcyxcbiAgICAgICAgICAgIG5ld1Byb3BlcnRpZXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIFNwbGl0IHRoZSBub2RlcyBhdCBhIHNwZWNpZmljIGxvY2F0aW9uLlxyXG4gICAqL1xuICBzcGxpdE5vZGVzKGVkaXRvcikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBFZGl0b3Iud2l0aG91dE5vcm1hbGl6aW5nKGVkaXRvciwgKCkgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgbW9kZSA9ICdsb3dlc3QnLFxuICAgICAgICB2b2lkcyA9IGZhbHNlXG4gICAgICB9ID0gb3B0aW9ucztcbiAgICAgIHZhciB7XG4gICAgICAgIG1hdGNoLFxuICAgICAgICBhdCA9IGVkaXRvci5zZWxlY3Rpb24sXG4gICAgICAgIGhlaWdodCA9IDAsXG4gICAgICAgIGFsd2F5cyA9IGZhbHNlXG4gICAgICB9ID0gb3B0aW9ucztcblxuICAgICAgaWYgKG1hdGNoID09IG51bGwpIHtcbiAgICAgICAgbWF0Y2ggPSBuID0+IEVkaXRvci5pc0Jsb2NrKGVkaXRvciwgbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChSYW5nZS5pc1JhbmdlKGF0KSkge1xuICAgICAgICBhdCA9IGRlbGV0ZVJhbmdlKGVkaXRvciwgYXQpO1xuICAgICAgfSAvLyBJZiB0aGUgdGFyZ2V0IGlzIGEgcGF0aCwgdGhlIGRlZmF1bHQgaGVpZ2h0LXNraXBwaW5nIGFuZCBwb3NpdGlvblxuICAgICAgLy8gY291bnRlcnMgbmVlZCB0byBhY2NvdW50IGZvciB1cyBwb3RlbnRpYWxseSBzcGxpdHRpbmcgYXQgYSBub24tbGVhZi5cblxuXG4gICAgICBpZiAoUGF0aC5pc1BhdGgoYXQpKSB7XG4gICAgICAgIHZhciBwYXRoID0gYXQ7XG4gICAgICAgIHZhciBwb2ludCA9IEVkaXRvci5wb2ludChlZGl0b3IsIHBhdGgpO1xuICAgICAgICB2YXIgW3BhcmVudF0gPSBFZGl0b3IucGFyZW50KGVkaXRvciwgcGF0aCk7XG5cbiAgICAgICAgbWF0Y2ggPSBuID0+IG4gPT09IHBhcmVudDtcblxuICAgICAgICBoZWlnaHQgPSBwb2ludC5wYXRoLmxlbmd0aCAtIHBhdGgubGVuZ3RoICsgMTtcbiAgICAgICAgYXQgPSBwb2ludDtcbiAgICAgICAgYWx3YXlzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFhdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBiZWZvcmVSZWYgPSBFZGl0b3IucG9pbnRSZWYoZWRpdG9yLCBhdCwge1xuICAgICAgICBhZmZpbml0eTogJ2JhY2t3YXJkJ1xuICAgICAgfSk7XG4gICAgICB2YXIgW2hpZ2hlc3RdID0gRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgICBhdCxcbiAgICAgICAgbWF0Y2gsXG4gICAgICAgIG1vZGUsXG4gICAgICAgIHZvaWRzXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFoaWdoZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHZvaWRNYXRjaCA9IEVkaXRvci52b2lkKGVkaXRvciwge1xuICAgICAgICBhdCxcbiAgICAgICAgbW9kZTogJ2hpZ2hlc3QnXG4gICAgICB9KTtcbiAgICAgIHZhciBudWRnZSA9IDA7XG5cbiAgICAgIGlmICghdm9pZHMgJiYgdm9pZE1hdGNoKSB7XG4gICAgICAgIHZhciBbdm9pZE5vZGUsIHZvaWRQYXRoXSA9IHZvaWRNYXRjaDtcblxuICAgICAgICBpZiAoRWxlbWVudC5pc0VsZW1lbnQodm9pZE5vZGUpICYmIGVkaXRvci5pc0lubGluZSh2b2lkTm9kZSkpIHtcbiAgICAgICAgICB2YXIgYWZ0ZXIgPSBFZGl0b3IuYWZ0ZXIoZWRpdG9yLCB2b2lkUGF0aCk7XG5cbiAgICAgICAgICBpZiAoIWFmdGVyKSB7XG4gICAgICAgICAgICB2YXIgdGV4dCA9IHtcbiAgICAgICAgICAgICAgdGV4dDogJydcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgYWZ0ZXJQYXRoID0gUGF0aC5uZXh0KHZvaWRQYXRoKTtcbiAgICAgICAgICAgIFRyYW5zZm9ybXMuaW5zZXJ0Tm9kZXMoZWRpdG9yLCB0ZXh0LCB7XG4gICAgICAgICAgICAgIGF0OiBhZnRlclBhdGgsXG4gICAgICAgICAgICAgIHZvaWRzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFmdGVyID0gRWRpdG9yLnBvaW50KGVkaXRvciwgYWZ0ZXJQYXRoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhdCA9IGFmdGVyO1xuICAgICAgICAgIGFsd2F5cyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2libGluZ0hlaWdodCA9IGF0LnBhdGgubGVuZ3RoIC0gdm9pZFBhdGgubGVuZ3RoO1xuICAgICAgICBoZWlnaHQgPSBzaWJsaW5nSGVpZ2h0ICsgMTtcbiAgICAgICAgYWx3YXlzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFmdGVyUmVmID0gRWRpdG9yLnBvaW50UmVmKGVkaXRvciwgYXQpO1xuICAgICAgdmFyIGRlcHRoID0gYXQucGF0aC5sZW5ndGggLSBoZWlnaHQ7XG4gICAgICB2YXIgWywgaGlnaGVzdFBhdGhdID0gaGlnaGVzdDtcbiAgICAgIHZhciBsb3dlc3RQYXRoID0gYXQucGF0aC5zbGljZSgwLCBkZXB0aCk7XG4gICAgICB2YXIgcG9zaXRpb24gPSBoZWlnaHQgPT09IDAgPyBhdC5vZmZzZXQgOiBhdC5wYXRoW2RlcHRoXSArIG51ZGdlO1xuXG4gICAgICBmb3IgKHZhciBbbm9kZSwgX3BhdGgyXSBvZiBFZGl0b3IubGV2ZWxzKGVkaXRvciwge1xuICAgICAgICBhdDogbG93ZXN0UGF0aCxcbiAgICAgICAgcmV2ZXJzZTogdHJ1ZSxcbiAgICAgICAgdm9pZHNcbiAgICAgIH0pKSB7XG4gICAgICAgIHZhciBzcGxpdCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChfcGF0aDIubGVuZ3RoIDwgaGlnaGVzdFBhdGgubGVuZ3RoIHx8IF9wYXRoMi5sZW5ndGggPT09IDAgfHwgIXZvaWRzICYmIEVkaXRvci5pc1ZvaWQoZWRpdG9yLCBub2RlKSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9wb2ludCA9IGJlZm9yZVJlZi5jdXJyZW50O1xuICAgICAgICB2YXIgaXNFbmQgPSBFZGl0b3IuaXNFbmQoZWRpdG9yLCBfcG9pbnQsIF9wYXRoMik7XG5cbiAgICAgICAgaWYgKGFsd2F5cyB8fCAhYmVmb3JlUmVmIHx8ICFFZGl0b3IuaXNFZGdlKGVkaXRvciwgX3BvaW50LCBfcGF0aDIpKSB7XG4gICAgICAgICAgc3BsaXQgPSB0cnVlO1xuICAgICAgICAgIHZhciBwcm9wZXJ0aWVzID0gTm9kZS5leHRyYWN0UHJvcHMobm9kZSk7XG4gICAgICAgICAgZWRpdG9yLmFwcGx5KHtcbiAgICAgICAgICAgIHR5cGU6ICdzcGxpdF9ub2RlJyxcbiAgICAgICAgICAgIHBhdGg6IF9wYXRoMixcbiAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgcHJvcGVydGllc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9zaXRpb24gPSBfcGF0aDJbX3BhdGgyLmxlbmd0aCAtIDFdICsgKHNwbGl0IHx8IGlzRW5kID8gMSA6IDApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5hdCA9PSBudWxsKSB7XG4gICAgICAgIHZhciBfcG9pbnQyID0gYWZ0ZXJSZWYuY3VycmVudCB8fCBFZGl0b3IuZW5kKGVkaXRvciwgW10pO1xuXG4gICAgICAgIFRyYW5zZm9ybXMuc2VsZWN0KGVkaXRvciwgX3BvaW50Mik7XG4gICAgICB9XG5cbiAgICAgIGJlZm9yZVJlZi51bnJlZigpO1xuICAgICAgYWZ0ZXJSZWYudW5yZWYoKTtcbiAgICB9KTtcbiAgfSxcblxuICAvKipcclxuICAgKiBVbnNldCBwcm9wZXJ0aWVzIG9uIHRoZSBub2RlcyBhdCBhIGxvY2F0aW9uLlxyXG4gICAqL1xuICB1bnNldE5vZGVzKGVkaXRvciwgcHJvcHMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcHMpKSB7XG4gICAgICBwcm9wcyA9IFtwcm9wc107XG4gICAgfVxuXG4gICAgdmFyIG9iaiA9IHt9O1xuXG4gICAgZm9yICh2YXIga2V5IG9mIHByb3BzKSB7XG4gICAgICBvYmpba2V5XSA9IG51bGw7XG4gICAgfVxuXG4gICAgVHJhbnNmb3Jtcy5zZXROb2RlcyhlZGl0b3IsIG9iaiwgb3B0aW9ucyk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogVW53cmFwIHRoZSBub2RlcyBhdCBhIGxvY2F0aW9uIGZyb20gYSBwYXJlbnQgbm9kZSwgc3BsaXR0aW5nIHRoZSBwYXJlbnQgaWZcclxuICAgKiBuZWNlc3NhcnkgdG8gZW5zdXJlIHRoYXQgb25seSB0aGUgY29udGVudCBpbiB0aGUgcmFuZ2UgaXMgdW53cmFwcGVkLlxyXG4gICAqL1xuICB1bndyYXBOb2RlcyhlZGl0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgRWRpdG9yLndpdGhvdXROb3JtYWxpemluZyhlZGl0b3IsICgpID0+IHtcbiAgICAgIHZhciB7XG4gICAgICAgIG1vZGUgPSAnbG93ZXN0JyxcbiAgICAgICAgc3BsaXQgPSBmYWxzZSxcbiAgICAgICAgdm9pZHMgPSBmYWxzZVxuICAgICAgfSA9IG9wdGlvbnM7XG4gICAgICB2YXIge1xuICAgICAgICBhdCA9IGVkaXRvci5zZWxlY3Rpb24sXG4gICAgICAgIG1hdGNoXG4gICAgICB9ID0gb3B0aW9ucztcblxuICAgICAgaWYgKCFhdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXRjaCA9PSBudWxsKSB7XG4gICAgICAgIG1hdGNoID0gUGF0aC5pc1BhdGgoYXQpID8gbWF0Y2hQYXRoKGVkaXRvciwgYXQpIDogbiA9PiBFZGl0b3IuaXNCbG9jayhlZGl0b3IsIG4pO1xuICAgICAgfVxuXG4gICAgICBpZiAoUGF0aC5pc1BhdGgoYXQpKSB7XG4gICAgICAgIGF0ID0gRWRpdG9yLnJhbmdlKGVkaXRvciwgYXQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmFuZ2VSZWYgPSBSYW5nZS5pc1JhbmdlKGF0KSA/IEVkaXRvci5yYW5nZVJlZihlZGl0b3IsIGF0KSA6IG51bGw7XG4gICAgICB2YXIgbWF0Y2hlcyA9IEVkaXRvci5ub2RlcyhlZGl0b3IsIHtcbiAgICAgICAgYXQsXG4gICAgICAgIG1hdGNoLFxuICAgICAgICBtb2RlLFxuICAgICAgICB2b2lkc1xuICAgICAgfSk7XG4gICAgICB2YXIgcGF0aFJlZnMgPSBBcnJheS5mcm9tKG1hdGNoZXMsIF9yZWY1ID0+IHtcbiAgICAgICAgdmFyIFssIHBdID0gX3JlZjU7XG4gICAgICAgIHJldHVybiBFZGl0b3IucGF0aFJlZihlZGl0b3IsIHApO1xuICAgICAgfSAvLyB1bndyYXBOb2RlIHdpbGwgY2FsbCBsaWZ0Tm9kZSB3aGljaCBkb2VzIG5vdCBzdXBwb3J0IHNwbGl0dGluZyB0aGUgbm9kZSB3aGVuIG5lc3RlZC5cbiAgICAgIC8vIElmIHdlIGRvIG5vdCByZXZlcnNlIHRoZSBvcmRlciBhbmQgY2FsbCBpdCBmcm9tIHRvcCB0byB0aGUgYm90dG9tLCBpdCB3aWxsIHJlbW92ZSBhbGwgYmxvY2tzXG4gICAgICAvLyB0aGF0IHdyYXAgdGFyZ2V0IG5vZGUuIFNvIHdlIHJldmVyc2UgdGhlIG9yZGVyLlxuICAgICAgKS5yZXZlcnNlKCk7XG5cbiAgICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKHBhdGhSZWYpIHtcbiAgICAgICAgdmFyIHBhdGggPSBwYXRoUmVmLnVucmVmKCk7XG4gICAgICAgIHZhciBbbm9kZV0gPSBFZGl0b3Iubm9kZShlZGl0b3IsIHBhdGgpO1xuICAgICAgICB2YXIgcmFuZ2UgPSBFZGl0b3IucmFuZ2UoZWRpdG9yLCBwYXRoKTtcblxuICAgICAgICBpZiAoc3BsaXQgJiYgcmFuZ2VSZWYpIHtcbiAgICAgICAgICByYW5nZSA9IFJhbmdlLmludGVyc2VjdGlvbihyYW5nZVJlZi5jdXJyZW50LCByYW5nZSk7XG4gICAgICAgIH1cblxuICAgICAgICBUcmFuc2Zvcm1zLmxpZnROb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICBhdDogcmFuZ2UsXG4gICAgICAgICAgbWF0Y2g6IG4gPT4gRWxlbWVudC5pc0FuY2VzdG9yKG5vZGUpICYmIG5vZGUuY2hpbGRyZW4uaW5jbHVkZXMobiksXG4gICAgICAgICAgdm9pZHNcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBmb3IgKHZhciBwYXRoUmVmIG9mIHBhdGhSZWZzKSB7XG4gICAgICAgIF9sb29wKHBhdGhSZWYpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmFuZ2VSZWYpIHtcbiAgICAgICAgcmFuZ2VSZWYudW5yZWYoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvKipcclxuICAgKiBXcmFwIHRoZSBub2RlcyBhdCBhIGxvY2F0aW9uIGluIGEgbmV3IGNvbnRhaW5lciBub2RlLCBzcGxpdHRpbmcgdGhlIGVkZ2VzXHJcbiAgICogb2YgdGhlIHJhbmdlIGZpcnN0IHRvIGVuc3VyZSB0aGF0IG9ubHkgdGhlIGNvbnRlbnQgaW4gdGhlIHJhbmdlIGlzIHdyYXBwZWQuXHJcbiAgICovXG4gIHdyYXBOb2RlcyhlZGl0b3IsIGVsZW1lbnQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgRWRpdG9yLndpdGhvdXROb3JtYWxpemluZyhlZGl0b3IsICgpID0+IHtcbiAgICAgIHZhciB7XG4gICAgICAgIG1vZGUgPSAnbG93ZXN0JyxcbiAgICAgICAgc3BsaXQgPSBmYWxzZSxcbiAgICAgICAgdm9pZHMgPSBmYWxzZVxuICAgICAgfSA9IG9wdGlvbnM7XG4gICAgICB2YXIge1xuICAgICAgICBtYXRjaCxcbiAgICAgICAgYXQgPSBlZGl0b3Iuc2VsZWN0aW9uXG4gICAgICB9ID0gb3B0aW9ucztcblxuICAgICAgaWYgKCFhdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXRjaCA9PSBudWxsKSB7XG4gICAgICAgIGlmIChQYXRoLmlzUGF0aChhdCkpIHtcbiAgICAgICAgICBtYXRjaCA9IG1hdGNoUGF0aChlZGl0b3IsIGF0KTtcbiAgICAgICAgfSBlbHNlIGlmIChlZGl0b3IuaXNJbmxpbmUoZWxlbWVudCkpIHtcbiAgICAgICAgICBtYXRjaCA9IG4gPT4gRWRpdG9yLmlzSW5saW5lKGVkaXRvciwgbikgfHwgVGV4dC5pc1RleHQobik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWF0Y2ggPSBuID0+IEVkaXRvci5pc0Jsb2NrKGVkaXRvciwgbik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHNwbGl0ICYmIFJhbmdlLmlzUmFuZ2UoYXQpKSB7XG4gICAgICAgIHZhciBbc3RhcnQsIGVuZF0gPSBSYW5nZS5lZGdlcyhhdCk7XG4gICAgICAgIHZhciByYW5nZVJlZiA9IEVkaXRvci5yYW5nZVJlZihlZGl0b3IsIGF0LCB7XG4gICAgICAgICAgYWZmaW5pdHk6ICdpbndhcmQnXG4gICAgICAgIH0pO1xuICAgICAgICBUcmFuc2Zvcm1zLnNwbGl0Tm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgYXQ6IGVuZCxcbiAgICAgICAgICBtYXRjaCxcbiAgICAgICAgICB2b2lkc1xuICAgICAgICB9KTtcbiAgICAgICAgVHJhbnNmb3Jtcy5zcGxpdE5vZGVzKGVkaXRvciwge1xuICAgICAgICAgIGF0OiBzdGFydCxcbiAgICAgICAgICBtYXRjaCxcbiAgICAgICAgICB2b2lkc1xuICAgICAgICB9KTtcbiAgICAgICAgYXQgPSByYW5nZVJlZi51bnJlZigpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmF0ID09IG51bGwpIHtcbiAgICAgICAgICBUcmFuc2Zvcm1zLnNlbGVjdChlZGl0b3IsIGF0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgcm9vdHMgPSBBcnJheS5mcm9tKEVkaXRvci5ub2RlcyhlZGl0b3IsIHtcbiAgICAgICAgYXQsXG4gICAgICAgIG1hdGNoOiBlZGl0b3IuaXNJbmxpbmUoZWxlbWVudCkgPyBuID0+IEVkaXRvci5pc0Jsb2NrKGVkaXRvciwgbikgOiBuID0+IEVkaXRvci5pc0VkaXRvcihuKSxcbiAgICAgICAgbW9kZTogJ2xvd2VzdCcsXG4gICAgICAgIHZvaWRzXG4gICAgICB9KSk7XG5cbiAgICAgIGZvciAodmFyIFssIHJvb3RQYXRoXSBvZiByb290cykge1xuICAgICAgICB2YXIgYSA9IFJhbmdlLmlzUmFuZ2UoYXQpID8gUmFuZ2UuaW50ZXJzZWN0aW9uKGF0LCBFZGl0b3IucmFuZ2UoZWRpdG9yLCByb290UGF0aCkpIDogYXQ7XG5cbiAgICAgICAgaWYgKCFhKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbWF0Y2hlcyA9IEFycmF5LmZyb20oRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgICAgIGF0OiBhLFxuICAgICAgICAgIG1hdGNoLFxuICAgICAgICAgIG1vZGUsXG4gICAgICAgICAgdm9pZHNcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB2YXIgX3JldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBbZmlyc3RdID0gbWF0Y2hlcztcbiAgICAgICAgICAgIHZhciBsYXN0ID0gbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgdmFyIFssIGZpcnN0UGF0aF0gPSBmaXJzdDtcbiAgICAgICAgICAgIHZhciBbLCBsYXN0UGF0aF0gPSBsYXN0O1xuXG4gICAgICAgICAgICBpZiAoZmlyc3RQYXRoLmxlbmd0aCA9PT0gMCAmJiBsYXN0UGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgLy8gaWYgdGhlcmUncyBubyBtYXRjaGluZyBwYXJlbnQgLSB1c3VhbGx5IG1lYW5zIHRoZSBub2RlIGlzIGFuIGVkaXRvciAtIGRvbid0IGRvIGFueXRoaW5nXG4gICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjb21tb25QYXRoID0gUGF0aC5lcXVhbHMoZmlyc3RQYXRoLCBsYXN0UGF0aCkgPyBQYXRoLnBhcmVudChmaXJzdFBhdGgpIDogUGF0aC5jb21tb24oZmlyc3RQYXRoLCBsYXN0UGF0aCk7XG4gICAgICAgICAgICB2YXIgcmFuZ2UgPSBFZGl0b3IucmFuZ2UoZWRpdG9yLCBmaXJzdFBhdGgsIGxhc3RQYXRoKTtcbiAgICAgICAgICAgIHZhciBjb21tb25Ob2RlRW50cnkgPSBFZGl0b3Iubm9kZShlZGl0b3IsIGNvbW1vblBhdGgpO1xuICAgICAgICAgICAgdmFyIFtjb21tb25Ob2RlXSA9IGNvbW1vbk5vZGVFbnRyeTtcbiAgICAgICAgICAgIHZhciBkZXB0aCA9IGNvbW1vblBhdGgubGVuZ3RoICsgMTtcbiAgICAgICAgICAgIHZhciB3cmFwcGVyUGF0aCA9IFBhdGgubmV4dChsYXN0UGF0aC5zbGljZSgwLCBkZXB0aCkpO1xuXG4gICAgICAgICAgICB2YXIgd3JhcHBlciA9IF9vYmplY3RTcHJlYWQkMihfb2JqZWN0U3ByZWFkJDIoe30sIGVsZW1lbnQpLCB7fSwge1xuICAgICAgICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBUcmFuc2Zvcm1zLmluc2VydE5vZGVzKGVkaXRvciwgd3JhcHBlciwge1xuICAgICAgICAgICAgICBhdDogd3JhcHBlclBhdGgsXG4gICAgICAgICAgICAgIHZvaWRzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFRyYW5zZm9ybXMubW92ZU5vZGVzKGVkaXRvciwge1xuICAgICAgICAgICAgICBhdDogcmFuZ2UsXG4gICAgICAgICAgICAgIG1hdGNoOiBuID0+IEVsZW1lbnQuaXNBbmNlc3Rvcihjb21tb25Ob2RlKSAmJiBjb21tb25Ob2RlLmNoaWxkcmVuLmluY2x1ZGVzKG4pLFxuICAgICAgICAgICAgICB0bzogd3JhcHBlclBhdGguY29uY2F0KDApLFxuICAgICAgICAgICAgICB2b2lkc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSgpO1xuXG4gICAgICAgICAgaWYgKF9yZXQgPT09IFwiY29udGludWVcIikgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59O1xuXG52YXIgaGFzU2luZ2xlQ2hpbGROZXN0ID0gKGVkaXRvciwgbm9kZSkgPT4ge1xuICBpZiAoRWxlbWVudC5pc0VsZW1lbnQobm9kZSkpIHtcbiAgICB2YXIgZWxlbWVudCA9IG5vZGU7XG5cbiAgICBpZiAoRWRpdG9yLmlzVm9pZChlZGl0b3IsIG5vZGUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gaGFzU2luZ2xlQ2hpbGROZXN0KGVkaXRvciwgZWxlbWVudC5jaGlsZHJlblswXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoRWRpdG9yLmlzRWRpdG9yKG5vZGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuLyoqXHJcbiAqIENvbnZlcnQgYSByYW5nZSBpbnRvIGEgcG9pbnQgYnkgZGVsZXRpbmcgaXQncyBjb250ZW50LlxyXG4gKi9cblxuXG52YXIgZGVsZXRlUmFuZ2UgPSAoZWRpdG9yLCByYW5nZSkgPT4ge1xuICBpZiAoUmFuZ2UuaXNDb2xsYXBzZWQocmFuZ2UpKSB7XG4gICAgcmV0dXJuIHJhbmdlLmFuY2hvcjtcbiAgfSBlbHNlIHtcbiAgICB2YXIgWywgZW5kXSA9IFJhbmdlLmVkZ2VzKHJhbmdlKTtcbiAgICB2YXIgcG9pbnRSZWYgPSBFZGl0b3IucG9pbnRSZWYoZWRpdG9yLCBlbmQpO1xuICAgIFRyYW5zZm9ybXMuZGVsZXRlKGVkaXRvciwge1xuICAgICAgYXQ6IHJhbmdlXG4gICAgfSk7XG4gICAgcmV0dXJuIHBvaW50UmVmLnVucmVmKCk7XG4gIH1cbn07XG5cbnZhciBtYXRjaFBhdGggPSAoZWRpdG9yLCBwYXRoKSA9PiB7XG4gIHZhciBbbm9kZV0gPSBFZGl0b3Iubm9kZShlZGl0b3IsIHBhdGgpO1xuICByZXR1cm4gbiA9PiBuID09PSBub2RlO1xufTtcblxuZnVuY3Rpb24gb3duS2V5cyQxKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSB7IHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsgfSBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQxKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMkMShPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzJDEoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG52YXIgU2VsZWN0aW9uVHJhbnNmb3JtcyA9IHtcbiAgLyoqXHJcbiAgICogQ29sbGFwc2UgdGhlIHNlbGVjdGlvbi5cclxuICAgKi9cbiAgY29sbGFwc2UoZWRpdG9yKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICBlZGdlID0gJ2FuY2hvcidcbiAgICB9ID0gb3B0aW9ucztcbiAgICB2YXIge1xuICAgICAgc2VsZWN0aW9uXG4gICAgfSA9IGVkaXRvcjtcblxuICAgIGlmICghc2VsZWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChlZGdlID09PSAnYW5jaG9yJykge1xuICAgICAgVHJhbnNmb3Jtcy5zZWxlY3QoZWRpdG9yLCBzZWxlY3Rpb24uYW5jaG9yKTtcbiAgICB9IGVsc2UgaWYgKGVkZ2UgPT09ICdmb2N1cycpIHtcbiAgICAgIFRyYW5zZm9ybXMuc2VsZWN0KGVkaXRvciwgc2VsZWN0aW9uLmZvY3VzKTtcbiAgICB9IGVsc2UgaWYgKGVkZ2UgPT09ICdzdGFydCcpIHtcbiAgICAgIHZhciBbc3RhcnRdID0gUmFuZ2UuZWRnZXMoc2VsZWN0aW9uKTtcbiAgICAgIFRyYW5zZm9ybXMuc2VsZWN0KGVkaXRvciwgc3RhcnQpO1xuICAgIH0gZWxzZSBpZiAoZWRnZSA9PT0gJ2VuZCcpIHtcbiAgICAgIHZhciBbLCBlbmRdID0gUmFuZ2UuZWRnZXMoc2VsZWN0aW9uKTtcbiAgICAgIFRyYW5zZm9ybXMuc2VsZWN0KGVkaXRvciwgZW5kKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogVW5zZXQgdGhlIHNlbGVjdGlvbi5cclxuICAgKi9cbiAgZGVzZWxlY3QoZWRpdG9yKSB7XG4gICAgdmFyIHtcbiAgICAgIHNlbGVjdGlvblxuICAgIH0gPSBlZGl0b3I7XG5cbiAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICBlZGl0b3IuYXBwbHkoe1xuICAgICAgICB0eXBlOiAnc2V0X3NlbGVjdGlvbicsXG4gICAgICAgIHByb3BlcnRpZXM6IHNlbGVjdGlvbixcbiAgICAgICAgbmV3UHJvcGVydGllczogbnVsbFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxyXG4gICAqIE1vdmUgdGhlIHNlbGVjdGlvbidzIHBvaW50IGZvcndhcmQgb3IgYmFja3dhcmQuXHJcbiAgICovXG4gIG1vdmUoZWRpdG9yKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICBzZWxlY3Rpb25cbiAgICB9ID0gZWRpdG9yO1xuICAgIHZhciB7XG4gICAgICBkaXN0YW5jZSA9IDEsXG4gICAgICB1bml0ID0gJ2NoYXJhY3RlcicsXG4gICAgICByZXZlcnNlID0gZmFsc2VcbiAgICB9ID0gb3B0aW9ucztcbiAgICB2YXIge1xuICAgICAgZWRnZSA9IG51bGxcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIGlmICghc2VsZWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVkZ2UgPT09ICdzdGFydCcpIHtcbiAgICAgIGVkZ2UgPSBSYW5nZS5pc0JhY2t3YXJkKHNlbGVjdGlvbikgPyAnZm9jdXMnIDogJ2FuY2hvcic7XG4gICAgfVxuXG4gICAgaWYgKGVkZ2UgPT09ICdlbmQnKSB7XG4gICAgICBlZGdlID0gUmFuZ2UuaXNCYWNrd2FyZChzZWxlY3Rpb24pID8gJ2FuY2hvcicgOiAnZm9jdXMnO1xuICAgIH1cblxuICAgIHZhciB7XG4gICAgICBhbmNob3IsXG4gICAgICBmb2N1c1xuICAgIH0gPSBzZWxlY3Rpb247XG4gICAgdmFyIG9wdHMgPSB7XG4gICAgICBkaXN0YW5jZSxcbiAgICAgIHVuaXRcbiAgICB9O1xuICAgIHZhciBwcm9wcyA9IHt9O1xuXG4gICAgaWYgKGVkZ2UgPT0gbnVsbCB8fCBlZGdlID09PSAnYW5jaG9yJykge1xuICAgICAgdmFyIHBvaW50ID0gcmV2ZXJzZSA/IEVkaXRvci5iZWZvcmUoZWRpdG9yLCBhbmNob3IsIG9wdHMpIDogRWRpdG9yLmFmdGVyKGVkaXRvciwgYW5jaG9yLCBvcHRzKTtcblxuICAgICAgaWYgKHBvaW50KSB7XG4gICAgICAgIHByb3BzLmFuY2hvciA9IHBvaW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlZGdlID09IG51bGwgfHwgZWRnZSA9PT0gJ2ZvY3VzJykge1xuICAgICAgdmFyIF9wb2ludCA9IHJldmVyc2UgPyBFZGl0b3IuYmVmb3JlKGVkaXRvciwgZm9jdXMsIG9wdHMpIDogRWRpdG9yLmFmdGVyKGVkaXRvciwgZm9jdXMsIG9wdHMpO1xuXG4gICAgICBpZiAoX3BvaW50KSB7XG4gICAgICAgIHByb3BzLmZvY3VzID0gX3BvaW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIFRyYW5zZm9ybXMuc2V0U2VsZWN0aW9uKGVkaXRvciwgcHJvcHMpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIFNldCB0aGUgc2VsZWN0aW9uIHRvIGEgbmV3IHZhbHVlLlxyXG4gICAqL1xuICBzZWxlY3QoZWRpdG9yLCB0YXJnZXQpIHtcbiAgICB2YXIge1xuICAgICAgc2VsZWN0aW9uXG4gICAgfSA9IGVkaXRvcjtcbiAgICB0YXJnZXQgPSBFZGl0b3IucmFuZ2UoZWRpdG9yLCB0YXJnZXQpO1xuXG4gICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgVHJhbnNmb3Jtcy5zZXRTZWxlY3Rpb24oZWRpdG9yLCB0YXJnZXQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghUmFuZ2UuaXNSYW5nZSh0YXJnZXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXaGVuIHNldHRpbmcgdGhlIHNlbGVjdGlvbiBhbmQgdGhlIGN1cnJlbnQgc2VsZWN0aW9uIGlzIGBudWxsYCB5b3UgbXVzdCBwcm92aWRlIGF0IGxlYXN0IGFuIGBhbmNob3JgIGFuZCBgZm9jdXNgLCBidXQgeW91IHBhc3NlZDogXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KHRhcmdldCkpKTtcbiAgICB9XG5cbiAgICBlZGl0b3IuYXBwbHkoe1xuICAgICAgdHlwZTogJ3NldF9zZWxlY3Rpb24nLFxuICAgICAgcHJvcGVydGllczogc2VsZWN0aW9uLFxuICAgICAgbmV3UHJvcGVydGllczogdGFyZ2V0XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogU2V0IG5ldyBwcm9wZXJ0aWVzIG9uIG9uZSBvZiB0aGUgc2VsZWN0aW9uJ3MgcG9pbnRzLlxyXG4gICAqL1xuICBzZXRQb2ludChlZGl0b3IsIHByb3BzKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICBzZWxlY3Rpb25cbiAgICB9ID0gZWRpdG9yO1xuICAgIHZhciB7XG4gICAgICBlZGdlID0gJ2JvdGgnXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICBpZiAoIXNlbGVjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlZGdlID09PSAnc3RhcnQnKSB7XG4gICAgICBlZGdlID0gUmFuZ2UuaXNCYWNrd2FyZChzZWxlY3Rpb24pID8gJ2ZvY3VzJyA6ICdhbmNob3InO1xuICAgIH1cblxuICAgIGlmIChlZGdlID09PSAnZW5kJykge1xuICAgICAgZWRnZSA9IFJhbmdlLmlzQmFja3dhcmQoc2VsZWN0aW9uKSA/ICdhbmNob3InIDogJ2ZvY3VzJztcbiAgICB9XG5cbiAgICB2YXIge1xuICAgICAgYW5jaG9yLFxuICAgICAgZm9jdXNcbiAgICB9ID0gc2VsZWN0aW9uO1xuICAgIHZhciBwb2ludCA9IGVkZ2UgPT09ICdhbmNob3InID8gYW5jaG9yIDogZm9jdXM7XG4gICAgVHJhbnNmb3Jtcy5zZXRTZWxlY3Rpb24oZWRpdG9yLCB7XG4gICAgICBbZWRnZSA9PT0gJ2FuY2hvcicgPyAnYW5jaG9yJyA6ICdmb2N1cyddOiBfb2JqZWN0U3ByZWFkJDEoX29iamVjdFNwcmVhZCQxKHt9LCBwb2ludCksIHByb3BzKVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIFNldCBuZXcgcHJvcGVydGllcyBvbiB0aGUgc2VsZWN0aW9uLlxyXG4gICAqL1xuICBzZXRTZWxlY3Rpb24oZWRpdG9yLCBwcm9wcykge1xuICAgIHZhciB7XG4gICAgICBzZWxlY3Rpb25cbiAgICB9ID0gZWRpdG9yO1xuICAgIHZhciBvbGRQcm9wcyA9IHt9O1xuICAgIHZhciBuZXdQcm9wcyA9IHt9O1xuXG4gICAgaWYgKCFzZWxlY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBrIGluIHByb3BzKSB7XG4gICAgICBpZiAoayA9PT0gJ2FuY2hvcicgJiYgcHJvcHMuYW5jaG9yICE9IG51bGwgJiYgIVBvaW50LmVxdWFscyhwcm9wcy5hbmNob3IsIHNlbGVjdGlvbi5hbmNob3IpIHx8IGsgPT09ICdmb2N1cycgJiYgcHJvcHMuZm9jdXMgIT0gbnVsbCAmJiAhUG9pbnQuZXF1YWxzKHByb3BzLmZvY3VzLCBzZWxlY3Rpb24uZm9jdXMpIHx8IGsgIT09ICdhbmNob3InICYmIGsgIT09ICdmb2N1cycgJiYgcHJvcHNba10gIT09IHNlbGVjdGlvbltrXSkge1xuICAgICAgICBvbGRQcm9wc1trXSA9IHNlbGVjdGlvbltrXTtcbiAgICAgICAgbmV3UHJvcHNba10gPSBwcm9wc1trXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoT2JqZWN0LmtleXMob2xkUHJvcHMpLmxlbmd0aCA+IDApIHtcbiAgICAgIGVkaXRvci5hcHBseSh7XG4gICAgICAgIHR5cGU6ICdzZXRfc2VsZWN0aW9uJyxcbiAgICAgICAgcHJvcGVydGllczogb2xkUHJvcHMsXG4gICAgICAgIG5ld1Byb3BlcnRpZXM6IG5ld1Byb3BzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufTtcblxudmFyIFRleHRUcmFuc2Zvcm1zID0ge1xuICAvKipcclxuICAgKiBEZWxldGUgY29udGVudCBpbiB0aGUgZWRpdG9yLlxyXG4gICAqL1xuICBkZWxldGUoZWRpdG9yKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIEVkaXRvci53aXRob3V0Tm9ybWFsaXppbmcoZWRpdG9yLCAoKSA9PiB7XG4gICAgICB2YXIge1xuICAgICAgICByZXZlcnNlID0gZmFsc2UsXG4gICAgICAgIHVuaXQgPSAnY2hhcmFjdGVyJyxcbiAgICAgICAgZGlzdGFuY2UgPSAxLFxuICAgICAgICB2b2lkcyA9IGZhbHNlXG4gICAgICB9ID0gb3B0aW9ucztcbiAgICAgIHZhciB7XG4gICAgICAgIGF0ID0gZWRpdG9yLnNlbGVjdGlvbixcbiAgICAgICAgaGFuZ2luZyA9IGZhbHNlXG4gICAgICB9ID0gb3B0aW9ucztcblxuICAgICAgaWYgKCFhdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChSYW5nZS5pc1JhbmdlKGF0KSAmJiBSYW5nZS5pc0NvbGxhcHNlZChhdCkpIHtcbiAgICAgICAgYXQgPSBhdC5hbmNob3I7XG4gICAgICB9XG5cbiAgICAgIGlmIChQb2ludC5pc1BvaW50KGF0KSkge1xuICAgICAgICB2YXIgZnVydGhlc3RWb2lkID0gRWRpdG9yLnZvaWQoZWRpdG9yLCB7XG4gICAgICAgICAgYXQsXG4gICAgICAgICAgbW9kZTogJ2hpZ2hlc3QnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghdm9pZHMgJiYgZnVydGhlc3RWb2lkKSB7XG4gICAgICAgICAgdmFyIFssIHZvaWRQYXRoXSA9IGZ1cnRoZXN0Vm9pZDtcbiAgICAgICAgICBhdCA9IHZvaWRQYXRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBvcHRzID0ge1xuICAgICAgICAgICAgdW5pdCxcbiAgICAgICAgICAgIGRpc3RhbmNlXG4gICAgICAgICAgfTtcbiAgICAgICAgICB2YXIgdGFyZ2V0ID0gcmV2ZXJzZSA/IEVkaXRvci5iZWZvcmUoZWRpdG9yLCBhdCwgb3B0cykgfHwgRWRpdG9yLnN0YXJ0KGVkaXRvciwgW10pIDogRWRpdG9yLmFmdGVyKGVkaXRvciwgYXQsIG9wdHMpIHx8IEVkaXRvci5lbmQoZWRpdG9yLCBbXSk7XG4gICAgICAgICAgYXQgPSB7XG4gICAgICAgICAgICBhbmNob3I6IGF0LFxuICAgICAgICAgICAgZm9jdXM6IHRhcmdldFxuICAgICAgICAgIH07XG4gICAgICAgICAgaGFuZ2luZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFBhdGguaXNQYXRoKGF0KSkge1xuICAgICAgICBUcmFuc2Zvcm1zLnJlbW92ZU5vZGVzKGVkaXRvciwge1xuICAgICAgICAgIGF0LFxuICAgICAgICAgIHZvaWRzXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChSYW5nZS5pc0NvbGxhcHNlZChhdCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWhhbmdpbmcpIHtcbiAgICAgICAgdmFyIFssIF9lbmRdID0gUmFuZ2UuZWRnZXMoYXQpO1xuICAgICAgICB2YXIgZW5kT2ZEb2MgPSBFZGl0b3IuZW5kKGVkaXRvciwgW10pO1xuXG4gICAgICAgIGlmICghUG9pbnQuZXF1YWxzKF9lbmQsIGVuZE9mRG9jKSkge1xuICAgICAgICAgIGF0ID0gRWRpdG9yLnVuaGFuZ1JhbmdlKGVkaXRvciwgYXQsIHtcbiAgICAgICAgICAgIHZvaWRzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIFtzdGFydCwgZW5kXSA9IFJhbmdlLmVkZ2VzKGF0KTtcbiAgICAgIHZhciBzdGFydEJsb2NrID0gRWRpdG9yLmFib3ZlKGVkaXRvciwge1xuICAgICAgICBtYXRjaDogbiA9PiBFZGl0b3IuaXNCbG9jayhlZGl0b3IsIG4pLFxuICAgICAgICBhdDogc3RhcnQsXG4gICAgICAgIHZvaWRzXG4gICAgICB9KTtcbiAgICAgIHZhciBlbmRCbG9jayA9IEVkaXRvci5hYm92ZShlZGl0b3IsIHtcbiAgICAgICAgbWF0Y2g6IG4gPT4gRWRpdG9yLmlzQmxvY2soZWRpdG9yLCBuKSxcbiAgICAgICAgYXQ6IGVuZCxcbiAgICAgICAgdm9pZHNcbiAgICAgIH0pO1xuICAgICAgdmFyIGlzQWNyb3NzQmxvY2tzID0gc3RhcnRCbG9jayAmJiBlbmRCbG9jayAmJiAhUGF0aC5lcXVhbHMoc3RhcnRCbG9ja1sxXSwgZW5kQmxvY2tbMV0pO1xuICAgICAgdmFyIGlzU2luZ2xlVGV4dCA9IFBhdGguZXF1YWxzKHN0YXJ0LnBhdGgsIGVuZC5wYXRoKTtcbiAgICAgIHZhciBzdGFydFZvaWQgPSB2b2lkcyA/IG51bGwgOiBFZGl0b3Iudm9pZChlZGl0b3IsIHtcbiAgICAgICAgYXQ6IHN0YXJ0LFxuICAgICAgICBtb2RlOiAnaGlnaGVzdCdcbiAgICAgIH0pO1xuICAgICAgdmFyIGVuZFZvaWQgPSB2b2lkcyA/IG51bGwgOiBFZGl0b3Iudm9pZChlZGl0b3IsIHtcbiAgICAgICAgYXQ6IGVuZCxcbiAgICAgICAgbW9kZTogJ2hpZ2hlc3QnXG4gICAgICB9KTsgLy8gSWYgdGhlIHN0YXJ0IG9yIGVuZCBwb2ludHMgYXJlIGluc2lkZSBhbiBpbmxpbmUgdm9pZCwgbnVkZ2UgdGhlbSBvdXQuXG5cbiAgICAgIGlmIChzdGFydFZvaWQpIHtcbiAgICAgICAgdmFyIGJlZm9yZSA9IEVkaXRvci5iZWZvcmUoZWRpdG9yLCBzdGFydCk7XG5cbiAgICAgICAgaWYgKGJlZm9yZSAmJiBzdGFydEJsb2NrICYmIFBhdGguaXNBbmNlc3RvcihzdGFydEJsb2NrWzFdLCBiZWZvcmUucGF0aCkpIHtcbiAgICAgICAgICBzdGFydCA9IGJlZm9yZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZW5kVm9pZCkge1xuICAgICAgICB2YXIgYWZ0ZXIgPSBFZGl0b3IuYWZ0ZXIoZWRpdG9yLCBlbmQpO1xuXG4gICAgICAgIGlmIChhZnRlciAmJiBlbmRCbG9jayAmJiBQYXRoLmlzQW5jZXN0b3IoZW5kQmxvY2tbMV0sIGFmdGVyLnBhdGgpKSB7XG4gICAgICAgICAgZW5kID0gYWZ0ZXI7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gR2V0IHRoZSBoaWdoZXN0IG5vZGVzIHRoYXQgYXJlIGNvbXBsZXRlbHkgaW5zaWRlIHRoZSByYW5nZSwgYXMgd2VsbCBhc1xuICAgICAgLy8gdGhlIHN0YXJ0IGFuZCBlbmQgbm9kZXMuXG5cblxuICAgICAgdmFyIG1hdGNoZXMgPSBbXTtcbiAgICAgIHZhciBsYXN0UGF0aDtcblxuICAgICAgZm9yICh2YXIgZW50cnkgb2YgRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgICBhdCxcbiAgICAgICAgdm9pZHNcbiAgICAgIH0pKSB7XG4gICAgICAgIHZhciBbbm9kZSwgcGF0aF0gPSBlbnRyeTtcblxuICAgICAgICBpZiAobGFzdFBhdGggJiYgUGF0aC5jb21wYXJlKHBhdGgsIGxhc3RQYXRoKSA9PT0gMCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF2b2lkcyAmJiBFZGl0b3IuaXNWb2lkKGVkaXRvciwgbm9kZSkgfHwgIVBhdGguaXNDb21tb24ocGF0aCwgc3RhcnQucGF0aCkgJiYgIVBhdGguaXNDb21tb24ocGF0aCwgZW5kLnBhdGgpKSB7XG4gICAgICAgICAgbWF0Y2hlcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICBsYXN0UGF0aCA9IHBhdGg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHBhdGhSZWZzID0gQXJyYXkuZnJvbShtYXRjaGVzLCBfcmVmID0+IHtcbiAgICAgICAgdmFyIFssIHBdID0gX3JlZjtcbiAgICAgICAgcmV0dXJuIEVkaXRvci5wYXRoUmVmKGVkaXRvciwgcCk7XG4gICAgICB9KTtcbiAgICAgIHZhciBzdGFydFJlZiA9IEVkaXRvci5wb2ludFJlZihlZGl0b3IsIHN0YXJ0KTtcbiAgICAgIHZhciBlbmRSZWYgPSBFZGl0b3IucG9pbnRSZWYoZWRpdG9yLCBlbmQpO1xuXG4gICAgICBpZiAoIWlzU2luZ2xlVGV4dCAmJiAhc3RhcnRWb2lkKSB7XG4gICAgICAgIHZhciBfcG9pbnQgPSBzdGFydFJlZi5jdXJyZW50O1xuICAgICAgICB2YXIgW19ub2RlXSA9IEVkaXRvci5sZWFmKGVkaXRvciwgX3BvaW50KTtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBwYXRoOiBfcGF0aFxuICAgICAgICB9ID0gX3BvaW50O1xuICAgICAgICB2YXIge1xuICAgICAgICAgIG9mZnNldFxuICAgICAgICB9ID0gc3RhcnQ7XG5cbiAgICAgICAgdmFyIHRleHQgPSBfbm9kZS50ZXh0LnNsaWNlKG9mZnNldCk7XG5cbiAgICAgICAgaWYgKHRleHQubGVuZ3RoID4gMCkgZWRpdG9yLmFwcGx5KHtcbiAgICAgICAgICB0eXBlOiAncmVtb3ZlX3RleHQnLFxuICAgICAgICAgIHBhdGg6IF9wYXRoLFxuICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICB0ZXh0XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBwYXRoUmVmIG9mIHBhdGhSZWZzKSB7XG4gICAgICAgIHZhciBfcGF0aDIgPSBwYXRoUmVmLnVucmVmKCk7XG5cbiAgICAgICAgVHJhbnNmb3Jtcy5yZW1vdmVOb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICBhdDogX3BhdGgyLFxuICAgICAgICAgIHZvaWRzXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWVuZFZvaWQpIHtcbiAgICAgICAgdmFyIF9wb2ludDIgPSBlbmRSZWYuY3VycmVudDtcbiAgICAgICAgdmFyIFtfbm9kZTJdID0gRWRpdG9yLmxlYWYoZWRpdG9yLCBfcG9pbnQyKTtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBwYXRoOiBfcGF0aDNcbiAgICAgICAgfSA9IF9wb2ludDI7XG5cbiAgICAgICAgdmFyIF9vZmZzZXQgPSBpc1NpbmdsZVRleHQgPyBzdGFydC5vZmZzZXQgOiAwO1xuXG4gICAgICAgIHZhciBfdGV4dCA9IF9ub2RlMi50ZXh0LnNsaWNlKF9vZmZzZXQsIGVuZC5vZmZzZXQpO1xuXG4gICAgICAgIGlmIChfdGV4dC5sZW5ndGggPiAwKSBlZGl0b3IuYXBwbHkoe1xuICAgICAgICAgIHR5cGU6ICdyZW1vdmVfdGV4dCcsXG4gICAgICAgICAgcGF0aDogX3BhdGgzLFxuICAgICAgICAgIG9mZnNldDogX29mZnNldCxcbiAgICAgICAgICB0ZXh0OiBfdGV4dFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1NpbmdsZVRleHQgJiYgaXNBY3Jvc3NCbG9ja3MgJiYgZW5kUmVmLmN1cnJlbnQgJiYgc3RhcnRSZWYuY3VycmVudCkge1xuICAgICAgICBUcmFuc2Zvcm1zLm1lcmdlTm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgYXQ6IGVuZFJlZi5jdXJyZW50LFxuICAgICAgICAgIGhhbmdpbmc6IHRydWUsXG4gICAgICAgICAgdm9pZHNcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBwb2ludCA9IHJldmVyc2UgPyBzdGFydFJlZi51bnJlZigpIHx8IGVuZFJlZi51bnJlZigpIDogZW5kUmVmLnVucmVmKCkgfHwgc3RhcnRSZWYudW5yZWYoKTtcblxuICAgICAgaWYgKG9wdGlvbnMuYXQgPT0gbnVsbCAmJiBwb2ludCkge1xuICAgICAgICBUcmFuc2Zvcm1zLnNlbGVjdChlZGl0b3IsIHBvaW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvKipcclxuICAgKiBJbnNlcnQgYSBmcmFnbWVudCBhdCBhIHNwZWNpZmljIGxvY2F0aW9uIGluIHRoZSBlZGl0b3IuXHJcbiAgICovXG4gIGluc2VydEZyYWdtZW50KGVkaXRvciwgZnJhZ21lbnQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgRWRpdG9yLndpdGhvdXROb3JtYWxpemluZyhlZGl0b3IsICgpID0+IHtcbiAgICAgIHZhciB7XG4gICAgICAgIGhhbmdpbmcgPSBmYWxzZSxcbiAgICAgICAgdm9pZHMgPSBmYWxzZVxuICAgICAgfSA9IG9wdGlvbnM7XG4gICAgICB2YXIge1xuICAgICAgICBhdCA9IGVkaXRvci5zZWxlY3Rpb25cbiAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgICBpZiAoIWZyYWdtZW50Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghYXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmIChSYW5nZS5pc1JhbmdlKGF0KSkge1xuICAgICAgICBpZiAoIWhhbmdpbmcpIHtcbiAgICAgICAgICBhdCA9IEVkaXRvci51bmhhbmdSYW5nZShlZGl0b3IsIGF0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChSYW5nZS5pc0NvbGxhcHNlZChhdCkpIHtcbiAgICAgICAgICBhdCA9IGF0LmFuY2hvcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgWywgZW5kXSA9IFJhbmdlLmVkZ2VzKGF0KTtcblxuICAgICAgICAgIGlmICghdm9pZHMgJiYgRWRpdG9yLnZvaWQoZWRpdG9yLCB7XG4gICAgICAgICAgICBhdDogZW5kXG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcG9pbnRSZWYgPSBFZGl0b3IucG9pbnRSZWYoZWRpdG9yLCBlbmQpO1xuICAgICAgICAgIFRyYW5zZm9ybXMuZGVsZXRlKGVkaXRvciwge1xuICAgICAgICAgICAgYXRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhdCA9IHBvaW50UmVmLnVucmVmKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoUGF0aC5pc1BhdGgoYXQpKSB7XG4gICAgICAgIGF0ID0gRWRpdG9yLnN0YXJ0KGVkaXRvciwgYXQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXZvaWRzICYmIEVkaXRvci52b2lkKGVkaXRvciwge1xuICAgICAgICBhdFxuICAgICAgfSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBJZiB0aGUgaW5zZXJ0IHBvaW50IGlzIGF0IHRoZSBlZGdlIG9mIGFuIGlubGluZSBub2RlLCBtb3ZlIGl0IG91dHNpZGVcbiAgICAgIC8vIGluc3RlYWQgc2luY2UgaXQgd2lsbCBuZWVkIHRvIGJlIHNwbGl0IG90aGVyd2lzZS5cblxuXG4gICAgICB2YXIgaW5saW5lRWxlbWVudE1hdGNoID0gRWRpdG9yLmFib3ZlKGVkaXRvciwge1xuICAgICAgICBhdCxcbiAgICAgICAgbWF0Y2g6IG4gPT4gRWRpdG9yLmlzSW5saW5lKGVkaXRvciwgbiksXG4gICAgICAgIG1vZGU6ICdoaWdoZXN0JyxcbiAgICAgICAgdm9pZHNcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaW5saW5lRWxlbWVudE1hdGNoKSB7XG4gICAgICAgIHZhciBbLCBfaW5saW5lUGF0aF0gPSBpbmxpbmVFbGVtZW50TWF0Y2g7XG5cbiAgICAgICAgaWYgKEVkaXRvci5pc0VuZChlZGl0b3IsIGF0LCBfaW5saW5lUGF0aCkpIHtcbiAgICAgICAgICB2YXIgYWZ0ZXIgPSBFZGl0b3IuYWZ0ZXIoZWRpdG9yLCBfaW5saW5lUGF0aCk7XG4gICAgICAgICAgYXQgPSBhZnRlcjtcbiAgICAgICAgfSBlbHNlIGlmIChFZGl0b3IuaXNTdGFydChlZGl0b3IsIGF0LCBfaW5saW5lUGF0aCkpIHtcbiAgICAgICAgICB2YXIgYmVmb3JlID0gRWRpdG9yLmJlZm9yZShlZGl0b3IsIF9pbmxpbmVQYXRoKTtcbiAgICAgICAgICBhdCA9IGJlZm9yZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgYmxvY2tNYXRjaCA9IEVkaXRvci5hYm92ZShlZGl0b3IsIHtcbiAgICAgICAgbWF0Y2g6IG4gPT4gRWRpdG9yLmlzQmxvY2soZWRpdG9yLCBuKSxcbiAgICAgICAgYXQsXG4gICAgICAgIHZvaWRzXG4gICAgICB9KTtcbiAgICAgIHZhciBbLCBibG9ja1BhdGhdID0gYmxvY2tNYXRjaDtcbiAgICAgIHZhciBpc0Jsb2NrU3RhcnQgPSBFZGl0b3IuaXNTdGFydChlZGl0b3IsIGF0LCBibG9ja1BhdGgpO1xuICAgICAgdmFyIGlzQmxvY2tFbmQgPSBFZGl0b3IuaXNFbmQoZWRpdG9yLCBhdCwgYmxvY2tQYXRoKTtcbiAgICAgIHZhciBpc0Jsb2NrRW1wdHkgPSBpc0Jsb2NrU3RhcnQgJiYgaXNCbG9ja0VuZDtcbiAgICAgIHZhciBtZXJnZVN0YXJ0ID0gIWlzQmxvY2tTdGFydCB8fCBpc0Jsb2NrU3RhcnQgJiYgaXNCbG9ja0VuZDtcbiAgICAgIHZhciBtZXJnZUVuZCA9ICFpc0Jsb2NrRW5kO1xuICAgICAgdmFyIFssIGZpcnN0UGF0aF0gPSBOb2RlLmZpcnN0KHtcbiAgICAgICAgY2hpbGRyZW46IGZyYWdtZW50XG4gICAgICB9LCBbXSk7XG4gICAgICB2YXIgWywgbGFzdFBhdGhdID0gTm9kZS5sYXN0KHtcbiAgICAgICAgY2hpbGRyZW46IGZyYWdtZW50XG4gICAgICB9LCBbXSk7XG4gICAgICB2YXIgbWF0Y2hlcyA9IFtdO1xuXG4gICAgICB2YXIgbWF0Y2hlciA9IF9yZWYyID0+IHtcbiAgICAgICAgdmFyIFtuLCBwXSA9IF9yZWYyO1xuICAgICAgICB2YXIgaXNSb290ID0gcC5sZW5ndGggPT09IDA7XG5cbiAgICAgICAgaWYgKGlzUm9vdCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0Jsb2NrRW1wdHkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZXJnZVN0YXJ0ICYmIFBhdGguaXNBbmNlc3RvcihwLCBmaXJzdFBhdGgpICYmIEVsZW1lbnQuaXNFbGVtZW50KG4pICYmICFlZGl0b3IuaXNWb2lkKG4pICYmICFlZGl0b3IuaXNJbmxpbmUobikpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWVyZ2VFbmQgJiYgUGF0aC5pc0FuY2VzdG9yKHAsIGxhc3RQYXRoKSAmJiBFbGVtZW50LmlzRWxlbWVudChuKSAmJiAhZWRpdG9yLmlzVm9pZChuKSAmJiAhZWRpdG9yLmlzSW5saW5lKG4pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuXG4gICAgICBmb3IgKHZhciBlbnRyeSBvZiBOb2RlLm5vZGVzKHtcbiAgICAgICAgY2hpbGRyZW46IGZyYWdtZW50XG4gICAgICB9LCB7XG4gICAgICAgIHBhc3M6IG1hdGNoZXJcbiAgICAgIH0pKSB7XG4gICAgICAgIGlmIChtYXRjaGVyKGVudHJ5KSkge1xuICAgICAgICAgIG1hdGNoZXMucHVzaChlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXJ0cyA9IFtdO1xuICAgICAgdmFyIG1pZGRsZXMgPSBbXTtcbiAgICAgIHZhciBlbmRzID0gW107XG4gICAgICB2YXIgc3RhcnRpbmcgPSB0cnVlO1xuICAgICAgdmFyIGhhc0Jsb2NrcyA9IGZhbHNlO1xuXG4gICAgICBmb3IgKHZhciBbbm9kZV0gb2YgbWF0Y2hlcykge1xuICAgICAgICBpZiAoRWxlbWVudC5pc0VsZW1lbnQobm9kZSkgJiYgIWVkaXRvci5pc0lubGluZShub2RlKSkge1xuICAgICAgICAgIHN0YXJ0aW5nID0gZmFsc2U7XG4gICAgICAgICAgaGFzQmxvY2tzID0gdHJ1ZTtcbiAgICAgICAgICBtaWRkbGVzLnB1c2gobm9kZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhcnRpbmcpIHtcbiAgICAgICAgICBzdGFydHMucHVzaChub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbmRzLnB1c2gobm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIFtpbmxpbmVNYXRjaF0gPSBFZGl0b3Iubm9kZXMoZWRpdG9yLCB7XG4gICAgICAgIGF0LFxuICAgICAgICBtYXRjaDogbiA9PiBUZXh0LmlzVGV4dChuKSB8fCBFZGl0b3IuaXNJbmxpbmUoZWRpdG9yLCBuKSxcbiAgICAgICAgbW9kZTogJ2hpZ2hlc3QnLFxuICAgICAgICB2b2lkc1xuICAgICAgfSk7XG4gICAgICB2YXIgWywgaW5saW5lUGF0aF0gPSBpbmxpbmVNYXRjaDtcbiAgICAgIHZhciBpc0lubGluZVN0YXJ0ID0gRWRpdG9yLmlzU3RhcnQoZWRpdG9yLCBhdCwgaW5saW5lUGF0aCk7XG4gICAgICB2YXIgaXNJbmxpbmVFbmQgPSBFZGl0b3IuaXNFbmQoZWRpdG9yLCBhdCwgaW5saW5lUGF0aCk7XG4gICAgICB2YXIgbWlkZGxlUmVmID0gRWRpdG9yLnBhdGhSZWYoZWRpdG9yLCBpc0Jsb2NrRW5kID8gUGF0aC5uZXh0KGJsb2NrUGF0aCkgOiBibG9ja1BhdGgpO1xuICAgICAgdmFyIGVuZFJlZiA9IEVkaXRvci5wYXRoUmVmKGVkaXRvciwgaXNJbmxpbmVFbmQgPyBQYXRoLm5leHQoaW5saW5lUGF0aCkgOiBpbmxpbmVQYXRoKTtcbiAgICAgIHZhciBibG9ja1BhdGhSZWYgPSBFZGl0b3IucGF0aFJlZihlZGl0b3IsIGJsb2NrUGF0aCk7XG4gICAgICBUcmFuc2Zvcm1zLnNwbGl0Tm9kZXMoZWRpdG9yLCB7XG4gICAgICAgIGF0LFxuICAgICAgICBtYXRjaDogbiA9PiBoYXNCbG9ja3MgPyBFZGl0b3IuaXNCbG9jayhlZGl0b3IsIG4pIDogVGV4dC5pc1RleHQobikgfHwgRWRpdG9yLmlzSW5saW5lKGVkaXRvciwgbiksXG4gICAgICAgIG1vZGU6IGhhc0Jsb2NrcyA/ICdsb3dlc3QnIDogJ2hpZ2hlc3QnLFxuICAgICAgICB2b2lkc1xuICAgICAgfSk7XG4gICAgICB2YXIgc3RhcnRSZWYgPSBFZGl0b3IucGF0aFJlZihlZGl0b3IsICFpc0lubGluZVN0YXJ0IHx8IGlzSW5saW5lU3RhcnQgJiYgaXNJbmxpbmVFbmQgPyBQYXRoLm5leHQoaW5saW5lUGF0aCkgOiBpbmxpbmVQYXRoKTtcbiAgICAgIFRyYW5zZm9ybXMuaW5zZXJ0Tm9kZXMoZWRpdG9yLCBzdGFydHMsIHtcbiAgICAgICAgYXQ6IHN0YXJ0UmVmLmN1cnJlbnQsXG4gICAgICAgIG1hdGNoOiBuID0+IFRleHQuaXNUZXh0KG4pIHx8IEVkaXRvci5pc0lubGluZShlZGl0b3IsIG4pLFxuICAgICAgICBtb2RlOiAnaGlnaGVzdCcsXG4gICAgICAgIHZvaWRzXG4gICAgICB9KTtcblxuICAgICAgaWYgKGlzQmxvY2tFbXB0eSAmJiBtaWRkbGVzLmxlbmd0aCkge1xuICAgICAgICBUcmFuc2Zvcm1zLmRlbGV0ZShlZGl0b3IsIHtcbiAgICAgICAgICBhdDogYmxvY2tQYXRoUmVmLnVucmVmKCksXG4gICAgICAgICAgdm9pZHNcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIFRyYW5zZm9ybXMuaW5zZXJ0Tm9kZXMoZWRpdG9yLCBtaWRkbGVzLCB7XG4gICAgICAgIGF0OiBtaWRkbGVSZWYuY3VycmVudCxcbiAgICAgICAgbWF0Y2g6IG4gPT4gRWRpdG9yLmlzQmxvY2soZWRpdG9yLCBuKSxcbiAgICAgICAgbW9kZTogJ2xvd2VzdCcsXG4gICAgICAgIHZvaWRzXG4gICAgICB9KTtcbiAgICAgIFRyYW5zZm9ybXMuaW5zZXJ0Tm9kZXMoZWRpdG9yLCBlbmRzLCB7XG4gICAgICAgIGF0OiBlbmRSZWYuY3VycmVudCxcbiAgICAgICAgbWF0Y2g6IG4gPT4gVGV4dC5pc1RleHQobikgfHwgRWRpdG9yLmlzSW5saW5lKGVkaXRvciwgbiksXG4gICAgICAgIG1vZGU6ICdoaWdoZXN0JyxcbiAgICAgICAgdm9pZHNcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIW9wdGlvbnMuYXQpIHtcbiAgICAgICAgdmFyIHBhdGg7XG5cbiAgICAgICAgaWYgKGVuZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHBhdGggPSBQYXRoLnByZXZpb3VzKGVuZFJlZi5jdXJyZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChtaWRkbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBwYXRoID0gUGF0aC5wcmV2aW91cyhtaWRkbGVSZWYuY3VycmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGF0aCA9IFBhdGgucHJldmlvdXMoc3RhcnRSZWYuY3VycmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX2VuZDIgPSBFZGl0b3IuZW5kKGVkaXRvciwgcGF0aCk7XG5cbiAgICAgICAgVHJhbnNmb3Jtcy5zZWxlY3QoZWRpdG9yLCBfZW5kMik7XG4gICAgICB9XG5cbiAgICAgIHN0YXJ0UmVmLnVucmVmKCk7XG4gICAgICBtaWRkbGVSZWYudW5yZWYoKTtcbiAgICAgIGVuZFJlZi51bnJlZigpO1xuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEluc2VydCBhIHN0cmluZyBvZiB0ZXh0IGluIHRoZSBFZGl0b3IuXHJcbiAgICovXG4gIGluc2VydFRleHQoZWRpdG9yLCB0ZXh0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIEVkaXRvci53aXRob3V0Tm9ybWFsaXppbmcoZWRpdG9yLCAoKSA9PiB7XG4gICAgICB2YXIge1xuICAgICAgICB2b2lkcyA9IGZhbHNlXG4gICAgICB9ID0gb3B0aW9ucztcbiAgICAgIHZhciB7XG4gICAgICAgIGF0ID0gZWRpdG9yLnNlbGVjdGlvblxuICAgICAgfSA9IG9wdGlvbnM7XG5cbiAgICAgIGlmICghYXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoUGF0aC5pc1BhdGgoYXQpKSB7XG4gICAgICAgIGF0ID0gRWRpdG9yLnJhbmdlKGVkaXRvciwgYXQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoUmFuZ2UuaXNSYW5nZShhdCkpIHtcbiAgICAgICAgaWYgKFJhbmdlLmlzQ29sbGFwc2VkKGF0KSkge1xuICAgICAgICAgIGF0ID0gYXQuYW5jaG9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBlbmQgPSBSYW5nZS5lbmQoYXQpO1xuXG4gICAgICAgICAgaWYgKCF2b2lkcyAmJiBFZGl0b3Iudm9pZChlZGl0b3IsIHtcbiAgICAgICAgICAgIGF0OiBlbmRcbiAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBwb2ludFJlZiA9IEVkaXRvci5wb2ludFJlZihlZGl0b3IsIGVuZCk7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5kZWxldGUoZWRpdG9yLCB7XG4gICAgICAgICAgICBhdCxcbiAgICAgICAgICAgIHZvaWRzXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYXQgPSBwb2ludFJlZi51bnJlZigpO1xuICAgICAgICAgIFRyYW5zZm9ybXMuc2V0U2VsZWN0aW9uKGVkaXRvciwge1xuICAgICAgICAgICAgYW5jaG9yOiBhdCxcbiAgICAgICAgICAgIGZvY3VzOiBhdFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghdm9pZHMgJiYgRWRpdG9yLnZvaWQoZWRpdG9yLCB7XG4gICAgICAgIGF0XG4gICAgICB9KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB7XG4gICAgICAgIHBhdGgsXG4gICAgICAgIG9mZnNldFxuICAgICAgfSA9IGF0O1xuICAgICAgaWYgKHRleHQubGVuZ3RoID4gMCkgZWRpdG9yLmFwcGx5KHtcbiAgICAgICAgdHlwZTogJ2luc2VydF90ZXh0JyxcbiAgICAgICAgcGF0aCxcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICB0ZXh0XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG59O1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSB7IHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsgfSBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG52YXIgVHJhbnNmb3JtcyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIEdlbmVyYWxUcmFuc2Zvcm1zKSwgTm9kZVRyYW5zZm9ybXMpLCBTZWxlY3Rpb25UcmFuc2Zvcm1zKSwgVGV4dFRyYW5zZm9ybXMpO1xuXG5leHBvcnQgeyBFZGl0b3IsIEVsZW1lbnQsIExvY2F0aW9uLCBOb2RlLCBPcGVyYXRpb24sIFBhdGgsIFBhdGhSZWYsIFBvaW50LCBQb2ludFJlZiwgUmFuZ2UsIFJhbmdlUmVmLCBTcGFuLCBUZXh0LCBUcmFuc2Zvcm1zLCBjcmVhdGVFZGl0b3IgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzLmpzLm1hcFxuIiwidmFyIF9fcmVhZCA9ICh0aGlzICYmIHRoaXMuX19yZWFkKSB8fCBmdW5jdGlvbiAobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59O1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbnZhciBEaWFsb2dDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSk7XHJcbnZhciBEaWFsb2dWaXNpYmxlUHJvdmlkZXIgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuO1xyXG4gICAgdmFyIF9iID0gX19yZWFkKHVzZVN0YXRlKGZhbHNlKSwgMiksIHZpc2libGUgPSBfYlswXSwgc2V0VmlzaWJsZSA9IF9iWzFdO1xyXG4gICAgdmFyIHZhbHVlID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7IHJldHVybiAoeyB2aXNpYmxlOiB2aXNpYmxlLCBzZXRWaXNpYmxlOiBzZXRWaXNpYmxlIH0pOyB9LCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0pO1xyXG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KERpYWxvZ0NvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IHZhbHVlIH0sIGNoaWxkcmVuKSk7XHJcbn07XHJcbmV4cG9ydCB2YXIgdXNlRGlhbG9nSXNWaXNpYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgcmV0dXJuIChfYSA9IHVzZUNvbnRleHQoRGlhbG9nQ29udGV4dCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS52aXNpYmxlO1xyXG59O1xyXG5leHBvcnQgdmFyIHVzZVNldERpYWxvZ0lzVmlzaWJsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfYTtcclxuICAgIHJldHVybiAoX2EgPSB1c2VDb250ZXh0KERpYWxvZ0NvbnRleHQpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0VmlzaWJsZTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nVmlzaWJsZVByb3ZpZGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1EaWFsb2dWaXNpYmxlUHJvdmlkZXIuanMubWFwIiwidmFyIF9fcmVhZCA9ICh0aGlzICYmIHRoaXMuX19yZWFkKSB8fCBmdW5jdGlvbiAobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59O1xyXG5pbXBvcnQgeyBkZWVwRXF1YWxzIH0gZnJvbSAnQHJlYWN0LXBhZ2UvZWRpdG9yJztcclxuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC5kZWJvdW5jZSc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlLCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlRWRpdG9yLCBUcmFuc2Zvcm1zIH0gZnJvbSAnc2xhdGUnO1xyXG5pbXBvcnQgeyBTbGF0ZSwgd2l0aFJlYWN0IH0gZnJvbSAnc2xhdGUtcmVhY3QnO1xyXG5pbXBvcnQgd2l0aElubGluZSBmcm9tICcuLi9zbGF0ZUVuaGFuY2VyL3dpdGhJbmxpbmUnO1xyXG5pbXBvcnQgd2l0aFBhc3RlIGZyb20gJy4uL3NsYXRlRW5oYW5jZXIvd2l0aFBhc3RlJztcclxuaW1wb3J0IERpYWxvZ1Zpc2libGVQcm92aWRlciBmcm9tICcuL0RpYWxvZ1Zpc2libGVQcm92aWRlcic7XHJcbnZhciBTbGF0ZVByb3ZpZGVyID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICB2YXIgZGF0YSA9IHByb3BzLmRhdGEsIHBsdWdpbnMgPSBwcm9wcy5wbHVnaW5zLCBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLCBkZWZhdWx0UGx1Z2luVHlwZSA9IHByb3BzLmRlZmF1bHRQbHVnaW5UeXBlO1xyXG4gICAgdmFyIF9hID0gX19yZWFkKHVzZVN0YXRlKGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YS5zbGF0ZSksIDIpLCB2YWx1ZSA9IF9hWzBdLCBzZXRWYWx1ZSA9IF9hWzFdO1xyXG4gICAgdmFyIHZhbHVlUmVmID0gdXNlUmVmKHZhbHVlKTtcclxuICAgIHZhbHVlUmVmLmN1cnJlbnQgPSB2YWx1ZTtcclxuICAgIHZhciBlZGl0b3IgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gd2l0aFBhc3RlKHBsdWdpbnMsIGRlZmF1bHRQbHVnaW5UeXBlKSh3aXRoUmVhY3Qod2l0aElubGluZShwbHVnaW5zKShjcmVhdGVFZGl0b3IoKSkpKTtcclxuICAgIH0sIFtdKTtcclxuICAgIHZhciBvbkNoYW5nZURlYm91bmNlZCA9IHVzZUNhbGxiYWNrKGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwcm9wcy5vbkNoYW5nZSh7XHJcbiAgICAgICAgICAgIHNsYXRlOiB2YWx1ZVJlZi5jdXJyZW50LFxyXG4gICAgICAgICAgICBzZWxlY3Rpb246IGVkaXRvci5zZWxlY3Rpb24sXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAvLyBtYXJrIGFzIG5vdCB1bmRvYWJsZSB3aGVuIHN0YXRlIGlzIHNhbWVcclxuICAgICAgICAgICAgLy8gdGhhdCBoYXBwZW5zIGlmIG9ubHkgc2VsZWN0aW9uIHdhcyBjaGFuZ2VkXHJcbiAgICAgICAgICAgIG5vdFVuZG9hYmxlOiBkZWVwRXF1YWxzKHZhbHVlUmVmLmN1cnJlbnQsIGRhdGEuc2xhdGUpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgMjAwKSwgW3Byb3BzLm9uQ2hhbmdlLCBlZGl0b3IsIGRhdGEuc2xhdGVdKTtcclxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGRhdGEuc2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBzZWxlY2l0b24sIGlmIGNoYW5nZWQgZnJvbSBvdXRzaWRlIChlLmcuIHRocm91Z2ggdW5kbylcclxuICAgICAgICAgICAgVHJhbnNmb3Jtcy5zZWxlY3QoZWRpdG9yLCBkYXRhLnNlbGVjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBkZXNlbGVjdCwgb3RoZXJ3aXNlIHNsYXRlIG1pZ2h0IHRocm93IGFuIGVlcnJvciBpZiBjdXJzb3IgaXMgbm93IG9uIGEgbm9uIGV4aXN0aW5nIGRvbSBub2RlXHJcbiAgICAgICAgICAgIFRyYW5zZm9ybXMuZGVzZWxlY3QoZWRpdG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VmFsdWUoZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhLnNsYXRlKTtcclxuICAgIH0sIFtkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGEuc2xhdGUsIGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YS5zZWxlY3Rpb25dKTtcclxuICAgIHZhciBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgaWYgKGVkaXRvci5zZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgc2V0VmFsdWUodik7XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlRGVib3VuY2VkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW29uQ2hhbmdlRGVib3VuY2VkXSk7XHJcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGlhbG9nVmlzaWJsZVByb3ZpZGVyLCBudWxsLFxyXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2xhdGUsIHsgZWRpdG9yOiBlZGl0b3IsIHZhbHVlOiB2YWx1ZSwgb25DaGFuZ2U6IG9uQ2hhbmdlIH0sIGNoaWxkcmVuKSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTbGF0ZVByb3ZpZGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1TbGF0ZVByb3ZpZGVyLmpzLm1hcCIsInZhciB3aXRoSW5saW5lID0gZnVuY3Rpb24gKHBsdWdpbnMpIHsgcmV0dXJuIGZ1bmN0aW9uIChlZGl0b3IpIHtcclxuICAgIHZhciBpc0lubGluZSA9IGVkaXRvci5pc0lubGluZTtcclxuICAgIGVkaXRvci5pc0lubGluZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHBsdWdpbnMuc29tZShmdW5jdGlvbiAocGx1Z2luKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwbHVnaW4ucGx1Z2luVHlwZSA9PT0gJ2NvbXBvbmVudCcgJiZcclxuICAgICAgICAgICAgICAgIHBsdWdpbi5vYmplY3QgPT09ICdpbmxpbmUnICYmXHJcbiAgICAgICAgICAgICAgICBwbHVnaW4udHlwZSA9PT0gZWxlbWVudC50eXBlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICA6IGlzSW5saW5lKGVsZW1lbnQpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBlZGl0b3I7XHJcbn07IH07XHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhJbmxpbmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGhJbmxpbmUuanMubWFwIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbmltcG9ydCB7IG9iaklzTm9kZSB9IGZyb20gJ0ByZWFjdC1wYWdlL2VkaXRvcic7XHJcbmltcG9ydCB7IFRyYW5zZm9ybXMgfSBmcm9tICdzbGF0ZSc7XHJcbmltcG9ydCB7IEh0bWxUb1NsYXRlIH0gZnJvbSAnLi4vaHRtbFRvU2xhdGUnO1xyXG52YXIgd2l0aFBhc3RlID0gZnVuY3Rpb24gKHBsdWdpbnMsIGRlZmF1bHRQbHVnaW5UeXBlKSB7IHJldHVybiBmdW5jdGlvbiAoZWRpdG9yKSB7XHJcbiAgICB2YXIgaW5zZXJ0RGF0YSA9IGVkaXRvci5pbnNlcnREYXRhO1xyXG4gICAgdmFyIGh0bWxUb1NsYXRlID0gSHRtbFRvU2xhdGUoeyBwbHVnaW5zOiBwbHVnaW5zIH0pO1xyXG4gICAgZWRpdG9yLmluc2VydERhdGEgPSBmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2xhdGVEYXRhLCBodG1sLCBzbGF0ZSwgdGV4dCwgbm9kZSwgbGluZXMsIG5leHRXaWxsYmVQYXJhZ3JhcGgsIGksIHRoaXNMaW5lLCBuZXh0TGluZSwgbmV4dElzRW1wdHksIHRoaXNMaW5lVGV4dDtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBzbGF0ZURhdGEgPSBkYXRhLmdldERhdGEoJ2FwcGxpY2F0aW9uL3gtc2xhdGUtZnJhZ21lbnQnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2xhdGVEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydERhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbCA9IGRhdGEuZ2V0RGF0YSgndGV4dC9odG1sJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFodG1sKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBodG1sVG9TbGF0ZShodG1sKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgc2xhdGUgPSAoX2Euc2VudCgpKS5zbGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICBUcmFuc2Zvcm1zLmluc2VydEZyYWdtZW50KGVkaXRvciwgc2xhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gZGF0YS5nZXREYXRhKCd0ZXh0L3BsYWluJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgaXRzIGEgcmVhY3QtcGFnZSBkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlID0gSlNPTi5wYXJzZSh0ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmpJc05vZGUobm9kZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMgPSB0ZXh0LnNwbGl0KCdcXG4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFdpbGxiZVBhcmFncmFwaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNMaW5lID0gbGluZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0TGluZSA9IGxpbmVzW2kgKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRJc0VtcHR5ID0gIW5leHRMaW5lIHx8ICFuZXh0TGluZS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzTGluZVRleHQgPSB0aGlzTGluZSArIChuZXh0SXNFbXB0eSA/ICcnIDogJ1xcbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzTGluZS50cmltKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGxpbmUgaXMgZW1wdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFdpbGxiZVBhcmFncmFwaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXh0V2lsbGJlUGFyYWdyYXBoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNmb3Jtcy5pbnNlcnROb2RlcyhlZGl0b3IsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZGVmYXVsdFBsdWdpblR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbeyB0ZXh0OiB0aGlzTGluZVRleHQgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFdpbGxiZVBhcmFncmFwaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNmb3Jtcy5pbnNlcnRUZXh0KGVkaXRvciwgdGhpc0xpbmVUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0V2lsbGJlUGFyYWdyYXBoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpbnNlcnREYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7IH07XHJcbiAgICByZXR1cm4gZWRpdG9yO1xyXG59OyB9O1xyXG5leHBvcnQgZGVmYXVsdCB3aXRoUGFzdGU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGhQYXN0ZS5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9