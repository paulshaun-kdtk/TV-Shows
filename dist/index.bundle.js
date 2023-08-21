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
/* harmony export */   displayItemCounted: () => (/* binding */ displayItemCounted),
/* harmony export */   itemCounter: () => (/* binding */ itemCounter)
/* harmony export */ });
const itemCounter = (item) => item.length;

const displayItemCounted = (shows) => {
  const counter = document.querySelector('.item-counter');
  counter.innerText = `TV Shows(${itemCounter(shows)})`;
};




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
const appIDLikes = `${_util_js__WEBPACK_IMPORTED_MODULE_0__["default"].baseUrl}apps/SGCdurOHua92K8iHUcg6/likes`;

const fetchShows = async () => {
  try {
    const response = await fetch(url);
    if (response.ok) return await response.json();
    throw new Error(`HTTP error: ${response.status}`);
  } catch (e) {
    return _util_js__WEBPACK_IMPORTED_MODULE_0__["default"].exception(e);
  }
};

const fetchLikes = async (appIDLikes) => {
  try {
    const response = await fetch(appIDLikes);
    if (response.ok) return await response.json();
    throw new Error(`HTTP error: ${response.status}`);
  } catch (e) {
    return _util_js__WEBPACK_IMPORTED_MODULE_0__["default"].exception(e);
  }
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
  (0,_count_js__WEBPACK_IMPORTED_MODULE_2__.displayItemCounted)(shows);
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
    const url = `${_util_js__WEBPACK_IMPORTED_MODULE_0__["default"].baseUrl}apps/SGCdurOHua92K8iHUcg6/comments?item_id=${id}`;
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
    const response = await fetch(
      `${_util_js__WEBPACK_IMPORTED_MODULE_0__["default"].baseUrl}apps/SGCdurOHua92K8iHUcg6/comments`,
      requestOptions,
    );
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
  document.getElementById(
    'no-of-comments',
  ).textContent = `(${_util_js__WEBPACK_IMPORTED_MODULE_0__["default"].showCommentCounter(res)})`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywrRkFBNEI7QUFDeEUsNENBQTRDLHFHQUE4QjtBQUMxRSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxPQUFPLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsNEJBQTRCLGdCQUFnQixpQkFBaUIsNkJBQTZCLEtBQUssWUFBWSxzQkFBc0IseUJBQXlCLHlCQUF5QixLQUFLLGNBQWMscUNBQXFDLEtBQUssY0FBYyxzQkFBc0IsMEJBQTBCLHdCQUF3Qix1Q0FBdUMsS0FBSyxlQUFlLG9CQUFvQiwwQkFBMEIsMkNBQTJDLHlCQUF5QixtQkFBbUIsa0JBQWtCLHNCQUFzQix5Q0FBeUMsNkJBQTZCLG1DQUFtQyxrQ0FBa0MsS0FBSyxnQkFBZ0IsYUFBYSw0QkFBNEIsbUJBQW1CLGtCQUFrQixvQkFBb0IsMEJBQTBCLDBCQUEwQixLQUFLLGFBQWEsa0JBQWtCLEtBQUssZ0JBQWdCLHdCQUF3QixvQkFBb0IsMEJBQTBCLDBCQUEwQixvQ0FBb0Msc0JBQXNCLEtBQUssc0JBQXNCLG9DQUFvQyxLQUFLLGVBQWUsdUJBQXVCLHlCQUF5QixzQkFBc0IsS0FBSyxnQkFBZ0IsaUNBQWlDLG1CQUFtQiwwQkFBMEIsc0JBQXNCLHVCQUF1Qix5QkFBeUIsMkJBQTJCLGtCQUFrQix1QkFBdUIsS0FBSyxzQkFBc0IsaUNBQWlDLGlDQUFpQyxtQkFBbUIsMEJBQTBCLGtDQUFrQyxnQkFBZ0IsS0FBSyxhQUFhLG1CQUFtQixtQkFBbUIsS0FBSyxlQUFlLHNCQUFzQixtQkFBbUIsS0FBSyxtQkFBbUIsZ0NBQWdDLEtBQUssNEJBQTRCLHNCQUFzQiwwQkFBMEIsbUJBQW1CLHlCQUF5QixnQ0FBZ0MsS0FBSyxrQkFBa0Isc0JBQXNCLG9DQUFvQyxLQUFLLGdCQUFnQixzQkFBc0IsMEJBQTBCLG1CQUFtQix3QkFBd0IsS0FBSywrQkFBK0Isb0JBQW9CLHNCQUFzQixpQkFBaUIsd0JBQXdCLGNBQWMsYUFBYSxrQkFBa0IsbUJBQW1CLHFCQUFxQiwyQ0FBMkMsNEJBQTRCLEtBQUsseUJBQXlCLDZCQUE2QixpQkFBaUIsb0JBQW9CLG1CQUFtQiw0QkFBNEIscUJBQXFCLEtBQUssMkJBQTJCLG1CQUFtQixtQkFBbUIsS0FBSyxnQkFBZ0Isa0JBQWtCLHNCQUFzQix3QkFBd0IsK0JBQStCLDJCQUEyQixLQUFLLHVDQUF1QyxrQkFBa0IsNEJBQTRCLHNCQUFzQixLQUFLLHVCQUF1QixvQkFBb0IsYUFBYSxnQ0FBZ0MseUJBQXlCLG9CQUFvQixtQkFBbUIsS0FBSyxxQkFBcUIsa0JBQWtCLDZCQUE2QixtQkFBbUIsS0FBSywwQkFBMEIsbUJBQW1CLGlCQUFpQixrQkFBa0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsS0FBSyxrQkFBa0Isb0JBQW9CLDZCQUE2QixLQUFLLHlCQUF5Qix5QkFBeUIsaUJBQWlCLGtCQUFrQixLQUFLLHlCQUF5QixrQkFBa0IsS0FBSyw0QkFBNEIsMkNBQTJDLHVCQUF1QixvQkFBb0IsS0FBSywwQkFBMEIsb0NBQW9DLEtBQUssa0NBQWtDLDRCQUE0QixLQUFLLHlCQUF5QixpQkFBaUIsb0JBQW9CLDZCQUE2QixxQ0FBcUMsS0FBSyxjQUFjLG9CQUFvQiw2QkFBNkIsS0FBSyx1REFBdUQsMEJBQTBCLG9CQUFvQixLQUFLLGlCQUFpQixvQkFBb0Isb0NBQW9DLG1CQUFtQixLQUFLLHVCQUF1QjtBQUNocE07QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNyUTFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYnFCO0FBUU07QUFDZTtBQUMxQztBQUNBO0FBQ0EsRUFBRSw4REFBWTtBQUNkLEVBQUUsNkRBQVc7QUFDYixFQUFFLDJEQUFTO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLDZEQUFXO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHNCQUFzQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsS0FBSztBQUNqQyxTQUFTO0FBQ1Q7QUFDQSxjQUFjLG9FQUFrQjtBQUNoQztBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1FQUFpQjtBQUNyQixJQUFJLHdEQUFTO0FBQ2I7QUFDQTtBQUNBLFVBQVUsb0VBQWtCO0FBQzVCLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDbkZjO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG1CQUFtQjtBQUNyRDtBQUNBO0FBQzJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQVDtBQUNBO0FBQ2M7QUFDaEQ7QUFDQTtBQUNBLHNCQUFzQixnREFBUyxTQUFTO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0JBQWdCO0FBQ25ELElBQUk7QUFDSixXQUFXLGdEQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdCQUFnQjtBQUNuRCxJQUFJO0FBQ0osV0FBVyxnREFBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pEO0FBQ0EscURBQXFELGFBQWE7QUFDbEUsaUNBQWlDLE9BQU87QUFDeEM7QUFDQTtBQUNBLDRDQUE0QyxXQUFXO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEVBQUUsNkRBQWtCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MscUJBQXFCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixrREFBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0MsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHFCQUFxQjtBQUMvRDtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1gsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EsU0FBUyxnREFBUyxhQUFhLEVBQUUsR0FBRztBQUNwQztBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0JBQWdCO0FBQ25ELElBQUk7QUFDSixXQUFXLGdEQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0RBQVMsU0FBUyw2Q0FBNkMsR0FBRztBQUNyRiw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLFdBQVcsZ0RBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdEQUFTO0FBQ3hCLFlBQVksZ0RBQVM7QUFDckI7QUFDQTtBQUNBLFNBQVMsZ0RBQVMsU0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdCQUFnQjtBQUNuRCxJQUFJO0FBQ0osV0FBVyxnREFBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0RBQVMseUJBQXlCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHNCQUFzQixFQUFFLGlCQUFpQixFQUFFLGVBQWU7QUFDbkYsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQVNFOzs7Ozs7Ozs7Ozs7Ozs7QUN6TGE7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLEdBQUc7QUFDNUMsMENBQTBDLFNBQVM7QUFDbkQseUNBQXlDLFFBQVE7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VlazVfYXBpX2NhcHN0b25lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWVrNV9hcGlfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlZWs1X2FwaV9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VlazVfYXBpX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VlazVfYXBpX2NhcHN0b25lLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlZWs1X2FwaV9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWVrNV9hcGlfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlZWs1X2FwaV9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWVrNV9hcGlfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VlazVfYXBpX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VlazVfYXBpX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VlazVfYXBpX2NhcHN0b25lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlZWs1X2FwaV9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2FwaU9iai5qcyIsIndlYnBhY2s6Ly93ZWVrNV9hcGlfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb3VudC5qcyIsIndlYnBhY2s6Ly93ZWVrNV9hcGlfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9zaG93LmpzIiwid2VicGFjazovL3dlZWs1X2FwaV9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL3V0aWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYmcuYXZpZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImltYWdlcy5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaDMge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAycHggMCAgMnB4O1xyXG59XHJcblxyXG5odG1sIHtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2VyaWY7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIHBhZGRpbmc6IDE5cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTk4LCAxOTIsIDE4NSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogNzBweDtcclxuICB3aWR0aDogNzBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgdG9wOiAwO1xyXG4gIHBhZGRpbmc6IDcwcHggMCAxMDBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm5hdiB1bCB7XHJcbiAgcGFkZGluZy10b3A6IDE5cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcblxyXG51bCBsaS5hY3RpdmUge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmV5O1xyXG59XHJcblxyXG51bCBsaSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiAjMmY0ODU4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICBib3R0b206IDAgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uZm9vdGVyLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiByb2JvdG8sIHNlcmlmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDAgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmljb24ge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zaG93SXRlbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmNDg1ODtcclxufVxyXG5cclxuLm5hbWUsXHJcbi5jb21tZW50IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgaW5saW5lLXNpemU6IDExMHB4O1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi5jb21tZW50IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5saWtlcyB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4vKiBtb2RhbCAqL1xyXG4ubW9kYWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB3aWR0aDogNDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAvKiBwYWRkaW5nOiAxNnB4OyAqL1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmhlYWRlci1jb250YWluZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcbiAgY29sb3I6ICNhYWE7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAvKiBtYXJnaW4tdG9wOiAxMnB4OyAqL1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmNsb3NlOmhvdmVyLFxyXG4uY2xvc2U6Zm9jdXMge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdG9wOiAwO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZzogM3B4O1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5pbWFnZS1jb250YWluZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkgaW1nIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBoZWlnaHQ6IDEwJTtcclxufVxyXG5cclxudWwuY29tbWVudC1saXN0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudWwuY29tbWVudC1saXN0IGxpIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjQ5LCAyNDYsIDI0Nik7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG59XHJcblxyXG51bC5tZW51IGxpOmhvdmVyIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JleTtcclxufVxyXG5cclxudWwuY29tbWVudC1saXN0IGxpOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmZvcm0gYnV0dG9uLFxyXG50ZXh0YXJlYSxcclxuaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uZ2VucmVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGhlaWdodDogMjBweDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIseURBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLHlEQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLE1BQU07RUFDTixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxvQ0FBb0M7RUFDcEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixhQUFhO0VBQ2IsWUFBWTs7RUFFWixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCOztFQUVqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixNQUFNO0VBQ04seUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTs7O0VBR0UsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMnB4IDAgIDJweDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBsaW5lLWhlaWdodDogMThweDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2JnLmF2aWYpO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBwYWRkaW5nOiAxOXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxOTgsIDE5MiwgMTg1KTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogNzBweDtcXHJcXG4gIHdpZHRoOiA3MHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGltYWdlcy5qcGVnKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcGFkZGluZzogNzBweCAwIDEwMHB4O1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxOXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbnVsIGxpLmFjdGl2ZSB7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxudWwgbGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTJweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZDogIzJmNDg1ODtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XFxyXFxuICBib3R0b206IDAgIWltcG9ydGFudDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci10ZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xcclxcbiAgZm9udC1mYW1pbHk6IHJvYm90bywgc2VyaWY7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDIwMCAhaW1wb3J0YW50O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgd2lkdGg6IDE4MHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbiB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5zaG93SXRlbSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmY0ODU4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZSxcXHJcXG4uY29tbWVudCB7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgaW5saW5lLXNpemU6IDExMHB4O1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5saWtlcyB7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi8qIG1vZGFsICovXFxyXFxuLm1vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG5cXHJcXG4gIC8qIHBhZGRpbmc6IDE2cHg7ICovXFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlIHtcXHJcXG4gIGNvbG9yOiAjYWFhO1xcclxcbiAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFxyXFxuICAvKiBtYXJnaW4tdG9wOiAxMnB4OyAqL1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2U6aG92ZXIsXFxyXFxuLmNsb3NlOmZvY3VzIHtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIHBhZGRpbmc6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWJvZHkge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtYm9keSBpbWcge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIGhlaWdodDogMTAlO1xcclxcbn1cXHJcXG5cXHJcXG51bC5jb21tZW50LWxpc3Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbnVsLmNvbW1lbnQtbGlzdCBsaSB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjQ5LCAyNDYsIDI0Nik7XFxyXFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxudWwubWVudSBsaTpob3ZlciB7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxudWwuY29tbWVudC1saXN0IGxpOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBidXR0b24sXFxyXFxudGV4dGFyZWEsXFxyXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdlbnJlcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7XHJcbiAgZGlzcGxheVNob3dzLFxyXG4gIHVwZGF0ZUxpa2VzLFxyXG4gIHBvc3RMaWtlcyxcclxuICBzaG93RGV0YWlscyxcclxuICBjcmVhdGVTaG93Q29tbWVudCxcclxuICBkaXNwbGF5U2hvd0NvbW1lbnQsXHJcbn0gZnJvbSAnLi9tb2R1bGVzL3Nob3cuanMnO1xyXG5pbXBvcnQgVXRpbGl0aWVzIGZyb20gJy4vbW9kdWxlcy91dGlsLmpzJztcclxuXHJcbmNvbnN0IHJlbmRlciA9IGFzeW5jICgpID0+IHtcclxuICBkaXNwbGF5U2hvd3MoKTtcclxuICB1cGRhdGVMaWtlcygpO1xyXG4gIHBvc3RMaWtlcygpO1xyXG59O1xyXG5cclxucmVuZGVyKCk7XHJcblxyXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtLW1vZGFsJyk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY29uc3QgYnRucyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudCcpXTtcclxuICBidG5zLmZvckVhY2goKG1vZGFsQnRuKSA9PiB7XHJcbiAgICBtb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmlkICE9PSBudWxsKSB7XHJcbiAgICAgICAgLy8gc2hvdyBtb2RhbFxyXG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgICAgICAvLz0gPT09IHNob3cgdHYgc2hvdyBkZXRhaWxzPT09PVxyXG4gICAgICAgIGNvbnN0IHR2c2hvd0RldGFpbHMgPSBhd2FpdCBzaG93RGV0YWlscyhldmVudC50YXJnZXQuaWQpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0di1zaG93LXRpdGxlJykudGV4dENvbnRlbnQgPSB0dnNob3dEZXRhaWxzLm5hbWU7XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgIC5nZXRFbGVtZW50QnlJZCgndHYtc2hvdy1pbWcnKVxyXG4gICAgICAgICAgLnNldEF0dHJpYnV0ZSgnc3JjJywgdHZzaG93RGV0YWlscy5pbWFnZS5tZWRpdW0pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93LWlkJykuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgZXZlbnQudGFyZ2V0LmlkKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgICdzdW1tYXJ5JyxcclxuICAgICAgICApLmlubmVySFRNTCA9IGAke3R2c2hvd0RldGFpbHMuc3VtbWFyeX1gO1xyXG5cclxuICAgICAgICAvLyBzaG93IGdlbnJlXHJcbiAgICAgICAgY29uc3QgZ2VucmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlbnJlcycpO1xyXG4gICAgICAgIGdlbnJlcy5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBsZXQgcEVsZW1lbnQgPSAnJztcclxuICAgICAgICB0dnNob3dEZXRhaWxzLmdlbnJlcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICBwRWxlbWVudCArPSBgPHA+JHtpdGVtfTwvcD5gO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdlbnJlcy5pbm5lckhUTUwgPSBwRWxlbWVudDtcclxuICAgICAgICBhd2FpdCBkaXNwbGF5U2hvd0NvbW1lbnQoZXZlbnQudGFyZ2V0LmlkKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxud2luZG93Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICBpZiAoZXZlbnQudGFyZ2V0ID09PSBtb2RhbCkge1xyXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9XHJcbn07XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjbG9zZScpWzBdLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufTtcclxuXHJcbi8vIGFkZCBjb21tZW50XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtY29tbWVudCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3ctaWQnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICBjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykudmFsdWU7XHJcbiAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnNpZ2h0cycpLnZhbHVlO1xyXG4gIGNvbnN0IHNtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlJyk7XHJcblxyXG4gIGlmICh1c2VybmFtZSAhPT0gJycgJiYgaWQgIT09ICcnICYmIGNvbW1lbnQgIT09ICcnKSB7XHJcbiAgICBzbXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBjcmVhdGVTaG93Q29tbWVudChpZCwgdXNlcm5hbWUsIGNvbW1lbnQpO1xyXG4gICAgVXRpbGl0aWVzLmNsZWFuRm9ybUlucHV0KCk7XHJcbiAgICBzbXMuc3R5bGUuY29sb3IgPSAnZ3JlZW4nO1xyXG4gICAgc21zLnRleHRDb250ZW50ID0gJy1Eb25lJztcclxuICAgIGF3YWl0IGRpc3BsYXlTaG93Q29tbWVudChpZCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNtcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIHNtcy5zdHlsZS5jb2xvciA9ICdyZWQnO1xyXG4gICAgc21zLnRleHRDb250ZW50ID0gJy1GaWVsZHMgcmVxdWlyZWQnO1xyXG4gIH1cclxufSk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlrZU9iaiB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLml0ZW1faWQgPSBudWxsO1xyXG4gICAgdGhpcy5saWtlcyA9IDA7XHJcbiAgfVxyXG5cclxuICAgIHN0YXRpYyBsaWtlcyA9IFtdO1xyXG59IiwiY29uc3QgaXRlbUNvdW50ZXIgPSAoaXRlbSkgPT4gaXRlbS5sZW5ndGg7XHJcblxyXG5jb25zdCBkaXNwbGF5SXRlbUNvdW50ZWQgPSAoc2hvd3MpID0+IHtcclxuICBjb25zdCBjb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tY291bnRlcicpO1xyXG4gIGNvdW50ZXIuaW5uZXJUZXh0ID0gYFRWIFNob3dzKCR7aXRlbUNvdW50ZXIoc2hvd3MpfSlgO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgaXRlbUNvdW50ZXIsIGRpc3BsYXlJdGVtQ291bnRlZCB9O1xyXG4iLCJpbXBvcnQgVXRpbGl0aWVzIGZyb20gJy4vdXRpbC5qcyc7XHJcbmltcG9ydCBMaWtlT2JqIGZyb20gJy4vYXBpT2JqLmpzJztcclxuaW1wb3J0IHsgZGlzcGxheUl0ZW1Db3VudGVkIH0gZnJvbSAnLi9jb3VudC5qcyc7XHJcblxyXG5jb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cyc7XHJcbmNvbnN0IGFwcElETGlrZXMgPSBgJHtVdGlsaXRpZXMuYmFzZVVybH1hcHBzL1NHQ2R1ck9IdWE5Mks4aUhVY2c2L2xpa2VzYDtcclxuXHJcbmNvbnN0IGZldGNoU2hvd3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGlmIChyZXNwb25zZS5vaykgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvcjogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIFV0aWxpdGllcy5leGNlcHRpb24oZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZmV0Y2hMaWtlcyA9IGFzeW5jIChhcHBJRExpa2VzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBwSURMaWtlcyk7XHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3I6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBVdGlsaXRpZXMuZXhjZXB0aW9uKGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGRpc3BsYXlTaG93cyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBzaG93TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50dnNob3ctbGlzdCcpO1xyXG4gIGNvbnN0IHNob3dzID0gYXdhaXQgZmV0Y2hTaG93cyh1cmwpLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0KTtcclxuXHJcbiAgaWYgKHNob3dzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgc2hvd0xpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBzaG93cy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBzaG93SXRlbSA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNob3dJdGVtIG14LTUgbXktMiBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtlbGVtZW50LmltYWdlLm1lZGl1bX1cIiBhbHQ9XCJzaG93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cIm0tMCBweC0xIHB5LTIgbmFtZVwiPiR7ZWxlbWVudC5uYW1lfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgZGF0YS1pZD0ke2luZGV4fSBjbGFzcz1cImhlYXJ0IGZhLXNvbGlkIGZhLWhlYXJ0IGljb24gcHgtMVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtLTAgcHgtMSBwdC0wIHBiLTEgbGlrZXMgdy0xMDBcIj5MaWtlczwvcD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiJHtlbGVtZW50LmlkfVwiICBjbGFzcz1cIm14LTAgbXQtMCBtYi0xIHB4LTIgcHktMSBib3JkZXIgdGV4dC1jZW50ZXIgY29tbWVudFwiPkNvbW1lbnRzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYDtcclxuICAgICAgc2hvd0xpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBzaG93SXRlbSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZGlzcGxheUl0ZW1Db3VudGVkKHNob3dzKTtcclxufTtcclxuXHJcbmNvbnN0IHVwZGF0ZUxpa2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGZldGNoTGlrZXMoYXBwSURMaWtlcylcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJlc3BvbnNlKTtcclxuICAgICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICBjb25zdCBsaWtlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlcycpO1xyXG4gICAgICAgIFsuLi5saWtlc10uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgc2hvd0lEID0gcGFyc2VJbnQoXHJcbiAgICAgICAgICAgIGl0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZy5sYXN0RWxlbWVudENoaWxkLmdldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAnZGF0YS1pZCcsXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIDEwLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlmIChyZXNwb25zZVtrZXldLml0ZW1faWQgPT09IHNob3dJRCkge1xyXG4gICAgICAgICAgICBpdGVtLmlubmVyVGV4dCA9IGAke3Jlc3BvbnNlW2tleV0ubGlrZXN9IExpa2VzYDtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlW2tleV0ubGlrZXMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgaXRlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZCgncmVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHBvc3RMaWtlcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBzaG93cyA9IGF3YWl0IGZldGNoU2hvd3ModXJsKS50aGVuKChyZXN1bHQpID0+IHJlc3VsdCk7XHJcbiAgY29uc3QgY2xpY2tMaWtlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFydCcpO1xyXG4gIGNvbnN0IGxpa2VPYmogPSBuZXcgTGlrZU9iaigpO1xyXG5cclxuICBpZiAoc2hvd3MubGVuZ3RoICE9PSAwKSB7XHJcbiAgICBbLi4uY2xpY2tMaWtlc10uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBsaWtlT2JqLml0ZW1faWQgPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSwgMTApO1xyXG4gICAgICAgIGZldGNoKGFwcElETGlrZXMsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobGlrZU9iaiksXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCB0b3RhbExpa2VzID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgZmV0Y2hMaWtlcyhhcHBJRExpa2VzKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZSlcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZVtrZXldLml0ZW1faWQgPT09IGxpa2VPYmouaXRlbV9pZCkge1xyXG4gICAgICAgICAgICAgICAgdG90YWxMaWtlcy5pbm5lclRleHQgPSBgJHtyZXNwb25zZVtrZXldLmxpa2VzfSBMaWtlc2A7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHNob3dEZXRhaWxzID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnIH07XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgJHtVdGlsaXRpZXMuc2hvd0Jhc2VVcmx9JHtpZH1gLFxyXG4gICAgICByZXF1ZXN0T3B0aW9ucyxcclxuICAgICk7XHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3I6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBVdGlsaXRpZXMuZXhjZXB0aW9uKGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHNob3dDb21tZW50cyA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHtVdGlsaXRpZXMuYmFzZVVybH1hcHBzL1NHQ2R1ck9IdWE5Mks4aUhVY2c2L2NvbW1lbnRzP2l0ZW1faWQ9JHtpZH1gO1xyXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcgfTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCByZXF1ZXN0T3B0aW9ucyk7XHJcbiAgICBpZiAocmVzcG9uc2Uub2sgJiYgcmVzcG9uc2Uuc3RhdHVzICE9PSA0MDApIHtcclxuICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gW107XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIFV0aWxpdGllcy5leGNlcHRpb24oZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlU2hvd0NvbW1lbnQgPSBhc3luYyAoaWQsIHVzZXJuYW1lLCBjb21tZW50KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczogVXRpbGl0aWVzLmdldEhlYWRlcigpLFxyXG4gICAgICBib2R5OiBVdGlsaXRpZXMuZ2V0UGFyYW1zKGlkLCB1c2VybmFtZSwgY29tbWVudCksXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYCR7VXRpbGl0aWVzLmJhc2VVcmx9YXBwcy9TR0NkdXJPSHVhOTJLOGlIVWNnNi9jb21tZW50c2AsXHJcbiAgICAgIHJlcXVlc3RPcHRpb25zLFxyXG4gICAgKTtcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gVXRpbGl0aWVzLmV4Y2VwdGlvbihlKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBkaXNwbGF5U2hvd0NvbW1lbnQgPSBhc3luYyAoaWQpID0+IHtcclxuICAvLz0gPT09IHNob3cgY29tbWVudD09PT09XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgc2hvd0NvbW1lbnRzKGlkKTtcclxuICAvLyBjb25zb2xlLmxvZyhyZXMpXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAnbm8tb2YtY29tbWVudHMnLFxyXG4gICkudGV4dENvbnRlbnQgPSBgKCR7VXRpbGl0aWVzLnNob3dDb21tZW50Q291bnRlcihyZXMpfSlgO1xyXG4gIGNvbnN0IGNvbW1lbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtbGlzdCcpO1xyXG4gIGNvbW1lbnRMaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gIGxldCBsaUVsZW1lbnQgPSAnJztcclxuICByZXMuZm9yRWFjaCgocmVzdWx0KSA9PiB7XHJcbiAgICBpZiAocmVzdWx0ID09PSBudWxsKSB7XHJcbiAgICAgIGxpRWxlbWVudCArPSAnIDxsaT5ObyBjb21tZW50cyBmb3Igbm93PC9saT4nO1xyXG4gICAgfVxyXG4gICAgbGlFbGVtZW50ICs9IGAgPGxpPiR7cmVzdWx0LmNyZWF0aW9uX2RhdGV9ICR7cmVzdWx0LnVzZXJuYW1lfSAke3Jlc3VsdC5jb21tZW50fTwvbGk+YDtcclxuICB9KTtcclxuICBjb21tZW50TGlzdC5pbm5lckhUTUwgPSBsaUVsZW1lbnQ7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGZldGNoU2hvd3MsXHJcbiAgZGlzcGxheVNob3dzLFxyXG4gIHVwZGF0ZUxpa2VzLFxyXG4gIHBvc3RMaWtlcyxcclxuICBzaG93RGV0YWlscyxcclxuICBjcmVhdGVTaG93Q29tbWVudCxcclxuICBkaXNwbGF5U2hvd0NvbW1lbnQsXHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxpdGllcyB7XHJcbiAgICBzdGF0aWMgYmFzZVVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvJztcclxuXHJcbiAgICBzdGF0aWMgc2hvd0Jhc2VVcmwgPSdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzLydcclxuXHJcbiAgICBzdGF0aWMgZXhjZXB0aW9uID0gKG1lc3NhZ2UpID0+IG1lc3NhZ2VcclxuXHJcbiAgICBzdGF0aWMgZ2V0SGVhZGVyKCkge1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuICAgICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgICAgc3RhdGljIGdldFBhcmFtcyA9IChpZCwgdXNlcm5hbWUsIGNvbW1lbnQpID0+IHtcclxuICAgICAgICAgY29uc3QgdXJsZW5jb2RlZCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuICAgICAgICAgdXJsZW5jb2RlZC5hcHBlbmQoJ2l0ZW1faWQnLCBgJHtpZH1gKTtcclxuICAgICAgICAgdXJsZW5jb2RlZC5hcHBlbmQoJ3VzZXJuYW1lJywgYCR7dXNlcm5hbWV9YCk7XHJcbiAgICAgICAgIHVybGVuY29kZWQuYXBwZW5kKCdjb21tZW50JywgYCR7Y29tbWVudH1gKTtcclxuICAgICAgICAgcmV0dXJuIHVybGVuY29kZWQ7XHJcbiAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyBjbGVhbkZvcm1JbnB1dCA9ICgpID0+IHtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykudmFsdWUgPSAnJztcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnNpZ2h0cycpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgc2hvd0NvbW1lbnRDb3VudGVyID0gKGNvbW1lbnRMaXN0KSA9PiB7XHJcbiAgICAgICAgICBpZiAoY29tbWVudExpc3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGNvbW1lbnRMaXN0Lmxlbmd0aDtcclxuICAgICAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=