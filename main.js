/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n\r\n}\r\n\r\n/* body {\r\n  margin: 0;\r\n  padding: 0; \r\n}*/\r\n\r\n.content {\r\n  display: flex;\r\n  gap: 5rem;\r\n}\r\n\r\n.board {\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 34px);\r\n}\r\n\r\n.cell {\r\n  position: relative;\r\n  height: 34px;\r\n  border: 1px solid;\r\n  user-select: none;\r\n}\r\n\r\n.cell.sunk {\r\n  background-color: gray;\r\n}\r\n\r\n.ship {\r\n  position: absolute;\r\n  z-index: 1;\r\n  background-color: antiquewhite;\r\n  border: 2px solid purple;\r\n  opacity: 0.5;\r\n}\r\n\r\n.ship.drag {\r\n  cursor: move;\r\n}\r\n\r\n.ship.horizontal {\r\n  height: 32px;\r\n  top: 0;\r\n}\r\n\r\n.ship.length-2.horizontal {\r\n  width: 67px;\r\n}\r\n\r\n.ship.length-3.horizontal {\r\n  width: 101px;\r\n}\r\n\r\n.ship.length-4.horizontal {\r\n  width: 135px;\r\n}\r\n\r\n.ship.length-5.horizontal {\r\n  width: 169px;\r\n}\r\n\r\n.ship.vertical {\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n}\r\n\r\n.ship.length-2.vertical {\r\n  height: 67px;\r\n}\r\n\r\n.ship.length-3.vertical {\r\n  height: 101px;\r\n}\r\n\r\n.ship.length-4.vertical {\r\n  height: 135px;\r\n}\r\n\r\n.ship.length-5.vertical {\r\n  height: 169px;\r\n}\r\n\r\n.cell.hit {\r\n  position: relative;\r\n  background-color: red;\r\n}\r\n\r\n.cell.miss {\r\n  background-color: sienna;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.disable-board {\r\n  pointer-events: none;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;;AAExB;;AAEA;;;EAGE;;AAEF;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,uCAAuC;AACzC;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,8BAA8B;EAC9B,wBAAwB;EACxB,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,MAAM;AACR;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,MAAM;EACN,QAAQ;EACR,OAAO;AACT;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,oBAAoB;AACtB","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n\r\n}\r\n\r\n/* body {\r\n  margin: 0;\r\n  padding: 0; \r\n}*/\r\n\r\n.content {\r\n  display: flex;\r\n  gap: 5rem;\r\n}\r\n\r\n.board {\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 34px);\r\n}\r\n\r\n.cell {\r\n  position: relative;\r\n  height: 34px;\r\n  border: 1px solid;\r\n  user-select: none;\r\n}\r\n\r\n.cell.sunk {\r\n  background-color: gray;\r\n}\r\n\r\n.ship {\r\n  position: absolute;\r\n  z-index: 1;\r\n  background-color: antiquewhite;\r\n  border: 2px solid purple;\r\n  opacity: 0.5;\r\n}\r\n\r\n.ship.drag {\r\n  cursor: move;\r\n}\r\n\r\n.ship.horizontal {\r\n  height: 32px;\r\n  top: 0;\r\n}\r\n\r\n.ship.length-2.horizontal {\r\n  width: 67px;\r\n}\r\n\r\n.ship.length-3.horizontal {\r\n  width: 101px;\r\n}\r\n\r\n.ship.length-4.horizontal {\r\n  width: 135px;\r\n}\r\n\r\n.ship.length-5.horizontal {\r\n  width: 169px;\r\n}\r\n\r\n.ship.vertical {\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n}\r\n\r\n.ship.length-2.vertical {\r\n  height: 67px;\r\n}\r\n\r\n.ship.length-3.vertical {\r\n  height: 101px;\r\n}\r\n\r\n.ship.length-4.vertical {\r\n  height: 135px;\r\n}\r\n\r\n.ship.length-5.vertical {\r\n  height: 169px;\r\n}\r\n\r\n.cell.hit {\r\n  position: relative;\r\n  background-color: red;\r\n}\r\n\r\n.cell.miss {\r\n  background-color: sienna;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.disable-board {\r\n  pointer-events: none;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app/factories/game-board-factory.js":
/*!*************************************************!*\
  !*** ./src/app/factories/game-board-factory.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship-factory */ "./src/app/factories/ship-factory.js");


const GameBoard = () => {
  const board = new Map();
  const shipsCoordinates = new Map();
  const missesList = new Set();
  const hitsList = new Set();
  let sunkShips = [];
  let remainingShips = 0;

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      board.set(`${i}, ${j}`);
    }
  }

  return {
    placeShip({ length, coordinates, axis = 'horizontal' } = {}) {
      const j = axis === 'horizontal' ? coordinates[0] : coordinates[1];

      for (let i = j; i < j + length; i += 1) {
        let node = null;
        if (axis === 'horizontal') node = `${i}, ${coordinates[1]}`;
        else node = `${coordinates[0]}, ${i}`;

        if (!board.has(node) || board.get(node) != null) return false;
      }

      const ship = (0,_ship_factory__WEBPACK_IMPORTED_MODULE_0__["default"])(length);
      shipsCoordinates.set(coordinates.join(', '), {
        length, coordinates: coordinates.join(', '), axis, list: [],
      });
      remainingShips += 1;

      for (let i = j; i < j + length; i += 1) {
        let node = null;
        if (axis === 'horizontal') node = `${i}, ${coordinates[1]}`;
        else node = `${coordinates[0]}, ${i}`;

        board.set(node, ship);
        shipsCoordinates.get(coordinates.join(', ')).list.push(node);
      }

      return true;
    },
    randomPlaceShip() {
      const shipsLength = [5, 4, 3, 3, 2];

      for (let i = 0; i < shipsLength.length; i += 1) {
        let validPlaceShip = false;

        while (!validPlaceShip) {
          const coordinates = [];

          coordinates.push(Math.floor(Math.random() * 10));
          coordinates.push(Math.floor(Math.random() * 10));

          validPlaceShip = this.placeShip({
            length: shipsLength[i],
            coordinates,
          });
        }
      }
    },
    moveShip({ oldCoordinates, newCoordinates }) {
      const ship = shipsCoordinates.get(oldCoordinates.join(', '));

      const j = ship.axis === 'horizontal' ? oldCoordinates[0] : oldCoordinates[1];

      shipsCoordinates.delete(oldCoordinates.join(', '));

      for (let i = j; i < j + ship.length; i += 1) {
        let node = null;
        if (ship.axis === 'horizontal') node = `${i}, ${oldCoordinates[1]}`;
        else node = `${oldCoordinates[0]}, ${i}`;

        board.set(node);
      }

      const valid = this.placeShip({ ...ship, coordinates: newCoordinates });

      if (valid === false) {
        this.placeShip({ ...ship, coordinates: oldCoordinates });

        return ship;
      }

      return shipsCoordinates.get(newCoordinates.join(', '));
    },
    rotateShip(coordinates) {
      const ship = shipsCoordinates.get(coordinates.join(', '));

      const j = ship.axis === 'horizontal' ? coordinates[0] : coordinates[1];

      for (let i = j; i < j + ship.length; i += 1) {
        let node = null;
        if (ship.axis === 'horizontal') node = `${i}, ${coordinates[1]}`;
        else node = `${coordinates[0]}, ${i}`;

        board.set(node);
      }

      const valid = this.placeShip({ ...ship, coordinates, axis: ship.axis === 'horizontal' ? 'vertical' : 'horizontal' });

      if (valid === false) {
        this.placeShip({ ...ship, coordinates });

        return false;
      }

      return shipsCoordinates.get(coordinates.join(', '));
    },
    receiveAttack(coordinates) {
      const coord = coordinates.join(', ');

      if (!board.has(coord)) return 'Invalid shot';

      if (hitsList.has(coord)) return 'Invalid shot';

      if (missesList.has(coord)) return 'Invalid shot';

      const ship = board.get(coord);

      if (ship == null) {
        missesList.add(coord);
        return 'Miss';
      }

      ship.hit();
      hitsList.add(coord);

      if (ship.isSunk()) {
        remainingShips -= 1;
        const headCoordinates = Array.from(shipsCoordinates.keys())
          .filter((key) => shipsCoordinates.get(key).list.includes(coord)).toString();

        sunkShips = sunkShips.concat(shipsCoordinates.get(headCoordinates).list);

        return 'Sunk';
      }

      return 'Hit';
    },
    allShipsHaveBeenSunk() {
      return remainingShips < 1;
    },
    getBoardInfo() {
      const info = {};

      info.ships = Array.from(shipsCoordinates.values());

      info.miss = Array.from(missesList);
      info.hit = Array.from(hitsList);
      info.sunkShips = sunkShips;

      return info;
    },
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);


