(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[5],{

/***/ "../node_modules/@xobotyi/scrollbar-width/dist/index.esm.js":
/*!******************************************************************!*\
  !*** ../node_modules/@xobotyi/scrollbar-width/dist/index.esm.js ***!
  \******************************************************************/
/*! exports provided: scrollbarWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollbarWidth", function() { return e; });
var e=function(t){if("undefined"==typeof document)return 0;if(document.body&&(!document.readyState||"loading"!==document.readyState)){if(!0!==t&&"number"==typeof e.__cache)return e.__cache;var o=document.createElement("div"),d=o.style;d.display="block",d.position="absolute",d.width="100px",d.height="100px",d.left="-999px",d.top="-999px",d.overflow="scroll",document.body.insertBefore(o,null);var n=o.clientWidth;if(0!==n)return e.__cache=100-n,document.body.removeChild(o),e.__cache;document.body.removeChild(o)}};


/***/ }),

/***/ "../node_modules/copy-to-clipboard/index.js":
/*!**************************************************!*\
  !*** ../node_modules/copy-to-clipboard/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deselectCurrent = __webpack_require__(/*! toggle-selection */ "../node_modules/toggle-selection/index.js");

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ "../node_modules/fast-deep-equal/react.js":
/*!************************************************!*\
  !*** ../node_modules/fast-deep-equal/react.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        continue;
      }

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ "../node_modules/fast-shallow-equal/index.js":
/*!***************************************************!*\
  !*** ../node_modules/fast-shallow-equal/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var keyList = Object.keys;

exports.equal = function equal (a, b) {
  if (a === b) return true;
  if (!(a instanceof Object) || !(b instanceof Object)) return false;

  var keys = keyList(a);
  var length = keys.length;

  for (var i = 0; i < length; i++)
    if (!(keys[i] in b)) return false;

  for (var i = 0; i < length; i++)
    if (a[keys[i]] !== b[keys[i]]) return false;

  return length === keyList(b).length;
};


/***/ }),

/***/ "../node_modules/is-hotkey/lib/index.js":
/*!**********************************************!*\
  !*** ../node_modules/is-hotkey/lib/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Constants.
 */

var IS_MAC = typeof window != 'undefined' && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);

var MODIFIERS = {
  alt: 'altKey',
  control: 'ctrlKey',
  meta: 'metaKey',
  shift: 'shiftKey'
};

var ALIASES = {
  add: '+',
  break: 'pause',
  cmd: 'meta',
  command: 'meta',
  ctl: 'control',
  ctrl: 'control',
  del: 'delete',
  down: 'arrowdown',
  esc: 'escape',
  ins: 'insert',
  left: 'arrowleft',
  mod: IS_MAC ? 'meta' : 'control',
  opt: 'alt',
  option: 'alt',
  return: 'enter',
  right: 'arrowright',
  space: ' ',
  spacebar: ' ',
  up: 'arrowup',
  win: 'meta',
  windows: 'meta'
};

var CODES = {
  backspace: 8,
  tab: 9,
  enter: 13,
  shift: 16,
  control: 17,
  alt: 18,
  pause: 19,
  capslock: 20,
  escape: 27,
  ' ': 32,
  pageup: 33,
  pagedown: 34,
  end: 35,
  home: 36,
  arrowleft: 37,
  arrowup: 38,
  arrowright: 39,
  arrowdown: 40,
  insert: 45,
  delete: 46,
  meta: 91,
  numlock: 144,
  scrolllock: 145,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  '\'': 222
};

for (var f = 1; f < 20; f++) {
  CODES['f' + f] = 111 + f;
}

/**
 * Is hotkey?
 */

function isHotkey(hotkey, options, event) {
  if (options && !('byKey' in options)) {
    event = options;
    options = null;
  }

  if (!Array.isArray(hotkey)) {
    hotkey = [hotkey];
  }

  var array = hotkey.map(function (string) {
    return parseHotkey(string, options);
  });
  var check = function check(e) {
    return array.some(function (object) {
      return compareHotkey(object, e);
    });
  };
  var ret = event == null ? check : check(event);
  return ret;
}

function isCodeHotkey(hotkey, event) {
  return isHotkey(hotkey, event);
}

function isKeyHotkey(hotkey, event) {
  return isHotkey(hotkey, { byKey: true }, event);
}

/**
 * Parse.
 */

function parseHotkey(hotkey, options) {
  var byKey = options && options.byKey;
  var ret = {};

  // Special case to handle the `+` key since we use it as a separator.
  hotkey = hotkey.replace('++', '+add');
  var values = hotkey.split('+');
  var length = values.length;

  // Ensure that all the modifiers are set to false unless the hotkey has them.

  for (var k in MODIFIERS) {
    ret[MODIFIERS[k]] = false;
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var value = _step.value;

      var optional = value.endsWith('?') && value.length > 1;

      if (optional) {
        value = value.slice(0, -1);
      }

      var name = toKeyName(value);
      var modifier = MODIFIERS[name];

      if (length === 1 || !modifier) {
        if (byKey) {
          ret.key = name;
        } else {
          ret.which = toKeyCode(value);
        }
      }

      if (modifier) {
        ret[modifier] = optional ? null : true;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return ret;
}

/**
 * Compare.
 */

function compareHotkey(object, event) {
  for (var key in object) {
    var expected = object[key];
    var actual = void 0;

    if (expected == null) {
      continue;
    }

    if (key === 'key' && event.key != null) {
      actual = event.key.toLowerCase();
    } else if (key === 'which') {
      actual = expected === 91 && event.which === 93 ? 91 : event.which;
    } else {
      actual = event[key];
    }

    if (actual == null && expected === false) {
      continue;
    }

    if (actual !== expected) {
      return false;
    }
  }

  return true;
}

/**
 * Utils.
 */

function toKeyCode(name) {
  name = toKeyName(name);
  var code = CODES[name] || name.toUpperCase().charCodeAt(0);
  return code;
}

function toKeyName(name) {
  name = name.toLowerCase();
  name = ALIASES[name] || name;
  return name;
}

/**
 * Export.
 */

exports.default = isHotkey;
exports.isHotkey = isHotkey;
exports.isCodeHotkey = isCodeHotkey;
exports.isKeyHotkey = isKeyHotkey;
exports.parseHotkey = parseHotkey;
exports.compareHotkey = compareHotkey;
exports.toKeyCode = toKeyCode;
exports.toKeyName = toKeyName;

/***/ }),

/***/ "../node_modules/js-cookie/src/js.cookie.js":
/*!**************************************************!*\
  !*** ../node_modules/js-cookie/src/js.cookie.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "../node_modules/lodash.throttle/index.js":
/*!************************************************!*\
  !*** ../node_modules/lodash.throttle/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../next/dist/compiled/webpack/global.js */ "../node_modules/next/dist/compiled/webpack/global.js")))

/***/ }),

/***/ "../node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js":
/*!***************************************************************************!*\
  !*** ../node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pkgName = 'nano-css';

module.exports = function warnOnMissingDependencies (addon, renderer, deps) {
    var missing = [];

    for (var i = 0; i < deps.length; i++) {
        var name = deps[i];

        if (!renderer[name]) {
            missing.push(name);
        }
    }

    if (missing.length) {
        var str = 'Addon "' + addon + '" is missing the following dependencies:';

        for (var j = 0; j < missing.length; j++) {
            str += '\n require("' + pkgName + '/addon/' + missing[j] + '").addon(nano);';
        }

        throw new Error(str);
    }
};


/***/ }),

/***/ "../node_modules/nano-css/addon/cssom.js":
/*!***********************************************!*\
  !*** ../node_modules/nano-css/addon/cssom.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.addon = function (renderer) {
    // CSSOM support only browser environment.
    if (!renderer.client) return;

    if (true) {
        __webpack_require__(/*! ./__dev__/warnOnMissingDependencies */ "../node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js")('cssom', renderer, ['sh']);
    }

    // Style sheet for media queries.
    document.head.appendChild(renderer.msh = document.createElement('style'));

    renderer.createRule = function (selector, prelude) {
        var rawCss = selector + '{}';
        if (prelude) rawCss = prelude + '{' + rawCss + '}';
        var sheet = prelude ? renderer.msh.sheet : renderer.sh.sheet;
        var index = sheet.insertRule(rawCss, sheet.cssRules.length);
        var rule = (sheet.cssRules || sheet.rules)[index];

        // Keep track of `index` where rule was inserted in the sheet. This is
        // needed for rule deletion.
        rule.index = index;

        if (prelude) {
            // If rule has media query (it has prelude), move style (CSSStyleDeclaration)
            // object to the "top" to normalize it with a rule without the media
            // query, so that both rules have `.style` property available.
            var selectorRule = (rule.cssRules || rule.rules)[0];
            rule.style = selectorRule.style;
            rule.styleMap = selectorRule.styleMap;
        }

        return rule;
    };
};


/***/ }),

/***/ "../node_modules/nano-css/addon/vcssom.js":
/*!************************************************!*\
  !*** ../node_modules/nano-css/addon/vcssom.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var removeRule = __webpack_require__(/*! ./vcssom/removeRule */ "../node_modules/nano-css/addon/vcssom/removeRule.js").removeRule;

exports.addon = function (renderer) {
    // VCSSOM support only browser environment.
    if (!renderer.client) return;

    if (true) {
        __webpack_require__(/*! ./__dev__/warnOnMissingDependencies */ "../node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js")('cssom', renderer, ['createRule']); // cssom
    }

    var kebab = renderer.kebab;

    function VRule (selector, prelude) {
        this.rule = renderer.createRule(selector, prelude);
        this.decl = {};
    }
    VRule.prototype.diff = function (newDecl) {
        var oldDecl = this.decl;
        var style = this.rule.style;
        var property;
        for (property in oldDecl)
            if (newDecl[property] === undefined)
                style.removeProperty(property);
        for (property in newDecl)
            if (newDecl[property] !== oldDecl[property])
                style.setProperty(kebab(property), newDecl[property]);
        this.decl = newDecl;
    };
    VRule.prototype.del = function () {
        removeRule(this.rule);
    };

    function VSheet () {
        /**
         * {
         *   '<at-rule-prelude>': {
         *     '<selector>': {
         *       color: 'red
         *     }
         *   }
         * }
         */
        this.tree = {};
    }
    VSheet.prototype.diff = function (newTree) {
        var oldTree = this.tree;

        // Remove media queries not present in new tree.
        for (var prelude in oldTree) {
            if (newTree[prelude] === undefined) {
                var rules = oldTree[prelude];
                for (var selector in rules)
                    rules[selector].del();
            }
        }

        for (var prelude in newTree) {
            if (oldTree[prelude] === undefined) {
                // Whole media query is new.
                for (var selector in newTree[prelude]) {
                    var rule = new VRule(selector, prelude);
                    rule.diff(newTree[prelude][selector]);
                    newTree[prelude][selector] = rule;
                }
            } else {
                // Old tree already has rules with this media query.
                var oldRules = oldTree[prelude];
                var newRules = newTree[prelude];

                // Remove rules not present in new tree.
                for (var selector in oldRules)
                    if (!newRules[selector])
                        oldRules[selector].del();

                // Apply new rules.
                for (var selector in newRules) {
                    var rule = oldRules[selector];
                    if (rule) {
                        rule.diff(newRules[selector]);
                        newRules[selector] = rule;
                    } else {
                        rule = new VRule(selector, prelude);
                        rule.diff(newRules[selector]);
                        newRules[selector] = rule;
                    }
                }
            }
        }

        this.tree = newTree;
    };

    renderer.VRule = VRule;
    renderer.VSheet = VSheet;
};


/***/ }),

/***/ "../node_modules/nano-css/addon/vcssom/cssToTree.js":
/*!**********************************************************!*\
  !*** ../node_modules/nano-css/addon/vcssom/cssToTree.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function cssToTree (tree, css, selector, prelude) {
    var declarations = {};
    var hasDeclarations = false;
    var key, value;

    for (key in css) {
        value = css[key];
        if (typeof value !== 'object') {
            hasDeclarations = true;
            declarations[key] = value;
        }
    }

    if (hasDeclarations) {
        if (!tree[prelude]) tree[prelude] = {};
        tree[prelude][selector] = declarations;
    }

    for (key in css) {
        value = css[key];
        if (typeof value === 'object') {
            if (key[0] === '@') {
                cssToTree(tree, value, selector, key);
            } else {
                var hasCurrentSymbol = key.indexOf('&') > -1;
                var selectorParts = selector.split(',');
                if (hasCurrentSymbol) {
                    for (var i = 0; i < selectorParts.length; i++) {
                        selectorParts[i] = key.replace(/&/g, selectorParts[i]);
                    }
                } else {
                    for (var i = 0; i < selectorParts.length; i++) {
                        selectorParts[i] = selectorParts[i] + ' ' + key;
                    }
                }
                cssToTree(tree, value, selectorParts.join(','), prelude);
            }
        }
    }
};

exports.cssToTree = cssToTree;


/***/ }),

/***/ "../node_modules/nano-css/addon/vcssom/removeRule.js":
/*!***********************************************************!*\
  !*** ../node_modules/nano-css/addon/vcssom/removeRule.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function removeRule (rule) {
    var maxIndex = rule.index;
    var sh = rule.parentStyleSheet;
    var rules = sh.cssRules || sh.rules;
    maxIndex = Math.max(maxIndex, rules.length - 1);
    while (maxIndex >= 0) {
        if (rules[maxIndex] === rule) {
            sh.deleteRule(maxIndex);
            break;
        }
        maxIndex--;
    }
}

exports.removeRule = removeRule;


/***/ }),

/***/ "../node_modules/nano-css/index.js":
/*!*****************************************!*\
  !*** ../node_modules/nano-css/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KEBAB_REGEX = /[A-Z]/g;

var hash = function (str) {
    var h = 5381, i = str.length;

    while (i) h = (h * 33) ^ str.charCodeAt(--i);

    return '_' + (h >>> 0).toString(36);
};

exports.create = function (config) {
    config = config || {};
    var assign = config.assign || Object.assign;
    var client = typeof window === 'object';

    // Check if we are really in browser environment.
    if (true) {
        if (client) {
            if ((typeof document !== 'object') || !document.getElementsByTagName('HTML')) {
                console.error(
                    'nano-css detected browser environment because of "window" global, but ' +
                    '"document" global seems to be defective.'
                );
            }
        }
    }

    var renderer = assign({
        raw: '',
        pfx: '_',
        client: client,
        assign: assign,
        stringify: JSON.stringify,
        kebab: function (prop) {
            return prop.replace(KEBAB_REGEX, '-$&').toLowerCase();
        },
        decl: function (key, value) {
            key = renderer.kebab(key);
            return key + ':' + value + ';';
        },
        hash: function (obj) {
            return hash(renderer.stringify(obj));
        },
        selector: function (parent, selector) {
            return parent + (selector[0] === ':' ? ''  : ' ') + selector;
        },
        putRaw: function (rawCssRule) {
            renderer.raw += rawCssRule;
        }
    }, config);

    if (renderer.client) {
        if (!renderer.sh)
            document.head.appendChild(renderer.sh = document.createElement('style'));

        if (true) {
            renderer.sh.setAttribute('data-nano-css-dev', '');

            // Test style sheet used in DEV mode to test if .insetRule() would throw.
            renderer.shTest = document.createElement('style');
            renderer.shTest.setAttribute('data-nano-css-dev-tests', '');
            document.head.appendChild(renderer.shTest);
        }

        renderer.putRaw = function (rawCssRule) {
            // .insertRule() is faster than .appendChild(), that's why we use it in PROD.
            // But CSS injected using .insertRule() is not displayed in Chrome Devtools,
            // that's why we use .appendChild in DEV.
            if (false) { var sheet; } else {
                // Test if .insertRule() works in dev mode. Unknown pseudo-selectors will throw when
                // .insertRule() is used, but .appendChild() will not throw.
                try {
                    renderer.shTest.sheet.insertRule(rawCssRule, renderer.shTest.sheet.cssRules.length);
                } catch (error) {
                    if (config.verbose) {
                        console.error(error);
                    }
                }

                // Insert pretty-printed CSS for dev mode.
                renderer.sh.appendChild(document.createTextNode(rawCssRule));
            }
        };
    }

    renderer.put = function (selector, decls, atrule) {
        var str = '';
        var prop, value;
        var postponed = [];

        for (prop in decls) {
            value = decls[prop];

            if ((value instanceof Object) && !(value instanceof Array)) {
                postponed.push(prop);
            } else {
                if (( true) && !renderer.sourcemaps) {
                    str += '    ' + renderer.decl(prop, value, selector, atrule) + '\n';
                } else {
                    str += renderer.decl(prop, value, selector, atrule);
                }
            }
        }

        if (str) {
            if (( true) && !renderer.sourcemaps) {
                str = '\n' + selector + ' {\n' + str + '}\n';
            } else {
                str = selector + '{' + str + '}';
            }
            renderer.putRaw(atrule ? atrule + '{' + str + '}' : str);
        }

        for (var i = 0; i < postponed.length; i++) {
            prop = postponed[i];

            if (prop[0] === '@' && prop !== '@font-face') {
                renderer.putAt(selector, decls[prop], prop);
            } else {
                renderer.put(renderer.selector(selector, prop), decls[prop], atrule);
            }
        }
    };

    renderer.putAt = renderer.put;

    return renderer;
};


/***/ }),

/***/ "../node_modules/react-draggable/build/cjs/Draggable.js":
/*!**************************************************************!*\
  !*** ../node_modules/react-draggable/build/cjs/Draggable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "../node_modules/react-draggable/node_modules/classnames/index.js"));

var _domFns = __webpack_require__(/*! ./utils/domFns */ "../node_modules/react-draggable/build/cjs/utils/domFns.js");

var _positionFns = __webpack_require__(/*! ./utils/positionFns */ "../node_modules/react-draggable/build/cjs/utils/positionFns.js");

var _shims = __webpack_require__(/*! ./utils/shims */ "../node_modules/react-draggable/build/cjs/utils/shims.js");

var _DraggableCore = _interopRequireDefault(__webpack_require__(/*! ./DraggableCore */ "../node_modules/react-draggable/build/cjs/DraggableCore.js"));

var _log = _interopRequireDefault(__webpack_require__(/*! ./utils/log */ "../node_modules/react-draggable/build/cjs/utils/log.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
// Define <Draggable>
//
var Draggable = /*#__PURE__*/function (_React$Component) {
  _inherits(Draggable, _React$Component);

  var _super = _createSuper(Draggable);

  _createClass(Draggable, null, [{
    key: "getDerivedStateFromProps",
    // React 16.3+
    // Arity (props, state)
    value: function getDerivedStateFromProps(_ref, _ref2) {
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
      return this.props.nodeRef ? this.props.nodeRef.current : _reactDom.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function render()
    /*: ReactElement<any>*/
    {
      var _classNames;

      var _this$props = this.props,
          axis = _this$props.axis,
          bounds = _this$props.bounds,
          children = _this$props.children,
          defaultPosition = _this$props.defaultPosition,
          defaultClassName = _this$props.defaultClassName,
          defaultClassNameDragging = _this$props.defaultClassNameDragging,
          defaultClassNameDragged = _this$props.defaultClassNameDragged,
          position = _this$props.position,
          positionOffset = _this$props.positionOffset,
          scale = _this$props.scale,
          draggableCoreProps = _objectWithoutProperties(_this$props, ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"]);

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


      var className = (0, _classnames.default)(children.props.className || '', defaultClassName, (_classNames = {}, _defineProperty(_classNames, defaultClassNameDragging, this.state.dragging), _defineProperty(_classNames, defaultClassNameDragged, this.state.dragged), _classNames)); // Reuse the child provided
      // This makes it flexible to use whatever element is wanted (div, ul, etc)

      return /*#__PURE__*/React.createElement(_DraggableCore.default, _extends({}, draggableCoreProps, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), React.cloneElement(React.Children.only(children), {
        className: className,
        style: _objectSpread(_objectSpread({}, children.props.style), style),
        transform: svgTransform
      }));
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
  position: null,
  scale: 1
}));

/***/ }),

/***/ "../node_modules/react-draggable/build/cjs/DraggableCore.js":
/*!******************************************************************!*\
  !*** ../node_modules/react-draggable/build/cjs/DraggableCore.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js"));

var _domFns = __webpack_require__(/*! ./utils/domFns */ "../node_modules/react-draggable/build/cjs/utils/domFns.js");

var _positionFns = __webpack_require__(/*! ./utils/positionFns */ "../node_modules/react-draggable/build/cjs/utils/positionFns.js");

var _shims = __webpack_require__(/*! ./utils/shims */ "../node_modules/react-draggable/build/cjs/utils/shims.js");

var _log = _interopRequireDefault(__webpack_require__(/*! ./utils/log */ "../node_modules/react-draggable/build/cjs/utils/log.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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

/*:: export type DraggableEventHandler = (e: MouseEvent, data: DraggableData) => void;*/

/*:: export type ControlPosition = {x: number, y: number};*/

/*:: export type PositionOffsetControlPosition = {x: number|string, y: number|string};*/

/*:: export type DraggableCoreProps = {
  allowAnyClick: boolean,
  cancel: string,
  children: ReactElement<any>,
  disabled: boolean,
  enableUserSelectHack: boolean,
  offsetParent: HTMLElement,
  grid: [number, number],
  handle: string,
  nodeRef?: ?React.ElementRef<any>,
  onStart: DraggableEventHandler,
  onDrag: DraggableEventHandler,
  onStop: DraggableEventHandler,
  onMouseDown: (e: MouseEvent) => void,
  scale: number,
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
      return this.props.nodeRef ? this.props.nodeRef.current : _reactDom.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function render() {
      // Reuse the child provided
      // This makes it flexible to use whatever element is wanted (div, ul, etc)
      return React.cloneElement(React.Children.only(this.props.children), {
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
  cancel: null,
  disabled: false,
  enableUserSelectHack: true,
  offsetParent: null,
  handle: null,
  grid: null,
  transform: null,
  onStart: function onStart() {},
  onDrag: function onDrag() {},
  onStop: function onStop() {},
  onMouseDown: function onMouseDown() {},
  scale: 1
});

/***/ }),

/***/ "../node_modules/react-draggable/build/cjs/cjs.js":
/*!********************************************************!*\
  !*** ../node_modules/react-draggable/build/cjs/cjs.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(/*! ./Draggable */ "../node_modules/react-draggable/build/cjs/Draggable.js"),
    Draggable = _require.default,
    DraggableCore = _require.DraggableCore; // Previous versions of this lib exported <Draggable> as the root export. As to no-// them, or TypeScript, we export *both* as the root and as 'default'.
// See https://github.com/mzabriskie/react-draggable/pull/254
// and https://github.com/mzabriskie/react-draggable/issues/266


module.exports = Draggable;
module.exports.default = Draggable;
module.exports.DraggableCore = DraggableCore;

/***/ }),

/***/ "../node_modules/react-draggable/build/cjs/utils/domFns.js":
/*!*****************************************************************!*\
  !*** ../node_modules/react-draggable/build/cjs/utils/domFns.js ***!
  \*****************************************************************/
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

var _shims = __webpack_require__(/*! ./shims */ "../node_modules/react-draggable/build/cjs/utils/shims.js");

var _getPrefix = _interopRequireWildcard(__webpack_require__(/*! ./getPrefix */ "../node_modules/react-draggable/build/cjs/utils/getPrefix.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

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
  }, inputOptions);

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
  }, inputOptions);

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
} // Get from offsetParent


function offsetXYFromParent(evt
/*: {clientX: number, clientY: number}*/
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

/***/ "../node_modules/react-draggable/build/cjs/utils/getPrefix.js":
/*!********************************************************************!*\
  !*** ../node_modules/react-draggable/build/cjs/utils/getPrefix.js ***!
  \********************************************************************/
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
  var prop
  /*: string*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';
  // Checking specifically for 'window.document' is for pseudo-browser server-side
  // environments that define 'window' as the global context.
  // E.g. React-rails (see https://github.com/reactjs/react-rails/pull/84)
  if (typeof window === 'undefined' || typeof window.document === 'undefined') return '';
  var style = window.document.documentElement.style;
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


var _default = getPrefix();

exports.default = _default;

/***/ }),

/***/ "../node_modules/react-draggable/build/cjs/utils/log.js":
/*!**************************************************************!*\
  !*** ../node_modules/react-draggable/build/cjs/utils/log.js ***!
  \**************************************************************/
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

/***/ "../node_modules/react-draggable/build/cjs/utils/positionFns.js":
/*!**********************************************************************!*\
  !*** ../node_modules/react-draggable/build/cjs/utils/positionFns.js ***!
  \**********************************************************************/
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

var _shims = __webpack_require__(/*! ./shims */ "../node_modules/react-draggable/build/cjs/utils/shims.js");

var _domFns = __webpack_require__(/*! ./domFns */ "../node_modules/react-draggable/build/cjs/utils/domFns.js");

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

    var nodeStyle = ownerWindow.getComputedStyle(node);
    var boundNodeStyle = ownerWindow.getComputedStyle(boundNode); // Compute bounds. This is a pain with padding and offsets but this gets it exactly right.

    bounds = {
      left: -node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingLeft) + (0, _shims.int)(nodeStyle.marginLeft),
      top: -node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingTop) + (0, _shims.int)(nodeStyle.marginTop),
      right: (0, _domFns.innerWidth)(boundNode) - (0, _domFns.outerWidth)(node) - node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingRight) - (0, _shims.int)(nodeStyle.marginRight),
      bottom: (0, _domFns.innerHeight)(boundNode) - (0, _domFns.outerHeight)(node) - node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingBottom) - (0, _shims.int)(nodeStyle.marginBottom)
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

/***/ "../node_modules/react-draggable/build/cjs/utils/shims.js":
/*!****************************************************************!*\
  !*** ../node_modules/react-draggable/build/cjs/utils/shims.js ***!
  \****************************************************************/
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
) {
  if (props[propName]) {
    return new Error("Invalid prop ".concat(propName, " passed to ").concat(componentName, " - do not set this, set it on the child."));
  }
}

/***/ }),

/***/ "../node_modules/react-draggable/node_modules/classnames/index.js":
/*!************************************************************************!*\
  !*** ../node_modules/react-draggable/node_modules/classnames/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "../node_modules/react-universal-interface/lib/addClassDecoratorSupport.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/react-universal-interface/lib/addClassDecoratorSupport.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var wrapInStatefulComponent_1 = tslib_1.__importDefault(__webpack_require__(/*! ./wrapInStatefulComponent */ "../node_modules/react-universal-interface/lib/wrapInStatefulComponent.js"));
var addClassDecoratorSupport = function (Comp) {
    var isSFC = !Comp.prototype;
    return !isSFC ? Comp : wrapInStatefulComponent_1.default(Comp);
};
exports.default = addClassDecoratorSupport;
//# sourceMappingURL=addClassDecoratorSupport.js.map

/***/ }),

/***/ "../node_modules/react-universal-interface/lib/createEnhancer.js":
/*!***********************************************************************!*\
  !*** ../node_modules/react-universal-interface/lib/createEnhancer.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.divWrapper = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var React = tslib_1.__importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
var addClassDecoratorSupport_1 = tslib_1.__importDefault(__webpack_require__(/*! ./addClassDecoratorSupport */ "../node_modules/react-universal-interface/lib/addClassDecoratorSupport.js"));
var h = React.createElement;
var noWrap = function (Comp, propName, props, state) {
    var _a;
    return h(Comp, propName ? tslib_1.__assign((_a = {}, _a[propName] = state, _a), props) : tslib_1.__assign(tslib_1.__assign({}, state), props));
};
exports.divWrapper = function (Comp, propName, props, state) {
    return h('div', null, noWrap(Comp, propName, props, state));
};
var createEnhancer = function (Facc, prop, wrapper) {
    if (wrapper === void 0) { wrapper = noWrap; }
    var enhancer = function (Comp, propName, faccProps) {
        if (propName === void 0) { propName = prop; }
        if (faccProps === void 0) { faccProps = null; }
        var isClassDecoratorMethodCall = typeof Comp === 'string';
        if (isClassDecoratorMethodCall) {
            return function (Klass) { return enhancer(Klass, Comp || prop, propName); };
        }
        var Enhanced = function (props) {
            return h(Facc, faccProps, function (state) { return wrapper(Comp, propName, props, state); });
        };
        if (true) {
            Enhanced.displayName = (Facc.displayName || Facc.name) + "(" + (Comp.displayName || Comp.name) + ")";
        }
        return isClassDecoratorMethodCall ? addClassDecoratorSupport_1.default(Enhanced) : Enhanced;
    };
    return enhancer;
};
exports.default = createEnhancer;
//# sourceMappingURL=createEnhancer.js.map

/***/ }),

/***/ "../node_modules/react-universal-interface/lib/hookToRenderProp.js":
/*!*************************************************************************!*\
  !*** ../node_modules/react-universal-interface/lib/hookToRenderProp.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var render_1 = tslib_1.__importDefault(__webpack_require__(/*! ./render */ "../node_modules/react-universal-interface/lib/render.js"));
var defaultMapPropsToArgs = function (props) { return [props]; };
var hookToRenderProp = function (hook, mapPropsToArgs) {
    if (mapPropsToArgs === void 0) { mapPropsToArgs = defaultMapPropsToArgs; }
    return function (props) { return render_1.default(props, hook.apply(void 0, mapPropsToArgs(props))); };
};
exports.default = hookToRenderProp;
//# sourceMappingURL=hookToRenderProp.js.map

/***/ }),

/***/ "../node_modules/react-universal-interface/lib/index.js":
/*!**************************************************************!*\
  !*** ../node_modules/react-universal-interface/lib/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.hookToRenderProp = exports.createEnhancer = exports.render = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var render_1 = tslib_1.__importDefault(__webpack_require__(/*! ./render */ "../node_modules/react-universal-interface/lib/render.js"));
exports.render = render_1.default;
var createEnhancer_1 = tslib_1.__importDefault(__webpack_require__(/*! ./createEnhancer */ "../node_modules/react-universal-interface/lib/createEnhancer.js"));
exports.createEnhancer = createEnhancer_1.default;
var hookToRenderProp_1 = tslib_1.__importDefault(__webpack_require__(/*! ./hookToRenderProp */ "../node_modules/react-universal-interface/lib/hookToRenderProp.js"));
exports.hookToRenderProp = hookToRenderProp_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/react-universal-interface/lib/render.js":
/*!***************************************************************!*\
  !*** ../node_modules/react-universal-interface/lib/render.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var isReact16Plus = parseInt(react_1.version.substr(0, react_1.version.indexOf('.'))) > 15;
var isFn = function (fn) { return typeof fn === 'function'; };
var render = function (props, data) {
    var more = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        more[_i - 2] = arguments[_i];
    }
    if (true) {
        if (typeof props !== 'object') {
            throw new TypeError('renderChildren(props, data) first argument must be a props object.');
        }
        var children_1 = props.children, render_1 = props.render;
        if (isFn(children_1) && isFn(render_1)) {
            console.warn('Both "render" and "children" are specified for in a universal interface component. ' +
                'Children will be used.');
            console.trace();
        }
        if (typeof data !== 'object') {
            console.warn('Universal component interface normally expects data to be an object, ' +
                ("\"" + typeof data + "\" received."));
            console.trace();
        }
    }
    var render = props.render, _a = props.children, children = _a === void 0 ? render : _a, component = props.component, _b = props.comp, comp = _b === void 0 ? component : _b;
    if (isFn(children))
        return children.apply(void 0, tslib_1.__spreadArrays([data], more));
    if (comp) {
        return react_1.createElement(comp, data);
    }
    if (children instanceof Array)
        return isReact16Plus ? children : react_1.createElement.apply(void 0, tslib_1.__spreadArrays(['div', null], children));
    if (children && (children instanceof Object)) {
        if (true) {
            if (!children.type || ((typeof children.type !== 'string') && (typeof children.type !== 'function') && (typeof children.type !== 'symbol'))) {
                console.warn('Universal component interface received object as children, ' +
                    'expected React element, but received unexpected React "type".');
                console.trace();
            }
            if (typeof children.type === 'string')
                return children;
            return react_1.cloneElement(children, Object.assign({}, children.props, data));
        }
        else {}
    }
    return children || null;
};
exports.default = render;
//# sourceMappingURL=render.js.map

/***/ }),

/***/ "../node_modules/react-universal-interface/lib/wrapInStatefulComponent.js":
/*!********************************************************************************!*\
  !*** ../node_modules/react-universal-interface/lib/wrapInStatefulComponent.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var React = tslib_1.__importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
var wrapInStatefulComponent = function (Comp) {
    var Decorated = (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.render = function () {
            return Comp(this.props, this.context);
        };
        return class_1;
    }(React.Component));
    if (true) {
        Decorated.displayName = "Decorated(" + (Comp.displayName || Comp.name) + ")";
    }
    return Decorated;
};
exports.default = wrapInStatefulComponent;
//# sourceMappingURL=wrapInStatefulComponent.js.map

/***/ }),

/***/ "../node_modules/react-use/esm/factory/createBreakpoint.js":
/*!*****************************************************************!*\
  !*** ../node_modules/react-use/esm/factory/createBreakpoint.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../misc/util */ "../node_modules/react-use/esm/misc/util.js");


var createBreakpoint = function (breakpoints) {
    if (breakpoints === void 0) { breakpoints = { laptopL: 1440, laptop: 1024, tablet: 768 }; }
    return function () {
        var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_misc_util__WEBPACK_IMPORTED_MODULE_1__["isBrowser"] ? window.innerWidth : 0), screen = _a[0], setScreen = _a[1];
        Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
            var setSideScreen = function () {
                setScreen(window.innerWidth);
            };
            setSideScreen();
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'resize', setSideScreen);
            return function () {
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'resize', setSideScreen);
            };
        });
        var sortedBreakpoints = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return Object.entries(breakpoints).sort(function (a, b) { return (a[1] >= b[1] ? 1 : -1); }); }, [breakpoints]);
        var result = sortedBreakpoints.reduce(function (acc, _a) {
            var name = _a[0], width = _a[1];
            if (screen >= width) {
                return name;
            }
            else {
                return acc;
            }
        }, sortedBreakpoints[0][0]);
        return result;
    };
};
/* harmony default export */ __webpack_exports__["default"] = (createBreakpoint);


/***/ }),

/***/ "../node_modules/react-use/esm/factory/createGlobalState.js":
/*!******************************************************************!*\
  !*** ../node_modules/react-use/esm/factory/createGlobalState.js ***!
  \******************************************************************/
/*! exports provided: createGlobalState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalState", function() { return createGlobalState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_hookState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../misc/hookState */ "../node_modules/react-use/esm/misc/hookState.js");
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useEffectOnce */ "../node_modules/react-use/esm/useEffectOnce.js");
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useIsomorphicLayoutEffect */ "../node_modules/react-use/esm/useIsomorphicLayoutEffect.js");




function createGlobalState(initialState) {
    var store = {
        state: initialState instanceof Function ? initialState() : initialState,
        setState: function (nextState) {
            store.state = Object(_misc_hookState__WEBPACK_IMPORTED_MODULE_1__["resolveHookState"])(nextState, store.state);
            store.setters.forEach(function (setter) { return setter(store.state); });
        },
        setters: [],
    };
    return function () {
        var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(store.state), globalState = _a[0], stateSetter = _a[1];
        Object(_useEffectOnce__WEBPACK_IMPORTED_MODULE_2__["default"])(function () { return function () {
            store.setters = store.setters.filter(function (setter) { return setter !== stateSetter; });
        }; });
        Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
            if (!store.setters.includes(stateSetter)) {
                store.setters.push(stateSetter);
            }
        });
        return [globalState, store.setState];
    };
}
/* harmony default export */ __webpack_exports__["default"] = (createGlobalState);


/***/ }),

/***/ "../node_modules/react-use/esm/factory/createHTMLMediaHook.js":
/*!********************************************************************!*\
  !*** ../node_modules/react-use/esm/factory/createHTMLMediaHook.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createHTMLMediaHook; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useSetState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useSetState */ "../node_modules/react-use/esm/useSetState.js");
/* harmony import */ var _misc_parseTimeRanges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../misc/parseTimeRanges */ "../node_modules/react-use/esm/misc/parseTimeRanges.js");





