(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[17],{

/***/ "../node_modules/@material-ui/icons/CloudUpload.js":
/*!*********************************************************!*\
  !*** ../node_modules/@material-ui/icons/CloudUpload.js ***!
  \*********************************************************/
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
  d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"
}), 'CloudUpload');

exports.default = _default;

/***/ }),

/***/ "../node_modules/@material-ui/icons/Error.js":
/*!***************************************************!*\
  !*** ../node_modules/@material-ui/icons/Error.js ***!
  \***************************************************/
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
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
}), 'Error');

exports.default = _default;

/***/ }),

/***/ "../packages/editor/lib-es/ui/ImageUpload/ImageUpload.js":
/*!***************************************************************!*\
  !*** ../packages/editor/lib-es/ui/ImageUpload/ImageUpload.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "../node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "../node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_icons_CloudUpload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/CloudUpload */ "../node_modules/@material-ui/icons/CloudUpload.js");
/* harmony import */ var _material_ui_icons_CloudUpload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CloudUpload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Error */ "../node_modules/@material-ui/icons/Error.js");
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _defaultTranslations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./defaultTranslations */ "../packages/editor/lib-es/ui/ImageUpload/defaultTranslations.js");
/* harmony import */ var _core_components_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/components/hooks */ "../packages/editor/lib-es/core/components/hooks/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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







var NO_FILE_ERROR_CODE = 1;
var BAD_EXTENSION_ERROR_CODE = 2;
var TOO_BIG_ERROR_CODE = 3;
var UPLOADING_ERROR_CODE = 4;
/*
 * FIXME: rewrite to functional component
 */
