(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[14],{

/***/ "../node_modules/react-resizable/build/Resizable.js":
/*!**********************************************************!*\
  !*** ../node_modules/react-resizable/build/Resizable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _reactDraggable = __webpack_require__(/*! react-draggable */ "../node_modules/react-resizable/node_modules/react-draggable/build/cjs/cjs.js");

var _utils = __webpack_require__(/*! ./utils */ "../node_modules/react-resizable/build/utils.js");

var _propTypes = __webpack_require__(/*! ./propTypes */ "../node_modules/react-resizable/build/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Resizable = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Resizable, _React$Component);

  function Resizable() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", undefined);

    _defineProperty(_assertThisInitialized(_this), "lastHandleRect", null);

    _defineProperty(_assertThisInitialized(_this), "slack", null);

    return _this;
  }

  var _proto = Resizable.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.resetData();
  };

  _proto.lockAspectRatio = function lockAspectRatio(width, height, aspectRatio) {
    height = width / aspectRatio;
    width = height * aspectRatio;
    return [width, height];
  };

  _proto.resetData = function resetData() {
    this.lastHandleRect = this.slack = null;
  } // Clamp width and height within provided constraints
  ;

  _proto.runConstraints = function runConstraints(width, height) {
    var _ref = [this.props.minConstraints, this.props.maxConstraints],
        min = _ref[0],
        max = _ref[1];
    if (!min && !max) return [width, height]; // If constraining to min and max, we need to also fit width and height to aspect ratio.

    if (this.props.lockAspectRatio) {
      var resizingHorizontally = height === this.props.height;

      if (resizingHorizontally) {
        var ratio = this.props.width / this.props.height;
        height = width / ratio;
        width = height * ratio;
      } else {
        // Take into account vertical resize with N/S handles on locked aspect
        // ratio. Calculate the change height-first, instead of width-first
        var _ratio = this.props.height / this.props.width;

        width = height / _ratio;
        height = width * _ratio;
      }
    }

    var oldW = width,
        oldH = height; // Add slack to the values used to calculate bound position. This will ensure that if
    // we start removing slack, the element won't react to it right away until it's been
    // completely removed.

    var _ref2 = this.slack || [0, 0],
        slackW = _ref2[0],
        slackH = _ref2[1];

    width += slackW;
    height += slackH;

    if (min) {
      width = Math.max(min[0], width);
      height = Math.max(min[1], height);
    }

    if (max) {
      width = Math.min(max[0], width);
      height = Math.min(max[1], height);
    } // If the width or height changed, we must have introduced some slack. Record it for the next iteration.


    this.slack = [slackW + (oldW - width), slackH + (oldH - height)];
    return [width, height];
  }
  /**
   * Wrapper around drag events to provide more useful data.
   *
   * @param  {String} handlerName Handler name to wrap.
   * @return {Function}           Handler function.
   */
  ;

  _proto.resizeHandler = function resizeHandler(handlerName, axis) {
    var _this2 = this;

    return function (e, _ref3) {
      var node = _ref3.node,
          deltaX = _ref3.deltaX,
          deltaY = _ref3.deltaY;
      // Reset data in case it was left over somehow (should not be possible)
      if (handlerName === 'onResizeStart') _this2.resetData(); // Axis restrictions

      var canDragX = (_this2.props.axis === 'both' || _this2.props.axis === 'x') && axis !== 'n' && axis !== 's';
      var canDragY = (_this2.props.axis === 'both' || _this2.props.axis === 'y') && axis !== 'e' && axis !== 'w'; // No dragging possible.

      if (!canDragX && !canDragY) return; // Decompose axis for later use

      var axisV = axis[0];
      var axisH = axis[axis.length - 1]; // intentionally not axis[1], so that this catches axis === 'w' for example
      // Track the element being dragged to account for changes in position.
      // If a handle's position is changed between callbacks, we need to factor this in to the next callback.
      // Failure to do so will cause the element to "skip" when resized upwards or leftwards.

      var handleRect = node.getBoundingClientRect();

      if (_this2.lastHandleRect != null) {
        // If the handle has repositioned on either axis since last render,
        // we need to increase our callback values by this much.
        // Only checking 'n', 'w' since resizing by 's', 'w' won't affect the overall position on page,
        if (axisH === 'w') {
          var deltaLeftSinceLast = handleRect.left - _this2.lastHandleRect.left;
          deltaX += deltaLeftSinceLast;
        }

        if (axisV === 'n') {
          var deltaTopSinceLast = handleRect.top - _this2.lastHandleRect.top;
          deltaY += deltaTopSinceLast;
        }
      } // Storage of last rect so we know how much it has really moved.


      _this2.lastHandleRect = handleRect; // Reverse delta if using top or left drag handles.

      if (axisH === 'w') deltaX = -deltaX;
      if (axisV === 'n') deltaY = -deltaY; // Update w/h by the deltas. Also factor in transformScale.

      var width = _this2.props.width + (canDragX ? deltaX / _this2.props.transformScale : 0);
      var height = _this2.props.height + (canDragY ? deltaY / _this2.props.transformScale : 0); // Run user-provided constraints.

      var _this2$runConstraints = _this2.runConstraints(width, height);

      width = _this2$runConstraints[0];
      height = _this2$runConstraints[1];
      var dimensionsChanged = width !== _this2.props.width || height !== _this2.props.height; // Call user-supplied callback if present.

      var cb = typeof _this2.props[handlerName] === 'function' ? _this2.props[handlerName] : null; // Don't call 'onResize' if dimensions haven't changed.

      var shouldSkipCb = handlerName === 'onResize' && !dimensionsChanged;

      if (cb && !shouldSkipCb) {
        if (typeof e.persist === 'function') e.persist();
        cb(e, {
          node: node,
          size: {
            width: width,
            height: height
          },
          handle: axis
        });
      } // Reset internal data


      if (handlerName === 'onResizeStop') _this2.resetData();
    };
  };

  _proto.renderResizeHandle = function renderResizeHandle(resizeHandleAxis) {
    var handle = this.props.handle;

    if (handle) {
      if (typeof handle === 'function') {
        return handle(resizeHandleAxis);
      }

      return handle;
    }

    return /*#__PURE__*/_react.default.createElement("span", {
      className: "react-resizable-handle react-resizable-handle-" + resizeHandleAxis
    });
  };

  _proto.render = function render() {
    var _this3 = this;

    // Pass along only props not meant for the `<Resizable>`.`
    // eslint-disable-next-line no-unused-vars
    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        draggableOpts = _this$props.draggableOpts,
        width = _this$props.width,
        height = _this$props.height,
        handle = _this$props.handle,
        handleSize = _this$props.handleSize,
        lockAspectRatio = _this$props.lockAspectRatio,
        axis = _this$props.axis,
        minConstraints = _this$props.minConstraints,
        maxConstraints = _this$props.maxConstraints,
        onResize = _this$props.onResize,
        onResizeStop = _this$props.onResizeStop,
        onResizeStart = _this$props.onResizeStart,
        resizeHandles = _this$props.resizeHandles,
        transformScale = _this$props.transformScale,
        p = _objectWithoutPropertiesLoose(_this$props, ["children", "className", "draggableOpts", "width", "height", "handle", "handleSize", "lockAspectRatio", "axis", "minConstraints", "maxConstraints", "onResize", "onResizeStop", "onResizeStart", "resizeHandles", "transformScale"]); // What we're doing here is getting the child of this element, and cloning it with this element's props.
    // We are then defining its children as:
    // Its original children (resizable's child's children), and
    // One or more draggable handles.


    return (0, _utils.cloneElement)(children, _objectSpread(_objectSpread({}, p), {}, {
      className: (className ? className + " " : '') + "react-resizable",
      children: [].concat(children.props.children, resizeHandles.map(function (handleAxis) {
        return /*#__PURE__*/_react.default.createElement(_reactDraggable.DraggableCore, _extends({}, draggableOpts, {
          key: "resizableHandle-" + handleAxis,
          onStop: _this3.resizeHandler('onResizeStop', handleAxis),
          onStart: _this3.resizeHandler('onResizeStart', handleAxis),
          onDrag: _this3.resizeHandler('onResize', handleAxis)
        }), _this3.renderResizeHandle(handleAxis));
      }))
    }));
  };

  return Resizable;
}(_react.default.Component);

exports.default = Resizable;

_defineProperty(Resizable, "propTypes", _propTypes.resizableProps);

_defineProperty(Resizable, "defaultProps", {
  handleSize: [20, 20],
  lockAspectRatio: false,
  axis: 'both',
  minConstraints: [20, 20],
  maxConstraints: [Infinity, Infinity],
  resizeHandles: ['se'],
  transformScale: 1
});

/***/ }),

/***/ "../node_modules/react-resizable/build/ResizableBox.js":
/*!*************************************************************!*\
  !*** ../node_modules/react-resizable/build/ResizableBox.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _Resizable = _interopRequireDefault(__webpack_require__(/*! ./Resizable */ "../node_modules/react-resizable/build/Resizable.js"));

var _propTypes2 = __webpack_require__(/*! ./propTypes */ "../node_modules/react-resizable/build/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ResizableBox = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ResizableBox, _React$Component);

  function ResizableBox() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {
      width: _this.props.width,
      height: _this.props.height,
      propsWidth: _this.props.width,
      propsHeight: _this.props.height
    });

    _defineProperty(_assertThisInitialized(_this), "onResize", function (e, data) {
      var size = data.size;

      if (_this.props.onResize) {
        e.persist && e.persist();

        _this.setState(size, function () {
          return _this.props.onResize && _this.props.onResize(e, data);
        });
      } else {
        _this.setState(size);
      }
    });

    return _this;
  }

  ResizableBox.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    // If parent changes height/width, set that in our state.
    if (state.propsWidth !== props.width || state.propsHeight !== props.height) {
      return {
        width: props.width,
        height: props.height,
        propsWidth: props.width,
        propsHeight: props.height
      };
    }

    return null;
  };

  var _proto = ResizableBox.prototype;

  _proto.render = function render() {
    // Basic wrapper around a Resizable instance.
    // If you use Resizable directly, you are responsible for updating the child component
    // with a new width and height.
    var _this$props = this.props,
        handle = _this$props.handle,
        handleSize = _this$props.handleSize,
        onResize = _this$props.onResize,
        onResizeStart = _this$props.onResizeStart,
        onResizeStop = _this$props.onResizeStop,
        draggableOpts = _this$props.draggableOpts,
        minConstraints = _this$props.minConstraints,
        maxConstraints = _this$props.maxConstraints,
        lockAspectRatio = _this$props.lockAspectRatio,
        axis = _this$props.axis,
        width = _this$props.width,
        height = _this$props.height,
        resizeHandles = _this$props.resizeHandles,
        style = _this$props.style,
        transformScale = _this$props.transformScale,
        props = _objectWithoutPropertiesLoose(_this$props, ["handle", "handleSize", "onResize", "onResizeStart", "onResizeStop", "draggableOpts", "minConstraints", "maxConstraints", "lockAspectRatio", "axis", "width", "height", "resizeHandles", "style", "transformScale"]);

    return /*#__PURE__*/React.createElement(_Resizable.default, {
      axis: axis,
      draggableOpts: draggableOpts,
      handle: handle,
      handleSize: handleSize,
      height: this.state.height,
      lockAspectRatio: lockAspectRatio,
      maxConstraints: maxConstraints,
      minConstraints: minConstraints,
      onResizeStart: onResizeStart,
      onResize: this.onResize,
      onResizeStop: onResizeStop,
      resizeHandles: resizeHandles,
      transformScale: transformScale,
      width: this.state.width
    }, /*#__PURE__*/React.createElement("div", _extends({}, props, {
      style: _objectSpread(_objectSpread({}, style), {}, {
        width: this.state.width + 'px',
        height: this.state.height + 'px'
      })
    })));
  };

  return ResizableBox;
}(React.Component);

exports.default = ResizableBox;

_defineProperty(ResizableBox, "propTypes", _objectSpread(_objectSpread({}, _propTypes2.resizableProps), {}, {
  children: _propTypes.default.element
}));

/***/ }),

/***/ "../node_modules/react-resizable/build/propTypes.js":
/*!**********************************************************!*\
  !*** ../node_modules/react-resizable/build/propTypes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.resizableProps = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _reactDraggable = __webpack_require__(/*! react-draggable */ "../node_modules/react-resizable/node_modules/react-draggable/build/cjs/cjs.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resizableProps = {
  /*
  * Restricts resizing to a particular axis (default: 'both')
  * 'both' - allows resizing by width or height
  * 'x' - only allows the width to be changed
  * 'y' - only allows the height to be changed
  * 'none' - disables resizing altogether
  * */
  axis: _propTypes.default.oneOf(['both', 'x', 'y', 'none']),
  className: _propTypes.default.string,

  /*
  * Require that one and only one child be present.
  * */
  children: _propTypes.default.element.isRequired,

  /*
  * These will be passed wholesale to react-draggable's DraggableCore
  * */
  draggableOpts: _propTypes.default.shape({
    allowAnyClick: _propTypes.default.bool,
    cancel: _propTypes.default.string,
    children: _propTypes.default.node,
    disabled: _propTypes.default.bool,
    enableUserSelectHack: _propTypes.default.bool,
    offsetParent: _propTypes.default.node,
    grid: _propTypes.default.arrayOf(_propTypes.default.number),
    handle: _propTypes.default.string,
    nodeRef: _propTypes.default.object,
    onStart: _propTypes.default.func,
    onDrag: _propTypes.default.func,
    onStop: _propTypes.default.func,
    onMouseDown: _propTypes.default.func,
    scale: _propTypes.default.number
  }),

  /*
  * Initial height
  * */
  height: _propTypes.default.number.isRequired,

  /*
  * Customize cursor resize handle
  * */
  handle: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]),

  /*
  * If you change this, be sure to update your css
  * */
  handleSize: _propTypes.default.arrayOf(_propTypes.default.number),
  lockAspectRatio: _propTypes.default.bool,

  /*
  * Max X & Y measure
  * */
  maxConstraints: _propTypes.default.arrayOf(_propTypes.default.number),

  /*
  * Min X & Y measure
  * */
  minConstraints: _propTypes.default.arrayOf(_propTypes.default.number),

  /*
  * Called on stop resize event
  * */
  onResizeStop: _propTypes.default.func,

  /*
  * Called on start resize event
  * */
  onResizeStart: _propTypes.default.func,

  /*
  * Called on resize event
  * */
  onResize: _propTypes.default.func,

  /*
  * Defines which resize handles should be rendered (default: 'se')
  * 's' - South handle (bottom-center)
  * 'w' - West handle (left-center)
  * 'e' - East handle (right-center)
  * 'n' - North handle (top-center)
  * 'sw' - Southwest handle (bottom-left)
  * 'nw' - Northwest handle (top-left)
  * 'se' - Southeast handle (bottom-right)
  * 'ne' - Northeast handle (top-center)
  * */
  resizeHandles: _propTypes.default.arrayOf(_propTypes.default.oneOf(['s', 'w', 'e', 'n', 'sw', 'nw', 'se', 'ne'])),

  /*
  * If `transform: scale(n)` is set on the parent, this should be set to `n`.
  * */
  transformScale: _propTypes.default.number,

  /*
   * Initial width
   */
  width: _propTypes.default.number.isRequired
};
exports.resizableProps = resizableProps;

/***/ }),

/***/ "../node_modules/react-resizable/build/utils.js":
/*!******************************************************!*\
  !*** ../node_modules/react-resizable/build/utils.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cloneElement = cloneElement;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// React.addons.cloneWithProps look-alike that merges style & className.
function cloneElement(element, props) {
  if (props.style && element.props.style) {
    props.style = _objectSpread(_objectSpread({}, element.props.style), props.style);
  }

  if (props.className && element.props.className) {
    props.className = element.props.className + " " + props.className;
  }

  return /*#__PURE__*/_react.default.cloneElement(element, props);
}

/***/ }),

/***/ "../node_modules/react-resizable/index.js":
/*!************************************************!*\
  !*** ../node_modules/react-resizable/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function() {
  throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable");
};

module.exports.Resizable = __webpack_require__(/*! ./build/Resizable */ "../node_modules/react-resizable/build/Resizable.js").default;
module.exports.ResizableBox = __webpack_require__(/*! ./build/ResizableBox */ "../node_modules/react-resizable/build/ResizableBox.js").default;


/***/ }),

