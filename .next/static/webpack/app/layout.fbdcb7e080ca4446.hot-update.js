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

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"cd4a3007891d\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzgyMzYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJjZDRhMzAwNzg5MWRcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/Menu.tsx":
/*!*********************************!*\
  !*** ./app/components/Menu.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/globals.css */ \"(app-pages-browser)/./app/globals.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-brands-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _app_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/logo.svg */ \"(app-pages-browser)/./app/logo.svg\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst itemVariants = {\n    open: {\n        opacity: 1,\n        y: 0,\n        transition: {\n            type: \"spring\",\n            stiffness: 300,\n            damping: 24\n        }\n    },\n    closed: {\n        opacity: 0,\n        y: 20,\n        transition: {\n            duration: 0.2\n        }\n    }\n};\nfunction Menu() {\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleResize = ()=>{\n        if (window.innerWidth < 768) {\n            setIsMobile(true);\n        } else {\n            setIsMobile(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        handleResize();\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    src: _app_logo_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                    alt: \"Kawtar Logo\",\n                    className: \"logo\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\components\\\\Menu.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                isMobile ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MobileMenu, {\n                    isOpen: isOpen,\n                    setIsOpen: setIsOpen\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\components\\\\Menu.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavBar, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\components\\\\Menu.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\components\\\\Menu.tsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Menu, \"Vud/DCfgAO0lBClTbxkFV6Amq8k=\");\n_c = Menu;\nconst MobileMenu = (param)=>{\n    let { isOpen, setIsOpen } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.nav, {\n            initial: false,\n            animate: isOpen ? \"open\" : \"closed\",\n            className: \"menu\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.button, {\n                    whileTap: {\n                        scale: 0.97\n                    },\n                    onClick: ()=>setIsOpen(!isOpen),\n                    children: [\n                        \"Menu\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                            variants: {\n                                open: {\n                                    rotate: 180\n                                },\n                                closed: {\n                                    rotate: 0\n                                }\n                            },\n                            transition: {\n                                duration: 0.2\n                            },\n                            style: {\n                                originY: 0.55\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                width: \"15\",\n                                height: \"10\",\n                                viewBox: \"0 1 20 20\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M0 7 L 20 7 L 10 16\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\components\\\\Menu.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\components\\\\Menu.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\components\\\\Menu.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\components\\\\Menu.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.ul, {\n                    variants: {\n                        open: {\n                            clipPath: \"inset(0% 0% 0% 0% round 10px)\",\n                            transition: {\n                                type: \"spring\",\n                                bounce: 0,\n                                duration: 0.5,\n                                delayChildren: 0.3,\n                                staggerChildren: 0.04\n                            }\n                        },\n                        closed: {\n                            clipPath: \"inset(10% 50% 90% 50% round 10px)\",\n                            transition: {\n                                type: \"spring\",\n                                bounce: 0,\n                                duration: 0.3\n                            }\n                        }\n                    },\n                    style: {\n                        pointerEvents: isOpen ? \"auto\" : \"none\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.li, {\n                            variants: itemVariants,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\components\\\\Menu.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\components\\\\Menu.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.li, {\n                            variants: itemVariants,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/projects\",\n                                children: \"Projects\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\components\\\\Menu.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\components\\\\Menu.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.li, {\n                            variants: itemVariants,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/about\",\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\components\\\\Menu.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\components\\\\Menu.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.li, {\n                            variants: itemVariants,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/resume\",\n                                children: \"Resume\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\components\\\\Menu.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\components\\\\Menu.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.li, {\n                            variants: itemVariants,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/contact\",\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\components\\\\Menu.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\components\\\\Menu.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\components\\\\Menu.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\components\\\\Menu.tsx\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c1 = MobileMenu;\nconst NavBar = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"nav-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    className: \"nav-link\",\n                    href: \"/resume\",\n                    children: \"Resume\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\components\\\\Menu.tsx\",\n                    lineNumber: 132,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    className: \"nav-link\",\n                    href: \"/contact\",\n                    children: \"Contact\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\components\\\\Menu.tsx\",\n                    lineNumber: 135,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    className: \"nav-link\",\n                    href: \"/about\",\n                    children: \"About\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\components\\\\Menu.tsx\",\n                    lineNumber: 138,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    className: \"nav-link\",\n                    href: \"/projects\",\n                    children: \"Projects\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\components\\\\Menu.tsx\",\n                    lineNumber: 141,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"social-icons\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"https://www.linkedin.com/in/kawtara\",\n                            className: \"nav-link\",\n                            target: \"_blank\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faLinkedin\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\components\\\\Menu.tsx\",\n                                lineNumber: 150,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\components\\\\Menu.tsx\",\n                            lineNumber: 145,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://www.github.com/kawtarzz\",\n                            className: \"nav-link\",\n                            target: \"_blank\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faGithub\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\components\\\\Menu.tsx\",\n                                lineNumber: 157,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\components\\\\Menu.tsx\",\n                            lineNumber: 152,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\components\\\\Menu.tsx\",\n                    lineNumber: 144,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kawta\\\\workspace\\\\nextjs-react-app\\\\app\\\\components\\\\Menu.tsx\",\n            lineNumber: 131,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c2 = NavBar;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Menu\");\n$RefreshReg$(_c1, \"MobileMenu\");\n$RefreshReg$(_c2, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL01lbnUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMyQjtBQUMyQztBQUNyQjtBQUNwQjtBQUM2QztBQUNUO0FBQ2xDO0FBQ0c7QUFFbEMsTUFBTVMsZUFBeUI7SUFDN0JDLE1BQU07UUFDSkMsU0FBUztRQUNUQyxHQUFHO1FBQ0hDLFlBQVk7WUFBRUMsTUFBTTtZQUFVQyxXQUFXO1lBQUtDLFNBQVM7UUFBRztJQUM1RDtJQUNBQyxRQUFRO1FBQUVOLFNBQVM7UUFBR0MsR0FBRztRQUFJQyxZQUFZO1lBQUVLLFVBQVU7UUFBSTtJQUFFO0FBQzdEO0FBT2UsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHcEIsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDcUIsVUFBVUMsWUFBWSxHQUFHdEIsK0NBQVFBLENBQUM7SUFFekMsTUFBTXVCLGVBQWU7UUFDbkIsSUFBSUMsT0FBT0MsVUFBVSxHQUFHLEtBQUs7WUFDM0JILFlBQVk7UUFDZCxPQUFPO1lBQ0xBLFlBQVk7UUFDZDtJQUNGO0lBRUF2QixnREFBU0EsQ0FBQztRQUNSd0I7UUFDQUMsT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUg7UUFDbEMsT0FBTyxJQUFNQyxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVSjtJQUNwRCxHQUFHLEVBQUU7SUFFTCxxQkFDRTtrQkFDRSw0RUFBQ0s7OzhCQUNDLDhEQUFDdEIsbURBQUtBO29CQUFDdUIsS0FBS3RCLHFEQUFJQTtvQkFBRXVCLEtBQUk7b0JBQWNDLFdBQVU7Ozs7OztnQkFFN0NWLHlCQUNDLDhEQUFDVztvQkFBV2IsUUFBUUE7b0JBQVFDLFdBQVdBOzs7Ozt5Q0FFdkMsOERBQUNhOzs7Ozs7Ozs7Ozs7QUFLWDtHQS9Cd0JmO0tBQUFBO0FBaUN4QixNQUFNYyxhQUF3QztRQUFDLEVBQUViLE1BQU0sRUFBRUMsU0FBUyxFQUFFO0lBQ2xFLHFCQUNFO2tCQUNFLDRF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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvTWVudS50c3g/YWNmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFwiQC9hcHAvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1vdGlvbiwgVmFyaWFudHMgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IGZhR2l0aHViLCBmYUxpbmtlZGluIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIkAvYXBwL2xvZ28uc3ZnXCI7XHJcblxyXG5jb25zdCBpdGVtVmFyaWFudHM6IFZhcmlhbnRzID0ge1xyXG4gIG9wZW46IHtcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICB5OiAwLFxyXG4gICAgdHJhbnNpdGlvbjogeyB0eXBlOiBcInNwcmluZ1wiLCBzdGlmZm5lc3M6IDMwMCwgZGFtcGluZzogMjQgfSxcclxuICB9LFxyXG4gIGNsb3NlZDogeyBvcGFjaXR5OiAwLCB5OiAyMCwgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC4yIH0gfSxcclxufTtcclxuXHJcbmludGVyZmFjZSBNb2JpbGVNZW51UHJvcHMge1xyXG4gIGlzT3BlbjogYm9vbGVhbjtcclxuICBzZXRJc09wZW46IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudSgpIHtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcclxuICAgICAgc2V0SXNNb2JpbGUodHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRJc01vYmlsZShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGhhbmRsZVJlc2l6ZSgpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEltYWdlIHNyYz17TG9nb30gYWx0PVwiS2F3dGFyIExvZ29cIiBjbGFzc05hbWU9XCJsb2dvXCIgLz5cclxuXHJcbiAgICAgICAge2lzTW9iaWxlID8gKFxyXG4gICAgICAgICAgPE1vYmlsZU1lbnUgaXNPcGVuPXtpc09wZW59IHNldElzT3Blbj17c2V0SXNPcGVufSAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBNb2JpbGVNZW51OiBSZWFjdC5GQzxNb2JpbGVNZW51UHJvcHM+ID0gKHsgaXNPcGVuLCBzZXRJc09wZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8bW90aW9uLm5hdlxyXG4gICAgICAgIGluaXRpYWw9e2ZhbHNlfVxyXG4gICAgICAgIGFuaW1hdGU9e2lzT3BlbiA/IFwib3BlblwiIDogXCJjbG9zZWRcIn1cclxuICAgICAgICBjbGFzc05hbWU9XCJtZW51XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxtb3Rpb24uYnV0dG9uXHJcbiAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45NyB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIE1lbnVcclxuICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgIHZhcmlhbnRzPXt7XHJcbiAgICAgICAgICAgICAgb3BlbjogeyByb3RhdGU6IDE4MCB9LFxyXG4gICAgICAgICAgICAgIGNsb3NlZDogeyByb3RhdGU6IDAgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4yIH19XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG9yaWdpblk6IDAuNTUgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAxIDIwIDIwXCI+XHJcbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0wIDcgTCAyMCA3IEwgMTAgMTZcIiAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8L21vdGlvbi5idXR0b24+XHJcbiAgICAgICAgPG1vdGlvbi51bFxyXG4gICAgICAgICAgdmFyaWFudHM9e3tcclxuICAgICAgICAgICAgb3Blbjoge1xyXG4gICAgICAgICAgICAgIGNsaXBQYXRoOiBcImluc2V0KDAlIDAlIDAlIDAlIHJvdW5kIDEwcHgpXCIsXHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzcHJpbmdcIixcclxuICAgICAgICAgICAgICAgIGJvdW5jZTogMCxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjUsXHJcbiAgICAgICAgICAgICAgICBkZWxheUNoaWxkcmVuOiAwLjMsXHJcbiAgICAgICAgICAgICAgICBzdGFnZ2VyQ2hpbGRyZW46IDAuMDQsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2xvc2VkOiB7XHJcbiAgICAgICAgICAgICAgY2xpcFBhdGg6IFwiaW5zZXQoMTAlIDUwJSA5MCUgNTAlIHJvdW5kIDEwcHgpXCIsXHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzcHJpbmdcIixcclxuICAgICAgICAgICAgICAgIGJvdW5jZTogMCxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjMsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBzdHlsZT17eyBwb2ludGVyRXZlbnRzOiBpc09wZW4gPyBcImF1dG9cIiA6IFwibm9uZVwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG1vdGlvbi5saSB2YXJpYW50cz17aXRlbVZhcmlhbnRzfT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5Ib21lPC9hPlxyXG4gICAgICAgICAgPC9tb3Rpb24ubGk+XHJcbiAgICAgICAgICA8bW90aW9uLmxpIHZhcmlhbnRzPXtpdGVtVmFyaWFudHN9PlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL3Byb2plY3RzXCI+UHJvamVjdHM8L2E+XHJcbiAgICAgICAgICA8L21vdGlvbi5saT5cclxuICAgICAgICAgIDxtb3Rpb24ubGkgdmFyaWFudHM9e2l0ZW1WYXJpYW50c30+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvYT5cclxuICAgICAgICAgIDwvbW90aW9uLmxpPlxyXG4gICAgICAgICAgPG1vdGlvbi5saSB2YXJpYW50cz17aXRlbVZhcmlhbnRzfT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9yZXN1bWVcIj5SZXN1bWU8L2E+XHJcbiAgICAgICAgICA8L21vdGlvbi5saT5cclxuICAgICAgICAgIDxtb3Rpb24ubGkgdmFyaWFudHM9e2l0ZW1WYXJpYW50c30+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvY29udGFjdFwiPkNvbnRhY3Q8L2E+XHJcbiAgICAgICAgICA8L21vdGlvbi5saT5cclxuICAgICAgICA8L21vdGlvbi51bD5cclxuICAgICAgPC9tb3Rpb24ubmF2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IE5hdkJhciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL3Jlc3VtZVwiPlxyXG4gICAgICAgICAgUmVzdW1lXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9jb250YWN0XCI+XHJcbiAgICAgICAgICBDb250YWN0XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgQWJvdXRcclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL3Byb2plY3RzXCI+XHJcbiAgICAgICAgICBQcm9qZWN0c1xyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1pY29uc1wiPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9rYXd0YXJhXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmtcIlxyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTGlua2VkaW59IC8+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9rYXd0YXJ6elwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCJcclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdpdGh1Yn0gLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJtb3Rpb24iLCJMaW5rIiwiZmFHaXRodWIiLCJmYUxpbmtlZGluIiwiRm9udEF3ZXNvbWVJY29uIiwiSW1hZ2UiLCJMb2dvIiwiaXRlbVZhcmlhbnRzIiwib3BlbiIsIm9wYWNpdHkiLCJ5IiwidHJhbnNpdGlvbiIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiY2xvc2VkIiwiZHVyYXRpb24iLCJNZW51IiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiaXNNb2JpbGUiLCJzZXRJc01vYmlsZSIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsInNyYyIsImFsdCIsImNsYXNzTmFtZSIsIk1vYmlsZU1lbnUiLCJOYXZCYXIiLCJuYXYiLCJpbml0aWFsIiwiYW5pbWF0ZSIsImJ1dHRvbiIsIndoaWxlVGFwIiwic2NhbGUiLCJvbkNsaWNrIiwidmFyaWFudHMiLCJyb3RhdGUiLCJzdHlsZSIsIm9yaWdpblkiLCJzdmciLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJwYXRoIiwiZCIsInVsIiwiY2xpcFBhdGgiLCJib3VuY2UiLCJkZWxheUNoaWxkcmVuIiwic3RhZ2dlckNoaWxkcmVuIiwicG9pbnRlckV2ZW50cyIsImxpIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Menu.tsx\n"));

/***/ })

});