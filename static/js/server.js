/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! dynamic exports provided */
/*! exports used: Children, Component, default */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 2 */
/*!************************************!*\
  !*** multi ./src/server/server.js ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/thierry/Sites/ssr/src/server/server.js */3);


/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(/*! express */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http__ = __webpack_require__(/*! http */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(/*! path */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controller__ = __webpack_require__(/*! ./controller */ 6);




var PORT = process.env.PORT || 8000;

var isProd = process.env.NODE_ENV === "production";
var app = new __WEBPACK_IMPORTED_MODULE_0_express___default.a();
var server = new __WEBPACK_IMPORTED_MODULE_1_http___default.a.Server(app);

// Render all the static files
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static("../"));
// Main controller
app.get("*", Object(__WEBPACK_IMPORTED_MODULE_3__controller__["a" /* default */])());

// Start the HTTP server
server.listen(PORT, function (err) {
  if (err) {
    console.log("Could NOT start server on port " + PORT, err);
  } else {
    console.log("Listening on port " + PORT);
  }
});

/***/ }),
/* 4 */
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 6 */
/*!****************************************!*\
  !*** ./src/server/controller/index.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server__ = __webpack_require__(/*! react-dom/server */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fs__ = __webpack_require__(/*! fs */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_path__ = __webpack_require__(/*! path */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hocs_WithStyleContext__ = __webpack_require__(/*! ../../hocs/WithStyleContext */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__App__ = __webpack_require__(/*! ../../App */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helper_server__ = __webpack_require__(/*! ../helper/server */ 20);
var _jsxFileName = "/Users/thierry/Sites/ssr/src/server/controller/index.js",
    _this = this;








// Simply render the App and send it.
var pageController = function pageController() {
  return function (req, res) {
    __WEBPACK_IMPORTED_MODULE_2_fs___default.a.readFile("./index.html", "utf8", function (err, htmlData) {
      if (err) {
        console.error("Read error", err);

        return res.status(404).end();
      }

      var css = new Set(); // CSS for all rendered React components

      var reactApp = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__hocs_WithStyleContext__["a" /* default */],
        {
          onInsertCss: function onInsertCss() {
            for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
              styles[_key] = arguments[_key];
            }

            return styles.forEach(function (style) {
              return css.add(style._getCss() || "");
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__App__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: _this
        })
      ));
      var RenderedApp = Object(__WEBPACK_IMPORTED_MODULE_6__helper_server__["a" /* injectHTML */])(htmlData, {
        body: reactApp,
        title: "My Universal rendered page",
        css: css
      });
      res.send(RenderedApp);
    });
  };
};

/* harmony default export */ __webpack_exports__["a"] = (pageController);

/***/ }),
/* 7 */
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! dynamic exports provided */
/*! exports used: renderToString */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 8 */
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 9 */
/*!**************************************!*\
  !*** ./src/hocs/WithStyleContext.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(/*! prop-types */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * WithStylesContext
 * Returns a child component with insertCss function allowing isomorphic rendering to work.
 */

var WithStylesContext = function (_React$Component) {
  _inherits(WithStylesContext, _React$Component);

  function WithStylesContext() {
    _classCallCheck(this, WithStylesContext);

    return _possibleConstructorReturn(this, (WithStylesContext.__proto__ || Object.getPrototypeOf(WithStylesContext)).apply(this, arguments));
  }

  _createClass(WithStylesContext, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        insertCss: this.props.onInsertCss
      };
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
    }
  }]);

  return WithStylesContext;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

WithStylesContext.childContextTypes = {
  insertCss: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (WithStylesContext);

/***/ }),
/* 10 */
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 11 */
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logo_svg__ = __webpack_require__(/*! ./logo.svg */ 13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__logo_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_css__ = __webpack_require__(/*! ./App.css */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__App_css__);
var _jsxFileName = "/Users/thierry/Sites/ssr/src/App.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: __WEBPACK_IMPORTED_MODULE_3__App_css___default.a.App, __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "header",
          { className: __WEBPACK_IMPORTED_MODULE_3__App_css___default.a.AppHeader, __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: __WEBPACK_IMPORTED_MODULE_2__logo_svg___default.a, className: __WEBPACK_IMPORTED_MODULE_3__App_css___default.a.AppLogo, alt: "logo", __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h1",
            { className: __WEBPACK_IMPORTED_MODULE_3__App_css___default.a.AppTitle, __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              },
              __self: this
            },
            "Welcome to React"
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "p",
          { className: __WEBPACK_IMPORTED_MODULE_3__App_css___default.a.AppIntro, __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: this
          },
          "To get started, edit ",
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "code",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              },
              __self: this
            },
            "src/App.js"
          ),
          " and save to reload."
        )
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__App_css___default.a)(App));

