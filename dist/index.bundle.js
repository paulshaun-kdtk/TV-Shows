"use strict";
(self["webpackChunkweek5_api_capstone"] = self["webpackChunkweek5_api_capstone"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./bg.avif */ "./src/bg.avif"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! images.jpeg */ "./src/images.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h3 {
  font-size: 24px;
  text-align: center;
  margin: 2px 0  2px;
}

html {
  font-family: "Roboto", serif;
}

body {
  font-size: 15px;
  font-weight: normal;
  line-height: 18px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

.logo {
  padding: 19px;
  border-radius: 100%;
  border: 2px solid rgb(198, 192, 185);
  text-align: center;
  height: 70px;
  width: 70px;
  cursor: pointer;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

header {
  top: 0;
  padding: 70px 0 100px;
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

nav {
  width: 100%;
}

nav ul {
  padding-top: 19px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: inherit;
}

ul li.active {
  border-bottom: 2px solid grey;
}

ul li {
  list-style: none;
  margin-right: 12px;
  cursor: pointer;
}

footer {
  position: fixed !important;
  color: white;
  background: #2f4858;
  font-size: 16px;
  font-weight: 300;
  left: 0 !important;
  bottom: 0 !important;
  width: 100%;
  text-align: left;
}

.footer-text {
  font-size: 12px !important;
  font-family: roboto, serif;
  color: white;
  letter-spacing: 1px;
  font-weight: 200 !important;
  margin: 0;
}

img {
  width: 180px;
  height: auto;
}

.icon {
  font-size: 16px;
  color: white;
}

.showItem {
  background-color: #2f4858;
}

.name,
.comment {
  font-size: 12px;
  font-weight: normal;
  color: white;
  inline-size: 110px;
  overflow-wrap: break-word;
}

.comment {
  cursor: pointer;
  background-color: transparent;
}

.likes {
  font-size: 12px;
  font-weight: normal;
  color: white;
  text-align: right;
}

/* modal */
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 20px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  padding-bottom: 100px;
}

.card-container {
  background-color: #fff;
  width: 40%;
  height: 100vh;
  margin: auto;

  /* padding: 16px; */
  border: none;
}

.header-container {
  margin: auto;
  border: none;
}

.close {
  color: #aaa;
  font-size: 28px;
  font-weight: bold;

  /* margin-top: 12px; */
  margin-right: 10px;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal-header {
  display: flex;
  top: 0;
  justify-content: flex-end;
  position: relative;
  margin-top: 0;
  padding: 3px;
}

.modal-body {
  width: 100%;
  background-color: #fff;
  margin: auto;
}

.image-container {
  margin: auto;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  display: flex;
  flex-direction: column;
}

.modal-body img {
  text-align: center;
  width: 60%;
  height: 10%;
}

ul.comment-list {
  width: 100%;
}

ul.comment-list li {
  border: 1px solid rgb(249, 246, 246);
  margin-top: 12px;
  padding: 12px;
}

ul.menu li:hover {
  border-bottom: 2px solid grey;
}

ul.comment-list li:hover {
  text-decoration: none;
}

.form-container {
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

form {
  display: flex;
  flex-direction: column;
}

form button,
textarea,
input[type=text] {
  margin-bottom: 24px;
  padding: 10px;
}

.genres {
  display: flex;
  justify-content: space-around;
  height: 20px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,iBAAiB;EACjB,yDAAgC;AAClC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,oCAAoC;EACpC,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,eAAe;EACf,yDAAkC;EAClC,sBAAsB;EACtB,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA;EACE,MAAM;EACN,qBAAqB;EACrB,YAAY;EACZ,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,0BAA0B;EAC1B,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,oBAAoB;EACpB,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,0BAA0B;EAC1B,0BAA0B;EAC1B,YAAY;EACZ,mBAAmB;EACnB,2BAA2B;EAC3B,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;;EAEE,eAAe;EACf,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;AACnB;;AAEA,UAAU;AACV;EACE,aAAa;EACb,eAAe;EACf,UAAU;EACV,iBAAiB;EACjB,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,cAAc;EACd,oCAAoC;EACpC,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,aAAa;EACb,YAAY;;EAEZ,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,WAAW;EACX,eAAe;EACf,iBAAiB;;EAEjB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;;EAEE,WAAW;EACX,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,MAAM;EACN,yBAAyB;EACzB,kBAAkB;EAClB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,oCAAoC;EACpC,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;;;EAGE,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,YAAY;AACd","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nh3 {\r\n  font-size: 24px;\r\n  text-align: center;\r\n  margin: 2px 0  2px;\r\n}\r\n\r\nhtml {\r\n  font-family: \"Roboto\", serif;\r\n}\r\n\r\nbody {\r\n  font-size: 15px;\r\n  font-weight: normal;\r\n  line-height: 18px;\r\n  background-image: url(./bg.avif);\r\n}\r\n\r\n.logo {\r\n  padding: 19px;\r\n  border-radius: 100%;\r\n  border: 2px solid rgb(198, 192, 185);\r\n  text-align: center;\r\n  height: 70px;\r\n  width: 70px;\r\n  cursor: pointer;\r\n  background-image: url(images.jpeg);\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\nheader {\r\n  top: 0;\r\n  padding: 70px 0 100px;\r\n  height: 80px;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n\r\nnav {\r\n  width: 100%;\r\n}\r\n\r\nnav ul {\r\n  padding-top: 19px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  height: inherit;\r\n}\r\n\r\nul li.active {\r\n  border-bottom: 2px solid grey;\r\n}\r\n\r\nul li {\r\n  list-style: none;\r\n  margin-right: 12px;\r\n  cursor: pointer;\r\n}\r\n\r\nfooter {\r\n  position: fixed !important;\r\n  color: white;\r\n  background: #2f4858;\r\n  font-size: 16px;\r\n  font-weight: 300;\r\n  left: 0 !important;\r\n  bottom: 0 !important;\r\n  width: 100%;\r\n  text-align: left;\r\n}\r\n\r\n.footer-text {\r\n  font-size: 12px !important;\r\n  font-family: roboto, serif;\r\n  color: white;\r\n  letter-spacing: 1px;\r\n  font-weight: 200 !important;\r\n  margin: 0;\r\n}\r\n\r\nimg {\r\n  width: 180px;\r\n  height: auto;\r\n}\r\n\r\n.icon {\r\n  font-size: 16px;\r\n  color: white;\r\n}\r\n\r\n.showItem {\r\n  background-color: #2f4858;\r\n}\r\n\r\n.name,\r\n.comment {\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n  color: white;\r\n  inline-size: 110px;\r\n  overflow-wrap: break-word;\r\n}\r\n\r\n.comment {\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n}\r\n\r\n.likes {\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n  color: white;\r\n  text-align: right;\r\n}\r\n\r\n/* modal */\r\n.modal {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 1;\r\n  padding-top: 20px;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  padding-bottom: 100px;\r\n}\r\n\r\n.card-container {\r\n  background-color: #fff;\r\n  width: 40%;\r\n  height: 100vh;\r\n  margin: auto;\r\n\r\n  /* padding: 16px; */\r\n  border: none;\r\n}\r\n\r\n.header-container {\r\n  margin: auto;\r\n  border: none;\r\n}\r\n\r\n.close {\r\n  color: #aaa;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n\r\n  /* margin-top: 12px; */\r\n  margin-right: 10px;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n  color: #000;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal-header {\r\n  display: flex;\r\n  top: 0;\r\n  justify-content: flex-end;\r\n  position: relative;\r\n  margin-top: 0;\r\n  padding: 3px;\r\n}\r\n\r\n.modal-body {\r\n  width: 100%;\r\n  background-color: #fff;\r\n  margin: auto;\r\n}\r\n\r\n.image-container {\r\n  margin: auto;\r\n  padding: 0;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.content {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.modal-body img {\r\n  text-align: center;\r\n  width: 60%;\r\n  height: 10%;\r\n}\r\n\r\nul.comment-list {\r\n  width: 100%;\r\n}\r\n\r\nul.comment-list li {\r\n  border: 1px solid rgb(249, 246, 246);\r\n  margin-top: 12px;\r\n  padding: 12px;\r\n}\r\n\r\nul.menu li:hover {\r\n  border-bottom: 2px solid grey;\r\n}\r\n\r\nul.comment-list li:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n.form-container {\r\n  padding: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nform button,\r\ntextarea,\r\ninput[type=text] {\r\n  margin-bottom: 24px;\r\n  padding: 10px;\r\n}\r\n\r\n.genres {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  height: 20px;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_show_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/show.js */ "./src/modules/show.js");
/* harmony import */ var _modules_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/util.js */ "./src/modules/util.js");




const render = async () => {
  (0,_modules_show_js__WEBPACK_IMPORTED_MODULE_1__.displayShows)();
  (0,_modules_show_js__WEBPACK_IMPORTED_MODULE_1__.updateLikes)();
  (0,_modules_show_js__WEBPACK_IMPORTED_MODULE_1__.postLikes)();
};

render();

const modal = document.querySelector('#item-modal');

window.addEventListener('click', () => {
  const btns = [...document.querySelectorAll('.comment')];
  btns.forEach((modalBtn) => {
    modalBtn.addEventListener('click', async (event) => {
      if (event.target.id !== null) {
        // show modal
        modal.style.display = 'block';

        //= === show tv show details====
        const tvshowDetails = await (0,_modules_show_js__WEBPACK_IMPORTED_MODULE_1__.showDetails)(event.target.id);
        document.getElementById('tv-show-title').textContent = tvshowDetails.name;
        document
          .getElementById('tv-show-img')
          .setAttribute('src', tvshowDetails.image.medium);
        document.getElementById('show-id').setAttribute('data-id', event.target.id);
        document.getElementById(
          'summary',
        ).innerHTML = `${tvshowDetails.summary}`;

        // show genre
        const genres = document.getElementById('genres');
        genres.innerHTML = '';
        let pElement = '';
        tvshowDetails.genres.forEach((item) => {
          pElement += `<p>${item}</p>`;
        });
        genres.innerHTML = pElement;
        await (0,_modules_show_js__WEBPACK_IMPORTED_MODULE_1__.displayShowComment)(event.target.id);
      }
    });
  });
});

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

document.getElementsByClassName('close')[0].onclick = () => {
  modal.style.display = 'none';
};

// add comment
document.getElementById('add-comment').addEventListener('click', async () => {
  const id = document.getElementById('show-id').getAttribute('data-id');
  const username = document.getElementById('name').value;
  const comment = document.getElementById('insights').value;
  const sms = document.getElementById('message');

  if (username !== '' && id !== '' && comment !== '') {
    sms.style.display = 'block';
    (0,_modules_show_js__WEBPACK_IMPORTED_MODULE_1__.createShowComment)(id, username, comment);
    _modules_util_js__WEBPACK_IMPORTED_MODULE_2__["default"].cleanFormInput();
    sms.style.color = 'green';
    sms.textContent = '-Done';
    await (0,_modules_show_js__WEBPACK_IMPORTED_MODULE_1__.displayShowComment)(id);
  } else {
    sms.style.display = 'block';
    sms.style.color = 'red';
    sms.textContent = '-Fields required';
  }
});

/***/ }),

/***/ "./src/modules/apiObj.js":
/*!*******************************!*\
  !*** ./src/modules/apiObj.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LikeObj)
/* harmony export */ });
class LikeObj {
  constructor() {
    this.item_id = null;
    this.likes = 0;
  }

    static likes = [];
}

/***/ }),

