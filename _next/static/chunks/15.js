(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[15],{

/***/ "../node_modules/@material-ui/icons/Done.js":
/*!**************************************************!*\
  !*** ../node_modules/@material-ui/icons/Done.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "../node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
}), 'Done');

exports.default = _default;

/***/ }),

/***/ "../packages/plugins/content/slate/lib-es/components/ConditionalWrapper.js":
/*!*********************************************************************************!*\
  !*** ../packages/plugins/content/slate/lib-es/components/ConditionalWrapper.js ***!
  \*********************************************************************************/
/*! exports provided: ConditionalWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionalWrapper", function() { return ConditionalWrapper; });
var ConditionalWrapper = function (_a) {
    var condition = _a.condition, wrapper = _a.wrapper, children = _a.children;
    return condition ? wrapper(children) : children;
};
//# sourceMappingURL=ConditionalWrapper.js.map

/***/ }),

/***/ "../packages/plugins/content/slate/lib-es/components/HoverButtons.js":
/*!***************************************************************************!*\
  !*** ../packages/plugins/content/slate/lib-es/components/HoverButtons.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-portal */ "../node_modules/react-portal/es/index.js");
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate-react */ "../node_modules/slate-react/dist/index.es.js");
/* harmony import */ var _hooks_useTextIsSelected__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useTextIsSelected */ "../packages/plugins/content/slate/lib-es/hooks/useTextIsSelected.js");
/* harmony import */ var _PluginButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PluginButton */ "../packages/plugins/content/slate/lib-es/components/PluginButton.js");





var HoverButtons = function (_a) {
    var plugins = _a.plugins, translations = _a.translations;
    var showHoverToolbar = Object(_hooks_useTextIsSelected__WEBPACK_IMPORTED_MODULE_3__["default"])();
    var toolbarRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_2__["useSlate"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var toolbar = toolbarRef.current;
        if (!showHoverToolbar) {
            return;
        }
        var s = window.getSelection();
        try {
            var oRange = s.getRangeAt(0); // get the text range
            var oRect = oRange.getBoundingClientRect();
            if (oRect) {
                var left = oRect.left, top_1 = oRect.top, width = oRect.width;
                toolbar.style.opacity = '1';
                toolbar.style.top = top_1 + window.scrollY - toolbar.offsetHeight + "px";
                toolbar.style.left = left + window.scrollX - toolbar.offsetWidth / 2 + width / 2 + "px";
            }
        }
        catch (e) {
            // ignore
        }
    }, [editor, showHoverToolbar]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_portal__WEBPACK_IMPORTED_MODULE_1__["Portal"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'react-page-plugins-content-slate-inline-toolbar ' +
                (showHoverToolbar
                    ? ''
                    : 'react-page-plugins-content-slate-inline-toolbar--hidden'), style: { padding: 0 }, ref: toolbarRef }, plugins &&
            plugins.map(function (plugin, i) {
                return plugin.addHoverButton ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PluginButton__WEBPACK_IMPORTED_MODULE_4__["default"], { translations: translations, key: i, plugin: plugin })) : null;
            }))));
};
/* harmony default export */ __webpack_exports__["default"] = (HoverButtons);
//# sourceMappingURL=HoverButtons.js.map

/***/ }),

/***/ "../packages/plugins/content/slate/lib-es/components/PluginButton.js":
/*!***************************************************************************!*\
  !*** ../packages/plugins/content/slate/lib-es/components/PluginButton.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ "../node_modules/slate/dist/index.es.js");
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate-react */ "../node_modules/slate-react/dist/index.es.js");
/* harmony import */ var _hooks_useAddPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useAddPlugin */ "../packages/plugins/content/slate/lib-es/hooks/useAddPlugin.js");
/* harmony import */ var _hooks_useCurrentNodeDataWithPlugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useCurrentNodeDataWithPlugin */ "../packages/plugins/content/slate/lib-es/hooks/useCurrentNodeDataWithPlugin.js");
/* harmony import */ var _hooks_usePluginIsActive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/usePluginIsActive */ "../packages/plugins/content/slate/lib-es/hooks/usePluginIsActive.js");
/* harmony import */ var _hooks_usePluginIsDisabled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/usePluginIsDisabled */ "../packages/plugins/content/slate/lib-es/hooks/usePluginIsDisabled.js");
/* harmony import */ var _hooks_useRemovePlugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useRemovePlugin */ "../packages/plugins/content/slate/lib-es/hooks/useRemovePlugin.js");
/* harmony import */ var _pluginFactories_components_UniformsControls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pluginFactories/components/UniformsControls */ "../packages/plugins/content/slate/lib-es/pluginFactories/components/UniformsControls.js");
/* harmony import */ var _DialogVisibleProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DialogVisibleProvider */ "../packages/plugins/content/slate/lib-es/components/DialogVisibleProvider.js");
/* harmony import */ var _ToolbarButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ToolbarButton */ "../packages/plugins/content/slate/lib-es/components/ToolbarButton.js");
/* harmony import */ var _react_page_editor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @react-page/editor */ "../packages/editor/lib-es/index.js");
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