function createHTMLMediaHook(tag) {
    return function (elOrProps) {
        var element;
        var props;
        if (react__WEBPACK_IMPORTED_MODULE_1__["isValidElement"](elOrProps)) {
            element = elOrProps;
            props = element.props;
        }
        else {
            props = elOrProps;
        }
        var _a = Object(_useSetState__WEBPACK_IMPORTED_MODULE_2__["default"])({
            buffered: [],
            time: 0,
            duration: 0,
            paused: true,
            muted: false,
            volume: 1,
            playing: false,
        }), state = _a[0], setState = _a[1];
        var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
        var wrapEvent = function (userEvent, proxyEvent) {
            return function (event) {
                try {
                    proxyEvent && proxyEvent(event);
                }
                finally {
                    userEvent && userEvent(event);
                }
            };
        };
        var onPlay = function () { return setState({ paused: false }); };
        var onPlaying = function () { return setState({ playing: true }); };
        var onWaiting = function () { return setState({ playing: false }); };
        var onPause = function () { return setState({ paused: true, playing: false }); };
        var onVolumeChange = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            setState({
                muted: el.muted,
                volume: el.volume,
            });
        };
        var onDurationChange = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            var duration = el.duration, buffered = el.buffered;
            setState({
                duration: duration,
                buffered: Object(_misc_parseTimeRanges__WEBPACK_IMPORTED_MODULE_3__["default"])(buffered),
            });
        };
        var onTimeUpdate = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            setState({ time: el.currentTime });
        };
        var onProgress = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            setState({ buffered: Object(_misc_parseTimeRanges__WEBPACK_IMPORTED_MODULE_3__["default"])(el.buffered) });
        };
        if (element) {
            element = react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"](element, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ controls: false }, props), { ref: ref, onPlay: wrapEvent(props.onPlay, onPlay), onPlaying: wrapEvent(props.onPlaying, onPlaying), onWaiting: wrapEvent(props.onWaiting, onWaiting), onPause: wrapEvent(props.onPause, onPause), onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange), onDurationChange: wrapEvent(props.onDurationChange, onDurationChange), onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate), onProgress: wrapEvent(props.onProgress, onProgress) }));
        }
        else {
            element = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](tag, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ controls: false }, props), { ref: ref, onPlay: wrapEvent(props.onPlay, onPlay), onPlaying: wrapEvent(props.onPlaying, onPlaying), onWaiting: wrapEvent(props.onWaiting, onWaiting), onPause: wrapEvent(props.onPause, onPause), onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange), onDurationChange: wrapEvent(props.onDurationChange, onDurationChange), onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate), onProgress: wrapEvent(props.onProgress, onProgress) })); // TODO: fix this typing.
        }
        // Some browsers return `Promise` on `.play()` and may throw errors
        // if one tries to execute another `.play()` or `.pause()` while that
        // promise is resolving. So we prevent that with this lock.
        // See: https://bugs.chromium.org/p/chromium/issues/detail?id=593273
        var lockPlay = false;
        var controls = {
            play: function () {
                var el = ref.current;
                if (!el) {
                    return undefined;
                }
                if (!lockPlay) {
                    var promise = el.play();
                    var isPromise = typeof promise === 'object';
                    if (isPromise) {
                        lockPlay = true;
                        var resetLock = function () {
                            lockPlay = false;
                        };
                        promise.then(resetLock, resetLock);
                    }
                    return promise;
                }
                return undefined;
            },
            pause: function () {
                var el = ref.current;
                if (el && !lockPlay) {
                    return el.pause();
                }
            },
            seek: function (time) {
                var el = ref.current;
                if (!el || state.duration === undefined) {
                    return;
                }
                time = Math.min(state.duration, Math.max(0, time));
                el.currentTime = time;
            },
            volume: function (volume) {
                var el = ref.current;
                if (!el) {
                    return;
                }
                volume = Math.min(1, Math.max(0, volume));
                el.volume = volume;
                setState({ volume: volume });
            },
            mute: function () {
                var el = ref.current;
                if (!el) {
                    return;
                }
                el.muted = true;
            },
            unmute: function () {
                var el = ref.current;
                if (!el) {
                    return;
                }
                el.muted = false;
            },
        };
        Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
            var el = ref.current;
            if (!el) {
                if (true) {
                    if (tag === 'audio') {
                        console.error('useAudio() ref to <audio> element is empty at mount. ' +
                            'It seem you have not rendered the audio element, which it ' +
                            'returns as the first argument const [audio] = useAudio(...).');
                    }
                    else if (tag === 'video') {
                        console.error('useVideo() ref to <video> element is empty at mount. ' +
                            'It seem you have not rendered the video element, which it ' +
                            'returns as the first argument const [video] = useVideo(...).');
                    }
                }
                return;
            }
            setState({
                volume: el.volume,
                muted: el.muted,
                paused: el.paused,
            });
            // Start media, if autoPlay requested.
            if (props.autoPlay && el.paused) {
                controls.play();
            }
        }, [props.src]);
        return [element, state, controls, ref];
    };
}


/***/ }),

/***/ "../node_modules/react-use/esm/factory/createMemo.js":
/*!***********************************************************!*\
  !*** ../node_modules/react-use/esm/factory/createMemo.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var createMemo = function (fn) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return fn.apply(void 0, args); }, args);
    };
};
/* harmony default export */ __webpack_exports__["default"] = (createMemo);


/***/ }),

/***/ "../node_modules/react-use/esm/factory/createReducer.js":
/*!**************************************************************!*\
  !*** ../node_modules/react-use/esm/factory/createReducer.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useUpdateEffect */ "../node_modules/react-use/esm/useUpdateEffect.js");


function composeMiddleware(chain) {
    return function (context, dispatch) {
        return chain.reduceRight(function (res, middleware) {
            return middleware(context)(res);
        }, dispatch);
    };
}
var createReducer = function () {
    var middlewares = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        middlewares[_i] = arguments[_i];
    }
    var composedMiddleware = composeMiddleware(middlewares);
    return function (reducer, initialState, initializer) {
        if (initializer === void 0) { initializer = function (value) { return value; }; }
        var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(initializer(initialState));
        var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(ref.current), setState = _a[1];
        var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (action) {
            ref.current = reducer(ref.current, action);
            setState(ref.current);
            return action;
        }, [reducer]);
        var dispatchRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(composedMiddleware({
            getState: function () { return ref.current; },
            dispatch: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return dispatchRef.current.apply(dispatchRef, args);
            },
        }, dispatch));
        Object(_useUpdateEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
            dispatchRef.current = composedMiddleware({
                getState: function () { return ref.current; },
                dispatch: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return dispatchRef.current.apply(dispatchRef, args);
                },
            }, dispatch);
        }, [dispatch]);
        return [ref.current, dispatchRef.current];
    };
};
/* harmony default export */ __webpack_exports__["default"] = (createReducer);


/***/ }),

/***/ "../node_modules/react-use/esm/factory/createReducerContext.js":
/*!*********************************************************************!*\
  !*** ../node_modules/react-use/esm/factory/createReducerContext.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var createReducerContext = function (reducer, defaultInitialState) {
    var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(undefined);
    var providerFactory = function (props, children) { return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(context.Provider, props, children); };
    var ReducerProvider = function (_a) {
        var children = _a.children, initialState = _a.initialState;
        var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState !== undefined ? initialState : defaultInitialState);
        return providerFactory({ value: state }, children);
    };
    var useReducerContext = function () {
        var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context);
        if (state == null) {
            throw new Error("useReducerContext must be used inside a ReducerProvider.");
        }
        return state;
    };
    return [useReducerContext, ReducerProvider, context];
};
/* harmony default export */ __webpack_exports__["default"] = (createReducerContext);


/***/ }),

/***/ "../node_modules/react-use/esm/factory/createStateContext.js":
/*!*******************************************************************!*\
  !*** ../node_modules/react-use/esm/factory/createStateContext.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var createStateContext = function (defaultInitialValue) {
    var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(undefined);
    var providerFactory = function (props, children) { return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(context.Provider, props, children); };
    var StateProvider = function (_a) {
        var children = _a.children, initialValue = _a.initialValue;
        var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue !== undefined ? initialValue : defaultInitialValue);
        return providerFactory({ value: state }, children);
    };
    var useStateContext = function () {
        var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context);
        if (state == null) {
            throw new Error("useStateContext must be used inside a StateProvider.");
        }
        return state;
    };
    return [useStateContext, StateProvider, context];
};
/* harmony default export */ __webpack_exports__["default"] = (createStateContext);


/***/ }),

/***/ "../node_modules/react-use/esm/index.js":
/*!**********************************************!*\
  !*** ../node_modules/react-use/esm/index.js ***!
  \**********************************************/
/*! exports provided: createMemo, createReducerContext, createReducer, createStateContext, useAsync, useAsyncFn, useAsyncRetry, useAudio, useBattery, useBeforeUnload, useBoolean, useClickAway, useCookie, useCopyToClipboard, useCounter, useCss, useCustomCompareEffect, useDebounce, useDeepCompareEffect, useDefault, useDrop, useDropArea, useEffectOnce, useEnsuredForwardedRef, ensuredForwardRef, useEvent, useError, useFavicon, useFullscreen, useGeolocation, useGetSet, useGetSetState, useHarmonicIntervalFn, useHover, useHoverDirty, useIdle, useIntersection, useInterval, useIsomorphicLayoutEffect, useKey, createBreakpoint, useKeyPress, useKeyPressEvent, useLatest, useLifecycles, useList, useLocalStorage, useLocation, useLockBodyScroll, useLogger, useLongPress, useMap, useMedia, useMediaDevices, useMediatedState, useMethods, useMotion, useMount, useMountedState, useMouse, useMouseHovered, useMouseWheel, useNetworkState, useNumber, useObservable, useOrientation, usePageLeave, usePermission, usePrevious, usePreviousDistinct, usePromise, useQueue, useRaf, useRafLoop, useRafState, useSearchParam, useScratch, useScroll, useScrolling, useSessionStorage, useSetState, useShallowCompareEffect, useSize, useSlider, useSpeech, useStartTyping, useStateWithHistory, useStateList, useThrottle, useThrottleFn, useTimeout, useTimeoutFn, useTitle, useToggle, useTween, useUnmount, useUnmountPromise, useUpdate, useUpdateEffect, useUpsert, useVibrate, useVideo, useStateValidator, useScrollbarWidth, useMultiStateValidator, useWindowScroll, useWindowSize, useMeasure, useRendersCount, useFirstMountState, useSet, createGlobalState, useHash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _factory_createMemo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory/createMemo */ "../node_modules/react-use/esm/factory/createMemo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMemo", function() { return _factory_createMemo__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _factory_createReducerContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factory/createReducerContext */ "../node_modules/react-use/esm/factory/createReducerContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReducerContext", function() { return _factory_createReducerContext__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _factory_createReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factory/createReducer */ "../node_modules/react-use/esm/factory/createReducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReducer", function() { return _factory_createReducer__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _factory_createStateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factory/createStateContext */ "../node_modules/react-use/esm/factory/createStateContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStateContext", function() { return _factory_createStateContext__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _useAsync__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useAsync */ "../node_modules/react-use/esm/useAsync.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAsync", function() { return _useAsync__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _useAsyncFn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useAsyncFn */ "../node_modules/react-use/esm/useAsyncFn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAsyncFn", function() { return _useAsyncFn__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _useAsyncRetry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useAsyncRetry */ "../node_modules/react-use/esm/useAsyncRetry.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAsyncRetry", function() { return _useAsyncRetry__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _useAudio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useAudio */ "../node_modules/react-use/esm/useAudio.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAudio", function() { return _useAudio__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _useBattery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useBattery */ "../node_modules/react-use/esm/useBattery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useBattery", function() { return _useBattery__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _useBeforeUnload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useBeforeUnload */ "../node_modules/react-use/esm/useBeforeUnload.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useBeforeUnload", function() { return _useBeforeUnload__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _useBoolean__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useBoolean */ "../node_modules/react-use/esm/useBoolean.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useBoolean", function() { return _useBoolean__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _useClickAway__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useClickAway */ "../node_modules/react-use/esm/useClickAway.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useClickAway", function() { return _useClickAway__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _useCookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./useCookie */ "../node_modules/react-use/esm/useCookie.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCookie", function() { return _useCookie__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _useCopyToClipboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./useCopyToClipboard */ "../node_modules/react-use/esm/useCopyToClipboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCopyToClipboard", function() { return _useCopyToClipboard__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _useCounter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./useCounter */ "../node_modules/react-use/esm/useCounter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCounter", function() { return _useCounter__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _useCss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./useCss */ "../node_modules/react-use/esm/useCss.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCss", function() { return _useCss__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _useCustomCompareEffect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./useCustomCompareEffect */ "../node_modules/react-use/esm/useCustomCompareEffect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCustomCompareEffect", function() { return _useCustomCompareEffect__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _useDebounce__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./useDebounce */ "../node_modules/react-use/esm/useDebounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebounce", function() { return _useDebounce__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _useDeepCompareEffect__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./useDeepCompareEffect */ "../node_modules/react-use/esm/useDeepCompareEffect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDeepCompareEffect", function() { return _useDeepCompareEffect__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _useDefault__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./useDefault */ "../node_modules/react-use/esm/useDefault.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDefault", function() { return _useDefault__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _useDrop__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./useDrop */ "../node_modules/react-use/esm/useDrop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDrop", function() { return _useDrop__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _useDropArea__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./useDropArea */ "../node_modules/react-use/esm/useDropArea.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDropArea", function() { return _useDropArea__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./useEffectOnce */ "../node_modules/react-use/esm/useEffectOnce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEffectOnce", function() { return _useEffectOnce__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _useEnsuredForwardedRef__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./useEnsuredForwardedRef */ "../node_modules/react-use/esm/useEnsuredForwardedRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEnsuredForwardedRef", function() { return _useEnsuredForwardedRef__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ensuredForwardRef", function() { return _useEnsuredForwardedRef__WEBPACK_IMPORTED_MODULE_23__["ensuredForwardRef"]; });

/* harmony import */ var _useEvent__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./useEvent */ "../node_modules/react-use/esm/useEvent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEvent", function() { return _useEvent__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _useError__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./useError */ "../node_modules/react-use/esm/useError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useError", function() { return _useError__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _useFavicon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./useFavicon */ "../node_modules/react-use/esm/useFavicon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFavicon", function() { return _useFavicon__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _useFullscreen__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./useFullscreen */ "../node_modules/react-use/esm/useFullscreen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFullscreen", function() { return _useFullscreen__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _useGeolocation__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./useGeolocation */ "../node_modules/react-use/esm/useGeolocation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useGeolocation", function() { return _useGeolocation__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _useGetSet__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./useGetSet */ "../node_modules/react-use/esm/useGetSet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useGetSet", function() { return _useGetSet__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _useGetSetState__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./useGetSetState */ "../node_modules/react-use/esm/useGetSetState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useGetSetState", function() { return _useGetSetState__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _useHarmonicIntervalFn__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./useHarmonicIntervalFn */ "../node_modules/react-use/esm/useHarmonicIntervalFn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHarmonicIntervalFn", function() { return _useHarmonicIntervalFn__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _useHover__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./useHover */ "../node_modules/react-use/esm/useHover.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHover", function() { return _useHover__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _useHoverDirty__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./useHoverDirty */ "../node_modules/react-use/esm/useHoverDirty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHoverDirty", function() { return _useHoverDirty__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _useIdle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./useIdle */ "../node_modules/react-use/esm/useIdle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIdle", function() { return _useIdle__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _useIntersection__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./useIntersection */ "../node_modules/react-use/esm/useIntersection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIntersection", function() { return _useIntersection__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _useInterval__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./useInterval */ "../node_modules/react-use/esm/useInterval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useInterval", function() { return _useInterval__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "../node_modules/react-use/esm/useIsomorphicLayoutEffect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIsomorphicLayoutEffect", function() { return _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _useKey__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./useKey */ "../node_modules/react-use/esm/useKey.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useKey", function() { return _useKey__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _factory_createBreakpoint__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./factory/createBreakpoint */ "../node_modules/react-use/esm/factory/createBreakpoint.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBreakpoint", function() { return _factory_createBreakpoint__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _useKeyPress__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./useKeyPress */ "../node_modules/react-use/esm/useKeyPress.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useKeyPress", function() { return _useKeyPress__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _useKeyPressEvent__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./useKeyPressEvent */ "../node_modules/react-use/esm/useKeyPressEvent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useKeyPressEvent", function() { return _useKeyPressEvent__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _useLatest__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./useLatest */ "../node_modules/react-use/esm/useLatest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLatest", function() { return _useLatest__WEBPACK_IMPORTED_MODULE_42__["default"]; });

/* harmony import */ var _useLifecycles__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./useLifecycles */ "../node_modules/react-use/esm/useLifecycles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLifecycles", function() { return _useLifecycles__WEBPACK_IMPORTED_MODULE_43__["default"]; });

/* harmony import */ var _useList__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./useList */ "../node_modules/react-use/esm/useList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useList", function() { return _useList__WEBPACK_IMPORTED_MODULE_44__["default"]; });

/* harmony import */ var _useLocalStorage__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./useLocalStorage */ "../node_modules/react-use/esm/useLocalStorage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocalStorage", function() { return _useLocalStorage__WEBPACK_IMPORTED_MODULE_45__["default"]; });

/* harmony import */ var _useLocation__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./useLocation */ "../node_modules/react-use/esm/useLocation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocation", function() { return _useLocation__WEBPACK_IMPORTED_MODULE_46__["default"]; });

/* harmony import */ var _useLockBodyScroll__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./useLockBodyScroll */ "../node_modules/react-use/esm/useLockBodyScroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLockBodyScroll", function() { return _useLockBodyScroll__WEBPACK_IMPORTED_MODULE_47__["default"]; });

/* harmony import */ var _useLogger__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./useLogger */ "../node_modules/react-use/esm/useLogger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLogger", function() { return _useLogger__WEBPACK_IMPORTED_MODULE_48__["default"]; });

/* harmony import */ var _useLongPress__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./useLongPress */ "../node_modules/react-use/esm/useLongPress.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLongPress", function() { return _useLongPress__WEBPACK_IMPORTED_MODULE_49__["default"]; });

/* harmony import */ var _useMap__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./useMap */ "../node_modules/react-use/esm/useMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMap", function() { return _useMap__WEBPACK_IMPORTED_MODULE_50__["default"]; });

/* harmony import */ var _useMedia__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./useMedia */ "../node_modules/react-use/esm/useMedia.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMedia", function() { return _useMedia__WEBPACK_IMPORTED_MODULE_51__["default"]; });

/* harmony import */ var _useMediaDevices__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./useMediaDevices */ "../node_modules/react-use/esm/useMediaDevices.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMediaDevices", function() { return _useMediaDevices__WEBPACK_IMPORTED_MODULE_52__["default"]; });

/* harmony import */ var _useMediatedState__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./useMediatedState */ "../node_modules/react-use/esm/useMediatedState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMediatedState", function() { return _useMediatedState__WEBPACK_IMPORTED_MODULE_53__["useMediatedState"]; });

/* harmony import */ var _useMethods__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./useMethods */ "../node_modules/react-use/esm/useMethods.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMethods", function() { return _useMethods__WEBPACK_IMPORTED_MODULE_54__["default"]; });

/* harmony import */ var _useMotion__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./useMotion */ "../node_modules/react-use/esm/useMotion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMotion", function() { return _useMotion__WEBPACK_IMPORTED_MODULE_55__["default"]; });

/* harmony import */ var _useMount__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./useMount */ "../node_modules/react-use/esm/useMount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMount", function() { return _useMount__WEBPACK_IMPORTED_MODULE_56__["default"]; });

/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./useMountedState */ "../node_modules/react-use/esm/useMountedState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMountedState", function() { return _useMountedState__WEBPACK_IMPORTED_MODULE_57__["default"]; });

/* harmony import */ var _useMouse__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./useMouse */ "../node_modules/react-use/esm/useMouse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMouse", function() { return _useMouse__WEBPACK_IMPORTED_MODULE_58__["default"]; });

/* harmony import */ var _useMouseHovered__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./useMouseHovered */ "../node_modules/react-use/esm/useMouseHovered.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMouseHovered", function() { return _useMouseHovered__WEBPACK_IMPORTED_MODULE_59__["default"]; });

/* harmony import */ var _useMouseWheel__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./useMouseWheel */ "../node_modules/react-use/esm/useMouseWheel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMouseWheel", function() { return _useMouseWheel__WEBPACK_IMPORTED_MODULE_60__["default"]; });

/* harmony import */ var _useNetworkState__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./useNetworkState */ "../node_modules/react-use/esm/useNetworkState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNetworkState", function() { return _useNetworkState__WEBPACK_IMPORTED_MODULE_61__["default"]; });

/* harmony import */ var _useNumber__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./useNumber */ "../node_modules/react-use/esm/useNumber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNumber", function() { return _useNumber__WEBPACK_IMPORTED_MODULE_62__["default"]; });

/* harmony import */ var _useObservable__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./useObservable */ "../node_modules/react-use/esm/useObservable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useObservable", function() { return _useObservable__WEBPACK_IMPORTED_MODULE_63__["default"]; });

/* harmony import */ var _useOrientation__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./useOrientation */ "../node_modules/react-use/esm/useOrientation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOrientation", function() { return _useOrientation__WEBPACK_IMPORTED_MODULE_64__["default"]; });

/* harmony import */ var _usePageLeave__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./usePageLeave */ "../node_modules/react-use/esm/usePageLeave.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageLeave", function() { return _usePageLeave__WEBPACK_IMPORTED_MODULE_65__["default"]; });

/* harmony import */ var _usePermission__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./usePermission */ "../node_modules/react-use/esm/usePermission.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePermission", function() { return _usePermission__WEBPACK_IMPORTED_MODULE_66__["default"]; });

/* harmony import */ var _usePrevious__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./usePrevious */ "../node_modules/react-use/esm/usePrevious.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePrevious", function() { return _usePrevious__WEBPACK_IMPORTED_MODULE_67__["default"]; });

/* harmony import */ var _usePreviousDistinct__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./usePreviousDistinct */ "../node_modules/react-use/esm/usePreviousDistinct.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePreviousDistinct", function() { return _usePreviousDistinct__WEBPACK_IMPORTED_MODULE_68__["default"]; });

/* harmony import */ var _usePromise__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./usePromise */ "../node_modules/react-use/esm/usePromise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePromise", function() { return _usePromise__WEBPACK_IMPORTED_MODULE_69__["default"]; });

/* harmony import */ var _useQueue__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./useQueue */ "../node_modules/react-use/esm/useQueue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQueue", function() { return _useQueue__WEBPACK_IMPORTED_MODULE_70__["default"]; });

/* harmony import */ var _useRaf__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./useRaf */ "../node_modules/react-use/esm/useRaf.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRaf", function() { return _useRaf__WEBPACK_IMPORTED_MODULE_71__["default"]; });

/* harmony import */ var _useRafLoop__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./useRafLoop */ "../node_modules/react-use/esm/useRafLoop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRafLoop", function() { return _useRafLoop__WEBPACK_IMPORTED_MODULE_72__["default"]; });

/* harmony import */ var _useRafState__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./useRafState */ "../node_modules/react-use/esm/useRafState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRafState", function() { return _useRafState__WEBPACK_IMPORTED_MODULE_73__["default"]; });

/* harmony import */ var _useSearchParam__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./useSearchParam */ "../node_modules/react-use/esm/useSearchParam.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSearchParam", function() { return _useSearchParam__WEBPACK_IMPORTED_MODULE_74__["default"]; });

/* harmony import */ var _useScratch__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./useScratch */ "../node_modules/react-use/esm/useScratch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScratch", function() { return _useScratch__WEBPACK_IMPORTED_MODULE_75__["default"]; });

/* harmony import */ var _useScroll__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./useScroll */ "../node_modules/react-use/esm/useScroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScroll", function() { return _useScroll__WEBPACK_IMPORTED_MODULE_76__["default"]; });

/* harmony import */ var _useScrolling__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./useScrolling */ "../node_modules/react-use/esm/useScrolling.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScrolling", function() { return _useScrolling__WEBPACK_IMPORTED_MODULE_77__["default"]; });

/* harmony import */ var _useSessionStorage__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./useSessionStorage */ "../node_modules/react-use/esm/useSessionStorage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSessionStorage", function() { return _useSessionStorage__WEBPACK_IMPORTED_MODULE_78__["default"]; });

/* harmony import */ var _useSetState__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./useSetState */ "../node_modules/react-use/esm/useSetState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSetState", function() { return _useSetState__WEBPACK_IMPORTED_MODULE_79__["default"]; });

/* harmony import */ var _useShallowCompareEffect__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./useShallowCompareEffect */ "../node_modules/react-use/esm/useShallowCompareEffect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useShallowCompareEffect", function() { return _useShallowCompareEffect__WEBPACK_IMPORTED_MODULE_80__["default"]; });

/* harmony import */ var _useSize__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./useSize */ "../node_modules/react-use/esm/useSize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSize", function() { return _useSize__WEBPACK_IMPORTED_MODULE_81__["default"]; });

/* harmony import */ var _useSlider__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./useSlider */ "../node_modules/react-use/esm/useSlider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSlider", function() { return _useSlider__WEBPACK_IMPORTED_MODULE_82__["default"]; });

/* harmony import */ var _useSpeech__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./useSpeech */ "../node_modules/react-use/esm/useSpeech.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSpeech", function() { return _useSpeech__WEBPACK_IMPORTED_MODULE_83__["default"]; });

/* harmony import */ var _useStartTyping__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./useStartTyping */ "../node_modules/react-use/esm/useStartTyping.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStartTyping", function() { return _useStartTyping__WEBPACK_IMPORTED_MODULE_84__["default"]; });

/* harmony import */ var _useStateWithHistory__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./useStateWithHistory */ "../node_modules/react-use/esm/useStateWithHistory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStateWithHistory", function() { return _useStateWithHistory__WEBPACK_IMPORTED_MODULE_85__["useStateWithHistory"]; });

/* harmony import */ var _useStateList__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./useStateList */ "../node_modules/react-use/esm/useStateList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStateList", function() { return _useStateList__WEBPACK_IMPORTED_MODULE_86__["default"]; });

/* harmony import */ var _useThrottle__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./useThrottle */ "../node_modules/react-use/esm/useThrottle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useThrottle", function() { return _useThrottle__WEBPACK_IMPORTED_MODULE_87__["default"]; });

/* harmony import */ var _useThrottleFn__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./useThrottleFn */ "../node_modules/react-use/esm/useThrottleFn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useThrottleFn", function() { return _useThrottleFn__WEBPACK_IMPORTED_MODULE_88__["default"]; });

/* harmony import */ var _useTimeout__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./useTimeout */ "../node_modules/react-use/esm/useTimeout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTimeout", function() { return _useTimeout__WEBPACK_IMPORTED_MODULE_89__["default"]; });

/* harmony import */ var _useTimeoutFn__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./useTimeoutFn */ "../node_modules/react-use/esm/useTimeoutFn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTimeoutFn", function() { return _useTimeoutFn__WEBPACK_IMPORTED_MODULE_90__["default"]; });

/* harmony import */ var _useTitle__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./useTitle */ "../node_modules/react-use/esm/useTitle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTitle", function() { return _useTitle__WEBPACK_IMPORTED_MODULE_91__["default"]; });

/* harmony import */ var _useToggle__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./useToggle */ "../node_modules/react-use/esm/useToggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useToggle", function() { return _useToggle__WEBPACK_IMPORTED_MODULE_92__["default"]; });

/* harmony import */ var _useTween__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./useTween */ "../node_modules/react-use/esm/useTween.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTween", function() { return _useTween__WEBPACK_IMPORTED_MODULE_93__["default"]; });

/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./useUnmount */ "../node_modules/react-use/esm/useUnmount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUnmount", function() { return _useUnmount__WEBPACK_IMPORTED_MODULE_94__["default"]; });

/* harmony import */ var _useUnmountPromise__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./useUnmountPromise */ "../node_modules/react-use/esm/useUnmountPromise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUnmountPromise", function() { return _useUnmountPromise__WEBPACK_IMPORTED_MODULE_95__["default"]; });

/* harmony import */ var _useUpdate__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./useUpdate */ "../node_modules/react-use/esm/useUpdate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdate", function() { return _useUpdate__WEBPACK_IMPORTED_MODULE_96__["default"]; });

/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./useUpdateEffect */ "../node_modules/react-use/esm/useUpdateEffect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdateEffect", function() { return _useUpdateEffect__WEBPACK_IMPORTED_MODULE_97__["default"]; });

/* harmony import */ var _useUpsert__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./useUpsert */ "../node_modules/react-use/esm/useUpsert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpsert", function() { return _useUpsert__WEBPACK_IMPORTED_MODULE_98__["default"]; });

/* harmony import */ var _useVibrate__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./useVibrate */ "../node_modules/react-use/esm/useVibrate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useVibrate", function() { return _useVibrate__WEBPACK_IMPORTED_MODULE_99__["default"]; });

/* harmony import */ var _useVideo__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./useVideo */ "../node_modules/react-use/esm/useVideo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useVideo", function() { return _useVideo__WEBPACK_IMPORTED_MODULE_100__["default"]; });

/* harmony import */ var _useStateValidator__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./useStateValidator */ "../node_modules/react-use/esm/useStateValidator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStateValidator", function() { return _useStateValidator__WEBPACK_IMPORTED_MODULE_101__["default"]; });

/* harmony import */ var _useScrollbarWidth__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./useScrollbarWidth */ "../node_modules/react-use/esm/useScrollbarWidth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScrollbarWidth", function() { return _useScrollbarWidth__WEBPACK_IMPORTED_MODULE_102__["useScrollbarWidth"]; });

/* harmony import */ var _useMultiStateValidator__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./useMultiStateValidator */ "../node_modules/react-use/esm/useMultiStateValidator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMultiStateValidator", function() { return _useMultiStateValidator__WEBPACK_IMPORTED_MODULE_103__["useMultiStateValidator"]; });

/* harmony import */ var _useWindowScroll__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./useWindowScroll */ "../node_modules/react-use/esm/useWindowScroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWindowScroll", function() { return _useWindowScroll__WEBPACK_IMPORTED_MODULE_104__["default"]; });

/* harmony import */ var _useWindowSize__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./useWindowSize */ "../node_modules/react-use/esm/useWindowSize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWindowSize", function() { return _useWindowSize__WEBPACK_IMPORTED_MODULE_105__["default"]; });

/* harmony import */ var _useMeasure__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./useMeasure */ "../node_modules/react-use/esm/useMeasure.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMeasure", function() { return _useMeasure__WEBPACK_IMPORTED_MODULE_106__["default"]; });

/* harmony import */ var _useRendersCount__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./useRendersCount */ "../node_modules/react-use/esm/useRendersCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRendersCount", function() { return _useRendersCount__WEBPACK_IMPORTED_MODULE_107__["useRendersCount"]; });

/* harmony import */ var _useFirstMountState__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./useFirstMountState */ "../node_modules/react-use/esm/useFirstMountState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFirstMountState", function() { return _useFirstMountState__WEBPACK_IMPORTED_MODULE_108__["useFirstMountState"]; });

/* harmony import */ var _useSet__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./useSet */ "../node_modules/react-use/esm/useSet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSet", function() { return _useSet__WEBPACK_IMPORTED_MODULE_109__["default"]; });

/* harmony import */ var _factory_createGlobalState__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./factory/createGlobalState */ "../node_modules/react-use/esm/factory/createGlobalState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createGlobalState", function() { return _factory_createGlobalState__WEBPACK_IMPORTED_MODULE_110__["createGlobalState"]; });

/* harmony import */ var _useHash__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./useHash */ "../node_modules/react-use/esm/useHash.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHash", function() { return _useHash__WEBPACK_IMPORTED_MODULE_111__["useHash"]; });









































// not exported because of peer dependency
// export { default as useKeyboardJs } from './useKeyboardJs';












































// not exported because of peer dependency
// export { default as useSpring } from './useSpring';






























/***/ }),

/***/ "../node_modules/react-use/esm/misc/hookState.js":
/*!*******************************************************!*\
  !*** ../node_modules/react-use/esm/misc/hookState.js ***!
  \*******************************************************/
/*! exports provided: resolveHookState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveHookState", function() { return resolveHookState; });
function resolveHookState(nextState, currentState) {
    if (typeof nextState === 'function') {
        return nextState.length ? nextState(currentState) : nextState();
    }
    return nextState;
}


/***/ }),

/***/ "../node_modules/react-use/esm/misc/isDeepEqual.js":
/*!*********************************************************!*\
  !*** ../node_modules/react-use/esm/misc/isDeepEqual.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fast_deep_equal_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-deep-equal/react */ "../node_modules/fast-deep-equal/react.js");
/* harmony import */ var fast_deep_equal_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal_react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (fast_deep_equal_react__WEBPACK_IMPORTED_MODULE_0___default.a);


/***/ }),

/***/ "../node_modules/react-use/esm/misc/parseTimeRanges.js":
/*!*************************************************************!*\
  !*** ../node_modules/react-use/esm/misc/parseTimeRanges.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseTimeRanges; });
function parseTimeRanges(ranges) {
    var result = [];
    for (var i = 0; i < ranges.length; i++) {
        result.push({
            start: ranges.start(i),
            end: ranges.end(i),
        });
    }
    return result;
}


/***/ }),

/***/ "../node_modules/react-use/esm/misc/util.js":
/*!**************************************************!*\
  !*** ../node_modules/react-use/esm/misc/util.js ***!
  \**************************************************/
/*! exports provided: noop, on, off, isBrowser, isNavigator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNavigator", function() { return isNavigator; });
var noop = function () { };
function on(obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (obj && obj.addEventListener) {
        obj.addEventListener.apply(obj, args);
    }
}
function off(obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (obj && obj.removeEventListener) {
        obj.removeEventListener.apply(obj, args);
    }
}
var isBrowser = typeof window !== 'undefined';
var isNavigator = typeof navigator !== 'undefined';


/***/ }),

/***/ "../node_modules/react-use/esm/useAsync.js":
/*!*************************************************!*\
  !*** ../node_modules/react-use/esm/useAsync.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useAsync; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useAsyncFn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useAsyncFn */ "../node_modules/react-use/esm/useAsyncFn.js");


function useAsync(fn, deps) {
    if (deps === void 0) { deps = []; }
    var _a = Object(_useAsyncFn__WEBPACK_IMPORTED_MODULE_1__["default"])(fn, deps, {
        loading: true,
    }), state = _a[0], callback = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        callback();
    }, [callback]);
    return state;
}


/***/ }),

/***/ "../node_modules/react-use/esm/useAsyncFn.js":
/*!***************************************************!*\
  !*** ../node_modules/react-use/esm/useAsyncFn.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useAsyncFn; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useMountedState */ "../node_modules/react-use/esm/useMountedState.js");



function useAsyncFn(fn, deps, initialState) {
    if (deps === void 0) { deps = []; }
    if (initialState === void 0) { initialState = { loading: false }; }
    var lastCallId = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(0);
    var isMounted = Object(_useMountedState__WEBPACK_IMPORTED_MODULE_2__["default"])();
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialState), state = _a[0], set = _a[1];
    var callback = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var callId = ++lastCallId.current;
        if (!state.loading) {
            set(function (prevState) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prevState), { loading: true })); });
        }
        return fn.apply(void 0, args).then(function (value) {
            isMounted() && callId === lastCallId.current && set({ value: value, loading: false });
            return value;
        }, function (error) {
            isMounted() && callId === lastCallId.current && set({ error: error, loading: false });
            return error;
        });
    }, deps);
    return [state, callback];
}


/***/ }),

/***/ "../node_modules/react-use/esm/useAsyncRetry.js":
/*!******************************************************!*\
  !*** ../node_modules/react-use/esm/useAsyncRetry.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useAsync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useAsync */ "../node_modules/react-use/esm/useAsync.js");



var useAsyncRetry = function (fn, deps) {
    if (deps === void 0) { deps = []; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0), attempt = _a[0], setAttempt = _a[1];
    var state = Object(_useAsync__WEBPACK_IMPORTED_MODULE_2__["default"])(fn, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(deps, [attempt]));
    var stateLoading = state.loading;
    var retry = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
        if (stateLoading) {
            if (true) {
                console.log('You are calling useAsyncRetry hook retry() method while loading in progress, this is a no-op.');
            }
            return;
        }
        setAttempt(function (currentAttempt) { return currentAttempt + 1; });
    }, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(deps, [stateLoading]));
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { retry: retry });
};
/* harmony default export */ __webpack_exports__["default"] = (useAsyncRetry);


/***/ }),

/***/ "../node_modules/react-use/esm/useAudio.js":
/*!*************************************************!*\
  !*** ../node_modules/react-use/esm/useAudio.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _factory_createHTMLMediaHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory/createHTMLMediaHook */ "../node_modules/react-use/esm/factory/createHTMLMediaHook.js");

var useAudio = Object(_factory_createHTMLMediaHook__WEBPACK_IMPORTED_MODULE_0__["default"])('audio');
/* harmony default export */ __webpack_exports__["default"] = (useAudio);


/***/ }),

/***/ "../node_modules/react-use/esm/useBattery.js":
/*!***************************************************!*\
  !*** ../node_modules/react-use/esm/useBattery.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");
/* harmony import */ var _misc_isDeepEqual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/isDeepEqual */ "../node_modules/react-use/esm/misc/isDeepEqual.js");



var nav = _misc_util__WEBPACK_IMPORTED_MODULE_1__["isNavigator"] ? navigator : undefined;
var isBatteryApiSupported = nav && typeof nav.getBattery === 'function';
function useBatteryMock() {
    return { isSupported: false };
}
function useBattery() {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({ isSupported: true, fetched: false }), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var isMounted = true;
        var battery = null;
        var handleChange = function () {
            if (!isMounted || !battery) {
                return;
            }
            var newState = {
                isSupported: true,
                fetched: true,
                level: battery.level,
                charging: battery.charging,
                dischargingTime: battery.dischargingTime,
                chargingTime: battery.chargingTime,
            };
            !Object(_misc_isDeepEqual__WEBPACK_IMPORTED_MODULE_2__["default"])(state, newState) && setState(newState);
        };
        nav.getBattery().then(function (bat) {
            if (!isMounted) {
                return;
            }
            battery = bat;
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(battery, 'chargingchange', handleChange);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(battery, 'chargingtimechange', handleChange);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(battery, 'dischargingtimechange', handleChange);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(battery, 'levelchange', handleChange);
            handleChange();
        });
        return function () {
            isMounted = false;
            if (battery) {
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(battery, 'chargingchange', handleChange);
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(battery, 'chargingtimechange', handleChange);
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(battery, 'dischargingtimechange', handleChange);
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(battery, 'levelchange', handleChange);
            }
        };
    }, []);
    return state;
}
/* harmony default export */ __webpack_exports__["default"] = (isBatteryApiSupported ? useBattery : useBatteryMock);


/***/ }),