/***/ "./src/modules/count.js":
/*!******************************!*\
  !*** ./src/modules/count.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const displayItemCounted = (shows) => {
    const counter = document.querySelector('.item-counter');
    counter.innerText = `TV Shows(${shows.length})`;
  };
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayItemCounted);    

/***/ }),

/***/ "./src/modules/show.js":
/*!*****************************!*\
  !*** ./src/modules/show.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createShowComment: () => (/* binding */ createShowComment),
/* harmony export */   displayShowComment: () => (/* binding */ displayShowComment),
/* harmony export */   displayShows: () => (/* binding */ displayShows),
/* harmony export */   fetchShows: () => (/* binding */ fetchShows),
/* harmony export */   postLikes: () => (/* binding */ postLikes),
/* harmony export */   showDetails: () => (/* binding */ showDetails),
/* harmony export */   updateLikes: () => (/* binding */ updateLikes)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./src/modules/util.js");
/* harmony import */ var _apiObj_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiObj.js */ "./src/modules/apiObj.js");
/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./count.js */ "./src/modules/count.js");




const url = 'https://api.tvmaze.com/shows';
const appIDLikes = `${_util_js__WEBPACK_IMPORTED_MODULE_0__["default"].baseUrl}apps/xOy8HlGROfAorR72yXQL/likes`;