var ImageUpload = /** @class */ (function (_super) {
    __extends(ImageUpload, _super);
    function ImageUpload() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isUploading: false,
            hasError: false,
            errorText: '',
            progress: 0,
        };
        _this.hasExtension = function (fileName) {
            var patternPart = _this.props.allowedExtensions
                ? _this.props.allowedExtensions.map(function (a) { return a.toLowerCase(); }).join('|')
                : '';
            var pattern = '(' + patternPart.replace(/\./g, '\\.') + ')$';
            return new RegExp(pattern, 'i').test(fileName.toLowerCase());
        };
        _this.handleError = function (errorCode) {
            var errorText = '';
            switch (errorCode) {
                case NO_FILE_ERROR_CODE:
                    errorText = _this.props.t(_this.props.translations.noFileError);
                    break;
                case BAD_EXTENSION_ERROR_CODE:
                    errorText = _this.props.t(_this.props.translations.badExtensionError);
                    break;
                case TOO_BIG_ERROR_CODE:
                    errorText = _this.props.t(_this.props.translations.tooBigError);
                    break;
                case UPLOADING_ERROR_CODE:
                    errorText = _this.props.t(_this.props.translations.uploadingError);
                    break;
                default:
                    errorText = _this.props.t(_this.props.translations.unknownError);
                    break;
            }
            // Need to flick "isUploading" because otherwise the handler doesn't fire properly
            _this.setState({ hasError: true, errorText: errorText, isUploading: true }, function () {
                return _this.setState({ isUploading: false });
            });
            setTimeout(function () { return _this.setState({ hasError: false, errorText: '' }); }, 5000);
        };
        _this.handleFileSelected = function (e) {
            if (!e.target.files || !e.target.files[0]) {
                _this.handleError(NO_FILE_ERROR_CODE);
                return;
            }
            var file = e.target.files[0];
            if (!_this.hasExtension(file.name)) {
                _this.handleError(BAD_EXTENSION_ERROR_CODE);
                return;
            }
            if (file.size > _this.props.maxFileSize) {
                _this.handleError(TOO_BIG_ERROR_CODE);
                return;
            }
            if (_this.props.imageLoaded) {
                _this.readFile(file).then(function (data) { return _this.props.imageLoaded(data); });
            }
            if (_this.props.imageUpload) {
                _this.setState({ isUploading: true });
                _this.props
                    .imageUpload(file, _this.handleReportProgress)
                    .then(function (resp) {
                    _this.setState({ progress: undefined, isUploading: false });
                    _this.props.imageUploaded && _this.props.imageUploaded(resp);
                })
                    .catch(function (error) {
                    _this.setState({ isUploading: false });
                    _this.props.imageUploadError && _this.props.imageUploadError(error);
                });
            }
        };
        _this.handleFileUploadClick = function () {
            return _this.fileInput.click();
        };
        _this.handleReportProgress = function (progress) { return _this.setState({ progress: progress }); };
        _this.renderChildren = function () {
            if (_this.state.isUploading) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__["default"], { value: _this.state.progress, size: 19 });
            }
            if (_this.state.hasError) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                    _this.state.errorText,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_4___default.a, { style: { marginLeft: '8px' } })));
            }
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                _this.props.translations.buttonContent,
                _this.props.icon));
        };
        return _this;
    }
    ImageUpload.prototype.readFile = function (file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            // Read the image via FileReader API and save image result in state.
            reader.onload = function (e) {
                // Add the file name to the data URL
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                var dataUrl = e.target.result;
                dataUrl = dataUrl.replace(';base64', ";name=" + file.name + ";base64");
                resolve({ file: file, dataUrl: dataUrl });
            };
            reader.readAsDataURL(file);
        });
    };
    ImageUpload.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], { disabled: this.state.isUploading, variant: "contained", color: this.state.hasError ? 'secondary' : 'primary', onClick: this.handleFileUploadClick, style: this.props.style, size: "small" }, this.renderChildren()),
            !this.state.isUploading && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { style: { display: 'none' }, ref: function (fileInput) { return (_this.fileInput = fileInput); }, type: "file", onChange: this.handleFileSelected }))));
    };
    ImageUpload.defaultProps = {
        icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_CloudUpload__WEBPACK_IMPORTED_MODULE_3___default.a, { style: { marginLeft: '8px' } }),
        allowedExtensions: ['jpg', 'jpeg', 'png'],
        maxFileSize: 5242880,
        translations: _defaultTranslations__WEBPACK_IMPORTED_MODULE_5__["defaultTranslations"],
    };
    return ImageUpload;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
    var t = Object(_core_components_hooks__WEBPACK_IMPORTED_MODULE_6__["useUiTranslator"])().t;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageUpload, __assign({}, props, { t: t }));
});
//# sourceMappingURL=ImageUpload.js.map

/***/ }),

/***/ "../packages/editor/lib-es/ui/ImageUpload/defaultTranslations.js":
/*!***********************************************************************!*\
  !*** ../packages/editor/lib-es/ui/ImageUpload/defaultTranslations.js ***!
  \***********************************************************************/