/***/ }),

/***/ "./src/app/factories/player-factory.js":
/*!*********************************************!*\
  !*** ./src/app/factories/player-factory.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Player = () => ({
  attackEnemyBoard(coordinates, attackFn) {
    return attackFn(coordinates);
  },
  randomAttackEnemyBoard(attackFn) {
    let attack = 'Invalid shot';

    while (attack === 'Invalid shot') {
      const coordinates = [];

      coordinates.push(Math.floor(Math.random() * 10));
      coordinates.push(Math.floor(Math.random() * 10));

      attack = attackFn(coordinates);
    }

    return attack !== 'Invalid shot';
  },
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/app/factories/ship-factory.js":
/*!*******************************************!*\
  !*** ./src/app/factories/ship-factory.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = (length) => {
  const ship = {
    length,
    hits: 0,
    sunk: false,
  };

  return {
    hit() {
      ship.hits += 1;
    },
    isSunk() {
      ship.sunk = ship.hits === ship.length;
      return ship.sunk;
    },
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/app/game.js":
/*!*************************!*\
  !*** ./src/app/game.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factories_game_board_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/game-board-factory */ "./src/app/factories/game-board-factory.js");
/* harmony import */ var _factories_player_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/player-factory */ "./src/app/factories/player-factory.js");
/* harmony import */ var _parseIntStr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parseIntStr */ "./src/app/parseIntStr.js");




const Game = () => {
  const player1 = (0,_factories_player_factory__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const player2 = (0,_factories_player_factory__WEBPACK_IMPORTED_MODULE_1__["default"])();
  let player1Board = (0,_factories_game_board_factory__WEBPACK_IMPORTED_MODULE_0__["default"])();
  let player2Board = (0,_factories_game_board_factory__WEBPACK_IMPORTED_MODULE_0__["default"])();
  let currPlayer = player1;
  let currEnemyBoard = player2Board;
  const player2AutoPlay = true;

  player1Board.randomPlaceShip();
  player2Board.randomPlaceShip();

  return {
    checkGameEnd() {
      if (player1Board.allShipsHaveBeenSunk()) return 'player2';
      if (player2Board.allShipsHaveBeenSunk()) return 'player1';

      return false;
    },
    restart() {
      player1Board = (0,_factories_game_board_factory__WEBPACK_IMPORTED_MODULE_0__["default"])();
      player2Board = (0,_factories_game_board_factory__WEBPACK_IMPORTED_MODULE_0__["default"])();

      player1Board.randomPlaceShip();
      player2Board.randomPlaceShip();

      currPlayer = player1;
      currEnemyBoard = player2Board;
    },
    swapTurn() {
      if (currPlayer === player1) {
        currPlayer = player2;
        currEnemyBoard = player1Board;
      } else {
        currPlayer = player1;
        currEnemyBoard = player2Board;
      }
    },
    getBoardsInfo() {
      return {
        player1: player1Board.getBoardInfo(),
        player2: player2Board.getBoardInfo(),
      };
    },
    autoTurn() {
      if (this.checkGameEnd() !== false) return;

      currPlayer.randomAttackEnemyBoard(currEnemyBoard.receiveAttack);
      this.swapTurn();
    },
    takeTurn(coordinates) {
      const arr = coordinates.split(', ');

      const attack = currPlayer.attackEnemyBoard(arr, currEnemyBoard.receiveAttack);

      if (attack === 'Invalid shot') return false;

      this.swapTurn();

      if (player2AutoPlay) this.autoTurn();

      return attack;
    },
    moveShip(oldCoordinates, newCoordinates) {
      const info = {
        oldCoordinates: (0,_parseIntStr__WEBPACK_IMPORTED_MODULE_2__["default"])(oldCoordinates),
        newCoordinates: (0,_parseIntStr__WEBPACK_IMPORTED_MODULE_2__["default"])(newCoordinates),
      };

      if (currPlayer === player1) {
        return player1Board.moveShip(info);
      }

      return player2Board.moveShip(info);
    },
    rotateShip(coordinates, player) {
      if (player === 'player1') {
        return player1Board.rotateShip((0,_parseIntStr__WEBPACK_IMPORTED_MODULE_2__["default"])(coordinates, 10));
      }

      return player2Board.rotateShip((0,_parseIntStr__WEBPACK_IMPORTED_MODULE_2__["default"])(coordinates, 10));
    },
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);


/***/ }),

/***/ "./src/app/parseIntStr.js":
/*!********************************!*\
  !*** ./src/app/parseIntStr.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseIntStr)
/* harmony export */ });
function parseIntStr(str, radix) {
  return str.split(', ').map((n) => parseInt(n, radix));
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/style.css */ "./src/style/style.css");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/app/game.js");



const game = (0,_game__WEBPACK_IMPORTED_MODULE_1__["default"])();

function render(selector, info, className = '') {
  const boardContainer = document.querySelector(selector);

  if (className === 'ship') {
    const div = document.createElement('div');

    div.classList.add('test');

    const cell = boardContainer.querySelector(`[data-coordinates="${info[0]}"]`);

    cell.appendChild(div);
  }

  for (let i = 0; i < info.length; i += 1) {
    const cell = boardContainer.querySelector(`[data-coordinates="${info[i]}"]`);

    cell.className = `cell ${className}`;
  }
}

function renderSunkShips(selector, info) {
  if (info.length < 1) return;

  const board = document.querySelector(selector);

  for (let i = 0; i < info.length; i += 1) {
    const ship = board.querySelector(`[data-coordinates="${info[i]}"]`);

    ship.className = 'cell sunk';
  }
}

