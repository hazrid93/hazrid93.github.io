webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PageLayout.tsx":
/*!***********************************!*\
  !*** ./components/PageLayout.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_codes_github_react_builder_azad_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "../node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_codes_github_react_builder_azad_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "../node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Drawer */ "../node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Hidden */ "../node_modules/@material-ui/core/esm/Hidden/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "../node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "../node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Menu */ "../node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _react_page_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @react-page/editor */ "../packages/editor/lib-es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Navigation */ "./components/Navigation.tsx");



var _jsxFileName = "C:\\codes\\github\\react-builder-azad\\examples\\components\\PageLayout.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;


 //import GitHubForkRibbon from 'react-github-fork-ribbon';









var drawerWidth = 240;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["createStyles"])({
    root: {
      display: 'flex'
    },
    drawer: Object(C_codes_github_react_builder_azad_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.breakpoints.up('sm'), {
      width: drawerWidth,
      flexShrink: 0
    }),
    appBar: Object(C_codes_github_react_builder_azad_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.breakpoints.up('sm'), {
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      marginLeft: drawerWidth
    }),
    menuButton: Object(C_codes_github_react_builder_azad_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      marginRight: theme.spacing(2)
    }, theme.breakpoints.up('sm'), {
      display: 'none'
    }),
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      zIndex: 0
    },
    main: {
      flexGrow: 1,
      padding: theme.spacing(4),
      backgroundColor: '#eee'
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(4),
      backgroundColor: 'white',
      maxWidth: 1280,
      margin: 'auto'
    }
  });
});

var PageLayout = function PageLayout(_ref) {
  _s();

  var children = _ref.children;
  var classes = useStyles();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["useTheme"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(false),
      _React$useState2 = Object(C_codes_github_react_builder_azad_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      mobileOpen = _React$useState2[0],
      setMobileOpen = _React$useState2[1];

  var handleDrawerToggle = function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  };

  var drawer = __jsx(_Navigation__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 18
    }
  });

  return __jsx(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    position: "fixed",
    className: classes.appBar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "inherit",
    "aria-label": "open drawer",
    edge: "start",
    onClick: handleDrawerToggle,
    className: classes.menuButton,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h6",
    noWrap: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, "NFT Creation Page ", _react_page_editor__WEBPACK_IMPORTED_MODULE_10__["VERSION"]))), __jsx("nav", {
    className: classes.drawer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4__["default"], {
    smUp: true,
    implementation: "css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "temporary",
    anchor: theme.direction === 'rtl' ? 'right' : 'left',
    open: mobileOpen,
    onClose: handleDrawerToggle,
    classes: {
      paper: classes.drawerPaper
    },
    ModalProps: {
      keepMounted: true // Better open performance on mobile.

    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, drawer)), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xsDown: true,
    implementation: "css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    classes: {
      paper: classes.drawerPaper
    },
    variant: "permanent",
    open: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, drawer))), __jsx("main", {
    className: classes.main,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.toolbar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: classes.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, children))));
};

_s(PageLayout, "dEXeUMzZ0C+6wksn7kTLUsBy47o=", false, function () {
  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["useTheme"]];
});

_c = PageLayout;
/* harmony default export */ __webpack_exports__["default"] = (PageLayout);

var _c;