/***/ "../node_modules/react-resizable/node_modules/react-draggable/build/cjs/Draggable.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/react-resizable/node_modules/react-draggable/build/cjs/Draggable.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DraggableCore", {
  enumerable: true,
  get: function get() {
    return _DraggableCore.default;
  }
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js"));

var _clsx2 = _interopRequireDefault(__webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js"));

var _domFns = __webpack_require__(/*! ./utils/domFns */ "../node_modules/react-resizable/node_modules/react-draggable/build/cjs/utils/domFns.js");

var _positionFns = __webpack_require__(/*! ./utils/positionFns */ "../node_modules/react-resizable/node_modules/react-draggable/build/cjs/utils/positionFns.js");

var _shims = __webpack_require__(/*! ./utils/shims */ "../node_modules/react-resizable/node_modules/react-draggable/build/cjs/utils/shims.js");

var _DraggableCore = _interopRequireDefault(__webpack_require__(/*! ./DraggableCore */ "../node_modules/react-resizable/node_modules/react-draggable/build/cjs/DraggableCore.js"));

var _log = _interopRequireDefault(__webpack_require__(/*! ./utils/log */ "../node_modules/react-resizable/node_modules/react-draggable/build/cjs/utils/log.js"));

var _excluded = ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
// Define <Draggable>
//
var Draggable = /*#__PURE__*/function (_React$Component) {
  _inherits(Draggable, _React$Component);

  var _super = _createSuper(Draggable);

  function Draggable(props
  /*: DraggableProps*/
  ) {
    var _this;

    _classCallCheck(this, Draggable);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onDragStart", function (e, coreData) {
      (0, _log.default)('Draggable: onDragStart: %j', coreData); // Short-circuit if user's callback killed it.

      var shouldStart = _this.props.onStart(e, (0, _positionFns.createDraggableData)(_assertThisInitialized(_this), coreData)); // Kills start event on core as well, so move handlers are never bound.


      if (shouldStart === false) return false;

      _this.setState({
        dragging: true,
        dragged: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDrag", function (e, coreData) {
      if (!_this.state.dragging) return false;
      (0, _log.default)('Draggable: onDrag: %j', coreData);
      var uiData = (0, _positionFns.createDraggableData)(_assertThisInitialized(_this), coreData);
      var newState
      /*: $Shape<DraggableState>*/
      = {
        x: uiData.x,
        y: uiData.y
      }; // Keep within bounds.

      if (_this.props.bounds) {
        // Save original x and y.
        var x = newState.x,
            y = newState.y; // Add slack to the values used to calculate bound position. This will ensure that if
        // we start removing slack, the element won't react to it right away until it's been
        // completely removed.

        newState.x += _this.state.slackX;
        newState.y += _this.state.slackY; // Get bound position. This will ceil/floor the x and y within the boundaries.

        var _getBoundPosition = (0, _positionFns.getBoundPosition)(_assertThisInitialized(_this), newState.x, newState.y),
            _getBoundPosition2 = _slicedToArray(_getBoundPosition, 2),
            newStateX = _getBoundPosition2[0],
            newStateY = _getBoundPosition2[1];

        newState.x = newStateX;
        newState.y = newStateY; // Recalculate slack by noting how much was shaved by the boundPosition handler.

        newState.slackX = _this.state.slackX + (x - newState.x);
        newState.slackY = _this.state.slackY + (y - newState.y); // Update the event we fire to reflect what really happened after bounds took effect.

        uiData.x = newState.x;
        uiData.y = newState.y;
        uiData.deltaX = newState.x - _this.state.x;
        uiData.deltaY = newState.y - _this.state.y;
      } // Short-circuit if user's callback killed it.


      var shouldUpdate = _this.props.onDrag(e, uiData);

      if (shouldUpdate === false) return false;

      _this.setState(newState);
    });

    _defineProperty(_assertThisInitialized(_this), "onDragStop", function (e, coreData) {
      if (!_this.state.dragging) return false; // Short-circuit if user's callback killed it.

      var shouldContinue = _this.props.onStop(e, (0, _positionFns.createDraggableData)(_assertThisInitialized(_this), coreData));

      if (shouldContinue === false) return false;
      (0, _log.default)('Draggable: onDragStop: %j', coreData);
      var newState
      /*: $Shape<DraggableState>*/
      = {
        dragging: false,
        slackX: 0,
        slackY: 0
      }; // If this is a controlled component, the result of this operation will be to
      // revert back to the old position. We expect a handler on `onDragStop`, at the least.

      var controlled = Boolean(_this.props.position);

      if (controlled) {
        var _this$props$position = _this.props.position,
            x = _this$props$position.x,
            y = _this$props$position.y;
        newState.x = x;
        newState.y = y;
      }

      _this.setState(newState);
    });

    _this.state = {
      // Whether or not we are currently dragging.
      dragging: false,
      // Whether or not we have been dragged before.
      dragged: false,
      // Current transform x and y.
      x: props.position ? props.position.x : props.defaultPosition.x,
      y: props.position ? props.position.y : props.defaultPosition.y,
      prevPropsPosition: _objectSpread({}, props.position),
      // Used for compensating for out-of-bounds drags
      slackX: 0,
      slackY: 0,
      // Can only determine if SVG after mounting
      isElementSVG: false
    };

    if (props.position && !(props.onDrag || props.onStop)) {
      // eslint-disable-next-line no-console
      console.warn('A `position` was applied to this <Draggable>, without drag handlers. This will make this ' + 'component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the ' + '`position` of this element.');
    }

    return _this;
  }

  _createClass(Draggable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Check to see if the element passed is an instanceof SVGElement
      if (typeof window.SVGElement !== 'undefined' && this.findDOMNode() instanceof window.SVGElement) {
        this.setState({
          isElementSVG: true
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.setState({
        dragging: false
      }); // prevents invariant if unmounted while dragging
    } // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.

  }, {
    key: "findDOMNode",
    value: function findDOMNode()
    /*: ?HTMLElement*/
    {
      var _this$props$nodeRef$c, _this$props, _this$props$nodeRef;

      return (_this$props$nodeRef$c = (_this$props = this.props) === null || _this$props === void 0 ? void 0 : (_this$props$nodeRef = _this$props.nodeRef) === null || _this$props$nodeRef === void 0 ? void 0 : _this$props$nodeRef.current) !== null && _this$props$nodeRef$c !== void 0 ? _this$props$nodeRef$c : _reactDom.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function render()
    /*: ReactElement<any>*/
    {
      var _clsx;

      var _this$props2 = this.props,
          axis = _this$props2.axis,
          bounds = _this$props2.bounds,
          children = _this$props2.children,
          defaultPosition = _this$props2.defaultPosition,
          defaultClassName = _this$props2.defaultClassName,
          defaultClassNameDragging = _this$props2.defaultClassNameDragging,
          defaultClassNameDragged = _this$props2.defaultClassNameDragged,
          position = _this$props2.position,
          positionOffset = _this$props2.positionOffset,
          scale = _this$props2.scale,
          draggableCoreProps = _objectWithoutProperties(_this$props2, _excluded);

      var style = {};
      var svgTransform = null; // If this is controlled, we don't want to move it - unless it's dragging.

      var controlled = Boolean(position);
      var draggable = !controlled || this.state.dragging;
      var validPosition = position || defaultPosition;
      var transformOpts = {
        // Set left if horizontal drag is enabled
        x: (0, _positionFns.canDragX)(this) && draggable ? this.state.x : validPosition.x,
        // Set top if vertical drag is enabled
        y: (0, _positionFns.canDragY)(this) && draggable ? this.state.y : validPosition.y
      }; // If this element was SVG, we use the `transform` attribute.

      if (this.state.isElementSVG) {
        svgTransform = (0, _domFns.createSVGTransform)(transformOpts, positionOffset);
      } else {
        // Add a CSS transform to move the element around. This allows us to move the element around
        // without worrying about whether or not it is relatively or absolutely positioned.
        // If the item you are dragging already has a transform set, wrap it in a <span> so <Draggable>
        // has a clean slate.
        style = (0, _domFns.createCSSTransform)(transformOpts, positionOffset);
      } // Mark with class while dragging


      var className = (0, _clsx2.default)(children.props.className || '', defaultClassName, (_clsx = {}, _defineProperty(_clsx, defaultClassNameDragging, this.state.dragging), _defineProperty(_clsx, defaultClassNameDragged, this.state.dragged), _clsx)); // Reuse the child provided
      // This makes it flexible to use whatever element is wanted (div, ul, etc)

      return /*#__PURE__*/React.createElement(_DraggableCore.default, _extends({}, draggableCoreProps, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /*#__PURE__*/React.cloneElement(React.Children.only(children), {
        className: className,
        style: _objectSpread(_objectSpread({}, children.props.style), style),
        transform: svgTransform
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: // React 16.3+
    // Arity (props, state)
    function getDerivedStateFromProps(_ref, _ref2)
    /*: ?$Shape<DraggableState>*/
    {
      var position = _ref.position;
      var prevPropsPosition = _ref2.prevPropsPosition;

      // Set x/y if a new position is provided in props that is different than the previous.
      if (position && (!prevPropsPosition || position.x !== prevPropsPosition.x || position.y !== prevPropsPosition.y)) {
        (0, _log.default)('Draggable: getDerivedStateFromProps %j', {
          position: position,
          prevPropsPosition: prevPropsPosition
        });
        return {
          x: position.x,
          y: position.y,
          prevPropsPosition: _objectSpread({}, position)
        };
      }

      return null;
    }
  }]);

  return Draggable;
}(React.Component);

exports.default = Draggable;

_defineProperty(Draggable, "displayName", 'Draggable');

_defineProperty(Draggable, "propTypes", _objectSpread(_objectSpread({}, _DraggableCore.default.propTypes), {}, {
  /**
   * `axis` determines which axis the draggable can move.
   *
   *  Note that all callbacks will still return data as normal. This only
   *  controls flushing to the DOM.
   *
   * 'both' allows movement horizontally and vertically.
   * 'x' limits movement to horizontal axis.
   * 'y' limits movement to vertical axis.
   * 'none' limits all movement.
   *
   * Defaults to 'both'.
   */
  axis: _propTypes.default.oneOf(['both', 'x', 'y', 'none']),

  /**
   * `bounds` determines the range of movement available to the element.
   * Available values are:
   *
   * 'parent' restricts movement within the Draggable's parent node.
   *
   * Alternatively, pass an object with the following properties, all of which are optional:
   *
   * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
   *
   * All values are in px.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable bounds={{right: 300, bottom: 300}}>
   *              <div>Content</div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  bounds: _propTypes.default.oneOfType([_propTypes.default.shape({
    left: _propTypes.default.number,
    right: _propTypes.default.number,
    top: _propTypes.default.number,
    bottom: _propTypes.default.number
  }), _propTypes.default.string, _propTypes.default.oneOf([false])]),
  defaultClassName: _propTypes.default.string,
  defaultClassNameDragging: _propTypes.default.string,
  defaultClassNameDragged: _propTypes.default.string,

  /**
   * `defaultPosition` specifies the x and y that the dragged item should start at
   *
   * Example:
   *
   * ```jsx
   *      let App = React.createClass({
   *          render: function () {
   *              return (
   *                  <Draggable defaultPosition={{x: 25, y: 25}}>
   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
   *                  </Draggable>
   *              );
   *          }
   *      });
   * ```
   */
  defaultPosition: _propTypes.default.shape({
    x: _propTypes.default.number,
    y: _propTypes.default.number
  }),
  positionOffset: _propTypes.default.shape({
    x: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
    y: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
  }),

  /**
   * `position`, if present, defines the current position of the element.
   *
   *  This is similar to how form elements in React work - if no `position` is supplied, the component
   *  is uncontrolled.
   *
   * Example:
   *
   * ```jsx
   *      let App = React.createClass({
   *          render: function () {
   *              return (
   *                  <Draggable position={{x: 25, y: 25}}>
   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
   *                  </Draggable>
   *              );
   *          }
   *      });
   * ```
   */
  position: _propTypes.default.shape({
    x: _propTypes.default.number,
    y: _propTypes.default.number
  }),

  /**
   * These properties should be defined on the child, not here.
   */
  className: _shims.dontSetMe,
  style: _shims.dontSetMe,
  transform: _shims.dontSetMe
}));

_defineProperty(Draggable, "defaultProps", _objectSpread(_objectSpread({}, _DraggableCore.default.defaultProps), {}, {
  axis: 'both',
  bounds: false,
  defaultClassName: 'react-draggable',
  defaultClassNameDragging: 'react-draggable-dragging',
  defaultClassNameDragged: 'react-draggable-dragged',
  defaultPosition: {
    x: 0,
    y: 0
  },
  scale: 1
}));

/***/ }),

/***/ "../node_modules/react-resizable/node_modules/react-draggable/build/cjs/DraggableCore.js":
/*!***********************************************************************************************!*\
  !*** ../node_modules/react-resizable/node_modules/react-draggable/build/cjs/DraggableCore.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js"));

var _domFns = __webpack_require__(/*! ./utils/domFns */ "../node_modules/react-resizable/node_modules/react-draggable/build/cjs/utils/domFns.js");

var _positionFns = __webpack_require__(/*! ./utils/positionFns */ "../node_modules/react-resizable/node_modules/react-draggable/build/cjs/utils/positionFns.js");

var _shims = __webpack_require__(/*! ./utils/shims */ "../node_modules/react-resizable/node_modules/react-draggable/build/cjs/utils/shims.js");

var _log = _interopRequireDefault(__webpack_require__(/*! ./utils/log */ "../node_modules/react-resizable/node_modules/react-draggable/build/cjs/utils/log.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Simple abstraction for dragging events names.
var eventsFor = {
  touch: {
    start: 'touchstart',
    move: 'touchmove',
    stop: 'touchend'
  },
  mouse: {
    start: 'mousedown',
    move: 'mousemove',
    stop: 'mouseup'
  }
}; // Default to mouse events.

var dragEventFor = eventsFor.mouse;
/*:: type DraggableCoreState = {
  dragging: boolean,
  lastX: number,
  lastY: number,
  touchIdentifier: ?number
};*/

/*:: export type DraggableData = {
  node: HTMLElement,
  x: number, y: number,
  deltaX: number, deltaY: number,
  lastX: number, lastY: number,
};*/

/*:: export type DraggableEventHandler = (e: MouseEvent, data: DraggableData) => void | false;*/

/*:: export type ControlPosition = {x: number, y: number};*/

/*:: export type PositionOffsetControlPosition = {x: number|string, y: number|string};*/

/*:: export type DraggableCoreDefaultProps = {
  allowAnyClick: boolean,
  disabled: boolean,
  enableUserSelectHack: boolean,
  onStart: DraggableEventHandler,
  onDrag: DraggableEventHandler,
  onStop: DraggableEventHandler,
  onMouseDown: (e: MouseEvent) => void,
  scale: number,
};*/

/*:: export type DraggableCoreProps = {
  ...DraggableCoreDefaultProps,
  cancel: string,
  children: ReactElement<any>,
  offsetParent: HTMLElement,
  grid: [number, number],
  handle: string,
  nodeRef?: ?React.ElementRef<any>,
};*/

//
// Define <DraggableCore>.
//
// <DraggableCore> is for advanced usage of <Draggable>. It maintains minimal internal state so it can
// work well with libraries that require more control over the element.
//
var DraggableCore = /*#__PURE__*/function (_React$Component) {
  _inherits(DraggableCore, _React$Component);

  var _super = _createSuper(DraggableCore);

  function DraggableCore() {
    var _this;

    _classCallCheck(this, DraggableCore);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      dragging: false,
      // Used while dragging to determine deltas.
      lastX: NaN,
      lastY: NaN,
      touchIdentifier: null
    });

    _defineProperty(_assertThisInitialized(_this), "mounted", false);

    _defineProperty(_assertThisInitialized(_this), "handleDragStart", function (e) {
      // Make it possible to attach event handlers on top of this one.
      _this.props.onMouseDown(e); // Only accept left-clicks.


      if (!_this.props.allowAnyClick && typeof e.button === 'number' && e.button !== 0) return false; // Get nodes. Be sure to grab relative document (could be iframed)

      var thisNode = _this.findDOMNode();

      if (!thisNode || !thisNode.ownerDocument || !thisNode.ownerDocument.body) {
        throw new Error('<DraggableCore> not mounted on DragStart!');
      }

      var ownerDocument = thisNode.ownerDocument; // Short circuit if handle or cancel prop was provided and selector doesn't match.

      if (_this.props.disabled || !(e.target instanceof ownerDocument.defaultView.Node) || _this.props.handle && !(0, _domFns.matchesSelectorAndParentsTo)(e.target, _this.props.handle, thisNode) || _this.props.cancel && (0, _domFns.matchesSelectorAndParentsTo)(e.target, _this.props.cancel, thisNode)) {
        return;
      } // Prevent scrolling on mobile devices, like ipad/iphone.
      // Important that this is after handle/cancel.


      if (e.type === 'touchstart') e.preventDefault(); // Set touch identifier in component state if this is a touch event. This allows us to
      // distinguish between individual touches on multitouch screens by identifying which
      // touchpoint was set to this element.

      var touchIdentifier = (0, _domFns.getTouchIdentifier)(e);

      _this.setState({
        touchIdentifier: touchIdentifier
      }); // Get the current drag point from the event. This is used as the offset.


      var position = (0, _positionFns.getControlPosition)(e, touchIdentifier, _assertThisInitialized(_this));
      if (position == null) return; // not possible but satisfies flow

      var x = position.x,
          y = position.y; // Create an event object with all the data parents need to make a decision here.

      var coreEvent = (0, _positionFns.createCoreData)(_assertThisInitialized(_this), x, y);
      (0, _log.default)('DraggableCore: handleDragStart: %j', coreEvent); // Call event handler. If it returns explicit false, cancel.

      (0, _log.default)('calling', _this.props.onStart);

      var shouldUpdate = _this.props.onStart(e, coreEvent);

      if (shouldUpdate === false || _this.mounted === false) return; // Add a style to the body to disable user-select. This prevents text from
      // being selected all over the page.

      if (_this.props.enableUserSelectHack) (0, _domFns.addUserSelectStyles)(ownerDocument); // Initiate dragging. Set the current x and y as offsets
      // so we know how much we've moved during the drag. This allows us
      // to drag elements around even if they have been moved, without issue.

      _this.setState({
        dragging: true,
        lastX: x,
        lastY: y
      }); // Add events to the document directly so we catch when the user's mouse/touch moves outside of
      // this element. We use different events depending on whether or not we have detected that this
      // is a touch-capable device.


      (0, _domFns.addEvent)(ownerDocument, dragEventFor.move, _this.handleDrag);
      (0, _domFns.addEvent)(ownerDocument, dragEventFor.stop, _this.handleDragStop);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDrag", function (e) {
      // Get the current drag point from the event. This is used as the offset.
      var position = (0, _positionFns.getControlPosition)(e, _this.state.touchIdentifier, _assertThisInitialized(_this));
      if (position == null) return;
      var x = position.x,
          y = position.y; // Snap to grid if prop has been provided

      if (Array.isArray(_this.props.grid)) {
        var deltaX = x - _this.state.lastX,
            deltaY = y - _this.state.lastY;

        var _snapToGrid = (0, _positionFns.snapToGrid)(_this.props.grid, deltaX, deltaY);

        var _snapToGrid2 = _slicedToArray(_snapToGrid, 2);

        deltaX = _snapToGrid2[0];
        deltaY = _snapToGrid2[1];
        if (!deltaX && !deltaY) return; // skip useless drag

        x = _this.state.lastX + deltaX, y = _this.state.lastY + deltaY;
      }

      var coreEvent = (0, _positionFns.createCoreData)(_assertThisInitialized(_this), x, y);
      (0, _log.default)('DraggableCore: handleDrag: %j', coreEvent); // Call event handler. If it returns explicit false, trigger end.

      var shouldUpdate = _this.props.onDrag(e, coreEvent);

      if (shouldUpdate === false || _this.mounted === false) {
        try {
          // $FlowIgnore
          _this.handleDragStop(new MouseEvent('mouseup'));
        } catch (err) {
          // Old browsers
          var event = ((document.createEvent('MouseEvents')
          /*: any*/
          )
          /*: MouseTouchEvent*/
          ); // I see why this insanity was deprecated
          // $FlowIgnore

          event.initMouseEvent('mouseup', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

          _this.handleDragStop(event);
        }

        return;
      }

      _this.setState({
        lastX: x,
        lastY: y
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDragStop", function (e) {
      if (!_this.state.dragging) return;
      var position = (0, _positionFns.getControlPosition)(e, _this.state.touchIdentifier, _assertThisInitialized(_this));
      if (position == null) return;
      var x = position.x,
          y = position.y;
      var coreEvent = (0, _positionFns.createCoreData)(_assertThisInitialized(_this), x, y); // Call event handler

      var shouldContinue = _this.props.onStop(e, coreEvent);

      if (shouldContinue === false || _this.mounted === false) return false;

      var thisNode = _this.findDOMNode();

      if (thisNode) {
        // Remove user-select hack
        if (_this.props.enableUserSelectHack) (0, _domFns.removeUserSelectStyles)(thisNode.ownerDocument);
      }

      (0, _log.default)('DraggableCore: handleDragStop: %j', coreEvent); // Reset the el.

      _this.setState({
        dragging: false,
        lastX: NaN,
        lastY: NaN
      });

      if (thisNode) {
        // Remove event handlers
        (0, _log.default)('DraggableCore: Removing handlers');
        (0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.move, _this.handleDrag);
        (0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.stop, _this.handleDragStop);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (e) {
      dragEventFor = eventsFor.mouse; // on touchscreen laptops we could switch back to mouse

      return _this.handleDragStart(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function (e) {
      dragEventFor = eventsFor.mouse;
      return _this.handleDragStop(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchStart", function (e) {
      // We're on a touch device now, so change the event handlers
      dragEventFor = eventsFor.touch;
      return _this.handleDragStart(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchEnd", function (e) {
      // We're on a touch device now, so change the event handlers
      dragEventFor = eventsFor.touch;
      return _this.handleDragStop(e);
    });

    return _this;
  }

  _createClass(DraggableCore, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true; // Touch handlers must be added with {passive: false} to be cancelable.
      // https://developers.google.com/web/updates/2017/01/scrolling-intervention

      var thisNode = this.findDOMNode();

      if (thisNode) {
        (0, _domFns.addEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, {
          passive: false
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false; // Remove any leftover event handlers. Remove both touch and mouse handlers in case
      // some browser quirk caused a touch event to fire during a mouse move, or vice versa.

      var thisNode = this.findDOMNode();

      if (thisNode) {
        var ownerDocument = thisNode.ownerDocument;
        (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.move, this.handleDrag);
        (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.move, this.handleDrag);
        (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
        (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
        (0, _domFns.removeEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, {
          passive: false
        });
        if (this.props.enableUserSelectHack) (0, _domFns.removeUserSelectStyles)(ownerDocument);
      }
    } // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.

  }, {
    key: "findDOMNode",
    value: function findDOMNode()
    /*: ?HTMLElement*/
    {
      var _this$props$nodeRef$c, _this$props, _this$props$nodeRef;

      return (_this$props$nodeRef$c = (_this$props = this.props) === null || _this$props === void 0 ? void 0 : (_this$props$nodeRef = _this$props.nodeRef) === null || _this$props$nodeRef === void 0 ? void 0 : _this$props$nodeRef.current) !== null && _this$props$nodeRef$c !== void 0 ? _this$props$nodeRef$c : _reactDom.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function render()
    /*: React.Element<any>*/
    {
      // Reuse the child provided
      // This makes it flexible to use whatever element is wanted (div, ul, etc)
      return /*#__PURE__*/React.cloneElement(React.Children.only(this.props.children), {
        // Note: mouseMove handler is attached to document so it will still function
        // when the user drags quickly and leaves the bounds of the element.
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        // onTouchStart is added on `componentDidMount` so they can be added with
        // {passive: false}, which allows it to cancel. See
        // https://developers.google.com/web/updates/2017/01/scrolling-intervention
        onTouchEnd: this.onTouchEnd
      });
    }
  }]);

  return DraggableCore;
}(React.Component);

exports.default = DraggableCore;

_defineProperty(DraggableCore, "displayName", 'DraggableCore');

_defineProperty(DraggableCore, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: _propTypes.default.bool,

  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: _propTypes.default.bool,

  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: _propTypes.default.bool,

  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function offsetParent(props
  /*: DraggableCoreProps*/
  , propName
  /*: $Keys<DraggableCoreProps>*/
  ) {
    if (props[propName] && props[propName].nodeType !== 1) {
      throw new Error('Draggable\'s offsetParent must be a DOM Node.');
    }
  },

  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: _propTypes.default.arrayOf(_propTypes.default.number),

  /**
   * `handle` specifies a selector to be used as the handle that initiates drag.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable handle=".handle">
   *              <div>
   *                  <div className="handle">Click me to drag</div>
   *                  <div>This is some other content</div>
   *              </div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  handle: _propTypes.default.string,

  /**
   * `cancel` specifies a selector to be used to prevent drag initialization.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *           return(
   *               <Draggable cancel=".cancel">
   *                   <div>
   *                     <div className="cancel">You can't drag from here</div>
   *                     <div>Dragging here works fine</div>
   *                   </div>
   *               </Draggable>
   *           );
   *       }
   *   });
   * ```
   */
  cancel: _propTypes.default.string,

  /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
   * Unfortunately, in order for <Draggable> to work properly, we need raw access
   * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
   * as in this example:
   *
   * function MyComponent() {
   *   const nodeRef = React.useRef(null);
   *   return (
   *     <Draggable nodeRef={nodeRef}>
   *       <div ref={nodeRef}>Example Target</div>
   *     </Draggable>
   *   );
   * }
   *
   * This can be used for arbitrarily nested components, so long as the ref ends up
   * pointing to the actual child DOM node and not a custom component.
   */
  nodeRef: _propTypes.default.object,

  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: _propTypes.default.func,

  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: _propTypes.default.func,

  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: _propTypes.default.func,

  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: _propTypes.default.func,

  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: _propTypes.default.number,

  /**
   * These properties should be defined on the child, not here.
   */
  className: _shims.dontSetMe,
  style: _shims.dontSetMe,
  transform: _shims.dontSetMe
});

_defineProperty(DraggableCore, "defaultProps", {
  allowAnyClick: false,
  // by default only accept left click
  disabled: false,
  enableUserSelectHack: true,
  onStart: function onStart() {},
  onDrag: function onDrag() {},
  onStop: function onStop() {},
  onMouseDown: function onMouseDown() {},
  scale: 1
});

/***/ }),

/***/ "../node_modules/react-resizable/node_modules/react-draggable/build/cjs/cjs.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/react-resizable/node_modules/react-draggable/build/cjs/cjs.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(/*! ./Draggable */ "../node_modules/react-resizable/node_modules/react-draggable/build/cjs/Draggable.js"),
    Draggable = _require.default,
    DraggableCore = _require.DraggableCore; // Previous versions of this lib exported <Draggable> as the root export. As to no-// them, or TypeScript, we export *both* as the root and as 'default'.
// See https://github.com/mzabriskie/react-draggable/pull/254
// and https://github.com/mzabriskie/react-draggable/issues/266


module.exports = Draggable;
module.exports.default = Draggable;
module.exports.DraggableCore = DraggableCore;

/***/ }),

/***/ "../node_modules/react-resizable/node_modules/react-draggable/build/cjs/utils/domFns.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/react-resizable/node_modules/react-draggable/build/cjs/utils/domFns.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchesSelector = matchesSelector;
exports.matchesSelectorAndParentsTo = matchesSelectorAndParentsTo;
exports.addEvent = addEvent;
exports.removeEvent = removeEvent;
exports.outerHeight = outerHeight;
exports.outerWidth = outerWidth;
exports.innerHeight = innerHeight;
exports.innerWidth = innerWidth;
exports.offsetXYFromParent = offsetXYFromParent;
exports.createCSSTransform = createCSSTransform;
exports.createSVGTransform = createSVGTransform;
exports.getTranslation = getTranslation;
exports.getTouch = getTouch;
exports.getTouchIdentifier = getTouchIdentifier;
exports.addUserSelectStyles = addUserSelectStyles;
exports.removeUserSelectStyles = removeUserSelectStyles;
exports.addClassName = addClassName;
exports.removeClassName = removeClassName;

var _shims = __webpack_require__(/*! ./shims */ "../node_modules/react-resizable/node_modules/react-draggable/build/cjs/utils/shims.js");

var _getPrefix = _interopRequireWildcard(__webpack_require__(/*! ./getPrefix */ "../node_modules/react-resizable/node_modules/react-draggable/build/cjs/utils/getPrefix.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var matchesSelectorFunc = '';

function matchesSelector(el
/*: Node*/
, selector
/*: string*/
)
/*: boolean*/
{
  if (!matchesSelectorFunc) {
    matchesSelectorFunc = (0, _shims.findInArray)(['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'], function (method) {
      // $FlowIgnore: Doesn't think elements are indexable
      return (0, _shims.isFunction)(el[method]);
    });
  } // Might not be found entirely (not an Element?) - in that case, bail
  // $FlowIgnore: Doesn't think elements are indexable


  if (!(0, _shims.isFunction)(el[matchesSelectorFunc])) return false; // $FlowIgnore: Doesn't think elements are indexable

  return el[matchesSelectorFunc](selector);
} // Works up the tree to the draggable itself attempting to match selector.


function matchesSelectorAndParentsTo(el
/*: Node*/
, selector
/*: string*/
, baseNode
/*: Node*/
)
/*: boolean*/
{
  var node = el;

  do {
    if (matchesSelector(node, selector)) return true;
    if (node === baseNode) return false;
    node = node.parentNode;
  } while (node);

  return false;
}

function addEvent(el
/*: ?Node*/
, event
/*: string*/
, handler
/*: Function*/
, inputOptions
/*: Object*/
)
/*: void*/
{
  if (!el) return;

  var options = _objectSpread({
    capture: true
  }, inputOptions); // $FlowIgnore[method-unbinding]


  if (el.addEventListener) {
    el.addEventListener(event, handler, options);
  } else if (el.attachEvent) {
    el.attachEvent('on' + event, handler);
  } else {
    // $FlowIgnore: Doesn't think elements are indexable
    el['on' + event] = handler;
  }
}

function removeEvent(el
/*: ?Node*/
, event
/*: string*/
, handler
/*: Function*/
, inputOptions
/*: Object*/
)
/*: void*/
{
  if (!el) return;

  var options = _objectSpread({
    capture: true
  }, inputOptions); // $FlowIgnore[method-unbinding]


  if (el.removeEventListener) {
    el.removeEventListener(event, handler, options);
  } else if (el.detachEvent) {
    el.detachEvent('on' + event, handler);
  } else {
    // $FlowIgnore: Doesn't think elements are indexable
    el['on' + event] = null;
  }
}

function outerHeight(node
/*: HTMLElement*/
)
/*: number*/
{
  // This is deliberately excluding margin for our calculations, since we are using
  // offsetTop which is including margin. See getBoundPosition
  var height = node.clientHeight;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  height += (0, _shims.int)(computedStyle.borderTopWidth);
  height += (0, _shims.int)(computedStyle.borderBottomWidth);
  return height;
}

function outerWidth(node
/*: HTMLElement*/
)
/*: number*/
{
  // This is deliberately excluding margin for our calculations, since we are using
  // offsetLeft which is including margin. See getBoundPosition
  var width = node.clientWidth;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  width += (0, _shims.int)(computedStyle.borderLeftWidth);
  width += (0, _shims.int)(computedStyle.borderRightWidth);
  return width;
}

function innerHeight(node
/*: HTMLElement*/
)
/*: number*/
{
  var height = node.clientHeight;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  height -= (0, _shims.int)(computedStyle.paddingTop);
  height -= (0, _shims.int)(computedStyle.paddingBottom);
  return height;
}

function innerWidth(node
/*: HTMLElement*/
)
/*: number*/
{
  var width = node.clientWidth;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  width -= (0, _shims.int)(computedStyle.paddingLeft);
  width -= (0, _shims.int)(computedStyle.paddingRight);
  return width;
}
/*:: interface EventWithOffset {
  clientX: number, clientY: number
}*/


// Get from offsetParent
function offsetXYFromParent(evt
/*: EventWithOffset*/
, offsetParent
/*: HTMLElement*/
, scale
/*: number*/
)
/*: ControlPosition*/
{
  var isBody = offsetParent === offsetParent.ownerDocument.body;
  var offsetParentRect = isBody ? {
    left: 0,
    top: 0
  } : offsetParent.getBoundingClientRect();
  var x = (evt.clientX + offsetParent.scrollLeft - offsetParentRect.left) / scale;
  var y = (evt.clientY + offsetParent.scrollTop - offsetParentRect.top) / scale;
  return {
    x: x,
    y: y
  };
}

function createCSSTransform(controlPos
/*: ControlPosition*/
, positionOffset
/*: PositionOffsetControlPosition*/
)
/*: Object*/
{
  var translation = getTranslation(controlPos, positionOffset, 'px');
  return _defineProperty({}, (0, _getPrefix.browserPrefixToKey)('transform', _getPrefix.default), translation);
}

function createSVGTransform(controlPos
/*: ControlPosition*/
, positionOffset
/*: PositionOffsetControlPosition*/
)
/*: string*/
{
  var translation = getTranslation(controlPos, positionOffset, '');
  return translation;
}

function getTranslation(_ref2, positionOffset
/*: PositionOffsetControlPosition*/
, unitSuffix
/*: string*/
)
/*: string*/
{
  var x = _ref2.x,
      y = _ref2.y;
  var translation = "translate(".concat(x).concat(unitSuffix, ",").concat(y).concat(unitSuffix, ")");

  if (positionOffset) {
    var defaultX = "".concat(typeof positionOffset.x === 'string' ? positionOffset.x : positionOffset.x + unitSuffix);
    var defaultY = "".concat(typeof positionOffset.y === 'string' ? positionOffset.y : positionOffset.y + unitSuffix);
    translation = "translate(".concat(defaultX, ", ").concat(defaultY, ")") + translation;
  }

  return translation;
}

function getTouch(e
/*: MouseTouchEvent*/
, identifier
/*: number*/
)
/*: ?{clientX: number, clientY: number}*/
{
  return e.targetTouches && (0, _shims.findInArray)(e.targetTouches, function (t) {
    return identifier === t.identifier;
  }) || e.changedTouches && (0, _shims.findInArray)(e.changedTouches, function (t) {
    return identifier === t.identifier;
  });
}

function getTouchIdentifier(e
/*: MouseTouchEvent*/
)
/*: ?number*/
{
  if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
} // User-select Hacks:
//
// Useful for preventing blue highlights all over everything when dragging.
// Note we're passing `document` b/c we could be iframed


function addUserSelectStyles(doc
/*: ?Document*/
) {
  if (!doc) return;
  var styleEl = doc.getElementById('react-draggable-style-el');

  if (!styleEl) {
    styleEl = doc.createElement('style');
    styleEl.type = 'text/css';
    styleEl.id = 'react-draggable-style-el';
    styleEl.innerHTML = '.react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n';
    styleEl.innerHTML += '.react-draggable-transparent-selection *::selection {all: inherit;}\n';
    doc.getElementsByTagName('head')[0].appendChild(styleEl);
  }

  if (doc.body) addClassName(doc.body, 'react-draggable-transparent-selection');
}

function removeUserSelectStyles(doc
/*: ?Document*/
) {
  if (!doc) return;

  try {
    if (doc.body) removeClassName(doc.body, 'react-draggable-transparent-selection'); // $FlowIgnore: IE

    if (doc.selection) {
      // $FlowIgnore: IE
      doc.selection.empty();
    } else {
      // Remove selection caused by scroll, unless it's a focused input
      // (we use doc.defaultView in case we're in an iframe)
      var selection = (doc.defaultView || window).getSelection();

      if (selection && selection.type !== 'Caret') {
        selection.removeAllRanges();
      }
    }
  } catch (e) {// probably IE
  }
}

function addClassName(el
/*: HTMLElement*/
, className
/*: string*/
) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    if (!el.className.match(new RegExp("(?:^|\\s)".concat(className, "(?!\\S)")))) {
      el.className += " ".concat(className);
    }
  }
}

function removeClassName(el
/*: HTMLElement*/
, className
/*: string*/
) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp("(?:^|\\s)".concat(className, "(?!\\S)"), 'g'), '');
  }
}

/***/ }),

/***/ "../node_modules/react-resizable/node_modules/react-draggable/build/cjs/utils/getPrefix.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/react-resizable/node_modules/react-draggable/build/cjs/utils/getPrefix.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrefix = getPrefix;
exports.browserPrefixToKey = browserPrefixToKey;
exports.browserPrefixToStyle = browserPrefixToStyle;
exports.default = void 0;
var prefixes = ['Moz', 'Webkit', 'O', 'ms'];

function getPrefix()
/*: string*/
{
  var _window$document, _window$document$docu;

  var prop
  /*: string*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';
  // Ensure we're running in an environment where there is actually a global
  // `window` obj
  if (typeof window === 'undefined') return ''; // If we're in a pseudo-browser server-side environment, this access
  // path may not exist, so bail out if it doesn't.

  var style = (_window$document = window.document) === null || _window$document === void 0 ? void 0 : (_window$document$docu = _window$document.documentElement) === null || _window$document$docu === void 0 ? void 0 : _window$document$docu.style;
  if (!style) return '';
  if (prop in style) return '';

  for (var i = 0; i < prefixes.length; i++) {
    if (browserPrefixToKey(prop, prefixes[i]) in style) return prefixes[i];
  }

  return '';
}

function browserPrefixToKey(prop
/*: string*/
, prefix
/*: string*/
)
/*: string*/
{
  return prefix ? "".concat(prefix).concat(kebabToTitleCase(prop)) : prop;
}

function browserPrefixToStyle(prop
/*: string*/
, prefix
/*: string*/
)
/*: string*/
{
  return prefix ? "-".concat(prefix.toLowerCase(), "-").concat(prop) : prop;
}

function kebabToTitleCase(str
/*: string*/
)
/*: string*/
{
  var out = '';
  var shouldCapitalize = true;

  for (var i = 0; i < str.length; i++) {
    if (shouldCapitalize) {
      out += str[i].toUpperCase();
      shouldCapitalize = false;
    } else if (str[i] === '-') {
      shouldCapitalize = true;
    } else {
      out += str[i];
    }
  }

  return out;
} // Default export is the prefix itself, like 'Moz', 'Webkit', etc
// Note that you may have to re-test for certain things; for instance, Chrome 50
// can handle unprefixed `transform`, but not unprefixed `user-select`


var _default = (getPrefix()
/*: string*/
);

exports.default = _default;

/***/ }),

/***/ "../node_modules/react-resizable/node_modules/react-draggable/build/cjs/utils/log.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/react-resizable/node_modules/react-draggable/build/cjs/utils/log.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = log;

/*eslint no-console:0*/
function log() {
  var _console;

  if (undefined) (_console = console).log.apply(_console, arguments);
}

/***/ }),

/***/ "../node_modules/react-resizable/node_modules/react-draggable/build/cjs/utils/positionFns.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/react-resizable/node_modules/react-draggable/build/cjs/utils/positionFns.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBoundPosition = getBoundPosition;
exports.snapToGrid = snapToGrid;
exports.canDragX = canDragX;
exports.canDragY = canDragY;
exports.getControlPosition = getControlPosition;
exports.createCoreData = createCoreData;
exports.createDraggableData = createDraggableData;

var _shims = __webpack_require__(/*! ./shims */ "../node_modules/react-resizable/node_modules/react-draggable/build/cjs/utils/shims.js");

var _domFns = __webpack_require__(/*! ./domFns */ "../node_modules/react-resizable/node_modules/react-draggable/build/cjs/utils/domFns.js");

function getBoundPosition(draggable
/*: Draggable*/
, x
/*: number*/
, y
/*: number*/
)
/*: [number, number]*/
{
  // If no bounds, short-circuit and move on
  if (!draggable.props.bounds) return [x, y]; // Clone new bounds

  var bounds = draggable.props.bounds;
  bounds = typeof bounds === 'string' ? bounds : cloneBounds(bounds);
  var node = findDOMNode(draggable);

  if (typeof bounds === 'string') {
    var ownerDocument = node.ownerDocument;
    var ownerWindow = ownerDocument.defaultView;
    var boundNode;

    if (bounds === 'parent') {
      boundNode = node.parentNode;
    } else {
      boundNode = ownerDocument.querySelector(bounds);
    }

    if (!(boundNode instanceof ownerWindow.HTMLElement)) {
      throw new Error('Bounds selector "' + bounds + '" could not find an element.');
    }

    var boundNodeEl
    /*: HTMLElement*/
    = boundNode; // for Flow, can't seem to refine correctly

    var nodeStyle = ownerWindow.getComputedStyle(node);
    var boundNodeStyle = ownerWindow.getComputedStyle(boundNodeEl); // Compute bounds. This is a pain with padding and offsets but this gets it exactly right.

    bounds = {
      left: -node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingLeft) + (0, _shims.int)(nodeStyle.marginLeft),
      top: -node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingTop) + (0, _shims.int)(nodeStyle.marginTop),
      right: (0, _domFns.innerWidth)(boundNodeEl) - (0, _domFns.outerWidth)(node) - node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingRight) - (0, _shims.int)(nodeStyle.marginRight),
      bottom: (0, _domFns.innerHeight)(boundNodeEl) - (0, _domFns.outerHeight)(node) - node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingBottom) - (0, _shims.int)(nodeStyle.marginBottom)
    };
  } // Keep x and y below right and bottom limits...


  if ((0, _shims.isNum)(bounds.right)) x = Math.min(x, bounds.right);
  if ((0, _shims.isNum)(bounds.bottom)) y = Math.min(y, bounds.bottom); // But above left and top limits.

  if ((0, _shims.isNum)(bounds.left)) x = Math.max(x, bounds.left);
  if ((0, _shims.isNum)(bounds.top)) y = Math.max(y, bounds.top);
  return [x, y];
}

function snapToGrid(grid
/*: [number, number]*/
, pendingX
/*: number*/
, pendingY
/*: number*/
)
/*: [number, number]*/
{
  var x = Math.round(pendingX / grid[0]) * grid[0];
  var y = Math.round(pendingY / grid[1]) * grid[1];
  return [x, y];
}

function canDragX(draggable
/*: Draggable*/
)
/*: boolean*/
{
  return draggable.props.axis === 'both' || draggable.props.axis === 'x';
}

function canDragY(draggable
/*: Draggable*/
)
/*: boolean*/
{
  return draggable.props.axis === 'both' || draggable.props.axis === 'y';
} // Get {x, y} positions from event.


function getControlPosition(e
/*: MouseTouchEvent*/
, touchIdentifier
/*: ?number*/
, draggableCore
/*: DraggableCore*/
)
/*: ?ControlPosition*/
{
  var touchObj = typeof touchIdentifier === 'number' ? (0, _domFns.getTouch)(e, touchIdentifier) : null;
  if (typeof touchIdentifier === 'number' && !touchObj) return null; // not the right touch

  var node = findDOMNode(draggableCore); // User can provide an offsetParent if desired.

  var offsetParent = draggableCore.props.offsetParent || node.offsetParent || node.ownerDocument.body;
  return (0, _domFns.offsetXYFromParent)(touchObj || e, offsetParent, draggableCore.props.scale);
} // Create an data object exposed by <DraggableCore>'s events