function createCells() {
  const cellArr = [];

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const cell = document.createElement('div');

      cell.classList.add('cell');
      cell.dataset.coordinates = `${j}, ${i}`;
      cellArr.push(cell);
    }
  }

  return cellArr;
}

function populateGameBoard(selector) {
  const container = document.querySelector(selector);
  const cells = createCells();

  container.replaceChildren(...cells);
}

function addShipDiv({
  coordinates, axis, length, player, callbacks,
} = {}) {
  const board = document.querySelector(`[data-board="${player}"]`);
  const cell = board.querySelector(`[data-coordinates="${coordinates}"]`);
  const ship = document.createElement('div');

  ship.classList.add('ship', 'drag', `length-${length}`, axis);
  ship.dataset.ship = coordinates;
  ship.draggable = true;

  callbacks.forEach(({ type, fn }) => ship.addEventListener(type, fn));

  cell.appendChild(ship);
}

function rotateShip(e) {
  const { coordinates } = e.target.parentElement.dataset;
  const board = e.target.closest('[data-board]');
  const player = board.dataset.board;
  const info = game.rotateShip(coordinates, player);

  if (info === false) return;

  const { length, axis } = info;

  e.target.className = `ship length-${length} ${axis}`;
}

function handleDragStart(e) {
  const { ship } = e.target.dataset;
  const shiftX = e.clientX - e.target.getBoundingClientRect().left;
  const shiftY = e.clientY - e.target.getBoundingClientRect().top;

  e.dataTransfer.setData('text/coord', ship);
  e.dataTransfer.setData('text/plain', `${shiftX}, ${shiftY}`);

  return false;
}

function handleDragOver(e) {
  e.preventDefault();

  return false;
}

function handleDrop(e) {
  const board = e.target.closest('[data-board]');
  const coord = e.dataTransfer.getData('text/coord');
  const ship = document.querySelector(`[data-ship="${coord}"]`);
  const [shiftX, shiftY] = e.dataTransfer.getData('text/plain').split(', ');
  const left = e.clientX - shiftX;
  const top = e.clientY - shiftY;

  board.append(ship);

  ship.style.left = `${left + 16}px`;
  ship.style.top = `${top + 16}px`;
  ship.style.zIndex = -1;

  const { x, y } = ship.getBoundingClientRect();

  const node = document.elementFromPoint(x, y);

  if (node == null || node === ship) {
    const cell = board.querySelector(`[data-coordinates="${coord}"]`);

    ship.style.left = '';
    ship.style.top = '';
    ship.style.zIndex = '';
    cell.append(ship);

    return;
  }

  const { coordinates } = node.dataset;
  const player = board.dataset.board;
  const newShip = game.moveShip(coord, coordinates);

  ship.remove();

  addShipDiv({
    ...newShip,
    player,
    callbacks: [{ type: 'click', fn: rotateShip },
      { type: 'dragstart', fn: handleDragStart }],
  });

  e.preventDefault();
}

function attackBoard(e) {
  const { coordinates } = e.target.dataset;

  if (coordinates == null) return;

  const turn = game.takeTurn(coordinates);

  if (turn === false) return;

  const { player1, player2 } = game.getBoardsInfo();

  render('[data-board="player1"]', player1.hit, 'hit');
  render('[data-board="player1"]', player1.miss, 'miss');
  renderSunkShips('[data-board="player1"]', player1.sunkShips);

  render('[data-board="player2"]', player2.hit, 'hit');
  render('[data-board="player2"]', player2.miss, 'miss');
  renderSunkShips('[data-board="player2"]', player2.sunkShips);

  const winner = game.checkGameEnd();

  if (winner !== false) {
    const player = document.querySelector('[data-player="winner"]');
    const enemyBoard = document.querySelector('[data-board="player2"]');

    player.textContent = winner;
    enemyBoard.removeEventListener('click', attackBoard);
  }
}

function startGame(e) {
  const board = document.querySelector('[data-board="player1"]');
  const { ships } = game.getBoardsInfo().player1;
  const restartBtn = document.querySelector('[data-btn="restart"]');

  e.target.classList.add('hidden');
  restartBtn.classList.remove('hidden');

  ships.forEach(({ coordinates }) => {
    const ship = board.querySelector(`[data-ship="${coordinates}"]`);

    ship.removeEventListener('click', rotateShip);
    ship.removeEventListener('dragstart', handleDragStart);
    ship.draggable = false;
    ship.classList.remove('drag');
  });

  board.removeEventListener('dragover', handleDragOver);
  board.removeEventListener('drop', handleDrop);

  const enemyBoard = document.querySelector('[data-board="player2"]');

  enemyBoard.addEventListener('click', attackBoard);
}

function initialBoard() {
  game.getBoardsInfo().player1.ships.forEach((ship) => {
    addShipDiv({
      ...ship,
      callbacks: [{ type: 'click', fn: rotateShip },
        { type: 'dragstart', fn: handleDragStart }],
      player: 'player1',
    });
  });

  const btn = document.querySelector('[data-btn="start"]');
  const board = document.querySelector('[data-board="player1"]');

  board.addEventListener('dragover', handleDragOver);
  board.addEventListener('drop', handleDrop);
  btn.addEventListener('click', startGame);
}

function restartGame(e) {
  const startBtn = document.querySelector('[data-btn="start"]');

  game.restart();

  const enemyBoard = document.querySelector('[data-board="player2"]');

  enemyBoard.removeEventListener('click', attackBoard);

  populateGameBoard('[data-board="player1"]');
  populateGameBoard('[data-board="player2"]');

  initialBoard();

  e.target.classList.add('hidden');
  startBtn.classList.remove('hidden');
}

const restartBtn = document.querySelector('[data-btn="restart"]');

restartBtn.addEventListener('click', restartGame);

populateGameBoard('[data-board="player1"]');
populateGameBoard('[data-board="player2"]');

