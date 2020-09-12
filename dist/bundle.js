/******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = "dist"; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = "./src/index.ts")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/index.scss":
      /*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/index.scss ***!
  \**********************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
        );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__
        );
        // Imports

        var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(
          true
        );
        ___CSS_LOADER_EXPORT___.push([
          module.i,
          "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);",
        ]);
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.i,
          '* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: "Roboto", sans-serif;\n  color: #333;\n}\n\n.header-menu {\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n  border-bottom: 1px solid #ccc;\n  font-size: 12px;\n}\n.header-menu__left {\n  display: grid;\n  row-gap: 4px;\n  padding: 8px 10px;\n  grid-template-areas: "icon title document-pref ." "icon preferences preferences last-change";\n}\n.header-menu__right {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 0;\n  position: sticky;\n  z-index: 100;\n  padding: 8px 10px;\n  background-color: #fff;\n}\n.header-menu__right > * {\n  margin: 0 10px;\n}\n.header-menu__right .comment {\n  font-size: 20px;\n}\n.header-menu__wrap {\n  display: flex;\n}\n.header-menu__icon {\n  grid-area: icon;\n  display: flex;\n  align-items: center;\n}\n.header-menu__title {\n  grid-area: title;\n  margin-left: 10px;\n  font-size: 14px;\n  color: #777;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.header-menu__document-pref {\n  grid-area: document-pref;\n  margin-left: 14px;\n}\n.header-menu__preferences {\n  grid-area: preferences;\n  list-style: none;\n  display: flex;\n}\n.header-menu__preferences > * {\n  margin: 0 10px;\n}\n.header-menu__last-change {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  grid-area: last-change;\n  color: #777;\n  text-decoration: underline;\n}\n.header-menu__avatar {\n  border-radius: 50%;\n  border: 1px solid #ebebeb;\n}\n\n.material-icons {\n  color: #777;\n}\n.material-icons_size_s {\n  font-size: 16px;\n}\n\n.header-menu__btn {\n  white-space: nowrap;\n}\n.header-menu__btn .lock {\n  color: whitesmoke;\n  font-size: 12px;\n  margin-right: 7px;\n}\n\n@media only screen and (max-width: 850px) {\n  .header-menu__right {\n    box-shadow: -1px 0 2px 2px #e7e7e7;\n  }\n}\n.btn {\n  background-color: #267dff;\n  color: whitesmoke;\n  padding: 7px 12px;\n  border: none;\n  border-radius: 4px;\n  font-size: 12px;\n}',
          "",
          {
            version: 3,
            sources: [
              "webpack://src/scss/_header.scss",
              "webpack://src/scss/index.scss",
              "webpack://src/scss/_variables.scss",
              "webpack://src/scss/_resize.scss",
              "webpack://src/scss/_blocks.scss",
            ],
            names: [],
            mappings:
              "AAGA;EACE,SAAA;EACA,UAAA;ACDF;;ADIA;EACE,iCAAA;EACA,WAAA;ACDF;;ADIA;EACE,aAAA;EACA,8BAAA;EACA,oBAAA;EACA,6BAAA;EACA,eAAA;ACDF;ADGE;EACE,aAAA;EACA,YAAA;EACA,iBEvBW;EFyBX,4FACE;ACHN;ADOE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,QAAA;EACA,gBAAA;EACA,YAAA;EACA,iBErCW;EFsCX,sBAAA;ACLJ;ADOI;EACE,cAAA;ACLN;ADQI;EACE,eAAA;ACNN;ADUE;EACE,aAAA;ACRJ;ADWE;EACE,eAAA;EACA,aAAA;EACA,mBAAA;ACTJ;ADYE;EACE,gBAAA;EACA,iBAAA;EACA,eAAA;EACA,WAAA;EACA,gBAAA;EACA,uBAAA;ACVJ;ADaE;EACE,wBAAA;EACA,iBAAA;ACXJ;ADcE;EACE,sBAAA;EACA,gBAAA;EACA,aAAA;ACZJ;ADcI;EACE,cAAA;ACZN;ADgBE;EAEE,gBAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,WAAA;EACA,0BAAA;ACfJ;ADkBE;EACE,kBAAA;EAEA,yBAAA;ACjBJ;;ADqBA;EACE,WAAA;AClBF;ADoBE;EACE,eAAA;AClBJ;;ADsBA;EACE,mBAAA;ACnBF;ADqBE;EACE,iBAAA;EACA,eAAA;EACA,iBAAA;ACnBJ;;AE/FA;EACE;IACE,kCAAA;EFkGF;AACF;AGrGA;EACE,yBAAA;EACA,iBAAA;EACA,iBAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;AHuGF",
            sourcesContent: [
              '@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");\r\n@import "./variables";\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-family: "Roboto", sans-serif;\r\n  color: #333;\r\n}\r\n\r\n.header-menu {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: stretch;\r\n  border-bottom: 1px solid #ccc;\r\n  font-size: 12px;\r\n\r\n  &__left {\r\n    display: grid;\r\n    row-gap: 4px;\r\n    padding: $side-padding;\r\n\r\n    grid-template-areas:\r\n      "icon title document-pref ."\r\n      "icon preferences preferences last-change";\r\n  }\r\n\r\n  &__right {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    right: 0;\r\n    position: sticky;\r\n    z-index: 100;\r\n    padding: $side-padding;\r\n    background-color: #fff;\r\n\r\n    > * {\r\n      margin: 0 10px;\r\n    }\r\n\r\n    .comment {\r\n      font-size: 20px;\r\n    }\r\n  }\r\n\r\n  &__wrap {\r\n    display: flex;\r\n  }\r\n\r\n  &__icon {\r\n    grid-area: icon;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  &__title {\r\n    grid-area: title;\r\n    margin-left: 10px;\r\n    font-size: 14px;\r\n    color: #777;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n  }\r\n\r\n  &__document-pref {\r\n    grid-area: document-pref;\r\n    margin-left: 14px;\r\n  }\r\n\r\n  &__preferences {\r\n    grid-area: preferences;\r\n    list-style: none;\r\n    display: flex;\r\n\r\n    > * {\r\n      margin: 0 10px;\r\n    }\r\n  }\r\n\r\n  &__last-change {\r\n    // display: inline-block;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap; // не сжимает объект\r\n    grid-area: last-change;\r\n    color: #777;\r\n    text-decoration: underline;\r\n  }\r\n\r\n  &__avatar {\r\n    border-radius: 50%;\r\n\r\n    border: 1px solid rgb(235, 235, 235);\r\n  }\r\n}\r\n\r\n.material-icons {\r\n  color: #777;\r\n\r\n  &_size_s {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.header-menu__btn {\r\n  white-space: nowrap;\r\n\r\n  .lock {\r\n    color: whitesmoke;\r\n    font-size: 12px;\r\n    margin-right: 7px;\r\n  }\r\n}\r\n',
              '@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: "Roboto", sans-serif;\n  color: #333;\n}\n\n.header-menu {\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n  border-bottom: 1px solid #ccc;\n  font-size: 12px;\n}\n.header-menu__left {\n  display: grid;\n  row-gap: 4px;\n  padding: 8px 10px;\n  grid-template-areas: "icon title document-pref ." "icon preferences preferences last-change";\n}\n.header-menu__right {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 0;\n  position: sticky;\n  z-index: 100;\n  padding: 8px 10px;\n  background-color: #fff;\n}\n.header-menu__right > * {\n  margin: 0 10px;\n}\n.header-menu__right .comment {\n  font-size: 20px;\n}\n.header-menu__wrap {\n  display: flex;\n}\n.header-menu__icon {\n  grid-area: icon;\n  display: flex;\n  align-items: center;\n}\n.header-menu__title {\n  grid-area: title;\n  margin-left: 10px;\n  font-size: 14px;\n  color: #777;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.header-menu__document-pref {\n  grid-area: document-pref;\n  margin-left: 14px;\n}\n.header-menu__preferences {\n  grid-area: preferences;\n  list-style: none;\n  display: flex;\n}\n.header-menu__preferences > * {\n  margin: 0 10px;\n}\n.header-menu__last-change {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  grid-area: last-change;\n  color: #777;\n  text-decoration: underline;\n}\n.header-menu__avatar {\n  border-radius: 50%;\n  border: 1px solid #ebebeb;\n}\n\n.material-icons {\n  color: #777;\n}\n.material-icons_size_s {\n  font-size: 16px;\n}\n\n.header-menu__btn {\n  white-space: nowrap;\n}\n.header-menu__btn .lock {\n  color: whitesmoke;\n  font-size: 12px;\n  margin-right: 7px;\n}\n\n@media only screen and (max-width: 850px) {\n  .header-menu__right {\n    box-shadow: -1px 0 2px 2px #e7e7e7;\n  }\n}\n.btn {\n  background-color: #267dff;\n  color: whitesmoke;\n  padding: 7px 12px;\n  border: none;\n  border-radius: 4px;\n  font-size: 12px;\n}',
              "$side-padding: 8px 10px;\r\n",
              "@media only screen and (max-width: 850px) {\r\n  .header-menu__right {\r\n    box-shadow: -1px 0 2px 2px rgb(231, 231, 231);\r\n  }\r\n}",
              ".btn {\r\n  background-color: rgb(38, 125, 255);\r\n  color: whitesmoke;\r\n  padding: 7px 12px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  font-size: 12px;\r\n}\r\n",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ __webpack_exports__[
          "default"
        ] = ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
        // css base code, injected by the css-loader
        // eslint-disable-next-line func-names
        module.exports = function (useSourceMap) {
          var list = []; // return the list of modules as css string

          list.toString = function toString() {
            return this.map(function (item) {
              var content = cssWithMappingToString(item, useSourceMap);

              if (item[2]) {
                return "@media ".concat(item[2], " {").concat(content, "}");
              }

              return content;
            }).join("");
          }; // import a list of modules into the list
          // eslint-disable-next-line func-names

          list.i = function (modules, mediaQuery, dedupe) {
            if (typeof modules === "string") {
              // eslint-disable-next-line no-param-reassign
              modules = [[null, modules, ""]];
            }

            var alreadyImportedModules = {};

            if (dedupe) {
              for (var i = 0; i < this.length; i++) {
                // eslint-disable-next-line prefer-destructuring
                var id = this[i][0];

                if (id != null) {
                  alreadyImportedModules[id] = true;
                }
              }
            }

            for (var _i = 0; _i < modules.length; _i++) {
              var item = [].concat(modules[_i]);

              if (dedupe && alreadyImportedModules[item[0]]) {
                // eslint-disable-next-line no-continue
                continue;
              }

              if (mediaQuery) {
                if (!item[2]) {
                  item[2] = mediaQuery;
                } else {
                  item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                }
              }

              list.push(item);
            }
          };

          return list;
        };

        function cssWithMappingToString(item, useSourceMap) {
          var content = item[1] || ""; // eslint-disable-next-line prefer-destructuring

          var cssMapping = item[3];

          if (!cssMapping) {
            return content;
          }

          if (useSourceMap && typeof btoa === "function") {
            var sourceMapping = toComment(cssMapping);
            var sourceURLs = cssMapping.sources.map(function (source) {
              return "/*# sourceURL="
                .concat(cssMapping.sourceRoot || "")
                .concat(source, " */");
            });
            return [content]
              .concat(sourceURLs)
              .concat([sourceMapping])
              .join("\n");
          }

          return [content].join("\n");
        } // Adapted from convert-source-map (MIT)

        function toComment(sourceMap) {
          // eslint-disable-next-line no-undef
          var base64 = btoa(
            unescape(encodeURIComponent(JSON.stringify(sourceMap)))
          );
          var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
            base64
          );
          return "/*# ".concat(data, " */");
        }

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        var isOldIE = (function isOldIE() {
          var memo;
          return function memorize() {
            if (typeof memo === "undefined") {
              // Test for IE <= 9 as proposed by Browserhacks
              // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
              // Tests for existence of standard globals is to allow style-loader
              // to operate correctly into non-standard environments
              // @see https://github.com/webpack-contrib/style-loader/issues/177
              memo = Boolean(
                window && document && document.all && !window.atob
              );
            }

            return memo;
          };
        })();

        var getTarget = (function getTarget() {
          var memo = {};
          return function memorize(target) {
            if (typeof memo[target] === "undefined") {
              var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

              if (
                window.HTMLIFrameElement &&
                styleTarget instanceof window.HTMLIFrameElement
              ) {
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
          };
        })();

        var stylesInDom = [];

        function getIndexByIdentifier(identifier) {
          var result = -1;

          for (var i = 0; i < stylesInDom.length; i++) {
            if (stylesInDom[i].identifier === identifier) {
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
            var index = getIndexByIdentifier(identifier);
            var obj = {
              css: item[1],
              media: item[2],
              sourceMap: item[3],
            };

            if (index !== -1) {
              stylesInDom[index].references++;
              stylesInDom[index].updater(obj);
            } else {
              stylesInDom.push({
                identifier: identifier,
                updater: addStyle(obj, options),
                references: 1,
              });
            }

            identifiers.push(identifier);
          }

          return identifiers;
        }

        function insertStyleElement(options) {
          var style = document.createElement("style");
          var attributes = options.attributes || {};

          if (typeof attributes.nonce === "undefined") {
            var nonce = true ? __webpack_require__.nc : undefined;

            if (nonce) {
              attributes.nonce = nonce;
            }
          }

          Object.keys(attributes).forEach(function (key) {
            style.setAttribute(key, attributes[key]);
          });

          if (typeof options.insert === "function") {
            options.insert(style);
          } else {
            var target = getTarget(options.insert || "head");

            if (!target) {
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            }

            target.appendChild(style);
          }

          return style;
        }

        function removeStyleElement(style) {
          // istanbul ignore if
          if (style.parentNode === null) {
            return false;
          }

          style.parentNode.removeChild(style);
        }
        /* istanbul ignore next  */

        var replaceText = (function replaceText() {
          var textStore = [];
          return function replace(index, replacement) {
            textStore[index] = replacement;
            return textStore.filter(Boolean).join("\n");
          };
        })();

        function applyToSingletonTag(style, index, remove, obj) {
          var css = remove
            ? ""
            : obj.media
            ? "@media ".concat(obj.media, " {").concat(obj.css, "}")
            : obj.css; // For old IE

          /* istanbul ignore if  */

          if (style.styleSheet) {
            style.styleSheet.cssText = replaceText(index, css);
          } else {
            var cssNode = document.createTextNode(css);
            var childNodes = style.childNodes;

            if (childNodes[index]) {
              style.removeChild(childNodes[index]);
            }

            if (childNodes.length) {
              style.insertBefore(cssNode, childNodes[index]);
            } else {
              style.appendChild(cssNode);
            }
          }
        }

        function applyToTag(style, options, obj) {
          var css = obj.css;
          var media = obj.media;
          var sourceMap = obj.sourceMap;

          if (media) {
            style.setAttribute("media", media);
          } else {
            style.removeAttribute("media");
          }

          if (sourceMap && btoa) {
            css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
              btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
              " */"
            );
          } // For old IE

          /* istanbul ignore if  */

          if (style.styleSheet) {
            style.styleSheet.cssText = css;
          } else {
            while (style.firstChild) {
              style.removeChild(style.firstChild);
            }

            style.appendChild(document.createTextNode(css));
          }
        }

        var singleton = null;
        var singletonCounter = 0;

        function addStyle(obj, options) {
          var style;
          var update;
          var remove;

          if (options.singleton) {
            var styleIndex = singletonCounter++;
            style = singleton || (singleton = insertStyleElement(options));
            update = applyToSingletonTag.bind(null, style, styleIndex, false);
            remove = applyToSingletonTag.bind(null, style, styleIndex, true);
          } else {
            style = insertStyleElement(options);
            update = applyToTag.bind(null, style, options);

            remove = function remove() {
              removeStyleElement(style);
            };
          }

          update(obj);
          return function updateStyle(newObj) {
            if (newObj) {
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap
              ) {
                return;
              }

              update((obj = newObj));
            } else {
              remove();
            }
          };
        }

        module.exports = function (list, options) {
          options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
          // tags it will allow on a page

          if (!options.singleton && typeof options.singleton !== "boolean") {
            options.singleton = isOldIE();
          }

          list = list || [];
          var lastIdentifiers = modulesToDom(list, options);
          return function update(newList) {
            newList = newList || [];

            if (Object.prototype.toString.call(newList) !== "[object Array]") {
              return;
            }

            for (var i = 0; i < lastIdentifiers.length; i++) {
              var identifier = lastIdentifiers[i];
              var index = getIndexByIdentifier(identifier);
              stylesInDom[index].references--;
            }

            var newLastIdentifiers = modulesToDom(newList, options);

            for (var _i = 0; _i < lastIdentifiers.length; _i++) {
              var _identifier = lastIdentifiers[_i];

              var _index = getIndexByIdentifier(_identifier);

              if (stylesInDom[_index].references === 0) {
                stylesInDom[_index].updater();

                stylesInDom.splice(_index, 1);
              }
            }

            lastIdentifiers = newLastIdentifiers;
          };
        };

        /***/
      },

    /***/ "./src/index.ts":
      /*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./scss/index.scss */ "./src/scss/index.scss"
        );
        /* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__
        );

        function component() {
          // const element = document.createElement('div');
          // console.log('hi');
          // Lodash, currently included via a script, is required for this line to work
          // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
          // element.classList.add('hello');
          // return element;
        }
        // document.body.appendChild(component());

        /***/
      },

    /***/ "./src/scss/index.scss":
      /*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var api = __webpack_require__(
          /*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        );
        var content = __webpack_require__(
          /*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/index.scss"
        );

        content = content.__esModule ? content.default : content;

        if (typeof content === "string") {
          content = [[module.i, content, ""]];
        }

        var options = {};

        options.insert = "head";
        options.singleton = false;

        var update = api(content, options);

        module.exports = content.locals || {};

        /***/
      },

    /******/
  }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvaW5kZXguc2Nzcz83YzA0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFDNEY7QUFDNUYsOEJBQThCLG1GQUEyQjtBQUN6RCw4QkFBOEIsUUFBUyw2RUFBNkU7QUFDcEg7QUFDQSw4QkFB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O0FBRzNCLFNBQVMsU0FBUztJQUNoQixpREFBaUQ7SUFDakQscUJBQXFCO0lBRXJCLDZFQUE2RTtJQUM3RSx5REFBeUQ7SUFDekQsa0NBQWtDO0lBRWxDLGtCQUFrQjtBQUNwQixDQUFDO0FBRUQsMENBQTBDOzs7Ozs7Ozs7Ozs7QUNoQjFDLFVBQVUsbUJBQU8sQ0FBQyxzSkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMsOE1BQXFHOztBQUV2STs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImRpc3RcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG4uaGVhZGVyLW1lbnUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5oZWFkZXItbWVudV9fbGVmdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcm93LWdhcDogNHB4O1xcbiAgcGFkZGluZzogOHB4IDEwcHg7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaWNvbiB0aXRsZSBkb2N1bWVudC1wcmVmIC5cXFwiIFxcXCJpY29uIHByZWZlcmVuY2VzIHByZWZlcmVuY2VzIGxhc3QtY2hhbmdlXFxcIjtcXG59XFxuLmhlYWRlci1tZW51X19yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcmlnaHQ6IDA7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgei1pbmRleDogMTAwO1xcbiAgcGFkZGluZzogOHB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG4uaGVhZGVyLW1lbnVfX3JpZ2h0ID4gKiB7XFxuICBtYXJnaW46IDAgMTBweDtcXG59XFxuLmhlYWRlci1tZW51X19yaWdodCAuY29tbWVudCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5oZWFkZXItbWVudV9fd3JhcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uaGVhZGVyLW1lbnVfX2ljb24ge1xcbiAgZ3JpZC1hcmVhOiBpY29uO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXItbWVudV9fdGl0bGUge1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6ICM3Nzc7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcbi5oZWFkZXItbWVudV9fZG9jdW1lbnQtcHJlZiB7XFxuICBncmlkLWFyZWE6IGRvY3VtZW50LXByZWY7XFxuICBtYXJnaW4tbGVmdDogMTRweDtcXG59XFxuLmhlYWRlci1tZW51X19wcmVmZXJlbmNlcyB7XFxuICBncmlkLWFyZWE6IHByZWZlcmVuY2VzO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5oZWFkZXItbWVudV9fcHJlZmVyZW5jZXMgPiAqIHtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbn1cXG4uaGVhZGVyLW1lbnVfX2xhc3QtY2hhbmdlIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBncmlkLWFyZWE6IGxhc3QtY2hhbmdlO1xcbiAgY29sb3I6ICM3Nzc7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLmhlYWRlci1tZW51X19hdmF0YXIge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcXG59XFxuXFxuLm1hdGVyaWFsLWljb25zIHtcXG4gIGNvbG9yOiAjNzc3O1xcbn1cXG4ubWF0ZXJpYWwtaWNvbnNfc2l6ZV9zIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmhlYWRlci1tZW51X19idG4ge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLmhlYWRlci1tZW51X19idG4gLmxvY2sge1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBtYXJnaW4tcmlnaHQ6IDdweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xcbiAgLmhlYWRlci1tZW51X19yaWdodCB7XFxuICAgIGJveC1zaGFkb3c6IC0xcHggMCAycHggMnB4ICNlN2U3ZTc7XFxuICB9XFxufVxcbi5idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2N2RmZjtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgcGFkZGluZzogN3B4IDEycHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc2Nzcy9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Nzcy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Njc3MvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Njc3MvX3Jlc2l6ZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Njc3MvX2Jsb2Nrcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNERjs7QURJQTtFQUNFLGlDQUFBO0VBQ0EsV0FBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUNERjtBREdFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkV2Qlc7RUZ5QlgsNEZBQ0U7QUNITjtBRE9FO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJFckNXO0VGc0NYLHNCQUFBO0FDTEo7QURPSTtFQUNFLGNBQUE7QUNMTjtBRFFJO0VBQ0UsZUFBQTtBQ05OO0FEVUU7RUFDRSxhQUFBO0FDUko7QURXRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNUSjtBRFlFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ1ZKO0FEYUU7RUFDRSx3QkFBQTtFQUNBLGlCQUFBO0FDWEo7QURjRTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDWko7QURjSTtFQUNFLGNBQUE7QUNaTjtBRGdCRTtFQUVFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FDZko7QURrQkU7RUFDRSxrQkFBQTtFQUVBLHlCQUFBO0FDakJKOztBRHFCQTtFQUNFLFdBQUE7QUNsQkY7QURvQkU7RUFDRSxlQUFBO0FDbEJKOztBRHNCQTtFQUNFLG1CQUFBO0FDbkJGO0FEcUJFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNuQko7O0FFL0ZBO0VBQ0U7SUFDRSxrQ0FBQTtFRmtHRjtBQUNGO0FHckdBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBSHVHRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCBcXFwiLi92YXJpYWJsZXNcXFwiO1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1tZW51IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcblxcclxcbiAgJl9fbGVmdCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHJvdy1nYXA6IDRweDtcXHJcXG4gICAgcGFkZGluZzogJHNpZGUtcGFkZGluZztcXHJcXG5cXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgICBcXFwiaWNvbiB0aXRsZSBkb2N1bWVudC1wcmVmIC5cXFwiXFxyXFxuICAgICAgXFxcImljb24gcHJlZmVyZW5jZXMgcHJlZmVyZW5jZXMgbGFzdC1jaGFuZ2VcXFwiO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fcmlnaHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gICAgcGFkZGluZzogJHNpZGUtcGFkZGluZztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG5cXHJcXG4gICAgPiAqIHtcXHJcXG4gICAgICBtYXJnaW46IDAgMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29tbWVudCB7XFxyXFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX193cmFwIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2ljb24ge1xcclxcbiAgICBncmlkLWFyZWE6IGljb247XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX190aXRsZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGNvbG9yOiAjNzc3O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2RvY3VtZW50LXByZWYge1xcclxcbiAgICBncmlkLWFyZWE6IGRvY3VtZW50LXByZWY7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fcHJlZmVyZW5jZXMge1xcclxcbiAgICBncmlkLWFyZWE6IHByZWZlcmVuY2VzO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcbiAgICA+ICoge1xcclxcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19sYXN0LWNoYW5nZSB7XFxyXFxuICAgIC8vIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8vINC90LUg0YHQttC40LzQsNC10YIg0L7QsdGK0LXQutGCXFxyXFxuICAgIGdyaWQtYXJlYTogbGFzdC1jaGFuZ2U7XFxyXFxuICAgIGNvbG9yOiAjNzc3O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2F2YXRhciB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzNSwgMjM1LCAyMzUpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWF0ZXJpYWwtaWNvbnMge1xcclxcbiAgY29sb3I6ICM3Nzc7XFxyXFxuXFxyXFxuICAmX3NpemVfcyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1tZW51X19idG4ge1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG5cXHJcXG4gIC5sb2NrIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcFxcXCIpO1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogIzMzMztcXG59XFxuXFxuLmhlYWRlci1tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4uaGVhZGVyLW1lbnVfX2xlZnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHJvdy1nYXA6IDRweDtcXG4gIHBhZGRpbmc6IDhweCAxMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImljb24gdGl0bGUgZG9jdW1lbnQtcHJlZiAuXFxcIiBcXFwiaWNvbiBwcmVmZXJlbmNlcyBwcmVmZXJlbmNlcyBsYXN0LWNoYW5nZVxcXCI7XFxufVxcbi5oZWFkZXItbWVudV9fcmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHJpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHBhZGRpbmc6IDhweCAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuLmhlYWRlci1tZW51X19yaWdodCA+ICoge1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxufVxcbi5oZWFkZXItbWVudV9fcmlnaHQgLmNvbW1lbnQge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4uaGVhZGVyLW1lbnVfX3dyYXAge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmhlYWRlci1tZW51X19pY29uIHtcXG4gIGdyaWQtYXJlYTogaWNvbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyLW1lbnVfX3RpdGxlIHtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjNzc3O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4uaGVhZGVyLW1lbnVfX2RvY3VtZW50LXByZWYge1xcbiAgZ3JpZC1hcmVhOiBkb2N1bWVudC1wcmVmO1xcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XFxufVxcbi5oZWFkZXItbWVudV9fcHJlZmVyZW5jZXMge1xcbiAgZ3JpZC1hcmVhOiBwcmVmZXJlbmNlcztcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uaGVhZGVyLW1lbnVfX3ByZWZlcmVuY2VzID4gKiB7XFxuICBtYXJnaW46IDAgMTBweDtcXG59XFxuLmhlYWRlci1tZW51X19sYXN0LWNoYW5nZSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgZ3JpZC1hcmVhOiBsYXN0LWNoYW5nZTtcXG4gIGNvbG9yOiAjNzc3O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi5oZWFkZXItbWVudV9fYXZhdGFyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XFxufVxcblxcbi5tYXRlcmlhbC1pY29ucyB7XFxuICBjb2xvcjogIzc3NztcXG59XFxuLm1hdGVyaWFsLWljb25zX3NpemVfcyB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5oZWFkZXItbWVudV9fYnRuIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5oZWFkZXItbWVudV9fYnRuIC5sb2NrIHtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcXG4gIC5oZWFkZXItbWVudV9fcmlnaHQge1xcbiAgICBib3gtc2hhZG93OiAtMXB4IDAgMnB4IDJweCAjZTdlN2U3O1xcbiAgfVxcbn1cXG4uYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjdkZmY7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIHBhZGRpbmc6IDdweCAxMnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cIixcIiRzaWRlLXBhZGRpbmc6IDhweCAxMHB4O1xcclxcblwiLFwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xcclxcbiAgLmhlYWRlci1tZW51X19yaWdodCB7XFxyXFxuICAgIGJveC1zaGFkb3c6IC0xcHggMCAycHggMnB4IHJnYigyMzEsIDIzMSwgMjMxKTtcXHJcXG4gIH1cXHJcXG59XCIsXCIuYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgMTI1LCAyNTUpO1xcclxcbiAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICBwYWRkaW5nOiA3cHggMTJweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmltcG9ydCAnLi9zY3NzL2luZGV4LnNjc3MnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcclxuICAvLyBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgLy8gY29uc29sZS5sb2coJ2hpJyk7XHJcblxyXG4gIC8vIExvZGFzaCwgY3VycmVudGx5IGluY2x1ZGVkIHZpYSBhIHNjcmlwdCwgaXMgcmVxdWlyZWQgZm9yIHRoaXMgbGluZSB0byB3b3JrXHJcbiAgLy8gZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydIZWxsbycsICd3ZWJwYWNrJ10sICcgJyk7XHJcbiAgLy8gZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoZWxsbycpO1xyXG5cclxuICAvLyByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9