/***/ "../node_modules/react-use/esm/useBeforeUnload.js":
/*!********************************************************!*\
  !*** ../node_modules/react-use/esm/useBeforeUnload.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var useBeforeUnload = function (enabled, message) {
    if (enabled === void 0) { enabled = true; }
    var handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
        var finalEnabled = typeof enabled === 'function' ? enabled() : true;
        if (!finalEnabled) {
            return;
        }
        event.preventDefault();
        if (message) {
            event.returnValue = message;
        }
        return message;
    }, [enabled, message]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!enabled) {
            return;
        }
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'beforeunload', handler);
        return function () { return Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'beforeunload', handler); };
    }, [enabled, handler]);
};
/* harmony default export */ __webpack_exports__["default"] = (useBeforeUnload);


/***/ }),

/***/ "../node_modules/react-use/esm/useBoolean.js":
/*!***************************************************!*\
  !*** ../node_modules/react-use/esm/useBoolean.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useToggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useToggle */ "../node_modules/react-use/esm/useToggle.js");

/* harmony default export */ __webpack_exports__["default"] = (_useToggle__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../node_modules/react-use/esm/useClickAway.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-use/esm/useClickAway.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var defaultEvents = ['mousedown', 'touchstart'];
var useClickAway = function (ref, onClickAway, events) {
    if (events === void 0) { events = defaultEvents; }
    var savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(onClickAway);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        savedCallback.current = onClickAway;
    }, [onClickAway]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var handler = function (event) {
            var el = ref.current;
            el && !el.contains(event.target) && savedCallback.current(event);
        };
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var eventName = events_1[_i];
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(document, eventName, handler);
        }
        return function () {
            for (var _i = 0, events_2 = events; _i < events_2.length; _i++) {
                var eventName = events_2[_i];
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(document, eventName, handler);
            }
        };
    }, [events, ref]);
};
/* harmony default export */ __webpack_exports__["default"] = (useClickAway);


/***/ }),

/***/ "../node_modules/react-use/esm/useCookie.js":
/*!**************************************************!*\
  !*** ../node_modules/react-use/esm/useCookie.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "../node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);


var useCookie = function (cookieName) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () { return js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get(cookieName) || null; }), value = _a[0], setValue = _a[1];
    var updateCookie = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (newValue, options) {
        js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set(cookieName, newValue, options);
        setValue(newValue);
    }, [cookieName]);
    var deleteCookie = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove(cookieName);
        setValue(null);
    }, [cookieName]);
    return [value, updateCookie, deleteCookie];
};
/* harmony default export */ __webpack_exports__["default"] = (useCookie);


/***/ }),

/***/ "../node_modules/react-use/esm/useCopyToClipboard.js":
/*!***********************************************************!*\
  !*** ../node_modules/react-use/esm/useCopyToClipboard.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! copy-to-clipboard */ "../node_modules/copy-to-clipboard/index.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useMountedState */ "../node_modules/react-use/esm/useMountedState.js");
/* harmony import */ var _useSetState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useSetState */ "../node_modules/react-use/esm/useSetState.js");




var useCopyToClipboard = function () {
    var isMounted = Object(_useMountedState__WEBPACK_IMPORTED_MODULE_2__["default"])();
    var _a = Object(_useSetState__WEBPACK_IMPORTED_MODULE_3__["default"])({
        value: undefined,
        error: undefined,
        noUserInteraction: true,
    }), state = _a[0], setState = _a[1];
    var copyToClipboard = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (value) {
        if (!isMounted()) {
            return;
        }
        var noUserInteraction;
        var normalizedValue;
        try {
            // only strings and numbers casted to strings can be copied to clipboard
            if (typeof value !== 'string' && typeof value !== 'number') {
                var error = new Error("Cannot copy typeof " + typeof value + " to clipboard, must be a string");
                if (true)
                    console.error(error);
                setState({
                    value: value,
                    error: error,
                    noUserInteraction: true,
                });
                return;
            }
            // empty strings are also considered invalid
            else if (value === '') {
                var error = new Error("Cannot copy empty string to clipboard.");
                if (true)
                    console.error(error);
                setState({
                    value: value,
                    error: error,
                    noUserInteraction: true,
                });
                return;
            }
            normalizedValue = value.toString();
            noUserInteraction = copy_to_clipboard__WEBPACK_IMPORTED_MODULE_0___default()(normalizedValue);
            setState({
                value: normalizedValue,
                error: undefined,
                noUserInteraction: noUserInteraction,
            });
        }
        catch (error) {
            setState({
                value: normalizedValue,
                error: error,
                noUserInteraction: noUserInteraction,
            });
        }
    }, []);
    return [state, copyToClipboard];
};
/* harmony default export */ __webpack_exports__["default"] = (useCopyToClipboard);


/***/ }),

/***/ "../node_modules/react-use/esm/useCounter.js":
/*!***************************************************!*\
  !*** ../node_modules/react-use/esm/useCounter.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCounter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useGetSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useGetSet */ "../node_modules/react-use/esm/useGetSet.js");
/* harmony import */ var _misc_hookState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/hookState */ "../node_modules/react-use/esm/misc/hookState.js");



function useCounter(initialValue, max, min) {
    if (initialValue === void 0) { initialValue = 0; }
    if (max === void 0) { max = null; }
    if (min === void 0) { min = null; }
    var init = Object(_misc_hookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(initialValue);
    typeof init !== 'number' &&
        console.error('initialValue has to be a number, got ' + typeof initialValue);
    if (typeof min === 'number') {
        init = Math.max(init, min);
    }
    else if (min !== null) {
        console.error('min has to be a number, got ' + typeof min);
    }
    if (typeof max === 'number') {
        init = Math.min(init, max);
    }
    else if (max !== null) {
        console.error('max has to be a number, got ' + typeof max);
    }
    var _a = Object(_useGetSet__WEBPACK_IMPORTED_MODULE_1__["default"])(init), get = _a[0], setInternal = _a[1];
    return [
        get(),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
            var set = function (newState) {
                var prevState = get();
                var rState = Object(_misc_hookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(newState, prevState);
                if (prevState !== rState) {
                    if (typeof min === 'number') {
                        rState = Math.max(rState, min);
                    }
                    if (typeof max === 'number') {
                        rState = Math.min(rState, max);
                    }
                    prevState !== rState && setInternal(rState);
                }
            };
            return {
                get: get,
                set: set,
                inc: function (delta) {
                    if (delta === void 0) { delta = 1; }
                    var rDelta = Object(_misc_hookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(delta, get());
                    if (typeof rDelta !== 'number') {
                        console.error('delta has to be a number or function returning a number, got ' + typeof rDelta);
                    }
                    set(function (num) { return num + rDelta; });
                },
                dec: function (delta) {
                    if (delta === void 0) { delta = 1; }
                    var rDelta = Object(_misc_hookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(delta, get());
                    if (typeof rDelta !== 'number') {
                        console.error('delta has to be a number or function returning a number, got ' + typeof rDelta);
                    }
                    set(function (num) { return num - rDelta; });
                },
                reset: function (value) {
                    if (value === void 0) { value = init; }
                    var rValue = Object(_misc_hookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(value, get());
                    if (typeof rValue !== 'number') {
                        console.error('value has to be a number or function returning a number, got ' + typeof rValue);
                    }
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    init = rValue;
                    set(rValue);
                },
            };
        }, [init, min, max]),
    ];
}


/***/ }),

/***/ "../node_modules/react-use/esm/useCss.js":
/*!***********************************************!*\
  !*** ../node_modules/react-use/esm/useCss.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nano_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nano-css */ "../node_modules/nano-css/index.js");
/* harmony import */ var nano_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nano_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nano_css_addon_cssom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nano-css/addon/cssom */ "../node_modules/nano-css/addon/cssom.js");
/* harmony import */ var nano_css_addon_cssom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nano_css_addon_cssom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nano_css_addon_vcssom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nano-css/addon/vcssom */ "../node_modules/nano-css/addon/vcssom.js");
/* harmony import */ var nano_css_addon_vcssom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nano_css_addon_vcssom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nano_css_addon_vcssom_cssToTree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nano-css/addon/vcssom/cssToTree */ "../node_modules/nano-css/addon/vcssom/cssToTree.js");
/* harmony import */ var nano_css_addon_vcssom_cssToTree__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nano_css_addon_vcssom_cssToTree__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "../node_modules/react-use/esm/useIsomorphicLayoutEffect.js");






var nano = Object(nano_css__WEBPACK_IMPORTED_MODULE_0__["create"])();
Object(nano_css_addon_cssom__WEBPACK_IMPORTED_MODULE_1__["addon"])(nano);
Object(nano_css_addon_vcssom__WEBPACK_IMPORTED_MODULE_2__["addon"])(nano);
var counter = 0;
var useCss = function (css) {
    var className = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () { return 'react-use-css-' + (counter++).toString(36); }, []);
    var sheet = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () { return new nano.VSheet(); }, []);
    Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
        var tree = {};
        Object(nano_css_addon_vcssom_cssToTree__WEBPACK_IMPORTED_MODULE_3__["cssToTree"])(tree, css, '.' + className, '');
        sheet.diff(tree);
        return function () {
            sheet.diff({});
        };
    });
    return className;
};
/* harmony default export */ __webpack_exports__["default"] = (useCss);


/***/ }),

/***/ "../node_modules/react-use/esm/useCustomCompareEffect.js":
/*!***************************************************************!*\
  !*** ../node_modules/react-use/esm/useCustomCompareEffect.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var isPrimitive = function (val) { return val !== Object(val); };
var useCustomCompareEffect = function (effect, deps, depsEqual) {
    if (true) {
        if (!(deps instanceof Array) || !deps.length) {
            console.warn('`useCustomCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
        }
        if (deps.every(isPrimitive)) {
            console.warn('`useCustomCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
        }
        if (typeof depsEqual !== 'function') {
            console.warn('`useCustomCompareEffect` should be used with depsEqual callback for comparing deps list');
        }
    }
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(undefined);
    if (!ref.current || !depsEqual(deps, ref.current)) {
        ref.current = deps;
    }
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(effect, ref.current);
};
/* harmony default export */ __webpack_exports__["default"] = (useCustomCompareEffect);


/***/ }),

/***/ "../node_modules/react-use/esm/useDebounce.js":
/*!****************************************************!*\
  !*** ../node_modules/react-use/esm/useDebounce.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useDebounce; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useTimeoutFn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useTimeoutFn */ "../node_modules/react-use/esm/useTimeoutFn.js");


function useDebounce(fn, ms, deps) {
    if (ms === void 0) { ms = 0; }
    if (deps === void 0) { deps = []; }
    var _a = Object(_useTimeoutFn__WEBPACK_IMPORTED_MODULE_1__["default"])(fn, ms), isReady = _a[0], cancel = _a[1], reset = _a[2];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(reset, deps);
    return [isReady, cancel];
}


/***/ }),

/***/ "../node_modules/react-use/esm/useDeepCompareEffect.js":
/*!*************************************************************!*\
  !*** ../node_modules/react-use/esm/useDeepCompareEffect.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useCustomCompareEffect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useCustomCompareEffect */ "../node_modules/react-use/esm/useCustomCompareEffect.js");
/* harmony import */ var _misc_isDeepEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/isDeepEqual */ "../node_modules/react-use/esm/misc/isDeepEqual.js");


var isPrimitive = function (val) { return val !== Object(val); };
var useDeepCompareEffect = function (effect, deps) {
    if (true) {
        if (!(deps instanceof Array) || !deps.length) {
            console.warn('`useDeepCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
        }
        if (deps.every(isPrimitive)) {
            console.warn('`useDeepCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
        }
    }
    Object(_useCustomCompareEffect__WEBPACK_IMPORTED_MODULE_0__["default"])(effect, deps, _misc_isDeepEqual__WEBPACK_IMPORTED_MODULE_1__["default"]);
};
/* harmony default export */ __webpack_exports__["default"] = (useDeepCompareEffect);


/***/ }),

/***/ "../node_modules/react-use/esm/useDefault.js":
/*!***************************************************!*\
  !*** ../node_modules/react-use/esm/useDefault.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useDefault = function (defaultValue, initialValue) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue), value = _a[0], setValue = _a[1];
    if (value === undefined || value === null) {
        return [defaultValue, setValue];
    }
    return [value, setValue];
};
/* harmony default export */ __webpack_exports__["default"] = (useDefault);


/***/ }),

/***/ "../node_modules/react-use/esm/useDrop.js":
/*!************************************************!*\
  !*** ../node_modules/react-use/esm/useDrop.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");



var createProcess = function (options) { return function (dataTransfer, event) {
    var uri = dataTransfer.getData('text/uri-list');
    if (uri) {
        (options.onUri || _misc_util__WEBPACK_IMPORTED_MODULE_2__["noop"])(uri, event);
        return;
    }
    if (dataTransfer.files && dataTransfer.files.length) {
        (options.onFiles || _misc_util__WEBPACK_IMPORTED_MODULE_2__["noop"])(Array.from(dataTransfer.files), event);
        return;
    }
    if (event.clipboardData) {
        var text = event.clipboardData.getData('text');
        (options.onText || _misc_util__WEBPACK_IMPORTED_MODULE_2__["noop"])(text, event);
        return;
    }
}; };
var useDrop = function (options, args) {
    if (options === void 0) { options = {}; }
    if (args === void 0) { args = []; }
    var onFiles = options.onFiles, onText = options.onText, onUri = options.onUri;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false), over = _a[0], setOverRaw = _a[1];
    var setOver = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(setOverRaw, []);
    var process = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () { return createProcess(options); }, [onFiles, onText, onUri]);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        var onDragOver = function (event) {
            event.preventDefault();
            setOver(true);
        };
        var onDragEnter = function (event) {
            event.preventDefault();
            setOver(true);
        };
        var onDragLeave = function () {
            setOver(false);
        };
        var onDragExit = function () {
            setOver(false);
        };
        var onDrop = function (event) {
            event.preventDefault();
            setOver(false);
            process(event.dataTransfer, event);
        };
        var onPaste = function (event) {
            process(event.clipboardData, event);
        };
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["on"])(document, 'dragover', onDragOver);
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["on"])(document, 'dragenter', onDragEnter);
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["on"])(document, 'dragleave', onDragLeave);
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["on"])(document, 'dragexit', onDragExit);
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["on"])(document, 'drop', onDrop);
        if (onText) {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["on"])(document, 'paste', onPaste);
        }
        return function () {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["off"])(document, 'dragover', onDragOver);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["off"])(document, 'dragenter', onDragEnter);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["off"])(document, 'dragleave', onDragLeave);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["off"])(document, 'dragexit', onDragExit);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["off"])(document, 'drop', onDrop);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["off"])(document, 'paste', onPaste);
        };
    }, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([process], args));
    return { over: over };
};
/* harmony default export */ __webpack_exports__["default"] = (useDrop);


/***/ }),

/***/ "../node_modules/react-use/esm/useDropArea.js":
/*!****************************************************!*\
  !*** ../node_modules/react-use/esm/useDropArea.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMountedState */ "../node_modules/react-use/esm/useMountedState.js");
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");



/*
const defaultState: DropAreaState = {
  over: false,
};
*/
var createProcess = function (options, mounted) { return function (dataTransfer, event) {
    var uri = dataTransfer.getData('text/uri-list');
    if (uri) {
        (options.onUri || _misc_util__WEBPACK_IMPORTED_MODULE_2__["noop"])(uri, event);
        return;
    }
    if (dataTransfer.files && dataTransfer.files.length) {
        (options.onFiles || _misc_util__WEBPACK_IMPORTED_MODULE_2__["noop"])(Array.from(dataTransfer.files), event);
        return;
    }
    if (dataTransfer.items && dataTransfer.items.length) {
        dataTransfer.items[0].getAsString(function (text) {
            if (mounted) {
                (options.onText || _misc_util__WEBPACK_IMPORTED_MODULE_2__["noop"])(text, event);
            }
        });
    }
}; };
var createBond = function (process, setOver) { return ({
    onDragOver: function (event) {
        event.preventDefault();
    },
    onDragEnter: function (event) {
        event.preventDefault();
        setOver(true);
    },
    onDragLeave: function () {
        setOver(false);
    },
    onDrop: function (event) {
        event.preventDefault();
        event.persist();
        setOver(false);
        process(event.dataTransfer, event);
    },
    onPaste: function (event) {
        event.persist();
        process(event.clipboardData, event);
    },
}); };
var useDropArea = function (options) {
    if (options === void 0) { options = {}; }
    var onFiles = options.onFiles, onText = options.onText, onUri = options.onUri;
    var isMounted = Object(_useMountedState__WEBPACK_IMPORTED_MODULE_1__["default"])();
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), over = _a[0], setOver = _a[1];
    var process = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return createProcess(options, isMounted()); }, [onFiles, onText, onUri]);
    var bond = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return createBond(process, setOver); }, [process, setOver]);
    return [bond, { over: over }];
};
/* harmony default export */ __webpack_exports__["default"] = (useDropArea);


/***/ }),

/***/ "../node_modules/react-use/esm/useEffectOnce.js":
/*!******************************************************!*\
  !*** ../node_modules/react-use/esm/useEffectOnce.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useEffectOnce = function (effect) {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(effect, []);
};
/* harmony default export */ __webpack_exports__["default"] = (useEffectOnce);


/***/ }),

/***/ "../node_modules/react-use/esm/useEnsuredForwardedRef.js":
/*!***************************************************************!*\
  !*** ../node_modules/react-use/esm/useEnsuredForwardedRef.js ***!
  \***************************************************************/
/*! exports provided: default, ensuredForwardRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useEnsuredForwardedRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensuredForwardRef", function() { return ensuredForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useEnsuredForwardedRef(forwardedRef) {
    var ensuredRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(forwardedRef && forwardedRef.current);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!forwardedRef) {
            return;
        }
        forwardedRef.current = ensuredRef.current;
    }, [forwardedRef]);
    return ensuredRef;
}
function ensuredForwardRef(Component) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
        var ensuredRef = useEnsuredForwardedRef(ref);
        return Component(props, ensuredRef);
    });
}


/***/ }),

/***/ "../node_modules/react-use/esm/useError.js":
/*!*************************************************!*\
  !*** ../node_modules/react-use/esm/useError.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useError = function () {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), error = _a[0], setError = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (error) {
            throw error;
        }
    }, [error]);
    var dispatchError = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (err) {
        setError(err);
    }, []);
    return dispatchError;
};
/* harmony default export */ __webpack_exports__["default"] = (useError);


/***/ }),

/***/ "../node_modules/react-use/esm/useEvent.js":
/*!*************************************************!*\
  !*** ../node_modules/react-use/esm/useEvent.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var defaultTarget = _misc_util__WEBPACK_IMPORTED_MODULE_1__["isBrowser"] ? window : null;
var isListenerType1 = function (target) {
    return !!target.addEventListener;
};
var isListenerType2 = function (target) {
    return !!target.on;
};
var useEvent = function (name, handler, target, options) {
    if (target === void 0) { target = defaultTarget; }
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!handler) {
            return;
        }
        if (!target) {
            return;
        }
        if (isListenerType1(target)) {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(target, name, handler, options);
        }
        else if (isListenerType2(target)) {
            target.on(name, handler, options);
        }
        return function () {
            if (isListenerType1(target)) {
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(target, name, handler, options);
            }
            else if (isListenerType2(target)) {
                target.off(name, handler, options);
            }
        };
    }, [name, handler, target, JSON.stringify(options)]);
};
/* harmony default export */ __webpack_exports__["default"] = (useEvent);


/***/ }),

/***/ "../node_modules/react-use/esm/useFavicon.js":
/*!***************************************************!*\
  !*** ../node_modules/react-use/esm/useFavicon.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useFavicon = function (href) {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = href;
        document.getElementsByTagName('head')[0].appendChild(link);
    }, [href]);
};
/* harmony default export */ __webpack_exports__["default"] = (useFavicon);


/***/ }),

/***/ "../node_modules/react-use/esm/useFirstMountState.js":
/*!***********************************************************!*\
  !*** ../node_modules/react-use/esm/useFirstMountState.js ***!
  \***********************************************************/
/*! exports provided: useFirstMountState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFirstMountState", function() { return useFirstMountState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useFirstMountState() {
    var isFirst = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
    if (isFirst.current) {
        isFirst.current = false;
        return true;
    }
    return isFirst.current;
}


/***/ }),

/***/ "../node_modules/react-use/esm/useFullscreen.js":
/*!******************************************************!*\
  !*** ../node_modules/react-use/esm/useFullscreen.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! screenfull */ "../node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "../node_modules/react-use/esm/useIsomorphicLayoutEffect.js");
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");




var useFullscreen = function (ref, enabled, options) {
    if (options === void 0) { options = {}; }
    var video = options.video, _a = options.onClose, onClose = _a === void 0 ? _misc_util__WEBPACK_IMPORTED_MODULE_3__["noop"] : _a;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(enabled), isFullscreen = _b[0], setIsFullscreen = _b[1];
    Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
        if (!enabled) {
            return;
        }
        if (!ref.current) {
            return;
        }
        var onWebkitEndFullscreen = function () {
            if (video === null || video === void 0 ? void 0 : video.current) {
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_3__["off"])(video.current, 'webkitendfullscreen', onWebkitEndFullscreen);
            }
            onClose();
        };
        var onChange = function () {
            if (screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.isEnabled) {
                var isScreenfullFullscreen = screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.isFullscreen;
                setIsFullscreen(isScreenfullFullscreen);
                if (!isScreenfullFullscreen) {
                    onClose();
                }
            }
        };
        if (screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.isEnabled) {
            try {
                screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.request(ref.current);
                setIsFullscreen(true);
            }
            catch (error) {
                onClose(error);
                setIsFullscreen(false);
            }
            screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.on('change', onChange);
        }
        else if (video && video.current && video.current.webkitEnterFullscreen) {
            video.current.webkitEnterFullscreen();
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_3__["on"])(video.current, 'webkitendfullscreen', onWebkitEndFullscreen);
            setIsFullscreen(true);
        }
        else {
            onClose();
            setIsFullscreen(false);
        }
        return function () {
            setIsFullscreen(false);
            if (screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.isEnabled) {
                try {
                    screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.off('change', onChange);
                    screenfull__WEBPACK_IMPORTED_MODULE_1___default.a.exit();
                }
                catch (_a) { }
            }
            else if (video && video.current && video.current.webkitExitFullscreen) {
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_3__["off"])(video.current, 'webkitendfullscreen', onWebkitEndFullscreen);
                video.current.webkitExitFullscreen();
            }
        };
    }, [enabled, video, ref]);
    return isFullscreen;
};
/* harmony default export */ __webpack_exports__["default"] = (useFullscreen);


/***/ }),

/***/ "../node_modules/react-use/esm/useGeolocation.js":
/*!*******************************************************!*\
  !*** ../node_modules/react-use/esm/useGeolocation.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var useGeolocation = function (options) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
        loading: true,
        accuracy: null,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: null,
        longitude: null,
        speed: null,
        timestamp: Date.now(),
    }), state = _a[0], setState = _a[1];
    var mounted = true;
    var watchId;
    var onEvent = function (event) {
        if (mounted) {
            setState({
                loading: false,
                accuracy: event.coords.accuracy,
                altitude: event.coords.altitude,
                altitudeAccuracy: event.coords.altitudeAccuracy,
                heading: event.coords.heading,
                latitude: event.coords.latitude,
                longitude: event.coords.longitude,
                speed: event.coords.speed,
                timestamp: event.timestamp,
            });
        }
    };
    var onEventError = function (error) {
        return mounted && setState(function (oldState) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, oldState), { loading: false, error: error })); });
    };
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        navigator.geolocation.getCurrentPosition(onEvent, onEventError, options);
        watchId = navigator.geolocation.watchPosition(onEvent, onEventError, options);
        return function () {
            mounted = false;
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useGeolocation);


/***/ }),

/***/ "../node_modules/react-use/esm/useGetSet.js":
/*!**************************************************!*\
  !*** ../node_modules/react-use/esm/useGetSet.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useGetSet; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUpdate */ "../node_modules/react-use/esm/useUpdate.js");
/* harmony import */ var _misc_hookState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/hookState */ "../node_modules/react-use/esm/misc/hookState.js");



function useGetSet(initialState) {
    var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(Object(_misc_hookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(initialState));
    var update = Object(_useUpdate__WEBPACK_IMPORTED_MODULE_1__["default"])();
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return [
        function () { return state.current; },
        function (newState) {
            state.current = Object(_misc_hookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(newState, state.current);
            update();
        },
    ]; }, []);
}


/***/ }),

/***/ "../node_modules/react-use/esm/useGetSetState.js":
/*!*******************************************************!*\
  !*** ../node_modules/react-use/esm/useGetSetState.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useUpdate */ "../node_modules/react-use/esm/useUpdate.js");



var useGetSetState = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    if (true) {
        if (typeof initialState !== 'object') {
            console.error('useGetSetState initial state must be an object.');
        }
    }
    var update = Object(_useUpdate__WEBPACK_IMPORTED_MODULE_2__["default"])();
    var state = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, initialState));
    var get = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () { return state.current; }, []);
    var set = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (patch) {
        if (!patch) {
            return;
        }
        if (true) {
            if (typeof patch !== 'object') {
                console.error('useGetSetState setter patch must be an object.');
            }
        }
        Object.assign(state.current, patch);
        update();
    }, []);
    return [get, set];
};
/* harmony default export */ __webpack_exports__["default"] = (useGetSetState);


/***/ }),

/***/ "../node_modules/react-use/esm/useHarmonicIntervalFn.js":
/*!**************************************************************!*\
  !*** ../node_modules/react-use/esm/useHarmonicIntervalFn.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var set_harmonic_interval__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! set-harmonic-interval */ "../node_modules/set-harmonic-interval/lib/index.esm.js");


var useHarmonicIntervalFn = function (fn, delay) {
    if (delay === void 0) { delay = 0; }
    var latestCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(function () { });
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        latestCallback.current = fn;
    });
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (delay !== null) {
            var interval_1 = Object(set_harmonic_interval__WEBPACK_IMPORTED_MODULE_1__["setHarmonicInterval"])(function () { return latestCallback.current(); }, delay);
            return function () { return Object(set_harmonic_interval__WEBPACK_IMPORTED_MODULE_1__["clearHarmonicInterval"])(interval_1); };
        }
        return undefined;
    }, [delay]);
};
/* harmony default export */ __webpack_exports__["default"] = (useHarmonicIntervalFn);


/***/ }),

/***/ "../node_modules/react-use/esm/useHash.js":
/*!************************************************!*\
  !*** ../node_modules/react-use/esm/useHash.js ***!
  \************************************************/
/*! exports provided: useHash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHash", function() { return useHash; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useLifecycles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useLifecycles */ "../node_modules/react-use/esm/useLifecycles.js");
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");



/**
 * read and write url hash, response to url hash change
 */
var useHash = function () {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () { return window.location.hash; }), hash = _a[0], setHash = _a[1];
    var onHashChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        setHash(window.location.hash);
    }, []);
    Object(_useLifecycles__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["on"])(window, 'hashchange', onHashChange);
    }, function () {
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["off"])(window, 'hashchange', onHashChange);
    });
    var _setHash = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (newHash) {
        if (newHash !== hash) {
            window.location.hash = newHash;
        }
    }, [hash]);
    return [hash, _setHash];
};


/***/ }),

/***/ "../node_modules/react-use/esm/useHover.js":
/*!*************************************************!*\
  !*** ../node_modules/react-use/esm/useHover.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"];
var useHover = function (element) {
    var _a = useState(false), state = _a[0], setState = _a[1];
    var onMouseEnter = function (originalOnMouseEnter) { return function (event) {
        (originalOnMouseEnter || _misc_util__WEBPACK_IMPORTED_MODULE_1__["noop"])(event);
        setState(true);
    }; };
    var onMouseLeave = function (originalOnMouseLeave) { return function (event) {
        (originalOnMouseLeave || _misc_util__WEBPACK_IMPORTED_MODULE_1__["noop"])(event);
        setState(false);
    }; };
    if (typeof element === 'function') {
        element = element(state);
    }
    var el = react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](element, {
        onMouseEnter: onMouseEnter(element.props.onMouseEnter),
        onMouseLeave: onMouseLeave(element.props.onMouseLeave),
    });
    return [el, state];
};
/* harmony default export */ __webpack_exports__["default"] = (useHover);


/***/ }),

/***/ "../node_modules/react-use/esm/useHoverDirty.js":
/*!******************************************************!*\
  !*** ../node_modules/react-use/esm/useHoverDirty.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


// kudos: https://usehooks.com/
var useHoverDirty = function (ref, enabled) {
    if (enabled === void 0) { enabled = true; }
    if (true) {
        if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
            console.error('useHoverDirty expects a single ref argument.');
        }
    }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), value = _a[0], setValue = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var onMouseOver = function () { return setValue(true); };
        var onMouseOut = function () { return setValue(false); };
        if (enabled && ref && ref.current) {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(ref.current, 'mouseover', onMouseOver);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(ref.current, 'mouseout', onMouseOut);
        }
        // fixes react-hooks/exhaustive-deps warning about stale ref elements
        var current = ref.current;
        return function () {
            if (enabled && current) {
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(current, 'mouseover', onMouseOver);
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(current, 'mouseout', onMouseOut);
            }
        };
    }, [enabled, ref]);
    return value;
};
/* harmony default export */ __webpack_exports__["default"] = (useHoverDirty);


/***/ }),

/***/ "../node_modules/react-use/esm/useIdle.js":
/*!************************************************!*\
  !*** ../node_modules/react-use/esm/useIdle.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! throttle-debounce */ "../node_modules/throttle-debounce/esm/index.js");
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");



var defaultEvents = ['mousemove', 'mousedown', 'resize', 'keydown', 'touchstart', 'wheel'];
var oneMinute = 60e3;
var useIdle = function (ms, initialState, events) {
    if (ms === void 0) { ms = oneMinute; }
    if (initialState === void 0) { initialState = false; }
    if (events === void 0) { events = defaultEvents; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var mounted = true;
        var timeout;
        var localState = state;
        var set = function (newState) {
            if (mounted) {
                localState = newState;
                setState(newState);
            }
        };
        var onEvent = Object(throttle_debounce__WEBPACK_IMPORTED_MODULE_1__["throttle"])(50, function () {
            if (localState) {
                set(false);
            }
            clearTimeout(timeout);
            timeout = setTimeout(function () { return set(true); }, ms);
        });
        var onVisibility = function () {
            if (!document.hidden) {
                onEvent();
            }
        };
        for (var i = 0; i < events.length; i++) {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["on"])(window, events[i], onEvent);
        }
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["on"])(document, 'visibilitychange', onVisibility);
        timeout = setTimeout(function () { return set(true); }, ms);
        return function () {
            mounted = false;
            for (var i = 0; i < events.length; i++) {
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["off"])(window, events[i], onEvent);
            }
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["off"])(document, 'visibilitychange', onVisibility);
        };
    }, [ms, events]);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useIdle);


/***/ }),

/***/ "../node_modules/react-use/esm/useIntersection.js":
/*!********************************************************!*\
  !*** ../node_modules/react-use/esm/useIntersection.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useIntersection = function (ref, options) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), intersectionObserverEntry = _a[0], setIntersectionObserverEntry = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (ref.current && typeof IntersectionObserver === 'function') {
            var handler = function (entries) {
                setIntersectionObserverEntry(entries[0]);
            };
            var observer_1 = new IntersectionObserver(handler, options);
            observer_1.observe(ref.current);
            return function () {
                setIntersectionObserverEntry(null);
                observer_1.disconnect();
            };
        }
        return function () { };
    }, [ref.current, options.threshold, options.root, options.rootMargin]);
    return intersectionObserverEntry;
};
/* harmony default export */ __webpack_exports__["default"] = (useIntersection);


/***/ }),

/***/ "../node_modules/react-use/esm/useInterval.js":
/*!****************************************************!*\
  !*** ../node_modules/react-use/esm/useInterval.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useInterval = function (callback, delay) {
    var savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(function () { });
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        savedCallback.current = callback;
    });
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (delay !== null) {
            var interval_1 = setInterval(function () { return savedCallback.current(); }, delay || 0);
            return function () { return clearInterval(interval_1); };
        }
        return undefined;
    }, [delay]);
};
/* harmony default export */ __webpack_exports__["default"] = (useInterval);


/***/ }),

/***/ "../node_modules/react-use/esm/useIsomorphicLayoutEffect.js":
/*!******************************************************************!*\
  !*** ../node_modules/react-use/esm/useIsomorphicLayoutEffect.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var useIsomorphicLayoutEffect = _misc_util__WEBPACK_IMPORTED_MODULE_1__["isBrowser"] ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];
/* harmony default export */ __webpack_exports__["default"] = (useIsomorphicLayoutEffect);


/***/ }),

/***/ "../node_modules/react-use/esm/useKey.js":
/*!***********************************************!*\
  !*** ../node_modules/react-use/esm/useKey.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEvent */ "../node_modules/react-use/esm/useEvent.js");
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");



var createKeyPredicate = function (keyFilter) {
    return typeof keyFilter === 'function'
        ? keyFilter
        : typeof keyFilter === 'string'
            ? function (event) { return event.key === keyFilter; }
            : keyFilter
                ? function () { return true; }
                : function () { return false; };
};
var useKey = function (key, fn, opts, deps) {
    if (fn === void 0) { fn = _misc_util__WEBPACK_IMPORTED_MODULE_2__["noop"]; }
    if (opts === void 0) { opts = {}; }
    if (deps === void 0) { deps = [key]; }
    var _a = opts.event, event = _a === void 0 ? 'keydown' : _a, target = opts.target, options = opts.options;
    var useMemoHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        var predicate = createKeyPredicate(key);
        var handler = function (handlerEvent) {
            if (predicate(handlerEvent)) {
                return fn(handlerEvent);
            }
        };
        return handler;
    }, deps);
    Object(_useEvent__WEBPACK_IMPORTED_MODULE_1__["default"])(event, useMemoHandler, target, options);
};
/* harmony default export */ __webpack_exports__["default"] = (useKey);


/***/ }),

/***/ "../node_modules/react-use/esm/useKeyPress.js":
/*!****************************************************!*\
  !*** ../node_modules/react-use/esm/useKeyPress.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useKey */ "../node_modules/react-use/esm/useKey.js");


var useKeyPress = function (keyFilter) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([false, null]), state = _a[0], set = _a[1];
    Object(_useKey__WEBPACK_IMPORTED_MODULE_1__["default"])(keyFilter, function (event) { return set([true, event]); }, { event: 'keydown' }, [state]);
    Object(_useKey__WEBPACK_IMPORTED_MODULE_1__["default"])(keyFilter, function (event) { return set([false, event]); }, { event: 'keyup' }, [state]);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useKeyPress);


/***/ }),

/***/ "../node_modules/react-use/esm/useKeyPressEvent.js":
/*!*********************************************************!*\
  !*** ../node_modules/react-use/esm/useKeyPressEvent.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useKeyPress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useKeyPress */ "../node_modules/react-use/esm/useKeyPress.js");
/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUpdateEffect */ "../node_modules/react-use/esm/useUpdateEffect.js");


var useKeyPressEvent = function (key, keydown, keyup, useKeyPress) {
    if (useKeyPress === void 0) { useKeyPress = _useKeyPress__WEBPACK_IMPORTED_MODULE_0__["default"]; }
    var _a = useKeyPress(key), pressed = _a[0], event = _a[1];
    Object(_useUpdateEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        if (!pressed && keyup) {
            keyup(event);
        }
        else if (pressed && keydown) {
            keydown(event);
        }
    }, [pressed]);
};
/* harmony default export */ __webpack_exports__["default"] = (useKeyPressEvent);


/***/ }),

/***/ "../node_modules/react-use/esm/useLatest.js":
/*!**************************************************!*\
  !*** ../node_modules/react-use/esm/useLatest.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useLatest = function (value) {
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
    ref.current = value;
    return ref;
};
/* harmony default export */ __webpack_exports__["default"] = (useLatest);


/***/ }),

/***/ "../node_modules/react-use/esm/useLifecycles.js":
/*!******************************************************!*\
  !*** ../node_modules/react-use/esm/useLifecycles.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useLifecycles = function (mount, unmount) {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (mount) {
            mount();
        }
        return function () {
            if (unmount) {
                unmount();
            }
        };
    }, []);
};
/* harmony default export */ __webpack_exports__["default"] = (useLifecycles);


/***/ }),

/***/ "../node_modules/react-use/esm/useList.js":
/*!************************************************!*\
  !*** ../node_modules/react-use/esm/useList.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUpdate */ "../node_modules/react-use/esm/useUpdate.js");
/* harmony import */ var _misc_hookState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/hookState */ "../node_modules/react-use/esm/misc/hookState.js");



function useList(initialList) {
    if (initialList === void 0) { initialList = []; }
    var list = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(Object(_misc_hookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(initialList));
    var update = Object(_useUpdate__WEBPACK_IMPORTED_MODULE_1__["default"])();
    var actions = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        var a = {
            set: function (newList) {
                list.current = Object(_misc_hookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(newList, list.current);
                update();
            },
            push: function () {
                var items = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    items[_i] = arguments[_i];
                }
                items.length && actions.set(function (curr) { return curr.concat(items); });
            },
            updateAt: function (index, item) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    arr[index] = item;
                    return arr;
                });
            },
            insertAt: function (index, item) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    index > arr.length ? (arr[index] = item) : arr.splice(index, 0, item);
                    return arr;
                });
            },
            update: function (predicate, newItem) {
                actions.set(function (curr) { return curr.map(function (item) { return (predicate(item, newItem) ? newItem : item); }); });
            },
            updateFirst: function (predicate, newItem) {
                var index = list.current.findIndex(function (item) { return predicate(item, newItem); });
                index >= 0 && actions.updateAt(index, newItem);
            },
            upsert: function (predicate, newItem) {
                var index = list.current.findIndex(function (item) { return predicate(item, newItem); });
                index >= 0 ? actions.updateAt(index, newItem) : actions.push(newItem);
            },
            sort: function (compareFn) {
                actions.set(function (curr) { return curr.slice().sort(compareFn); });
            },
            filter: function (callbackFn, thisArg) {
                actions.set(function (curr) { return curr.slice().filter(callbackFn, thisArg); });
            },
            removeAt: function (index) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    arr.splice(index, 1);
                    return arr;
                });
            },
            clear: function () {
                actions.set([]);
            },
            reset: function () {
                actions.set(Object(_misc_hookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(initialList).slice());
            },
        };
        /**
         * @deprecated Use removeAt method instead
         */
        a.remove = a.removeAt;
        return a;
    }, []);
    return [list.current, actions];
}
/* harmony default export */ __webpack_exports__["default"] = (useList);