const fetchShows = async () => {
  const response = await fetch(url);
  const result = response.json();
  return result;
};

const fetchLikes = async (appIDLikes) => {
  const response = await fetch(appIDLikes);
  const result = response.json();
  return result;
};

const displayShows = async () => {
  const showList = document.querySelector('.tvshow-list');
  const shows = await fetchShows(url).then((result) => result);

  if (shows.length !== 0) {
    showList.innerHTML = '';
    shows.forEach((element, index) => {
      const showItem = `
            <div class="showItem mx-5 my-2 d-flex flex-column align-items-center justify-content-center">
                <img src="${element.image.medium}" alt="show">
                <div class="d-flex align-items-center justify-content-between w-100">
                    <h6 class="m-0 px-1 py-2 name">${element.name}</h6>
                    <i data-id=${index} class="heart fa-solid fa-heart icon px-1"></i>
                </div>
                <p class="m-0 px-1 pt-0 pb-1 likes w-100">Likes</p>
                <button type="button" id="${element.id}"  class="mx-0 mt-0 mb-1 px-2 py-1 border text-center comment">Comments</button>
                </div>
            `;
      showList.insertAdjacentHTML('beforeend', showItem);
    });
  }
  (0,_count_js__WEBPACK_IMPORTED_MODULE_2__["default"])(shows);
};

const updateLikes = async () => {
  fetchLikes(appIDLikes)
    .then((response) => response)
    .then((response) => {
      const keys = Object.keys(response);
      keys.forEach((key) => {
        const likes = document.querySelectorAll('.likes');
        [...likes].forEach((item) => {
          const showID = parseInt(
            item.previousElementSibling.lastElementChild.getAttribute(
              'data-id',
            ),
            10,
          );
          if (response[key].item_id === showID) {
            item.innerText = `${response[key].likes} Likes`;
            if (response[key].likes > 0) {
              item.previousElementSibling.lastElementChild.classList.add('red');
            }
          }
        });
      });
    });
};

const postLikes = async () => {
  const shows = await fetchShows(url).then((result) => result);
  const clickLikes = document.querySelectorAll('.heart');
  const likeObj = new _apiObj_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

  if (shows.length !== 0) {
    [...clickLikes].forEach((element) => {
      element.addEventListener('click', (e) => {
        likeObj.item_id = parseInt(e.target.getAttribute('data-id'), 10);
        fetch(appIDLikes, {
          method: 'POST',
          body: JSON.stringify(likeObj),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });

        const totalLikes = e.target.parentElement.nextElementSibling;
        fetchLikes(appIDLikes)
          .then((response) => response)
          .then((response) => {
            const keys = Object.keys(response);
            keys.forEach((key) => {
              if (response[key].item_id === likeObj.item_id) {
                totalLikes.innerText = `${response[key].likes} Likes`;
              }
            });
          });
      });
    });
  }
};