function createCoreData(draggable
/*: DraggableCore*/
, x
/*: number*/
, y
/*: number*/
)
/*: DraggableData*/
{
  var state = draggable.state;
  var isStart = !(0, _shims.isNum)(state.lastX);
  var node = findDOMNode(draggable);

  if (isStart) {
    // If this is our first move, use the x and y as last coords.
    return {
      node: node,
      deltaX: 0,
      deltaY: 0,
      lastX: x,
      lastY: y,
      x: x,
      y: y
    };
  } else {
    // Otherwise calculate proper values.
    return {
      node: node,
      deltaX: x - state.lastX,
      deltaY: y - state.lastY,
      lastX: state.lastX,
      lastY: state.lastY,
      x: x,
      y: y
    };
  }
} // Create an data exposed by <Draggable>'s events


function createDraggableData(draggable
/*: Draggable*/
, coreData
/*: DraggableData*/
)
/*: DraggableData*/
{
  var scale = draggable.props.scale;
  return {
    node: coreData.node,
    x: draggable.state.x + coreData.deltaX / scale,
    y: draggable.state.y + coreData.deltaY / scale,
    deltaX: coreData.deltaX / scale,
    deltaY: coreData.deltaY / scale,
    lastX: draggable.state.x,
    lastY: draggable.state.y
  };
} // A lot faster than stringify/parse


function cloneBounds(bounds
/*: Bounds*/
)
/*: Bounds*/
{
  return {
    left: bounds.left,
    top: bounds.top,
    right: bounds.right,
    bottom: bounds.bottom
  };
}

function findDOMNode(draggable
/*: Draggable | DraggableCore*/
)
/*: HTMLElement*/
{
  var node = draggable.findDOMNode();

  if (!node) {
    throw new Error('<DraggableCore>: Unmounted during event!');
  } // $FlowIgnore we can't assert on HTMLElement due to tests... FIXME


  return node;
}

/***/ }),

/***/ "../node_modules/react-resizable/node_modules/react-draggable/build/cjs/utils/shims.js":
/*!*********************************************************************************************!*\
  !*** ../node_modules/react-resizable/node_modules/react-draggable/build/cjs/utils/shims.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findInArray = findInArray;
exports.isFunction = isFunction;
exports.isNum = isNum;
exports.int = int;
exports.dontSetMe = dontSetMe;

// @credits https://gist.github.com/rogozhnikoff/a43cfed27c41e4e68cdc
function findInArray(array
/*: Array<any> | TouchList*/
, callback
/*: Function*/
)
/*: any*/
{
  for (var i = 0, length = array.length; i < length; i++) {
    if (callback.apply(callback, [array[i], i, array])) return array[i];
  }
}

function isFunction(func
/*: any*/
)
/*: boolean %checks*/
{
  // $FlowIgnore[method-unbinding]
  return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
}

function isNum(num
/*: any*/
)
/*: boolean %checks*/
{
  return typeof num === 'number' && !isNaN(num);
}

function int(a
/*: string*/
)
/*: number*/
{
  return parseInt(a, 10);
}

function dontSetMe(props
/*: Object*/
, propName
/*: string*/
, componentName
/*: string*/
)
/*: ?Error*/
{
  if (props[propName]) {
    return new Error("Invalid prop ".concat(propName, " passed to ").concat(componentName, " - do not set this, set it on the child."));
  }
}

/***/ }),

/***/ "../packages/plugins/content/spacer/lib-es/Renderer/SpacerResizable.js":
/*!*****************************************************************************!*\
  !*** ../packages/plugins/content/spacer/lib-es/Renderer/SpacerResizable.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_resizable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-resizable */ "../node_modules/react-resizable/index.js");
/* harmony import */ var react_resizable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_resizable__WEBPACK_IMPORTED_MODULE_1__);
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