/***/ }),

/***/ "../node_modules/react-use/esm/useLocalStorage.js":
/*!********************************************************!*\
  !*** ../node_modules/react-use/esm/useLocalStorage.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var useLocalStorage = function (key, initialValue, options) {
    if (!_misc_util__WEBPACK_IMPORTED_MODULE_1__["isBrowser"]) {
        return [initialValue, _misc_util__WEBPACK_IMPORTED_MODULE_1__["noop"], _misc_util__WEBPACK_IMPORTED_MODULE_1__["noop"]];
    }
    if (!key) {
        throw new Error('useLocalStorage key may not be falsy');
    }
    var deserializer = options
        ? options.raw
            ? function (value) { return value; }
            : options.deserializer
        : JSON.parse;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var initializer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(function (key) {
        try {
            var serializer = options ? (options.raw ? String : options.serializer) : JSON.stringify;
            var localStorageValue = localStorage.getItem(key);
            if (localStorageValue !== null) {
                return deserializer(localStorageValue);
            }
            else {
                initialValue && localStorage.setItem(key, serializer(initialValue));
                return initialValue;
            }
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // localStorage can throw. JSON.parse and JSON.stringify
            // can throw, too.
            return initialValue;
        }
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () { return initializer.current(key); }), state = _a[0], setState = _a[1];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () { return setState(initializer.current(key)); }, [key]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var set = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (valOrFunc) {
        try {
            var newState = typeof valOrFunc === 'function' ? valOrFunc(state) : valOrFunc;
            if (typeof newState === 'undefined')
                return;
            var value = void 0;
            if (options)
                if (options.raw)
                    if (typeof newState === 'string')
                        value = newState;
                    else
                        value = JSON.stringify(newState);
                else if (options.serializer)
                    value = options.serializer(newState);
                else
                    value = JSON.stringify(newState);
            else
                value = JSON.stringify(newState);
            localStorage.setItem(key, value);
            setState(deserializer(value));
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // localStorage can throw. Also JSON.stringify can throw.
        }
    }, [key, setState]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var remove = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        try {
            localStorage.removeItem(key);
            setState(undefined);
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // localStorage can throw.
        }
    }, [key, setState]);
    return [state, set, remove];
};
/* harmony default export */ __webpack_exports__["default"] = (useLocalStorage);


/***/ }),

/***/ "../node_modules/react-use/esm/useLocation.js":
/*!****************************************************!*\
  !*** ../node_modules/react-use/esm/useLocation.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var patchHistoryMethod = function (method) {
    var history = window.history;
    var original = history[method];
    history[method] = function (state) {
        var result = original.apply(this, arguments);
        var event = new Event(method.toLowerCase());
        event.state = state;
        window.dispatchEvent(event);
        return result;
    };
};
if (_misc_util__WEBPACK_IMPORTED_MODULE_1__["isBrowser"]) {
    patchHistoryMethod('pushState');
    patchHistoryMethod('replaceState');
}
var useLocationServer = function () { return ({
    trigger: 'load',
    length: 1,
}); };
var buildState = function (trigger) {
    var _a = window.history, state = _a.state, length = _a.length;
    var _b = window.location, hash = _b.hash, host = _b.host, hostname = _b.hostname, href = _b.href, origin = _b.origin, pathname = _b.pathname, port = _b.port, protocol = _b.protocol, search = _b.search;
    return {
        trigger: trigger,
        state: state,
        length: length,
        hash: hash,
        host: host,
        hostname: hostname,
        href: href,
        origin: origin,
        pathname: pathname,
        port: port,
        protocol: protocol,
        search: search,
    };
};
var useLocationBrowser = function () {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(buildState('load')), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var onPopstate = function () { return setState(buildState('popstate')); };
        var onPushstate = function () { return setState(buildState('pushstate')); };
        var onReplacestate = function () { return setState(buildState('replacestate')); };
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'popstate', onPopstate);
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'pushstate', onPushstate);
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'replacestate', onReplacestate);
        return function () {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'popstate', onPopstate);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'pushstate', onPushstate);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'replacestate', onReplacestate);
        };
    }, []);
    return state;
};
var hasEventConstructor = typeof Event === 'function';
/* harmony default export */ __webpack_exports__["default"] = (_misc_util__WEBPACK_IMPORTED_MODULE_1__["isBrowser"] && hasEventConstructor ? useLocationBrowser : useLocationServer);


/***/ }),

/***/ "../node_modules/react-use/esm/useLockBodyScroll.js":
/*!**********************************************************!*\
  !*** ../node_modules/react-use/esm/useLockBodyScroll.js ***!
  \**********************************************************/
/*! exports provided: getClosestBody, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClosestBody", function() { return getClosestBody; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


function getClosestBody(el) {
    if (!el) {
        return null;
    }
    else if (el.tagName === 'BODY') {
        return el;
    }
    else if (el.tagName === 'IFRAME') {
        var document_1 = el.contentDocument;
        return document_1 ? document_1.body : null;
    }
    else if (!el.offsetParent) {
        return null;
    }
    return getClosestBody(el.offsetParent);
}
function preventDefault(rawEvent) {
    var e = rawEvent || window.event;
    // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
    if (e.touches.length > 1)
        return true;
    if (e.preventDefault)
        e.preventDefault();
    return false;
}
var isIosDevice = _misc_util__WEBPACK_IMPORTED_MODULE_1__["isBrowser"] &&
    window.navigator &&
    window.navigator.platform &&
    /iP(ad|hone|od)/.test(window.navigator.platform);
var bodies = new Map();
var doc = typeof document === 'object' ? document : undefined;
var documentListenerAdded = false;
/* harmony default export */ __webpack_exports__["default"] = (!doc
    ? function useLockBodyMock(_locked, _elementRef) {
        if (_locked === void 0) { _locked = true; }
    }
    : function useLockBody(locked, elementRef) {
        if (locked === void 0) { locked = true; }
        var bodyRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(doc.body);
        elementRef = elementRef || bodyRef;
        var lock = function (body) {
            var bodyInfo = bodies.get(body);
            if (!bodyInfo) {
                bodies.set(body, { counter: 1, initialOverflow: body.style.overflow });
                if (isIosDevice) {
                    if (!documentListenerAdded) {
                        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(document, 'touchmove', preventDefault, { passive: false });
                        documentListenerAdded = true;
                    }
                }
                else {
                    body.style.overflow = 'hidden';
                }
            }
            else {
                bodies.set(body, {
                    counter: bodyInfo.counter + 1,
                    initialOverflow: bodyInfo.initialOverflow,
                });
            }
        };
        var unlock = function (body) {
            var bodyInfo = bodies.get(body);
            if (bodyInfo) {
                if (bodyInfo.counter === 1) {
                    bodies.delete(body);
                    if (isIosDevice) {
                        body.ontouchmove = null;
                        if (documentListenerAdded) {
                            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(document, 'touchmove', preventDefault);
                            documentListenerAdded = false;
                        }
                    }
                    else {
                        body.style.overflow = bodyInfo.initialOverflow;
                    }
                }
                else {
                    bodies.set(body, {
                        counter: bodyInfo.counter - 1,
                        initialOverflow: bodyInfo.initialOverflow,
                    });
                }
            }
        };
        Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
            var body = getClosestBody(elementRef.current);
            if (!body) {
                return;
            }
            if (locked) {
                lock(body);
            }
            else {
                unlock(body);
            }
        }, [locked, elementRef.current]);
        // clean up, on un-mount
        Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
            var body = getClosestBody(elementRef.current);
            if (!body) {
                return;
            }
            return function () {
                unlock(body);
            };
        }, []);
    });


/***/ }),

/***/ "../node_modules/react-use/esm/useLogger.js":
/*!**************************************************!*\
  !*** ../node_modules/react-use/esm/useLogger.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEffectOnce */ "../node_modules/react-use/esm/useEffectOnce.js");
/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useUpdateEffect */ "../node_modules/react-use/esm/useUpdateEffect.js");



var useLogger = function (componentName) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    Object(_useEffectOnce__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        console.log.apply(console, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([componentName + " mounted"], rest));
        return function () { return console.log(componentName + " unmounted"); };
    });
    Object(_useUpdateEffect__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
        console.log.apply(console, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([componentName + " updated"], rest));
    });
};
/* harmony default export */ __webpack_exports__["default"] = (useLogger);


/***/ }),

/***/ "../node_modules/react-use/esm/useLongPress.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-use/esm/useLongPress.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var isTouchEvent = function (ev) {
    return 'touches' in ev;
};
var preventDefault = function (ev) {
    if (!isTouchEvent(ev))
        return;
    if (ev.touches.length < 2 && ev.preventDefault) {
        ev.preventDefault();
    }
};
var useLongPress = function (callback, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isPreventDefault, isPreventDefault = _c === void 0 ? true : _c, _d = _b.delay, delay = _d === void 0 ? 300 : _d;
    var timeout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var target = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var start = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
        // prevent ghost click on mobile devices
        if (isPreventDefault && event.target) {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(event.target, 'touchend', preventDefault, { passive: false });
            target.current = event.target;
        }
        timeout.current = setTimeout(function () { return callback(event); }, delay);
    }, [callback, delay, isPreventDefault]);
    var clear = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        // clearTimeout and removeEventListener
        timeout.current && clearTimeout(timeout.current);
        if (isPreventDefault && target.current) {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(target.current, 'touchend', preventDefault);
        }
    }, [isPreventDefault]);
    return {
        onMouseDown: function (e) { return start(e); },
        onTouchStart: function (e) { return start(e); },
        onMouseUp: clear,
        onMouseLeave: clear,
        onTouchEnd: clear,
    };
};
/* harmony default export */ __webpack_exports__["default"] = (useLongPress);


/***/ }),

/***/ "../node_modules/react-use/esm/useMap.js":
/*!***********************************************!*\
  !*** ../node_modules/react-use/esm/useMap.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var useMap = function (initialMap) {
    if (initialMap === void 0) { initialMap = {}; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialMap), map = _a[0], set = _a[1];
    var stableActions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () { return ({
        set: function (key, entry) {
            set(function (prevMap) {
                var _a;
                return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prevMap), (_a = {}, _a[key] = entry, _a)));
            });
        },
        setAll: function (newMap) {
            set(newMap);
        },
        remove: function (key) {
            set(function (prevMap) {
                var _a = prevMap, _b = key, omit = _a[_b], rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, [typeof _b === "symbol" ? _b : _b + ""]);
                return rest;
            });
        },
        reset: function () { return set(initialMap); },
    }); }, [set]);
    var utils = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ get: Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (key) { return map[key]; }, [map]) }, stableActions);
    return [map, utils];
};
/* harmony default export */ __webpack_exports__["default"] = (useMap);


/***/ }),

/***/ "../node_modules/react-use/esm/useMeasure.js":
/*!***************************************************!*\
  !*** ../node_modules/react-use/esm/useMeasure.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "../node_modules/react-use/esm/useIsomorphicLayoutEffect.js");
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");



var defaultState = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
};
function useMeasure() {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), element = _a[0], ref = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultState), rect = _b[0], setRect = _b[1];
    var observer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        return new window.ResizeObserver(function (entries) {
            if (entries[0]) {
                var _a = entries[0].contentRect, x = _a.x, y = _a.y, width = _a.width, height = _a.height, top_1 = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
                setRect({ x: x, y: y, width: width, height: height, top: top_1, left: left, bottom: bottom, right: right });
            }
        });
    }, []);
    Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        if (!element)
            return;
        observer.observe(element);
        return function () {
            observer.disconnect();
        };
    }, [element]);
    return [ref, rect];
}
/* harmony default export */ __webpack_exports__["default"] = (_misc_util__WEBPACK_IMPORTED_MODULE_2__["isBrowser"] && typeof window.ResizeObserver !== 'undefined'
    ? useMeasure
    : (function () { return [_misc_util__WEBPACK_IMPORTED_MODULE_2__["noop"], defaultState]; }));


/***/ }),

/***/ "../node_modules/react-use/esm/useMedia.js":
/*!*************************************************!*\
  !*** ../node_modules/react-use/esm/useMedia.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var useMedia = function (query, defaultState) {
    if (defaultState === void 0) { defaultState = false; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_misc_util__WEBPACK_IMPORTED_MODULE_1__["isBrowser"] ? function () { return window.matchMedia(query).matches; } : defaultState), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var mounted = true;
        var mql = window.matchMedia(query);
        var onChange = function () {
            if (!mounted) {
                return;
            }
            setState(!!mql.matches);
        };
        mql.addListener(onChange);
        setState(mql.matches);
        return function () {
            mounted = false;
            mql.removeListener(onChange);
        };
    }, [query]);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useMedia);


/***/ }),

/***/ "../node_modules/react-use/esm/useMediaDevices.js":
/*!********************************************************!*\
  !*** ../node_modules/react-use/esm/useMediaDevices.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var useMediaDevices = function () {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var mounted = true;
        var onChange = function () {
            navigator.mediaDevices
                .enumerateDevices()
                .then(function (devices) {
                if (mounted) {
                    setState({
                        devices: devices.map(function (_a) {
                            var deviceId = _a.deviceId, groupId = _a.groupId, kind = _a.kind, label = _a.label;
                            return ({
                                deviceId: deviceId,
                                groupId: groupId,
                                kind: kind,
                                label: label,
                            });
                        }),
                    });
                }
            })
                .catch(_misc_util__WEBPACK_IMPORTED_MODULE_1__["noop"]);
        };
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(navigator.mediaDevices, 'devicechange', onChange);
        onChange();
        return function () {
            mounted = false;
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(navigator.mediaDevices, 'devicechange', onChange);
        };
    }, []);
    return state;
};
var useMediaDevicesMock = function () { return ({}); };
/* harmony default export */ __webpack_exports__["default"] = (_misc_util__WEBPACK_IMPORTED_MODULE_1__["isNavigator"] && !!navigator.mediaDevices ? useMediaDevices : useMediaDevicesMock);


/***/ }),

/***/ "../node_modules/react-use/esm/useMediatedState.js":
/*!*********************************************************!*\
  !*** ../node_modules/react-use/esm/useMediatedState.js ***!
  \*********************************************************/
/*! exports provided: useMediatedState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMediatedState", function() { return useMediatedState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useMediatedState(mediator, initialState) {
    var mediatorFn = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(mediator);
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), state = _a[0], setMediatedState = _a[1];
    var setState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (newState) {
        if (mediatorFn.current.length === 2) {
            mediatorFn.current(newState, setMediatedState);
        }
        else {
            setMediatedState(mediatorFn.current(newState));
        }
    }, [state]);
    return [state, setState];
}


/***/ }),

/***/ "../node_modules/react-use/esm/useMethods.js":
/*!***************************************************!*\
  !*** ../node_modules/react-use/esm/useMethods.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useMethods = function (createMethods, initialState) {
    var reducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return function (reducerState, action) {
        var _a;
        return (_a = createMethods(reducerState))[action.type].apply(_a, action.payload);
    }; }, [createMethods]);
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState), state = _a[0], dispatch = _a[1];
    var wrappedMethods = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        var actionTypes = Object.keys(createMethods(initialState));
        return actionTypes.reduce(function (acc, type) {
            acc[type] = function () {
                var payload = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    payload[_i] = arguments[_i];
                }
                return dispatch({ type: type, payload: payload });
            };
            return acc;
        }, {});
    }, [createMethods, initialState]);
    return [state, wrappedMethods];
};
/* harmony default export */ __webpack_exports__["default"] = (useMethods);


/***/ }),

/***/ "../node_modules/react-use/esm/useMotion.js":
/*!**************************************************!*\
  !*** ../node_modules/react-use/esm/useMotion.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var defaultState = {
    acceleration: {
        x: null,
        y: null,
        z: null,
    },
    accelerationIncludingGravity: {
        x: null,
        y: null,
        z: null,
    },
    rotationRate: {
        alpha: null,
        beta: null,
        gamma: null,
    },
    interval: 16,
};
var useMotion = function (initialState) {
    if (initialState === void 0) { initialState = defaultState; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var handler = function (event) {
            var acceleration = event.acceleration, accelerationIncludingGravity = event.accelerationIncludingGravity, rotationRate = event.rotationRate, interval = event.interval;
            setState({
                acceleration: {
                    x: acceleration.x,
                    y: acceleration.y,
                    z: acceleration.z,
                },
                accelerationIncludingGravity: {
                    x: accelerationIncludingGravity.x,
                    y: accelerationIncludingGravity.y,
                    z: accelerationIncludingGravity.z,
                },
                rotationRate: {
                    alpha: rotationRate.alpha,
                    beta: rotationRate.beta,
                    gamma: rotationRate.gamma,
                },
                interval: interval,
            });
        };
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'devicemotion', handler);
        return function () {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'devicemotion', handler);
        };
    }, []);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useMotion);


/***/ }),

/***/ "../node_modules/react-use/esm/useMount.js":
/*!*************************************************!*\
  !*** ../node_modules/react-use/esm/useMount.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useEffectOnce */ "../node_modules/react-use/esm/useEffectOnce.js");

var useMount = function (fn) {
    Object(_useEffectOnce__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
        fn();
    });
};
/* harmony default export */ __webpack_exports__["default"] = (useMount);


/***/ }),

/***/ "../node_modules/react-use/esm/useMountedState.js":
/*!********************************************************!*\
  !*** ../node_modules/react-use/esm/useMountedState.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMountedState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useMountedState() {
    var mountedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    var get = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () { return mountedRef.current; }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        mountedRef.current = true;
        return function () {
            mountedRef.current = false;
        };
    }, []);
    return get;
}


/***/ }),

/***/ "../node_modules/react-use/esm/useMouse.js":
/*!*************************************************!*\
  !*** ../node_modules/react-use/esm/useMouse.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useRafState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRafState */ "../node_modules/react-use/esm/useRafState.js");
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");



var useMouse = function (ref) {
    if (true) {
        if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
            console.error('useMouse expects a single ref argument.');
        }
    }
    var _a = Object(_useRafState__WEBPACK_IMPORTED_MODULE_1__["default"])({
        docX: 0,
        docY: 0,
        posX: 0,
        posY: 0,
        elX: 0,
        elY: 0,
        elH: 0,
        elW: 0,
    }), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var moveHandler = function (event) {
            if (ref && ref.current) {
                var _a = ref.current.getBoundingClientRect(), left = _a.left, top_1 = _a.top, elW = _a.width, elH = _a.height;
                var posX = left + window.pageXOffset;
                var posY = top_1 + window.pageYOffset;
                var elX = event.pageX - posX;
                var elY = event.pageY - posY;
                setState({
                    docX: event.pageX,
                    docY: event.pageY,
                    posX: posX,
                    posY: posY,
                    elX: elX,
                    elY: elY,
                    elH: elH,
                    elW: elW,
                });
            }
        };
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["on"])(document, 'mousemove', moveHandler);
        return function () {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["off"])(document, 'mousemove', moveHandler);
        };
    }, [ref]);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useMouse);


/***/ }),

/***/ "../node_modules/react-use/esm/useMouseHovered.js":
/*!********************************************************!*\
  !*** ../node_modules/react-use/esm/useMouseHovered.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useHoverDirty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useHoverDirty */ "../node_modules/react-use/esm/useHoverDirty.js");
/* harmony import */ var _useMouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMouse */ "../node_modules/react-use/esm/useMouse.js");


var nullRef = { current: null };
var useMouseHovered = function (ref, options) {
    if (options === void 0) { options = {}; }
    var whenHovered = !!options.whenHovered;
    var bound = !!options.bound;
    var isHovered = Object(_useHoverDirty__WEBPACK_IMPORTED_MODULE_0__["default"])(ref, whenHovered);
    var state = Object(_useMouse__WEBPACK_IMPORTED_MODULE_1__["default"])(whenHovered && !isHovered ? nullRef : ref);
    if (bound) {
        state.elX = Math.max(0, Math.min(state.elX, state.elW));
        state.elY = Math.max(0, Math.min(state.elY, state.elH));
    }
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useMouseHovered);


/***/ }),

/***/ "../node_modules/react-use/esm/useMouseWheel.js":
/*!******************************************************!*\
  !*** ../node_modules/react-use/esm/useMouseWheel.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), mouseWheelScrolled = _a[0], setMouseWheelScrolled = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var updateScroll = function (e) {
            setMouseWheelScrolled(e.deltaY + mouseWheelScrolled);
        };
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'wheel', updateScroll, false);
        return function () { return Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'wheel', updateScroll); };
    });
    return mouseWheelScrolled;
});


/***/ }),

/***/ "../node_modules/react-use/esm/useMultiStateValidator.js":
/*!***************************************************************!*\
  !*** ../node_modules/react-use/esm/useMultiStateValidator.js ***!
  \***************************************************************/
/*! exports provided: useMultiStateValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMultiStateValidator", function() { return useMultiStateValidator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useMultiStateValidator(states, validator, initialValidity) {
    if (initialValidity === void 0) { initialValidity = [undefined]; }
    if (typeof states !== 'object') {
        throw new Error('states expected to be an object or array, got ' + typeof states);
    }
    var validatorInner = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(validator);
    var statesInner = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(states);
    validatorInner.current = validator;
    statesInner.current = states;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValidity), validity = _a[0], setValidity = _a[1];
    var validate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        if (validatorInner.current.length >= 2) {
            validatorInner.current(statesInner.current, setValidity);
        }
        else {
            setValidity(validatorInner.current(statesInner.current));
        }
    }, [setValidity]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        validate();
    }, Object.values(states));
    return [validity, validate];
}


/***/ }),

/***/ "../node_modules/react-use/esm/useNetworkState.js":
/*!********************************************************!*\
  !*** ../node_modules/react-use/esm/useNetworkState.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useNetworkState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var nav = _misc_util__WEBPACK_IMPORTED_MODULE_1__["isNavigator"] ? navigator : undefined;
var conn = nav && (nav.connection || nav.mozConnection || nav.webkitConnection);
function getConnectionState(previousState) {
    var online = nav === null || nav === void 0 ? void 0 : nav.onLine;
    var previousOnline = previousState === null || previousState === void 0 ? void 0 : previousState.online;
    return {
        online: online,
        previous: previousOnline,
        since: online !== previousOnline ? new Date() : previousState === null || previousState === void 0 ? void 0 : previousState.since,
        downlink: conn === null || conn === void 0 ? void 0 : conn.downlink,
        downlinkMax: conn === null || conn === void 0 ? void 0 : conn.downlinkMax,
        effectiveType: conn === null || conn === void 0 ? void 0 : conn.effectiveType,
        rtt: conn === null || conn === void 0 ? void 0 : conn.rtt,
        saveData: conn === null || conn === void 0 ? void 0 : conn.saveData,
        type: conn === null || conn === void 0 ? void 0 : conn.type,
    };
}
function useNetworkState(initialState) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState !== null && initialState !== void 0 ? initialState : getConnectionState), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var handleStateChange = function () {
            setState(getConnectionState);
        };
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'online', handleStateChange, { passive: true });
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'offline', handleStateChange, { passive: true });
        if (conn) {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(conn, 'change', handleStateChange, { passive: true });
        }
        return function () {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'online', handleStateChange);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'offline', handleStateChange);
            if (conn) {
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(conn, 'change', handleStateChange);
            }
        };
    }, []);
    return state;
}


/***/ }),

/***/ "../node_modules/react-use/esm/useNumber.js":
/*!**************************************************!*\
  !*** ../node_modules/react-use/esm/useNumber.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useCounter */ "../node_modules/react-use/esm/useCounter.js");

/* harmony default export */ __webpack_exports__["default"] = (_useCounter__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../node_modules/react-use/esm/useObservable.js":
/*!******************************************************!*\
  !*** ../node_modules/react-use/esm/useObservable.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "../node_modules/react-use/esm/useIsomorphicLayoutEffect.js");


function useObservable(observable$, initialValue) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue), value = _a[0], update = _a[1];
    Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        var s = observable$.subscribe(update);
        return function () { return s.unsubscribe(); };
    }, [observable$]);
    return value;
}
/* harmony default export */ __webpack_exports__["default"] = (useObservable);


/***/ }),

/***/ "../node_modules/react-use/esm/useOrientation.js":
/*!*******************************************************!*\
  !*** ../node_modules/react-use/esm/useOrientation.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var defaultState = {
    angle: 0,
    type: 'landscape-primary',
};
var useOrientation = function (initialState) {
    if (initialState === void 0) { initialState = defaultState; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var screen = window.screen;
        var mounted = true;
        var onChange = function () {
            if (mounted) {
                var orientation_1 = screen.orientation;
                if (orientation_1) {
                    var angle = orientation_1.angle, type = orientation_1.type;
                    setState({ angle: angle, type: type });
                }
                else if (window.orientation !== undefined) {
                    setState({
                        angle: typeof window.orientation === 'number' ? window.orientation : 0,
                        type: '',
                    });
                }
                else {
                    setState(initialState);
                }
            }
        };
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'orientationchange', onChange);
        onChange();
        return function () {
            mounted = false;
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'orientationchange', onChange);
        };
    }, []);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useOrientation);


/***/ }),

/***/ "../node_modules/react-use/esm/usePageLeave.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-use/esm/usePageLeave.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var usePageLeave = function (onPageLeave, args) {
    if (args === void 0) { args = []; }
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!onPageLeave) {
            return;
        }
        var handler = function (event) {
            event = event ? event : window.event;
            var from = event.relatedTarget || event.toElement;
            if (!from || from.nodeName === 'HTML') {
                onPageLeave();
            }
        };
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(document, 'mouseout', handler);
        return function () {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(document, 'mouseout', handler);
        };
    }, args);
};
/* harmony default export */ __webpack_exports__["default"] = (usePageLeave);


/***/ }),

/***/ "../node_modules/react-use/esm/usePermission.js":
/*!******************************************************!*\
  !*** ../node_modules/react-use/esm/usePermission.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


// const usePermission = <T extends PermissionDescriptor>(permissionDesc: T): IState => {
var usePermission = function (permissionDesc) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var mounted = true;
        var permissionStatus = null;
        var onChange = function () {
            if (!mounted) {
                return;
            }
            setState(function () { var _a; return (_a = permissionStatus === null || permissionStatus === void 0 ? void 0 : permissionStatus.state) !== null && _a !== void 0 ? _a : ''; });
        };
        navigator.permissions
            .query(permissionDesc)
            .then(function (status) {
            permissionStatus = status;
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(permissionStatus, 'change', onChange);
            onChange();
        })
            .catch(_misc_util__WEBPACK_IMPORTED_MODULE_1__["noop"]);
        return function () {
            permissionStatus && Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(permissionStatus, 'change', onChange);
            mounted = false;
            permissionStatus = null;
        };
    }, [permissionDesc]);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (usePermission);


/***/ }),

/***/ "../node_modules/react-use/esm/usePrevious.js":
/*!****************************************************!*\
  !*** ../node_modules/react-use/esm/usePrevious.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePrevious; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function usePrevious(state) {
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        ref.current = state;
    });
    return ref.current;
}


/***/ }),

/***/ "../node_modules/react-use/esm/usePreviousDistinct.js":
/*!************************************************************!*\
  !*** ../node_modules/react-use/esm/usePreviousDistinct.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePreviousDistinct; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useFirstMountState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useFirstMountState */ "../node_modules/react-use/esm/useFirstMountState.js");


var strictEquals = function (prev, next) { return prev === next; };
function usePreviousDistinct(value, compare) {
    if (compare === void 0) { compare = strictEquals; }
    var prevRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var curRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
    var isFirstMount = Object(_useFirstMountState__WEBPACK_IMPORTED_MODULE_1__["useFirstMountState"])();
    if (!isFirstMount && !compare(curRef.current, value)) {
        prevRef.current = curRef.current;
        curRef.current = value;
    }
    return prevRef.current;
}


/***/ }),

/***/ "../node_modules/react-use/esm/usePromise.js":
/*!***************************************************!*\
  !*** ../node_modules/react-use/esm/usePromise.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMountedState */ "../node_modules/react-use/esm/useMountedState.js");


var usePromise = function () {
    var isMounted = Object(_useMountedState__WEBPACK_IMPORTED_MODULE_1__["default"])();
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (promise) {
        return new Promise(function (resolve, reject) {
            var onValue = function (value) {
                isMounted() && resolve(value);
            };
            var onError = function (error) {
                isMounted() && reject(error);
            };
            promise.then(onValue, onError);
        });
    }, []);
};
/* harmony default export */ __webpack_exports__["default"] = (usePromise);


/***/ }),

/***/ "../node_modules/react-use/esm/useQueue.js":
/*!*************************************************!*\
  !*** ../node_modules/react-use/esm/useQueue.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var useQueue = function (initialValue) {
    if (initialValue === void 0) { initialValue = []; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialValue), state = _a[0], set = _a[1];
    return {
        add: function (value) {
            set(function (queue) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(queue, [value]); });
        },
        remove: function () {
            var result;
            set(function (_a) {
                var first = _a[0], rest = _a.slice(1);
                result = first;
                return rest;
            });
            return result;
        },
        get first() {
            return state[0];
        },
        get last() {
            return state[state.length - 1];
        },
        get size() {
            return state.length;
        },
    };
};
/* harmony default export */ __webpack_exports__["default"] = (useQueue);


/***/ }),

/***/ "../node_modules/react-use/esm/useRaf.js":
/*!***********************************************!*\
  !*** ../node_modules/react-use/esm/useRaf.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "../node_modules/react-use/esm/useIsomorphicLayoutEffect.js");


var useRaf = function (ms, delay) {
    if (ms === void 0) { ms = 1e12; }
    if (delay === void 0) { delay = 0; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), elapsed = _a[0], set = _a[1];
    Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        var raf;
        var timerStop;
        var start;
        var onFrame = function () {
            var time = Math.min(1, (Date.now() - start) / ms);
            set(time);
            loop();
        };
        var loop = function () {
            raf = requestAnimationFrame(onFrame);
        };
        var onStart = function () {
            timerStop = setTimeout(function () {
                cancelAnimationFrame(raf);
                set(1);
            }, ms);
            start = Date.now();
            loop();
        };
        var timerDelay = setTimeout(onStart, delay);
        return function () {
            clearTimeout(timerStop);
            clearTimeout(timerDelay);
            cancelAnimationFrame(raf);
        };
    }, [ms, delay]);
    return elapsed;
};
/* harmony default export */ __webpack_exports__["default"] = (useRaf);


/***/ }),

/***/ "../node_modules/react-use/esm/useRafLoop.js":
/*!***************************************************!*\
  !*** ../node_modules/react-use/esm/useRafLoop.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useRafLoop; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useRafLoop(callback, initiallyActive) {
    if (initiallyActive === void 0) { initiallyActive = true; }
    var raf = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var rafActivity = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    var rafCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(callback);
    rafCallback.current = callback;
    var step = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (time) {
        if (rafActivity.current) {
            rafCallback.current(time);
            raf.current = requestAnimationFrame(step);
        }
    }, []);
    var result = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        return [
            function () {
                // stop
                if (rafActivity.current) {
                    rafActivity.current = false;
                    raf.current && cancelAnimationFrame(raf.current);
                }
            },
            function () {
                // start
                if (!rafActivity.current) {
                    rafActivity.current = true;
                    raf.current = requestAnimationFrame(step);
                }
            },
            function () { return rafActivity.current; },
        ];
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (initiallyActive) {
            result[1]();
        }
        return result[0];
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return result;
}


/***/ }),

/***/ "../node_modules/react-use/esm/useRafState.js":
/*!****************************************************!*\
  !*** ../node_modules/react-use/esm/useRafState.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUnmount */ "../node_modules/react-use/esm/useUnmount.js");


var useRafState = function (initialState) {
    var frame = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), state = _a[0], setState = _a[1];
    var setRafState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value) {
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(function () {
            setState(value);
        });
    }, []);
    Object(_useUnmount__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        cancelAnimationFrame(frame.current);
    });
    return [state, setRafState];
};
/* harmony default export */ __webpack_exports__["default"] = (useRafState);


/***/ }),

/***/ "../node_modules/react-use/esm/useRendersCount.js":
/*!********************************************************!*\
  !*** ../node_modules/react-use/esm/useRendersCount.js ***!
  \********************************************************/
/*! exports provided: useRendersCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRendersCount", function() { return useRendersCount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useRendersCount() {
    return ++Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0).current;
}


/***/ }),

/***/ "../node_modules/react-use/esm/useScratch.js":
/*!***************************************************!*\
  !*** ../node_modules/react-use/esm/useScratch.js ***!
  \***************************************************/
/*! exports provided: ScratchSensor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScratchSensor", function() { return ScratchSensor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_universal_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-universal-interface */ "../node_modules/react-universal-interface/lib/index.js");
/* harmony import */ var react_universal_interface__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_universal_interface__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useLatest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useLatest */ "../node_modules/react-use/esm/useLatest.js");
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");





var useScratch = function (params) {
    if (params === void 0) { params = {}; }
    var disabled = params.disabled;
    var paramsRef = Object(_useLatest__WEBPACK_IMPORTED_MODULE_3__["default"])(params);
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({ isScratching: false }), state = _a[0], setState = _a[1];
    var refState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(state);
    var refScratching = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
    var refAnimationFrame = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null), el = _b[0], setEl = _b[1];
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        if (disabled)
            return;
        if (!el)
            return;
        var onMoveEvent = function (docX, docY) {
            cancelAnimationFrame(refAnimationFrame.current);
            refAnimationFrame.current = requestAnimationFrame(function () {
                var _a = el.getBoundingClientRect(), left = _a.left, top = _a.top;
                var elX = left + window.scrollX;
                var elY = top + window.scrollY;
                var x = docX - elX;
                var y = docY - elY;
                setState(function (oldState) {
                    var newState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, oldState), { dx: x - (oldState.x || 0), dy: y - (oldState.y || 0), end: Date.now(), isScratching: true });
                    refState.current = newState;
                    (paramsRef.current.onScratch || _misc_util__WEBPACK_IMPORTED_MODULE_4__["noop"])(newState);
                    return newState;
                });
            });
        };
        var onMouseMove = function (event) {
            onMoveEvent(event.pageX, event.pageY);
        };
        var onTouchMove = function (event) {
            onMoveEvent(event.changedTouches[0].pageX, event.changedTouches[0].pageY);
        };
        var onMouseUp;
        var onTouchEnd;
        var stopScratching = function () {
            if (!refScratching.current)
                return;
            refScratching.current = false;
            refState.current = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, refState.current), { isScratching: false });
            (paramsRef.current.onScratchEnd || _misc_util__WEBPACK_IMPORTED_MODULE_4__["noop"])(refState.current);
            setState({ isScratching: false });
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["off"])(window, 'mousemove', onMouseMove);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["off"])(window, 'touchmove', onTouchMove);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["off"])(window, 'mouseup', onMouseUp);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["off"])(window, 'touchend', onTouchEnd);
        };
        onMouseUp = stopScratching;
        onTouchEnd = stopScratching;
        var startScratching = function (docX, docY) {
            if (!refScratching.current)
                return;
            var _a = el.getBoundingClientRect(), left = _a.left, top = _a.top;
            var elX = left + window.scrollX;
            var elY = top + window.scrollY;
            var x = docX - elX;
            var y = docY - elY;
            var time = Date.now();
            var newState = {
                isScratching: true,
                start: time,
                end: time,
                docX: docX,
                docY: docY,
                x: x,
                y: y,
                dx: 0,
                dy: 0,
                elH: el.offsetHeight,
                elW: el.offsetWidth,
                elX: elX,
                elY: elY,
            };
            refState.current = newState;
            (paramsRef.current.onScratchStart || _misc_util__WEBPACK_IMPORTED_MODULE_4__["noop"])(newState);
            setState(newState);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["on"])(window, 'mousemove', onMouseMove);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["on"])(window, 'touchmove', onTouchMove);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["on"])(window, 'mouseup', onMouseUp);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["on"])(window, 'touchend', onTouchEnd);
        };
        var onMouseDown = function (event) {
            refScratching.current = true;
            startScratching(event.pageX, event.pageY);
        };
        var onTouchStart = function (event) {
            refScratching.current = true;
            startScratching(event.changedTouches[0].pageX, event.changedTouches[0].pageY);
        };
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["on"])(el, 'mousedown', onMouseDown);
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["on"])(el, 'touchstart', onTouchStart);
        return function () {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["off"])(el, 'mousedown', onMouseDown);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["off"])(el, 'touchstart', onTouchStart);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["off"])(window, 'mousemove', onMouseMove);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["off"])(window, 'touchmove', onTouchMove);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["off"])(window, 'mouseup', onMouseUp);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_4__["off"])(window, 'touchend', onTouchEnd);
            if (refAnimationFrame.current)
                cancelAnimationFrame(refAnimationFrame.current);
            refAnimationFrame.current = null;
            refScratching.current = false;
            refState.current = { isScratching: false };
            setState(refState.current);
        };
    }, [el, disabled, paramsRef]);
    return [setEl, state];
};
var ScratchSensor = function (props) {
    var children = props.children, params = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(props, ["children"]);
    var _a = useScratch(params), ref = _a[0], state = _a[1];
    var element = Object(react_universal_interface__WEBPACK_IMPORTED_MODULE_2__["render"])(props, state);
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"])(element, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, element.props), { ref: function (el) {
            if (element.props.ref) {
                if (typeof element.props.ref === 'object')
                    element.props.ref.current = el;
                if (typeof element.props.ref === 'function')
                    element.props.ref(el);
            }
            ref(el);
        } }));
};
/* harmony default export */ __webpack_exports__["default"] = (useScratch);


