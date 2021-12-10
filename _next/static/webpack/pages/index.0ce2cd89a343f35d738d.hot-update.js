webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _react_page_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-page/editor */ "../packages/editor/lib-es/index.js");
/* harmony import */ var _sampleContents_demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sampleContents/demo */ "./sampleContents/demo.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plugins_cellPlugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plugins/cellPlugins */ "./plugins/cellPlugins.ts");
/* harmony import */ var _components_PageLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PageLayout */ "./components/PageLayout.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "C:\\codes\\github\\react-builder-azad\\examples\\pages\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var LANGUAGES = [{
  lang: 'en',
  label: 'English'
}, {
  lang: 'de',
  label: 'Deutsch'
}];
function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(_sampleContents_demo__WEBPACK_IMPORTED_MODULE_1__["demo"]),
      value = _useState[0],
      setValue = _useState[1];

  var reset = function reset() {
    return setValue(_sampleContents_demo__WEBPACK_IMPORTED_MODULE_1__["demo"]);
  };

  var _onChange = function onChange(data) {
    console.log(data);
    setValue(data);
  };

  return __jsx(_components_PageLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(_react_page_editor__WEBPACK_IMPORTED_MODULE_0__["default"], {
    cellPlugins: _plugins_cellPlugins__WEBPACK_IMPORTED_MODULE_3__["cellPlugins"],
    value: value,
    lang: LANGUAGES[0].lang,
    onChange: function onChange(data) {
      return _onChange(data);
    },
    languages: LANGUAGES,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onClick: reset,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, "Reset"));
}

_s(Home, "aR9cr9lABc2apof7CiHe4BZC+yU=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "../node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkxBTkdVQUdFUyIsImxhbmciLCJsYWJlbCIsIkhvbWUiLCJ1c2VTdGF0ZSIsImRlbW8iLCJ2YWx1ZSIsInNldFZhbHVlIiwicmVzZXQiLCJvbkNoYW5nZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2VsbFBsdWdpbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsU0FBK0IsR0FBRyxDQUN0QztBQUNFQyxNQUFJLEVBQUUsSUFEUjtBQUVFQyxPQUFLLEVBQUU7QUFGVCxDQURzQyxFQUt0QztBQUNFRCxNQUFJLEVBQUUsSUFEUjtBQUVFQyxPQUFLLEVBQUU7QUFGVCxDQUxzQyxDQUF4QztBQWFlLFNBQVNDLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDSEMsc0RBQVEsQ0FBUUMseURBQVIsQ0FETDtBQUFBLE1BQ3RCQyxLQURzQjtBQUFBLE1BQ2ZDLFFBRGU7O0FBRTdCLE1BQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsV0FBTUQsUUFBUSxDQUFDRix5REFBRCxDQUFkO0FBQUEsR0FBZDs7QUFFQSxNQUFJSSxTQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFELEVBQVU7QUFDdkJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0FILFlBQVEsQ0FBQ0csSUFBRCxDQUFSO0FBQ0QsR0FIRDs7QUFLQSxTQUNFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFDRSxlQUFXLEVBQUVHLGdFQURmO0FBRUUsU0FBSyxFQUFFUCxLQUZUO0FBR0UsUUFBSSxFQUFFTixTQUFTLENBQUMsQ0FBRCxDQUFULENBQWFDLElBSHJCO0FBSUUsWUFBUSxFQUFFLGtCQUFDUyxJQUFEO0FBQUEsYUFBVUQsU0FBUSxDQUFDQyxJQUFELENBQWxCO0FBQUEsS0FKWjtBQUtFLGFBQVMsRUFBRVYsU0FMYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFRRSxNQUFDLHdEQUFEO0FBQVEsV0FBTyxFQUFFUSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkYsQ0FERjtBQVlEOztHQXJCdUJMLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGNlMmNkODlhMzQzZjM1ZDczOGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgT3B0aW9ucywgVmFsdWUgfSBmcm9tICdAcmVhY3QtcGFnZS9lZGl0b3InO1xyXG5pbXBvcnQgRWRpdG9yIGZyb20gJ0ByZWFjdC1wYWdlL2VkaXRvcic7XHJcbmltcG9ydCB7IGRlbW8gfSBmcm9tICcuLi9zYW1wbGVDb250ZW50cy9kZW1vJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjZWxsUGx1Z2lucyB9IGZyb20gJy4uL3BsdWdpbnMvY2VsbFBsdWdpbnMnO1xyXG5pbXBvcnQgUGFnZUxheW91dCBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VMYXlvdXQnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmNvbnN0IExBTkdVQUdFUzogT3B0aW9uc1snbGFuZ3VhZ2VzJ10gPSBbXHJcbiAge1xyXG4gICAgbGFuZzogJ2VuJyxcclxuICAgIGxhYmVsOiAnRW5nbGlzaCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYW5nOiAnZGUnLFxyXG4gICAgbGFiZWw6ICdEZXV0c2NoJyxcclxuICB9LFxyXG5dO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGU8VmFsdWU+KGRlbW8pO1xyXG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4gc2V0VmFsdWUoZGVtbyk7XHJcblxyXG4gIGxldCBvbkNoYW5nZSA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHNldFZhbHVlKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlTGF5b3V0PlxyXG4gICAgICA8RWRpdG9yXHJcbiAgICAgICAgY2VsbFBsdWdpbnM9e2NlbGxQbHVnaW5zfVxyXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICBsYW5nPXtMQU5HVUFHRVNbMF0ubGFuZ31cclxuICAgICAgICBvbkNoYW5nZT17KGRhdGEpID0+IG9uQ2hhbmdlKGRhdGEpfVxyXG4gICAgICAgIGxhbmd1YWdlcz17TEFOR1VBR0VTfVxyXG4gICAgICAvPlxyXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e3Jlc2V0fT5SZXNldDwvQnV0dG9uPlxyXG4gICAgPC9QYWdlTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==