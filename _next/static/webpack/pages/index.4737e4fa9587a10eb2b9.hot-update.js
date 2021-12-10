webpackHotUpdate_N_E("pages/index",{

/***/ "../packages/editor/lib-es/index.js":
/*!******************************************!*\
  !*** ../packages/editor/lib-es/index.js ***!
  \******************************************/
/*! exports provided: isRow, useValueNode, useNodeProps, useNodeAncestorProps, useCellProps, useCell, useRowProps, useNodeHoverPosition, useNodeAncestorIds, useParentCellId, useNodeAsHoverTarget, useCellBounds, useNodeChildrenIds, useNodeHasChildren, useCellHasPlugin, useAllCellPluginsForNode, useCellIsAllowedHere, usePluginOfCell, useCellDataI18nRaw, useCellData, useCellInnerDivStylingProps, useDebouncedCellData, useFocusedNodeId, useAllFocusedNodeIds, useIsFocused, useIsExclusivlyFocused, useScrollToViewEffect, useEditorStore, OptionsContext, useOptions, useOption, useUiTranslator, useLang, useCellSpacing, useCellSpacingProvider, RenderOptionsContext, useRenderOptions, useRenderOption, CallbacksContext, useCallbackOptions, useCallbackOption, useUndo, useRedo, useCanUndo, useCanRedo, useSetDraft, useResizeCellById, useResizeCell, useSetLang, useUpdateCellData, useRemoveCellById, useRemoveCell, useRemoveMultipleNodeIds, useDuplicateCellById, useInsertAfter, useDuplicateMultipleCells, useDuplicateCell, useSetDisplayReferenceNodeId, useFocusCellById, useFocusCell, useBlurCell, useBlurAllCells, useInsertNew, useTrashDrop, useIsEditMode, useIsInsertMode, useIsLayoutMode, useIsPreviewMode, useIsResizeMode, useDisplayMode, useDisplayModeReferenceNodeId, useSetMode, useSetResizeMode, useSetEditMode, useSetLayoutMode, useSetInsertMode, useSetPreviewMode, useHoverActions, useDropActions, useIsSmallScreen, useSetZoom, useZoom, useZoomOut, useZoomIn, useCanZoomOut, useCanZoomIn, getTargetIndexForUpAndDownMove, useMoveNodeUp, useMoveNodeDown, useMoveNodeLeft, useMoveNodeRight, BottomToolbarDrawer, BottomToolbarMainBar, BottomToolbarTools, BottomToolbar, AutoForm, AutoField, AutoFields, AutoformControls, I18nTools, DuplicateButton, Trash, ImageUpload, SelectParentButton, PluginDrawer, darkTheme, ThemeProvider, ColorPicker, ColorPickerField, colorToString, stringToColor, Sidebar, objIsNode, lazyLoad, Migration, makeUniformsSchema, createValue, getTextContents, migrateValue, deepEquals, default, VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var _core_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/types */ "../packages/editor/lib-es/core/types/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRow", function() { return _core_types__WEBPACK_IMPORTED_MODULE_0__["isRow"]; });

/* harmony import */ var _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/components/hooks */ "../packages/editor/lib-es/core/components/hooks/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useValueNode", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useValueNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNodeProps", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useNodeProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNodeAncestorProps", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useNodeAncestorProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCellProps", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useCellProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCell", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useCell"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRowProps", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useRowProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNodeHoverPosition", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useNodeHoverPosition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNodeAncestorIds", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useNodeAncestorIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useParentCellId", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useParentCellId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNodeAsHoverTarget", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useNodeAsHoverTarget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCellBounds", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useCellBounds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNodeChildrenIds", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useNodeChildrenIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNodeHasChildren", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useNodeHasChildren"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCellHasPlugin", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useCellHasPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAllCellPluginsForNode", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useAllCellPluginsForNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCellIsAllowedHere", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useCellIsAllowedHere"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePluginOfCell", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["usePluginOfCell"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCellDataI18nRaw", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useCellDataI18nRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCellData", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useCellData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCellInnerDivStylingProps", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useCellInnerDivStylingProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebouncedCellData", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useDebouncedCellData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFocusedNodeId", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useFocusedNodeId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAllFocusedNodeIds", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useAllFocusedNodeIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIsFocused", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useIsFocused"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIsExclusivlyFocused", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useIsExclusivlyFocused"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScrollToViewEffect", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useScrollToViewEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEditorStore", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useEditorStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OptionsContext", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["OptionsContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOptions", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOption", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUiTranslator", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useUiTranslator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLang", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useLang"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCellSpacing", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useCellSpacing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCellSpacingProvider", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useCellSpacingProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderOptionsContext", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["RenderOptionsContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRenderOptions", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useRenderOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRenderOption", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useRenderOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CallbacksContext", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["CallbacksContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCallbackOptions", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useCallbackOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCallbackOption", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useCallbackOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUndo", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useUndo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRedo", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useRedo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCanUndo", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useCanUndo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCanRedo", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useCanRedo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSetDraft", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useSetDraft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useResizeCellById", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useResizeCellById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useResizeCell", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useResizeCell"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSetLang", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useSetLang"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdateCellData", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useUpdateCellData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRemoveCellById", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useRemoveCellById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRemoveCell", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useRemoveCell"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRemoveMultipleNodeIds", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useRemoveMultipleNodeIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDuplicateCellById", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useDuplicateCellById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useInsertAfter", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useInsertAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDuplicateMultipleCells", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useDuplicateMultipleCells"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDuplicateCell", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useDuplicateCell"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSetDisplayReferenceNodeId", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useSetDisplayReferenceNodeId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFocusCellById", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useFocusCellById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFocusCell", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useFocusCell"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useBlurCell", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useBlurCell"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useBlurAllCells", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useBlurAllCells"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useInsertNew", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useInsertNew"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTrashDrop", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useTrashDrop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIsEditMode", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useIsEditMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIsInsertMode", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useIsInsertMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIsLayoutMode", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useIsLayoutMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIsPreviewMode", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useIsPreviewMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIsResizeMode", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useIsResizeMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDisplayMode", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useDisplayMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDisplayModeReferenceNodeId", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useDisplayModeReferenceNodeId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSetMode", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useSetMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSetResizeMode", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useSetResizeMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSetEditMode", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useSetEditMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSetLayoutMode", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useSetLayoutMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSetInsertMode", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useSetInsertMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSetPreviewMode", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useSetPreviewMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHoverActions", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useHoverActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDropActions", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useDropActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIsSmallScreen", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useIsSmallScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSetZoom", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useSetZoom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useZoom", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useZoom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useZoomOut", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useZoomOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useZoomIn", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useZoomIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCanZoomOut", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useCanZoomOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCanZoomIn", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useCanZoomIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTargetIndexForUpAndDownMove", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["getTargetIndexForUpAndDownMove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMoveNodeUp", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useMoveNodeUp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMoveNodeDown", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useMoveNodeDown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMoveNodeLeft", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useMoveNodeLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMoveNodeRight", function() { return _core_components_hooks__WEBPACK_IMPORTED_MODULE_1__["useMoveNodeRight"]; });

/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ "../packages/editor/lib-es/ui/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BottomToolbarDrawer", function() { return _ui__WEBPACK_IMPORTED_MODULE_2__["BottomToolbarDrawer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BottomToolbarMainBar", function() { return _ui__WEBPACK_IMPORTED_MODULE_2__["BottomToolbarMainBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BottomToolbarTools", function() { return _ui__WEBPACK_IMPORTED_MODULE_2__["BottomToolbarTools"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BottomToolbar", function() { return _ui__WEBPACK_IMPORTED_MODULE_2__["BottomToolbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoForm", function() { return _ui__WEBPACK_IMPORTED_MODULE_2__["AutoForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoField", function() { return _ui__WEBPACK_IMPORTED_MODULE_2__["AutoField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoFields", function() { return _ui__WEBPACK_IMPORTED_MODULE_2__["AutoFields"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoformControls", function() { return _ui__WEBPACK_IMPORTED_MODULE_2__["AutoformControls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18nTools", function() { return _ui__WEBPACK_IMPORTED_MODULE_2__["I18nTools"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DuplicateButton", function() { return _ui__WEBPACK_IMPORTED_MODULE_2__["DuplicateButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Trash", function() { return _ui__WEBPACK_IMPORTED_MODULE_2__["Trash"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageUpload", function() { return _ui__WEBPACK_IMPORTED_MODULE_2__["ImageUpload"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectParentButton", function() { return _ui__WEBPACK_IMPORTED_MODULE_2__["SelectParentButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PluginDrawer", function() { return _ui__WEBPACK_IMPORTED_MODULE_2__["PluginDrawer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "darkTheme", function() { return _ui__WEBPACK_IMPORTED_MODULE_2__["darkTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return _ui__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPicker", function() { return _ui__WEBPACK_IMPORTED_MODULE_2__["ColorPicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPickerField", function() { return _ui__WEBPACK_IMPORTED_MODULE_2__["ColorPickerField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorToString", function() { return _ui__WEBPACK_IMPORTED_MODULE_2__["colorToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringToColor", function() { return _ui__WEBPACK_IMPORTED_MODULE_2__["stringToColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return _ui__WEBPACK_IMPORTED_MODULE_2__["Sidebar"]; });

/* harmony import */ var _core_helper_lazyLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/helper/lazyLoad */ "../packages/editor/lib-es/core/helper/lazyLoad/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lazyLoad", function() { return _core_helper_lazyLoad__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _core_migrations_Migration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/migrations/Migration */ "../packages/editor/lib-es/core/migrations/Migration.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Migration", function() { return _core_migrations_Migration__WEBPACK_IMPORTED_MODULE_4__["Migration"]; });

/* harmony import */ var _editor_Editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor/Editor */ "../packages/editor/lib-es/editor/Editor.js");
/* harmony import */ var _ui_AutoformControls_makeUniformsSchema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/AutoformControls/makeUniformsSchema */ "../packages/editor/lib-es/ui/AutoformControls/makeUniformsSchema.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeUniformsSchema", function() { return _ui_AutoformControls_makeUniformsSchema__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _core_migrations_migrate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/migrations/migrate */ "../packages/editor/lib-es/core/migrations/migrate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "migrateValue", function() { return _core_migrations_migrate__WEBPACK_IMPORTED_MODULE_7__["migrateValue"]; });

/* harmony import */ var _core_utils_deepEquals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/utils/deepEquals */ "../packages/editor/lib-es/core/utils/deepEquals.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepEquals", function() { return _core_utils_deepEquals__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _core_utils_createValue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/utils/createValue */ "../packages/editor/lib-es/core/utils/createValue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createValue", function() { return _core_utils_createValue__WEBPACK_IMPORTED_MODULE_9__["createValue"]; });

/* harmony import */ var _core_utils_objIsNode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/utils/objIsNode */ "../packages/editor/lib-es/core/utils/objIsNode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objIsNode", function() { return _core_utils_objIsNode__WEBPACK_IMPORTED_MODULE_10__["objIsNode"]; });

/* harmony import */ var _core_utils_getTextContents__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/utils/getTextContents */ "../packages/editor/lib-es/core/utils/getTextContents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTextContents", function() { return _core_utils_getTextContents__WEBPACK_IMPORTED_MODULE_11__["getTextContents"]; });

//import './wdyr';



















/* harmony default export */ __webpack_exports__["default"] = (_editor_Editor__WEBPACK_IMPORTED_MODULE_5__["default"]);
var VERSION = '###VERSION###';
//# sourceMappingURL=index.js.map

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL3BhY2thZ2VzL2VkaXRvci9saWItZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM2QjtBQUNXO0FBQ25CO0FBQ3lCO0FBQ1U7QUFDbkI7QUFDcUM7QUFDakI7QUFDUjtBQUNNO0FBQ0o7QUFDWTtBQUMxQztBQUNEO0FBQ0M7QUFDUztBQUNVO0FBQ2hCO0FBQ0Y7QUFDUCxxSEFBTSxFQUFDO0FBQ2Y7QUFDUCxpQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NzM3ZTRmYTk1ODdhMTBlYjJiOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgJy4vd2R5cic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29yZS90eXBlcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29yZS9jb21wb25lbnRzL2hvb2tzJztcclxuZXhwb3J0ICogZnJvbSAnLi91aSc7XHJcbmltcG9ydCBsYXp5TG9hZCBmcm9tICcuL2NvcmUvaGVscGVyL2xhenlMb2FkJztcclxuaW1wb3J0IHsgTWlncmF0aW9uIH0gZnJvbSAnLi9jb3JlL21pZ3JhdGlvbnMvTWlncmF0aW9uJztcclxuaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvci9FZGl0b3InO1xyXG5pbXBvcnQgbWFrZVVuaWZvcm1zU2NoZW1hIGZyb20gJy4vdWkvQXV0b2Zvcm1Db250cm9scy9tYWtlVW5pZm9ybXNTY2hlbWEnO1xyXG5pbXBvcnQgeyBtaWdyYXRlVmFsdWUgfSBmcm9tICcuL2NvcmUvbWlncmF0aW9ucy9taWdyYXRlJztcclxuaW1wb3J0IGRlZXBFcXVhbHMgZnJvbSAnLi9jb3JlL3V0aWxzL2RlZXBFcXVhbHMnO1xyXG5pbXBvcnQgeyBjcmVhdGVWYWx1ZSB9IGZyb20gJy4vY29yZS91dGlscy9jcmVhdGVWYWx1ZSc7XHJcbmltcG9ydCB7IG9iaklzTm9kZSB9IGZyb20gJy4vY29yZS91dGlscy9vYmpJc05vZGUnO1xyXG5pbXBvcnQgeyBnZXRUZXh0Q29udGVudHMgfSBmcm9tICcuL2NvcmUvdXRpbHMvZ2V0VGV4dENvbnRlbnRzJztcclxuZXhwb3J0IHsgb2JqSXNOb2RlIH07XHJcbmV4cG9ydCB7IGxhenlMb2FkIH07XHJcbmV4cG9ydCB7IE1pZ3JhdGlvbiB9O1xyXG5leHBvcnQgeyBtYWtlVW5pZm9ybXNTY2hlbWEgfTtcclxuZXhwb3J0IHsgY3JlYXRlVmFsdWUsIGdldFRleHRDb250ZW50cyB9O1xyXG5leHBvcnQgeyBtaWdyYXRlVmFsdWUgfTtcclxuZXhwb3J0IHsgZGVlcEVxdWFscyB9O1xyXG5leHBvcnQgZGVmYXVsdCBFZGl0b3I7XHJcbmV4cG9ydCB2YXIgVkVSU0lPTiA9ICcjIyNWRVJTSU9OIyMjJztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==