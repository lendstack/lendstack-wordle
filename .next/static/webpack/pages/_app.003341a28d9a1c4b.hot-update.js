"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/components/Keyboard.js":
/*!******************************************!*\
  !*** ./src/pages/components/Keyboard.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Keyboard() {\n    const keys1 = [\n        \"Q\",\n        \"W\",\n        \"E\",\n        \"R\",\n        \"T\",\n        \"Y\",\n        \"U\",\n        \"I\",\n        \"O\",\n        \"P\"\n    ];\n    const keys2 = [\n        \"A\",\n        \"S\",\n        \"D\",\n        \"F\",\n        \"G\",\n        \"H\",\n        \"J\",\n        \"K\",\n        \"L\"\n    ];\n    const keys3 = [\n        \"Z\",\n        \"X\",\n        \"C\",\n        \"V\",\n        \"B\",\n        \"N\",\n        \"M\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"keyboard\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"line1\",\n                children: keys1.map((key)=>{})\n            }, void 0, false, {\n                fileName: \"/Users/mlalouli/Desktop/wordle-meryem-lalouli/src/pages/components/Keyboard.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"line2\"\n            }, void 0, false, {\n                fileName: \"/Users/mlalouli/Desktop/wordle-meryem-lalouli/src/pages/components/Keyboard.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"line3\"\n            }, void 0, false, {\n                fileName: \"/Users/mlalouli/Desktop/wordle-meryem-lalouli/src/pages/components/Keyboard.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mlalouli/Desktop/wordle-meryem-lalouli/src/pages/components/Keyboard.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = Keyboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Keyboard);\nvar _c;\n$RefreshReg$(_c, \"Keyboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9LZXlib2FyZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUI7QUFFekIsU0FBU0M7SUFDTCxNQUFNQyxRQUFRO1FBQUM7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7S0FBSTtJQUNoRSxNQUFNQyxRQUFRO1FBQUM7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO0tBQUk7SUFDM0QsTUFBTUMsUUFBUTtRQUFDO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO0tBQUk7SUFDbkQscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFBU0osTUFBTUssR0FBRyxDQUFDLENBQUNDLE9BQVM7Ozs7OzswQkFDNUMsOERBQUNIO2dCQUFJQyxXQUFVOzs7Ozs7MEJBQ2YsOERBQUNEO2dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7QUFHdkI7S0FYU0w7QUFhVCwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY29tcG9uZW50cy9LZXlib2FyZC5qcz8yYjMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gS2V5Ym9hcmQoKSB7XG4gICAgY29uc3Qga2V5czEgPSBbXCJRXCIgLFwiV1wiICxcIkVcIiAsXCJSXCIgLFwiVFwiICxcIllcIiAsXCJVXCIgLFwiSVwiICxcIk9cIiAsXCJQXCJdO1xuICAgIGNvbnN0IGtleXMyID0gW1wiQVwiICxcIlNcIiAsXCJEXCIgLFwiRlwiICxcIkdcIiAsXCJIXCIgLFwiSlwiICxcIktcIiAsXCJMXCJdO1xuICAgIGNvbnN0IGtleXMzID0gW1wiWlwiICxcIlhcIiAsXCJDXCIgLFwiVlwiICxcIkJcIiAsXCJOXCIgLFwiTVwiXTtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdrZXlib2FyZCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5lMSc+e2tleXMxLm1hcCgoa2V5KSA9PiB7fSl9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5lMic+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5lMyc+PC9kaXY+XG4gICAgPC9kaXY+XG4gICkgXG59XG5cbmV4cG9ydCBkZWZhdWx0IEtleWJvYXJkIl0sIm5hbWVzIjpbIlJlYWN0IiwiS2V5Ym9hcmQiLCJrZXlzMSIsImtleXMyIiwia2V5czMiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/components/Keyboard.js\n"));

/***/ })

});