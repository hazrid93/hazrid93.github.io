(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[46],{

/***/ "../packages/plugins/content/image/lib-es/Controls/ImageControls.js":
/*!**************************************************************************!*\
  !*** ../packages/plugins/content/image/lib-es/Controls/ImageControls.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "../node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "../node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "../node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _react_page_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-page/editor */ "../packages/editor/lib-es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






var ImageControls = function (props) {
    var _a, _b, _c;
    var t = Object(_react_page_editor__WEBPACK_IMPORTED_MODULE_4__["useUiTranslator"])().t;
    return (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", { style: { display: 'flex' } },
            props.imageUpload && (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_react_page_editor__WEBPACK_IMPORTED_MODULE_4__["ImageUpload"], { translations: props.translations, imageUpload: props.imageUpload, imageUploaded: function (image) {
                        return props.onChange({
                            src: image.url,
                        });
                    } }),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], { variant: "body1", style: { margin: '20px 16px 0 16px' } }, t(props.translations.or)))),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], { placeholder: t(props.translations.srcPlaceholder), label: t(props.imageUpload
                    ? props.translations.haveUrl
                    : props.translations.imageUrl), name: "src", 
                // style={{ flex: 1 }}
                value: (_a = props.data.src) !== null && _a !== void 0 ? _a : '', onChange: function (e) {
                    return props.onChange({
                        src: e.target.value,
                    });
                } })),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], { placeholder: t(props.translations.hrefPlaceholder), label: t(props.translations.hrefLabel), name: "href", style: { width: '400px' }, value: (_b = props.data.href) !== null && _b !== void 0 ? _b : '', onChange: function (e) {
                return props.onChange({
                    href: e.target.value,
                });
            } }),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_1__["default"], { control: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_0__["default"], { value: (_c = props.data.openInNewWindow) !== null && _c !== void 0 ? _c : false, onChange: function (e) {
                    return props.onChange({
                        openInNewWindow: e.target.checked,
                    });
                } }), label: t(props.translations.openNewWindow) })));
};
/* harmony default export */ __webpack_exports__["default"] = (ImageControls);
//# sourceMappingURL=ImageControls.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL3BhY2thZ2VzL3BsdWdpbnMvY29udGVudC9pbWFnZS9saWItZXMvQ29udHJvbHMvSW1hZ2VDb250cm9scy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNnQjtBQUNkO0FBQ0U7QUFDWTtBQUN4QztBQUMxQjtBQUNBO0FBQ0EsWUFBWSwwRUFBZTtBQUMzQixZQUFZLDRDQUFLLGVBQWUsNENBQUs7QUFDckMsUUFBUSw0Q0FBSyx1QkFBdUIsU0FBUyxrQkFBa0IsRUFBRTtBQUNqRSxrQ0FBa0MsNENBQUssZUFBZSw0Q0FBSztBQUMzRCxnQkFBZ0IsNENBQUssZUFBZSw4REFBVyxHQUFHO0FBQ2xEO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCLEVBQUU7QUFDdkIsZ0JBQWdCLDRDQUFLLGVBQWUsb0VBQVUsR0FBRywyQkFBMkIsNkJBQTZCLEVBQUU7QUFDM0csWUFBWSw0Q0FBSyxlQUFlLG1FQUFTLEdBQUc7QUFDNUM7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCLEVBQUU7QUFDbkIsUUFBUSw0Q0FBSztBQUNiLFFBQVEsNENBQUssZUFBZSxtRUFBUyxHQUFHLG1IQUFtSCxpQkFBaUI7QUFDNUs7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhLEVBQUU7QUFDZixRQUFRLDRDQUFLLGVBQWUsMEVBQWdCLEdBQUcsVUFBVSw0Q0FBSyxlQUFlLGtFQUFRLEdBQUc7QUFDeEY7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUIsRUFBRSwrQ0FBK0M7QUFDbEU7QUFDZSw0RUFBYSxFQUFDO0FBQzdCLHlDIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgSW1hZ2VVcGxvYWQsIHVzZVVpVHJhbnNsYXRvciB9IGZyb20gJ0ByZWFjdC1wYWdlL2VkaXRvcic7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbnZhciBJbWFnZUNvbnRyb2xzID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICB2YXIgX2EsIF9iLCBfYztcclxuICAgIHZhciB0ID0gdXNlVWlUcmFuc2xhdG9yKCkudDtcclxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcclxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnIH0gfSxcclxuICAgICAgICAgICAgcHJvcHMuaW1hZ2VVcGxvYWQgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEltYWdlVXBsb2FkLCB7IHRyYW5zbGF0aW9uczogcHJvcHMudHJhbnNsYXRpb25zLCBpbWFnZVVwbG9hZDogcHJvcHMuaW1hZ2VVcGxvYWQsIGltYWdlVXBsb2FkZWQ6IGZ1bmN0aW9uIChpbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMub25DaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBpbWFnZS51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIHsgdmFyaWFudDogXCJib2R5MVwiLCBzdHlsZTogeyBtYXJnaW46ICcyMHB4IDE2cHggMCAxNnB4JyB9IH0sIHQocHJvcHMudHJhbnNsYXRpb25zLm9yKSkpKSxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0RmllbGQsIHsgcGxhY2Vob2xkZXI6IHQocHJvcHMudHJhbnNsYXRpb25zLnNyY1BsYWNlaG9sZGVyKSwgbGFiZWw6IHQocHJvcHMuaW1hZ2VVcGxvYWRcclxuICAgICAgICAgICAgICAgICAgICA/IHByb3BzLnRyYW5zbGF0aW9ucy5oYXZlVXJsXHJcbiAgICAgICAgICAgICAgICAgICAgOiBwcm9wcy50cmFuc2xhdGlvbnMuaW1hZ2VVcmwpLCBuYW1lOiBcInNyY1wiLCBcclxuICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IGZsZXg6IDEgfX1cclxuICAgICAgICAgICAgICAgIHZhbHVlOiAoX2EgPSBwcm9wcy5kYXRhLnNyYykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5vbkNoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IH0pKSxcclxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0RmllbGQsIHsgcGxhY2Vob2xkZXI6IHQocHJvcHMudHJhbnNsYXRpb25zLmhyZWZQbGFjZWhvbGRlciksIGxhYmVsOiB0KHByb3BzLnRyYW5zbGF0aW9ucy5ocmVmTGFiZWwpLCBuYW1lOiBcImhyZWZcIiwgc3R5bGU6IHsgd2lkdGg6ICc0MDBweCcgfSwgdmFsdWU6IChfYiA9IHByb3BzLmRhdGEuaHJlZikgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJycsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLm9uQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgICAgICBocmVmOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IH0pLFxyXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUNvbnRyb2xMYWJlbCwgeyBjb250cm9sOiBSZWFjdC5jcmVhdGVFbGVtZW50KENoZWNrYm94LCB7IHZhbHVlOiAoX2MgPSBwcm9wcy5kYXRhLm9wZW5Jbk5ld1dpbmRvdykgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogZmFsc2UsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5vbkNoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Jbk5ld1dpbmRvdzogZS50YXJnZXQuY2hlY2tlZCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gfSksIGxhYmVsOiB0KHByb3BzLnRyYW5zbGF0aW9ucy5vcGVuTmV3V2luZG93KSB9KSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNvbnRyb2xzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JbWFnZUNvbnRyb2xzLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=