function PluginButton(props) {
    var _a, _b, _c, _d, _e;
    var plugin = props.plugin;
    var t = Object(_react_page_editor__WEBPACK_IMPORTED_MODULE_11__["useUiTranslator"])().t;
    var hasControls = Boolean(plugin.controls);
    var _f = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), 2), showControls = _f[0], setShowControls = _f[1];
    var storedPropsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var shouldInsertWithText = plugin.pluginType === 'component' &&
        plugin.object === 'inline' &&
        (!((_a = storedPropsRef === null || storedPropsRef === void 0 ? void 0 : storedPropsRef.current) === null || _a === void 0 ? void 0 : _a.selection) ||
            slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isCollapsed((_b = storedPropsRef === null || storedPropsRef === void 0 ? void 0 : storedPropsRef.current) === null || _b === void 0 ? void 0 : _b.selection)) &&
        !((_c = storedPropsRef === null || storedPropsRef === void 0 ? void 0 : storedPropsRef.current) === null || _c === void 0 ? void 0 : _c.isActive);
    var close = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () { return setShowControls(false); }, []);
    var isActive = Object(_hooks_usePluginIsActive__WEBPACK_IMPORTED_MODULE_5__["default"])(plugin);
    var add = Object(_hooks_useAddPlugin__WEBPACK_IMPORTED_MODULE_3__["default"])(plugin);
    var remove = Object(_hooks_useRemovePlugin__WEBPACK_IMPORTED_MODULE_7__["default"])(plugin);
    var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_2__["useSlate"])();
    var setIsVisible = Object(_DialogVisibleProvider__WEBPACK_IMPORTED_MODULE_9__["useSetDialogIsVisible"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () { return setIsVisible(showControls); }, [showControls, setIsVisible]);
    var onClick = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(function (e) {
        e.preventDefault();
        if (hasControls || shouldInsertWithText) {
            if (!showControls) {
                // store props
                storedPropsRef.current = {
                    selection: editor.selection,
                    isActive: isActive,
                    data: Object(_hooks_useCurrentNodeDataWithPlugin__WEBPACK_IMPORTED_MODULE_4__["getCurrentNodeDataWithPlugin"])(editor, plugin),
                };
            }
            setShowControls(!showControls);
        }
        else {
            if (isActive) {
                remove();
            }
            else {
                add();
            }
        }
    }, [isActive, hasControls, showControls, shouldInsertWithText]);
    var controls = plugin.controls;
    var Controls = controls
        ? controls.type === 'autoform'
            ? function (props) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pluginFactories_components_UniformsControls__WEBPACK_IMPORTED_MODULE_8__["default"], __assign({}, props, { schema: controls === null || controls === void 0 ? void 0 : controls.schema })); }
            : controls.Component
        : _pluginFactories_components_UniformsControls__WEBPACK_IMPORTED_MODULE_8__["default"];
    var isDisabled = Object(_hooks_usePluginIsDisabled__WEBPACK_IMPORTED_MODULE_6__["default"])(plugin);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToolbarButton__WEBPACK_IMPORTED_MODULE_10__["default"], { onClick: onClick, disabled: isDisabled, isActive: isActive, icon: plugin.icon ||
                (plugin.pluginType === 'component' && plugin.deserialize.tagName), toolTip: t(plugin.label) }),
        hasControls || shouldInsertWithText ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Controls, __assign({ pluginConfig: plugin, close: close, open: showControls, add: function (p) {
                var _a;
                if ((_a = storedPropsRef === null || storedPropsRef === void 0 ? void 0 : storedPropsRef.current) === null || _a === void 0 ? void 0 : _a.selection) {
                    // restore selection before adding
                    slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].select(editor, storedPropsRef === null || storedPropsRef === void 0 ? void 0 : storedPropsRef.current.selection);
                }
                add(p);
            }, remove: function () {
                var _a;
                if ((_a = storedPropsRef === null || storedPropsRef === void 0 ? void 0 : storedPropsRef.current) === null || _a === void 0 ? void 0 : _a.selection) {
                    // restore selection before removing
                    slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].select(editor, storedPropsRef === null || storedPropsRef === void 0 ? void 0 : storedPropsRef.current.selection);
                }
                remove();
            }, isActive: (_d = storedPropsRef === null || storedPropsRef === void 0 ? void 0 : storedPropsRef.current) === null || _d === void 0 ? void 0 : _d.isActive, shouldInsertWithText: shouldInsertWithText, data: (_e = storedPropsRef === null || storedPropsRef === void 0 ? void 0 : storedPropsRef.current) === null || _e === void 0 ? void 0 : _e.data }, props))) : null));
}
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(PluginButton));
//# sourceMappingURL=PluginButton.js.map

/***/ }),

/***/ "../packages/plugins/content/slate/lib-es/components/ToolbarButton.js":
/*!****************************************************************************!*\
  !*** ../packages/plugins/content/slate/lib-es/components/ToolbarButton.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_page_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-page/editor */ "../packages/editor/lib-es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ConditionalWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConditionalWrapper */ "../packages/plugins/content/slate/lib-es/components/ConditionalWrapper.js");



var IconButton = Object(_react_page_editor__WEBPACK_IMPORTED_MODULE_0__["lazyLoad"])(function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @material-ui/core/IconButton */ "../node_modules/@material-ui/core/esm/IconButton/index.js")); });
var Tooltip = Object(_react_page_editor__WEBPACK_IMPORTED_MODULE_0__["lazyLoad"])(function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @material-ui/core/Tooltip */ "../node_modules/@material-ui/core/esm/Tooltip/index.js")); });
var ToolbarButton = function (_a) {
    var icon = _a.icon, isActive = _a.isActive, onClick = _a.onClick, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.toolTip, toolTip = _c === void 0 ? '' : _c;
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ConditionalWrapper__WEBPACK_IMPORTED_MODULE_2__["ConditionalWrapper"], { condition: !disabled, wrapper: function (children) { return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tooltip, { title: toolTip }, children); } },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconButton, { onMouseDown: onClick, style: isActive
                ? { color: 'rgb(0, 188, 212)' }
                : disabled
                    ? { color: 'gray' }
                    : { color: 'white' }, disabled: disabled }, icon)));
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(ToolbarButton));
//# sourceMappingURL=ToolbarButton.js.map

/***/ }),

/***/ "../packages/plugins/content/slate/lib-es/hooks/useCurrentNodeDataWithPlugin.js":
/*!**************************************************************************************!*\
  !*** ../packages/plugins/content/slate/lib-es/hooks/useCurrentNodeDataWithPlugin.js ***!
  \**************************************************************************************/
/*! exports provided: getCurrentNodeDataWithPlugin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentNodeDataWithPlugin", function() { return getCurrentNodeDataWithPlugin; });
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slate-react */ "../node_modules/slate-react/dist/index.es.js");
/* harmony import */ var _useCurrentNodeWithPlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCurrentNodeWithPlugin */ "../packages/plugins/content/slate/lib-es/hooks/useCurrentNodeWithPlugin.js");


var getCurrentNodeDataWithPlugin = function (editor, plugin) {
    var currentNodeEntry = Object(_useCurrentNodeWithPlugin__WEBPACK_IMPORTED_MODULE_1__["getCurrentNodeWithPlugin"])(editor, plugin);
    if (currentNodeEntry) {
        var currentNode = currentNodeEntry[0];
        if (plugin.pluginType === 'component' && plugin.object === 'mark') {
            return currentNode[plugin.type];
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var data = currentNode.data;
        return data;
    }
    else if (plugin.getInitialData) {
        return plugin.getInitialData();
    }
    else {
        return {};
    }
};
/* harmony default export */ __webpack_exports__["default"] = (function (plugin) {
    var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_0__["useSlate"])();
    return getCurrentNodeDataWithPlugin(editor, plugin);
});
//# sourceMappingURL=useCurrentNodeDataWithPlugin.js.map

