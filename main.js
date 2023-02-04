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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  font-family: Tahoma, sans-serif;\r\n  box-sizing: border-box;\r\n  letter-spacing: 1px;\r\n}\r\n\r\nbody {\r\n  font-size: 1.2rem;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n}\r\n\r\n.content {\r\n  gap: 2rem;\r\n  justify-content: center;\r\n  padding: 3em;\r\n}\r\n\r\n.top {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\nbutton {\r\n  font-weight: 600;\r\n  color: #fff;\r\n  width: min-content;\r\n  border: none;\r\n  padding: 0.6em 2em;\r\n  border-radius: 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.start-btn {\r\n  background-color: #71a08a;\r\n}\r\n\r\n.restart-btn {\r\n  background-color: #e22b63;\r\n}\r\n\r\n.boards-container {\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 5rem;\r\n}\r\n\r\n.board {\r\n  grid-template-columns: repeat(10, 34px);\r\n}\r\n\r\n.cell {\r\n  position: relative;\r\n  height: 34px;\r\n  border: 1px solid #75743e;\r\n  user-select: none;\r\n}\r\n\r\n.sunk {\r\n  background-color: #423f3f;\r\n}\r\n\r\n.ship {\r\n  position: absolute;\r\n  z-index: 1;\r\n  background-color: #a58ec3;\r\n  border: 1px solid #75743e;\r\n}\r\n\r\n.ship.playing {\r\n  z-index: -1;\r\n}\r\n\r\n.ship.drag {\r\n  cursor: move;\r\n}\r\n\r\n.ship.drop {\r\n  z-index: -1;\r\n}\r\n\r\n.ship.horizontal {\r\n  height: 32px;\r\n  top: 0;\r\n}\r\n\r\n.ship.length-2.horizontal {\r\n  width: 67px;\r\n}\r\n\r\n.ship.length-3.horizontal {\r\n  width: 101px;\r\n}\r\n\r\n.ship.length-4.horizontal {\r\n  width: 135px;\r\n}\r\n\r\n.ship.length-5.horizontal {\r\n  width: 169px;\r\n}\r\n\r\n.ship.vertical {\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n}\r\n\r\n.ship.length-2.vertical {\r\n  height: 67px;\r\n}\r\n\r\n.ship.length-3.vertical {\r\n  height: 101px;\r\n}\r\n\r\n.ship.length-4.vertical {\r\n  height: 135px;\r\n}\r\n\r\n.ship.length-5.vertical {\r\n  height: 169px;\r\n}\r\n\r\n.cell.hit {\r\n  position: relative;\r\n  background-color: #a80a39;\r\n}\r\n\r\n.cell.hit::before {\r\n  position: absolute;\r\n  color: #fadada;\r\n  content: 'x';\r\n  top: 50%;\r\n  right: 50%;\r\n  transform: translate(50%, -60%);\r\n}\r\n\r\n.cell.miss {\r\n  background-color: #539cb9;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;EACE,+BAA+B;EAC/B,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,SAAS;EACT,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,8BAA8B;EAC9B,SAAS;AACX;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,MAAM;AACR;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,MAAM;EACN,QAAQ;EACR,OAAO;AACT;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,YAAY;EACZ,QAAQ;EACR,UAAU;EACV,+BAA+B;AACjC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;AACf","sourcesContent":["* {\r\n  font-family: Tahoma, sans-serif;\r\n  box-sizing: border-box;\r\n  letter-spacing: 1px;\r\n}\r\n\r\nbody {\r\n  font-size: 1.2rem;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n}\r\n\r\n.content {\r\n  gap: 2rem;\r\n  justify-content: center;\r\n  padding: 3em;\r\n}\r\n\r\n.top {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\nbutton {\r\n  font-weight: 600;\r\n  color: #fff;\r\n  width: min-content;\r\n  border: none;\r\n  padding: 0.6em 2em;\r\n  border-radius: 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.start-btn {\r\n  background-color: #71a08a;\r\n}\r\n\r\n.restart-btn {\r\n  background-color: #e22b63;\r\n}\r\n\r\n.boards-container {\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 5rem;\r\n}\r\n\r\n.board {\r\n  grid-template-columns: repeat(10, 34px);\r\n}\r\n\r\n.cell {\r\n  position: relative;\r\n  height: 34px;\r\n  border: 1px solid #75743e;\r\n  user-select: none;\r\n}\r\n\r\n.sunk {\r\n  background-color: #423f3f;\r\n}\r\n\r\n.ship {\r\n  position: absolute;\r\n  z-index: 1;\r\n  background-color: #a58ec3;\r\n  border: 1px solid #75743e;\r\n}\r\n\r\n.ship.playing {\r\n  z-index: -1;\r\n}\r\n\r\n.ship.drag {\r\n  cursor: move;\r\n}\r\n\r\n.ship.drop {\r\n  z-index: -1;\r\n}\r\n\r\n.ship.horizontal {\r\n  height: 32px;\r\n  top: 0;\r\n}\r\n\r\n.ship.length-2.horizontal {\r\n  width: 67px;\r\n}\r\n\r\n.ship.length-3.horizontal {\r\n  width: 101px;\r\n}\r\n\r\n.ship.length-4.horizontal {\r\n  width: 135px;\r\n}\r\n\r\n.ship.length-5.horizontal {\r\n  width: 169px;\r\n}\r\n\r\n.ship.vertical {\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n}\r\n\r\n.ship.length-2.vertical {\r\n  height: 67px;\r\n}\r\n\r\n.ship.length-3.vertical {\r\n  height: 101px;\r\n}\r\n\r\n.ship.length-4.vertical {\r\n  height: 135px;\r\n}\r\n\r\n.ship.length-5.vertical {\r\n  height: 169px;\r\n}\r\n\r\n.cell.hit {\r\n  position: relative;\r\n  background-color: #a80a39;\r\n}\r\n\r\n.cell.hit::before {\r\n  position: absolute;\r\n  color: #fadada;\r\n  content: 'x';\r\n  top: 50%;\r\n  right: 50%;\r\n  transform: translate(50%, -60%);\r\n}\r\n\r\n.cell.miss {\r\n  background-color: #539cb9;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
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

  const setCoordinatesInfo = ({ length, coordinates, axis }) => (fn) => {
    const j = axis === 'horizontal' ? coordinates[0] : coordinates[1];

    for (let i = j; i < j + length; i += 1) {
      let node = null;
      if (axis === 'horizontal') node = `${i}, ${coordinates[1]}`;
      else node = `${coordinates[0]}, ${i}`;

      fn(node);
    }
  };

  return {
    placeShip({ length, coordinates, axis = 'horizontal' } = {}) {
      const applyFnToCoordinates = setCoordinatesInfo({ length, coordinates, axis });

      let valid = true;

      applyFnToCoordinates((node) => {
        if (!board.has(node) || board.get(node) != null) valid = false;
      });

      if (valid === false) return false;

      const ship = (0,_ship_factory__WEBPACK_IMPORTED_MODULE_0__["default"])(length);

      shipsCoordinates.set(coordinates.join(', '), {
        length, coordinates: coordinates.join(', '), axis, list: [],
      });
      remainingShips += 1;

      applyFnToCoordinates((node) => {
        board.set(node, ship);
        shipsCoordinates.get(coordinates.join(', ')).list.push(node);
      });

      return true;
    },
    randomPlaceShip() {
      const shipsLength = [5, 4, 3, 3, 2];
      const axisArr = ['horizontal', 'vertical'];

      for (let i = 0; i < shipsLength.length; i += 1) {
        let validPlaceShip = false;

        while (!validPlaceShip) {
          const coordinates = [];
          const axis = axisArr[Math.floor(Math.random() * axisArr.length)];

          coordinates.push(Math.floor(Math.random() * 10));
          coordinates.push(Math.floor(Math.random() * 10));

          validPlaceShip = this.placeShip({
            length: shipsLength[i],
            coordinates,
            axis,
          });
        }
      }
    },
    moveShip({ oldCoordinates, newCoordinates }) {
      const ship = shipsCoordinates.get(oldCoordinates.join(', '));

      shipsCoordinates.delete(oldCoordinates.join(', '));

      const applyFnToCoordinates = setCoordinatesInfo({ ...ship, coordinates: oldCoordinates });

      applyFnToCoordinates((node) => board.set(node));

      const valid = this.placeShip({ ...ship, coordinates: newCoordinates });

      if (valid === false) {
        this.placeShip({ ...ship, coordinates: oldCoordinates });

        return ship;
      }

      return shipsCoordinates.get(newCoordinates.join(', '));
    },
    rotateShip(coordinates) {
      const ship = shipsCoordinates.get(coordinates.join(', '));
      const applyFnToCoordinates = setCoordinatesInfo({ ...ship, coordinates });

      applyFnToCoordinates((node) => board.set(node));

      const valid = this.placeShip({ ...ship, coordinates, axis: ship.axis === 'horizontal' ? 'vertical' : 'horizontal' });

      if (valid === false) {
        this.placeShip({ ...ship, coordinates });

        return false;
      }

      return shipsCoordinates.get(coordinates.join(', '));
    },
    receiveAttack(coordinates) {
      const coord = coordinates.join(', ');

      if (!board.has(coord)
      || hitsList.has(coord)
      || missesList.has(coord)) {
        return 'Invalid shot';
      }

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
const Player = () => {
  const shots = new Set();
  let adjacentCoordinates = [];

  const addAdjacent = (coordinates, a, b) => {
    const x = coordinates[0] + a;
    const y = coordinates[1] + b;

    if (x > -1 && x < 10 && !shots.has(`${x}, ${y}`)) adjacentCoordinates.push([x, y]);
  };

  return {
    attackEnemyBoard(coordinates, attackFn) {
      return attackFn(coordinates);
    },
    randomAttackEnemyBoard(attackFn) {
      let coordinates = [];
      let attack = 'Invalid shot';

      while (attack === 'Invalid shot') {
        if (adjacentCoordinates.length > 0) {
          [coordinates] = adjacentCoordinates.splice(0, 1);
        } else {
          coordinates[0] = Math.floor(Math.random() * 10);
          coordinates[1] = Math.floor(Math.random() * 10);
        }

        attack = attackFn(coordinates);
      }

      if (attack === 'Sunk') {
        adjacentCoordinates = [];
      } else if (attack === 'Hit') {
        addAdjacent(coordinates, -1, 0);
        addAdjacent(coordinates, 1, 0);
        addAdjacent(coordinates, 0, -1);
        addAdjacent(coordinates, 0, 1);
      }

      if (attack === 'Hit' && adjacentCoordinates.length > 1) {
        adjacentCoordinates = adjacentCoordinates
          .filter((coord) => coord[0] === coordinates[0] || coord[1] === coordinates[1]);
      }

      shots.add(coordinates.join(', '));

      return attack !== 'Invalid shot';
    },
  };
};

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
  let player1 = (0,_factories_player_factory__WEBPACK_IMPORTED_MODULE_1__["default"])();
  let player2 = (0,_factories_player_factory__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
      player1 = (0,_factories_player_factory__WEBPACK_IMPORTED_MODULE_1__["default"])();
      player2 = (0,_factories_player_factory__WEBPACK_IMPORTED_MODULE_1__["default"])();

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

    const cell = boardContainer.querySelector(
      `[data-coordinates="${info[0]}"]`,
    );

    cell.appendChild(div);
  }

  for (let i = 0; i < info.length; i += 1) {
    const cell = boardContainer.querySelector(
      `[data-coordinates="${info[i]}"]`,
    );

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

  e.target.className = `ship drag length-${length} ${axis}`;
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
  ship.classList.add('drop');

  const { x, y } = ship.getBoundingClientRect();

  const node = document.elementFromPoint(x, y);

  if (node?.dataset?.coordinates == null) {
    const cell = board.querySelector(`[data-coordinates="${coord}"]`);

    ship.style.left = '';
    ship.style.top = '';
    ship.classList.remove('drop');
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
    callbacks: [
      { type: 'click', fn: rotateShip },
      { type: 'dragstart', fn: handleDragStart },
    ],
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
    const div = document.querySelector('[data-player="winner"]');
    const enemyBoard = document.querySelector('[data-board="player2"]');

    div.textContent = `Winner: ${winner}`;
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
    ship.classList.add('playing');
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
      callbacks: [
        { type: 'click', fn: rotateShip },
        { type: 'dragstart', fn: handleDragStart },
      ],
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
  const div = document.querySelector('[data-player="winner"]');

  game.restart();
  div.textContent = '';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTtBQUNBLFVBQVUsUUFBUTtBQUNsQjs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQixhQUFhO0FBQ2hDLG9EQUFvRCxZQUFZOztBQUVoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsK0JBQStCO0FBQ3pDLFVBQVUsd0NBQXdDO0FBQ2xEO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS9zdHlsZS5jc3M/YzlmMCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwL2ZhY3Rvcmllcy9nYW1lLWJvYXJkLWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHAvZmFjdG9yaWVzL3BsYXllci1mYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwL2ZhY3Rvcmllcy9zaGlwLWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHAvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC9wYXJzZUludFN0ci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgZm9udC1mYW1pbHk6IFRhaG9tYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAzZW07XFxyXFxufVxcclxcblxcclxcbi50b3Age1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAuNmVtIDJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcxYTA4YTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3RhcnQtYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMjJiNjM7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZHMtY29udGFpbmVyIHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdhcDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzNHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgaGVpZ2h0OiAzNHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzc1NzQzZTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VuayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDIzZjNmO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1OGVjMztcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3NTc0M2U7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLnBsYXlpbmcge1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLmRyYWcge1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5kcm9wIHtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5ob3Jpem9udGFsIHtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG4gIHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAubGVuZ3RoLTIuaG9yaXpvbnRhbCB7XFxyXFxuICB3aWR0aDogNjdweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAubGVuZ3RoLTMuaG9yaXpvbnRhbCB7XFxyXFxuICB3aWR0aDogMTAxcHg7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLmxlbmd0aC00Lmhvcml6b250YWwge1xcclxcbiAgd2lkdGg6IDEzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5sZW5ndGgtNS5ob3Jpem9udGFsIHtcXHJcXG4gIHdpZHRoOiAxNjlweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAudmVydGljYWwge1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5sZW5ndGgtMi52ZXJ0aWNhbCB7XFxyXFxuICBoZWlnaHQ6IDY3cHg7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLmxlbmd0aC0zLnZlcnRpY2FsIHtcXHJcXG4gIGhlaWdodDogMTAxcHg7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLmxlbmd0aC00LnZlcnRpY2FsIHtcXHJcXG4gIGhlaWdodDogMTM1cHg7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLmxlbmd0aC01LnZlcnRpY2FsIHtcXHJcXG4gIGhlaWdodDogMTY5cHg7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLmhpdCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTgwYTM5O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5oaXQ6OmJlZm9yZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjb2xvcjogI2ZhZGFkYTtcXHJcXG4gIGNvbnRlbnQ6ICd4JztcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgcmlnaHQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTYwJSk7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLm1pc3Mge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzOWNiOTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsK0JBQStCO0VBQy9CLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLE1BQU07QUFDUjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLE1BQU07RUFDTixRQUFRO0VBQ1IsT0FBTztBQUNUOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLFFBQVE7RUFDUixVQUFVO0VBQ1YsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgZm9udC1mYW1pbHk6IFRhaG9tYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAzZW07XFxyXFxufVxcclxcblxcclxcbi50b3Age1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAuNmVtIDJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcxYTA4YTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3RhcnQtYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMjJiNjM7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZHMtY29udGFpbmVyIHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdhcDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIHtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzNHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgaGVpZ2h0OiAzNHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzc1NzQzZTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VuayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDIzZjNmO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1OGVjMztcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3NTc0M2U7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLnBsYXlpbmcge1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLmRyYWcge1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5kcm9wIHtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5ob3Jpem9udGFsIHtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG4gIHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAubGVuZ3RoLTIuaG9yaXpvbnRhbCB7XFxyXFxuICB3aWR0aDogNjdweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAubGVuZ3RoLTMuaG9yaXpvbnRhbCB7XFxyXFxuICB3aWR0aDogMTAxcHg7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLmxlbmd0aC00Lmhvcml6b250YWwge1xcclxcbiAgd2lkdGg6IDEzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5sZW5ndGgtNS5ob3Jpem9udGFsIHtcXHJcXG4gIHdpZHRoOiAxNjlweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAudmVydGljYWwge1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC5sZW5ndGgtMi52ZXJ0aWNhbCB7XFxyXFxuICBoZWlnaHQ6IDY3cHg7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLmxlbmd0aC0zLnZlcnRpY2FsIHtcXHJcXG4gIGhlaWdodDogMTAxcHg7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLmxlbmd0aC00LnZlcnRpY2FsIHtcXHJcXG4gIGhlaWdodDogMTM1cHg7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLmxlbmd0aC01LnZlcnRpY2FsIHtcXHJcXG4gIGhlaWdodDogMTY5cHg7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLmhpdCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTgwYTM5O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC5oaXQ6OmJlZm9yZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjb2xvcjogI2ZhZGFkYTtcXHJcXG4gIGNvbnRlbnQ6ICd4JztcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgcmlnaHQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTYwJSk7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLm1pc3Mge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzOWNiOTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAtZmFjdG9yeSc7XG5cbmNvbnN0IEdhbWVCb2FyZCA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IHNoaXBzQ29vcmRpbmF0ZXMgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IG1pc3Nlc0xpc3QgPSBuZXcgU2V0KCk7XG4gIGNvbnN0IGhpdHNMaXN0ID0gbmV3IFNldCgpO1xuICBsZXQgc3Vua1NoaXBzID0gW107XG4gIGxldCByZW1haW5pbmdTaGlwcyA9IDA7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBib2FyZC5zZXQoYCR7aX0sICR7an1gKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBzZXRDb29yZGluYXRlc0luZm8gPSAoeyBsZW5ndGgsIGNvb3JkaW5hdGVzLCBheGlzIH0pID0+IChmbikgPT4ge1xuICAgIGNvbnN0IGogPSBheGlzID09PSAnaG9yaXpvbnRhbCcgPyBjb29yZGluYXRlc1swXSA6IGNvb3JkaW5hdGVzWzFdO1xuXG4gICAgZm9yIChsZXQgaSA9IGo7IGkgPCBqICsgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGxldCBub2RlID0gbnVsbDtcbiAgICAgIGlmIChheGlzID09PSAnaG9yaXpvbnRhbCcpIG5vZGUgPSBgJHtpfSwgJHtjb29yZGluYXRlc1sxXX1gO1xuICAgICAgZWxzZSBub2RlID0gYCR7Y29vcmRpbmF0ZXNbMF19LCAke2l9YDtcblxuICAgICAgZm4obm9kZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcGxhY2VTaGlwKHsgbGVuZ3RoLCBjb29yZGluYXRlcywgYXhpcyA9ICdob3Jpem9udGFsJyB9ID0ge30pIHtcbiAgICAgIGNvbnN0IGFwcGx5Rm5Ub0Nvb3JkaW5hdGVzID0gc2V0Q29vcmRpbmF0ZXNJbmZvKHsgbGVuZ3RoLCBjb29yZGluYXRlcywgYXhpcyB9KTtcblxuICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcblxuICAgICAgYXBwbHlGblRvQ29vcmRpbmF0ZXMoKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKCFib2FyZC5oYXMobm9kZSkgfHwgYm9hcmQuZ2V0KG5vZGUpICE9IG51bGwpIHZhbGlkID0gZmFsc2U7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHZhbGlkID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBjb25zdCBzaGlwID0gU2hpcChsZW5ndGgpO1xuXG4gICAgICBzaGlwc0Nvb3JkaW5hdGVzLnNldChjb29yZGluYXRlcy5qb2luKCcsICcpLCB7XG4gICAgICAgIGxlbmd0aCwgY29vcmRpbmF0ZXM6IGNvb3JkaW5hdGVzLmpvaW4oJywgJyksIGF4aXMsIGxpc3Q6IFtdLFxuICAgICAgfSk7XG4gICAgICByZW1haW5pbmdTaGlwcyArPSAxO1xuXG4gICAgICBhcHBseUZuVG9Db29yZGluYXRlcygobm9kZSkgPT4ge1xuICAgICAgICBib2FyZC5zZXQobm9kZSwgc2hpcCk7XG4gICAgICAgIHNoaXBzQ29vcmRpbmF0ZXMuZ2V0KGNvb3JkaW5hdGVzLmpvaW4oJywgJykpLmxpc3QucHVzaChub2RlKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIHJhbmRvbVBsYWNlU2hpcCgpIHtcbiAgICAgIGNvbnN0IHNoaXBzTGVuZ3RoID0gWzUsIDQsIDMsIDMsIDJdO1xuICAgICAgY29uc3QgYXhpc0FyciA9IFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzTGVuZ3RoLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGxldCB2YWxpZFBsYWNlU2hpcCA9IGZhbHNlO1xuXG4gICAgICAgIHdoaWxlICghdmFsaWRQbGFjZVNoaXApIHtcbiAgICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IFtdO1xuICAgICAgICAgIGNvbnN0IGF4aXMgPSBheGlzQXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF4aXNBcnIubGVuZ3RoKV07XG5cbiAgICAgICAgICBjb29yZGluYXRlcy5wdXNoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSk7XG4gICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpO1xuXG4gICAgICAgICAgdmFsaWRQbGFjZVNoaXAgPSB0aGlzLnBsYWNlU2hpcCh7XG4gICAgICAgICAgICBsZW5ndGg6IHNoaXBzTGVuZ3RoW2ldLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXMsXG4gICAgICAgICAgICBheGlzLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBtb3ZlU2hpcCh7IG9sZENvb3JkaW5hdGVzLCBuZXdDb29yZGluYXRlcyB9KSB7XG4gICAgICBjb25zdCBzaGlwID0gc2hpcHNDb29yZGluYXRlcy5nZXQob2xkQ29vcmRpbmF0ZXMuam9pbignLCAnKSk7XG5cbiAgICAgIHNoaXBzQ29vcmRpbmF0ZXMuZGVsZXRlKG9sZENvb3JkaW5hdGVzLmpvaW4oJywgJykpO1xuXG4gICAgICBjb25zdCBhcHBseUZuVG9Db29yZGluYXRlcyA9IHNldENvb3JkaW5hdGVzSW5mbyh7IC4uLnNoaXAsIGNvb3JkaW5hdGVzOiBvbGRDb29yZGluYXRlcyB9KTtcblxuICAgICAgYXBwbHlGblRvQ29vcmRpbmF0ZXMoKG5vZGUpID0+IGJvYXJkLnNldChub2RlKSk7XG5cbiAgICAgIGNvbnN0IHZhbGlkID0gdGhpcy5wbGFjZVNoaXAoeyAuLi5zaGlwLCBjb29yZGluYXRlczogbmV3Q29vcmRpbmF0ZXMgfSk7XG5cbiAgICAgIGlmICh2YWxpZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5wbGFjZVNoaXAoeyAuLi5zaGlwLCBjb29yZGluYXRlczogb2xkQ29vcmRpbmF0ZXMgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNoaXA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzaGlwc0Nvb3JkaW5hdGVzLmdldChuZXdDb29yZGluYXRlcy5qb2luKCcsICcpKTtcbiAgICB9LFxuICAgIHJvdGF0ZVNoaXAoY29vcmRpbmF0ZXMpIHtcbiAgICAgIGNvbnN0IHNoaXAgPSBzaGlwc0Nvb3JkaW5hdGVzLmdldChjb29yZGluYXRlcy5qb2luKCcsICcpKTtcbiAgICAgIGNvbnN0IGFwcGx5Rm5Ub0Nvb3JkaW5hdGVzID0gc2V0Q29vcmRpbmF0ZXNJbmZvKHsgLi4uc2hpcCwgY29vcmRpbmF0ZXMgfSk7XG5cbiAgICAgIGFwcGx5Rm5Ub0Nvb3JkaW5hdGVzKChub2RlKSA9PiBib2FyZC5zZXQobm9kZSkpO1xuXG4gICAgICBjb25zdCB2YWxpZCA9IHRoaXMucGxhY2VTaGlwKHsgLi4uc2hpcCwgY29vcmRpbmF0ZXMsIGF4aXM6IHNoaXAuYXhpcyA9PT0gJ2hvcml6b250YWwnID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJyB9KTtcblxuICAgICAgaWYgKHZhbGlkID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLnBsYWNlU2hpcCh7IC4uLnNoaXAsIGNvb3JkaW5hdGVzIH0pO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNoaXBzQ29vcmRpbmF0ZXMuZ2V0KGNvb3JkaW5hdGVzLmpvaW4oJywgJykpO1xuICAgIH0sXG4gICAgcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcykge1xuICAgICAgY29uc3QgY29vcmQgPSBjb29yZGluYXRlcy5qb2luKCcsICcpO1xuXG4gICAgICBpZiAoIWJvYXJkLmhhcyhjb29yZClcbiAgICAgIHx8IGhpdHNMaXN0Lmhhcyhjb29yZClcbiAgICAgIHx8IG1pc3Nlc0xpc3QuaGFzKGNvb3JkKSkge1xuICAgICAgICByZXR1cm4gJ0ludmFsaWQgc2hvdCc7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNoaXAgPSBib2FyZC5nZXQoY29vcmQpO1xuXG4gICAgICBpZiAoc2hpcCA9PSBudWxsKSB7XG4gICAgICAgIG1pc3Nlc0xpc3QuYWRkKGNvb3JkKTtcbiAgICAgICAgcmV0dXJuICdNaXNzJztcbiAgICAgIH1cblxuICAgICAgc2hpcC5oaXQoKTtcbiAgICAgIGhpdHNMaXN0LmFkZChjb29yZCk7XG5cbiAgICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIHJlbWFpbmluZ1NoaXBzIC09IDE7XG4gICAgICAgIGNvbnN0IGhlYWRDb29yZGluYXRlcyA9IEFycmF5LmZyb20oc2hpcHNDb29yZGluYXRlcy5rZXlzKCkpXG4gICAgICAgICAgLmZpbHRlcigoa2V5KSA9PiBzaGlwc0Nvb3JkaW5hdGVzLmdldChrZXkpLmxpc3QuaW5jbHVkZXMoY29vcmQpKS50b1N0cmluZygpO1xuXG4gICAgICAgIHN1bmtTaGlwcyA9IHN1bmtTaGlwcy5jb25jYXQoc2hpcHNDb29yZGluYXRlcy5nZXQoaGVhZENvb3JkaW5hdGVzKS5saXN0KTtcblxuICAgICAgICByZXR1cm4gJ1N1bmsnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gJ0hpdCc7XG4gICAgfSxcbiAgICBhbGxTaGlwc0hhdmVCZWVuU3VuaygpIHtcbiAgICAgIHJldHVybiByZW1haW5pbmdTaGlwcyA8IDE7XG4gICAgfSxcbiAgICBnZXRCb2FyZEluZm8oKSB7XG4gICAgICBjb25zdCBpbmZvID0ge307XG5cbiAgICAgIGluZm8uc2hpcHMgPSBBcnJheS5mcm9tKHNoaXBzQ29vcmRpbmF0ZXMudmFsdWVzKCkpO1xuXG4gICAgICBpbmZvLm1pc3MgPSBBcnJheS5mcm9tKG1pc3Nlc0xpc3QpO1xuICAgICAgaW5mby5oaXQgPSBBcnJheS5mcm9tKGhpdHNMaXN0KTtcbiAgICAgIGluZm8uc3Vua1NoaXBzID0gc3Vua1NoaXBzO1xuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZUJvYXJkO1xuIiwiY29uc3QgUGxheWVyID0gKCkgPT4ge1xuICBjb25zdCBzaG90cyA9IG5ldyBTZXQoKTtcbiAgbGV0IGFkamFjZW50Q29vcmRpbmF0ZXMgPSBbXTtcblxuICBjb25zdCBhZGRBZGphY2VudCA9IChjb29yZGluYXRlcywgYSwgYikgPT4ge1xuICAgIGNvbnN0IHggPSBjb29yZGluYXRlc1swXSArIGE7XG4gICAgY29uc3QgeSA9IGNvb3JkaW5hdGVzWzFdICsgYjtcblxuICAgIGlmICh4ID4gLTEgJiYgeCA8IDEwICYmICFzaG90cy5oYXMoYCR7eH0sICR7eX1gKSkgYWRqYWNlbnRDb29yZGluYXRlcy5wdXNoKFt4LCB5XSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhdHRhY2tFbmVteUJvYXJkKGNvb3JkaW5hdGVzLCBhdHRhY2tGbikge1xuICAgICAgcmV0dXJuIGF0dGFja0ZuKGNvb3JkaW5hdGVzKTtcbiAgICB9LFxuICAgIHJhbmRvbUF0dGFja0VuZW15Qm9hcmQoYXR0YWNrRm4pIHtcbiAgICAgIGxldCBjb29yZGluYXRlcyA9IFtdO1xuICAgICAgbGV0IGF0dGFjayA9ICdJbnZhbGlkIHNob3QnO1xuXG4gICAgICB3aGlsZSAoYXR0YWNrID09PSAnSW52YWxpZCBzaG90Jykge1xuICAgICAgICBpZiAoYWRqYWNlbnRDb29yZGluYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgW2Nvb3JkaW5hdGVzXSA9IGFkamFjZW50Q29vcmRpbmF0ZXMuc3BsaWNlKDAsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvb3JkaW5hdGVzWzBdID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgIGNvb3JkaW5hdGVzWzFdID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICB9XG5cbiAgICAgICAgYXR0YWNrID0gYXR0YWNrRm4oY29vcmRpbmF0ZXMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXR0YWNrID09PSAnU3VuaycpIHtcbiAgICAgICAgYWRqYWNlbnRDb29yZGluYXRlcyA9IFtdO1xuICAgICAgfSBlbHNlIGlmIChhdHRhY2sgPT09ICdIaXQnKSB7XG4gICAgICAgIGFkZEFkamFjZW50KGNvb3JkaW5hdGVzLCAtMSwgMCk7XG4gICAgICAgIGFkZEFkamFjZW50KGNvb3JkaW5hdGVzLCAxLCAwKTtcbiAgICAgICAgYWRkQWRqYWNlbnQoY29vcmRpbmF0ZXMsIDAsIC0xKTtcbiAgICAgICAgYWRkQWRqYWNlbnQoY29vcmRpbmF0ZXMsIDAsIDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXR0YWNrID09PSAnSGl0JyAmJiBhZGphY2VudENvb3JkaW5hdGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgYWRqYWNlbnRDb29yZGluYXRlcyA9IGFkamFjZW50Q29vcmRpbmF0ZXNcbiAgICAgICAgICAuZmlsdGVyKChjb29yZCkgPT4gY29vcmRbMF0gPT09IGNvb3JkaW5hdGVzWzBdIHx8IGNvb3JkWzFdID09PSBjb29yZGluYXRlc1sxXSk7XG4gICAgICB9XG5cbiAgICAgIHNob3RzLmFkZChjb29yZGluYXRlcy5qb2luKCcsICcpKTtcblxuICAgICAgcmV0dXJuIGF0dGFjayAhPT0gJ0ludmFsaWQgc2hvdCc7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNvbnN0IFNoaXAgPSAobGVuZ3RoKSA9PiB7XG4gIGNvbnN0IHNoaXAgPSB7XG4gICAgbGVuZ3RoLFxuICAgIGhpdHM6IDAsXG4gICAgc3VuazogZmFsc2UsXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBoaXQoKSB7XG4gICAgICBzaGlwLmhpdHMgKz0gMTtcbiAgICB9LFxuICAgIGlzU3VuaygpIHtcbiAgICAgIHNoaXAuc3VuayA9IHNoaXAuaGl0cyA9PT0gc2hpcC5sZW5ndGg7XG4gICAgICByZXR1cm4gc2hpcC5zdW5rO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiaW1wb3J0IEdhbWVCb2FyZCBmcm9tICcuL2ZhY3Rvcmllcy9nYW1lLWJvYXJkLWZhY3RvcnknO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL2ZhY3Rvcmllcy9wbGF5ZXItZmFjdG9yeSc7XG5pbXBvcnQgcGFyc2VJbnRTdHIgZnJvbSAnLi9wYXJzZUludFN0cic7XG5cbmNvbnN0IEdhbWUgPSAoKSA9PiB7XG4gIGxldCBwbGF5ZXIxID0gUGxheWVyKCk7XG4gIGxldCBwbGF5ZXIyID0gUGxheWVyKCk7XG4gIGxldCBwbGF5ZXIxQm9hcmQgPSBHYW1lQm9hcmQoKTtcbiAgbGV0IHBsYXllcjJCb2FyZCA9IEdhbWVCb2FyZCgpO1xuICBsZXQgY3VyclBsYXllciA9IHBsYXllcjE7XG4gIGxldCBjdXJyRW5lbXlCb2FyZCA9IHBsYXllcjJCb2FyZDtcbiAgY29uc3QgcGxheWVyMkF1dG9QbGF5ID0gdHJ1ZTtcblxuICBwbGF5ZXIxQm9hcmQucmFuZG9tUGxhY2VTaGlwKCk7XG4gIHBsYXllcjJCb2FyZC5yYW5kb21QbGFjZVNoaXAoKTtcblxuICByZXR1cm4ge1xuICAgIGNoZWNrR2FtZUVuZCgpIHtcbiAgICAgIGlmIChwbGF5ZXIxQm9hcmQuYWxsU2hpcHNIYXZlQmVlblN1bmsoKSkgcmV0dXJuICdwbGF5ZXIyJztcbiAgICAgIGlmIChwbGF5ZXIyQm9hcmQuYWxsU2hpcHNIYXZlQmVlblN1bmsoKSkgcmV0dXJuICdwbGF5ZXIxJztcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgcmVzdGFydCgpIHtcbiAgICAgIHBsYXllcjEgPSBQbGF5ZXIoKTtcbiAgICAgIHBsYXllcjIgPSBQbGF5ZXIoKTtcblxuICAgICAgcGxheWVyMUJvYXJkID0gR2FtZUJvYXJkKCk7XG4gICAgICBwbGF5ZXIyQm9hcmQgPSBHYW1lQm9hcmQoKTtcblxuICAgICAgcGxheWVyMUJvYXJkLnJhbmRvbVBsYWNlU2hpcCgpO1xuICAgICAgcGxheWVyMkJvYXJkLnJhbmRvbVBsYWNlU2hpcCgpO1xuXG4gICAgICBjdXJyUGxheWVyID0gcGxheWVyMTtcbiAgICAgIGN1cnJFbmVteUJvYXJkID0gcGxheWVyMkJvYXJkO1xuICAgIH0sXG4gICAgc3dhcFR1cm4oKSB7XG4gICAgICBpZiAoY3VyclBsYXllciA9PT0gcGxheWVyMSkge1xuICAgICAgICBjdXJyUGxheWVyID0gcGxheWVyMjtcbiAgICAgICAgY3VyckVuZW15Qm9hcmQgPSBwbGF5ZXIxQm9hcmQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyUGxheWVyID0gcGxheWVyMTtcbiAgICAgICAgY3VyckVuZW15Qm9hcmQgPSBwbGF5ZXIyQm9hcmQ7XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXRCb2FyZHNJbmZvKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGxheWVyMTogcGxheWVyMUJvYXJkLmdldEJvYXJkSW5mbygpLFxuICAgICAgICBwbGF5ZXIyOiBwbGF5ZXIyQm9hcmQuZ2V0Qm9hcmRJbmZvKCksXG4gICAgICB9O1xuICAgIH0sXG4gICAgYXV0b1R1cm4oKSB7XG4gICAgICBpZiAodGhpcy5jaGVja0dhbWVFbmQoKSAhPT0gZmFsc2UpIHJldHVybjtcblxuICAgICAgY3VyclBsYXllci5yYW5kb21BdHRhY2tFbmVteUJvYXJkKGN1cnJFbmVteUJvYXJkLnJlY2VpdmVBdHRhY2spO1xuICAgICAgdGhpcy5zd2FwVHVybigpO1xuICAgIH0sXG4gICAgdGFrZVR1cm4oY29vcmRpbmF0ZXMpIHtcbiAgICAgIGNvbnN0IGFyciA9IGNvb3JkaW5hdGVzLnNwbGl0KCcsICcpO1xuICAgICAgY29uc3QgYXR0YWNrID0gY3VyclBsYXllci5hdHRhY2tFbmVteUJvYXJkKGFyciwgY3VyckVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayk7XG5cbiAgICAgIGlmIChhdHRhY2sgPT09ICdJbnZhbGlkIHNob3QnKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIHRoaXMuc3dhcFR1cm4oKTtcblxuICAgICAgaWYgKHBsYXllcjJBdXRvUGxheSkgdGhpcy5hdXRvVHVybigpO1xuXG4gICAgICByZXR1cm4gYXR0YWNrO1xuICAgIH0sXG4gICAgbW92ZVNoaXAob2xkQ29vcmRpbmF0ZXMsIG5ld0Nvb3JkaW5hdGVzKSB7XG4gICAgICBjb25zdCBpbmZvID0ge1xuICAgICAgICBvbGRDb29yZGluYXRlczogcGFyc2VJbnRTdHIob2xkQ29vcmRpbmF0ZXMpLFxuICAgICAgICBuZXdDb29yZGluYXRlczogcGFyc2VJbnRTdHIobmV3Q29vcmRpbmF0ZXMpLFxuICAgICAgfTtcblxuICAgICAgaWYgKGN1cnJQbGF5ZXIgPT09IHBsYXllcjEpIHtcbiAgICAgICAgcmV0dXJuIHBsYXllcjFCb2FyZC5tb3ZlU2hpcChpbmZvKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBsYXllcjJCb2FyZC5tb3ZlU2hpcChpbmZvKTtcbiAgICB9LFxuICAgIHJvdGF0ZVNoaXAoY29vcmRpbmF0ZXMsIHBsYXllcikge1xuICAgICAgaWYgKHBsYXllciA9PT0gJ3BsYXllcjEnKSB7XG4gICAgICAgIHJldHVybiBwbGF5ZXIxQm9hcmQucm90YXRlU2hpcChwYXJzZUludFN0cihjb29yZGluYXRlcywgMTApKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBsYXllcjJCb2FyZC5yb3RhdGVTaGlwKHBhcnNlSW50U3RyKGNvb3JkaW5hdGVzLCAxMCkpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VJbnRTdHIoc3RyLCByYWRpeCkge1xuICByZXR1cm4gc3RyLnNwbGl0KCcsICcpLm1hcCgobikgPT4gcGFyc2VJbnQobiwgcmFkaXgpKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vc3R5bGUvc3R5bGUuY3NzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5cbmNvbnN0IGdhbWUgPSBHYW1lKCk7XG5cbmZ1bmN0aW9uIHJlbmRlcihzZWxlY3RvciwgaW5mbywgY2xhc3NOYW1lID0gJycpIHtcbiAgY29uc3QgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICBpZiAoY2xhc3NOYW1lID09PSAnc2hpcCcpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0ZXN0Jyk7XG5cbiAgICBjb25zdCBjZWxsID0gYm9hcmRDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb29yZGluYXRlcz1cIiR7aW5mb1swXX1cIl1gLFxuICAgICk7XG5cbiAgICBjZWxsLmFwcGVuZENoaWxkKGRpdik7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGluZm8ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBjZWxsID0gYm9hcmRDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb29yZGluYXRlcz1cIiR7aW5mb1tpXX1cIl1gLFxuICAgICk7XG5cbiAgICBjZWxsLmNsYXNzTmFtZSA9IGBjZWxsICR7Y2xhc3NOYW1lfWA7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyU3Vua1NoaXBzKHNlbGVjdG9yLCBpbmZvKSB7XG4gIGlmIChpbmZvLmxlbmd0aCA8IDEpIHJldHVybjtcblxuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW5mby5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHNoaXAgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb29yZGluYXRlcz1cIiR7aW5mb1tpXX1cIl1gKTtcblxuICAgIHNoaXAuY2xhc3NOYW1lID0gJ2NlbGwgc3Vuayc7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2VsbHMoKSB7XG4gIGNvbnN0IGNlbGxBcnIgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICBjZWxsLmRhdGFzZXQuY29vcmRpbmF0ZXMgPSBgJHtqfSwgJHtpfWA7XG4gICAgICBjZWxsQXJyLnB1c2goY2VsbCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNlbGxBcnI7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlR2FtZUJvYXJkKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICBjb25zdCBjZWxscyA9IGNyZWF0ZUNlbGxzKCk7XG5cbiAgY29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbiguLi5jZWxscyk7XG59XG5cbmZ1bmN0aW9uIGFkZFNoaXBEaXYoe1xuICBjb29yZGluYXRlcywgYXhpcywgbGVuZ3RoLCBwbGF5ZXIsIGNhbGxiYWNrcyxcbn0gPSB7fSkge1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWJvYXJkPVwiJHtwbGF5ZXJ9XCJdYCk7XG4gIGNvbnN0IGNlbGwgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb29yZGluYXRlcz1cIiR7Y29vcmRpbmF0ZXN9XCJdYCk7XG4gIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBzaGlwLmNsYXNzTGlzdC5hZGQoJ3NoaXAnLCAnZHJhZycsIGBsZW5ndGgtJHtsZW5ndGh9YCwgYXhpcyk7XG4gIHNoaXAuZGF0YXNldC5zaGlwID0gY29vcmRpbmF0ZXM7XG4gIHNoaXAuZHJhZ2dhYmxlID0gdHJ1ZTtcblxuICBjYWxsYmFja3MuZm9yRWFjaCgoeyB0eXBlLCBmbiB9KSA9PiBzaGlwLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4pKTtcblxuICBjZWxsLmFwcGVuZENoaWxkKHNoaXApO1xufVxuXG5mdW5jdGlvbiByb3RhdGVTaGlwKGUpIHtcbiAgY29uc3QgeyBjb29yZGluYXRlcyB9ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0O1xuICBjb25zdCBib2FyZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWJvYXJkXScpO1xuICBjb25zdCBwbGF5ZXIgPSBib2FyZC5kYXRhc2V0LmJvYXJkO1xuICBjb25zdCBpbmZvID0gZ2FtZS5yb3RhdGVTaGlwKGNvb3JkaW5hdGVzLCBwbGF5ZXIpO1xuXG4gIGlmIChpbmZvID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gIGNvbnN0IHsgbGVuZ3RoLCBheGlzIH0gPSBpbmZvO1xuXG4gIGUudGFyZ2V0LmNsYXNzTmFtZSA9IGBzaGlwIGRyYWcgbGVuZ3RoLSR7bGVuZ3RofSAke2F4aXN9YDtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRHJhZ1N0YXJ0KGUpIHtcbiAgY29uc3QgeyBzaGlwIH0gPSBlLnRhcmdldC5kYXRhc2V0O1xuICBjb25zdCBzaGlmdFggPSBlLmNsaWVudFggLSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICBjb25zdCBzaGlmdFkgPSBlLmNsaWVudFkgLSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG5cbiAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9jb29yZCcsIHNoaXApO1xuICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgYCR7c2hpZnRYfSwgJHtzaGlmdFl9YCk7XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVEcmFnT3ZlcihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURyb3AoZSkge1xuICBjb25zdCBib2FyZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWJvYXJkXScpO1xuICBjb25zdCBjb29yZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvY29vcmQnKTtcbiAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNoaXA9XCIke2Nvb3JkfVwiXWApO1xuICBjb25zdCBbc2hpZnRYLCBzaGlmdFldID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpLnNwbGl0KCcsICcpO1xuICBjb25zdCBsZWZ0ID0gZS5jbGllbnRYIC0gc2hpZnRYO1xuICBjb25zdCB0b3AgPSBlLmNsaWVudFkgLSBzaGlmdFk7XG5cbiAgYm9hcmQuYXBwZW5kKHNoaXApO1xuXG4gIHNoaXAuc3R5bGUubGVmdCA9IGAke2xlZnQgKyAxNn1weGA7XG4gIHNoaXAuc3R5bGUudG9wID0gYCR7dG9wICsgMTZ9cHhgO1xuICBzaGlwLmNsYXNzTGlzdC5hZGQoJ2Ryb3AnKTtcblxuICBjb25zdCB7IHgsIHkgfSA9IHNoaXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSk7XG5cbiAgaWYgKG5vZGU/LmRhdGFzZXQ/LmNvb3JkaW5hdGVzID09IG51bGwpIHtcbiAgICBjb25zdCBjZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29vcmRpbmF0ZXM9XCIke2Nvb3JkfVwiXWApO1xuXG4gICAgc2hpcC5zdHlsZS5sZWZ0ID0gJyc7XG4gICAgc2hpcC5zdHlsZS50b3AgPSAnJztcbiAgICBzaGlwLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3AnKTtcbiAgICBjZWxsLmFwcGVuZChzaGlwKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgY29vcmRpbmF0ZXMgfSA9IG5vZGUuZGF0YXNldDtcbiAgY29uc3QgcGxheWVyID0gYm9hcmQuZGF0YXNldC5ib2FyZDtcbiAgY29uc3QgbmV3U2hpcCA9IGdhbWUubW92ZVNoaXAoY29vcmQsIGNvb3JkaW5hdGVzKTtcblxuICBzaGlwLnJlbW92ZSgpO1xuXG4gIGFkZFNoaXBEaXYoe1xuICAgIC4uLm5ld1NoaXAsXG4gICAgcGxheWVyLFxuICAgIGNhbGxiYWNrczogW1xuICAgICAgeyB0eXBlOiAnY2xpY2snLCBmbjogcm90YXRlU2hpcCB9LFxuICAgICAgeyB0eXBlOiAnZHJhZ3N0YXJ0JywgZm46IGhhbmRsZURyYWdTdGFydCB9LFxuICAgIF0sXG4gIH0pO1xuXG4gIGUucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gYXR0YWNrQm9hcmQoZSkge1xuICBjb25zdCB7IGNvb3JkaW5hdGVzIH0gPSBlLnRhcmdldC5kYXRhc2V0O1xuXG4gIGlmIChjb29yZGluYXRlcyA9PSBudWxsKSByZXR1cm47XG5cbiAgY29uc3QgdHVybiA9IGdhbWUudGFrZVR1cm4oY29vcmRpbmF0ZXMpO1xuXG4gIGlmICh0dXJuID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gIGNvbnN0IHsgcGxheWVyMSwgcGxheWVyMiB9ID0gZ2FtZS5nZXRCb2FyZHNJbmZvKCk7XG5cbiAgcmVuZGVyKCdbZGF0YS1ib2FyZD1cInBsYXllcjFcIl0nLCBwbGF5ZXIxLmhpdCwgJ2hpdCcpO1xuICByZW5kZXIoJ1tkYXRhLWJvYXJkPVwicGxheWVyMVwiXScsIHBsYXllcjEubWlzcywgJ21pc3MnKTtcbiAgcmVuZGVyU3Vua1NoaXBzKCdbZGF0YS1ib2FyZD1cInBsYXllcjFcIl0nLCBwbGF5ZXIxLnN1bmtTaGlwcyk7XG5cbiAgcmVuZGVyKCdbZGF0YS1ib2FyZD1cInBsYXllcjJcIl0nLCBwbGF5ZXIyLmhpdCwgJ2hpdCcpO1xuICByZW5kZXIoJ1tkYXRhLWJvYXJkPVwicGxheWVyMlwiXScsIHBsYXllcjIubWlzcywgJ21pc3MnKTtcbiAgcmVuZGVyU3Vua1NoaXBzKCdbZGF0YS1ib2FyZD1cInBsYXllcjJcIl0nLCBwbGF5ZXIyLnN1bmtTaGlwcyk7XG5cbiAgY29uc3Qgd2lubmVyID0gZ2FtZS5jaGVja0dhbWVFbmQoKTtcblxuICBpZiAod2lubmVyICE9PSBmYWxzZSkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBsYXllcj1cIndpbm5lclwiXScpO1xuICAgIGNvbnN0IGVuZW15Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1ib2FyZD1cInBsYXllcjJcIl0nKTtcblxuICAgIGRpdi50ZXh0Q29udGVudCA9IGBXaW5uZXI6ICR7d2lubmVyfWA7XG4gICAgZW5lbXlCb2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGF0dGFja0JvYXJkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdGFydEdhbWUoZSkge1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJvYXJkPVwicGxheWVyMVwiXScpO1xuICBjb25zdCB7IHNoaXBzIH0gPSBnYW1lLmdldEJvYXJkc0luZm8oKS5wbGF5ZXIxO1xuICBjb25zdCByZXN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYnRuPVwicmVzdGFydFwiXScpO1xuXG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICByZXN0YXJ0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXG4gIHNoaXBzLmZvckVhY2goKHsgY29vcmRpbmF0ZXMgfSkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zaGlwPVwiJHtjb29yZGluYXRlc31cIl1gKTtcblxuICAgIHNoaXAucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVTaGlwKTtcbiAgICBzaGlwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGhhbmRsZURyYWdTdGFydCk7XG4gICAgc2hpcC5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICBzaGlwLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWcnKTtcbiAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ3BsYXlpbmcnKTtcbiAgfSk7XG5cbiAgYm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBoYW5kbGVEcmFnT3Zlcik7XG4gIGJvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBoYW5kbGVEcm9wKTtcblxuICBjb25zdCBlbmVteUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYm9hcmQ9XCJwbGF5ZXIyXCJdJyk7XG5cbiAgZW5lbXlCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGF0dGFja0JvYXJkKTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbEJvYXJkKCkge1xuICBnYW1lLmdldEJvYXJkc0luZm8oKS5wbGF5ZXIxLnNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBhZGRTaGlwRGl2KHtcbiAgICAgIC4uLnNoaXAsXG4gICAgICBjYWxsYmFja3M6IFtcbiAgICAgICAgeyB0eXBlOiAnY2xpY2snLCBmbjogcm90YXRlU2hpcCB9LFxuICAgICAgICB7IHR5cGU6ICdkcmFnc3RhcnQnLCBmbjogaGFuZGxlRHJhZ1N0YXJ0IH0sXG4gICAgICBdLFxuICAgICAgcGxheWVyOiAncGxheWVyMScsXG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJ0bj1cInN0YXJ0XCJdJyk7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYm9hcmQ9XCJwbGF5ZXIxXCJdJyk7XG5cbiAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBoYW5kbGVEcmFnT3Zlcik7XG4gIGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBoYW5kbGVEcm9wKTtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRHYW1lKTtcbn1cblxuZnVuY3Rpb24gcmVzdGFydEdhbWUoZSkge1xuICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJ0bj1cInN0YXJ0XCJdJyk7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBsYXllcj1cIndpbm5lclwiXScpO1xuXG4gIGdhbWUucmVzdGFydCgpO1xuICBkaXYudGV4dENvbnRlbnQgPSAnJztcblxuICBjb25zdCBlbmVteUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYm9hcmQ9XCJwbGF5ZXIyXCJdJyk7XG5cbiAgZW5lbXlCb2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGF0dGFja0JvYXJkKTtcblxuICBwb3B1bGF0ZUdhbWVCb2FyZCgnW2RhdGEtYm9hcmQ9XCJwbGF5ZXIxXCJdJyk7XG4gIHBvcHVsYXRlR2FtZUJvYXJkKCdbZGF0YS1ib2FyZD1cInBsYXllcjJcIl0nKTtcblxuICBpbml0aWFsQm9hcmQoKTtcblxuICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgc3RhcnRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59XG5cbmNvbnN0IHJlc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1idG49XCJyZXN0YXJ0XCJdJyk7XG5cbnJlc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXN0YXJ0R2FtZSk7XG5cbnBvcHVsYXRlR2FtZUJvYXJkKCdbZGF0YS1ib2FyZD1cInBsYXllcjFcIl0nKTtcbnBvcHVsYXRlR2FtZUJvYXJkKCdbZGF0YS1ib2FyZD1cInBsYXllcjJcIl0nKTtcblxuaW5pdGlhbEJvYXJkKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=