/*! exports provided: defaultTranslations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTranslations", function() { return defaultTranslations; });
var defaultTranslations = {
    buttonContent: 'Upload image',
    noFileError: 'No file selected',
    badExtensionError: 'Bad file type',
    tooBigError: 'Too big',
    uploadingError: 'Error while uploading',
    unknownError: 'Unknown error',
};
//# sourceMappingURL=defaultTranslations.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvdWRVcGxvYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2ljb25zL0Vycm9yLmpzIiwid2VicGFjazovL19OX0UvLi4vcGFja2FnZXMvZWRpdG9yL2xpYi1lcy91aS9JbWFnZVVwbG9hZC9JbWFnZVVwbG9hZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL3BhY2thZ2VzL2VkaXRvci9saWItZXMvdWkvSW1hZ2VVcGxvYWQvZGVmYXVsdFRyYW5zbGF0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMscUhBQThDOztBQUVuRiw4QkFBOEIsbUJBQU8sQ0FBQyx1SEFBK0M7O0FBRXJGO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsb0NBQW9DLG1CQUFPLENBQUMsNkNBQU87O0FBRW5ELDRDQUE0QyxtQkFBTyxDQUFDLHdGQUF1Qjs7QUFFM0U7QUFDQTtBQUNBLENBQUM7O0FBRUQsMkI7Ozs7Ozs7Ozs7OztBQ25CYTs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQyxxSEFBOEM7O0FBRW5GLDhCQUE4QixtQkFBTyxDQUFDLHVIQUErQzs7QUFFckY7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSxvQ0FBb0MsbUJBQU8sQ0FBQyw2Q0FBTzs7QUFFbkQsNENBQTRDLG1CQUFPLENBQUMsd0ZBQXVCOztBQUUzRTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCwyQjs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0I7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsOEVBQThFO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRCxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBCO0FBQ29CO0FBQ29CO0FBQ0w7QUFDWjtBQUNXO0FBQ0U7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0Usd0JBQXdCLEVBQUU7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBEQUEwRDtBQUN0Rix1Q0FBdUMscUJBQXFCO0FBQzVELGFBQWE7QUFDYixvQ0FBb0Msd0JBQXdCLGlDQUFpQyxFQUFFLEVBQUU7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsc0NBQXNDLEVBQUU7QUFDbkc7QUFDQTtBQUNBLGdDQUFnQyxvQkFBb0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLDBDQUEwQztBQUM5RTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLG9DQUFvQyxxQkFBcUI7QUFDekQ7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCx3QkFBd0IscUJBQXFCLEVBQUU7QUFDekc7QUFDQTtBQUNBLHVCQUF1Qiw0Q0FBSyxlQUFlLDBFQUFnQixHQUFHLHdDQUF3QztBQUN0RztBQUNBO0FBQ0Esd0JBQXdCLDRDQUFLLGVBQWUsNENBQUs7QUFDakQ7QUFDQSxvQkFBb0IsNENBQUssZUFBZSwrREFBUyxHQUFHLFNBQVMsb0JBQW9CLEVBQUU7QUFDbkY7QUFDQSxvQkFBb0IsNENBQUssZUFBZSw0Q0FBSztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxXQUFXLHVCQUF1QjtBQUM5RSx5QkFBeUIsK0JBQStCO0FBQ3hEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDRDQUFLLGVBQWUsNENBQUs7QUFDekMsWUFBWSw0Q0FBSyxlQUFlLGdFQUFNLEdBQUcsNExBQTRMO0FBQ3JPLHdDQUF3Qyw0Q0FBSyx5QkFBeUIsU0FBUyxrQkFBa0IsNkJBQTZCLHNDQUFzQyxFQUFFLG1EQUFtRDtBQUN6TjtBQUNBO0FBQ0EsY0FBYyw0Q0FBSyxlQUFlLHFFQUFlLEdBQUcsU0FBUyxvQkFBb0IsRUFBRTtBQUNuRjtBQUNBO0FBQ0Esc0JBQXNCLHdFQUFtQjtBQUN6QztBQUNBO0FBQ0EsQ0FBQyxDQUFDLDRDQUFLO0FBQ1M7QUFDaEIsWUFBWSw4RUFBZTtBQUMzQixXQUFXLDRDQUFLLHVDQUF1QyxVQUFVLE9BQU87QUFDeEUsQ0FBQyxFQUFFO0FBQ0gsdUM7Ozs7Ozs7Ozs7OztBQ3BLQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTkuMzUgMTAuMDRDMTguNjcgNi41OSAxNS42NCA0IDEyIDQgOS4xMSA0IDYuNiA1LjY0IDUuMzUgOC4wNCAyLjM0IDguMzYgMCAxMC45MSAwIDE0YzAgMy4zMSAyLjY5IDYgNiA2aDEzYzIuNzYgMCA1LTIuMjQgNS01IDAtMi42NC0yLjA1LTQuNzgtNC42NS00Ljk2ek0xNCAxM3Y0aC00di00SDdsNS01IDUgNWgtM3pcIlxufSksICdDbG91ZFVwbG9hZCcpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMSAxNWgtMnYtMmgydjJ6bTAtNGgtMlY3aDJ2NnpcIlxufSksICdFcnJvcicpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xyXG5pbXBvcnQgQ2xvdWRVcGxvYWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG91ZFVwbG9hZCc7XHJcbmltcG9ydCBFcnJvckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Vycm9yJztcclxuaW1wb3J0IHsgZGVmYXVsdFRyYW5zbGF0aW9ucyB9IGZyb20gJy4vZGVmYXVsdFRyYW5zbGF0aW9ucyc7XHJcbmltcG9ydCB7IHVzZVVpVHJhbnNsYXRvciB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9uZW50cy9ob29rcyc7XHJcbnZhciBOT19GSUxFX0VSUk9SX0NPREUgPSAxO1xyXG52YXIgQkFEX0VYVEVOU0lPTl9FUlJPUl9DT0RFID0gMjtcclxudmFyIFRPT19CSUdfRVJST1JfQ09ERSA9IDM7XHJcbnZhciBVUExPQURJTkdfRVJST1JfQ09ERSA9IDQ7XHJcbi8qXHJcbiAqIEZJWE1FOiByZXdyaXRlIHRvIGZ1bmN0aW9uYWwgY29tcG9uZW50XHJcbiAqL1xyXG52YXIgSW1hZ2VVcGxvYWQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoSW1hZ2VVcGxvYWQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBJbWFnZVVwbG9hZCgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNVcGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBoYXNFcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGVycm9yVGV4dDogJycsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAwLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgX3RoaXMuaGFzRXh0ZW5zaW9uID0gZnVuY3Rpb24gKGZpbGVOYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuUGFydCA9IF90aGlzLnByb3BzLmFsbG93ZWRFeHRlbnNpb25zXHJcbiAgICAgICAgICAgICAgICA/IF90aGlzLnByb3BzLmFsbG93ZWRFeHRlbnNpb25zLm1hcChmdW5jdGlvbiAoYSkgeyByZXR1cm4gYS50b0xvd2VyQ2FzZSgpOyB9KS5qb2luKCd8JylcclxuICAgICAgICAgICAgICAgIDogJyc7XHJcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gJygnICsgcGF0dGVyblBhcnQucmVwbGFjZSgvXFwuL2csICdcXFxcLicpICsgJykkJztcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAocGF0dGVybiwgJ2knKS50ZXN0KGZpbGVOYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgX3RoaXMuaGFuZGxlRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3JDb2RlKSB7XHJcbiAgICAgICAgICAgIHZhciBlcnJvclRleHQgPSAnJztcclxuICAgICAgICAgICAgc3dpdGNoIChlcnJvckNvZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgTk9fRklMRV9FUlJPUl9DT0RFOlxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yVGV4dCA9IF90aGlzLnByb3BzLnQoX3RoaXMucHJvcHMudHJhbnNsYXRpb25zLm5vRmlsZUVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgQkFEX0VYVEVOU0lPTl9FUlJPUl9DT0RFOlxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yVGV4dCA9IF90aGlzLnByb3BzLnQoX3RoaXMucHJvcHMudHJhbnNsYXRpb25zLmJhZEV4dGVuc2lvbkVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVE9PX0JJR19FUlJPUl9DT0RFOlxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yVGV4dCA9IF90aGlzLnByb3BzLnQoX3RoaXMucHJvcHMudHJhbnNsYXRpb25zLnRvb0JpZ0Vycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVVBMT0FESU5HX0VSUk9SX0NPREU6XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JUZXh0ID0gX3RoaXMucHJvcHMudChfdGhpcy5wcm9wcy50cmFuc2xhdGlvbnMudXBsb2FkaW5nRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBlcnJvclRleHQgPSBfdGhpcy5wcm9wcy50KF90aGlzLnByb3BzLnRyYW5zbGF0aW9ucy51bmtub3duRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIE5lZWQgdG8gZmxpY2sgXCJpc1VwbG9hZGluZ1wiIGJlY2F1c2Ugb3RoZXJ3aXNlIHRoZSBoYW5kbGVyIGRvZXNuJ3QgZmlyZSBwcm9wZXJseVxyXG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGhhc0Vycm9yOiB0cnVlLCBlcnJvclRleHQ6IGVycm9yVGV4dCwgaXNVcGxvYWRpbmc6IHRydWUgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnNldFN0YXRlKHsgaXNVcGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5zZXRTdGF0ZSh7IGhhc0Vycm9yOiBmYWxzZSwgZXJyb3JUZXh0OiAnJyB9KTsgfSwgNTAwMCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBfdGhpcy5oYW5kbGVGaWxlU2VsZWN0ZWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoIWUudGFyZ2V0LmZpbGVzIHx8ICFlLnRhcmdldC5maWxlc1swXSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlRXJyb3IoTk9fRklMRV9FUlJPUl9DT0RFKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgICAgICBpZiAoIV90aGlzLmhhc0V4dGVuc2lvbihmaWxlLm5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVFcnJvcihCQURfRVhURU5TSU9OX0VSUk9SX0NPREUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmaWxlLnNpemUgPiBfdGhpcy5wcm9wcy5tYXhGaWxlU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlRXJyb3IoVE9PX0JJR19FUlJPUl9DT0RFKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMuaW1hZ2VMb2FkZWQpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnJlYWRGaWxlKGZpbGUpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIF90aGlzLnByb3BzLmltYWdlTG9hZGVkKGRhdGEpOyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMuaW1hZ2VVcGxvYWQpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgaXNVcGxvYWRpbmc6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5wcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgIC5pbWFnZVVwbG9hZChmaWxlLCBfdGhpcy5oYW5kbGVSZXBvcnRQcm9ncmVzcylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgcHJvZ3Jlc3M6IHVuZGVmaW5lZCwgaXNVcGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnByb3BzLmltYWdlVXBsb2FkZWQgJiYgX3RoaXMucHJvcHMuaW1hZ2VVcGxvYWRlZChyZXNwKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgaXNVcGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnByb3BzLmltYWdlVXBsb2FkRXJyb3IgJiYgX3RoaXMucHJvcHMuaW1hZ2VVcGxvYWRFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgX3RoaXMuaGFuZGxlRmlsZVVwbG9hZENsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuZmlsZUlucHV0LmNsaWNrKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBfdGhpcy5oYW5kbGVSZXBvcnRQcm9ncmVzcyA9IGZ1bmN0aW9uIChwcm9ncmVzcykgeyByZXR1cm4gX3RoaXMuc2V0U3RhdGUoeyBwcm9ncmVzczogcHJvZ3Jlc3MgfSk7IH07XHJcbiAgICAgICAgX3RoaXMucmVuZGVyQ2hpbGRyZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5zdGF0ZS5pc1VwbG9hZGluZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2lyY3VsYXJQcm9ncmVzcywgeyB2YWx1ZTogX3RoaXMuc3RhdGUucHJvZ3Jlc3MsIHNpemU6IDE5IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5zdGF0ZS5oYXNFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnN0YXRlLmVycm9yVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEVycm9ySWNvbiwgeyBzdHlsZTogeyBtYXJnaW5MZWZ0OiAnOHB4JyB9IH0pKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxyXG4gICAgICAgICAgICAgICAgX3RoaXMucHJvcHMudHJhbnNsYXRpb25zLmJ1dHRvbkNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5wcm9wcy5pY29uKSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBJbWFnZVVwbG9hZC5wcm90b3R5cGUucmVhZEZpbGUgPSBmdW5jdGlvbiAoZmlsZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICAvLyBSZWFkIHRoZSBpbWFnZSB2aWEgRmlsZVJlYWRlciBBUEkgYW5kIHNhdmUgaW1hZ2UgcmVzdWx0IGluIHN0YXRlLlxyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgZmlsZSBuYW1lIHRvIHRoZSBkYXRhIFVSTFxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhVXJsID0gZS50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgZGF0YVVybCA9IGRhdGFVcmwucmVwbGFjZSgnO2Jhc2U2NCcsIFwiO25hbWU9XCIgKyBmaWxlLm5hbWUgKyBcIjtiYXNlNjRcIik7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgZmlsZTogZmlsZSwgZGF0YVVybDogZGF0YVVybCB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgSW1hZ2VVcGxvYWQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgZGlzYWJsZWQ6IHRoaXMuc3RhdGUuaXNVcGxvYWRpbmcsIHZhcmlhbnQ6IFwiY29udGFpbmVkXCIsIGNvbG9yOiB0aGlzLnN0YXRlLmhhc0Vycm9yID8gJ3NlY29uZGFyeScgOiAncHJpbWFyeScsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlRmlsZVVwbG9hZENsaWNrLCBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZSwgc2l6ZTogXCJzbWFsbFwiIH0sIHRoaXMucmVuZGVyQ2hpbGRyZW4oKSksXHJcbiAgICAgICAgICAgICF0aGlzLnN0YXRlLmlzVXBsb2FkaW5nICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyBzdHlsZTogeyBkaXNwbGF5OiAnbm9uZScgfSwgcmVmOiBmdW5jdGlvbiAoZmlsZUlucHV0KSB7IHJldHVybiAoX3RoaXMuZmlsZUlucHV0ID0gZmlsZUlucHV0KTsgfSwgdHlwZTogXCJmaWxlXCIsIG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUZpbGVTZWxlY3RlZCB9KSkpKTtcclxuICAgIH07XHJcbiAgICBJbWFnZVVwbG9hZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChDbG91ZFVwbG9hZEljb24sIHsgc3R5bGU6IHsgbWFyZ2luTGVmdDogJzhweCcgfSB9KSxcclxuICAgICAgICBhbGxvd2VkRXh0ZW5zaW9uczogWydqcGcnLCAnanBlZycsICdwbmcnXSxcclxuICAgICAgICBtYXhGaWxlU2l6ZTogNTI0Mjg4MCxcclxuICAgICAgICB0cmFuc2xhdGlvbnM6IGRlZmF1bHRUcmFuc2xhdGlvbnMsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEltYWdlVXBsb2FkO1xyXG59KFJlYWN0LkNvbXBvbmVudCkpO1xyXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICB2YXIgdCA9IHVzZVVpVHJhbnNsYXRvcigpLnQ7XHJcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJbWFnZVVwbG9hZCwgX19hc3NpZ24oe30sIHByb3BzLCB7IHQ6IHQgfSkpO1xyXG59KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SW1hZ2VVcGxvYWQuanMubWFwIiwiZXhwb3J0IHZhciBkZWZhdWx0VHJhbnNsYXRpb25zID0ge1xyXG4gICAgYnV0dG9uQ29udGVudDogJ1VwbG9hZCBpbWFnZScsXHJcbiAgICBub0ZpbGVFcnJvcjogJ05vIGZpbGUgc2VsZWN0ZWQnLFxyXG4gICAgYmFkRXh0ZW5zaW9uRXJyb3I6ICdCYWQgZmlsZSB0eXBlJyxcclxuICAgIHRvb0JpZ0Vycm9yOiAnVG9vIGJpZycsXHJcbiAgICB1cGxvYWRpbmdFcnJvcjogJ0Vycm9yIHdoaWxlIHVwbG9hZGluZycsXHJcbiAgICB1bmtub3duRXJyb3I6ICdVbmtub3duIGVycm9yJyxcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVmYXVsdFRyYW5zbGF0aW9ucy5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9