const showDetails = async (id) => {
  try {
    const requestOptions = { method: 'GET' };
    const response = await fetch(
      `${_util_js__WEBPACK_IMPORTED_MODULE_0__["default"].showBaseUrl}${id}`,
      requestOptions,
    );
    if (response.ok) return await response.json();
    throw new Error(`HTTP error: ${response.status}`);
  } catch (e) {
    return _util_js__WEBPACK_IMPORTED_MODULE_0__["default"].exception(e);
  }
};

const showComments = async (id) => {
  try {
    const url = `${_util_js__WEBPACK_IMPORTED_MODULE_0__["default"].baseUrl}apps/xOy8HlGROfAorR72yXQL/comments?item_id=${id}`;
    const requestOptions = { method: 'GET' };
    const response = await fetch(url, requestOptions);
    if (response.ok && response.status !== 400) {
      return await response.json();
    }

    return [];
  } catch (e) {
    return _util_js__WEBPACK_IMPORTED_MODULE_0__["default"].exception(e);
  }
};

const createShowComment = async (id, username, comment) => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: _util_js__WEBPACK_IMPORTED_MODULE_0__["default"].getHeader(),
      body: _util_js__WEBPACK_IMPORTED_MODULE_0__["default"].getParams(id, username, comment),
    };
    const response = await fetch(`${_util_js__WEBPACK_IMPORTED_MODULE_0__["default"].baseUrl}apps/xOy8HlGROfAorR72yXQL/comments`, requestOptions);
    if (response.ok) {
      return await response.json();
    }
    throw new Error(`HTTP error: ${response.status}`);
  } catch (e) {
    return _util_js__WEBPACK_IMPORTED_MODULE_0__["default"].exception(e);
  }
};

const displayShowComment = async (id) => {
  //= === show comment=====
  const res = await showComments(id);
  // console.log(res)
  document.getElementById('no-of-comments').textContent = `(${_util_js__WEBPACK_IMPORTED_MODULE_0__["default"].showCommentCounter(res)})`;
  const commentList = document.querySelector('.comment-list');
  commentList.innerHTML = '';
  let liElement = '';
  res.forEach((result) => {
    if (result === null) {
      liElement += ' <li>No comments for now</li>';
    }
    liElement += ` <li>${result.creation_date} ${result.username} ${result.comment}</li>`;
  });
  commentList.innerHTML = liElement;
};




/***/ }),

/***/ "./src/modules/util.js":
/*!*****************************!*\
  !*** ./src/modules/util.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Utilities)
/* harmony export */ });
class Utilities {
    static baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

    static showBaseUrl ='https://api.tvmaze.com/shows/'

    static exception = (message) => message

    static getHeader() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return headers;
      }
  
       static getParams = (id, username, comment) => {
         const urlencoded = new URLSearchParams();
         urlencoded.append('item_id', `${id}`);
         urlencoded.append('username', `${username}`);
         urlencoded.append('comment', `${comment}`);
         return urlencoded;
       }
  
        static cleanFormInput = () => {
          document.getElementById('name').value = '';
          document.getElementById('insights').value = '';
        }

        static showCommentCounter = (commentList) => {
          if (commentList.length === 0) {
            return 0;
          }
          return commentList.length;
        }
}

/***/ }),

/***/ "./src/bg.avif":
/*!*********************!*\
  !*** ./src/bg.avif ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ce261f14ee3ea16bfe92.avif";

/***/ }),