/***/ }),

/***/ "../node_modules/react-use/esm/useScroll.js":
/*!**************************************************!*\
  !*** ../node_modules/react-use/esm/useScroll.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useRafState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRafState */ "../node_modules/react-use/esm/useRafState.js");
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");



var useScroll = function (ref) {
    if (true) {
        if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
            console.error('`useScroll` expects a single ref argument.');
        }
    }
    var _a = Object(_useRafState__WEBPACK_IMPORTED_MODULE_1__["default"])({
        x: 0,
        y: 0,
    }), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var handler = function () {
            if (ref.current) {
                setState({
                    x: ref.current.scrollLeft,
                    y: ref.current.scrollTop,
                });
            }
        };
        if (ref.current) {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["on"])(ref.current, 'scroll', handler, {
                capture: false,
                passive: true,
            });
        }
        return function () {
            if (ref.current) {
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["off"])(ref.current, 'scroll', handler);
            }
        };
    }, [ref]);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useScroll);


/***/ }),

/***/ "../node_modules/react-use/esm/useScrollbarWidth.js":
/*!**********************************************************!*\
  !*** ../node_modules/react-use/esm/useScrollbarWidth.js ***!
  \**********************************************************/
/*! exports provided: useScrollbarWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScrollbarWidth", function() { return useScrollbarWidth; });
/* harmony import */ var _xobotyi_scrollbar_width__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @xobotyi/scrollbar-width */ "../node_modules/@xobotyi/scrollbar-width/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useScrollbarWidth() {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(_xobotyi_scrollbar_width__WEBPACK_IMPORTED_MODULE_0__["scrollbarWidth"])()), sbw = _a[0], setSbw = _a[1];
    // this needed to ensure the scrollbar width in case hook called before the DOM is ready
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        if (typeof sbw !== 'undefined') {
            return;
        }
        var raf = requestAnimationFrame(function () {
            setSbw(Object(_xobotyi_scrollbar_width__WEBPACK_IMPORTED_MODULE_0__["scrollbarWidth"])());
        });
        return function () { return cancelAnimationFrame(raf); };
    }, []);
    return sbw;
}


/***/ }),

/***/ "../node_modules/react-use/esm/useScrolling.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-use/esm/useScrolling.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var useScrolling = function (ref) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), scrolling = _a[0], setScrolling = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (ref.current) {
            var scrollingTimeout_1;
            var handleScrollEnd_1 = function () {
                setScrolling(false);
            };
            var handleScroll_1 = function () {
                setScrolling(true);
                clearTimeout(scrollingTimeout_1);
                scrollingTimeout_1 = setTimeout(function () { return handleScrollEnd_1(); }, 150);
            };
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(ref.current, 'scroll', handleScroll_1, false);
            return function () {
                if (ref.current) {
                    Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(ref.current, 'scroll', handleScroll_1, false);
                }
            };
        }
        return function () { };
    }, [ref]);
    return scrolling;
};
/* harmony default export */ __webpack_exports__["default"] = (useScrolling);


/***/ }),

/***/ "../node_modules/react-use/esm/useSearchParam.js":
/*!*******************************************************!*\
  !*** ../node_modules/react-use/esm/useSearchParam.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var getValue = function (search, param) { return new URLSearchParams(search).get(param); };
var useSearchParam = function (param) {
    var location = window.location;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () { return getValue(location.search, param); }), value = _a[0], setValue = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var onChange = function () {
            setValue(getValue(location.search, param));
        };
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'popstate', onChange);
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'pushstate', onChange);
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'replacestate', onChange);
        return function () {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'popstate', onChange);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'pushstate', onChange);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'replacestate', onChange);
        };
    }, []);
    return value;
};
var useSearchParamServer = function () { return null; };
/* harmony default export */ __webpack_exports__["default"] = (_misc_util__WEBPACK_IMPORTED_MODULE_1__["isBrowser"] ? useSearchParam : useSearchParamServer);


/***/ }),

/***/ "../node_modules/react-use/esm/useSessionStorage.js":
/*!**********************************************************!*\
  !*** ../node_modules/react-use/esm/useSessionStorage.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var useSessionStorage = function (key, initialValue, raw) {
    if (!_misc_util__WEBPACK_IMPORTED_MODULE_1__["isBrowser"]) {
        return [initialValue, function () { }];
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
        try {
            var sessionStorageValue = sessionStorage.getItem(key);
            if (typeof sessionStorageValue !== 'string') {
                sessionStorage.setItem(key, raw ? String(initialValue) : JSON.stringify(initialValue));
                return initialValue;
            }
            else {
                return raw ? sessionStorageValue : JSON.parse(sessionStorageValue || 'null');
            }
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // sessionStorage can throw. JSON.parse and JSON.stringify
            // cat throw, too.
            return initialValue;
        }
    }), state = _a[0], setState = _a[1];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        try {
            var serializedState = raw ? String(state) : JSON.stringify(state);
            sessionStorage.setItem(key, serializedState);
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // sessionStorage can throw. Also JSON.stringify can throw.
        }
    });
    return [state, setState];
};
/* harmony default export */ __webpack_exports__["default"] = (useSessionStorage);


/***/ }),

/***/ "../node_modules/react-use/esm/useSet.js":
/*!***********************************************!*\
  !*** ../node_modules/react-use/esm/useSet.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var useSet = function (initialSet) {
    if (initialSet === void 0) { initialSet = new Set(); }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialSet), set = _a[0], setSet = _a[1];
    var stableActions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
        var add = function (item) { return setSet(function (prevSet) { return new Set(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(Array.from(prevSet), [item])); }); };
        var remove = function (item) {
            return setSet(function (prevSet) { return new Set(Array.from(prevSet).filter(function (i) { return i !== item; })); });
        };
        var toggle = function (item) {
            return setSet(function (prevSet) {
                return prevSet.has(item)
                    ? new Set(Array.from(prevSet).filter(function (i) { return i !== item; }))
                    : new Set(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(Array.from(prevSet), [item]));
            });
        };
        return { add: add, remove: remove, toggle: toggle, reset: function () { return setSet(initialSet); } };
    }, [setSet]);
    var utils = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ has: Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (item) { return set.has(item); }, [set]) }, stableActions);
    return [set, utils];
};
/* harmony default export */ __webpack_exports__["default"] = (useSet);


/***/ }),

/***/ "../node_modules/react-use/esm/useSetState.js":
/*!****************************************************!*\
  !*** ../node_modules/react-use/esm/useSetState.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useSetState = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), state = _a[0], set = _a[1];
    var setState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (patch) {
        set(function (prevState) {
            return Object.assign({}, prevState, patch instanceof Function ? patch(prevState) : patch);
        });
    }, []);
    return [state, setState];
};
/* harmony default export */ __webpack_exports__["default"] = (useSetState);


/***/ }),

/***/ "../node_modules/react-use/esm/useShallowCompareEffect.js":
/*!****************************************************************!*\
  !*** ../node_modules/react-use/esm/useShallowCompareEffect.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fast_shallow_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-shallow-equal */ "../node_modules/fast-shallow-equal/index.js");
/* harmony import */ var fast_shallow_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_shallow_equal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useCustomCompareEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCustomCompareEffect */ "../node_modules/react-use/esm/useCustomCompareEffect.js");


var isPrimitive = function (val) { return val !== Object(val); };
var shallowEqualDepsList = function (prevDeps, nextDeps) {
    return prevDeps.every(function (dep, index) { return Object(fast_shallow_equal__WEBPACK_IMPORTED_MODULE_0__["equal"])(dep, nextDeps[index]); });
};
var useShallowCompareEffect = function (effect, deps) {
    if (true) {
        if (!(deps instanceof Array) || !deps.length) {
            console.warn('`useShallowCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
        }
        if (deps.every(isPrimitive)) {
            console.warn('`useShallowCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
        }
    }
    Object(_useCustomCompareEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(effect, deps, shallowEqualDepsList);
};
/* harmony default export */ __webpack_exports__["default"] = (useShallowCompareEffect);


/***/ }),

/***/ "../node_modules/react-use/esm/useSize.js":
/*!************************************************!*\
  !*** ../node_modules/react-use/esm/useSize.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");



var useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"], useEffect = react__WEBPACK_IMPORTED_MODULE_1__["useEffect"], useRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"];
var DRAF = function (callback) { return setTimeout(callback, 35); };
var useSize = function (element, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.width, width = _c === void 0 ? Infinity : _c, _d = _b.height, height = _d === void 0 ? Infinity : _d;
    if (!_misc_util__WEBPACK_IMPORTED_MODULE_2__["isBrowser"]) {
        return [
            typeof element === 'function' ? element({ width: width, height: height }) : element,
            { width: width, height: height },
        ];
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var _e = useState({ width: width, height: height }), state = _e[0], setState = _e[1];
    if (typeof element === 'function') {
        element = element(state);
    }
    var style = element.props.style || {};
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var ref = useRef(null);
    var window = null;
    var setSize = function () {
        var iframe = ref.current;
        var size = iframe
            ? {
                width: iframe.offsetWidth,
                height: iframe.offsetHeight,
            }
            : { width: width, height: height };
        setState(size);
    };
    var onWindow = function (windowToListenOn) {
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["on"])(windowToListenOn, 'resize', setSize);
        DRAF(setSize);
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(function () {
        var iframe = ref.current;
        if (!iframe) {
            // iframe will be undefined if component is already unmounted
            return;
        }
        if (iframe.contentWindow) {
            window = iframe.contentWindow;
            onWindow(window);
        }
        else {
            var onLoad_1 = function () {
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["on"])(iframe, 'load', onLoad_1);
                window = iframe.contentWindow;
                onWindow(window);
            };
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["off"])(iframe, 'load', onLoad_1);
        }
        return function () {
            if (window && window.removeEventListener) {
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["off"])(window, 'resize', setSize);
            }
        };
    }, []);
    style.position = 'relative';
    var sized = react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"].apply(react__WEBPACK_IMPORTED_MODULE_1__, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([element, { style: style }], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]('iframe', {
            ref: ref,
            style: {
                background: 'transparent',
                border: 'none',
                height: '100%',
                left: 0,
                position: 'absolute',
                top: 0,
                width: '100%',
                zIndex: -1,
            },
        })
    ], react__WEBPACK_IMPORTED_MODULE_1__["Children"].toArray(element.props.children))));
    return [sized, state];
};
/* harmony default export */ __webpack_exports__["default"] = (useSize);


/***/ }),

/***/ "../node_modules/react-use/esm/useSlider.js":
/*!**************************************************!*\
  !*** ../node_modules/react-use/esm/useSlider.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");
/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useMountedState */ "../node_modules/react-use/esm/useMountedState.js");
/* harmony import */ var _useSetState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useSetState */ "../node_modules/react-use/esm/useSetState.js");




var useSlider = function (ref, options) {
    if (options === void 0) { options = {}; }
    var isMounted = Object(_useMountedState__WEBPACK_IMPORTED_MODULE_2__["default"])();
    var isSliding = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    var valueRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
    var frame = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
    var _a = Object(_useSetState__WEBPACK_IMPORTED_MODULE_3__["default"])({
        isSliding: false,
        value: 0,
    }), state = _a[0], setState = _a[1];
    valueRef.current = state.value;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (_misc_util__WEBPACK_IMPORTED_MODULE_1__["isBrowser"]) {
            var styles = options.styles === undefined ? true : options.styles;
            var reverse_1 = options.reverse === undefined ? false : options.reverse;
            if (ref.current && styles) {
                ref.current.style.userSelect = 'none';
            }
            var startScrubbing_1 = function () {
                if (!isSliding.current && isMounted()) {
                    (options.onScrubStart || _misc_util__WEBPACK_IMPORTED_MODULE_1__["noop"])();
                    isSliding.current = true;
                    setState({ isSliding: true });
                    bindEvents_1();
                }
            };
            var stopScrubbing_1 = function () {
                if (isSliding.current && isMounted()) {
                    (options.onScrubStop || _misc_util__WEBPACK_IMPORTED_MODULE_1__["noop"])(valueRef.current);
                    isSliding.current = false;
                    setState({ isSliding: false });
                    unbindEvents_1();
                }
            };
            var onMouseDown_1 = function (event) {
                startScrubbing_1();
                onMouseMove_1(event);
            };
            var onMouseMove_1 = options.vertical
                ? function (event) { return onScrub_1(event.clientY); }
                : function (event) { return onScrub_1(event.clientX); };
            var onTouchStart_1 = function (event) {
                startScrubbing_1();
                onTouchMove_1(event);
            };
            var onTouchMove_1 = options.vertical
                ? function (event) { return onScrub_1(event.changedTouches[0].clientY); }
                : function (event) { return onScrub_1(event.changedTouches[0].clientX); };
            var bindEvents_1 = function () {
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(document, 'mousemove', onMouseMove_1);
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(document, 'mouseup', stopScrubbing_1);
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(document, 'touchmove', onTouchMove_1);
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(document, 'touchend', stopScrubbing_1);
            };
            var unbindEvents_1 = function () {
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(document, 'mousemove', onMouseMove_1);
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(document, 'mouseup', stopScrubbing_1);
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(document, 'touchmove', onTouchMove_1);
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(document, 'touchend', stopScrubbing_1);
            };
            var onScrub_1 = function (clientXY) {
                cancelAnimationFrame(frame.current);
                frame.current = requestAnimationFrame(function () {
                    if (isMounted() && ref.current) {
                        var rect = ref.current.getBoundingClientRect();
                        var pos = options.vertical ? rect.top : rect.left;
                        var length_1 = options.vertical ? rect.height : rect.width;
                        // Prevent returning 0 when element is hidden by CSS
                        if (!length_1) {
                            return;
                        }
                        var value = (clientXY - pos) / length_1;
                        if (value > 1) {
                            value = 1;
                        }
                        else if (value < 0) {
                            value = 0;
                        }
                        if (reverse_1) {
                            value = 1 - value;
                        }
                        setState({
                            value: value,
                        });
                        (options.onScrub || _misc_util__WEBPACK_IMPORTED_MODULE_1__["noop"])(value);
                    }
                });
            };
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(ref.current, 'mousedown', onMouseDown_1);
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(ref.current, 'touchstart', onTouchStart_1);
            return function () {
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(ref.current, 'mousedown', onMouseDown_1);
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(ref.current, 'touchstart', onTouchStart_1);
            };
        }
        else {
            return undefined;
        }
    }, [ref, options.vertical]);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useSlider);


/***/ }),

/***/ "../node_modules/react-use/esm/useSpeech.js":
/*!**************************************************!*\
  !*** ../node_modules/react-use/esm/useSpeech.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var Status;
(function (Status) {
    Status[Status["init"] = 0] = "init";
    Status[Status["play"] = 1] = "play";
    Status[Status["pause"] = 2] = "pause";
    Status[Status["end"] = 3] = "end";
})(Status || (Status = {}));
var useSpeech = function (text, options) {
    var mounted = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(function () {
        var _a = options.voice || {}, _b = _a.lang, lang = _b === void 0 ? 'default' : _b, _c = _a.name, name = _c === void 0 ? '' : _c;
        return {
            isPlaying: false,
            status: Status[Status.init],
            lang: options.lang || 'default',
            voiceInfo: { lang: lang, name: name },
            rate: options.rate || 1,
            pitch: options.pitch || 1,
            volume: options.volume || 1,
        };
    }), state = _a[0], setState = _a[1];
    var handlePlay = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
        if (!mounted.current) {
            return;
        }
        setState(function (preState) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, preState), { isPlaying: true, status: Status[Status.play] });
        });
    }, []);
    var handlePause = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
        if (!mounted.current) {
            return;
        }
        setState(function (preState) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, preState), { isPlaying: false, status: Status[Status.pause] });
        });
    }, []);
    var handleEnd = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
        if (!mounted.current) {
            return;
        }
        setState(function (preState) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, preState), { isPlaying: false, status: Status[Status.end] });
        });
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        mounted.current = true;
        var utterance = new SpeechSynthesisUtterance(text);
        options.lang && (utterance.lang = options.lang);
        options.voice && (utterance.voice = options.voice);
        utterance.rate = options.rate || 1;
        utterance.pitch = options.pitch || 1;
        utterance.volume = options.volume || 1;
        utterance.onstart = handlePlay;
        utterance.onpause = handlePause;
        utterance.onresume = handlePlay;
        utterance.onend = handleEnd;
        window.speechSynthesis.speak(utterance);
        return function () {
            mounted.current = false;
        };
    }, []);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useSpeech);


/***/ }),

/***/ "../node_modules/react-use/esm/useStartTyping.js":
/*!*******************************************************!*\
  !*** ../node_modules/react-use/esm/useStartTyping.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "../node_modules/react-use/esm/useIsomorphicLayoutEffect.js");
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var isFocusedElementEditable = function () {
    var activeElement = document.activeElement, body = document.body;
    if (!activeElement) {
        return false;
    }
    // If not element has focus, we assume it is not editable, too.
    if (activeElement === body) {
        return false;
    }
    // Assume <input> and <textarea> elements are editable.
    switch (activeElement.tagName) {
        case 'INPUT':
        case 'TEXTAREA':
            return true;
    }
    // Check if any other focused element id editable.
    return activeElement.hasAttribute('contenteditable');
};
var isTypedCharGood = function (_a) {
    var keyCode = _a.keyCode, metaKey = _a.metaKey, ctrlKey = _a.ctrlKey, altKey = _a.altKey;
    if (metaKey || ctrlKey || altKey) {
        return false;
    }
    // 0...9
    if (keyCode >= 48 && keyCode <= 57) {
        return true;
    }
    // a...z
    if (keyCode >= 65 && keyCode <= 90) {
        return true;
    }
    // All other keys.
    return false;
};
var useStartTyping = function (onStartTyping) {
    Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
        var keydown = function (event) {
            !isFocusedElementEditable() && isTypedCharGood(event) && onStartTyping(event);
        };
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(document, 'keydown', keydown);
        return function () {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(document, 'keydown', keydown);
        };
    }, []);
};
/* harmony default export */ __webpack_exports__["default"] = (useStartTyping);


/***/ }),

/***/ "../node_modules/react-use/esm/useStateList.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-use/esm/useStateList.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useStateList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useMountedState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useMountedState */ "../node_modules/react-use/esm/useMountedState.js");
/* harmony import */ var _useUpdate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useUpdate */ "../node_modules/react-use/esm/useUpdate.js");
/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useUpdateEffect */ "../node_modules/react-use/esm/useUpdateEffect.js");





function useStateList(stateSet) {
    if (stateSet === void 0) { stateSet = []; }
    var isMounted = Object(_useMountedState__WEBPACK_IMPORTED_MODULE_2__["default"])();
    var update = Object(_useUpdate__WEBPACK_IMPORTED_MODULE_3__["default"])();
    var index = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(0);
    // If new state list is shorter that before - switch to the last element
    Object(_useUpdateEffect__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
        if (stateSet.length <= index.current) {
            index.current = stateSet.length - 1;
            update();
        }
    }, [stateSet.length]);
    var actions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () { return ({
        next: function () { return actions.setStateAt(index.current + 1); },
        prev: function () { return actions.setStateAt(index.current - 1); },
        setStateAt: function (newIndex) {
            // do nothing on unmounted component
            if (!isMounted())
                return;
            // do nothing on empty states list
            if (!stateSet.length)
                return;
            // in case new index is equal current - do nothing
            if (newIndex === index.current)
                return;
            // it gives the ability to travel through the left and right borders.
            // 4ex: if list contains 5 elements, attempt to set index 9 will bring use to 5th element
            // in case of negative index it will start counting from the right, so -17 will bring us to 4th element
            index.current =
                newIndex >= 0
                    ? newIndex % stateSet.length
                    : stateSet.length + (newIndex % stateSet.length);
            update();
        },
        setState: function (state) {
            // do nothing on unmounted component
            if (!isMounted())
                return;
            var newIndex = stateSet.length ? stateSet.indexOf(state) : -1;
            if (newIndex === -1) {
                throw new Error("State '" + state + "' is not a valid state (does not exist in state list)");
            }
            index.current = newIndex;
            update();
        },
    }); }, [stateSet]);
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ state: stateSet[index.current], currentIndex: index.current }, actions);
}


/***/ }),

/***/ "../node_modules/react-use/esm/useStateValidator.js":
/*!**********************************************************!*\
  !*** ../node_modules/react-use/esm/useStateValidator.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useStateValidator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useStateValidator(state, validator, initialState) {
    if (initialState === void 0) { initialState = [undefined]; }
    var validatorInner = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(validator);
    var stateInner = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(state);
    validatorInner.current = validator;
    stateInner.current = state;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), validity = _a[0], setValidity = _a[1];
    var validate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        if (validatorInner.current.length >= 2) {
            validatorInner.current(stateInner.current, setValidity);
        }
        else {
            setValidity(validatorInner.current(stateInner.current));
        }
    }, [setValidity]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        validate();
    }, [state]);
    return [validity, validate];
}


/***/ }),

/***/ "../node_modules/react-use/esm/useStateWithHistory.js":
/*!************************************************************!*\
  !*** ../node_modules/react-use/esm/useStateWithHistory.js ***!
  \************************************************************/
/*! exports provided: useStateWithHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStateWithHistory", function() { return useStateWithHistory; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useFirstMountState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useFirstMountState */ "../node_modules/react-use/esm/useFirstMountState.js");
/* harmony import */ var _misc_hookState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/hookState */ "../node_modules/react-use/esm/misc/hookState.js");



function useStateWithHistory(initialState, capacity, initialHistory) {
    if (capacity === void 0) { capacity = 10; }
    if (capacity < 1) {
        throw new Error("Capacity has to be greater than 1, got '" + capacity + "'");
    }
    var isFirstMount = Object(_useFirstMountState__WEBPACK_IMPORTED_MODULE_1__["useFirstMountState"])();
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState), state = _a[0], innerSetState = _a[1];
    var history = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])((initialHistory !== null && initialHistory !== void 0 ? initialHistory : []));
    var historyPosition = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
    // do the states manipulation only on first mount, no sense to load re-renders with useless calculations
    if (isFirstMount) {
        if (history.current.length) {
            // if last element of history !== initial - push initial to history
            if (history.current[history.current.length - 1] !== initialState) {
                history.current.push(initialState);
            }
            // if initial history bigger that capacity - crop the first elements out
            if (history.current.length > capacity) {
                history.current = history.current.slice(history.current.length - capacity);
            }
        }
        else {
            // initiate the history with initial state
            history.current.push(initialState);
        }
        historyPosition.current = history.current.length && history.current.length - 1;
    }
    var setState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (newState) {
        innerSetState(function (currentState) {
            newState = Object(_misc_hookState__WEBPACK_IMPORTED_MODULE_2__["resolveHookState"])(newState, currentState);
            // is state has changed
            if (newState !== currentState) {
                // if current position is not the last - pop element to the right
                if (historyPosition.current < history.current.length - 1) {
                    history.current = history.current.slice(0, historyPosition.current + 1);
                }
                historyPosition.current = history.current.push(newState) - 1;
                // if capacity is reached - shift first elements
                if (history.current.length > capacity) {
                    history.current = history.current.slice(history.current.length - capacity);
                }
            }
            return newState;
        });
    }, [state, capacity]);
    var historyState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return ({
        history: history.current,
        position: historyPosition.current,
        capacity: capacity,
        back: function (amount) {
            if (amount === void 0) { amount = 1; }
            // don't do anything if we already at the left border
            if (!historyPosition.current) {
                return;
            }
            innerSetState(function () {
                historyPosition.current -= Math.min(amount, historyPosition.current);
                return history.current[historyPosition.current];
            });
        },
        forward: function (amount) {
            if (amount === void 0) { amount = 1; }
            // don't do anything if we already at the right border
            if (historyPosition.current === history.current.length - 1) {
                return;
            }
            innerSetState(function () {
                historyPosition.current = Math.min(historyPosition.current + amount, history.current.length - 1);
                return history.current[historyPosition.current];
            });
        },
        go: function (position) {
            if (position === historyPosition.current) {
                return;
            }
            innerSetState(function () {
                historyPosition.current =
                    position < 0
                        ? Math.max(history.current.length + position, 0)
                        : Math.min(history.current.length - 1, position);
                return history.current[historyPosition.current];
            });
        },
    }); }, [state]);
    return [state, setState, historyState];
}


/***/ }),

/***/ "../node_modules/react-use/esm/useThrottle.js":
/*!****************************************************!*\
  !*** ../node_modules/react-use/esm/useThrottle.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUnmount */ "../node_modules/react-use/esm/useUnmount.js");


var useThrottle = function (value, ms) {
    if (ms === void 0) { ms = 200; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value), state = _a[0], setState = _a[1];
    var timeout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var nextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var hasNextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!timeout.current) {
            setState(value);
            var timeoutCallback_1 = function () {
                if (hasNextValue.current) {
                    hasNextValue.current = false;
                    setState(nextValue.current);
                    timeout.current = setTimeout(timeoutCallback_1, ms);
                }
                else {
                    timeout.current = undefined;
                }
            };
            timeout.current = setTimeout(timeoutCallback_1, ms);
        }
        else {
            nextValue.current = value;
            hasNextValue.current = true;
        }
    }, [value]);
    Object(_useUnmount__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        timeout.current && clearTimeout(timeout.current);
    });
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useThrottle);


/***/ }),

/***/ "../node_modules/react-use/esm/useThrottleFn.js":
/*!******************************************************!*\
  !*** ../node_modules/react-use/esm/useThrottleFn.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUnmount */ "../node_modules/react-use/esm/useUnmount.js");


var useThrottleFn = function (fn, ms, args) {
    if (ms === void 0) { ms = 200; }
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), state = _a[0], setState = _a[1];
    var timeout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var nextArgs = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!timeout.current) {
            setState(fn.apply(void 0, args));
            var timeoutCallback_1 = function () {
                if (nextArgs.current) {
                    setState(fn.apply(void 0, nextArgs.current));
                    nextArgs.current = undefined;
                    timeout.current = setTimeout(timeoutCallback_1, ms);
                }
                else {
                    timeout.current = undefined;
                }
            };
            timeout.current = setTimeout(timeoutCallback_1, ms);
        }
        else {
            nextArgs.current = args;
        }
    }, args);
    Object(_useUnmount__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        timeout.current && clearTimeout(timeout.current);
    });
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useThrottleFn);


/***/ }),

/***/ "../node_modules/react-use/esm/useTimeout.js":
/*!***************************************************!*\
  !*** ../node_modules/react-use/esm/useTimeout.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTimeout; });
/* harmony import */ var _useTimeoutFn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useTimeoutFn */ "../node_modules/react-use/esm/useTimeoutFn.js");
/* harmony import */ var _useUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUpdate */ "../node_modules/react-use/esm/useUpdate.js");


function useTimeout(ms) {
    if (ms === void 0) { ms = 0; }
    var update = Object(_useUpdate__WEBPACK_IMPORTED_MODULE_1__["default"])();
    return Object(_useTimeoutFn__WEBPACK_IMPORTED_MODULE_0__["default"])(update, ms);
}


/***/ }),

/***/ "../node_modules/react-use/esm/useTimeoutFn.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-use/esm/useTimeoutFn.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTimeoutFn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useTimeoutFn(fn, ms) {
    if (ms === void 0) { ms = 0; }
    var ready = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    var timeout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var callback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(fn);
    var isReady = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () { return ready.current; }, []);
    var set = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        ready.current = false;
        timeout.current && clearTimeout(timeout.current);
        timeout.current = setTimeout(function () {
            ready.current = true;
            callback.current();
        }, ms);
    }, [ms]);
    var clear = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        ready.current = null;
        timeout.current && clearTimeout(timeout.current);
    }, []);
    // update ref when function changes
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        callback.current = fn;
    }, [fn]);
    // set on mount, clear on unmount
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        set();
        return clear;
    }, [ms]);
    return [isReady, clear, set];
}


/***/ }),

/***/ "../node_modules/react-use/esm/useTitle.js":
/*!*************************************************!*\
  !*** ../node_modules/react-use/esm/useTitle.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DEFAULT_USE_TITLE_OPTIONS = {
    restoreOnUnmount: false,
};
function useTitle(title, options) {
    if (options === void 0) { options = DEFAULT_USE_TITLE_OPTIONS; }
    var prevTitleRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(document.title);
    if (document.title !== title)
        document.title = title;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (options && options.restoreOnUnmount) {
            return function () {
                document.title = prevTitleRef.current;
            };
        }
        else {
            return;
        }
    }, []);
}
/* harmony default export */ __webpack_exports__["default"] = (typeof document !== 'undefined' ? useTitle : function (_title) { });


/***/ }),

/***/ "../node_modules/react-use/esm/useToggle.js":
/*!**************************************************!*\
  !*** ../node_modules/react-use/esm/useToggle.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var toggleReducer = function (state, nextValue) {
    return typeof nextValue === 'boolean' ? nextValue : !state;
};
var useToggle = function (initialValue) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(toggleReducer, initialValue);
};
/* harmony default export */ __webpack_exports__["default"] = (useToggle);


/***/ }),

/***/ "../node_modules/react-use/esm/useTween.js":
/*!*************************************************!*\
  !*** ../node_modules/react-use/esm/useTween.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ts_easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-easing */ "../node_modules/ts-easing/lib/index.js");
/* harmony import */ var ts_easing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ts_easing__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useRaf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRaf */ "../node_modules/react-use/esm/useRaf.js");


var useTween = function (easingName, ms, delay) {
    if (easingName === void 0) { easingName = 'inCirc'; }
    if (ms === void 0) { ms = 200; }
    if (delay === void 0) { delay = 0; }
    var fn = ts_easing__WEBPACK_IMPORTED_MODULE_0__["easing"][easingName];
    var t = Object(_useRaf__WEBPACK_IMPORTED_MODULE_1__["default"])(ms, delay);
    if (true) {
        if (typeof fn !== 'function') {
            console.error('useTween() expected "easingName" property to be a valid easing function name, like:' +
                '"' +
                Object.keys(ts_easing__WEBPACK_IMPORTED_MODULE_0__["easing"]).join('", "') +
                '".');
            console.trace();
            return 0;
        }
    }
    return fn(t);
};
/* harmony default export */ __webpack_exports__["default"] = (useTween);


/***/ }),

/***/ "../node_modules/react-use/esm/useUnmount.js":
/*!***************************************************!*\
  !*** ../node_modules/react-use/esm/useUnmount.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEffectOnce */ "../node_modules/react-use/esm/useEffectOnce.js");


var useUnmount = function (fn) {
    var fnRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(fn);
    // update the ref each render so if it change the newest callback will be invoked
    fnRef.current = fn;
    Object(_useEffectOnce__WEBPACK_IMPORTED_MODULE_1__["default"])(function () { return function () { return fnRef.current(); }; });
};
/* harmony default export */ __webpack_exports__["default"] = (useUnmount);


/***/ }),

/***/ "../node_modules/react-use/esm/useUnmountPromise.js":
/*!**********************************************************!*\
  !*** ../node_modules/react-use/esm/useUnmountPromise.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEffectOnce */ "../node_modules/react-use/esm/useEffectOnce.js");


var useUnmountPromise = function () {
    var refUnmounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    Object(_useEffectOnce__WEBPACK_IMPORTED_MODULE_1__["default"])(function () { return function () {
        refUnmounted.current = true;
    }; });
    var wrapper = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        var race = function (promise, onError) {
            var newPromise = new Promise(function (resolve, reject) {
                promise.then(function (result) {
                    if (!refUnmounted.current)
                        resolve(result);
                }, function (error) {
                    if (!refUnmounted.current)
                        reject(error);
                    else if (onError)
                        onError(error);
                    else
                        console.error('useUnmountPromise', error);
                });
            });
            return newPromise;
        };
        return race;
    }, []);
    return wrapper;
};
/* harmony default export */ __webpack_exports__["default"] = (useUnmountPromise);


/***/ }),

/***/ "../node_modules/react-use/esm/useUpdate.js":
/*!**************************************************!*\
  !*** ../node_modules/react-use/esm/useUpdate.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useUpdate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var updateReducer = function (num) { return (num + 1) % 1000000; };
function useUpdate() {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(updateReducer, 0), update = _a[1];
    return update;
}


/***/ }),

/***/ "../node_modules/react-use/esm/useUpdateEffect.js":
/*!********************************************************!*\
  !*** ../node_modules/react-use/esm/useUpdateEffect.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useFirstMountState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useFirstMountState */ "../node_modules/react-use/esm/useFirstMountState.js");


var useUpdateEffect = function (effect, deps) {
    var isFirstMount = Object(_useFirstMountState__WEBPACK_IMPORTED_MODULE_1__["useFirstMountState"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!isFirstMount) {
            return effect();
        }
    }, deps);
};
/* harmony default export */ __webpack_exports__["default"] = (useUpdateEffect);


/***/ }),

/***/ "../node_modules/react-use/esm/useUpsert.js":
/*!**************************************************!*\
  !*** ../node_modules/react-use/esm/useUpsert.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useUpsert; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _useList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useList */ "../node_modules/react-use/esm/useList.js");


/**
 * @deprecated Use `useList` hook's upsert action instead
 */
function useUpsert(predicate, initialList) {
    if (initialList === void 0) { initialList = []; }
    var _a = Object(_useList__WEBPACK_IMPORTED_MODULE_1__["default"])(initialList), list = _a[0], listActions = _a[1];
    return [
        list,
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, listActions), { upsert: function (newItem) {
                listActions.upsert(predicate, newItem);
            } }),
    ];
}


/***/ }),

/***/ "../node_modules/react-use/esm/useVibrate.js":
/*!***************************************************!*\
  !*** ../node_modules/react-use/esm/useVibrate.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");


var isVibrationApiSupported = _misc_util__WEBPACK_IMPORTED_MODULE_1__["isNavigator"] && 'vibrate' in navigator;
function useVibrate(enabled, pattern, loop) {
    if (enabled === void 0) { enabled = true; }
    if (pattern === void 0) { pattern = [1000, 1000]; }
    if (loop === void 0) { loop = true; }
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var interval;
        if (enabled) {
            navigator.vibrate(pattern);
            if (loop) {
                var duration = pattern instanceof Array ? pattern.reduce(function (a, b) { return a + b; }) : pattern;
                interval = setInterval(function () {
                    navigator.vibrate(pattern);
                }, duration);
            }
        }
        return function () {
            if (enabled) {
                navigator.vibrate(0);
                if (loop) {
                    clearInterval(interval);
                }
            }
        };
    }, [enabled]);
}
/* harmony default export */ __webpack_exports__["default"] = (isVibrationApiSupported ? useVibrate : _misc_util__WEBPACK_IMPORTED_MODULE_1__["noop"]);


/***/ }),

/***/ "../node_modules/react-use/esm/useVideo.js":
/*!*************************************************!*\
  !*** ../node_modules/react-use/esm/useVideo.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _factory_createHTMLMediaHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory/createHTMLMediaHook */ "../node_modules/react-use/esm/factory/createHTMLMediaHook.js");

var useVideo = Object(_factory_createHTMLMediaHook__WEBPACK_IMPORTED_MODULE_0__["default"])('video');
/* harmony default export */ __webpack_exports__["default"] = (useVideo);


/***/ }),

/***/ "../node_modules/react-use/esm/useWindowScroll.js":
/*!********************************************************!*\
  !*** ../node_modules/react-use/esm/useWindowScroll.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");
/* harmony import */ var _useRafState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useRafState */ "../node_modules/react-use/esm/useRafState.js");



var useWindowScroll = function () {
    var _a = Object(_useRafState__WEBPACK_IMPORTED_MODULE_2__["default"])(function () { return ({
        x: _misc_util__WEBPACK_IMPORTED_MODULE_1__["isBrowser"] ? window.pageXOffset : 0,
        y: _misc_util__WEBPACK_IMPORTED_MODULE_1__["isBrowser"] ? window.pageYOffset : 0,
    }); }), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var handler = function () {
            setState(function (state) {
                var pageXOffset = window.pageXOffset, pageYOffset = window.pageYOffset;
                //Check state for change, return same state if no change happened to prevent rerender
                //(see useState/setState documentation). useState/setState is used internally in useRafState/setState.
                return state.x !== pageXOffset || state.y !== pageYOffset
                    ? {
                        x: pageXOffset,
                        y: pageYOffset,
                    }
                    : state;
            });
        };
        //We have to update window scroll at mount, before subscription.
        //Window scroll may be changed between render and effect handler.
        handler();
        Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["on"])(window, 'scroll', handler, {
            capture: false,
            passive: true,
        });
        return function () {
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_1__["off"])(window, 'scroll', handler);
        };
    }, []);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useWindowScroll);


/***/ }),

/***/ "../node_modules/react-use/esm/useWindowSize.js":
/*!******************************************************!*\
  !*** ../node_modules/react-use/esm/useWindowSize.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useRafState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRafState */ "../node_modules/react-use/esm/useRafState.js");
/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/util */ "../node_modules/react-use/esm/misc/util.js");



