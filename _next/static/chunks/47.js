(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[47],{

/***/ "../packages/react-admin/lib-es/RaReactPageInput.js":
/*!**********************************************************!*\
  !*** ../packages/react-admin/lib-es/RaReactPageInput.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _react_page_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-page/editor */ "../packages/editor/lib-es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-admin */ "../node_modules/react-admin/esm/index.js");
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




var RaReactPageInput = function (_a) {
    var _b = _a.label, label = _b === void 0 ? 'Content' : _b, source = _a.source, style = _a.style, editorProps = __rest(_a, ["label", "source", "style"]);
    var _c = Object(react_admin__WEBPACK_IMPORTED_MODULE_3__["useInput"])({ source: source }).input, value = _c.value, onChange = _c.onChange;
    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_3__["Labeled"], { label: label, source: source, fullWidth: true },
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Paper"], { elevation: 5, style: __assign({ overflow: 'visible', padding: 16, marginRight: 64 }, style) },
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_page_editor__WEBPACK_IMPORTED_MODULE_1__["default"], __assign({ value: value, onChange: onChange }, editorProps))))));
};
/* harmony default export */ __webpack_exports__["default"] = (RaReactPageInput);
//# sourceMappingURL=RaReactPageInput.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL3BhY2thZ2VzL3JlYWN0LWFkbWluL2xpYi1lcy9SYVJlYWN0UGFnZUlucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxTQUFJLElBQUksU0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxjQUFjO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMEM7QUFDRjtBQUNkO0FBQ3NCO0FBQ2hEO0FBQ0E7QUFDQSxhQUFhLDREQUFRLEVBQUUsaUJBQWlCO0FBQ3hDLFlBQVksNENBQUssZUFBZSxtREFBTyxHQUFHLGdEQUFnRDtBQUMxRixRQUFRLDRDQUFLLGVBQWUsNENBQUs7QUFDakMsWUFBWSw0Q0FBSyxlQUFlLHVEQUFLLEdBQUcsZ0NBQWdDLG9EQUFvRCxVQUFVO0FBQ3RJLGdCQUFnQiw0Q0FBSyxlQUFlLDBEQUFNLFlBQVksbUNBQW1DO0FBQ3pGO0FBQ2UsK0VBQWdCLEVBQUM7QUFDaEMsNEMiLCJmaWxlIjoic3RhdGljL2NodW5rcy80Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn07XHJcbmltcG9ydCB7IFBhcGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgRWRpdG9yIGZyb20gJ0ByZWFjdC1wYWdlL2VkaXRvcic7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExhYmVsZWQsIHVzZUlucHV0IH0gZnJvbSAncmVhY3QtYWRtaW4nO1xyXG52YXIgUmFSZWFjdFBhZ2VJbnB1dCA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIF9iID0gX2EubGFiZWwsIGxhYmVsID0gX2IgPT09IHZvaWQgMCA/ICdDb250ZW50JyA6IF9iLCBzb3VyY2UgPSBfYS5zb3VyY2UsIHN0eWxlID0gX2Euc3R5bGUsIGVkaXRvclByb3BzID0gX19yZXN0KF9hLCBbXCJsYWJlbFwiLCBcInNvdXJjZVwiLCBcInN0eWxlXCJdKTtcclxuICAgIHZhciBfYyA9IHVzZUlucHV0KHsgc291cmNlOiBzb3VyY2UgfSkuaW5wdXQsIHZhbHVlID0gX2MudmFsdWUsIG9uQ2hhbmdlID0gX2Mub25DaGFuZ2U7XHJcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWxlZCwgeyBsYWJlbDogbGFiZWwsIHNvdXJjZTogc291cmNlLCBmdWxsV2lkdGg6IHRydWUgfSxcclxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFBhcGVyLCB7IGVsZXZhdGlvbjogNSwgc3R5bGU6IF9fYXNzaWduKHsgb3ZlcmZsb3c6ICd2aXNpYmxlJywgcGFkZGluZzogMTYsIG1hcmdpblJpZ2h0OiA2NCB9LCBzdHlsZSkgfSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRWRpdG9yLCBfX2Fzc2lnbih7IHZhbHVlOiB2YWx1ZSwgb25DaGFuZ2U6IG9uQ2hhbmdlIH0sIGVkaXRvclByb3BzKSkpKSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBSYVJlYWN0UGFnZUlucHV0O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1SYVJlYWN0UGFnZUlucHV0LmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=