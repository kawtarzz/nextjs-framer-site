"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"0db47f71a4cd\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzgyMzYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIwZGI0N2Y3MWE0Y2RcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/globals.css */ \"(app-pages-browser)/./app/globals.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_HelloHero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/HelloHero */ \"(app-pages-browser)/./app/components/HelloHero.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Card */ \"(app-pages-browser)/./app/components/Card.tsx\");\n/* harmony import */ var _components_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/data */ \"(app-pages-browser)/./app/components/data.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const greeting = \"Hello\";\n    const [toggleCard, setToggleCard] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleToggleCard = ()=>{\n        setToggleCard(!toggleCard);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"section\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hello app container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                        className: \"box\",\n                        onClick: handleToggleCard,\n                        initial: {\n                            opacity: 0,\n                            scale: 1.8\n                        },\n                        animate: {\n                            opacity: 1,\n                            scale: 1,\n                            x: [\n                                0,\n                                80,\n                                0\n                            ]\n                        },\n                        whileHover: {\n                            scale: 0.9\n                        },\n                        whileTap: {\n                            scale: 1.2\n                        },\n                        transition: {\n                            duration: 0.5,\n                            delay: 0.5,\n                            ease: [\n                                0,\n                                0.21,\n                                0.2,\n                                1.01\n                            ],\n                            scale: {\n                                type: \"spring\",\n                                damping: 5,\n                                stiffness: 100,\n                                restDelta: 0.001\n                            }\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\page.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    greeting.split(\"\").map((char, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.span, {\n                            className: \"text-6xl lg:text-6xl font-bold\",\n                            initial: {\n                                opacity: 0,\n                                scale: 1.5\n                            },\n                            animate: {\n                                opacity: 1,\n                                scale: 1,\n                                x: [\n                                    null,\n                                    40,\n                                    10\n                                ]\n                            },\n                            transition: {\n                                duration: 0.5,\n                                delay: 0.7 + index / 10,\n                                ease: [\n                                    0,\n                                    0.71,\n                                    0.2,\n                                    1.01\n                                ],\n                                scale: {\n                                    type: \"spring\",\n                                    damping: 5,\n                                    stiffness: 100,\n                                    restDelta: 0.001\n                                }\n                            },\n                            children: char\n                        }, char + \"-\" + index, false, {\n                            fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\page.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this)),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\page.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HelloHero__WEBPACK_IMPORTED_MODULE_3__.HelloHero, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\page.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            toggleCard && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_4__.CardList, {\n                projects: _components_data__WEBPACK_IMPORTED_MODULE_5__.projects\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\page.tsx\",\n                lineNumber: 63,\n                columnNumber: 22\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\page.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"5ashEACbikuw4Bk6Vb/zZAZ/Mx4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUMyQjtBQUN3QjtBQUNBO0FBQ1o7QUFDTTtBQUNBO0FBRTlCLFNBQVNNOztJQUN0QixNQUFNQyxXQUFXO0lBRWpCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNUyxtQkFBbUI7UUFDdkJELGNBQWMsQ0FBQ0Q7SUFDakI7SUFFQSxxQkFDRSw4REFBQ0c7UUFBS0MsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ1QsaURBQU1BLENBQUNVLEdBQUc7d0JBQ1RELFdBQVU7d0JBQ1ZFLFNBQVNKO3dCQUNUSyxTQUFTOzRCQUFFQyxTQUFTOzRCQUFHQyxPQUFPO3dCQUFJO3dCQUNsQ0MsU0FBUzs0QkFBRUYsU0FBUzs0QkFBR0MsT0FBTzs0QkFBR0UsR0FBRztnQ0FBQztnQ0FBRztnQ0FBSTs2QkFBRTt3QkFBQzt3QkFDL0NDLFlBQVk7NEJBQUVILE9BQU87d0JBQUk7d0JBQ3pCSSxVQUFVOzRCQUFFSixPQUFPO3dCQUFJO3dCQUN2QkssWUFBWTs0QkFDVkMsVUFBVTs0QkFDVkMsT0FBTzs0QkFDUEMsTUFBTTtnQ0FBQztnQ0FBRztnQ0FBTTtnQ0FBSzs2QkFBSzs0QkFDMUJSLE9BQU87Z0NBQ0xTLE1BQU07Z0NBQ05DLFNBQVM7Z0NBQ1RDLFdBQVc7Z0NBQ1hDLFdBQVc7NEJBQ2I7d0JBQ0Y7Ozs7OztvQkFFRHRCLFNBQVN1QixLQUFLLENBQUMsSUFBSUMsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUM3Qiw4REFBQzlCLGlEQUFNQSxDQUFDK0IsSUFBSTs0QkFFVnRCLFdBQVU7NEJBQ1ZHLFNBQVM7Z0NBQUVDLFNBQVM7Z0NBQUdDLE9BQU87NEJBQUk7NEJBQ2xDQyxTQUFTO2dDQUFFRixTQUFTO2dDQUFHQyxPQUFPO2dDQUFHRSxHQUFHO29DQUFDO29DQUFNO29DQUFJO2lDQUFHOzRCQUFDOzRCQUNuREcsWUFBWTtnQ0FDVkMsVUFBVTtnQ0FDVkMsT0FBTyxNQUFNUyxRQUFRO2dDQUNyQlIsTUFBTTtvQ0FBQztvQ0FBRztvQ0FBTTtvQ0FBSztpQ0FBSztnQ0FDMUJSLE9BQU87b0NBQ0xTLE1BQU07b0NBQ05DLFNBQVM7b0NBQ1RDLFdBQVc7b0NBQ1hDLFdBQVc7Z0NBQ2I7NEJBQ0Y7c0NBRUNHOzJCQWhCSUEsT0FBTyxNQUFNQzs7Ozs7b0JBa0JsQjs7Ozs7OzswQkFFTiw4REFBQy9CLDREQUFTQTs7Ozs7WUFDVE0sNEJBQWMsOERBQUNKLHNEQUFRQTtnQkFBQ0MsVUFBVUEsc0RBQVFBOzs7Ozs7Ozs7Ozs7QUFHakQ7R0F6RHdCQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFwiQC9hcHAvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSGVsbG9IZXJvIH0gZnJvbSBcIi4vY29tcG9uZW50cy9IZWxsb0hlcm9cIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHsgQ2FyZExpc3QgfSBmcm9tIFwiLi9jb21wb25lbnRzL0NhcmRcIjtcclxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9jb21wb25lbnRzL2RhdGFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgZ3JlZXRpbmcgPSBcIkhlbGxvXCI7XHJcblxyXG4gIGNvbnN0IFt0b2dnbGVDYXJkLCBzZXRUb2dnbGVDYXJkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlQ2FyZCA9ICgpID0+IHtcclxuICAgIHNldFRvZ2dsZUNhcmQoIXRvZ2dsZUNhcmQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVsbG8gYXBwIGNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3hcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlVG9nZ2xlQ2FyZH1cclxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgc2NhbGU6IDEuOCB9fVxyXG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCBzY2FsZTogMSwgeDogWzAsIDgwLCAwXSB9fVxyXG4gICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMC45IH19XHJcbiAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMS4yIH19XHJcbiAgICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjUsXHJcbiAgICAgICAgICAgIGRlbGF5OiAwLjUsXHJcbiAgICAgICAgICAgIGVhc2U6IFswLCAwLjIxLCAwLjIsIDEuMDFdLFxyXG4gICAgICAgICAgICBzY2FsZToge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwic3ByaW5nXCIsXHJcbiAgICAgICAgICAgICAgZGFtcGluZzogNSxcclxuICAgICAgICAgICAgICBzdGlmZm5lc3M6IDEwMCxcclxuICAgICAgICAgICAgICByZXN0RGVsdGE6IDAuMDAxLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtncmVldGluZy5zcGxpdChcIlwiKS5tYXAoKGNoYXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8bW90aW9uLnNwYW5cclxuICAgICAgICAgICAga2V5PXtjaGFyICsgXCItXCIgKyBpbmRleH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC02eGwgbGc6dGV4dC02eGwgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMS41IH19XHJcbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgc2NhbGU6IDEsIHg6IFtudWxsLCA0MCwgMTBdIH19XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3tcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogMC41LFxyXG4gICAgICAgICAgICAgIGRlbGF5OiAwLjcgKyBpbmRleCAvIDEwLFxyXG4gICAgICAgICAgICAgIGVhc2U6IFswLCAwLjcxLCAwLjIsIDEuMDFdLFxyXG4gICAgICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInNwcmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgZGFtcGluZzogNSxcclxuICAgICAgICAgICAgICAgIHN0aWZmbmVzczogMTAwLFxyXG4gICAgICAgICAgICAgICAgcmVzdERlbHRhOiAwLjAwMSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hhcn1cclxuICAgICAgICAgIDwvbW90aW9uLnNwYW4+XHJcbiAgICAgICAgKSl9e1wiIFwifVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEhlbGxvSGVybyAvPlxyXG4gICAgICB7dG9nZ2xlQ2FyZCAmJiA8Q2FyZExpc3QgcHJvamVjdHM9e3Byb2plY3RzfSAvPn1cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSGVsbG9IZXJvIiwibW90aW9uIiwiQ2FyZExpc3QiLCJwcm9qZWN0cyIsIkhvbWUiLCJncmVldGluZyIsInRvZ2dsZUNhcmQiLCJzZXRUb2dnbGVDYXJkIiwiaGFuZGxlVG9nZ2xlQ2FyZCIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJvbkNsaWNrIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJzY2FsZSIsImFuaW1hdGUiLCJ4Iiwid2hpbGVIb3ZlciIsIndoaWxlVGFwIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJlYXNlIiwidHlwZSIsImRhbXBpbmciLCJzdGlmZm5lc3MiLCJyZXN0RGVsdGEiLCJzcGxpdCIsIm1hcCIsImNoYXIiLCJpbmRleCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});