/***/ }),

/***/ "../packages/plugins/content/slate/lib-es/hooks/usePluginIsActive.js":
/*!***************************************************************************!*\
  !*** ../packages/plugins/content/slate/lib-es/hooks/usePluginIsActive.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useCurrentNodeWithPlugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useCurrentNodeWithPlugin */ "../packages/plugins/content/slate/lib-es/hooks/useCurrentNodeWithPlugin.js");

/* harmony default export */ __webpack_exports__["default"] = (function (plugin) {
    var nodeEntry = Object(_useCurrentNodeWithPlugin__WEBPACK_IMPORTED_MODULE_0__["default"])(plugin);
    return Boolean(nodeEntry);
});
//# sourceMappingURL=usePluginIsActive.js.map

/***/ }),

/***/ "../packages/plugins/content/slate/lib-es/hooks/usePluginIsDisabled.js":
/*!*****************************************************************************!*\
  !*** ../packages/plugins/content/slate/lib-es/hooks/usePluginIsDisabled.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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


/* harmony default export */ __webpack_exports__["default"] = (function (plugin) {
    try {
        var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_1__["useSlate"])();
        var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true), 2), disabled = _a[0], setDisabled_1 = _a[1];
        if (!editor) {
            return true;
        }
        if (plugin.isDisabled) {
            plugin.isDisabled(editor).then(function (d) { return setDisabled_1(d); });
            return disabled;
        }
        else {
            return false;
        }
    }
    catch (e) {
        // slate sometimes throws when dom node cant be found in undo
        return false;
    }
});
//# sourceMappingURL=usePluginIsDisabled.js.map

/***/ }),

/***/ "../packages/plugins/content/slate/lib-es/hooks/useTextIsSelected.js":
/*!***************************************************************************!*\
  !*** ../packages/plugins/content/slate/lib-es/hooks/useTextIsSelected.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slate */ "../node_modules/slate/dist/index.es.js");
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate-react */ "../node_modules/slate-react/dist/index.es.js");


var useTextIsSelected = function () {
    var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_1__["useSlate"])();
    try {
        return (Boolean(editor.selection) &&
            slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].string(editor, editor.selection) !== '');
    }
    catch (e) {
        // can in some cases throw currently
        return false;
    }
};
/* harmony default export */ __webpack_exports__["default"] = (useTextIsSelected);
//# sourceMappingURL=useTextIsSelected.js.map

/***/ }),

/***/ "../packages/plugins/content/slate/lib-es/pluginFactories/components/UniformsControls.js":
/*!***********************************************************************************************!*\
  !*** ../packages/plugins/content/slate/lib-es/pluginFactories/components/UniformsControls.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "../node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "../node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Delete */ "../node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Done */ "../node_modules/@material-ui/icons/Done.js");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _react_page_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-page/editor */ "../packages/editor/lib-es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
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







