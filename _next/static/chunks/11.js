(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[11],{

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

/***/ "../packages/plugins/content/slate/lib-es/components/SlateEditor.js":
/*!**************************************************************************!*\
  !*** ../packages/plugins/content/slate/lib-es/components/SlateEditor.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_page_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-page/editor */ "../packages/editor/lib-es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate-react */ "../node_modules/slate-react/dist/index.es.js");
/* harmony import */ var _DialogVisibleProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DialogVisibleProvider */ "../packages/plugins/content/slate/lib-es/components/DialogVisibleProvider.js");
/* harmony import */ var _hotkeyHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hotkeyHooks */ "../packages/plugins/content/slate/lib-es/components/hotkeyHooks.js");
/* harmony import */ var _renderHooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderHooks */ "../packages/plugins/content/slate/lib-es/components/renderHooks.js");






var HoverButtons = Object(_react_page_editor__WEBPACK_IMPORTED_MODULE_0__["lazyLoad"])(function () { return __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! ./HoverButtons */ "../packages/plugins/content/slate/lib-es/components/HoverButtons.js")); });
var SlateEditable = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(function (props) {
    var plugins = props.plugins, defaultPluginType = props.defaultPluginType, readOnly = props.readOnly, placeholder = props.placeholder;
    var injections = {
        useSelected: slate_react__WEBPACK_IMPORTED_MODULE_2__["useSelected"],
        useFocused: slate_react__WEBPACK_IMPORTED_MODULE_2__["useFocused"],
    };
    var renderElement = Object(_renderHooks__WEBPACK_IMPORTED_MODULE_5__["useRenderElement"])({ plugins: plugins, defaultPluginType: defaultPluginType, injections: injections }, []);
    var renderLeaf = Object(_renderHooks__WEBPACK_IMPORTED_MODULE_5__["useRenderLeave"])({ plugins: plugins, injections: injections }, []);
    var onKeyDown = Object(_hotkeyHooks__WEBPACK_IMPORTED_MODULE_4__["useOnKeyDown"])({ plugins: plugins }, []);
    // this is required so that dialogs & controls don't mess with slate's selection
    var dialogVisible = Object(_DialogVisibleProvider__WEBPACK_IMPORTED_MODULE_3__["useDialogIsVisible"])();
    var multipleNodesSelected = Object(_react_page_editor__WEBPACK_IMPORTED_MODULE_0__["useAllFocusedNodeIds"])().length > 1;
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(slate_react__WEBPACK_IMPORTED_MODULE_2__["Editable"], { placeholder: readOnly ? undefined : placeholder, readOnly: dialogVisible || readOnly || multipleNodesSelected, renderElement: renderElement, renderLeaf: renderLeaf, onKeyDown: readOnly ? undefined : onKeyDown }));
});
var SlateEditor = function (props) {
    var plugins = props.plugins, focused = props.focused, readOnly = props.readOnly;
    var t = Object(_react_page_editor__WEBPACK_IMPORTED_MODULE_0__["useUiTranslator"])().t;
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
        !readOnly && focused && (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HoverButtons, { plugins: props.plugins, translations: props.translations })),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SlateEditable, { placeholder: t(props.translations.placeholder), readOnly: readOnly, plugins: plugins, defaultPluginType: props.defaultPluginType })));
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(SlateEditor));
//# sourceMappingURL=SlateEditor.js.map

/***/ }),

/***/ "../packages/plugins/content/slate/lib-es/components/hotkeyHooks.js":
/*!**************************************************************************!*\
  !*** ../packages/plugins/content/slate/lib-es/components/hotkeyHooks.js ***!
  \**************************************************************************/
/*! exports provided: useOnKeyDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOnKeyDown", function() { return useOnKeyDown; });
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-hotkey */ "../node_modules/is-hotkey/lib/index.js");
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_hotkey__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate-react */ "../node_modules/slate-react/dist/index.es.js");
/* harmony import */ var _hooks_useAddPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useAddPlugin */ "../packages/plugins/content/slate/lib-es/hooks/useAddPlugin.js");
/* harmony import */ var _hooks_useCurrentNodeWithPlugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useCurrentNodeWithPlugin */ "../packages/plugins/content/slate/lib-es/hooks/useCurrentNodeWithPlugin.js");
/* harmony import */ var _hooks_useRemovePlugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useRemovePlugin */ "../packages/plugins/content/slate/lib-es/hooks/useRemovePlugin.js");







var useOnKeyDown = function (_a, deps) {
    var plugins = _a.plugins;
    var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_2__["useSlate"])();
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function (event) {
        plugins
            .filter(function (plugin) { return plugin.hotKey; })
            .forEach(function (plugin) {
            if (is_hotkey__WEBPACK_IMPORTED_MODULE_0___default()(plugin.hotKey, event)) {
                event.preventDefault();
                var node = Object(_hooks_useCurrentNodeWithPlugin__WEBPACK_IMPORTED_MODULE_4__["getCurrentNodeWithPlugin"])(editor, plugin);
                if (node) {
                    Object(_hooks_useRemovePlugin__WEBPACK_IMPORTED_MODULE_5__["removePlugin"])(editor, plugin);
                }
                else {
                    Object(_hooks_useAddPlugin__WEBPACK_IMPORTED_MODULE_3__["addPlugin"])(editor, plugin);
                }
            }
        });
        // we need to prevent slate from handling undo and redo
        if (is_hotkey__WEBPACK_IMPORTED_MODULE_0___default()(['mod+z', 'mod+y'], event)) {
            event.preventDefault();
            return true;
        }
        if (is_hotkey__WEBPACK_IMPORTED_MODULE_0___default()(['esc'], event)) {
            slate_react__WEBPACK_IMPORTED_MODULE_2__["ReactEditor"].blur(editor);
            return true;
        }
        if (is_hotkey__WEBPACK_IMPORTED_MODULE_0___default()('shift+enter', event)) {
            event.preventDefault();
            editor.insertText('\n');
            return true;
        }
    }, deps);
};
//# sourceMappingURL=hotkeyHooks.js.map

/***/ }),

/***/ "../packages/plugins/content/slate/lib-es/hooks/useAddPlugin.js":
/*!**********************************************************************!*\
  !*** ../packages/plugins/content/slate/lib-es/hooks/useAddPlugin.js ***!
  \**********************************************************************/
/*! exports provided: addPlugin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPlugin", function() { return addPlugin; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ "../node_modules/slate/dist/index.es.js");
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate-react */ "../node_modules/slate-react/dist/index.es.js");
/* harmony import */ var _useCurrentNodeWithPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useCurrentNodeWithPlugin */ "../packages/plugins/content/slate/lib-es/hooks/useCurrentNodeWithPlugin.js");
/* harmony import */ var _useRemovePlugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useRemovePlugin */ "../packages/plugins/content/slate/lib-es/hooks/useRemovePlugin.js");
/* harmony import */ var _utils_getCurrentData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getCurrentData */ "../packages/plugins/content/slate/lib-es/utils/getCurrentData.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};






var addPlugin = function (editor, plugin, props) {
    var _a;
    var _b = props || {}, passedData = _b.data, text = _b.text;
    var currentNodeEntry = Object(_useCurrentNodeWithPlugin__WEBPACK_IMPORTED_MODULE_3__["getCurrentNodeWithPlugin"])(editor, plugin);
    if (text) {
        var withExtraSpace = plugin.pluginType === 'component' &&
            plugin.object === 'inline' &&
            plugin.addExtraSpace;
        var textToInsert = withExtraSpace ? text + ' ' : text;
        editor.insertText(textToInsert);
        slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].select(editor, {
            anchor: editor.selection.anchor,
            focus: __assign(__assign({}, editor.selection.focus), { offset: editor.selection.focus.offset - textToInsert.length }),
        });
    }
    var data = passedData || (plugin.getInitialData ? plugin.getInitialData() : null);
    var isActive = Boolean(currentNodeEntry);
    if (isActive) {
        slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].select(editor, currentNodeEntry[1]);
        Object(_useRemovePlugin__WEBPACK_IMPORTED_MODULE_4__["removePlugin"])(editor, plugin);
    }
    // add new
    if (plugin.customAdd) {
        plugin.customAdd(editor);
    }
    else if (plugin.pluginType === 'component') {
        if (plugin.object === 'mark') {
            editor.addMark(plugin.type, data || true);
        }
        else {
            if (plugin.object === 'block' && plugin.replaceWithDefaultOnRemove) {
                slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].setNodes(editor, { type: plugin.type, data: data });
            }
            else {
                slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].wrapNodes(editor, {
                    type: plugin.type,
                    children: [],
                    data: data,
                }, { split: true });
                // workaround for inline problems in slate
                if (plugin.object === 'inline' &&
                    plugin.addExtraSpace &&
                    !text &&
                    editor.selection) {
                    var focus_1 = __assign({}, editor.selection.focus);
                    slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].insertText(editor, ' ', {
                        at: editor.selection.focus,
                    });
                    slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].select(editor, focus_1);
                }
            }
        }
    }
    else if (plugin.pluginType === 'data') {
        var existingData = (_a = Object(_utils_getCurrentData__WEBPACK_IMPORTED_MODULE_5__["default"])(editor)) !== null && _a !== void 0 ? _a : {};
        slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].setNodes(editor, {
            data: __assign(__assign({}, existingData), (data !== null && data !== void 0 ? data : {})),
        });
    }
};
/* harmony default export */ __webpack_exports__["default"] = (function (plugin) {
    var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_2__["useSlate"])();
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (props) { return addPlugin(editor, plugin, props); }, []);
});
//# sourceMappingURL=useAddPlugin.js.map

/***/ }),

/***/ "../packages/plugins/content/slate/lib-es/hooks/useCurrentNodeWithPlugin.js":
/*!**********************************************************************************!*\
  !*** ../packages/plugins/content/slate/lib-es/hooks/useCurrentNodeWithPlugin.js ***!
  \**********************************************************************************/
/*! exports provided: getCurrentNodeWithPlugin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentNodeWithPlugin", function() { return getCurrentNodeWithPlugin; });
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slate */ "../node_modules/slate/dist/index.es.js");
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate-react */ "../node_modules/slate-react/dist/index.es.js");
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


var getCurrentNodeWithPlugin = function (editor, plugin) {
    if (plugin.pluginType === 'custom') {
        return null;
    }
    var match = plugin.pluginType === 'component'
        ? plugin.object === 'mark'
            ? function (elem) { return Boolean(elem[plugin.type]); }
            : function (elem) { return elem.type === plugin.type; }
        : plugin.pluginType === 'data'
            ? // search for data
                function (_a) {
                    var data = _a.data;
                    var matches = plugin.dataMatches(data);
                    return matches;
                }
            : null;
    try {
        var _a = __read(slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].nodes(editor, {
            match: match,
            mode: 'lowest', // FIXME: whats the best value?
        }), 1), matchingNode = _a[0];
        return matchingNode;
    }
    catch (e) {
        // seems to crash sometimes on redu
        return null;
    }
};
/* harmony default export */ __webpack_exports__["default"] = (function (plugin) {
    var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_1__["useSlate"])();
    return getCurrentNodeWithPlugin(editor, plugin);
});
//# sourceMappingURL=useCurrentNodeWithPlugin.js.map

/***/ }),

/***/ "../packages/plugins/content/slate/lib-es/hooks/useRemovePlugin.js":
/*!*************************************************************************!*\
  !*** ../packages/plugins/content/slate/lib-es/hooks/useRemovePlugin.js ***!
  \*************************************************************************/
/*! exports provided: removePlugin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePlugin", function() { return removePlugin; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ "../node_modules/slate/dist/index.es.js");
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate-react */ "../node_modules/slate-react/dist/index.es.js");
/* harmony import */ var _utils_getCurrentData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getCurrentData */ "../packages/plugins/content/slate/lib-es/utils/getCurrentData.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var removePlugin = function (editor, plugin) {
    if (plugin.customRemove) {
        plugin.customRemove(editor);
    }
    else if (plugin.pluginType === 'component') {
        if (plugin.object === 'mark') {
            editor.removeMark(plugin.type);
        }
        else if (plugin.object === 'inline') {
            slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].unwrapNodes(editor, {
                match: function (elem) { return elem.type === plugin.type; },
            });
            // Transforms.setNodes(editor, { type: null });
        }
        else if (plugin.object === 'block') {
            if (plugin.replaceWithDefaultOnRemove) {
                slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].setNodes(editor, {
                    type: null,
                });
            }
            else {
                slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].unwrapNodes(editor, {
                    match: function (elem) { return elem.type === plugin.type; },
                    split: true,
                });
            }
        }
    }
    else if (plugin.pluginType === 'data') {
        if (!plugin.properties) {
            // can't be removed
        }
        else {
            var existingData_1 = Object(_utils_getCurrentData__WEBPACK_IMPORTED_MODULE_3__["default"])(editor);
            var dataWithout = Object.keys(existingData_1).reduce(function (acc, key) {
                var _a;
                if (plugin.properties.includes(key)) {
                    return acc;
                }
                return __assign(__assign({}, acc), (_a = {}, _a[key] = existingData_1[key], _a));
            }, {});
            slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].setNodes(editor, {
                data: dataWithout,
            });
        }
    }
};
/* harmony default export */ __webpack_exports__["default"] = (function (plugin) {
    var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_2__["useSlate"])();
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () { return removePlugin(editor, plugin); }, []);
});
//# sourceMappingURL=useRemovePlugin.js.map

/***/ }),

/***/ "../packages/plugins/content/slate/lib-es/utils/getCurrentData.js":
/*!************************************************************************!*\
  !*** ../packages/plugins/content/slate/lib-es/utils/getCurrentData.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slate */ "../node_modules/slate/dist/index.es.js");
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

var getCurrentData = function (editor) {
    var _a;
    var _b = __read(slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].nodes(editor, {
        mode: 'all',
        match: function (node) {
            return Boolean(node.data);
        },
    }), 1), existingNodeWithData = _b[0];
    var existingData = existingNodeWithData
        ? (_a = existingNodeWithData[0]) === null || _a === void 0 ? void 0 : _a.data
        : {};
    return existingData;
};
/* harmony default export */ __webpack_exports__["default"] = (getCurrentData);
//# sourceMappingURL=getCurrentData.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9jb21wdXRlLXNjcm9sbC1pbnRvLXZpZXcvZGlzdC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvZGlyZWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL2ltbWVyL2Rpc3QvaW1tZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL2lzLWhvdGtleS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvaXMtcGxhaW4tb2JqZWN0L2Rpc3QvaXMtcGxhaW4tb2JqZWN0Lm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUcmltLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdHJpbW1lZEVuZEluZGV4LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbm93LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC90aHJvdHRsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9OdW1iZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvc2Nyb2xsLWludG8tdmlldy1pZi1uZWVkZWQvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvc2xhdGUtcmVhY3QvZGlzdC9pbmRleC5lcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9zbGF0ZS1yZWFjdC9ub2RlX21vZHVsZXMvdGlueS1pbnZhcmlhbnQvZGlzdC90aW55LWludmFyaWFudC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvc2xhdGUvZGlzdC9pbmRleC5lcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL3BhY2thZ2VzL3BsdWdpbnMvY29udGVudC9zbGF0ZS9saWItZXMvY29tcG9uZW50cy9EaWFsb2dWaXNpYmxlUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9wYWNrYWdlcy9wbHVnaW5zL2NvbnRlbnQvc2xhdGUvbGliLWVzL2NvbXBvbmVudHMvU2xhdGVFZGl0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9wYWNrYWdlcy9wbHVnaW5zL2NvbnRlbnQvc2xhdGUvbGliLWVzL2NvbXBvbmVudHMvaG90a2V5SG9va3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9wYWNrYWdlcy9wbHVnaW5zL2NvbnRlbnQvc2xhdGUvbGliLWVzL2hvb2tzL3VzZUFkZFBsdWdpbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL3BhY2thZ2VzL3BsdWdpbnMvY29udGVudC9zbGF0ZS9saWItZXMvaG9va3MvdXNlQ3VycmVudE5vZGVXaXRoUGx1Z2luLmpzIiwid2VicGFjazovL19OX0UvLi4vcGFja2FnZXMvcGx1Z2lucy9jb250ZW50L3NsYXRlL2xpYi1lcy9ob29rcy91c2VSZW1vdmVQbHVnaW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9wYWNrYWdlcy9wbHVnaW5zL2NvbnRlbnQvc2xhdGUvbGliLWVzL3V0aWxzL2dldEN1cnJlbnREYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBLGNBQWMsa0RBQWtELGdCQUFnQixvREFBb0QsZ0JBQWdCLCtEQUErRCwrQkFBK0IsdURBQXVELGtCQUFrQiw4REFBOEQsSUFBSSxnREFBZ0QsU0FBUyxhQUFhLElBQUksd0VBQXdFLElBQUksU0FBUyw0QkFBNEIsb0ZBQW1HLDZFQUFjLGtJQUFrSSxjQUFjLCtDQUErQyx1RUFBdUUsV0FBVyxFQUFFLDRCQUE0QixVQUFVLE1BQU0sMkZBQTJGLG9XQUFvVyxXQUFXLEtBQUssa0dBQWtHLDRFQUE0RSx1UkFBdVIsc01BQXNNLEtBQUssaUxBQWlMLGlDQUFpQywyR0FBMkcsUUFBUSxrQkFBa0IsRUFBRSxTQUFTO0FBQ3o2RTs7Ozs7Ozs7Ozs7OztBQ0RZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWMsa0RBQWtELElBQUksd0JBQXdCLEdBQUcsSUFBbUMsRUFBRSw2RUFBNkUsMEJBQTBCLDZFQUE2RSxnQkFBZ0IscUVBQXFFLGNBQWMsa0JBQWtCLGNBQWMsd0JBQXdCLG1DQUFtQywrQkFBK0IscUJBQXFCLGlFQUFpRSx1RUFBdUUsK0RBQStELGNBQWMsNEJBQTRCLGtCQUFrQix1RUFBdUUsbUNBQW1DLDRCQUE0QixnQkFBZ0IsR0FBRyxjQUFjLFdBQVcsNERBQTRELGdCQUFnQixtRUFBbUUsZ0JBQWdCLDhCQUE4QixrQkFBa0IsV0FBVyxxREFBcUQsZ0JBQWdCLHdDQUF3QyxjQUFjLDJCQUEyQixjQUFjLDJCQUEyQixjQUFjLGdCQUFnQixjQUFjLHlEQUF5RCxZQUFZLFlBQVksb0JBQW9CLFdBQVcsS0FBSyxrQkFBa0IsMEVBQTBFLCtEQUErRCxFQUFFLGlEQUFpRCxnQkFBZ0IsK0hBQStILGVBQWUsU0FBUyxhQUFhLEtBQUssY0FBYyx1REFBdUQsY0FBYyxZQUFZLG9CQUFvQixnQkFBZ0IsaUJBQWlCLGFBQWEsTUFBTSxNQUFtQyxZQUFZLGdCQUFnQixzQ0FBc0MsY0FBYyw2QkFBNkIsY0FBYyxlQUFlLGNBQWMsVUFBVSx1QkFBdUIsY0FBYyxXQUFXLDhCQUE4QixnQkFBZ0IsZUFBZSxpQ0FBaUMsMktBQTJLLGtCQUFrQixpQkFBaUIsV0FBVyxnQ0FBZ0Msc0JBQXNCLFFBQVEsb0JBQW9CLCtCQUErQixTQUFTLGVBQWUsc0NBQXNDLHNDQUFzQyxzQkFBc0IsaURBQWlELFdBQVcsd0JBQXdCLEdBQUcsS0FBbUMsb0JBQW9CLHlEQUF5RCx5QkFBeUIsT0FBTyxnQkFBZ0Isd0JBQXdCLHlCQUF5QixrQkFBa0Isc0NBQXNDLGdCQUFnQixXQUFXLG9CQUFvQixnQkFBZ0IsNkNBQTZDLEVBQUUsRUFBRSwyQ0FBMkMsY0FBYyw0QkFBNEIsY0FBYywwQkFBMEIsY0FBYyxrQkFBa0Isa0JBQWtCLHdFQUF3RSwwQkFBMEIsa0NBQWtDLG1DQUFtQyxVQUFVLGdCQUFnQixnREFBZ0QscUJBQXFCLHNCQUFzQiw4QkFBOEIsY0FBYyxtQ0FBbUMsa0JBQWtCLG9CQUFvQixNQUFNLDRDQUE0Qyx1QkFBdUIsY0FBYywwQkFBMEIsNkJBQTZCLHNCQUFzQixJQUFJLGdCQUFnQixVQUFVLHlCQUF5Qiw0QkFBNEIsWUFBWSxhQUFhLGdCQUFnQixXQUFXLGdDQUFnQyw0Q0FBNEMsY0FBYyxNQUFNLEtBQW1DLG1CQUFtQixpQkFBaUIsY0FBYyxLQUFtQyxzQkFBc0IsR0FBRyxjQUFjLHFCQUFxQixLQUFLLEtBQUssY0FBYyxvQkFBb0Isa0JBQWtCLE1BQU0sb0JBQW9CLGNBQWMseUNBQXlDLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxnQ0FBZ0MscUJBQXFCLCtCQUErQixhQUFhLHVDQUF1QyxjQUFjLFVBQVUsa0NBQWtDLG9EQUFvRCxtQkFBbUIsY0FBYywrQkFBK0IsU0FBUyxTQUFTLGdCQUFnQix1Q0FBdUMsTUFBTSw4QkFBOEIsV0FBVywwQ0FBMEMsU0FBUyxZQUFZLFlBQVksb0JBQW9CLFdBQVcsS0FBSyxXQUFXLCtCQUErQixpREFBaUQsU0FBUyxrQ0FBa0MsK0JBQStCLGtDQUFrQyxvQkFBb0IsSUFBSSxtQkFBbUIsK0NBQStDLDBCQUEwQixXQUFXLE1BQU0sNEJBQTRCLDBCQUEwQiw0REFBNEQsb0JBQW9CLHNDQUFzQyxHQUFHLGVBQWUsaUVBQWlFLFdBQVcsWUFBWSx3QkFBd0IsV0FBVyxZQUFZLDBDQUEwQyxJQUFJLDhCQUE4QixpQkFBaUIsZUFBZSwwQkFBMEIsRUFBRSxhQUFhLGNBQWMsa0JBQWtCLG9DQUFvQyxnRUFBZ0UscUJBQXFCLElBQUksNkNBQTZDLDhDQUE4Qyw0QkFBNEIsNkJBQTZCLGNBQWMsbUJBQW1CLFlBQVksYUFBYSxnQkFBZ0IsOEJBQThCLGdDQUFnQyxhQUFhLEtBQUsscUJBQXFCLG1KQUFtSix3Q0FBd0MsVUFBVSx3QkFBd0IseUJBQXlCLGFBQWEsc0JBQXNCLGlCQUFpQiw4QkFBOEIseUJBQXlCLHVCQUF1QixzQkFBc0IsdUJBQXVCLDRCQUE0QiwwQkFBMEIsZ0NBQWdDLDJCQUEyQixpQkFBaUIsS0FBSyxxQkFBcUIsWUFBWSw4Q0FBOEMsZ0JBQWdCLHFCQUFxQixzREFBc0QseUJBQXlCLGtCQUFrQixxQkFBcUIsWUFBWSxFQUFFLG9CQUFvQixnQkFBZ0IsbUJBQW1CLGVBQWUsdUJBQXVCLEVBQUUsK0JBQStCLEdBQUcsR0FBRyxVQUFVLHVDQUF1QyxzQkFBc0Isc0JBQXNCLFlBQVksY0FBYyxZQUFZLGNBQWMsWUFBWSxXQUFXLDBCQUEwQixvQkFBb0IsUUFBUSxrQ0FBa0MsVUFBVSxrQ0FBa0MsRUFBRSxtQkFBbUIsV0FBVyxLQUFLLG9CQUFvQixRQUFRLDBCQUEwQixFQUFFLDJCQUEyQixzREFBc0QsRUFBRSxVQUFVLGdDQUFnQyxvQkFBb0IsdUJBQXVCLGNBQWMsb0JBQW9CLFFBQVEsMkJBQTJCLGFBQWEsb0JBQW9CLEVBQUUsSUFBSSw4QkFBOEIsY0FBYyxvQkFBb0IsUUFBUSxvQkFBb0IsYUFBYSwyQkFBMkIsRUFBRSxJQUFJLEdBQUcsV0FBVyxxQkFBcUIsUUFBUSwwQ0FBMEMsVUFBVSwrQkFBK0IsR0FBRyxFQUFFLGFBQWEsZ0JBQWdCLGFBQWEsbUJBQW1CLG1EQUFtRCxjQUFjLG9DQUFvQyxjQUFjLDJDQUEyQyxTQUFTLG1CQUFtQix3QkFBd0IsZ0JBQWdCLElBQUksY0FBYywrQkFBK0Isb0JBQW9CLGlDQUFpQyxhQUFhLGdDQUFnQyxjQUFjLGdCQUFnQixnREFBZ0QsT0FBTyxjQUFjLGdCQUFnQixnQkFBZ0IscUVBQXFFLE1BQU0sU0FBUyxrQkFBa0IsdUNBQXVDLGVBQWUsd0JBQXdCLG9CQUFvQix5QkFBeUIscUJBQXFCLGNBQWMsb0dBQW9HLHNCQUFzQix5QkFBeUIsY0FBYyxxREFBcUQsb0JBQW9CLGNBQWMsMERBQTBELGNBQWMsZ0JBQWdCLHlCQUF5QixXQUFXLGtDQUFrQyx1QkFBdUIsR0FBRyxtQkFBbUIsY0FBYyxLQUFLLGtCQUFrQix1QkFBdUIsMkJBQTJCLG1CQUFtQiwyQkFBMkIsbUJBQW1CLHlCQUF5QixxQkFBcUIsMkJBQTJCLFdBQVcsZ0JBQWdCLGtCQUFrQixtQkFBbUIsZUFBZSxpQkFBaUIsOEJBQThCLEdBQUcsc0JBQXNCLDJCQUEyQixXQUFXLGdCQUFnQixtQkFBbUIsbUJBQW1CLGVBQWUsbUJBQW1CLHFCQUFxQixPQUFPLDJCQUEyQixHQUFHLGlCQUFpQixzQkFBc0IsR0FBRyxnQkFBZ0IsZ0JBQWdCLGdCQUFnQixzRUFBc0UsTUFBTSxTQUFTLGtCQUFrQix1Q0FBdUMsZUFBZSx3QkFBd0Isb0JBQW9CLGNBQWMsOEVBQThFLG1CQUFtQixjQUFjLHFEQUFxRCxzQkFBc0IseUJBQXlCLGNBQWMsMEVBQTBFLG9CQUFvQixjQUFjLHdDQUF3QyxxQkFBcUIsY0FBYyw4QkFBOEIsc0JBQXNCLGNBQWMsK0JBQStCLG1CQUFtQixxQkFBcUIsaUJBQWlCLHFCQUFxQix5QkFBeUIsbUNBQW1DLFFBQVEsMkNBQTJDLEdBQUcsR0FBRyxZQUFZLGdCQUFnQixrQkFBa0IsaUJBQWlCLG1CQUFtQixFQUFFLGFBQWEsWUFBWSxjQUFjLFNBQVMsY0FBYyxTQUFTLGdQQUFnUCw4TEFBOEwsMklBQTJJLCtIQUErSCwydkJBQTJ2QixxREFBcUQseURBQXlELHdDQUF3QyxnQkFBZ0IseUpBQXlKLCtGQUErRixrS0FBa0ssZ0JBQWdCLDJDQUEyQyxnQkFBZ0IsNENBQTRDLDRGQUE0RixxSkFBcUosNkVBQTZFLDZFQUE2RSxTQUFTLGtDQUFrQywwQ0FBMEMsS0FBSyxNQUFNLEtBQUssa0JBQWtCLGtCQUFrQixXQUFXLGtDQUFrQyxlQUFlLG9GQUFvRixRQUFRLFdBQVcsOERBQThELG1CQUFtQixpQkFBaUIscUJBQXFCLDZCQUE2QixxQkFBcUIsZ0JBQWdCLG9EQUFvRCxTQUFTLHNDQUFzQywyQ0FBMkMsMkNBQTJDLFVBQVUsdUZBQXVGLDhCQUE4Qiw2RkFBNkYsd0NBQXdDLG1EQUFtRCxVQUFVLGtGQUFrRixHQUFHLDJCQUEyQixNQUFNLDRCQUE0QixrQ0FBa0MsMkJBQTJCLE9BQU8sT0FBTyxvQkFBb0IsaUJBQWlCLDZEQUE2RCxtQ0FBbUMsTUFBTSxLQUFtQyxnRUFBZ0Usd0JBQXdCLE1BQU0sS0FBbUMsMkVBQTJFLGtCQUFrQixjQUFjLFdBQVcsZ0RBQWdELCtDQUErQyxRQUFRLElBQUksUUFBUSxtQkFBbUIsV0FBVyxrQkFBa0Isa0RBQWtELElBQUksd0JBQXdCLGdDQUFnQyxNQUFNLDBDQUEwQyxJQUFJLE1BQU0sMkVBQTJFLGdDQUFnQyxJQUFJLFlBQVksUUFBUSxZQUFZLDRFQUE0RSxxQkFBcUIsZUFBZSxhQUFhLG1CQUFtQiwyQkFBMkIsdUJBQXVCLHdDQUF3QyxRQUFRLHVDQUF1Qyx1Q0FBdUMsa0RBQWtELElBQUksd0JBQXdCLDJDQUEyQyxxQ0FBcUMsR0FBRywrQkFBK0IsUUFBUSxRQUFRLFFBQVEsbUtBQW1LLGtCQUFrQixpQ0FBaUMsMEJBQTBCLGlDQUFpQyx3QkFBd0IsNkJBQTZCLGNBQWMsS0FBbUMsNEJBQTRCLFVBQVUsMEJBQTBCLDZCQUE2QixTQUFTLDZCQUE2QixzQkFBc0IsOEJBQThCLE1BQU0saUJBQWlCLEtBQUssS0FBSyxXQUFXLHdDQUF3QyxVQUFVLE9BQU8scUJBQXFCLCtDQUErQyx5QkFBeUIsR0FBRyxHQUFHLHlNQUF3TixpRUFBRSxFQUF3VztBQUMvZ2pCOzs7Ozs7Ozs7Ozs7O0FDRGE7O0FBRWI7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsUUFBUTtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsY0FBYztBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwREFBMEQsZ0VBQWdFO0FBQzFIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFF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RUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSw0Q0FBTTtBQUNsQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxnREFBVTtBQUNoQjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxpQkFBaUI7QUFDakI7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QUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxXQUFXLDRDQUFNLGlDQUFpQyw0Q0FBTTtBQUN4RDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0Qzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsT0FBTywwQ0FBTTtBQUNiO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLDJDQUFLO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLDBDQUFJO0FBQ3hDLDZCQUE2Qiw0Q0FBTTtBQUNuQztBQUNBLGFBQWEsMENBQU07QUFDbkIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVc7OztBQUdYO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixtQkFBbUIsMENBQUk7QUFDdkIsV0FBVztBQUNYO0FBQ0EsV0FBVzs7O0FBR1g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNILCtCQUErQiwwQ0FBSTtBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSCxxQkFBcUIsMkNBQUs7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxlQUFlOztBQUV0QjtBQUNBLFFBQVEsZ0RBQVU7QUFDbEI7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTSw0Q0FBTSwwQkFBMEI7QUFDdEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Es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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGVBQWUsNkJBQTZCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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TDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMscUVBQWE7QUFDdEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJuQkFBMm5CLHFFQUFhO0FBQ3hvQjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsNERBQTREOztBQUU1RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrREFBa0Q7O0FBRWxEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFEQUFxRDs7O0FBR3JEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7O0FBR0EsNENBQTRDOztBQUU1QztBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsVUFBVTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsUUFBUTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBLG9DQUFvQyxrQkFBa0I7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0EsV0FBVzs7O0FBR1g7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxjQUFjO0FBQ2hGO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixxREFBTztBQUN6QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscURBQU87QUFDbEI7QUFDQTtBQUNBLE9BQU8sV0FBVzs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9DQUFvQztBQUNuRDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7O0FBRTFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTyx3Q0FBd0M7QUFDL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSwrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qjs7QUFFOUIsZ0VBQWdFOztBQUVoRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDREQUE0RCxjQUFjO0FBQzFFO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEMsZ0NBQWdDLG9DQUFvQyxvREFBb0Qsc0JBQXNCLDBDQUEwQyxnRUFBZ0UsRUFBRSxFQUFFLEVBQUUsZ0NBQWdDLEVBQUUsYUFBYTs7QUFFelYsa0NBQWtDLGdCQUFnQixzQkFBc0IsT0FBTyx1REFBdUQsYUFBYSx5REFBeUQsMkNBQTJDLEVBQUUsRUFBRSxFQUFFLDZDQUE2QywyRUFBMkUsRUFBRSxPQUFPLG1EQUFtRCxrRkFBa0YsRUFBRSxFQUFFLEVBQUUsRUFBRSxlQUFlO0FBQzFoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxrRkFBa0Y7QUFDbEYsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU8sRUFBRTs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFF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YyxxQ0FBcUMsRUFBRTtBQUMzRSxDQUFDLEVBQUU7QUFDSCwyQzs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQUE7QUFBQSxjQUFjLFNBQUksSUFBSSxTQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixNQUFNLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBO0FBQytCO0FBQy9CO0FBQ0E7QUFDQSxvQkFBb0IsNENBQU07QUFDMUI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsNkVBQWMsRUFBQztBQUM5QiwwQyIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdCh0KXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgdCYmbnVsbCE9dCYmMT09PXQubm9kZVR5cGV9ZnVuY3Rpb24gZSh0LGUpe3JldHVybighZXx8XCJoaWRkZW5cIiE9PXQpJiZcInZpc2libGVcIiE9PXQmJlwiY2xpcFwiIT09dH1mdW5jdGlvbiBuKHQsbil7aWYodC5jbGllbnRIZWlnaHQ8dC5zY3JvbGxIZWlnaHR8fHQuY2xpZW50V2lkdGg8dC5zY3JvbGxXaWR0aCl7dmFyIHI9Z2V0Q29tcHV0ZWRTdHlsZSh0LG51bGwpO3JldHVybiBlKHIub3ZlcmZsb3dZLG4pfHxlKHIub3ZlcmZsb3dYLG4pfHxmdW5jdGlvbih0KXt2YXIgZT1mdW5jdGlvbih0KXtpZighdC5vd25lckRvY3VtZW50fHwhdC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3KXJldHVybiBudWxsO3RyeXtyZXR1cm4gdC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmZyYW1lRWxlbWVudH1jYXRjaCh0KXtyZXR1cm4gbnVsbH19KHQpO3JldHVybiEhZSYmKGUuY2xpZW50SGVpZ2h0PHQuc2Nyb2xsSGVpZ2h0fHxlLmNsaWVudFdpZHRoPHQuc2Nyb2xsV2lkdGgpfSh0KX1yZXR1cm4hMX1mdW5jdGlvbiByKHQsZSxuLHIsaSxvLGwsZCl7cmV0dXJuIG88dCYmbD5lfHxvPnQmJmw8ZT8wOm88PXQmJmQ8PW58fGw+PWUmJmQ+PW4/by10LXI6bD5lJiZkPG58fG88dCYmZD5uP2wtZStpOjB9ZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZSxpKXt2YXIgbz13aW5kb3csbD1pLnNjcm9sbE1vZGUsZD1pLmJsb2NrLHU9aS5pbmxpbmUsaD1pLmJvdW5kYXJ5LGE9aS5za2lwT3ZlcmZsb3dIaWRkZW5FbGVtZW50cyxjPVwiZnVuY3Rpb25cIj09dHlwZW9mIGg/aDpmdW5jdGlvbih0KXtyZXR1cm4gdCE9PWh9O2lmKCF0KGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIHRhcmdldFwiKTtmb3IodmFyIGY9ZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudHx8ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LHM9W10scD1lO3QocCkmJmMocCk7KXtpZigocD1wLnBhcmVudEVsZW1lbnQpPT09Zil7cy5wdXNoKHApO2JyZWFrfW51bGwhPXAmJnA9PT1kb2N1bWVudC5ib2R5JiZuKHApJiYhbihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpfHxudWxsIT1wJiZuKHAsYSkmJnMucHVzaChwKX1mb3IodmFyIG09by52aXN1YWxWaWV3cG9ydD9vLnZpc3VhbFZpZXdwb3J0LndpZHRoOmlubmVyV2lkdGgsZz1vLnZpc3VhbFZpZXdwb3J0P28udmlzdWFsVmlld3BvcnQuaGVpZ2h0OmlubmVySGVpZ2h0LHc9d2luZG93LnNjcm9sbFh8fHBhZ2VYT2Zmc2V0LHY9d2luZG93LnNjcm9sbFl8fHBhZ2VZT2Zmc2V0LFc9ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxiPVcuaGVpZ2h0LEg9Vy53aWR0aCx5PVcudG9wLEU9Vy5yaWdodCxNPVcuYm90dG9tLFY9Vy5sZWZ0LHg9XCJzdGFydFwiPT09ZHx8XCJuZWFyZXN0XCI9PT1kP3k6XCJlbmRcIj09PWQ/TTp5K2IvMixJPVwiY2VudGVyXCI9PT11P1YrSC8yOlwiZW5kXCI9PT11P0U6VixDPVtdLFQ9MDtUPHMubGVuZ3RoO1QrKyl7dmFyIGs9c1tUXSxCPWsuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksRD1CLmhlaWdodCxPPUIud2lkdGgsUj1CLnRvcCxYPUIucmlnaHQsWT1CLmJvdHRvbSxMPUIubGVmdDtpZihcImlmLW5lZWRlZFwiPT09bCYmeT49MCYmVj49MCYmTTw9ZyYmRTw9bSYmeT49UiYmTTw9WSYmVj49TCYmRTw9WClyZXR1cm4gQzt2YXIgUz1nZXRDb21wdXRlZFN0eWxlKGspLGo9cGFyc2VJbnQoUy5ib3JkZXJMZWZ0V2lkdGgsMTApLHE9cGFyc2VJbnQoUy5ib3JkZXJUb3BXaWR0aCwxMCksej1wYXJzZUludChTLmJvcmRlclJpZ2h0V2lkdGgsMTApLEE9cGFyc2VJbnQoUy5ib3JkZXJCb3R0b21XaWR0aCwxMCksRj0wLEc9MCxKPVwib2Zmc2V0V2lkdGhcImluIGs/ay5vZmZzZXRXaWR0aC1rLmNsaWVudFdpZHRoLWotejowLEs9XCJvZmZzZXRIZWlnaHRcImluIGs/ay5vZmZzZXRIZWlnaHQtay5jbGllbnRIZWlnaHQtcS1BOjA7aWYoZj09PWspRj1cInN0YXJ0XCI9PT1kP3g6XCJlbmRcIj09PWQ/eC1nOlwibmVhcmVzdFwiPT09ZD9yKHYsditnLGcscSxBLHYreCx2K3grYixiKTp4LWcvMixHPVwic3RhcnRcIj09PXU/STpcImNlbnRlclwiPT09dT9JLW0vMjpcImVuZFwiPT09dT9JLW06cih3LHcrbSxtLGoseix3K0ksdytJK0gsSCksRj1NYXRoLm1heCgwLEYrdiksRz1NYXRoLm1heCgwLEcrdyk7ZWxzZXtGPVwic3RhcnRcIj09PWQ/eC1SLXE6XCJlbmRcIj09PWQ/eC1ZK0ErSzpcIm5lYXJlc3RcIj09PWQ/cihSLFksRCxxLEErSyx4LHgrYixiKTp4LShSK0QvMikrSy8yLEc9XCJzdGFydFwiPT09dT9JLUwtajpcImNlbnRlclwiPT09dT9JLShMK08vMikrSi8yOlwiZW5kXCI9PT11P0ktWCt6K0o6cihMLFgsTyxqLHorSixJLEkrSCxIKTt2YXIgTj1rLnNjcm9sbExlZnQsUD1rLnNjcm9sbFRvcDt4Kz1QLShGPU1hdGgubWF4KDAsTWF0aC5taW4oUCtGLGsuc2Nyb2xsSGVpZ2h0LUQrSykpKSxJKz1OLShHPU1hdGgubWF4KDAsTWF0aC5taW4oTitHLGsuc2Nyb2xsV2lkdGgtTytKKSkpfUMucHVzaCh7ZWw6ayx0b3A6RixsZWZ0Okd9KX1yZXR1cm4gQ31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1vZHVsZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRpcmVjdGlvblxuXG52YXIgUlRMID0gJ1xcdTA1OTEtXFx1MDdGRlxcdUZCMUQtXFx1RkRGRFxcdUZFNzAtXFx1RkVGQydcbnZhciBMVFIgPVxuICAnQS1aYS16XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2JyArXG4gICdcXHUwMEY4LVxcdTAyQjhcXHUwMzAwLVxcdTA1OTBcXHUwODAwLVxcdTFGRkZcXHUyMDBFXFx1MkMwMC1cXHVGQjFDJyArXG4gICdcXHVGRTAwLVxcdUZFNkZcXHVGRUZELVxcdUZGRkYnXG5cbnZhciBydGwgPSBuZXcgUmVnRXhwKCdeW14nICsgTFRSICsgJ10qWycgKyBSVEwgKyAnXScpXG52YXIgbHRyID0gbmV3IFJlZ0V4cCgnXlteJyArIFJUTCArICddKlsnICsgTFRSICsgJ10nKVxuXG5mdW5jdGlvbiBkaXJlY3Rpb24odmFsdWUpIHtcbiAgdmFsdWUgPSBTdHJpbmcodmFsdWUgfHwgJycpXG5cbiAgaWYgKHJ0bC50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiAncnRsJ1xuICB9XG5cbiAgaWYgKGx0ci50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiAnbHRyJ1xuICB9XG5cbiAgcmV0dXJuICduZXV0cmFsJ1xufVxuIiwiZnVuY3Rpb24gbihuKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxyPUFycmF5KHQ+MT90LTE6MCksZT0xO2U8dDtlKyspcltlLTFdPWFyZ3VtZW50c1tlXTtpZihcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WKXt2YXIgaT1ZW25dLG89aT9cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2kuYXBwbHkobnVsbCxyKTppOlwidW5rbm93biBlcnJvciBucjogXCIrbjt0aHJvdyBFcnJvcihcIltJbW1lcl0gXCIrbyl9dGhyb3cgRXJyb3IoXCJbSW1tZXJdIG1pbmlmaWVkIGVycm9yIG5yOiBcIituKyhyLmxlbmd0aD9cIiBcIityLm1hcCgoZnVuY3Rpb24obil7cmV0dXJuXCInXCIrbitcIidcIn0pKS5qb2luKFwiLFwiKTpcIlwiKStcIi4gRmluZCB0aGUgZnVsbCBlcnJvciBhdDogaHR0cHM6Ly9iaXQubHkvM2NYRUtXZlwiKX1mdW5jdGlvbiB0KG4pe3JldHVybiEhbiYmISFuW1FdfWZ1bmN0aW9uIHIobil7cmV0dXJuISFuJiYoZnVuY3Rpb24obil7aWYoIW58fFwib2JqZWN0XCIhPXR5cGVvZiBuKXJldHVybiExO3ZhciB0PU9iamVjdC5nZXRQcm90b3R5cGVPZihuKTtpZihudWxsPT09dClyZXR1cm4hMDt2YXIgcj1PYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0LFwiY29uc3RydWN0b3JcIikmJnQuY29uc3RydWN0b3I7cmV0dXJuIHI9PT1PYmplY3R8fFwiZnVuY3Rpb25cIj09dHlwZW9mIHImJkZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwocik9PT1afShuKXx8QXJyYXkuaXNBcnJheShuKXx8ISFuW0xdfHwhIW4uY29uc3RydWN0b3JbTF18fHMobil8fHYobikpfWZ1bmN0aW9uIGUocil7cmV0dXJuIHQocil8fG4oMjMscikscltRXS50fWZ1bmN0aW9uIGkobix0LHIpe3ZvaWQgMD09PXImJihyPSExKSwwPT09byhuKT8ocj9PYmplY3Qua2V5czpubikobikuZm9yRWFjaCgoZnVuY3Rpb24oZSl7ciYmXCJzeW1ib2xcIj09dHlwZW9mIGV8fHQoZSxuW2VdLG4pfSkpOm4uZm9yRWFjaCgoZnVuY3Rpb24ocixlKXtyZXR1cm4gdChlLHIsbil9KSl9ZnVuY3Rpb24gbyhuKXt2YXIgdD1uW1FdO3JldHVybiB0P3QuaT4zP3QuaS00OnQuaTpBcnJheS5pc0FycmF5KG4pPzE6cyhuKT8yOnYobik/MzowfWZ1bmN0aW9uIHUobix0KXtyZXR1cm4gMj09PW8obik/bi5oYXModCk6T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sdCl9ZnVuY3Rpb24gYShuLHQpe3JldHVybiAyPT09byhuKT9uLmdldCh0KTpuW3RdfWZ1bmN0aW9uIGYobix0LHIpe3ZhciBlPW8obik7Mj09PWU/bi5zZXQodCxyKTozPT09ZT8obi5kZWxldGUodCksbi5hZGQocikpOm5bdF09cn1mdW5jdGlvbiBjKG4sdCl7cmV0dXJuIG49PT10PzAhPT1ufHwxL249PTEvdDpuIT1uJiZ0IT10fWZ1bmN0aW9uIHMobil7cmV0dXJuIFgmJm4gaW5zdGFuY2VvZiBNYXB9ZnVuY3Rpb24gdihuKXtyZXR1cm4gcSYmbiBpbnN0YW5jZW9mIFNldH1mdW5jdGlvbiBwKG4pe3JldHVybiBuLm98fG4udH1mdW5jdGlvbiBsKG4pe2lmKEFycmF5LmlzQXJyYXkobikpcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG4pO3ZhciB0PXRuKG4pO2RlbGV0ZSB0W1FdO2Zvcih2YXIgcj1ubih0KSxlPTA7ZTxyLmxlbmd0aDtlKyspe3ZhciBpPXJbZV0sbz10W2ldOyExPT09by53cml0YWJsZSYmKG8ud3JpdGFibGU9ITAsby5jb25maWd1cmFibGU9ITApLChvLmdldHx8by5zZXQpJiYodFtpXT17Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLGVudW1lcmFibGU6by5lbnVtZXJhYmxlLHZhbHVlOm5baV19KX1yZXR1cm4gT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YobiksdCl9ZnVuY3Rpb24gZChuLGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT0hMSkseShuKXx8dChuKXx8IXIobik/bjoobyhuKT4xJiYobi5zZXQ9bi5hZGQ9bi5jbGVhcj1uLmRlbGV0ZT1oKSxPYmplY3QuZnJlZXplKG4pLGUmJmkobiwoZnVuY3Rpb24obix0KXtyZXR1cm4gZCh0LCEwKX0pLCEwKSxuKX1mdW5jdGlvbiBoKCl7bigyKX1mdW5jdGlvbiB5KG4pe3JldHVybiBudWxsPT1ufHxcIm9iamVjdFwiIT10eXBlb2Ygbnx8T2JqZWN0LmlzRnJvemVuKG4pfWZ1bmN0aW9uIGIodCl7dmFyIHI9cm5bdF07cmV0dXJuIHJ8fG4oMTgsdCkscn1mdW5jdGlvbiBtKG4sdCl7cm5bbl18fChybltuXT10KX1mdW5jdGlvbiBfKCl7cmV0dXJuXCJwcm9kdWN0aW9uXCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOVnx8VXx8bigwKSxVfWZ1bmN0aW9uIGoobix0KXt0JiYoYihcIlBhdGNoZXNcIiksbi51PVtdLG4ucz1bXSxuLnY9dCl9ZnVuY3Rpb24gTyhuKXtnKG4pLG4ucC5mb3JFYWNoKFMpLG4ucD1udWxsfWZ1bmN0aW9uIGcobil7bj09PVUmJihVPW4ubCl9ZnVuY3Rpb24gdyhuKXtyZXR1cm4gVT17cDpbXSxsOlUsaDpuLG06ITAsXzowfX1mdW5jdGlvbiBTKG4pe3ZhciB0PW5bUV07MD09PXQuaXx8MT09PXQuaT90LmooKTp0Lk89ITB9ZnVuY3Rpb24gUCh0LGUpe2UuXz1lLnAubGVuZ3RoO3ZhciBpPWUucFswXSxvPXZvaWQgMCE9PXQmJnQhPT1pO3JldHVybiBlLmguZ3x8YihcIkVTNVwiKS5TKGUsdCxvKSxvPyhpW1FdLlAmJihPKGUpLG4oNCkpLHIodCkmJih0PU0oZSx0KSxlLmx8fHgoZSx0KSksZS51JiZiKFwiUGF0Y2hlc1wiKS5NKGlbUV0sdCxlLnUsZS5zKSk6dD1NKGUsaSxbXSksTyhlKSxlLnUmJmUudihlLnUsZS5zKSx0IT09SD90OnZvaWQgMH1mdW5jdGlvbiBNKG4sdCxyKXtpZih5KHQpKXJldHVybiB0O3ZhciBlPXRbUV07aWYoIWUpcmV0dXJuIGkodCwoZnVuY3Rpb24oaSxvKXtyZXR1cm4gQShuLGUsdCxpLG8scil9KSwhMCksdDtpZihlLkEhPT1uKXJldHVybiB0O2lmKCFlLlApcmV0dXJuIHgobixlLnQsITApLGUudDtpZighZS5JKXtlLkk9ITAsZS5BLl8tLTt2YXIgbz00PT09ZS5pfHw1PT09ZS5pP2Uubz1sKGUuayk6ZS5vO2koMz09PWUuaT9uZXcgU2V0KG8pOm8sKGZ1bmN0aW9uKHQsaSl7cmV0dXJuIEEobixlLG8sdCxpLHIpfSkpLHgobixvLCExKSxyJiZuLnUmJmIoXCJQYXRjaGVzXCIpLlIoZSxyLG4udSxuLnMpfXJldHVybiBlLm99ZnVuY3Rpb24gQShlLGksbyxhLGMscyl7aWYoXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmYz09PW8mJm4oNSksdChjKSl7dmFyIHY9TShlLGMscyYmaSYmMyE9PWkuaSYmIXUoaS5ELGEpP3MuY29uY2F0KGEpOnZvaWQgMCk7aWYoZihvLGEsdiksIXQodikpcmV0dXJuO2UubT0hMX1pZihyKGMpJiYheShjKSl7aWYoIWUuaC5GJiZlLl88MSlyZXR1cm47TShlLGMpLGkmJmkuQS5sfHx4KGUsYyl9fWZ1bmN0aW9uIHgobix0LHIpe3ZvaWQgMD09PXImJihyPSExKSxuLmguRiYmbi5tJiZkKHQscil9ZnVuY3Rpb24geihuLHQpe3ZhciByPW5bUV07cmV0dXJuKHI/cChyKTpuKVt0XX1mdW5jdGlvbiBJKG4sdCl7aWYodCBpbiBuKWZvcih2YXIgcj1PYmplY3QuZ2V0UHJvdG90eXBlT2Yobik7cjspe3ZhciBlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iocix0KTtpZihlKXJldHVybiBlO3I9T2JqZWN0LmdldFByb3RvdHlwZU9mKHIpfX1mdW5jdGlvbiBrKG4pe24uUHx8KG4uUD0hMCxuLmwmJmsobi5sKSl9ZnVuY3Rpb24gRShuKXtuLm98fChuLm89bChuLnQpKX1mdW5jdGlvbiBSKG4sdCxyKXt2YXIgZT1zKHQpP2IoXCJNYXBTZXRcIikuTih0LHIpOnYodCk/YihcIk1hcFNldFwiKS5UKHQscik6bi5nP2Z1bmN0aW9uKG4sdCl7dmFyIHI9QXJyYXkuaXNBcnJheShuKSxlPXtpOnI/MTowLEE6dD90LkE6XygpLFA6ITEsSTohMSxEOnt9LGw6dCx0Om4sazpudWxsLG86bnVsbCxqOm51bGwsQzohMX0saT1lLG89ZW47ciYmKGk9W2VdLG89b24pO3ZhciB1PVByb3h5LnJldm9jYWJsZShpLG8pLGE9dS5yZXZva2UsZj11LnByb3h5O3JldHVybiBlLms9ZixlLmo9YSxmfSh0LHIpOmIoXCJFUzVcIikuSih0LHIpO3JldHVybihyP3IuQTpfKCkpLnAucHVzaChlKSxlfWZ1bmN0aW9uIEQoZSl7cmV0dXJuIHQoZSl8fG4oMjIsZSksZnVuY3Rpb24gbih0KXtpZighcih0KSlyZXR1cm4gdDt2YXIgZSx1PXRbUV0sYz1vKHQpO2lmKHUpe2lmKCF1LlAmJih1Lmk8NHx8IWIoXCJFUzVcIikuSyh1KSkpcmV0dXJuIHUudDt1Lkk9ITAsZT1GKHQsYyksdS5JPSExfWVsc2UgZT1GKHQsYyk7cmV0dXJuIGkoZSwoZnVuY3Rpb24odCxyKXt1JiZhKHUudCx0KT09PXJ8fGYoZSx0LG4ocikpfSkpLDM9PT1jP25ldyBTZXQoZSk6ZX0oZSl9ZnVuY3Rpb24gRihuLHQpe3N3aXRjaCh0KXtjYXNlIDI6cmV0dXJuIG5ldyBNYXAobik7Y2FzZSAzOnJldHVybiBBcnJheS5mcm9tKG4pfXJldHVybiBsKG4pfWZ1bmN0aW9uIE4oKXtmdW5jdGlvbiByKG4sdCl7dmFyIHI9c1tuXTtyZXR1cm4gcj9yLmVudW1lcmFibGU9dDpzW25dPXI9e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOnQsZ2V0OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpc1tRXTtyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZmKHQpLGVuLmdldCh0LG4pfSxzZXQ6ZnVuY3Rpb24odCl7dmFyIHI9dGhpc1tRXTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZmKHIpLGVuLnNldChyLG4sdCl9fSxyfWZ1bmN0aW9uIGUobil7Zm9yKHZhciB0PW4ubGVuZ3RoLTE7dD49MDt0LS0pe3ZhciByPW5bdF1bUV07aWYoIXIuUClzd2l0Y2goci5pKXtjYXNlIDU6YShyKSYmayhyKTticmVhaztjYXNlIDQ6byhyKSYmayhyKX19fWZ1bmN0aW9uIG8obil7Zm9yKHZhciB0PW4udCxyPW4uayxlPW5uKHIpLGk9ZS5sZW5ndGgtMTtpPj0wO2ktLSl7dmFyIG89ZVtpXTtpZihvIT09USl7dmFyIGE9dFtvXTtpZih2b2lkIDA9PT1hJiYhdSh0LG8pKXJldHVybiEwO3ZhciBmPXJbb10scz1mJiZmW1FdO2lmKHM/cy50IT09YTohYyhmLGEpKXJldHVybiEwfX12YXIgdj0hIXRbUV07cmV0dXJuIGUubGVuZ3RoIT09bm4odCkubGVuZ3RoKyh2PzA6MSl9ZnVuY3Rpb24gYShuKXt2YXIgdD1uLms7aWYodC5sZW5ndGghPT1uLnQubGVuZ3RoKXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCx0Lmxlbmd0aC0xKTtyZXR1cm4hKCFyfHxyLmdldCl9ZnVuY3Rpb24gZih0KXt0Lk8mJm4oMyxKU09OLnN0cmluZ2lmeShwKHQpKSl9dmFyIHM9e307bShcIkVTNVwiLHtKOmZ1bmN0aW9uKG4sdCl7dmFyIGU9QXJyYXkuaXNBcnJheShuKSxpPWZ1bmN0aW9uKG4sdCl7aWYobil7Zm9yKHZhciBlPUFycmF5KHQubGVuZ3RoKSxpPTA7aTx0Lmxlbmd0aDtpKyspT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJcIitpLHIoaSwhMCkpO3JldHVybiBlfXZhciBvPXRuKHQpO2RlbGV0ZSBvW1FdO2Zvcih2YXIgdT1ubihvKSxhPTA7YTx1Lmxlbmd0aDthKyspe3ZhciBmPXVbYV07b1tmXT1yKGYsbnx8ISFvW2ZdLmVudW1lcmFibGUpfXJldHVybiBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih0KSxvKX0oZSxuKSxvPXtpOmU/NTo0LEE6dD90LkE6XygpLFA6ITEsSTohMSxEOnt9LGw6dCx0Om4sazppLG86bnVsbCxPOiExLEM6ITF9O3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoaSxRLHt2YWx1ZTpvLHdyaXRhYmxlOiEwfSksaX0sUzpmdW5jdGlvbihuLHIsbyl7bz90KHIpJiZyW1FdLkE9PT1uJiZlKG4ucCk6KG4udSYmZnVuY3Rpb24gbih0KXtpZih0JiZcIm9iamVjdFwiPT10eXBlb2YgdCl7dmFyIHI9dFtRXTtpZihyKXt2YXIgZT1yLnQsbz1yLmssZj1yLkQsYz1yLmk7aWYoND09PWMpaShvLChmdW5jdGlvbih0KXt0IT09USYmKHZvaWQgMCE9PWVbdF18fHUoZSx0KT9mW3RdfHxuKG9bdF0pOihmW3RdPSEwLGsocikpKX0pKSxpKGUsKGZ1bmN0aW9uKG4pe3ZvaWQgMCE9PW9bbl18fHUobyxuKXx8KGZbbl09ITEsayhyKSl9KSk7ZWxzZSBpZig1PT09Yyl7aWYoYShyKSYmKGsociksZi5sZW5ndGg9ITApLG8ubGVuZ3RoPGUubGVuZ3RoKWZvcih2YXIgcz1vLmxlbmd0aDtzPGUubGVuZ3RoO3MrKylmW3NdPSExO2Vsc2UgZm9yKHZhciB2PWUubGVuZ3RoO3Y8by5sZW5ndGg7disrKWZbdl09ITA7Zm9yKHZhciBwPU1hdGgubWluKG8ubGVuZ3RoLGUubGVuZ3RoKSxsPTA7bDxwO2wrKyl2b2lkIDA9PT1mW2xdJiZuKG9bbF0pfX19fShuLnBbMF0pLGUobi5wKSl9LEs6ZnVuY3Rpb24obil7cmV0dXJuIDQ9PT1uLmk/byhuKTphKG4pfX0pfWZ1bmN0aW9uIFQoKXtmdW5jdGlvbiBlKG4pe2lmKCFyKG4pKXJldHVybiBuO2lmKEFycmF5LmlzQXJyYXkobikpcmV0dXJuIG4ubWFwKGUpO2lmKHMobikpcmV0dXJuIG5ldyBNYXAoQXJyYXkuZnJvbShuLmVudHJpZXMoKSkubWFwKChmdW5jdGlvbihuKXtyZXR1cm5bblswXSxlKG5bMV0pXX0pKSk7aWYodihuKSlyZXR1cm4gbmV3IFNldChBcnJheS5mcm9tKG4pLm1hcChlKSk7dmFyIHQ9T2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YobikpO2Zvcih2YXIgaSBpbiBuKXRbaV09ZShuW2ldKTtyZXR1cm4gdShuLEwpJiYodFtMXT1uW0xdKSx0fWZ1bmN0aW9uIGYobil7cmV0dXJuIHQobik/ZShuKTpufXZhciBjPVwiYWRkXCI7bShcIlBhdGNoZXNcIix7JDpmdW5jdGlvbih0LHIpe3JldHVybiByLmZvckVhY2goKGZ1bmN0aW9uKHIpe2Zvcih2YXIgaT1yLnBhdGgsdT1yLm9wLGY9dCxzPTA7czxpLmxlbmd0aC0xO3MrKyl7dmFyIHY9byhmKSxwPVwiXCIraVtzXTswIT09diYmMSE9PXZ8fFwiX19wcm90b19fXCIhPT1wJiZcImNvbnN0cnVjdG9yXCIhPT1wfHxuKDI0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBmJiZcInByb3RvdHlwZVwiPT09cCYmbigyNCksXCJvYmplY3RcIiE9dHlwZW9mKGY9YShmLHApKSYmbigxNSxpLmpvaW4oXCIvXCIpKX12YXIgbD1vKGYpLGQ9ZShyLnZhbHVlKSxoPWlbaS5sZW5ndGgtMV07c3dpdGNoKHUpe2Nhc2VcInJlcGxhY2VcIjpzd2l0Y2gobCl7Y2FzZSAyOnJldHVybiBmLnNldChoLGQpO2Nhc2UgMzpuKDE2KTtkZWZhdWx0OnJldHVybiBmW2hdPWR9Y2FzZSBjOnN3aXRjaChsKXtjYXNlIDE6cmV0dXJuIGYuc3BsaWNlKGgsMCxkKTtjYXNlIDI6cmV0dXJuIGYuc2V0KGgsZCk7Y2FzZSAzOnJldHVybiBmLmFkZChkKTtkZWZhdWx0OnJldHVybiBmW2hdPWR9Y2FzZVwicmVtb3ZlXCI6c3dpdGNoKGwpe2Nhc2UgMTpyZXR1cm4gZi5zcGxpY2UoaCwxKTtjYXNlIDI6cmV0dXJuIGYuZGVsZXRlKGgpO2Nhc2UgMzpyZXR1cm4gZi5kZWxldGUoci52YWx1ZSk7ZGVmYXVsdDpyZXR1cm4gZGVsZXRlIGZbaF19ZGVmYXVsdDpuKDE3LHUpfX0pKSx0fSxSOmZ1bmN0aW9uKG4sdCxyLGUpe3N3aXRjaChuLmkpe2Nhc2UgMDpjYXNlIDQ6Y2FzZSAyOnJldHVybiBmdW5jdGlvbihuLHQscixlKXt2YXIgbz1uLnQscz1uLm87aShuLkQsKGZ1bmN0aW9uKG4saSl7dmFyIHY9YShvLG4pLHA9YShzLG4pLGw9aT91KG8sbik/XCJyZXBsYWNlXCI6YzpcInJlbW92ZVwiO2lmKHYhPT1wfHxcInJlcGxhY2VcIiE9PWwpe3ZhciBkPXQuY29uY2F0KG4pO3IucHVzaChcInJlbW92ZVwiPT09bD97b3A6bCxwYXRoOmR9OntvcDpsLHBhdGg6ZCx2YWx1ZTpwfSksZS5wdXNoKGw9PT1jP3tvcDpcInJlbW92ZVwiLHBhdGg6ZH06XCJyZW1vdmVcIj09PWw/e29wOmMscGF0aDpkLHZhbHVlOmYodil9OntvcDpcInJlcGxhY2VcIixwYXRoOmQsdmFsdWU6Zih2KX0pfX0pKX0obix0LHIsZSk7Y2FzZSA1OmNhc2UgMTpyZXR1cm4gZnVuY3Rpb24obix0LHIsZSl7dmFyIGk9bi50LG89bi5ELHU9bi5vO2lmKHUubGVuZ3RoPGkubGVuZ3RoKXt2YXIgYT1bdSxpXTtpPWFbMF0sdT1hWzFdO3ZhciBzPVtlLHJdO3I9c1swXSxlPXNbMV19Zm9yKHZhciB2PTA7djxpLmxlbmd0aDt2KyspaWYob1t2XSYmdVt2XSE9PWlbdl0pe3ZhciBwPXQuY29uY2F0KFt2XSk7ci5wdXNoKHtvcDpcInJlcGxhY2VcIixwYXRoOnAsdmFsdWU6Zih1W3ZdKX0pLGUucHVzaCh7b3A6XCJyZXBsYWNlXCIscGF0aDpwLHZhbHVlOmYoaVt2XSl9KX1mb3IodmFyIGw9aS5sZW5ndGg7bDx1Lmxlbmd0aDtsKyspe3ZhciBkPXQuY29uY2F0KFtsXSk7ci5wdXNoKHtvcDpjLHBhdGg6ZCx2YWx1ZTpmKHVbbF0pfSl9aS5sZW5ndGg8dS5sZW5ndGgmJmUucHVzaCh7b3A6XCJyZXBsYWNlXCIscGF0aDp0LmNvbmNhdChbXCJsZW5ndGhcIl0pLHZhbHVlOmkubGVuZ3RofSl9KG4sdCxyLGUpO2Nhc2UgMzpyZXR1cm4gZnVuY3Rpb24obix0LHIsZSl7dmFyIGk9bi50LG89bi5vLHU9MDtpLmZvckVhY2goKGZ1bmN0aW9uKG4pe2lmKCFvLmhhcyhuKSl7dmFyIGk9dC5jb25jYXQoW3VdKTtyLnB1c2goe29wOlwicmVtb3ZlXCIscGF0aDppLHZhbHVlOm59KSxlLnVuc2hpZnQoe29wOmMscGF0aDppLHZhbHVlOm59KX11Kyt9KSksdT0wLG8uZm9yRWFjaCgoZnVuY3Rpb24obil7aWYoIWkuaGFzKG4pKXt2YXIgbz10LmNvbmNhdChbdV0pO3IucHVzaCh7b3A6YyxwYXRoOm8sdmFsdWU6bn0pLGUudW5zaGlmdCh7b3A6XCJyZW1vdmVcIixwYXRoOm8sdmFsdWU6bn0pfXUrK30pKX0obix0LHIsZSl9fSxNOmZ1bmN0aW9uKG4sdCxyLGUpe3IucHVzaCh7b3A6XCJyZXBsYWNlXCIscGF0aDpbXSx2YWx1ZTp0PT09SD92b2lkIDA6dH0pLGUucHVzaCh7b3A6XCJyZXBsYWNlXCIscGF0aDpbXSx2YWx1ZTpuLnR9KX19KX1mdW5jdGlvbiBDKCl7ZnVuY3Rpb24gdChuLHQpe2Z1bmN0aW9uIHIoKXt0aGlzLmNvbnN0cnVjdG9yPW59YShuLHQpLG4ucHJvdG90eXBlPShyLnByb3RvdHlwZT10LnByb3RvdHlwZSxuZXcgcil9ZnVuY3Rpb24gZShuKXtuLm98fChuLkQ9bmV3IE1hcCxuLm89bmV3IE1hcChuLnQpKX1mdW5jdGlvbiBvKG4pe24ub3x8KG4ubz1uZXcgU2V0LG4udC5mb3JFYWNoKChmdW5jdGlvbih0KXtpZihyKHQpKXt2YXIgZT1SKG4uQS5oLHQsbik7bi5wLnNldCh0LGUpLG4uby5hZGQoZSl9ZWxzZSBuLm8uYWRkKHQpfSkpKX1mdW5jdGlvbiB1KHQpe3QuTyYmbigzLEpTT04uc3RyaW5naWZ5KHAodCkpKX12YXIgYT1mdW5jdGlvbihuLHQpe3JldHVybihhPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbihuLHQpe24uX19wcm90b19fPXR9fHxmdW5jdGlvbihuLHQpe2Zvcih2YXIgciBpbiB0KXQuaGFzT3duUHJvcGVydHkocikmJihuW3JdPXRbcl0pfSkobix0KX0sZj1mdW5jdGlvbigpe2Z1bmN0aW9uIG4obix0KXtyZXR1cm4gdGhpc1tRXT17aToyLGw6dCxBOnQ/dC5BOl8oKSxQOiExLEk6ITEsbzp2b2lkIDAsRDp2b2lkIDAsdDpuLGs6dGhpcyxDOiExLE86ITF9LHRoaXN9dChuLE1hcCk7dmFyIG89bi5wcm90b3R5cGU7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwic2l6ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcCh0aGlzW1FdKS5zaXplfX0pLG8uaGFzPWZ1bmN0aW9uKG4pe3JldHVybiBwKHRoaXNbUV0pLmhhcyhuKX0sby5zZXQ9ZnVuY3Rpb24obix0KXt2YXIgcj10aGlzW1FdO3JldHVybiB1KHIpLHAocikuaGFzKG4pJiZwKHIpLmdldChuKT09PXR8fChlKHIpLGsociksci5ELnNldChuLCEwKSxyLm8uc2V0KG4sdCksci5ELnNldChuLCEwKSksdGhpc30sby5kZWxldGU9ZnVuY3Rpb24obil7aWYoIXRoaXMuaGFzKG4pKXJldHVybiExO3ZhciB0PXRoaXNbUV07cmV0dXJuIHUodCksZSh0KSxrKHQpLHQuRC5zZXQobiwhMSksdC5vLmRlbGV0ZShuKSwhMH0sby5jbGVhcj1mdW5jdGlvbigpe3ZhciBuPXRoaXNbUV07dShuKSxwKG4pLnNpemUmJihlKG4pLGsobiksbi5EPW5ldyBNYXAsaShuLnQsKGZ1bmN0aW9uKHQpe24uRC5zZXQodCwhMSl9KSksbi5vLmNsZWFyKCkpfSxvLmZvckVhY2g9ZnVuY3Rpb24obix0KXt2YXIgcj10aGlzO3AodGhpc1tRXSkuZm9yRWFjaCgoZnVuY3Rpb24oZSxpKXtuLmNhbGwodCxyLmdldChpKSxpLHIpfSkpfSxvLmdldD1mdW5jdGlvbihuKXt2YXIgdD10aGlzW1FdO3UodCk7dmFyIGk9cCh0KS5nZXQobik7aWYodC5JfHwhcihpKSlyZXR1cm4gaTtpZihpIT09dC50LmdldChuKSlyZXR1cm4gaTt2YXIgbz1SKHQuQS5oLGksdCk7cmV0dXJuIGUodCksdC5vLnNldChuLG8pLG99LG8ua2V5cz1mdW5jdGlvbigpe3JldHVybiBwKHRoaXNbUV0pLmtleXMoKX0sby52YWx1ZXM9ZnVuY3Rpb24oKXt2YXIgbix0PXRoaXMscj10aGlzLmtleXMoKTtyZXR1cm4obj17fSlbVl09ZnVuY3Rpb24oKXtyZXR1cm4gdC52YWx1ZXMoKX0sbi5uZXh0PWZ1bmN0aW9uKCl7dmFyIG49ci5uZXh0KCk7cmV0dXJuIG4uZG9uZT9uOntkb25lOiExLHZhbHVlOnQuZ2V0KG4udmFsdWUpfX0sbn0sby5lbnRyaWVzPWZ1bmN0aW9uKCl7dmFyIG4sdD10aGlzLHI9dGhpcy5rZXlzKCk7cmV0dXJuKG49e30pW1ZdPWZ1bmN0aW9uKCl7cmV0dXJuIHQuZW50cmllcygpfSxuLm5leHQ9ZnVuY3Rpb24oKXt2YXIgbj1yLm5leHQoKTtpZihuLmRvbmUpcmV0dXJuIG47dmFyIGU9dC5nZXQobi52YWx1ZSk7cmV0dXJue2RvbmU6ITEsdmFsdWU6W24udmFsdWUsZV19fSxufSxvW1ZdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW50cmllcygpfSxufSgpLGM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBuKG4sdCl7cmV0dXJuIHRoaXNbUV09e2k6MyxsOnQsQTp0P3QuQTpfKCksUDohMSxJOiExLG86dm9pZCAwLHQ6bixrOnRoaXMscDpuZXcgTWFwLE86ITEsQzohMX0sdGhpc310KG4sU2V0KTt2YXIgcj1uLnByb3RvdHlwZTtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJzaXplXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBwKHRoaXNbUV0pLnNpemV9fSksci5oYXM9ZnVuY3Rpb24obil7dmFyIHQ9dGhpc1tRXTtyZXR1cm4gdSh0KSx0Lm8/ISF0Lm8uaGFzKG4pfHwhKCF0LnAuaGFzKG4pfHwhdC5vLmhhcyh0LnAuZ2V0KG4pKSk6dC50LmhhcyhuKX0sci5hZGQ9ZnVuY3Rpb24obil7dmFyIHQ9dGhpc1tRXTtyZXR1cm4gdSh0KSx0aGlzLmhhcyhuKXx8KG8odCksayh0KSx0Lm8uYWRkKG4pKSx0aGlzfSxyLmRlbGV0ZT1mdW5jdGlvbihuKXtpZighdGhpcy5oYXMobikpcmV0dXJuITE7dmFyIHQ9dGhpc1tRXTtyZXR1cm4gdSh0KSxvKHQpLGsodCksdC5vLmRlbGV0ZShuKXx8ISF0LnAuaGFzKG4pJiZ0Lm8uZGVsZXRlKHQucC5nZXQobikpfSxyLmNsZWFyPWZ1bmN0aW9uKCl7dmFyIG49dGhpc1tRXTt1KG4pLHAobikuc2l6ZSYmKG8obiksayhuKSxuLm8uY2xlYXIoKSl9LHIudmFsdWVzPWZ1bmN0aW9uKCl7dmFyIG49dGhpc1tRXTtyZXR1cm4gdShuKSxvKG4pLG4uby52YWx1ZXMoKX0sci5lbnRyaWVzPWZ1bmN0aW9uKCl7dmFyIG49dGhpc1tRXTtyZXR1cm4gdShuKSxvKG4pLG4uby5lbnRyaWVzKCl9LHIua2V5cz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlcygpfSxyW1ZdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWVzKCl9LHIuZm9yRWFjaD1mdW5jdGlvbihuLHQpe2Zvcih2YXIgcj10aGlzLnZhbHVlcygpLGU9ci5uZXh0KCk7IWUuZG9uZTspbi5jYWxsKHQsZS52YWx1ZSxlLnZhbHVlLHRoaXMpLGU9ci5uZXh0KCl9LG59KCk7bShcIk1hcFNldFwiLHtOOmZ1bmN0aW9uKG4sdCl7cmV0dXJuIG5ldyBmKG4sdCl9LFQ6ZnVuY3Rpb24obix0KXtyZXR1cm4gbmV3IGMobix0KX19KX1mdW5jdGlvbiBKKCl7TigpLEMoKSxUKCl9ZnVuY3Rpb24gSyhuKXtyZXR1cm4gbn1mdW5jdGlvbiAkKG4pe3JldHVybiBufXZhciBHLFUsVz1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sKFwieFwiKSxYPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBNYXAscT1cInVuZGVmaW5lZFwiIT10eXBlb2YgU2V0LEI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFByb3h5JiZ2b2lkIDAhPT1Qcm94eS5yZXZvY2FibGUmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBSZWZsZWN0LEg9Vz9TeW1ib2wuZm9yKFwiaW1tZXItbm90aGluZ1wiKTooKEc9e30pW1wiaW1tZXItbm90aGluZ1wiXT0hMCxHKSxMPVc/U3ltYm9sLmZvcihcImltbWVyLWRyYWZ0YWJsZVwiKTpcIl9fJGltbWVyX2RyYWZ0YWJsZVwiLFE9Vz9TeW1ib2wuZm9yKFwiaW1tZXItc3RhdGVcIik6XCJfXyRpbW1lcl9zdGF0ZVwiLFY9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yfHxcIkBAaXRlcmF0b3JcIixZPXswOlwiSWxsZWdhbCBzdGF0ZVwiLDE6XCJJbW1lciBkcmFmdHMgY2Fubm90IGhhdmUgY29tcHV0ZWQgcHJvcGVydGllc1wiLDI6XCJUaGlzIG9iamVjdCBoYXMgYmVlbiBmcm96ZW4gYW5kIHNob3VsZCBub3QgYmUgbXV0YXRlZFwiLDM6ZnVuY3Rpb24obil7cmV0dXJuXCJDYW5ub3QgdXNlIGEgcHJveHkgdGhhdCBoYXMgYmVlbiByZXZva2VkLiBEaWQgeW91IHBhc3MgYW4gb2JqZWN0IGZyb20gaW5zaWRlIGFuIGltbWVyIGZ1bmN0aW9uIHRvIGFuIGFzeW5jIHByb2Nlc3M/IFwiK259LDQ6XCJBbiBpbW1lciBwcm9kdWNlciByZXR1cm5lZCBhIG5ldyB2YWx1ZSAqYW5kKiBtb2RpZmllZCBpdHMgZHJhZnQuIEVpdGhlciByZXR1cm4gYSBuZXcgdmFsdWUgKm9yKiBtb2RpZnkgdGhlIGRyYWZ0LlwiLDU6XCJJbW1lciBmb3JiaWRzIGNpcmN1bGFyIHJlZmVyZW5jZXNcIiw2OlwiVGhlIGZpcnN0IG9yIHNlY29uZCBhcmd1bWVudCB0byBgcHJvZHVjZWAgbXVzdCBiZSBhIGZ1bmN0aW9uXCIsNzpcIlRoZSB0aGlyZCBhcmd1bWVudCB0byBgcHJvZHVjZWAgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIHVuZGVmaW5lZFwiLDg6XCJGaXJzdCBhcmd1bWVudCB0byBgY3JlYXRlRHJhZnRgIG11c3QgYmUgYSBwbGFpbiBvYmplY3QsIGFuIGFycmF5LCBvciBhbiBpbW1lcmFibGUgb2JqZWN0XCIsOTpcIkZpcnN0IGFyZ3VtZW50IHRvIGBmaW5pc2hEcmFmdGAgbXVzdCBiZSBhIGRyYWZ0IHJldHVybmVkIGJ5IGBjcmVhdGVEcmFmdGBcIiwxMDpcIlRoZSBnaXZlbiBkcmFmdCBpcyBhbHJlYWR5IGZpbmFsaXplZFwiLDExOlwiT2JqZWN0LmRlZmluZVByb3BlcnR5KCkgY2Fubm90IGJlIHVzZWQgb24gYW4gSW1tZXIgZHJhZnRcIiwxMjpcIk9iamVjdC5zZXRQcm90b3R5cGVPZigpIGNhbm5vdCBiZSB1c2VkIG9uIGFuIEltbWVyIGRyYWZ0XCIsMTM6XCJJbW1lciBvbmx5IHN1cHBvcnRzIGRlbGV0aW5nIGFycmF5IGluZGljZXNcIiwxNDpcIkltbWVyIG9ubHkgc3VwcG9ydHMgc2V0dGluZyBhcnJheSBpbmRpY2VzIGFuZCB0aGUgJ2xlbmd0aCcgcHJvcGVydHlcIiwxNTpmdW5jdGlvbihuKXtyZXR1cm5cIkNhbm5vdCBhcHBseSBwYXRjaCwgcGF0aCBkb2Vzbid0IHJlc29sdmU6IFwiK259LDE2OidTZXRzIGNhbm5vdCBoYXZlIFwicmVwbGFjZVwiIHBhdGNoZXMuJywxNzpmdW5jdGlvbihuKXtyZXR1cm5cIlVuc3VwcG9ydGVkIHBhdGNoIG9wZXJhdGlvbjogXCIrbn0sMTg6ZnVuY3Rpb24obil7cmV0dXJuXCJUaGUgcGx1Z2luIGZvciAnXCIrbitcIicgaGFzIG5vdCBiZWVuIGxvYWRlZCBpbnRvIEltbWVyLiBUbyBlbmFibGUgdGhlIHBsdWdpbiwgaW1wb3J0IGFuZCBjYWxsIGBlbmFibGVcIituK1wiKClgIHdoZW4gaW5pdGlhbGl6aW5nIHlvdXIgYXBwbGljYXRpb24uXCJ9LDIwOlwiQ2Fubm90IHVzZSBwcm94aWVzIGlmIFByb3h5LCBQcm94eS5yZXZvY2FibGUgb3IgUmVmbGVjdCBhcmUgbm90IGF2YWlsYWJsZVwiLDIxOmZ1bmN0aW9uKG4pe3JldHVyblwicHJvZHVjZSBjYW4gb25seSBiZSBjYWxsZWQgb24gdGhpbmdzIHRoYXQgYXJlIGRyYWZ0YWJsZTogcGxhaW4gb2JqZWN0cywgYXJyYXlzLCBNYXAsIFNldCBvciBjbGFzc2VzIHRoYXQgYXJlIG1hcmtlZCB3aXRoICdbaW1tZXJhYmxlXTogdHJ1ZScuIEdvdCAnXCIrbitcIidcIn0sMjI6ZnVuY3Rpb24obil7cmV0dXJuXCInY3VycmVudCcgZXhwZWN0cyBhIGRyYWZ0LCBnb3Q6IFwiK259LDIzOmZ1bmN0aW9uKG4pe3JldHVyblwiJ29yaWdpbmFsJyBleHBlY3RzIGEgZHJhZnQsIGdvdDogXCIrbn0sMjQ6XCJQYXRjaGluZyByZXNlcnZlZCBhdHRyaWJ1dGVzIGxpa2UgX19wcm90b19fLCBwcm90b3R5cGUgYW5kIGNvbnN0cnVjdG9yIGlzIG5vdCBhbGxvd2VkXCJ9LFo9XCJcIitPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLG5uPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBSZWZsZWN0JiZSZWZsZWN0Lm93bktleXM/UmVmbGVjdC5vd25LZXlzOnZvaWQgMCE9PU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM/ZnVuY3Rpb24obil7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG4pLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG4pKX06T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsdG49T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnN8fGZ1bmN0aW9uKG4pe3ZhciB0PXt9O3JldHVybiBubihuKS5mb3JFYWNoKChmdW5jdGlvbihyKXt0W3JdPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobixyKX0pKSx0fSxybj17fSxlbj17Z2V0OmZ1bmN0aW9uKG4sdCl7aWYodD09PVEpcmV0dXJuIG47dmFyIGU9cChuKTtpZighdShlLHQpKXJldHVybiBmdW5jdGlvbihuLHQscil7dmFyIGUsaT1JKHQscik7cmV0dXJuIGk/XCJ2YWx1ZVwiaW4gaT9pLnZhbHVlOm51bGw9PT0oZT1pLmdldCl8fHZvaWQgMD09PWU/dm9pZCAwOmUuY2FsbChuLmspOnZvaWQgMH0obixlLHQpO3ZhciBpPWVbdF07cmV0dXJuIG4uSXx8IXIoaSk/aTppPT09eihuLnQsdCk/KEUobiksbi5vW3RdPVIobi5BLmgsaSxuKSk6aX0saGFzOmZ1bmN0aW9uKG4sdCl7cmV0dXJuIHQgaW4gcChuKX0sb3duS2V5czpmdW5jdGlvbihuKXtyZXR1cm4gUmVmbGVjdC5vd25LZXlzKHAobikpfSxzZXQ6ZnVuY3Rpb24obix0LHIpe3ZhciBlPUkocChuKSx0KTtpZihudWxsPT1lP3ZvaWQgMDplLnNldClyZXR1cm4gZS5zZXQuY2FsbChuLmssciksITA7aWYoIW4uUCl7dmFyIGk9eihwKG4pLHQpLG89bnVsbD09aT92b2lkIDA6aVtRXTtpZihvJiZvLnQ9PT1yKXJldHVybiBuLm9bdF09cixuLkRbdF09ITEsITA7aWYoYyhyLGkpJiYodm9pZCAwIT09cnx8dShuLnQsdCkpKXJldHVybiEwO0UobiksayhuKX1yZXR1cm4gbi5vW3RdPT09ciYmXCJudW1iZXJcIiE9dHlwZW9mIHImJih2b2lkIDAhPT1yfHx0IGluIG4ubyl8fChuLm9bdF09cixuLkRbdF09ITAsITApfSxkZWxldGVQcm9wZXJ0eTpmdW5jdGlvbihuLHQpe3JldHVybiB2b2lkIDAhPT16KG4udCx0KXx8dCBpbiBuLnQ/KG4uRFt0XT0hMSxFKG4pLGsobikpOmRlbGV0ZSBuLkRbdF0sbi5vJiZkZWxldGUgbi5vW3RdLCEwfSxnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ZnVuY3Rpb24obix0KXt2YXIgcj1wKG4pLGU9UmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iocix0KTtyZXR1cm4gZT97d3JpdGFibGU6ITAsY29uZmlndXJhYmxlOjEhPT1uLml8fFwibGVuZ3RoXCIhPT10LGVudW1lcmFibGU6ZS5lbnVtZXJhYmxlLHZhbHVlOnJbdF19OmV9LGRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKCl7bigxMSl9LGdldFByb3RvdHlwZU9mOmZ1bmN0aW9uKG4pe3JldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobi50KX0sc2V0UHJvdG90eXBlT2Y6ZnVuY3Rpb24oKXtuKDEyKX19LG9uPXt9O2koZW4sKGZ1bmN0aW9uKG4sdCl7b25bbl09ZnVuY3Rpb24oKXtyZXR1cm4gYXJndW1lbnRzWzBdPWFyZ3VtZW50c1swXVswXSx0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX19KSksb24uZGVsZXRlUHJvcGVydHk9ZnVuY3Rpb24odCxyKXtyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZpc05hTihwYXJzZUludChyKSkmJm4oMTMpLGVuLmRlbGV0ZVByb3BlcnR5LmNhbGwodGhpcyx0WzBdLHIpfSxvbi5zZXQ9ZnVuY3Rpb24odCxyLGUpe3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwibGVuZ3RoXCIhPT1yJiZpc05hTihwYXJzZUludChyKSkmJm4oMTQpLGVuLnNldC5jYWxsKHRoaXMsdFswXSxyLGUsdFswXSl9O3ZhciB1bj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7dmFyIGU9dGhpczt0aGlzLmc9Qix0aGlzLkY9ITAsdGhpcy5wcm9kdWNlPWZ1bmN0aW9uKHQsaSxvKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBpKXt2YXIgdT1pO2k9dDt2YXIgYT1lO3JldHVybiBmdW5jdGlvbihuKXt2YXIgdD10aGlzO3ZvaWQgMD09PW4mJihuPXUpO2Zvcih2YXIgcj1hcmd1bWVudHMubGVuZ3RoLGU9QXJyYXkocj4xP3ItMTowKSxvPTE7bzxyO28rKyllW28tMV09YXJndW1lbnRzW29dO3JldHVybiBhLnByb2R1Y2UobiwoZnVuY3Rpb24obil7dmFyIHI7cmV0dXJuKHI9aSkuY2FsbC5hcHBseShyLFt0LG5dLmNvbmNhdChlKSl9KSl9fXZhciBmO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGkmJm4oNiksdm9pZCAwIT09byYmXCJmdW5jdGlvblwiIT10eXBlb2YgbyYmbig3KSxyKHQpKXt2YXIgYz13KGUpLHM9UihlLHQsdm9pZCAwKSx2PSEwO3RyeXtmPWkocyksdj0hMX1maW5hbGx5e3Y/TyhjKTpnKGMpfXJldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBQcm9taXNlJiZmIGluc3RhbmNlb2YgUHJvbWlzZT9mLnRoZW4oKGZ1bmN0aW9uKG4pe3JldHVybiBqKGMsbyksUChuLGMpfSksKGZ1bmN0aW9uKG4pe3Rocm93IE8oYyksbn0pKTooaihjLG8pLFAoZixjKSl9aWYoIXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0KXtpZigoZj1pKHQpKT09PUgpcmV0dXJuO3JldHVybiB2b2lkIDA9PT1mJiYoZj10KSxlLkYmJmQoZiwhMCksZn1uKDIxLHQpfSx0aGlzLnByb2R1Y2VXaXRoUGF0Y2hlcz1mdW5jdGlvbihuLHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4/ZnVuY3Rpb24odCl7Zm9yKHZhciByPWFyZ3VtZW50cy5sZW5ndGgsaT1BcnJheShyPjE/ci0xOjApLG89MTtvPHI7bysrKWlbby0xXT1hcmd1bWVudHNbb107cmV0dXJuIGUucHJvZHVjZVdpdGhQYXRjaGVzKHQsKGZ1bmN0aW9uKHQpe3JldHVybiBuLmFwcGx5KHZvaWQgMCxbdF0uY29uY2F0KGkpKX0pKX06W2UucHJvZHVjZShuLHQsKGZ1bmN0aW9uKG4sdCl7cj1uLGk9dH0pKSxyLGldO3ZhciByLGl9LFwiYm9vbGVhblwiPT10eXBlb2YobnVsbD09dD92b2lkIDA6dC51c2VQcm94aWVzKSYmdGhpcy5zZXRVc2VQcm94aWVzKHQudXNlUHJveGllcyksXCJib29sZWFuXCI9PXR5cGVvZihudWxsPT10P3ZvaWQgMDp0LmF1dG9GcmVlemUpJiZ0aGlzLnNldEF1dG9GcmVlemUodC5hdXRvRnJlZXplKX12YXIgaT1lLnByb3RvdHlwZTtyZXR1cm4gaS5jcmVhdGVEcmFmdD1mdW5jdGlvbihlKXtyKGUpfHxuKDgpLHQoZSkmJihlPUQoZSkpO3ZhciBpPXcodGhpcyksbz1SKHRoaXMsZSx2b2lkIDApO3JldHVybiBvW1FdLkM9ITAsZyhpKSxvfSxpLmZpbmlzaERyYWZ0PWZ1bmN0aW9uKHQscil7dmFyIGU9dCYmdFtRXTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYoZSYmZS5DfHxuKDkpLGUuSSYmbigxMCkpO3ZhciBpPWUuQTtyZXR1cm4gaihpLHIpLFAodm9pZCAwLGkpfSxpLnNldEF1dG9GcmVlemU9ZnVuY3Rpb24obil7dGhpcy5GPW59LGkuc2V0VXNlUHJveGllcz1mdW5jdGlvbih0KXt0JiYhQiYmbigyMCksdGhpcy5nPXR9LGkuYXBwbHlQYXRjaGVzPWZ1bmN0aW9uKG4scil7dmFyIGU7Zm9yKGU9ci5sZW5ndGgtMTtlPj0wO2UtLSl7dmFyIGk9cltlXTtpZigwPT09aS5wYXRoLmxlbmd0aCYmXCJyZXBsYWNlXCI9PT1pLm9wKXtuPWkudmFsdWU7YnJlYWt9fXZhciBvPWIoXCJQYXRjaGVzXCIpLiQ7cmV0dXJuIHQobik/byhuLHIpOnRoaXMucHJvZHVjZShuLChmdW5jdGlvbihuKXtyZXR1cm4gbyhuLHIuc2xpY2UoZSsxKSl9KSl9LGV9KCksYW49bmV3IHVuLGZuPWFuLnByb2R1Y2UsY249YW4ucHJvZHVjZVdpdGhQYXRjaGVzLmJpbmQoYW4pLHNuPWFuLnNldEF1dG9GcmVlemUuYmluZChhbiksdm49YW4uc2V0VXNlUHJveGllcy5iaW5kKGFuKSxwbj1hbi5hcHBseVBhdGNoZXMuYmluZChhbiksbG49YW4uY3JlYXRlRHJhZnQuYmluZChhbiksZG49YW4uZmluaXNoRHJhZnQuYmluZChhbik7ZXhwb3J0IGRlZmF1bHQgZm47ZXhwb3J0e3VuIGFzIEltbWVyLHBuIGFzIGFwcGx5UGF0Y2hlcyxLIGFzIGNhc3REcmFmdCwkIGFzIGNhc3RJbW11dGFibGUsbG4gYXMgY3JlYXRlRHJhZnQsRCBhcyBjdXJyZW50LEogYXMgZW5hYmxlQWxsUGx1Z2lucyxOIGFzIGVuYWJsZUVTNSxDIGFzIGVuYWJsZU1hcFNldCxUIGFzIGVuYWJsZVBhdGNoZXMsZG4gYXMgZmluaXNoRHJhZnQsZCBhcyBmcmVlemUsTCBhcyBpbW1lcmFibGUsdCBhcyBpc0RyYWZ0LHIgYXMgaXNEcmFmdGFibGUsSCBhcyBub3RoaW5nLGUgYXMgb3JpZ2luYWwsZm4gYXMgcHJvZHVjZSxjbiBhcyBwcm9kdWNlV2l0aFBhdGNoZXMsc24gYXMgc2V0QXV0b0ZyZWV6ZSx2biBhcyBzZXRVc2VQcm94aWVzfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltbWVyLmVzbS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuLyoqXG4gKiBDb25zdGFudHMuXG4gKi9cblxudmFyIElTX01BQyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgL01hY3xpUG9kfGlQaG9uZXxpUGFkLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm0pO1xuXG52YXIgTU9ESUZJRVJTID0ge1xuICBhbHQ6ICdhbHRLZXknLFxuICBjb250cm9sOiAnY3RybEtleScsXG4gIG1ldGE6ICdtZXRhS2V5JyxcbiAgc2hpZnQ6ICdzaGlmdEtleSdcbn07XG5cbnZhciBBTElBU0VTID0ge1xuICBhZGQ6ICcrJyxcbiAgYnJlYWs6ICdwYXVzZScsXG4gIGNtZDogJ21ldGEnLFxuICBjb21tYW5kOiAnbWV0YScsXG4gIGN0bDogJ2NvbnRyb2wnLFxuICBjdHJsOiAnY29udHJvbCcsXG4gIGRlbDogJ2RlbGV0ZScsXG4gIGRvd246ICdhcnJvd2Rvd24nLFxuICBlc2M6ICdlc2NhcGUnLFxuICBpbnM6ICdpbnNlcnQnLFxuICBsZWZ0OiAnYXJyb3dsZWZ0JyxcbiAgbW9kOiBJU19NQUMgPyAnbWV0YScgOiAnY29udHJvbCcsXG4gIG9wdDogJ2FsdCcsXG4gIG9wdGlvbjogJ2FsdCcsXG4gIHJldHVybjogJ2VudGVyJyxcbiAgcmlnaHQ6ICdhcnJvd3JpZ2h0JyxcbiAgc3BhY2U6ICcgJyxcbiAgc3BhY2ViYXI6ICcgJyxcbiAgdXA6ICdhcnJvd3VwJyxcbiAgd2luOiAnbWV0YScsXG4gIHdpbmRvd3M6ICdtZXRhJ1xufTtcblxudmFyIENPREVTID0ge1xuICBiYWNrc3BhY2U6IDgsXG4gIHRhYjogOSxcbiAgZW50ZXI6IDEzLFxuICBzaGlmdDogMTYsXG4gIGNvbnRyb2w6IDE3LFxuICBhbHQ6IDE4LFxuICBwYXVzZTogMTksXG4gIGNhcHNsb2NrOiAyMCxcbiAgZXNjYXBlOiAyNyxcbiAgJyAnOiAzMixcbiAgcGFnZXVwOiAzMyxcbiAgcGFnZWRvd246IDM0LFxuICBlbmQ6IDM1LFxuICBob21lOiAzNixcbiAgYXJyb3dsZWZ0OiAzNyxcbiAgYXJyb3d1cDogMzgsXG4gIGFycm93cmlnaHQ6IDM5LFxuICBhcnJvd2Rvd246IDQwLFxuICBpbnNlcnQ6IDQ1LFxuICBkZWxldGU6IDQ2LFxuICBtZXRhOiA5MSxcbiAgbnVtbG9jazogMTQ0LFxuICBzY3JvbGxsb2NrOiAxNDUsXG4gICc7JzogMTg2LFxuICAnPSc6IDE4NyxcbiAgJywnOiAxODgsXG4gICctJzogMTg5LFxuICAnLic6IDE5MCxcbiAgJy8nOiAxOTEsXG4gICdgJzogMTkyLFxuICAnWyc6IDIxOSxcbiAgJ1xcXFwnOiAyMjAsXG4gICddJzogMjIxLFxuICAnXFwnJzogMjIyXG59O1xuXG5mb3IgKHZhciBmID0gMTsgZiA8IDIwOyBmKyspIHtcbiAgQ09ERVNbJ2YnICsgZl0gPSAxMTEgKyBmO1xufVxuXG4vKipcbiAqIElzIGhvdGtleT9cbiAqL1xuXG5mdW5jdGlvbiBpc0hvdGtleShob3RrZXksIG9wdGlvbnMsIGV2ZW50KSB7XG4gIGlmIChvcHRpb25zICYmICEoJ2J5S2V5JyBpbiBvcHRpb25zKSkge1xuICAgIGV2ZW50ID0gb3B0aW9ucztcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShob3RrZXkpKSB7XG4gICAgaG90a2V5ID0gW2hvdGtleV07XG4gIH1cblxuICB2YXIgYXJyYXkgPSBob3RrZXkubWFwKGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICByZXR1cm4gcGFyc2VIb3RrZXkoc3RyaW5nLCBvcHRpb25zKTtcbiAgfSk7XG4gIHZhciBjaGVjayA9IGZ1bmN0aW9uIGNoZWNrKGUpIHtcbiAgICByZXR1cm4gYXJyYXkuc29tZShmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICByZXR1cm4gY29tcGFyZUhvdGtleShvYmplY3QsIGUpO1xuICAgIH0pO1xuICB9O1xuICB2YXIgcmV0ID0gZXZlbnQgPT0gbnVsbCA/IGNoZWNrIDogY2hlY2soZXZlbnQpO1xuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBpc0NvZGVIb3RrZXkoaG90a2V5LCBldmVudCkge1xuICByZXR1cm4gaXNIb3RrZXkoaG90a2V5LCBldmVudCk7XG59XG5cbmZ1bmN0aW9uIGlzS2V5SG90a2V5KGhvdGtleSwgZXZlbnQpIHtcbiAgcmV0dXJuIGlzSG90a2V5KGhvdGtleSwgeyBieUtleTogdHJ1ZSB9LCBldmVudCk7XG59XG5cbi8qKlxuICogUGFyc2UuXG4gKi9cblxuZnVuY3Rpb24gcGFyc2VIb3RrZXkoaG90a2V5LCBvcHRpb25zKSB7XG4gIHZhciBieUtleSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5ieUtleTtcbiAgdmFyIHJldCA9IHt9O1xuXG4gIC8vIFNwZWNpYWwgY2FzZSB0byBoYW5kbGUgdGhlIGArYCBrZXkgc2luY2Ugd2UgdXNlIGl0IGFzIGEgc2VwYXJhdG9yLlxuICBob3RrZXkgPSBob3RrZXkucmVwbGFjZSgnKysnLCAnK2FkZCcpO1xuICB2YXIgdmFsdWVzID0gaG90a2V5LnNwbGl0KCcrJyk7XG4gIHZhciBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoO1xuXG4gIC8vIEVuc3VyZSB0aGF0IGFsbCB0aGUgbW9kaWZpZXJzIGFyZSBzZXQgdG8gZmFsc2UgdW5sZXNzIHRoZSBob3RrZXkgaGFzIHRoZW0uXG5cbiAgZm9yICh2YXIgayBpbiBNT0RJRklFUlMpIHtcbiAgICByZXRbTU9ESUZJRVJTW2tdXSA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gdmFsdWVzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgdmFyIHZhbHVlID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgIHZhciBvcHRpb25hbCA9IHZhbHVlLmVuZHNXaXRoKCc/JykgJiYgdmFsdWUubGVuZ3RoID4gMTtcblxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMCwgLTEpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmFtZSA9IHRvS2V5TmFtZSh2YWx1ZSk7XG4gICAgICB2YXIgbW9kaWZpZXIgPSBNT0RJRklFUlNbbmFtZV07XG5cbiAgICAgIGlmIChsZW5ndGggPT09IDEgfHwgIW1vZGlmaWVyKSB7XG4gICAgICAgIGlmIChieUtleSkge1xuICAgICAgICAgIHJldC5rZXkgPSBuYW1lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldC53aGljaCA9IHRvS2V5Q29kZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1vZGlmaWVyKSB7XG4gICAgICAgIHJldFttb2RpZmllcl0gPSBvcHRpb25hbCA/IG51bGwgOiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG4vKipcbiAqIENvbXBhcmUuXG4gKi9cblxuZnVuY3Rpb24gY29tcGFyZUhvdGtleShvYmplY3QsIGV2ZW50KSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICB2YXIgZXhwZWN0ZWQgPSBvYmplY3Rba2V5XTtcbiAgICB2YXIgYWN0dWFsID0gdm9pZCAwO1xuXG4gICAgaWYgKGV4cGVjdGVkID09IG51bGwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChrZXkgPT09ICdrZXknICYmIGV2ZW50LmtleSAhPSBudWxsKSB7XG4gICAgICBhY3R1YWwgPSBldmVudC5rZXkudG9Mb3dlckNhc2UoKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3doaWNoJykge1xuICAgICAgYWN0dWFsID0gZXhwZWN0ZWQgPT09IDkxICYmIGV2ZW50LndoaWNoID09PSA5MyA/IDkxIDogZXZlbnQud2hpY2g7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdHVhbCA9IGV2ZW50W2tleV07XG4gICAgfVxuXG4gICAgaWYgKGFjdHVhbCA9PSBudWxsICYmIGV4cGVjdGVkID09PSBmYWxzZSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFjdHVhbCAhPT0gZXhwZWN0ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBVdGlscy5cbiAqL1xuXG5mdW5jdGlvbiB0b0tleUNvZGUobmFtZSkge1xuICBuYW1lID0gdG9LZXlOYW1lKG5hbWUpO1xuICB2YXIgY29kZSA9IENPREVTW25hbWVdIHx8IG5hbWUudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApO1xuICByZXR1cm4gY29kZTtcbn1cblxuZnVuY3Rpb24gdG9LZXlOYW1lKG5hbWUpIHtcbiAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgbmFtZSA9IEFMSUFTRVNbbmFtZV0gfHwgbmFtZTtcbiAgcmV0dXJuIG5hbWU7XG59XG5cbi8qKlxuICogRXhwb3J0LlxuICovXG5cbmV4cG9ydHMuZGVmYXVsdCA9IGlzSG90a2V5O1xuZXhwb3J0cy5pc0hvdGtleSA9IGlzSG90a2V5O1xuZXhwb3J0cy5pc0NvZGVIb3RrZXkgPSBpc0NvZGVIb3RrZXk7XG5leHBvcnRzLmlzS2V5SG90a2V5ID0gaXNLZXlIb3RrZXk7XG5leHBvcnRzLnBhcnNlSG90a2V5ID0gcGFyc2VIb3RrZXk7XG5leHBvcnRzLmNvbXBhcmVIb3RrZXkgPSBjb21wYXJlSG90a2V5O1xuZXhwb3J0cy50b0tleUNvZGUgPSB0b0tleUNvZGU7XG5leHBvcnRzLnRvS2V5TmFtZSA9IHRvS2V5TmFtZTsiLCIvKiFcbiAqIGlzLXBsYWluLW9iamVjdCA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvaXMtcGxhaW4tb2JqZWN0PlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE3LCBKb24gU2NobGlua2VydC5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5mdW5jdGlvbiBpc09iamVjdChvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KG8pIHtcbiAgdmFyIGN0b3IscHJvdDtcblxuICBpZiAoaXNPYmplY3QobykgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgaGFzIG1vZGlmaWVkIGNvbnN0cnVjdG9yXG4gIGN0b3IgPSBvLmNvbnN0cnVjdG9yO1xuICBpZiAoY3RvciA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTtcblxuICAvLyBJZiBoYXMgbW9kaWZpZWQgcHJvdG90eXBlXG4gIHByb3QgPSBjdG9yLnByb3RvdHlwZTtcbiAgaWYgKGlzT2JqZWN0KHByb3QpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIGNvbnN0cnVjdG9yIGRvZXMgbm90IGhhdmUgYW4gT2JqZWN0LXNwZWNpZmljIG1ldGhvZFxuICBpZiAocHJvdC5oYXNPd25Qcm9wZXJ0eSgnaXNQcm90b3R5cGVPZicpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIE1vc3QgbGlrZWx5IGEgcGxhaW4gT2JqZWN0XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgeyBpc1BsYWluT2JqZWN0IH07XG4iLCJ2YXIgdHJpbW1lZEVuZEluZGV4ID0gcmVxdWlyZSgnLi9fdHJpbW1lZEVuZEluZGV4Jyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW1TdGFydCA9IC9eXFxzKy87XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udHJpbWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byB0cmltLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgdHJpbW1lZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUcmltKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nXG4gICAgPyBzdHJpbmcuc2xpY2UoMCwgdHJpbW1lZEVuZEluZGV4KHN0cmluZykgKyAxKS5yZXBsYWNlKHJlVHJpbVN0YXJ0LCAnJylcbiAgICA6IHN0cmluZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVHJpbTtcbiIsIi8qKiBVc2VkIHRvIG1hdGNoIGEgc2luZ2xlIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiAqL1xudmFyIHJlV2hpdGVzcGFjZSA9IC9cXHMvO1xuXG4vKipcbiAqIFVzZWQgYnkgYF8udHJpbWAgYW5kIGBfLnRyaW1FbmRgIHRvIGdldCB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgbm9uLXdoaXRlc3BhY2VcbiAqIGNoYXJhY3RlciBvZiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBub24td2hpdGVzcGFjZSBjaGFyYWN0ZXIuXG4gKi9cbmZ1bmN0aW9uIHRyaW1tZWRFbmRJbmRleChzdHJpbmcpIHtcbiAgdmFyIGluZGV4ID0gc3RyaW5nLmxlbmd0aDtcblxuICB3aGlsZSAoaW5kZXgtLSAmJiByZVdoaXRlc3BhY2UudGVzdChzdHJpbmcuY2hhckF0KGluZGV4KSkpIHt9XG4gIHJldHVybiBpbmRleDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0cmltbWVkRW5kSW5kZXg7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgbm93ID0gcmVxdWlyZSgnLi9ub3cnKSxcbiAgICB0b051bWJlciA9IHJlcXVpcmUoJy4vdG9OdW1iZXInKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHRpbWVXYWl0aW5nID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZ1xuICAgICAgPyBuYXRpdmVNaW4odGltZVdhaXRpbmcsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKVxuICAgICAgOiB0aW1lV2FpdGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBub3c7XG4iLCJ2YXIgZGVib3VuY2UgPSByZXF1aXJlKCcuL2RlYm91bmNlJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRocm90dGxlZCBmdW5jdGlvbiB0aGF0IG9ubHkgaW52b2tlcyBgZnVuY2AgYXQgbW9zdCBvbmNlIHBlclxuICogZXZlcnkgYHdhaXRgIG1pbGxpc2Vjb25kcy4gVGhlIHRocm90dGxlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGBcbiAqIG1ldGhvZCB0byBjYW5jZWwgZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG9cbiAqIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYFxuICogc2hvdWxkIGJlIGludm9rZWQgb24gdGhlIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YFxuICogdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZVxuICogdGhyb3R0bGVkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gcmV0dXJuIHRoZVxuICogcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYCBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLnRocm90dGxlYCBhbmQgYF8uZGVib3VuY2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gdGhyb3R0bGUuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhyb3R0bGUgaW52b2NhdGlvbnMgdG8uXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgdGhyb3R0bGVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBleGNlc3NpdmVseSB1cGRhdGluZyB0aGUgcG9zaXRpb24gd2hpbGUgc2Nyb2xsaW5nLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Njcm9sbCcsIF8udGhyb3R0bGUodXBkYXRlUG9zaXRpb24sIDEwMCkpO1xuICpcbiAqIC8vIEludm9rZSBgcmVuZXdUb2tlbmAgd2hlbiB0aGUgY2xpY2sgZXZlbnQgaXMgZmlyZWQsIGJ1dCBub3QgbW9yZSB0aGFuIG9uY2UgZXZlcnkgNSBtaW51dGVzLlxuICogdmFyIHRocm90dGxlZCA9IF8udGhyb3R0bGUocmVuZXdUb2tlbiwgMzAwMDAwLCB7ICd0cmFpbGluZyc6IGZhbHNlIH0pO1xuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIHRocm90dGxlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyB0aHJvdHRsZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRocm90dGxlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsZWFkaW5nID0gdHJ1ZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gJ2xlYWRpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMubGVhZGluZyA6IGxlYWRpbmc7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuICByZXR1cm4gZGVib3VuY2UoZnVuYywgd2FpdCwge1xuICAgICdsZWFkaW5nJzogbGVhZGluZyxcbiAgICAnbWF4V2FpdCc6IHdhaXQsXG4gICAgJ3RyYWlsaW5nJzogdHJhaWxpbmdcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGhyb3R0bGU7XG4iLCJ2YXIgYmFzZVRyaW0gPSByZXF1aXJlKCcuL19iYXNlVHJpbScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gYmFzZVRyaW0odmFsdWUpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b051bWJlcjtcbiIsImltcG9ydCBjb21wdXRlIGZyb20gJ2NvbXB1dGUtc2Nyb2xsLWludG8tdmlldyc7XG5cbmZ1bmN0aW9uIGlzT3B0aW9uc09iamVjdChvcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zID09PSBPYmplY3Qob3B0aW9ucykgJiYgT2JqZWN0LmtleXMob3B0aW9ucykubGVuZ3RoICE9PSAwO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0QmVoYXZpb3IoYWN0aW9ucywgYmVoYXZpb3IpIHtcbiAgaWYgKGJlaGF2aW9yID09PSB2b2lkIDApIHtcbiAgICBiZWhhdmlvciA9ICdhdXRvJztcbiAgfVxuXG4gIHZhciBjYW5TbW9vdGhTY3JvbGwgPSAoJ3Njcm9sbEJlaGF2aW9yJyBpbiBkb2N1bWVudC5ib2R5LnN0eWxlKTtcbiAgYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGVsID0gX3JlZi5lbCxcbiAgICAgICAgdG9wID0gX3JlZi50b3AsXG4gICAgICAgIGxlZnQgPSBfcmVmLmxlZnQ7XG5cbiAgICBpZiAoZWwuc2Nyb2xsICYmIGNhblNtb290aFNjcm9sbCkge1xuICAgICAgZWwuc2Nyb2xsKHtcbiAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgIGJlaGF2aW9yOiBiZWhhdmlvclxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnNjcm9sbFRvcCA9IHRvcDtcbiAgICAgIGVsLnNjcm9sbExlZnQgPSBsZWZ0O1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldE9wdGlvbnMob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYmxvY2s6ICdlbmQnLFxuICAgICAgaW5saW5lOiAnbmVhcmVzdCdcbiAgICB9O1xuICB9XG5cbiAgaWYgKGlzT3B0aW9uc09iamVjdChvcHRpb25zKSkge1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBibG9jazogJ3N0YXJ0JyxcbiAgICBpbmxpbmU6ICduZWFyZXN0J1xuICB9O1xufVxuXG5mdW5jdGlvbiBzY3JvbGxJbnRvVmlldyh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgdmFyIHRhcmdldElzRGV0YWNoZWQgPSAhdGFyZ2V0Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKHRhcmdldCk7XG5cbiAgaWYgKGlzT3B0aW9uc09iamVjdChvcHRpb25zKSAmJiB0eXBlb2Ygb3B0aW9ucy5iZWhhdmlvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBvcHRpb25zLmJlaGF2aW9yKHRhcmdldElzRGV0YWNoZWQgPyBbXSA6IGNvbXB1dGUodGFyZ2V0LCBvcHRpb25zKSk7XG4gIH1cblxuICBpZiAodGFyZ2V0SXNEZXRhY2hlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBjb21wdXRlT3B0aW9ucyA9IGdldE9wdGlvbnMob3B0aW9ucyk7XG4gIHJldHVybiBkZWZhdWx0QmVoYXZpb3IoY29tcHV0ZSh0YXJnZXQsIGNvbXB1dGVPcHRpb25zKSwgY29tcHV0ZU9wdGlvbnMuYmVoYXZpb3IpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzY3JvbGxJbnRvVmlldzsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZU1lbW8sIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUGF0aCwgTm9kZSwgRWRpdG9yLCBUZXh0IGFzIFRleHQkMSwgUmFuZ2UsIEVsZW1lbnQgYXMgRWxlbWVudCQxLCBUcmFuc2Zvcm1zIH0gZnJvbSAnc2xhdGUnO1xuaW1wb3J0IGdldERpcmVjdGlvbiBmcm9tICdkaXJlY3Rpb24nO1xuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC90aHJvdHRsZSc7XG5pbXBvcnQgc2Nyb2xsSW50b1ZpZXcgZnJvbSAnc2Nyb2xsLWludG8tdmlldy1pZi1uZWVkZWQnO1xuaW1wb3J0IHsgaXNLZXlIb3RrZXkgfSBmcm9tICdpcy1ob3RrZXknO1xuaW1wb3J0IGludmFyaWFudCBmcm9tICd0aW55LWludmFyaWFudCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vKipcclxuICogTGVhZiBjb250ZW50IHN0cmluZ3MuXHJcbiAqL1xuXG52YXIgU3RyaW5nID0gcHJvcHMgPT4ge1xuICB2YXIge1xuICAgIGlzTGFzdCxcbiAgICBsZWFmLFxuICAgIHBhcmVudCxcbiAgICB0ZXh0XG4gIH0gPSBwcm9wcztcbiAgdmFyIGVkaXRvciA9IHVzZVNsYXRlU3RhdGljKCk7XG4gIHZhciBwYXRoID0gUmVhY3RFZGl0b3IuZmluZFBhdGgoZWRpdG9yLCB0ZXh0KTtcbiAgdmFyIHBhcmVudFBhdGggPSBQYXRoLnBhcmVudChwYXRoKTsgLy8gQ09NUEFUOiBSZW5kZXIgdGV4dCBpbnNpZGUgdm9pZCBub2RlcyB3aXRoIGEgemVyby13aWR0aCBzcGFjZS5cbiAgLy8gU28gdGhlIG5vZGUgY2FuIGNvbnRhaW4gc2VsZWN0aW9uIGJ1dCB0aGUgdGV4dCBpcyBub3QgdmlzaWJsZS5cblxuICBpZiAoZWRpdG9yLmlzVm9pZChwYXJlbnQpKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFplcm9XaWR0aFN0cmluZywge1xuICAgICAgbGVuZ3RoOiBOb2RlLnN0cmluZyhwYXJlbnQpLmxlbmd0aFxuICAgIH0pO1xuICB9IC8vIENPTVBBVDogSWYgdGhpcyBpcyB0aGUgbGFzdCB0ZXh0IG5vZGUgaW4gYW4gZW1wdHkgYmxvY2ssIHJlbmRlciBhIHplcm8tXG4gIC8vIHdpZHRoIHNwYWNlIHRoYXQgd2lsbCBjb252ZXJ0IGludG8gYSBsaW5lIGJyZWFrIHdoZW4gY29weWluZyBhbmQgcGFzdGluZ1xuICAvLyB0byBzdXBwb3J0IGV4cGVjdGVkIHBsYWluIHRleHQuXG5cblxuICBpZiAobGVhZi50ZXh0ID09PSAnJyAmJiBwYXJlbnQuY2hpbGRyZW5bcGFyZW50LmNoaWxkcmVuLmxlbmd0aCAtIDFdID09PSB0ZXh0ICYmICFlZGl0b3IuaXNJbmxpbmUocGFyZW50KSAmJiBFZGl0b3Iuc3RyaW5nKGVkaXRvciwgcGFyZW50UGF0aCkgPT09ICcnKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFplcm9XaWR0aFN0cmluZywge1xuICAgICAgaXNMaW5lQnJlYWs6IHRydWVcbiAgICB9KTtcbiAgfSAvLyBDT01QQVQ6IElmIHRoZSB0ZXh0IGlzIGVtcHR5LCBpdCdzIGJlY2F1c2UgaXQncyBvbiB0aGUgZWRnZSBvZiBhbiBpbmxpbmVcbiAgLy8gbm9kZSwgc28gd2UgcmVuZGVyIGEgemVyby13aWR0aCBzcGFjZSBzbyB0aGF0IHRoZSBzZWxlY3Rpb24gY2FuIGJlXG4gIC8vIGluc2VydGVkIG5leHQgdG8gaXQgc3RpbGwuXG5cblxuICBpZiAobGVhZi50ZXh0ID09PSAnJykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChaZXJvV2lkdGhTdHJpbmcsIG51bGwpO1xuICB9IC8vIENPTVBBVDogQnJvd3NlcnMgd2lsbCBjb2xsYXBzZSB0cmFpbGluZyBuZXcgbGluZXMgYXQgdGhlIGVuZCBvZiBibG9ja3MsXG4gIC8vIHNvIHdlIG5lZWQgdG8gYWRkIGFuIGV4dHJhIHRyYWlsaW5nIG5ldyBsaW5lcyB0byBwcmV2ZW50IHRoYXQuXG5cblxuICBpZiAoaXNMYXN0ICYmIGxlYWYudGV4dC5zbGljZSgtMSkgPT09ICdcXG4nKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRleHRTdHJpbmcsIHtcbiAgICAgIGlzVHJhaWxpbmc6IHRydWUsXG4gICAgICB0ZXh0OiBsZWFmLnRleHRcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0U3RyaW5nLCB7XG4gICAgdGV4dDogbGVhZi50ZXh0XG4gIH0pO1xufTtcbi8qKlxyXG4gKiBMZWFmIHN0cmluZ3Mgd2l0aCB0ZXh0IGluIHRoZW0uXHJcbiAqL1xuXG5cbnZhciBUZXh0U3RyaW5nID0gcHJvcHMgPT4ge1xuICB2YXIge1xuICAgIHRleHQsXG4gICAgaXNUcmFpbGluZyA9IGZhbHNlXG4gIH0gPSBwcm9wcztcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgXCJkYXRhLXNsYXRlLXN0cmluZ1wiOiB0cnVlXG4gIH0sIHRleHQsIGlzVHJhaWxpbmcgPyAnXFxuJyA6IG51bGwpO1xufTtcbi8qKlxyXG4gKiBMZWFmIHN0cmluZ3Mgd2l0aG91dCB0ZXh0LCByZW5kZXIgYXMgemVyby13aWR0aCBzdHJpbmdzLlxyXG4gKi9cblxuXG52YXIgWmVyb1dpZHRoU3RyaW5nID0gcHJvcHMgPT4ge1xuICB2YXIge1xuICAgIGxlbmd0aCA9IDAsXG4gICAgaXNMaW5lQnJlYWsgPSBmYWxzZVxuICB9ID0gcHJvcHM7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIFwiZGF0YS1zbGF0ZS16ZXJvLXdpZHRoXCI6IGlzTGluZUJyZWFrID8gJ24nIDogJ3onLFxuICAgIFwiZGF0YS1zbGF0ZS1sZW5ndGhcIjogbGVuZ3RoXG4gIH0sICdcXHVGRUZGJywgaXNMaW5lQnJlYWsgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpIDogbnVsbCk7XG59O1xuXG4vKipcclxuICogVHdvIHdlYWsgbWFwcyB0aGF0IGFsbG93IHVzIHJlYnVpbGQgYSBwYXRoIGdpdmVuIGEgbm9kZS4gVGhleSBhcmUgcG9wdWxhdGVkXHJcbiAqIGF0IHJlbmRlciB0aW1lIHN1Y2ggdGhhdCBhZnRlciBhIHJlbmRlciBvY2N1cnMgd2UgY2FuIGFsd2F5cyBiYWNrdHJhY2suXHJcbiAqL1xudmFyIE5PREVfVE9fSU5ERVggPSBuZXcgV2Vha01hcCgpO1xudmFyIE5PREVfVE9fUEFSRU5UID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxyXG4gKiBXZWFrIG1hcHMgdGhhdCBhbGxvdyB1cyB0byBnbyBiZXR3ZWVuIFNsYXRlIG5vZGVzIGFuZCBET00gbm9kZXMuIFRoZXNlXHJcbiAqIGFyZSB1c2VkIHRvIHJlc29sdmUgRE9NIGV2ZW50LXJlbGF0ZWQgbG9naWMgaW50byBTbGF0ZSBhY3Rpb25zLlxyXG4gKi9cblxudmFyIEVESVRPUl9UT19XSU5ET1cgPSBuZXcgV2Vha01hcCgpO1xudmFyIEVESVRPUl9UT19FTEVNRU5UID0gbmV3IFdlYWtNYXAoKTtcbnZhciBFTEVNRU5UX1RPX05PREUgPSBuZXcgV2Vha01hcCgpO1xudmFyIEtFWV9UT19FTEVNRU5UID0gbmV3IFdlYWtNYXAoKTtcbnZhciBOT0RFX1RPX0VMRU1FTlQgPSBuZXcgV2Vha01hcCgpO1xudmFyIE5PREVfVE9fS0VZID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxyXG4gKiBXZWFrIG1hcHMgZm9yIHN0b3JpbmcgZWRpdG9yLXJlbGF0ZWQgc3RhdGUuXHJcbiAqL1xuXG52YXIgSVNfUkVBRF9PTkxZID0gbmV3IFdlYWtNYXAoKTtcbnZhciBJU19GT0NVU0VEID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxyXG4gKiBXZWFrIG1hcCBmb3IgYXNzb2NpYXRpbmcgdGhlIGNvbnRleHQgYG9uQ2hhbmdlYCBjb250ZXh0IHdpdGggdGhlIHBsdWdpbi5cclxuICovXG5cbnZhciBFRElUT1JfVE9fT05fQ0hBTkdFID0gbmV3IFdlYWtNYXAoKTtcbnZhciBFRElUT1JfVE9fUkVTVE9SRV9ET00gPSBuZXcgV2Vha01hcCgpO1xuLyoqXHJcbiAqIFN5bWJvbHMuXHJcbiAqL1xuXG52YXIgUExBQ0VIT0xERVJfU1lNQk9MID0gU3ltYm9sKCdwbGFjZWhvbGRlcicpO1xuXG4vLyBwcmV2ZW50IGluY29uc2lzdGVudCByZW5kZXJpbmcgYnkgUmVhY3Qgd2l0aCBJTUUgaW5wdXRcblxudmFyIGtleUZvclN0cmluZyA9IDA7XG4vKipcclxuICogSW5kaXZpZHVhbCBsZWF2ZXMgaW4gYSB0ZXh0IG5vZGUgd2l0aCB1bmlxdWUgZm9ybWF0dGluZy5cclxuICovXG5cbnZhciBMZWFmID0gcHJvcHMgPT4ge1xuICB2YXIge1xuICAgIGxlYWYsXG4gICAgaXNMYXN0LFxuICAgIHRleHQsXG4gICAgcGFyZW50LFxuICAgIHJlbmRlclBsYWNlaG9sZGVyLFxuICAgIHJlbmRlckxlYWYgPSBwcm9wcyA9PiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEZWZhdWx0TGVhZiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKVxuICB9ID0gcHJvcHM7XG4gIHZhciBwbGFjZWhvbGRlclJlZiA9IHVzZVJlZihudWxsKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgcGxhY2Vob2xkZXJFbCA9IHBsYWNlaG9sZGVyUmVmID09PSBudWxsIHx8IHBsYWNlaG9sZGVyUmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwbGFjZWhvbGRlclJlZi5jdXJyZW50O1xuICAgIHZhciBlZGl0b3JFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNsYXRlLWVkaXRvcj1cInRydWVcIl0nKTtcblxuICAgIGlmICghcGxhY2Vob2xkZXJFbCB8fCAhZWRpdG9yRWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlZGl0b3JFbC5zdHlsZS5taW5IZWlnaHQgPSBcIlwiLmNvbmNhdChwbGFjZWhvbGRlckVsLmNsaWVudEhlaWdodCwgXCJweFwiKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZWRpdG9yRWwuc3R5bGUubWluSGVpZ2h0ID0gJ2F1dG8nO1xuICAgIH07XG4gIH0sIFtwbGFjZWhvbGRlclJlZiwgbGVhZl0pO1xuICB2YXIgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTdHJpbmcsIHtcbiAgICBrZXk6IGtleUZvclN0cmluZysrLFxuICAgIGlzTGFzdDogaXNMYXN0LFxuICAgIGxlYWY6IGxlYWYsXG4gICAgcGFyZW50OiBwYXJlbnQsXG4gICAgdGV4dDogdGV4dFxuICB9KTtcblxuICBpZiAobGVhZltQTEFDRUhPTERFUl9TWU1CT0xdKSB7XG4gICAgdmFyIHBsYWNlaG9sZGVyUHJvcHMgPSB7XG4gICAgICBjaGlsZHJlbjogbGVhZi5wbGFjZWhvbGRlcixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgJ2RhdGEtc2xhdGUtcGxhY2Vob2xkZXInOiB0cnVlLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICBvcGFjaXR5OiAnMC4zMzMnLFxuICAgICAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnRFZGl0YWJsZTogZmFsc2UsXG4gICAgICAgIHJlZjogcGxhY2Vob2xkZXJSZWZcbiAgICAgIH1cbiAgICB9O1xuICAgIGNoaWxkcmVuID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIHJlbmRlclBsYWNlaG9sZGVyKHBsYWNlaG9sZGVyUHJvcHMpLCBjaGlsZHJlbik7XG4gIH0gLy8gQ09NUEFUOiBIYXZpbmcgdGhlIGBkYXRhLWAgYXR0cmlidXRlcyBvbiB0aGVzZSBsZWFmIGVsZW1lbnRzIGVuc3VyZXMgdGhhdFxuICAvLyBpbiBjZXJ0YWluIG1pc2JlaGF2aW5nIGJyb3dzZXJzIHRoZXkgYXJlbid0IHdlaXJkbHkgY2xvbmVkL2Rlc3Ryb3llZCBieVxuICAvLyBjb250ZW50ZWRpdGFibGUgYmVoYXZpb3JzLiAoMjAxOS8wNS8wOClcblxuXG4gIHZhciBhdHRyaWJ1dGVzID0ge1xuICAgICdkYXRhLXNsYXRlLWxlYWYnOiB0cnVlXG4gIH07XG4gIHJldHVybiByZW5kZXJMZWFmKHtcbiAgICBhdHRyaWJ1dGVzLFxuICAgIGNoaWxkcmVuLFxuICAgIGxlYWYsXG4gICAgdGV4dFxuICB9KTtcbn07XG5cbnZhciBNZW1vaXplZExlYWYgPSAvKiNfX1BVUkVfXyovUmVhY3QubWVtbyhMZWFmLCAocHJldiwgbmV4dCkgPT4ge1xuICByZXR1cm4gbmV4dC5wYXJlbnQgPT09IHByZXYucGFyZW50ICYmIG5leHQuaXNMYXN0ID09PSBwcmV2LmlzTGFzdCAmJiBuZXh0LnJlbmRlckxlYWYgPT09IHByZXYucmVuZGVyTGVhZiAmJiBuZXh0LnJlbmRlclBsYWNlaG9sZGVyID09PSBwcmV2LnJlbmRlclBsYWNlaG9sZGVyICYmIG5leHQudGV4dCA9PT0gcHJldi50ZXh0ICYmIFRleHQkMS5lcXVhbHMobmV4dC5sZWFmLCBwcmV2LmxlYWYpICYmIG5leHQubGVhZltQTEFDRUhPTERFUl9TWU1CT0xdID09PSBwcmV2LmxlYWZbUExBQ0VIT0xERVJfU1lNQk9MXTtcbn0pO1xudmFyIERlZmF1bHRMZWFmID0gcHJvcHMgPT4ge1xuICB2YXIge1xuICAgIGF0dHJpYnV0ZXMsXG4gICAgY2hpbGRyZW5cbiAgfSA9IHByb3BzO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIE9iamVjdC5hc3NpZ24oe30sIGF0dHJpYnV0ZXMpLCBjaGlsZHJlbik7XG59O1xuXG52YXIgSVNfSU9TID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIXdpbmRvdy5NU1N0cmVhbTtcbnZhciBJU19BUFBMRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9NYWMgT1MgWC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbnZhciBJU19BTkRST0lEID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL0FuZHJvaWQvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG52YXIgSVNfRklSRUZPWCA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9eKD8hLipTZWFtb25rZXkpKD89LipGaXJlZm94KS4qL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbnZhciBJU19TQUZBUkkgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvVmVyc2lvblxcL1tcXGRcXC5dKy4qU2FmYXJpLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpOyAvLyBcIm1vZGVyblwiIEVkZ2Ugd2FzIHJlbGVhc2VkIGF0IDc5LnhcblxudmFyIElTX0VER0VfTEVHQUNZID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL0VkZ2U/XFwvKD86WzAtNl1bMC05XXxbMC03XVswLThdKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG52YXIgSVNfQ0hST01FID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL0Nocm9tZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7IC8vIE5hdGl2ZSBgYmVmb3JlSW5wdXRgIGV2ZW50cyBkb24ndCB3b3JrIHdlbGwgd2l0aCByZWFjdCBvbiBDaHJvbWUgNzVcbi8vIGFuZCBvbGRlciwgQ2hyb21lIDc2KyBjYW4gdXNlIGBiZWZvcmVJbnB1dGAgdGhvdWdoLlxuXG52YXIgSVNfQ0hST01FX0xFR0FDWSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9DaHJvbWU/XFwvKD86WzAtN11bMC01XXxbMC02XVswLTldKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7IC8vIEZpcmVmb3ggZGlkIG5vdCBzdXBwb3J0IGBiZWZvcmVJbnB1dGAgdW50aWwgYHY4N2AuXG5cbnZhciBJU19GSVJFRk9YX0xFR0FDWSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9eKD8hLipTZWFtb25rZXkpKD89LipGaXJlZm94XFwvKD86WzAtN11bMC05XXxbMC04XVswLTZdKSkuKi9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7IC8vIENoZWNrIGlmIERPTSBpcyBhdmFpbGFibGUgYXMgUmVhY3QgZG9lcyBpbnRlcm5hbGx5LlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvbWFzdGVyL3BhY2thZ2VzL3NoYXJlZC9FeGVjdXRpb25FbnZpcm9ubWVudC5qc1xuXG52YXIgQ0FOX1VTRV9ET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09ICd1bmRlZmluZWQnKTsgLy8gQ09NUEFUOiBGaXJlZm94L0VkZ2UgTGVnYWN5IGRvbid0IHN1cHBvcnQgdGhlIGBiZWZvcmVpbnB1dGAgZXZlbnRcbi8vIENocm9tZSBMZWdhY3kgZG9lc24ndCBzdXBwb3J0IGBiZWZvcmVpbnB1dGAgY29ycmVjdGx5XG5cbnZhciBIQVNfQkVGT1JFX0lOUFVUX1NVUFBPUlQgPSAhSVNfQ0hST01FX0xFR0FDWSAmJiAhSVNfRURHRV9MRUdBQ1kgJiYgLy8gZ2xvYmFsVGhpcyBpcyB1bmRlZmluZWQgaW4gb2xkZXIgYnJvd3NlcnNcbnR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWxUaGlzLklucHV0RXZlbnQgJiYgLy8gQHRzLWlnbm9yZSBUaGUgYGdldFRhcmdldFJhbmdlc2AgcHJvcGVydHkgaXNuJ3QgcmVjb2duaXplZC5cbnR5cGVvZiBnbG9iYWxUaGlzLklucHV0RXZlbnQucHJvdG90eXBlLmdldFRhcmdldFJhbmdlcyA9PT0gJ2Z1bmN0aW9uJztcblxuLyoqXHJcbiAqIFByZXZlbnQgd2FybmluZyBvbiBTU1IgYnkgZmFsbGluZyBiYWNrIHRvIHVzZUVmZmVjdCB3aGVuIERPTSBpc24ndCBhdmFpbGFibGVcclxuICovXG5cbnZhciB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0ID0gQ0FOX1VTRV9ET00gPyB1c2VMYXlvdXRFZmZlY3QgOiB1c2VFZmZlY3Q7XG5cbnZhciBzaGFsbG93Q29tcGFyZSA9IChvYmoxLCBvYmoyKSA9PiBPYmplY3Qua2V5cyhvYmoxKS5sZW5ndGggPT09IE9iamVjdC5rZXlzKG9iajIpLmxlbmd0aCAmJiBPYmplY3Qua2V5cyhvYmoxKS5ldmVyeShrZXkgPT4gb2JqMi5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIG9iajFba2V5XSA9PT0gb2JqMltrZXldKTtcbi8qKlxyXG4gKiBDaGVjayBpZiBhIGxpc3Qgb2YgZGVjb3JhdG9yIHJhbmdlcyBhcmUgZXF1YWwgdG8gYW5vdGhlci5cclxuICpcclxuICogUEVSRjogdGhpcyByZXF1aXJlcyB0aGUgdHdvIGxpc3RzIHRvIGFsc28gaGF2ZSB0aGUgcmFuZ2VzIGluc2lkZSB0aGVtIGluIHRoZVxyXG4gKiBzYW1lIG9yZGVyLCBidXQgdGhpcyBpcyBhbiBva2F5IGNvbnN0cmFpbnQgZm9yIHVzIHNpbmNlIGRlY29yYXRpb25zIGFyZVxyXG4gKiBrZXB0IGluIG9yZGVyLCBhbmQgdGhlIG9kZCBjYXNlIHdoZXJlIHRoZXkgYXJlbid0IGlzIG9rYXkgdG8gcmUtcmVuZGVyIGZvci5cclxuICovXG5cbnZhciBpc0RlY29yYXRvclJhbmdlTGlzdEVxdWFsID0gKGxpc3QsIGFub3RoZXIpID0+IHtcbiAgaWYgKGxpc3QubGVuZ3RoICE9PSBhbm90aGVyLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciByYW5nZSA9IGxpc3RbaV07XG4gICAgdmFyIG90aGVyID0gYW5vdGhlcltpXTtcblxuICAgIHZhciByYW5nZU93blByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHJhbmdlLCBbXCJhbmNob3JcIiwgXCJmb2N1c1wiXSk7XG5cbiAgICB2YXIgb3RoZXJPd25Qcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvdGhlciwgW1wiYW5jaG9yXCIsIFwiZm9jdXNcIl0pO1xuXG4gICAgaWYgKCFSYW5nZS5lcXVhbHMocmFuZ2UsIG90aGVyKSB8fCByYW5nZVtQTEFDRUhPTERFUl9TWU1CT0xdICE9PSBvdGhlcltQTEFDRUhPTERFUl9TWU1CT0xdIHx8ICFzaGFsbG93Q29tcGFyZShyYW5nZU93blByb3BzLCBvdGhlck93blByb3BzKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXHJcbiAqIFRleHQuXHJcbiAqL1xuXG52YXIgVGV4dCA9IHByb3BzID0+IHtcbiAgdmFyIHtcbiAgICBkZWNvcmF0aW9ucyxcbiAgICBpc0xhc3QsXG4gICAgcGFyZW50LFxuICAgIHJlbmRlclBsYWNlaG9sZGVyLFxuICAgIHJlbmRlckxlYWYsXG4gICAgdGV4dFxuICB9ID0gcHJvcHM7XG4gIHZhciBlZGl0b3IgPSB1c2VTbGF0ZVN0YXRpYygpO1xuICB2YXIgcmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgbGVhdmVzID0gVGV4dCQxLmRlY29yYXRpb25zKHRleHQsIGRlY29yYXRpb25zKTtcbiAgdmFyIGtleSA9IFJlYWN0RWRpdG9yLmZpbmRLZXkoZWRpdG9yLCB0ZXh0KTtcbiAgdmFyIGNoaWxkcmVuID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZWF2ZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbGVhZiA9IGxlYXZlc1tpXTtcbiAgICBjaGlsZHJlbi5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNZW1vaXplZExlYWYsIHtcbiAgICAgIGlzTGFzdDogaXNMYXN0ICYmIGkgPT09IGxlYXZlcy5sZW5ndGggLSAxLFxuICAgICAga2V5OiBcIlwiLmNvbmNhdChrZXkuaWQsIFwiLVwiKS5jb25jYXQoaSksXG4gICAgICByZW5kZXJQbGFjZWhvbGRlcjogcmVuZGVyUGxhY2Vob2xkZXIsXG4gICAgICBsZWFmOiBsZWFmLFxuICAgICAgdGV4dDogdGV4dCxcbiAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgcmVuZGVyTGVhZjogcmVuZGVyTGVhZlxuICAgIH0pKTtcbiAgfSAvLyBVcGRhdGUgZWxlbWVudC1yZWxhdGVkIHdlYWsgbWFwcyB3aXRoIHRoZSBET00gZWxlbWVudCByZWYuXG5cblxuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmVmLmN1cnJlbnQpIHtcbiAgICAgIEtFWV9UT19FTEVNRU5ULnNldChrZXksIHJlZi5jdXJyZW50KTtcbiAgICAgIE5PREVfVE9fRUxFTUVOVC5zZXQodGV4dCwgcmVmLmN1cnJlbnQpO1xuICAgICAgRUxFTUVOVF9UT19OT0RFLnNldChyZWYuY3VycmVudCwgdGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIEtFWV9UT19FTEVNRU5ULmRlbGV0ZShrZXkpO1xuICAgICAgTk9ERV9UT19FTEVNRU5ULmRlbGV0ZSh0ZXh0KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBcImRhdGEtc2xhdGUtbm9kZVwiOiBcInRleHRcIixcbiAgICByZWY6IHJlZlxuICB9LCBjaGlsZHJlbik7XG59O1xuXG52YXIgTWVtb2l6ZWRUZXh0ID0gLyojX19QVVJFX18qL1JlYWN0Lm1lbW8oVGV4dCwgKHByZXYsIG5leHQpID0+IHtcbiAgcmV0dXJuIG5leHQucGFyZW50ID09PSBwcmV2LnBhcmVudCAmJiBuZXh0LmlzTGFzdCA9PT0gcHJldi5pc0xhc3QgJiYgbmV4dC5yZW5kZXJMZWFmID09PSBwcmV2LnJlbmRlckxlYWYgJiYgbmV4dC50ZXh0ID09PSBwcmV2LnRleHQgJiYgaXNEZWNvcmF0b3JSYW5nZUxpc3RFcXVhbChuZXh0LmRlY29yYXRpb25zLCBwcmV2LmRlY29yYXRpb25zKTtcbn0pO1xuXG4vKipcclxuICogQSBSZWFjdCBjb250ZXh0IGZvciBzaGFyaW5nIHRoZSBgc2VsZWN0ZWRgIHN0YXRlIG9mIGFuIGVsZW1lbnQuXHJcbiAqL1xuXG52YXIgU2VsZWN0ZWRDb250ZXh0ID0gLyojX19QVVJFX18qL2NyZWF0ZUNvbnRleHQoZmFsc2UpO1xuLyoqXHJcbiAqIEdldCB0aGUgY3VycmVudCBgc2VsZWN0ZWRgIHN0YXRlIG9mIGFuIGVsZW1lbnQuXHJcbiAqL1xuXG52YXIgdXNlU2VsZWN0ZWQgPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KFNlbGVjdGVkQ29udGV4dCk7XG59O1xuXG4vKipcclxuICogRWxlbWVudC5cclxuICovXG5cbnZhciBFbGVtZW50ID0gcHJvcHMgPT4ge1xuICB2YXIge1xuICAgIGRlY29yYXRpb25zLFxuICAgIGVsZW1lbnQsXG4gICAgcmVuZGVyRWxlbWVudCA9IHAgPT4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRGVmYXVsdEVsZW1lbnQsIE9iamVjdC5hc3NpZ24oe30sIHApKSxcbiAgICByZW5kZXJQbGFjZWhvbGRlcixcbiAgICByZW5kZXJMZWFmLFxuICAgIHNlbGVjdGlvblxuICB9ID0gcHJvcHM7XG4gIHZhciByZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBlZGl0b3IgPSB1c2VTbGF0ZVN0YXRpYygpO1xuICB2YXIgcmVhZE9ubHkgPSB1c2VSZWFkT25seSgpO1xuICB2YXIgaXNJbmxpbmUgPSBlZGl0b3IuaXNJbmxpbmUoZWxlbWVudCk7XG4gIHZhciBrZXkgPSBSZWFjdEVkaXRvci5maW5kS2V5KGVkaXRvciwgZWxlbWVudCk7XG4gIHZhciBjaGlsZHJlbiA9IHVzZUNoaWxkcmVuKHtcbiAgICBkZWNvcmF0aW9ucyxcbiAgICBub2RlOiBlbGVtZW50LFxuICAgIHJlbmRlckVsZW1lbnQsXG4gICAgcmVuZGVyUGxhY2Vob2xkZXIsXG4gICAgcmVuZGVyTGVhZixcbiAgICBzZWxlY3Rpb25cbiAgfSk7IC8vIEF0dHJpYnV0ZXMgdGhhdCB0aGUgZGV2ZWxvcGVyIG11c3QgbWl4IGludG8gdGhlIGVsZW1lbnQgaW4gdGhlaXJcbiAgLy8gY3VzdG9tIG5vZGUgcmVuZGVyZXIgY29tcG9uZW50LlxuXG4gIHZhciBhdHRyaWJ1dGVzID0ge1xuICAgICdkYXRhLXNsYXRlLW5vZGUnOiAnZWxlbWVudCcsXG4gICAgcmVmXG4gIH07XG5cbiAgaWYgKGlzSW5saW5lKSB7XG4gICAgYXR0cmlidXRlc1snZGF0YS1zbGF0ZS1pbmxpbmUnXSA9IHRydWU7XG4gIH0gLy8gSWYgaXQncyBhIGJsb2NrIG5vZGUgd2l0aCBpbmxpbmUgY2hpbGRyZW4sIGFkZCB0aGUgcHJvcGVyIGBkaXJgIGF0dHJpYnV0ZVxuICAvLyBmb3IgdGV4dCBkaXJlY3Rpb24uXG5cblxuICBpZiAoIWlzSW5saW5lICYmIEVkaXRvci5oYXNJbmxpbmVzKGVkaXRvciwgZWxlbWVudCkpIHtcbiAgICB2YXIgdGV4dCA9IE5vZGUuc3RyaW5nKGVsZW1lbnQpO1xuICAgIHZhciBkaXIgPSBnZXREaXJlY3Rpb24odGV4dCk7XG5cbiAgICBpZiAoZGlyID09PSAncnRsJykge1xuICAgICAgYXR0cmlidXRlcy5kaXIgPSBkaXI7XG4gICAgfVxuICB9IC8vIElmIGl0J3MgYSB2b2lkIG5vZGUsIHdyYXAgdGhlIGNoaWxkcmVuIGluIGV4dHJhIHZvaWQtc3BlY2lmaWMgZWxlbWVudHMuXG5cblxuICBpZiAoRWRpdG9yLmlzVm9pZChlZGl0b3IsIGVsZW1lbnQpKSB7XG4gICAgYXR0cmlidXRlc1snZGF0YS1zbGF0ZS12b2lkJ10gPSB0cnVlO1xuXG4gICAgaWYgKCFyZWFkT25seSAmJiBpc0lubGluZSkge1xuICAgICAgYXR0cmlidXRlcy5jb250ZW50RWRpdGFibGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgVGFnID0gaXNJbmxpbmUgPyAnc3BhbicgOiAnZGl2JztcbiAgICB2YXIgW1tfdGV4dF1dID0gTm9kZS50ZXh0cyhlbGVtZW50KTtcbiAgICBjaGlsZHJlbiA9IHJlYWRPbmx5ID8gbnVsbCA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRhZywge1xuICAgICAgXCJkYXRhLXNsYXRlLXNwYWNlclwiOiB0cnVlLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgaGVpZ2h0OiAnMCcsXG4gICAgICAgIGNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgICB9XG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWVtb2l6ZWRUZXh0LCB7XG4gICAgICByZW5kZXJQbGFjZWhvbGRlcjogcmVuZGVyUGxhY2Vob2xkZXIsXG4gICAgICBkZWNvcmF0aW9uczogW10sXG4gICAgICBpc0xhc3Q6IGZhbHNlLFxuICAgICAgcGFyZW50OiBlbGVtZW50LFxuICAgICAgdGV4dDogX3RleHRcbiAgICB9KSk7XG4gICAgTk9ERV9UT19JTkRFWC5zZXQoX3RleHQsIDApO1xuICAgIE5PREVfVE9fUEFSRU5ULnNldChfdGV4dCwgZWxlbWVudCk7XG4gIH0gLy8gVXBkYXRlIGVsZW1lbnQtcmVsYXRlZCB3ZWFrIG1hcHMgd2l0aCB0aGUgRE9NIGVsZW1lbnQgcmVmLlxuXG5cbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlZi5jdXJyZW50KSB7XG4gICAgICBLRVlfVE9fRUxFTUVOVC5zZXQoa2V5LCByZWYuY3VycmVudCk7XG4gICAgICBOT0RFX1RPX0VMRU1FTlQuc2V0KGVsZW1lbnQsIHJlZi5jdXJyZW50KTtcbiAgICAgIEVMRU1FTlRfVE9fTk9ERS5zZXQocmVmLmN1cnJlbnQsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBLRVlfVE9fRUxFTUVOVC5kZWxldGUoa2V5KTtcbiAgICAgIE5PREVfVE9fRUxFTUVOVC5kZWxldGUoZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdGVkQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiAhIXNlbGVjdGlvblxuICB9LCByZW5kZXJFbGVtZW50KHtcbiAgICBhdHRyaWJ1dGVzLFxuICAgIGNoaWxkcmVuLFxuICAgIGVsZW1lbnRcbiAgfSkpO1xufTtcblxudmFyIE1lbW9pemVkRWxlbWVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5tZW1vKEVsZW1lbnQsIChwcmV2LCBuZXh0KSA9PiB7XG4gIHJldHVybiBwcmV2LmVsZW1lbnQgPT09IG5leHQuZWxlbWVudCAmJiBwcmV2LnJlbmRlckVsZW1lbnQgPT09IG5leHQucmVuZGVyRWxlbWVudCAmJiBwcmV2LnJlbmRlckxlYWYgPT09IG5leHQucmVuZGVyTGVhZiAmJiBpc0RlY29yYXRvclJhbmdlTGlzdEVxdWFsKHByZXYuZGVjb3JhdGlvbnMsIG5leHQuZGVjb3JhdGlvbnMpICYmIChwcmV2LnNlbGVjdGlvbiA9PT0gbmV4dC5zZWxlY3Rpb24gfHwgISFwcmV2LnNlbGVjdGlvbiAmJiAhIW5leHQuc2VsZWN0aW9uICYmIFJhbmdlLmVxdWFscyhwcmV2LnNlbGVjdGlvbiwgbmV4dC5zZWxlY3Rpb24pKTtcbn0pO1xuLyoqXHJcbiAqIFRoZSBkZWZhdWx0IGVsZW1lbnQgcmVuZGVyZXIuXHJcbiAqL1xuXG52YXIgRGVmYXVsdEVsZW1lbnQgPSBwcm9wcyA9PiB7XG4gIHZhciB7XG4gICAgYXR0cmlidXRlcyxcbiAgICBjaGlsZHJlbixcbiAgICBlbGVtZW50XG4gIH0gPSBwcm9wcztcbiAgdmFyIGVkaXRvciA9IHVzZVNsYXRlU3RhdGljKCk7XG4gIHZhciBUYWcgPSBlZGl0b3IuaXNJbmxpbmUoZWxlbWVudCkgPyAnc3BhbicgOiAnZGl2JztcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRhZywgT2JqZWN0LmFzc2lnbih7fSwgYXR0cmlidXRlcywge1xuICAgIHN0eWxlOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgIH1cbiAgfSksIGNoaWxkcmVuKTtcbn07XG5cbi8qKlxyXG4gKiBBIFJlYWN0IGNvbnRleHQgZm9yIHNoYXJpbmcgdGhlIGVkaXRvciBvYmplY3QuXHJcbiAqL1xuXG52YXIgRWRpdG9yQ29udGV4dCA9IC8qI19fUFVSRV9fKi9jcmVhdGVDb250ZXh0KG51bGwpO1xuLyoqXHJcbiAqIEdldCB0aGUgY3VycmVudCBlZGl0b3Igb2JqZWN0IGZyb20gdGhlIFJlYWN0IGNvbnRleHQuXHJcbiAqL1xuXG52YXIgdXNlU2xhdGVTdGF0aWMgPSAoKSA9PiB7XG4gIHZhciBlZGl0b3IgPSB1c2VDb250ZXh0KEVkaXRvckNvbnRleHQpO1xuXG4gIGlmICghZWRpdG9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGB1c2VTbGF0ZVN0YXRpY2AgaG9vayBtdXN0IGJlIHVzZWQgaW5zaWRlIHRoZSA8U2xhdGU+IGNvbXBvbmVudCdzIGNvbnRleHQuXCIpO1xuICB9XG5cbiAgcmV0dXJuIGVkaXRvcjtcbn07XG5cbi8qKlxyXG4gKiBBIFJlYWN0IGNvbnRleHQgZm9yIHNoYXJpbmcgdGhlIGBkZWNvcmF0ZWAgcHJvcCBvZiB0aGUgZWRpdGFibGUuXHJcbiAqL1xuXG52YXIgRGVjb3JhdGVDb250ZXh0ID0gLyojX19QVVJFX18qL2NyZWF0ZUNvbnRleHQoKCkgPT4gW10pO1xuLyoqXHJcbiAqIEdldCB0aGUgY3VycmVudCBgZGVjb3JhdGVgIHByb3Agb2YgdGhlIGVkaXRhYmxlLlxyXG4gKi9cblxudmFyIHVzZURlY29yYXRlID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChEZWNvcmF0ZUNvbnRleHQpO1xufTtcblxuLyoqXHJcbiAqIENoaWxkcmVuLlxyXG4gKi9cblxudmFyIHVzZUNoaWxkcmVuID0gcHJvcHMgPT4ge1xuICB2YXIge1xuICAgIGRlY29yYXRpb25zLFxuICAgIG5vZGUsXG4gICAgcmVuZGVyRWxlbWVudCxcbiAgICByZW5kZXJQbGFjZWhvbGRlcixcbiAgICByZW5kZXJMZWFmLFxuICAgIHNlbGVjdGlvblxuICB9ID0gcHJvcHM7XG4gIHZhciBkZWNvcmF0ZSA9IHVzZURlY29yYXRlKCk7XG4gIHZhciBlZGl0b3IgPSB1c2VTbGF0ZVN0YXRpYygpO1xuICB2YXIgcGF0aCA9IFJlYWN0RWRpdG9yLmZpbmRQYXRoKGVkaXRvciwgbm9kZSk7XG4gIHZhciBjaGlsZHJlbiA9IFtdO1xuICB2YXIgaXNMZWFmQmxvY2sgPSBFbGVtZW50JDEuaXNFbGVtZW50KG5vZGUpICYmICFlZGl0b3IuaXNJbmxpbmUobm9kZSkgJiYgRWRpdG9yLmhhc0lubGluZXMoZWRpdG9yLCBub2RlKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcCA9IHBhdGguY29uY2F0KGkpO1xuICAgIHZhciBuID0gbm9kZS5jaGlsZHJlbltpXTtcbiAgICB2YXIga2V5ID0gUmVhY3RFZGl0b3IuZmluZEtleShlZGl0b3IsIG4pO1xuICAgIHZhciByYW5nZSA9IEVkaXRvci5yYW5nZShlZGl0b3IsIHApO1xuICAgIHZhciBzZWwgPSBzZWxlY3Rpb24gJiYgUmFuZ2UuaW50ZXJzZWN0aW9uKHJhbmdlLCBzZWxlY3Rpb24pO1xuICAgIHZhciBkcyA9IGRlY29yYXRlKFtuLCBwXSk7XG5cbiAgICBmb3IgKHZhciBkZWMgb2YgZGVjb3JhdGlvbnMpIHtcbiAgICAgIHZhciBkID0gUmFuZ2UuaW50ZXJzZWN0aW9uKGRlYywgcmFuZ2UpO1xuXG4gICAgICBpZiAoZCkge1xuICAgICAgICBkcy5wdXNoKGQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChFbGVtZW50JDEuaXNFbGVtZW50KG4pKSB7XG4gICAgICBjaGlsZHJlbi5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNZW1vaXplZEVsZW1lbnQsIHtcbiAgICAgICAgZGVjb3JhdGlvbnM6IGRzLFxuICAgICAgICBlbGVtZW50OiBuLFxuICAgICAgICBrZXk6IGtleS5pZCxcbiAgICAgICAgcmVuZGVyRWxlbWVudDogcmVuZGVyRWxlbWVudCxcbiAgICAgICAgcmVuZGVyUGxhY2Vob2xkZXI6IHJlbmRlclBsYWNlaG9sZGVyLFxuICAgICAgICByZW5kZXJMZWFmOiByZW5kZXJMZWFmLFxuICAgICAgICBzZWxlY3Rpb246IHNlbFxuICAgICAgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZHJlbi5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNZW1vaXplZFRleHQsIHtcbiAgICAgICAgZGVjb3JhdGlvbnM6IGRzLFxuICAgICAgICBrZXk6IGtleS5pZCxcbiAgICAgICAgaXNMYXN0OiBpc0xlYWZCbG9jayAmJiBpID09PSBub2RlLmNoaWxkcmVuLmxlbmd0aCAtIDEsXG4gICAgICAgIHBhcmVudDogbm9kZSxcbiAgICAgICAgcmVuZGVyUGxhY2Vob2xkZXI6IHJlbmRlclBsYWNlaG9sZGVyLFxuICAgICAgICByZW5kZXJMZWFmOiByZW5kZXJMZWFmLFxuICAgICAgICB0ZXh0OiBuXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgTk9ERV9UT19JTkRFWC5zZXQobiwgaSk7XG4gICAgTk9ERV9UT19QQVJFTlQuc2V0KG4sIG5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufTtcblxuLyoqXHJcbiAqIEhvdGtleSBtYXBwaW5ncyBmb3IgZWFjaCBwbGF0Zm9ybS5cclxuICovXG5cbnZhciBIT1RLRVlTID0ge1xuICBib2xkOiAnbW9kK2InLFxuICBjb21wb3NlOiBbJ2Rvd24nLCAnbGVmdCcsICdyaWdodCcsICd1cCcsICdiYWNrc3BhY2UnLCAnZW50ZXInXSxcbiAgbW92ZUJhY2t3YXJkOiAnbGVmdCcsXG4gIG1vdmVGb3J3YXJkOiAncmlnaHQnLFxuICBtb3ZlV29yZEJhY2t3YXJkOiAnY3RybCtsZWZ0JyxcbiAgbW92ZVdvcmRGb3J3YXJkOiAnY3RybCtyaWdodCcsXG4gIGRlbGV0ZUJhY2t3YXJkOiAnc2hpZnQ/K2JhY2tzcGFjZScsXG4gIGRlbGV0ZUZvcndhcmQ6ICdzaGlmdD8rZGVsZXRlJyxcbiAgZXh0ZW5kQmFja3dhcmQ6ICdzaGlmdCtsZWZ0JyxcbiAgZXh0ZW5kRm9yd2FyZDogJ3NoaWZ0K3JpZ2h0JyxcbiAgaXRhbGljOiAnbW9kK2knLFxuICBzcGxpdEJsb2NrOiAnc2hpZnQ/K2VudGVyJyxcbiAgdW5kbzogJ21vZCt6J1xufTtcbnZhciBBUFBMRV9IT1RLRVlTID0ge1xuICBtb3ZlTGluZUJhY2t3YXJkOiAnb3B0K3VwJyxcbiAgbW92ZUxpbmVGb3J3YXJkOiAnb3B0K2Rvd24nLFxuICBtb3ZlV29yZEJhY2t3YXJkOiAnb3B0K2xlZnQnLFxuICBtb3ZlV29yZEZvcndhcmQ6ICdvcHQrcmlnaHQnLFxuICBkZWxldGVCYWNrd2FyZDogWydjdHJsK2JhY2tzcGFjZScsICdjdHJsK2gnXSxcbiAgZGVsZXRlRm9yd2FyZDogWydjdHJsK2RlbGV0ZScsICdjdHJsK2QnXSxcbiAgZGVsZXRlTGluZUJhY2t3YXJkOiAnY21kK3NoaWZ0PytiYWNrc3BhY2UnLFxuICBkZWxldGVMaW5lRm9yd2FyZDogWydjbWQrc2hpZnQ/K2RlbGV0ZScsICdjdHJsK2snXSxcbiAgZGVsZXRlV29yZEJhY2t3YXJkOiAnb3B0K3NoaWZ0PytiYWNrc3BhY2UnLFxuICBkZWxldGVXb3JkRm9yd2FyZDogJ29wdCtzaGlmdD8rZGVsZXRlJyxcbiAgZXh0ZW5kTGluZUJhY2t3YXJkOiAnb3B0K3NoaWZ0K3VwJyxcbiAgZXh0ZW5kTGluZUZvcndhcmQ6ICdvcHQrc2hpZnQrZG93bicsXG4gIHJlZG86ICdjbWQrc2hpZnQreicsXG4gIHRyYW5zcG9zZUNoYXJhY3RlcjogJ2N0cmwrdCdcbn07XG52YXIgV0lORE9XU19IT1RLRVlTID0ge1xuICBkZWxldGVXb3JkQmFja3dhcmQ6ICdjdHJsK3NoaWZ0PytiYWNrc3BhY2UnLFxuICBkZWxldGVXb3JkRm9yd2FyZDogJ2N0cmwrc2hpZnQ/K2RlbGV0ZScsXG4gIHJlZG86IFsnY3RybCt5JywgJ2N0cmwrc2hpZnQreiddXG59O1xuLyoqXHJcbiAqIENyZWF0ZSBhIHBsYXRmb3JtLWF3YXJlIGhvdGtleSBjaGVja2VyLlxyXG4gKi9cblxudmFyIGNyZWF0ZSA9IGtleSA9PiB7XG4gIHZhciBnZW5lcmljID0gSE9US0VZU1trZXldO1xuICB2YXIgYXBwbGUgPSBBUFBMRV9IT1RLRVlTW2tleV07XG4gIHZhciB3aW5kb3dzID0gV0lORE9XU19IT1RLRVlTW2tleV07XG4gIHZhciBpc0dlbmVyaWMgPSBnZW5lcmljICYmIGlzS2V5SG90a2V5KGdlbmVyaWMpO1xuICB2YXIgaXNBcHBsZSA9IGFwcGxlICYmIGlzS2V5SG90a2V5KGFwcGxlKTtcbiAgdmFyIGlzV2luZG93cyA9IHdpbmRvd3MgJiYgaXNLZXlIb3RrZXkod2luZG93cyk7XG4gIHJldHVybiBldmVudCA9PiB7XG4gICAgaWYgKGlzR2VuZXJpYyAmJiBpc0dlbmVyaWMoZXZlbnQpKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoSVNfQVBQTEUgJiYgaXNBcHBsZSAmJiBpc0FwcGxlKGV2ZW50KSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKCFJU19BUFBMRSAmJiBpc1dpbmRvd3MgJiYgaXNXaW5kb3dzKGV2ZW50KSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xufTtcbi8qKlxyXG4gKiBIb3RrZXlzLlxyXG4gKi9cblxuXG52YXIgSG90a2V5cyA9IHtcbiAgaXNCb2xkOiBjcmVhdGUoJ2JvbGQnKSxcbiAgaXNDb21wb3NlOiBjcmVhdGUoJ2NvbXBvc2UnKSxcbiAgaXNNb3ZlQmFja3dhcmQ6IGNyZWF0ZSgnbW92ZUJhY2t3YXJkJyksXG4gIGlzTW92ZUZvcndhcmQ6IGNyZWF0ZSgnbW92ZUZvcndhcmQnKSxcbiAgaXNEZWxldGVCYWNrd2FyZDogY3JlYXRlKCdkZWxldGVCYWNrd2FyZCcpLFxuICBpc0RlbGV0ZUZvcndhcmQ6IGNyZWF0ZSgnZGVsZXRlRm9yd2FyZCcpLFxuICBpc0RlbGV0ZUxpbmVCYWNrd2FyZDogY3JlYXRlKCdkZWxldGVMaW5lQmFja3dhcmQnKSxcbiAgaXNEZWxldGVMaW5lRm9yd2FyZDogY3JlYXRlKCdkZWxldGVMaW5lRm9yd2FyZCcpLFxuICBpc0RlbGV0ZVdvcmRCYWNrd2FyZDogY3JlYXRlKCdkZWxldGVXb3JkQmFja3dhcmQnKSxcbiAgaXNEZWxldGVXb3JkRm9yd2FyZDogY3JlYXRlKCdkZWxldGVXb3JkRm9yd2FyZCcpLFxuICBpc0V4dGVuZEJhY2t3YXJkOiBjcmVhdGUoJ2V4dGVuZEJhY2t3YXJkJyksXG4gIGlzRXh0ZW5kRm9yd2FyZDogY3JlYXRlKCdleHRlbmRGb3J3YXJkJyksXG4gIGlzRXh0ZW5kTGluZUJhY2t3YXJkOiBjcmVhdGUoJ2V4dGVuZExpbmVCYWNrd2FyZCcpLFxuICBpc0V4dGVuZExpbmVGb3J3YXJkOiBjcmVhdGUoJ2V4dGVuZExpbmVGb3J3YXJkJyksXG4gIGlzSXRhbGljOiBjcmVhdGUoJ2l0YWxpYycpLFxuICBpc01vdmVMaW5lQmFja3dhcmQ6IGNyZWF0ZSgnbW92ZUxpbmVCYWNrd2FyZCcpLFxuICBpc01vdmVMaW5lRm9yd2FyZDogY3JlYXRlKCdtb3ZlTGluZUZvcndhcmQnKSxcbiAgaXNNb3ZlV29yZEJhY2t3YXJkOiBjcmVhdGUoJ21vdmVXb3JkQmFja3dhcmQnKSxcbiAgaXNNb3ZlV29yZEZvcndhcmQ6IGNyZWF0ZSgnbW92ZVdvcmRGb3J3YXJkJyksXG4gIGlzUmVkbzogY3JlYXRlKCdyZWRvJyksXG4gIGlzU3BsaXRCbG9jazogY3JlYXRlKCdzcGxpdEJsb2NrJyksXG4gIGlzVHJhbnNwb3NlQ2hhcmFjdGVyOiBjcmVhdGUoJ3RyYW5zcG9zZUNoYXJhY3RlcicpLFxuICBpc1VuZG86IGNyZWF0ZSgndW5kbycpXG59O1xuXG4vKipcclxuICogQSBSZWFjdCBjb250ZXh0IGZvciBzaGFyaW5nIHRoZSBgcmVhZE9ubHlgIHN0YXRlIG9mIHRoZSBlZGl0b3IuXHJcbiAqL1xuXG52YXIgUmVhZE9ubHlDb250ZXh0ID0gLyojX19QVVJFX18qL2NyZWF0ZUNvbnRleHQoZmFsc2UpO1xuLyoqXHJcbiAqIEdldCB0aGUgY3VycmVudCBgcmVhZE9ubHlgIHN0YXRlIG9mIHRoZSBlZGl0b3IuXHJcbiAqL1xuXG52YXIgdXNlUmVhZE9ubHkgPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KFJlYWRPbmx5Q29udGV4dCk7XG59O1xuXG4vKipcclxuICogQSBSZWFjdCBjb250ZXh0IGZvciBzaGFyaW5nIHRoZSBlZGl0b3Igb2JqZWN0LCBpbiBhIHdheSB0aGF0IHJlLXJlbmRlcnMgdGhlXHJcbiAqIGNvbnRleHQgd2hlbmV2ZXIgY2hhbmdlcyBvY2N1ci5cclxuICovXG5cbnZhciBTbGF0ZUNvbnRleHQgPSAvKiNfX1BVUkVfXyovY3JlYXRlQ29udGV4dChudWxsKTtcbi8qKlxyXG4gKiBHZXQgdGhlIGN1cnJlbnQgZWRpdG9yIG9iamVjdCBmcm9tIHRoZSBSZWFjdCBjb250ZXh0LlxyXG4gKi9cblxudmFyIHVzZVNsYXRlID0gKCkgPT4ge1xuICB2YXIgY29udGV4dCA9IHVzZUNvbnRleHQoU2xhdGVDb250ZXh0KTtcblxuICBpZiAoIWNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgYHVzZVNsYXRlYCBob29rIG11c3QgYmUgdXNlZCBpbnNpZGUgdGhlIDxTbGF0ZVByb3ZpZGVyPiBjb21wb25lbnQncyBjb250ZXh0LlwiKTtcbiAgfVxuXG4gIHZhciBbZWRpdG9yXSA9IGNvbnRleHQ7XG4gIHJldHVybiBlZGl0b3I7XG59O1xuXG4vKipcclxuICogVHlwZXMuXHJcbiAqL1xuLyoqXHJcbiAqIFJldHVybnMgdGhlIGhvc3Qgd2luZG93IG9mIGEgRE9NIG5vZGVcclxuICovXG5cbnZhciBnZXREZWZhdWx0VmlldyA9IHZhbHVlID0+IHtcbiAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLm93bmVyRG9jdW1lbnQgJiYgdmFsdWUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCBudWxsO1xufTtcbi8qKlxyXG4gKiBDaGVjayBpZiBhIERPTSBub2RlIGlzIGEgY29tbWVudCBub2RlLlxyXG4gKi9cblxudmFyIGlzRE9NQ29tbWVudCA9IHZhbHVlID0+IHtcbiAgcmV0dXJuIGlzRE9NTm9kZSh2YWx1ZSkgJiYgdmFsdWUubm9kZVR5cGUgPT09IDg7XG59O1xuLyoqXHJcbiAqIENoZWNrIGlmIGEgRE9NIG5vZGUgaXMgYW4gZWxlbWVudCBub2RlLlxyXG4gKi9cblxudmFyIGlzRE9NRWxlbWVudCA9IHZhbHVlID0+IHtcbiAgcmV0dXJuIGlzRE9NTm9kZSh2YWx1ZSkgJiYgdmFsdWUubm9kZVR5cGUgPT09IDE7XG59O1xuLyoqXHJcbiAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYSBET00gbm9kZS5cclxuICovXG5cbnZhciBpc0RPTU5vZGUgPSB2YWx1ZSA9PiB7XG4gIHZhciB3aW5kb3cgPSBnZXREZWZhdWx0Vmlldyh2YWx1ZSk7XG4gIHJldHVybiAhIXdpbmRvdyAmJiB2YWx1ZSBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlO1xufTtcbi8qKlxyXG4gKiBDaGVjayBpZiBhIHZhbHVlIGlzIGEgRE9NIHNlbGVjdGlvbi5cclxuICovXG5cbnZhciBpc0RPTVNlbGVjdGlvbiA9IHZhbHVlID0+IHtcbiAgdmFyIHdpbmRvdyA9IHZhbHVlICYmIHZhbHVlLmFuY2hvck5vZGUgJiYgZ2V0RGVmYXVsdFZpZXcodmFsdWUuYW5jaG9yTm9kZSk7XG4gIHJldHVybiAhIXdpbmRvdyAmJiB2YWx1ZSBpbnN0YW5jZW9mIHdpbmRvdy5TZWxlY3Rpb247XG59O1xuLyoqXHJcbiAqIENoZWNrIGlmIGEgRE9NIG5vZGUgaXMgYW4gZWxlbWVudCBub2RlLlxyXG4gKi9cblxudmFyIGlzRE9NVGV4dCA9IHZhbHVlID0+IHtcbiAgcmV0dXJuIGlzRE9NTm9kZSh2YWx1ZSkgJiYgdmFsdWUubm9kZVR5cGUgPT09IDM7XG59O1xuLyoqXHJcbiAqIENoZWNrcyB3aGV0aGVyIGEgcGFzdGUgZXZlbnQgaXMgYSBwbGFpbnRleHQtb25seSBldmVudC5cclxuICovXG5cbnZhciBpc1BsYWluVGV4dE9ubHlQYXN0ZSA9IGV2ZW50ID0+IHtcbiAgcmV0dXJuIGV2ZW50LmNsaXBib2FyZERhdGEgJiYgZXZlbnQuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCd0ZXh0L3BsYWluJykgIT09ICcnICYmIGV2ZW50LmNsaXBib2FyZERhdGEudHlwZXMubGVuZ3RoID09PSAxO1xufTtcbi8qKlxyXG4gKiBOb3JtYWxpemUgYSBET00gcG9pbnQgc28gdGhhdCBpdCBhbHdheXMgcmVmZXJzIHRvIGEgdGV4dCBub2RlLlxyXG4gKi9cblxudmFyIG5vcm1hbGl6ZURPTVBvaW50ID0gZG9tUG9pbnQgPT4ge1xuICB2YXIgW25vZGUsIG9mZnNldF0gPSBkb21Qb2ludDsgLy8gSWYgaXQncyBhbiBlbGVtZW50IG5vZGUsIGl0cyBvZmZzZXQgcmVmZXJzIHRvIHRoZSBpbmRleCBvZiBpdHMgY2hpbGRyZW5cbiAgLy8gaW5jbHVkaW5nIGNvbW1lbnQgbm9kZXMsIHNvIHRyeSB0byBmaW5kIHRoZSByaWdodCB0ZXh0IGNoaWxkIG5vZGUuXG5cbiAgaWYgKGlzRE9NRWxlbWVudChub2RlKSAmJiBub2RlLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgdmFyIGlzTGFzdCA9IG9mZnNldCA9PT0gbm9kZS5jaGlsZE5vZGVzLmxlbmd0aDtcbiAgICB2YXIgaW5kZXggPSBpc0xhc3QgPyBvZmZzZXQgLSAxIDogb2Zmc2V0O1xuICAgIFtub2RlLCBpbmRleF0gPSBnZXRFZGl0YWJsZUNoaWxkQW5kSW5kZXgobm9kZSwgaW5kZXgsIGlzTGFzdCA/ICdiYWNrd2FyZCcgOiAnZm9yd2FyZCcpOyAvLyBJZiB0aGUgZWRpdGFibGUgY2hpbGQgZm91bmQgaXMgaW4gZnJvbnQgb2YgaW5wdXQgb2Zmc2V0LCB3ZSBpbnN0ZWFkIHNlZWsgdG8gaXRzIGVuZFxuXG4gICAgaXNMYXN0ID0gaW5kZXggPCBvZmZzZXQ7IC8vIElmIHRoZSBub2RlIGhhcyBjaGlsZHJlbiwgdHJhdmVyc2UgdW50aWwgd2UgaGF2ZSBhIGxlYWYgbm9kZS4gTGVhZiBub2Rlc1xuICAgIC8vIGNhbiBiZSBlaXRoZXIgdGV4dCBub2Rlcywgb3Igb3RoZXIgdm9pZCBET00gbm9kZXMuXG5cbiAgICB3aGlsZSAoaXNET01FbGVtZW50KG5vZGUpICYmIG5vZGUuY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHZhciBpID0gaXNMYXN0ID8gbm9kZS5jaGlsZE5vZGVzLmxlbmd0aCAtIDEgOiAwO1xuICAgICAgbm9kZSA9IGdldEVkaXRhYmxlQ2hpbGQobm9kZSwgaSwgaXNMYXN0ID8gJ2JhY2t3YXJkJyA6ICdmb3J3YXJkJyk7XG4gICAgfSAvLyBEZXRlcm1pbmUgdGhlIG5ldyBvZmZzZXQgaW5zaWRlIHRoZSB0ZXh0IG5vZGUuXG5cblxuICAgIG9mZnNldCA9IGlzTGFzdCAmJiBub2RlLnRleHRDb250ZW50ICE9IG51bGwgPyBub2RlLnRleHRDb250ZW50Lmxlbmd0aCA6IDA7XG4gIH0gLy8gUmV0dXJuIHRoZSBub2RlIGFuZCBvZmZzZXQuXG5cblxuICByZXR1cm4gW25vZGUsIG9mZnNldF07XG59O1xuLyoqXHJcbiAqIERldGVybWluZXMgd2V0aGVyIHRoZSBhY3RpdmUgZWxlbWVudCBpcyBuZXN0ZWQgd2l0aGluIGEgc2hhZG93Um9vdFxyXG4gKi9cblxudmFyIGhhc1NoYWRvd1Jvb3QgPSAoKSA9PiB7XG4gIHJldHVybiAhISh3aW5kb3cuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5zaGFkb3dSb290KTtcbn07XG4vKipcclxuICogR2V0IHRoZSBuZWFyZXN0IGVkaXRhYmxlIGNoaWxkIGFuZCBpbmRleCBhdCBgaW5kZXhgIGluIGEgYHBhcmVudGAsIHByZWZlcnJpbmdcclxuICogYGRpcmVjdGlvbmAuXHJcbiAqL1xuXG52YXIgZ2V0RWRpdGFibGVDaGlsZEFuZEluZGV4ID0gKHBhcmVudCwgaW5kZXgsIGRpcmVjdGlvbikgPT4ge1xuICB2YXIge1xuICAgIGNoaWxkTm9kZXNcbiAgfSA9IHBhcmVudDtcbiAgdmFyIGNoaWxkID0gY2hpbGROb2Rlc1tpbmRleF07XG4gIHZhciBpID0gaW5kZXg7XG4gIHZhciB0cmllZEZvcndhcmQgPSBmYWxzZTtcbiAgdmFyIHRyaWVkQmFja3dhcmQgPSBmYWxzZTsgLy8gV2hpbGUgdGhlIGNoaWxkIGlzIGEgY29tbWVudCBub2RlLCBvciBhbiBlbGVtZW50IG5vZGUgd2l0aCBubyBjaGlsZHJlbixcbiAgLy8ga2VlcCBpdGVyYXRpbmcgdG8gZmluZCBhIHNpYmxpbmcgbm9uLXZvaWQsIG5vbi1jb21tZW50IG5vZGUuXG5cbiAgd2hpbGUgKGlzRE9NQ29tbWVudChjaGlsZCkgfHwgaXNET01FbGVtZW50KGNoaWxkKSAmJiBjaGlsZC5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCB8fCBpc0RPTUVsZW1lbnQoY2hpbGQpICYmIGNoaWxkLmdldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJykgPT09ICdmYWxzZScpIHtcbiAgICBpZiAodHJpZWRGb3J3YXJkICYmIHRyaWVkQmFja3dhcmQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChpID49IGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICB0cmllZEZvcndhcmQgPSB0cnVlO1xuICAgICAgaSA9IGluZGV4IC0gMTtcbiAgICAgIGRpcmVjdGlvbiA9ICdiYWNrd2FyZCc7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIHRyaWVkQmFja3dhcmQgPSB0cnVlO1xuICAgICAgaSA9IGluZGV4ICsgMTtcbiAgICAgIGRpcmVjdGlvbiA9ICdmb3J3YXJkJztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGNoaWxkID0gY2hpbGROb2Rlc1tpXTtcbiAgICBpbmRleCA9IGk7XG4gICAgaSArPSBkaXJlY3Rpb24gPT09ICdmb3J3YXJkJyA/IDEgOiAtMTtcbiAgfVxuXG4gIHJldHVybiBbY2hpbGQsIGluZGV4XTtcbn07XG4vKipcclxuICogR2V0IHRoZSBuZWFyZXN0IGVkaXRhYmxlIGNoaWxkIGF0IGBpbmRleGAgaW4gYSBgcGFyZW50YCwgcHJlZmVycmluZ1xyXG4gKiBgZGlyZWN0aW9uYC5cclxuICovXG5cbnZhciBnZXRFZGl0YWJsZUNoaWxkID0gKHBhcmVudCwgaW5kZXgsIGRpcmVjdGlvbikgPT4ge1xuICB2YXIgW2NoaWxkXSA9IGdldEVkaXRhYmxlQ2hpbGRBbmRJbmRleChwYXJlbnQsIGluZGV4LCBkaXJlY3Rpb24pO1xuICByZXR1cm4gY2hpbGQ7XG59O1xuLyoqXHJcbiAqIEdldCBhIHBsYWludGV4dCByZXByZXNlbnRhdGlvbiBvZiB0aGUgY29udGVudCBvZiBhIG5vZGUsIGFjY291bnRpbmcgZm9yIGJsb2NrXHJcbiAqIGVsZW1lbnRzIHdoaWNoIGdldCBhIG5ld2xpbmUgYXBwZW5kZWQuXHJcbiAqXHJcbiAqIFRoZSBkb21Ob2RlIG11c3QgYmUgYXR0YWNoZWQgdG8gdGhlIERPTS5cclxuICovXG5cbnZhciBnZXRQbGFpblRleHQgPSBkb21Ob2RlID0+IHtcbiAgdmFyIHRleHQgPSAnJztcblxuICBpZiAoaXNET01UZXh0KGRvbU5vZGUpICYmIGRvbU5vZGUubm9kZVZhbHVlKSB7XG4gICAgcmV0dXJuIGRvbU5vZGUubm9kZVZhbHVlO1xuICB9XG5cbiAgaWYgKGlzRE9NRWxlbWVudChkb21Ob2RlKSkge1xuICAgIGZvciAodmFyIGNoaWxkTm9kZSBvZiBBcnJheS5mcm9tKGRvbU5vZGUuY2hpbGROb2RlcykpIHtcbiAgICAgIHRleHQgKz0gZ2V0UGxhaW5UZXh0KGNoaWxkTm9kZSk7XG4gICAgfVxuXG4gICAgdmFyIGRpc3BsYXkgPSBnZXRDb21wdXRlZFN0eWxlKGRvbU5vZGUpLmdldFByb3BlcnR5VmFsdWUoJ2Rpc3BsYXknKTtcblxuICAgIGlmIChkaXNwbGF5ID09PSAnYmxvY2snIHx8IGRpc3BsYXkgPT09ICdsaXN0JyB8fCBkb21Ob2RlLnRhZ05hbWUgPT09ICdCUicpIHtcbiAgICAgIHRleHQgKz0gJ1xcbic7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRleHQ7XG59O1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIENoaWxkcmVuID0gcHJvcHMgPT4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIHVzZUNoaWxkcmVuKHByb3BzKSk7XG4vKipcclxuICogRWRpdGFibGUuXHJcbiAqL1xuXG5cbnZhciBFZGl0YWJsZSA9IHByb3BzID0+IHtcbiAgdmFyIHtcbiAgICBhdXRvRm9jdXMsXG4gICAgZGVjb3JhdGUgPSBkZWZhdWx0RGVjb3JhdGUsXG4gICAgb25ET01CZWZvcmVJbnB1dDogcHJvcHNPbkRPTUJlZm9yZUlucHV0LFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIHJlYWRPbmx5ID0gZmFsc2UsXG4gICAgcmVuZGVyRWxlbWVudCxcbiAgICByZW5kZXJMZWFmLFxuICAgIHJlbmRlclBsYWNlaG9sZGVyID0gcHJvcHMgPT4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRGVmYXVsdFBsYWNlaG9sZGVyLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpLFxuICAgIHNjcm9sbFNlbGVjdGlvbkludG9WaWV3ID0gZGVmYXVsdFNjcm9sbFNlbGVjdGlvbkludG9WaWV3LFxuICAgIHN0eWxlID0ge30sXG4gICAgYXM6IENvbXBvbmVudCA9ICdkaXYnXG4gIH0gPSBwcm9wcyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImF1dG9Gb2N1c1wiLCBcImRlY29yYXRlXCIsIFwib25ET01CZWZvcmVJbnB1dFwiLCBcInBsYWNlaG9sZGVyXCIsIFwicmVhZE9ubHlcIiwgXCJyZW5kZXJFbGVtZW50XCIsIFwicmVuZGVyTGVhZlwiLCBcInJlbmRlclBsYWNlaG9sZGVyXCIsIFwic2Nyb2xsU2VsZWN0aW9uSW50b1ZpZXdcIiwgXCJzdHlsZVwiLCBcImFzXCJdKTtcblxuICB2YXIgZWRpdG9yID0gdXNlU2xhdGUoKTsgLy8gUmVyZW5kZXIgZWRpdG9yIHdoZW4gY29tcG9zaXRpb24gc3RhdHVzIGNoYW5nZWRcblxuICB2YXIgW2lzQ29tcG9zaW5nLCBzZXRJc0NvbXBvc2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHZhciByZWYgPSB1c2VSZWYobnVsbCk7IC8vIFVwZGF0ZSBpbnRlcm5hbCBzdGF0ZSBvbiBlYWNoIHJlbmRlci5cblxuICBJU19SRUFEX09OTFkuc2V0KGVkaXRvciwgcmVhZE9ubHkpOyAvLyBLZWVwIHRyYWNrIG9mIHNvbWUgc3RhdGUgZm9yIHRoZSBldmVudCBoYW5kbGVyIGxvZ2ljLlxuXG4gIHZhciBzdGF0ZSA9IHVzZU1lbW8oKCkgPT4gKHtcbiAgICBpc0NvbXBvc2luZzogZmFsc2UsXG4gICAgaXNEcmFnZ2luZ0ludGVybmFsbHk6IGZhbHNlLFxuICAgIGlzVXBkYXRpbmdTZWxlY3Rpb246IGZhbHNlLFxuICAgIGxhdGVzdEVsZW1lbnQ6IG51bGxcbiAgfSksIFtdKTsgLy8gV2hlbmV2ZXIgdGhlIGVkaXRvciB1cGRhdGVzLi4uXG5cbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgLy8gVXBkYXRlIGVsZW1lbnQtcmVsYXRlZCB3ZWFrIG1hcHMgd2l0aCB0aGUgRE9NIGVsZW1lbnQgcmVmLlxuICAgIHZhciB3aW5kb3c7XG5cbiAgICBpZiAocmVmLmN1cnJlbnQgJiYgKHdpbmRvdyA9IGdldERlZmF1bHRWaWV3KHJlZi5jdXJyZW50KSkpIHtcbiAgICAgIEVESVRPUl9UT19XSU5ET1cuc2V0KGVkaXRvciwgd2luZG93KTtcbiAgICAgIEVESVRPUl9UT19FTEVNRU5ULnNldChlZGl0b3IsIHJlZi5jdXJyZW50KTtcbiAgICAgIE5PREVfVE9fRUxFTUVOVC5zZXQoZWRpdG9yLCByZWYuY3VycmVudCk7XG4gICAgICBFTEVNRU5UX1RPX05PREUuc2V0KHJlZi5jdXJyZW50LCBlZGl0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBOT0RFX1RPX0VMRU1FTlQuZGVsZXRlKGVkaXRvcik7XG4gICAgfSAvLyBNYWtlIHN1cmUgdGhlIERPTSBzZWxlY3Rpb24gc3RhdGUgaXMgaW4gc3luYy5cblxuXG4gICAgdmFyIHtcbiAgICAgIHNlbGVjdGlvblxuICAgIH0gPSBlZGl0b3I7XG4gICAgdmFyIHJvb3QgPSBSZWFjdEVkaXRvci5maW5kRG9jdW1lbnRPclNoYWRvd1Jvb3QoZWRpdG9yKTtcbiAgICB2YXIgZG9tU2VsZWN0aW9uID0gcm9vdC5nZXRTZWxlY3Rpb24oKTtcblxuICAgIGlmIChzdGF0ZS5pc0NvbXBvc2luZyB8fCAhZG9tU2VsZWN0aW9uIHx8ICFSZWFjdEVkaXRvci5pc0ZvY3VzZWQoZWRpdG9yKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBoYXNEb21TZWxlY3Rpb24gPSBkb21TZWxlY3Rpb24udHlwZSAhPT0gJ05vbmUnOyAvLyBJZiB0aGUgRE9NIHNlbGVjdGlvbiBpcyBwcm9wZXJseSB1bnNldCwgd2UncmUgZG9uZS5cblxuICAgIGlmICghc2VsZWN0aW9uICYmICFoYXNEb21TZWxlY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIHZlcmlmeSB0aGF0IHRoZSBkb20gc2VsZWN0aW9uIGlzIGluIHRoZSBlZGl0b3JcblxuXG4gICAgdmFyIGVkaXRvckVsZW1lbnQgPSBFRElUT1JfVE9fRUxFTUVOVC5nZXQoZWRpdG9yKTtcbiAgICB2YXIgaGFzRG9tU2VsZWN0aW9uSW5FZGl0b3IgPSBmYWxzZTtcblxuICAgIGlmIChlZGl0b3JFbGVtZW50LmNvbnRhaW5zKGRvbVNlbGVjdGlvbi5hbmNob3JOb2RlKSAmJiBlZGl0b3JFbGVtZW50LmNvbnRhaW5zKGRvbVNlbGVjdGlvbi5mb2N1c05vZGUpKSB7XG4gICAgICBoYXNEb21TZWxlY3Rpb25JbkVkaXRvciA9IHRydWU7XG4gICAgfSAvLyBJZiB0aGUgRE9NIHNlbGVjdGlvbiBpcyBpbiB0aGUgZWRpdG9yIGFuZCB0aGUgZWRpdG9yIHNlbGVjdGlvbiBpcyBhbHJlYWR5IGNvcnJlY3QsIHdlJ3JlIGRvbmUuXG5cblxuICAgIGlmIChoYXNEb21TZWxlY3Rpb24gJiYgaGFzRG9tU2VsZWN0aW9uSW5FZGl0b3IgJiYgc2VsZWN0aW9uKSB7XG4gICAgICB2YXIgc2xhdGVSYW5nZSA9IFJlYWN0RWRpdG9yLnRvU2xhdGVSYW5nZShlZGl0b3IsIGRvbVNlbGVjdGlvbiwge1xuICAgICAgICBleGFjdE1hdGNoOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgaWYgKHNsYXRlUmFuZ2UgJiYgUmFuZ2UuZXF1YWxzKHNsYXRlUmFuZ2UsIHNlbGVjdGlvbikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gLy8gd2hlbiA8RWRpdGFibGUvPiBpcyBiZWluZyBjb250cm9sbGVkIHRocm91Z2ggZXh0ZXJuYWwgdmFsdWVcbiAgICAvLyB0aGVuIGl0cyBjaGlsZHJlbiBtaWdodCBqdXN0IGNoYW5nZSAtIERPTSByZXNwb25kcyB0byBpdCBvbiBpdHMgb3duXG4gICAgLy8gYnV0IFNsYXRlJ3MgdmFsdWUgaXMgbm90IGJlaW5nIHVwZGF0ZWQgdGhyb3VnaCBhbnkgb3BlcmF0aW9uXG4gICAgLy8gYW5kIHRodXMgaXQgZG9lc24ndCB0cmFuc2Zvcm0gc2VsZWN0aW9uIG9uIGl0cyBvd25cblxuXG4gICAgaWYgKHNlbGVjdGlvbiAmJiAhUmVhY3RFZGl0b3IuaGFzUmFuZ2UoZWRpdG9yLCBzZWxlY3Rpb24pKSB7XG4gICAgICBlZGl0b3Iuc2VsZWN0aW9uID0gUmVhY3RFZGl0b3IudG9TbGF0ZVJhbmdlKGVkaXRvciwgZG9tU2VsZWN0aW9uLCB7XG4gICAgICAgIGV4YWN0TWF0Y2g6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIE90aGVyd2lzZSB0aGUgRE9NIHNlbGVjdGlvbiBpcyBvdXQgb2Ygc3luYywgc28gdXBkYXRlIGl0LlxuXG5cbiAgICBzdGF0ZS5pc1VwZGF0aW5nU2VsZWN0aW9uID0gdHJ1ZTtcbiAgICB2YXIgbmV3RG9tUmFuZ2UgPSBzZWxlY3Rpb24gJiYgUmVhY3RFZGl0b3IudG9ET01SYW5nZShlZGl0b3IsIHNlbGVjdGlvbik7XG5cbiAgICBpZiAobmV3RG9tUmFuZ2UpIHtcbiAgICAgIGlmIChSYW5nZS5pc0JhY2t3YXJkKHNlbGVjdGlvbikpIHtcbiAgICAgICAgZG9tU2VsZWN0aW9uLnNldEJhc2VBbmRFeHRlbnQobmV3RG9tUmFuZ2UuZW5kQ29udGFpbmVyLCBuZXdEb21SYW5nZS5lbmRPZmZzZXQsIG5ld0RvbVJhbmdlLnN0YXJ0Q29udGFpbmVyLCBuZXdEb21SYW5nZS5zdGFydE9mZnNldCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb21TZWxlY3Rpb24uc2V0QmFzZUFuZEV4dGVudChuZXdEb21SYW5nZS5zdGFydENvbnRhaW5lciwgbmV3RG9tUmFuZ2Uuc3RhcnRPZmZzZXQsIG5ld0RvbVJhbmdlLmVuZENvbnRhaW5lciwgbmV3RG9tUmFuZ2UuZW5kT2Zmc2V0KTtcbiAgICAgIH1cblxuICAgICAgc2Nyb2xsU2VsZWN0aW9uSW50b1ZpZXcoZWRpdG9yLCBuZXdEb21SYW5nZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbVNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIENPTVBBVDogSW4gRmlyZWZveCwgaXQncyBub3QgZW5vdWdoIHRvIGNyZWF0ZSBhIHJhbmdlLCB5b3UgYWxzbyBuZWVkXG4gICAgICAvLyB0byBmb2N1cyB0aGUgY29udGVudGVkaXRhYmxlIGVsZW1lbnQgdG9vLiAoMjAxNi8xMS8xNilcbiAgICAgIGlmIChuZXdEb21SYW5nZSAmJiBJU19GSVJFRk9YKSB7XG4gICAgICAgIHZhciBlbCA9IFJlYWN0RWRpdG9yLnRvRE9NTm9kZShlZGl0b3IsIGVkaXRvcik7XG4gICAgICAgIGVsLmZvY3VzKCk7XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLmlzVXBkYXRpbmdTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICB9KTtcbiAgfSk7IC8vIFRoZSBhdXRvRm9jdXMgVGV4dGFyZWFIVE1MQXR0cmlidXRlIGRvZXNuJ3QgZG8gYW55dGhpbmcgb24gYSBkaXYsIHNvIGl0XG4gIC8vIG5lZWRzIHRvIGJlIG1hbnVhbGx5IGZvY3VzZWQuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmVmLmN1cnJlbnQgJiYgYXV0b0ZvY3VzKSB7XG4gICAgICByZWYuY3VycmVudC5mb2N1cygpO1xuICAgIH1cbiAgfSwgW2F1dG9Gb2N1c10pOyAvLyBMaXN0ZW4gb24gdGhlIG5hdGl2ZSBgYmVmb3JlaW5wdXRgIGV2ZW50IHRvIGdldCByZWFsIFwiTGV2ZWwgMlwiIGV2ZW50cy4gVGhpc1xuICAvLyBpcyByZXF1aXJlZCBiZWNhdXNlIFJlYWN0J3MgYGJlZm9yZWlucHV0YCBpcyBmYWtlIGFuZCBuZXZlciByZWFsbHkgYXR0YWNoZXNcbiAgLy8gdG8gdGhlIHJlYWwgZXZlbnQgc2FkbHkuICgyMDE5LzExLzAxKVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzExMjExXG5cbiAgdmFyIG9uRE9NQmVmb3JlSW5wdXQgPSB1c2VDYWxsYmFjayhldmVudCA9PiB7XG4gICAgaWYgKCFyZWFkT25seSAmJiBoYXNFZGl0YWJsZVRhcmdldChlZGl0b3IsIGV2ZW50LnRhcmdldCkgJiYgIWlzRE9NRXZlbnRIYW5kbGVkKGV2ZW50LCBwcm9wc09uRE9NQmVmb3JlSW5wdXQpKSB7XG4gICAgICB2YXIge1xuICAgICAgICBzZWxlY3Rpb25cbiAgICAgIH0gPSBlZGl0b3I7XG4gICAgICB2YXIge1xuICAgICAgICBpbnB1dFR5cGU6IHR5cGVcbiAgICAgIH0gPSBldmVudDtcbiAgICAgIHZhciBkYXRhID0gZXZlbnQuZGF0YVRyYW5zZmVyIHx8IGV2ZW50LmRhdGEgfHwgdW5kZWZpbmVkOyAvLyBUaGVzZSB0d28gdHlwZXMgb2NjdXIgd2hpbGUgYSB1c2VyIGlzIGNvbXBvc2luZyB0ZXh0IGFuZCBjYW4ndCBiZVxuICAgICAgLy8gY2FuY2VsbGVkLiBMZXQgdGhlbSB0aHJvdWdoIGFuZCB3YWl0IGZvciB0aGUgY29tcG9zaXRpb24gdG8gZW5kLlxuXG4gICAgICBpZiAodHlwZSA9PT0gJ2luc2VydENvbXBvc2l0aW9uVGV4dCcgfHwgdHlwZSA9PT0gJ2RlbGV0ZUNvbXBvc2l0aW9uVGV4dCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBDT01QQVQ6IEZvciB0aGUgZGVsZXRpbmcgZm9yd2FyZC9iYWNrd2FyZCBpbnB1dCB0eXBlcyB3ZSBkb24ndCB3YW50XG4gICAgICAvLyB0byBjaGFuZ2UgdGhlIHNlbGVjdGlvbiBiZWNhdXNlIGl0IGlzIHRoZSByYW5nZSB0aGF0IHdpbGwgYmUgZGVsZXRlZCxcbiAgICAgIC8vIGFuZCB0aG9zZSBjb21tYW5kcyBkZXRlcm1pbmUgdGhhdCBmb3IgdGhlbXNlbHZlcy5cblxuICAgICAgaWYgKCF0eXBlLnN0YXJ0c1dpdGgoJ2RlbGV0ZScpIHx8IHR5cGUuc3RhcnRzV2l0aCgnZGVsZXRlQnknKSkge1xuICAgICAgICB2YXIgW3RhcmdldFJhbmdlXSA9IGV2ZW50LmdldFRhcmdldFJhbmdlcygpO1xuXG4gICAgICAgIGlmICh0YXJnZXRSYW5nZSkge1xuICAgICAgICAgIHZhciByYW5nZSA9IFJlYWN0RWRpdG9yLnRvU2xhdGVSYW5nZShlZGl0b3IsIHRhcmdldFJhbmdlLCB7XG4gICAgICAgICAgICBleGFjdE1hdGNoOiBmYWxzZVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKCFzZWxlY3Rpb24gfHwgIVJhbmdlLmVxdWFscyhzZWxlY3Rpb24sIHJhbmdlKSkge1xuICAgICAgICAgICAgVHJhbnNmb3Jtcy5zZWxlY3QoZWRpdG9yLCByYW5nZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IC8vIENPTVBBVDogSWYgdGhlIHNlbGVjdGlvbiBpcyBleHBhbmRlZCwgZXZlbiBpZiB0aGUgY29tbWFuZCBzZWVtcyBsaWtlXG4gICAgICAvLyBhIGRlbGV0ZSBmb3J3YXJkL2JhY2t3YXJkIGNvbW1hbmQgaXQgc2hvdWxkIGRlbGV0ZSB0aGUgc2VsZWN0aW9uLlxuXG5cbiAgICAgIGlmIChzZWxlY3Rpb24gJiYgUmFuZ2UuaXNFeHBhbmRlZChzZWxlY3Rpb24pICYmIHR5cGUuc3RhcnRzV2l0aCgnZGVsZXRlJykpIHtcbiAgICAgICAgdmFyIGRpcmVjdGlvbiA9IHR5cGUuZW5kc1dpdGgoJ0JhY2t3YXJkJykgPyAnYmFja3dhcmQnIDogJ2ZvcndhcmQnO1xuICAgICAgICBFZGl0b3IuZGVsZXRlRnJhZ21lbnQoZWRpdG9yLCB7XG4gICAgICAgICAgZGlyZWN0aW9uXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdkZWxldGVCeUNvbXBvc2l0aW9uJzpcbiAgICAgICAgY2FzZSAnZGVsZXRlQnlDdXQnOlxuICAgICAgICBjYXNlICdkZWxldGVCeURyYWcnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEVkaXRvci5kZWxldGVGcmFnbWVudChlZGl0b3IpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ2RlbGV0ZUNvbnRlbnQnOlxuICAgICAgICBjYXNlICdkZWxldGVDb250ZW50Rm9yd2FyZCc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgRWRpdG9yLmRlbGV0ZUZvcndhcmQoZWRpdG9yKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdkZWxldGVDb250ZW50QmFja3dhcmQnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEVkaXRvci5kZWxldGVCYWNrd2FyZChlZGl0b3IpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ2RlbGV0ZUVudGlyZVNvZnRMaW5lJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBFZGl0b3IuZGVsZXRlQmFja3dhcmQoZWRpdG9yLCB7XG4gICAgICAgICAgICAgIHVuaXQ6ICdsaW5lJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBFZGl0b3IuZGVsZXRlRm9yd2FyZChlZGl0b3IsIHtcbiAgICAgICAgICAgICAgdW5pdDogJ2xpbmUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdkZWxldGVIYXJkTGluZUJhY2t3YXJkJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBFZGl0b3IuZGVsZXRlQmFja3dhcmQoZWRpdG9yLCB7XG4gICAgICAgICAgICAgIHVuaXQ6ICdibG9jaydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ2RlbGV0ZVNvZnRMaW5lQmFja3dhcmQnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEVkaXRvci5kZWxldGVCYWNrd2FyZChlZGl0b3IsIHtcbiAgICAgICAgICAgICAgdW5pdDogJ2xpbmUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdkZWxldGVIYXJkTGluZUZvcndhcmQnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEVkaXRvci5kZWxldGVGb3J3YXJkKGVkaXRvciwge1xuICAgICAgICAgICAgICB1bml0OiAnYmxvY2snXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdkZWxldGVTb2Z0TGluZUZvcndhcmQnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEVkaXRvci5kZWxldGVGb3J3YXJkKGVkaXRvciwge1xuICAgICAgICAgICAgICB1bml0OiAnbGluZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ2RlbGV0ZVdvcmRCYWNrd2FyZCc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgRWRpdG9yLmRlbGV0ZUJhY2t3YXJkKGVkaXRvciwge1xuICAgICAgICAgICAgICB1bml0OiAnd29yZCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ2RlbGV0ZVdvcmRGb3J3YXJkJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBFZGl0b3IuZGVsZXRlRm9yd2FyZChlZGl0b3IsIHtcbiAgICAgICAgICAgICAgdW5pdDogJ3dvcmQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdpbnNlcnRMaW5lQnJlYWsnOlxuICAgICAgICBjYXNlICdpbnNlcnRQYXJhZ3JhcGgnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEVkaXRvci5pbnNlcnRCcmVhayhlZGl0b3IpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ2luc2VydEZyb21Db21wb3NpdGlvbic6XG4gICAgICAgIGNhc2UgJ2luc2VydEZyb21Ecm9wJzpcbiAgICAgICAgY2FzZSAnaW5zZXJ0RnJvbVBhc3RlJzpcbiAgICAgICAgY2FzZSAnaW5zZXJ0RnJvbVlhbmsnOlxuICAgICAgICBjYXNlICdpbnNlcnRSZXBsYWNlbWVudFRleHQnOlxuICAgICAgICBjYXNlICdpbnNlcnRUZXh0JzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2luc2VydEZyb21Db21wb3NpdGlvbicpIHtcbiAgICAgICAgICAgICAgLy8gQ09NUEFUOiBpbiBTYWZhcmksIGBjb21wb3NpdGlvbmVuZGAgaXMgZGlzcGF0Y2hlZCBhZnRlciB0aGVcbiAgICAgICAgICAgICAgLy8gYGJlZm9yZWlucHV0YCBmb3IgXCJpbnNlcnRGcm9tQ29tcG9zaXRpb25cIi4gQnV0IGlmIHdlIHdhaXQgZm9yIGl0XG4gICAgICAgICAgICAgIC8vIHRoZW4gd2Ugd2lsbCBhYm9ydCBiZWNhdXNlIHdlJ3JlIHN0aWxsIGNvbXBvc2luZyBhbmQgdGhlIHNlbGVjdGlvblxuICAgICAgICAgICAgICAvLyB3b24ndCBiZSB1cGRhdGVkIHByb3Blcmx5LlxuICAgICAgICAgICAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvaW5wdXQtZXZlbnRzLTIvXG4gICAgICAgICAgICAgIHN0YXRlLmlzQ29tcG9zaW5nICYmIHNldElzQ29tcG9zaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgc3RhdGUuaXNDb21wb3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHdpbmRvdyA9IFJlYWN0RWRpdG9yLmdldFdpbmRvdyhlZGl0b3IpO1xuXG4gICAgICAgICAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIHdpbmRvdy5EYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgICAgICAgUmVhY3RFZGl0b3IuaW5zZXJ0RGF0YShlZGl0b3IsIGRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgRWRpdG9yLmluc2VydFRleHQoZWRpdG9yLCBkYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3JlYWRPbmx5LCBwcm9wc09uRE9NQmVmb3JlSW5wdXRdKTsgLy8gQXR0YWNoIGEgbmF0aXZlIERPTSBldmVudCBoYW5kbGVyIGZvciBgYmVmb3JlaW5wdXRgIGV2ZW50cywgYmVjYXVzZSBSZWFjdCdzXG4gIC8vIGJ1aWx0LWluIGBvbkJlZm9yZUlucHV0YCBpcyBhY3R1YWxseSBhIGxlYWt5IHBvbHlmaWxsIHRoYXQgZG9lc24ndCBleHBvc2VcbiAgLy8gcmVhbCBgYmVmb3JlaW5wdXRgIGV2ZW50cyBzYWRseS4uLiAoMjAxOS8xMS8wNClcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMTIxMVxuXG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZWYuY3VycmVudCAmJiBIQVNfQkVGT1JFX0lOUFVUX1NVUFBPUlQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgVGhlIGBiZWZvcmVpbnB1dGAgZXZlbnQgaXNuJ3QgcmVjb2duaXplZC5cbiAgICAgIHJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZWlucHV0Jywgb25ET01CZWZvcmVJbnB1dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChyZWYuY3VycmVudCAmJiBIQVNfQkVGT1JFX0lOUFVUX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZSBUaGUgYGJlZm9yZWlucHV0YCBldmVudCBpc24ndCByZWNvZ25pemVkLlxuICAgICAgICByZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdiZWZvcmVpbnB1dCcsIG9uRE9NQmVmb3JlSW5wdXQpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtvbkRPTUJlZm9yZUlucHV0XSk7IC8vIExpc3RlbiBvbiB0aGUgbmF0aXZlIGBzZWxlY3Rpb25jaGFuZ2VgIGV2ZW50IHRvIGJlIGFibGUgdG8gdXBkYXRlIGFueSB0aW1lXG4gIC8vIHRoZSBzZWxlY3Rpb24gY2hhbmdlcy4gVGhpcyBpcyByZXF1aXJlZCBiZWNhdXNlIFJlYWN0J3MgYG9uU2VsZWN0YCBpcyBsZWFreVxuICAvLyBhbmQgbm9uLXN0YW5kYXJkIHNvIGl0IGRvZXNuJ3QgZmlyZSB1bnRpbCBhZnRlciBhIHNlbGVjdGlvbiBoYXMgYmVlblxuICAvLyByZWxlYXNlZC4gVGhpcyBjYXVzZXMgaXNzdWVzIGluIHNpdHVhdGlvbnMgd2hlcmUgYW5vdGhlciBjaGFuZ2UgaGFwcGVuc1xuICAvLyB3aGlsZSBhIHNlbGVjdGlvbiBpcyBiZWluZyBkcmFnZ2VkLlxuXG4gIHZhciBvbkRPTVNlbGVjdGlvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKHRocm90dGxlKCgpID0+IHtcbiAgICBpZiAoIXJlYWRPbmx5ICYmICFzdGF0ZS5pc0NvbXBvc2luZyAmJiAhc3RhdGUuaXNVcGRhdGluZ1NlbGVjdGlvbiAmJiAhc3RhdGUuaXNEcmFnZ2luZ0ludGVybmFsbHkpIHtcbiAgICAgIHZhciByb290ID0gUmVhY3RFZGl0b3IuZmluZERvY3VtZW50T3JTaGFkb3dSb290KGVkaXRvcik7XG4gICAgICB2YXIge1xuICAgICAgICBhY3RpdmVFbGVtZW50XG4gICAgICB9ID0gcm9vdDtcbiAgICAgIHZhciBlbCA9IFJlYWN0RWRpdG9yLnRvRE9NTm9kZShlZGl0b3IsIGVkaXRvcik7XG4gICAgICB2YXIgZG9tU2VsZWN0aW9uID0gcm9vdC5nZXRTZWxlY3Rpb24oKTtcblxuICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgPT09IGVsKSB7XG4gICAgICAgIHN0YXRlLmxhdGVzdEVsZW1lbnQgPSBhY3RpdmVFbGVtZW50O1xuICAgICAgICBJU19GT0NVU0VELnNldChlZGl0b3IsIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgSVNfRk9DVVNFRC5kZWxldGUoZWRpdG9yKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFkb21TZWxlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIFRyYW5zZm9ybXMuZGVzZWxlY3QoZWRpdG9yKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHtcbiAgICAgICAgYW5jaG9yTm9kZSxcbiAgICAgICAgZm9jdXNOb2RlXG4gICAgICB9ID0gZG9tU2VsZWN0aW9uO1xuICAgICAgdmFyIGFuY2hvck5vZGVTZWxlY3RhYmxlID0gaGFzRWRpdGFibGVUYXJnZXQoZWRpdG9yLCBhbmNob3JOb2RlKSB8fCBpc1RhcmdldEluc2lkZVZvaWQoZWRpdG9yLCBhbmNob3JOb2RlKTtcbiAgICAgIHZhciBmb2N1c05vZGVTZWxlY3RhYmxlID0gaGFzRWRpdGFibGVUYXJnZXQoZWRpdG9yLCBmb2N1c05vZGUpIHx8IGlzVGFyZ2V0SW5zaWRlVm9pZChlZGl0b3IsIGZvY3VzTm9kZSk7XG5cbiAgICAgIGlmIChhbmNob3JOb2RlU2VsZWN0YWJsZSAmJiBmb2N1c05vZGVTZWxlY3RhYmxlKSB7XG4gICAgICAgIHZhciByYW5nZSA9IFJlYWN0RWRpdG9yLnRvU2xhdGVSYW5nZShlZGl0b3IsIGRvbVNlbGVjdGlvbiwge1xuICAgICAgICAgIGV4YWN0TWF0Y2g6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBUcmFuc2Zvcm1zLnNlbGVjdChlZGl0b3IsIHJhbmdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFRyYW5zZm9ybXMuZGVzZWxlY3QoZWRpdG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIDEwMCksIFtyZWFkT25seV0pOyAvLyBBdHRhY2ggYSBuYXRpdmUgRE9NIGV2ZW50IGhhbmRsZXIgZm9yIGBzZWxlY3Rpb25jaGFuZ2VgLCBiZWNhdXNlIFJlYWN0J3NcbiAgLy8gYnVpbHQtaW4gYG9uU2VsZWN0YCBoYW5kbGVyIGRvZXNuJ3QgZmlyZSBmb3IgYWxsIHNlbGVjdGlvbiBjaGFuZ2VzLiBJdCdzIGFcbiAgLy8gbGVha3kgcG9seWZpbGwgdGhhdCBvbmx5IGZpcmVzIG9uIGtleXByZXNzZXMgb3IgY2xpY2tzLiBJbnN0ZWFkLCB3ZSB3YW50IHRvXG4gIC8vIGZpcmUgZm9yIGFueSBjaGFuZ2UgdG8gdGhlIHNlbGVjdGlvbiBpbnNpZGUgdGhlIGVkaXRvci4gKDIwMTkvMTEvMDQpXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvNTc4NVxuXG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIHZhciB3aW5kb3cgPSBSZWFjdEVkaXRvci5nZXRXaW5kb3coZWRpdG9yKTtcbiAgICB3aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0aW9uY2hhbmdlJywgb25ET01TZWxlY3Rpb25DaGFuZ2UpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2VsZWN0aW9uY2hhbmdlJywgb25ET01TZWxlY3Rpb25DaGFuZ2UpO1xuICAgIH07XG4gIH0sIFtvbkRPTVNlbGVjdGlvbkNoYW5nZV0pO1xuICB2YXIgZGVjb3JhdGlvbnMgPSBkZWNvcmF0ZShbZWRpdG9yLCBbXV0pO1xuXG4gIGlmIChwbGFjZWhvbGRlciAmJiBlZGl0b3IuY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIEFycmF5LmZyb20oTm9kZS50ZXh0cyhlZGl0b3IpKS5sZW5ndGggPT09IDEgJiYgTm9kZS5zdHJpbmcoZWRpdG9yKSA9PT0gJycgJiYgIWlzQ29tcG9zaW5nKSB7XG4gICAgdmFyIHN0YXJ0ID0gRWRpdG9yLnN0YXJ0KGVkaXRvciwgW10pO1xuICAgIGRlY29yYXRpb25zLnB1c2goe1xuICAgICAgW1BMQUNFSE9MREVSX1NZTUJPTF06IHRydWUsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIGFuY2hvcjogc3RhcnQsXG4gICAgICBmb2N1czogc3RhcnRcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFkT25seUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogcmVhZE9ubHlcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRGVjb3JhdGVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGRlY29yYXRlXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCAvLyBDT01QQVQ6IFRoZSBHcmFtbWFybHkgQ2hyb21lIGV4dGVuc2lvbiB3b3JrcyBieSBjaGFuZ2luZyB0aGUgRE9NXG4gIC8vIG91dCBmcm9tIHVuZGVyIGBjb250ZW50ZWRpdGFibGVgIGVsZW1lbnRzLCB3aGljaCBsZWFkcyB0byB3ZWlyZFxuICAvLyBiZWhhdmlvcnMgc28gd2UgaGF2ZSB0byBkaXNhYmxlIGl0IGxpa2UgZWRpdG9yLiAoMjAxNy8wNC8yNClcbiAgLCBPYmplY3QuYXNzaWduKHtcbiAgICBcImRhdGEtZ3JhbW1cIjogZmFsc2UsXG4gICAgcm9sZTogcmVhZE9ubHkgPyB1bmRlZmluZWQgOiAndGV4dGJveCdcbiAgfSwgYXR0cmlidXRlcywge1xuICAgIC8vIENPTVBBVDogQ2VydGFpbiBicm93c2VycyBkb24ndCBzdXBwb3J0IHRoZSBgYmVmb3JlaW5wdXRgIGV2ZW50LCBzbyB3ZSdkXG4gICAgLy8gaGF2ZSB0byB1c2UgaGFja3MgdG8gbWFrZSB0aGVzZSByZXBsYWNlbWVudC1iYXNlZCBmZWF0dXJlcyB3b3JrLlxuICAgIHNwZWxsQ2hlY2s6ICFIQVNfQkVGT1JFX0lOUFVUX1NVUFBPUlQgPyBmYWxzZSA6IGF0dHJpYnV0ZXMuc3BlbGxDaGVjayxcbiAgICBhdXRvQ29ycmVjdDogIUhBU19CRUZPUkVfSU5QVVRfU1VQUE9SVCA/ICdmYWxzZScgOiBhdHRyaWJ1dGVzLmF1dG9Db3JyZWN0LFxuICAgIGF1dG9DYXBpdGFsaXplOiAhSEFTX0JFRk9SRV9JTlBVVF9TVVBQT1JUID8gJ2ZhbHNlJyA6IGF0dHJpYnV0ZXMuYXV0b0NhcGl0YWxpemUsXG4gICAgXCJkYXRhLXNsYXRlLWVkaXRvclwiOiB0cnVlLFxuICAgIFwiZGF0YS1zbGF0ZS1ub2RlXCI6IFwidmFsdWVcIixcbiAgICBjb250ZW50RWRpdGFibGU6IHJlYWRPbmx5ID8gdW5kZWZpbmVkIDogdHJ1ZSxcbiAgICBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmc6IHRydWUsXG4gICAgcmVmOiByZWYsXG4gICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgLy8gQWxsb3cgcG9zaXRpb25pbmcgcmVsYXRpdmUgdG8gdGhlIGVkaXRhYmxlIGVsZW1lbnQuXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgb3V0bGluZSBzdHlsZXMuXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAvLyBQcmVzZXJ2ZSBhZGphY2VudCB3aGl0ZXNwYWNlIGFuZCBuZXcgbGluZXMuXG4gICAgICB3aGl0ZVNwYWNlOiAncHJlLXdyYXAnLFxuICAgICAgLy8gQWxsb3cgd29yZHMgdG8gYnJlYWsgaWYgdGhleSBhcmUgdG9vIGxvbmcuXG4gICAgICB3b3JkV3JhcDogJ2JyZWFrLXdvcmQnXG4gICAgfSwgc3R5bGUpLFxuICAgIG9uQmVmb3JlSW5wdXQ6IHVzZUNhbGxiYWNrKGV2ZW50ID0+IHtcbiAgICAgIC8vIENPTVBBVDogQ2VydGFpbiBicm93c2VycyBkb24ndCBzdXBwb3J0IHRoZSBgYmVmb3JlaW5wdXRgIGV2ZW50LCBzbyB3ZVxuICAgICAgLy8gZmFsbCBiYWNrIHRvIFJlYWN0J3MgbGVha3kgcG9seWZpbGwgaW5zdGVhZCBqdXN0IGZvciBpdC4gSXRcbiAgICAgIC8vIG9ubHkgd29ya3MgZm9yIHRoZSBgaW5zZXJ0VGV4dGAgaW5wdXQgdHlwZS5cbiAgICAgIGlmICghSEFTX0JFRk9SRV9JTlBVVF9TVVBQT1JUICYmICFyZWFkT25seSAmJiAhaXNFdmVudEhhbmRsZWQoZXZlbnQsIGF0dHJpYnV0ZXMub25CZWZvcmVJbnB1dCkgJiYgaGFzRWRpdGFibGVUYXJnZXQoZWRpdG9yLCBldmVudC50YXJnZXQpKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCFzdGF0ZS5pc0NvbXBvc2luZykge1xuICAgICAgICAgIHZhciB0ZXh0ID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICBFZGl0b3IuaW5zZXJ0VGV4dChlZGl0b3IsIHRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW3JlYWRPbmx5XSksXG4gICAgb25CbHVyOiB1c2VDYWxsYmFjayhldmVudCA9PiB7XG4gICAgICBpZiAocmVhZE9ubHkgfHwgc3RhdGUuaXNVcGRhdGluZ1NlbGVjdGlvbiB8fCAhaGFzRWRpdGFibGVUYXJnZXQoZWRpdG9yLCBldmVudC50YXJnZXQpIHx8IGlzRXZlbnRIYW5kbGVkKGV2ZW50LCBhdHRyaWJ1dGVzLm9uQmx1cikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBDT01QQVQ6IElmIHRoZSBjdXJyZW50IGBhY3RpdmVFbGVtZW50YCBpcyBzdGlsbCB0aGUgcHJldmlvdXNcbiAgICAgIC8vIG9uZSwgdGhpcyBpcyBkdWUgdG8gdGhlIHdpbmRvdyBiZWluZyBibHVycmVkIHdoZW4gdGhlIHRhYlxuICAgICAgLy8gaXRzZWxmIGJlY29tZXMgdW5mb2N1c2VkLCBzbyB3ZSB3YW50IHRvIGFib3J0IGVhcmx5IHRvIGFsbG93IHRvXG4gICAgICAvLyBlZGl0b3IgdG8gc3RheSBmb2N1c2VkIHdoZW4gdGhlIHRhYiBiZWNvbWVzIGZvY3VzZWQgYWdhaW4uXG5cblxuICAgICAgdmFyIHJvb3QgPSBSZWFjdEVkaXRvci5maW5kRG9jdW1lbnRPclNoYWRvd1Jvb3QoZWRpdG9yKTtcblxuICAgICAgaWYgKHN0YXRlLmxhdGVzdEVsZW1lbnQgPT09IHJvb3QuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICAgIH0gPSBldmVudDtcbiAgICAgIHZhciBlbCA9IFJlYWN0RWRpdG9yLnRvRE9NTm9kZShlZGl0b3IsIGVkaXRvcik7IC8vIENPTVBBVDogVGhlIGV2ZW50IHNob3VsZCBiZSBpZ25vcmVkIGlmIHRoZSBmb2N1cyBpcyByZXR1cm5pbmdcbiAgICAgIC8vIHRvIHRoZSBlZGl0b3IgZnJvbSBhbiBlbWJlZGRlZCBlZGl0YWJsZSBlbGVtZW50IChlZy4gYW4gPGlucHV0PlxuICAgICAgLy8gZWxlbWVudCBpbnNpZGUgYSB2b2lkIG5vZGUpLlxuXG4gICAgICBpZiAocmVsYXRlZFRhcmdldCA9PT0gZWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBDT01QQVQ6IFRoZSBldmVudCBzaG91bGQgYmUgaWdub3JlZCBpZiB0aGUgZm9jdXMgaXMgbW92aW5nIGZyb21cbiAgICAgIC8vIHRoZSBlZGl0b3IgdG8gaW5zaWRlIGEgdm9pZCBub2RlJ3Mgc3BhY2VyIGVsZW1lbnQuXG5cblxuICAgICAgaWYgKGlzRE9NRWxlbWVudChyZWxhdGVkVGFyZ2V0KSAmJiByZWxhdGVkVGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1zbGF0ZS1zcGFjZXInKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIENPTVBBVDogVGhlIGV2ZW50IHNob3VsZCBiZSBpZ25vcmVkIGlmIHRoZSBmb2N1cyBpcyBtb3ZpbmcgdG8gYVxuICAgICAgLy8gbm9uLSBlZGl0YWJsZSBzZWN0aW9uIG9mIGFuIGVsZW1lbnQgdGhhdCBpc24ndCBhIHZvaWQgbm9kZSAoZWcuXG4gICAgICAvLyBhIGxpc3QgaXRlbSBvZiB0aGUgY2hlY2sgbGlzdCBleGFtcGxlKS5cblxuXG4gICAgICBpZiAocmVsYXRlZFRhcmdldCAhPSBudWxsICYmIGlzRE9NTm9kZShyZWxhdGVkVGFyZ2V0KSAmJiBSZWFjdEVkaXRvci5oYXNET01Ob2RlKGVkaXRvciwgcmVsYXRlZFRhcmdldCkpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBSZWFjdEVkaXRvci50b1NsYXRlTm9kZShlZGl0b3IsIHJlbGF0ZWRUYXJnZXQpO1xuXG4gICAgICAgIGlmIChFbGVtZW50JDEuaXNFbGVtZW50KG5vZGUpICYmICFlZGl0b3IuaXNWb2lkKG5vZGUpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IC8vIENPTVBBVDogU2FmYXJpIGRvZXNuJ3QgYWx3YXlzIHJlbW92ZSB0aGUgc2VsZWN0aW9uIGV2ZW4gaWYgdGhlIGNvbnRlbnQtXG4gICAgICAvLyBlZGl0YWJsZSBlbGVtZW50IG5vIGxvbmdlciBoYXMgZm9jdXMuIFJlZmVyIHRvOlxuICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTIzNTMyNDcvZm9yY2UtY29udGVudGVkaXRhYmxlLWRpdi10by1zdG9wLWFjY2VwdGluZy1pbnB1dC1hZnRlci1pdC1sb3Nlcy1mb2N1cy11bmRlci13ZWJcblxuXG4gICAgICBpZiAoSVNfU0FGQVJJKSB7XG4gICAgICAgIHZhciBkb21TZWxlY3Rpb24gPSByb290LmdldFNlbGVjdGlvbigpO1xuICAgICAgICBkb21TZWxlY3Rpb24gPT09IG51bGwgfHwgZG9tU2VsZWN0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkb21TZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICB9XG5cbiAgICAgIElTX0ZPQ1VTRUQuZGVsZXRlKGVkaXRvcik7XG4gICAgfSwgW3JlYWRPbmx5LCBhdHRyaWJ1dGVzLm9uQmx1cl0pLFxuICAgIG9uQ2xpY2s6IHVzZUNhbGxiYWNrKGV2ZW50ID0+IHtcbiAgICAgIGlmICghcmVhZE9ubHkgJiYgaGFzVGFyZ2V0KGVkaXRvciwgZXZlbnQudGFyZ2V0KSAmJiAhaXNFdmVudEhhbmRsZWQoZXZlbnQsIGF0dHJpYnV0ZXMub25DbGljaykgJiYgaXNET01Ob2RlKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBSZWFjdEVkaXRvci50b1NsYXRlTm9kZShlZGl0b3IsIGV2ZW50LnRhcmdldCk7XG4gICAgICAgIHZhciBwYXRoID0gUmVhY3RFZGl0b3IuZmluZFBhdGgoZWRpdG9yLCBub2RlKTtcblxuICAgICAgICB2YXIgX3N0YXJ0ID0gRWRpdG9yLnN0YXJ0KGVkaXRvciwgcGF0aCk7XG5cbiAgICAgICAgdmFyIGVuZCA9IEVkaXRvci5lbmQoZWRpdG9yLCBwYXRoKTtcbiAgICAgICAgdmFyIHN0YXJ0Vm9pZCA9IEVkaXRvci52b2lkKGVkaXRvciwge1xuICAgICAgICAgIGF0OiBfc3RhcnRcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBlbmRWb2lkID0gRWRpdG9yLnZvaWQoZWRpdG9yLCB7XG4gICAgICAgICAgYXQ6IGVuZFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc3RhcnRWb2lkICYmIGVuZFZvaWQgJiYgUGF0aC5lcXVhbHMoc3RhcnRWb2lkWzFdLCBlbmRWb2lkWzFdKSkge1xuICAgICAgICAgIHZhciByYW5nZSA9IEVkaXRvci5yYW5nZShlZGl0b3IsIF9zdGFydCk7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5zZWxlY3QoZWRpdG9yLCByYW5nZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbcmVhZE9ubHksIGF0dHJpYnV0ZXMub25DbGlja10pLFxuICAgIG9uQ29tcG9zaXRpb25FbmQ6IHVzZUNhbGxiYWNrKGV2ZW50ID0+IHtcbiAgICAgIGlmIChoYXNFZGl0YWJsZVRhcmdldChlZGl0b3IsIGV2ZW50LnRhcmdldCkgJiYgIWlzRXZlbnRIYW5kbGVkKGV2ZW50LCBhdHRyaWJ1dGVzLm9uQ29tcG9zaXRpb25FbmQpKSB7XG4gICAgICAgIHN0YXRlLmlzQ29tcG9zaW5nICYmIHNldElzQ29tcG9zaW5nKGZhbHNlKTtcbiAgICAgICAgc3RhdGUuaXNDb21wb3NpbmcgPSBmYWxzZTsgLy8gQ09NUEFUOiBJbiBDaHJvbWUsIGBiZWZvcmVpbnB1dGAgZXZlbnRzIGZvciBjb21wb3NpdGlvbnNcbiAgICAgICAgLy8gYXJlbid0IGNvcnJlY3QgYW5kIG5ldmVyIGZpcmUgdGhlIFwiaW5zZXJ0RnJvbUNvbXBvc2l0aW9uXCJcbiAgICAgICAgLy8gdHlwZSB0aGF0IHdlIG5lZWQuIFNvIGluc3RlYWQsIGluc2VydCB3aGVuZXZlciBhIGNvbXBvc2l0aW9uXG4gICAgICAgIC8vIGVuZHMgc2luY2UgaXQgd2lsbCBhbHJlYWR5IGhhdmUgYmVlbiBjb21taXR0ZWQgdG8gdGhlIERPTS5cblxuICAgICAgICBpZiAoIUlTX1NBRkFSSSAmJiAhSVNfRklSRUZPWF9MRUdBQ1kgJiYgIUlTX0lPUyAmJiBldmVudC5kYXRhKSB7XG4gICAgICAgICAgRWRpdG9yLmluc2VydFRleHQoZWRpdG9yLCBldmVudC5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFthdHRyaWJ1dGVzLm9uQ29tcG9zaXRpb25FbmRdKSxcbiAgICBvbkNvbXBvc2l0aW9uVXBkYXRlOiB1c2VDYWxsYmFjayhldmVudCA9PiB7XG4gICAgICBpZiAoaGFzRWRpdGFibGVUYXJnZXQoZWRpdG9yLCBldmVudC50YXJnZXQpICYmICFpc0V2ZW50SGFuZGxlZChldmVudCwgYXR0cmlidXRlcy5vbkNvbXBvc2l0aW9uVXBkYXRlKSkge1xuICAgICAgICAhc3RhdGUuaXNDb21wb3NpbmcgJiYgc2V0SXNDb21wb3NpbmcodHJ1ZSk7XG4gICAgICAgIHN0YXRlLmlzQ29tcG9zaW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBbYXR0cmlidXRlcy5vbkNvbXBvc2l0aW9uVXBkYXRlXSksXG4gICAgb25Db21wb3NpdGlvblN0YXJ0OiB1c2VDYWxsYmFjayhldmVudCA9PiB7XG4gICAgICBpZiAoaGFzRWRpdGFibGVUYXJnZXQoZWRpdG9yLCBldmVudC50YXJnZXQpICYmICFpc0V2ZW50SGFuZGxlZChldmVudCwgYXR0cmlidXRlcy5vbkNvbXBvc2l0aW9uU3RhcnQpKSB7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgc2VsZWN0aW9uXG4gICAgICAgIH0gPSBlZGl0b3I7XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbiAmJiBSYW5nZS5pc0V4cGFuZGVkKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICBFZGl0b3IuZGVsZXRlRnJhZ21lbnQoZWRpdG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFthdHRyaWJ1dGVzLm9uQ29tcG9zaXRpb25TdGFydF0pLFxuICAgIG9uQ29weTogdXNlQ2FsbGJhY2soZXZlbnQgPT4ge1xuICAgICAgaWYgKGhhc0VkaXRhYmxlVGFyZ2V0KGVkaXRvciwgZXZlbnQudGFyZ2V0KSAmJiAhaXNFdmVudEhhbmRsZWQoZXZlbnQsIGF0dHJpYnV0ZXMub25Db3B5KSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBSZWFjdEVkaXRvci5zZXRGcmFnbWVudERhdGEoZWRpdG9yLCBldmVudC5jbGlwYm9hcmREYXRhKTtcbiAgICAgIH1cbiAgICB9LCBbYXR0cmlidXRlcy5vbkNvcHldKSxcbiAgICBvbkN1dDogdXNlQ2FsbGJhY2soZXZlbnQgPT4ge1xuICAgICAgaWYgKCFyZWFkT25seSAmJiBoYXNFZGl0YWJsZVRhcmdldChlZGl0b3IsIGV2ZW50LnRhcmdldCkgJiYgIWlzRXZlbnRIYW5kbGVkKGV2ZW50LCBhdHRyaWJ1dGVzLm9uQ3V0KSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBSZWFjdEVkaXRvci5zZXRGcmFnbWVudERhdGEoZWRpdG9yLCBldmVudC5jbGlwYm9hcmREYXRhKTtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBzZWxlY3Rpb25cbiAgICAgICAgfSA9IGVkaXRvcjtcblxuICAgICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgICAgaWYgKFJhbmdlLmlzRXhwYW5kZWQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgRWRpdG9yLmRlbGV0ZUZyYWdtZW50KGVkaXRvcik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gTm9kZS5wYXJlbnQoZWRpdG9yLCBzZWxlY3Rpb24uYW5jaG9yLnBhdGgpO1xuXG4gICAgICAgICAgICBpZiAoRWRpdG9yLmlzVm9pZChlZGl0b3IsIG5vZGUpKSB7XG4gICAgICAgICAgICAgIFRyYW5zZm9ybXMuZGVsZXRlKGVkaXRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW3JlYWRPbmx5LCBhdHRyaWJ1dGVzLm9uQ3V0XSksXG4gICAgb25EcmFnT3ZlcjogdXNlQ2FsbGJhY2soZXZlbnQgPT4ge1xuICAgICAgaWYgKGhhc1RhcmdldChlZGl0b3IsIGV2ZW50LnRhcmdldCkgJiYgIWlzRXZlbnRIYW5kbGVkKGV2ZW50LCBhdHRyaWJ1dGVzLm9uRHJhZ092ZXIpKSB7XG4gICAgICAgIC8vIE9ubHkgd2hlbiB0aGUgdGFyZ2V0IGlzIHZvaWQsIGNhbGwgYHByZXZlbnREZWZhdWx0YCB0byBzaWduYWxcbiAgICAgICAgLy8gdGhhdCBkcm9wcyBhcmUgYWxsb3dlZC4gRWRpdGFibGUgY29udGVudCBpcyBkcm9wcGFibGUgYnlcbiAgICAgICAgLy8gZGVmYXVsdCwgYW5kIGNhbGxpbmcgYHByZXZlbnREZWZhdWx0YCBoaWRlcyB0aGUgY3Vyc29yLlxuICAgICAgICB2YXIgbm9kZSA9IFJlYWN0RWRpdG9yLnRvU2xhdGVOb2RlKGVkaXRvciwgZXZlbnQudGFyZ2V0KTtcblxuICAgICAgICBpZiAoRWRpdG9yLmlzVm9pZChlZGl0b3IsIG5vZGUpKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFthdHRyaWJ1dGVzLm9uRHJhZ092ZXJdKSxcbiAgICBvbkRyYWdTdGFydDogdXNlQ2FsbGJhY2soZXZlbnQgPT4ge1xuICAgICAgaWYgKGhhc1RhcmdldChlZGl0b3IsIGV2ZW50LnRhcmdldCkgJiYgIWlzRXZlbnRIYW5kbGVkKGV2ZW50LCBhdHRyaWJ1dGVzLm9uRHJhZ1N0YXJ0KSkge1xuICAgICAgICB2YXIgbm9kZSA9IFJlYWN0RWRpdG9yLnRvU2xhdGVOb2RlKGVkaXRvciwgZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgdmFyIHBhdGggPSBSZWFjdEVkaXRvci5maW5kUGF0aChlZGl0b3IsIG5vZGUpO1xuICAgICAgICB2YXIgdm9pZE1hdGNoID0gRWRpdG9yLmlzVm9pZChlZGl0b3IsIG5vZGUpIHx8IEVkaXRvci52b2lkKGVkaXRvciwge1xuICAgICAgICAgIGF0OiBwYXRoLFxuICAgICAgICAgIHZvaWRzOiB0cnVlXG4gICAgICAgIH0pOyAvLyBJZiBzdGFydGluZyBhIGRyYWcgb24gYSB2b2lkIG5vZGUsIG1ha2Ugc3VyZSBpdCBpcyBzZWxlY3RlZFxuICAgICAgICAvLyBzbyB0aGF0IGl0IHNob3dzIHVwIGluIHRoZSBzZWxlY3Rpb24ncyBmcmFnbWVudC5cblxuICAgICAgICBpZiAodm9pZE1hdGNoKSB7XG4gICAgICAgICAgdmFyIHJhbmdlID0gRWRpdG9yLnJhbmdlKGVkaXRvciwgcGF0aCk7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5zZWxlY3QoZWRpdG9yLCByYW5nZSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZS5pc0RyYWdnaW5nSW50ZXJuYWxseSA9IHRydWU7XG4gICAgICAgIFJlYWN0RWRpdG9yLnNldEZyYWdtZW50RGF0YShlZGl0b3IsIGV2ZW50LmRhdGFUcmFuc2Zlcik7XG4gICAgICB9XG4gICAgfSwgW2F0dHJpYnV0ZXMub25EcmFnU3RhcnRdKSxcbiAgICBvbkRyb3A6IHVzZUNhbGxiYWNrKGV2ZW50ID0+IHtcbiAgICAgIGlmICghcmVhZE9ubHkgJiYgaGFzVGFyZ2V0KGVkaXRvciwgZXZlbnQudGFyZ2V0KSAmJiAhaXNFdmVudEhhbmRsZWQoZXZlbnQsIGF0dHJpYnV0ZXMub25Ecm9wKSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBLZWVwIGEgcmVmZXJlbmNlIHRvIHRoZSBkcmFnZ2VkIHJhbmdlIGJlZm9yZSB1cGRhdGluZyBzZWxlY3Rpb25cblxuICAgICAgICB2YXIgZHJhZ2dlZFJhbmdlID0gZWRpdG9yLnNlbGVjdGlvbjsgLy8gRmluZCB0aGUgcmFuZ2Ugd2hlcmUgdGhlIGRyb3AgaGFwcGVuZWRcblxuICAgICAgICB2YXIgcmFuZ2UgPSBSZWFjdEVkaXRvci5maW5kRXZlbnRSYW5nZShlZGl0b3IsIGV2ZW50KTtcbiAgICAgICAgdmFyIGRhdGEgPSBldmVudC5kYXRhVHJhbnNmZXI7XG4gICAgICAgIFRyYW5zZm9ybXMuc2VsZWN0KGVkaXRvciwgcmFuZ2UpO1xuXG4gICAgICAgIGlmIChzdGF0ZS5pc0RyYWdnaW5nSW50ZXJuYWxseSkge1xuICAgICAgICAgIGlmIChkcmFnZ2VkUmFuZ2UpIHtcbiAgICAgICAgICAgIFRyYW5zZm9ybXMuZGVsZXRlKGVkaXRvciwge1xuICAgICAgICAgICAgICBhdDogZHJhZ2dlZFJhbmdlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdGF0ZS5pc0RyYWdnaW5nSW50ZXJuYWxseSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgUmVhY3RFZGl0b3IuaW5zZXJ0RGF0YShlZGl0b3IsIGRhdGEpOyAvLyBXaGVuIGRyYWdnaW5nIGZyb20gYW5vdGhlciBzb3VyY2UgaW50byB0aGUgZWRpdG9yLCBpdCdzIHBvc3NpYmxlXG4gICAgICAgIC8vIHRoYXQgdGhlIGN1cnJlbnQgZWRpdG9yIGRvZXMgbm90IGhhdmUgZm9jdXMuXG5cbiAgICAgICAgaWYgKCFSZWFjdEVkaXRvci5pc0ZvY3VzZWQoZWRpdG9yKSkge1xuICAgICAgICAgIFJlYWN0RWRpdG9yLmZvY3VzKGVkaXRvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbcmVhZE9ubHksIGF0dHJpYnV0ZXMub25Ecm9wXSksXG4gICAgb25EcmFnRW5kOiB1c2VDYWxsYmFjayhldmVudCA9PiB7XG4gICAgICAvLyBXaGVuIGRyb3BwaW5nIG9uIGEgZGlmZmVyZW50IGRyb3BwYWJsZSBlbGVtZW50IHRoYW4gdGhlIGN1cnJlbnQgZWRpdG9yLFxuICAgICAgLy8gYG9uRHJvcGAgaXMgbm90IGNhbGxlZC4gU28gd2UgbmVlZCB0byBjbGVhbiB1cCBpbiBgb25EcmFnRW5kYCBpbnN0ZWFkLlxuICAgICAgLy8gTm90ZTogYG9uRHJhZ0VuZGAgaXMgb25seSBjYWxsZWQgd2hlbiBgb25Ecm9wYCBpcyBub3QgY2FsbGVkXG4gICAgICBpZiAoIXJlYWRPbmx5ICYmIHN0YXRlLmlzRHJhZ2dpbmdJbnRlcm5hbGx5ICYmIGhhc1RhcmdldChlZGl0b3IsIGV2ZW50LnRhcmdldCkgJiYgIWlzRXZlbnRIYW5kbGVkKGV2ZW50LCBhdHRyaWJ1dGVzLm9uRHJhZ0VuZCkpIHtcbiAgICAgICAgc3RhdGUuaXNEcmFnZ2luZ0ludGVybmFsbHkgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCBbcmVhZE9ubHksIGF0dHJpYnV0ZXMub25EcmFnRW5kXSksXG4gICAgb25Gb2N1czogdXNlQ2FsbGJhY2soZXZlbnQgPT4ge1xuICAgICAgaWYgKCFyZWFkT25seSAmJiAhc3RhdGUuaXNVcGRhdGluZ1NlbGVjdGlvbiAmJiBoYXNFZGl0YWJsZVRhcmdldChlZGl0b3IsIGV2ZW50LnRhcmdldCkgJiYgIWlzRXZlbnRIYW5kbGVkKGV2ZW50LCBhdHRyaWJ1dGVzLm9uRm9jdXMpKSB7XG4gICAgICAgIHZhciBlbCA9IFJlYWN0RWRpdG9yLnRvRE9NTm9kZShlZGl0b3IsIGVkaXRvcik7XG4gICAgICAgIHZhciByb290ID0gUmVhY3RFZGl0b3IuZmluZERvY3VtZW50T3JTaGFkb3dSb290KGVkaXRvcik7XG4gICAgICAgIHN0YXRlLmxhdGVzdEVsZW1lbnQgPSByb290LmFjdGl2ZUVsZW1lbnQ7IC8vIENPTVBBVDogSWYgdGhlIGVkaXRvciBoYXMgbmVzdGVkIGVkaXRhYmxlIGVsZW1lbnRzLCB0aGUgZm9jdXNcbiAgICAgICAgLy8gY2FuIGdvIHRvIHRoZW0uIEluIEZpcmVmb3gsIHRoaXMgbXVzdCBiZSBwcmV2ZW50ZWQgYmVjYXVzZSBpdFxuICAgICAgICAvLyByZXN1bHRzIGluIGlzc3VlcyB3aXRoIGtleWJvYXJkIG5hdmlnYXRpb24uICgyMDE3LzAzLzMwKVxuXG4gICAgICAgIGlmIChJU19GSVJFRk9YICYmIGV2ZW50LnRhcmdldCAhPT0gZWwpIHtcbiAgICAgICAgICBlbC5mb2N1cygpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIElTX0ZPQ1VTRUQuc2V0KGVkaXRvciwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSwgW3JlYWRPbmx5LCBhdHRyaWJ1dGVzLm9uRm9jdXNdKSxcbiAgICBvbktleURvd246IHVzZUNhbGxiYWNrKGV2ZW50ID0+IHtcbiAgICAgIGlmICghcmVhZE9ubHkgJiYgaGFzRWRpdGFibGVUYXJnZXQoZWRpdG9yLCBldmVudC50YXJnZXQpICYmICFpc0V2ZW50SGFuZGxlZChldmVudCwgYXR0cmlidXRlcy5vbktleURvd24pKSB7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgbmF0aXZlRXZlbnRcbiAgICAgICAgfSA9IGV2ZW50O1xuICAgICAgICB2YXIge1xuICAgICAgICAgIHNlbGVjdGlvblxuICAgICAgICB9ID0gZWRpdG9yO1xuICAgICAgICB2YXIgZWxlbWVudCA9IGVkaXRvci5jaGlsZHJlbltzZWxlY3Rpb24gIT09IG51bGwgPyBzZWxlY3Rpb24uZm9jdXMucGF0aFswXSA6IDBdO1xuICAgICAgICB2YXIgaXNSVEwgPSBnZXREaXJlY3Rpb24oTm9kZS5zdHJpbmcoZWxlbWVudCkpID09PSAncnRsJzsgLy8gQ09NUEFUOiBTaW5jZSB3ZSBwcmV2ZW50IHRoZSBkZWZhdWx0IGJlaGF2aW9yIG9uXG4gICAgICAgIC8vIGBiZWZvcmVpbnB1dGAgZXZlbnRzLCB0aGUgYnJvd3NlciBkb2Vzbid0IHRoaW5rIHRoZXJlJ3MgZXZlclxuICAgICAgICAvLyBhbnkgaGlzdG9yeSBzdGFjayB0byB1bmRvIG9yIHJlZG8sIHNvIHdlIGhhdmUgdG8gbWFuYWdlIHRoZXNlXG4gICAgICAgIC8vIGhvdGtleXMgb3Vyc2VsdmVzLiAoMjAxOS8xMS8wNilcblxuICAgICAgICBpZiAoSG90a2V5cy5pc1JlZG8obmF0aXZlRXZlbnQpKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB2YXIgbWF5YmVIaXN0b3J5RWRpdG9yID0gZWRpdG9yO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBtYXliZUhpc3RvcnlFZGl0b3IucmVkbyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbWF5YmVIaXN0b3J5RWRpdG9yLnJlZG8oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoSG90a2V5cy5pc1VuZG8obmF0aXZlRXZlbnQpKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB2YXIgX21heWJlSGlzdG9yeUVkaXRvciA9IGVkaXRvcjtcblxuICAgICAgICAgIGlmICh0eXBlb2YgX21heWJlSGlzdG9yeUVkaXRvci51bmRvID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBfbWF5YmVIaXN0b3J5RWRpdG9yLnVuZG8oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gQ09NUEFUOiBDZXJ0YWluIGJyb3dzZXJzIGRvbid0IGhhbmRsZSB0aGUgc2VsZWN0aW9uIHVwZGF0ZXNcbiAgICAgICAgLy8gcHJvcGVybHkuIEluIENocm9tZSwgdGhlIHNlbGVjdGlvbiBpc24ndCBwcm9wZXJseSBleHRlbmRlZC5cbiAgICAgICAgLy8gQW5kIGluIEZpcmVmb3gsIHRoZSBzZWxlY3Rpb24gaXNuJ3QgcHJvcGVybHkgY29sbGFwc2VkLlxuICAgICAgICAvLyAoMjAxNy8xMC8xNylcblxuXG4gICAgICAgIGlmIChIb3RrZXlzLmlzTW92ZUxpbmVCYWNrd2FyZChuYXRpdmVFdmVudCkpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIFRyYW5zZm9ybXMubW92ZShlZGl0b3IsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdsaW5lJyxcbiAgICAgICAgICAgIHJldmVyc2U6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoSG90a2V5cy5pc01vdmVMaW5lRm9yd2FyZChuYXRpdmVFdmVudCkpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIFRyYW5zZm9ybXMubW92ZShlZGl0b3IsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdsaW5lJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChIb3RrZXlzLmlzRXh0ZW5kTGluZUJhY2t3YXJkKG5hdGl2ZUV2ZW50KSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5tb3ZlKGVkaXRvciwge1xuICAgICAgICAgICAgdW5pdDogJ2xpbmUnLFxuICAgICAgICAgICAgZWRnZTogJ2ZvY3VzJyxcbiAgICAgICAgICAgIHJldmVyc2U6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoSG90a2V5cy5pc0V4dGVuZExpbmVGb3J3YXJkKG5hdGl2ZUV2ZW50KSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5tb3ZlKGVkaXRvciwge1xuICAgICAgICAgICAgdW5pdDogJ2xpbmUnLFxuICAgICAgICAgICAgZWRnZTogJ2ZvY3VzJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBDT01QQVQ6IElmIGEgdm9pZCBub2RlIGlzIHNlbGVjdGVkLCBvciBhIHplcm8td2lkdGggdGV4dCBub2RlXG4gICAgICAgIC8vIGFkamFjZW50IHRvIGFuIGlubGluZSBpcyBzZWxlY3RlZCwgd2UgbmVlZCB0byBoYW5kbGUgdGhlc2VcbiAgICAgICAgLy8gaG90a2V5cyBtYW51YWxseSBiZWNhdXNlIGJyb3dzZXJzIHdvbid0IGJlIGFibGUgdG8gc2tpcCBvdmVyXG4gICAgICAgIC8vIHRoZSB2b2lkIG5vZGUgd2l0aCB0aGUgemVyby13aWR0aCBzcGFjZSBub3QgYmVpbmcgYW4gZW1wdHlcbiAgICAgICAgLy8gc3RyaW5nLlxuXG5cbiAgICAgICAgaWYgKEhvdGtleXMuaXNNb3ZlQmFja3dhcmQobmF0aXZlRXZlbnQpKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIGlmIChzZWxlY3Rpb24gJiYgUmFuZ2UuaXNDb2xsYXBzZWQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgVHJhbnNmb3Jtcy5tb3ZlKGVkaXRvciwge1xuICAgICAgICAgICAgICByZXZlcnNlOiAhaXNSVExcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBUcmFuc2Zvcm1zLmNvbGxhcHNlKGVkaXRvciwge1xuICAgICAgICAgICAgICBlZGdlOiAnc3RhcnQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoSG90a2V5cy5pc01vdmVGb3J3YXJkKG5hdGl2ZUV2ZW50KSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICBpZiAoc2VsZWN0aW9uICYmIFJhbmdlLmlzQ29sbGFwc2VkKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgIFRyYW5zZm9ybXMubW92ZShlZGl0b3IsIHtcbiAgICAgICAgICAgICAgcmV2ZXJzZTogaXNSVExcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBUcmFuc2Zvcm1zLmNvbGxhcHNlKGVkaXRvciwge1xuICAgICAgICAgICAgICBlZGdlOiAnZW5kJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEhvdGtleXMuaXNNb3ZlV29yZEJhY2t3YXJkKG5hdGl2ZUV2ZW50KSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICBpZiAoc2VsZWN0aW9uICYmIFJhbmdlLmlzRXhwYW5kZWQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgVHJhbnNmb3Jtcy5jb2xsYXBzZShlZGl0b3IsIHtcbiAgICAgICAgICAgICAgZWRnZTogJ2ZvY3VzJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgVHJhbnNmb3Jtcy5tb3ZlKGVkaXRvciwge1xuICAgICAgICAgICAgdW5pdDogJ3dvcmQnLFxuICAgICAgICAgICAgcmV2ZXJzZTogIWlzUlRMXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEhvdGtleXMuaXNNb3ZlV29yZEZvcndhcmQobmF0aXZlRXZlbnQpKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIGlmIChzZWxlY3Rpb24gJiYgUmFuZ2UuaXNFeHBhbmRlZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICBUcmFuc2Zvcm1zLmNvbGxhcHNlKGVkaXRvciwge1xuICAgICAgICAgICAgICBlZGdlOiAnZm9jdXMnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBUcmFuc2Zvcm1zLm1vdmUoZWRpdG9yLCB7XG4gICAgICAgICAgICB1bml0OiAnd29yZCcsXG4gICAgICAgICAgICByZXZlcnNlOiBpc1JUTFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBDT01QQVQ6IENlcnRhaW4gYnJvd3NlcnMgZG9uJ3Qgc3VwcG9ydCB0aGUgYGJlZm9yZWlucHV0YCBldmVudCwgc28gd2VcbiAgICAgICAgLy8gZmFsbCBiYWNrIHRvIGd1ZXNzaW5nIGF0IHRoZSBpbnB1dCBpbnRlbnRpb24gZm9yIGhvdGtleXMuXG4gICAgICAgIC8vIENPTVBBVDogSW4gaU9TLCBzb21lIG9mIHRoZXNlIGhvdGtleXMgYXJlIGhhbmRsZWQgaW4gdGhlXG5cblxuICAgICAgICBpZiAoIUhBU19CRUZPUkVfSU5QVVRfU1VQUE9SVCkge1xuICAgICAgICAgIC8vIFdlIGRvbid0IGhhdmUgYSBjb3JlIGJlaGF2aW9yIGZvciB0aGVzZSwgYnV0IHRoZXkgY2hhbmdlIHRoZVxuICAgICAgICAgIC8vIERPTSBpZiB3ZSBkb24ndCBwcmV2ZW50IHRoZW0sIHNvIHdlIGhhdmUgdG8uXG4gICAgICAgICAgaWYgKEhvdGtleXMuaXNCb2xkKG5hdGl2ZUV2ZW50KSB8fCBIb3RrZXlzLmlzSXRhbGljKG5hdGl2ZUV2ZW50KSB8fCBIb3RrZXlzLmlzVHJhbnNwb3NlQ2hhcmFjdGVyKG5hdGl2ZUV2ZW50KSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoSG90a2V5cy5pc1NwbGl0QmxvY2sobmF0aXZlRXZlbnQpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgRWRpdG9yLmluc2VydEJyZWFrKGVkaXRvcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKEhvdGtleXMuaXNEZWxldGVCYWNrd2FyZChuYXRpdmVFdmVudCkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24gJiYgUmFuZ2UuaXNFeHBhbmRlZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgIEVkaXRvci5kZWxldGVGcmFnbWVudChlZGl0b3IsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdiYWNrd2FyZCdcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBFZGl0b3IuZGVsZXRlQmFja3dhcmQoZWRpdG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChIb3RrZXlzLmlzRGVsZXRlRm9yd2FyZChuYXRpdmVFdmVudCkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24gJiYgUmFuZ2UuaXNFeHBhbmRlZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgIEVkaXRvci5kZWxldGVGcmFnbWVudChlZGl0b3IsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdmb3J3YXJkJ1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIEVkaXRvci5kZWxldGVGb3J3YXJkKGVkaXRvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoSG90a2V5cy5pc0RlbGV0ZUxpbmVCYWNrd2FyZChuYXRpdmVFdmVudCkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24gJiYgUmFuZ2UuaXNFeHBhbmRlZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgIEVkaXRvci5kZWxldGVGcmFnbWVudChlZGl0b3IsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdiYWNrd2FyZCdcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBFZGl0b3IuZGVsZXRlQmFja3dhcmQoZWRpdG9yLCB7XG4gICAgICAgICAgICAgICAgdW5pdDogJ2xpbmUnXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKEhvdGtleXMuaXNEZWxldGVMaW5lRm9yd2FyZChuYXRpdmVFdmVudCkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24gJiYgUmFuZ2UuaXNFeHBhbmRlZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgIEVkaXRvci5kZWxldGVGcmFnbWVudChlZGl0b3IsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdmb3J3YXJkJ1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIEVkaXRvci5kZWxldGVGb3J3YXJkKGVkaXRvciwge1xuICAgICAgICAgICAgICAgIHVuaXQ6ICdsaW5lJ1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChIb3RrZXlzLmlzRGVsZXRlV29yZEJhY2t3YXJkKG5hdGl2ZUV2ZW50KSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKHNlbGVjdGlvbiAmJiBSYW5nZS5pc0V4cGFuZGVkKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgICAgRWRpdG9yLmRlbGV0ZUZyYWdtZW50KGVkaXRvciwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2JhY2t3YXJkJ1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIEVkaXRvci5kZWxldGVCYWNrd2FyZChlZGl0b3IsIHtcbiAgICAgICAgICAgICAgICB1bml0OiAnd29yZCdcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoSG90a2V5cy5pc0RlbGV0ZVdvcmRGb3J3YXJkKG5hdGl2ZUV2ZW50KSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKHNlbGVjdGlvbiAmJiBSYW5nZS5pc0V4cGFuZGVkKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgICAgRWRpdG9yLmRlbGV0ZUZyYWdtZW50KGVkaXRvciwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2ZvcndhcmQnXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgRWRpdG9yLmRlbGV0ZUZvcndhcmQoZWRpdG9yLCB7XG4gICAgICAgICAgICAgICAgdW5pdDogJ3dvcmQnXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChJU19DSFJPTUUgfHwgSVNfU0FGQVJJKSB7XG4gICAgICAgICAgICAvLyBDT01QQVQ6IENocm9tZSBhbmQgU2FmYXJpIHN1cHBvcnQgYGJlZm9yZWlucHV0YCBldmVudCBidXQgZG8gbm90IGZpcmVcbiAgICAgICAgICAgIC8vIGFuIGV2ZW50IHdoZW4gZGVsZXRpbmcgYmFja3dhcmRzIGluIGEgc2VsZWN0ZWQgdm9pZCBpbmxpbmUgbm9kZVxuICAgICAgICAgICAgaWYgKHNlbGVjdGlvbiAmJiAoSG90a2V5cy5pc0RlbGV0ZUJhY2t3YXJkKG5hdGl2ZUV2ZW50KSB8fCBIb3RrZXlzLmlzRGVsZXRlRm9yd2FyZChuYXRpdmVFdmVudCkpICYmIFJhbmdlLmlzQ29sbGFwc2VkKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgICAgdmFyIGN1cnJlbnROb2RlID0gTm9kZS5wYXJlbnQoZWRpdG9yLCBzZWxlY3Rpb24uYW5jaG9yLnBhdGgpO1xuXG4gICAgICAgICAgICAgIGlmIChFbGVtZW50JDEuaXNFbGVtZW50KGN1cnJlbnROb2RlKSAmJiBFZGl0b3IuaXNWb2lkKGVkaXRvciwgY3VycmVudE5vZGUpICYmIEVkaXRvci5pc0lubGluZShlZGl0b3IsIGN1cnJlbnROb2RlKSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgVHJhbnNmb3Jtcy5kZWxldGUoZWRpdG9yLCB7XG4gICAgICAgICAgICAgICAgICB1bml0OiAnYmxvY2snXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW3JlYWRPbmx5LCBhdHRyaWJ1dGVzLm9uS2V5RG93bl0pLFxuICAgIG9uUGFzdGU6IHVzZUNhbGxiYWNrKGV2ZW50ID0+IHtcbiAgICAgIGlmICghcmVhZE9ubHkgJiYgaGFzRWRpdGFibGVUYXJnZXQoZWRpdG9yLCBldmVudC50YXJnZXQpICYmICFpc0V2ZW50SGFuZGxlZChldmVudCwgYXR0cmlidXRlcy5vblBhc3RlKSkge1xuICAgICAgICAvLyBDT01QQVQ6IENlcnRhaW4gYnJvd3NlcnMgZG9uJ3Qgc3VwcG9ydCB0aGUgYGJlZm9yZWlucHV0YCBldmVudCwgc28gd2VcbiAgICAgICAgLy8gZmFsbCBiYWNrIHRvIFJlYWN0J3MgYG9uUGFzdGVgIGhlcmUgaW5zdGVhZC5cbiAgICAgICAgLy8gQ09NUEFUOiBGaXJlZm94LCBDaHJvbWUgYW5kIFNhZmFyaSBkb24ndCBlbWl0IGBiZWZvcmVpbnB1dGAgZXZlbnRzXG4gICAgICAgIC8vIHdoZW4gXCJwYXN0ZSB3aXRob3V0IGZvcm1hdHRpbmdcIiBpcyB1c2VkLCBzbyBmYWxsYmFjay4gKDIwMjAvMDIvMjApXG4gICAgICAgIGlmICghSEFTX0JFRk9SRV9JTlBVVF9TVVBQT1JUIHx8IGlzUGxhaW5UZXh0T25seVBhc3RlKGV2ZW50Lm5hdGl2ZUV2ZW50KSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgUmVhY3RFZGl0b3IuaW5zZXJ0RGF0YShlZGl0b3IsIGV2ZW50LmNsaXBib2FyZERhdGEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW3JlYWRPbmx5LCBhdHRyaWJ1dGVzLm9uUGFzdGVdKVxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ2hpbGRyZW4sIHtcbiAgICBkZWNvcmF0aW9uczogZGVjb3JhdGlvbnMsXG4gICAgbm9kZTogZWRpdG9yLFxuICAgIHJlbmRlckVsZW1lbnQ6IHJlbmRlckVsZW1lbnQsXG4gICAgcmVuZGVyUGxhY2Vob2xkZXI6IHJlbmRlclBsYWNlaG9sZGVyLFxuICAgIHJlbmRlckxlYWY6IHJlbmRlckxlYWYsXG4gICAgc2VsZWN0aW9uOiBlZGl0b3Iuc2VsZWN0aW9uXG4gIH0pKSkpO1xufTtcbi8qKlxyXG4gKiBUaGUgZGVmYXVsdCBwbGFjZWhvbGRlciBlbGVtZW50XHJcbiAqL1xuXG52YXIgRGVmYXVsdFBsYWNlaG9sZGVyID0gKF9yZWYpID0+IHtcbiAgdmFyIHtcbiAgICBhdHRyaWJ1dGVzLFxuICAgIGNoaWxkcmVuXG4gIH0gPSBfcmVmO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIE9iamVjdC5hc3NpZ24oe30sIGF0dHJpYnV0ZXMpLCBjaGlsZHJlbik7XG59O1xuLyoqXHJcbiAqIEEgZGVmYXVsdCBtZW1vaXplZCBkZWNvcmF0ZSBmdW5jdGlvbi5cclxuICovXG5cbnZhciBkZWZhdWx0RGVjb3JhdGUgPSAoKSA9PiBbXTtcbi8qKlxyXG4gKiBBIGRlZmF1bHQgaW1wbGVtZW50IHRvIHNjcm9sbCBkb20gcmFuZ2UgaW50byB2aWV3LlxyXG4gKi9cblxudmFyIGRlZmF1bHRTY3JvbGxTZWxlY3Rpb25JbnRvVmlldyA9IChlZGl0b3IsIGRvbVJhbmdlKSA9PiB7XG4gIHZhciBsZWFmRWwgPSBkb21SYW5nZS5zdGFydENvbnRhaW5lci5wYXJlbnRFbGVtZW50O1xuICBsZWFmRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID0gZG9tUmFuZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmJpbmQoZG9tUmFuZ2UpO1xuICBzY3JvbGxJbnRvVmlldyhsZWFmRWwsIHtcbiAgICBzY3JvbGxNb2RlOiAnaWYtbmVlZGVkJ1xuICB9KTtcbiAgZGVsZXRlIGxlYWZFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3Q7XG59O1xuLyoqXHJcbiAqIENoZWNrIGlmIHRoZSB0YXJnZXQgaXMgaW4gdGhlIGVkaXRvci5cclxuICovXG5cbnZhciBoYXNUYXJnZXQgPSAoZWRpdG9yLCB0YXJnZXQpID0+IHtcbiAgcmV0dXJuIGlzRE9NTm9kZSh0YXJnZXQpICYmIFJlYWN0RWRpdG9yLmhhc0RPTU5vZGUoZWRpdG9yLCB0YXJnZXQpO1xufTtcbi8qKlxyXG4gKiBDaGVjayBpZiB0aGUgdGFyZ2V0IGlzIGVkaXRhYmxlIGFuZCBpbiB0aGUgZWRpdG9yLlxyXG4gKi9cblxudmFyIGhhc0VkaXRhYmxlVGFyZ2V0ID0gKGVkaXRvciwgdGFyZ2V0KSA9PiB7XG4gIHJldHVybiBpc0RPTU5vZGUodGFyZ2V0KSAmJiBSZWFjdEVkaXRvci5oYXNET01Ob2RlKGVkaXRvciwgdGFyZ2V0LCB7XG4gICAgZWRpdGFibGU6IHRydWVcbiAgfSk7XG59O1xuLyoqXHJcbiAqIENoZWNrIGlmIHRoZSB0YXJnZXQgaXMgaW5zaWRlIHZvaWQgYW5kIGluIHRoZSBlZGl0b3IuXHJcbiAqL1xuXG52YXIgaXNUYXJnZXRJbnNpZGVWb2lkID0gKGVkaXRvciwgdGFyZ2V0KSA9PiB7XG4gIHZhciBzbGF0ZU5vZGUgPSBoYXNUYXJnZXQoZWRpdG9yLCB0YXJnZXQpICYmIFJlYWN0RWRpdG9yLnRvU2xhdGVOb2RlKGVkaXRvciwgdGFyZ2V0KTtcbiAgcmV0dXJuIEVkaXRvci5pc1ZvaWQoZWRpdG9yLCBzbGF0ZU5vZGUpO1xufTtcbi8qKlxyXG4gKiBDaGVjayBpZiBhbiBldmVudCBpcyBvdmVycmlkZWQgYnkgYSBoYW5kbGVyLlxyXG4gKi9cblxudmFyIGlzRXZlbnRIYW5kbGVkID0gKGV2ZW50LCBoYW5kbGVyKSA9PiB7XG4gIGlmICghaGFuZGxlcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSAvLyBUaGUgY3VzdG9tIGV2ZW50IGhhbmRsZXIgbWF5IHJldHVybiBhIGJvb2xlYW4gdG8gc3BlY2lmeSB3aGV0aGVyIHRoZSBldmVudFxuICAvLyBzaGFsbCBiZSB0cmVhdGVkIGFzIGJlaW5nIGhhbmRsZWQgb3Igbm90LlxuXG5cbiAgdmFyIHNob3VsZFRyZWF0RXZlbnRBc0hhbmRsZWQgPSBoYW5kbGVyKGV2ZW50KTtcblxuICBpZiAoc2hvdWxkVHJlYXRFdmVudEFzSGFuZGxlZCAhPSBudWxsKSB7XG4gICAgcmV0dXJuIHNob3VsZFRyZWF0RXZlbnRBc0hhbmRsZWQ7XG4gIH1cblxuICByZXR1cm4gZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKTtcbn07XG4vKipcclxuICogQ2hlY2sgaWYgYSBET00gZXZlbnQgaXMgb3ZlcnJpZGVkIGJ5IGEgaGFuZGxlci5cclxuICovXG5cbnZhciBpc0RPTUV2ZW50SGFuZGxlZCA9IChldmVudCwgaGFuZGxlcikgPT4ge1xuICBpZiAoIWhhbmRsZXIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gLy8gVGhlIGN1c3RvbSBldmVudCBoYW5kbGVyIG1heSByZXR1cm4gYSBib29sZWFuIHRvIHNwZWNpZnkgd2hldGhlciB0aGUgZXZlbnRcbiAgLy8gc2hhbGwgYmUgdHJlYXRlZCBhcyBiZWluZyBoYW5kbGVkIG9yIG5vdC5cblxuXG4gIHZhciBzaG91bGRUcmVhdEV2ZW50QXNIYW5kbGVkID0gaGFuZGxlcihldmVudCk7XG5cbiAgaWYgKHNob3VsZFRyZWF0RXZlbnRBc0hhbmRsZWQgIT0gbnVsbCkge1xuICAgIHJldHVybiBzaG91bGRUcmVhdEV2ZW50QXNIYW5kbGVkO1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQ7XG59O1xuXG4vKipcclxuICogQW4gYXV0by1pbmNyZW1lbnRpbmcgaWRlbnRpZmllciBmb3Iga2V5cy5cclxuICovXG52YXIgbiA9IDA7XG4vKipcclxuICogQSBjbGFzcyB0aGF0IGtlZXBzIHRyYWNrIG9mIGEga2V5IHN0cmluZy4gV2UgdXNlIGEgZnVsbCBjbGFzcyBoZXJlIGJlY2F1c2Ugd2VcclxuICogd2FudCB0byBiZSBhYmxlIHRvIHVzZSB0aGVtIGFzIGtleXMgaW4gYFdlYWtNYXBgIG9iamVjdHMuXHJcbiAqL1xuXG5jbGFzcyBLZXkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmlkID0gXCJcIi5jb25jYXQobisrKTtcbiAgfVxuXG59XG5cbnZhciBSZWFjdEVkaXRvciA9IHtcbiAgLyoqXHJcbiAgICogUmV0dXJuIHRoZSBob3N0IHdpbmRvdyBvZiB0aGUgY3VycmVudCBlZGl0b3IuXHJcbiAgICovXG4gIGdldFdpbmRvdyhlZGl0b3IpIHtcbiAgICB2YXIgd2luZG93ID0gRURJVE9SX1RPX1dJTkRPVy5nZXQoZWRpdG9yKTtcblxuICAgIGlmICghd2luZG93KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBmaW5kIGEgaG9zdCB3aW5kb3cgZWxlbWVudCBmb3IgdGhpcyBlZGl0b3InKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2luZG93O1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEZpbmQgYSBrZXkgZm9yIGEgU2xhdGUgbm9kZS5cclxuICAgKi9cbiAgZmluZEtleShlZGl0b3IsIG5vZGUpIHtcbiAgICB2YXIga2V5ID0gTk9ERV9UT19LRVkuZ2V0KG5vZGUpO1xuXG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIGtleSA9IG5ldyBLZXkoKTtcbiAgICAgIE5PREVfVE9fS0VZLnNldChub2RlLCBrZXkpO1xuICAgIH1cblxuICAgIHJldHVybiBrZXk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogRmluZCB0aGUgcGF0aCBvZiBTbGF0ZSBub2RlLlxyXG4gICAqL1xuICBmaW5kUGF0aChlZGl0b3IsIG5vZGUpIHtcbiAgICB2YXIgcGF0aCA9IFtdO1xuICAgIHZhciBjaGlsZCA9IG5vZGU7XG5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIHBhcmVudCA9IE5PREVfVE9fUEFSRU5ULmdldChjaGlsZCk7XG5cbiAgICAgIGlmIChwYXJlbnQgPT0gbnVsbCkge1xuICAgICAgICBpZiAoRWRpdG9yLmlzRWRpdG9yKGNoaWxkKSkge1xuICAgICAgICAgIHJldHVybiBwYXRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpID0gTk9ERV9UT19JTkRFWC5nZXQoY2hpbGQpO1xuXG4gICAgICBpZiAoaSA9PSBudWxsKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBwYXRoLnVuc2hpZnQoaSk7XG4gICAgICBjaGlsZCA9IHBhcmVudDtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gZmluZCB0aGUgcGF0aCBmb3IgU2xhdGUgbm9kZTogXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KG5vZGUpKSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogRmluZCB0aGUgRE9NIG5vZGUgdGhhdCBpbXBsZW1lbnRzIERvY3VtZW50T3JTaGFkb3dSb290IGZvciB0aGUgZWRpdG9yLlxyXG4gICAqL1xuICBmaW5kRG9jdW1lbnRPclNoYWRvd1Jvb3QoZWRpdG9yKSB7XG4gICAgdmFyIGVsID0gUmVhY3RFZGl0b3IudG9ET01Ob2RlKGVkaXRvciwgZWRpdG9yKTtcbiAgICB2YXIgcm9vdCA9IGVsLmdldFJvb3ROb2RlKCk7XG5cbiAgICBpZiAoKHJvb3QgaW5zdGFuY2VvZiBEb2N1bWVudCB8fCByb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCkgJiYgcm9vdC5nZXRTZWxlY3Rpb24gIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsLm93bmVyRG9jdW1lbnQ7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgdGhlIGVkaXRvciBpcyBmb2N1c2VkLlxyXG4gICAqL1xuICBpc0ZvY3VzZWQoZWRpdG9yKSB7XG4gICAgcmV0dXJuICEhSVNfRk9DVVNFRC5nZXQoZWRpdG9yKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiB0aGUgZWRpdG9yIGlzIGluIHJlYWQtb25seSBtb2RlLlxyXG4gICAqL1xuICBpc1JlYWRPbmx5KGVkaXRvcikge1xuICAgIHJldHVybiAhIUlTX1JFQURfT05MWS5nZXQoZWRpdG9yKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBCbHVyIHRoZSBlZGl0b3IuXHJcbiAgICovXG4gIGJsdXIoZWRpdG9yKSB7XG4gICAgdmFyIGVsID0gUmVhY3RFZGl0b3IudG9ET01Ob2RlKGVkaXRvciwgZWRpdG9yKTtcbiAgICB2YXIgcm9vdCA9IFJlYWN0RWRpdG9yLmZpbmREb2N1bWVudE9yU2hhZG93Um9vdChlZGl0b3IpO1xuICAgIElTX0ZPQ1VTRUQuc2V0KGVkaXRvciwgZmFsc2UpO1xuXG4gICAgaWYgKHJvb3QuYWN0aXZlRWxlbWVudCA9PT0gZWwpIHtcbiAgICAgIGVsLmJsdXIoKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogRm9jdXMgdGhlIGVkaXRvci5cclxuICAgKi9cbiAgZm9jdXMoZWRpdG9yKSB7XG4gICAgdmFyIGVsID0gUmVhY3RFZGl0b3IudG9ET01Ob2RlKGVkaXRvciwgZWRpdG9yKTtcbiAgICB2YXIgcm9vdCA9IFJlYWN0RWRpdG9yLmZpbmREb2N1bWVudE9yU2hhZG93Um9vdChlZGl0b3IpO1xuICAgIElTX0ZPQ1VTRUQuc2V0KGVkaXRvciwgdHJ1ZSk7XG5cbiAgICBpZiAocm9vdC5hY3RpdmVFbGVtZW50ICE9PSBlbCkge1xuICAgICAgZWwuZm9jdXMoe1xuICAgICAgICBwcmV2ZW50U2Nyb2xsOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogRGVzZWxlY3QgdGhlIGVkaXRvci5cclxuICAgKi9cbiAgZGVzZWxlY3QoZWRpdG9yKSB7XG4gICAgdmFyIGVsID0gUmVhY3RFZGl0b3IudG9ET01Ob2RlKGVkaXRvciwgZWRpdG9yKTtcbiAgICB2YXIge1xuICAgICAgc2VsZWN0aW9uXG4gICAgfSA9IGVkaXRvcjtcbiAgICB2YXIgcm9vdCA9IFJlYWN0RWRpdG9yLmZpbmREb2N1bWVudE9yU2hhZG93Um9vdChlZGl0b3IpO1xuICAgIHZhciBkb21TZWxlY3Rpb24gPSByb290LmdldFNlbGVjdGlvbigpO1xuXG4gICAgaWYgKGRvbVNlbGVjdGlvbiAmJiBkb21TZWxlY3Rpb24ucmFuZ2VDb3VudCA+IDApIHtcbiAgICAgIGRvbVNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICBUcmFuc2Zvcm1zLmRlc2VsZWN0KGVkaXRvcik7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgRE9NIG5vZGUgaXMgd2l0aGluIHRoZSBlZGl0b3IuXHJcbiAgICovXG4gIGhhc0RPTU5vZGUoZWRpdG9yLCB0YXJnZXQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIHtcbiAgICAgIGVkaXRhYmxlID0gZmFsc2VcbiAgICB9ID0gb3B0aW9ucztcbiAgICB2YXIgZWRpdG9yRWwgPSBSZWFjdEVkaXRvci50b0RPTU5vZGUoZWRpdG9yLCBlZGl0b3IpO1xuICAgIHZhciB0YXJnZXRFbDsgLy8gQ09NUEFUOiBJbiBGaXJlZm94LCByZWFkaW5nIGB0YXJnZXQubm9kZVR5cGVgIHdpbGwgdGhyb3cgYW4gZXJyb3IgaWZcbiAgICAvLyB0YXJnZXQgaXMgb3JpZ2luYXRpbmcgZnJvbSBhbiBpbnRlcm5hbCBcInJlc3RyaWN0ZWRcIiBlbGVtZW50IChlLmcuIGFcbiAgICAvLyBzdGVwcGVyIGFycm93IG9uIGEgbnVtYmVyIGlucHV0KS4gKDIwMTgvMDUvMDQpXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2lhbnN0b3JtdGF5bG9yL3NsYXRlL2lzc3Vlcy8xODE5XG5cbiAgICB0cnkge1xuICAgICAgdGFyZ2V0RWwgPSBpc0RPTUVsZW1lbnQodGFyZ2V0KSA/IHRhcmdldCA6IHRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKCFlcnIubWVzc2FnZS5pbmNsdWRlcygnUGVybWlzc2lvbiBkZW5pZWQgdG8gYWNjZXNzIHByb3BlcnR5IFwibm9kZVR5cGVcIicpKSB7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRhcmdldEVsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldEVsLmNsb3Nlc3QoXCJbZGF0YS1zbGF0ZS1lZGl0b3JdXCIpID09PSBlZGl0b3JFbCAmJiAoIWVkaXRhYmxlIHx8IHRhcmdldEVsLmlzQ29udGVudEVkaXRhYmxlIHx8ICEhdGFyZ2V0RWwuZ2V0QXR0cmlidXRlKCdkYXRhLXNsYXRlLXplcm8td2lkdGgnKSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogSW5zZXJ0IGRhdGEgZnJvbSBhIGBEYXRhVHJhbnNmZXJgIGludG8gdGhlIGVkaXRvci5cclxuICAgKi9cbiAgaW5zZXJ0RGF0YShlZGl0b3IsIGRhdGEpIHtcbiAgICBlZGl0b3IuaW5zZXJ0RGF0YShkYXRhKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBTZXRzIGRhdGEgZnJvbSB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGZyYWdtZW50IG9uIGEgYERhdGFUcmFuc2ZlcmAuXHJcbiAgICovXG4gIHNldEZyYWdtZW50RGF0YShlZGl0b3IsIGRhdGEpIHtcbiAgICBlZGl0b3Iuc2V0RnJhZ21lbnREYXRhKGRhdGEpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEZpbmQgdGhlIG5hdGl2ZSBET00gZWxlbWVudCBmcm9tIGEgU2xhdGUgbm9kZS5cclxuICAgKi9cbiAgdG9ET01Ob2RlKGVkaXRvciwgbm9kZSkge1xuICAgIHZhciBkb21Ob2RlID0gRWRpdG9yLmlzRWRpdG9yKG5vZGUpID8gRURJVE9SX1RPX0VMRU1FTlQuZ2V0KGVkaXRvcikgOiBLRVlfVE9fRUxFTUVOVC5nZXQoUmVhY3RFZGl0b3IuZmluZEtleShlZGl0b3IsIG5vZGUpKTtcblxuICAgIGlmICghZG9tTm9kZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHJlc29sdmUgYSBET00gbm9kZSBmcm9tIFNsYXRlIG5vZGU6IFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShub2RlKSkpO1xuICAgIH1cblxuICAgIHJldHVybiBkb21Ob2RlO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEZpbmQgYSBuYXRpdmUgRE9NIHNlbGVjdGlvbiBwb2ludCBmcm9tIGEgU2xhdGUgcG9pbnQuXHJcbiAgICovXG4gIHRvRE9NUG9pbnQoZWRpdG9yLCBwb2ludCkge1xuICAgIHZhciBbbm9kZV0gPSBFZGl0b3Iubm9kZShlZGl0b3IsIHBvaW50LnBhdGgpO1xuICAgIHZhciBlbCA9IFJlYWN0RWRpdG9yLnRvRE9NTm9kZShlZGl0b3IsIG5vZGUpO1xuICAgIHZhciBkb21Qb2ludDsgLy8gSWYgd2UncmUgaW5zaWRlIGEgdm9pZCBub2RlLCBmb3JjZSB0aGUgb2Zmc2V0IHRvIDAsIG90aGVyd2lzZSB0aGUgemVyb1xuICAgIC8vIHdpZHRoIHNwYWNpbmcgY2hhcmFjdGVyIHdpbGwgcmVzdWx0IGluIGFuIGluY29ycmVjdCBvZmZzZXQgb2YgMVxuXG4gICAgaWYgKEVkaXRvci52b2lkKGVkaXRvciwge1xuICAgICAgYXQ6IHBvaW50XG4gICAgfSkpIHtcbiAgICAgIHBvaW50ID0ge1xuICAgICAgICBwYXRoOiBwb2ludC5wYXRoLFxuICAgICAgICBvZmZzZXQ6IDBcbiAgICAgIH07XG4gICAgfSAvLyBGb3IgZWFjaCBsZWFmLCB3ZSBuZWVkIHRvIGlzb2xhdGUgaXRzIGNvbnRlbnQsIHdoaWNoIG1lYW5zIGZpbHRlcmluZ1xuICAgIC8vIHRvIGl0cyBkaXJlY3QgdGV4dCBhbmQgemVyby13aWR0aCBzcGFucy4gKFdlIGhhdmUgdG8gZmlsdGVyIG91dCBhbnlcbiAgICAvLyBvdGhlciBzaWJsaW5ncyB0aGF0IG1heSBoYXZlIGJlZW4gcmVuZGVyZWQgYWxvbmdzaWRlIHRoZW0uKVxuXG5cbiAgICB2YXIgc2VsZWN0b3IgPSBcIltkYXRhLXNsYXRlLXN0cmluZ10sIFtkYXRhLXNsYXRlLXplcm8td2lkdGhdXCI7XG4gICAgdmFyIHRleHRzID0gQXJyYXkuZnJvbShlbC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG4gICAgdmFyIHN0YXJ0ID0gMDtcblxuICAgIGZvciAodmFyIHRleHQgb2YgdGV4dHMpIHtcbiAgICAgIHZhciBkb21Ob2RlID0gdGV4dC5jaGlsZE5vZGVzWzBdO1xuXG4gICAgICBpZiAoZG9tTm9kZSA9PSBudWxsIHx8IGRvbU5vZGUudGV4dENvbnRlbnQgPT0gbnVsbCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHtcbiAgICAgICAgbGVuZ3RoXG4gICAgICB9ID0gZG9tTm9kZS50ZXh0Q29udGVudDtcbiAgICAgIHZhciBhdHRyID0gdGV4dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xhdGUtbGVuZ3RoJyk7XG4gICAgICB2YXIgdHJ1ZUxlbmd0aCA9IGF0dHIgPT0gbnVsbCA/IGxlbmd0aCA6IHBhcnNlSW50KGF0dHIsIDEwKTtcbiAgICAgIHZhciBlbmQgPSBzdGFydCArIHRydWVMZW5ndGg7XG5cbiAgICAgIGlmIChwb2ludC5vZmZzZXQgPD0gZW5kKSB7XG4gICAgICAgIHZhciBvZmZzZXQgPSBNYXRoLm1pbihsZW5ndGgsIE1hdGgubWF4KDAsIHBvaW50Lm9mZnNldCAtIHN0YXJ0KSk7XG4gICAgICAgIGRvbVBvaW50ID0gW2RvbU5vZGUsIG9mZnNldF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBzdGFydCA9IGVuZDtcbiAgICB9XG5cbiAgICBpZiAoIWRvbVBvaW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcmVzb2x2ZSBhIERPTSBwb2ludCBmcm9tIFNsYXRlIHBvaW50OiBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkocG9pbnQpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvbVBvaW50O1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEZpbmQgYSBuYXRpdmUgRE9NIHJhbmdlIGZyb20gYSBTbGF0ZSBgcmFuZ2VgLlxyXG4gICAqXHJcbiAgICogTm90aWNlOiB0aGUgcmV0dXJuZWQgcmFuZ2Ugd2lsbCBhbHdheXMgYmUgb3JkaW5hbCByZWdhcmRsZXNzIG9mIHRoZSBkaXJlY3Rpb24gb2YgU2xhdGUgYHJhbmdlYCBkdWUgdG8gRE9NIEFQSSBsaW1pdC5cclxuICAgKlxyXG4gICAqIHRoZXJlIGlzIG5vIHdheSB0byBjcmVhdGUgYSByZXZlcnNlIERPTSBSYW5nZSB1c2luZyBSYW5nZS5zZXRTdGFydC9zZXRFbmRcclxuICAgKiBhY2NvcmRpbmcgdG8gaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LXJhbmdlLWJwLXNldC5cclxuICAgKi9cbiAgdG9ET01SYW5nZShlZGl0b3IsIHJhbmdlKSB7XG4gICAgdmFyIHtcbiAgICAgIGFuY2hvcixcbiAgICAgIGZvY3VzXG4gICAgfSA9IHJhbmdlO1xuICAgIHZhciBpc0JhY2t3YXJkID0gUmFuZ2UuaXNCYWNrd2FyZChyYW5nZSk7XG4gICAgdmFyIGRvbUFuY2hvciA9IFJlYWN0RWRpdG9yLnRvRE9NUG9pbnQoZWRpdG9yLCBhbmNob3IpO1xuICAgIHZhciBkb21Gb2N1cyA9IFJhbmdlLmlzQ29sbGFwc2VkKHJhbmdlKSA/IGRvbUFuY2hvciA6IFJlYWN0RWRpdG9yLnRvRE9NUG9pbnQoZWRpdG9yLCBmb2N1cyk7XG4gICAgdmFyIHdpbmRvdyA9IFJlYWN0RWRpdG9yLmdldFdpbmRvdyhlZGl0b3IpO1xuICAgIHZhciBkb21SYW5nZSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIHZhciBbc3RhcnROb2RlLCBzdGFydE9mZnNldF0gPSBpc0JhY2t3YXJkID8gZG9tRm9jdXMgOiBkb21BbmNob3I7XG4gICAgdmFyIFtlbmROb2RlLCBlbmRPZmZzZXRdID0gaXNCYWNrd2FyZCA/IGRvbUFuY2hvciA6IGRvbUZvY3VzOyAvLyBBIHNsYXRlIFBvaW50IGF0IHplcm8td2lkdGggTGVhZiBhbHdheXMgaGFzIGFuIG9mZnNldCBvZiAwIGJ1dCBhIG5hdGl2ZSBET00gc2VsZWN0aW9uIGF0XG4gICAgLy8gemVyby13aWR0aCBub2RlIGhhcyBhbiBvZmZzZXQgb2YgMSBzbyB3ZSBoYXZlIHRvIGNoZWNrIGlmIHdlIGFyZSBpbiBhIHplcm8td2lkdGggbm9kZSBhbmRcbiAgICAvLyBhZGp1c3QgdGhlIG9mZnNldCBhY2NvcmRpbmdseS5cblxuICAgIHZhciBzdGFydEVsID0gaXNET01FbGVtZW50KHN0YXJ0Tm9kZSkgPyBzdGFydE5vZGUgOiBzdGFydE5vZGUucGFyZW50RWxlbWVudDtcbiAgICB2YXIgaXNTdGFydEF0WmVyb1dpZHRoID0gISFzdGFydEVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGF0ZS16ZXJvLXdpZHRoJyk7XG4gICAgdmFyIGVuZEVsID0gaXNET01FbGVtZW50KGVuZE5vZGUpID8gZW5kTm9kZSA6IGVuZE5vZGUucGFyZW50RWxlbWVudDtcbiAgICB2YXIgaXNFbmRBdFplcm9XaWR0aCA9ICEhZW5kRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXNsYXRlLXplcm8td2lkdGgnKTtcbiAgICBkb21SYW5nZS5zZXRTdGFydChzdGFydE5vZGUsIGlzU3RhcnRBdFplcm9XaWR0aCA/IDEgOiBzdGFydE9mZnNldCk7XG4gICAgZG9tUmFuZ2Uuc2V0RW5kKGVuZE5vZGUsIGlzRW5kQXRaZXJvV2lkdGggPyAxIDogZW5kT2Zmc2V0KTtcbiAgICByZXR1cm4gZG9tUmFuZ2U7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogRmluZCBhIFNsYXRlIG5vZGUgZnJvbSBhIG5hdGl2ZSBET00gYGVsZW1lbnRgLlxyXG4gICAqL1xuICB0b1NsYXRlTm9kZShlZGl0b3IsIGRvbU5vZGUpIHtcbiAgICB2YXIgZG9tRWwgPSBpc0RPTUVsZW1lbnQoZG9tTm9kZSkgPyBkb21Ob2RlIDogZG9tTm9kZS5wYXJlbnRFbGVtZW50O1xuXG4gICAgaWYgKGRvbUVsICYmICFkb21FbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2xhdGUtbm9kZScpKSB7XG4gICAgICBkb21FbCA9IGRvbUVsLmNsb3Nlc3QoXCJbZGF0YS1zbGF0ZS1ub2RlXVwiKTtcbiAgICB9XG5cbiAgICB2YXIgbm9kZSA9IGRvbUVsID8gRUxFTUVOVF9UT19OT0RFLmdldChkb21FbCkgOiBudWxsO1xuXG4gICAgaWYgKCFub2RlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcmVzb2x2ZSBhIFNsYXRlIG5vZGUgZnJvbSBET00gbm9kZTogXCIuY29uY2F0KGRvbUVsKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSB0YXJnZXQgcmFuZ2UgZnJvbSBhIERPTSBgZXZlbnRgLlxyXG4gICAqL1xuICBmaW5kRXZlbnRSYW5nZShlZGl0b3IsIGV2ZW50KSB7XG4gICAgaWYgKCduYXRpdmVFdmVudCcgaW4gZXZlbnQpIHtcbiAgICAgIGV2ZW50ID0gZXZlbnQubmF0aXZlRXZlbnQ7XG4gICAgfVxuXG4gICAgdmFyIHtcbiAgICAgIGNsaWVudFg6IHgsXG4gICAgICBjbGllbnRZOiB5LFxuICAgICAgdGFyZ2V0XG4gICAgfSA9IGV2ZW50O1xuXG4gICAgaWYgKHggPT0gbnVsbCB8fCB5ID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCByZXNvbHZlIGEgU2xhdGUgcmFuZ2UgZnJvbSBhIERPTSBldmVudDogXCIuY29uY2F0KGV2ZW50KSk7XG4gICAgfVxuXG4gICAgdmFyIG5vZGUgPSBSZWFjdEVkaXRvci50b1NsYXRlTm9kZShlZGl0b3IsIGV2ZW50LnRhcmdldCk7XG4gICAgdmFyIHBhdGggPSBSZWFjdEVkaXRvci5maW5kUGF0aChlZGl0b3IsIG5vZGUpOyAvLyBJZiB0aGUgZHJvcCB0YXJnZXQgaXMgaW5zaWRlIGEgdm9pZCBub2RlLCBtb3ZlIGl0IGludG8gZWl0aGVyIHRoZVxuICAgIC8vIG5leHQgb3IgcHJldmlvdXMgbm9kZSwgZGVwZW5kaW5nIG9uIHdoaWNoIHNpZGUgdGhlIGB4YCBhbmQgYHlgXG4gICAgLy8gY29vcmRpbmF0ZXMgYXJlIGNsb3Nlc3QgdG8uXG5cbiAgICBpZiAoRWRpdG9yLmlzVm9pZChlZGl0b3IsIG5vZGUpKSB7XG4gICAgICB2YXIgcmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciBpc1ByZXYgPSBlZGl0b3IuaXNJbmxpbmUobm9kZSkgPyB4IC0gcmVjdC5sZWZ0IDwgcmVjdC5sZWZ0ICsgcmVjdC53aWR0aCAtIHggOiB5IC0gcmVjdC50b3AgPCByZWN0LnRvcCArIHJlY3QuaGVpZ2h0IC0geTtcbiAgICAgIHZhciBlZGdlID0gRWRpdG9yLnBvaW50KGVkaXRvciwgcGF0aCwge1xuICAgICAgICBlZGdlOiBpc1ByZXYgPyAnc3RhcnQnIDogJ2VuZCdcbiAgICAgIH0pO1xuICAgICAgdmFyIHBvaW50ID0gaXNQcmV2ID8gRWRpdG9yLmJlZm9yZShlZGl0b3IsIGVkZ2UpIDogRWRpdG9yLmFmdGVyKGVkaXRvciwgZWRnZSk7XG5cbiAgICAgIGlmIChwb2ludCkge1xuICAgICAgICB2YXIgX3JhbmdlID0gRWRpdG9yLnJhbmdlKGVkaXRvciwgcG9pbnQpO1xuXG4gICAgICAgIHJldHVybiBfcmFuZ2U7XG4gICAgICB9XG4gICAgfSAvLyBFbHNlIHJlc29sdmUgYSByYW5nZSBmcm9tIHRoZSBjYXJldCBwb3NpdGlvbiB3aGVyZSB0aGUgZHJvcCBvY2N1cmVkLlxuXG5cbiAgICB2YXIgZG9tUmFuZ2U7XG4gICAgdmFyIHtcbiAgICAgIGRvY3VtZW50XG4gICAgfSA9IHdpbmRvdzsgLy8gQ09NUEFUOiBJbiBGaXJlZm94LCBgY2FyZXRSYW5nZUZyb21Qb2ludGAgZG9lc24ndCBleGlzdC4gKDIwMTYvMDcvMjUpXG5cbiAgICBpZiAoZG9jdW1lbnQuY2FyZXRSYW5nZUZyb21Qb2ludCkge1xuICAgICAgZG9tUmFuZ2UgPSBkb2N1bWVudC5jYXJldFJhbmdlRnJvbVBvaW50KHgsIHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcG9zaXRpb24gPSBkb2N1bWVudC5jYXJldFBvc2l0aW9uRnJvbVBvaW50KHgsIHkpO1xuXG4gICAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgICAgZG9tUmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgICAgICBkb21SYW5nZS5zZXRTdGFydChwb3NpdGlvbi5vZmZzZXROb2RlLCBwb3NpdGlvbi5vZmZzZXQpO1xuICAgICAgICBkb21SYW5nZS5zZXRFbmQocG9zaXRpb24ub2Zmc2V0Tm9kZSwgcG9zaXRpb24ub2Zmc2V0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWRvbVJhbmdlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcmVzb2x2ZSBhIFNsYXRlIHJhbmdlIGZyb20gYSBET00gZXZlbnQ6IFwiLmNvbmNhdChldmVudCkpO1xuICAgIH0gLy8gUmVzb2x2ZSBhIFNsYXRlIHJhbmdlIGZyb20gdGhlIERPTSByYW5nZS5cblxuXG4gICAgdmFyIHJhbmdlID0gUmVhY3RFZGl0b3IudG9TbGF0ZVJhbmdlKGVkaXRvciwgZG9tUmFuZ2UsIHtcbiAgICAgIGV4YWN0TWF0Y2g6IGZhbHNlXG4gICAgfSk7XG4gICAgcmV0dXJuIHJhbmdlO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEZpbmQgYSBTbGF0ZSBwb2ludCBmcm9tIGEgRE9NIHNlbGVjdGlvbidzIGBkb21Ob2RlYCBhbmQgYGRvbU9mZnNldGAuXHJcbiAgICovXG4gIHRvU2xhdGVQb2ludChlZGl0b3IsIGRvbVBvaW50LCBleGFjdE1hdGNoKSB7XG4gICAgdmFyIFtuZWFyZXN0Tm9kZSwgbmVhcmVzdE9mZnNldF0gPSBleGFjdE1hdGNoID8gZG9tUG9pbnQgOiBub3JtYWxpemVET01Qb2ludChkb21Qb2ludCk7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBuZWFyZXN0Tm9kZS5wYXJlbnROb2RlO1xuICAgIHZhciB0ZXh0Tm9kZSA9IG51bGw7XG4gICAgdmFyIG9mZnNldCA9IDA7XG5cbiAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgdmFyIHZvaWROb2RlID0gcGFyZW50Tm9kZS5jbG9zZXN0KCdbZGF0YS1zbGF0ZS12b2lkPVwidHJ1ZVwiXScpO1xuICAgICAgdmFyIGxlYWZOb2RlID0gcGFyZW50Tm9kZS5jbG9zZXN0KCdbZGF0YS1zbGF0ZS1sZWFmXScpO1xuICAgICAgdmFyIGRvbU5vZGUgPSBudWxsOyAvLyBDYWxjdWxhdGUgaG93IGZhciBpbnRvIHRoZSB0ZXh0IG5vZGUgdGhlIGBuZWFyZXN0Tm9kZWAgaXMsIHNvIHRoYXQgd2VcbiAgICAgIC8vIGNhbiBkZXRlcm1pbmUgd2hhdCB0aGUgb2Zmc2V0IHJlbGF0aXZlIHRvIHRoZSB0ZXh0IG5vZGUgaXMuXG5cbiAgICAgIGlmIChsZWFmTm9kZSkge1xuICAgICAgICB0ZXh0Tm9kZSA9IGxlYWZOb2RlLmNsb3Nlc3QoJ1tkYXRhLXNsYXRlLW5vZGU9XCJ0ZXh0XCJdJyk7XG5cbiAgICAgICAgdmFyIF93aW5kb3cgPSBSZWFjdEVkaXRvci5nZXRXaW5kb3coZWRpdG9yKTtcblxuICAgICAgICB2YXIgcmFuZ2UgPSBfd2luZG93LmRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG5cbiAgICAgICAgcmFuZ2Uuc2V0U3RhcnQodGV4dE5vZGUsIDApO1xuICAgICAgICByYW5nZS5zZXRFbmQobmVhcmVzdE5vZGUsIG5lYXJlc3RPZmZzZXQpO1xuICAgICAgICB2YXIgY29udGVudHMgPSByYW5nZS5jbG9uZUNvbnRlbnRzKCk7XG4gICAgICAgIHZhciByZW1vdmFscyA9IFsuLi5BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjb250ZW50cy5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zbGF0ZS16ZXJvLXdpZHRoXScpKSwgLi4uQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoY29udGVudHMucXVlcnlTZWxlY3RvckFsbCgnW2NvbnRlbnRlZGl0YWJsZT1mYWxzZV0nKSldO1xuICAgICAgICByZW1vdmFscy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgICAgICAgfSk7IC8vIENPTVBBVDogRWRnZSBoYXMgYSBidWcgd2hlcmUgUmFuZ2UucHJvdG90eXBlLnRvU3RyaW5nKCkgd2lsbFxuICAgICAgICAvLyBjb252ZXJ0IFxcbiBpbnRvIFxcclxcbi4gVGhlIGJ1ZyBjYXVzZXMgYSBsb29wIHdoZW4gc2xhdGUtcmVhY3RcbiAgICAgICAgLy8gYXR0ZW1wdHMgdG8gcmVwb3NpdGlvbiBpdHMgY3Vyc29yIHRvIG1hdGNoIHRoZSBuYXRpdmUgcG9zaXRpb24uIFVzZVxuICAgICAgICAvLyB0ZXh0Q29udGVudC5sZW5ndGggaW5zdGVhZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTAyOTExMTYvXG5cbiAgICAgICAgb2Zmc2V0ID0gY29udGVudHMudGV4dENvbnRlbnQubGVuZ3RoO1xuICAgICAgICBkb21Ob2RlID0gdGV4dE5vZGU7XG4gICAgICB9IGVsc2UgaWYgKHZvaWROb2RlKSB7XG4gICAgICAgIC8vIEZvciB2b2lkIG5vZGVzLCB0aGUgZWxlbWVudCB3aXRoIHRoZSBvZmZzZXQga2V5IHdpbGwgYmUgYSBjb3VzaW4sIG5vdCBhblxuICAgICAgICAvLyBhbmNlc3Rvciwgc28gZmluZCBpdCBieSBnb2luZyBkb3duIGZyb20gdGhlIG5lYXJlc3Qgdm9pZCBwYXJlbnQuXG4gICAgICAgIGxlYWZOb2RlID0gdm9pZE5vZGUucXVlcnlTZWxlY3RvcignW2RhdGEtc2xhdGUtbGVhZl0nKTsgLy8gQ09NUEFUOiBJbiByZWFkLW9ubHkgZWRpdG9ycyB0aGUgbGVhZiBpcyBub3QgcmVuZGVyZWQuXG5cbiAgICAgICAgaWYgKCFsZWFmTm9kZSkge1xuICAgICAgICAgIG9mZnNldCA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGV4dE5vZGUgPSBsZWFmTm9kZS5jbG9zZXN0KCdbZGF0YS1zbGF0ZS1ub2RlPVwidGV4dFwiXScpO1xuICAgICAgICAgIGRvbU5vZGUgPSBsZWFmTm9kZTtcbiAgICAgICAgICBvZmZzZXQgPSBkb21Ob2RlLnRleHRDb250ZW50Lmxlbmd0aDtcbiAgICAgICAgICBkb21Ob2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNsYXRlLXplcm8td2lkdGhdJykuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICBvZmZzZXQgLT0gZWwudGV4dENvbnRlbnQubGVuZ3RoO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IC8vIENPTVBBVDogSWYgdGhlIHBhcmVudCBub2RlIGlzIGEgU2xhdGUgemVyby13aWR0aCBzcGFjZSwgZWRpdG9yIGlzXG4gICAgICAvLyBiZWNhdXNlIHRoZSB0ZXh0IG5vZGUgc2hvdWxkIGhhdmUgbm8gY2hhcmFjdGVycy4gSG93ZXZlciwgZHVyaW5nIElNRVxuICAgICAgLy8gY29tcG9zaXRpb24gdGhlIEFTQ0lJIGNoYXJhY3RlcnMgd2lsbCBiZSBwcmVwZW5kZWQgdG8gdGhlIHplcm8td2lkdGhcbiAgICAgIC8vIHNwYWNlLCBzbyBzdWJ0cmFjdCAxIGZyb20gdGhlIG9mZnNldCB0byBhY2NvdW50IGZvciB0aGUgemVyby13aWR0aFxuICAgICAgLy8gc3BhY2UgY2hhcmFjdGVyLlxuXG5cbiAgICAgIGlmIChkb21Ob2RlICYmIG9mZnNldCA9PT0gZG9tTm9kZS50ZXh0Q29udGVudC5sZW5ndGggJiYgcGFyZW50Tm9kZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2xhdGUtemVyby13aWR0aCcpKSB7XG4gICAgICAgIG9mZnNldC0tO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGV4dE5vZGUpIHtcbiAgICAgIGlmIChleGFjdE1hdGNoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcmVzb2x2ZSBhIFNsYXRlIHBvaW50IGZyb20gRE9NIHBvaW50OiBcIi5jb25jYXQoZG9tUG9pbnQpKTtcbiAgICB9IC8vIENPTVBBVDogSWYgc29tZW9uZSBpcyBjbGlja2luZyBmcm9tIG9uZSBTbGF0ZSBlZGl0b3IgaW50byBhbm90aGVyLFxuICAgIC8vIHRoZSBzZWxlY3QgZXZlbnQgZmlyZXMgdHdpY2UsIG9uY2UgZm9yIHRoZSBvbGQgZWRpdG9yJ3MgYGVsZW1lbnRgXG4gICAgLy8gZmlyc3QsIGFuZCB0aGVuIGFmdGVyd2FyZHMgZm9yIHRoZSBjb3JyZWN0IGBlbGVtZW50YC4gKDIwMTcvMDMvMDMpXG5cblxuICAgIHZhciBzbGF0ZU5vZGUgPSBSZWFjdEVkaXRvci50b1NsYXRlTm9kZShlZGl0b3IsIHRleHROb2RlKTtcbiAgICB2YXIgcGF0aCA9IFJlYWN0RWRpdG9yLmZpbmRQYXRoKGVkaXRvciwgc2xhdGVOb2RlKTtcbiAgICByZXR1cm4ge1xuICAgICAgcGF0aCxcbiAgICAgIG9mZnNldFxuICAgIH07XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogRmluZCBhIFNsYXRlIHJhbmdlIGZyb20gYSBET00gcmFuZ2Ugb3Igc2VsZWN0aW9uLlxyXG4gICAqL1xuICB0b1NsYXRlUmFuZ2UoZWRpdG9yLCBkb21SYW5nZSwgb3B0aW9ucykge1xuICAgIHZhciB7XG4gICAgICBleGFjdE1hdGNoXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgdmFyIGVsID0gaXNET01TZWxlY3Rpb24oZG9tUmFuZ2UpID8gZG9tUmFuZ2UuYW5jaG9yTm9kZSA6IGRvbVJhbmdlLnN0YXJ0Q29udGFpbmVyO1xuICAgIHZhciBhbmNob3JOb2RlO1xuICAgIHZhciBhbmNob3JPZmZzZXQ7XG4gICAgdmFyIGZvY3VzTm9kZTtcbiAgICB2YXIgZm9jdXNPZmZzZXQ7XG4gICAgdmFyIGlzQ29sbGFwc2VkO1xuXG4gICAgaWYgKGVsKSB7XG4gICAgICBpZiAoaXNET01TZWxlY3Rpb24oZG9tUmFuZ2UpKSB7XG4gICAgICAgIGFuY2hvck5vZGUgPSBkb21SYW5nZS5hbmNob3JOb2RlO1xuICAgICAgICBhbmNob3JPZmZzZXQgPSBkb21SYW5nZS5hbmNob3JPZmZzZXQ7XG4gICAgICAgIGZvY3VzTm9kZSA9IGRvbVJhbmdlLmZvY3VzTm9kZTtcbiAgICAgICAgZm9jdXNPZmZzZXQgPSBkb21SYW5nZS5mb2N1c09mZnNldDsgLy8gQ09NUEFUOiBUaGVyZSdzIGEgYnVnIGluIGNocm9tZSB0aGF0IGFsd2F5cyByZXR1cm5zIGB0cnVlYCBmb3JcbiAgICAgICAgLy8gYGlzQ29sbGFwc2VkYCBmb3IgYSBTZWxlY3Rpb24gdGhhdCBjb21lcyBmcm9tIGEgU2hhZG93Um9vdC5cbiAgICAgICAgLy8gKDIwMjAvMDgvMDgpXG4gICAgICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ0NzUyM1xuXG4gICAgICAgIGlmIChJU19DSFJPTUUgJiYgaGFzU2hhZG93Um9vdCgpKSB7XG4gICAgICAgICAgaXNDb2xsYXBzZWQgPSBkb21SYW5nZS5hbmNob3JOb2RlID09PSBkb21SYW5nZS5mb2N1c05vZGUgJiYgZG9tUmFuZ2UuYW5jaG9yT2Zmc2V0ID09PSBkb21SYW5nZS5mb2N1c09mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpc0NvbGxhcHNlZCA9IGRvbVJhbmdlLmlzQ29sbGFwc2VkO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbmNob3JOb2RlID0gZG9tUmFuZ2Uuc3RhcnRDb250YWluZXI7XG4gICAgICAgIGFuY2hvck9mZnNldCA9IGRvbVJhbmdlLnN0YXJ0T2Zmc2V0O1xuICAgICAgICBmb2N1c05vZGUgPSBkb21SYW5nZS5lbmRDb250YWluZXI7XG4gICAgICAgIGZvY3VzT2Zmc2V0ID0gZG9tUmFuZ2UuZW5kT2Zmc2V0O1xuICAgICAgICBpc0NvbGxhcHNlZCA9IGRvbVJhbmdlLmNvbGxhcHNlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYW5jaG9yTm9kZSA9PSBudWxsIHx8IGZvY3VzTm9kZSA9PSBudWxsIHx8IGFuY2hvck9mZnNldCA9PSBudWxsIHx8IGZvY3VzT2Zmc2V0ID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCByZXNvbHZlIGEgU2xhdGUgcmFuZ2UgZnJvbSBET00gcmFuZ2U6IFwiLmNvbmNhdChkb21SYW5nZSkpO1xuICAgIH1cblxuICAgIHZhciBhbmNob3IgPSBSZWFjdEVkaXRvci50b1NsYXRlUG9pbnQoZWRpdG9yLCBbYW5jaG9yTm9kZSwgYW5jaG9yT2Zmc2V0XSwgZXhhY3RNYXRjaCk7XG5cbiAgICBpZiAoIWFuY2hvcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGZvY3VzID0gaXNDb2xsYXBzZWQgPyBhbmNob3IgOiBSZWFjdEVkaXRvci50b1NsYXRlUG9pbnQoZWRpdG9yLCBbZm9jdXNOb2RlLCBmb2N1c09mZnNldF0sIGV4YWN0TWF0Y2gpO1xuXG4gICAgaWYgKCFmb2N1cykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFuY2hvcixcbiAgICAgIGZvY3VzXG4gICAgfTtcbiAgfSxcblxuICBoYXNSYW5nZShlZGl0b3IsIHJhbmdlKSB7XG4gICAgdmFyIHtcbiAgICAgIGFuY2hvcixcbiAgICAgIGZvY3VzXG4gICAgfSA9IHJhbmdlO1xuICAgIHJldHVybiBFZGl0b3IuaGFzUGF0aChlZGl0b3IsIGFuY2hvci5wYXRoKSAmJiBFZGl0b3IuaGFzUGF0aChlZGl0b3IsIGZvY3VzLnBhdGgpO1xuICB9XG5cbn07XG5cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyB0aGF0IGFyZSB0aGUgc2FtZSBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZVxyXG4gKiBTdHJpbmcuXHJcbiAqXHJcbiAqIEBwYXJhbSBwcmV2ICB0aGUgcHJldmlvdXMgdGV4dFxyXG4gKiBAcGFyYW0gbmV4dCAgdGhlIG5leHQgdGV4dFxyXG4gKiBAcmV0dXJucyB0aGUgb2Zmc2V0IG9mIHRoZSBzdGFydCBvZiB0aGUgZGlmZmVyZW5jZTsgbnVsbCBpZiB0aGVyZSBpcyBubyBkaWZmZXJlbmNlXHJcbiAqL1xuXG5mdW5jdGlvbiBnZXREaWZmU3RhcnQocHJldiwgbmV4dCkge1xuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4ocHJldi5sZW5ndGgsIG5leHQubGVuZ3RoKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHByZXYuY2hhckF0KGkpICE9PSBuZXh0LmNoYXJBdChpKSkgcmV0dXJuIGk7XG4gIH1cblxuICBpZiAocHJldi5sZW5ndGggIT09IG5leHQubGVuZ3RoKSByZXR1cm4gbGVuZ3RoO1xuICByZXR1cm4gbnVsbDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyB0aGF0IGFyZSB0aGUgc2FtZSBhdCB0aGUgZW5kIG9mIHRoZSBTdHJpbmdcclxuICogdXAgdG8gYG1heGAuIE1heCBwcmV2ZW50cyBkb3VibGUtY291bnRpbmcgY2hhcmFjdGVycyB3aGVuIHRoZXJlIGFyZVxyXG4gKiBtdWx0aXBsZSBkdXBsaWNhdGUgY2hhcmFjdGVycyBhcm91bmQgdGhlIGRpZmYgYXJlYS5cclxuICpcclxuICogQHBhcmFtIHByZXYgIHRoZSBwcmV2aW91cyB0ZXh0XHJcbiAqIEBwYXJhbSBuZXh0ICB0aGUgbmV4dCB0ZXh0XHJcbiAqIEBwYXJhbSBtYXggIHRoZSBtYXggbGVuZ3RoIHRvIHRlc3QuXHJcbiAqIEByZXR1cm5zIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgYXJlIHRoZSBzYW1lIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZ1xyXG4gKi9cblxuXG5mdW5jdGlvbiBnZXREaWZmRW5kKHByZXYsIG5leHQsIG1heCkge1xuICB2YXIgcHJldkxlbmd0aCA9IHByZXYubGVuZ3RoO1xuICB2YXIgbmV4dExlbmd0aCA9IG5leHQubGVuZ3RoO1xuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4ocHJldkxlbmd0aCwgbmV4dExlbmd0aCwgbWF4KTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHByZXZDaGFyID0gcHJldi5jaGFyQXQocHJldkxlbmd0aCAtIGkgLSAxKTtcbiAgICB2YXIgbmV4dENoYXIgPSBuZXh0LmNoYXJBdChuZXh0TGVuZ3RoIC0gaSAtIDEpO1xuICAgIGlmIChwcmV2Q2hhciAhPT0gbmV4dENoYXIpIHJldHVybiBpO1xuICB9XG5cbiAgaWYgKHByZXYubGVuZ3RoICE9PSBuZXh0Lmxlbmd0aCkgcmV0dXJuIGxlbmd0aDtcbiAgcmV0dXJuIG51bGw7XG59XG4vKipcclxuICogVGFrZXMgdHdvIHN0cmluZ3MgYW5kIHJldHVybnMgYW4gb2JqZWN0IHJlcHJlc2VudGluZyB0d28gb2Zmc2V0cy4gVGhlXHJcbiAqIGZpcnN0LCBgc3RhcnRgIHJlcHJlc2VudHMgdGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgYXJlIHRoZSBzYW1lIGF0XHJcbiAqIHRoZSBmcm9udCBvZiB0aGUgU3RyaW5nLiBUaGUgYGVuZGAgcmVwcmVzZW50cyB0aGUgbnVtYmVyIG9mIGNoYXJhY3RlcnNcclxuICogdGhhdCBhcmUgdGhlIHNhbWUgYXQgdGhlIGVuZCBvZiB0aGUgU3RyaW5nLlxyXG4gKlxyXG4gKiBSZXR1cm5zIG51bGwgaWYgdGhleSBhcmUgaWRlbnRpY2FsLlxyXG4gKlxyXG4gKiBAcGFyYW0gcHJldiAgdGhlIHByZXZpb3VzIHRleHRcclxuICogQHBhcmFtIG5leHQgIHRoZSBuZXh0IHRleHRcclxuICogQHJldHVybnMgdGhlIGRpZmZlcmVuY2UgdGV4dCByYW5nZTsgbnVsbCBpZiB0aGVyZSBhcmUgbm8gZGlmZmVyZW5jZXMuXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldERpZmZPZmZzZXRzKHByZXYsIG5leHQpIHtcbiAgaWYgKHByZXYgPT09IG5leHQpIHJldHVybiBudWxsO1xuICB2YXIgc3RhcnQgPSBnZXREaWZmU3RhcnQocHJldiwgbmV4dCk7XG4gIGlmIChzdGFydCA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gIHZhciBtYXhFbmQgPSBNYXRoLm1pbihwcmV2Lmxlbmd0aCAtIHN0YXJ0LCBuZXh0Lmxlbmd0aCAtIHN0YXJ0KTtcbiAgdmFyIGVuZCA9IGdldERpZmZFbmQocHJldiwgbmV4dCwgbWF4RW5kKTtcbiAgaWYgKGVuZCA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gIHJldHVybiB7XG4gICAgc3RhcnQsXG4gICAgZW5kXG4gIH07XG59XG4vKipcclxuICogVGFrZXMgYSB0ZXh0IHN0cmluZyBhbmQgcmV0dXJucyBhIHNsaWNlIGZyb20gdGhlIHN0cmluZyBhdCB0aGUgZ2l2ZW4gdGV4dCByYW5nZVxyXG4gKlxyXG4gKiBAcGFyYW0gdGV4dCAgdGhlIHRleHRcclxuICogQHBhcmFtIG9mZnNldHMgIHRoZSB0ZXh0IHJhbmdlXHJcbiAqIEByZXR1cm5zIHRoZSB0ZXh0IHNsaWNlIGF0IHRleHQgcmFuZ2VcclxuICovXG5cblxuZnVuY3Rpb24gc2xpY2VUZXh0KHRleHQsIG9mZnNldHMpIHtcbiAgcmV0dXJuIHRleHQuc2xpY2Uob2Zmc2V0cy5zdGFydCwgdGV4dC5sZW5ndGggLSBvZmZzZXRzLmVuZCk7XG59XG4vKipcclxuICogVGFrZXMgdHdvIHN0cmluZ3MgYW5kIHJldHVybnMgYSBzbWFydCBkaWZmIHRoYXQgY2FuIGJlIHVzZWQgdG8gZGVzY3JpYmUgdGhlXHJcbiAqIGNoYW5nZSBpbiBhIHdheSB0aGF0IGNhbiBiZSB1c2VkIGFzIG9wZXJhdGlvbnMgbGlrZSBpbnNlcnRpbmcsIHJlbW92aW5nIG9yXHJcbiAqIHJlcGxhY2luZyB0ZXh0LlxyXG4gKlxyXG4gKiBAcGFyYW0gcHJldiB0aGUgcHJldmlvdXMgdGV4dFxyXG4gKiBAcGFyYW0gbmV4dCB0aGUgbmV4dCB0ZXh0XHJcbiAqIEByZXR1cm5zIHRoZSB0ZXh0IGRpZmZlcmVuY2VcclxuICovXG5cblxuZnVuY3Rpb24gZGlmZlRleHQocHJldiwgbmV4dCkge1xuICBpZiAocHJldiA9PT0gdW5kZWZpbmVkIHx8IG5leHQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XG4gIHZhciBvZmZzZXRzID0gZ2V0RGlmZk9mZnNldHMocHJldiwgbmV4dCk7XG4gIGlmIChvZmZzZXRzID09IG51bGwpIHJldHVybiBudWxsO1xuICB2YXIgaW5zZXJ0VGV4dCA9IHNsaWNlVGV4dChuZXh0LCBvZmZzZXRzKTtcbiAgdmFyIHJlbW92ZVRleHQgPSBzbGljZVRleHQocHJldiwgb2Zmc2V0cyk7XG4gIHJldHVybiB7XG4gICAgc3RhcnQ6IG9mZnNldHMuc3RhcnQsXG4gICAgZW5kOiBwcmV2Lmxlbmd0aCAtIG9mZnNldHMuZW5kLFxuICAgIGluc2VydFRleHQsXG4gICAgcmVtb3ZlVGV4dFxuICB9O1xufVxuZnVuY3Rpb24gY29tYmluZUluc2VydGVkVGV4dChpbnNlcnRlZFRleHQpIHtcbiAgcmV0dXJuIGluc2VydGVkVGV4dC5yZWR1Y2UoKGFjYywgX3JlZikgPT4ge1xuICAgIHZhciB7XG4gICAgICB0ZXh0XG4gICAgfSA9IF9yZWY7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KGFjYykuY29uY2F0KHRleHQuaW5zZXJ0VGV4dCk7XG4gIH0sICcnKTtcbn1cbmZ1bmN0aW9uIGdldFRleHRJbnNlcnRpb24oZWRpdG9yLCBkb21Ob2RlKSB7XG4gIHZhciBub2RlID0gUmVhY3RFZGl0b3IudG9TbGF0ZU5vZGUoZWRpdG9yLCBkb21Ob2RlKTtcblxuICBpZiAoIVRleHQkMS5pc1RleHQobm9kZSkpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgdmFyIHByZXZUZXh0ID0gbm9kZS50ZXh0O1xuICB2YXIgbmV4dFRleHQgPSBkb21Ob2RlLnRleHRDb250ZW50OyAvLyB0ZXh0Q29udGVudCB3aWxsIHBhZCBhbiBleHRyYSBcXG4gd2hlbiB0aGUgdGV4dENvbnRlbnQgZW5kcyB3aXRoIGFuIFxcblxuXG4gIGlmIChuZXh0VGV4dC5lbmRzV2l0aCgnXFxuJykpIHtcbiAgICBuZXh0VGV4dCA9IG5leHRUZXh0LnNsaWNlKDAsIG5leHRUZXh0Lmxlbmd0aCAtIDEpO1xuICB9IC8vIElmIHRoZSB0ZXh0IGlzIG5vIGRpZmZlcmVudCwgdGhlcmUgaXMgbm8gZGlmZi5cblxuXG4gIGlmIChuZXh0VGV4dCAhPT0gcHJldlRleHQpIHtcbiAgICB2YXIgdGV4dERpZmYgPSBkaWZmVGV4dChwcmV2VGV4dCwgbmV4dFRleHQpO1xuXG4gICAgaWYgKHRleHREaWZmICE9PSBudWxsKSB7XG4gICAgICB2YXIgdGV4dFBhdGggPSBSZWFjdEVkaXRvci5maW5kUGF0aChlZGl0b3IsIG5vZGUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogdGV4dERpZmYsXG4gICAgICAgIHBhdGg6IHRleHRQYXRoXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBub3JtYWxpemVUZXh0SW5zZXJ0aW9uUmFuZ2UoZWRpdG9yLCByYW5nZSwgX3JlZjIpIHtcbiAgdmFyIHtcbiAgICBwYXRoLFxuICAgIHRleHRcbiAgfSA9IF9yZWYyO1xuICB2YXIgaW5zZXJ0aW9uUmFuZ2UgPSB7XG4gICAgYW5jaG9yOiB7XG4gICAgICBwYXRoLFxuICAgICAgb2Zmc2V0OiB0ZXh0LnN0YXJ0XG4gICAgfSxcbiAgICBmb2N1czoge1xuICAgICAgcGF0aCxcbiAgICAgIG9mZnNldDogdGV4dC5lbmRcbiAgICB9XG4gIH07XG5cbiAgaWYgKCFyYW5nZSB8fCAhUmFuZ2UuaXNDb2xsYXBzZWQocmFuZ2UpKSB7XG4gICAgcmV0dXJuIGluc2VydGlvblJhbmdlO1xuICB9XG5cbiAgdmFyIHtcbiAgICBpbnNlcnRUZXh0LFxuICAgIHJlbW92ZVRleHRcbiAgfSA9IHRleHQ7XG4gIHZhciBpc1NpbmdsZUNoYXJhY3Rlckluc2VydGlvbiA9IGluc2VydFRleHQubGVuZ3RoID09PSAxIHx8IHJlbW92ZVRleHQubGVuZ3RoID09PSAxO1xuICAvKipcclxuICAgKiBUaGlzIGNvZGUgaGFuZGxlcyBlZGdlIGNhc2VzIHRoYXQgYXJpc2UgZnJvbSB0ZXh0IGRpZmZpbmcgd2hlbiB0aGVcclxuICAgKiBpbnNlcnRlZCBvciByZW1vdmVkIGNoYXJhY3RlciBpcyBhIHNpbmdsZSBjaGFyYWN0ZXIsIGFuZCB0aGUgY2hhcmFjdGVyXHJcbiAgICogcmlnaHQgYmVmb3JlIG9yIGFmdGVyIHRoZSBhbmNob3IgaXMgdGhlIHNhbWUgYXMgdGhlIG9uZSBiZWluZyBpbnNlcnRlZCBvclxyXG4gICAqIHJlbW92ZWQuXHJcbiAgICpcclxuICAgKiBUYWtlIHRoaXMgZXhhbXBsZTogaGVsbG98b1xyXG4gICAqXHJcbiAgICogSWYgYW5vdGhlciBgb2AgaXMgaW5zZXJ0ZWQgYXQgdGhlIHNlbGVjdGlvbidzIGFuY2hvciBpbiB0aGUgZXhhbXBsZSBhYm92ZSxcclxuICAgKiBpdCBzaG91bGQgYmUgaW5zZXJ0ZWQgYXQgdGhlIGFuY2hvciwgYnV0IHVzaW5nIHRleHQgZGlmZmluZywgd2UgYWN0dWFsbHlcclxuICAgKiBkZXRlY3QgdGhhdCB0aGUgY2hhcmFjdGVyIHdhcyBpbnNlcnRlZCBhZnRlciB0aGUgc2Vjb25kIGBvYDpcclxuICAgKlxyXG4gICAqIGhlbGxvb1tvXXxcclxuICAgKlxyXG4gICAqIEluc3RlYWQsIGluIHRoZXNlIHZlcnkgc3BlY2lmaWMgZWRnZSBjYXNlcywgd2UgYXNzdW1lIHRoYXQgdGhlIGNoYXJhY3RlclxyXG4gICAqIG5lZWRzIHRvIGJlIGluc2VydGVkIGFmdGVyIHRoZSBhbmNob3IgcmF0aGVyIHRoYW4gd2hlcmUgdGhlIGRpZmYgd2FzIGZvdW5kOlxyXG4gICAqXHJcbiAgICogaGVsbG9bb118b1xyXG4gICAqL1xuXG4gIGlmIChpc1NpbmdsZUNoYXJhY3Rlckluc2VydGlvbiAmJiBQYXRoLmVxdWFscyhyYW5nZS5hbmNob3IucGF0aCwgcGF0aCkpIHtcbiAgICB2YXIgW190ZXh0XSA9IEFycmF5LmZyb20oRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgYXQ6IHJhbmdlLFxuICAgICAgbWF0Y2g6IFRleHQkMS5pc1RleHRcbiAgICB9KSk7XG5cbiAgICBpZiAoX3RleHQpIHtcbiAgICAgIHZhciBbbm9kZV0gPSBfdGV4dDtcbiAgICAgIHZhciB7XG4gICAgICAgIGFuY2hvclxuICAgICAgfSA9IHJhbmdlO1xuICAgICAgdmFyIGNoYXJhY3RlckJlZm9yZUFuY2hvciA9IG5vZGUudGV4dFthbmNob3Iub2Zmc2V0IC0gMV07XG4gICAgICB2YXIgY2hhcmFjdGVyQWZ0ZXJBbmNob3IgPSBub2RlLnRleHRbYW5jaG9yLm9mZnNldF07XG5cbiAgICAgIGlmIChpbnNlcnRUZXh0Lmxlbmd0aCA9PT0gMSAmJiBpbnNlcnRUZXh0ID09PSBjaGFyYWN0ZXJBZnRlckFuY2hvcikge1xuICAgICAgICAvLyBBc3N1bWUgdGV4dCBzaG91bGQgYmUgaW5zZXJ0ZWQgYXQgdGhlIGFuY2hvclxuICAgICAgICByZXR1cm4gcmFuZ2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZW1vdmVUZXh0Lmxlbmd0aCA9PT0gMSAmJiByZW1vdmVUZXh0ID09PSBjaGFyYWN0ZXJCZWZvcmVBbmNob3IpIHtcbiAgICAgICAgLy8gQXNzdW1lIHRleHQgc2hvdWxkIGJlIHJlbW92ZWQgcmlnaHQgYmVmb3JlIHRoZSBhbmNob3JcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBvZmZzZXQ6IGFuY2hvci5vZmZzZXQgLSAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb2N1czoge1xuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIG9mZnNldDogYW5jaG9yLm9mZnNldFxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5zZXJ0aW9uUmFuZ2U7XG59XG5cbmZ1bmN0aW9uIGdhdGhlck11dGF0aW9uRGF0YShlZGl0b3IsIG11dGF0aW9ucykge1xuICB2YXIgYWRkZWROb2RlcyA9IFtdO1xuICB2YXIgcmVtb3ZlZE5vZGVzID0gW107XG4gIHZhciBpbnNlcnRlZFRleHQgPSBbXTtcbiAgdmFyIGNoYXJhY3RlckRhdGFNdXRhdGlvbnMgPSBbXTtcbiAgbXV0YXRpb25zLmZvckVhY2gobXV0YXRpb24gPT4ge1xuICAgIHN3aXRjaCAobXV0YXRpb24udHlwZSkge1xuICAgICAgY2FzZSAnY2hpbGRMaXN0JzpcbiAgICAgICAge1xuICAgICAgICAgIGlmIChtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgbXV0YXRpb24uYWRkZWROb2Rlcy5mb3JFYWNoKGFkZGVkTm9kZSA9PiB7XG4gICAgICAgICAgICAgIGFkZGVkTm9kZXMucHVzaChhZGRlZE5vZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbXV0YXRpb24ucmVtb3ZlZE5vZGVzLmZvckVhY2gocmVtb3ZlZE5vZGUgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlZE5vZGVzLnB1c2gocmVtb3ZlZE5vZGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ2NoYXJhY3RlckRhdGEnOlxuICAgICAgICB7XG4gICAgICAgICAgY2hhcmFjdGVyRGF0YU11dGF0aW9ucy5wdXNoKG11dGF0aW9uKTsgLy8gQ2hhbmdlcyB0byB0ZXh0IG5vZGVzIHNob3VsZCBjb25zaWRlciB0aGUgcGFyZW50IGVsZW1lbnRcblxuICAgICAgICAgIHZhciB7XG4gICAgICAgICAgICBwYXJlbnROb2RlXG4gICAgICAgICAgfSA9IG11dGF0aW9uLnRhcmdldDtcblxuICAgICAgICAgIGlmICghcGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciB0ZXh0SW5zZXJ0aW9uID0gZ2V0VGV4dEluc2VydGlvbihlZGl0b3IsIHBhcmVudE5vZGUpO1xuXG4gICAgICAgICAgaWYgKCF0ZXh0SW5zZXJ0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGRldGVjdGVkIGEgZGlmZiBhdCB0aGF0IHBhdGgsIHdlIGNhbiByZXR1cm4gZWFybHlcblxuXG4gICAgICAgICAgaWYgKGluc2VydGVkVGV4dC5zb21lKChfcmVmKSA9PiB7XG4gICAgICAgICAgICB2YXIge1xuICAgICAgICAgICAgICBwYXRoXG4gICAgICAgICAgICB9ID0gX3JlZjtcbiAgICAgICAgICAgIHJldHVybiBQYXRoLmVxdWFscyhwYXRoLCB0ZXh0SW5zZXJ0aW9uLnBhdGgpO1xuICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSAvLyBBZGQgdGhlIHRleHQgZGlmZiB0byB0aGUgYXJyYXkgb2YgZGV0ZWN0ZWQgdGV4dCBpbnNlcnRpb25zIHRoYXQgbmVlZCB0byBiZSByZWNvbmNpbGVkXG5cblxuICAgICAgICAgIGluc2VydGVkVGV4dC5wdXNoKHRleHRJbnNlcnRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBhZGRlZE5vZGVzLFxuICAgIHJlbW92ZWROb2RlcyxcbiAgICBpbnNlcnRlZFRleHQsXG4gICAgY2hhcmFjdGVyRGF0YU11dGF0aW9uc1xuICB9O1xufVxuLyoqXHJcbiAqIEluIGdlbmVyYWwsIHdoZW4gYSBsaW5lIGJyZWFrIG9jY3VycywgdGhlcmUgd2lsbCBiZSBtb3JlIGBhZGRlZE5vZGVzYCB0aGFuIGByZW1vdmVkTm9kZXNgLlxyXG4gKlxyXG4gKiBUaGlzIGlzbid0IGFsd2F5cyB0aGUgY2FzZSBob3dldmVyLiBJbiBzb21lIGNhc2VzLCB0aGVyZSB3aWxsIGJlIG1vcmUgYHJlbW92ZWROb2Rlc2AgdGhhblxyXG4gKiBgYWRkZWROb2Rlc2AuXHJcbiAqXHJcbiAqIFRvIGFjY291bnQgZm9yIHRoZXNlIGVkZ2UgY2FzZXMsIHRoZSBtb3N0IHJlbGlhYmxlIHN0cmF0ZWd5IHRvIGRldGVjdCBsaW5lIGJyZWFrIG11dGF0aW9uc1xyXG4gKiBpcyB0byBjaGVjayB3aGV0aGVyIGEgbmV3IGJsb2NrIHdhcyBpbnNlcnRlZCBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoZSBjdXJyZW50IGJsb2NrLlxyXG4gKi9cblxudmFyIGlzTGluZUJyZWFrID0gKGVkaXRvciwgX3JlZjIpID0+IHtcbiAgdmFyIHtcbiAgICBhZGRlZE5vZGVzXG4gIH0gPSBfcmVmMjtcbiAgdmFyIHtcbiAgICBzZWxlY3Rpb25cbiAgfSA9IGVkaXRvcjtcbiAgdmFyIHBhcmVudE5vZGUgPSBzZWxlY3Rpb24gPyBOb2RlLnBhcmVudChlZGl0b3IsIHNlbGVjdGlvbi5hbmNob3IucGF0aCkgOiBudWxsO1xuICB2YXIgcGFyZW50RE9NTm9kZSA9IHBhcmVudE5vZGUgPyBSZWFjdEVkaXRvci50b0RPTU5vZGUoZWRpdG9yLCBwYXJlbnROb2RlKSA6IG51bGw7XG5cbiAgaWYgKCFwYXJlbnRET01Ob2RlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGFkZGVkTm9kZXMuc29tZShhZGRlZE5vZGUgPT4gYWRkZWROb2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgYWRkZWROb2RlLnRhZ05hbWUgPT09IChwYXJlbnRET01Ob2RlID09PSBudWxsIHx8IHBhcmVudERPTU5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmVudERPTU5vZGUudGFnTmFtZSkpO1xufTtcbi8qKlxyXG4gKiBTbyBsb25nIGFzIHdlIGNoZWNrIGZvciBsaW5lIGJyZWFrIG11dGF0aW9ucyBiZWZvcmUgZGVsZXRpb24gbXV0YXRpb25zLFxyXG4gKiB3ZSBjYW4gc2FmZWx5IGFzc3VtZSB0aGF0IGEgc2V0IG9mIG11dGF0aW9ucyB3YXMgYSBkZWxldGlvbiBpZiB0aGVyZSBhcmVcclxuICogcmVtb3ZlZCBub2Rlcy5cclxuICovXG5cbnZhciBpc0RlbGV0aW9uID0gKF8sIF9yZWYzKSA9PiB7XG4gIHZhciB7XG4gICAgcmVtb3ZlZE5vZGVzXG4gIH0gPSBfcmVmMztcbiAgcmV0dXJuIHJlbW92ZWROb2Rlcy5sZW5ndGggPiAwO1xufTtcbi8qKlxyXG4gKiBJZiB0aGUgc2VsZWN0aW9uIHdhcyBleHBhbmRlZCBhbmQgdGhlcmUgYXJlIHJlbW92ZWQgbm9kZXMsXHJcbiAqIHRoZSBjb250ZW50cyBvZiB0aGUgc2VsZWN0aW9uIG5lZWQgdG8gYmUgcmVwbGFjZWQgd2l0aCB0aGUgZGlmZlxyXG4gKi9cblxudmFyIGlzUmVwbGFjZUV4cGFuZGVkU2VsZWN0aW9uID0gKF9yZWY0LCBfcmVmNSkgPT4ge1xuICB2YXIge1xuICAgIHNlbGVjdGlvblxuICB9ID0gX3JlZjQ7XG4gIHZhciB7XG4gICAgcmVtb3ZlZE5vZGVzXG4gIH0gPSBfcmVmNTtcbiAgcmV0dXJuIHNlbGVjdGlvbiA/IFJhbmdlLmlzRXhwYW5kZWQoc2VsZWN0aW9uKSAmJiByZW1vdmVkTm9kZXMubGVuZ3RoID4gMCA6IGZhbHNlO1xufTtcbi8qKlxyXG4gKiBQbGFpbiB0ZXh0IGluc2VydGlvblxyXG4gKi9cblxudmFyIGlzVGV4dEluc2VydGlvbiA9IChfLCBfcmVmNikgPT4ge1xuICB2YXIge1xuICAgIGluc2VydGVkVGV4dFxuICB9ID0gX3JlZjY7XG4gIHJldHVybiBpbnNlcnRlZFRleHQubGVuZ3RoID4gMDtcbn07XG4vKipcclxuICogRWRnZSBjYXNlLiBEZXRlY3QgbXV0YXRpb25zIHRoYXQgcmVtb3ZlIGxlYWYgbm9kZXMgYW5kIGFsc28gdXBkYXRlIGNoYXJhY3RlciBkYXRhXHJcbiAqL1xuXG52YXIgaXNSZW1vdmVMZWFmTm9kZXMgPSAoXywgX3JlZjcpID0+IHtcbiAgdmFyIHtcbiAgICBhZGRlZE5vZGVzLFxuICAgIGNoYXJhY3RlckRhdGFNdXRhdGlvbnMsXG4gICAgcmVtb3ZlZE5vZGVzXG4gIH0gPSBfcmVmNztcbiAgcmV0dXJuIHJlbW92ZWROb2Rlcy5sZW5ndGggPiAwICYmIGFkZGVkTm9kZXMubGVuZ3RoID09PSAwICYmIGNoYXJhY3RlckRhdGFNdXRhdGlvbnMubGVuZ3RoID4gMDtcbn07XG5cbmZ1bmN0aW9uIHJlc3RvcmVET00oZWRpdG9yKSB7XG4gIHRyeSB7XG4gICAgdmFyIG9uUmVzdG9yZURPTSA9IEVESVRPUl9UT19SRVNUT1JFX0RPTS5nZXQoZWRpdG9yKTtcblxuICAgIGlmIChvblJlc3RvcmVET00pIHtcbiAgICAgIG9uUmVzdG9yZURPTSgpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn1cblxuLyoqXHJcbiAqIEJhc2VkIGxvb3NlbHkgb246XHJcbiAqXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9kcmFmdC1qcy9ibG9iL21hc3Rlci9zcmMvY29tcG9uZW50L2hhbmRsZXJzL2NvbXBvc2l0aW9uL0RPTU9ic2VydmVyLmpzXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Qcm9zZU1pcnJvci9wcm9zZW1pcnJvci12aWV3L2Jsb2IvbWFzdGVyL3NyYy9kb21vYnNlcnZlci5qc1xyXG4gKlxyXG4gKiBUaGUgaW5wdXQgbWFuYWdlciBhdHRlbXB0cyB0byBtYXAgb2JzZXJ2ZWQgbXV0YXRpb25zIG9uIHRoZSBkb2N1bWVudCB0byBhXHJcbiAqIHNldCBvZiBvcGVyYXRpb25zIGluIG9yZGVyIHRvIHJlY29uY2lsZSBTbGF0ZSdzIGludGVybmFsIHZhbHVlIHdpdGggdGhlIERPTS5cclxuICpcclxuICogTXV0YXRpb25zIGFyZSBwcm9jZXNzZWQgc3luY2hyb25vdXNseSBhcyB0aGV5IGNvbWUgaW4uIE9ubHkgbXV0YXRpb25zIHRoYXQgb2NjdXJcclxuICogZHVyaW5nIGEgdXNlciBpbnB1dCBsb29wIGFyZSBwcm9jZXNzZWQsIGFzIG90aGVyIG11dGF0aW9ucyBjYW4gb2NjdXIgd2l0aGluIHRoZVxyXG4gKiBkb2N1bWVudCB0aGF0IHdlcmUgbm90IGluaXRpYXRlZCBieSB1c2VyIGlucHV0LlxyXG4gKlxyXG4gKiBUaGUgbXV0YXRpb24gcmVjb25jaWxpYXRpb24gcHJvY2VzcyBhdHRlbXB0cyB0byBtYXRjaCBtdXRhdGlvbnMgdG8gdGhlIGZvbGxvd2luZ1xyXG4gKiBwYXR0ZXJuczpcclxuICpcclxuICogLSBUZXh0IHVwZGF0ZXNcclxuICogLSBEZWxldGlvbnNcclxuICogLSBMaW5lIGJyZWFrc1xyXG4gKlxyXG4gKiBAcGFyYW0gZWRpdG9yXHJcbiAqL1xuXG5cbmNsYXNzIEFuZHJvaWRJbnB1dE1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcihlZGl0b3IpIHtcbiAgICB0aGlzLmVkaXRvciA9IGVkaXRvcjtcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBNdXRhdGlvbk9ic2VydmVyIGZsdXNoXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG11dGF0aW9uc1xyXG4gICAgICovXG5cbiAgICB0aGlzLmZsdXNoID0gbXV0YXRpb25zID0+IHtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5yZWNvbmNpbGVNdXRhdGlvbnMobXV0YXRpb25zKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7IC8vIEZhaWxlZCB0byByZWNvbmNpbGUgbXV0YXRpb25zLCByZXN0b3JlIERPTSB0byBpdHMgcHJldmlvdXMgc3RhdGVcblxuICAgICAgICByZXN0b3JlRE9NKHRoaXMuZWRpdG9yKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxyXG4gICAgICogUmVjb25jaWxlIGEgYmF0Y2ggb2YgbXV0YXRpb25zXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG11dGF0aW9uc1xyXG4gICAgICovXG5cblxuICAgIHRoaXMucmVjb25jaWxlTXV0YXRpb25zID0gbXV0YXRpb25zID0+IHtcbiAgICAgIHZhciBtdXRhdGlvbkRhdGEgPSBnYXRoZXJNdXRhdGlvbkRhdGEodGhpcy5lZGl0b3IsIG11dGF0aW9ucyk7XG4gICAgICB2YXIge1xuICAgICAgICBpbnNlcnRlZFRleHQsXG4gICAgICAgIHJlbW92ZWROb2Rlc1xuICAgICAgfSA9IG11dGF0aW9uRGF0YTtcblxuICAgICAgaWYgKGlzUmVwbGFjZUV4cGFuZGVkU2VsZWN0aW9uKHRoaXMuZWRpdG9yLCBtdXRhdGlvbkRhdGEpKSB7XG4gICAgICAgIHZhciB0ZXh0ID0gY29tYmluZUluc2VydGVkVGV4dChpbnNlcnRlZFRleHQpO1xuICAgICAgICB0aGlzLnJlcGxhY2VFeHBhbmRlZFNlbGVjdGlvbih0ZXh0KTtcbiAgICAgIH0gZWxzZSBpZiAoaXNMaW5lQnJlYWsodGhpcy5lZGl0b3IsIG11dGF0aW9uRGF0YSkpIHtcbiAgICAgICAgdGhpcy5pbnNlcnRCcmVhaygpO1xuICAgICAgfSBlbHNlIGlmIChpc1JlbW92ZUxlYWZOb2Rlcyh0aGlzLmVkaXRvciwgbXV0YXRpb25EYXRhKSkge1xuICAgICAgICB0aGlzLnJlbW92ZUxlYWZOb2RlcyhyZW1vdmVkTm9kZXMpO1xuICAgICAgfSBlbHNlIGlmIChpc0RlbGV0aW9uKHRoaXMuZWRpdG9yLCBtdXRhdGlvbkRhdGEpKSB7XG4gICAgICAgIHRoaXMuZGVsZXRlQmFja3dhcmQoKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNUZXh0SW5zZXJ0aW9uKHRoaXMuZWRpdG9yLCBtdXRhdGlvbkRhdGEpKSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0VGV4dChpbnNlcnRlZFRleHQpO1xuICAgICAgfVxuICAgIH07XG4gICAgLyoqXHJcbiAgICAgKiBBcHBseSB0ZXh0IGRpZmZcclxuICAgICAqL1xuXG5cbiAgICB0aGlzLmluc2VydFRleHQgPSBpbnNlcnRlZFRleHQgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgc2VsZWN0aW9uXG4gICAgICB9ID0gdGhpcy5lZGl0b3I7IC8vIEluc2VydCB0aGUgYmF0Y2hlZCB0ZXh0IGRpZmZzXG5cbiAgICAgIGluc2VydGVkVGV4dC5mb3JFYWNoKGluc2VydGlvbiA9PiB7XG4gICAgICAgIFRyYW5zZm9ybXMuaW5zZXJ0VGV4dCh0aGlzLmVkaXRvciwgaW5zZXJ0aW9uLnRleHQuaW5zZXJ0VGV4dCwge1xuICAgICAgICAgIGF0OiBub3JtYWxpemVUZXh0SW5zZXJ0aW9uUmFuZ2UodGhpcy5lZGl0b3IsIHNlbGVjdGlvbiwgaW5zZXJ0aW9uKVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGUgbGluZSBicmVha3NcclxuICAgICAqL1xuXG5cbiAgICB0aGlzLmluc2VydEJyZWFrID0gKCkgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgc2VsZWN0aW9uXG4gICAgICB9ID0gdGhpcy5lZGl0b3I7XG4gICAgICBFZGl0b3IuaW5zZXJ0QnJlYWsodGhpcy5lZGl0b3IpOyAvLyBUby1kbzogTmVlZCBhIG1vcmUgZ3JhbnVsYXIgc29sdXRpb24gdG8gcmVzdG9yaW5nIG9ubHkgYSBzcGVjaWZpYyBwb3J0aW9uXG4gICAgICAvLyBvZiB0aGUgZG9jdW1lbnQuIFJlc3RvcmluZyB0aGUgZW50aXJlIGRvY3VtZW50IGlzIGV4cGVuc2l2ZS5cblxuICAgICAgcmVzdG9yZURPTSh0aGlzLmVkaXRvcik7XG5cbiAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgLy8gQ29tcGF0OiBNb3ZlIHNlbGVjdGlvbiB0byB0aGUgbmV3bHkgaW5zZXJ0ZWQgYmxvY2sgaWYgaXQgaGFzIG5vdCBtb3ZlZFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5lZGl0b3Iuc2VsZWN0aW9uICYmIFJhbmdlLmVxdWFscyhzZWxlY3Rpb24sIHRoaXMuZWRpdG9yLnNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgIFRyYW5zZm9ybXMubW92ZSh0aGlzLmVkaXRvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuICAgICAgfVxuICAgIH07XG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGUgZXhwYW5kZWQgc2VsZWN0aW9uIGJlaW5nIGRlbGV0ZWQgb3IgcmVwbGFjZWQgYnkgdGV4dFxyXG4gICAgICovXG5cblxuICAgIHRoaXMucmVwbGFjZUV4cGFuZGVkU2VsZWN0aW9uID0gdGV4dCA9PiB7XG5cbiAgICAgIEVkaXRvci5kZWxldGVGcmFnbWVudCh0aGlzLmVkaXRvcik7XG5cbiAgICAgIGlmICh0ZXh0Lmxlbmd0aCkge1xuICAgICAgICAvLyBTZWxlY3Rpb24gd2FzIHJlcGxhY2VkIGJ5IHRleHQsIGluc2VydCB0aGUgZW50aXJlIHRleHQgZGlmZlxuICAgICAgICBFZGl0b3IuaW5zZXJ0VGV4dCh0aGlzLmVkaXRvciwgdGV4dCk7XG4gICAgICB9XG5cbiAgICAgIHJlc3RvcmVET00odGhpcy5lZGl0b3IpO1xuICAgIH07XG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGUgYGJhY2tzcGFjZWAgdGhhdCBtZXJnZXMgYmxvY2tzXHJcbiAgICAgKi9cblxuXG4gICAgdGhpcy5kZWxldGVCYWNrd2FyZCA9ICgpID0+IHtcbiAgICAgIEVkaXRvci5kZWxldGVCYWNrd2FyZCh0aGlzLmVkaXRvcik7XG4gICAgICBSZWFjdEVkaXRvci5mb2N1cyh0aGlzLmVkaXRvcik7XG4gICAgICByZXN0b3JlRE9NKHRoaXMuZWRpdG9yKTtcbiAgICB9O1xuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIG11dGF0aW9ucyB0aGF0IHJlbW92ZSBzcGVjaWZpYyBsZWF2ZXNcclxuICAgICAqL1xuXG5cbiAgICB0aGlzLnJlbW92ZUxlYWZOb2RlcyA9IG5vZGVzID0+IHtcbiAgICAgIGZvciAodmFyIG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgdmFyIHNsYXRlTm9kZSA9IFJlYWN0RWRpdG9yLnRvU2xhdGVOb2RlKHRoaXMuZWRpdG9yLCBub2RlKTtcblxuICAgICAgICBpZiAoc2xhdGVOb2RlKSB7XG4gICAgICAgICAgdmFyIHBhdGggPSBSZWFjdEVkaXRvci5maW5kUGF0aCh0aGlzLmVkaXRvciwgc2xhdGVOb2RlKTtcbiAgICAgICAgICBUcmFuc2Zvcm1zLmRlbGV0ZSh0aGlzLmVkaXRvciwge1xuICAgICAgICAgICAgYXQ6IHBhdGhcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXN0b3JlRE9NKHRoaXMuZWRpdG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmVkaXRvciA9IGVkaXRvcjtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIHVzZU11dGF0aW9uT2JzZXJ2ZXIobm9kZSwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgdmFyIFttdXRhdGlvbk9ic2VydmVyXSA9IHVzZVN0YXRlKCgpID0+IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKSk7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIC8vIERpc2Nvbm5lY3QgbXV0YXRpb24gb2JzZXJ2ZXIgZHVyaW5nIHJlbmRlciBwaGFzZVxuICAgIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICB9KTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIW5vZGUuY3VycmVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gYXR0YWNoIE11dGF0aW9uT2JzZXJ2ZXIsIGBub2RlYCBpcyB1bmRlZmluZWQnKTtcbiAgICB9IC8vIEF0dGFjaCBtdXRhdGlvbiBvYnNlcnZlciBhZnRlciByZW5kZXIgcGhhc2UgaGFzIGZpbmlzaGVkXG5cblxuICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShub2RlLmN1cnJlbnQsIG9wdGlvbnMpOyAvLyBDbGVhbiB1cCBhZnRlciBlZmZlY3RcblxuICAgIHJldHVybiBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QuYmluZChtdXRhdGlvbk9ic2VydmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZVRyYWNrVXNlcklucHV0KCkge1xuICB2YXIgZWRpdG9yID0gdXNlU2xhdGVTdGF0aWMoKTtcbiAgdmFyIHJlY2VpdmVkVXNlcklucHV0ID0gdXNlUmVmKGZhbHNlKTtcbiAgdmFyIGFuaW1hdGlvbkZyYW1lUmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgb25Vc2VySW5wdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKHJlY2VpdmVkVXNlcklucHV0LmN1cnJlbnQgPT09IGZhbHNlKSB7XG4gICAgICB2YXIgd2luZG93ID0gUmVhY3RFZGl0b3IuZ2V0V2luZG93KGVkaXRvcik7XG4gICAgICByZWNlaXZlZFVzZXJJbnB1dC5jdXJyZW50ID0gdHJ1ZTtcblxuICAgICAgaWYgKGFuaW1hdGlvbkZyYW1lUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lUmVmLmN1cnJlbnQpO1xuICAgICAgfVxuXG4gICAgICBhbmltYXRpb25GcmFtZVJlZi5jdXJyZW50ID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHJlY2VpdmVkVXNlcklucHV0LmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgYW5pbWF0aW9uRnJhbWVSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBSZXNldCB1c2VyIGlucHV0IHRyYWNraW5nIG9uIGV2ZXJ5IHJlbmRlclxuICAgIGlmIChyZWNlaXZlZFVzZXJJbnB1dC5jdXJyZW50KSB7XG4gICAgICByZWNlaXZlZFVzZXJJbnB1dC5jdXJyZW50ID0gZmFsc2U7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICByZWNlaXZlZFVzZXJJbnB1dCxcbiAgICBvblVzZXJJbnB1dFxuICB9O1xufVxuXG52YXIgTVVUQVRJT05fT0JTRVJWRVJfQ09ORklHID0ge1xuICBjaGlsZExpc3Q6IHRydWUsXG4gIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gIGNoYXJhY3RlckRhdGFPbGRWYWx1ZTogdHJ1ZSxcbiAgc3VidHJlZTogdHJ1ZVxufTtcbmZ1bmN0aW9uIHVzZUFuZHJvaWRJbnB1dE1hbmFnZXIobm9kZSkge1xuICB2YXIgZWRpdG9yID0gdXNlU2xhdGVTdGF0aWMoKTtcbiAgdmFyIFtpbnB1dE1hbmFnZXJdID0gdXNlU3RhdGUoKCkgPT4gbmV3IEFuZHJvaWRJbnB1dE1hbmFnZXIoZWRpdG9yKSk7XG4gIHZhciB7XG4gICAgcmVjZWl2ZWRVc2VySW5wdXQsXG4gICAgb25Vc2VySW5wdXRcbiAgfSA9IHVzZVRyYWNrVXNlcklucHV0KCk7XG4gIHZhciB0aW1lb3V0SWQgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBpc1JlY29uY2lsaW5nID0gdXNlUmVmKGZhbHNlKTtcbiAgdmFyIGZsdXNoID0gdXNlQ2FsbGJhY2sobXV0YXRpb25zID0+IHtcbiAgICBpZiAoIXJlY2VpdmVkVXNlcklucHV0LmN1cnJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpc1JlY29uY2lsaW5nLmN1cnJlbnQgPSB0cnVlO1xuICAgIGlucHV0TWFuYWdlci5mbHVzaChtdXRhdGlvbnMpO1xuXG4gICAgaWYgKHRpbWVvdXRJZC5jdXJyZW50KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIHRpbWVvdXRJZC5jdXJyZW50ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpc1JlY29uY2lsaW5nLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIHRpbWVvdXRJZC5jdXJyZW50ID0gbnVsbDtcbiAgICB9LCAyNTApO1xuICB9LCBbXSk7XG4gIHVzZU11dGF0aW9uT2JzZXJ2ZXIobm9kZSwgZmx1c2gsIE1VVEFUSU9OX09CU0VSVkVSX0NPTkZJRyk7XG4gIHJldHVybiB7XG4gICAgaXNSZWNvbmNpbGluZyxcbiAgICBvblVzZXJJbnB1dFxuICB9O1xufVxuXG5mdW5jdGlvbiBvd25LZXlzJDEob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkMSh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzJDEoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyQxKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuLyoqXHJcbiAqIEVkaXRhYmxlLlxyXG4gKi9cblxudmFyIEFuZHJvaWRFZGl0YWJsZSA9IHByb3BzID0+IHtcbiAgdmFyIHtcbiAgICBhdXRvRm9jdXMsXG4gICAgZGVjb3JhdGUgPSBkZWZhdWx0RGVjb3JhdGUsXG4gICAgb25ET01CZWZvcmVJbnB1dDogcHJvcHNPbkRPTUJlZm9yZUlucHV0LFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIHJlYWRPbmx5ID0gZmFsc2UsXG4gICAgcmVuZGVyRWxlbWVudCxcbiAgICByZW5kZXJMZWFmLFxuICAgIHJlbmRlclBsYWNlaG9sZGVyID0gcHJvcHMgPT4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRGVmYXVsdFBsYWNlaG9sZGVyLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpLFxuICAgIHN0eWxlID0ge30sXG4gICAgYXM6IENvbXBvbmVudCA9ICdkaXYnXG4gIH0gPSBwcm9wcyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImF1dG9Gb2N1c1wiLCBcImRlY29yYXRlXCIsIFwib25ET01CZWZvcmVJbnB1dFwiLCBcInBsYWNlaG9sZGVyXCIsIFwicmVhZE9ubHlcIiwgXCJyZW5kZXJFbGVtZW50XCIsIFwicmVuZGVyTGVhZlwiLCBcInJlbmRlclBsYWNlaG9sZGVyXCIsIFwic3R5bGVcIiwgXCJhc1wiXSk7XG5cbiAgdmFyIGVkaXRvciA9IHVzZVNsYXRlKCk7XG4gIHZhciByZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBpbnB1dE1hbmFnZXIgPSB1c2VBbmRyb2lkSW5wdXRNYW5hZ2VyKHJlZik7IC8vIFVwZGF0ZSBpbnRlcm5hbCBzdGF0ZSBvbiBlYWNoIHJlbmRlci5cblxuICBJU19SRUFEX09OTFkuc2V0KGVkaXRvciwgcmVhZE9ubHkpOyAvLyBLZWVwIHRyYWNrIG9mIHNvbWUgc3RhdGUgZm9yIHRoZSBldmVudCBoYW5kbGVyIGxvZ2ljLlxuXG4gIHZhciBzdGF0ZSA9IHVzZU1lbW8oKCkgPT4gKHtcbiAgICBpc1VwZGF0aW5nU2VsZWN0aW9uOiBmYWxzZSxcbiAgICBsYXRlc3RFbGVtZW50OiBudWxsXG4gIH0pLCBbXSk7XG4gIHZhciBbY29udGVudEtleSwgc2V0Q29udGVudEtleV0gPSB1c2VTdGF0ZSgwKTtcbiAgdmFyIG9uUmVzdG9yZURPTSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRDb250ZW50S2V5KHByZXYgPT4gcHJldiArIDEpO1xuICB9LCBbY29udGVudEtleV0pOyAvLyBXaGVuZXZlciB0aGUgZWRpdG9yIHVwZGF0ZXMuLi5cblxuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAvLyBVcGRhdGUgZWxlbWVudC1yZWxhdGVkIHdlYWsgbWFwcyB3aXRoIHRoZSBET00gZWxlbWVudCByZWYuXG4gICAgdmFyIHdpbmRvdztcblxuICAgIGlmIChyZWYuY3VycmVudCAmJiAod2luZG93ID0gZ2V0RGVmYXVsdFZpZXcocmVmLmN1cnJlbnQpKSkge1xuICAgICAgRURJVE9SX1RPX1dJTkRPVy5zZXQoZWRpdG9yLCB3aW5kb3cpO1xuICAgICAgRURJVE9SX1RPX0VMRU1FTlQuc2V0KGVkaXRvciwgcmVmLmN1cnJlbnQpO1xuICAgICAgTk9ERV9UT19FTEVNRU5ULnNldChlZGl0b3IsIHJlZi5jdXJyZW50KTtcbiAgICAgIEVMRU1FTlRfVE9fTk9ERS5zZXQocmVmLmN1cnJlbnQsIGVkaXRvcik7XG4gICAgICBFRElUT1JfVE9fUkVTVE9SRV9ET00uc2V0KGVkaXRvciwgb25SZXN0b3JlRE9NKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTk9ERV9UT19FTEVNRU5ULmRlbGV0ZShlZGl0b3IpO1xuICAgICAgRURJVE9SX1RPX1JFU1RPUkVfRE9NLmRlbGV0ZShlZGl0b3IpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAvLyBNYWtlIHN1cmUgdGhlIERPTSBzZWxlY3Rpb24gc3RhdGUgaXMgaW4gc3luYy5cbiAgICAgIHZhciB7XG4gICAgICAgIHNlbGVjdGlvblxuICAgICAgfSA9IGVkaXRvcjtcbiAgICAgIHZhciByb290ID0gUmVhY3RFZGl0b3IuZmluZERvY3VtZW50T3JTaGFkb3dSb290KGVkaXRvcik7XG4gICAgICB2YXIgZG9tU2VsZWN0aW9uID0gcm9vdC5nZXRTZWxlY3Rpb24oKTtcblxuICAgICAgaWYgKCFkb21TZWxlY3Rpb24gfHwgIVJlYWN0RWRpdG9yLmlzRm9jdXNlZChlZGl0b3IpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGhhc0RvbVNlbGVjdGlvbiA9IGRvbVNlbGVjdGlvbi50eXBlICE9PSAnTm9uZSc7IC8vIElmIHRoZSBET00gc2VsZWN0aW9uIGlzIHByb3Blcmx5IHVuc2V0LCB3ZSdyZSBkb25lLlxuXG4gICAgICBpZiAoIXNlbGVjdGlvbiAmJiAhaGFzRG9tU2VsZWN0aW9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gdmVyaWZ5IHRoYXQgdGhlIGRvbSBzZWxlY3Rpb24gaXMgaW4gdGhlIGVkaXRvclxuXG5cbiAgICAgIHZhciBlZGl0b3JFbGVtZW50ID0gRURJVE9SX1RPX0VMRU1FTlQuZ2V0KGVkaXRvcik7XG4gICAgICB2YXIgaGFzRG9tU2VsZWN0aW9uSW5FZGl0b3IgPSBmYWxzZTtcblxuICAgICAgaWYgKGVkaXRvckVsZW1lbnQuY29udGFpbnMoZG9tU2VsZWN0aW9uLmFuY2hvck5vZGUpICYmIGVkaXRvckVsZW1lbnQuY29udGFpbnMoZG9tU2VsZWN0aW9uLmZvY3VzTm9kZSkpIHtcbiAgICAgICAgaGFzRG9tU2VsZWN0aW9uSW5FZGl0b3IgPSB0cnVlO1xuICAgICAgfSAvLyBJZiB0aGUgRE9NIHNlbGVjdGlvbiBpcyBpbiB0aGUgZWRpdG9yIGFuZCB0aGUgZWRpdG9yIHNlbGVjdGlvbiBpcyBhbHJlYWR5IGNvcnJlY3QsIHdlJ3JlIGRvbmUuXG5cblxuICAgICAgaWYgKGhhc0RvbVNlbGVjdGlvbiAmJiBoYXNEb21TZWxlY3Rpb25JbkVkaXRvciAmJiBzZWxlY3Rpb24pIHtcbiAgICAgICAgdmFyIHNsYXRlUmFuZ2UgPSBSZWFjdEVkaXRvci50b1NsYXRlUmFuZ2UoZWRpdG9yLCBkb21TZWxlY3Rpb24sIHtcbiAgICAgICAgICBleGFjdE1hdGNoOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzbGF0ZVJhbmdlICYmIFJhbmdlLmVxdWFscyhzbGF0ZVJhbmdlLCBzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IC8vIHdoZW4gPEVkaXRhYmxlLz4gaXMgYmVpbmcgY29udHJvbGxlZCB0aHJvdWdoIGV4dGVybmFsIHZhbHVlXG4gICAgICAvLyB0aGVuIGl0cyBjaGlsZHJlbiBtaWdodCBqdXN0IGNoYW5nZSAtIERPTSByZXNwb25kcyB0byBpdCBvbiBpdHMgb3duXG4gICAgICAvLyBidXQgU2xhdGUncyB2YWx1ZSBpcyBub3QgYmVpbmcgdXBkYXRlZCB0aHJvdWdoIGFueSBvcGVyYXRpb25cbiAgICAgIC8vIGFuZCB0aHVzIGl0IGRvZXNuJ3QgdHJhbnNmb3JtIHNlbGVjdGlvbiBvbiBpdHMgb3duXG5cblxuICAgICAgaWYgKHNlbGVjdGlvbiAmJiAhUmVhY3RFZGl0b3IuaGFzUmFuZ2UoZWRpdG9yLCBzZWxlY3Rpb24pKSB7XG4gICAgICAgIGVkaXRvci5zZWxlY3Rpb24gPSBSZWFjdEVkaXRvci50b1NsYXRlUmFuZ2UoZWRpdG9yLCBkb21TZWxlY3Rpb24sIHtcbiAgICAgICAgICBleGFjdE1hdGNoOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBPdGhlcndpc2UgdGhlIERPTSBzZWxlY3Rpb24gaXMgb3V0IG9mIHN5bmMsIHNvIHVwZGF0ZSBpdC5cblxuXG4gICAgICB2YXIgZWwgPSBSZWFjdEVkaXRvci50b0RPTU5vZGUoZWRpdG9yLCBlZGl0b3IpO1xuICAgICAgc3RhdGUuaXNVcGRhdGluZ1NlbGVjdGlvbiA9IHRydWU7XG4gICAgICB2YXIgbmV3RG9tUmFuZ2UgPSBzZWxlY3Rpb24gJiYgUmVhY3RFZGl0b3IudG9ET01SYW5nZShlZGl0b3IsIHNlbGVjdGlvbik7XG5cbiAgICAgIGlmIChuZXdEb21SYW5nZSkge1xuICAgICAgICBpZiAoUmFuZ2UuaXNCYWNrd2FyZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgZG9tU2VsZWN0aW9uLnNldEJhc2VBbmRFeHRlbnQobmV3RG9tUmFuZ2UuZW5kQ29udGFpbmVyLCBuZXdEb21SYW5nZS5lbmRPZmZzZXQsIG5ld0RvbVJhbmdlLnN0YXJ0Q29udGFpbmVyLCBuZXdEb21SYW5nZS5zdGFydE9mZnNldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9tU2VsZWN0aW9uLnNldEJhc2VBbmRFeHRlbnQobmV3RG9tUmFuZ2Uuc3RhcnRDb250YWluZXIsIG5ld0RvbVJhbmdlLnN0YXJ0T2Zmc2V0LCBuZXdEb21SYW5nZS5lbmRDb250YWluZXIsIG5ld0RvbVJhbmdlLmVuZE9mZnNldCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGVhZkVsID0gbmV3RG9tUmFuZ2Uuc3RhcnRDb250YWluZXIucGFyZW50RWxlbWVudDtcbiAgICAgICAgbGVhZkVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9IG5ld0RvbVJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdC5iaW5kKG5ld0RvbVJhbmdlKTtcbiAgICAgICAgc2Nyb2xsSW50b1ZpZXcobGVhZkVsLCB7XG4gICAgICAgICAgc2Nyb2xsTW9kZTogJ2lmLW5lZWRlZCcsXG4gICAgICAgICAgYm91bmRhcnk6IGVsXG4gICAgICAgIH0pOyAvLyBAdHMtaWdub3JlXG5cbiAgICAgICAgZGVsZXRlIGxlYWZFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb21TZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICB9XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzdGF0ZS5pc1VwZGF0aW5nU2VsZWN0aW9uID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChfdW51c2VkKSB7XG4gICAgICAvLyBGYWlsZWQgdG8gdXBkYXRlIHNlbGVjdGlvbiwgbGlrZWx5IGR1ZSB0byByZWNvbmNpbGlhdGlvbiBlcnJvclxuICAgICAgc3RhdGUuaXNVcGRhdGluZ1NlbGVjdGlvbiA9IGZhbHNlO1xuICAgIH1cbiAgfSk7IC8vIFRoZSBhdXRvRm9jdXMgVGV4dGFyZWFIVE1MQXR0cmlidXRlIGRvZXNuJ3QgZG8gYW55dGhpbmcgb24gYSBkaXYsIHNvIGl0XG4gIC8vIG5lZWRzIHRvIGJlIG1hbnVhbGx5IGZvY3VzZWQuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmVmLmN1cnJlbnQgJiYgYXV0b0ZvY3VzKSB7XG4gICAgICByZWYuY3VycmVudC5mb2N1cygpO1xuICAgIH1cbiAgfSwgW2F1dG9Gb2N1c10pOyAvLyBMaXN0ZW4gb24gdGhlIG5hdGl2ZSBgYmVmb3JlaW5wdXRgIGV2ZW50IHRvIGdldCByZWFsIFwiTGV2ZWwgMlwiIGV2ZW50cy4gVGhpc1xuICAvLyBpcyByZXF1aXJlZCBiZWNhdXNlIFJlYWN0J3MgYGJlZm9yZWlucHV0YCBpcyBmYWtlIGFuZCBuZXZlciByZWFsbHkgYXR0YWNoZXNcbiAgLy8gdG8gdGhlIHJlYWwgZXZlbnQgc2FkbHkuICgyMDE5LzExLzAxKVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzExMjExXG5cbiAgdmFyIG9uRE9NQmVmb3JlSW5wdXQgPSB1c2VDYWxsYmFjayhldmVudCA9PiB7XG4gICAgaWYgKCFyZWFkT25seSAmJiBoYXNFZGl0YWJsZVRhcmdldChlZGl0b3IsIGV2ZW50LnRhcmdldCkgJiYgIWlzRE9NRXZlbnRIYW5kbGVkKGV2ZW50LCBwcm9wc09uRE9NQmVmb3JlSW5wdXQpKSB7XG4gICAgICBpbnB1dE1hbmFnZXIub25Vc2VySW5wdXQoKTtcbiAgICB9XG4gIH0sIFtyZWFkT25seSwgcHJvcHNPbkRPTUJlZm9yZUlucHV0XSk7IC8vIEF0dGFjaCBhIG5hdGl2ZSBET00gZXZlbnQgaGFuZGxlciBmb3IgYGJlZm9yZWlucHV0YCBldmVudHMsIGJlY2F1c2UgUmVhY3Qnc1xuICAvLyBidWlsdC1pbiBgb25CZWZvcmVJbnB1dGAgaXMgYWN0dWFsbHkgYSBsZWFreSBwb2x5ZmlsbCB0aGF0IGRvZXNuJ3QgZXhwb3NlXG4gIC8vIHJlYWwgYGJlZm9yZWlucHV0YCBldmVudHMgc2FkbHkuLi4gKDIwMTkvMTEvMDQpXG5cbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIG5vZGUgPSByZWYuY3VycmVudDsgLy8gQHRzLWlnbm9yZSBUaGUgYGJlZm9yZWlucHV0YCBldmVudCBpc24ndCByZWNvZ25pemVkLlxuXG4gICAgbm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZWlucHV0Jywgb25ET01CZWZvcmVJbnB1dCk7IC8vIEB0cy1pZ25vcmUgVGhlIGBiZWZvcmVpbnB1dGAgZXZlbnQgaXNuJ3QgcmVjb2duaXplZC5cblxuICAgIHJldHVybiAoKSA9PiBub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmVmb3JlaW5wdXQnLCBvbkRPTUJlZm9yZUlucHV0KTtcbiAgfSwgW2NvbnRlbnRLZXksIHByb3BzT25ET01CZWZvcmVJbnB1dF0pOyAvLyBMaXN0ZW4gb24gdGhlIG5hdGl2ZSBgc2VsZWN0aW9uY2hhbmdlYCBldmVudCB0byBiZSBhYmxlIHRvIHVwZGF0ZSBhbnkgdGltZVxuICAvLyB0aGUgc2VsZWN0aW9uIGNoYW5nZXMuIFRoaXMgaXMgcmVxdWlyZWQgYmVjYXVzZSBSZWFjdCdzIGBvblNlbGVjdGAgaXMgbGVha3lcbiAgLy8gYW5kIG5vbi1zdGFuZGFyZCBzbyBpdCBkb2Vzbid0IGZpcmUgdW50aWwgYWZ0ZXIgYSBzZWxlY3Rpb24gaGFzIGJlZW5cbiAgLy8gcmVsZWFzZWQuIFRoaXMgY2F1c2VzIGlzc3VlcyBpbiBzaXR1YXRpb25zIHdoZXJlIGFub3RoZXIgY2hhbmdlIGhhcHBlbnNcbiAgLy8gd2hpbGUgYSBzZWxlY3Rpb24gaXMgYmVpbmcgZHJhZ2dlZC5cblxuICB2YXIgb25ET01TZWxlY3Rpb25DaGFuZ2UgPSB1c2VDYWxsYmFjayh0aHJvdHRsZSgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghcmVhZE9ubHkgJiYgIXN0YXRlLmlzVXBkYXRpbmdTZWxlY3Rpb24gJiYgIWlucHV0TWFuYWdlci5pc1JlY29uY2lsaW5nLmN1cnJlbnQpIHtcbiAgICAgICAgdmFyIHJvb3QgPSBSZWFjdEVkaXRvci5maW5kRG9jdW1lbnRPclNoYWRvd1Jvb3QoZWRpdG9yKTtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBhY3RpdmVFbGVtZW50XG4gICAgICAgIH0gPSByb290O1xuICAgICAgICB2YXIgZWwgPSBSZWFjdEVkaXRvci50b0RPTU5vZGUoZWRpdG9yLCBlZGl0b3IpO1xuICAgICAgICB2YXIgZG9tU2VsZWN0aW9uID0gcm9vdC5nZXRTZWxlY3Rpb24oKTtcblxuICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCA9PT0gZWwpIHtcbiAgICAgICAgICBzdGF0ZS5sYXRlc3RFbGVtZW50ID0gYWN0aXZlRWxlbWVudDtcbiAgICAgICAgICBJU19GT0NVU0VELnNldChlZGl0b3IsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIElTX0ZPQ1VTRUQuZGVsZXRlKGVkaXRvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRvbVNlbGVjdGlvbikge1xuICAgICAgICAgIHJldHVybiBUcmFuc2Zvcm1zLmRlc2VsZWN0KGVkaXRvcik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIge1xuICAgICAgICAgIGFuY2hvck5vZGUsXG4gICAgICAgICAgZm9jdXNOb2RlXG4gICAgICAgIH0gPSBkb21TZWxlY3Rpb247XG4gICAgICAgIHZhciBhbmNob3JOb2RlU2VsZWN0YWJsZSA9IGhhc0VkaXRhYmxlVGFyZ2V0KGVkaXRvciwgYW5jaG9yTm9kZSkgfHwgaXNUYXJnZXRJbnNpZGVWb2lkKGVkaXRvciwgYW5jaG9yTm9kZSk7XG4gICAgICAgIHZhciBmb2N1c05vZGVTZWxlY3RhYmxlID0gaGFzRWRpdGFibGVUYXJnZXQoZWRpdG9yLCBmb2N1c05vZGUpIHx8IGlzVGFyZ2V0SW5zaWRlVm9pZChlZGl0b3IsIGZvY3VzTm9kZSk7XG5cbiAgICAgICAgaWYgKGFuY2hvck5vZGVTZWxlY3RhYmxlICYmIGZvY3VzTm9kZVNlbGVjdGFibGUpIHtcbiAgICAgICAgICB2YXIgcmFuZ2UgPSBSZWFjdEVkaXRvci50b1NsYXRlUmFuZ2UoZWRpdG9yLCBkb21TZWxlY3Rpb24sIHtcbiAgICAgICAgICAgIGV4YWN0TWF0Y2g6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5zZWxlY3QoZWRpdG9yLCByYW5nZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5kZXNlbGVjdChlZGl0b3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoX3VudXNlZDIpIHsvLyBGYWlsZWQgdG8gdXBkYXRlIHNlbGVjdGlvbiwgbGlrZWx5IGR1ZSB0byByZWNvbmNpbGlhdGlvbiBlcnJvclxuICAgIH1cbiAgfSwgMTAwKSwgW3JlYWRPbmx5XSk7IC8vIEF0dGFjaCBhIG5hdGl2ZSBET00gZXZlbnQgaGFuZGxlciBmb3IgYHNlbGVjdGlvbmNoYW5nZWAsIGJlY2F1c2UgUmVhY3Qnc1xuICAvLyBidWlsdC1pbiBgb25TZWxlY3RgIGhhbmRsZXIgZG9lc24ndCBmaXJlIGZvciBhbGwgc2VsZWN0aW9uIGNoYW5nZXMuIEl0J3MgYVxuICAvLyBsZWFreSBwb2x5ZmlsbCB0aGF0IG9ubHkgZmlyZXMgb24ga2V5cHJlc3NlcyBvciBjbGlja3MuIEluc3RlYWQsIHdlIHdhbnQgdG9cbiAgLy8gZmlyZSBmb3IgYW55IGNoYW5nZSB0byB0aGUgc2VsZWN0aW9uIGluc2lkZSB0aGUgZWRpdG9yLiAoMjAxOS8xMS8wNClcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy81Nzg1XG5cbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIHdpbmRvdyA9IFJlYWN0RWRpdG9yLmdldFdpbmRvdyhlZGl0b3IpO1xuICAgIHdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3Rpb25jaGFuZ2UnLCBvbkRPTVNlbGVjdGlvbkNoYW5nZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzZWxlY3Rpb25jaGFuZ2UnLCBvbkRPTVNlbGVjdGlvbkNoYW5nZSk7XG4gICAgfTtcbiAgfSk7XG4gIHZhciBkZWNvcmF0aW9ucyA9IGRlY29yYXRlKFtlZGl0b3IsIFtdXSk7XG5cbiAgaWYgKHBsYWNlaG9sZGVyICYmIGVkaXRvci5jaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgQXJyYXkuZnJvbShOb2RlLnRleHRzKGVkaXRvcikpLmxlbmd0aCA9PT0gMSAmJiBOb2RlLnN0cmluZyhlZGl0b3IpID09PSAnJykge1xuICAgIHZhciBzdGFydCA9IEVkaXRvci5zdGFydChlZGl0b3IsIFtdKTtcbiAgICBkZWNvcmF0aW9ucy5wdXNoKHtcbiAgICAgIFtQTEFDRUhPTERFUl9TWU1CT0xdOiB0cnVlLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICBhbmNob3I6IHN0YXJ0LFxuICAgICAgZm9jdXM6IHN0YXJ0XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhZE9ubHlDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHJlYWRPbmx5XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERlY29yYXRlQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBkZWNvcmF0ZVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgIGtleTogY29udGVudEtleSxcbiAgICByb2xlOiByZWFkT25seSA/IHVuZGVmaW5lZCA6ICd0ZXh0Ym94J1xuICB9LCBhdHRyaWJ1dGVzLCB7XG4gICAgc3BlbGxDaGVjazogYXR0cmlidXRlcy5zcGVsbENoZWNrLFxuICAgIGF1dG9Db3JyZWN0OiBhdHRyaWJ1dGVzLmF1dG9Db3JyZWN0LFxuICAgIGF1dG9DYXBpdGFsaXplOiBhdHRyaWJ1dGVzLmF1dG9DYXBpdGFsaXplLFxuICAgIFwiZGF0YS1zbGF0ZS1lZGl0b3JcIjogdHJ1ZSxcbiAgICBcImRhdGEtc2xhdGUtbm9kZVwiOiBcInZhbHVlXCIsXG4gICAgY29udGVudEVkaXRhYmxlOiByZWFkT25seSA/IHVuZGVmaW5lZCA6IHRydWUsXG4gICAgc3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nOiB0cnVlLFxuICAgIHJlZjogcmVmLFxuICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkJDEoe1xuICAgICAgLy8gQWxsb3cgcG9zaXRpb25pbmcgcmVsYXRpdmUgdG8gdGhlIGVkaXRhYmxlIGVsZW1lbnQuXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgb3V0bGluZSBzdHlsZXMuXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAvLyBQcmVzZXJ2ZSBhZGphY2VudCB3aGl0ZXNwYWNlIGFuZCBuZXcgbGluZXMuXG4gICAgICB3aGl0ZVNwYWNlOiAncHJlLXdyYXAnLFxuICAgICAgLy8gQWxsb3cgd29yZHMgdG8gYnJlYWsgaWYgdGhleSBhcmUgdG9vIGxvbmcuXG4gICAgICB3b3JkV3JhcDogJ2JyZWFrLXdvcmQnXG4gICAgfSwgc3R5bGUpLFxuICAgIG9uQ29weTogdXNlQ2FsbGJhY2soZXZlbnQgPT4ge1xuICAgICAgaWYgKGhhc0VkaXRhYmxlVGFyZ2V0KGVkaXRvciwgZXZlbnQudGFyZ2V0KSAmJiAhaXNFdmVudEhhbmRsZWQoZXZlbnQsIGF0dHJpYnV0ZXMub25Db3B5KSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBSZWFjdEVkaXRvci5zZXRGcmFnbWVudERhdGEoZWRpdG9yLCBldmVudC5jbGlwYm9hcmREYXRhKTtcbiAgICAgIH1cbiAgICB9LCBbYXR0cmlidXRlcy5vbkNvcHldKSxcbiAgICBvbkN1dDogdXNlQ2FsbGJhY2soZXZlbnQgPT4ge1xuICAgICAgaWYgKCFyZWFkT25seSAmJiBoYXNFZGl0YWJsZVRhcmdldChlZGl0b3IsIGV2ZW50LnRhcmdldCkgJiYgIWlzRXZlbnRIYW5kbGVkKGV2ZW50LCBhdHRyaWJ1dGVzLm9uQ3V0KSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBSZWFjdEVkaXRvci5zZXRGcmFnbWVudERhdGEoZWRpdG9yLCBldmVudC5jbGlwYm9hcmREYXRhKTtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBzZWxlY3Rpb25cbiAgICAgICAgfSA9IGVkaXRvcjtcblxuICAgICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgICAgaWYgKFJhbmdlLmlzRXhwYW5kZWQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgRWRpdG9yLmRlbGV0ZUZyYWdtZW50KGVkaXRvcik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gTm9kZS5wYXJlbnQoZWRpdG9yLCBzZWxlY3Rpb24uYW5jaG9yLnBhdGgpO1xuXG4gICAgICAgICAgICBpZiAoRWRpdG9yLmlzVm9pZChlZGl0b3IsIG5vZGUpKSB7XG4gICAgICAgICAgICAgIFRyYW5zZm9ybXMuZGVsZXRlKGVkaXRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW3JlYWRPbmx5LCBhdHRyaWJ1dGVzLm9uQ3V0XSksXG4gICAgb25Gb2N1czogdXNlQ2FsbGJhY2soZXZlbnQgPT4ge1xuICAgICAgaWYgKCFyZWFkT25seSAmJiAhc3RhdGUuaXNVcGRhdGluZ1NlbGVjdGlvbiAmJiBoYXNFZGl0YWJsZVRhcmdldChlZGl0b3IsIGV2ZW50LnRhcmdldCkgJiYgIWlzRXZlbnRIYW5kbGVkKGV2ZW50LCBhdHRyaWJ1dGVzLm9uRm9jdXMpKSB7XG4gICAgICAgIHZhciByb290ID0gUmVhY3RFZGl0b3IuZmluZERvY3VtZW50T3JTaGFkb3dSb290KGVkaXRvcik7XG4gICAgICAgIHN0YXRlLmxhdGVzdEVsZW1lbnQgPSByb290LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIElTX0ZPQ1VTRUQuc2V0KGVkaXRvciwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSwgW3JlYWRPbmx5LCBhdHRyaWJ1dGVzLm9uRm9jdXNdKSxcbiAgICBvbkJsdXI6IHVzZUNhbGxiYWNrKGV2ZW50ID0+IHtcbiAgICAgIGlmIChyZWFkT25seSB8fCBzdGF0ZS5pc1VwZGF0aW5nU2VsZWN0aW9uIHx8ICFoYXNFZGl0YWJsZVRhcmdldChlZGl0b3IsIGV2ZW50LnRhcmdldCkgfHwgaXNFdmVudEhhbmRsZWQoZXZlbnQsIGF0dHJpYnV0ZXMub25CbHVyKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIENPTVBBVDogSWYgdGhlIGN1cnJlbnQgYGFjdGl2ZUVsZW1lbnRgIGlzIHN0aWxsIHRoZSBwcmV2aW91c1xuICAgICAgLy8gb25lLCB0aGlzIGlzIGR1ZSB0byB0aGUgd2luZG93IGJlaW5nIGJsdXJyZWQgd2hlbiB0aGUgdGFiXG4gICAgICAvLyBpdHNlbGYgYmVjb21lcyB1bmZvY3VzZWQsIHNvIHdlIHdhbnQgdG8gYWJvcnQgZWFybHkgdG8gYWxsb3cgdG9cbiAgICAgIC8vIGVkaXRvciB0byBzdGF5IGZvY3VzZWQgd2hlbiB0aGUgdGFiIGJlY29tZXMgZm9jdXNlZCBhZ2Fpbi5cblxuXG4gICAgICB2YXIgcm9vdCA9IFJlYWN0RWRpdG9yLmZpbmREb2N1bWVudE9yU2hhZG93Um9vdChlZGl0b3IpO1xuXG4gICAgICBpZiAoc3RhdGUubGF0ZXN0RWxlbWVudCA9PT0gcm9vdC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldFxuICAgICAgfSA9IGV2ZW50O1xuICAgICAgdmFyIGVsID0gUmVhY3RFZGl0b3IudG9ET01Ob2RlKGVkaXRvciwgZWRpdG9yKTsgLy8gQ09NUEFUOiBUaGUgZXZlbnQgc2hvdWxkIGJlIGlnbm9yZWQgaWYgdGhlIGZvY3VzIGlzIHJldHVybmluZ1xuICAgICAgLy8gdG8gdGhlIGVkaXRvciBmcm9tIGFuIGVtYmVkZGVkIGVkaXRhYmxlIGVsZW1lbnQgKGVnLiBhbiA8aW5wdXQ+XG4gICAgICAvLyBlbGVtZW50IGluc2lkZSBhIHZvaWQgbm9kZSkuXG5cbiAgICAgIGlmIChyZWxhdGVkVGFyZ2V0ID09PSBlbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIENPTVBBVDogVGhlIGV2ZW50IHNob3VsZCBiZSBpZ25vcmVkIGlmIHRoZSBmb2N1cyBpcyBtb3ZpbmcgZnJvbVxuICAgICAgLy8gdGhlIGVkaXRvciB0byBpbnNpZGUgYSB2b2lkIG5vZGUncyBzcGFjZXIgZWxlbWVudC5cblxuXG4gICAgICBpZiAoaXNET01FbGVtZW50KHJlbGF0ZWRUYXJnZXQpICYmIHJlbGF0ZWRUYXJnZXQuaGFzQXR0cmlidXRlKCdkYXRhLXNsYXRlLXNwYWNlcicpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gQ09NUEFUOiBUaGUgZXZlbnQgc2hvdWxkIGJlIGlnbm9yZWQgaWYgdGhlIGZvY3VzIGlzIG1vdmluZyB0byBhXG4gICAgICAvLyBub24tIGVkaXRhYmxlIHNlY3Rpb24gb2YgYW4gZWxlbWVudCB0aGF0IGlzbid0IGEgdm9pZCBub2RlIChlZy5cbiAgICAgIC8vIGEgbGlzdCBpdGVtIG9mIHRoZSBjaGVjayBsaXN0IGV4YW1wbGUpLlxuXG5cbiAgICAgIGlmIChyZWxhdGVkVGFyZ2V0ICE9IG51bGwgJiYgaXNET01Ob2RlKHJlbGF0ZWRUYXJnZXQpICYmIFJlYWN0RWRpdG9yLmhhc0RPTU5vZGUoZWRpdG9yLCByZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgICB2YXIgbm9kZSA9IFJlYWN0RWRpdG9yLnRvU2xhdGVOb2RlKGVkaXRvciwgcmVsYXRlZFRhcmdldCk7XG5cbiAgICAgICAgaWYgKEVsZW1lbnQkMS5pc0VsZW1lbnQobm9kZSkgJiYgIWVkaXRvci5pc1ZvaWQobm9kZSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgSVNfRk9DVVNFRC5kZWxldGUoZWRpdG9yKTtcbiAgICB9LCBbcmVhZE9ubHksIGF0dHJpYnV0ZXMub25CbHVyXSksXG4gICAgb25QYXN0ZTogdXNlQ2FsbGJhY2soZXZlbnQgPT4ge1xuICAgICAgLy8gVGhpcyB1bmZvcnR1bmF0ZWx5IG5lZWRzIHRvIGJlIGhhbmRsZWQgd2l0aCBwYXN0ZSBldmVudHMgaW5zdGVhZC5cbiAgICAgIGlmIChoYXNFZGl0YWJsZVRhcmdldChlZGl0b3IsIGV2ZW50LnRhcmdldCkgJiYgIWlzRXZlbnRIYW5kbGVkKGV2ZW50LCBhdHRyaWJ1dGVzLm9uUGFzdGUpICYmICFyZWFkT25seSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBSZWFjdEVkaXRvci5pbnNlcnREYXRhKGVkaXRvciwgZXZlbnQuY2xpcGJvYXJkRGF0YSk7XG4gICAgICB9XG4gICAgfSwgW3JlYWRPbmx5LCBhdHRyaWJ1dGVzLm9uUGFzdGVdKVxuICB9KSwgdXNlQ2hpbGRyZW4oe1xuICAgIGRlY29yYXRpb25zLFxuICAgIG5vZGU6IGVkaXRvcixcbiAgICByZW5kZXJFbGVtZW50LFxuICAgIHJlbmRlclBsYWNlaG9sZGVyLFxuICAgIHJlbmRlckxlYWYsXG4gICAgc2VsZWN0aW9uOiBlZGl0b3Iuc2VsZWN0aW9uXG4gIH0pKSkpO1xufTtcblxuLyoqXHJcbiAqIEEgUmVhY3QgY29udGV4dCBmb3Igc2hhcmluZyB0aGUgYGZvY3VzZWRgIHN0YXRlIG9mIHRoZSBlZGl0b3IuXHJcbiAqL1xuXG52YXIgRm9jdXNlZENvbnRleHQgPSAvKiNfX1BVUkVfXyovY3JlYXRlQ29udGV4dChmYWxzZSk7XG4vKipcclxuICogR2V0IHRoZSBjdXJyZW50IGBmb2N1c2VkYCBzdGF0ZSBvZiB0aGUgZWRpdG9yLlxyXG4gKi9cblxudmFyIHVzZUZvY3VzZWQgPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KEZvY3VzZWRDb250ZXh0KTtcbn07XG5cbi8qKlxyXG4gKiBBIHdyYXBwZXIgYXJvdW5kIHRoZSBwcm92aWRlciB0byBoYW5kbGUgYG9uQ2hhbmdlYCBldmVudHMsIGJlY2F1c2UgdGhlIGVkaXRvclxyXG4gKiBpcyBhIG11dGFibGUgc2luZ2xldG9uIHNvIGl0IHdvbid0IGV2ZXIgcmVnaXN0ZXIgYXMgXCJjaGFuZ2VkXCIgb3RoZXJ3aXNlLlxyXG4gKi9cblxudmFyIFNsYXRlID0gcHJvcHMgPT4ge1xuICB2YXIge1xuICAgIGVkaXRvcixcbiAgICBjaGlsZHJlbixcbiAgICBvbkNoYW5nZSxcbiAgICB2YWx1ZVxuICB9ID0gcHJvcHMsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJlZGl0b3JcIiwgXCJjaGlsZHJlblwiLCBcIm9uQ2hhbmdlXCIsIFwidmFsdWVcIl0pO1xuXG4gIHZhciBba2V5LCBzZXRLZXldID0gdXNlU3RhdGUoMCk7XG4gIHZhciBjb250ZXh0ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaW52YXJpYW50KE5vZGUuaXNOb2RlTGlzdCh2YWx1ZSksIFwiW1NsYXRlXSB2YWx1ZSBpcyBpbnZhbGlkISBFeHBlY3RlZCBhIGxpc3Qgb2YgZWxlbWVudHMgYnV0IGdvdDogXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KHZhbHVlKSkpO1xuICAgIGludmFyaWFudChFZGl0b3IuaXNFZGl0b3IoZWRpdG9yKSwgXCJbU2xhdGVdIGVkaXRvciBpcyBpbnZhbGlkISB5b3UgcGFzc2VkOiBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkoZWRpdG9yKSkpO1xuICAgIGVkaXRvci5jaGlsZHJlbiA9IHZhbHVlO1xuICAgIE9iamVjdC5hc3NpZ24oZWRpdG9yLCByZXN0KTtcbiAgICByZXR1cm4gW2VkaXRvcl07XG4gIH0sIFtrZXksIHZhbHVlLCAuLi5PYmplY3QudmFsdWVzKHJlc3QpXSk7XG4gIHZhciBvbkNvbnRleHRDaGFuZ2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgb25DaGFuZ2UoZWRpdG9yLmNoaWxkcmVuKTtcbiAgICBzZXRLZXkoa2V5ICsgMSk7XG4gIH0sIFtrZXksIG9uQ2hhbmdlXSk7XG4gIEVESVRPUl9UT19PTl9DSEFOR0Uuc2V0KGVkaXRvciwgb25Db250ZXh0Q2hhbmdlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgRURJVE9SX1RPX09OX0NIQU5HRS5zZXQoZWRpdG9yLCAoKSA9PiB7fSk7XG4gICAgfTtcbiAgfSwgW10pO1xuICB2YXIgW2lzRm9jdXNlZCwgc2V0SXNGb2N1c2VkXSA9IHVzZVN0YXRlKFJlYWN0RWRpdG9yLmlzRm9jdXNlZChlZGl0b3IpKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0ZvY3VzZWQoUmVhY3RFZGl0b3IuaXNGb2N1c2VkKGVkaXRvcikpO1xuICB9KTtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIGZuID0gKCkgPT4gc2V0SXNGb2N1c2VkKFJlYWN0RWRpdG9yLmlzRm9jdXNlZChlZGl0b3IpKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZm4sIHRydWUpO1xuICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIGZuLCB0cnVlKTtcbiAgfSwgW10pO1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICB2YXIgZm4gPSAoKSA9PiBzZXRJc0ZvY3VzZWQoUmVhY3RFZGl0b3IuaXNGb2N1c2VkKGVkaXRvcikpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZuLCB0cnVlKTtcbiAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIGZuLCB0cnVlKTtcbiAgfSwgW10pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2xhdGVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGNvbnRleHRcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRWRpdG9yQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBlZGl0b3JcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRm9jdXNlZENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogaXNGb2N1c2VkXG4gIH0sIGNoaWxkcmVuKSkpO1xufTtcblxuLyoqXHJcbiAqIEdldCB0aGUgY3VycmVudCBlZGl0b3Igb2JqZWN0IGZyb20gdGhlIFJlYWN0IGNvbnRleHQuXHJcbiAqIEBkZXByZWNhdGVkIFVzZSB1c2VTbGF0ZVN0YXRpYyBpbnN0ZWFkLlxyXG4gKi9cblxudmFyIHVzZUVkaXRvciA9ICgpID0+IHtcbiAgdmFyIGVkaXRvciA9IHVzZUNvbnRleHQoRWRpdG9yQ29udGV4dCk7XG5cbiAgaWYgKCFlZGl0b3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgYHVzZUVkaXRvcmAgaG9vayBtdXN0IGJlIHVzZWQgaW5zaWRlIHRoZSA8U2xhdGU+IGNvbXBvbmVudCdzIGNvbnRleHQuXCIpO1xuICB9XG5cbiAgcmV0dXJuIGVkaXRvcjtcbn07XG5cbi8qKlxyXG4gKiBVdGlsaXRpZXMgZm9yIHNpbmdsZS1saW5lIGRlbGV0aW9uXHJcbiAqL1xuXG52YXIgZG9SZWN0c0ludGVyc2VjdCA9IChyZWN0LCBjb21wYXJlUmVjdCkgPT4ge1xuICB2YXIgbWlkZGxlID0gKGNvbXBhcmVSZWN0LnRvcCArIGNvbXBhcmVSZWN0LmJvdHRvbSkgLyAyO1xuICByZXR1cm4gcmVjdC50b3AgPD0gbWlkZGxlICYmIHJlY3QuYm90dG9tID49IG1pZGRsZTtcbn07XG5cbnZhciBhcmVSYW5nZXNTYW1lTGluZSA9IChlZGl0b3IsIHJhbmdlMSwgcmFuZ2UyKSA9PiB7XG4gIHZhciByZWN0MSA9IFJlYWN0RWRpdG9yLnRvRE9NUmFuZ2UoZWRpdG9yLCByYW5nZTEpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgcmVjdDIgPSBSZWFjdEVkaXRvci50b0RPTVJhbmdlKGVkaXRvciwgcmFuZ2UyKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIGRvUmVjdHNJbnRlcnNlY3QocmVjdDEsIHJlY3QyKSAmJiBkb1JlY3RzSW50ZXJzZWN0KHJlY3QyLCByZWN0MSk7XG59O1xuLyoqXHJcbiAqIEEgaGVscGVyIHV0aWxpdHkgdGhhdCByZXR1cm5zIHRoZSBlbmQgcG9ydGlvbiBvZiBhIGBSYW5nZWBcclxuICogd2hpY2ggaXMgbG9jYXRlZCBvbiBhIHNpbmdsZSBsaW5lLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VkaXRvcn0gZWRpdG9yIFRoZSBlZGl0b3Igb2JqZWN0IHRvIGNvbXBhcmUgYWdhaW5zdFxyXG4gKiBAcGFyYW0ge1JhbmdlfSBwYXJlbnRSYW5nZSBUaGUgcGFyZW50IHJhbmdlIHRvIGNvbXBhcmUgYWdhaW5zdFxyXG4gKiBAcmV0dXJucyB7UmFuZ2V9IEEgdmFsaWQgcG9ydGlvbiBvZiB0aGUgcGFyZW50UmFuZ2Ugd2hpY2ggaXMgb25lIGEgc2luZ2xlIGxpbmVcclxuICovXG5cblxudmFyIGZpbmRDdXJyZW50TGluZVJhbmdlID0gKGVkaXRvciwgcGFyZW50UmFuZ2UpID0+IHtcbiAgdmFyIHBhcmVudFJhbmdlQm91bmRhcnkgPSBFZGl0b3IucmFuZ2UoZWRpdG9yLCBSYW5nZS5lbmQocGFyZW50UmFuZ2UpKTtcbiAgdmFyIHBvc2l0aW9ucyA9IEFycmF5LmZyb20oRWRpdG9yLnBvc2l0aW9ucyhlZGl0b3IsIHtcbiAgICBhdDogcGFyZW50UmFuZ2VcbiAgfSkpO1xuICB2YXIgbGVmdCA9IDA7XG4gIHZhciByaWdodCA9IHBvc2l0aW9ucy5sZW5ndGg7XG4gIHZhciBtaWRkbGUgPSBNYXRoLmZsb29yKHJpZ2h0IC8gMik7XG5cbiAgaWYgKGFyZVJhbmdlc1NhbWVMaW5lKGVkaXRvciwgRWRpdG9yLnJhbmdlKGVkaXRvciwgcG9zaXRpb25zW2xlZnRdKSwgcGFyZW50UmFuZ2VCb3VuZGFyeSkpIHtcbiAgICByZXR1cm4gRWRpdG9yLnJhbmdlKGVkaXRvciwgcG9zaXRpb25zW2xlZnRdLCBwYXJlbnRSYW5nZUJvdW5kYXJ5KTtcbiAgfVxuXG4gIGlmIChwb3NpdGlvbnMubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBFZGl0b3IucmFuZ2UoZWRpdG9yLCBwb3NpdGlvbnNbcG9zaXRpb25zLmxlbmd0aCAtIDFdLCBwYXJlbnRSYW5nZUJvdW5kYXJ5KTtcbiAgfVxuXG4gIHdoaWxlIChtaWRkbGUgIT09IHBvc2l0aW9ucy5sZW5ndGggJiYgbWlkZGxlICE9PSBsZWZ0KSB7XG4gICAgaWYgKGFyZVJhbmdlc1NhbWVMaW5lKGVkaXRvciwgRWRpdG9yLnJhbmdlKGVkaXRvciwgcG9zaXRpb25zW21pZGRsZV0pLCBwYXJlbnRSYW5nZUJvdW5kYXJ5KSkge1xuICAgICAgcmlnaHQgPSBtaWRkbGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlZnQgPSBtaWRkbGU7XG4gICAgfVxuXG4gICAgbWlkZGxlID0gTWF0aC5mbG9vcigobGVmdCArIHJpZ2h0KSAvIDIpO1xuICB9XG5cbiAgcmV0dXJuIEVkaXRvci5yYW5nZShlZGl0b3IsIHBvc2l0aW9uc1tyaWdodF0sIHBhcmVudFJhbmdlQm91bmRhcnkpO1xufTtcblxuLyoqXHJcbiAqIGB3aXRoUmVhY3RgIGFkZHMgUmVhY3QgYW5kIERPTSBzcGVjaWZpYyBiZWhhdmlvcnMgdG8gdGhlIGVkaXRvci5cclxuICpcclxuICogSWYgeW91IGFyZSB1c2luZyBUeXBlU2NyaXB0LCB5b3UgbXVzdCBleHRlbmQgU2xhdGUncyBDdXN0b21UeXBlcyB0byB1c2VcclxuICogdGhpcyBwbHVnaW4uXHJcbiAqXHJcbiAqIFNlZSBodHRwczovL2RvY3Muc2xhdGVqcy5vcmcvY29uY2VwdHMvMTEtdHlwZXNjcmlwdCB0byBsZWFybiBob3cuXHJcbiAqL1xuXG52YXIgd2l0aFJlYWN0ID0gZWRpdG9yID0+IHtcbiAgdmFyIGUgPSBlZGl0b3I7XG4gIHZhciB7XG4gICAgYXBwbHksXG4gICAgb25DaGFuZ2UsXG4gICAgZGVsZXRlQmFja3dhcmRcbiAgfSA9IGU7XG5cbiAgZS5kZWxldGVCYWNrd2FyZCA9IHVuaXQgPT4ge1xuICAgIGlmICh1bml0ICE9PSAnbGluZScpIHtcbiAgICAgIHJldHVybiBkZWxldGVCYWNrd2FyZCh1bml0KTtcbiAgICB9XG5cbiAgICBpZiAoZWRpdG9yLnNlbGVjdGlvbiAmJiBSYW5nZS5pc0NvbGxhcHNlZChlZGl0b3Iuc2VsZWN0aW9uKSkge1xuICAgICAgdmFyIHBhcmVudEJsb2NrRW50cnkgPSBFZGl0b3IuYWJvdmUoZWRpdG9yLCB7XG4gICAgICAgIG1hdGNoOiBuID0+IEVkaXRvci5pc0Jsb2NrKGVkaXRvciwgbiksXG4gICAgICAgIGF0OiBlZGl0b3Iuc2VsZWN0aW9uXG4gICAgICB9KTtcblxuICAgICAgaWYgKHBhcmVudEJsb2NrRW50cnkpIHtcbiAgICAgICAgdmFyIFssIHBhcmVudEJsb2NrUGF0aF0gPSBwYXJlbnRCbG9ja0VudHJ5O1xuICAgICAgICB2YXIgcGFyZW50RWxlbWVudFJhbmdlID0gRWRpdG9yLnJhbmdlKGVkaXRvciwgcGFyZW50QmxvY2tQYXRoLCBlZGl0b3Iuc2VsZWN0aW9uLmFuY2hvcik7XG4gICAgICAgIHZhciBjdXJyZW50TGluZVJhbmdlID0gZmluZEN1cnJlbnRMaW5lUmFuZ2UoZSwgcGFyZW50RWxlbWVudFJhbmdlKTtcblxuICAgICAgICBpZiAoIVJhbmdlLmlzQ29sbGFwc2VkKGN1cnJlbnRMaW5lUmFuZ2UpKSB7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5kZWxldGUoZWRpdG9yLCB7XG4gICAgICAgICAgICBhdDogY3VycmVudExpbmVSYW5nZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGUuYXBwbHkgPSBvcCA9PiB7XG4gICAgdmFyIG1hdGNoZXMgPSBbXTtcblxuICAgIHN3aXRjaCAob3AudHlwZSkge1xuICAgICAgY2FzZSAnaW5zZXJ0X3RleHQnOlxuICAgICAgY2FzZSAncmVtb3ZlX3RleHQnOlxuICAgICAgY2FzZSAnc2V0X25vZGUnOlxuICAgICAgICB7XG4gICAgICAgICAgZm9yICh2YXIgW25vZGUsIHBhdGhdIG9mIEVkaXRvci5sZXZlbHMoZSwge1xuICAgICAgICAgICAgYXQ6IG9wLnBhdGhcbiAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IFJlYWN0RWRpdG9yLmZpbmRLZXkoZSwgbm9kZSk7XG4gICAgICAgICAgICBtYXRjaGVzLnB1c2goW3BhdGgsIGtleV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ2luc2VydF9ub2RlJzpcbiAgICAgIGNhc2UgJ3JlbW92ZV9ub2RlJzpcbiAgICAgIGNhc2UgJ21lcmdlX25vZGUnOlxuICAgICAgY2FzZSAnc3BsaXRfbm9kZSc6XG4gICAgICAgIHtcbiAgICAgICAgICBmb3IgKHZhciBbX25vZGUsIF9wYXRoXSBvZiBFZGl0b3IubGV2ZWxzKGUsIHtcbiAgICAgICAgICAgIGF0OiBQYXRoLnBhcmVudChvcC5wYXRoKVxuICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICB2YXIgX2tleSA9IFJlYWN0RWRpdG9yLmZpbmRLZXkoZSwgX25vZGUpO1xuXG4gICAgICAgICAgICBtYXRjaGVzLnB1c2goW19wYXRoLCBfa2V5XSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAnbW92ZV9ub2RlJzpcbiAgICAgICAge1xuICAgICAgICAgIGZvciAodmFyIFtfbm9kZTIsIF9wYXRoMl0gb2YgRWRpdG9yLmxldmVscyhlLCB7XG4gICAgICAgICAgICBhdDogUGF0aC5jb21tb24oUGF0aC5wYXJlbnQob3AucGF0aCksIFBhdGgucGFyZW50KG9wLm5ld1BhdGgpKVxuICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICB2YXIgX2tleTIgPSBSZWFjdEVkaXRvci5maW5kS2V5KGUsIF9ub2RlMik7XG5cbiAgICAgICAgICAgIG1hdGNoZXMucHVzaChbX3BhdGgyLCBfa2V5Ml0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXBwbHkob3ApO1xuXG4gICAgZm9yICh2YXIgW19wYXRoMywgX2tleTNdIG9mIG1hdGNoZXMpIHtcbiAgICAgIHZhciBbX25vZGUzXSA9IEVkaXRvci5ub2RlKGUsIF9wYXRoMyk7XG4gICAgICBOT0RFX1RPX0tFWS5zZXQoX25vZGUzLCBfa2V5Myk7XG4gICAgfVxuICB9O1xuXG4gIGUuc2V0RnJhZ21lbnREYXRhID0gZGF0YSA9PiB7XG4gICAgdmFyIHtcbiAgICAgIHNlbGVjdGlvblxuICAgIH0gPSBlO1xuXG4gICAgaWYgKCFzZWxlY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgW3N0YXJ0LCBlbmRdID0gUmFuZ2UuZWRnZXMoc2VsZWN0aW9uKTtcbiAgICB2YXIgc3RhcnRWb2lkID0gRWRpdG9yLnZvaWQoZSwge1xuICAgICAgYXQ6IHN0YXJ0LnBhdGhcbiAgICB9KTtcbiAgICB2YXIgZW5kVm9pZCA9IEVkaXRvci52b2lkKGUsIHtcbiAgICAgIGF0OiBlbmQucGF0aFxuICAgIH0pO1xuXG4gICAgaWYgKFJhbmdlLmlzQ29sbGFwc2VkKHNlbGVjdGlvbikgJiYgIXN0YXJ0Vm9pZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gQ3JlYXRlIGEgZmFrZSBzZWxlY3Rpb24gc28gdGhhdCB3ZSBjYW4gYWRkIGEgQmFzZTY0LWVuY29kZWQgY29weSBvZiB0aGVcbiAgICAvLyBmcmFnbWVudCB0byB0aGUgSFRNTCwgdG8gZGVjb2RlIG9uIGZ1dHVyZSBwYXN0ZXMuXG5cblxuICAgIHZhciBkb21SYW5nZSA9IFJlYWN0RWRpdG9yLnRvRE9NUmFuZ2UoZSwgc2VsZWN0aW9uKTtcbiAgICB2YXIgY29udGVudHMgPSBkb21SYW5nZS5jbG9uZUNvbnRlbnRzKCk7XG4gICAgdmFyIGF0dGFjaCA9IGNvbnRlbnRzLmNoaWxkTm9kZXNbMF07IC8vIE1ha2Ugc3VyZSBhdHRhY2ggaXMgbm9uLWVtcHR5LCBzaW5jZSBlbXB0eSBub2RlcyB3aWxsIG5vdCBnZXQgY29waWVkLlxuXG4gICAgY29udGVudHMuY2hpbGROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgaWYgKG5vZGUudGV4dENvbnRlbnQgJiYgbm9kZS50ZXh0Q29udGVudC50cmltKCkgIT09ICcnKSB7XG4gICAgICAgIGF0dGFjaCA9IG5vZGU7XG4gICAgICB9XG4gICAgfSk7IC8vIENPTVBBVDogSWYgdGhlIGVuZCBub2RlIGlzIGEgdm9pZCBub2RlLCB3ZSBuZWVkIHRvIG1vdmUgdGhlIGVuZCBvZiB0aGVcbiAgICAvLyByYW5nZSBmcm9tIHRoZSB2b2lkIG5vZGUncyBzcGFjZXIgc3BhbiwgdG8gdGhlIGVuZCBvZiB0aGUgdm9pZCBub2RlJ3NcbiAgICAvLyBjb250ZW50LCBzaW5jZSB0aGUgc3BhY2VyIGlzIGJlZm9yZSB2b2lkJ3MgY29udGVudCBpbiB0aGUgRE9NLlxuXG4gICAgaWYgKGVuZFZvaWQpIHtcbiAgICAgIHZhciBbdm9pZE5vZGVdID0gZW5kVm9pZDtcbiAgICAgIHZhciByID0gZG9tUmFuZ2UuY2xvbmVSYW5nZSgpO1xuICAgICAgdmFyIGRvbU5vZGUgPSBSZWFjdEVkaXRvci50b0RPTU5vZGUoZSwgdm9pZE5vZGUpO1xuICAgICAgci5zZXRFbmRBZnRlcihkb21Ob2RlKTtcbiAgICAgIGNvbnRlbnRzID0gci5jbG9uZUNvbnRlbnRzKCk7XG4gICAgfSAvLyBDT01QQVQ6IElmIHRoZSBzdGFydCBub2RlIGlzIGEgdm9pZCBub2RlLCB3ZSBuZWVkIHRvIGF0dGFjaCB0aGUgZW5jb2RlZFxuICAgIC8vIGZyYWdtZW50IHRvIHRoZSB2b2lkIG5vZGUncyBjb250ZW50IG5vZGUgaW5zdGVhZCBvZiB0aGUgc3BhY2VyLCBiZWNhdXNlXG4gICAgLy8gYXR0YWNoaW5nIGl0IHRvIGVtcHR5IGA8ZGl2Pi88c3Bhbj5gIG5vZGVzIHdpbGwgZW5kIHVwIGhhdmluZyBpdCBlcmFzZWQgYnlcbiAgICAvLyBtb3N0IGJyb3dzZXJzLiAoMjAxOC8wNC8yNylcblxuXG4gICAgaWYgKHN0YXJ0Vm9pZCkge1xuICAgICAgYXR0YWNoID0gY29udGVudHMucXVlcnlTZWxlY3RvcignW2RhdGEtc2xhdGUtc3BhY2VyXScpO1xuICAgIH0gLy8gUmVtb3ZlIGFueSB6ZXJvLXdpZHRoIHNwYWNlIHNwYW5zIGZyb20gdGhlIGNsb25lZCBET00gc28gdGhhdCB0aGV5IGRvbid0XG4gICAgLy8gc2hvdyB1cCBlbHNld2hlcmUgd2hlbiBwYXN0ZWQuXG5cblxuICAgIEFycmF5LmZyb20oY29udGVudHMucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc2xhdGUtemVyby13aWR0aF0nKSkuZm9yRWFjaCh6dyA9PiB7XG4gICAgICB2YXIgaXNOZXdsaW5lID0gencuZ2V0QXR0cmlidXRlKCdkYXRhLXNsYXRlLXplcm8td2lkdGgnKSA9PT0gJ24nO1xuICAgICAgencudGV4dENvbnRlbnQgPSBpc05ld2xpbmUgPyAnXFxuJyA6ICcnO1xuICAgIH0pOyAvLyBTZXQgYSBgZGF0YS1zbGF0ZS1mcmFnbWVudGAgYXR0cmlidXRlIG9uIGEgbm9uLWVtcHR5IG5vZGUsIHNvIGl0IHNob3dzIHVwXG4gICAgLy8gaW4gdGhlIEhUTUwsIGFuZCBjYW4gYmUgdXNlZCBmb3IgaW50cmEtU2xhdGUgcGFzdGluZy4gSWYgaXQncyBhIHRleHRcbiAgICAvLyBub2RlLCB3cmFwIGl0IGluIGEgYDxzcGFuPmAgc28gd2UgaGF2ZSBzb21ldGhpbmcgdG8gc2V0IGFuIGF0dHJpYnV0ZSBvbi5cblxuICAgIGlmIChpc0RPTVRleHQoYXR0YWNoKSkge1xuICAgICAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7IC8vIENPTVBBVDogSW4gQ2hyb21lIGFuZCBTYWZhcmksIGlmIHdlIGRvbid0IGFkZCB0aGUgYHdoaXRlLXNwYWNlYCBzdHlsZVxuICAgICAgLy8gdGhlbiBsZWFkaW5nIGFuZCB0cmFpbGluZyBzcGFjZXMgd2lsbCBiZSBpZ25vcmVkLiAoMjAxNy8wOS8yMSlcblxuICAgICAgc3Bhbi5zdHlsZS53aGl0ZVNwYWNlID0gJ3ByZSc7XG4gICAgICBzcGFuLmFwcGVuZENoaWxkKGF0dGFjaCk7XG4gICAgICBjb250ZW50cy5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgIGF0dGFjaCA9IHNwYW47XG4gICAgfVxuXG4gICAgdmFyIGZyYWdtZW50ID0gZS5nZXRGcmFnbWVudCgpO1xuICAgIHZhciBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeShmcmFnbWVudCk7XG4gICAgdmFyIGVuY29kZWQgPSB3aW5kb3cuYnRvYShlbmNvZGVVUklDb21wb25lbnQoc3RyaW5nKSk7XG4gICAgYXR0YWNoLnNldEF0dHJpYnV0ZSgnZGF0YS1zbGF0ZS1mcmFnbWVudCcsIGVuY29kZWQpO1xuICAgIGRhdGEuc2V0RGF0YSgnYXBwbGljYXRpb24veC1zbGF0ZS1mcmFnbWVudCcsIGVuY29kZWQpOyAvLyBBZGQgdGhlIGNvbnRlbnQgdG8gYSA8ZGl2PiBzbyB0aGF0IHdlIGNhbiBnZXQgaXRzIGlubmVyIEhUTUwuXG5cbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNvbnRlbnRzKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAndHJ1ZScpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBkYXRhLnNldERhdGEoJ3RleHQvaHRtbCcsIGRpdi5pbm5lckhUTUwpO1xuICAgIGRhdGEuc2V0RGF0YSgndGV4dC9wbGFpbicsIGdldFBsYWluVGV4dChkaXYpKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdik7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgZS5pbnNlcnREYXRhID0gZGF0YSA9PiB7XG4gICAgdmFyIGZyYWdtZW50ID0gZGF0YS5nZXREYXRhKCdhcHBsaWNhdGlvbi94LXNsYXRlLWZyYWdtZW50Jyk7XG5cbiAgICBpZiAoZnJhZ21lbnQpIHtcbiAgICAgIHZhciBkZWNvZGVkID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5hdG9iKGZyYWdtZW50KSk7XG4gICAgICB2YXIgcGFyc2VkID0gSlNPTi5wYXJzZShkZWNvZGVkKTtcbiAgICAgIGUuaW5zZXJ0RnJhZ21lbnQocGFyc2VkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdGV4dCA9IGRhdGEuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuXG4gICAgaWYgKHRleHQpIHtcbiAgICAgIHZhciBsaW5lcyA9IHRleHQuc3BsaXQoL1xcclxcbnxcXHJ8XFxuLyk7XG4gICAgICB2YXIgc3BsaXQgPSBmYWxzZTtcblxuICAgICAgZm9yICh2YXIgbGluZSBvZiBsaW5lcykge1xuICAgICAgICBpZiAoc3BsaXQpIHtcbiAgICAgICAgICBUcmFuc2Zvcm1zLnNwbGl0Tm9kZXMoZSwge1xuICAgICAgICAgICAgYWx3YXlzOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBlLmluc2VydFRleHQobGluZSk7XG4gICAgICAgIHNwbGl0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZS5vbkNoYW5nZSA9ICgpID0+IHtcbiAgICAvLyBDT01QQVQ6IFJlYWN0IGRvZXNuJ3QgYmF0Y2ggYHNldFN0YXRlYCBob29rIGNhbGxzLCB3aGljaCBtZWFucyB0aGF0IHRoZVxuICAgIC8vIGNoaWxkcmVuIGFuZCBzZWxlY3Rpb24gY2FuIGdldCBvdXQgb2Ygc3luYyBmb3Igb25lIHJlbmRlciBwYXNzLiBTbyB3ZVxuICAgIC8vIGhhdmUgdG8gdXNlIHRoaXMgdW5zdGFibGUgQVBJIHRvIGVuc3VyZSBpdCBiYXRjaGVzIHRoZW0uICgyMDE5LzEyLzAzKVxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTQyNTkjaXNzdWVjb21tZW50LTQzOTcwMjM2N1xuICAgIFJlYWN0RE9NLnVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzKCgpID0+IHtcbiAgICAgIHZhciBvbkNvbnRleHRDaGFuZ2UgPSBFRElUT1JfVE9fT05fQ0hBTkdFLmdldChlKTtcblxuICAgICAgaWYgKG9uQ29udGV4dENoYW5nZSkge1xuICAgICAgICBvbkNvbnRleHRDaGFuZ2UoKTtcbiAgICAgIH1cblxuICAgICAgb25DaGFuZ2UoKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gZTtcbn07XG5cbi8vIENvbXBvbmVudHNcbnZhciBFZGl0YWJsZSQxID0gSVNfQU5EUk9JRCA/IEFuZHJvaWRFZGl0YWJsZSA6IEVkaXRhYmxlO1xuXG5leHBvcnQgeyBBbmRyb2lkRWRpdGFibGUsIEVkaXRhYmxlIGFzIERlZmF1bHRFZGl0YWJsZSwgRGVmYXVsdEVsZW1lbnQsIERlZmF1bHRMZWFmLCBEZWZhdWx0UGxhY2Vob2xkZXIsIEVkaXRhYmxlJDEgYXMgRWRpdGFibGUsIFJlYWN0RWRpdG9yLCBTbGF0ZSwgdXNlRWRpdG9yLCB1c2VGb2N1c2VkLCB1c2VSZWFkT25seSwgdXNlU2VsZWN0ZWQsIHVzZVNsYXRlLCB1c2VTbGF0ZVN0YXRpYywgd2l0aFJlYWN0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lcy5qcy5tYXBcbiIsInZhciBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xudmFyIHByZWZpeCA9ICdJbnZhcmlhbnQgZmFpbGVkJztcbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKGNvbmRpdGlvbikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJlZml4KTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJlZml4ICsgXCI6IFwiICsgKG1lc3NhZ2UgfHwgJycpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbnZhcmlhbnQ7XG4iLCJpbXBvcnQgeyBpc1BsYWluT2JqZWN0IH0gZnJvbSAnaXMtcGxhaW4tb2JqZWN0JztcbmltcG9ydCB7IHByb2R1Y2UsIGNyZWF0ZURyYWZ0LCBmaW5pc2hEcmFmdCwgaXNEcmFmdCB9IGZyb20gJ2ltbWVyJztcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbnZhciBESVJUWV9QQVRIUyA9IG5ldyBXZWFrTWFwKCk7XG52YXIgRkxVU0hJTkcgPSBuZXcgV2Vha01hcCgpO1xudmFyIE5PUk1BTElaSU5HID0gbmV3IFdlYWtNYXAoKTtcbnZhciBQQVRIX1JFRlMgPSBuZXcgV2Vha01hcCgpO1xudmFyIFBPSU5UX1JFRlMgPSBuZXcgV2Vha01hcCgpO1xudmFyIFJBTkdFX1JFRlMgPSBuZXcgV2Vha01hcCgpO1xuXG5mdW5jdGlvbiBvd25LZXlzJDkob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDkodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQ5KE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkOShPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cbi8qKlxyXG4gKiBDcmVhdGUgYSBuZXcgU2xhdGUgYEVkaXRvcmAgb2JqZWN0LlxyXG4gKi9cblxudmFyIGNyZWF0ZUVkaXRvciA9ICgpID0+IHtcbiAgdmFyIGVkaXRvciA9IHtcbiAgICBjaGlsZHJlbjogW10sXG4gICAgb3BlcmF0aW9uczogW10sXG4gICAgc2VsZWN0aW9uOiBudWxsLFxuICAgIG1hcmtzOiBudWxsLFxuICAgIGlzSW5saW5lOiAoKSA9PiBmYWxzZSxcbiAgICBpc1ZvaWQ6ICgpID0+IGZhbHNlLFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBhcHBseTogb3AgPT4ge1xuICAgICAgZm9yICh2YXIgcmVmIG9mIEVkaXRvci5wYXRoUmVmcyhlZGl0b3IpKSB7XG4gICAgICAgIFBhdGhSZWYudHJhbnNmb3JtKHJlZiwgb3ApO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfcmVmIG9mIEVkaXRvci5wb2ludFJlZnMoZWRpdG9yKSkge1xuICAgICAgICBQb2ludFJlZi50cmFuc2Zvcm0oX3JlZiwgb3ApO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfcmVmMiBvZiBFZGl0b3IucmFuZ2VSZWZzKGVkaXRvcikpIHtcbiAgICAgICAgUmFuZ2VSZWYudHJhbnNmb3JtKF9yZWYyLCBvcCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzZXQgPSBuZXcgU2V0KCk7XG4gICAgICB2YXIgZGlydHlQYXRocyA9IFtdO1xuXG4gICAgICB2YXIgYWRkID0gcGF0aCA9PiB7XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgdmFyIGtleSA9IHBhdGguam9pbignLCcpO1xuXG4gICAgICAgICAgaWYgKCFzZXQuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHNldC5hZGQoa2V5KTtcbiAgICAgICAgICAgIGRpcnR5UGF0aHMucHVzaChwYXRoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciBvbGREaXJ0eVBhdGhzID0gRElSVFlfUEFUSFMuZ2V0KGVkaXRvcikgfHwgW107XG4gICAgICB2YXIgbmV3RGlydHlQYXRocyA9IGdldERpcnR5UGF0aHMob3ApO1xuXG4gICAgICBmb3IgKHZhciBwYXRoIG9mIG9sZERpcnR5UGF0aHMpIHtcbiAgICAgICAgdmFyIG5ld1BhdGggPSBQYXRoLnRyYW5zZm9ybShwYXRoLCBvcCk7XG4gICAgICAgIGFkZChuZXdQYXRoKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgX3BhdGggb2YgbmV3RGlydHlQYXRocykge1xuICAgICAgICBhZGQoX3BhdGgpO1xuICAgICAgfVxuXG4gICAgICBESVJUWV9QQVRIUy5zZXQoZWRpdG9yLCBkaXJ0eVBhdGhzKTtcbiAgICAgIFRyYW5zZm9ybXMudHJhbnNmb3JtKGVkaXRvciwgb3ApO1xuICAgICAgZWRpdG9yLm9wZXJhdGlvbnMucHVzaChvcCk7XG4gICAgICBFZGl0b3Iubm9ybWFsaXplKGVkaXRvcik7IC8vIENsZWFyIGFueSBmb3JtYXRzIGFwcGxpZWQgdG8gdGhlIGN1cnNvciBpZiB0aGUgc2VsZWN0aW9uIGNoYW5nZXMuXG5cbiAgICAgIGlmIChvcC50eXBlID09PSAnc2V0X3NlbGVjdGlvbicpIHtcbiAgICAgICAgZWRpdG9yLm1hcmtzID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFGTFVTSElORy5nZXQoZWRpdG9yKSkge1xuICAgICAgICBGTFVTSElORy5zZXQoZWRpdG9yLCB0cnVlKTtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgRkxVU0hJTkcuc2V0KGVkaXRvciwgZmFsc2UpO1xuICAgICAgICAgIGVkaXRvci5vbkNoYW5nZSgpO1xuICAgICAgICAgIGVkaXRvci5vcGVyYXRpb25zID0gW107XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgYWRkTWFyazogKGtleSwgdmFsdWUpID0+IHtcbiAgICAgIHZhciB7XG4gICAgICAgIHNlbGVjdGlvblxuICAgICAgfSA9IGVkaXRvcjtcblxuICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICBpZiAoUmFuZ2UuaXNFeHBhbmRlZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5zZXROb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICAgIFtrZXldOiB2YWx1ZVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1hdGNoOiBUZXh0LmlzVGV4dCxcbiAgICAgICAgICAgIHNwbGl0OiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG1hcmtzID0gX29iamVjdFNwcmVhZCQ5KF9vYmplY3RTcHJlYWQkOSh7fSwgRWRpdG9yLm1hcmtzKGVkaXRvcikgfHwge30pLCB7fSwge1xuICAgICAgICAgICAgW2tleV06IHZhbHVlXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBlZGl0b3IubWFya3MgPSBtYXJrcztcblxuICAgICAgICAgIGlmICghRkxVU0hJTkcuZ2V0KGVkaXRvcikpIHtcbiAgICAgICAgICAgIGVkaXRvci5vbkNoYW5nZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZGVsZXRlQmFja3dhcmQ6IHVuaXQgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgc2VsZWN0aW9uXG4gICAgICB9ID0gZWRpdG9yO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uICYmIFJhbmdlLmlzQ29sbGFwc2VkKHNlbGVjdGlvbikpIHtcbiAgICAgICAgVHJhbnNmb3Jtcy5kZWxldGUoZWRpdG9yLCB7XG4gICAgICAgICAgdW5pdCxcbiAgICAgICAgICByZXZlcnNlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVsZXRlRm9yd2FyZDogdW5pdCA9PiB7XG4gICAgICB2YXIge1xuICAgICAgICBzZWxlY3Rpb25cbiAgICAgIH0gPSBlZGl0b3I7XG5cbiAgICAgIGlmIChzZWxlY3Rpb24gJiYgUmFuZ2UuaXNDb2xsYXBzZWQoc2VsZWN0aW9uKSkge1xuICAgICAgICBUcmFuc2Zvcm1zLmRlbGV0ZShlZGl0b3IsIHtcbiAgICAgICAgICB1bml0XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVsZXRlRnJhZ21lbnQ6IGRpcmVjdGlvbiA9PiB7XG4gICAgICB2YXIge1xuICAgICAgICBzZWxlY3Rpb25cbiAgICAgIH0gPSBlZGl0b3I7XG5cbiAgICAgIGlmIChzZWxlY3Rpb24gJiYgUmFuZ2UuaXNFeHBhbmRlZChzZWxlY3Rpb24pKSB7XG4gICAgICAgIFRyYW5zZm9ybXMuZGVsZXRlKGVkaXRvciwge1xuICAgICAgICAgIHJldmVyc2U6IGRpcmVjdGlvbiA9PT0gJ2JhY2t3YXJkJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldEZyYWdtZW50OiAoKSA9PiB7XG4gICAgICB2YXIge1xuICAgICAgICBzZWxlY3Rpb25cbiAgICAgIH0gPSBlZGl0b3I7XG5cbiAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIE5vZGUuZnJhZ21lbnQoZWRpdG9yLCBzZWxlY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gW107XG4gICAgfSxcbiAgICBpbnNlcnRCcmVhazogKCkgPT4ge1xuICAgICAgVHJhbnNmb3Jtcy5zcGxpdE5vZGVzKGVkaXRvciwge1xuICAgICAgICBhbHdheXM6IHRydWVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgaW5zZXJ0RnJhZ21lbnQ6IGZyYWdtZW50ID0+IHtcbiAgICAgIFRyYW5zZm9ybXMuaW5zZXJ0RnJhZ21lbnQoZWRpdG9yLCBmcmFnbWVudCk7XG4gICAgfSxcbiAgICBpbnNlcnROb2RlOiBub2RlID0+IHtcbiAgICAgIFRyYW5zZm9ybXMuaW5zZXJ0Tm9kZXMoZWRpdG9yLCBub2RlKTtcbiAgICB9LFxuICAgIGluc2VydFRleHQ6IHRleHQgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgc2VsZWN0aW9uLFxuICAgICAgICBtYXJrc1xuICAgICAgfSA9IGVkaXRvcjtcblxuICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAvLyBJZiB0aGUgY3Vyc29yIGlzIGF0IHRoZSBlbmQgb2YgYW4gaW5saW5lLCBtb3ZlIGl0IG91dHNpZGUgb2ZcbiAgICAgICAgLy8gdGhlIGlubGluZSBiZWZvcmUgaW5zZXJ0aW5nXG4gICAgICAgIGlmIChSYW5nZS5pc0NvbGxhcHNlZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgdmFyIGlubGluZSA9IEVkaXRvci5hYm92ZShlZGl0b3IsIHtcbiAgICAgICAgICAgIG1hdGNoOiBuID0+IEVkaXRvci5pc0lubGluZShlZGl0b3IsIG4pLFxuICAgICAgICAgICAgbW9kZTogJ2hpZ2hlc3QnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAoaW5saW5lKSB7XG4gICAgICAgICAgICB2YXIgWywgaW5saW5lUGF0aF0gPSBpbmxpbmU7XG5cbiAgICAgICAgICAgIGlmIChFZGl0b3IuaXNFbmQoZWRpdG9yLCBzZWxlY3Rpb24uYW5jaG9yLCBpbmxpbmVQYXRoKSkge1xuICAgICAgICAgICAgICB2YXIgcG9pbnQgPSBFZGl0b3IuYWZ0ZXIoZWRpdG9yLCBpbmxpbmVQYXRoKTtcbiAgICAgICAgICAgICAgVHJhbnNmb3Jtcy5zZXRTZWxlY3Rpb24oZWRpdG9yLCB7XG4gICAgICAgICAgICAgICAgYW5jaG9yOiBwb2ludCxcbiAgICAgICAgICAgICAgICBmb2N1czogcG9pbnRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hcmtzKSB7XG4gICAgICAgICAgdmFyIG5vZGUgPSBfb2JqZWN0U3ByZWFkJDkoe1xuICAgICAgICAgICAgdGV4dFxuICAgICAgICAgIH0sIG1hcmtzKTtcblxuICAgICAgICAgIFRyYW5zZm9ybXMuaW5zZXJ0Tm9kZXMoZWRpdG9yLCBub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBUcmFuc2Zvcm1zLmluc2VydFRleHQoZWRpdG9yLCB0ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVkaXRvci5tYXJrcyA9IG51bGw7XG4gICAgICB9XG4gICAgfSxcbiAgICBub3JtYWxpemVOb2RlOiBlbnRyeSA9PiB7XG4gICAgICB2YXIgW25vZGUsIHBhdGhdID0gZW50cnk7IC8vIFRoZXJlIGFyZSBubyBjb3JlIG5vcm1hbGl6YXRpb25zIGZvciB0ZXh0IG5vZGVzLlxuXG4gICAgICBpZiAoVGV4dC5pc1RleHQobm9kZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBFbnN1cmUgdGhhdCBibG9jayBhbmQgaW5saW5lIG5vZGVzIGhhdmUgYXQgbGVhc3Qgb25lIHRleHQgY2hpbGQuXG5cblxuICAgICAgaWYgKEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IHtcbiAgICAgICAgICB0ZXh0OiAnJ1xuICAgICAgICB9O1xuICAgICAgICBUcmFuc2Zvcm1zLmluc2VydE5vZGVzKGVkaXRvciwgY2hpbGQsIHtcbiAgICAgICAgICBhdDogcGF0aC5jb25jYXQoMCksXG4gICAgICAgICAgdm9pZHM6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIG5vZGUgc2hvdWxkIGhhdmUgYmxvY2sgb3IgaW5saW5lIGNoaWxkcmVuLlxuXG5cbiAgICAgIHZhciBzaG91bGRIYXZlSW5saW5lcyA9IEVkaXRvci5pc0VkaXRvcihub2RlKSA/IGZhbHNlIDogRWxlbWVudC5pc0VsZW1lbnQobm9kZSkgJiYgKGVkaXRvci5pc0lubGluZShub2RlKSB8fCBub2RlLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCB8fCBUZXh0LmlzVGV4dChub2RlLmNoaWxkcmVuWzBdKSB8fCBlZGl0b3IuaXNJbmxpbmUobm9kZS5jaGlsZHJlblswXSkpOyAvLyBTaW5jZSB3ZSdsbCBiZSBhcHBseWluZyBvcGVyYXRpb25zIHdoaWxlIGl0ZXJhdGluZywga2VlcCB0cmFjayBvZiBhblxuICAgICAgLy8gaW5kZXggdGhhdCBhY2NvdW50cyBmb3IgYW55IGFkZGVkL3JlbW92ZWQgbm9kZXMuXG5cbiAgICAgIHZhciBuID0gMDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrLCBuKyspIHtcbiAgICAgICAgdmFyIGN1cnJlbnROb2RlID0gTm9kZS5nZXQoZWRpdG9yLCBwYXRoKTtcbiAgICAgICAgaWYgKFRleHQuaXNUZXh0KGN1cnJlbnROb2RlKSkgY29udGludWU7XG4gICAgICAgIHZhciBfY2hpbGQgPSBub2RlLmNoaWxkcmVuW2ldO1xuICAgICAgICB2YXIgcHJldiA9IGN1cnJlbnROb2RlLmNoaWxkcmVuW24gLSAxXTtcbiAgICAgICAgdmFyIGlzTGFzdCA9IGkgPT09IG5vZGUuY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICAgICAgdmFyIGlzSW5saW5lT3JUZXh0ID0gVGV4dC5pc1RleHQoX2NoaWxkKSB8fCBFbGVtZW50LmlzRWxlbWVudChfY2hpbGQpICYmIGVkaXRvci5pc0lubGluZShfY2hpbGQpOyAvLyBPbmx5IGFsbG93IGJsb2NrIG5vZGVzIGluIHRoZSB0b3AtbGV2ZWwgY2hpbGRyZW4gYW5kIHBhcmVudCBibG9ja3NcbiAgICAgICAgLy8gdGhhdCBvbmx5IGNvbnRhaW4gYmxvY2sgbm9kZXMuIFNpbWlsYXJseSwgb25seSBhbGxvdyBpbmxpbmUgbm9kZXMgaW5cbiAgICAgICAgLy8gb3RoZXIgaW5saW5lIG5vZGVzLCBvciBwYXJlbnQgYmxvY2tzIHRoYXQgb25seSBjb250YWluIGlubGluZXMgYW5kXG4gICAgICAgIC8vIHRleHQuXG5cbiAgICAgICAgaWYgKGlzSW5saW5lT3JUZXh0ICE9PSBzaG91bGRIYXZlSW5saW5lcykge1xuICAgICAgICAgIFRyYW5zZm9ybXMucmVtb3ZlTm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgICBhdDogcGF0aC5jb25jYXQobiksXG4gICAgICAgICAgICB2b2lkczogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG4tLTtcbiAgICAgICAgfSBlbHNlIGlmIChFbGVtZW50LmlzRWxlbWVudChfY2hpbGQpKSB7XG4gICAgICAgICAgLy8gRW5zdXJlIHRoYXQgaW5saW5lIG5vZGVzIGFyZSBzdXJyb3VuZGVkIGJ5IHRleHQgbm9kZXMuXG4gICAgICAgICAgaWYgKGVkaXRvci5pc0lubGluZShfY2hpbGQpKSB7XG4gICAgICAgICAgICBpZiAocHJldiA9PSBudWxsIHx8ICFUZXh0LmlzVGV4dChwcmV2KSkge1xuICAgICAgICAgICAgICB2YXIgbmV3Q2hpbGQgPSB7XG4gICAgICAgICAgICAgICAgdGV4dDogJydcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgVHJhbnNmb3Jtcy5pbnNlcnROb2RlcyhlZGl0b3IsIG5ld0NoaWxkLCB7XG4gICAgICAgICAgICAgICAgYXQ6IHBhdGguY29uY2F0KG4pLFxuICAgICAgICAgICAgICAgIHZvaWRzOiB0cnVlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBuKys7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzTGFzdCkge1xuICAgICAgICAgICAgICB2YXIgX25ld0NoaWxkID0ge1xuICAgICAgICAgICAgICAgIHRleHQ6ICcnXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIFRyYW5zZm9ybXMuaW5zZXJ0Tm9kZXMoZWRpdG9yLCBfbmV3Q2hpbGQsIHtcbiAgICAgICAgICAgICAgICBhdDogcGF0aC5jb25jYXQobiArIDEpLFxuICAgICAgICAgICAgICAgIHZvaWRzOiB0cnVlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBuKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1lcmdlIGFkamFjZW50IHRleHQgbm9kZXMgdGhhdCBhcmUgZW1wdHkgb3IgbWF0Y2guXG4gICAgICAgICAgaWYgKHByZXYgIT0gbnVsbCAmJiBUZXh0LmlzVGV4dChwcmV2KSkge1xuICAgICAgICAgICAgaWYgKFRleHQuZXF1YWxzKF9jaGlsZCwgcHJldiwge1xuICAgICAgICAgICAgICBsb29zZTogdHJ1ZVxuICAgICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgICAgVHJhbnNmb3Jtcy5tZXJnZU5vZGVzKGVkaXRvciwge1xuICAgICAgICAgICAgICAgIGF0OiBwYXRoLmNvbmNhdChuKSxcbiAgICAgICAgICAgICAgICB2b2lkczogdHJ1ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgbi0tO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcmV2LnRleHQgPT09ICcnKSB7XG4gICAgICAgICAgICAgIFRyYW5zZm9ybXMucmVtb3ZlTm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgICAgICAgYXQ6IHBhdGguY29uY2F0KG4gLSAxKSxcbiAgICAgICAgICAgICAgICB2b2lkczogdHJ1ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgbi0tO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChfY2hpbGQudGV4dCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgVHJhbnNmb3Jtcy5yZW1vdmVOb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICAgICAgICBhdDogcGF0aC5jb25jYXQobiksXG4gICAgICAgICAgICAgICAgdm9pZHM6IHRydWVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIG4tLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHJlbW92ZU1hcms6IGtleSA9PiB7XG4gICAgICB2YXIge1xuICAgICAgICBzZWxlY3Rpb25cbiAgICAgIH0gPSBlZGl0b3I7XG5cbiAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgaWYgKFJhbmdlLmlzRXhwYW5kZWQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgIFRyYW5zZm9ybXMudW5zZXROb2RlcyhlZGl0b3IsIGtleSwge1xuICAgICAgICAgICAgbWF0Y2g6IFRleHQuaXNUZXh0LFxuICAgICAgICAgICAgc3BsaXQ6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgbWFya3MgPSBfb2JqZWN0U3ByZWFkJDkoe30sIEVkaXRvci5tYXJrcyhlZGl0b3IpIHx8IHt9KTtcblxuICAgICAgICAgIGRlbGV0ZSBtYXJrc1trZXldO1xuICAgICAgICAgIGVkaXRvci5tYXJrcyA9IG1hcmtzO1xuXG4gICAgICAgICAgaWYgKCFGTFVTSElORy5nZXQoZWRpdG9yKSkge1xuICAgICAgICAgICAgZWRpdG9yLm9uQ2hhbmdlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuICByZXR1cm4gZWRpdG9yO1xufTtcbi8qKlxyXG4gKiBHZXQgdGhlIFwiZGlydHlcIiBwYXRocyBnZW5lcmF0ZWQgZnJvbSBhbiBvcGVyYXRpb24uXHJcbiAqL1xuXG52YXIgZ2V0RGlydHlQYXRocyA9IG9wID0+IHtcbiAgc3dpdGNoIChvcC50eXBlKSB7XG4gICAgY2FzZSAnaW5zZXJ0X3RleHQnOlxuICAgIGNhc2UgJ3JlbW92ZV90ZXh0JzpcbiAgICBjYXNlICdzZXRfbm9kZSc6XG4gICAgICB7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgcGF0aFxuICAgICAgICB9ID0gb3A7XG4gICAgICAgIHJldHVybiBQYXRoLmxldmVscyhwYXRoKTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ2luc2VydF9ub2RlJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBub2RlLFxuICAgICAgICAgIHBhdGg6IF9wYXRoMlxuICAgICAgICB9ID0gb3A7XG4gICAgICAgIHZhciBsZXZlbHMgPSBQYXRoLmxldmVscyhfcGF0aDIpO1xuICAgICAgICB2YXIgZGVzY2VuZGFudHMgPSBUZXh0LmlzVGV4dChub2RlKSA/IFtdIDogQXJyYXkuZnJvbShOb2RlLm5vZGVzKG5vZGUpLCBfcmVmMyA9PiB7XG4gICAgICAgICAgdmFyIFssIHBdID0gX3JlZjM7XG4gICAgICAgICAgcmV0dXJuIF9wYXRoMi5jb25jYXQocCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gWy4uLmxldmVscywgLi4uZGVzY2VuZGFudHNdO1xuICAgICAgfVxuXG4gICAgY2FzZSAnbWVyZ2Vfbm9kZSc6XG4gICAgICB7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgcGF0aDogX3BhdGgzXG4gICAgICAgIH0gPSBvcDtcbiAgICAgICAgdmFyIGFuY2VzdG9ycyA9IFBhdGguYW5jZXN0b3JzKF9wYXRoMyk7XG4gICAgICAgIHZhciBwcmV2aW91c1BhdGggPSBQYXRoLnByZXZpb3VzKF9wYXRoMyk7XG4gICAgICAgIHJldHVybiBbLi4uYW5jZXN0b3JzLCBwcmV2aW91c1BhdGhdO1xuICAgICAgfVxuXG4gICAgY2FzZSAnbW92ZV9ub2RlJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBwYXRoOiBfcGF0aDQsXG4gICAgICAgICAgbmV3UGF0aFxuICAgICAgICB9ID0gb3A7XG5cbiAgICAgICAgaWYgKFBhdGguZXF1YWxzKF9wYXRoNCwgbmV3UGF0aCkpIHtcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb2xkQW5jZXN0b3JzID0gW107XG4gICAgICAgIHZhciBuZXdBbmNlc3RvcnMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBhbmNlc3RvciBvZiBQYXRoLmFuY2VzdG9ycyhfcGF0aDQpKSB7XG4gICAgICAgICAgdmFyIHAgPSBQYXRoLnRyYW5zZm9ybShhbmNlc3Rvciwgb3ApO1xuICAgICAgICAgIG9sZEFuY2VzdG9ycy5wdXNoKHApO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgX2FuY2VzdG9yIG9mIFBhdGguYW5jZXN0b3JzKG5ld1BhdGgpKSB7XG4gICAgICAgICAgdmFyIF9wID0gUGF0aC50cmFuc2Zvcm0oX2FuY2VzdG9yLCBvcCk7XG5cbiAgICAgICAgICBuZXdBbmNlc3RvcnMucHVzaChfcCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmV3UGFyZW50ID0gbmV3QW5jZXN0b3JzW25ld0FuY2VzdG9ycy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIG5ld0luZGV4ID0gbmV3UGF0aFtuZXdQYXRoLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgcmVzdWx0UGF0aCA9IG5ld1BhcmVudC5jb25jYXQobmV3SW5kZXgpO1xuICAgICAgICByZXR1cm4gWy4uLm9sZEFuY2VzdG9ycywgLi4ubmV3QW5jZXN0b3JzLCByZXN1bHRQYXRoXTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ3JlbW92ZV9ub2RlJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBwYXRoOiBfcGF0aDVcbiAgICAgICAgfSA9IG9wO1xuXG4gICAgICAgIHZhciBfYW5jZXN0b3JzID0gUGF0aC5hbmNlc3RvcnMoX3BhdGg1KTtcblxuICAgICAgICByZXR1cm4gWy4uLl9hbmNlc3RvcnNdO1xuICAgICAgfVxuXG4gICAgY2FzZSAnc3BsaXRfbm9kZSc6XG4gICAgICB7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgcGF0aDogX3BhdGg2XG4gICAgICAgIH0gPSBvcDtcblxuICAgICAgICB2YXIgX2xldmVscyA9IFBhdGgubGV2ZWxzKF9wYXRoNik7XG5cbiAgICAgICAgdmFyIG5leHRQYXRoID0gUGF0aC5uZXh0KF9wYXRoNik7XG4gICAgICAgIHJldHVybiBbLi4uX2xldmVscywgbmV4dFBhdGhdO1xuICAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuLyoqXHJcbiAqIENvbnN0YW50cyBmb3Igc3RyaW5nIGRpc3RhbmNlIGNoZWNraW5nLlxyXG4gKi9cbnZhciBTUEFDRSA9IC9cXHMvO1xudmFyIFBVTkNUVUFUSU9OID0gL1tcXHUwMDIxLVxcdTAwMjNcXHUwMDI1LVxcdTAwMkFcXHUwMDJDLVxcdTAwMkZcXHUwMDNBXFx1MDAzQlxcdTAwM0ZcXHUwMDQwXFx1MDA1Qi1cXHUwMDVEXFx1MDA1RlxcdTAwN0JcXHUwMDdEXFx1MDBBMVxcdTAwQTdcXHUwMEFCXFx1MDBCNlxcdTAwQjdcXHUwMEJCXFx1MDBCRlxcdTAzN0VcXHUwMzg3XFx1MDU1QS1cXHUwNTVGXFx1MDU4OVxcdTA1OEFcXHUwNUJFXFx1MDVDMFxcdTA1QzNcXHUwNUM2XFx1MDVGM1xcdTA1RjRcXHUwNjA5XFx1MDYwQVxcdTA2MENcXHUwNjBEXFx1MDYxQlxcdTA2MUVcXHUwNjFGXFx1MDY2QS1cXHUwNjZEXFx1MDZENFxcdTA3MDAtXFx1MDcwRFxcdTA3RjctXFx1MDdGOVxcdTA4MzAtXFx1MDgzRVxcdTA4NUVcXHUwOTY0XFx1MDk2NVxcdTA5NzBcXHUwQUYwXFx1MERGNFxcdTBFNEZcXHUwRTVBXFx1MEU1QlxcdTBGMDQtXFx1MEYxMlxcdTBGMTRcXHUwRjNBLVxcdTBGM0RcXHUwRjg1XFx1MEZEMC1cXHUwRkQ0XFx1MEZEOVxcdTBGREFcXHUxMDRBLVxcdTEwNEZcXHUxMEZCXFx1MTM2MC1cXHUxMzY4XFx1MTQwMFxcdTE2NkRcXHUxNjZFXFx1MTY5QlxcdTE2OUNcXHUxNkVCLVxcdTE2RURcXHUxNzM1XFx1MTczNlxcdTE3RDQtXFx1MTdENlxcdTE3RDgtXFx1MTdEQVxcdTE4MDAtXFx1MTgwQVxcdTE5NDRcXHUxOTQ1XFx1MUExRVxcdTFBMUZcXHUxQUEwLVxcdTFBQTZcXHUxQUE4LVxcdTFBQURcXHUxQjVBLVxcdTFCNjBcXHUxQkZDLVxcdTFCRkZcXHUxQzNCLVxcdTFDM0ZcXHUxQzdFXFx1MUM3RlxcdTFDQzAtXFx1MUNDN1xcdTFDRDNcXHUyMDEwLVxcdTIwMjdcXHUyMDMwLVxcdTIwNDNcXHUyMDQ1LVxcdTIwNTFcXHUyMDUzLVxcdTIwNUVcXHUyMDdEXFx1MjA3RVxcdTIwOERcXHUyMDhFXFx1MjMyOVxcdTIzMkFcXHUyNzY4LVxcdTI3NzVcXHUyN0M1XFx1MjdDNlxcdTI3RTYtXFx1MjdFRlxcdTI5ODMtXFx1Mjk5OFxcdTI5RDgtXFx1MjlEQlxcdTI5RkNcXHUyOUZEXFx1MkNGOS1cXHUyQ0ZDXFx1MkNGRVxcdTJDRkZcXHUyRDcwXFx1MkUwMC1cXHUyRTJFXFx1MkUzMC1cXHUyRTNCXFx1MzAwMS1cXHUzMDAzXFx1MzAwOC1cXHUzMDExXFx1MzAxNC1cXHUzMDFGXFx1MzAzMFxcdTMwM0RcXHUzMEEwXFx1MzBGQlxcdUE0RkVcXHVBNEZGXFx1QTYwRC1cXHVBNjBGXFx1QTY3M1xcdUE2N0VcXHVBNkYyLVxcdUE2RjdcXHVBODc0LVxcdUE4NzdcXHVBOENFXFx1QThDRlxcdUE4RjgtXFx1QThGQVxcdUE5MkVcXHVBOTJGXFx1QTk1RlxcdUE5QzEtXFx1QTlDRFxcdUE5REVcXHVBOURGXFx1QUE1Qy1cXHVBQTVGXFx1QUFERVxcdUFBREZcXHVBQUYwXFx1QUFGMVxcdUFCRUJcXHVGRDNFXFx1RkQzRlxcdUZFMTAtXFx1RkUxOVxcdUZFMzAtXFx1RkU1MlxcdUZFNTQtXFx1RkU2MVxcdUZFNjNcXHVGRTY4XFx1RkU2QVxcdUZFNkJcXHVGRjAxLVxcdUZGMDNcXHVGRjA1LVxcdUZGMEFcXHVGRjBDLVxcdUZGMEZcXHVGRjFBXFx1RkYxQlxcdUZGMUZcXHVGRjIwXFx1RkYzQi1cXHVGRjNEXFx1RkYzRlxcdUZGNUJcXHVGRjVEXFx1RkY1Ri1cXHVGRjY1XS87XG52YXIgQ0hBTUVMRU9OID0gL1snXFx1MjAxOFxcdTIwMTldLztcbi8qKlxyXG4gKiBHZXQgdGhlIGRpc3RhbmNlIHRvIHRoZSBlbmQgb2YgdGhlIGZpcnN0IGNoYXJhY3RlciBpbiBhIHN0cmluZyBvZiB0ZXh0LlxyXG4gKi9cblxudmFyIGdldENoYXJhY3RlckRpc3RhbmNlID0gZnVuY3Rpb24gZ2V0Q2hhcmFjdGVyRGlzdGFuY2Uoc3RyKSB7XG4gIHZhciBpc1JUTCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gIHZhciBpc0xUUiA9ICFpc1JUTDtcbiAgdmFyIGRpc3QgPSAwOyAvLyBwcmV2IHR5cGVzOlxuICAvLyBOU0VROiBub24gc2VxdWVuY2VhYmxlIGNvZGVwb2ludC5cbiAgLy8gTU9EOiBtb2RpZmllclxuICAvLyBaV0o6IHplcm8gd2lkdGggam9pbmVyXG4gIC8vIFZBUjogdmFyaWF0aW9uIHNlbGVjdG9yXG4gIC8vIEJNUDogc2VxdWVuY2VhYmxlIGNvZGVwb2ludCBmcm9tIGJhc2ljIG11bHRpbGluZ3VhbCBwbGFuZVxuICAvLyBSSTogcmVnaW9uYWwgaW5kaWNhdG9yXG4gIC8vIEtDOiBrZXljYXBcbiAgLy8gVEFHOiB0YWdcblxuICB2YXIgcHJldiA9IG51bGw7XG4gIHZhciBjb2RlcG9pbnRzID0gaXNMVFIgPyBzdHIgOiBjb2RlcG9pbnRzSXRlcmF0b3JSVEwoc3RyKTtcblxuICBmb3IgKHZhciBjb2RlcG9pbnQgb2YgY29kZXBvaW50cykge1xuICAgIHZhciBjb2RlID0gY29kZXBvaW50LmNvZGVQb2ludEF0KDApO1xuICAgIGlmICghY29kZSkgYnJlYWs7IC8vIENoZWNrIGlmIGNvZGVwb2ludCBpcyBwYXJ0IG9mIGEgc2VxdWVuY2UuXG5cbiAgICBpZiAoaXNaV0ooY29kZSkpIHtcbiAgICAgIGRpc3QgKz0gY29kZXBvaW50Lmxlbmd0aDtcbiAgICAgIHByZXYgPSAnWldKJztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBbaXNLZXljYXBTdGFydCwgaXNLZXljYXBFbmRdID0gaXNMVFIgPyBbaXNLZXljYXAsIGlzQ29tYmluaW5nRW5jbG9zaW5nS2V5Y2FwXSA6IFtpc0NvbWJpbmluZ0VuY2xvc2luZ0tleWNhcCwgaXNLZXljYXBdO1xuXG4gICAgaWYgKGlzS2V5Y2FwU3RhcnQoY29kZSkpIHtcbiAgICAgIGlmIChwcmV2ID09PSAnS0MnKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBkaXN0ICs9IGNvZGVwb2ludC5sZW5ndGg7XG4gICAgICBwcmV2ID0gJ0tDJztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChpc0tleWNhcEVuZChjb2RlKSkge1xuICAgICAgZGlzdCArPSBjb2RlcG9pbnQubGVuZ3RoO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGlzVmFyaWF0aW9uU2VsZWN0b3IoY29kZSkpIHtcbiAgICAgIGRpc3QgKz0gY29kZXBvaW50Lmxlbmd0aDtcblxuICAgICAgaWYgKGlzTFRSICYmIHByZXYgPT09ICdCTVAnKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBwcmV2ID0gJ1ZBUic7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNCTVBFbW9qaShjb2RlKSkge1xuICAgICAgaWYgKGlzTFRSICYmIHByZXYgJiYgcHJldiAhPT0gJ1pXSicgJiYgcHJldiAhPT0gJ1ZBUicpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGRpc3QgKz0gY29kZXBvaW50Lmxlbmd0aDtcblxuICAgICAgaWYgKGlzUlRMICYmIHByZXYgPT09ICdWQVInKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBwcmV2ID0gJ0JNUCc7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNNb2RpZmllcihjb2RlKSkge1xuICAgICAgZGlzdCArPSBjb2RlcG9pbnQubGVuZ3RoO1xuICAgICAgcHJldiA9ICdNT0QnO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIFtpc1RhZ1N0YXJ0LCBpc1RhZ0VuZF0gPSBpc0xUUiA/IFtpc0JsYWNrRmxhZywgaXNDYW5jZWxUYWddIDogW2lzQ2FuY2VsVGFnLCBpc0JsYWNrRmxhZ107XG5cbiAgICBpZiAoaXNUYWdTdGFydChjb2RlKSkge1xuICAgICAgaWYgKHByZXYgPT09ICdUQUcnKSBicmVhaztcbiAgICAgIGRpc3QgKz0gY29kZXBvaW50Lmxlbmd0aDtcbiAgICAgIHByZXYgPSAnVEFHJztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChpc1RhZ0VuZChjb2RlKSkge1xuICAgICAgZGlzdCArPSBjb2RlcG9pbnQubGVuZ3RoO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHByZXYgPT09ICdUQUcnICYmIGlzVGFnKGNvZGUpKSB7XG4gICAgICBkaXN0ICs9IGNvZGVwb2ludC5sZW5ndGg7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNSZWdpb25hbEluZGljYXRvcihjb2RlKSkge1xuICAgICAgZGlzdCArPSBjb2RlcG9pbnQubGVuZ3RoO1xuXG4gICAgICBpZiAocHJldiA9PT0gJ1JJJykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcHJldiA9ICdSSSc7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWlzQk1QKGNvZGUpKSB7XG4gICAgICAvLyBJZiBwcmV2aW91cyBjb2RlIHBvaW50IGlzIG5vdCBzZXF1ZW5jZWFibGUsIGl0IG1lYW5zIHdlIGFyZSBub3QgaW4gYVxuICAgICAgLy8gc2VxdWVuY2UuXG4gICAgICBpZiAocHJldiA9PT0gJ05TRVEnKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBkaXN0ICs9IGNvZGVwb2ludC5sZW5ndGg7XG4gICAgICBwcmV2ID0gJ05TRVEnO1xuICAgICAgY29udGludWU7XG4gICAgfSAvLyBNb2RpZmllciAnZ3JvdXBzIHVwJyB3aXRoIHdoYXQgZXZlciBjaGFyYWN0ZXIgaXMgYmVmb3JlIHRoYXQgKGV2ZW4gd2hpdGVzcGFjZSksIG5lZWQgdG9cbiAgICAvLyBsb29rIGFoZWFkLlxuXG5cbiAgICBpZiAoaXNMVFIgJiYgcHJldiA9PT0gJ01PRCcpIHtcbiAgICAgIGRpc3QgKz0gY29kZXBvaW50Lmxlbmd0aDtcbiAgICAgIGJyZWFrO1xuICAgIH0gLy8gSWYgd2hpbGUgbG9vcCBldmVyIGdldHMgaGVyZSwgd2UncmUgZG9uZSAoZS5nIGxhdGluIGNoYXJzKS5cblxuXG4gICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGlzdCB8fCAxO1xufTtcbi8qKlxyXG4gKiBHZXQgdGhlIGRpc3RhbmNlIHRvIHRoZSBlbmQgb2YgdGhlIGZpcnN0IHdvcmQgaW4gYSBzdHJpbmcgb2YgdGV4dC5cclxuICovXG5cbnZhciBnZXRXb3JkRGlzdGFuY2UgPSBmdW5jdGlvbiBnZXRXb3JkRGlzdGFuY2UodGV4dCkge1xuICB2YXIgaXNSVEwgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICB2YXIgZGlzdCA9IDA7XG4gIHZhciBzdGFydGVkID0gZmFsc2U7XG5cbiAgd2hpbGUgKHRleHQubGVuZ3RoID4gMCkge1xuICAgIHZhciBjaGFyRGlzdCA9IGdldENoYXJhY3RlckRpc3RhbmNlKHRleHQsIGlzUlRMKTtcbiAgICB2YXIgW2NoYXIsIHJlbWFpbmluZ10gPSBzcGxpdEJ5Q2hhcmFjdGVyRGlzdGFuY2UodGV4dCwgY2hhckRpc3QsIGlzUlRMKTtcblxuICAgIGlmIChpc1dvcmRDaGFyYWN0ZXIoY2hhciwgcmVtYWluaW5nLCBpc1JUTCkpIHtcbiAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgZGlzdCArPSBjaGFyRGlzdDtcbiAgICB9IGVsc2UgaWYgKCFzdGFydGVkKSB7XG4gICAgICBkaXN0ICs9IGNoYXJEaXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0ZXh0ID0gcmVtYWluaW5nO1xuICB9XG5cbiAgcmV0dXJuIGRpc3Q7XG59O1xuLyoqXHJcbiAqIFNwbGl0IGEgc3RyaW5nIGluIHR3byBwYXJ0cyBhdCBhIGdpdmVuIGRpc3RhbmNlIHN0YXJ0aW5nIGZyb20gdGhlIGVuZCB3aGVuXHJcbiAqIGBpc1JUTGAgaXMgc2V0IHRvIGB0cnVlYC5cclxuICovXG5cbnZhciBzcGxpdEJ5Q2hhcmFjdGVyRGlzdGFuY2UgPSAoc3RyLCBkaXN0LCBpc1JUTCkgPT4ge1xuICBpZiAoaXNSVEwpIHtcbiAgICB2YXIgYXQgPSBzdHIubGVuZ3RoIC0gZGlzdDtcbiAgICByZXR1cm4gW3N0ci5zbGljZShhdCwgc3RyLmxlbmd0aCksIHN0ci5zbGljZSgwLCBhdCldO1xuICB9XG5cbiAgcmV0dXJuIFtzdHIuc2xpY2UoMCwgZGlzdCksIHN0ci5zbGljZShkaXN0KV07XG59O1xuLyoqXHJcbiAqIENoZWNrIGlmIGEgY2hhcmFjdGVyIGlzIGEgd29yZCBjaGFyYWN0ZXIuIFRoZSBgcmVtYWluaW5nYCBhcmd1bWVudCBpcyB1c2VkXHJcbiAqIGJlY2F1c2Ugc29tZXRpbWVzIHlvdSBtdXN0IHJlYWQgc3Vic2VxdWVudCBjaGFyYWN0ZXJzIHRvIHRydWx5IGRldGVybWluZSBpdC5cclxuICovXG5cbnZhciBpc1dvcmRDaGFyYWN0ZXIgPSBmdW5jdGlvbiBpc1dvcmRDaGFyYWN0ZXIoY2hhciwgcmVtYWluaW5nKSB7XG4gIHZhciBpc1JUTCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG5cbiAgaWYgKFNQQUNFLnRlc3QoY2hhcikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gLy8gQ2hhbWVsZW9ucyBjb3VudCBhcyB3b3JkIGNoYXJhY3RlcnMgYXMgbG9uZyBhcyB0aGV5J3JlIGluIGEgd29yZCwgc29cbiAgLy8gcmVjdXJzZSB0byBzZWUgaWYgdGhlIG5leHQgb25lIGlzIGEgd29yZCBjaGFyYWN0ZXIgb3Igbm90LlxuXG5cbiAgaWYgKENIQU1FTEVPTi50ZXN0KGNoYXIpKSB7XG4gICAgdmFyIGNoYXJEaXN0ID0gZ2V0Q2hhcmFjdGVyRGlzdGFuY2UocmVtYWluaW5nLCBpc1JUTCk7XG4gICAgdmFyIFtuZXh0Q2hhciwgbmV4dFJlbWFpbmluZ10gPSBzcGxpdEJ5Q2hhcmFjdGVyRGlzdGFuY2UocmVtYWluaW5nLCBjaGFyRGlzdCwgaXNSVEwpO1xuXG4gICAgaWYgKGlzV29yZENoYXJhY3RlcihuZXh0Q2hhciwgbmV4dFJlbWFpbmluZywgaXNSVEwpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoUFVOQ1RVQVRJT04udGVzdChjaGFyKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbi8qKlxyXG4gKiBEb2VzIGBjb2RlYCBmb3JtIE1vZGlmaWVyIHdpdGggbmV4dCBvbmUuXHJcbiAqXHJcbiAqIGh0dHBzOi8vZW1vamlwZWRpYS5vcmcvbW9kaWZpZXJzL1xyXG4gKi9cblxuXG52YXIgaXNNb2RpZmllciA9IGNvZGUgPT4ge1xuICByZXR1cm4gY29kZSA+PSAweDFmM2ZiICYmIGNvZGUgPD0gMHgxZjNmZjtcbn07XG4vKipcclxuICogSXMgYGNvZGVgIGEgVmFyaWF0aW9uIFNlbGVjdG9yLlxyXG4gKlxyXG4gKiBodHRwczovL2NvZGVwb2ludHMubmV0L3ZhcmlhdGlvbl9zZWxlY3RvcnNcclxuICovXG5cblxudmFyIGlzVmFyaWF0aW9uU2VsZWN0b3IgPSBjb2RlID0+IHtcbiAgcmV0dXJuIGNvZGUgPD0gMHhmZTBmICYmIGNvZGUgPj0gMHhmZTAwO1xufTtcbi8qKlxyXG4gKiBJcyBgY29kZWAgYSBjb2RlIHBvaW50IHVzZWQgaW4ga2V5Y2FwIHNlcXVlbmNlLlxyXG4gKlxyXG4gKiBodHRwczovL2Vtb2ppcGVkaWEub3JnL2Vtb2ppLWtleWNhcC1zZXF1ZW5jZS9cclxuICovXG5cblxudmFyIGlzS2V5Y2FwID0gY29kZSA9PiB7XG4gIHJldHVybiBjb2RlID49IDB4MzAgJiYgY29kZSA8PSAweDM5IHx8IC8vIGRpZ2l0c1xuICBjb2RlID09PSAweDIzIHx8IC8vIG51bWJlciBzaWduXG4gIGNvZGUgPT09IDB4MmE7XG59O1xuLyoqXHJcbiAqIElzIGBjb2RlYCBhIENvbWJpbmluZyBFbmNsb3NpbmcgS2V5Y2FwLlxyXG4gKlxyXG4gKiBodHRwczovL2Vtb2ppcGVkaWEub3JnL2NvbWJpbmluZy1lbmNsb3Npbmcta2V5Y2FwL1xyXG4gKi9cblxuXG52YXIgaXNDb21iaW5pbmdFbmNsb3NpbmdLZXljYXAgPSBjb2RlID0+IHtcbiAgcmV0dXJuIGNvZGUgPT09IDB4MjBlMztcbn07XG4vKipcclxuICogSXMgYGNvZGVgIG9uZSBvZiB0aGUgQk1QIGNvZGVzIHVzZWQgaW4gZW1vamkgc2VxdWVuY2VzLlxyXG4gKlxyXG4gKiBodHRwczovL2Vtb2ppcGVkaWEub3JnL2Vtb2ppLXp3ai1zZXF1ZW5jZXMvXHJcbiAqL1xuXG5cbnZhciBpc0JNUEVtb2ppID0gY29kZSA9PiB7XG4gIC8vIFRoaXMgcmVxdWlyZXMgdGlueSBiaXQgb2YgbWFpbnRhbmFuY2UsIGJldHRlciBpZGVhcz9cbiAgLy8gRm9ydHVuYXRlbHkgaXQgb25seSBoYXBwZW5zIGlmIG5ldyBVbmljb2RlIFN0YW5kYXJkXG4gIC8vIGlzIHJlbGVhc2VkLiBGYWlscyBncmFjZWZ1bGx5IGlmIHVwa2VlcCBsYWdzIGJlaGluZCxcbiAgLy8gc2FtZSB3YXkgU2xhdGUgcHJldmlvdXNseSBiZWhhdmVkIHdpdGggYWxsIGVtb2ppcy5cbiAgcmV0dXJuIGNvZGUgPT09IDB4Mjc2NCB8fCAvLyBoZWFydCAo4p2kKVxuICBjb2RlID09PSAweDI2NDIgfHwgLy8gbWFsZSAo4pmCKVxuICBjb2RlID09PSAweDI2NDAgfHwgLy8gZmVtYWxlICjimYApXG4gIGNvZGUgPT09IDB4MjYyMCB8fCAvLyBzY3VsbCAo4pigKVxuICBjb2RlID09PSAweDI2OTUgfHwgLy8gbWVkaWNhbCAo4pqVKVxuICBjb2RlID09PSAweDI3MDggfHwgLy8gcGxhbmUgKOKciO+4jylcbiAgY29kZSA9PT0gMHgyNWVmIHx8IC8vIGxhcmdlIGNpcmNsZSAo4pevKVxuICBjb2RlID09PSAweDJiMDYgfHwgLy8gdXAgYXJyb3cgKOKshilcbiAgY29kZSA9PT0gMHgyMTk3IHx8IC8vIHVwLXJpZ2h0IGFycm93ICjihpcpXG4gIGNvZGUgPT09IDB4MjdhMSB8fCAvLyByaWdodCBhcnJvdyAo4p6hKVxuICBjb2RlID09PSAweDIxOTggfHwgLy8gZG93bi1yaWdodCBhcnJvdyAo4oaYKVxuICBjb2RlID09PSAweDJiMDcgfHwgLy8gZG93biBhcnJvdyAo4qyHKVxuICBjb2RlID09PSAweDIxOTkgfHwgLy8gZG93bi1sZWZ0IGFycm93ICjihpkpXG4gIGNvZGUgPT09IDB4MmIwNSB8fCAvLyBsZWZ0IGFycm93ICjirIUpXG4gIGNvZGUgPT09IDB4MjE5NiB8fCAvLyB1cC1sZWZ0IGFycm93ICjihpYpXG4gIGNvZGUgPT09IDB4MjE5NSB8fCAvLyB1cC1kb3duIGFycm93ICjihpUpXG4gIGNvZGUgPT09IDB4MjE5NCB8fCAvLyBsZWZ0LXJpZ2h0IGFycm93ICjihpQpXG4gIGNvZGUgPT09IDB4MjFhOSB8fCAvLyByaWdodCBhcnJvdyBjdXJ2aW5nIGxlZnQgKOKGqSlcbiAgY29kZSA9PT0gMHgyMWFhIHx8IC8vIGxlZnQgYXJyb3cgY3VydmluZyByaWdodCAo4oaqKVxuICBjb2RlID09PSAweDI5MzQgfHwgLy8gcmlnaHQgYXJyb3cgY3VydmluZyB1cCAo4qS0KVxuICBjb2RlID09PSAweDI5MzUgLy8gcmlnaHQgYXJyb3cgY3VydmluZyBkb3duICjipLUpXG4gIDtcbn07XG4vKipcclxuICogSXMgYGNvZGVgIGEgUmVnaW9uYWwgSW5kaWNhdG9yLlxyXG4gKlxyXG4gKiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9SZWdpb25hbF9pbmRpY2F0b3Jfc3ltYm9sXHJcbiAqL1xuXG5cbnZhciBpc1JlZ2lvbmFsSW5kaWNhdG9yID0gY29kZSA9PiB7XG4gIHJldHVybiBjb2RlID49IDB4MWYxZTYgJiYgY29kZSA8PSAweDFmMWZmO1xufTtcbi8qKlxyXG4gKiBJcyBgY29kZWAgZnJvbSBiYXNpYyBtdWx0aWxpbmd1YWwgcGxhbmUuXHJcbiAqXHJcbiAqIGh0dHBzOi8vY29kZXBvaW50cy5uZXQvYmFzaWNfbXVsdGlsaW5ndWFsX3BsYW5lXHJcbiAqL1xuXG5cbnZhciBpc0JNUCA9IGNvZGUgPT4ge1xuICByZXR1cm4gY29kZSA8PSAweGZmZmY7XG59O1xuLyoqXHJcbiAqIElzIGBjb2RlYCBhIFplcm8gV2lkdGggSm9pbmVyLlxyXG4gKlxyXG4gKiBodHRwczovL2Vtb2ppcGVkaWEub3JnL3plcm8td2lkdGgtam9pbmVyL1xyXG4gKi9cblxuXG52YXIgaXNaV0ogPSBjb2RlID0+IHtcbiAgcmV0dXJuIGNvZGUgPT09IDB4MjAwZDtcbn07XG4vKipcclxuICogSXMgYGNvZGVgIGEgQmxhY2sgRmxhZy5cclxuICpcclxuICogaHR0cHM6Ly9lbW9qaXBlZGlhLm9yZy9ibGFjay1mbGFnL1xyXG4gKi9cblxuXG52YXIgaXNCbGFja0ZsYWcgPSBjb2RlID0+IHtcbiAgcmV0dXJuIGNvZGUgPT09IDB4MWYzZjQ7XG59O1xuLyoqXHJcbiAqIElzIGBjb2RlYCBhIFRhZy5cclxuICpcclxuICogaHR0cHM6Ly9lbW9qaXBlZGlhLm9yZy9lbW9qaS10YWctc2VxdWVuY2UvXHJcbiAqL1xuXG5cbnZhciBpc1RhZyA9IGNvZGUgPT4ge1xuICByZXR1cm4gY29kZSA+PSAweGUwMDAwICYmIGNvZGUgPD0gMHhlMDA3Zjtcbn07XG4vKipcclxuICogSXMgYGNvZGVgIGEgQ2FuY2VsIFRhZy5cclxuICpcclxuICogaHR0cHM6Ly9lbW9qaXBlZGlhLm9yZy9jYW5jZWwtdGFnL1xyXG4gKi9cblxuXG52YXIgaXNDYW5jZWxUYWcgPSBjb2RlID0+IHtcbiAgcmV0dXJuIGNvZGUgPT09IDB4ZTAwN2Y7XG59O1xuLyoqXHJcbiAqIEl0ZXJhdGUgb24gY29kZXBvaW50cyBmcm9tIHJpZ2h0IHRvIGxlZnQuXHJcbiAqL1xuXG5cbnZhciBjb2RlcG9pbnRzSXRlcmF0b3JSVEwgPSBmdW5jdGlvbiogY29kZXBvaW50c0l0ZXJhdG9yUlRMKHN0cikge1xuICB2YXIgZW5kID0gc3RyLmxlbmd0aCAtIDE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgY2hhcjEgPSBzdHIuY2hhckF0KGVuZCAtIGkpO1xuXG4gICAgaWYgKGlzTG93U3Vycm9nYXRlKGNoYXIxLmNoYXJDb2RlQXQoMCkpKSB7XG4gICAgICB2YXIgY2hhcjIgPSBzdHIuY2hhckF0KGVuZCAtIGkgLSAxKTtcblxuICAgICAgaWYgKGlzSGlnaFN1cnJvZ2F0ZShjaGFyMi5jaGFyQ29kZUF0KDApKSkge1xuICAgICAgICB5aWVsZCBjaGFyMiArIGNoYXIxO1xuICAgICAgICBpKys7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHlpZWxkIGNoYXIxO1xuICB9XG59O1xuLyoqXHJcbiAqIElzIGBjaGFyQ29kZWAgYSBoaWdoIHN1cnJvZ2F0ZS5cclxuICpcclxuICogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW5pdmVyc2FsX0NoYXJhY3Rlcl9TZXRfY2hhcmFjdGVycyNTdXJyb2dhdGVzXHJcbiAqL1xuXG52YXIgaXNIaWdoU3Vycm9nYXRlID0gY2hhckNvZGUgPT4ge1xuICByZXR1cm4gY2hhckNvZGUgPj0gMHhkODAwICYmIGNoYXJDb2RlIDw9IDB4ZGJmZjtcbn07XG4vKipcclxuICogSXMgYGNoYXJDb2RlYCBhIGxvdyBzdXJyb2dhdGUuXHJcbiAqXHJcbiAqIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VuaXZlcnNhbF9DaGFyYWN0ZXJfU2V0X2NoYXJhY3RlcnMjU3Vycm9nYXRlc1xyXG4gKi9cblxuXG52YXIgaXNMb3dTdXJyb2dhdGUgPSBjaGFyQ29kZSA9PiB7XG4gIHJldHVybiBjaGFyQ29kZSA+PSAweGRjMDAgJiYgY2hhckNvZGUgPD0gMHhkZmZmO1xufTtcblxuLyoqXHJcbiAqIFNoYXJlZCB0aGUgZnVuY3Rpb24gd2l0aCBpc0VsZW1lbnRUeXBlIHV0aWxpdHlcclxuICovXG5cbnZhciBpc0VsZW1lbnQgPSB2YWx1ZSA9PiB7XG4gIHJldHVybiBpc1BsYWluT2JqZWN0KHZhbHVlKSAmJiBOb2RlLmlzTm9kZUxpc3QodmFsdWUuY2hpbGRyZW4pICYmICFFZGl0b3IuaXNFZGl0b3IodmFsdWUpO1xufTtcblxudmFyIEVsZW1lbnQgPSB7XG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaW1wbGVtZW50cyB0aGUgJ0FuY2VzdG9yJyBpbnRlcmZhY2UuXHJcbiAgICovXG4gIGlzQW5jZXN0b3IodmFsdWUpIHtcbiAgICByZXR1cm4gaXNQbGFpbk9iamVjdCh2YWx1ZSkgJiYgTm9kZS5pc05vZGVMaXN0KHZhbHVlLmNoaWxkcmVuKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGltcGxlbWVudHMgdGhlIGBFbGVtZW50YCBpbnRlcmZhY2UuXHJcbiAgICovXG4gIGlzRWxlbWVudCxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGlzIGFuIGFycmF5IG9mIGBFbGVtZW50YCBvYmplY3RzLlxyXG4gICAqL1xuICBpc0VsZW1lbnRMaXN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmV2ZXJ5KHZhbCA9PiBFbGVtZW50LmlzRWxlbWVudCh2YWwpKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHNldCBvZiBwcm9wcyBpcyBhIHBhcnRpYWwgb2YgRWxlbWVudC5cclxuICAgKi9cbiAgaXNFbGVtZW50UHJvcHMocHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMuY2hpbGRyZW4gIT09IHVuZGVmaW5lZDtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGltcGxlbWVudHMgdGhlIGBFbGVtZW50YCBpbnRlcmZhY2UgYW5kIGhhcyBlbGVtZW50S2V5IHdpdGggc2VsZWN0ZWQgdmFsdWUuXHJcbiAgICogRGVmYXVsdCBpdCBjaGVjayB0byBgdHlwZWAga2V5IHZhbHVlXHJcbiAgICovXG4gIGlzRWxlbWVudFR5cGU6IGZ1bmN0aW9uIGlzRWxlbWVudFR5cGUodmFsdWUsIGVsZW1lbnRWYWwpIHtcbiAgICB2YXIgZWxlbWVudEtleSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogJ3R5cGUnO1xuICAgIHJldHVybiBpc0VsZW1lbnQodmFsdWUpICYmIHZhbHVlW2VsZW1lbnRLZXldID09PSBlbGVtZW50VmFsO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGFuIGVsZW1lbnQgbWF0Y2hlcyBzZXQgb2YgcHJvcGVydGllcy5cclxuICAgKlxyXG4gICAqIE5vdGU6IHRoaXMgY2hlY2tzIGN1c3RvbSBwcm9wZXJ0aWVzLCBhbmQgaXQgZG9lcyBub3QgZW5zdXJlIHRoYXQgYW55XHJcbiAgICogY2hpbGRyZW4gYXJlIGVxdWl2YWxlbnQuXHJcbiAgICovXG4gIG1hdGNoZXMoZWxlbWVudCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdjaGlsZHJlbicpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50W2tleV0gIT09IHByb3BzW2tleV0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbn07XG5cbnZhciBfZXhjbHVkZWQkNCA9IFtcInRleHRcIl0sXG4gICAgX2V4Y2x1ZGVkMiQzID0gW1widGV4dFwiXTtcblxuZnVuY3Rpb24gb3duS2V5cyQ4KG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSB7IHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsgfSBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQ4KHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMkOChPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzJDgoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG52YXIgSVNfRURJVE9SX0NBQ0hFID0gbmV3IFdlYWtNYXAoKTtcbnZhciBFZGl0b3IgPSB7XG4gIC8qKlxyXG4gICAqIEdldCB0aGUgYW5jZXN0b3IgYWJvdmUgYSBsb2NhdGlvbiBpbiB0aGUgZG9jdW1lbnQuXHJcbiAgICovXG4gIGFib3ZlKGVkaXRvcikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIge1xuICAgICAgdm9pZHMgPSBmYWxzZSxcbiAgICAgIG1vZGUgPSAnbG93ZXN0JyxcbiAgICAgIGF0ID0gZWRpdG9yLnNlbGVjdGlvbixcbiAgICAgIG1hdGNoXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICBpZiAoIWF0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBhdGggPSBFZGl0b3IucGF0aChlZGl0b3IsIGF0KTtcbiAgICB2YXIgcmV2ZXJzZSA9IG1vZGUgPT09ICdsb3dlc3QnO1xuXG4gICAgZm9yICh2YXIgW24sIHBdIG9mIEVkaXRvci5sZXZlbHMoZWRpdG9yLCB7XG4gICAgICBhdDogcGF0aCxcbiAgICAgIHZvaWRzLFxuICAgICAgbWF0Y2gsXG4gICAgICByZXZlcnNlXG4gICAgfSkpIHtcbiAgICAgIGlmICghVGV4dC5pc1RleHQobikgJiYgIVBhdGguZXF1YWxzKHBhdGgsIHApKSB7XG4gICAgICAgIHJldHVybiBbbiwgcF07XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxyXG4gICAqIEFkZCBhIGN1c3RvbSBwcm9wZXJ0eSB0byB0aGUgbGVhZiB0ZXh0IG5vZGVzIGluIHRoZSBjdXJyZW50IHNlbGVjdGlvbi5cclxuICAgKlxyXG4gICAqIElmIHRoZSBzZWxlY3Rpb24gaXMgY3VycmVudGx5IGNvbGxhcHNlZCwgdGhlIG1hcmtzIHdpbGwgYmUgYWRkZWQgdG8gdGhlXHJcbiAgICogYGVkaXRvci5tYXJrc2AgcHJvcGVydHkgaW5zdGVhZCwgYW5kIGFwcGxpZWQgd2hlbiB0ZXh0IGlzIGluc2VydGVkIG5leHQuXHJcbiAgICovXG4gIGFkZE1hcmsoZWRpdG9yLCBrZXksIHZhbHVlKSB7XG4gICAgZWRpdG9yLmFkZE1hcmsoa2V5LCB2YWx1ZSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBwb2ludCBhZnRlciBhIGxvY2F0aW9uLlxyXG4gICAqL1xuICBhZnRlcihlZGl0b3IsIGF0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIHZhciBhbmNob3IgPSBFZGl0b3IucG9pbnQoZWRpdG9yLCBhdCwge1xuICAgICAgZWRnZTogJ2VuZCdcbiAgICB9KTtcbiAgICB2YXIgZm9jdXMgPSBFZGl0b3IuZW5kKGVkaXRvciwgW10pO1xuICAgIHZhciByYW5nZSA9IHtcbiAgICAgIGFuY2hvcixcbiAgICAgIGZvY3VzXG4gICAgfTtcbiAgICB2YXIge1xuICAgICAgZGlzdGFuY2UgPSAxXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgdmFyIGQgPSAwO1xuICAgIHZhciB0YXJnZXQ7XG5cbiAgICBmb3IgKHZhciBwIG9mIEVkaXRvci5wb3NpdGlvbnMoZWRpdG9yLCBfb2JqZWN0U3ByZWFkJDgoX29iamVjdFNwcmVhZCQ4KHt9LCBvcHRpb25zKSwge30sIHtcbiAgICAgIGF0OiByYW5nZVxuICAgIH0pKSkge1xuICAgICAgaWYgKGQgPiBkaXN0YW5jZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKGQgIT09IDApIHtcbiAgICAgICAgdGFyZ2V0ID0gcDtcbiAgICAgIH1cblxuICAgICAgZCsrO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBwb2ludCBiZWZvcmUgYSBsb2NhdGlvbi5cclxuICAgKi9cbiAgYmVmb3JlKGVkaXRvciwgYXQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIGFuY2hvciA9IEVkaXRvci5zdGFydChlZGl0b3IsIFtdKTtcbiAgICB2YXIgZm9jdXMgPSBFZGl0b3IucG9pbnQoZWRpdG9yLCBhdCwge1xuICAgICAgZWRnZTogJ3N0YXJ0J1xuICAgIH0pO1xuICAgIHZhciByYW5nZSA9IHtcbiAgICAgIGFuY2hvcixcbiAgICAgIGZvY3VzXG4gICAgfTtcbiAgICB2YXIge1xuICAgICAgZGlzdGFuY2UgPSAxXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgdmFyIGQgPSAwO1xuICAgIHZhciB0YXJnZXQ7XG5cbiAgICBmb3IgKHZhciBwIG9mIEVkaXRvci5wb3NpdGlvbnMoZWRpdG9yLCBfb2JqZWN0U3ByZWFkJDgoX29iamVjdFNwcmVhZCQ4KHt9LCBvcHRpb25zKSwge30sIHtcbiAgICAgIGF0OiByYW5nZSxcbiAgICAgIHJldmVyc2U6IHRydWVcbiAgICB9KSkpIHtcbiAgICAgIGlmIChkID4gZGlzdGFuY2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChkICE9PSAwKSB7XG4gICAgICAgIHRhcmdldCA9IHA7XG4gICAgICB9XG5cbiAgICAgIGQrKztcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIERlbGV0ZSBjb250ZW50IGluIHRoZSBlZGl0b3IgYmFja3dhcmQgZnJvbSB0aGUgY3VycmVudCBzZWxlY3Rpb24uXHJcbiAgICovXG4gIGRlbGV0ZUJhY2t3YXJkKGVkaXRvcikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIge1xuICAgICAgdW5pdCA9ICdjaGFyYWN0ZXInXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgZWRpdG9yLmRlbGV0ZUJhY2t3YXJkKHVuaXQpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIERlbGV0ZSBjb250ZW50IGluIHRoZSBlZGl0b3IgZm9yd2FyZCBmcm9tIHRoZSBjdXJyZW50IHNlbGVjdGlvbi5cclxuICAgKi9cbiAgZGVsZXRlRm9yd2FyZChlZGl0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHtcbiAgICAgIHVuaXQgPSAnY2hhcmFjdGVyJ1xuICAgIH0gPSBvcHRpb25zO1xuICAgIGVkaXRvci5kZWxldGVGb3J3YXJkKHVuaXQpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIERlbGV0ZSB0aGUgY29udGVudCBpbiB0aGUgY3VycmVudCBzZWxlY3Rpb24uXHJcbiAgICovXG4gIGRlbGV0ZUZyYWdtZW50KGVkaXRvcikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIge1xuICAgICAgZGlyZWN0aW9uID0gJ2ZvcndhcmQnXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgZWRpdG9yLmRlbGV0ZUZyYWdtZW50KGRpcmVjdGlvbik7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBzdGFydCBhbmQgZW5kIHBvaW50cyBvZiBhIGxvY2F0aW9uLlxyXG4gICAqL1xuICBlZGdlcyhlZGl0b3IsIGF0KSB7XG4gICAgcmV0dXJuIFtFZGl0b3Iuc3RhcnQoZWRpdG9yLCBhdCksIEVkaXRvci5lbmQoZWRpdG9yLCBhdCldO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgZW5kIHBvaW50IG9mIGEgbG9jYXRpb24uXHJcbiAgICovXG4gIGVuZChlZGl0b3IsIGF0KSB7XG4gICAgcmV0dXJuIEVkaXRvci5wb2ludChlZGl0b3IsIGF0LCB7XG4gICAgICBlZGdlOiAnZW5kJ1xuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgZmlyc3Qgbm9kZSBhdCBhIGxvY2F0aW9uLlxyXG4gICAqL1xuICBmaXJzdChlZGl0b3IsIGF0KSB7XG4gICAgdmFyIHBhdGggPSBFZGl0b3IucGF0aChlZGl0b3IsIGF0LCB7XG4gICAgICBlZGdlOiAnc3RhcnQnXG4gICAgfSk7XG4gICAgcmV0dXJuIEVkaXRvci5ub2RlKGVkaXRvciwgcGF0aCk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBmcmFnbWVudCBhdCBhIGxvY2F0aW9uLlxyXG4gICAqL1xuICBmcmFnbWVudChlZGl0b3IsIGF0KSB7XG4gICAgdmFyIHJhbmdlID0gRWRpdG9yLnJhbmdlKGVkaXRvciwgYXQpO1xuICAgIHZhciBmcmFnbWVudCA9IE5vZGUuZnJhZ21lbnQoZWRpdG9yLCByYW5nZSk7XG4gICAgcmV0dXJuIGZyYWdtZW50O1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgbm9kZSBoYXMgYmxvY2sgY2hpbGRyZW4uXHJcbiAgICovXG4gIGhhc0Jsb2NrcyhlZGl0b3IsIGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5jaGlsZHJlbi5zb21lKG4gPT4gRWRpdG9yLmlzQmxvY2soZWRpdG9yLCBuKSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBub2RlIGhhcyBpbmxpbmUgYW5kIHRleHQgY2hpbGRyZW4uXHJcbiAgICovXG4gIGhhc0lubGluZXMoZWRpdG9yLCBlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuY2hpbGRyZW4uc29tZShuID0+IFRleHQuaXNUZXh0KG4pIHx8IEVkaXRvci5pc0lubGluZShlZGl0b3IsIG4pKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIG5vZGUgaGFzIHRleHQgY2hpbGRyZW4uXHJcbiAgICovXG4gIGhhc1RleHRzKGVkaXRvciwgZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmNoaWxkcmVuLmV2ZXJ5KG4gPT4gVGV4dC5pc1RleHQobikpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEluc2VydCBhIGJsb2NrIGJyZWFrIGF0IHRoZSBjdXJyZW50IHNlbGVjdGlvbi5cclxuICAgKlxyXG4gICAqIElmIHRoZSBzZWxlY3Rpb24gaXMgY3VycmVudGx5IGV4cGFuZGVkLCBpdCB3aWxsIGJlIGRlbGV0ZWQgZmlyc3QuXHJcbiAgICovXG4gIGluc2VydEJyZWFrKGVkaXRvcikge1xuICAgIGVkaXRvci5pbnNlcnRCcmVhaygpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEluc2VydCBhIGZyYWdtZW50IGF0IHRoZSBjdXJyZW50IHNlbGVjdGlvbi5cclxuICAgKlxyXG4gICAqIElmIHRoZSBzZWxlY3Rpb24gaXMgY3VycmVudGx5IGV4cGFuZGVkLCBpdCB3aWxsIGJlIGRlbGV0ZWQgZmlyc3QuXHJcbiAgICovXG4gIGluc2VydEZyYWdtZW50KGVkaXRvciwgZnJhZ21lbnQpIHtcbiAgICBlZGl0b3IuaW5zZXJ0RnJhZ21lbnQoZnJhZ21lbnQpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEluc2VydCBhIG5vZGUgYXQgdGhlIGN1cnJlbnQgc2VsZWN0aW9uLlxyXG4gICAqXHJcbiAgICogSWYgdGhlIHNlbGVjdGlvbiBpcyBjdXJyZW50bHkgZXhwYW5kZWQsIGl0IHdpbGwgYmUgZGVsZXRlZCBmaXJzdC5cclxuICAgKi9cbiAgaW5zZXJ0Tm9kZShlZGl0b3IsIG5vZGUpIHtcbiAgICBlZGl0b3IuaW5zZXJ0Tm9kZShub2RlKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBJbnNlcnQgdGV4dCBhdCB0aGUgY3VycmVudCBzZWxlY3Rpb24uXHJcbiAgICpcclxuICAgKiBJZiB0aGUgc2VsZWN0aW9uIGlzIGN1cnJlbnRseSBleHBhbmRlZCwgaXQgd2lsbCBiZSBkZWxldGVkIGZpcnN0LlxyXG4gICAqL1xuICBpbnNlcnRUZXh0KGVkaXRvciwgdGV4dCkge1xuICAgIGVkaXRvci5pbnNlcnRUZXh0KHRleHQpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYSBibG9jayBgRWxlbWVudGAgb2JqZWN0LlxyXG4gICAqL1xuICBpc0Jsb2NrKGVkaXRvciwgdmFsdWUpIHtcbiAgICByZXR1cm4gRWxlbWVudC5pc0VsZW1lbnQodmFsdWUpICYmICFlZGl0b3IuaXNJbmxpbmUodmFsdWUpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYW4gYEVkaXRvcmAgb2JqZWN0LlxyXG4gICAqL1xuICBpc0VkaXRvcih2YWx1ZSkge1xuICAgIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgY2FjaGVkSXNFZGl0b3IgPSBJU19FRElUT1JfQ0FDSEUuZ2V0KHZhbHVlKTtcblxuICAgIGlmIChjYWNoZWRJc0VkaXRvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gY2FjaGVkSXNFZGl0b3I7XG4gICAgfVxuXG4gICAgdmFyIGlzRWRpdG9yID0gdHlwZW9mIHZhbHVlLmFkZE1hcmsgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlLmFwcGx5ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZS5kZWxldGVCYWNrd2FyZCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUuZGVsZXRlRm9yd2FyZCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUuZGVsZXRlRnJhZ21lbnQgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlLmluc2VydEJyZWFrID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZS5pbnNlcnRGcmFnbWVudCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUuaW5zZXJ0Tm9kZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUuaW5zZXJ0VGV4dCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUuaXNJbmxpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlLmlzVm9pZCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUubm9ybWFsaXplTm9kZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUub25DaGFuZ2UgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlLnJlbW92ZU1hcmsgPT09ICdmdW5jdGlvbicgJiYgKHZhbHVlLm1hcmtzID09PSBudWxsIHx8IGlzUGxhaW5PYmplY3QodmFsdWUubWFya3MpKSAmJiAodmFsdWUuc2VsZWN0aW9uID09PSBudWxsIHx8IFJhbmdlLmlzUmFuZ2UodmFsdWUuc2VsZWN0aW9uKSkgJiYgTm9kZS5pc05vZGVMaXN0KHZhbHVlLmNoaWxkcmVuKSAmJiBPcGVyYXRpb24uaXNPcGVyYXRpb25MaXN0KHZhbHVlLm9wZXJhdGlvbnMpO1xuICAgIElTX0VESVRPUl9DQUNIRS5zZXQodmFsdWUsIGlzRWRpdG9yKTtcbiAgICByZXR1cm4gaXNFZGl0b3I7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBwb2ludCBpcyB0aGUgZW5kIHBvaW50IG9mIGEgbG9jYXRpb24uXHJcbiAgICovXG4gIGlzRW5kKGVkaXRvciwgcG9pbnQsIGF0KSB7XG4gICAgdmFyIGVuZCA9IEVkaXRvci5lbmQoZWRpdG9yLCBhdCk7XG4gICAgcmV0dXJuIFBvaW50LmVxdWFscyhwb2ludCwgZW5kKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHBvaW50IGlzIGFuIGVkZ2Ugb2YgYSBsb2NhdGlvbi5cclxuICAgKi9cbiAgaXNFZGdlKGVkaXRvciwgcG9pbnQsIGF0KSB7XG4gICAgcmV0dXJuIEVkaXRvci5pc1N0YXJ0KGVkaXRvciwgcG9pbnQsIGF0KSB8fCBFZGl0b3IuaXNFbmQoZWRpdG9yLCBwb2ludCwgYXQpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGFuIGVsZW1lbnQgaXMgZW1wdHksIGFjY291bnRpbmcgZm9yIHZvaWQgbm9kZXMuXHJcbiAgICovXG4gIGlzRW1wdHkoZWRpdG9yLCBlbGVtZW50KSB7XG4gICAgdmFyIHtcbiAgICAgIGNoaWxkcmVuXG4gICAgfSA9IGVsZW1lbnQ7XG4gICAgdmFyIFtmaXJzdF0gPSBjaGlsZHJlbjtcbiAgICByZXR1cm4gY2hpbGRyZW4ubGVuZ3RoID09PSAwIHx8IGNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJiBUZXh0LmlzVGV4dChmaXJzdCkgJiYgZmlyc3QudGV4dCA9PT0gJycgJiYgIWVkaXRvci5pc1ZvaWQoZWxlbWVudCk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhbiBpbmxpbmUgYEVsZW1lbnRgIG9iamVjdC5cclxuICAgKi9cbiAgaXNJbmxpbmUoZWRpdG9yLCB2YWx1ZSkge1xuICAgIHJldHVybiBFbGVtZW50LmlzRWxlbWVudCh2YWx1ZSkgJiYgZWRpdG9yLmlzSW5saW5lKHZhbHVlKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiB0aGUgZWRpdG9yIGlzIGN1cnJlbnRseSBub3JtYWxpemluZyBhZnRlciBlYWNoIG9wZXJhdGlvbi5cclxuICAgKi9cbiAgaXNOb3JtYWxpemluZyhlZGl0b3IpIHtcbiAgICB2YXIgaXNOb3JtYWxpemluZyA9IE5PUk1BTElaSU5HLmdldChlZGl0b3IpO1xuICAgIHJldHVybiBpc05vcm1hbGl6aW5nID09PSB1bmRlZmluZWQgPyB0cnVlIDogaXNOb3JtYWxpemluZztcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHBvaW50IGlzIHRoZSBzdGFydCBwb2ludCBvZiBhIGxvY2F0aW9uLlxyXG4gICAqL1xuICBpc1N0YXJ0KGVkaXRvciwgcG9pbnQsIGF0KSB7XG4gICAgLy8gUEVSRjogSWYgdGhlIG9mZnNldCBpc24ndCBgMGAgd2Uga25vdyBpdCdzIG5vdCB0aGUgc3RhcnQuXG4gICAgaWYgKHBvaW50Lm9mZnNldCAhPT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBzdGFydCA9IEVkaXRvci5zdGFydChlZGl0b3IsIGF0KTtcbiAgICByZXR1cm4gUG9pbnQuZXF1YWxzKHBvaW50LCBzdGFydCk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhIHZvaWQgYEVsZW1lbnRgIG9iamVjdC5cclxuICAgKi9cbiAgaXNWb2lkKGVkaXRvciwgdmFsdWUpIHtcbiAgICByZXR1cm4gRWxlbWVudC5pc0VsZW1lbnQodmFsdWUpICYmIGVkaXRvci5pc1ZvaWQodmFsdWUpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgbGFzdCBub2RlIGF0IGEgbG9jYXRpb24uXHJcbiAgICovXG4gIGxhc3QoZWRpdG9yLCBhdCkge1xuICAgIHZhciBwYXRoID0gRWRpdG9yLnBhdGgoZWRpdG9yLCBhdCwge1xuICAgICAgZWRnZTogJ2VuZCdcbiAgICB9KTtcbiAgICByZXR1cm4gRWRpdG9yLm5vZGUoZWRpdG9yLCBwYXRoKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIGxlYWYgdGV4dCBub2RlIGF0IGEgbG9jYXRpb24uXHJcbiAgICovXG4gIGxlYWYoZWRpdG9yLCBhdCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICB2YXIgcGF0aCA9IEVkaXRvci5wYXRoKGVkaXRvciwgYXQsIG9wdGlvbnMpO1xuICAgIHZhciBub2RlID0gTm9kZS5sZWFmKGVkaXRvciwgcGF0aCk7XG4gICAgcmV0dXJuIFtub2RlLCBwYXRoXTtcbiAgfSxcblxuICAvKipcclxuICAgKiBJdGVyYXRlIHRocm91Z2ggYWxsIG9mIHRoZSBsZXZlbHMgYXQgYSBsb2NhdGlvbi5cclxuICAgKi9cbiAgKmxldmVscyhlZGl0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHtcbiAgICAgIGF0ID0gZWRpdG9yLnNlbGVjdGlvbixcbiAgICAgIHJldmVyc2UgPSBmYWxzZSxcbiAgICAgIHZvaWRzID0gZmFsc2VcbiAgICB9ID0gb3B0aW9ucztcbiAgICB2YXIge1xuICAgICAgbWF0Y2hcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIGlmIChtYXRjaCA9PSBudWxsKSB7XG4gICAgICBtYXRjaCA9ICgpID0+IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFhdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBsZXZlbHMgPSBbXTtcbiAgICB2YXIgcGF0aCA9IEVkaXRvci5wYXRoKGVkaXRvciwgYXQpO1xuXG4gICAgZm9yICh2YXIgW24sIHBdIG9mIE5vZGUubGV2ZWxzKGVkaXRvciwgcGF0aCkpIHtcbiAgICAgIGlmICghbWF0Y2gobiwgcCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxldmVscy5wdXNoKFtuLCBwXSk7XG5cbiAgICAgIGlmICghdm9pZHMgJiYgRWRpdG9yLmlzVm9pZChlZGl0b3IsIG4pKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICBsZXZlbHMucmV2ZXJzZSgpO1xuICAgIH1cblxuICAgIHlpZWxkKiBsZXZlbHM7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBtYXJrcyB0aGF0IHdvdWxkIGJlIGFkZGVkIHRvIHRleHQgYXQgdGhlIGN1cnJlbnQgc2VsZWN0aW9uLlxyXG4gICAqL1xuICBtYXJrcyhlZGl0b3IpIHtcbiAgICB2YXIge1xuICAgICAgbWFya3MsXG4gICAgICBzZWxlY3Rpb25cbiAgICB9ID0gZWRpdG9yO1xuXG4gICAgaWYgKCFzZWxlY3Rpb24pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChtYXJrcykge1xuICAgICAgcmV0dXJuIG1hcmtzO1xuICAgIH1cblxuICAgIGlmIChSYW5nZS5pc0V4cGFuZGVkKHNlbGVjdGlvbikpIHtcbiAgICAgIHZhciBbbWF0Y2hdID0gRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgICBtYXRjaDogVGV4dC5pc1RleHRcbiAgICAgIH0pO1xuXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdmFyIFtfbm9kZV0gPSBtYXRjaDtcblxuICAgICAgICB2YXIgX3Jlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX25vZGUsIF9leGNsdWRlZCQ0KTtcblxuICAgICAgICByZXR1cm4gX3Jlc3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHtcbiAgICAgIGFuY2hvclxuICAgIH0gPSBzZWxlY3Rpb247XG4gICAgdmFyIHtcbiAgICAgIHBhdGhcbiAgICB9ID0gYW5jaG9yO1xuICAgIHZhciBbbm9kZV0gPSBFZGl0b3IubGVhZihlZGl0b3IsIHBhdGgpO1xuXG4gICAgaWYgKGFuY2hvci5vZmZzZXQgPT09IDApIHtcbiAgICAgIHZhciBwcmV2ID0gRWRpdG9yLnByZXZpb3VzKGVkaXRvciwge1xuICAgICAgICBhdDogcGF0aCxcbiAgICAgICAgbWF0Y2g6IFRleHQuaXNUZXh0XG4gICAgICB9KTtcbiAgICAgIHZhciBibG9jayA9IEVkaXRvci5hYm92ZShlZGl0b3IsIHtcbiAgICAgICAgbWF0Y2g6IG4gPT4gRWRpdG9yLmlzQmxvY2soZWRpdG9yLCBuKVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChwcmV2ICYmIGJsb2NrKSB7XG4gICAgICAgIHZhciBbcHJldk5vZGUsIHByZXZQYXRoXSA9IHByZXY7XG4gICAgICAgIHZhciBbLCBibG9ja1BhdGhdID0gYmxvY2s7XG5cbiAgICAgICAgaWYgKFBhdGguaXNBbmNlc3RvcihibG9ja1BhdGgsIHByZXZQYXRoKSkge1xuICAgICAgICAgIG5vZGUgPSBwcmV2Tm9kZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG5vZGUsIF9leGNsdWRlZDIkMyk7XG5cbiAgICByZXR1cm4gcmVzdDtcbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIG1hdGNoaW5nIG5vZGUgaW4gdGhlIGJyYW5jaCBvZiB0aGUgZG9jdW1lbnQgYWZ0ZXIgYSBsb2NhdGlvbi5cclxuICAgKi9cbiAgbmV4dChlZGl0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHtcbiAgICAgIG1vZGUgPSAnbG93ZXN0JyxcbiAgICAgIHZvaWRzID0gZmFsc2VcbiAgICB9ID0gb3B0aW9ucztcbiAgICB2YXIge1xuICAgICAgbWF0Y2gsXG4gICAgICBhdCA9IGVkaXRvci5zZWxlY3Rpb25cbiAgICB9ID0gb3B0aW9ucztcblxuICAgIGlmICghYXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcG9pbnRBZnRlckxvY2F0aW9uID0gRWRpdG9yLmFmdGVyKGVkaXRvciwgYXQsIHtcbiAgICAgIHZvaWRzXG4gICAgfSk7XG4gICAgaWYgKCFwb2ludEFmdGVyTG9jYXRpb24pIHJldHVybjtcbiAgICB2YXIgWywgdG9dID0gRWRpdG9yLmxhc3QoZWRpdG9yLCBbXSk7XG4gICAgdmFyIHNwYW4gPSBbcG9pbnRBZnRlckxvY2F0aW9uLnBhdGgsIHRvXTtcblxuICAgIGlmIChQYXRoLmlzUGF0aChhdCkgJiYgYXQubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZ2V0IHRoZSBuZXh0IG5vZGUgZnJvbSB0aGUgcm9vdCBub2RlIVwiKTtcbiAgICB9XG5cbiAgICBpZiAobWF0Y2ggPT0gbnVsbCkge1xuICAgICAgaWYgKFBhdGguaXNQYXRoKGF0KSkge1xuICAgICAgICB2YXIgW3BhcmVudF0gPSBFZGl0b3IucGFyZW50KGVkaXRvciwgYXQpO1xuXG4gICAgICAgIG1hdGNoID0gbiA9PiBwYXJlbnQuY2hpbGRyZW4uaW5jbHVkZXMobik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXRjaCA9ICgpID0+IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIFtuZXh0XSA9IEVkaXRvci5ub2RlcyhlZGl0b3IsIHtcbiAgICAgIGF0OiBzcGFuLFxuICAgICAgbWF0Y2gsXG4gICAgICBtb2RlLFxuICAgICAgdm9pZHNcbiAgICB9KTtcbiAgICByZXR1cm4gbmV4dDtcbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIG5vZGUgYXQgYSBsb2NhdGlvbi5cclxuICAgKi9cbiAgbm9kZShlZGl0b3IsIGF0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIHZhciBwYXRoID0gRWRpdG9yLnBhdGgoZWRpdG9yLCBhdCwgb3B0aW9ucyk7XG4gICAgdmFyIG5vZGUgPSBOb2RlLmdldChlZGl0b3IsIHBhdGgpO1xuICAgIHJldHVybiBbbm9kZSwgcGF0aF07XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogSXRlcmF0ZSB0aHJvdWdoIGFsbCBvZiB0aGUgbm9kZXMgaW4gdGhlIEVkaXRvci5cclxuICAgKi9cbiAgKm5vZGVzKGVkaXRvcikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIge1xuICAgICAgYXQgPSBlZGl0b3Iuc2VsZWN0aW9uLFxuICAgICAgbW9kZSA9ICdhbGwnLFxuICAgICAgdW5pdmVyc2FsID0gZmFsc2UsXG4gICAgICByZXZlcnNlID0gZmFsc2UsXG4gICAgICB2b2lkcyA9IGZhbHNlXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgdmFyIHtcbiAgICAgIG1hdGNoXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICBpZiAoIW1hdGNoKSB7XG4gICAgICBtYXRjaCA9ICgpID0+IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFhdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBmcm9tO1xuICAgIHZhciB0bztcblxuICAgIGlmIChTcGFuLmlzU3BhbihhdCkpIHtcbiAgICAgIGZyb20gPSBhdFswXTtcbiAgICAgIHRvID0gYXRbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBmaXJzdCA9IEVkaXRvci5wYXRoKGVkaXRvciwgYXQsIHtcbiAgICAgICAgZWRnZTogJ3N0YXJ0J1xuICAgICAgfSk7XG4gICAgICB2YXIgbGFzdCA9IEVkaXRvci5wYXRoKGVkaXRvciwgYXQsIHtcbiAgICAgICAgZWRnZTogJ2VuZCdcbiAgICAgIH0pO1xuICAgICAgZnJvbSA9IHJldmVyc2UgPyBsYXN0IDogZmlyc3Q7XG4gICAgICB0byA9IHJldmVyc2UgPyBmaXJzdCA6IGxhc3Q7XG4gICAgfVxuXG4gICAgdmFyIG5vZGVFbnRyaWVzID0gTm9kZS5ub2RlcyhlZGl0b3IsIHtcbiAgICAgIHJldmVyc2UsXG4gICAgICBmcm9tLFxuICAgICAgdG8sXG4gICAgICBwYXNzOiBfcmVmID0+IHtcbiAgICAgICAgdmFyIFtuXSA9IF9yZWY7XG4gICAgICAgIHJldHVybiB2b2lkcyA/IGZhbHNlIDogRWRpdG9yLmlzVm9pZChlZGl0b3IsIG4pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHZhciBtYXRjaGVzID0gW107XG4gICAgdmFyIGhpdDtcblxuICAgIGZvciAodmFyIFtub2RlLCBwYXRoXSBvZiBub2RlRW50cmllcykge1xuICAgICAgdmFyIGlzTG93ZXIgPSBoaXQgJiYgUGF0aC5jb21wYXJlKHBhdGgsIGhpdFsxXSkgPT09IDA7IC8vIEluIGhpZ2hlc3QgbW9kZSBhbnkgbm9kZSBsb3dlciB0aGFuIHRoZSBsYXN0IGhpdCBpcyBub3QgYSBtYXRjaC5cblxuICAgICAgaWYgKG1vZGUgPT09ICdoaWdoZXN0JyAmJiBpc0xvd2VyKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW1hdGNoKG5vZGUsIHBhdGgpKSB7XG4gICAgICAgIC8vIElmIHdlJ3ZlIGFycml2ZWQgYXQgYSBsZWFmIHRleHQgbm9kZSB0aGF0IGlzIG5vdCBsb3dlciB0aGFuIHRoZSBsYXN0XG4gICAgICAgIC8vIGhpdCwgdGhlbiB3ZSd2ZSBmb3VuZCBhIGJyYW5jaCB0aGF0IGRvZXNuJ3QgaW5jbHVkZSBhIG1hdGNoLCB3aGljaFxuICAgICAgICAvLyBtZWFucyB0aGUgbWF0Y2ggaXMgbm90IHVuaXZlcnNhbC5cbiAgICAgICAgaWYgKHVuaXZlcnNhbCAmJiAhaXNMb3dlciAmJiBUZXh0LmlzVGV4dChub2RlKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBJZiB0aGVyZSdzIGEgbWF0Y2ggYW5kIGl0J3MgbG93ZXIgdGhhbiB0aGUgbGFzdCwgdXBkYXRlIHRoZSBoaXQuXG5cblxuICAgICAgaWYgKG1vZGUgPT09ICdsb3dlc3QnICYmIGlzTG93ZXIpIHtcbiAgICAgICAgaGl0ID0gW25vZGUsIHBhdGhdO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gLy8gSW4gbG93ZXN0IG1vZGUgd2UgZW1pdCB0aGUgbGFzdCBoaXQsIG9uY2UgaXQncyBndWFyYW50ZWVkIGxvd2VzdC5cblxuXG4gICAgICB2YXIgZW1pdCA9IG1vZGUgPT09ICdsb3dlc3QnID8gaGl0IDogW25vZGUsIHBhdGhdO1xuXG4gICAgICBpZiAoZW1pdCkge1xuICAgICAgICBpZiAodW5pdmVyc2FsKSB7XG4gICAgICAgICAgbWF0Y2hlcy5wdXNoKGVtaXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHlpZWxkIGVtaXQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaGl0ID0gW25vZGUsIHBhdGhdO1xuICAgIH0gLy8gU2luY2UgbG93ZXN0IGlzIGFsd2F5cyBlbWl0dGluZyBvbmUgYmVoaW5kLCBjYXRjaCB1cCBhdCB0aGUgZW5kLlxuXG5cbiAgICBpZiAobW9kZSA9PT0gJ2xvd2VzdCcgJiYgaGl0KSB7XG4gICAgICBpZiAodW5pdmVyc2FsKSB7XG4gICAgICAgIG1hdGNoZXMucHVzaChoaXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeWllbGQgaGl0O1xuICAgICAgfVxuICAgIH0gLy8gVW5pdmVyc2FsIGRlZmVycyB0byBlbnN1cmUgdGhhdCB0aGUgbWF0Y2ggb2NjdXJzIGluIGV2ZXJ5IGJyYW5jaCwgc28gd2VcbiAgICAvLyB5aWVsZCBhbGwgb2YgdGhlIG1hdGNoZXMgYWZ0ZXIgaXRlcmF0aW5nLlxuXG5cbiAgICBpZiAodW5pdmVyc2FsKSB7XG4gICAgICB5aWVsZCogbWF0Y2hlcztcbiAgICB9XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogTm9ybWFsaXplIGFueSBkaXJ0eSBvYmplY3RzIGluIHRoZSBlZGl0b3IuXHJcbiAgICovXG4gIG5vcm1hbGl6ZShlZGl0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHtcbiAgICAgIGZvcmNlID0gZmFsc2VcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIHZhciBnZXREaXJ0eVBhdGhzID0gZWRpdG9yID0+IHtcbiAgICAgIHJldHVybiBESVJUWV9QQVRIUy5nZXQoZWRpdG9yKSB8fCBbXTtcbiAgICB9O1xuXG4gICAgaWYgKCFFZGl0b3IuaXNOb3JtYWxpemluZyhlZGl0b3IpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGZvcmNlKSB7XG4gICAgICB2YXIgYWxsUGF0aHMgPSBBcnJheS5mcm9tKE5vZGUubm9kZXMoZWRpdG9yKSwgX3JlZjIgPT4ge1xuICAgICAgICB2YXIgWywgcF0gPSBfcmVmMjtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgICB9KTtcbiAgICAgIERJUlRZX1BBVEhTLnNldChlZGl0b3IsIGFsbFBhdGhzKTtcbiAgICB9XG5cbiAgICBpZiAoZ2V0RGlydHlQYXRocyhlZGl0b3IpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEVkaXRvci53aXRob3V0Tm9ybWFsaXppbmcoZWRpdG9yLCAoKSA9PiB7XG4gICAgICAvKlxyXG4gICAgICAgIEZpeCBkaXJ0eSBlbGVtZW50cyB3aXRoIG5vIGNoaWxkcmVuLlxyXG4gICAgICAgIGVkaXRvci5ub3JtYWxpemVOb2RlKCkgZG9lcyBmaXggdGhpcywgYnV0IHNvbWUgbm9ybWFsaXphdGlvbiBmaXhlcyBhbHNvIHJlcXVpcmUgaXQgdG8gd29yay5cclxuICAgICAgICBSdW5uaW5nIGFuIGluaXRpYWwgcGFzcyBhdm9pZHMgdGhlIGNhdGNoLTIyIHJhY2UgY29uZGl0aW9uLlxyXG4gICAgICAqL1xuICAgICAgZm9yICh2YXIgZGlydHlQYXRoIG9mIGdldERpcnR5UGF0aHMoZWRpdG9yKSkge1xuICAgICAgICBpZiAoTm9kZS5oYXMoZWRpdG9yLCBkaXJ0eVBhdGgpKSB7XG4gICAgICAgICAgdmFyIGVudHJ5ID0gRWRpdG9yLm5vZGUoZWRpdG9yLCBkaXJ0eVBhdGgpO1xuICAgICAgICAgIHZhciBbbm9kZSwgX10gPSBlbnRyeTtcbiAgICAgICAgICAvKlxyXG4gICAgICAgICAgICBUaGUgZGVmYXVsdCBub3JtYWxpemVyIGluc2VydHMgYW4gZW1wdHkgdGV4dCBub2RlIGluIHRoaXMgc2NlbmFyaW8sIGJ1dCBpdCBjYW4gYmUgY3VzdG9taXNlZC5cclxuICAgICAgICAgICAgU28gdGhlcmUgaXMgc29tZSByaXNrIGhlcmUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgQXMgbG9uZyBhcyB0aGUgbm9ybWFsaXplciBvbmx5IGluc2VydHMgY2hpbGQgbm9kZXMgZm9yIHRoaXMgY2FzZSBpdCBpcyBzYWZlIHRvIGRvIGluIGFueSBvcmRlcjtcclxuICAgICAgICAgICAgYnkgZGVmaW5pdGlvbiBhZGRpbmcgY2hpbGRyZW4gdG8gYW4gZW1wdHkgbm9kZSBjYW4ndCBjYXVzZSBvdGhlciBwYXRocyB0byBjaGFuZ2UuXHJcbiAgICAgICAgICAqL1xuXG4gICAgICAgICAgaWYgKEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBlZGl0b3Iubm9ybWFsaXplTm9kZShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBtYXggPSBnZXREaXJ0eVBhdGhzKGVkaXRvcikubGVuZ3RoICogNDI7IC8vIEhBQ0s6IGJldHRlciB3YXk/XG5cbiAgICAgIHZhciBtID0gMDtcblxuICAgICAgd2hpbGUgKGdldERpcnR5UGF0aHMoZWRpdG9yKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgaWYgKG0gPiBtYXgpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcXG4gICAgICAgICAgICBDb3VsZCBub3QgY29tcGxldGVseSBub3JtYWxpemUgdGhlIGVkaXRvciBhZnRlciBcIi5jb25jYXQobWF4LCBcIiBpdGVyYXRpb25zISBUaGlzIGlzIHVzdWFsbHkgZHVlIHRvIGluY29ycmVjdCBub3JtYWxpemF0aW9uIGxvZ2ljIHRoYXQgbGVhdmVzIGEgbm9kZSBpbiBhbiBpbnZhbGlkIHN0YXRlLlxcbiAgICAgICAgICBcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9kaXJ0eVBhdGggPSBnZXREaXJ0eVBhdGhzKGVkaXRvcikucG9wKCk7IC8vIElmIHRoZSBub2RlIGRvZXNuJ3QgZXhpc3QgaW4gdGhlIHRyZWUsIGl0IGRvZXMgbm90IG5lZWQgdG8gYmUgbm9ybWFsaXplZC5cblxuXG4gICAgICAgIGlmIChOb2RlLmhhcyhlZGl0b3IsIF9kaXJ0eVBhdGgpKSB7XG4gICAgICAgICAgdmFyIF9lbnRyeSA9IEVkaXRvci5ub2RlKGVkaXRvciwgX2RpcnR5UGF0aCk7XG5cbiAgICAgICAgICBlZGl0b3Iubm9ybWFsaXplTm9kZShfZW50cnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgbSsrO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgcGFyZW50IG5vZGUgb2YgYSBsb2NhdGlvbi5cclxuICAgKi9cbiAgcGFyZW50KGVkaXRvciwgYXQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIHBhdGggPSBFZGl0b3IucGF0aChlZGl0b3IsIGF0LCBvcHRpb25zKTtcbiAgICB2YXIgcGFyZW50UGF0aCA9IFBhdGgucGFyZW50KHBhdGgpO1xuICAgIHZhciBlbnRyeSA9IEVkaXRvci5ub2RlKGVkaXRvciwgcGFyZW50UGF0aCk7XG4gICAgcmV0dXJuIGVudHJ5O1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgcGF0aCBvZiBhIGxvY2F0aW9uLlxyXG4gICAqL1xuICBwYXRoKGVkaXRvciwgYXQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIHtcbiAgICAgIGRlcHRoLFxuICAgICAgZWRnZVxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgaWYgKFBhdGguaXNQYXRoKGF0KSkge1xuICAgICAgaWYgKGVkZ2UgPT09ICdzdGFydCcpIHtcbiAgICAgICAgdmFyIFssIGZpcnN0UGF0aF0gPSBOb2RlLmZpcnN0KGVkaXRvciwgYXQpO1xuICAgICAgICBhdCA9IGZpcnN0UGF0aDtcbiAgICAgIH0gZWxzZSBpZiAoZWRnZSA9PT0gJ2VuZCcpIHtcbiAgICAgICAgdmFyIFssIGxhc3RQYXRoXSA9IE5vZGUubGFzdChlZGl0b3IsIGF0KTtcbiAgICAgICAgYXQgPSBsYXN0UGF0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoUmFuZ2UuaXNSYW5nZShhdCkpIHtcbiAgICAgIGlmIChlZGdlID09PSAnc3RhcnQnKSB7XG4gICAgICAgIGF0ID0gUmFuZ2Uuc3RhcnQoYXQpO1xuICAgICAgfSBlbHNlIGlmIChlZGdlID09PSAnZW5kJykge1xuICAgICAgICBhdCA9IFJhbmdlLmVuZChhdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdCA9IFBhdGguY29tbW9uKGF0LmFuY2hvci5wYXRoLCBhdC5mb2N1cy5wYXRoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoUG9pbnQuaXNQb2ludChhdCkpIHtcbiAgICAgIGF0ID0gYXQucGF0aDtcbiAgICB9XG5cbiAgICBpZiAoZGVwdGggIT0gbnVsbCkge1xuICAgICAgYXQgPSBhdC5zbGljZSgwLCBkZXB0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF0O1xuICB9LFxuXG4gIGhhc1BhdGgoZWRpdG9yLCBwYXRoKSB7XG4gICAgcmV0dXJuIE5vZGUuaGFzKGVkaXRvciwgcGF0aCk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgbXV0YWJsZSByZWYgZm9yIGEgYFBhdGhgIG9iamVjdCwgd2hpY2ggd2lsbCBzdGF5IGluIHN5bmMgYXMgbmV3XHJcbiAgICogb3BlcmF0aW9ucyBhcmUgYXBwbGllZCB0byB0aGUgZWRpdG9yLlxyXG4gICAqL1xuICBwYXRoUmVmKGVkaXRvciwgcGF0aCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICB2YXIge1xuICAgICAgYWZmaW5pdHkgPSAnZm9yd2FyZCdcbiAgICB9ID0gb3B0aW9ucztcbiAgICB2YXIgcmVmID0ge1xuICAgICAgY3VycmVudDogcGF0aCxcbiAgICAgIGFmZmluaXR5LFxuXG4gICAgICB1bnJlZigpIHtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBjdXJyZW50XG4gICAgICAgIH0gPSByZWY7XG4gICAgICAgIHZhciBwYXRoUmVmcyA9IEVkaXRvci5wYXRoUmVmcyhlZGl0b3IpO1xuICAgICAgICBwYXRoUmVmcy5kZWxldGUocmVmKTtcbiAgICAgICAgcmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICAgIH1cblxuICAgIH07XG4gICAgdmFyIHJlZnMgPSBFZGl0b3IucGF0aFJlZnMoZWRpdG9yKTtcbiAgICByZWZzLmFkZChyZWYpO1xuICAgIHJldHVybiByZWY7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBzZXQgb2YgY3VycmVudGx5IHRyYWNrZWQgcGF0aCByZWZzIG9mIHRoZSBlZGl0b3IuXHJcbiAgICovXG4gIHBhdGhSZWZzKGVkaXRvcikge1xuICAgIHZhciByZWZzID0gUEFUSF9SRUZTLmdldChlZGl0b3IpO1xuXG4gICAgaWYgKCFyZWZzKSB7XG4gICAgICByZWZzID0gbmV3IFNldCgpO1xuICAgICAgUEFUSF9SRUZTLnNldChlZGl0b3IsIHJlZnMpO1xuICAgIH1cblxuICAgIHJldHVybiByZWZzO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgc3RhcnQgb3IgZW5kIHBvaW50IG9mIGEgbG9jYXRpb24uXHJcbiAgICovXG4gIHBvaW50KGVkaXRvciwgYXQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIHtcbiAgICAgIGVkZ2UgPSAnc3RhcnQnXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICBpZiAoUGF0aC5pc1BhdGgoYXQpKSB7XG4gICAgICB2YXIgcGF0aDtcblxuICAgICAgaWYgKGVkZ2UgPT09ICdlbmQnKSB7XG4gICAgICAgIHZhciBbLCBsYXN0UGF0aF0gPSBOb2RlLmxhc3QoZWRpdG9yLCBhdCk7XG4gICAgICAgIHBhdGggPSBsYXN0UGF0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBbLCBmaXJzdFBhdGhdID0gTm9kZS5maXJzdChlZGl0b3IsIGF0KTtcbiAgICAgICAgcGF0aCA9IGZpcnN0UGF0aDtcbiAgICAgIH1cblxuICAgICAgdmFyIG5vZGUgPSBOb2RlLmdldChlZGl0b3IsIHBhdGgpO1xuXG4gICAgICBpZiAoIVRleHQuaXNUZXh0KG5vZGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBnZXQgdGhlIFwiLmNvbmNhdChlZGdlLCBcIiBwb2ludCBpbiB0aGUgbm9kZSBhdCBwYXRoIFtcIikuY29uY2F0KGF0LCBcIl0gYmVjYXVzZSBpdCBoYXMgbm8gXCIpLmNvbmNhdChlZGdlLCBcIiB0ZXh0IG5vZGUuXCIpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aCxcbiAgICAgICAgb2Zmc2V0OiBlZGdlID09PSAnZW5kJyA/IG5vZGUudGV4dC5sZW5ndGggOiAwXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChSYW5nZS5pc1JhbmdlKGF0KSkge1xuICAgICAgdmFyIFtzdGFydCwgZW5kXSA9IFJhbmdlLmVkZ2VzKGF0KTtcbiAgICAgIHJldHVybiBlZGdlID09PSAnc3RhcnQnID8gc3RhcnQgOiBlbmQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF0O1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG11dGFibGUgcmVmIGZvciBhIGBQb2ludGAgb2JqZWN0LCB3aGljaCB3aWxsIHN0YXkgaW4gc3luYyBhcyBuZXdcclxuICAgKiBvcGVyYXRpb25zIGFyZSBhcHBsaWVkIHRvIHRoZSBlZGl0b3IuXHJcbiAgICovXG4gIHBvaW50UmVmKGVkaXRvciwgcG9pbnQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIHtcbiAgICAgIGFmZmluaXR5ID0gJ2ZvcndhcmQnXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgdmFyIHJlZiA9IHtcbiAgICAgIGN1cnJlbnQ6IHBvaW50LFxuICAgICAgYWZmaW5pdHksXG5cbiAgICAgIHVucmVmKCkge1xuICAgICAgICB2YXIge1xuICAgICAgICAgIGN1cnJlbnRcbiAgICAgICAgfSA9IHJlZjtcbiAgICAgICAgdmFyIHBvaW50UmVmcyA9IEVkaXRvci5wb2ludFJlZnMoZWRpdG9yKTtcbiAgICAgICAgcG9pbnRSZWZzLmRlbGV0ZShyZWYpO1xuICAgICAgICByZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgICAgfVxuXG4gICAgfTtcbiAgICB2YXIgcmVmcyA9IEVkaXRvci5wb2ludFJlZnMoZWRpdG9yKTtcbiAgICByZWZzLmFkZChyZWYpO1xuICAgIHJldHVybiByZWY7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBzZXQgb2YgY3VycmVudGx5IHRyYWNrZWQgcG9pbnQgcmVmcyBvZiB0aGUgZWRpdG9yLlxyXG4gICAqL1xuICBwb2ludFJlZnMoZWRpdG9yKSB7XG4gICAgdmFyIHJlZnMgPSBQT0lOVF9SRUZTLmdldChlZGl0b3IpO1xuXG4gICAgaWYgKCFyZWZzKSB7XG4gICAgICByZWZzID0gbmV3IFNldCgpO1xuICAgICAgUE9JTlRfUkVGUy5zZXQoZWRpdG9yLCByZWZzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmcztcbiAgfSxcblxuICAvKipcclxuICAgKiBSZXR1cm4gYWxsIHRoZSBwb3NpdGlvbnMgaW4gYGF0YCByYW5nZSB3aGVyZSBhIGBQb2ludGAgY2FuIGJlIHBsYWNlZC5cclxuICAgKlxyXG4gICAqIEJ5IGRlZmF1bHQsIG1vdmVzIGZvcndhcmQgYnkgaW5kaXZpZHVhbCBvZmZzZXRzIGF0IGEgdGltZSwgYnV0XHJcbiAgICogdGhlIGB1bml0YCBvcHRpb24gY2FuIGJlIHVzZWQgdG8gdG8gbW92ZSBieSBjaGFyYWN0ZXIsIHdvcmQsIGxpbmUsIG9yIGJsb2NrLlxyXG4gICAqXHJcbiAgICogVGhlIGByZXZlcnNlYCBvcHRpb24gY2FuIGJlIHVzZWQgdG8gY2hhbmdlIGl0ZXJhdGlvbiBkaXJlY3Rpb24uXHJcbiAgICpcclxuICAgKiBOb3RlOiBCeSBkZWZhdWx0IHZvaWQgbm9kZXMgYXJlIHRyZWF0ZWQgYXMgYSBzaW5nbGUgcG9pbnQgYW5kIGl0ZXJhdGlvblxyXG4gICAqIHdpbGwgbm90IGhhcHBlbiBpbnNpZGUgdGhlaXIgY29udGVudCB1bmxlc3MgeW91IHBhc3MgaW4gdHJ1ZSBmb3IgdGhlXHJcbiAgICogYHZvaWRzYCBvcHRpb24sIHRoZW4gaXRlcmF0aW9uIHdpbGwgb2NjdXIuXHJcbiAgICovXG4gICpwb3NpdGlvbnMoZWRpdG9yKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICBhdCA9IGVkaXRvci5zZWxlY3Rpb24sXG4gICAgICB1bml0ID0gJ29mZnNldCcsXG4gICAgICByZXZlcnNlID0gZmFsc2UsXG4gICAgICB2b2lkcyA9IGZhbHNlXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICBpZiAoIWF0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogQWxnb3JpdGhtIG5vdGVzOlxyXG4gICAgICpcclxuICAgICAqIEVhY2ggc3RlcCBgZGlzdGFuY2VgIGlzIGR5bmFtaWMgZGVwZW5kaW5nIG9uIHRoZSB1bmRlcmx5aW5nIHRleHRcclxuICAgICAqIGFuZCB0aGUgYHVuaXRgIHNwZWNpZmllZC4gIEVhY2ggc3RlcCwgZS5nLiwgYSBsaW5lIG9yIHdvcmQsIG1heVxyXG4gICAgICogc3BhbiBtdWx0aXBsZSB0ZXh0IG5vZGVzLCBzbyB3ZSBpdGVyYXRlIHRocm91Z2ggdGhlIHRleHQgYm90aCBvblxyXG4gICAgICogdHdvIGxldmVscyBpbiBzdGVwLXN5bmM6XHJcbiAgICAgKlxyXG4gICAgICogYGxlYWZUZXh0YCBzdG9yZXMgdGhlIHRleHQgb24gYSB0ZXh0IGxlYWYgbGV2ZWwsIGFuZCBpcyBhZHZhbmNlZFxyXG4gICAgICogdGhyb3VnaCB1c2luZyB0aGUgY291bnRlcnMgYGxlYWZUZXh0T2Zmc2V0YCBhbmQgYGxlYWZUZXh0UmVtYWluaW5nYC5cclxuICAgICAqXHJcbiAgICAgKiBgYmxvY2tUZXh0YCBzdG9yZXMgdGhlIHRleHQgb24gYSBibG9jayBsZXZlbCwgYW5kIGlzIHNob3J0ZW5lZFxyXG4gICAgICogYnkgYGRpc3RhbmNlYCBldmVyeSB0aW1lIGl0IGlzIGFkdmFuY2VkLlxyXG4gICAgICpcclxuICAgICAqIFdlIG9ubHkgbWFpbnRhaW4gYSB3aW5kb3cgb2Ygb25lIGJsb2NrVGV4dCBhbmQgb25lIGxlYWZUZXh0IGJlY2F1c2VcclxuICAgICAqIGEgYmxvY2sgbm9kZSBhbHdheXMgYXBwZWFycyBiZWZvcmUgYWxsIG9mIGl0cyBsZWFmIG5vZGVzLlxyXG4gICAgICovXG5cblxuICAgIHZhciByYW5nZSA9IEVkaXRvci5yYW5nZShlZGl0b3IsIGF0KTtcbiAgICB2YXIgW3N0YXJ0LCBlbmRdID0gUmFuZ2UuZWRnZXMocmFuZ2UpO1xuICAgIHZhciBmaXJzdCA9IHJldmVyc2UgPyBlbmQgOiBzdGFydDtcbiAgICB2YXIgaXNOZXdCbG9jayA9IGZhbHNlO1xuICAgIHZhciBibG9ja1RleHQgPSAnJztcbiAgICB2YXIgZGlzdGFuY2UgPSAwOyAvLyBEaXN0YW5jZSBmb3IgbGVhZlRleHQgdG8gY2F0Y2ggdXAgdG8gYmxvY2tUZXh0LlxuXG4gICAgdmFyIGxlYWZUZXh0UmVtYWluaW5nID0gMDtcbiAgICB2YXIgbGVhZlRleHRPZmZzZXQgPSAwOyAvLyBJdGVyYXRlIHRocm91Z2ggYWxsIG5vZGVzIGluIHJhbmdlLCBncmFiYmluZyBlbnRpcmUgdGV4dHVhbCBjb250ZW50XG4gICAgLy8gb2YgYmxvY2sgbm9kZXMgaW4gYmxvY2tUZXh0LCBhbmQgdGV4dCBub2RlcyBpbiBsZWFmVGV4dC5cbiAgICAvLyBFeHBsb2l0cyB0aGUgZmFjdCB0aGF0IG5vZGVzIGFyZSBzZXF1ZW5jZWQgaW4gc3VjaCBhIHdheSB0aGF0IHdlIGZpcnN0XG4gICAgLy8gZW5jb3VudGVyIHRoZSBibG9jayBub2RlLCB0aGVuIGFsbCBvZiBpdHMgdGV4dCBub2Rlcywgc28gd2hlbiBpdGVyYXRpbmdcbiAgICAvLyB0aHJvdWdoIHRoZSBibG9ja1RleHQgYW5kIGxlYWZUZXh0IHdlIGp1c3QgbmVlZCB0byByZW1lbWJlciBhIHdpbmRvdyBvZlxuICAgIC8vIG9uZSBibG9jayBub2RlIGFuZCBsZWFmIG5vZGUsIHJlc3BlY3RpdmVseS5cblxuICAgIGZvciAodmFyIFtub2RlLCBwYXRoXSBvZiBFZGl0b3Iubm9kZXMoZWRpdG9yLCB7XG4gICAgICBhdCxcbiAgICAgIHJldmVyc2UsXG4gICAgICB2b2lkc1xuICAgIH0pKSB7XG4gICAgICAvKlxyXG4gICAgICAgKiBFTEVNRU5UIE5PREUgLSBZaWVsZCBwb3NpdGlvbihzKSBmb3Igdm9pZHMsIGNvbGxlY3QgYmxvY2tUZXh0IGZvciBibG9ja3NcclxuICAgICAgICovXG4gICAgICBpZiAoRWxlbWVudC5pc0VsZW1lbnQobm9kZSkpIHtcbiAgICAgICAgLy8gVm9pZCBub2RlcyBhcmUgYSBzcGVjaWFsIGNhc2UsIHNvIGJ5IGRlZmF1bHQgd2Ugd2lsbCBhbHdheXNcbiAgICAgICAgLy8geWllbGQgdGhlaXIgZmlyc3QgcG9pbnQuIElmIHRoZSBgdm9pZHNgIG9wdGlvbiBpcyBzZXQgdG8gdHJ1ZSxcbiAgICAgICAgLy8gdGhlbiB3ZSB3aWxsIGl0ZXJhdGUgb3ZlciB0aGVpciBjb250ZW50LlxuICAgICAgICBpZiAoIXZvaWRzICYmIGVkaXRvci5pc1ZvaWQobm9kZSkpIHtcbiAgICAgICAgICB5aWVsZCBFZGl0b3Iuc3RhcnQoZWRpdG9yLCBwYXRoKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSAvLyBJbmxpbmUgZWxlbWVudCBub2RlcyBhcmUgaWdub3JlZCBhcyB0aGV5IGRvbid0IHRoZW1zZWx2ZXNcbiAgICAgICAgLy8gY29udHJpYnV0ZSB0byBgYmxvY2tUZXh0YCBvciBgbGVhZlRleHRgIC0gdGhlaXIgcGFyZW50IGFuZFxuICAgICAgICAvLyBjaGlsZHJlbiBkby5cblxuXG4gICAgICAgIGlmIChlZGl0b3IuaXNJbmxpbmUobm9kZSkpIGNvbnRpbnVlOyAvLyBCbG9jayBlbGVtZW50IG5vZGUgLSBzZXQgYGJsb2NrVGV4dGAgdG8gaXRzIHRleHQgY29udGVudC5cblxuICAgICAgICBpZiAoRWRpdG9yLmhhc0lubGluZXMoZWRpdG9yLCBub2RlKSkge1xuICAgICAgICAgIC8vIFdlIGFsd2F5cyBleGhhdXN0IGJsb2NrIG5vZGVzIGJlZm9yZSBlbmNvdW50ZXJpbmcgYSBuZXcgb25lOlxuICAgICAgICAgIC8vICAgY29uc29sZS5hc3NlcnQoYmxvY2tUZXh0ID09PSAnJyxcbiAgICAgICAgICAvLyAgICAgYGJsb2NrVGV4dD0nJHtibG9ja1RleHR9JyAtIGArXG4gICAgICAgICAgLy8gICAgIGBub3QgZXhoYXVzdGVkIGJlZm9yZSBuZXcgYmxvY2sgbm9kZWAsIHBhdGgpXG4gICAgICAgICAgLy8gRW5zdXJlIHJhbmdlIGNvbnNpZGVyZWQgaXMgY2FwcGVkIHRvIGByYW5nZWAsIGluIHRoZVxuICAgICAgICAgIC8vIHN0YXJ0L2VuZCBlZGdlIGNhc2VzIHdoZXJlIGJsb2NrIGV4dGVuZHMgYmV5b25kIHJhbmdlLlxuICAgICAgICAgIC8vIEVxdWl2YWxlbnQgdG8gdGhpcywgYnV0IHByZXN1bWFibHkgbW9yZSBwZXJmb3JtYW50OlxuICAgICAgICAgIC8vICAgYmxvY2tSYW5nZSA9IEVkaXRvci5yYW5nZShlZGl0b3IsIC4uLkVkaXRvci5lZGdlcyhlZGl0b3IsIHBhdGgpKVxuICAgICAgICAgIC8vICAgYmxvY2tSYW5nZSA9IFJhbmdlLmludGVyc2VjdGlvbihyYW5nZSwgYmxvY2tSYW5nZSkgLy8gaW50ZXJzZWN0XG4gICAgICAgICAgLy8gICBibG9ja1RleHQgPSBFZGl0b3Iuc3RyaW5nKGVkaXRvciwgYmxvY2tSYW5nZSwgeyB2b2lkcyB9KVxuICAgICAgICAgIHZhciBlID0gUGF0aC5pc0FuY2VzdG9yKHBhdGgsIGVuZC5wYXRoKSA/IGVuZCA6IEVkaXRvci5lbmQoZWRpdG9yLCBwYXRoKTtcbiAgICAgICAgICB2YXIgcyA9IFBhdGguaXNBbmNlc3RvcihwYXRoLCBzdGFydC5wYXRoKSA/IHN0YXJ0IDogRWRpdG9yLnN0YXJ0KGVkaXRvciwgcGF0aCk7XG4gICAgICAgICAgYmxvY2tUZXh0ID0gRWRpdG9yLnN0cmluZyhlZGl0b3IsIHtcbiAgICAgICAgICAgIGFuY2hvcjogcyxcbiAgICAgICAgICAgIGZvY3VzOiBlXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgdm9pZHNcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpc05ld0Jsb2NrID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLypcclxuICAgICAgICogVEVYVCBMRUFGIE5PREUgLSBJdGVyYXRlIHRocm91Z2ggdGV4dCBjb250ZW50LCB5aWVsZGluZ1xyXG4gICAgICAgKiBwb3NpdGlvbnMgZXZlcnkgYGRpc3RhbmNlYCBvZmZzZXQgYWNjb3JkaW5nIHRvIGB1bml0YC5cclxuICAgICAgICovXG5cblxuICAgICAgaWYgKFRleHQuaXNUZXh0KG5vZGUpKSB7XG4gICAgICAgIHZhciBpc0ZpcnN0ID0gUGF0aC5lcXVhbHMocGF0aCwgZmlyc3QucGF0aCk7IC8vIFByb29mIHRoYXQgd2UgYWx3YXlzIGV4aGF1c3QgdGV4dCBub2RlcyBiZWZvcmUgZW5jb3VudGVyaW5nIGEgbmV3IG9uZTpcbiAgICAgICAgLy8gICBjb25zb2xlLmFzc2VydChsZWFmVGV4dFJlbWFpbmluZyA8PSAwLFxuICAgICAgICAvLyAgICAgYGxlYWZUZXh0UmVtYWluaW5nPSR7bGVhZlRleHRSZW1haW5pbmd9IC0gYCtcbiAgICAgICAgLy8gICAgIGBub3QgZXhoYXVzdGVkIGJlZm9yZSBuZXcgbGVhZiB0ZXh0IG5vZGVgLCBwYXRoKVxuICAgICAgICAvLyBSZXNldCBgbGVhZlRleHRgIGNvdW50ZXJzIGZvciBuZXcgdGV4dCBub2RlLlxuXG4gICAgICAgIGlmIChpc0ZpcnN0KSB7XG4gICAgICAgICAgbGVhZlRleHRSZW1haW5pbmcgPSByZXZlcnNlID8gZmlyc3Qub2Zmc2V0IDogbm9kZS50ZXh0Lmxlbmd0aCAtIGZpcnN0Lm9mZnNldDtcbiAgICAgICAgICBsZWFmVGV4dE9mZnNldCA9IGZpcnN0Lm9mZnNldDsgLy8gV29ya3MgZm9yIHJldmVyc2UgdG9vLlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxlYWZUZXh0UmVtYWluaW5nID0gbm9kZS50ZXh0Lmxlbmd0aDtcbiAgICAgICAgICBsZWFmVGV4dE9mZnNldCA9IHJldmVyc2UgPyBsZWFmVGV4dFJlbWFpbmluZyA6IDA7XG4gICAgICAgIH0gLy8gWWllbGQgcG9zaXRpb24gYXQgdGhlIHN0YXJ0IG9mIG5vZGUgKHBvdGVudGlhbGx5KS5cblxuXG4gICAgICAgIGlmIChpc0ZpcnN0IHx8IGlzTmV3QmxvY2sgfHwgdW5pdCA9PT0gJ29mZnNldCcpIHtcbiAgICAgICAgICB5aWVsZCB7XG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgb2Zmc2V0OiBsZWFmVGV4dE9mZnNldFxuICAgICAgICAgIH07XG4gICAgICAgICAgaXNOZXdCbG9jayA9IGZhbHNlO1xuICAgICAgICB9IC8vIFlpZWxkIHBvc2l0aW9ucyBldmVyeSAoZHluYW1pY2FsbHkgY2FsY3VsYXRlZCkgYGRpc3RhbmNlYCBvZmZzZXQuXG5cblxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgIC8vIElmIGBsZWFmVGV4dGAgaGFzIGNhdWdodCB1cCB3aXRoIGBibG9ja1RleHRgIChkaXN0YW5jZT0wKSxcbiAgICAgICAgICAvLyBhbmQgaWYgYmxvY2tUZXh0IGlzIGV4aGF1c3RlZCwgYnJlYWsgdG8gZ2V0IGFub3RoZXIgYmxvY2sgbm9kZSxcbiAgICAgICAgICAvLyBvdGhlcndpc2UgYWR2YW5jZSBibG9ja1RleHQgZm9yd2FyZCBieSB0aGUgbmV3IGBkaXN0YW5jZWAuXG4gICAgICAgICAgaWYgKGRpc3RhbmNlID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoYmxvY2tUZXh0ID09PSAnJykgYnJlYWs7XG4gICAgICAgICAgICBkaXN0YW5jZSA9IGNhbGNEaXN0YW5jZShibG9ja1RleHQsIHVuaXQsIHJldmVyc2UpOyAvLyBTcGxpdCB0aGUgc3RyaW5nIGF0IHRoZSBwcmV2aW91c2x5IGZvdW5kIGRpc3RhbmNlIGFuZCB1c2UgdGhlXG4gICAgICAgICAgICAvLyByZW1haW5pbmcgc3RyaW5nIGZvciB0aGUgbmV4dCBpdGVyYXRpb24uXG5cbiAgICAgICAgICAgIGJsb2NrVGV4dCA9IHNwbGl0QnlDaGFyYWN0ZXJEaXN0YW5jZShibG9ja1RleHQsIGRpc3RhbmNlLCByZXZlcnNlKVsxXTtcbiAgICAgICAgICB9IC8vIEFkdmFuY2UgYGxlYWZUZXh0YCBieSB0aGUgY3VycmVudCBgZGlzdGFuY2VgLlxuXG5cbiAgICAgICAgICBsZWFmVGV4dE9mZnNldCA9IHJldmVyc2UgPyBsZWFmVGV4dE9mZnNldCAtIGRpc3RhbmNlIDogbGVhZlRleHRPZmZzZXQgKyBkaXN0YW5jZTtcbiAgICAgICAgICBsZWFmVGV4dFJlbWFpbmluZyA9IGxlYWZUZXh0UmVtYWluaW5nIC0gZGlzdGFuY2U7IC8vIElmIGBsZWFmVGV4dGAgaXMgZXhoYXVzdGVkLCBicmVhayB0byBnZXQgYSBuZXcgbGVhZiBub2RlXG4gICAgICAgICAgLy8gYW5kIHNldCBkaXN0YW5jZSB0byB0aGUgb3ZlcmZsb3cgYW1vdW50LCBzbyB3ZSdsbCAobWF5YmUpXG4gICAgICAgICAgLy8gY2F0Y2ggdXAgdG8gYmxvY2tUZXh0IGluIHRoZSBuZXh0IGxlYWYgdGV4dCBub2RlLlxuXG4gICAgICAgICAgaWYgKGxlYWZUZXh0UmVtYWluaW5nIDwgMCkge1xuICAgICAgICAgICAgZGlzdGFuY2UgPSAtbGVhZlRleHRSZW1haW5pbmc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IC8vIFN1Y2Nlc3NmdWxseSB3YWxrZWQgYGRpc3RhbmNlYCBvZmZzZXRzIHRocm91Z2ggYGxlYWZUZXh0YFxuICAgICAgICAgIC8vIHRvIGNhdGNoIHVwIHdpdGggYGJsb2NrVGV4dGAsIHNvIHdlIGNhbiByZXNldCBgZGlzdGFuY2VgXG4gICAgICAgICAgLy8gYW5kIHlpZWxkIHRoaXMgcG9zaXRpb24gaW4gdGhpcyBub2RlLlxuXG5cbiAgICAgICAgICBkaXN0YW5jZSA9IDA7XG4gICAgICAgICAgeWllbGQge1xuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIG9mZnNldDogbGVhZlRleHRPZmZzZXRcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyBQcm9vZiB0aGF0IHVwb24gY29tcGxldGlvbiwgd2UndmUgZXhhaHVzdGVkIGJvdGggbGVhZiBhbmQgYmxvY2sgdGV4dDpcbiAgICAvLyAgIGNvbnNvbGUuYXNzZXJ0KGxlYWZUZXh0UmVtYWluaW5nIDw9IDAsIFwibGVhZlRleHQgd2Fzbid0IGV4aGF1c3RlZFwiKVxuICAgIC8vICAgY29uc29sZS5hc3NlcnQoYmxvY2tUZXh0ID09PSAnJywgXCJibG9ja1RleHQgd2Fzbid0IGV4aGF1c3RlZFwiKVxuICAgIC8vIEhlbHBlcjpcbiAgICAvLyBSZXR1cm4gdGhlIGRpc3RhbmNlIGluIG9mZnNldHMgZm9yIGEgc3RlcCBvZiBzaXplIGB1bml0YCBvbiBnaXZlbiBzdHJpbmcuXG5cblxuICAgIGZ1bmN0aW9uIGNhbGNEaXN0YW5jZSh0ZXh0LCB1bml0LCByZXZlcnNlKSB7XG4gICAgICBpZiAodW5pdCA9PT0gJ2NoYXJhY3RlcicpIHtcbiAgICAgICAgcmV0dXJuIGdldENoYXJhY3RlckRpc3RhbmNlKHRleHQsIHJldmVyc2UpO1xuICAgICAgfSBlbHNlIGlmICh1bml0ID09PSAnd29yZCcpIHtcbiAgICAgICAgcmV0dXJuIGdldFdvcmREaXN0YW5jZSh0ZXh0LCByZXZlcnNlKTtcbiAgICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ2xpbmUnIHx8IHVuaXQgPT09ICdibG9jaycpIHtcbiAgICAgICAgcmV0dXJuIHRleHQubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBtYXRjaGluZyBub2RlIGluIHRoZSBicmFuY2ggb2YgdGhlIGRvY3VtZW50IGJlZm9yZSBhIGxvY2F0aW9uLlxyXG4gICAqL1xuICBwcmV2aW91cyhlZGl0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHtcbiAgICAgIG1vZGUgPSAnbG93ZXN0JyxcbiAgICAgIHZvaWRzID0gZmFsc2VcbiAgICB9ID0gb3B0aW9ucztcbiAgICB2YXIge1xuICAgICAgbWF0Y2gsXG4gICAgICBhdCA9IGVkaXRvci5zZWxlY3Rpb25cbiAgICB9ID0gb3B0aW9ucztcblxuICAgIGlmICghYXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcG9pbnRCZWZvcmVMb2NhdGlvbiA9IEVkaXRvci5iZWZvcmUoZWRpdG9yLCBhdCwge1xuICAgICAgdm9pZHNcbiAgICB9KTtcblxuICAgIGlmICghcG9pbnRCZWZvcmVMb2NhdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBbLCB0b10gPSBFZGl0b3IuZmlyc3QoZWRpdG9yLCBbXSk7IC8vIFRoZSBzZWFyY2ggbG9jYXRpb24gaXMgZnJvbSB0aGUgc3RhcnQgb2YgdGhlIGRvY3VtZW50IHRvIHRoZSBwYXRoIG9mXG4gICAgLy8gdGhlIHBvaW50IGJlZm9yZSB0aGUgbG9jYXRpb24gcGFzc2VkIGluXG5cbiAgICB2YXIgc3BhbiA9IFtwb2ludEJlZm9yZUxvY2F0aW9uLnBhdGgsIHRvXTtcblxuICAgIGlmIChQYXRoLmlzUGF0aChhdCkgJiYgYXQubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZ2V0IHRoZSBwcmV2aW91cyBub2RlIGZyb20gdGhlIHJvb3Qgbm9kZSFcIik7XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoID09IG51bGwpIHtcbiAgICAgIGlmIChQYXRoLmlzUGF0aChhdCkpIHtcbiAgICAgICAgdmFyIFtwYXJlbnRdID0gRWRpdG9yLnBhcmVudChlZGl0b3IsIGF0KTtcblxuICAgICAgICBtYXRjaCA9IG4gPT4gcGFyZW50LmNoaWxkcmVuLmluY2x1ZGVzKG4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWF0Y2ggPSAoKSA9PiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBbcHJldmlvdXNdID0gRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgcmV2ZXJzZTogdHJ1ZSxcbiAgICAgIGF0OiBzcGFuLFxuICAgICAgbWF0Y2gsXG4gICAgICBtb2RlLFxuICAgICAgdm9pZHNcbiAgICB9KTtcbiAgICByZXR1cm4gcHJldmlvdXM7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IGEgcmFuZ2Ugb2YgYSBsb2NhdGlvbi5cclxuICAgKi9cbiAgcmFuZ2UoZWRpdG9yLCBhdCwgdG8pIHtcbiAgICBpZiAoUmFuZ2UuaXNSYW5nZShhdCkgJiYgIXRvKSB7XG4gICAgICByZXR1cm4gYXQ7XG4gICAgfVxuXG4gICAgdmFyIHN0YXJ0ID0gRWRpdG9yLnN0YXJ0KGVkaXRvciwgYXQpO1xuICAgIHZhciBlbmQgPSBFZGl0b3IuZW5kKGVkaXRvciwgdG8gfHwgYXQpO1xuICAgIHJldHVybiB7XG4gICAgICBhbmNob3I6IHN0YXJ0LFxuICAgICAgZm9jdXM6IGVuZFxuICAgIH07XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgbXV0YWJsZSByZWYgZm9yIGEgYFJhbmdlYCBvYmplY3QsIHdoaWNoIHdpbGwgc3RheSBpbiBzeW5jIGFzIG5ld1xyXG4gICAqIG9wZXJhdGlvbnMgYXJlIGFwcGxpZWQgdG8gdGhlIGVkaXRvci5cclxuICAgKi9cbiAgcmFuZ2VSZWYoZWRpdG9yLCByYW5nZSkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICB2YXIge1xuICAgICAgYWZmaW5pdHkgPSAnZm9yd2FyZCdcbiAgICB9ID0gb3B0aW9ucztcbiAgICB2YXIgcmVmID0ge1xuICAgICAgY3VycmVudDogcmFuZ2UsXG4gICAgICBhZmZpbml0eSxcblxuICAgICAgdW5yZWYoKSB7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgY3VycmVudFxuICAgICAgICB9ID0gcmVmO1xuICAgICAgICB2YXIgcmFuZ2VSZWZzID0gRWRpdG9yLnJhbmdlUmVmcyhlZGl0b3IpO1xuICAgICAgICByYW5nZVJlZnMuZGVsZXRlKHJlZik7XG4gICAgICAgIHJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgICB9XG5cbiAgICB9O1xuICAgIHZhciByZWZzID0gRWRpdG9yLnJhbmdlUmVmcyhlZGl0b3IpO1xuICAgIHJlZnMuYWRkKHJlZik7XG4gICAgcmV0dXJuIHJlZjtcbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIHNldCBvZiBjdXJyZW50bHkgdHJhY2tlZCByYW5nZSByZWZzIG9mIHRoZSBlZGl0b3IuXHJcbiAgICovXG4gIHJhbmdlUmVmcyhlZGl0b3IpIHtcbiAgICB2YXIgcmVmcyA9IFJBTkdFX1JFRlMuZ2V0KGVkaXRvcik7XG5cbiAgICBpZiAoIXJlZnMpIHtcbiAgICAgIHJlZnMgPSBuZXcgU2V0KCk7XG4gICAgICBSQU5HRV9SRUZTLnNldChlZGl0b3IsIHJlZnMpO1xuICAgIH1cblxuICAgIHJldHVybiByZWZzO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBhIGN1c3RvbSBwcm9wZXJ0eSBmcm9tIGFsbCBvZiB0aGUgbGVhZiB0ZXh0IG5vZGVzIGluIHRoZSBjdXJyZW50XHJcbiAgICogc2VsZWN0aW9uLlxyXG4gICAqXHJcbiAgICogSWYgdGhlIHNlbGVjdGlvbiBpcyBjdXJyZW50bHkgY29sbGFwc2VkLCB0aGUgcmVtb3ZhbCB3aWxsIGJlIHN0b3JlZCBvblxyXG4gICAqIGBlZGl0b3IubWFya3NgIGFuZCBhcHBsaWVkIHRvIHRoZSB0ZXh0IGluc2VydGVkIG5leHQuXHJcbiAgICovXG4gIHJlbW92ZU1hcmsoZWRpdG9yLCBrZXkpIHtcbiAgICBlZGl0b3IucmVtb3ZlTWFyayhrZXkpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIE1hbnVhbGx5IHNldCBpZiB0aGUgZWRpdG9yIHNob3VsZCBjdXJyZW50bHkgYmUgbm9ybWFsaXppbmcuXHJcbiAgICpcclxuICAgKiBOb3RlOiBVc2luZyB0aGlzIGluY29ycmVjdGx5IGNhbiBsZWF2ZSB0aGUgZWRpdG9yIGluIGFuIGludmFsaWQgc3RhdGUuXHJcbiAgICpcclxuICAgKi9cbiAgc2V0Tm9ybWFsaXppbmcoZWRpdG9yLCBpc05vcm1hbGl6aW5nKSB7XG4gICAgTk9STUFMSVpJTkcuc2V0KGVkaXRvciwgaXNOb3JtYWxpemluZyk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBzdGFydCBwb2ludCBvZiBhIGxvY2F0aW9uLlxyXG4gICAqL1xuICBzdGFydChlZGl0b3IsIGF0KSB7XG4gICAgcmV0dXJuIEVkaXRvci5wb2ludChlZGl0b3IsIGF0LCB7XG4gICAgICBlZGdlOiAnc3RhcnQnXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSB0ZXh0IHN0cmluZyBjb250ZW50IG9mIGEgbG9jYXRpb24uXHJcbiAgICpcclxuICAgKiBOb3RlOiBieSBkZWZhdWx0IHRoZSB0ZXh0IG9mIHZvaWQgbm9kZXMgaXMgY29uc2lkZXJlZCB0byBiZSBhbiBlbXB0eVxyXG4gICAqIHN0cmluZywgcmVnYXJkbGVzcyBvZiBjb250ZW50LCB1bmxlc3MgeW91IHBhc3MgaW4gdHJ1ZSBmb3IgdGhlIHZvaWRzIG9wdGlvblxyXG4gICAqL1xuICBzdHJpbmcoZWRpdG9yLCBhdCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICB2YXIge1xuICAgICAgdm9pZHMgPSBmYWxzZVxuICAgIH0gPSBvcHRpb25zO1xuICAgIHZhciByYW5nZSA9IEVkaXRvci5yYW5nZShlZGl0b3IsIGF0KTtcbiAgICB2YXIgW3N0YXJ0LCBlbmRdID0gUmFuZ2UuZWRnZXMocmFuZ2UpO1xuICAgIHZhciB0ZXh0ID0gJyc7XG5cbiAgICBmb3IgKHZhciBbbm9kZSwgcGF0aF0gb2YgRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgYXQ6IHJhbmdlLFxuICAgICAgbWF0Y2g6IFRleHQuaXNUZXh0LFxuICAgICAgdm9pZHNcbiAgICB9KSkge1xuICAgICAgdmFyIHQgPSBub2RlLnRleHQ7XG5cbiAgICAgIGlmIChQYXRoLmVxdWFscyhwYXRoLCBlbmQucGF0aCkpIHtcbiAgICAgICAgdCA9IHQuc2xpY2UoMCwgZW5kLm9mZnNldCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChQYXRoLmVxdWFscyhwYXRoLCBzdGFydC5wYXRoKSkge1xuICAgICAgICB0ID0gdC5zbGljZShzdGFydC5vZmZzZXQpO1xuICAgICAgfVxuXG4gICAgICB0ZXh0ICs9IHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ29udmVydCBhIHJhbmdlIGludG8gYSBub24taGFuZ2luZyBvbmUuXHJcbiAgICovXG4gIHVuaGFuZ1JhbmdlKGVkaXRvciwgcmFuZ2UpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIHtcbiAgICAgIHZvaWRzID0gZmFsc2VcbiAgICB9ID0gb3B0aW9ucztcbiAgICB2YXIgW3N0YXJ0LCBlbmRdID0gUmFuZ2UuZWRnZXMocmFuZ2UpOyAvLyBQRVJGOiBleGl0IGVhcmx5IGlmIHdlIGNhbiBndWFyYW50ZWUgdGhhdCB0aGUgcmFuZ2UgaXNuJ3QgaGFuZ2luZy5cblxuICAgIGlmIChzdGFydC5vZmZzZXQgIT09IDAgfHwgZW5kLm9mZnNldCAhPT0gMCB8fCBSYW5nZS5pc0NvbGxhcHNlZChyYW5nZSkpIHtcbiAgICAgIHJldHVybiByYW5nZTtcbiAgICB9XG5cbiAgICB2YXIgZW5kQmxvY2sgPSBFZGl0b3IuYWJvdmUoZWRpdG9yLCB7XG4gICAgICBhdDogZW5kLFxuICAgICAgbWF0Y2g6IG4gPT4gRWRpdG9yLmlzQmxvY2soZWRpdG9yLCBuKVxuICAgIH0pO1xuICAgIHZhciBibG9ja1BhdGggPSBlbmRCbG9jayA/IGVuZEJsb2NrWzFdIDogW107XG4gICAgdmFyIGZpcnN0ID0gRWRpdG9yLnN0YXJ0KGVkaXRvciwgW10pO1xuICAgIHZhciBiZWZvcmUgPSB7XG4gICAgICBhbmNob3I6IGZpcnN0LFxuICAgICAgZm9jdXM6IGVuZFxuICAgIH07XG4gICAgdmFyIHNraXAgPSB0cnVlO1xuXG4gICAgZm9yICh2YXIgW25vZGUsIHBhdGhdIG9mIEVkaXRvci5ub2RlcyhlZGl0b3IsIHtcbiAgICAgIGF0OiBiZWZvcmUsXG4gICAgICBtYXRjaDogVGV4dC5pc1RleHQsXG4gICAgICByZXZlcnNlOiB0cnVlLFxuICAgICAgdm9pZHNcbiAgICB9KSkge1xuICAgICAgaWYgKHNraXApIHtcbiAgICAgICAgc2tpcCA9IGZhbHNlO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUudGV4dCAhPT0gJycgfHwgUGF0aC5pc0JlZm9yZShwYXRoLCBibG9ja1BhdGgpKSB7XG4gICAgICAgIGVuZCA9IHtcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIG9mZnNldDogbm9kZS50ZXh0Lmxlbmd0aFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgYW5jaG9yOiBzdGFydCxcbiAgICAgIGZvY3VzOiBlbmRcbiAgICB9O1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIE1hdGNoIGEgdm9pZCBub2RlIGluIHRoZSBjdXJyZW50IGJyYW5jaCBvZiB0aGUgZWRpdG9yLlxyXG4gICAqL1xuICB2b2lkKGVkaXRvcikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICByZXR1cm4gRWRpdG9yLmFib3ZlKGVkaXRvciwgX29iamVjdFNwcmVhZCQ4KF9vYmplY3RTcHJlYWQkOCh7fSwgb3B0aW9ucyksIHt9LCB7XG4gICAgICBtYXRjaDogbiA9PiBFZGl0b3IuaXNWb2lkKGVkaXRvciwgbilcbiAgICB9KSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2FsbCBhIGZ1bmN0aW9uLCBkZWZlcnJpbmcgbm9ybWFsaXphdGlvbiB1bnRpbCBhZnRlciBpdCBjb21wbGV0ZXMuXHJcbiAgICovXG4gIHdpdGhvdXROb3JtYWxpemluZyhlZGl0b3IsIGZuKSB7XG4gICAgdmFyIHZhbHVlID0gRWRpdG9yLmlzTm9ybWFsaXppbmcoZWRpdG9yKTtcbiAgICBFZGl0b3Iuc2V0Tm9ybWFsaXppbmcoZWRpdG9yLCBmYWxzZSk7XG5cbiAgICB0cnkge1xuICAgICAgZm4oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgRWRpdG9yLnNldE5vcm1hbGl6aW5nKGVkaXRvciwgdmFsdWUpO1xuICAgIH1cblxuICAgIEVkaXRvci5ub3JtYWxpemUoZWRpdG9yKTtcbiAgfVxuXG59O1xuXG52YXIgTG9jYXRpb24gPSB7XG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaW1wbGVtZW50cyB0aGUgYExvY2F0aW9uYCBpbnRlcmZhY2UuXHJcbiAgICovXG4gIGlzTG9jYXRpb24odmFsdWUpIHtcbiAgICByZXR1cm4gUGF0aC5pc1BhdGgodmFsdWUpIHx8IFBvaW50LmlzUG9pbnQodmFsdWUpIHx8IFJhbmdlLmlzUmFuZ2UodmFsdWUpO1xuICB9XG5cbn07XG52YXIgU3BhbiA9IHtcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSB2YWx1ZSBpbXBsZW1lbnRzIHRoZSBgU3BhbmAgaW50ZXJmYWNlLlxyXG4gICAqL1xuICBpc1NwYW4odmFsdWUpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAyICYmIHZhbHVlLmV2ZXJ5KFBhdGguaXNQYXRoKTtcbiAgfVxuXG59O1xuXG52YXIgX2V4Y2x1ZGVkJDMgPSBbXCJjaGlsZHJlblwiXSxcbiAgICBfZXhjbHVkZWQyJDIgPSBbXCJ0ZXh0XCJdO1xudmFyIElTX05PREVfTElTVF9DQUNIRSA9IG5ldyBXZWFrTWFwKCk7XG52YXIgTm9kZSA9IHtcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBub2RlIGF0IGEgc3BlY2lmaWMgcGF0aCwgYXNzZXJ0aW5nIHRoYXQgaXQncyBhbiBhbmNlc3RvciBub2RlLlxyXG4gICAqL1xuICBhbmNlc3Rvcihyb290LCBwYXRoKSB7XG4gICAgdmFyIG5vZGUgPSBOb2RlLmdldChyb290LCBwYXRoKTtcblxuICAgIGlmIChUZXh0LmlzVGV4dChub2RlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGdldCB0aGUgYW5jZXN0b3Igbm9kZSBhdCBwYXRoIFtcIi5jb25jYXQocGF0aCwgXCJdIGJlY2F1c2UgaXQgcmVmZXJzIHRvIGEgdGV4dCBub2RlIGluc3RlYWQ6IFwiKS5jb25jYXQobm9kZSkpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIFJldHVybiBhIGdlbmVyYXRvciBvZiBhbGwgdGhlIGFuY2VzdG9yIG5vZGVzIGFib3ZlIGEgc3BlY2lmaWMgcGF0aC5cclxuICAgKlxyXG4gICAqIEJ5IGRlZmF1bHQgdGhlIG9yZGVyIGlzIGJvdHRvbS11cCwgZnJvbSBsb3dlc3QgdG8gaGlnaGVzdCBhbmNlc3RvciBpblxyXG4gICAqIHRoZSB0cmVlLCBidXQgeW91IGNhbiBwYXNzIHRoZSBgcmV2ZXJzZTogdHJ1ZWAgb3B0aW9uIHRvIGdvIHRvcC1kb3duLlxyXG4gICAqL1xuICAqYW5jZXN0b3JzKHJvb3QsIHBhdGgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgICBmb3IgKHZhciBwIG9mIFBhdGguYW5jZXN0b3JzKHBhdGgsIG9wdGlvbnMpKSB7XG4gICAgICB2YXIgbiA9IE5vZGUuYW5jZXN0b3Iocm9vdCwgcCk7XG4gICAgICB2YXIgZW50cnkgPSBbbiwgcF07XG4gICAgICB5aWVsZCBlbnRyeTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBjaGlsZCBvZiBhIG5vZGUgYXQgYSBzcGVjaWZpYyBpbmRleC5cclxuICAgKi9cbiAgY2hpbGQocm9vdCwgaW5kZXgpIHtcbiAgICBpZiAoVGV4dC5pc1RleHQocm9vdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBnZXQgdGhlIGNoaWxkIG9mIGEgdGV4dCBub2RlOiBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkocm9vdCkpKTtcbiAgICB9XG5cbiAgICB2YXIgYyA9IHJvb3QuY2hpbGRyZW5baW5kZXhdO1xuXG4gICAgaWYgKGMgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGdldCBjaGlsZCBhdCBpbmRleCBgXCIuY29uY2F0KGluZGV4LCBcImAgaW4gbm9kZTogXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShyb290KSkpO1xuICAgIH1cblxuICAgIHJldHVybiBjO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEl0ZXJhdGUgb3ZlciB0aGUgY2hpbGRyZW4gb2YgYSBub2RlIGF0IGEgc3BlY2lmaWMgcGF0aC5cclxuICAgKi9cbiAgKmNoaWxkcmVuKHJvb3QsIHBhdGgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIHtcbiAgICAgIHJldmVyc2UgPSBmYWxzZVxuICAgIH0gPSBvcHRpb25zO1xuICAgIHZhciBhbmNlc3RvciA9IE5vZGUuYW5jZXN0b3Iocm9vdCwgcGF0aCk7XG4gICAgdmFyIHtcbiAgICAgIGNoaWxkcmVuXG4gICAgfSA9IGFuY2VzdG9yO1xuICAgIHZhciBpbmRleCA9IHJldmVyc2UgPyBjaGlsZHJlbi5sZW5ndGggLSAxIDogMDtcblxuICAgIHdoaWxlIChyZXZlcnNlID8gaW5kZXggPj0gMCA6IGluZGV4IDwgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICB2YXIgY2hpbGQgPSBOb2RlLmNoaWxkKGFuY2VzdG9yLCBpbmRleCk7XG4gICAgICB2YXIgY2hpbGRQYXRoID0gcGF0aC5jb25jYXQoaW5kZXgpO1xuICAgICAgeWllbGQgW2NoaWxkLCBjaGlsZFBhdGhdO1xuICAgICAgaW5kZXggPSByZXZlcnNlID8gaW5kZXggLSAxIDogaW5kZXggKyAxO1xuICAgIH1cbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgYW4gZW50cnkgZm9yIHRoZSBjb21tb24gYW5jZXNldG9yIG5vZGUgb2YgdHdvIHBhdGhzLlxyXG4gICAqL1xuICBjb21tb24ocm9vdCwgcGF0aCwgYW5vdGhlcikge1xuICAgIHZhciBwID0gUGF0aC5jb21tb24ocGF0aCwgYW5vdGhlcik7XG4gICAgdmFyIG4gPSBOb2RlLmdldChyb290LCBwKTtcbiAgICByZXR1cm4gW24sIHBdO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgbm9kZSBhdCBhIHNwZWNpZmljIHBhdGgsIGFzc2VydGluZyB0aGF0IGl0J3MgYSBkZXNjZW5kYW50IG5vZGUuXHJcbiAgICovXG4gIGRlc2NlbmRhbnQocm9vdCwgcGF0aCkge1xuICAgIHZhciBub2RlID0gTm9kZS5nZXQocm9vdCwgcGF0aCk7XG5cbiAgICBpZiAoRWRpdG9yLmlzRWRpdG9yKG5vZGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZ2V0IHRoZSBkZXNjZW5kYW50IG5vZGUgYXQgcGF0aCBbXCIuY29uY2F0KHBhdGgsIFwiXSBiZWNhdXNlIGl0IHJlZmVycyB0byB0aGUgcm9vdCBlZGl0b3Igbm9kZSBpbnN0ZWFkOiBcIikuY29uY2F0KG5vZGUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcblxuICAvKipcclxuICAgKiBSZXR1cm4gYSBnZW5lcmF0b3Igb2YgYWxsIHRoZSBkZXNjZW5kYW50IG5vZGUgZW50cmllcyBpbnNpZGUgYSByb290IG5vZGUuXHJcbiAgICovXG4gICpkZXNjZW5kYW50cyhyb290KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgZm9yICh2YXIgW25vZGUsIHBhdGhdIG9mIE5vZGUubm9kZXMocm9vdCwgb3B0aW9ucykpIHtcbiAgICAgIGlmIChwYXRoLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAvLyBOT1RFOiB3ZSBoYXZlIHRvIGNvZXJjZSBoZXJlIGJlY2F1c2UgY2hlY2tpbmcgdGhlIHBhdGgncyBsZW5ndGggZG9lc1xuICAgICAgICAvLyBndWFyYW50ZWUgdGhhdCBgbm9kZWAgaXMgbm90IGEgYEVkaXRvcmAsIGJ1dCBUeXBlU2NyaXB0IGRvZXNuJ3Qga25vdy5cbiAgICAgICAgeWllbGQgW25vZGUsIHBhdGhdO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcclxuICAgKiBSZXR1cm4gYSBnZW5lcmF0b3Igb2YgYWxsIHRoZSBlbGVtZW50IG5vZGVzIGluc2lkZSBhIHJvb3Qgbm9kZS4gRWFjaCBpdGVyYXRpb25cclxuICAgKiB3aWxsIHJldHVybiBhbiBgRWxlbWVudEVudHJ5YCB0dXBsZSBjb25zaXN0aW5nIG9mIGBbRWxlbWVudCwgUGF0aF1gLiBJZiB0aGVcclxuICAgKiByb290IG5vZGUgaXMgYW4gZWxlbWVudCBpdCB3aWxsIGJlIGluY2x1ZGVkIGluIHRoZSBpdGVyYXRpb24gYXMgd2VsbC5cclxuICAgKi9cbiAgKmVsZW1lbnRzKHJvb3QpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICBmb3IgKHZhciBbbm9kZSwgcGF0aF0gb2YgTm9kZS5ub2Rlcyhyb290LCBvcHRpb25zKSkge1xuICAgICAgaWYgKEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpKSB7XG4gICAgICAgIHlpZWxkIFtub2RlLCBwYXRoXTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogRXh0cmFjdCBwcm9wcyBmcm9tIGEgTm9kZS5cclxuICAgKi9cbiAgZXh0cmFjdFByb3BzKG5vZGUpIHtcbiAgICBpZiAoRWxlbWVudC5pc0FuY2VzdG9yKG5vZGUpKSB7XG4gICAgICB2YXIgcHJvcGVydGllcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhub2RlLCBfZXhjbHVkZWQkMyk7XG5cbiAgICAgIHJldHVybiBwcm9wZXJ0aWVzO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcHJvcGVydGllcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhub2RlLCBfZXhjbHVkZWQyJDIpO1xuXG4gICAgICByZXR1cm4gcHJvcGVydGllcztcbiAgICB9XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBmaXJzdCBub2RlIGVudHJ5IGluIGEgcm9vdCBub2RlIGZyb20gYSBwYXRoLlxyXG4gICAqL1xuICBmaXJzdChyb290LCBwYXRoKSB7XG4gICAgdmFyIHAgPSBwYXRoLnNsaWNlKCk7XG4gICAgdmFyIG4gPSBOb2RlLmdldChyb290LCBwKTtcblxuICAgIHdoaWxlIChuKSB7XG4gICAgICBpZiAoVGV4dC5pc1RleHQobikgfHwgbi5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuID0gbi5jaGlsZHJlblswXTtcbiAgICAgICAgcC5wdXNoKDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbbiwgcF07XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBzbGljZWQgZnJhZ21lbnQgcmVwcmVzZW50ZWQgYnkgYSByYW5nZSBpbnNpZGUgYSByb290IG5vZGUuXHJcbiAgICovXG4gIGZyYWdtZW50KHJvb3QsIHJhbmdlKSB7XG4gICAgaWYgKFRleHQuaXNUZXh0KHJvb3QpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZ2V0IGEgZnJhZ21lbnQgc3RhcnRpbmcgZnJvbSBhIHJvb3QgdGV4dCBub2RlOiBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkocm9vdCkpKTtcbiAgICB9XG5cbiAgICB2YXIgbmV3Um9vdCA9IHByb2R1Y2Uoe1xuICAgICAgY2hpbGRyZW46IHJvb3QuY2hpbGRyZW5cbiAgICB9LCByID0+IHtcbiAgICAgIHZhciBbc3RhcnQsIGVuZF0gPSBSYW5nZS5lZGdlcyhyYW5nZSk7XG4gICAgICB2YXIgbm9kZUVudHJpZXMgPSBOb2RlLm5vZGVzKHIsIHtcbiAgICAgICAgcmV2ZXJzZTogdHJ1ZSxcbiAgICAgICAgcGFzczogX3JlZiA9PiB7XG4gICAgICAgICAgdmFyIFssIHBhdGhdID0gX3JlZjtcbiAgICAgICAgICByZXR1cm4gIVJhbmdlLmluY2x1ZGVzKHJhbmdlLCBwYXRoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGZvciAodmFyIFssIHBhdGhdIG9mIG5vZGVFbnRyaWVzKSB7XG4gICAgICAgIGlmICghUmFuZ2UuaW5jbHVkZXMocmFuZ2UsIHBhdGgpKSB7XG4gICAgICAgICAgdmFyIHBhcmVudCA9IE5vZGUucGFyZW50KHIsIHBhdGgpO1xuICAgICAgICAgIHZhciBpbmRleCA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChQYXRoLmVxdWFscyhwYXRoLCBlbmQucGF0aCkpIHtcbiAgICAgICAgICB2YXIgbGVhZiA9IE5vZGUubGVhZihyLCBwYXRoKTtcbiAgICAgICAgICBsZWFmLnRleHQgPSBsZWFmLnRleHQuc2xpY2UoMCwgZW5kLm9mZnNldCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoUGF0aC5lcXVhbHMocGF0aCwgc3RhcnQucGF0aCkpIHtcbiAgICAgICAgICB2YXIgX2xlYWYgPSBOb2RlLmxlYWYociwgcGF0aCk7XG5cbiAgICAgICAgICBfbGVhZi50ZXh0ID0gX2xlYWYudGV4dC5zbGljZShzdGFydC5vZmZzZXQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChFZGl0b3IuaXNFZGl0b3IocikpIHtcbiAgICAgICAgci5zZWxlY3Rpb24gPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXdSb290LmNoaWxkcmVuO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgZGVzY2VuZGFudCBub2RlIHJlZmVycmVkIHRvIGJ5IGEgc3BlY2lmaWMgcGF0aC4gSWYgdGhlIHBhdGggaXMgYW5cclxuICAgKiBlbXB0eSBhcnJheSwgaXQgcmVmZXJzIHRvIHRoZSByb290IG5vZGUgaXRzZWxmLlxyXG4gICAqL1xuICBnZXQocm9vdCwgcGF0aCkge1xuICAgIHZhciBub2RlID0gcm9vdDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHAgPSBwYXRoW2ldO1xuXG4gICAgICBpZiAoVGV4dC5pc1RleHQobm9kZSkgfHwgIW5vZGUuY2hpbGRyZW5bcF0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgYSBkZXNjZW5kYW50IGF0IHBhdGggW1wiLmNvbmNhdChwYXRoLCBcIl0gaW4gbm9kZTogXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShyb290KSkpO1xuICAgICAgfVxuXG4gICAgICBub2RlID0gbm9kZS5jaGlsZHJlbltwXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIGRlc2NlbmRhbnQgbm9kZSBleGlzdHMgYXQgYSBzcGVjaWZpYyBwYXRoLlxyXG4gICAqL1xuICBoYXMocm9vdCwgcGF0aCkge1xuICAgIHZhciBub2RlID0gcm9vdDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHAgPSBwYXRoW2ldO1xuXG4gICAgICBpZiAoVGV4dC5pc1RleHQobm9kZSkgfHwgIW5vZGUuY2hpbGRyZW5bcF0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBub2RlID0gbm9kZS5jaGlsZHJlbltwXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGltcGxlbWVudHMgdGhlIGBOb2RlYCBpbnRlcmZhY2UuXHJcbiAgICovXG4gIGlzTm9kZSh2YWx1ZSkge1xuICAgIHJldHVybiBUZXh0LmlzVGV4dCh2YWx1ZSkgfHwgRWxlbWVudC5pc0VsZW1lbnQodmFsdWUpIHx8IEVkaXRvci5pc0VkaXRvcih2YWx1ZSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhIGxpc3Qgb2YgYE5vZGVgIG9iamVjdHMuXHJcbiAgICovXG4gIGlzTm9kZUxpc3QodmFsdWUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGNhY2hlZFJlc3VsdCA9IElTX05PREVfTElTVF9DQUNIRS5nZXQodmFsdWUpO1xuXG4gICAgaWYgKGNhY2hlZFJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gY2FjaGVkUmVzdWx0O1xuICAgIH1cblxuICAgIHZhciBpc05vZGVMaXN0ID0gdmFsdWUuZXZlcnkodmFsID0+IE5vZGUuaXNOb2RlKHZhbCkpO1xuICAgIElTX05PREVfTElTVF9DQUNIRS5zZXQodmFsdWUsIGlzTm9kZUxpc3QpO1xuICAgIHJldHVybiBpc05vZGVMaXN0O1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgbGFzdCBub2RlIGVudHJ5IGluIGEgcm9vdCBub2RlIGZyb20gYSBwYXRoLlxyXG4gICAqL1xuICBsYXN0KHJvb3QsIHBhdGgpIHtcbiAgICB2YXIgcCA9IHBhdGguc2xpY2UoKTtcbiAgICB2YXIgbiA9IE5vZGUuZ2V0KHJvb3QsIHApO1xuXG4gICAgd2hpbGUgKG4pIHtcbiAgICAgIGlmIChUZXh0LmlzVGV4dChuKSB8fCBuLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBpID0gbi5jaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgICAgICBuID0gbi5jaGlsZHJlbltpXTtcbiAgICAgICAgcC5wdXNoKGkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbbiwgcF07XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBub2RlIGF0IGEgc3BlY2lmaWMgcGF0aCwgZW5zdXJpbmcgaXQncyBhIGxlYWYgdGV4dCBub2RlLlxyXG4gICAqL1xuICBsZWFmKHJvb3QsIHBhdGgpIHtcbiAgICB2YXIgbm9kZSA9IE5vZGUuZ2V0KHJvb3QsIHBhdGgpO1xuXG4gICAgaWYgKCFUZXh0LmlzVGV4dChub2RlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGdldCB0aGUgbGVhZiBub2RlIGF0IHBhdGggW1wiLmNvbmNhdChwYXRoLCBcIl0gYmVjYXVzZSBpdCByZWZlcnMgdG8gYSBub24tbGVhZiBub2RlOiBcIikuY29uY2F0KG5vZGUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcblxuICAvKipcclxuICAgKiBSZXR1cm4gYSBnZW5lcmF0b3Igb2YgdGhlIGluIGEgYnJhbmNoIG9mIHRoZSB0cmVlLCBmcm9tIGEgc3BlY2lmaWMgcGF0aC5cclxuICAgKlxyXG4gICAqIEJ5IGRlZmF1bHQgdGhlIG9yZGVyIGlzIHRvcC1kb3duLCBmcm9tIGxvd2VzdCB0byBoaWdoZXN0IG5vZGUgaW4gdGhlIHRyZWUsXHJcbiAgICogYnV0IHlvdSBjYW4gcGFzcyB0aGUgYHJldmVyc2U6IHRydWVgIG9wdGlvbiB0byBnbyBib3R0b20tdXAuXHJcbiAgICovXG4gICpsZXZlbHMocm9vdCwgcGF0aCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuICAgIGZvciAodmFyIHAgb2YgUGF0aC5sZXZlbHMocGF0aCwgb3B0aW9ucykpIHtcbiAgICAgIHZhciBuID0gTm9kZS5nZXQocm9vdCwgcCk7XG4gICAgICB5aWVsZCBbbiwgcF07XG4gICAgfVxuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgbm9kZSBtYXRjaGVzIGEgc2V0IG9mIHByb3BzLlxyXG4gICAqL1xuICBtYXRjaGVzKG5vZGUsIHByb3BzKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpICYmIEVsZW1lbnQuaXNFbGVtZW50UHJvcHMocHJvcHMpICYmIEVsZW1lbnQubWF0Y2hlcyhub2RlLCBwcm9wcykgfHwgVGV4dC5pc1RleHQobm9kZSkgJiYgVGV4dC5pc1RleHRQcm9wcyhwcm9wcykgJiYgVGV4dC5tYXRjaGVzKG5vZGUsIHByb3BzKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBSZXR1cm4gYSBnZW5lcmF0b3Igb2YgYWxsIHRoZSBub2RlIGVudHJpZXMgb2YgYSByb290IG5vZGUuIEVhY2ggZW50cnkgaXNcclxuICAgKiByZXR1cm5lZCBhcyBhIGBbTm9kZSwgUGF0aF1gIHR1cGxlLCB3aXRoIHRoZSBwYXRoIHJlZmVycmluZyB0byB0aGUgbm9kZSdzXHJcbiAgICogcG9zaXRpb24gaW5zaWRlIHRoZSByb290IG5vZGUuXHJcbiAgICovXG4gICpub2Rlcyhyb290KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICBwYXNzLFxuICAgICAgcmV2ZXJzZSA9IGZhbHNlXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgdmFyIHtcbiAgICAgIGZyb20gPSBbXSxcbiAgICAgIHRvXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgdmFyIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gICAgdmFyIHAgPSBbXTtcbiAgICB2YXIgbiA9IHJvb3Q7XG5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKHRvICYmIChyZXZlcnNlID8gUGF0aC5pc0JlZm9yZShwLCB0bykgOiBQYXRoLmlzQWZ0ZXIocCwgdG8pKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKCF2aXNpdGVkLmhhcyhuKSkge1xuICAgICAgICB5aWVsZCBbbiwgcF07XG4gICAgICB9IC8vIElmIHdlJ3JlIGFsbG93ZWQgdG8gZ28gZG93bndhcmQgYW5kIHdlIGhhdmVuJ3QgZGVzY2VuZGVkIHlldCwgZG8uXG5cblxuICAgICAgaWYgKCF2aXNpdGVkLmhhcyhuKSAmJiAhVGV4dC5pc1RleHQobikgJiYgbi5jaGlsZHJlbi5sZW5ndGggIT09IDAgJiYgKHBhc3MgPT0gbnVsbCB8fCBwYXNzKFtuLCBwXSkgPT09IGZhbHNlKSkge1xuICAgICAgICB2aXNpdGVkLmFkZChuKTtcbiAgICAgICAgdmFyIG5leHRJbmRleCA9IHJldmVyc2UgPyBuLmNoaWxkcmVuLmxlbmd0aCAtIDEgOiAwO1xuXG4gICAgICAgIGlmIChQYXRoLmlzQW5jZXN0b3IocCwgZnJvbSkpIHtcbiAgICAgICAgICBuZXh0SW5kZXggPSBmcm9tW3AubGVuZ3RoXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHAgPSBwLmNvbmNhdChuZXh0SW5kZXgpO1xuICAgICAgICBuID0gTm9kZS5nZXQocm9vdCwgcCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSAvLyBJZiB3ZSdyZSBhdCB0aGUgcm9vdCBhbmQgd2UgY2FuJ3QgZ28gZG93biwgd2UncmUgZG9uZS5cblxuXG4gICAgICBpZiAocC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IC8vIElmIHdlJ3JlIGdvaW5nIGZvcndhcmQuLi5cblxuXG4gICAgICBpZiAoIXJldmVyc2UpIHtcbiAgICAgICAgdmFyIG5ld1BhdGggPSBQYXRoLm5leHQocCk7XG5cbiAgICAgICAgaWYgKE5vZGUuaGFzKHJvb3QsIG5ld1BhdGgpKSB7XG4gICAgICAgICAgcCA9IG5ld1BhdGg7XG4gICAgICAgICAgbiA9IE5vZGUuZ2V0KHJvb3QsIHApO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9IC8vIElmIHdlJ3JlIGdvaW5nIGJhY2t3YXJkLi4uXG5cblxuICAgICAgaWYgKHJldmVyc2UgJiYgcFtwLmxlbmd0aCAtIDFdICE9PSAwKSB7XG4gICAgICAgIHZhciBfbmV3UGF0aCA9IFBhdGgucHJldmlvdXMocCk7XG5cbiAgICAgICAgcCA9IF9uZXdQYXRoO1xuICAgICAgICBuID0gTm9kZS5nZXQocm9vdCwgcCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSAvLyBPdGhlcndpc2Ugd2UncmUgZ29pbmcgdXB3YXJkLi4uXG5cblxuICAgICAgcCA9IFBhdGgucGFyZW50KHApO1xuICAgICAgbiA9IE5vZGUuZ2V0KHJvb3QsIHApO1xuICAgICAgdmlzaXRlZC5hZGQobik7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgcGFyZW50IG9mIGEgbm9kZSBhdCBhIHNwZWNpZmljIHBhdGguXHJcbiAgICovXG4gIHBhcmVudChyb290LCBwYXRoKSB7XG4gICAgdmFyIHBhcmVudFBhdGggPSBQYXRoLnBhcmVudChwYXRoKTtcbiAgICB2YXIgcCA9IE5vZGUuZ2V0KHJvb3QsIHBhcmVudFBhdGgpO1xuXG4gICAgaWYgKFRleHQuaXNUZXh0KHApKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZ2V0IHRoZSBwYXJlbnQgb2YgcGF0aCBbXCIuY29uY2F0KHBhdGgsIFwiXSBiZWNhdXNlIGl0IGRvZXMgbm90IGV4aXN0IGluIHRoZSByb290LlwiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHA7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBjb25jYXRlbmF0ZWQgdGV4dCBzdHJpbmcgb2YgYSBub2RlJ3MgY29udGVudC5cclxuICAgKlxyXG4gICAqIE5vdGUgdGhhdCB0aGlzIHdpbGwgbm90IGluY2x1ZGUgc3BhY2VzIG9yIGxpbmUgYnJlYWtzIGJldHdlZW4gYmxvY2sgbm9kZXMuXHJcbiAgICogSXQgaXMgbm90IGEgdXNlci1mYWNpbmcgc3RyaW5nLCBidXQgYSBzdHJpbmcgZm9yIHBlcmZvcm1pbmcgb2Zmc2V0LXJlbGF0ZWRcclxuICAgKiBjb21wdXRhdGlvbnMgZm9yIGEgbm9kZS5cclxuICAgKi9cbiAgc3RyaW5nKG5vZGUpIHtcbiAgICBpZiAoVGV4dC5pc1RleHQobm9kZSkpIHtcbiAgICAgIHJldHVybiBub2RlLnRleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBub2RlLmNoaWxkcmVuLm1hcChOb2RlLnN0cmluZykuam9pbignJyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxyXG4gICAqIFJldHVybiBhIGdlbmVyYXRvciBvZiBhbGwgbGVhZiB0ZXh0IG5vZGVzIGluIGEgcm9vdCBub2RlLlxyXG4gICAqL1xuICAqdGV4dHMocm9vdCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIGZvciAodmFyIFtub2RlLCBwYXRoXSBvZiBOb2RlLm5vZGVzKHJvb3QsIG9wdGlvbnMpKSB7XG4gICAgICBpZiAoVGV4dC5pc1RleHQobm9kZSkpIHtcbiAgICAgICAgeWllbGQgW25vZGUsIHBhdGhdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59O1xuXG5mdW5jdGlvbiBvd25LZXlzJDcob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDcodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQ3KE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkNyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cbnZhciBPcGVyYXRpb24gPSB7XG4gIC8qKlxyXG4gICAqIENoZWNrIG9mIGEgdmFsdWUgaXMgYSBgTm9kZU9wZXJhdGlvbmAgb2JqZWN0LlxyXG4gICAqL1xuICBpc05vZGVPcGVyYXRpb24odmFsdWUpIHtcbiAgICByZXR1cm4gT3BlcmF0aW9uLmlzT3BlcmF0aW9uKHZhbHVlKSAmJiB2YWx1ZS50eXBlLmVuZHNXaXRoKCdfbm9kZScpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIG9mIGEgdmFsdWUgaXMgYW4gYE9wZXJhdGlvbmAgb2JqZWN0LlxyXG4gICAqL1xuICBpc09wZXJhdGlvbih2YWx1ZSkge1xuICAgIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHZhbHVlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2luc2VydF9ub2RlJzpcbiAgICAgICAgcmV0dXJuIFBhdGguaXNQYXRoKHZhbHVlLnBhdGgpICYmIE5vZGUuaXNOb2RlKHZhbHVlLm5vZGUpO1xuXG4gICAgICBjYXNlICdpbnNlcnRfdGV4dCc6XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUub2Zmc2V0ID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdmFsdWUudGV4dCA9PT0gJ3N0cmluZycgJiYgUGF0aC5pc1BhdGgodmFsdWUucGF0aCk7XG5cbiAgICAgIGNhc2UgJ21lcmdlX25vZGUnOlxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlLnBvc2l0aW9uID09PSAnbnVtYmVyJyAmJiBQYXRoLmlzUGF0aCh2YWx1ZS5wYXRoKSAmJiBpc1BsYWluT2JqZWN0KHZhbHVlLnByb3BlcnRpZXMpO1xuXG4gICAgICBjYXNlICdtb3ZlX25vZGUnOlxuICAgICAgICByZXR1cm4gUGF0aC5pc1BhdGgodmFsdWUucGF0aCkgJiYgUGF0aC5pc1BhdGgodmFsdWUubmV3UGF0aCk7XG5cbiAgICAgIGNhc2UgJ3JlbW92ZV9ub2RlJzpcbiAgICAgICAgcmV0dXJuIFBhdGguaXNQYXRoKHZhbHVlLnBhdGgpICYmIE5vZGUuaXNOb2RlKHZhbHVlLm5vZGUpO1xuXG4gICAgICBjYXNlICdyZW1vdmVfdGV4dCc6XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUub2Zmc2V0ID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdmFsdWUudGV4dCA9PT0gJ3N0cmluZycgJiYgUGF0aC5pc1BhdGgodmFsdWUucGF0aCk7XG5cbiAgICAgIGNhc2UgJ3NldF9ub2RlJzpcbiAgICAgICAgcmV0dXJuIFBhdGguaXNQYXRoKHZhbHVlLnBhdGgpICYmIGlzUGxhaW5PYmplY3QodmFsdWUucHJvcGVydGllcykgJiYgaXNQbGFpbk9iamVjdCh2YWx1ZS5uZXdQcm9wZXJ0aWVzKTtcblxuICAgICAgY2FzZSAnc2V0X3NlbGVjdGlvbic6XG4gICAgICAgIHJldHVybiB2YWx1ZS5wcm9wZXJ0aWVzID09PSBudWxsICYmIFJhbmdlLmlzUmFuZ2UodmFsdWUubmV3UHJvcGVydGllcykgfHwgdmFsdWUubmV3UHJvcGVydGllcyA9PT0gbnVsbCAmJiBSYW5nZS5pc1JhbmdlKHZhbHVlLnByb3BlcnRpZXMpIHx8IGlzUGxhaW5PYmplY3QodmFsdWUucHJvcGVydGllcykgJiYgaXNQbGFpbk9iamVjdCh2YWx1ZS5uZXdQcm9wZXJ0aWVzKTtcblxuICAgICAgY2FzZSAnc3BsaXRfbm9kZSc6XG4gICAgICAgIHJldHVybiBQYXRoLmlzUGF0aCh2YWx1ZS5wYXRoKSAmJiB0eXBlb2YgdmFsdWUucG9zaXRpb24gPT09ICdudW1iZXInICYmIGlzUGxhaW5PYmplY3QodmFsdWUucHJvcGVydGllcyk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhIGxpc3Qgb2YgYE9wZXJhdGlvbmAgb2JqZWN0cy5cclxuICAgKi9cbiAgaXNPcGVyYXRpb25MaXN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmV2ZXJ5KHZhbCA9PiBPcGVyYXRpb24uaXNPcGVyYXRpb24odmFsKSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgb2YgYSB2YWx1ZSBpcyBhIGBTZWxlY3Rpb25PcGVyYXRpb25gIG9iamVjdC5cclxuICAgKi9cbiAgaXNTZWxlY3Rpb25PcGVyYXRpb24odmFsdWUpIHtcbiAgICByZXR1cm4gT3BlcmF0aW9uLmlzT3BlcmF0aW9uKHZhbHVlKSAmJiB2YWx1ZS50eXBlLmVuZHNXaXRoKCdfc2VsZWN0aW9uJyk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgb2YgYSB2YWx1ZSBpcyBhIGBUZXh0T3BlcmF0aW9uYCBvYmplY3QuXHJcbiAgICovXG4gIGlzVGV4dE9wZXJhdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBPcGVyYXRpb24uaXNPcGVyYXRpb24odmFsdWUpICYmIHZhbHVlLnR5cGUuZW5kc1dpdGgoJ190ZXh0Jyk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogSW52ZXJ0IGFuIG9wZXJhdGlvbiwgcmV0dXJuaW5nIGEgbmV3IG9wZXJhdGlvbiB0aGF0IHdpbGwgZXhhY3RseSB1bmRvIHRoZVxyXG4gICAqIG9yaWdpbmFsIHdoZW4gYXBwbGllZC5cclxuICAgKi9cbiAgaW52ZXJzZShvcCkge1xuICAgIHN3aXRjaCAob3AudHlwZSkge1xuICAgICAgY2FzZSAnaW5zZXJ0X25vZGUnOlxuICAgICAgICB7XG4gICAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQkNyhfb2JqZWN0U3ByZWFkJDcoe30sIG9wKSwge30sIHtcbiAgICAgICAgICAgIHR5cGU6ICdyZW1vdmVfbm9kZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdpbnNlcnRfdGV4dCc6XG4gICAgICAgIHtcbiAgICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZCQ3KF9vYmplY3RTcHJlYWQkNyh7fSwgb3ApLCB7fSwge1xuICAgICAgICAgICAgdHlwZTogJ3JlbW92ZV90ZXh0J1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ21lcmdlX25vZGUnOlxuICAgICAgICB7XG4gICAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQkNyhfb2JqZWN0U3ByZWFkJDcoe30sIG9wKSwge30sIHtcbiAgICAgICAgICAgIHR5cGU6ICdzcGxpdF9ub2RlJyxcbiAgICAgICAgICAgIHBhdGg6IFBhdGgucHJldmlvdXMob3AucGF0aClcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdtb3ZlX25vZGUnOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIHtcbiAgICAgICAgICAgIG5ld1BhdGgsXG4gICAgICAgICAgICBwYXRoXG4gICAgICAgICAgfSA9IG9wOyAvLyBQRVJGOiBpbiB0aGlzIGNhc2UgdGhlIG1vdmUgb3BlcmF0aW9uIGlzIGEgbm8tb3AgYW55d2F5cy5cblxuICAgICAgICAgIGlmIChQYXRoLmVxdWFscyhuZXdQYXRoLCBwYXRoKSkge1xuICAgICAgICAgICAgcmV0dXJuIG9wO1xuICAgICAgICAgIH0gLy8gSWYgdGhlIG1vdmUgaGFwcGVucyBjb21wbGV0ZWx5IHdpdGhpbiBhIHNpbmdsZSBwYXJlbnQgdGhlIHBhdGggYW5kXG4gICAgICAgICAgLy8gbmV3UGF0aCBhcmUgc3RhYmxlIHdpdGggcmVzcGVjdCB0byBlYWNoIG90aGVyLlxuXG5cbiAgICAgICAgICBpZiAoUGF0aC5pc1NpYmxpbmcocGF0aCwgbmV3UGF0aCkpIHtcbiAgICAgICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkJDcoX29iamVjdFNwcmVhZCQ3KHt9LCBvcCksIHt9LCB7XG4gICAgICAgICAgICAgIHBhdGg6IG5ld1BhdGgsXG4gICAgICAgICAgICAgIG5ld1BhdGg6IHBhdGhcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gLy8gSWYgdGhlIG1vdmUgZG9lcyBub3QgaGFwcGVuIHdpdGhpbiBhIHNpbmdsZSBwYXJlbnQgaXQgaXMgcG9zc2libGVcbiAgICAgICAgICAvLyBmb3IgdGhlIG1vdmUgdG8gaW1wYWN0IHRoZSB0cnVlIHBhdGggdG8gdGhlIGxvY2F0aW9uIHdoZXJlIHRoZSBub2RlXG4gICAgICAgICAgLy8gd2FzIHJlbW92ZWQgZnJvbSBhbmQgd2hlcmUgaXQgd2FzIGluc2VydGVkLiBXZSBoYXZlIHRvIGFkanVzdCBmb3IgdGhpc1xuICAgICAgICAgIC8vIGFuZCBmaW5kIHRoZSBvcmlnaW5hbCBwYXRoLiBXZSBjYW4gYWNjb21wbGlzaCB0aGlzIChvbmx5IGluIG5vbi1zaWJsaW5nKVxuICAgICAgICAgIC8vIG1vdmVzIGJ5IGxvb2tpbmcgYXQgdGhlIGltcGFjdCBvZiB0aGUgbW92ZSBvcGVyYXRpb24gb24gdGhlIG5vZGVcbiAgICAgICAgICAvLyBhZnRlciB0aGUgb3JpZ2luYWwgbW92ZSBwYXRoLlxuXG5cbiAgICAgICAgICB2YXIgaW52ZXJzZVBhdGggPSBQYXRoLnRyYW5zZm9ybShwYXRoLCBvcCk7XG4gICAgICAgICAgdmFyIGludmVyc2VOZXdQYXRoID0gUGF0aC50cmFuc2Zvcm0oUGF0aC5uZXh0KHBhdGgpLCBvcCk7XG4gICAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQkNyhfb2JqZWN0U3ByZWFkJDcoe30sIG9wKSwge30sIHtcbiAgICAgICAgICAgIHBhdGg6IGludmVyc2VQYXRoLFxuICAgICAgICAgICAgbmV3UGF0aDogaW52ZXJzZU5ld1BhdGhcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdyZW1vdmVfbm9kZSc6XG4gICAgICAgIHtcbiAgICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZCQ3KF9vYmplY3RTcHJlYWQkNyh7fSwgb3ApLCB7fSwge1xuICAgICAgICAgICAgdHlwZTogJ2luc2VydF9ub2RlJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ3JlbW92ZV90ZXh0JzpcbiAgICAgICAge1xuICAgICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkJDcoX29iamVjdFNwcmVhZCQ3KHt9LCBvcCksIHt9LCB7XG4gICAgICAgICAgICB0eXBlOiAnaW5zZXJ0X3RleHQnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAnc2V0X25vZGUnOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIHtcbiAgICAgICAgICAgIHByb3BlcnRpZXMsXG4gICAgICAgICAgICBuZXdQcm9wZXJ0aWVzXG4gICAgICAgICAgfSA9IG9wO1xuICAgICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkJDcoX29iamVjdFNwcmVhZCQ3KHt9LCBvcCksIHt9LCB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBuZXdQcm9wZXJ0aWVzLFxuICAgICAgICAgICAgbmV3UHJvcGVydGllczogcHJvcGVydGllc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ3NldF9zZWxlY3Rpb24nOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IF9wcm9wZXJ0aWVzLFxuICAgICAgICAgICAgbmV3UHJvcGVydGllczogX25ld1Byb3BlcnRpZXNcbiAgICAgICAgICB9ID0gb3A7XG5cbiAgICAgICAgICBpZiAoX3Byb3BlcnRpZXMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQkNyhfb2JqZWN0U3ByZWFkJDcoe30sIG9wKSwge30sIHtcbiAgICAgICAgICAgICAgcHJvcGVydGllczogX25ld1Byb3BlcnRpZXMsXG4gICAgICAgICAgICAgIG5ld1Byb3BlcnRpZXM6IG51bGxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoX25ld1Byb3BlcnRpZXMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQkNyhfb2JqZWN0U3ByZWFkJDcoe30sIG9wKSwge30sIHtcbiAgICAgICAgICAgICAgcHJvcGVydGllczogbnVsbCxcbiAgICAgICAgICAgICAgbmV3UHJvcGVydGllczogX3Byb3BlcnRpZXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZCQ3KF9vYmplY3RTcHJlYWQkNyh7fSwgb3ApLCB7fSwge1xuICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiBfbmV3UHJvcGVydGllcyxcbiAgICAgICAgICAgICAgbmV3UHJvcGVydGllczogX3Byb3BlcnRpZXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdzcGxpdF9ub2RlJzpcbiAgICAgICAge1xuICAgICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkJDcoX29iamVjdFNwcmVhZCQ3KHt9LCBvcCksIHt9LCB7XG4gICAgICAgICAgICB0eXBlOiAnbWVyZ2Vfbm9kZScsXG4gICAgICAgICAgICBwYXRoOiBQYXRoLm5leHQob3AucGF0aClcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG59O1xuXG52YXIgUGF0aCA9IHtcbiAgLyoqXHJcbiAgICogR2V0IGEgbGlzdCBvZiBhbmNlc3RvciBwYXRocyBmb3IgYSBnaXZlbiBwYXRoLlxyXG4gICAqXHJcbiAgICogVGhlIHBhdGhzIGFyZSBzb3J0ZWQgZnJvbSBkZWVwZXN0IHRvIHNoYWxsb3dlc3QgYW5jZXN0b3IuIEhvd2V2ZXIsIGlmIHRoZVxyXG4gICAqIGByZXZlcnNlOiB0cnVlYCBvcHRpb24gaXMgcGFzc2VkLCB0aGV5IGFyZSByZXZlcnNlZC5cclxuICAgKi9cbiAgYW5jZXN0b3JzKHBhdGgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHtcbiAgICAgIHJldmVyc2UgPSBmYWxzZVxuICAgIH0gPSBvcHRpb25zO1xuICAgIHZhciBwYXRocyA9IFBhdGgubGV2ZWxzKHBhdGgsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHJldmVyc2UpIHtcbiAgICAgIHBhdGhzID0gcGF0aHMuc2xpY2UoMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGhzID0gcGF0aHMuc2xpY2UoMCwgLTEpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXRocztcbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIGNvbW1vbiBhbmNlc3RvciBwYXRoIG9mIHR3byBwYXRocy5cclxuICAgKi9cbiAgY29tbW9uKHBhdGgsIGFub3RoZXIpIHtcbiAgICB2YXIgY29tbW9uID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoICYmIGkgPCBhbm90aGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgYXYgPSBwYXRoW2ldO1xuICAgICAgdmFyIGJ2ID0gYW5vdGhlcltpXTtcblxuICAgICAgaWYgKGF2ICE9PSBidikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY29tbW9uLnB1c2goYXYpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21tb247XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ29tcGFyZSBhIHBhdGggdG8gYW5vdGhlciwgcmV0dXJuaW5nIGFuIGludGVnZXIgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBwYXRoXHJcbiAgICogd2FzIGJlZm9yZSwgYXQsIG9yIGFmdGVyIHRoZSBvdGhlci5cclxuICAgKlxyXG4gICAqIE5vdGU6IFR3byBwYXRocyBvZiB1bmVxdWFsIGxlbmd0aCBjYW4gc3RpbGwgcmVjZWl2ZSBhIGAwYCByZXN1bHQgaWYgb25lIGlzXHJcbiAgICogZGlyZWN0bHkgYWJvdmUgb3IgYmVsb3cgdGhlIG90aGVyLiBJZiB5b3Ugd2FudCBleGFjdCBtYXRjaGluZywgdXNlXHJcbiAgICogW1tQYXRoLmVxdWFsc11dIGluc3RlYWQuXHJcbiAgICovXG4gIGNvbXBhcmUocGF0aCwgYW5vdGhlcikge1xuICAgIHZhciBtaW4gPSBNYXRoLm1pbihwYXRoLmxlbmd0aCwgYW5vdGhlci5sZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtaW47IGkrKykge1xuICAgICAgaWYgKHBhdGhbaV0gPCBhbm90aGVyW2ldKSByZXR1cm4gLTE7XG4gICAgICBpZiAocGF0aFtpXSA+IGFub3RoZXJbaV0pIHJldHVybiAxO1xuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgcGF0aCBlbmRzIGFmdGVyIG9uZSBvZiB0aGUgaW5kZXhlcyBpbiBhbm90aGVyLlxyXG4gICAqL1xuICBlbmRzQWZ0ZXIocGF0aCwgYW5vdGhlcikge1xuICAgIHZhciBpID0gcGF0aC5sZW5ndGggLSAxO1xuICAgIHZhciBhcyA9IHBhdGguc2xpY2UoMCwgaSk7XG4gICAgdmFyIGJzID0gYW5vdGhlci5zbGljZSgwLCBpKTtcbiAgICB2YXIgYXYgPSBwYXRoW2ldO1xuICAgIHZhciBidiA9IGFub3RoZXJbaV07XG4gICAgcmV0dXJuIFBhdGguZXF1YWxzKGFzLCBicykgJiYgYXYgPiBidjtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHBhdGggZW5kcyBhdCBvbmUgb2YgdGhlIGluZGV4ZXMgaW4gYW5vdGhlci5cclxuICAgKi9cbiAgZW5kc0F0KHBhdGgsIGFub3RoZXIpIHtcbiAgICB2YXIgaSA9IHBhdGgubGVuZ3RoO1xuICAgIHZhciBhcyA9IHBhdGguc2xpY2UoMCwgaSk7XG4gICAgdmFyIGJzID0gYW5vdGhlci5zbGljZSgwLCBpKTtcbiAgICByZXR1cm4gUGF0aC5lcXVhbHMoYXMsIGJzKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHBhdGggZW5kcyBiZWZvcmUgb25lIG9mIHRoZSBpbmRleGVzIGluIGFub3RoZXIuXHJcbiAgICovXG4gIGVuZHNCZWZvcmUocGF0aCwgYW5vdGhlcikge1xuICAgIHZhciBpID0gcGF0aC5sZW5ndGggLSAxO1xuICAgIHZhciBhcyA9IHBhdGguc2xpY2UoMCwgaSk7XG4gICAgdmFyIGJzID0gYW5vdGhlci5zbGljZSgwLCBpKTtcbiAgICB2YXIgYXYgPSBwYXRoW2ldO1xuICAgIHZhciBidiA9IGFub3RoZXJbaV07XG4gICAgcmV0dXJuIFBhdGguZXF1YWxzKGFzLCBicykgJiYgYXYgPCBidjtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHBhdGggaXMgZXhhY3RseSBlcXVhbCB0byBhbm90aGVyLlxyXG4gICAqL1xuICBlcXVhbHMocGF0aCwgYW5vdGhlcikge1xuICAgIHJldHVybiBwYXRoLmxlbmd0aCA9PT0gYW5vdGhlci5sZW5ndGggJiYgcGF0aC5ldmVyeSgobiwgaSkgPT4gbiA9PT0gYW5vdGhlcltpXSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgdGhlIHBhdGggb2YgcHJldmlvdXMgc2libGluZyBub2RlIGV4aXN0c1xyXG4gICAqL1xuICBoYXNQcmV2aW91cyhwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGhbcGF0aC5sZW5ndGggLSAxXSA+IDA7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBwYXRoIGlzIGFmdGVyIGFub3RoZXIuXHJcbiAgICovXG4gIGlzQWZ0ZXIocGF0aCwgYW5vdGhlcikge1xuICAgIHJldHVybiBQYXRoLmNvbXBhcmUocGF0aCwgYW5vdGhlcikgPT09IDE7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBwYXRoIGlzIGFuIGFuY2VzdG9yIG9mIGFub3RoZXIuXHJcbiAgICovXG4gIGlzQW5jZXN0b3IocGF0aCwgYW5vdGhlcikge1xuICAgIHJldHVybiBwYXRoLmxlbmd0aCA8IGFub3RoZXIubGVuZ3RoICYmIFBhdGguY29tcGFyZShwYXRoLCBhbm90aGVyKSA9PT0gMDtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHBhdGggaXMgYmVmb3JlIGFub3RoZXIuXHJcbiAgICovXG4gIGlzQmVmb3JlKHBhdGgsIGFub3RoZXIpIHtcbiAgICByZXR1cm4gUGF0aC5jb21wYXJlKHBhdGgsIGFub3RoZXIpID09PSAtMTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHBhdGggaXMgYSBjaGlsZCBvZiBhbm90aGVyLlxyXG4gICAqL1xuICBpc0NoaWxkKHBhdGgsIGFub3RoZXIpIHtcbiAgICByZXR1cm4gcGF0aC5sZW5ndGggPT09IGFub3RoZXIubGVuZ3RoICsgMSAmJiBQYXRoLmNvbXBhcmUocGF0aCwgYW5vdGhlcikgPT09IDA7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBwYXRoIGlzIGVxdWFsIHRvIG9yIGFuIGFuY2VzdG9yIG9mIGFub3RoZXIuXHJcbiAgICovXG4gIGlzQ29tbW9uKHBhdGgsIGFub3RoZXIpIHtcbiAgICByZXR1cm4gcGF0aC5sZW5ndGggPD0gYW5vdGhlci5sZW5ndGggJiYgUGF0aC5jb21wYXJlKHBhdGgsIGFub3RoZXIpID09PSAwO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgcGF0aCBpcyBhIGRlc2NlbmRhbnQgb2YgYW5vdGhlci5cclxuICAgKi9cbiAgaXNEZXNjZW5kYW50KHBhdGgsIGFub3RoZXIpIHtcbiAgICByZXR1cm4gcGF0aC5sZW5ndGggPiBhbm90aGVyLmxlbmd0aCAmJiBQYXRoLmNvbXBhcmUocGF0aCwgYW5vdGhlcikgPT09IDA7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBwYXRoIGlzIHRoZSBwYXJlbnQgb2YgYW5vdGhlci5cclxuICAgKi9cbiAgaXNQYXJlbnQocGF0aCwgYW5vdGhlcikge1xuICAgIHJldHVybiBwYXRoLmxlbmd0aCArIDEgPT09IGFub3RoZXIubGVuZ3RoICYmIFBhdGguY29tcGFyZShwYXRoLCBhbm90aGVyKSA9PT0gMDtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpcyBhIHZhbHVlIGltcGxlbWVudHMgdGhlIGBQYXRoYCBpbnRlcmZhY2UuXHJcbiAgICovXG4gIGlzUGF0aCh2YWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiAodmFsdWUubGVuZ3RoID09PSAwIHx8IHR5cGVvZiB2YWx1ZVswXSA9PT0gJ251bWJlcicpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgcGF0aCBpcyBhIHNpYmxpbmcgb2YgYW5vdGhlci5cclxuICAgKi9cbiAgaXNTaWJsaW5nKHBhdGgsIGFub3RoZXIpIHtcbiAgICBpZiAocGF0aC5sZW5ndGggIT09IGFub3RoZXIubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGFzID0gcGF0aC5zbGljZSgwLCAtMSk7XG4gICAgdmFyIGJzID0gYW5vdGhlci5zbGljZSgwLCAtMSk7XG4gICAgdmFyIGFsID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuICAgIHZhciBibCA9IGFub3RoZXJbYW5vdGhlci5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4gYWwgIT09IGJsICYmIFBhdGguZXF1YWxzKGFzLCBicyk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IGEgbGlzdCBvZiBwYXRocyBhdCBldmVyeSBsZXZlbCBkb3duIHRvIGEgcGF0aC4gTm90ZTogdGhpcyBpcyB0aGUgc2FtZVxyXG4gICAqIGFzIGBQYXRoLmFuY2VzdG9yc2AsIGJ1dCBpbmNsdWRpbmcgdGhlIHBhdGggaXRzZWxmLlxyXG4gICAqXHJcbiAgICogVGhlIHBhdGhzIGFyZSBzb3J0ZWQgZnJvbSBzaGFsbG93ZXN0IHRvIGRlZXBlc3QuIEhvd2V2ZXIsIGlmIHRoZSBgcmV2ZXJzZTpcclxuICAgKiB0cnVlYCBvcHRpb24gaXMgcGFzc2VkLCB0aGV5IGFyZSByZXZlcnNlZC5cclxuICAgKi9cbiAgbGV2ZWxzKHBhdGgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHtcbiAgICAgIHJldmVyc2UgPSBmYWxzZVxuICAgIH0gPSBvcHRpb25zO1xuICAgIHZhciBsaXN0ID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaXN0LnB1c2gocGF0aC5zbGljZSgwLCBpKSk7XG4gICAgfVxuXG4gICAgaWYgKHJldmVyc2UpIHtcbiAgICAgIGxpc3QucmV2ZXJzZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBsaXN0O1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdpdmVuIGEgcGF0aCwgZ2V0IHRoZSBwYXRoIHRvIHRoZSBuZXh0IHNpYmxpbmcgbm9kZS5cclxuICAgKi9cbiAgbmV4dChwYXRoKSB7XG4gICAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZ2V0IHRoZSBuZXh0IHBhdGggb2YgYSByb290IHBhdGggW1wiLmNvbmNhdChwYXRoLCBcIl0sIGJlY2F1c2UgaXQgaGFzIG5vIG5leHQgaW5kZXguXCIpKTtcbiAgICB9XG5cbiAgICB2YXIgbGFzdCA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4gcGF0aC5zbGljZSgwLCAtMSkuY29uY2F0KGxhc3QgKyAxKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBHaXZlbiBhIHBhdGgsIHJldHVybiBhIG5ldyBwYXRoIHJlZmVycmluZyB0byB0aGUgcGFyZW50IG5vZGUgYWJvdmUgaXQuXHJcbiAgICovXG4gIHBhcmVudChwYXRoKSB7XG4gICAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZ2V0IHRoZSBwYXJlbnQgcGF0aCBvZiB0aGUgcm9vdCBwYXRoIFtcIi5jb25jYXQocGF0aCwgXCJdLlwiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGguc2xpY2UoMCwgLTEpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdpdmVuIGEgcGF0aCwgZ2V0IHRoZSBwYXRoIHRvIHRoZSBwcmV2aW91cyBzaWJsaW5nIG5vZGUuXHJcbiAgICovXG4gIHByZXZpb3VzKHBhdGgpIHtcbiAgICBpZiAocGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBnZXQgdGhlIHByZXZpb3VzIHBhdGggb2YgYSByb290IHBhdGggW1wiLmNvbmNhdChwYXRoLCBcIl0sIGJlY2F1c2UgaXQgaGFzIG5vIHByZXZpb3VzIGluZGV4LlwiKSk7XG4gICAgfVxuXG4gICAgdmFyIGxhc3QgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAobGFzdCA8PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZ2V0IHRoZSBwcmV2aW91cyBwYXRoIG9mIGEgZmlyc3QgY2hpbGQgcGF0aCBbXCIuY29uY2F0KHBhdGgsIFwiXSBiZWNhdXNlIGl0IHdvdWxkIHJlc3VsdCBpbiBhIG5lZ2F0aXZlIGluZGV4LlwiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGguc2xpY2UoMCwgLTEpLmNvbmNhdChsYXN0IC0gMSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IGEgcGF0aCByZWxhdGl2ZSB0byBhbiBhbmNlc3Rvci5cclxuICAgKi9cbiAgcmVsYXRpdmUocGF0aCwgYW5jZXN0b3IpIHtcbiAgICBpZiAoIVBhdGguaXNBbmNlc3RvcihhbmNlc3RvciwgcGF0aCkgJiYgIVBhdGguZXF1YWxzKHBhdGgsIGFuY2VzdG9yKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGdldCB0aGUgcmVsYXRpdmUgcGF0aCBvZiBbXCIuY29uY2F0KHBhdGgsIFwiXSBpbnNpZGUgYW5jZXN0b3IgW1wiKS5jb25jYXQoYW5jZXN0b3IsIFwiXSwgYmVjYXVzZSBpdCBpcyBub3QgYWJvdmUgb3IgZXF1YWwgdG8gdGhlIHBhdGguXCIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0aC5zbGljZShhbmNlc3Rvci5sZW5ndGgpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIFRyYW5zZm9ybSBhIHBhdGggYnkgYW4gb3BlcmF0aW9uLlxyXG4gICAqL1xuICB0cmFuc2Zvcm0ocGF0aCwgb3BlcmF0aW9uKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIHJldHVybiBwcm9kdWNlKHBhdGgsIHAgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgYWZmaW5pdHkgPSAnZm9yd2FyZCdcbiAgICAgIH0gPSBvcHRpb25zOyAvLyBQRVJGOiBFeGl0IGVhcmx5IGlmIHRoZSBvcGVyYXRpb24gaXMgZ3VhcmFudGVlZCBub3QgdG8gaGF2ZSBhbiBlZmZlY3QuXG5cbiAgICAgIGlmICghcGF0aCB8fCAocGF0aCA9PT0gbnVsbCB8fCBwYXRoID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXRoLmxlbmd0aCkgPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAocCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChvcGVyYXRpb24udHlwZSkge1xuICAgICAgICBjYXNlICdpbnNlcnRfbm9kZSc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIHtcbiAgICAgICAgICAgICAgcGF0aDogb3BcbiAgICAgICAgICAgIH0gPSBvcGVyYXRpb247XG5cbiAgICAgICAgICAgIGlmIChQYXRoLmVxdWFscyhvcCwgcCkgfHwgUGF0aC5lbmRzQmVmb3JlKG9wLCBwKSB8fCBQYXRoLmlzQW5jZXN0b3Iob3AsIHApKSB7XG4gICAgICAgICAgICAgIHBbb3AubGVuZ3RoIC0gMV0gKz0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ3JlbW92ZV9ub2RlJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIge1xuICAgICAgICAgICAgICBwYXRoOiBfb3BcbiAgICAgICAgICAgIH0gPSBvcGVyYXRpb247XG5cbiAgICAgICAgICAgIGlmIChQYXRoLmVxdWFscyhfb3AsIHApIHx8IFBhdGguaXNBbmNlc3Rvcihfb3AsIHApKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChQYXRoLmVuZHNCZWZvcmUoX29wLCBwKSkge1xuICAgICAgICAgICAgICBwW19vcC5sZW5ndGggLSAxXSAtPSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnbWVyZ2Vfbm9kZSc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIHtcbiAgICAgICAgICAgICAgcGF0aDogX29wMixcbiAgICAgICAgICAgICAgcG9zaXRpb25cbiAgICAgICAgICAgIH0gPSBvcGVyYXRpb247XG5cbiAgICAgICAgICAgIGlmIChQYXRoLmVxdWFscyhfb3AyLCBwKSB8fCBQYXRoLmVuZHNCZWZvcmUoX29wMiwgcCkpIHtcbiAgICAgICAgICAgICAgcFtfb3AyLmxlbmd0aCAtIDFdIC09IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFBhdGguaXNBbmNlc3Rvcihfb3AyLCBwKSkge1xuICAgICAgICAgICAgICBwW19vcDIubGVuZ3RoIC0gMV0gLT0gMTtcbiAgICAgICAgICAgICAgcFtfb3AyLmxlbmd0aF0gKz0gcG9zaXRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdzcGxpdF9ub2RlJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIge1xuICAgICAgICAgICAgICBwYXRoOiBfb3AzLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogX3Bvc2l0aW9uXG4gICAgICAgICAgICB9ID0gb3BlcmF0aW9uO1xuXG4gICAgICAgICAgICBpZiAoUGF0aC5lcXVhbHMoX29wMywgcCkpIHtcbiAgICAgICAgICAgICAgaWYgKGFmZmluaXR5ID09PSAnZm9yd2FyZCcpIHtcbiAgICAgICAgICAgICAgICBwW3AubGVuZ3RoIC0gMV0gKz0gMTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChhZmZpbml0eSA9PT0gJ2JhY2t3YXJkJykgOyBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChQYXRoLmVuZHNCZWZvcmUoX29wMywgcCkpIHtcbiAgICAgICAgICAgICAgcFtfb3AzLmxlbmd0aCAtIDFdICs9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFBhdGguaXNBbmNlc3Rvcihfb3AzLCBwKSAmJiBwYXRoW19vcDMubGVuZ3RoXSA+PSBfcG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgcFtfb3AzLmxlbmd0aCAtIDFdICs9IDE7XG4gICAgICAgICAgICAgIHBbX29wMy5sZW5ndGhdIC09IF9wb3NpdGlvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ21vdmVfbm9kZSc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIHtcbiAgICAgICAgICAgICAgcGF0aDogX29wNCxcbiAgICAgICAgICAgICAgbmV3UGF0aDogb25wXG4gICAgICAgICAgICB9ID0gb3BlcmF0aW9uOyAvLyBJZiB0aGUgb2xkIGFuZCBuZXcgcGF0aCBhcmUgdGhlIHNhbWUsIGl0J3MgYSBuby1vcC5cblxuICAgICAgICAgICAgaWYgKFBhdGguZXF1YWxzKF9vcDQsIG9ucCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoUGF0aC5pc0FuY2VzdG9yKF9vcDQsIHApIHx8IFBhdGguZXF1YWxzKF9vcDQsIHApKSB7XG4gICAgICAgICAgICAgIHZhciBjb3B5ID0gb25wLnNsaWNlKCk7XG5cbiAgICAgICAgICAgICAgaWYgKFBhdGguZW5kc0JlZm9yZShfb3A0LCBvbnApICYmIF9vcDQubGVuZ3RoIDwgb25wLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvcHlbX29wNC5sZW5ndGggLSAxXSAtPSAxO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGNvcHkuY29uY2F0KHAuc2xpY2UoX29wNC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUGF0aC5pc1NpYmxpbmcoX29wNCwgb25wKSAmJiAoUGF0aC5pc0FuY2VzdG9yKG9ucCwgcCkgfHwgUGF0aC5lcXVhbHMob25wLCBwKSkpIHtcbiAgICAgICAgICAgICAgaWYgKFBhdGguZW5kc0JlZm9yZShfb3A0LCBwKSkge1xuICAgICAgICAgICAgICAgIHBbX29wNC5sZW5ndGggLSAxXSAtPSAxO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBbX29wNC5sZW5ndGggLSAxXSArPSAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFBhdGguZW5kc0JlZm9yZShvbnAsIHApIHx8IFBhdGguZXF1YWxzKG9ucCwgcCkgfHwgUGF0aC5pc0FuY2VzdG9yKG9ucCwgcCkpIHtcbiAgICAgICAgICAgICAgaWYgKFBhdGguZW5kc0JlZm9yZShfb3A0LCBwKSkge1xuICAgICAgICAgICAgICAgIHBbX29wNC5sZW5ndGggLSAxXSAtPSAxO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcFtvbnAubGVuZ3RoIC0gMV0gKz0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUGF0aC5lbmRzQmVmb3JlKF9vcDQsIHApKSB7XG4gICAgICAgICAgICAgIGlmIChQYXRoLmVxdWFscyhvbnAsIHApKSB7XG4gICAgICAgICAgICAgICAgcFtvbnAubGVuZ3RoIC0gMV0gKz0gMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHBbX29wNC5sZW5ndGggLSAxXSAtPSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufTtcblxudmFyIFBhdGhSZWYgPSB7XG4gIC8qKlxyXG4gICAqIFRyYW5zZm9ybSB0aGUgcGF0aCByZWYncyBjdXJyZW50IHZhbHVlIGJ5IGFuIG9wZXJhdGlvbi5cclxuICAgKi9cbiAgdHJhbnNmb3JtKHJlZiwgb3ApIHtcbiAgICB2YXIge1xuICAgICAgY3VycmVudCxcbiAgICAgIGFmZmluaXR5XG4gICAgfSA9IHJlZjtcblxuICAgIGlmIChjdXJyZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcGF0aCA9IFBhdGgudHJhbnNmb3JtKGN1cnJlbnQsIG9wLCB7XG4gICAgICBhZmZpbml0eVxuICAgIH0pO1xuICAgIHJlZi5jdXJyZW50ID0gcGF0aDtcblxuICAgIGlmIChwYXRoID09IG51bGwpIHtcbiAgICAgIHJlZi51bnJlZigpO1xuICAgIH1cbiAgfVxuXG59O1xuXG5mdW5jdGlvbiBvd25LZXlzJDYob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDYodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQ2KE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkNihPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cbnZhciBQb2ludCA9IHtcbiAgLyoqXHJcbiAgICogQ29tcGFyZSBhIHBvaW50IHRvIGFub3RoZXIsIHJldHVybmluZyBhbiBpbnRlZ2VyIGluZGljYXRpbmcgd2hldGhlciB0aGVcclxuICAgKiBwb2ludCB3YXMgYmVmb3JlLCBhdCwgb3IgYWZ0ZXIgdGhlIG90aGVyLlxyXG4gICAqL1xuICBjb21wYXJlKHBvaW50LCBhbm90aGVyKSB7XG4gICAgdmFyIHJlc3VsdCA9IFBhdGguY29tcGFyZShwb2ludC5wYXRoLCBhbm90aGVyLnBhdGgpO1xuXG4gICAgaWYgKHJlc3VsdCA9PT0gMCkge1xuICAgICAgaWYgKHBvaW50Lm9mZnNldCA8IGFub3RoZXIub2Zmc2V0KSByZXR1cm4gLTE7XG4gICAgICBpZiAocG9pbnQub2Zmc2V0ID4gYW5vdGhlci5vZmZzZXQpIHJldHVybiAxO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHBvaW50IGlzIGFmdGVyIGFub3RoZXIuXHJcbiAgICovXG4gIGlzQWZ0ZXIocG9pbnQsIGFub3RoZXIpIHtcbiAgICByZXR1cm4gUG9pbnQuY29tcGFyZShwb2ludCwgYW5vdGhlcikgPT09IDE7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBwb2ludCBpcyBiZWZvcmUgYW5vdGhlci5cclxuICAgKi9cbiAgaXNCZWZvcmUocG9pbnQsIGFub3RoZXIpIHtcbiAgICByZXR1cm4gUG9pbnQuY29tcGFyZShwb2ludCwgYW5vdGhlcikgPT09IC0xO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgcG9pbnQgaXMgZXhhY3RseSBlcXVhbCB0byBhbm90aGVyLlxyXG4gICAqL1xuICBlcXVhbHMocG9pbnQsIGFub3RoZXIpIHtcbiAgICAvLyBQRVJGOiBlbnN1cmUgdGhlIG9mZnNldHMgYXJlIGVxdWFsIGZpcnN0IHNpbmNlIHRoZXkgYXJlIGNoZWFwZXIgdG8gY2hlY2suXG4gICAgcmV0dXJuIHBvaW50Lm9mZnNldCA9PT0gYW5vdGhlci5vZmZzZXQgJiYgUGF0aC5lcXVhbHMocG9pbnQucGF0aCwgYW5vdGhlci5wYXRoKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGltcGxlbWVudHMgdGhlIGBQb2ludGAgaW50ZXJmYWNlLlxyXG4gICAqL1xuICBpc1BvaW50KHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzUGxhaW5PYmplY3QodmFsdWUpICYmIHR5cGVvZiB2YWx1ZS5vZmZzZXQgPT09ICdudW1iZXInICYmIFBhdGguaXNQYXRoKHZhbHVlLnBhdGgpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIFRyYW5zZm9ybSBhIHBvaW50IGJ5IGFuIG9wZXJhdGlvbi5cclxuICAgKi9cbiAgdHJhbnNmb3JtKHBvaW50LCBvcCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICByZXR1cm4gcHJvZHVjZShwb2ludCwgcCA9PiB7XG4gICAgICBpZiAocCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHtcbiAgICAgICAgYWZmaW5pdHkgPSAnZm9yd2FyZCdcbiAgICAgIH0gPSBvcHRpb25zO1xuICAgICAgdmFyIHtcbiAgICAgICAgcGF0aCxcbiAgICAgICAgb2Zmc2V0XG4gICAgICB9ID0gcDtcblxuICAgICAgc3dpdGNoIChvcC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2luc2VydF9ub2RlJzpcbiAgICAgICAgY2FzZSAnbW92ZV9ub2RlJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwLnBhdGggPSBQYXRoLnRyYW5zZm9ybShwYXRoLCBvcCwgb3B0aW9ucyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnaW5zZXJ0X3RleHQnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlmIChQYXRoLmVxdWFscyhvcC5wYXRoLCBwYXRoKSAmJiBvcC5vZmZzZXQgPD0gb2Zmc2V0KSB7XG4gICAgICAgICAgICAgIHAub2Zmc2V0ICs9IG9wLnRleHQubGVuZ3RoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnbWVyZ2Vfbm9kZSc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgaWYgKFBhdGguZXF1YWxzKG9wLnBhdGgsIHBhdGgpKSB7XG4gICAgICAgICAgICAgIHAub2Zmc2V0ICs9IG9wLnBvc2l0aW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwLnBhdGggPSBQYXRoLnRyYW5zZm9ybShwYXRoLCBvcCwgb3B0aW9ucyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAncmVtb3ZlX3RleHQnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlmIChQYXRoLmVxdWFscyhvcC5wYXRoLCBwYXRoKSAmJiBvcC5vZmZzZXQgPD0gb2Zmc2V0KSB7XG4gICAgICAgICAgICAgIHAub2Zmc2V0IC09IE1hdGgubWluKG9mZnNldCAtIG9wLm9mZnNldCwgb3AudGV4dC5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAncmVtb3ZlX25vZGUnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlmIChQYXRoLmVxdWFscyhvcC5wYXRoLCBwYXRoKSB8fCBQYXRoLmlzQW5jZXN0b3Iob3AucGF0aCwgcGF0aCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAucGF0aCA9IFBhdGgudHJhbnNmb3JtKHBhdGgsIG9wLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdzcGxpdF9ub2RlJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZiAoUGF0aC5lcXVhbHMob3AucGF0aCwgcGF0aCkpIHtcbiAgICAgICAgICAgICAgaWYgKG9wLnBvc2l0aW9uID09PSBvZmZzZXQgJiYgYWZmaW5pdHkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wLnBvc2l0aW9uIDwgb2Zmc2V0IHx8IG9wLnBvc2l0aW9uID09PSBvZmZzZXQgJiYgYWZmaW5pdHkgPT09ICdmb3J3YXJkJykge1xuICAgICAgICAgICAgICAgIHAub2Zmc2V0IC09IG9wLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHAucGF0aCA9IFBhdGgudHJhbnNmb3JtKHBhdGgsIG9wLCBfb2JqZWN0U3ByZWFkJDYoX29iamVjdFNwcmVhZCQ2KHt9LCBvcHRpb25zKSwge30sIHtcbiAgICAgICAgICAgICAgICAgIGFmZmluaXR5OiAnZm9yd2FyZCdcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHAucGF0aCA9IFBhdGgudHJhbnNmb3JtKHBhdGgsIG9wLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn07XG5cbnZhciBQb2ludFJlZiA9IHtcbiAgLyoqXHJcbiAgICogVHJhbnNmb3JtIHRoZSBwb2ludCByZWYncyBjdXJyZW50IHZhbHVlIGJ5IGFuIG9wZXJhdGlvbi5cclxuICAgKi9cbiAgdHJhbnNmb3JtKHJlZiwgb3ApIHtcbiAgICB2YXIge1xuICAgICAgY3VycmVudCxcbiAgICAgIGFmZmluaXR5XG4gICAgfSA9IHJlZjtcblxuICAgIGlmIChjdXJyZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcG9pbnQgPSBQb2ludC50cmFuc2Zvcm0oY3VycmVudCwgb3AsIHtcbiAgICAgIGFmZmluaXR5XG4gICAgfSk7XG4gICAgcmVmLmN1cnJlbnQgPSBwb2ludDtcblxuICAgIGlmIChwb2ludCA9PSBudWxsKSB7XG4gICAgICByZWYudW5yZWYoKTtcbiAgICB9XG4gIH1cblxufTtcblxudmFyIF9leGNsdWRlZCQyID0gW1wiYW5jaG9yXCIsIFwiZm9jdXNcIl07XG5cbmZ1bmN0aW9uIG93bktleXMkNShvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgeyBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IH0ga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkNSh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzJDUoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyQ1KE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxudmFyIFJhbmdlID0ge1xuICAvKipcclxuICAgKiBHZXQgdGhlIHN0YXJ0IGFuZCBlbmQgcG9pbnRzIG9mIGEgcmFuZ2UsIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IGFwcGVhclxyXG4gICAqIGluIHRoZSBkb2N1bWVudC5cclxuICAgKi9cbiAgZWRnZXMocmFuZ2UpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHtcbiAgICAgIHJldmVyc2UgPSBmYWxzZVxuICAgIH0gPSBvcHRpb25zO1xuICAgIHZhciB7XG4gICAgICBhbmNob3IsXG4gICAgICBmb2N1c1xuICAgIH0gPSByYW5nZTtcbiAgICByZXR1cm4gUmFuZ2UuaXNCYWNrd2FyZChyYW5nZSkgPT09IHJldmVyc2UgPyBbYW5jaG9yLCBmb2N1c10gOiBbZm9jdXMsIGFuY2hvcl07XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBlbmQgcG9pbnQgb2YgYSByYW5nZS5cclxuICAgKi9cbiAgZW5kKHJhbmdlKSB7XG4gICAgdmFyIFssIGVuZF0gPSBSYW5nZS5lZGdlcyhyYW5nZSk7XG4gICAgcmV0dXJuIGVuZDtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHJhbmdlIGlzIGV4YWN0bHkgZXF1YWwgdG8gYW5vdGhlci5cclxuICAgKi9cbiAgZXF1YWxzKHJhbmdlLCBhbm90aGVyKSB7XG4gICAgcmV0dXJuIFBvaW50LmVxdWFscyhyYW5nZS5hbmNob3IsIGFub3RoZXIuYW5jaG9yKSAmJiBQb2ludC5lcXVhbHMocmFuZ2UuZm9jdXMsIGFub3RoZXIuZm9jdXMpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgcmFuZ2UgaW5jbHVkZXMgYSBwYXRoLCBhIHBvaW50IG9yIHBhcnQgb2YgYW5vdGhlciByYW5nZS5cclxuICAgKi9cbiAgaW5jbHVkZXMocmFuZ2UsIHRhcmdldCkge1xuICAgIGlmIChSYW5nZS5pc1JhbmdlKHRhcmdldCkpIHtcbiAgICAgIGlmIChSYW5nZS5pbmNsdWRlcyhyYW5nZSwgdGFyZ2V0LmFuY2hvcikgfHwgUmFuZ2UuaW5jbHVkZXMocmFuZ2UsIHRhcmdldC5mb2N1cykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBbcnMsIHJlXSA9IFJhbmdlLmVkZ2VzKHJhbmdlKTtcbiAgICAgIHZhciBbdHMsIHRlXSA9IFJhbmdlLmVkZ2VzKHRhcmdldCk7XG4gICAgICByZXR1cm4gUG9pbnQuaXNCZWZvcmUocnMsIHRzKSAmJiBQb2ludC5pc0FmdGVyKHJlLCB0ZSk7XG4gICAgfVxuXG4gICAgdmFyIFtzdGFydCwgZW5kXSA9IFJhbmdlLmVkZ2VzKHJhbmdlKTtcbiAgICB2YXIgaXNBZnRlclN0YXJ0ID0gZmFsc2U7XG4gICAgdmFyIGlzQmVmb3JlRW5kID0gZmFsc2U7XG5cbiAgICBpZiAoUG9pbnQuaXNQb2ludCh0YXJnZXQpKSB7XG4gICAgICBpc0FmdGVyU3RhcnQgPSBQb2ludC5jb21wYXJlKHRhcmdldCwgc3RhcnQpID49IDA7XG4gICAgICBpc0JlZm9yZUVuZCA9IFBvaW50LmNvbXBhcmUodGFyZ2V0LCBlbmQpIDw9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlzQWZ0ZXJTdGFydCA9IFBhdGguY29tcGFyZSh0YXJnZXQsIHN0YXJ0LnBhdGgpID49IDA7XG4gICAgICBpc0JlZm9yZUVuZCA9IFBhdGguY29tcGFyZSh0YXJnZXQsIGVuZC5wYXRoKSA8PSAwO1xuICAgIH1cblxuICAgIHJldHVybiBpc0FmdGVyU3RhcnQgJiYgaXNCZWZvcmVFbmQ7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBpbnRlcnNlY3Rpb24gb2YgYSByYW5nZSB3aXRoIGFub3RoZXIuXHJcbiAgICovXG4gIGludGVyc2VjdGlvbihyYW5nZSwgYW5vdGhlcikge1xuICAgIHZhciByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHJhbmdlLCBfZXhjbHVkZWQkMik7XG5cbiAgICB2YXIgW3MxLCBlMV0gPSBSYW5nZS5lZGdlcyhyYW5nZSk7XG4gICAgdmFyIFtzMiwgZTJdID0gUmFuZ2UuZWRnZXMoYW5vdGhlcik7XG4gICAgdmFyIHN0YXJ0ID0gUG9pbnQuaXNCZWZvcmUoczEsIHMyKSA/IHMyIDogczE7XG4gICAgdmFyIGVuZCA9IFBvaW50LmlzQmVmb3JlKGUxLCBlMikgPyBlMSA6IGUyO1xuXG4gICAgaWYgKFBvaW50LmlzQmVmb3JlKGVuZCwgc3RhcnQpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQkNSh7XG4gICAgICAgIGFuY2hvcjogc3RhcnQsXG4gICAgICAgIGZvY3VzOiBlbmRcbiAgICAgIH0sIHJlc3QpO1xuICAgIH1cbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHJhbmdlIGlzIGJhY2t3YXJkLCBtZWFuaW5nIHRoYXQgaXRzIGFuY2hvciBwb2ludCBhcHBlYXJzIGluIHRoZVxyXG4gICAqIGRvY3VtZW50IF9hZnRlcl8gaXRzIGZvY3VzIHBvaW50LlxyXG4gICAqL1xuICBpc0JhY2t3YXJkKHJhbmdlKSB7XG4gICAgdmFyIHtcbiAgICAgIGFuY2hvcixcbiAgICAgIGZvY3VzXG4gICAgfSA9IHJhbmdlO1xuICAgIHJldHVybiBQb2ludC5pc0FmdGVyKGFuY2hvciwgZm9jdXMpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgcmFuZ2UgaXMgY29sbGFwc2VkLCBtZWFuaW5nIHRoYXQgYm90aCBpdHMgYW5jaG9yIGFuZCBmb2N1c1xyXG4gICAqIHBvaW50cyByZWZlciB0byB0aGUgZXhhY3Qgc2FtZSBwb3NpdGlvbiBpbiB0aGUgZG9jdW1lbnQuXHJcbiAgICovXG4gIGlzQ29sbGFwc2VkKHJhbmdlKSB7XG4gICAgdmFyIHtcbiAgICAgIGFuY2hvcixcbiAgICAgIGZvY3VzXG4gICAgfSA9IHJhbmdlO1xuICAgIHJldHVybiBQb2ludC5lcXVhbHMoYW5jaG9yLCBmb2N1cyk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSByYW5nZSBpcyBleHBhbmRlZC5cclxuICAgKlxyXG4gICAqIFRoaXMgaXMgdGhlIG9wcG9zaXRlIG9mIFtbUmFuZ2UuaXNDb2xsYXBzZWRdXSBhbmQgaXMgcHJvdmlkZWQgZm9yIGxlZ2liaWxpdHkuXHJcbiAgICovXG4gIGlzRXhwYW5kZWQocmFuZ2UpIHtcbiAgICByZXR1cm4gIVJhbmdlLmlzQ29sbGFwc2VkKHJhbmdlKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHJhbmdlIGlzIGZvcndhcmQuXHJcbiAgICpcclxuICAgKiBUaGlzIGlzIHRoZSBvcHBvc2l0ZSBvZiBbW1JhbmdlLmlzQmFja3dhcmRdXSBhbmQgaXMgcHJvdmlkZWQgZm9yIGxlZ2liaWxpdHkuXHJcbiAgICovXG4gIGlzRm9yd2FyZChyYW5nZSkge1xuICAgIHJldHVybiAhUmFuZ2UuaXNCYWNrd2FyZChyYW5nZSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSB2YWx1ZSBpbXBsZW1lbnRzIHRoZSBbW1JhbmdlXV0gaW50ZXJmYWNlLlxyXG4gICAqL1xuICBpc1JhbmdlKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzUGxhaW5PYmplY3QodmFsdWUpICYmIFBvaW50LmlzUG9pbnQodmFsdWUuYW5jaG9yKSAmJiBQb2ludC5pc1BvaW50KHZhbHVlLmZvY3VzKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBJdGVyYXRlIHRocm91Z2ggYWxsIG9mIHRoZSBwb2ludCBlbnRyaWVzIGluIGEgcmFuZ2UuXHJcbiAgICovXG4gICpwb2ludHMocmFuZ2UpIHtcbiAgICB5aWVsZCBbcmFuZ2UuYW5jaG9yLCAnYW5jaG9yJ107XG4gICAgeWllbGQgW3JhbmdlLmZvY3VzLCAnZm9jdXMnXTtcbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIHN0YXJ0IHBvaW50IG9mIGEgcmFuZ2UuXHJcbiAgICovXG4gIHN0YXJ0KHJhbmdlKSB7XG4gICAgdmFyIFtzdGFydF0gPSBSYW5nZS5lZGdlcyhyYW5nZSk7XG4gICAgcmV0dXJuIHN0YXJ0O1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIFRyYW5zZm9ybSBhIHJhbmdlIGJ5IGFuIG9wZXJhdGlvbi5cclxuICAgKi9cbiAgdHJhbnNmb3JtKHJhbmdlLCBvcCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICByZXR1cm4gcHJvZHVjZShyYW5nZSwgciA9PiB7XG4gICAgICBpZiAociA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHtcbiAgICAgICAgYWZmaW5pdHkgPSAnaW53YXJkJ1xuICAgICAgfSA9IG9wdGlvbnM7XG4gICAgICB2YXIgYWZmaW5pdHlBbmNob3I7XG4gICAgICB2YXIgYWZmaW5pdHlGb2N1cztcblxuICAgICAgaWYgKGFmZmluaXR5ID09PSAnaW53YXJkJykge1xuICAgICAgICAvLyBJZiB0aGUgcmFuZ2UgaXMgY29sbGFwc2VkLCBtYWtlIHN1cmUgdG8gdXNlIHRoZSBzYW1lIGFmZmluaXR5IHRvXG4gICAgICAgIC8vIGF2b2lkIHRoZSB0d28gcG9pbnRzIHBhc3NpbmcgZWFjaCBvdGhlciBhbmQgZXhwYW5kaW5nIGluIHRoZSBvcHBvc2l0ZVxuICAgICAgICAvLyBkaXJlY3Rpb25cbiAgICAgICAgdmFyIGlzQ29sbGFwc2VkID0gUmFuZ2UuaXNDb2xsYXBzZWQocik7XG5cbiAgICAgICAgaWYgKFJhbmdlLmlzRm9yd2FyZChyKSkge1xuICAgICAgICAgIGFmZmluaXR5QW5jaG9yID0gJ2ZvcndhcmQnO1xuICAgICAgICAgIGFmZmluaXR5Rm9jdXMgPSBpc0NvbGxhcHNlZCA/IGFmZmluaXR5QW5jaG9yIDogJ2JhY2t3YXJkJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZmZpbml0eUFuY2hvciA9ICdiYWNrd2FyZCc7XG4gICAgICAgICAgYWZmaW5pdHlGb2N1cyA9IGlzQ29sbGFwc2VkID8gYWZmaW5pdHlBbmNob3IgOiAnZm9yd2FyZCc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYWZmaW5pdHkgPT09ICdvdXR3YXJkJykge1xuICAgICAgICBpZiAoUmFuZ2UuaXNGb3J3YXJkKHIpKSB7XG4gICAgICAgICAgYWZmaW5pdHlBbmNob3IgPSAnYmFja3dhcmQnO1xuICAgICAgICAgIGFmZmluaXR5Rm9jdXMgPSAnZm9yd2FyZCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWZmaW5pdHlBbmNob3IgPSAnZm9yd2FyZCc7XG4gICAgICAgICAgYWZmaW5pdHlGb2N1cyA9ICdiYWNrd2FyZCc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFmZmluaXR5QW5jaG9yID0gYWZmaW5pdHk7XG4gICAgICAgIGFmZmluaXR5Rm9jdXMgPSBhZmZpbml0eTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFuY2hvciA9IFBvaW50LnRyYW5zZm9ybShyLmFuY2hvciwgb3AsIHtcbiAgICAgICAgYWZmaW5pdHk6IGFmZmluaXR5QW5jaG9yXG4gICAgICB9KTtcbiAgICAgIHZhciBmb2N1cyA9IFBvaW50LnRyYW5zZm9ybShyLmZvY3VzLCBvcCwge1xuICAgICAgICBhZmZpbml0eTogYWZmaW5pdHlGb2N1c1xuICAgICAgfSk7XG5cbiAgICAgIGlmICghYW5jaG9yIHx8ICFmb2N1cykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgci5hbmNob3IgPSBhbmNob3I7XG4gICAgICByLmZvY3VzID0gZm9jdXM7XG4gICAgfSk7XG4gIH1cblxufTtcblxudmFyIFJhbmdlUmVmID0ge1xuICAvKipcclxuICAgKiBUcmFuc2Zvcm0gdGhlIHJhbmdlIHJlZidzIGN1cnJlbnQgdmFsdWUgYnkgYW4gb3BlcmF0aW9uLlxyXG4gICAqL1xuICB0cmFuc2Zvcm0ocmVmLCBvcCkge1xuICAgIHZhciB7XG4gICAgICBjdXJyZW50LFxuICAgICAgYWZmaW5pdHlcbiAgICB9ID0gcmVmO1xuXG4gICAgaWYgKGN1cnJlbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwYXRoID0gUmFuZ2UudHJhbnNmb3JtKGN1cnJlbnQsIG9wLCB7XG4gICAgICBhZmZpbml0eVxuICAgIH0pO1xuICAgIHJlZi5jdXJyZW50ID0gcGF0aDtcblxuICAgIGlmIChwYXRoID09IG51bGwpIHtcbiAgICAgIHJlZi51bnJlZigpO1xuICAgIH1cbiAgfVxuXG59O1xuXG4vKlxyXG4gIEN1c3RvbSBkZWVwIGVxdWFsIGNvbXBhcmlzb24gZm9yIFNsYXRlIG5vZGVzLlxyXG5cbiAgV2UgZG9uJ3QgbmVlZCBnZW5lcmFsIHB1cnBvc2UgZGVlcCBlcXVhbGl0eTtcclxuICBTbGF0ZSBvbmx5IHN1cHBvcnRzIHBsYWluIHZhbHVlcywgQXJyYXlzLCBhbmQgbmVzdGVkIG9iamVjdHMuXHJcbiAgQ29tcGxleCB2YWx1ZXMgbmVzdGVkIGluc2lkZSBBcnJheXMgYXJlIG5vdCBzdXBwb3J0ZWQuXHJcblxuICBTbGF0ZSBvYmplY3RzIGFyZSBkZXNpZ25lZCB0byBiZSBzZXJpYWxpc2VkLCBzb1xyXG4gIG1pc3Npbmcga2V5cyBhcmUgZGVsaWJlcmF0ZWx5IG5vcm1hbGlzZWQgdG8gdW5kZWZpbmVkLlxyXG4gKi9cblxudmFyIGlzRGVlcEVxdWFsID0gKG5vZGUsIGFub3RoZXIpID0+IHtcbiAgZm9yICh2YXIga2V5IGluIG5vZGUpIHtcbiAgICB2YXIgYSA9IG5vZGVba2V5XTtcbiAgICB2YXIgYiA9IGFub3RoZXJba2V5XTtcblxuICAgIGlmIChpc1BsYWluT2JqZWN0KGEpICYmIGlzUGxhaW5PYmplY3QoYikpIHtcbiAgICAgIGlmICghaXNEZWVwRXF1YWwoYSwgYikpIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYSkgJiYgQXJyYXkuaXNBcnJheShiKSkge1xuICAgICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFbaV0gIT09IGJbaV0pIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChhICE9PSBiKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8qXHJcbiAgICBEZWVwIG9iamVjdCBlcXVhbGl0eSBpcyBvbmx5IG5lY2Vzc2FyeSBpbiBvbmUgZGlyZWN0aW9uOyBpbiB0aGUgcmV2ZXJzZSBkaXJlY3Rpb25cclxuICAgIHdlIGFyZSBvbmx5IGxvb2tpbmcgZm9yIGtleXMgdGhhdCBhcmUgbWlzc2luZy5cclxuICAgIEFzIGFib3ZlLCB1bmRlZmluZWQga2V5cyBhcmUgbm9ybWFsaXNlZCB0byBtaXNzaW5nLlxyXG4gICovXG5cblxuICBmb3IgKHZhciBfa2V5IGluIGFub3RoZXIpIHtcbiAgICBpZiAobm9kZVtfa2V5XSA9PT0gdW5kZWZpbmVkICYmIGFub3RoZXJbX2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxudmFyIF9leGNsdWRlZCQxID0gW1widGV4dFwiXSxcbiAgICBfZXhjbHVkZWQyJDEgPSBbXCJhbmNob3JcIiwgXCJmb2N1c1wiXTtcblxuZnVuY3Rpb24gb3duS2V5cyQ0KG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSB7IHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsgfSBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQ0KHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMkNChPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzJDQoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG52YXIgVGV4dCA9IHtcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgdHdvIHRleHQgbm9kZXMgYXJlIGVxdWFsLlxyXG4gICAqXHJcbiAgICogV2hlbiBsb29zZSBpcyBzZXQsIHRoZSB0ZXh0IGlzIG5vdCBjb21wYXJlZC4gVGhpcyBpc1xyXG4gICAqIHVzZWQgdG8gY2hlY2sgd2hldGhlciBzaWJsaW5nIHRleHQgbm9kZXMgY2FuIGJlIG1lcmdlZC5cclxuICAgKi9cbiAgZXF1YWxzKHRleHQsIGFub3RoZXIpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIHtcbiAgICAgIGxvb3NlID0gZmFsc2VcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIGZ1bmN0aW9uIG9taXRUZXh0KG9iaikge1xuICAgICAgdmFyIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBfZXhjbHVkZWQkMSk7XG5cbiAgICAgIHJldHVybiByZXN0O1xuICAgIH1cblxuICAgIHJldHVybiBpc0RlZXBFcXVhbChsb29zZSA/IG9taXRUZXh0KHRleHQpIDogdGV4dCwgbG9vc2UgPyBvbWl0VGV4dChhbm90aGVyKSA6IGFub3RoZXIpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaW1wbGVtZW50cyB0aGUgYFRleHRgIGludGVyZmFjZS5cclxuICAgKi9cbiAgaXNUZXh0KHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzUGxhaW5PYmplY3QodmFsdWUpICYmIHR5cGVvZiB2YWx1ZS50ZXh0ID09PSAnc3RyaW5nJztcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGlzIGEgbGlzdCBvZiBgVGV4dGAgb2JqZWN0cy5cclxuICAgKi9cbiAgaXNUZXh0TGlzdCh2YWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5ldmVyeSh2YWwgPT4gVGV4dC5pc1RleHQodmFsKSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgc29tZSBwcm9wcyBhcmUgYSBwYXJ0aWFsIG9mIFRleHQuXHJcbiAgICovXG4gIGlzVGV4dFByb3BzKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnRleHQgIT09IHVuZGVmaW5lZDtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhbiB0ZXh0IG1hdGNoZXMgc2V0IG9mIHByb3BlcnRpZXMuXHJcbiAgICpcclxuICAgKiBOb3RlOiB0aGlzIGlzIGZvciBtYXRjaGluZyBjdXN0b20gcHJvcGVydGllcywgYW5kIGl0IGRvZXMgbm90IGVuc3VyZSB0aGF0XHJcbiAgICogdGhlIGB0ZXh0YCBwcm9wZXJ0eSBhcmUgdHdvIG5vZGVzIGVxdWFsLlxyXG4gICAqL1xuICBtYXRjaGVzKHRleHQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICBpZiAoa2V5ID09PSAndGV4dCcpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGV4dC5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8IHRleHRba2V5XSAhPT0gcHJvcHNba2V5XSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBsZWF2ZXMgZm9yIGEgdGV4dCBub2RlIGdpdmVuIGRlY29yYXRpb25zLlxyXG4gICAqL1xuICBkZWNvcmF0aW9ucyhub2RlLCBkZWNvcmF0aW9ucykge1xuICAgIHZhciBsZWF2ZXMgPSBbX29iamVjdFNwcmVhZCQ0KHt9LCBub2RlKV07XG5cbiAgICBmb3IgKHZhciBkZWMgb2YgZGVjb3JhdGlvbnMpIHtcbiAgICAgIHZhciByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKGRlYywgX2V4Y2x1ZGVkMiQxKTtcblxuICAgICAgdmFyIFtzdGFydCwgZW5kXSA9IFJhbmdlLmVkZ2VzKGRlYyk7XG4gICAgICB2YXIgbmV4dCA9IFtdO1xuICAgICAgdmFyIG8gPSAwO1xuXG4gICAgICBmb3IgKHZhciBsZWFmIG9mIGxlYXZlcykge1xuICAgICAgICB2YXIge1xuICAgICAgICAgIGxlbmd0aFxuICAgICAgICB9ID0gbGVhZi50ZXh0O1xuICAgICAgICB2YXIgb2Zmc2V0ID0gbztcbiAgICAgICAgbyArPSBsZW5ndGg7IC8vIElmIHRoZSByYW5nZSBlbmNvbXBhc2VzIHRoZSBlbnRpcmUgbGVhZiwgYWRkIHRoZSByYW5nZS5cblxuICAgICAgICBpZiAoc3RhcnQub2Zmc2V0IDw9IG9mZnNldCAmJiBlbmQub2Zmc2V0ID49IG8pIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKGxlYWYsIHJlc3QpO1xuICAgICAgICAgIG5leHQucHVzaChsZWFmKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSAvLyBJZiB0aGUgcmFuZ2UgZXhwYW5kZWQgYW5kIG1hdGNoIHRoZSBsZWFmLCBvciBzdGFydHMgYWZ0ZXIsIG9yIGVuZHMgYmVmb3JlIGl0LCBjb250aW51ZS5cblxuXG4gICAgICAgIGlmIChzdGFydC5vZmZzZXQgIT09IGVuZC5vZmZzZXQgJiYgKHN0YXJ0Lm9mZnNldCA9PT0gbyB8fCBlbmQub2Zmc2V0ID09PSBvZmZzZXQpIHx8IHN0YXJ0Lm9mZnNldCA+IG8gfHwgZW5kLm9mZnNldCA8IG9mZnNldCB8fCBlbmQub2Zmc2V0ID09PSBvZmZzZXQgJiYgb2Zmc2V0ICE9PSAwKSB7XG4gICAgICAgICAgbmV4dC5wdXNoKGxlYWYpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IC8vIE90aGVyd2lzZSB3ZSBuZWVkIHRvIHNwbGl0IHRoZSBsZWFmLCBhdCB0aGUgc3RhcnQsIGVuZCwgb3IgYm90aCxcbiAgICAgICAgLy8gYW5kIGFkZCB0aGUgcmFuZ2UgdG8gdGhlIG1pZGRsZSBpbnRlcnNlY3Rpbmcgc2VjdGlvbi4gRG8gdGhlIGVuZFxuICAgICAgICAvLyBzcGxpdCBmaXJzdCBzaW5jZSB3ZSBkb24ndCBuZWVkIHRvIHVwZGF0ZSB0aGUgb2Zmc2V0IHRoYXQgd2F5LlxuXG5cbiAgICAgICAgdmFyIG1pZGRsZSA9IGxlYWY7XG4gICAgICAgIHZhciBiZWZvcmUgPSB2b2lkIDA7XG4gICAgICAgIHZhciBhZnRlciA9IHZvaWQgMDtcblxuICAgICAgICBpZiAoZW5kLm9mZnNldCA8IG8pIHtcbiAgICAgICAgICB2YXIgb2ZmID0gZW5kLm9mZnNldCAtIG9mZnNldDtcbiAgICAgICAgICBhZnRlciA9IF9vYmplY3RTcHJlYWQkNChfb2JqZWN0U3ByZWFkJDQoe30sIG1pZGRsZSksIHt9LCB7XG4gICAgICAgICAgICB0ZXh0OiBtaWRkbGUudGV4dC5zbGljZShvZmYpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbWlkZGxlID0gX29iamVjdFNwcmVhZCQ0KF9vYmplY3RTcHJlYWQkNCh7fSwgbWlkZGxlKSwge30sIHtcbiAgICAgICAgICAgIHRleHQ6IG1pZGRsZS50ZXh0LnNsaWNlKDAsIG9mZilcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGFydC5vZmZzZXQgPiBvZmZzZXQpIHtcbiAgICAgICAgICB2YXIgX29mZiA9IHN0YXJ0Lm9mZnNldCAtIG9mZnNldDtcblxuICAgICAgICAgIGJlZm9yZSA9IF9vYmplY3RTcHJlYWQkNChfb2JqZWN0U3ByZWFkJDQoe30sIG1pZGRsZSksIHt9LCB7XG4gICAgICAgICAgICB0ZXh0OiBtaWRkbGUudGV4dC5zbGljZSgwLCBfb2ZmKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG1pZGRsZSA9IF9vYmplY3RTcHJlYWQkNChfb2JqZWN0U3ByZWFkJDQoe30sIG1pZGRsZSksIHt9LCB7XG4gICAgICAgICAgICB0ZXh0OiBtaWRkbGUudGV4dC5zbGljZShfb2ZmKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihtaWRkbGUsIHJlc3QpO1xuXG4gICAgICAgIGlmIChiZWZvcmUpIHtcbiAgICAgICAgICBuZXh0LnB1c2goYmVmb3JlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5leHQucHVzaChtaWRkbGUpO1xuXG4gICAgICAgIGlmIChhZnRlcikge1xuICAgICAgICAgIG5leHQucHVzaChhZnRlcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGVhdmVzID0gbmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVhdmVzO1xuICB9XG5cbn07XG5cbmZ1bmN0aW9uIG93bktleXMkMyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgeyBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IH0ga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkMyh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzJDMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyQzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgYXBwbHlUb0RyYWZ0ID0gKGVkaXRvciwgc2VsZWN0aW9uLCBvcCkgPT4ge1xuICBzd2l0Y2ggKG9wLnR5cGUpIHtcbiAgICBjYXNlICdpbnNlcnRfbm9kZSc6XG4gICAgICB7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICBub2RlXG4gICAgICAgIH0gPSBvcDtcbiAgICAgICAgdmFyIHBhcmVudCA9IE5vZGUucGFyZW50KGVkaXRvciwgcGF0aCk7XG4gICAgICAgIHZhciBpbmRleCA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcblxuICAgICAgICBpZiAoaW5kZXggPiBwYXJlbnQuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGFwcGx5IGFuIFxcXCJpbnNlcnRfbm9kZVxcXCIgb3BlcmF0aW9uIGF0IHBhdGggW1wiLmNvbmNhdChwYXRoLCBcIl0gYmVjYXVzZSB0aGUgZGVzdGluYXRpb24gaXMgcGFzdCB0aGUgZW5kIG9mIHRoZSBub2RlLlwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAwLCBub2RlKTtcblxuICAgICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgICAgZm9yICh2YXIgW3BvaW50LCBrZXldIG9mIFJhbmdlLnBvaW50cyhzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICBzZWxlY3Rpb25ba2V5XSA9IFBvaW50LnRyYW5zZm9ybShwb2ludCwgb3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgY2FzZSAnaW5zZXJ0X3RleHQnOlxuICAgICAge1xuICAgICAgICB2YXIge1xuICAgICAgICAgIHBhdGg6IF9wYXRoLFxuICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICB0ZXh0XG4gICAgICAgIH0gPSBvcDtcbiAgICAgICAgaWYgKHRleHQubGVuZ3RoID09PSAwKSBicmVhaztcblxuICAgICAgICB2YXIgX25vZGUgPSBOb2RlLmxlYWYoZWRpdG9yLCBfcGF0aCk7XG5cbiAgICAgICAgdmFyIGJlZm9yZSA9IF9ub2RlLnRleHQuc2xpY2UoMCwgb2Zmc2V0KTtcblxuICAgICAgICB2YXIgYWZ0ZXIgPSBfbm9kZS50ZXh0LnNsaWNlKG9mZnNldCk7XG5cbiAgICAgICAgX25vZGUudGV4dCA9IGJlZm9yZSArIHRleHQgKyBhZnRlcjtcblxuICAgICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgICAgZm9yICh2YXIgW19wb2ludCwgX2tleV0gb2YgUmFuZ2UucG9pbnRzKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbltfa2V5XSA9IFBvaW50LnRyYW5zZm9ybShfcG9pbnQsIG9wKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIGNhc2UgJ21lcmdlX25vZGUnOlxuICAgICAge1xuICAgICAgICB2YXIge1xuICAgICAgICAgIHBhdGg6IF9wYXRoMlxuICAgICAgICB9ID0gb3A7XG5cbiAgICAgICAgdmFyIF9ub2RlMiA9IE5vZGUuZ2V0KGVkaXRvciwgX3BhdGgyKTtcblxuICAgICAgICB2YXIgcHJldlBhdGggPSBQYXRoLnByZXZpb3VzKF9wYXRoMik7XG4gICAgICAgIHZhciBwcmV2ID0gTm9kZS5nZXQoZWRpdG9yLCBwcmV2UGF0aCk7XG5cbiAgICAgICAgdmFyIF9wYXJlbnQgPSBOb2RlLnBhcmVudChlZGl0b3IsIF9wYXRoMik7XG5cbiAgICAgICAgdmFyIF9pbmRleCA9IF9wYXRoMltfcGF0aDIubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgaWYgKFRleHQuaXNUZXh0KF9ub2RlMikgJiYgVGV4dC5pc1RleHQocHJldikpIHtcbiAgICAgICAgICBwcmV2LnRleHQgKz0gX25vZGUyLnRleHQ7XG4gICAgICAgIH0gZWxzZSBpZiAoIVRleHQuaXNUZXh0KF9ub2RlMikgJiYgIVRleHQuaXNUZXh0KHByZXYpKSB7XG4gICAgICAgICAgcHJldi5jaGlsZHJlbi5wdXNoKC4uLl9ub2RlMi5jaGlsZHJlbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGFwcGx5IGEgXFxcIm1lcmdlX25vZGVcXFwiIG9wZXJhdGlvbiBhdCBwYXRoIFtcIi5jb25jYXQoX3BhdGgyLCBcIl0gdG8gbm9kZXMgb2YgZGlmZmVyZW50IGludGVyZmFjZXM6IFwiKS5jb25jYXQoX25vZGUyLCBcIiBcIikuY29uY2F0KHByZXYpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9wYXJlbnQuY2hpbGRyZW4uc3BsaWNlKF9pbmRleCwgMSk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgIGZvciAodmFyIFtfcG9pbnQyLCBfa2V5Ml0gb2YgUmFuZ2UucG9pbnRzKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbltfa2V5Ml0gPSBQb2ludC50cmFuc2Zvcm0oX3BvaW50Miwgb3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgY2FzZSAnbW92ZV9ub2RlJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBwYXRoOiBfcGF0aDMsXG4gICAgICAgICAgbmV3UGF0aFxuICAgICAgICB9ID0gb3A7XG5cbiAgICAgICAgaWYgKFBhdGguaXNBbmNlc3RvcihfcGF0aDMsIG5ld1BhdGgpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IG1vdmUgYSBwYXRoIFtcIi5jb25jYXQoX3BhdGgzLCBcIl0gdG8gbmV3IHBhdGggW1wiKS5jb25jYXQobmV3UGF0aCwgXCJdIGJlY2F1c2UgdGhlIGRlc3RpbmF0aW9uIGlzIGluc2lkZSBpdHNlbGYuXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfbm9kZTMgPSBOb2RlLmdldChlZGl0b3IsIF9wYXRoMyk7XG5cbiAgICAgICAgdmFyIF9wYXJlbnQyID0gTm9kZS5wYXJlbnQoZWRpdG9yLCBfcGF0aDMpO1xuXG4gICAgICAgIHZhciBfaW5kZXgyID0gX3BhdGgzW19wYXRoMy5sZW5ndGggLSAxXTsgLy8gVGhpcyBpcyB0cmlja3ksIGJ1dCBzaW5jZSB0aGUgYHBhdGhgIGFuZCBgbmV3UGF0aGAgYm90aCByZWZlciB0b1xuICAgICAgICAvLyB0aGUgc2FtZSBzbmFwc2hvdCBpbiB0aW1lLCB0aGVyZSdzIGEgbWlzbWF0Y2guIEFmdGVyIGVpdGhlclxuICAgICAgICAvLyByZW1vdmluZyB0aGUgb3JpZ2luYWwgcG9zaXRpb24sIHRoZSBzZWNvbmQgc3RlcCdzIHBhdGggY2FuIGJlIG91dFxuICAgICAgICAvLyBvZiBkYXRlLiBTbyBpbnN0ZWFkIG9mIHVzaW5nIHRoZSBgb3AubmV3UGF0aGAgZGlyZWN0bHksIHdlXG4gICAgICAgIC8vIHRyYW5zZm9ybSBgb3AucGF0aGAgdG8gYXNjZXJ0YWluIHdoYXQgdGhlIGBuZXdQYXRoYCB3b3VsZCBiZSBhZnRlclxuICAgICAgICAvLyB0aGUgb3BlcmF0aW9uIHdhcyBhcHBsaWVkLlxuXG4gICAgICAgIF9wYXJlbnQyLmNoaWxkcmVuLnNwbGljZShfaW5kZXgyLCAxKTtcblxuICAgICAgICB2YXIgdHJ1ZVBhdGggPSBQYXRoLnRyYW5zZm9ybShfcGF0aDMsIG9wKTtcbiAgICAgICAgdmFyIG5ld1BhcmVudCA9IE5vZGUuZ2V0KGVkaXRvciwgUGF0aC5wYXJlbnQodHJ1ZVBhdGgpKTtcbiAgICAgICAgdmFyIG5ld0luZGV4ID0gdHJ1ZVBhdGhbdHJ1ZVBhdGgubGVuZ3RoIC0gMV07XG4gICAgICAgIG5ld1BhcmVudC5jaGlsZHJlbi5zcGxpY2UobmV3SW5kZXgsIDAsIF9ub2RlMyk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgIGZvciAodmFyIFtfcG9pbnQzLCBfa2V5M10gb2YgUmFuZ2UucG9pbnRzKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbltfa2V5M10gPSBQb2ludC50cmFuc2Zvcm0oX3BvaW50Mywgb3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgY2FzZSAncmVtb3ZlX25vZGUnOlxuICAgICAge1xuICAgICAgICB2YXIge1xuICAgICAgICAgIHBhdGg6IF9wYXRoNFxuICAgICAgICB9ID0gb3A7XG4gICAgICAgIHZhciBfaW5kZXgzID0gX3BhdGg0W19wYXRoNC5sZW5ndGggLSAxXTtcblxuICAgICAgICB2YXIgX3BhcmVudDMgPSBOb2RlLnBhcmVudChlZGl0b3IsIF9wYXRoNCk7XG5cbiAgICAgICAgX3BhcmVudDMuY2hpbGRyZW4uc3BsaWNlKF9pbmRleDMsIDEpOyAvLyBUcmFuc2Zvcm0gYWxsIG9mIHRoZSBwb2ludHMgaW4gdGhlIHZhbHVlLCBidXQgaWYgdGhlIHBvaW50IHdhcyBpbiB0aGVcbiAgICAgICAgLy8gbm9kZSB0aGF0IHdhcyByZW1vdmVkIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSByYW5nZSBvciByZW1vdmUgaXQuXG5cblxuICAgICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgICAgZm9yICh2YXIgW19wb2ludDQsIF9rZXk0XSBvZiBSYW5nZS5wb2ludHMoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFBvaW50LnRyYW5zZm9ybShfcG9pbnQ0LCBvcCk7XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24gIT0gbnVsbCAmJiByZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICBzZWxlY3Rpb25bX2tleTRdID0gcmVzdWx0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIF9wcmV2ID0gdm9pZCAwO1xuXG4gICAgICAgICAgICAgIHZhciBuZXh0ID0gdm9pZCAwO1xuXG4gICAgICAgICAgICAgIGZvciAodmFyIFtuLCBwXSBvZiBOb2RlLnRleHRzKGVkaXRvcikpIHtcbiAgICAgICAgICAgICAgICBpZiAoUGF0aC5jb21wYXJlKHAsIF9wYXRoNCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICBfcHJldiA9IFtuLCBwXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbmV4dCA9IFtuLCBwXTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHZhciBwcmVmZXJOZXh0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgaWYgKF9wcmV2ICYmIG5leHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoUGF0aC5lcXVhbHMobmV4dFsxXSwgX3BhdGg0KSkge1xuICAgICAgICAgICAgICAgICAgcHJlZmVyTmV4dCA9ICFQYXRoLmhhc1ByZXZpb3VzKG5leHRbMV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBwcmVmZXJOZXh0ID0gUGF0aC5jb21tb24oX3ByZXZbMV0sIF9wYXRoNCkubGVuZ3RoIDwgUGF0aC5jb21tb24obmV4dFsxXSwgX3BhdGg0KS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKF9wcmV2ICYmICFwcmVmZXJOZXh0KSB7XG4gICAgICAgICAgICAgICAgX3BvaW50NC5wYXRoID0gX3ByZXZbMV07XG4gICAgICAgICAgICAgICAgX3BvaW50NC5vZmZzZXQgPSBfcHJldlswXS50ZXh0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0KSB7XG4gICAgICAgICAgICAgICAgX3BvaW50NC5wYXRoID0gbmV4dFsxXTtcbiAgICAgICAgICAgICAgICBfcG9pbnQ0Lm9mZnNldCA9IDA7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgY2FzZSAncmVtb3ZlX3RleHQnOlxuICAgICAge1xuICAgICAgICB2YXIge1xuICAgICAgICAgIHBhdGg6IF9wYXRoNSxcbiAgICAgICAgICBvZmZzZXQ6IF9vZmZzZXQsXG4gICAgICAgICAgdGV4dDogX3RleHRcbiAgICAgICAgfSA9IG9wO1xuICAgICAgICBpZiAoX3RleHQubGVuZ3RoID09PSAwKSBicmVhaztcblxuICAgICAgICB2YXIgX25vZGU0ID0gTm9kZS5sZWFmKGVkaXRvciwgX3BhdGg1KTtcblxuICAgICAgICB2YXIgX2JlZm9yZSA9IF9ub2RlNC50ZXh0LnNsaWNlKDAsIF9vZmZzZXQpO1xuXG4gICAgICAgIHZhciBfYWZ0ZXIgPSBfbm9kZTQudGV4dC5zbGljZShfb2Zmc2V0ICsgX3RleHQubGVuZ3RoKTtcblxuICAgICAgICBfbm9kZTQudGV4dCA9IF9iZWZvcmUgKyBfYWZ0ZXI7XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgIGZvciAodmFyIFtfcG9pbnQ1LCBfa2V5NV0gb2YgUmFuZ2UucG9pbnRzKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbltfa2V5NV0gPSBQb2ludC50cmFuc2Zvcm0oX3BvaW50NSwgb3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgY2FzZSAnc2V0X25vZGUnOlxuICAgICAge1xuICAgICAgICB2YXIge1xuICAgICAgICAgIHBhdGg6IF9wYXRoNixcbiAgICAgICAgICBwcm9wZXJ0aWVzLFxuICAgICAgICAgIG5ld1Byb3BlcnRpZXNcbiAgICAgICAgfSA9IG9wO1xuXG4gICAgICAgIGlmIChfcGF0aDYubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHNldCBwcm9wZXJ0aWVzIG9uIHRoZSByb290IG5vZGUhXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9ub2RlNSA9IE5vZGUuZ2V0KGVkaXRvciwgX3BhdGg2KTtcblxuICAgICAgICBmb3IgKHZhciBfa2V5NiBpbiBuZXdQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgaWYgKF9rZXk2ID09PSAnY2hpbGRyZW4nIHx8IF9rZXk2ID09PSAndGV4dCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBzZXQgdGhlIFxcXCJcIi5jb25jYXQoX2tleTYsIFwiXFxcIiBwcm9wZXJ0eSBvZiBub2RlcyFcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciB2YWx1ZSA9IG5ld1Byb3BlcnRpZXNbX2tleTZdO1xuXG4gICAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBfbm9kZTVbX2tleTZdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfbm9kZTVbX2tleTZdID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIHByb3BlcnRpZXMgdGhhdCB3ZXJlIHByZXZpb3VzbHkgZGVmaW5lZCwgYnV0IGFyZSBub3cgbWlzc2luZywgbXVzdCBiZSBkZWxldGVkXG5cblxuICAgICAgICBmb3IgKHZhciBfa2V5NyBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgaWYgKCFuZXdQcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KF9rZXk3KSkge1xuICAgICAgICAgICAgZGVsZXRlIF9ub2RlNVtfa2V5N107XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICBjYXNlICdzZXRfc2VsZWN0aW9uJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBuZXdQcm9wZXJ0aWVzOiBfbmV3UHJvcGVydGllc1xuICAgICAgICB9ID0gb3A7XG5cbiAgICAgICAgaWYgKF9uZXdQcm9wZXJ0aWVzID09IG51bGwpIHtcbiAgICAgICAgICBzZWxlY3Rpb24gPSBfbmV3UHJvcGVydGllcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoc2VsZWN0aW9uID09IG51bGwpIHtcbiAgICAgICAgICAgIGlmICghUmFuZ2UuaXNSYW5nZShfbmV3UHJvcGVydGllcykpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGFwcGx5IGFuIGluY29tcGxldGUgXFxcInNldF9zZWxlY3Rpb25cXFwiIG9wZXJhdGlvbiBwcm9wZXJ0aWVzIFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShfbmV3UHJvcGVydGllcyksIFwiIHdoZW4gdGhlcmUgaXMgbm8gY3VycmVudCBzZWxlY3Rpb24uXCIpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZWN0aW9uID0gX29iamVjdFNwcmVhZCQzKHt9LCBfbmV3UHJvcGVydGllcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9yICh2YXIgX2tleTggaW4gX25ld1Byb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIHZhciBfdmFsdWUgPSBfbmV3UHJvcGVydGllc1tfa2V5OF07XG5cbiAgICAgICAgICAgIGlmIChfdmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICBpZiAoX2tleTggPT09ICdhbmNob3InIHx8IF9rZXk4ID09PSAnZm9jdXMnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHJlbW92ZSB0aGUgXFxcIlwiLmNvbmNhdChfa2V5OCwgXCJcXFwiIHNlbGVjdGlvbiBwcm9wZXJ0eVwiKSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBkZWxldGUgc2VsZWN0aW9uW19rZXk4XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNlbGVjdGlvbltfa2V5OF0gPSBfdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICBjYXNlICdzcGxpdF9ub2RlJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBwYXRoOiBfcGF0aDcsXG4gICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgcHJvcGVydGllczogX3Byb3BlcnRpZXNcbiAgICAgICAgfSA9IG9wO1xuXG4gICAgICAgIGlmIChfcGF0aDcubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGFwcGx5IGEgXFxcInNwbGl0X25vZGVcXFwiIG9wZXJhdGlvbiBhdCBwYXRoIFtcIi5jb25jYXQoX3BhdGg3LCBcIl0gYmVjYXVzZSB0aGUgcm9vdCBub2RlIGNhbm5vdCBiZSBzcGxpdC5cIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9ub2RlNiA9IE5vZGUuZ2V0KGVkaXRvciwgX3BhdGg3KTtcblxuICAgICAgICB2YXIgX3BhcmVudDQgPSBOb2RlLnBhcmVudChlZGl0b3IsIF9wYXRoNyk7XG5cbiAgICAgICAgdmFyIF9pbmRleDQgPSBfcGF0aDdbX3BhdGg3Lmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgbmV3Tm9kZTtcblxuICAgICAgICBpZiAoVGV4dC5pc1RleHQoX25vZGU2KSkge1xuICAgICAgICAgIHZhciBfYmVmb3JlMiA9IF9ub2RlNi50ZXh0LnNsaWNlKDAsIHBvc2l0aW9uKTtcblxuICAgICAgICAgIHZhciBfYWZ0ZXIyID0gX25vZGU2LnRleHQuc2xpY2UocG9zaXRpb24pO1xuXG4gICAgICAgICAgX25vZGU2LnRleHQgPSBfYmVmb3JlMjtcbiAgICAgICAgICBuZXdOb2RlID0gX29iamVjdFNwcmVhZCQzKF9vYmplY3RTcHJlYWQkMyh7fSwgX3Byb3BlcnRpZXMpLCB7fSwge1xuICAgICAgICAgICAgdGV4dDogX2FmdGVyMlxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBfYmVmb3JlMyA9IF9ub2RlNi5jaGlsZHJlbi5zbGljZSgwLCBwb3NpdGlvbik7XG5cbiAgICAgICAgICB2YXIgX2FmdGVyMyA9IF9ub2RlNi5jaGlsZHJlbi5zbGljZShwb3NpdGlvbik7XG5cbiAgICAgICAgICBfbm9kZTYuY2hpbGRyZW4gPSBfYmVmb3JlMztcbiAgICAgICAgICBuZXdOb2RlID0gX29iamVjdFNwcmVhZCQzKF9vYmplY3RTcHJlYWQkMyh7fSwgX3Byb3BlcnRpZXMpLCB7fSwge1xuICAgICAgICAgICAgY2hpbGRyZW46IF9hZnRlcjNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9wYXJlbnQ0LmNoaWxkcmVuLnNwbGljZShfaW5kZXg0ICsgMSwgMCwgbmV3Tm9kZSk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgIGZvciAodmFyIFtfcG9pbnQ2LCBfa2V5OV0gb2YgUmFuZ2UucG9pbnRzKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbltfa2V5OV0gPSBQb2ludC50cmFuc2Zvcm0oX3BvaW50Niwgb3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICB9XG5cbiAgcmV0dXJuIHNlbGVjdGlvbjtcbn07XG5cbnZhciBHZW5lcmFsVHJhbnNmb3JtcyA9IHtcbiAgLyoqXHJcbiAgICogVHJhbnNmb3JtIHRoZSBlZGl0b3IgYnkgYW4gb3BlcmF0aW9uLlxyXG4gICAqL1xuICB0cmFuc2Zvcm0oZWRpdG9yLCBvcCkge1xuICAgIGVkaXRvci5jaGlsZHJlbiA9IGNyZWF0ZURyYWZ0KGVkaXRvci5jaGlsZHJlbik7XG4gICAgdmFyIHNlbGVjdGlvbiA9IGVkaXRvci5zZWxlY3Rpb24gJiYgY3JlYXRlRHJhZnQoZWRpdG9yLnNlbGVjdGlvbik7XG5cbiAgICB0cnkge1xuICAgICAgc2VsZWN0aW9uID0gYXBwbHlUb0RyYWZ0KGVkaXRvciwgc2VsZWN0aW9uLCBvcCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGVkaXRvci5jaGlsZHJlbiA9IGZpbmlzaERyYWZ0KGVkaXRvci5jaGlsZHJlbik7XG5cbiAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgZWRpdG9yLnNlbGVjdGlvbiA9IGlzRHJhZnQoc2VsZWN0aW9uKSA/IGZpbmlzaERyYWZ0KHNlbGVjdGlvbikgOiBzZWxlY3Rpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlZGl0b3Iuc2VsZWN0aW9uID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufTtcblxudmFyIF9leGNsdWRlZCA9IFtcInRleHRcIl0sXG4gICAgX2V4Y2x1ZGVkMiA9IFtcImNoaWxkcmVuXCJdO1xuXG5mdW5jdGlvbiBvd25LZXlzJDIob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDIodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQyKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkMihPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cbnZhciBOb2RlVHJhbnNmb3JtcyA9IHtcbiAgLyoqXHJcbiAgICogSW5zZXJ0IG5vZGVzIGF0IGEgc3BlY2lmaWMgbG9jYXRpb24gaW4gdGhlIEVkaXRvci5cclxuICAgKi9cbiAgaW5zZXJ0Tm9kZXMoZWRpdG9yLCBub2Rlcykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICBFZGl0b3Iud2l0aG91dE5vcm1hbGl6aW5nKGVkaXRvciwgKCkgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgaGFuZ2luZyA9IGZhbHNlLFxuICAgICAgICB2b2lkcyA9IGZhbHNlLFxuICAgICAgICBtb2RlID0gJ2xvd2VzdCdcbiAgICAgIH0gPSBvcHRpb25zO1xuICAgICAgdmFyIHtcbiAgICAgICAgYXQsXG4gICAgICAgIG1hdGNoLFxuICAgICAgICBzZWxlY3RcbiAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgICBpZiAoTm9kZS5pc05vZGUobm9kZXMpKSB7XG4gICAgICAgIG5vZGVzID0gW25vZGVzXTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBbbm9kZV0gPSBub2RlczsgLy8gQnkgZGVmYXVsdCwgdXNlIHRoZSBzZWxlY3Rpb24gYXMgdGhlIHRhcmdldCBsb2NhdGlvbi4gQnV0IGlmIHRoZXJlIGlzXG4gICAgICAvLyBubyBzZWxlY3Rpb24sIGluc2VydCBhdCB0aGUgZW5kIG9mIHRoZSBkb2N1bWVudCBzaW5jZSB0aGF0IGlzIHN1Y2ggYVxuICAgICAgLy8gY29tbW9uIHVzZSBjYXNlIHdoZW4gaW5zZXJ0aW5nIGZyb20gYSBub24tc2VsZWN0ZWQgc3RhdGUuXG5cbiAgICAgIGlmICghYXQpIHtcbiAgICAgICAgaWYgKGVkaXRvci5zZWxlY3Rpb24pIHtcbiAgICAgICAgICBhdCA9IGVkaXRvci5zZWxlY3Rpb247XG4gICAgICAgIH0gZWxzZSBpZiAoZWRpdG9yLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBhdCA9IEVkaXRvci5lbmQoZWRpdG9yLCBbXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXQgPSBbMF07XG4gICAgICAgIH1cblxuICAgICAgICBzZWxlY3QgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZWN0ID09IG51bGwpIHtcbiAgICAgICAgc2VsZWN0ID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChSYW5nZS5pc1JhbmdlKGF0KSkge1xuICAgICAgICBpZiAoIWhhbmdpbmcpIHtcbiAgICAgICAgICBhdCA9IEVkaXRvci51bmhhbmdSYW5nZShlZGl0b3IsIGF0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChSYW5nZS5pc0NvbGxhcHNlZChhdCkpIHtcbiAgICAgICAgICBhdCA9IGF0LmFuY2hvcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgWywgZW5kXSA9IFJhbmdlLmVkZ2VzKGF0KTtcbiAgICAgICAgICB2YXIgcG9pbnRSZWYgPSBFZGl0b3IucG9pbnRSZWYoZWRpdG9yLCBlbmQpO1xuICAgICAgICAgIFRyYW5zZm9ybXMuZGVsZXRlKGVkaXRvciwge1xuICAgICAgICAgICAgYXRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhdCA9IHBvaW50UmVmLnVucmVmKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFBvaW50LmlzUG9pbnQoYXQpKSB7XG4gICAgICAgIGlmIChtYXRjaCA9PSBudWxsKSB7XG4gICAgICAgICAgaWYgKFRleHQuaXNUZXh0KG5vZGUpKSB7XG4gICAgICAgICAgICBtYXRjaCA9IG4gPT4gVGV4dC5pc1RleHQobik7XG4gICAgICAgICAgfSBlbHNlIGlmIChlZGl0b3IuaXNJbmxpbmUobm9kZSkpIHtcbiAgICAgICAgICAgIG1hdGNoID0gbiA9PiBUZXh0LmlzVGV4dChuKSB8fCBFZGl0b3IuaXNJbmxpbmUoZWRpdG9yLCBuKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWF0Y2ggPSBuID0+IEVkaXRvci5pc0Jsb2NrKGVkaXRvciwgbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIFtlbnRyeV0gPSBFZGl0b3Iubm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgYXQ6IGF0LnBhdGgsXG4gICAgICAgICAgbWF0Y2gsXG4gICAgICAgICAgbW9kZSxcbiAgICAgICAgICB2b2lkc1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICB2YXIgWywgX21hdGNoUGF0aF0gPSBlbnRyeTtcbiAgICAgICAgICB2YXIgcGF0aFJlZiA9IEVkaXRvci5wYXRoUmVmKGVkaXRvciwgX21hdGNoUGF0aCk7XG4gICAgICAgICAgdmFyIGlzQXRFbmQgPSBFZGl0b3IuaXNFbmQoZWRpdG9yLCBhdCwgX21hdGNoUGF0aCk7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5zcGxpdE5vZGVzKGVkaXRvciwge1xuICAgICAgICAgICAgYXQsXG4gICAgICAgICAgICBtYXRjaCxcbiAgICAgICAgICAgIG1vZGUsXG4gICAgICAgICAgICB2b2lkc1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhciBwYXRoID0gcGF0aFJlZi51bnJlZigpO1xuICAgICAgICAgIGF0ID0gaXNBdEVuZCA/IFBhdGgubmV4dChwYXRoKSA6IHBhdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBwYXJlbnRQYXRoID0gUGF0aC5wYXJlbnQoYXQpO1xuICAgICAgdmFyIGluZGV4ID0gYXRbYXQubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmICghdm9pZHMgJiYgRWRpdG9yLnZvaWQoZWRpdG9yLCB7XG4gICAgICAgIGF0OiBwYXJlbnRQYXRoXG4gICAgICB9KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIF9ub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIHZhciBfcGF0aCA9IHBhcmVudFBhdGguY29uY2F0KGluZGV4KTtcblxuICAgICAgICBpbmRleCsrO1xuICAgICAgICBlZGl0b3IuYXBwbHkoe1xuICAgICAgICAgIHR5cGU6ICdpbnNlcnRfbm9kZScsXG4gICAgICAgICAgcGF0aDogX3BhdGgsXG4gICAgICAgICAgbm9kZTogX25vZGVcbiAgICAgICAgfSk7XG4gICAgICAgIGF0ID0gUGF0aC5uZXh0KGF0KTtcbiAgICAgIH1cblxuICAgICAgYXQgPSBQYXRoLnByZXZpb3VzKGF0KTtcblxuICAgICAgaWYgKHNlbGVjdCkge1xuICAgICAgICB2YXIgcG9pbnQgPSBFZGl0b3IuZW5kKGVkaXRvciwgYXQpO1xuXG4gICAgICAgIGlmIChwb2ludCkge1xuICAgICAgICAgIFRyYW5zZm9ybXMuc2VsZWN0KGVkaXRvciwgcG9pbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogTGlmdCBub2RlcyBhdCBhIHNwZWNpZmljIGxvY2F0aW9uIHVwd2FyZHMgaW4gdGhlIGRvY3VtZW50IHRyZWUsIHNwbGl0dGluZ1xyXG4gICAqIHRoZWlyIHBhcmVudCBpbiB0d28gaWYgbmVjZXNzYXJ5LlxyXG4gICAqL1xuICBsaWZ0Tm9kZXMoZWRpdG9yKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIEVkaXRvci53aXRob3V0Tm9ybWFsaXppbmcoZWRpdG9yLCAoKSA9PiB7XG4gICAgICB2YXIge1xuICAgICAgICBhdCA9IGVkaXRvci5zZWxlY3Rpb24sXG4gICAgICAgIG1vZGUgPSAnbG93ZXN0JyxcbiAgICAgICAgdm9pZHMgPSBmYWxzZVxuICAgICAgfSA9IG9wdGlvbnM7XG4gICAgICB2YXIge1xuICAgICAgICBtYXRjaFxuICAgICAgfSA9IG9wdGlvbnM7XG5cbiAgICAgIGlmIChtYXRjaCA9PSBudWxsKSB7XG4gICAgICAgIG1hdGNoID0gUGF0aC5pc1BhdGgoYXQpID8gbWF0Y2hQYXRoKGVkaXRvciwgYXQpIDogbiA9PiBFZGl0b3IuaXNCbG9jayhlZGl0b3IsIG4pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWF0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG1hdGNoZXMgPSBFZGl0b3Iubm9kZXMoZWRpdG9yLCB7XG4gICAgICAgIGF0LFxuICAgICAgICBtYXRjaCxcbiAgICAgICAgbW9kZSxcbiAgICAgICAgdm9pZHNcbiAgICAgIH0pO1xuICAgICAgdmFyIHBhdGhSZWZzID0gQXJyYXkuZnJvbShtYXRjaGVzLCBfcmVmID0+IHtcbiAgICAgICAgdmFyIFssIHBdID0gX3JlZjtcbiAgICAgICAgcmV0dXJuIEVkaXRvci5wYXRoUmVmKGVkaXRvciwgcCk7XG4gICAgICB9KTtcblxuICAgICAgZm9yICh2YXIgcGF0aFJlZiBvZiBwYXRoUmVmcykge1xuICAgICAgICB2YXIgcGF0aCA9IHBhdGhSZWYudW5yZWYoKTtcblxuICAgICAgICBpZiAocGF0aC5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGxpZnQgbm9kZSBhdCBhIHBhdGggW1wiLmNvbmNhdChwYXRoLCBcIl0gYmVjYXVzZSBpdCBoYXMgYSBkZXB0aCBvZiBsZXNzIHRoYW4gYDJgLlwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGFyZW50Tm9kZUVudHJ5ID0gRWRpdG9yLm5vZGUoZWRpdG9yLCBQYXRoLnBhcmVudChwYXRoKSk7XG4gICAgICAgIHZhciBbcGFyZW50LCBwYXJlbnRQYXRoXSA9IHBhcmVudE5vZGVFbnRyeTtcbiAgICAgICAgdmFyIGluZGV4ID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIge1xuICAgICAgICAgIGxlbmd0aFxuICAgICAgICB9ID0gcGFyZW50LmNoaWxkcmVuO1xuXG4gICAgICAgIGlmIChsZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB2YXIgdG9QYXRoID0gUGF0aC5uZXh0KHBhcmVudFBhdGgpO1xuICAgICAgICAgIFRyYW5zZm9ybXMubW92ZU5vZGVzKGVkaXRvciwge1xuICAgICAgICAgICAgYXQ6IHBhdGgsXG4gICAgICAgICAgICB0bzogdG9QYXRoLFxuICAgICAgICAgICAgdm9pZHNcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBUcmFuc2Zvcm1zLnJlbW92ZU5vZGVzKGVkaXRvciwge1xuICAgICAgICAgICAgYXQ6IHBhcmVudFBhdGgsXG4gICAgICAgICAgICB2b2lkc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5tb3ZlTm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgICBhdDogcGF0aCxcbiAgICAgICAgICAgIHRvOiBwYXJlbnRQYXRoLFxuICAgICAgICAgICAgdm9pZHNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gbGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHZhciBfdG9QYXRoID0gUGF0aC5uZXh0KHBhcmVudFBhdGgpO1xuXG4gICAgICAgICAgVHJhbnNmb3Jtcy5tb3ZlTm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgICBhdDogcGF0aCxcbiAgICAgICAgICAgIHRvOiBfdG9QYXRoLFxuICAgICAgICAgICAgdm9pZHNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgc3BsaXRQYXRoID0gUGF0aC5uZXh0KHBhdGgpO1xuXG4gICAgICAgICAgdmFyIF90b1BhdGgyID0gUGF0aC5uZXh0KHBhcmVudFBhdGgpO1xuXG4gICAgICAgICAgVHJhbnNmb3Jtcy5zcGxpdE5vZGVzKGVkaXRvciwge1xuICAgICAgICAgICAgYXQ6IHNwbGl0UGF0aCxcbiAgICAgICAgICAgIHZvaWRzXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5tb3ZlTm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgICBhdDogcGF0aCxcbiAgICAgICAgICAgIHRvOiBfdG9QYXRoMixcbiAgICAgICAgICAgIHZvaWRzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvKipcclxuICAgKiBNZXJnZSBhIG5vZGUgYXQgYSBsb2NhdGlvbiB3aXRoIHRoZSBwcmV2aW91cyBub2RlIG9mIHRoZSBzYW1lIGRlcHRoLFxyXG4gICAqIHJlbW92aW5nIGFueSBlbXB0eSBjb250YWluaW5nIG5vZGVzIGFmdGVyIHRoZSBtZXJnZSBpZiBuZWNlc3NhcnkuXHJcbiAgICovXG4gIG1lcmdlTm9kZXMoZWRpdG9yKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIEVkaXRvci53aXRob3V0Tm9ybWFsaXppbmcoZWRpdG9yLCAoKSA9PiB7XG4gICAgICB2YXIge1xuICAgICAgICBtYXRjaCxcbiAgICAgICAgYXQgPSBlZGl0b3Iuc2VsZWN0aW9uXG4gICAgICB9ID0gb3B0aW9ucztcbiAgICAgIHZhciB7XG4gICAgICAgIGhhbmdpbmcgPSBmYWxzZSxcbiAgICAgICAgdm9pZHMgPSBmYWxzZSxcbiAgICAgICAgbW9kZSA9ICdsb3dlc3QnXG4gICAgICB9ID0gb3B0aW9ucztcblxuICAgICAgaWYgKCFhdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXRjaCA9PSBudWxsKSB7XG4gICAgICAgIGlmIChQYXRoLmlzUGF0aChhdCkpIHtcbiAgICAgICAgICB2YXIgW3BhcmVudF0gPSBFZGl0b3IucGFyZW50KGVkaXRvciwgYXQpO1xuXG4gICAgICAgICAgbWF0Y2ggPSBuID0+IHBhcmVudC5jaGlsZHJlbi5pbmNsdWRlcyhuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXRjaCA9IG4gPT4gRWRpdG9yLmlzQmxvY2soZWRpdG9yLCBuKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWhhbmdpbmcgJiYgUmFuZ2UuaXNSYW5nZShhdCkpIHtcbiAgICAgICAgYXQgPSBFZGl0b3IudW5oYW5nUmFuZ2UoZWRpdG9yLCBhdCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChSYW5nZS5pc1JhbmdlKGF0KSkge1xuICAgICAgICBpZiAoUmFuZ2UuaXNDb2xsYXBzZWQoYXQpKSB7XG4gICAgICAgICAgYXQgPSBhdC5hbmNob3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIFssIGVuZF0gPSBSYW5nZS5lZGdlcyhhdCk7XG4gICAgICAgICAgdmFyIHBvaW50UmVmID0gRWRpdG9yLnBvaW50UmVmKGVkaXRvciwgZW5kKTtcbiAgICAgICAgICBUcmFuc2Zvcm1zLmRlbGV0ZShlZGl0b3IsIHtcbiAgICAgICAgICAgIGF0XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYXQgPSBwb2ludFJlZi51bnJlZigpO1xuXG4gICAgICAgICAgaWYgKG9wdGlvbnMuYXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgVHJhbnNmb3Jtcy5zZWxlY3QoZWRpdG9yLCBhdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBbY3VycmVudF0gPSBFZGl0b3Iubm9kZXMoZWRpdG9yLCB7XG4gICAgICAgIGF0LFxuICAgICAgICBtYXRjaCxcbiAgICAgICAgdm9pZHMsXG4gICAgICAgIG1vZGVcbiAgICAgIH0pO1xuICAgICAgdmFyIHByZXYgPSBFZGl0b3IucHJldmlvdXMoZWRpdG9yLCB7XG4gICAgICAgIGF0LFxuICAgICAgICBtYXRjaCxcbiAgICAgICAgdm9pZHMsXG4gICAgICAgIG1vZGVcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWN1cnJlbnQgfHwgIXByZXYpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgW25vZGUsIHBhdGhdID0gY3VycmVudDtcbiAgICAgIHZhciBbcHJldk5vZGUsIHByZXZQYXRoXSA9IHByZXY7XG5cbiAgICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCB8fCBwcmV2UGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3UGF0aCA9IFBhdGgubmV4dChwcmV2UGF0aCk7XG4gICAgICB2YXIgY29tbW9uUGF0aCA9IFBhdGguY29tbW9uKHBhdGgsIHByZXZQYXRoKTtcbiAgICAgIHZhciBpc1ByZXZpb3VzU2libGluZyA9IFBhdGguaXNTaWJsaW5nKHBhdGgsIHByZXZQYXRoKTtcbiAgICAgIHZhciBsZXZlbHMgPSBBcnJheS5mcm9tKEVkaXRvci5sZXZlbHMoZWRpdG9yLCB7XG4gICAgICAgIGF0OiBwYXRoXG4gICAgICB9KSwgX3JlZjIgPT4ge1xuICAgICAgICB2YXIgW25dID0gX3JlZjI7XG4gICAgICAgIHJldHVybiBuO1xuICAgICAgfSkuc2xpY2UoY29tbW9uUGF0aC5sZW5ndGgpLnNsaWNlKDAsIC0xKTsgLy8gRGV0ZXJtaW5lIGlmIHRoZSBtZXJnZSB3aWxsIGxlYXZlIGFuIGFuY2VzdG9yIG9mIHRoZSBwYXRoIGVtcHR5IGFzIGFcbiAgICAgIC8vIHJlc3VsdCwgaW4gd2hpY2ggY2FzZSB3ZSdsbCB3YW50IHRvIHJlbW92ZSBpdCBhZnRlciBtZXJnaW5nLlxuXG4gICAgICB2YXIgZW1wdHlBbmNlc3RvciA9IEVkaXRvci5hYm92ZShlZGl0b3IsIHtcbiAgICAgICAgYXQ6IHBhdGgsXG4gICAgICAgIG1vZGU6ICdoaWdoZXN0JyxcbiAgICAgICAgbWF0Y2g6IG4gPT4gbGV2ZWxzLmluY2x1ZGVzKG4pICYmIGhhc1NpbmdsZUNoaWxkTmVzdChlZGl0b3IsIG4pXG4gICAgICB9KTtcbiAgICAgIHZhciBlbXB0eVJlZiA9IGVtcHR5QW5jZXN0b3IgJiYgRWRpdG9yLnBhdGhSZWYoZWRpdG9yLCBlbXB0eUFuY2VzdG9yWzFdKTtcbiAgICAgIHZhciBwcm9wZXJ0aWVzO1xuICAgICAgdmFyIHBvc2l0aW9uOyAvLyBFbnN1cmUgdGhhdCB0aGUgbm9kZXMgYXJlIGVxdWl2YWxlbnQsIGFuZCBmaWd1cmUgb3V0IHdoYXQgdGhlIHBvc2l0aW9uXG4gICAgICAvLyBhbmQgZXh0cmEgcHJvcGVydGllcyBvZiB0aGUgbWVyZ2Ugd2lsbCBiZS5cblxuICAgICAgaWYgKFRleHQuaXNUZXh0KG5vZGUpICYmIFRleHQuaXNUZXh0KHByZXZOb2RlKSkge1xuICAgICAgICB2YXIgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhub2RlLCBfZXhjbHVkZWQpO1xuXG4gICAgICAgIHBvc2l0aW9uID0gcHJldk5vZGUudGV4dC5sZW5ndGg7XG4gICAgICAgIHByb3BlcnRpZXMgPSByZXN0O1xuICAgICAgfSBlbHNlIGlmIChFbGVtZW50LmlzRWxlbWVudChub2RlKSAmJiBFbGVtZW50LmlzRWxlbWVudChwcmV2Tm9kZSkpIHtcbiAgICAgICAgdmFyIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMobm9kZSwgX2V4Y2x1ZGVkMik7XG5cbiAgICAgICAgcG9zaXRpb24gPSBwcmV2Tm9kZS5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIHByb3BlcnRpZXMgPSByZXN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IG1lcmdlIHRoZSBub2RlIGF0IHBhdGggW1wiLmNvbmNhdChwYXRoLCBcIl0gd2l0aCB0aGUgcHJldmlvdXMgc2libGluZyBiZWNhdXNlIGl0IGlzIG5vdCB0aGUgc2FtZSBraW5kOiBcIikuY29uY2F0KEpTT04uc3RyaW5naWZ5KG5vZGUpLCBcIiBcIikuY29uY2F0KEpTT04uc3RyaW5naWZ5KHByZXZOb2RlKSkpO1xuICAgICAgfSAvLyBJZiB0aGUgbm9kZSBpc24ndCBhbHJlYWR5IHRoZSBuZXh0IHNpYmxpbmcgb2YgdGhlIHByZXZpb3VzIG5vZGUsIG1vdmVcbiAgICAgIC8vIGl0IHNvIHRoYXQgaXQgaXMgYmVmb3JlIG1lcmdpbmcuXG5cblxuICAgICAgaWYgKCFpc1ByZXZpb3VzU2libGluZykge1xuICAgICAgICBUcmFuc2Zvcm1zLm1vdmVOb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICBhdDogcGF0aCxcbiAgICAgICAgICB0bzogbmV3UGF0aCxcbiAgICAgICAgICB2b2lkc1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gSWYgdGhlcmUgd2FzIGdvaW5nIHRvIGJlIGFuIGVtcHR5IGFuY2VzdG9yIG9mIHRoZSBub2RlIHRoYXQgd2FzIG1lcmdlZCxcbiAgICAgIC8vIHdlIHJlbW92ZSBpdCBmcm9tIHRoZSB0cmVlLlxuXG5cbiAgICAgIGlmIChlbXB0eVJlZikge1xuICAgICAgICBUcmFuc2Zvcm1zLnJlbW92ZU5vZGVzKGVkaXRvciwge1xuICAgICAgICAgIGF0OiBlbXB0eVJlZi5jdXJyZW50LFxuICAgICAgICAgIHZvaWRzXG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBJZiB0aGUgdGFyZ2V0IG5vZGUgdGhhdCB3ZSdyZSBtZXJnaW5nIHdpdGggaXMgZW1wdHksIHJlbW92ZSBpdCBpbnN0ZWFkXG4gICAgICAvLyBvZiBtZXJnaW5nIHRoZSB0d28uIFRoaXMgaXMgYSBjb21tb24gcmljaCB0ZXh0IGVkaXRvciBiZWhhdmlvciB0b1xuICAgICAgLy8gcHJldmVudCBsb3NpbmcgZm9ybWF0dGluZyB3aGVuIGRlbGV0aW5nIGVudGlyZSBub2RlcyB3aGVuIHlvdSBoYXZlIGFcbiAgICAgIC8vIGhhbmdpbmcgc2VsZWN0aW9uLlxuICAgICAgLy8gaWYgcHJldk5vZGUgaXMgZmlyc3QgY2hpbGQgaW4gcGFyZW50LGRvbid0IHJlbW92ZSBpdC5cblxuXG4gICAgICBpZiAoRWxlbWVudC5pc0VsZW1lbnQocHJldk5vZGUpICYmIEVkaXRvci5pc0VtcHR5KGVkaXRvciwgcHJldk5vZGUpIHx8IFRleHQuaXNUZXh0KHByZXZOb2RlKSAmJiBwcmV2Tm9kZS50ZXh0ID09PSAnJyAmJiBwcmV2UGF0aFtwcmV2UGF0aC5sZW5ndGggLSAxXSAhPT0gMCkge1xuICAgICAgICBUcmFuc2Zvcm1zLnJlbW92ZU5vZGVzKGVkaXRvciwge1xuICAgICAgICAgIGF0OiBwcmV2UGF0aCxcbiAgICAgICAgICB2b2lkc1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVkaXRvci5hcHBseSh7XG4gICAgICAgICAgdHlwZTogJ21lcmdlX25vZGUnLFxuICAgICAgICAgIHBhdGg6IG5ld1BhdGgsXG4gICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgcHJvcGVydGllc1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVtcHR5UmVmKSB7XG4gICAgICAgIGVtcHR5UmVmLnVucmVmKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogTW92ZSB0aGUgbm9kZXMgYXQgYSBsb2NhdGlvbiB0byBhIG5ldyBsb2NhdGlvbi5cclxuICAgKi9cbiAgbW92ZU5vZGVzKGVkaXRvciwgb3B0aW9ucykge1xuICAgIEVkaXRvci53aXRob3V0Tm9ybWFsaXppbmcoZWRpdG9yLCAoKSA9PiB7XG4gICAgICB2YXIge1xuICAgICAgICB0byxcbiAgICAgICAgYXQgPSBlZGl0b3Iuc2VsZWN0aW9uLFxuICAgICAgICBtb2RlID0gJ2xvd2VzdCcsXG4gICAgICAgIHZvaWRzID0gZmFsc2VcbiAgICAgIH0gPSBvcHRpb25zO1xuICAgICAgdmFyIHtcbiAgICAgICAgbWF0Y2hcbiAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgICBpZiAoIWF0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKG1hdGNoID09IG51bGwpIHtcbiAgICAgICAgbWF0Y2ggPSBQYXRoLmlzUGF0aChhdCkgPyBtYXRjaFBhdGgoZWRpdG9yLCBhdCkgOiBuID0+IEVkaXRvci5pc0Jsb2NrKGVkaXRvciwgbik7XG4gICAgICB9XG5cbiAgICAgIHZhciB0b1JlZiA9IEVkaXRvci5wYXRoUmVmKGVkaXRvciwgdG8pO1xuICAgICAgdmFyIHRhcmdldHMgPSBFZGl0b3Iubm9kZXMoZWRpdG9yLCB7XG4gICAgICAgIGF0LFxuICAgICAgICBtYXRjaCxcbiAgICAgICAgbW9kZSxcbiAgICAgICAgdm9pZHNcbiAgICAgIH0pO1xuICAgICAgdmFyIHBhdGhSZWZzID0gQXJyYXkuZnJvbSh0YXJnZXRzLCBfcmVmMyA9PiB7XG4gICAgICAgIHZhciBbLCBwXSA9IF9yZWYzO1xuICAgICAgICByZXR1cm4gRWRpdG9yLnBhdGhSZWYoZWRpdG9yLCBwKTtcbiAgICAgIH0pO1xuXG4gICAgICBmb3IgKHZhciBwYXRoUmVmIG9mIHBhdGhSZWZzKSB7XG4gICAgICAgIHZhciBwYXRoID0gcGF0aFJlZi51bnJlZigpO1xuICAgICAgICB2YXIgbmV3UGF0aCA9IHRvUmVmLmN1cnJlbnQ7XG5cbiAgICAgICAgaWYgKHBhdGgubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgZWRpdG9yLmFwcGx5KHtcbiAgICAgICAgICAgIHR5cGU6ICdtb3ZlX25vZGUnLFxuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIG5ld1BhdGhcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b1JlZi5jdXJyZW50ICYmIFBhdGguaXNTaWJsaW5nKG5ld1BhdGgsIHBhdGgpICYmIFBhdGguaXNBZnRlcihuZXdQYXRoLCBwYXRoKSkge1xuICAgICAgICAgIC8vIFdoZW4gcGVyZm9ybWluZyBhIHNpYmxpbmcgbW92ZSB0byBhIGxhdGVyIGluZGV4LCB0aGUgcGF0aCBhdCB0aGUgZGVzdGluYXRpb24gaXMgc2hpZnRlZFxuICAgICAgICAgIC8vIHRvIGJlZm9yZSB0aGUgaW5zZXJ0aW9uIHBvaW50IGluc3RlYWQgb2YgYWZ0ZXIuIFRvIGVuc3VyZSBvdXIgZ3JvdXAgb2Ygbm9kZXMgYXJlIGluc2VydGVkXG4gICAgICAgICAgLy8gaW4gdGhlIGNvcnJlY3Qgb3JkZXIgd2UgaW5jcmVtZW50IHRvUmVmIHRvIGFjY291bnQgZm9yIHRoYXRcbiAgICAgICAgICB0b1JlZi5jdXJyZW50ID0gUGF0aC5uZXh0KHRvUmVmLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRvUmVmLnVucmVmKCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogUmVtb3ZlIHRoZSBub2RlcyBhdCBhIHNwZWNpZmljIGxvY2F0aW9uIGluIHRoZSBkb2N1bWVudC5cclxuICAgKi9cbiAgcmVtb3ZlTm9kZXMoZWRpdG9yKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIEVkaXRvci53aXRob3V0Tm9ybWFsaXppbmcoZWRpdG9yLCAoKSA9PiB7XG4gICAgICB2YXIge1xuICAgICAgICBoYW5naW5nID0gZmFsc2UsXG4gICAgICAgIHZvaWRzID0gZmFsc2UsXG4gICAgICAgIG1vZGUgPSAnbG93ZXN0J1xuICAgICAgfSA9IG9wdGlvbnM7XG4gICAgICB2YXIge1xuICAgICAgICBhdCA9IGVkaXRvci5zZWxlY3Rpb24sXG4gICAgICAgIG1hdGNoXG4gICAgICB9ID0gb3B0aW9ucztcblxuICAgICAgaWYgKCFhdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXRjaCA9PSBudWxsKSB7XG4gICAgICAgIG1hdGNoID0gUGF0aC5pc1BhdGgoYXQpID8gbWF0Y2hQYXRoKGVkaXRvciwgYXQpIDogbiA9PiBFZGl0b3IuaXNCbG9jayhlZGl0b3IsIG4pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWhhbmdpbmcgJiYgUmFuZ2UuaXNSYW5nZShhdCkpIHtcbiAgICAgICAgYXQgPSBFZGl0b3IudW5oYW5nUmFuZ2UoZWRpdG9yLCBhdCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBkZXB0aHMgPSBFZGl0b3Iubm9kZXMoZWRpdG9yLCB7XG4gICAgICAgIGF0LFxuICAgICAgICBtYXRjaCxcbiAgICAgICAgbW9kZSxcbiAgICAgICAgdm9pZHNcbiAgICAgIH0pO1xuICAgICAgdmFyIHBhdGhSZWZzID0gQXJyYXkuZnJvbShkZXB0aHMsIF9yZWY0ID0+IHtcbiAgICAgICAgdmFyIFssIHBdID0gX3JlZjQ7XG4gICAgICAgIHJldHVybiBFZGl0b3IucGF0aFJlZihlZGl0b3IsIHApO1xuICAgICAgfSk7XG5cbiAgICAgIGZvciAodmFyIHBhdGhSZWYgb2YgcGF0aFJlZnMpIHtcbiAgICAgICAgdmFyIHBhdGggPSBwYXRoUmVmLnVucmVmKCk7XG5cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICB2YXIgW25vZGVdID0gRWRpdG9yLm5vZGUoZWRpdG9yLCBwYXRoKTtcbiAgICAgICAgICBlZGl0b3IuYXBwbHkoe1xuICAgICAgICAgICAgdHlwZTogJ3JlbW92ZV9ub2RlJyxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBub2RlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvKipcclxuICAgKiBTZXQgbmV3IHByb3BlcnRpZXMgb24gdGhlIG5vZGVzIGF0IGEgbG9jYXRpb24uXHJcbiAgICovXG4gIHNldE5vZGVzKGVkaXRvciwgcHJvcHMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgRWRpdG9yLndpdGhvdXROb3JtYWxpemluZyhlZGl0b3IsICgpID0+IHtcbiAgICAgIHZhciB7XG4gICAgICAgIG1hdGNoLFxuICAgICAgICBhdCA9IGVkaXRvci5zZWxlY3Rpb25cbiAgICAgIH0gPSBvcHRpb25zO1xuICAgICAgdmFyIHtcbiAgICAgICAgaGFuZ2luZyA9IGZhbHNlLFxuICAgICAgICBtb2RlID0gJ2xvd2VzdCcsXG4gICAgICAgIHNwbGl0ID0gZmFsc2UsXG4gICAgICAgIHZvaWRzID0gZmFsc2VcbiAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgICBpZiAoIWF0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKG1hdGNoID09IG51bGwpIHtcbiAgICAgICAgbWF0Y2ggPSBQYXRoLmlzUGF0aChhdCkgPyBtYXRjaFBhdGgoZWRpdG9yLCBhdCkgOiBuID0+IEVkaXRvci5pc0Jsb2NrKGVkaXRvciwgbik7XG4gICAgICB9XG5cbiAgICAgIGlmICghaGFuZ2luZyAmJiBSYW5nZS5pc1JhbmdlKGF0KSkge1xuICAgICAgICBhdCA9IEVkaXRvci51bmhhbmdSYW5nZShlZGl0b3IsIGF0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNwbGl0ICYmIFJhbmdlLmlzUmFuZ2UoYXQpKSB7XG4gICAgICAgIGlmIChSYW5nZS5pc0NvbGxhcHNlZChhdCkgJiYgRWRpdG9yLmxlYWYoZWRpdG9yLCBhdC5hbmNob3IpWzBdLnRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIC8vIElmIHRoZSByYW5nZSBpcyBjb2xsYXBzZWQgaW4gYSBub24tZW1wdHkgbm9kZSBhbmQgJ3NwbGl0JyBpcyB0cnVlLCB0aGVyZSdzIG5vdGhpbmcgdG9cbiAgICAgICAgICAvLyBzZXQgdGhhdCB3b24ndCBnZXQgbm9ybWFsaXplZCBhd2F5XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJhbmdlUmVmID0gRWRpdG9yLnJhbmdlUmVmKGVkaXRvciwgYXQsIHtcbiAgICAgICAgICBhZmZpbml0eTogJ2lud2FyZCdcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBbc3RhcnQsIGVuZF0gPSBSYW5nZS5lZGdlcyhhdCk7XG4gICAgICAgIHZhciBzcGxpdE1vZGUgPSBtb2RlID09PSAnbG93ZXN0JyA/ICdsb3dlc3QnIDogJ2hpZ2hlc3QnO1xuICAgICAgICB2YXIgZW5kQXRFbmRPZk5vZGUgPSBFZGl0b3IuaXNFbmQoZWRpdG9yLCBlbmQsIGVuZC5wYXRoKTtcbiAgICAgICAgVHJhbnNmb3Jtcy5zcGxpdE5vZGVzKGVkaXRvciwge1xuICAgICAgICAgIGF0OiBlbmQsXG4gICAgICAgICAgbWF0Y2gsXG4gICAgICAgICAgbW9kZTogc3BsaXRNb2RlLFxuICAgICAgICAgIHZvaWRzLFxuICAgICAgICAgIGFsd2F5czogIWVuZEF0RW5kT2ZOb2RlXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgc3RhcnRBdFN0YXJ0T2ZOb2RlID0gRWRpdG9yLmlzU3RhcnQoZWRpdG9yLCBzdGFydCwgc3RhcnQucGF0aCk7XG4gICAgICAgIFRyYW5zZm9ybXMuc3BsaXROb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICBhdDogc3RhcnQsXG4gICAgICAgICAgbWF0Y2gsXG4gICAgICAgICAgbW9kZTogc3BsaXRNb2RlLFxuICAgICAgICAgIHZvaWRzLFxuICAgICAgICAgIGFsd2F5czogIXN0YXJ0QXRTdGFydE9mTm9kZVxuICAgICAgICB9KTtcbiAgICAgICAgYXQgPSByYW5nZVJlZi51bnJlZigpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmF0ID09IG51bGwpIHtcbiAgICAgICAgICBUcmFuc2Zvcm1zLnNlbGVjdChlZGl0b3IsIGF0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBbbm9kZSwgcGF0aF0gb2YgRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgICBhdCxcbiAgICAgICAgbWF0Y2gsXG4gICAgICAgIG1vZGUsXG4gICAgICAgIHZvaWRzXG4gICAgICB9KSkge1xuICAgICAgICB2YXIgcHJvcGVydGllcyA9IHt9O1xuICAgICAgICB2YXIgbmV3UHJvcGVydGllcyA9IHt9OyAvLyBZb3UgY2FuJ3Qgc2V0IHByb3BlcnRpZXMgb24gdGhlIGVkaXRvciBub2RlLlxuXG4gICAgICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGhhc0NoYW5nZXMgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKHZhciBrIGluIHByb3BzKSB7XG4gICAgICAgICAgaWYgKGsgPT09ICdjaGlsZHJlbicgfHwgayA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocHJvcHNba10gIT09IG5vZGVba10pIHtcbiAgICAgICAgICAgIGhhc0NoYW5nZXMgPSB0cnVlOyAvLyBPbWl0IG5ldyBwcm9wZXJ0aWVzIGZyb20gdGhlIG9sZCBwcm9wZXJ0aWVzIGxpc3RcblxuICAgICAgICAgICAgaWYgKG5vZGUuaGFzT3duUHJvcGVydHkoaykpIHByb3BlcnRpZXNba10gPSBub2RlW2tdOyAvLyBPbWl0IHByb3BlcnRpZXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBuZXcgcHJvcGVydGllcyBsaXN0XG5cbiAgICAgICAgICAgIGlmIChwcm9wc1trXSAhPSBudWxsKSBuZXdQcm9wZXJ0aWVzW2tdID0gcHJvcHNba107XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc0NoYW5nZXMpIHtcbiAgICAgICAgICBlZGl0b3IuYXBwbHkoe1xuICAgICAgICAgICAgdHlwZTogJ3NldF9ub2RlJyxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLFxuICAgICAgICAgICAgbmV3UHJvcGVydGllc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogU3BsaXQgdGhlIG5vZGVzIGF0IGEgc3BlY2lmaWMgbG9jYXRpb24uXHJcbiAgICovXG4gIHNwbGl0Tm9kZXMoZWRpdG9yKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIEVkaXRvci53aXRob3V0Tm9ybWFsaXppbmcoZWRpdG9yLCAoKSA9PiB7XG4gICAgICB2YXIge1xuICAgICAgICBtb2RlID0gJ2xvd2VzdCcsXG4gICAgICAgIHZvaWRzID0gZmFsc2VcbiAgICAgIH0gPSBvcHRpb25zO1xuICAgICAgdmFyIHtcbiAgICAgICAgbWF0Y2gsXG4gICAgICAgIGF0ID0gZWRpdG9yLnNlbGVjdGlvbixcbiAgICAgICAgaGVpZ2h0ID0gMCxcbiAgICAgICAgYWx3YXlzID0gZmFsc2VcbiAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgICBpZiAobWF0Y2ggPT0gbnVsbCkge1xuICAgICAgICBtYXRjaCA9IG4gPT4gRWRpdG9yLmlzQmxvY2soZWRpdG9yLCBuKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFJhbmdlLmlzUmFuZ2UoYXQpKSB7XG4gICAgICAgIGF0ID0gZGVsZXRlUmFuZ2UoZWRpdG9yLCBhdCk7XG4gICAgICB9IC8vIElmIHRoZSB0YXJnZXQgaXMgYSBwYXRoLCB0aGUgZGVmYXVsdCBoZWlnaHQtc2tpcHBpbmcgYW5kIHBvc2l0aW9uXG4gICAgICAvLyBjb3VudGVycyBuZWVkIHRvIGFjY291bnQgZm9yIHVzIHBvdGVudGlhbGx5IHNwbGl0dGluZyBhdCBhIG5vbi1sZWFmLlxuXG5cbiAgICAgIGlmIChQYXRoLmlzUGF0aChhdCkpIHtcbiAgICAgICAgdmFyIHBhdGggPSBhdDtcbiAgICAgICAgdmFyIHBvaW50ID0gRWRpdG9yLnBvaW50KGVkaXRvciwgcGF0aCk7XG4gICAgICAgIHZhciBbcGFyZW50XSA9IEVkaXRvci5wYXJlbnQoZWRpdG9yLCBwYXRoKTtcblxuICAgICAgICBtYXRjaCA9IG4gPT4gbiA9PT0gcGFyZW50O1xuXG4gICAgICAgIGhlaWdodCA9IHBvaW50LnBhdGgubGVuZ3RoIC0gcGF0aC5sZW5ndGggKyAxO1xuICAgICAgICBhdCA9IHBvaW50O1xuICAgICAgICBhbHdheXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWF0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGJlZm9yZVJlZiA9IEVkaXRvci5wb2ludFJlZihlZGl0b3IsIGF0LCB7XG4gICAgICAgIGFmZmluaXR5OiAnYmFja3dhcmQnXG4gICAgICB9KTtcbiAgICAgIHZhciBbaGlnaGVzdF0gPSBFZGl0b3Iubm9kZXMoZWRpdG9yLCB7XG4gICAgICAgIGF0LFxuICAgICAgICBtYXRjaCxcbiAgICAgICAgbW9kZSxcbiAgICAgICAgdm9pZHNcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWhpZ2hlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgdm9pZE1hdGNoID0gRWRpdG9yLnZvaWQoZWRpdG9yLCB7XG4gICAgICAgIGF0LFxuICAgICAgICBtb2RlOiAnaGlnaGVzdCdcbiAgICAgIH0pO1xuICAgICAgdmFyIG51ZGdlID0gMDtcblxuICAgICAgaWYgKCF2b2lkcyAmJiB2b2lkTWF0Y2gpIHtcbiAgICAgICAgdmFyIFt2b2lkTm9kZSwgdm9pZFBhdGhdID0gdm9pZE1hdGNoO1xuXG4gICAgICAgIGlmIChFbGVtZW50LmlzRWxlbWVudCh2b2lkTm9kZSkgJiYgZWRpdG9yLmlzSW5saW5lKHZvaWROb2RlKSkge1xuICAgICAgICAgIHZhciBhZnRlciA9IEVkaXRvci5hZnRlcihlZGl0b3IsIHZvaWRQYXRoKTtcblxuICAgICAgICAgIGlmICghYWZ0ZXIpIHtcbiAgICAgICAgICAgIHZhciB0ZXh0ID0ge1xuICAgICAgICAgICAgICB0ZXh0OiAnJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBhZnRlclBhdGggPSBQYXRoLm5leHQodm9pZFBhdGgpO1xuICAgICAgICAgICAgVHJhbnNmb3Jtcy5pbnNlcnROb2RlcyhlZGl0b3IsIHRleHQsIHtcbiAgICAgICAgICAgICAgYXQ6IGFmdGVyUGF0aCxcbiAgICAgICAgICAgICAgdm9pZHNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYWZ0ZXIgPSBFZGl0b3IucG9pbnQoZWRpdG9yLCBhZnRlclBhdGgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGF0ID0gYWZ0ZXI7XG4gICAgICAgICAgYWx3YXlzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzaWJsaW5nSGVpZ2h0ID0gYXQucGF0aC5sZW5ndGggLSB2b2lkUGF0aC5sZW5ndGg7XG4gICAgICAgIGhlaWdodCA9IHNpYmxpbmdIZWlnaHQgKyAxO1xuICAgICAgICBhbHdheXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWZ0ZXJSZWYgPSBFZGl0b3IucG9pbnRSZWYoZWRpdG9yLCBhdCk7XG4gICAgICB2YXIgZGVwdGggPSBhdC5wYXRoLmxlbmd0aCAtIGhlaWdodDtcbiAgICAgIHZhciBbLCBoaWdoZXN0UGF0aF0gPSBoaWdoZXN0O1xuICAgICAgdmFyIGxvd2VzdFBhdGggPSBhdC5wYXRoLnNsaWNlKDAsIGRlcHRoKTtcbiAgICAgIHZhciBwb3NpdGlvbiA9IGhlaWdodCA9PT0gMCA/IGF0Lm9mZnNldCA6IGF0LnBhdGhbZGVwdGhdICsgbnVkZ2U7XG5cbiAgICAgIGZvciAodmFyIFtub2RlLCBfcGF0aDJdIG9mIEVkaXRvci5sZXZlbHMoZWRpdG9yLCB7XG4gICAgICAgIGF0OiBsb3dlc3RQYXRoLFxuICAgICAgICByZXZlcnNlOiB0cnVlLFxuICAgICAgICB2b2lkc1xuICAgICAgfSkpIHtcbiAgICAgICAgdmFyIHNwbGl0ID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKF9wYXRoMi5sZW5ndGggPCBoaWdoZXN0UGF0aC5sZW5ndGggfHwgX3BhdGgyLmxlbmd0aCA9PT0gMCB8fCAhdm9pZHMgJiYgRWRpdG9yLmlzVm9pZChlZGl0b3IsIG5vZGUpKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3BvaW50ID0gYmVmb3JlUmVmLmN1cnJlbnQ7XG4gICAgICAgIHZhciBpc0VuZCA9IEVkaXRvci5pc0VuZChlZGl0b3IsIF9wb2ludCwgX3BhdGgyKTtcblxuICAgICAgICBpZiAoYWx3YXlzIHx8ICFiZWZvcmVSZWYgfHwgIUVkaXRvci5pc0VkZ2UoZWRpdG9yLCBfcG9pbnQsIF9wYXRoMikpIHtcbiAgICAgICAgICBzcGxpdCA9IHRydWU7XG4gICAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBOb2RlLmV4dHJhY3RQcm9wcyhub2RlKTtcbiAgICAgICAgICBlZGl0b3IuYXBwbHkoe1xuICAgICAgICAgICAgdHlwZTogJ3NwbGl0X25vZGUnLFxuICAgICAgICAgICAgcGF0aDogX3BhdGgyLFxuICAgICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgICBwcm9wZXJ0aWVzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBwb3NpdGlvbiA9IF9wYXRoMltfcGF0aDIubGVuZ3RoIC0gMV0gKyAoc3BsaXQgfHwgaXNFbmQgPyAxIDogMCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmF0ID09IG51bGwpIHtcbiAgICAgICAgdmFyIF9wb2ludDIgPSBhZnRlclJlZi5jdXJyZW50IHx8IEVkaXRvci5lbmQoZWRpdG9yLCBbXSk7XG5cbiAgICAgICAgVHJhbnNmb3Jtcy5zZWxlY3QoZWRpdG9yLCBfcG9pbnQyKTtcbiAgICAgIH1cblxuICAgICAgYmVmb3JlUmVmLnVucmVmKCk7XG4gICAgICBhZnRlclJlZi51bnJlZigpO1xuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIFVuc2V0IHByb3BlcnRpZXMgb24gdGhlIG5vZGVzIGF0IGEgbG9jYXRpb24uXHJcbiAgICovXG4gIHVuc2V0Tm9kZXMoZWRpdG9yLCBwcm9wcykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wcykpIHtcbiAgICAgIHByb3BzID0gW3Byb3BzXTtcbiAgICB9XG5cbiAgICB2YXIgb2JqID0ge307XG5cbiAgICBmb3IgKHZhciBrZXkgb2YgcHJvcHMpIHtcbiAgICAgIG9ialtrZXldID0gbnVsbDtcbiAgICB9XG5cbiAgICBUcmFuc2Zvcm1zLnNldE5vZGVzKGVkaXRvciwgb2JqLCBvcHRpb25zKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBVbndyYXAgdGhlIG5vZGVzIGF0IGEgbG9jYXRpb24gZnJvbSBhIHBhcmVudCBub2RlLCBzcGxpdHRpbmcgdGhlIHBhcmVudCBpZlxyXG4gICAqIG5lY2Vzc2FyeSB0byBlbnN1cmUgdGhhdCBvbmx5IHRoZSBjb250ZW50IGluIHRoZSByYW5nZSBpcyB1bndyYXBwZWQuXHJcbiAgICovXG4gIHVud3JhcE5vZGVzKGVkaXRvcikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBFZGl0b3Iud2l0aG91dE5vcm1hbGl6aW5nKGVkaXRvciwgKCkgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgbW9kZSA9ICdsb3dlc3QnLFxuICAgICAgICBzcGxpdCA9IGZhbHNlLFxuICAgICAgICB2b2lkcyA9IGZhbHNlXG4gICAgICB9ID0gb3B0aW9ucztcbiAgICAgIHZhciB7XG4gICAgICAgIGF0ID0gZWRpdG9yLnNlbGVjdGlvbixcbiAgICAgICAgbWF0Y2hcbiAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgICBpZiAoIWF0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKG1hdGNoID09IG51bGwpIHtcbiAgICAgICAgbWF0Y2ggPSBQYXRoLmlzUGF0aChhdCkgPyBtYXRjaFBhdGgoZWRpdG9yLCBhdCkgOiBuID0+IEVkaXRvci5pc0Jsb2NrKGVkaXRvciwgbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChQYXRoLmlzUGF0aChhdCkpIHtcbiAgICAgICAgYXQgPSBFZGl0b3IucmFuZ2UoZWRpdG9yLCBhdCk7XG4gICAgICB9XG5cbiAgICAgIHZhciByYW5nZVJlZiA9IFJhbmdlLmlzUmFuZ2UoYXQpID8gRWRpdG9yLnJhbmdlUmVmKGVkaXRvciwgYXQpIDogbnVsbDtcbiAgICAgIHZhciBtYXRjaGVzID0gRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgICBhdCxcbiAgICAgICAgbWF0Y2gsXG4gICAgICAgIG1vZGUsXG4gICAgICAgIHZvaWRzXG4gICAgICB9KTtcbiAgICAgIHZhciBwYXRoUmVmcyA9IEFycmF5LmZyb20obWF0Y2hlcywgX3JlZjUgPT4ge1xuICAgICAgICB2YXIgWywgcF0gPSBfcmVmNTtcbiAgICAgICAgcmV0dXJuIEVkaXRvci5wYXRoUmVmKGVkaXRvciwgcCk7XG4gICAgICB9IC8vIHVud3JhcE5vZGUgd2lsbCBjYWxsIGxpZnROb2RlIHdoaWNoIGRvZXMgbm90IHN1cHBvcnQgc3BsaXR0aW5nIHRoZSBub2RlIHdoZW4gbmVzdGVkLlxuICAgICAgLy8gSWYgd2UgZG8gbm90IHJldmVyc2UgdGhlIG9yZGVyIGFuZCBjYWxsIGl0IGZyb20gdG9wIHRvIHRoZSBib3R0b20sIGl0IHdpbGwgcmVtb3ZlIGFsbCBibG9ja3NcbiAgICAgIC8vIHRoYXQgd3JhcCB0YXJnZXQgbm9kZS4gU28gd2UgcmV2ZXJzZSB0aGUgb3JkZXIuXG4gICAgICApLnJldmVyc2UoKTtcblxuICAgICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AocGF0aFJlZikge1xuICAgICAgICB2YXIgcGF0aCA9IHBhdGhSZWYudW5yZWYoKTtcbiAgICAgICAgdmFyIFtub2RlXSA9IEVkaXRvci5ub2RlKGVkaXRvciwgcGF0aCk7XG4gICAgICAgIHZhciByYW5nZSA9IEVkaXRvci5yYW5nZShlZGl0b3IsIHBhdGgpO1xuXG4gICAgICAgIGlmIChzcGxpdCAmJiByYW5nZVJlZikge1xuICAgICAgICAgIHJhbmdlID0gUmFuZ2UuaW50ZXJzZWN0aW9uKHJhbmdlUmVmLmN1cnJlbnQsIHJhbmdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFRyYW5zZm9ybXMubGlmdE5vZGVzKGVkaXRvciwge1xuICAgICAgICAgIGF0OiByYW5nZSxcbiAgICAgICAgICBtYXRjaDogbiA9PiBFbGVtZW50LmlzQW5jZXN0b3Iobm9kZSkgJiYgbm9kZS5jaGlsZHJlbi5pbmNsdWRlcyhuKSxcbiAgICAgICAgICB2b2lkc1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIHBhdGhSZWYgb2YgcGF0aFJlZnMpIHtcbiAgICAgICAgX2xvb3AocGF0aFJlZik7XG4gICAgICB9XG5cbiAgICAgIGlmIChyYW5nZVJlZikge1xuICAgICAgICByYW5nZVJlZi51bnJlZigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIFdyYXAgdGhlIG5vZGVzIGF0IGEgbG9jYXRpb24gaW4gYSBuZXcgY29udGFpbmVyIG5vZGUsIHNwbGl0dGluZyB0aGUgZWRnZXNcclxuICAgKiBvZiB0aGUgcmFuZ2UgZmlyc3QgdG8gZW5zdXJlIHRoYXQgb25seSB0aGUgY29udGVudCBpbiB0aGUgcmFuZ2UgaXMgd3JhcHBlZC5cclxuICAgKi9cbiAgd3JhcE5vZGVzKGVkaXRvciwgZWxlbWVudCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICBFZGl0b3Iud2l0aG91dE5vcm1hbGl6aW5nKGVkaXRvciwgKCkgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgbW9kZSA9ICdsb3dlc3QnLFxuICAgICAgICBzcGxpdCA9IGZhbHNlLFxuICAgICAgICB2b2lkcyA9IGZhbHNlXG4gICAgICB9ID0gb3B0aW9ucztcbiAgICAgIHZhciB7XG4gICAgICAgIG1hdGNoLFxuICAgICAgICBhdCA9IGVkaXRvci5zZWxlY3Rpb25cbiAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgICBpZiAoIWF0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKG1hdGNoID09IG51bGwpIHtcbiAgICAgICAgaWYgKFBhdGguaXNQYXRoKGF0KSkge1xuICAgICAgICAgIG1hdGNoID0gbWF0Y2hQYXRoKGVkaXRvciwgYXQpO1xuICAgICAgICB9IGVsc2UgaWYgKGVkaXRvci5pc0lubGluZShlbGVtZW50KSkge1xuICAgICAgICAgIG1hdGNoID0gbiA9PiBFZGl0b3IuaXNJbmxpbmUoZWRpdG9yLCBuKSB8fCBUZXh0LmlzVGV4dChuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXRjaCA9IG4gPT4gRWRpdG9yLmlzQmxvY2soZWRpdG9yLCBuKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3BsaXQgJiYgUmFuZ2UuaXNSYW5nZShhdCkpIHtcbiAgICAgICAgdmFyIFtzdGFydCwgZW5kXSA9IFJhbmdlLmVkZ2VzKGF0KTtcbiAgICAgICAgdmFyIHJhbmdlUmVmID0gRWRpdG9yLnJhbmdlUmVmKGVkaXRvciwgYXQsIHtcbiAgICAgICAgICBhZmZpbml0eTogJ2lud2FyZCdcbiAgICAgICAgfSk7XG4gICAgICAgIFRyYW5zZm9ybXMuc3BsaXROb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICBhdDogZW5kLFxuICAgICAgICAgIG1hdGNoLFxuICAgICAgICAgIHZvaWRzXG4gICAgICAgIH0pO1xuICAgICAgICBUcmFuc2Zvcm1zLnNwbGl0Tm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgYXQ6IHN0YXJ0LFxuICAgICAgICAgIG1hdGNoLFxuICAgICAgICAgIHZvaWRzXG4gICAgICAgIH0pO1xuICAgICAgICBhdCA9IHJhbmdlUmVmLnVucmVmKCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuYXQgPT0gbnVsbCkge1xuICAgICAgICAgIFRyYW5zZm9ybXMuc2VsZWN0KGVkaXRvciwgYXQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciByb290cyA9IEFycmF5LmZyb20oRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgICBhdCxcbiAgICAgICAgbWF0Y2g6IGVkaXRvci5pc0lubGluZShlbGVtZW50KSA/IG4gPT4gRWRpdG9yLmlzQmxvY2soZWRpdG9yLCBuKSA6IG4gPT4gRWRpdG9yLmlzRWRpdG9yKG4pLFxuICAgICAgICBtb2RlOiAnbG93ZXN0JyxcbiAgICAgICAgdm9pZHNcbiAgICAgIH0pKTtcblxuICAgICAgZm9yICh2YXIgWywgcm9vdFBhdGhdIG9mIHJvb3RzKSB7XG4gICAgICAgIHZhciBhID0gUmFuZ2UuaXNSYW5nZShhdCkgPyBSYW5nZS5pbnRlcnNlY3Rpb24oYXQsIEVkaXRvci5yYW5nZShlZGl0b3IsIHJvb3RQYXRoKSkgOiBhdDtcblxuICAgICAgICBpZiAoIWEpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtYXRjaGVzID0gQXJyYXkuZnJvbShFZGl0b3Iubm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgYXQ6IGEsXG4gICAgICAgICAgbWF0Y2gsXG4gICAgICAgICAgbW9kZSxcbiAgICAgICAgICB2b2lkc1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHZhciBfcmV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIFtmaXJzdF0gPSBtYXRjaGVzO1xuICAgICAgICAgICAgdmFyIGxhc3QgPSBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB2YXIgWywgZmlyc3RQYXRoXSA9IGZpcnN0O1xuICAgICAgICAgICAgdmFyIFssIGxhc3RQYXRoXSA9IGxhc3Q7XG5cbiAgICAgICAgICAgIGlmIChmaXJzdFBhdGgubGVuZ3RoID09PSAwICYmIGxhc3RQYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAvLyBpZiB0aGVyZSdzIG5vIG1hdGNoaW5nIHBhcmVudCAtIHVzdWFsbHkgbWVhbnMgdGhlIG5vZGUgaXMgYW4gZWRpdG9yIC0gZG9uJ3QgZG8gYW55dGhpbmdcbiAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNvbW1vblBhdGggPSBQYXRoLmVxdWFscyhmaXJzdFBhdGgsIGxhc3RQYXRoKSA/IFBhdGgucGFyZW50KGZpcnN0UGF0aCkgOiBQYXRoLmNvbW1vbihmaXJzdFBhdGgsIGxhc3RQYXRoKTtcbiAgICAgICAgICAgIHZhciByYW5nZSA9IEVkaXRvci5yYW5nZShlZGl0b3IsIGZpcnN0UGF0aCwgbGFzdFBhdGgpO1xuICAgICAgICAgICAgdmFyIGNvbW1vbk5vZGVFbnRyeSA9IEVkaXRvci5ub2RlKGVkaXRvciwgY29tbW9uUGF0aCk7XG4gICAgICAgICAgICB2YXIgW2NvbW1vbk5vZGVdID0gY29tbW9uTm9kZUVudHJ5O1xuICAgICAgICAgICAgdmFyIGRlcHRoID0gY29tbW9uUGF0aC5sZW5ndGggKyAxO1xuICAgICAgICAgICAgdmFyIHdyYXBwZXJQYXRoID0gUGF0aC5uZXh0KGxhc3RQYXRoLnNsaWNlKDAsIGRlcHRoKSk7XG5cbiAgICAgICAgICAgIHZhciB3cmFwcGVyID0gX29iamVjdFNwcmVhZCQyKF9vYmplY3RTcHJlYWQkMih7fSwgZWxlbWVudCksIHt9LCB7XG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIFRyYW5zZm9ybXMuaW5zZXJ0Tm9kZXMoZWRpdG9yLCB3cmFwcGVyLCB7XG4gICAgICAgICAgICAgIGF0OiB3cmFwcGVyUGF0aCxcbiAgICAgICAgICAgICAgdm9pZHNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgVHJhbnNmb3Jtcy5tb3ZlTm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgICAgIGF0OiByYW5nZSxcbiAgICAgICAgICAgICAgbWF0Y2g6IG4gPT4gRWxlbWVudC5pc0FuY2VzdG9yKGNvbW1vbk5vZGUpICYmIGNvbW1vbk5vZGUuY2hpbGRyZW4uaW5jbHVkZXMobiksXG4gICAgICAgICAgICAgIHRvOiB3cmFwcGVyUGF0aC5jb25jYXQoMCksXG4gICAgICAgICAgICAgIHZvaWRzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KCk7XG5cbiAgICAgICAgICBpZiAoX3JldCA9PT0gXCJjb250aW51ZVwiKSBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn07XG5cbnZhciBoYXNTaW5nbGVDaGlsZE5lc3QgPSAoZWRpdG9yLCBub2RlKSA9PiB7XG4gIGlmIChFbGVtZW50LmlzRWxlbWVudChub2RlKSkge1xuICAgIHZhciBlbGVtZW50ID0gbm9kZTtcblxuICAgIGlmIChFZGl0b3IuaXNWb2lkKGVkaXRvciwgbm9kZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiBoYXNTaW5nbGVDaGlsZE5lc3QoZWRpdG9yLCBlbGVtZW50LmNoaWxkcmVuWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChFZGl0b3IuaXNFZGl0b3Iobm9kZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4vKipcclxuICogQ29udmVydCBhIHJhbmdlIGludG8gYSBwb2ludCBieSBkZWxldGluZyBpdCdzIGNvbnRlbnQuXHJcbiAqL1xuXG5cbnZhciBkZWxldGVSYW5nZSA9IChlZGl0b3IsIHJhbmdlKSA9PiB7XG4gIGlmIChSYW5nZS5pc0NvbGxhcHNlZChyYW5nZSkpIHtcbiAgICByZXR1cm4gcmFuZ2UuYW5jaG9yO1xuICB9IGVsc2Uge1xuICAgIHZhciBbLCBlbmRdID0gUmFuZ2UuZWRnZXMocmFuZ2UpO1xuICAgIHZhciBwb2ludFJlZiA9IEVkaXRvci5wb2ludFJlZihlZGl0b3IsIGVuZCk7XG4gICAgVHJhbnNmb3Jtcy5kZWxldGUoZWRpdG9yLCB7XG4gICAgICBhdDogcmFuZ2VcbiAgICB9KTtcbiAgICByZXR1cm4gcG9pbnRSZWYudW5yZWYoKTtcbiAgfVxufTtcblxudmFyIG1hdGNoUGF0aCA9IChlZGl0b3IsIHBhdGgpID0+IHtcbiAgdmFyIFtub2RlXSA9IEVkaXRvci5ub2RlKGVkaXRvciwgcGF0aCk7XG4gIHJldHVybiBuID0+IG4gPT09IG5vZGU7XG59O1xuXG5mdW5jdGlvbiBvd25LZXlzJDEob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDEodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQxKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkMShPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cbnZhciBTZWxlY3Rpb25UcmFuc2Zvcm1zID0ge1xuICAvKipcclxuICAgKiBDb2xsYXBzZSB0aGUgc2VsZWN0aW9uLlxyXG4gICAqL1xuICBjb2xsYXBzZShlZGl0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHtcbiAgICAgIGVkZ2UgPSAnYW5jaG9yJ1xuICAgIH0gPSBvcHRpb25zO1xuICAgIHZhciB7XG4gICAgICBzZWxlY3Rpb25cbiAgICB9ID0gZWRpdG9yO1xuXG4gICAgaWYgKCFzZWxlY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGVkZ2UgPT09ICdhbmNob3InKSB7XG4gICAgICBUcmFuc2Zvcm1zLnNlbGVjdChlZGl0b3IsIHNlbGVjdGlvbi5hbmNob3IpO1xuICAgIH0gZWxzZSBpZiAoZWRnZSA9PT0gJ2ZvY3VzJykge1xuICAgICAgVHJhbnNmb3Jtcy5zZWxlY3QoZWRpdG9yLCBzZWxlY3Rpb24uZm9jdXMpO1xuICAgIH0gZWxzZSBpZiAoZWRnZSA9PT0gJ3N0YXJ0Jykge1xuICAgICAgdmFyIFtzdGFydF0gPSBSYW5nZS5lZGdlcyhzZWxlY3Rpb24pO1xuICAgICAgVHJhbnNmb3Jtcy5zZWxlY3QoZWRpdG9yLCBzdGFydCk7XG4gICAgfSBlbHNlIGlmIChlZGdlID09PSAnZW5kJykge1xuICAgICAgdmFyIFssIGVuZF0gPSBSYW5nZS5lZGdlcyhzZWxlY3Rpb24pO1xuICAgICAgVHJhbnNmb3Jtcy5zZWxlY3QoZWRpdG9yLCBlbmQpO1xuICAgIH1cbiAgfSxcblxuICAvKipcclxuICAgKiBVbnNldCB0aGUgc2VsZWN0aW9uLlxyXG4gICAqL1xuICBkZXNlbGVjdChlZGl0b3IpIHtcbiAgICB2YXIge1xuICAgICAgc2VsZWN0aW9uXG4gICAgfSA9IGVkaXRvcjtcblxuICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgIGVkaXRvci5hcHBseSh7XG4gICAgICAgIHR5cGU6ICdzZXRfc2VsZWN0aW9uJyxcbiAgICAgICAgcHJvcGVydGllczogc2VsZWN0aW9uLFxuICAgICAgICBuZXdQcm9wZXJ0aWVzOiBudWxsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogTW92ZSB0aGUgc2VsZWN0aW9uJ3MgcG9pbnQgZm9yd2FyZCBvciBiYWNrd2FyZC5cclxuICAgKi9cbiAgbW92ZShlZGl0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHtcbiAgICAgIHNlbGVjdGlvblxuICAgIH0gPSBlZGl0b3I7XG4gICAgdmFyIHtcbiAgICAgIGRpc3RhbmNlID0gMSxcbiAgICAgIHVuaXQgPSAnY2hhcmFjdGVyJyxcbiAgICAgIHJldmVyc2UgPSBmYWxzZVxuICAgIH0gPSBvcHRpb25zO1xuICAgIHZhciB7XG4gICAgICBlZGdlID0gbnVsbFxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgaWYgKCFzZWxlY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZWRnZSA9PT0gJ3N0YXJ0Jykge1xuICAgICAgZWRnZSA9IFJhbmdlLmlzQmFja3dhcmQoc2VsZWN0aW9uKSA/ICdmb2N1cycgOiAnYW5jaG9yJztcbiAgICB9XG5cbiAgICBpZiAoZWRnZSA9PT0gJ2VuZCcpIHtcbiAgICAgIGVkZ2UgPSBSYW5nZS5pc0JhY2t3YXJkKHNlbGVjdGlvbikgPyAnYW5jaG9yJyA6ICdmb2N1cyc7XG4gICAgfVxuXG4gICAgdmFyIHtcbiAgICAgIGFuY2hvcixcbiAgICAgIGZvY3VzXG4gICAgfSA9IHNlbGVjdGlvbjtcbiAgICB2YXIgb3B0cyA9IHtcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgdW5pdFxuICAgIH07XG4gICAgdmFyIHByb3BzID0ge307XG5cbiAgICBpZiAoZWRnZSA9PSBudWxsIHx8IGVkZ2UgPT09ICdhbmNob3InKSB7XG4gICAgICB2YXIgcG9pbnQgPSByZXZlcnNlID8gRWRpdG9yLmJlZm9yZShlZGl0b3IsIGFuY2hvciwgb3B0cykgOiBFZGl0b3IuYWZ0ZXIoZWRpdG9yLCBhbmNob3IsIG9wdHMpO1xuXG4gICAgICBpZiAocG9pbnQpIHtcbiAgICAgICAgcHJvcHMuYW5jaG9yID0gcG9pbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVkZ2UgPT0gbnVsbCB8fCBlZGdlID09PSAnZm9jdXMnKSB7XG4gICAgICB2YXIgX3BvaW50ID0gcmV2ZXJzZSA/IEVkaXRvci5iZWZvcmUoZWRpdG9yLCBmb2N1cywgb3B0cykgOiBFZGl0b3IuYWZ0ZXIoZWRpdG9yLCBmb2N1cywgb3B0cyk7XG5cbiAgICAgIGlmIChfcG9pbnQpIHtcbiAgICAgICAgcHJvcHMuZm9jdXMgPSBfcG9pbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVHJhbnNmb3Jtcy5zZXRTZWxlY3Rpb24oZWRpdG9yLCBwcm9wcyk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogU2V0IHRoZSBzZWxlY3Rpb24gdG8gYSBuZXcgdmFsdWUuXHJcbiAgICovXG4gIHNlbGVjdChlZGl0b3IsIHRhcmdldCkge1xuICAgIHZhciB7XG4gICAgICBzZWxlY3Rpb25cbiAgICB9ID0gZWRpdG9yO1xuICAgIHRhcmdldCA9IEVkaXRvci5yYW5nZShlZGl0b3IsIHRhcmdldCk7XG5cbiAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICBUcmFuc2Zvcm1zLnNldFNlbGVjdGlvbihlZGl0b3IsIHRhcmdldCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFSYW5nZS5pc1JhbmdlKHRhcmdldCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIldoZW4gc2V0dGluZyB0aGUgc2VsZWN0aW9uIGFuZCB0aGUgY3VycmVudCBzZWxlY3Rpb24gaXMgYG51bGxgIHlvdSBtdXN0IHByb3ZpZGUgYXQgbGVhc3QgYW4gYGFuY2hvcmAgYW5kIGBmb2N1c2AsIGJ1dCB5b3UgcGFzc2VkOiBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkodGFyZ2V0KSkpO1xuICAgIH1cblxuICAgIGVkaXRvci5hcHBseSh7XG4gICAgICB0eXBlOiAnc2V0X3NlbGVjdGlvbicsXG4gICAgICBwcm9wZXJ0aWVzOiBzZWxlY3Rpb24sXG4gICAgICBuZXdQcm9wZXJ0aWVzOiB0YXJnZXRcbiAgICB9KTtcbiAgfSxcblxuICAvKipcclxuICAgKiBTZXQgbmV3IHByb3BlcnRpZXMgb24gb25lIG9mIHRoZSBzZWxlY3Rpb24ncyBwb2ludHMuXHJcbiAgICovXG4gIHNldFBvaW50KGVkaXRvciwgcHJvcHMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIHtcbiAgICAgIHNlbGVjdGlvblxuICAgIH0gPSBlZGl0b3I7XG4gICAgdmFyIHtcbiAgICAgIGVkZ2UgPSAnYm90aCdcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIGlmICghc2VsZWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVkZ2UgPT09ICdzdGFydCcpIHtcbiAgICAgIGVkZ2UgPSBSYW5nZS5pc0JhY2t3YXJkKHNlbGVjdGlvbikgPyAnZm9jdXMnIDogJ2FuY2hvcic7XG4gICAgfVxuXG4gICAgaWYgKGVkZ2UgPT09ICdlbmQnKSB7XG4gICAgICBlZGdlID0gUmFuZ2UuaXNCYWNrd2FyZChzZWxlY3Rpb24pID8gJ2FuY2hvcicgOiAnZm9jdXMnO1xuICAgIH1cblxuICAgIHZhciB7XG4gICAgICBhbmNob3IsXG4gICAgICBmb2N1c1xuICAgIH0gPSBzZWxlY3Rpb247XG4gICAgdmFyIHBvaW50ID0gZWRnZSA9PT0gJ2FuY2hvcicgPyBhbmNob3IgOiBmb2N1cztcbiAgICBUcmFuc2Zvcm1zLnNldFNlbGVjdGlvbihlZGl0b3IsIHtcbiAgICAgIFtlZGdlID09PSAnYW5jaG9yJyA/ICdhbmNob3InIDogJ2ZvY3VzJ106IF9vYmplY3RTcHJlYWQkMShfb2JqZWN0U3ByZWFkJDEoe30sIHBvaW50KSwgcHJvcHMpXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogU2V0IG5ldyBwcm9wZXJ0aWVzIG9uIHRoZSBzZWxlY3Rpb24uXHJcbiAgICovXG4gIHNldFNlbGVjdGlvbihlZGl0b3IsIHByb3BzKSB7XG4gICAgdmFyIHtcbiAgICAgIHNlbGVjdGlvblxuICAgIH0gPSBlZGl0b3I7XG4gICAgdmFyIG9sZFByb3BzID0ge307XG4gICAgdmFyIG5ld1Byb3BzID0ge307XG5cbiAgICBpZiAoIXNlbGVjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGsgaW4gcHJvcHMpIHtcbiAgICAgIGlmIChrID09PSAnYW5jaG9yJyAmJiBwcm9wcy5hbmNob3IgIT0gbnVsbCAmJiAhUG9pbnQuZXF1YWxzKHByb3BzLmFuY2hvciwgc2VsZWN0aW9uLmFuY2hvcikgfHwgayA9PT0gJ2ZvY3VzJyAmJiBwcm9wcy5mb2N1cyAhPSBudWxsICYmICFQb2ludC5lcXVhbHMocHJvcHMuZm9jdXMsIHNlbGVjdGlvbi5mb2N1cykgfHwgayAhPT0gJ2FuY2hvcicgJiYgayAhPT0gJ2ZvY3VzJyAmJiBwcm9wc1trXSAhPT0gc2VsZWN0aW9uW2tdKSB7XG4gICAgICAgIG9sZFByb3BzW2tdID0gc2VsZWN0aW9uW2tdO1xuICAgICAgICBuZXdQcm9wc1trXSA9IHByb3BzW2tdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChPYmplY3Qua2V5cyhvbGRQcm9wcykubGVuZ3RoID4gMCkge1xuICAgICAgZWRpdG9yLmFwcGx5KHtcbiAgICAgICAgdHlwZTogJ3NldF9zZWxlY3Rpb24nLFxuICAgICAgICBwcm9wZXJ0aWVzOiBvbGRQcm9wcyxcbiAgICAgICAgbmV3UHJvcGVydGllczogbmV3UHJvcHNcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59O1xuXG52YXIgVGV4dFRyYW5zZm9ybXMgPSB7XG4gIC8qKlxyXG4gICAqIERlbGV0ZSBjb250ZW50IGluIHRoZSBlZGl0b3IuXHJcbiAgICovXG4gIGRlbGV0ZShlZGl0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgRWRpdG9yLndpdGhvdXROb3JtYWxpemluZyhlZGl0b3IsICgpID0+IHtcbiAgICAgIHZhciB7XG4gICAgICAgIHJldmVyc2UgPSBmYWxzZSxcbiAgICAgICAgdW5pdCA9ICdjaGFyYWN0ZXInLFxuICAgICAgICBkaXN0YW5jZSA9IDEsXG4gICAgICAgIHZvaWRzID0gZmFsc2VcbiAgICAgIH0gPSBvcHRpb25zO1xuICAgICAgdmFyIHtcbiAgICAgICAgYXQgPSBlZGl0b3Iuc2VsZWN0aW9uLFxuICAgICAgICBoYW5naW5nID0gZmFsc2VcbiAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgICBpZiAoIWF0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKFJhbmdlLmlzUmFuZ2UoYXQpICYmIFJhbmdlLmlzQ29sbGFwc2VkKGF0KSkge1xuICAgICAgICBhdCA9IGF0LmFuY2hvcjtcbiAgICAgIH1cblxuICAgICAgaWYgKFBvaW50LmlzUG9pbnQoYXQpKSB7XG4gICAgICAgIHZhciBmdXJ0aGVzdFZvaWQgPSBFZGl0b3Iudm9pZChlZGl0b3IsIHtcbiAgICAgICAgICBhdCxcbiAgICAgICAgICBtb2RlOiAnaGlnaGVzdCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCF2b2lkcyAmJiBmdXJ0aGVzdFZvaWQpIHtcbiAgICAgICAgICB2YXIgWywgdm9pZFBhdGhdID0gZnVydGhlc3RWb2lkO1xuICAgICAgICAgIGF0ID0gdm9pZFBhdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG9wdHMgPSB7XG4gICAgICAgICAgICB1bml0LFxuICAgICAgICAgICAgZGlzdGFuY2VcbiAgICAgICAgICB9O1xuICAgICAgICAgIHZhciB0YXJnZXQgPSByZXZlcnNlID8gRWRpdG9yLmJlZm9yZShlZGl0b3IsIGF0LCBvcHRzKSB8fCBFZGl0b3Iuc3RhcnQoZWRpdG9yLCBbXSkgOiBFZGl0b3IuYWZ0ZXIoZWRpdG9yLCBhdCwgb3B0cykgfHwgRWRpdG9yLmVuZChlZGl0b3IsIFtdKTtcbiAgICAgICAgICBhdCA9IHtcbiAgICAgICAgICAgIGFuY2hvcjogYXQsXG4gICAgICAgICAgICBmb2N1czogdGFyZ2V0XG4gICAgICAgICAgfTtcbiAgICAgICAgICBoYW5naW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoUGF0aC5pc1BhdGgoYXQpKSB7XG4gICAgICAgIFRyYW5zZm9ybXMucmVtb3ZlTm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgYXQsXG4gICAgICAgICAgdm9pZHNcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKFJhbmdlLmlzQ29sbGFwc2VkKGF0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghaGFuZ2luZykge1xuICAgICAgICB2YXIgWywgX2VuZF0gPSBSYW5nZS5lZGdlcyhhdCk7XG4gICAgICAgIHZhciBlbmRPZkRvYyA9IEVkaXRvci5lbmQoZWRpdG9yLCBbXSk7XG5cbiAgICAgICAgaWYgKCFQb2ludC5lcXVhbHMoX2VuZCwgZW5kT2ZEb2MpKSB7XG4gICAgICAgICAgYXQgPSBFZGl0b3IudW5oYW5nUmFuZ2UoZWRpdG9yLCBhdCwge1xuICAgICAgICAgICAgdm9pZHNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgW3N0YXJ0LCBlbmRdID0gUmFuZ2UuZWRnZXMoYXQpO1xuICAgICAgdmFyIHN0YXJ0QmxvY2sgPSBFZGl0b3IuYWJvdmUoZWRpdG9yLCB7XG4gICAgICAgIG1hdGNoOiBuID0+IEVkaXRvci5pc0Jsb2NrKGVkaXRvciwgbiksXG4gICAgICAgIGF0OiBzdGFydCxcbiAgICAgICAgdm9pZHNcbiAgICAgIH0pO1xuICAgICAgdmFyIGVuZEJsb2NrID0gRWRpdG9yLmFib3ZlKGVkaXRvciwge1xuICAgICAgICBtYXRjaDogbiA9PiBFZGl0b3IuaXNCbG9jayhlZGl0b3IsIG4pLFxuICAgICAgICBhdDogZW5kLFxuICAgICAgICB2b2lkc1xuICAgICAgfSk7XG4gICAgICB2YXIgaXNBY3Jvc3NCbG9ja3MgPSBzdGFydEJsb2NrICYmIGVuZEJsb2NrICYmICFQYXRoLmVxdWFscyhzdGFydEJsb2NrWzFdLCBlbmRCbG9ja1sxXSk7XG4gICAgICB2YXIgaXNTaW5nbGVUZXh0ID0gUGF0aC5lcXVhbHMoc3RhcnQucGF0aCwgZW5kLnBhdGgpO1xuICAgICAgdmFyIHN0YXJ0Vm9pZCA9IHZvaWRzID8gbnVsbCA6IEVkaXRvci52b2lkKGVkaXRvciwge1xuICAgICAgICBhdDogc3RhcnQsXG4gICAgICAgIG1vZGU6ICdoaWdoZXN0J1xuICAgICAgfSk7XG4gICAgICB2YXIgZW5kVm9pZCA9IHZvaWRzID8gbnVsbCA6IEVkaXRvci52b2lkKGVkaXRvciwge1xuICAgICAgICBhdDogZW5kLFxuICAgICAgICBtb2RlOiAnaGlnaGVzdCdcbiAgICAgIH0pOyAvLyBJZiB0aGUgc3RhcnQgb3IgZW5kIHBvaW50cyBhcmUgaW5zaWRlIGFuIGlubGluZSB2b2lkLCBudWRnZSB0aGVtIG91dC5cblxuICAgICAgaWYgKHN0YXJ0Vm9pZCkge1xuICAgICAgICB2YXIgYmVmb3JlID0gRWRpdG9yLmJlZm9yZShlZGl0b3IsIHN0YXJ0KTtcblxuICAgICAgICBpZiAoYmVmb3JlICYmIHN0YXJ0QmxvY2sgJiYgUGF0aC5pc0FuY2VzdG9yKHN0YXJ0QmxvY2tbMV0sIGJlZm9yZS5wYXRoKSkge1xuICAgICAgICAgIHN0YXJ0ID0gYmVmb3JlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmRWb2lkKSB7XG4gICAgICAgIHZhciBhZnRlciA9IEVkaXRvci5hZnRlcihlZGl0b3IsIGVuZCk7XG5cbiAgICAgICAgaWYgKGFmdGVyICYmIGVuZEJsb2NrICYmIFBhdGguaXNBbmNlc3RvcihlbmRCbG9ja1sxXSwgYWZ0ZXIucGF0aCkpIHtcbiAgICAgICAgICBlbmQgPSBhZnRlcjtcbiAgICAgICAgfVxuICAgICAgfSAvLyBHZXQgdGhlIGhpZ2hlc3Qgbm9kZXMgdGhhdCBhcmUgY29tcGxldGVseSBpbnNpZGUgdGhlIHJhbmdlLCBhcyB3ZWxsIGFzXG4gICAgICAvLyB0aGUgc3RhcnQgYW5kIGVuZCBub2Rlcy5cblxuXG4gICAgICB2YXIgbWF0Y2hlcyA9IFtdO1xuICAgICAgdmFyIGxhc3RQYXRoO1xuXG4gICAgICBmb3IgKHZhciBlbnRyeSBvZiBFZGl0b3Iubm9kZXMoZWRpdG9yLCB7XG4gICAgICAgIGF0LFxuICAgICAgICB2b2lkc1xuICAgICAgfSkpIHtcbiAgICAgICAgdmFyIFtub2RlLCBwYXRoXSA9IGVudHJ5O1xuXG4gICAgICAgIGlmIChsYXN0UGF0aCAmJiBQYXRoLmNvbXBhcmUocGF0aCwgbGFzdFBhdGgpID09PSAwKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXZvaWRzICYmIEVkaXRvci5pc1ZvaWQoZWRpdG9yLCBub2RlKSB8fCAhUGF0aC5pc0NvbW1vbihwYXRoLCBzdGFydC5wYXRoKSAmJiAhUGF0aC5pc0NvbW1vbihwYXRoLCBlbmQucGF0aCkpIHtcbiAgICAgICAgICBtYXRjaGVzLnB1c2goZW50cnkpO1xuICAgICAgICAgIGxhc3RQYXRoID0gcGF0aDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgcGF0aFJlZnMgPSBBcnJheS5mcm9tKG1hdGNoZXMsIF9yZWYgPT4ge1xuICAgICAgICB2YXIgWywgcF0gPSBfcmVmO1xuICAgICAgICByZXR1cm4gRWRpdG9yLnBhdGhSZWYoZWRpdG9yLCBwKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIHN0YXJ0UmVmID0gRWRpdG9yLnBvaW50UmVmKGVkaXRvciwgc3RhcnQpO1xuICAgICAgdmFyIGVuZFJlZiA9IEVkaXRvci5wb2ludFJlZihlZGl0b3IsIGVuZCk7XG5cbiAgICAgIGlmICghaXNTaW5nbGVUZXh0ICYmICFzdGFydFZvaWQpIHtcbiAgICAgICAgdmFyIF9wb2ludCA9IHN0YXJ0UmVmLmN1cnJlbnQ7XG4gICAgICAgIHZhciBbX25vZGVdID0gRWRpdG9yLmxlYWYoZWRpdG9yLCBfcG9pbnQpO1xuICAgICAgICB2YXIge1xuICAgICAgICAgIHBhdGg6IF9wYXRoXG4gICAgICAgIH0gPSBfcG9pbnQ7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgb2Zmc2V0XG4gICAgICAgIH0gPSBzdGFydDtcblxuICAgICAgICB2YXIgdGV4dCA9IF9ub2RlLnRleHQuc2xpY2Uob2Zmc2V0KTtcblxuICAgICAgICBpZiAodGV4dC5sZW5ndGggPiAwKSBlZGl0b3IuYXBwbHkoe1xuICAgICAgICAgIHR5cGU6ICdyZW1vdmVfdGV4dCcsXG4gICAgICAgICAgcGF0aDogX3BhdGgsXG4gICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgIHRleHRcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIHBhdGhSZWYgb2YgcGF0aFJlZnMpIHtcbiAgICAgICAgdmFyIF9wYXRoMiA9IHBhdGhSZWYudW5yZWYoKTtcblxuICAgICAgICBUcmFuc2Zvcm1zLnJlbW92ZU5vZGVzKGVkaXRvciwge1xuICAgICAgICAgIGF0OiBfcGF0aDIsXG4gICAgICAgICAgdm9pZHNcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghZW5kVm9pZCkge1xuICAgICAgICB2YXIgX3BvaW50MiA9IGVuZFJlZi5jdXJyZW50O1xuICAgICAgICB2YXIgW19ub2RlMl0gPSBFZGl0b3IubGVhZihlZGl0b3IsIF9wb2ludDIpO1xuICAgICAgICB2YXIge1xuICAgICAgICAgIHBhdGg6IF9wYXRoM1xuICAgICAgICB9ID0gX3BvaW50MjtcblxuICAgICAgICB2YXIgX29mZnNldCA9IGlzU2luZ2xlVGV4dCA/IHN0YXJ0Lm9mZnNldCA6IDA7XG5cbiAgICAgICAgdmFyIF90ZXh0ID0gX25vZGUyLnRleHQuc2xpY2UoX29mZnNldCwgZW5kLm9mZnNldCk7XG5cbiAgICAgICAgaWYgKF90ZXh0Lmxlbmd0aCA+IDApIGVkaXRvci5hcHBseSh7XG4gICAgICAgICAgdHlwZTogJ3JlbW92ZV90ZXh0JyxcbiAgICAgICAgICBwYXRoOiBfcGF0aDMsXG4gICAgICAgICAgb2Zmc2V0OiBfb2Zmc2V0LFxuICAgICAgICAgIHRleHQ6IF90ZXh0XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzU2luZ2xlVGV4dCAmJiBpc0Fjcm9zc0Jsb2NrcyAmJiBlbmRSZWYuY3VycmVudCAmJiBzdGFydFJlZi5jdXJyZW50KSB7XG4gICAgICAgIFRyYW5zZm9ybXMubWVyZ2VOb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICBhdDogZW5kUmVmLmN1cnJlbnQsXG4gICAgICAgICAgaGFuZ2luZzogdHJ1ZSxcbiAgICAgICAgICB2b2lkc1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdmFyIHBvaW50ID0gcmV2ZXJzZSA/IHN0YXJ0UmVmLnVucmVmKCkgfHwgZW5kUmVmLnVucmVmKCkgOiBlbmRSZWYudW5yZWYoKSB8fCBzdGFydFJlZi51bnJlZigpO1xuXG4gICAgICBpZiAob3B0aW9ucy5hdCA9PSBudWxsICYmIHBvaW50KSB7XG4gICAgICAgIFRyYW5zZm9ybXMuc2VsZWN0KGVkaXRvciwgcG9pbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEluc2VydCBhIGZyYWdtZW50IGF0IGEgc3BlY2lmaWMgbG9jYXRpb24gaW4gdGhlIGVkaXRvci5cclxuICAgKi9cbiAgaW5zZXJ0RnJhZ21lbnQoZWRpdG9yLCBmcmFnbWVudCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICBFZGl0b3Iud2l0aG91dE5vcm1hbGl6aW5nKGVkaXRvciwgKCkgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgaGFuZ2luZyA9IGZhbHNlLFxuICAgICAgICB2b2lkcyA9IGZhbHNlXG4gICAgICB9ID0gb3B0aW9ucztcbiAgICAgIHZhciB7XG4gICAgICAgIGF0ID0gZWRpdG9yLnNlbGVjdGlvblxuICAgICAgfSA9IG9wdGlvbnM7XG5cbiAgICAgIGlmICghZnJhZ21lbnQubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFhdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKFJhbmdlLmlzUmFuZ2UoYXQpKSB7XG4gICAgICAgIGlmICghaGFuZ2luZykge1xuICAgICAgICAgIGF0ID0gRWRpdG9yLnVuaGFuZ1JhbmdlKGVkaXRvciwgYXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFJhbmdlLmlzQ29sbGFwc2VkKGF0KSkge1xuICAgICAgICAgIGF0ID0gYXQuYW5jaG9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBbLCBlbmRdID0gUmFuZ2UuZWRnZXMoYXQpO1xuXG4gICAgICAgICAgaWYgKCF2b2lkcyAmJiBFZGl0b3Iudm9pZChlZGl0b3IsIHtcbiAgICAgICAgICAgIGF0OiBlbmRcbiAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBwb2ludFJlZiA9IEVkaXRvci5wb2ludFJlZihlZGl0b3IsIGVuZCk7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5kZWxldGUoZWRpdG9yLCB7XG4gICAgICAgICAgICBhdFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGF0ID0gcG9pbnRSZWYudW5yZWYoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChQYXRoLmlzUGF0aChhdCkpIHtcbiAgICAgICAgYXQgPSBFZGl0b3Iuc3RhcnQoZWRpdG9yLCBhdCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdm9pZHMgJiYgRWRpdG9yLnZvaWQoZWRpdG9yLCB7XG4gICAgICAgIGF0XG4gICAgICB9KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIElmIHRoZSBpbnNlcnQgcG9pbnQgaXMgYXQgdGhlIGVkZ2Ugb2YgYW4gaW5saW5lIG5vZGUsIG1vdmUgaXQgb3V0c2lkZVxuICAgICAgLy8gaW5zdGVhZCBzaW5jZSBpdCB3aWxsIG5lZWQgdG8gYmUgc3BsaXQgb3RoZXJ3aXNlLlxuXG5cbiAgICAgIHZhciBpbmxpbmVFbGVtZW50TWF0Y2ggPSBFZGl0b3IuYWJvdmUoZWRpdG9yLCB7XG4gICAgICAgIGF0LFxuICAgICAgICBtYXRjaDogbiA9PiBFZGl0b3IuaXNJbmxpbmUoZWRpdG9yLCBuKSxcbiAgICAgICAgbW9kZTogJ2hpZ2hlc3QnLFxuICAgICAgICB2b2lkc1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChpbmxpbmVFbGVtZW50TWF0Y2gpIHtcbiAgICAgICAgdmFyIFssIF9pbmxpbmVQYXRoXSA9IGlubGluZUVsZW1lbnRNYXRjaDtcblxuICAgICAgICBpZiAoRWRpdG9yLmlzRW5kKGVkaXRvciwgYXQsIF9pbmxpbmVQYXRoKSkge1xuICAgICAgICAgIHZhciBhZnRlciA9IEVkaXRvci5hZnRlcihlZGl0b3IsIF9pbmxpbmVQYXRoKTtcbiAgICAgICAgICBhdCA9IGFmdGVyO1xuICAgICAgICB9IGVsc2UgaWYgKEVkaXRvci5pc1N0YXJ0KGVkaXRvciwgYXQsIF9pbmxpbmVQYXRoKSkge1xuICAgICAgICAgIHZhciBiZWZvcmUgPSBFZGl0b3IuYmVmb3JlKGVkaXRvciwgX2lubGluZVBhdGgpO1xuICAgICAgICAgIGF0ID0gYmVmb3JlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBibG9ja01hdGNoID0gRWRpdG9yLmFib3ZlKGVkaXRvciwge1xuICAgICAgICBtYXRjaDogbiA9PiBFZGl0b3IuaXNCbG9jayhlZGl0b3IsIG4pLFxuICAgICAgICBhdCxcbiAgICAgICAgdm9pZHNcbiAgICAgIH0pO1xuICAgICAgdmFyIFssIGJsb2NrUGF0aF0gPSBibG9ja01hdGNoO1xuICAgICAgdmFyIGlzQmxvY2tTdGFydCA9IEVkaXRvci5pc1N0YXJ0KGVkaXRvciwgYXQsIGJsb2NrUGF0aCk7XG4gICAgICB2YXIgaXNCbG9ja0VuZCA9IEVkaXRvci5pc0VuZChlZGl0b3IsIGF0LCBibG9ja1BhdGgpO1xuICAgICAgdmFyIGlzQmxvY2tFbXB0eSA9IGlzQmxvY2tTdGFydCAmJiBpc0Jsb2NrRW5kO1xuICAgICAgdmFyIG1lcmdlU3RhcnQgPSAhaXNCbG9ja1N0YXJ0IHx8IGlzQmxvY2tTdGFydCAmJiBpc0Jsb2NrRW5kO1xuICAgICAgdmFyIG1lcmdlRW5kID0gIWlzQmxvY2tFbmQ7XG4gICAgICB2YXIgWywgZmlyc3RQYXRoXSA9IE5vZGUuZmlyc3Qoe1xuICAgICAgICBjaGlsZHJlbjogZnJhZ21lbnRcbiAgICAgIH0sIFtdKTtcbiAgICAgIHZhciBbLCBsYXN0UGF0aF0gPSBOb2RlLmxhc3Qoe1xuICAgICAgICBjaGlsZHJlbjogZnJhZ21lbnRcbiAgICAgIH0sIFtdKTtcbiAgICAgIHZhciBtYXRjaGVzID0gW107XG5cbiAgICAgIHZhciBtYXRjaGVyID0gX3JlZjIgPT4ge1xuICAgICAgICB2YXIgW24sIHBdID0gX3JlZjI7XG4gICAgICAgIHZhciBpc1Jvb3QgPSBwLmxlbmd0aCA9PT0gMDtcblxuICAgICAgICBpZiAoaXNSb290KSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzQmxvY2tFbXB0eSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lcmdlU3RhcnQgJiYgUGF0aC5pc0FuY2VzdG9yKHAsIGZpcnN0UGF0aCkgJiYgRWxlbWVudC5pc0VsZW1lbnQobikgJiYgIWVkaXRvci5pc1ZvaWQobikgJiYgIWVkaXRvci5pc0lubGluZShuKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZXJnZUVuZCAmJiBQYXRoLmlzQW5jZXN0b3IocCwgbGFzdFBhdGgpICYmIEVsZW1lbnQuaXNFbGVtZW50KG4pICYmICFlZGl0b3IuaXNWb2lkKG4pICYmICFlZGl0b3IuaXNJbmxpbmUobikpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIGVudHJ5IG9mIE5vZGUubm9kZXMoe1xuICAgICAgICBjaGlsZHJlbjogZnJhZ21lbnRcbiAgICAgIH0sIHtcbiAgICAgICAgcGFzczogbWF0Y2hlclxuICAgICAgfSkpIHtcbiAgICAgICAgaWYgKG1hdGNoZXIoZW50cnkpKSB7XG4gICAgICAgICAgbWF0Y2hlcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgc3RhcnRzID0gW107XG4gICAgICB2YXIgbWlkZGxlcyA9IFtdO1xuICAgICAgdmFyIGVuZHMgPSBbXTtcbiAgICAgIHZhciBzdGFydGluZyA9IHRydWU7XG4gICAgICB2YXIgaGFzQmxvY2tzID0gZmFsc2U7XG5cbiAgICAgIGZvciAodmFyIFtub2RlXSBvZiBtYXRjaGVzKSB7XG4gICAgICAgIGlmIChFbGVtZW50LmlzRWxlbWVudChub2RlKSAmJiAhZWRpdG9yLmlzSW5saW5lKG5vZGUpKSB7XG4gICAgICAgICAgc3RhcnRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBoYXNCbG9ja3MgPSB0cnVlO1xuICAgICAgICAgIG1pZGRsZXMucHVzaChub2RlKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGFydGluZykge1xuICAgICAgICAgIHN0YXJ0cy5wdXNoKG5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVuZHMucHVzaChub2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgW2lubGluZU1hdGNoXSA9IEVkaXRvci5ub2RlcyhlZGl0b3IsIHtcbiAgICAgICAgYXQsXG4gICAgICAgIG1hdGNoOiBuID0+IFRleHQuaXNUZXh0KG4pIHx8IEVkaXRvci5pc0lubGluZShlZGl0b3IsIG4pLFxuICAgICAgICBtb2RlOiAnaGlnaGVzdCcsXG4gICAgICAgIHZvaWRzXG4gICAgICB9KTtcbiAgICAgIHZhciBbLCBpbmxpbmVQYXRoXSA9IGlubGluZU1hdGNoO1xuICAgICAgdmFyIGlzSW5saW5lU3RhcnQgPSBFZGl0b3IuaXNTdGFydChlZGl0b3IsIGF0LCBpbmxpbmVQYXRoKTtcbiAgICAgIHZhciBpc0lubGluZUVuZCA9IEVkaXRvci5pc0VuZChlZGl0b3IsIGF0LCBpbmxpbmVQYXRoKTtcbiAgICAgIHZhciBtaWRkbGVSZWYgPSBFZGl0b3IucGF0aFJlZihlZGl0b3IsIGlzQmxvY2tFbmQgPyBQYXRoLm5leHQoYmxvY2tQYXRoKSA6IGJsb2NrUGF0aCk7XG4gICAgICB2YXIgZW5kUmVmID0gRWRpdG9yLnBhdGhSZWYoZWRpdG9yLCBpc0lubGluZUVuZCA/IFBhdGgubmV4dChpbmxpbmVQYXRoKSA6IGlubGluZVBhdGgpO1xuICAgICAgdmFyIGJsb2NrUGF0aFJlZiA9IEVkaXRvci5wYXRoUmVmKGVkaXRvciwgYmxvY2tQYXRoKTtcbiAgICAgIFRyYW5zZm9ybXMuc3BsaXROb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgYXQsXG4gICAgICAgIG1hdGNoOiBuID0+IGhhc0Jsb2NrcyA/IEVkaXRvci5pc0Jsb2NrKGVkaXRvciwgbikgOiBUZXh0LmlzVGV4dChuKSB8fCBFZGl0b3IuaXNJbmxpbmUoZWRpdG9yLCBuKSxcbiAgICAgICAgbW9kZTogaGFzQmxvY2tzID8gJ2xvd2VzdCcgOiAnaGlnaGVzdCcsXG4gICAgICAgIHZvaWRzXG4gICAgICB9KTtcbiAgICAgIHZhciBzdGFydFJlZiA9IEVkaXRvci5wYXRoUmVmKGVkaXRvciwgIWlzSW5saW5lU3RhcnQgfHwgaXNJbmxpbmVTdGFydCAmJiBpc0lubGluZUVuZCA/IFBhdGgubmV4dChpbmxpbmVQYXRoKSA6IGlubGluZVBhdGgpO1xuICAgICAgVHJhbnNmb3Jtcy5pbnNlcnROb2RlcyhlZGl0b3IsIHN0YXJ0cywge1xuICAgICAgICBhdDogc3RhcnRSZWYuY3VycmVudCxcbiAgICAgICAgbWF0Y2g6IG4gPT4gVGV4dC5pc1RleHQobikgfHwgRWRpdG9yLmlzSW5saW5lKGVkaXRvciwgbiksXG4gICAgICAgIG1vZGU6ICdoaWdoZXN0JyxcbiAgICAgICAgdm9pZHNcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaXNCbG9ja0VtcHR5ICYmIG1pZGRsZXMubGVuZ3RoKSB7XG4gICAgICAgIFRyYW5zZm9ybXMuZGVsZXRlKGVkaXRvciwge1xuICAgICAgICAgIGF0OiBibG9ja1BhdGhSZWYudW5yZWYoKSxcbiAgICAgICAgICB2b2lkc1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgVHJhbnNmb3Jtcy5pbnNlcnROb2RlcyhlZGl0b3IsIG1pZGRsZXMsIHtcbiAgICAgICAgYXQ6IG1pZGRsZVJlZi5jdXJyZW50LFxuICAgICAgICBtYXRjaDogbiA9PiBFZGl0b3IuaXNCbG9jayhlZGl0b3IsIG4pLFxuICAgICAgICBtb2RlOiAnbG93ZXN0JyxcbiAgICAgICAgdm9pZHNcbiAgICAgIH0pO1xuICAgICAgVHJhbnNmb3Jtcy5pbnNlcnROb2RlcyhlZGl0b3IsIGVuZHMsIHtcbiAgICAgICAgYXQ6IGVuZFJlZi5jdXJyZW50LFxuICAgICAgICBtYXRjaDogbiA9PiBUZXh0LmlzVGV4dChuKSB8fCBFZGl0b3IuaXNJbmxpbmUoZWRpdG9yLCBuKSxcbiAgICAgICAgbW9kZTogJ2hpZ2hlc3QnLFxuICAgICAgICB2b2lkc1xuICAgICAgfSk7XG5cbiAgICAgIGlmICghb3B0aW9ucy5hdCkge1xuICAgICAgICB2YXIgcGF0aDtcblxuICAgICAgICBpZiAoZW5kcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcGF0aCA9IFBhdGgucHJldmlvdXMoZW5kUmVmLmN1cnJlbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKG1pZGRsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHBhdGggPSBQYXRoLnByZXZpb3VzKG1pZGRsZVJlZi5jdXJyZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXRoID0gUGF0aC5wcmV2aW91cyhzdGFydFJlZi5jdXJyZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfZW5kMiA9IEVkaXRvci5lbmQoZWRpdG9yLCBwYXRoKTtcblxuICAgICAgICBUcmFuc2Zvcm1zLnNlbGVjdChlZGl0b3IsIF9lbmQyKTtcbiAgICAgIH1cblxuICAgICAgc3RhcnRSZWYudW5yZWYoKTtcbiAgICAgIG1pZGRsZVJlZi51bnJlZigpO1xuICAgICAgZW5kUmVmLnVucmVmKCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogSW5zZXJ0IGEgc3RyaW5nIG9mIHRleHQgaW4gdGhlIEVkaXRvci5cclxuICAgKi9cbiAgaW5zZXJ0VGV4dChlZGl0b3IsIHRleHQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgRWRpdG9yLndpdGhvdXROb3JtYWxpemluZyhlZGl0b3IsICgpID0+IHtcbiAgICAgIHZhciB7XG4gICAgICAgIHZvaWRzID0gZmFsc2VcbiAgICAgIH0gPSBvcHRpb25zO1xuICAgICAgdmFyIHtcbiAgICAgICAgYXQgPSBlZGl0b3Iuc2VsZWN0aW9uXG4gICAgICB9ID0gb3B0aW9ucztcblxuICAgICAgaWYgKCFhdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChQYXRoLmlzUGF0aChhdCkpIHtcbiAgICAgICAgYXQgPSBFZGl0b3IucmFuZ2UoZWRpdG9yLCBhdCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChSYW5nZS5pc1JhbmdlKGF0KSkge1xuICAgICAgICBpZiAoUmFuZ2UuaXNDb2xsYXBzZWQoYXQpKSB7XG4gICAgICAgICAgYXQgPSBhdC5hbmNob3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGVuZCA9IFJhbmdlLmVuZChhdCk7XG5cbiAgICAgICAgICBpZiAoIXZvaWRzICYmIEVkaXRvci52b2lkKGVkaXRvciwge1xuICAgICAgICAgICAgYXQ6IGVuZFxuICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHBvaW50UmVmID0gRWRpdG9yLnBvaW50UmVmKGVkaXRvciwgZW5kKTtcbiAgICAgICAgICBUcmFuc2Zvcm1zLmRlbGV0ZShlZGl0b3IsIHtcbiAgICAgICAgICAgIGF0LFxuICAgICAgICAgICAgdm9pZHNcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhdCA9IHBvaW50UmVmLnVucmVmKCk7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5zZXRTZWxlY3Rpb24oZWRpdG9yLCB7XG4gICAgICAgICAgICBhbmNob3I6IGF0LFxuICAgICAgICAgICAgZm9jdXM6IGF0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCF2b2lkcyAmJiBFZGl0b3Iudm9pZChlZGl0b3IsIHtcbiAgICAgICAgYXRcbiAgICAgIH0pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHtcbiAgICAgICAgcGF0aCxcbiAgICAgICAgb2Zmc2V0XG4gICAgICB9ID0gYXQ7XG4gICAgICBpZiAodGV4dC5sZW5ndGggPiAwKSBlZGl0b3IuYXBwbHkoe1xuICAgICAgICB0eXBlOiAnaW5zZXJ0X3RleHQnLFxuICAgICAgICBwYXRoLFxuICAgICAgICBvZmZzZXQsXG4gICAgICAgIHRleHRcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbn07XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cbnZhciBUcmFuc2Zvcm1zID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgR2VuZXJhbFRyYW5zZm9ybXMpLCBOb2RlVHJhbnNmb3JtcyksIFNlbGVjdGlvblRyYW5zZm9ybXMpLCBUZXh0VHJhbnNmb3Jtcyk7XG5cbmV4cG9ydCB7IEVkaXRvciwgRWxlbWVudCwgTG9jYXRpb24sIE5vZGUsIE9wZXJhdGlvbiwgUGF0aCwgUGF0aFJlZiwgUG9pbnQsIFBvaW50UmVmLCBSYW5nZSwgUmFuZ2VSZWYsIFNwYW4sIFRleHQsIFRyYW5zZm9ybXMsIGNyZWF0ZUVkaXRvciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXMuanMubWFwXG4iLCJ2YXIgX19yZWFkID0gKHRoaXMgJiYgdGhpcy5fX3JlYWQpIHx8IGZ1bmN0aW9uIChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn07XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxudmFyIERpYWxvZ0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcclxudmFyIERpYWxvZ1Zpc2libGVQcm92aWRlciA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIGNoaWxkcmVuID0gX2EuY2hpbGRyZW47XHJcbiAgICB2YXIgX2IgPSBfX3JlYWQodXNlU3RhdGUoZmFsc2UpLCAyKSwgdmlzaWJsZSA9IF9iWzBdLCBzZXRWaXNpYmxlID0gX2JbMV07XHJcbiAgICB2YXIgdmFsdWUgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IHZpc2libGU6IHZpc2libGUsIHNldFZpc2libGU6IHNldFZpc2libGUgfSk7IH0sIFt2aXNpYmxlLCBzZXRWaXNpYmxlXSk7XHJcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGlhbG9nQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogdmFsdWUgfSwgY2hpbGRyZW4pKTtcclxufTtcclxuZXhwb3J0IHZhciB1c2VEaWFsb2dJc1Zpc2libGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICByZXR1cm4gKF9hID0gdXNlQ29udGV4dChEaWFsb2dDb250ZXh0KSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnZpc2libGU7XHJcbn07XHJcbmV4cG9ydCB2YXIgdXNlU2V0RGlhbG9nSXNWaXNpYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgcmV0dXJuIChfYSA9IHVzZUNvbnRleHQoRGlhbG9nQ29udGV4dCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRWaXNpYmxlO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBEaWFsb2dWaXNpYmxlUHJvdmlkZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPURpYWxvZ1Zpc2libGVQcm92aWRlci5qcy5tYXAiLCJpbXBvcnQgeyBsYXp5TG9hZCwgdXNlQWxsRm9jdXNlZE5vZGVJZHMsIHVzZVVpVHJhbnNsYXRvciwgfSBmcm9tICdAcmVhY3QtcGFnZS9lZGl0b3InO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBFZGl0YWJsZSwgdXNlRm9jdXNlZCwgdXNlU2VsZWN0ZWQgfSBmcm9tICdzbGF0ZS1yZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpYWxvZ0lzVmlzaWJsZSB9IGZyb20gJy4vRGlhbG9nVmlzaWJsZVByb3ZpZGVyJztcclxuaW1wb3J0IHsgdXNlT25LZXlEb3duIH0gZnJvbSAnLi9ob3RrZXlIb29rcyc7XHJcbmltcG9ydCB7IHVzZVJlbmRlckVsZW1lbnQsIHVzZVJlbmRlckxlYXZlIH0gZnJvbSAnLi9yZW5kZXJIb29rcyc7XHJcbnZhciBIb3ZlckJ1dHRvbnMgPSBsYXp5TG9hZChmdW5jdGlvbiAoKSB7IHJldHVybiBpbXBvcnQoJy4vSG92ZXJCdXR0b25zJyk7IH0pO1xyXG52YXIgU2xhdGVFZGl0YWJsZSA9IFJlYWN0Lm1lbW8oZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICB2YXIgcGx1Z2lucyA9IHByb3BzLnBsdWdpbnMsIGRlZmF1bHRQbHVnaW5UeXBlID0gcHJvcHMuZGVmYXVsdFBsdWdpblR5cGUsIHJlYWRPbmx5ID0gcHJvcHMucmVhZE9ubHksIHBsYWNlaG9sZGVyID0gcHJvcHMucGxhY2Vob2xkZXI7XHJcbiAgICB2YXIgaW5qZWN0aW9ucyA9IHtcclxuICAgICAgICB1c2VTZWxlY3RlZDogdXNlU2VsZWN0ZWQsXHJcbiAgICAgICAgdXNlRm9jdXNlZDogdXNlRm9jdXNlZCxcclxuICAgIH07XHJcbiAgICB2YXIgcmVuZGVyRWxlbWVudCA9IHVzZVJlbmRlckVsZW1lbnQoeyBwbHVnaW5zOiBwbHVnaW5zLCBkZWZhdWx0UGx1Z2luVHlwZTogZGVmYXVsdFBsdWdpblR5cGUsIGluamVjdGlvbnM6IGluamVjdGlvbnMgfSwgW10pO1xyXG4gICAgdmFyIHJlbmRlckxlYWYgPSB1c2VSZW5kZXJMZWF2ZSh7IHBsdWdpbnM6IHBsdWdpbnMsIGluamVjdGlvbnM6IGluamVjdGlvbnMgfSwgW10pO1xyXG4gICAgdmFyIG9uS2V5RG93biA9IHVzZU9uS2V5RG93bih7IHBsdWdpbnM6IHBsdWdpbnMgfSwgW10pO1xyXG4gICAgLy8gdGhpcyBpcyByZXF1aXJlZCBzbyB0aGF0IGRpYWxvZ3MgJiBjb250cm9scyBkb24ndCBtZXNzIHdpdGggc2xhdGUncyBzZWxlY3Rpb25cclxuICAgIHZhciBkaWFsb2dWaXNpYmxlID0gdXNlRGlhbG9nSXNWaXNpYmxlKCk7XHJcbiAgICB2YXIgbXVsdGlwbGVOb2Rlc1NlbGVjdGVkID0gdXNlQWxsRm9jdXNlZE5vZGVJZHMoKS5sZW5ndGggPiAxO1xyXG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEVkaXRhYmxlLCB7IHBsYWNlaG9sZGVyOiByZWFkT25seSA/IHVuZGVmaW5lZCA6IHBsYWNlaG9sZGVyLCByZWFkT25seTogZGlhbG9nVmlzaWJsZSB8fCByZWFkT25seSB8fCBtdWx0aXBsZU5vZGVzU2VsZWN0ZWQsIHJlbmRlckVsZW1lbnQ6IHJlbmRlckVsZW1lbnQsIHJlbmRlckxlYWY6IHJlbmRlckxlYWYsIG9uS2V5RG93bjogcmVhZE9ubHkgPyB1bmRlZmluZWQgOiBvbktleURvd24gfSkpO1xyXG59KTtcclxudmFyIFNsYXRlRWRpdG9yID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICB2YXIgcGx1Z2lucyA9IHByb3BzLnBsdWdpbnMsIGZvY3VzZWQgPSBwcm9wcy5mb2N1c2VkLCByZWFkT25seSA9IHByb3BzLnJlYWRPbmx5O1xyXG4gICAgdmFyIHQgPSB1c2VVaVRyYW5zbGF0b3IoKS50O1xyXG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxyXG4gICAgICAgICFyZWFkT25seSAmJiBmb2N1c2VkICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KEhvdmVyQnV0dG9ucywgeyBwbHVnaW5zOiBwcm9wcy5wbHVnaW5zLCB0cmFuc2xhdGlvbnM6IHByb3BzLnRyYW5zbGF0aW9ucyB9KSksXHJcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTbGF0ZUVkaXRhYmxlLCB7IHBsYWNlaG9sZGVyOiB0KHByb3BzLnRyYW5zbGF0aW9ucy5wbGFjZWhvbGRlciksIHJlYWRPbmx5OiByZWFkT25seSwgcGx1Z2luczogcGx1Z2lucywgZGVmYXVsdFBsdWdpblR5cGU6IHByb3BzLmRlZmF1bHRQbHVnaW5UeXBlIH0pKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU2xhdGVFZGl0b3IpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1TbGF0ZUVkaXRvci5qcy5tYXAiLCJpbXBvcnQgaXNIb3RrZXkgZnJvbSAnaXMtaG90a2V5JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUmVhY3RFZGl0b3IgfSBmcm9tICdzbGF0ZS1yZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNsYXRlIH0gZnJvbSAnc2xhdGUtcmVhY3QnO1xyXG5pbXBvcnQgeyBhZGRQbHVnaW4gfSBmcm9tICcuLi9ob29rcy91c2VBZGRQbHVnaW4nO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50Tm9kZVdpdGhQbHVnaW4gfSBmcm9tICcuLi9ob29rcy91c2VDdXJyZW50Tm9kZVdpdGhQbHVnaW4nO1xyXG5pbXBvcnQgeyByZW1vdmVQbHVnaW4gfSBmcm9tICcuLi9ob29rcy91c2VSZW1vdmVQbHVnaW4nO1xyXG5leHBvcnQgdmFyIHVzZU9uS2V5RG93biA9IGZ1bmN0aW9uIChfYSwgZGVwcykge1xyXG4gICAgdmFyIHBsdWdpbnMgPSBfYS5wbHVnaW5zO1xyXG4gICAgdmFyIGVkaXRvciA9IHVzZVNsYXRlKCk7XHJcbiAgICByZXR1cm4gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgcGx1Z2luc1xyXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChwbHVnaW4pIHsgcmV0dXJuIHBsdWdpbi5ob3RLZXk7IH0pXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcclxuICAgICAgICAgICAgaWYgKGlzSG90a2V5KHBsdWdpbi5ob3RLZXksIGV2ZW50KSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHZhciBub2RlID0gZ2V0Q3VycmVudE5vZGVXaXRoUGx1Z2luKGVkaXRvciwgcGx1Z2luKTtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUGx1Z2luKGVkaXRvciwgcGx1Z2luKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFBsdWdpbihlZGl0b3IsIHBsdWdpbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHByZXZlbnQgc2xhdGUgZnJvbSBoYW5kbGluZyB1bmRvIGFuZCByZWRvXHJcbiAgICAgICAgaWYgKGlzSG90a2V5KFsnbW9kK3onLCAnbW9kK3knXSwgZXZlbnQpKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNIb3RrZXkoWydlc2MnXSwgZXZlbnQpKSB7XHJcbiAgICAgICAgICAgIFJlYWN0RWRpdG9yLmJsdXIoZWRpdG9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0hvdGtleSgnc2hpZnQrZW50ZXInLCBldmVudCkpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZWRpdG9yLmluc2VydFRleHQoJ1xcbicpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9LCBkZXBzKTtcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG90a2V5SG9va3MuanMubWFwIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJhbnNmb3JtcyB9IGZyb20gJ3NsYXRlJztcclxuaW1wb3J0IHsgdXNlU2xhdGUgfSBmcm9tICdzbGF0ZS1yZWFjdCc7XHJcbmltcG9ydCB7IGdldEN1cnJlbnROb2RlV2l0aFBsdWdpbiB9IGZyb20gJy4vdXNlQ3VycmVudE5vZGVXaXRoUGx1Z2luJztcclxuaW1wb3J0IHsgcmVtb3ZlUGx1Z2luIH0gZnJvbSAnLi91c2VSZW1vdmVQbHVnaW4nO1xyXG5pbXBvcnQgZ2V0Q3VycmVudERhdGEgZnJvbSAnLi4vdXRpbHMvZ2V0Q3VycmVudERhdGEnO1xyXG5leHBvcnQgdmFyIGFkZFBsdWdpbiA9IGZ1bmN0aW9uIChlZGl0b3IsIHBsdWdpbiwgcHJvcHMpIHtcclxuICAgIHZhciBfYTtcclxuICAgIHZhciBfYiA9IHByb3BzIHx8IHt9LCBwYXNzZWREYXRhID0gX2IuZGF0YSwgdGV4dCA9IF9iLnRleHQ7XHJcbiAgICB2YXIgY3VycmVudE5vZGVFbnRyeSA9IGdldEN1cnJlbnROb2RlV2l0aFBsdWdpbihlZGl0b3IsIHBsdWdpbik7XHJcbiAgICBpZiAodGV4dCkge1xyXG4gICAgICAgIHZhciB3aXRoRXh0cmFTcGFjZSA9IHBsdWdpbi5wbHVnaW5UeXBlID09PSAnY29tcG9uZW50JyAmJlxyXG4gICAgICAgICAgICBwbHVnaW4ub2JqZWN0ID09PSAnaW5saW5lJyAmJlxyXG4gICAgICAgICAgICBwbHVnaW4uYWRkRXh0cmFTcGFjZTtcclxuICAgICAgICB2YXIgdGV4dFRvSW5zZXJ0ID0gd2l0aEV4dHJhU3BhY2UgPyB0ZXh0ICsgJyAnIDogdGV4dDtcclxuICAgICAgICBlZGl0b3IuaW5zZXJ0VGV4dCh0ZXh0VG9JbnNlcnQpO1xyXG4gICAgICAgIFRyYW5zZm9ybXMuc2VsZWN0KGVkaXRvciwge1xyXG4gICAgICAgICAgICBhbmNob3I6IGVkaXRvci5zZWxlY3Rpb24uYW5jaG9yLFxyXG4gICAgICAgICAgICBmb2N1czogX19hc3NpZ24oX19hc3NpZ24oe30sIGVkaXRvci5zZWxlY3Rpb24uZm9jdXMpLCB7IG9mZnNldDogZWRpdG9yLnNlbGVjdGlvbi5mb2N1cy5vZmZzZXQgLSB0ZXh0VG9JbnNlcnQubGVuZ3RoIH0pLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdmFyIGRhdGEgPSBwYXNzZWREYXRhIHx8IChwbHVnaW4uZ2V0SW5pdGlhbERhdGEgPyBwbHVnaW4uZ2V0SW5pdGlhbERhdGEoKSA6IG51bGwpO1xyXG4gICAgdmFyIGlzQWN0aXZlID0gQm9vbGVhbihjdXJyZW50Tm9kZUVudHJ5KTtcclxuICAgIGlmIChpc0FjdGl2ZSkge1xyXG4gICAgICAgIFRyYW5zZm9ybXMuc2VsZWN0KGVkaXRvciwgY3VycmVudE5vZGVFbnRyeVsxXSk7XHJcbiAgICAgICAgcmVtb3ZlUGx1Z2luKGVkaXRvciwgcGx1Z2luKTtcclxuICAgIH1cclxuICAgIC8vIGFkZCBuZXdcclxuICAgIGlmIChwbHVnaW4uY3VzdG9tQWRkKSB7XHJcbiAgICAgICAgcGx1Z2luLmN1c3RvbUFkZChlZGl0b3IpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocGx1Z2luLnBsdWdpblR5cGUgPT09ICdjb21wb25lbnQnKSB7XHJcbiAgICAgICAgaWYgKHBsdWdpbi5vYmplY3QgPT09ICdtYXJrJykge1xyXG4gICAgICAgICAgICBlZGl0b3IuYWRkTWFyayhwbHVnaW4udHlwZSwgZGF0YSB8fCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChwbHVnaW4ub2JqZWN0ID09PSAnYmxvY2snICYmIHBsdWdpbi5yZXBsYWNlV2l0aERlZmF1bHRPblJlbW92ZSkge1xyXG4gICAgICAgICAgICAgICAgVHJhbnNmb3Jtcy5zZXROb2RlcyhlZGl0b3IsIHsgdHlwZTogcGx1Z2luLnR5cGUsIGRhdGE6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBUcmFuc2Zvcm1zLndyYXBOb2RlcyhlZGl0b3IsIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBwbHVnaW4udHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgICAgIH0sIHsgc3BsaXQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyB3b3JrYXJvdW5kIGZvciBpbmxpbmUgcHJvYmxlbXMgaW4gc2xhdGVcclxuICAgICAgICAgICAgICAgIGlmIChwbHVnaW4ub2JqZWN0ID09PSAnaW5saW5lJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbi5hZGRFeHRyYVNwYWNlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIXRleHQgJiZcclxuICAgICAgICAgICAgICAgICAgICBlZGl0b3Iuc2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvY3VzXzEgPSBfX2Fzc2lnbih7fSwgZWRpdG9yLnNlbGVjdGlvbi5mb2N1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgVHJhbnNmb3Jtcy5pbnNlcnRUZXh0KGVkaXRvciwgJyAnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0OiBlZGl0b3Iuc2VsZWN0aW9uLmZvY3VzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFRyYW5zZm9ybXMuc2VsZWN0KGVkaXRvciwgZm9jdXNfMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwbHVnaW4ucGx1Z2luVHlwZSA9PT0gJ2RhdGEnKSB7XHJcbiAgICAgICAgdmFyIGV4aXN0aW5nRGF0YSA9IChfYSA9IGdldEN1cnJlbnREYXRhKGVkaXRvcikpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHt9O1xyXG4gICAgICAgIFRyYW5zZm9ybXMuc2V0Tm9kZXMoZWRpdG9yLCB7XHJcbiAgICAgICAgICAgIGRhdGE6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBleGlzdGluZ0RhdGEpLCAoZGF0YSAhPT0gbnVsbCAmJiBkYXRhICE9PSB2b2lkIDAgPyBkYXRhIDoge30pKSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChwbHVnaW4pIHtcclxuICAgIHZhciBlZGl0b3IgPSB1c2VTbGF0ZSgpO1xyXG4gICAgcmV0dXJuIHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gYWRkUGx1Z2luKGVkaXRvciwgcGx1Z2luLCBwcm9wcyk7IH0sIFtdKTtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZUFkZFBsdWdpbi5qcy5tYXAiLCJ2YXIgX19yZWFkID0gKHRoaXMgJiYgdGhpcy5fX3JlYWQpIHx8IGZ1bmN0aW9uIChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn07XHJcbmltcG9ydCB7IEVkaXRvciB9IGZyb20gJ3NsYXRlJztcclxuaW1wb3J0IHsgdXNlU2xhdGUgfSBmcm9tICdzbGF0ZS1yZWFjdCc7XHJcbmV4cG9ydCB2YXIgZ2V0Q3VycmVudE5vZGVXaXRoUGx1Z2luID0gZnVuY3Rpb24gKGVkaXRvciwgcGx1Z2luKSB7XHJcbiAgICBpZiAocGx1Z2luLnBsdWdpblR5cGUgPT09ICdjdXN0b20nKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICB2YXIgbWF0Y2ggPSBwbHVnaW4ucGx1Z2luVHlwZSA9PT0gJ2NvbXBvbmVudCdcclxuICAgICAgICA/IHBsdWdpbi5vYmplY3QgPT09ICdtYXJrJ1xyXG4gICAgICAgICAgICA/IGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBCb29sZWFuKGVsZW1bcGx1Z2luLnR5cGVdKTsgfVxyXG4gICAgICAgICAgICA6IGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBlbGVtLnR5cGUgPT09IHBsdWdpbi50eXBlOyB9XHJcbiAgICAgICAgOiBwbHVnaW4ucGx1Z2luVHlwZSA9PT0gJ2RhdGEnXHJcbiAgICAgICAgICAgID8gLy8gc2VhcmNoIGZvciBkYXRhXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IF9hLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSBwbHVnaW4uZGF0YU1hdGNoZXMoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdmFyIF9hID0gX19yZWFkKEVkaXRvci5ub2RlcyhlZGl0b3IsIHtcclxuICAgICAgICAgICAgbWF0Y2g6IG1hdGNoLFxyXG4gICAgICAgICAgICBtb2RlOiAnbG93ZXN0JywgLy8gRklYTUU6IHdoYXRzIHRoZSBiZXN0IHZhbHVlP1xyXG4gICAgICAgIH0pLCAxKSwgbWF0Y2hpbmdOb2RlID0gX2FbMF07XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoaW5nTm9kZTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgLy8gc2VlbXMgdG8gY3Jhc2ggc29tZXRpbWVzIG9uIHJlZHVcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChwbHVnaW4pIHtcclxuICAgIHZhciBlZGl0b3IgPSB1c2VTbGF0ZSgpO1xyXG4gICAgcmV0dXJuIGdldEN1cnJlbnROb2RlV2l0aFBsdWdpbihlZGl0b3IsIHBsdWdpbik7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VDdXJyZW50Tm9kZVdpdGhQbHVnaW4uanMubWFwIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJhbnNmb3JtcyB9IGZyb20gJ3NsYXRlJztcclxuaW1wb3J0IHsgdXNlU2xhdGUgfSBmcm9tICdzbGF0ZS1yZWFjdCc7XHJcbmltcG9ydCBnZXRDdXJyZW50RGF0YSBmcm9tICcuLi91dGlscy9nZXRDdXJyZW50RGF0YSc7XHJcbmV4cG9ydCB2YXIgcmVtb3ZlUGx1Z2luID0gZnVuY3Rpb24gKGVkaXRvciwgcGx1Z2luKSB7XHJcbiAgICBpZiAocGx1Z2luLmN1c3RvbVJlbW92ZSkge1xyXG4gICAgICAgIHBsdWdpbi5jdXN0b21SZW1vdmUoZWRpdG9yKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHBsdWdpbi5wbHVnaW5UeXBlID09PSAnY29tcG9uZW50Jykge1xyXG4gICAgICAgIGlmIChwbHVnaW4ub2JqZWN0ID09PSAnbWFyaycpIHtcclxuICAgICAgICAgICAgZWRpdG9yLnJlbW92ZU1hcmsocGx1Z2luLnR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwbHVnaW4ub2JqZWN0ID09PSAnaW5saW5lJykge1xyXG4gICAgICAgICAgICBUcmFuc2Zvcm1zLnVud3JhcE5vZGVzKGVkaXRvciwge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2g6IGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBlbGVtLnR5cGUgPT09IHBsdWdpbi50eXBlOyB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gVHJhbnNmb3Jtcy5zZXROb2RlcyhlZGl0b3IsIHsgdHlwZTogbnVsbCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocGx1Z2luLm9iamVjdCA9PT0gJ2Jsb2NrJykge1xyXG4gICAgICAgICAgICBpZiAocGx1Z2luLnJlcGxhY2VXaXRoRGVmYXVsdE9uUmVtb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICBUcmFuc2Zvcm1zLnNldE5vZGVzKGVkaXRvciwge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFRyYW5zZm9ybXMudW53cmFwTm9kZXMoZWRpdG9yLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2g6IGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBlbGVtLnR5cGUgPT09IHBsdWdpbi50eXBlOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNwbGl0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwbHVnaW4ucGx1Z2luVHlwZSA9PT0gJ2RhdGEnKSB7XHJcbiAgICAgICAgaWYgKCFwbHVnaW4ucHJvcGVydGllcykge1xyXG4gICAgICAgICAgICAvLyBjYW4ndCBiZSByZW1vdmVkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgZXhpc3RpbmdEYXRhXzEgPSBnZXRDdXJyZW50RGF0YShlZGl0b3IpO1xyXG4gICAgICAgICAgICB2YXIgZGF0YVdpdGhvdXQgPSBPYmplY3Qua2V5cyhleGlzdGluZ0RhdGFfMSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBsdWdpbi5wcm9wZXJ0aWVzLmluY2x1ZGVzKGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBhY2MpLCAoX2EgPSB7fSwgX2Fba2V5XSA9IGV4aXN0aW5nRGF0YV8xW2tleV0sIF9hKSk7XHJcbiAgICAgICAgICAgIH0sIHt9KTtcclxuICAgICAgICAgICAgVHJhbnNmb3Jtcy5zZXROb2RlcyhlZGl0b3IsIHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFXaXRob3V0LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAocGx1Z2luKSB7XHJcbiAgICB2YXIgZWRpdG9yID0gdXNlU2xhdGUoKTtcclxuICAgIHJldHVybiB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7IHJldHVybiByZW1vdmVQbHVnaW4oZWRpdG9yLCBwbHVnaW4pOyB9LCBbXSk7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VSZW1vdmVQbHVnaW4uanMubWFwIiwidmFyIF9fcmVhZCA9ICh0aGlzICYmIHRoaXMuX19yZWFkKSB8fCBmdW5jdGlvbiAobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59O1xyXG5pbXBvcnQgeyBFZGl0b3IgfSBmcm9tICdzbGF0ZSc7XHJcbnZhciBnZXRDdXJyZW50RGF0YSA9IGZ1bmN0aW9uIChlZGl0b3IpIHtcclxuICAgIHZhciBfYTtcclxuICAgIHZhciBfYiA9IF9fcmVhZChFZGl0b3Iubm9kZXMoZWRpdG9yLCB7XHJcbiAgICAgICAgbW9kZTogJ2FsbCcsXHJcbiAgICAgICAgbWF0Y2g6IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBCb29sZWFuKG5vZGUuZGF0YSk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pLCAxKSwgZXhpc3RpbmdOb2RlV2l0aERhdGEgPSBfYlswXTtcclxuICAgIHZhciBleGlzdGluZ0RhdGEgPSBleGlzdGluZ05vZGVXaXRoRGF0YVxyXG4gICAgICAgID8gKF9hID0gZXhpc3RpbmdOb2RlV2l0aERhdGFbMF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kYXRhXHJcbiAgICAgICAgOiB7fTtcclxuICAgIHJldHVybiBleGlzdGluZ0RhdGE7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGdldEN1cnJlbnREYXRhO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1nZXRDdXJyZW50RGF0YS5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9