initialBoard();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUU3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxRQUFRO0FBQ2xCOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLGFBQWE7QUFDaEMsb0RBQW9ELFlBQVk7O0FBRWhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsK0JBQStCO0FBQ25ELFVBQVUsd0NBQXdDO0FBQ2xEO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS9zdHlsZS5jc3M/YzlmMCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwL2ZhY3Rvcmllcy9nYW1lLWJvYXJkLWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHAvZmFjdG9yaWVzL3BsYXllci1mYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwL2ZhY3Rvcmllcy9zaGlwLWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHAvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC9wYXJzZUludFN0ci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLyogYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwOyBcXHJcXG59Ki9cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzNHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgaGVpZ2h0OiAzNHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwuc3VuayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcHVycGxlO1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5kcmFnIHtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAuaG9yaXpvbnRhbCB7XFxyXFxuICBoZWlnaHQ6IDMycHg7XFxyXFxuICB0b3A6IDA7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLmxlbmd0aC0yLmhvcml6b250YWwge1xcclxcbiAgd2lkdGg6IDY3cHg7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLmxlbmd0aC0zLmhvcml6b250YWwge1xcclxcbiAgd2lkdGg6IDEwMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5sZW5ndGgtNC5ob3Jpem9udGFsIHtcXHJcXG4gIHdpZHRoOiAxMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAubGVuZ3RoLTUuaG9yaXpvbnRhbCB7XFxyXFxuICB3aWR0aDogMTY5cHg7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLnZlcnRpY2FsIHtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAubGVuZ3RoLTIudmVydGljYWwge1xcclxcbiAgaGVpZ2h0OiA2N3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5sZW5ndGgtMy52ZXJ0aWNhbCB7XFxyXFxuICBoZWlnaHQ6IDEwMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5sZW5ndGgtNC52ZXJ0aWNhbCB7XFxyXFxuICBoZWlnaHQ6IDEzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5sZW5ndGgtNS52ZXJ0aWNhbCB7XFxyXFxuICBoZWlnaHQ6IDE2OXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5oaXQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5taXNzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHNpZW5uYTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzYWJsZS1ib2FyZCB7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjs7QUFFeEI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLDhCQUE4QjtFQUM5Qix3QkFBd0I7RUFDeEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLE1BQU07QUFDUjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLE1BQU07RUFDTixRQUFRO0VBQ1IsT0FBTztBQUNUOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi8qIGJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDsgXFxyXFxufSovXFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzRweCk7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGhlaWdodDogMzRweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLnN1bmsge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHB1cnBsZTtcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAuZHJhZyB7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLmhvcml6b250YWwge1xcclxcbiAgaGVpZ2h0OiAzMnB4O1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5sZW5ndGgtMi5ob3Jpem9udGFsIHtcXHJcXG4gIHdpZHRoOiA2N3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5sZW5ndGgtMy5ob3Jpem9udGFsIHtcXHJcXG4gIHdpZHRoOiAxMDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAubGVuZ3RoLTQuaG9yaXpvbnRhbCB7XFxyXFxuICB3aWR0aDogMTM1cHg7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLmxlbmd0aC01Lmhvcml6b250YWwge1xcclxcbiAgd2lkdGg6IDE2OXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC52ZXJ0aWNhbCB7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLmxlbmd0aC0yLnZlcnRpY2FsIHtcXHJcXG4gIGhlaWdodDogNjdweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAubGVuZ3RoLTMudmVydGljYWwge1xcclxcbiAgaGVpZ2h0OiAxMDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAubGVuZ3RoLTQudmVydGljYWwge1xcclxcbiAgaGVpZ2h0OiAxMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAubGVuZ3RoLTUudmVydGljYWwge1xcclxcbiAgaGVpZ2h0OiAxNjlweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwuaGl0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwubWlzcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWVubmE7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc2FibGUtYm9hcmQge1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC1mYWN0b3J5JztcblxuY29uc3QgR2FtZUJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IG5ldyBNYXAoKTtcbiAgY29uc3Qgc2hpcHNDb29yZGluYXRlcyA9IG5ldyBNYXAoKTtcbiAgY29uc3QgbWlzc2VzTGlzdCA9IG5ldyBTZXQoKTtcbiAgY29uc3QgaGl0c0xpc3QgPSBuZXcgU2V0KCk7XG4gIGxldCBzdW5rU2hpcHMgPSBbXTtcbiAgbGV0IHJlbWFpbmluZ1NoaXBzID0gMDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIGJvYXJkLnNldChgJHtpfSwgJHtqfWApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGxhY2VTaGlwKHsgbGVuZ3RoLCBjb29yZGluYXRlcywgYXhpcyA9ICdob3Jpem9udGFsJyB9ID0ge30pIHtcbiAgICAgIGNvbnN0IGogPSBheGlzID09PSAnaG9yaXpvbnRhbCcgPyBjb29yZGluYXRlc1swXSA6IGNvb3JkaW5hdGVzWzFdO1xuXG4gICAgICBmb3IgKGxldCBpID0gajsgaSA8IGogKyBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBsZXQgbm9kZSA9IG51bGw7XG4gICAgICAgIGlmIChheGlzID09PSAnaG9yaXpvbnRhbCcpIG5vZGUgPSBgJHtpfSwgJHtjb29yZGluYXRlc1sxXX1gO1xuICAgICAgICBlbHNlIG5vZGUgPSBgJHtjb29yZGluYXRlc1swXX0sICR7aX1gO1xuXG4gICAgICAgIGlmICghYm9hcmQuaGFzKG5vZGUpIHx8IGJvYXJkLmdldChub2RlKSAhPSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNoaXAgPSBTaGlwKGxlbmd0aCk7XG4gICAgICBzaGlwc0Nvb3JkaW5hdGVzLnNldChjb29yZGluYXRlcy5qb2luKCcsICcpLCB7XG4gICAgICAgIGxlbmd0aCwgY29vcmRpbmF0ZXM6IGNvb3JkaW5hdGVzLmpvaW4oJywgJyksIGF4aXMsIGxpc3Q6IFtdLFxuICAgICAgfSk7XG4gICAgICByZW1haW5pbmdTaGlwcyArPSAxO1xuXG4gICAgICBmb3IgKGxldCBpID0gajsgaSA8IGogKyBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBsZXQgbm9kZSA9IG51bGw7XG4gICAgICAgIGlmIChheGlzID09PSAnaG9yaXpvbnRhbCcpIG5vZGUgPSBgJHtpfSwgJHtjb29yZGluYXRlc1sxXX1gO1xuICAgICAgICBlbHNlIG5vZGUgPSBgJHtjb29yZGluYXRlc1swXX0sICR7aX1gO1xuXG4gICAgICAgIGJvYXJkLnNldChub2RlLCBzaGlwKTtcbiAgICAgICAgc2hpcHNDb29yZGluYXRlcy5nZXQoY29vcmRpbmF0ZXMuam9pbignLCAnKSkubGlzdC5wdXNoKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIHJhbmRvbVBsYWNlU2hpcCgpIHtcbiAgICAgIGNvbnN0IHNoaXBzTGVuZ3RoID0gWzUsIDQsIDMsIDMsIDJdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzTGVuZ3RoLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGxldCB2YWxpZFBsYWNlU2hpcCA9IGZhbHNlO1xuXG4gICAgICAgIHdoaWxlICghdmFsaWRQbGFjZVNoaXApIHtcbiAgICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IFtdO1xuXG4gICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpO1xuICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKTtcblxuICAgICAgICAgIHZhbGlkUGxhY2VTaGlwID0gdGhpcy5wbGFjZVNoaXAoe1xuICAgICAgICAgICAgbGVuZ3RoOiBzaGlwc0xlbmd0aFtpXSxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBtb3ZlU2hpcCh7IG9sZENvb3JkaW5hdGVzLCBuZXdDb29yZGluYXRlcyB9KSB7XG4gICAgICBjb25zdCBzaGlwID0gc2hpcHNDb29yZGluYXRlcy5nZXQob2xkQ29vcmRpbmF0ZXMuam9pbignLCAnKSk7XG5cbiAgICAgIGNvbnN0IGogPSBzaGlwLmF4aXMgPT09ICdob3Jpem9udGFsJyA/IG9sZENvb3JkaW5hdGVzWzBdIDogb2xkQ29vcmRpbmF0ZXNbMV07XG5cbiAgICAgIHNoaXBzQ29vcmRpbmF0ZXMuZGVsZXRlKG9sZENvb3JkaW5hdGVzLmpvaW4oJywgJykpO1xuXG4gICAgICBmb3IgKGxldCBpID0gajsgaSA8IGogKyBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGxldCBub2RlID0gbnVsbDtcbiAgICAgICAgaWYgKHNoaXAuYXhpcyA9PT0gJ2hvcml6b250YWwnKSBub2RlID0gYCR7aX0sICR7b2xkQ29vcmRpbmF0ZXNbMV19YDtcbiAgICAgICAgZWxzZSBub2RlID0gYCR7b2xkQ29vcmRpbmF0ZXNbMF19LCAke2l9YDtcblxuICAgICAgICBib2FyZC5zZXQobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHZhbGlkID0gdGhpcy5wbGFjZVNoaXAoeyAuLi5zaGlwLCBjb29yZGluYXRlczogbmV3Q29vcmRpbmF0ZXMgfSk7XG5cbiAgICAgIGlmICh2YWxpZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5wbGFjZVNoaXAoeyAuLi5zaGlwLCBjb29yZGluYXRlczogb2xkQ29vcmRpbmF0ZXMgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNoaXA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzaGlwc0Nvb3JkaW5hdGVzLmdldChuZXdDb29yZGluYXRlcy5qb2luKCcsICcpKTtcbiAgICB9LFxuICAgIHJvdGF0ZVNoaXAoY29vcmRpbmF0ZXMpIHtcbiAgICAgIGNvbnN0IHNoaXAgPSBzaGlwc0Nvb3JkaW5hdGVzLmdldChjb29yZGluYXRlcy5qb2luKCcsICcpKTtcblxuICAgICAgY29uc3QgaiA9IHNoaXAuYXhpcyA9PT0gJ2hvcml6b250YWwnID8gY29vcmRpbmF0ZXNbMF0gOiBjb29yZGluYXRlc1sxXTtcblxuICAgICAgZm9yIChsZXQgaSA9IGo7IGkgPCBqICsgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBsZXQgbm9kZSA9IG51bGw7XG4gICAgICAgIGlmIChzaGlwLmF4aXMgPT09ICdob3Jpem9udGFsJykgbm9kZSA9IGAke2l9LCAke2Nvb3JkaW5hdGVzWzFdfWA7XG4gICAgICAgIGVsc2Ugbm9kZSA9IGAke2Nvb3JkaW5hdGVzWzBdfSwgJHtpfWA7XG5cbiAgICAgICAgYm9hcmQuc2V0KG5vZGUpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB2YWxpZCA9IHRoaXMucGxhY2VTaGlwKHsgLi4uc2hpcCwgY29vcmRpbmF0ZXMsIGF4aXM6IHNoaXAuYXhpcyA9PT0gJ2hvcml6b250YWwnID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJyB9KTtcblxuICAgICAgaWYgKHZhbGlkID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLnBsYWNlU2hpcCh7IC4uLnNoaXAsIGNvb3JkaW5hdGVzIH0pO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNoaXBzQ29vcmRpbmF0ZXMuZ2V0KGNvb3JkaW5hdGVzLmpvaW4oJywgJykpO1xuICAgIH0sXG4gICAgcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcykge1xuICAgICAgY29uc3QgY29vcmQgPSBjb29yZGluYXRlcy5qb2luKCcsICcpO1xuXG4gICAgICBpZiAoIWJvYXJkLmhhcyhjb29yZCkpIHJldHVybiAnSW52YWxpZCBzaG90JztcblxuICAgICAgaWYgKGhpdHNMaXN0Lmhhcyhjb29yZCkpIHJldHVybiAnSW52YWxpZCBzaG90JztcblxuICAgICAgaWYgKG1pc3Nlc0xpc3QuaGFzKGNvb3JkKSkgcmV0dXJuICdJbnZhbGlkIHNob3QnO1xuXG4gICAgICBjb25zdCBzaGlwID0gYm9hcmQuZ2V0KGNvb3JkKTtcblxuICAgICAgaWYgKHNoaXAgPT0gbnVsbCkge1xuICAgICAgICBtaXNzZXNMaXN0LmFkZChjb29yZCk7XG4gICAgICAgIHJldHVybiAnTWlzcyc7XG4gICAgICB9XG5cbiAgICAgIHNoaXAuaGl0KCk7XG4gICAgICBoaXRzTGlzdC5hZGQoY29vcmQpO1xuXG4gICAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICByZW1haW5pbmdTaGlwcyAtPSAxO1xuICAgICAgICBjb25zdCBoZWFkQ29vcmRpbmF0ZXMgPSBBcnJheS5mcm9tKHNoaXBzQ29vcmRpbmF0ZXMua2V5cygpKVxuICAgICAgICAgIC5maWx0ZXIoKGtleSkgPT4gc2hpcHNDb29yZGluYXRlcy5nZXQoa2V5KS5saXN0LmluY2x1ZGVzKGNvb3JkKSkudG9TdHJpbmcoKTtcblxuICAgICAgICBzdW5rU2hpcHMgPSBzdW5rU2hpcHMuY29uY2F0KHNoaXBzQ29vcmRpbmF0ZXMuZ2V0KGhlYWRDb29yZGluYXRlcykubGlzdCk7XG5cbiAgICAgICAgcmV0dXJuICdTdW5rJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICdIaXQnO1xuICAgIH0sXG4gICAgYWxsU2hpcHNIYXZlQmVlblN1bmsoKSB7XG4gICAgICByZXR1cm4gcmVtYWluaW5nU2hpcHMgPCAxO1xuICAgIH0sXG4gICAgZ2V0Qm9hcmRJbmZvKCkge1xuICAgICAgY29uc3QgaW5mbyA9IHt9O1xuXG4gICAgICBpbmZvLnNoaXBzID0gQXJyYXkuZnJvbShzaGlwc0Nvb3JkaW5hdGVzLnZhbHVlcygpKTtcblxuICAgICAgaW5mby5taXNzID0gQXJyYXkuZnJvbShtaXNzZXNMaXN0KTtcbiAgICAgIGluZm8uaGl0ID0gQXJyYXkuZnJvbShoaXRzTGlzdCk7XG4gICAgICBpbmZvLnN1bmtTaGlwcyA9IHN1bmtTaGlwcztcblxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVCb2FyZDtcbiIsImNvbnN0IFBsYXllciA9ICgpID0+ICh7XG4gIGF0dGFja0VuZW15Qm9hcmQoY29vcmRpbmF0ZXMsIGF0dGFja0ZuKSB7XG4gICAgcmV0dXJuIGF0dGFja0ZuKGNvb3JkaW5hdGVzKTtcbiAgfSxcbiAgcmFuZG9tQXR0YWNrRW5lbXlCb2FyZChhdHRhY2tGbikge1xuICAgIGxldCBhdHRhY2sgPSAnSW52YWxpZCBzaG90JztcblxuICAgIHdoaWxlIChhdHRhY2sgPT09ICdJbnZhbGlkIHNob3QnKSB7XG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IFtdO1xuXG4gICAgICBjb29yZGluYXRlcy5wdXNoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSk7XG4gICAgICBjb29yZGluYXRlcy5wdXNoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSk7XG5cbiAgICAgIGF0dGFjayA9IGF0dGFja0ZuKGNvb3JkaW5hdGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXR0YWNrICE9PSAnSW52YWxpZCBzaG90JztcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjb25zdCBTaGlwID0gKGxlbmd0aCkgPT4ge1xuICBjb25zdCBzaGlwID0ge1xuICAgIGxlbmd0aCxcbiAgICBoaXRzOiAwLFxuICAgIHN1bms6IGZhbHNlLFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaGl0KCkge1xuICAgICAgc2hpcC5oaXRzICs9IDE7XG4gICAgfSxcbiAgICBpc1N1bmsoKSB7XG4gICAgICBzaGlwLnN1bmsgPSBzaGlwLmhpdHMgPT09IHNoaXAubGVuZ3RoO1xuICAgICAgcmV0dXJuIHNoaXAuc3VuaztcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSAnLi9mYWN0b3JpZXMvZ2FtZS1ib2FyZC1mYWN0b3J5JztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9mYWN0b3JpZXMvcGxheWVyLWZhY3RvcnknO1xuaW1wb3J0IHBhcnNlSW50U3RyIGZyb20gJy4vcGFyc2VJbnRTdHInO1xuXG5jb25zdCBHYW1lID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXIxID0gUGxheWVyKCk7XG4gIGNvbnN0IHBsYXllcjIgPSBQbGF5ZXIoKTtcbiAgbGV0IHBsYXllcjFCb2FyZCA9IEdhbWVCb2FyZCgpO1xuICBsZXQgcGxheWVyMkJvYXJkID0gR2FtZUJvYXJkKCk7XG4gIGxldCBjdXJyUGxheWVyID0gcGxheWVyMTtcbiAgbGV0IGN1cnJFbmVteUJvYXJkID0gcGxheWVyMkJvYXJkO1xuICBjb25zdCBwbGF5ZXIyQXV0b1BsYXkgPSB0cnVlO1xuXG4gIHBsYXllcjFCb2FyZC5yYW5kb21QbGFjZVNoaXAoKTtcbiAgcGxheWVyMkJvYXJkLnJhbmRvbVBsYWNlU2hpcCgpO1xuXG4gIHJldHVybiB7XG4gICAgY2hlY2tHYW1lRW5kKCkge1xuICAgICAgaWYgKHBsYXllcjFCb2FyZC5hbGxTaGlwc0hhdmVCZWVuU3VuaygpKSByZXR1cm4gJ3BsYXllcjInO1xuICAgICAgaWYgKHBsYXllcjJCb2FyZC5hbGxTaGlwc0hhdmVCZWVuU3VuaygpKSByZXR1cm4gJ3BsYXllcjEnO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICByZXN0YXJ0KCkge1xuICAgICAgcGxheWVyMUJvYXJkID0gR2FtZUJvYXJkKCk7XG4gICAgICBwbGF5ZXIyQm9hcmQgPSBHYW1lQm9hcmQoKTtcblxuICAgICAgcGxheWVyMUJvYXJkLnJhbmRvbVBsYWNlU2hpcCgpO1xuICAgICAgcGxheWVyMkJvYXJkLnJhbmRvbVBsYWNlU2hpcCgpO1xuXG4gICAgICBjdXJyUGxheWVyID0gcGxheWVyMTtcbiAgICAgIGN1cnJFbmVteUJvYXJkID0gcGxheWVyMkJvYXJkO1xuICAgIH0sXG4gICAgc3dhcFR1cm4oKSB7XG4gICAgICBpZiAoY3VyclBsYXllciA9PT0gcGxheWVyMSkge1xuICAgICAgICBjdXJyUGxheWVyID0gcGxheWVyMjtcbiAgICAgICAgY3VyckVuZW15Qm9hcmQgPSBwbGF5ZXIxQm9hcmQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyUGxheWVyID0gcGxheWVyMTtcbiAgICAgICAgY3VyckVuZW15Qm9hcmQgPSBwbGF5ZXIyQm9hcmQ7XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXRCb2FyZHNJbmZvKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGxheWVyMTogcGxheWVyMUJvYXJkLmdldEJvYXJkSW5mbygpLFxuICAgICAgICBwbGF5ZXIyOiBwbGF5ZXIyQm9hcmQuZ2V0Qm9hcmRJbmZvKCksXG4gICAgICB9O1xuICAgIH0sXG4gICAgYXV0b1R1cm4oKSB7XG4gICAgICBpZiAodGhpcy5jaGVja0dhbWVFbmQoKSAhPT0gZmFsc2UpIHJldHVybjtcblxuICAgICAgY3VyclBsYXllci5yYW5kb21BdHRhY2tFbmVteUJvYXJkKGN1cnJFbmVteUJvYXJkLnJlY2VpdmVBdHRhY2spO1xuICAgICAgdGhpcy5zd2FwVHVybigpO1xuICAgIH0sXG4gICAgdGFrZVR1cm4oY29vcmRpbmF0ZXMpIHtcbiAgICAgIGNvbnN0IGFyciA9IGNvb3JkaW5hdGVzLnNwbGl0KCcsICcpO1xuXG4gICAgICBjb25zdCBhdHRhY2sgPSBjdXJyUGxheWVyLmF0dGFja0VuZW15Qm9hcmQoYXJyLCBjdXJyRW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKTtcblxuICAgICAgaWYgKGF0dGFjayA9PT0gJ0ludmFsaWQgc2hvdCcpIHJldHVybiBmYWxzZTtcblxuICAgICAgdGhpcy5zd2FwVHVybigpO1xuXG4gICAgICBpZiAocGxheWVyMkF1dG9QbGF5KSB0aGlzLmF1dG9UdXJuKCk7XG5cbiAgICAgIHJldHVybiBhdHRhY2s7XG4gICAgfSxcbiAgICBtb3ZlU2hpcChvbGRDb29yZGluYXRlcywgbmV3Q29vcmRpbmF0ZXMpIHtcbiAgICAgIGNvbnN0IGluZm8gPSB7XG4gICAgICAgIG9sZENvb3JkaW5hdGVzOiBwYXJzZUludFN0cihvbGRDb29yZGluYXRlcyksXG4gICAgICAgIG5ld0Nvb3JkaW5hdGVzOiBwYXJzZUludFN0cihuZXdDb29yZGluYXRlcyksXG4gICAgICB9O1xuXG4gICAgICBpZiAoY3VyclBsYXllciA9PT0gcGxheWVyMSkge1xuICAgICAgICByZXR1cm4gcGxheWVyMUJvYXJkLm1vdmVTaGlwKGluZm8pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGxheWVyMkJvYXJkLm1vdmVTaGlwKGluZm8pO1xuICAgIH0sXG4gICAgcm90YXRlU2hpcChjb29yZGluYXRlcywgcGxheWVyKSB7XG4gICAgICBpZiAocGxheWVyID09PSAncGxheWVyMScpIHtcbiAgICAgICAgcmV0dXJuIHBsYXllcjFCb2FyZC5yb3RhdGVTaGlwKHBhcnNlSW50U3RyKGNvb3JkaW5hdGVzLCAxMCkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGxheWVyMkJvYXJkLnJvdGF0ZVNoaXAocGFyc2VJbnRTdHIoY29vcmRpbmF0ZXMsIDEwKSk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUludFN0cihzdHIsIHJhZGl4KSB7XG4gIHJldHVybiBzdHIuc3BsaXQoJywgJykubWFwKChuKSA9PiBwYXJzZUludChuLCByYWRpeCkpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9zdHlsZS9zdHlsZS5jc3MnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcblxuY29uc3QgZ2FtZSA9IEdhbWUoKTtcblxuZnVuY3Rpb24gcmVuZGVyKHNlbGVjdG9yLCBpbmZvLCBjbGFzc05hbWUgPSAnJykge1xuICBjb25zdCBib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gIGlmIChjbGFzc05hbWUgPT09ICdzaGlwJykge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Rlc3QnKTtcblxuICAgIGNvbnN0IGNlbGwgPSBib2FyZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb29yZGluYXRlcz1cIiR7aW5mb1swXX1cIl1gKTtcblxuICAgIGNlbGwuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW5mby5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNlbGwgPSBib2FyZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb29yZGluYXRlcz1cIiR7aW5mb1tpXX1cIl1gKTtcblxuICAgIGNlbGwuY2xhc3NOYW1lID0gYGNlbGwgJHtjbGFzc05hbWV9YDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJTdW5rU2hpcHMoc2VsZWN0b3IsIGluZm8pIHtcbiAgaWYgKGluZm8ubGVuZ3RoIDwgMSkgcmV0dXJuO1xuXG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmZvLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgc2hpcCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvb3JkaW5hdGVzPVwiJHtpbmZvW2ldfVwiXWApO1xuXG4gICAgc2hpcC5jbGFzc05hbWUgPSAnY2VsbCBzdW5rJztcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVDZWxscygpIHtcbiAgY29uc3QgY2VsbEFyciA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgIGNlbGwuZGF0YXNldC5jb29yZGluYXRlcyA9IGAke2p9LCAke2l9YDtcbiAgICAgIGNlbGxBcnIucHVzaChjZWxsKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2VsbEFycjtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVHYW1lQm9hcmQoc2VsZWN0b3IpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIGNvbnN0IGNlbGxzID0gY3JlYXRlQ2VsbHMoKTtcblxuICBjb250YWluZXIucmVwbGFjZUNoaWxkcmVuKC4uLmNlbGxzKTtcbn1cblxuZnVuY3Rpb24gYWRkU2hpcERpdih7XG4gIGNvb3JkaW5hdGVzLCBheGlzLCBsZW5ndGgsIHBsYXllciwgY2FsbGJhY2tzLFxufSA9IHt9KSB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtYm9hcmQ9XCIke3BsYXllcn1cIl1gKTtcbiAgY29uc3QgY2VsbCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvb3JkaW5hdGVzPVwiJHtjb29yZGluYXRlc31cIl1gKTtcbiAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIHNoaXAuY2xhc3NMaXN0LmFkZCgnc2hpcCcsICdkcmFnJywgYGxlbmd0aC0ke2xlbmd0aH1gLCBheGlzKTtcbiAgc2hpcC5kYXRhc2V0LnNoaXAgPSBjb29yZGluYXRlcztcbiAgc2hpcC5kcmFnZ2FibGUgPSB0cnVlO1xuXG4gIGNhbGxiYWNrcy5mb3JFYWNoKCh7IHR5cGUsIGZuIH0pID0+IHNoaXAuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmbikpO1xuXG4gIGNlbGwuYXBwZW5kQ2hpbGQoc2hpcCk7XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZVNoaXAoZSkge1xuICBjb25zdCB7IGNvb3JkaW5hdGVzIH0gPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQ7XG4gIGNvbnN0IGJvYXJkID0gZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtYm9hcmRdJyk7XG4gIGNvbnN0IHBsYXllciA9IGJvYXJkLmRhdGFzZXQuYm9hcmQ7XG4gIGNvbnN0IGluZm8gPSBnYW1lLnJvdGF0ZVNoaXAoY29vcmRpbmF0ZXMsIHBsYXllcik7XG5cbiAgaWYgKGluZm8gPT09IGZhbHNlKSByZXR1cm47XG5cbiAgY29uc3QgeyBsZW5ndGgsIGF4aXMgfSA9IGluZm87XG5cbiAgZS50YXJnZXQuY2xhc3NOYW1lID0gYHNoaXAgbGVuZ3RoLSR7bGVuZ3RofSAke2F4aXN9YDtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRHJhZ1N0YXJ0KGUpIHtcbiAgY29uc3QgeyBzaGlwIH0gPSBlLnRhcmdldC5kYXRhc2V0O1xuICBjb25zdCBzaGlmdFggPSBlLmNsaWVudFggLSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICBjb25zdCBzaGlmdFkgPSBlLmNsaWVudFkgLSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG5cbiAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9jb29yZCcsIHNoaXApO1xuICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgYCR7c2hpZnRYfSwgJHtzaGlmdFl9YCk7XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVEcmFnT3ZlcihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURyb3AoZSkge1xuICBjb25zdCBib2FyZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWJvYXJkXScpO1xuICBjb25zdCBjb29yZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvY29vcmQnKTtcbiAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNoaXA9XCIke2Nvb3JkfVwiXWApO1xuICBjb25zdCBbc2hpZnRYLCBzaGlmdFldID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpLnNwbGl0KCcsICcpO1xuICBjb25zdCBsZWZ0ID0gZS5jbGllbnRYIC0gc2hpZnRYO1xuICBjb25zdCB0b3AgPSBlLmNsaWVudFkgLSBzaGlmdFk7XG5cbiAgYm9hcmQuYXBwZW5kKHNoaXApO1xuXG4gIHNoaXAuc3R5bGUubGVmdCA9IGAke2xlZnQgKyAxNn1weGA7XG4gIHNoaXAuc3R5bGUudG9wID0gYCR7dG9wICsgMTZ9cHhgO1xuICBzaGlwLnN0eWxlLnpJbmRleCA9IC0xO1xuXG4gIGNvbnN0IHsgeCwgeSB9ID0gc2hpcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICBjb25zdCBub2RlID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KTtcblxuICBpZiAobm9kZSA9PSBudWxsIHx8IG5vZGUgPT09IHNoaXApIHtcbiAgICBjb25zdCBjZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29vcmRpbmF0ZXM9XCIke2Nvb3JkfVwiXWApO1xuXG4gICAgc2hpcC5zdHlsZS5sZWZ0ID0gJyc7XG4gICAgc2hpcC5zdHlsZS50b3AgPSAnJztcbiAgICBzaGlwLnN0eWxlLnpJbmRleCA9ICcnO1xuICAgIGNlbGwuYXBwZW5kKHNoaXApO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyBjb29yZGluYXRlcyB9ID0gbm9kZS5kYXRhc2V0O1xuICBjb25zdCBwbGF5ZXIgPSBib2FyZC5kYXRhc2V0LmJvYXJkO1xuICBjb25zdCBuZXdTaGlwID0gZ2FtZS5tb3ZlU2hpcChjb29yZCwgY29vcmRpbmF0ZXMpO1xuXG4gIHNoaXAucmVtb3ZlKCk7XG5cbiAgYWRkU2hpcERpdih7XG4gICAgLi4ubmV3U2hpcCxcbiAgICBwbGF5ZXIsXG4gICAgY2FsbGJhY2tzOiBbeyB0eXBlOiAnY2xpY2snLCBmbjogcm90YXRlU2hpcCB9LFxuICAgICAgeyB0eXBlOiAnZHJhZ3N0YXJ0JywgZm46IGhhbmRsZURyYWdTdGFydCB9XSxcbiAgfSk7XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBhdHRhY2tCb2FyZChlKSB7XG4gIGNvbnN0IHsgY29vcmRpbmF0ZXMgfSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG5cbiAgaWYgKGNvb3JkaW5hdGVzID09IG51bGwpIHJldHVybjtcblxuICBjb25zdCB0dXJuID0gZ2FtZS50YWtlVHVybihjb29yZGluYXRlcyk7XG5cbiAgaWYgKHR1cm4gPT09IGZhbHNlKSByZXR1cm47XG5cbiAgY29uc3QgeyBwbGF5ZXIxLCBwbGF5ZXIyIH0gPSBnYW1lLmdldEJvYXJkc0luZm8oKTtcblxuICByZW5kZXIoJ1tkYXRhLWJvYXJkPVwicGxheWVyMVwiXScsIHBsYXllcjEuaGl0LCAnaGl0Jyk7XG4gIHJlbmRlcignW2RhdGEtYm9hcmQ9XCJwbGF5ZXIxXCJdJywgcGxheWVyMS5taXNzLCAnbWlzcycpO1xuICByZW5kZXJTdW5rU2hpcHMoJ1tkYXRhLWJvYXJkPVwicGxheWVyMVwiXScsIHBsYXllcjEuc3Vua1NoaXBzKTtcblxuICByZW5kZXIoJ1tkYXRhLWJvYXJkPVwicGxheWVyMlwiXScsIHBsYXllcjIuaGl0LCAnaGl0Jyk7XG4gIHJlbmRlcignW2RhdGEtYm9hcmQ9XCJwbGF5ZXIyXCJdJywgcGxheWVyMi5taXNzLCAnbWlzcycpO1xuICByZW5kZXJTdW5rU2hpcHMoJ1tkYXRhLWJvYXJkPVwicGxheWVyMlwiXScsIHBsYXllcjIuc3Vua1NoaXBzKTtcblxuICBjb25zdCB3aW5uZXIgPSBnYW1lLmNoZWNrR2FtZUVuZCgpO1xuXG4gIGlmICh3aW5uZXIgIT09IGZhbHNlKSB7XG4gICAgY29uc3QgcGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcGxheWVyPVwid2lubmVyXCJdJyk7XG4gICAgY29uc3QgZW5lbXlCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJvYXJkPVwicGxheWVyMlwiXScpO1xuXG4gICAgcGxheWVyLnRleHRDb250ZW50ID0gd2lubmVyO1xuICAgIGVuZW15Qm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhdHRhY2tCb2FyZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RhcnRHYW1lKGUpIHtcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1ib2FyZD1cInBsYXllcjFcIl0nKTtcbiAgY29uc3QgeyBzaGlwcyB9ID0gZ2FtZS5nZXRCb2FyZHNJbmZvKCkucGxheWVyMTtcbiAgY29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJ0bj1cInJlc3RhcnRcIl0nKTtcblxuICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgcmVzdGFydEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblxuICBzaGlwcy5mb3JFYWNoKCh7IGNvb3JkaW5hdGVzIH0pID0+IHtcbiAgICBjb25zdCBzaGlwID0gYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtc2hpcD1cIiR7Y29vcmRpbmF0ZXN9XCJdYCk7XG5cbiAgICBzaGlwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlU2hpcCk7XG4gICAgc2hpcC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBoYW5kbGVEcmFnU3RhcnQpO1xuICAgIHNoaXAuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnJyk7XG4gIH0pO1xuXG4gIGJvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgaGFuZGxlRHJhZ092ZXIpO1xuICBib2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgaGFuZGxlRHJvcCk7XG5cbiAgY29uc3QgZW5lbXlCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJvYXJkPVwicGxheWVyMlwiXScpO1xuXG4gIGVuZW15Qm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhdHRhY2tCb2FyZCk7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxCb2FyZCgpIHtcbiAgZ2FtZS5nZXRCb2FyZHNJbmZvKCkucGxheWVyMS5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgYWRkU2hpcERpdih7XG4gICAgICAuLi5zaGlwLFxuICAgICAgY2FsbGJhY2tzOiBbeyB0eXBlOiAnY2xpY2snLCBmbjogcm90YXRlU2hpcCB9LFxuICAgICAgICB7IHR5cGU6ICdkcmFnc3RhcnQnLCBmbjogaGFuZGxlRHJhZ1N0YXJ0IH1dLFxuICAgICAgcGxheWVyOiAncGxheWVyMScsXG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJ0bj1cInN0YXJ0XCJdJyk7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYm9hcmQ9XCJwbGF5ZXIxXCJdJyk7XG5cbiAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBoYW5kbGVEcmFnT3Zlcik7XG4gIGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBoYW5kbGVEcm9wKTtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRHYW1lKTtcbn1cblxuZnVuY3Rpb24gcmVzdGFydEdhbWUoZSkge1xuICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJ0bj1cInN0YXJ0XCJdJyk7XG5cbiAgZ2FtZS5yZXN0YXJ0KCk7XG5cbiAgY29uc3QgZW5lbXlCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJvYXJkPVwicGxheWVyMlwiXScpO1xuXG4gIGVuZW15Qm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhdHRhY2tCb2FyZCk7XG5cbiAgcG9wdWxhdGVHYW1lQm9hcmQoJ1tkYXRhLWJvYXJkPVwicGxheWVyMVwiXScpO1xuICBwb3B1bGF0ZUdhbWVCb2FyZCgnW2RhdGEtYm9hcmQ9XCJwbGF5ZXIyXCJdJyk7XG5cbiAgaW5pdGlhbEJvYXJkKCk7XG5cbiAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIHN0YXJ0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xufVxuXG5jb25zdCByZXN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYnRuPVwicmVzdGFydFwiXScpO1xuXG5yZXN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzdGFydEdhbWUpO1xuXG5wb3B1bGF0ZUdhbWVCb2FyZCgnW2RhdGEtYm9hcmQ9XCJwbGF5ZXIxXCJdJyk7XG5wb3B1bGF0ZUdhbWVCb2FyZCgnW2RhdGEtYm9hcmQ9XCJwbGF5ZXIyXCJdJyk7XG5cbmluaXRpYWxCb2FyZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9