/***/ "./src/images.jpeg":
/*!*************************!*\
  !*** ./src/images.jpeg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c764aa37bac9584e19c3.jpeg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWdCO0FBQ25ELElBQUk7QUFDSixXQUFXLGdEQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELGdEQUFTLHlCQUF5QjtBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixzQkFBc0IsRUFBRSxpQkFBaUIsRUFBRSxlQUFlO0FBQ25GLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFTRTs7Ozs7Ozs7Ozs7Ozs7O0FDNUthO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxHQUFHO0FBQzVDLDBDQUEwQyxTQUFTO0FBQ25ELHlDQUF5QyxRQUFRO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlZWs1X2FwaV9jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VlazVfYXBpX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWVrNV9hcGlfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlZWs1X2FwaV9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlZWs1X2FwaV9jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWVrNV9hcGlfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VlazVfYXBpX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWVrNV9hcGlfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VlazVfYXBpX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlZWs1X2FwaV9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlZWs1X2FwaV9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlZWs1X2FwaV9jYXBzdG9uZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWVrNV9hcGlfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9hcGlPYmouanMiLCJ3ZWJwYWNrOi8vd2VlazVfYXBpX2NhcHN0b25lLy4vc3JjL21vZHVsZXMvY291bnQuanMiLCJ3ZWJwYWNrOi8vd2VlazVfYXBpX2NhcHN0b25lLy4vc3JjL21vZHVsZXMvc2hvdy5qcyIsIndlYnBhY2s6Ly93ZWVrNV9hcGlfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy91dGlsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2JnLmF2aWZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJpbWFnZXMuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmgzIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMnB4IDAgIDJweDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNlcmlmO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBwYWRkaW5nOiAxOXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDE5OCwgMTkyLCAxODUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIHRvcDogMDtcclxuICBwYWRkaW5nOiA3MHB4IDAgMTAwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5uYXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5uYXYgdWwge1xyXG4gIHBhZGRpbmctdG9wOiAxOXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGhlaWdodDogaW5oZXJpdDtcclxufVxyXG5cclxudWwgbGkuYWN0aXZlIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JleTtcclxufVxyXG5cclxudWwgbGkge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogIzJmNDg1ODtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmZvb3Rlci10ZXh0IHtcclxuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogcm9ib3RvLCBzZXJpZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBmb250LXdlaWdodDogMjAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc2hvd0l0ZW0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjQ4NTg7XHJcbn1cclxuXHJcbi5uYW1lLFxyXG4uY29tbWVudCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGlubGluZS1zaXplOiAxMTBweDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4uY29tbWVudCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubGlrZXMge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLyogbW9kYWwgKi9cclxuLm1vZGFsIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1hcmdpbjogYXV0bztcclxuXHJcbiAgLyogcGFkZGluZzogMTZweDsgKi9cclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGFpbmVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gIGNvbG9yOiAjYWFhO1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgLyogbWFyZ2luLXRvcDogMTJweDsgKi9cclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jbG9zZTpob3ZlcixcclxuLmNsb3NlOmZvY3VzIHtcclxuICBjb2xvcjogIzAwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRvcDogMDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBhZGRpbmc6IDNweDtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IGltZyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgaGVpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbnVsLmNvbW1lbnQtbGlzdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnVsLmNvbW1lbnQtbGlzdCBsaSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI0OSwgMjQ2LCAyNDYpO1xyXG4gIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgcGFkZGluZzogMTJweDtcclxufVxyXG5cclxudWwubWVudSBsaTpob3ZlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XHJcbn1cclxuXHJcbnVsLmNvbW1lbnQtbGlzdCBsaTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5mb3JtIGJ1dHRvbixcclxudGV4dGFyZWEsXHJcbmlucHV0W3R5cGU9dGV4dF0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmdlbnJlcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHlEQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZix5REFBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxNQUFNO0VBQ04scUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUEsVUFBVTtBQUNWO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0NBQW9DO0VBQ3BDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsYUFBYTtFQUNiLFlBQVk7O0VBRVosbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjs7RUFFakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsTUFBTTtFQUNOLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7OztFQUdFLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDJweCAwICAycHg7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9iZy5hdmlmKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgcGFkZGluZzogMTlweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTk4LCAxOTIsIDE4NSk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDcwcHg7XFxyXFxuICB3aWR0aDogNzBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChpbWFnZXMuanBlZyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHBhZGRpbmc6IDcwcHggMCAxMDBweDtcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCB7XFxyXFxuICBwYWRkaW5nLXRvcDogMTlweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgaGVpZ2h0OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG51bCBsaS5hY3RpdmUge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XFxyXFxufVxcclxcblxcclxcbnVsIGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQ6ICMyZjQ4NTg7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xcclxcbiAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItdGV4dCB7XFxyXFxuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcXHJcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG8sIHNlcmlmO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAyMDAgIWltcG9ydGFudDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gIHdpZHRoOiAxODBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvd0l0ZW0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmNDg1ODtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUsXFxyXFxuLmNvbW1lbnQge1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGlubGluZS1zaXplOiAxMTBweDtcXHJcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMge1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBtb2RhbCAqL1xcclxcbi5tb2RhbCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuXFxyXFxuICAvKiBwYWRkaW5nOiAxNnB4OyAqL1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZSB7XFxyXFxuICBjb2xvcjogI2FhYTtcXHJcXG4gIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcclxcbiAgLyogbWFyZ2luLXRvcDogMTJweDsgKi9cXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlOmhvdmVyLFxcclxcbi5jbG9zZTpmb2N1cyB7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgdG9wOiAwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxuICBwYWRkaW5nOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1ib2R5IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWJvZHkgaW1nIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBoZWlnaHQ6IDEwJTtcXHJcXG59XFxyXFxuXFxyXFxudWwuY29tbWVudC1saXN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG51bC5jb21tZW50LWxpc3QgbGkge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI0OSwgMjQ2LCAyNDYpO1xcclxcbiAgbWFyZ2luLXRvcDogMTJweDtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxufVxcclxcblxcclxcbnVsLm1lbnUgbGk6aG92ZXIge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XFxyXFxufVxcclxcblxcclxcbnVsLmNvbW1lbnQtbGlzdCBsaTpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbmZvcm0gYnV0dG9uLFxcclxcbnRleHRhcmVhLFxcclxcbmlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5nZW5yZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQge1xyXG4gIGRpc3BsYXlTaG93cyxcclxuICB1cGRhdGVMaWtlcyxcclxuICBwb3N0TGlrZXMsXHJcbiAgc2hvd0RldGFpbHMsXHJcbiAgY3JlYXRlU2hvd0NvbW1lbnQsXHJcbiAgZGlzcGxheVNob3dDb21tZW50LFxyXG59IGZyb20gJy4vbW9kdWxlcy9zaG93LmpzJztcclxuaW1wb3J0IFV0aWxpdGllcyBmcm9tICcuL21vZHVsZXMvdXRpbC5qcyc7XHJcblxyXG5jb25zdCByZW5kZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgZGlzcGxheVNob3dzKCk7XHJcbiAgdXBkYXRlTGlrZXMoKTtcclxuICBwb3N0TGlrZXMoKTtcclxufTtcclxuXHJcbnJlbmRlcigpO1xyXG5cclxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbS1tb2RhbCcpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNvbnN0IGJ0bnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnQnKV07XHJcbiAgYnRucy5mb3JFYWNoKChtb2RhbEJ0bikgPT4ge1xyXG4gICAgbW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5pZCAhPT0gbnVsbCkge1xyXG4gICAgICAgIC8vIHNob3cgbW9kYWxcclxuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgLy89ID09PSBzaG93IHR2IHNob3cgZGV0YWlscz09PT1cclxuICAgICAgICBjb25zdCB0dnNob3dEZXRhaWxzID0gYXdhaXQgc2hvd0RldGFpbHMoZXZlbnQudGFyZ2V0LmlkKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHYtc2hvdy10aXRsZScpLnRleHRDb250ZW50ID0gdHZzaG93RGV0YWlscy5uYW1lO1xyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoJ3R2LXNob3ctaW1nJylcclxuICAgICAgICAgIC5zZXRBdHRyaWJ1dGUoJ3NyYycsIHR2c2hvd0RldGFpbHMuaW1hZ2UubWVkaXVtKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvdy1pZCcpLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGV2ZW50LnRhcmdldC5pZCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgICAnc3VtbWFyeScsXHJcbiAgICAgICAgKS5pbm5lckhUTUwgPSBgJHt0dnNob3dEZXRhaWxzLnN1bW1hcnl9YDtcclxuXHJcbiAgICAgICAgLy8gc2hvdyBnZW5yZVxyXG4gICAgICAgIGNvbnN0IGdlbnJlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5yZXMnKTtcclxuICAgICAgICBnZW5yZXMuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgbGV0IHBFbGVtZW50ID0gJyc7XHJcbiAgICAgICAgdHZzaG93RGV0YWlscy5nZW5yZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgcEVsZW1lbnQgKz0gYDxwPiR7aXRlbX08L3A+YDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBnZW5yZXMuaW5uZXJIVE1MID0gcEVsZW1lbnQ7XHJcbiAgICAgICAgYXdhaXQgZGlzcGxheVNob3dDb21tZW50KGV2ZW50LnRhcmdldC5pZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbndpbmRvdy5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWwpIHtcclxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG59O1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2xvc2UnKVswXS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn07XHJcblxyXG4vLyBhZGQgY29tbWVudFxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWNvbW1lbnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICBjb25zdCBpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93LWlkJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgY29uc3QgdXNlcm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xyXG4gIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5zaWdodHMnKS52YWx1ZTtcclxuICBjb25zdCBzbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZScpO1xyXG5cclxuICBpZiAodXNlcm5hbWUgIT09ICcnICYmIGlkICE9PSAnJyAmJiBjb21tZW50ICE9PSAnJykge1xyXG4gICAgc21zLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgY3JlYXRlU2hvd0NvbW1lbnQoaWQsIHVzZXJuYW1lLCBjb21tZW50KTtcclxuICAgIFV0aWxpdGllcy5jbGVhbkZvcm1JbnB1dCgpO1xyXG4gICAgc21zLnN0eWxlLmNvbG9yID0gJ2dyZWVuJztcclxuICAgIHNtcy50ZXh0Q29udGVudCA9ICctRG9uZSc7XHJcbiAgICBhd2FpdCBkaXNwbGF5U2hvd0NvbW1lbnQoaWQpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzbXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBzbXMuc3R5bGUuY29sb3IgPSAncmVkJztcclxuICAgIHNtcy50ZXh0Q29udGVudCA9ICctRmllbGRzIHJlcXVpcmVkJztcclxuICB9XHJcbn0pOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExpa2VPYmoge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5pdGVtX2lkID0gbnVsbDtcclxuICAgIHRoaXMubGlrZXMgPSAwO1xyXG4gIH1cclxuXHJcbiAgICBzdGF0aWMgbGlrZXMgPSBbXTtcclxufSIsImNvbnN0IGRpc3BsYXlJdGVtQ291bnRlZCA9IChzaG93cykgPT4ge1xyXG4gICAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWNvdW50ZXInKTtcclxuICAgIGNvdW50ZXIuaW5uZXJUZXh0ID0gYFRWIFNob3dzKCR7c2hvd3MubGVuZ3RofSlgO1xyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgZGlzcGxheUl0ZW1Db3VudGVkOyAgICAiLCJpbXBvcnQgVXRpbGl0aWVzIGZyb20gJy4vdXRpbC5qcyc7XHJcbmltcG9ydCBMaWtlT2JqIGZyb20gJy4vYXBpT2JqLmpzJztcclxuaW1wb3J0IGRpc3BsYXlJdGVtQ291bnRlZCBmcm9tICcuL2NvdW50LmpzJztcclxuXHJcbmNvbnN0IHVybCA9ICdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzJztcclxuY29uc3QgYXBwSURMaWtlcyA9IGAke1V0aWxpdGllcy5iYXNlVXJsfWFwcHMveE95OEhsR1JPZkFvclI3MnlYUUwvbGlrZXNgO1xyXG5cclxuY29uc3QgZmV0Y2hTaG93cyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UuanNvbigpO1xyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5jb25zdCBmZXRjaExpa2VzID0gYXN5bmMgKGFwcElETGlrZXMpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwcElETGlrZXMpO1xyXG4gIGNvbnN0IHJlc3VsdCA9IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuY29uc3QgZGlzcGxheVNob3dzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHNob3dMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR2c2hvdy1saXN0Jyk7XHJcbiAgY29uc3Qgc2hvd3MgPSBhd2FpdCBmZXRjaFNob3dzKHVybCkudGhlbigocmVzdWx0KSA9PiByZXN1bHQpO1xyXG5cclxuICBpZiAoc2hvd3MubGVuZ3RoICE9PSAwKSB7XHJcbiAgICBzaG93TGlzdC5pbm5lckhUTUwgPSAnJztcclxuICAgIHNob3dzLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IHNob3dJdGVtID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvd0l0ZW0gbXgtNSBteS0yIGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2VsZW1lbnQuaW1hZ2UubWVkaXVtfVwiIGFsdD1cInNob3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzPVwibS0wIHB4LTEgcHktMiBuYW1lXCI+JHtlbGVtZW50Lm5hbWV9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBkYXRhLWlkPSR7aW5kZXh9IGNsYXNzPVwiaGVhcnQgZmEtc29saWQgZmEtaGVhcnQgaWNvbiBweC0xXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm0tMCBweC0xIHB0LTAgcGItMSBsaWtlcyB3LTEwMFwiPkxpa2VzPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCIke2VsZW1lbnQuaWR9XCIgIGNsYXNzPVwibXgtMCBtdC0wIG1iLTEgcHgtMiBweS0xIGJvcmRlciB0ZXh0LWNlbnRlciBjb21tZW50XCI+Q29tbWVudHM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICBzaG93TGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHNob3dJdGVtKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBkaXNwbGF5SXRlbUNvdW50ZWQoc2hvd3MpO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlTGlrZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgZmV0Y2hMaWtlcyhhcHBJRExpa2VzKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocmVzcG9uc2UpO1xyXG4gICAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpa2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2VzJyk7XHJcbiAgICAgICAgWy4uLmxpa2VzXS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBzaG93SUQgPSBwYXJzZUludChcclxuICAgICAgICAgICAgaXRlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmxhc3RFbGVtZW50Q2hpbGQuZ2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICdkYXRhLWlkJyxcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgMTAsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlW2tleV0uaXRlbV9pZCA9PT0gc2hvd0lEKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uaW5uZXJUZXh0ID0gYCR7cmVzcG9uc2Vba2V5XS5saWtlc30gTGlrZXNgO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Vba2V5XS5saWtlcyA+IDApIHtcclxuICAgICAgICAgICAgICBpdGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmcubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKCdyZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgcG9zdExpa2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHNob3dzID0gYXdhaXQgZmV0Y2hTaG93cyh1cmwpLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0KTtcclxuICBjb25zdCBjbGlja0xpa2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYXJ0Jyk7XHJcbiAgY29uc3QgbGlrZU9iaiA9IG5ldyBMaWtlT2JqKCk7XHJcblxyXG4gIGlmIChzaG93cy5sZW5ndGggIT09IDApIHtcclxuICAgIFsuLi5jbGlja0xpa2VzXS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGxpa2VPYmouaXRlbV9pZCA9IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpLCAxMCk7XHJcbiAgICAgICAgZmV0Y2goYXBwSURMaWtlcywge1xyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShsaWtlT2JqKSxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvdGFsTGlrZXMgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICBmZXRjaExpa2VzKGFwcElETGlrZXMpXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlW2tleV0uaXRlbV9pZCA9PT0gbGlrZU9iai5pdGVtX2lkKSB7XHJcbiAgICAgICAgICAgICAgICB0b3RhbExpa2VzLmlubmVyVGV4dCA9IGAke3Jlc3BvbnNlW2tleV0ubGlrZXN9IExpa2VzYDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgc2hvd0RldGFpbHMgPSBhc3luYyAoaWQpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcgfTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGAke1V0aWxpdGllcy5zaG93QmFzZVVybH0ke2lkfWAsXHJcbiAgICAgIHJlcXVlc3RPcHRpb25zLFxyXG4gICAgKTtcclxuICAgIGlmIChyZXNwb25zZS5vaykgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvcjogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIFV0aWxpdGllcy5leGNlcHRpb24oZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgc2hvd0NvbW1lbnRzID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVybCA9IGAke1V0aWxpdGllcy5iYXNlVXJsfWFwcHMveE95OEhsR1JPZkFvclI3MnlYUUwvY29tbWVudHM/aXRlbV9pZD0ke2lkfWA7XHJcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJyB9O1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHJlcXVlc3RPcHRpb25zKTtcclxuICAgIGlmIChyZXNwb25zZS5vayAmJiByZXNwb25zZS5zdGF0dXMgIT09IDQwMCkge1xyXG4gICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbXTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gVXRpbGl0aWVzLmV4Y2VwdGlvbihlKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVTaG93Q29tbWVudCA9IGFzeW5jIChpZCwgdXNlcm5hbWUsIGNvbW1lbnQpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiBVdGlsaXRpZXMuZ2V0SGVhZGVyKCksXHJcbiAgICAgIGJvZHk6IFV0aWxpdGllcy5nZXRQYXJhbXMoaWQsIHVzZXJuYW1lLCBjb21tZW50KSxcclxuICAgIH07XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke1V0aWxpdGllcy5iYXNlVXJsfWFwcHMveE95OEhsR1JPZkFvclI3MnlYUUwvY29tbWVudHNgLCByZXF1ZXN0T3B0aW9ucyk7XHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH1cclxuICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvcjogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIFV0aWxpdGllcy5leGNlcHRpb24oZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZGlzcGxheVNob3dDb21tZW50ID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgLy89ID09PSBzaG93IGNvbW1lbnQ9PT09PVxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IHNob3dDb21tZW50cyhpZCk7XHJcbiAgLy8gY29uc29sZS5sb2cocmVzKVxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduby1vZi1jb21tZW50cycpLnRleHRDb250ZW50ID0gYCgke1V0aWxpdGllcy5zaG93Q29tbWVudENvdW50ZXIocmVzKX0pYDtcclxuICBjb25zdCBjb21tZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWxpc3QnKTtcclxuICBjb21tZW50TGlzdC5pbm5lckhUTUwgPSAnJztcclxuICBsZXQgbGlFbGVtZW50ID0gJyc7XHJcbiAgcmVzLmZvckVhY2goKHJlc3VsdCkgPT4ge1xyXG4gICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xyXG4gICAgICBsaUVsZW1lbnQgKz0gJyA8bGk+Tm8gY29tbWVudHMgZm9yIG5vdzwvbGk+JztcclxuICAgIH1cclxuICAgIGxpRWxlbWVudCArPSBgIDxsaT4ke3Jlc3VsdC5jcmVhdGlvbl9kYXRlfSAke3Jlc3VsdC51c2VybmFtZX0gJHtyZXN1bHQuY29tbWVudH08L2xpPmA7XHJcbiAgfSk7XHJcbiAgY29tbWVudExpc3QuaW5uZXJIVE1MID0gbGlFbGVtZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBmZXRjaFNob3dzLFxyXG4gIGRpc3BsYXlTaG93cyxcclxuICB1cGRhdGVMaWtlcyxcclxuICBwb3N0TGlrZXMsXHJcbiAgc2hvd0RldGFpbHMsXHJcbiAgY3JlYXRlU2hvd0NvbW1lbnQsXHJcbiAgZGlzcGxheVNob3dDb21tZW50LFxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlsaXRpZXMge1xyXG4gICAgc3RhdGljIGJhc2VVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpLyc7XHJcblxyXG4gICAgc3RhdGljIHNob3dCYXNlVXJsID0naHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cy8nXHJcblxyXG4gICAgc3RhdGljIGV4Y2VwdGlvbiA9IChtZXNzYWdlKSA9PiBtZXNzYWdlXHJcblxyXG4gICAgc3RhdGljIGdldEhlYWRlcigpIHtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICBzdGF0aWMgZ2V0UGFyYW1zID0gKGlkLCB1c2VybmFtZSwgY29tbWVudCkgPT4ge1xyXG4gICAgICAgICBjb25zdCB1cmxlbmNvZGVkID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gICAgICAgICB1cmxlbmNvZGVkLmFwcGVuZCgnaXRlbV9pZCcsIGAke2lkfWApO1xyXG4gICAgICAgICB1cmxlbmNvZGVkLmFwcGVuZCgndXNlcm5hbWUnLCBgJHt1c2VybmFtZX1gKTtcclxuICAgICAgICAgdXJsZW5jb2RlZC5hcHBlbmQoJ2NvbW1lbnQnLCBgJHtjb21tZW50fWApO1xyXG4gICAgICAgICByZXR1cm4gdXJsZW5jb2RlZDtcclxuICAgICAgIH1cclxuICBcclxuICAgICAgICBzdGF0aWMgY2xlYW5Gb3JtSW5wdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5zaWdodHMnKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIHNob3dDb21tZW50Q291bnRlciA9IChjb21tZW50TGlzdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGNvbW1lbnRMaXN0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBjb21tZW50TGlzdC5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9