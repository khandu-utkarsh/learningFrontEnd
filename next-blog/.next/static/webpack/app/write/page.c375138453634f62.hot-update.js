"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/write/page",{

/***/ "(app-pages-browser)/./src/app/write/page.jsx":
/*!********************************!*\
  !*** ./src/app/write/page.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _writePage_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./writePage.module.css */ \"(app-pages-browser)/./src/app/write/writePage.module.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-quill */ \"(app-pages-browser)/./node_modules/react-quill/lib/index.js\");\n/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-quill/dist/quill.bubble.css */ \"(app-pages-browser)/./node_modules/react-quill/dist/quill.bubble.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst WritePage = ()=>{\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: _writePage_module_css__WEBPACK_IMPORTED_MODULE_5__.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Title\"\n            }, void 0, false, {\n                fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/app/write/page.jsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: _writePage_module_css__WEBPACK_IMPORTED_MODULE_5__.editor,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: _writePage_module_css__WEBPACK_IMPORTED_MODULE_5__.button,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: \"/plus.png\",\n                            alt: \"\",\n                            width: 16,\n                            height: 16,\n                            className: _writePage_module_css__WEBPACK_IMPORTED_MODULE_5__.image\n                        }, void 0, false, {\n                            fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/app/write/page.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/app/write/page.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, undefined),\n                    open && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: _writePage_module_css__WEBPACK_IMPORTED_MODULE_5__.add,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: _writePage_module_css__WEBPACK_IMPORTED_MODULE_5__.addButton,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: \"/image.png\",\n                                    alt: \"\",\n                                    width: 16,\n                                    height: 16,\n                                    className: _writePage_module_css__WEBPACK_IMPORTED_MODULE_5__.image\n                                }, void 0, false, {\n                                    fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/app/write/page.jsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/app/write/page.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: _writePage_module_css__WEBPACK_IMPORTED_MODULE_5__.addButton,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: \"/external.png\",\n                                    alt: \"\",\n                                    width: 16,\n                                    height: 16,\n                                    className: _writePage_module_css__WEBPACK_IMPORTED_MODULE_5__.image\n                                }, void 0, false, {\n                                    fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/app/write/page.jsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/app/write/page.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: _writePage_module_css__WEBPACK_IMPORTED_MODULE_5__.addButton,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: \"/video.png\",\n                                    alt: \"\",\n                                    width: 16,\n                                    height: 16,\n                                    className: _writePage_module_css__WEBPACK_IMPORTED_MODULE_5__.image\n                                }, void 0, false, {\n                                    fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/app/write/page.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/app/write/page.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/app/write/page.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_quill__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        theme: \"bubble\"\n                    }, void 0, false, {\n                        fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/app/write/page.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/app/write/page.jsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/app/write/page.jsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, undefined);\n};\n_s(WritePage, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n_c = WritePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WritePage);\nvar _c;\n$RefreshReg$(_c, \"WritePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvd3JpdGUvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRTJDO0FBRWxCO0FBQ087QUFDSTtBQUNOO0FBQ1k7QUFJMUMsTUFBTUssWUFBWTs7SUFFZCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUM7SUFDakMscUJBQ0ksOERBQUNNO1FBQUlDLFdBQVdULGtEQUFNQSxDQUFDVSxTQUFTOzswQkFDNUIsOERBQUNDO2dCQUFNQyxNQUFLO2dCQUFPQyxhQUFZOzs7Ozs7MEJBQy9CLDhEQUFDTDtnQkFBSUMsV0FBV1Qsa0RBQU1BLENBQUNjLE1BQU07O2tDQUN6Qiw4REFBQ0M7d0JBQU9OLFdBQVdULGtEQUFNQSxDQUFDZSxNQUFNO2tDQUM1Qiw0RUFBQ1gsbURBQUtBOzRCQUFDWSxLQUFJOzRCQUFZQyxLQUFJOzRCQUFHQyxPQUFPOzRCQUFJQyxRQUFROzRCQUFJVixXQUFXVCxrREFBTUEsQ0FBQ29CLEtBQUs7Ozs7Ozs7Ozs7O29CQUc1RWQsc0JBQ0ksOERBQUNFO3dCQUFJQyxXQUFXVCxrREFBTUEsQ0FBQ3FCLEdBQUc7OzBDQUN0Qiw4REFBQ047Z0NBQU9OLFdBQVdULGtEQUFNQSxDQUFDc0IsU0FBUzswQ0FDL0IsNEVBQUNsQixtREFBS0E7b0NBQUNZLEtBQUk7b0NBQWFDLEtBQUk7b0NBQUdDLE9BQU87b0NBQUlDLFFBQVE7b0NBQUlWLFdBQVdULGtEQUFNQSxDQUFDb0IsS0FBSzs7Ozs7Ozs7Ozs7MENBR2pGLDhEQUFDTDtnQ0FBT04sV0FBV1Qsa0RBQU1BLENBQUNzQixTQUFTOzBDQUMvQiw0RUFBQ2xCLG1EQUFLQTtvQ0FBQ1ksS0FBSTtvQ0FBZ0JDLEtBQUk7b0NBQUdDLE9BQU87b0NBQUlDLFFBQVE7b0NBQUlWLFdBQVdULGtEQUFNQSxDQUFDb0IsS0FBSzs7Ozs7Ozs7Ozs7MENBR3BGLDhEQUFDTDtnQ0FBT04sV0FBV1Qsa0RBQU1BLENBQUNzQixTQUFTOzBDQUMvQiw0RUFBQ2xCLG1EQUFLQTtvQ0FBQ1ksS0FBSTtvQ0FBYUMsS0FBSTtvQ0FBR0MsT0FBTztvQ0FBSUMsUUFBUTtvQ0FBSVYsV0FBV1Qsa0RBQU1BLENBQUNvQixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJN0YsOERBQUNqQixvREFBVUE7d0JBQUNvQixPQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEM7R0E5Qk1sQjtLQUFBQTtBQWdDTiwrREFBZUEsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3dyaXRlL3BhZ2UuanN4PzdlODYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi93cml0ZVBhZ2UubW9kdWxlLmNzc1wiXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFJlYWN0UXVpbGwgZnJvbSBcInJlYWN0LXF1aWxsXCJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQgXCJyZWFjdC1xdWlsbC9kaXN0L3F1aWxsLmJ1YmJsZS5jc3NcIlxuXG5cblxuY29uc3QgV3JpdGVQYWdlID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdG9yfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvcGx1cy5wbmdcIiBhbHQ9XCJcIiB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfSAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgb3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5hZGRCdXR0b259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlLnBuZ1wiIGFsdD1cIlwiIHdpZHRoPXsxNn0gaGVpZ2h0PXsxNn0gY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmFkZEJ1dHRvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvZXh0ZXJuYWwucG5nXCIgYWx0PVwiXCIgd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYWRkQnV0dG9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi92aWRlby5wbmdcIiBhbHQ9XCJcIiB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8UmVhY3RRdWlsbCB0aGVtZT1cImJ1YmJsZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXcml0ZVBhZ2UiXSwibmFtZXMiOlsic3R5bGVzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIlJlYWN0UXVpbGwiLCJJbWFnZSIsIldyaXRlUGFnZSIsIm9wZW4iLCJzZXRPcGVuIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJlZGl0b3IiLCJidXR0b24iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImltYWdlIiwiYWRkIiwiYWRkQnV0dG9uIiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/write/page.jsx\n"));

/***/ })

});