function Controls(props) {
    var uniformsSchema = props.schema
        ? Object(_react_page_editor__WEBPACK_IMPORTED_MODULE_5__["makeUniformsSchema"])(props.schema)
        : null;
    var hasSchema = Boolean(props.schema);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var formRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])();
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(null), 2), text = _a[0], setText = _a[1];
    var onCancel = function () {
        props.close();
    };
    var saveAndCloseWithData = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (data) {
        props.close();
        if (props.shouldInsertWithText) {
            props.add({ text: text, data: data });
        }
        else {
            props.add({ data: data });
        }
    }, [props.shouldInsertWithText, text]);
    var submitForm = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
        if (formRef.current) {
            formRef.current.submit();
        }
    }, [formRef.current]);
    var onOkClick = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
        if (uniformsSchema) {
            submitForm();
        }
        else {
            saveAndCloseWithData({});
        }
    }, [submitForm, saveAndCloseWithData, hasSchema]);
    var onRemove = function () {
        props.remove();
        props.close();
    };
    return (react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Dialog"], { disableEnforceFocus: true, PaperProps: {
            style: { minWidth: 300 },
        }, open: props.open },
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["DialogContent"], null,
            !props.shouldInsertWithText ? null : (react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], { autoFocus: true, placeholder: 'Text', onChange: function (e) { return setText(e.target.value); }, value: text }))),
            hasSchema ? (react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_react_page_editor__WEBPACK_IMPORTED_MODULE_5__["AutoForm"], { ref: formRef, model: props.data, schema: uniformsSchema, onSubmit: saveAndCloseWithData },
                react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_react_page_editor__WEBPACK_IMPORTED_MODULE_5__["AutoFields"], null))) : null),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["DialogActions"], null,
            react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], { variant: "text", onClick: onCancel, style: { marginRight: 'auto' } }, props.cancelLabel || 'Cancel'),
            props.isActive ? (react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], { variant: "contained", color: "secondary", onClick: onRemove },
                props.removeLabel || 'Remove',
                react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default.a, { style: { marginLeft: 10 } }))) : null,
            react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], { variant: "contained", color: "primary", onClick: onOkClick },
                props.submitLabel || 'Ok',
                react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_4___default.a, { style: { marginLeft: 10 } })))));
}
/* harmony default export */ __webpack_exports__["default"] = (Controls);
//# sourceMappingURL=UniformsControls.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvaWNvbnMvRG9uZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL3BhY2thZ2VzL3BsdWdpbnMvY29udGVudC9zbGF0ZS9saWItZXMvY29tcG9uZW50cy9Db25kaXRpb25hbFdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9wYWNrYWdlcy9wbHVnaW5zL2NvbnRlbnQvc2xhdGUvbGliLWVzL2NvbXBvbmVudHMvSG92ZXJCdXR0b25zLmpzIiwid2VicGFjazovL19OX0UvLi4vcGFja2FnZXMvcGx1Z2lucy9jb250ZW50L3NsYXRlL2xpYi1lcy9jb21wb25lbnRzL1BsdWdpbkJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL3BhY2thZ2VzL3BsdWdpbnMvY29udGVudC9zbGF0ZS9saWItZXMvY29tcG9uZW50cy9Ub29sYmFyQnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi4vcGFja2FnZXMvcGx1Z2lucy9jb250ZW50L3NsYXRlL2xpYi1lcy9ob29rcy91c2VDdXJyZW50Tm9kZURhdGFXaXRoUGx1Z2luLmpzIiwid2VicGFjazovL19OX0UvLi4vcGFja2FnZXMvcGx1Z2lucy9jb250ZW50L3NsYXRlL2xpYi1lcy9ob29rcy91c2VQbHVnaW5Jc0FjdGl2ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL3BhY2thZ2VzL3BsdWdpbnMvY29udGVudC9zbGF0ZS9saWItZXMvaG9va3MvdXNlUGx1Z2luSXNEaXNhYmxlZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL3BhY2thZ2VzL3BsdWdpbnMvY29udGVudC9zbGF0ZS9saWItZXMvaG9va3MvdXNlVGV4dElzU2VsZWN0ZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9wYWNrYWdlcy9wbHVnaW5zL2NvbnRlbnQvc2xhdGUvbGliLWVzL3BsdWdpbkZhY3Rvcmllcy9jb21wb25lbnRzL1VuaWZvcm1zQ29udHJvbHMuanMiXSwibmFtZXMiOltd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LG9CQUFvQixnQkFBZ0I7QUFDcEMsU0FBUyxvQkFBb0I7QUFDN0IsUUFBUSw0Q0FBSyxlQUFlLCtEQUFhO0FBQ3pDLGtEQUFrRCw0Q0FBSztBQUN2RCxnQkFBZ0IsNENBQUssZUFBZSxtRUFBUyxHQUFHLCtEQUErRCxnQ0FBZ0MsRUFBRSxlQUFlO0FBQ2hLLHlCQUF5Qiw0Q0FBSyxlQUFlLDJEQUFRLEdBQUcsMEZBQTBGO0FBQ2xKLGdCQUFnQiw0Q0FBSyxlQUFlLDZEQUFVO0FBQzlDLFFBQVEsNENBQUssZUFBZSwrREFBYTtBQUN6QyxZQUFZLDRDQUFLLGVBQWUsZ0VBQU0sR0FBRyw2Q0FBNkMsc0JBQXNCLEVBQUU7QUFDOUcsOEJBQThCLDRDQUFLLGVBQWUsZ0VBQU0sR0FBRyw4REFBOEQ7QUFDekg7QUFDQSxnQkFBZ0IsNENBQUssZUFBZSxnRUFBVSxHQUFHLFNBQVMsaUJBQWlCLEVBQUU7QUFDN0UsWUFBWSw0Q0FBSyxlQUFlLGdFQUFNLEdBQUcsNkRBQTZEO0FBQ3RHO0FBQ0EsZ0JBQWdCLDRDQUFLLGVBQWUsOERBQVEsR0FBRyxTQUFTLGlCQUFpQixFQUFFO0FBQzNFO0FBQ2UsdUVBQVEsRUFBQztBQUN4Qiw0QyIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnpcIlxufSksICdEb25lJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsImV4cG9ydCB2YXIgQ29uZGl0aW9uYWxXcmFwcGVyID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgY29uZGl0aW9uID0gX2EuY29uZGl0aW9uLCB3cmFwcGVyID0gX2Eud3JhcHBlciwgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbjtcclxuICAgIHJldHVybiBjb25kaXRpb24gPyB3cmFwcGVyKGNoaWxkcmVuKSA6IGNoaWxkcmVuO1xyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Db25kaXRpb25hbFdyYXBwZXIuanMubWFwIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQb3J0YWwgfSBmcm9tICdyZWFjdC1wb3J0YWwnO1xyXG5pbXBvcnQgeyB1c2VTbGF0ZSB9IGZyb20gJ3NsYXRlLXJlYWN0JztcclxuaW1wb3J0IHVzZVRleHRJc1NlbGVjdGVkIGZyb20gJy4uL2hvb2tzL3VzZVRleHRJc1NlbGVjdGVkJztcclxuaW1wb3J0IFBsdWdpbkJ1dHRvbiBmcm9tICcuL1BsdWdpbkJ1dHRvbic7XHJcbnZhciBIb3ZlckJ1dHRvbnMgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBwbHVnaW5zID0gX2EucGx1Z2lucywgdHJhbnNsYXRpb25zID0gX2EudHJhbnNsYXRpb25zO1xyXG4gICAgdmFyIHNob3dIb3ZlclRvb2xiYXIgPSB1c2VUZXh0SXNTZWxlY3RlZCgpO1xyXG4gICAgdmFyIHRvb2xiYXJSZWYgPSB1c2VSZWYoKTtcclxuICAgIHZhciBlZGl0b3IgPSB1c2VTbGF0ZSgpO1xyXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdG9vbGJhciA9IHRvb2xiYXJSZWYuY3VycmVudDtcclxuICAgICAgICBpZiAoIXNob3dIb3ZlclRvb2xiYXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcyA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgb1JhbmdlID0gcy5nZXRSYW5nZUF0KDApOyAvLyBnZXQgdGhlIHRleHQgcmFuZ2VcclxuICAgICAgICAgICAgdmFyIG9SZWN0ID0gb1JhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICBpZiAob1JlY3QpIHtcclxuICAgICAgICAgICAgICAgIHZhciBsZWZ0ID0gb1JlY3QubGVmdCwgdG9wXzEgPSBvUmVjdC50b3AsIHdpZHRoID0gb1JlY3Qud2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0b29sYmFyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgICAgICAgICB0b29sYmFyLnN0eWxlLnRvcCA9IHRvcF8xICsgd2luZG93LnNjcm9sbFkgLSB0b29sYmFyLm9mZnNldEhlaWdodCArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIHRvb2xiYXIuc3R5bGUubGVmdCA9IGxlZnQgKyB3aW5kb3cuc2Nyb2xsWCAtIHRvb2xiYXIub2Zmc2V0V2lkdGggLyAyICsgd2lkdGggLyAyICsgXCJweFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vIGlnbm9yZVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtlZGl0b3IsIHNob3dIb3ZlclRvb2xiYXJdKTtcclxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChQb3J0YWwsIG51bGwsXHJcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ3JlYWN0LXBhZ2UtcGx1Z2lucy1jb250ZW50LXNsYXRlLWlubGluZS10b29sYmFyICcgK1xyXG4gICAgICAgICAgICAgICAgKHNob3dIb3ZlclRvb2xiYXJcclxuICAgICAgICAgICAgICAgICAgICA/ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgOiAncmVhY3QtcGFnZS1wbHVnaW5zLWNvbnRlbnQtc2xhdGUtaW5saW5lLXRvb2xiYXItLWhpZGRlbicpLCBzdHlsZTogeyBwYWRkaW5nOiAwIH0sIHJlZjogdG9vbGJhclJlZiB9LCBwbHVnaW5zICYmXHJcbiAgICAgICAgICAgIHBsdWdpbnMubWFwKGZ1bmN0aW9uIChwbHVnaW4sIGkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwbHVnaW4uYWRkSG92ZXJCdXR0b24gPyAoUmVhY3QuY3JlYXRlRWxlbWVudChQbHVnaW5CdXR0b24sIHsgdHJhbnNsYXRpb25zOiB0cmFuc2xhdGlvbnMsIGtleTogaSwgcGx1Z2luOiBwbHVnaW4gfSkpIDogbnVsbDtcclxuICAgICAgICAgICAgfSkpKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhvdmVyQnV0dG9ucztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SG92ZXJCdXR0b25zLmpzLm1hcCIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9fcmVhZCA9ICh0aGlzICYmIHRoaXMuX19yZWFkKSB8fCBmdW5jdGlvbiAobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59O1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUmFuZ2UsIFRyYW5zZm9ybXMgfSBmcm9tICdzbGF0ZSc7XHJcbmltcG9ydCB7IHVzZVNsYXRlIH0gZnJvbSAnc2xhdGUtcmVhY3QnO1xyXG5pbXBvcnQgdXNlQWRkUGx1Z2luIGZyb20gJy4uL2hvb2tzL3VzZUFkZFBsdWdpbic7XHJcbmltcG9ydCB7IGdldEN1cnJlbnROb2RlRGF0YVdpdGhQbHVnaW4gfSBmcm9tICcuLi9ob29rcy91c2VDdXJyZW50Tm9kZURhdGFXaXRoUGx1Z2luJztcclxuaW1wb3J0IHVzZVBsdWdpbklzQWN0aXZlIGZyb20gJy4uL2hvb2tzL3VzZVBsdWdpbklzQWN0aXZlJztcclxuaW1wb3J0IHVzZVBsdWdpbklzRGlzYWJsZWQgZnJvbSAnLi4vaG9va3MvdXNlUGx1Z2luSXNEaXNhYmxlZCc7XHJcbmltcG9ydCB1c2VSZW1vdmVQbHVnaW4gZnJvbSAnLi4vaG9va3MvdXNlUmVtb3ZlUGx1Z2luJztcclxuaW1wb3J0IFVuaWZvcm1zQ29udHJvbHMgZnJvbSAnLi4vcGx1Z2luRmFjdG9yaWVzL2NvbXBvbmVudHMvVW5pZm9ybXNDb250cm9scyc7XHJcbmltcG9ydCB7IHVzZVNldERpYWxvZ0lzVmlzaWJsZSB9IGZyb20gJy4vRGlhbG9nVmlzaWJsZVByb3ZpZGVyJztcclxuaW1wb3J0IFRvb2xiYXJCdXR0b24gZnJvbSAnLi9Ub29sYmFyQnV0dG9uJztcclxuaW1wb3J0IHsgdXNlVWlUcmFuc2xhdG9yIH0gZnJvbSAnQHJlYWN0LXBhZ2UvZWRpdG9yJztcclxuZnVuY3Rpb24gUGx1Z2luQnV0dG9uKHByb3BzKSB7XHJcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xyXG4gICAgdmFyIHBsdWdpbiA9IHByb3BzLnBsdWdpbjtcclxuICAgIHZhciB0ID0gdXNlVWlUcmFuc2xhdG9yKCkudDtcclxuICAgIHZhciBoYXNDb250cm9scyA9IEJvb2xlYW4ocGx1Z2luLmNvbnRyb2xzKTtcclxuICAgIHZhciBfZiA9IF9fcmVhZCh1c2VTdGF0ZShmYWxzZSksIDIpLCBzaG93Q29udHJvbHMgPSBfZlswXSwgc2V0U2hvd0NvbnRyb2xzID0gX2ZbMV07XHJcbiAgICB2YXIgc3RvcmVkUHJvcHNSZWYgPSB1c2VSZWYoKTtcclxuICAgIHZhciBzaG91bGRJbnNlcnRXaXRoVGV4dCA9IHBsdWdpbi5wbHVnaW5UeXBlID09PSAnY29tcG9uZW50JyAmJlxyXG4gICAgICAgIHBsdWdpbi5vYmplY3QgPT09ICdpbmxpbmUnICYmXHJcbiAgICAgICAgKCEoKF9hID0gc3RvcmVkUHJvcHNSZWYgPT09IG51bGwgfHwgc3RvcmVkUHJvcHNSZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0b3JlZFByb3BzUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZWxlY3Rpb24pIHx8XHJcbiAgICAgICAgICAgIFJhbmdlLmlzQ29sbGFwc2VkKChfYiA9IHN0b3JlZFByb3BzUmVmID09PSBudWxsIHx8IHN0b3JlZFByb3BzUmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdG9yZWRQcm9wc1JlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iuc2VsZWN0aW9uKSkgJiZcclxuICAgICAgICAhKChfYyA9IHN0b3JlZFByb3BzUmVmID09PSBudWxsIHx8IHN0b3JlZFByb3BzUmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdG9yZWRQcm9wc1JlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuaXNBY3RpdmUpO1xyXG4gICAgdmFyIGNsb3NlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0U2hvd0NvbnRyb2xzKGZhbHNlKTsgfSwgW10pO1xyXG4gICAgdmFyIGlzQWN0aXZlID0gdXNlUGx1Z2luSXNBY3RpdmUocGx1Z2luKTtcclxuICAgIHZhciBhZGQgPSB1c2VBZGRQbHVnaW4ocGx1Z2luKTtcclxuICAgIHZhciByZW1vdmUgPSB1c2VSZW1vdmVQbHVnaW4ocGx1Z2luKTtcclxuICAgIHZhciBlZGl0b3IgPSB1c2VTbGF0ZSgpO1xyXG4gICAgdmFyIHNldElzVmlzaWJsZSA9IHVzZVNldERpYWxvZ0lzVmlzaWJsZSgpO1xyXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldElzVmlzaWJsZShzaG93Q29udHJvbHMpOyB9LCBbc2hvd0NvbnRyb2xzLCBzZXRJc1Zpc2libGVdKTtcclxuICAgIHZhciBvbkNsaWNrID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKGhhc0NvbnRyb2xzIHx8IHNob3VsZEluc2VydFdpdGhUZXh0KSB7XHJcbiAgICAgICAgICAgIGlmICghc2hvd0NvbnRyb2xzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzdG9yZSBwcm9wc1xyXG4gICAgICAgICAgICAgICAgc3RvcmVkUHJvcHNSZWYuY3VycmVudCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb246IGVkaXRvci5zZWxlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6IGlzQWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGdldEN1cnJlbnROb2RlRGF0YVdpdGhQbHVnaW4oZWRpdG9yLCBwbHVnaW4pLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRTaG93Q29udHJvbHMoIXNob3dDb250cm9scyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWRkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbaXNBY3RpdmUsIGhhc0NvbnRyb2xzLCBzaG93Q29udHJvbHMsIHNob3VsZEluc2VydFdpdGhUZXh0XSk7XHJcbiAgICB2YXIgY29udHJvbHMgPSBwbHVnaW4uY29udHJvbHM7XHJcbiAgICB2YXIgQ29udHJvbHMgPSBjb250cm9sc1xyXG4gICAgICAgID8gY29udHJvbHMudHlwZSA9PT0gJ2F1dG9mb3JtJ1xyXG4gICAgICAgICAgICA/IGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChVbmlmb3Jtc0NvbnRyb2xzLCBfX2Fzc2lnbih7fSwgcHJvcHMsIHsgc2NoZW1hOiBjb250cm9scyA9PT0gbnVsbCB8fCBjb250cm9scyA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udHJvbHMuc2NoZW1hIH0pKTsgfVxyXG4gICAgICAgICAgICA6IGNvbnRyb2xzLkNvbXBvbmVudFxyXG4gICAgICAgIDogVW5pZm9ybXNDb250cm9scztcclxuICAgIHZhciBpc0Rpc2FibGVkID0gdXNlUGx1Z2luSXNEaXNhYmxlZChwbHVnaW4pO1xyXG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxyXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbGJhckJ1dHRvbiwgeyBvbkNsaWNrOiBvbkNsaWNrLCBkaXNhYmxlZDogaXNEaXNhYmxlZCwgaXNBY3RpdmU6IGlzQWN0aXZlLCBpY29uOiBwbHVnaW4uaWNvbiB8fFxyXG4gICAgICAgICAgICAgICAgKHBsdWdpbi5wbHVnaW5UeXBlID09PSAnY29tcG9uZW50JyAmJiBwbHVnaW4uZGVzZXJpYWxpemUudGFnTmFtZSksIHRvb2xUaXA6IHQocGx1Z2luLmxhYmVsKSB9KSxcclxuICAgICAgICBoYXNDb250cm9scyB8fCBzaG91bGRJbnNlcnRXaXRoVGV4dCA/IChSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRyb2xzLCBfX2Fzc2lnbih7IHBsdWdpbkNvbmZpZzogcGx1Z2luLCBjbG9zZTogY2xvc2UsIG9wZW46IHNob3dDb250cm9scywgYWRkOiBmdW5jdGlvbiAocCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAgICAgaWYgKChfYSA9IHN0b3JlZFByb3BzUmVmID09PSBudWxsIHx8IHN0b3JlZFByb3BzUmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdG9yZWRQcm9wc1JlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzdG9yZSBzZWxlY3Rpb24gYmVmb3JlIGFkZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIFRyYW5zZm9ybXMuc2VsZWN0KGVkaXRvciwgc3RvcmVkUHJvcHNSZWYgPT09IG51bGwgfHwgc3RvcmVkUHJvcHNSZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0b3JlZFByb3BzUmVmLmN1cnJlbnQuc2VsZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFkZChwKTtcclxuICAgICAgICAgICAgfSwgcmVtb3ZlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgICAgICBpZiAoKF9hID0gc3RvcmVkUHJvcHNSZWYgPT09IG51bGwgfHwgc3RvcmVkUHJvcHNSZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0b3JlZFByb3BzUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZXN0b3JlIHNlbGVjdGlvbiBiZWZvcmUgcmVtb3ZpbmdcclxuICAgICAgICAgICAgICAgICAgICBUcmFuc2Zvcm1zLnNlbGVjdChlZGl0b3IsIHN0b3JlZFByb3BzUmVmID09PSBudWxsIHx8IHN0b3JlZFByb3BzUmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdG9yZWRQcm9wc1JlZi5jdXJyZW50LnNlbGVjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZW1vdmUoKTtcclxuICAgICAgICAgICAgfSwgaXNBY3RpdmU6IChfZCA9IHN0b3JlZFByb3BzUmVmID09PSBudWxsIHx8IHN0b3JlZFByb3BzUmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdG9yZWRQcm9wc1JlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuaXNBY3RpdmUsIHNob3VsZEluc2VydFdpdGhUZXh0OiBzaG91bGRJbnNlcnRXaXRoVGV4dCwgZGF0YTogKF9lID0gc3RvcmVkUHJvcHNSZWYgPT09IG51bGwgfHwgc3RvcmVkUHJvcHNSZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0b3JlZFByb3BzUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5kYXRhIH0sIHByb3BzKSkpIDogbnVsbCkpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oUGx1Z2luQnV0dG9uKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UGx1Z2luQnV0dG9uLmpzLm1hcCIsImltcG9ydCB7IGxhenlMb2FkIH0gZnJvbSAnQHJlYWN0LXBhZ2UvZWRpdG9yJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29uZGl0aW9uYWxXcmFwcGVyIH0gZnJvbSAnLi9Db25kaXRpb25hbFdyYXBwZXInO1xyXG52YXIgSWNvbkJ1dHRvbiA9IGxhenlMb2FkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGltcG9ydCgnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbicpOyB9KTtcclxudmFyIFRvb2x0aXAgPSBsYXp5TG9hZChmdW5jdGlvbiAoKSB7IHJldHVybiBpbXBvcnQoJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnKTsgfSk7XHJcbnZhciBUb29sYmFyQnV0dG9uID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgaWNvbiA9IF9hLmljb24sIGlzQWN0aXZlID0gX2EuaXNBY3RpdmUsIG9uQ2xpY2sgPSBfYS5vbkNsaWNrLCBfYiA9IF9hLmRpc2FibGVkLCBkaXNhYmxlZCA9IF9iID09PSB2b2lkIDAgPyBmYWxzZSA6IF9iLCBfYyA9IF9hLnRvb2xUaXAsIHRvb2xUaXAgPSBfYyA9PT0gdm9pZCAwID8gJycgOiBfYztcclxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChDb25kaXRpb25hbFdyYXBwZXIsIHsgY29uZGl0aW9uOiAhZGlzYWJsZWQsIHdyYXBwZXI6IGZ1bmN0aW9uIChjaGlsZHJlbikgeyByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwLCB7IHRpdGxlOiB0b29sVGlwIH0sIGNoaWxkcmVuKTsgfSB9LFxyXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkJ1dHRvbiwgeyBvbk1vdXNlRG93bjogb25DbGljaywgc3R5bGU6IGlzQWN0aXZlXHJcbiAgICAgICAgICAgICAgICA/IHsgY29sb3I6ICdyZ2IoMCwgMTg4LCAyMTIpJyB9XHJcbiAgICAgICAgICAgICAgICA6IGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyB7IGNvbG9yOiAnZ3JheScgfVxyXG4gICAgICAgICAgICAgICAgICAgIDogeyBjb2xvcjogJ3doaXRlJyB9LCBkaXNhYmxlZDogZGlzYWJsZWQgfSwgaWNvbikpKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhUb29sYmFyQnV0dG9uKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VG9vbGJhckJ1dHRvbi5qcy5tYXAiLCJpbXBvcnQgeyB1c2VTbGF0ZSB9IGZyb20gJ3NsYXRlLXJlYWN0JztcclxuaW1wb3J0IHsgZ2V0Q3VycmVudE5vZGVXaXRoUGx1Z2luIH0gZnJvbSAnLi91c2VDdXJyZW50Tm9kZVdpdGhQbHVnaW4nO1xyXG5leHBvcnQgdmFyIGdldEN1cnJlbnROb2RlRGF0YVdpdGhQbHVnaW4gPSBmdW5jdGlvbiAoZWRpdG9yLCBwbHVnaW4pIHtcclxuICAgIHZhciBjdXJyZW50Tm9kZUVudHJ5ID0gZ2V0Q3VycmVudE5vZGVXaXRoUGx1Z2luKGVkaXRvciwgcGx1Z2luKTtcclxuICAgIGlmIChjdXJyZW50Tm9kZUVudHJ5KSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGVFbnRyeVswXTtcclxuICAgICAgICBpZiAocGx1Z2luLnBsdWdpblR5cGUgPT09ICdjb21wb25lbnQnICYmIHBsdWdpbi5vYmplY3QgPT09ICdtYXJrJykge1xyXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudE5vZGVbcGx1Z2luLnR5cGVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgICAgIHZhciBkYXRhID0gY3VycmVudE5vZGUuZGF0YTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHBsdWdpbi5nZXRJbml0aWFsRGF0YSkge1xyXG4gICAgICAgIHJldHVybiBwbHVnaW4uZ2V0SW5pdGlhbERhdGEoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChwbHVnaW4pIHtcclxuICAgIHZhciBlZGl0b3IgPSB1c2VTbGF0ZSgpO1xyXG4gICAgcmV0dXJuIGdldEN1cnJlbnROb2RlRGF0YVdpdGhQbHVnaW4oZWRpdG9yLCBwbHVnaW4pO1xyXG59KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlQ3VycmVudE5vZGVEYXRhV2l0aFBsdWdpbi5qcy5tYXAiLCJpbXBvcnQgdXNlQ3VycmVudE5vZGVXaXRoUGx1Z2luIGZyb20gJy4vdXNlQ3VycmVudE5vZGVXaXRoUGx1Z2luJztcclxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChwbHVnaW4pIHtcclxuICAgIHZhciBub2RlRW50cnkgPSB1c2VDdXJyZW50Tm9kZVdpdGhQbHVnaW4ocGx1Z2luKTtcclxuICAgIHJldHVybiBCb29sZWFuKG5vZGVFbnRyeSk7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VQbHVnaW5Jc0FjdGl2ZS5qcy5tYXAiLCJ2YXIgX19yZWFkID0gKHRoaXMgJiYgdGhpcy5fX3JlYWQpIHx8IGZ1bmN0aW9uIChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn07XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTbGF0ZSB9IGZyb20gJ3NsYXRlLXJlYWN0JztcclxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChwbHVnaW4pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdmFyIGVkaXRvciA9IHVzZVNsYXRlKCk7XHJcbiAgICAgICAgdmFyIF9hID0gX19yZWFkKHVzZVN0YXRlKHRydWUpLCAyKSwgZGlzYWJsZWQgPSBfYVswXSwgc2V0RGlzYWJsZWRfMSA9IF9hWzFdO1xyXG4gICAgICAgIGlmICghZWRpdG9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGx1Z2luLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgcGx1Z2luLmlzRGlzYWJsZWQoZWRpdG9yKS50aGVuKGZ1bmN0aW9uIChkKSB7IHJldHVybiBzZXREaXNhYmxlZF8xKGQpOyB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGRpc2FibGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgLy8gc2xhdGUgc29tZXRpbWVzIHRocm93cyB3aGVuIGRvbSBub2RlIGNhbnQgYmUgZm91bmQgaW4gdW5kb1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZVBsdWdpbklzRGlzYWJsZWQuanMubWFwIiwiaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSAnc2xhdGUnO1xyXG5pbXBvcnQgeyB1c2VTbGF0ZSB9IGZyb20gJ3NsYXRlLXJlYWN0JztcclxudmFyIHVzZVRleHRJc1NlbGVjdGVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGVkaXRvciA9IHVzZVNsYXRlKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiAoQm9vbGVhbihlZGl0b3Iuc2VsZWN0aW9uKSAmJlxyXG4gICAgICAgICAgICBFZGl0b3Iuc3RyaW5nKGVkaXRvciwgZWRpdG9yLnNlbGVjdGlvbikgIT09ICcnKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgLy8gY2FuIGluIHNvbWUgY2FzZXMgdGhyb3cgY3VycmVudGx5XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCB1c2VUZXh0SXNTZWxlY3RlZDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlVGV4dElzU2VsZWN0ZWQuanMubWFwIiwidmFyIF9fcmVhZCA9ICh0aGlzICYmIHRoaXMuX19yZWFkKSB8fCBmdW5jdGlvbiAobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59O1xyXG5pbXBvcnQgeyBEaWFsb2csIERpYWxvZ0FjdGlvbnMsIERpYWxvZ0NvbnRlbnQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlJztcclxuaW1wb3J0IERvbmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Eb25lJztcclxuaW1wb3J0IHsgbWFrZVVuaWZvcm1zU2NoZW1hLCBBdXRvRm9ybSwgQXV0b0ZpZWxkcyB9IGZyb20gJ0ByZWFjdC1wYWdlL2VkaXRvcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuZnVuY3Rpb24gQ29udHJvbHMocHJvcHMpIHtcclxuICAgIHZhciB1bmlmb3Jtc1NjaGVtYSA9IHByb3BzLnNjaGVtYVxyXG4gICAgICAgID8gbWFrZVVuaWZvcm1zU2NoZW1hKHByb3BzLnNjaGVtYSlcclxuICAgICAgICA6IG51bGw7XHJcbiAgICB2YXIgaGFzU2NoZW1hID0gQm9vbGVhbihwcm9wcy5zY2hlbWEpO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgIHZhciBmb3JtUmVmID0gdXNlUmVmKCk7XHJcbiAgICB2YXIgX2EgPSBfX3JlYWQodXNlU3RhdGUobnVsbCksIDIpLCB0ZXh0ID0gX2FbMF0sIHNldFRleHQgPSBfYVsxXTtcclxuICAgIHZhciBvbkNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwcm9wcy5jbG9zZSgpO1xyXG4gICAgfTtcclxuICAgIHZhciBzYXZlQW5kQ2xvc2VXaXRoRGF0YSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgcHJvcHMuY2xvc2UoKTtcclxuICAgICAgICBpZiAocHJvcHMuc2hvdWxkSW5zZXJ0V2l0aFRleHQpIHtcclxuICAgICAgICAgICAgcHJvcHMuYWRkKHsgdGV4dDogdGV4dCwgZGF0YTogZGF0YSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHByb3BzLmFkZCh7IGRhdGE6IGRhdGEgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLnNob3VsZEluc2VydFdpdGhUZXh0LCB0ZXh0XSk7XHJcbiAgICB2YXIgc3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoZm9ybVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGZvcm1SZWYuY3VycmVudC5zdWJtaXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZm9ybVJlZi5jdXJyZW50XSk7XHJcbiAgICB2YXIgb25Pa0NsaWNrID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh1bmlmb3Jtc1NjaGVtYSkge1xyXG4gICAgICAgICAgICBzdWJtaXRGb3JtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzYXZlQW5kQ2xvc2VXaXRoRGF0YSh7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3N1Ym1pdEZvcm0sIHNhdmVBbmRDbG9zZVdpdGhEYXRhLCBoYXNTY2hlbWFdKTtcclxuICAgIHZhciBvblJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwcm9wcy5yZW1vdmUoKTtcclxuICAgICAgICBwcm9wcy5jbG9zZSgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChEaWFsb2csIHsgZGlzYWJsZUVuZm9yY2VGb2N1czogdHJ1ZSwgUGFwZXJQcm9wczoge1xyXG4gICAgICAgICAgICBzdHlsZTogeyBtaW5XaWR0aDogMzAwIH0sXHJcbiAgICAgICAgfSwgb3BlbjogcHJvcHMub3BlbiB9LFxyXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGlhbG9nQ29udGVudCwgbnVsbCxcclxuICAgICAgICAgICAgIXByb3BzLnNob3VsZEluc2VydFdpdGhUZXh0ID8gbnVsbCA6IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHRGaWVsZCwgeyBhdXRvRm9jdXM6IHRydWUsIHBsYWNlaG9sZGVyOiAnVGV4dCcsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gc2V0VGV4dChlLnRhcmdldC52YWx1ZSk7IH0sIHZhbHVlOiB0ZXh0IH0pKSksXHJcbiAgICAgICAgICAgIGhhc1NjaGVtYSA/IChSZWFjdC5jcmVhdGVFbGVtZW50KEF1dG9Gb3JtLCB7IHJlZjogZm9ybVJlZiwgbW9kZWw6IHByb3BzLmRhdGEsIHNjaGVtYTogdW5pZm9ybXNTY2hlbWEsIG9uU3VibWl0OiBzYXZlQW5kQ2xvc2VXaXRoRGF0YSB9LFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBdXRvRmllbGRzLCBudWxsKSkpIDogbnVsbCksXHJcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChEaWFsb2dBY3Rpb25zLCBudWxsLFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB2YXJpYW50OiBcInRleHRcIiwgb25DbGljazogb25DYW5jZWwsIHN0eWxlOiB7IG1hcmdpblJpZ2h0OiAnYXV0bycgfSB9LCBwcm9wcy5jYW5jZWxMYWJlbCB8fCAnQ2FuY2VsJyksXHJcbiAgICAgICAgICAgIHByb3BzLmlzQWN0aXZlID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHZhcmlhbnQ6IFwiY29udGFpbmVkXCIsIGNvbG9yOiBcInNlY29uZGFyeVwiLCBvbkNsaWNrOiBvblJlbW92ZSB9LFxyXG4gICAgICAgICAgICAgICAgcHJvcHMucmVtb3ZlTGFiZWwgfHwgJ1JlbW92ZScsXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERlbGV0ZUljb24sIHsgc3R5bGU6IHsgbWFyZ2luTGVmdDogMTAgfSB9KSkpIDogbnVsbCxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgdmFyaWFudDogXCJjb250YWluZWRcIiwgY29sb3I6IFwicHJpbWFyeVwiLCBvbkNsaWNrOiBvbk9rQ2xpY2sgfSxcclxuICAgICAgICAgICAgICAgIHByb3BzLnN1Ym1pdExhYmVsIHx8ICdPaycsXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERvbmVJY29uLCB7IHN0eWxlOiB7IG1hcmdpbkxlZnQ6IDEwIH0gfSkpKSkpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Vbmlmb3Jtc0NvbnRyb2xzLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=