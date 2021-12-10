(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

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


/***/ }),

/***/ "../packages/plugins/content/slate/lib-es/pluginFactories/utils/listUtils.js":
/*!***********************************************************************************!*\
  !*** ../packages/plugins/content/slate/lib-es/pluginFactories/utils/listUtils.js ***!
  \***********************************************************************************/
/*! exports provided: getActiveList, getActiveListType, getPreviousListItem, increaseListIndention, decreaseListIndention */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveList", function() { return getActiveList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveListType", function() { return getActiveListType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousListItem", function() { return getPreviousListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increaseListIndention", function() { return increaseListIndention; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decreaseListIndention", function() { return decreaseListIndention; });
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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

var getActiveList = function (editor, allListTypes) {
    var _a = __read(slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].nodes(editor, {
        match: function (elem) { return allListTypes.includes(elem.type); },
        mode: 'lowest', // FIXME: whats the best value?
    }), 1), matchingNode = _a[0];
    return matchingNode;
};
var getActiveListType = function (editor, allListTypes) {
    var _a, _b;
    return (_b = (_a = getActiveList(editor, allListTypes)) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.type;
};
var getPreviousListItem = function (editor, listItemType) {
    var _a = __read(slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].nodes(editor, {
        match: function (elem) { return elem.type === listItemType; },
        mode: 'lowest',
    }), 1), currentLi = _a[0];
    var hasPrevious = currentLi && currentLi[1][currentLi[1].length - 1] > 0;
    return hasPrevious ? slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].node(editor, slate__WEBPACK_IMPORTED_MODULE_0__["Path"].previous(currentLi[1])) : null;
};
var increaseListIndention = function (editor, def, listType) {
    var currentActiveType = getActiveListType(editor, def.allListTypes);
    var previous = getPreviousListItem(editor, def.listItemType);
    slate__WEBPACK_IMPORTED_MODULE_0__["Transforms"].setNodes(editor, {
        type: def.listItemType,
    });
    if (previous) {
        // first make the previous node a paragraph
        slate__WEBPACK_IMPORTED_MODULE_0__["Transforms"].setNodes(editor, {
            type: null,
        }, {
            at: previous[1],
        });
        // wrap the pararaph as a new list item
        slate__WEBPACK_IMPORTED_MODULE_0__["Transforms"].wrapNodes(editor, {
            type: def.listItemType,
            children: [],
        }, {
            at: previous[1],
        });
        // move the current node after the paragraph
        slate__WEBPACK_IMPORTED_MODULE_0__["Transforms"].moveNodes(editor, {
            to: __spreadArray(__spreadArray([], __read(previous[1]), false), [1], false),
        });
        slate__WEBPACK_IMPORTED_MODULE_0__["Transforms"].wrapNodes(editor, {
            type: listType !== null && listType !== void 0 ? listType : currentActiveType,
            children: [],
        });
    }
    else {
        slate__WEBPACK_IMPORTED_MODULE_0__["Transforms"].wrapNodes(editor, {
            type: listType !== null && listType !== void 0 ? listType : currentActiveType,
            children: [],
        });
    }
};
var moveToParent = function (editor, nodePath, targetPath, parentIsList) {
    var _a;
    slate__WEBPACK_IMPORTED_MODULE_0__["Transforms"].moveNodes(editor, {
        at: nodePath,
        to: targetPath,
    });
    if (!parentIsList) {
        var targetNode = slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].node(editor, targetPath);
        // see https://github.com/ianstormtaylor/slate/issues/3769
        var onlyTextChildren = (_a = (targetNode === null || targetNode === void 0 ? void 0 : targetNode[0]).children) === null || _a === void 0 ? void 0 : _a.every(function (child) { return slate__WEBPACK_IMPORTED_MODULE_0__["Text"].isText(child) || slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].isInline(editor, child); });
        if (onlyTextChildren) {
            slate__WEBPACK_IMPORTED_MODULE_0__["Transforms"].setNodes(editor, {
                type: null,
            }, {
                at: targetPath,
            });
        }
        else {
            slate__WEBPACK_IMPORTED_MODULE_0__["Transforms"].unwrapNodes(editor, {
                at: targetPath,
            });
        }
    }
};
var decreaseListIndention = function (editor, def) {
    var _a = __read(slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].nodes(editor, {
        match: function (elem) { return elem.type === def.listItemType; },
        mode: 'lowest',
    }), 1), currentLi = _a[0];
    var currentLiPath = currentLi[1];
    var currentParent = slate__WEBPACK_IMPORTED_MODULE_0__["Path"].parent(currentLiPath);
    var parentListItemPath = slate__WEBPACK_IMPORTED_MODULE_0__["Path"].parent(currentParent);
    var parentListItem = slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].node(editor, parentListItemPath);
    var parentIsList = (parentListItem === null || parentListItem === void 0 ? void 0 : parentListItem[0].type) === def.listItemType;
    var isFirstInItsList = currentLiPath[currentLiPath.length - 1] === 0;
    var targetPath = parentIsList
        ? slate__WEBPACK_IMPORTED_MODULE_0__["Path"].next(parentListItemPath)
        : slate__WEBPACK_IMPORTED_MODULE_0__["Path"].next(currentParent);
    var next;
    do {
        next = slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].next(editor, {
            at: currentLiPath,
        });
        if (next) {
            moveToParent(editor, next[1], targetPath, parentIsList);
        }
    } while (next);
    moveToParent(editor, currentLiPath, targetPath, parentIsList);
    if (isFirstInItsList) {
        // the list will be empty now, remove it
        slate__WEBPACK_IMPORTED_MODULE_0__["Transforms"].removeNodes(editor, {
            at: currentParent,
        });
        if (parentIsList) {
            var previousParagraphPath = __spreadArray(__spreadArray([], __read(slate__WEBPACK_IMPORTED_MODULE_0__["Path"].previous(targetPath)), false), [0], false);
            var previousParagraph = slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].node(editor, previousParagraphPath);
            if (!(previousParagraph === null || previousParagraph === void 0 ? void 0 : previousParagraph[0].type)) {
                slate__WEBPACK_IMPORTED_MODULE_0__["Transforms"].unwrapNodes(editor, {
                    at: previousParagraphPath,
                    split: true,
                });
            }
        }
    }
};
//# sourceMappingURL=listUtils.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9pbW1lci9kaXN0L2ltbWVyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9pcy1wbGFpbi1vYmplY3QvZGlzdC9pcy1wbGFpbi1vYmplY3QubWpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3NsYXRlL2Rpc3QvaW5kZXguZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9wYWNrYWdlcy9wbHVnaW5zL2NvbnRlbnQvc2xhdGUvbGliLWVzL3BsdWdpbkZhY3Rvcmllcy91dGlscy9saXN0VXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBYyxrREFBa0QsSUFBSSx3QkFBd0IsR0FBRyxJQUFtQyxFQUFFLDZFQUE2RSwwQkFBMEIsNkVBQTZFLGdCQUFnQixxRUFBcUUsY0FBYyxrQkFBa0IsY0FBYyx3QkFBd0IsbUNBQW1DLCtCQUErQixxQkFBcUIsaUVBQWlFLHVFQUF1RSwrREFBK0QsY0FBYyw0QkFBNEIsa0JBQWtCLHVFQUF1RSxtQ0FBbUMsNEJBQTRCLGdCQUFnQixHQUFHLGNBQWMsV0FBVyw0REFBNEQsZ0JBQWdCLG1FQUFtRSxnQkFBZ0IsOEJBQThCLGtCQUFrQixXQUFXLHFEQUFxRCxnQkFBZ0Isd0NBQXdDLGNBQWMsMkJBQTJCLGNBQWMsMkJBQTJCLGNBQWMsZ0JBQWdCLGNBQWMseURBQXlELFlBQVksWUFBWSxvQkFBb0IsV0FBVyxLQUFLLGtCQUFrQiwwRUFBMEUsK0RBQStELEVBQUUsaURBQWlELGdCQUFnQiwrSEFBK0gsZUFBZSxTQUFTLGFBQWEsS0FBSyxjQUFjLHVEQUF1RCxjQUFjLFlBQVksb0JBQW9CLGdCQUFn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QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGVBQWUsNkJBQTZCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsaUJBQWlCLGdCQUFnQjtBQUNqQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLHFFQUFhO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFhO0FBQ3hCLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLDRDQUE0QyxnQ0FBZ0Msb0NBQW9DLG9EQUFvRCxzQkFBc0IsMENBQTBDLGdFQUFnRSxFQUFFLEVBQUUsRUFBRSxnQ0FBZ0MsRUFBRSxhQUFhOztBQUV6VixrQ0FBa0MsZ0JBQWdCLHNCQUFzQixPQUFPLHVEQUF1RCxhQUFhLHlEQUF5RCwyQ0FBMkMsRUFBRSxFQUFFLEVBQUUsNkNBQTZDLDJFQUEyRSxFQUFFLE9BQU8sbURBQW1ELGtGQUFrRixFQUFFLEVBQUUsRUFBRSxFQUFFLGVBQWU7QUFDMWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSw2RUFBNkUsY0FBYztBQUMzRjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsNkVBQTZFLGNBQWM7QUFDM0Y7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMscUVBQWE7QUFDdEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJuQkFBMm5CLHFFQUFhO0FBQ3hvQjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsNERBQTREOztBQUU1RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrREFBa0Q7O0FBRWxEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFEQUFxRDs7O0FBR3JEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7O0FBR0EsNENBQTRDOztBQUU1QztBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsVUFBVTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsUUFBUTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBLG9DQUFvQyxrQkFBa0I7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0EsV0FBVzs7O0FBR1g7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxjQUFjO0FBQ2hGO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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O0FBQ1g7O0FBRUE7QUFDQTtBQUNBLG1EQUFtRCxTQUFTO0FBQzVEO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsbURBQW1ELFNBQVM7QUFDNUQ7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBLHFEQUFxRCxTQUFTO0FBQzlEO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYLHFEQUFxRCxTQUFTO0FBQzlEO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYLHFEQUFxRCxTQUFTO0FBQzlEO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbURBQW1ELFNBQVM7QUFDNUQ7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHVDQUF1QztBQUMxRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscURBQU87QUFDbEI7QUFDQTtBQUNBLE9BQU8sV0FBVzs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTyx3Q0FBd0M7QUFDL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSwrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qjs7QUFFOUIsZ0VBQWdFOztBQUVoRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDREQUE0RCxjQUFjO0FBQzFFO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEMsZ0NBQWdDLG9DQUFvQyxvREFBb0Qsc0JBQXNCLDBDQUEwQyxnRUFBZ0UsRUFBRSxFQUFFLEVBQUUsZ0NBQWdDLEVBQUUsYUFBYTs7QUFFelYsa0NBQWtDLGdCQUFnQixzQkFBc0IsT0FBTyx1REFBdUQsYUFBYSx5REFBeUQsMkNBQTJDLEVBQUUsRUFBRSxFQUFFLDZDQUE2QywyRUFBMkUsRUFBRSxPQUFPLG1EQUFtRCxrRkFBa0YsRUFBRSxFQUFFLEVBQUUsRUFBRSxlQUFlO0FBQzFoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxrRkFBa0Y7QUFDbEYsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU8sRUFBRTs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QSxLQUFLO0FBQ0w7QUFDQSx5QkFBeUIsNENBQU07QUFDL0I7QUFDQSx1TEFBdUwsUUFBUSwwQ0FBSSxrQkFBa0IsNENBQU0seUJBQXlCLEVBQUU7QUFDdFA7QUFDQSxZQUFZLGdEQUFVO0FBQ3RCO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLGdEQUFVO0FBQ3RCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNPO0FBQ1Asb0JBQW9CLDRDQUFNO0FBQzFCLGdDQUFnQyx1Q0FBdUMsRUFBRTtBQUN6RTtBQUNBLEtBQUs7QUFDTDtBQUNBLHdCQUF3QiwwQ0FBSTtBQUM1Qiw2QkFBNkIsMENBQUk7QUFDakMseUJBQXlCLDRDQUFNO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMENBQUk7QUFDZCxVQUFVLDBDQUFJO0FBQ2Q7QUFDQTtBQUNBLGVBQWUsNENBQU07QUFDckI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0RBQVU7QUFDbEI7QUFDQSxTQUFTO0FBQ1Q7QUFDQSwrRUFBK0UsMENBQUk7QUFDbkYsb0NBQW9DLDRDQUFNO0FBQzFDO0FBQ0EsZ0JBQWdCLGdEQUFVO0FBQzFCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQyIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBuKG4pe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLHI9QXJyYXkodD4xP3QtMTowKSxlPTE7ZTx0O2UrKylyW2UtMV09YXJndW1lbnRzW2VdO2lmKFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYpe3ZhciBpPVlbbl0sbz1pP1wiZnVuY3Rpb25cIj09dHlwZW9mIGk/aS5hcHBseShudWxsLHIpOmk6XCJ1bmtub3duIGVycm9yIG5yOiBcIituO3Rocm93IEVycm9yKFwiW0ltbWVyXSBcIitvKX10aHJvdyBFcnJvcihcIltJbW1lcl0gbWluaWZpZWQgZXJyb3IgbnI6IFwiK24rKHIubGVuZ3RoP1wiIFwiK3IubWFwKChmdW5jdGlvbihuKXtyZXR1cm5cIidcIituK1wiJ1wifSkpLmpvaW4oXCIsXCIpOlwiXCIpK1wiLiBGaW5kIHRoZSBmdWxsIGVycm9yIGF0OiBodHRwczovL2JpdC5seS8zY1hFS1dmXCIpfWZ1bmN0aW9uIHQobil7cmV0dXJuISFuJiYhIW5bUV19ZnVuY3Rpb24gcihuKXtyZXR1cm4hIW4mJihmdW5jdGlvbihuKXtpZighbnx8XCJvYmplY3RcIiE9dHlwZW9mIG4pcmV0dXJuITE7dmFyIHQ9T2JqZWN0LmdldFByb3RvdHlwZU9mKG4pO2lmKG51bGw9PT10KXJldHVybiEwO3ZhciByPU9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsXCJjb25zdHJ1Y3RvclwiKSYmdC5jb25zdHJ1Y3RvcjtyZXR1cm4gcj09PU9iamVjdHx8XCJmdW5jdGlvblwiPT10eXBlb2YgciYmRnVuY3Rpb24udG9TdHJpbmcuY2FsbChyKT09PVp9KG4pfHxBcnJheS5pc0FycmF5KG4pfHwhIW5bTF18fCEhbi5jb25zdHJ1Y3RvcltMXXx8cyhuKXx8dihuKSl9ZnVuY3Rpb24gZShyKXtyZXR1cm4gdChyKXx8bigyMyxyKSxyW1FdLnR9ZnVuY3Rpb24gaShuLHQscil7dm9pZCAwPT09ciYmKHI9ITEpLDA9PT1vKG4pPyhyP09iamVjdC5rZXlzOm5uKShuKS5mb3JFYWNoKChmdW5jdGlvbihlKXtyJiZcInN5bWJvbFwiPT10eXBlb2YgZXx8dChlLG5bZV0sbil9KSk6bi5mb3JFYWNoKChmdW5jdGlvbihyLGUpe3JldHVybiB0KGUscixuKX0pKX1mdW5jdGlvbiBvKG4pe3ZhciB0PW5bUV07cmV0dXJuIHQ/dC5pPjM/dC5pLTQ6dC5pOkFycmF5LmlzQXJyYXkobik/MTpzKG4pPzI6dihuKT8zOjB9ZnVuY3Rpb24gdShuLHQpe3JldHVybiAyPT09byhuKT9uLmhhcyh0KTpPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobix0KX1mdW5jdGlvbiBhKG4sdCl7cmV0dXJuIDI9PT1vKG4pP24uZ2V0KHQpOm5bdF19ZnVuY3Rpb24gZihuLHQscil7dmFyIGU9byhuKTsyPT09ZT9uLnNldCh0LHIpOjM9PT1lPyhuLmRlbGV0ZSh0KSxuLmFkZChyKSk6blt0XT1yfWZ1bmN0aW9uIGMobix0KXtyZXR1cm4gbj09PXQ/MCE9PW58fDEvbj09MS90Om4hPW4mJnQhPXR9ZnVuY3Rpb24gcyhuKXtyZXR1cm4gWCYmbiBpbnN0YW5jZW9mIE1hcH1mdW5jdGlvbiB2KG4pe3JldHVybiBxJiZuIGluc3RhbmNlb2YgU2V0fWZ1bmN0aW9uIHAobil7cmV0dXJuIG4ub3x8bi50fWZ1bmN0aW9uIGwobil7aWYoQXJyYXkuaXNBcnJheShuKSlyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobik7dmFyIHQ9dG4obik7ZGVsZXRlIHRbUV07Zm9yKHZhciByPW5uKHQpLGU9MDtlPHIubGVuZ3RoO2UrKyl7dmFyIGk9cltlXSxvPXRbaV07ITE9PT1vLndyaXRhYmxlJiYoby53cml0YWJsZT0hMCxvLmNvbmZpZ3VyYWJsZT0hMCksKG8uZ2V0fHxvLnNldCkmJih0W2ldPXtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsZW51bWVyYWJsZTpvLmVudW1lcmFibGUsdmFsdWU6bltpXX0pfXJldHVybiBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihuKSx0KX1mdW5jdGlvbiBkKG4sZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPSExKSx5KG4pfHx0KG4pfHwhcihuKT9uOihvKG4pPjEmJihuLnNldD1uLmFkZD1uLmNsZWFyPW4uZGVsZXRlPWgpLE9iamVjdC5mcmVlemUobiksZSYmaShuLChmdW5jdGlvbihuLHQpe3JldHVybiBkKHQsITApfSksITApLG4pfWZ1bmN0aW9uIGgoKXtuKDIpfWZ1bmN0aW9uIHkobil7cmV0dXJuIG51bGw9PW58fFwib2JqZWN0XCIhPXR5cGVvZiBufHxPYmplY3QuaXNGcm96ZW4obil9ZnVuY3Rpb24gYih0KXt2YXIgcj1yblt0XTtyZXR1cm4gcnx8bigxOCx0KSxyfWZ1bmN0aW9uIG0obix0KXtybltuXXx8KHJuW25dPXQpfWZ1bmN0aW9uIF8oKXtyZXR1cm5cInByb2R1Y3Rpb25cIj09PXByb2Nlc3MuZW52Lk5PREVfRU5WfHxVfHxuKDApLFV9ZnVuY3Rpb24gaihuLHQpe3QmJihiKFwiUGF0Y2hlc1wiKSxuLnU9W10sbi5zPVtdLG4udj10KX1mdW5jdGlvbiBPKG4pe2cobiksbi5wLmZvckVhY2goUyksbi5wPW51bGx9ZnVuY3Rpb24gZyhuKXtuPT09VSYmKFU9bi5sKX1mdW5jdGlvbiB3KG4pe3JldHVybiBVPXtwOltdLGw6VSxoOm4sbTohMCxfOjB9fWZ1bmN0aW9uIFMobil7dmFyIHQ9bltRXTswPT09dC5pfHwxPT09dC5pP3QuaigpOnQuTz0hMH1mdW5jdGlvbiBQKHQsZSl7ZS5fPWUucC5sZW5ndGg7dmFyIGk9ZS5wWzBdLG89dm9pZCAwIT09dCYmdCE9PWk7cmV0dXJuIGUuaC5nfHxiKFwiRVM1XCIpLlMoZSx0LG8pLG8/KGlbUV0uUCYmKE8oZSksbig0KSkscih0KSYmKHQ9TShlLHQpLGUubHx8eChlLHQpKSxlLnUmJmIoXCJQYXRjaGVzXCIpLk0oaVtRXSx0LGUudSxlLnMpKTp0PU0oZSxpLFtdKSxPKGUpLGUudSYmZS52KGUudSxlLnMpLHQhPT1IP3Q6dm9pZCAwfWZ1bmN0aW9uIE0obix0LHIpe2lmKHkodCkpcmV0dXJuIHQ7dmFyIGU9dFtRXTtpZighZSlyZXR1cm4gaSh0LChmdW5jdGlvbihpLG8pe3JldHVybiBBKG4sZSx0LGksbyxyKX0pLCEwKSx0O2lmKGUuQSE9PW4pcmV0dXJuIHQ7aWYoIWUuUClyZXR1cm4geChuLGUudCwhMCksZS50O2lmKCFlLkkpe2UuST0hMCxlLkEuXy0tO3ZhciBvPTQ9PT1lLml8fDU9PT1lLmk/ZS5vPWwoZS5rKTplLm87aSgzPT09ZS5pP25ldyBTZXQobyk6bywoZnVuY3Rpb24odCxpKXtyZXR1cm4gQShuLGUsbyx0LGkscil9KSkseChuLG8sITEpLHImJm4udSYmYihcIlBhdGNoZXNcIikuUihlLHIsbi51LG4ucyl9cmV0dXJuIGUub31mdW5jdGlvbiBBKGUsaSxvLGEsYyxzKXtpZihcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZjPT09byYmbig1KSx0KGMpKXt2YXIgdj1NKGUsYyxzJiZpJiYzIT09aS5pJiYhdShpLkQsYSk/cy5jb25jYXQoYSk6dm9pZCAwKTtpZihmKG8sYSx2KSwhdCh2KSlyZXR1cm47ZS5tPSExfWlmKHIoYykmJiF5KGMpKXtpZighZS5oLkYmJmUuXzwxKXJldHVybjtNKGUsYyksaSYmaS5BLmx8fHgoZSxjKX19ZnVuY3Rpb24geChuLHQscil7dm9pZCAwPT09ciYmKHI9ITEpLG4uaC5GJiZuLm0mJmQodCxyKX1mdW5jdGlvbiB6KG4sdCl7dmFyIHI9bltRXTtyZXR1cm4ocj9wKHIpOm4pW3RdfWZ1bmN0aW9uIEkobix0KXtpZih0IGluIG4pZm9yKHZhciByPU9iamVjdC5nZXRQcm90b3R5cGVPZihuKTtyOyl7dmFyIGU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLHQpO2lmKGUpcmV0dXJuIGU7cj1PYmplY3QuZ2V0UHJvdG90eXBlT2Yocil9fWZ1bmN0aW9uIGsobil7bi5QfHwobi5QPSEwLG4ubCYmayhuLmwpKX1mdW5jdGlvbiBFKG4pe24ub3x8KG4ubz1sKG4udCkpfWZ1bmN0aW9uIFIobix0LHIpe3ZhciBlPXModCk/YihcIk1hcFNldFwiKS5OKHQscik6dih0KT9iKFwiTWFwU2V0XCIpLlQodCxyKTpuLmc/ZnVuY3Rpb24obix0KXt2YXIgcj1BcnJheS5pc0FycmF5KG4pLGU9e2k6cj8xOjAsQTp0P3QuQTpfKCksUDohMSxJOiExLEQ6e30sbDp0LHQ6bixrOm51bGwsbzpudWxsLGo6bnVsbCxDOiExfSxpPWUsbz1lbjtyJiYoaT1bZV0sbz1vbik7dmFyIHU9UHJveHkucmV2b2NhYmxlKGksbyksYT11LnJldm9rZSxmPXUucHJveHk7cmV0dXJuIGUuaz1mLGUuaj1hLGZ9KHQscik6YihcIkVTNVwiKS5KKHQscik7cmV0dXJuKHI/ci5BOl8oKSkucC5wdXNoKGUpLGV9ZnVuY3Rpb24gRChlKXtyZXR1cm4gdChlKXx8bigyMixlKSxmdW5jdGlvbiBuKHQpe2lmKCFyKHQpKXJldHVybiB0O3ZhciBlLHU9dFtRXSxjPW8odCk7aWYodSl7aWYoIXUuUCYmKHUuaTw0fHwhYihcIkVTNVwiKS5LKHUpKSlyZXR1cm4gdS50O3UuST0hMCxlPUYodCxjKSx1Lkk9ITF9ZWxzZSBlPUYodCxjKTtyZXR1cm4gaShlLChmdW5jdGlvbih0LHIpe3UmJmEodS50LHQpPT09cnx8ZihlLHQsbihyKSl9KSksMz09PWM/bmV3IFNldChlKTplfShlKX1mdW5jdGlvbiBGKG4sdCl7c3dpdGNoKHQpe2Nhc2UgMjpyZXR1cm4gbmV3IE1hcChuKTtjYXNlIDM6cmV0dXJuIEFycmF5LmZyb20obil9cmV0dXJuIGwobil9ZnVuY3Rpb24gTigpe2Z1bmN0aW9uIHIobix0KXt2YXIgcj1zW25dO3JldHVybiByP3IuZW51bWVyYWJsZT10OnNbbl09cj17Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6dCxnZXQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzW1FdO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmYodCksZW4uZ2V0KHQsbil9LHNldDpmdW5jdGlvbih0KXt2YXIgcj10aGlzW1FdO1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmYociksZW4uc2V0KHIsbix0KX19LHJ9ZnVuY3Rpb24gZShuKXtmb3IodmFyIHQ9bi5sZW5ndGgtMTt0Pj0wO3QtLSl7dmFyIHI9blt0XVtRXTtpZighci5QKXN3aXRjaChyLmkpe2Nhc2UgNTphKHIpJiZrKHIpO2JyZWFrO2Nhc2UgNDpvKHIpJiZrKHIpfX19ZnVuY3Rpb24gbyhuKXtmb3IodmFyIHQ9bi50LHI9bi5rLGU9bm4ociksaT1lLmxlbmd0aC0xO2k+PTA7aS0tKXt2YXIgbz1lW2ldO2lmKG8hPT1RKXt2YXIgYT10W29dO2lmKHZvaWQgMD09PWEmJiF1KHQsbykpcmV0dXJuITA7dmFyIGY9cltvXSxzPWYmJmZbUV07aWYocz9zLnQhPT1hOiFjKGYsYSkpcmV0dXJuITB9fXZhciB2PSEhdFtRXTtyZXR1cm4gZS5sZW5ndGghPT1ubih0KS5sZW5ndGgrKHY/MDoxKX1mdW5jdGlvbiBhKG4pe3ZhciB0PW4uaztpZih0Lmxlbmd0aCE9PW4udC5sZW5ndGgpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LHQubGVuZ3RoLTEpO3JldHVybiEoIXJ8fHIuZ2V0KX1mdW5jdGlvbiBmKHQpe3QuTyYmbigzLEpTT04uc3RyaW5naWZ5KHAodCkpKX12YXIgcz17fTttKFwiRVM1XCIse0o6ZnVuY3Rpb24obix0KXt2YXIgZT1BcnJheS5pc0FycmF5KG4pLGk9ZnVuY3Rpb24obix0KXtpZihuKXtmb3IodmFyIGU9QXJyYXkodC5sZW5ndGgpLGk9MDtpPHQubGVuZ3RoO2krKylPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIlwiK2kscihpLCEwKSk7cmV0dXJuIGV9dmFyIG89dG4odCk7ZGVsZXRlIG9bUV07Zm9yKHZhciB1PW5uKG8pLGE9MDthPHUubGVuZ3RoO2ErKyl7dmFyIGY9dVthXTtvW2ZdPXIoZixufHwhIW9bZl0uZW51bWVyYWJsZSl9cmV0dXJuIE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHQpLG8pfShlLG4pLG89e2k6ZT81OjQsQTp0P3QuQTpfKCksUDohMSxJOiExLEQ6e30sbDp0LHQ6bixrOmksbzpudWxsLE86ITEsQzohMX07cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpLFEse3ZhbHVlOm8sd3JpdGFibGU6ITB9KSxpfSxTOmZ1bmN0aW9uKG4scixvKXtvP3QocikmJnJbUV0uQT09PW4mJmUobi5wKToobi51JiZmdW5jdGlvbiBuKHQpe2lmKHQmJlwib2JqZWN0XCI9PXR5cGVvZiB0KXt2YXIgcj10W1FdO2lmKHIpe3ZhciBlPXIudCxvPXIuayxmPXIuRCxjPXIuaTtpZig0PT09YylpKG8sKGZ1bmN0aW9uKHQpe3QhPT1RJiYodm9pZCAwIT09ZVt0XXx8dShlLHQpP2ZbdF18fG4ob1t0XSk6KGZbdF09ITAsayhyKSkpfSkpLGkoZSwoZnVuY3Rpb24obil7dm9pZCAwIT09b1tuXXx8dShvLG4pfHwoZltuXT0hMSxrKHIpKX0pKTtlbHNlIGlmKDU9PT1jKXtpZihhKHIpJiYoayhyKSxmLmxlbmd0aD0hMCksby5sZW5ndGg8ZS5sZW5ndGgpZm9yKHZhciBzPW8ubGVuZ3RoO3M8ZS5sZW5ndGg7cysrKWZbc109ITE7ZWxzZSBmb3IodmFyIHY9ZS5sZW5ndGg7djxvLmxlbmd0aDt2KyspZlt2XT0hMDtmb3IodmFyIHA9TWF0aC5taW4oby5sZW5ndGgsZS5sZW5ndGgpLGw9MDtsPHA7bCsrKXZvaWQgMD09PWZbbF0mJm4ob1tsXSl9fX19KG4ucFswXSksZShuLnApKX0sSzpmdW5jdGlvbihuKXtyZXR1cm4gND09PW4uaT9vKG4pOmEobil9fSl9ZnVuY3Rpb24gVCgpe2Z1bmN0aW9uIGUobil7aWYoIXIobikpcmV0dXJuIG47aWYoQXJyYXkuaXNBcnJheShuKSlyZXR1cm4gbi5tYXAoZSk7aWYocyhuKSlyZXR1cm4gbmV3IE1hcChBcnJheS5mcm9tKG4uZW50cmllcygpKS5tYXAoKGZ1bmN0aW9uKG4pe3JldHVybltuWzBdLGUoblsxXSldfSkpKTtpZih2KG4pKXJldHVybiBuZXcgU2V0KEFycmF5LmZyb20obikubWFwKGUpKTt2YXIgdD1PYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihuKSk7Zm9yKHZhciBpIGluIG4pdFtpXT1lKG5baV0pO3JldHVybiB1KG4sTCkmJih0W0xdPW5bTF0pLHR9ZnVuY3Rpb24gZihuKXtyZXR1cm4gdChuKT9lKG4pOm59dmFyIGM9XCJhZGRcIjttKFwiUGF0Y2hlc1wiLHskOmZ1bmN0aW9uKHQscil7cmV0dXJuIHIuZm9yRWFjaCgoZnVuY3Rpb24ocil7Zm9yKHZhciBpPXIucGF0aCx1PXIub3AsZj10LHM9MDtzPGkubGVuZ3RoLTE7cysrKXt2YXIgdj1vKGYpLHA9XCJcIitpW3NdOzAhPT12JiYxIT09dnx8XCJfX3Byb3RvX19cIiE9PXAmJlwiY29uc3RydWN0b3JcIiE9PXB8fG4oMjQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGYmJlwicHJvdG90eXBlXCI9PT1wJiZuKDI0KSxcIm9iamVjdFwiIT10eXBlb2YoZj1hKGYscCkpJiZuKDE1LGkuam9pbihcIi9cIikpfXZhciBsPW8oZiksZD1lKHIudmFsdWUpLGg9aVtpLmxlbmd0aC0xXTtzd2l0Y2godSl7Y2FzZVwicmVwbGFjZVwiOnN3aXRjaChsKXtjYXNlIDI6cmV0dXJuIGYuc2V0KGgsZCk7Y2FzZSAzOm4oMTYpO2RlZmF1bHQ6cmV0dXJuIGZbaF09ZH1jYXNlIGM6c3dpdGNoKGwpe2Nhc2UgMTpyZXR1cm4gZi5zcGxpY2UoaCwwLGQpO2Nhc2UgMjpyZXR1cm4gZi5zZXQoaCxkKTtjYXNlIDM6cmV0dXJuIGYuYWRkKGQpO2RlZmF1bHQ6cmV0dXJuIGZbaF09ZH1jYXNlXCJyZW1vdmVcIjpzd2l0Y2gobCl7Y2FzZSAxOnJldHVybiBmLnNwbGljZShoLDEpO2Nhc2UgMjpyZXR1cm4gZi5kZWxldGUoaCk7Y2FzZSAzOnJldHVybiBmLmRlbGV0ZShyLnZhbHVlKTtkZWZhdWx0OnJldHVybiBkZWxldGUgZltoXX1kZWZhdWx0Om4oMTcsdSl9fSkpLHR9LFI6ZnVuY3Rpb24obix0LHIsZSl7c3dpdGNoKG4uaSl7Y2FzZSAwOmNhc2UgNDpjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKG4sdCxyLGUpe3ZhciBvPW4udCxzPW4ubztpKG4uRCwoZnVuY3Rpb24obixpKXt2YXIgdj1hKG8sbikscD1hKHMsbiksbD1pP3UobyxuKT9cInJlcGxhY2VcIjpjOlwicmVtb3ZlXCI7aWYodiE9PXB8fFwicmVwbGFjZVwiIT09bCl7dmFyIGQ9dC5jb25jYXQobik7ci5wdXNoKFwicmVtb3ZlXCI9PT1sP3tvcDpsLHBhdGg6ZH06e29wOmwscGF0aDpkLHZhbHVlOnB9KSxlLnB1c2gobD09PWM/e29wOlwicmVtb3ZlXCIscGF0aDpkfTpcInJlbW92ZVwiPT09bD97b3A6YyxwYXRoOmQsdmFsdWU6Zih2KX06e29wOlwicmVwbGFjZVwiLHBhdGg6ZCx2YWx1ZTpmKHYpfSl9fSkpfShuLHQscixlKTtjYXNlIDU6Y2FzZSAxOnJldHVybiBmdW5jdGlvbihuLHQscixlKXt2YXIgaT1uLnQsbz1uLkQsdT1uLm87aWYodS5sZW5ndGg8aS5sZW5ndGgpe3ZhciBhPVt1LGldO2k9YVswXSx1PWFbMV07dmFyIHM9W2Uscl07cj1zWzBdLGU9c1sxXX1mb3IodmFyIHY9MDt2PGkubGVuZ3RoO3YrKylpZihvW3ZdJiZ1W3ZdIT09aVt2XSl7dmFyIHA9dC5jb25jYXQoW3ZdKTtyLnB1c2goe29wOlwicmVwbGFjZVwiLHBhdGg6cCx2YWx1ZTpmKHVbdl0pfSksZS5wdXNoKHtvcDpcInJlcGxhY2VcIixwYXRoOnAsdmFsdWU6ZihpW3ZdKX0pfWZvcih2YXIgbD1pLmxlbmd0aDtsPHUubGVuZ3RoO2wrKyl7dmFyIGQ9dC5jb25jYXQoW2xdKTtyLnB1c2goe29wOmMscGF0aDpkLHZhbHVlOmYodVtsXSl9KX1pLmxlbmd0aDx1Lmxlbmd0aCYmZS5wdXNoKHtvcDpcInJlcGxhY2VcIixwYXRoOnQuY29uY2F0KFtcImxlbmd0aFwiXSksdmFsdWU6aS5sZW5ndGh9KX0obix0LHIsZSk7Y2FzZSAzOnJldHVybiBmdW5jdGlvbihuLHQscixlKXt2YXIgaT1uLnQsbz1uLm8sdT0wO2kuZm9yRWFjaCgoZnVuY3Rpb24obil7aWYoIW8uaGFzKG4pKXt2YXIgaT10LmNvbmNhdChbdV0pO3IucHVzaCh7b3A6XCJyZW1vdmVcIixwYXRoOmksdmFsdWU6bn0pLGUudW5zaGlmdCh7b3A6YyxwYXRoOmksdmFsdWU6bn0pfXUrK30pKSx1PTAsby5mb3JFYWNoKChmdW5jdGlvbihuKXtpZighaS5oYXMobikpe3ZhciBvPXQuY29uY2F0KFt1XSk7ci5wdXNoKHtvcDpjLHBhdGg6byx2YWx1ZTpufSksZS51bnNoaWZ0KHtvcDpcInJlbW92ZVwiLHBhdGg6byx2YWx1ZTpufSl9dSsrfSkpfShuLHQscixlKX19LE06ZnVuY3Rpb24obix0LHIsZSl7ci5wdXNoKHtvcDpcInJlcGxhY2VcIixwYXRoOltdLHZhbHVlOnQ9PT1IP3ZvaWQgMDp0fSksZS5wdXNoKHtvcDpcInJlcGxhY2VcIixwYXRoOltdLHZhbHVlOm4udH0pfX0pfWZ1bmN0aW9uIEMoKXtmdW5jdGlvbiB0KG4sdCl7ZnVuY3Rpb24gcigpe3RoaXMuY29uc3RydWN0b3I9bn1hKG4sdCksbi5wcm90b3R5cGU9KHIucHJvdG90eXBlPXQucHJvdG90eXBlLG5ldyByKX1mdW5jdGlvbiBlKG4pe24ub3x8KG4uRD1uZXcgTWFwLG4ubz1uZXcgTWFwKG4udCkpfWZ1bmN0aW9uIG8obil7bi5vfHwobi5vPW5ldyBTZXQsbi50LmZvckVhY2goKGZ1bmN0aW9uKHQpe2lmKHIodCkpe3ZhciBlPVIobi5BLmgsdCxuKTtuLnAuc2V0KHQsZSksbi5vLmFkZChlKX1lbHNlIG4uby5hZGQodCl9KSkpfWZ1bmN0aW9uIHUodCl7dC5PJiZuKDMsSlNPTi5zdHJpbmdpZnkocCh0KSkpfXZhciBhPWZ1bmN0aW9uKG4sdCl7cmV0dXJuKGE9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKG4sdCl7bi5fX3Byb3RvX189dH18fGZ1bmN0aW9uKG4sdCl7Zm9yKHZhciByIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShyKSYmKG5bcl09dFtyXSl9KShuLHQpfSxmPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gbihuLHQpe3JldHVybiB0aGlzW1FdPXtpOjIsbDp0LEE6dD90LkE6XygpLFA6ITEsSTohMSxvOnZvaWQgMCxEOnZvaWQgMCx0Om4sazp0aGlzLEM6ITEsTzohMX0sdGhpc310KG4sTWFwKTt2YXIgbz1uLnByb3RvdHlwZTtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJzaXplXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBwKHRoaXNbUV0pLnNpemV9fSksby5oYXM9ZnVuY3Rpb24obil7cmV0dXJuIHAodGhpc1tRXSkuaGFzKG4pfSxvLnNldD1mdW5jdGlvbihuLHQpe3ZhciByPXRoaXNbUV07cmV0dXJuIHUocikscChyKS5oYXMobikmJnAocikuZ2V0KG4pPT09dHx8KGUociksayhyKSxyLkQuc2V0KG4sITApLHIuby5zZXQobix0KSxyLkQuc2V0KG4sITApKSx0aGlzfSxvLmRlbGV0ZT1mdW5jdGlvbihuKXtpZighdGhpcy5oYXMobikpcmV0dXJuITE7dmFyIHQ9dGhpc1tRXTtyZXR1cm4gdSh0KSxlKHQpLGsodCksdC5ELnNldChuLCExKSx0Lm8uZGVsZXRlKG4pLCEwfSxvLmNsZWFyPWZ1bmN0aW9uKCl7dmFyIG49dGhpc1tRXTt1KG4pLHAobikuc2l6ZSYmKGUobiksayhuKSxuLkQ9bmV3IE1hcCxpKG4udCwoZnVuY3Rpb24odCl7bi5ELnNldCh0LCExKX0pKSxuLm8uY2xlYXIoKSl9LG8uZm9yRWFjaD1mdW5jdGlvbihuLHQpe3ZhciByPXRoaXM7cCh0aGlzW1FdKS5mb3JFYWNoKChmdW5jdGlvbihlLGkpe24uY2FsbCh0LHIuZ2V0KGkpLGkscil9KSl9LG8uZ2V0PWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXNbUV07dSh0KTt2YXIgaT1wKHQpLmdldChuKTtpZih0Lkl8fCFyKGkpKXJldHVybiBpO2lmKGkhPT10LnQuZ2V0KG4pKXJldHVybiBpO3ZhciBvPVIodC5BLmgsaSx0KTtyZXR1cm4gZSh0KSx0Lm8uc2V0KG4sbyksb30sby5rZXlzPWZ1bmN0aW9uKCl7cmV0dXJuIHAodGhpc1tRXSkua2V5cygpfSxvLnZhbHVlcz1mdW5jdGlvbigpe3ZhciBuLHQ9dGhpcyxyPXRoaXMua2V5cygpO3JldHVybihuPXt9KVtWXT1mdW5jdGlvbigpe3JldHVybiB0LnZhbHVlcygpfSxuLm5leHQ9ZnVuY3Rpb24oKXt2YXIgbj1yLm5leHQoKTtyZXR1cm4gbi5kb25lP246e2RvbmU6ITEsdmFsdWU6dC5nZXQobi52YWx1ZSl9fSxufSxvLmVudHJpZXM9ZnVuY3Rpb24oKXt2YXIgbix0PXRoaXMscj10aGlzLmtleXMoKTtyZXR1cm4obj17fSlbVl09ZnVuY3Rpb24oKXtyZXR1cm4gdC5lbnRyaWVzKCl9LG4ubmV4dD1mdW5jdGlvbigpe3ZhciBuPXIubmV4dCgpO2lmKG4uZG9uZSlyZXR1cm4gbjt2YXIgZT10LmdldChuLnZhbHVlKTtyZXR1cm57ZG9uZTohMSx2YWx1ZTpbbi52YWx1ZSxlXX19LG59LG9bVl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbnRyaWVzKCl9LG59KCksYz1mdW5jdGlvbigpe2Z1bmN0aW9uIG4obix0KXtyZXR1cm4gdGhpc1tRXT17aTozLGw6dCxBOnQ/dC5BOl8oKSxQOiExLEk6ITEsbzp2b2lkIDAsdDpuLGs6dGhpcyxwOm5ldyBNYXAsTzohMSxDOiExfSx0aGlzfXQobixTZXQpO3ZhciByPW4ucHJvdG90eXBlO3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocixcInNpemVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHAodGhpc1tRXSkuc2l6ZX19KSxyLmhhcz1mdW5jdGlvbihuKXt2YXIgdD10aGlzW1FdO3JldHVybiB1KHQpLHQubz8hIXQuby5oYXMobil8fCEoIXQucC5oYXMobil8fCF0Lm8uaGFzKHQucC5nZXQobikpKTp0LnQuaGFzKG4pfSxyLmFkZD1mdW5jdGlvbihuKXt2YXIgdD10aGlzW1FdO3JldHVybiB1KHQpLHRoaXMuaGFzKG4pfHwobyh0KSxrKHQpLHQuby5hZGQobikpLHRoaXN9LHIuZGVsZXRlPWZ1bmN0aW9uKG4pe2lmKCF0aGlzLmhhcyhuKSlyZXR1cm4hMTt2YXIgdD10aGlzW1FdO3JldHVybiB1KHQpLG8odCksayh0KSx0Lm8uZGVsZXRlKG4pfHwhIXQucC5oYXMobikmJnQuby5kZWxldGUodC5wLmdldChuKSl9LHIuY2xlYXI9ZnVuY3Rpb24oKXt2YXIgbj10aGlzW1FdO3UobikscChuKS5zaXplJiYobyhuKSxrKG4pLG4uby5jbGVhcigpKX0sci52YWx1ZXM9ZnVuY3Rpb24oKXt2YXIgbj10aGlzW1FdO3JldHVybiB1KG4pLG8obiksbi5vLnZhbHVlcygpfSxyLmVudHJpZXM9ZnVuY3Rpb24oKXt2YXIgbj10aGlzW1FdO3JldHVybiB1KG4pLG8obiksbi5vLmVudHJpZXMoKX0sci5rZXlzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWVzKCl9LHJbVl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZXMoKX0sci5mb3JFYWNoPWZ1bmN0aW9uKG4sdCl7Zm9yKHZhciByPXRoaXMudmFsdWVzKCksZT1yLm5leHQoKTshZS5kb25lOyluLmNhbGwodCxlLnZhbHVlLGUudmFsdWUsdGhpcyksZT1yLm5leHQoKX0sbn0oKTttKFwiTWFwU2V0XCIse046ZnVuY3Rpb24obix0KXtyZXR1cm4gbmV3IGYobix0KX0sVDpmdW5jdGlvbihuLHQpe3JldHVybiBuZXcgYyhuLHQpfX0pfWZ1bmN0aW9uIEooKXtOKCksQygpLFQoKX1mdW5jdGlvbiBLKG4pe3JldHVybiBufWZ1bmN0aW9uICQobil7cmV0dXJuIG59dmFyIEcsVSxXPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2woXCJ4XCIpLFg9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIE1hcCxxPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTZXQsQj1cInVuZGVmaW5lZFwiIT10eXBlb2YgUHJveHkmJnZvaWQgMCE9PVByb3h5LnJldm9jYWJsZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFJlZmxlY3QsSD1XP1N5bWJvbC5mb3IoXCJpbW1lci1ub3RoaW5nXCIpOigoRz17fSlbXCJpbW1lci1ub3RoaW5nXCJdPSEwLEcpLEw9Vz9TeW1ib2wuZm9yKFwiaW1tZXItZHJhZnRhYmxlXCIpOlwiX18kaW1tZXJfZHJhZnRhYmxlXCIsUT1XP1N5bWJvbC5mb3IoXCJpbW1lci1zdGF0ZVwiKTpcIl9fJGltbWVyX3N0YXRlXCIsVj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3J8fFwiQEBpdGVyYXRvclwiLFk9ezA6XCJJbGxlZ2FsIHN0YXRlXCIsMTpcIkltbWVyIGRyYWZ0cyBjYW5ub3QgaGF2ZSBjb21wdXRlZCBwcm9wZXJ0aWVzXCIsMjpcIlRoaXMgb2JqZWN0IGhhcyBiZWVuIGZyb3plbiBhbmQgc2hvdWxkIG5vdCBiZSBtdXRhdGVkXCIsMzpmdW5jdGlvbihuKXtyZXR1cm5cIkNhbm5vdCB1c2UgYSBwcm94eSB0aGF0IGhhcyBiZWVuIHJldm9rZWQuIERpZCB5b3UgcGFzcyBhbiBvYmplY3QgZnJvbSBpbnNpZGUgYW4gaW1tZXIgZnVuY3Rpb24gdG8gYW4gYXN5bmMgcHJvY2Vzcz8gXCIrbn0sNDpcIkFuIGltbWVyIHByb2R1Y2VyIHJldHVybmVkIGEgbmV3IHZhbHVlICphbmQqIG1vZGlmaWVkIGl0cyBkcmFmdC4gRWl0aGVyIHJldHVybiBhIG5ldyB2YWx1ZSAqb3IqIG1vZGlmeSB0aGUgZHJhZnQuXCIsNTpcIkltbWVyIGZvcmJpZHMgY2lyY3VsYXIgcmVmZXJlbmNlc1wiLDY6XCJUaGUgZmlyc3Qgb3Igc2Vjb25kIGFyZ3VtZW50IHRvIGBwcm9kdWNlYCBtdXN0IGJlIGEgZnVuY3Rpb25cIiw3OlwiVGhlIHRoaXJkIGFyZ3VtZW50IHRvIGBwcm9kdWNlYCBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgdW5kZWZpbmVkXCIsODpcIkZpcnN0IGFyZ3VtZW50IHRvIGBjcmVhdGVEcmFmdGAgbXVzdCBiZSBhIHBsYWluIG9iamVjdCwgYW4gYXJyYXksIG9yIGFuIGltbWVyYWJsZSBvYmplY3RcIiw5OlwiRmlyc3QgYXJndW1lbnQgdG8gYGZpbmlzaERyYWZ0YCBtdXN0IGJlIGEgZHJhZnQgcmV0dXJuZWQgYnkgYGNyZWF0ZURyYWZ0YFwiLDEwOlwiVGhlIGdpdmVuIGRyYWZ0IGlzIGFscmVhZHkgZmluYWxpemVkXCIsMTE6XCJPYmplY3QuZGVmaW5lUHJvcGVydHkoKSBjYW5ub3QgYmUgdXNlZCBvbiBhbiBJbW1lciBkcmFmdFwiLDEyOlwiT2JqZWN0LnNldFByb3RvdHlwZU9mKCkgY2Fubm90IGJlIHVzZWQgb24gYW4gSW1tZXIgZHJhZnRcIiwxMzpcIkltbWVyIG9ubHkgc3VwcG9ydHMgZGVsZXRpbmcgYXJyYXkgaW5kaWNlc1wiLDE0OlwiSW1tZXIgb25seSBzdXBwb3J0cyBzZXR0aW5nIGFycmF5IGluZGljZXMgYW5kIHRoZSAnbGVuZ3RoJyBwcm9wZXJ0eVwiLDE1OmZ1bmN0aW9uKG4pe3JldHVyblwiQ2Fubm90IGFwcGx5IHBhdGNoLCBwYXRoIGRvZXNuJ3QgcmVzb2x2ZTogXCIrbn0sMTY6J1NldHMgY2Fubm90IGhhdmUgXCJyZXBsYWNlXCIgcGF0Y2hlcy4nLDE3OmZ1bmN0aW9uKG4pe3JldHVyblwiVW5zdXBwb3J0ZWQgcGF0Y2ggb3BlcmF0aW9uOiBcIitufSwxODpmdW5jdGlvbihuKXtyZXR1cm5cIlRoZSBwbHVnaW4gZm9yICdcIituK1wiJyBoYXMgbm90IGJlZW4gbG9hZGVkIGludG8gSW1tZXIuIFRvIGVuYWJsZSB0aGUgcGx1Z2luLCBpbXBvcnQgYW5kIGNhbGwgYGVuYWJsZVwiK24rXCIoKWAgd2hlbiBpbml0aWFsaXppbmcgeW91ciBhcHBsaWNhdGlvbi5cIn0sMjA6XCJDYW5ub3QgdXNlIHByb3hpZXMgaWYgUHJveHksIFByb3h5LnJldm9jYWJsZSBvciBSZWZsZWN0IGFyZSBub3QgYXZhaWxhYmxlXCIsMjE6ZnVuY3Rpb24obil7cmV0dXJuXCJwcm9kdWNlIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiB0aGluZ3MgdGhhdCBhcmUgZHJhZnRhYmxlOiBwbGFpbiBvYmplY3RzLCBhcnJheXMsIE1hcCwgU2V0IG9yIGNsYXNzZXMgdGhhdCBhcmUgbWFya2VkIHdpdGggJ1tpbW1lcmFibGVdOiB0cnVlJy4gR290ICdcIituK1wiJ1wifSwyMjpmdW5jdGlvbihuKXtyZXR1cm5cIidjdXJyZW50JyBleHBlY3RzIGEgZHJhZnQsIGdvdDogXCIrbn0sMjM6ZnVuY3Rpb24obil7cmV0dXJuXCInb3JpZ2luYWwnIGV4cGVjdHMgYSBkcmFmdCwgZ290OiBcIitufSwyNDpcIlBhdGNoaW5nIHJlc2VydmVkIGF0dHJpYnV0ZXMgbGlrZSBfX3Byb3RvX18sIHByb3RvdHlwZSBhbmQgY29uc3RydWN0b3IgaXMgbm90IGFsbG93ZWRcIn0sWj1cIlwiK09iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3Isbm49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFJlZmxlY3QmJlJlZmxlY3Qub3duS2V5cz9SZWZsZWN0Lm93bktleXM6dm9pZCAwIT09T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scz9mdW5jdGlvbihuKXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobikuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMobikpfTpPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyx0bj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yc3x8ZnVuY3Rpb24obil7dmFyIHQ9e307cmV0dXJuIG5uKG4pLmZvckVhY2goKGZ1bmN0aW9uKHIpe3Rbcl09T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuLHIpfSkpLHR9LHJuPXt9LGVuPXtnZXQ6ZnVuY3Rpb24obix0KXtpZih0PT09USlyZXR1cm4gbjt2YXIgZT1wKG4pO2lmKCF1KGUsdCkpcmV0dXJuIGZ1bmN0aW9uKG4sdCxyKXt2YXIgZSxpPUkodCxyKTtyZXR1cm4gaT9cInZhbHVlXCJpbiBpP2kudmFsdWU6bnVsbD09PShlPWkuZ2V0KXx8dm9pZCAwPT09ZT92b2lkIDA6ZS5jYWxsKG4uayk6dm9pZCAwfShuLGUsdCk7dmFyIGk9ZVt0XTtyZXR1cm4gbi5JfHwhcihpKT9pOmk9PT16KG4udCx0KT8oRShuKSxuLm9bdF09UihuLkEuaCxpLG4pKTppfSxoYXM6ZnVuY3Rpb24obix0KXtyZXR1cm4gdCBpbiBwKG4pfSxvd25LZXlzOmZ1bmN0aW9uKG4pe3JldHVybiBSZWZsZWN0Lm93bktleXMocChuKSl9LHNldDpmdW5jdGlvbihuLHQscil7dmFyIGU9SShwKG4pLHQpO2lmKG51bGw9PWU/dm9pZCAwOmUuc2V0KXJldHVybiBlLnNldC5jYWxsKG4uayxyKSwhMDtpZighbi5QKXt2YXIgaT16KHAobiksdCksbz1udWxsPT1pP3ZvaWQgMDppW1FdO2lmKG8mJm8udD09PXIpcmV0dXJuIG4ub1t0XT1yLG4uRFt0XT0hMSwhMDtpZihjKHIsaSkmJih2b2lkIDAhPT1yfHx1KG4udCx0KSkpcmV0dXJuITA7RShuKSxrKG4pfXJldHVybiBuLm9bdF09PT1yJiZcIm51bWJlclwiIT10eXBlb2YgciYmKHZvaWQgMCE9PXJ8fHQgaW4gbi5vKXx8KG4ub1t0XT1yLG4uRFt0XT0hMCwhMCl9LGRlbGV0ZVByb3BlcnR5OmZ1bmN0aW9uKG4sdCl7cmV0dXJuIHZvaWQgMCE9PXoobi50LHQpfHx0IGluIG4udD8obi5EW3RdPSExLEUobiksayhuKSk6ZGVsZXRlIG4uRFt0XSxuLm8mJmRlbGV0ZSBuLm9bdF0sITB9LGdldE93blByb3BlcnR5RGVzY3JpcHRvcjpmdW5jdGlvbihuLHQpe3ZhciByPXAobiksZT1SZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLHQpO3JldHVybiBlP3t3cml0YWJsZTohMCxjb25maWd1cmFibGU6MSE9PW4uaXx8XCJsZW5ndGhcIiE9PXQsZW51bWVyYWJsZTplLmVudW1lcmFibGUsdmFsdWU6clt0XX06ZX0sZGVmaW5lUHJvcGVydHk6ZnVuY3Rpb24oKXtuKDExKX0sZ2V0UHJvdG90eXBlT2Y6ZnVuY3Rpb24obil7cmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihuLnQpfSxzZXRQcm90b3R5cGVPZjpmdW5jdGlvbigpe24oMTIpfX0sb249e307aShlbiwoZnVuY3Rpb24obix0KXtvbltuXT1mdW5jdGlvbigpe3JldHVybiBhcmd1bWVudHNbMF09YXJndW1lbnRzWzBdWzBdLHQuYXBwbHkodGhpcyxhcmd1bWVudHMpfX0pKSxvbi5kZWxldGVQcm9wZXJ0eT1mdW5jdGlvbih0LHIpe3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmlzTmFOKHBhcnNlSW50KHIpKSYmbigxMyksZW4uZGVsZXRlUHJvcGVydHkuY2FsbCh0aGlzLHRbMF0scil9LG9uLnNldD1mdW5jdGlvbih0LHIsZSl7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmXCJsZW5ndGhcIiE9PXImJmlzTmFOKHBhcnNlSW50KHIpKSYmbigxNCksZW4uc2V0LmNhbGwodGhpcyx0WzBdLHIsZSx0WzBdKX07dmFyIHVuPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0KXt2YXIgZT10aGlzO3RoaXMuZz1CLHRoaXMuRj0hMCx0aGlzLnByb2R1Y2U9ZnVuY3Rpb24odCxpLG8pe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGkpe3ZhciB1PWk7aT10O3ZhciBhPWU7cmV0dXJuIGZ1bmN0aW9uKG4pe3ZhciB0PXRoaXM7dm9pZCAwPT09biYmKG49dSk7Zm9yKHZhciByPWFyZ3VtZW50cy5sZW5ndGgsZT1BcnJheShyPjE/ci0xOjApLG89MTtvPHI7bysrKWVbby0xXT1hcmd1bWVudHNbb107cmV0dXJuIGEucHJvZHVjZShuLChmdW5jdGlvbihuKXt2YXIgcjtyZXR1cm4ocj1pKS5jYWxsLmFwcGx5KHIsW3Qsbl0uY29uY2F0KGUpKX0pKX19dmFyIGY7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgaSYmbig2KSx2b2lkIDAhPT1vJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBvJiZuKDcpLHIodCkpe3ZhciBjPXcoZSkscz1SKGUsdCx2b2lkIDApLHY9ITA7dHJ5e2Y9aShzKSx2PSExfWZpbmFsbHl7dj9PKGMpOmcoYyl9cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFByb21pc2UmJmYgaW5zdGFuY2VvZiBQcm9taXNlP2YudGhlbigoZnVuY3Rpb24obil7cmV0dXJuIGooYyxvKSxQKG4sYyl9KSwoZnVuY3Rpb24obil7dGhyb3cgTyhjKSxufSkpOihqKGMsbyksUChmLGMpKX1pZighdHx8XCJvYmplY3RcIiE9dHlwZW9mIHQpe2lmKChmPWkodCkpPT09SClyZXR1cm47cmV0dXJuIHZvaWQgMD09PWYmJihmPXQpLGUuRiYmZChmLCEwKSxmfW4oMjEsdCl9LHRoaXMucHJvZHVjZVdpdGhQYXRjaGVzPWZ1bmN0aW9uKG4sdCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbj9mdW5jdGlvbih0KXtmb3IodmFyIHI9YXJndW1lbnRzLmxlbmd0aCxpPUFycmF5KHI+MT9yLTE6MCksbz0xO288cjtvKyspaVtvLTFdPWFyZ3VtZW50c1tvXTtyZXR1cm4gZS5wcm9kdWNlV2l0aFBhdGNoZXModCwoZnVuY3Rpb24odCl7cmV0dXJuIG4uYXBwbHkodm9pZCAwLFt0XS5jb25jYXQoaSkpfSkpfTpbZS5wcm9kdWNlKG4sdCwoZnVuY3Rpb24obix0KXtyPW4saT10fSkpLHIsaV07dmFyIHIsaX0sXCJib29sZWFuXCI9PXR5cGVvZihudWxsPT10P3ZvaWQgMDp0LnVzZVByb3hpZXMpJiZ0aGlzLnNldFVzZVByb3hpZXModC51c2VQcm94aWVzKSxcImJvb2xlYW5cIj09dHlwZW9mKG51bGw9PXQ/dm9pZCAwOnQuYXV0b0ZyZWV6ZSkmJnRoaXMuc2V0QXV0b0ZyZWV6ZSh0LmF1dG9GcmVlemUpfXZhciBpPWUucHJvdG90eXBlO3JldHVybiBpLmNyZWF0ZURyYWZ0PWZ1bmN0aW9uKGUpe3IoZSl8fG4oOCksdChlKSYmKGU9RChlKSk7dmFyIGk9dyh0aGlzKSxvPVIodGhpcyxlLHZvaWQgMCk7cmV0dXJuIG9bUV0uQz0hMCxnKGkpLG99LGkuZmluaXNoRHJhZnQ9ZnVuY3Rpb24odCxyKXt2YXIgZT10JiZ0W1FdO1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJihlJiZlLkN8fG4oOSksZS5JJiZuKDEwKSk7dmFyIGk9ZS5BO3JldHVybiBqKGksciksUCh2b2lkIDAsaSl9LGkuc2V0QXV0b0ZyZWV6ZT1mdW5jdGlvbihuKXt0aGlzLkY9bn0saS5zZXRVc2VQcm94aWVzPWZ1bmN0aW9uKHQpe3QmJiFCJiZuKDIwKSx0aGlzLmc9dH0saS5hcHBseVBhdGNoZXM9ZnVuY3Rpb24obixyKXt2YXIgZTtmb3IoZT1yLmxlbmd0aC0xO2U+PTA7ZS0tKXt2YXIgaT1yW2VdO2lmKDA9PT1pLnBhdGgubGVuZ3RoJiZcInJlcGxhY2VcIj09PWkub3Ape249aS52YWx1ZTticmVha319dmFyIG89YihcIlBhdGNoZXNcIikuJDtyZXR1cm4gdChuKT9vKG4scik6dGhpcy5wcm9kdWNlKG4sKGZ1bmN0aW9uKG4pe3JldHVybiBvKG4sci5zbGljZShlKzEpKX0pKX0sZX0oKSxhbj1uZXcgdW4sZm49YW4ucHJvZHVjZSxjbj1hbi5wcm9kdWNlV2l0aFBhdGNoZXMuYmluZChhbiksc249YW4uc2V0QXV0b0ZyZWV6ZS5iaW5kKGFuKSx2bj1hbi5zZXRVc2VQcm94aWVzLmJpbmQoYW4pLHBuPWFuLmFwcGx5UGF0Y2hlcy5iaW5kKGFuKSxsbj1hbi5jcmVhdGVEcmFmdC5iaW5kKGFuKSxkbj1hbi5maW5pc2hEcmFmdC5iaW5kKGFuKTtleHBvcnQgZGVmYXVsdCBmbjtleHBvcnR7dW4gYXMgSW1tZXIscG4gYXMgYXBwbHlQYXRjaGVzLEsgYXMgY2FzdERyYWZ0LCQgYXMgY2FzdEltbXV0YWJsZSxsbiBhcyBjcmVhdGVEcmFmdCxEIGFzIGN1cnJlbnQsSiBhcyBlbmFibGVBbGxQbHVnaW5zLE4gYXMgZW5hYmxlRVM1LEMgYXMgZW5hYmxlTWFwU2V0LFQgYXMgZW5hYmxlUGF0Y2hlcyxkbiBhcyBmaW5pc2hEcmFmdCxkIGFzIGZyZWV6ZSxMIGFzIGltbWVyYWJsZSx0IGFzIGlzRHJhZnQsciBhcyBpc0RyYWZ0YWJsZSxIIGFzIG5vdGhpbmcsZSBhcyBvcmlnaW5hbCxmbiBhcyBwcm9kdWNlLGNuIGFzIHByb2R1Y2VXaXRoUGF0Y2hlcyxzbiBhcyBzZXRBdXRvRnJlZXplLHZuIGFzIHNldFVzZVByb3hpZXN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1tZXIuZXNtLmpzLm1hcFxuIiwiLyohXG4gKiBpcy1wbGFpbi1vYmplY3QgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzLXBsYWluLW9iamVjdD5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNywgSm9uIFNjaGxpbmtlcnQuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuZnVuY3Rpb24gaXNPYmplY3Qobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cblxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvKSB7XG4gIHZhciBjdG9yLHByb3Q7XG5cbiAgaWYgKGlzT2JqZWN0KG8pID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIGhhcyBtb2RpZmllZCBjb25zdHJ1Y3RvclxuICBjdG9yID0gby5jb25zdHJ1Y3RvcjtcbiAgaWYgKGN0b3IgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG5cbiAgLy8gSWYgaGFzIG1vZGlmaWVkIHByb3RvdHlwZVxuICBwcm90ID0gY3Rvci5wcm90b3R5cGU7XG4gIGlmIChpc09iamVjdChwcm90KSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiBjb25zdHJ1Y3RvciBkb2VzIG5vdCBoYXZlIGFuIE9iamVjdC1zcGVjaWZpYyBtZXRob2RcbiAgaWYgKHByb3QuaGFzT3duUHJvcGVydHkoJ2lzUHJvdG90eXBlT2YnKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBNb3N0IGxpa2VseSBhIHBsYWluIE9iamVjdFxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IHsgaXNQbGFpbk9iamVjdCB9O1xuIiwiaW1wb3J0IHsgaXNQbGFpbk9iamVjdCB9IGZyb20gJ2lzLXBsYWluLW9iamVjdCc7XG5pbXBvcnQgeyBwcm9kdWNlLCBjcmVhdGVEcmFmdCwgZmluaXNoRHJhZnQsIGlzRHJhZnQgfSBmcm9tICdpbW1lcic7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG52YXIgRElSVFlfUEFUSFMgPSBuZXcgV2Vha01hcCgpO1xudmFyIEZMVVNISU5HID0gbmV3IFdlYWtNYXAoKTtcbnZhciBOT1JNQUxJWklORyA9IG5ldyBXZWFrTWFwKCk7XG52YXIgUEFUSF9SRUZTID0gbmV3IFdlYWtNYXAoKTtcbnZhciBQT0lOVF9SRUZTID0gbmV3IFdlYWtNYXAoKTtcbnZhciBSQU5HRV9SRUZTID0gbmV3IFdlYWtNYXAoKTtcblxuZnVuY3Rpb24gb3duS2V5cyQ5KG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSB7IHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsgfSBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQ5KHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMkOShPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzJDkoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG4vKipcclxuICogQ3JlYXRlIGEgbmV3IFNsYXRlIGBFZGl0b3JgIG9iamVjdC5cclxuICovXG5cbnZhciBjcmVhdGVFZGl0b3IgPSAoKSA9PiB7XG4gIHZhciBlZGl0b3IgPSB7XG4gICAgY2hpbGRyZW46IFtdLFxuICAgIG9wZXJhdGlvbnM6IFtdLFxuICAgIHNlbGVjdGlvbjogbnVsbCxcbiAgICBtYXJrczogbnVsbCxcbiAgICBpc0lubGluZTogKCkgPT4gZmFsc2UsXG4gICAgaXNWb2lkOiAoKSA9PiBmYWxzZSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgYXBwbHk6IG9wID0+IHtcbiAgICAgIGZvciAodmFyIHJlZiBvZiBFZGl0b3IucGF0aFJlZnMoZWRpdG9yKSkge1xuICAgICAgICBQYXRoUmVmLnRyYW5zZm9ybShyZWYsIG9wKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgX3JlZiBvZiBFZGl0b3IucG9pbnRSZWZzKGVkaXRvcikpIHtcbiAgICAgICAgUG9pbnRSZWYudHJhbnNmb3JtKF9yZWYsIG9wKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgX3JlZjIgb2YgRWRpdG9yLnJhbmdlUmVmcyhlZGl0b3IpKSB7XG4gICAgICAgIFJhbmdlUmVmLnRyYW5zZm9ybShfcmVmMiwgb3ApO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2V0ID0gbmV3IFNldCgpO1xuICAgICAgdmFyIGRpcnR5UGF0aHMgPSBbXTtcblxuICAgICAgdmFyIGFkZCA9IHBhdGggPT4ge1xuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgIHZhciBrZXkgPSBwYXRoLmpvaW4oJywnKTtcblxuICAgICAgICAgIGlmICghc2V0LmhhcyhrZXkpKSB7XG4gICAgICAgICAgICBzZXQuYWRkKGtleSk7XG4gICAgICAgICAgICBkaXJ0eVBhdGhzLnB1c2gocGF0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB2YXIgb2xkRGlydHlQYXRocyA9IERJUlRZX1BBVEhTLmdldChlZGl0b3IpIHx8IFtdO1xuICAgICAgdmFyIG5ld0RpcnR5UGF0aHMgPSBnZXREaXJ0eVBhdGhzKG9wKTtcblxuICAgICAgZm9yICh2YXIgcGF0aCBvZiBvbGREaXJ0eVBhdGhzKSB7XG4gICAgICAgIHZhciBuZXdQYXRoID0gUGF0aC50cmFuc2Zvcm0ocGF0aCwgb3ApO1xuICAgICAgICBhZGQobmV3UGF0aCk7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIF9wYXRoIG9mIG5ld0RpcnR5UGF0aHMpIHtcbiAgICAgICAgYWRkKF9wYXRoKTtcbiAgICAgIH1cblxuICAgICAgRElSVFlfUEFUSFMuc2V0KGVkaXRvciwgZGlydHlQYXRocyk7XG4gICAgICBUcmFuc2Zvcm1zLnRyYW5zZm9ybShlZGl0b3IsIG9wKTtcbiAgICAgIGVkaXRvci5vcGVyYXRpb25zLnB1c2gob3ApO1xuICAgICAgRWRpdG9yLm5vcm1hbGl6ZShlZGl0b3IpOyAvLyBDbGVhciBhbnkgZm9ybWF0cyBhcHBsaWVkIHRvIHRoZSBjdXJzb3IgaWYgdGhlIHNlbGVjdGlvbiBjaGFuZ2VzLlxuXG4gICAgICBpZiAob3AudHlwZSA9PT0gJ3NldF9zZWxlY3Rpb24nKSB7XG4gICAgICAgIGVkaXRvci5tYXJrcyA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICghRkxVU0hJTkcuZ2V0KGVkaXRvcikpIHtcbiAgICAgICAgRkxVU0hJTkcuc2V0KGVkaXRvciwgdHJ1ZSk7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIEZMVVNISU5HLnNldChlZGl0b3IsIGZhbHNlKTtcbiAgICAgICAgICBlZGl0b3Iub25DaGFuZ2UoKTtcbiAgICAgICAgICBlZGl0b3Iub3BlcmF0aW9ucyA9IFtdO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFkZE1hcms6IChrZXksIHZhbHVlKSA9PiB7XG4gICAgICB2YXIge1xuICAgICAgICBzZWxlY3Rpb25cbiAgICAgIH0gPSBlZGl0b3I7XG5cbiAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgaWYgKFJhbmdlLmlzRXhwYW5kZWQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgIFRyYW5zZm9ybXMuc2V0Tm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgICBba2V5XTogdmFsdWVcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBtYXRjaDogVGV4dC5pc1RleHQsXG4gICAgICAgICAgICBzcGxpdDogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBtYXJrcyA9IF9vYmplY3RTcHJlYWQkOShfb2JqZWN0U3ByZWFkJDkoe30sIEVkaXRvci5tYXJrcyhlZGl0b3IpIHx8IHt9KSwge30sIHtcbiAgICAgICAgICAgIFtrZXldOiB2YWx1ZVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgZWRpdG9yLm1hcmtzID0gbWFya3M7XG5cbiAgICAgICAgICBpZiAoIUZMVVNISU5HLmdldChlZGl0b3IpKSB7XG4gICAgICAgICAgICBlZGl0b3Iub25DaGFuZ2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGRlbGV0ZUJhY2t3YXJkOiB1bml0ID0+IHtcbiAgICAgIHZhciB7XG4gICAgICAgIHNlbGVjdGlvblxuICAgICAgfSA9IGVkaXRvcjtcblxuICAgICAgaWYgKHNlbGVjdGlvbiAmJiBSYW5nZS5pc0NvbGxhcHNlZChzZWxlY3Rpb24pKSB7XG4gICAgICAgIFRyYW5zZm9ybXMuZGVsZXRlKGVkaXRvciwge1xuICAgICAgICAgIHVuaXQsXG4gICAgICAgICAgcmV2ZXJzZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlbGV0ZUZvcndhcmQ6IHVuaXQgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgc2VsZWN0aW9uXG4gICAgICB9ID0gZWRpdG9yO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uICYmIFJhbmdlLmlzQ29sbGFwc2VkKHNlbGVjdGlvbikpIHtcbiAgICAgICAgVHJhbnNmb3Jtcy5kZWxldGUoZWRpdG9yLCB7XG4gICAgICAgICAgdW5pdFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlbGV0ZUZyYWdtZW50OiBkaXJlY3Rpb24gPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgc2VsZWN0aW9uXG4gICAgICB9ID0gZWRpdG9yO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uICYmIFJhbmdlLmlzRXhwYW5kZWQoc2VsZWN0aW9uKSkge1xuICAgICAgICBUcmFuc2Zvcm1zLmRlbGV0ZShlZGl0b3IsIHtcbiAgICAgICAgICByZXZlcnNlOiBkaXJlY3Rpb24gPT09ICdiYWNrd2FyZCdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXRGcmFnbWVudDogKCkgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgc2VsZWN0aW9uXG4gICAgICB9ID0gZWRpdG9yO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBOb2RlLmZyYWdtZW50KGVkaXRvciwgc2VsZWN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFtdO1xuICAgIH0sXG4gICAgaW5zZXJ0QnJlYWs6ICgpID0+IHtcbiAgICAgIFRyYW5zZm9ybXMuc3BsaXROb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgYWx3YXlzOiB0cnVlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGluc2VydEZyYWdtZW50OiBmcmFnbWVudCA9PiB7XG4gICAgICBUcmFuc2Zvcm1zLmluc2VydEZyYWdtZW50KGVkaXRvciwgZnJhZ21lbnQpO1xuICAgIH0sXG4gICAgaW5zZXJ0Tm9kZTogbm9kZSA9PiB7XG4gICAgICBUcmFuc2Zvcm1zLmluc2VydE5vZGVzKGVkaXRvciwgbm9kZSk7XG4gICAgfSxcbiAgICBpbnNlcnRUZXh0OiB0ZXh0ID0+IHtcbiAgICAgIHZhciB7XG4gICAgICAgIHNlbGVjdGlvbixcbiAgICAgICAgbWFya3NcbiAgICAgIH0gPSBlZGl0b3I7XG5cbiAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgLy8gSWYgdGhlIGN1cnNvciBpcyBhdCB0aGUgZW5kIG9mIGFuIGlubGluZSwgbW92ZSBpdCBvdXRzaWRlIG9mXG4gICAgICAgIC8vIHRoZSBpbmxpbmUgYmVmb3JlIGluc2VydGluZ1xuICAgICAgICBpZiAoUmFuZ2UuaXNDb2xsYXBzZWQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgIHZhciBpbmxpbmUgPSBFZGl0b3IuYWJvdmUoZWRpdG9yLCB7XG4gICAgICAgICAgICBtYXRjaDogbiA9PiBFZGl0b3IuaXNJbmxpbmUoZWRpdG9yLCBuKSxcbiAgICAgICAgICAgIG1vZGU6ICdoaWdoZXN0J1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKGlubGluZSkge1xuICAgICAgICAgICAgdmFyIFssIGlubGluZVBhdGhdID0gaW5saW5lO1xuXG4gICAgICAgICAgICBpZiAoRWRpdG9yLmlzRW5kKGVkaXRvciwgc2VsZWN0aW9uLmFuY2hvciwgaW5saW5lUGF0aCkpIHtcbiAgICAgICAgICAgICAgdmFyIHBvaW50ID0gRWRpdG9yLmFmdGVyKGVkaXRvciwgaW5saW5lUGF0aCk7XG4gICAgICAgICAgICAgIFRyYW5zZm9ybXMuc2V0U2VsZWN0aW9uKGVkaXRvciwge1xuICAgICAgICAgICAgICAgIGFuY2hvcjogcG9pbnQsXG4gICAgICAgICAgICAgICAgZm9jdXM6IHBvaW50XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXJrcykge1xuICAgICAgICAgIHZhciBub2RlID0gX29iamVjdFNwcmVhZCQ5KHtcbiAgICAgICAgICAgIHRleHRcbiAgICAgICAgICB9LCBtYXJrcyk7XG5cbiAgICAgICAgICBUcmFuc2Zvcm1zLmluc2VydE5vZGVzKGVkaXRvciwgbm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5pbnNlcnRUZXh0KGVkaXRvciwgdGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBlZGl0b3IubWFya3MgPSBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgbm9ybWFsaXplTm9kZTogZW50cnkgPT4ge1xuICAgICAgdmFyIFtub2RlLCBwYXRoXSA9IGVudHJ5OyAvLyBUaGVyZSBhcmUgbm8gY29yZSBub3JtYWxpemF0aW9ucyBmb3IgdGV4dCBub2Rlcy5cblxuICAgICAgaWYgKFRleHQuaXNUZXh0KG5vZGUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gRW5zdXJlIHRoYXQgYmxvY2sgYW5kIGlubGluZSBub2RlcyBoYXZlIGF0IGxlYXN0IG9uZSB0ZXh0IGNoaWxkLlxuXG5cbiAgICAgIGlmIChFbGVtZW50LmlzRWxlbWVudChub2RlKSAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIgY2hpbGQgPSB7XG4gICAgICAgICAgdGV4dDogJydcbiAgICAgICAgfTtcbiAgICAgICAgVHJhbnNmb3Jtcy5pbnNlcnROb2RlcyhlZGl0b3IsIGNoaWxkLCB7XG4gICAgICAgICAgYXQ6IHBhdGguY29uY2F0KDApLFxuICAgICAgICAgIHZvaWRzOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIERldGVybWluZSB3aGV0aGVyIHRoZSBub2RlIHNob3VsZCBoYXZlIGJsb2NrIG9yIGlubGluZSBjaGlsZHJlbi5cblxuXG4gICAgICB2YXIgc2hvdWxkSGF2ZUlubGluZXMgPSBFZGl0b3IuaXNFZGl0b3Iobm9kZSkgPyBmYWxzZSA6IEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpICYmIChlZGl0b3IuaXNJbmxpbmUobm9kZSkgfHwgbm9kZS5jaGlsZHJlbi5sZW5ndGggPT09IDAgfHwgVGV4dC5pc1RleHQobm9kZS5jaGlsZHJlblswXSkgfHwgZWRpdG9yLmlzSW5saW5lKG5vZGUuY2hpbGRyZW5bMF0pKTsgLy8gU2luY2Ugd2UnbGwgYmUgYXBwbHlpbmcgb3BlcmF0aW9ucyB3aGlsZSBpdGVyYXRpbmcsIGtlZXAgdHJhY2sgb2YgYW5cbiAgICAgIC8vIGluZGV4IHRoYXQgYWNjb3VudHMgZm9yIGFueSBhZGRlZC9yZW1vdmVkIG5vZGVzLlxuXG4gICAgICB2YXIgbiA9IDA7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKywgbisrKSB7XG4gICAgICAgIHZhciBjdXJyZW50Tm9kZSA9IE5vZGUuZ2V0KGVkaXRvciwgcGF0aCk7XG4gICAgICAgIGlmIChUZXh0LmlzVGV4dChjdXJyZW50Tm9kZSkpIGNvbnRpbnVlO1xuICAgICAgICB2YXIgX2NoaWxkID0gbm9kZS5jaGlsZHJlbltpXTtcbiAgICAgICAgdmFyIHByZXYgPSBjdXJyZW50Tm9kZS5jaGlsZHJlbltuIC0gMV07XG4gICAgICAgIHZhciBpc0xhc3QgPSBpID09PSBub2RlLmNoaWxkcmVuLmxlbmd0aCAtIDE7XG4gICAgICAgIHZhciBpc0lubGluZU9yVGV4dCA9IFRleHQuaXNUZXh0KF9jaGlsZCkgfHwgRWxlbWVudC5pc0VsZW1lbnQoX2NoaWxkKSAmJiBlZGl0b3IuaXNJbmxpbmUoX2NoaWxkKTsgLy8gT25seSBhbGxvdyBibG9jayBub2RlcyBpbiB0aGUgdG9wLWxldmVsIGNoaWxkcmVuIGFuZCBwYXJlbnQgYmxvY2tzXG4gICAgICAgIC8vIHRoYXQgb25seSBjb250YWluIGJsb2NrIG5vZGVzLiBTaW1pbGFybHksIG9ubHkgYWxsb3cgaW5saW5lIG5vZGVzIGluXG4gICAgICAgIC8vIG90aGVyIGlubGluZSBub2Rlcywgb3IgcGFyZW50IGJsb2NrcyB0aGF0IG9ubHkgY29udGFpbiBpbmxpbmVzIGFuZFxuICAgICAgICAvLyB0ZXh0LlxuXG4gICAgICAgIGlmIChpc0lubGluZU9yVGV4dCAhPT0gc2hvdWxkSGF2ZUlubGluZXMpIHtcbiAgICAgICAgICBUcmFuc2Zvcm1zLnJlbW92ZU5vZGVzKGVkaXRvciwge1xuICAgICAgICAgICAgYXQ6IHBhdGguY29uY2F0KG4pLFxuICAgICAgICAgICAgdm9pZHM6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBuLS07XG4gICAgICAgIH0gZWxzZSBpZiAoRWxlbWVudC5pc0VsZW1lbnQoX2NoaWxkKSkge1xuICAgICAgICAgIC8vIEVuc3VyZSB0aGF0IGlubGluZSBub2RlcyBhcmUgc3Vycm91bmRlZCBieSB0ZXh0IG5vZGVzLlxuICAgICAgICAgIGlmIChlZGl0b3IuaXNJbmxpbmUoX2NoaWxkKSkge1xuICAgICAgICAgICAgaWYgKHByZXYgPT0gbnVsbCB8fCAhVGV4dC5pc1RleHQocHJldikpIHtcbiAgICAgICAgICAgICAgdmFyIG5ld0NoaWxkID0ge1xuICAgICAgICAgICAgICAgIHRleHQ6ICcnXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIFRyYW5zZm9ybXMuaW5zZXJ0Tm9kZXMoZWRpdG9yLCBuZXdDaGlsZCwge1xuICAgICAgICAgICAgICAgIGF0OiBwYXRoLmNvbmNhdChuKSxcbiAgICAgICAgICAgICAgICB2b2lkczogdHJ1ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgbisrO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0xhc3QpIHtcbiAgICAgICAgICAgICAgdmFyIF9uZXdDaGlsZCA9IHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAnJ1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBUcmFuc2Zvcm1zLmluc2VydE5vZGVzKGVkaXRvciwgX25ld0NoaWxkLCB7XG4gICAgICAgICAgICAgICAgYXQ6IHBhdGguY29uY2F0KG4gKyAxKSxcbiAgICAgICAgICAgICAgICB2b2lkczogdHJ1ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgbisrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBNZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzIHRoYXQgYXJlIGVtcHR5IG9yIG1hdGNoLlxuICAgICAgICAgIGlmIChwcmV2ICE9IG51bGwgJiYgVGV4dC5pc1RleHQocHJldikpIHtcbiAgICAgICAgICAgIGlmIChUZXh0LmVxdWFscyhfY2hpbGQsIHByZXYsIHtcbiAgICAgICAgICAgICAgbG9vc2U6IHRydWVcbiAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAgIFRyYW5zZm9ybXMubWVyZ2VOb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICAgICAgICBhdDogcGF0aC5jb25jYXQobiksXG4gICAgICAgICAgICAgICAgdm9pZHM6IHRydWVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIG4tLTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJldi50ZXh0ID09PSAnJykge1xuICAgICAgICAgICAgICBUcmFuc2Zvcm1zLnJlbW92ZU5vZGVzKGVkaXRvciwge1xuICAgICAgICAgICAgICAgIGF0OiBwYXRoLmNvbmNhdChuIC0gMSksXG4gICAgICAgICAgICAgICAgdm9pZHM6IHRydWVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIG4tLTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoX2NoaWxkLnRleHQgPT09ICcnKSB7XG4gICAgICAgICAgICAgIFRyYW5zZm9ybXMucmVtb3ZlTm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgICAgICAgYXQ6IHBhdGguY29uY2F0KG4pLFxuICAgICAgICAgICAgICAgIHZvaWRzOiB0cnVlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBuLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICByZW1vdmVNYXJrOiBrZXkgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgc2VsZWN0aW9uXG4gICAgICB9ID0gZWRpdG9yO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgIGlmIChSYW5nZS5pc0V4cGFuZGVkKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICBUcmFuc2Zvcm1zLnVuc2V0Tm9kZXMoZWRpdG9yLCBrZXksIHtcbiAgICAgICAgICAgIG1hdGNoOiBUZXh0LmlzVGV4dCxcbiAgICAgICAgICAgIHNwbGl0OiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG1hcmtzID0gX29iamVjdFNwcmVhZCQ5KHt9LCBFZGl0b3IubWFya3MoZWRpdG9yKSB8fCB7fSk7XG5cbiAgICAgICAgICBkZWxldGUgbWFya3Nba2V5XTtcbiAgICAgICAgICBlZGl0b3IubWFya3MgPSBtYXJrcztcblxuICAgICAgICAgIGlmICghRkxVU0hJTkcuZ2V0KGVkaXRvcikpIHtcbiAgICAgICAgICAgIGVkaXRvci5vbkNoYW5nZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGVkaXRvcjtcbn07XG4vKipcclxuICogR2V0IHRoZSBcImRpcnR5XCIgcGF0aHMgZ2VuZXJhdGVkIGZyb20gYW4gb3BlcmF0aW9uLlxyXG4gKi9cblxudmFyIGdldERpcnR5UGF0aHMgPSBvcCA9PiB7XG4gIHN3aXRjaCAob3AudHlwZSkge1xuICAgIGNhc2UgJ2luc2VydF90ZXh0JzpcbiAgICBjYXNlICdyZW1vdmVfdGV4dCc6XG4gICAgY2FzZSAnc2V0X25vZGUnOlxuICAgICAge1xuICAgICAgICB2YXIge1xuICAgICAgICAgIHBhdGhcbiAgICAgICAgfSA9IG9wO1xuICAgICAgICByZXR1cm4gUGF0aC5sZXZlbHMocGF0aCk7XG4gICAgICB9XG5cbiAgICBjYXNlICdpbnNlcnRfbm9kZSc6XG4gICAgICB7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgbm9kZSxcbiAgICAgICAgICBwYXRoOiBfcGF0aDJcbiAgICAgICAgfSA9IG9wO1xuICAgICAgICB2YXIgbGV2ZWxzID0gUGF0aC5sZXZlbHMoX3BhdGgyKTtcbiAgICAgICAgdmFyIGRlc2NlbmRhbnRzID0gVGV4dC5pc1RleHQobm9kZSkgPyBbXSA6IEFycmF5LmZyb20oTm9kZS5ub2Rlcyhub2RlKSwgX3JlZjMgPT4ge1xuICAgICAgICAgIHZhciBbLCBwXSA9IF9yZWYzO1xuICAgICAgICAgIHJldHVybiBfcGF0aDIuY29uY2F0KHApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFsuLi5sZXZlbHMsIC4uLmRlc2NlbmRhbnRzXTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ21lcmdlX25vZGUnOlxuICAgICAge1xuICAgICAgICB2YXIge1xuICAgICAgICAgIHBhdGg6IF9wYXRoM1xuICAgICAgICB9ID0gb3A7XG4gICAgICAgIHZhciBhbmNlc3RvcnMgPSBQYXRoLmFuY2VzdG9ycyhfcGF0aDMpO1xuICAgICAgICB2YXIgcHJldmlvdXNQYXRoID0gUGF0aC5wcmV2aW91cyhfcGF0aDMpO1xuICAgICAgICByZXR1cm4gWy4uLmFuY2VzdG9ycywgcHJldmlvdXNQYXRoXTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ21vdmVfbm9kZSc6XG4gICAgICB7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgcGF0aDogX3BhdGg0LFxuICAgICAgICAgIG5ld1BhdGhcbiAgICAgICAgfSA9IG9wO1xuXG4gICAgICAgIGlmIChQYXRoLmVxdWFscyhfcGF0aDQsIG5ld1BhdGgpKSB7XG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9sZEFuY2VzdG9ycyA9IFtdO1xuICAgICAgICB2YXIgbmV3QW5jZXN0b3JzID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgYW5jZXN0b3Igb2YgUGF0aC5hbmNlc3RvcnMoX3BhdGg0KSkge1xuICAgICAgICAgIHZhciBwID0gUGF0aC50cmFuc2Zvcm0oYW5jZXN0b3IsIG9wKTtcbiAgICAgICAgICBvbGRBbmNlc3RvcnMucHVzaChwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIF9hbmNlc3RvciBvZiBQYXRoLmFuY2VzdG9ycyhuZXdQYXRoKSkge1xuICAgICAgICAgIHZhciBfcCA9IFBhdGgudHJhbnNmb3JtKF9hbmNlc3Rvciwgb3ApO1xuXG4gICAgICAgICAgbmV3QW5jZXN0b3JzLnB1c2goX3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5ld1BhcmVudCA9IG5ld0FuY2VzdG9yc1tuZXdBbmNlc3RvcnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBuZXdJbmRleCA9IG5ld1BhdGhbbmV3UGF0aC5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIHJlc3VsdFBhdGggPSBuZXdQYXJlbnQuY29uY2F0KG5ld0luZGV4KTtcbiAgICAgICAgcmV0dXJuIFsuLi5vbGRBbmNlc3RvcnMsIC4uLm5ld0FuY2VzdG9ycywgcmVzdWx0UGF0aF07XG4gICAgICB9XG5cbiAgICBjYXNlICdyZW1vdmVfbm9kZSc6XG4gICAgICB7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgcGF0aDogX3BhdGg1XG4gICAgICAgIH0gPSBvcDtcblxuICAgICAgICB2YXIgX2FuY2VzdG9ycyA9IFBhdGguYW5jZXN0b3JzKF9wYXRoNSk7XG5cbiAgICAgICAgcmV0dXJuIFsuLi5fYW5jZXN0b3JzXTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ3NwbGl0X25vZGUnOlxuICAgICAge1xuICAgICAgICB2YXIge1xuICAgICAgICAgIHBhdGg6IF9wYXRoNlxuICAgICAgICB9ID0gb3A7XG5cbiAgICAgICAgdmFyIF9sZXZlbHMgPSBQYXRoLmxldmVscyhfcGF0aDYpO1xuXG4gICAgICAgIHZhciBuZXh0UGF0aCA9IFBhdGgubmV4dChfcGF0aDYpO1xuICAgICAgICByZXR1cm4gWy4uLl9sZXZlbHMsIG5leHRQYXRoXTtcbiAgICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbi8qKlxyXG4gKiBDb25zdGFudHMgZm9yIHN0cmluZyBkaXN0YW5jZSBjaGVja2luZy5cclxuICovXG52YXIgU1BBQ0UgPSAvXFxzLztcbnZhciBQVU5DVFVBVElPTiA9IC9bXFx1MDAyMS1cXHUwMDIzXFx1MDAyNS1cXHUwMDJBXFx1MDAyQy1cXHUwMDJGXFx1MDAzQVxcdTAwM0JcXHUwMDNGXFx1MDA0MFxcdTAwNUItXFx1MDA1RFxcdTAwNUZcXHUwMDdCXFx1MDA3RFxcdTAwQTFcXHUwMEE3XFx1MDBBQlxcdTAwQjZcXHUwMEI3XFx1MDBCQlxcdTAwQkZcXHUwMzdFXFx1MDM4N1xcdTA1NUEtXFx1MDU1RlxcdTA1ODlcXHUwNThBXFx1MDVCRVxcdTA1QzBcXHUwNUMzXFx1MDVDNlxcdTA1RjNcXHUwNUY0XFx1MDYwOVxcdTA2MEFcXHUwNjBDXFx1MDYwRFxcdTA2MUJcXHUwNjFFXFx1MDYxRlxcdTA2NkEtXFx1MDY2RFxcdTA2RDRcXHUwNzAwLVxcdTA3MERcXHUwN0Y3LVxcdTA3RjlcXHUwODMwLVxcdTA4M0VcXHUwODVFXFx1MDk2NFxcdTA5NjVcXHUwOTcwXFx1MEFGMFxcdTBERjRcXHUwRTRGXFx1MEU1QVxcdTBFNUJcXHUwRjA0LVxcdTBGMTJcXHUwRjE0XFx1MEYzQS1cXHUwRjNEXFx1MEY4NVxcdTBGRDAtXFx1MEZENFxcdTBGRDlcXHUwRkRBXFx1MTA0QS1cXHUxMDRGXFx1MTBGQlxcdTEzNjAtXFx1MTM2OFxcdTE0MDBcXHUxNjZEXFx1MTY2RVxcdTE2OUJcXHUxNjlDXFx1MTZFQi1cXHUxNkVEXFx1MTczNVxcdTE3MzZcXHUxN0Q0LVxcdTE3RDZcXHUxN0Q4LVxcdTE3REFcXHUxODAwLVxcdTE4MEFcXHUxOTQ0XFx1MTk0NVxcdTFBMUVcXHUxQTFGXFx1MUFBMC1cXHUxQUE2XFx1MUFBOC1cXHUxQUFEXFx1MUI1QS1cXHUxQjYwXFx1MUJGQy1cXHUxQkZGXFx1MUMzQi1cXHUxQzNGXFx1MUM3RVxcdTFDN0ZcXHUxQ0MwLVxcdTFDQzdcXHUxQ0QzXFx1MjAxMC1cXHUyMDI3XFx1MjAzMC1cXHUyMDQzXFx1MjA0NS1cXHUyMDUxXFx1MjA1My1cXHUyMDVFXFx1MjA3RFxcdTIwN0VcXHUyMDhEXFx1MjA4RVxcdTIzMjlcXHUyMzJBXFx1Mjc2OC1cXHUyNzc1XFx1MjdDNVxcdTI3QzZcXHUyN0U2LVxcdTI3RUZcXHUyOTgzLVxcdTI5OThcXHUyOUQ4LVxcdTI5REJcXHUyOUZDXFx1MjlGRFxcdTJDRjktXFx1MkNGQ1xcdTJDRkVcXHUyQ0ZGXFx1MkQ3MFxcdTJFMDAtXFx1MkUyRVxcdTJFMzAtXFx1MkUzQlxcdTMwMDEtXFx1MzAwM1xcdTMwMDgtXFx1MzAxMVxcdTMwMTQtXFx1MzAxRlxcdTMwMzBcXHUzMDNEXFx1MzBBMFxcdTMwRkJcXHVBNEZFXFx1QTRGRlxcdUE2MEQtXFx1QTYwRlxcdUE2NzNcXHVBNjdFXFx1QTZGMi1cXHVBNkY3XFx1QTg3NC1cXHVBODc3XFx1QThDRVxcdUE4Q0ZcXHVBOEY4LVxcdUE4RkFcXHVBOTJFXFx1QTkyRlxcdUE5NUZcXHVBOUMxLVxcdUE5Q0RcXHVBOURFXFx1QTlERlxcdUFBNUMtXFx1QUE1RlxcdUFBREVcXHVBQURGXFx1QUFGMFxcdUFBRjFcXHVBQkVCXFx1RkQzRVxcdUZEM0ZcXHVGRTEwLVxcdUZFMTlcXHVGRTMwLVxcdUZFNTJcXHVGRTU0LVxcdUZFNjFcXHVGRTYzXFx1RkU2OFxcdUZFNkFcXHVGRTZCXFx1RkYwMS1cXHVGRjAzXFx1RkYwNS1cXHVGRjBBXFx1RkYwQy1cXHVGRjBGXFx1RkYxQVxcdUZGMUJcXHVGRjFGXFx1RkYyMFxcdUZGM0ItXFx1RkYzRFxcdUZGM0ZcXHVGRjVCXFx1RkY1RFxcdUZGNUYtXFx1RkY2NV0vO1xudmFyIENIQU1FTEVPTiA9IC9bJ1xcdTIwMThcXHUyMDE5XS87XG4vKipcclxuICogR2V0IHRoZSBkaXN0YW5jZSB0byB0aGUgZW5kIG9mIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaW4gYSBzdHJpbmcgb2YgdGV4dC5cclxuICovXG5cbnZhciBnZXRDaGFyYWN0ZXJEaXN0YW5jZSA9IGZ1bmN0aW9uIGdldENoYXJhY3RlckRpc3RhbmNlKHN0cikge1xuICB2YXIgaXNSVEwgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICB2YXIgaXNMVFIgPSAhaXNSVEw7XG4gIHZhciBkaXN0ID0gMDsgLy8gcHJldiB0eXBlczpcbiAgLy8gTlNFUTogbm9uIHNlcXVlbmNlYWJsZSBjb2RlcG9pbnQuXG4gIC8vIE1PRDogbW9kaWZpZXJcbiAgLy8gWldKOiB6ZXJvIHdpZHRoIGpvaW5lclxuICAvLyBWQVI6IHZhcmlhdGlvbiBzZWxlY3RvclxuICAvLyBCTVA6IHNlcXVlbmNlYWJsZSBjb2RlcG9pbnQgZnJvbSBiYXNpYyBtdWx0aWxpbmd1YWwgcGxhbmVcbiAgLy8gUkk6IHJlZ2lvbmFsIGluZGljYXRvclxuICAvLyBLQzoga2V5Y2FwXG4gIC8vIFRBRzogdGFnXG5cbiAgdmFyIHByZXYgPSBudWxsO1xuICB2YXIgY29kZXBvaW50cyA9IGlzTFRSID8gc3RyIDogY29kZXBvaW50c0l0ZXJhdG9yUlRMKHN0cik7XG5cbiAgZm9yICh2YXIgY29kZXBvaW50IG9mIGNvZGVwb2ludHMpIHtcbiAgICB2YXIgY29kZSA9IGNvZGVwb2ludC5jb2RlUG9pbnRBdCgwKTtcbiAgICBpZiAoIWNvZGUpIGJyZWFrOyAvLyBDaGVjayBpZiBjb2RlcG9pbnQgaXMgcGFydCBvZiBhIHNlcXVlbmNlLlxuXG4gICAgaWYgKGlzWldKKGNvZGUpKSB7XG4gICAgICBkaXN0ICs9IGNvZGVwb2ludC5sZW5ndGg7XG4gICAgICBwcmV2ID0gJ1pXSic7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgW2lzS2V5Y2FwU3RhcnQsIGlzS2V5Y2FwRW5kXSA9IGlzTFRSID8gW2lzS2V5Y2FwLCBpc0NvbWJpbmluZ0VuY2xvc2luZ0tleWNhcF0gOiBbaXNDb21iaW5pbmdFbmNsb3NpbmdLZXljYXAsIGlzS2V5Y2FwXTtcblxuICAgIGlmIChpc0tleWNhcFN0YXJ0KGNvZGUpKSB7XG4gICAgICBpZiAocHJldiA9PT0gJ0tDJykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZGlzdCArPSBjb2RlcG9pbnQubGVuZ3RoO1xuICAgICAgcHJldiA9ICdLQyc7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNLZXljYXBFbmQoY29kZSkpIHtcbiAgICAgIGRpc3QgKz0gY29kZXBvaW50Lmxlbmd0aDtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChpc1ZhcmlhdGlvblNlbGVjdG9yKGNvZGUpKSB7XG4gICAgICBkaXN0ICs9IGNvZGVwb2ludC5sZW5ndGg7XG5cbiAgICAgIGlmIChpc0xUUiAmJiBwcmV2ID09PSAnQk1QJykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcHJldiA9ICdWQVInO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGlzQk1QRW1vamkoY29kZSkpIHtcbiAgICAgIGlmIChpc0xUUiAmJiBwcmV2ICYmIHByZXYgIT09ICdaV0onICYmIHByZXYgIT09ICdWQVInKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBkaXN0ICs9IGNvZGVwb2ludC5sZW5ndGg7XG5cbiAgICAgIGlmIChpc1JUTCAmJiBwcmV2ID09PSAnVkFSJykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcHJldiA9ICdCTVAnO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGlzTW9kaWZpZXIoY29kZSkpIHtcbiAgICAgIGRpc3QgKz0gY29kZXBvaW50Lmxlbmd0aDtcbiAgICAgIHByZXYgPSAnTU9EJztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBbaXNUYWdTdGFydCwgaXNUYWdFbmRdID0gaXNMVFIgPyBbaXNCbGFja0ZsYWcsIGlzQ2FuY2VsVGFnXSA6IFtpc0NhbmNlbFRhZywgaXNCbGFja0ZsYWddO1xuXG4gICAgaWYgKGlzVGFnU3RhcnQoY29kZSkpIHtcbiAgICAgIGlmIChwcmV2ID09PSAnVEFHJykgYnJlYWs7XG4gICAgICBkaXN0ICs9IGNvZGVwb2ludC5sZW5ndGg7XG4gICAgICBwcmV2ID0gJ1RBRyc7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNUYWdFbmQoY29kZSkpIHtcbiAgICAgIGRpc3QgKz0gY29kZXBvaW50Lmxlbmd0aDtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChwcmV2ID09PSAnVEFHJyAmJiBpc1RhZyhjb2RlKSkge1xuICAgICAgZGlzdCArPSBjb2RlcG9pbnQubGVuZ3RoO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGlzUmVnaW9uYWxJbmRpY2F0b3IoY29kZSkpIHtcbiAgICAgIGRpc3QgKz0gY29kZXBvaW50Lmxlbmd0aDtcblxuICAgICAgaWYgKHByZXYgPT09ICdSSScpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHByZXYgPSAnUkknO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFpc0JNUChjb2RlKSkge1xuICAgICAgLy8gSWYgcHJldmlvdXMgY29kZSBwb2ludCBpcyBub3Qgc2VxdWVuY2VhYmxlLCBpdCBtZWFucyB3ZSBhcmUgbm90IGluIGFcbiAgICAgIC8vIHNlcXVlbmNlLlxuICAgICAgaWYgKHByZXYgPT09ICdOU0VRJykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZGlzdCArPSBjb2RlcG9pbnQubGVuZ3RoO1xuICAgICAgcHJldiA9ICdOU0VRJztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH0gLy8gTW9kaWZpZXIgJ2dyb3VwcyB1cCcgd2l0aCB3aGF0IGV2ZXIgY2hhcmFjdGVyIGlzIGJlZm9yZSB0aGF0IChldmVuIHdoaXRlc3BhY2UpLCBuZWVkIHRvXG4gICAgLy8gbG9vayBhaGVhZC5cblxuXG4gICAgaWYgKGlzTFRSICYmIHByZXYgPT09ICdNT0QnKSB7XG4gICAgICBkaXN0ICs9IGNvZGVwb2ludC5sZW5ndGg7XG4gICAgICBicmVhaztcbiAgICB9IC8vIElmIHdoaWxlIGxvb3AgZXZlciBnZXRzIGhlcmUsIHdlJ3JlIGRvbmUgKGUuZyBsYXRpbiBjaGFycykuXG5cblxuICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRpc3QgfHwgMTtcbn07XG4vKipcclxuICogR2V0IHRoZSBkaXN0YW5jZSB0byB0aGUgZW5kIG9mIHRoZSBmaXJzdCB3b3JkIGluIGEgc3RyaW5nIG9mIHRleHQuXHJcbiAqL1xuXG52YXIgZ2V0V29yZERpc3RhbmNlID0gZnVuY3Rpb24gZ2V0V29yZERpc3RhbmNlKHRleHQpIHtcbiAgdmFyIGlzUlRMID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgdmFyIGRpc3QgPSAwO1xuICB2YXIgc3RhcnRlZCA9IGZhbHNlO1xuXG4gIHdoaWxlICh0ZXh0Lmxlbmd0aCA+IDApIHtcbiAgICB2YXIgY2hhckRpc3QgPSBnZXRDaGFyYWN0ZXJEaXN0YW5jZSh0ZXh0LCBpc1JUTCk7XG4gICAgdmFyIFtjaGFyLCByZW1haW5pbmddID0gc3BsaXRCeUNoYXJhY3RlckRpc3RhbmNlKHRleHQsIGNoYXJEaXN0LCBpc1JUTCk7XG5cbiAgICBpZiAoaXNXb3JkQ2hhcmFjdGVyKGNoYXIsIHJlbWFpbmluZywgaXNSVEwpKSB7XG4gICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgIGRpc3QgKz0gY2hhckRpc3Q7XG4gICAgfSBlbHNlIGlmICghc3RhcnRlZCkge1xuICAgICAgZGlzdCArPSBjaGFyRGlzdDtcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGV4dCA9IHJlbWFpbmluZztcbiAgfVxuXG4gIHJldHVybiBkaXN0O1xufTtcbi8qKlxyXG4gKiBTcGxpdCBhIHN0cmluZyBpbiB0d28gcGFydHMgYXQgYSBnaXZlbiBkaXN0YW5jZSBzdGFydGluZyBmcm9tIHRoZSBlbmQgd2hlblxyXG4gKiBgaXNSVExgIGlzIHNldCB0byBgdHJ1ZWAuXHJcbiAqL1xuXG52YXIgc3BsaXRCeUNoYXJhY3RlckRpc3RhbmNlID0gKHN0ciwgZGlzdCwgaXNSVEwpID0+IHtcbiAgaWYgKGlzUlRMKSB7XG4gICAgdmFyIGF0ID0gc3RyLmxlbmd0aCAtIGRpc3Q7XG4gICAgcmV0dXJuIFtzdHIuc2xpY2UoYXQsIHN0ci5sZW5ndGgpLCBzdHIuc2xpY2UoMCwgYXQpXTtcbiAgfVxuXG4gIHJldHVybiBbc3RyLnNsaWNlKDAsIGRpc3QpLCBzdHIuc2xpY2UoZGlzdCldO1xufTtcbi8qKlxyXG4gKiBDaGVjayBpZiBhIGNoYXJhY3RlciBpcyBhIHdvcmQgY2hhcmFjdGVyLiBUaGUgYHJlbWFpbmluZ2AgYXJndW1lbnQgaXMgdXNlZFxyXG4gKiBiZWNhdXNlIHNvbWV0aW1lcyB5b3UgbXVzdCByZWFkIHN1YnNlcXVlbnQgY2hhcmFjdGVycyB0byB0cnVseSBkZXRlcm1pbmUgaXQuXHJcbiAqL1xuXG52YXIgaXNXb3JkQ2hhcmFjdGVyID0gZnVuY3Rpb24gaXNXb3JkQ2hhcmFjdGVyKGNoYXIsIHJlbWFpbmluZykge1xuICB2YXIgaXNSVEwgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuXG4gIGlmIChTUEFDRS50ZXN0KGNoYXIpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIENoYW1lbGVvbnMgY291bnQgYXMgd29yZCBjaGFyYWN0ZXJzIGFzIGxvbmcgYXMgdGhleSdyZSBpbiBhIHdvcmQsIHNvXG4gIC8vIHJlY3Vyc2UgdG8gc2VlIGlmIHRoZSBuZXh0IG9uZSBpcyBhIHdvcmQgY2hhcmFjdGVyIG9yIG5vdC5cblxuXG4gIGlmIChDSEFNRUxFT04udGVzdChjaGFyKSkge1xuICAgIHZhciBjaGFyRGlzdCA9IGdldENoYXJhY3RlckRpc3RhbmNlKHJlbWFpbmluZywgaXNSVEwpO1xuICAgIHZhciBbbmV4dENoYXIsIG5leHRSZW1haW5pbmddID0gc3BsaXRCeUNoYXJhY3RlckRpc3RhbmNlKHJlbWFpbmluZywgY2hhckRpc3QsIGlzUlRMKTtcblxuICAgIGlmIChpc1dvcmRDaGFyYWN0ZXIobmV4dENoYXIsIG5leHRSZW1haW5pbmcsIGlzUlRMKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKFBVTkNUVUFUSU9OLnRlc3QoY2hhcikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4vKipcclxuICogRG9lcyBgY29kZWAgZm9ybSBNb2RpZmllciB3aXRoIG5leHQgb25lLlxyXG4gKlxyXG4gKiBodHRwczovL2Vtb2ppcGVkaWEub3JnL21vZGlmaWVycy9cclxuICovXG5cblxudmFyIGlzTW9kaWZpZXIgPSBjb2RlID0+IHtcbiAgcmV0dXJuIGNvZGUgPj0gMHgxZjNmYiAmJiBjb2RlIDw9IDB4MWYzZmY7XG59O1xuLyoqXHJcbiAqIElzIGBjb2RlYCBhIFZhcmlhdGlvbiBTZWxlY3Rvci5cclxuICpcclxuICogaHR0cHM6Ly9jb2RlcG9pbnRzLm5ldC92YXJpYXRpb25fc2VsZWN0b3JzXHJcbiAqL1xuXG5cbnZhciBpc1ZhcmlhdGlvblNlbGVjdG9yID0gY29kZSA9PiB7XG4gIHJldHVybiBjb2RlIDw9IDB4ZmUwZiAmJiBjb2RlID49IDB4ZmUwMDtcbn07XG4vKipcclxuICogSXMgYGNvZGVgIGEgY29kZSBwb2ludCB1c2VkIGluIGtleWNhcCBzZXF1ZW5jZS5cclxuICpcclxuICogaHR0cHM6Ly9lbW9qaXBlZGlhLm9yZy9lbW9qaS1rZXljYXAtc2VxdWVuY2UvXHJcbiAqL1xuXG5cbnZhciBpc0tleWNhcCA9IGNvZGUgPT4ge1xuICByZXR1cm4gY29kZSA+PSAweDMwICYmIGNvZGUgPD0gMHgzOSB8fCAvLyBkaWdpdHNcbiAgY29kZSA9PT0gMHgyMyB8fCAvLyBudW1iZXIgc2lnblxuICBjb2RlID09PSAweDJhO1xufTtcbi8qKlxyXG4gKiBJcyBgY29kZWAgYSBDb21iaW5pbmcgRW5jbG9zaW5nIEtleWNhcC5cclxuICpcclxuICogaHR0cHM6Ly9lbW9qaXBlZGlhLm9yZy9jb21iaW5pbmctZW5jbG9zaW5nLWtleWNhcC9cclxuICovXG5cblxudmFyIGlzQ29tYmluaW5nRW5jbG9zaW5nS2V5Y2FwID0gY29kZSA9PiB7XG4gIHJldHVybiBjb2RlID09PSAweDIwZTM7XG59O1xuLyoqXHJcbiAqIElzIGBjb2RlYCBvbmUgb2YgdGhlIEJNUCBjb2RlcyB1c2VkIGluIGVtb2ppIHNlcXVlbmNlcy5cclxuICpcclxuICogaHR0cHM6Ly9lbW9qaXBlZGlhLm9yZy9lbW9qaS16d2otc2VxdWVuY2VzL1xyXG4gKi9cblxuXG52YXIgaXNCTVBFbW9qaSA9IGNvZGUgPT4ge1xuICAvLyBUaGlzIHJlcXVpcmVzIHRpbnkgYml0IG9mIG1haW50YW5hbmNlLCBiZXR0ZXIgaWRlYXM/XG4gIC8vIEZvcnR1bmF0ZWx5IGl0IG9ubHkgaGFwcGVucyBpZiBuZXcgVW5pY29kZSBTdGFuZGFyZFxuICAvLyBpcyByZWxlYXNlZC4gRmFpbHMgZ3JhY2VmdWxseSBpZiB1cGtlZXAgbGFncyBiZWhpbmQsXG4gIC8vIHNhbWUgd2F5IFNsYXRlIHByZXZpb3VzbHkgYmVoYXZlZCB3aXRoIGFsbCBlbW9qaXMuXG4gIHJldHVybiBjb2RlID09PSAweDI3NjQgfHwgLy8gaGVhcnQgKOKdpClcbiAgY29kZSA9PT0gMHgyNjQyIHx8IC8vIG1hbGUgKOKZgilcbiAgY29kZSA9PT0gMHgyNjQwIHx8IC8vIGZlbWFsZSAo4pmAKVxuICBjb2RlID09PSAweDI2MjAgfHwgLy8gc2N1bGwgKOKYoClcbiAgY29kZSA9PT0gMHgyNjk1IHx8IC8vIG1lZGljYWwgKOKalSlcbiAgY29kZSA9PT0gMHgyNzA4IHx8IC8vIHBsYW5lICjinIjvuI8pXG4gIGNvZGUgPT09IDB4MjVlZiB8fCAvLyBsYXJnZSBjaXJjbGUgKOKXrylcbiAgY29kZSA9PT0gMHgyYjA2IHx8IC8vIHVwIGFycm93ICjirIYpXG4gIGNvZGUgPT09IDB4MjE5NyB8fCAvLyB1cC1yaWdodCBhcnJvdyAo4oaXKVxuICBjb2RlID09PSAweDI3YTEgfHwgLy8gcmlnaHQgYXJyb3cgKOKeoSlcbiAgY29kZSA9PT0gMHgyMTk4IHx8IC8vIGRvd24tcmlnaHQgYXJyb3cgKOKGmClcbiAgY29kZSA9PT0gMHgyYjA3IHx8IC8vIGRvd24gYXJyb3cgKOKshylcbiAgY29kZSA9PT0gMHgyMTk5IHx8IC8vIGRvd24tbGVmdCBhcnJvdyAo4oaZKVxuICBjb2RlID09PSAweDJiMDUgfHwgLy8gbGVmdCBhcnJvdyAo4qyFKVxuICBjb2RlID09PSAweDIxOTYgfHwgLy8gdXAtbGVmdCBhcnJvdyAo4oaWKVxuICBjb2RlID09PSAweDIxOTUgfHwgLy8gdXAtZG93biBhcnJvdyAo4oaVKVxuICBjb2RlID09PSAweDIxOTQgfHwgLy8gbGVmdC1yaWdodCBhcnJvdyAo4oaUKVxuICBjb2RlID09PSAweDIxYTkgfHwgLy8gcmlnaHQgYXJyb3cgY3VydmluZyBsZWZ0ICjihqkpXG4gIGNvZGUgPT09IDB4MjFhYSB8fCAvLyBsZWZ0IGFycm93IGN1cnZpbmcgcmlnaHQgKOKGqilcbiAgY29kZSA9PT0gMHgyOTM0IHx8IC8vIHJpZ2h0IGFycm93IGN1cnZpbmcgdXAgKOKktClcbiAgY29kZSA9PT0gMHgyOTM1IC8vIHJpZ2h0IGFycm93IGN1cnZpbmcgZG93biAo4qS1KVxuICA7XG59O1xuLyoqXHJcbiAqIElzIGBjb2RlYCBhIFJlZ2lvbmFsIEluZGljYXRvci5cclxuICpcclxuICogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUmVnaW9uYWxfaW5kaWNhdG9yX3N5bWJvbFxyXG4gKi9cblxuXG52YXIgaXNSZWdpb25hbEluZGljYXRvciA9IGNvZGUgPT4ge1xuICByZXR1cm4gY29kZSA+PSAweDFmMWU2ICYmIGNvZGUgPD0gMHgxZjFmZjtcbn07XG4vKipcclxuICogSXMgYGNvZGVgIGZyb20gYmFzaWMgbXVsdGlsaW5ndWFsIHBsYW5lLlxyXG4gKlxyXG4gKiBodHRwczovL2NvZGVwb2ludHMubmV0L2Jhc2ljX211bHRpbGluZ3VhbF9wbGFuZVxyXG4gKi9cblxuXG52YXIgaXNCTVAgPSBjb2RlID0+IHtcbiAgcmV0dXJuIGNvZGUgPD0gMHhmZmZmO1xufTtcbi8qKlxyXG4gKiBJcyBgY29kZWAgYSBaZXJvIFdpZHRoIEpvaW5lci5cclxuICpcclxuICogaHR0cHM6Ly9lbW9qaXBlZGlhLm9yZy96ZXJvLXdpZHRoLWpvaW5lci9cclxuICovXG5cblxudmFyIGlzWldKID0gY29kZSA9PiB7XG4gIHJldHVybiBjb2RlID09PSAweDIwMGQ7XG59O1xuLyoqXHJcbiAqIElzIGBjb2RlYCBhIEJsYWNrIEZsYWcuXHJcbiAqXHJcbiAqIGh0dHBzOi8vZW1vamlwZWRpYS5vcmcvYmxhY2stZmxhZy9cclxuICovXG5cblxudmFyIGlzQmxhY2tGbGFnID0gY29kZSA9PiB7XG4gIHJldHVybiBjb2RlID09PSAweDFmM2Y0O1xufTtcbi8qKlxyXG4gKiBJcyBgY29kZWAgYSBUYWcuXHJcbiAqXHJcbiAqIGh0dHBzOi8vZW1vamlwZWRpYS5vcmcvZW1vamktdGFnLXNlcXVlbmNlL1xyXG4gKi9cblxuXG52YXIgaXNUYWcgPSBjb2RlID0+IHtcbiAgcmV0dXJuIGNvZGUgPj0gMHhlMDAwMCAmJiBjb2RlIDw9IDB4ZTAwN2Y7XG59O1xuLyoqXHJcbiAqIElzIGBjb2RlYCBhIENhbmNlbCBUYWcuXHJcbiAqXHJcbiAqIGh0dHBzOi8vZW1vamlwZWRpYS5vcmcvY2FuY2VsLXRhZy9cclxuICovXG5cblxudmFyIGlzQ2FuY2VsVGFnID0gY29kZSA9PiB7XG4gIHJldHVybiBjb2RlID09PSAweGUwMDdmO1xufTtcbi8qKlxyXG4gKiBJdGVyYXRlIG9uIGNvZGVwb2ludHMgZnJvbSByaWdodCB0byBsZWZ0LlxyXG4gKi9cblxuXG52YXIgY29kZXBvaW50c0l0ZXJhdG9yUlRMID0gZnVuY3Rpb24qIGNvZGVwb2ludHNJdGVyYXRvclJUTChzdHIpIHtcbiAgdmFyIGVuZCA9IHN0ci5sZW5ndGggLSAxO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGNoYXIxID0gc3RyLmNoYXJBdChlbmQgLSBpKTtcblxuICAgIGlmIChpc0xvd1N1cnJvZ2F0ZShjaGFyMS5jaGFyQ29kZUF0KDApKSkge1xuICAgICAgdmFyIGNoYXIyID0gc3RyLmNoYXJBdChlbmQgLSBpIC0gMSk7XG5cbiAgICAgIGlmIChpc0hpZ2hTdXJyb2dhdGUoY2hhcjIuY2hhckNvZGVBdCgwKSkpIHtcbiAgICAgICAgeWllbGQgY2hhcjIgKyBjaGFyMTtcbiAgICAgICAgaSsrO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB5aWVsZCBjaGFyMTtcbiAgfVxufTtcbi8qKlxyXG4gKiBJcyBgY2hhckNvZGVgIGEgaGlnaCBzdXJyb2dhdGUuXHJcbiAqXHJcbiAqIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VuaXZlcnNhbF9DaGFyYWN0ZXJfU2V0X2NoYXJhY3RlcnMjU3Vycm9nYXRlc1xyXG4gKi9cblxudmFyIGlzSGlnaFN1cnJvZ2F0ZSA9IGNoYXJDb2RlID0+IHtcbiAgcmV0dXJuIGNoYXJDb2RlID49IDB4ZDgwMCAmJiBjaGFyQ29kZSA8PSAweGRiZmY7XG59O1xuLyoqXHJcbiAqIElzIGBjaGFyQ29kZWAgYSBsb3cgc3Vycm9nYXRlLlxyXG4gKlxyXG4gKiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Vbml2ZXJzYWxfQ2hhcmFjdGVyX1NldF9jaGFyYWN0ZXJzI1N1cnJvZ2F0ZXNcclxuICovXG5cblxudmFyIGlzTG93U3Vycm9nYXRlID0gY2hhckNvZGUgPT4ge1xuICByZXR1cm4gY2hhckNvZGUgPj0gMHhkYzAwICYmIGNoYXJDb2RlIDw9IDB4ZGZmZjtcbn07XG5cbi8qKlxyXG4gKiBTaGFyZWQgdGhlIGZ1bmN0aW9uIHdpdGggaXNFbGVtZW50VHlwZSB1dGlsaXR5XHJcbiAqL1xuXG52YXIgaXNFbGVtZW50ID0gdmFsdWUgPT4ge1xuICByZXR1cm4gaXNQbGFpbk9iamVjdCh2YWx1ZSkgJiYgTm9kZS5pc05vZGVMaXN0KHZhbHVlLmNoaWxkcmVuKSAmJiAhRWRpdG9yLmlzRWRpdG9yKHZhbHVlKTtcbn07XG5cbnZhciBFbGVtZW50ID0ge1xuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGltcGxlbWVudHMgdGhlICdBbmNlc3RvcicgaW50ZXJmYWNlLlxyXG4gICAqL1xuICBpc0FuY2VzdG9yKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzUGxhaW5PYmplY3QodmFsdWUpICYmIE5vZGUuaXNOb2RlTGlzdCh2YWx1ZS5jaGlsZHJlbik7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSB2YWx1ZSBpbXBsZW1lbnRzIHRoZSBgRWxlbWVudGAgaW50ZXJmYWNlLlxyXG4gICAqL1xuICBpc0VsZW1lbnQsXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhbiBhcnJheSBvZiBgRWxlbWVudGAgb2JqZWN0cy5cclxuICAgKi9cbiAgaXNFbGVtZW50TGlzdCh2YWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5ldmVyeSh2YWwgPT4gRWxlbWVudC5pc0VsZW1lbnQodmFsKSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBzZXQgb2YgcHJvcHMgaXMgYSBwYXJ0aWFsIG9mIEVsZW1lbnQuXHJcbiAgICovXG4gIGlzRWxlbWVudFByb3BzKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLmNoaWxkcmVuICE9PSB1bmRlZmluZWQ7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSB2YWx1ZSBpbXBsZW1lbnRzIHRoZSBgRWxlbWVudGAgaW50ZXJmYWNlIGFuZCBoYXMgZWxlbWVudEtleSB3aXRoIHNlbGVjdGVkIHZhbHVlLlxyXG4gICAqIERlZmF1bHQgaXQgY2hlY2sgdG8gYHR5cGVgIGtleSB2YWx1ZVxyXG4gICAqL1xuICBpc0VsZW1lbnRUeXBlOiBmdW5jdGlvbiBpc0VsZW1lbnRUeXBlKHZhbHVlLCBlbGVtZW50VmFsKSB7XG4gICAgdmFyIGVsZW1lbnRLZXkgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6ICd0eXBlJztcbiAgICByZXR1cm4gaXNFbGVtZW50KHZhbHVlKSAmJiB2YWx1ZVtlbGVtZW50S2V5XSA9PT0gZWxlbWVudFZhbDtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhbiBlbGVtZW50IG1hdGNoZXMgc2V0IG9mIHByb3BlcnRpZXMuXHJcbiAgICpcclxuICAgKiBOb3RlOiB0aGlzIGNoZWNrcyBjdXN0b20gcHJvcGVydGllcywgYW5kIGl0IGRvZXMgbm90IGVuc3VyZSB0aGF0IGFueVxyXG4gICAqIGNoaWxkcmVuIGFyZSBlcXVpdmFsZW50LlxyXG4gICAqL1xuICBtYXRjaGVzKGVsZW1lbnQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICBpZiAoa2V5ID09PSAnY2hpbGRyZW4nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudFtrZXldICE9PSBwcm9wc1trZXldKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG59O1xuXG52YXIgX2V4Y2x1ZGVkJDQgPSBbXCJ0ZXh0XCJdLFxuICAgIF9leGNsdWRlZDIkMyA9IFtcInRleHRcIl07XG5cbmZ1bmN0aW9uIG93bktleXMkOChvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgeyBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IH0ga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkOCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzJDgoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyQ4KE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxudmFyIElTX0VESVRPUl9DQUNIRSA9IG5ldyBXZWFrTWFwKCk7XG52YXIgRWRpdG9yID0ge1xuICAvKipcclxuICAgKiBHZXQgdGhlIGFuY2VzdG9yIGFib3ZlIGEgbG9jYXRpb24gaW4gdGhlIGRvY3VtZW50LlxyXG4gICAqL1xuICBhYm92ZShlZGl0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHtcbiAgICAgIHZvaWRzID0gZmFsc2UsXG4gICAgICBtb2RlID0gJ2xvd2VzdCcsXG4gICAgICBhdCA9IGVkaXRvci5zZWxlY3Rpb24sXG4gICAgICBtYXRjaFxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgaWYgKCFhdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwYXRoID0gRWRpdG9yLnBhdGgoZWRpdG9yLCBhdCk7XG4gICAgdmFyIHJldmVyc2UgPSBtb2RlID09PSAnbG93ZXN0JztcblxuICAgIGZvciAodmFyIFtuLCBwXSBvZiBFZGl0b3IubGV2ZWxzKGVkaXRvciwge1xuICAgICAgYXQ6IHBhdGgsXG4gICAgICB2b2lkcyxcbiAgICAgIG1hdGNoLFxuICAgICAgcmV2ZXJzZVxuICAgIH0pKSB7XG4gICAgICBpZiAoIVRleHQuaXNUZXh0KG4pICYmICFQYXRoLmVxdWFscyhwYXRoLCBwKSkge1xuICAgICAgICByZXR1cm4gW24sIHBdO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcclxuICAgKiBBZGQgYSBjdXN0b20gcHJvcGVydHkgdG8gdGhlIGxlYWYgdGV4dCBub2RlcyBpbiB0aGUgY3VycmVudCBzZWxlY3Rpb24uXHJcbiAgICpcclxuICAgKiBJZiB0aGUgc2VsZWN0aW9uIGlzIGN1cnJlbnRseSBjb2xsYXBzZWQsIHRoZSBtYXJrcyB3aWxsIGJlIGFkZGVkIHRvIHRoZVxyXG4gICAqIGBlZGl0b3IubWFya3NgIHByb3BlcnR5IGluc3RlYWQsIGFuZCBhcHBsaWVkIHdoZW4gdGV4dCBpcyBpbnNlcnRlZCBuZXh0LlxyXG4gICAqL1xuICBhZGRNYXJrKGVkaXRvciwga2V5LCB2YWx1ZSkge1xuICAgIGVkaXRvci5hZGRNYXJrKGtleSwgdmFsdWUpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgcG9pbnQgYWZ0ZXIgYSBsb2NhdGlvbi5cclxuICAgKi9cbiAgYWZ0ZXIoZWRpdG9yLCBhdCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICB2YXIgYW5jaG9yID0gRWRpdG9yLnBvaW50KGVkaXRvciwgYXQsIHtcbiAgICAgIGVkZ2U6ICdlbmQnXG4gICAgfSk7XG4gICAgdmFyIGZvY3VzID0gRWRpdG9yLmVuZChlZGl0b3IsIFtdKTtcbiAgICB2YXIgcmFuZ2UgPSB7XG4gICAgICBhbmNob3IsXG4gICAgICBmb2N1c1xuICAgIH07XG4gICAgdmFyIHtcbiAgICAgIGRpc3RhbmNlID0gMVxuICAgIH0gPSBvcHRpb25zO1xuICAgIHZhciBkID0gMDtcbiAgICB2YXIgdGFyZ2V0O1xuXG4gICAgZm9yICh2YXIgcCBvZiBFZGl0b3IucG9zaXRpb25zKGVkaXRvciwgX29iamVjdFNwcmVhZCQ4KF9vYmplY3RTcHJlYWQkOCh7fSwgb3B0aW9ucyksIHt9LCB7XG4gICAgICBhdDogcmFuZ2VcbiAgICB9KSkpIHtcbiAgICAgIGlmIChkID4gZGlzdGFuY2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChkICE9PSAwKSB7XG4gICAgICAgIHRhcmdldCA9IHA7XG4gICAgICB9XG5cbiAgICAgIGQrKztcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgcG9pbnQgYmVmb3JlIGEgbG9jYXRpb24uXHJcbiAgICovXG4gIGJlZm9yZShlZGl0b3IsIGF0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIHZhciBhbmNob3IgPSBFZGl0b3Iuc3RhcnQoZWRpdG9yLCBbXSk7XG4gICAgdmFyIGZvY3VzID0gRWRpdG9yLnBvaW50KGVkaXRvciwgYXQsIHtcbiAgICAgIGVkZ2U6ICdzdGFydCdcbiAgICB9KTtcbiAgICB2YXIgcmFuZ2UgPSB7XG4gICAgICBhbmNob3IsXG4gICAgICBmb2N1c1xuICAgIH07XG4gICAgdmFyIHtcbiAgICAgIGRpc3RhbmNlID0gMVxuICAgIH0gPSBvcHRpb25zO1xuICAgIHZhciBkID0gMDtcbiAgICB2YXIgdGFyZ2V0O1xuXG4gICAgZm9yICh2YXIgcCBvZiBFZGl0b3IucG9zaXRpb25zKGVkaXRvciwgX29iamVjdFNwcmVhZCQ4KF9vYmplY3RTcHJlYWQkOCh7fSwgb3B0aW9ucyksIHt9LCB7XG4gICAgICBhdDogcmFuZ2UsXG4gICAgICByZXZlcnNlOiB0cnVlXG4gICAgfSkpKSB7XG4gICAgICBpZiAoZCA+IGRpc3RhbmNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoZCAhPT0gMCkge1xuICAgICAgICB0YXJnZXQgPSBwO1xuICAgICAgfVxuXG4gICAgICBkKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfSxcblxuICAvKipcclxuICAgKiBEZWxldGUgY29udGVudCBpbiB0aGUgZWRpdG9yIGJhY2t3YXJkIGZyb20gdGhlIGN1cnJlbnQgc2VsZWN0aW9uLlxyXG4gICAqL1xuICBkZWxldGVCYWNrd2FyZChlZGl0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHtcbiAgICAgIHVuaXQgPSAnY2hhcmFjdGVyJ1xuICAgIH0gPSBvcHRpb25zO1xuICAgIGVkaXRvci5kZWxldGVCYWNrd2FyZCh1bml0KTtcbiAgfSxcblxuICAvKipcclxuICAgKiBEZWxldGUgY29udGVudCBpbiB0aGUgZWRpdG9yIGZvcndhcmQgZnJvbSB0aGUgY3VycmVudCBzZWxlY3Rpb24uXHJcbiAgICovXG4gIGRlbGV0ZUZvcndhcmQoZWRpdG9yKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICB1bml0ID0gJ2NoYXJhY3RlcidcbiAgICB9ID0gb3B0aW9ucztcbiAgICBlZGl0b3IuZGVsZXRlRm9yd2FyZCh1bml0KTtcbiAgfSxcblxuICAvKipcclxuICAgKiBEZWxldGUgdGhlIGNvbnRlbnQgaW4gdGhlIGN1cnJlbnQgc2VsZWN0aW9uLlxyXG4gICAqL1xuICBkZWxldGVGcmFnbWVudChlZGl0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHtcbiAgICAgIGRpcmVjdGlvbiA9ICdmb3J3YXJkJ1xuICAgIH0gPSBvcHRpb25zO1xuICAgIGVkaXRvci5kZWxldGVGcmFnbWVudChkaXJlY3Rpb24pO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgc3RhcnQgYW5kIGVuZCBwb2ludHMgb2YgYSBsb2NhdGlvbi5cclxuICAgKi9cbiAgZWRnZXMoZWRpdG9yLCBhdCkge1xuICAgIHJldHVybiBbRWRpdG9yLnN0YXJ0KGVkaXRvciwgYXQpLCBFZGl0b3IuZW5kKGVkaXRvciwgYXQpXTtcbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIGVuZCBwb2ludCBvZiBhIGxvY2F0aW9uLlxyXG4gICAqL1xuICBlbmQoZWRpdG9yLCBhdCkge1xuICAgIHJldHVybiBFZGl0b3IucG9pbnQoZWRpdG9yLCBhdCwge1xuICAgICAgZWRnZTogJ2VuZCdcbiAgICB9KTtcbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIGZpcnN0IG5vZGUgYXQgYSBsb2NhdGlvbi5cclxuICAgKi9cbiAgZmlyc3QoZWRpdG9yLCBhdCkge1xuICAgIHZhciBwYXRoID0gRWRpdG9yLnBhdGgoZWRpdG9yLCBhdCwge1xuICAgICAgZWRnZTogJ3N0YXJ0J1xuICAgIH0pO1xuICAgIHJldHVybiBFZGl0b3Iubm9kZShlZGl0b3IsIHBhdGgpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgZnJhZ21lbnQgYXQgYSBsb2NhdGlvbi5cclxuICAgKi9cbiAgZnJhZ21lbnQoZWRpdG9yLCBhdCkge1xuICAgIHZhciByYW5nZSA9IEVkaXRvci5yYW5nZShlZGl0b3IsIGF0KTtcbiAgICB2YXIgZnJhZ21lbnQgPSBOb2RlLmZyYWdtZW50KGVkaXRvciwgcmFuZ2UpO1xuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIG5vZGUgaGFzIGJsb2NrIGNoaWxkcmVuLlxyXG4gICAqL1xuICBoYXNCbG9ja3MoZWRpdG9yLCBlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuY2hpbGRyZW4uc29tZShuID0+IEVkaXRvci5pc0Jsb2NrKGVkaXRvciwgbikpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgbm9kZSBoYXMgaW5saW5lIGFuZCB0ZXh0IGNoaWxkcmVuLlxyXG4gICAqL1xuICBoYXNJbmxpbmVzKGVkaXRvciwgZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmNoaWxkcmVuLnNvbWUobiA9PiBUZXh0LmlzVGV4dChuKSB8fCBFZGl0b3IuaXNJbmxpbmUoZWRpdG9yLCBuKSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBub2RlIGhhcyB0ZXh0IGNoaWxkcmVuLlxyXG4gICAqL1xuICBoYXNUZXh0cyhlZGl0b3IsIGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5jaGlsZHJlbi5ldmVyeShuID0+IFRleHQuaXNUZXh0KG4pKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBJbnNlcnQgYSBibG9jayBicmVhayBhdCB0aGUgY3VycmVudCBzZWxlY3Rpb24uXHJcbiAgICpcclxuICAgKiBJZiB0aGUgc2VsZWN0aW9uIGlzIGN1cnJlbnRseSBleHBhbmRlZCwgaXQgd2lsbCBiZSBkZWxldGVkIGZpcnN0LlxyXG4gICAqL1xuICBpbnNlcnRCcmVhayhlZGl0b3IpIHtcbiAgICBlZGl0b3IuaW5zZXJ0QnJlYWsoKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBJbnNlcnQgYSBmcmFnbWVudCBhdCB0aGUgY3VycmVudCBzZWxlY3Rpb24uXHJcbiAgICpcclxuICAgKiBJZiB0aGUgc2VsZWN0aW9uIGlzIGN1cnJlbnRseSBleHBhbmRlZCwgaXQgd2lsbCBiZSBkZWxldGVkIGZpcnN0LlxyXG4gICAqL1xuICBpbnNlcnRGcmFnbWVudChlZGl0b3IsIGZyYWdtZW50KSB7XG4gICAgZWRpdG9yLmluc2VydEZyYWdtZW50KGZyYWdtZW50KTtcbiAgfSxcblxuICAvKipcclxuICAgKiBJbnNlcnQgYSBub2RlIGF0IHRoZSBjdXJyZW50IHNlbGVjdGlvbi5cclxuICAgKlxyXG4gICAqIElmIHRoZSBzZWxlY3Rpb24gaXMgY3VycmVudGx5IGV4cGFuZGVkLCBpdCB3aWxsIGJlIGRlbGV0ZWQgZmlyc3QuXHJcbiAgICovXG4gIGluc2VydE5vZGUoZWRpdG9yLCBub2RlKSB7XG4gICAgZWRpdG9yLmluc2VydE5vZGUobm9kZSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogSW5zZXJ0IHRleHQgYXQgdGhlIGN1cnJlbnQgc2VsZWN0aW9uLlxyXG4gICAqXHJcbiAgICogSWYgdGhlIHNlbGVjdGlvbiBpcyBjdXJyZW50bHkgZXhwYW5kZWQsIGl0IHdpbGwgYmUgZGVsZXRlZCBmaXJzdC5cclxuICAgKi9cbiAgaW5zZXJ0VGV4dChlZGl0b3IsIHRleHQpIHtcbiAgICBlZGl0b3IuaW5zZXJ0VGV4dCh0ZXh0KTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGlzIGEgYmxvY2sgYEVsZW1lbnRgIG9iamVjdC5cclxuICAgKi9cbiAgaXNCbG9jayhlZGl0b3IsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuaXNFbGVtZW50KHZhbHVlKSAmJiAhZWRpdG9yLmlzSW5saW5lKHZhbHVlKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGlzIGFuIGBFZGl0b3JgIG9iamVjdC5cclxuICAgKi9cbiAgaXNFZGl0b3IodmFsdWUpIHtcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QodmFsdWUpKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIGNhY2hlZElzRWRpdG9yID0gSVNfRURJVE9SX0NBQ0hFLmdldCh2YWx1ZSk7XG5cbiAgICBpZiAoY2FjaGVkSXNFZGl0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGNhY2hlZElzRWRpdG9yO1xuICAgIH1cblxuICAgIHZhciBpc0VkaXRvciA9IHR5cGVvZiB2YWx1ZS5hZGRNYXJrID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZS5hcHBseSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUuZGVsZXRlQmFja3dhcmQgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlLmRlbGV0ZUZvcndhcmQgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlLmRlbGV0ZUZyYWdtZW50ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZS5pbnNlcnRCcmVhayA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUuaW5zZXJ0RnJhZ21lbnQgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlLmluc2VydE5vZGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlLmluc2VydFRleHQgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlLmlzSW5saW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZS5pc1ZvaWQgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlLm5vcm1hbGl6ZU5vZGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlLm9uQ2hhbmdlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZS5yZW1vdmVNYXJrID09PSAnZnVuY3Rpb24nICYmICh2YWx1ZS5tYXJrcyA9PT0gbnVsbCB8fCBpc1BsYWluT2JqZWN0KHZhbHVlLm1hcmtzKSkgJiYgKHZhbHVlLnNlbGVjdGlvbiA9PT0gbnVsbCB8fCBSYW5nZS5pc1JhbmdlKHZhbHVlLnNlbGVjdGlvbikpICYmIE5vZGUuaXNOb2RlTGlzdCh2YWx1ZS5jaGlsZHJlbikgJiYgT3BlcmF0aW9uLmlzT3BlcmF0aW9uTGlzdCh2YWx1ZS5vcGVyYXRpb25zKTtcbiAgICBJU19FRElUT1JfQ0FDSEUuc2V0KHZhbHVlLCBpc0VkaXRvcik7XG4gICAgcmV0dXJuIGlzRWRpdG9yO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgcG9pbnQgaXMgdGhlIGVuZCBwb2ludCBvZiBhIGxvY2F0aW9uLlxyXG4gICAqL1xuICBpc0VuZChlZGl0b3IsIHBvaW50LCBhdCkge1xuICAgIHZhciBlbmQgPSBFZGl0b3IuZW5kKGVkaXRvciwgYXQpO1xuICAgIHJldHVybiBQb2ludC5lcXVhbHMocG9pbnQsIGVuZCk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBwb2ludCBpcyBhbiBlZGdlIG9mIGEgbG9jYXRpb24uXHJcbiAgICovXG4gIGlzRWRnZShlZGl0b3IsIHBvaW50LCBhdCkge1xuICAgIHJldHVybiBFZGl0b3IuaXNTdGFydChlZGl0b3IsIHBvaW50LCBhdCkgfHwgRWRpdG9yLmlzRW5kKGVkaXRvciwgcG9pbnQsIGF0KTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhbiBlbGVtZW50IGlzIGVtcHR5LCBhY2NvdW50aW5nIGZvciB2b2lkIG5vZGVzLlxyXG4gICAqL1xuICBpc0VtcHR5KGVkaXRvciwgZWxlbWVudCkge1xuICAgIHZhciB7XG4gICAgICBjaGlsZHJlblxuICAgIH0gPSBlbGVtZW50O1xuICAgIHZhciBbZmlyc3RdID0gY2hpbGRyZW47XG4gICAgcmV0dXJuIGNoaWxkcmVuLmxlbmd0aCA9PT0gMCB8fCBjaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgVGV4dC5pc1RleHQoZmlyc3QpICYmIGZpcnN0LnRleHQgPT09ICcnICYmICFlZGl0b3IuaXNWb2lkKGVsZW1lbnQpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYW4gaW5saW5lIGBFbGVtZW50YCBvYmplY3QuXHJcbiAgICovXG4gIGlzSW5saW5lKGVkaXRvciwgdmFsdWUpIHtcbiAgICByZXR1cm4gRWxlbWVudC5pc0VsZW1lbnQodmFsdWUpICYmIGVkaXRvci5pc0lubGluZSh2YWx1ZSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgdGhlIGVkaXRvciBpcyBjdXJyZW50bHkgbm9ybWFsaXppbmcgYWZ0ZXIgZWFjaCBvcGVyYXRpb24uXHJcbiAgICovXG4gIGlzTm9ybWFsaXppbmcoZWRpdG9yKSB7XG4gICAgdmFyIGlzTm9ybWFsaXppbmcgPSBOT1JNQUxJWklORy5nZXQoZWRpdG9yKTtcbiAgICByZXR1cm4gaXNOb3JtYWxpemluZyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGlzTm9ybWFsaXppbmc7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBwb2ludCBpcyB0aGUgc3RhcnQgcG9pbnQgb2YgYSBsb2NhdGlvbi5cclxuICAgKi9cbiAgaXNTdGFydChlZGl0b3IsIHBvaW50LCBhdCkge1xuICAgIC8vIFBFUkY6IElmIHRoZSBvZmZzZXQgaXNuJ3QgYDBgIHdlIGtub3cgaXQncyBub3QgdGhlIHN0YXJ0LlxuICAgIGlmIChwb2ludC5vZmZzZXQgIT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgc3RhcnQgPSBFZGl0b3Iuc3RhcnQoZWRpdG9yLCBhdCk7XG4gICAgcmV0dXJuIFBvaW50LmVxdWFscyhwb2ludCwgc3RhcnQpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYSB2b2lkIGBFbGVtZW50YCBvYmplY3QuXHJcbiAgICovXG4gIGlzVm9pZChlZGl0b3IsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuaXNFbGVtZW50KHZhbHVlKSAmJiBlZGl0b3IuaXNWb2lkKHZhbHVlKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIGxhc3Qgbm9kZSBhdCBhIGxvY2F0aW9uLlxyXG4gICAqL1xuICBsYXN0KGVkaXRvciwgYXQpIHtcbiAgICB2YXIgcGF0aCA9IEVkaXRvci5wYXRoKGVkaXRvciwgYXQsIHtcbiAgICAgIGVkZ2U6ICdlbmQnXG4gICAgfSk7XG4gICAgcmV0dXJuIEVkaXRvci5ub2RlKGVkaXRvciwgcGF0aCk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBsZWFmIHRleHQgbm9kZSBhdCBhIGxvY2F0aW9uLlxyXG4gICAqL1xuICBsZWFmKGVkaXRvciwgYXQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIHBhdGggPSBFZGl0b3IucGF0aChlZGl0b3IsIGF0LCBvcHRpb25zKTtcbiAgICB2YXIgbm9kZSA9IE5vZGUubGVhZihlZGl0b3IsIHBhdGgpO1xuICAgIHJldHVybiBbbm9kZSwgcGF0aF07XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogSXRlcmF0ZSB0aHJvdWdoIGFsbCBvZiB0aGUgbGV2ZWxzIGF0IGEgbG9jYXRpb24uXHJcbiAgICovXG4gICpsZXZlbHMoZWRpdG9yKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICBhdCA9IGVkaXRvci5zZWxlY3Rpb24sXG4gICAgICByZXZlcnNlID0gZmFsc2UsXG4gICAgICB2b2lkcyA9IGZhbHNlXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgdmFyIHtcbiAgICAgIG1hdGNoXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICBpZiAobWF0Y2ggPT0gbnVsbCkge1xuICAgICAgbWF0Y2ggPSAoKSA9PiB0cnVlO1xuICAgIH1cblxuICAgIGlmICghYXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbGV2ZWxzID0gW107XG4gICAgdmFyIHBhdGggPSBFZGl0b3IucGF0aChlZGl0b3IsIGF0KTtcblxuICAgIGZvciAodmFyIFtuLCBwXSBvZiBOb2RlLmxldmVscyhlZGl0b3IsIHBhdGgpKSB7XG4gICAgICBpZiAoIW1hdGNoKG4sIHApKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsZXZlbHMucHVzaChbbiwgcF0pO1xuXG4gICAgICBpZiAoIXZvaWRzICYmIEVkaXRvci5pc1ZvaWQoZWRpdG9yLCBuKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgbGV2ZWxzLnJldmVyc2UoKTtcbiAgICB9XG5cbiAgICB5aWVsZCogbGV2ZWxzO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgbWFya3MgdGhhdCB3b3VsZCBiZSBhZGRlZCB0byB0ZXh0IGF0IHRoZSBjdXJyZW50IHNlbGVjdGlvbi5cclxuICAgKi9cbiAgbWFya3MoZWRpdG9yKSB7XG4gICAgdmFyIHtcbiAgICAgIG1hcmtzLFxuICAgICAgc2VsZWN0aW9uXG4gICAgfSA9IGVkaXRvcjtcblxuICAgIGlmICghc2VsZWN0aW9uKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAobWFya3MpIHtcbiAgICAgIHJldHVybiBtYXJrcztcbiAgICB9XG5cbiAgICBpZiAoUmFuZ2UuaXNFeHBhbmRlZChzZWxlY3Rpb24pKSB7XG4gICAgICB2YXIgW21hdGNoXSA9IEVkaXRvci5ub2RlcyhlZGl0b3IsIHtcbiAgICAgICAgbWF0Y2g6IFRleHQuaXNUZXh0XG4gICAgICB9KTtcblxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHZhciBbX25vZGVdID0gbWF0Y2g7XG5cbiAgICAgICAgdmFyIF9yZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9ub2RlLCBfZXhjbHVkZWQkNCk7XG5cbiAgICAgICAgcmV0dXJuIF9yZXN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciB7XG4gICAgICBhbmNob3JcbiAgICB9ID0gc2VsZWN0aW9uO1xuICAgIHZhciB7XG4gICAgICBwYXRoXG4gICAgfSA9IGFuY2hvcjtcbiAgICB2YXIgW25vZGVdID0gRWRpdG9yLmxlYWYoZWRpdG9yLCBwYXRoKTtcblxuICAgIGlmIChhbmNob3Iub2Zmc2V0ID09PSAwKSB7XG4gICAgICB2YXIgcHJldiA9IEVkaXRvci5wcmV2aW91cyhlZGl0b3IsIHtcbiAgICAgICAgYXQ6IHBhdGgsXG4gICAgICAgIG1hdGNoOiBUZXh0LmlzVGV4dFxuICAgICAgfSk7XG4gICAgICB2YXIgYmxvY2sgPSBFZGl0b3IuYWJvdmUoZWRpdG9yLCB7XG4gICAgICAgIG1hdGNoOiBuID0+IEVkaXRvci5pc0Jsb2NrKGVkaXRvciwgbilcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocHJldiAmJiBibG9jaykge1xuICAgICAgICB2YXIgW3ByZXZOb2RlLCBwcmV2UGF0aF0gPSBwcmV2O1xuICAgICAgICB2YXIgWywgYmxvY2tQYXRoXSA9IGJsb2NrO1xuXG4gICAgICAgIGlmIChQYXRoLmlzQW5jZXN0b3IoYmxvY2tQYXRoLCBwcmV2UGF0aCkpIHtcbiAgICAgICAgICBub2RlID0gcHJldk5vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhub2RlLCBfZXhjbHVkZWQyJDMpO1xuXG4gICAgcmV0dXJuIHJlc3Q7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBtYXRjaGluZyBub2RlIGluIHRoZSBicmFuY2ggb2YgdGhlIGRvY3VtZW50IGFmdGVyIGEgbG9jYXRpb24uXHJcbiAgICovXG4gIG5leHQoZWRpdG9yKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICBtb2RlID0gJ2xvd2VzdCcsXG4gICAgICB2b2lkcyA9IGZhbHNlXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgdmFyIHtcbiAgICAgIG1hdGNoLFxuICAgICAgYXQgPSBlZGl0b3Iuc2VsZWN0aW9uXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICBpZiAoIWF0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBvaW50QWZ0ZXJMb2NhdGlvbiA9IEVkaXRvci5hZnRlcihlZGl0b3IsIGF0LCB7XG4gICAgICB2b2lkc1xuICAgIH0pO1xuICAgIGlmICghcG9pbnRBZnRlckxvY2F0aW9uKSByZXR1cm47XG4gICAgdmFyIFssIHRvXSA9IEVkaXRvci5sYXN0KGVkaXRvciwgW10pO1xuICAgIHZhciBzcGFuID0gW3BvaW50QWZ0ZXJMb2NhdGlvbi5wYXRoLCB0b107XG5cbiAgICBpZiAoUGF0aC5pc1BhdGgoYXQpICYmIGF0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGdldCB0aGUgbmV4dCBub2RlIGZyb20gdGhlIHJvb3Qgbm9kZSFcIik7XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoID09IG51bGwpIHtcbiAgICAgIGlmIChQYXRoLmlzUGF0aChhdCkpIHtcbiAgICAgICAgdmFyIFtwYXJlbnRdID0gRWRpdG9yLnBhcmVudChlZGl0b3IsIGF0KTtcblxuICAgICAgICBtYXRjaCA9IG4gPT4gcGFyZW50LmNoaWxkcmVuLmluY2x1ZGVzKG4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWF0Y2ggPSAoKSA9PiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBbbmV4dF0gPSBFZGl0b3Iubm9kZXMoZWRpdG9yLCB7XG4gICAgICBhdDogc3BhbixcbiAgICAgIG1hdGNoLFxuICAgICAgbW9kZSxcbiAgICAgIHZvaWRzXG4gICAgfSk7XG4gICAgcmV0dXJuIG5leHQ7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBub2RlIGF0IGEgbG9jYXRpb24uXHJcbiAgICovXG4gIG5vZGUoZWRpdG9yLCBhdCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICB2YXIgcGF0aCA9IEVkaXRvci5wYXRoKGVkaXRvciwgYXQsIG9wdGlvbnMpO1xuICAgIHZhciBub2RlID0gTm9kZS5nZXQoZWRpdG9yLCBwYXRoKTtcbiAgICByZXR1cm4gW25vZGUsIHBhdGhdO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEl0ZXJhdGUgdGhyb3VnaCBhbGwgb2YgdGhlIG5vZGVzIGluIHRoZSBFZGl0b3IuXHJcbiAgICovXG4gICpub2RlcyhlZGl0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHtcbiAgICAgIGF0ID0gZWRpdG9yLnNlbGVjdGlvbixcbiAgICAgIG1vZGUgPSAnYWxsJyxcbiAgICAgIHVuaXZlcnNhbCA9IGZhbHNlLFxuICAgICAgcmV2ZXJzZSA9IGZhbHNlLFxuICAgICAgdm9pZHMgPSBmYWxzZVxuICAgIH0gPSBvcHRpb25zO1xuICAgIHZhciB7XG4gICAgICBtYXRjaFxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgaWYgKCFtYXRjaCkge1xuICAgICAgbWF0Y2ggPSAoKSA9PiB0cnVlO1xuICAgIH1cblxuICAgIGlmICghYXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZnJvbTtcbiAgICB2YXIgdG87XG5cbiAgICBpZiAoU3Bhbi5pc1NwYW4oYXQpKSB7XG4gICAgICBmcm9tID0gYXRbMF07XG4gICAgICB0byA9IGF0WzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZmlyc3QgPSBFZGl0b3IucGF0aChlZGl0b3IsIGF0LCB7XG4gICAgICAgIGVkZ2U6ICdzdGFydCdcbiAgICAgIH0pO1xuICAgICAgdmFyIGxhc3QgPSBFZGl0b3IucGF0aChlZGl0b3IsIGF0LCB7XG4gICAgICAgIGVkZ2U6ICdlbmQnXG4gICAgICB9KTtcbiAgICAgIGZyb20gPSByZXZlcnNlID8gbGFzdCA6IGZpcnN0O1xuICAgICAgdG8gPSByZXZlcnNlID8gZmlyc3QgOiBsYXN0O1xuICAgIH1cblxuICAgIHZhciBub2RlRW50cmllcyA9IE5vZGUubm9kZXMoZWRpdG9yLCB7XG4gICAgICByZXZlcnNlLFxuICAgICAgZnJvbSxcbiAgICAgIHRvLFxuICAgICAgcGFzczogX3JlZiA9PiB7XG4gICAgICAgIHZhciBbbl0gPSBfcmVmO1xuICAgICAgICByZXR1cm4gdm9pZHMgPyBmYWxzZSA6IEVkaXRvci5pc1ZvaWQoZWRpdG9yLCBuKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgbWF0Y2hlcyA9IFtdO1xuICAgIHZhciBoaXQ7XG5cbiAgICBmb3IgKHZhciBbbm9kZSwgcGF0aF0gb2Ygbm9kZUVudHJpZXMpIHtcbiAgICAgIHZhciBpc0xvd2VyID0gaGl0ICYmIFBhdGguY29tcGFyZShwYXRoLCBoaXRbMV0pID09PSAwOyAvLyBJbiBoaWdoZXN0IG1vZGUgYW55IG5vZGUgbG93ZXIgdGhhbiB0aGUgbGFzdCBoaXQgaXMgbm90IGEgbWF0Y2guXG5cbiAgICAgIGlmIChtb2RlID09PSAnaGlnaGVzdCcgJiYgaXNMb3dlcikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFtYXRjaChub2RlLCBwYXRoKSkge1xuICAgICAgICAvLyBJZiB3ZSd2ZSBhcnJpdmVkIGF0IGEgbGVhZiB0ZXh0IG5vZGUgdGhhdCBpcyBub3QgbG93ZXIgdGhhbiB0aGUgbGFzdFxuICAgICAgICAvLyBoaXQsIHRoZW4gd2UndmUgZm91bmQgYSBicmFuY2ggdGhhdCBkb2Vzbid0IGluY2x1ZGUgYSBtYXRjaCwgd2hpY2hcbiAgICAgICAgLy8gbWVhbnMgdGhlIG1hdGNoIGlzIG5vdCB1bml2ZXJzYWwuXG4gICAgICAgIGlmICh1bml2ZXJzYWwgJiYgIWlzTG93ZXIgJiYgVGV4dC5pc1RleHQobm9kZSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gSWYgdGhlcmUncyBhIG1hdGNoIGFuZCBpdCdzIGxvd2VyIHRoYW4gdGhlIGxhc3QsIHVwZGF0ZSB0aGUgaGl0LlxuXG5cbiAgICAgIGlmIChtb2RlID09PSAnbG93ZXN0JyAmJiBpc0xvd2VyKSB7XG4gICAgICAgIGhpdCA9IFtub2RlLCBwYXRoXTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IC8vIEluIGxvd2VzdCBtb2RlIHdlIGVtaXQgdGhlIGxhc3QgaGl0LCBvbmNlIGl0J3MgZ3VhcmFudGVlZCBsb3dlc3QuXG5cblxuICAgICAgdmFyIGVtaXQgPSBtb2RlID09PSAnbG93ZXN0JyA/IGhpdCA6IFtub2RlLCBwYXRoXTtcblxuICAgICAgaWYgKGVtaXQpIHtcbiAgICAgICAgaWYgKHVuaXZlcnNhbCkge1xuICAgICAgICAgIG1hdGNoZXMucHVzaChlbWl0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5aWVsZCBlbWl0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGhpdCA9IFtub2RlLCBwYXRoXTtcbiAgICB9IC8vIFNpbmNlIGxvd2VzdCBpcyBhbHdheXMgZW1pdHRpbmcgb25lIGJlaGluZCwgY2F0Y2ggdXAgYXQgdGhlIGVuZC5cblxuXG4gICAgaWYgKG1vZGUgPT09ICdsb3dlc3QnICYmIGhpdCkge1xuICAgICAgaWYgKHVuaXZlcnNhbCkge1xuICAgICAgICBtYXRjaGVzLnB1c2goaGl0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHlpZWxkIGhpdDtcbiAgICAgIH1cbiAgICB9IC8vIFVuaXZlcnNhbCBkZWZlcnMgdG8gZW5zdXJlIHRoYXQgdGhlIG1hdGNoIG9jY3VycyBpbiBldmVyeSBicmFuY2gsIHNvIHdlXG4gICAgLy8geWllbGQgYWxsIG9mIHRoZSBtYXRjaGVzIGFmdGVyIGl0ZXJhdGluZy5cblxuXG4gICAgaWYgKHVuaXZlcnNhbCkge1xuICAgICAgeWllbGQqIG1hdGNoZXM7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxyXG4gICAqIE5vcm1hbGl6ZSBhbnkgZGlydHkgb2JqZWN0cyBpbiB0aGUgZWRpdG9yLlxyXG4gICAqL1xuICBub3JtYWxpemUoZWRpdG9yKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICBmb3JjZSA9IGZhbHNlXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICB2YXIgZ2V0RGlydHlQYXRocyA9IGVkaXRvciA9PiB7XG4gICAgICByZXR1cm4gRElSVFlfUEFUSFMuZ2V0KGVkaXRvcikgfHwgW107XG4gICAgfTtcblxuICAgIGlmICghRWRpdG9yLmlzTm9ybWFsaXppbmcoZWRpdG9yKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChmb3JjZSkge1xuICAgICAgdmFyIGFsbFBhdGhzID0gQXJyYXkuZnJvbShOb2RlLm5vZGVzKGVkaXRvciksIF9yZWYyID0+IHtcbiAgICAgICAgdmFyIFssIHBdID0gX3JlZjI7XG4gICAgICAgIHJldHVybiBwO1xuICAgICAgfSk7XG4gICAgICBESVJUWV9QQVRIUy5zZXQoZWRpdG9yLCBhbGxQYXRocyk7XG4gICAgfVxuXG4gICAgaWYgKGdldERpcnR5UGF0aHMoZWRpdG9yKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBFZGl0b3Iud2l0aG91dE5vcm1hbGl6aW5nKGVkaXRvciwgKCkgPT4ge1xuICAgICAgLypcclxuICAgICAgICBGaXggZGlydHkgZWxlbWVudHMgd2l0aCBubyBjaGlsZHJlbi5cclxuICAgICAgICBlZGl0b3Iubm9ybWFsaXplTm9kZSgpIGRvZXMgZml4IHRoaXMsIGJ1dCBzb21lIG5vcm1hbGl6YXRpb24gZml4ZXMgYWxzbyByZXF1aXJlIGl0IHRvIHdvcmsuXHJcbiAgICAgICAgUnVubmluZyBhbiBpbml0aWFsIHBhc3MgYXZvaWRzIHRoZSBjYXRjaC0yMiByYWNlIGNvbmRpdGlvbi5cclxuICAgICAgKi9cbiAgICAgIGZvciAodmFyIGRpcnR5UGF0aCBvZiBnZXREaXJ0eVBhdGhzKGVkaXRvcikpIHtcbiAgICAgICAgaWYgKE5vZGUuaGFzKGVkaXRvciwgZGlydHlQYXRoKSkge1xuICAgICAgICAgIHZhciBlbnRyeSA9IEVkaXRvci5ub2RlKGVkaXRvciwgZGlydHlQYXRoKTtcbiAgICAgICAgICB2YXIgW25vZGUsIF9dID0gZW50cnk7XG4gICAgICAgICAgLypcclxuICAgICAgICAgICAgVGhlIGRlZmF1bHQgbm9ybWFsaXplciBpbnNlcnRzIGFuIGVtcHR5IHRleHQgbm9kZSBpbiB0aGlzIHNjZW5hcmlvLCBidXQgaXQgY2FuIGJlIGN1c3RvbWlzZWQuXHJcbiAgICAgICAgICAgIFNvIHRoZXJlIGlzIHNvbWUgcmlzayBoZXJlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgIEFzIGxvbmcgYXMgdGhlIG5vcm1hbGl6ZXIgb25seSBpbnNlcnRzIGNoaWxkIG5vZGVzIGZvciB0aGlzIGNhc2UgaXQgaXMgc2FmZSB0byBkbyBpbiBhbnkgb3JkZXI7XHJcbiAgICAgICAgICAgIGJ5IGRlZmluaXRpb24gYWRkaW5nIGNoaWxkcmVuIHRvIGFuIGVtcHR5IG5vZGUgY2FuJ3QgY2F1c2Ugb3RoZXIgcGF0aHMgdG8gY2hhbmdlLlxyXG4gICAgICAgICAgKi9cblxuICAgICAgICAgIGlmIChFbGVtZW50LmlzRWxlbWVudChub2RlKSAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZWRpdG9yLm5vcm1hbGl6ZU5vZGUoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgbWF4ID0gZ2V0RGlydHlQYXRocyhlZGl0b3IpLmxlbmd0aCAqIDQyOyAvLyBIQUNLOiBiZXR0ZXIgd2F5P1xuXG4gICAgICB2YXIgbSA9IDA7XG5cbiAgICAgIHdoaWxlIChnZXREaXJ0eVBhdGhzKGVkaXRvcikubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlmIChtID4gbWF4KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiXFxuICAgICAgICAgICAgQ291bGQgbm90IGNvbXBsZXRlbHkgbm9ybWFsaXplIHRoZSBlZGl0b3IgYWZ0ZXIgXCIuY29uY2F0KG1heCwgXCIgaXRlcmF0aW9ucyEgVGhpcyBpcyB1c3VhbGx5IGR1ZSB0byBpbmNvcnJlY3Qgbm9ybWFsaXphdGlvbiBsb2dpYyB0aGF0IGxlYXZlcyBhIG5vZGUgaW4gYW4gaW52YWxpZCBzdGF0ZS5cXG4gICAgICAgICAgXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfZGlydHlQYXRoID0gZ2V0RGlydHlQYXRocyhlZGl0b3IpLnBvcCgpOyAvLyBJZiB0aGUgbm9kZSBkb2Vzbid0IGV4aXN0IGluIHRoZSB0cmVlLCBpdCBkb2VzIG5vdCBuZWVkIHRvIGJlIG5vcm1hbGl6ZWQuXG5cblxuICAgICAgICBpZiAoTm9kZS5oYXMoZWRpdG9yLCBfZGlydHlQYXRoKSkge1xuICAgICAgICAgIHZhciBfZW50cnkgPSBFZGl0b3Iubm9kZShlZGl0b3IsIF9kaXJ0eVBhdGgpO1xuXG4gICAgICAgICAgZWRpdG9yLm5vcm1hbGl6ZU5vZGUoX2VudHJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG0rKztcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIHBhcmVudCBub2RlIG9mIGEgbG9jYXRpb24uXHJcbiAgICovXG4gIHBhcmVudChlZGl0b3IsIGF0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIHZhciBwYXRoID0gRWRpdG9yLnBhdGgoZWRpdG9yLCBhdCwgb3B0aW9ucyk7XG4gICAgdmFyIHBhcmVudFBhdGggPSBQYXRoLnBhcmVudChwYXRoKTtcbiAgICB2YXIgZW50cnkgPSBFZGl0b3Iubm9kZShlZGl0b3IsIHBhcmVudFBhdGgpO1xuICAgIHJldHVybiBlbnRyeTtcbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIHBhdGggb2YgYSBsb2NhdGlvbi5cclxuICAgKi9cbiAgcGF0aChlZGl0b3IsIGF0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICBkZXB0aCxcbiAgICAgIGVkZ2VcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIGlmIChQYXRoLmlzUGF0aChhdCkpIHtcbiAgICAgIGlmIChlZGdlID09PSAnc3RhcnQnKSB7XG4gICAgICAgIHZhciBbLCBmaXJzdFBhdGhdID0gTm9kZS5maXJzdChlZGl0b3IsIGF0KTtcbiAgICAgICAgYXQgPSBmaXJzdFBhdGg7XG4gICAgICB9IGVsc2UgaWYgKGVkZ2UgPT09ICdlbmQnKSB7XG4gICAgICAgIHZhciBbLCBsYXN0UGF0aF0gPSBOb2RlLmxhc3QoZWRpdG9yLCBhdCk7XG4gICAgICAgIGF0ID0gbGFzdFBhdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFJhbmdlLmlzUmFuZ2UoYXQpKSB7XG4gICAgICBpZiAoZWRnZSA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICBhdCA9IFJhbmdlLnN0YXJ0KGF0KTtcbiAgICAgIH0gZWxzZSBpZiAoZWRnZSA9PT0gJ2VuZCcpIHtcbiAgICAgICAgYXQgPSBSYW5nZS5lbmQoYXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXQgPSBQYXRoLmNvbW1vbihhdC5hbmNob3IucGF0aCwgYXQuZm9jdXMucGF0aCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFBvaW50LmlzUG9pbnQoYXQpKSB7XG4gICAgICBhdCA9IGF0LnBhdGg7XG4gICAgfVxuXG4gICAgaWYgKGRlcHRoICE9IG51bGwpIHtcbiAgICAgIGF0ID0gYXQuc2xpY2UoMCwgZGVwdGgpO1xuICAgIH1cblxuICAgIHJldHVybiBhdDtcbiAgfSxcblxuICBoYXNQYXRoKGVkaXRvciwgcGF0aCkge1xuICAgIHJldHVybiBOb2RlLmhhcyhlZGl0b3IsIHBhdGgpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG11dGFibGUgcmVmIGZvciBhIGBQYXRoYCBvYmplY3QsIHdoaWNoIHdpbGwgc3RheSBpbiBzeW5jIGFzIG5ld1xyXG4gICAqIG9wZXJhdGlvbnMgYXJlIGFwcGxpZWQgdG8gdGhlIGVkaXRvci5cclxuICAgKi9cbiAgcGF0aFJlZihlZGl0b3IsIHBhdGgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIHtcbiAgICAgIGFmZmluaXR5ID0gJ2ZvcndhcmQnXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgdmFyIHJlZiA9IHtcbiAgICAgIGN1cnJlbnQ6IHBhdGgsXG4gICAgICBhZmZpbml0eSxcblxuICAgICAgdW5yZWYoKSB7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgY3VycmVudFxuICAgICAgICB9ID0gcmVmO1xuICAgICAgICB2YXIgcGF0aFJlZnMgPSBFZGl0b3IucGF0aFJlZnMoZWRpdG9yKTtcbiAgICAgICAgcGF0aFJlZnMuZGVsZXRlKHJlZik7XG4gICAgICAgIHJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgICB9XG5cbiAgICB9O1xuICAgIHZhciByZWZzID0gRWRpdG9yLnBhdGhSZWZzKGVkaXRvcik7XG4gICAgcmVmcy5hZGQocmVmKTtcbiAgICByZXR1cm4gcmVmO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgc2V0IG9mIGN1cnJlbnRseSB0cmFja2VkIHBhdGggcmVmcyBvZiB0aGUgZWRpdG9yLlxyXG4gICAqL1xuICBwYXRoUmVmcyhlZGl0b3IpIHtcbiAgICB2YXIgcmVmcyA9IFBBVEhfUkVGUy5nZXQoZWRpdG9yKTtcblxuICAgIGlmICghcmVmcykge1xuICAgICAgcmVmcyA9IG5ldyBTZXQoKTtcbiAgICAgIFBBVEhfUkVGUy5zZXQoZWRpdG9yLCByZWZzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmcztcbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIHN0YXJ0IG9yIGVuZCBwb2ludCBvZiBhIGxvY2F0aW9uLlxyXG4gICAqL1xuICBwb2ludChlZGl0b3IsIGF0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICBlZGdlID0gJ3N0YXJ0J1xuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgaWYgKFBhdGguaXNQYXRoKGF0KSkge1xuICAgICAgdmFyIHBhdGg7XG5cbiAgICAgIGlmIChlZGdlID09PSAnZW5kJykge1xuICAgICAgICB2YXIgWywgbGFzdFBhdGhdID0gTm9kZS5sYXN0KGVkaXRvciwgYXQpO1xuICAgICAgICBwYXRoID0gbGFzdFBhdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgWywgZmlyc3RQYXRoXSA9IE5vZGUuZmlyc3QoZWRpdG9yLCBhdCk7XG4gICAgICAgIHBhdGggPSBmaXJzdFBhdGg7XG4gICAgICB9XG5cbiAgICAgIHZhciBub2RlID0gTm9kZS5nZXQoZWRpdG9yLCBwYXRoKTtcblxuICAgICAgaWYgKCFUZXh0LmlzVGV4dChub2RlKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZ2V0IHRoZSBcIi5jb25jYXQoZWRnZSwgXCIgcG9pbnQgaW4gdGhlIG5vZGUgYXQgcGF0aCBbXCIpLmNvbmNhdChhdCwgXCJdIGJlY2F1c2UgaXQgaGFzIG5vIFwiKS5jb25jYXQoZWRnZSwgXCIgdGV4dCBub2RlLlwiKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhdGgsXG4gICAgICAgIG9mZnNldDogZWRnZSA9PT0gJ2VuZCcgPyBub2RlLnRleHQubGVuZ3RoIDogMFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoUmFuZ2UuaXNSYW5nZShhdCkpIHtcbiAgICAgIHZhciBbc3RhcnQsIGVuZF0gPSBSYW5nZS5lZGdlcyhhdCk7XG4gICAgICByZXR1cm4gZWRnZSA9PT0gJ3N0YXJ0JyA/IHN0YXJ0IDogZW5kO1xuICAgIH1cblxuICAgIHJldHVybiBhdDtcbiAgfSxcblxuICAvKipcclxuICAgKiBDcmVhdGUgYSBtdXRhYmxlIHJlZiBmb3IgYSBgUG9pbnRgIG9iamVjdCwgd2hpY2ggd2lsbCBzdGF5IGluIHN5bmMgYXMgbmV3XHJcbiAgICogb3BlcmF0aW9ucyBhcmUgYXBwbGllZCB0byB0aGUgZWRpdG9yLlxyXG4gICAqL1xuICBwb2ludFJlZihlZGl0b3IsIHBvaW50KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICBhZmZpbml0eSA9ICdmb3J3YXJkJ1xuICAgIH0gPSBvcHRpb25zO1xuICAgIHZhciByZWYgPSB7XG4gICAgICBjdXJyZW50OiBwb2ludCxcbiAgICAgIGFmZmluaXR5LFxuXG4gICAgICB1bnJlZigpIHtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBjdXJyZW50XG4gICAgICAgIH0gPSByZWY7XG4gICAgICAgIHZhciBwb2ludFJlZnMgPSBFZGl0b3IucG9pbnRSZWZzKGVkaXRvcik7XG4gICAgICAgIHBvaW50UmVmcy5kZWxldGUocmVmKTtcbiAgICAgICAgcmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICAgIH1cblxuICAgIH07XG4gICAgdmFyIHJlZnMgPSBFZGl0b3IucG9pbnRSZWZzKGVkaXRvcik7XG4gICAgcmVmcy5hZGQocmVmKTtcbiAgICByZXR1cm4gcmVmO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgc2V0IG9mIGN1cnJlbnRseSB0cmFja2VkIHBvaW50IHJlZnMgb2YgdGhlIGVkaXRvci5cclxuICAgKi9cbiAgcG9pbnRSZWZzKGVkaXRvcikge1xuICAgIHZhciByZWZzID0gUE9JTlRfUkVGUy5nZXQoZWRpdG9yKTtcblxuICAgIGlmICghcmVmcykge1xuICAgICAgcmVmcyA9IG5ldyBTZXQoKTtcbiAgICAgIFBPSU5UX1JFRlMuc2V0KGVkaXRvciwgcmVmcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZnM7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogUmV0dXJuIGFsbCB0aGUgcG9zaXRpb25zIGluIGBhdGAgcmFuZ2Ugd2hlcmUgYSBgUG9pbnRgIGNhbiBiZSBwbGFjZWQuXHJcbiAgICpcclxuICAgKiBCeSBkZWZhdWx0LCBtb3ZlcyBmb3J3YXJkIGJ5IGluZGl2aWR1YWwgb2Zmc2V0cyBhdCBhIHRpbWUsIGJ1dFxyXG4gICAqIHRoZSBgdW5pdGAgb3B0aW9uIGNhbiBiZSB1c2VkIHRvIHRvIG1vdmUgYnkgY2hhcmFjdGVyLCB3b3JkLCBsaW5lLCBvciBibG9jay5cclxuICAgKlxyXG4gICAqIFRoZSBgcmV2ZXJzZWAgb3B0aW9uIGNhbiBiZSB1c2VkIHRvIGNoYW5nZSBpdGVyYXRpb24gZGlyZWN0aW9uLlxyXG4gICAqXHJcbiAgICogTm90ZTogQnkgZGVmYXVsdCB2b2lkIG5vZGVzIGFyZSB0cmVhdGVkIGFzIGEgc2luZ2xlIHBvaW50IGFuZCBpdGVyYXRpb25cclxuICAgKiB3aWxsIG5vdCBoYXBwZW4gaW5zaWRlIHRoZWlyIGNvbnRlbnQgdW5sZXNzIHlvdSBwYXNzIGluIHRydWUgZm9yIHRoZVxyXG4gICAqIGB2b2lkc2Agb3B0aW9uLCB0aGVuIGl0ZXJhdGlvbiB3aWxsIG9jY3VyLlxyXG4gICAqL1xuICAqcG9zaXRpb25zKGVkaXRvcikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIge1xuICAgICAgYXQgPSBlZGl0b3Iuc2VsZWN0aW9uLFxuICAgICAgdW5pdCA9ICdvZmZzZXQnLFxuICAgICAgcmV2ZXJzZSA9IGZhbHNlLFxuICAgICAgdm9pZHMgPSBmYWxzZVxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgaWYgKCFhdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEFsZ29yaXRobSBub3RlczpcclxuICAgICAqXHJcbiAgICAgKiBFYWNoIHN0ZXAgYGRpc3RhbmNlYCBpcyBkeW5hbWljIGRlcGVuZGluZyBvbiB0aGUgdW5kZXJseWluZyB0ZXh0XHJcbiAgICAgKiBhbmQgdGhlIGB1bml0YCBzcGVjaWZpZWQuICBFYWNoIHN0ZXAsIGUuZy4sIGEgbGluZSBvciB3b3JkLCBtYXlcclxuICAgICAqIHNwYW4gbXVsdGlwbGUgdGV4dCBub2Rlcywgc28gd2UgaXRlcmF0ZSB0aHJvdWdoIHRoZSB0ZXh0IGJvdGggb25cclxuICAgICAqIHR3byBsZXZlbHMgaW4gc3RlcC1zeW5jOlxyXG4gICAgICpcclxuICAgICAqIGBsZWFmVGV4dGAgc3RvcmVzIHRoZSB0ZXh0IG9uIGEgdGV4dCBsZWFmIGxldmVsLCBhbmQgaXMgYWR2YW5jZWRcclxuICAgICAqIHRocm91Z2ggdXNpbmcgdGhlIGNvdW50ZXJzIGBsZWFmVGV4dE9mZnNldGAgYW5kIGBsZWFmVGV4dFJlbWFpbmluZ2AuXHJcbiAgICAgKlxyXG4gICAgICogYGJsb2NrVGV4dGAgc3RvcmVzIHRoZSB0ZXh0IG9uIGEgYmxvY2sgbGV2ZWwsIGFuZCBpcyBzaG9ydGVuZWRcclxuICAgICAqIGJ5IGBkaXN0YW5jZWAgZXZlcnkgdGltZSBpdCBpcyBhZHZhbmNlZC5cclxuICAgICAqXHJcbiAgICAgKiBXZSBvbmx5IG1haW50YWluIGEgd2luZG93IG9mIG9uZSBibG9ja1RleHQgYW5kIG9uZSBsZWFmVGV4dCBiZWNhdXNlXHJcbiAgICAgKiBhIGJsb2NrIG5vZGUgYWx3YXlzIGFwcGVhcnMgYmVmb3JlIGFsbCBvZiBpdHMgbGVhZiBub2Rlcy5cclxuICAgICAqL1xuXG5cbiAgICB2YXIgcmFuZ2UgPSBFZGl0b3IucmFuZ2UoZWRpdG9yLCBhdCk7XG4gICAgdmFyIFtzdGFydCwgZW5kXSA9IFJhbmdlLmVkZ2VzKHJhbmdlKTtcbiAgICB2YXIgZmlyc3QgPSByZXZlcnNlID8gZW5kIDogc3RhcnQ7XG4gICAgdmFyIGlzTmV3QmxvY2sgPSBmYWxzZTtcbiAgICB2YXIgYmxvY2tUZXh0ID0gJyc7XG4gICAgdmFyIGRpc3RhbmNlID0gMDsgLy8gRGlzdGFuY2UgZm9yIGxlYWZUZXh0IHRvIGNhdGNoIHVwIHRvIGJsb2NrVGV4dC5cblxuICAgIHZhciBsZWFmVGV4dFJlbWFpbmluZyA9IDA7XG4gICAgdmFyIGxlYWZUZXh0T2Zmc2V0ID0gMDsgLy8gSXRlcmF0ZSB0aHJvdWdoIGFsbCBub2RlcyBpbiByYW5nZSwgZ3JhYmJpbmcgZW50aXJlIHRleHR1YWwgY29udGVudFxuICAgIC8vIG9mIGJsb2NrIG5vZGVzIGluIGJsb2NrVGV4dCwgYW5kIHRleHQgbm9kZXMgaW4gbGVhZlRleHQuXG4gICAgLy8gRXhwbG9pdHMgdGhlIGZhY3QgdGhhdCBub2RlcyBhcmUgc2VxdWVuY2VkIGluIHN1Y2ggYSB3YXkgdGhhdCB3ZSBmaXJzdFxuICAgIC8vIGVuY291bnRlciB0aGUgYmxvY2sgbm9kZSwgdGhlbiBhbGwgb2YgaXRzIHRleHQgbm9kZXMsIHNvIHdoZW4gaXRlcmF0aW5nXG4gICAgLy8gdGhyb3VnaCB0aGUgYmxvY2tUZXh0IGFuZCBsZWFmVGV4dCB3ZSBqdXN0IG5lZWQgdG8gcmVtZW1iZXIgYSB3aW5kb3cgb2ZcbiAgICAvLyBvbmUgYmxvY2sgbm9kZSBhbmQgbGVhZiBub2RlLCByZXNwZWN0aXZlbHkuXG5cbiAgICBmb3IgKHZhciBbbm9kZSwgcGF0aF0gb2YgRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgYXQsXG4gICAgICByZXZlcnNlLFxuICAgICAgdm9pZHNcbiAgICB9KSkge1xuICAgICAgLypcclxuICAgICAgICogRUxFTUVOVCBOT0RFIC0gWWllbGQgcG9zaXRpb24ocykgZm9yIHZvaWRzLCBjb2xsZWN0IGJsb2NrVGV4dCBmb3IgYmxvY2tzXHJcbiAgICAgICAqL1xuICAgICAgaWYgKEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpKSB7XG4gICAgICAgIC8vIFZvaWQgbm9kZXMgYXJlIGEgc3BlY2lhbCBjYXNlLCBzbyBieSBkZWZhdWx0IHdlIHdpbGwgYWx3YXlzXG4gICAgICAgIC8vIHlpZWxkIHRoZWlyIGZpcnN0IHBvaW50LiBJZiB0aGUgYHZvaWRzYCBvcHRpb24gaXMgc2V0IHRvIHRydWUsXG4gICAgICAgIC8vIHRoZW4gd2Ugd2lsbCBpdGVyYXRlIG92ZXIgdGhlaXIgY29udGVudC5cbiAgICAgICAgaWYgKCF2b2lkcyAmJiBlZGl0b3IuaXNWb2lkKG5vZGUpKSB7XG4gICAgICAgICAgeWllbGQgRWRpdG9yLnN0YXJ0KGVkaXRvciwgcGF0aCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gLy8gSW5saW5lIGVsZW1lbnQgbm9kZXMgYXJlIGlnbm9yZWQgYXMgdGhleSBkb24ndCB0aGVtc2VsdmVzXG4gICAgICAgIC8vIGNvbnRyaWJ1dGUgdG8gYGJsb2NrVGV4dGAgb3IgYGxlYWZUZXh0YCAtIHRoZWlyIHBhcmVudCBhbmRcbiAgICAgICAgLy8gY2hpbGRyZW4gZG8uXG5cblxuICAgICAgICBpZiAoZWRpdG9yLmlzSW5saW5lKG5vZGUpKSBjb250aW51ZTsgLy8gQmxvY2sgZWxlbWVudCBub2RlIC0gc2V0IGBibG9ja1RleHRgIHRvIGl0cyB0ZXh0IGNvbnRlbnQuXG5cbiAgICAgICAgaWYgKEVkaXRvci5oYXNJbmxpbmVzKGVkaXRvciwgbm9kZSkpIHtcbiAgICAgICAgICAvLyBXZSBhbHdheXMgZXhoYXVzdCBibG9jayBub2RlcyBiZWZvcmUgZW5jb3VudGVyaW5nIGEgbmV3IG9uZTpcbiAgICAgICAgICAvLyAgIGNvbnNvbGUuYXNzZXJ0KGJsb2NrVGV4dCA9PT0gJycsXG4gICAgICAgICAgLy8gICAgIGBibG9ja1RleHQ9JyR7YmxvY2tUZXh0fScgLSBgK1xuICAgICAgICAgIC8vICAgICBgbm90IGV4aGF1c3RlZCBiZWZvcmUgbmV3IGJsb2NrIG5vZGVgLCBwYXRoKVxuICAgICAgICAgIC8vIEVuc3VyZSByYW5nZSBjb25zaWRlcmVkIGlzIGNhcHBlZCB0byBgcmFuZ2VgLCBpbiB0aGVcbiAgICAgICAgICAvLyBzdGFydC9lbmQgZWRnZSBjYXNlcyB3aGVyZSBibG9jayBleHRlbmRzIGJleW9uZCByYW5nZS5cbiAgICAgICAgICAvLyBFcXVpdmFsZW50IHRvIHRoaXMsIGJ1dCBwcmVzdW1hYmx5IG1vcmUgcGVyZm9ybWFudDpcbiAgICAgICAgICAvLyAgIGJsb2NrUmFuZ2UgPSBFZGl0b3IucmFuZ2UoZWRpdG9yLCAuLi5FZGl0b3IuZWRnZXMoZWRpdG9yLCBwYXRoKSlcbiAgICAgICAgICAvLyAgIGJsb2NrUmFuZ2UgPSBSYW5nZS5pbnRlcnNlY3Rpb24ocmFuZ2UsIGJsb2NrUmFuZ2UpIC8vIGludGVyc2VjdFxuICAgICAgICAgIC8vICAgYmxvY2tUZXh0ID0gRWRpdG9yLnN0cmluZyhlZGl0b3IsIGJsb2NrUmFuZ2UsIHsgdm9pZHMgfSlcbiAgICAgICAgICB2YXIgZSA9IFBhdGguaXNBbmNlc3RvcihwYXRoLCBlbmQucGF0aCkgPyBlbmQgOiBFZGl0b3IuZW5kKGVkaXRvciwgcGF0aCk7XG4gICAgICAgICAgdmFyIHMgPSBQYXRoLmlzQW5jZXN0b3IocGF0aCwgc3RhcnQucGF0aCkgPyBzdGFydCA6IEVkaXRvci5zdGFydChlZGl0b3IsIHBhdGgpO1xuICAgICAgICAgIGJsb2NrVGV4dCA9IEVkaXRvci5zdHJpbmcoZWRpdG9yLCB7XG4gICAgICAgICAgICBhbmNob3I6IHMsXG4gICAgICAgICAgICBmb2N1czogZVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHZvaWRzXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaXNOZXdCbG9jayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8qXHJcbiAgICAgICAqIFRFWFQgTEVBRiBOT0RFIC0gSXRlcmF0ZSB0aHJvdWdoIHRleHQgY29udGVudCwgeWllbGRpbmdcclxuICAgICAgICogcG9zaXRpb25zIGV2ZXJ5IGBkaXN0YW5jZWAgb2Zmc2V0IGFjY29yZGluZyB0byBgdW5pdGAuXHJcbiAgICAgICAqL1xuXG5cbiAgICAgIGlmIChUZXh0LmlzVGV4dChub2RlKSkge1xuICAgICAgICB2YXIgaXNGaXJzdCA9IFBhdGguZXF1YWxzKHBhdGgsIGZpcnN0LnBhdGgpOyAvLyBQcm9vZiB0aGF0IHdlIGFsd2F5cyBleGhhdXN0IHRleHQgbm9kZXMgYmVmb3JlIGVuY291bnRlcmluZyBhIG5ldyBvbmU6XG4gICAgICAgIC8vICAgY29uc29sZS5hc3NlcnQobGVhZlRleHRSZW1haW5pbmcgPD0gMCxcbiAgICAgICAgLy8gICAgIGBsZWFmVGV4dFJlbWFpbmluZz0ke2xlYWZUZXh0UmVtYWluaW5nfSAtIGArXG4gICAgICAgIC8vICAgICBgbm90IGV4aGF1c3RlZCBiZWZvcmUgbmV3IGxlYWYgdGV4dCBub2RlYCwgcGF0aClcbiAgICAgICAgLy8gUmVzZXQgYGxlYWZUZXh0YCBjb3VudGVycyBmb3IgbmV3IHRleHQgbm9kZS5cblxuICAgICAgICBpZiAoaXNGaXJzdCkge1xuICAgICAgICAgIGxlYWZUZXh0UmVtYWluaW5nID0gcmV2ZXJzZSA/IGZpcnN0Lm9mZnNldCA6IG5vZGUudGV4dC5sZW5ndGggLSBmaXJzdC5vZmZzZXQ7XG4gICAgICAgICAgbGVhZlRleHRPZmZzZXQgPSBmaXJzdC5vZmZzZXQ7IC8vIFdvcmtzIGZvciByZXZlcnNlIHRvby5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZWFmVGV4dFJlbWFpbmluZyA9IG5vZGUudGV4dC5sZW5ndGg7XG4gICAgICAgICAgbGVhZlRleHRPZmZzZXQgPSByZXZlcnNlID8gbGVhZlRleHRSZW1haW5pbmcgOiAwO1xuICAgICAgICB9IC8vIFlpZWxkIHBvc2l0aW9uIGF0IHRoZSBzdGFydCBvZiBub2RlIChwb3RlbnRpYWxseSkuXG5cblxuICAgICAgICBpZiAoaXNGaXJzdCB8fCBpc05ld0Jsb2NrIHx8IHVuaXQgPT09ICdvZmZzZXQnKSB7XG4gICAgICAgICAgeWllbGQge1xuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIG9mZnNldDogbGVhZlRleHRPZmZzZXRcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlzTmV3QmxvY2sgPSBmYWxzZTtcbiAgICAgICAgfSAvLyBZaWVsZCBwb3NpdGlvbnMgZXZlcnkgKGR5bmFtaWNhbGx5IGNhbGN1bGF0ZWQpIGBkaXN0YW5jZWAgb2Zmc2V0LlxuXG5cbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAvLyBJZiBgbGVhZlRleHRgIGhhcyBjYXVnaHQgdXAgd2l0aCBgYmxvY2tUZXh0YCAoZGlzdGFuY2U9MCksXG4gICAgICAgICAgLy8gYW5kIGlmIGJsb2NrVGV4dCBpcyBleGhhdXN0ZWQsIGJyZWFrIHRvIGdldCBhbm90aGVyIGJsb2NrIG5vZGUsXG4gICAgICAgICAgLy8gb3RoZXJ3aXNlIGFkdmFuY2UgYmxvY2tUZXh0IGZvcndhcmQgYnkgdGhlIG5ldyBgZGlzdGFuY2VgLlxuICAgICAgICAgIGlmIChkaXN0YW5jZSA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKGJsb2NrVGV4dCA9PT0gJycpIGJyZWFrO1xuICAgICAgICAgICAgZGlzdGFuY2UgPSBjYWxjRGlzdGFuY2UoYmxvY2tUZXh0LCB1bml0LCByZXZlcnNlKTsgLy8gU3BsaXQgdGhlIHN0cmluZyBhdCB0aGUgcHJldmlvdXNseSBmb3VuZCBkaXN0YW5jZSBhbmQgdXNlIHRoZVxuICAgICAgICAgICAgLy8gcmVtYWluaW5nIHN0cmluZyBmb3IgdGhlIG5leHQgaXRlcmF0aW9uLlxuXG4gICAgICAgICAgICBibG9ja1RleHQgPSBzcGxpdEJ5Q2hhcmFjdGVyRGlzdGFuY2UoYmxvY2tUZXh0LCBkaXN0YW5jZSwgcmV2ZXJzZSlbMV07XG4gICAgICAgICAgfSAvLyBBZHZhbmNlIGBsZWFmVGV4dGAgYnkgdGhlIGN1cnJlbnQgYGRpc3RhbmNlYC5cblxuXG4gICAgICAgICAgbGVhZlRleHRPZmZzZXQgPSByZXZlcnNlID8gbGVhZlRleHRPZmZzZXQgLSBkaXN0YW5jZSA6IGxlYWZUZXh0T2Zmc2V0ICsgZGlzdGFuY2U7XG4gICAgICAgICAgbGVhZlRleHRSZW1haW5pbmcgPSBsZWFmVGV4dFJlbWFpbmluZyAtIGRpc3RhbmNlOyAvLyBJZiBgbGVhZlRleHRgIGlzIGV4aGF1c3RlZCwgYnJlYWsgdG8gZ2V0IGEgbmV3IGxlYWYgbm9kZVxuICAgICAgICAgIC8vIGFuZCBzZXQgZGlzdGFuY2UgdG8gdGhlIG92ZXJmbG93IGFtb3VudCwgc28gd2UnbGwgKG1heWJlKVxuICAgICAgICAgIC8vIGNhdGNoIHVwIHRvIGJsb2NrVGV4dCBpbiB0aGUgbmV4dCBsZWFmIHRleHQgbm9kZS5cblxuICAgICAgICAgIGlmIChsZWFmVGV4dFJlbWFpbmluZyA8IDApIHtcbiAgICAgICAgICAgIGRpc3RhbmNlID0gLWxlYWZUZXh0UmVtYWluaW5nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfSAvLyBTdWNjZXNzZnVsbHkgd2Fsa2VkIGBkaXN0YW5jZWAgb2Zmc2V0cyB0aHJvdWdoIGBsZWFmVGV4dGBcbiAgICAgICAgICAvLyB0byBjYXRjaCB1cCB3aXRoIGBibG9ja1RleHRgLCBzbyB3ZSBjYW4gcmVzZXQgYGRpc3RhbmNlYFxuICAgICAgICAgIC8vIGFuZCB5aWVsZCB0aGlzIHBvc2l0aW9uIGluIHRoaXMgbm9kZS5cblxuXG4gICAgICAgICAgZGlzdGFuY2UgPSAwO1xuICAgICAgICAgIHlpZWxkIHtcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBvZmZzZXQ6IGxlYWZUZXh0T2Zmc2V0XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gUHJvb2YgdGhhdCB1cG9uIGNvbXBsZXRpb24sIHdlJ3ZlIGV4YWh1c3RlZCBib3RoIGxlYWYgYW5kIGJsb2NrIHRleHQ6XG4gICAgLy8gICBjb25zb2xlLmFzc2VydChsZWFmVGV4dFJlbWFpbmluZyA8PSAwLCBcImxlYWZUZXh0IHdhc24ndCBleGhhdXN0ZWRcIilcbiAgICAvLyAgIGNvbnNvbGUuYXNzZXJ0KGJsb2NrVGV4dCA9PT0gJycsIFwiYmxvY2tUZXh0IHdhc24ndCBleGhhdXN0ZWRcIilcbiAgICAvLyBIZWxwZXI6XG4gICAgLy8gUmV0dXJuIHRoZSBkaXN0YW5jZSBpbiBvZmZzZXRzIGZvciBhIHN0ZXAgb2Ygc2l6ZSBgdW5pdGAgb24gZ2l2ZW4gc3RyaW5nLlxuXG5cbiAgICBmdW5jdGlvbiBjYWxjRGlzdGFuY2UodGV4dCwgdW5pdCwgcmV2ZXJzZSkge1xuICAgICAgaWYgKHVuaXQgPT09ICdjaGFyYWN0ZXInKSB7XG4gICAgICAgIHJldHVybiBnZXRDaGFyYWN0ZXJEaXN0YW5jZSh0ZXh0LCByZXZlcnNlKTtcbiAgICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ3dvcmQnKSB7XG4gICAgICAgIHJldHVybiBnZXRXb3JkRGlzdGFuY2UodGV4dCwgcmV2ZXJzZSk7XG4gICAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdsaW5lJyB8fCB1bml0ID09PSAnYmxvY2snKSB7XG4gICAgICAgIHJldHVybiB0ZXh0Lmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgbWF0Y2hpbmcgbm9kZSBpbiB0aGUgYnJhbmNoIG9mIHRoZSBkb2N1bWVudCBiZWZvcmUgYSBsb2NhdGlvbi5cclxuICAgKi9cbiAgcHJldmlvdXMoZWRpdG9yKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICBtb2RlID0gJ2xvd2VzdCcsXG4gICAgICB2b2lkcyA9IGZhbHNlXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgdmFyIHtcbiAgICAgIG1hdGNoLFxuICAgICAgYXQgPSBlZGl0b3Iuc2VsZWN0aW9uXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICBpZiAoIWF0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBvaW50QmVmb3JlTG9jYXRpb24gPSBFZGl0b3IuYmVmb3JlKGVkaXRvciwgYXQsIHtcbiAgICAgIHZvaWRzXG4gICAgfSk7XG5cbiAgICBpZiAoIXBvaW50QmVmb3JlTG9jYXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgWywgdG9dID0gRWRpdG9yLmZpcnN0KGVkaXRvciwgW10pOyAvLyBUaGUgc2VhcmNoIGxvY2F0aW9uIGlzIGZyb20gdGhlIHN0YXJ0IG9mIHRoZSBkb2N1bWVudCB0byB0aGUgcGF0aCBvZlxuICAgIC8vIHRoZSBwb2ludCBiZWZvcmUgdGhlIGxvY2F0aW9uIHBhc3NlZCBpblxuXG4gICAgdmFyIHNwYW4gPSBbcG9pbnRCZWZvcmVMb2NhdGlvbi5wYXRoLCB0b107XG5cbiAgICBpZiAoUGF0aC5pc1BhdGgoYXQpICYmIGF0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGdldCB0aGUgcHJldmlvdXMgbm9kZSBmcm9tIHRoZSByb290IG5vZGUhXCIpO1xuICAgIH1cblxuICAgIGlmIChtYXRjaCA9PSBudWxsKSB7XG4gICAgICBpZiAoUGF0aC5pc1BhdGgoYXQpKSB7XG4gICAgICAgIHZhciBbcGFyZW50XSA9IEVkaXRvci5wYXJlbnQoZWRpdG9yLCBhdCk7XG5cbiAgICAgICAgbWF0Y2ggPSBuID0+IHBhcmVudC5jaGlsZHJlbi5pbmNsdWRlcyhuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1hdGNoID0gKCkgPT4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgW3ByZXZpb3VzXSA9IEVkaXRvci5ub2RlcyhlZGl0b3IsIHtcbiAgICAgIHJldmVyc2U6IHRydWUsXG4gICAgICBhdDogc3BhbixcbiAgICAgIG1hdGNoLFxuICAgICAgbW9kZSxcbiAgICAgIHZvaWRzXG4gICAgfSk7XG4gICAgcmV0dXJuIHByZXZpb3VzO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCBhIHJhbmdlIG9mIGEgbG9jYXRpb24uXHJcbiAgICovXG4gIHJhbmdlKGVkaXRvciwgYXQsIHRvKSB7XG4gICAgaWYgKFJhbmdlLmlzUmFuZ2UoYXQpICYmICF0bykge1xuICAgICAgcmV0dXJuIGF0O1xuICAgIH1cblxuICAgIHZhciBzdGFydCA9IEVkaXRvci5zdGFydChlZGl0b3IsIGF0KTtcbiAgICB2YXIgZW5kID0gRWRpdG9yLmVuZChlZGl0b3IsIHRvIHx8IGF0KTtcbiAgICByZXR1cm4ge1xuICAgICAgYW5jaG9yOiBzdGFydCxcbiAgICAgIGZvY3VzOiBlbmRcbiAgICB9O1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG11dGFibGUgcmVmIGZvciBhIGBSYW5nZWAgb2JqZWN0LCB3aGljaCB3aWxsIHN0YXkgaW4gc3luYyBhcyBuZXdcclxuICAgKiBvcGVyYXRpb25zIGFyZSBhcHBsaWVkIHRvIHRoZSBlZGl0b3IuXHJcbiAgICovXG4gIHJhbmdlUmVmKGVkaXRvciwgcmFuZ2UpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIHtcbiAgICAgIGFmZmluaXR5ID0gJ2ZvcndhcmQnXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgdmFyIHJlZiA9IHtcbiAgICAgIGN1cnJlbnQ6IHJhbmdlLFxuICAgICAgYWZmaW5pdHksXG5cbiAgICAgIHVucmVmKCkge1xuICAgICAgICB2YXIge1xuICAgICAgICAgIGN1cnJlbnRcbiAgICAgICAgfSA9IHJlZjtcbiAgICAgICAgdmFyIHJhbmdlUmVmcyA9IEVkaXRvci5yYW5nZVJlZnMoZWRpdG9yKTtcbiAgICAgICAgcmFuZ2VSZWZzLmRlbGV0ZShyZWYpO1xuICAgICAgICByZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgICAgfVxuXG4gICAgfTtcbiAgICB2YXIgcmVmcyA9IEVkaXRvci5yYW5nZVJlZnMoZWRpdG9yKTtcbiAgICByZWZzLmFkZChyZWYpO1xuICAgIHJldHVybiByZWY7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBzZXQgb2YgY3VycmVudGx5IHRyYWNrZWQgcmFuZ2UgcmVmcyBvZiB0aGUgZWRpdG9yLlxyXG4gICAqL1xuICByYW5nZVJlZnMoZWRpdG9yKSB7XG4gICAgdmFyIHJlZnMgPSBSQU5HRV9SRUZTLmdldChlZGl0b3IpO1xuXG4gICAgaWYgKCFyZWZzKSB7XG4gICAgICByZWZzID0gbmV3IFNldCgpO1xuICAgICAgUkFOR0VfUkVGUy5zZXQoZWRpdG9yLCByZWZzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmcztcbiAgfSxcblxuICAvKipcclxuICAgKiBSZW1vdmUgYSBjdXN0b20gcHJvcGVydHkgZnJvbSBhbGwgb2YgdGhlIGxlYWYgdGV4dCBub2RlcyBpbiB0aGUgY3VycmVudFxyXG4gICAqIHNlbGVjdGlvbi5cclxuICAgKlxyXG4gICAqIElmIHRoZSBzZWxlY3Rpb24gaXMgY3VycmVudGx5IGNvbGxhcHNlZCwgdGhlIHJlbW92YWwgd2lsbCBiZSBzdG9yZWQgb25cclxuICAgKiBgZWRpdG9yLm1hcmtzYCBhbmQgYXBwbGllZCB0byB0aGUgdGV4dCBpbnNlcnRlZCBuZXh0LlxyXG4gICAqL1xuICByZW1vdmVNYXJrKGVkaXRvciwga2V5KSB7XG4gICAgZWRpdG9yLnJlbW92ZU1hcmsoa2V5KTtcbiAgfSxcblxuICAvKipcclxuICAgKiBNYW51YWxseSBzZXQgaWYgdGhlIGVkaXRvciBzaG91bGQgY3VycmVudGx5IGJlIG5vcm1hbGl6aW5nLlxyXG4gICAqXHJcbiAgICogTm90ZTogVXNpbmcgdGhpcyBpbmNvcnJlY3RseSBjYW4gbGVhdmUgdGhlIGVkaXRvciBpbiBhbiBpbnZhbGlkIHN0YXRlLlxyXG4gICAqXHJcbiAgICovXG4gIHNldE5vcm1hbGl6aW5nKGVkaXRvciwgaXNOb3JtYWxpemluZykge1xuICAgIE5PUk1BTElaSU5HLnNldChlZGl0b3IsIGlzTm9ybWFsaXppbmcpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgc3RhcnQgcG9pbnQgb2YgYSBsb2NhdGlvbi5cclxuICAgKi9cbiAgc3RhcnQoZWRpdG9yLCBhdCkge1xuICAgIHJldHVybiBFZGl0b3IucG9pbnQoZWRpdG9yLCBhdCwge1xuICAgICAgZWRnZTogJ3N0YXJ0J1xuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgdGV4dCBzdHJpbmcgY29udGVudCBvZiBhIGxvY2F0aW9uLlxyXG4gICAqXHJcbiAgICogTm90ZTogYnkgZGVmYXVsdCB0aGUgdGV4dCBvZiB2b2lkIG5vZGVzIGlzIGNvbnNpZGVyZWQgdG8gYmUgYW4gZW1wdHlcclxuICAgKiBzdHJpbmcsIHJlZ2FyZGxlc3Mgb2YgY29udGVudCwgdW5sZXNzIHlvdSBwYXNzIGluIHRydWUgZm9yIHRoZSB2b2lkcyBvcHRpb25cclxuICAgKi9cbiAgc3RyaW5nKGVkaXRvciwgYXQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIHtcbiAgICAgIHZvaWRzID0gZmFsc2VcbiAgICB9ID0gb3B0aW9ucztcbiAgICB2YXIgcmFuZ2UgPSBFZGl0b3IucmFuZ2UoZWRpdG9yLCBhdCk7XG4gICAgdmFyIFtzdGFydCwgZW5kXSA9IFJhbmdlLmVkZ2VzKHJhbmdlKTtcbiAgICB2YXIgdGV4dCA9ICcnO1xuXG4gICAgZm9yICh2YXIgW25vZGUsIHBhdGhdIG9mIEVkaXRvci5ub2RlcyhlZGl0b3IsIHtcbiAgICAgIGF0OiByYW5nZSxcbiAgICAgIG1hdGNoOiBUZXh0LmlzVGV4dCxcbiAgICAgIHZvaWRzXG4gICAgfSkpIHtcbiAgICAgIHZhciB0ID0gbm9kZS50ZXh0O1xuXG4gICAgICBpZiAoUGF0aC5lcXVhbHMocGF0aCwgZW5kLnBhdGgpKSB7XG4gICAgICAgIHQgPSB0LnNsaWNlKDAsIGVuZC5vZmZzZXQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoUGF0aC5lcXVhbHMocGF0aCwgc3RhcnQucGF0aCkpIHtcbiAgICAgICAgdCA9IHQuc2xpY2Uoc3RhcnQub2Zmc2V0KTtcbiAgICAgIH1cblxuICAgICAgdGV4dCArPSB0O1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0O1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENvbnZlcnQgYSByYW5nZSBpbnRvIGEgbm9uLWhhbmdpbmcgb25lLlxyXG4gICAqL1xuICB1bmhhbmdSYW5nZShlZGl0b3IsIHJhbmdlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICB2b2lkcyA9IGZhbHNlXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgdmFyIFtzdGFydCwgZW5kXSA9IFJhbmdlLmVkZ2VzKHJhbmdlKTsgLy8gUEVSRjogZXhpdCBlYXJseSBpZiB3ZSBjYW4gZ3VhcmFudGVlIHRoYXQgdGhlIHJhbmdlIGlzbid0IGhhbmdpbmcuXG5cbiAgICBpZiAoc3RhcnQub2Zmc2V0ICE9PSAwIHx8IGVuZC5vZmZzZXQgIT09IDAgfHwgUmFuZ2UuaXNDb2xsYXBzZWQocmFuZ2UpKSB7XG4gICAgICByZXR1cm4gcmFuZ2U7XG4gICAgfVxuXG4gICAgdmFyIGVuZEJsb2NrID0gRWRpdG9yLmFib3ZlKGVkaXRvciwge1xuICAgICAgYXQ6IGVuZCxcbiAgICAgIG1hdGNoOiBuID0+IEVkaXRvci5pc0Jsb2NrKGVkaXRvciwgbilcbiAgICB9KTtcbiAgICB2YXIgYmxvY2tQYXRoID0gZW5kQmxvY2sgPyBlbmRCbG9ja1sxXSA6IFtdO1xuICAgIHZhciBmaXJzdCA9IEVkaXRvci5zdGFydChlZGl0b3IsIFtdKTtcbiAgICB2YXIgYmVmb3JlID0ge1xuICAgICAgYW5jaG9yOiBmaXJzdCxcbiAgICAgIGZvY3VzOiBlbmRcbiAgICB9O1xuICAgIHZhciBza2lwID0gdHJ1ZTtcblxuICAgIGZvciAodmFyIFtub2RlLCBwYXRoXSBvZiBFZGl0b3Iubm9kZXMoZWRpdG9yLCB7XG4gICAgICBhdDogYmVmb3JlLFxuICAgICAgbWF0Y2g6IFRleHQuaXNUZXh0LFxuICAgICAgcmV2ZXJzZTogdHJ1ZSxcbiAgICAgIHZvaWRzXG4gICAgfSkpIHtcbiAgICAgIGlmIChza2lwKSB7XG4gICAgICAgIHNraXAgPSBmYWxzZTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLnRleHQgIT09ICcnIHx8IFBhdGguaXNCZWZvcmUocGF0aCwgYmxvY2tQYXRoKSkge1xuICAgICAgICBlbmQgPSB7XG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICBvZmZzZXQ6IG5vZGUudGV4dC5sZW5ndGhcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFuY2hvcjogc3RhcnQsXG4gICAgICBmb2N1czogZW5kXG4gICAgfTtcbiAgfSxcblxuICAvKipcclxuICAgKiBNYXRjaCBhIHZvaWQgbm9kZSBpbiB0aGUgY3VycmVudCBicmFuY2ggb2YgdGhlIGVkaXRvci5cclxuICAgKi9cbiAgdm9pZChlZGl0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgcmV0dXJuIEVkaXRvci5hYm92ZShlZGl0b3IsIF9vYmplY3RTcHJlYWQkOChfb2JqZWN0U3ByZWFkJDgoe30sIG9wdGlvbnMpLCB7fSwge1xuICAgICAgbWF0Y2g6IG4gPT4gRWRpdG9yLmlzVm9pZChlZGl0b3IsIG4pXG4gICAgfSkpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENhbGwgYSBmdW5jdGlvbiwgZGVmZXJyaW5nIG5vcm1hbGl6YXRpb24gdW50aWwgYWZ0ZXIgaXQgY29tcGxldGVzLlxyXG4gICAqL1xuICB3aXRob3V0Tm9ybWFsaXppbmcoZWRpdG9yLCBmbikge1xuICAgIHZhciB2YWx1ZSA9IEVkaXRvci5pc05vcm1hbGl6aW5nKGVkaXRvcik7XG4gICAgRWRpdG9yLnNldE5vcm1hbGl6aW5nKGVkaXRvciwgZmFsc2UpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZuKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIEVkaXRvci5zZXROb3JtYWxpemluZyhlZGl0b3IsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBFZGl0b3Iubm9ybWFsaXplKGVkaXRvcik7XG4gIH1cblxufTtcblxudmFyIExvY2F0aW9uID0ge1xuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGltcGxlbWVudHMgdGhlIGBMb2NhdGlvbmAgaW50ZXJmYWNlLlxyXG4gICAqL1xuICBpc0xvY2F0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIFBhdGguaXNQYXRoKHZhbHVlKSB8fCBQb2ludC5pc1BvaW50KHZhbHVlKSB8fCBSYW5nZS5pc1JhbmdlKHZhbHVlKTtcbiAgfVxuXG59O1xudmFyIFNwYW4gPSB7XG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaW1wbGVtZW50cyB0aGUgYFNwYW5gIGludGVyZmFjZS5cclxuICAgKi9cbiAgaXNTcGFuKHZhbHVlKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMiAmJiB2YWx1ZS5ldmVyeShQYXRoLmlzUGF0aCk7XG4gIH1cblxufTtcblxudmFyIF9leGNsdWRlZCQzID0gW1wiY2hpbGRyZW5cIl0sXG4gICAgX2V4Y2x1ZGVkMiQyID0gW1widGV4dFwiXTtcbnZhciBJU19OT0RFX0xJU1RfQ0FDSEUgPSBuZXcgV2Vha01hcCgpO1xudmFyIE5vZGUgPSB7XG4gIC8qKlxyXG4gICAqIEdldCB0aGUgbm9kZSBhdCBhIHNwZWNpZmljIHBhdGgsIGFzc2VydGluZyB0aGF0IGl0J3MgYW4gYW5jZXN0b3Igbm9kZS5cclxuICAgKi9cbiAgYW5jZXN0b3Iocm9vdCwgcGF0aCkge1xuICAgIHZhciBub2RlID0gTm9kZS5nZXQocm9vdCwgcGF0aCk7XG5cbiAgICBpZiAoVGV4dC5pc1RleHQobm9kZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBnZXQgdGhlIGFuY2VzdG9yIG5vZGUgYXQgcGF0aCBbXCIuY29uY2F0KHBhdGgsIFwiXSBiZWNhdXNlIGl0IHJlZmVycyB0byBhIHRleHQgbm9kZSBpbnN0ZWFkOiBcIikuY29uY2F0KG5vZGUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcblxuICAvKipcclxuICAgKiBSZXR1cm4gYSBnZW5lcmF0b3Igb2YgYWxsIHRoZSBhbmNlc3RvciBub2RlcyBhYm92ZSBhIHNwZWNpZmljIHBhdGguXHJcbiAgICpcclxuICAgKiBCeSBkZWZhdWx0IHRoZSBvcmRlciBpcyBib3R0b20tdXAsIGZyb20gbG93ZXN0IHRvIGhpZ2hlc3QgYW5jZXN0b3IgaW5cclxuICAgKiB0aGUgdHJlZSwgYnV0IHlvdSBjYW4gcGFzcyB0aGUgYHJldmVyc2U6IHRydWVgIG9wdGlvbiB0byBnbyB0b3AtZG93bi5cclxuICAgKi9cbiAgKmFuY2VzdG9ycyhyb290LCBwYXRoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXG4gICAgZm9yICh2YXIgcCBvZiBQYXRoLmFuY2VzdG9ycyhwYXRoLCBvcHRpb25zKSkge1xuICAgICAgdmFyIG4gPSBOb2RlLmFuY2VzdG9yKHJvb3QsIHApO1xuICAgICAgdmFyIGVudHJ5ID0gW24sIHBdO1xuICAgICAgeWllbGQgZW50cnk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgY2hpbGQgb2YgYSBub2RlIGF0IGEgc3BlY2lmaWMgaW5kZXguXHJcbiAgICovXG4gIGNoaWxkKHJvb3QsIGluZGV4KSB7XG4gICAgaWYgKFRleHQuaXNUZXh0KHJvb3QpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZ2V0IHRoZSBjaGlsZCBvZiBhIHRleHQgbm9kZTogXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KHJvb3QpKSk7XG4gICAgfVxuXG4gICAgdmFyIGMgPSByb290LmNoaWxkcmVuW2luZGV4XTtcblxuICAgIGlmIChjID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBnZXQgY2hpbGQgYXQgaW5kZXggYFwiLmNvbmNhdChpbmRleCwgXCJgIGluIG5vZGU6IFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkocm9vdCkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYztcbiAgfSxcblxuICAvKipcclxuICAgKiBJdGVyYXRlIG92ZXIgdGhlIGNoaWxkcmVuIG9mIGEgbm9kZSBhdCBhIHNwZWNpZmljIHBhdGguXHJcbiAgICovXG4gICpjaGlsZHJlbihyb290LCBwYXRoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICByZXZlcnNlID0gZmFsc2VcbiAgICB9ID0gb3B0aW9ucztcbiAgICB2YXIgYW5jZXN0b3IgPSBOb2RlLmFuY2VzdG9yKHJvb3QsIHBhdGgpO1xuICAgIHZhciB7XG4gICAgICBjaGlsZHJlblxuICAgIH0gPSBhbmNlc3RvcjtcbiAgICB2YXIgaW5kZXggPSByZXZlcnNlID8gY2hpbGRyZW4ubGVuZ3RoIC0gMSA6IDA7XG5cbiAgICB3aGlsZSAocmV2ZXJzZSA/IGluZGV4ID49IDAgOiBpbmRleCA8IGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgdmFyIGNoaWxkID0gTm9kZS5jaGlsZChhbmNlc3RvciwgaW5kZXgpO1xuICAgICAgdmFyIGNoaWxkUGF0aCA9IHBhdGguY29uY2F0KGluZGV4KTtcbiAgICAgIHlpZWxkIFtjaGlsZCwgY2hpbGRQYXRoXTtcbiAgICAgIGluZGV4ID0gcmV2ZXJzZSA/IGluZGV4IC0gMSA6IGluZGV4ICsgMTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IGFuIGVudHJ5IGZvciB0aGUgY29tbW9uIGFuY2VzZXRvciBub2RlIG9mIHR3byBwYXRocy5cclxuICAgKi9cbiAgY29tbW9uKHJvb3QsIHBhdGgsIGFub3RoZXIpIHtcbiAgICB2YXIgcCA9IFBhdGguY29tbW9uKHBhdGgsIGFub3RoZXIpO1xuICAgIHZhciBuID0gTm9kZS5nZXQocm9vdCwgcCk7XG4gICAgcmV0dXJuIFtuLCBwXTtcbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIG5vZGUgYXQgYSBzcGVjaWZpYyBwYXRoLCBhc3NlcnRpbmcgdGhhdCBpdCdzIGEgZGVzY2VuZGFudCBub2RlLlxyXG4gICAqL1xuICBkZXNjZW5kYW50KHJvb3QsIHBhdGgpIHtcbiAgICB2YXIgbm9kZSA9IE5vZGUuZ2V0KHJvb3QsIHBhdGgpO1xuXG4gICAgaWYgKEVkaXRvci5pc0VkaXRvcihub2RlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGdldCB0aGUgZGVzY2VuZGFudCBub2RlIGF0IHBhdGggW1wiLmNvbmNhdChwYXRoLCBcIl0gYmVjYXVzZSBpdCByZWZlcnMgdG8gdGhlIHJvb3QgZWRpdG9yIG5vZGUgaW5zdGVhZDogXCIpLmNvbmNhdChub2RlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogUmV0dXJuIGEgZ2VuZXJhdG9yIG9mIGFsbCB0aGUgZGVzY2VuZGFudCBub2RlIGVudHJpZXMgaW5zaWRlIGEgcm9vdCBub2RlLlxyXG4gICAqL1xuICAqZGVzY2VuZGFudHMocm9vdCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIGZvciAodmFyIFtub2RlLCBwYXRoXSBvZiBOb2RlLm5vZGVzKHJvb3QsIG9wdGlvbnMpKSB7XG4gICAgICBpZiAocGF0aC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgLy8gTk9URTogd2UgaGF2ZSB0byBjb2VyY2UgaGVyZSBiZWNhdXNlIGNoZWNraW5nIHRoZSBwYXRoJ3MgbGVuZ3RoIGRvZXNcbiAgICAgICAgLy8gZ3VhcmFudGVlIHRoYXQgYG5vZGVgIGlzIG5vdCBhIGBFZGl0b3JgLCBidXQgVHlwZVNjcmlwdCBkb2Vzbid0IGtub3cuXG4gICAgICAgIHlpZWxkIFtub2RlLCBwYXRoXTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogUmV0dXJuIGEgZ2VuZXJhdG9yIG9mIGFsbCB0aGUgZWxlbWVudCBub2RlcyBpbnNpZGUgYSByb290IG5vZGUuIEVhY2ggaXRlcmF0aW9uXHJcbiAgICogd2lsbCByZXR1cm4gYW4gYEVsZW1lbnRFbnRyeWAgdHVwbGUgY29uc2lzdGluZyBvZiBgW0VsZW1lbnQsIFBhdGhdYC4gSWYgdGhlXHJcbiAgICogcm9vdCBub2RlIGlzIGFuIGVsZW1lbnQgaXQgd2lsbCBiZSBpbmNsdWRlZCBpbiB0aGUgaXRlcmF0aW9uIGFzIHdlbGwuXHJcbiAgICovXG4gICplbGVtZW50cyhyb290KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgZm9yICh2YXIgW25vZGUsIHBhdGhdIG9mIE5vZGUubm9kZXMocm9vdCwgb3B0aW9ucykpIHtcbiAgICAgIGlmIChFbGVtZW50LmlzRWxlbWVudChub2RlKSkge1xuICAgICAgICB5aWVsZCBbbm9kZSwgcGF0aF07XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxyXG4gICAqIEV4dHJhY3QgcHJvcHMgZnJvbSBhIE5vZGUuXHJcbiAgICovXG4gIGV4dHJhY3RQcm9wcyhub2RlKSB7XG4gICAgaWYgKEVsZW1lbnQuaXNBbmNlc3Rvcihub2RlKSkge1xuICAgICAgdmFyIHByb3BlcnRpZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMobm9kZSwgX2V4Y2x1ZGVkJDMpO1xuXG4gICAgICByZXR1cm4gcHJvcGVydGllcztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHByb3BlcnRpZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMobm9kZSwgX2V4Y2x1ZGVkMiQyKTtcblxuICAgICAgcmV0dXJuIHByb3BlcnRpZXM7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgZmlyc3Qgbm9kZSBlbnRyeSBpbiBhIHJvb3Qgbm9kZSBmcm9tIGEgcGF0aC5cclxuICAgKi9cbiAgZmlyc3Qocm9vdCwgcGF0aCkge1xuICAgIHZhciBwID0gcGF0aC5zbGljZSgpO1xuICAgIHZhciBuID0gTm9kZS5nZXQocm9vdCwgcCk7XG5cbiAgICB3aGlsZSAobikge1xuICAgICAgaWYgKFRleHQuaXNUZXh0KG4pIHx8IG4uY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbiA9IG4uY2hpbGRyZW5bMF07XG4gICAgICAgIHAucHVzaCgwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW24sIHBdO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgc2xpY2VkIGZyYWdtZW50IHJlcHJlc2VudGVkIGJ5IGEgcmFuZ2UgaW5zaWRlIGEgcm9vdCBub2RlLlxyXG4gICAqL1xuICBmcmFnbWVudChyb290LCByYW5nZSkge1xuICAgIGlmIChUZXh0LmlzVGV4dChyb290KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGdldCBhIGZyYWdtZW50IHN0YXJ0aW5nIGZyb20gYSByb290IHRleHQgbm9kZTogXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KHJvb3QpKSk7XG4gICAgfVxuXG4gICAgdmFyIG5ld1Jvb3QgPSBwcm9kdWNlKHtcbiAgICAgIGNoaWxkcmVuOiByb290LmNoaWxkcmVuXG4gICAgfSwgciA9PiB7XG4gICAgICB2YXIgW3N0YXJ0LCBlbmRdID0gUmFuZ2UuZWRnZXMocmFuZ2UpO1xuICAgICAgdmFyIG5vZGVFbnRyaWVzID0gTm9kZS5ub2RlcyhyLCB7XG4gICAgICAgIHJldmVyc2U6IHRydWUsXG4gICAgICAgIHBhc3M6IF9yZWYgPT4ge1xuICAgICAgICAgIHZhciBbLCBwYXRoXSA9IF9yZWY7XG4gICAgICAgICAgcmV0dXJuICFSYW5nZS5pbmNsdWRlcyhyYW5nZSwgcGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBmb3IgKHZhciBbLCBwYXRoXSBvZiBub2RlRW50cmllcykge1xuICAgICAgICBpZiAoIVJhbmdlLmluY2x1ZGVzKHJhbmdlLCBwYXRoKSkge1xuICAgICAgICAgIHZhciBwYXJlbnQgPSBOb2RlLnBhcmVudChyLCBwYXRoKTtcbiAgICAgICAgICB2YXIgaW5kZXggPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG4gICAgICAgICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoUGF0aC5lcXVhbHMocGF0aCwgZW5kLnBhdGgpKSB7XG4gICAgICAgICAgdmFyIGxlYWYgPSBOb2RlLmxlYWYociwgcGF0aCk7XG4gICAgICAgICAgbGVhZi50ZXh0ID0gbGVhZi50ZXh0LnNsaWNlKDAsIGVuZC5vZmZzZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFBhdGguZXF1YWxzKHBhdGgsIHN0YXJ0LnBhdGgpKSB7XG4gICAgICAgICAgdmFyIF9sZWFmID0gTm9kZS5sZWFmKHIsIHBhdGgpO1xuXG4gICAgICAgICAgX2xlYWYudGV4dCA9IF9sZWFmLnRleHQuc2xpY2Uoc3RhcnQub2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoRWRpdG9yLmlzRWRpdG9yKHIpKSB7XG4gICAgICAgIHIuc2VsZWN0aW9uID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbmV3Um9vdC5jaGlsZHJlbjtcbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIGRlc2NlbmRhbnQgbm9kZSByZWZlcnJlZCB0byBieSBhIHNwZWNpZmljIHBhdGguIElmIHRoZSBwYXRoIGlzIGFuXHJcbiAgICogZW1wdHkgYXJyYXksIGl0IHJlZmVycyB0byB0aGUgcm9vdCBub2RlIGl0c2VsZi5cclxuICAgKi9cbiAgZ2V0KHJvb3QsIHBhdGgpIHtcbiAgICB2YXIgbm9kZSA9IHJvb3Q7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwID0gcGF0aFtpXTtcblxuICAgICAgaWYgKFRleHQuaXNUZXh0KG5vZGUpIHx8ICFub2RlLmNoaWxkcmVuW3BdKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIGEgZGVzY2VuZGFudCBhdCBwYXRoIFtcIi5jb25jYXQocGF0aCwgXCJdIGluIG5vZGU6IFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkocm9vdCkpKTtcbiAgICAgIH1cblxuICAgICAgbm9kZSA9IG5vZGUuY2hpbGRyZW5bcF07XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBkZXNjZW5kYW50IG5vZGUgZXhpc3RzIGF0IGEgc3BlY2lmaWMgcGF0aC5cclxuICAgKi9cbiAgaGFzKHJvb3QsIHBhdGgpIHtcbiAgICB2YXIgbm9kZSA9IHJvb3Q7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwID0gcGF0aFtpXTtcblxuICAgICAgaWYgKFRleHQuaXNUZXh0KG5vZGUpIHx8ICFub2RlLmNoaWxkcmVuW3BdKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgbm9kZSA9IG5vZGUuY2hpbGRyZW5bcF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSB2YWx1ZSBpbXBsZW1lbnRzIHRoZSBgTm9kZWAgaW50ZXJmYWNlLlxyXG4gICAqL1xuICBpc05vZGUodmFsdWUpIHtcbiAgICByZXR1cm4gVGV4dC5pc1RleHQodmFsdWUpIHx8IEVsZW1lbnQuaXNFbGVtZW50KHZhbHVlKSB8fCBFZGl0b3IuaXNFZGl0b3IodmFsdWUpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYSBsaXN0IG9mIGBOb2RlYCBvYmplY3RzLlxyXG4gICAqL1xuICBpc05vZGVMaXN0KHZhbHVlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBjYWNoZWRSZXN1bHQgPSBJU19OT0RFX0xJU1RfQ0FDSEUuZ2V0KHZhbHVlKTtcblxuICAgIGlmIChjYWNoZWRSZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGNhY2hlZFJlc3VsdDtcbiAgICB9XG5cbiAgICB2YXIgaXNOb2RlTGlzdCA9IHZhbHVlLmV2ZXJ5KHZhbCA9PiBOb2RlLmlzTm9kZSh2YWwpKTtcbiAgICBJU19OT0RFX0xJU1RfQ0FDSEUuc2V0KHZhbHVlLCBpc05vZGVMaXN0KTtcbiAgICByZXR1cm4gaXNOb2RlTGlzdDtcbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIGxhc3Qgbm9kZSBlbnRyeSBpbiBhIHJvb3Qgbm9kZSBmcm9tIGEgcGF0aC5cclxuICAgKi9cbiAgbGFzdChyb290LCBwYXRoKSB7XG4gICAgdmFyIHAgPSBwYXRoLnNsaWNlKCk7XG4gICAgdmFyIG4gPSBOb2RlLmdldChyb290LCBwKTtcblxuICAgIHdoaWxlIChuKSB7XG4gICAgICBpZiAoVGV4dC5pc1RleHQobikgfHwgbi5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaSA9IG4uY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICAgICAgbiA9IG4uY2hpbGRyZW5baV07XG4gICAgICAgIHAucHVzaChpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW24sIHBdO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgbm9kZSBhdCBhIHNwZWNpZmljIHBhdGgsIGVuc3VyaW5nIGl0J3MgYSBsZWFmIHRleHQgbm9kZS5cclxuICAgKi9cbiAgbGVhZihyb290LCBwYXRoKSB7XG4gICAgdmFyIG5vZGUgPSBOb2RlLmdldChyb290LCBwYXRoKTtcblxuICAgIGlmICghVGV4dC5pc1RleHQobm9kZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBnZXQgdGhlIGxlYWYgbm9kZSBhdCBwYXRoIFtcIi5jb25jYXQocGF0aCwgXCJdIGJlY2F1c2UgaXQgcmVmZXJzIHRvIGEgbm9uLWxlYWYgbm9kZTogXCIpLmNvbmNhdChub2RlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogUmV0dXJuIGEgZ2VuZXJhdG9yIG9mIHRoZSBpbiBhIGJyYW5jaCBvZiB0aGUgdHJlZSwgZnJvbSBhIHNwZWNpZmljIHBhdGguXHJcbiAgICpcclxuICAgKiBCeSBkZWZhdWx0IHRoZSBvcmRlciBpcyB0b3AtZG93biwgZnJvbSBsb3dlc3QgdG8gaGlnaGVzdCBub2RlIGluIHRoZSB0cmVlLFxyXG4gICAqIGJ1dCB5b3UgY2FuIHBhc3MgdGhlIGByZXZlcnNlOiB0cnVlYCBvcHRpb24gdG8gZ28gYm90dG9tLXVwLlxyXG4gICAqL1xuICAqbGV2ZWxzKHJvb3QsIHBhdGgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgICBmb3IgKHZhciBwIG9mIFBhdGgubGV2ZWxzKHBhdGgsIG9wdGlvbnMpKSB7XG4gICAgICB2YXIgbiA9IE5vZGUuZ2V0KHJvb3QsIHApO1xuICAgICAgeWllbGQgW24sIHBdO1xuICAgIH1cbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIG5vZGUgbWF0Y2hlcyBhIHNldCBvZiBwcm9wcy5cclxuICAgKi9cbiAgbWF0Y2hlcyhub2RlLCBwcm9wcykge1xuICAgIHJldHVybiBFbGVtZW50LmlzRWxlbWVudChub2RlKSAmJiBFbGVtZW50LmlzRWxlbWVudFByb3BzKHByb3BzKSAmJiBFbGVtZW50Lm1hdGNoZXMobm9kZSwgcHJvcHMpIHx8IFRleHQuaXNUZXh0KG5vZGUpICYmIFRleHQuaXNUZXh0UHJvcHMocHJvcHMpICYmIFRleHQubWF0Y2hlcyhub2RlLCBwcm9wcyk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogUmV0dXJuIGEgZ2VuZXJhdG9yIG9mIGFsbCB0aGUgbm9kZSBlbnRyaWVzIG9mIGEgcm9vdCBub2RlLiBFYWNoIGVudHJ5IGlzXHJcbiAgICogcmV0dXJuZWQgYXMgYSBgW05vZGUsIFBhdGhdYCB0dXBsZSwgd2l0aCB0aGUgcGF0aCByZWZlcnJpbmcgdG8gdGhlIG5vZGUnc1xyXG4gICAqIHBvc2l0aW9uIGluc2lkZSB0aGUgcm9vdCBub2RlLlxyXG4gICAqL1xuICAqbm9kZXMocm9vdCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIge1xuICAgICAgcGFzcyxcbiAgICAgIHJldmVyc2UgPSBmYWxzZVxuICAgIH0gPSBvcHRpb25zO1xuICAgIHZhciB7XG4gICAgICBmcm9tID0gW10sXG4gICAgICB0b1xuICAgIH0gPSBvcHRpb25zO1xuICAgIHZhciB2aXNpdGVkID0gbmV3IFNldCgpO1xuICAgIHZhciBwID0gW107XG4gICAgdmFyIG4gPSByb290O1xuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmICh0byAmJiAocmV2ZXJzZSA/IFBhdGguaXNCZWZvcmUocCwgdG8pIDogUGF0aC5pc0FmdGVyKHAsIHRvKSkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmICghdmlzaXRlZC5oYXMobikpIHtcbiAgICAgICAgeWllbGQgW24sIHBdO1xuICAgICAgfSAvLyBJZiB3ZSdyZSBhbGxvd2VkIHRvIGdvIGRvd253YXJkIGFuZCB3ZSBoYXZlbid0IGRlc2NlbmRlZCB5ZXQsIGRvLlxuXG5cbiAgICAgIGlmICghdmlzaXRlZC5oYXMobikgJiYgIVRleHQuaXNUZXh0KG4pICYmIG4uY2hpbGRyZW4ubGVuZ3RoICE9PSAwICYmIChwYXNzID09IG51bGwgfHwgcGFzcyhbbiwgcF0pID09PSBmYWxzZSkpIHtcbiAgICAgICAgdmlzaXRlZC5hZGQobik7XG4gICAgICAgIHZhciBuZXh0SW5kZXggPSByZXZlcnNlID8gbi5jaGlsZHJlbi5sZW5ndGggLSAxIDogMDtcblxuICAgICAgICBpZiAoUGF0aC5pc0FuY2VzdG9yKHAsIGZyb20pKSB7XG4gICAgICAgICAgbmV4dEluZGV4ID0gZnJvbVtwLmxlbmd0aF07XG4gICAgICAgIH1cblxuICAgICAgICBwID0gcC5jb25jYXQobmV4dEluZGV4KTtcbiAgICAgICAgbiA9IE5vZGUuZ2V0KHJvb3QsIHApO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gLy8gSWYgd2UncmUgYXQgdGhlIHJvb3QgYW5kIHdlIGNhbid0IGdvIGRvd24sIHdlJ3JlIGRvbmUuXG5cblxuICAgICAgaWYgKHAubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSAvLyBJZiB3ZSdyZSBnb2luZyBmb3J3YXJkLi4uXG5cblxuICAgICAgaWYgKCFyZXZlcnNlKSB7XG4gICAgICAgIHZhciBuZXdQYXRoID0gUGF0aC5uZXh0KHApO1xuXG4gICAgICAgIGlmIChOb2RlLmhhcyhyb290LCBuZXdQYXRoKSkge1xuICAgICAgICAgIHAgPSBuZXdQYXRoO1xuICAgICAgICAgIG4gPSBOb2RlLmdldChyb290LCBwKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBJZiB3ZSdyZSBnb2luZyBiYWNrd2FyZC4uLlxuXG5cbiAgICAgIGlmIChyZXZlcnNlICYmIHBbcC5sZW5ndGggLSAxXSAhPT0gMCkge1xuICAgICAgICB2YXIgX25ld1BhdGggPSBQYXRoLnByZXZpb3VzKHApO1xuXG4gICAgICAgIHAgPSBfbmV3UGF0aDtcbiAgICAgICAgbiA9IE5vZGUuZ2V0KHJvb3QsIHApO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gLy8gT3RoZXJ3aXNlIHdlJ3JlIGdvaW5nIHVwd2FyZC4uLlxuXG5cbiAgICAgIHAgPSBQYXRoLnBhcmVudChwKTtcbiAgICAgIG4gPSBOb2RlLmdldChyb290LCBwKTtcbiAgICAgIHZpc2l0ZWQuYWRkKG4pO1xuICAgIH1cbiAgfSxcblxuICAvKipcclxuICAgKiBHZXQgdGhlIHBhcmVudCBvZiBhIG5vZGUgYXQgYSBzcGVjaWZpYyBwYXRoLlxyXG4gICAqL1xuICBwYXJlbnQocm9vdCwgcGF0aCkge1xuICAgIHZhciBwYXJlbnRQYXRoID0gUGF0aC5wYXJlbnQocGF0aCk7XG4gICAgdmFyIHAgPSBOb2RlLmdldChyb290LCBwYXJlbnRQYXRoKTtcblxuICAgIGlmIChUZXh0LmlzVGV4dChwKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGdldCB0aGUgcGFyZW50IG9mIHBhdGggW1wiLmNvbmNhdChwYXRoLCBcIl0gYmVjYXVzZSBpdCBkb2VzIG5vdCBleGlzdCBpbiB0aGUgcm9vdC5cIikpO1xuICAgIH1cblxuICAgIHJldHVybiBwO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgY29uY2F0ZW5hdGVkIHRleHQgc3RyaW5nIG9mIGEgbm9kZSdzIGNvbnRlbnQuXHJcbiAgICpcclxuICAgKiBOb3RlIHRoYXQgdGhpcyB3aWxsIG5vdCBpbmNsdWRlIHNwYWNlcyBvciBsaW5lIGJyZWFrcyBiZXR3ZWVuIGJsb2NrIG5vZGVzLlxyXG4gICAqIEl0IGlzIG5vdCBhIHVzZXItZmFjaW5nIHN0cmluZywgYnV0IGEgc3RyaW5nIGZvciBwZXJmb3JtaW5nIG9mZnNldC1yZWxhdGVkXHJcbiAgICogY29tcHV0YXRpb25zIGZvciBhIG5vZGUuXHJcbiAgICovXG4gIHN0cmluZyhub2RlKSB7XG4gICAgaWYgKFRleHQuaXNUZXh0KG5vZGUpKSB7XG4gICAgICByZXR1cm4gbm9kZS50ZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbm9kZS5jaGlsZHJlbi5tYXAoTm9kZS5zdHJpbmcpLmpvaW4oJycpO1xuICAgIH1cbiAgfSxcblxuICAvKipcclxuICAgKiBSZXR1cm4gYSBnZW5lcmF0b3Igb2YgYWxsIGxlYWYgdGV4dCBub2RlcyBpbiBhIHJvb3Qgbm9kZS5cclxuICAgKi9cbiAgKnRleHRzKHJvb3QpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICBmb3IgKHZhciBbbm9kZSwgcGF0aF0gb2YgTm9kZS5ub2Rlcyhyb290LCBvcHRpb25zKSkge1xuICAgICAgaWYgKFRleHQuaXNUZXh0KG5vZGUpKSB7XG4gICAgICAgIHlpZWxkIFtub2RlLCBwYXRoXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufTtcblxuZnVuY3Rpb24gb3duS2V5cyQ3KG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSB7IHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsgfSBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQ3KHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMkNyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzJDcoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG52YXIgT3BlcmF0aW9uID0ge1xuICAvKipcclxuICAgKiBDaGVjayBvZiBhIHZhbHVlIGlzIGEgYE5vZGVPcGVyYXRpb25gIG9iamVjdC5cclxuICAgKi9cbiAgaXNOb2RlT3BlcmF0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIE9wZXJhdGlvbi5pc09wZXJhdGlvbih2YWx1ZSkgJiYgdmFsdWUudHlwZS5lbmRzV2l0aCgnX25vZGUnKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBvZiBhIHZhbHVlIGlzIGFuIGBPcGVyYXRpb25gIG9iamVjdC5cclxuICAgKi9cbiAgaXNPcGVyYXRpb24odmFsdWUpIHtcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc3dpdGNoICh2YWx1ZS50eXBlKSB7XG4gICAgICBjYXNlICdpbnNlcnRfbm9kZSc6XG4gICAgICAgIHJldHVybiBQYXRoLmlzUGF0aCh2YWx1ZS5wYXRoKSAmJiBOb2RlLmlzTm9kZSh2YWx1ZS5ub2RlKTtcblxuICAgICAgY2FzZSAnaW5zZXJ0X3RleHQnOlxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlLm9mZnNldCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHZhbHVlLnRleHQgPT09ICdzdHJpbmcnICYmIFBhdGguaXNQYXRoKHZhbHVlLnBhdGgpO1xuXG4gICAgICBjYXNlICdtZXJnZV9ub2RlJzpcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZS5wb3NpdGlvbiA9PT0gJ251bWJlcicgJiYgUGF0aC5pc1BhdGgodmFsdWUucGF0aCkgJiYgaXNQbGFpbk9iamVjdCh2YWx1ZS5wcm9wZXJ0aWVzKTtcblxuICAgICAgY2FzZSAnbW92ZV9ub2RlJzpcbiAgICAgICAgcmV0dXJuIFBhdGguaXNQYXRoKHZhbHVlLnBhdGgpICYmIFBhdGguaXNQYXRoKHZhbHVlLm5ld1BhdGgpO1xuXG4gICAgICBjYXNlICdyZW1vdmVfbm9kZSc6XG4gICAgICAgIHJldHVybiBQYXRoLmlzUGF0aCh2YWx1ZS5wYXRoKSAmJiBOb2RlLmlzTm9kZSh2YWx1ZS5ub2RlKTtcblxuICAgICAgY2FzZSAncmVtb3ZlX3RleHQnOlxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlLm9mZnNldCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHZhbHVlLnRleHQgPT09ICdzdHJpbmcnICYmIFBhdGguaXNQYXRoKHZhbHVlLnBhdGgpO1xuXG4gICAgICBjYXNlICdzZXRfbm9kZSc6XG4gICAgICAgIHJldHVybiBQYXRoLmlzUGF0aCh2YWx1ZS5wYXRoKSAmJiBpc1BsYWluT2JqZWN0KHZhbHVlLnByb3BlcnRpZXMpICYmIGlzUGxhaW5PYmplY3QodmFsdWUubmV3UHJvcGVydGllcyk7XG5cbiAgICAgIGNhc2UgJ3NldF9zZWxlY3Rpb24nOlxuICAgICAgICByZXR1cm4gdmFsdWUucHJvcGVydGllcyA9PT0gbnVsbCAmJiBSYW5nZS5pc1JhbmdlKHZhbHVlLm5ld1Byb3BlcnRpZXMpIHx8IHZhbHVlLm5ld1Byb3BlcnRpZXMgPT09IG51bGwgJiYgUmFuZ2UuaXNSYW5nZSh2YWx1ZS5wcm9wZXJ0aWVzKSB8fCBpc1BsYWluT2JqZWN0KHZhbHVlLnByb3BlcnRpZXMpICYmIGlzUGxhaW5PYmplY3QodmFsdWUubmV3UHJvcGVydGllcyk7XG5cbiAgICAgIGNhc2UgJ3NwbGl0X25vZGUnOlxuICAgICAgICByZXR1cm4gUGF0aC5pc1BhdGgodmFsdWUucGF0aCkgJiYgdHlwZW9mIHZhbHVlLnBvc2l0aW9uID09PSAnbnVtYmVyJyAmJiBpc1BsYWluT2JqZWN0KHZhbHVlLnByb3BlcnRpZXMpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYSBsaXN0IG9mIGBPcGVyYXRpb25gIG9iamVjdHMuXHJcbiAgICovXG4gIGlzT3BlcmF0aW9uTGlzdCh2YWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5ldmVyeSh2YWwgPT4gT3BlcmF0aW9uLmlzT3BlcmF0aW9uKHZhbCkpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIG9mIGEgdmFsdWUgaXMgYSBgU2VsZWN0aW9uT3BlcmF0aW9uYCBvYmplY3QuXHJcbiAgICovXG4gIGlzU2VsZWN0aW9uT3BlcmF0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIE9wZXJhdGlvbi5pc09wZXJhdGlvbih2YWx1ZSkgJiYgdmFsdWUudHlwZS5lbmRzV2l0aCgnX3NlbGVjdGlvbicpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIG9mIGEgdmFsdWUgaXMgYSBgVGV4dE9wZXJhdGlvbmAgb2JqZWN0LlxyXG4gICAqL1xuICBpc1RleHRPcGVyYXRpb24odmFsdWUpIHtcbiAgICByZXR1cm4gT3BlcmF0aW9uLmlzT3BlcmF0aW9uKHZhbHVlKSAmJiB2YWx1ZS50eXBlLmVuZHNXaXRoKCdfdGV4dCcpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEludmVydCBhbiBvcGVyYXRpb24sIHJldHVybmluZyBhIG5ldyBvcGVyYXRpb24gdGhhdCB3aWxsIGV4YWN0bHkgdW5kbyB0aGVcclxuICAgKiBvcmlnaW5hbCB3aGVuIGFwcGxpZWQuXHJcbiAgICovXG4gIGludmVyc2Uob3ApIHtcbiAgICBzd2l0Y2ggKG9wLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2luc2VydF9ub2RlJzpcbiAgICAgICAge1xuICAgICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkJDcoX29iamVjdFNwcmVhZCQ3KHt9LCBvcCksIHt9LCB7XG4gICAgICAgICAgICB0eXBlOiAncmVtb3ZlX25vZGUnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAnaW5zZXJ0X3RleHQnOlxuICAgICAgICB7XG4gICAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQkNyhfb2JqZWN0U3ByZWFkJDcoe30sIG9wKSwge30sIHtcbiAgICAgICAgICAgIHR5cGU6ICdyZW1vdmVfdGV4dCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdtZXJnZV9ub2RlJzpcbiAgICAgICAge1xuICAgICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkJDcoX29iamVjdFNwcmVhZCQ3KHt9LCBvcCksIHt9LCB7XG4gICAgICAgICAgICB0eXBlOiAnc3BsaXRfbm9kZScsXG4gICAgICAgICAgICBwYXRoOiBQYXRoLnByZXZpb3VzKG9wLnBhdGgpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAnbW92ZV9ub2RlJzpcbiAgICAgICAge1xuICAgICAgICAgIHZhciB7XG4gICAgICAgICAgICBuZXdQYXRoLFxuICAgICAgICAgICAgcGF0aFxuICAgICAgICAgIH0gPSBvcDsgLy8gUEVSRjogaW4gdGhpcyBjYXNlIHRoZSBtb3ZlIG9wZXJhdGlvbiBpcyBhIG5vLW9wIGFueXdheXMuXG5cbiAgICAgICAgICBpZiAoUGF0aC5lcXVhbHMobmV3UGF0aCwgcGF0aCkpIHtcbiAgICAgICAgICAgIHJldHVybiBvcDtcbiAgICAgICAgICB9IC8vIElmIHRoZSBtb3ZlIGhhcHBlbnMgY29tcGxldGVseSB3aXRoaW4gYSBzaW5nbGUgcGFyZW50IHRoZSBwYXRoIGFuZFxuICAgICAgICAgIC8vIG5ld1BhdGggYXJlIHN0YWJsZSB3aXRoIHJlc3BlY3QgdG8gZWFjaCBvdGhlci5cblxuXG4gICAgICAgICAgaWYgKFBhdGguaXNTaWJsaW5nKHBhdGgsIG5ld1BhdGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZCQ3KF9vYmplY3RTcHJlYWQkNyh7fSwgb3ApLCB7fSwge1xuICAgICAgICAgICAgICBwYXRoOiBuZXdQYXRoLFxuICAgICAgICAgICAgICBuZXdQYXRoOiBwYXRoXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IC8vIElmIHRoZSBtb3ZlIGRvZXMgbm90IGhhcHBlbiB3aXRoaW4gYSBzaW5nbGUgcGFyZW50IGl0IGlzIHBvc3NpYmxlXG4gICAgICAgICAgLy8gZm9yIHRoZSBtb3ZlIHRvIGltcGFjdCB0aGUgdHJ1ZSBwYXRoIHRvIHRoZSBsb2NhdGlvbiB3aGVyZSB0aGUgbm9kZVxuICAgICAgICAgIC8vIHdhcyByZW1vdmVkIGZyb20gYW5kIHdoZXJlIGl0IHdhcyBpbnNlcnRlZC4gV2UgaGF2ZSB0byBhZGp1c3QgZm9yIHRoaXNcbiAgICAgICAgICAvLyBhbmQgZmluZCB0aGUgb3JpZ2luYWwgcGF0aC4gV2UgY2FuIGFjY29tcGxpc2ggdGhpcyAob25seSBpbiBub24tc2libGluZylcbiAgICAgICAgICAvLyBtb3ZlcyBieSBsb29raW5nIGF0IHRoZSBpbXBhY3Qgb2YgdGhlIG1vdmUgb3BlcmF0aW9uIG9uIHRoZSBub2RlXG4gICAgICAgICAgLy8gYWZ0ZXIgdGhlIG9yaWdpbmFsIG1vdmUgcGF0aC5cblxuXG4gICAgICAgICAgdmFyIGludmVyc2VQYXRoID0gUGF0aC50cmFuc2Zvcm0ocGF0aCwgb3ApO1xuICAgICAgICAgIHZhciBpbnZlcnNlTmV3UGF0aCA9IFBhdGgudHJhbnNmb3JtKFBhdGgubmV4dChwYXRoKSwgb3ApO1xuICAgICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkJDcoX29iamVjdFNwcmVhZCQ3KHt9LCBvcCksIHt9LCB7XG4gICAgICAgICAgICBwYXRoOiBpbnZlcnNlUGF0aCxcbiAgICAgICAgICAgIG5ld1BhdGg6IGludmVyc2VOZXdQYXRoXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAncmVtb3ZlX25vZGUnOlxuICAgICAgICB7XG4gICAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQkNyhfb2JqZWN0U3ByZWFkJDcoe30sIG9wKSwge30sIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnNlcnRfbm9kZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdyZW1vdmVfdGV4dCc6XG4gICAgICAgIHtcbiAgICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZCQ3KF9vYmplY3RTcHJlYWQkNyh7fSwgb3ApLCB7fSwge1xuICAgICAgICAgICAgdHlwZTogJ2luc2VydF90ZXh0J1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ3NldF9ub2RlJzpcbiAgICAgICAge1xuICAgICAgICAgIHZhciB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzLFxuICAgICAgICAgICAgbmV3UHJvcGVydGllc1xuICAgICAgICAgIH0gPSBvcDtcbiAgICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZCQ3KF9vYmplY3RTcHJlYWQkNyh7fSwgb3ApLCB7fSwge1xuICAgICAgICAgICAgcHJvcGVydGllczogbmV3UHJvcGVydGllcyxcbiAgICAgICAgICAgIG5ld1Byb3BlcnRpZXM6IHByb3BlcnRpZXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdzZXRfc2VsZWN0aW9uJzpcbiAgICAgICAge1xuICAgICAgICAgIHZhciB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBfcHJvcGVydGllcyxcbiAgICAgICAgICAgIG5ld1Byb3BlcnRpZXM6IF9uZXdQcm9wZXJ0aWVzXG4gICAgICAgICAgfSA9IG9wO1xuXG4gICAgICAgICAgaWYgKF9wcm9wZXJ0aWVzID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkJDcoX29iamVjdFNwcmVhZCQ3KHt9LCBvcCksIHt9LCB7XG4gICAgICAgICAgICAgIHByb3BlcnRpZXM6IF9uZXdQcm9wZXJ0aWVzLFxuICAgICAgICAgICAgICBuZXdQcm9wZXJ0aWVzOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKF9uZXdQcm9wZXJ0aWVzID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkJDcoX29iamVjdFNwcmVhZCQ3KHt9LCBvcCksIHt9LCB7XG4gICAgICAgICAgICAgIHByb3BlcnRpZXM6IG51bGwsXG4gICAgICAgICAgICAgIG5ld1Byb3BlcnRpZXM6IF9wcm9wZXJ0aWVzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQkNyhfb2JqZWN0U3ByZWFkJDcoe30sIG9wKSwge30sIHtcbiAgICAgICAgICAgICAgcHJvcGVydGllczogX25ld1Byb3BlcnRpZXMsXG4gICAgICAgICAgICAgIG5ld1Byb3BlcnRpZXM6IF9wcm9wZXJ0aWVzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAnc3BsaXRfbm9kZSc6XG4gICAgICAgIHtcbiAgICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZCQ3KF9vYmplY3RTcHJlYWQkNyh7fSwgb3ApLCB7fSwge1xuICAgICAgICAgICAgdHlwZTogJ21lcmdlX25vZGUnLFxuICAgICAgICAgICAgcGF0aDogUGF0aC5uZXh0KG9wLnBhdGgpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxufTtcblxudmFyIFBhdGggPSB7XG4gIC8qKlxyXG4gICAqIEdldCBhIGxpc3Qgb2YgYW5jZXN0b3IgcGF0aHMgZm9yIGEgZ2l2ZW4gcGF0aC5cclxuICAgKlxyXG4gICAqIFRoZSBwYXRocyBhcmUgc29ydGVkIGZyb20gZGVlcGVzdCB0byBzaGFsbG93ZXN0IGFuY2VzdG9yLiBIb3dldmVyLCBpZiB0aGVcclxuICAgKiBgcmV2ZXJzZTogdHJ1ZWAgb3B0aW9uIGlzIHBhc3NlZCwgdGhleSBhcmUgcmV2ZXJzZWQuXHJcbiAgICovXG4gIGFuY2VzdG9ycyhwYXRoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICByZXZlcnNlID0gZmFsc2VcbiAgICB9ID0gb3B0aW9ucztcbiAgICB2YXIgcGF0aHMgPSBQYXRoLmxldmVscyhwYXRoLCBvcHRpb25zKTtcblxuICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICBwYXRocyA9IHBhdGhzLnNsaWNlKDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXRocyA9IHBhdGhzLnNsaWNlKDAsIC0xKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0aHM7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBjb21tb24gYW5jZXN0b3IgcGF0aCBvZiB0d28gcGF0aHMuXHJcbiAgICovXG4gIGNvbW1vbihwYXRoLCBhbm90aGVyKSB7XG4gICAgdmFyIGNvbW1vbiA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aCAmJiBpIDwgYW5vdGhlci5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGF2ID0gcGF0aFtpXTtcbiAgICAgIHZhciBidiA9IGFub3RoZXJbaV07XG5cbiAgICAgIGlmIChhdiAhPT0gYnYpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNvbW1vbi5wdXNoKGF2KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tbW9uO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENvbXBhcmUgYSBwYXRoIHRvIGFub3RoZXIsIHJldHVybmluZyBhbiBpbnRlZ2VyIGluZGljYXRpbmcgd2hldGhlciB0aGUgcGF0aFxyXG4gICAqIHdhcyBiZWZvcmUsIGF0LCBvciBhZnRlciB0aGUgb3RoZXIuXHJcbiAgICpcclxuICAgKiBOb3RlOiBUd28gcGF0aHMgb2YgdW5lcXVhbCBsZW5ndGggY2FuIHN0aWxsIHJlY2VpdmUgYSBgMGAgcmVzdWx0IGlmIG9uZSBpc1xyXG4gICAqIGRpcmVjdGx5IGFib3ZlIG9yIGJlbG93IHRoZSBvdGhlci4gSWYgeW91IHdhbnQgZXhhY3QgbWF0Y2hpbmcsIHVzZVxyXG4gICAqIFtbUGF0aC5lcXVhbHNdXSBpbnN0ZWFkLlxyXG4gICAqL1xuICBjb21wYXJlKHBhdGgsIGFub3RoZXIpIHtcbiAgICB2YXIgbWluID0gTWF0aC5taW4ocGF0aC5sZW5ndGgsIGFub3RoZXIubGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWluOyBpKyspIHtcbiAgICAgIGlmIChwYXRoW2ldIDwgYW5vdGhlcltpXSkgcmV0dXJuIC0xO1xuICAgICAgaWYgKHBhdGhbaV0gPiBhbm90aGVyW2ldKSByZXR1cm4gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHBhdGggZW5kcyBhZnRlciBvbmUgb2YgdGhlIGluZGV4ZXMgaW4gYW5vdGhlci5cclxuICAgKi9cbiAgZW5kc0FmdGVyKHBhdGgsIGFub3RoZXIpIHtcbiAgICB2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTtcbiAgICB2YXIgYXMgPSBwYXRoLnNsaWNlKDAsIGkpO1xuICAgIHZhciBicyA9IGFub3RoZXIuc2xpY2UoMCwgaSk7XG4gICAgdmFyIGF2ID0gcGF0aFtpXTtcbiAgICB2YXIgYnYgPSBhbm90aGVyW2ldO1xuICAgIHJldHVybiBQYXRoLmVxdWFscyhhcywgYnMpICYmIGF2ID4gYnY7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBwYXRoIGVuZHMgYXQgb25lIG9mIHRoZSBpbmRleGVzIGluIGFub3RoZXIuXHJcbiAgICovXG4gIGVuZHNBdChwYXRoLCBhbm90aGVyKSB7XG4gICAgdmFyIGkgPSBwYXRoLmxlbmd0aDtcbiAgICB2YXIgYXMgPSBwYXRoLnNsaWNlKDAsIGkpO1xuICAgIHZhciBicyA9IGFub3RoZXIuc2xpY2UoMCwgaSk7XG4gICAgcmV0dXJuIFBhdGguZXF1YWxzKGFzLCBicyk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBwYXRoIGVuZHMgYmVmb3JlIG9uZSBvZiB0aGUgaW5kZXhlcyBpbiBhbm90aGVyLlxyXG4gICAqL1xuICBlbmRzQmVmb3JlKHBhdGgsIGFub3RoZXIpIHtcbiAgICB2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTtcbiAgICB2YXIgYXMgPSBwYXRoLnNsaWNlKDAsIGkpO1xuICAgIHZhciBicyA9IGFub3RoZXIuc2xpY2UoMCwgaSk7XG4gICAgdmFyIGF2ID0gcGF0aFtpXTtcbiAgICB2YXIgYnYgPSBhbm90aGVyW2ldO1xuICAgIHJldHVybiBQYXRoLmVxdWFscyhhcywgYnMpICYmIGF2IDwgYnY7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBwYXRoIGlzIGV4YWN0bHkgZXF1YWwgdG8gYW5vdGhlci5cclxuICAgKi9cbiAgZXF1YWxzKHBhdGgsIGFub3RoZXIpIHtcbiAgICByZXR1cm4gcGF0aC5sZW5ndGggPT09IGFub3RoZXIubGVuZ3RoICYmIHBhdGguZXZlcnkoKG4sIGkpID0+IG4gPT09IGFub3RoZXJbaV0pO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIHRoZSBwYXRoIG9mIHByZXZpb3VzIHNpYmxpbmcgbm9kZSBleGlzdHNcclxuICAgKi9cbiAgaGFzUHJldmlvdXMocGF0aCkge1xuICAgIHJldHVybiBwYXRoW3BhdGgubGVuZ3RoIC0gMV0gPiAwO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgcGF0aCBpcyBhZnRlciBhbm90aGVyLlxyXG4gICAqL1xuICBpc0FmdGVyKHBhdGgsIGFub3RoZXIpIHtcbiAgICByZXR1cm4gUGF0aC5jb21wYXJlKHBhdGgsIGFub3RoZXIpID09PSAxO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgcGF0aCBpcyBhbiBhbmNlc3RvciBvZiBhbm90aGVyLlxyXG4gICAqL1xuICBpc0FuY2VzdG9yKHBhdGgsIGFub3RoZXIpIHtcbiAgICByZXR1cm4gcGF0aC5sZW5ndGggPCBhbm90aGVyLmxlbmd0aCAmJiBQYXRoLmNvbXBhcmUocGF0aCwgYW5vdGhlcikgPT09IDA7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBwYXRoIGlzIGJlZm9yZSBhbm90aGVyLlxyXG4gICAqL1xuICBpc0JlZm9yZShwYXRoLCBhbm90aGVyKSB7XG4gICAgcmV0dXJuIFBhdGguY29tcGFyZShwYXRoLCBhbm90aGVyKSA9PT0gLTE7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBwYXRoIGlzIGEgY2hpbGQgb2YgYW5vdGhlci5cclxuICAgKi9cbiAgaXNDaGlsZChwYXRoLCBhbm90aGVyKSB7XG4gICAgcmV0dXJuIHBhdGgubGVuZ3RoID09PSBhbm90aGVyLmxlbmd0aCArIDEgJiYgUGF0aC5jb21wYXJlKHBhdGgsIGFub3RoZXIpID09PSAwO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgcGF0aCBpcyBlcXVhbCB0byBvciBhbiBhbmNlc3RvciBvZiBhbm90aGVyLlxyXG4gICAqL1xuICBpc0NvbW1vbihwYXRoLCBhbm90aGVyKSB7XG4gICAgcmV0dXJuIHBhdGgubGVuZ3RoIDw9IGFub3RoZXIubGVuZ3RoICYmIFBhdGguY29tcGFyZShwYXRoLCBhbm90aGVyKSA9PT0gMDtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHBhdGggaXMgYSBkZXNjZW5kYW50IG9mIGFub3RoZXIuXHJcbiAgICovXG4gIGlzRGVzY2VuZGFudChwYXRoLCBhbm90aGVyKSB7XG4gICAgcmV0dXJuIHBhdGgubGVuZ3RoID4gYW5vdGhlci5sZW5ndGggJiYgUGF0aC5jb21wYXJlKHBhdGgsIGFub3RoZXIpID09PSAwO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgcGF0aCBpcyB0aGUgcGFyZW50IG9mIGFub3RoZXIuXHJcbiAgICovXG4gIGlzUGFyZW50KHBhdGgsIGFub3RoZXIpIHtcbiAgICByZXR1cm4gcGF0aC5sZW5ndGggKyAxID09PSBhbm90aGVyLmxlbmd0aCAmJiBQYXRoLmNvbXBhcmUocGF0aCwgYW5vdGhlcikgPT09IDA7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaXMgYSB2YWx1ZSBpbXBsZW1lbnRzIHRoZSBgUGF0aGAgaW50ZXJmYWNlLlxyXG4gICAqL1xuICBpc1BhdGgodmFsdWUpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgKHZhbHVlLmxlbmd0aCA9PT0gMCB8fCB0eXBlb2YgdmFsdWVbMF0gPT09ICdudW1iZXInKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHBhdGggaXMgYSBzaWJsaW5nIG9mIGFub3RoZXIuXHJcbiAgICovXG4gIGlzU2libGluZyhwYXRoLCBhbm90aGVyKSB7XG4gICAgaWYgKHBhdGgubGVuZ3RoICE9PSBhbm90aGVyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBhcyA9IHBhdGguc2xpY2UoMCwgLTEpO1xuICAgIHZhciBicyA9IGFub3RoZXIuc2xpY2UoMCwgLTEpO1xuICAgIHZhciBhbCA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgICB2YXIgYmwgPSBhbm90aGVyW2Fub3RoZXIubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIGFsICE9PSBibCAmJiBQYXRoLmVxdWFscyhhcywgYnMpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCBhIGxpc3Qgb2YgcGF0aHMgYXQgZXZlcnkgbGV2ZWwgZG93biB0byBhIHBhdGguIE5vdGU6IHRoaXMgaXMgdGhlIHNhbWVcclxuICAgKiBhcyBgUGF0aC5hbmNlc3RvcnNgLCBidXQgaW5jbHVkaW5nIHRoZSBwYXRoIGl0c2VsZi5cclxuICAgKlxyXG4gICAqIFRoZSBwYXRocyBhcmUgc29ydGVkIGZyb20gc2hhbGxvd2VzdCB0byBkZWVwZXN0LiBIb3dldmVyLCBpZiB0aGUgYHJldmVyc2U6XHJcbiAgICogdHJ1ZWAgb3B0aW9uIGlzIHBhc3NlZCwgdGhleSBhcmUgcmV2ZXJzZWQuXHJcbiAgICovXG4gIGxldmVscyhwYXRoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICByZXZlcnNlID0gZmFsc2VcbiAgICB9ID0gb3B0aW9ucztcbiAgICB2YXIgbGlzdCA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gcGF0aC5sZW5ndGg7IGkrKykge1xuICAgICAgbGlzdC5wdXNoKHBhdGguc2xpY2UoMCwgaSkpO1xuICAgIH1cblxuICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICBsaXN0LnJldmVyc2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdDtcbiAgfSxcblxuICAvKipcclxuICAgKiBHaXZlbiBhIHBhdGgsIGdldCB0aGUgcGF0aCB0byB0aGUgbmV4dCBzaWJsaW5nIG5vZGUuXHJcbiAgICovXG4gIG5leHQocGF0aCkge1xuICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGdldCB0aGUgbmV4dCBwYXRoIG9mIGEgcm9vdCBwYXRoIFtcIi5jb25jYXQocGF0aCwgXCJdLCBiZWNhdXNlIGl0IGhhcyBubyBuZXh0IGluZGV4LlwiKSk7XG4gICAgfVxuXG4gICAgdmFyIGxhc3QgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIHBhdGguc2xpY2UoMCwgLTEpLmNvbmNhdChsYXN0ICsgMSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2l2ZW4gYSBwYXRoLCByZXR1cm4gYSBuZXcgcGF0aCByZWZlcnJpbmcgdG8gdGhlIHBhcmVudCBub2RlIGFib3ZlIGl0LlxyXG4gICAqL1xuICBwYXJlbnQocGF0aCkge1xuICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGdldCB0aGUgcGFyZW50IHBhdGggb2YgdGhlIHJvb3QgcGF0aCBbXCIuY29uY2F0KHBhdGgsIFwiXS5cIikpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXRoLnNsaWNlKDAsIC0xKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBHaXZlbiBhIHBhdGgsIGdldCB0aGUgcGF0aCB0byB0aGUgcHJldmlvdXMgc2libGluZyBub2RlLlxyXG4gICAqL1xuICBwcmV2aW91cyhwYXRoKSB7XG4gICAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZ2V0IHRoZSBwcmV2aW91cyBwYXRoIG9mIGEgcm9vdCBwYXRoIFtcIi5jb25jYXQocGF0aCwgXCJdLCBiZWNhdXNlIGl0IGhhcyBubyBwcmV2aW91cyBpbmRleC5cIikpO1xuICAgIH1cblxuICAgIHZhciBsYXN0ID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKGxhc3QgPD0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGdldCB0aGUgcHJldmlvdXMgcGF0aCBvZiBhIGZpcnN0IGNoaWxkIHBhdGggW1wiLmNvbmNhdChwYXRoLCBcIl0gYmVjYXVzZSBpdCB3b3VsZCByZXN1bHQgaW4gYSBuZWdhdGl2ZSBpbmRleC5cIikpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXRoLnNsaWNlKDAsIC0xKS5jb25jYXQobGFzdCAtIDEpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCBhIHBhdGggcmVsYXRpdmUgdG8gYW4gYW5jZXN0b3IuXHJcbiAgICovXG4gIHJlbGF0aXZlKHBhdGgsIGFuY2VzdG9yKSB7XG4gICAgaWYgKCFQYXRoLmlzQW5jZXN0b3IoYW5jZXN0b3IsIHBhdGgpICYmICFQYXRoLmVxdWFscyhwYXRoLCBhbmNlc3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBnZXQgdGhlIHJlbGF0aXZlIHBhdGggb2YgW1wiLmNvbmNhdChwYXRoLCBcIl0gaW5zaWRlIGFuY2VzdG9yIFtcIikuY29uY2F0KGFuY2VzdG9yLCBcIl0sIGJlY2F1c2UgaXQgaXMgbm90IGFib3ZlIG9yIGVxdWFsIHRvIHRoZSBwYXRoLlwiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGguc2xpY2UoYW5jZXN0b3IubGVuZ3RoKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBUcmFuc2Zvcm0gYSBwYXRoIGJ5IGFuIG9wZXJhdGlvbi5cclxuICAgKi9cbiAgdHJhbnNmb3JtKHBhdGgsIG9wZXJhdGlvbikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICByZXR1cm4gcHJvZHVjZShwYXRoLCBwID0+IHtcbiAgICAgIHZhciB7XG4gICAgICAgIGFmZmluaXR5ID0gJ2ZvcndhcmQnXG4gICAgICB9ID0gb3B0aW9uczsgLy8gUEVSRjogRXhpdCBlYXJseSBpZiB0aGUgb3BlcmF0aW9uIGlzIGd1YXJhbnRlZWQgbm90IHRvIGhhdmUgYW4gZWZmZWN0LlxuXG4gICAgICBpZiAoIXBhdGggfHwgKHBhdGggPT09IG51bGwgfHwgcGF0aCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGF0aC5sZW5ndGgpID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHAgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAob3BlcmF0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnaW5zZXJ0X25vZGUnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhciB7XG4gICAgICAgICAgICAgIHBhdGg6IG9wXG4gICAgICAgICAgICB9ID0gb3BlcmF0aW9uO1xuXG4gICAgICAgICAgICBpZiAoUGF0aC5lcXVhbHMob3AsIHApIHx8IFBhdGguZW5kc0JlZm9yZShvcCwgcCkgfHwgUGF0aC5pc0FuY2VzdG9yKG9wLCBwKSkge1xuICAgICAgICAgICAgICBwW29wLmxlbmd0aCAtIDFdICs9IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdyZW1vdmVfbm9kZSc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIHtcbiAgICAgICAgICAgICAgcGF0aDogX29wXG4gICAgICAgICAgICB9ID0gb3BlcmF0aW9uO1xuXG4gICAgICAgICAgICBpZiAoUGF0aC5lcXVhbHMoX29wLCBwKSB8fCBQYXRoLmlzQW5jZXN0b3IoX29wLCBwKSkge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUGF0aC5lbmRzQmVmb3JlKF9vcCwgcCkpIHtcbiAgICAgICAgICAgICAgcFtfb3AubGVuZ3RoIC0gMV0gLT0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ21lcmdlX25vZGUnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhciB7XG4gICAgICAgICAgICAgIHBhdGg6IF9vcDIsXG4gICAgICAgICAgICAgIHBvc2l0aW9uXG4gICAgICAgICAgICB9ID0gb3BlcmF0aW9uO1xuXG4gICAgICAgICAgICBpZiAoUGF0aC5lcXVhbHMoX29wMiwgcCkgfHwgUGF0aC5lbmRzQmVmb3JlKF9vcDIsIHApKSB7XG4gICAgICAgICAgICAgIHBbX29wMi5sZW5ndGggLSAxXSAtPSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChQYXRoLmlzQW5jZXN0b3IoX29wMiwgcCkpIHtcbiAgICAgICAgICAgICAgcFtfb3AyLmxlbmd0aCAtIDFdIC09IDE7XG4gICAgICAgICAgICAgIHBbX29wMi5sZW5ndGhdICs9IHBvc2l0aW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnc3BsaXRfbm9kZSc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIHtcbiAgICAgICAgICAgICAgcGF0aDogX29wMyxcbiAgICAgICAgICAgICAgcG9zaXRpb246IF9wb3NpdGlvblxuICAgICAgICAgICAgfSA9IG9wZXJhdGlvbjtcblxuICAgICAgICAgICAgaWYgKFBhdGguZXF1YWxzKF9vcDMsIHApKSB7XG4gICAgICAgICAgICAgIGlmIChhZmZpbml0eSA9PT0gJ2ZvcndhcmQnKSB7XG4gICAgICAgICAgICAgICAgcFtwLmxlbmd0aCAtIDFdICs9IDE7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWZmaW5pdHkgPT09ICdiYWNrd2FyZCcpIDsgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUGF0aC5lbmRzQmVmb3JlKF9vcDMsIHApKSB7XG4gICAgICAgICAgICAgIHBbX29wMy5sZW5ndGggLSAxXSArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChQYXRoLmlzQW5jZXN0b3IoX29wMywgcCkgJiYgcGF0aFtfb3AzLmxlbmd0aF0gPj0gX3Bvc2l0aW9uKSB7XG4gICAgICAgICAgICAgIHBbX29wMy5sZW5ndGggLSAxXSArPSAxO1xuICAgICAgICAgICAgICBwW19vcDMubGVuZ3RoXSAtPSBfcG9zaXRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdtb3ZlX25vZGUnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhciB7XG4gICAgICAgICAgICAgIHBhdGg6IF9vcDQsXG4gICAgICAgICAgICAgIG5ld1BhdGg6IG9ucFxuICAgICAgICAgICAgfSA9IG9wZXJhdGlvbjsgLy8gSWYgdGhlIG9sZCBhbmQgbmV3IHBhdGggYXJlIHRoZSBzYW1lLCBpdCdzIGEgbm8tb3AuXG5cbiAgICAgICAgICAgIGlmIChQYXRoLmVxdWFscyhfb3A0LCBvbnApKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFBhdGguaXNBbmNlc3Rvcihfb3A0LCBwKSB8fCBQYXRoLmVxdWFscyhfb3A0LCBwKSkge1xuICAgICAgICAgICAgICB2YXIgY29weSA9IG9ucC5zbGljZSgpO1xuXG4gICAgICAgICAgICAgIGlmIChQYXRoLmVuZHNCZWZvcmUoX29wNCwgb25wKSAmJiBfb3A0Lmxlbmd0aCA8IG9ucC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb3B5W19vcDQubGVuZ3RoIC0gMV0gLT0gMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBjb3B5LmNvbmNhdChwLnNsaWNlKF9vcDQubGVuZ3RoKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFBhdGguaXNTaWJsaW5nKF9vcDQsIG9ucCkgJiYgKFBhdGguaXNBbmNlc3RvcihvbnAsIHApIHx8IFBhdGguZXF1YWxzKG9ucCwgcCkpKSB7XG4gICAgICAgICAgICAgIGlmIChQYXRoLmVuZHNCZWZvcmUoX29wNCwgcCkpIHtcbiAgICAgICAgICAgICAgICBwW19vcDQubGVuZ3RoIC0gMV0gLT0gMTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwW19vcDQubGVuZ3RoIC0gMV0gKz0gMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChQYXRoLmVuZHNCZWZvcmUob25wLCBwKSB8fCBQYXRoLmVxdWFscyhvbnAsIHApIHx8IFBhdGguaXNBbmNlc3RvcihvbnAsIHApKSB7XG4gICAgICAgICAgICAgIGlmIChQYXRoLmVuZHNCZWZvcmUoX29wNCwgcCkpIHtcbiAgICAgICAgICAgICAgICBwW19vcDQubGVuZ3RoIC0gMV0gLT0gMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHBbb25wLmxlbmd0aCAtIDFdICs9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFBhdGguZW5kc0JlZm9yZShfb3A0LCBwKSkge1xuICAgICAgICAgICAgICBpZiAoUGF0aC5lcXVhbHMob25wLCBwKSkge1xuICAgICAgICAgICAgICAgIHBbb25wLmxlbmd0aCAtIDFdICs9IDE7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBwW19vcDQubGVuZ3RoIC0gMV0gLT0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn07XG5cbnZhciBQYXRoUmVmID0ge1xuICAvKipcclxuICAgKiBUcmFuc2Zvcm0gdGhlIHBhdGggcmVmJ3MgY3VycmVudCB2YWx1ZSBieSBhbiBvcGVyYXRpb24uXHJcbiAgICovXG4gIHRyYW5zZm9ybShyZWYsIG9wKSB7XG4gICAgdmFyIHtcbiAgICAgIGN1cnJlbnQsXG4gICAgICBhZmZpbml0eVxuICAgIH0gPSByZWY7XG5cbiAgICBpZiAoY3VycmVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBhdGggPSBQYXRoLnRyYW5zZm9ybShjdXJyZW50LCBvcCwge1xuICAgICAgYWZmaW5pdHlcbiAgICB9KTtcbiAgICByZWYuY3VycmVudCA9IHBhdGg7XG5cbiAgICBpZiAocGF0aCA9PSBudWxsKSB7XG4gICAgICByZWYudW5yZWYoKTtcbiAgICB9XG4gIH1cblxufTtcblxuZnVuY3Rpb24gb3duS2V5cyQ2KG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSB7IHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsgfSBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQ2KHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMkNihPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzJDYoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG52YXIgUG9pbnQgPSB7XG4gIC8qKlxyXG4gICAqIENvbXBhcmUgYSBwb2ludCB0byBhbm90aGVyLCByZXR1cm5pbmcgYW4gaW50ZWdlciBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlXHJcbiAgICogcG9pbnQgd2FzIGJlZm9yZSwgYXQsIG9yIGFmdGVyIHRoZSBvdGhlci5cclxuICAgKi9cbiAgY29tcGFyZShwb2ludCwgYW5vdGhlcikge1xuICAgIHZhciByZXN1bHQgPSBQYXRoLmNvbXBhcmUocG9pbnQucGF0aCwgYW5vdGhlci5wYXRoKTtcblxuICAgIGlmIChyZXN1bHQgPT09IDApIHtcbiAgICAgIGlmIChwb2ludC5vZmZzZXQgPCBhbm90aGVyLm9mZnNldCkgcmV0dXJuIC0xO1xuICAgICAgaWYgKHBvaW50Lm9mZnNldCA+IGFub3RoZXIub2Zmc2V0KSByZXR1cm4gMTtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBwb2ludCBpcyBhZnRlciBhbm90aGVyLlxyXG4gICAqL1xuICBpc0FmdGVyKHBvaW50LCBhbm90aGVyKSB7XG4gICAgcmV0dXJuIFBvaW50LmNvbXBhcmUocG9pbnQsIGFub3RoZXIpID09PSAxO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgcG9pbnQgaXMgYmVmb3JlIGFub3RoZXIuXHJcbiAgICovXG4gIGlzQmVmb3JlKHBvaW50LCBhbm90aGVyKSB7XG4gICAgcmV0dXJuIFBvaW50LmNvbXBhcmUocG9pbnQsIGFub3RoZXIpID09PSAtMTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHBvaW50IGlzIGV4YWN0bHkgZXF1YWwgdG8gYW5vdGhlci5cclxuICAgKi9cbiAgZXF1YWxzKHBvaW50LCBhbm90aGVyKSB7XG4gICAgLy8gUEVSRjogZW5zdXJlIHRoZSBvZmZzZXRzIGFyZSBlcXVhbCBmaXJzdCBzaW5jZSB0aGV5IGFyZSBjaGVhcGVyIHRvIGNoZWNrLlxuICAgIHJldHVybiBwb2ludC5vZmZzZXQgPT09IGFub3RoZXIub2Zmc2V0ICYmIFBhdGguZXF1YWxzKHBvaW50LnBhdGgsIGFub3RoZXIucGF0aCk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSB2YWx1ZSBpbXBsZW1lbnRzIHRoZSBgUG9pbnRgIGludGVyZmFjZS5cclxuICAgKi9cbiAgaXNQb2ludCh2YWx1ZSkge1xuICAgIHJldHVybiBpc1BsYWluT2JqZWN0KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUub2Zmc2V0ID09PSAnbnVtYmVyJyAmJiBQYXRoLmlzUGF0aCh2YWx1ZS5wYXRoKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBUcmFuc2Zvcm0gYSBwb2ludCBieSBhbiBvcGVyYXRpb24uXHJcbiAgICovXG4gIHRyYW5zZm9ybShwb2ludCwgb3ApIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgcmV0dXJuIHByb2R1Y2UocG9pbnQsIHAgPT4ge1xuICAgICAgaWYgKHAgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciB7XG4gICAgICAgIGFmZmluaXR5ID0gJ2ZvcndhcmQnXG4gICAgICB9ID0gb3B0aW9ucztcbiAgICAgIHZhciB7XG4gICAgICAgIHBhdGgsXG4gICAgICAgIG9mZnNldFxuICAgICAgfSA9IHA7XG5cbiAgICAgIHN3aXRjaCAob3AudHlwZSkge1xuICAgICAgICBjYXNlICdpbnNlcnRfbm9kZSc6XG4gICAgICAgIGNhc2UgJ21vdmVfbm9kZSc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgcC5wYXRoID0gUGF0aC50cmFuc2Zvcm0ocGF0aCwgb3AsIG9wdGlvbnMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ2luc2VydF90ZXh0JzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZiAoUGF0aC5lcXVhbHMob3AucGF0aCwgcGF0aCkgJiYgb3Aub2Zmc2V0IDw9IG9mZnNldCkge1xuICAgICAgICAgICAgICBwLm9mZnNldCArPSBvcC50ZXh0Lmxlbmd0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ21lcmdlX25vZGUnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlmIChQYXRoLmVxdWFscyhvcC5wYXRoLCBwYXRoKSkge1xuICAgICAgICAgICAgICBwLm9mZnNldCArPSBvcC5wb3NpdGlvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcC5wYXRoID0gUGF0aC50cmFuc2Zvcm0ocGF0aCwgb3AsIG9wdGlvbnMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ3JlbW92ZV90ZXh0JzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZiAoUGF0aC5lcXVhbHMob3AucGF0aCwgcGF0aCkgJiYgb3Aub2Zmc2V0IDw9IG9mZnNldCkge1xuICAgICAgICAgICAgICBwLm9mZnNldCAtPSBNYXRoLm1pbihvZmZzZXQgLSBvcC5vZmZzZXQsIG9wLnRleHQubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ3JlbW92ZV9ub2RlJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZiAoUGF0aC5lcXVhbHMob3AucGF0aCwgcGF0aCkgfHwgUGF0aC5pc0FuY2VzdG9yKG9wLnBhdGgsIHBhdGgpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwLnBhdGggPSBQYXRoLnRyYW5zZm9ybShwYXRoLCBvcCwgb3B0aW9ucyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnc3BsaXRfbm9kZSc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgaWYgKFBhdGguZXF1YWxzKG9wLnBhdGgsIHBhdGgpKSB7XG4gICAgICAgICAgICAgIGlmIChvcC5wb3NpdGlvbiA9PT0gb2Zmc2V0ICYmIGFmZmluaXR5ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcC5wb3NpdGlvbiA8IG9mZnNldCB8fCBvcC5wb3NpdGlvbiA9PT0gb2Zmc2V0ICYmIGFmZmluaXR5ID09PSAnZm9yd2FyZCcpIHtcbiAgICAgICAgICAgICAgICBwLm9mZnNldCAtPSBvcC5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBwLnBhdGggPSBQYXRoLnRyYW5zZm9ybShwYXRoLCBvcCwgX29iamVjdFNwcmVhZCQ2KF9vYmplY3RTcHJlYWQkNih7fSwgb3B0aW9ucyksIHt9LCB7XG4gICAgICAgICAgICAgICAgICBhZmZpbml0eTogJ2ZvcndhcmQnXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwLnBhdGggPSBQYXRoLnRyYW5zZm9ybShwYXRoLCBvcCwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59O1xuXG52YXIgUG9pbnRSZWYgPSB7XG4gIC8qKlxyXG4gICAqIFRyYW5zZm9ybSB0aGUgcG9pbnQgcmVmJ3MgY3VycmVudCB2YWx1ZSBieSBhbiBvcGVyYXRpb24uXHJcbiAgICovXG4gIHRyYW5zZm9ybShyZWYsIG9wKSB7XG4gICAgdmFyIHtcbiAgICAgIGN1cnJlbnQsXG4gICAgICBhZmZpbml0eVxuICAgIH0gPSByZWY7XG5cbiAgICBpZiAoY3VycmVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBvaW50ID0gUG9pbnQudHJhbnNmb3JtKGN1cnJlbnQsIG9wLCB7XG4gICAgICBhZmZpbml0eVxuICAgIH0pO1xuICAgIHJlZi5jdXJyZW50ID0gcG9pbnQ7XG5cbiAgICBpZiAocG9pbnQgPT0gbnVsbCkge1xuICAgICAgcmVmLnVucmVmKCk7XG4gICAgfVxuICB9XG5cbn07XG5cbnZhciBfZXhjbHVkZWQkMiA9IFtcImFuY2hvclwiLCBcImZvY3VzXCJdO1xuXG5mdW5jdGlvbiBvd25LZXlzJDUob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDUodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQ1KE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkNShPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cbnZhciBSYW5nZSA9IHtcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBzdGFydCBhbmQgZW5kIHBvaW50cyBvZiBhIHJhbmdlLCBpbiB0aGUgb3JkZXIgaW4gd2hpY2ggdGhleSBhcHBlYXJcclxuICAgKiBpbiB0aGUgZG9jdW1lbnQuXHJcbiAgICovXG4gIGVkZ2VzKHJhbmdlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICByZXZlcnNlID0gZmFsc2VcbiAgICB9ID0gb3B0aW9ucztcbiAgICB2YXIge1xuICAgICAgYW5jaG9yLFxuICAgICAgZm9jdXNcbiAgICB9ID0gcmFuZ2U7XG4gICAgcmV0dXJuIFJhbmdlLmlzQmFja3dhcmQocmFuZ2UpID09PSByZXZlcnNlID8gW2FuY2hvciwgZm9jdXNdIDogW2ZvY3VzLCBhbmNob3JdO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgZW5kIHBvaW50IG9mIGEgcmFuZ2UuXHJcbiAgICovXG4gIGVuZChyYW5nZSkge1xuICAgIHZhciBbLCBlbmRdID0gUmFuZ2UuZWRnZXMocmFuZ2UpO1xuICAgIHJldHVybiBlbmQ7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSByYW5nZSBpcyBleGFjdGx5IGVxdWFsIHRvIGFub3RoZXIuXHJcbiAgICovXG4gIGVxdWFscyhyYW5nZSwgYW5vdGhlcikge1xuICAgIHJldHVybiBQb2ludC5lcXVhbHMocmFuZ2UuYW5jaG9yLCBhbm90aGVyLmFuY2hvcikgJiYgUG9pbnQuZXF1YWxzKHJhbmdlLmZvY3VzLCBhbm90aGVyLmZvY3VzKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHJhbmdlIGluY2x1ZGVzIGEgcGF0aCwgYSBwb2ludCBvciBwYXJ0IG9mIGFub3RoZXIgcmFuZ2UuXHJcbiAgICovXG4gIGluY2x1ZGVzKHJhbmdlLCB0YXJnZXQpIHtcbiAgICBpZiAoUmFuZ2UuaXNSYW5nZSh0YXJnZXQpKSB7XG4gICAgICBpZiAoUmFuZ2UuaW5jbHVkZXMocmFuZ2UsIHRhcmdldC5hbmNob3IpIHx8IFJhbmdlLmluY2x1ZGVzKHJhbmdlLCB0YXJnZXQuZm9jdXMpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgW3JzLCByZV0gPSBSYW5nZS5lZGdlcyhyYW5nZSk7XG4gICAgICB2YXIgW3RzLCB0ZV0gPSBSYW5nZS5lZGdlcyh0YXJnZXQpO1xuICAgICAgcmV0dXJuIFBvaW50LmlzQmVmb3JlKHJzLCB0cykgJiYgUG9pbnQuaXNBZnRlcihyZSwgdGUpO1xuICAgIH1cblxuICAgIHZhciBbc3RhcnQsIGVuZF0gPSBSYW5nZS5lZGdlcyhyYW5nZSk7XG4gICAgdmFyIGlzQWZ0ZXJTdGFydCA9IGZhbHNlO1xuICAgIHZhciBpc0JlZm9yZUVuZCA9IGZhbHNlO1xuXG4gICAgaWYgKFBvaW50LmlzUG9pbnQodGFyZ2V0KSkge1xuICAgICAgaXNBZnRlclN0YXJ0ID0gUG9pbnQuY29tcGFyZSh0YXJnZXQsIHN0YXJ0KSA+PSAwO1xuICAgICAgaXNCZWZvcmVFbmQgPSBQb2ludC5jb21wYXJlKHRhcmdldCwgZW5kKSA8PSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBpc0FmdGVyU3RhcnQgPSBQYXRoLmNvbXBhcmUodGFyZ2V0LCBzdGFydC5wYXRoKSA+PSAwO1xuICAgICAgaXNCZWZvcmVFbmQgPSBQYXRoLmNvbXBhcmUodGFyZ2V0LCBlbmQucGF0aCkgPD0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNBZnRlclN0YXJ0ICYmIGlzQmVmb3JlRW5kO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgaW50ZXJzZWN0aW9uIG9mIGEgcmFuZ2Ugd2l0aCBhbm90aGVyLlxyXG4gICAqL1xuICBpbnRlcnNlY3Rpb24ocmFuZ2UsIGFub3RoZXIpIHtcbiAgICB2YXIgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhyYW5nZSwgX2V4Y2x1ZGVkJDIpO1xuXG4gICAgdmFyIFtzMSwgZTFdID0gUmFuZ2UuZWRnZXMocmFuZ2UpO1xuICAgIHZhciBbczIsIGUyXSA9IFJhbmdlLmVkZ2VzKGFub3RoZXIpO1xuICAgIHZhciBzdGFydCA9IFBvaW50LmlzQmVmb3JlKHMxLCBzMikgPyBzMiA6IHMxO1xuICAgIHZhciBlbmQgPSBQb2ludC5pc0JlZm9yZShlMSwgZTIpID8gZTEgOiBlMjtcblxuICAgIGlmIChQb2ludC5pc0JlZm9yZShlbmQsIHN0YXJ0KSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkJDUoe1xuICAgICAgICBhbmNob3I6IHN0YXJ0LFxuICAgICAgICBmb2N1czogZW5kXG4gICAgICB9LCByZXN0KTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSByYW5nZSBpcyBiYWNrd2FyZCwgbWVhbmluZyB0aGF0IGl0cyBhbmNob3IgcG9pbnQgYXBwZWFycyBpbiB0aGVcclxuICAgKiBkb2N1bWVudCBfYWZ0ZXJfIGl0cyBmb2N1cyBwb2ludC5cclxuICAgKi9cbiAgaXNCYWNrd2FyZChyYW5nZSkge1xuICAgIHZhciB7XG4gICAgICBhbmNob3IsXG4gICAgICBmb2N1c1xuICAgIH0gPSByYW5nZTtcbiAgICByZXR1cm4gUG9pbnQuaXNBZnRlcihhbmNob3IsIGZvY3VzKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHJhbmdlIGlzIGNvbGxhcHNlZCwgbWVhbmluZyB0aGF0IGJvdGggaXRzIGFuY2hvciBhbmQgZm9jdXNcclxuICAgKiBwb2ludHMgcmVmZXIgdG8gdGhlIGV4YWN0IHNhbWUgcG9zaXRpb24gaW4gdGhlIGRvY3VtZW50LlxyXG4gICAqL1xuICBpc0NvbGxhcHNlZChyYW5nZSkge1xuICAgIHZhciB7XG4gICAgICBhbmNob3IsXG4gICAgICBmb2N1c1xuICAgIH0gPSByYW5nZTtcbiAgICByZXR1cm4gUG9pbnQuZXF1YWxzKGFuY2hvciwgZm9jdXMpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgcmFuZ2UgaXMgZXhwYW5kZWQuXHJcbiAgICpcclxuICAgKiBUaGlzIGlzIHRoZSBvcHBvc2l0ZSBvZiBbW1JhbmdlLmlzQ29sbGFwc2VkXV0gYW5kIGlzIHByb3ZpZGVkIGZvciBsZWdpYmlsaXR5LlxyXG4gICAqL1xuICBpc0V4cGFuZGVkKHJhbmdlKSB7XG4gICAgcmV0dXJuICFSYW5nZS5pc0NvbGxhcHNlZChyYW5nZSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSByYW5nZSBpcyBmb3J3YXJkLlxyXG4gICAqXHJcbiAgICogVGhpcyBpcyB0aGUgb3Bwb3NpdGUgb2YgW1tSYW5nZS5pc0JhY2t3YXJkXV0gYW5kIGlzIHByb3ZpZGVkIGZvciBsZWdpYmlsaXR5LlxyXG4gICAqL1xuICBpc0ZvcndhcmQocmFuZ2UpIHtcbiAgICByZXR1cm4gIVJhbmdlLmlzQmFja3dhcmQocmFuZ2UpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgdmFsdWUgaW1wbGVtZW50cyB0aGUgW1tSYW5nZV1dIGludGVyZmFjZS5cclxuICAgKi9cbiAgaXNSYW5nZSh2YWx1ZSkge1xuICAgIHJldHVybiBpc1BsYWluT2JqZWN0KHZhbHVlKSAmJiBQb2ludC5pc1BvaW50KHZhbHVlLmFuY2hvcikgJiYgUG9pbnQuaXNQb2ludCh2YWx1ZS5mb2N1cyk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogSXRlcmF0ZSB0aHJvdWdoIGFsbCBvZiB0aGUgcG9pbnQgZW50cmllcyBpbiBhIHJhbmdlLlxyXG4gICAqL1xuICAqcG9pbnRzKHJhbmdlKSB7XG4gICAgeWllbGQgW3JhbmdlLmFuY2hvciwgJ2FuY2hvciddO1xuICAgIHlpZWxkIFtyYW5nZS5mb2N1cywgJ2ZvY3VzJ107XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogR2V0IHRoZSBzdGFydCBwb2ludCBvZiBhIHJhbmdlLlxyXG4gICAqL1xuICBzdGFydChyYW5nZSkge1xuICAgIHZhciBbc3RhcnRdID0gUmFuZ2UuZWRnZXMocmFuZ2UpO1xuICAgIHJldHVybiBzdGFydDtcbiAgfSxcblxuICAvKipcclxuICAgKiBUcmFuc2Zvcm0gYSByYW5nZSBieSBhbiBvcGVyYXRpb24uXHJcbiAgICovXG4gIHRyYW5zZm9ybShyYW5nZSwgb3ApIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgcmV0dXJuIHByb2R1Y2UocmFuZ2UsIHIgPT4ge1xuICAgICAgaWYgKHIgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciB7XG4gICAgICAgIGFmZmluaXR5ID0gJ2lud2FyZCdcbiAgICAgIH0gPSBvcHRpb25zO1xuICAgICAgdmFyIGFmZmluaXR5QW5jaG9yO1xuICAgICAgdmFyIGFmZmluaXR5Rm9jdXM7XG5cbiAgICAgIGlmIChhZmZpbml0eSA9PT0gJ2lud2FyZCcpIHtcbiAgICAgICAgLy8gSWYgdGhlIHJhbmdlIGlzIGNvbGxhcHNlZCwgbWFrZSBzdXJlIHRvIHVzZSB0aGUgc2FtZSBhZmZpbml0eSB0b1xuICAgICAgICAvLyBhdm9pZCB0aGUgdHdvIHBvaW50cyBwYXNzaW5nIGVhY2ggb3RoZXIgYW5kIGV4cGFuZGluZyBpbiB0aGUgb3Bwb3NpdGVcbiAgICAgICAgLy8gZGlyZWN0aW9uXG4gICAgICAgIHZhciBpc0NvbGxhcHNlZCA9IFJhbmdlLmlzQ29sbGFwc2VkKHIpO1xuXG4gICAgICAgIGlmIChSYW5nZS5pc0ZvcndhcmQocikpIHtcbiAgICAgICAgICBhZmZpbml0eUFuY2hvciA9ICdmb3J3YXJkJztcbiAgICAgICAgICBhZmZpbml0eUZvY3VzID0gaXNDb2xsYXBzZWQgPyBhZmZpbml0eUFuY2hvciA6ICdiYWNrd2FyZCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWZmaW5pdHlBbmNob3IgPSAnYmFja3dhcmQnO1xuICAgICAgICAgIGFmZmluaXR5Rm9jdXMgPSBpc0NvbGxhcHNlZCA/IGFmZmluaXR5QW5jaG9yIDogJ2ZvcndhcmQnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGFmZmluaXR5ID09PSAnb3V0d2FyZCcpIHtcbiAgICAgICAgaWYgKFJhbmdlLmlzRm9yd2FyZChyKSkge1xuICAgICAgICAgIGFmZmluaXR5QW5jaG9yID0gJ2JhY2t3YXJkJztcbiAgICAgICAgICBhZmZpbml0eUZvY3VzID0gJ2ZvcndhcmQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFmZmluaXR5QW5jaG9yID0gJ2ZvcndhcmQnO1xuICAgICAgICAgIGFmZmluaXR5Rm9jdXMgPSAnYmFja3dhcmQnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZmZpbml0eUFuY2hvciA9IGFmZmluaXR5O1xuICAgICAgICBhZmZpbml0eUZvY3VzID0gYWZmaW5pdHk7XG4gICAgICB9XG5cbiAgICAgIHZhciBhbmNob3IgPSBQb2ludC50cmFuc2Zvcm0oci5hbmNob3IsIG9wLCB7XG4gICAgICAgIGFmZmluaXR5OiBhZmZpbml0eUFuY2hvclxuICAgICAgfSk7XG4gICAgICB2YXIgZm9jdXMgPSBQb2ludC50cmFuc2Zvcm0oci5mb2N1cywgb3AsIHtcbiAgICAgICAgYWZmaW5pdHk6IGFmZmluaXR5Rm9jdXNcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWFuY2hvciB8fCAhZm9jdXMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHIuYW5jaG9yID0gYW5jaG9yO1xuICAgICAgci5mb2N1cyA9IGZvY3VzO1xuICAgIH0pO1xuICB9XG5cbn07XG5cbnZhciBSYW5nZVJlZiA9IHtcbiAgLyoqXHJcbiAgICogVHJhbnNmb3JtIHRoZSByYW5nZSByZWYncyBjdXJyZW50IHZhbHVlIGJ5IGFuIG9wZXJhdGlvbi5cclxuICAgKi9cbiAgdHJhbnNmb3JtKHJlZiwgb3ApIHtcbiAgICB2YXIge1xuICAgICAgY3VycmVudCxcbiAgICAgIGFmZmluaXR5XG4gICAgfSA9IHJlZjtcblxuICAgIGlmIChjdXJyZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcGF0aCA9IFJhbmdlLnRyYW5zZm9ybShjdXJyZW50LCBvcCwge1xuICAgICAgYWZmaW5pdHlcbiAgICB9KTtcbiAgICByZWYuY3VycmVudCA9IHBhdGg7XG5cbiAgICBpZiAocGF0aCA9PSBudWxsKSB7XG4gICAgICByZWYudW5yZWYoKTtcbiAgICB9XG4gIH1cblxufTtcblxuLypcclxuICBDdXN0b20gZGVlcCBlcXVhbCBjb21wYXJpc29uIGZvciBTbGF0ZSBub2Rlcy5cclxuXG4gIFdlIGRvbid0IG5lZWQgZ2VuZXJhbCBwdXJwb3NlIGRlZXAgZXF1YWxpdHk7XHJcbiAgU2xhdGUgb25seSBzdXBwb3J0cyBwbGFpbiB2YWx1ZXMsIEFycmF5cywgYW5kIG5lc3RlZCBvYmplY3RzLlxyXG4gIENvbXBsZXggdmFsdWVzIG5lc3RlZCBpbnNpZGUgQXJyYXlzIGFyZSBub3Qgc3VwcG9ydGVkLlxyXG5cbiAgU2xhdGUgb2JqZWN0cyBhcmUgZGVzaWduZWQgdG8gYmUgc2VyaWFsaXNlZCwgc29cclxuICBtaXNzaW5nIGtleXMgYXJlIGRlbGliZXJhdGVseSBub3JtYWxpc2VkIHRvIHVuZGVmaW5lZC5cclxuICovXG5cbnZhciBpc0RlZXBFcXVhbCA9IChub2RlLCBhbm90aGVyKSA9PiB7XG4gIGZvciAodmFyIGtleSBpbiBub2RlKSB7XG4gICAgdmFyIGEgPSBub2RlW2tleV07XG4gICAgdmFyIGIgPSBhbm90aGVyW2tleV07XG5cbiAgICBpZiAoaXNQbGFpbk9iamVjdChhKSAmJiBpc1BsYWluT2JqZWN0KGIpKSB7XG4gICAgICBpZiAoIWlzRGVlcEVxdWFsKGEsIGIpKSByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGEpICYmIEFycmF5LmlzQXJyYXkoYikpIHtcbiAgICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhW2ldICE9PSBiW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoYSAhPT0gYikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICAvKlxyXG4gICAgRGVlcCBvYmplY3QgZXF1YWxpdHkgaXMgb25seSBuZWNlc3NhcnkgaW4gb25lIGRpcmVjdGlvbjsgaW4gdGhlIHJldmVyc2UgZGlyZWN0aW9uXHJcbiAgICB3ZSBhcmUgb25seSBsb29raW5nIGZvciBrZXlzIHRoYXQgYXJlIG1pc3NpbmcuXHJcbiAgICBBcyBhYm92ZSwgdW5kZWZpbmVkIGtleXMgYXJlIG5vcm1hbGlzZWQgdG8gbWlzc2luZy5cclxuICAqL1xuXG5cbiAgZm9yICh2YXIgX2tleSBpbiBhbm90aGVyKSB7XG4gICAgaWYgKG5vZGVbX2tleV0gPT09IHVuZGVmaW5lZCAmJiBhbm90aGVyW19rZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbnZhciBfZXhjbHVkZWQkMSA9IFtcInRleHRcIl0sXG4gICAgX2V4Y2x1ZGVkMiQxID0gW1wiYW5jaG9yXCIsIFwiZm9jdXNcIl07XG5cbmZ1bmN0aW9uIG93bktleXMkNChvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgeyBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IH0ga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkNCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzJDQoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyQ0KE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxudmFyIFRleHQgPSB7XG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIHR3byB0ZXh0IG5vZGVzIGFyZSBlcXVhbC5cclxuICAgKlxyXG4gICAqIFdoZW4gbG9vc2UgaXMgc2V0LCB0aGUgdGV4dCBpcyBub3QgY29tcGFyZWQuIFRoaXMgaXNcclxuICAgKiB1c2VkIHRvIGNoZWNrIHdoZXRoZXIgc2libGluZyB0ZXh0IG5vZGVzIGNhbiBiZSBtZXJnZWQuXHJcbiAgICovXG4gIGVxdWFscyh0ZXh0LCBhbm90aGVyKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICBsb29zZSA9IGZhbHNlXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICBmdW5jdGlvbiBvbWl0VGV4dChvYmopIHtcbiAgICAgIHZhciByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwgX2V4Y2x1ZGVkJDEpO1xuXG4gICAgICByZXR1cm4gcmVzdDtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNEZWVwRXF1YWwobG9vc2UgPyBvbWl0VGV4dCh0ZXh0KSA6IHRleHQsIGxvb3NlID8gb21pdFRleHQoYW5vdGhlcikgOiBhbm90aGVyKTtcbiAgfSxcblxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIHZhbHVlIGltcGxlbWVudHMgdGhlIGBUZXh0YCBpbnRlcmZhY2UuXHJcbiAgICovXG4gIGlzVGV4dCh2YWx1ZSkge1xuICAgIHJldHVybiBpc1BsYWluT2JqZWN0KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUudGV4dCA9PT0gJ3N0cmluZyc7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhIGxpc3Qgb2YgYFRleHRgIG9iamVjdHMuXHJcbiAgICovXG4gIGlzVGV4dExpc3QodmFsdWUpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUuZXZlcnkodmFsID0+IFRleHQuaXNUZXh0KHZhbCkpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIHNvbWUgcHJvcHMgYXJlIGEgcGFydGlhbCBvZiBUZXh0LlxyXG4gICAqL1xuICBpc1RleHRQcm9wcyhwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy50ZXh0ICE9PSB1bmRlZmluZWQ7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYW4gdGV4dCBtYXRjaGVzIHNldCBvZiBwcm9wZXJ0aWVzLlxyXG4gICAqXHJcbiAgICogTm90ZTogdGhpcyBpcyBmb3IgbWF0Y2hpbmcgY3VzdG9tIHByb3BlcnRpZXMsIGFuZCBpdCBkb2VzIG5vdCBlbnN1cmUgdGhhdFxyXG4gICAqIHRoZSBgdGV4dGAgcHJvcGVydHkgYXJlIHR3byBub2RlcyBlcXVhbC5cclxuICAgKi9cbiAgbWF0Y2hlcyh0ZXh0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgaWYgKGtleSA9PT0gJ3RleHQnKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRleHQuaGFzT3duUHJvcGVydHkoa2V5KSB8fCB0ZXh0W2tleV0gIT09IHByb3BzW2tleV0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgbGVhdmVzIGZvciBhIHRleHQgbm9kZSBnaXZlbiBkZWNvcmF0aW9ucy5cclxuICAgKi9cbiAgZGVjb3JhdGlvbnMobm9kZSwgZGVjb3JhdGlvbnMpIHtcbiAgICB2YXIgbGVhdmVzID0gW19vYmplY3RTcHJlYWQkNCh7fSwgbm9kZSldO1xuXG4gICAgZm9yICh2YXIgZGVjIG9mIGRlY29yYXRpb25zKSB7XG4gICAgICB2YXIgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhkZWMsIF9leGNsdWRlZDIkMSk7XG5cbiAgICAgIHZhciBbc3RhcnQsIGVuZF0gPSBSYW5nZS5lZGdlcyhkZWMpO1xuICAgICAgdmFyIG5leHQgPSBbXTtcbiAgICAgIHZhciBvID0gMDtcblxuICAgICAgZm9yICh2YXIgbGVhZiBvZiBsZWF2ZXMpIHtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBsZW5ndGhcbiAgICAgICAgfSA9IGxlYWYudGV4dDtcbiAgICAgICAgdmFyIG9mZnNldCA9IG87XG4gICAgICAgIG8gKz0gbGVuZ3RoOyAvLyBJZiB0aGUgcmFuZ2UgZW5jb21wYXNlcyB0aGUgZW50aXJlIGxlYWYsIGFkZCB0aGUgcmFuZ2UuXG5cbiAgICAgICAgaWYgKHN0YXJ0Lm9mZnNldCA8PSBvZmZzZXQgJiYgZW5kLm9mZnNldCA+PSBvKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihsZWFmLCByZXN0KTtcbiAgICAgICAgICBuZXh0LnB1c2gobGVhZik7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gLy8gSWYgdGhlIHJhbmdlIGV4cGFuZGVkIGFuZCBtYXRjaCB0aGUgbGVhZiwgb3Igc3RhcnRzIGFmdGVyLCBvciBlbmRzIGJlZm9yZSBpdCwgY29udGludWUuXG5cblxuICAgICAgICBpZiAoc3RhcnQub2Zmc2V0ICE9PSBlbmQub2Zmc2V0ICYmIChzdGFydC5vZmZzZXQgPT09IG8gfHwgZW5kLm9mZnNldCA9PT0gb2Zmc2V0KSB8fCBzdGFydC5vZmZzZXQgPiBvIHx8IGVuZC5vZmZzZXQgPCBvZmZzZXQgfHwgZW5kLm9mZnNldCA9PT0gb2Zmc2V0ICYmIG9mZnNldCAhPT0gMCkge1xuICAgICAgICAgIG5leHQucHVzaChsZWFmKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSAvLyBPdGhlcndpc2Ugd2UgbmVlZCB0byBzcGxpdCB0aGUgbGVhZiwgYXQgdGhlIHN0YXJ0LCBlbmQsIG9yIGJvdGgsXG4gICAgICAgIC8vIGFuZCBhZGQgdGhlIHJhbmdlIHRvIHRoZSBtaWRkbGUgaW50ZXJzZWN0aW5nIHNlY3Rpb24uIERvIHRoZSBlbmRcbiAgICAgICAgLy8gc3BsaXQgZmlyc3Qgc2luY2Ugd2UgZG9uJ3QgbmVlZCB0byB1cGRhdGUgdGhlIG9mZnNldCB0aGF0IHdheS5cblxuXG4gICAgICAgIHZhciBtaWRkbGUgPSBsZWFmO1xuICAgICAgICB2YXIgYmVmb3JlID0gdm9pZCAwO1xuICAgICAgICB2YXIgYWZ0ZXIgPSB2b2lkIDA7XG5cbiAgICAgICAgaWYgKGVuZC5vZmZzZXQgPCBvKSB7XG4gICAgICAgICAgdmFyIG9mZiA9IGVuZC5vZmZzZXQgLSBvZmZzZXQ7XG4gICAgICAgICAgYWZ0ZXIgPSBfb2JqZWN0U3ByZWFkJDQoX29iamVjdFNwcmVhZCQ0KHt9LCBtaWRkbGUpLCB7fSwge1xuICAgICAgICAgICAgdGV4dDogbWlkZGxlLnRleHQuc2xpY2Uob2ZmKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG1pZGRsZSA9IF9vYmplY3RTcHJlYWQkNChfb2JqZWN0U3ByZWFkJDQoe30sIG1pZGRsZSksIHt9LCB7XG4gICAgICAgICAgICB0ZXh0OiBtaWRkbGUudGV4dC5zbGljZSgwLCBvZmYpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhcnQub2Zmc2V0ID4gb2Zmc2V0KSB7XG4gICAgICAgICAgdmFyIF9vZmYgPSBzdGFydC5vZmZzZXQgLSBvZmZzZXQ7XG5cbiAgICAgICAgICBiZWZvcmUgPSBfb2JqZWN0U3ByZWFkJDQoX29iamVjdFNwcmVhZCQ0KHt9LCBtaWRkbGUpLCB7fSwge1xuICAgICAgICAgICAgdGV4dDogbWlkZGxlLnRleHQuc2xpY2UoMCwgX29mZilcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBtaWRkbGUgPSBfb2JqZWN0U3ByZWFkJDQoX29iamVjdFNwcmVhZCQ0KHt9LCBtaWRkbGUpLCB7fSwge1xuICAgICAgICAgICAgdGV4dDogbWlkZGxlLnRleHQuc2xpY2UoX29mZilcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5hc3NpZ24obWlkZGxlLCByZXN0KTtcblxuICAgICAgICBpZiAoYmVmb3JlKSB7XG4gICAgICAgICAgbmV4dC5wdXNoKGJlZm9yZSk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXh0LnB1c2gobWlkZGxlKTtcblxuICAgICAgICBpZiAoYWZ0ZXIpIHtcbiAgICAgICAgICBuZXh0LnB1c2goYWZ0ZXIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxlYXZlcyA9IG5leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlYXZlcztcbiAgfVxuXG59O1xuXG5mdW5jdGlvbiBvd25LZXlzJDMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDModGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkMyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIGFwcGx5VG9EcmFmdCA9IChlZGl0b3IsIHNlbGVjdGlvbiwgb3ApID0+IHtcbiAgc3dpdGNoIChvcC50eXBlKSB7XG4gICAgY2FzZSAnaW5zZXJ0X25vZGUnOlxuICAgICAge1xuICAgICAgICB2YXIge1xuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgbm9kZVxuICAgICAgICB9ID0gb3A7XG4gICAgICAgIHZhciBwYXJlbnQgPSBOb2RlLnBhcmVudChlZGl0b3IsIHBhdGgpO1xuICAgICAgICB2YXIgaW5kZXggPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgaWYgKGluZGV4ID4gcGFyZW50LmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBhcHBseSBhbiBcXFwiaW5zZXJ0X25vZGVcXFwiIG9wZXJhdGlvbiBhdCBwYXRoIFtcIi5jb25jYXQocGF0aCwgXCJdIGJlY2F1c2UgdGhlIGRlc3RpbmF0aW9uIGlzIHBhc3QgdGhlIGVuZCBvZiB0aGUgbm9kZS5cIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMCwgbm9kZSk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgIGZvciAodmFyIFtwb2ludCwga2V5XSBvZiBSYW5nZS5wb2ludHMoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgc2VsZWN0aW9uW2tleV0gPSBQb2ludC50cmFuc2Zvcm0ocG9pbnQsIG9wKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIGNhc2UgJ2luc2VydF90ZXh0JzpcbiAgICAgIHtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBwYXRoOiBfcGF0aCxcbiAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgdGV4dFxuICAgICAgICB9ID0gb3A7XG4gICAgICAgIGlmICh0ZXh0Lmxlbmd0aCA9PT0gMCkgYnJlYWs7XG5cbiAgICAgICAgdmFyIF9ub2RlID0gTm9kZS5sZWFmKGVkaXRvciwgX3BhdGgpO1xuXG4gICAgICAgIHZhciBiZWZvcmUgPSBfbm9kZS50ZXh0LnNsaWNlKDAsIG9mZnNldCk7XG5cbiAgICAgICAgdmFyIGFmdGVyID0gX25vZGUudGV4dC5zbGljZShvZmZzZXQpO1xuXG4gICAgICAgIF9ub2RlLnRleHQgPSBiZWZvcmUgKyB0ZXh0ICsgYWZ0ZXI7XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgIGZvciAodmFyIFtfcG9pbnQsIF9rZXldIG9mIFJhbmdlLnBvaW50cyhzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICBzZWxlY3Rpb25bX2tleV0gPSBQb2ludC50cmFuc2Zvcm0oX3BvaW50LCBvcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICBjYXNlICdtZXJnZV9ub2RlJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBwYXRoOiBfcGF0aDJcbiAgICAgICAgfSA9IG9wO1xuXG4gICAgICAgIHZhciBfbm9kZTIgPSBOb2RlLmdldChlZGl0b3IsIF9wYXRoMik7XG5cbiAgICAgICAgdmFyIHByZXZQYXRoID0gUGF0aC5wcmV2aW91cyhfcGF0aDIpO1xuICAgICAgICB2YXIgcHJldiA9IE5vZGUuZ2V0KGVkaXRvciwgcHJldlBhdGgpO1xuXG4gICAgICAgIHZhciBfcGFyZW50ID0gTm9kZS5wYXJlbnQoZWRpdG9yLCBfcGF0aDIpO1xuXG4gICAgICAgIHZhciBfaW5kZXggPSBfcGF0aDJbX3BhdGgyLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIGlmIChUZXh0LmlzVGV4dChfbm9kZTIpICYmIFRleHQuaXNUZXh0KHByZXYpKSB7XG4gICAgICAgICAgcHJldi50ZXh0ICs9IF9ub2RlMi50ZXh0O1xuICAgICAgICB9IGVsc2UgaWYgKCFUZXh0LmlzVGV4dChfbm9kZTIpICYmICFUZXh0LmlzVGV4dChwcmV2KSkge1xuICAgICAgICAgIHByZXYuY2hpbGRyZW4ucHVzaCguLi5fbm9kZTIuY2hpbGRyZW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBhcHBseSBhIFxcXCJtZXJnZV9ub2RlXFxcIiBvcGVyYXRpb24gYXQgcGF0aCBbXCIuY29uY2F0KF9wYXRoMiwgXCJdIHRvIG5vZGVzIG9mIGRpZmZlcmVudCBpbnRlcmZhY2VzOiBcIikuY29uY2F0KF9ub2RlMiwgXCIgXCIpLmNvbmNhdChwcmV2KSk7XG4gICAgICAgIH1cblxuICAgICAgICBfcGFyZW50LmNoaWxkcmVuLnNwbGljZShfaW5kZXgsIDEpO1xuXG4gICAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgICBmb3IgKHZhciBbX3BvaW50MiwgX2tleTJdIG9mIFJhbmdlLnBvaW50cyhzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICBzZWxlY3Rpb25bX2tleTJdID0gUG9pbnQudHJhbnNmb3JtKF9wb2ludDIsIG9wKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIGNhc2UgJ21vdmVfbm9kZSc6XG4gICAgICB7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgcGF0aDogX3BhdGgzLFxuICAgICAgICAgIG5ld1BhdGhcbiAgICAgICAgfSA9IG9wO1xuXG4gICAgICAgIGlmIChQYXRoLmlzQW5jZXN0b3IoX3BhdGgzLCBuZXdQYXRoKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBtb3ZlIGEgcGF0aCBbXCIuY29uY2F0KF9wYXRoMywgXCJdIHRvIG5ldyBwYXRoIFtcIikuY29uY2F0KG5ld1BhdGgsIFwiXSBiZWNhdXNlIHRoZSBkZXN0aW5hdGlvbiBpcyBpbnNpZGUgaXRzZWxmLlwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX25vZGUzID0gTm9kZS5nZXQoZWRpdG9yLCBfcGF0aDMpO1xuXG4gICAgICAgIHZhciBfcGFyZW50MiA9IE5vZGUucGFyZW50KGVkaXRvciwgX3BhdGgzKTtcblxuICAgICAgICB2YXIgX2luZGV4MiA9IF9wYXRoM1tfcGF0aDMubGVuZ3RoIC0gMV07IC8vIFRoaXMgaXMgdHJpY2t5LCBidXQgc2luY2UgdGhlIGBwYXRoYCBhbmQgYG5ld1BhdGhgIGJvdGggcmVmZXIgdG9cbiAgICAgICAgLy8gdGhlIHNhbWUgc25hcHNob3QgaW4gdGltZSwgdGhlcmUncyBhIG1pc21hdGNoLiBBZnRlciBlaXRoZXJcbiAgICAgICAgLy8gcmVtb3ZpbmcgdGhlIG9yaWdpbmFsIHBvc2l0aW9uLCB0aGUgc2Vjb25kIHN0ZXAncyBwYXRoIGNhbiBiZSBvdXRcbiAgICAgICAgLy8gb2YgZGF0ZS4gU28gaW5zdGVhZCBvZiB1c2luZyB0aGUgYG9wLm5ld1BhdGhgIGRpcmVjdGx5LCB3ZVxuICAgICAgICAvLyB0cmFuc2Zvcm0gYG9wLnBhdGhgIHRvIGFzY2VydGFpbiB3aGF0IHRoZSBgbmV3UGF0aGAgd291bGQgYmUgYWZ0ZXJcbiAgICAgICAgLy8gdGhlIG9wZXJhdGlvbiB3YXMgYXBwbGllZC5cblxuICAgICAgICBfcGFyZW50Mi5jaGlsZHJlbi5zcGxpY2UoX2luZGV4MiwgMSk7XG5cbiAgICAgICAgdmFyIHRydWVQYXRoID0gUGF0aC50cmFuc2Zvcm0oX3BhdGgzLCBvcCk7XG4gICAgICAgIHZhciBuZXdQYXJlbnQgPSBOb2RlLmdldChlZGl0b3IsIFBhdGgucGFyZW50KHRydWVQYXRoKSk7XG4gICAgICAgIHZhciBuZXdJbmRleCA9IHRydWVQYXRoW3RydWVQYXRoLmxlbmd0aCAtIDFdO1xuICAgICAgICBuZXdQYXJlbnQuY2hpbGRyZW4uc3BsaWNlKG5ld0luZGV4LCAwLCBfbm9kZTMpO1xuXG4gICAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgICBmb3IgKHZhciBbX3BvaW50MywgX2tleTNdIG9mIFJhbmdlLnBvaW50cyhzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICBzZWxlY3Rpb25bX2tleTNdID0gUG9pbnQudHJhbnNmb3JtKF9wb2ludDMsIG9wKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIGNhc2UgJ3JlbW92ZV9ub2RlJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBwYXRoOiBfcGF0aDRcbiAgICAgICAgfSA9IG9wO1xuICAgICAgICB2YXIgX2luZGV4MyA9IF9wYXRoNFtfcGF0aDQubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgdmFyIF9wYXJlbnQzID0gTm9kZS5wYXJlbnQoZWRpdG9yLCBfcGF0aDQpO1xuXG4gICAgICAgIF9wYXJlbnQzLmNoaWxkcmVuLnNwbGljZShfaW5kZXgzLCAxKTsgLy8gVHJhbnNmb3JtIGFsbCBvZiB0aGUgcG9pbnRzIGluIHRoZSB2YWx1ZSwgYnV0IGlmIHRoZSBwb2ludCB3YXMgaW4gdGhlXG4gICAgICAgIC8vIG5vZGUgdGhhdCB3YXMgcmVtb3ZlZCB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgcmFuZ2Ugb3IgcmVtb3ZlIGl0LlxuXG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgIGZvciAodmFyIFtfcG9pbnQ0LCBfa2V5NF0gb2YgUmFuZ2UucG9pbnRzKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBQb2ludC50cmFuc2Zvcm0oX3BvaW50NCwgb3ApO1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0aW9uICE9IG51bGwgJiYgcmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgc2VsZWN0aW9uW19rZXk0XSA9IHJlc3VsdDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhciBfcHJldiA9IHZvaWQgMDtcblxuICAgICAgICAgICAgICB2YXIgbmV4dCA9IHZvaWQgMDtcblxuICAgICAgICAgICAgICBmb3IgKHZhciBbbiwgcF0gb2YgTm9kZS50ZXh0cyhlZGl0b3IpKSB7XG4gICAgICAgICAgICAgICAgaWYgKFBhdGguY29tcGFyZShwLCBfcGF0aDQpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgX3ByZXYgPSBbbiwgcF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG5leHQgPSBbbiwgcF07XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB2YXIgcHJlZmVyTmV4dCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgIGlmIChfcHJldiAmJiBuZXh0KSB7XG4gICAgICAgICAgICAgICAgaWYgKFBhdGguZXF1YWxzKG5leHRbMV0sIF9wYXRoNCkpIHtcbiAgICAgICAgICAgICAgICAgIHByZWZlck5leHQgPSAhUGF0aC5oYXNQcmV2aW91cyhuZXh0WzFdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcHJlZmVyTmV4dCA9IFBhdGguY29tbW9uKF9wcmV2WzFdLCBfcGF0aDQpLmxlbmd0aCA8IFBhdGguY29tbW9uKG5leHRbMV0sIF9wYXRoNCkubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChfcHJldiAmJiAhcHJlZmVyTmV4dCkge1xuICAgICAgICAgICAgICAgIF9wb2ludDQucGF0aCA9IF9wcmV2WzFdO1xuICAgICAgICAgICAgICAgIF9wb2ludDQub2Zmc2V0ID0gX3ByZXZbMF0udGV4dC5sZW5ndGg7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dCkge1xuICAgICAgICAgICAgICAgIF9wb2ludDQucGF0aCA9IG5leHRbMV07XG4gICAgICAgICAgICAgICAgX3BvaW50NC5vZmZzZXQgPSAwO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGVjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIGNhc2UgJ3JlbW92ZV90ZXh0JzpcbiAgICAgIHtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBwYXRoOiBfcGF0aDUsXG4gICAgICAgICAgb2Zmc2V0OiBfb2Zmc2V0LFxuICAgICAgICAgIHRleHQ6IF90ZXh0XG4gICAgICAgIH0gPSBvcDtcbiAgICAgICAgaWYgKF90ZXh0Lmxlbmd0aCA9PT0gMCkgYnJlYWs7XG5cbiAgICAgICAgdmFyIF9ub2RlNCA9IE5vZGUubGVhZihlZGl0b3IsIF9wYXRoNSk7XG5cbiAgICAgICAgdmFyIF9iZWZvcmUgPSBfbm9kZTQudGV4dC5zbGljZSgwLCBfb2Zmc2V0KTtcblxuICAgICAgICB2YXIgX2FmdGVyID0gX25vZGU0LnRleHQuc2xpY2UoX29mZnNldCArIF90ZXh0Lmxlbmd0aCk7XG5cbiAgICAgICAgX25vZGU0LnRleHQgPSBfYmVmb3JlICsgX2FmdGVyO1xuXG4gICAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgICBmb3IgKHZhciBbX3BvaW50NSwgX2tleTVdIG9mIFJhbmdlLnBvaW50cyhzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICBzZWxlY3Rpb25bX2tleTVdID0gUG9pbnQudHJhbnNmb3JtKF9wb2ludDUsIG9wKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIGNhc2UgJ3NldF9ub2RlJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBwYXRoOiBfcGF0aDYsXG4gICAgICAgICAgcHJvcGVydGllcyxcbiAgICAgICAgICBuZXdQcm9wZXJ0aWVzXG4gICAgICAgIH0gPSBvcDtcblxuICAgICAgICBpZiAoX3BhdGg2Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBzZXQgcHJvcGVydGllcyBvbiB0aGUgcm9vdCBub2RlIVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfbm9kZTUgPSBOb2RlLmdldChlZGl0b3IsIF9wYXRoNik7XG5cbiAgICAgICAgZm9yICh2YXIgX2tleTYgaW4gbmV3UHJvcGVydGllcykge1xuICAgICAgICAgIGlmIChfa2V5NiA9PT0gJ2NoaWxkcmVuJyB8fCBfa2V5NiA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3Qgc2V0IHRoZSBcXFwiXCIuY29uY2F0KF9rZXk2LCBcIlxcXCIgcHJvcGVydHkgb2Ygbm9kZXMhXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgdmFsdWUgPSBuZXdQcm9wZXJ0aWVzW19rZXk2XTtcblxuICAgICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBkZWxldGUgX25vZGU1W19rZXk2XTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX25vZGU1W19rZXk2XSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBwcm9wZXJ0aWVzIHRoYXQgd2VyZSBwcmV2aW91c2x5IGRlZmluZWQsIGJ1dCBhcmUgbm93IG1pc3NpbmcsIG11c3QgYmUgZGVsZXRlZFxuXG5cbiAgICAgICAgZm9yICh2YXIgX2tleTcgaW4gcHJvcGVydGllcykge1xuICAgICAgICAgIGlmICghbmV3UHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShfa2V5NykpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBfbm9kZTVbX2tleTddO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgY2FzZSAnc2V0X3NlbGVjdGlvbic6XG4gICAgICB7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgbmV3UHJvcGVydGllczogX25ld1Byb3BlcnRpZXNcbiAgICAgICAgfSA9IG9wO1xuXG4gICAgICAgIGlmIChfbmV3UHJvcGVydGllcyA9PSBudWxsKSB7XG4gICAgICAgICAgc2VsZWN0aW9uID0gX25ld1Byb3BlcnRpZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHNlbGVjdGlvbiA9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoIVJhbmdlLmlzUmFuZ2UoX25ld1Byb3BlcnRpZXMpKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBhcHBseSBhbiBpbmNvbXBsZXRlIFxcXCJzZXRfc2VsZWN0aW9uXFxcIiBvcGVyYXRpb24gcHJvcGVydGllcyBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkoX25ld1Byb3BlcnRpZXMpLCBcIiB3aGVuIHRoZXJlIGlzIG5vIGN1cnJlbnQgc2VsZWN0aW9uLlwiKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGVjdGlvbiA9IF9vYmplY3RTcHJlYWQkMyh7fSwgX25ld1Byb3BlcnRpZXMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAodmFyIF9rZXk4IGluIF9uZXdQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICB2YXIgX3ZhbHVlID0gX25ld1Byb3BlcnRpZXNbX2tleThdO1xuXG4gICAgICAgICAgICBpZiAoX3ZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgaWYgKF9rZXk4ID09PSAnYW5jaG9yJyB8fCBfa2V5OCA9PT0gJ2ZvY3VzJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCByZW1vdmUgdGhlIFxcXCJcIi5jb25jYXQoX2tleTgsIFwiXFxcIiBzZWxlY3Rpb24gcHJvcGVydHlcIikpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZGVsZXRlIHNlbGVjdGlvbltfa2V5OF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZWxlY3Rpb25bX2tleThdID0gX3ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgY2FzZSAnc3BsaXRfbm9kZSc6XG4gICAgICB7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgcGF0aDogX3BhdGg3LFxuICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgIHByb3BlcnRpZXM6IF9wcm9wZXJ0aWVzXG4gICAgICAgIH0gPSBvcDtcblxuICAgICAgICBpZiAoX3BhdGg3Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBhcHBseSBhIFxcXCJzcGxpdF9ub2RlXFxcIiBvcGVyYXRpb24gYXQgcGF0aCBbXCIuY29uY2F0KF9wYXRoNywgXCJdIGJlY2F1c2UgdGhlIHJvb3Qgbm9kZSBjYW5ub3QgYmUgc3BsaXQuXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfbm9kZTYgPSBOb2RlLmdldChlZGl0b3IsIF9wYXRoNyk7XG5cbiAgICAgICAgdmFyIF9wYXJlbnQ0ID0gTm9kZS5wYXJlbnQoZWRpdG9yLCBfcGF0aDcpO1xuXG4gICAgICAgIHZhciBfaW5kZXg0ID0gX3BhdGg3W19wYXRoNy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIG5ld05vZGU7XG5cbiAgICAgICAgaWYgKFRleHQuaXNUZXh0KF9ub2RlNikpIHtcbiAgICAgICAgICB2YXIgX2JlZm9yZTIgPSBfbm9kZTYudGV4dC5zbGljZSgwLCBwb3NpdGlvbik7XG5cbiAgICAgICAgICB2YXIgX2FmdGVyMiA9IF9ub2RlNi50ZXh0LnNsaWNlKHBvc2l0aW9uKTtcblxuICAgICAgICAgIF9ub2RlNi50ZXh0ID0gX2JlZm9yZTI7XG4gICAgICAgICAgbmV3Tm9kZSA9IF9vYmplY3RTcHJlYWQkMyhfb2JqZWN0U3ByZWFkJDMoe30sIF9wcm9wZXJ0aWVzKSwge30sIHtcbiAgICAgICAgICAgIHRleHQ6IF9hZnRlcjJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgX2JlZm9yZTMgPSBfbm9kZTYuY2hpbGRyZW4uc2xpY2UoMCwgcG9zaXRpb24pO1xuXG4gICAgICAgICAgdmFyIF9hZnRlcjMgPSBfbm9kZTYuY2hpbGRyZW4uc2xpY2UocG9zaXRpb24pO1xuXG4gICAgICAgICAgX25vZGU2LmNoaWxkcmVuID0gX2JlZm9yZTM7XG4gICAgICAgICAgbmV3Tm9kZSA9IF9vYmplY3RTcHJlYWQkMyhfb2JqZWN0U3ByZWFkJDMoe30sIF9wcm9wZXJ0aWVzKSwge30sIHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBfYWZ0ZXIzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBfcGFyZW50NC5jaGlsZHJlbi5zcGxpY2UoX2luZGV4NCArIDEsIDAsIG5ld05vZGUpO1xuXG4gICAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgICBmb3IgKHZhciBbX3BvaW50NiwgX2tleTldIG9mIFJhbmdlLnBvaW50cyhzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICBzZWxlY3Rpb25bX2tleTldID0gUG9pbnQudHJhbnNmb3JtKF9wb2ludDYsIG9wKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgfVxuXG4gIHJldHVybiBzZWxlY3Rpb247XG59O1xuXG52YXIgR2VuZXJhbFRyYW5zZm9ybXMgPSB7XG4gIC8qKlxyXG4gICAqIFRyYW5zZm9ybSB0aGUgZWRpdG9yIGJ5IGFuIG9wZXJhdGlvbi5cclxuICAgKi9cbiAgdHJhbnNmb3JtKGVkaXRvciwgb3ApIHtcbiAgICBlZGl0b3IuY2hpbGRyZW4gPSBjcmVhdGVEcmFmdChlZGl0b3IuY2hpbGRyZW4pO1xuICAgIHZhciBzZWxlY3Rpb24gPSBlZGl0b3Iuc2VsZWN0aW9uICYmIGNyZWF0ZURyYWZ0KGVkaXRvci5zZWxlY3Rpb24pO1xuXG4gICAgdHJ5IHtcbiAgICAgIHNlbGVjdGlvbiA9IGFwcGx5VG9EcmFmdChlZGl0b3IsIHNlbGVjdGlvbiwgb3ApO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBlZGl0b3IuY2hpbGRyZW4gPSBmaW5pc2hEcmFmdChlZGl0b3IuY2hpbGRyZW4pO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgIGVkaXRvci5zZWxlY3Rpb24gPSBpc0RyYWZ0KHNlbGVjdGlvbikgPyBmaW5pc2hEcmFmdChzZWxlY3Rpb24pIDogc2VsZWN0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWRpdG9yLnNlbGVjdGlvbiA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn07XG5cbnZhciBfZXhjbHVkZWQgPSBbXCJ0ZXh0XCJdLFxuICAgIF9leGNsdWRlZDIgPSBbXCJjaGlsZHJlblwiXTtcblxuZnVuY3Rpb24gb3duS2V5cyQyKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSB7IHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsgfSBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQyKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMkMihPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzJDIoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG52YXIgTm9kZVRyYW5zZm9ybXMgPSB7XG4gIC8qKlxyXG4gICAqIEluc2VydCBub2RlcyBhdCBhIHNwZWNpZmljIGxvY2F0aW9uIGluIHRoZSBFZGl0b3IuXHJcbiAgICovXG4gIGluc2VydE5vZGVzKGVkaXRvciwgbm9kZXMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgRWRpdG9yLndpdGhvdXROb3JtYWxpemluZyhlZGl0b3IsICgpID0+IHtcbiAgICAgIHZhciB7XG4gICAgICAgIGhhbmdpbmcgPSBmYWxzZSxcbiAgICAgICAgdm9pZHMgPSBmYWxzZSxcbiAgICAgICAgbW9kZSA9ICdsb3dlc3QnXG4gICAgICB9ID0gb3B0aW9ucztcbiAgICAgIHZhciB7XG4gICAgICAgIGF0LFxuICAgICAgICBtYXRjaCxcbiAgICAgICAgc2VsZWN0XG4gICAgICB9ID0gb3B0aW9ucztcblxuICAgICAgaWYgKE5vZGUuaXNOb2RlKG5vZGVzKSkge1xuICAgICAgICBub2RlcyA9IFtub2Rlc107XG4gICAgICB9XG5cbiAgICAgIGlmIChub2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgW25vZGVdID0gbm9kZXM7IC8vIEJ5IGRlZmF1bHQsIHVzZSB0aGUgc2VsZWN0aW9uIGFzIHRoZSB0YXJnZXQgbG9jYXRpb24uIEJ1dCBpZiB0aGVyZSBpc1xuICAgICAgLy8gbm8gc2VsZWN0aW9uLCBpbnNlcnQgYXQgdGhlIGVuZCBvZiB0aGUgZG9jdW1lbnQgc2luY2UgdGhhdCBpcyBzdWNoIGFcbiAgICAgIC8vIGNvbW1vbiB1c2UgY2FzZSB3aGVuIGluc2VydGluZyBmcm9tIGEgbm9uLXNlbGVjdGVkIHN0YXRlLlxuXG4gICAgICBpZiAoIWF0KSB7XG4gICAgICAgIGlmIChlZGl0b3Iuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgYXQgPSBlZGl0b3Iuc2VsZWN0aW9uO1xuICAgICAgICB9IGVsc2UgaWYgKGVkaXRvci5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgYXQgPSBFZGl0b3IuZW5kKGVkaXRvciwgW10pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGF0ID0gWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZWN0ID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGVjdCA9PSBudWxsKSB7XG4gICAgICAgIHNlbGVjdCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoUmFuZ2UuaXNSYW5nZShhdCkpIHtcbiAgICAgICAgaWYgKCFoYW5naW5nKSB7XG4gICAgICAgICAgYXQgPSBFZGl0b3IudW5oYW5nUmFuZ2UoZWRpdG9yLCBhdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoUmFuZ2UuaXNDb2xsYXBzZWQoYXQpKSB7XG4gICAgICAgICAgYXQgPSBhdC5hbmNob3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIFssIGVuZF0gPSBSYW5nZS5lZGdlcyhhdCk7XG4gICAgICAgICAgdmFyIHBvaW50UmVmID0gRWRpdG9yLnBvaW50UmVmKGVkaXRvciwgZW5kKTtcbiAgICAgICAgICBUcmFuc2Zvcm1zLmRlbGV0ZShlZGl0b3IsIHtcbiAgICAgICAgICAgIGF0XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYXQgPSBwb2ludFJlZi51bnJlZigpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChQb2ludC5pc1BvaW50KGF0KSkge1xuICAgICAgICBpZiAobWF0Y2ggPT0gbnVsbCkge1xuICAgICAgICAgIGlmIChUZXh0LmlzVGV4dChub2RlKSkge1xuICAgICAgICAgICAgbWF0Y2ggPSBuID0+IFRleHQuaXNUZXh0KG4pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZWRpdG9yLmlzSW5saW5lKG5vZGUpKSB7XG4gICAgICAgICAgICBtYXRjaCA9IG4gPT4gVGV4dC5pc1RleHQobikgfHwgRWRpdG9yLmlzSW5saW5lKGVkaXRvciwgbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1hdGNoID0gbiA9PiBFZGl0b3IuaXNCbG9jayhlZGl0b3IsIG4pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBbZW50cnldID0gRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgICAgIGF0OiBhdC5wYXRoLFxuICAgICAgICAgIG1hdGNoLFxuICAgICAgICAgIG1vZGUsXG4gICAgICAgICAgdm9pZHNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgdmFyIFssIF9tYXRjaFBhdGhdID0gZW50cnk7XG4gICAgICAgICAgdmFyIHBhdGhSZWYgPSBFZGl0b3IucGF0aFJlZihlZGl0b3IsIF9tYXRjaFBhdGgpO1xuICAgICAgICAgIHZhciBpc0F0RW5kID0gRWRpdG9yLmlzRW5kKGVkaXRvciwgYXQsIF9tYXRjaFBhdGgpO1xuICAgICAgICAgIFRyYW5zZm9ybXMuc3BsaXROb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICAgIGF0LFxuICAgICAgICAgICAgbWF0Y2gsXG4gICAgICAgICAgICBtb2RlLFxuICAgICAgICAgICAgdm9pZHNcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YXIgcGF0aCA9IHBhdGhSZWYudW5yZWYoKTtcbiAgICAgICAgICBhdCA9IGlzQXRFbmQgPyBQYXRoLm5leHQocGF0aCkgOiBwYXRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgcGFyZW50UGF0aCA9IFBhdGgucGFyZW50KGF0KTtcbiAgICAgIHZhciBpbmRleCA9IGF0W2F0Lmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAoIXZvaWRzICYmIEVkaXRvci52b2lkKGVkaXRvciwge1xuICAgICAgICBhdDogcGFyZW50UGF0aFxuICAgICAgfSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfbm9kZSBvZiBub2Rlcykge1xuICAgICAgICB2YXIgX3BhdGggPSBwYXJlbnRQYXRoLmNvbmNhdChpbmRleCk7XG5cbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgZWRpdG9yLmFwcGx5KHtcbiAgICAgICAgICB0eXBlOiAnaW5zZXJ0X25vZGUnLFxuICAgICAgICAgIHBhdGg6IF9wYXRoLFxuICAgICAgICAgIG5vZGU6IF9ub2RlXG4gICAgICAgIH0pO1xuICAgICAgICBhdCA9IFBhdGgubmV4dChhdCk7XG4gICAgICB9XG5cbiAgICAgIGF0ID0gUGF0aC5wcmV2aW91cyhhdCk7XG5cbiAgICAgIGlmIChzZWxlY3QpIHtcbiAgICAgICAgdmFyIHBvaW50ID0gRWRpdG9yLmVuZChlZGl0b3IsIGF0KTtcblxuICAgICAgICBpZiAocG9pbnQpIHtcbiAgICAgICAgICBUcmFuc2Zvcm1zLnNlbGVjdChlZGl0b3IsIHBvaW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIExpZnQgbm9kZXMgYXQgYSBzcGVjaWZpYyBsb2NhdGlvbiB1cHdhcmRzIGluIHRoZSBkb2N1bWVudCB0cmVlLCBzcGxpdHRpbmdcclxuICAgKiB0aGVpciBwYXJlbnQgaW4gdHdvIGlmIG5lY2Vzc2FyeS5cclxuICAgKi9cbiAgbGlmdE5vZGVzKGVkaXRvcikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBFZGl0b3Iud2l0aG91dE5vcm1hbGl6aW5nKGVkaXRvciwgKCkgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgYXQgPSBlZGl0b3Iuc2VsZWN0aW9uLFxuICAgICAgICBtb2RlID0gJ2xvd2VzdCcsXG4gICAgICAgIHZvaWRzID0gZmFsc2VcbiAgICAgIH0gPSBvcHRpb25zO1xuICAgICAgdmFyIHtcbiAgICAgICAgbWF0Y2hcbiAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgICBpZiAobWF0Y2ggPT0gbnVsbCkge1xuICAgICAgICBtYXRjaCA9IFBhdGguaXNQYXRoKGF0KSA/IG1hdGNoUGF0aChlZGl0b3IsIGF0KSA6IG4gPT4gRWRpdG9yLmlzQmxvY2soZWRpdG9yLCBuKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFhdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBtYXRjaGVzID0gRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgICBhdCxcbiAgICAgICAgbWF0Y2gsXG4gICAgICAgIG1vZGUsXG4gICAgICAgIHZvaWRzXG4gICAgICB9KTtcbiAgICAgIHZhciBwYXRoUmVmcyA9IEFycmF5LmZyb20obWF0Y2hlcywgX3JlZiA9PiB7XG4gICAgICAgIHZhciBbLCBwXSA9IF9yZWY7XG4gICAgICAgIHJldHVybiBFZGl0b3IucGF0aFJlZihlZGl0b3IsIHApO1xuICAgICAgfSk7XG5cbiAgICAgIGZvciAodmFyIHBhdGhSZWYgb2YgcGF0aFJlZnMpIHtcbiAgICAgICAgdmFyIHBhdGggPSBwYXRoUmVmLnVucmVmKCk7XG5cbiAgICAgICAgaWYgKHBhdGgubGVuZ3RoIDwgMikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBsaWZ0IG5vZGUgYXQgYSBwYXRoIFtcIi5jb25jYXQocGF0aCwgXCJdIGJlY2F1c2UgaXQgaGFzIGEgZGVwdGggb2YgbGVzcyB0aGFuIGAyYC5cIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBhcmVudE5vZGVFbnRyeSA9IEVkaXRvci5ub2RlKGVkaXRvciwgUGF0aC5wYXJlbnQocGF0aCkpO1xuICAgICAgICB2YXIgW3BhcmVudCwgcGFyZW50UGF0aF0gPSBwYXJlbnROb2RlRW50cnk7XG4gICAgICAgIHZhciBpbmRleCA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBsZW5ndGhcbiAgICAgICAgfSA9IHBhcmVudC5jaGlsZHJlbjtcblxuICAgICAgICBpZiAobGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdmFyIHRvUGF0aCA9IFBhdGgubmV4dChwYXJlbnRQYXRoKTtcbiAgICAgICAgICBUcmFuc2Zvcm1zLm1vdmVOb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICAgIGF0OiBwYXRoLFxuICAgICAgICAgICAgdG86IHRvUGF0aCxcbiAgICAgICAgICAgIHZvaWRzXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5yZW1vdmVOb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICAgIGF0OiBwYXJlbnRQYXRoLFxuICAgICAgICAgICAgdm9pZHNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIFRyYW5zZm9ybXMubW92ZU5vZGVzKGVkaXRvciwge1xuICAgICAgICAgICAgYXQ6IHBhdGgsXG4gICAgICAgICAgICB0bzogcGFyZW50UGF0aCxcbiAgICAgICAgICAgIHZvaWRzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IGxlbmd0aCAtIDEpIHtcbiAgICAgICAgICB2YXIgX3RvUGF0aCA9IFBhdGgubmV4dChwYXJlbnRQYXRoKTtcblxuICAgICAgICAgIFRyYW5zZm9ybXMubW92ZU5vZGVzKGVkaXRvciwge1xuICAgICAgICAgICAgYXQ6IHBhdGgsXG4gICAgICAgICAgICB0bzogX3RvUGF0aCxcbiAgICAgICAgICAgIHZvaWRzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHNwbGl0UGF0aCA9IFBhdGgubmV4dChwYXRoKTtcblxuICAgICAgICAgIHZhciBfdG9QYXRoMiA9IFBhdGgubmV4dChwYXJlbnRQYXRoKTtcblxuICAgICAgICAgIFRyYW5zZm9ybXMuc3BsaXROb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICAgIGF0OiBzcGxpdFBhdGgsXG4gICAgICAgICAgICB2b2lkc1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIFRyYW5zZm9ybXMubW92ZU5vZGVzKGVkaXRvciwge1xuICAgICAgICAgICAgYXQ6IHBhdGgsXG4gICAgICAgICAgICB0bzogX3RvUGF0aDIsXG4gICAgICAgICAgICB2b2lkc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogTWVyZ2UgYSBub2RlIGF0IGEgbG9jYXRpb24gd2l0aCB0aGUgcHJldmlvdXMgbm9kZSBvZiB0aGUgc2FtZSBkZXB0aCxcclxuICAgKiByZW1vdmluZyBhbnkgZW1wdHkgY29udGFpbmluZyBub2RlcyBhZnRlciB0aGUgbWVyZ2UgaWYgbmVjZXNzYXJ5LlxyXG4gICAqL1xuICBtZXJnZU5vZGVzKGVkaXRvcikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBFZGl0b3Iud2l0aG91dE5vcm1hbGl6aW5nKGVkaXRvciwgKCkgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgbWF0Y2gsXG4gICAgICAgIGF0ID0gZWRpdG9yLnNlbGVjdGlvblxuICAgICAgfSA9IG9wdGlvbnM7XG4gICAgICB2YXIge1xuICAgICAgICBoYW5naW5nID0gZmFsc2UsXG4gICAgICAgIHZvaWRzID0gZmFsc2UsXG4gICAgICAgIG1vZGUgPSAnbG93ZXN0J1xuICAgICAgfSA9IG9wdGlvbnM7XG5cbiAgICAgIGlmICghYXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAobWF0Y2ggPT0gbnVsbCkge1xuICAgICAgICBpZiAoUGF0aC5pc1BhdGgoYXQpKSB7XG4gICAgICAgICAgdmFyIFtwYXJlbnRdID0gRWRpdG9yLnBhcmVudChlZGl0b3IsIGF0KTtcblxuICAgICAgICAgIG1hdGNoID0gbiA9PiBwYXJlbnQuY2hpbGRyZW4uaW5jbHVkZXMobik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWF0Y2ggPSBuID0+IEVkaXRvci5pc0Jsb2NrKGVkaXRvciwgbik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFoYW5naW5nICYmIFJhbmdlLmlzUmFuZ2UoYXQpKSB7XG4gICAgICAgIGF0ID0gRWRpdG9yLnVuaGFuZ1JhbmdlKGVkaXRvciwgYXQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoUmFuZ2UuaXNSYW5nZShhdCkpIHtcbiAgICAgICAgaWYgKFJhbmdlLmlzQ29sbGFwc2VkKGF0KSkge1xuICAgICAgICAgIGF0ID0gYXQuYW5jaG9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBbLCBlbmRdID0gUmFuZ2UuZWRnZXMoYXQpO1xuICAgICAgICAgIHZhciBwb2ludFJlZiA9IEVkaXRvci5wb2ludFJlZihlZGl0b3IsIGVuZCk7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5kZWxldGUoZWRpdG9yLCB7XG4gICAgICAgICAgICBhdFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGF0ID0gcG9pbnRSZWYudW5yZWYoKTtcblxuICAgICAgICAgIGlmIChvcHRpb25zLmF0ID09IG51bGwpIHtcbiAgICAgICAgICAgIFRyYW5zZm9ybXMuc2VsZWN0KGVkaXRvciwgYXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgW2N1cnJlbnRdID0gRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgICBhdCxcbiAgICAgICAgbWF0Y2gsXG4gICAgICAgIHZvaWRzLFxuICAgICAgICBtb2RlXG4gICAgICB9KTtcbiAgICAgIHZhciBwcmV2ID0gRWRpdG9yLnByZXZpb3VzKGVkaXRvciwge1xuICAgICAgICBhdCxcbiAgICAgICAgbWF0Y2gsXG4gICAgICAgIHZvaWRzLFxuICAgICAgICBtb2RlXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFjdXJyZW50IHx8ICFwcmV2KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIFtub2RlLCBwYXRoXSA9IGN1cnJlbnQ7XG4gICAgICB2YXIgW3ByZXZOb2RlLCBwcmV2UGF0aF0gPSBwcmV2O1xuXG4gICAgICBpZiAocGF0aC5sZW5ndGggPT09IDAgfHwgcHJldlBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld1BhdGggPSBQYXRoLm5leHQocHJldlBhdGgpO1xuICAgICAgdmFyIGNvbW1vblBhdGggPSBQYXRoLmNvbW1vbihwYXRoLCBwcmV2UGF0aCk7XG4gICAgICB2YXIgaXNQcmV2aW91c1NpYmxpbmcgPSBQYXRoLmlzU2libGluZyhwYXRoLCBwcmV2UGF0aCk7XG4gICAgICB2YXIgbGV2ZWxzID0gQXJyYXkuZnJvbShFZGl0b3IubGV2ZWxzKGVkaXRvciwge1xuICAgICAgICBhdDogcGF0aFxuICAgICAgfSksIF9yZWYyID0+IHtcbiAgICAgICAgdmFyIFtuXSA9IF9yZWYyO1xuICAgICAgICByZXR1cm4gbjtcbiAgICAgIH0pLnNsaWNlKGNvbW1vblBhdGgubGVuZ3RoKS5zbGljZSgwLCAtMSk7IC8vIERldGVybWluZSBpZiB0aGUgbWVyZ2Ugd2lsbCBsZWF2ZSBhbiBhbmNlc3RvciBvZiB0aGUgcGF0aCBlbXB0eSBhcyBhXG4gICAgICAvLyByZXN1bHQsIGluIHdoaWNoIGNhc2Ugd2UnbGwgd2FudCB0byByZW1vdmUgaXQgYWZ0ZXIgbWVyZ2luZy5cblxuICAgICAgdmFyIGVtcHR5QW5jZXN0b3IgPSBFZGl0b3IuYWJvdmUoZWRpdG9yLCB7XG4gICAgICAgIGF0OiBwYXRoLFxuICAgICAgICBtb2RlOiAnaGlnaGVzdCcsXG4gICAgICAgIG1hdGNoOiBuID0+IGxldmVscy5pbmNsdWRlcyhuKSAmJiBoYXNTaW5nbGVDaGlsZE5lc3QoZWRpdG9yLCBuKVxuICAgICAgfSk7XG4gICAgICB2YXIgZW1wdHlSZWYgPSBlbXB0eUFuY2VzdG9yICYmIEVkaXRvci5wYXRoUmVmKGVkaXRvciwgZW1wdHlBbmNlc3RvclsxXSk7XG4gICAgICB2YXIgcHJvcGVydGllcztcbiAgICAgIHZhciBwb3NpdGlvbjsgLy8gRW5zdXJlIHRoYXQgdGhlIG5vZGVzIGFyZSBlcXVpdmFsZW50LCBhbmQgZmlndXJlIG91dCB3aGF0IHRoZSBwb3NpdGlvblxuICAgICAgLy8gYW5kIGV4dHJhIHByb3BlcnRpZXMgb2YgdGhlIG1lcmdlIHdpbGwgYmUuXG5cbiAgICAgIGlmIChUZXh0LmlzVGV4dChub2RlKSAmJiBUZXh0LmlzVGV4dChwcmV2Tm9kZSkpIHtcbiAgICAgICAgdmFyIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMobm9kZSwgX2V4Y2x1ZGVkKTtcblxuICAgICAgICBwb3NpdGlvbiA9IHByZXZOb2RlLnRleHQubGVuZ3RoO1xuICAgICAgICBwcm9wZXJ0aWVzID0gcmVzdDtcbiAgICAgIH0gZWxzZSBpZiAoRWxlbWVudC5pc0VsZW1lbnQobm9kZSkgJiYgRWxlbWVudC5pc0VsZW1lbnQocHJldk5vZGUpKSB7XG4gICAgICAgIHZhciByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG5vZGUsIF9leGNsdWRlZDIpO1xuXG4gICAgICAgIHBvc2l0aW9uID0gcHJldk5vZGUuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBwcm9wZXJ0aWVzID0gcmVzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBtZXJnZSB0aGUgbm9kZSBhdCBwYXRoIFtcIi5jb25jYXQocGF0aCwgXCJdIHdpdGggdGhlIHByZXZpb3VzIHNpYmxpbmcgYmVjYXVzZSBpdCBpcyBub3QgdGhlIHNhbWUga2luZDogXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShub2RlKSwgXCIgXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShwcmV2Tm9kZSkpKTtcbiAgICAgIH0gLy8gSWYgdGhlIG5vZGUgaXNuJ3QgYWxyZWFkeSB0aGUgbmV4dCBzaWJsaW5nIG9mIHRoZSBwcmV2aW91cyBub2RlLCBtb3ZlXG4gICAgICAvLyBpdCBzbyB0aGF0IGl0IGlzIGJlZm9yZSBtZXJnaW5nLlxuXG5cbiAgICAgIGlmICghaXNQcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgICAgVHJhbnNmb3Jtcy5tb3ZlTm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgYXQ6IHBhdGgsXG4gICAgICAgICAgdG86IG5ld1BhdGgsXG4gICAgICAgICAgdm9pZHNcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIElmIHRoZXJlIHdhcyBnb2luZyB0byBiZSBhbiBlbXB0eSBhbmNlc3RvciBvZiB0aGUgbm9kZSB0aGF0IHdhcyBtZXJnZWQsXG4gICAgICAvLyB3ZSByZW1vdmUgaXQgZnJvbSB0aGUgdHJlZS5cblxuXG4gICAgICBpZiAoZW1wdHlSZWYpIHtcbiAgICAgICAgVHJhbnNmb3Jtcy5yZW1vdmVOb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICBhdDogZW1wdHlSZWYuY3VycmVudCxcbiAgICAgICAgICB2b2lkc1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gSWYgdGhlIHRhcmdldCBub2RlIHRoYXQgd2UncmUgbWVyZ2luZyB3aXRoIGlzIGVtcHR5LCByZW1vdmUgaXQgaW5zdGVhZFxuICAgICAgLy8gb2YgbWVyZ2luZyB0aGUgdHdvLiBUaGlzIGlzIGEgY29tbW9uIHJpY2ggdGV4dCBlZGl0b3IgYmVoYXZpb3IgdG9cbiAgICAgIC8vIHByZXZlbnQgbG9zaW5nIGZvcm1hdHRpbmcgd2hlbiBkZWxldGluZyBlbnRpcmUgbm9kZXMgd2hlbiB5b3UgaGF2ZSBhXG4gICAgICAvLyBoYW5naW5nIHNlbGVjdGlvbi5cbiAgICAgIC8vIGlmIHByZXZOb2RlIGlzIGZpcnN0IGNoaWxkIGluIHBhcmVudCxkb24ndCByZW1vdmUgaXQuXG5cblxuICAgICAgaWYgKEVsZW1lbnQuaXNFbGVtZW50KHByZXZOb2RlKSAmJiBFZGl0b3IuaXNFbXB0eShlZGl0b3IsIHByZXZOb2RlKSB8fCBUZXh0LmlzVGV4dChwcmV2Tm9kZSkgJiYgcHJldk5vZGUudGV4dCA9PT0gJycgJiYgcHJldlBhdGhbcHJldlBhdGgubGVuZ3RoIC0gMV0gIT09IDApIHtcbiAgICAgICAgVHJhbnNmb3Jtcy5yZW1vdmVOb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICBhdDogcHJldlBhdGgsXG4gICAgICAgICAgdm9pZHNcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlZGl0b3IuYXBwbHkoe1xuICAgICAgICAgIHR5cGU6ICdtZXJnZV9ub2RlJyxcbiAgICAgICAgICBwYXRoOiBuZXdQYXRoLFxuICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgIHByb3BlcnRpZXNcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbXB0eVJlZikge1xuICAgICAgICBlbXB0eVJlZi51bnJlZigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIE1vdmUgdGhlIG5vZGVzIGF0IGEgbG9jYXRpb24gdG8gYSBuZXcgbG9jYXRpb24uXHJcbiAgICovXG4gIG1vdmVOb2RlcyhlZGl0b3IsIG9wdGlvbnMpIHtcbiAgICBFZGl0b3Iud2l0aG91dE5vcm1hbGl6aW5nKGVkaXRvciwgKCkgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgdG8sXG4gICAgICAgIGF0ID0gZWRpdG9yLnNlbGVjdGlvbixcbiAgICAgICAgbW9kZSA9ICdsb3dlc3QnLFxuICAgICAgICB2b2lkcyA9IGZhbHNlXG4gICAgICB9ID0gb3B0aW9ucztcbiAgICAgIHZhciB7XG4gICAgICAgIG1hdGNoXG4gICAgICB9ID0gb3B0aW9ucztcblxuICAgICAgaWYgKCFhdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXRjaCA9PSBudWxsKSB7XG4gICAgICAgIG1hdGNoID0gUGF0aC5pc1BhdGgoYXQpID8gbWF0Y2hQYXRoKGVkaXRvciwgYXQpIDogbiA9PiBFZGl0b3IuaXNCbG9jayhlZGl0b3IsIG4pO1xuICAgICAgfVxuXG4gICAgICB2YXIgdG9SZWYgPSBFZGl0b3IucGF0aFJlZihlZGl0b3IsIHRvKTtcbiAgICAgIHZhciB0YXJnZXRzID0gRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgICBhdCxcbiAgICAgICAgbWF0Y2gsXG4gICAgICAgIG1vZGUsXG4gICAgICAgIHZvaWRzXG4gICAgICB9KTtcbiAgICAgIHZhciBwYXRoUmVmcyA9IEFycmF5LmZyb20odGFyZ2V0cywgX3JlZjMgPT4ge1xuICAgICAgICB2YXIgWywgcF0gPSBfcmVmMztcbiAgICAgICAgcmV0dXJuIEVkaXRvci5wYXRoUmVmKGVkaXRvciwgcCk7XG4gICAgICB9KTtcblxuICAgICAgZm9yICh2YXIgcGF0aFJlZiBvZiBwYXRoUmVmcykge1xuICAgICAgICB2YXIgcGF0aCA9IHBhdGhSZWYudW5yZWYoKTtcbiAgICAgICAgdmFyIG5ld1BhdGggPSB0b1JlZi5jdXJyZW50O1xuXG4gICAgICAgIGlmIChwYXRoLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIGVkaXRvci5hcHBseSh7XG4gICAgICAgICAgICB0eXBlOiAnbW92ZV9ub2RlJyxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBuZXdQYXRoXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9SZWYuY3VycmVudCAmJiBQYXRoLmlzU2libGluZyhuZXdQYXRoLCBwYXRoKSAmJiBQYXRoLmlzQWZ0ZXIobmV3UGF0aCwgcGF0aCkpIHtcbiAgICAgICAgICAvLyBXaGVuIHBlcmZvcm1pbmcgYSBzaWJsaW5nIG1vdmUgdG8gYSBsYXRlciBpbmRleCwgdGhlIHBhdGggYXQgdGhlIGRlc3RpbmF0aW9uIGlzIHNoaWZ0ZWRcbiAgICAgICAgICAvLyB0byBiZWZvcmUgdGhlIGluc2VydGlvbiBwb2ludCBpbnN0ZWFkIG9mIGFmdGVyLiBUbyBlbnN1cmUgb3VyIGdyb3VwIG9mIG5vZGVzIGFyZSBpbnNlcnRlZFxuICAgICAgICAgIC8vIGluIHRoZSBjb3JyZWN0IG9yZGVyIHdlIGluY3JlbWVudCB0b1JlZiB0byBhY2NvdW50IGZvciB0aGF0XG4gICAgICAgICAgdG9SZWYuY3VycmVudCA9IFBhdGgubmV4dCh0b1JlZi5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0b1JlZi51bnJlZigpO1xuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIFJlbW92ZSB0aGUgbm9kZXMgYXQgYSBzcGVjaWZpYyBsb2NhdGlvbiBpbiB0aGUgZG9jdW1lbnQuXHJcbiAgICovXG4gIHJlbW92ZU5vZGVzKGVkaXRvcikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBFZGl0b3Iud2l0aG91dE5vcm1hbGl6aW5nKGVkaXRvciwgKCkgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgaGFuZ2luZyA9IGZhbHNlLFxuICAgICAgICB2b2lkcyA9IGZhbHNlLFxuICAgICAgICBtb2RlID0gJ2xvd2VzdCdcbiAgICAgIH0gPSBvcHRpb25zO1xuICAgICAgdmFyIHtcbiAgICAgICAgYXQgPSBlZGl0b3Iuc2VsZWN0aW9uLFxuICAgICAgICBtYXRjaFxuICAgICAgfSA9IG9wdGlvbnM7XG5cbiAgICAgIGlmICghYXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAobWF0Y2ggPT0gbnVsbCkge1xuICAgICAgICBtYXRjaCA9IFBhdGguaXNQYXRoKGF0KSA/IG1hdGNoUGF0aChlZGl0b3IsIGF0KSA6IG4gPT4gRWRpdG9yLmlzQmxvY2soZWRpdG9yLCBuKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFoYW5naW5nICYmIFJhbmdlLmlzUmFuZ2UoYXQpKSB7XG4gICAgICAgIGF0ID0gRWRpdG9yLnVuaGFuZ1JhbmdlKGVkaXRvciwgYXQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGVwdGhzID0gRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgICBhdCxcbiAgICAgICAgbWF0Y2gsXG4gICAgICAgIG1vZGUsXG4gICAgICAgIHZvaWRzXG4gICAgICB9KTtcbiAgICAgIHZhciBwYXRoUmVmcyA9IEFycmF5LmZyb20oZGVwdGhzLCBfcmVmNCA9PiB7XG4gICAgICAgIHZhciBbLCBwXSA9IF9yZWY0O1xuICAgICAgICByZXR1cm4gRWRpdG9yLnBhdGhSZWYoZWRpdG9yLCBwKTtcbiAgICAgIH0pO1xuXG4gICAgICBmb3IgKHZhciBwYXRoUmVmIG9mIHBhdGhSZWZzKSB7XG4gICAgICAgIHZhciBwYXRoID0gcGF0aFJlZi51bnJlZigpO1xuXG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgdmFyIFtub2RlXSA9IEVkaXRvci5ub2RlKGVkaXRvciwgcGF0aCk7XG4gICAgICAgICAgZWRpdG9yLmFwcGx5KHtcbiAgICAgICAgICAgIHR5cGU6ICdyZW1vdmVfbm9kZScsXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgbm9kZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogU2V0IG5ldyBwcm9wZXJ0aWVzIG9uIHRoZSBub2RlcyBhdCBhIGxvY2F0aW9uLlxyXG4gICAqL1xuICBzZXROb2RlcyhlZGl0b3IsIHByb3BzKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIEVkaXRvci53aXRob3V0Tm9ybWFsaXppbmcoZWRpdG9yLCAoKSA9PiB7XG4gICAgICB2YXIge1xuICAgICAgICBtYXRjaCxcbiAgICAgICAgYXQgPSBlZGl0b3Iuc2VsZWN0aW9uXG4gICAgICB9ID0gb3B0aW9ucztcbiAgICAgIHZhciB7XG4gICAgICAgIGhhbmdpbmcgPSBmYWxzZSxcbiAgICAgICAgbW9kZSA9ICdsb3dlc3QnLFxuICAgICAgICBzcGxpdCA9IGZhbHNlLFxuICAgICAgICB2b2lkcyA9IGZhbHNlXG4gICAgICB9ID0gb3B0aW9ucztcblxuICAgICAgaWYgKCFhdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXRjaCA9PSBudWxsKSB7XG4gICAgICAgIG1hdGNoID0gUGF0aC5pc1BhdGgoYXQpID8gbWF0Y2hQYXRoKGVkaXRvciwgYXQpIDogbiA9PiBFZGl0b3IuaXNCbG9jayhlZGl0b3IsIG4pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWhhbmdpbmcgJiYgUmFuZ2UuaXNSYW5nZShhdCkpIHtcbiAgICAgICAgYXQgPSBFZGl0b3IudW5oYW5nUmFuZ2UoZWRpdG9yLCBhdCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzcGxpdCAmJiBSYW5nZS5pc1JhbmdlKGF0KSkge1xuICAgICAgICBpZiAoUmFuZ2UuaXNDb2xsYXBzZWQoYXQpICYmIEVkaXRvci5sZWFmKGVkaXRvciwgYXQuYW5jaG9yKVswXS50ZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAvLyBJZiB0aGUgcmFuZ2UgaXMgY29sbGFwc2VkIGluIGEgbm9uLWVtcHR5IG5vZGUgYW5kICdzcGxpdCcgaXMgdHJ1ZSwgdGhlcmUncyBub3RoaW5nIHRvXG4gICAgICAgICAgLy8gc2V0IHRoYXQgd29uJ3QgZ2V0IG5vcm1hbGl6ZWQgYXdheVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByYW5nZVJlZiA9IEVkaXRvci5yYW5nZVJlZihlZGl0b3IsIGF0LCB7XG4gICAgICAgICAgYWZmaW5pdHk6ICdpbndhcmQnXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgW3N0YXJ0LCBlbmRdID0gUmFuZ2UuZWRnZXMoYXQpO1xuICAgICAgICB2YXIgc3BsaXRNb2RlID0gbW9kZSA9PT0gJ2xvd2VzdCcgPyAnbG93ZXN0JyA6ICdoaWdoZXN0JztcbiAgICAgICAgdmFyIGVuZEF0RW5kT2ZOb2RlID0gRWRpdG9yLmlzRW5kKGVkaXRvciwgZW5kLCBlbmQucGF0aCk7XG4gICAgICAgIFRyYW5zZm9ybXMuc3BsaXROb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICBhdDogZW5kLFxuICAgICAgICAgIG1hdGNoLFxuICAgICAgICAgIG1vZGU6IHNwbGl0TW9kZSxcbiAgICAgICAgICB2b2lkcyxcbiAgICAgICAgICBhbHdheXM6ICFlbmRBdEVuZE9mTm9kZVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHN0YXJ0QXRTdGFydE9mTm9kZSA9IEVkaXRvci5pc1N0YXJ0KGVkaXRvciwgc3RhcnQsIHN0YXJ0LnBhdGgpO1xuICAgICAgICBUcmFuc2Zvcm1zLnNwbGl0Tm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgYXQ6IHN0YXJ0LFxuICAgICAgICAgIG1hdGNoLFxuICAgICAgICAgIG1vZGU6IHNwbGl0TW9kZSxcbiAgICAgICAgICB2b2lkcyxcbiAgICAgICAgICBhbHdheXM6ICFzdGFydEF0U3RhcnRPZk5vZGVcbiAgICAgICAgfSk7XG4gICAgICAgIGF0ID0gcmFuZ2VSZWYudW5yZWYoKTtcblxuICAgICAgICBpZiAob3B0aW9ucy5hdCA9PSBudWxsKSB7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5zZWxlY3QoZWRpdG9yLCBhdCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgW25vZGUsIHBhdGhdIG9mIEVkaXRvci5ub2RlcyhlZGl0b3IsIHtcbiAgICAgICAgYXQsXG4gICAgICAgIG1hdGNoLFxuICAgICAgICBtb2RlLFxuICAgICAgICB2b2lkc1xuICAgICAgfSkpIHtcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSB7fTtcbiAgICAgICAgdmFyIG5ld1Byb3BlcnRpZXMgPSB7fTsgLy8gWW91IGNhbid0IHNldCBwcm9wZXJ0aWVzIG9uIHRoZSBlZGl0b3Igbm9kZS5cblxuICAgICAgICBpZiAocGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBoYXNDaGFuZ2VzID0gZmFsc2U7XG5cbiAgICAgICAgZm9yICh2YXIgayBpbiBwcm9wcykge1xuICAgICAgICAgIGlmIChrID09PSAnY2hpbGRyZW4nIHx8IGsgPT09ICd0ZXh0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHByb3BzW2tdICE9PSBub2RlW2tdKSB7XG4gICAgICAgICAgICBoYXNDaGFuZ2VzID0gdHJ1ZTsgLy8gT21pdCBuZXcgcHJvcGVydGllcyBmcm9tIHRoZSBvbGQgcHJvcGVydGllcyBsaXN0XG5cbiAgICAgICAgICAgIGlmIChub2RlLmhhc093blByb3BlcnR5KGspKSBwcm9wZXJ0aWVzW2tdID0gbm9kZVtrXTsgLy8gT21pdCBwcm9wZXJ0aWVzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgbmV3IHByb3BlcnRpZXMgbGlzdFxuXG4gICAgICAgICAgICBpZiAocHJvcHNba10gIT0gbnVsbCkgbmV3UHJvcGVydGllc1trXSA9IHByb3BzW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNDaGFuZ2VzKSB7XG4gICAgICAgICAgZWRpdG9yLmFwcGx5KHtcbiAgICAgICAgICAgIHR5cGU6ICdzZXRfbm9kZScsXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgcHJvcGVydGllcyxcbiAgICAgICAgICAgIG5ld1Byb3BlcnRpZXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIFNwbGl0IHRoZSBub2RlcyBhdCBhIHNwZWNpZmljIGxvY2F0aW9uLlxyXG4gICAqL1xuICBzcGxpdE5vZGVzKGVkaXRvcikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBFZGl0b3Iud2l0aG91dE5vcm1hbGl6aW5nKGVkaXRvciwgKCkgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgbW9kZSA9ICdsb3dlc3QnLFxuICAgICAgICB2b2lkcyA9IGZhbHNlXG4gICAgICB9ID0gb3B0aW9ucztcbiAgICAgIHZhciB7XG4gICAgICAgIG1hdGNoLFxuICAgICAgICBhdCA9IGVkaXRvci5zZWxlY3Rpb24sXG4gICAgICAgIGhlaWdodCA9IDAsXG4gICAgICAgIGFsd2F5cyA9IGZhbHNlXG4gICAgICB9ID0gb3B0aW9ucztcblxuICAgICAgaWYgKG1hdGNoID09IG51bGwpIHtcbiAgICAgICAgbWF0Y2ggPSBuID0+IEVkaXRvci5pc0Jsb2NrKGVkaXRvciwgbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChSYW5nZS5pc1JhbmdlKGF0KSkge1xuICAgICAgICBhdCA9IGRlbGV0ZVJhbmdlKGVkaXRvciwgYXQpO1xuICAgICAgfSAvLyBJZiB0aGUgdGFyZ2V0IGlzIGEgcGF0aCwgdGhlIGRlZmF1bHQgaGVpZ2h0LXNraXBwaW5nIGFuZCBwb3NpdGlvblxuICAgICAgLy8gY291bnRlcnMgbmVlZCB0byBhY2NvdW50IGZvciB1cyBwb3RlbnRpYWxseSBzcGxpdHRpbmcgYXQgYSBub24tbGVhZi5cblxuXG4gICAgICBpZiAoUGF0aC5pc1BhdGgoYXQpKSB7XG4gICAgICAgIHZhciBwYXRoID0gYXQ7XG4gICAgICAgIHZhciBwb2ludCA9IEVkaXRvci5wb2ludChlZGl0b3IsIHBhdGgpO1xuICAgICAgICB2YXIgW3BhcmVudF0gPSBFZGl0b3IucGFyZW50KGVkaXRvciwgcGF0aCk7XG5cbiAgICAgICAgbWF0Y2ggPSBuID0+IG4gPT09IHBhcmVudDtcblxuICAgICAgICBoZWlnaHQgPSBwb2ludC5wYXRoLmxlbmd0aCAtIHBhdGgubGVuZ3RoICsgMTtcbiAgICAgICAgYXQgPSBwb2ludDtcbiAgICAgICAgYWx3YXlzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFhdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBiZWZvcmVSZWYgPSBFZGl0b3IucG9pbnRSZWYoZWRpdG9yLCBhdCwge1xuICAgICAgICBhZmZpbml0eTogJ2JhY2t3YXJkJ1xuICAgICAgfSk7XG4gICAgICB2YXIgW2hpZ2hlc3RdID0gRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgICBhdCxcbiAgICAgICAgbWF0Y2gsXG4gICAgICAgIG1vZGUsXG4gICAgICAgIHZvaWRzXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFoaWdoZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHZvaWRNYXRjaCA9IEVkaXRvci52b2lkKGVkaXRvciwge1xuICAgICAgICBhdCxcbiAgICAgICAgbW9kZTogJ2hpZ2hlc3QnXG4gICAgICB9KTtcbiAgICAgIHZhciBudWRnZSA9IDA7XG5cbiAgICAgIGlmICghdm9pZHMgJiYgdm9pZE1hdGNoKSB7XG4gICAgICAgIHZhciBbdm9pZE5vZGUsIHZvaWRQYXRoXSA9IHZvaWRNYXRjaDtcblxuICAgICAgICBpZiAoRWxlbWVudC5pc0VsZW1lbnQodm9pZE5vZGUpICYmIGVkaXRvci5pc0lubGluZSh2b2lkTm9kZSkpIHtcbiAgICAgICAgICB2YXIgYWZ0ZXIgPSBFZGl0b3IuYWZ0ZXIoZWRpdG9yLCB2b2lkUGF0aCk7XG5cbiAgICAgICAgICBpZiAoIWFmdGVyKSB7XG4gICAgICAgICAgICB2YXIgdGV4dCA9IHtcbiAgICAgICAgICAgICAgdGV4dDogJydcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgYWZ0ZXJQYXRoID0gUGF0aC5uZXh0KHZvaWRQYXRoKTtcbiAgICAgICAgICAgIFRyYW5zZm9ybXMuaW5zZXJ0Tm9kZXMoZWRpdG9yLCB0ZXh0LCB7XG4gICAgICAgICAgICAgIGF0OiBhZnRlclBhdGgsXG4gICAgICAgICAgICAgIHZvaWRzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFmdGVyID0gRWRpdG9yLnBvaW50KGVkaXRvciwgYWZ0ZXJQYXRoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhdCA9IGFmdGVyO1xuICAgICAgICAgIGFsd2F5cyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2libGluZ0hlaWdodCA9IGF0LnBhdGgubGVuZ3RoIC0gdm9pZFBhdGgubGVuZ3RoO1xuICAgICAgICBoZWlnaHQgPSBzaWJsaW5nSGVpZ2h0ICsgMTtcbiAgICAgICAgYWx3YXlzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFmdGVyUmVmID0gRWRpdG9yLnBvaW50UmVmKGVkaXRvciwgYXQpO1xuICAgICAgdmFyIGRlcHRoID0gYXQucGF0aC5sZW5ndGggLSBoZWlnaHQ7XG4gICAgICB2YXIgWywgaGlnaGVzdFBhdGhdID0gaGlnaGVzdDtcbiAgICAgIHZhciBsb3dlc3RQYXRoID0gYXQucGF0aC5zbGljZSgwLCBkZXB0aCk7XG4gICAgICB2YXIgcG9zaXRpb24gPSBoZWlnaHQgPT09IDAgPyBhdC5vZmZzZXQgOiBhdC5wYXRoW2RlcHRoXSArIG51ZGdlO1xuXG4gICAgICBmb3IgKHZhciBbbm9kZSwgX3BhdGgyXSBvZiBFZGl0b3IubGV2ZWxzKGVkaXRvciwge1xuICAgICAgICBhdDogbG93ZXN0UGF0aCxcbiAgICAgICAgcmV2ZXJzZTogdHJ1ZSxcbiAgICAgICAgdm9pZHNcbiAgICAgIH0pKSB7XG4gICAgICAgIHZhciBzcGxpdCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChfcGF0aDIubGVuZ3RoIDwgaGlnaGVzdFBhdGgubGVuZ3RoIHx8IF9wYXRoMi5sZW5ndGggPT09IDAgfHwgIXZvaWRzICYmIEVkaXRvci5pc1ZvaWQoZWRpdG9yLCBub2RlKSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9wb2ludCA9IGJlZm9yZVJlZi5jdXJyZW50O1xuICAgICAgICB2YXIgaXNFbmQgPSBFZGl0b3IuaXNFbmQoZWRpdG9yLCBfcG9pbnQsIF9wYXRoMik7XG5cbiAgICAgICAgaWYgKGFsd2F5cyB8fCAhYmVmb3JlUmVmIHx8ICFFZGl0b3IuaXNFZGdlKGVkaXRvciwgX3BvaW50LCBfcGF0aDIpKSB7XG4gICAgICAgICAgc3BsaXQgPSB0cnVlO1xuICAgICAgICAgIHZhciBwcm9wZXJ0aWVzID0gTm9kZS5leHRyYWN0UHJvcHMobm9kZSk7XG4gICAgICAgICAgZWRpdG9yLmFwcGx5KHtcbiAgICAgICAgICAgIHR5cGU6ICdzcGxpdF9ub2RlJyxcbiAgICAgICAgICAgIHBhdGg6IF9wYXRoMixcbiAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgcHJvcGVydGllc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9zaXRpb24gPSBfcGF0aDJbX3BhdGgyLmxlbmd0aCAtIDFdICsgKHNwbGl0IHx8IGlzRW5kID8gMSA6IDApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5hdCA9PSBudWxsKSB7XG4gICAgICAgIHZhciBfcG9pbnQyID0gYWZ0ZXJSZWYuY3VycmVudCB8fCBFZGl0b3IuZW5kKGVkaXRvciwgW10pO1xuXG4gICAgICAgIFRyYW5zZm9ybXMuc2VsZWN0KGVkaXRvciwgX3BvaW50Mik7XG4gICAgICB9XG5cbiAgICAgIGJlZm9yZVJlZi51bnJlZigpO1xuICAgICAgYWZ0ZXJSZWYudW5yZWYoKTtcbiAgICB9KTtcbiAgfSxcblxuICAvKipcclxuICAgKiBVbnNldCBwcm9wZXJ0aWVzIG9uIHRoZSBub2RlcyBhdCBhIGxvY2F0aW9uLlxyXG4gICAqL1xuICB1bnNldE5vZGVzKGVkaXRvciwgcHJvcHMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcHMpKSB7XG4gICAgICBwcm9wcyA9IFtwcm9wc107XG4gICAgfVxuXG4gICAgdmFyIG9iaiA9IHt9O1xuXG4gICAgZm9yICh2YXIga2V5IG9mIHByb3BzKSB7XG4gICAgICBvYmpba2V5XSA9IG51bGw7XG4gICAgfVxuXG4gICAgVHJhbnNmb3Jtcy5zZXROb2RlcyhlZGl0b3IsIG9iaiwgb3B0aW9ucyk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogVW53cmFwIHRoZSBub2RlcyBhdCBhIGxvY2F0aW9uIGZyb20gYSBwYXJlbnQgbm9kZSwgc3BsaXR0aW5nIHRoZSBwYXJlbnQgaWZcclxuICAgKiBuZWNlc3NhcnkgdG8gZW5zdXJlIHRoYXQgb25seSB0aGUgY29udGVudCBpbiB0aGUgcmFuZ2UgaXMgdW53cmFwcGVkLlxyXG4gICAqL1xuICB1bndyYXBOb2RlcyhlZGl0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgRWRpdG9yLndpdGhvdXROb3JtYWxpemluZyhlZGl0b3IsICgpID0+IHtcbiAgICAgIHZhciB7XG4gICAgICAgIG1vZGUgPSAnbG93ZXN0JyxcbiAgICAgICAgc3BsaXQgPSBmYWxzZSxcbiAgICAgICAgdm9pZHMgPSBmYWxzZVxuICAgICAgfSA9IG9wdGlvbnM7XG4gICAgICB2YXIge1xuICAgICAgICBhdCA9IGVkaXRvci5zZWxlY3Rpb24sXG4gICAgICAgIG1hdGNoXG4gICAgICB9ID0gb3B0aW9ucztcblxuICAgICAgaWYgKCFhdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXRjaCA9PSBudWxsKSB7XG4gICAgICAgIG1hdGNoID0gUGF0aC5pc1BhdGgoYXQpID8gbWF0Y2hQYXRoKGVkaXRvciwgYXQpIDogbiA9PiBFZGl0b3IuaXNCbG9jayhlZGl0b3IsIG4pO1xuICAgICAgfVxuXG4gICAgICBpZiAoUGF0aC5pc1BhdGgoYXQpKSB7XG4gICAgICAgIGF0ID0gRWRpdG9yLnJhbmdlKGVkaXRvciwgYXQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmFuZ2VSZWYgPSBSYW5nZS5pc1JhbmdlKGF0KSA/IEVkaXRvci5yYW5nZVJlZihlZGl0b3IsIGF0KSA6IG51bGw7XG4gICAgICB2YXIgbWF0Y2hlcyA9IEVkaXRvci5ub2RlcyhlZGl0b3IsIHtcbiAgICAgICAgYXQsXG4gICAgICAgIG1hdGNoLFxuICAgICAgICBtb2RlLFxuICAgICAgICB2b2lkc1xuICAgICAgfSk7XG4gICAgICB2YXIgcGF0aFJlZnMgPSBBcnJheS5mcm9tKG1hdGNoZXMsIF9yZWY1ID0+IHtcbiAgICAgICAgdmFyIFssIHBdID0gX3JlZjU7XG4gICAgICAgIHJldHVybiBFZGl0b3IucGF0aFJlZihlZGl0b3IsIHApO1xuICAgICAgfSAvLyB1bndyYXBOb2RlIHdpbGwgY2FsbCBsaWZ0Tm9kZSB3aGljaCBkb2VzIG5vdCBzdXBwb3J0IHNwbGl0dGluZyB0aGUgbm9kZSB3aGVuIG5lc3RlZC5cbiAgICAgIC8vIElmIHdlIGRvIG5vdCByZXZlcnNlIHRoZSBvcmRlciBhbmQgY2FsbCBpdCBmcm9tIHRvcCB0byB0aGUgYm90dG9tLCBpdCB3aWxsIHJlbW92ZSBhbGwgYmxvY2tzXG4gICAgICAvLyB0aGF0IHdyYXAgdGFyZ2V0IG5vZGUuIFNvIHdlIHJldmVyc2UgdGhlIG9yZGVyLlxuICAgICAgKS5yZXZlcnNlKCk7XG5cbiAgICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKHBhdGhSZWYpIHtcbiAgICAgICAgdmFyIHBhdGggPSBwYXRoUmVmLnVucmVmKCk7XG4gICAgICAgIHZhciBbbm9kZV0gPSBFZGl0b3Iubm9kZShlZGl0b3IsIHBhdGgpO1xuICAgICAgICB2YXIgcmFuZ2UgPSBFZGl0b3IucmFuZ2UoZWRpdG9yLCBwYXRoKTtcblxuICAgICAgICBpZiAoc3BsaXQgJiYgcmFuZ2VSZWYpIHtcbiAgICAgICAgICByYW5nZSA9IFJhbmdlLmludGVyc2VjdGlvbihyYW5nZVJlZi5jdXJyZW50LCByYW5nZSk7XG4gICAgICAgIH1cblxuICAgICAgICBUcmFuc2Zvcm1zLmxpZnROb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICBhdDogcmFuZ2UsXG4gICAgICAgICAgbWF0Y2g6IG4gPT4gRWxlbWVudC5pc0FuY2VzdG9yKG5vZGUpICYmIG5vZGUuY2hpbGRyZW4uaW5jbHVkZXMobiksXG4gICAgICAgICAgdm9pZHNcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBmb3IgKHZhciBwYXRoUmVmIG9mIHBhdGhSZWZzKSB7XG4gICAgICAgIF9sb29wKHBhdGhSZWYpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmFuZ2VSZWYpIHtcbiAgICAgICAgcmFuZ2VSZWYudW5yZWYoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvKipcclxuICAgKiBXcmFwIHRoZSBub2RlcyBhdCBhIGxvY2F0aW9uIGluIGEgbmV3IGNvbnRhaW5lciBub2RlLCBzcGxpdHRpbmcgdGhlIGVkZ2VzXHJcbiAgICogb2YgdGhlIHJhbmdlIGZpcnN0IHRvIGVuc3VyZSB0aGF0IG9ubHkgdGhlIGNvbnRlbnQgaW4gdGhlIHJhbmdlIGlzIHdyYXBwZWQuXHJcbiAgICovXG4gIHdyYXBOb2RlcyhlZGl0b3IsIGVsZW1lbnQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgRWRpdG9yLndpdGhvdXROb3JtYWxpemluZyhlZGl0b3IsICgpID0+IHtcbiAgICAgIHZhciB7XG4gICAgICAgIG1vZGUgPSAnbG93ZXN0JyxcbiAgICAgICAgc3BsaXQgPSBmYWxzZSxcbiAgICAgICAgdm9pZHMgPSBmYWxzZVxuICAgICAgfSA9IG9wdGlvbnM7XG4gICAgICB2YXIge1xuICAgICAgICBtYXRjaCxcbiAgICAgICAgYXQgPSBlZGl0b3Iuc2VsZWN0aW9uXG4gICAgICB9ID0gb3B0aW9ucztcblxuICAgICAgaWYgKCFhdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXRjaCA9PSBudWxsKSB7XG4gICAgICAgIGlmIChQYXRoLmlzUGF0aChhdCkpIHtcbiAgICAgICAgICBtYXRjaCA9IG1hdGNoUGF0aChlZGl0b3IsIGF0KTtcbiAgICAgICAgfSBlbHNlIGlmIChlZGl0b3IuaXNJbmxpbmUoZWxlbWVudCkpIHtcbiAgICAgICAgICBtYXRjaCA9IG4gPT4gRWRpdG9yLmlzSW5saW5lKGVkaXRvciwgbikgfHwgVGV4dC5pc1RleHQobik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWF0Y2ggPSBuID0+IEVkaXRvci5pc0Jsb2NrKGVkaXRvciwgbik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHNwbGl0ICYmIFJhbmdlLmlzUmFuZ2UoYXQpKSB7XG4gICAgICAgIHZhciBbc3RhcnQsIGVuZF0gPSBSYW5nZS5lZGdlcyhhdCk7XG4gICAgICAgIHZhciByYW5nZVJlZiA9IEVkaXRvci5yYW5nZVJlZihlZGl0b3IsIGF0LCB7XG4gICAgICAgICAgYWZmaW5pdHk6ICdpbndhcmQnXG4gICAgICAgIH0pO1xuICAgICAgICBUcmFuc2Zvcm1zLnNwbGl0Tm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgYXQ6IGVuZCxcbiAgICAgICAgICBtYXRjaCxcbiAgICAgICAgICB2b2lkc1xuICAgICAgICB9KTtcbiAgICAgICAgVHJhbnNmb3Jtcy5zcGxpdE5vZGVzKGVkaXRvciwge1xuICAgICAgICAgIGF0OiBzdGFydCxcbiAgICAgICAgICBtYXRjaCxcbiAgICAgICAgICB2b2lkc1xuICAgICAgICB9KTtcbiAgICAgICAgYXQgPSByYW5nZVJlZi51bnJlZigpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmF0ID09IG51bGwpIHtcbiAgICAgICAgICBUcmFuc2Zvcm1zLnNlbGVjdChlZGl0b3IsIGF0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgcm9vdHMgPSBBcnJheS5mcm9tKEVkaXRvci5ub2RlcyhlZGl0b3IsIHtcbiAgICAgICAgYXQsXG4gICAgICAgIG1hdGNoOiBlZGl0b3IuaXNJbmxpbmUoZWxlbWVudCkgPyBuID0+IEVkaXRvci5pc0Jsb2NrKGVkaXRvciwgbikgOiBuID0+IEVkaXRvci5pc0VkaXRvcihuKSxcbiAgICAgICAgbW9kZTogJ2xvd2VzdCcsXG4gICAgICAgIHZvaWRzXG4gICAgICB9KSk7XG5cbiAgICAgIGZvciAodmFyIFssIHJvb3RQYXRoXSBvZiByb290cykge1xuICAgICAgICB2YXIgYSA9IFJhbmdlLmlzUmFuZ2UoYXQpID8gUmFuZ2UuaW50ZXJzZWN0aW9uKGF0LCBFZGl0b3IucmFuZ2UoZWRpdG9yLCByb290UGF0aCkpIDogYXQ7XG5cbiAgICAgICAgaWYgKCFhKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbWF0Y2hlcyA9IEFycmF5LmZyb20oRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgICAgIGF0OiBhLFxuICAgICAgICAgIG1hdGNoLFxuICAgICAgICAgIG1vZGUsXG4gICAgICAgICAgdm9pZHNcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB2YXIgX3JldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBbZmlyc3RdID0gbWF0Y2hlcztcbiAgICAgICAgICAgIHZhciBsYXN0ID0gbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgdmFyIFssIGZpcnN0UGF0aF0gPSBmaXJzdDtcbiAgICAgICAgICAgIHZhciBbLCBsYXN0UGF0aF0gPSBsYXN0O1xuXG4gICAgICAgICAgICBpZiAoZmlyc3RQYXRoLmxlbmd0aCA9PT0gMCAmJiBsYXN0UGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgLy8gaWYgdGhlcmUncyBubyBtYXRjaGluZyBwYXJlbnQgLSB1c3VhbGx5IG1lYW5zIHRoZSBub2RlIGlzIGFuIGVkaXRvciAtIGRvbid0IGRvIGFueXRoaW5nXG4gICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjb21tb25QYXRoID0gUGF0aC5lcXVhbHMoZmlyc3RQYXRoLCBsYXN0UGF0aCkgPyBQYXRoLnBhcmVudChmaXJzdFBhdGgpIDogUGF0aC5jb21tb24oZmlyc3RQYXRoLCBsYXN0UGF0aCk7XG4gICAgICAgICAgICB2YXIgcmFuZ2UgPSBFZGl0b3IucmFuZ2UoZWRpdG9yLCBmaXJzdFBhdGgsIGxhc3RQYXRoKTtcbiAgICAgICAgICAgIHZhciBjb21tb25Ob2RlRW50cnkgPSBFZGl0b3Iubm9kZShlZGl0b3IsIGNvbW1vblBhdGgpO1xuICAgICAgICAgICAgdmFyIFtjb21tb25Ob2RlXSA9IGNvbW1vbk5vZGVFbnRyeTtcbiAgICAgICAgICAgIHZhciBkZXB0aCA9IGNvbW1vblBhdGgubGVuZ3RoICsgMTtcbiAgICAgICAgICAgIHZhciB3cmFwcGVyUGF0aCA9IFBhdGgubmV4dChsYXN0UGF0aC5zbGljZSgwLCBkZXB0aCkpO1xuXG4gICAgICAgICAgICB2YXIgd3JhcHBlciA9IF9vYmplY3RTcHJlYWQkMihfb2JqZWN0U3ByZWFkJDIoe30sIGVsZW1lbnQpLCB7fSwge1xuICAgICAgICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBUcmFuc2Zvcm1zLmluc2VydE5vZGVzKGVkaXRvciwgd3JhcHBlciwge1xuICAgICAgICAgICAgICBhdDogd3JhcHBlclBhdGgsXG4gICAgICAgICAgICAgIHZvaWRzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFRyYW5zZm9ybXMubW92ZU5vZGVzKGVkaXRvciwge1xuICAgICAgICAgICAgICBhdDogcmFuZ2UsXG4gICAgICAgICAgICAgIG1hdGNoOiBuID0+IEVsZW1lbnQuaXNBbmNlc3Rvcihjb21tb25Ob2RlKSAmJiBjb21tb25Ob2RlLmNoaWxkcmVuLmluY2x1ZGVzKG4pLFxuICAgICAgICAgICAgICB0bzogd3JhcHBlclBhdGguY29uY2F0KDApLFxuICAgICAgICAgICAgICB2b2lkc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSgpO1xuXG4gICAgICAgICAgaWYgKF9yZXQgPT09IFwiY29udGludWVcIikgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59O1xuXG52YXIgaGFzU2luZ2xlQ2hpbGROZXN0ID0gKGVkaXRvciwgbm9kZSkgPT4ge1xuICBpZiAoRWxlbWVudC5pc0VsZW1lbnQobm9kZSkpIHtcbiAgICB2YXIgZWxlbWVudCA9IG5vZGU7XG5cbiAgICBpZiAoRWRpdG9yLmlzVm9pZChlZGl0b3IsIG5vZGUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gaGFzU2luZ2xlQ2hpbGROZXN0KGVkaXRvciwgZWxlbWVudC5jaGlsZHJlblswXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoRWRpdG9yLmlzRWRpdG9yKG5vZGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuLyoqXHJcbiAqIENvbnZlcnQgYSByYW5nZSBpbnRvIGEgcG9pbnQgYnkgZGVsZXRpbmcgaXQncyBjb250ZW50LlxyXG4gKi9cblxuXG52YXIgZGVsZXRlUmFuZ2UgPSAoZWRpdG9yLCByYW5nZSkgPT4ge1xuICBpZiAoUmFuZ2UuaXNDb2xsYXBzZWQocmFuZ2UpKSB7XG4gICAgcmV0dXJuIHJhbmdlLmFuY2hvcjtcbiAgfSBlbHNlIHtcbiAgICB2YXIgWywgZW5kXSA9IFJhbmdlLmVkZ2VzKHJhbmdlKTtcbiAgICB2YXIgcG9pbnRSZWYgPSBFZGl0b3IucG9pbnRSZWYoZWRpdG9yLCBlbmQpO1xuICAgIFRyYW5zZm9ybXMuZGVsZXRlKGVkaXRvciwge1xuICAgICAgYXQ6IHJhbmdlXG4gICAgfSk7XG4gICAgcmV0dXJuIHBvaW50UmVmLnVucmVmKCk7XG4gIH1cbn07XG5cbnZhciBtYXRjaFBhdGggPSAoZWRpdG9yLCBwYXRoKSA9PiB7XG4gIHZhciBbbm9kZV0gPSBFZGl0b3Iubm9kZShlZGl0b3IsIHBhdGgpO1xuICByZXR1cm4gbiA9PiBuID09PSBub2RlO1xufTtcblxuZnVuY3Rpb24gb3duS2V5cyQxKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSB7IHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsgfSBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQxKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMkMShPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzJDEoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG52YXIgU2VsZWN0aW9uVHJhbnNmb3JtcyA9IHtcbiAgLyoqXHJcbiAgICogQ29sbGFwc2UgdGhlIHNlbGVjdGlvbi5cclxuICAgKi9cbiAgY29sbGFwc2UoZWRpdG9yKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICBlZGdlID0gJ2FuY2hvcidcbiAgICB9ID0gb3B0aW9ucztcbiAgICB2YXIge1xuICAgICAgc2VsZWN0aW9uXG4gICAgfSA9IGVkaXRvcjtcblxuICAgIGlmICghc2VsZWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChlZGdlID09PSAnYW5jaG9yJykge1xuICAgICAgVHJhbnNmb3Jtcy5zZWxlY3QoZWRpdG9yLCBzZWxlY3Rpb24uYW5jaG9yKTtcbiAgICB9IGVsc2UgaWYgKGVkZ2UgPT09ICdmb2N1cycpIHtcbiAgICAgIFRyYW5zZm9ybXMuc2VsZWN0KGVkaXRvciwgc2VsZWN0aW9uLmZvY3VzKTtcbiAgICB9IGVsc2UgaWYgKGVkZ2UgPT09ICdzdGFydCcpIHtcbiAgICAgIHZhciBbc3RhcnRdID0gUmFuZ2UuZWRnZXMoc2VsZWN0aW9uKTtcbiAgICAgIFRyYW5zZm9ybXMuc2VsZWN0KGVkaXRvciwgc3RhcnQpO1xuICAgIH0gZWxzZSBpZiAoZWRnZSA9PT0gJ2VuZCcpIHtcbiAgICAgIHZhciBbLCBlbmRdID0gUmFuZ2UuZWRnZXMoc2VsZWN0aW9uKTtcbiAgICAgIFRyYW5zZm9ybXMuc2VsZWN0KGVkaXRvciwgZW5kKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogVW5zZXQgdGhlIHNlbGVjdGlvbi5cclxuICAgKi9cbiAgZGVzZWxlY3QoZWRpdG9yKSB7XG4gICAgdmFyIHtcbiAgICAgIHNlbGVjdGlvblxuICAgIH0gPSBlZGl0b3I7XG5cbiAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICBlZGl0b3IuYXBwbHkoe1xuICAgICAgICB0eXBlOiAnc2V0X3NlbGVjdGlvbicsXG4gICAgICAgIHByb3BlcnRpZXM6IHNlbGVjdGlvbixcbiAgICAgICAgbmV3UHJvcGVydGllczogbnVsbFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxyXG4gICAqIE1vdmUgdGhlIHNlbGVjdGlvbidzIHBvaW50IGZvcndhcmQgb3IgYmFja3dhcmQuXHJcbiAgICovXG4gIG1vdmUoZWRpdG9yKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICBzZWxlY3Rpb25cbiAgICB9ID0gZWRpdG9yO1xuICAgIHZhciB7XG4gICAgICBkaXN0YW5jZSA9IDEsXG4gICAgICB1bml0ID0gJ2NoYXJhY3RlcicsXG4gICAgICByZXZlcnNlID0gZmFsc2VcbiAgICB9ID0gb3B0aW9ucztcbiAgICB2YXIge1xuICAgICAgZWRnZSA9IG51bGxcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIGlmICghc2VsZWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVkZ2UgPT09ICdzdGFydCcpIHtcbiAgICAgIGVkZ2UgPSBSYW5nZS5pc0JhY2t3YXJkKHNlbGVjdGlvbikgPyAnZm9jdXMnIDogJ2FuY2hvcic7XG4gICAgfVxuXG4gICAgaWYgKGVkZ2UgPT09ICdlbmQnKSB7XG4gICAgICBlZGdlID0gUmFuZ2UuaXNCYWNrd2FyZChzZWxlY3Rpb24pID8gJ2FuY2hvcicgOiAnZm9jdXMnO1xuICAgIH1cblxuICAgIHZhciB7XG4gICAgICBhbmNob3IsXG4gICAgICBmb2N1c1xuICAgIH0gPSBzZWxlY3Rpb247XG4gICAgdmFyIG9wdHMgPSB7XG4gICAgICBkaXN0YW5jZSxcbiAgICAgIHVuaXRcbiAgICB9O1xuICAgIHZhciBwcm9wcyA9IHt9O1xuXG4gICAgaWYgKGVkZ2UgPT0gbnVsbCB8fCBlZGdlID09PSAnYW5jaG9yJykge1xuICAgICAgdmFyIHBvaW50ID0gcmV2ZXJzZSA/IEVkaXRvci5iZWZvcmUoZWRpdG9yLCBhbmNob3IsIG9wdHMpIDogRWRpdG9yLmFmdGVyKGVkaXRvciwgYW5jaG9yLCBvcHRzKTtcblxuICAgICAgaWYgKHBvaW50KSB7XG4gICAgICAgIHByb3BzLmFuY2hvciA9IHBvaW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlZGdlID09IG51bGwgfHwgZWRnZSA9PT0gJ2ZvY3VzJykge1xuICAgICAgdmFyIF9wb2ludCA9IHJldmVyc2UgPyBFZGl0b3IuYmVmb3JlKGVkaXRvciwgZm9jdXMsIG9wdHMpIDogRWRpdG9yLmFmdGVyKGVkaXRvciwgZm9jdXMsIG9wdHMpO1xuXG4gICAgICBpZiAoX3BvaW50KSB7XG4gICAgICAgIHByb3BzLmZvY3VzID0gX3BvaW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIFRyYW5zZm9ybXMuc2V0U2VsZWN0aW9uKGVkaXRvciwgcHJvcHMpO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIFNldCB0aGUgc2VsZWN0aW9uIHRvIGEgbmV3IHZhbHVlLlxyXG4gICAqL1xuICBzZWxlY3QoZWRpdG9yLCB0YXJnZXQpIHtcbiAgICB2YXIge1xuICAgICAgc2VsZWN0aW9uXG4gICAgfSA9IGVkaXRvcjtcbiAgICB0YXJnZXQgPSBFZGl0b3IucmFuZ2UoZWRpdG9yLCB0YXJnZXQpO1xuXG4gICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgVHJhbnNmb3Jtcy5zZXRTZWxlY3Rpb24oZWRpdG9yLCB0YXJnZXQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghUmFuZ2UuaXNSYW5nZSh0YXJnZXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXaGVuIHNldHRpbmcgdGhlIHNlbGVjdGlvbiBhbmQgdGhlIGN1cnJlbnQgc2VsZWN0aW9uIGlzIGBudWxsYCB5b3UgbXVzdCBwcm92aWRlIGF0IGxlYXN0IGFuIGBhbmNob3JgIGFuZCBgZm9jdXNgLCBidXQgeW91IHBhc3NlZDogXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KHRhcmdldCkpKTtcbiAgICB9XG5cbiAgICBlZGl0b3IuYXBwbHkoe1xuICAgICAgdHlwZTogJ3NldF9zZWxlY3Rpb24nLFxuICAgICAgcHJvcGVydGllczogc2VsZWN0aW9uLFxuICAgICAgbmV3UHJvcGVydGllczogdGFyZ2V0XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogU2V0IG5ldyBwcm9wZXJ0aWVzIG9uIG9uZSBvZiB0aGUgc2VsZWN0aW9uJ3MgcG9pbnRzLlxyXG4gICAqL1xuICBzZXRQb2ludChlZGl0b3IsIHByb3BzKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIHZhciB7XG4gICAgICBzZWxlY3Rpb25cbiAgICB9ID0gZWRpdG9yO1xuICAgIHZhciB7XG4gICAgICBlZGdlID0gJ2JvdGgnXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICBpZiAoIXNlbGVjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlZGdlID09PSAnc3RhcnQnKSB7XG4gICAgICBlZGdlID0gUmFuZ2UuaXNCYWNrd2FyZChzZWxlY3Rpb24pID8gJ2ZvY3VzJyA6ICdhbmNob3InO1xuICAgIH1cblxuICAgIGlmIChlZGdlID09PSAnZW5kJykge1xuICAgICAgZWRnZSA9IFJhbmdlLmlzQmFja3dhcmQoc2VsZWN0aW9uKSA/ICdhbmNob3InIDogJ2ZvY3VzJztcbiAgICB9XG5cbiAgICB2YXIge1xuICAgICAgYW5jaG9yLFxuICAgICAgZm9jdXNcbiAgICB9ID0gc2VsZWN0aW9uO1xuICAgIHZhciBwb2ludCA9IGVkZ2UgPT09ICdhbmNob3InID8gYW5jaG9yIDogZm9jdXM7XG4gICAgVHJhbnNmb3Jtcy5zZXRTZWxlY3Rpb24oZWRpdG9yLCB7XG4gICAgICBbZWRnZSA9PT0gJ2FuY2hvcicgPyAnYW5jaG9yJyA6ICdmb2N1cyddOiBfb2JqZWN0U3ByZWFkJDEoX29iamVjdFNwcmVhZCQxKHt9LCBwb2ludCksIHByb3BzKVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIFNldCBuZXcgcHJvcGVydGllcyBvbiB0aGUgc2VsZWN0aW9uLlxyXG4gICAqL1xuICBzZXRTZWxlY3Rpb24oZWRpdG9yLCBwcm9wcykge1xuICAgIHZhciB7XG4gICAgICBzZWxlY3Rpb25cbiAgICB9ID0gZWRpdG9yO1xuICAgIHZhciBvbGRQcm9wcyA9IHt9O1xuICAgIHZhciBuZXdQcm9wcyA9IHt9O1xuXG4gICAgaWYgKCFzZWxlY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBrIGluIHByb3BzKSB7XG4gICAgICBpZiAoayA9PT0gJ2FuY2hvcicgJiYgcHJvcHMuYW5jaG9yICE9IG51bGwgJiYgIVBvaW50LmVxdWFscyhwcm9wcy5hbmNob3IsIHNlbGVjdGlvbi5hbmNob3IpIHx8IGsgPT09ICdmb2N1cycgJiYgcHJvcHMuZm9jdXMgIT0gbnVsbCAmJiAhUG9pbnQuZXF1YWxzKHByb3BzLmZvY3VzLCBzZWxlY3Rpb24uZm9jdXMpIHx8IGsgIT09ICdhbmNob3InICYmIGsgIT09ICdmb2N1cycgJiYgcHJvcHNba10gIT09IHNlbGVjdGlvbltrXSkge1xuICAgICAgICBvbGRQcm9wc1trXSA9IHNlbGVjdGlvbltrXTtcbiAgICAgICAgbmV3UHJvcHNba10gPSBwcm9wc1trXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoT2JqZWN0LmtleXMob2xkUHJvcHMpLmxlbmd0aCA+IDApIHtcbiAgICAgIGVkaXRvci5hcHBseSh7XG4gICAgICAgIHR5cGU6ICdzZXRfc2VsZWN0aW9uJyxcbiAgICAgICAgcHJvcGVydGllczogb2xkUHJvcHMsXG4gICAgICAgIG5ld1Byb3BlcnRpZXM6IG5ld1Byb3BzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufTtcblxudmFyIFRleHRUcmFuc2Zvcm1zID0ge1xuICAvKipcclxuICAgKiBEZWxldGUgY29udGVudCBpbiB0aGUgZWRpdG9yLlxyXG4gICAqL1xuICBkZWxldGUoZWRpdG9yKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIEVkaXRvci53aXRob3V0Tm9ybWFsaXppbmcoZWRpdG9yLCAoKSA9PiB7XG4gICAgICB2YXIge1xuICAgICAgICByZXZlcnNlID0gZmFsc2UsXG4gICAgICAgIHVuaXQgPSAnY2hhcmFjdGVyJyxcbiAgICAgICAgZGlzdGFuY2UgPSAxLFxuICAgICAgICB2b2lkcyA9IGZhbHNlXG4gICAgICB9ID0gb3B0aW9ucztcbiAgICAgIHZhciB7XG4gICAgICAgIGF0ID0gZWRpdG9yLnNlbGVjdGlvbixcbiAgICAgICAgaGFuZ2luZyA9IGZhbHNlXG4gICAgICB9ID0gb3B0aW9ucztcblxuICAgICAgaWYgKCFhdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChSYW5nZS5pc1JhbmdlKGF0KSAmJiBSYW5nZS5pc0NvbGxhcHNlZChhdCkpIHtcbiAgICAgICAgYXQgPSBhdC5hbmNob3I7XG4gICAgICB9XG5cbiAgICAgIGlmIChQb2ludC5pc1BvaW50KGF0KSkge1xuICAgICAgICB2YXIgZnVydGhlc3RWb2lkID0gRWRpdG9yLnZvaWQoZWRpdG9yLCB7XG4gICAgICAgICAgYXQsXG4gICAgICAgICAgbW9kZTogJ2hpZ2hlc3QnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghdm9pZHMgJiYgZnVydGhlc3RWb2lkKSB7XG4gICAgICAgICAgdmFyIFssIHZvaWRQYXRoXSA9IGZ1cnRoZXN0Vm9pZDtcbiAgICAgICAgICBhdCA9IHZvaWRQYXRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBvcHRzID0ge1xuICAgICAgICAgICAgdW5pdCxcbiAgICAgICAgICAgIGRpc3RhbmNlXG4gICAgICAgICAgfTtcbiAgICAgICAgICB2YXIgdGFyZ2V0ID0gcmV2ZXJzZSA/IEVkaXRvci5iZWZvcmUoZWRpdG9yLCBhdCwgb3B0cykgfHwgRWRpdG9yLnN0YXJ0KGVkaXRvciwgW10pIDogRWRpdG9yLmFmdGVyKGVkaXRvciwgYXQsIG9wdHMpIHx8IEVkaXRvci5lbmQoZWRpdG9yLCBbXSk7XG4gICAgICAgICAgYXQgPSB7XG4gICAgICAgICAgICBhbmNob3I6IGF0LFxuICAgICAgICAgICAgZm9jdXM6IHRhcmdldFxuICAgICAgICAgIH07XG4gICAgICAgICAgaGFuZ2luZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFBhdGguaXNQYXRoKGF0KSkge1xuICAgICAgICBUcmFuc2Zvcm1zLnJlbW92ZU5vZGVzKGVkaXRvciwge1xuICAgICAgICAgIGF0LFxuICAgICAgICAgIHZvaWRzXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChSYW5nZS5pc0NvbGxhcHNlZChhdCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWhhbmdpbmcpIHtcbiAgICAgICAgdmFyIFssIF9lbmRdID0gUmFuZ2UuZWRnZXMoYXQpO1xuICAgICAgICB2YXIgZW5kT2ZEb2MgPSBFZGl0b3IuZW5kKGVkaXRvciwgW10pO1xuXG4gICAgICAgIGlmICghUG9pbnQuZXF1YWxzKF9lbmQsIGVuZE9mRG9jKSkge1xuICAgICAgICAgIGF0ID0gRWRpdG9yLnVuaGFuZ1JhbmdlKGVkaXRvciwgYXQsIHtcbiAgICAgICAgICAgIHZvaWRzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIFtzdGFydCwgZW5kXSA9IFJhbmdlLmVkZ2VzKGF0KTtcbiAgICAgIHZhciBzdGFydEJsb2NrID0gRWRpdG9yLmFib3ZlKGVkaXRvciwge1xuICAgICAgICBtYXRjaDogbiA9PiBFZGl0b3IuaXNCbG9jayhlZGl0b3IsIG4pLFxuICAgICAgICBhdDogc3RhcnQsXG4gICAgICAgIHZvaWRzXG4gICAgICB9KTtcbiAgICAgIHZhciBlbmRCbG9jayA9IEVkaXRvci5hYm92ZShlZGl0b3IsIHtcbiAgICAgICAgbWF0Y2g6IG4gPT4gRWRpdG9yLmlzQmxvY2soZWRpdG9yLCBuKSxcbiAgICAgICAgYXQ6IGVuZCxcbiAgICAgICAgdm9pZHNcbiAgICAgIH0pO1xuICAgICAgdmFyIGlzQWNyb3NzQmxvY2tzID0gc3RhcnRCbG9jayAmJiBlbmRCbG9jayAmJiAhUGF0aC5lcXVhbHMoc3RhcnRCbG9ja1sxXSwgZW5kQmxvY2tbMV0pO1xuICAgICAgdmFyIGlzU2luZ2xlVGV4dCA9IFBhdGguZXF1YWxzKHN0YXJ0LnBhdGgsIGVuZC5wYXRoKTtcbiAgICAgIHZhciBzdGFydFZvaWQgPSB2b2lkcyA/IG51bGwgOiBFZGl0b3Iudm9pZChlZGl0b3IsIHtcbiAgICAgICAgYXQ6IHN0YXJ0LFxuICAgICAgICBtb2RlOiAnaGlnaGVzdCdcbiAgICAgIH0pO1xuICAgICAgdmFyIGVuZFZvaWQgPSB2b2lkcyA/IG51bGwgOiBFZGl0b3Iudm9pZChlZGl0b3IsIHtcbiAgICAgICAgYXQ6IGVuZCxcbiAgICAgICAgbW9kZTogJ2hpZ2hlc3QnXG4gICAgICB9KTsgLy8gSWYgdGhlIHN0YXJ0IG9yIGVuZCBwb2ludHMgYXJlIGluc2lkZSBhbiBpbmxpbmUgdm9pZCwgbnVkZ2UgdGhlbSBvdXQuXG5cbiAgICAgIGlmIChzdGFydFZvaWQpIHtcbiAgICAgICAgdmFyIGJlZm9yZSA9IEVkaXRvci5iZWZvcmUoZWRpdG9yLCBzdGFydCk7XG5cbiAgICAgICAgaWYgKGJlZm9yZSAmJiBzdGFydEJsb2NrICYmIFBhdGguaXNBbmNlc3RvcihzdGFydEJsb2NrWzFdLCBiZWZvcmUucGF0aCkpIHtcbiAgICAgICAgICBzdGFydCA9IGJlZm9yZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZW5kVm9pZCkge1xuICAgICAgICB2YXIgYWZ0ZXIgPSBFZGl0b3IuYWZ0ZXIoZWRpdG9yLCBlbmQpO1xuXG4gICAgICAgIGlmIChhZnRlciAmJiBlbmRCbG9jayAmJiBQYXRoLmlzQW5jZXN0b3IoZW5kQmxvY2tbMV0sIGFmdGVyLnBhdGgpKSB7XG4gICAgICAgICAgZW5kID0gYWZ0ZXI7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gR2V0IHRoZSBoaWdoZXN0IG5vZGVzIHRoYXQgYXJlIGNvbXBsZXRlbHkgaW5zaWRlIHRoZSByYW5nZSwgYXMgd2VsbCBhc1xuICAgICAgLy8gdGhlIHN0YXJ0IGFuZCBlbmQgbm9kZXMuXG5cblxuICAgICAgdmFyIG1hdGNoZXMgPSBbXTtcbiAgICAgIHZhciBsYXN0UGF0aDtcblxuICAgICAgZm9yICh2YXIgZW50cnkgb2YgRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgICAgICBhdCxcbiAgICAgICAgdm9pZHNcbiAgICAgIH0pKSB7XG4gICAgICAgIHZhciBbbm9kZSwgcGF0aF0gPSBlbnRyeTtcblxuICAgICAgICBpZiAobGFzdFBhdGggJiYgUGF0aC5jb21wYXJlKHBhdGgsIGxhc3RQYXRoKSA9PT0gMCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF2b2lkcyAmJiBFZGl0b3IuaXNWb2lkKGVkaXRvciwgbm9kZSkgfHwgIVBhdGguaXNDb21tb24ocGF0aCwgc3RhcnQucGF0aCkgJiYgIVBhdGguaXNDb21tb24ocGF0aCwgZW5kLnBhdGgpKSB7XG4gICAgICAgICAgbWF0Y2hlcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICBsYXN0UGF0aCA9IHBhdGg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHBhdGhSZWZzID0gQXJyYXkuZnJvbShtYXRjaGVzLCBfcmVmID0+IHtcbiAgICAgICAgdmFyIFssIHBdID0gX3JlZjtcbiAgICAgICAgcmV0dXJuIEVkaXRvci5wYXRoUmVmKGVkaXRvciwgcCk7XG4gICAgICB9KTtcbiAgICAgIHZhciBzdGFydFJlZiA9IEVkaXRvci5wb2ludFJlZihlZGl0b3IsIHN0YXJ0KTtcbiAgICAgIHZhciBlbmRSZWYgPSBFZGl0b3IucG9pbnRSZWYoZWRpdG9yLCBlbmQpO1xuXG4gICAgICBpZiAoIWlzU2luZ2xlVGV4dCAmJiAhc3RhcnRWb2lkKSB7XG4gICAgICAgIHZhciBfcG9pbnQgPSBzdGFydFJlZi5jdXJyZW50O1xuICAgICAgICB2YXIgW19ub2RlXSA9IEVkaXRvci5sZWFmKGVkaXRvciwgX3BvaW50KTtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBwYXRoOiBfcGF0aFxuICAgICAgICB9ID0gX3BvaW50O1xuICAgICAgICB2YXIge1xuICAgICAgICAgIG9mZnNldFxuICAgICAgICB9ID0gc3RhcnQ7XG5cbiAgICAgICAgdmFyIHRleHQgPSBfbm9kZS50ZXh0LnNsaWNlKG9mZnNldCk7XG5cbiAgICAgICAgaWYgKHRleHQubGVuZ3RoID4gMCkgZWRpdG9yLmFwcGx5KHtcbiAgICAgICAgICB0eXBlOiAncmVtb3ZlX3RleHQnLFxuICAgICAgICAgIHBhdGg6IF9wYXRoLFxuICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICB0ZXh0XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBwYXRoUmVmIG9mIHBhdGhSZWZzKSB7XG4gICAgICAgIHZhciBfcGF0aDIgPSBwYXRoUmVmLnVucmVmKCk7XG5cbiAgICAgICAgVHJhbnNmb3Jtcy5yZW1vdmVOb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICBhdDogX3BhdGgyLFxuICAgICAgICAgIHZvaWRzXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWVuZFZvaWQpIHtcbiAgICAgICAgdmFyIF9wb2ludDIgPSBlbmRSZWYuY3VycmVudDtcbiAgICAgICAgdmFyIFtfbm9kZTJdID0gRWRpdG9yLmxlYWYoZWRpdG9yLCBfcG9pbnQyKTtcbiAgICAgICAgdmFyIHtcbiAgICAgICAgICBwYXRoOiBfcGF0aDNcbiAgICAgICAgfSA9IF9wb2ludDI7XG5cbiAgICAgICAgdmFyIF9vZmZzZXQgPSBpc1NpbmdsZVRleHQgPyBzdGFydC5vZmZzZXQgOiAwO1xuXG4gICAgICAgIHZhciBfdGV4dCA9IF9ub2RlMi50ZXh0LnNsaWNlKF9vZmZzZXQsIGVuZC5vZmZzZXQpO1xuXG4gICAgICAgIGlmIChfdGV4dC5sZW5ndGggPiAwKSBlZGl0b3IuYXBwbHkoe1xuICAgICAgICAgIHR5cGU6ICdyZW1vdmVfdGV4dCcsXG4gICAgICAgICAgcGF0aDogX3BhdGgzLFxuICAgICAgICAgIG9mZnNldDogX29mZnNldCxcbiAgICAgICAgICB0ZXh0OiBfdGV4dFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1NpbmdsZVRleHQgJiYgaXNBY3Jvc3NCbG9ja3MgJiYgZW5kUmVmLmN1cnJlbnQgJiYgc3RhcnRSZWYuY3VycmVudCkge1xuICAgICAgICBUcmFuc2Zvcm1zLm1lcmdlTm9kZXMoZWRpdG9yLCB7XG4gICAgICAgICAgYXQ6IGVuZFJlZi5jdXJyZW50LFxuICAgICAgICAgIGhhbmdpbmc6IHRydWUsXG4gICAgICAgICAgdm9pZHNcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBwb2ludCA9IHJldmVyc2UgPyBzdGFydFJlZi51bnJlZigpIHx8IGVuZFJlZi51bnJlZigpIDogZW5kUmVmLnVucmVmKCkgfHwgc3RhcnRSZWYudW5yZWYoKTtcblxuICAgICAgaWYgKG9wdGlvbnMuYXQgPT0gbnVsbCAmJiBwb2ludCkge1xuICAgICAgICBUcmFuc2Zvcm1zLnNlbGVjdChlZGl0b3IsIHBvaW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvKipcclxuICAgKiBJbnNlcnQgYSBmcmFnbWVudCBhdCBhIHNwZWNpZmljIGxvY2F0aW9uIGluIHRoZSBlZGl0b3IuXHJcbiAgICovXG4gIGluc2VydEZyYWdtZW50KGVkaXRvciwgZnJhZ21lbnQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgRWRpdG9yLndpdGhvdXROb3JtYWxpemluZyhlZGl0b3IsICgpID0+IHtcbiAgICAgIHZhciB7XG4gICAgICAgIGhhbmdpbmcgPSBmYWxzZSxcbiAgICAgICAgdm9pZHMgPSBmYWxzZVxuICAgICAgfSA9IG9wdGlvbnM7XG4gICAgICB2YXIge1xuICAgICAgICBhdCA9IGVkaXRvci5zZWxlY3Rpb25cbiAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgICBpZiAoIWZyYWdtZW50Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghYXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmIChSYW5nZS5pc1JhbmdlKGF0KSkge1xuICAgICAgICBpZiAoIWhhbmdpbmcpIHtcbiAgICAgICAgICBhdCA9IEVkaXRvci51bmhhbmdSYW5nZShlZGl0b3IsIGF0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChSYW5nZS5pc0NvbGxhcHNlZChhdCkpIHtcbiAgICAgICAgICBhdCA9IGF0LmFuY2hvcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgWywgZW5kXSA9IFJhbmdlLmVkZ2VzKGF0KTtcblxuICAgICAgICAgIGlmICghdm9pZHMgJiYgRWRpdG9yLnZvaWQoZWRpdG9yLCB7XG4gICAgICAgICAgICBhdDogZW5kXG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcG9pbnRSZWYgPSBFZGl0b3IucG9pbnRSZWYoZWRpdG9yLCBlbmQpO1xuICAgICAgICAgIFRyYW5zZm9ybXMuZGVsZXRlKGVkaXRvciwge1xuICAgICAgICAgICAgYXRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhdCA9IHBvaW50UmVmLnVucmVmKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoUGF0aC5pc1BhdGgoYXQpKSB7XG4gICAgICAgIGF0ID0gRWRpdG9yLnN0YXJ0KGVkaXRvciwgYXQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXZvaWRzICYmIEVkaXRvci52b2lkKGVkaXRvciwge1xuICAgICAgICBhdFxuICAgICAgfSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBJZiB0aGUgaW5zZXJ0IHBvaW50IGlzIGF0IHRoZSBlZGdlIG9mIGFuIGlubGluZSBub2RlLCBtb3ZlIGl0IG91dHNpZGVcbiAgICAgIC8vIGluc3RlYWQgc2luY2UgaXQgd2lsbCBuZWVkIHRvIGJlIHNwbGl0IG90aGVyd2lzZS5cblxuXG4gICAgICB2YXIgaW5saW5lRWxlbWVudE1hdGNoID0gRWRpdG9yLmFib3ZlKGVkaXRvciwge1xuICAgICAgICBhdCxcbiAgICAgICAgbWF0Y2g6IG4gPT4gRWRpdG9yLmlzSW5saW5lKGVkaXRvciwgbiksXG4gICAgICAgIG1vZGU6ICdoaWdoZXN0JyxcbiAgICAgICAgdm9pZHNcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaW5saW5lRWxlbWVudE1hdGNoKSB7XG4gICAgICAgIHZhciBbLCBfaW5saW5lUGF0aF0gPSBpbmxpbmVFbGVtZW50TWF0Y2g7XG5cbiAgICAgICAgaWYgKEVkaXRvci5pc0VuZChlZGl0b3IsIGF0LCBfaW5saW5lUGF0aCkpIHtcbiAgICAgICAgICB2YXIgYWZ0ZXIgPSBFZGl0b3IuYWZ0ZXIoZWRpdG9yLCBfaW5saW5lUGF0aCk7XG4gICAgICAgICAgYXQgPSBhZnRlcjtcbiAgICAgICAgfSBlbHNlIGlmIChFZGl0b3IuaXNTdGFydChlZGl0b3IsIGF0LCBfaW5saW5lUGF0aCkpIHtcbiAgICAgICAgICB2YXIgYmVmb3JlID0gRWRpdG9yLmJlZm9yZShlZGl0b3IsIF9pbmxpbmVQYXRoKTtcbiAgICAgICAgICBhdCA9IGJlZm9yZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgYmxvY2tNYXRjaCA9IEVkaXRvci5hYm92ZShlZGl0b3IsIHtcbiAgICAgICAgbWF0Y2g6IG4gPT4gRWRpdG9yLmlzQmxvY2soZWRpdG9yLCBuKSxcbiAgICAgICAgYXQsXG4gICAgICAgIHZvaWRzXG4gICAgICB9KTtcbiAgICAgIHZhciBbLCBibG9ja1BhdGhdID0gYmxvY2tNYXRjaDtcbiAgICAgIHZhciBpc0Jsb2NrU3RhcnQgPSBFZGl0b3IuaXNTdGFydChlZGl0b3IsIGF0LCBibG9ja1BhdGgpO1xuICAgICAgdmFyIGlzQmxvY2tFbmQgPSBFZGl0b3IuaXNFbmQoZWRpdG9yLCBhdCwgYmxvY2tQYXRoKTtcbiAgICAgIHZhciBpc0Jsb2NrRW1wdHkgPSBpc0Jsb2NrU3RhcnQgJiYgaXNCbG9ja0VuZDtcbiAgICAgIHZhciBtZXJnZVN0YXJ0ID0gIWlzQmxvY2tTdGFydCB8fCBpc0Jsb2NrU3RhcnQgJiYgaXNCbG9ja0VuZDtcbiAgICAgIHZhciBtZXJnZUVuZCA9ICFpc0Jsb2NrRW5kO1xuICAgICAgdmFyIFssIGZpcnN0UGF0aF0gPSBOb2RlLmZpcnN0KHtcbiAgICAgICAgY2hpbGRyZW46IGZyYWdtZW50XG4gICAgICB9LCBbXSk7XG4gICAgICB2YXIgWywgbGFzdFBhdGhdID0gTm9kZS5sYXN0KHtcbiAgICAgICAgY2hpbGRyZW46IGZyYWdtZW50XG4gICAgICB9LCBbXSk7XG4gICAgICB2YXIgbWF0Y2hlcyA9IFtdO1xuXG4gICAgICB2YXIgbWF0Y2hlciA9IF9yZWYyID0+IHtcbiAgICAgICAgdmFyIFtuLCBwXSA9IF9yZWYyO1xuICAgICAgICB2YXIgaXNSb290ID0gcC5sZW5ndGggPT09IDA7XG5cbiAgICAgICAgaWYgKGlzUm9vdCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0Jsb2NrRW1wdHkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZXJnZVN0YXJ0ICYmIFBhdGguaXNBbmNlc3RvcihwLCBmaXJzdFBhdGgpICYmIEVsZW1lbnQuaXNFbGVtZW50KG4pICYmICFlZGl0b3IuaXNWb2lkKG4pICYmICFlZGl0b3IuaXNJbmxpbmUobikpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWVyZ2VFbmQgJiYgUGF0aC5pc0FuY2VzdG9yKHAsIGxhc3RQYXRoKSAmJiBFbGVtZW50LmlzRWxlbWVudChuKSAmJiAhZWRpdG9yLmlzVm9pZChuKSAmJiAhZWRpdG9yLmlzSW5saW5lKG4pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuXG4gICAgICBmb3IgKHZhciBlbnRyeSBvZiBOb2RlLm5vZGVzKHtcbiAgICAgICAgY2hpbGRyZW46IGZyYWdtZW50XG4gICAgICB9LCB7XG4gICAgICAgIHBhc3M6IG1hdGNoZXJcbiAgICAgIH0pKSB7XG4gICAgICAgIGlmIChtYXRjaGVyKGVudHJ5KSkge1xuICAgICAgICAgIG1hdGNoZXMucHVzaChlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXJ0cyA9IFtdO1xuICAgICAgdmFyIG1pZGRsZXMgPSBbXTtcbiAgICAgIHZhciBlbmRzID0gW107XG4gICAgICB2YXIgc3RhcnRpbmcgPSB0cnVlO1xuICAgICAgdmFyIGhhc0Jsb2NrcyA9IGZhbHNlO1xuXG4gICAgICBmb3IgKHZhciBbbm9kZV0gb2YgbWF0Y2hlcykge1xuICAgICAgICBpZiAoRWxlbWVudC5pc0VsZW1lbnQobm9kZSkgJiYgIWVkaXRvci5pc0lubGluZShub2RlKSkge1xuICAgICAgICAgIHN0YXJ0aW5nID0gZmFsc2U7XG4gICAgICAgICAgaGFzQmxvY2tzID0gdHJ1ZTtcbiAgICAgICAgICBtaWRkbGVzLnB1c2gobm9kZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhcnRpbmcpIHtcbiAgICAgICAgICBzdGFydHMucHVzaChub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbmRzLnB1c2gobm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIFtpbmxpbmVNYXRjaF0gPSBFZGl0b3Iubm9kZXMoZWRpdG9yLCB7XG4gICAgICAgIGF0LFxuICAgICAgICBtYXRjaDogbiA9PiBUZXh0LmlzVGV4dChuKSB8fCBFZGl0b3IuaXNJbmxpbmUoZWRpdG9yLCBuKSxcbiAgICAgICAgbW9kZTogJ2hpZ2hlc3QnLFxuICAgICAgICB2b2lkc1xuICAgICAgfSk7XG4gICAgICB2YXIgWywgaW5saW5lUGF0aF0gPSBpbmxpbmVNYXRjaDtcbiAgICAgIHZhciBpc0lubGluZVN0YXJ0ID0gRWRpdG9yLmlzU3RhcnQoZWRpdG9yLCBhdCwgaW5saW5lUGF0aCk7XG4gICAgICB2YXIgaXNJbmxpbmVFbmQgPSBFZGl0b3IuaXNFbmQoZWRpdG9yLCBhdCwgaW5saW5lUGF0aCk7XG4gICAgICB2YXIgbWlkZGxlUmVmID0gRWRpdG9yLnBhdGhSZWYoZWRpdG9yLCBpc0Jsb2NrRW5kID8gUGF0aC5uZXh0KGJsb2NrUGF0aCkgOiBibG9ja1BhdGgpO1xuICAgICAgdmFyIGVuZFJlZiA9IEVkaXRvci5wYXRoUmVmKGVkaXRvciwgaXNJbmxpbmVFbmQgPyBQYXRoLm5leHQoaW5saW5lUGF0aCkgOiBpbmxpbmVQYXRoKTtcbiAgICAgIHZhciBibG9ja1BhdGhSZWYgPSBFZGl0b3IucGF0aFJlZihlZGl0b3IsIGJsb2NrUGF0aCk7XG4gICAgICBUcmFuc2Zvcm1zLnNwbGl0Tm9kZXMoZWRpdG9yLCB7XG4gICAgICAgIGF0LFxuICAgICAgICBtYXRjaDogbiA9PiBoYXNCbG9ja3MgPyBFZGl0b3IuaXNCbG9jayhlZGl0b3IsIG4pIDogVGV4dC5pc1RleHQobikgfHwgRWRpdG9yLmlzSW5saW5lKGVkaXRvciwgbiksXG4gICAgICAgIG1vZGU6IGhhc0Jsb2NrcyA/ICdsb3dlc3QnIDogJ2hpZ2hlc3QnLFxuICAgICAgICB2b2lkc1xuICAgICAgfSk7XG4gICAgICB2YXIgc3RhcnRSZWYgPSBFZGl0b3IucGF0aFJlZihlZGl0b3IsICFpc0lubGluZVN0YXJ0IHx8IGlzSW5saW5lU3RhcnQgJiYgaXNJbmxpbmVFbmQgPyBQYXRoLm5leHQoaW5saW5lUGF0aCkgOiBpbmxpbmVQYXRoKTtcbiAgICAgIFRyYW5zZm9ybXMuaW5zZXJ0Tm9kZXMoZWRpdG9yLCBzdGFydHMsIHtcbiAgICAgICAgYXQ6IHN0YXJ0UmVmLmN1cnJlbnQsXG4gICAgICAgIG1hdGNoOiBuID0+IFRleHQuaXNUZXh0KG4pIHx8IEVkaXRvci5pc0lubGluZShlZGl0b3IsIG4pLFxuICAgICAgICBtb2RlOiAnaGlnaGVzdCcsXG4gICAgICAgIHZvaWRzXG4gICAgICB9KTtcblxuICAgICAgaWYgKGlzQmxvY2tFbXB0eSAmJiBtaWRkbGVzLmxlbmd0aCkge1xuICAgICAgICBUcmFuc2Zvcm1zLmRlbGV0ZShlZGl0b3IsIHtcbiAgICAgICAgICBhdDogYmxvY2tQYXRoUmVmLnVucmVmKCksXG4gICAgICAgICAgdm9pZHNcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIFRyYW5zZm9ybXMuaW5zZXJ0Tm9kZXMoZWRpdG9yLCBtaWRkbGVzLCB7XG4gICAgICAgIGF0OiBtaWRkbGVSZWYuY3VycmVudCxcbiAgICAgICAgbWF0Y2g6IG4gPT4gRWRpdG9yLmlzQmxvY2soZWRpdG9yLCBuKSxcbiAgICAgICAgbW9kZTogJ2xvd2VzdCcsXG4gICAgICAgIHZvaWRzXG4gICAgICB9KTtcbiAgICAgIFRyYW5zZm9ybXMuaW5zZXJ0Tm9kZXMoZWRpdG9yLCBlbmRzLCB7XG4gICAgICAgIGF0OiBlbmRSZWYuY3VycmVudCxcbiAgICAgICAgbWF0Y2g6IG4gPT4gVGV4dC5pc1RleHQobikgfHwgRWRpdG9yLmlzSW5saW5lKGVkaXRvciwgbiksXG4gICAgICAgIG1vZGU6ICdoaWdoZXN0JyxcbiAgICAgICAgdm9pZHNcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIW9wdGlvbnMuYXQpIHtcbiAgICAgICAgdmFyIHBhdGg7XG5cbiAgICAgICAgaWYgKGVuZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHBhdGggPSBQYXRoLnByZXZpb3VzKGVuZFJlZi5jdXJyZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChtaWRkbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBwYXRoID0gUGF0aC5wcmV2aW91cyhtaWRkbGVSZWYuY3VycmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGF0aCA9IFBhdGgucHJldmlvdXMoc3RhcnRSZWYuY3VycmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX2VuZDIgPSBFZGl0b3IuZW5kKGVkaXRvciwgcGF0aCk7XG5cbiAgICAgICAgVHJhbnNmb3Jtcy5zZWxlY3QoZWRpdG9yLCBfZW5kMik7XG4gICAgICB9XG5cbiAgICAgIHN0YXJ0UmVmLnVucmVmKCk7XG4gICAgICBtaWRkbGVSZWYudW5yZWYoKTtcbiAgICAgIGVuZFJlZi51bnJlZigpO1xuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxyXG4gICAqIEluc2VydCBhIHN0cmluZyBvZiB0ZXh0IGluIHRoZSBFZGl0b3IuXHJcbiAgICovXG4gIGluc2VydFRleHQoZWRpdG9yLCB0ZXh0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIEVkaXRvci53aXRob3V0Tm9ybWFsaXppbmcoZWRpdG9yLCAoKSA9PiB7XG4gICAgICB2YXIge1xuICAgICAgICB2b2lkcyA9IGZhbHNlXG4gICAgICB9ID0gb3B0aW9ucztcbiAgICAgIHZhciB7XG4gICAgICAgIGF0ID0gZWRpdG9yLnNlbGVjdGlvblxuICAgICAgfSA9IG9wdGlvbnM7XG5cbiAgICAgIGlmICghYXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoUGF0aC5pc1BhdGgoYXQpKSB7XG4gICAgICAgIGF0ID0gRWRpdG9yLnJhbmdlKGVkaXRvciwgYXQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoUmFuZ2UuaXNSYW5nZShhdCkpIHtcbiAgICAgICAgaWYgKFJhbmdlLmlzQ29sbGFwc2VkKGF0KSkge1xuICAgICAgICAgIGF0ID0gYXQuYW5jaG9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBlbmQgPSBSYW5nZS5lbmQoYXQpO1xuXG4gICAgICAgICAgaWYgKCF2b2lkcyAmJiBFZGl0b3Iudm9pZChlZGl0b3IsIHtcbiAgICAgICAgICAgIGF0OiBlbmRcbiAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBwb2ludFJlZiA9IEVkaXRvci5wb2ludFJlZihlZGl0b3IsIGVuZCk7XG4gICAgICAgICAgVHJhbnNmb3Jtcy5kZWxldGUoZWRpdG9yLCB7XG4gICAgICAgICAgICBhdCxcbiAgICAgICAgICAgIHZvaWRzXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYXQgPSBwb2ludFJlZi51bnJlZigpO1xuICAgICAgICAgIFRyYW5zZm9ybXMuc2V0U2VsZWN0aW9uKGVkaXRvciwge1xuICAgICAgICAgICAgYW5jaG9yOiBhdCxcbiAgICAgICAgICAgIGZvY3VzOiBhdFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghdm9pZHMgJiYgRWRpdG9yLnZvaWQoZWRpdG9yLCB7XG4gICAgICAgIGF0XG4gICAgICB9KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB7XG4gICAgICAgIHBhdGgsXG4gICAgICAgIG9mZnNldFxuICAgICAgfSA9IGF0O1xuICAgICAgaWYgKHRleHQubGVuZ3RoID4gMCkgZWRpdG9yLmFwcGx5KHtcbiAgICAgICAgdHlwZTogJ2luc2VydF90ZXh0JyxcbiAgICAgICAgcGF0aCxcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICB0ZXh0XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG59O1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSB7IHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsgfSBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG52YXIgVHJhbnNmb3JtcyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIEdlbmVyYWxUcmFuc2Zvcm1zKSwgTm9kZVRyYW5zZm9ybXMpLCBTZWxlY3Rpb25UcmFuc2Zvcm1zKSwgVGV4dFRyYW5zZm9ybXMpO1xuXG5leHBvcnQgeyBFZGl0b3IsIEVsZW1lbnQsIExvY2F0aW9uLCBOb2RlLCBPcGVyYXRpb24sIFBhdGgsIFBhdGhSZWYsIFBvaW50LCBQb2ludFJlZiwgUmFuZ2UsIFJhbmdlUmVmLCBTcGFuLCBUZXh0LCBUcmFuc2Zvcm1zLCBjcmVhdGVFZGl0b3IgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzLmpzLm1hcFxuIiwidmFyIF9fcmVhZCA9ICh0aGlzICYmIHRoaXMuX19yZWFkKSB8fCBmdW5jdGlvbiAobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59O1xyXG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XHJcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcclxuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcclxuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xyXG59O1xyXG5pbXBvcnQgeyBFZGl0b3IsIFBhdGgsIFRleHQsIFRyYW5zZm9ybXMgfSBmcm9tICdzbGF0ZSc7XHJcbmV4cG9ydCB2YXIgZ2V0QWN0aXZlTGlzdCA9IGZ1bmN0aW9uIChlZGl0b3IsIGFsbExpc3RUeXBlcykge1xyXG4gICAgdmFyIF9hID0gX19yZWFkKEVkaXRvci5ub2RlcyhlZGl0b3IsIHtcclxuICAgICAgICBtYXRjaDogZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIGFsbExpc3RUeXBlcy5pbmNsdWRlcyhlbGVtLnR5cGUpOyB9LFxyXG4gICAgICAgIG1vZGU6ICdsb3dlc3QnLCAvLyBGSVhNRTogd2hhdHMgdGhlIGJlc3QgdmFsdWU/XHJcbiAgICB9KSwgMSksIG1hdGNoaW5nTm9kZSA9IF9hWzBdO1xyXG4gICAgcmV0dXJuIG1hdGNoaW5nTm9kZTtcclxufTtcclxuZXhwb3J0IHZhciBnZXRBY3RpdmVMaXN0VHlwZSA9IGZ1bmN0aW9uIChlZGl0b3IsIGFsbExpc3RUeXBlcykge1xyXG4gICAgdmFyIF9hLCBfYjtcclxuICAgIHJldHVybiAoX2IgPSAoX2EgPSBnZXRBY3RpdmVMaXN0KGVkaXRvciwgYWxsTGlzdFR5cGVzKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hWzBdKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudHlwZTtcclxufTtcclxuZXhwb3J0IHZhciBnZXRQcmV2aW91c0xpc3RJdGVtID0gZnVuY3Rpb24gKGVkaXRvciwgbGlzdEl0ZW1UeXBlKSB7XHJcbiAgICB2YXIgX2EgPSBfX3JlYWQoRWRpdG9yLm5vZGVzKGVkaXRvciwge1xyXG4gICAgICAgIG1hdGNoOiBmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gZWxlbS50eXBlID09PSBsaXN0SXRlbVR5cGU7IH0sXHJcbiAgICAgICAgbW9kZTogJ2xvd2VzdCcsXHJcbiAgICB9KSwgMSksIGN1cnJlbnRMaSA9IF9hWzBdO1xyXG4gICAgdmFyIGhhc1ByZXZpb3VzID0gY3VycmVudExpICYmIGN1cnJlbnRMaVsxXVtjdXJyZW50TGlbMV0ubGVuZ3RoIC0gMV0gPiAwO1xyXG4gICAgcmV0dXJuIGhhc1ByZXZpb3VzID8gRWRpdG9yLm5vZGUoZWRpdG9yLCBQYXRoLnByZXZpb3VzKGN1cnJlbnRMaVsxXSkpIDogbnVsbDtcclxufTtcclxuZXhwb3J0IHZhciBpbmNyZWFzZUxpc3RJbmRlbnRpb24gPSBmdW5jdGlvbiAoZWRpdG9yLCBkZWYsIGxpc3RUeXBlKSB7XHJcbiAgICB2YXIgY3VycmVudEFjdGl2ZVR5cGUgPSBnZXRBY3RpdmVMaXN0VHlwZShlZGl0b3IsIGRlZi5hbGxMaXN0VHlwZXMpO1xyXG4gICAgdmFyIHByZXZpb3VzID0gZ2V0UHJldmlvdXNMaXN0SXRlbShlZGl0b3IsIGRlZi5saXN0SXRlbVR5cGUpO1xyXG4gICAgVHJhbnNmb3Jtcy5zZXROb2RlcyhlZGl0b3IsIHtcclxuICAgICAgICB0eXBlOiBkZWYubGlzdEl0ZW1UeXBlLFxyXG4gICAgfSk7XHJcbiAgICBpZiAocHJldmlvdXMpIHtcclxuICAgICAgICAvLyBmaXJzdCBtYWtlIHRoZSBwcmV2aW91cyBub2RlIGEgcGFyYWdyYXBoXHJcbiAgICAgICAgVHJhbnNmb3Jtcy5zZXROb2RlcyhlZGl0b3IsIHtcclxuICAgICAgICAgICAgdHlwZTogbnVsbCxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGF0OiBwcmV2aW91c1sxXSxcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyB3cmFwIHRoZSBwYXJhcmFwaCBhcyBhIG5ldyBsaXN0IGl0ZW1cclxuICAgICAgICBUcmFuc2Zvcm1zLndyYXBOb2RlcyhlZGl0b3IsIHtcclxuICAgICAgICAgICAgdHlwZTogZGVmLmxpc3RJdGVtVHlwZSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgYXQ6IHByZXZpb3VzWzFdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIG1vdmUgdGhlIGN1cnJlbnQgbm9kZSBhZnRlciB0aGUgcGFyYWdyYXBoXHJcbiAgICAgICAgVHJhbnNmb3Jtcy5tb3ZlTm9kZXMoZWRpdG9yLCB7XHJcbiAgICAgICAgICAgIHRvOiBfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZChwcmV2aW91c1sxXSksIGZhbHNlKSwgWzFdLCBmYWxzZSksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgVHJhbnNmb3Jtcy53cmFwTm9kZXMoZWRpdG9yLCB7XHJcbiAgICAgICAgICAgIHR5cGU6IGxpc3RUeXBlICE9PSBudWxsICYmIGxpc3RUeXBlICE9PSB2b2lkIDAgPyBsaXN0VHlwZSA6IGN1cnJlbnRBY3RpdmVUeXBlLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBUcmFuc2Zvcm1zLndyYXBOb2RlcyhlZGl0b3IsIHtcclxuICAgICAgICAgICAgdHlwZTogbGlzdFR5cGUgIT09IG51bGwgJiYgbGlzdFR5cGUgIT09IHZvaWQgMCA/IGxpc3RUeXBlIDogY3VycmVudEFjdGl2ZVR5cGUsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxudmFyIG1vdmVUb1BhcmVudCA9IGZ1bmN0aW9uIChlZGl0b3IsIG5vZGVQYXRoLCB0YXJnZXRQYXRoLCBwYXJlbnRJc0xpc3QpIHtcclxuICAgIHZhciBfYTtcclxuICAgIFRyYW5zZm9ybXMubW92ZU5vZGVzKGVkaXRvciwge1xyXG4gICAgICAgIGF0OiBub2RlUGF0aCxcclxuICAgICAgICB0bzogdGFyZ2V0UGF0aCxcclxuICAgIH0pO1xyXG4gICAgaWYgKCFwYXJlbnRJc0xpc3QpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0Tm9kZSA9IEVkaXRvci5ub2RlKGVkaXRvciwgdGFyZ2V0UGF0aCk7XHJcbiAgICAgICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9pYW5zdG9ybXRheWxvci9zbGF0ZS9pc3N1ZXMvMzc2OVxyXG4gICAgICAgIHZhciBvbmx5VGV4dENoaWxkcmVuID0gKF9hID0gKHRhcmdldE5vZGUgPT09IG51bGwgfHwgdGFyZ2V0Tm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFyZ2V0Tm9kZVswXSkuY2hpbGRyZW4pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ldmVyeShmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIFRleHQuaXNUZXh0KGNoaWxkKSB8fCBFZGl0b3IuaXNJbmxpbmUoZWRpdG9yLCBjaGlsZCk7IH0pO1xyXG4gICAgICAgIGlmIChvbmx5VGV4dENoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIFRyYW5zZm9ybXMuc2V0Tm9kZXMoZWRpdG9yLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBudWxsLFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBhdDogdGFyZ2V0UGF0aCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBUcmFuc2Zvcm1zLnVud3JhcE5vZGVzKGVkaXRvciwge1xyXG4gICAgICAgICAgICAgICAgYXQ6IHRhcmdldFBhdGgsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuZXhwb3J0IHZhciBkZWNyZWFzZUxpc3RJbmRlbnRpb24gPSBmdW5jdGlvbiAoZWRpdG9yLCBkZWYpIHtcclxuICAgIHZhciBfYSA9IF9fcmVhZChFZGl0b3Iubm9kZXMoZWRpdG9yLCB7XHJcbiAgICAgICAgbWF0Y2g6IGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBlbGVtLnR5cGUgPT09IGRlZi5saXN0SXRlbVR5cGU7IH0sXHJcbiAgICAgICAgbW9kZTogJ2xvd2VzdCcsXHJcbiAgICB9KSwgMSksIGN1cnJlbnRMaSA9IF9hWzBdO1xyXG4gICAgdmFyIGN1cnJlbnRMaVBhdGggPSBjdXJyZW50TGlbMV07XHJcbiAgICB2YXIgY3VycmVudFBhcmVudCA9IFBhdGgucGFyZW50KGN1cnJlbnRMaVBhdGgpO1xyXG4gICAgdmFyIHBhcmVudExpc3RJdGVtUGF0aCA9IFBhdGgucGFyZW50KGN1cnJlbnRQYXJlbnQpO1xyXG4gICAgdmFyIHBhcmVudExpc3RJdGVtID0gRWRpdG9yLm5vZGUoZWRpdG9yLCBwYXJlbnRMaXN0SXRlbVBhdGgpO1xyXG4gICAgdmFyIHBhcmVudElzTGlzdCA9IChwYXJlbnRMaXN0SXRlbSA9PT0gbnVsbCB8fCBwYXJlbnRMaXN0SXRlbSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyZW50TGlzdEl0ZW1bMF0udHlwZSkgPT09IGRlZi5saXN0SXRlbVR5cGU7XHJcbiAgICB2YXIgaXNGaXJzdEluSXRzTGlzdCA9IGN1cnJlbnRMaVBhdGhbY3VycmVudExpUGF0aC5sZW5ndGggLSAxXSA9PT0gMDtcclxuICAgIHZhciB0YXJnZXRQYXRoID0gcGFyZW50SXNMaXN0XHJcbiAgICAgICAgPyBQYXRoLm5leHQocGFyZW50TGlzdEl0ZW1QYXRoKVxyXG4gICAgICAgIDogUGF0aC5uZXh0KGN1cnJlbnRQYXJlbnQpO1xyXG4gICAgdmFyIG5leHQ7XHJcbiAgICBkbyB7XHJcbiAgICAgICAgbmV4dCA9IEVkaXRvci5uZXh0KGVkaXRvciwge1xyXG4gICAgICAgICAgICBhdDogY3VycmVudExpUGF0aCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAobmV4dCkge1xyXG4gICAgICAgICAgICBtb3ZlVG9QYXJlbnQoZWRpdG9yLCBuZXh0WzFdLCB0YXJnZXRQYXRoLCBwYXJlbnRJc0xpc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH0gd2hpbGUgKG5leHQpO1xyXG4gICAgbW92ZVRvUGFyZW50KGVkaXRvciwgY3VycmVudExpUGF0aCwgdGFyZ2V0UGF0aCwgcGFyZW50SXNMaXN0KTtcclxuICAgIGlmIChpc0ZpcnN0SW5JdHNMaXN0KSB7XHJcbiAgICAgICAgLy8gdGhlIGxpc3Qgd2lsbCBiZSBlbXB0eSBub3csIHJlbW92ZSBpdFxyXG4gICAgICAgIFRyYW5zZm9ybXMucmVtb3ZlTm9kZXMoZWRpdG9yLCB7XHJcbiAgICAgICAgICAgIGF0OiBjdXJyZW50UGFyZW50LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChwYXJlbnRJc0xpc3QpIHtcclxuICAgICAgICAgICAgdmFyIHByZXZpb3VzUGFyYWdyYXBoUGF0aCA9IF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShbXSwgX19yZWFkKFBhdGgucHJldmlvdXModGFyZ2V0UGF0aCkpLCBmYWxzZSksIFswXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB2YXIgcHJldmlvdXNQYXJhZ3JhcGggPSBFZGl0b3Iubm9kZShlZGl0b3IsIHByZXZpb3VzUGFyYWdyYXBoUGF0aCk7XHJcbiAgICAgICAgICAgIGlmICghKHByZXZpb3VzUGFyYWdyYXBoID09PSBudWxsIHx8IHByZXZpb3VzUGFyYWdyYXBoID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcmV2aW91c1BhcmFncmFwaFswXS50eXBlKSkge1xyXG4gICAgICAgICAgICAgICAgVHJhbnNmb3Jtcy51bndyYXBOb2RlcyhlZGl0b3IsIHtcclxuICAgICAgICAgICAgICAgICAgICBhdDogcHJldmlvdXNQYXJhZ3JhcGhQYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwbGl0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpc3RVdGlscy5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9