$RefreshReg$(_c, "PageLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlTGF5b3V0LnRzeCJdLCJuYW1lcyI6WyJkcmF3ZXJXaWR0aCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiZHJhd2VyIiwiYnJlYWtwb2ludHMiLCJ1cCIsIndpZHRoIiwiZmxleFNocmluayIsImFwcEJhciIsIm1hcmdpbkxlZnQiLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwidG9vbGJhciIsIm1peGlucyIsImRyYXdlclBhcGVyIiwiekluZGV4IiwibWFpbiIsImZsZXhHcm93IiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsImNvbnRlbnQiLCJtYXhXaWR0aCIsIm1hcmdpbiIsIlBhZ2VMYXlvdXQiLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJ1c2VUaGVtZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJtb2JpbGVPcGVuIiwic2V0TW9iaWxlT3BlbiIsImhhbmRsZURyYXdlclRvZ2dsZSIsIlZFUlNJT04iLCJkaXJlY3Rpb24iLCJwYXBlciIsImtlZXBNb3VudGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUcsR0FBcEI7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUU7QUFETCxLQURLO0FBSVhDLFVBQU0sRUFBRSw4SkFDTEosS0FBSyxDQUFDSyxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQURHLEVBQzBCO0FBQzVCQyxXQUFLLEVBQUVWLFdBRHFCO0FBRTVCVyxnQkFBVSxFQUFFO0FB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LENBREYsQ0FERjtBQXdERCxDQW5FRDs7R0FBTUQsVTtVQUNZM0IsUyxFQUNGOEIsaUU7OztLQUZWSCxVO0FBb0VTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNjcxNjAyYjM4MWZhODk4NzY4Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RyYXdlcic7XHJcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcclxuLy9pbXBvcnQgR2l0SHViRm9ya1JpYmJvbiBmcm9tICdyZWFjdC1naXRodWItZm9yay1yaWJib24nO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IHR5cGUgeyBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XHJcbmltcG9ydCB7IFZFUlNJT04gfSBmcm9tICdAcmVhY3QtcGFnZS9lZGl0b3InO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL05hdmlnYXRpb24nO1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgfSxcclxuICAgIGRyYXdlcjoge1xyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYXBwQmFyOiB7XHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgICAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtZW51QnV0dG9uOiB7XHJcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIC8vIG5lY2Vzc2FyeSBmb3IgY29udGVudCB0byBiZSBiZWxvdyBhcHAgYmFyXHJcbiAgICB0b29sYmFyOiB0aGVtZS5taXhpbnMudG9vbGJhcixcclxuICAgIGRyYXdlclBhcGVyOiB7XHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgekluZGV4OiAwLFxyXG4gICAgfSxcclxuICAgIG1haW46IHtcclxuICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlZWUnLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6IHtcclxuICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgbWF4V2lkdGg6IDEyODAsXHJcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxyXG4gICAgfSxcclxuICB9KVxyXG4pO1xyXG5cclxuY29uc3QgUGFnZUxheW91dDogUmVhY3QuRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBbbW9iaWxlT3Blbiwgc2V0TW9iaWxlT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYXdlclRvZ2dsZSA9ICgpID0+IHtcclxuICAgIHNldE1vYmlsZU9wZW4oIW1vYmlsZU9wZW4pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRyYXdlciA9IDxOYXZpZ2F0aW9uIC8+O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImZpeGVkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhcn0+XHJcbiAgICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJUb2dnbGV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVCdXR0b259XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBub1dyYXA+XHJcbiAgICAgICAgICAgICAgTkZUIENyZWF0aW9uIFBhZ2Uge1ZFUlNJT059XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJ9PlxyXG4gICAgICAgICAgey8qIFRoZSBpbXBsZW1lbnRhdGlvbiBjYW4gYmUgc3dhcHBlZCB3aXRoIGpzIHRvIGF2b2lkIFNFTyBkdXBsaWNhdGlvbiBvZiBsaW5rcy4gKi99XHJcbiAgICAgICAgICA8SGlkZGVuIHNtVXAgaW1wbGVtZW50YXRpb249XCJjc3NcIj5cclxuICAgICAgICAgICAgPERyYXdlclxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZW1wb3JhcnlcIlxyXG4gICAgICAgICAgICAgIGFuY2hvcj17dGhlbWUuZGlyZWN0aW9uID09PSAncnRsJyA/ICdyaWdodCcgOiAnbGVmdCd9XHJcbiAgICAgICAgICAgICAgb3Blbj17bW9iaWxlT3Blbn1cclxuICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVEcmF3ZXJUb2dnbGV9XHJcbiAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgcGFwZXI6IGNsYXNzZXMuZHJhd2VyUGFwZXIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBNb2RhbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICBrZWVwTW91bnRlZDogdHJ1ZSwgLy8gQmV0dGVyIG9wZW4gcGVyZm9ybWFuY2Ugb24gbW9iaWxlLlxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7ZHJhd2VyfVxyXG4gICAgICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgPEhpZGRlbiB4c0Rvd24gaW1wbGVtZW50YXRpb249XCJjc3NcIj5cclxuICAgICAgICAgICAgPERyYXdlclxyXG4gICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgIHBhcGVyOiBjbGFzc2VzLmRyYXdlclBhcGVyLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInBlcm1hbmVudFwiXHJcbiAgICAgICAgICAgICAgb3BlblxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2RyYXdlcn1cclxuICAgICAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQYWdlTGF5b3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9