(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[48],{

/***/ "../packages/react-admin/lib-es/RaSelectReferenceInputField.js":
/*!*********************************************************************!*\
  !*** ../packages/react-admin/lib-es/RaSelectReferenceInputField.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-admin */ "../node_modules/react-admin/esm/index.js");
/* harmony import */ var uniforms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uniforms */ "../node_modules/uniforms/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



/**
 * RaSelectReferenceInputField can be used in an autoform to
 */
var RaSelectReferenceInputField = Object(uniforms__WEBPACK_IMPORTED_MODULE_1__["connectField"])(function (_a) {
    var _b = _a.allowEmpty, allowEmpty = _b === void 0 ? true : _b, _c = _a.value, value = _c === void 0 ? null : _c, onChange = _a.onChange, optionText = _a.optionText, optionValue = _a.optionValue, label = _a.label, props = __rest(_a, ["allowEmpty", "value", "onChange", "optionText", "optionValue", "label"]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_0__["ReferenceInput"], { label: label, reference: props.reference, perPage: props.perPage, allowEmpty: allowEmpty, meta: {}, input: {
            value: value,
            onChange: function (e) {
                onChange(e.target.value);
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }, source: null },
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_0__["SelectInput"], { optionText: optionText || 'id', emptyValue: null, optionValue: optionValue || 'id', options: { value: value } })));
});
/* harmony default export */ __webpack_exports__["default"] = (RaSelectReferenceInputField);
//# sourceMappingURL=RaSelectReferenceInputField.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL3BhY2thZ2VzL3JlYWN0LWFkbWluL2xpYi1lcy9SYVNlbGVjdFJlZmVyZW5jZUlucHV0RmllbGQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFjLFNBQUksSUFBSSxTQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELGNBQWM7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMwRDtBQUNsQjtBQUNkO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyw2REFBWTtBQUM5QztBQUNBLFlBQVksNENBQUssZUFBZSwwREFBYyxHQUFHLG1HQUFtRztBQUNwSjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTLGdCQUFnQjtBQUN6QixRQUFRLDRDQUFLLGVBQWUsdURBQVcsR0FBRywrRkFBK0YsZUFBZSxFQUFFO0FBQzFKLENBQUM7QUFDYywwRkFBMkIsRUFBQztBQUMzQyx1RCIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzQ4LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn07XHJcbmltcG9ydCB7IFJlZmVyZW5jZUlucHV0LCBTZWxlY3RJbnB1dCB9IGZyb20gJ3JlYWN0LWFkbWluJztcclxuaW1wb3J0IHsgY29ubmVjdEZpZWxkIH0gZnJvbSAndW5pZm9ybXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vKipcclxuICogUmFTZWxlY3RSZWZlcmVuY2VJbnB1dEZpZWxkIGNhbiBiZSB1c2VkIGluIGFuIGF1dG9mb3JtIHRvXHJcbiAqL1xyXG52YXIgUmFTZWxlY3RSZWZlcmVuY2VJbnB1dEZpZWxkID0gY29ubmVjdEZpZWxkKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIF9iID0gX2EuYWxsb3dFbXB0eSwgYWxsb3dFbXB0eSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gX2EudmFsdWUsIHZhbHVlID0gX2MgPT09IHZvaWQgMCA/IG51bGwgOiBfYywgb25DaGFuZ2UgPSBfYS5vbkNoYW5nZSwgb3B0aW9uVGV4dCA9IF9hLm9wdGlvblRleHQsIG9wdGlvblZhbHVlID0gX2Eub3B0aW9uVmFsdWUsIGxhYmVsID0gX2EubGFiZWwsIHByb3BzID0gX19yZXN0KF9hLCBbXCJhbGxvd0VtcHR5XCIsIFwidmFsdWVcIiwgXCJvbkNoYW5nZVwiLCBcIm9wdGlvblRleHRcIiwgXCJvcHRpb25WYWx1ZVwiLCBcImxhYmVsXCJdKTtcclxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWZlcmVuY2VJbnB1dCwgeyBsYWJlbDogbGFiZWwsIHJlZmVyZW5jZTogcHJvcHMucmVmZXJlbmNlLCBwZXJQYWdlOiBwcm9wcy5wZXJQYWdlLCBhbGxvd0VtcHR5OiBhbGxvd0VtcHR5LCBtZXRhOiB7fSwgaW5wdXQ6IHtcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICB9LCBzb3VyY2U6IG51bGwgfSxcclxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdElucHV0LCB7IG9wdGlvblRleHQ6IG9wdGlvblRleHQgfHwgJ2lkJywgZW1wdHlWYWx1ZTogbnVsbCwgb3B0aW9uVmFsdWU6IG9wdGlvblZhbHVlIHx8ICdpZCcsIG9wdGlvbnM6IHsgdmFsdWU6IHZhbHVlIH0gfSkpKTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IFJhU2VsZWN0UmVmZXJlbmNlSW5wdXRGaWVsZDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UmFTZWxlY3RSZWZlcmVuY2VJbnB1dEZpZWxkLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=