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

/***/ "./Components/Navbar/RightContent/RigthContent.tsx":
/*!*********************************************************!*\
  !*** ./Components/Navbar/RightContent/RigthContent.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Modal_Auth_AuthModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Modal/Auth/AuthModal */ \"./Modal/Auth/AuthModal.tsx\");\n/* harmony import */ var _AuthButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthButtons */ \"./Components/Navbar/RightContent/AuthButtons.tsx\");\n\n\n\n\n\nconst RigthContent = (param)=>{\n    let { user  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal_Auth_AuthModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/grigor/Desktop/testt/Components/Navbar/RightContent/RigthContent.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                justify: \"center\",\n                align: \"center\",\n                children: user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    children: \"Logout\"\n                }, void 0, false, {\n                    fileName: \"/home/grigor/Desktop/testt/Components/Navbar/RightContent/RigthContent.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AuthButtons__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/grigor/Desktop/testt/Components/Navbar/RightContent/RigthContent.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 43\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/grigor/Desktop/testt/Components/Navbar/RightContent/RigthContent.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = RigthContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RigthContent);\nvar _c;\n$RefreshReg$(_c, \"RigthContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL05hdmJhci9SaWdodENvbnRlbnQvUmlndGhDb250ZW50LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQXlEO0FBQ3RCO0FBQ21CO0FBQ2Q7QUFNeEMsTUFBTUssZUFBNEMsU0FBYztRQUFiLEVBQUVDLEtBQUksRUFBRTtJQUN6RCxxQkFDRTs7MEJBQ0UsOERBQUNILDZEQUFTQTs7Ozs7MEJBQ1YsOERBQUNGLGtEQUFJQTtnQkFBQ00sU0FBUTtnQkFBU0MsT0FBTTswQkFDMUJGLHFCQUFPLDhEQUFDTixvREFBTUE7OEJBQUM7Ozs7OzhDQUFrQiw4REFBQ0ksb0RBQVdBOzs7OzZCQUFHOzs7Ozs7OztBQUl6RDtLQVRNQztBQVVOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvTmF2YmFyL1JpZ2h0Q29udGVudC9SaWd0aENvbnRlbnQudHN4P2UzY2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBEaXZpZGVyLCBGbGV4IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2UgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBdXRoTW9kYWwgZnJvbSBcIi4uLy4uLy4uL01vZGFsL0F1dGgvQXV0aE1vZGFsXCI7XG5pbXBvcnQgQXV0aEJ1dHRvbnMgZnJvbSBcIi4vQXV0aEJ1dHRvbnNcIjtcblxudHlwZSBSaWd0aENvbnRlbnRQcm9wcyA9IHtcbiAgdXNlcjogYW55O1xufTtcblxuY29uc3QgUmlndGhDb250ZW50OiBSZWFjdC5GQzxSaWd0aENvbnRlbnRQcm9wcz4gPSAoeyB1c2VyIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEF1dGhNb2RhbCAvPlxuICAgICAgPEZsZXgganVzdGlmeT1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIHt1c2VyID8gPEJ1dHRvbj5Mb2dvdXQ8L0J1dHRvbj4gOiA8QXV0aEJ1dHRvbnMgLz59XG4gICAgICA8L0ZsZXg+XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUmlndGhDb250ZW50O1xuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkZsZXgiLCJSZWFjdCIsIkF1dGhNb2RhbCIsIkF1dGhCdXR0b25zIiwiUmlndGhDb250ZW50IiwidXNlciIsImp1c3RpZnkiLCJhbGlnbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Navbar/RightContent/RigthContent.tsx\n"));

/***/ })

});