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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _authLinks_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authLinks.module.css */ \"(app-pages-browser)/./src/components/authLinks/authLinks.module.css\");\n/* harmony import */ var _authLinks_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_authLinks_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction LoginLogoutComp(param) {\n    let { cn } = param;\n}\n_c = LoginLogoutComp;\nfunction LoginLink(param) {\n    let { cn } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/login\",\n        className: cn,\n        children: \"Login\"\n    }, void 0, false, {\n        fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/components/authLinks/AuthLinks.jsx\",\n        lineNumber: 14,\n        columnNumber: 12\n    }, this);\n}\n_c1 = LoginLink;\nfunction Logout(param) {\n    let { cn } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/login\",\n        className: cn,\n        children: \"Login\"\n    }, void 0, false, {\n        fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/components/authLinks/AuthLinks.jsx\",\n        lineNumber: 18,\n        columnNumber: 12\n    }, this);\n}\n_c2 = Logout;\nconst AuthLinks = ()=>{\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const status = \"notAuthenticated\" //!Temp\n    ;\n    const loginLink = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/login\",\n        className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),\n        children: \"Login\"\n    }, void 0, false, {\n        fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/components/authLinks/AuthLinks.jsx\",\n        lineNumber: 29,\n        columnNumber: 23\n    }, undefined);\n    const logoutLink = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/write\",\n                className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),\n                children: \"Write\"\n            }, void 0, false, {\n                fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/components/authLinks/AuthLinks.jsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/components/authLinks/AuthLinks.jsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n    const burgerMenu = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_3___default().burger),\n        onClick: ()=>setOpen(!open),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_3___default().line)\n            }, void 0, false, {\n                fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/components/authLinks/AuthLinks.jsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_3___default().line)\n            }, void 0, false, {\n                fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/components/authLinks/AuthLinks.jsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_3___default().line)\n            }, void 0, false, {\n                fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/components/authLinks/AuthLinks.jsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/components/authLinks/AuthLinks.jsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, undefined);\n    const burgerMenuOpen = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_authLinks_module_css__WEBPACK_IMPORTED_MODULE_3___default().responsiveMenu),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                children: \"Homepage\"\n            }, void 0, false, {\n                fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/components/authLinks/AuthLinks.jsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                children: \"Contact\"\n            }, void 0, false, {\n                fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/components/authLinks/AuthLinks.jsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                children: \"About\"\n            }, void 0, false, {\n                fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/components/authLinks/AuthLinks.jsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, undefined),\n            status === \"notAuthenticated\" ? loginLink : logoutLink\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/components/authLinks/AuthLinks.jsx\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            status === \"notAuthenticated\" ? loginLink : logoutLink,\n            burgerMenu,\n            open && burgerMenuOpen\n        ]\n    }, void 0, true);\n};\n_s(AuthLinks, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n_c3 = AuthLinks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthLinks);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"LoginLogoutComp\");\n$RefreshReg$(_c1, \"LoginLink\");\n$RefreshReg$(_c2, \"Logout\");\n$RefreshReg$(_c3, \"AuthLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F1dGhMaW5rcy9BdXRoTGlua3MuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFNkI7QUFDYztBQUNWO0FBR2pDLFNBQVNHLGdCQUFnQixLQUFJO1FBQUosRUFBQ0MsRUFBRSxFQUFDLEdBQUo7QUFFekI7S0FGU0Q7QUFLVCxTQUFTRSxVQUFVLEtBQUk7UUFBSixFQUFDRCxFQUFFLEVBQUMsR0FBSjtJQUNmLHFCQUFPLDhEQUFDSixrREFBSUE7UUFBQ00sTUFBSztRQUFTQyxXQUFXSDtrQkFBSTs7Ozs7O0FBQzlDO01BRlNDO0FBSVQsU0FBU0csT0FBTyxLQUFJO1FBQUosRUFBQ0osRUFBRSxFQUFDLEdBQUo7SUFDWixxQkFBTyw4REFBQ0osa0RBQUlBO1FBQUNNLE1BQUs7UUFBU0MsV0FBV0g7a0JBQUk7Ozs7OztBQUM5QztNQUZTSTtBQUtULE1BQU1DLFlBQVk7O0lBRWQsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDO0lBR2pDLE1BQU1VLFNBQVMsbUJBQXFCLE9BQU87O0lBRTNDLE1BQU1DLDBCQUFZLDhEQUFDYixrREFBSUE7UUFBQ00sTUFBSztRQUFTQyxXQUFXTixtRUFBVztrQkFBRTs7Ozs7O0lBQzlELE1BQU1jLDJCQUNGOzswQkFDSSw4REFBQ2Ysa0RBQUlBO2dCQUFDTSxNQUFLO2dCQUFTQyxXQUFXTixtRUFBVzswQkFBRTs7Ozs7OzBCQUM1Qyw4REFBQ2U7Z0JBQUtULFdBQVdOLG1FQUFXOzBCQUFFOzs7Ozs7OztJQUV0QyxNQUFNZ0IsMkJBQ0YsOERBQUNDO1FBQUlYLFdBQVdOLHFFQUFhO1FBQUVtQixTQUFTLElBQU1ULFFBQVEsQ0FBQ0Q7OzBCQUNuRCw4REFBQ1E7Z0JBQUlYLFdBQVdOLG1FQUFXOzs7Ozs7MEJBQzNCLDhEQUFDaUI7Z0JBQUlYLFdBQVdOLG1FQUFXOzs7Ozs7MEJBQzNCLDhEQUFDaUI7Z0JBQUlYLFdBQVdOLG1FQUFXOzs7Ozs7Ozs7Ozs7SUFHbkMsTUFBTXFCLCtCQUNGLDhEQUFDSjtRQUFJWCxXQUFXTiw2RUFBcUI7OzBCQUNqQyw4REFBQ0Qsa0RBQUlBO2dCQUFDTSxNQUFLOzBCQUFLOzs7Ozs7MEJBQ2hCLDhEQUFDTixrREFBSUE7Z0JBQUNNLE1BQUs7MEJBQUs7Ozs7OzswQkFDaEIsOERBQUNOLGtEQUFJQTtnQkFBQ00sTUFBSzswQkFBSzs7Ozs7O1lBQ2ZNLFdBQVcscUJBQXFCQyxZQUFXRTs7Ozs7OztJQUVwRCxxQkFDSTs7WUFDS0gsV0FBVyxxQkFBcUJDLFlBQVdFO1lBQzNDRTtZQUNBUCxRQUFRWTs7O0FBR3JCO0dBbENNYjtNQUFBQTtBQW9DTiwrREFBZUEsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hdXRoTGlua3MvQXV0aExpbmtzLmpzeD9hOWFhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vYXV0aExpbmtzLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5mdW5jdGlvbiBMb2dpbkxvZ291dENvbXAoe2NufSkge1xuICAgIFxufVxuXG5cbmZ1bmN0aW9uIExvZ2luTGluayh7Y259KSB7XG4gICAgcmV0dXJuIDxMaW5rIGhyZWY9XCIvbG9naW5cIiBjbGFzc05hbWU9e2NufT5Mb2dpbjwvTGluaz5cbn1cblxuZnVuY3Rpb24gTG9nb3V0KHtjbn0pIHtcbiAgICByZXR1cm4gPExpbmsgaHJlZj1cIi9sb2dpblwiIGNsYXNzTmFtZT17Y259PkxvZ2luPC9MaW5rPlxufVxuXG5cbmNvbnN0IEF1dGhMaW5rcyA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cbiAgICBjb25zdCBzdGF0dXMgPSBcIm5vdEF1dGhlbnRpY2F0ZWRcIiAgIC8vIVRlbXBcblxuICAgIGNvbnN0IGxvZ2luTGluayA9IDxMaW5rIGhyZWY9XCIvbG9naW5cIiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5Mb2dpbjwvTGluaz5cbiAgICBjb25zdCBsb2dvdXRMaW5rID0gXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3dyaXRlXCIgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+V3JpdGU8L0xpbms+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5Mb2dvdXQ8L3NwYW4+XG4gICAgICAgIDwvPlxuICAgIGNvbnN0IGJ1cmdlck1lbnUgPVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1cmdlcn0gb25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5lfT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGluZX0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmV9PjwvZGl2PiAgICBcbiAgICAgICAgPC9kaXY+XG5cbiAgICBjb25zdCBidXJnZXJNZW51T3BlbiA9IFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlc3BvbnNpdmVNZW51fT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgPkhvbWVwYWdlPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiA+Q29udGFjdDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgPkFib3V0PC9MaW5rPlxuICAgICAgICAgICAge3N0YXR1cyA9PT0gXCJub3RBdXRoZW50aWNhdGVkXCIgPyBsb2dpbkxpbmsgOmxvZ291dExpbmsgfVxuICAgICAgICA8L2Rpdj5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge3N0YXR1cyA9PT0gXCJub3RBdXRoZW50aWNhdGVkXCIgPyBsb2dpbkxpbmsgOmxvZ291dExpbmsgfVxuICAgICAgICAgICAge2J1cmdlck1lbnV9XG4gICAgICAgICAgICB7b3BlbiAmJiBidXJnZXJNZW51T3Blbn1cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhMaW5rcyJdLCJuYW1lcyI6WyJMaW5rIiwic3R5bGVzIiwidXNlU3RhdGUiLCJMb2dpbkxvZ291dENvbXAiLCJjbiIsIkxvZ2luTGluayIsImhyZWYiLCJjbGFzc05hbWUiLCJMb2dvdXQiLCJBdXRoTGlua3MiLCJvcGVuIiwic2V0T3BlbiIsInN0YXR1cyIsImxvZ2luTGluayIsImxpbmsiLCJsb2dvdXRMaW5rIiwic3BhbiIsImJ1cmdlck1lbnUiLCJkaXYiLCJidXJnZXIiLCJvbkNsaWNrIiwibGluZSIsImJ1cmdlck1lbnVPcGVuIiwicmVzcG9uc2l2ZU1lbnUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/authLinks/AuthLinks.jsx\n"));

/***/ })

});