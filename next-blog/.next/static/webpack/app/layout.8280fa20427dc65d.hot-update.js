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

/***/ "(app-pages-browser)/./src/context/ThemeContext.jsx":
/*!**************************************!*\
  !*** ./src/context/ThemeContext.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeContext: function() { return /* binding */ ThemeContext; },\n/* harmony export */   ThemeContextProvider: function() { return /* binding */ ThemeContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ ThemeContext,ThemeContextProvider auto */ \nvar _s = $RefreshSig$();\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst getFromLocalStorage = ()=>{\n    if (true) {\n        const value = localStorage.getItem(\"theme\");\n        return value || \"light\";\n    }\n    return \"light\";\n};\nconst ThemeContextProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>getFromLocalStorage());\n    const toggle = ()=>{\n        setTheme(theme === \"light\" ? \"dark\" : \"light\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(\"theme\", theme);\n    }, [\n        theme\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            theme,\n            toggle\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/utkarsh/GitHubCodeRepositories/learningFrontEnd/next-blog/src/context/ThemeContext.jsx\",\n        lineNumber: 27,\n        columnNumber: 12\n    }, undefined);\n};\n_s(ThemeContextProvider, \"k9wY8x6DqobTFkj8n7xz76XQ8k4=\");\n_c = ThemeContextProvider;\nvar _c;\n$RefreshReg$(_c, \"ThemeContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L1RoZW1lQ29udGV4dC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUUyRDtBQUVwRCxNQUFNRyw2QkFBZUgsb0RBQWFBLEdBQUU7QUFFM0MsTUFBTUksc0JBQXNCO0lBQ3hCLElBQUcsSUFBNkIsRUFBRTtRQUM5QixNQUFNQyxRQUFRQyxhQUFhQyxPQUFPLENBQUM7UUFDbkMsT0FBT0YsU0FBUztJQUNwQjtJQUNBLE9BQU87QUFDWDtBQUdPLE1BQU1HLHVCQUF1QjtRQUFDLEVBQUNDLFFBQVEsRUFBQzs7SUFDM0MsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDLElBQU1FO0lBRXpDLE1BQU1RLFNBQVM7UUFDWEQsU0FBU0QsVUFBUSxVQUFVLFNBQVM7SUFDeEM7SUFFQVQsZ0RBQVNBLENBQUM7UUFDTkssYUFBYU8sT0FBTyxDQUFDLFNBQVNIO0lBQ2xDLEdBQUU7UUFBQ0E7S0FBTTtJQUVULHFCQUFPLDhEQUFDUCxhQUFhVyxRQUFRO1FBQUNULE9BQU87WUFBQ0s7WUFBT0U7UUFBTTtrQkFBSUg7Ozs7OztBQUMzRCxFQUFDO0dBWllEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L1RoZW1lQ29udGV4dC5qc3g/MWM5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuY29uc3QgZ2V0RnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICBpZih0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKVxuICAgICAgICByZXR1cm4gdmFsdWUgfHwgXCJsaWdodFwiICAgXG4gICAgfVxuICAgIHJldHVybiBcImxpZ2h0XCI7XG59XG5cblxuZXhwb3J0IGNvbnN0IFRoZW1lQ29udGV4dFByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKCgpID0+IGdldEZyb21Mb2NhbFN0b3JhZ2UoKSk7XG5cbiAgICBjb25zdCB0b2dnbGUgPSAoKSA9PiB7XG4gICAgICAgIHNldFRoZW1lKHRoZW1lPT09XCJsaWdodFwiID8gXCJkYXJrXCIgOiBcImxpZ2h0XCIpXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgdGhlbWUpXG4gICAgfSxbdGhlbWVdKTtcblxuICAgIHJldHVybiA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7dGhlbWUsIHRvZ2dsZX19PntjaGlsZHJlbn08L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cbn0iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVGhlbWVDb250ZXh0IiwiZ2V0RnJvbUxvY2FsU3RvcmFnZSIsInZhbHVlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlRoZW1lQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ0aGVtZSIsInNldFRoZW1lIiwidG9nZ2xlIiwic2V0SXRlbSIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/ThemeContext.jsx\n"));

/***/ })

});