var useWindowSize = function (initialWidth, initialHeight) {
    if (initialWidth === void 0) { initialWidth = Infinity; }
    if (initialHeight === void 0) { initialHeight = Infinity; }
    var _a = Object(_useRafState__WEBPACK_IMPORTED_MODULE_1__["default"])({
        width: _misc_util__WEBPACK_IMPORTED_MODULE_2__["isBrowser"] ? window.innerWidth : initialWidth,
        height: _misc_util__WEBPACK_IMPORTED_MODULE_2__["isBrowser"] ? window.innerHeight : initialHeight,
    }), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (_misc_util__WEBPACK_IMPORTED_MODULE_2__["isBrowser"]) {
            var handler_1 = function () {
                setState({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };
            Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["on"])(window, 'resize', handler_1);
            return function () {
                Object(_misc_util__WEBPACK_IMPORTED_MODULE_2__["off"])(window, 'resize', handler_1);
            };
        }
    }, []);
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (useWindowSize);


/***/ }),

/***/ "../node_modules/screenfull/dist/screenfull.js":
/*!*****************************************************!*\
  !*** ../node_modules/screenfull/dist/screenfull.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* screenfull
* v5.1.0 - 2020-12-24
* (c) Sindre Sorhus; MIT License
*/
(function () {
	'use strict';

	var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
	var isCommonjs =  true && module.exports;

	var fn = (function () {
		var val;

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// New WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// Old WebKit
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0; i < val.length; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var eventNameMap = {
		change: fn.fullscreenchange,
		error: fn.fullscreenerror
	};

	var screenfull = {
		request: function (element, options) {
			return new Promise(function (resolve, reject) {
				var onFullScreenEntered = function () {
					this.off('change', onFullScreenEntered);
					resolve();
				}.bind(this);

				this.on('change', onFullScreenEntered);

				element = element || document.documentElement;

				var returnPromise = element[fn.requestFullscreen](options);

				if (returnPromise instanceof Promise) {
					returnPromise.then(onFullScreenEntered).catch(reject);
				}
			}.bind(this));
		},
		exit: function () {
			return new Promise(function (resolve, reject) {
				if (!this.isFullscreen) {
					resolve();
					return;
				}

				var onFullScreenExit = function () {
					this.off('change', onFullScreenExit);
					resolve();
				}.bind(this);

				this.on('change', onFullScreenExit);

				var returnPromise = document[fn.exitFullscreen]();

				if (returnPromise instanceof Promise) {
					returnPromise.then(onFullScreenExit).catch(reject);
				}
			}.bind(this));
		},
		toggle: function (element, options) {
			return this.isFullscreen ? this.exit() : this.request(element, options);
		},
		onchange: function (callback) {
			this.on('change', callback);
		},
		onerror: function (callback) {
			this.on('error', callback);
		},
		on: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.addEventListener(eventName, callback, false);
			}
		},
		off: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.removeEventListener(eventName, callback, false);
			}
		},
		raw: fn
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = {isEnabled: false};
		} else {
			window.screenfull = {isEnabled: false};
		}

		return;
	}

	Object.defineProperties(screenfull, {
		isFullscreen: {
			get: function () {
				return Boolean(document[fn.fullscreenElement]);
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		isEnabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return Boolean(document[fn.fullscreenEnabled]);
			}
		}
	});

	if (isCommonjs) {
		module.exports = screenfull;
	} else {
		window.screenfull = screenfull;
	}
})();


/***/ }),

/***/ "../node_modules/set-harmonic-interval/lib/index.esm.js":
/*!**************************************************************!*\
  !*** ../node_modules/set-harmonic-interval/lib/index.esm.js ***!
  \**************************************************************/
/*! exports provided: clearHarmonicInterval, setHarmonicInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearHarmonicInterval", function() { return clearHarmonicInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHarmonicInterval", function() { return setHarmonicInterval; });
var counter = 0;
var buckets = {};
var setHarmonicInterval = function (fn, ms) {
    var _a;
    var id = counter++;
    if (buckets[ms]) {
        buckets[ms].listeners[id] = fn;
    }
    else {
        var timer = setInterval(function () {
            var listeners = buckets[ms].listeners;
            var didThrow = false;
            var lastError;
            for (var _i = 0, _a = Object.values(listeners); _i < _a.length; _i++) {
                var listener = _a[_i];
                try {
                    listener();
                }
                catch (error) {
                    didThrow = true;
                    lastError = error;
                }
            }
            if (didThrow)
                throw lastError;
        }, ms);
        buckets[ms] = {
            ms: ms,
            timer: timer,
            listeners: (_a = {},
                _a[id] = fn,
                _a),
        };
    }
    return {
        bucket: buckets[ms],
        id: id,
    };
};
var clearHarmonicInterval = function (_a) {
    var bucket = _a.bucket, id = _a.id;
    delete bucket.listeners[id];
    var hasListeners = false;
    for (var listener in bucket.listeners) {
        hasListeners = true;
        break;
    }
    if (!hasListeners) {
        clearInterval(bucket.timer);
        delete buckets[bucket.ms];
    }
};




/***/ }),

/***/ "../node_modules/throttle-debounce/esm/index.js":
/*!******************************************************!*\
  !*** ../node_modules/throttle-debounce/esm/index.js ***!
  \******************************************************/
/*! exports provided: debounce, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {number}    delay -          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {boolean}   [noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset).
 * @param  {Function}  callback -       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {boolean}   [debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @returns {Function}  A new, throttled, function.
 */
function throttle (delay, noTrailing, callback, debounceMode) {
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */
  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  } // `noTrailing` defaults to falsy.


  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = undefined;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }

    var self = this;
    var elapsed = Date.now() - lastExec;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      /*
       * In throttle mode, if `delay` time has been exceeded, execute
       * `callback`.
       */
      exec();
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

/* eslint-disable no-undefined */
/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param  {number}   delay -         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {boolean}  [atBegin] -     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 * @param  {Function} callback -      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                  to `callback` when the debounced-function is executed.
 *
 * @returns {Function} A new, debounced function.
 */

function debounce (delay, atBegin, callback) {
  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "../node_modules/toggle-selection/index.js":
/*!*************************************************!*\
  !*** ../node_modules/toggle-selection/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ "../node_modules/ts-easing/lib/index.js":
/*!**********************************************!*\
  !*** ../node_modules/ts-easing/lib/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.easing = {
    // No easing, no acceleration
    linear: function (t) { return t; },
    // Accelerates fast, then slows quickly towards end.
    quadratic: function (t) { return t * (-(t * t) * t + 4 * t * t - 6 * t + 4); },
    // Overshoots over 1 and then returns to 1 towards end.
    cubic: function (t) { return t * (4 * t * t - 9 * t + 6); },
    // Overshoots over 1 multiple times - wiggles around 1.
    elastic: function (t) { return t * (33 * t * t * t * t - 106 * t * t * t + 126 * t * t - 67 * t + 15); },
    // Accelerating from zero velocity
    inQuad: function (t) { return t * t; },
    // Decelerating to zero velocity
    outQuad: function (t) { return t * (2 - t); },
    // Acceleration until halfway, then deceleration
    inOutQuad: function (t) { return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t; },
    // Accelerating from zero velocity
    inCubic: function (t) { return t * t * t; },
    // Decelerating to zero velocity
    outCubic: function (t) { return (--t) * t * t + 1; },
    // Acceleration until halfway, then deceleration
    inOutCubic: function (t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; },
    // Accelerating from zero velocity
    inQuart: function (t) { return t * t * t * t; },
    // Decelerating to zero velocity
    outQuart: function (t) { return 1 - (--t) * t * t * t; },
    // Acceleration until halfway, then deceleration
    inOutQuart: function (t) { return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t; },
    // Accelerating from zero velocity
    inQuint: function (t) { return t * t * t * t * t; },
    // Decelerating to zero velocity
    outQuint: function (t) { return 1 + (--t) * t * t * t * t; },
    // Acceleration until halfway, then deceleration
    inOutQuint: function (t) { return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t; },
    // Accelerating from zero velocity
    inSine: function (t) { return -Math.cos(t * (Math.PI / 2)) + 1; },
    // Decelerating to zero velocity
    outSine: function (t) { return Math.sin(t * (Math.PI / 2)); },
    // Accelerating until halfway, then decelerating
    inOutSine: function (t) { return -(Math.cos(Math.PI * t) - 1) / 2; },
    // Exponential accelerating from zero velocity
    inExpo: function (t) { return Math.pow(2, 10 * (t - 1)); },
    // Exponential decelerating to zero velocity
    outExpo: function (t) { return -Math.pow(2, -10 * t) + 1; },
    // Exponential accelerating until halfway, then decelerating
    inOutExpo: function (t) {
        t /= .5;
        if (t < 1)
            return Math.pow(2, 10 * (t - 1)) / 2;
        t--;
        return (-Math.pow(2, -10 * t) + 2) / 2;
    },
    // Circular accelerating from zero velocity
    inCirc: function (t) { return -Math.sqrt(1 - t * t) + 1; },
    // Circular decelerating to zero velocity Moves VERY fast at the beginning and
    // then quickly slows down in the middle. This tween can actually be used
    // in continuous transitions where target value changes all the time,
    // because of the very quick start, it hides the jitter between target value changes.
    outCirc: function (t) { return Math.sqrt(1 - (t = t - 1) * t); },
    // Circular acceleration until halfway, then deceleration
    inOutCirc: function (t) {
        t /= .5;
        if (t < 1)
            return -(Math.sqrt(1 - t * t) - 1) / 2;
        t -= 2;
        return (Math.sqrt(1 - t * t) + 1) / 2;
    }
};


/***/ }),

/***/ "../packages/editor/lib-es/core/Provider/CallbacksProvider.js":
/*!********************************************************************!*\
  !*** ../packages/editor/lib-es/core/Provider/CallbacksProvider.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_deepEquals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/deepEquals */ "../packages/editor/lib-es/core/utils/deepEquals.js");
/* harmony import */ var _components_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hooks */ "../packages/editor/lib-es/core/components/hooks/index.js");
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



var CallbacksProvider = function (_a) {
    var children = _a.children, callbacks = __rest(_a, ["children"]);
    var lastCallbacks = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var isEqual = lastCallbacks.current
        ? Object(_utils_deepEquals__WEBPACK_IMPORTED_MODULE_1__["default"])(lastCallbacks.current, callbacks)
        : false;
    if (!isEqual) {
        lastCallbacks.current = callbacks;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_hooks__WEBPACK_IMPORTED_MODULE_2__["CallbacksContext"].Provider, { value: lastCallbacks.current }, children));
};
/* harmony default export */ __webpack_exports__["default"] = (CallbacksProvider);
//# sourceMappingURL=CallbacksProvider.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/Provider/DndProvider.js":
/*!**************************************************************!*\
  !*** ../packages/editor/lib-es/core/Provider/DndProvider.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dnd */ "../node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var _components_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hooks */ "../packages/editor/lib-es/core/components/hooks/index.js");



var DndProvider = function (_a) {
    var children = _a.children;
    var dndBackend = Object(_components_hooks__WEBPACK_IMPORTED_MODULE_2__["useOption"])('dndBackend');
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dnd__WEBPACK_IMPORTED_MODULE_1__["DndProvider"], { backend: dndBackend }, children);
};
/* harmony default export */ __webpack_exports__["default"] = (DndProvider);
//# sourceMappingURL=DndProvider.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/Provider/EditorStoreProvider.js":
/*!**********************************************************************!*\
  !*** ../packages/editor/lib-es/core/Provider/EditorStoreProvider.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/value */ "../packages/editor/lib-es/core/actions/value.js");
/* harmony import */ var _components_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hooks */ "../packages/editor/lib-es/core/components/hooks/index.js");
/* harmony import */ var _EditorStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../EditorStore */ "../packages/editor/lib-es/core/EditorStore.js");
/* harmony import */ var _migrations_migrate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../migrations/migrate */ "../packages/editor/lib-es/core/migrations/migrate.js");
/* harmony import */ var _migrations_serialzeValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../migrations/serialzeValue */ "../packages/editor/lib-es/core/migrations/serialzeValue.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducer */ "../packages/editor/lib-es/core/reducer/index.js");
/* harmony import */ var _reduxConnect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reduxConnect */ "../packages/editor/lib-es/core/reduxConnect.js");
/* harmony import */ var _utils_deepEquals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/deepEquals */ "../packages/editor/lib-es/core/utils/deepEquals.js");
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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};









var EditorStoreProvider = function (_a) {
    var children = _a.children, lang = _a.lang, value = _a.value;
    var cellPlugins = Object(_components_hooks__WEBPACK_IMPORTED_MODULE_2__["useRenderOption"])('cellPlugins');
    var middleware = Object(_components_hooks__WEBPACK_IMPORTED_MODULE_2__["useOption"])('middleware');
    var onChangeLang = Object(_components_hooks__WEBPACK_IMPORTED_MODULE_2__["useCallbackOption"])('onChangeLang');
    var onChange = Object(_components_hooks__WEBPACK_IMPORTED_MODULE_2__["useCallbackOption"])('onChange');
    var storeFromOptions = Object(_components_hooks__WEBPACK_IMPORTED_MODULE_2__["useOption"])('store');
    var editorStore = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        var store = new _EditorStore__WEBPACK_IMPORTED_MODULE_3__["default"]({
            initialState: Object(_reducer__WEBPACK_IMPORTED_MODULE_6__["initialState"])(Object(_migrations_migrate__WEBPACK_IMPORTED_MODULE_4__["migrateValue"])(value, {
                cellPlugins: cellPlugins,
                lang: lang,
            }), lang),
            store: storeFromOptions,
            middleware: middleware,
        });
        return store;
    }, __spreadArray([storeFromOptions], __read(middleware), false));
    var lastValueRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var oldLang = lang;
        var handleChanges = function () {
            // notify outsiders to new language, when chagned in ui
            var newLang = editorStore.store.getState().reactPage.settings.lang;
            if (newLang !== oldLang || newLang !== lang) {
                oldLang = newLang;
                onChangeLang === null || onChangeLang === void 0 ? void 0 : onChangeLang(newLang);
            }
            if (!onChange) {
                return;
            }
            //console.time('calculate notifiy on change');
            var currentValue = editorStore.store.getState().reactPage.values.present;
            if (!currentValue) {
                // console.timeEnd('calculate notifiy on change');
                return;
            }
            var serializedValue = Object(_migrations_serialzeValue__WEBPACK_IMPORTED_MODULE_5__["serialzeValue"])(currentValue, cellPlugins);
            var serializedEqual = Object(_utils_deepEquals__WEBPACK_IMPORTED_MODULE_8__["default"])(lastValueRef.current, serializedValue);
            if (serializedEqual) {
                //    console.timeEnd('calculate notifiy on change');
                return;
            }
            lastValueRef.current = serializedValue;
            //   console.timeEnd('calculate notifiy on change');
            onChange(serializedValue);
        };
        var unsubscribe = editorStore.store.subscribe(handleChanges);
        return function () {
            unsubscribe();
        };
    }, [editorStore, onChange, cellPlugins]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var equal = Object(_utils_deepEquals__WEBPACK_IMPORTED_MODULE_8__["default"])(value, lastValueRef.current);
        // value changed from outside
        if (!equal) {
            lastValueRef.current = value;
            var migratedValue = Object(_migrations_migrate__WEBPACK_IMPORTED_MODULE_4__["migrateValue"])(value, {
                cellPlugins: cellPlugins,
                lang: lang,
            });
            editorStore.store.dispatch(Object(_actions_value__WEBPACK_IMPORTED_MODULE_1__["updateValue"])(migratedValue));
        }
    }, [value, cellPlugins, lang]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        // if changed from outside
        editorStore.setLang(lang);
    }, [editorStore, lang]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reduxConnect__WEBPACK_IMPORTED_MODULE_7__["ReduxProvider"], { store: editorStore.store },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditorStore__WEBPACK_IMPORTED_MODULE_3__["EditorContext"].Provider, { value: editorStore }, children)));
};
/* harmony default export */ __webpack_exports__["default"] = (EditorStoreProvider);
//# sourceMappingURL=EditorStoreProvider.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/Provider/OptionsProvider.js":
/*!******************************************************************!*\
  !*** ../packages/editor/lib-es/core/Provider/OptionsProvider.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_deepEquals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/deepEquals */ "../packages/editor/lib-es/core/utils/deepEquals.js");
/* harmony import */ var _components_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hooks */ "../packages/editor/lib-es/core/components/hooks/index.js");
/* harmony import */ var _defaultOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../defaultOptions */ "../packages/editor/lib-es/core/defaultOptions.js");
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




/*
we memoize the options, so that if you access them, you won't get a fresh object every time.
*/
var OptionsProvider = function (_a) {
    var children = _a.children, options = __rest(_a, ["children"]);
    var lastOptions = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var fullOptions = __assign(__assign({}, _defaultOptions__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_OPTIONS"]), options);
    var isEqual = lastOptions.current
        ? Object(_utils_deepEquals__WEBPACK_IMPORTED_MODULE_1__["default"])(lastOptions.current, fullOptions)
        : false;
    if (!isEqual) {
        lastOptions.current = fullOptions;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_hooks__WEBPACK_IMPORTED_MODULE_2__["OptionsContext"].Provider, { value: lastOptions.current }, children));
};
/* harmony default export */ __webpack_exports__["default"] = (OptionsProvider);
//# sourceMappingURL=OptionsProvider.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/Provider/RenderOptionsProvider.js":
/*!************************************************************************!*\
  !*** ../packages/editor/lib-es/core/Provider/RenderOptionsProvider.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_deepEquals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/deepEquals */ "../packages/editor/lib-es/core/utils/deepEquals.js");
/* harmony import */ var _components_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hooks */ "../packages/editor/lib-es/core/components/hooks/index.js");
/* harmony import */ var _defaultOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../defaultOptions */ "../packages/editor/lib-es/core/defaultOptions.js");
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




/*
we memoize the RenderOptions, so that if you access them, you won't get a fresh object every time.

*/
var RenderOptionsProvider = function (_a) {
    var children = _a.children, renderOptions = __rest(_a, ["children"]);
    var lastRenderOptions = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var fullRenderOptions = __assign(__assign({}, _defaultOptions__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_RENDER_OPTIONS"]), renderOptions);
    var isEqual = lastRenderOptions.current
        ? Object(_utils_deepEquals__WEBPACK_IMPORTED_MODULE_1__["default"])(lastRenderOptions.current, fullRenderOptions)
        : false;
    if (!isEqual) {
        lastRenderOptions.current = fullRenderOptions;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_hooks__WEBPACK_IMPORTED_MODULE_2__["RenderOptionsContext"].Provider, { value: lastRenderOptions.current }, children));
};
/* harmony default export */ __webpack_exports__["default"] = (RenderOptionsProvider);
//# sourceMappingURL=RenderOptionsProvider.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/Provider/index.js":
/*!********************************************************!*\
  !*** ../packages/editor/lib-es/core/Provider/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DndProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DndProvider */ "../packages/editor/lib-es/core/Provider/DndProvider.js");
/* harmony import */ var _components_BlurGate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BlurGate */ "../packages/editor/lib-es/core/components/BlurGate.js");
/* harmony import */ var _CallbacksProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CallbacksProvider */ "../packages/editor/lib-es/core/Provider/CallbacksProvider.js");
/* harmony import */ var _EditorStoreProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EditorStoreProvider */ "../packages/editor/lib-es/core/Provider/EditorStoreProvider.js");
/* harmony import */ var _OptionsProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OptionsProvider */ "../packages/editor/lib-es/core/Provider/OptionsProvider.js");
/* harmony import */ var _RenderOptionsProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RenderOptionsProvider */ "../packages/editor/lib-es/core/Provider/RenderOptionsProvider.js");
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







var Provider = function (_a) {
    var lang = _a.lang, value = _a.value, _b = _a.children, children = _b === void 0 ? [] : _b, renderOptions = _a.renderOptions, callbacks = _a.callbacks, options = _a.options;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OptionsProvider__WEBPACK_IMPORTED_MODULE_5__["default"], __assign({}, options),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RenderOptionsProvider__WEBPACK_IMPORTED_MODULE_6__["default"], __assign({}, renderOptions),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CallbacksProvider__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({}, callbacks),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DndProvider__WEBPACK_IMPORTED_MODULE_1__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditorStoreProvider__WEBPACK_IMPORTED_MODULE_4__["default"], { lang: lang, value: value },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BlurGate__WEBPACK_IMPORTED_MODULE_2__["default"], null, children)))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Provider);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/components/BlurGate.js":
/*!*************************************************************!*\
  !*** ../packages/editor/lib-es/core/components/BlurGate.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/display */ "../packages/editor/lib-es/core/actions/display.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks */ "../packages/editor/lib-es/core/components/hooks/index.js");



// this might break in future, but its better than nothing
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function findReactElement(node) {
    for (var key in node) {
        if (key.startsWith('__reactInternalInstance$') ||
            key.startsWith('__reactFiber$') // react 17
        ) {
            return node[key];
        }
    }
    return null;
}
// we go up the reac-tree. This works even through portals, which would not be possible with traversing the dom tree!
var isInSameTree = function (parent, child) {
    if (!parent) {
        return false;
    }
    var element = findReactElement(child);
    while (element) {
        if (element.stateNode === parent) {
            return true;
        }
        element = element.return;
    }
    return false;
};
var useBlurAll = function (_a) {
    var _b = _a.defaultMode, defaultMode = _b === void 0 ? _actions_display__WEBPACK_IMPORTED_MODULE_1__["DISPLAY_MODE_EDIT"] : _b, disabled = _a.disabled;
    var ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
    var blurAllCells = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useBlurAllCells"])();
    var setMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useSetMode"])();
    var isInsertMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useIsInsertMode"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (disabled) {
            return;
        }
        if (!ref.current) {
            return;
        }
        if (!document && !document.body) {
            return;
        }
        var onMouseDown = function (e) {
            if (!isInSameTree(ref.current, e.target)) {
                blurAllCells();
                // set us in default mode if current mode is "insert"
                if (isInsertMode) {
                    setMode(defaultMode);
                }
            }
        };
        document.body.addEventListener('mousedown', onMouseDown);
        return function () {
            document.body.removeEventListener('mousedown', onMouseDown);
        };
    }, [ref.current, disabled, isInsertMode, setMode, blurAllCells]);
    return ref;
};
var BlurGate = function (_a) {
    var children = _a.children;
    var defaultMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useOption"])('blurGateDefaultMode');
    var disabled = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useOption"])('blurGateDisabled');
    var ref = useBlurAll({ defaultMode: defaultMode, disabled: disabled });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { ref: ref }, children);
};
/* harmony default export */ __webpack_exports__["default"] = (BlurGate);
//# sourceMappingURL=BlurGate.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/components/Cell/Draggable/index.js":
/*!*************************************************************************!*\
  !*** ../packages/editor/lib-es/core/components/Cell/Draggable/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../packages/editor/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks */ "../packages/editor/lib-es/core/components/hooks/index.js");
/* harmony import */ var _useDragHandle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useDragHandle */ "../packages/editor/lib-es/core/components/Cell/Draggable/useDragHandle.js");
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




var DefaultSmallHandle = function (_a) {
    var onClick = _a.onClick;
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "react-page-cell-draggable-overlay-handle", onClick: onClick },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "react-page-cell-draggable-overlay-handle-icon" })));
};
var Draggable = function (_a) {
    var _b;
    var _c;
    var isLeaf = _a.isLeaf, children = _a.children, nodeId = _a.nodeId;
    var cell = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useCell"])(nodeId);
    var _d = __read(Object(_useDragHandle__WEBPACK_IMPORTED_MODULE_3__["useDragHandle"])(nodeId), 3), isDragging = _d[0], dragRef = _d[1], previewElement = _d[2];
    var focus = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useFocusCell"])(nodeId);
    var isLayoutMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useIsLayoutMode"])();
    var allowMoveInEditMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useOption"])('allowMoveInEditMode');
    var components = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useOption"])('components');
    var ResizeHandle = (_c = components === null || components === void 0 ? void 0 : components.EditModeResizeHandle) !== null && _c !== void 0 ? _c : DefaultSmallHandle;
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
        previewElement,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { ref: isLayoutMode ? dragRef : undefined, style: {
                height: '100%',
            }, className: classnames__WEBPACK_IMPORTED_MODULE_0___default()({
                'react-page-cell-draggable-in-edit': !isLayoutMode && allowMoveInEditMode,
                'react-page-cell-draggable': isLayoutMode,
                'react-page-cell-draggable-is-dragging': isDragging,
            }) },
            isLayoutMode ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { onClick: function (e) {
                    var mode = e.metaKey || e.ctrlKey ? 'add' : 'replace';
                    focus(false, mode);
                }, className: classnames__WEBPACK_IMPORTED_MODULE_0___default()((_b = {
                        'react-page-cell-draggable-overlay': isLayoutMode
                    },
                    _b["react-page-cell-draggable-inline-" + cell.inline] = cell.inline,
                    _b['react-page-cell-draggable-leaf'] = isLeaf,
                    _b)) })) : allowMoveInEditMode ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { ref: dragRef },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ResizeHandle, { onClick: focus }))) : null,
            children)));
};
/* harmony default export */ __webpack_exports__["default"] = (Draggable);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/components/Cell/Droppable/helper/dnd.js":
/*!******************************************************************************!*\
  !*** ../packages/editor/lib-es/core/components/Cell/Droppable/helper/dnd.js ***!
  \******************************************************************************/
/*! exports provided: onHover, onDrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onHover", function() { return onHover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDrop", function() { return onDrop; });
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.throttle */ "../node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../helper/throttle */ "../packages/editor/lib-es/core/helper/throttle/index.js");
/* harmony import */ var _service_hover_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../service/hover/input */ "../packages/editor/lib-es/core/service/hover/input.js");
/* harmony import */ var _service_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../service/logger */ "../packages/editor/lib-es/core/service/logger/index.js");




var last = { hoverId: '', dragId: '' };
var shouldClear = function (hoverId, dragId) {
    if (hoverId === last.hoverId && dragId === last.dragId) {
        return false;
    }
    last = { hoverId: hoverId, dragId: dragId };
    return true;
};
var onHover = lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(function (target, monitor, element, actions, cellPlugins) {
    var drag = monitor.getItem();
    if (!drag || !target) {
        // item undefined, happens when throttle triggers after drop
        return;
    }
    if (drag.cell.id === target.id) {
        // If hovering over itself, do nothing
        if (shouldClear(target.id, drag.cell.id)) {
            actions.clear();
        }
        return;
    }
    else if (!monitor.isOver({ shallow: true })) {
        // If hovering over ancestor cell, do nothing (we are going to propagate later in the tree anyways)
        return;
    }
    else if (target.ancestorIds.includes(drag.cell.id)) {
        if (shouldClear(target.id, drag.cell.id)) {
            actions.clear();
        }
        return;
    }
    else if (!target.id) {
        // If hovering over something that isn't a cell or hasn't an id, do nothing. Should be an edge case
        _service_logger__WEBPACK_IMPORTED_MODULE_3__["default"].warn('Canceled cell drop, no id given.', target, drag);
        return;
    }
    last = { hoverId: target.id, dragId: drag.cell.id };
    Object(_service_hover_input__WEBPACK_IMPORTED_MODULE_2__["computeAndDispatchHover"])(target, drag.cell, monitor, element, actions, cellPlugins);
}, _helper_throttle__WEBPACK_IMPORTED_MODULE_1__["delay"], { leading: false });
var onDrop = function (target, monitor, element, actions, cellPlugins) {
    var drag = monitor.getItem();
    if (monitor.didDrop() || !monitor.isOver({ shallow: true }) || !target) {
        // If the item drop occurred deeper down the tree, don't do anything
        return;
    }
    else if (drag.cell.id === target.id) {
        // If the item being dropped on itself do nothing
        actions.cancelCellDrag();
        return;
    }
    else if (target.ancestorIds.includes(drag.cell.id)) {
        // If hovering over a child of itself, don't propagate further
        actions.cancelCellDrag();
        return;
    }
    last = { hoverId: target.id, dragId: drag.cell.id };
    Object(_service_hover_input__WEBPACK_IMPORTED_MODULE_2__["computeAndDispatchInsert"])(target, drag.cell, monitor, element, actions, cellPlugins);
};
//# sourceMappingURL=dnd.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/components/Cell/Droppable/index.js":
/*!*************************************************************************!*\
  !*** ../packages/editor/lib-es/core/components/Cell/Droppable/index.js ***!
  \*************************************************************************/
/*! exports provided: useCellDrop, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCellDrop", function() { return useCellDrop; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../packages/editor/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dnd */ "../node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var _reduxConnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../reduxConnect */ "../packages/editor/lib-es/core/reduxConnect.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks */ "../packages/editor/lib-es/core/components/hooks/index.js");
/* harmony import */ var _helper_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helper/dnd */ "../packages/editor/lib-es/core/components/Cell/Droppable/helper/dnd.js");
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






var useCellDrop = function (nodeId) {
    var _a;
    var ref = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);
    var hoverTarget = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useNodeAsHoverTarget"])(nodeId);
    var targetParentNodeId = (_a = hoverTarget === null || hoverTarget === void 0 ? void 0 : hoverTarget.ancestorIds) === null || _a === void 0 ? void 0 : _a[0];
    var checkIfAllowed = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useCellIsAllowedHere"])(targetParentNodeId);
    var plugin = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["usePluginOfCell"])(nodeId);
    var cellPlugins = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useAllCellPluginsForNode"])(targetParentNodeId);
    var hoverActions = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useHoverActions"])();
    var dropActions = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useDropActions"])(targetParentNodeId);
    var isHoveringOverThis = Object(_reduxConnect__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) { var _a; return ((_a = state.reactPage.hover) === null || _a === void 0 ? void 0 : _a.nodeId) === nodeId; });
    var _b = __read(Object(react_dnd__WEBPACK_IMPORTED_MODULE_2__["useDrop"])({
        accept: 'cell',
        canDrop: function (item) {
            // check if plugin is allowed here
            if (!checkIfAllowed(item)) {
                return false;
            }
            if (plugin === null || plugin === void 0 ? void 0 : plugin.allowNeighbour) {
                if (!plugin.allowNeighbour(item.cell)) {
                    return false;
                }
            }
            return (item.cell.id !== nodeId &&
                !(hoverTarget === null || hoverTarget === void 0 ? void 0 : hoverTarget.ancestorIds.includes(item.cell.id)));
        },
        collect: function (monitor) { return ({
            isOver: monitor.isOver(),
            isAllowed: checkIfAllowed(monitor.getItem()),
        }); },
        hover: function (item, monitor) {
            if (plugin === null || plugin === void 0 ? void 0 : plugin.allowNeighbour) {
                if (!plugin.allowNeighbour(item.cell)) {
                    return false;
                }
            }
            Object(_helper_dnd__WEBPACK_IMPORTED_MODULE_5__["onHover"])(hoverTarget, monitor, ref.current, hoverActions, cellPlugins);
        },
        drop: function (item, monitor) {
            Object(_helper_dnd__WEBPACK_IMPORTED_MODULE_5__["onDrop"])(hoverTarget, monitor, ref.current, dropActions, cellPlugins);
        },
    }), 2), _c = _b[0], isOver = _c.isOver, isAllowed = _c.isAllowed, dropRef = _b[1];
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        if (!isOver && isHoveringOverThis) {
            hoverActions.clear();
        }
    }, [isOver, isHoveringOverThis, hoverActions.clear]);
    // see https://github.com/react-dnd/react-dnd/issues/1955
    var attach = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (domElement) {
        dropRef(domElement);
        ref.current = domElement;
        // use dom element here for measuring
    }, [dropRef]);
    return [attach, isAllowed];
};
var Droppable = function (props) {
    var _a;
    var isLayoutMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useIsLayoutMode"])();
    var isInsertMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useIsInsertMode"])();
    var _b = __read(useCellDrop(props.nodeId), 2), attach = _b[0], isAllowed = _b[1];
    var hoverPosition = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useNodeHoverPosition"])(props.nodeId);
    var allowMoveInEditMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useOption"])('allowMoveInEditMode');
    var hasPlugin = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useCellHasPlugin"])(props.nodeId);
    var cellSpacingY = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useCellSpacing"])().y;
    var needVerticalMargin = !props.isLeaf && !hasPlugin;
    if (!(isLayoutMode || isInsertMode) && !allowMoveInEditMode) {
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: 'react-page-cell-droppable-container' }, props.children));
    }
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { ref: attach, style: {
            height: '100%',
        }, className: "react-page-cell-droppable" },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { style: {
                position: 'absolute',
                pointerEvents: 'none',
                top: needVerticalMargin ? cellSpacingY / 2 + "px" : 0,
                left: 0,
                bottom: needVerticalMargin ? cellSpacingY / 2 + "px" : 0,
                right: 0,
            }, className: classnames__WEBPACK_IMPORTED_MODULE_0___default()((_a = {
                    'react-page-cell-droppable-not-allowed': !isAllowed,
                    'react-page-cell-droppable-is-over-current': isAllowed && hoverPosition
                },
                _a["react-page-cell-droppable-is-over-" + hoverPosition] = isAllowed && hoverPosition,
                _a['react-page-cell-droppable-leaf'] = props.isLeaf,
                _a)) }),
        props.children));
};
/* harmony default export */ __webpack_exports__["default"] = (Droppable);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/components/Cell/ErrorCell/index.js":
/*!*************************************************************************!*\
  !*** ../packages/editor/lib-es/core/components/Cell/ErrorCell/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks */ "../packages/editor/lib-es/core/components/hooks/index.js");


var ErrorCell = function (_a) {
    var nodeId = _a.nodeId, error = _a.error;
    var isEditMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_1__["useIsEditMode"])();
    var removeCell = Object(_hooks__WEBPACK_IMPORTED_MODULE_1__["useRemoveCell"])(nodeId);
    var t = Object(_hooks__WEBPACK_IMPORTED_MODULE_1__["useUiTranslator"])().t;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "react-page-cell-error" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, t('An error occurred!')),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", null, t('Cause:')),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, error.message),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", null, t('Cell:')),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, nodeId))),
        isEditMode ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { onClick: function () { return removeCell(); } }, t('Remove'))) : null));
};
/* harmony default export */ __webpack_exports__["default"] = (ErrorCell);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/components/Cell/Handle/index.js":
/*!**********************************************************************!*\
  !*** ../packages/editor/lib-es/core/components/Cell/Handle/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../packages/editor/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks */ "../packages/editor/lib-es/core/components/hooks/index.js");
/* harmony import */ var _Draggable_useDragHandle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Draggable/useDragHandle */ "../packages/editor/lib-es/core/components/Cell/Draggable/useDragHandle.js");
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




var Handle = function (_a) {
    var nodeId = _a.nodeId;
    var allowMoveInEditMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useOption"])('allowMoveInEditMode');
    var isLayoutMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useIsLayoutMode"])();
    var dragEnabled = allowMoveInEditMode || isLayoutMode;
    var _b = __read(Object(_Draggable_useDragHandle__WEBPACK_IMPORTED_MODULE_3__["useDragHandle"])(nodeId, dragEnabled), 3), isDragging = _b[0], dragRef = _b[1], previewElement = _b[2];
    var focus = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useFocusCell"])(nodeId);
    var plugin = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["usePluginOfCell"])(nodeId);
    var t = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useUiTranslator"])().t;
    if (!plugin) {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
        previewElement,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('react-page-cell-handle', {
                'react-page-cell-handle-drag-enabled': dragEnabled,
                'react-page-cell-handle-is-dragging': isDragging,
            }), ref: dragRef, onClick: function (e) {
                var mode = e.metaKey || e.ctrlKey ? 'add' : 'replace';
                focus(false, mode);
            } }, t((plugin === null || plugin === void 0 ? void 0 : plugin.title) || (plugin === null || plugin === void 0 ? void 0 : plugin.text)))));
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Handle));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/components/Cell/Inner/index.js":
/*!*********************************************************************!*\
  !*** ../packages/editor/lib-es/core/components/Cell/Inner/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_getCellSpacing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/getCellSpacing */ "../packages/editor/lib-es/core/utils/getCellSpacing.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks */ "../packages/editor/lib-es/core/components/hooks/index.js");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Row */ "../packages/editor/lib-es/core/components/Row/index.js");
/* harmony import */ var _Draggable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Draggable */ "../packages/editor/lib-es/core/components/Cell/Draggable/index.js");
/* harmony import */ var _Droppable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Droppable */ "../packages/editor/lib-es/core/components/Cell/Droppable/index.js");
/* harmony import */ var _InsertNew__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InsertNew */ "../packages/editor/lib-es/core/components/Cell/InsertNew.js");
/* harmony import */ var _PluginComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../PluginComponent */ "../packages/editor/lib-es/core/components/Cell/PluginComponent/index.js");
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