var faintBlack = 'rgba(0, 0, 0, 0.12)';
var SpacerResizable = function (props) {
    var _a, _b, _c;
    var _d = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])((_b = (_a = props.data) === null || _a === void 0 ? void 0 : _a.height) !== null && _b !== void 0 ? _b : 24), 2), height = _d[0], setHeight = _d[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () { var _a; return setHeight((_a = props.data) === null || _a === void 0 ? void 0 : _a.height); }, [(_c = props.data) === null || _c === void 0 ? void 0 : _c.height]);
    var onChange = props.onChange;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_resizable__WEBPACK_IMPORTED_MODULE_1__["Resizable"], { onResize: function (e, _a) {
            var _b;
            var size = _a.size;
            setHeight((_b = size === null || size === void 0 ? void 0 : size.height) !== null && _b !== void 0 ? _b : 0);
        }, onResizeStop: function (e, _a) {
            var size = _a.size;
            return onChange({
                height: size === null || size === void 0 ? void 0 : size.height,
            });
        }, height: height, width: 0 },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { height: height, position: 'relative' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: {
                    position: 'absolute',
                    bottom: '0',
                    height: '24px',
                    width: '100%',
                    background: faintBlack,
                    textAlign: 'center',
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { viewBox: "0 0 24 24", style: { color: 'white', width: 24, height: 24 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M20 9H4v2h16V9zM4 15h16v-2H4v2z" }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (SpacerResizable);
//# sourceMappingURL=SpacerResizable.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNpemFibGUvYnVpbGQvUmVzaXphYmxlLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlc2l6YWJsZS9idWlsZC9SZXNpemFibGVCb3guanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzaXphYmxlL2J1aWxkL3Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNpemFibGUvYnVpbGQvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzaXphYmxlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlc2l6YWJsZS9ub2RlX21vZHVsZXMvcmVhY3QtZHJhZ2dhYmxlL2J1aWxkL2Nqcy9EcmFnZ2FibGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzaXphYmxlL25vZGVfbW9kdWxlcy9yZWFjdC1kcmFnZ2FibGUvYnVpbGQvY2pzL0RyYWdnYWJsZUNvcmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzaXphYmxlL25vZGVfbW9kdWxlcy9yZWFjdC1kcmFnZ2FibGUvYnVpbGQvY2pzL2Nqcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNpemFibGUvbm9kZV9tb2R1bGVzL3JlYWN0LWRyYWdnYWJsZS9idWlsZC9janMvdXRpbHMvZG9tRm5zLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlc2l6YWJsZS9ub2RlX21vZHVsZXMvcmVhY3QtZHJhZ2dhYmxlL2J1aWxkL2Nqcy91dGlscy9nZXRQcmVmaXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzaXphYmxlL25vZGVfbW9kdWxlcy9yZWFjdC1kcmFnZ2FibGUvYnVpbGQvY2pzL3V0aWxzL2xvZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNpemFibGUvbm9kZV9tb2R1bGVzL3JlYWN0LWRyYWdnYWJsZS9idWlsZC9janMvdXRpbHMvcG9zaXRpb25GbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzaXphYmxlL25vZGVfbW9kdWxlcy9yZWFjdC1kcmFnZ2FibGUvYnVpbGQvY2pzL3V0aWxzL3NoaW1zLmpzIiwid2VicGFjazovL19OX0UvLi4vcGFja2FnZXMvcGx1Z2lucy9jb250ZW50L3NwYWNlci9saWItZXMvUmVuZGVyZXIvU3BhY2VyUmVzaXphYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYjtBQUNBOztBQUVBLG9DQUFvQyxtQkFBTyxDQUFDLDZDQUFPOztBQUVuRCxzQkFBc0IsbUJBQU8sQ0FBQyxzR0FBaUI7O0FBRS9DLGFBQWEsbUJBQU8sQ0FBQywrREFBUzs7QUFFOUIsaUJBQWlCLG1CQUFPLENBQUMsdUVBQWE7O0FBRXRDLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixxQkFBcUIsZ0RBQWdELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZSxHQUFHLHdDQUF3Qzs7QUFFM1QsMENBQTBDLGdDQUFnQyxvQ0FBb0Msb0RBQW9ELDhEQUE4RCxnRUFBZ0UsRUFBRSxFQUFFLGdDQUFnQyxFQUFFLGFBQWE7O0FBRW5WLGdDQUFnQyxnQkFBZ0Isc0JBQXNCLE9BQU8sdURBQXVELGFBQWEsdURBQXVELDJDQUEyQyxFQUFFLEVBQUUsRUFBRSw2Q0FBNkMsMkVBQTJFLEVBQUUsT0FBTyxpREFBaUQsa0ZBQWtGLEVBQUUsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFcGhCLDBEQUEwRCwrQkFBK0Is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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcsZ0JBQWdCOzs7QUFHbkI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcsZ0JBQWdCOzs7QUFHbkI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFRO0FBQzVCLElBQUksdURBQVMsY0FBYyxRQUFRLG9GQUFvRixFQUFFO0FBQ3pIO0FBQ0EsWUFBWSw0Q0FBSyxlQUFlLHlEQUFTLEdBQUc7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTLDRCQUE0QjtBQUNyQyxRQUFRLDRDQUFLLHVCQUF1QixTQUFTLHVDQUF1QyxFQUFFO0FBQ3RGLFlBQVksNENBQUssdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixFQUFFO0FBQ25CLGdCQUFnQiw0Q0FBSyx1QkFBdUIsK0JBQStCLHdDQUF3QyxFQUFFO0FBQ3JILG9CQUFvQiw0Q0FBSyx3QkFBd0IsdUNBQXVDO0FBQ3hGO0FBQ2UsOEVBQWUsRUFBQztBQUMvQiwyQyIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmVhY3REcmFnZ2FibGUgPSByZXF1aXJlKFwicmVhY3QtZHJhZ2dhYmxlXCIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZShcIi4vcHJvcFR5cGVzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBSZXNpemFibGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoUmVzaXphYmxlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSZXNpemFibGUoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3RhdGVcIiwgdW5kZWZpbmVkKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJsYXN0SGFuZGxlUmVjdFwiLCBudWxsKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzbGFja1wiLCBudWxsKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBSZXNpemFibGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucmVzZXREYXRhKCk7XG4gIH07XG5cbiAgX3Byb3RvLmxvY2tBc3BlY3RSYXRpbyA9IGZ1bmN0aW9uIGxvY2tBc3BlY3RSYXRpbyh3aWR0aCwgaGVpZ2h0LCBhc3BlY3RSYXRpbykge1xuICAgIGhlaWdodCA9IHdpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgd2lkdGggPSBoZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICByZXR1cm4gW3dpZHRoLCBoZWlnaHRdO1xuICB9O1xuXG4gIF9wcm90by5yZXNldERhdGEgPSBmdW5jdGlvbiByZXNldERhdGEoKSB7XG4gICAgdGhpcy5sYXN0SGFuZGxlUmVjdCA9IHRoaXMuc2xhY2sgPSBudWxsO1xuICB9IC8vIENsYW1wIHdpZHRoIGFuZCBoZWlnaHQgd2l0aGluIHByb3ZpZGVkIGNvbnN0cmFpbnRzXG4gIDtcblxuICBfcHJvdG8ucnVuQ29uc3RyYWludHMgPSBmdW5jdGlvbiBydW5Db25zdHJhaW50cyh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdmFyIF9yZWYgPSBbdGhpcy5wcm9wcy5taW5Db25zdHJhaW50cywgdGhpcy5wcm9wcy5tYXhDb25zdHJhaW50c10sXG4gICAgICAgIG1pbiA9IF9yZWZbMF0sXG4gICAgICAgIG1heCA9IF9yZWZbMV07XG4gICAgaWYgKCFtaW4gJiYgIW1heCkgcmV0dXJuIFt3aWR0aCwgaGVpZ2h0XTsgLy8gSWYgY29uc3RyYWluaW5nIHRvIG1pbiBhbmQgbWF4LCB3ZSBuZWVkIHRvIGFsc28gZml0IHdpZHRoIGFuZCBoZWlnaHQgdG8gYXNwZWN0IHJhdGlvLlxuXG4gICAgaWYgKHRoaXMucHJvcHMubG9ja0FzcGVjdFJhdGlvKSB7XG4gICAgICB2YXIgcmVzaXppbmdIb3Jpem9udGFsbHkgPSBoZWlnaHQgPT09IHRoaXMucHJvcHMuaGVpZ2h0O1xuXG4gICAgICBpZiAocmVzaXppbmdIb3Jpem9udGFsbHkpIHtcbiAgICAgICAgdmFyIHJhdGlvID0gdGhpcy5wcm9wcy53aWR0aCAvIHRoaXMucHJvcHMuaGVpZ2h0O1xuICAgICAgICBoZWlnaHQgPSB3aWR0aCAvIHJhdGlvO1xuICAgICAgICB3aWR0aCA9IGhlaWdodCAqIHJhdGlvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVGFrZSBpbnRvIGFjY291bnQgdmVydGljYWwgcmVzaXplIHdpdGggTi9TIGhhbmRsZXMgb24gbG9ja2VkIGFzcGVjdFxuICAgICAgICAvLyByYXRpby4gQ2FsY3VsYXRlIHRoZSBjaGFuZ2UgaGVpZ2h0LWZpcnN0LCBpbnN0ZWFkIG9mIHdpZHRoLWZpcnN0XG4gICAgICAgIHZhciBfcmF0aW8gPSB0aGlzLnByb3BzLmhlaWdodCAvIHRoaXMucHJvcHMud2lkdGg7XG5cbiAgICAgICAgd2lkdGggPSBoZWlnaHQgLyBfcmF0aW87XG4gICAgICAgIGhlaWdodCA9IHdpZHRoICogX3JhdGlvO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBvbGRXID0gd2lkdGgsXG4gICAgICAgIG9sZEggPSBoZWlnaHQ7IC8vIEFkZCBzbGFjayB0byB0aGUgdmFsdWVzIHVzZWQgdG8gY2FsY3VsYXRlIGJvdW5kIHBvc2l0aW9uLiBUaGlzIHdpbGwgZW5zdXJlIHRoYXQgaWZcbiAgICAvLyB3ZSBzdGFydCByZW1vdmluZyBzbGFjaywgdGhlIGVsZW1lbnQgd29uJ3QgcmVhY3QgdG8gaXQgcmlnaHQgYXdheSB1bnRpbCBpdCdzIGJlZW5cbiAgICAvLyBjb21wbGV0ZWx5IHJlbW92ZWQuXG5cbiAgICB2YXIgX3JlZjIgPSB0aGlzLnNsYWNrIHx8IFswLCAwXSxcbiAgICAgICAgc2xhY2tXID0gX3JlZjJbMF0sXG4gICAgICAgIHNsYWNrSCA9IF9yZWYyWzFdO1xuXG4gICAgd2lkdGggKz0gc2xhY2tXO1xuICAgIGhlaWdodCArPSBzbGFja0g7XG5cbiAgICBpZiAobWluKSB7XG4gICAgICB3aWR0aCA9IE1hdGgubWF4KG1pblswXSwgd2lkdGgpO1xuICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgobWluWzFdLCBoZWlnaHQpO1xuICAgIH1cblxuICAgIGlmIChtYXgpIHtcbiAgICAgIHdpZHRoID0gTWF0aC5taW4obWF4WzBdLCB3aWR0aCk7XG4gICAgICBoZWlnaHQgPSBNYXRoLm1pbihtYXhbMV0sIGhlaWdodCk7XG4gICAgfSAvLyBJZiB0aGUgd2lkdGggb3IgaGVpZ2h0IGNoYW5nZWQsIHdlIG11c3QgaGF2ZSBpbnRyb2R1Y2VkIHNvbWUgc2xhY2suIFJlY29yZCBpdCBmb3IgdGhlIG5leHQgaXRlcmF0aW9uLlxuXG5cbiAgICB0aGlzLnNsYWNrID0gW3NsYWNrVyArIChvbGRXIC0gd2lkdGgpLCBzbGFja0ggKyAob2xkSCAtIGhlaWdodCldO1xuICAgIHJldHVybiBbd2lkdGgsIGhlaWdodF07XG4gIH1cbiAgLyoqXG4gICAqIFdyYXBwZXIgYXJvdW5kIGRyYWcgZXZlbnRzIHRvIHByb3ZpZGUgbW9yZSB1c2VmdWwgZGF0YS5cbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBoYW5kbGVyTmFtZSBIYW5kbGVyIG5hbWUgdG8gd3JhcC5cbiAgICogQHJldHVybiB7RnVuY3Rpb259ICAgICAgICAgICBIYW5kbGVyIGZ1bmN0aW9uLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5yZXNpemVIYW5kbGVyID0gZnVuY3Rpb24gcmVzaXplSGFuZGxlcihoYW5kbGVyTmFtZSwgYXhpcykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlLCBfcmVmMykge1xuICAgICAgdmFyIG5vZGUgPSBfcmVmMy5ub2RlLFxuICAgICAgICAgIGRlbHRhWCA9IF9yZWYzLmRlbHRhWCxcbiAgICAgICAgICBkZWx0YVkgPSBfcmVmMy5kZWx0YVk7XG4gICAgICAvLyBSZXNldCBkYXRhIGluIGNhc2UgaXQgd2FzIGxlZnQgb3ZlciBzb21laG93IChzaG91bGQgbm90IGJlIHBvc3NpYmxlKVxuICAgICAgaWYgKGhhbmRsZXJOYW1lID09PSAnb25SZXNpemVTdGFydCcpIF90aGlzMi5yZXNldERhdGEoKTsgLy8gQXhpcyByZXN0cmljdGlvbnNcblxuICAgICAgdmFyIGNhbkRyYWdYID0gKF90aGlzMi5wcm9wcy5heGlzID09PSAnYm90aCcgfHwgX3RoaXMyLnByb3BzLmF4aXMgPT09ICd4JykgJiYgYXhpcyAhPT0gJ24nICYmIGF4aXMgIT09ICdzJztcbiAgICAgIHZhciBjYW5EcmFnWSA9IChfdGhpczIucHJvcHMuYXhpcyA9PT0gJ2JvdGgnIHx8IF90aGlzMi5wcm9wcy5heGlzID09PSAneScpICYmIGF4aXMgIT09ICdlJyAmJiBheGlzICE9PSAndyc7IC8vIE5vIGRyYWdnaW5nIHBvc3NpYmxlLlxuXG4gICAgICBpZiAoIWNhbkRyYWdYICYmICFjYW5EcmFnWSkgcmV0dXJuOyAvLyBEZWNvbXBvc2UgYXhpcyBmb3IgbGF0ZXIgdXNlXG5cbiAgICAgIHZhciBheGlzViA9IGF4aXNbMF07XG4gICAgICB2YXIgYXhpc0ggPSBheGlzW2F4aXMubGVuZ3RoIC0gMV07IC8vIGludGVudGlvbmFsbHkgbm90IGF4aXNbMV0sIHNvIHRoYXQgdGhpcyBjYXRjaGVzIGF4aXMgPT09ICd3JyBmb3IgZXhhbXBsZVxuICAgICAgLy8gVHJhY2sgdGhlIGVsZW1lbnQgYmVpbmcgZHJhZ2dlZCB0byBhY2NvdW50IGZvciBjaGFuZ2VzIGluIHBvc2l0aW9uLlxuICAgICAgLy8gSWYgYSBoYW5kbGUncyBwb3NpdGlvbiBpcyBjaGFuZ2VkIGJldHdlZW4gY2FsbGJhY2tzLCB3ZSBuZWVkIHRvIGZhY3RvciB0aGlzIGluIHRvIHRoZSBuZXh0IGNhbGxiYWNrLlxuICAgICAgLy8gRmFpbHVyZSB0byBkbyBzbyB3aWxsIGNhdXNlIHRoZSBlbGVtZW50IHRvIFwic2tpcFwiIHdoZW4gcmVzaXplZCB1cHdhcmRzIG9yIGxlZnR3YXJkcy5cblxuICAgICAgdmFyIGhhbmRsZVJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBpZiAoX3RoaXMyLmxhc3RIYW5kbGVSZWN0ICE9IG51bGwpIHtcbiAgICAgICAgLy8gSWYgdGhlIGhhbmRsZSBoYXMgcmVwb3NpdGlvbmVkIG9uIGVpdGhlciBheGlzIHNpbmNlIGxhc3QgcmVuZGVyLFxuICAgICAgICAvLyB3ZSBuZWVkIHRvIGluY3JlYXNlIG91ciBjYWxsYmFjayB2YWx1ZXMgYnkgdGhpcyBtdWNoLlxuICAgICAgICAvLyBPbmx5IGNoZWNraW5nICduJywgJ3cnIHNpbmNlIHJlc2l6aW5nIGJ5ICdzJywgJ3cnIHdvbid0IGFmZmVjdCB0aGUgb3ZlcmFsbCBwb3NpdGlvbiBvbiBwYWdlLFxuICAgICAgICBpZiAoYXhpc0ggPT09ICd3Jykge1xuICAgICAgICAgIHZhciBkZWx0YUxlZnRTaW5jZUxhc3QgPSBoYW5kbGVSZWN0LmxlZnQgLSBfdGhpczIubGFzdEhhbmRsZVJlY3QubGVmdDtcbiAgICAgICAgICBkZWx0YVggKz0gZGVsdGFMZWZ0U2luY2VMYXN0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGF4aXNWID09PSAnbicpIHtcbiAgICAgICAgICB2YXIgZGVsdGFUb3BTaW5jZUxhc3QgPSBoYW5kbGVSZWN0LnRvcCAtIF90aGlzMi5sYXN0SGFuZGxlUmVjdC50b3A7XG4gICAgICAgICAgZGVsdGFZICs9IGRlbHRhVG9wU2luY2VMYXN0O1xuICAgICAgICB9XG4gICAgICB9IC8vIFN0b3JhZ2Ugb2YgbGFzdCByZWN0IHNvIHdlIGtub3cgaG93IG11Y2ggaXQgaGFzIHJlYWxseSBtb3ZlZC5cblxuXG4gICAgICBfdGhpczIubGFzdEhhbmRsZVJlY3QgPSBoYW5kbGVSZWN0OyAvLyBSZXZlcnNlIGRlbHRhIGlmIHVzaW5nIHRvcCBvciBsZWZ0IGRyYWcgaGFuZGxlcy5cblxuICAgICAgaWYgKGF4aXNIID09PSAndycpIGRlbHRhWCA9IC1kZWx0YVg7XG4gICAgICBpZiAoYXhpc1YgPT09ICduJykgZGVsdGFZID0gLWRlbHRhWTsgLy8gVXBkYXRlIHcvaCBieSB0aGUgZGVsdGFzLiBBbHNvIGZhY3RvciBpbiB0cmFuc2Zvcm1TY2FsZS5cblxuICAgICAgdmFyIHdpZHRoID0gX3RoaXMyLnByb3BzLndpZHRoICsgKGNhbkRyYWdYID8gZGVsdGFYIC8gX3RoaXMyLnByb3BzLnRyYW5zZm9ybVNjYWxlIDogMCk7XG4gICAgICB2YXIgaGVpZ2h0ID0gX3RoaXMyLnByb3BzLmhlaWdodCArIChjYW5EcmFnWSA/IGRlbHRhWSAvIF90aGlzMi5wcm9wcy50cmFuc2Zvcm1TY2FsZSA6IDApOyAvLyBSdW4gdXNlci1wcm92aWRlZCBjb25zdHJhaW50cy5cblxuICAgICAgdmFyIF90aGlzMiRydW5Db25zdHJhaW50cyA9IF90aGlzMi5ydW5Db25zdHJhaW50cyh3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgd2lkdGggPSBfdGhpczIkcnVuQ29uc3RyYWludHNbMF07XG4gICAgICBoZWlnaHQgPSBfdGhpczIkcnVuQ29uc3RyYWludHNbMV07XG4gICAgICB2YXIgZGltZW5zaW9uc0NoYW5nZWQgPSB3aWR0aCAhPT0gX3RoaXMyLnByb3BzLndpZHRoIHx8IGhlaWdodCAhPT0gX3RoaXMyLnByb3BzLmhlaWdodDsgLy8gQ2FsbCB1c2VyLXN1cHBsaWVkIGNhbGxiYWNrIGlmIHByZXNlbnQuXG5cbiAgICAgIHZhciBjYiA9IHR5cGVvZiBfdGhpczIucHJvcHNbaGFuZGxlck5hbWVdID09PSAnZnVuY3Rpb24nID8gX3RoaXMyLnByb3BzW2hhbmRsZXJOYW1lXSA6IG51bGw7IC8vIERvbid0IGNhbGwgJ29uUmVzaXplJyBpZiBkaW1lbnNpb25zIGhhdmVuJ3QgY2hhbmdlZC5cblxuICAgICAgdmFyIHNob3VsZFNraXBDYiA9IGhhbmRsZXJOYW1lID09PSAnb25SZXNpemUnICYmICFkaW1lbnNpb25zQ2hhbmdlZDtcblxuICAgICAgaWYgKGNiICYmICFzaG91bGRTa2lwQ2IpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlLnBlcnNpc3QgPT09ICdmdW5jdGlvbicpIGUucGVyc2lzdCgpO1xuICAgICAgICBjYihlLCB7XG4gICAgICAgICAgbm9kZTogbm9kZSxcbiAgICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaGFuZGxlOiBheGlzXG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBSZXNldCBpbnRlcm5hbCBkYXRhXG5cblxuICAgICAgaWYgKGhhbmRsZXJOYW1lID09PSAnb25SZXNpemVTdG9wJykgX3RoaXMyLnJlc2V0RGF0YSgpO1xuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlclJlc2l6ZUhhbmRsZSA9IGZ1bmN0aW9uIHJlbmRlclJlc2l6ZUhhbmRsZShyZXNpemVIYW5kbGVBeGlzKSB7XG4gICAgdmFyIGhhbmRsZSA9IHRoaXMucHJvcHMuaGFuZGxlO1xuXG4gICAgaWYgKGhhbmRsZSkge1xuICAgICAgaWYgKHR5cGVvZiBoYW5kbGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZShyZXNpemVIYW5kbGVBeGlzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGhhbmRsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJyZWFjdC1yZXNpemFibGUtaGFuZGxlIHJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtXCIgKyByZXNpemVIYW5kbGVBeGlzXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIC8vIFBhc3MgYWxvbmcgb25seSBwcm9wcyBub3QgbWVhbnQgZm9yIHRoZSBgPFJlc2l6YWJsZT5gLmBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGRyYWdnYWJsZU9wdHMgPSBfdGhpcyRwcm9wcy5kcmFnZ2FibGVPcHRzLFxuICAgICAgICB3aWR0aCA9IF90aGlzJHByb3BzLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBfdGhpcyRwcm9wcy5oZWlnaHQsXG4gICAgICAgIGhhbmRsZSA9IF90aGlzJHByb3BzLmhhbmRsZSxcbiAgICAgICAgaGFuZGxlU2l6ZSA9IF90aGlzJHByb3BzLmhhbmRsZVNpemUsXG4gICAgICAgIGxvY2tBc3BlY3RSYXRpbyA9IF90aGlzJHByb3BzLmxvY2tBc3BlY3RSYXRpbyxcbiAgICAgICAgYXhpcyA9IF90aGlzJHByb3BzLmF4aXMsXG4gICAgICAgIG1pbkNvbnN0cmFpbnRzID0gX3RoaXMkcHJvcHMubWluQ29uc3RyYWludHMsXG4gICAgICAgIG1heENvbnN0cmFpbnRzID0gX3RoaXMkcHJvcHMubWF4Q29uc3RyYWludHMsXG4gICAgICAgIG9uUmVzaXplID0gX3RoaXMkcHJvcHMub25SZXNpemUsXG4gICAgICAgIG9uUmVzaXplU3RvcCA9IF90aGlzJHByb3BzLm9uUmVzaXplU3RvcCxcbiAgICAgICAgb25SZXNpemVTdGFydCA9IF90aGlzJHByb3BzLm9uUmVzaXplU3RhcnQsXG4gICAgICAgIHJlc2l6ZUhhbmRsZXMgPSBfdGhpcyRwcm9wcy5yZXNpemVIYW5kbGVzLFxuICAgICAgICB0cmFuc2Zvcm1TY2FsZSA9IF90aGlzJHByb3BzLnRyYW5zZm9ybVNjYWxlLFxuICAgICAgICBwID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiY2xhc3NOYW1lXCIsIFwiZHJhZ2dhYmxlT3B0c1wiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwiaGFuZGxlXCIsIFwiaGFuZGxlU2l6ZVwiLCBcImxvY2tBc3BlY3RSYXRpb1wiLCBcImF4aXNcIiwgXCJtaW5Db25zdHJhaW50c1wiLCBcIm1heENvbnN0cmFpbnRzXCIsIFwib25SZXNpemVcIiwgXCJvblJlc2l6ZVN0b3BcIiwgXCJvblJlc2l6ZVN0YXJ0XCIsIFwicmVzaXplSGFuZGxlc1wiLCBcInRyYW5zZm9ybVNjYWxlXCJdKTsgLy8gV2hhdCB3ZSdyZSBkb2luZyBoZXJlIGlzIGdldHRpbmcgdGhlIGNoaWxkIG9mIHRoaXMgZWxlbWVudCwgYW5kIGNsb25pbmcgaXQgd2l0aCB0aGlzIGVsZW1lbnQncyBwcm9wcy5cbiAgICAvLyBXZSBhcmUgdGhlbiBkZWZpbmluZyBpdHMgY2hpbGRyZW4gYXM6XG4gICAgLy8gSXRzIG9yaWdpbmFsIGNoaWxkcmVuIChyZXNpemFibGUncyBjaGlsZCdzIGNoaWxkcmVuKSwgYW5kXG4gICAgLy8gT25lIG9yIG1vcmUgZHJhZ2dhYmxlIGhhbmRsZXMuXG5cblxuICAgIHJldHVybiAoMCwgX3V0aWxzLmNsb25lRWxlbWVudCkoY2hpbGRyZW4sIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcCksIHt9LCB7XG4gICAgICBjbGFzc05hbWU6IChjbGFzc05hbWUgPyBjbGFzc05hbWUgKyBcIiBcIiA6ICcnKSArIFwicmVhY3QtcmVzaXphYmxlXCIsXG4gICAgICBjaGlsZHJlbjogW10uY29uY2F0KGNoaWxkcmVuLnByb3BzLmNoaWxkcmVuLCByZXNpemVIYW5kbGVzLm1hcChmdW5jdGlvbiAoaGFuZGxlQXhpcykge1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0RHJhZ2dhYmxlLkRyYWdnYWJsZUNvcmUsIF9leHRlbmRzKHt9LCBkcmFnZ2FibGVPcHRzLCB7XG4gICAgICAgICAga2V5OiBcInJlc2l6YWJsZUhhbmRsZS1cIiArIGhhbmRsZUF4aXMsXG4gICAgICAgICAgb25TdG9wOiBfdGhpczMucmVzaXplSGFuZGxlcignb25SZXNpemVTdG9wJywgaGFuZGxlQXhpcyksXG4gICAgICAgICAgb25TdGFydDogX3RoaXMzLnJlc2l6ZUhhbmRsZXIoJ29uUmVzaXplU3RhcnQnLCBoYW5kbGVBeGlzKSxcbiAgICAgICAgICBvbkRyYWc6IF90aGlzMy5yZXNpemVIYW5kbGVyKCdvblJlc2l6ZScsIGhhbmRsZUF4aXMpXG4gICAgICAgIH0pLCBfdGhpczMucmVuZGVyUmVzaXplSGFuZGxlKGhhbmRsZUF4aXMpKTtcbiAgICAgIH0pKVxuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gUmVzaXphYmxlO1xufShfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSZXNpemFibGU7XG5cbl9kZWZpbmVQcm9wZXJ0eShSZXNpemFibGUsIFwicHJvcFR5cGVzXCIsIF9wcm9wVHlwZXMucmVzaXphYmxlUHJvcHMpO1xuXG5fZGVmaW5lUHJvcGVydHkoUmVzaXphYmxlLCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gIGhhbmRsZVNpemU6IFsyMCwgMjBdLFxuICBsb2NrQXNwZWN0UmF0aW86IGZhbHNlLFxuICBheGlzOiAnYm90aCcsXG4gIG1pbkNvbnN0cmFpbnRzOiBbMjAsIDIwXSxcbiAgbWF4Q29uc3RyYWludHM6IFtJbmZpbml0eSwgSW5maW5pdHldLFxuICByZXNpemVIYW5kbGVzOiBbJ3NlJ10sXG4gIHRyYW5zZm9ybVNjYWxlOiAxXG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9SZXNpemFibGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1Jlc2l6YWJsZVwiKSk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IHJlcXVpcmUoXCIuL3Byb3BUeXBlc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IGRlZmF1bHQ6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIFJlc2l6YWJsZUJveCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShSZXNpemFibGVCb3gsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFJlc2l6YWJsZUJveCgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzdGF0ZVwiLCB7XG4gICAgICB3aWR0aDogX3RoaXMucHJvcHMud2lkdGgsXG4gICAgICBoZWlnaHQ6IF90aGlzLnByb3BzLmhlaWdodCxcbiAgICAgIHByb3BzV2lkdGg6IF90aGlzLnByb3BzLndpZHRoLFxuICAgICAgcHJvcHNIZWlnaHQ6IF90aGlzLnByb3BzLmhlaWdodFxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uUmVzaXplXCIsIGZ1bmN0aW9uIChlLCBkYXRhKSB7XG4gICAgICB2YXIgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uUmVzaXplKSB7XG4gICAgICAgIGUucGVyc2lzdCAmJiBlLnBlcnNpc3QoKTtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZShzaXplLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uUmVzaXplICYmIF90aGlzLnByb3BzLm9uUmVzaXplKGUsIGRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHNpemUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgUmVzaXphYmxlQm94LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICAvLyBJZiBwYXJlbnQgY2hhbmdlcyBoZWlnaHQvd2lkdGgsIHNldCB0aGF0IGluIG91ciBzdGF0ZS5cbiAgICBpZiAoc3RhdGUucHJvcHNXaWR0aCAhPT0gcHJvcHMud2lkdGggfHwgc3RhdGUucHJvcHNIZWlnaHQgIT09IHByb3BzLmhlaWdodCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IHByb3BzLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHByb3BzLmhlaWdodCxcbiAgICAgICAgcHJvcHNXaWR0aDogcHJvcHMud2lkdGgsXG4gICAgICAgIHByb3BzSGVpZ2h0OiBwcm9wcy5oZWlnaHRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgdmFyIF9wcm90byA9IFJlc2l6YWJsZUJveC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAvLyBCYXNpYyB3cmFwcGVyIGFyb3VuZCBhIFJlc2l6YWJsZSBpbnN0YW5jZS5cbiAgICAvLyBJZiB5b3UgdXNlIFJlc2l6YWJsZSBkaXJlY3RseSwgeW91IGFyZSByZXNwb25zaWJsZSBmb3IgdXBkYXRpbmcgdGhlIGNoaWxkIGNvbXBvbmVudFxuICAgIC8vIHdpdGggYSBuZXcgd2lkdGggYW5kIGhlaWdodC5cbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBoYW5kbGUgPSBfdGhpcyRwcm9wcy5oYW5kbGUsXG4gICAgICAgIGhhbmRsZVNpemUgPSBfdGhpcyRwcm9wcy5oYW5kbGVTaXplLFxuICAgICAgICBvblJlc2l6ZSA9IF90aGlzJHByb3BzLm9uUmVzaXplLFxuICAgICAgICBvblJlc2l6ZVN0YXJ0ID0gX3RoaXMkcHJvcHMub25SZXNpemVTdGFydCxcbiAgICAgICAgb25SZXNpemVTdG9wID0gX3RoaXMkcHJvcHMub25SZXNpemVTdG9wLFxuICAgICAgICBkcmFnZ2FibGVPcHRzID0gX3RoaXMkcHJvcHMuZHJhZ2dhYmxlT3B0cyxcbiAgICAgICAgbWluQ29uc3RyYWludHMgPSBfdGhpcyRwcm9wcy5taW5Db25zdHJhaW50cyxcbiAgICAgICAgbWF4Q29uc3RyYWludHMgPSBfdGhpcyRwcm9wcy5tYXhDb25zdHJhaW50cyxcbiAgICAgICAgbG9ja0FzcGVjdFJhdGlvID0gX3RoaXMkcHJvcHMubG9ja0FzcGVjdFJhdGlvLFxuICAgICAgICBheGlzID0gX3RoaXMkcHJvcHMuYXhpcyxcbiAgICAgICAgd2lkdGggPSBfdGhpcyRwcm9wcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gX3RoaXMkcHJvcHMuaGVpZ2h0LFxuICAgICAgICByZXNpemVIYW5kbGVzID0gX3RoaXMkcHJvcHMucmVzaXplSGFuZGxlcyxcbiAgICAgICAgc3R5bGUgPSBfdGhpcyRwcm9wcy5zdHlsZSxcbiAgICAgICAgdHJhbnNmb3JtU2NhbGUgPSBfdGhpcyRwcm9wcy50cmFuc2Zvcm1TY2FsZSxcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiaGFuZGxlXCIsIFwiaGFuZGxlU2l6ZVwiLCBcIm9uUmVzaXplXCIsIFwib25SZXNpemVTdGFydFwiLCBcIm9uUmVzaXplU3RvcFwiLCBcImRyYWdnYWJsZU9wdHNcIiwgXCJtaW5Db25zdHJhaW50c1wiLCBcIm1heENvbnN0cmFpbnRzXCIsIFwibG9ja0FzcGVjdFJhdGlvXCIsIFwiYXhpc1wiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwicmVzaXplSGFuZGxlc1wiLCBcInN0eWxlXCIsIFwidHJhbnNmb3JtU2NhbGVcIl0pO1xuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9SZXNpemFibGUuZGVmYXVsdCwge1xuICAgICAgYXhpczogYXhpcyxcbiAgICAgIGRyYWdnYWJsZU9wdHM6IGRyYWdnYWJsZU9wdHMsXG4gICAgICBoYW5kbGU6IGhhbmRsZSxcbiAgICAgIGhhbmRsZVNpemU6IGhhbmRsZVNpemUsXG4gICAgICBoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0LFxuICAgICAgbG9ja0FzcGVjdFJhdGlvOiBsb2NrQXNwZWN0UmF0aW8sXG4gICAgICBtYXhDb25zdHJhaW50czogbWF4Q29uc3RyYWludHMsXG4gICAgICBtaW5Db25zdHJhaW50czogbWluQ29uc3RyYWludHMsXG4gICAgICBvblJlc2l6ZVN0YXJ0OiBvblJlc2l6ZVN0YXJ0LFxuICAgICAgb25SZXNpemU6IHRoaXMub25SZXNpemUsXG4gICAgICBvblJlc2l6ZVN0b3A6IG9uUmVzaXplU3RvcCxcbiAgICAgIHJlc2l6ZUhhbmRsZXM6IHJlc2l6ZUhhbmRsZXMsXG4gICAgICB0cmFuc2Zvcm1TY2FsZTogdHJhbnNmb3JtU2NhbGUsXG4gICAgICB3aWR0aDogdGhpcy5zdGF0ZS53aWR0aFxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc3R5bGUpLCB7fSwge1xuICAgICAgICB3aWR0aDogdGhpcy5zdGF0ZS53aWR0aCArICdweCcsXG4gICAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQgKyAncHgnXG4gICAgICB9KVxuICAgIH0pKSk7XG4gIH07XG5cbiAgcmV0dXJuIFJlc2l6YWJsZUJveDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUmVzaXphYmxlQm94O1xuXG5fZGVmaW5lUHJvcGVydHkoUmVzaXphYmxlQm94LCBcInByb3BUeXBlc1wiLCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIF9wcm9wVHlwZXMyLnJlc2l6YWJsZVByb3BzKSwge30sIHtcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMuZGVmYXVsdC5lbGVtZW50XG59KSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnJlc2l6YWJsZVByb3BzID0gdm9pZCAwO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX3JlYWN0RHJhZ2dhYmxlID0gcmVxdWlyZShcInJlYWN0LWRyYWdnYWJsZVwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHJlc2l6YWJsZVByb3BzID0ge1xuICAvKlxuICAqIFJlc3RyaWN0cyByZXNpemluZyB0byBhIHBhcnRpY3VsYXIgYXhpcyAoZGVmYXVsdDogJ2JvdGgnKVxuICAqICdib3RoJyAtIGFsbG93cyByZXNpemluZyBieSB3aWR0aCBvciBoZWlnaHRcbiAgKiAneCcgLSBvbmx5IGFsbG93cyB0aGUgd2lkdGggdG8gYmUgY2hhbmdlZFxuICAqICd5JyAtIG9ubHkgYWxsb3dzIHRoZSBoZWlnaHQgdG8gYmUgY2hhbmdlZFxuICAqICdub25lJyAtIGRpc2FibGVzIHJlc2l6aW5nIGFsdG9nZXRoZXJcbiAgKiAqL1xuICBheGlzOiBfcHJvcFR5cGVzLmRlZmF1bHQub25lT2YoWydib3RoJywgJ3gnLCAneScsICdub25lJ10pLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG5cbiAgLypcbiAgKiBSZXF1aXJlIHRoYXQgb25lIGFuZCBvbmx5IG9uZSBjaGlsZCBiZSBwcmVzZW50LlxuICAqICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzLmRlZmF1bHQuZWxlbWVudC5pc1JlcXVpcmVkLFxuXG4gIC8qXG4gICogVGhlc2Ugd2lsbCBiZSBwYXNzZWQgd2hvbGVzYWxlIHRvIHJlYWN0LWRyYWdnYWJsZSdzIERyYWdnYWJsZUNvcmVcbiAgKiAqL1xuICBkcmFnZ2FibGVPcHRzOiBfcHJvcFR5cGVzLmRlZmF1bHQuc2hhcGUoe1xuICAgIGFsbG93QW55Q2xpY2s6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxuICAgIGNhbmNlbDogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgICBjaGlsZHJlbjogX3Byb3BUeXBlcy5kZWZhdWx0Lm5vZGUsXG4gICAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxuICAgIGVuYWJsZVVzZXJTZWxlY3RIYWNrOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcbiAgICBvZmZzZXRQYXJlbnQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5ub2RlLFxuICAgIGdyaWQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5hcnJheU9mKF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIpLFxuICAgIGhhbmRsZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgICBub2RlUmVmOiBfcHJvcFR5cGVzLmRlZmF1bHQub2JqZWN0LFxuICAgIG9uU3RhcnQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLFxuICAgIG9uRHJhZzogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsXG4gICAgb25TdG9wOiBfcHJvcFR5cGVzLmRlZmF1bHQuZnVuYyxcbiAgICBvbk1vdXNlRG93bjogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsXG4gICAgc2NhbGU6IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXJcbiAgfSksXG5cbiAgLypcbiAgKiBJbml0aWFsIGhlaWdodFxuICAqICovXG4gIGhlaWdodDogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlci5pc1JlcXVpcmVkLFxuXG4gIC8qXG4gICogQ3VzdG9taXplIGN1cnNvciByZXNpemUgaGFuZGxlXG4gICogKi9cbiAgaGFuZGxlOiBfcHJvcFR5cGVzLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzLmRlZmF1bHQubm9kZSwgX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmNdKSxcblxuICAvKlxuICAqIElmIHlvdSBjaGFuZ2UgdGhpcywgYmUgc3VyZSB0byB1cGRhdGUgeW91ciBjc3NcbiAgKiAqL1xuICBoYW5kbGVTaXplOiBfcHJvcFR5cGVzLmRlZmF1bHQuYXJyYXlPZihfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyKSxcbiAgbG9ja0FzcGVjdFJhdGlvOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcblxuICAvKlxuICAqIE1heCBYICYgWSBtZWFzdXJlXG4gICogKi9cbiAgbWF4Q29uc3RyYWludHM6IF9wcm9wVHlwZXMuZGVmYXVsdC5hcnJheU9mKF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIpLFxuXG4gIC8qXG4gICogTWluIFggJiBZIG1lYXN1cmVcbiAgKiAqL1xuICBtaW5Db25zdHJhaW50czogX3Byb3BUeXBlcy5kZWZhdWx0LmFycmF5T2YoX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlciksXG5cbiAgLypcbiAgKiBDYWxsZWQgb24gc3RvcCByZXNpemUgZXZlbnRcbiAgKiAqL1xuICBvblJlc2l6ZVN0b3A6IF9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLFxuXG4gIC8qXG4gICogQ2FsbGVkIG9uIHN0YXJ0IHJlc2l6ZSBldmVudFxuICAqICovXG4gIG9uUmVzaXplU3RhcnQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLFxuXG4gIC8qXG4gICogQ2FsbGVkIG9uIHJlc2l6ZSBldmVudFxuICAqICovXG4gIG9uUmVzaXplOiBfcHJvcFR5cGVzLmRlZmF1bHQuZnVuYyxcblxuICAvKlxuICAqIERlZmluZXMgd2hpY2ggcmVzaXplIGhhbmRsZXMgc2hvdWxkIGJlIHJlbmRlcmVkIChkZWZhdWx0OiAnc2UnKVxuICAqICdzJyAtIFNvdXRoIGhhbmRsZSAoYm90dG9tLWNlbnRlcilcbiAgKiAndycgLSBXZXN0IGhhbmRsZSAobGVmdC1jZW50ZXIpXG4gICogJ2UnIC0gRWFzdCBoYW5kbGUgKHJpZ2h0LWNlbnRlcilcbiAgKiAnbicgLSBOb3J0aCBoYW5kbGUgKHRvcC1jZW50ZXIpXG4gICogJ3N3JyAtIFNvdXRod2VzdCBoYW5kbGUgKGJvdHRvbS1sZWZ0KVxuICAqICdudycgLSBOb3J0aHdlc3QgaGFuZGxlICh0b3AtbGVmdClcbiAgKiAnc2UnIC0gU291dGhlYXN0IGhhbmRsZSAoYm90dG9tLXJpZ2h0KVxuICAqICduZScgLSBOb3J0aGVhc3QgaGFuZGxlICh0b3AtY2VudGVyKVxuICAqICovXG4gIHJlc2l6ZUhhbmRsZXM6IF9wcm9wVHlwZXMuZGVmYXVsdC5hcnJheU9mKF9wcm9wVHlwZXMuZGVmYXVsdC5vbmVPZihbJ3MnLCAndycsICdlJywgJ24nLCAnc3cnLCAnbncnLCAnc2UnLCAnbmUnXSkpLFxuXG4gIC8qXG4gICogSWYgYHRyYW5zZm9ybTogc2NhbGUobilgIGlzIHNldCBvbiB0aGUgcGFyZW50LCB0aGlzIHNob3VsZCBiZSBzZXQgdG8gYG5gLlxuICAqICovXG4gIHRyYW5zZm9ybVNjYWxlOiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLFxuXG4gIC8qXG4gICAqIEluaXRpYWwgd2lkdGhcbiAgICovXG4gIHdpZHRoOiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLmlzUmVxdWlyZWRcbn07XG5leHBvcnRzLnJlc2l6YWJsZVByb3BzID0gcmVzaXphYmxlUHJvcHM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNsb25lRWxlbWVudCA9IGNsb25lRWxlbWVudDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbi8vIFJlYWN0LmFkZG9ucy5jbG9uZVdpdGhQcm9wcyBsb29rLWFsaWtlIHRoYXQgbWVyZ2VzIHN0eWxlICYgY2xhc3NOYW1lLlxuZnVuY3Rpb24gY2xvbmVFbGVtZW50KGVsZW1lbnQsIHByb3BzKSB7XG4gIGlmIChwcm9wcy5zdHlsZSAmJiBlbGVtZW50LnByb3BzLnN0eWxlKSB7XG4gICAgcHJvcHMuc3R5bGUgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGVsZW1lbnQucHJvcHMuc3R5bGUpLCBwcm9wcy5zdHlsZSk7XG4gIH1cblxuICBpZiAocHJvcHMuY2xhc3NOYW1lICYmIGVsZW1lbnQucHJvcHMuY2xhc3NOYW1lKSB7XG4gICAgcHJvcHMuY2xhc3NOYW1lID0gZWxlbWVudC5wcm9wcy5jbGFzc05hbWUgKyBcIiBcIiArIHByb3BzLmNsYXNzTmFtZTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGVsZW1lbnQsIHByb3BzKTtcbn0iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJEb24ndCBpbnN0YW50aWF0ZSBSZXNpemFibGUgZGlyZWN0bHkhIFVzZSByZXF1aXJlKCdyZWFjdC1yZXNpemFibGUnKS5SZXNpemFibGVcIik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5SZXNpemFibGUgPSByZXF1aXJlKCcuL2J1aWxkL1Jlc2l6YWJsZScpLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5SZXNpemFibGVCb3ggPSByZXF1aXJlKCcuL2J1aWxkL1Jlc2l6YWJsZUJveCcpLmRlZmF1bHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRHJhZ2dhYmxlQ29yZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfRHJhZ2dhYmxlQ29yZS5kZWZhdWx0O1xuICB9XG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9yZWFjdERvbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cbnZhciBfY2xzeDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbHN4XCIpKTtcblxudmFyIF9kb21GbnMgPSByZXF1aXJlKFwiLi91dGlscy9kb21GbnNcIik7XG5cbnZhciBfcG9zaXRpb25GbnMgPSByZXF1aXJlKFwiLi91dGlscy9wb3NpdGlvbkZuc1wiKTtcblxudmFyIF9zaGltcyA9IHJlcXVpcmUoXCIuL3V0aWxzL3NoaW1zXCIpO1xuXG52YXIgX0RyYWdnYWJsZUNvcmUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0RyYWdnYWJsZUNvcmVcIikpO1xuXG52YXIgX2xvZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvbG9nXCIpKTtcblxudmFyIF9leGNsdWRlZCA9IFtcImF4aXNcIiwgXCJib3VuZHNcIiwgXCJjaGlsZHJlblwiLCBcImRlZmF1bHRQb3NpdGlvblwiLCBcImRlZmF1bHRDbGFzc05hbWVcIiwgXCJkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dpbmdcIiwgXCJkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dlZFwiLCBcInBvc2l0aW9uXCIsIFwicG9zaXRpb25PZmZzZXRcIiwgXCJzY2FsZVwiXTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlQmFiZWxJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgdmFyIGNhY2hlTm9kZUludGVyb3AgPSBuZXcgV2Vha01hcCgpOyByZXR1cm4gKF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyByZXR1cm4gbm9kZUludGVyb3AgPyBjYWNoZU5vZGVJbnRlcm9wIDogY2FjaGVCYWJlbEludGVyb3A7IH0pKG5vZGVJbnRlcm9wKTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmosIG5vZGVJbnRlcm9wKSB7IGlmICghbm9kZUludGVyb3AgJiYgb2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IGRlZmF1bHQ6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKGtleSAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpOyB2YXIga2V5LCBpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSB7IHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsgfSBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbi8vXG4vLyBEZWZpbmUgPERyYWdnYWJsZT5cbi8vXG52YXIgRHJhZ2dhYmxlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhEcmFnZ2FibGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoRHJhZ2dhYmxlKTtcblxuICBmdW5jdGlvbiBEcmFnZ2FibGUocHJvcHNcbiAgLyo6IERyYWdnYWJsZVByb3BzKi9cbiAgKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyYWdnYWJsZSk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkRyYWdTdGFydFwiLCBmdW5jdGlvbiAoZSwgY29yZURhdGEpIHtcbiAgICAgICgwLCBfbG9nLmRlZmF1bHQpKCdEcmFnZ2FibGU6IG9uRHJhZ1N0YXJ0OiAlaicsIGNvcmVEYXRhKTsgLy8gU2hvcnQtY2lyY3VpdCBpZiB1c2VyJ3MgY2FsbGJhY2sga2lsbGVkIGl0LlxuXG4gICAgICB2YXIgc2hvdWxkU3RhcnQgPSBfdGhpcy5wcm9wcy5vblN0YXJ0KGUsICgwLCBfcG9zaXRpb25GbnMuY3JlYXRlRHJhZ2dhYmxlRGF0YSkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIGNvcmVEYXRhKSk7IC8vIEtpbGxzIHN0YXJ0IGV2ZW50IG9uIGNvcmUgYXMgd2VsbCwgc28gbW92ZSBoYW5kbGVycyBhcmUgbmV2ZXIgYm91bmQuXG5cblxuICAgICAgaWYgKHNob3VsZFN0YXJ0ID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRyYWdnaW5nOiB0cnVlLFxuICAgICAgICBkcmFnZ2VkOiB0cnVlXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkRyYWdcIiwgZnVuY3Rpb24gKGUsIGNvcmVEYXRhKSB7XG4gICAgICBpZiAoIV90aGlzLnN0YXRlLmRyYWdnaW5nKSByZXR1cm4gZmFsc2U7XG4gICAgICAoMCwgX2xvZy5kZWZhdWx0KSgnRHJhZ2dhYmxlOiBvbkRyYWc6ICVqJywgY29yZURhdGEpO1xuICAgICAgdmFyIHVpRGF0YSA9ICgwLCBfcG9zaXRpb25GbnMuY3JlYXRlRHJhZ2dhYmxlRGF0YSkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIGNvcmVEYXRhKTtcbiAgICAgIHZhciBuZXdTdGF0ZVxuICAgICAgLyo6ICRTaGFwZTxEcmFnZ2FibGVTdGF0ZT4qL1xuICAgICAgPSB7XG4gICAgICAgIHg6IHVpRGF0YS54LFxuICAgICAgICB5OiB1aURhdGEueVxuICAgICAgfTsgLy8gS2VlcCB3aXRoaW4gYm91bmRzLlxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuYm91bmRzKSB7XG4gICAgICAgIC8vIFNhdmUgb3JpZ2luYWwgeCBhbmQgeS5cbiAgICAgICAgdmFyIHggPSBuZXdTdGF0ZS54LFxuICAgICAgICAgICAgeSA9IG5ld1N0YXRlLnk7IC8vIEFkZCBzbGFjayB0byB0aGUgdmFsdWVzIHVzZWQgdG8gY2FsY3VsYXRlIGJvdW5kIHBvc2l0aW9uLiBUaGlzIHdpbGwgZW5zdXJlIHRoYXQgaWZcbiAgICAgICAgLy8gd2Ugc3RhcnQgcmVtb3Zpbmcgc2xhY2ssIHRoZSBlbGVtZW50IHdvbid0IHJlYWN0IHRvIGl0IHJpZ2h0IGF3YXkgdW50aWwgaXQncyBiZWVuXG4gICAgICAgIC8vIGNvbXBsZXRlbHkgcmVtb3ZlZC5cblxuICAgICAgICBuZXdTdGF0ZS54ICs9IF90aGlzLnN0YXRlLnNsYWNrWDtcbiAgICAgICAgbmV3U3RhdGUueSArPSBfdGhpcy5zdGF0ZS5zbGFja1k7IC8vIEdldCBib3VuZCBwb3NpdGlvbi4gVGhpcyB3aWxsIGNlaWwvZmxvb3IgdGhlIHggYW5kIHkgd2l0aGluIHRoZSBib3VuZGFyaWVzLlxuXG4gICAgICAgIHZhciBfZ2V0Qm91bmRQb3NpdGlvbiA9ICgwLCBfcG9zaXRpb25GbnMuZ2V0Qm91bmRQb3NpdGlvbikoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIG5ld1N0YXRlLngsIG5ld1N0YXRlLnkpLFxuICAgICAgICAgICAgX2dldEJvdW5kUG9zaXRpb24yID0gX3NsaWNlZFRvQXJyYXkoX2dldEJvdW5kUG9zaXRpb24sIDIpLFxuICAgICAgICAgICAgbmV3U3RhdGVYID0gX2dldEJvdW5kUG9zaXRpb24yWzBdLFxuICAgICAgICAgICAgbmV3U3RhdGVZID0gX2dldEJvdW5kUG9zaXRpb24yWzFdO1xuXG4gICAgICAgIG5ld1N0YXRlLnggPSBuZXdTdGF0ZVg7XG4gICAgICAgIG5ld1N0YXRlLnkgPSBuZXdTdGF0ZVk7IC8vIFJlY2FsY3VsYXRlIHNsYWNrIGJ5IG5vdGluZyBob3cgbXVjaCB3YXMgc2hhdmVkIGJ5IHRoZSBib3VuZFBvc2l0aW9uIGhhbmRsZXIuXG5cbiAgICAgICAgbmV3U3RhdGUuc2xhY2tYID0gX3RoaXMuc3RhdGUuc2xhY2tYICsgKHggLSBuZXdTdGF0ZS54KTtcbiAgICAgICAgbmV3U3RhdGUuc2xhY2tZID0gX3RoaXMuc3RhdGUuc2xhY2tZICsgKHkgLSBuZXdTdGF0ZS55KTsgLy8gVXBkYXRlIHRoZSBldmVudCB3ZSBmaXJlIHRvIHJlZmxlY3Qgd2hhdCByZWFsbHkgaGFwcGVuZWQgYWZ0ZXIgYm91bmRzIHRvb2sgZWZmZWN0LlxuXG4gICAgICAgIHVpRGF0YS54ID0gbmV3U3RhdGUueDtcbiAgICAgICAgdWlEYXRhLnkgPSBuZXdTdGF0ZS55O1xuICAgICAgICB1aURhdGEuZGVsdGFYID0gbmV3U3RhdGUueCAtIF90aGlzLnN0YXRlLng7XG4gICAgICAgIHVpRGF0YS5kZWx0YVkgPSBuZXdTdGF0ZS55IC0gX3RoaXMuc3RhdGUueTtcbiAgICAgIH0gLy8gU2hvcnQtY2lyY3VpdCBpZiB1c2VyJ3MgY2FsbGJhY2sga2lsbGVkIGl0LlxuXG5cbiAgICAgIHZhciBzaG91bGRVcGRhdGUgPSBfdGhpcy5wcm9wcy5vbkRyYWcoZSwgdWlEYXRhKTtcblxuICAgICAgaWYgKHNob3VsZFVwZGF0ZSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uRHJhZ1N0b3BcIiwgZnVuY3Rpb24gKGUsIGNvcmVEYXRhKSB7XG4gICAgICBpZiAoIV90aGlzLnN0YXRlLmRyYWdnaW5nKSByZXR1cm4gZmFsc2U7IC8vIFNob3J0LWNpcmN1aXQgaWYgdXNlcidzIGNhbGxiYWNrIGtpbGxlZCBpdC5cblxuICAgICAgdmFyIHNob3VsZENvbnRpbnVlID0gX3RoaXMucHJvcHMub25TdG9wKGUsICgwLCBfcG9zaXRpb25GbnMuY3JlYXRlRHJhZ2dhYmxlRGF0YSkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIGNvcmVEYXRhKSk7XG5cbiAgICAgIGlmIChzaG91bGRDb250aW51ZSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgICgwLCBfbG9nLmRlZmF1bHQpKCdEcmFnZ2FibGU6IG9uRHJhZ1N0b3A6ICVqJywgY29yZURhdGEpO1xuICAgICAgdmFyIG5ld1N0YXRlXG4gICAgICAvKjogJFNoYXBlPERyYWdnYWJsZVN0YXRlPiovXG4gICAgICA9IHtcbiAgICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgICBzbGFja1g6IDAsXG4gICAgICAgIHNsYWNrWTogMFxuICAgICAgfTsgLy8gSWYgdGhpcyBpcyBhIGNvbnRyb2xsZWQgY29tcG9uZW50LCB0aGUgcmVzdWx0IG9mIHRoaXMgb3BlcmF0aW9uIHdpbGwgYmUgdG9cbiAgICAgIC8vIHJldmVydCBiYWNrIHRvIHRoZSBvbGQgcG9zaXRpb24uIFdlIGV4cGVjdCBhIGhhbmRsZXIgb24gYG9uRHJhZ1N0b3BgLCBhdCB0aGUgbGVhc3QuXG5cbiAgICAgIHZhciBjb250cm9sbGVkID0gQm9vbGVhbihfdGhpcy5wcm9wcy5wb3NpdGlvbik7XG5cbiAgICAgIGlmIChjb250cm9sbGVkKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wcyRwb3NpdGlvbiA9IF90aGlzLnByb3BzLnBvc2l0aW9uLFxuICAgICAgICAgICAgeCA9IF90aGlzJHByb3BzJHBvc2l0aW9uLngsXG4gICAgICAgICAgICB5ID0gX3RoaXMkcHJvcHMkcG9zaXRpb24ueTtcbiAgICAgICAgbmV3U3RhdGUueCA9IHg7XG4gICAgICAgIG5ld1N0YXRlLnkgPSB5O1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgfSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8vIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBjdXJyZW50bHkgZHJhZ2dpbmcuXG4gICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICAvLyBXaGV0aGVyIG9yIG5vdCB3ZSBoYXZlIGJlZW4gZHJhZ2dlZCBiZWZvcmUuXG4gICAgICBkcmFnZ2VkOiBmYWxzZSxcbiAgICAgIC8vIEN1cnJlbnQgdHJhbnNmb3JtIHggYW5kIHkuXG4gICAgICB4OiBwcm9wcy5wb3NpdGlvbiA/IHByb3BzLnBvc2l0aW9uLnggOiBwcm9wcy5kZWZhdWx0UG9zaXRpb24ueCxcbiAgICAgIHk6IHByb3BzLnBvc2l0aW9uID8gcHJvcHMucG9zaXRpb24ueSA6IHByb3BzLmRlZmF1bHRQb3NpdGlvbi55LFxuICAgICAgcHJldlByb3BzUG9zaXRpb246IF9vYmplY3RTcHJlYWQoe30sIHByb3BzLnBvc2l0aW9uKSxcbiAgICAgIC8vIFVzZWQgZm9yIGNvbXBlbnNhdGluZyBmb3Igb3V0LW9mLWJvdW5kcyBkcmFnc1xuICAgICAgc2xhY2tYOiAwLFxuICAgICAgc2xhY2tZOiAwLFxuICAgICAgLy8gQ2FuIG9ubHkgZGV0ZXJtaW5lIGlmIFNWRyBhZnRlciBtb3VudGluZ1xuICAgICAgaXNFbGVtZW50U1ZHOiBmYWxzZVxuICAgIH07XG5cbiAgICBpZiAocHJvcHMucG9zaXRpb24gJiYgIShwcm9wcy5vbkRyYWcgfHwgcHJvcHMub25TdG9wKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybignQSBgcG9zaXRpb25gIHdhcyBhcHBsaWVkIHRvIHRoaXMgPERyYWdnYWJsZT4sIHdpdGhvdXQgZHJhZyBoYW5kbGVycy4gVGhpcyB3aWxsIG1ha2UgdGhpcyAnICsgJ2NvbXBvbmVudCBlZmZlY3RpdmVseSB1bmRyYWdnYWJsZS4gUGxlYXNlIGF0dGFjaCBgb25EcmFnYCBvciBgb25TdG9wYCBoYW5kbGVycyBzbyB5b3UgY2FuIGFkanVzdCB0aGUgJyArICdgcG9zaXRpb25gIG9mIHRoaXMgZWxlbWVudC4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRHJhZ2dhYmxlLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGUgZWxlbWVudCBwYXNzZWQgaXMgYW4gaW5zdGFuY2VvZiBTVkdFbGVtZW50XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5TVkdFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLmZpbmRET01Ob2RlKCkgaW5zdGFuY2VvZiB3aW5kb3cuU1ZHRWxlbWVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpc0VsZW1lbnRTVkc6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRyYWdnaW5nOiBmYWxzZVxuICAgICAgfSk7IC8vIHByZXZlbnRzIGludmFyaWFudCBpZiB1bm1vdW50ZWQgd2hpbGUgZHJhZ2dpbmdcbiAgICB9IC8vIFJlYWN0IFN0cmljdCBNb2RlIGNvbXBhdGliaWxpdHk6IGlmIGBub2RlUmVmYCBpcyBwYXNzZWQsIHdlIHdpbGwgdXNlIGl0IGluc3RlYWQgb2YgdHJ5aW5nIHRvIGZpbmRcbiAgICAvLyB0aGUgdW5kZXJseWluZyBET00gbm9kZSBvdXJzZWx2ZXMuIFNlZSB0aGUgUkVBRE1FIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuXG4gIH0sIHtcbiAgICBrZXk6IFwiZmluZERPTU5vZGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmluZERPTU5vZGUoKVxuICAgIC8qOiA/SFRNTEVsZW1lbnQqL1xuICAgIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyRub2RlUmVmJGMsIF90aGlzJHByb3BzLCBfdGhpcyRwcm9wcyRub2RlUmVmO1xuXG4gICAgICByZXR1cm4gKF90aGlzJHByb3BzJG5vZGVSZWYkYyA9IChfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMpID09PSBudWxsIHx8IF90aGlzJHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX3RoaXMkcHJvcHMkbm9kZVJlZiA9IF90aGlzJHByb3BzLm5vZGVSZWYpID09PSBudWxsIHx8IF90aGlzJHByb3BzJG5vZGVSZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJHByb3BzJG5vZGVSZWYuY3VycmVudCkgIT09IG51bGwgJiYgX3RoaXMkcHJvcHMkbm9kZVJlZiRjICE9PSB2b2lkIDAgPyBfdGhpcyRwcm9wcyRub2RlUmVmJGMgOiBfcmVhY3REb20uZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpXG4gICAgLyo6IFJlYWN0RWxlbWVudDxhbnk+Ki9cbiAgICB7XG4gICAgICB2YXIgX2Nsc3g7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGF4aXMgPSBfdGhpcyRwcm9wczIuYXhpcyxcbiAgICAgICAgICBib3VuZHMgPSBfdGhpcyRwcm9wczIuYm91bmRzLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMyLmNoaWxkcmVuLFxuICAgICAgICAgIGRlZmF1bHRQb3NpdGlvbiA9IF90aGlzJHByb3BzMi5kZWZhdWx0UG9zaXRpb24sXG4gICAgICAgICAgZGVmYXVsdENsYXNzTmFtZSA9IF90aGlzJHByb3BzMi5kZWZhdWx0Q2xhc3NOYW1lLFxuICAgICAgICAgIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2luZyA9IF90aGlzJHByb3BzMi5kZWZhdWx0Q2xhc3NOYW1lRHJhZ2dpbmcsXG4gICAgICAgICAgZGVmYXVsdENsYXNzTmFtZURyYWdnZWQgPSBfdGhpcyRwcm9wczIuZGVmYXVsdENsYXNzTmFtZURyYWdnZWQsXG4gICAgICAgICAgcG9zaXRpb24gPSBfdGhpcyRwcm9wczIucG9zaXRpb24sXG4gICAgICAgICAgcG9zaXRpb25PZmZzZXQgPSBfdGhpcyRwcm9wczIucG9zaXRpb25PZmZzZXQsXG4gICAgICAgICAgc2NhbGUgPSBfdGhpcyRwcm9wczIuc2NhbGUsXG4gICAgICAgICAgZHJhZ2dhYmxlQ29yZVByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF90aGlzJHByb3BzMiwgX2V4Y2x1ZGVkKTtcblxuICAgICAgdmFyIHN0eWxlID0ge307XG4gICAgICB2YXIgc3ZnVHJhbnNmb3JtID0gbnVsbDsgLy8gSWYgdGhpcyBpcyBjb250cm9sbGVkLCB3ZSBkb24ndCB3YW50IHRvIG1vdmUgaXQgLSB1bmxlc3MgaXQncyBkcmFnZ2luZy5cblxuICAgICAgdmFyIGNvbnRyb2xsZWQgPSBCb29sZWFuKHBvc2l0aW9uKTtcbiAgICAgIHZhciBkcmFnZ2FibGUgPSAhY29udHJvbGxlZCB8fCB0aGlzLnN0YXRlLmRyYWdnaW5nO1xuICAgICAgdmFyIHZhbGlkUG9zaXRpb24gPSBwb3NpdGlvbiB8fCBkZWZhdWx0UG9zaXRpb247XG4gICAgICB2YXIgdHJhbnNmb3JtT3B0cyA9IHtcbiAgICAgICAgLy8gU2V0IGxlZnQgaWYgaG9yaXpvbnRhbCBkcmFnIGlzIGVuYWJsZWRcbiAgICAgICAgeDogKDAsIF9wb3NpdGlvbkZucy5jYW5EcmFnWCkodGhpcykgJiYgZHJhZ2dhYmxlID8gdGhpcy5zdGF0ZS54IDogdmFsaWRQb3NpdGlvbi54LFxuICAgICAgICAvLyBTZXQgdG9wIGlmIHZlcnRpY2FsIGRyYWcgaXMgZW5hYmxlZFxuICAgICAgICB5OiAoMCwgX3Bvc2l0aW9uRm5zLmNhbkRyYWdZKSh0aGlzKSAmJiBkcmFnZ2FibGUgPyB0aGlzLnN0YXRlLnkgOiB2YWxpZFBvc2l0aW9uLnlcbiAgICAgIH07IC8vIElmIHRoaXMgZWxlbWVudCB3YXMgU1ZHLCB3ZSB1c2UgdGhlIGB0cmFuc2Zvcm1gIGF0dHJpYnV0ZS5cblxuICAgICAgaWYgKHRoaXMuc3RhdGUuaXNFbGVtZW50U1ZHKSB7XG4gICAgICAgIHN2Z1RyYW5zZm9ybSA9ICgwLCBfZG9tRm5zLmNyZWF0ZVNWR1RyYW5zZm9ybSkodHJhbnNmb3JtT3B0cywgcG9zaXRpb25PZmZzZXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQWRkIGEgQ1NTIHRyYW5zZm9ybSB0byBtb3ZlIHRoZSBlbGVtZW50IGFyb3VuZC4gVGhpcyBhbGxvd3MgdXMgdG8gbW92ZSB0aGUgZWxlbWVudCBhcm91bmRcbiAgICAgICAgLy8gd2l0aG91dCB3b3JyeWluZyBhYm91dCB3aGV0aGVyIG9yIG5vdCBpdCBpcyByZWxhdGl2ZWx5IG9yIGFic29sdXRlbHkgcG9zaXRpb25lZC5cbiAgICAgICAgLy8gSWYgdGhlIGl0ZW0geW91IGFyZSBkcmFnZ2luZyBhbHJlYWR5IGhhcyBhIHRyYW5zZm9ybSBzZXQsIHdyYXAgaXQgaW4gYSA8c3Bhbj4gc28gPERyYWdnYWJsZT5cbiAgICAgICAgLy8gaGFzIGEgY2xlYW4gc2xhdGUuXG4gICAgICAgIHN0eWxlID0gKDAsIF9kb21GbnMuY3JlYXRlQ1NTVHJhbnNmb3JtKSh0cmFuc2Zvcm1PcHRzLCBwb3NpdGlvbk9mZnNldCk7XG4gICAgICB9IC8vIE1hcmsgd2l0aCBjbGFzcyB3aGlsZSBkcmFnZ2luZ1xuXG5cbiAgICAgIHZhciBjbGFzc05hbWUgPSAoMCwgX2Nsc3gyLmRlZmF1bHQpKGNoaWxkcmVuLnByb3BzLmNsYXNzTmFtZSB8fCAnJywgZGVmYXVsdENsYXNzTmFtZSwgKF9jbHN4ID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xzeCwgZGVmYXVsdENsYXNzTmFtZURyYWdnaW5nLCB0aGlzLnN0YXRlLmRyYWdnaW5nKSwgX2RlZmluZVByb3BlcnR5KF9jbHN4LCBkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dlZCwgdGhpcy5zdGF0ZS5kcmFnZ2VkKSwgX2Nsc3gpKTsgLy8gUmV1c2UgdGhlIGNoaWxkIHByb3ZpZGVkXG4gICAgICAvLyBUaGlzIG1ha2VzIGl0IGZsZXhpYmxlIHRvIHVzZSB3aGF0ZXZlciBlbGVtZW50IGlzIHdhbnRlZCAoZGl2LCB1bCwgZXRjKVxuXG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0RyYWdnYWJsZUNvcmUuZGVmYXVsdCwgX2V4dGVuZHMoe30sIGRyYWdnYWJsZUNvcmVQcm9wcywge1xuICAgICAgICBvblN0YXJ0OiB0aGlzLm9uRHJhZ1N0YXJ0LFxuICAgICAgICBvbkRyYWc6IHRoaXMub25EcmFnLFxuICAgICAgICBvblN0b3A6IHRoaXMub25EcmFnU3RvcFxuICAgICAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbiksIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGNoaWxkcmVuLnByb3BzLnN0eWxlKSwgc3R5bGUpLFxuICAgICAgICB0cmFuc2Zvcm06IHN2Z1RyYW5zZm9ybVxuICAgICAgfSkpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiAvLyBSZWFjdCAxNi4zK1xuICAgIC8vIEFyaXR5IChwcm9wcywgc3RhdGUpXG4gICAgZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKF9yZWYsIF9yZWYyKVxuICAgIC8qOiA/JFNoYXBlPERyYWdnYWJsZVN0YXRlPiovXG4gICAge1xuICAgICAgdmFyIHBvc2l0aW9uID0gX3JlZi5wb3NpdGlvbjtcbiAgICAgIHZhciBwcmV2UHJvcHNQb3NpdGlvbiA9IF9yZWYyLnByZXZQcm9wc1Bvc2l0aW9uO1xuXG4gICAgICAvLyBTZXQgeC95IGlmIGEgbmV3IHBvc2l0aW9uIGlzIHByb3ZpZGVkIGluIHByb3BzIHRoYXQgaXMgZGlmZmVyZW50IHRoYW4gdGhlIHByZXZpb3VzLlxuICAgICAgaWYgKHBvc2l0aW9uICYmICghcHJldlByb3BzUG9zaXRpb24gfHwgcG9zaXRpb24ueCAhPT0gcHJldlByb3BzUG9zaXRpb24ueCB8fCBwb3NpdGlvbi55ICE9PSBwcmV2UHJvcHNQb3NpdGlvbi55KSkge1xuICAgICAgICAoMCwgX2xvZy5kZWZhdWx0KSgnRHJhZ2dhYmxlOiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgJWonLCB7XG4gICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgICAgIHByZXZQcm9wc1Bvc2l0aW9uOiBwcmV2UHJvcHNQb3NpdGlvblxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB4OiBwb3NpdGlvbi54LFxuICAgICAgICAgIHk6IHBvc2l0aW9uLnksXG4gICAgICAgICAgcHJldlByb3BzUG9zaXRpb246IF9vYmplY3RTcHJlYWQoe30sIHBvc2l0aW9uKVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRHJhZ2dhYmxlO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBEcmFnZ2FibGU7XG5cbl9kZWZpbmVQcm9wZXJ0eShEcmFnZ2FibGUsIFwiZGlzcGxheU5hbWVcIiwgJ0RyYWdnYWJsZScpO1xuXG5fZGVmaW5lUHJvcGVydHkoRHJhZ2dhYmxlLCBcInByb3BUeXBlc1wiLCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIF9EcmFnZ2FibGVDb3JlLmRlZmF1bHQucHJvcFR5cGVzKSwge30sIHtcbiAgLyoqXG4gICAqIGBheGlzYCBkZXRlcm1pbmVzIHdoaWNoIGF4aXMgdGhlIGRyYWdnYWJsZSBjYW4gbW92ZS5cbiAgICpcbiAgICogIE5vdGUgdGhhdCBhbGwgY2FsbGJhY2tzIHdpbGwgc3RpbGwgcmV0dXJuIGRhdGEgYXMgbm9ybWFsLiBUaGlzIG9ubHlcbiAgICogIGNvbnRyb2xzIGZsdXNoaW5nIHRvIHRoZSBET00uXG4gICAqXG4gICAqICdib3RoJyBhbGxvd3MgbW92ZW1lbnQgaG9yaXpvbnRhbGx5IGFuZCB2ZXJ0aWNhbGx5LlxuICAgKiAneCcgbGltaXRzIG1vdmVtZW50IHRvIGhvcml6b250YWwgYXhpcy5cbiAgICogJ3knIGxpbWl0cyBtb3ZlbWVudCB0byB2ZXJ0aWNhbCBheGlzLlxuICAgKiAnbm9uZScgbGltaXRzIGFsbCBtb3ZlbWVudC5cbiAgICpcbiAgICogRGVmYXVsdHMgdG8gJ2JvdGgnLlxuICAgKi9cbiAgYXhpczogX3Byb3BUeXBlcy5kZWZhdWx0Lm9uZU9mKFsnYm90aCcsICd4JywgJ3knLCAnbm9uZSddKSxcblxuICAvKipcbiAgICogYGJvdW5kc2AgZGV0ZXJtaW5lcyB0aGUgcmFuZ2Ugb2YgbW92ZW1lbnQgYXZhaWxhYmxlIHRvIHRoZSBlbGVtZW50LlxuICAgKiBBdmFpbGFibGUgdmFsdWVzIGFyZTpcbiAgICpcbiAgICogJ3BhcmVudCcgcmVzdHJpY3RzIG1vdmVtZW50IHdpdGhpbiB0aGUgRHJhZ2dhYmxlJ3MgcGFyZW50IG5vZGUuXG4gICAqXG4gICAqIEFsdGVybmF0aXZlbHksIHBhc3MgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzLCBhbGwgb2Ygd2hpY2ggYXJlIG9wdGlvbmFsOlxuICAgKlxuICAgKiB7bGVmdDogTEVGVF9CT1VORCwgcmlnaHQ6IFJJR0hUX0JPVU5ELCBib3R0b206IEJPVFRPTV9CT1VORCwgdG9wOiBUT1BfQk9VTkR9XG4gICAqXG4gICAqIEFsbCB2YWx1ZXMgYXJlIGluIHB4LlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKlxuICAgKiBgYGBqc3hcbiAgICogICBsZXQgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICogICAgICAgICByZXR1cm4gKFxuICAgKiAgICAgICAgICAgIDxEcmFnZ2FibGUgYm91bmRzPXt7cmlnaHQ6IDMwMCwgYm90dG9tOiAzMDB9fT5cbiAgICogICAgICAgICAgICAgIDxkaXY+Q29udGVudDwvZGl2PlxuICAgKiAgICAgICAgICAgPC9EcmFnZ2FibGU+XG4gICAqICAgICAgICAgKTtcbiAgICogICAgICAgfVxuICAgKiAgIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIGJvdW5kczogX3Byb3BUeXBlcy5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlcy5kZWZhdWx0LnNoYXBlKHtcbiAgICBsZWZ0OiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLFxuICAgIHJpZ2h0OiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLFxuICAgIHRvcDogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlcixcbiAgICBib3R0b206IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXJcbiAgfSksIF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMuZGVmYXVsdC5vbmVPZihbZmFsc2VdKV0pLFxuICBkZWZhdWx0Q2xhc3NOYW1lOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICBkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dpbmc6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2VkOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBgZGVmYXVsdFBvc2l0aW9uYCBzcGVjaWZpZXMgdGhlIHggYW5kIHkgdGhhdCB0aGUgZHJhZ2dlZCBpdGVtIHNob3VsZCBzdGFydCBhdFxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKlxuICAgKiBgYGBqc3hcbiAgICogICAgICBsZXQgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICogICAgICAgICAgICAgIHJldHVybiAoXG4gICAqICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZSBkZWZhdWx0UG9zaXRpb249e3t4OiAyNSwgeTogMjV9fT5cbiAgICogICAgICAgICAgICAgICAgICAgICAgPGRpdj5JIHN0YXJ0IHdpdGggdHJhbnNmb3JtWDogMjVweCBhbmQgdHJhbnNmb3JtWTogMjVweDs8L2Rpdj5cbiAgICogICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cbiAgICogICAgICAgICAgICAgICk7XG4gICAqICAgICAgICAgIH1cbiAgICogICAgICB9KTtcbiAgICogYGBgXG4gICAqL1xuICBkZWZhdWx0UG9zaXRpb246IF9wcm9wVHlwZXMuZGVmYXVsdC5zaGFwZSh7XG4gICAgeDogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlcixcbiAgICB5OiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyXG4gIH0pLFxuICBwb3NpdGlvbk9mZnNldDogX3Byb3BUeXBlcy5kZWZhdWx0LnNoYXBlKHtcbiAgICB4OiBfcHJvcFR5cGVzLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLCBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nXSksXG4gICAgeTogX3Byb3BUeXBlcy5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlciwgX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZ10pXG4gIH0pLFxuXG4gIC8qKlxuICAgKiBgcG9zaXRpb25gLCBpZiBwcmVzZW50LCBkZWZpbmVzIHRoZSBjdXJyZW50IHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50LlxuICAgKlxuICAgKiAgVGhpcyBpcyBzaW1pbGFyIHRvIGhvdyBmb3JtIGVsZW1lbnRzIGluIFJlYWN0IHdvcmsgLSBpZiBubyBgcG9zaXRpb25gIGlzIHN1cHBsaWVkLCB0aGUgY29tcG9uZW50XG4gICAqICBpcyB1bmNvbnRyb2xsZWQuXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqXG4gICAqIGBgYGpzeFxuICAgKiAgICAgIGxldCBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgKiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICogICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIHBvc2l0aW9uPXt7eDogMjUsIHk6IDI1fX0+XG4gICAqICAgICAgICAgICAgICAgICAgICAgIDxkaXY+SSBzdGFydCB3aXRoIHRyYW5zZm9ybVg6IDI1cHggYW5kIHRyYW5zZm9ybVk6IDI1cHg7PC9kaXY+XG4gICAqICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XG4gICAqICAgICAgICAgICAgICApO1xuICAgKiAgICAgICAgICB9XG4gICAqICAgICAgfSk7XG4gICAqIGBgYFxuICAgKi9cbiAgcG9zaXRpb246IF9wcm9wVHlwZXMuZGVmYXVsdC5zaGFwZSh7XG4gICAgeDogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlcixcbiAgICB5OiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyXG4gIH0pLFxuXG4gIC8qKlxuICAgKiBUaGVzZSBwcm9wZXJ0aWVzIHNob3VsZCBiZSBkZWZpbmVkIG9uIHRoZSBjaGlsZCwgbm90IGhlcmUuXG4gICAqL1xuICBjbGFzc05hbWU6IF9zaGltcy5kb250U2V0TWUsXG4gIHN0eWxlOiBfc2hpbXMuZG9udFNldE1lLFxuICB0cmFuc2Zvcm06IF9zaGltcy5kb250U2V0TWVcbn0pKTtcblxuX2RlZmluZVByb3BlcnR5KERyYWdnYWJsZSwgXCJkZWZhdWx0UHJvcHNcIiwgX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBfRHJhZ2dhYmxlQ29yZS5kZWZhdWx0LmRlZmF1bHRQcm9wcyksIHt9LCB7XG4gIGF4aXM6ICdib3RoJyxcbiAgYm91bmRzOiBmYWxzZSxcbiAgZGVmYXVsdENsYXNzTmFtZTogJ3JlYWN0LWRyYWdnYWJsZScsXG4gIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2luZzogJ3JlYWN0LWRyYWdnYWJsZS1kcmFnZ2luZycsXG4gIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2VkOiAncmVhY3QtZHJhZ2dhYmxlLWRyYWdnZWQnLFxuICBkZWZhdWx0UG9zaXRpb246IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfSxcbiAgc2NhbGU6IDFcbn0pKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX3JlYWN0RG9tID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblxudmFyIF9kb21GbnMgPSByZXF1aXJlKFwiLi91dGlscy9kb21GbnNcIik7XG5cbnZhciBfcG9zaXRpb25GbnMgPSByZXF1aXJlKFwiLi91dGlscy9wb3NpdGlvbkZuc1wiKTtcblxudmFyIF9zaGltcyA9IHJlcXVpcmUoXCIuL3V0aWxzL3NoaW1zXCIpO1xuXG52YXIgX2xvZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvbG9nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlQmFiZWxJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgdmFyIGNhY2hlTm9kZUludGVyb3AgPSBuZXcgV2Vha01hcCgpOyByZXR1cm4gKF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyByZXR1cm4gbm9kZUludGVyb3AgPyBjYWNoZU5vZGVJbnRlcm9wIDogY2FjaGVCYWJlbEludGVyb3A7IH0pKG5vZGVJbnRlcm9wKTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmosIG5vZGVJbnRlcm9wKSB7IGlmICghbm9kZUludGVyb3AgJiYgb2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IGRlZmF1bHQ6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKGtleSAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG4vLyBTaW1wbGUgYWJzdHJhY3Rpb24gZm9yIGRyYWdnaW5nIGV2ZW50cyBuYW1lcy5cbnZhciBldmVudHNGb3IgPSB7XG4gIHRvdWNoOiB7XG4gICAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgICBzdG9wOiAndG91Y2hlbmQnXG4gIH0sXG4gIG1vdXNlOiB7XG4gICAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICAgIG1vdmU6ICdtb3VzZW1vdmUnLFxuICAgIHN0b3A6ICdtb3VzZXVwJ1xuICB9XG59OyAvLyBEZWZhdWx0IHRvIG1vdXNlIGV2ZW50cy5cblxudmFyIGRyYWdFdmVudEZvciA9IGV2ZW50c0Zvci5tb3VzZTtcbi8qOjogdHlwZSBEcmFnZ2FibGVDb3JlU3RhdGUgPSB7XG4gIGRyYWdnaW5nOiBib29sZWFuLFxuICBsYXN0WDogbnVtYmVyLFxuICBsYXN0WTogbnVtYmVyLFxuICB0b3VjaElkZW50aWZpZXI6ID9udW1iZXJcbn07Ki9cblxuLyo6OiBleHBvcnQgdHlwZSBEcmFnZ2FibGVEYXRhID0ge1xuICBub2RlOiBIVE1MRWxlbWVudCxcbiAgeDogbnVtYmVyLCB5OiBudW1iZXIsXG4gIGRlbHRhWDogbnVtYmVyLCBkZWx0YVk6IG51bWJlcixcbiAgbGFzdFg6IG51bWJlciwgbGFzdFk6IG51bWJlcixcbn07Ki9cblxuLyo6OiBleHBvcnQgdHlwZSBEcmFnZ2FibGVFdmVudEhhbmRsZXIgPSAoZTogTW91c2VFdmVudCwgZGF0YTogRHJhZ2dhYmxlRGF0YSkgPT4gdm9pZCB8IGZhbHNlOyovXG5cbi8qOjogZXhwb3J0IHR5cGUgQ29udHJvbFBvc2l0aW9uID0ge3g6IG51bWJlciwgeTogbnVtYmVyfTsqL1xuXG4vKjo6IGV4cG9ydCB0eXBlIFBvc2l0aW9uT2Zmc2V0Q29udHJvbFBvc2l0aW9uID0ge3g6IG51bWJlcnxzdHJpbmcsIHk6IG51bWJlcnxzdHJpbmd9OyovXG5cbi8qOjogZXhwb3J0IHR5cGUgRHJhZ2dhYmxlQ29yZURlZmF1bHRQcm9wcyA9IHtcbiAgYWxsb3dBbnlDbGljazogYm9vbGVhbixcbiAgZGlzYWJsZWQ6IGJvb2xlYW4sXG4gIGVuYWJsZVVzZXJTZWxlY3RIYWNrOiBib29sZWFuLFxuICBvblN0YXJ0OiBEcmFnZ2FibGVFdmVudEhhbmRsZXIsXG4gIG9uRHJhZzogRHJhZ2dhYmxlRXZlbnRIYW5kbGVyLFxuICBvblN0b3A6IERyYWdnYWJsZUV2ZW50SGFuZGxlcixcbiAgb25Nb3VzZURvd246IChlOiBNb3VzZUV2ZW50KSA9PiB2b2lkLFxuICBzY2FsZTogbnVtYmVyLFxufTsqL1xuXG4vKjo6IGV4cG9ydCB0eXBlIERyYWdnYWJsZUNvcmVQcm9wcyA9IHtcbiAgLi4uRHJhZ2dhYmxlQ29yZURlZmF1bHRQcm9wcyxcbiAgY2FuY2VsOiBzdHJpbmcsXG4gIGNoaWxkcmVuOiBSZWFjdEVsZW1lbnQ8YW55PixcbiAgb2Zmc2V0UGFyZW50OiBIVE1MRWxlbWVudCxcbiAgZ3JpZDogW251bWJlciwgbnVtYmVyXSxcbiAgaGFuZGxlOiBzdHJpbmcsXG4gIG5vZGVSZWY/OiA/UmVhY3QuRWxlbWVudFJlZjxhbnk+LFxufTsqL1xuXG4vL1xuLy8gRGVmaW5lIDxEcmFnZ2FibGVDb3JlPi5cbi8vXG4vLyA8RHJhZ2dhYmxlQ29yZT4gaXMgZm9yIGFkdmFuY2VkIHVzYWdlIG9mIDxEcmFnZ2FibGU+LiBJdCBtYWludGFpbnMgbWluaW1hbCBpbnRlcm5hbCBzdGF0ZSBzbyBpdCBjYW5cbi8vIHdvcmsgd2VsbCB3aXRoIGxpYnJhcmllcyB0aGF0IHJlcXVpcmUgbW9yZSBjb250cm9sIG92ZXIgdGhlIGVsZW1lbnQuXG4vL1xudmFyIERyYWdnYWJsZUNvcmUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKERyYWdnYWJsZUNvcmUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoRHJhZ2dhYmxlQ29yZSk7XG5cbiAgZnVuY3Rpb24gRHJhZ2dhYmxlQ29yZSgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJhZ2dhYmxlQ29yZSk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInN0YXRlXCIsIHtcbiAgICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAgIC8vIFVzZWQgd2hpbGUgZHJhZ2dpbmcgdG8gZGV0ZXJtaW5lIGRlbHRhcy5cbiAgICAgIGxhc3RYOiBOYU4sXG4gICAgICBsYXN0WTogTmFOLFxuICAgICAgdG91Y2hJZGVudGlmaWVyOiBudWxsXG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwibW91bnRlZFwiLCBmYWxzZSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaGFuZGxlRHJhZ1N0YXJ0XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAvLyBNYWtlIGl0IHBvc3NpYmxlIHRvIGF0dGFjaCBldmVudCBoYW5kbGVycyBvbiB0b3Agb2YgdGhpcyBvbmUuXG4gICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlRG93bihlKTsgLy8gT25seSBhY2NlcHQgbGVmdC1jbGlja3MuXG5cblxuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5hbGxvd0FueUNsaWNrICYmIHR5cGVvZiBlLmJ1dHRvbiA9PT0gJ251bWJlcicgJiYgZS5idXR0b24gIT09IDApIHJldHVybiBmYWxzZTsgLy8gR2V0IG5vZGVzLiBCZSBzdXJlIHRvIGdyYWIgcmVsYXRpdmUgZG9jdW1lbnQgKGNvdWxkIGJlIGlmcmFtZWQpXG5cbiAgICAgIHZhciB0aGlzTm9kZSA9IF90aGlzLmZpbmRET01Ob2RlKCk7XG5cbiAgICAgIGlmICghdGhpc05vZGUgfHwgIXRoaXNOb2RlLm93bmVyRG9jdW1lbnQgfHwgIXRoaXNOb2RlLm93bmVyRG9jdW1lbnQuYm9keSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJzxEcmFnZ2FibGVDb3JlPiBub3QgbW91bnRlZCBvbiBEcmFnU3RhcnQhJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBvd25lckRvY3VtZW50ID0gdGhpc05vZGUub3duZXJEb2N1bWVudDsgLy8gU2hvcnQgY2lyY3VpdCBpZiBoYW5kbGUgb3IgY2FuY2VsIHByb3Agd2FzIHByb3ZpZGVkIGFuZCBzZWxlY3RvciBkb2Vzbid0IG1hdGNoLlxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuZGlzYWJsZWQgfHwgIShlLnRhcmdldCBpbnN0YW5jZW9mIG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuTm9kZSkgfHwgX3RoaXMucHJvcHMuaGFuZGxlICYmICEoMCwgX2RvbUZucy5tYXRjaGVzU2VsZWN0b3JBbmRQYXJlbnRzVG8pKGUudGFyZ2V0LCBfdGhpcy5wcm9wcy5oYW5kbGUsIHRoaXNOb2RlKSB8fCBfdGhpcy5wcm9wcy5jYW5jZWwgJiYgKDAsIF9kb21GbnMubWF0Y2hlc1NlbGVjdG9yQW5kUGFyZW50c1RvKShlLnRhcmdldCwgX3RoaXMucHJvcHMuY2FuY2VsLCB0aGlzTm9kZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBQcmV2ZW50IHNjcm9sbGluZyBvbiBtb2JpbGUgZGV2aWNlcywgbGlrZSBpcGFkL2lwaG9uZS5cbiAgICAgIC8vIEltcG9ydGFudCB0aGF0IHRoaXMgaXMgYWZ0ZXIgaGFuZGxlL2NhbmNlbC5cblxuXG4gICAgICBpZiAoZS50eXBlID09PSAndG91Y2hzdGFydCcpIGUucHJldmVudERlZmF1bHQoKTsgLy8gU2V0IHRvdWNoIGlkZW50aWZpZXIgaW4gY29tcG9uZW50IHN0YXRlIGlmIHRoaXMgaXMgYSB0b3VjaCBldmVudC4gVGhpcyBhbGxvd3MgdXMgdG9cbiAgICAgIC8vIGRpc3Rpbmd1aXNoIGJldHdlZW4gaW5kaXZpZHVhbCB0b3VjaGVzIG9uIG11bHRpdG91Y2ggc2NyZWVucyBieSBpZGVudGlmeWluZyB3aGljaFxuICAgICAgLy8gdG91Y2hwb2ludCB3YXMgc2V0IHRvIHRoaXMgZWxlbWVudC5cblxuICAgICAgdmFyIHRvdWNoSWRlbnRpZmllciA9ICgwLCBfZG9tRm5zLmdldFRvdWNoSWRlbnRpZmllcikoZSk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdG91Y2hJZGVudGlmaWVyOiB0b3VjaElkZW50aWZpZXJcbiAgICAgIH0pOyAvLyBHZXQgdGhlIGN1cnJlbnQgZHJhZyBwb2ludCBmcm9tIHRoZSBldmVudC4gVGhpcyBpcyB1c2VkIGFzIHRoZSBvZmZzZXQuXG5cblxuICAgICAgdmFyIHBvc2l0aW9uID0gKDAsIF9wb3NpdGlvbkZucy5nZXRDb250cm9sUG9zaXRpb24pKGUsIHRvdWNoSWRlbnRpZmllciwgX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgICAgaWYgKHBvc2l0aW9uID09IG51bGwpIHJldHVybjsgLy8gbm90IHBvc3NpYmxlIGJ1dCBzYXRpc2ZpZXMgZmxvd1xuXG4gICAgICB2YXIgeCA9IHBvc2l0aW9uLngsXG4gICAgICAgICAgeSA9IHBvc2l0aW9uLnk7IC8vIENyZWF0ZSBhbiBldmVudCBvYmplY3Qgd2l0aCBhbGwgdGhlIGRhdGEgcGFyZW50cyBuZWVkIHRvIG1ha2UgYSBkZWNpc2lvbiBoZXJlLlxuXG4gICAgICB2YXIgY29yZUV2ZW50ID0gKDAsIF9wb3NpdGlvbkZucy5jcmVhdGVDb3JlRGF0YSkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIHgsIHkpO1xuICAgICAgKDAsIF9sb2cuZGVmYXVsdCkoJ0RyYWdnYWJsZUNvcmU6IGhhbmRsZURyYWdTdGFydDogJWonLCBjb3JlRXZlbnQpOyAvLyBDYWxsIGV2ZW50IGhhbmRsZXIuIElmIGl0IHJldHVybnMgZXhwbGljaXQgZmFsc2UsIGNhbmNlbC5cblxuICAgICAgKDAsIF9sb2cuZGVmYXVsdCkoJ2NhbGxpbmcnLCBfdGhpcy5wcm9wcy5vblN0YXJ0KTtcblxuICAgICAgdmFyIHNob3VsZFVwZGF0ZSA9IF90aGlzLnByb3BzLm9uU3RhcnQoZSwgY29yZUV2ZW50KTtcblxuICAgICAgaWYgKHNob3VsZFVwZGF0ZSA9PT0gZmFsc2UgfHwgX3RoaXMubW91bnRlZCA9PT0gZmFsc2UpIHJldHVybjsgLy8gQWRkIGEgc3R5bGUgdG8gdGhlIGJvZHkgdG8gZGlzYWJsZSB1c2VyLXNlbGVjdC4gVGhpcyBwcmV2ZW50cyB0ZXh0IGZyb21cbiAgICAgIC8vIGJlaW5nIHNlbGVjdGVkIGFsbCBvdmVyIHRoZSBwYWdlLlxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuZW5hYmxlVXNlclNlbGVjdEhhY2spICgwLCBfZG9tRm5zLmFkZFVzZXJTZWxlY3RTdHlsZXMpKG93bmVyRG9jdW1lbnQpOyAvLyBJbml0aWF0ZSBkcmFnZ2luZy4gU2V0IHRoZSBjdXJyZW50IHggYW5kIHkgYXMgb2Zmc2V0c1xuICAgICAgLy8gc28gd2Uga25vdyBob3cgbXVjaCB3ZSd2ZSBtb3ZlZCBkdXJpbmcgdGhlIGRyYWcuIFRoaXMgYWxsb3dzIHVzXG4gICAgICAvLyB0byBkcmFnIGVsZW1lbnRzIGFyb3VuZCBldmVuIGlmIHRoZXkgaGF2ZSBiZWVuIG1vdmVkLCB3aXRob3V0IGlzc3VlLlxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRyYWdnaW5nOiB0cnVlLFxuICAgICAgICBsYXN0WDogeCxcbiAgICAgICAgbGFzdFk6IHlcbiAgICAgIH0pOyAvLyBBZGQgZXZlbnRzIHRvIHRoZSBkb2N1bWVudCBkaXJlY3RseSBzbyB3ZSBjYXRjaCB3aGVuIHRoZSB1c2VyJ3MgbW91c2UvdG91Y2ggbW92ZXMgb3V0c2lkZSBvZlxuICAgICAgLy8gdGhpcyBlbGVtZW50LiBXZSB1c2UgZGlmZmVyZW50IGV2ZW50cyBkZXBlbmRpbmcgb24gd2hldGhlciBvciBub3Qgd2UgaGF2ZSBkZXRlY3RlZCB0aGF0IHRoaXNcbiAgICAgIC8vIGlzIGEgdG91Y2gtY2FwYWJsZSBkZXZpY2UuXG5cblxuICAgICAgKDAsIF9kb21GbnMuYWRkRXZlbnQpKG93bmVyRG9jdW1lbnQsIGRyYWdFdmVudEZvci5tb3ZlLCBfdGhpcy5oYW5kbGVEcmFnKTtcbiAgICAgICgwLCBfZG9tRm5zLmFkZEV2ZW50KShvd25lckRvY3VtZW50LCBkcmFnRXZlbnRGb3Iuc3RvcCwgX3RoaXMuaGFuZGxlRHJhZ1N0b3ApO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImhhbmRsZURyYWdcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIC8vIEdldCB0aGUgY3VycmVudCBkcmFnIHBvaW50IGZyb20gdGhlIGV2ZW50LiBUaGlzIGlzIHVzZWQgYXMgdGhlIG9mZnNldC5cbiAgICAgIHZhciBwb3NpdGlvbiA9ICgwLCBfcG9zaXRpb25GbnMuZ2V0Q29udHJvbFBvc2l0aW9uKShlLCBfdGhpcy5zdGF0ZS50b3VjaElkZW50aWZpZXIsIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICAgIGlmIChwb3NpdGlvbiA9PSBudWxsKSByZXR1cm47XG4gICAgICB2YXIgeCA9IHBvc2l0aW9uLngsXG4gICAgICAgICAgeSA9IHBvc2l0aW9uLnk7IC8vIFNuYXAgdG8gZ3JpZCBpZiBwcm9wIGhhcyBiZWVuIHByb3ZpZGVkXG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KF90aGlzLnByb3BzLmdyaWQpKSB7XG4gICAgICAgIHZhciBkZWx0YVggPSB4IC0gX3RoaXMuc3RhdGUubGFzdFgsXG4gICAgICAgICAgICBkZWx0YVkgPSB5IC0gX3RoaXMuc3RhdGUubGFzdFk7XG5cbiAgICAgICAgdmFyIF9zbmFwVG9HcmlkID0gKDAsIF9wb3NpdGlvbkZucy5zbmFwVG9HcmlkKShfdGhpcy5wcm9wcy5ncmlkLCBkZWx0YVgsIGRlbHRhWSk7XG5cbiAgICAgICAgdmFyIF9zbmFwVG9HcmlkMiA9IF9zbGljZWRUb0FycmF5KF9zbmFwVG9HcmlkLCAyKTtcblxuICAgICAgICBkZWx0YVggPSBfc25hcFRvR3JpZDJbMF07XG4gICAgICAgIGRlbHRhWSA9IF9zbmFwVG9HcmlkMlsxXTtcbiAgICAgICAgaWYgKCFkZWx0YVggJiYgIWRlbHRhWSkgcmV0dXJuOyAvLyBza2lwIHVzZWxlc3MgZHJhZ1xuXG4gICAgICAgIHggPSBfdGhpcy5zdGF0ZS5sYXN0WCArIGRlbHRhWCwgeSA9IF90aGlzLnN0YXRlLmxhc3RZICsgZGVsdGFZO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29yZUV2ZW50ID0gKDAsIF9wb3NpdGlvbkZucy5jcmVhdGVDb3JlRGF0YSkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIHgsIHkpO1xuICAgICAgKDAsIF9sb2cuZGVmYXVsdCkoJ0RyYWdnYWJsZUNvcmU6IGhhbmRsZURyYWc6ICVqJywgY29yZUV2ZW50KTsgLy8gQ2FsbCBldmVudCBoYW5kbGVyLiBJZiBpdCByZXR1cm5zIGV4cGxpY2l0IGZhbHNlLCB0cmlnZ2VyIGVuZC5cblxuICAgICAgdmFyIHNob3VsZFVwZGF0ZSA9IF90aGlzLnByb3BzLm9uRHJhZyhlLCBjb3JlRXZlbnQpO1xuXG4gICAgICBpZiAoc2hvdWxkVXBkYXRlID09PSBmYWxzZSB8fCBfdGhpcy5tb3VudGVkID09PSBmYWxzZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vICRGbG93SWdub3JlXG4gICAgICAgICAgX3RoaXMuaGFuZGxlRHJhZ1N0b3AobmV3IE1vdXNlRXZlbnQoJ21vdXNldXAnKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIE9sZCBicm93c2Vyc1xuICAgICAgICAgIHZhciBldmVudCA9ICgoZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnRzJylcbiAgICAgICAgICAvKjogYW55Ki9cbiAgICAgICAgICApXG4gICAgICAgICAgLyo6IE1vdXNlVG91Y2hFdmVudCovXG4gICAgICAgICAgKTsgLy8gSSBzZWUgd2h5IHRoaXMgaW5zYW5pdHkgd2FzIGRlcHJlY2F0ZWRcbiAgICAgICAgICAvLyAkRmxvd0lnbm9yZVxuXG4gICAgICAgICAgZXZlbnQuaW5pdE1vdXNlRXZlbnQoJ21vdXNldXAnLCB0cnVlLCB0cnVlLCB3aW5kb3csIDAsIDAsIDAsIDAsIDAsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAwLCBudWxsKTtcblxuICAgICAgICAgIF90aGlzLmhhbmRsZURyYWdTdG9wKGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsYXN0WDogeCxcbiAgICAgICAgbGFzdFk6IHlcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImhhbmRsZURyYWdTdG9wXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoIV90aGlzLnN0YXRlLmRyYWdnaW5nKSByZXR1cm47XG4gICAgICB2YXIgcG9zaXRpb24gPSAoMCwgX3Bvc2l0aW9uRm5zLmdldENvbnRyb2xQb3NpdGlvbikoZSwgX3RoaXMuc3RhdGUudG91Y2hJZGVudGlmaWVyLCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgICBpZiAocG9zaXRpb24gPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgdmFyIHggPSBwb3NpdGlvbi54LFxuICAgICAgICAgIHkgPSBwb3NpdGlvbi55O1xuICAgICAgdmFyIGNvcmVFdmVudCA9ICgwLCBfcG9zaXRpb25GbnMuY3JlYXRlQ29yZURhdGEpKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCB4LCB5KTsgLy8gQ2FsbCBldmVudCBoYW5kbGVyXG5cbiAgICAgIHZhciBzaG91bGRDb250aW51ZSA9IF90aGlzLnByb3BzLm9uU3RvcChlLCBjb3JlRXZlbnQpO1xuXG4gICAgICBpZiAoc2hvdWxkQ29udGludWUgPT09IGZhbHNlIHx8IF90aGlzLm1vdW50ZWQgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIHZhciB0aGlzTm9kZSA9IF90aGlzLmZpbmRET01Ob2RlKCk7XG5cbiAgICAgIGlmICh0aGlzTm9kZSkge1xuICAgICAgICAvLyBSZW1vdmUgdXNlci1zZWxlY3QgaGFja1xuICAgICAgICBpZiAoX3RoaXMucHJvcHMuZW5hYmxlVXNlclNlbGVjdEhhY2spICgwLCBfZG9tRm5zLnJlbW92ZVVzZXJTZWxlY3RTdHlsZXMpKHRoaXNOb2RlLm93bmVyRG9jdW1lbnQpO1xuICAgICAgfVxuXG4gICAgICAoMCwgX2xvZy5kZWZhdWx0KSgnRHJhZ2dhYmxlQ29yZTogaGFuZGxlRHJhZ1N0b3A6ICVqJywgY29yZUV2ZW50KTsgLy8gUmVzZXQgdGhlIGVsLlxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAgICAgbGFzdFg6IE5hTixcbiAgICAgICAgbGFzdFk6IE5hTlxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzTm9kZSkge1xuICAgICAgICAvLyBSZW1vdmUgZXZlbnQgaGFuZGxlcnNcbiAgICAgICAgKDAsIF9sb2cuZGVmYXVsdCkoJ0RyYWdnYWJsZUNvcmU6IFJlbW92aW5nIGhhbmRsZXJzJyk7XG4gICAgICAgICgwLCBfZG9tRm5zLnJlbW92ZUV2ZW50KSh0aGlzTm9kZS5vd25lckRvY3VtZW50LCBkcmFnRXZlbnRGb3IubW92ZSwgX3RoaXMuaGFuZGxlRHJhZyk7XG4gICAgICAgICgwLCBfZG9tRm5zLnJlbW92ZUV2ZW50KSh0aGlzTm9kZS5vd25lckRvY3VtZW50LCBkcmFnRXZlbnRGb3Iuc3RvcCwgX3RoaXMuaGFuZGxlRHJhZ1N0b3ApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uTW91c2VEb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBkcmFnRXZlbnRGb3IgPSBldmVudHNGb3IubW91c2U7IC8vIG9uIHRvdWNoc2NyZWVuIGxhcHRvcHMgd2UgY291bGQgc3dpdGNoIGJhY2sgdG8gbW91c2VcblxuICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZURyYWdTdGFydChlKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbk1vdXNlVXBcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRyYWdFdmVudEZvciA9IGV2ZW50c0Zvci5tb3VzZTtcbiAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVEcmFnU3RvcChlKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvblRvdWNoU3RhcnRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIC8vIFdlJ3JlIG9uIGEgdG91Y2ggZGV2aWNlIG5vdywgc28gY2hhbmdlIHRoZSBldmVudCBoYW5kbGVyc1xuICAgICAgZHJhZ0V2ZW50Rm9yID0gZXZlbnRzRm9yLnRvdWNoO1xuICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZURyYWdTdGFydChlKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvblRvdWNoRW5kXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAvLyBXZSdyZSBvbiBhIHRvdWNoIGRldmljZSBub3csIHNvIGNoYW5nZSB0aGUgZXZlbnQgaGFuZGxlcnNcbiAgICAgIGRyYWdFdmVudEZvciA9IGV2ZW50c0Zvci50b3VjaDtcbiAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVEcmFnU3RvcChlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEcmFnZ2FibGVDb3JlLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMubW91bnRlZCA9IHRydWU7IC8vIFRvdWNoIGhhbmRsZXJzIG11c3QgYmUgYWRkZWQgd2l0aCB7cGFzc2l2ZTogZmFsc2V9IHRvIGJlIGNhbmNlbGFibGUuXG4gICAgICAvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdXBkYXRlcy8yMDE3LzAxL3Njcm9sbGluZy1pbnRlcnZlbnRpb25cblxuICAgICAgdmFyIHRoaXNOb2RlID0gdGhpcy5maW5kRE9NTm9kZSgpO1xuXG4gICAgICBpZiAodGhpc05vZGUpIHtcbiAgICAgICAgKDAsIF9kb21GbnMuYWRkRXZlbnQpKHRoaXNOb2RlLCBldmVudHNGb3IudG91Y2guc3RhcnQsIHRoaXMub25Ub3VjaFN0YXJ0LCB7XG4gICAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5tb3VudGVkID0gZmFsc2U7IC8vIFJlbW92ZSBhbnkgbGVmdG92ZXIgZXZlbnQgaGFuZGxlcnMuIFJlbW92ZSBib3RoIHRvdWNoIGFuZCBtb3VzZSBoYW5kbGVycyBpbiBjYXNlXG4gICAgICAvLyBzb21lIGJyb3dzZXIgcXVpcmsgY2F1c2VkIGEgdG91Y2ggZXZlbnQgdG8gZmlyZSBkdXJpbmcgYSBtb3VzZSBtb3ZlLCBvciB2aWNlIHZlcnNhLlxuXG4gICAgICB2YXIgdGhpc05vZGUgPSB0aGlzLmZpbmRET01Ob2RlKCk7XG5cbiAgICAgIGlmICh0aGlzTm9kZSkge1xuICAgICAgICB2YXIgb3duZXJEb2N1bWVudCA9IHRoaXNOb2RlLm93bmVyRG9jdW1lbnQ7XG4gICAgICAgICgwLCBfZG9tRm5zLnJlbW92ZUV2ZW50KShvd25lckRvY3VtZW50LCBldmVudHNGb3IubW91c2UubW92ZSwgdGhpcy5oYW5kbGVEcmFnKTtcbiAgICAgICAgKDAsIF9kb21GbnMucmVtb3ZlRXZlbnQpKG93bmVyRG9jdW1lbnQsIGV2ZW50c0Zvci50b3VjaC5tb3ZlLCB0aGlzLmhhbmRsZURyYWcpO1xuICAgICAgICAoMCwgX2RvbUZucy5yZW1vdmVFdmVudCkob3duZXJEb2N1bWVudCwgZXZlbnRzRm9yLm1vdXNlLnN0b3AsIHRoaXMuaGFuZGxlRHJhZ1N0b3ApO1xuICAgICAgICAoMCwgX2RvbUZucy5yZW1vdmVFdmVudCkob3duZXJEb2N1bWVudCwgZXZlbnRzRm9yLnRvdWNoLnN0b3AsIHRoaXMuaGFuZGxlRHJhZ1N0b3ApO1xuICAgICAgICAoMCwgX2RvbUZucy5yZW1vdmVFdmVudCkodGhpc05vZGUsIGV2ZW50c0Zvci50b3VjaC5zdGFydCwgdGhpcy5vblRvdWNoU3RhcnQsIHtcbiAgICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZW5hYmxlVXNlclNlbGVjdEhhY2spICgwLCBfZG9tRm5zLnJlbW92ZVVzZXJTZWxlY3RTdHlsZXMpKG93bmVyRG9jdW1lbnQpO1xuICAgICAgfVxuICAgIH0gLy8gUmVhY3QgU3RyaWN0IE1vZGUgY29tcGF0aWJpbGl0eTogaWYgYG5vZGVSZWZgIGlzIHBhc3NlZCwgd2Ugd2lsbCB1c2UgaXQgaW5zdGVhZCBvZiB0cnlpbmcgdG8gZmluZFxuICAgIC8vIHRoZSB1bmRlcmx5aW5nIERPTSBub2RlIG91cnNlbHZlcy4gU2VlIHRoZSBSRUFETUUgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG5cbiAgfSwge1xuICAgIGtleTogXCJmaW5kRE9NTm9kZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaW5kRE9NTm9kZSgpXG4gICAgLyo6ID9IVE1MRWxlbWVudCovXG4gICAge1xuICAgICAgdmFyIF90aGlzJHByb3BzJG5vZGVSZWYkYywgX3RoaXMkcHJvcHMsIF90aGlzJHByb3BzJG5vZGVSZWY7XG5cbiAgICAgIHJldHVybiAoX3RoaXMkcHJvcHMkbm9kZVJlZiRjID0gKF90aGlzJHByb3BzID0gdGhpcy5wcm9wcykgPT09IG51bGwgfHwgX3RoaXMkcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfdGhpcyRwcm9wcyRub2RlUmVmID0gX3RoaXMkcHJvcHMubm9kZVJlZikgPT09IG51bGwgfHwgX3RoaXMkcHJvcHMkbm9kZVJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkcHJvcHMkbm9kZVJlZi5jdXJyZW50KSAhPT0gbnVsbCAmJiBfdGhpcyRwcm9wcyRub2RlUmVmJGMgIT09IHZvaWQgMCA/IF90aGlzJHByb3BzJG5vZGVSZWYkYyA6IF9yZWFjdERvbS5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKClcbiAgICAvKjogUmVhY3QuRWxlbWVudDxhbnk+Ki9cbiAgICB7XG4gICAgICAvLyBSZXVzZSB0aGUgY2hpbGQgcHJvdmlkZWRcbiAgICAgIC8vIFRoaXMgbWFrZXMgaXQgZmxleGlibGUgdG8gdXNlIHdoYXRldmVyIGVsZW1lbnQgaXMgd2FudGVkIChkaXYsIHVsLCBldGMpXG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChSZWFjdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pLCB7XG4gICAgICAgIC8vIE5vdGU6IG1vdXNlTW92ZSBoYW5kbGVyIGlzIGF0dGFjaGVkIHRvIGRvY3VtZW50IHNvIGl0IHdpbGwgc3RpbGwgZnVuY3Rpb25cbiAgICAgICAgLy8gd2hlbiB0aGUgdXNlciBkcmFncyBxdWlja2x5IGFuZCBsZWF2ZXMgdGhlIGJvdW5kcyBvZiB0aGUgZWxlbWVudC5cbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMub25Nb3VzZURvd24sXG4gICAgICAgIG9uTW91c2VVcDogdGhpcy5vbk1vdXNlVXAsXG4gICAgICAgIC8vIG9uVG91Y2hTdGFydCBpcyBhZGRlZCBvbiBgY29tcG9uZW50RGlkTW91bnRgIHNvIHRoZXkgY2FuIGJlIGFkZGVkIHdpdGhcbiAgICAgICAgLy8ge3Bhc3NpdmU6IGZhbHNlfSwgd2hpY2ggYWxsb3dzIGl0IHRvIGNhbmNlbC4gU2VlXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi91cGRhdGVzLzIwMTcvMDEvc2Nyb2xsaW5nLWludGVydmVudGlvblxuICAgICAgICBvblRvdWNoRW5kOiB0aGlzLm9uVG91Y2hFbmRcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEcmFnZ2FibGVDb3JlO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBEcmFnZ2FibGVDb3JlO1xuXG5fZGVmaW5lUHJvcGVydHkoRHJhZ2dhYmxlQ29yZSwgXCJkaXNwbGF5TmFtZVwiLCAnRHJhZ2dhYmxlQ29yZScpO1xuXG5fZGVmaW5lUHJvcGVydHkoRHJhZ2dhYmxlQ29yZSwgXCJwcm9wVHlwZXNcIiwge1xuICAvKipcbiAgICogYGFsbG93QW55Q2xpY2tgIGFsbG93cyBkcmFnZ2luZyB1c2luZyBhbnkgbW91c2UgYnV0dG9uLlxuICAgKiBCeSBkZWZhdWx0LCB3ZSBvbmx5IGFjY2VwdCB0aGUgbGVmdCBidXR0b24uXG4gICAqXG4gICAqIERlZmF1bHRzIHRvIGBmYWxzZWAuXG4gICAqL1xuICBhbGxvd0FueUNsaWNrOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcblxuICAvKipcbiAgICogYGRpc2FibGVkYCwgaWYgdHJ1ZSwgc3RvcHMgdGhlIDxEcmFnZ2FibGU+IGZyb20gZHJhZ2dpbmcuIEFsbCBoYW5kbGVycyxcbiAgICogd2l0aCB0aGUgZXhjZXB0aW9uIG9mIGBvbk1vdXNlRG93bmAsIHdpbGwgbm90IGZpcmUuXG4gICAqL1xuICBkaXNhYmxlZDogX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wsXG5cbiAgLyoqXG4gICAqIEJ5IGRlZmF1bHQsIHdlIGFkZCAndXNlci1zZWxlY3Q6bm9uZScgYXR0cmlidXRlcyB0byB0aGUgZG9jdW1lbnQgYm9keVxuICAgKiB0byBwcmV2ZW50IHVnbHkgdGV4dCBzZWxlY3Rpb24gZHVyaW5nIGRyYWcuIElmIHRoaXMgaXMgY2F1c2luZyBwcm9ibGVtc1xuICAgKiBmb3IgeW91ciBhcHAsIHNldCB0aGlzIHRvIGBmYWxzZWAuXG4gICAqL1xuICBlbmFibGVVc2VyU2VsZWN0SGFjazogX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wsXG5cbiAgLyoqXG4gICAqIGBvZmZzZXRQYXJlbnRgLCBpZiBzZXQsIHVzZXMgdGhlIHBhc3NlZCBET00gbm9kZSB0byBjb21wdXRlIGRyYWcgb2Zmc2V0c1xuICAgKiBpbnN0ZWFkIG9mIHVzaW5nIHRoZSBwYXJlbnQgbm9kZS5cbiAgICovXG4gIG9mZnNldFBhcmVudDogZnVuY3Rpb24gb2Zmc2V0UGFyZW50KHByb3BzXG4gIC8qOiBEcmFnZ2FibGVDb3JlUHJvcHMqL1xuICAsIHByb3BOYW1lXG4gIC8qOiAkS2V5czxEcmFnZ2FibGVDb3JlUHJvcHM+Ki9cbiAgKSB7XG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSAmJiBwcm9wc1twcm9wTmFtZV0ubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRHJhZ2dhYmxlXFwncyBvZmZzZXRQYXJlbnQgbXVzdCBiZSBhIERPTSBOb2RlLicpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogYGdyaWRgIHNwZWNpZmllcyB0aGUgeCBhbmQgeSB0aGF0IGRyYWdnaW5nIHNob3VsZCBzbmFwIHRvLlxuICAgKi9cbiAgZ3JpZDogX3Byb3BUeXBlcy5kZWZhdWx0LmFycmF5T2YoX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlciksXG5cbiAgLyoqXG4gICAqIGBoYW5kbGVgIHNwZWNpZmllcyBhIHNlbGVjdG9yIHRvIGJlIHVzZWQgYXMgdGhlIGhhbmRsZSB0aGF0IGluaXRpYXRlcyBkcmFnLlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKlxuICAgKiBgYGBqc3hcbiAgICogICBsZXQgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICogICAgICAgICByZXR1cm4gKFxuICAgKiAgICAgICAgICAgIDxEcmFnZ2FibGUgaGFuZGxlPVwiLmhhbmRsZVwiPlxuICAgKiAgICAgICAgICAgICAgPGRpdj5cbiAgICogICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbmRsZVwiPkNsaWNrIG1lIHRvIGRyYWc8L2Rpdj5cbiAgICogICAgICAgICAgICAgICAgICA8ZGl2PlRoaXMgaXMgc29tZSBvdGhlciBjb250ZW50PC9kaXY+XG4gICAqICAgICAgICAgICAgICA8L2Rpdj5cbiAgICogICAgICAgICAgIDwvRHJhZ2dhYmxlPlxuICAgKiAgICAgICAgICk7XG4gICAqICAgICAgIH1cbiAgICogICB9KTtcbiAgICogYGBgXG4gICAqL1xuICBoYW5kbGU6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIGBjYW5jZWxgIHNwZWNpZmllcyBhIHNlbGVjdG9yIHRvIGJlIHVzZWQgdG8gcHJldmVudCBkcmFnIGluaXRpYWxpemF0aW9uLlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKlxuICAgKiBgYGBqc3hcbiAgICogICBsZXQgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICogICAgICAgICAgIHJldHVybihcbiAgICogICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGNhbmNlbD1cIi5jYW5jZWxcIj5cbiAgICogICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICogICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbFwiPllvdSBjYW4ndCBkcmFnIGZyb20gaGVyZTwvZGl2PlxuICAgKiAgICAgICAgICAgICAgICAgICAgIDxkaXY+RHJhZ2dpbmcgaGVyZSB3b3JrcyBmaW5lPC9kaXY+XG4gICAqICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgKiAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxuICAgKiAgICAgICAgICAgKTtcbiAgICogICAgICAgfVxuICAgKiAgIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIGNhbmNlbDogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcblxuICAvKiBJZiBydW5uaW5nIGluIFJlYWN0IFN0cmljdCBtb2RlLCBSZWFjdERPTS5maW5kRE9NTm9kZSgpIGlzIGRlcHJlY2F0ZWQuXG4gICAqIFVuZm9ydHVuYXRlbHksIGluIG9yZGVyIGZvciA8RHJhZ2dhYmxlPiB0byB3b3JrIHByb3Blcmx5LCB3ZSBuZWVkIHJhdyBhY2Nlc3NcbiAgICogdG8gdGhlIHVuZGVybHlpbmcgRE9NIG5vZGUuIElmIHlvdSB3YW50IHRvIGF2b2lkIHRoZSB3YXJuaW5nLCBwYXNzIGEgYG5vZGVSZWZgXG4gICAqIGFzIGluIHRoaXMgZXhhbXBsZTpcbiAgICpcbiAgICogZnVuY3Rpb24gTXlDb21wb25lbnQoKSB7XG4gICAqICAgY29uc3Qgbm9kZVJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICogICByZXR1cm4gKFxuICAgKiAgICAgPERyYWdnYWJsZSBub2RlUmVmPXtub2RlUmVmfT5cbiAgICogICAgICAgPGRpdiByZWY9e25vZGVSZWZ9PkV4YW1wbGUgVGFyZ2V0PC9kaXY+XG4gICAqICAgICA8L0RyYWdnYWJsZT5cbiAgICogICApO1xuICAgKiB9XG4gICAqXG4gICAqIFRoaXMgY2FuIGJlIHVzZWQgZm9yIGFyYml0cmFyaWx5IG5lc3RlZCBjb21wb25lbnRzLCBzbyBsb25nIGFzIHRoZSByZWYgZW5kcyB1cFxuICAgKiBwb2ludGluZyB0byB0aGUgYWN0dWFsIGNoaWxkIERPTSBub2RlIGFuZCBub3QgYSBjdXN0b20gY29tcG9uZW50LlxuICAgKi9cbiAgbm9kZVJlZjogX3Byb3BUeXBlcy5kZWZhdWx0Lm9iamVjdCxcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gZHJhZ2dpbmcgc3RhcnRzLlxuICAgKiBJZiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIGJvb2xlYW4gZmFsc2UsIGRyYWdnaW5nIHdpbGwgYmUgY2FuY2VsZWQuXG4gICAqL1xuICBvblN0YXJ0OiBfcHJvcFR5cGVzLmRlZmF1bHQuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGVkIHdoaWxlIGRyYWdnaW5nLlxuICAgKiBJZiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIGJvb2xlYW4gZmFsc2UsIGRyYWdnaW5nIHdpbGwgYmUgY2FuY2VsZWQuXG4gICAqL1xuICBvbkRyYWc6IF9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBkcmFnZ2luZyBzdG9wcy5cbiAgICogSWYgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBib29sZWFuIGZhbHNlLCB0aGUgZHJhZyB3aWxsIHJlbWFpbiBhY3RpdmUuXG4gICAqL1xuICBvblN0b3A6IF9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIHdvcmthcm91bmQgb3B0aW9uIHdoaWNoIGNhbiBiZSBwYXNzZWQgaWYgb25Nb3VzZURvd24gbmVlZHMgdG8gYmUgYWNjZXNzZWQsXG4gICAqIHNpbmNlIGl0J2xsIGFsd2F5cyBiZSBibG9ja2VkIChhcyB0aGVyZSBpcyBpbnRlcm5hbCB1c2Ugb2Ygb25Nb3VzZURvd24pXG4gICAqL1xuICBvbk1vdXNlRG93bjogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsXG5cbiAgLyoqXG4gICAqIGBzY2FsZWAsIGlmIHNldCwgYXBwbGllcyBzY2FsaW5nIHdoaWxlIGRyYWdnaW5nIGFuIGVsZW1lbnRcbiAgICovXG4gIHNjYWxlOiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBUaGVzZSBwcm9wZXJ0aWVzIHNob3VsZCBiZSBkZWZpbmVkIG9uIHRoZSBjaGlsZCwgbm90IGhlcmUuXG4gICAqL1xuICBjbGFzc05hbWU6IF9zaGltcy5kb250U2V0TWUsXG4gIHN0eWxlOiBfc2hpbXMuZG9udFNldE1lLFxuICB0cmFuc2Zvcm06IF9zaGltcy5kb250U2V0TWVcbn0pO1xuXG5fZGVmaW5lUHJvcGVydHkoRHJhZ2dhYmxlQ29yZSwgXCJkZWZhdWx0UHJvcHNcIiwge1xuICBhbGxvd0FueUNsaWNrOiBmYWxzZSxcbiAgLy8gYnkgZGVmYXVsdCBvbmx5IGFjY2VwdCBsZWZ0IGNsaWNrXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgZW5hYmxlVXNlclNlbGVjdEhhY2s6IHRydWUsXG4gIG9uU3RhcnQ6IGZ1bmN0aW9uIG9uU3RhcnQoKSB7fSxcbiAgb25EcmFnOiBmdW5jdGlvbiBvbkRyYWcoKSB7fSxcbiAgb25TdG9wOiBmdW5jdGlvbiBvblN0b3AoKSB7fSxcbiAgb25Nb3VzZURvd246IGZ1bmN0aW9uIG9uTW91c2VEb3duKCkge30sXG4gIHNjYWxlOiAxXG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnLi9EcmFnZ2FibGUnKSxcbiAgICBEcmFnZ2FibGUgPSBfcmVxdWlyZS5kZWZhdWx0LFxuICAgIERyYWdnYWJsZUNvcmUgPSBfcmVxdWlyZS5EcmFnZ2FibGVDb3JlOyAvLyBQcmV2aW91cyB2ZXJzaW9ucyBvZiB0aGlzIGxpYiBleHBvcnRlZCA8RHJhZ2dhYmxlPiBhcyB0aGUgcm9vdCBleHBvcnQuIEFzIHRvIG5vLS8vIHRoZW0sIG9yIFR5cGVTY3JpcHQsIHdlIGV4cG9ydCAqYm90aCogYXMgdGhlIHJvb3QgYW5kIGFzICdkZWZhdWx0Jy5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbXphYnJpc2tpZS9yZWFjdC1kcmFnZ2FibGUvcHVsbC8yNTRcbi8vIGFuZCBodHRwczovL2dpdGh1Yi5jb20vbXphYnJpc2tpZS9yZWFjdC1kcmFnZ2FibGUvaXNzdWVzLzI2NlxuXG5cbm1vZHVsZS5leHBvcnRzID0gRHJhZ2dhYmxlO1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IERyYWdnYWJsZTtcbm1vZHVsZS5leHBvcnRzLkRyYWdnYWJsZUNvcmUgPSBEcmFnZ2FibGVDb3JlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1hdGNoZXNTZWxlY3RvciA9IG1hdGNoZXNTZWxlY3RvcjtcbmV4cG9ydHMubWF0Y2hlc1NlbGVjdG9yQW5kUGFyZW50c1RvID0gbWF0Y2hlc1NlbGVjdG9yQW5kUGFyZW50c1RvO1xuZXhwb3J0cy5hZGRFdmVudCA9IGFkZEV2ZW50O1xuZXhwb3J0cy5yZW1vdmVFdmVudCA9IHJlbW92ZUV2ZW50O1xuZXhwb3J0cy5vdXRlckhlaWdodCA9IG91dGVySGVpZ2h0O1xuZXhwb3J0cy5vdXRlcldpZHRoID0gb3V0ZXJXaWR0aDtcbmV4cG9ydHMuaW5uZXJIZWlnaHQgPSBpbm5lckhlaWdodDtcbmV4cG9ydHMuaW5uZXJXaWR0aCA9IGlubmVyV2lkdGg7XG5leHBvcnRzLm9mZnNldFhZRnJvbVBhcmVudCA9IG9mZnNldFhZRnJvbVBhcmVudDtcbmV4cG9ydHMuY3JlYXRlQ1NTVHJhbnNmb3JtID0gY3JlYXRlQ1NTVHJhbnNmb3JtO1xuZXhwb3J0cy5jcmVhdGVTVkdUcmFuc2Zvcm0gPSBjcmVhdGVTVkdUcmFuc2Zvcm07XG5leHBvcnRzLmdldFRyYW5zbGF0aW9uID0gZ2V0VHJhbnNsYXRpb247XG5leHBvcnRzLmdldFRvdWNoID0gZ2V0VG91Y2g7XG5leHBvcnRzLmdldFRvdWNoSWRlbnRpZmllciA9IGdldFRvdWNoSWRlbnRpZmllcjtcbmV4cG9ydHMuYWRkVXNlclNlbGVjdFN0eWxlcyA9IGFkZFVzZXJTZWxlY3RTdHlsZXM7XG5leHBvcnRzLnJlbW92ZVVzZXJTZWxlY3RTdHlsZXMgPSByZW1vdmVVc2VyU2VsZWN0U3R5bGVzO1xuZXhwb3J0cy5hZGRDbGFzc05hbWUgPSBhZGRDbGFzc05hbWU7XG5leHBvcnRzLnJlbW92ZUNsYXNzTmFtZSA9IHJlbW92ZUNsYXNzTmFtZTtcblxudmFyIF9zaGltcyA9IHJlcXVpcmUoXCIuL3NoaW1zXCIpO1xuXG52YXIgX2dldFByZWZpeCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL2dldFByZWZpeFwiKSk7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZUJhYmVsSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHZhciBjYWNoZU5vZGVJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgcmV0dXJuIChfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgcmV0dXJuIG5vZGVJbnRlcm9wID8gY2FjaGVOb2RlSW50ZXJvcCA6IGNhY2hlQmFiZWxJbnRlcm9wOyB9KShub2RlSW50ZXJvcCk7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqLCBub2RlSW50ZXJvcCkgeyBpZiAoIW5vZGVJbnRlcm9wICYmIG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBkZWZhdWx0OiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChrZXkgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgeyBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IH0ga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgbWF0Y2hlc1NlbGVjdG9yRnVuYyA9ICcnO1xuXG5mdW5jdGlvbiBtYXRjaGVzU2VsZWN0b3IoZWxcbi8qOiBOb2RlKi9cbiwgc2VsZWN0b3Jcbi8qOiBzdHJpbmcqL1xuKVxuLyo6IGJvb2xlYW4qL1xue1xuICBpZiAoIW1hdGNoZXNTZWxlY3RvckZ1bmMpIHtcbiAgICBtYXRjaGVzU2VsZWN0b3JGdW5jID0gKDAsIF9zaGltcy5maW5kSW5BcnJheSkoWydtYXRjaGVzJywgJ3dlYmtpdE1hdGNoZXNTZWxlY3RvcicsICdtb3pNYXRjaGVzU2VsZWN0b3InLCAnbXNNYXRjaGVzU2VsZWN0b3InLCAnb01hdGNoZXNTZWxlY3RvciddLCBmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICAvLyAkRmxvd0lnbm9yZTogRG9lc24ndCB0aGluayBlbGVtZW50cyBhcmUgaW5kZXhhYmxlXG4gICAgICByZXR1cm4gKDAsIF9zaGltcy5pc0Z1bmN0aW9uKShlbFttZXRob2RdKTtcbiAgICB9KTtcbiAgfSAvLyBNaWdodCBub3QgYmUgZm91bmQgZW50aXJlbHkgKG5vdCBhbiBFbGVtZW50PykgLSBpbiB0aGF0IGNhc2UsIGJhaWxcbiAgLy8gJEZsb3dJZ25vcmU6IERvZXNuJ3QgdGhpbmsgZWxlbWVudHMgYXJlIGluZGV4YWJsZVxuXG5cbiAgaWYgKCEoMCwgX3NoaW1zLmlzRnVuY3Rpb24pKGVsW21hdGNoZXNTZWxlY3RvckZ1bmNdKSkgcmV0dXJuIGZhbHNlOyAvLyAkRmxvd0lnbm9yZTogRG9lc24ndCB0aGluayBlbGVtZW50cyBhcmUgaW5kZXhhYmxlXG5cbiAgcmV0dXJuIGVsW21hdGNoZXNTZWxlY3RvckZ1bmNdKHNlbGVjdG9yKTtcbn0gLy8gV29ya3MgdXAgdGhlIHRyZWUgdG8gdGhlIGRyYWdnYWJsZSBpdHNlbGYgYXR0ZW1wdGluZyB0byBtYXRjaCBzZWxlY3Rvci5cblxuXG5mdW5jdGlvbiBtYXRjaGVzU2VsZWN0b3JBbmRQYXJlbnRzVG8oZWxcbi8qOiBOb2RlKi9cbiwgc2VsZWN0b3Jcbi8qOiBzdHJpbmcqL1xuLCBiYXNlTm9kZVxuLyo6IE5vZGUqL1xuKVxuLyo6IGJvb2xlYW4qL1xue1xuICB2YXIgbm9kZSA9IGVsO1xuXG4gIGRvIHtcbiAgICBpZiAobWF0Y2hlc1NlbGVjdG9yKG5vZGUsIHNlbGVjdG9yKSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKG5vZGUgPT09IGJhc2VOb2RlKSByZXR1cm4gZmFsc2U7XG4gICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgfSB3aGlsZSAobm9kZSk7XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudChlbFxuLyo6ID9Ob2RlKi9cbiwgZXZlbnRcbi8qOiBzdHJpbmcqL1xuLCBoYW5kbGVyXG4vKjogRnVuY3Rpb24qL1xuLCBpbnB1dE9wdGlvbnNcbi8qOiBPYmplY3QqL1xuKVxuLyo6IHZvaWQqL1xue1xuICBpZiAoIWVsKSByZXR1cm47XG5cbiAgdmFyIG9wdGlvbnMgPSBfb2JqZWN0U3ByZWFkKHtcbiAgICBjYXB0dXJlOiB0cnVlXG4gIH0sIGlucHV0T3B0aW9ucyk7IC8vICRGbG93SWdub3JlW21ldGhvZC11bmJpbmRpbmddXG5cblxuICBpZiAoZWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICB9IGVsc2UgaWYgKGVsLmF0dGFjaEV2ZW50KSB7XG4gICAgZWwuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBoYW5kbGVyKTtcbiAgfSBlbHNlIHtcbiAgICAvLyAkRmxvd0lnbm9yZTogRG9lc24ndCB0aGluayBlbGVtZW50cyBhcmUgaW5kZXhhYmxlXG4gICAgZWxbJ29uJyArIGV2ZW50XSA9IGhhbmRsZXI7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnQoZWxcbi8qOiA/Tm9kZSovXG4sIGV2ZW50XG4vKjogc3RyaW5nKi9cbiwgaGFuZGxlclxuLyo6IEZ1bmN0aW9uKi9cbiwgaW5wdXRPcHRpb25zXG4vKjogT2JqZWN0Ki9cbilcbi8qOiB2b2lkKi9cbntcbiAgaWYgKCFlbCkgcmV0dXJuO1xuXG4gIHZhciBvcHRpb25zID0gX29iamVjdFNwcmVhZCh7XG4gICAgY2FwdHVyZTogdHJ1ZVxuICB9LCBpbnB1dE9wdGlvbnMpOyAvLyAkRmxvd0lnbm9yZVttZXRob2QtdW5iaW5kaW5nXVxuXG5cbiAgaWYgKGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgfSBlbHNlIGlmIChlbC5kZXRhY2hFdmVudCkge1xuICAgIGVsLmRldGFjaEV2ZW50KCdvbicgKyBldmVudCwgaGFuZGxlcik7XG4gIH0gZWxzZSB7XG4gICAgLy8gJEZsb3dJZ25vcmU6IERvZXNuJ3QgdGhpbmsgZWxlbWVudHMgYXJlIGluZGV4YWJsZVxuICAgIGVsWydvbicgKyBldmVudF0gPSBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIG91dGVySGVpZ2h0KG5vZGVcbi8qOiBIVE1MRWxlbWVudCovXG4pXG4vKjogbnVtYmVyKi9cbntcbiAgLy8gVGhpcyBpcyBkZWxpYmVyYXRlbHkgZXhjbHVkaW5nIG1hcmdpbiBmb3Igb3VyIGNhbGN1bGF0aW9ucywgc2luY2Ugd2UgYXJlIHVzaW5nXG4gIC8vIG9mZnNldFRvcCB3aGljaCBpcyBpbmNsdWRpbmcgbWFyZ2luLiBTZWUgZ2V0Qm91bmRQb3NpdGlvblxuICB2YXIgaGVpZ2h0ID0gbm9kZS5jbGllbnRIZWlnaHQ7XG4gIHZhciBjb21wdXRlZFN0eWxlID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gIGhlaWdodCArPSAoMCwgX3NoaW1zLmludCkoY29tcHV0ZWRTdHlsZS5ib3JkZXJUb3BXaWR0aCk7XG4gIGhlaWdodCArPSAoMCwgX3NoaW1zLmludCkoY29tcHV0ZWRTdHlsZS5ib3JkZXJCb3R0b21XaWR0aCk7XG4gIHJldHVybiBoZWlnaHQ7XG59XG5cbmZ1bmN0aW9uIG91dGVyV2lkdGgobm9kZVxuLyo6IEhUTUxFbGVtZW50Ki9cbilcbi8qOiBudW1iZXIqL1xue1xuICAvLyBUaGlzIGlzIGRlbGliZXJhdGVseSBleGNsdWRpbmcgbWFyZ2luIGZvciBvdXIgY2FsY3VsYXRpb25zLCBzaW5jZSB3ZSBhcmUgdXNpbmdcbiAgLy8gb2Zmc2V0TGVmdCB3aGljaCBpcyBpbmNsdWRpbmcgbWFyZ2luLiBTZWUgZ2V0Qm91bmRQb3NpdGlvblxuICB2YXIgd2lkdGggPSBub2RlLmNsaWVudFdpZHRoO1xuICB2YXIgY29tcHV0ZWRTdHlsZSA9IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICB3aWR0aCArPSAoMCwgX3NoaW1zLmludCkoY29tcHV0ZWRTdHlsZS5ib3JkZXJMZWZ0V2lkdGgpO1xuICB3aWR0aCArPSAoMCwgX3NoaW1zLmludCkoY29tcHV0ZWRTdHlsZS5ib3JkZXJSaWdodFdpZHRoKTtcbiAgcmV0dXJuIHdpZHRoO1xufVxuXG5mdW5jdGlvbiBpbm5lckhlaWdodChub2RlXG4vKjogSFRNTEVsZW1lbnQqL1xuKVxuLyo6IG51bWJlciovXG57XG4gIHZhciBoZWlnaHQgPSBub2RlLmNsaWVudEhlaWdodDtcbiAgdmFyIGNvbXB1dGVkU3R5bGUgPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgaGVpZ2h0IC09ICgwLCBfc2hpbXMuaW50KShjb21wdXRlZFN0eWxlLnBhZGRpbmdUb3ApO1xuICBoZWlnaHQgLT0gKDAsIF9zaGltcy5pbnQpKGNvbXB1dGVkU3R5bGUucGFkZGluZ0JvdHRvbSk7XG4gIHJldHVybiBoZWlnaHQ7XG59XG5cbmZ1bmN0aW9uIGlubmVyV2lkdGgobm9kZVxuLyo6IEhUTUxFbGVtZW50Ki9cbilcbi8qOiBudW1iZXIqL1xue1xuICB2YXIgd2lkdGggPSBub2RlLmNsaWVudFdpZHRoO1xuICB2YXIgY29tcHV0ZWRTdHlsZSA9IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICB3aWR0aCAtPSAoMCwgX3NoaW1zLmludCkoY29tcHV0ZWRTdHlsZS5wYWRkaW5nTGVmdCk7XG4gIHdpZHRoIC09ICgwLCBfc2hpbXMuaW50KShjb21wdXRlZFN0eWxlLnBhZGRpbmdSaWdodCk7XG4gIHJldHVybiB3aWR0aDtcbn1cbi8qOjogaW50ZXJmYWNlIEV2ZW50V2l0aE9mZnNldCB7XG4gIGNsaWVudFg6IG51bWJlciwgY2xpZW50WTogbnVtYmVyXG59Ki9cblxuXG4vLyBHZXQgZnJvbSBvZmZzZXRQYXJlbnRcbmZ1bmN0aW9uIG9mZnNldFhZRnJvbVBhcmVudChldnRcbi8qOiBFdmVudFdpdGhPZmZzZXQqL1xuLCBvZmZzZXRQYXJlbnRcbi8qOiBIVE1MRWxlbWVudCovXG4sIHNjYWxlXG4vKjogbnVtYmVyKi9cbilcbi8qOiBDb250cm9sUG9zaXRpb24qL1xue1xuICB2YXIgaXNCb2R5ID0gb2Zmc2V0UGFyZW50ID09PSBvZmZzZXRQYXJlbnQub3duZXJEb2N1bWVudC5ib2R5O1xuICB2YXIgb2Zmc2V0UGFyZW50UmVjdCA9IGlzQm9keSA/IHtcbiAgICBsZWZ0OiAwLFxuICAgIHRvcDogMFxuICB9IDogb2Zmc2V0UGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgeCA9IChldnQuY2xpZW50WCArIG9mZnNldFBhcmVudC5zY3JvbGxMZWZ0IC0gb2Zmc2V0UGFyZW50UmVjdC5sZWZ0KSAvIHNjYWxlO1xuICB2YXIgeSA9IChldnQuY2xpZW50WSArIG9mZnNldFBhcmVudC5zY3JvbGxUb3AgLSBvZmZzZXRQYXJlbnRSZWN0LnRvcCkgLyBzY2FsZTtcbiAgcmV0dXJuIHtcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ1NTVHJhbnNmb3JtKGNvbnRyb2xQb3Ncbi8qOiBDb250cm9sUG9zaXRpb24qL1xuLCBwb3NpdGlvbk9mZnNldFxuLyo6IFBvc2l0aW9uT2Zmc2V0Q29udHJvbFBvc2l0aW9uKi9cbilcbi8qOiBPYmplY3QqL1xue1xuICB2YXIgdHJhbnNsYXRpb24gPSBnZXRUcmFuc2xhdGlvbihjb250cm9sUG9zLCBwb3NpdGlvbk9mZnNldCwgJ3B4Jyk7XG4gIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sICgwLCBfZ2V0UHJlZml4LmJyb3dzZXJQcmVmaXhUb0tleSkoJ3RyYW5zZm9ybScsIF9nZXRQcmVmaXguZGVmYXVsdCksIHRyYW5zbGF0aW9uKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU1ZHVHJhbnNmb3JtKGNvbnRyb2xQb3Ncbi8qOiBDb250cm9sUG9zaXRpb24qL1xuLCBwb3NpdGlvbk9mZnNldFxuLyo6IFBvc2l0aW9uT2Zmc2V0Q29udHJvbFBvc2l0aW9uKi9cbilcbi8qOiBzdHJpbmcqL1xue1xuICB2YXIgdHJhbnNsYXRpb24gPSBnZXRUcmFuc2xhdGlvbihjb250cm9sUG9zLCBwb3NpdGlvbk9mZnNldCwgJycpO1xuICByZXR1cm4gdHJhbnNsYXRpb247XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zbGF0aW9uKF9yZWYyLCBwb3NpdGlvbk9mZnNldFxuLyo6IFBvc2l0aW9uT2Zmc2V0Q29udHJvbFBvc2l0aW9uKi9cbiwgdW5pdFN1ZmZpeFxuLyo6IHN0cmluZyovXG4pXG4vKjogc3RyaW5nKi9cbntcbiAgdmFyIHggPSBfcmVmMi54LFxuICAgICAgeSA9IF9yZWYyLnk7XG4gIHZhciB0cmFuc2xhdGlvbiA9IFwidHJhbnNsYXRlKFwiLmNvbmNhdCh4KS5jb25jYXQodW5pdFN1ZmZpeCwgXCIsXCIpLmNvbmNhdCh5KS5jb25jYXQodW5pdFN1ZmZpeCwgXCIpXCIpO1xuXG4gIGlmIChwb3NpdGlvbk9mZnNldCkge1xuICAgIHZhciBkZWZhdWx0WCA9IFwiXCIuY29uY2F0KHR5cGVvZiBwb3NpdGlvbk9mZnNldC54ID09PSAnc3RyaW5nJyA/IHBvc2l0aW9uT2Zmc2V0LnggOiBwb3NpdGlvbk9mZnNldC54ICsgdW5pdFN1ZmZpeCk7XG4gICAgdmFyIGRlZmF1bHRZID0gXCJcIi5jb25jYXQodHlwZW9mIHBvc2l0aW9uT2Zmc2V0LnkgPT09ICdzdHJpbmcnID8gcG9zaXRpb25PZmZzZXQueSA6IHBvc2l0aW9uT2Zmc2V0LnkgKyB1bml0U3VmZml4KTtcbiAgICB0cmFuc2xhdGlvbiA9IFwidHJhbnNsYXRlKFwiLmNvbmNhdChkZWZhdWx0WCwgXCIsIFwiKS5jb25jYXQoZGVmYXVsdFksIFwiKVwiKSArIHRyYW5zbGF0aW9uO1xuICB9XG5cbiAgcmV0dXJuIHRyYW5zbGF0aW9uO1xufVxuXG5mdW5jdGlvbiBnZXRUb3VjaChlXG4vKjogTW91c2VUb3VjaEV2ZW50Ki9cbiwgaWRlbnRpZmllclxuLyo6IG51bWJlciovXG4pXG4vKjogP3tjbGllbnRYOiBudW1iZXIsIGNsaWVudFk6IG51bWJlcn0qL1xue1xuICByZXR1cm4gZS50YXJnZXRUb3VjaGVzICYmICgwLCBfc2hpbXMuZmluZEluQXJyYXkpKGUudGFyZ2V0VG91Y2hlcywgZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gaWRlbnRpZmllciA9PT0gdC5pZGVudGlmaWVyO1xuICB9KSB8fCBlLmNoYW5nZWRUb3VjaGVzICYmICgwLCBfc2hpbXMuZmluZEluQXJyYXkpKGUuY2hhbmdlZFRvdWNoZXMsIGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIGlkZW50aWZpZXIgPT09IHQuaWRlbnRpZmllcjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFRvdWNoSWRlbnRpZmllcihlXG4vKjogTW91c2VUb3VjaEV2ZW50Ki9cbilcbi8qOiA/bnVtYmVyKi9cbntcbiAgaWYgKGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXNbMF0pIHJldHVybiBlLnRhcmdldFRvdWNoZXNbMF0uaWRlbnRpZmllcjtcbiAgaWYgKGUuY2hhbmdlZFRvdWNoZXMgJiYgZS5jaGFuZ2VkVG91Y2hlc1swXSkgcmV0dXJuIGUuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllcjtcbn0gLy8gVXNlci1zZWxlY3QgSGFja3M6XG4vL1xuLy8gVXNlZnVsIGZvciBwcmV2ZW50aW5nIGJsdWUgaGlnaGxpZ2h0cyBhbGwgb3ZlciBldmVyeXRoaW5nIHdoZW4gZHJhZ2dpbmcuXG4vLyBOb3RlIHdlJ3JlIHBhc3NpbmcgYGRvY3VtZW50YCBiL2Mgd2UgY291bGQgYmUgaWZyYW1lZFxuXG5cbmZ1bmN0aW9uIGFkZFVzZXJTZWxlY3RTdHlsZXMoZG9jXG4vKjogP0RvY3VtZW50Ki9cbikge1xuICBpZiAoIWRvYykgcmV0dXJuO1xuICB2YXIgc3R5bGVFbCA9IGRvYy5nZXRFbGVtZW50QnlJZCgncmVhY3QtZHJhZ2dhYmxlLXN0eWxlLWVsJyk7XG5cbiAgaWYgKCFzdHlsZUVsKSB7XG4gICAgc3R5bGVFbCA9IGRvYy5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlRWwudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgc3R5bGVFbC5pZCA9ICdyZWFjdC1kcmFnZ2FibGUtc3R5bGUtZWwnO1xuICAgIHN0eWxlRWwuaW5uZXJIVE1MID0gJy5yZWFjdC1kcmFnZ2FibGUtdHJhbnNwYXJlbnQtc2VsZWN0aW9uICo6Oi1tb3otc2VsZWN0aW9uIHthbGw6IGluaGVyaXQ7fVxcbic7XG4gICAgc3R5bGVFbC5pbm5lckhUTUwgKz0gJy5yZWFjdC1kcmFnZ2FibGUtdHJhbnNwYXJlbnQtc2VsZWN0aW9uICo6OnNlbGVjdGlvbiB7YWxsOiBpbmhlcml0O31cXG4nO1xuICAgIGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlRWwpO1xuICB9XG5cbiAgaWYgKGRvYy5ib2R5KSBhZGRDbGFzc05hbWUoZG9jLmJvZHksICdyZWFjdC1kcmFnZ2FibGUtdHJhbnNwYXJlbnQtc2VsZWN0aW9uJyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVVzZXJTZWxlY3RTdHlsZXMoZG9jXG4vKjogP0RvY3VtZW50Ki9cbikge1xuICBpZiAoIWRvYykgcmV0dXJuO1xuXG4gIHRyeSB7XG4gICAgaWYgKGRvYy5ib2R5KSByZW1vdmVDbGFzc05hbWUoZG9jLmJvZHksICdyZWFjdC1kcmFnZ2FibGUtdHJhbnNwYXJlbnQtc2VsZWN0aW9uJyk7IC8vICRGbG93SWdub3JlOiBJRVxuXG4gICAgaWYgKGRvYy5zZWxlY3Rpb24pIHtcbiAgICAgIC8vICRGbG93SWdub3JlOiBJRVxuICAgICAgZG9jLnNlbGVjdGlvbi5lbXB0eSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZW1vdmUgc2VsZWN0aW9uIGNhdXNlZCBieSBzY3JvbGwsIHVubGVzcyBpdCdzIGEgZm9jdXNlZCBpbnB1dFxuICAgICAgLy8gKHdlIHVzZSBkb2MuZGVmYXVsdFZpZXcgaW4gY2FzZSB3ZSdyZSBpbiBhbiBpZnJhbWUpXG4gICAgICB2YXIgc2VsZWN0aW9uID0gKGRvYy5kZWZhdWx0VmlldyB8fCB3aW5kb3cpLmdldFNlbGVjdGlvbigpO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uICYmIHNlbGVjdGlvbi50eXBlICE9PSAnQ2FyZXQnKSB7XG4gICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHsvLyBwcm9iYWJseSBJRVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzTmFtZShlbFxuLyo6IEhUTUxFbGVtZW50Ki9cbiwgY2xhc3NOYW1lXG4vKjogc3RyaW5nKi9cbikge1xuICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9IGVsc2Uge1xuICAgIGlmICghZWwuY2xhc3NOYW1lLm1hdGNoKG5ldyBSZWdFeHAoXCIoPzpefFxcXFxzKVwiLmNvbmNhdChjbGFzc05hbWUsIFwiKD8hXFxcXFMpXCIpKSkpIHtcbiAgICAgIGVsLmNsYXNzTmFtZSArPSBcIiBcIi5jb25jYXQoY2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3NOYW1lKGVsXG4vKjogSFRNTEVsZW1lbnQqL1xuLCBjbGFzc05hbWVcbi8qOiBzdHJpbmcqL1xuKSB7XG4gIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cChcIig/Ol58XFxcXHMpXCIuY29uY2F0KGNsYXNzTmFtZSwgXCIoPyFcXFxcUylcIiksICdnJyksICcnKTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRQcmVmaXggPSBnZXRQcmVmaXg7XG5leHBvcnRzLmJyb3dzZXJQcmVmaXhUb0tleSA9IGJyb3dzZXJQcmVmaXhUb0tleTtcbmV4cG9ydHMuYnJvd3NlclByZWZpeFRvU3R5bGUgPSBicm93c2VyUHJlZml4VG9TdHlsZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBwcmVmaXhlcyA9IFsnTW96JywgJ1dlYmtpdCcsICdPJywgJ21zJ107XG5cbmZ1bmN0aW9uIGdldFByZWZpeCgpXG4vKjogc3RyaW5nKi9cbntcbiAgdmFyIF93aW5kb3ckZG9jdW1lbnQsIF93aW5kb3ckZG9jdW1lbnQkZG9jdTtcblxuICB2YXIgcHJvcFxuICAvKjogc3RyaW5nKi9cbiAgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICd0cmFuc2Zvcm0nO1xuICAvLyBFbnN1cmUgd2UncmUgcnVubmluZyBpbiBhbiBlbnZpcm9ubWVudCB3aGVyZSB0aGVyZSBpcyBhY3R1YWxseSBhIGdsb2JhbFxuICAvLyBgd2luZG93YCBvYmpcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gJyc7IC8vIElmIHdlJ3JlIGluIGEgcHNldWRvLWJyb3dzZXIgc2VydmVyLXNpZGUgZW52aXJvbm1lbnQsIHRoaXMgYWNjZXNzXG4gIC8vIHBhdGggbWF5IG5vdCBleGlzdCwgc28gYmFpbCBvdXQgaWYgaXQgZG9lc24ndC5cblxuICB2YXIgc3R5bGUgPSAoX3dpbmRvdyRkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudCkgPT09IG51bGwgfHwgX3dpbmRvdyRkb2N1bWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF93aW5kb3ckZG9jdW1lbnQkZG9jdSA9IF93aW5kb3ckZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfd2luZG93JGRvY3VtZW50JGRvY3UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF93aW5kb3ckZG9jdW1lbnQkZG9jdS5zdHlsZTtcbiAgaWYgKCFzdHlsZSkgcmV0dXJuICcnO1xuICBpZiAocHJvcCBpbiBzdHlsZSkgcmV0dXJuICcnO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYnJvd3NlclByZWZpeFRvS2V5KHByb3AsIHByZWZpeGVzW2ldKSBpbiBzdHlsZSkgcmV0dXJuIHByZWZpeGVzW2ldO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBicm93c2VyUHJlZml4VG9LZXkocHJvcFxuLyo6IHN0cmluZyovXG4sIHByZWZpeFxuLyo6IHN0cmluZyovXG4pXG4vKjogc3RyaW5nKi9cbntcbiAgcmV0dXJuIHByZWZpeCA/IFwiXCIuY29uY2F0KHByZWZpeCkuY29uY2F0KGtlYmFiVG9UaXRsZUNhc2UocHJvcCkpIDogcHJvcDtcbn1cblxuZnVuY3Rpb24gYnJvd3NlclByZWZpeFRvU3R5bGUocHJvcFxuLyo6IHN0cmluZyovXG4sIHByZWZpeFxuLyo6IHN0cmluZyovXG4pXG4vKjogc3RyaW5nKi9cbntcbiAgcmV0dXJuIHByZWZpeCA/IFwiLVwiLmNvbmNhdChwcmVmaXgudG9Mb3dlckNhc2UoKSwgXCItXCIpLmNvbmNhdChwcm9wKSA6IHByb3A7XG59XG5cbmZ1bmN0aW9uIGtlYmFiVG9UaXRsZUNhc2Uoc3RyXG4vKjogc3RyaW5nKi9cbilcbi8qOiBzdHJpbmcqL1xue1xuICB2YXIgb3V0ID0gJyc7XG4gIHZhciBzaG91bGRDYXBpdGFsaXplID0gdHJ1ZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzaG91bGRDYXBpdGFsaXplKSB7XG4gICAgICBvdXQgKz0gc3RyW2ldLnRvVXBwZXJDYXNlKCk7XG4gICAgICBzaG91bGRDYXBpdGFsaXplID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChzdHJbaV0gPT09ICctJykge1xuICAgICAgc2hvdWxkQ2FwaXRhbGl6ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dCArPSBzdHJbaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG91dDtcbn0gLy8gRGVmYXVsdCBleHBvcnQgaXMgdGhlIHByZWZpeCBpdHNlbGYsIGxpa2UgJ01veicsICdXZWJraXQnLCBldGNcbi8vIE5vdGUgdGhhdCB5b3UgbWF5IGhhdmUgdG8gcmUtdGVzdCBmb3IgY2VydGFpbiB0aGluZ3M7IGZvciBpbnN0YW5jZSwgQ2hyb21lIDUwXG4vLyBjYW4gaGFuZGxlIHVucHJlZml4ZWQgYHRyYW5zZm9ybWAsIGJ1dCBub3QgdW5wcmVmaXhlZCBgdXNlci1zZWxlY3RgXG5cblxudmFyIF9kZWZhdWx0ID0gKGdldFByZWZpeCgpXG4vKjogc3RyaW5nKi9cbik7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbG9nO1xuXG4vKmVzbGludCBuby1jb25zb2xlOjAqL1xuZnVuY3Rpb24gbG9nKCkge1xuICB2YXIgX2NvbnNvbGU7XG5cbiAgaWYgKHVuZGVmaW5lZCkgKF9jb25zb2xlID0gY29uc29sZSkubG9nLmFwcGx5KF9jb25zb2xlLCBhcmd1bWVudHMpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRCb3VuZFBvc2l0aW9uID0gZ2V0Qm91bmRQb3NpdGlvbjtcbmV4cG9ydHMuc25hcFRvR3JpZCA9IHNuYXBUb0dyaWQ7XG5leHBvcnRzLmNhbkRyYWdYID0gY2FuRHJhZ1g7XG5leHBvcnRzLmNhbkRyYWdZID0gY2FuRHJhZ1k7XG5leHBvcnRzLmdldENvbnRyb2xQb3NpdGlvbiA9IGdldENvbnRyb2xQb3NpdGlvbjtcbmV4cG9ydHMuY3JlYXRlQ29yZURhdGEgPSBjcmVhdGVDb3JlRGF0YTtcbmV4cG9ydHMuY3JlYXRlRHJhZ2dhYmxlRGF0YSA9IGNyZWF0ZURyYWdnYWJsZURhdGE7XG5cbnZhciBfc2hpbXMgPSByZXF1aXJlKFwiLi9zaGltc1wiKTtcblxudmFyIF9kb21GbnMgPSByZXF1aXJlKFwiLi9kb21GbnNcIik7XG5cbmZ1bmN0aW9uIGdldEJvdW5kUG9zaXRpb24oZHJhZ2dhYmxlXG4vKjogRHJhZ2dhYmxlKi9cbiwgeFxuLyo6IG51bWJlciovXG4sIHlcbi8qOiBudW1iZXIqL1xuKVxuLyo6IFtudW1iZXIsIG51bWJlcl0qL1xue1xuICAvLyBJZiBubyBib3VuZHMsIHNob3J0LWNpcmN1aXQgYW5kIG1vdmUgb25cbiAgaWYgKCFkcmFnZ2FibGUucHJvcHMuYm91bmRzKSByZXR1cm4gW3gsIHldOyAvLyBDbG9uZSBuZXcgYm91bmRzXG5cbiAgdmFyIGJvdW5kcyA9IGRyYWdnYWJsZS5wcm9wcy5ib3VuZHM7XG4gIGJvdW5kcyA9IHR5cGVvZiBib3VuZHMgPT09ICdzdHJpbmcnID8gYm91bmRzIDogY2xvbmVCb3VuZHMoYm91bmRzKTtcbiAgdmFyIG5vZGUgPSBmaW5kRE9NTm9kZShkcmFnZ2FibGUpO1xuXG4gIGlmICh0eXBlb2YgYm91bmRzID09PSAnc3RyaW5nJykge1xuICAgIHZhciBvd25lckRvY3VtZW50ID0gbm9kZS5vd25lckRvY3VtZW50O1xuICAgIHZhciBvd25lcldpbmRvdyA9IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgdmFyIGJvdW5kTm9kZTtcblxuICAgIGlmIChib3VuZHMgPT09ICdwYXJlbnQnKSB7XG4gICAgICBib3VuZE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvdW5kTm9kZSA9IG93bmVyRG9jdW1lbnQucXVlcnlTZWxlY3Rvcihib3VuZHMpO1xuICAgIH1cblxuICAgIGlmICghKGJvdW5kTm9kZSBpbnN0YW5jZW9mIG93bmVyV2luZG93LkhUTUxFbGVtZW50KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdCb3VuZHMgc2VsZWN0b3IgXCInICsgYm91bmRzICsgJ1wiIGNvdWxkIG5vdCBmaW5kIGFuIGVsZW1lbnQuJyk7XG4gICAgfVxuXG4gICAgdmFyIGJvdW5kTm9kZUVsXG4gICAgLyo6IEhUTUxFbGVtZW50Ki9cbiAgICA9IGJvdW5kTm9kZTsgLy8gZm9yIEZsb3csIGNhbid0IHNlZW0gdG8gcmVmaW5lIGNvcnJlY3RseVxuXG4gICAgdmFyIG5vZGVTdHlsZSA9IG93bmVyV2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgdmFyIGJvdW5kTm9kZVN0eWxlID0gb3duZXJXaW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShib3VuZE5vZGVFbCk7IC8vIENvbXB1dGUgYm91bmRzLiBUaGlzIGlzIGEgcGFpbiB3aXRoIHBhZGRpbmcgYW5kIG9mZnNldHMgYnV0IHRoaXMgZ2V0cyBpdCBleGFjdGx5IHJpZ2h0LlxuXG4gICAgYm91bmRzID0ge1xuICAgICAgbGVmdDogLW5vZGUub2Zmc2V0TGVmdCArICgwLCBfc2hpbXMuaW50KShib3VuZE5vZGVTdHlsZS5wYWRkaW5nTGVmdCkgKyAoMCwgX3NoaW1zLmludCkobm9kZVN0eWxlLm1hcmdpbkxlZnQpLFxuICAgICAgdG9wOiAtbm9kZS5vZmZzZXRUb3AgKyAoMCwgX3NoaW1zLmludCkoYm91bmROb2RlU3R5bGUucGFkZGluZ1RvcCkgKyAoMCwgX3NoaW1zLmludCkobm9kZVN0eWxlLm1hcmdpblRvcCksXG4gICAgICByaWdodDogKDAsIF9kb21GbnMuaW5uZXJXaWR0aCkoYm91bmROb2RlRWwpIC0gKDAsIF9kb21GbnMub3V0ZXJXaWR0aCkobm9kZSkgLSBub2RlLm9mZnNldExlZnQgKyAoMCwgX3NoaW1zLmludCkoYm91bmROb2RlU3R5bGUucGFkZGluZ1JpZ2h0KSAtICgwLCBfc2hpbXMuaW50KShub2RlU3R5bGUubWFyZ2luUmlnaHQpLFxuICAgICAgYm90dG9tOiAoMCwgX2RvbUZucy5pbm5lckhlaWdodCkoYm91bmROb2RlRWwpIC0gKDAsIF9kb21GbnMub3V0ZXJIZWlnaHQpKG5vZGUpIC0gbm9kZS5vZmZzZXRUb3AgKyAoMCwgX3NoaW1zLmludCkoYm91bmROb2RlU3R5bGUucGFkZGluZ0JvdHRvbSkgLSAoMCwgX3NoaW1zLmludCkobm9kZVN0eWxlLm1hcmdpbkJvdHRvbSlcbiAgICB9O1xuICB9IC8vIEtlZXAgeCBhbmQgeSBiZWxvdyByaWdodCBhbmQgYm90dG9tIGxpbWl0cy4uLlxuXG5cbiAgaWYgKCgwLCBfc2hpbXMuaXNOdW0pKGJvdW5kcy5yaWdodCkpIHggPSBNYXRoLm1pbih4LCBib3VuZHMucmlnaHQpO1xuICBpZiAoKDAsIF9zaGltcy5pc051bSkoYm91bmRzLmJvdHRvbSkpIHkgPSBNYXRoLm1pbih5LCBib3VuZHMuYm90dG9tKTsgLy8gQnV0IGFib3ZlIGxlZnQgYW5kIHRvcCBsaW1pdHMuXG5cbiAgaWYgKCgwLCBfc2hpbXMuaXNOdW0pKGJvdW5kcy5sZWZ0KSkgeCA9IE1hdGgubWF4KHgsIGJvdW5kcy5sZWZ0KTtcbiAgaWYgKCgwLCBfc2hpbXMuaXNOdW0pKGJvdW5kcy50b3ApKSB5ID0gTWF0aC5tYXgoeSwgYm91bmRzLnRvcCk7XG4gIHJldHVybiBbeCwgeV07XG59XG5cbmZ1bmN0aW9uIHNuYXBUb0dyaWQoZ3JpZFxuLyo6IFtudW1iZXIsIG51bWJlcl0qL1xuLCBwZW5kaW5nWFxuLyo6IG51bWJlciovXG4sIHBlbmRpbmdZXG4vKjogbnVtYmVyKi9cbilcbi8qOiBbbnVtYmVyLCBudW1iZXJdKi9cbntcbiAgdmFyIHggPSBNYXRoLnJvdW5kKHBlbmRpbmdYIC8gZ3JpZFswXSkgKiBncmlkWzBdO1xuICB2YXIgeSA9IE1hdGgucm91bmQocGVuZGluZ1kgLyBncmlkWzFdKSAqIGdyaWRbMV07XG4gIHJldHVybiBbeCwgeV07XG59XG5cbmZ1bmN0aW9uIGNhbkRyYWdYKGRyYWdnYWJsZVxuLyo6IERyYWdnYWJsZSovXG4pXG4vKjogYm9vbGVhbiovXG57XG4gIHJldHVybiBkcmFnZ2FibGUucHJvcHMuYXhpcyA9PT0gJ2JvdGgnIHx8IGRyYWdnYWJsZS5wcm9wcy5heGlzID09PSAneCc7XG59XG5cbmZ1bmN0aW9uIGNhbkRyYWdZKGRyYWdnYWJsZVxuLyo6IERyYWdnYWJsZSovXG4pXG4vKjogYm9vbGVhbiovXG57XG4gIHJldHVybiBkcmFnZ2FibGUucHJvcHMuYXhpcyA9PT0gJ2JvdGgnIHx8IGRyYWdnYWJsZS5wcm9wcy5heGlzID09PSAneSc7XG59IC8vIEdldCB7eCwgeX0gcG9zaXRpb25zIGZyb20gZXZlbnQuXG5cblxuZnVuY3Rpb24gZ2V0Q29udHJvbFBvc2l0aW9uKGVcbi8qOiBNb3VzZVRvdWNoRXZlbnQqL1xuLCB0b3VjaElkZW50aWZpZXJcbi8qOiA/bnVtYmVyKi9cbiwgZHJhZ2dhYmxlQ29yZVxuLyo6IERyYWdnYWJsZUNvcmUqL1xuKVxuLyo6ID9Db250cm9sUG9zaXRpb24qL1xue1xuICB2YXIgdG91Y2hPYmogPSB0eXBlb2YgdG91Y2hJZGVudGlmaWVyID09PSAnbnVtYmVyJyA/ICgwLCBfZG9tRm5zLmdldFRvdWNoKShlLCB0b3VjaElkZW50aWZpZXIpIDogbnVsbDtcbiAgaWYgKHR5cGVvZiB0b3VjaElkZW50aWZpZXIgPT09ICdudW1iZXInICYmICF0b3VjaE9iaikgcmV0dXJuIG51bGw7IC8vIG5vdCB0aGUgcmlnaHQgdG91Y2hcblxuICB2YXIgbm9kZSA9IGZpbmRET01Ob2RlKGRyYWdnYWJsZUNvcmUpOyAvLyBVc2VyIGNhbiBwcm92aWRlIGFuIG9mZnNldFBhcmVudCBpZiBkZXNpcmVkLlxuXG4gIHZhciBvZmZzZXRQYXJlbnQgPSBkcmFnZ2FibGVDb3JlLnByb3BzLm9mZnNldFBhcmVudCB8fCBub2RlLm9mZnNldFBhcmVudCB8fCBub2RlLm93bmVyRG9jdW1lbnQuYm9keTtcbiAgcmV0dXJuICgwLCBfZG9tRm5zLm9mZnNldFhZRnJvbVBhcmVudCkodG91Y2hPYmogfHwgZSwgb2Zmc2V0UGFyZW50LCBkcmFnZ2FibGVDb3JlLnByb3BzLnNjYWxlKTtcbn0gLy8gQ3JlYXRlIGFuIGRhdGEgb2JqZWN0IGV4cG9zZWQgYnkgPERyYWdnYWJsZUNvcmU+J3MgZXZlbnRzXG5cblxuZnVuY3Rpb24gY3JlYXRlQ29yZURhdGEoZHJhZ2dhYmxlXG4vKjogRHJhZ2dhYmxlQ29yZSovXG4sIHhcbi8qOiBudW1iZXIqL1xuLCB5XG4vKjogbnVtYmVyKi9cbilcbi8qOiBEcmFnZ2FibGVEYXRhKi9cbntcbiAgdmFyIHN0YXRlID0gZHJhZ2dhYmxlLnN0YXRlO1xuICB2YXIgaXNTdGFydCA9ICEoMCwgX3NoaW1zLmlzTnVtKShzdGF0ZS5sYXN0WCk7XG4gIHZhciBub2RlID0gZmluZERPTU5vZGUoZHJhZ2dhYmxlKTtcblxuICBpZiAoaXNTdGFydCkge1xuICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IG1vdmUsIHVzZSB0aGUgeCBhbmQgeSBhcyBsYXN0IGNvb3Jkcy5cbiAgICByZXR1cm4ge1xuICAgICAgbm9kZTogbm9kZSxcbiAgICAgIGRlbHRhWDogMCxcbiAgICAgIGRlbHRhWTogMCxcbiAgICAgIGxhc3RYOiB4LFxuICAgICAgbGFzdFk6IHksXG4gICAgICB4OiB4LFxuICAgICAgeTogeVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgLy8gT3RoZXJ3aXNlIGNhbGN1bGF0ZSBwcm9wZXIgdmFsdWVzLlxuICAgIHJldHVybiB7XG4gICAgICBub2RlOiBub2RlLFxuICAgICAgZGVsdGFYOiB4IC0gc3RhdGUubGFzdFgsXG4gICAgICBkZWx0YVk6IHkgLSBzdGF0ZS5sYXN0WSxcbiAgICAgIGxhc3RYOiBzdGF0ZS5sYXN0WCxcbiAgICAgIGxhc3RZOiBzdGF0ZS5sYXN0WSxcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5XG4gICAgfTtcbiAgfVxufSAvLyBDcmVhdGUgYW4gZGF0YSBleHBvc2VkIGJ5IDxEcmFnZ2FibGU+J3MgZXZlbnRzXG5cblxuZnVuY3Rpb24gY3JlYXRlRHJhZ2dhYmxlRGF0YShkcmFnZ2FibGVcbi8qOiBEcmFnZ2FibGUqL1xuLCBjb3JlRGF0YVxuLyo6IERyYWdnYWJsZURhdGEqL1xuKVxuLyo6IERyYWdnYWJsZURhdGEqL1xue1xuICB2YXIgc2NhbGUgPSBkcmFnZ2FibGUucHJvcHMuc2NhbGU7XG4gIHJldHVybiB7XG4gICAgbm9kZTogY29yZURhdGEubm9kZSxcbiAgICB4OiBkcmFnZ2FibGUuc3RhdGUueCArIGNvcmVEYXRhLmRlbHRhWCAvIHNjYWxlLFxuICAgIHk6IGRyYWdnYWJsZS5zdGF0ZS55ICsgY29yZURhdGEuZGVsdGFZIC8gc2NhbGUsXG4gICAgZGVsdGFYOiBjb3JlRGF0YS5kZWx0YVggLyBzY2FsZSxcbiAgICBkZWx0YVk6IGNvcmVEYXRhLmRlbHRhWSAvIHNjYWxlLFxuICAgIGxhc3RYOiBkcmFnZ2FibGUuc3RhdGUueCxcbiAgICBsYXN0WTogZHJhZ2dhYmxlLnN0YXRlLnlcbiAgfTtcbn0gLy8gQSBsb3QgZmFzdGVyIHRoYW4gc3RyaW5naWZ5L3BhcnNlXG5cblxuZnVuY3Rpb24gY2xvbmVCb3VuZHMoYm91bmRzXG4vKjogQm91bmRzKi9cbilcbi8qOiBCb3VuZHMqL1xue1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IGJvdW5kcy5sZWZ0LFxuICAgIHRvcDogYm91bmRzLnRvcCxcbiAgICByaWdodDogYm91bmRzLnJpZ2h0LFxuICAgIGJvdHRvbTogYm91bmRzLmJvdHRvbVxuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kRE9NTm9kZShkcmFnZ2FibGVcbi8qOiBEcmFnZ2FibGUgfCBEcmFnZ2FibGVDb3JlKi9cbilcbi8qOiBIVE1MRWxlbWVudCovXG57XG4gIHZhciBub2RlID0gZHJhZ2dhYmxlLmZpbmRET01Ob2RlKCk7XG5cbiAgaWYgKCFub2RlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCc8RHJhZ2dhYmxlQ29yZT46IFVubW91bnRlZCBkdXJpbmcgZXZlbnQhJyk7XG4gIH0gLy8gJEZsb3dJZ25vcmUgd2UgY2FuJ3QgYXNzZXJ0IG9uIEhUTUxFbGVtZW50IGR1ZSB0byB0ZXN0cy4uLiBGSVhNRVxuXG5cbiAgcmV0dXJuIG5vZGU7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmZpbmRJbkFycmF5ID0gZmluZEluQXJyYXk7XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuZXhwb3J0cy5pc051bSA9IGlzTnVtO1xuZXhwb3J0cy5pbnQgPSBpbnQ7XG5leHBvcnRzLmRvbnRTZXRNZSA9IGRvbnRTZXRNZTtcblxuLy8gQGNyZWRpdHMgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vcm9nb3pobmlrb2ZmL2E0M2NmZWQyN2M0MWU0ZTY4Y2RjXG5mdW5jdGlvbiBmaW5kSW5BcnJheShhcnJheVxuLyo6IEFycmF5PGFueT4gfCBUb3VjaExpc3QqL1xuLCBjYWxsYmFja1xuLyo6IEZ1bmN0aW9uKi9cbilcbi8qOiBhbnkqL1xue1xuICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoY2FsbGJhY2suYXBwbHkoY2FsbGJhY2ssIFthcnJheVtpXSwgaSwgYXJyYXldKSkgcmV0dXJuIGFycmF5W2ldO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuY1xuLyo6IGFueSovXG4pXG4vKjogYm9vbGVhbiAlY2hlY2tzKi9cbntcbiAgLy8gJEZsb3dJZ25vcmVbbWV0aG9kLXVuYmluZGluZ11cbiAgcmV0dXJuIHR5cGVvZiBmdW5jID09PSAnZnVuY3Rpb24nIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChmdW5jKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuZnVuY3Rpb24gaXNOdW0obnVtXG4vKjogYW55Ki9cbilcbi8qOiBib29sZWFuICVjaGVja3MqL1xue1xuICByZXR1cm4gdHlwZW9mIG51bSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKG51bSk7XG59XG5cbmZ1bmN0aW9uIGludChhXG4vKjogc3RyaW5nKi9cbilcbi8qOiBudW1iZXIqL1xue1xuICByZXR1cm4gcGFyc2VJbnQoYSwgMTApO1xufVxuXG5mdW5jdGlvbiBkb250U2V0TWUocHJvcHNcbi8qOiBPYmplY3QqL1xuLCBwcm9wTmFtZVxuLyo6IHN0cmluZyovXG4sIGNvbXBvbmVudE5hbWVcbi8qOiBzdHJpbmcqL1xuKVxuLyo6ID9FcnJvciovXG57XG4gIGlmIChwcm9wc1twcm9wTmFtZV0pIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKFwiSW52YWxpZCBwcm9wIFwiLmNvbmNhdChwcm9wTmFtZSwgXCIgcGFzc2VkIHRvIFwiKS5jb25jYXQoY29tcG9uZW50TmFtZSwgXCIgLSBkbyBub3Qgc2V0IHRoaXMsIHNldCBpdCBvbiB0aGUgY2hpbGQuXCIpKTtcbiAgfVxufSIsInZhciBfX3JlYWQgPSAodGhpcyAmJiB0aGlzLl9fcmVhZCkgfHwgZnVuY3Rpb24gKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufTtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUmVzaXphYmxlIH0gZnJvbSAncmVhY3QtcmVzaXphYmxlJztcclxudmFyIGZhaW50QmxhY2sgPSAncmdiYSgwLCAwLCAwLCAwLjEyKSc7XHJcbnZhciBTcGFjZXJSZXNpemFibGUgPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIHZhciBfYSwgX2IsIF9jO1xyXG4gICAgdmFyIF9kID0gX19yZWFkKHVzZVN0YXRlKChfYiA9IChfYSA9IHByb3BzLmRhdGEpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5oZWlnaHQpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IDI0KSwgMiksIGhlaWdodCA9IF9kWzBdLCBzZXRIZWlnaHQgPSBfZFsxXTtcclxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7IHZhciBfYTsgcmV0dXJuIHNldEhlaWdodCgoX2EgPSBwcm9wcy5kYXRhKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaGVpZ2h0KTsgfSwgWyhfYyA9IHByb3BzLmRhdGEpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5oZWlnaHRdKTtcclxuICAgIHZhciBvbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlO1xyXG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlc2l6YWJsZSwgeyBvblJlc2l6ZTogZnVuY3Rpb24gKGUsIF9hKSB7XHJcbiAgICAgICAgICAgIHZhciBfYjtcclxuICAgICAgICAgICAgdmFyIHNpemUgPSBfYS5zaXplO1xyXG4gICAgICAgICAgICBzZXRIZWlnaHQoKF9iID0gc2l6ZSA9PT0gbnVsbCB8fCBzaXplID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzaXplLmhlaWdodCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogMCk7XHJcbiAgICAgICAgfSwgb25SZXNpemVTdG9wOiBmdW5jdGlvbiAoZSwgX2EpIHtcclxuICAgICAgICAgICAgdmFyIHNpemUgPSBfYS5zaXplO1xyXG4gICAgICAgICAgICByZXR1cm4gb25DaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBzaXplID09PSBudWxsIHx8IHNpemUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNpemUuaGVpZ2h0LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCBoZWlnaHQ6IGhlaWdodCwgd2lkdGg6IDAgfSxcclxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgaGVpZ2h0OiBoZWlnaHQsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH0gfSxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMjRweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWludEJsYWNrLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICB9IH0sXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHsgdmlld0JveDogXCIwIDAgMjQgMjRcIiwgc3R5bGU6IHsgY29sb3I6ICd3aGl0ZScsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyNCB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBcIk0yMCA5SDR2MmgxNlY5ek00IDE1aDE2di0ySDR2MnpcIiB9KSkpKSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTcGFjZXJSZXNpemFibGU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNwYWNlclJlc2l6YWJsZS5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9