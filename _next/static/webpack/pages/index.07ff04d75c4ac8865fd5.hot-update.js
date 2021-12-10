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
/* harmony import */ var react_github_fork_ribbon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-github-fork-ribbon */ "../node_modules/react-github-fork-ribbon/component/index.js");
/* harmony import */ var react_github_fork_ribbon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_github_fork_ribbon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "../node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "../node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Menu */ "../node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _react_page_editor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @react-page/editor */ "../packages/editor/lib-es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Navigation */ "./components/Navigation.tsx");



var _jsxFileName = "C:\\codes\\github\\react-builder-azad\\examples\\components\\PageLayout.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement;












var drawerWidth = 240;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["createStyles"])({
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
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["useTheme"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_12___default.a.useState(false),
      _React$useState2 = Object(C_codes_github_react_builder_azad_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      mobileOpen = _React$useState2[0],
      setMobileOpen = _React$useState2[1];

  var handleDrawerToggle = function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  };

  var drawer = __jsx(_Navigation__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 18
    }
  });

  return __jsx(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, __jsx(react_github_fork_ribbon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "//github.com/react-page/react-page",
    target: "_blank",
    position: "right",
    color: "black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, "Fork me on GitHub"), __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    position: "fixed",
    className: classes.appBar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "inherit",
    "aria-label": "open drawer",
    edge: "start",
    onClick: handleDrawerToggle,
    className: classes.menuButton,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h6",
    noWrap: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, "NFT Creation Page ", _react_page_editor__WEBPACK_IMPORTED_MODULE_11__["VERSION"]))), __jsx("nav", {
    className: classes.drawer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4__["default"], {
    smUp: true,
    implementation: "css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
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
      lineNumber: 102,
      columnNumber: 13
    }
  }, drawer)), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xsDown: true,
    implementation: "css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
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
      lineNumber: 118,
      columnNumber: 13
    }
  }, drawer))), __jsx("main", {
    className: classes.main,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.toolbar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: classes.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, children))));
};