var Inner = function (_a) {
    var _b, _c, _d;
    var nodeId = _a.nodeId;
    var isPreviewMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useIsPreviewMode"])();
    var isEditMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useIsEditMode"])();
    var cellShouldHavePlugin = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useCellHasPlugin"])(nodeId);
    var plugin = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["usePluginOfCell"])(nodeId);
    var setEditMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useSetEditMode"])();
    var focus = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useFocusCell"])(nodeId);
    var focused = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useIsFocused"])(nodeId);
    var childrenIds = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useNodeChildrenIds"])(nodeId);
    var cellSpacingY = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useCellSpacing"])().y;
    var ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
    var hasChildren = childrenIds.length > 0;
    var data = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useCellData"])(nodeId);
    var pluginCellSpacing = Object(_utils_getCellSpacing__WEBPACK_IMPORTED_MODULE_1__["getPluginCellSpacing"])(plugin, data);
    var _e = __read(Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useCellSpacingProvider"])(pluginCellSpacing), 2), Provider = _e[0], providerValue = _e[1];
    if (typeof pluginCellSpacing !== 'undefined' && pluginCellSpacing != null) {
        cellSpacingY = Object(_utils_getCellSpacing__WEBPACK_IMPORTED_MODULE_1__["normalizeCellSpacing"])(pluginCellSpacing).y;
    }
    var onClick = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(function (e) {
        var _a;
        var target = e.target;
        // check whether the click was inside cell-inner, but not inside a nested cell
        if (!focused &&
            isEditMode &&
            // this arrives when they stop resizing
            !((_a = target.classList) === null || _a === void 0 ? void 0 : _a.contains('react-page-row')) &&
            (target === null || target === void 0 ? void 0 : target.closest) &&
            target.closest('.react-page-cell-inner') === ref.current &&
            target.closest('.react-page-cell.react-page-cell-has-plugin') ===
                ref.current.closest('.react-page-cell')) {
            var mode = e.metaKey || e.ctrlKey ? 'add' : 'replace';
            focus(false, mode);
            setEditMode();
        }
    }, [focus, focused, isEditMode, setEditMode]);
    var insertAllowed = ((_b = plugin === null || plugin === void 0 ? void 0 : plugin.childConstraints) === null || _b === void 0 ? void 0 : _b.maxChildren)
        ? ((_c = plugin === null || plugin === void 0 ? void 0 : plugin.childConstraints) === null || _c === void 0 ? void 0 : _c.maxChildren) > childrenIds.length
        : true;
    var innerDivProps = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useCellInnerDivStylingProps"])(nodeId);
    var children = childrenIds.map(function (id) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Row__WEBPACK_IMPORTED_MODULE_3__["default"], { nodeId: id, key: id }); });
    var components = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useOption"])('components');
    var InsertNewWithDefault = (_d = components === null || components === void 0 ? void 0 : components.InsertNew) !== null && _d !== void 0 ? _d : _InsertNew__WEBPACK_IMPORTED_MODULE_6__["default"];
    if (!cellShouldHavePlugin) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Droppable__WEBPACK_IMPORTED_MODULE_5__["default"], { nodeId: nodeId }, children);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Droppable__WEBPACK_IMPORTED_MODULE_5__["default"], { nodeId: nodeId, isLeaf: !hasChildren },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Draggable__WEBPACK_IMPORTED_MODULE_4__["default"], { nodeId: nodeId, isLeaf: !hasChildren },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", __assign({ onClick: !isPreviewMode ? onClick : undefined, tabIndex: -1, ref: ref }, innerDivProps),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PluginComponent__WEBPACK_IMPORTED_MODULE_7__["default"], { nodeId: nodeId, hasChildren: hasChildren },
                    hasChildren ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Provider, { value: providerValue },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: cellSpacingY !== 0
                                ? { margin: -cellSpacingY / 2 + "px 0" }
                                : undefined }, children))) : (children),
                    insertAllowed ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InsertNewWithDefault, { parentCellId: nodeId, childrenIds: childrenIds })) : null)))));
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Inner));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/components/Cell/InsertNew.js":
/*!*******************************************************************!*\
  !*** ../packages/editor/lib-es/core/components/Cell/InsertNew.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dnd */ "../node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks */ "../packages/editor/lib-es/core/components/hooks/index.js");
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



var InsertNew = function (_a) {
    var parentCellId = _a.parentCellId;
    var setInsertMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useSetInsertMode"])();
    var insertNew = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useInsertNew"])(parentCellId);
    var isPreviewMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useIsPreviewMode"])();
    var isLayoutMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useIsLayoutMode"])();
    var setReferenceNodeId = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useSetDisplayReferenceNodeId"])();
    var checkIfAllowed = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useCellIsAllowedHere"])(parentCellId);
    var _b = __read(Object(react_dnd__WEBPACK_IMPORTED_MODULE_1__["useDrop"])({
        accept: 'cell',
        canDrop: function (item) {
            return checkIfAllowed(item);
        },
        collect: function (monitor) { return ({
            isOver: monitor.isOver(),
            isAllowed: checkIfAllowed(monitor.getItem()),
        }); },
        drop: function (item, monitor) {
            // fallback drop
            if (!monitor.didDrop()) {
                insertNew(item.cell);
            }
        },
    }), 2), _c = _b[0], isOver = _c.isOver, isAllowed = _c.isAllowed, dropRef = _b[1];
    if (isPreviewMode)
        return null;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { ref: dropRef, className: 'react-page-cell-insert-new' + (isOver && isAllowed ? ' hover' : ''), style: {
            pointerEvents: 'all',
            zIndex: isLayoutMode ? 10 : 1,
            overflow: 'hidden',
            width: '50%',
            minWidth: 120,
            margin: 'auto',
            cursor: isOver && !isAllowed ? 'not-allowed' : 'pointer',
        }, onClick: function (e) {
            e.stopPropagation();
            setReferenceNodeId(parentCellId);
            setInsertMode();
        } }));
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(InsertNew));
//# sourceMappingURL=InsertNew.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/components/Cell/MoveActions/index.js":
/*!***************************************************************************!*\
  !*** ../packages/editor/lib-es/core/components/Cell/MoveActions/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_moveButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ui/moveButtons */ "../packages/editor/lib-es/ui/moveButtons/index.js");
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


var baseStyle = {
    position: 'absolute',
    margin: 0,
};
var MARGIN = 10;
var MoveActions = function (_a) {
    var nodeId = _a.nodeId;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "react-page-cell-move-actions", style: __assign({ left: 0, right: 0, bottom: 0, top: 0, zIndex: 100, pointerEvents: 'none' }, baseStyle) },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_moveButtons__WEBPACK_IMPORTED_MODULE_1__["MoveUp"], { nodeId: nodeId, style: __assign(__assign({}, baseStyle), { top: MARGIN, left: '50%', transform: 'translateX(-50%)' }) }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_moveButtons__WEBPACK_IMPORTED_MODULE_1__["MoveLeft"], { nodeId: nodeId, style: __assign(__assign({}, baseStyle), { left: MARGIN, top: '50%', transform: 'translateY(-50%)' }) }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_moveButtons__WEBPACK_IMPORTED_MODULE_1__["MoveRight"], { nodeId: nodeId, style: __assign(__assign({}, baseStyle), { right: MARGIN, top: '50%', transform: 'translateY(-50%)' }) }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_moveButtons__WEBPACK_IMPORTED_MODULE_1__["MoveDown"], { nodeId: nodeId, style: __assign(__assign({}, baseStyle), { bottom: MARGIN, left: '50%', transform: 'translateX(-50%)' }) })));
};
/* harmony default export */ __webpack_exports__["default"] = (MoveActions);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/components/Cell/PluginComponent/index.js":
/*!*******************************************************************************!*\
  !*** ../packages/editor/lib-es/core/components/Cell/PluginComponent/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ui */ "../packages/editor/lib-es/ui/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks */ "../packages/editor/lib-es/core/components/hooks/index.js");
/* harmony import */ var _PluginControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PluginControls */ "../packages/editor/lib-es/core/components/Cell/PluginControls/index.js");
/* harmony import */ var _PluginMissing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PluginMissing */ "../packages/editor/lib-es/core/components/Cell/PluginMissing.js");
/* harmony import */ var _NoopProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../NoopProvider */ "../packages/editor/lib-es/core/components/Cell/NoopProvider.js");
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






var PluginComponent = function (_a) {
    var _b, _c, _d;
    var nodeId = _a.nodeId, children = _a.children, hasChildren = _a.hasChildren;
    var lang = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useLang"])();
    var components = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useOption"])('components');
    var CustomPluginMissing = components === null || components === void 0 ? void 0 : components.CellPluginMissing;
    var isPreviewMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useIsPreviewMode"])();
    var isEditMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useIsEditMode"])();
    var _e = __read(Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useDebouncedCellData"])(nodeId), 2), data = _e[0], onChange = _e[1];
    var pluginId = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useCellProps"])(nodeId, function (c) { var _a; return (_a = c.plugin) === null || _a === void 0 ? void 0 : _a.id; });
    var plugin = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["usePluginOfCell"])(nodeId);
    var focused = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useIsExclusivlyFocused"])(nodeId);
    var hasInlineNeighbour = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useCellProps"])(nodeId, function (c) { return c.hasInlineNeighbour; });
    var Renderer = plugin === null || plugin === void 0 ? void 0 : plugin.Renderer;
    var Missing = CustomPluginMissing !== null && CustomPluginMissing !== void 0 ? CustomPluginMissing : _PluginMissing__WEBPACK_IMPORTED_MODULE_4__["default"];
    var Provider = (_b = plugin === null || plugin === void 0 ? void 0 : plugin.Provider) !== null && _b !== void 0 ? _b : _NoopProvider__WEBPACK_IMPORTED_MODULE_5__["default"];
    var remove = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useRemoveCell"])(nodeId);
    var Toolbar = (_c = components === null || components === void 0 ? void 0 : components.BottomToolbar) !== null && _c !== void 0 ? _c : _ui__WEBPACK_IMPORTED_MODULE_1__["BottomToolbar"];
    var componentProps = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return ({
        nodeId: nodeId,
        lang: lang,
        data: data,
        pluginConfig: plugin,
        focused: isEditMode && focused,
        readOnly: !isEditMode,
        onChange: onChange,
        isEditMode: isEditMode,
        isPreviewMode: isPreviewMode,
        remove: remove,
    }); }, [
        nodeId,
        lang,
        data,
        plugin,
        isEditMode,
        focused,
        onChange,
        isEditMode,
        isPreviewMode,
        remove,
    ]);
    // In case of non-zero cell spacing, nested layouts (layout plugins with children) should have their
    // margin collapsing functionality off. The simplest solution is to use display:flex for the below wrapping <div>.
    // This however is not compatible with inline elements flotation, so if a cell has inline neighbors, we are going
    // to have to keep display:block style. Layout plugins with inline cell support will have to take care of
    // margin collapsing internally on their own.
    var display = hasInlineNeighbour
        ? {}
        : {
            display: 'flex',
            flexDirection: 'column',
        };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Provider, __assign({}, componentProps),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: __assign(__assign({}, display), { height: '100%', pointerEvents: !isPreviewMode &&
                        plugin &&
                        !(plugin === null || plugin === void 0 ? void 0 : plugin.allowClickInside) &&
                        !hasChildren
                        ? 'none'
                        : undefined }) }, Renderer ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Renderer, __assign({}, componentProps), children)) : pluginId ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Missing, __assign({}, componentProps, { pluginId: pluginId }))) : (children)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Toolbar, { nodeId: nodeId, open: focused, dark: (_d = plugin === null || plugin === void 0 ? void 0 : plugin.bottomToolbar) === null || _d === void 0 ? void 0 : _d.dark, pluginControls: isEditMode && (plugin === null || plugin === void 0 ? void 0 : plugin.controls) ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PluginControls__WEBPACK_IMPORTED_MODULE_3__["default"], { componentProps: componentProps, controls: plugin === null || plugin === void 0 ? void 0 : plugin.controls })) : null }))));
};
/* harmony default export */ __webpack_exports__["default"] = (PluginComponent);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/components/Cell/PluginControls/index.js":
/*!******************************************************************************!*\
  !*** ../packages/editor/lib-es/core/components/Cell/PluginControls/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "../node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ui */ "../packages/editor/lib-es/ui/index.js");
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




var StyledTab = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(function () { return ({
    wrapper: {
        alignItems: 'flex-start',
    },
}); })(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Tab"]);
var StyledTabs = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(function (theme) { return ({
    root: {
        marginTop: -12,
        marginBottom: -12,
        marginLeft: -24,
        alignItems: 'flex-start',
        backgroundColor: theme.palette.background.default,
    },
}); })(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Tabs"]);
var ControlsList = react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(function (_a) {
    var _b;
    var controls = _a.controls, componentProps = _a.componentProps;
    var _c = __read(Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0), 2), tab = _c[0], setTab = _c[1];
    var activeControls = (_b = controls[tab]) === null || _b === void 0 ? void 0 : _b.controls;
    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { style: {
            display: 'flex',
            flexDirection: 'row',
        } },
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledTabs, { value: tab, onChange: function (e, v) { return setTab(v); }, orientation: "vertical", variant: "scrollable" }, controls.map(function (t, index) { return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledTab, { label: t.title, key: index })); })),
        activeControls ? (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { style: {
                flex: 1,
                marginLeft: 24,
                display: 'flex',
            } },
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Controls, { controls: activeControls, componentProps: componentProps }))) : null));
});
var Controls = react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(function (_a) {
    var controls = _a.controls, componentProps = _a.componentProps;
    var pluginControls = null;
    if (Array.isArray(controls)) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ControlsList, { componentProps: componentProps, controls: controls });
    }
    if ((controls === null || controls === void 0 ? void 0 : controls.type) === 'custom') {
        var Component = controls.Component;
        pluginControls = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, __assign({}, componentProps, controls));
    }
    else if ((controls === null || controls === void 0 ? void 0 : controls.type) === 'autoform') {
        pluginControls = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_3__["AutoformControls"], __assign({}, componentProps, controls));
    }
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { style: { overflow: 'auto', flex: 1 } }, pluginControls);
});
var PluginControls = function (_a) {
    var controls = _a.controls, componentProps = _a.componentProps;
    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { style: {
            maxHeight: '50vh',
            // if it has tabs, stretch to avoid jumping tabs
            width: Array.isArray(controls) ? '100vw' : undefined,
            maxWidth: '100%',
            display: 'flex',
        } },
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Controls, { controls: controls, componentProps: componentProps })));
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(PluginControls));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/components/Cell/PluginMissing.js":
/*!***********************************************************************!*\
  !*** ../packages/editor/lib-es/core/components/Cell/PluginMissing.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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

var PluginMissing = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: {
                backgroundColor: 'red',
                padding: '8px',
                border: '1px solid black',
                margin: '2px',
                overflowX: 'scroll',
            } },
            "The requested plugin `",
            props.pluginId,
            "` could not be found.",
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { onClick: props.remove }, "Delete Plugin"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, JSON.stringify(props, null, 2))),
        children));
};
/* harmony default export */ __webpack_exports__["default"] = (PluginMissing);
//# sourceMappingURL=PluginMissing.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/components/Cell/index.js":
/*!***************************************************************!*\
  !*** ../packages/editor/lib-es/core/components/Cell/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../packages/editor/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_getCellStylingProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/getCellStylingProps */ "../packages/editor/lib-es/core/utils/getCellStylingProps.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks */ "../packages/editor/lib-es/core/components/hooks/index.js");
/* harmony import */ var _ErrorCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorCell */ "../packages/editor/lib-es/core/components/Cell/ErrorCell/index.js");
/* harmony import */ var _Handle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Handle */ "../packages/editor/lib-es/core/components/Cell/Handle/index.js");
/* harmony import */ var _Inner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Inner */ "../packages/editor/lib-es/core/components/Cell/Inner/index.js");
/* harmony import */ var _MoveActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MoveActions */ "../packages/editor/lib-es/core/components/Cell/MoveActions/index.js");
/* harmony import */ var _utils_scrollIntoViewWithOffset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/scrollIntoViewWithOffset */ "../packages/editor/lib-es/core/components/Cell/utils/scrollIntoViewWithOffset.js");
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









var CellErrorGate = /** @class */ (function (_super) {
    __extends(class_1, _super);
    function class_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            error: null,
        };
        return _this;
    }
    class_1.prototype.componentDidCatch = function (error) {
        this.setState({ error: error });
    };
    class_1.prototype.render = function () {
        if (this.state.error) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorCell__WEBPACK_IMPORTED_MODULE_4__["default"], { nodeId: this.props.nodeId, error: this.state.error });
        }
        return this.props.children;
    };
    return class_1;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));
var Cell = function (_a) {
    var _b;
    var nodeId = _a.nodeId, measureRef = _a.measureRef;
    var focused = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useIsFocused"])(nodeId);
    var _c = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useCellProps"])(nodeId, function (_a) {
        var inline = _a.inline, hasInlineNeighbour = _a.hasInlineNeighbour, isDraft = _a.isDraft, isDraftI18n = _a.isDraftI18n, size = _a.size;
        return ({
            inline: inline,
            hasInlineNeighbour: hasInlineNeighbour,
            isDraft: isDraft,
            isDraftI18n: isDraftI18n,
            size: size,
        });
    }), inline = _c.inline, hasInlineNeighbour = _c.hasInlineNeighbour, isDraft = _c.isDraft, isDraftI18n = _c.isDraftI18n, size = _c.size;
    var lang = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useLang"])();
    var isPreviewMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useIsPreviewMode"])();
    var isResizeMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useIsResizeMode"])();
    var isLayoutMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useIsLayoutMode"])();
    var isInsertMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useIsInsertMode"])();
    var multiNodesSelected = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useAllFocusedNodeIds"])().length > 1;
    var hasChildren = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useNodeHasChildren"])(nodeId);
    var showMoveButtons = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useOption"])('showMoveButtonsInLayoutMode');
    var hasPlugin = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useCellHasPlugin"])(nodeId);
    var _d = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useCellSpacing"])(), cellSpacingX = _d.x, cellSpacingY = _d.y;
    var needVerticalPadding = !hasChildren || hasPlugin;
    var isDraftInLang = (_b = isDraftI18n === null || isDraftI18n === void 0 ? void 0 : isDraftI18n[lang]) !== null && _b !== void 0 ? _b : isDraft;
    var ref = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();
    var setReferenceNodeId = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useSetDisplayReferenceNodeId"])();
    var onClick = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
        if (isInsertMode) {
            e.stopPropagation();
            setReferenceNodeId(nodeId);
        }
    }, [nodeId, isInsertMode, setReferenceNodeId]);
    Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useScrollToViewEffect"])(nodeId, function () {
        if (ref.current)
            Object(_utils_scrollIntoViewWithOffset__WEBPACK_IMPORTED_MODULE_8__["default"])(ref.current, 120); // 120 is just a sane default, we might make int configurable in the future
    }, [ref.current]);
    if (isDraftInLang && isPreviewMode) {
        return null;
    }
    var cellOuterStlye = cellSpacingY !== 0 || cellSpacingX !== 0
        ? {
            padding: (needVerticalPadding ? cellSpacingY / 2 : 0) + "px " + cellSpacingX / 2 + "px",
        }
        : undefined;
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { style: cellOuterStlye, ref: ref, className: Object(_utils_getCellStylingProps__WEBPACK_IMPORTED_MODULE_2__["getCellOuterDivClassName"])({
            hasChildren: hasChildren,
            hasInlineNeighbour: hasInlineNeighbour,
            size: size,
            inline: inline,
        }) +
            ' ' +
            classnames__WEBPACK_IMPORTED_MODULE_0___default()({
                'react-page-cell-has-plugin': hasPlugin,
                'react-page-cell-focused': focused,
                'react-page-cell-is-draft': isDraftInLang,
                'react-page-cell-bring-to-front': !isResizeMode && !isLayoutMode && inline, // inline must not be active for resize/layout
            }), onClick: onClick },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Handle__WEBPACK_IMPORTED_MODULE_5__["default"], { nodeId: nodeId }),
        showMoveButtons &&
            isLayoutMode &&
            !hasChildren &&
            !multiNodesSelected ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MoveActions__WEBPACK_IMPORTED_MODULE_7__["default"], { nodeId: nodeId })) : null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { ref: measureRef, style: {
                height: '100%',
                boxSizing: 'border-box',
            } },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CellErrorGate, { nodeId: nodeId },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Inner__WEBPACK_IMPORTED_MODULE_6__["default"], { nodeId: nodeId })))));
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Cell));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/components/Cell/utils/scrollIntoViewWithOffset.js":
/*!****************************************************************************************!*\
  !*** ../packages/editor/lib-es/core/components/Cell/utils/scrollIntoViewWithOffset.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (element, offset, behavior) {
    if (offset === void 0) { offset = 0; }
    if (behavior === void 0) { behavior = 'smooth'; }
    if (!element) {
        return;
    }
    var bodyRect = document.body.getBoundingClientRect().top;
    var elementRect = element.getBoundingClientRect().top;
    var elementPosition = elementRect - bodyRect;
    var offsetPosition = elementPosition - offset;
    window.scrollTo({
        top: offsetPosition,
        behavior: behavior,
    });
});
//# sourceMappingURL=scrollIntoViewWithOffset.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/components/Editable/FallbackDropArea.js":
/*!******************************************************************************!*\
  !*** ../packages/editor/lib-es/core/components/Editable/FallbackDropArea.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dnd */ "../node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks */ "../packages/editor/lib-es/core/components/hooks/index.js");
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




var FallbackDropArea = function (_a) {
    var children = _a.children;
    var insertNew = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useInsertNew"])();
    var isAllowed = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useCellIsAllowedHere"])();
    var _b = __read(Object(react_dnd__WEBPACK_IMPORTED_MODULE_1__["useDrop"])({
        accept: 'cell',
        canDrop: function (item) { return isAllowed(item); },
        drop: function (item, monitor) {
            // fallback drop
            if (!monitor.didDrop()) {
                insertNew(item.cell);
            }
        },
    }), 2), dropRef = _b[1];
    var setReference = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useSetDisplayReferenceNodeId"])();
    var clearReference = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
        var _a;
        // if click was on the root, clear reference
        if ((_a = e.target.classList) === null || _a === void 0 ? void 0 : _a.contains('react-page-editable'))
            setReference(null);
    }, [setReference]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { ref: dropRef, onClick: clearReference }, children));
};
/* harmony default export */ __webpack_exports__["default"] = (FallbackDropArea);
//# sourceMappingURL=FallbackDropArea.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/components/Editable/Inner/Rows.js":
/*!************************************************************************!*\
  !*** ../packages/editor/lib-es/core/components/Editable/Inner/Rows.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cell_InsertNew__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Cell/InsertNew */ "../packages/editor/lib-es/core/components/Cell/InsertNew.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks */ "../packages/editor/lib-es/core/components/hooks/index.js");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Row */ "../packages/editor/lib-es/core/components/Row/index.js");




var Rows = function () {
    var _a;
    var rowIds = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useValueNode"])(function (editable) {
        var _a, _b;
        return ({
            rowIds: (_b = (_a = editable === null || editable === void 0 ? void 0 : editable.rows) === null || _a === void 0 ? void 0 : _a.map(function (c) { return c.id; })) !== null && _b !== void 0 ? _b : [],
        });
    }).rowIds;
    var childConstraints = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useOption"])('childConstraints');
    var components = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useOption"])('components');
    var cellSpacingY = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useCellSpacing"])().y;
    var insertAllowed = (childConstraints === null || childConstraints === void 0 ? void 0 : childConstraints.maxChildren)
        ? (childConstraints === null || childConstraints === void 0 ? void 0 : childConstraints.maxChildren) > rowIds.length
        : true;
    var InsertNewWithDefault = (_a = components === null || components === void 0 ? void 0 : components.InsertNew) !== null && _a !== void 0 ? _a : _Cell_InsertNew__WEBPACK_IMPORTED_MODULE_1__["default"];
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        rowIds.length > 0 ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: cellSpacingY !== 0
                ? { margin: -cellSpacingY / 2 + "px 0" }
                : undefined }, rowIds.map(function (id) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Row__WEBPACK_IMPORTED_MODULE_3__["default"], { nodeId: id, key: id })); }))) : null,
        insertAllowed ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InsertNewWithDefault, { childrenIds: rowIds }) : null));
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Rows));
//# sourceMappingURL=Rows.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/components/Editable/Inner/index.js":
/*!*************************************************************************!*\
  !*** ../packages/editor/lib-es/core/components/Editable/Inner/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks */ "../packages/editor/lib-es/core/components/hooks/index.js");
/* harmony import */ var _hooks_useKeepScrollPosition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useKeepScrollPosition */ "../packages/editor/lib-es/core/components/Editable/hooks/useKeepScrollPosition.js");
/* harmony import */ var _Rows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Rows */ "../packages/editor/lib-es/core/components/Editable/Inner/Rows.js");




var Inner = function () {
    var _a;
    var mode = Object(_hooks__WEBPACK_IMPORTED_MODULE_1__["useDisplayMode"])();
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var zoom = Object(_hooks__WEBPACK_IMPORTED_MODULE_1__["useZoom"])();
    Object(_hooks_useKeepScrollPosition__WEBPACK_IMPORTED_MODULE_2__["useKeepScrollPosition"])(ref);
    var rect = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
    var zoomTransformOriginY = window.innerHeight / 2 - (rect === null || rect === void 0 ? void 0 : rect.top);
    var offsetPercent = zoomTransformOriginY / (rect === null || rect === void 0 ? void 0 : rect.height);
    var backdropPercent = 50 * (1 - zoom);
    var left = backdropPercent + '%';
    var right = 100 - backdropPercent + '%';
    var top = backdropPercent * offsetPercent * 2 + '%';
    var bottom = 100 - backdropPercent * (1 - offsetPercent) * 2 + '%';
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { ref: ref, style: {
            position: 'relative',
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: {
                opacity: zoom < 1 ? 1 : 0,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                transition: '0.6s',
                clipPath: "polygon(0% 0%, 0% 100%, " + left + " 100%, " + left + " " + top + ", " + right + " " + top + ", " + right + " " + bottom + ", " + left + " " + bottom + ", " + left + " 100%, 100% 100%, 100% 0%)",
                background: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16  ' viewBox='0 0 8 8'%3E%3Cg fill='%23c5c5c5' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E\")",
            } }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: {
                transformOrigin: "center " + zoomTransformOriginY + "px",
                transform: "scale(" + zoom + ")",
                transition: '0.6s',
            }, className: 'react-page-editable react-page-editable-mode-' + mode },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Rows__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Inner));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/components/Editable/hooks/useKeepScrollPosition.js":
/*!*****************************************************************************************!*\
  !*** ../packages/editor/lib-es/core/components/Editable/hooks/useKeepScrollPosition.js ***!
  \*****************************************************************************************/
/*! exports provided: useKeepScrollPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useKeepScrollPosition", function() { return useKeepScrollPosition; });
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.throttle */ "../node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Cell_utils_scrollIntoViewWithOffset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Cell/utils/scrollIntoViewWithOffset */ "../packages/editor/lib-es/core/components/Cell/utils/scrollIntoViewWithOffset.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks */ "../packages/editor/lib-es/core/components/hooks/index.js");




function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight ||
                document.documentElement.clientHeight) /*or $(window).height() */ &&
        rect.right <=
            (window.innerWidth ||
                document.documentElement.clientWidth) /*or $(window).width() */);
}
var useKeepScrollPosition = function (ref) {
    var mode = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useDisplayMode"])();
    var firstElementInViewPortref = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        var onScroll = lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(function () {
            if (ref.current) {
                var firstInViewport = Array.prototype.find.call(ref.current.getElementsByClassName('react-page-cell'), function (cell) { return isElementInViewport(cell); });
                if (firstInViewport) {
                    firstElementInViewPortref.current = {
                        el: firstInViewport,
                        topOffset: firstInViewport.getBoundingClientRect().top,
                    };
                }
                else {
                    firstElementInViewPortref.current = null;
                }
            }
        }, 600);
        window.addEventListener('scroll', onScroll);
        return function () {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        if (firstElementInViewPortref.current) {
            var _a = firstElementInViewPortref.current, el_1 = _a.el, topOffset_1 = _a.topOffset;
            setTimeout(function () {
                Object(_Cell_utils_scrollIntoViewWithOffset__WEBPACK_IMPORTED_MODULE_2__["default"])(el_1, topOffset_1, 'auto');
            }, 0);
        }
    }, [mode]);
};
//# sourceMappingURL=useKeepScrollPosition.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/components/Editable/index.js":
/*!*******************************************************************!*\
  !*** ../packages/editor/lib-es/core/components/Editable/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FallbackDropArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FallbackDropArea */ "../packages/editor/lib-es/core/components/Editable/FallbackDropArea.js");
/* harmony import */ var _Inner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Inner */ "../packages/editor/lib-es/core/components/Editable/Inner/index.js");



var Editable = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FallbackDropArea__WEBPACK_IMPORTED_MODULE_1__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Inner__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Editable));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/components/HotKey/GlobalHotKeys.js":
/*!*************************************************************************!*\
  !*** ../packages/editor/lib-es/core/components/HotKey/GlobalHotKeys.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-hotkey */ "../node_modules/is-hotkey/lib/index.js");
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_hotkey__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_utils_objIsNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/utils/objIsNode */ "../packages/editor/lib-es/core/utils/objIsNode.js");
/* harmony import */ var _types_node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types/node */ "../packages/editor/lib-es/core/types/node.js");
/* harmony import */ var _utils_ancestorTree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/ancestorTree */ "../packages/editor/lib-es/core/utils/ancestorTree.js");
/* harmony import */ var _utils_cloneWithNewIds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/cloneWithNewIds */ "../packages/editor/lib-es/core/utils/cloneWithNewIds.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks */ "../packages/editor/lib-es/core/components/hooks/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var lastFocused = null;
var GlobalHotKeys = function (_a) {
    var focusRef = _a.focusRef;
    var editor = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useEditorStore"])();
    var undo = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useUndo"])();
    var redo = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useRedo"])();
    var setInsertMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useSetInsertMode"])();
    var isEditMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useIsEditMode"])();
    var blurAllCells = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useBlurAllCells"])();
    var focusedNodeIds = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useAllFocusedNodeIds"])();
    var someCellIsFocused = focusedNodeIds.length > 0;
    var focusedNodeId = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useFocusedNodeId"])();
    var focusParentId = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useParentCellId"])(focusedNodeId);
    var plugins = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useAllCellPluginsForNode"])(focusParentId);
    var focusCell = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useFocusCellById"])();
    var removeCells = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useRemoveMultipleNodeIds"])();
    var insertAfter = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useInsertAfter"])();
    var isInsertMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useIsInsertMode"])();
    var setEditMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useSetEditMode"])();
    var delegateToFoundPlugin = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (event, nodeId, handlerName, defaultHandler) { return __awaiter(void 0, void 0, void 0, function () {
        var node, plugin, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    node = editor.getNode(nodeId);
                    plugin = plugins.find(function (p) { var _a, _b; return p.id === ((_b = (_a = node) === null || _a === void 0 ? void 0 : _a.plugin) === null || _b === void 0 ? void 0 : _b.id); });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    if (!(isEditMode && node && plugin[handlerName])) return [3 /*break*/, 3];
                    return [4 /*yield*/, plugin[handlerName](event, node)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: 
                // if the plugin handler resolve or there is no, they do not handle it, so do the default
                return [4 /*yield*/, defaultHandler(event, node)];
                case 4:
                    // if the plugin handler resolve or there is no, they do not handle it, so do the default
                    _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    e_1 = _a.sent();
                    if (e_1) {
                        // tslint:disable-next-line:no-console
                        console.error(e_1);
                    }
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); }, [editor, isEditMode]);
    var handlers = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
        var handleCopy = function (deleteAfter) {
            var _a;
            var _b;
            if (deleteAfter === void 0) { deleteAfter = false; }
            // copy cell, unless text is selected
            if (((_b = window.getSelection()) === null || _b === void 0 ? void 0 : _b.type) !== 'Range' &&
                (focusedNodeIds === null || focusedNodeIds === void 0 ? void 0 : focusedNodeIds.length) > 0) {
                var node = Object(_utils_ancestorTree__WEBPACK_IMPORTED_MODULE_4__["getCommonAncestorTree"])(editor, focusedNodeIds);
                var cell = Object(_utils_cloneWithNewIds__WEBPACK_IMPORTED_MODULE_5__["cloneAsCell"])(node);
                var type = 'text/plain'; // json is not supported
                var blob = new Blob([JSON.stringify(cell)], { type: type });
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                var data = [new ClipboardItem((_a = {}, _a[type] = blob, _a))];
                navigator.clipboard.write(data);
                if (deleteAfter) {
                    removeCells(focusedNodeIds);
                }
            }
        };
        return [
            {
                hotkeys: ['Escape'],
                handler: function () {
                    if (someCellIsFocused) {
                        blurAllCells();
                    }
                    if (isInsertMode) {
                        setEditMode();
                    }
                },
            },
            {
                hotkeys: ['mod+z'],
                handler: function () {
                    undo();
                },
            },
            {
                hotkeys: ['mod+c'],
                handler: function () {
                    handleCopy(false);
                },
            },
            {
                hotkeys: ['mod+x'],
                handler: function () {
                    handleCopy(true);
                },
            },
            {
                hotkeys: ['mod+v'],
                handler: function () { return __awaiter(void 0, void 0, void 0, function () {
                    var node, _a, _b, commonAncestorNode, insertAfterNodeId, e_2;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _c.trys.push([0, 2, , 3]);
                                _b = (_a = JSON).parse;
                                return [4 /*yield*/, navigator.clipboard.readText()];
                            case 1:
                                node = _b.apply(_a, [_c.sent()]);
                                if (Object(_core_utils_objIsNode__WEBPACK_IMPORTED_MODULE_2__["objIsNode"])(node)) {
                                    commonAncestorNode = focusedNodeIds.length > 0
                                        ? Object(_utils_ancestorTree__WEBPACK_IMPORTED_MODULE_4__["getCommonAncestorTree"])(editor, focusedNodeIds)
                                        : null;
                                    insertAfterNodeId = commonAncestorNode
                                        ? Object(_types_node__WEBPACK_IMPORTED_MODULE_3__["isRow"])(commonAncestorNode)
                                            ? commonAncestorNode.cells.length === 1 // if it has just one cell, add below this cell. if it has multiple, add below this row
                                                ? commonAncestorNode.cells[0].id
                                                : commonAncestorNode.id
                                            : commonAncestorNode.rows[commonAncestorNode.rows.length - 1] // if common ancestor is a cell (usually the root cell, add below last row)
                                                .id
                                        : null;
                                    insertAfter(node, insertAfterNodeId);
                                }
                                return [3 /*break*/, 3];
                            case 2:
                                e_2 = _c.sent();
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); },
            },
            {
                hotkeys: ['ctrl+shift+z', 'ctrl+y', 'command+shift+z', 'command+y'],
                handler: function () {
                    redo();
                },
            },
            {
                hotkeys: ['alt+del', 'alt+backspace'],
                handler: function (event) {
                    delegateToFoundPlugin(event, focusedNodeId, 'handleRemoveHotKey', function () {
                        removeCells(focusedNodeIds);
                    });
                },
            },
        ];
    }, [
        focusedNodeId,
        focusedNodeIds,
        someCellIsFocused,
        blurAllCells,
        focusCell,
        removeCells,
        setEditMode,
        setInsertMode,
    ]);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        // when we have multiple instances, we try to send the event only to the right one
        // we do a little trick with a global variable (instead of requiring a wrapping context)
        lastFocused = focusRef.current;
        var keyHandler = function (event) {
            if (lastFocused !== focusRef.current)
                return;
            var matchingHandler = handlers.find(function (handler) {
                return handler.hotkeys.some(function (hotkey) { return is_hotkey__WEBPACK_IMPORTED_MODULE_0___default()(hotkey, event); });
            });
            matchingHandler === null || matchingHandler === void 0 ? void 0 : matchingHandler.handler(event);
        };
        document.addEventListener('keydown', keyHandler);
        var focusHandler = function () {
            lastFocused = focusRef.current;
        };
        focusRef.current.addEventListener('click', focusHandler);
        focusRef.current.addEventListener('mouseenter', focusHandler);
        return function () {
            var _a, _b;
            document.removeEventListener('keydown', keyHandler);
            (_a = focusRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('mouseenter', focusHandler);
            (_b = focusRef.current) === null || _b === void 0 ? void 0 : _b.removeEventListener('click', focusHandler);
            if (lastFocused === focusRef.current) {
                lastFocused = null;
            }
        };
    }, [handlers, someCellIsFocused, isEditMode, focusRef]);
    return null;
};
/* harmony default export */ __webpack_exports__["default"] = (GlobalHotKeys);
//# sourceMappingURL=GlobalHotKeys.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/components/Row/Droppable/index.js":
/*!************************************************************************!*\
  !*** ../packages/editor/lib-es/core/components/Row/Droppable/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cell_Droppable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Cell/Droppable */ "../packages/editor/lib-es/core/components/Cell/Droppable/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks */ "../packages/editor/lib-es/core/components/hooks/index.js");
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



var Droppable = function (_a) {
    var children = _a.children, nodeId = _a.nodeId;
    var isLayoutMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useIsLayoutMode"])();
    var isInsertMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useIsInsertMode"])();
    var _b = __read(Object(_Cell_Droppable__WEBPACK_IMPORTED_MODULE_1__["useCellDrop"])(nodeId), 2), ref = _b[0], isAllowed = _b[1];
    if (!(isLayoutMode || isInsertMode)) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "react-page-row-droppable-container" }, children);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { ref: ref, className: "react-page-row-droppable" }, children));
};
/* harmony default export */ __webpack_exports__["default"] = (Droppable);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/components/Row/ResizableRowCell.js":
/*!*************************************************************************!*\
  !*** ../packages/editor/lib-es/core/components/Row/ResizableRowCell.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-draggable */ "../node_modules/react-draggable/build/cjs/cjs.js");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use */ "../node_modules/react-use/esm/index.js");
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Cell */ "../packages/editor/lib-es/core/components/Cell/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks */ "../packages/editor/lib-es/core/components/hooks/index.js");
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





