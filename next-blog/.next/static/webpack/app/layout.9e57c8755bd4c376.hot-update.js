"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/components/authLinks/AuthLinks.jsx":
/*!************************************************!*\
  !*** ./src/components/authLinks/AuthLinks.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _authLinks_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authLinks.module.css */ \"(app-pages-browser)/./src/components/authLinks/authLinks.module.css\");\n/* harmony import */ var _authLinks_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_authLinks_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction LoginLogoutComp(param) {\n    let { compStatus, linkClassName } = param;\n    const loginLink = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/login\",\n        className: linkClassName,\n        children: \"Login\"\n    }, void 0, false, {\n        fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/components/authLinks/AuthLinks.jsx\",\n        lineNumber: 10,\n        columnNumber: 23\n    }, this);\n    const logoutLink = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/write\",\n                className: linkClassName,\n                children: \"Write\"\n            }, void 0, false, {\n                fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/components/authLinks/AuthLinks.jsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: linkClassName,\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/components/authLinks/AuthLinks.jsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n    return compStatus === \"notAuthenticated\" ? loginLink : logoutLink;\n}\n_c = LoginLogoutComp;\nconst AuthLinks = ()=>{\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const status = \"notAuthenticated\" //!Temp\n    ;\n    const loginLink = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/login\",\n        className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),\n        children: \"Login\"\n    }, void 0, false, {\n        fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/components/authLinks/AuthLinks.jsx\",\n        lineNumber: 28,\n        columnNumber: 23\n    }, undefined);\n    const logoutLink = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/write\",\n                className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),\n                children: \"Write\"\n            }, void 0, false, {\n                fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/components/authLinks/AuthLinks.jsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/components/authLinks/AuthLinks.jsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n    const burgerMenu = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_3___default().burger),\n        onClick: ()=>setOpen(!open),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_3___default().line)\n            }, void 0, false, {\n                fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/components/authLinks/AuthLinks.jsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_3___default().line)\n            }, void 0, false, {\n                fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/components/authLinks/AuthLinks.jsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_3___default().line)\n            }, void 0, false, {\n                fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/components/authLinks/AuthLinks.jsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/components/authLinks/AuthLinks.jsx\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n    const burgerMenuOpen = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_3___default().responsiveMenu),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                children: \"Homepage\"\n            }, void 0, false, {\n                fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/components/authLinks/AuthLinks.jsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                children: \"Contact\"\n            }, void 0, false, {\n                fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/components/authLinks/AuthLinks.jsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                children: \"About\"\n            }, void 0, false, {\n                fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/components/authLinks/AuthLinks.jsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoginLogoutComp, {\n                compStatus: status,\n                linkClassName: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_3___default().link)\n            }, void 0, false, {\n                fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/components/authLinks/AuthLinks.jsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/components/authLinks/AuthLinks.jsx\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoginLogoutComp, {\n                compStatus: status,\n                linkClassName: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_3___default().link)\n            }, void 0, false, {\n                fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/components/authLinks/AuthLinks.jsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, undefined),\n            burgerMenu,\n            open && burgerMenuOpen\n        ]\n    }, void 0, true);\n};\n_s(AuthLinks, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n_c1 = AuthLinks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthLinks);\nvar _c, _c1;\n$RefreshReg$(_c, \"LoginLogoutComp\");\n$RefreshReg$(_c1, \"AuthLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F1dGhMaW5rcy9BdXRoTGlua3MuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFNkI7QUFDYztBQUNWO0FBSWpDLFNBQVNHLGdCQUFnQixLQUEyQjtRQUEzQixFQUFDQyxVQUFVLEVBQUVDLGFBQWEsRUFBQyxHQUEzQjtJQUNyQixNQUFNQywwQkFBWSw4REFBQ04sa0RBQUlBO1FBQUNPLE1BQUs7UUFBU0MsV0FBV0g7a0JBQWU7Ozs7OztJQUNoRSxNQUFNSSwyQkFDRjs7MEJBQ0ksOERBQUNULGtEQUFJQTtnQkFBQ08sTUFBSztnQkFBU0MsV0FBV0g7MEJBQWU7Ozs7OzswQkFDOUMsOERBQUNLO2dCQUFLRixXQUFXSDswQkFBZTs7Ozs7Ozs7SUFFeEMsT0FBUUQsZUFBZSxxQkFBcUJFLFlBQVdHO0FBQzNEO0tBUlNOO0FBWVQsTUFBTVEsWUFBWTs7SUFFZCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1gsK0NBQVFBLENBQUM7SUFHakMsTUFBTVksU0FBUyxtQkFBcUIsT0FBTzs7SUFFM0MsTUFBTVIsMEJBQVksOERBQUNOLGtEQUFJQTtRQUFDTyxNQUFLO1FBQVNDLFdBQVdQLG1FQUFXO2tCQUFFOzs7Ozs7SUFDOUQsTUFBTVEsMkJBQ0Y7OzBCQUNJLDhEQUFDVCxrREFBSUE7Z0JBQUNPLE1BQUs7Z0JBQVNDLFdBQVdQLG1FQUFXOzBCQUFFOzs7Ozs7MEJBQzVDLDhEQUFDUztnQkFBS0YsV0FBV1AsbUVBQVc7MEJBQUU7Ozs7Ozs7O0lBRXRDLE1BQU1lLDJCQUNGLDhEQUFDQztRQUFJVCxXQUFXUCxxRUFBYTtRQUFFa0IsU0FBUyxJQUFNTixRQUFRLENBQUNEOzswQkFDbkQsOERBQUNLO2dCQUFJVCxXQUFXUCxtRUFBVzs7Ozs7OzBCQUMzQiw4REFBQ2dCO2dCQUFJVCxXQUFXUCxtRUFBVzs7Ozs7OzBCQUMzQiw4REFBQ2dCO2dCQUFJVCxXQUFXUCxtRUFBVzs7Ozs7Ozs7Ozs7O0lBR25DLE1BQU1vQiwrQkFDRiw4REFBQ0o7UUFBSVQsV0FBV1AsNkVBQXFCOzswQkFDakMsOERBQUNELGtEQUFJQTtnQkFBQ08sTUFBSzswQkFBSzs7Ozs7OzBCQUNoQiw4REFBQ1Asa0RBQUlBO2dCQUFDTyxNQUFLOzBCQUFLOzs7Ozs7MEJBQ2hCLDhEQUFDUCxrREFBSUE7Z0JBQUNPLE1BQUs7MEJBQUs7Ozs7OzswQkFDaEIsOERBQUNKO2dCQUFnQkMsWUFBWVU7Z0JBQVFULGVBQWVKLG1FQUFXOzs7Ozs7Ozs7Ozs7SUFFdkUscUJBQ0k7OzBCQUNJLDhEQUFDRTtnQkFBZ0JDLFlBQVlVO2dCQUFRVCxlQUFlSixtRUFBVzs7Ozs7O1lBQzlEZTtZQUNBSixRQUFRUzs7O0FBR3JCO0dBbENNVjtNQUFBQTtBQW9DTiwrREFBZUEsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hdXRoTGlua3MvQXV0aExpbmtzLmpzeD9hOWFhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vYXV0aExpbmtzLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5cbmZ1bmN0aW9uIExvZ2luTG9nb3V0Q29tcCh7Y29tcFN0YXR1cywgbGlua0NsYXNzTmFtZX0pIHtcbiAgICBjb25zdCBsb2dpbkxpbmsgPSA8TGluayBocmVmPVwiL2xvZ2luXCIgY2xhc3NOYW1lPXtsaW5rQ2xhc3NOYW1lfT5Mb2dpbjwvTGluaz5cbiAgICBjb25zdCBsb2dvdXRMaW5rID0gXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3dyaXRlXCIgY2xhc3NOYW1lPXtsaW5rQ2xhc3NOYW1lfT5Xcml0ZTwvTGluaz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17bGlua0NsYXNzTmFtZX0+TG9nb3V0PC9zcGFuPlxuICAgICAgICA8Lz5cbiAgICByZXR1cm4gKGNvbXBTdGF0dXMgPT09IFwibm90QXV0aGVudGljYXRlZFwiID8gbG9naW5MaW5rIDpsb2dvdXRMaW5rIClcbn1cblxuXG5cbmNvbnN0IEF1dGhMaW5rcyA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cbiAgICBjb25zdCBzdGF0dXMgPSBcIm5vdEF1dGhlbnRpY2F0ZWRcIiAgIC8vIVRlbXBcblxuICAgIGNvbnN0IGxvZ2luTGluayA9IDxMaW5rIGhyZWY9XCIvbG9naW5cIiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5Mb2dpbjwvTGluaz5cbiAgICBjb25zdCBsb2dvdXRMaW5rID0gXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3dyaXRlXCIgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+V3JpdGU8L0xpbms+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5Mb2dvdXQ8L3NwYW4+XG4gICAgICAgIDwvPlxuICAgIGNvbnN0IGJ1cmdlck1lbnUgPVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1cmdlcn0gb25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5lfT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGluZX0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmV9PjwvZGl2PiAgICBcbiAgICAgICAgPC9kaXY+XG5cbiAgICBjb25zdCBidXJnZXJNZW51T3BlbiA9IFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlc3BvbnNpdmVNZW51fT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgPkhvbWVwYWdlPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiA+Q29udGFjdDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgPkFib3V0PC9MaW5rPlxuICAgICAgICAgICAgPExvZ2luTG9nb3V0Q29tcCBjb21wU3RhdHVzPXtzdGF0dXN9IGxpbmtDbGFzc05hbWU9e3N0eWxlcy5saW5rfS8+XG4gICAgICAgIDwvZGl2PlxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TG9naW5Mb2dvdXRDb21wIGNvbXBTdGF0dXM9e3N0YXR1c30gbGlua0NsYXNzTmFtZT17c3R5bGVzLmxpbmt9Lz5cbiAgICAgICAgICAgIHtidXJnZXJNZW51fVxuICAgICAgICAgICAge29wZW4gJiYgYnVyZ2VyTWVudU9wZW59XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoTGlua3MiXSwibmFtZXMiOlsiTGluayIsInN0eWxlcyIsInVzZVN0YXRlIiwiTG9naW5Mb2dvdXRDb21wIiwiY29tcFN0YXR1cyIsImxpbmtDbGFzc05hbWUiLCJsb2dpbkxpbmsiLCJocmVmIiwiY2xhc3NOYW1lIiwibG9nb3V0TGluayIsInNwYW4iLCJBdXRoTGlua3MiLCJvcGVuIiwic2V0T3BlbiIsInN0YXR1cyIsImxpbmsiLCJidXJnZXJNZW51IiwiZGl2IiwiYnVyZ2VyIiwib25DbGljayIsImxpbmUiLCJidXJnZXJNZW51T3BlbiIsInJlc3BvbnNpdmVNZW51Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/authLinks/AuthLinks.jsx\n"));

/***/ })

});