_s(PageLayout, "dEXeUMzZ0C+6wksn7kTLUsBy47o=", false, function () {
  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["useTheme"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlTGF5b3V0LnRzeCJdLCJuYW1lcyI6WyJkcmF3ZXJXaWR0aCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiZHJhd2VyIiwiYnJlYWtwb2ludHMiLCJ1cCIsIndpZHRoIiwiZmxleFNocmluayIsImFwcEJhciIsIm1hcmdpbkxlZnQiLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwidG9vbGJhciIsIm1peGlucyIsImRyYXdlclBhcGVyIiwiekluZGV4IiwibWFpbiIsImZsZXhHcm93IiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsImNvbnRlbnQiLCJtYXhXaWR0aCIsIm1hcmdpbiIsIlBhZ2VMYXlvdXQiLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJ1c2VUaGVtZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJtb2JpbGVPcGVuIiwic2V0TW9iaWxlT3BlbiIsImhhbmRsZURyYXdlclRvZ2dsZSIsIlZFUlNJT04iLCJkaXJlY3Rpb24iLCJwYXBlciIsImtlZXBNb3VudGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUcsR0FBcEI7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUU7QUFETCxLQURLO0FBSVhDLFVBQU0sRUFBRSw4SkFDTEosS0FBSyxDQUFDSyxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQURHLEVBQzBCO0FBQzVCQyxXQUFLLEVBQUVWLFdBRHFCO0FBRTVCVyxnQkFBVSxF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YixPQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBRWEsT0FBTyxDQUFDTCxPQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtDSSxRQUFsQyxDQUZGLENBL0NGLENBVEYsQ0FERjtBQWdFRCxDQTNFRDs7R0FBTUQsVTtVQUNZM0IsUyxFQUNGOEIsaUU7OztLQUZWSCxVO0FBNEVTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wN2ZmMDRkNzVjNGFjODg2NWZkNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RyYXdlcic7XHJcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcclxuaW1wb3J0IEdpdEh1YkZvcmtSaWJib24gZnJvbSAncmVhY3QtZ2l0aHViLWZvcmstcmliYm9uJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCB0eXBlIHsgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xyXG5pbXBvcnQgeyBWRVJTSU9OIH0gZnJvbSAnQHJlYWN0LXBhZ2UvZWRpdG9yJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9OYXZpZ2F0aW9uJztcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIH0sXHJcbiAgICBkcmF3ZXI6IHtcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGFwcEJhcjoge1xyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbWVudUJ1dHRvbjoge1xyXG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAvLyBuZWNlc3NhcnkgZm9yIGNvbnRlbnQgdG8gYmUgYmVsb3cgYXBwIGJhclxyXG4gICAgdG9vbGJhcjogdGhlbWUubWl4aW5zLnRvb2xiYXIsXHJcbiAgICBkcmF3ZXJQYXBlcjoge1xyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHpJbmRleDogMCxcclxuICAgIH0sXHJcbiAgICBtYWluOiB7XHJcbiAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50OiB7XHJcbiAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIG1heFdpZHRoOiAxMjgwLFxyXG4gICAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgIH0sXHJcbiAgfSlcclxuKTtcclxuXHJcbmNvbnN0IFBhZ2VMYXlvdXQ6IFJlYWN0LkZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgW21vYmlsZU9wZW4sIHNldE1vYmlsZU9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmF3ZXJUb2dnbGUgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2JpbGVPcGVuKCFtb2JpbGVPcGVuKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkcmF3ZXIgPSA8TmF2aWdhdGlvbiAvPjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxHaXRIdWJGb3JrUmliYm9uXHJcbiAgICAgICAgaHJlZj1cIi8vZ2l0aHViLmNvbS9yZWFjdC1wYWdlL3JlYWN0LXBhZ2VcIlxyXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgcG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgY29sb3I9XCJibGFja1wiXHJcbiAgICAgID5cclxuICAgICAgICBGb3JrIG1lIG9uIEdpdEh1YlxyXG4gICAgICA8L0dpdEh1YkZvcmtSaWJib24+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJmaXhlZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBCYXJ9PlxyXG4gICAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRHJhd2VyVG9nZ2xlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgbm9XcmFwPlxyXG4gICAgICAgICAgICAgIE5GVCBDcmVhdGlvbiBQYWdlIHtWRVJTSU9OfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyfT5cclxuICAgICAgICAgIHsvKiBUaGUgaW1wbGVtZW50YXRpb24gY2FuIGJlIHN3YXBwZWQgd2l0aCBqcyB0byBhdm9pZCBTRU8gZHVwbGljYXRpb24gb2YgbGlua3MuICovfVxyXG4gICAgICAgICAgPEhpZGRlbiBzbVVwIGltcGxlbWVudGF0aW9uPVwiY3NzXCI+XHJcbiAgICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwidGVtcG9yYXJ5XCJcclxuICAgICAgICAgICAgICBhbmNob3I9e3RoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAncmlnaHQnIDogJ2xlZnQnfVxyXG4gICAgICAgICAgICAgIG9wZW49e21vYmlsZU9wZW59XHJcbiAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlRHJhd2VyVG9nZ2xlfVxyXG4gICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgIHBhcGVyOiBjbGFzc2VzLmRyYXdlclBhcGVyLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgTW9kYWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAga2VlcE1vdW50ZWQ6IHRydWUsIC8vIEJldHRlciBvcGVuIHBlcmZvcm1hbmNlIG9uIG1vYmlsZS5cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2RyYXdlcn1cclxuICAgICAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgIDxIaWRkZW4geHNEb3duIGltcGxlbWVudGF0aW9uPVwiY3NzXCI+XHJcbiAgICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICBwYXBlcjogY2xhc3Nlcy5kcmF3ZXJQYXBlcixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIlxyXG4gICAgICAgICAgICAgIG9wZW5cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtkcmF3ZXJ9XHJcbiAgICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0gLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUGFnZUxheW91dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==