/***/ }),
/* 12 */
/*!*********************************************************!*\
  !*** external "isomorphic-style-loader/lib/withStyles" ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ }),
/* 13 */
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.5d5d9eef.svg";

/***/ }),
/* 14 */
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(/*! !../node_modules/css-loader??ref--1-oneOf-2-1!../node_modules/postcss-loader/lib??postcss!./App.css */ 15);
    var insertCss = __webpack_require__(/*! ../node_modules/isomorphic-style-loader/lib/insertCss.js */ 17);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../node_modules/css-loader/index.js??ref--1-oneOf-2-1!../node_modules/postcss-loader/lib/index.js??postcss!./App.css", function() {
        content = require("!!../node_modules/css-loader/index.js??ref--1-oneOf-2-1!../node_modules/postcss-loader/lib/index.js??postcss!./App.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 15 */
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?{"importLoaders":1}!./node_modules/postcss-loader/lib?{"ident":"postcss"}!./src/App.css ***!
  \*************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ 16)(undefined);
// imports


// module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  -webkit-animation: App-logo-spin infinite 20s linear;\n          animation: App-logo-spin infinite 20s linear;\n  height: 80px;\n}\n\n.App-header {\n  background-color: #222;\n  height: 150px;\n  padding: 20px;\n  color: white;\n}\n\n.App-title {\n  font-size: 1.5em;\n}\n\n.App-intro {\n  font-size: large;\n}\n\n@-webkit-keyframes App-logo-spin {\n  from { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n@keyframes App-logo-spin {\n  from { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n", ""]);

// exports


/***/ }),
/* 16 */
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 17 */
/*!***************************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/lib/insertCss.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ 18);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ 19);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Isomorphic CSS style loader for Webpack
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var prefix = 's';
var inserted = {};

// Base64 encoding and decoding - The "Unicode Problem"
// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

/**
 * Remove style/link elements for specified node IDs
 * if they are no longer referenced by UI components.
 */
function removeCss(ids) {
  ids.forEach(function (id) {
    if (--inserted[id] <= 0) {
      var elem = document.getElementById(prefix + id);
      if (elem) {
        elem.parentNode.removeChild(elem);
      }
    }
  });
}

/**
 * Example:
 *   // Insert CSS styles object generated by `css-loader` into DOM
 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
 *
 *   // Remove it from the DOM
 *   removeCss();
 */
function insertCss(styles) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$replace = _ref.replace,
      replace = _ref$replace === undefined ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === undefined ? false : _ref$prepend;

  var ids = [];
  for (var i = 0; i < styles.length; i++) {
    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];

    var id = moduleId + '-' + i;

    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;

    var elem = document.getElementById(prefix + id);
    var create = false;

    if (!elem) {
      create = true;

      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = prefix + id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;
    if (sourceMap && typeof btoa === 'function') {
      // skip IE9 and below, see http://caniuse.com/atob-btoa
      cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
      cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;

/***/ }),
/* 18 */
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 19 */
/*!******************************************************!*\
  !*** external "babel-runtime/helpers/slicedToArray" ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 20 */
/*!*************************************!*\
  !*** ./src/server/helper/server.js ***!
  \*************************************/
/*! exports provided: injectHTML */
/*! exports used: injectHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return injectHTML; });
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*
    A simple helper function to prepare the HTML markup. This loads:
      - Page title
      - Page body
  */
var injectHTML = function injectHTML(data, _ref) {
  var html = _ref.html,
      title = _ref.title,
      css = _ref.css,
      meta = _ref.meta,
      body = _ref.body,
      scripts = _ref.scripts,
      state = _ref.state;

  data = data.replace("</head>", "<style type=\"text/css\">" + [].concat(_toConsumableArray(css)).join("") + "</style></head>");
  data = data.replace(/<title>.*?<\/title>/g, "<title>" + title + "</title>");
  data = data.replace('<div id="root"></div>', "<div id=\"root\">" + body + "</div>");
  return data;
};

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map