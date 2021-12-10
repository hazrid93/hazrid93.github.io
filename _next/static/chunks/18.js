(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[18],{

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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9pbW1lci9kaXN0L2ltbWVyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9pcy1wbGFpbi1vYmplY3QvZGlzdC9pcy1wbGFpbi1vYmplY3QubWpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3NsYXRlL2Rpc3QvaW5kZXguZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBYyxrREFBa0QsSUFBSSx3QkFBd0IsR0FBRyxJQUFtQyxFQUFFLDZFQUE2RSwwQkFBMEIsNkVBQTZFLGdCQUFnQixxRUFBcUUsY0FBYyxrQkFBa0IsY0FBYyx3QkFBd0IsbUNBQW1DLCtCQUErQixxQkFBcUIsaUVBQWlFLHVFQUF1RSwrREFBK0QsY0FBYyw0QkFBNEIsa0JBQWtCLHVFQUF1RSxtQ0FBbUMsNEJBQTRCLGdCQUFnQixHQUFHLGNBQWMsV0FBVyw0REFBNEQsZ0JBQWdCLG1FQUFtRSxnQkFBZ0IsOEJBQThCLGtCQUFrQixXQUFXLHFEQUFxRCxnQkFBZ0Isd0NBQXdDLGNBQWMsMkJBQTJCLGNBQWMsMkJBQTJCLGNBQWMsZ0JBQWdCLGNBQWMseURBQXlELFlBQVksWUFBWSxvQkFBb0IsV0FBVyxLQUFLLGtCQUFrQiwwRUFBMEUsK0RBQStELEVBQUUsaURBQWlELGdCQUFnQiwrSEFBK0gsZUFBZSxTQUFTLGFBQWEsS0FBSyxjQUFjLHVEQUF1RCxjQUFjLFlBQVksb0JBQW9CLGdCQUFnQixpQkFBaUIsYUFBYSxNQUFNLE1BQW1DLFlBQVksZ0JBQWdCLHNDQUFzQyxjQUFjLDZCQUE2QixjQUFjLGVBQWUsY0FBYyxVQUFVLHVCQUF1QixjQUFjLFdBQVcs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VDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGVBQWUsNkJBQTZCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsaUJBQWlCLGdCQUFnQjtBQUNqQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLHFFQUFhO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFhO0FBQ3hCLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLDRDQUE0QyxnQ0FBZ0Msb0NBQW9DLG9EQUFvRCxzQkFBc0IsMENBQTBDLGdFQUFnRSxFQUFFLEVBQUUsRUFBRSxnQ0FBZ0MsRUFBRSxhQUFhOztBQUV6VixrQ0FBa0MsZ0JBQWdCLHNCQUFzQixPQUFPLHVEQUF1RCxhQUFhLHlEQUF5RCwyQ0FBMkMsRUFBRSxFQUFFLEVBQUUsNkNBQTZDLDJFQUEyRSxFQUFFLE9BQU8sbURBQW1ELGtGQUFrRixFQUFFLEVBQUUsRUFBRSxFQUFFLGVBQWU7QUFDMWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSw2RUFBNkUsY0FBYztBQUMzRjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsNkVBQTZFLGNBQWM7QUFDM0Y7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMscUVBQWE7QUFDdEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJuQkFBMm5CLHFFQUFhO0FBQ3hvQjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsNERBQTREOztBQUU1RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrREFBa0Q7O0FBRWxEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFEQUFxRDs7O0FBR3JEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7O0FBR0EsNENBQTRDOztBQUU1QztBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsVUFBVTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsUUFBUTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBLG9DQUFvQyxrQkFBa0I7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0EsV0FBVzs7O0FBR1g7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxjQUFjO0FBQ2hGO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixxREFBTztBQUN6QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNENBQTRDLGdDQUFnQyxvQ0FBb0Msb0RBQW9ELHNCQUFzQiwwQ0FBMEMsZ0VBQWdFLEVBQUUsRUFBRSxFQUFFLGdDQUFnQyxFQUFFLGFBQWE7O0FBRXpWLGtDQUFrQyxnQkFBZ0Isc0JBQXNCLE9BQU8sdURBQXVELGFBQWEseURBQXlELDJDQUEyQyxFQUFFLEVBQUUsRUFBRSw2Q0FBNkMsMkVBQTJFLEVBQUUsT0FBTyxtREFBbUQsa0ZBQWtGLEVBQUUsRUFBRSxFQUFFLEVBQUUsZUFBZTtBQUMxaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMscUVBQWE7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdGQUFnRixxRUFBYTs7QUFFN0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMscUVBQWEsc0JBQXNCLHFFQUFhOztBQUUxRjtBQUNBLHFKQUFxSixxRUFBYSxzQkFBc0IscUVBQWE7O0FBRXJNO0FBQ0EsZ0ZBQWdGLHFFQUFhOztBQUU3RjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsU0FBUztBQUM1RDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0EsbURBQW1ELFNBQVM7QUFDNUQ7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLG1EQUFtRCxTQUFTO0FBQzVEO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTs7QUFFakI7QUFDQTtBQUNBLFdBQVc7QUFDWDs7O0FBR0E7QUFDQSxxREFBcUQsU0FBUztBQUM5RDtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsbURBQW1ELFNBQVM7QUFDNUQ7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0EsbURBQW1ELFNBQVM7QUFDNUQ7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLG1EQUFtRCxTQUFTO0FBQzVEO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsbURBQW1ELFNBQVM7QUFDNUQ7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBLHFEQUFxRCxTQUFTO0FBQzlEO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYLHFEQUFxRCxTQUFTO0FBQzlEO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYLHFEQUFxRCxTQUFTO0FBQzlEO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbURBQW1ELFNBQVM7QUFDNUQ7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHVDQUF1QztBQUMxRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscURBQU87QUFDbEI7QUFDQTtBQUNBLE9BQU8sV0FBVzs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9DQUFvQztBQUNuRDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7O0FBRTFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0Q0FBNEMsZ0NBQWdDLG9DQUFvQyxvREFBb0Qsc0JBQXNCLDBDQUEwQyxnRUFBZ0UsRUFBRSxFQUFFLEVBQUUsZ0NBQWdDLEVBQUUsYUFBYTs7QUFFelYsa0NBQWtDLGdCQUFnQixzQkFBc0IsT0FBTyx1REFBdUQsYUFBYSx5REFBeUQsMkNBQTJDLEVBQUUsRUFBRSxFQUFFLDZDQUE2QywyRUFBMkUsRUFBRSxPQUFPLG1EQUFtRCxrRkFBa0YsRUFBRSxFQUFFLEVBQUUsRUFBRSxlQUFlO0FBQzFoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBYTtBQUN4QixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFEQUFPO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0Esb0ZBQW9GLGNBQWM7QUFDbEc7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsNENBQTRDLGdDQUFnQyxvQ0FBb0Msb0RBQW9ELHNCQUFzQiwwQ0FBMEMsZ0VBQWdFLEVBQUUsRUFBRSxFQUFFLGdDQUFnQyxFQUFFLGFBQWE7O0FBRXpWLGtDQUFrQyxnQkFBZ0Isc0JBQXNCLE9BQU8sdURBQXVELGFBQWEseURBQXlELDJDQUEyQyxFQUFFLEVBQUUsRUFBRSw2Q0FBNkMsMkVBQTJFLEVBQUUsT0FBTyxtREFBbUQsa0ZBQWtGLEVBQUUsRUFBRSxFQUFFLEVBQUUsZUFBZTtBQUMxaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBYTtBQUN4QixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxREFBTztBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFD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QTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTyx3Q0FBd0M7QUFDL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSwrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qjs7QUFFOUIsZ0VBQWdFOztBQUVoRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDREQUE0RCxjQUFjO0FBQzFFO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEMsZ0NBQWdDLG9DQUFvQyxvREFBb0Qsc0JBQXNCLDBDQUEwQyxnRUFBZ0UsRUFBRSxFQUFFLEVBQUUsZ0NBQWdDLEVBQUUsYUFBYTs7QUFFelYsa0NBQWtDLGdCQUFnQixzQkFBc0IsT0FBTyx1REFBdUQsYUFBYSx5REFBeUQsMkNBQTJDLEVBQUUsRUFBRSxFQUFFLDZDQUE2QywyRUFBMkUsRUFBRSxPQUFPLG1EQUFtRCxrRkFBa0YsRUFBRSxFQUFFLEVBQUUsRUFBRSxlQUFlO0FBQzFoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxrRkFBa0Y7QUFDbEYsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU8sRUFBRTs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBOztBQUVBLDBDQUEwQyxnQ0FBZ0Msb0NBQW9DLG9EQUFvRCxzQkFBc0IsMENBQTBDLGdFQUFnRSxFQUFFLEVBQUUsRUFBRSxnQ0FBZ0MsRUFBRSxhQUFhOztBQUV2VixnQ0FBZ0MsZ0JBQWdCLHNCQUFzQixPQUFPLHVEQUF1RCxhQUFhLHVEQUF1RCwyQ0FBMkMsRUFBRSxFQUFFLEVBQUUsNkNBQTZDLDJFQUEyRSxFQUFFLE9BQU8saURBQWlELGtGQUFrRixFQUFFLEVBQUUsRUFBRSxFQUFFLGVBQWU7QUFDcGhCLDJFQUEyRTs7QUFFa0U7QUFDN0kiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIG4obil7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgscj1BcnJheSh0PjE/dC0xOjApLGU9MTtlPHQ7ZSsrKXJbZS0xXT1hcmd1bWVudHNbZV07aWYoXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVil7dmFyIGk9WVtuXSxvPWk/XCJmdW5jdGlvblwiPT10eXBlb2YgaT9pLmFwcGx5KG51bGwscik6aTpcInVua25vd24gZXJyb3IgbnI6IFwiK247dGhyb3cgRXJyb3IoXCJbSW1tZXJdIFwiK28pfXRocm93IEVycm9yKFwiW0ltbWVyXSBtaW5pZmllZCBlcnJvciBucjogXCIrbisoci5sZW5ndGg/XCIgXCIrci5tYXAoKGZ1bmN0aW9uKG4pe3JldHVyblwiJ1wiK24rXCInXCJ9KSkuam9pbihcIixcIik6XCJcIikrXCIuIEZpbmQgdGhlIGZ1bGwgZXJyb3IgYXQ6IGh0dHBzOi8vYml0Lmx5LzNjWEVLV2ZcIil9ZnVuY3Rpb24gdChuKXtyZXR1cm4hIW4mJiEhbltRXX1mdW5jdGlvbiByKG4pe3JldHVybiEhbiYmKGZ1bmN0aW9uKG4pe2lmKCFufHxcIm9iamVjdFwiIT10eXBlb2YgbilyZXR1cm4hMTt2YXIgdD1PYmplY3QuZ2V0UHJvdG90eXBlT2Yobik7aWYobnVsbD09PXQpcmV0dXJuITA7dmFyIHI9T2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodCxcImNvbnN0cnVjdG9yXCIpJiZ0LmNvbnN0cnVjdG9yO3JldHVybiByPT09T2JqZWN0fHxcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiZGdW5jdGlvbi50b1N0cmluZy5jYWxsKHIpPT09Wn0obil8fEFycmF5LmlzQXJyYXkobil8fCEhbltMXXx8ISFuLmNvbnN0cnVjdG9yW0xdfHxzKG4pfHx2KG4pKX1mdW5jdGlvbiBlKHIpe3JldHVybiB0KHIpfHxuKDIzLHIpLHJbUV0udH1mdW5jdGlvbiBpKG4sdCxyKXt2b2lkIDA9PT1yJiYocj0hMSksMD09PW8obik/KHI/T2JqZWN0LmtleXM6bm4pKG4pLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ImJlwic3ltYm9sXCI9PXR5cGVvZiBlfHx0KGUsbltlXSxuKX0pKTpuLmZvckVhY2goKGZ1bmN0aW9uKHIsZSl7cmV0dXJuIHQoZSxyLG4pfSkpfWZ1bmN0aW9uIG8obil7dmFyIHQ9bltRXTtyZXR1cm4gdD90Lmk+Mz90LmktNDp0Lmk6QXJyYXkuaXNBcnJheShuKT8xOnMobik/Mjp2KG4pPzM6MH1mdW5jdGlvbiB1KG4sdCl7cmV0dXJuIDI9PT1vKG4pP24uaGFzKHQpOk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLHQpfWZ1bmN0aW9uIGEobix0KXtyZXR1cm4gMj09PW8obik/bi5nZXQodCk6blt0XX1mdW5jdGlvbiBmKG4sdCxyKXt2YXIgZT1vKG4pOzI9PT1lP24uc2V0KHQscik6Mz09PWU/KG4uZGVsZXRlKHQpLG4uYWRkKHIpKTpuW3RdPXJ9ZnVuY3Rpb24gYyhuLHQpe3JldHVybiBuPT09dD8wIT09bnx8MS9uPT0xL3Q6biE9biYmdCE9dH1mdW5jdGlvbiBzKG4pe3JldHVybiBYJiZuIGluc3RhbmNlb2YgTWFwfWZ1bmN0aW9uIHYobil7cmV0dXJuIHEmJm4gaW5zdGFuY2VvZiBTZXR9ZnVuY3Rpb24gcChuKXtyZXR1cm4gbi5vfHxuLnR9ZnVuY3Rpb24gbChuKXtpZihBcnJheS5pc0FycmF5KG4pKXJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChuKTt2YXIgdD10bihuKTtkZWxldGUgdFtRXTtmb3IodmFyIHI9bm4odCksZT0wO2U8ci5sZW5ndGg7ZSsrKXt2YXIgaT1yW2VdLG89dFtpXTshMT09PW8ud3JpdGFibGUmJihvLndyaXRhYmxlPSEwLG8uY29uZmlndXJhYmxlPSEwKSwoby5nZXR8fG8uc2V0KSYmKHRbaV09e2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCxlbnVtZXJhYmxlOm8uZW51bWVyYWJsZSx2YWx1ZTpuW2ldfSl9cmV0dXJuIE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKG4pLHQpfWZ1bmN0aW9uIGQobixlKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9ITEpLHkobil8fHQobil8fCFyKG4pP246KG8obik+MSYmKG4uc2V0PW4uYWRkPW4uY2xlYXI9bi5kZWxldGU9aCksT2JqZWN0LmZyZWV6ZShuKSxlJiZpKG4sKGZ1bmN0aW9uKG4sdCl7cmV0dXJuIGQodCwhMCl9KSwhMCksbil9ZnVuY3Rpb24gaCgpe24oMil9ZnVuY3Rpb24geShuKXtyZXR1cm4gbnVsbD09bnx8XCJvYmplY3RcIiE9dHlwZW9mIG58fE9iamVjdC5pc0Zyb3plbihuKX1mdW5jdGlvbiBiKHQpe3ZhciByPXJuW3RdO3JldHVybiByfHxuKDE4LHQpLHJ9ZnVuY3Rpb24gbShuLHQpe3JuW25dfHwocm5bbl09dCl9ZnVuY3Rpb24gXygpe3JldHVyblwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlZ8fFV8fG4oMCksVX1mdW5jdGlvbiBqKG4sdCl7dCYmKGIoXCJQYXRjaGVzXCIpLG4udT1bXSxuLnM9W10sbi52PXQpfWZ1bmN0aW9uIE8obil7ZyhuKSxuLnAuZm9yRWFjaChTKSxuLnA9bnVsbH1mdW5jdGlvbiBnKG4pe249PT1VJiYoVT1uLmwpfWZ1bmN0aW9uIHcobil7cmV0dXJuIFU9e3A6W10sbDpVLGg6bixtOiEwLF86MH19ZnVuY3Rpb24gUyhuKXt2YXIgdD1uW1FdOzA9PT10Lml8fDE9PT10Lmk/dC5qKCk6dC5PPSEwfWZ1bmN0aW9uIFAodCxlKXtlLl89ZS5wLmxlbmd0aDt2YXIgaT1lLnBbMF0sbz12b2lkIDAhPT10JiZ0IT09aTtyZXR1cm4gZS5oLmd8fGIoXCJFUzVcIikuUyhlLHQsbyksbz8oaVtRXS5QJiYoTyhlKSxuKDQpKSxyKHQpJiYodD1NKGUsdCksZS5sfHx4KGUsdCkpLGUudSYmYihcIlBhdGNoZXNcIikuTShpW1FdLHQsZS51LGUucykpOnQ9TShlLGksW10pLE8oZSksZS51JiZlLnYoZS51LGUucyksdCE9PUg/dDp2b2lkIDB9ZnVuY3Rpb24gTShuLHQscil7aWYoeSh0KSlyZXR1cm4gdDt2YXIgZT10W1FdO2lmKCFlKXJldHVybiBpKHQsKGZ1bmN0aW9uKGksbyl7cmV0dXJuIEEobixlLHQsaSxvLHIpfSksITApLHQ7aWYoZS5BIT09bilyZXR1cm4gdDtpZighZS5QKXJldHVybiB4KG4sZS50LCEwKSxlLnQ7aWYoIWUuSSl7ZS5JPSEwLGUuQS5fLS07dmFyIG89ND09PWUuaXx8NT09PWUuaT9lLm89bChlLmspOmUubztpKDM9PT1lLmk/bmV3IFNldChvKTpvLChmdW5jdGlvbih0LGkpe3JldHVybiBBKG4sZSxvLHQsaSxyKX0pKSx4KG4sbywhMSksciYmbi51JiZiKFwiUGF0Y2hlc1wiKS5SKGUscixuLnUsbi5zKX1yZXR1cm4gZS5vfWZ1bmN0aW9uIEEoZSxpLG8sYSxjLHMpe2lmKFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmM9PT1vJiZuKDUpLHQoYykpe3ZhciB2PU0oZSxjLHMmJmkmJjMhPT1pLmkmJiF1KGkuRCxhKT9zLmNvbmNhdChhKTp2b2lkIDApO2lmKGYobyxhLHYpLCF0KHYpKXJldHVybjtlLm09ITF9aWYocihjKSYmIXkoYykpe2lmKCFlLmguRiYmZS5fPDEpcmV0dXJuO00oZSxjKSxpJiZpLkEubHx8eChlLGMpfX1mdW5jdGlvbiB4KG4sdCxyKXt2b2lkIDA9PT1yJiYocj0hMSksbi5oLkYmJm4ubSYmZCh0LHIpfWZ1bmN0aW9uIHoobix0KXt2YXIgcj1uW1FdO3JldHVybihyP3Aocik6bilbdF19ZnVuY3Rpb24gSShuLHQpe2lmKHQgaW4gbilmb3IodmFyIHI9T2JqZWN0LmdldFByb3RvdHlwZU9mKG4pO3I7KXt2YXIgZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsdCk7aWYoZSlyZXR1cm4gZTtyPU9iamVjdC5nZXRQcm90b3R5cGVPZihyKX19ZnVuY3Rpb24gayhuKXtuLlB8fChuLlA9ITAsbi5sJiZrKG4ubCkpfWZ1bmN0aW9uIEUobil7bi5vfHwobi5vPWwobi50KSl9ZnVuY3Rpb24gUihuLHQscil7dmFyIGU9cyh0KT9iKFwiTWFwU2V0XCIpLk4odCxyKTp2KHQpP2IoXCJNYXBTZXRcIikuVCh0LHIpOm4uZz9mdW5jdGlvbihuLHQpe3ZhciByPUFycmF5LmlzQXJyYXkobiksZT17aTpyPzE6MCxBOnQ/dC5BOl8oKSxQOiExLEk6ITEsRDp7fSxsOnQsdDpuLGs6bnVsbCxvOm51bGwsajpudWxsLEM6ITF9LGk9ZSxvPWVuO3ImJihpPVtlXSxvPW9uKTt2YXIgdT1Qcm94eS5yZXZvY2FibGUoaSxvKSxhPXUucmV2b2tlLGY9dS5wcm94eTtyZXR1cm4gZS5rPWYsZS5qPWEsZn0odCxyKTpiKFwiRVM1XCIpLkoodCxyKTtyZXR1cm4ocj9yLkE6XygpKS5wLnB1c2goZSksZX1mdW5jdGlvbiBEKGUpe3JldHVybiB0KGUpfHxuKDIyLGUpLGZ1bmN0aW9uIG4odCl7aWYoIXIodCkpcmV0dXJuIHQ7dmFyIGUsdT10W1FdLGM9byh0KTtpZih1KXtpZighdS5QJiYodS5pPDR8fCFiKFwiRVM1XCIpLksodSkpKXJldHVybiB1LnQ7dS5JPSEwLGU9Rih0LGMpLHUuST0hMX1lbHNlIGU9Rih0LGMpO3JldHVybiBpKGUsKGZ1bmN0aW9uKHQscil7dSYmYSh1LnQsdCk9PT1yfHxmKGUsdCxuKHIpKX0pKSwzPT09Yz9uZXcgU2V0KGUpOmV9KGUpfWZ1bmN0aW9uIEYobix0KXtzd2l0Y2godCl7Y2FzZSAyOnJldHVybiBuZXcgTWFwKG4pO2Nhc2UgMzpyZXR1cm4gQXJyYXkuZnJvbShuKX1yZXR1cm4gbChuKX1mdW5jdGlvbiBOKCl7ZnVuY3Rpb24gcihuLHQpe3ZhciByPXNbbl07cmV0dXJuIHI/ci5lbnVtZXJhYmxlPXQ6c1tuXT1yPXtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTp0LGdldDpmdW5jdGlvbigpe3ZhciB0PXRoaXNbUV07cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmZih0KSxlbi5nZXQodCxuKX0sc2V0OmZ1bmN0aW9uKHQpe3ZhciByPXRoaXNbUV07XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmZihyKSxlbi5zZXQocixuLHQpfX0scn1mdW5jdGlvbiBlKG4pe2Zvcih2YXIgdD1uLmxlbmd0aC0xO3Q+PTA7dC0tKXt2YXIgcj1uW3RdW1FdO2lmKCFyLlApc3dpdGNoKHIuaSl7Y2FzZSA1OmEocikmJmsocik7YnJlYWs7Y2FzZSA0Om8ocikmJmsocil9fX1mdW5jdGlvbiBvKG4pe2Zvcih2YXIgdD1uLnQscj1uLmssZT1ubihyKSxpPWUubGVuZ3RoLTE7aT49MDtpLS0pe3ZhciBvPWVbaV07aWYobyE9PVEpe3ZhciBhPXRbb107aWYodm9pZCAwPT09YSYmIXUodCxvKSlyZXR1cm4hMDt2YXIgZj1yW29dLHM9ZiYmZltRXTtpZihzP3MudCE9PWE6IWMoZixhKSlyZXR1cm4hMH19dmFyIHY9ISF0W1FdO3JldHVybiBlLmxlbmd0aCE9PW5uKHQpLmxlbmd0aCsodj8wOjEpfWZ1bmN0aW9uIGEobil7dmFyIHQ9bi5rO2lmKHQubGVuZ3RoIT09bi50Lmxlbmd0aClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsdC5sZW5ndGgtMSk7cmV0dXJuISghcnx8ci5nZXQpfWZ1bmN0aW9uIGYodCl7dC5PJiZuKDMsSlNPTi5zdHJpbmdpZnkocCh0KSkpfXZhciBzPXt9O20oXCJFUzVcIix7SjpmdW5jdGlvbihuLHQpe3ZhciBlPUFycmF5LmlzQXJyYXkobiksaT1mdW5jdGlvbihuLHQpe2lmKG4pe2Zvcih2YXIgZT1BcnJheSh0Lmxlbmd0aCksaT0wO2k8dC5sZW5ndGg7aSsrKU9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiXCIraSxyKGksITApKTtyZXR1cm4gZX12YXIgbz10bih0KTtkZWxldGUgb1tRXTtmb3IodmFyIHU9bm4obyksYT0wO2E8dS5sZW5ndGg7YSsrKXt2YXIgZj11W2FdO29bZl09cihmLG58fCEhb1tmXS5lbnVtZXJhYmxlKX1yZXR1cm4gT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodCksbyl9KGUsbiksbz17aTplPzU6NCxBOnQ/dC5BOl8oKSxQOiExLEk6ITEsRDp7fSxsOnQsdDpuLGs6aSxvOm51bGwsTzohMSxDOiExfTtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGksUSx7dmFsdWU6byx3cml0YWJsZTohMH0pLGl9LFM6ZnVuY3Rpb24obixyLG8pe28/dChyKSYmcltRXS5BPT09biYmZShuLnApOihuLnUmJmZ1bmN0aW9uIG4odCl7aWYodCYmXCJvYmplY3RcIj09dHlwZW9mIHQpe3ZhciByPXRbUV07aWYocil7dmFyIGU9ci50LG89ci5rLGY9ci5ELGM9ci5pO2lmKDQ9PT1jKWkobywoZnVuY3Rpb24odCl7dCE9PVEmJih2b2lkIDAhPT1lW3RdfHx1KGUsdCk/Zlt0XXx8bihvW3RdKTooZlt0XT0hMCxrKHIpKSl9KSksaShlLChmdW5jdGlvbihuKXt2b2lkIDAhPT1vW25dfHx1KG8sbil8fChmW25dPSExLGsocikpfSkpO2Vsc2UgaWYoNT09PWMpe2lmKGEocikmJihrKHIpLGYubGVuZ3RoPSEwKSxvLmxlbmd0aDxlLmxlbmd0aClmb3IodmFyIHM9by5sZW5ndGg7czxlLmxlbmd0aDtzKyspZltzXT0hMTtlbHNlIGZvcih2YXIgdj1lLmxlbmd0aDt2PG8ubGVuZ3RoO3YrKylmW3ZdPSEwO2Zvcih2YXIgcD1NYXRoLm1pbihvLmxlbmd0aCxlLmxlbmd0aCksbD0wO2w8cDtsKyspdm9pZCAwPT09ZltsXSYmbihvW2xdKX19fX0obi5wWzBdKSxlKG4ucCkpfSxLOmZ1bmN0aW9uKG4pe3JldHVybiA0PT09bi5pP28obik6YShuKX19KX1mdW5jdGlvbiBUKCl7ZnVuY3Rpb24gZShuKXtpZighcihuKSlyZXR1cm4gbjtpZihBcnJheS5pc0FycmF5KG4pKXJldHVybiBuLm1hcChlKTtpZihzKG4pKXJldHVybiBuZXcgTWFwKEFycmF5LmZyb20obi5lbnRyaWVzKCkpLm1hcCgoZnVuY3Rpb24obil7cmV0dXJuW25bMF0sZShuWzFdKV19KSkpO2lmKHYobikpcmV0dXJuIG5ldyBTZXQoQXJyYXkuZnJvbShuKS5tYXAoZSkpO3ZhciB0PU9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKG4pKTtmb3IodmFyIGkgaW4gbil0W2ldPWUobltpXSk7cmV0dXJuIHUobixMKSYmKHRbTF09bltMXSksdH1mdW5jdGlvbiBmKG4pe3JldHVybiB0KG4pP2Uobik6bn12YXIgYz1cImFkZFwiO20oXCJQYXRjaGVzXCIseyQ6ZnVuY3Rpb24odCxyKXtyZXR1cm4gci5mb3JFYWNoKChmdW5jdGlvbihyKXtmb3IodmFyIGk9ci5wYXRoLHU9ci5vcCxmPXQscz0wO3M8aS5sZW5ndGgtMTtzKyspe3ZhciB2PW8oZikscD1cIlwiK2lbc107MCE9PXYmJjEhPT12fHxcIl9fcHJvdG9fX1wiIT09cCYmXCJjb25zdHJ1Y3RvclwiIT09cHx8bigyNCksXCJmdW5jdGlvblwiPT10eXBlb2YgZiYmXCJwcm90b3R5cGVcIj09PXAmJm4oMjQpLFwib2JqZWN0XCIhPXR5cGVvZihmPWEoZixwKSkmJm4oMTUsaS5qb2luKFwiL1wiKSl9dmFyIGw9byhmKSxkPWUoci52YWx1ZSksaD1pW2kubGVuZ3RoLTFdO3N3aXRjaCh1KXtjYXNlXCJyZXBsYWNlXCI6c3dpdGNoKGwpe2Nhc2UgMjpyZXR1cm4gZi5zZXQoaCxkKTtjYXNlIDM6bigxNik7ZGVmYXVsdDpyZXR1cm4gZltoXT1kfWNhc2UgYzpzd2l0Y2gobCl7Y2FzZSAxOnJldHVybiBmLnNwbGljZShoLDAsZCk7Y2FzZSAyOnJldHVybiBmLnNldChoLGQpO2Nhc2UgMzpyZXR1cm4gZi5hZGQoZCk7ZGVmYXVsdDpyZXR1cm4gZltoXT1kfWNhc2VcInJlbW92ZVwiOnN3aXRjaChsKXtjYXNlIDE6cmV0dXJuIGYuc3BsaWNlKGgsMSk7Y2FzZSAyOnJldHVybiBmLmRlbGV0ZShoKTtjYXNlIDM6cmV0dXJuIGYuZGVsZXRlKHIudmFsdWUpO2RlZmF1bHQ6cmV0dXJuIGRlbGV0ZSBmW2hdfWRlZmF1bHQ6bigxNyx1KX19KSksdH0sUjpmdW5jdGlvbihuLHQscixlKXtzd2l0Y2gobi5pKXtjYXNlIDA6Y2FzZSA0OmNhc2UgMjpyZXR1cm4gZnVuY3Rpb24obix0LHIsZSl7dmFyIG89bi50LHM9bi5vO2kobi5ELChmdW5jdGlvbihuLGkpe3ZhciB2PWEobyxuKSxwPWEocyxuKSxsPWk/dShvLG4pP1wicmVwbGFjZVwiOmM6XCJyZW1vdmVcIjtpZih2IT09cHx8XCJyZXBsYWNlXCIhPT1sKXt2YXIgZD10LmNvbmNhdChuKTtyLnB1c2goXCJyZW1vdmVcIj09PWw/e29wOmwscGF0aDpkfTp7b3A6bCxwYXRoOmQsdmFsdWU6cH0pLGUucHVzaChsPT09Yz97b3A6XCJyZW1vdmVcIixwYXRoOmR9OlwicmVtb3ZlXCI9PT1sP3tvcDpjLHBhdGg6ZCx2YWx1ZTpmKHYpfTp7b3A6XCJyZXBsYWNlXCIscGF0aDpkLHZhbHVlOmYodil9KX19KSl9KG4sdCxyLGUpO2Nhc2UgNTpjYXNlIDE6cmV0dXJuIGZ1bmN0aW9uKG4sdCxyLGUpe3ZhciBpPW4udCxvPW4uRCx1PW4ubztpZih1Lmxlbmd0aDxpLmxlbmd0aCl7dmFyIGE9W3UsaV07aT1hWzBdLHU9YVsxXTt2YXIgcz1bZSxyXTtyPXNbMF0sZT1zWzFdfWZvcih2YXIgdj0wO3Y8aS5sZW5ndGg7disrKWlmKG9bdl0mJnVbdl0hPT1pW3ZdKXt2YXIgcD10LmNvbmNhdChbdl0pO3IucHVzaCh7b3A6XCJyZXBsYWNlXCIscGF0aDpwLHZhbHVlOmYodVt2XSl9KSxlLnB1c2goe29wOlwicmVwbGFjZVwiLHBhdGg6cCx2YWx1ZTpmKGlbdl0pfSl9Zm9yKHZhciBsPWkubGVuZ3RoO2w8dS5sZW5ndGg7bCsrKXt2YXIgZD10LmNvbmNhdChbbF0pO3IucHVzaCh7b3A6YyxwYXRoOmQsdmFsdWU6Zih1W2xdKX0pfWkubGVuZ3RoPHUubGVuZ3RoJiZlLnB1c2goe29wOlwicmVwbGFjZVwiLHBhdGg6dC5jb25jYXQoW1wibGVuZ3RoXCJdKSx2YWx1ZTppLmxlbmd0aH0pfShuLHQscixlKTtjYXNlIDM6cmV0dXJuIGZ1bmN0aW9uKG4sdCxyLGUpe3ZhciBpPW4udCxvPW4ubyx1PTA7aS5mb3JFYWNoKChmdW5jdGlvbihuKXtpZighby5oYXMobikpe3ZhciBpPXQuY29uY2F0KFt1XSk7ci5wdXNoKHtvcDpcInJlbW92ZVwiLHBhdGg6aSx2YWx1ZTpufSksZS51bnNoaWZ0KHtvcDpjLHBhdGg6aSx2YWx1ZTpufSl9dSsrfSkpLHU9MCxvLmZvckVhY2goKGZ1bmN0aW9uKG4pe2lmKCFpLmhhcyhuKSl7dmFyIG89dC5jb25jYXQoW3VdKTtyLnB1c2goe29wOmMscGF0aDpvLHZhbHVlOm59KSxlLnVuc2hpZnQoe29wOlwicmVtb3ZlXCIscGF0aDpvLHZhbHVlOm59KX11Kyt9KSl9KG4sdCxyLGUpfX0sTTpmdW5jdGlvbihuLHQscixlKXtyLnB1c2goe29wOlwicmVwbGFjZVwiLHBhdGg6W10sdmFsdWU6dD09PUg/dm9pZCAwOnR9KSxlLnB1c2goe29wOlwicmVwbGFjZVwiLHBhdGg6W10sdmFsdWU6bi50fSl9fSl9ZnVuY3Rpb24gQygpe2Z1bmN0aW9uIHQobix0KXtmdW5jdGlvbiByKCl7dGhpcy5jb25zdHJ1Y3Rvcj1ufWEobix0KSxuLnByb3RvdHlwZT0oci5wcm90b3R5cGU9dC5wcm90b3R5cGUsbmV3IHIpfWZ1bmN0aW9uIGUobil7bi5vfHwobi5EPW5ldyBNYXAsbi5vPW5ldyBNYXAobi50KSl9ZnVuY3Rpb24gbyhuKXtuLm98fChuLm89bmV3IFNldCxuLnQuZm9yRWFjaCgoZnVuY3Rpb24odCl7aWYocih0KSl7dmFyIGU9UihuLkEuaCx0LG4pO24ucC5zZXQodCxlKSxuLm8uYWRkKGUpfWVsc2Ugbi5vLmFkZCh0KX0pKSl9ZnVuY3Rpb24gdSh0KXt0Lk8mJm4oMyxKU09OLnN0cmluZ2lmeShwKHQpKSl9dmFyIGE9ZnVuY3Rpb24obix0KXtyZXR1cm4oYT1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24obix0KXtuLl9fcHJvdG9fXz10fXx8ZnVuY3Rpb24obix0KXtmb3IodmFyIHIgaW4gdCl0Lmhhc093blByb3BlcnR5KHIpJiYobltyXT10W3JdKX0pKG4sdCl9LGY9ZnVuY3Rpb24oKXtmdW5jdGlvbiBuKG4sdCl7cmV0dXJuIHRoaXNbUV09e2k6MixsOnQsQTp0P3QuQTpfKCksUDohMSxJOiExLG86dm9pZCAwLEQ6dm9pZCAwLHQ6bixrOnRoaXMsQzohMSxPOiExfSx0aGlzfXQobixNYXApO3ZhciBvPW4ucHJvdG90eXBlO3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkobyxcInNpemVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHAodGhpc1tRXSkuc2l6ZX19KSxvLmhhcz1mdW5jdGlvbihuKXtyZXR1cm4gcCh0aGlzW1FdKS5oYXMobil9LG8uc2V0PWZ1bmN0aW9uKG4sdCl7dmFyIHI9dGhpc1tRXTtyZXR1cm4gdShyKSxwKHIpLmhhcyhuKSYmcChyKS5nZXQobik9PT10fHwoZShyKSxrKHIpLHIuRC5zZXQobiwhMCksci5vLnNldChuLHQpLHIuRC5zZXQobiwhMCkpLHRoaXN9LG8uZGVsZXRlPWZ1bmN0aW9uKG4pe2lmKCF0aGlzLmhhcyhuKSlyZXR1cm4hMTt2YXIgdD10aGlzW1FdO3JldHVybiB1KHQpLGUodCksayh0KSx0LkQuc2V0KG4sITEpLHQuby5kZWxldGUobiksITB9LG8uY2xlYXI9ZnVuY3Rpb24oKXt2YXIgbj10aGlzW1FdO3UobikscChuKS5zaXplJiYoZShuKSxrKG4pLG4uRD1uZXcgTWFwLGkobi50LChmdW5jdGlvbih0KXtuLkQuc2V0KHQsITEpfSkpLG4uby5jbGVhcigpKX0sby5mb3JFYWNoPWZ1bmN0aW9uKG4sdCl7dmFyIHI9dGhpcztwKHRoaXNbUV0pLmZvckVhY2goKGZ1bmN0aW9uKGUsaSl7bi5jYWxsKHQsci5nZXQoaSksaSxyKX0pKX0sby5nZXQ9ZnVuY3Rpb24obil7dmFyIHQ9dGhpc1tRXTt1KHQpO3ZhciBpPXAodCkuZ2V0KG4pO2lmKHQuSXx8IXIoaSkpcmV0dXJuIGk7aWYoaSE9PXQudC5nZXQobikpcmV0dXJuIGk7dmFyIG89Uih0LkEuaCxpLHQpO3JldHVybiBlKHQpLHQuby5zZXQobixvKSxvfSxvLmtleXM9ZnVuY3Rpb24oKXtyZXR1cm4gcCh0aGlzW1FdKS5rZXlzKCl9LG8udmFsdWVzPWZ1bmN0aW9uKCl7dmFyIG4sdD10aGlzLHI9dGhpcy5rZXlzKCk7cmV0dXJuKG49e30pW1ZdPWZ1bmN0aW9uKCl7cmV0dXJuIHQudmFsdWVzKCl9LG4ubmV4dD1mdW5jdGlvbigpe3ZhciBuPXIubmV4dCgpO3JldHVybiBuLmRvbmU/bjp7ZG9uZTohMSx2YWx1ZTp0LmdldChuLnZhbHVlKX19LG59LG8uZW50cmllcz1mdW5jdGlvbigpe3ZhciBuLHQ9dGhpcyxyPXRoaXMua2V5cygpO3JldHVybihuPXt9KVtWXT1mdW5jdGlvbigpe3JldHVybiB0LmVudHJpZXMoKX0sbi5uZXh0PWZ1bmN0aW9uKCl7dmFyIG49ci5uZXh0KCk7aWYobi5kb25lKXJldHVybiBuO3ZhciBlPXQuZ2V0KG4udmFsdWUpO3JldHVybntkb25lOiExLHZhbHVlOltuLnZhbHVlLGVdfX0sbn0sb1tWXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVudHJpZXMoKX0sbn0oKSxjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gbihuLHQpe3JldHVybiB0aGlzW1FdPXtpOjMsbDp0LEE6dD90LkE6XygpLFA6ITEsSTohMSxvOnZvaWQgMCx0Om4sazp0aGlzLHA6bmV3IE1hcCxPOiExLEM6ITF9LHRoaXN9dChuLFNldCk7dmFyIHI9bi5wcm90b3R5cGU7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwic2l6ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcCh0aGlzW1FdKS5zaXplfX0pLHIuaGFzPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXNbUV07cmV0dXJuIHUodCksdC5vPyEhdC5vLmhhcyhuKXx8ISghdC5wLmhhcyhuKXx8IXQuby5oYXModC5wLmdldChuKSkpOnQudC5oYXMobil9LHIuYWRkPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXNbUV07cmV0dXJuIHUodCksdGhpcy5oYXMobil8fChvKHQpLGsodCksdC5vLmFkZChuKSksdGhpc30sci5kZWxldGU9ZnVuY3Rpb24obil7aWYoIXRoaXMuaGFzKG4pKXJldHVybiExO3ZhciB0PXRoaXNbUV07cmV0dXJuIHUodCksbyh0KSxrKHQpLHQuby5kZWxldGUobil8fCEhdC5wLmhhcyhuKSYmdC5vLmRlbGV0ZSh0LnAuZ2V0KG4pKX0sci5jbGVhcj1mdW5jdGlvbigpe3ZhciBuPXRoaXNbUV07dShuKSxwKG4pLnNpemUmJihvKG4pLGsobiksbi5vLmNsZWFyKCkpfSxyLnZhbHVlcz1mdW5jdGlvbigpe3ZhciBuPXRoaXNbUV07cmV0dXJuIHUobiksbyhuKSxuLm8udmFsdWVzKCl9LHIuZW50cmllcz1mdW5jdGlvbigpe3ZhciBuPXRoaXNbUV07cmV0dXJuIHUobiksbyhuKSxuLm8uZW50cmllcygpfSxyLmtleXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZXMoKX0scltWXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlcygpfSxyLmZvckVhY2g9ZnVuY3Rpb24obix0KXtmb3IodmFyIHI9dGhpcy52YWx1ZXMoKSxlPXIubmV4dCgpOyFlLmRvbmU7KW4uY2FsbCh0LGUudmFsdWUsZS52YWx1ZSx0aGlzKSxlPXIubmV4dCgpfSxufSgpO20oXCJNYXBTZXRcIix7TjpmdW5jdGlvbihuLHQpe3JldHVybiBuZXcgZihuLHQpfSxUOmZ1bmN0aW9uKG4sdCl7cmV0dXJuIG5ldyBjKG4sdCl9fSl9ZnVuY3Rpb24gSigpe04oKSxDKCksVCgpfWZ1bmN0aW9uIEsobil7cmV0dXJuIG59ZnVuY3Rpb24gJChuKXtyZXR1cm4gbn12YXIgRyxVLFc9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbChcInhcIiksWD1cInVuZGVmaW5lZFwiIT10eXBlb2YgTWFwLHE9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFNldCxCPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBQcm94eSYmdm9pZCAwIT09UHJveHkucmV2b2NhYmxlJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgUmVmbGVjdCxIPVc/U3ltYm9sLmZvcihcImltbWVyLW5vdGhpbmdcIik6KChHPXt9KVtcImltbWVyLW5vdGhpbmdcIl09ITAsRyksTD1XP1N5bWJvbC5mb3IoXCJpbW1lci1kcmFmdGFibGVcIik6XCJfXyRpbW1lcl9kcmFmdGFibGVcIixRPVc/U3ltYm9sLmZvcihcImltbWVyLXN0YXRlXCIpOlwiX18kaW1tZXJfc3RhdGVcIixWPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvcnx8XCJAQGl0ZXJhdG9yXCIsWT17MDpcIklsbGVnYWwgc3RhdGVcIiwxOlwiSW1tZXIgZHJhZnRzIGNhbm5vdCBoYXZlIGNvbXB1dGVkIHByb3BlcnRpZXNcIiwyOlwiVGhpcyBvYmplY3QgaGFzIGJlZW4gZnJvemVuIGFuZCBzaG91bGQgbm90IGJlIG11dGF0ZWRcIiwzOmZ1bmN0aW9uKG4pe3JldHVyblwiQ2Fubm90IHVzZSBhIHByb3h5IHRoYXQgaGFzIGJlZW4gcmV2b2tlZC4gRGlkIHlvdSBwYXNzIGFuIG9iamVjdCBmcm9tIGluc2lkZSBhbiBpbW1lciBmdW5jdGlvbiB0byBhbiBhc3luYyBwcm9jZXNzPyBcIitufSw0OlwiQW4gaW1tZXIgcHJvZHVjZXIgcmV0dXJuZWQgYSBuZXcgdmFsdWUgKmFuZCogbW9kaWZpZWQgaXRzIGRyYWZ0LiBFaXRoZXIgcmV0dXJuIGEgbmV3IHZhbHVlICpvciogbW9kaWZ5IHRoZSBkcmFmdC5cIiw1OlwiSW1tZXIgZm9yYmlkcyBjaXJjdWxhciByZWZlcmVuY2VzXCIsNjpcIlRoZSBmaXJzdCBvciBzZWNvbmQgYXJndW1lbnQgdG8gYHByb2R1Y2VgIG11c3QgYmUgYSBmdW5jdGlvblwiLDc6XCJUaGUgdGhpcmQgYXJndW1lbnQgdG8gYHByb2R1Y2VgIG11c3QgYmUgYSBmdW5jdGlvbiBvciB1bmRlZmluZWRcIiw4OlwiRmlyc3QgYXJndW1lbnQgdG8gYGNyZWF0ZURyYWZ0YCBtdXN0IGJlIGEgcGxhaW4gb2JqZWN0LCBhbiBhcnJheSwgb3IgYW4gaW1tZXJhYmxlIG9iamVjdFwiLDk6XCJGaXJzdCBhcmd1bWVudCB0byBgZmluaXNoRHJhZnRgIG11c3QgYmUgYSBkcmFmdCByZXR1cm5lZCBieSBgY3JlYXRlRHJhZnRgXCIsMTA6XCJUaGUgZ2l2ZW4gZHJhZnQgaXMgYWxyZWFkeSBmaW5hbGl6ZWRcIiwxMTpcIk9iamVjdC5kZWZpbmVQcm9wZXJ0eSgpIGNhbm5vdCBiZSB1c2VkIG9uIGFuIEltbWVyIGRyYWZ0XCIsMTI6XCJPYmplY3Quc2V0UHJvdG90eXBlT2YoKSBjYW5ub3QgYmUgdXNlZCBvbiBhbiBJbW1lciBkcmFmdFwiLDEzOlwiSW1tZXIgb25seSBzdXBwb3J0cyBkZWxldGluZyBhcnJheSBpbmRpY2VzXCIsMTQ6XCJJbW1lciBvbmx5IHN1cHBvcnRzIHNldHRpbmcgYXJyYXkgaW5kaWNlcyBhbmQgdGhlICdsZW5ndGgnIHByb3BlcnR5XCIsMTU6ZnVuY3Rpb24obil7cmV0dXJuXCJDYW5ub3QgYXBwbHkgcGF0Y2gsIHBhdGggZG9lc24ndCByZXNvbHZlOiBcIitufSwxNjonU2V0cyBjYW5ub3QgaGF2ZSBcInJlcGxhY2VcIiBwYXRjaGVzLicsMTc6ZnVuY3Rpb24obil7cmV0dXJuXCJVbnN1cHBvcnRlZCBwYXRjaCBvcGVyYXRpb246IFwiK259LDE4OmZ1bmN0aW9uKG4pe3JldHVyblwiVGhlIHBsdWdpbiBmb3IgJ1wiK24rXCInIGhhcyBub3QgYmVlbiBsb2FkZWQgaW50byBJbW1lci4gVG8gZW5hYmxlIHRoZSBwbHVnaW4sIGltcG9ydCBhbmQgY2FsbCBgZW5hYmxlXCIrbitcIigpYCB3aGVuIGluaXRpYWxpemluZyB5b3VyIGFwcGxpY2F0aW9uLlwifSwyMDpcIkNhbm5vdCB1c2UgcHJveGllcyBpZiBQcm94eSwgUHJveHkucmV2b2NhYmxlIG9yIFJlZmxlY3QgYXJlIG5vdCBhdmFpbGFibGVcIiwyMTpmdW5jdGlvbihuKXtyZXR1cm5cInByb2R1Y2UgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIHRoaW5ncyB0aGF0IGFyZSBkcmFmdGFibGU6IHBsYWluIG9iamVjdHMsIGFycmF5cywgTWFwLCBTZXQgb3IgY2xhc3NlcyB0aGF0IGFyZSBtYXJrZWQgd2l0aCAnW2ltbWVyYWJsZV06IHRydWUnLiBHb3QgJ1wiK24rXCInXCJ9LDIyOmZ1bmN0aW9uKG4pe3JldHVyblwiJ2N1cnJlbnQnIGV4cGVjdHMgYSBkcmFmdCwgZ290OiBcIitufSwyMzpmdW5jdGlvbihuKXtyZXR1cm5cIidvcmlnaW5hbCcgZXhwZWN0cyBhIGRyYWZ0LCBnb3Q6IFwiK259LDI0OlwiUGF0Y2hpbmcgcmVzZXJ2ZWQgYXR0cmlidXRlcyBsaWtlIF9fcHJvdG9fXywgcHJvdG90eXBlIGFuZCBjb25zdHJ1Y3RvciBpcyBub3QgYWxsb3dlZFwifSxaPVwiXCIrT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvcixubj1cInVuZGVmaW5lZFwiIT10eXBlb2YgUmVmbGVjdCYmUmVmbGVjdC5vd25LZXlzP1JlZmxlY3Qub3duS2V5czp2b2lkIDAhPT1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzP2Z1bmN0aW9uKG4pe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhuKS5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhuKSl9Ok9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLHRuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzfHxmdW5jdGlvbihuKXt2YXIgdD17fTtyZXR1cm4gbm4obikuZm9yRWFjaCgoZnVuY3Rpb24ocil7dFtyXT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG4scil9KSksdH0scm49e30sZW49e2dldDpmdW5jdGlvbihuLHQpe2lmKHQ9PT1RKXJldHVybiBuO3ZhciBlPXAobik7aWYoIXUoZSx0KSlyZXR1cm4gZnVuY3Rpb24obix0LHIpe3ZhciBlLGk9SSh0LHIpO3JldHVybiBpP1widmFsdWVcImluIGk/aS52YWx1ZTpudWxsPT09KGU9aS5nZXQpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLmNhbGwobi5rKTp2b2lkIDB9KG4sZSx0KTt2YXIgaT1lW3RdO3JldHVybiBuLkl8fCFyKGkpP2k6aT09PXoobi50LHQpPyhFKG4pLG4ub1t0XT1SKG4uQS5oLGksbikpOml9LGhhczpmdW5jdGlvbihuLHQpe3JldHVybiB0IGluIHAobil9LG93bktleXM6ZnVuY3Rpb24obil7cmV0dXJuIFJlZmxlY3Qub3duS2V5cyhwKG4pKX0sc2V0OmZ1bmN0aW9uKG4sdCxyKXt2YXIgZT1JKHAobiksdCk7aWYobnVsbD09ZT92b2lkIDA6ZS5zZXQpcmV0dXJuIGUuc2V0LmNhbGwobi5rLHIpLCEwO2lmKCFuLlApe3ZhciBpPXoocChuKSx0KSxvPW51bGw9PWk/dm9pZCAwOmlbUV07aWYobyYmby50PT09cilyZXR1cm4gbi5vW3RdPXIsbi5EW3RdPSExLCEwO2lmKGMocixpKSYmKHZvaWQgMCE9PXJ8fHUobi50LHQpKSlyZXR1cm4hMDtFKG4pLGsobil9cmV0dXJuIG4ub1t0XT09PXImJlwibnVtYmVyXCIhPXR5cGVvZiByJiYodm9pZCAwIT09cnx8dCBpbiBuLm8pfHwobi5vW3RdPXIsbi5EW3RdPSEwLCEwKX0sZGVsZXRlUHJvcGVydHk6ZnVuY3Rpb24obix0KXtyZXR1cm4gdm9pZCAwIT09eihuLnQsdCl8fHQgaW4gbi50PyhuLkRbdF09ITEsRShuKSxrKG4pKTpkZWxldGUgbi5EW3RdLG4ubyYmZGVsZXRlIG4ub1t0XSwhMH0sZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOmZ1bmN0aW9uKG4sdCl7dmFyIHI9cChuKSxlPVJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsdCk7cmV0dXJuIGU/e3dyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZToxIT09bi5pfHxcImxlbmd0aFwiIT09dCxlbnVtZXJhYmxlOmUuZW51bWVyYWJsZSx2YWx1ZTpyW3RdfTplfSxkZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbigpe24oMTEpfSxnZXRQcm90b3R5cGVPZjpmdW5jdGlvbihuKXtyZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG4udCl9LHNldFByb3RvdHlwZU9mOmZ1bmN0aW9uKCl7bigxMil9fSxvbj17fTtpKGVuLChmdW5jdGlvbihuLHQpe29uW25dPWZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50c1swXT1hcmd1bWVudHNbMF1bMF0sdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fSkpLG9uLmRlbGV0ZVByb3BlcnR5PWZ1bmN0aW9uKHQscil7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmaXNOYU4ocGFyc2VJbnQocikpJiZuKDEzKSxlbi5kZWxldGVQcm9wZXJ0eS5jYWxsKHRoaXMsdFswXSxyKX0sb24uc2V0PWZ1bmN0aW9uKHQscixlKXtyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcImxlbmd0aFwiIT09ciYmaXNOYU4ocGFyc2VJbnQocikpJiZuKDE0KSxlbi5zZXQuY2FsbCh0aGlzLHRbMF0scixlLHRbMF0pfTt2YXIgdW49ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQpe3ZhciBlPXRoaXM7dGhpcy5nPUIsdGhpcy5GPSEwLHRoaXMucHJvZHVjZT1mdW5jdGlvbih0LGksbyl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgaSl7dmFyIHU9aTtpPXQ7dmFyIGE9ZTtyZXR1cm4gZnVuY3Rpb24obil7dmFyIHQ9dGhpczt2b2lkIDA9PT1uJiYobj11KTtmb3IodmFyIHI9YXJndW1lbnRzLmxlbmd0aCxlPUFycmF5KHI+MT9yLTE6MCksbz0xO288cjtvKyspZVtvLTFdPWFyZ3VtZW50c1tvXTtyZXR1cm4gYS5wcm9kdWNlKG4sKGZ1bmN0aW9uKG4pe3ZhciByO3JldHVybihyPWkpLmNhbGwuYXBwbHkocixbdCxuXS5jb25jYXQoZSkpfSkpfX12YXIgZjtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBpJiZuKDYpLHZvaWQgMCE9PW8mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIG8mJm4oNykscih0KSl7dmFyIGM9dyhlKSxzPVIoZSx0LHZvaWQgMCksdj0hMDt0cnl7Zj1pKHMpLHY9ITF9ZmluYWxseXt2P08oYyk6ZyhjKX1yZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgUHJvbWlzZSYmZiBpbnN0YW5jZW9mIFByb21pc2U/Zi50aGVuKChmdW5jdGlvbihuKXtyZXR1cm4gaihjLG8pLFAobixjKX0pLChmdW5jdGlvbihuKXt0aHJvdyBPKGMpLG59KSk6KGooYyxvKSxQKGYsYykpfWlmKCF0fHxcIm9iamVjdFwiIT10eXBlb2YgdCl7aWYoKGY9aSh0KSk9PT1IKXJldHVybjtyZXR1cm4gdm9pZCAwPT09ZiYmKGY9dCksZS5GJiZkKGYsITApLGZ9bigyMSx0KX0sdGhpcy5wcm9kdWNlV2l0aFBhdGNoZXM9ZnVuY3Rpb24obix0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuP2Z1bmN0aW9uKHQpe2Zvcih2YXIgcj1hcmd1bWVudHMubGVuZ3RoLGk9QXJyYXkocj4xP3ItMTowKSxvPTE7bzxyO28rKylpW28tMV09YXJndW1lbnRzW29dO3JldHVybiBlLnByb2R1Y2VXaXRoUGF0Y2hlcyh0LChmdW5jdGlvbih0KXtyZXR1cm4gbi5hcHBseSh2b2lkIDAsW3RdLmNvbmNhdChpKSl9KSl9OltlLnByb2R1Y2Uobix0LChmdW5jdGlvbihuLHQpe3I9bixpPXR9KSkscixpXTt2YXIgcixpfSxcImJvb2xlYW5cIj09dHlwZW9mKG51bGw9PXQ/dm9pZCAwOnQudXNlUHJveGllcykmJnRoaXMuc2V0VXNlUHJveGllcyh0LnVzZVByb3hpZXMpLFwiYm9vbGVhblwiPT10eXBlb2YobnVsbD09dD92b2lkIDA6dC5hdXRvRnJlZXplKSYmdGhpcy5zZXRBdXRvRnJlZXplKHQuYXV0b0ZyZWV6ZSl9dmFyIGk9ZS5wcm90b3R5cGU7cmV0dXJuIGkuY3JlYXRlRHJhZnQ9ZnVuY3Rpb24oZSl7cihlKXx8big4KSx0KGUpJiYoZT1EKGUpKTt2YXIgaT13KHRoaXMpLG89Uih0aGlzLGUsdm9pZCAwKTtyZXR1cm4gb1tRXS5DPSEwLGcoaSksb30saS5maW5pc2hEcmFmdD1mdW5jdGlvbih0LHIpe3ZhciBlPXQmJnRbUV07XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKGUmJmUuQ3x8big5KSxlLkkmJm4oMTApKTt2YXIgaT1lLkE7cmV0dXJuIGooaSxyKSxQKHZvaWQgMCxpKX0saS5zZXRBdXRvRnJlZXplPWZ1bmN0aW9uKG4pe3RoaXMuRj1ufSxpLnNldFVzZVByb3hpZXM9ZnVuY3Rpb24odCl7dCYmIUImJm4oMjApLHRoaXMuZz10fSxpLmFwcGx5UGF0Y2hlcz1mdW5jdGlvbihuLHIpe3ZhciBlO2ZvcihlPXIubGVuZ3RoLTE7ZT49MDtlLS0pe3ZhciBpPXJbZV07aWYoMD09PWkucGF0aC5sZW5ndGgmJlwicmVwbGFjZVwiPT09aS5vcCl7bj1pLnZhbHVlO2JyZWFrfX12YXIgbz1iKFwiUGF0Y2hlc1wiKS4kO3JldHVybiB0KG4pP28obixyKTp0aGlzLnByb2R1Y2UobiwoZnVuY3Rpb24obil7cmV0dXJuIG8obixyLnNsaWNlKGUrMSkpfSkpfSxlfSgpLGFuPW5ldyB1bixmbj1hbi5wcm9kdWNlLGNuPWFuLnByb2R1Y2VXaXRoUGF0Y2hlcy5iaW5kKGFuKSxzbj1hbi5zZXRBdXRvRnJlZXplLmJpbmQoYW4pLHZuPWFuLnNldFVzZVByb3hpZXMuYmluZChhbikscG49YW4uYXBwbHlQYXRjaGVzLmJpbmQoYW4pLGxuPWFuLmNyZWF0ZURyYWZ0LmJpbmQoYW4pLGRuPWFuLmZpbmlzaERyYWZ0LmJpbmQoYW4pO2V4cG9ydCBkZWZhdWx0IGZuO2V4cG9ydHt1biBhcyBJbW1lcixwbiBhcyBhcHBseVBhdGNoZXMsSyBhcyBjYXN0RHJhZnQsJCBhcyBjYXN0SW1tdXRhYmxlLGxuIGFzIGNyZWF0ZURyYWZ0LEQgYXMgY3VycmVudCxKIGFzIGVuYWJsZUFsbFBsdWdpbnMsTiBhcyBlbmFibGVFUzUsQyBhcyBlbmFibGVNYXBTZXQsVCBhcyBlbmFibGVQYXRjaGVzLGRuIGFzIGZpbmlzaERyYWZ0LGQgYXMgZnJlZXplLEwgYXMgaW1tZXJhYmxlLHQgYXMgaXNEcmFmdCxyIGFzIGlzRHJhZnRhYmxlLEggYXMgbm90aGluZyxlIGFzIG9yaWdpbmFsLGZuIGFzIHByb2R1Y2UsY24gYXMgcHJvZHVjZVdpdGhQYXRjaGVzLHNuIGFzIHNldEF1dG9GcmVlemUsdm4gYXMgc2V0VXNlUHJveGllc307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbW1lci5lc20uanMubWFwXG4iLCIvKiFcbiAqIGlzLXBsYWluLW9iamVjdCA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvaXMtcGxhaW4tb2JqZWN0PlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE3LCBKb24gU2NobGlua2VydC5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5mdW5jdGlvbiBpc09iamVjdChvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KG8pIHtcbiAgdmFyIGN0b3IscHJvdDtcblxuICBpZiAoaXNPYmplY3QobykgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgaGFzIG1vZGlmaWVkIGNvbnN0cnVjdG9yXG4gIGN0b3IgPSBvLmNvbnN0cnVjdG9yO1xuICBpZiAoY3RvciA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTtcblxuICAvLyBJZiBoYXMgbW9kaWZpZWQgcHJvdG90eXBlXG4gIHByb3QgPSBjdG9yLnByb3RvdHlwZTtcbiAgaWYgKGlzT2JqZWN0KHByb3QpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIGNvbnN0cnVjdG9yIGRvZXMgbm90IGhhdmUgYW4gT2JqZWN0LXNwZWNpZmljIG1ldGhvZFxuICBpZiAocHJvdC5oYXNPd25Qcm9wZXJ0eSgnaXNQcm90b3R5cGVPZicpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIE1vc3QgbGlrZWx5IGEgcGxhaW4gT2JqZWN0XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgeyBpc1BsYWluT2JqZWN0IH07XG4iLCJpbXBvcnQgeyBpc1BsYWluT2JqZWN0IH0gZnJvbSAnaXMtcGxhaW4tb2JqZWN0JztcbmltcG9ydCB7IHByb2R1Y2UsIGNyZWF0ZURyYWZ0LCBmaW5pc2hEcmFmdCwgaXNEcmFmdCB9IGZyb20gJ2ltbWVyJztcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbnZhciBESVJUWV9QQVRIUyA9IG5ldyBXZWFrTWFwKCk7XG52YXIgRkxVU0hJTkcgPSBuZXcgV2Vha01hcCgpO1xudmFyIE5PUk1BTElaSU5HID0gbmV3IFdlYWtNYXAoKTtcbnZhciBQQVRIX1JFRlMgPSBuZXcgV2Vha01hcCgpO1xudmFyIFBPSU5UX1JFRlMgPSBuZXcgV2Vha01hcCgpO1xudmFyIFJBTkdFX1JFRlMgPSBuZXcgV2Vha01hcCgpO1xuXG5mdW5jdGlvbiBvd25LZXlzJDkob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDkodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQ5KE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkOShPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cbi8qKlxyXG4gKiBDcmVhdGUgYSBuZXcgU2xhdGUgYEVkaXRvcmAgb2JqZWN0LlxyXG4gKi9cblxudmFyIGNyZWF0ZUVkaXRvciA9ICgpID0+IHtcbiAgdmFyIGVkaXRvciA9IHtcbiAgICBjaGlsZHJlbjogW10sXG4gICAgb3BlcmF0aW9uczogW10sXG4gICAgc2VsZWN0aW9uOiBudWxsLFxuICAgIG1hcmtzOiBudWxsLFxuICAgIGlzSW5saW5lOiAoKSA9PiBmYWxzZSxcbiAgICBpc1ZvaWQ6ICgpID0+IGZhbHNlLFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBhcHBseTogb3AgPT4ge1xuICAgICAgZm9yICh2YXIgcmVmIG9mIEVkaXRvci5wYXRoUmVmcyhlZGl0b3IpKSB7XG4gICAgICAgIFBhdGhSZWYudHJhbnNmb3JtKHJlZiwgb3ApO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfcmVmIG9mIEVkaXRvci5wb2ludFJlZnMoZWRpdG9yKSkge1xuICAgICAgICBQb2ludFJlZi50cmFuc2Zvcm0oX3JlZiwgb3ApO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfcmVmMiBvZiBFZGl0b3IucmFuZ2VSZWZzKGVkaXRvcikpIHtcbiAgICAgICAgUmFuZ2VSZWYudHJhbnNmb3JtKF9yZWYyLCBvcCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzZXQgPSBuZXcgU2V0KCk7XG4gICAgICB2YXIgZGlydHlQYXRocyA9IFtdO1xuXG4gICAgICB2YXIgYWRkID0gcGF0aCA9PiB7XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgdmFyIGtleSA9IHBhdGguam9pbignLCcpO1xuXG4gICAgICAgICAgaWYgKCFzZXQuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHNldC5hZGQoa2V5KTtcbiAgICAgICAgICAgIGRpcnR5UGF0aHMucHVzaChwYXRoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciBvbGREaXJ0eVBhdGhzID0gRElSVFlfUEFUSFMuZ2V0KGVkaXRvcikgfHwgW107XG4gICAgICB2YXIgbmV3RGlydHlQYXRocyA9IGdldERpcnR5UGF0aHMob3ApO1xuXG4gICAgICBmb3IgKHZhciBwYXRoIG9mIG9sZERpcnR5UGF0aHMpIHtcbiAgICAgICAgdmFyIG5ld1BhdGggPSBQYXRoLnRyYW5zZm9ybShwYXRoLCBvcCk7XG4gICAgICAgIGFkZChuZXdQYXRoKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgX3BhdGggb2YgbmV3RGlydHlQYXRocykge1xuICAgICAgICBhZGQoX3BhdGgpO1xuICAgICAgfVxuXG4gICAgICBESVJUWV9QQVRIUy5zZXQoZWRpdG9yLCBkaXJ0eVBhdGhzKTtcbiAgICAgIFRyYW5zZm9ybXMudHJhbnNmb3JtKGVkaXRvciwgb3ApO1xuICAgICAgZWRpdG9yLm9wZXJhdGlvbnMucHVzaChvcCk7XG4gICAgICBFZGl0b3Iubm9ybWFsaXplKGVkaXRvcik7IC8vIENsZWFyIGFueSBmb3JtYXRzIGFwcGxpZWQgdG8gdGhlIGN1cnNvciBpZiB0aGUgc2VsZWN0aW9uIGNoYW5nZXMuXG5cbiAgICAgIGlmIChvcC50eXBlID09PSAnc2V0X3NlbGVjdGlvbicpIHtcbiAgICAgICAgZWRpdG9yLm1hcmtzID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFGTFVTSElORy5nZXQoZWRpdG9yKSkge1xuICAgICAgICBGTFVTSElORy5zZXQoZWRpdG9yLCB0cnVlKTtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgRkxVU0hJTkcuc2V0KGVkaXRvciwgZmFsc2UpO1xuICAgICAgICAgIGVkaXRvci5vbkNoYW5nZSgpO1xuICAgICAgICAgIGVkaXRvci5vcGVyYXRpb25zID0gW107XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgYWRkTWFyazogKGtleSwgdmFsdWUpID0+IHtcbiAgICAgIHZhciB7XG4gICAgICAgIHNlbGVjdGlvblxuICAgICAgfSA9IGVkaXRvcjtcblxuICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICBpZiAoUmFuZ2UuaXNFeHBhbmRlZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5zZXROb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICAgIFtrZXldOiB2YWx1ZVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1hdGNoOiBUZXh0LmlzVGV4dCxcbiAgICAgICAgICAgIHNwbGl0OiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG1hcmtzID0gX29iamVjdFNwcmVhZCQ5KF9vYmplY3RTcHJlYWQkOSh7fSwgRWRpdG9yLm1hcmtzKGVkaXRvcikgfHwge30pLCB7fSwge1xuICAgICAgICAgICAgW2tleV06IHZhbHVlXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBlZGl0b3IubWFya3MgPSBtYXJrcztcblxuICAgICAgICAgIGlmICghRkxVU0hJTkcuZ2V0KGVkaXRvcikpIHtcbiAgICAgICAgICAgIGVkaXRvci5vbkNoYW5nZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZGVsZXRlQmFja3dhcmQ6IHVuaXQgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgc2VsZWN0aW9uXG4gICAgICB9ID0gZWRpdG9yO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uICYmIFJhbmdlLmlzQ29sbGFwc2VkKHNlbGVjdGlvbikpIHtcbiAgICAgICAgVHJhbnNmb3Jtcy5kZWxldGUoZWRpdG9yLCB7XG4gICAgICAgICAgdW5pdCxcbiAgICAgICAgICByZXZlcnNlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVsZXRlRm9yd2FyZDogdW5pdCA9PiB7XG4gICAgICB2YXIge1xuICAgICAgICBzZWxlY3Rpb25cbiAgICAgIH0gPSBlZGl0b3I7XG5cbiAgICAgIGlmIChzZWxlY3Rpb24gJiYgUmFuZ2UuaXNDb2xsYXBzZWQoc2VsZWN0aW9uKSkge1xuICAgICAgICBUcmFuc2Zvcm1zLmRlbGV0ZShlZGl0b3IsIHtcbiAgICAgICAgICB1bml0XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVsZXRlRnJhZ21lbnQ6IGRpcmVjdGlvbiA9PiB7XG4gICAgICB2YXIge1xuICAgICAgICBzZWxlY3Rpb25cbiAgICAgIH0gPSBlZGl0b3I7XG5cbiAgICAgIGlmIChzZWxlY3Rpb24gJiYgUmFuZ2UuaXNFeHBhbmRlZChzZWxlY3Rpb24pKSB7XG4gICAgICAgIFRyYW5zZm9ybXMuZGVsZXRlKGVkaXRvciwge1xuICAgICAgICAgIHJldmVyc2U6IGRpcmVjdGlvbiA9PT0gJ2JhY2t3YXJkJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldEZyYWdtZW50OiAoKSA9PiB7XG4gICAgICB2YXIge1xuICAgICAgICBzZWxlY3Rpb25cbiAgICAgIH0gPSBlZGl0b3I7XG5cbiAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIE5vZGUuZnJhZ21lbnQoZWRpdG9yLCBzZWxlY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gW107XG4gICAgfSxcbiAgICBpbnNlcnRCcmVhazogKCkgPT4ge1xuICAgICAgVHJhbnNmb3Jtcy5zcGxpdE5vZGVzKGVkaXRvciwge1xuICAgICAgICBhbHdheXM6IHRydWVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgaW5zZXJ0RnJhZ21lbnQ6IGZyYWdtZW50ID0+IHtcbiAgICAgIFRyYW5zZm9ybXMuaW5zZXJ0RnJhZ21lbnQoZWRpdG9yLCBmcmFnbWVudCk7XG4gICAgfSxcbiAgICBpbnNlcnROb2RlOiBub2RlID0+IHtcbiAgICAgIFRyYW5zZm9ybXMuaW5zZXJ0Tm9kZXMoZWRpdG9yLCBub2RlKTtcbiAgICB9LFxuICAgIGluc2VydFRleHQ6IHRleHQgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgc2VsZWN0aW9uLFxuICAgICAgICBtYXJrc1xuICAgICAgfSA9IGVkaXRvcjtcblxuICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAvLyBJZiB0aGUgY3Vyc29yIGlzIGF0IHRoZSBlbmQgb2YgYW4gaW5saW5lLCBtb3ZlIGl0IG91dHNpZGUgb2ZcbiAgICAgICAgLy8gdGhlIGlubGluZSBiZWZvcmUgaW5zZXJ0aW5nXG4gICAgICAgIGlmIChSYW5nZS5pc0NvbGxhcHNlZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgdmFyIGlubGluZSA9IEVkaXRvci5hYm92ZShlZGl0b3IsIHtcbiAgICAgICAgICAgIG1hdGNoOiBuID0+IEVkaXRvci5pc0lubGluZShlZGl0b3IsIG4pLFxuICAgICAgICAgICAgbW9kZTogJ2hpZ2hlc3QnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAoaW5saW5lKSB7XG4gICAgICAgICAgICB2YXIgWywgaW5saW5lUGF0aF0gPSBpbmxpbmU7XG5cbiAgICAgICAgICAgIGlmIChFZGl0b3IuaXNFbmQoZWRpdG9yLCBzZWxlY3Rpb24uYW5jaG9yLCBpbmxpbmVQYXRoKSkge1xuICAgICAgICAgICAgICB2YXIgcG9pbnQgPSBFZGl0b3IuYWZ0ZXIoZWRpdG9yLCBpbmxpbmVQYXRoKTtcbiAgICAgICAgICAgICAgVHJhbnNmb3Jtcy5zZXRTZWxlY3Rpb24oZWRpdG9yLCB7XG4gICAgICAgICAgICAgICAgYW5jaG9yOiBwb2ludCxcbiAgICAgICAgICAgICAgICBmb2N1czogcG9pbnRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hcmtzKSB7XG4gICAgICAgICAgdmFyIG5vZGUgPSBfb2JqZWN0U3ByZWFkJDkoe1xuICAgICAgICAgICAgdGV4dFxuICAgICAgICAgIH0sIG1hcmtzKTtcblxuICAgICAgICAgIFRyYW5zZm9ybXMuaW5zZXJ0Tm9kZXMoZWRpdG9yLCBub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBUcmFuc2Zvcm1zLmluc2VydFRleHQoZWRpdG9yLCB0ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVkaXRvci5tYXJrcyA9IG51bGw7XG4gICAgICB9XG4gICAgfSxcbiAgICBub3JtYWxpemVOb2RlOiBlbnRyeSA9PiB7XG4gICAgICB2YXIgW25vZGUsIHBhdGhdID0gZW50cnk7IC8vIFRoZXJlIGFyZSBubyBjb3JlIG5vcm1hbGl6YXRpb25zIGZvciB0ZXh0IG5vZGVzLlxuXG4gICAgICBpZiAoVGV4dC5pc1RleHQobm9kZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBFbnN1cmUgdGhhdCBibG9jayBhbmQgaW5saW5lIG5vZGVzIGhhdmUgYXQgbGVhc3Qgb25lIHRleHQgY2hpbGQuXG5cblxuICAgICAgaWYgKEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IHtcbiAgICAgICAgICB0ZXh0OiAnJ1xuICAgICAgICB9O1xuICAgICAgICBUcmFuc2Zvcm1zLmluc2VydE5vZGVzKGVkaXRvciwgY2hpbGQsIHtcbiAgICAgICAgICBhdDogcGF0aC5jb25jYXQoMCksXG4gICAgICAgICAgdm9pZHM6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIG5vZGUgc2hvdWxkIGhhdmUgYmxvY2sgb3IgaW5saW5lIGNoaWxkcmVuLlxuXG5cbiAgICAgIHZhciBzaG91bGRIYXZlSW5saW5lcyA9IEVkaXRvci5pc0VkaXRvcihub2RlKSA/IGZhbHNlIDogRWxlbWVudC5pc0VsZW1lbnQobm9kZSkgJiYgKGVkaXRvci5pc0lubGluZShub2RlKSB8fCBub2RlLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCB8fCBUZXh0LmlzVGV4dChub2RlLmNoaWxkcmVuWzBdKSB8fCBlZGl0b3IuaXNJbmxpbmUobm9kZS5jaGlsZHJlblswXSkpOyAvLyBTaW5jZSB3ZSdsbCBiZSBhcHBseWluZyBvcGVyYXRpb25zIHdoaWxlIGl0ZXJhdGluZywga2VlcCB0cmFjayBvZiBhblxuICAgICAgLy8gaW5kZXggdGhhdCBhY2NvdW50cyBmb3IgYW55IGFkZGVkL3JlbW92ZWQgbm9kZXMuXG5cbiAgICAgIHZhciBuID0gMDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrLCBuKyspIHtcbiAgICAgICAgdmFyIGN1cnJlbnROb2RlID0gTm9kZS5nZXQoZWRpdG9yLCBwYXRoKTtcbiAgICAgICAgaWYgKFRleHQuaXNUZXh0KGN1cnJlbnROb2RlKSkgY29udGludWU7XG4gICAgICAgIHZhciBfY2hpbGQgPSBub2RlLmNoaWxkcmVuW2ldO1xuICAgICAgICB2YXIgcHJldiA9IGN1cnJlbnROb2RlLmNoaWxkcmVuW24gLSAxXTtcbiAgICAgICAgdmFyIGlzTGFzdCA9IGkgPT09IG5vZGUuY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICAgICAgdmFyIGlzSW5saW5lT3JUZXh0ID0gVGV4dC5pc1RleHQoX2NoaWxkKSB8fCBFbGVtZW50LmlzRWxlbWVudChfY2hpbGQpICYmIGVkaXRvci5pc0lubGluZShfY2hpbGQpOyAvLyBPbmx5IGFsbG93IGJsb2NrIG5vZGVzIGluIHRoZSB0b3AtbGV2ZWwgY2hpbGRyZW4gYW5kIHBhcmVudCBibG9ja3NcbiAgICAgICAgLy8gdGhhdCBvbmx5IGNvbnRhaW4gYmxvY2sgbm9kZXMuIFNpbWlsYXJseSwgb25seSBhbGxvdyBpbmxpbmUgbm9kZXMgaW5cbiAgICAgICAgLy8gb3RoZXIgaW5saW5lIG5vZGVzLCBvciBwYXJlbnQgYmxvY2tzIHRoYXQgb25seSBjb250YWluIGlubGluZXMgYW5kXG4gICAgICAgIC8vIHRleHQuXG5cbiAgICAgICAgaWYgKGlzSW5saW5lT3JUZXh0ICE9PSBzaG91bGRIYXZlSW5saW5lcykge1xuICAgICAgICAgIFRyYW5zZm9ybXMucmVtb3ZlTm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgICBhdDogcGF0aC5jb25jYXQobiksXG4gICAgICAgICAgICB2b2lkczogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG4tLTtcbiAgICAgICAgfSBlbHNlIGlmIChFbGVtZW50LmlzRWxlbWVudChfY2hpbGQpKSB7XG4gICAgICAgICAgLy8gRW5zdXJlIHRoYXQgaW5saW5lIG5vZGVzIGFyZSBzdXJyb3VuZGVkIGJ5IHRleHQgbm9kZXMuXG4gICAgICAgICAgaWYgKGVkaXRvci5pc0lubGluZShfY2hpbGQpKSB7XG4gICAgICAgICAgICBpZiAocHJldiA9PSBudWxsIHx8ICFUZXh0LmlzVGV4dChwcmV2KSkge1xuICAgICAgICAgICAgICB2YXIgbmV3Q2hpbGQgPSB7XG4gICAgICAgICAgICAgICAgdGV4dDogJydcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgVHJhbnNmb3Jtcy5pbnNlcnROb2RlcyhlZGl0b3IsIG5ld0NoaWxkLCB7XG4gICAgICAgICAgICAgICAgYXQ6IHBhdGguY29uY2F0KG4pLFxuICAgICAgICAgICAgICAgIHZvaWRzOiB0cnVlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBuKys7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzTGFzdCkge1xuICAgICAgICAgICAgICB2YXIgX25ld0NoaWxkID0ge1xuICAgICAgICAgICAgICAgIHRleHQ6ICcnXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIFRyYW5zZm9ybXMuaW5zZXJ0Tm9kZXMoZWRpdG9yLCBfbmV3Q2hpbGQsIHtcbiAgICAgICAgICAgICAgICBhdDogcGF0aC5jb25jYXQobiArIDEpLFxuICAgICAgICAgICAgICAgIHZvaWRzOiB0cnVlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBuKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1lcmdlIGFkamFjZW50IHRleHQgbm9kZXMgdGhhdCBhcmUgZW1wdHkgb3IgbWF0Y2guXG4gICAgICAgICAgaWYgKHByZXYgIT0gbnVsbCAmJiBUZXh0LmlzVGV4dChwcmV2KSkge1xuICAgICAgICAgICAgaWYgKFRleHQuZXF1YWxzKF9jaGlsZCwgcHJldiwge1xuICAgICAgICAgICAgICBsb29zZTogdHJ1ZVxuICAgICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgICAgVHJhbnNmb3Jtcy5tZXJnZU5vZGVzKGVkaXRvciwge1xuICAgICAgICAgICAgICAgIGF0OiBwYXRoLmNvbmNhdChuKSxcbiAgICAgICAgICAgICAgICB2b2lkczogdHJ1ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgbi0tO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcmV2LnRleHQgPT09ICcnKSB7XG4gICAgICAgICAgICAgIFRyYW5zZm9ybXMucmVtb3ZlTm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgICAgICAgYXQ6IHBhdGguY29uY2F0KG4gLSAxKSxcbiAgICAgICAgICAgICAgICB2b2lkczogdHJ1ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgbi0tO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChfY2hpbGQudGV4dCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgVHJhbnNmb3Jtcy5yZW1vdmVOb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICAgICAgICBhdDogcGF0aC5jb25jYXQobiksXG4gICAgICAgICAgICAgICAgdm9pZHM6IHRydWVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIG4tLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHJlbW92ZU1hcms6IGtleSA9PiB7XG4gICAgICB2YXIge1xuICAgICAgICBzZWxlY3Rpb25cbiAgICAgIH0gPSBlZGl0b3I7XG5cbiAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgaWYgKFJhbmdlLmlzRXhwYW5kZWQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgIFRyYW5zZm9ybXMudW5zZXROb2RlcyhlZGl0b3IsIGtleSwge1xuICAgICAgICAgICAgbWF0Y2g6IFRleHQuaXNUZXh0LFxuICAgICAgICAgICAgc3BsaXQ6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgbWFya3MgPSBfb2JqZWN0U3ByZWFkJDkoe30sIEVkaXRvci5tYXJrcyhlZGl0b3IpIHx8IHt9KTtcblxuICAgICAgICAgIGRlbGV0ZSBtYXJrc1trZXldO1xuICAgICAgICAgIGVkaXRvci5tYXJrcyA9IG1hcmtzO1xuXG4gICAgICAgICAgaWYgKCFGTFVTSElORy5nZXQoZWRpdG9yKSkge1xuICAgICAgICAgICAgZWRpdG9yLm9uQ2hhbmdlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuICByZXR1cm4gZWRpdG9yO1xufTtcbi8qKlxyXG4gKiBHZXQgdGhlIFwiZGlydHlcIiBwYXRocyBnZW5lcmF0ZWQgZnJvbSBhbiBvcGVyYXRpb24uXHJcbiAqL1xuXG52YXIgZ2V0RGlydHlQYXRocyA9IG9wID0+IHtcbiAgc3dpdGNoIChvcC50eXBlKSB7XG4gICAgY2FzZSAnaW5zZXJ0X3RleHQnOlxuICAgIGNhc2UgJ3JlbW92ZV90ZXh0JzpcbiAgICBjYXNlICdzZXRfbm9kZSc6XG4gICAgICB7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgcGF0aFxuICAgICAgICB9ID0gb3A7XG4gICAgICAgIHJldHVybiBQYXRoLmxldmVscyhwYXRoKTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ2luc2VydF9ub2RlJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBub2RlLFxuICAgICAgICAgIHBhdGg6IF9wYXRoMlxuICAgICAgICB9ID0gb3A7XG4gICAgICAgIHZhciBsZXZlbHMgPSBQYXRoLmxldmVscyhfcGF0aDIpO1xuICAgICAgICB2YXIgZGVzY2VuZGFudHMgPSBUZXh0LmlzVGV4dChub2RlKSA/IFtdIDogQXJyYXkuZnJvbShOb2RlLm5vZGVzKG5vZGUpLCBfcmVmMyA9PiB7XG4gICAgICAgICAgdmFyIFssIHBdID0gX3JlZjM7XG4gICAgICAgICAgcmV0dXJuIF9wYXRoMi5jb25jYXQocCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gWy4uLmxldmVscywgLi4uZGVzY2VuZGFudHNdO1xuICAgICAgfVxuXG4gICAgY2FzZSAnbWVyZ2Vfbm9kZSc6XG4gICAgICB7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgcGF0aDogX3BhdGgzXG4gICAgICAgIH0gPSBvcDtcbiAgICAgICAgdmFyIGFuY2VzdG9ycyA9IFBhdGguYW5jZXN0b3JzKF9wYXRoMyk7XG4gICAgICAgIHZhciBwcmV2aW91c1BhdGggPSBQYXRoLnByZXZpb3VzKF9wYXRoMyk7XG4gICAgICAgIHJldHVybiBbLi4uYW5jZXN0b3JzLCBwcmV2aW91c1BhdGhdO1xuICAgICAgfVxuXG4gICAgY2FzZSAnbW92ZV9ub2RlJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBwYXRoOiBfcGF0aDQsXG4gICAgICAgICAgbmV3UGF0aFxuICAgICAgICB9ID0gb3A7XG5cbiAgICAgICAgaWYgKFBhdGguZXF1YWxzKF9wYXRoNCwgbmV3UGF0aCkpIHtcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb2xkQW5jZXN0b3JzID0gW107XG4gICAgICAgIHZhciBuZXdBbmNlc3RvcnMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBhbmNlc3RvciBvZiBQYXRoLmFuY2VzdG9ycyhfcGF0aDQpKSB7XG4gICAgICAgICAgdmFyIHAgPSBQYXRoLnRyYW5zZm9ybShhbmNlc3Rvciwgb3ApO1xuICAgICAgICAgIG9sZEFuY2VzdG9ycy5wdXNoKHApO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgX2FuY2VzdG9yIG9mIFBhdGguYW5jZXN0b3JzKG5ld1BhdGgpKSB7XG4gICAgICAgICAgdmFyIF9wID0gUGF0aC50cmFuc2Zvcm0oX2FuY2VzdG9yLCBvcCk7XG5cbiAgICAgICAgICBuZXdBbmNlc3RvcnMucHVzaChfcCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmV3UGFyZW50ID0gbmV3QW5jZXN0b3JzW25ld0FuY2VzdG9ycy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIG5ld0luZGV4ID0gbmV3UGF0aFtuZXdQYXRoLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgcmVzdWx0UGF0aCA9IG5ld1BhcmVudC5jb25jYXQobmV3SW5kZXgpO1xuICAgICAgICByZXR1cm4gWy4uLm9sZEFuY2VzdG9ycywgLi4ubmV3QW5jZXN0b3JzLCByZXN1bHRQYXRoXTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ3JlbW92ZV9ub2RlJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBwYXRoOiBfcGF0aDVcbiAgICAgICAgfSA9IG9wO1xuXG4gICAgICAgIHZhciBfYW5jZXN0b3JzID0gUGF0aC5hbmNlc3RvcnMoX3BhdGg1KTtcblxuICAgICAgICByZXR1cm4gWy4uLl9hbmNlc3RvcnNdO1xuICAgICAgfVxuXG4gICAgY2FzZSAnc3BsaXRfbm9kZSc6XG4gICAgICB7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgcGF0aDogX3BhdGg2XG4gICAgICAgIH0gPSBvcDtcblxuICAgICAgICB2YXIgX2xldmVscyA9IFBhdGgubGV2ZWxzKF9wYXRoNik7XG5cbiAgICAgICAgdmFyIG5leHRQYXRoID0gUGF0aC5uZXh0KF9wYXRoNik7XG4gICAgICAgIHJldHVybiBbLi4uX2xldmVscywgbmV4dFBhdGhdO1xuICAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuLyoqXHJcbiAqIENvbnN0YW50cyBmb3Igc3RyaW5nIGRpc3RhbmNlIGNoZWNraW5nLlxyXG4gKi9cbnZhciBTUEFDRSA9IC9cXHMvO1xudmFyIFBVTkNUVUFUSU9OID0gL1tcXHUwMDIxLVxcdTAwMjNcXHUwMDI1LVxcdTAwMkFcXHUwMDJDLVxcdTAwMkZcXHUwMDNBXFx1MDAzQlxcdTAwM0ZcXHUwMDQwXFx1MDA1Qi1cXHUwMDVEXFx1MDA1RlxcdTAwN0JcXHUwMDdEXFx1MDBBMVxcdTAwQTdcXHUwMEFCXFx1MDBCNlxcdTAwQjdcXHUwMEJCXFx1MDBCRlxcdTAzN0VcXHUwMzg3XFx1MDU1QS1cXHUwNTVGXFx1MDU4OVxcdTA1OEFcXHUwNUJFXFx1MDVDMFxcdTA1QzNcXHUwNUM2XFx1MDVGM1xcdTA1RjRcXHUwNjA5XFx1MDYwQVxcdTA2MENcXHUwNjBEXFx1MDYxQlxcdTA2MUVcXHUwNjFGXFx1MDY2QS1cXHUwNjZEXFx1MDZENFxcdTA3MDAtXFx1MDcwRFxcdTA3RjctXFx1MDdGOVxcdTA4MzAtXFx1MDgzRVxcdTA4NUVcXHUwOTY0XFx1MDk2NVxcdTA5NzBcXHUwQUYwXFx1MERGNFxcdTBFNEZcXHUwRTVBXFx1MEU1QlxcdTBGMDQtXFx1MEYxMlxcdTBGMTRcXHUwRjNBLVxcdTBGM0RcXHUwRjg1XFx1MEZEMC1cXHUwRkQ0XFx1MEZEOVxcdTBGREFcXHUxMDRBLVxcdTEwNEZcXHUxMEZCXFx1MTM2MC1cXHUxMzY4XFx1MTQwMFxcdTE2NkRcXHUxNjZFXFx1MTY5QlxcdTE2OUNcXHUxNkVCLVxcdTE2RURcXHUxNzM1XFx1MTczNlxcdTE3RDQtXFx1MTdENlxcdTE3RDgtXFx1MTdEQVxcdTE4MDAtXFx1MTgwQVxcdTE5NDRcXHUxOTQ1XFx1MUExRVxcdTFBMUZcXHUxQUEwLVxcdTFBQTZcXHUxQUE4LVxcdTFBQURcXHUxQjVBLVxcdTFCNjBcXHUxQkZDLVxcdTFCRkZcXHUxQzNCLVxcdTFDM0ZcXHUxQzdFXFx1MUM3RlxcdTFDQzAtXFx1MUNDN1xcdTFDRDNcXHUyMDEwLVxcdTIwMjdcXHUyMDMwLVxcdTIwNDNcXHUyMDQ1LVxcdTIwNTFcXHUyMDUzLVxcdTIwNUVcXHUyMDdEXFx1MjA3RVxcdTIwOERcXHUyMDhFXFx1MjMyOVxcdTIzMkFcXHUyNzY4LVxcdTI3NzVcXHUyN0M1XFx1MjdDNlxcdTI3RTYtXFx1MjdFRlxcdTI5ODMtXFx1Mjk5OFxcdTI5RDgtXFx1MjlEQlxcdTI5RkNcXHUyOUZEXFx1MkNGOS1cXHUyQ0ZDXFx1MkNGRVxcdTJDRkZcXHUyRDcwXFx1MkUwMC1cXHUyRTJFXFx1MkUzMC1cXHUyRTNCXFx1MzAwMS1cXHUzMDAzXFx1MzAwOC1cXHUzMDExXFx1MzAxNC1cXHUzMDFGXFx1MzAzMFxcdTMwM0RcXHUzMEEwXFx1MzBGQlxcdUE0RkVcXHVBNEZGXFx1QTYwRC1cXHVBNjBGXFx1QTY3M1xcdUE2N0VcXHVBNkYyLVxcdUE2RjdcXHVBODc0LVxcdUE4NzdcXHVBOENFXFx1QThDRlxcdUE4RjgtXFx1QThGQVxcdUE5MkVcXHVBOTJGXFx1QTk1RlxcdUE5QzEtXFx1QTlDRFxcdUE5REVcXHVBOURGXFx1QUE1Qy1cXHVBQTVGXFx1QUFERVxcdUFBREZcXHVBQUYwXFx1QUFGMVxcdUFCRUJcXHVGRDNFXFx1RkQzRlxcdUZFMTAtXFx1RkUxOVxcdUZFMzAtXFx1RkU1MlxcdUZFNTQtXFx1RkU2MVxcdUZFNjNcXHVGRTY4XFx1RkU2QVxcdUZFNkJcXHVGRjAxLVxcdUZGMDNcXHVGRjA1LVxcdUZGMEFcXHVGRjBDLVxcdUZGMEZcXHVGRjFBXFx1RkYxQlxcdUZGMUZcXHVGRjIwXFx1RkYzQi1cXHVGRjNEXFx1RkYzRlxcdUZGNUJcXHVGRjVEXFx1RkY1Ri1cXHVGRjY1XS87XG52YXIgQ0hBTUVMRU9OID0gL1snXFx1MjAxOFxcdTIwMTldLztcbi8qKlxyXG4gKiBHZXQgdGhlIGRpc3RhbmNlIHRvIHRoZSBlbmQgb2YgdGhlIGZpcnN0IGNoYXJhY3RlciBpbiBhIHN0cmluZyBvZiB0ZXh0LlxyXG4gKi9cblxudmFyIGdldENoYXJhY3RlckRpc3RhbmNlID0gZnVuY3Rpb24gZ2V0Q2hhcmFjdGVyRGlzdGFuY2Uoc3RyKSB7XG4gIHZhciBpc1JUTCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gIHZhciBpc0xUUiA9ICFpc1JUTDtcbiAgdmFyIGRpc3QgPSAwOyAvLyBwcmV2IHR5cGVzOlxuICAvLyBOU0VROiBub24gc2VxdWVuY2VhYmxlIGNvZGVwb2ludC5cbiAgLy8gTU9EOiBtb2RpZmllclxuICAvLyBaV0o6IHplcm8gd2lkdGggam9pbmVyXG4gIC8vIFZBUjogdmFyaWF0aW9uIHNlbGVjdG9yXG4gIC8vIEJNUDogc2VxdWVuY2VhYmxlIGNvZGVwb2ludCBmcm9tIGJhc2ljIG11bHRpbGluZ3VhbCBwbGFuZVxuICAvLyBSSTogcmVnaW9uYWwgaW5kaWNhdG9yXG4gIC8vIEtDOiBrZXljYXBcbiAgLy8gVEFHOiB0YWdcblxuICB2YXIgcHJldiA9IG51bGw7XG4gIHZhciBjb2RlcG9pbnRzID0gaXNMVFIgPyBzdHIgOiBjb2RlcG9pbnRzSXRlcmF0b3JSVEwoc3RyKTtcblxuICBmb3IgKHZhciBjb2RlcG9pbnQgb2YgY29kZXBvaW50cykge1xuICAgIHZhciBjb2RlID0gY29kZXBvaW50LmNvZGVQb2ludEF0KDApO1xuICAgIGlmICghY29kZSkgYnJlYWs7IC8vIENoZWNrIGlmIGNvZGVwb2ludCBpcyBwYXJ0IG9mIGEgc2VxdWVuY2UuXG5cbiAgICBpZiAoaXNaV0ooY29kZSkpIHtcbiAgICAgIGRpc3QgKz0gY29kZXBvaW50Lmxlbmd0aDtcbiAgICAgIHByZXYgPSAnWldKJztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBbaXNLZXljYXBTdGFydCwgaXNLZXljYXBFbmRdID0gaXNMVFIgPyBbaXNLZXljYXAsIGlzQ29tYmluaW5nRW5jbG9zaW5nS2V5Y2FwXSA6IFtpc0NvbWJpbmluZ0VuY2xvc2luZ0tleWNhcCwgaXNLZXljYXBdO1xuXG4gICAgaWYgKGlzS2V5Y2FwU3RhcnQoY29kZSkpIHtcbiAgICAgIGlmIChwcmV2ID09PSAnS0MnKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBkaXN0ICs9IGNvZGVwb2ludC5sZW5ndGg7XG4gICAgICBwcmV2ID0gJ0tDJztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChpc0tleWNhcEVuZChjb2RlKSkge1xuICAgICAgZGlzdCArPSBjb2RlcG9pbnQubGVuZ3RoO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGlzVmFyaWF0aW9uU2VsZWN0b3IoY29kZSkpIHtcbiAgICAgIGRpc3QgKz0gY29kZXBvaW50Lmxlbmd0aDtcblxuICAgICAgaWYgKGlzTFRSICYmIHByZXYgPT09ICdCTVAnKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBwcmV2ID0gJ1ZBUic7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNCTVBFbW9qaShjb2RlKSkge1xuICAgICAgaWYgKGlzTFRSICYmIHByZXYgJiYgcHJldiAhPT0gJ1pXSicgJiYgcHJldiAhPT0gJ1ZBUicpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGRpc3QgKz0gY29kZXBvaW50Lmxlbmd0aDtcblxuICAgICAgaWYgKGlzUlRMICYmIHByZXYgPT09ICdWQVInKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBwcmV2ID0gJ0JNUCc7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNNb2RpZmllcihjb2RlKSkge1xuICAgICAgZGlzdCArPSBjb2RlcG9pbnQubGVuZ3RoO1xuICAgICAgcHJldiA9ICdNT0QnO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIFtpc1RhZ1N0YXJ0LCBpc1RhZ0VuZF0gPSBpc0xUUiA/IFtpc0JsYWNrRmxhZywgaXNDYW5jZWxUYWddIDogW2lzQ2FuY2VsVGFnLCBpc0JsYWNrRmxhZ107XG5cbiAgICBpZiAoaXNUYWdTdGFydChjb2RlKSkge1xuICAgICAgaWYgKHByZXYgPT09ICdUQUcnKSBicmVhaztcbiAgICAgIGRpc3QgKz0gY29kZXBvaW50Lmxlbmd0aDtcbiAgICAgIHByZXYgPSAnVEFHJztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChpc1RhZ0VuZChjb2RlKSkge1xuICAgICAgZGlzdCArPSBjb2RlcG9pbnQubGVuZ3RoO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHByZXYgPT09ICdUQUcnICYmIGlzVGFnKGNvZGUpKSB7XG4gICAgICBkaXN0ICs9IGNvZGVwb2ludC5sZW5ndGg7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNSZWdpb25hbEluZGljYXRvcihjb2RlKSkge1xuICAgICAgZGlzdCArPSBjb2RlcG9pbnQubGVuZ3RoO1xuXG4gICAgICBpZiAocHJldiA9PT0gJ1JJJykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcHJldiA9ICdSSSc7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWlzQk1QKGNvZGUpKSB7XG4gICAgICAvLyBJZiBwcmV2aW91cyBjb2RlIHBvaW50IGlzIG5vdCBzZXF1ZW5jZWFibGUsIGl0IG1lYW5zIHdlIGFyZSBub3QgaW4gYVxuICAgICAgLy8gc2VxdWVuY2UuXG4gICAgICBpZiAocHJldiA9PT0gJ05TRVEnKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBkaXN0ICs9IGNvZGVwb2ludC5sZW5ndGg7XG4gICAgICBwcmV2ID0gJ05TRVEnO1xuICAgICAgY29udGludWU7XG4gICAgfSAvLyBNb2RpZmllciAnZ3JvdXBzIHVwJyB3aXRoIHdoYXQgZXZlciBjaGFyYWN0ZXIgaXMgYmVmb3JlIHRoYXQgKGV2ZW4gd2hpdGVzcGFjZSksIG5lZWQgdG9cbiAgICAvLyBsb29rIGFoZWFkLlxuXG5cbiAgICBpZiAoaXNMVFIgJiYgcHJldiA9PT0gJ01PRCcpIHtcbiAgICAgIGRpc3QgKz0gY29kZXBvaW50Lmxlbmd0aDtcbiAgICAgIGJyZWFrO1xuICAgIH0gLy8gSWYgd2hpbGUgbG9vcCBldmVyIGdldHMgaGVyZSwgd2UncmUgZG9uZSAoZS5nIGxhdGluIGNoYXJzKS5cblxuXG4gICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGlzdCB8fCAxO1xufTtcbi8qKlxyXG4gKiBHZXQgdGhlIGRpc3RhbmNlIHRvIHRoZSBlbmQgb2YgdGhlIGZpcnN0IHdvcmQgaW4gYSBzdHJpbmcgb2YgdGV4dC5cclxuICovXG5cbnZhciBnZXRXb3JkRGlzdGFuY2UgPSBmdW5jdGlvbiBnZXRXb3JkRGlzdGFuY2UodGV4dCkge1xuICB2YXIgaXNSVEwgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICB2YXIgZGlzdCA9IDA7XG4gIHZhciBzdGFydGVkID0gZmFsc2U7XG5cbiAgd2hpbGUgKHRleHQubGVuZ3RoID4gMCkge1xuICAgIHZhciBjaGFyRGlzdCA9IGdldENoYXJhY3RlckRpc3RhbmNlKHRleHQsIGlzUlRMKTtcbiAgICB2YXIgW2NoYXIsIHJlbWFpbmluZ10gPSBzcGxpdEJ5Q2hhcmFjdGVyRGlzdGFuY2UodGV4dCwgY2hhckRpc3QsIGlzUlRMKTtcblxuICAgIGlmIChpc1dvcmRDaGFyYWN0ZXIoY2hhciwgcmVtYWluaW5nLCBpc1JUTCkpIHtcbiAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgZGlzdCArPSBjaGFyRGlzdDtcbiAgICB9IGVsc2UgaWYgKCFzdGFydGVkKSB7XG4gICAgICBkaXN0ICs9IGNoYXJEaXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0ZXh0ID0gcmVtYWluaW5nO1xuICB9XG5cbiAgcmV0dXJuIGRpc3Q7XG59O1xuLyoqXHJcbiAqIFNwbGl0IGEgc3RyaW5nIGluIHR3byBwYXJ0cyBhdCBhIGdpdmVuIGRpc3RhbmNlIHN0YXJ0aW5nIGZyb20gdGhlIGVuZCB3aGVuXHJcbiAqIGBpc1JUTGAgaXMgc2V0IHRvIGB0cnVlYC5cclxuICovXG5cbnZhciBzcGxpdEJ5Q2hhcmFjdGVyRGlzdGFuY2UgPSAoc3RyLCBkaXN0LCBpc1JUTCkgPT4ge1xuICBpZiAoaXNSVEwpIHtcbiAgICB2YXIgYXQgPSBzdHIubGVuZ3RoIC0gZGlzdDtcbiAgICByZXR1cm4gW3N0ci5zbGljZShhdCwgc3RyLmxlbmd0aCksIHN0ci5zbGljZSgwLCBhdCldO1xuICB9XG5cbiAgcmV0dXJuIFtzdHIuc2xpY2UoMCwgZGlzdCksIHN0ci5zbGljZShkaXN0KV07XG59O1xuLyoqXHJcbiAqIENoZWNrIGlmIGEgY2hhcmFjdGVyIGlzIGEgd29yZCBjaGFyYWN0ZXIuIFRoZSBgcmVtYWluaW5nYCBhcmd1bWVudCBpcyB1c2VkXHJcbiAqIGJlY2F1c2Ugc29tZXRpbWVzIHlvdSBtdXN0IHJlYWQgc3Vic2VxdWVudCBjaGFyYWN0ZXJzIHRvIHRydWx5IGRldGVybWluZSBpdC5cclxuICovXG5cbnZhciBpc1dvcmRDaGFyYWN0ZXIgPSBmdW5jdGlvbiBpc1dvcmRDaGFyYWN0ZXIoY2hhciwgcmVtYWluaW5nKSB7XG4gIHZhciBpc1JUTCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG5cbiAgaWYgKFNQQUNFLnRlc3QoY2hhcikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gLy8gQ2hhbWVsZW9ucyBjb3VudCBhcyB3b3JkIGNoYXJhY3RlcnMgYXMgbG9uZyBhcyB0aGV5J3JlIGluIGEgd29yZCwgc29cbiAgLy8gcmVjdXJzZSB0byBzZWUgaWYgdGhlIG5leHQgb25lIGlzIGEgd29yZCBjaGFyYWN0ZXIgb3Igbm90LlxuXG5cbiAgaWYgKENIQU1FTEVPTi50ZXN0KGNoYXIpKSB7XG4gICAgdmFyIGNoYXJEaXN0ID0gZ2V0Q2hhcmFjdGVyRGlzdGFuY2UocmVtYWluaW5nLCBpc1JUTCk7XG4gICAgdmFyIFtuZXh0Q2hhciwgbmV4dFJlbWFpbmluZ10gPSBzcGxpdEJ5Q2hhcmFjdGVyRGlzdGFuY2UocmVtYWluaW5nLCBjaGFyRGlzdCwgaXNSVEwpO1xuXG4gICAgaWYgKGlzV29yZENoYXJhY3RlcihuZXh0Q2hhciwgbmV4dFJlbWFpbmluZywgaXNSVEwpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoUFVOQ1RVQVRJT04udGVzdChjaGFyKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbi8qKlxyXG4gKiBEb2VzIGBjb2RlYCBmb3JtIE1vZGlmaWVyIHdpdGggbmV4dCBvbmUuXHJcbiAqXHJcbiAqIGh0dHBzOi8vZW1vamlwZWRpYS5vcmcvbW9kaWZpZXJzL1xyXG4gKi9cblxuXG52YXIgaXNNb2RpZmllciA9IGNvZGUgPT4ge1xuICByZXR1cm4gY29kZSA+PSAweDFmM2ZiICYmIGNvZGUgPD0gMHgxZjNmZjtcbn07XG4vKipcclxuICogSXMgYGNvZGVgIGEgVmFyaWF0aW9uIFNlbGVjdG9yLlxyXG4gKlxyXG4gKiBodHRwczovL2NvZGVwb2ludHMubmV0L3ZhcmlhdGlvbl9zZWxlY3RvcnNcclxuICovXG5cblxudmFyIGlzVmFyaWF0aW9uU2VsZWN0b3IgPSBjb2RlID0+IHtcbiAgcmV0dXJuIGNvZGUgPD0gMHhmZTBmICYmIGNvZGUgPj0gMHhmZTAwO1xufTtcbi8qKlxyXG4gKiBJcyBgY29kZWAgYSBjb2RlIHBvaW50IHVzZWQgaW4ga2V5Y2FwIHNlcXVlbmNlLlxyXG4gKlxyXG4gKiBodHRwczovL2Vtb2ppcGVkaWEub3JnL2Vtb2ppLWtleWNhcC1zZXF1ZW5jZS9cclxuICovXG5cblxudmFyIGlzS2V5Y2FwID0gY29kZSA9PiB7XG4gIHJldHVybiBjb2RlID49IDB4MzAgJiYgY29kZSA8PSAweDM5IHx8IC8vIGRpZ2l0c1xuICBjb2RlID09PSAweDIzIHx8IC8vIG51bWJlciBzaWduXG4gIGNvZGUgPT09IDB4MmE7XG59O1xuLyoqXHJcbiAqIElzIGBjb2RlYCBhIENvbWJpbmluZyBFbmNsb3NpbmcgS2V5Y2FwLlxyXG4gKlxyXG4gKiBodHRwczovL2Vtb2ppcGVkaWEub3JnL2NvbWJpbmluZy1lbmNsb3Npbmcta2V5Y2FwL1xyXG4gKi9cblxuXG52YXIgaXNDb21iaW5pbmdFbmNsb3NpbmdLZXljYXAgPSBjb2RlID0+IHtcbiAgcmV0dXJuIGNvZGUgPT09IDB4MjBlMztcbn07XG4vKipcclxuICogSXMgYGNvZGVgIG9uZSBvZiB0aGUgQk1QIGNvZGVzIHVzZWQgaW4gZW1vamkgc2VxdWVuY2VzLlxyXG4gKlxyXG4gKiBodHRwczovL2Vtb2ppcGVkaWEub3JnL2Vtb2ppLXp3ai1zZXF1ZW5jZXMvXHJcbiAqL1xuXG5cbnZhciBpc0JNUEVtb2ppID0gY29kZSA9PiB7XG4gIC8vIFRoaXMgcmVxdWlyZXMgdGlueSBiaXQgb2YgbWFpbnRhbmFuY2UsIGJldHRlciBpZGVhcz9cbiAgLy8gRm9ydHVuYXRlbHkgaXQgb25seSBoYXBwZW5zIGlmIG5ldyBVbmljb2RlIFN0YW5kYXJkXG4gIC8vIGlzIHJlbGVhc2VkLiBGYWlscyBncmFjZWZ1bGx5IGlmIHVwa2VlcCBsYWdzIGJlaGluZCxcbiAgLy8gc2FtZSB3YXkgU2xhdGUgcHJldmlvdXNseSBiZWhhdmVkIHdpdGggYWxsIGVtb2ppcy5cbiAgcmV0dXJuIGNvZGUgPT09IDB4Mjc2NCB8fCAvLyBoZWFydCAo4p2kKVxuICBjb2RlID09PSAweDI2NDIgfHwgLy8gbWFsZSAo4pmCKVxuICBjb2RlID09PSAweDI2NDAgfHwgLy8gZmVtYWxlICjimYApXG4gIGNvZGUgPT09IDB4MjYyMCB8fCAvLyBzY3VsbCAo4pigKVxuICBjb2RlID09PSAweDI2OTUgfHwgLy8gbWVkaWNhbCAo4pqVKVxuICBjb2RlID09PSAweDI3MDggfHwgLy8gcGxhbmUgKOKciO+4jylcbiAgY29kZSA9PT0gMHgyNWVmIHx8IC8vIGxhcmdlIGNpcmNsZSAo4pevKVxuICBjb2RlID09PSAweDJiMDYgfHwgLy8gdXAgYXJyb3cgKOKshilcbiAgY29kZSA9PT0gMHgyMTk3IHx8IC8vIHVwLXJpZ2h0IGFycm93ICjihpcpXG4gIGNvZGUgPT09IDB4MjdhMSB8fCAvLyByaWdodCBhcnJvdyAo4p6hKVxuICBjb2RlID09PSAweDIxOTggfHwgLy8gZG93bi1yaWdodCBhcnJvdyAo4oaYKVxuICBjb2RlID09PSAweDJiMDcgfHwgLy8gZG93biBhcnJvdyAo4qyHKVxuICBjb2RlID09PSAweDIxOTkgfHwgLy8gZG93bi1sZWZ0IGFycm93ICjihpkpXG4gIGNvZGUgPT09IDB4MmIwNSB8fCAvLyBsZWZ0IGFycm93ICjirIUpXG4gIGNvZGUgPT09IDB4MjE5NiB8fCAvLyB1cC1sZWZ0IGFycm93ICjihpYpXG4gIGNvZGUgPT09IDB4MjE5NSB8fCAvLyB1cC1kb3duIGFycm93ICjihpUpXG4gIGNvZGUgPT09IDB4MjE5NCB8fCAvLyBsZWZ0LXJpZ2h0IGFycm93ICjihpQpXG4gIGNvZGUgPT09IDB4MjFhOSB8fCAvLyByaWdodCBhcnJvdyBjdXJ2aW5nIGxlZnQgKOKGqSlcbiAgY29kZSA9PT0gMHgyMWFhIHx8IC8vIGxlZnQgYXJyb3cgY3VydmluZyByaWdodCAo4oaqKVxuICBjb2RlID09PSAweDI5MzQgfHwgLy8gcmlnaHQgYXJyb3cgY3VydmluZyB1cCAo4qS0KVxuICBjb2RlID09PSAweDI5MzUgLy8gcmlnaHQgYXJyb3cgY3VydmluZyBkb3duICjipLUpXG4gIDtcbn07XG4vKipcclxuICogSXMgYGNvZGVgIGEgUmVnaW9uYWwgSW5kaWNhdG9yLlxyXG4gKlxyXG4gKiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9SZWdpb25hbF9pbmRpY2F0b3Jfc3ltYm9sXHJcbiAqL1xuXG5cbnZhciBpc1JlZ2lvbmFsSW5kaWNhdG9yID0gY29kZSA9PiB7XG4gIHJldHVybiBjb2RlID49IDB4MWYxZTYgJiYgY29kZSA8PSAweDFmMWZmO1xufTtcbi8qKlxyXG4gKiBJcyBgY29kZWAgZnJvbSBiYXNpYyBtdWx0aWxpbmd1YWwgcGxhbmUuXHJcbiAqXHJcbiAqIGh0dHBzOi8vY29kZXBvaW50cy5uZXQvYmFzaWNfbXVsdGlsaW5ndWFsX3BsYW5lXHJcbiAqL1xuXG5cbnZhciBpc0JNUCA9IGNvZGUgPT4ge1xuICByZXR1cm4gY29kZSA8PSAweGZmZmY7XG59O1xuLyoqXHJcbiAqIElzIGBjb2RlYCBhIFplcm8gV2lkdGggSm9pbmVyLlxyXG4gKlxyXG4gKiBodHRwczovL2Vtb2ppcGVkaWEub3JnL3plcm8td2lkdGgtam9pbmVyL1xyXG4gKi9cblxuXG52YXIgaXNaV0ogPSBjb2RlID0+IHtcbiAgcmV0dXJuIGNvZGUgPT09IDB4MjAwZDtcbn07XG4vKipcclxuICogSXMgYGNvZGVgIGEgQmxhY2sgRmxhZy5cclxuICpcclxuICogaHR0cHM6Ly9lbW9qaXBlZGlhLm9yZy9ibGFjay1mbGFnL1xyXG4gKi9cblxuXG52YXIgaXNCbGFja0ZsYWcgPSBjb2RlID0+IHtcbiAgcmV0dXJuIGNvZGUgPT09IDB4MWYzZjQ7XG59O1xuLyoqXHJcbiAqIElzIGBjb2RlYCBhIFRhZy5cclxuICpcclxuICogaHR0cHM6Ly9lbW9qaXBlZGlhLm9yZy9lbW9qaS10YWctc2VxdWVuY2UvXHJcbiAqL1xuXG5cbnZhciBpc1RhZyA9IGNvZGUgPT4ge1xuICByZXR1cm4gY29kZSA+PSAweGUwMDAwICYmIGNvZGUgPD0gMHhlMDA3Zjtcbn07XG4vKipcclxuICogSXMgYGNvZGVgIGEgQ2FuY2VsIFRhZy5cclxuICpcclxuICogaHR0cHM6Ly9lbW9qaXBlZGlhLm9yZy9jYW5jZWwtdGFnL1xyXG4gKi9cblxuXG52YXIgaXNDYW5jZWxUYWcgPSBjb2RlID0+IHtcbiAgcmV0dXJuIGNvZGUgPT09IDB4ZTAwN2Y7XG59O1xuLyoqXHJcbiAqIEl0ZXJhdGUgb24gY29kZXBvaW50cyBmcm9tIHJpZ2h0IHRvIGxlZnQuXHJcbiAqL1xuXG5cbnZhciBjb2RlcG9pbnRzSXRlcmF0b3JSVEwgPSBmdW5jdGlvbiogY29kZXBvaW50c0l0ZXJhdG9yUlRMKHN0cikge1xuICB2YXIgZW5kID0gc3RyLmxlbmd0aCAtIDE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgY2hhcjEgPSBzdHIuY2hhckF0KGVuZCAtIGkpO1xuXG4gICAgaWYgKGlzTG93U3Vycm9nYXRlKGNoYXIxLmNoYXJDb2RlQXQoMCkpKSB7XG4gICAgICB2YXIgY2hhcjIgPSBzdHIuY2hhckF0KGVuZCAtIGkgLSAxKTtcblxuICAgICAgaWYgKGlzSGlnaFN1cnJvZ2F0ZShjaGFyMi5jaGFyQ29kZUF0KDApKSkge1xuICAgICAgICB5aWVsZCBjaGFyMiArIGNoYXIxO1xuICAgICAgICBpKys7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHlpZWxkIGNoYXIxO1xuICB9XG59O1xuLyoqXHJcbiAqIElzIGBjaGFyQ29kZWAgYSBoaWdoIHN1cnJvZ2F0ZS5cclxuICpcclxuICogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW5pdmVyc2FsX0NoYXJhY3Rlcl9TZXRfY2hhcmFjdGVycyNTdXJyb2dhdGVzXHJcbiAqL1xuXG52YXIgaXNIaWdoU3Vycm9nYXRlID0gY2hhckNvZGUgPT4ge1xuICByZXR1cm4gY2hhckNvZGUgPj0gMHhkODAwICYmIGNoYXJDb2RlIDw9IDB4ZGJmZjtcbn07XG4vKipcclxuICogSXMgYGNoYXJDb2RlYCBhIGxvdyBzdXJyb2dhdGUuXHJcbiAqXHJcbiAqIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VuaXZlcnNhbF9DaGFyYWN0ZXJfU2V0X2NoYXJhY3RlcnMjU3Vycm9nYXRlc1xyXG4gKi9cblxuXG52YXIgaXNMb3dTdXJyb2dhdGUgPSBjaGFyQ29kZSA9PiB7XG4gIHJldHVybiBjaGFyQ29kZSA+PSAweGRjMDAgJiYgY2hhckNvZGUgPD0gMHhkZmZmO1xufTtcblxuLyoqXHJcbiAqIFNoYXJlZCB0aGUgZnVuY3Rpb24gd2l0aCBpc0VsZW1lbnRUeXBlIHV0aWxpdHlcclxuICovXG5cbnZhciBpc0VsZW1lbnQgPSB2YWx1ZSA9PiB7XG4gIHJldHVybiBpc1BsYWluT2JqZWN0KHZhbHVlKSAmJiBOb2RlLmlzTm9kZUxpc3QodmFsdWUuY2hpbGRyZW4pICYmICFFZGl0b3IuaXNFZGl0b3IodmFsdWUpO1xufTtcblxudmFyIEVsZW1lbnQgPSB7XG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaW1wbGVtZW50cyB0aGUgJ0FuY2VzdG9yJyBpbnRlcmZhY2UuXHJcbiAgICovXG4gIGlzQW5jZXN0b3IodmFsdWUpIHtcbiAgICByZXR1cm4gaXNQbGFpbk9iamVjdCh2YWx1ZSkgJiYgTm9kZS5pc05vZGVMaXN0KHZhbHVlLmNoaWxkcmVuKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGltcGxlbWVudHMgdGhlIGBFbGVtZW50YCBpbnRlcmZhY2UuXHJcbiAgICovXG4gIGlzRWxlbWVudCxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGlzIGFuIGFycmF5IG9mIGBFbGVtZW50YCBvYmplY3RzLlxyXG4gICAqL1xuICBpc0VsZW1lbnRMaXN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmV2ZXJ5KHZhbCA9PiBFbGVtZW50LmlzRWxlbWVudCh2YWwpKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHNldCBvZiBwcm9wcyBpcyBhIHBhcnRpYWwgb2YgRWxlbWVudC5cclxuICAgKi9cbiAgaXNFbGVtZW50UHJvcHMocHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMuY2hpbGRyZW4gIT09IHVuZGVmaW5lZDtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGltcGxlbWVudHMgdGhlIGBFbGVtZW50YCBpbnRlcmZhY2UgYW5kIGhhcyBlbGVtZW50S2V5IHdpdGggc2VsZWN0ZWQgdmFsdWUuXHJcbiAgICogRGVmYXVsdCBpdCBjaGVjayB0byBgdHlwZWAga2V5IHZhbHVlXHJcbiAgICovXG4gIGlzRWxlbWVudFR5cGU6IGZ1bmN0aW9uIGlzRWxlbWVudFR5cGUodmFsdWUsIGVsZW1lbnRWYWwpIHtcbiAgICB2YXIgZWxlbWVudEtleSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogJ3R5cGUnO1xuICAgIHJldHVybiBpc0VsZW1lbnQodmFsdWUpICYmIHZhbHVlW2VsZW1lbnRLZXldID09PSBlbGVtZW50VmFsO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGFuIGVsZW1lbnQgbWF0Y2hlcyBzZXQgb2YgcHJvcGVydGllcy5cclxuICAgKlxyXG4gICAqIE5vdGU6IHRoaXMgY2hlY2tzIGN1c3RvbSBwcm9wZXJ0aWVzLCBhbmQgaXQgZG9lcyBub3QgZW5zdXJlIHRoYXQgYW55XHJcbiAgICogY2hpbGRyZW4gYXJlIGVxdWl2YWxlbnQuXHJcbiAgICovXG4gIG1hdGNoZXMoZWxlbWVudCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdjaGlsZHJlbicpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50W2tleV0gIT09IHByb3BzW2tleV0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbn07XG5cbnZhciBfZXhjbHVkZWQkNCA9IFtcInRleHRcIl0sXG4gICAgX2V4Y2x1ZGVkMiQzID0gW1widGV4dFwiXTtcblxuZnVuY3Rpb24gb3duS2V5cyQ4KG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSB7IHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsgfSBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQ4KHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMkOChPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzJDgoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG52YXIgSVNfRURJVE9SX0NBQ0hFID0gbmV3IFdlYWtNYXAoKTtcbnZhciBFZGl0b3IgPSB7XG4gIC8qKlxyXG4gICAqIEdldCB0aGUgYW5jZXN0b3IgYWJvdmUgYSBsb2NhdGlvbiBpbiB0aGUgZG9jdW1lbnQuXHJcbiAgICovXG4gIGFib3ZlKGVkaXRvcikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIge1xuICAgICAgdm9pZHMgPSBmYWxzZSxcbiAgICAgIG1vZGUgPSAnbG93ZXN0JyxcbiAgICAgIGF0ID0gZWRpdG9yLnNlbGVjdGlvbixcbiAgICAgIG1hdGNoXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICBpZiAoIWF0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBhdGggPSBFZGl0b3IucGF0aChlZGl0b3IsIGF0KTtcbiAgICB2YXIgcmV2ZXJzZSA9IG1vZGUgPT09ICdsb3dlc3QnO1xuXG4gICAgZm9yICh2YXIgW24sIHBdIG9mIEVkaXRvci5sZXZlbHMoZWRpdG9yLCB7XG4gICAgICBhdDogcGF0aCxcbiAgICAgIHZvaWRzLFxuICAgICAgbWF0Y2gsXG4gICAgICByZXZlcnNlXG4gICAgfSkpIHtcbiAgICAgIGlmICghVGV4dC5pc1RleHQobikgJiYgIVBhdGguZXF1YWxzKHBhdGgsIHApKSB7XG4gICAgICAgIHJldHVybiBbbiwgcF07XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxyXG4gICAqIEFkZCBhIGN1c3RvbSBwcm9wZXJ0eSB0byB0aGUgbGVhZiB0ZXh0IG5vZGVzIGluIHRoZSBjdXJyZW50IHNlbGVjdGlvbi5cclxuICAgKlxyXG4gICAqIElmIHRoZSBzZWxlY3Rpb24gaXMgY3VycmVudGx5IGNvbGxhcHNlZCwgdGhlIG1hcmtzIHdpbGwgYmUgYWRkZWQgdG8gdGhlXHJcbiAgICogYGVkaXRvci5tYXJrc2AgcHJvcGVydHkgaW5zdGVhZCwgYW5kIGFwcGxpZWQgd2hlbiB0ZXh0IGlzIGluc2VydGVkIG5leHQuXHJcbiAgICovXG4gIGFkZE1hcmsoZWRpdG9yLCBrZXksIHZhbHVlKSB7XG4gICAgZWRpdG9yLmFkZE1hcmsoa2V5LCB2YWx1ZSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBwb2ludCBhZnRlciBhIGxvY2F0aW9uLlxyXG4gICAqL1xuICBhZnRlcihlZGl0b3IsIGF0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIHZhciBhbmNob3IgPSBFZGl0b3IucG9pbnQoZWRpdG9yLCBhdCwge1xuICAgICAgZWRnZTogJ2VuZCdcbiAgICB9KTtcbiAgICB2YXIgZm9jdXMgPSBFZGl0b3IuZW5kKGVkaXRvciwgW10pO1xuICAgIHZhciByYW5nZSA9IHtcbiAgICAgIGFuY2hvcixcbiAgICAgIGZvY3VzXG4gICAgfTtcbiAgICB2YXIge1xuICAgICAgZGlzdGFuY2UgPSAxXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgdmFyIGQgPSAwO1xuICAgIHZhciB0YXJnZXQ7XG5cbiAgICBmb3IgKHZhciBwIG9mIEVkaXRvci5wb3NpdGlvbnMoZWRpdG9yLCBfb2JqZWN0U3ByZWFkJDgoX29iamVjdFNwcmVhZCQ4KHt9LCBvcHRpb25zKSwge30sIHtcbiAgICAgIGF0OiByYW5nZVxuICAgIH0pKSkge1xuICAgICAgaWYgKGQgPiBkaXN0YW5jZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKGQgIT09IDApIHtcbiAgICAgICAgdGFyZ2V0ID0gcDtcbiAgICAgIH1cblxuICAgICAgZCsrO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBwb2ludCBiZWZvcmUgYSBsb2NhdGlvbi5cclxuICAgKi9cbiAgYmVmb3JlKGVkaXRvciwgYXQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIGFuY2hvciA9IEVkaXRvci5zdGFydChlZGl0b3IsIFtdKTtcbiAgICB2YXIgZm9jdXMgPSBFZGl0b3IucG9pbnQoZWRpdG9yLCBhdCwge1xuICAgICAgZWRnZTogJ3N0YXJ0J1xuICAgIH0pO1xuICAgIHZhciByYW5nZSA9IHtcbiAgICAgIGFuY2hvcixcbiAgICAgIGZvY3VzXG4gICAgfTtcbiAgICB2YXIge1xuICAgICAgZGlzdGFuY2UgPSAxXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgdmFyIGQgPSAwO1xuICAgIHZhciB0YXJnZXQ7XG5cbiAgICBmb3IgKHZhciBwIG9mIEVkaXRvci5wb3NpdGlvbnMoZWRpdG9yLCBfb2JqZWN0U3ByZWFkJDgoX29iamVjdFNwcmVhZCQ4KHt9LCBvcHRpb25zKSwge30sIHtcbiAgICAgIGF0OiByYW5nZSxcbiAgICAgIHJldmVyc2U6IHRydWVcbiAgICB9KSkpIHtcbiAgICAgIGlmIChkID4gZGlzdGFuY2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChkICE9PSAwKSB7XG4gICAgICAgIHRhcmdldCA9IHA7XG4gICAgICB9XG5cbiAgICAgIGQrKztcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIERlbGV0ZSBjb250ZW50IGluIHRoZSBlZGl0b3IgYmFja3dhcmQgZnJvbSB0aGUgY3VycmVudCBzZWxlY3Rpb24uXHJcbiAgICovXG4gIGRlbGV0ZUJhY2t3YXJkKGVkaXRvcikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIge1xuICAgICAgdW5pdCA9ICdjaGFyYWN0ZXInXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgZWRpdG9yLmRlbGV0ZUJhY2t3YXJkKHVuaXQpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIERlbGV0ZSBjb250ZW50IGluIHRoZSBlZGl0b3IgZm9yd2FyZCBmcm9tIHRoZSBjdXJyZW50IHNlbGVjdGlvbi5cclxuICAgKi9cbiAgZGVsZXRlRm9yd2FyZChlZGl0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHtcbiAgICAgIHVuaXQgPSAnY2hhcmFjdGVyJ1xuICAgIH0gPSBvcHRpb25zO1xuICAgIGVkaXRvci5kZWxldGVGb3J3YXJkKHVuaXQpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIERlbGV0ZSB0aGUgY29udGVudCBpbiB0aGUgY3VycmVudCBzZWxlY3Rpb24uXHJcbiAgICovXG4gIGRlbGV0ZUZyYWdtZW50KGVkaXRvcikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIge1xuICAgICAgZGlyZWN0aW9uID0gJ2ZvcndhcmQnXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgZWRpdG9yLmRlbGV0ZUZyYWdtZW50KGRpcmVjdGlvbik7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBzdGFydCBhbmQgZW5kIHBvaW50cyBvZiBhIGxvY2F0aW9uLlxyXG4gICAqL1xuICBlZGdlcyhlZGl0b3IsIGF0KSB7XG4gICAgcmV0dXJuIFtFZGl0b3Iuc3RhcnQoZWRpdG9yLCBhdCksIEVkaXRvci5lbmQoZWRpdG9yLCBhdCldO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgZW5kIHBvaW50IG9mIGEgbG9jYXRpb24uXHJcbiAgICovXG4gIGVuZChlZGl0b3IsIGF0KSB7XG4gICAgcmV0dXJuIEVkaXRvci5wb2ludChlZGl0b3IsIGF0LCB7XG4gICAgICBlZGdlOiAnZW5kJ1xuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgZmlyc3Qgbm9kZSBhdCBhIGxvY2F0aW9uLlxyXG4gICAqL1xuICBmaXJzdChlZGl0b3IsIGF0KSB7XG4gICAgdmFyIHBhdGggPSBFZGl0b3IucGF0aChlZGl0b3IsIGF0LCB7XG4gICAgICBlZGdlOiAnc3RhcnQnXG4gICAgfSk7XG4gICAgcmV0dXJuIEVkaXRvci5ub2RlKGVkaXRvciwgcGF0aCk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBmcmFnbWVudCBhdCBhIGxvY2F0aW9uLlxyXG4gICAqL1xuICBmcmFnbWVudChlZGl0b3IsIGF0KSB7XG4gICAgdmFyIHJhbmdlID0gRWRpdG9yLnJhbmdlKGVkaXRvciwgYXQpO1xuICAgIHZhciBmcmFnbWVudCA9IE5vZGUuZnJhZ21lbnQoZWRpdG9yLCByYW5nZSk7XG4gICAgcmV0dXJuIGZyYWdtZW50O1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgbm9kZSBoYXMgYmxvY2sgY2hpbGRyZW4uXHJcbiAgICovXG4gIGhhc0Jsb2NrcyhlZGl0b3IsIGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5jaGlsZHJlbi5zb21lKG4gPT4gRWRpdG9yLmlzQmxvY2soZWRpdG9yLCBuKSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBub2RlIGhhcyBpbmxpbmUgYW5kIHRleHQgY2hpbGRyZW4uXHJcbiAgICovXG4gIGhhc0lubGluZXMoZWRpdG9yLCBlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuY2hpbGRyZW4uc29tZShuID0+IFRleHQuaXNUZXh0KG4pIHx8IEVkaXRvci5pc0lubGluZShlZGl0b3IsIG4pKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIG5vZGUgaGFzIHRleHQgY2hpbGRyZW4uXHJcbiAgICovXG4gIGhhc1RleHRzKGVkaXRvciwgZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmNoaWxkcmVuLmV2ZXJ5KG4gPT4gVGV4dC5pc1RleHQobikpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEluc2VydCBhIGJsb2NrIGJyZWFrIGF0IHRoZSBjdXJyZW50IHNlbGVjdGlvbi5cclxuICAgKlxyXG4gICAqIElmIHRoZSBzZWxlY3Rpb24gaXMgY3VycmVudGx5IGV4cGFuZGVkLCBpdCB3aWxsIGJlIGRlbGV0ZWQgZmlyc3QuXHJcbiAgICovXG4gIGluc2VydEJyZWFrKGVkaXRvcikge1xuICAgIGVkaXRvci5pbnNlcnRCcmVhaygpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEluc2VydCBhIGZyYWdtZW50IGF0IHRoZSBjdXJyZW50IHNlbGVjdGlvbi5cclxuICAgKlxyXG4gICAqIElmIHRoZSBzZWxlY3Rpb24gaXMgY3VycmVudGx5IGV4cGFuZGVkLCBpdCB3aWxsIGJlIGRlbGV0ZWQgZmlyc3QuXHJcbiAgICovXG4gIGluc2VydEZyYWdtZW50KGVkaXRvciwgZnJhZ21lbnQpIHtcbiAgICBlZGl0b3IuaW5zZXJ0RnJhZ21lbnQoZnJhZ21lbnQpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEluc2VydCBhIG5vZGUgYXQgdGhlIGN1cnJlbnQgc2VsZWN0aW9uLlxyXG4gICAqXHJcbiAgICogSWYgdGhlIHNlbGVjdGlvbiBpcyBjdXJyZW50bHkgZXhwYW5kZWQsIGl0IHdpbGwgYmUgZGVsZXRlZCBmaXJzdC5cclxuICAgKi9cbiAgaW5zZXJ0Tm9kZShlZGl0b3IsIG5vZGUpIHtcbiAgICBlZGl0b3IuaW5zZXJ0Tm9kZShub2RlKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBJbnNlcnQgdGV4dCBhdCB0aGUgY3VycmVudCBzZWxlY3Rpb24uXHJcbiAgICpcclxuICAgKiBJZiB0aGUgc2VsZWN0aW9uIGlzIGN1cnJlbnRseSBleHBhbmRlZCwgaXQgd2lsbCBiZSBkZWxldGVkIGZpcnN0LlxyXG4gICAqL1xuICBpbnNlcnRUZXh0KGVkaXRvciwgdGV4dCkge1xuICAgIGVkaXRvci5pbnNlcnRUZXh0KHRleHQpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYSBibG9jayBgRWxlbWVudGAgb2JqZWN0LlxyXG4gICAqL1xuICBpc0Jsb2NrKGVkaXRvciwgdmFsdWUpIHtcbiAgICByZXR1cm4gRWxlbWVudC5pc0VsZW1lbnQodmFsdWUpICYmICFlZGl0b3IuaXNJbmxpbmUodmFsdWUpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYW4gYEVkaXRvcmAgb2JqZWN0LlxyXG4gICAqL1xuICBpc0VkaXRvcih2YWx1ZSkge1xuICAgIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgY2FjaGVkSXNFZGl0b3IgPSBJU19FRElUT1JfQ0FDSEUuZ2V0KHZhbHVlKTtcblxuICAgIGlmIChjYWNoZWRJc0VkaXRvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gY2FjaGVkSXNFZGl0b3I7XG4gICAgfVxuXG4gICAgdmFyIGlzRWRpdG9yID0gdHlwZW9mIHZhbHVlLmFkZE1hcmsgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlLmFwcGx5ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZS5kZWxldGVCYWNrd2FyZCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUuZGVsZXRlRm9yd2FyZCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUuZGVsZXRlRnJhZ21lbnQgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlLmluc2VydEJyZWFrID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZS5pbnNlcnRGcmFnbWVudCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUuaW5zZXJ0Tm9kZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUuaW5zZXJ0VGV4dCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUuaXNJbmxpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlLmlzVm9pZCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUubm9ybWFsaXplTm9kZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUub25DaGFuZ2UgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlLnJlbW92ZU1hcmsgPT09ICdmdW5jdGlvbicgJiYgKHZhbHVlLm1hcmtzID09PSBudWxsIHx8IGlzUGxhaW5PYmplY3QodmFsdWUubWFya3MpKSAmJiAodmFsdWUuc2VsZWN0aW9uID09PSBudWxsIHx8IFJhbmdlLmlzUmFuZ2UodmFsdWUuc2VsZWN0aW9uKSkgJiYgTm9kZS5pc05vZGVMaXN0KHZhbHVlLmNoaWxkcmVuKSAmJiBPcGVyYXRpb24uaXNPcGVyYXRpb25MaXN0KHZhbHVlLm9wZXJhdGlvbnMpO1xuICAgIElTX0VESVRPUl9DQUNIRS5zZXQodmFsdWUsIGlzRWRpdG9yKTtcbiAgICByZXR1cm4gaXNFZGl0b3I7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBwb2ludCBpcyB0aGUgZW5kIHBvaW50IG9mIGEgbG9jYXRpb24uXHJcbiAgICovXG4gIGlzRW5kKGVkaXRvciwgcG9pbnQsIGF0KSB7XG4gICAgdmFyIGVuZCA9IEVkaXRvci5lbmQoZWRpdG9yLCBhdCk7XG4gICAgcmV0dXJuIFBvaW50LmVxdWFscyhwb2ludCwgZW5kKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHBvaW50IGlzIGFuIGVkZ2Ugb2YgYSBsb2NhdGlvbi5cclxuICAgKi9cbiAgaXNFZGdlKGVkaXRvciwgcG9pbnQsIGF0KSB7XG4gICAgcmV0dXJuIEVkaXRvci5pc1N0YXJ0KGVkaXRvciwgcG9pbnQsIGF0KSB8fCBFZGl0b3IuaXNFbmQoZWRpdG9yLCBwb2ludCwgYXQpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGFuIGVsZW1lbnQgaXMgZW1wdHksIGFjY291bnRpbmcgZm9yIHZvaWQgbm9kZXMuXHJcbiAgICovXG4gIGlzRW1wdHkoZWRpdG9yLCBlbGVtZW50KSB7XG4gICAgdmFyIHtcbiAgICAgIGNoaWxkcmVuXG4gICAgfSA9IGVsZW1lbnQ7XG4gICAgdmFyIFtmaXJzdF0gPSBjaGlsZHJlbjtcbiAgICByZXR1cm4gY2hpbGRyZW4ubGVuZ3RoID09PSAwIHx8IGNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJiBUZXh0LmlzVGV4dChmaXJzdCkgJiYgZmlyc3QudGV4dCA9PT0gJycgJiYgIWVkaXRvci5pc1ZvaWQoZWxlbWVudCk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhbiBpbmxpbmUgYEVsZW1lbnRgIG9iamVjdC5cclxuICAgKi9cbiAgaXNJbmxpbmUoZWRpdG9yLCB2YWx1ZSkge1xuICAgIHJldHVybiBFbGVtZW50LmlzRWxlbWVudCh2YWx1ZSkgJiYgZWRpdG9yLmlzSW5saW5lKHZhbHVlKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiB0aGUgZWRpdG9yIGlzIGN1cnJlbnRseSBub3JtYWxpemluZyBhZnRlciBlYWNoIG9wZXJhdGlvbi5cclxuICAgKi9cbiAgaXNOb3JtYWxpemluZyhlZGl0b3IpIHtcbiAgICB2YXIgaXNOb3JtYWxpemluZyA9IE5PUk1BTElaSU5HLmdldChlZGl0b3IpO1xuICAgIHJldHVybiBpc05vcm1hbGl6aW5nID09PSB1bmRlZmluZWQgPyB0cnVlIDogaXNOb3JtYWxpemluZztcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHBvaW50IGlzIHRoZSBzdGFydCBwb2ludCBvZiBhIGxvY2F0aW9uLlxyXG4gICAqL1xuICBpc1N0YXJ0KGVkaXRvciwgcG9pbnQsIGF0KSB7XG4gICAgLy8gUEVSRjogSWYgdGhlIG9mZnNldCBpc24ndCBgMGAgd2Uga25vdyBpdCdzIG5vdCB0aGUgc3RhcnQuXG4gICAgaWYgKHBvaW50Lm9mZnNldCAhPT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBzdGFydCA9IEVkaXRvci5zdGFydChlZGl0b3IsIGF0KTtcbiAgICByZXR1cm4gUG9pbnQuZXF1YWxzKHBvaW50LCBzdGFydCk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhIHZvaWQgYEVsZW1lbnRgIG9iamVjdC5cclxuICAgKi9cbiAgaXNWb2lkKGVkaXRvciwgdmFsdWUpIHtcbiAgICByZXR1cm4gRWxlbWVudC5pc0VsZW1lbnQodmFsdWUpICYmIGVkaXRvci5pc1ZvaWQodmFsdWUpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgbGFzdCBub2RlIGF0IGEgbG9jYXRpb24uXHJcbiAgICovXG4gIGxhc3QoZWRpdG9yLCBhdCkge1xuICAgIHZhciBwYXRoID0gRWRpdG9yLnBhdGgoZWRpdG9yLCBhdCwge1xuICAgICAgZWRnZTogJ2VuZCdcbiAgICB9KTtcbiAgICByZXR1cm4gRWRpdG9yLm5vZGUoZWRpdG9yLCBwYXRoKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIGxlYWYgdGV4dCBub2RlIGF0IGEgbG9jYXRpb24uXHJcbiAgICovXG4gIGxlYWYoZWRpdG9yLCBhdCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICB2YXIgcGF0aCA9IEVkaXRvci5wYXRoKGVkaXRvciwgYXQsIG9wdGlvbnMpO1xuICAgIHZhciBub2RlID0gTm9kZS5sZWFmKGVkaXRvciwgcGF0aCk7XG4gICAgcmV0dXJuIFtub2RlLCBwYXRoXTtcbiAgfSxcblxuICAvKipcclxuICAgKiBJdGVyYXRlIHRocm91Z2ggYWxsIG9mIHRoZSBsZXZlbHMgYXQgYSBsb2NhdGlvbi5cclxuICAgKi9cbiAgKmxldmVscyhlZGl0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHtcbiAgICAgIGF0ID0gZWRpdG9yLnNlbGVjdGlvbixcbiAgICAgIHJldmVyc2UgPSBmYWxzZSxcbiAgICAgIHZvaWRzID0gZmFsc2VcbiAgICB9ID0gb3B0aW9ucztcbiAgICB2YXIge1xuICAgICAgbWF0Y2hcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIGlmIChtYXRjaCA9PSBudWxsKSB7XG4gICAgICBtYXRjaCA9ICgpID0+IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFhdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBsZXZlbHMgPSBbXTtcbiAgICB2YXIgcGF0aCA9IEVkaXRvci5wYXRoKGVkaXRvciwgYXQpO1xuXG4gICAgZm9yICh2YXIgW24sIHBdIG9mIE5vZGUubGV2ZWxzKGVkaXRvciwgcGF0aCkpIHtcbiAgICAgIGlmICghbWF0Y2gobiwgcCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxldmVscy5wdXNoKFtuLCBwXSk7XG5cbiAgICAgIGlmICghdm9pZHMgJiYgRWRpdG9yLmlzVm9pZChlZGl0b3IsIG4pKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICBsZXZlbHMucmV2ZXJzZSgpO1xuICAgIH1cblxuICAgIHlpZWxkKiBsZXZlbHM7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBtYXJrcyB0aGF0IHdvdWxkIGJlIGFkZGVkIHRvIHRleHQgYXQgdGhlIGN1cnJlbnQgc2VsZWN0aW9uLlxyXG4gICAqL1xuICBtYXJrcyhlZGl0b3IpIHtcbiAgICB2YXIge1xuICAgICAgbWFya3MsXG4gICAgICBzZWxlY3Rpb25cbiAgICB9ID0gZWRpdG9yO1xuXG4gICAgaWYgKCFzZWxlY3Rpb24pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChtYXJrcykge1xuICAgICAgcmV0dXJuIG1hcmtzO1xuICAgIH1cblxuICAgIGlmIChSYW5nZS5pc0V4cGFuZGVkKHNlbGVjdGlvbikpIHtcbiAgICAgIHZhciBbbWF0Y2hdID0gRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgICBtYXRjaDogVGV4dC5pc1RleHRcbiAgICAgIH0pO1xuXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdmFyIFtfbm9kZV0gPSBtYXRjaDtcblxuICAgICAgICB2YXIgX3Jlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX25vZGUsIF9leGNsdWRlZCQ0KTtcblxuICAgICAgICByZXR1cm4gX3Jlc3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHtcbiAgICAgIGFuY2hvclxuICAgIH0gPSBzZWxlY3Rpb247XG4gICAgdmFyIHtcbiAgICAgIHBhdGhcbiAgICB9ID0gYW5jaG9yO1xuICAgIHZhciBbbm9kZV0gPSBFZGl0b3IubGVhZihlZGl0b3IsIHBhdGgpO1xuXG4gICAgaWYgKGFuY2hvci5vZmZzZXQgPT09IDApIHtcbiAgICAgIHZhciBwcmV2ID0gRWRpdG9yLnByZXZpb3VzKGVkaXRvciwge1xuICAgICAgICBhdDogcGF0aCxcbiAgICAgICAgbWF0Y2g6IFRleHQuaXNUZXh0XG4gICAgICB9KTtcbiAgICAgIHZhciBibG9jayA9IEVkaXRvci5hYm92ZShlZGl0b3IsIHtcbiAgICAgICAgbWF0Y2g6IG4gPT4gRWRpdG9yLmlzQmxvY2soZWRpdG9yLCBuKVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChwcmV2ICYmIGJsb2NrKSB7XG4gICAgICAgIHZhciBbcHJldk5vZGUsIHByZXZQYXRoXSA9IHByZXY7XG4gICAgICAgIHZhciBbLCBibG9ja1BhdGhdID0gYmxvY2s7XG5cbiAgICAgICAgaWYgKFBhdGguaXNBbmNlc3RvcihibG9ja1BhdGgsIHByZXZQYXRoKSkge1xuICAgICAgICAgIG5vZGUgPSBwcmV2Tm9kZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG5vZGUsIF9leGNsdWRlZDIkMyk7XG5cbiAgICByZXR1cm4gcmVzdDtcbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIG1hdGNoaW5nIG5vZGUgaW4gdGhlIGJyYW5jaCBvZiB0aGUgZG9jdW1lbnQgYWZ0ZXIgYSBsb2NhdGlvbi5cclxuICAgKi9cbiAgbmV4dChlZGl0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHtcbiAgICAgIG1vZGUgPSAnbG93ZXN0JyxcbiAgICAgIHZvaWRzID0gZmFsc2VcbiAgICB9ID0gb3B0aW9ucztcbiAgICB2YXIge1xuICAgICAgbWF0Y2gsXG4gICAgICBhdCA9IGVkaXRvci5zZWxlY3Rpb25cbiAgICB9ID0gb3B0aW9ucztcblxuICAgIGlmICghYXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcG9pbnRBZnRlckxvY2F0aW9uID0gRWRpdG9yLmFmdGVyKGVkaXRvciwgYXQsIHtcbiAgICAgIHZvaWRzXG4gICAgfSk7XG4gICAgaWYgKCFwb2ludEFmdGVyTG9jYXRpb24pIHJldHVybjtcbiAgICB2YXIgWywgdG9dID0gRWRpdG9yLmxhc3QoZWRpdG9yLCBbXSk7XG4gICAgdmFyIHNwYW4gPSBbcG9pbnRBZnRlckxvY2F0aW9uLnBhdGgsIHRvXTtcblxuICAgIGlmIChQYXRoLmlzUGF0aChhdCkgJiYgYXQubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZ2V0IHRoZSBuZXh0IG5vZGUgZnJvbSB0aGUgcm9vdCBub2RlIVwiKTtcbiAgICB9XG5cbiAgICBpZiAobWF0Y2ggPT0gbnVsbCkge1xuICAgICAgaWYgKFBhdGguaXNQYXRoKGF0KSkge1xuICAgICAgICB2YXIgW3BhcmVudF0gPSBFZGl0b3IucGFyZW50KGVkaXRvciwgYXQpO1xuXG4gICAgICAgIG1hdGNoID0gbiA9PiBwYXJlbnQuY2hpbGRyZW4uaW5jbHVkZXMobik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXRjaCA9ICgpID0+IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIFtuZXh0XSA9IEVkaXRvci5ub2RlcyhlZGl0b3IsIHtcbiAgICAgIGF0OiBzcGFuLFxuICAgICAgbWF0Y2gsXG4gICAgICBtb2RlLFxuICAgICAgdm9pZHNcbiAgICB9KTtcbiAgICByZXR1cm4gbmV4dDtcbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIG5vZGUgYXQgYSBsb2NhdGlvbi5cclxuICAgKi9cbiAgbm9kZShlZGl0b3IsIGF0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIHZhciBwYXRoID0gRWRpdG9yLnBhdGgoZWRpdG9yLCBhdCwgb3B0aW9ucyk7XG4gICAgdmFyIG5vZGUgPSBOb2RlLmdldChlZGl0b3IsIHBhdGgpO1xuICAgIHJldHVybiBbbm9kZSwgcGF0aF07XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogSXRlcmF0ZSB0aHJvdWdoIGFsbCBvZiB0aGUgbm9kZXMgaW4gdGhlIEVkaXRvci5cclxuICAgKi9cbiAgKm5vZGVzKGVkaXRvcikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIge1xuICAgICAgYXQgPSBlZGl0b3Iuc2VsZWN0aW9uLFxuICAgICAgbW9kZSA9ICdhbGwnLFxuICAgICAgdW5pdmVyc2FsID0gZmFsc2UsXG4gICAgICByZXZlcnNlID0gZmFsc2UsXG4gICAgICB2b2lkcyA9IGZhbHNlXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgdmFyIHtcbiAgICAgIG1hdGNoXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICBpZiAoIW1hdGNoKSB7XG4gICAgICBtYXRjaCA9ICgpID0+IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFhdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBmcm9tO1xuICAgIHZhciB0bztcblxuICAgIGlmIChTcGFuLmlzU3BhbihhdCkpIHtcbiAgICAgIGZyb20gPSBhdFswXTtcbiAgICAgIHRvID0gYXRbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBmaXJzdCA9IEVkaXRvci5wYXRoKGVkaXRvciwgYXQsIHtcbiAgICAgICAgZWRnZTogJ3N0YXJ0J1xuICAgICAgfSk7XG4gICAgICB2YXIgbGFzdCA9IEVkaXRvci5wYXRoKGVkaXRvciwgYXQsIHtcbiAgICAgICAgZWRnZTogJ2VuZCdcbiAgICAgIH0pO1xuICAgICAgZnJvbSA9IHJldmVyc2UgPyBsYXN0IDogZmlyc3Q7XG4gICAgICB0byA9IHJldmVyc2UgPyBmaXJzdCA6IGxhc3Q7XG4gICAgfVxuXG4gICAgdmFyIG5vZGVFbnRyaWVzID0gTm9kZS5ub2RlcyhlZGl0b3IsIHtcbiAgICAgIHJldmVyc2UsXG4gICAgICBmcm9tLFxuICAgICAgdG8sXG4gICAgICBwYXNzOiBfcmVmID0+IHtcbiAgICAgICAgdmFyIFtuXSA9IF9yZWY7XG4gICAgICAgIHJldHVybiB2b2lkcyA/IGZhbHNlIDogRWRpdG9yLmlzVm9pZChlZGl0b3IsIG4pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHZhciBtYXRjaGVzID0gW107XG4gICAgdmFyIGhpdDtcblxuICAgIGZvciAodmFyIFtub2RlLCBwYXRoXSBvZiBub2RlRW50cmllcykge1xuICAgICAgdmFyIGlzTG93ZXIgPSBoaXQgJiYgUGF0aC5jb21wYXJlKHBhdGgsIGhpdFsxXSkgPT09IDA7IC8vIEluIGhpZ2hlc3QgbW9kZSBhbnkgbm9kZSBsb3dlciB0aGFuIHRoZSBsYXN0IGhpdCBpcyBub3QgYSBtYXRjaC5cblxuICAgICAgaWYgKG1vZGUgPT09ICdoaWdoZXN0JyAmJiBpc0xvd2VyKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW1hdGNoKG5vZGUsIHBhdGgpKSB7XG4gICAgICAgIC8vIElmIHdlJ3ZlIGFycml2ZWQgYXQgYSBsZWFmIHRleHQgbm9kZSB0aGF0IGlzIG5vdCBsb3dlciB0aGFuIHRoZSBsYXN0XG4gICAgICAgIC8vIGhpdCwgdGhlbiB3ZSd2ZSBmb3VuZCBhIGJyYW5jaCB0aGF0IGRvZXNuJ3QgaW5jbHVkZSBhIG1hdGNoLCB3aGljaFxuICAgICAgICAvLyBtZWFucyB0aGUgbWF0Y2ggaXMgbm90IHVuaXZlcnNhbC5cbiAgICAgICAgaWYgKHVuaXZlcnNhbCAmJiAhaXNMb3dlciAmJiBUZXh0LmlzVGV4dChub2RlKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBJZiB0aGVyZSdzIGEgbWF0Y2ggYW5kIGl0J3MgbG93ZXIgdGhhbiB0aGUgbGFzdCwgdXBkYXRlIHRoZSBoaXQuXG5cblxuICAgICAgaWYgKG1vZGUgPT09ICdsb3dlc3QnICYmIGlzTG93ZXIpIHtcbiAgICAgICAgaGl0ID0gW25vZGUsIHBhdGhdO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gLy8gSW4gbG93ZXN0IG1vZGUgd2UgZW1pdCB0aGUgbGFzdCBoaXQsIG9uY2UgaXQncyBndWFyYW50ZWVkIGxvd2VzdC5cblxuXG4gICAgICB2YXIgZW1pdCA9IG1vZGUgPT09ICdsb3dlc3QnID8gaGl0IDogW25vZGUsIHBhdGhdO1xuXG4gICAgICBpZiAoZW1pdCkge1xuICAgICAgICBpZiAodW5pdmVyc2FsKSB7XG4gICAgICAgICAgbWF0Y2hlcy5wdXNoKGVtaXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHlpZWxkIGVtaXQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaGl0ID0gW25vZGUsIHBhdGhdO1xuICAgIH0gLy8gU2luY2UgbG93ZXN0IGlzIGFsd2F5cyBlbWl0dGluZyBvbmUgYmVoaW5kLCBjYXRjaCB1cCBhdCB0aGUgZW5kLlxuXG5cbiAgICBpZiAobW9kZSA9PT0gJ2xvd2VzdCcgJiYgaGl0KSB7XG4gICAgICBpZiAodW5pdmVyc2FsKSB7XG4gICAgICAgIG1hdGNoZXMucHVzaChoaXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeWllbGQgaGl0O1xuICAgICAgfVxuICAgIH0gLy8gVW5pdmVyc2FsIGRlZmVycyB0byBlbnN1cmUgdGhhdCB0aGUgbWF0Y2ggb2NjdXJzIGluIGV2ZXJ5IGJyYW5jaCwgc28gd2VcbiAgICAvLyB5aWVsZCBhbGwgb2YgdGhlIG1hdGNoZXMgYWZ0ZXIgaXRlcmF0aW5nLlxuXG5cbiAgICBpZiAodW5pdmVyc2FsKSB7XG4gICAgICB5aWVsZCogbWF0Y2hlcztcbiAgICB9XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogTm9ybWFsaXplIGFueSBkaXJ0eSBvYmplY3RzIGluIHRoZSBlZGl0b3IuXHJcbiAgICovXG4gIG5vcm1hbGl6ZShlZGl0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHtcbiAgICAgIGZvcmNlID0gZmFsc2VcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIHZhciBnZXREaXJ0eVBhdGhzID0gZWRpdG9yID0+IHtcbiAgICAgIHJldHVybiBESVJUWV9QQVRIUy5nZXQoZWRpdG9yKSB8fCBbXTtcbiAgICB9O1xuXG4gICAgaWYgKCFFZGl0b3IuaXNOb3JtYWxpemluZyhlZGl0b3IpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGZvcmNlKSB7XG4gICAgICB2YXIgYWxsUGF0aHMgPSBBcnJheS5mcm9tKE5vZGUubm9kZXMoZWRpdG9yKSwgX3JlZjIgPT4ge1xuICAgICAgICB2YXIgWywgcF0gPSBfcmVmMjtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgICB9KTtcbiAgICAgIERJUlRZX1BBVEhTLnNldChlZGl0b3IsIGFsbFBhdGhzKTtcbiAgICB9XG5cbiAgICBpZiAoZ2V0RGlydHlQYXRocyhlZGl0b3IpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEVkaXRvci53aXRob3V0Tm9ybWFsaXppbmcoZWRpdG9yLCAoKSA9PiB7XG4gICAgICAvKlxyXG4gICAgICAgIEZpeCBkaXJ0eSBlbGVtZW50cyB3aXRoIG5vIGNoaWxkcmVuLlxyXG4gICAgICAgIGVkaXRvci5ub3JtYWxpemVOb2RlKCkgZG9lcyBmaXggdGhpcywgYnV0IHNvbWUgbm9ybWFsaXphdGlvbiBmaXhlcyBhbHNvIHJlcXVpcmUgaXQgdG8gd29yay5cclxuICAgICAgICBSdW5uaW5nIGFuIGluaXRpYWwgcGFzcyBhdm9pZHMgdGhlIGNhdGNoLTIyIHJhY2UgY29uZGl0aW9uLlxyXG4gICAgICAqL1xuICAgICAgZm9yICh2YXIgZGlydHlQYXRoIG9mIGdldERpcnR5UGF0aHMoZWRpdG9yKSkge1xuICAgICAgICBpZiAoTm9kZS5oYXMoZWRpdG9yLCBkaXJ0eVBhdGgpKSB7XG4gICAgICAgICAgdmFyIGVudHJ5ID0gRWRpdG9yLm5vZGUoZWRpdG9yLCBkaXJ0eVBhdGgpO1xuICAgICAgICAgIHZhciBbbm9kZSwgX10gPSBlbnRyeTtcbiAgICAgICAgICAvKlxyXG4gICAgICAgICAgICBUaGUgZGVmYXVsdCBub3JtYWxpemVyIGluc2VydHMgYW4gZW1wdHkgdGV4dCBub2RlIGluIHRoaXMgc2NlbmFyaW8sIGJ1dCBpdCBjYW4gYmUgY3VzdG9taXNlZC5cclxuICAgICAgICAgICAgU28gdGhlcmUgaXMgc29tZSByaXNrIGhlcmUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgQXMgbG9uZyBhcyB0aGUgbm9ybWFsaXplciBvbmx5IGluc2VydHMgY2hpbGQgbm9kZXMgZm9yIHRoaXMgY2FzZSBpdCBpcyBzYWZlIHRvIGRvIGluIGFueSBvcmRlcjtcclxuICAgICAgICAgICAgYnkgZGVmaW5pdGlvbiBhZGRpbmcgY2hpbGRyZW4gdG8gYW4gZW1wdHkgbm9kZSBjYW4ndCBjYXVzZSBvdGhlciBwYXRocyB0byBjaGFuZ2UuXHJcbiAgICAgICAgICAqL1xuXG4gICAgICAgICAgaWYgKEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBlZGl0b3Iubm9ybWFsaXplTm9kZShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBtYXggPSBnZXREaXJ0eVBhdGhzKGVkaXRvcikubGVuZ3RoICogNDI7IC8vIEhBQ0s6IGJldHRlciB3YXk/XG5cbiAgICAgIHZhciBtID0gMDtcblxuICAgICAgd2hpbGUgKGdldERpcnR5UGF0aHMoZWRpdG9yKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgaWYgKG0gPiBtYXgpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcXG4gICAgICAgICAgICBDb3VsZCBub3QgY29tcGxldGVseSBub3JtYWxpemUgdGhlIGVkaXRvciBhZnRlciBcIi5jb25jYXQobWF4LCBcIiBpdGVyYXRpb25zISBUaGlzIGlzIHVzdWFsbHkgZHVlIHRvIGluY29ycmVjdCBub3JtYWxpemF0aW9uIGxvZ2ljIHRoYXQgbGVhdmVzIGEgbm9kZSBpbiBhbiBpbnZhbGlkIHN0YXRlLlxcbiAgICAgICAgICBcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9kaXJ0eVBhdGggPSBnZXREaXJ0eVBhdGhzKGVkaXRvcikucG9wKCk7IC8vIElmIHRoZSBub2RlIGRvZXNuJ3QgZXhpc3QgaW4gdGhlIHRyZWUsIGl0IGRvZXMgbm90IG5lZWQgdG8gYmUgbm9ybWFsaXplZC5cblxuXG4gICAgICAgIGlmIChOb2RlLmhhcyhlZGl0b3IsIF9kaXJ0eVBhdGgpKSB7XG4gICAgICAgICAgdmFyIF9lbnRyeSA9IEVkaXRvci5ub2RlKGVkaXRvciwgX2RpcnR5UGF0aCk7XG5cbiAgICAgICAgICBlZGl0b3Iubm9ybWFsaXplTm9kZShfZW50cnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgbSsrO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgcGFyZW50IG5vZGUgb2YgYSBsb2NhdGlvbi5cclxuICAgKi9cbiAgcGFyZW50KGVkaXRvciwgYXQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIHBhdGggPSBFZGl0b3IucGF0aChlZGl0b3IsIGF0LCBvcHRpb25zKTtcbiAgICB2YXIgcGFyZW50UGF0aCA9IFBhdGgucGFyZW50KHBhdGgpO1xuICAgIHZhciBlbnRyeSA9IEVkaXRvci5ub2RlKGVkaXRvciwgcGFyZW50UGF0aCk7XG4gICAgcmV0dXJuIGVudHJ5O1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgcGF0aCBvZiBhIGxvY2F0aW9uLlxyXG4gICAqL1xuICBwYXRoKGVkaXRvciwgYXQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIHtcbiAgICAgIGRlcHRoLFxuICAgICAgZWRnZVxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgaWYgKFBhdGguaXNQYXRoKGF0KSkge1xuICAgICAgaWYgKGVkZ2UgPT09ICdzdGFydCcpIHtcbiAgICAgICAgdmFyIFssIGZpcnN0UGF0aF0gPSBOb2RlLmZpcnN0KGVkaXRvciwgYXQpO1xuICAgICAgICBhdCA9IGZpcnN0UGF0aDtcbiAgICAgIH0gZWxzZSBpZiAoZWRnZSA9PT0gJ2VuZCcpIHtcbiAgICAgICAgdmFyIFssIGxhc3RQYXRoXSA9IE5vZGUubGFzdChlZGl0b3IsIGF0KTtcbiAgICAgICAgYXQgPSBsYXN0UGF0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoUmFuZ2UuaXNSYW5nZShhdCkpIHtcbiAgICAgIGlmIChlZGdlID09PSAnc3RhcnQnKSB7XG4gICAgICAgIGF0ID0gUmFuZ2Uuc3RhcnQoYXQpO1xuICAgICAgfSBlbHNlIGlmIChlZGdlID09PSAnZW5kJykge1xuICAgICAgICBhdCA9IFJhbmdlLmVuZChhdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdCA9IFBhdGguY29tbW9uKGF0LmFuY2hvci5wYXRoLCBhdC5mb2N1cy5wYXRoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoUG9pbnQuaXNQb2ludChhdCkpIHtcbiAgICAgIGF0ID0gYXQucGF0aDtcbiAgICB9XG5cbiAgICBpZiAoZGVwdGggIT0gbnVsbCkge1xuICAgICAgYXQgPSBhdC5zbGljZSgwLCBkZXB0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF0O1xuICB9LFxuXG4gIGhhc1BhdGgoZWRpdG9yLCBwYXRoKSB7XG4gICAgcmV0dXJuIE5vZGUuaGFzKGVkaXRvciwgcGF0aCk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgbXV0YWJsZSByZWYgZm9yIGEgYFBhdGhgIG9iamVjdCwgd2hpY2ggd2lsbCBzdGF5IGluIHN5bmMgYXMgbmV3XHJcbiAgICogb3BlcmF0aW9ucyBhcmUgYXBwbGllZCB0byB0aGUgZWRpdG9yLlxyXG4gICAqL1xuICBwYXRoUmVmKGVkaXRvciwgcGF0aCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICB2YXIge1xuICAgICAgYWZmaW5pdHkgPSAnZm9yd2FyZCdcbiAgICB9ID0gb3B0aW9ucztcbiAgICB2YXIgcmVmID0ge1xuICAgICAgY3VycmVudDogcGF0aCxcbiAgICAgIGFmZmluaXR5LFxuXG4gICAgICB1bnJlZigpIHtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBjdXJyZW50XG4gICAgICAgIH0gPSByZWY7XG4gICAgICAgIHZhciBwYXRoUmVmcyA9IEVkaXRvci5wYXRoUmVmcyhlZGl0b3IpO1xuICAgICAgICBwYXRoUmVmcy5kZWxldGUocmVmKTtcbiAgICAgICAgcmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICAgIH1cblxuICAgIH07XG4gICAgdmFyIHJlZnMgPSBFZGl0b3IucGF0aFJlZnMoZWRpdG9yKTtcbiAgICByZWZzLmFkZChyZWYpO1xuICAgIHJldHVybiByZWY7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBzZXQgb2YgY3VycmVudGx5IHRyYWNrZWQgcGF0aCByZWZzIG9mIHRoZSBlZGl0b3IuXHJcbiAgICovXG4gIHBhdGhSZWZzKGVkaXRvcikge1xuICAgIHZhciByZWZzID0gUEFUSF9SRUZTLmdldChlZGl0b3IpO1xuXG4gICAgaWYgKCFyZWZzKSB7XG4gICAgICByZWZzID0gbmV3IFNldCgpO1xuICAgICAgUEFUSF9SRUZTLnNldChlZGl0b3IsIHJlZnMpO1xuICAgIH1cblxuICAgIHJldHVybiByZWZzO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgc3RhcnQgb3IgZW5kIHBvaW50IG9mIGEgbG9jYXRpb24uXHJcbiAgICovXG4gIHBvaW50KGVkaXRvciwgYXQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIHtcbiAgICAgIGVkZ2UgPSAnc3RhcnQnXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICBpZiAoUGF0aC5pc1BhdGgoYXQpKSB7XG4gICAgICB2YXIgcGF0aDtcblxuICAgICAgaWYgKGVkZ2UgPT09ICdlbmQnKSB7XG4gICAgICAgIHZhciBbLCBsYXN0UGF0aF0gPSBOb2RlLmxhc3QoZWRpdG9yLCBhdCk7XG4gICAgICAgIHBhdGggPSBsYXN0UGF0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBbLCBmaXJzdFBhdGhdID0gTm9kZS5maXJzdChlZGl0b3IsIGF0KTtcbiAgICAgICAgcGF0aCA9IGZpcnN0UGF0aDtcbiAgICAgIH1cblxuICAgICAgdmFyIG5vZGUgPSBOb2RlLmdldChlZGl0b3IsIHBhdGgpO1xuXG4gICAgICBpZiAoIVRleHQuaXNUZXh0KG5vZGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBnZXQgdGhlIFwiLmNvbmNhdChlZGdlLCBcIiBwb2ludCBpbiB0aGUgbm9kZSBhdCBwYXRoIFtcIikuY29uY2F0KGF0LCBcIl0gYmVjYXVzZSBpdCBoYXMgbm8gXCIpLmNvbmNhdChlZGdlLCBcIiB0ZXh0IG5vZGUuXCIpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aCxcbiAgICAgICAgb2Zmc2V0OiBlZGdlID09PSAnZW5kJyA/IG5vZGUudGV4dC5sZW5ndGggOiAwXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChSYW5nZS5pc1JhbmdlKGF0KSkge1xuICAgICAgdmFyIFtzdGFydCwgZW5kXSA9IFJhbmdlLmVkZ2VzKGF0KTtcbiAgICAgIHJldHVybiBlZGdlID09PSAnc3RhcnQnID8gc3RhcnQgOiBlbmQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF0O1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG11dGFibGUgcmVmIGZvciBhIGBQb2ludGAgb2JqZWN0LCB3aGljaCB3aWxsIHN0YXkgaW4gc3luYyBhcyBuZXdcclxuICAgKiBvcGVyYXRpb25zIGFyZSBhcHBsaWVkIHRvIHRoZSBlZGl0b3IuXHJcbiAgICovXG4gIHBvaW50UmVmKGVkaXRvciwgcG9pbnQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIHtcbiAgICAgIGFmZmluaXR5ID0gJ2ZvcndhcmQnXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgdmFyIHJlZiA9IHtcbiAgICAgIGN1cnJlbnQ6IHBvaW50LFxuICAgICAgYWZmaW5pdHksXG5cbiAgICAgIHVucmVmKCkge1xuICAgICAgICB2YXIge1xuICAgICAgICAgIGN1cnJlbnRcbiAgICAgICAgfSA9IHJlZjtcbiAgICAgICAgdmFyIHBvaW50UmVmcyA9IEVkaXRvci5wb2ludFJlZnMoZWRpdG9yKTtcbiAgICAgICAgcG9pbnRSZWZzLmRlbGV0ZShyZWYpO1xuICAgICAgICByZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgICAgfVxuXG4gICAgfTtcbiAgICB2YXIgcmVmcyA9IEVkaXRvci5wb2ludFJlZnMoZWRpdG9yKTtcbiAgICByZWZzLmFkZChyZWYpO1xuICAgIHJldHVybiByZWY7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBzZXQgb2YgY3VycmVudGx5IHRyYWNrZWQgcG9pbnQgcmVmcyBvZiB0aGUgZWRpdG9yLlxyXG4gICAqL1xuICBwb2ludFJlZnMoZWRpdG9yKSB7XG4gICAgdmFyIHJlZnMgPSBQT0lOVF9SRUZTLmdldChlZGl0b3IpO1xuXG4gICAgaWYgKCFyZWZzKSB7XG4gICAgICByZWZzID0gbmV3IFNldCgpO1xuICAgICAgUE9JTlRfUkVGUy5zZXQoZWRpdG9yLCByZWZzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmcztcbiAgfSxcblxuICAvKipcclxuICAgKiBSZXR1cm4gYWxsIHRoZSBwb3NpdGlvbnMgaW4gYGF0YCByYW5nZSB3aGVyZSBhIGBQb2ludGAgY2FuIGJlIHBsYWNlZC5cclxuICAgKlxyXG4gICAqIEJ5IGRlZmF1bHQsIG1vdmVzIGZvcndhcmQgYnkgaW5kaXZpZHVhbCBvZmZzZXRzIGF0IGEgdGltZSwgYnV0XHJcbiAgICogdGhlIGB1bml0YCBvcHRpb24gY2FuIGJlIHVzZWQgdG8gdG8gbW92ZSBieSBjaGFyYWN0ZXIsIHdvcmQsIGxpbmUsIG9yIGJsb2NrLlxyXG4gICAqXHJcbiAgICogVGhlIGByZXZlcnNlYCBvcHRpb24gY2FuIGJlIHVzZWQgdG8gY2hhbmdlIGl0ZXJhdGlvbiBkaXJlY3Rpb24uXHJcbiAgICpcclxuICAgKiBOb3RlOiBCeSBkZWZhdWx0IHZvaWQgbm9kZXMgYXJlIHRyZWF0ZWQgYXMgYSBzaW5nbGUgcG9pbnQgYW5kIGl0ZXJhdGlvblxyXG4gICAqIHdpbGwgbm90IGhhcHBlbiBpbnNpZGUgdGhlaXIgY29udGVudCB1bmxlc3MgeW91IHBhc3MgaW4gdHJ1ZSBmb3IgdGhlXHJcbiAgICogYHZvaWRzYCBvcHRpb24sIHRoZW4gaXRlcmF0aW9uIHdpbGwgb2NjdXIuXHJcbiAgICovXG4gICpwb3NpdGlvbnMoZWRpdG9yKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICBhdCA9IGVkaXRvci5zZWxlY3Rpb24sXG4gICAgICB1bml0ID0gJ29mZnNldCcsXG4gICAgICByZXZlcnNlID0gZmFsc2UsXG4gICAgICB2b2lkcyA9IGZhbHNlXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICBpZiAoIWF0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogQWxnb3JpdGhtIG5vdGVzOlxyXG4gICAgICpcclxuICAgICAqIEVhY2ggc3RlcCBgZGlzdGFuY2VgIGlzIGR5bmFtaWMgZGVwZW5kaW5nIG9uIHRoZSB1bmRlcmx5aW5nIHRleHRcclxuICAgICAqIGFuZCB0aGUgYHVuaXRgIHNwZWNpZmllZC4gIEVhY2ggc3RlcCwgZS5nLiwgYSBsaW5lIG9yIHdvcmQsIG1heVxyXG4gICAgICogc3BhbiBtdWx0aXBsZSB0ZXh0IG5vZGVzLCBzbyB3ZSBpdGVyYXRlIHRocm91Z2ggdGhlIHRleHQgYm90aCBvblxyXG4gICAgICogdHdvIGxldmVscyBpbiBzdGVwLXN5bmM6XHJcbiAgICAgKlxyXG4gICAgICogYGxlYWZUZXh0YCBzdG9yZXMgdGhlIHRleHQgb24gYSB0ZXh0IGxlYWYgbGV2ZWwsIGFuZCBpcyBhZHZhbmNlZFxyXG4gICAgICogdGhyb3VnaCB1c2luZyB0aGUgY291bnRlcnMgYGxlYWZUZXh0T2Zmc2V0YCBhbmQgYGxlYWZUZXh0UmVtYWluaW5nYC5cclxuICAgICAqXHJcbiAgICAgKiBgYmxvY2tUZXh0YCBzdG9yZXMgdGhlIHRleHQgb24gYSBibG9jayBsZXZlbCwgYW5kIGlzIHNob3J0ZW5lZFxyXG4gICAgICogYnkgYGRpc3RhbmNlYCBldmVyeSB0aW1lIGl0IGlzIGFkdmFuY2VkLlxyXG4gICAgICpcclxuICAgICAqIFdlIG9ubHkgbWFpbnRhaW4gYSB3aW5kb3cgb2Ygb25lIGJsb2NrVGV4dCBhbmQgb25lIGxlYWZUZXh0IGJlY2F1c2VcclxuICAgICAqIGEgYmxvY2sgbm9kZSBhbHdheXMgYXBwZWFycyBiZWZvcmUgYWxsIG9mIGl0cyBsZWFmIG5vZGVzLlxyXG4gICAgICovXG5cblxuICAgIHZhciByYW5nZSA9IEVkaXRvci5yYW5nZShlZGl0b3IsIGF0KTtcbiAgICB2YXIgW3N0YXJ0LCBlbmRdID0gUmFuZ2UuZWRnZXMocmFuZ2UpO1xuICAgIHZhciBmaXJzdCA9IHJldmVyc2UgPyBlbmQgOiBzdGFydDtcbiAgICB2YXIgaXNOZXdCbG9jayA9IGZhbHNlO1xuICAgIHZhciBibG9ja1RleHQgPSAnJztcbiAgICB2YXIgZGlzdGFuY2UgPSAwOyAvLyBEaXN0YW5jZSBmb3IgbGVhZlRleHQgdG8gY2F0Y2ggdXAgdG8gYmxvY2tUZXh0LlxuXG4gICAgdmFyIGxlYWZUZXh0UmVtYWluaW5nID0gMDtcbiAgICB2YXIgbGVhZlRleHRPZmZzZXQgPSAwOyAvLyBJdGVyYXRlIHRocm91Z2ggYWxsIG5vZGVzIGluIHJhbmdlLCBncmFiYmluZyBlbnRpcmUgdGV4dHVhbCBjb250ZW50XG4gICAgLy8gb2YgYmxvY2sgbm9kZXMgaW4gYmxvY2tUZXh0LCBhbmQgdGV4dCBub2RlcyBpbiBsZWFmVGV4dC5cbiAgICAvLyBFeHBsb2l0cyB0aGUgZmFjdCB0aGF0IG5vZGVzIGFyZSBzZXF1ZW5jZWQgaW4gc3VjaCBhIHdheSB0aGF0IHdlIGZpcnN0XG4gICAgLy8gZW5jb3VudGVyIHRoZSBibG9jayBub2RlLCB0aGVuIGFsbCBvZiBpdHMgdGV4dCBub2Rlcywgc28gd2hlbiBpdGVyYXRpbmdcbiAgICAvLyB0aHJvdWdoIHRoZSBibG9ja1RleHQgYW5kIGxlYWZUZXh0IHdlIGp1c3QgbmVlZCB0byByZW1lbWJlciBhIHdpbmRvdyBvZlxuICAgIC8vIG9uZSBibG9jayBub2RlIGFuZCBsZWFmIG5vZGUsIHJlc3BlY3RpdmVseS5cblxuICAgIGZvciAodmFyIFtub2RlLCBwYXRoXSBvZiBFZGl0b3Iubm9kZXMoZWRpdG9yLCB7XG4gICAgICBhdCxcbiAgICAgIHJldmVyc2UsXG4gICAgICB2b2lkc1xuICAgIH0pKSB7XG4gICAgICAvKlxyXG4gICAgICAgKiBFTEVNRU5UIE5PREUgLSBZaWVsZCBwb3NpdGlvbihzKSBmb3Igdm9pZHMsIGNvbGxlY3QgYmxvY2tUZXh0IGZvciBibG9ja3NcclxuICAgICAgICovXG4gICAgICBpZiAoRWxlbWVudC5pc0VsZW1lbnQobm9kZSkpIHtcbiAgICAgICAgLy8gVm9pZCBub2RlcyBhcmUgYSBzcGVjaWFsIGNhc2UsIHNvIGJ5IGRlZmF1bHQgd2Ugd2lsbCBhbHdheXNcbiAgICAgICAgLy8geWllbGQgdGhlaXIgZmlyc3QgcG9pbnQuIElmIHRoZSBgdm9pZHNgIG9wdGlvbiBpcyBzZXQgdG8gdHJ1ZSxcbiAgICAgICAgLy8gdGhlbiB3ZSB3aWxsIGl0ZXJhdGUgb3ZlciB0aGVpciBjb250ZW50LlxuICAgICAgICBpZiAoIXZvaWRzICYmIGVkaXRvci5pc1ZvaWQobm9kZSkpIHtcbiAgICAgICAgICB5aWVsZCBFZGl0b3Iuc3RhcnQoZWRpdG9yLCBwYXRoKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSAvLyBJbmxpbmUgZWxlbWVudCBub2RlcyBhcmUgaWdub3JlZCBhcyB0aGV5IGRvbid0IHRoZW1zZWx2ZXNcbiAgICAgICAgLy8gY29udHJpYnV0ZSB0byBgYmxvY2tUZXh0YCBvciBgbGVhZlRleHRgIC0gdGhlaXIgcGFyZW50IGFuZFxuICAgICAgICAvLyBjaGlsZHJlbiBkby5cblxuXG4gICAgICAgIGlmIChlZGl0b3IuaXNJbmxpbmUobm9kZSkpIGNvbnRpbnVlOyAvLyBCbG9jayBlbGVtZW50IG5vZGUgLSBzZXQgYGJsb2NrVGV4dGAgdG8gaXRzIHRleHQgY29udGVudC5cblxuICAgICAgICBpZiAoRWRpdG9yLmhhc0lubGluZXMoZWRpdG9yLCBub2RlKSkge1xuICAgICAgICAgIC8vIFdlIGFsd2F5cyBleGhhdXN0IGJsb2NrIG5vZGVzIGJlZm9yZSBlbmNvdW50ZXJpbmcgYSBuZXcgb25lOlxuICAgICAgICAgIC8vICAgY29uc29sZS5hc3NlcnQoYmxvY2tUZXh0ID09PSAnJyxcbiAgICAgICAgICAvLyAgICAgYGJsb2NrVGV4dD0nJHtibG9ja1RleHR9JyAtIGArXG4gICAgICAgICAgLy8gICAgIGBub3QgZXhoYXVzdGVkIGJlZm9yZSBuZXcgYmxvY2sgbm9kZWAsIHBhdGgpXG4gICAgICAgICAgLy8gRW5zdXJlIHJhbmdlIGNvbnNpZGVyZWQgaXMgY2FwcGVkIHRvIGByYW5nZWAsIGluIHRoZVxuICAgICAgICAgIC8vIHN0YXJ0L2VuZCBlZGdlIGNhc2VzIHdoZXJlIGJsb2NrIGV4dGVuZHMgYmV5b25kIHJhbmdlLlxuICAgICAgICAgIC8vIEVxdWl2YWxlbnQgdG8gdGhpcywgYnV0IHByZXN1bWFibHkgbW9yZSBwZXJmb3JtYW50OlxuICAgICAgICAgIC8vICAgYmxvY2tSYW5nZSA9IEVkaXRvci5yYW5nZShlZGl0b3IsIC4uLkVkaXRvci5lZGdlcyhlZGl0b3IsIHBhdGgpKVxuICAgICAgICAgIC8vICAgYmxvY2tSYW5nZSA9IFJhbmdlLmludGVyc2VjdGlvbihyYW5nZSwgYmxvY2tSYW5nZSkgLy8gaW50ZXJzZWN0XG4gICAgICAgICAgLy8gICBibG9ja1RleHQgPSBFZGl0b3Iuc3RyaW5nKGVkaXRvciwgYmxvY2tSYW5nZSwgeyB2b2lkcyB9KVxuICAgICAgICAgIHZhciBlID0gUGF0aC5pc0FuY2VzdG9yKHBhdGgsIGVuZC5wYXRoKSA/IGVuZCA6IEVkaXRvci5lbmQoZWRpdG9yLCBwYXRoKTtcbiAgICAgICAgICB2YXIgcyA9IFBhdGguaXNBbmNlc3RvcihwYXRoLCBzdGFydC5wYXRoKSA/IHN0YXJ0IDogRWRpdG9yLnN0YXJ0KGVkaXRvciwgcGF0aCk7XG4gICAgICAgICAgYmxvY2tUZXh0ID0gRWRpdG9yLnN0cmluZyhlZGl0b3IsIHtcbiAgICAgICAgICAgIGFuY2hvcjogcyxcbiAgICAgICAgICAgIGZvY3VzOiBlXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgdm9pZHNcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpc05ld0Jsb2NrID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLypcclxuICAgICAgICogVEVYVCBMRUFGIE5PREUgLSBJdGVyYXRlIHRocm91Z2ggdGV4dCBjb250ZW50LCB5aWVsZGluZ1xyXG4gICAgICAgKiBwb3NpdGlvbnMgZXZlcnkgYGRpc3RhbmNlYCBvZmZzZXQgYWNjb3JkaW5nIHRvIGB1bml0YC5cclxuICAgICAgICovXG5cblxuICAgICAgaWYgKFRleHQuaXNUZXh0KG5vZGUpKSB7XG4gICAgICAgIHZhciBpc0ZpcnN0ID0gUGF0aC5lcXVhbHMocGF0aCwgZmlyc3QucGF0aCk7IC8vIFByb29mIHRoYXQgd2UgYWx3YXlzIGV4aGF1c3QgdGV4dCBub2RlcyBiZWZvcmUgZW5jb3VudGVyaW5nIGEgbmV3IG9uZTpcbiAgICAgICAgLy8gICBjb25zb2xlLmFzc2VydChsZWFmVGV4dFJlbWFpbmluZyA8PSAwLFxuICAgICAgICAvLyAgICAgYGxlYWZUZXh0UmVtYWluaW5nPSR7bGVhZlRleHRSZW1haW5pbmd9IC0gYCtcbiAgICAgICAgLy8gICAgIGBub3QgZXhoYXVzdGVkIGJlZm9yZSBuZXcgbGVhZiB0ZXh0IG5vZGVgLCBwYXRoKVxuICAgICAgICAvLyBSZXNldCBgbGVhZlRleHRgIGNvdW50ZXJzIGZvciBuZXcgdGV4dCBub2RlLlxuXG4gICAgICAgIGlmIChpc0ZpcnN0KSB7XG4gICAgICAgICAgbGVhZlRleHRSZW1haW5pbmcgPSByZXZlcnNlID8gZmlyc3Qub2Zmc2V0IDogbm9kZS50ZXh0Lmxlbmd0aCAtIGZpcnN0Lm9mZnNldDtcbiAgICAgICAgICBsZWFmVGV4dE9mZnNldCA9IGZpcnN0Lm9mZnNldDsgLy8gV29ya3MgZm9yIHJldmVyc2UgdG9vLlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxlYWZUZXh0UmVtYWluaW5nID0gbm9kZS50ZXh0Lmxlbmd0aDtcbiAgICAgICAgICBsZWFmVGV4dE9mZnNldCA9IHJldmVyc2UgPyBsZWFmVGV4dFJlbWFpbmluZyA6IDA7XG4gICAgICAgIH0gLy8gWWllbGQgcG9zaXRpb24gYXQgdGhlIHN0YXJ0IG9mIG5vZGUgKHBvdGVudGlhbGx5KS5cblxuXG4gICAgICAgIGlmIChpc0ZpcnN0IHx8IGlzTmV3QmxvY2sgfHwgdW5pdCA9PT0gJ29mZnNldCcpIHtcbiAgICAgICAgICB5aWVsZCB7XG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgb2Zmc2V0OiBsZWFmVGV4dE9mZnNldFxuICAgICAgICAgIH07XG4gICAgICAgICAgaXNOZXdCbG9jayA9IGZhbHNlO1xuICAgICAgICB9IC8vIFlpZWxkIHBvc2l0aW9ucyBldmVyeSAoZHluYW1pY2FsbHkgY2FsY3VsYXRlZCkgYGRpc3RhbmNlYCBvZmZzZXQuXG5cblxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgIC8vIElmIGBsZWFmVGV4dGAgaGFzIGNhdWdodCB1cCB3aXRoIGBibG9ja1RleHRgIChkaXN0YW5jZT0wKSxcbiAgICAgICAgICAvLyBhbmQgaWYgYmxvY2tUZXh0IGlzIGV4aGF1c3RlZCwgYnJlYWsgdG8gZ2V0IGFub3RoZXIgYmxvY2sgbm9kZSxcbiAgICAgICAgICAvLyBvdGhlcndpc2UgYWR2YW5jZSBibG9ja1RleHQgZm9yd2FyZCBieSB0aGUgbmV3IGBkaXN0YW5jZWAuXG4gICAgICAgICAgaWYgKGRpc3RhbmNlID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoYmxvY2tUZXh0ID09PSAnJykgYnJlYWs7XG4gICAgICAgICAgICBkaXN0YW5jZSA9IGNhbGNEaXN0YW5jZShibG9ja1RleHQsIHVuaXQsIHJldmVyc2UpOyAvLyBTcGxpdCB0aGUgc3RyaW5nIGF0IHRoZSBwcmV2aW91c2x5IGZvdW5kIGRpc3RhbmNlIGFuZCB1c2UgdGhlXG4gICAgICAgICAgICAvLyByZW1haW5pbmcgc3RyaW5nIGZvciB0aGUgbmV4dCBpdGVyYXRpb24uXG5cbiAgICAgICAgICAgIGJsb2NrVGV4dCA9IHNwbGl0QnlDaGFyYWN0ZXJEaXN0YW5jZShibG9ja1RleHQsIGRpc3RhbmNlLCByZXZlcnNlKVsxXTtcbiAgICAgICAgICB9IC8vIEFkdmFuY2UgYGxlYWZUZXh0YCBieSB0aGUgY3VycmVudCBgZGlzdGFuY2VgLlxuXG5cbiAgICAgICAgICBsZWFmVGV4dE9mZnNldCA9IHJldmVyc2UgPyBsZWFmVGV4dE9mZnNldCAtIGRpc3RhbmNlIDogbGVhZlRleHRPZmZzZXQgKyBkaXN0YW5jZTtcbiAgICAgICAgICBsZWFmVGV4dFJlbWFpbmluZyA9IGxlYWZUZXh0UmVtYWluaW5nIC0gZGlzdGFuY2U7IC8vIElmIGBsZWFmVGV4dGAgaXMgZXhoYXVzdGVkLCBicmVhayB0byBnZXQgYSBuZXcgbGVhZiBub2RlXG4gICAgICAgICAgLy8gYW5kIHNldCBkaXN0YW5jZSB0byB0aGUgb3ZlcmZsb3cgYW1vdW50LCBzbyB3ZSdsbCAobWF5YmUpXG4gICAgICAgICAgLy8gY2F0Y2ggdXAgdG8gYmxvY2tUZXh0IGluIHRoZSBuZXh0IGxlYWYgdGV4dCBub2RlLlxuXG4gICAgICAgICAgaWYgKGxlYWZUZXh0UmVtYWluaW5nIDwgMCkge1xuICAgICAgICAgICAgZGlzdGFuY2UgPSAtbGVhZlRleHRSZW1haW5pbmc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IC8vIFN1Y2Nlc3NmdWxseSB3YWxrZWQgYGRpc3RhbmNlYCBvZmZzZXRzIHRocm91Z2ggYGxlYWZUZXh0YFxuICAgICAgICAgIC8vIHRvIGNhdGNoIHVwIHdpdGggYGJsb2NrVGV4dGAsIHNvIHdlIGNhbiByZXNldCBgZGlzdGFuY2VgXG4gICAgICAgICAgLy8gYW5kIHlpZWxkIHRoaXMgcG9zaXRpb24gaW4gdGhpcyBub2RlLlxuXG5cbiAgICAgICAgICBkaXN0YW5jZSA9IDA7XG4gICAgICAgICAgeWllbGQge1xuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIG9mZnNldDogbGVhZlRleHRPZmZzZXRcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyBQcm9vZiB0aGF0IHVwb24gY29tcGxldGlvbiwgd2UndmUgZXhhaHVzdGVkIGJvdGggbGVhZiBhbmQgYmxvY2sgdGV4dDpcbiAgICAvLyAgIGNvbnNvbGUuYXNzZXJ0KGxlYWZUZXh0UmVtYWluaW5nIDw9IDAsIFwibGVhZlRleHQgd2Fzbid0IGV4aGF1c3RlZFwiKVxuICAgIC8vICAgY29uc29sZS5hc3NlcnQoYmxvY2tUZXh0ID09PSAnJywgXCJibG9ja1RleHQgd2Fzbid0IGV4aGF1c3RlZFwiKVxuICAgIC8vIEhlbHBlcjpcbiAgICAvLyBSZXR1cm4gdGhlIGRpc3RhbmNlIGluIG9mZnNldHMgZm9yIGEgc3RlcCBvZiBzaXplIGB1bml0YCBvbiBnaXZlbiBzdHJpbmcuXG5cblxuICAgIGZ1bmN0aW9uIGNhbGNEaXN0YW5jZSh0ZXh0LCB1bml0LCByZXZlcnNlKSB7XG4gICAgICBpZiAodW5pdCA9PT0gJ2NoYXJhY3RlcicpIHtcbiAgICAgICAgcmV0dXJuIGdldENoYXJhY3RlckRpc3RhbmNlKHRleHQsIHJldmVyc2UpO1xuICAgICAgfSBlbHNlIGlmICh1bml0ID09PSAnd29yZCcpIHtcbiAgICAgICAgcmV0dXJuIGdldFdvcmREaXN0YW5jZSh0ZXh0LCByZXZlcnNlKTtcbiAgICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ2xpbmUnIHx8IHVuaXQgPT09ICdibG9jaycpIHtcbiAgICAgICAgcmV0dXJuIHRleHQubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBtYXRjaGluZyBub2RlIGluIHRoZSBicmFuY2ggb2YgdGhlIGRvY3VtZW50IGJlZm9yZSBhIGxvY2F0aW9uLlxyXG4gICAqL1xuICBwcmV2aW91cyhlZGl0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHtcbiAgICAgIG1vZGUgPSAnbG93ZXN0JyxcbiAgICAgIHZvaWRzID0gZmFsc2VcbiAgICB9ID0gb3B0aW9ucztcbiAgICB2YXIge1xuICAgICAgbWF0Y2gsXG4gICAgICBhdCA9IGVkaXRvci5zZWxlY3Rpb25cbiAgICB9ID0gb3B0aW9ucztcblxuICAgIGlmICghYXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcG9pbnRCZWZvcmVMb2NhdGlvbiA9IEVkaXRvci5iZWZvcmUoZWRpdG9yLCBhdCwge1xuICAgICAgdm9pZHNcbiAgICB9KTtcblxuICAgIGlmICghcG9pbnRCZWZvcmVMb2NhdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBbLCB0b10gPSBFZGl0b3IuZmlyc3QoZWRpdG9yLCBbXSk7IC8vIFRoZSBzZWFyY2ggbG9jYXRpb24gaXMgZnJvbSB0aGUgc3RhcnQgb2YgdGhlIGRvY3VtZW50IHRvIHRoZSBwYXRoIG9mXG4gICAgLy8gdGhlIHBvaW50IGJlZm9yZSB0aGUgbG9jYXRpb24gcGFzc2VkIGluXG5cbiAgICB2YXIgc3BhbiA9IFtwb2ludEJlZm9yZUxvY2F0aW9uLnBhdGgsIHRvXTtcblxuICAgIGlmIChQYXRoLmlzUGF0aChhdCkgJiYgYXQubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZ2V0IHRoZSBwcmV2aW91cyBub2RlIGZyb20gdGhlIHJvb3Qgbm9kZSFcIik7XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoID09IG51bGwpIHtcbiAgICAgIGlmIChQYXRoLmlzUGF0aChhdCkpIHtcbiAgICAgICAgdmFyIFtwYXJlbnRdID0gRWRpdG9yLnBhcmVudChlZGl0b3IsIGF0KTtcblxuICAgICAgICBtYXRjaCA9IG4gPT4gcGFyZW50LmNoaWxkcmVuLmluY2x1ZGVzKG4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWF0Y2ggPSAoKSA9PiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBbcHJldmlvdXNdID0gRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgcmV2ZXJzZTogdHJ1ZSxcbiAgICAgIGF0OiBzcGFuLFxuICAgICAgbWF0Y2gsXG4gICAgICBtb2RlLFxuICAgICAgdm9pZHNcbiAgICB9KTtcbiAgICByZXR1cm4gcHJldmlvdXM7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IGEgcmFuZ2Ugb2YgYSBsb2NhdGlvbi5cclxuICAgKi9cbiAgcmFuZ2UoZWRpdG9yLCBhdCwgdG8pIHtcbiAgICBpZiAoUmFuZ2UuaXNSYW5nZShhdCkgJiYgIXRvKSB7XG4gICAgICByZXR1cm4gYXQ7XG4gICAgfVxuXG4gICAgdmFyIHN0YXJ0ID0gRWRpdG9yLnN0YXJ0KGVkaXRvciwgYXQpO1xuICAgIHZhciBlbmQgPSBFZGl0b3IuZW5kKGVkaXRvciwgdG8gfHwgYXQpO1xuICAgIHJldHVybiB7XG4gICAgICBhbmNob3I6IHN0YXJ0LFxuICAgICAgZm9jdXM6IGVuZFxuICAgIH07XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgbXV0YWJsZSByZWYgZm9yIGEgYFJhbmdlYCBvYmplY3QsIHdoaWNoIHdpbGwgc3RheSBpbiBzeW5jIGFzIG5ld1xyXG4gICAqIG9wZXJhdGlvbnMgYXJlIGFwcGxpZWQgdG8gdGhlIGVkaXRvci5cclxuICAgKi9cbiAgcmFuZ2VSZWYoZWRpdG9yLCByYW5nZSkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICB2YXIge1xuICAgICAgYWZmaW5pdHkgPSAnZm9yd2FyZCdcbiAgICB9ID0gb3B0aW9ucztcbiAgICB2YXIgcmVmID0ge1xuICAgICAgY3VycmVudDogcmFuZ2UsXG4gICAgICBhZmZpbml0eSxcblxuICAgICAgdW5yZWYoKSB7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgY3VycmVudFxuICAgICAgICB9ID0gcmVmO1xuICAgICAgICB2YXIgcmFuZ2VSZWZzID0gRWRpdG9yLnJhbmdlUmVmcyhlZGl0b3IpO1xuICAgICAgICByYW5nZVJlZnMuZGVsZXRlKHJlZik7XG4gICAgICAgIHJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgICB9XG5cbiAgICB9O1xuICAgIHZhciByZWZzID0gRWRpdG9yLnJhbmdlUmVmcyhlZGl0b3IpO1xuICAgIHJlZnMuYWRkKHJlZik7XG4gICAgcmV0dXJuIHJlZjtcbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIHNldCBvZiBjdXJyZW50bHkgdHJhY2tlZCByYW5nZSByZWZzIG9mIHRoZSBlZGl0b3IuXHJcbiAgICovXG4gIHJhbmdlUmVmcyhlZGl0b3IpIHtcbiAgICB2YXIgcmVmcyA9IFJBTkdFX1JFRlMuZ2V0KGVkaXRvcik7XG5cbiAgICBpZiAoIXJlZnMpIHtcbiAgICAgIHJlZnMgPSBuZXcgU2V0KCk7XG4gICAgICBSQU5HRV9SRUZTLnNldChlZGl0b3IsIHJlZnMpO1xuICAgIH1cblxuICAgIHJldHVybiByZWZzO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBhIGN1c3RvbSBwcm9wZXJ0eSBmcm9tIGFsbCBvZiB0aGUgbGVhZiB0ZXh0IG5vZGVzIGluIHRoZSBjdXJyZW50XHJcbiAgICogc2VsZWN0aW9uLlxyXG4gICAqXHJcbiAgICogSWYgdGhlIHNlbGVjdGlvbiBpcyBjdXJyZW50bHkgY29sbGFwc2VkLCB0aGUgcmVtb3ZhbCB3aWxsIGJlIHN0b3JlZCBvblxyXG4gICAqIGBlZGl0b3IubWFya3NgIGFuZCBhcHBsaWVkIHRvIHRoZSB0ZXh0IGluc2VydGVkIG5leHQuXHJcbiAgICovXG4gIHJlbW92ZU1hcmsoZWRpdG9yLCBrZXkpIHtcbiAgICBlZGl0b3IucmVtb3ZlTWFyayhrZXkpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIE1hbnVhbGx5IHNldCBpZiB0aGUgZWRpdG9yIHNob3VsZCBjdXJyZW50bHkgYmUgbm9ybWFsaXppbmcuXHJcbiAgICpcclxuICAgKiBOb3RlOiBVc2luZyB0aGlzIGluY29ycmVjdGx5IGNhbiBsZWF2ZSB0aGUgZWRpdG9yIGluIGFuIGludmFsaWQgc3RhdGUuXHJcbiAgICpcclxuICAgKi9cbiAgc2V0Tm9ybWFsaXppbmcoZWRpdG9yLCBpc05vcm1hbGl6aW5nKSB7XG4gICAgTk9STUFMSVpJTkcuc2V0KGVkaXRvciwgaXNOb3JtYWxpemluZyk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBzdGFydCBwb2ludCBvZiBhIGxvY2F0aW9uLlxyXG4gICAqL1xuICBzdGFydChlZGl0b3IsIGF0KSB7XG4gICAgcmV0dXJuIEVkaXRvci5wb2ludChlZGl0b3IsIGF0LCB7XG4gICAgICBlZGdlOiAnc3RhcnQnXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSB0ZXh0IHN0cmluZyBjb250ZW50IG9mIGEgbG9jYXRpb24uXHJcbiAgICpcclxuICAgKiBOb3RlOiBieSBkZWZhdWx0IHRoZSB0ZXh0IG9mIHZvaWQgbm9kZXMgaXMgY29uc2lkZXJlZCB0byBiZSBhbiBlbXB0eVxyXG4gICAqIHN0cmluZywgcmVnYXJkbGVzcyBvZiBjb250ZW50LCB1bmxlc3MgeW91IHBhc3MgaW4gdHJ1ZSBmb3IgdGhlIHZvaWRzIG9wdGlvblxyXG4gICAqL1xuICBzdHJpbmcoZWRpdG9yLCBhdCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICB2YXIge1xuICAgICAgdm9pZHMgPSBmYWxzZVxuICAgIH0gPSBvcHRpb25zO1xuICAgIHZhciByYW5nZSA9IEVkaXRvci5yYW5nZShlZGl0b3IsIGF0KTtcbiAgICB2YXIgW3N0YXJ0LCBlbmRdID0gUmFuZ2UuZWRnZXMocmFuZ2UpO1xuICAgIHZhciB0ZXh0ID0gJyc7XG5cbiAgICBmb3IgKHZhciBbbm9kZSwgcGF0aF0gb2YgRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgYXQ6IHJhbmdlLFxuICAgICAgbWF0Y2g6IFRleHQuaXNUZXh0LFxuICAgICAgdm9pZHNcbiAgICB9KSkge1xuICAgICAgdmFyIHQgPSBub2RlLnRleHQ7XG5cbiAgICAgIGlmIChQYXRoLmVxdWFscyhwYXRoLCBlbmQucGF0aCkpIHtcbiAgICAgICAgdCA9IHQuc2xpY2UoMCwgZW5kLm9mZnNldCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChQYXRoLmVxdWFscyhwYXRoLCBzdGFydC5wYXRoKSkge1xuICAgICAgICB0ID0gdC5zbGljZShzdGFydC5vZmZzZXQpO1xuICAgICAgfVxuXG4gICAgICB0ZXh0ICs9IHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ29udmVydCBhIHJhbmdlIGludG8gYSBub24taGFuZ2luZyBvbmUuXHJcbiAgICovXG4gIHVuaGFuZ1JhbmdlKGVkaXRvciwgcmFuZ2UpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIHtcbiAgICAgIHZvaWRzID0gZmFsc2VcbiAgICB9ID0gb3B0aW9ucztcbiAgICB2YXIgW3N0YXJ0LCBlbmRdID0gUmFuZ2UuZWRnZXMocmFuZ2UpOyAvLyBQRVJGOiBleGl0IGVhcmx5IGlmIHdlIGNhbiBndWFyYW50ZWUgdGhhdCB0aGUgcmFuZ2UgaXNuJ3QgaGFuZ2luZy5cblxuICAgIGlmIChzdGFydC5vZmZzZXQgIT09IDAgfHwgZW5kLm9mZnNldCAhPT0gMCB8fCBSYW5nZS5pc0NvbGxhcHNlZChyYW5nZSkpIHtcbiAgICAgIHJldHVybiByYW5nZTtcbiAgICB9XG5cbiAgICB2YXIgZW5kQmxvY2sgPSBFZGl0b3IuYWJvdmUoZWRpdG9yLCB7XG4gICAgICBhdDogZW5kLFxuICAgICAgbWF0Y2g6IG4gPT4gRWRpdG9yLmlzQmxvY2soZWRpdG9yLCBuKVxuICAgIH0pO1xuICAgIHZhciBibG9ja1BhdGggPSBlbmRCbG9jayA/IGVuZEJsb2NrWzFdIDogW107XG4gICAgdmFyIGZpcnN0ID0gRWRpdG9yLnN0YXJ0KGVkaXRvciwgW10pO1xuICAgIHZhciBiZWZvcmUgPSB7XG4gICAgICBhbmNob3I6IGZpcnN0LFxuICAgICAgZm9jdXM6IGVuZFxuICAgIH07XG4gICAgdmFyIHNraXAgPSB0cnVlO1xuXG4gICAgZm9yICh2YXIgW25vZGUsIHBhdGhdIG9mIEVkaXRvci5ub2RlcyhlZGl0b3IsIHtcbiAgICAgIGF0OiBiZWZvcmUsXG4gICAgICBtYXRjaDogVGV4dC5pc1RleHQsXG4gICAgICByZXZlcnNlOiB0cnVlLFxuICAgICAgdm9pZHNcbiAgICB9KSkge1xuICAgICAgaWYgKHNraXApIHtcbiAgICAgICAgc2tpcCA9IGZhbHNlO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUudGV4dCAhPT0gJycgfHwgUGF0aC5pc0JlZm9yZShwYXRoLCBibG9ja1BhdGgpKSB7XG4gICAgICAgIGVuZCA9IHtcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIG9mZnNldDogbm9kZS50ZXh0Lmxlbmd0aFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgYW5jaG9yOiBzdGFydCxcbiAgICAgIGZvY3VzOiBlbmRcbiAgICB9O1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIE1hdGNoIGEgdm9pZCBub2RlIGluIHRoZSBjdXJyZW50IGJyYW5jaCBvZiB0aGUgZWRpdG9yLlxyXG4gICAqL1xuICB2b2lkKGVkaXRvcikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICByZXR1cm4gRWRpdG9yLmFib3ZlKGVkaXRvciwgX29iamVjdFNwcmVhZCQ4KF9vYmplY3RTcHJlYWQkOCh7fSwgb3B0aW9ucyksIHt9LCB7XG4gICAgICBtYXRjaDogbiA9PiBFZGl0b3IuaXNWb2lkKGVkaXRvciwgbilcbiAgICB9KSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2FsbCBhIGZ1bmN0aW9uLCBkZWZlcnJpbmcgbm9ybWFsaXphdGlvbiB1bnRpbCBhZnRlciBpdCBjb21wbGV0ZXMuXHJcbiAgICovXG4gIHdpdGhvdXROb3JtYWxpemluZyhlZGl0b3IsIGZuKSB7XG4gICAgdmFyIHZhbHVlID0gRWRpdG9yLmlzTm9ybWFsaXppbmcoZWRpdG9yKTtcbiAgICBFZGl0b3Iuc2V0Tm9ybWFsaXppbmcoZWRpdG9yLCBmYWxzZSk7XG5cbiAgICB0cnkge1xuICAgICAgZm4oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgRWRpdG9yLnNldE5vcm1hbGl6aW5nKGVkaXRvciwgdmFsdWUpO1xuICAgIH1cblxuICAgIEVkaXRvci5ub3JtYWxpemUoZWRpdG9yKTtcbiAgfVxuXG59O1xuXG52YXIgTG9jYXRpb24gPSB7XG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaW1wbGVtZW50cyB0aGUgYExvY2F0aW9uYCBpbnRlcmZhY2UuXHJcbiAgICovXG4gIGlzTG9jYXRpb24odmFsdWUpIHtcbiAgICByZXR1cm4gUGF0aC5pc1BhdGgodmFsdWUpIHx8IFBvaW50LmlzUG9pbnQodmFsdWUpIHx8IFJhbmdlLmlzUmFuZ2UodmFsdWUpO1xuICB9XG5cbn07XG52YXIgU3BhbiA9IHtcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSB2YWx1ZSBpbXBsZW1lbnRzIHRoZSBgU3BhbmAgaW50ZXJmYWNlLlxyXG4gICAqL1xuICBpc1NwYW4odmFsdWUpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAyICYmIHZhbHVlLmV2ZXJ5KFBhdGguaXNQYXRoKTtcbiAgfVxuXG59O1xuXG52YXIgX2V4Y2x1ZGVkJDMgPSBbXCJjaGlsZHJlblwiXSxcbiAgICBfZXhjbHVkZWQyJDIgPSBbXCJ0ZXh0XCJdO1xudmFyIElTX05PREVfTElTVF9DQUNIRSA9IG5ldyBXZWFrTWFwKCk7XG52YXIgTm9kZSA9IHtcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBub2RlIGF0IGEgc3BlY2lmaWMgcGF0aCwgYXNzZXJ0aW5nIHRoYXQgaXQncyBhbiBhbmNlc3RvciBub2RlLlxyXG4gICAqL1xuICBhbmNlc3Rvcihyb290LCBwYXRoKSB7XG4gICAgdmFyIG5vZGUgPSBOb2RlLmdldChyb290LCBwYXRoKTtcblxuICAgIGlmIChUZXh0LmlzVGV4dChub2RlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGdldCB0aGUgYW5jZXN0b3Igbm9kZSBhdCBwYXRoIFtcIi5jb25jYXQocGF0aCwgXCJdIGJlY2F1c2UgaXQgcmVmZXJzIHRvIGEgdGV4dCBub2RlIGluc3RlYWQ6IFwiKS5jb25jYXQobm9kZSkpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIFJldHVybiBhIGdlbmVyYXRvciBvZiBhbGwgdGhlIGFuY2VzdG9yIG5vZGVzIGFib3ZlIGEgc3BlY2lmaWMgcGF0aC5cclxuICAgKlxyXG4gICAqIEJ5IGRlZmF1bHQgdGhlIG9yZGVyIGlzIGJvdHRvbS11cCwgZnJvbSBsb3dlc3QgdG8gaGlnaGVzdCBhbmNlc3RvciBpblxyXG4gICAqIHRoZSB0cmVlLCBidXQgeW91IGNhbiBwYXNzIHRoZSBgcmV2ZXJzZTogdHJ1ZWAgb3B0aW9uIHRvIGdvIHRvcC1kb3duLlxyXG4gICAqL1xuICAqYW5jZXN0b3JzKHJvb3QsIHBhdGgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgICBmb3IgKHZhciBwIG9mIFBhdGguYW5jZXN0b3JzKHBhdGgsIG9wdGlvbnMpKSB7XG4gICAgICB2YXIgbiA9IE5vZGUuYW5jZXN0b3Iocm9vdCwgcCk7XG4gICAgICB2YXIgZW50cnkgPSBbbiwgcF07XG4gICAgICB5aWVsZCBlbnRyeTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBjaGlsZCBvZiBhIG5vZGUgYXQgYSBzcGVjaWZpYyBpbmRleC5cclxuICAgKi9cbiAgY2hpbGQocm9vdCwgaW5kZXgpIHtcbiAgICBpZiAoVGV4dC5pc1RleHQocm9vdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBnZXQgdGhlIGNoaWxkIG9mIGEgdGV4dCBub2RlOiBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkocm9vdCkpKTtcbiAgICB9XG5cbiAgICB2YXIgYyA9IHJvb3QuY2hpbGRyZW5baW5kZXhdO1xuXG4gICAgaWYgKGMgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGdldCBjaGlsZCBhdCBpbmRleCBgXCIuY29uY2F0KGluZGV4LCBcImAgaW4gbm9kZTogXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShyb290KSkpO1xuICAgIH1cblxuICAgIHJldHVybiBjO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEl0ZXJhdGUgb3ZlciB0aGUgY2hpbGRyZW4gb2YgYSBub2RlIGF0IGEgc3BlY2lmaWMgcGF0aC5cclxuICAgKi9cbiAgKmNoaWxkcmVuKHJvb3QsIHBhdGgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIHtcbiAgICAgIHJldmVyc2UgPSBmYWxzZVxuICAgIH0gPSBvcHRpb25zO1xuICAgIHZhciBhbmNlc3RvciA9IE5vZGUuYW5jZXN0b3Iocm9vdCwgcGF0aCk7XG4gICAgdmFyIHtcbiAgICAgIGNoaWxkcmVuXG4gICAgfSA9IGFuY2VzdG9yO1xuICAgIHZhciBpbmRleCA9IHJldmVyc2UgPyBjaGlsZHJlbi5sZW5ndGggLSAxIDogMDtcblxuICAgIHdoaWxlIChyZXZlcnNlID8gaW5kZXggPj0gMCA6IGluZGV4IDwgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICB2YXIgY2hpbGQgPSBOb2RlLmNoaWxkKGFuY2VzdG9yLCBpbmRleCk7XG4gICAgICB2YXIgY2hpbGRQYXRoID0gcGF0aC5jb25jYXQoaW5kZXgpO1xuICAgICAgeWllbGQgW2NoaWxkLCBjaGlsZFBhdGhdO1xuICAgICAgaW5kZXggPSByZXZlcnNlID8gaW5kZXggLSAxIDogaW5kZXggKyAxO1xuICAgIH1cbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgYW4gZW50cnkgZm9yIHRoZSBjb21tb24gYW5jZXNldG9yIG5vZGUgb2YgdHdvIHBhdGhzLlxyXG4gICAqL1xuICBjb21tb24ocm9vdCwgcGF0aCwgYW5vdGhlcikge1xuICAgIHZhciBwID0gUGF0aC5jb21tb24ocGF0aCwgYW5vdGhlcik7XG4gICAgdmFyIG4gPSBOb2RlLmdldChyb290LCBwKTtcbiAgICByZXR1cm4gW24sIHBdO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgbm9kZSBhdCBhIHNwZWNpZmljIHBhdGgsIGFzc2VydGluZyB0aGF0IGl0J3MgYSBkZXNjZW5kYW50IG5vZGUuXHJcbiAgICovXG4gIGRlc2NlbmRhbnQocm9vdCwgcGF0aCkge1xuICAgIHZhciBub2RlID0gTm9kZS5nZXQocm9vdCwgcGF0aCk7XG5cbiAgICBpZiAoRWRpdG9yLmlzRWRpdG9yKG5vZGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZ2V0IHRoZSBkZXNjZW5kYW50IG5vZGUgYXQgcGF0aCBbXCIuY29uY2F0KHBhdGgsIFwiXSBiZWNhdXNlIGl0IHJlZmVycyB0byB0aGUgcm9vdCBlZGl0b3Igbm9kZSBpbnN0ZWFkOiBcIikuY29uY2F0KG5vZGUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcblxuICAvKipcclxuICAgKiBSZXR1cm4gYSBnZW5lcmF0b3Igb2YgYWxsIHRoZSBkZXNjZW5kYW50IG5vZGUgZW50cmllcyBpbnNpZGUgYSByb290IG5vZGUuXHJcbiAgICovXG4gICpkZXNjZW5kYW50cyhyb290KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgZm9yICh2YXIgW25vZGUsIHBhdGhdIG9mIE5vZGUubm9kZXMocm9vdCwgb3B0aW9ucykpIHtcbiAgICAgIGlmIChwYXRoLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAvLyBOT1RFOiB3ZSBoYXZlIHRvIGNvZXJjZSBoZXJlIGJlY2F1c2UgY2hlY2tpbmcgdGhlIHBhdGgncyBsZW5ndGggZG9lc1xuICAgICAgICAvLyBndWFyYW50ZWUgdGhhdCBgbm9kZWAgaXMgbm90IGEgYEVkaXRvcmAsIGJ1dCBUeXBlU2NyaXB0IGRvZXNuJ3Qga25vdy5cbiAgICAgICAgeWllbGQgW25vZGUsIHBhdGhdO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcclxuICAgKiBSZXR1cm4gYSBnZW5lcmF0b3Igb2YgYWxsIHRoZSBlbGVtZW50IG5vZGVzIGluc2lkZSBhIHJvb3Qgbm9kZS4gRWFjaCBpdGVyYXRpb25cclxuICAgKiB3aWxsIHJldHVybiBhbiBgRWxlbWVudEVudHJ5YCB0dXBsZSBjb25zaXN0aW5nIG9mIGBbRWxlbWVudCwgUGF0aF1gLiBJZiB0aGVcclxuICAgKiByb290IG5vZGUgaXMgYW4gZWxlbWVudCBpdCB3aWxsIGJlIGluY2x1ZGVkIGluIHRoZSBpdGVyYXRpb24gYXMgd2VsbC5cclxuICAgKi9cbiAgKmVsZW1lbnRzKHJvb3QpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICBmb3IgKHZhciBbbm9kZSwgcGF0aF0gb2YgTm9kZS5ub2Rlcyhyb290LCBvcHRpb25zKSkge1xuICAgICAgaWYgKEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpKSB7XG4gICAgICAgIHlpZWxkIFtub2RlLCBwYXRoXTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogRXh0cmFjdCBwcm9wcyBmcm9tIGEgTm9kZS5cclxuICAgKi9cbiAgZXh0cmFjdFByb3BzKG5vZGUpIHtcbiAgICBpZiAoRWxlbWVudC5pc0FuY2VzdG9yKG5vZGUpKSB7XG4gICAgICB2YXIgcHJvcGVydGllcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhub2RlLCBfZXhjbHVkZWQkMyk7XG5cbiAgICAgIHJldHVybiBwcm9wZXJ0aWVzO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcHJvcGVydGllcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhub2RlLCBfZXhjbHVkZWQyJDIpO1xuXG4gICAgICByZXR1cm4gcHJvcGVydGllcztcbiAgICB9XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBmaXJzdCBub2RlIGVudHJ5IGluIGEgcm9vdCBub2RlIGZyb20gYSBwYXRoLlxyXG4gICAqL1xuICBmaXJzdChyb290LCBwYXRoKSB7XG4gICAgdmFyIHAgPSBwYXRoLnNsaWNlKCk7XG4gICAgdmFyIG4gPSBOb2RlLmdldChyb290LCBwKTtcblxuICAgIHdoaWxlIChuKSB7XG4gICAgICBpZiAoVGV4dC5pc1RleHQobikgfHwgbi5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuID0gbi5jaGlsZHJlblswXTtcbiAgICAgICAgcC5wdXNoKDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbbiwgcF07XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBzbGljZWQgZnJhZ21lbnQgcmVwcmVzZW50ZWQgYnkgYSByYW5nZSBpbnNpZGUgYSByb290IG5vZGUuXHJcbiAgICovXG4gIGZyYWdtZW50KHJvb3QsIHJhbmdlKSB7XG4gICAgaWYgKFRleHQuaXNUZXh0KHJvb3QpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZ2V0IGEgZnJhZ21lbnQgc3RhcnRpbmcgZnJvbSBhIHJvb3QgdGV4dCBub2RlOiBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkocm9vdCkpKTtcbiAgICB9XG5cbiAgICB2YXIgbmV3Um9vdCA9IHByb2R1Y2Uoe1xuICAgICAgY2hpbGRyZW46IHJvb3QuY2hpbGRyZW5cbiAgICB9LCByID0+IHtcbiAgICAgIHZhciBbc3RhcnQsIGVuZF0gPSBSYW5nZS5lZGdlcyhyYW5nZSk7XG4gICAgICB2YXIgbm9kZUVudHJpZXMgPSBOb2RlLm5vZGVzKHIsIHtcbiAgICAgICAgcmV2ZXJzZTogdHJ1ZSxcbiAgICAgICAgcGFzczogX3JlZiA9PiB7XG4gICAgICAgICAgdmFyIFssIHBhdGhdID0gX3JlZjtcbiAgICAgICAgICByZXR1cm4gIVJhbmdlLmluY2x1ZGVzKHJhbmdlLCBwYXRoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGZvciAodmFyIFssIHBhdGhdIG9mIG5vZGVFbnRyaWVzKSB7XG4gICAgICAgIGlmICghUmFuZ2UuaW5jbHVkZXMocmFuZ2UsIHBhdGgpKSB7XG4gICAgICAgICAgdmFyIHBhcmVudCA9IE5vZGUucGFyZW50KHIsIHBhdGgpO1xuICAgICAgICAgIHZhciBpbmRleCA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChQYXRoLmVxdWFscyhwYXRoLCBlbmQucGF0aCkpIHtcbiAgICAgICAgICB2YXIgbGVhZiA9IE5vZGUubGVhZihyLCBwYXRoKTtcbiAgICAgICAgICBsZWFmLnRleHQgPSBsZWFmLnRleHQuc2xpY2UoMCwgZW5kLm9mZnNldCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoUGF0aC5lcXVhbHMocGF0aCwgc3RhcnQucGF0aCkpIHtcbiAgICAgICAgICB2YXIgX2xlYWYgPSBOb2RlLmxlYWYociwgcGF0aCk7XG5cbiAgICAgICAgICBfbGVhZi50ZXh0ID0gX2xlYWYudGV4dC5zbGljZShzdGFydC5vZmZzZXQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChFZGl0b3IuaXNFZGl0b3IocikpIHtcbiAgICAgICAgci5zZWxlY3Rpb24gPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXdSb290LmNoaWxkcmVuO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgZGVzY2VuZGFudCBub2RlIHJlZmVycmVkIHRvIGJ5IGEgc3BlY2lmaWMgcGF0aC4gSWYgdGhlIHBhdGggaXMgYW5cclxuICAgKiBlbXB0eSBhcnJheSwgaXQgcmVmZXJzIHRvIHRoZSByb290IG5vZGUgaXRzZWxmLlxyXG4gICAqL1xuICBnZXQocm9vdCwgcGF0aCkge1xuICAgIHZhciBub2RlID0gcm9vdDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHAgPSBwYXRoW2ldO1xuXG4gICAgICBpZiAoVGV4dC5pc1RleHQobm9kZSkgfHwgIW5vZGUuY2hpbGRyZW5bcF0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgYSBkZXNjZW5kYW50IGF0IHBhdGggW1wiLmNvbmNhdChwYXRoLCBcIl0gaW4gbm9kZTogXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShyb290KSkpO1xuICAgICAgfVxuXG4gICAgICBub2RlID0gbm9kZS5jaGlsZHJlbltwXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIGRlc2NlbmRhbnQgbm9kZSBleGlzdHMgYXQgYSBzcGVjaWZpYyBwYXRoLlxyXG4gICAqL1xuICBoYXMocm9vdCwgcGF0aCkge1xuICAgIHZhciBub2RlID0gcm9vdDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHAgPSBwYXRoW2ldO1xuXG4gICAgICBpZiAoVGV4dC5pc1RleHQobm9kZSkgfHwgIW5vZGUuY2hpbGRyZW5bcF0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBub2RlID0gbm9kZS5jaGlsZHJlbltwXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGltcGxlbWVudHMgdGhlIGBOb2RlYCBpbnRlcmZhY2UuXHJcbiAgICovXG4gIGlzTm9kZSh2YWx1ZSkge1xuICAgIHJldHVybiBUZXh0LmlzVGV4dCh2YWx1ZSkgfHwgRWxlbWVudC5pc0VsZW1lbnQodmFsdWUpIHx8IEVkaXRvci5pc0VkaXRvcih2YWx1ZSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhIGxpc3Qgb2YgYE5vZGVgIG9iamVjdHMuXHJcbiAgICovXG4gIGlzTm9kZUxpc3QodmFsdWUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGNhY2hlZFJlc3VsdCA9IElTX05PREVfTElTVF9DQUNIRS5nZXQodmFsdWUpO1xuXG4gICAgaWYgKGNhY2hlZFJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gY2FjaGVkUmVzdWx0O1xuICAgIH1cblxuICAgIHZhciBpc05vZGVMaXN0ID0gdmFsdWUuZXZlcnkodmFsID0+IE5vZGUuaXNOb2RlKHZhbCkpO1xuICAgIElTX05PREVfTElTVF9DQUNIRS5zZXQodmFsdWUsIGlzTm9kZUxpc3QpO1xuICAgIHJldHVybiBpc05vZGVMaXN0O1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgbGFzdCBub2RlIGVudHJ5IGluIGEgcm9vdCBub2RlIGZyb20gYSBwYXRoLlxyXG4gICAqL1xuICBsYXN0KHJvb3QsIHBhdGgpIHtcbiAgICB2YXIgcCA9IHBhdGguc2xpY2UoKTtcbiAgICB2YXIgbiA9IE5vZGUuZ2V0KHJvb3QsIHApO1xuXG4gICAgd2hpbGUgKG4pIHtcbiAgICAgIGlmIChUZXh0LmlzVGV4dChuKSB8fCBuLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBpID0gbi5jaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgICAgICBuID0gbi5jaGlsZHJlbltpXTtcbiAgICAgICAgcC5wdXNoKGkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbbiwgcF07XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBub2RlIGF0IGEgc3BlY2lmaWMgcGF0aCwgZW5zdXJpbmcgaXQncyBhIGxlYWYgdGV4dCBub2RlLlxyXG4gICAqL1xuICBsZWFmKHJvb3QsIHBhdGgpIHtcbiAgICB2YXIgbm9kZSA9IE5vZGUuZ2V0KHJvb3QsIHBhdGgpO1xuXG4gICAgaWYgKCFUZXh0LmlzVGV4dChub2RlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGdldCB0aGUgbGVhZiBub2RlIGF0IHBhdGggW1wiLmNvbmNhdChwYXRoLCBcIl0gYmVjYXVzZSBpdCByZWZlcnMgdG8gYSBub24tbGVhZiBub2RlOiBcIikuY29uY2F0KG5vZGUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcblxuICAvKipcclxuICAgKiBSZXR1cm4gYSBnZW5lcmF0b3Igb2YgdGhlIGluIGEgYnJhbmNoIG9mIHRoZSB0cmVlLCBmcm9tIGEgc3BlY2lmaWMgcGF0aC5cclxuICAgKlxyXG4gICAqIEJ5IGRlZmF1bHQgdGhlIG9yZGVyIGlzIHRvcC1kb3duLCBmcm9tIGxvd2VzdCB0byBoaWdoZXN0IG5vZGUgaW4gdGhlIHRyZWUsXHJcbiAgICogYnV0IHlvdSBjYW4gcGFzcyB0aGUgYHJldmVyc2U6IHRydWVgIG9wdGlvbiB0byBnbyBib3R0b20tdXAuXHJcbiAgICovXG4gICpsZXZlbHMocm9vdCwgcGF0aCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuICAgIGZvciAodmFyIHAgb2YgUGF0aC5sZXZlbHMocGF0aCwgb3B0aW9ucykpIHtcbiAgICAgIHZhciBuID0gTm9kZS5nZXQocm9vdCwgcCk7XG4gICAgICB5aWVsZCBbbiwgcF07XG4gICAgfVxuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgbm9kZSBtYXRjaGVzIGEgc2V0IG9mIHByb3BzLlxyXG4gICAqL1xuICBtYXRjaGVzKG5vZGUsIHByb3BzKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpICYmIEVsZW1lbnQuaXNFbGVtZW50UHJvcHMocHJvcHMpICYmIEVsZW1lbnQubWF0Y2hlcyhub2RlLCBwcm9wcykgfHwgVGV4dC5pc1RleHQobm9kZSkgJiYgVGV4dC5pc1RleHRQcm9wcyhwcm9wcykgJiYgVGV4dC5tYXRjaGVzKG5vZGUsIHByb3BzKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBSZXR1cm4gYSBnZW5lcmF0b3Igb2YgYWxsIHRoZSBub2RlIGVudHJpZXMgb2YgYSByb290IG5vZGUuIEVhY2ggZW50cnkgaXNcclxuICAgKiByZXR1cm5lZCBhcyBhIGBbTm9kZSwgUGF0aF1gIHR1cGxlLCB3aXRoIHRoZSBwYXRoIHJlZmVycmluZyB0byB0aGUgbm9kZSdzXHJcbiAgICogcG9zaXRpb24gaW5zaWRlIHRoZSByb290IG5vZGUuXHJcbiAgICovXG4gICpub2Rlcyhyb290KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICBwYXNzLFxuICAgICAgcmV2ZXJzZSA9IGZhbHNlXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgdmFyIHtcbiAgICAgIGZyb20gPSBbXSxcbiAgICAgIHRvXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgdmFyIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gICAgdmFyIHAgPSBbXTtcbiAgICB2YXIgbiA9IHJvb3Q7XG5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKHRvICYmIChyZXZlcnNlID8gUGF0aC5pc0JlZm9yZShwLCB0bykgOiBQYXRoLmlzQWZ0ZXIocCwgdG8pKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKCF2aXNpdGVkLmhhcyhuKSkge1xuICAgICAgICB5aWVsZCBbbiwgcF07XG4gICAgICB9IC8vIElmIHdlJ3JlIGFsbG93ZWQgdG8gZ28gZG93bndhcmQgYW5kIHdlIGhhdmVuJ3QgZGVzY2VuZGVkIHlldCwgZG8uXG5cblxuICAgICAgaWYgKCF2aXNpdGVkLmhhcyhuKSAmJiAhVGV4dC5pc1RleHQobikgJiYgbi5jaGlsZHJlbi5sZW5ndGggIT09IDAgJiYgKHBhc3MgPT0gbnVsbCB8fCBwYXNzKFtuLCBwXSkgPT09IGZhbHNlKSkge1xuICAgICAgICB2aXNpdGVkLmFkZChuKTtcbiAgICAgICAgdmFyIG5leHRJbmRleCA9IHJldmVyc2UgPyBuLmNoaWxkcmVuLmxlbmd0aCAtIDEgOiAwO1xuXG4gICAgICAgIGlmIChQYXRoLmlzQW5jZXN0b3IocCwgZnJvbSkpIHtcbiAgICAgICAgICBuZXh0SW5kZXggPSBmcm9tW3AubGVuZ3RoXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHAgPSBwLmNvbmNhdChuZXh0SW5kZXgpO1xuICAgICAgICBuID0gTm9kZS5nZXQocm9vdCwgcCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSAvLyBJZiB3ZSdyZSBhdCB0aGUgcm9vdCBhbmQgd2UgY2FuJ3QgZ28gZG93biwgd2UncmUgZG9uZS5cblxuXG4gICAgICBpZiAocC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IC8vIElmIHdlJ3JlIGdvaW5nIGZvcndhcmQuLi5cblxuXG4gICAgICBpZiAoIXJldmVyc2UpIHtcbiAgICAgICAgdmFyIG5ld1BhdGggPSBQYXRoLm5leHQocCk7XG5cbiAgICAgICAgaWYgKE5vZGUuaGFzKHJvb3QsIG5ld1BhdGgpKSB7XG4gICAgICAgICAgcCA9IG5ld1BhdGg7XG4gICAgICAgICAgbiA9IE5vZGUuZ2V0KHJvb3QsIHApO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9IC8vIElmIHdlJ3JlIGdvaW5nIGJhY2t3YXJkLi4uXG5cblxuICAgICAgaWYgKHJldmVyc2UgJiYgcFtwLmxlbmd0aCAtIDFdICE9PSAwKSB7XG4gICAgICAgIHZhciBfbmV3UGF0aCA9IFBhdGgucHJldmlvdXMocCk7XG5cbiAgICAgICAgcCA9IF9uZXdQYXRoO1xuICAgICAgICBuID0gTm9kZS5nZXQocm9vdCwgcCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSAvLyBPdGhlcndpc2Ugd2UncmUgZ29pbmcgdXB3YXJkLi4uXG5cblxuICAgICAgcCA9IFBhdGgucGFyZW50KHApO1xuICAgICAgbiA9IE5vZGUuZ2V0KHJvb3QsIHApO1xuICAgICAgdmlzaXRlZC5hZGQobik7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgcGFyZW50IG9mIGEgbm9kZSBhdCBhIHNwZWNpZmljIHBhdGguXHJcbiAgICovXG4gIHBhcmVudChyb290LCBwYXRoKSB7XG4gICAgdmFyIHBhcmVudFBhdGggPSBQYXRoLnBhcmVudChwYXRoKTtcbiAgICB2YXIgcCA9IE5vZGUuZ2V0KHJvb3QsIHBhcmVudFBhdGgpO1xuXG4gICAgaWYgKFRleHQuaXNUZXh0KHApKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZ2V0IHRoZSBwYXJlbnQgb2YgcGF0aCBbXCIuY29uY2F0KHBhdGgsIFwiXSBiZWNhdXNlIGl0IGRvZXMgbm90IGV4aXN0IGluIHRoZSByb290LlwiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHA7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBjb25jYXRlbmF0ZWQgdGV4dCBzdHJpbmcgb2YgYSBub2RlJ3MgY29udGVudC5cclxuICAgKlxyXG4gICAqIE5vdGUgdGhhdCB0aGlzIHdpbGwgbm90IGluY2x1ZGUgc3BhY2VzIG9yIGxpbmUgYnJlYWtzIGJldHdlZW4gYmxvY2sgbm9kZXMuXHJcbiAgICogSXQgaXMgbm90IGEgdXNlci1mYWNpbmcgc3RyaW5nLCBidXQgYSBzdHJpbmcgZm9yIHBlcmZvcm1pbmcgb2Zmc2V0LXJlbGF0ZWRcclxuICAgKiBjb21wdXRhdGlvbnMgZm9yIGEgbm9kZS5cclxuICAgKi9cbiAgc3RyaW5nKG5vZGUpIHtcbiAgICBpZiAoVGV4dC5pc1RleHQobm9kZSkpIHtcbiAgICAgIHJldHVybiBub2RlLnRleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBub2RlLmNoaWxkcmVuLm1hcChOb2RlLnN0cmluZykuam9pbignJyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxyXG4gICAqIFJldHVybiBhIGdlbmVyYXRvciBvZiBhbGwgbGVhZiB0ZXh0IG5vZGVzIGluIGEgcm9vdCBub2RlLlxyXG4gICAqL1xuICAqdGV4dHMocm9vdCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIGZvciAodmFyIFtub2RlLCBwYXRoXSBvZiBOb2RlLm5vZGVzKHJvb3QsIG9wdGlvbnMpKSB7XG4gICAgICBpZiAoVGV4dC5pc1RleHQobm9kZSkpIHtcbiAgICAgICAgeWllbGQgW25vZGUsIHBhdGhdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59O1xuXG5mdW5jdGlvbiBvd25LZXlzJDcob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDcodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQ3KE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkNyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cbnZhciBPcGVyYXRpb24gPSB7XG4gIC8qKlxyXG4gICAqIENoZWNrIG9mIGEgdmFsdWUgaXMgYSBgTm9kZU9wZXJhdGlvbmAgb2JqZWN0LlxyXG4gICAqL1xuICBpc05vZGVPcGVyYXRpb24odmFsdWUpIHtcbiAgICByZXR1cm4gT3BlcmF0aW9uLmlzT3BlcmF0aW9uKHZhbHVlKSAmJiB2YWx1ZS50eXBlLmVuZHNXaXRoKCdfbm9kZScpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIG9mIGEgdmFsdWUgaXMgYW4gYE9wZXJhdGlvbmAgb2JqZWN0LlxyXG4gICAqL1xuICBpc09wZXJhdGlvbih2YWx1ZSkge1xuICAgIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHZhbHVlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2luc2VydF9ub2RlJzpcbiAgICAgICAgcmV0dXJuIFBhdGguaXNQYXRoKHZhbHVlLnBhdGgpICYmIE5vZGUuaXNOb2RlKHZhbHVlLm5vZGUpO1xuXG4gICAgICBjYXNlICdpbnNlcnRfdGV4dCc6XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUub2Zmc2V0ID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdmFsdWUudGV4dCA9PT0gJ3N0cmluZycgJiYgUGF0aC5pc1BhdGgodmFsdWUucGF0aCk7XG5cbiAgICAgIGNhc2UgJ21lcmdlX25vZGUnOlxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlLnBvc2l0aW9uID09PSAnbnVtYmVyJyAmJiBQYXRoLmlzUGF0aCh2YWx1ZS5wYXRoKSAmJiBpc1BsYWluT2JqZWN0KHZhbHVlLnByb3BlcnRpZXMpO1xuXG4gICAgICBjYXNlICdtb3ZlX25vZGUnOlxuICAgICAgICByZXR1cm4gUGF0aC5pc1BhdGgodmFsdWUucGF0aCkgJiYgUGF0aC5pc1BhdGgodmFsdWUubmV3UGF0aCk7XG5cbiAgICAgIGNhc2UgJ3JlbW92ZV9ub2RlJzpcbiAgICAgICAgcmV0dXJuIFBhdGguaXNQYXRoKHZhbHVlLnBhdGgpICYmIE5vZGUuaXNOb2RlKHZhbHVlLm5vZGUpO1xuXG4gICAgICBjYXNlICdyZW1vdmVfdGV4dCc6XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUub2Zmc2V0ID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdmFsdWUudGV4dCA9PT0gJ3N0cmluZycgJiYgUGF0aC5pc1BhdGgodmFsdWUucGF0aCk7XG5cbiAgICAgIGNhc2UgJ3NldF9ub2RlJzpcbiAgICAgICAgcmV0dXJuIFBhdGguaXNQYXRoKHZhbHVlLnBhdGgpICYmIGlzUGxhaW5PYmplY3QodmFsdWUucHJvcGVydGllcykgJiYgaXNQbGFpbk9iamVjdCh2YWx1ZS5uZXdQcm9wZXJ0aWVzKTtcblxuICAgICAgY2FzZSAnc2V0X3NlbGVjdGlvbic6XG4gICAgICAgIHJldHVybiB2YWx1ZS5wcm9wZXJ0aWVzID09PSBudWxsICYmIFJhbmdlLmlzUmFuZ2UodmFsdWUubmV3UHJvcGVydGllcykgfHwgdmFsdWUubmV3UHJvcGVydGllcyA9PT0gbnVsbCAmJiBSYW5nZS5pc1JhbmdlKHZhbHVlLnByb3BlcnRpZXMpIHx8IGlzUGxhaW5PYmplY3QodmFsdWUucHJvcGVydGllcykgJiYgaXNQbGFpbk9iamVjdCh2YWx1ZS5uZXdQcm9wZXJ0aWVzKTtcblxuICAgICAgY2FzZSAnc3BsaXRfbm9kZSc6XG4gICAgICAgIHJldHVybiBQYXRoLmlzUGF0aCh2YWx1ZS5wYXRoKSAmJiB0eXBlb2YgdmFsdWUucG9zaXRpb24gPT09ICdudW1iZXInICYmIGlzUGxhaW5PYmplY3QodmFsdWUucHJvcGVydGllcyk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhIGxpc3Qgb2YgYE9wZXJhdGlvbmAgb2JqZWN0cy5cclxuICAgKi9cbiAgaXNPcGVyYXRpb25MaXN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmV2ZXJ5KHZhbCA9PiBPcGVyYXRpb24uaXNPcGVyYXRpb24odmFsKSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgb2YgYSB2YWx1ZSBpcyBhIGBTZWxlY3Rpb25PcGVyYXRpb25gIG9iamVjdC5cclxuICAgKi9cbiAgaXNTZWxlY3Rpb25PcGVyYXRpb24odmFsdWUpIHtcbiAgICByZXR1cm4gT3BlcmF0aW9uLmlzT3BlcmF0aW9uKHZhbHVlKSAmJiB2YWx1ZS50eXBlLmVuZHNXaXRoKCdfc2VsZWN0aW9uJyk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgb2YgYSB2YWx1ZSBpcyBhIGBUZXh0T3BlcmF0aW9uYCBvYmplY3QuXHJcbiAgICovXG4gIGlzVGV4dE9wZXJhdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBPcGVyYXRpb24uaXNPcGVyYXRpb24odmFsdWUpICYmIHZhbHVlLnR5cGUuZW5kc1dpdGgoJ190ZXh0Jyk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogSW52ZXJ0IGFuIG9wZXJhdGlvbiwgcmV0dXJuaW5nIGEgbmV3IG9wZXJhdGlvbiB0aGF0IHdpbGwgZXhhY3RseSB1bmRvIHRoZVxyXG4gICAqIG9yaWdpbmFsIHdoZW4gYXBwbGllZC5cclxuICAgKi9cbiAgaW52ZXJzZShvcCkge1xuICAgIHN3aXRjaCAob3AudHlwZSkge1xuICAgICAgY2FzZSAnaW5zZXJ0X25vZGUnOlxuICAgICAgICB7XG4gICAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQkNyhfb2JqZWN0U3ByZWFkJDcoe30sIG9wKSwge30sIHtcbiAgICAgICAgICAgIHR5cGU6ICdyZW1vdmVfbm9kZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdpbnNlcnRfdGV4dCc6XG4gICAgICAgIHtcbiAgICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZCQ3KF9vYmplY3RTcHJlYWQkNyh7fSwgb3ApLCB7fSwge1xuICAgICAgICAgICAgdHlwZTogJ3JlbW92ZV90ZXh0J1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ21lcmdlX25vZGUnOlxuICAgICAgICB7XG4gICAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQkNyhfb2JqZWN0U3ByZWFkJDcoe30sIG9wKSwge30sIHtcbiAgICAgICAgICAgIHR5cGU6ICdzcGxpdF9ub2RlJyxcbiAgICAgICAgICAgIHBhdGg6IFBhdGgucHJldmlvdXMob3AucGF0aClcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdtb3ZlX25vZGUnOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIHtcbiAgICAgICAgICAgIG5ld1BhdGgsXG4gICAgICAgICAgICBwYXRoXG4gICAgICAgICAgfSA9IG9wOyAvLyBQRVJGOiBpbiB0aGlzIGNhc2UgdGhlIG1vdmUgb3BlcmF0aW9uIGlzIGEgbm8tb3AgYW55d2F5cy5cblxuICAgICAgICAgIGlmIChQYXRoLmVxdWFscyhuZXdQYXRoLCBwYXRoKSkge1xuICAgICAgICAgICAgcmV0dXJuIG9wO1xuICAgICAgICAgIH0gLy8gSWYgdGhlIG1vdmUgaGFwcGVucyBjb21wbGV0ZWx5IHdpdGhpbiBhIHNpbmdsZSBwYXJlbnQgdGhlIHBhdGggYW5kXG4gICAgICAgICAgLy8gbmV3UGF0aCBhcmUgc3RhYmxlIHdpdGggcmVzcGVjdCB0byBlYWNoIG90aGVyLlxuXG5cbiAgICAgICAgICBpZiAoUGF0aC5pc1NpYmxpbmcocGF0aCwgbmV3UGF0aCkpIHtcbiAgICAgICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkJDcoX29iamVjdFNwcmVhZCQ3KHt9LCBvcCksIHt9LCB7XG4gICAgICAgICAgICAgIHBhdGg6IG5ld1BhdGgsXG4gICAgICAgICAgICAgIG5ld1BhdGg6IHBhdGhcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gLy8gSWYgdGhlIG1vdmUgZG9lcyBub3QgaGFwcGVuIHdpdGhpbiBhIHNpbmdsZSBwYXJlbnQgaXQgaXMgcG9zc2libGVcbiAgICAgICAgICAvLyBmb3IgdGhlIG1vdmUgdG8gaW1wYWN0IHRoZSB0cnVlIHBhdGggdG8gdGhlIGxvY2F0aW9uIHdoZXJlIHRoZSBub2RlXG4gICAgICAgICAgLy8gd2FzIHJlbW92ZWQgZnJvbSBhbmQgd2hlcmUgaXQgd2FzIGluc2VydGVkLiBXZSBoYXZlIHRvIGFkanVzdCBmb3IgdGhpc1xuICAgICAgICAgIC8vIGFuZCBmaW5kIHRoZSBvcmlnaW5hbCBwYXRoLiBXZSBjYW4gYWNjb21wbGlzaCB0aGlzIChvbmx5IGluIG5vbi1zaWJsaW5nKVxuICAgICAgICAgIC8vIG1vdmVzIGJ5IGxvb2tpbmcgYXQgdGhlIGltcGFjdCBvZiB0aGUgbW92ZSBvcGVyYXRpb24gb24gdGhlIG5vZGVcbiAgICAgICAgICAvLyBhZnRlciB0aGUgb3JpZ2luYWwgbW92ZSBwYXRoLlxuXG5cbiAgICAgICAgICB2YXIgaW52ZXJzZVBhdGggPSBQYXRoLnRyYW5zZm9ybShwYXRoLCBvcCk7XG4gICAgICAgICAgdmFyIGludmVyc2VOZXdQYXRoID0gUGF0aC50cmFuc2Zvcm0oUGF0aC5uZXh0KHBhdGgpLCBvcCk7XG4gICAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQkNyhfb2JqZWN0U3ByZWFkJDcoe30sIG9wKSwge30sIHtcbiAgICAgICAgICAgIHBhdGg6IGludmVyc2VQYXRoLFxuICAgICAgICAgICAgbmV3UGF0aDogaW52ZXJzZU5ld1BhdGhcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdyZW1vdmVfbm9kZSc6XG4gICAgICAgIHtcbiAgICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZCQ3KF9vYmplY3RTcHJlYWQkNyh7fSwgb3ApLCB7fSwge1xuICAgICAgICAgICAgdHlwZTogJ2luc2VydF9ub2RlJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ3JlbW92ZV90ZXh0JzpcbiAgICAgICAge1xuICAgICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkJDcoX29iamVjdFNwcmVhZCQ3KHt9LCBvcCksIHt9LCB7XG4gICAgICAgICAgICB0eXBlOiAnaW5zZXJ0X3RleHQnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAnc2V0X25vZGUnOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIHtcbiAgICAgICAgICAgIHByb3BlcnRpZXMsXG4gICAgICAgICAgICBuZXdQcm9wZXJ0aWVzXG4gICAgICAgICAgfSA9IG9wO1xuICAgICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkJDcoX29iamVjdFNwcmVhZCQ3KHt9LCBvcCksIHt9LCB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBuZXdQcm9wZXJ0aWVzLFxuICAgICAgICAgICAgbmV3UHJvcGVydGllczogcHJvcGVydGllc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ3NldF9zZWxlY3Rpb24nOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IF9wcm9wZXJ0aWVzLFxuICAgICAgICAgICAgbmV3UHJvcGVydGllczogX25ld1Byb3BlcnRpZXNcbiAgICAgICAgICB9ID0gb3A7XG5cbiAgICAgICAgICBpZiAoX3Byb3BlcnRpZXMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQkNyhfb2JqZWN0U3ByZWFkJDcoe30sIG9wKSwge30sIHtcbiAgICAgICAgICAgICAgcHJvcGVydGllczogX25ld1Byb3BlcnRpZXMsXG4gICAgICAgICAgICAgIG5ld1Byb3BlcnRpZXM6IG51bGxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoX25ld1Byb3BlcnRpZXMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQkNyhfb2JqZWN0U3ByZWFkJDcoe30sIG9wKSwge30sIHtcbiAgICAgICAgICAgICAgcHJvcGVydGllczogbnVsbCxcbiAgICAgICAgICAgICAgbmV3UHJvcGVydGllczogX3Byb3BlcnRpZXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZCQ3KF9vYmplY3RTcHJlYWQkNyh7fSwgb3ApLCB7fSwge1xuICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiBfbmV3UHJvcGVydGllcyxcbiAgICAgICAgICAgICAgbmV3UHJvcGVydGllczogX3Byb3BlcnRpZXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdzcGxpdF9ub2RlJzpcbiAgICAgICAge1xuICAgICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkJDcoX29iamVjdFNwcmVhZCQ3KHt9LCBvcCksIHt9LCB7XG4gICAgICAgICAgICB0eXBlOiAnbWVyZ2Vfbm9kZScsXG4gICAgICAgICAgICBwYXRoOiBQYXRoLm5leHQob3AucGF0aClcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG59O1xuXG52YXIgUGF0aCA9IHtcbiAgLyoqXHJcbiAgICogR2V0IGEgbGlzdCBvZiBhbmNlc3RvciBwYXRocyBmb3IgYSBnaXZlbiBwYXRoLlxyXG4gICAqXHJcbiAgICogVGhlIHBhdGhzIGFyZSBzb3J0ZWQgZnJvbSBkZWVwZXN0IHRvIHNoYWxsb3dlc3QgYW5jZXN0b3IuIEhvd2V2ZXIsIGlmIHRoZVxyXG4gICAqIGByZXZlcnNlOiB0cnVlYCBvcHRpb24gaXMgcGFzc2VkLCB0aGV5IGFyZSByZXZlcnNlZC5cclxuICAgKi9cbiAgYW5jZXN0b3JzKHBhdGgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHtcbiAgICAgIHJldmVyc2UgPSBmYWxzZVxuICAgIH0gPSBvcHRpb25zO1xuICAgIHZhciBwYXRocyA9IFBhdGgubGV2ZWxzKHBhdGgsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHJldmVyc2UpIHtcbiAgICAgIHBhdGhzID0gcGF0aHMuc2xpY2UoMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGhzID0gcGF0aHMuc2xpY2UoMCwgLTEpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXRocztcbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIGNvbW1vbiBhbmNlc3RvciBwYXRoIG9mIHR3byBwYXRocy5cclxuICAgKi9cbiAgY29tbW9uKHBhdGgsIGFub3RoZXIpIHtcbiAgICB2YXIgY29tbW9uID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoICYmIGkgPCBhbm90aGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgYXYgPSBwYXRoW2ldO1xuICAgICAgdmFyIGJ2ID0gYW5vdGhlcltpXTtcblxuICAgICAgaWYgKGF2ICE9PSBidikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY29tbW9uLnB1c2goYXYpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21tb247XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ29tcGFyZSBhIHBhdGggdG8gYW5vdGhlciwgcmV0dXJuaW5nIGFuIGludGVnZXIgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBwYXRoXHJcbiAgICogd2FzIGJlZm9yZSwgYXQsIG9yIGFmdGVyIHRoZSBvdGhlci5cclxuICAgKlxyXG4gICAqIE5vdGU6IFR3byBwYXRocyBvZiB1bmVxdWFsIGxlbmd0aCBjYW4gc3RpbGwgcmVjZWl2ZSBhIGAwYCByZXN1bHQgaWYgb25lIGlzXHJcbiAgICogZGlyZWN0bHkgYWJvdmUgb3IgYmVsb3cgdGhlIG90aGVyLiBJZiB5b3Ugd2FudCBleGFjdCBtYXRjaGluZywgdXNlXHJcbiAgICogW1tQYXRoLmVxdWFsc11dIGluc3RlYWQuXHJcbiAgICovXG4gIGNvbXBhcmUocGF0aCwgYW5vdGhlcikge1xuICAgIHZhciBtaW4gPSBNYXRoLm1pbihwYXRoLmxlbmd0aCwgYW5vdGhlci5sZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtaW47IGkrKykge1xuICAgICAgaWYgKHBhdGhbaV0gPCBhbm90aGVyW2ldKSByZXR1cm4gLTE7XG4gICAgICBpZiAocGF0aFtpXSA+IGFub3RoZXJbaV0pIHJldHVybiAxO1xuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgcGF0aCBlbmRzIGFmdGVyIG9uZSBvZiB0aGUgaW5kZXhlcyBpbiBhbm90aGVyLlxyXG4gICAqL1xuICBlbmRzQWZ0ZXIocGF0aCwgYW5vdGhlcikge1xuICAgIHZhciBpID0gcGF0aC5sZW5ndGggLSAxO1xuICAgIHZhciBhcyA9IHBhdGguc2xpY2UoMCwgaSk7XG4gICAgdmFyIGJzID0gYW5vdGhlci5zbGljZSgwLCBpKTtcbiAgICB2YXIgYXYgPSBwYXRoW2ldO1xuICAgIHZhciBidiA9IGFub3RoZXJbaV07XG4gICAgcmV0dXJuIFBhdGguZXF1YWxzKGFzLCBicykgJiYgYXYgPiBidjtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHBhdGggZW5kcyBhdCBvbmUgb2YgdGhlIGluZGV4ZXMgaW4gYW5vdGhlci5cclxuICAgKi9cbiAgZW5kc0F0KHBhdGgsIGFub3RoZXIpIHtcbiAgICB2YXIgaSA9IHBhdGgubGVuZ3RoO1xuICAgIHZhciBhcyA9IHBhdGguc2xpY2UoMCwgaSk7XG4gICAgdmFyIGJzID0gYW5vdGhlci5zbGljZSgwLCBpKTtcbiAgICByZXR1cm4gUGF0aC5lcXVhbHMoYXMsIGJzKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHBhdGggZW5kcyBiZWZvcmUgb25lIG9mIHRoZSBpbmRleGVzIGluIGFub3RoZXIuXHJcbiAgICovXG4gIGVuZHNCZWZvcmUocGF0aCwgYW5vdGhlcikge1xuICAgIHZhciBpID0gcGF0aC5sZW5ndGggLSAxO1xuICAgIHZhciBhcyA9IHBhdGguc2xpY2UoMCwgaSk7XG4gICAgdmFyIGJzID0gYW5vdGhlci5zbGljZSgwLCBpKTtcbiAgICB2YXIgYXYgPSBwYXRoW2ldO1xuICAgIHZhciBidiA9IGFub3RoZXJbaV07XG4gICAgcmV0dXJuIFBhdGguZXF1YWxzKGFzLCBicykgJiYgYXYgPCBidjtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHBhdGggaXMgZXhhY3RseSBlcXVhbCB0byBhbm90aGVyLlxyXG4gICAqL1xuICBlcXVhbHMocGF0aCwgYW5vdGhlcikge1xuICAgIHJldHVybiBwYXRoLmxlbmd0aCA9PT0gYW5vdGhlci5sZW5ndGggJiYgcGF0aC5ldmVyeSgobiwgaSkgPT4gbiA9PT0gYW5vdGhlcltpXSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgdGhlIHBhdGggb2YgcHJldmlvdXMgc2libGluZyBub2RlIGV4aXN0c1xyXG4gICAqL1xuICBoYXNQcmV2aW91cyhwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGhbcGF0aC5sZW5ndGggLSAxXSA+IDA7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBwYXRoIGlzIGFmdGVyIGFub3RoZXIuXHJcbiAgICovXG4gIGlzQWZ0ZXIocGF0aCwgYW5vdGhlcikge1xuICAgIHJldHVybiBQYXRoLmNvbXBhcmUocGF0aCwgYW5vdGhlcikgPT09IDE7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBwYXRoIGlzIGFuIGFuY2VzdG9yIG9mIGFub3RoZXIuXHJcbiAgICovXG4gIGlzQW5jZXN0b3IocGF0aCwgYW5vdGhlcikge1xuICAgIHJldHVybiBwYXRoLmxlbmd0aCA8IGFub3RoZXIubGVuZ3RoICYmIFBhdGguY29tcGFyZShwYXRoLCBhbm90aGVyKSA9PT0gMDtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHBhdGggaXMgYmVmb3JlIGFub3RoZXIuXHJcbiAgICovXG4gIGlzQmVmb3JlKHBhdGgsIGFub3RoZXIpIHtcbiAgICByZXR1cm4gUGF0aC5jb21wYXJlKHBhdGgsIGFub3RoZXIpID09PSAtMTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHBhdGggaXMgYSBjaGlsZCBvZiBhbm90aGVyLlxyXG4gICAqL1xuICBpc0NoaWxkKHBhdGgsIGFub3RoZXIpIHtcbiAgICByZXR1cm4gcGF0aC5sZW5ndGggPT09IGFub3RoZXIubGVuZ3RoICsgMSAmJiBQYXRoLmNvbXBhcmUocGF0aCwgYW5vdGhlcikgPT09IDA7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBwYXRoIGlzIGVxdWFsIHRvIG9yIGFuIGFuY2VzdG9yIG9mIGFub3RoZXIuXHJcbiAgICovXG4gIGlzQ29tbW9uKHBhdGgsIGFub3RoZXIpIHtcbiAgICByZXR1cm4gcGF0aC5sZW5ndGggPD0gYW5vdGhlci5sZW5ndGggJiYgUGF0aC5jb21wYXJlKHBhdGgsIGFub3RoZXIpID09PSAwO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgcGF0aCBpcyBhIGRlc2NlbmRhbnQgb2YgYW5vdGhlci5cclxuICAgKi9cbiAgaXNEZXNjZW5kYW50KHBhdGgsIGFub3RoZXIpIHtcbiAgICByZXR1cm4gcGF0aC5sZW5ndGggPiBhbm90aGVyLmxlbmd0aCAmJiBQYXRoLmNvbXBhcmUocGF0aCwgYW5vdGhlcikgPT09IDA7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBwYXRoIGlzIHRoZSBwYXJlbnQgb2YgYW5vdGhlci5cclxuICAgKi9cbiAgaXNQYXJlbnQocGF0aCwgYW5vdGhlcikge1xuICAgIHJldHVybiBwYXRoLmxlbmd0aCArIDEgPT09IGFub3RoZXIubGVuZ3RoICYmIFBhdGguY29tcGFyZShwYXRoLCBhbm90aGVyKSA9PT0gMDtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpcyBhIHZhbHVlIGltcGxlbWVudHMgdGhlIGBQYXRoYCBpbnRlcmZhY2UuXHJcbiAgICovXG4gIGlzUGF0aCh2YWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiAodmFsdWUubGVuZ3RoID09PSAwIHx8IHR5cGVvZiB2YWx1ZVswXSA9PT0gJ251bWJlcicpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgcGF0aCBpcyBhIHNpYmxpbmcgb2YgYW5vdGhlci5cclxuICAgKi9cbiAgaXNTaWJsaW5nKHBhdGgsIGFub3RoZXIpIHtcbiAgICBpZiAocGF0aC5sZW5ndGggIT09IGFub3RoZXIubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGFzID0gcGF0aC5zbGljZSgwLCAtMSk7XG4gICAgdmFyIGJzID0gYW5vdGhlci5zbGljZSgwLCAtMSk7XG4gICAgdmFyIGFsID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuICAgIHZhciBibCA9IGFub3RoZXJbYW5vdGhlci5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4gYWwgIT09IGJsICYmIFBhdGguZXF1YWxzKGFzLCBicyk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IGEgbGlzdCBvZiBwYXRocyBhdCBldmVyeSBsZXZlbCBkb3duIHRvIGEgcGF0aC4gTm90ZTogdGhpcyBpcyB0aGUgc2FtZVxyXG4gICAqIGFzIGBQYXRoLmFuY2VzdG9yc2AsIGJ1dCBpbmNsdWRpbmcgdGhlIHBhdGggaXRzZWxmLlxyXG4gICAqXHJcbiAgICogVGhlIHBhdGhzIGFyZSBzb3J0ZWQgZnJvbSBzaGFsbG93ZXN0IHRvIGRlZXBlc3QuIEhvd2V2ZXIsIGlmIHRoZSBgcmV2ZXJzZTpcclxuICAgKiB0cnVlYCBvcHRpb24gaXMgcGFzc2VkLCB0aGV5IGFyZSByZXZlcnNlZC5cclxuICAgKi9cbiAgbGV2ZWxzKHBhdGgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHtcbiAgICAgIHJldmVyc2UgPSBmYWxzZVxuICAgIH0gPSBvcHRpb25zO1xuICAgIHZhciBsaXN0ID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaXN0LnB1c2gocGF0aC5zbGljZSgwLCBpKSk7XG4gICAgfVxuXG4gICAgaWYgKHJldmVyc2UpIHtcbiAgICAgIGxpc3QucmV2ZXJzZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBsaXN0O1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdpdmVuIGEgcGF0aCwgZ2V0IHRoZSBwYXRoIHRvIHRoZSBuZXh0IHNpYmxpbmcgbm9kZS5cclxuICAgKi9cbiAgbmV4dChwYXRoKSB7XG4gICAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZ2V0IHRoZSBuZXh0IHBhdGggb2YgYSByb290IHBhdGggW1wiLmNvbmNhdChwYXRoLCBcIl0sIGJlY2F1c2UgaXQgaGFzIG5vIG5leHQgaW5kZXguXCIpKTtcbiAgICB9XG5cbiAgICB2YXIgbGFzdCA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4gcGF0aC5zbGljZSgwLCAtMSkuY29uY2F0KGxhc3QgKyAxKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBHaXZlbiBhIHBhdGgsIHJldHVybiBhIG5ldyBwYXRoIHJlZmVycmluZyB0byB0aGUgcGFyZW50IG5vZGUgYWJvdmUgaXQuXHJcbiAgICovXG4gIHBhcmVudChwYXRoKSB7XG4gICAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZ2V0IHRoZSBwYXJlbnQgcGF0aCBvZiB0aGUgcm9vdCBwYXRoIFtcIi5jb25jYXQocGF0aCwgXCJdLlwiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGguc2xpY2UoMCwgLTEpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdpdmVuIGEgcGF0aCwgZ2V0IHRoZSBwYXRoIHRvIHRoZSBwcmV2aW91cyBzaWJsaW5nIG5vZGUuXHJcbiAgICovXG4gIHByZXZpb3VzKHBhdGgpIHtcbiAgICBpZiAocGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBnZXQgdGhlIHByZXZpb3VzIHBhdGggb2YgYSByb290IHBhdGggW1wiLmNvbmNhdChwYXRoLCBcIl0sIGJlY2F1c2UgaXQgaGFzIG5vIHByZXZpb3VzIGluZGV4LlwiKSk7XG4gICAgfVxuXG4gICAgdmFyIGxhc3QgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAobGFzdCA8PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZ2V0IHRoZSBwcmV2aW91cyBwYXRoIG9mIGEgZmlyc3QgY2hpbGQgcGF0aCBbXCIuY29uY2F0KHBhdGgsIFwiXSBiZWNhdXNlIGl0IHdvdWxkIHJlc3VsdCBpbiBhIG5lZ2F0aXZlIGluZGV4LlwiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGguc2xpY2UoMCwgLTEpLmNvbmNhdChsYXN0IC0gMSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IGEgcGF0aCByZWxhdGl2ZSB0byBhbiBhbmNlc3Rvci5cclxuICAgKi9cbiAgcmVsYXRpdmUocGF0aCwgYW5jZXN0b3IpIHtcbiAgICBpZiAoIVBhdGguaXNBbmNlc3RvcihhbmNlc3RvciwgcGF0aCkgJiYgIVBhdGguZXF1YWxzKHBhdGgsIGFuY2VzdG9yKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGdldCB0aGUgcmVsYXRpdmUgcGF0aCBvZiBbXCIuY29uY2F0KHBhdGgsIFwiXSBpbnNpZGUgYW5jZXN0b3IgW1wiKS5jb25jYXQoYW5jZXN0b3IsIFwiXSwgYmVjYXVzZSBpdCBpcyBub3QgYWJvdmUgb3IgZXF1YWwgdG8gdGhlIHBhdGguXCIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0aC5zbGljZShhbmNlc3Rvci5sZW5ndGgpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIFRyYW5zZm9ybSBhIHBhdGggYnkgYW4gb3BlcmF0aW9uLlxyXG4gICAqL1xuICB0cmFuc2Zvcm0ocGF0aCwgb3BlcmF0aW9uKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIHJldHVybiBwcm9kdWNlKHBhdGgsIHAgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgYWZmaW5pdHkgPSAnZm9yd2FyZCdcbiAgICAgIH0gPSBvcHRpb25zOyAvLyBQRVJGOiBFeGl0IGVhcmx5IGlmIHRoZSBvcGVyYXRpb24gaXMgZ3VhcmFudGVlZCBub3QgdG8gaGF2ZSBhbiBlZmZlY3QuXG5cbiAgICAgIGlmICghcGF0aCB8fCAocGF0aCA9PT0gbnVsbCB8fCBwYXRoID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXRoLmxlbmd0aCkgPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAocCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChvcGVyYXRpb24udHlwZSkge1xuICAgICAgICBjYXNlICdpbnNlcnRfbm9kZSc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIHtcbiAgICAgICAgICAgICAgcGF0aDogb3BcbiAgICAgICAgICAgIH0gPSBvcGVyYXRpb247XG5cbiAgICAgICAgICAgIGlmIChQYXRoLmVxdWFscyhvcCwgcCkgfHwgUGF0aC5lbmRzQmVmb3JlKG9wLCBwKSB8fCBQYXRoLmlzQW5jZXN0b3Iob3AsIHApKSB7XG4gICAgICAgICAgICAgIHBbb3AubGVuZ3RoIC0gMV0gKz0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ3JlbW92ZV9ub2RlJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIge1xuICAgICAgICAgICAgICBwYXRoOiBfb3BcbiAgICAgICAgICAgIH0gPSBvcGVyYXRpb247XG5cbiAgICAgICAgICAgIGlmIChQYXRoLmVxdWFscyhfb3AsIHApIHx8IFBhdGguaXNBbmNlc3Rvcihfb3AsIHApKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChQYXRoLmVuZHNCZWZvcmUoX29wLCBwKSkge1xuICAgICAgICAgICAgICBwW19vcC5sZW5ndGggLSAxXSAtPSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnbWVyZ2Vfbm9kZSc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIHtcbiAgICAgICAgICAgICAgcGF0aDogX29wMixcbiAgICAgICAgICAgICAgcG9zaXRpb25cbiAgICAgICAgICAgIH0gPSBvcGVyYXRpb247XG5cbiAgICAgICAgICAgIGlmIChQYXRoLmVxdWFscyhfb3AyLCBwKSB8fCBQYXRoLmVuZHNCZWZvcmUoX29wMiwgcCkpIHtcbiAgICAgICAgICAgICAgcFtfb3AyLmxlbmd0aCAtIDFdIC09IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFBhdGguaXNBbmNlc3Rvcihfb3AyLCBwKSkge1xuICAgICAgICAgICAgICBwW19vcDIubGVuZ3RoIC0gMV0gLT0gMTtcbiAgICAgICAgICAgICAgcFtfb3AyLmxlbmd0aF0gKz0gcG9zaXRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdzcGxpdF9ub2RlJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIge1xuICAgICAgICAgICAgICBwYXRoOiBfb3AzLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogX3Bvc2l0aW9uXG4gICAgICAgICAgICB9ID0gb3BlcmF0aW9uO1xuXG4gICAgICAgICAgICBpZiAoUGF0aC5lcXVhbHMoX29wMywgcCkpIHtcbiAgICAgICAgICAgICAgaWYgKGFmZmluaXR5ID09PSAnZm9yd2FyZCcpIHtcbiAgICAgICAgICAgICAgICBwW3AubGVuZ3RoIC0gMV0gKz0gMTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChhZmZpbml0eSA9PT0gJ2JhY2t3YXJkJykgOyBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChQYXRoLmVuZHNCZWZvcmUoX29wMywgcCkpIHtcbiAgICAgICAgICAgICAgcFtfb3AzLmxlbmd0aCAtIDFdICs9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFBhdGguaXNBbmNlc3Rvcihfb3AzLCBwKSAmJiBwYXRoW19vcDMubGVuZ3RoXSA+PSBfcG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgcFtfb3AzLmxlbmd0aCAtIDFdICs9IDE7XG4gICAgICAgICAgICAgIHBbX29wMy5sZW5ndGhdIC09IF9wb3NpdGlvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ21vdmVfbm9kZSc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIHtcbiAgICAgICAgICAgICAgcGF0aDogX29wNCxcbiAgICAgICAgICAgICAgbmV3UGF0aDogb25wXG4gICAgICAgICAgICB9ID0gb3BlcmF0aW9uOyAvLyBJZiB0aGUgb2xkIGFuZCBuZXcgcGF0aCBhcmUgdGhlIHNhbWUsIGl0J3MgYSBuby1vcC5cblxuICAgICAgICAgICAgaWYgKFBhdGguZXF1YWxzKF9vcDQsIG9ucCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoUGF0aC5pc0FuY2VzdG9yKF9vcDQsIHApIHx8IFBhdGguZXF1YWxzKF9vcDQsIHApKSB7XG4gICAgICAgICAgICAgIHZhciBjb3B5ID0gb25wLnNsaWNlKCk7XG5cbiAgICAgICAgICAgICAgaWYgKFBhdGguZW5kc0JlZm9yZShfb3A0LCBvbnApICYmIF9vcDQubGVuZ3RoIDwgb25wLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvcHlbX29wNC5sZW5ndGggLSAxXSAtPSAxO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGNvcHkuY29uY2F0KHAuc2xpY2UoX29wNC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUGF0aC5pc1NpYmxpbmcoX29wNCwgb25wKSAmJiAoUGF0aC5pc0FuY2VzdG9yKG9ucCwgcCkgfHwgUGF0aC5lcXVhbHMob25wLCBwKSkpIHtcbiAgICAgICAgICAgICAgaWYgKFBhdGguZW5kc0JlZm9yZShfb3A0LCBwKSkge1xuICAgICAgICAgICAgICAgIHBbX29wNC5sZW5ndGggLSAxXSAtPSAxO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBbX29wNC5sZW5ndGggLSAxXSArPSAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFBhdGguZW5kc0JlZm9yZShvbnAsIHApIHx8IFBhdGguZXF1YWxzKG9ucCwgcCkgfHwgUGF0aC5pc0FuY2VzdG9yKG9ucCwgcCkpIHtcbiAgICAgICAgICAgICAgaWYgKFBhdGguZW5kc0JlZm9yZShfb3A0LCBwKSkge1xuICAgICAgICAgICAgICAgIHBbX29wNC5sZW5ndGggLSAxXSAtPSAxO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcFtvbnAubGVuZ3RoIC0gMV0gKz0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUGF0aC5lbmRzQmVmb3JlKF9vcDQsIHApKSB7XG4gICAgICAgICAgICAgIGlmIChQYXRoLmVxdWFscyhvbnAsIHApKSB7XG4gICAgICAgICAgICAgICAgcFtvbnAubGVuZ3RoIC0gMV0gKz0gMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHBbX29wNC5sZW5ndGggLSAxXSAtPSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufTtcblxudmFyIFBhdGhSZWYgPSB7XG4gIC8qKlxyXG4gICAqIFRyYW5zZm9ybSB0aGUgcGF0aCByZWYncyBjdXJyZW50IHZhbHVlIGJ5IGFuIG9wZXJhdGlvbi5cclxuICAgKi9cbiAgdHJhbnNmb3JtKHJlZiwgb3ApIHtcbiAgICB2YXIge1xuICAgICAgY3VycmVudCxcbiAgICAgIGFmZmluaXR5XG4gICAgfSA9IHJlZjtcblxuICAgIGlmIChjdXJyZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcGF0aCA9IFBhdGgudHJhbnNmb3JtKGN1cnJlbnQsIG9wLCB7XG4gICAgICBhZmZpbml0eVxuICAgIH0pO1xuICAgIHJlZi5jdXJyZW50ID0gcGF0aDtcblxuICAgIGlmIChwYXRoID09IG51bGwpIHtcbiAgICAgIHJlZi51bnJlZigpO1xuICAgIH1cbiAgfVxuXG59O1xuXG5mdW5jdGlvbiBvd25LZXlzJDYob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDYodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQ2KE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkNihPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cbnZhciBQb2ludCA9IHtcbiAgLyoqXHJcbiAgICogQ29tcGFyZSBhIHBvaW50IHRvIGFub3RoZXIsIHJldHVybmluZyBhbiBpbnRlZ2VyIGluZGljYXRpbmcgd2hldGhlciB0aGVcclxuICAgKiBwb2ludCB3YXMgYmVmb3JlLCBhdCwgb3IgYWZ0ZXIgdGhlIG90aGVyLlxyXG4gICAqL1xuICBjb21wYXJlKHBvaW50LCBhbm90aGVyKSB7XG4gICAgdmFyIHJlc3VsdCA9IFBhdGguY29tcGFyZShwb2ludC5wYXRoLCBhbm90aGVyLnBhdGgpO1xuXG4gICAgaWYgKHJlc3VsdCA9PT0gMCkge1xuICAgICAgaWYgKHBvaW50Lm9mZnNldCA8IGFub3RoZXIub2Zmc2V0KSByZXR1cm4gLTE7XG4gICAgICBpZiAocG9pbnQub2Zmc2V0ID4gYW5vdGhlci5vZmZzZXQpIHJldHVybiAxO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHBvaW50IGlzIGFmdGVyIGFub3RoZXIuXHJcbiAgICovXG4gIGlzQWZ0ZXIocG9pbnQsIGFub3RoZXIpIHtcbiAgICByZXR1cm4gUG9pbnQuY29tcGFyZShwb2ludCwgYW5vdGhlcikgPT09IDE7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBwb2ludCBpcyBiZWZvcmUgYW5vdGhlci5cclxuICAgKi9cbiAgaXNCZWZvcmUocG9pbnQsIGFub3RoZXIpIHtcbiAgICByZXR1cm4gUG9pbnQuY29tcGFyZShwb2ludCwgYW5vdGhlcikgPT09IC0xO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgcG9pbnQgaXMgZXhhY3RseSBlcXVhbCB0byBhbm90aGVyLlxyXG4gICAqL1xuICBlcXVhbHMocG9pbnQsIGFub3RoZXIpIHtcbiAgICAvLyBQRVJGOiBlbnN1cmUgdGhlIG9mZnNldHMgYXJlIGVxdWFsIGZpcnN0IHNpbmNlIHRoZXkgYXJlIGNoZWFwZXIgdG8gY2hlY2suXG4gICAgcmV0dXJuIHBvaW50Lm9mZnNldCA9PT0gYW5vdGhlci5vZmZzZXQgJiYgUGF0aC5lcXVhbHMocG9pbnQucGF0aCwgYW5vdGhlci5wYXRoKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGltcGxlbWVudHMgdGhlIGBQb2ludGAgaW50ZXJmYWNlLlxyXG4gICAqL1xuICBpc1BvaW50KHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzUGxhaW5PYmplY3QodmFsdWUpICYmIHR5cGVvZiB2YWx1ZS5vZmZzZXQgPT09ICdudW1iZXInICYmIFBhdGguaXNQYXRoKHZhbHVlLnBhdGgpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIFRyYW5zZm9ybSBhIHBvaW50IGJ5IGFuIG9wZXJhdGlvbi5cclxuICAgKi9cbiAgdHJhbnNmb3JtKHBvaW50LCBvcCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICByZXR1cm4gcHJvZHVjZShwb2ludCwgcCA9PiB7XG4gICAgICBpZiAocCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHtcbiAgICAgICAgYWZmaW5pdHkgPSAnZm9yd2FyZCdcbiAgICAgIH0gPSBvcHRpb25zO1xuICAgICAgdmFyIHtcbiAgICAgICAgcGF0aCxcbiAgICAgICAgb2Zmc2V0XG4gICAgICB9ID0gcDtcblxuICAgICAgc3dpdGNoIChvcC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2luc2VydF9ub2RlJzpcbiAgICAgICAgY2FzZSAnbW92ZV9ub2RlJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwLnBhdGggPSBQYXRoLnRyYW5zZm9ybShwYXRoLCBvcCwgb3B0aW9ucyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnaW5zZXJ0X3RleHQnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlmIChQYXRoLmVxdWFscyhvcC5wYXRoLCBwYXRoKSAmJiBvcC5vZmZzZXQgPD0gb2Zmc2V0KSB7XG4gICAgICAgICAgICAgIHAub2Zmc2V0ICs9IG9wLnRleHQubGVuZ3RoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnbWVyZ2Vfbm9kZSc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgaWYgKFBhdGguZXF1YWxzKG9wLnBhdGgsIHBhdGgpKSB7XG4gICAgICAgICAgICAgIHAub2Zmc2V0ICs9IG9wLnBvc2l0aW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwLnBhdGggPSBQYXRoLnRyYW5zZm9ybShwYXRoLCBvcCwgb3B0aW9ucyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAncmVtb3ZlX3RleHQnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlmIChQYXRoLmVxdWFscyhvcC5wYXRoLCBwYXRoKSAmJiBvcC5vZmZzZXQgPD0gb2Zmc2V0KSB7XG4gICAgICAgICAgICAgIHAub2Zmc2V0IC09IE1hdGgubWluKG9mZnNldCAtIG9wLm9mZnNldCwgb3AudGV4dC5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAncmVtb3ZlX25vZGUnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlmIChQYXRoLmVxdWFscyhvcC5wYXRoLCBwYXRoKSB8fCBQYXRoLmlzQW5jZXN0b3Iob3AucGF0aCwgcGF0aCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAucGF0aCA9IFBhdGgudHJhbnNmb3JtKHBhdGgsIG9wLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdzcGxpdF9ub2RlJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZiAoUGF0aC5lcXVhbHMob3AucGF0aCwgcGF0aCkpIHtcbiAgICAgICAgICAgICAgaWYgKG9wLnBvc2l0aW9uID09PSBvZmZzZXQgJiYgYWZmaW5pdHkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wLnBvc2l0aW9uIDwgb2Zmc2V0IHx8IG9wLnBvc2l0aW9uID09PSBvZmZzZXQgJiYgYWZmaW5pdHkgPT09ICdmb3J3YXJkJykge1xuICAgICAgICAgICAgICAgIHAub2Zmc2V0IC09IG9wLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHAucGF0aCA9IFBhdGgudHJhbnNmb3JtKHBhdGgsIG9wLCBfb2JqZWN0U3ByZWFkJDYoX29iamVjdFNwcmVhZCQ2KHt9LCBvcHRpb25zKSwge30sIHtcbiAgICAgICAgICAgICAgICAgIGFmZmluaXR5OiAnZm9yd2FyZCdcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHAucGF0aCA9IFBhdGgudHJhbnNmb3JtKHBhdGgsIG9wLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn07XG5cbnZhciBQb2ludFJlZiA9IHtcbiAgLyoqXHJcbiAgICogVHJhbnNmb3JtIHRoZSBwb2ludCByZWYncyBjdXJyZW50IHZhbHVlIGJ5IGFuIG9wZXJhdGlvbi5cclxuICAgKi9cbiAgdHJhbnNmb3JtKHJlZiwgb3ApIHtcbiAgICB2YXIge1xuICAgICAgY3VycmVudCxcbiAgICAgIGFmZmluaXR5XG4gICAgfSA9IHJlZjtcblxuICAgIGlmIChjdXJyZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcG9pbnQgPSBQb2ludC50cmFuc2Zvcm0oY3VycmVudCwgb3AsIHtcbiAgICAgIGFmZmluaXR5XG4gICAgfSk7XG4gICAgcmVmLmN1cnJlbnQgPSBwb2ludDtcblxuICAgIGlmIChwb2ludCA9PSBudWxsKSB7XG4gICAgICByZWYudW5yZWYoKTtcbiAgICB9XG4gIH1cblxufTtcblxudmFyIF9leGNsdWRlZCQyID0gW1wiYW5jaG9yXCIsIFwiZm9jdXNcIl07XG5cbmZ1bmN0aW9uIG93bktleXMkNShvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgeyBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IH0ga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkNSh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzJDUoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyQ1KE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxudmFyIFJhbmdlID0ge1xuICAvKipcclxuICAgKiBHZXQgdGhlIHN0YXJ0IGFuZCBlbmQgcG9pbnRzIG9mIGEgcmFuZ2UsIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IGFwcGVhclxyXG4gICAqIGluIHRoZSBkb2N1bWVudC5cclxuICAgKi9cbiAgZWRnZXMocmFuZ2UpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHtcbiAgICAgIHJldmVyc2UgPSBmYWxzZVxuICAgIH0gPSBvcHRpb25zO1xuICAgIHZhciB7XG4gICAgICBhbmNob3IsXG4gICAgICBmb2N1c1xuICAgIH0gPSByYW5nZTtcbiAgICByZXR1cm4gUmFuZ2UuaXNCYWNrd2FyZChyYW5nZSkgPT09IHJldmVyc2UgPyBbYW5jaG9yLCBmb2N1c10gOiBbZm9jdXMsIGFuY2hvcl07XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBlbmQgcG9pbnQgb2YgYSByYW5nZS5cclxuICAgKi9cbiAgZW5kKHJhbmdlKSB7XG4gICAgdmFyIFssIGVuZF0gPSBSYW5nZS5lZGdlcyhyYW5nZSk7XG4gICAgcmV0dXJuIGVuZDtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHJhbmdlIGlzIGV4YWN0bHkgZXF1YWwgdG8gYW5vdGhlci5cclxuICAgKi9cbiAgZXF1YWxzKHJhbmdlLCBhbm90aGVyKSB7XG4gICAgcmV0dXJuIFBvaW50LmVxdWFscyhyYW5nZS5hbmNob3IsIGFub3RoZXIuYW5jaG9yKSAmJiBQb2ludC5lcXVhbHMocmFuZ2UuZm9jdXMsIGFub3RoZXIuZm9jdXMpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgcmFuZ2UgaW5jbHVkZXMgYSBwYXRoLCBhIHBvaW50IG9yIHBhcnQgb2YgYW5vdGhlciByYW5nZS5cclxuICAgKi9cbiAgaW5jbHVkZXMocmFuZ2UsIHRhcmdldCkge1xuICAgIGlmIChSYW5nZS5pc1JhbmdlKHRhcmdldCkpIHtcbiAgICAgIGlmIChSYW5nZS5pbmNsdWRlcyhyYW5nZSwgdGFyZ2V0LmFuY2hvcikgfHwgUmFuZ2UuaW5jbHVkZXMocmFuZ2UsIHRhcmdldC5mb2N1cykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBbcnMsIHJlXSA9IFJhbmdlLmVkZ2VzKHJhbmdlKTtcbiAgICAgIHZhciBbdHMsIHRlXSA9IFJhbmdlLmVkZ2VzKHRhcmdldCk7XG4gICAgICByZXR1cm4gUG9pbnQuaXNCZWZvcmUocnMsIHRzKSAmJiBQb2ludC5pc0FmdGVyKHJlLCB0ZSk7XG4gICAgfVxuXG4gICAgdmFyIFtzdGFydCwgZW5kXSA9IFJhbmdlLmVkZ2VzKHJhbmdlKTtcbiAgICB2YXIgaXNBZnRlclN0YXJ0ID0gZmFsc2U7XG4gICAgdmFyIGlzQmVmb3JlRW5kID0gZmFsc2U7XG5cbiAgICBpZiAoUG9pbnQuaXNQb2ludCh0YXJnZXQpKSB7XG4gICAgICBpc0FmdGVyU3RhcnQgPSBQb2ludC5jb21wYXJlKHRhcmdldCwgc3RhcnQpID49IDA7XG4gICAgICBpc0JlZm9yZUVuZCA9IFBvaW50LmNvbXBhcmUodGFyZ2V0LCBlbmQpIDw9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlzQWZ0ZXJTdGFydCA9IFBhdGguY29tcGFyZSh0YXJnZXQsIHN0YXJ0LnBhdGgpID49IDA7XG4gICAgICBpc0JlZm9yZUVuZCA9IFBhdGguY29tcGFyZSh0YXJnZXQsIGVuZC5wYXRoKSA8PSAwO1xuICAgIH1cblxuICAgIHJldHVybiBpc0FmdGVyU3RhcnQgJiYgaXNCZWZvcmVFbmQ7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBpbnRlcnNlY3Rpb24gb2YgYSByYW5nZSB3aXRoIGFub3RoZXIuXHJcbiAgICovXG4gIGludGVyc2VjdGlvbihyYW5nZSwgYW5vdGhlcikge1xuICAgIHZhciByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHJhbmdlLCBfZXhjbHVkZWQkMik7XG5cbiAgICB2YXIgW3MxLCBlMV0gPSBSYW5nZS5lZGdlcyhyYW5nZSk7XG4gICAgdmFyIFtzMiwgZTJdID0gUmFuZ2UuZWRnZXMoYW5vdGhlcik7XG4gICAgdmFyIHN0YXJ0ID0gUG9pbnQuaXNCZWZvcmUoczEsIHMyKSA/IHMyIDogczE7XG4gICAgdmFyIGVuZCA9IFBvaW50LmlzQmVmb3JlKGUxLCBlMikgPyBlMSA6IGUyO1xuXG4gICAgaWYgKFBvaW50LmlzQmVmb3JlKGVuZCwgc3RhcnQpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQkNSh7XG4gICAgICAgIGFuY2hvcjogc3RhcnQsXG4gICAgICAgIGZvY3VzOiBlbmRcbiAgICAgIH0sIHJlc3QpO1xuICAgIH1cbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHJhbmdlIGlzIGJhY2t3YXJkLCBtZWFuaW5nIHRoYXQgaXRzIGFuY2hvciBwb2ludCBhcHBlYXJzIGluIHRoZVxyXG4gICAqIGRvY3VtZW50IF9hZnRlcl8gaXRzIGZvY3VzIHBvaW50LlxyXG4gICAqL1xuICBpc0JhY2t3YXJkKHJhbmdlKSB7XG4gICAgdmFyIHtcbiAgICAgIGFuY2hvcixcbiAgICAgIGZvY3VzXG4gICAgfSA9IHJhbmdlO1xuICAgIHJldHVybiBQb2ludC5pc0FmdGVyKGFuY2hvciwgZm9jdXMpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgcmFuZ2UgaXMgY29sbGFwc2VkLCBtZWFuaW5nIHRoYXQgYm90aCBpdHMgYW5jaG9yIGFuZCBmb2N1c1xyXG4gICAqIHBvaW50cyByZWZlciB0byB0aGUgZXhhY3Qgc2FtZSBwb3NpdGlvbiBpbiB0aGUgZG9jdW1lbnQuXHJcbiAgICovXG4gIGlzQ29sbGFwc2VkKHJhbmdlKSB7XG4gICAgdmFyIHtcbiAgICAgIGFuY2hvcixcbiAgICAgIGZvY3VzXG4gICAgfSA9IHJhbmdlO1xuICAgIHJldHVybiBQb2ludC5lcXVhbHMoYW5jaG9yLCBmb2N1cyk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSByYW5nZSBpcyBleHBhbmRlZC5cclxuICAgKlxyXG4gICAqIFRoaXMgaXMgdGhlIG9wcG9zaXRlIG9mIFtbUmFuZ2UuaXNDb2xsYXBzZWRdXSBhbmQgaXMgcHJvdmlkZWQgZm9yIGxlZ2liaWxpdHkuXHJcbiAgICovXG4gIGlzRXhwYW5kZWQocmFuZ2UpIHtcbiAgICByZXR1cm4gIVJhbmdlLmlzQ29sbGFwc2VkKHJhbmdlKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHJhbmdlIGlzIGZvcndhcmQuXHJcbiAgICpcclxuICAgKiBUaGlzIGlzIHRoZSBvcHBvc2l0ZSBvZiBbW1JhbmdlLmlzQmFja3dhcmRdXSBhbmQgaXMgcHJvdmlkZWQgZm9yIGxlZ2liaWxpdHkuXHJcbiAgICovXG4gIGlzRm9yd2FyZChyYW5nZSkge1xuICAgIHJldHVybiAhUmFuZ2UuaXNCYWNrd2FyZChyYW5nZSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSB2YWx1ZSBpbXBsZW1lbnRzIHRoZSBbW1JhbmdlXV0gaW50ZXJmYWNlLlxyXG4gICAqL1xuICBpc1JhbmdlKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzUGxhaW5PYmplY3QodmFsdWUpICYmIFBvaW50LmlzUG9pbnQodmFsdWUuYW5jaG9yKSAmJiBQb2ludC5pc1BvaW50KHZhbHVlLmZvY3VzKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBJdGVyYXRlIHRocm91Z2ggYWxsIG9mIHRoZSBwb2ludCBlbnRyaWVzIGluIGEgcmFuZ2UuXHJcbiAgICovXG4gICpwb2ludHMocmFuZ2UpIHtcbiAgICB5aWVsZCBbcmFuZ2UuYW5jaG9yLCAnYW5jaG9yJ107XG4gICAgeWllbGQgW3JhbmdlLmZvY3VzLCAnZm9jdXMnXTtcbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIHN0YXJ0IHBvaW50IG9mIGEgcmFuZ2UuXHJcbiAgICovXG4gIHN0YXJ0KHJhbmdlKSB7XG4gICAgdmFyIFtzdGFydF0gPSBSYW5nZS5lZGdlcyhyYW5nZSk7XG4gICAgcmV0dXJuIHN0YXJ0O1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIFRyYW5zZm9ybSBhIHJhbmdlIGJ5IGFuIG9wZXJhdGlvbi5cclxuICAgKi9cbiAgdHJhbnNmb3JtKHJhbmdlLCBvcCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICByZXR1cm4gcHJvZHVjZShyYW5nZSwgciA9PiB7XG4gICAgICBpZiAociA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHtcbiAgICAgICAgYWZmaW5pdHkgPSAnaW53YXJkJ1xuICAgICAgfSA9IG9wdGlvbnM7XG4gICAgICB2YXIgYWZmaW5pdHlBbmNob3I7XG4gICAgICB2YXIgYWZmaW5pdHlGb2N1cztcblxuICAgICAgaWYgKGFmZmluaXR5ID09PSAnaW53YXJkJykge1xuICAgICAgICAvLyBJZiB0aGUgcmFuZ2UgaXMgY29sbGFwc2VkLCBtYWtlIHN1cmUgdG8gdXNlIHRoZSBzYW1lIGFmZmluaXR5IHRvXG4gICAgICAgIC8vIGF2b2lkIHRoZSB0d28gcG9pbnRzIHBhc3NpbmcgZWFjaCBvdGhlciBhbmQgZXhwYW5kaW5nIGluIHRoZSBvcHBvc2l0ZVxuICAgICAgICAvLyBkaXJlY3Rpb25cbiAgICAgICAgdmFyIGlzQ29sbGFwc2VkID0gUmFuZ2UuaXNDb2xsYXBzZWQocik7XG5cbiAgICAgICAgaWYgKFJhbmdlLmlzRm9yd2FyZChyKSkge1xuICAgICAgICAgIGFmZmluaXR5QW5jaG9yID0gJ2ZvcndhcmQnO1xuICAgICAgICAgIGFmZmluaXR5Rm9jdXMgPSBpc0NvbGxhcHNlZCA/IGFmZmluaXR5QW5jaG9yIDogJ2JhY2t3YXJkJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZmZpbml0eUFuY2hvciA9ICdiYWNrd2FyZCc7XG4gICAgICAgICAgYWZmaW5pdHlGb2N1cyA9IGlzQ29sbGFwc2VkID8gYWZmaW5pdHlBbmNob3IgOiAnZm9yd2FyZCc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYWZmaW5pdHkgPT09ICdvdXR3YXJkJykge1xuICAgICAgICBpZiAoUmFuZ2UuaXNGb3J3YXJkKHIpKSB7XG4gICAgICAgICAgYWZmaW5pdHlBbmNob3IgPSAnYmFja3dhcmQnO1xuICAgICAgICAgIGFmZmluaXR5Rm9jdXMgPSAnZm9yd2FyZCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWZmaW5pdHlBbmNob3IgPSAnZm9yd2FyZCc7XG4gICAgICAgICAgYWZmaW5pdHlGb2N1cyA9ICdiYWNrd2FyZCc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFmZmluaXR5QW5jaG9yID0gYWZmaW5pdHk7XG4gICAgICAgIGFmZmluaXR5Rm9jdXMgPSBhZmZpbml0eTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFuY2hvciA9IFBvaW50LnRyYW5zZm9ybShyLmFuY2hvciwgb3AsIHtcbiAgICAgICAgYWZmaW5pdHk6IGFmZmluaXR5QW5jaG9yXG4gICAgICB9KTtcbiAgICAgIHZhciBmb2N1cyA9IFBvaW50LnRyYW5zZm9ybShyLmZvY3VzLCBvcCwge1xuICAgICAgICBhZmZpbml0eTogYWZmaW5pdHlGb2N1c1xuICAgICAgfSk7XG5cbiAgICAgIGlmICghYW5jaG9yIHx8ICFmb2N1cykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgci5hbmNob3IgPSBhbmNob3I7XG4gICAgICByLmZvY3VzID0gZm9jdXM7XG4gICAgfSk7XG4gIH1cblxufTtcblxudmFyIFJhbmdlUmVmID0ge1xuICAvKipcclxuICAgKiBUcmFuc2Zvcm0gdGhlIHJhbmdlIHJlZidzIGN1cnJlbnQgdmFsdWUgYnkgYW4gb3BlcmF0aW9uLlxyXG4gICAqL1xuICB0cmFuc2Zvcm0ocmVmLCBvcCkge1xuICAgIHZhciB7XG4gICAgICBjdXJyZW50LFxuICAgICAgYWZmaW5pdHlcbiAgICB9ID0gcmVmO1xuXG4gICAgaWYgKGN1cnJlbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwYXRoID0gUmFuZ2UudHJhbnNmb3JtKGN1cnJlbnQsIG9wLCB7XG4gICAgICBhZmZpbml0eVxuICAgIH0pO1xuICAgIHJlZi5jdXJyZW50ID0gcGF0aDtcblxuICAgIGlmIChwYXRoID09IG51bGwpIHtcbiAgICAgIHJlZi51bnJlZigpO1xuICAgIH1cbiAgfVxuXG59O1xuXG4vKlxyXG4gIEN1c3RvbSBkZWVwIGVxdWFsIGNvbXBhcmlzb24gZm9yIFNsYXRlIG5vZGVzLlxyXG5cbiAgV2UgZG9uJ3QgbmVlZCBnZW5lcmFsIHB1cnBvc2UgZGVlcCBlcXVhbGl0eTtcclxuICBTbGF0ZSBvbmx5IHN1cHBvcnRzIHBsYWluIHZhbHVlcywgQXJyYXlzLCBhbmQgbmVzdGVkIG9iamVjdHMuXHJcbiAgQ29tcGxleCB2YWx1ZXMgbmVzdGVkIGluc2lkZSBBcnJheXMgYXJlIG5vdCBzdXBwb3J0ZWQuXHJcblxuICBTbGF0ZSBvYmplY3RzIGFyZSBkZXNpZ25lZCB0byBiZSBzZXJpYWxpc2VkLCBzb1xyXG4gIG1pc3Npbmcga2V5cyBhcmUgZGVsaWJlcmF0ZWx5IG5vcm1hbGlzZWQgdG8gdW5kZWZpbmVkLlxyXG4gKi9cblxudmFyIGlzRGVlcEVxdWFsID0gKG5vZGUsIGFub3RoZXIpID0+IHtcbiAgZm9yICh2YXIga2V5IGluIG5vZGUpIHtcbiAgICB2YXIgYSA9IG5vZGVba2V5XTtcbiAgICB2YXIgYiA9IGFub3RoZXJba2V5XTtcblxuICAgIGlmIChpc1BsYWluT2JqZWN0KGEpICYmIGlzUGxhaW5PYmplY3QoYikpIHtcbiAgICAgIGlmICghaXNEZWVwRXF1YWwoYSwgYikpIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYSkgJiYgQXJyYXkuaXNBcnJheShiKSkge1xuICAgICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFbaV0gIT09IGJbaV0pIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChhICE9PSBiKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8qXHJcbiAgICBEZWVwIG9iamVjdCBlcXVhbGl0eSBpcyBvbmx5IG5lY2Vzc2FyeSBpbiBvbmUgZGlyZWN0aW9uOyBpbiB0aGUgcmV2ZXJzZSBkaXJlY3Rpb25cclxuICAgIHdlIGFyZSBvbmx5IGxvb2tpbmcgZm9yIGtleXMgdGhhdCBhcmUgbWlzc2luZy5cclxuICAgIEFzIGFib3ZlLCB1bmRlZmluZWQga2V5cyBhcmUgbm9ybWFsaXNlZCB0byBtaXNzaW5nLlxyXG4gICovXG5cblxuICBmb3IgKHZhciBfa2V5IGluIGFub3RoZXIpIHtcbiAgICBpZiAobm9kZVtfa2V5XSA9PT0gdW5kZWZpbmVkICYmIGFub3RoZXJbX2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxudmFyIF9leGNsdWRlZCQxID0gW1widGV4dFwiXSxcbiAgICBfZXhjbHVkZWQyJDEgPSBbXCJhbmNob3JcIiwgXCJmb2N1c1wiXTtcblxuZnVuY3Rpb24gb3duS2V5cyQ0KG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSB7IHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsgfSBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQ0KHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMkNChPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzJDQoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG52YXIgVGV4dCA9IHtcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgdHdvIHRleHQgbm9kZXMgYXJlIGVxdWFsLlxyXG4gICAqXHJcbiAgICogV2hlbiBsb29zZSBpcyBzZXQsIHRoZSB0ZXh0IGlzIG5vdCBjb21wYXJlZC4gVGhpcyBpc1xyXG4gICAqIHVzZWQgdG8gY2hlY2sgd2hldGhlciBzaWJsaW5nIHRleHQgbm9kZXMgY2FuIGJlIG1lcmdlZC5cclxuICAgKi9cbiAgZXF1YWxzKHRleHQsIGFub3RoZXIpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIHtcbiAgICAgIGxvb3NlID0gZmFsc2VcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIGZ1bmN0aW9uIG9taXRUZXh0KG9iaikge1xuICAgICAgdmFyIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBfZXhjbHVkZWQkMSk7XG5cbiAgICAgIHJldHVybiByZXN0O1xuICAgIH1cblxuICAgIHJldHVybiBpc0RlZXBFcXVhbChsb29zZSA/IG9taXRUZXh0KHRleHQpIDogdGV4dCwgbG9vc2UgPyBvbWl0VGV4dChhbm90aGVyKSA6IGFub3RoZXIpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaW1wbGVtZW50cyB0aGUgYFRleHRgIGludGVyZmFjZS5cclxuICAgKi9cbiAgaXNUZXh0KHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzUGxhaW5PYmplY3QodmFsdWUpICYmIHR5cGVvZiB2YWx1ZS50ZXh0ID09PSAnc3RyaW5nJztcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGlzIGEgbGlzdCBvZiBgVGV4dGAgb2JqZWN0cy5cclxuICAgKi9cbiAgaXNUZXh0TGlzdCh2YWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5ldmVyeSh2YWwgPT4gVGV4dC5pc1RleHQodmFsKSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgc29tZSBwcm9wcyBhcmUgYSBwYXJ0aWFsIG9mIFRleHQuXHJcbiAgICovXG4gIGlzVGV4dFByb3BzKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnRleHQgIT09IHVuZGVmaW5lZDtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhbiB0ZXh0IG1hdGNoZXMgc2V0IG9mIHByb3BlcnRpZXMuXHJcbiAgICpcclxuICAgKiBOb3RlOiB0aGlzIGlzIGZvciBtYXRjaGluZyBjdXN0b20gcHJvcGVydGllcywgYW5kIGl0IGRvZXMgbm90IGVuc3VyZSB0aGF0XHJcbiAgICogdGhlIGB0ZXh0YCBwcm9wZXJ0eSBhcmUgdHdvIG5vZGVzIGVxdWFsLlxyXG4gICAqL1xuICBtYXRjaGVzKHRleHQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICBpZiAoa2V5ID09PSAndGV4dCcpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGV4dC5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8IHRleHRba2V5XSAhPT0gcHJvcHNba2V5XSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBsZWF2ZXMgZm9yIGEgdGV4dCBub2RlIGdpdmVuIGRlY29yYXRpb25zLlxyXG4gICAqL1xuICBkZWNvcmF0aW9ucyhub2RlLCBkZWNvcmF0aW9ucykge1xuICAgIHZhciBsZWF2ZXMgPSBbX29iamVjdFNwcmVhZCQ0KHt9LCBub2RlKV07XG5cbiAgICBmb3IgKHZhciBkZWMgb2YgZGVjb3JhdGlvbnMpIHtcbiAgICAgIHZhciByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKGRlYywgX2V4Y2x1ZGVkMiQxKTtcblxuICAgICAgdmFyIFtzdGFydCwgZW5kXSA9IFJhbmdlLmVkZ2VzKGRlYyk7XG4gICAgICB2YXIgbmV4dCA9IFtdO1xuICAgICAgdmFyIG8gPSAwO1xuXG4gICAgICBmb3IgKHZhciBsZWFmIG9mIGxlYXZlcykge1xuICAgICAgICB2YXIge1xuICAgICAgICAgIGxlbmd0aFxuICAgICAgICB9ID0gbGVhZi50ZXh0O1xuICAgICAgICB2YXIgb2Zmc2V0ID0gbztcbiAgICAgICAgbyArPSBsZW5ndGg7IC8vIElmIHRoZSByYW5nZSBlbmNvbXBhc2VzIHRoZSBlbnRpcmUgbGVhZiwgYWRkIHRoZSByYW5nZS5cblxuICAgICAgICBpZiAoc3RhcnQub2Zmc2V0IDw9IG9mZnNldCAmJiBlbmQub2Zmc2V0ID49IG8pIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKGxlYWYsIHJlc3QpO1xuICAgICAgICAgIG5leHQucHVzaChsZWFmKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSAvLyBJZiB0aGUgcmFuZ2UgZXhwYW5kZWQgYW5kIG1hdGNoIHRoZSBsZWFmLCBvciBzdGFydHMgYWZ0ZXIsIG9yIGVuZHMgYmVmb3JlIGl0LCBjb250aW51ZS5cblxuXG4gICAgICAgIGlmIChzdGFydC5vZmZzZXQgIT09IGVuZC5vZmZzZXQgJiYgKHN0YXJ0Lm9mZnNldCA9PT0gbyB8fCBlbmQub2Zmc2V0ID09PSBvZmZzZXQpIHx8IHN0YXJ0Lm9mZnNldCA+IG8gfHwgZW5kLm9mZnNldCA8IG9mZnNldCB8fCBlbmQub2Zmc2V0ID09PSBvZmZzZXQgJiYgb2Zmc2V0ICE9PSAwKSB7XG4gICAgICAgICAgbmV4dC5wdXNoKGxlYWYpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IC8vIE90aGVyd2lzZSB3ZSBuZWVkIHRvIHNwbGl0IHRoZSBsZWFmLCBhdCB0aGUgc3RhcnQsIGVuZCwgb3IgYm90aCxcbiAgICAgICAgLy8gYW5kIGFkZCB0aGUgcmFuZ2UgdG8gdGhlIG1pZGRsZSBpbnRlcnNlY3Rpbmcgc2VjdGlvbi4gRG8gdGhlIGVuZFxuICAgICAgICAvLyBzcGxpdCBmaXJzdCBzaW5jZSB3ZSBkb24ndCBuZWVkIHRvIHVwZGF0ZSB0aGUgb2Zmc2V0IHRoYXQgd2F5LlxuXG5cbiAgICAgICAgdmFyIG1pZGRsZSA9IGxlYWY7XG4gICAgICAgIHZhciBiZWZvcmUgPSB2b2lkIDA7XG4gICAgICAgIHZhciBhZnRlciA9IHZvaWQgMDtcblxuICAgICAgICBpZiAoZW5kLm9mZnNldCA8IG8pIHtcbiAgICAgICAgICB2YXIgb2ZmID0gZW5kLm9mZnNldCAtIG9mZnNldDtcbiAgICAgICAgICBhZnRlciA9IF9vYmplY3RTcHJlYWQkNChfb2JqZWN0U3ByZWFkJDQoe30sIG1pZGRsZSksIHt9LCB7XG4gICAgICAgICAgICB0ZXh0OiBtaWRkbGUudGV4dC5zbGljZShvZmYpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbWlkZGxlID0gX29iamVjdFNwcmVhZCQ0KF9vYmplY3RTcHJlYWQkNCh7fSwgbWlkZGxlKSwge30sIHtcbiAgICAgICAgICAgIHRleHQ6IG1pZGRsZS50ZXh0LnNsaWNlKDAsIG9mZilcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGFydC5vZmZzZXQgPiBvZmZzZXQpIHtcbiAgICAgICAgICB2YXIgX29mZiA9IHN0YXJ0Lm9mZnNldCAtIG9mZnNldDtcblxuICAgICAgICAgIGJlZm9yZSA9IF9vYmplY3RTcHJlYWQkNChfb2JqZWN0U3ByZWFkJDQoe30sIG1pZGRsZSksIHt9LCB7XG4gICAgICAgICAgICB0ZXh0OiBtaWRkbGUudGV4dC5zbGljZSgwLCBfb2ZmKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG1pZGRsZSA9IF9vYmplY3RTcHJlYWQkNChfb2JqZWN0U3ByZWFkJDQoe30sIG1pZGRsZSksIHt9LCB7XG4gICAgICAgICAgICB0ZXh0OiBtaWRkbGUudGV4dC5zbGljZShfb2ZmKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihtaWRkbGUsIHJlc3QpO1xuXG4gICAgICAgIGlmIChiZWZvcmUpIHtcbiAgICAgICAgICBuZXh0LnB1c2goYmVmb3JlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5leHQucHVzaChtaWRkbGUpO1xuXG4gICAgICAgIGlmIChhZnRlcikge1xuICAgICAgICAgIG5leHQucHVzaChhZnRlcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGVhdmVzID0gbmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVhdmVzO1xuICB9XG5cbn07XG5cbmZ1bmN0aW9uIG93bktleXMkMyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgeyBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IH0ga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkMyh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzJDMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyQzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgYXBwbHlUb0RyYWZ0ID0gKGVkaXRvciwgc2VsZWN0aW9uLCBvcCkgPT4ge1xuICBzd2l0Y2ggKG9wLnR5cGUpIHtcbiAgICBjYXNlICdpbnNlcnRfbm9kZSc6XG4gICAgICB7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICBub2RlXG4gICAgICAgIH0gPSBvcDtcbiAgICAgICAgdmFyIHBhcmVudCA9IE5vZGUucGFyZW50KGVkaXRvciwgcGF0aCk7XG4gICAgICAgIHZhciBpbmRleCA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcblxuICAgICAgICBpZiAoaW5kZXggPiBwYXJlbnQuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGFwcGx5IGFuIFxcXCJpbnNlcnRfbm9kZVxcXCIgb3BlcmF0aW9uIGF0IHBhdGggW1wiLmNvbmNhdChwYXRoLCBcIl0gYmVjYXVzZSB0aGUgZGVzdGluYXRpb24gaXMgcGFzdCB0aGUgZW5kIG9mIHRoZSBub2RlLlwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAwLCBub2RlKTtcblxuICAgICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgICAgZm9yICh2YXIgW3BvaW50LCBrZXldIG9mIFJhbmdlLnBvaW50cyhzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICBzZWxlY3Rpb25ba2V5XSA9IFBvaW50LnRyYW5zZm9ybShwb2ludCwgb3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgY2FzZSAnaW5zZXJ0X3RleHQnOlxuICAgICAge1xuICAgICAgICB2YXIge1xuICAgICAgICAgIHBhdGg6IF9wYXRoLFxuICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICB0ZXh0XG4gICAgICAgIH0gPSBvcDtcbiAgICAgICAgaWYgKHRleHQubGVuZ3RoID09PSAwKSBicmVhaztcblxuICAgICAgICB2YXIgX25vZGUgPSBOb2RlLmxlYWYoZWRpdG9yLCBfcGF0aCk7XG5cbiAgICAgICAgdmFyIGJlZm9yZSA9IF9ub2RlLnRleHQuc2xpY2UoMCwgb2Zmc2V0KTtcblxuICAgICAgICB2YXIgYWZ0ZXIgPSBfbm9kZS50ZXh0LnNsaWNlKG9mZnNldCk7XG5cbiAgICAgICAgX25vZGUudGV4dCA9IGJlZm9yZSArIHRleHQgKyBhZnRlcjtcblxuICAgICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgICAgZm9yICh2YXIgW19wb2ludCwgX2tleV0gb2YgUmFuZ2UucG9pbnRzKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbltfa2V5XSA9IFBvaW50LnRyYW5zZm9ybShfcG9pbnQsIG9wKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIGNhc2UgJ21lcmdlX25vZGUnOlxuICAgICAge1xuICAgICAgICB2YXIge1xuICAgICAgICAgIHBhdGg6IF9wYXRoMlxuICAgICAgICB9ID0gb3A7XG5cbiAgICAgICAgdmFyIF9ub2RlMiA9IE5vZGUuZ2V0KGVkaXRvciwgX3BhdGgyKTtcblxuICAgICAgICB2YXIgcHJldlBhdGggPSBQYXRoLnByZXZpb3VzKF9wYXRoMik7XG4gICAgICAgIHZhciBwcmV2ID0gTm9kZS5nZXQoZWRpdG9yLCBwcmV2UGF0aCk7XG5cbiAgICAgICAgdmFyIF9wYXJlbnQgPSBOb2RlLnBhcmVudChlZGl0b3IsIF9wYXRoMik7XG5cbiAgICAgICAgdmFyIF9pbmRleCA9IF9wYXRoMltfcGF0aDIubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgaWYgKFRleHQuaXNUZXh0KF9ub2RlMikgJiYgVGV4dC5pc1RleHQocHJldikpIHtcbiAgICAgICAgICBwcmV2LnRleHQgKz0gX25vZGUyLnRleHQ7XG4gICAgICAgIH0gZWxzZSBpZiAoIVRleHQuaXNUZXh0KF9ub2RlMikgJiYgIVRleHQuaXNUZXh0KHByZXYpKSB7XG4gICAgICAgICAgcHJldi5jaGlsZHJlbi5wdXNoKC4uLl9ub2RlMi5jaGlsZHJlbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGFwcGx5IGEgXFxcIm1lcmdlX25vZGVcXFwiIG9wZXJhdGlvbiBhdCBwYXRoIFtcIi5jb25jYXQoX3BhdGgyLCBcIl0gdG8gbm9kZXMgb2YgZGlmZmVyZW50IGludGVyZmFjZXM6IFwiKS5jb25jYXQoX25vZGUyLCBcIiBcIikuY29uY2F0KHByZXYpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9wYXJlbnQuY2hpbGRyZW4uc3BsaWNlKF9pbmRleCwgMSk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgIGZvciAodmFyIFtfcG9pbnQyLCBfa2V5Ml0gb2YgUmFuZ2UucG9pbnRzKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbltfa2V5Ml0gPSBQb2ludC50cmFuc2Zvcm0oX3BvaW50Miwgb3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgY2FzZSAnbW92ZV9ub2RlJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBwYXRoOiBfcGF0aDMsXG4gICAgICAgICAgbmV3UGF0aFxuICAgICAgICB9ID0gb3A7XG5cbiAgICAgICAgaWYgKFBhdGguaXNBbmNlc3RvcihfcGF0aDMsIG5ld1BhdGgpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IG1vdmUgYSBwYXRoIFtcIi5jb25jYXQoX3BhdGgzLCBcIl0gdG8gbmV3IHBhdGggW1wiKS5jb25jYXQobmV3UGF0aCwgXCJdIGJlY2F1c2UgdGhlIGRlc3RpbmF0aW9uIGlzIGluc2lkZSBpdHNlbGYuXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfbm9kZTMgPSBOb2RlLmdldChlZGl0b3IsIF9wYXRoMyk7XG5cbiAgICAgICAgdmFyIF9wYXJlbnQyID0gTm9kZS5wYXJlbnQoZWRpdG9yLCBfcGF0aDMpO1xuXG4gICAgICAgIHZhciBfaW5kZXgyID0gX3BhdGgzW19wYXRoMy5sZW5ndGggLSAxXTsgLy8gVGhpcyBpcyB0cmlja3ksIGJ1dCBzaW5jZSB0aGUgYHBhdGhgIGFuZCBgbmV3UGF0aGAgYm90aCByZWZlciB0b1xuICAgICAgICAvLyB0aGUgc2FtZSBzbmFwc2hvdCBpbiB0aW1lLCB0aGVyZSdzIGEgbWlzbWF0Y2guIEFmdGVyIGVpdGhlclxuICAgICAgICAvLyByZW1vdmluZyB0aGUgb3JpZ2luYWwgcG9zaXRpb24sIHRoZSBzZWNvbmQgc3RlcCdzIHBhdGggY2FuIGJlIG91dFxuICAgICAgICAvLyBvZiBkYXRlLiBTbyBpbnN0ZWFkIG9mIHVzaW5nIHRoZSBgb3AubmV3UGF0aGAgZGlyZWN0bHksIHdlXG4gICAgICAgIC8vIHRyYW5zZm9ybSBgb3AucGF0aGAgdG8gYXNjZXJ0YWluIHdoYXQgdGhlIGBuZXdQYXRoYCB3b3VsZCBiZSBhZnRlclxuICAgICAgICAvLyB0aGUgb3BlcmF0aW9uIHdhcyBhcHBsaWVkLlxuXG4gICAgICAgIF9wYXJlbnQyLmNoaWxkcmVuLnNwbGljZShfaW5kZXgyLCAxKTtcblxuICAgICAgICB2YXIgdHJ1ZVBhdGggPSBQYXRoLnRyYW5zZm9ybShfcGF0aDMsIG9wKTtcbiAgICAgICAgdmFyIG5ld1BhcmVudCA9IE5vZGUuZ2V0KGVkaXRvciwgUGF0aC5wYXJlbnQodHJ1ZVBhdGgpKTtcbiAgICAgICAgdmFyIG5ld0luZGV4ID0gdHJ1ZVBhdGhbdHJ1ZVBhdGgubGVuZ3RoIC0gMV07XG4gICAgICAgIG5ld1BhcmVudC5jaGlsZHJlbi5zcGxpY2UobmV3SW5kZXgsIDAsIF9ub2RlMyk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgIGZvciAodmFyIFtfcG9pbnQzLCBfa2V5M10gb2YgUmFuZ2UucG9pbnRzKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbltfa2V5M10gPSBQb2ludC50cmFuc2Zvcm0oX3BvaW50Mywgb3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgY2FzZSAncmVtb3ZlX25vZGUnOlxuICAgICAge1xuICAgICAgICB2YXIge1xuICAgICAgICAgIHBhdGg6IF9wYXRoNFxuICAgICAgICB9ID0gb3A7XG4gICAgICAgIHZhciBfaW5kZXgzID0gX3BhdGg0W19wYXRoNC5sZW5ndGggLSAxXTtcblxuICAgICAgICB2YXIgX3BhcmVudDMgPSBOb2RlLnBhcmVudChlZGl0b3IsIF9wYXRoNCk7XG5cbiAgICAgICAgX3BhcmVudDMuY2hpbGRyZW4uc3BsaWNlKF9pbmRleDMsIDEpOyAvLyBUcmFuc2Zvcm0gYWxsIG9mIHRoZSBwb2ludHMgaW4gdGhlIHZhbHVlLCBidXQgaWYgdGhlIHBvaW50IHdhcyBpbiB0aGVcbiAgICAgICAgLy8gbm9kZSB0aGF0IHdhcyByZW1vdmVkIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSByYW5nZSBvciByZW1vdmUgaXQuXG5cblxuICAgICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgICAgZm9yICh2YXIgW19wb2ludDQsIF9rZXk0XSBvZiBSYW5nZS5wb2ludHMoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFBvaW50LnRyYW5zZm9ybShfcG9pbnQ0LCBvcCk7XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24gIT0gbnVsbCAmJiByZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICBzZWxlY3Rpb25bX2tleTRdID0gcmVzdWx0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIF9wcmV2ID0gdm9pZCAwO1xuXG4gICAgICAgICAgICAgIHZhciBuZXh0ID0gdm9pZCAwO1xuXG4gICAgICAgICAgICAgIGZvciAodmFyIFtuLCBwXSBvZiBOb2RlLnRleHRzKGVkaXRvcikpIHtcbiAgICAgICAgICAgICAgICBpZiAoUGF0aC5jb21wYXJlKHAsIF9wYXRoNCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICBfcHJldiA9IFtuLCBwXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbmV4dCA9IFtuLCBwXTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHZhciBwcmVmZXJOZXh0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgaWYgKF9wcmV2ICYmIG5leHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoUGF0aC5lcXVhbHMobmV4dFsxXSwgX3BhdGg0KSkge1xuICAgICAgICAgICAgICAgICAgcHJlZmVyTmV4dCA9ICFQYXRoLmhhc1ByZXZpb3VzKG5leHRbMV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBwcmVmZXJOZXh0ID0gUGF0aC5jb21tb24oX3ByZXZbMV0sIF9wYXRoNCkubGVuZ3RoIDwgUGF0aC5jb21tb24obmV4dFsxXSwgX3BhdGg0KS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKF9wcmV2ICYmICFwcmVmZXJOZXh0KSB7XG4gICAgICAgICAgICAgICAgX3BvaW50NC5wYXRoID0gX3ByZXZbMV07XG4gICAgICAgICAgICAgICAgX3BvaW50NC5vZmZzZXQgPSBfcHJldlswXS50ZXh0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0KSB7XG4gICAgICAgICAgICAgICAgX3BvaW50NC5wYXRoID0gbmV4dFsxXTtcbiAgICAgICAgICAgICAgICBfcG9pbnQ0Lm9mZnNldCA9IDA7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgY2FzZSAncmVtb3ZlX3RleHQnOlxuICAgICAge1xuICAgICAgICB2YXIge1xuICAgICAgICAgIHBhdGg6IF9wYXRoNSxcbiAgICAgICAgICBvZmZzZXQ6IF9vZmZzZXQsXG4gICAgICAgICAgdGV4dDogX3RleHRcbiAgICAgICAgfSA9IG9wO1xuICAgICAgICBpZiAoX3RleHQubGVuZ3RoID09PSAwKSBicmVhaztcblxuICAgICAgICB2YXIgX25vZGU0ID0gTm9kZS5sZWFmKGVkaXRvciwgX3BhdGg1KTtcblxuICAgICAgICB2YXIgX2JlZm9yZSA9IF9ub2RlNC50ZXh0LnNsaWNlKDAsIF9vZmZzZXQpO1xuXG4gICAgICAgIHZhciBfYWZ0ZXIgPSBfbm9kZTQudGV4dC5zbGljZShfb2Zmc2V0ICsgX3RleHQubGVuZ3RoKTtcblxuICAgICAgICBfbm9kZTQudGV4dCA9IF9iZWZvcmUgKyBfYWZ0ZXI7XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgIGZvciAodmFyIFtfcG9pbnQ1LCBfa2V5NV0gb2YgUmFuZ2UucG9pbnRzKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbltfa2V5NV0gPSBQb2ludC50cmFuc2Zvcm0oX3BvaW50NSwgb3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgY2FzZSAnc2V0X25vZGUnOlxuICAgICAge1xuICAgICAgICB2YXIge1xuICAgICAgICAgIHBhdGg6IF9wYXRoNixcbiAgICAgICAgICBwcm9wZXJ0aWVzLFxuICAgICAgICAgIG5ld1Byb3BlcnRpZXNcbiAgICAgICAgfSA9IG9wO1xuXG4gICAgICAgIGlmIChfcGF0aDYubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHNldCBwcm9wZXJ0aWVzIG9uIHRoZSByb290IG5vZGUhXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9ub2RlNSA9IE5vZGUuZ2V0KGVkaXRvciwgX3BhdGg2KTtcblxuICAgICAgICBmb3IgKHZhciBfa2V5NiBpbiBuZXdQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgaWYgKF9rZXk2ID09PSAnY2hpbGRyZW4nIHx8IF9rZXk2ID09PSAndGV4dCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBzZXQgdGhlIFxcXCJcIi5jb25jYXQoX2tleTYsIFwiXFxcIiBwcm9wZXJ0eSBvZiBub2RlcyFcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciB2YWx1ZSA9IG5ld1Byb3BlcnRpZXNbX2tleTZdO1xuXG4gICAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBfbm9kZTVbX2tleTZdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfbm9kZTVbX2tleTZdID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIHByb3BlcnRpZXMgdGhhdCB3ZXJlIHByZXZpb3VzbHkgZGVmaW5lZCwgYnV0IGFyZSBub3cgbWlzc2luZywgbXVzdCBiZSBkZWxldGVkXG5cblxuICAgICAgICBmb3IgKHZhciBfa2V5NyBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgaWYgKCFuZXdQcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KF9rZXk3KSkge1xuICAgICAgICAgICAgZGVsZXRlIF9ub2RlNVtfa2V5N107XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICBjYXNlICdzZXRfc2VsZWN0aW9uJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBuZXdQcm9wZXJ0aWVzOiBfbmV3UHJvcGVydGllc1xuICAgICAgICB9ID0gb3A7XG5cbiAgICAgICAgaWYgKF9uZXdQcm9wZXJ0aWVzID09IG51bGwpIHtcbiAgICAgICAgICBzZWxlY3Rpb24gPSBfbmV3UHJvcGVydGllcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoc2VsZWN0aW9uID09IG51bGwpIHtcbiAgICAgICAgICAgIGlmICghUmFuZ2UuaXNSYW5nZShfbmV3UHJvcGVydGllcykpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGFwcGx5IGFuIGluY29tcGxldGUgXFxcInNldF9zZWxlY3Rpb25cXFwiIG9wZXJhdGlvbiBwcm9wZXJ0aWVzIFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShfbmV3UHJvcGVydGllcyksIFwiIHdoZW4gdGhlcmUgaXMgbm8gY3VycmVudCBzZWxlY3Rpb24uXCIpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZWN0aW9uID0gX29iamVjdFNwcmVhZCQzKHt9LCBfbmV3UHJvcGVydGllcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9yICh2YXIgX2tleTggaW4gX25ld1Byb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIHZhciBfdmFsdWUgPSBfbmV3UHJvcGVydGllc1tfa2V5OF07XG5cbiAgICAgICAgICAgIGlmIChfdmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICBpZiAoX2tleTggPT09ICdhbmNob3InIHx8IF9rZXk4ID09PSAnZm9jdXMnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHJlbW92ZSB0aGUgXFxcIlwiLmNvbmNhdChfa2V5OCwgXCJcXFwiIHNlbGVjdGlvbiBwcm9wZXJ0eVwiKSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBkZWxldGUgc2VsZWN0aW9uW19rZXk4XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNlbGVjdGlvbltfa2V5OF0gPSBfdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICBjYXNlICdzcGxpdF9ub2RlJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBwYXRoOiBfcGF0aDcsXG4gICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgcHJvcGVydGllczogX3Byb3BlcnRpZXNcbiAgICAgICAgfSA9IG9wO1xuXG4gICAgICAgIGlmIChfcGF0aDcubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGFwcGx5IGEgXFxcInNwbGl0X25vZGVcXFwiIG9wZXJhdGlvbiBhdCBwYXRoIFtcIi5jb25jYXQoX3BhdGg3LCBcIl0gYmVjYXVzZSB0aGUgcm9vdCBub2RlIGNhbm5vdCBiZSBzcGxpdC5cIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9ub2RlNiA9IE5vZGUuZ2V0KGVkaXRvciwgX3BhdGg3KTtcblxuICAgICAgICB2YXIgX3BhcmVudDQgPSBOb2RlLnBhcmVudChlZGl0b3IsIF9wYXRoNyk7XG5cbiAgICAgICAgdmFyIF9pbmRleDQgPSBfcGF0aDdbX3BhdGg3Lmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgbmV3Tm9kZTtcblxuICAgICAgICBpZiAoVGV4dC5pc1RleHQoX25vZGU2KSkge1xuICAgICAgICAgIHZhciBfYmVmb3JlMiA9IF9ub2RlNi50ZXh0LnNsaWNlKDAsIHBvc2l0aW9uKTtcblxuICAgICAgICAgIHZhciBfYWZ0ZXIyID0gX25vZGU2LnRleHQuc2xpY2UocG9zaXRpb24pO1xuXG4gICAgICAgICAgX25vZGU2LnRleHQgPSBfYmVmb3JlMjtcbiAgICAgICAgICBuZXdOb2RlID0gX29iamVjdFNwcmVhZCQzKF9vYmplY3RTcHJlYWQkMyh7fSwgX3Byb3BlcnRpZXMpLCB7fSwge1xuICAgICAgICAgICAgdGV4dDogX2FmdGVyMlxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBfYmVmb3JlMyA9IF9ub2RlNi5jaGlsZHJlbi5zbGljZSgwLCBwb3NpdGlvbik7XG5cbiAgICAgICAgICB2YXIgX2FmdGVyMyA9IF9ub2RlNi5jaGlsZHJlbi5zbGljZShwb3NpdGlvbik7XG5cbiAgICAgICAgICBfbm9kZTYuY2hpbGRyZW4gPSBfYmVmb3JlMztcbiAgICAgICAgICBuZXdOb2RlID0gX29iamVjdFNwcmVhZCQzKF9vYmplY3RTcHJlYWQkMyh7fSwgX3Byb3BlcnRpZXMpLCB7fSwge1xuICAgICAgICAgICAgY2hpbGRyZW46IF9hZnRlcjNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9wYXJlbnQ0LmNoaWxkcmVuLnNwbGljZShfaW5kZXg0ICsgMSwgMCwgbmV3Tm9kZSk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgIGZvciAodmFyIFtfcG9pbnQ2LCBfa2V5OV0gb2YgUmFuZ2UucG9pbnRzKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbltfa2V5OV0gPSBQb2ludC50cmFuc2Zvcm0oX3BvaW50Niwgb3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICB9XG5cbiAgcmV0dXJuIHNlbGVjdGlvbjtcbn07XG5cbnZhciBHZW5lcmFsVHJhbnNmb3JtcyA9IHtcbiAgLyoqXHJcbiAgICogVHJhbnNmb3JtIHRoZSBlZGl0b3IgYnkgYW4gb3BlcmF0aW9uLlxyXG4gICAqL1xuICB0cmFuc2Zvcm0oZWRpdG9yLCBvcCkge1xuICAgIGVkaXRvci5jaGlsZHJlbiA9IGNyZWF0ZURyYWZ0KGVkaXRvci5jaGlsZHJlbik7XG4gICAgdmFyIHNlbGVjdGlvbiA9IGVkaXRvci5zZWxlY3Rpb24gJiYgY3JlYXRlRHJhZnQoZWRpdG9yLnNlbGVjdGlvbik7XG5cbiAgICB0cnkge1xuICAgICAgc2VsZWN0aW9uID0gYXBwbHlUb0RyYWZ0KGVkaXRvciwgc2VsZWN0aW9uLCBvcCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGVkaXRvci5jaGlsZHJlbiA9IGZpbmlzaERyYWZ0KGVkaXRvci5jaGlsZHJlbik7XG5cbiAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgZWRpdG9yLnNlbGVjdGlvbiA9IGlzRHJhZnQoc2VsZWN0aW9uKSA/IGZpbmlzaERyYWZ0KHNlbGVjdGlvbikgOiBzZWxlY3Rpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlZGl0b3Iuc2VsZWN0aW9uID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufTtcblxudmFyIF9leGNsdWRlZCA9IFtcInRleHRcIl0sXG4gICAgX2V4Y2x1ZGVkMiA9IFtcImNoaWxkcmVuXCJdO1xuXG5mdW5jdGlvbiBvd25LZXlzJDIob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDIodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQyKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkMihPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cbnZhciBOb2RlVHJhbnNmb3JtcyA9IHtcbiAgLyoqXHJcbiAgICogSW5zZXJ0IG5vZGVzIGF0IGEgc3BlY2lmaWMgbG9jYXRpb24gaW4gdGhlIEVkaXRvci5cclxuICAgKi9cbiAgaW5zZXJ0Tm9kZXMoZWRpdG9yLCBub2Rlcykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICBFZGl0b3Iud2l0aG91dE5vcm1hbGl6aW5nKGVkaXRvciwgKCkgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgaGFuZ2luZyA9IGZhbHNlLFxuICAgICAgICB2b2lkcyA9IGZhbHNlLFxuICAgICAgICBtb2RlID0gJ2xvd2VzdCdcbiAgICAgIH0gPSBvcHRpb25zO1xuICAgICAgdmFyIHtcbiAgICAgICAgYXQsXG4gICAgICAgIG1hdGNoLFxuICAgICAgICBzZWxlY3RcbiAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgICBpZiAoTm9kZS5pc05vZGUobm9kZXMpKSB7XG4gICAgICAgIG5vZGVzID0gW25vZGVzXTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBbbm9kZV0gPSBub2RlczsgLy8gQnkgZGVmYXVsdCwgdXNlIHRoZSBzZWxlY3Rpb24gYXMgdGhlIHRhcmdldCBsb2NhdGlvbi4gQnV0IGlmIHRoZXJlIGlzXG4gICAgICAvLyBubyBzZWxlY3Rpb24sIGluc2VydCBhdCB0aGUgZW5kIG9mIHRoZSBkb2N1bWVudCBzaW5jZSB0aGF0IGlzIHN1Y2ggYVxuICAgICAgLy8gY29tbW9uIHVzZSBjYXNlIHdoZW4gaW5zZXJ0aW5nIGZyb20gYSBub24tc2VsZWN0ZWQgc3RhdGUuXG5cbiAgICAgIGlmICghYXQpIHtcbiAgICAgICAgaWYgKGVkaXRvci5zZWxlY3Rpb24pIHtcbiAgICAgICAgICBhdCA9IGVkaXRvci5zZWxlY3Rpb247XG4gICAgICAgIH0gZWxzZSBpZiAoZWRpdG9yLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBhdCA9IEVkaXRvci5lbmQoZWRpdG9yLCBbXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXQgPSBbMF07XG4gICAgICAgIH1cblxuICAgICAgICBzZWxlY3QgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZWN0ID09IG51bGwpIHtcbiAgICAgICAgc2VsZWN0ID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChSYW5nZS5pc1JhbmdlKGF0KSkge1xuICAgICAgICBpZiAoIWhhbmdpbmcpIHtcbiAgICAgICAgICBhdCA9IEVkaXRvci51bmhhbmdSYW5nZShlZGl0b3IsIGF0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChSYW5nZS5pc0NvbGxhcHNlZChhdCkpIHtcbiAgICAgICAgICBhdCA9IGF0LmFuY2hvcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgWywgZW5kXSA9IFJhbmdlLmVkZ2VzKGF0KTtcbiAgICAgICAgICB2YXIgcG9pbnRSZWYgPSBFZGl0b3IucG9pbnRSZWYoZWRpdG9yLCBlbmQpO1xuICAgICAgICAgIFRyYW5zZm9ybXMuZGVsZXRlKGVkaXRvciwge1xuICAgICAgICAgICAgYXRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhdCA9IHBvaW50UmVmLnVucmVmKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFBvaW50LmlzUG9pbnQoYXQpKSB7XG4gICAgICAgIGlmIChtYXRjaCA9PSBudWxsKSB7XG4gICAgICAgICAgaWYgKFRleHQuaXNUZXh0KG5vZGUpKSB7XG4gICAgICAgICAgICBtYXRjaCA9IG4gPT4gVGV4dC5pc1RleHQobik7XG4gICAgICAgICAgfSBlbHNlIGlmIChlZGl0b3IuaXNJbmxpbmUobm9kZSkpIHtcbiAgICAgICAgICAgIG1hdGNoID0gbiA9PiBUZXh0LmlzVGV4dChuKSB8fCBFZGl0b3IuaXNJbmxpbmUoZWRpdG9yLCBuKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWF0Y2ggPSBuID0+IEVkaXRvci5pc0Jsb2NrKGVkaXRvciwgbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIFtlbnRyeV0gPSBFZGl0b3Iubm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgYXQ6IGF0LnBhdGgsXG4gICAgICAgICAgbWF0Y2gsXG4gICAgICAgICAgbW9kZSxcbiAgICAgICAgICB2b2lkc1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICB2YXIgWywgX21hdGNoUGF0aF0gPSBlbnRyeTtcbiAgICAgICAgICB2YXIgcGF0aFJlZiA9IEVkaXRvci5wYXRoUmVmKGVkaXRvciwgX21hdGNoUGF0aCk7XG4gICAgICAgICAgdmFyIGlzQXRFbmQgPSBFZGl0b3IuaXNFbmQoZWRpdG9yLCBhdCwgX21hdGNoUGF0aCk7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5zcGxpdE5vZGVzKGVkaXRvciwge1xuICAgICAgICAgICAgYXQsXG4gICAgICAgICAgICBtYXRjaCxcbiAgICAgICAgICAgIG1vZGUsXG4gICAgICAgICAgICB2b2lkc1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhciBwYXRoID0gcGF0aFJlZi51bnJlZigpO1xuICAgICAgICAgIGF0ID0gaXNBdEVuZCA/IFBhdGgubmV4dChwYXRoKSA6IHBhdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBwYXJlbnRQYXRoID0gUGF0aC5wYXJlbnQoYXQpO1xuICAgICAgdmFyIGluZGV4ID0gYXRbYXQubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmICghdm9pZHMgJiYgRWRpdG9yLnZvaWQoZWRpdG9yLCB7XG4gICAgICAgIGF0OiBwYXJlbnRQYXRoXG4gICAgICB9KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIF9ub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIHZhciBfcGF0aCA9IHBhcmVudFBhdGguY29uY2F0KGluZGV4KTtcblxuICAgICAgICBpbmRleCsrO1xuICAgICAgICBlZGl0b3IuYXBwbHkoe1xuICAgICAgICAgIHR5cGU6ICdpbnNlcnRfbm9kZScsXG4gICAgICAgICAgcGF0aDogX3BhdGgsXG4gICAgICAgICAgbm9kZTogX25vZGVcbiAgICAgICAgfSk7XG4gICAgICAgIGF0ID0gUGF0aC5uZXh0KGF0KTtcbiAgICAgIH1cblxuICAgICAgYXQgPSBQYXRoLnByZXZpb3VzKGF0KTtcblxuICAgICAgaWYgKHNlbGVjdCkge1xuICAgICAgICB2YXIgcG9pbnQgPSBFZGl0b3IuZW5kKGVkaXRvciwgYXQpO1xuXG4gICAgICAgIGlmIChwb2ludCkge1xuICAgICAgICAgIFRyYW5zZm9ybXMuc2VsZWN0KGVkaXRvciwgcG9pbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogTGlmdCBub2RlcyBhdCBhIHNwZWNpZmljIGxvY2F0aW9uIHVwd2FyZHMgaW4gdGhlIGRvY3VtZW50IHRyZWUsIHNwbGl0dGluZ1xyXG4gICAqIHRoZWlyIHBhcmVudCBpbiB0d28gaWYgbmVjZXNzYXJ5LlxyXG4gICAqL1xuICBsaWZ0Tm9kZXMoZWRpdG9yKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIEVkaXRvci53aXRob3V0Tm9ybWFsaXppbmcoZWRpdG9yLCAoKSA9PiB7XG4gICAgICB2YXIge1xuICAgICAgICBhdCA9IGVkaXRvci5zZWxlY3Rpb24sXG4gICAgICAgIG1vZGUgPSAnbG93ZXN0JyxcbiAgICAgICAgdm9pZHMgPSBmYWxzZVxuICAgICAgfSA9IG9wdGlvbnM7XG4gICAgICB2YXIge1xuICAgICAgICBtYXRjaFxuICAgICAgfSA9IG9wdGlvbnM7XG5cbiAgICAgIGlmIChtYXRjaCA9PSBudWxsKSB7XG4gICAgICAgIG1hdGNoID0gUGF0aC5pc1BhdGgoYXQpID8gbWF0Y2hQYXRoKGVkaXRvciwgYXQpIDogbiA9PiBFZGl0b3IuaXNCbG9jayhlZGl0b3IsIG4pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWF0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG1hdGNoZXMgPSBFZGl0b3Iubm9kZXMoZWRpdG9yLCB7XG4gICAgICAgIGF0LFxuICAgICAgICBtYXRjaCxcbiAgICAgICAgbW9kZSxcbiAgICAgICAgdm9pZHNcbiAgICAgIH0pO1xuICAgICAgdmFyIHBhdGhSZWZzID0gQXJyYXkuZnJvbShtYXRjaGVzLCBfcmVmID0+IHtcbiAgICAgICAgdmFyIFssIHBdID0gX3JlZjtcbiAgICAgICAgcmV0dXJuIEVkaXRvci5wYXRoUmVmKGVkaXRvciwgcCk7XG4gICAgICB9KTtcblxuICAgICAgZm9yICh2YXIgcGF0aFJlZiBvZiBwYXRoUmVmcykge1xuICAgICAgICB2YXIgcGF0aCA9IHBhdGhSZWYudW5yZWYoKTtcblxuICAgICAgICBpZiAocGF0aC5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGxpZnQgbm9kZSBhdCBhIHBhdGggW1wiLmNvbmNhdChwYXRoLCBcIl0gYmVjYXVzZSBpdCBoYXMgYSBkZXB0aCBvZiBsZXNzIHRoYW4gYDJgLlwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGFyZW50Tm9kZUVudHJ5ID0gRWRpdG9yLm5vZGUoZWRpdG9yLCBQYXRoLnBhcmVudChwYXRoKSk7XG4gICAgICAgIHZhciBbcGFyZW50LCBwYXJlbnRQYXRoXSA9IHBhcmVudE5vZGVFbnRyeTtcbiAgICAgICAgdmFyIGluZGV4ID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIge1xuICAgICAgICAgIGxlbmd0aFxuICAgICAgICB9ID0gcGFyZW50LmNoaWxkcmVuO1xuXG4gICAgICAgIGlmIChsZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB2YXIgdG9QYXRoID0gUGF0aC5uZXh0KHBhcmVudFBhdGgpO1xuICAgICAgICAgIFRyYW5zZm9ybXMubW92ZU5vZGVzKGVkaXRvciwge1xuICAgICAgICAgICAgYXQ6IHBhdGgsXG4gICAgICAgICAgICB0bzogdG9QYXRoLFxuICAgICAgICAgICAgdm9pZHNcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBUcmFuc2Zvcm1zLnJlbW92ZU5vZGVzKGVkaXRvciwge1xuICAgICAgICAgICAgYXQ6IHBhcmVudFBhdGgsXG4gICAgICAgICAgICB2b2lkc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5tb3ZlTm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgICBhdDogcGF0aCxcbiAgICAgICAgICAgIHRvOiBwYXJlbnRQYXRoLFxuICAgICAgICAgICAgdm9pZHNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gbGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHZhciBfdG9QYXRoID0gUGF0aC5uZXh0KHBhcmVudFBhdGgpO1xuXG4gICAgICAgICAgVHJhbnNmb3Jtcy5tb3ZlTm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgICBhdDogcGF0aCxcbiAgICAgICAgICAgIHRvOiBfdG9QYXRoLFxuICAgICAgICAgICAgdm9pZHNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgc3BsaXRQYXRoID0gUGF0aC5uZXh0KHBhdGgpO1xuXG4gICAgICAgICAgdmFyIF90b1BhdGgyID0gUGF0aC5uZXh0KHBhcmVudFBhdGgpO1xuXG4gICAgICAgICAgVHJhbnNmb3Jtcy5zcGxpdE5vZGVzKGVkaXRvciwge1xuICAgICAgICAgICAgYXQ6IHNwbGl0UGF0aCxcbiAgICAgICAgICAgIHZvaWRzXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5tb3ZlTm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgICBhdDogcGF0aCxcbiAgICAgICAgICAgIHRvOiBfdG9QYXRoMixcbiAgICAgICAgICAgIHZvaWRzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvKipcclxuICAgKiBNZXJnZSBhIG5vZGUgYXQgYSBsb2NhdGlvbiB3aXRoIHRoZSBwcmV2aW91cyBub2RlIG9mIHRoZSBzYW1lIGRlcHRoLFxyXG4gICAqIHJlbW92aW5nIGFueSBlbXB0eSBjb250YWluaW5nIG5vZGVzIGFmdGVyIHRoZSBtZXJnZSBpZiBuZWNlc3NhcnkuXHJcbiAgICovXG4gIG1lcmdlTm9kZXMoZWRpdG9yKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIEVkaXRvci53aXRob3V0Tm9ybWFsaXppbmcoZWRpdG9yLCAoKSA9PiB7XG4gICAgICB2YXIge1xuICAgICAgICBtYXRjaCxcbiAgICAgICAgYXQgPSBlZGl0b3Iuc2VsZWN0aW9uXG4gICAgICB9ID0gb3B0aW9ucztcbiAgICAgIHZhciB7XG4gICAgICAgIGhhbmdpbmcgPSBmYWxzZSxcbiAgICAgICAgdm9pZHMgPSBmYWxzZSxcbiAgICAgICAgbW9kZSA9ICdsb3dlc3QnXG4gICAgICB9ID0gb3B0aW9ucztcblxuICAgICAgaWYgKCFhdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXRjaCA9PSBudWxsKSB7XG4gICAgICAgIGlmIChQYXRoLmlzUGF0aChhdCkpIHtcbiAgICAgICAgICB2YXIgW3BhcmVudF0gPSBFZGl0b3IucGFyZW50KGVkaXRvciwgYXQpO1xuXG4gICAgICAgICAgbWF0Y2ggPSBuID0+IHBhcmVudC5jaGlsZHJlbi5pbmNsdWRlcyhuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXRjaCA9IG4gPT4gRWRpdG9yLmlzQmxvY2soZWRpdG9yLCBuKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWhhbmdpbmcgJiYgUmFuZ2UuaXNSYW5nZShhdCkpIHtcbiAgICAgICAgYXQgPSBFZGl0b3IudW5oYW5nUmFuZ2UoZWRpdG9yLCBhdCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChSYW5nZS5pc1JhbmdlKGF0KSkge1xuICAgICAgICBpZiAoUmFuZ2UuaXNDb2xsYXBzZWQoYXQpKSB7XG4gICAgICAgICAgYXQgPSBhdC5hbmNob3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIFssIGVuZF0gPSBSYW5nZS5lZGdlcyhhdCk7XG4gICAgICAgICAgdmFyIHBvaW50UmVmID0gRWRpdG9yLnBvaW50UmVmKGVkaXRvciwgZW5kKTtcbiAgICAgICAgICBUcmFuc2Zvcm1zLmRlbGV0ZShlZGl0b3IsIHtcbiAgICAgICAgICAgIGF0XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYXQgPSBwb2ludFJlZi51bnJlZigpO1xuXG4gICAgICAgICAgaWYgKG9wdGlvbnMuYXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgVHJhbnNmb3Jtcy5zZWxlY3QoZWRpdG9yLCBhdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBbY3VycmVudF0gPSBFZGl0b3Iubm9kZXMoZWRpdG9yLCB7XG4gICAgICAgIGF0LFxuICAgICAgICBtYXRjaCxcbiAgICAgICAgdm9pZHMsXG4gICAgICAgIG1vZGVcbiAgICAgIH0pO1xuICAgICAgdmFyIHByZXYgPSBFZGl0b3IucHJldmlvdXMoZWRpdG9yLCB7XG4gICAgICAgIGF0LFxuICAgICAgICBtYXRjaCxcbiAgICAgICAgdm9pZHMsXG4gICAgICAgIG1vZGVcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWN1cnJlbnQgfHwgIXByZXYpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgW25vZGUsIHBhdGhdID0gY3VycmVudDtcbiAgICAgIHZhciBbcHJldk5vZGUsIHByZXZQYXRoXSA9IHByZXY7XG5cbiAgICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCB8fCBwcmV2UGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3UGF0aCA9IFBhdGgubmV4dChwcmV2UGF0aCk7XG4gICAgICB2YXIgY29tbW9uUGF0aCA9IFBhdGguY29tbW9uKHBhdGgsIHByZXZQYXRoKTtcbiAgICAgIHZhciBpc1ByZXZpb3VzU2libGluZyA9IFBhdGguaXNTaWJsaW5nKHBhdGgsIHByZXZQYXRoKTtcbiAgICAgIHZhciBsZXZlbHMgPSBBcnJheS5mcm9tKEVkaXRvci5sZXZlbHMoZWRpdG9yLCB7XG4gICAgICAgIGF0OiBwYXRoXG4gICAgICB9KSwgX3JlZjIgPT4ge1xuICAgICAgICB2YXIgW25dID0gX3JlZjI7XG4gICAgICAgIHJldHVybiBuO1xuICAgICAgfSkuc2xpY2UoY29tbW9uUGF0aC5sZW5ndGgpLnNsaWNlKDAsIC0xKTsgLy8gRGV0ZXJtaW5lIGlmIHRoZSBtZXJnZSB3aWxsIGxlYXZlIGFuIGFuY2VzdG9yIG9mIHRoZSBwYXRoIGVtcHR5IGFzIGFcbiAgICAgIC8vIHJlc3VsdCwgaW4gd2hpY2ggY2FzZSB3ZSdsbCB3YW50IHRvIHJlbW92ZSBpdCBhZnRlciBtZXJnaW5nLlxuXG4gICAgICB2YXIgZW1wdHlBbmNlc3RvciA9IEVkaXRvci5hYm92ZShlZGl0b3IsIHtcbiAgICAgICAgYXQ6IHBhdGgsXG4gICAgICAgIG1vZGU6ICdoaWdoZXN0JyxcbiAgICAgICAgbWF0Y2g6IG4gPT4gbGV2ZWxzLmluY2x1ZGVzKG4pICYmIGhhc1NpbmdsZUNoaWxkTmVzdChlZGl0b3IsIG4pXG4gICAgICB9KTtcbiAgICAgIHZhciBlbXB0eVJlZiA9IGVtcHR5QW5jZXN0b3IgJiYgRWRpdG9yLnBhdGhSZWYoZWRpdG9yLCBlbXB0eUFuY2VzdG9yWzFdKTtcbiAgICAgIHZhciBwcm9wZXJ0aWVzO1xuICAgICAgdmFyIHBvc2l0aW9uOyAvLyBFbnN1cmUgdGhhdCB0aGUgbm9kZXMgYXJlIGVxdWl2YWxlbnQsIGFuZCBmaWd1cmUgb3V0IHdoYXQgdGhlIHBvc2l0aW9uXG4gICAgICAvLyBhbmQgZXh0cmEgcHJvcGVydGllcyBvZiB0aGUgbWVyZ2Ugd2lsbCBiZS5cblxuICAgICAgaWYgKFRleHQuaXNUZXh0KG5vZGUpICYmIFRleHQuaXNUZXh0KHByZXZOb2RlKSkge1xuICAgICAgICB2YXIgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhub2RlLCBfZXhjbHVkZWQpO1xuXG4gICAgICAgIHBvc2l0aW9uID0gcHJldk5vZGUudGV4dC5sZW5ndGg7XG4gICAgICAgIHByb3BlcnRpZXMgPSByZXN0O1xuICAgICAgfSBlbHNlIGlmIChFbGVtZW50LmlzRWxlbWVudChub2RlKSAmJiBFbGVtZW50LmlzRWxlbWVudChwcmV2Tm9kZSkpIHtcbiAgICAgICAgdmFyIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMobm9kZSwgX2V4Y2x1ZGVkMik7XG5cbiAgICAgICAgcG9zaXRpb24gPSBwcmV2Tm9kZS5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIHByb3BlcnRpZXMgPSByZXN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IG1lcmdlIHRoZSBub2RlIGF0IHBhdGggW1wiLmNvbmNhdChwYXRoLCBcIl0gd2l0aCB0aGUgcHJldmlvdXMgc2libGluZyBiZWNhdXNlIGl0IGlzIG5vdCB0aGUgc2FtZSBraW5kOiBcIikuY29uY2F0KEpTT04uc3RyaW5naWZ5KG5vZGUpLCBcIiBcIikuY29uY2F0KEpTT04uc3RyaW5naWZ5KHByZXZOb2RlKSkpO1xuICAgICAgfSAvLyBJZiB0aGUgbm9kZSBpc24ndCBhbHJlYWR5IHRoZSBuZXh0IHNpYmxpbmcgb2YgdGhlIHByZXZpb3VzIG5vZGUsIG1vdmVcbiAgICAgIC8vIGl0IHNvIHRoYXQgaXQgaXMgYmVmb3JlIG1lcmdpbmcuXG5cblxuICAgICAgaWYgKCFpc1ByZXZpb3VzU2libGluZykge1xuICAgICAgICBUcmFuc2Zvcm1zLm1vdmVOb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICBhdDogcGF0aCxcbiAgICAgICAgICB0bzogbmV3UGF0aCxcbiAgICAgICAgICB2b2lkc1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gSWYgdGhlcmUgd2FzIGdvaW5nIHRvIGJlIGFuIGVtcHR5IGFuY2VzdG9yIG9mIHRoZSBub2RlIHRoYXQgd2FzIG1lcmdlZCxcbiAgICAgIC8vIHdlIHJlbW92ZSBpdCBmcm9tIHRoZSB0cmVlLlxuXG5cbiAgICAgIGlmIChlbXB0eVJlZikge1xuICAgICAgICBUcmFuc2Zvcm1zLnJlbW92ZU5vZGVzKGVkaXRvciwge1xuICAgICAgICAgIGF0OiBlbXB0eVJlZi5jdXJyZW50LFxuICAgICAgICAgIHZvaWRzXG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBJZiB0aGUgdGFyZ2V0IG5vZGUgdGhhdCB3ZSdyZSBtZXJnaW5nIHdpdGggaXMgZW1wdHksIHJlbW92ZSBpdCBpbnN0ZWFkXG4gICAgICAvLyBvZiBtZXJnaW5nIHRoZSB0d28uIFRoaXMgaXMgYSBjb21tb24gcmljaCB0ZXh0IGVkaXRvciBiZWhhdmlvciB0b1xuICAgICAgLy8gcHJldmVudCBsb3NpbmcgZm9ybWF0dGluZyB3aGVuIGRlbGV0aW5nIGVudGlyZSBub2RlcyB3aGVuIHlvdSBoYXZlIGFcbiAgICAgIC8vIGhhbmdpbmcgc2VsZWN0aW9uLlxuICAgICAgLy8gaWYgcHJldk5vZGUgaXMgZmlyc3QgY2hpbGQgaW4gcGFyZW50LGRvbid0IHJlbW92ZSBpdC5cblxuXG4gICAgICBpZiAoRWxlbWVudC5pc0VsZW1lbnQocHJldk5vZGUpICYmIEVkaXRvci5pc0VtcHR5KGVkaXRvciwgcHJldk5vZGUpIHx8IFRleHQuaXNUZXh0KHByZXZOb2RlKSAmJiBwcmV2Tm9kZS50ZXh0ID09PSAnJyAmJiBwcmV2UGF0aFtwcmV2UGF0aC5sZW5ndGggLSAxXSAhPT0gMCkge1xuICAgICAgICBUcmFuc2Zvcm1zLnJlbW92ZU5vZGVzKGVkaXRvciwge1xuICAgICAgICAgIGF0OiBwcmV2UGF0aCxcbiAgICAgICAgICB2b2lkc1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVkaXRvci5hcHBseSh7XG4gICAgICAgICAgdHlwZTogJ21lcmdlX25vZGUnLFxuICAgICAgICAgIHBhdGg6IG5ld1BhdGgsXG4gICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgcHJvcGVydGllc1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVtcHR5UmVmKSB7XG4gICAgICAgIGVtcHR5UmVmLnVucmVmKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogTW92ZSB0aGUgbm9kZXMgYXQgYSBsb2NhdGlvbiB0byBhIG5ldyBsb2NhdGlvbi5cclxuICAgKi9cbiAgbW92ZU5vZGVzKGVkaXRvciwgb3B0aW9ucykge1xuICAgIEVkaXRvci53aXRob3V0Tm9ybWFsaXppbmcoZWRpdG9yLCAoKSA9PiB7XG4gICAgICB2YXIge1xuICAgICAgICB0byxcbiAgICAgICAgYXQgPSBlZGl0b3Iuc2VsZWN0aW9uLFxuICAgICAgICBtb2RlID0gJ2xvd2VzdCcsXG4gICAgICAgIHZvaWRzID0gZmFsc2VcbiAgICAgIH0gPSBvcHRpb25zO1xuICAgICAgdmFyIHtcbiAgICAgICAgbWF0Y2hcbiAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgICBpZiAoIWF0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKG1hdGNoID09IG51bGwpIHtcbiAgICAgICAgbWF0Y2ggPSBQYXRoLmlzUGF0aChhdCkgPyBtYXRjaFBhdGgoZWRpdG9yLCBhdCkgOiBuID0+IEVkaXRvci5pc0Jsb2NrKGVkaXRvciwgbik7XG4gICAgICB9XG5cbiAgICAgIHZhciB0b1JlZiA9IEVkaXRvci5wYXRoUmVmKGVkaXRvciwgdG8pO1xuICAgICAgdmFyIHRhcmdldHMgPSBFZGl0b3Iubm9kZXMoZWRpdG9yLCB7XG4gICAgICAgIGF0LFxuICAgICAgICBtYXRjaCxcbiAgICAgICAgbW9kZSxcbiAgICAgICAgdm9pZHNcbiAgICAgIH0pO1xuICAgICAgdmFyIHBhdGhSZWZzID0gQXJyYXkuZnJvbSh0YXJnZXRzLCBfcmVmMyA9PiB7XG4gICAgICAgIHZhciBbLCBwXSA9IF9yZWYzO1xuICAgICAgICByZXR1cm4gRWRpdG9yLnBhdGhSZWYoZWRpdG9yLCBwKTtcbiAgICAgIH0pO1xuXG4gICAgICBmb3IgKHZhciBwYXRoUmVmIG9mIHBhdGhSZWZzKSB7XG4gICAgICAgIHZhciBwYXRoID0gcGF0aFJlZi51bnJlZigpO1xuICAgICAgICB2YXIgbmV3UGF0aCA9IHRvUmVmLmN1cnJlbnQ7XG5cbiAgICAgICAgaWYgKHBhdGgubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgZWRpdG9yLmFwcGx5KHtcbiAgICAgICAgICAgIHR5cGU6ICdtb3ZlX25vZGUnLFxuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIG5ld1BhdGhcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b1JlZi5jdXJyZW50ICYmIFBhdGguaXNTaWJsaW5nKG5ld1BhdGgsIHBhdGgpICYmIFBhdGguaXNBZnRlcihuZXdQYXRoLCBwYXRoKSkge1xuICAgICAgICAgIC8vIFdoZW4gcGVyZm9ybWluZyBhIHNpYmxpbmcgbW92ZSB0byBhIGxhdGVyIGluZGV4LCB0aGUgcGF0aCBhdCB0aGUgZGVzdGluYXRpb24gaXMgc2hpZnRlZFxuICAgICAgICAgIC8vIHRvIGJlZm9yZSB0aGUgaW5zZXJ0aW9uIHBvaW50IGluc3RlYWQgb2YgYWZ0ZXIuIFRvIGVuc3VyZSBvdXIgZ3JvdXAgb2Ygbm9kZXMgYXJlIGluc2VydGVkXG4gICAgICAgICAgLy8gaW4gdGhlIGNvcnJlY3Qgb3JkZXIgd2UgaW5jcmVtZW50IHRvUmVmIHRvIGFjY291bnQgZm9yIHRoYXRcbiAgICAgICAgICB0b1JlZi5jdXJyZW50ID0gUGF0aC5uZXh0KHRvUmVmLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRvUmVmLnVucmVmKCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogUmVtb3ZlIHRoZSBub2RlcyBhdCBhIHNwZWNpZmljIGxvY2F0aW9uIGluIHRoZSBkb2N1bWVudC5cclxuICAgKi9cbiAgcmVtb3ZlTm9kZXMoZWRpdG9yKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIEVkaXRvci53aXRob3V0Tm9ybWFsaXppbmcoZWRpdG9yLCAoKSA9PiB7XG4gICAgICB2YXIge1xuICAgICAgICBoYW5naW5nID0gZmFsc2UsXG4gICAgICAgIHZvaWRzID0gZmFsc2UsXG4gICAgICAgIG1vZGUgPSAnbG93ZXN0J1xuICAgICAgfSA9IG9wdGlvbnM7XG4gICAgICB2YXIge1xuICAgICAgICBhdCA9IGVkaXRvci5zZWxlY3Rpb24sXG4gICAgICAgIG1hdGNoXG4gICAgICB9ID0gb3B0aW9ucztcblxuICAgICAgaWYgKCFhdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXRjaCA9PSBudWxsKSB7XG4gICAgICAgIG1hdGNoID0gUGF0aC5pc1BhdGgoYXQpID8gbWF0Y2hQYXRoKGVkaXRvciwgYXQpIDogbiA9PiBFZGl0b3IuaXNCbG9jayhlZGl0b3IsIG4pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWhhbmdpbmcgJiYgUmFuZ2UuaXNSYW5nZShhdCkpIHtcbiAgICAgICAgYXQgPSBFZGl0b3IudW5oYW5nUmFuZ2UoZWRpdG9yLCBhdCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBkZXB0aHMgPSBFZGl0b3Iubm9kZXMoZWRpdG9yLCB7XG4gICAgICAgIGF0LFxuICAgICAgICBtYXRjaCxcbiAgICAgICAgbW9kZSxcbiAgICAgICAgdm9pZHNcbiAgICAgIH0pO1xuICAgICAgdmFyIHBhdGhSZWZzID0gQXJyYXkuZnJvbShkZXB0aHMsIF9yZWY0ID0+IHtcbiAgICAgICAgdmFyIFssIHBdID0gX3JlZjQ7XG4gICAgICAgIHJldHVybiBFZGl0b3IucGF0aFJlZihlZGl0b3IsIHApO1xuICAgICAgfSk7XG5cbiAgICAgIGZvciAodmFyIHBhdGhSZWYgb2YgcGF0aFJlZnMpIHtcbiAgICAgICAgdmFyIHBhdGggPSBwYXRoUmVmLnVucmVmKCk7XG5cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICB2YXIgW25vZGVdID0gRWRpdG9yLm5vZGUoZWRpdG9yLCBwYXRoKTtcbiAgICAgICAgICBlZGl0b3IuYXBwbHkoe1xuICAgICAgICAgICAgdHlwZTogJ3JlbW92ZV9ub2RlJyxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBub2RlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvKipcclxuICAgKiBTZXQgbmV3IHByb3BlcnRpZXMgb24gdGhlIG5vZGVzIGF0IGEgbG9jYXRpb24uXHJcbiAgICovXG4gIHNldE5vZGVzKGVkaXRvciwgcHJvcHMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgRWRpdG9yLndpdGhvdXROb3JtYWxpemluZyhlZGl0b3IsICgpID0+IHtcbiAgICAgIHZhciB7XG4gICAgICAgIG1hdGNoLFxuICAgICAgICBhdCA9IGVkaXRvci5zZWxlY3Rpb25cbiAgICAgIH0gPSBvcHRpb25zO1xuICAgICAgdmFyIHtcbiAgICAgICAgaGFuZ2luZyA9IGZhbHNlLFxuICAgICAgICBtb2RlID0gJ2xvd2VzdCcsXG4gICAgICAgIHNwbGl0ID0gZmFsc2UsXG4gICAgICAgIHZvaWRzID0gZmFsc2VcbiAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgICBpZiAoIWF0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKG1hdGNoID09IG51bGwpIHtcbiAgICAgICAgbWF0Y2ggPSBQYXRoLmlzUGF0aChhdCkgPyBtYXRjaFBhdGgoZWRpdG9yLCBhdCkgOiBuID0+IEVkaXRvci5pc0Jsb2NrKGVkaXRvciwgbik7XG4gICAgICB9XG5cbiAgICAgIGlmICghaGFuZ2luZyAmJiBSYW5nZS5pc1JhbmdlKGF0KSkge1xuICAgICAgICBhdCA9IEVkaXRvci51bmhhbmdSYW5nZShlZGl0b3IsIGF0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNwbGl0ICYmIFJhbmdlLmlzUmFuZ2UoYXQpKSB7XG4gICAgICAgIGlmIChSYW5nZS5pc0NvbGxhcHNlZChhdCkgJiYgRWRpdG9yLmxlYWYoZWRpdG9yLCBhdC5hbmNob3IpWzBdLnRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIC8vIElmIHRoZSByYW5nZSBpcyBjb2xsYXBzZWQgaW4gYSBub24tZW1wdHkgbm9kZSBhbmQgJ3NwbGl0JyBpcyB0cnVlLCB0aGVyZSdzIG5vdGhpbmcgdG9cbiAgICAgICAgICAvLyBzZXQgdGhhdCB3b24ndCBnZXQgbm9ybWFsaXplZCBhd2F5XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJhbmdlUmVmID0gRWRpdG9yLnJhbmdlUmVmKGVkaXRvciwgYXQsIHtcbiAgICAgICAgICBhZmZpbml0eTogJ2lud2FyZCdcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBbc3RhcnQsIGVuZF0gPSBSYW5nZS5lZGdlcyhhdCk7XG4gICAgICAgIHZhciBzcGxpdE1vZGUgPSBtb2RlID09PSAnbG93ZXN0JyA/ICdsb3dlc3QnIDogJ2hpZ2hlc3QnO1xuICAgICAgICB2YXIgZW5kQXRFbmRPZk5vZGUgPSBFZGl0b3IuaXNFbmQoZWRpdG9yLCBlbmQsIGVuZC5wYXRoKTtcbiAgICAgICAgVHJhbnNmb3Jtcy5zcGxpdE5vZGVzKGVkaXRvciwge1xuICAgICAgICAgIGF0OiBlbmQsXG4gICAgICAgICAgbWF0Y2gsXG4gICAgICAgICAgbW9kZTogc3BsaXRNb2RlLFxuICAgICAgICAgIHZvaWRzLFxuICAgICAgICAgIGFsd2F5czogIWVuZEF0RW5kT2ZOb2RlXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgc3RhcnRBdFN0YXJ0T2ZOb2RlID0gRWRpdG9yLmlzU3RhcnQoZWRpdG9yLCBzdGFydCwgc3RhcnQucGF0aCk7XG4gICAgICAgIFRyYW5zZm9ybXMuc3BsaXROb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICBhdDogc3RhcnQsXG4gICAgICAgICAgbWF0Y2gsXG4gICAgICAgICAgbW9kZTogc3BsaXRNb2RlLFxuICAgICAgICAgIHZvaWRzLFxuICAgICAgICAgIGFsd2F5czogIXN0YXJ0QXRTdGFydE9mTm9kZVxuICAgICAgICB9KTtcbiAgICAgICAgYXQgPSByYW5nZVJlZi51bnJlZigpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmF0ID09IG51bGwpIHtcbiAgICAgICAgICBUcmFuc2Zvcm1zLnNlbGVjdChlZGl0b3IsIGF0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBbbm9kZSwgcGF0aF0gb2YgRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgICBhdCxcbiAgICAgICAgbWF0Y2gsXG4gICAgICAgIG1vZGUsXG4gICAgICAgIHZvaWRzXG4gICAgICB9KSkge1xuICAgICAgICB2YXIgcHJvcGVydGllcyA9IHt9O1xuICAgICAgICB2YXIgbmV3UHJvcGVydGllcyA9IHt9OyAvLyBZb3UgY2FuJ3Qgc2V0IHByb3BlcnRpZXMgb24gdGhlIGVkaXRvciBub2RlLlxuXG4gICAgICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGhhc0NoYW5nZXMgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKHZhciBrIGluIHByb3BzKSB7XG4gICAgICAgICAgaWYgKGsgPT09ICdjaGlsZHJlbicgfHwgayA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocHJvcHNba10gIT09IG5vZGVba10pIHtcbiAgICAgICAgICAgIGhhc0NoYW5nZXMgPSB0cnVlOyAvLyBPbWl0IG5ldyBwcm9wZXJ0aWVzIGZyb20gdGhlIG9sZCBwcm9wZXJ0aWVzIGxpc3RcblxuICAgICAgICAgICAgaWYgKG5vZGUuaGFzT3duUHJvcGVydHkoaykpIHByb3BlcnRpZXNba10gPSBub2RlW2tdOyAvLyBPbWl0IHByb3BlcnRpZXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBuZXcgcHJvcGVydGllcyBsaXN0XG5cbiAgICAgICAgICAgIGlmIChwcm9wc1trXSAhPSBudWxsKSBuZXdQcm9wZXJ0aWVzW2tdID0gcHJvcHNba107XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc0NoYW5nZXMpIHtcbiAgICAgICAgICBlZGl0b3IuYXBwbHkoe1xuICAgICAgICAgICAgdHlwZTogJ3NldF9ub2RlJyxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLFxuICAgICAgICAgICAgbmV3UHJvcGVydGllc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogU3BsaXQgdGhlIG5vZGVzIGF0IGEgc3BlY2lmaWMgbG9jYXRpb24uXHJcbiAgICovXG4gIHNwbGl0Tm9kZXMoZWRpdG9yKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIEVkaXRvci53aXRob3V0Tm9ybWFsaXppbmcoZWRpdG9yLCAoKSA9PiB7XG4gICAgICB2YXIge1xuICAgICAgICBtb2RlID0gJ2xvd2VzdCcsXG4gICAgICAgIHZvaWRzID0gZmFsc2VcbiAgICAgIH0gPSBvcHRpb25zO1xuICAgICAgdmFyIHtcbiAgICAgICAgbWF0Y2gsXG4gICAgICAgIGF0ID0gZWRpdG9yLnNlbGVjdGlvbixcbiAgICAgICAgaGVpZ2h0ID0gMCxcbiAgICAgICAgYWx3YXlzID0gZmFsc2VcbiAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgICBpZiAobWF0Y2ggPT0gbnVsbCkge1xuICAgICAgICBtYXRjaCA9IG4gPT4gRWRpdG9yLmlzQmxvY2soZWRpdG9yLCBuKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFJhbmdlLmlzUmFuZ2UoYXQpKSB7XG4gICAgICAgIGF0ID0gZGVsZXRlUmFuZ2UoZWRpdG9yLCBhdCk7XG4gICAgICB9IC8vIElmIHRoZSB0YXJnZXQgaXMgYSBwYXRoLCB0aGUgZGVmYXVsdCBoZWlnaHQtc2tpcHBpbmcgYW5kIHBvc2l0aW9uXG4gICAgICAvLyBjb3VudGVycyBuZWVkIHRvIGFjY291bnQgZm9yIHVzIHBvdGVudGlhbGx5IHNwbGl0dGluZyBhdCBhIG5vbi1sZWFmLlxuXG5cbiAgICAgIGlmIChQYXRoLmlzUGF0aChhdCkpIHtcbiAgICAgICAgdmFyIHBhdGggPSBhdDtcbiAgICAgICAgdmFyIHBvaW50ID0gRWRpdG9yLnBvaW50KGVkaXRvciwgcGF0aCk7XG4gICAgICAgIHZhciBbcGFyZW50XSA9IEVkaXRvci5wYXJlbnQoZWRpdG9yLCBwYXRoKTtcblxuICAgICAgICBtYXRjaCA9IG4gPT4gbiA9PT0gcGFyZW50O1xuXG4gICAgICAgIGhlaWdodCA9IHBvaW50LnBhdGgubGVuZ3RoIC0gcGF0aC5sZW5ndGggKyAxO1xuICAgICAgICBhdCA9IHBvaW50O1xuICAgICAgICBhbHdheXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWF0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGJlZm9yZVJlZiA9IEVkaXRvci5wb2ludFJlZihlZGl0b3IsIGF0LCB7XG4gICAgICAgIGFmZmluaXR5OiAnYmFja3dhcmQnXG4gICAgICB9KTtcbiAgICAgIHZhciBbaGlnaGVzdF0gPSBFZGl0b3Iubm9kZXMoZWRpdG9yLCB7XG4gICAgICAgIGF0LFxuICAgICAgICBtYXRjaCxcbiAgICAgICAgbW9kZSxcbiAgICAgICAgdm9pZHNcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWhpZ2hlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgdm9pZE1hdGNoID0gRWRpdG9yLnZvaWQoZWRpdG9yLCB7XG4gICAgICAgIGF0LFxuICAgICAgICBtb2RlOiAnaGlnaGVzdCdcbiAgICAgIH0pO1xuICAgICAgdmFyIG51ZGdlID0gMDtcblxuICAgICAgaWYgKCF2b2lkcyAmJiB2b2lkTWF0Y2gpIHtcbiAgICAgICAgdmFyIFt2b2lkTm9kZSwgdm9pZFBhdGhdID0gdm9pZE1hdGNoO1xuXG4gICAgICAgIGlmIChFbGVtZW50LmlzRWxlbWVudCh2b2lkTm9kZSkgJiYgZWRpdG9yLmlzSW5saW5lKHZvaWROb2RlKSkge1xuICAgICAgICAgIHZhciBhZnRlciA9IEVkaXRvci5hZnRlcihlZGl0b3IsIHZvaWRQYXRoKTtcblxuICAgICAgICAgIGlmICghYWZ0ZXIpIHtcbiAgICAgICAgICAgIHZhciB0ZXh0ID0ge1xuICAgICAgICAgICAgICB0ZXh0OiAnJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBhZnRlclBhdGggPSBQYXRoLm5leHQodm9pZFBhdGgpO1xuICAgICAgICAgICAgVHJhbnNmb3Jtcy5pbnNlcnROb2RlcyhlZGl0b3IsIHRleHQsIHtcbiAgICAgICAgICAgICAgYXQ6IGFmdGVyUGF0aCxcbiAgICAgICAgICAgICAgdm9pZHNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYWZ0ZXIgPSBFZGl0b3IucG9pbnQoZWRpdG9yLCBhZnRlclBhdGgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGF0ID0gYWZ0ZXI7XG4gICAgICAgICAgYWx3YXlzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzaWJsaW5nSGVpZ2h0ID0gYXQucGF0aC5sZW5ndGggLSB2b2lkUGF0aC5sZW5ndGg7XG4gICAgICAgIGhlaWdodCA9IHNpYmxpbmdIZWlnaHQgKyAxO1xuICAgICAgICBhbHdheXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWZ0ZXJSZWYgPSBFZGl0b3IucG9pbnRSZWYoZWRpdG9yLCBhdCk7XG4gICAgICB2YXIgZGVwdGggPSBhdC5wYXRoLmxlbmd0aCAtIGhlaWdodDtcbiAgICAgIHZhciBbLCBoaWdoZXN0UGF0aF0gPSBoaWdoZXN0O1xuICAgICAgdmFyIGxvd2VzdFBhdGggPSBhdC5wYXRoLnNsaWNlKDAsIGRlcHRoKTtcbiAgICAgIHZhciBwb3NpdGlvbiA9IGhlaWdodCA9PT0gMCA/IGF0Lm9mZnNldCA6IGF0LnBhdGhbZGVwdGhdICsgbnVkZ2U7XG5cbiAgICAgIGZvciAodmFyIFtub2RlLCBfcGF0aDJdIG9mIEVkaXRvci5sZXZlbHMoZWRpdG9yLCB7XG4gICAgICAgIGF0OiBsb3dlc3RQYXRoLFxuICAgICAgICByZXZlcnNlOiB0cnVlLFxuICAgICAgICB2b2lkc1xuICAgICAgfSkpIHtcbiAgICAgICAgdmFyIHNwbGl0ID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKF9wYXRoMi5sZW5ndGggPCBoaWdoZXN0UGF0aC5sZW5ndGggfHwgX3BhdGgyLmxlbmd0aCA9PT0gMCB8fCAhdm9pZHMgJiYgRWRpdG9yLmlzVm9pZChlZGl0b3IsIG5vZGUpKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3BvaW50ID0gYmVmb3JlUmVmLmN1cnJlbnQ7XG4gICAgICAgIHZhciBpc0VuZCA9IEVkaXRvci5pc0VuZChlZGl0b3IsIF9wb2ludCwgX3BhdGgyKTtcblxuICAgICAgICBpZiAoYWx3YXlzIHx8ICFiZWZvcmVSZWYgfHwgIUVkaXRvci5pc0VkZ2UoZWRpdG9yLCBfcG9pbnQsIF9wYXRoMikpIHtcbiAgICAgICAgICBzcGxpdCA9IHRydWU7XG4gICAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBOb2RlLmV4dHJhY3RQcm9wcyhub2RlKTtcbiAgICAgICAgICBlZGl0b3IuYXBwbHkoe1xuICAgICAgICAgICAgdHlwZTogJ3NwbGl0X25vZGUnLFxuICAgICAgICAgICAgcGF0aDogX3BhdGgyLFxuICAgICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgICBwcm9wZXJ0aWVzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBwb3NpdGlvbiA9IF9wYXRoMltfcGF0aDIubGVuZ3RoIC0gMV0gKyAoc3BsaXQgfHwgaXNFbmQgPyAxIDogMCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmF0ID09IG51bGwpIHtcbiAgICAgICAgdmFyIF9wb2ludDIgPSBhZnRlclJlZi5jdXJyZW50IHx8IEVkaXRvci5lbmQoZWRpdG9yLCBbXSk7XG5cbiAgICAgICAgVHJhbnNmb3Jtcy5zZWxlY3QoZWRpdG9yLCBfcG9pbnQyKTtcbiAgICAgIH1cblxuICAgICAgYmVmb3JlUmVmLnVucmVmKCk7XG4gICAgICBhZnRlclJlZi51bnJlZigpO1xuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIFVuc2V0IHByb3BlcnRpZXMgb24gdGhlIG5vZGVzIGF0IGEgbG9jYXRpb24uXHJcbiAgICovXG4gIHVuc2V0Tm9kZXMoZWRpdG9yLCBwcm9wcykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wcykpIHtcbiAgICAgIHByb3BzID0gW3Byb3BzXTtcbiAgICB9XG5cbiAgICB2YXIgb2JqID0ge307XG5cbiAgICBmb3IgKHZhciBrZXkgb2YgcHJvcHMpIHtcbiAgICAgIG9ialtrZXldID0gbnVsbDtcbiAgICB9XG5cbiAgICBUcmFuc2Zvcm1zLnNldE5vZGVzKGVkaXRvciwgb2JqLCBvcHRpb25zKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBVbndyYXAgdGhlIG5vZGVzIGF0IGEgbG9jYXRpb24gZnJvbSBhIHBhcmVudCBub2RlLCBzcGxpdHRpbmcgdGhlIHBhcmVudCBpZlxyXG4gICAqIG5lY2Vzc2FyeSB0byBlbnN1cmUgdGhhdCBvbmx5IHRoZSBjb250ZW50IGluIHRoZSByYW5nZSBpcyB1bndyYXBwZWQuXHJcbiAgICovXG4gIHVud3JhcE5vZGVzKGVkaXRvcikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBFZGl0b3Iud2l0aG91dE5vcm1hbGl6aW5nKGVkaXRvciwgKCkgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgbW9kZSA9ICdsb3dlc3QnLFxuICAgICAgICBzcGxpdCA9IGZhbHNlLFxuICAgICAgICB2b2lkcyA9IGZhbHNlXG4gICAgICB9ID0gb3B0aW9ucztcbiAgICAgIHZhciB7XG4gICAgICAgIGF0ID0gZWRpdG9yLnNlbGVjdGlvbixcbiAgICAgICAgbWF0Y2hcbiAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgICBpZiAoIWF0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKG1hdGNoID09IG51bGwpIHtcbiAgICAgICAgbWF0Y2ggPSBQYXRoLmlzUGF0aChhdCkgPyBtYXRjaFBhdGgoZWRpdG9yLCBhdCkgOiBuID0+IEVkaXRvci5pc0Jsb2NrKGVkaXRvciwgbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChQYXRoLmlzUGF0aChhdCkpIHtcbiAgICAgICAgYXQgPSBFZGl0b3IucmFuZ2UoZWRpdG9yLCBhdCk7XG4gICAgICB9XG5cbiAgICAgIHZhciByYW5nZVJlZiA9IFJhbmdlLmlzUmFuZ2UoYXQpID8gRWRpdG9yLnJhbmdlUmVmKGVkaXRvciwgYXQpIDogbnVsbDtcbiAgICAgIHZhciBtYXRjaGVzID0gRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgICBhdCxcbiAgICAgICAgbWF0Y2gsXG4gICAgICAgIG1vZGUsXG4gICAgICAgIHZvaWRzXG4gICAgICB9KTtcbiAgICAgIHZhciBwYXRoUmVmcyA9IEFycmF5LmZyb20obWF0Y2hlcywgX3JlZjUgPT4ge1xuICAgICAgICB2YXIgWywgcF0gPSBfcmVmNTtcbiAgICAgICAgcmV0dXJuIEVkaXRvci5wYXRoUmVmKGVkaXRvciwgcCk7XG4gICAgICB9IC8vIHVud3JhcE5vZGUgd2lsbCBjYWxsIGxpZnROb2RlIHdoaWNoIGRvZXMgbm90IHN1cHBvcnQgc3BsaXR0aW5nIHRoZSBub2RlIHdoZW4gbmVzdGVkLlxuICAgICAgLy8gSWYgd2UgZG8gbm90IHJldmVyc2UgdGhlIG9yZGVyIGFuZCBjYWxsIGl0IGZyb20gdG9wIHRvIHRoZSBib3R0b20sIGl0IHdpbGwgcmVtb3ZlIGFsbCBibG9ja3NcbiAgICAgIC8vIHRoYXQgd3JhcCB0YXJnZXQgbm9kZS4gU28gd2UgcmV2ZXJzZSB0aGUgb3JkZXIuXG4gICAgICApLnJldmVyc2UoKTtcblxuICAgICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AocGF0aFJlZikge1xuICAgICAgICB2YXIgcGF0aCA9IHBhdGhSZWYudW5yZWYoKTtcbiAgICAgICAgdmFyIFtub2RlXSA9IEVkaXRvci5ub2RlKGVkaXRvciwgcGF0aCk7XG4gICAgICAgIHZhciByYW5nZSA9IEVkaXRvci5yYW5nZShlZGl0b3IsIHBhdGgpO1xuXG4gICAgICAgIGlmIChzcGxpdCAmJiByYW5nZVJlZikge1xuICAgICAgICAgIHJhbmdlID0gUmFuZ2UuaW50ZXJzZWN0aW9uKHJhbmdlUmVmLmN1cnJlbnQsIHJhbmdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFRyYW5zZm9ybXMubGlmdE5vZGVzKGVkaXRvciwge1xuICAgICAgICAgIGF0OiByYW5nZSxcbiAgICAgICAgICBtYXRjaDogbiA9PiBFbGVtZW50LmlzQW5jZXN0b3Iobm9kZSkgJiYgbm9kZS5jaGlsZHJlbi5pbmNsdWRlcyhuKSxcbiAgICAgICAgICB2b2lkc1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIHBhdGhSZWYgb2YgcGF0aFJlZnMpIHtcbiAgICAgICAgX2xvb3AocGF0aFJlZik7XG4gICAgICB9XG5cbiAgICAgIGlmIChyYW5nZVJlZikge1xuICAgICAgICByYW5nZVJlZi51bnJlZigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIFdyYXAgdGhlIG5vZGVzIGF0IGEgbG9jYXRpb24gaW4gYSBuZXcgY29udGFpbmVyIG5vZGUsIHNwbGl0dGluZyB0aGUgZWRnZXNcclxuICAgKiBvZiB0aGUgcmFuZ2UgZmlyc3QgdG8gZW5zdXJlIHRoYXQgb25seSB0aGUgY29udGVudCBpbiB0aGUgcmFuZ2UgaXMgd3JhcHBlZC5cclxuICAgKi9cbiAgd3JhcE5vZGVzKGVkaXRvciwgZWxlbWVudCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICBFZGl0b3Iud2l0aG91dE5vcm1hbGl6aW5nKGVkaXRvciwgKCkgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgbW9kZSA9ICdsb3dlc3QnLFxuICAgICAgICBzcGxpdCA9IGZhbHNlLFxuICAgICAgICB2b2lkcyA9IGZhbHNlXG4gICAgICB9ID0gb3B0aW9ucztcbiAgICAgIHZhciB7XG4gICAgICAgIG1hdGNoLFxuICAgICAgICBhdCA9IGVkaXRvci5zZWxlY3Rpb25cbiAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgICBpZiAoIWF0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKG1hdGNoID09IG51bGwpIHtcbiAgICAgICAgaWYgKFBhdGguaXNQYXRoKGF0KSkge1xuICAgICAgICAgIG1hdGNoID0gbWF0Y2hQYXRoKGVkaXRvciwgYXQpO1xuICAgICAgICB9IGVsc2UgaWYgKGVkaXRvci5pc0lubGluZShlbGVtZW50KSkge1xuICAgICAgICAgIG1hdGNoID0gbiA9PiBFZGl0b3IuaXNJbmxpbmUoZWRpdG9yLCBuKSB8fCBUZXh0LmlzVGV4dChuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXRjaCA9IG4gPT4gRWRpdG9yLmlzQmxvY2soZWRpdG9yLCBuKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3BsaXQgJiYgUmFuZ2UuaXNSYW5nZShhdCkpIHtcbiAgICAgICAgdmFyIFtzdGFydCwgZW5kXSA9IFJhbmdlLmVkZ2VzKGF0KTtcbiAgICAgICAgdmFyIHJhbmdlUmVmID0gRWRpdG9yLnJhbmdlUmVmKGVkaXRvciwgYXQsIHtcbiAgICAgICAgICBhZmZpbml0eTogJ2lud2FyZCdcbiAgICAgICAgfSk7XG4gICAgICAgIFRyYW5zZm9ybXMuc3BsaXROb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICBhdDogZW5kLFxuICAgICAgICAgIG1hdGNoLFxuICAgICAgICAgIHZvaWRzXG4gICAgICAgIH0pO1xuICAgICAgICBUcmFuc2Zvcm1zLnNwbGl0Tm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgYXQ6IHN0YXJ0LFxuICAgICAgICAgIG1hdGNoLFxuICAgICAgICAgIHZvaWRzXG4gICAgICAgIH0pO1xuICAgICAgICBhdCA9IHJhbmdlUmVmLnVucmVmKCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuYXQgPT0gbnVsbCkge1xuICAgICAgICAgIFRyYW5zZm9ybXMuc2VsZWN0KGVkaXRvciwgYXQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciByb290cyA9IEFycmF5LmZyb20oRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgICBhdCxcbiAgICAgICAgbWF0Y2g6IGVkaXRvci5pc0lubGluZShlbGVtZW50KSA/IG4gPT4gRWRpdG9yLmlzQmxvY2soZWRpdG9yLCBuKSA6IG4gPT4gRWRpdG9yLmlzRWRpdG9yKG4pLFxuICAgICAgICBtb2RlOiAnbG93ZXN0JyxcbiAgICAgICAgdm9pZHNcbiAgICAgIH0pKTtcblxuICAgICAgZm9yICh2YXIgWywgcm9vdFBhdGhdIG9mIHJvb3RzKSB7XG4gICAgICAgIHZhciBhID0gUmFuZ2UuaXNSYW5nZShhdCkgPyBSYW5nZS5pbnRlcnNlY3Rpb24oYXQsIEVkaXRvci5yYW5nZShlZGl0b3IsIHJvb3RQYXRoKSkgOiBhdDtcblxuICAgICAgICBpZiAoIWEpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtYXRjaGVzID0gQXJyYXkuZnJvbShFZGl0b3Iubm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgYXQ6IGEsXG4gICAgICAgICAgbWF0Y2gsXG4gICAgICAgICAgbW9kZSxcbiAgICAgICAgICB2b2lkc1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHZhciBfcmV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIFtmaXJzdF0gPSBtYXRjaGVzO1xuICAgICAgICAgICAgdmFyIGxhc3QgPSBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB2YXIgWywgZmlyc3RQYXRoXSA9IGZpcnN0O1xuICAgICAgICAgICAgdmFyIFssIGxhc3RQYXRoXSA9IGxhc3Q7XG5cbiAgICAgICAgICAgIGlmIChmaXJzdFBhdGgubGVuZ3RoID09PSAwICYmIGxhc3RQYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAvLyBpZiB0aGVyZSdzIG5vIG1hdGNoaW5nIHBhcmVudCAtIHVzdWFsbHkgbWVhbnMgdGhlIG5vZGUgaXMgYW4gZWRpdG9yIC0gZG9uJ3QgZG8gYW55dGhpbmdcbiAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNvbW1vblBhdGggPSBQYXRoLmVxdWFscyhmaXJzdFBhdGgsIGxhc3RQYXRoKSA/IFBhdGgucGFyZW50KGZpcnN0UGF0aCkgOiBQYXRoLmNvbW1vbihmaXJzdFBhdGgsIGxhc3RQYXRoKTtcbiAgICAgICAgICAgIHZhciByYW5nZSA9IEVkaXRvci5yYW5nZShlZGl0b3IsIGZpcnN0UGF0aCwgbGFzdFBhdGgpO1xuICAgICAgICAgICAgdmFyIGNvbW1vbk5vZGVFbnRyeSA9IEVkaXRvci5ub2RlKGVkaXRvciwgY29tbW9uUGF0aCk7XG4gICAgICAgICAgICB2YXIgW2NvbW1vbk5vZGVdID0gY29tbW9uTm9kZUVudHJ5O1xuICAgICAgICAgICAgdmFyIGRlcHRoID0gY29tbW9uUGF0aC5sZW5ndGggKyAxO1xuICAgICAgICAgICAgdmFyIHdyYXBwZXJQYXRoID0gUGF0aC5uZXh0KGxhc3RQYXRoLnNsaWNlKDAsIGRlcHRoKSk7XG5cbiAgICAgICAgICAgIHZhciB3cmFwcGVyID0gX29iamVjdFNwcmVhZCQyKF9vYmplY3RTcHJlYWQkMih7fSwgZWxlbWVudCksIHt9LCB7XG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIFRyYW5zZm9ybXMuaW5zZXJ0Tm9kZXMoZWRpdG9yLCB3cmFwcGVyLCB7XG4gICAgICAgICAgICAgIGF0OiB3cmFwcGVyUGF0aCxcbiAgICAgICAgICAgICAgdm9pZHNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgVHJhbnNmb3Jtcy5tb3ZlTm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgICAgIGF0OiByYW5nZSxcbiAgICAgICAgICAgICAgbWF0Y2g6IG4gPT4gRWxlbWVudC5pc0FuY2VzdG9yKGNvbW1vbk5vZGUpICYmIGNvbW1vbk5vZGUuY2hpbGRyZW4uaW5jbHVkZXMobiksXG4gICAgICAgICAgICAgIHRvOiB3cmFwcGVyUGF0aC5jb25jYXQoMCksXG4gICAgICAgICAgICAgIHZvaWRzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KCk7XG5cbiAgICAgICAgICBpZiAoX3JldCA9PT0gXCJjb250aW51ZVwiKSBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn07XG5cbnZhciBoYXNTaW5nbGVDaGlsZE5lc3QgPSAoZWRpdG9yLCBub2RlKSA9PiB7XG4gIGlmIChFbGVtZW50LmlzRWxlbWVudChub2RlKSkge1xuICAgIHZhciBlbGVtZW50ID0gbm9kZTtcblxuICAgIGlmIChFZGl0b3IuaXNWb2lkKGVkaXRvciwgbm9kZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiBoYXNTaW5nbGVDaGlsZE5lc3QoZWRpdG9yLCBlbGVtZW50LmNoaWxkcmVuWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChFZGl0b3IuaXNFZGl0b3Iobm9kZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4vKipcclxuICogQ29udmVydCBhIHJhbmdlIGludG8gYSBwb2ludCBieSBkZWxldGluZyBpdCdzIGNvbnRlbnQuXHJcbiAqL1xuXG5cbnZhciBkZWxldGVSYW5nZSA9IChlZGl0b3IsIHJhbmdlKSA9PiB7XG4gIGlmIChSYW5nZS5pc0NvbGxhcHNlZChyYW5nZSkpIHtcbiAgICByZXR1cm4gcmFuZ2UuYW5jaG9yO1xuICB9IGVsc2Uge1xuICAgIHZhciBbLCBlbmRdID0gUmFuZ2UuZWRnZXMocmFuZ2UpO1xuICAgIHZhciBwb2ludFJlZiA9IEVkaXRvci5wb2ludFJlZihlZGl0b3IsIGVuZCk7XG4gICAgVHJhbnNmb3Jtcy5kZWxldGUoZWRpdG9yLCB7XG4gICAgICBhdDogcmFuZ2VcbiAgICB9KTtcbiAgICByZXR1cm4gcG9pbnRSZWYudW5yZWYoKTtcbiAgfVxufTtcblxudmFyIG1hdGNoUGF0aCA9IChlZGl0b3IsIHBhdGgpID0+IHtcbiAgdmFyIFtub2RlXSA9IEVkaXRvci5ub2RlKGVkaXRvciwgcGF0aCk7XG4gIHJldHVybiBuID0+IG4gPT09IG5vZGU7XG59O1xuXG5mdW5jdGlvbiBvd25LZXlzJDEob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDEodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQxKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkMShPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cbnZhciBTZWxlY3Rpb25UcmFuc2Zvcm1zID0ge1xuICAvKipcclxuICAgKiBDb2xsYXBzZSB0aGUgc2VsZWN0aW9uLlxyXG4gICAqL1xuICBjb2xsYXBzZShlZGl0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHtcbiAgICAgIGVkZ2UgPSAnYW5jaG9yJ1xuICAgIH0gPSBvcHRpb25zO1xuICAgIHZhciB7XG4gICAgICBzZWxlY3Rpb25cbiAgICB9ID0gZWRpdG9yO1xuXG4gICAgaWYgKCFzZWxlY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGVkZ2UgPT09ICdhbmNob3InKSB7XG4gICAgICBUcmFuc2Zvcm1zLnNlbGVjdChlZGl0b3IsIHNlbGVjdGlvbi5hbmNob3IpO1xuICAgIH0gZWxzZSBpZiAoZWRnZSA9PT0gJ2ZvY3VzJykge1xuICAgICAgVHJhbnNmb3Jtcy5zZWxlY3QoZWRpdG9yLCBzZWxlY3Rpb24uZm9jdXMpO1xuICAgIH0gZWxzZSBpZiAoZWRnZSA9PT0gJ3N0YXJ0Jykge1xuICAgICAgdmFyIFtzdGFydF0gPSBSYW5nZS5lZGdlcyhzZWxlY3Rpb24pO1xuICAgICAgVHJhbnNmb3Jtcy5zZWxlY3QoZWRpdG9yLCBzdGFydCk7XG4gICAgfSBlbHNlIGlmIChlZGdlID09PSAnZW5kJykge1xuICAgICAgdmFyIFssIGVuZF0gPSBSYW5nZS5lZGdlcyhzZWxlY3Rpb24pO1xuICAgICAgVHJhbnNmb3Jtcy5zZWxlY3QoZWRpdG9yLCBlbmQpO1xuICAgIH1cbiAgfSxcblxuICAvKipcclxuICAgKiBVbnNldCB0aGUgc2VsZWN0aW9uLlxyXG4gICAqL1xuICBkZXNlbGVjdChlZGl0b3IpIHtcbiAgICB2YXIge1xuICAgICAgc2VsZWN0aW9uXG4gICAgfSA9IGVkaXRvcjtcblxuICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgIGVkaXRvci5hcHBseSh7XG4gICAgICAgIHR5cGU6ICdzZXRfc2VsZWN0aW9uJyxcbiAgICAgICAgcHJvcGVydGllczogc2VsZWN0aW9uLFxuICAgICAgICBuZXdQcm9wZXJ0aWVzOiBudWxsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogTW92ZSB0aGUgc2VsZWN0aW9uJ3MgcG9pbnQgZm9yd2FyZCBvciBiYWNrd2FyZC5cclxuICAgKi9cbiAgbW92ZShlZGl0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHtcbiAgICAgIHNlbGVjdGlvblxuICAgIH0gPSBlZGl0b3I7XG4gICAgdmFyIHtcbiAgICAgIGRpc3RhbmNlID0gMSxcbiAgICAgIHVuaXQgPSAnY2hhcmFjdGVyJyxcbiAgICAgIHJldmVyc2UgPSBmYWxzZVxuICAgIH0gPSBvcHRpb25zO1xuICAgIHZhciB7XG4gICAgICBlZGdlID0gbnVsbFxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgaWYgKCFzZWxlY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZWRnZSA9PT0gJ3N0YXJ0Jykge1xuICAgICAgZWRnZSA9IFJhbmdlLmlzQmFja3dhcmQoc2VsZWN0aW9uKSA/ICdmb2N1cycgOiAnYW5jaG9yJztcbiAgICB9XG5cbiAgICBpZiAoZWRnZSA9PT0gJ2VuZCcpIHtcbiAgICAgIGVkZ2UgPSBSYW5nZS5pc0JhY2t3YXJkKHNlbGVjdGlvbikgPyAnYW5jaG9yJyA6ICdmb2N1cyc7XG4gICAgfVxuXG4gICAgdmFyIHtcbiAgICAgIGFuY2hvcixcbiAgICAgIGZvY3VzXG4gICAgfSA9IHNlbGVjdGlvbjtcbiAgICB2YXIgb3B0cyA9IHtcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgdW5pdFxuICAgIH07XG4gICAgdmFyIHByb3BzID0ge307XG5cbiAgICBpZiAoZWRnZSA9PSBudWxsIHx8IGVkZ2UgPT09ICdhbmNob3InKSB7XG4gICAgICB2YXIgcG9pbnQgPSByZXZlcnNlID8gRWRpdG9yLmJlZm9yZShlZGl0b3IsIGFuY2hvciwgb3B0cykgOiBFZGl0b3IuYWZ0ZXIoZWRpdG9yLCBhbmNob3IsIG9wdHMpO1xuXG4gICAgICBpZiAocG9pbnQpIHtcbiAgICAgICAgcHJvcHMuYW5jaG9yID0gcG9pbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVkZ2UgPT0gbnVsbCB8fCBlZGdlID09PSAnZm9jdXMnKSB7XG4gICAgICB2YXIgX3BvaW50ID0gcmV2ZXJzZSA/IEVkaXRvci5iZWZvcmUoZWRpdG9yLCBmb2N1cywgb3B0cykgOiBFZGl0b3IuYWZ0ZXIoZWRpdG9yLCBmb2N1cywgb3B0cyk7XG5cbiAgICAgIGlmIChfcG9pbnQpIHtcbiAgICAgICAgcHJvcHMuZm9jdXMgPSBfcG9pbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVHJhbnNmb3Jtcy5zZXRTZWxlY3Rpb24oZWRpdG9yLCBwcm9wcyk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogU2V0IHRoZSBzZWxlY3Rpb24gdG8gYSBuZXcgdmFsdWUuXHJcbiAgICovXG4gIHNlbGVjdChlZGl0b3IsIHRhcmdldCkge1xuICAgIHZhciB7XG4gICAgICBzZWxlY3Rpb25cbiAgICB9ID0gZWRpdG9yO1xuICAgIHRhcmdldCA9IEVkaXRvci5yYW5nZShlZGl0b3IsIHRhcmdldCk7XG5cbiAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICBUcmFuc2Zvcm1zLnNldFNlbGVjdGlvbihlZGl0b3IsIHRhcmdldCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFSYW5nZS5pc1JhbmdlKHRhcmdldCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIldoZW4gc2V0dGluZyB0aGUgc2VsZWN0aW9uIGFuZCB0aGUgY3VycmVudCBzZWxlY3Rpb24gaXMgYG51bGxgIHlvdSBtdXN0IHByb3ZpZGUgYXQgbGVhc3QgYW4gYGFuY2hvcmAgYW5kIGBmb2N1c2AsIGJ1dCB5b3UgcGFzc2VkOiBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkodGFyZ2V0KSkpO1xuICAgIH1cblxuICAgIGVkaXRvci5hcHBseSh7XG4gICAgICB0eXBlOiAnc2V0X3NlbGVjdGlvbicsXG4gICAgICBwcm9wZXJ0aWVzOiBzZWxlY3Rpb24sXG4gICAgICBuZXdQcm9wZXJ0aWVzOiB0YXJnZXRcbiAgICB9KTtcbiAgfSxcblxuICAvKipcclxuICAgKiBTZXQgbmV3IHByb3BlcnRpZXMgb24gb25lIG9mIHRoZSBzZWxlY3Rpb24ncyBwb2ludHMuXHJcbiAgICovXG4gIHNldFBvaW50KGVkaXRvciwgcHJvcHMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIHtcbiAgICAgIHNlbGVjdGlvblxuICAgIH0gPSBlZGl0b3I7XG4gICAgdmFyIHtcbiAgICAgIGVkZ2UgPSAnYm90aCdcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIGlmICghc2VsZWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVkZ2UgPT09ICdzdGFydCcpIHtcbiAgICAgIGVkZ2UgPSBSYW5nZS5pc0JhY2t3YXJkKHNlbGVjdGlvbikgPyAnZm9jdXMnIDogJ2FuY2hvcic7XG4gICAgfVxuXG4gICAgaWYgKGVkZ2UgPT09ICdlbmQnKSB7XG4gICAgICBlZGdlID0gUmFuZ2UuaXNCYWNrd2FyZChzZWxlY3Rpb24pID8gJ2FuY2hvcicgOiAnZm9jdXMnO1xuICAgIH1cblxuICAgIHZhciB7XG4gICAgICBhbmNob3IsXG4gICAgICBmb2N1c1xuICAgIH0gPSBzZWxlY3Rpb247XG4gICAgdmFyIHBvaW50ID0gZWRnZSA9PT0gJ2FuY2hvcicgPyBhbmNob3IgOiBmb2N1cztcbiAgICBUcmFuc2Zvcm1zLnNldFNlbGVjdGlvbihlZGl0b3IsIHtcbiAgICAgIFtlZGdlID09PSAnYW5jaG9yJyA/ICdhbmNob3InIDogJ2ZvY3VzJ106IF9vYmplY3RTcHJlYWQkMShfb2JqZWN0U3ByZWFkJDEoe30sIHBvaW50KSwgcHJvcHMpXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogU2V0IG5ldyBwcm9wZXJ0aWVzIG9uIHRoZSBzZWxlY3Rpb24uXHJcbiAgICovXG4gIHNldFNlbGVjdGlvbihlZGl0b3IsIHByb3BzKSB7XG4gICAgdmFyIHtcbiAgICAgIHNlbGVjdGlvblxuICAgIH0gPSBlZGl0b3I7XG4gICAgdmFyIG9sZFByb3BzID0ge307XG4gICAgdmFyIG5ld1Byb3BzID0ge307XG5cbiAgICBpZiAoIXNlbGVjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGsgaW4gcHJvcHMpIHtcbiAgICAgIGlmIChrID09PSAnYW5jaG9yJyAmJiBwcm9wcy5hbmNob3IgIT0gbnVsbCAmJiAhUG9pbnQuZXF1YWxzKHByb3BzLmFuY2hvciwgc2VsZWN0aW9uLmFuY2hvcikgfHwgayA9PT0gJ2ZvY3VzJyAmJiBwcm9wcy5mb2N1cyAhPSBudWxsICYmICFQb2ludC5lcXVhbHMocHJvcHMuZm9jdXMsIHNlbGVjdGlvbi5mb2N1cykgfHwgayAhPT0gJ2FuY2hvcicgJiYgayAhPT0gJ2ZvY3VzJyAmJiBwcm9wc1trXSAhPT0gc2VsZWN0aW9uW2tdKSB7XG4gICAgICAgIG9sZFByb3BzW2tdID0gc2VsZWN0aW9uW2tdO1xuICAgICAgICBuZXdQcm9wc1trXSA9IHByb3BzW2tdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChPYmplY3Qua2V5cyhvbGRQcm9wcykubGVuZ3RoID4gMCkge1xuICAgICAgZWRpdG9yLmFwcGx5KHtcbiAgICAgICAgdHlwZTogJ3NldF9zZWxlY3Rpb24nLFxuICAgICAgICBwcm9wZXJ0aWVzOiBvbGRQcm9wcyxcbiAgICAgICAgbmV3UHJvcGVydGllczogbmV3UHJvcHNcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59O1xuXG52YXIgVGV4dFRyYW5zZm9ybXMgPSB7XG4gIC8qKlxyXG4gICAqIERlbGV0ZSBjb250ZW50IGluIHRoZSBlZGl0b3IuXHJcbiAgICovXG4gIGRlbGV0ZShlZGl0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgRWRpdG9yLndpdGhvdXROb3JtYWxpemluZyhlZGl0b3IsICgpID0+IHtcbiAgICAgIHZhciB7XG4gICAgICAgIHJldmVyc2UgPSBmYWxzZSxcbiAgICAgICAgdW5pdCA9ICdjaGFyYWN0ZXInLFxuICAgICAgICBkaXN0YW5jZSA9IDEsXG4gICAgICAgIHZvaWRzID0gZmFsc2VcbiAgICAgIH0gPSBvcHRpb25zO1xuICAgICAgdmFyIHtcbiAgICAgICAgYXQgPSBlZGl0b3Iuc2VsZWN0aW9uLFxuICAgICAgICBoYW5naW5nID0gZmFsc2VcbiAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgICBpZiAoIWF0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKFJhbmdlLmlzUmFuZ2UoYXQpICYmIFJhbmdlLmlzQ29sbGFwc2VkKGF0KSkge1xuICAgICAgICBhdCA9IGF0LmFuY2hvcjtcbiAgICAgIH1cblxuICAgICAgaWYgKFBvaW50LmlzUG9pbnQoYXQpKSB7XG4gICAgICAgIHZhciBmdXJ0aGVzdFZvaWQgPSBFZGl0b3Iudm9pZChlZGl0b3IsIHtcbiAgICAgICAgICBhdCxcbiAgICAgICAgICBtb2RlOiAnaGlnaGVzdCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCF2b2lkcyAmJiBmdXJ0aGVzdFZvaWQpIHtcbiAgICAgICAgICB2YXIgWywgdm9pZFBhdGhdID0gZnVydGhlc3RWb2lkO1xuICAgICAgICAgIGF0ID0gdm9pZFBhdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG9wdHMgPSB7XG4gICAgICAgICAgICB1bml0LFxuICAgICAgICAgICAgZGlzdGFuY2VcbiAgICAgICAgICB9O1xuICAgICAgICAgIHZhciB0YXJnZXQgPSByZXZlcnNlID8gRWRpdG9yLmJlZm9yZShlZGl0b3IsIGF0LCBvcHRzKSB8fCBFZGl0b3Iuc3RhcnQoZWRpdG9yLCBbXSkgOiBFZGl0b3IuYWZ0ZXIoZWRpdG9yLCBhdCwgb3B0cykgfHwgRWRpdG9yLmVuZChlZGl0b3IsIFtdKTtcbiAgICAgICAgICBhdCA9IHtcbiAgICAgICAgICAgIGFuY2hvcjogYXQsXG4gICAgICAgICAgICBmb2N1czogdGFyZ2V0XG4gICAgICAgICAgfTtcbiAgICAgICAgICBoYW5naW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoUGF0aC5pc1BhdGgoYXQpKSB7XG4gICAgICAgIFRyYW5zZm9ybXMucmVtb3ZlTm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgYXQsXG4gICAgICAgICAgdm9pZHNcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKFJhbmdlLmlzQ29sbGFwc2VkKGF0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghaGFuZ2luZykge1xuICAgICAgICB2YXIgWywgX2VuZF0gPSBSYW5nZS5lZGdlcyhhdCk7XG4gICAgICAgIHZhciBlbmRPZkRvYyA9IEVkaXRvci5lbmQoZWRpdG9yLCBbXSk7XG5cbiAgICAgICAgaWYgKCFQb2ludC5lcXVhbHMoX2VuZCwgZW5kT2ZEb2MpKSB7XG4gICAgICAgICAgYXQgPSBFZGl0b3IudW5oYW5nUmFuZ2UoZWRpdG9yLCBhdCwge1xuICAgICAgICAgICAgdm9pZHNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgW3N0YXJ0LCBlbmRdID0gUmFuZ2UuZWRnZXMoYXQpO1xuICAgICAgdmFyIHN0YXJ0QmxvY2sgPSBFZGl0b3IuYWJvdmUoZWRpdG9yLCB7XG4gICAgICAgIG1hdGNoOiBuID0+IEVkaXRvci5pc0Jsb2NrKGVkaXRvciwgbiksXG4gICAgICAgIGF0OiBzdGFydCxcbiAgICAgICAgdm9pZHNcbiAgICAgIH0pO1xuICAgICAgdmFyIGVuZEJsb2NrID0gRWRpdG9yLmFib3ZlKGVkaXRvciwge1xuICAgICAgICBtYXRjaDogbiA9PiBFZGl0b3IuaXNCbG9jayhlZGl0b3IsIG4pLFxuICAgICAgICBhdDogZW5kLFxuICAgICAgICB2b2lkc1xuICAgICAgfSk7XG4gICAgICB2YXIgaXNBY3Jvc3NCbG9ja3MgPSBzdGFydEJsb2NrICYmIGVuZEJsb2NrICYmICFQYXRoLmVxdWFscyhzdGFydEJsb2NrWzFdLCBlbmRCbG9ja1sxXSk7XG4gICAgICB2YXIgaXNTaW5nbGVUZXh0ID0gUGF0aC5lcXVhbHMoc3RhcnQucGF0aCwgZW5kLnBhdGgpO1xuICAgICAgdmFyIHN0YXJ0Vm9pZCA9IHZvaWRzID8gbnVsbCA6IEVkaXRvci52b2lkKGVkaXRvciwge1xuICAgICAgICBhdDogc3RhcnQsXG4gICAgICAgIG1vZGU6ICdoaWdoZXN0J1xuICAgICAgfSk7XG4gICAgICB2YXIgZW5kVm9pZCA9IHZvaWRzID8gbnVsbCA6IEVkaXRvci52b2lkKGVkaXRvciwge1xuICAgICAgICBhdDogZW5kLFxuICAgICAgICBtb2RlOiAnaGlnaGVzdCdcbiAgICAgIH0pOyAvLyBJZiB0aGUgc3RhcnQgb3IgZW5kIHBvaW50cyBhcmUgaW5zaWRlIGFuIGlubGluZSB2b2lkLCBudWRnZSB0aGVtIG91dC5cblxuICAgICAgaWYgKHN0YXJ0Vm9pZCkge1xuICAgICAgICB2YXIgYmVmb3JlID0gRWRpdG9yLmJlZm9yZShlZGl0b3IsIHN0YXJ0KTtcblxuICAgICAgICBpZiAoYmVmb3JlICYmIHN0YXJ0QmxvY2sgJiYgUGF0aC5pc0FuY2VzdG9yKHN0YXJ0QmxvY2tbMV0sIGJlZm9yZS5wYXRoKSkge1xuICAgICAgICAgIHN0YXJ0ID0gYmVmb3JlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmRWb2lkKSB7XG4gICAgICAgIHZhciBhZnRlciA9IEVkaXRvci5hZnRlcihlZGl0b3IsIGVuZCk7XG5cbiAgICAgICAgaWYgKGFmdGVyICYmIGVuZEJsb2NrICYmIFBhdGguaXNBbmNlc3RvcihlbmRCbG9ja1sxXSwgYWZ0ZXIucGF0aCkpIHtcbiAgICAgICAgICBlbmQgPSBhZnRlcjtcbiAgICAgICAgfVxuICAgICAgfSAvLyBHZXQgdGhlIGhpZ2hlc3Qgbm9kZXMgdGhhdCBhcmUgY29tcGxldGVseSBpbnNpZGUgdGhlIHJhbmdlLCBhcyB3ZWxsIGFzXG4gICAgICAvLyB0aGUgc3RhcnQgYW5kIGVuZCBub2Rlcy5cblxuXG4gICAgICB2YXIgbWF0Y2hlcyA9IFtdO1xuICAgICAgdmFyIGxhc3RQYXRoO1xuXG4gICAgICBmb3IgKHZhciBlbnRyeSBvZiBFZGl0b3Iubm9kZXMoZWRpdG9yLCB7XG4gICAgICAgIGF0LFxuICAgICAgICB2b2lkc1xuICAgICAgfSkpIHtcbiAgICAgICAgdmFyIFtub2RlLCBwYXRoXSA9IGVudHJ5O1xuXG4gICAgICAgIGlmIChsYXN0UGF0aCAmJiBQYXRoLmNvbXBhcmUocGF0aCwgbGFzdFBhdGgpID09PSAwKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXZvaWRzICYmIEVkaXRvci5pc1ZvaWQoZWRpdG9yLCBub2RlKSB8fCAhUGF0aC5pc0NvbW1vbihwYXRoLCBzdGFydC5wYXRoKSAmJiAhUGF0aC5pc0NvbW1vbihwYXRoLCBlbmQucGF0aCkpIHtcbiAgICAgICAgICBtYXRjaGVzLnB1c2goZW50cnkpO1xuICAgICAgICAgIGxhc3RQYXRoID0gcGF0aDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgcGF0aFJlZnMgPSBBcnJheS5mcm9tKG1hdGNoZXMsIF9yZWYgPT4ge1xuICAgICAgICB2YXIgWywgcF0gPSBfcmVmO1xuICAgICAgICByZXR1cm4gRWRpdG9yLnBhdGhSZWYoZWRpdG9yLCBwKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIHN0YXJ0UmVmID0gRWRpdG9yLnBvaW50UmVmKGVkaXRvciwgc3RhcnQpO1xuICAgICAgdmFyIGVuZFJlZiA9IEVkaXRvci5wb2ludFJlZihlZGl0b3IsIGVuZCk7XG5cbiAgICAgIGlmICghaXNTaW5nbGVUZXh0ICYmICFzdGFydFZvaWQpIHtcbiAgICAgICAgdmFyIF9wb2ludCA9IHN0YXJ0UmVmLmN1cnJlbnQ7XG4gICAgICAgIHZhciBbX25vZGVdID0gRWRpdG9yLmxlYWYoZWRpdG9yLCBfcG9pbnQpO1xuICAgICAgICB2YXIge1xuICAgICAgICAgIHBhdGg6IF9wYXRoXG4gICAgICAgIH0gPSBfcG9pbnQ7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgb2Zmc2V0XG4gICAgICAgIH0gPSBzdGFydDtcblxuICAgICAgICB2YXIgdGV4dCA9IF9ub2RlLnRleHQuc2xpY2Uob2Zmc2V0KTtcblxuICAgICAgICBpZiAodGV4dC5sZW5ndGggPiAwKSBlZGl0b3IuYXBwbHkoe1xuICAgICAgICAgIHR5cGU6ICdyZW1vdmVfdGV4dCcsXG4gICAgICAgICAgcGF0aDogX3BhdGgsXG4gICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgIHRleHRcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIHBhdGhSZWYgb2YgcGF0aFJlZnMpIHtcbiAgICAgICAgdmFyIF9wYXRoMiA9IHBhdGhSZWYudW5yZWYoKTtcblxuICAgICAgICBUcmFuc2Zvcm1zLnJlbW92ZU5vZGVzKGVkaXRvciwge1xuICAgICAgICAgIGF0OiBfcGF0aDIsXG4gICAgICAgICAgdm9pZHNcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghZW5kVm9pZCkge1xuICAgICAgICB2YXIgX3BvaW50MiA9IGVuZFJlZi5jdXJyZW50O1xuICAgICAgICB2YXIgW19ub2RlMl0gPSBFZGl0b3IubGVhZihlZGl0b3IsIF9wb2ludDIpO1xuICAgICAgICB2YXIge1xuICAgICAgICAgIHBhdGg6IF9wYXRoM1xuICAgICAgICB9ID0gX3BvaW50MjtcblxuICAgICAgICB2YXIgX29mZnNldCA9IGlzU2luZ2xlVGV4dCA/IHN0YXJ0Lm9mZnNldCA6IDA7XG5cbiAgICAgICAgdmFyIF90ZXh0ID0gX25vZGUyLnRleHQuc2xpY2UoX29mZnNldCwgZW5kLm9mZnNldCk7XG5cbiAgICAgICAgaWYgKF90ZXh0Lmxlbmd0aCA+IDApIGVkaXRvci5hcHBseSh7XG4gICAgICAgICAgdHlwZTogJ3JlbW92ZV90ZXh0JyxcbiAgICAgICAgICBwYXRoOiBfcGF0aDMsXG4gICAgICAgICAgb2Zmc2V0OiBfb2Zmc2V0LFxuICAgICAgICAgIHRleHQ6IF90ZXh0XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzU2luZ2xlVGV4dCAmJiBpc0Fjcm9zc0Jsb2NrcyAmJiBlbmRSZWYuY3VycmVudCAmJiBzdGFydFJlZi5jdXJyZW50KSB7XG4gICAgICAgIFRyYW5zZm9ybXMubWVyZ2VOb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICBhdDogZW5kUmVmLmN1cnJlbnQsXG4gICAgICAgICAgaGFuZ2luZzogdHJ1ZSxcbiAgICAgICAgICB2b2lkc1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdmFyIHBvaW50ID0gcmV2ZXJzZSA/IHN0YXJ0UmVmLnVucmVmKCkgfHwgZW5kUmVmLnVucmVmKCkgOiBlbmRSZWYudW5yZWYoKSB8fCBzdGFydFJlZi51bnJlZigpO1xuXG4gICAgICBpZiAob3B0aW9ucy5hdCA9PSBudWxsICYmIHBvaW50KSB7XG4gICAgICAgIFRyYW5zZm9ybXMuc2VsZWN0KGVkaXRvciwgcG9pbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEluc2VydCBhIGZyYWdtZW50IGF0IGEgc3BlY2lmaWMgbG9jYXRpb24gaW4gdGhlIGVkaXRvci5cclxuICAgKi9cbiAgaW5zZXJ0RnJhZ21lbnQoZWRpdG9yLCBmcmFnbWVudCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICBFZGl0b3Iud2l0aG91dE5vcm1hbGl6aW5nKGVkaXRvciwgKCkgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgaGFuZ2luZyA9IGZhbHNlLFxuICAgICAgICB2b2lkcyA9IGZhbHNlXG4gICAgICB9ID0gb3B0aW9ucztcbiAgICAgIHZhciB7XG4gICAgICAgIGF0ID0gZWRpdG9yLnNlbGVjdGlvblxuICAgICAgfSA9IG9wdGlvbnM7XG5cbiAgICAgIGlmICghZnJhZ21lbnQubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFhdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKFJhbmdlLmlzUmFuZ2UoYXQpKSB7XG4gICAgICAgIGlmICghaGFuZ2luZykge1xuICAgICAgICAgIGF0ID0gRWRpdG9yLnVuaGFuZ1JhbmdlKGVkaXRvciwgYXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFJhbmdlLmlzQ29sbGFwc2VkKGF0KSkge1xuICAgICAgICAgIGF0ID0gYXQuYW5jaG9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBbLCBlbmRdID0gUmFuZ2UuZWRnZXMoYXQpO1xuXG4gICAgICAgICAgaWYgKCF2b2lkcyAmJiBFZGl0b3Iudm9pZChlZGl0b3IsIHtcbiAgICAgICAgICAgIGF0OiBlbmRcbiAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBwb2ludFJlZiA9IEVkaXRvci5wb2ludFJlZihlZGl0b3IsIGVuZCk7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5kZWxldGUoZWRpdG9yLCB7XG4gICAgICAgICAgICBhdFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGF0ID0gcG9pbnRSZWYudW5yZWYoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChQYXRoLmlzUGF0aChhdCkpIHtcbiAgICAgICAgYXQgPSBFZGl0b3Iuc3RhcnQoZWRpdG9yLCBhdCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdm9pZHMgJiYgRWRpdG9yLnZvaWQoZWRpdG9yLCB7XG4gICAgICAgIGF0XG4gICAgICB9KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIElmIHRoZSBpbnNlcnQgcG9pbnQgaXMgYXQgdGhlIGVkZ2Ugb2YgYW4gaW5saW5lIG5vZGUsIG1vdmUgaXQgb3V0c2lkZVxuICAgICAgLy8gaW5zdGVhZCBzaW5jZSBpdCB3aWxsIG5lZWQgdG8gYmUgc3BsaXQgb3RoZXJ3aXNlLlxuXG5cbiAgICAgIHZhciBpbmxpbmVFbGVtZW50TWF0Y2ggPSBFZGl0b3IuYWJvdmUoZWRpdG9yLCB7XG4gICAgICAgIGF0LFxuICAgICAgICBtYXRjaDogbiA9PiBFZGl0b3IuaXNJbmxpbmUoZWRpdG9yLCBuKSxcbiAgICAgICAgbW9kZTogJ2hpZ2hlc3QnLFxuICAgICAgICB2b2lkc1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChpbmxpbmVFbGVtZW50TWF0Y2gpIHtcbiAgICAgICAgdmFyIFssIF9pbmxpbmVQYXRoXSA9IGlubGluZUVsZW1lbnRNYXRjaDtcblxuICAgICAgICBpZiAoRWRpdG9yLmlzRW5kKGVkaXRvciwgYXQsIF9pbmxpbmVQYXRoKSkge1xuICAgICAgICAgIHZhciBhZnRlciA9IEVkaXRvci5hZnRlcihlZGl0b3IsIF9pbmxpbmVQYXRoKTtcbiAgICAgICAgICBhdCA9IGFmdGVyO1xuICAgICAgICB9IGVsc2UgaWYgKEVkaXRvci5pc1N0YXJ0KGVkaXRvciwgYXQsIF9pbmxpbmVQYXRoKSkge1xuICAgICAgICAgIHZhciBiZWZvcmUgPSBFZGl0b3IuYmVmb3JlKGVkaXRvciwgX2lubGluZVBhdGgpO1xuICAgICAgICAgIGF0ID0gYmVmb3JlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBibG9ja01hdGNoID0gRWRpdG9yLmFib3ZlKGVkaXRvciwge1xuICAgICAgICBtYXRjaDogbiA9PiBFZGl0b3IuaXNCbG9jayhlZGl0b3IsIG4pLFxuICAgICAgICBhdCxcbiAgICAgICAgdm9pZHNcbiAgICAgIH0pO1xuICAgICAgdmFyIFssIGJsb2NrUGF0aF0gPSBibG9ja01hdGNoO1xuICAgICAgdmFyIGlzQmxvY2tTdGFydCA9IEVkaXRvci5pc1N0YXJ0KGVkaXRvciwgYXQsIGJsb2NrUGF0aCk7XG4gICAgICB2YXIgaXNCbG9ja0VuZCA9IEVkaXRvci5pc0VuZChlZGl0b3IsIGF0LCBibG9ja1BhdGgpO1xuICAgICAgdmFyIGlzQmxvY2tFbXB0eSA9IGlzQmxvY2tTdGFydCAmJiBpc0Jsb2NrRW5kO1xuICAgICAgdmFyIG1lcmdlU3RhcnQgPSAhaXNCbG9ja1N0YXJ0IHx8IGlzQmxvY2tTdGFydCAmJiBpc0Jsb2NrRW5kO1xuICAgICAgdmFyIG1lcmdlRW5kID0gIWlzQmxvY2tFbmQ7XG4gICAgICB2YXIgWywgZmlyc3RQYXRoXSA9IE5vZGUuZmlyc3Qoe1xuICAgICAgICBjaGlsZHJlbjogZnJhZ21lbnRcbiAgICAgIH0sIFtdKTtcbiAgICAgIHZhciBbLCBsYXN0UGF0aF0gPSBOb2RlLmxhc3Qoe1xuICAgICAgICBjaGlsZHJlbjogZnJhZ21lbnRcbiAgICAgIH0sIFtdKTtcbiAgICAgIHZhciBtYXRjaGVzID0gW107XG5cbiAgICAgIHZhciBtYXRjaGVyID0gX3JlZjIgPT4ge1xuICAgICAgICB2YXIgW24sIHBdID0gX3JlZjI7XG4gICAgICAgIHZhciBpc1Jvb3QgPSBwLmxlbmd0aCA9PT0gMDtcblxuICAgICAgICBpZiAoaXNSb290KSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzQmxvY2tFbXB0eSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lcmdlU3RhcnQgJiYgUGF0aC5pc0FuY2VzdG9yKHAsIGZpcnN0UGF0aCkgJiYgRWxlbWVudC5pc0VsZW1lbnQobikgJiYgIWVkaXRvci5pc1ZvaWQobikgJiYgIWVkaXRvci5pc0lubGluZShuKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZXJnZUVuZCAmJiBQYXRoLmlzQW5jZXN0b3IocCwgbGFzdFBhdGgpICYmIEVsZW1lbnQuaXNFbGVtZW50KG4pICYmICFlZGl0b3IuaXNWb2lkKG4pICYmICFlZGl0b3IuaXNJbmxpbmUobikpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIGVudHJ5IG9mIE5vZGUubm9kZXMoe1xuICAgICAgICBjaGlsZHJlbjogZnJhZ21lbnRcbiAgICAgIH0sIHtcbiAgICAgICAgcGFzczogbWF0Y2hlclxuICAgICAgfSkpIHtcbiAgICAgICAgaWYgKG1hdGNoZXIoZW50cnkpKSB7XG4gICAgICAgICAgbWF0Y2hlcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgc3RhcnRzID0gW107XG4gICAgICB2YXIgbWlkZGxlcyA9IFtdO1xuICAgICAgdmFyIGVuZHMgPSBbXTtcbiAgICAgIHZhciBzdGFydGluZyA9IHRydWU7XG4gICAgICB2YXIgaGFzQmxvY2tzID0gZmFsc2U7XG5cbiAgICAgIGZvciAodmFyIFtub2RlXSBvZiBtYXRjaGVzKSB7XG4gICAgICAgIGlmIChFbGVtZW50LmlzRWxlbWVudChub2RlKSAmJiAhZWRpdG9yLmlzSW5saW5lKG5vZGUpKSB7XG4gICAgICAgICAgc3RhcnRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBoYXNCbG9ja3MgPSB0cnVlO1xuICAgICAgICAgIG1pZGRsZXMucHVzaChub2RlKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGFydGluZykge1xuICAgICAgICAgIHN0YXJ0cy5wdXNoKG5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVuZHMucHVzaChub2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgW2lubGluZU1hdGNoXSA9IEVkaXRvci5ub2RlcyhlZGl0b3IsIHtcbiAgICAgICAgYXQsXG4gICAgICAgIG1hdGNoOiBuID0+IFRleHQuaXNUZXh0KG4pIHx8IEVkaXRvci5pc0lubGluZShlZGl0b3IsIG4pLFxuICAgICAgICBtb2RlOiAnaGlnaGVzdCcsXG4gICAgICAgIHZvaWRzXG4gICAgICB9KTtcbiAgICAgIHZhciBbLCBpbmxpbmVQYXRoXSA9IGlubGluZU1hdGNoO1xuICAgICAgdmFyIGlzSW5saW5lU3RhcnQgPSBFZGl0b3IuaXNTdGFydChlZGl0b3IsIGF0LCBpbmxpbmVQYXRoKTtcbiAgICAgIHZhciBpc0lubGluZUVuZCA9IEVkaXRvci5pc0VuZChlZGl0b3IsIGF0LCBpbmxpbmVQYXRoKTtcbiAgICAgIHZhciBtaWRkbGVSZWYgPSBFZGl0b3IucGF0aFJlZihlZGl0b3IsIGlzQmxvY2tFbmQgPyBQYXRoLm5leHQoYmxvY2tQYXRoKSA6IGJsb2NrUGF0aCk7XG4gICAgICB2YXIgZW5kUmVmID0gRWRpdG9yLnBhdGhSZWYoZWRpdG9yLCBpc0lubGluZUVuZCA/IFBhdGgubmV4dChpbmxpbmVQYXRoKSA6IGlubGluZVBhdGgpO1xuICAgICAgdmFyIGJsb2NrUGF0aFJlZiA9IEVkaXRvci5wYXRoUmVmKGVkaXRvciwgYmxvY2tQYXRoKTtcbiAgICAgIFRyYW5zZm9ybXMuc3BsaXROb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgYXQsXG4gICAgICAgIG1hdGNoOiBuID0+IGhhc0Jsb2NrcyA/IEVkaXRvci5pc0Jsb2NrKGVkaXRvciwgbikgOiBUZXh0LmlzVGV4dChuKSB8fCBFZGl0b3IuaXNJbmxpbmUoZWRpdG9yLCBuKSxcbiAgICAgICAgbW9kZTogaGFzQmxvY2tzID8gJ2xvd2VzdCcgOiAnaGlnaGVzdCcsXG4gICAgICAgIHZvaWRzXG4gICAgICB9KTtcbiAgICAgIHZhciBzdGFydFJlZiA9IEVkaXRvci5wYXRoUmVmKGVkaXRvciwgIWlzSW5saW5lU3RhcnQgfHwgaXNJbmxpbmVTdGFydCAmJiBpc0lubGluZUVuZCA/IFBhdGgubmV4dChpbmxpbmVQYXRoKSA6IGlubGluZVBhdGgpO1xuICAgICAgVHJhbnNmb3Jtcy5pbnNlcnROb2RlcyhlZGl0b3IsIHN0YXJ0cywge1xuICAgICAgICBhdDogc3RhcnRSZWYuY3VycmVudCxcbiAgICAgICAgbWF0Y2g6IG4gPT4gVGV4dC5pc1RleHQobikgfHwgRWRpdG9yLmlzSW5saW5lKGVkaXRvciwgbiksXG4gICAgICAgIG1vZGU6ICdoaWdoZXN0JyxcbiAgICAgICAgdm9pZHNcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaXNCbG9ja0VtcHR5ICYmIG1pZGRsZXMubGVuZ3RoKSB7XG4gICAgICAgIFRyYW5zZm9ybXMuZGVsZXRlKGVkaXRvciwge1xuICAgICAgICAgIGF0OiBibG9ja1BhdGhSZWYudW5yZWYoKSxcbiAgICAgICAgICB2b2lkc1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgVHJhbnNmb3Jtcy5pbnNlcnROb2RlcyhlZGl0b3IsIG1pZGRsZXMsIHtcbiAgICAgICAgYXQ6IG1pZGRsZVJlZi5jdXJyZW50LFxuICAgICAgICBtYXRjaDogbiA9PiBFZGl0b3IuaXNCbG9jayhlZGl0b3IsIG4pLFxuICAgICAgICBtb2RlOiAnbG93ZXN0JyxcbiAgICAgICAgdm9pZHNcbiAgICAgIH0pO1xuICAgICAgVHJhbnNmb3Jtcy5pbnNlcnROb2RlcyhlZGl0b3IsIGVuZHMsIHtcbiAgICAgICAgYXQ6IGVuZFJlZi5jdXJyZW50LFxuICAgICAgICBtYXRjaDogbiA9PiBUZXh0LmlzVGV4dChuKSB8fCBFZGl0b3IuaXNJbmxpbmUoZWRpdG9yLCBuKSxcbiAgICAgICAgbW9kZTogJ2hpZ2hlc3QnLFxuICAgICAgICB2b2lkc1xuICAgICAgfSk7XG5cbiAgICAgIGlmICghb3B0aW9ucy5hdCkge1xuICAgICAgICB2YXIgcGF0aDtcblxuICAgICAgICBpZiAoZW5kcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcGF0aCA9IFBhdGgucHJldmlvdXMoZW5kUmVmLmN1cnJlbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKG1pZGRsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHBhdGggPSBQYXRoLnByZXZpb3VzKG1pZGRsZVJlZi5jdXJyZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXRoID0gUGF0aC5wcmV2aW91cyhzdGFydFJlZi5jdXJyZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfZW5kMiA9IEVkaXRvci5lbmQoZWRpdG9yLCBwYXRoKTtcblxuICAgICAgICBUcmFuc2Zvcm1zLnNlbGVjdChlZGl0b3IsIF9lbmQyKTtcbiAgICAgIH1cblxuICAgICAgc3RhcnRSZWYudW5yZWYoKTtcbiAgICAgIG1pZGRsZVJlZi51bnJlZigpO1xuICAgICAgZW5kUmVmLnVucmVmKCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogSW5zZXJ0IGEgc3RyaW5nIG9mIHRleHQgaW4gdGhlIEVkaXRvci5cclxuICAgKi9cbiAgaW5zZXJ0VGV4dChlZGl0b3IsIHRleHQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgRWRpdG9yLndpdGhvdXROb3JtYWxpemluZyhlZGl0b3IsICgpID0+IHtcbiAgICAgIHZhciB7XG4gICAgICAgIHZvaWRzID0gZmFsc2VcbiAgICAgIH0gPSBvcHRpb25zO1xuICAgICAgdmFyIHtcbiAgICAgICAgYXQgPSBlZGl0b3Iuc2VsZWN0aW9uXG4gICAgICB9ID0gb3B0aW9ucztcblxuICAgICAgaWYgKCFhdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChQYXRoLmlzUGF0aChhdCkpIHtcbiAgICAgICAgYXQgPSBFZGl0b3IucmFuZ2UoZWRpdG9yLCBhdCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChSYW5nZS5pc1JhbmdlKGF0KSkge1xuICAgICAgICBpZiAoUmFuZ2UuaXNDb2xsYXBzZWQoYXQpKSB7XG4gICAgICAgICAgYXQgPSBhdC5hbmNob3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGVuZCA9IFJhbmdlLmVuZChhdCk7XG5cbiAgICAgICAgICBpZiAoIXZvaWRzICYmIEVkaXRvci52b2lkKGVkaXRvciwge1xuICAgICAgICAgICAgYXQ6IGVuZFxuICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHBvaW50UmVmID0gRWRpdG9yLnBvaW50UmVmKGVkaXRvciwgZW5kKTtcbiAgICAgICAgICBUcmFuc2Zvcm1zLmRlbGV0ZShlZGl0b3IsIHtcbiAgICAgICAgICAgIGF0LFxuICAgICAgICAgICAgdm9pZHNcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhdCA9IHBvaW50UmVmLnVucmVmKCk7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5zZXRTZWxlY3Rpb24oZWRpdG9yLCB7XG4gICAgICAgICAgICBhbmNob3I6IGF0LFxuICAgICAgICAgICAgZm9jdXM6IGF0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCF2b2lkcyAmJiBFZGl0b3Iudm9pZChlZGl0b3IsIHtcbiAgICAgICAgYXRcbiAgICAgIH0pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHtcbiAgICAgICAgcGF0aCxcbiAgICAgICAgb2Zmc2V0XG4gICAgICB9ID0gYXQ7XG4gICAgICBpZiAodGV4dC5sZW5ndGggPiAwKSBlZGl0b3IuYXBwbHkoe1xuICAgICAgICB0eXBlOiAnaW5zZXJ0X3RleHQnLFxuICAgICAgICBwYXRoLFxuICAgICAgICBvZmZzZXQsXG4gICAgICAgIHRleHRcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbn07XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cbnZhciBUcmFuc2Zvcm1zID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgR2VuZXJhbFRyYW5zZm9ybXMpLCBOb2RlVHJhbnNmb3JtcyksIFNlbGVjdGlvblRyYW5zZm9ybXMpLCBUZXh0VHJhbnNmb3Jtcyk7XG5cbmV4cG9ydCB7IEVkaXRvciwgRWxlbWVudCwgTG9jYXRpb24sIE5vZGUsIE9wZXJhdGlvbiwgUGF0aCwgUGF0aFJlZiwgUG9pbnQsIFBvaW50UmVmLCBSYW5nZSwgUmFuZ2VSZWYsIFNwYW4sIFRleHQsIFRyYW5zZm9ybXMsIGNyZWF0ZUVkaXRvciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXMuanMubWFwXG4iXSwic291cmNlUm9vdCI6IiJ9