var ResizableRowCell = function (_a) {
    var nodeId = _a.nodeId, rowWidth = _a.rowWidth, rowHasInlineChildrenPosition = _a.rowHasInlineChildrenPosition, isLast = _a.isLast, offset = _a.offset, size = _a.size, maxSize = _a.maxSize;
    var stepWidth = rowWidth / 12; // we're going to keep it a real number to preserve some precision
    var allowResizeInEditMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useOption"])('allowResizeInEditMode');
    var isResizeMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useIsResizeMode"])();
    var isEditMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useIsEditMode"])();
    var isPreviewMode = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useIsPreviewMode"])();
    var resize = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useResizeCell"])(nodeId);
    var _b = __read(Object(react_use__WEBPACK_IMPORTED_MODULE_2__["useMeasure"])(), 2), ref = _b[0], cellHeight = _b[1].height;
    var cellSpacingY = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useCellSpacing"])().y;
    var showResizeHandle = !isPreviewMode &&
        !isLast &&
        (isResizeMode || (allowResizeInEditMode && isEditMode));
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cell__WEBPACK_IMPORTED_MODULE_3__["default"], { nodeId: nodeId, measureRef: ref }),
        showResizeHandle ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_draggable__WEBPACK_IMPORTED_MODULE_1___default.a, { bounds: {
                top: 0,
                bottom: 0,
                left: Math.round(stepWidth),
                right: Math.round(rowWidth - stepWidth),
            }, position: {
                x: rowHasInlineChildrenPosition === 'right'
                    ? Math.round(stepWidth * (12 - offset))
                    : Math.round(stepWidth * offset),
                y: 0,
            }, axis: "x", onDrag: function (e, data) {
                var diff = Math.round(data.deltaX / stepWidth);
                var newSize = rowHasInlineChildrenPosition === 'right'
                    ? size - diff
                    : size + diff;
                if (newSize > 0 && newSize <= maxSize)
                    resize(newSize);
            }, grid: [Math.round(stepWidth), 0] },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "resize-handle", style: {
                    // fix floating style
                    height: rowHasInlineChildrenPosition ? cellHeight : 'auto',
                    margin: cellSpacingY !== 0 ? cellSpacingY / 2 + "px 0" : undefined,
                }, onClick: function (e) { return e.stopPropagation(); } }))) : null));
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ResizableRowCell));
//# sourceMappingURL=ResizableRowCell.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/components/Row/index.js":
/*!**************************************************************!*\
  !*** ../packages/editor/lib-es/core/components/Row/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../packages/editor/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use */ "../node_modules/react-use/esm/index.js");
/* harmony import */ var _types_node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types/node */ "../packages/editor/lib-es/core/types/node.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks */ "../packages/editor/lib-es/core/components/hooks/index.js");
/* harmony import */ var _Droppable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Droppable */ "../packages/editor/lib-es/core/components/Row/Droppable/index.js");
/* harmony import */ var _ResizableRowCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ResizableRowCell */ "../packages/editor/lib-es/core/components/Row/ResizableRowCell.js");
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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};







var reduceToIdAndSizeArray = function (acc, node, index, array) {
    var _a, _b;
    var nextNode = array[index + 1];
    var size = Object(_types_node__WEBPACK_IMPORTED_MODULE_3__["isRow"])(node) ? 12 : node.size;
    var nextSize = !nextNode || Object(_types_node__WEBPACK_IMPORTED_MODULE_3__["isRow"])(nextNode) ? 0 : nextNode.size;
    var offset = size + ((_b = (_a = acc[index - 1]) === null || _a === void 0 ? void 0 : _a.offset) !== null && _b !== void 0 ? _b : 0);
    return __spreadArray(__spreadArray([], __read(acc), false), [
        {
            id: node.id,
            size: size,
            maxSize: size + nextSize - 1,
            offset: offset,
        },
    ], false);
};
var Row = function (_a) {
    var _b;
    var nodeId = _a.nodeId;
    var _c = __read(Object(react_use__WEBPACK_IMPORTED_MODULE_2__["useMeasure"])(), 2), ref = _c[0], rowWidth = _c[1].width;
    var hoverPosition = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useNodeHoverPosition"])(nodeId);
    var childrenWithOffsets = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useNodeProps"])(nodeId, function (node) {
        var _a, _b, _c, _d;
        return Object(_types_node__WEBPACK_IMPORTED_MODULE_3__["isRow"])(node)
            ? (_b = (_a = node.cells) === null || _a === void 0 ? void 0 : _a.reduce(reduceToIdAndSizeArray, [])) !== null && _b !== void 0 ? _b : []
            : (_d = (_c = node.rows) === null || _c === void 0 ? void 0 : _c.reduce(reduceToIdAndSizeArray, [])) !== null && _d !== void 0 ? _d : [];
    });
    var rowHasInlineChildrenPosition = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useNodeProps"])(nodeId, function (node) { var _a; return Object(_types_node__WEBPACK_IMPORTED_MODULE_3__["isRow"])(node) && node.cells.length === 2 && ((_a = node.cells[0]) === null || _a === void 0 ? void 0 : _a.inline); });
    var _d = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useCellSpacing"])(), cellSpacingX = _d.x, cellSpacingY = _d.y;
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Droppable__WEBPACK_IMPORTED_MODULE_5__["default"], { nodeId: nodeId },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { ref: ref, className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('react-page-row', {
                'react-page-row-has-floating-children': Boolean(rowHasInlineChildrenPosition),
            }), style: {
                position: 'relative',
                margin: cellSpacingX !== 0 ? "0 " + -cellSpacingX / 2 + "px" : undefined,
            } },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { style: {
                    position: 'absolute',
                    pointerEvents: 'none',
                    top: cellSpacingY / 2 + "px",
                    left: cellSpacingX / 2 + "px",
                    bottom: cellSpacingY / 2 + "px",
                    right: cellSpacingX / 2 + "px",
                }, className: classnames__WEBPACK_IMPORTED_MODULE_0___default()((_b = {
                        'react-page-row-is-hovering-this': Boolean(hoverPosition)
                    },
                    _b["react-page-row-is-hovering-" + (hoverPosition || '')] = Boolean(hoverPosition),
                    _b)) }),
            childrenWithOffsets.map(function (_a, index) {
                var offset = _a.offset, id = _a.id, size = _a.size, maxSize = _a.maxSize;
                return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ResizableRowCell__WEBPACK_IMPORTED_MODULE_6__["default"], { key: id, isLast: index === childrenWithOffsets.length - 1, rowWidth: rowWidth, nodeId: id, rowHasInlineChildrenPosition: rowHasInlineChildrenPosition, offset: offset, size: size, maxSize: maxSize }));
            }))));
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Row));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/helper/throttle/index.js":
/*!***************************************************************!*\
  !*** ../packages/editor/lib-es/core/helper/throttle/index.js ***!
  \***************************************************************/
/*! exports provided: delay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const */ "../packages/editor/lib-es/core/const.js");

var delay = _const__WEBPACK_IMPORTED_MODULE_0__["isProduction"] ? 40 : 60;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/migrations/serialzeValue.js":
/*!******************************************************************!*\
  !*** ../packages/editor/lib-es/core/migrations/serialzeValue.js ***!
  \******************************************************************/
/*! exports provided: serialzeValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serialzeValue", function() { return serialzeValue; });
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
var serializeRow = function (r, cellPlugins) {
    return __assign(__assign({}, r), { cells: r.cells.map(function (c) { return serializeCell(c, cellPlugins); }) });
};
var serializeCell = function (c, cellPlugins) {
    var _a;
    var pluginDef = c.plugin;
    var pluginFound = pluginDef
        ? cellPlugins.find(function (p) { return p.id === pluginDef.id; })
        : null;
    var transformData = function (dataIn) {
        return (pluginFound === null || pluginFound === void 0 ? void 0 : pluginFound.serialize) ? pluginFound.serialize(dataIn) : dataIn;
    };
    var dataI18n = c.dataI18n
        ? Object.keys(c.dataI18n).reduce(function (acc, lang) {
            var _a;
            var _b;
            return (__assign(__assign({}, acc), (_a = {}, _a[lang] = transformData((_b = c.dataI18n) === null || _b === void 0 ? void 0 : _b[lang]), _a)));
        }, {})
        : null;
    return __assign(__assign({}, c), { rows: (_a = c.rows) === null || _a === void 0 ? void 0 : _a.map(function (r) { return serializeRow(r, cellPlugins); }), dataI18n: dataI18n });
};
var serialzeValue = function (_a, plugins) {
    var rows = _a.rows, rest = __rest(_a, ["rows"]);
    return __assign(__assign({}, rest), { rows: rows.map(function (c) { return serializeRow(c, plugins); }) });
};
//# sourceMappingURL=serialzeValue.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/service/hover/computeHover.js":
/*!********************************************************************!*\
  !*** ../packages/editor/lib-es/core/service/hover/computeHover.js ***!
  \********************************************************************/
/*! exports provided: classes, computeHover, computeLevel, CALLBACK_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classes", function() { return classes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeHover", function() { return computeHover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeLevel", function() { return computeLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALLBACK_LIST", function() { return CALLBACK_LIST; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "../packages/editor/lib-es/core/types/index.js");
/* harmony import */ var _utils_deepEquals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/deepEquals */ "../packages/editor/lib-es/core/utils/deepEquals.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logger */ "../packages/editor/lib-es/core/service/logger/index.js");
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
var _a;



/**
 * NO (None): No drop zone.
 *
 * Corners are counted clockwise, beginning top left
 * C1 (Corner top left): Position decided by top left corner function
 * C2 (Corner top right): Position decided by top right corner function
 * C3 (Corner bottom right): Position decided by bottom right corner function
 * C4 (Corner bottom left): Position decided by bottom left corner function
 *
 * Above:
 * AH (Above here): above, same level
 * AA (Above of self or some ancestor): Above, compute active level using classification functions, e.g. log, sin, mx + t
 *
 * Below:
 * BH (Below here)
 * BA (Below of self or some ancestor)
 *
 * Left of:
 * LH (Left of here)
 * LA (Left of self or some ancestor)
 *
 * Right of:
 * RH (Right of here)
 * RA (Right of self or some ancestor)
 *
 * Inside / inline
 * IL (Inline left)
 * IR (Inline right)
 */
var classes = {
    NO: 0,
    C1: 10,
    C2: 11,
    C3: 12,
    C4: 13,
    AH: 200,
    AA: 201,
    BH: 210,
    BA: 211,
    LH: 220,
    LA: 221,
    RH: 230,
    RA: 231,
    IL: 300,
    IR: 301,
};
var c = classes;
/**
 * A list of matrices that are used to define the callback function.
 *
 * @type {{10x10: *[], 10x10-no-inline: *[]}}
 */
var MATRIX_LIST = {
    '10x10': [
        [c.C1, c.AA, c.AA, c.AA, c.AA, c.AA, c.AA, c.AA, c.AA, c.C2],
        [c.LA, c.IL, c.IL, c.IL, c.AH, c.AH, c.IR, c.IR, c.IR, c.RA],
        [c.LA, c.IL, c.IL, c.IL, c.AH, c.AH, c.IR, c.IR, c.IR, c.RA],
        [c.LA, c.IL, c.IL, c.IL, c.AH, c.AH, c.IR, c.IR, c.IR, c.RA],
        [c.LA, c.LH, c.LH, c.LH, c.C1, c.C2, c.RH, c.RH, c.RH, c.RA],
        [c.LA, c.LH, c.LH, c.LH, c.C4, c.C3, c.RH, c.RH, c.RH, c.RA],
        [c.LA, c.LH, c.LH, c.C4, c.BH, c.BH, c.C3, c.IR, c.RH, c.RA],
        [c.LA, c.LH, c.C4, c.BH, c.BH, c.BH, c.BH, c.C3, c.RH, c.RA],
        [c.LA, c.C4, c.BH, c.BH, c.BH, c.BH, c.BH, c.BH, c.C3, c.RA],
        [c.C4, c.BA, c.BA, c.BA, c.BA, c.BA, c.BA, c.BA, c.BA, c.C3],
    ],
    '10x10-no-inline': [
        [c.C1, c.AA, c.AA, c.AA, c.AA, c.AA, c.AA, c.AA, c.AA, c.C2],
        [c.LA, c.C1, c.AH, c.AH, c.AH, c.AH, c.AH, c.AH, c.C2, c.RA],
        [c.LA, c.LH, c.C1, c.AH, c.AH, c.AH, c.AH, c.C2, c.RH, c.RA],
        [c.LA, c.LH, c.LH, c.C1, c.AH, c.AH, c.C2, c.RH, c.RH, c.RA],
        [c.LA, c.LH, c.LH, c.LH, c.C1, c.C2, c.RH, c.RH, c.RH, c.RA],
        [c.LA, c.LH, c.LH, c.LH, c.C4, c.C3, c.RH, c.RH, c.RH, c.RA],
        [c.LA, c.LH, c.LH, c.C4, c.BH, c.BH, c.C3, c.RH, c.RH, c.RA],
        [c.LA, c.LH, c.C4, c.BH, c.BH, c.BH, c.BH, c.C3, c.RH, c.RA],
        [c.LA, c.C4, c.BH, c.BH, c.BH, c.BH, c.BH, c.BH, c.C3, c.RA],
        [c.C4, c.BA, c.BA, c.BA, c.BA, c.BA, c.BA, c.BA, c.BA, c.C3],
    ],
};
/**
 * Computes the average width and height for cells in a room.
 *
 * @param room
 * @param matrix
 * @returns {{x: number, y: number}}
 */
var getRoomScale = function (_a) {
    var room = _a.room, matrix = _a.matrix;
    var rows = matrix.length;
    var cells = matrix[0].length;
    var scalingX = room.width / cells;
    var scalingY = room.height / rows;
    return {
        x: scalingX,
        y: scalingY,
    };
};
/**
 * Returns the index of the hover cell.
 *
 * @param mouse
 * @param scale
 */
var getMouseHoverCell = function (_a) {
    var mouse = _a.mouse, scale = _a.scale;
    return ({
        cell: Math.floor(mouse.x / scale.x),
        row: Math.floor(mouse.y / scale.y),
    });
};
/**
 * Used for caching.
 */
var last = { '10x10': null, '10x10-no-inline': null };
var computeHover = function (drag, hover, actions, _a) {
    var _b, _c;
    var room = _a.room, mouse = _a.mouse, cellPlugins = _a.cellPlugins;
    var allowInlineNeighbours = (_c = (_b = cellPlugins.find(function (p) { return p.id === hover.pluginId; })) === null || _b === void 0 ? void 0 : _b.allowInlineNeighbours) !== null && _c !== void 0 ? _c : false;
    var matrixName = "10x10" + (allowInlineNeighbours ? '' : '-no-inline');
    var matrix = MATRIX_LIST[matrixName];
    var scale = getRoomScale({ room: room, matrix: matrix });
    var hoverCell = getMouseHoverCell({ mouse: mouse, scale: scale });
    var rows = matrix.length;
    var cells = matrix[0].length;
    if (hoverCell.row >= rows) {
        hoverCell.row = rows - 1;
    }
    else if (hoverCell.row < 0) {
        hoverCell.row = 0;
    }
    if (hoverCell.cell >= cells) {
        hoverCell.cell = cells - 1;
    }
    else if (hoverCell.cell < 0) {
        hoverCell.cell = 0;
    }
    var cell = matrix[hoverCell.row][hoverCell.cell];
    if (!CALLBACK_LIST[cell]) {
        _logger__WEBPACK_IMPORTED_MODULE_2__["default"].error('Matrix callback not found.', {
            room: room,
            mouse: mouse,
            matrix: matrix,
            scale: scale,
            hoverCell: hoverCell,
            rows: rows,
            cells: cells,
        });
        return;
    }
    var all = {
        item: drag.id,
        hover: hover.id,
        actions: actions,
        ctx: {
            room: room,
            mouse: mouse,
            position: hoverCell,
            size: { rows: rows, cells: cells },
            scale: scale,
        },
    };
    if (Object(_utils_deepEquals__WEBPACK_IMPORTED_MODULE_1__["default"])(all, last[matrixName])) {
        return;
    }
    last[matrixName] = all;
    return CALLBACK_LIST[cell](drag, hover, actions, {
        room: room,
        mouse: mouse,
        position: hoverCell,
        size: { rows: rows, cells: cells },
        cellPlugins: cellPlugins,
        scale: scale,
    });
};
/**
 * Return the mouse position relative to the cell.
 */
var relativeMousePosition = function (_a) {
    var mouse = _a.mouse, position = _a.position, scale = _a.scale;
    return ({
        x: Math.round(mouse.x - position.cell * scale.x),
        y: Math.round(mouse.y - position.row * scale.y),
    });
};
/**
 * Computes the drop level based on the mouse position and the cell width.
 */
var computeLevel = function (_a) {
    var size = _a.size, levels = _a.levels, position = _a.position;
    if (size <= (levels + 1) * 2) {
        return Math.round(position / (size / levels));
    }
    var spare = size - (levels + 1) * 2;
    var steps = [0];
    var current = spare;
    for (var i = 0; i <= levels; i++) {
        steps.push(steps[i] + current / 2);
        current /= 2;
        if (position >= steps[i] + i * 2 && position < steps[i + 1] + (i + 1) * 2) {
            return i;
        }
    }
    return levels;
};
/**
 * Computes the horizontal drop level based on the mouse position.
 *
 * @param mouse
 * @param position
 * @param hover
 * @param scale
 * @param level
 * @param inv returns the inverse drop level. Usually true for left and above drop level computation.
 * @returns number
 */
var computeHorizontal = function (_a, inv) {
    var mouse = _a.mouse, position = _a.position, hover = _a.hover, scale = _a.scale, level = _a.level;
    if (inv === void 0) { inv = false; }
    var x = relativeMousePosition({ mouse: mouse, position: position, scale: scale }).x;
    var at = computeLevel({ size: scale.x, position: x, levels: level });
    if (Object(_types__WEBPACK_IMPORTED_MODULE_0__["isRow"])(hover)) {
        // Is row, always opt for lowest level
        return level;
    }
    // If the hovered element is an inline element, level 0 would be directly besides it which doesn't work.
    // Set it to 1 instead.
    if (hover.inline && at === 0) {
        at = 1;
    }
    return inv ? level - at : at;
};
/**
 * Computes the vertical drop level based on the mouse position.
 *
 * @returns number
 */
var computeVertical = function (_a, inv) {
    var level = _a.level, mouse = _a.mouse, hover = _a.hover, position = _a.position, scale = _a.scale;
    if (inv === void 0) { inv = false; }
    var y = relativeMousePosition({ mouse: mouse, position: position, scale: scale }).y;
    var at = computeLevel({ size: scale.y, position: y, levels: level });
    if (Object(_types__WEBPACK_IMPORTED_MODULE_0__["isRow"])(hover)) {
        // Is row, always opt for lowest level
        return level;
    }
    // If the hovered element is an inline element, level 0 would be directly besides it which doesn't work.
    // Set it to 1 instead.
    if (hover.inline && at === 0) {
        at = 1;
    }
    return inv ? level - at : at;
};
var getDropLevel = function (hover) {
    return !Object(_types__WEBPACK_IMPORTED_MODULE_0__["isRow"])(hover) && hover.inline ? 1 : 0;
};
/**
 * A list of callbacks.
 */
var CALLBACK_LIST = (_a = {},
    _a[c.NO] = function (item, hover, _a) {
        var clear = _a.clear;
        return clear();
    },
    /* corners */
    _a[c.C1] = function (item, hover, _a, ctx) {
        var leftOf = _a.leftOf, above = _a.above;
        var mouse = relativeMousePosition(ctx);
        var level = getDropLevel(hover);
        if (mouse.x < mouse.y) {
            return leftOf(item, hover, { level: level });
        }
        above(item, hover, { level: level });
    },
    _a[c.C2] = function (item, hover, _a, ctx) {
        var rightOf = _a.rightOf, above = _a.above;
        var mouse = relativeMousePosition(ctx);
        var level = getDropLevel(hover);
        if (mouse.x > mouse.y) {
            return rightOf(item, hover, { level: level });
        }
        above(item, hover, { level: level });
    },
    _a[c.C3] = function (item, hover, _a, ctx) {
        var rightOf = _a.rightOf, below = _a.below;
        var mouse = relativeMousePosition(ctx);
        var level = getDropLevel(hover);
        if (mouse.x > mouse.y) {
            return rightOf(item, hover, { level: level });
        }
        below(item, hover, { level: level });
    },
    _a[c.C4] = function (item, hover, _a, ctx) {
        var leftOf = _a.leftOf, below = _a.below;
        var mouse = relativeMousePosition(ctx);
        var level = getDropLevel(hover);
        if (mouse.x < mouse.y) {
            return leftOf(item, hover, { level: level });
        }
        below(item, hover, { level: level });
    },
    /* heres */
    _a[c.AH] = function (item, hover, _a) {
        var above = _a.above;
        var level = getDropLevel(hover);
        above(item, hover, { level: level });
    },
    _a[c.BH] = function (item, hover, _a) {
        var below = _a.below;
        var level = getDropLevel(hover);
        below(item, hover, { level: level });
    },
    _a[c.LH] = function (item, hover, _a) {
        var leftOf = _a.leftOf;
        var level = getDropLevel(hover);
        leftOf(item, hover, { level: level });
    },
    _a[c.RH] = function (item, hover, _a) {
        var rightOf = _a.rightOf;
        var level = getDropLevel(hover);
        rightOf(item, hover, { level: level });
    },
    /* ancestors */
    _a[c.AA] = function (item, hover, _a, ctx) {
        var above = _a.above;
        return above(item, hover, {
            level: computeVertical(__assign(__assign({}, ctx), { hover: hover, level: hover.levels.above }), true),
        });
    },
    _a[c.BA] = function (item, hover, _a, ctx) {
        var below = _a.below;
        return below(item, hover, {
            level: computeVertical(__assign(__assign({}, ctx), { hover: hover, level: hover.levels.below })),
        });
    },
    _a[c.LA] = function (item, hover, _a, ctx) {
        var leftOf = _a.leftOf;
        return leftOf(item, hover, {
            level: computeHorizontal(__assign(__assign({}, ctx), { hover: hover, level: hover.levels.left }), true),
        });
    },
    _a[c.RA] = function (item, hover, _a, ctx) {
        var rightOf = _a.rightOf;
        return rightOf(item, hover, {
            level: computeHorizontal(__assign(__assign({}, ctx), { hover: hover, level: hover.levels.right })),
        });
    },
    /* inline */
    _a[c.IL] = function (item, hover, _a, _b) {
        var _c;
        var inlineLeft = _a.inlineLeft, leftOf = _a.leftOf;
        var cellPlugins = _b.cellPlugins;
        if (Object(_types__WEBPACK_IMPORTED_MODULE_0__["isRow"])(item) || Object(_types__WEBPACK_IMPORTED_MODULE_0__["isRow"])(hover)) {
            return;
        }
        var inline = hover.inline, hasInlineNeighbour = hover.hasInlineNeighbour;
        var plugin = cellPlugins.find(function (p) {
            var _a;
            return p.id ===
                (typeof item.plugin === 'string' ? item.plugin : (_a = item.plugin) === null || _a === void 0 ? void 0 : _a.id);
        });
        var isInlineable = (_c = plugin === null || plugin === void 0 ? void 0 : plugin.isInlineable) !== null && _c !== void 0 ? _c : false;
        if (inline || !isInlineable) {
            return leftOf(item, hover, { level: 2 });
        }
        if (hasInlineNeighbour && hasInlineNeighbour !== item.id) {
            return leftOf(item, hover, { level: 2 });
        }
        if (hasInlineNeighbour &&
            hasInlineNeighbour === item.id &&
            item.inline === 'left') {
            return leftOf(item, hover, { level: 2 });
        }
        inlineLeft(item, hover);
    },
    _a[c.IR] = function (item, hover, _a, _b) {
        var _c;
        var inlineRight = _a.inlineRight, rightOf = _a.rightOf;
        var cellPlugins = _b.cellPlugins;
        if (Object(_types__WEBPACK_IMPORTED_MODULE_0__["isRow"])(item) || Object(_types__WEBPACK_IMPORTED_MODULE_0__["isRow"])(hover)) {
            return;
        }
        var inline = hover.inline, hasInlineNeighbour = hover.hasInlineNeighbour;
        var plugin = cellPlugins.find(function (p) {
            var _a;
            return p.id ===
                (typeof item.plugin === 'string' ? item.plugin : (_a = item.plugin) === null || _a === void 0 ? void 0 : _a.id);
        });
        var isInlineable = (_c = plugin === null || plugin === void 0 ? void 0 : plugin.isInlineable) !== null && _c !== void 0 ? _c : false;
        if (inline || !isInlineable) {
            return rightOf(item, hover, { level: 2 });
        }
        if (hasInlineNeighbour && hasInlineNeighbour !== item.id) {
            return rightOf(item, hover, { level: 2 });
        }
        if (hasInlineNeighbour &&
            hasInlineNeighbour === item.id &&
            item.inline === 'right') {
            return rightOf(item, hover, { level: 2 });
        }
        inlineRight(item, hover);
    },
    _a);
//# sourceMappingURL=computeHover.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/service/hover/input.js":
/*!*************************************************************!*\
  !*** ../packages/editor/lib-es/core/service/hover/input.js ***!
  \*************************************************************/
/*! exports provided: computeAndDispatchInsert, computeAndDispatchHover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeAndDispatchInsert", function() { return computeAndDispatchInsert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeAndDispatchHover", function() { return computeAndDispatchHover; });
/* harmony import */ var _computeHover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computeHover */ "../packages/editor/lib-es/core/service/hover/computeHover.js");

var computeCurrentDropPosition = function (actions, hover, drag, monitor, element, cellPlugins) {
    var mousePosition = monitor.getClientOffset();
    var componentPosition = element.getBoundingClientRect();
    var room = {
        height: componentPosition.bottom - componentPosition.top,
        width: componentPosition.right - componentPosition.left,
    };
    var mouse = {
        y: mousePosition.y - componentPosition.top,
        x: mousePosition.x - componentPosition.left,
    };
    Object(_computeHover__WEBPACK_IMPORTED_MODULE_0__["computeHover"])(drag, hover, actions, {
        room: room,
        mouse: mouse,
        cellPlugins: cellPlugins,
    });
};
var computeAndDispatchInsert = function (hover, drag, monitor, element, actions, cellPlugins) {
    return computeCurrentDropPosition(actions, hover, drag, monitor, element, cellPlugins);
};
var computeAndDispatchHover = function (hover, drag, monitor, element, actions, cellPlugins) {
    return computeCurrentDropPosition(actions, hover, drag, monitor, element, cellPlugins);
};
//# sourceMappingURL=input.js.map

/***/ }),

/***/ "../packages/editor/lib-es/core/service/logger/index.js":
/*!**************************************************************!*\
  !*** ../packages/editor/lib-es/core/service/logger/index.js ***!
  \**************************************************************/
/*! exports provided: Logger, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
// tslint:disable:no-console
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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var trace = function () {
    var e = new Error('dummy');
    return e.stack
        .replace(/^[^(]+?[\n$]/gm, '')
        .replace(/^\s+at\s+/gm, '')
        .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@')
        .split('\n');
};
var Logger = /** @class */ (function () {
    function Logger() {
    }
    /**
     * Logs a warning. Warnings are things that are exceptional, but easily to recover from.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.warn.apply(console, __spreadArray(['Warning:'], __read(args), false));
    };
    /**
     * Logs a debug message. Debug messages are things that help developers debugging things.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log.apply(console, __spreadArray(['Debug:'], __read(args), false));
    };
    /**
     * Logs an info. Infos are things that might be interesting for someone who needs to take a closer look.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log.apply(console, __spreadArray(['Info:'], __read(args), false));
    };
    /**
     * Logs an error. Error are things that are exceptional, but can be recovered from.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.error.apply(console, __spreadArray(['Error:'], __read(args), false));
        console.error('Trace:', trace());
    };
    /**
     * Logs a fatal error. Fatal errors are things that are exceptional and can not be recovered from.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Logger.prototype.fatal = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.error.apply(console, __spreadArray(['Fatal:'], __read(args), false));
        console.error('Trace:', trace());
        throw new Error(args.join(' '));
    };
    /**
     * Logs a message.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log.apply(console, __spreadArray(['Fatal:'], __read(args), false));
        console.log('Trace:', trace());
    };
    return Logger;
}());

var instance = new Logger();
/* harmony default export */ __webpack_exports__["default"] = (instance);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../packages/editor/lib-es/editor/EditableEditor.js":
/*!**********************************************************!*\
  !*** ../packages/editor/lib-es/editor/EditableEditor.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_components_Editable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/components/Editable */ "../packages/editor/lib-es/core/components/Editable/index.js");
/* harmony import */ var _core_components_HotKey_GlobalHotKeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/components/HotKey/GlobalHotKeys */ "../packages/editor/lib-es/core/components/HotKey/GlobalHotKeys.js");
/* harmony import */ var _core_EditorStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/EditorStore */ "../packages/editor/lib-es/core/EditorStore.js");
/* harmony import */ var _core_Provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Provider */ "../packages/editor/lib-es/core/Provider/index.js");
/* harmony import */ var _ui_EditorUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/EditorUI */ "../packages/editor/lib-es/ui/EditorUI/index.js");
/* harmony import */ var _StickyWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StickyWrapper */ "../packages/editor/lib-es/editor/StickyWrapper.js");







var EditableEditor = function (_a) {
    var value = _a.value, lang = _a.lang, children = _a.children, options = _a.options, renderOptions = _a.renderOptions, callbacks = _a.callbacks;
    var theValue = value || Object(_core_EditorStore__WEBPACK_IMPORTED_MODULE_3__["createEmptyState"])();
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_core_Provider__WEBPACK_IMPORTED_MODULE_4__["default"], { lang: lang, callbacks: callbacks, value: theValue, renderOptions: renderOptions, options: options },
        children,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StickyWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], null, function (stickyNess) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_core_components_HotKey_GlobalHotKeys__WEBPACK_IMPORTED_MODULE_2__["default"], { focusRef: stickyNess.focusRef }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_core_components_Editable__WEBPACK_IMPORTED_MODULE_1__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_EditorUI__WEBPACK_IMPORTED_MODULE_5__["default"], { stickyNess: stickyNess }))); })));
};
/* harmony default export */ __webpack_exports__["default"] = (EditableEditor);
//# sourceMappingURL=EditableEditor.js.map

/***/ }),

/***/ "../packages/editor/lib-es/editor/StickyWrapper.js":
/*!*********************************************************!*\
  !*** ../packages/editor/lib-es/editor/StickyWrapper.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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

var StickyWrapper = function (_a) {
    var children = _a.children;
    var ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    var stickyElRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    var _b = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), 2), shouldStickToTop = _b[0], setShouldStickToTop = _b[1];
    var _c = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true), 2), shouldStickToBottom = _c[0], setShouldStickToBottom = _c[1];
    var _d = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), 2), rightOffset = _d[0], setRightOffset = _d[1];
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        var calc = function () {
            if (ref.current) {
                var _a = ref.current.getBoundingClientRect(), top_1 = _a.top, left = _a.left;
                var bottom = top_1 + ref.current.clientHeight;
                // document.documentElement.clientWidth is without scrollbars, so better for us
                var right = document.documentElement.clientWidth - left - ref.current.clientWidth;
                var uiHeight = stickyElRef.current
                    ? stickyElRef.current.clientHeight
                    : 400;
                setRightOffset(right);
                setShouldStickToTop(top_1 > window.innerHeight - uiHeight);
                setShouldStickToBottom(bottom < window.innerHeight);
            }
        };
        document.addEventListener('scroll', calc);
        window.addEventListener('resize', calc);
        var observer = null;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (global.IntersectionObserver) {
            observer = new IntersectionObserver(calc);
            if (ref.current) {
                observer.observe(ref.current);
            }
        }
        // do it once
        calc();
        return function () {
            document.removeEventListener('scroll', calc);
            window.removeEventListener('resize', calc);
            observer === null || observer === void 0 ? void 0 : observer.disconnect();
        };
    }, [ref, stickyElRef]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { position: 'relative' }, ref: ref }, children({
        rightOffset: rightOffset,
        stickyElRef: stickyElRef,
        focusRef: ref,
        shouldStickToTop: shouldStickToTop,
        shouldStickToBottom: shouldStickToBottom,
    })));
};
/* harmony default export */ __webpack_exports__["default"] = (StickyWrapper);
//# sourceMappingURL=StickyWrapper.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/global.js */ "../node_modules/next/dist/compiled/webpack/global.js")))

/***/ }),

/***/ "../packages/editor/lib-es/ui/EditorUI/index.js":
/*!******************************************************!*\
  !*** ../packages/editor/lib-es/ui/EditorUI/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ThemeProvider */ "../packages/editor/lib-es/ui/ThemeProvider/index.js");
/* harmony import */ var _PluginDrawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PluginDrawer */ "../packages/editor/lib-es/ui/PluginDrawer/index.js");
/* harmony import */ var _Trash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Trash */ "../packages/editor/lib-es/ui/Trash/index.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Sidebar */ "../packages/editor/lib-es/ui/Sidebar/index.js");
/* harmony import */ var _core_components_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/components/hooks */ "../packages/editor/lib-es/core/components/hooks/index.js");
/* harmony import */ var _MultiNodesBottomToolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MultiNodesBottomToolbar */ "../packages/editor/lib-es/ui/MultiNodesBottomToolbar/index.js");







/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_a) {
    var _b = _a.stickyNess, stickyNess = _b === void 0 ? {
        shouldStickToTop: false,
        shouldStickToBottom: false,
        rightOffset: 0,
    } : _b;
    var hideEditorSidebar = Object(_core_components_hooks__WEBPACK_IMPORTED_MODULE_5__["useOption"])('hideEditorSidebar');
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Trash__WEBPACK_IMPORTED_MODULE_3__["Trash"], null),
        !hideEditorSidebar && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_4__["Sidebar"], { stickyNess: stickyNess }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PluginDrawer__WEBPACK_IMPORTED_MODULE_2__["PluginDrawer"], null),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MultiNodesBottomToolbar__WEBPACK_IMPORTED_MODULE_6__["MultiNodesBottomToolbar"], null)));
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../packages/editor/lib-es/ui/MultiNodesBottomToolbar/DeleteAll.js":
/*!*************************************************************************!*\
  !*** ../packages/editor/lib-es/ui/MultiNodesBottomToolbar/DeleteAll.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Delete */ "../node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_components_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/components/hooks */ "../packages/editor/lib-es/core/components/hooks/index.js");




var DeleteAll = function () {
    var remove = Object(_core_components_hooks__WEBPACK_IMPORTED_MODULE_3__["useRemoveMultipleNodeIds"])();
    var focused = Object(_core_components_hooks__WEBPACK_IMPORTED_MODULE_3__["useAllFocusedNodeIds"])();
    var t = Object(_core_components_hooks__WEBPACK_IMPORTED_MODULE_3__["useUiTranslator"])().t;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], { title: t('Remove all selected') },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], { onClick: function () { return remove(focused); }, "aria-label": "delete", color: "secondary" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2___default.a, null))));
};
/* harmony default export */ __webpack_exports__["default"] = (DeleteAll);
//# sourceMappingURL=DeleteAll.js.map

/***/ }),

/***/ "../packages/editor/lib-es/ui/MultiNodesBottomToolbar/DuplicateAll.js":
/*!****************************************************************************!*\
  !*** ../packages/editor/lib-es/ui/MultiNodesBottomToolbar/DuplicateAll.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_components_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/components/hooks */ "../packages/editor/lib-es/core/components/hooks/index.js");
/* harmony import */ var _material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/FileCopy */ "../node_modules/@material-ui/icons/FileCopy.js");
/* harmony import */ var _material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_3__);




var DuplicateAll = function () {
    var duplicate = Object(_core_components_hooks__WEBPACK_IMPORTED_MODULE_2__["useDuplicateMultipleCells"])();
    var t = Object(_core_components_hooks__WEBPACK_IMPORTED_MODULE_2__["useUiTranslator"])().t;
    var nodeIds = Object(_core_components_hooks__WEBPACK_IMPORTED_MODULE_2__["useAllFocusedNodeIds"])();
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Tooltip"], { title: t('Duplicate al') },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["IconButton"], { onClick: function () { return duplicate(nodeIds); }, "aria-label": "delete", color: "default" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_3___default.a, null))));
};
/* harmony default export */ __webpack_exports__["default"] = (DuplicateAll);
//# sourceMappingURL=DuplicateAll.js.map

/***/ }),

/***/ "../packages/editor/lib-es/ui/MultiNodesBottomToolbar/index.js":
/*!*********************************************************************!*\
  !*** ../packages/editor/lib-es/ui/MultiNodesBottomToolbar/index.js ***!
  \*********************************************************************/
/*! exports provided: MultiNodesBottomToolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiNodesBottomToolbar", function() { return MultiNodesBottomToolbar; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_components_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/components/hooks */ "../packages/editor/lib-es/core/components/hooks/index.js");
/* harmony import */ var _BottomToolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BottomToolbar */ "../packages/editor/lib-es/ui/BottomToolbar/index.js");
/* harmony import */ var _DeleteAll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DeleteAll */ "../packages/editor/lib-es/ui/MultiNodesBottomToolbar/DeleteAll.js");
/* harmony import */ var _DuplicateAll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DuplicateAll */ "../packages/editor/lib-es/ui/MultiNodesBottomToolbar/DuplicateAll.js");






var MultiNodesBottomToolbar = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(function () {
    var t = Object(_core_components_hooks__WEBPACK_IMPORTED_MODULE_2__["useUiTranslator"])().t;
    var focusedNodeIds = Object(_core_components_hooks__WEBPACK_IMPORTED_MODULE_2__["useAllFocusedNodeIds"])();
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BottomToolbar__WEBPACK_IMPORTED_MODULE_3__["BottomToolbarDrawer"], { open: focusedNodeIds.length > 1, anchor: 'bottom' },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], { container: true, direction: "row", alignItems: "center" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], { item: true },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Avatar"], { children: focusedNodeIds.length, style: {
                        marginRight: 16,
                    } })),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], { item: true },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], { variant: "subtitle1" }, t('(multiple selected)'))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], { item: true, style: { marginLeft: 'auto' } },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DuplicateAll__WEBPACK_IMPORTED_MODULE_5__["default"], null)),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], { item: true },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DeleteAll__WEBPACK_IMPORTED_MODULE_4__["default"], null)))));
});
//# sourceMappingURL=index.js.map

/***/ })

}]);