(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[45],{

/***/ "./components/ContactFormExample.tsx":
/*!*******************************************!*\
  !*** ./components/ContactFormExample.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\codes\\github\\react-builder-azad\\examples\\components\\ContactFormExample.tsx",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ContactFormExample = function ContactFormExample(_ref) {
  var _ref$fields = _ref.fields,
      fields = _ref$fields === void 0 ? [] : _ref$fields,
      recipientId = _ref.recipientId;
  return __jsx("form", {
    onSubmit: function onSubmit(e) {
      var formData = new FormData(e.currentTarget);
      var formProps = Object.fromEntries(formData);
      alert("would send contact form to ".concat(recipientId, ".\n\n").concat(Object.keys(formProps).map(function (key) {
        return "".concat(key, ": ").concat(formProps[key]);
      }).join('\n'), "\n        "));
      e.preventDefault();
    },
    style: {
      border: '1px solid black',
      padding: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, fields.map(function (field, index) {
    var _field$name;

    return __jsx("label", {
      key: (_field$name = field.name) !== null && _field$name !== void 0 ? _field$name : index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    }, field.label, " ", field.required ? '*' : '', __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }), __jsx("input", {
      type: field.type,
      required: field.required,
      name: field.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }
    }), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }));
  }), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, "Submit"));
};

_c = ContactFormExample;
/* harmony default export */ __webpack_exports__["default"] = (ContactFormExample);

var _c;

$RefreshReg$(_c, "ContactFormExample");

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0Rm9ybUV4YW1wbGUudHN4Il0sIm5hbWVzIjpbIkNvbnRhY3RGb3JtRXhhbXBsZSIsImZpZWxkcyIsInJlY2lwaWVudElkIiwiZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJjdXJyZW50VGFyZ2V0IiwiZm9ybVByb3BzIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJhbGVydCIsImtleXMiLCJtYXAiLCJrZXkiLCJqb2luIiwicHJldmVudERlZmF1bHQiLCJib3JkZXIiLCJwYWRkaW5nIiwiZmllbGQiLCJpbmRleCIsIm5hbWUiLCJsYWJlbCIsInJlcXVpcmVkIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFRQSxJQUFNQSxrQkFHSixHQUFHLFNBSENBLGtCQUdELE9BQWtDO0FBQUEseUJBQS9CQyxNQUErQjtBQUFBLE1BQS9CQSxNQUErQiw0QkFBdEIsRUFBc0I7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBQ3JDLFNBQ0U7QUFDRSxZQUFRLEVBQUUsa0JBQUNDLENBQUQsRUFBTztBQUNmLFVBQU1DLFFBQVEsR0FBRyxJQUFJQyxRQUFKLENBQWFGLENBQUMsQ0FBQ0csYUFBZixDQUFqQjtBQUNBLFVBQU1DLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxXQUFQLENBQW1CTCxRQUFuQixDQUFsQjtBQUNBTSxXQUFLLHNDQUErQlIsV0FBL0Isa0JBQ1hNLE1BQU0sQ0FBQ0csSUFBUCxDQUFZSixTQUFaLEVBQ0NLLEdBREQsQ0FDSyxVQUFDQyxHQUFEO0FBQUEseUJBQVlBLEdBQVosZUFBb0JOLFNBQVMsQ0FBQ00sR0FBRCxDQUE3QjtBQUFBLE9BREwsRUFFQ0MsSUFGRCxDQUVNLElBRk4sQ0FEVyxnQkFBTDtBQUtBWCxPQUFDLENBQUNZLGNBQUY7QUFDRCxLQVZIO0FBV0UsU0FBSyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxpQkFESDtBQUVMQyxhQUFPLEVBQUU7QUFGSixLQVhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FnQkdoQixNQUFNLENBQUNXLEdBQVAsQ0FBVyxVQUFDTSxLQUFELEVBQVFDLEtBQVI7QUFBQTs7QUFBQSxXQUNWO0FBQU8sU0FBRyxpQkFBRUQsS0FBSyxDQUFDRSxJQUFSLHFEQUFnQkQsS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRCxLQUFLLENBQUNHLEtBRFQsT0FDaUJILEtBQUssQ0FBQ0ksUUFBTixHQUFpQixHQUFqQixHQUF1QixFQUR4QyxFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixFQUdFO0FBQ0UsVUFBSSxFQUFFSixLQUFLLENBQUNLLElBRGQ7QUFFRSxjQUFRLEVBQUVMLEtBQUssQ0FBQ0ksUUFGbEI7QUFHRSxVQUFJLEVBQUVKLEtBQUssQ0FBQ0UsSUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUkYsQ0FEVTtBQUFBLEdBQVgsQ0FoQkgsRUE0QkU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBNUJGLENBREY7QUFnQ0QsQ0FwQ0Q7O0tBQU1wQixrQjtBQXNDU0EsaUZBQWYiLCJmaWxlIjoic3RhdGljL2NodW5rcy80NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCB0eXBlIEZpZWxkID0ge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcclxuICB0eXBlOiAndGV4dCcgfCAnbnVtYmVyJztcclxufTtcclxuXHJcbmNvbnN0IENvbnRhY3RGb3JtRXhhbXBsZTogUmVhY3QuRkM8e1xyXG4gIHJlY2lwaWVudElkOiBzdHJpbmc7XHJcbiAgZmllbGRzOiBGaWVsZFtdO1xyXG59PiA9ICh7IGZpZWxkcyA9IFtdLCByZWNpcGllbnRJZCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtXHJcbiAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGUuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgZm9ybVByb3BzID0gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKTtcclxuICAgICAgICBhbGVydChgd291bGQgc2VuZCBjb250YWN0IGZvcm0gdG8gJHtyZWNpcGllbnRJZH0uXFxuXHJcbiR7T2JqZWN0LmtleXMoZm9ybVByb3BzKVxyXG4gIC5tYXAoKGtleSkgPT4gYCR7a2V5fTogJHtmb3JtUHJvcHNba2V5XX1gKVxyXG4gIC5qb2luKCdcXG4nKX1cclxuICAgICAgICBgKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH19XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyxcclxuICAgICAgICBwYWRkaW5nOiAxMCxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2ZpZWxkcy5tYXAoKGZpZWxkLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxsYWJlbCBrZXk9e2ZpZWxkLm5hbWUgPz8gaW5kZXh9PlxyXG4gICAgICAgICAge2ZpZWxkLmxhYmVsfSB7ZmllbGQucmVxdWlyZWQgPyAnKicgOiAnJ31cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9e2ZpZWxkLnR5cGV9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkPXtmaWVsZC5yZXF1aXJlZH1cclxuICAgICAgICAgICAgbmFtZT17ZmllbGQubmFtZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICApKX1cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtRXhhbXBsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==