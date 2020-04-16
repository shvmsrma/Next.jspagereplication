module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Content.js":
/*!*******************************!*\
  !*** ./components/Content.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Content; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Tabs */ "@material-ui/core/Tabs");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tab */ "@material-ui/core/Tab");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Chip */ "@material-ui/core/Chip");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cards */ "./components/cards.js");
/* harmony import */ var _abc_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./abc.js */ "./components/abc.js");
/* harmony import */ var _portfolios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./portfolios */ "./components/portfolios.js");
var _jsxFileName = "/home/shivam/Warrior@99/truelancerassignment/components/Content.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    marginTop: 20,
    marginRight: 50,
    flexGrow: 1,
    backgroundColor: 'white'
  },
  head: {
    float: 'right'
  }
}));
function Content() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.head,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "About Me"), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "I am an Architect Having 8 years of experience in field ."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "I have already complied some live projects "), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "Planning ,Interior, Exterior ,Building Construction & 3D views "), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, "ARCHITECTURAL & INTERIOR DESIGN SERVICES"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "> Design of built up spaces"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, ">Land...."), __jsx("a", {
    style: {
      float: 'right'
    },
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, " Show more")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      paddingTop: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "My Expertise"), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: classes.ships,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_8___default.a, {
    size: "small",
    label: "PHOTOSHOP",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_8___default.a, {
    size: "small",
    label: "3D MODELLING",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_8___default.a, {
    size: "small",
    label: "ARCHITECTURAL DESIGN",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_8___default.a, {
    size: "small",
    label: "ADOBE PHOTOSHOP",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_8___default.a, {
    size: "small",
    label: "AUTOCAD",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_8___default.a, {
    size: "small",
    label: "AUTODESK 3D STUDIO MAX",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_8___default.a, {
    size: "small",
    label: "AUTODESK REVIT",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_8___default.a, {
    size: "small",
    label: "SKETCHUP",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_8___default.a, {
    size: "small",
    label: "MICROSOFT OFFICE",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_8___default.a, {
    size: "small",
    label: "AUTODESK REVIT ARCHITECTURE",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Explore & Try my Services"), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }), __jsx(_cards__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx(_portfolios__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./components/abc.js":
/*!***************************!*\
  !*** ./components/abc.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return abc; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/shivam/Warrior@99/truelancerassignment/components/abc.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function abc() {
  return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "I am an Architect Having 8 years of experience in field . ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 71
    }
  }), "I have already complied some live projects ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 56
    }
  }), "Planning ,Interior, Exterior ,Building Construction & 3D views ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 64
    }
  }), "ARCHITECTURAL & INTERIOR DESIGN SERVICES ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 42
    }
  }), "> Design of built up spaces ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 29
    }
  }), "> Land use & Town planning ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 28
    }
  }), "> Residential ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 15
    }
  }), "> Institutional ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }), "> Industrial", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }), "> Hospitality \u2013 Hotels, Motels, Resorts etc.", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 45
    }
  }), "> Commercial > Recreational", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 28
    }
  }), "I HAVE EXCELLENT SKILLS IN 2D DRAWING AND 3D MODELLING, USING ACTIVLY", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 70
    }
  }), ">Autocad, ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }), ">Revit, ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), ">Google sketchup,", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 18
    }
  }), ">3d max, ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 10
    }
  }), ">Adobe illustrator", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 19
    }
  }), ">Indesign and", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 14
    }
  }), "> Photoshop", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 12
    }
  }), ">Lumion", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 8
    }
  }), ">V-Ray", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), ">MS office for Presentations.", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 30
    }
  }));
}

/***/ }),

/***/ "./components/cards.js":
/*!*****************************!*\
  !*** ./components/cards.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cards; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "@material-ui/core/CardActionArea");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_image1_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/image1.jpg */ "./images/image1.jpg");
/* harmony import */ var _images_image1_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_image1_jpg__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/home/shivam/Warrior@99/truelancerassignment/components/cards.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    maxWidth: 200,
    marginLeft: 10,
    marginRight: 10
  },
  media: {
    height: 80
  }
});
function Cards() {
  const classes = useStyles();
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    container: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    xs: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.media,
    image: _images_image1_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
    title: "Contemplative Reptile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "CONVERT YOUR AUTOCAD 2D ARCHITECTURAL PLANS TO RENDERED PLANS USING PHOTOSHOP,"))), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      float: 'left',
      margin: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "Be The First")), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: {
      overflow: 'hidden',
      margin: 10,
      backgroundColor: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "$30"))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    xs: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.media,
    image: _images_image1_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
    title: "Contemplative Reptile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, "CONVERT YOUR AUTOCAD 2D ARCHITECTURAL PLANS TO RENDERED PLANS USING PHOTOSHOP,"))), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      float: 'left',
      margin: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, "Be The First")), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: {
      overflow: 'hidden',
      margin: 10,
      backgroundColor: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, "$30"))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    xs: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.media,
    image: _images_image1_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
    title: "Contemplative Reptile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, "CONVERT YOUR AUTOCAD 2D ARCHITECTURAL PLANS TO RENDERED PLANS USING PHOTOSHOP,"))), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      float: 'left',
      margin: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, "Be The First")), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: {
      overflow: 'hidden',
      margin: 10,
      backgroundColor: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, "$30"))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    xs: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.media,
    image: _images_image1_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
    title: "Contemplative Reptile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, "CONVERT YOUR AUTOCAD 2D ARCHITECTURAL PLANS TO RENDERED PLANS USING PHOTOSHOP,"))), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      float: 'left',
      margin: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, "Be The First")), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: {
      overflow: 'hidden',
      margin: 10,
      backgroundColor: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, "$30"))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    xs: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.media,
    image: _images_image1_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
    title: "Contemplative Reptile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  }, "CONVERT YOUR AUTOCAD 2D ARCHITECTURAL PLANS TO RENDERED PLANS USING PHOTOSHOP,"))), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      float: 'left',
      margin: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  }, "Be The First")), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: {
      overflow: 'hidden',
      margin: 10,
      backgroundColor: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }
  }, "$30"))))));
}

/***/ }),

/***/ "./components/endorsements.js":
/*!************************************!*\
  !*** ./components/endorsements.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Endorsements; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/1.jpg */ "./images/1.jpg");
/* harmony import */ var _images_1_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_1_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/2.jpg */ "./images/2.jpg");
/* harmony import */ var _images_2_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_2_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/3.jpg */ "./images/3.jpg");
/* harmony import */ var _images_3_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_3_jpg__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/shivam/Warrior@99/truelancerassignment/components/endorsements.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12)
  }
}));
function Endorsements() {
  const classes = useStyles();
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "My Endorsements"), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: {
      backgroundColor: '#55BDAF',
      display: 'table',
      margin: '0 auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "Endorse Sohail")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    alignItems: "flex-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemAvatar"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    alt: "Remy Sharp",
    src: _images_2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    className: classes.large,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    primary: "HI YOU PORTFOLIO WAS NICE",
    secondary: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      component: "span",
      variant: "body2",
      className: classes.inline,
      color: "textPrimary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 15
      }
    }, "by Md on 03 Mar, 2020")),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    alignItems: "flex-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemAvatar"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    alt: "Remy Sharp",
    src: _images_3_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    className: classes.large,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    primary: "His sketchup is amazing. I love his sketch.",
    secondary: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      component: "span",
      variant: "body2",
      className: classes.inline,
      color: "textPrimary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 15
      }
    }), "by Jack on 21 Dec, 2019"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    alignItems: "flex-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemAvatar"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    alt: "Remy Sharp",
    src: _images_1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    className: classes.large,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    primary: "Hi Sohail, your Portfolio is incredible, i like that. Sohail em depressed, No one is viewing my Service, please help :'( from a Pakistani. www.truelancer(dot)com/freelance-service/get-your-video-edited-color-corrected-stabilized-shaking-get-promotional-videos-169635 Replacce (dot) with . thanks",
    secondary: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      component: "span",
      variant: "body2",
      className: classes.inline,
      color: "textPrimary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 15
      }
    }), " by Hamdan on 26 Oct, 2019"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: {
      backgroundColor: '#55BDAF',
      display: 'table',
      margin: '0 auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, "Show More"));
}

/***/ }),

/***/ "./components/footer1.js":
/*!*******************************!*\
  !*** ./components/footer1.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer1; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/shivam/Warrior@99/truelancerassignment/components/footer1.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Footer1() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 6
    }
  }, __jsx("h4", {
    style: {
      marginLeft: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "Search Best Freelancers in your city"), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 1,
    style: {
      margin: 'auto'
    },
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    style: {
      fontSize: 14
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "Freelancers in Delhi ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    style: {
      fontSize: 14
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "Freelancers in Delhi ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    style: {
      fontSize: 14
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Freelancers in Delhi ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    style: {
      fontSize: 14
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "Freelancers in Delhi ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    style: {
      fontSize: 14
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "Freelancers in Delhi ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    style: {
      fontSize: 14
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "Freelancers in Delhi ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    style: {
      fontSize: 14
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "Freelancers in Delhi ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    style: {
      fontSize: 14
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "Freelancers in Delhi ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    style: {
      fontSize: 14
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "Freelancers in Delhi ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    style: {
      fontSize: 14
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, "Freelancers in Delhi "))), __jsx("h4", {
    style: {
      marginLeft: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "Top Freelancers by skills"), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 2,
    style: {
      marginLeft: 'auto'
    },
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    style: {
      fontSize: 14
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "Freelancers in Delhi ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    style: {
      fontSize: 14
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "Freelancers in Delhi ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    style: {
      fontSize: 14
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Freelancers in Delhi ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    style: {
      fontSize: 14
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, "Freelancers in Delhi ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    style: {
      fontSize: 14
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, "Freelancers in Delhi ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    style: {
      fontSize: 14
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, "Freelancers in Delhi ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    style: {
      fontSize: 14
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, "Freelancers in Delhi ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    style: {
      fontSize: 14
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, "Freelancers in Delhi ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    style: {
      fontSize: 14
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, "Freelancers in Delhi ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    style: {
      fontSize: 14
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, "Freelancers in Delhi "))), __jsx("h4", {
    style: {
      marginLeft: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, "Top Freelancers by skills and city"), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 2,
    style: {
      marginLeft: 'auto'
    },
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    style: {
      fontSize: 14
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, "Freelancers in Delhi ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    style: {
      fontSize: 14
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, "Freelancers in Delhi ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    style: {
      fontSize: 14
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, "Freelancers in Delhi ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    style: {
      fontSize: 14
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, "Freelancers in Delhi ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    style: {
      fontSize: 14
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, "Freelancers in Delhi ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    style: {
      fontSize: 14
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, "Freelancers in Delhi ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    style: {
      fontSize: 14
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, "Freelancers in Delhi ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    style: {
      fontSize: 14
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, "Freelancers in Delhi ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    style: {
      fontSize: 14
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, "Freelancers in Delhi ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    style: {
      fontSize: 14
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }, "Freelancers in Delhi "))));
}

/***/ }),

/***/ "./components/footer2.js":
/*!*******************************!*\
  !*** ./components/footer2.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/shivam/Warrior@99/truelancerassignment/components/footer2.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({}));
function Footer2() {
  const classes = useStyles();
  const [dense, setDense] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 4,
    md: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    style: {
      color: 'white',
      textDecoration: 'underline blue'
    },
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, "Useful Links"), __jsx("div", {
    className: classes.demo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    dense: dense,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Mobile App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Startups",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Truelancer Prime",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Affiliate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 19
    }
  }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 4,
    md: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    style: {
      color: 'white',
      textDecoration: 'underline blue'
    },
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, "Useful Links"), __jsx("div", {
    className: classes.demo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    dense: dense,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Mobile App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Startups",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Truelancer Prime",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Affiliate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 4,
    md: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    style: {
      color: 'white',
      textDecoration: 'underline blue'
    },
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, "Useful Links"), __jsx("div", {
    className: classes.demo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    dense: dense,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Mobile App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Startups",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Truelancer Prime",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Affiliate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 19
    }
  }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 4,
    md: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    style: {
      color: 'white',
      textDecoration: 'underline blue'
    },
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, "Useful Links"), __jsx("div", {
    className: classes.demo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    dense: dense,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Mobile App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Startups",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Truelancer Prime",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Affiliate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 19
    }
  }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 4,
    md: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    style: {
      color: 'white',
      textDecoration: 'underline blue'
    },
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  }, "Useful Links"), __jsx("div", {
    className: classes.demo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    dense: dense,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Mobile App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Startups",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Truelancer Prime",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Affiliate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 19
    }
  }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 4,
    md: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    style: {
      color: 'white',
      textDecoration: 'underline blue'
    },
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 11
    }
  }, "Useful Links"), __jsx("div", {
    className: classes.demo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    dense: dense,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Mobile App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Startups",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Truelancer Prime",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Affiliate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 19
    }
  }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 4,
    md: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    style: {
      color: 'white',
      textDecoration: 'underline blue'
    },
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 11
    }
  }, "Useful Links"), __jsx("div", {
    className: classes.demo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    dense: dense,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Mobile App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Startups",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Truelancer Prime",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Affiliate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 19
    }
  }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 4,
    md: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    style: {
      color: 'white',
      textDecoration: 'underline blue'
    },
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 11
    }
  }, "Useful Links"), __jsx("div", {
    className: classes.demo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    dense: dense,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Mobile App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Startups",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Truelancer Prime",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Affiliate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 19
    }
  }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 4,
    md: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    style: {
      color: 'white',
      textDecoration: 'underline blue'
    },
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 11
    }
  }, "Useful Links"), __jsx("div", {
    className: classes.demo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    dense: dense,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Mobile App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Startups",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Truelancer Prime",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Affiliate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 19
    }
  }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 4,
    md: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    style: {
      color: 'white',
      textDecoration: 'underline blue'
    },
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 11
    }
  }, "Useful Links"), __jsx("div", {
    className: classes.demo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    dense: dense,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Mobile App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Startups",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Truelancer Prime",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: 'white'
    },
    primary: "Affiliate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 19
    }
  }))))));
}

/***/ }),

/***/ "./components/headercomponent.js":
/*!***************************************!*\
  !*** ./components/headercomponent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_ShoppingCartOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ShoppingCartOutlined */ "@material-ui/icons/ShoppingCartOutlined");
/* harmony import */ var _material_ui_icons_ShoppingCartOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCartOutlined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_WorkOutline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/WorkOutline */ "@material-ui/icons/WorkOutline");
/* harmony import */ var _material_ui_icons_WorkOutline__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_WorkOutline__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_PersonOutlineOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/PersonOutlineOutlined */ "@material-ui/icons/PersonOutlineOutlined");
/* harmony import */ var _material_ui_icons_PersonOutlineOutlined__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PersonOutlineOutlined__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "@material-ui/core/SvgIcon");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _truelancer_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./truelancer.png */ "./components/truelancer.png");
/* harmony import */ var _truelancer_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_truelancer_png__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/home/shivam/Warrior@99/truelancerassignment/components/headercomponent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));
function Header() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    position: "static",
    style: {
      background: '#24B8B4'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: _truelancer_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "TRUELANCER"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      marginLeft: 300
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      backgroundColor: 'green',
      marginBottom: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, "Post Project")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      marginBottom: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, "Contest")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_ShoppingCartOutlined__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      marginBottom: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, "Buy Services")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_WorkOutline__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      marginBottom: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, "Find Jobs")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_PersonOutlineOutlined__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      marginBottom: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, "Find Freelancers")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.btn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, "Login"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, "Signup")))), __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      backgroundColor: 'white',
      marginLeft: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 19
    }
  }, "OverView")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 19
    }
  }, "PortFolio")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 19
    }
  }, "Services")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 19
    }
  }, "Project History")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 19
    }
  }, "Endorsements"))));
}

/***/ }),

/***/ "./components/portfolios.js":
/*!**********************************!*\
  !*** ./components/portfolios.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Portfolios; });
/* harmony import */ var _images_image1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/image1.jpg */ "./images/image1.jpg");
/* harmony import */ var _images_image1_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_image1_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/shivam/Warrior@99/truelancerassignment/components/portfolios.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  image1: {
    width: 100
  },
  paper1: {
    overflow: 'hidden'
  }
});
function Portfolios() {
  const classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }));
}

/***/ }),

/***/ "./components/projecthistory.js":
/*!**************************************!*\
  !*** ./components/projecthistory.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projecthistory; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_StarRate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/StarRate */ "@material-ui/icons/StarRate");
/* harmony import */ var _material_ui_icons_StarRate__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarRate__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/Rating */ "@material-ui/lab/Rating");
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_PermIdentityTwoTone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/PermIdentityTwoTone */ "@material-ui/icons/PermIdentityTwoTone");
/* harmony import */ var _material_ui_icons_PermIdentityTwoTone__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PermIdentityTwoTone__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_default_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/default.jpg */ "./images/default.jpg");
/* harmony import */ var _images_default_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_default_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "@material-ui/core/LinearProgress");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/shivam/Warrior@99/truelancerassignment/components/projecthistory.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const BorderLinearProgress = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])({
  root: {
    backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["lighten"])('#24B855', 0.5)
  },
  bar: {
    height: 10,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#ff6c5c'
  }
})(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_7___default.a);
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12)
  },
  margin: {
    margin: theme.spacing(1)
  }
}));
function Projecthistory() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "My Project History and feedbacks"), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, "5.0"), __jsx(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_4___default.a, {
    name: "read-only",
    value: "5",
    readOnly: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }), __jsx("div", {
    style: {
      display: 'flex'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, __jsx(_material_ui_icons_PermIdentityTwoTone__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, "723 total"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      float: 'left',
      margin: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_StarRate__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  })), __jsx("div", {
    style: {
      overflow: 'hidden',
      backgroundColor: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx(BorderLinearProgress, {
    className: classes.margin,
    variant: "determinate",
    color: "secondary",
    value: 100,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  })), __jsx("div", {
    style: {
      float: 'left',
      margin: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_StarRate__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  })), __jsx("div", {
    style: {
      overflow: 'hidden',
      backgroundColor: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx(BorderLinearProgress, {
    className: classes.margin,
    variant: "determinate",
    color: "secondary",
    value: 100,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  })), __jsx("div", {
    style: {
      float: 'left',
      margin: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_StarRate__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  })), __jsx("div", {
    style: {
      overflow: 'hidden',
      backgroundColor: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx(BorderLinearProgress, {
    className: classes.margin,
    variant: "determinate",
    color: "secondary",
    value: 100,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  })), __jsx("div", {
    style: {
      float: 'left',
      margin: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_StarRate__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  })), __jsx("div", {
    style: {
      overflow: 'hidden',
      backgroundColor: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, __jsx(BorderLinearProgress, {
    className: classes.margin,
    variant: "determinate",
    color: "secondary",
    value: 100,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  })), __jsx("div", {
    style: {
      float: 'left',
      margin: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_StarRate__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  })), __jsx("div", {
    style: {
      overflow: 'hidden',
      backgroundColor: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, __jsx(BorderLinearProgress, {
    className: classes.margin,
    variant: "determinate",
    color: "secondary",
    value: 100,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    alignItems: "flex-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemAvatar"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    alt: "Remy Sharp",
    src: _images_default_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    className: classes.large,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    primary: "His sketchup is amazing. I love his sketch.",
    secondary: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      component: "span",
      variant: "body2",
      className: classes.inline,
      color: "textPrimary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 15
      }
    }, __jsx("div", {
      style: {
        display: 'flex'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }
    }, __jsx(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_4___default.a, {
      name: "read-only",
      value: "5",
      readOnly: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 13
      }
    }), "for other")), "by Chrissy Sclater on 14 Apr, 2020"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  })), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    alignItems: "flex-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemAvatar"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    alt: "Remy Sharp",
    src: _images_default_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    className: classes.large,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    primary: "His sketchup is amazing. I love his sketch.",
    secondary: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      component: "span",
      variant: "body2",
      className: classes.inline,
      color: "textPrimary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 15
      }
    }, __jsx("div", {
      style: {
        display: 'flex'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }
    }, __jsx(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_4___default.a, {
      name: "read-only",
      value: "5",
      readOnly: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 13
      }
    }), "for other")), "by Chrissy Sclater on 14 Apr, 2020"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }
  })), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    alignItems: "flex-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemAvatar"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    alt: "Remy Sharp",
    src: _images_default_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    className: classes.large,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    primary: "His sketchup is amazing. I love his sketch.",
    secondary: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      component: "span",
      variant: "body2",
      className: classes.inline,
      color: "textPrimary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 15
      }
    }, __jsx("div", {
      style: {
        display: 'flex'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 9
      }
    }, __jsx(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_4___default.a, {
      name: "read-only",
      value: "5",
      readOnly: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 13
      }
    }), "for other")), "by Chrissy Sclater on 14 Apr, 2020"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }))));
}

/***/ }),

/***/ "./components/small.js":
/*!*****************************!*\
  !*** ./components/small.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Smalls; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/shivam/Warrior@99/truelancerassignment/components/small.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Smalls() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("small", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 15
    }
  }, "Home >> Freelancers>>Freelancers in Pakistan>>Freelancers in Lahore>>Sa5Studio"));
}

/***/ }),

/***/ "./components/tabs.js":
/*!****************************!*\
  !*** ./components/tabs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavTabs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Tabs */ "@material-ui/core/Tabs");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tab */ "@material-ui/core/Tab");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Table */ "@material-ui/core/Table");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableBody */ "@material-ui/core/TableBody");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableCell */ "@material-ui/core/TableCell");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "@material-ui/core/TableContainer");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TableHead */ "@material-ui/core/TableHead");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "/home/shivam/Warrior@99/truelancerassignment/components/tabs.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

















function TabPanel(props) {
  const {
    children,
    value,
    index
  } = props,
        other = _objectWithoutProperties(props, ["children", "value", "index"]);

  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, _extends({
    component: "div",
    role: "tabpanel",
    hidden: value !== index,
    id: `nav-tabpanel-${index}`,
    "aria-labelledby": `nav-tab-${index}`
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }), value === index && __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7___default.a, {
    p: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 27
    }
  }, children));
}

TabPanel.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  index: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`
  };
}

function LinkTab(props) {
  return __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({
    component: "a",
    onClick: event => {
      event.preventDefault();
    }
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }));
}

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  table: {
    minWidth: 340
  }
}));
function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    position: "static",
    style: {
      marginTop: 20,
      width: 320
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      float: 'left',
      backgroundColor: 'white'
    },
    value: value,
    onChange: handleChange,
    "aria-label": "nav tabs example",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx(LinkTab, _extends({
    style: {
      color: 'black'
    },
    label: "Seller Stats",
    href: "/drafts"
  }, a11yProps(0), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  })), __jsx(LinkTab, _extends({
    style: {
      color: 'black'
    },
    label: "Buyer Stats",
    href: "/trash"
  }, a11yProps(1), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  })))), __jsx(TabPanel, {
    value: value,
    index: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_11___default.a, {
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_14___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx("h2", {
    style: {
      textAlign: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, "$20/hr"), __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.table,
    "aria-label": "simple table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, "Total Earnings"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    align: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, "741")), __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, "Projects Completed"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    align: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, "1")), __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, "Services Delivered"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    align: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, "4")), __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, "Buyer worked with"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    align: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, "$23310")), __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, "Feedbacks"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    align: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, "97%")), __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, "Followers"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    align: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, "259")), __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, "Total Refund"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    align: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, "3")), __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, "Contest Completed"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    align: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, "0")))), __jsx("p", {
    style: {
      textAlign: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 5
    }
  }, "Member Since ,25 Sep,2017")), __jsx(TabPanel, {
    value: value,
    index: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_11___default.a, {
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_14___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.table,
    "aria-label": "simple table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }, "Total Spent"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    align: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, "$0")), __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, "Projects Posted"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    align: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }, "0")), __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, "Projects Paid"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    align: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, "0")), __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, "Services Purchased"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    align: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }, "0")), __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }, "Sellers worked with"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    align: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  }, "0")), __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }, "Feedbacks"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    align: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }, "0")), __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }, "Followers"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    align: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }
  }, "259")), __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }
  }, "Contest Paid"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    align: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 13
    }
  }, "0"))))));
}

/***/ }),

/***/ "./components/truelancer.png":
/*!***********************************!*\
  !*** ./components/truelancer.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./components/userdetails.js":
/*!***********************************!*\
  !*** ./components/userdetails.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Userdetail; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_5_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/5.jpg */ "./images/5.jpg");
/* harmony import */ var _images_5_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_5_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Money__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Money */ "@material-ui/icons/Money");
/* harmony import */ var _material_ui_icons_Money__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Money__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/VerifiedUser */ "@material-ui/icons/VerifiedUser");
/* harmony import */ var _material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Twitter */ "@material-ui/icons/Twitter");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Facebook */ "@material-ui/icons/Facebook");
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/LinkedIn */ "@material-ui/icons/LinkedIn");
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/People */ "@material-ui/icons/People");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_WatchLater__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/WatchLater */ "@material-ui/icons/WatchLater");
/* harmony import */ var _material_ui_icons_WatchLater__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_WatchLater__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_CheckBoxOutlineBlankSharp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/CheckBoxOutlineBlankSharp */ "@material-ui/icons/CheckBoxOutlineBlankSharp");
/* harmony import */ var _material_ui_icons_CheckBoxOutlineBlankSharp__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckBoxOutlineBlankSharp__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/lab/Rating */ "@material-ui/lab/Rating");
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/CheckCircleOutline */ "@material-ui/icons/CheckCircleOutline");
/* harmony import */ var _material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _images_pk_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../images/pk.png */ "./images/pk.png");
/* harmony import */ var _images_pk_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_images_pk_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/CheckCircle */ "@material-ui/icons/CheckCircle");
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "/home/shivam/Warrior@99/truelancerassignment/components/userdetails.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















function Userdetail() {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    style: {
      backgroundColor: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: _images_5_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    xs: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 20
    }
  }, "Sa5Studio ", __jsx(_material_ui_icons_Money__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fontSize: "small",
    style: {
      fill: 'yellow'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 34
    }
  }), " ", __jsx(_material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_12___default.a, {
    style: {
      fill: 'blue'
    },
    fontSize: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 89
    }
  }), " "), __jsx("img", {
    src: _images_pk_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 16
    }
  }), " Lahore Pakistan ", __jsx(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fontSize: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 50
    }
  }), " ", __jsx(_material_ui_icons_WatchLater__WEBPACK_IMPORTED_MODULE_9___default.a, {
    fontSize: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 83
    }
  }), " 1 hour ago "), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_CheckBoxOutlineBlankSharp__WEBPACK_IMPORTED_MODULE_10___default.a, {
    fonrSize: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), __jsx(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_11___default.a, {
    name: "read-only",
    value: 5,
    readOnly: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), __jsx(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_14___default.a, {
    fontSize: "large",
    style: {
      fill: 'green'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 63
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }), "723 Feedback"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, "Local time - 12:59 PM ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    xs: 3,
    style: {
      marginTop: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: {
      backgroundColor: 'green'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, "Hire Me"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, "Current Availability", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }), "Full Time : 30+hrs/week"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }), __jsx(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      fill: "#00acee"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }), __jsx(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      fill: "#3b5998"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }), __jsx(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_7___default.a, {
    style: {
      fill: "#0e76a8"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  })));
}

/***/ }),

/***/ "./images/1.jpg":
/*!**********************!*\
  !*** ./images/1.jpg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/1-32ddb6fb4bb84ef3d5df64e01304b6c9.jpg";

/***/ }),

/***/ "./images/2.jpg":
/*!**********************!*\
  !*** ./images/2.jpg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./images/3.jpg":
/*!**********************!*\
  !*** ./images/3.jpg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/3-b22bdd53d34ba94290b3d1ef3fe796df.jpg";

/***/ }),

/***/ "./images/5.jpg":
/*!**********************!*\
  !*** ./images/5.jpg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/5-4624e1ac0b76d67b1b1e75557f3a03dd.jpg";

/***/ }),

/***/ "./images/default.jpg":
/*!****************************!*\
  !*** ./images/default.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACDCAIAAAAlCu8MAAAXhUlEQVR4nO09aXMcx3XdsyewuO8bBMADPESCEmWKER1btCW7bJcqlUpVqpJUnPyyfEscOVFKKcV2qmhJpA5KhC3eJAiIIE7iIs69r+l8GHLQ2+/1m57dxYKV0vuw1fPm9bu6+73XvbOzXAjB/IMQgnOuu6TpPYlpWZXoWS0RlagE+XAhhNNy+ZY3KoZQLRGOwtXQyIi/fFl5W/5kjFnspV8ckEeYcy63dbqil3JfeEnQVzi/DLtDWTIGHQD+EspoM2nyySJKKFj11pcJ6GTJ6np2NGmbYAihZfgE7ULz8bGiKxwkXznD/K5ffNlQ3RwgYw42qn4PJmAxLEPKAcppKzQu3oReIYa9UP5KR5mtfNcFHY1MSYtDGzUAbtt2zYR9DyhYfjtUEhNhHWLOs2b1AgO6KcUbWlN5mmaUk2GpANUyL0vk+tft67Ii8DISrRERG7z2CpAP1FOnv3JXB+Y0kOf+Hs2TqewXtLCj7aHVhaOijLohc4iHjQMC3aREbZTh+7ro8CHINAufAJlS1/bs6EuiTK9EMAdftIu2KNp2wbKCAR7g3GKlQU8RhIpW6OGncsvELYTJ+zRuLKKDj9uNYXFDkep2R8MIGhwUWTp3OJSFYm4rsTq9PJnOJfLFbH2kKZNPBngwFIzkCpmiXYiG6lPZvcb69r7WseGu06FABB1RnZ7QHF0cM0+QRF/tTDRPR7UBIcRmfHlq6ebG3mJTXXtn82B3y3BrQ0/QCnFuKfmGMWaLYjobX976bmlzeje5frzvzWN9b0RCdYdngRY8osHhjoEz5RefT23Gny08n+ppOXK870JbY6/FA+ZaCSEKdn5+/cGDhS/72o5OjLwTCiLL4hDhFc3JqWz83vz17fiqzezOpoHBjvHulmEnypcNQoj5jQd3566dGbo82nOuWqpWDi/GgIhfsGaH9J54BQgRe+nNG1Mf2bZ9avBSf/uxYCBsWN3q2CrhPl/Ifj39cSRYd+Hozywr4KmzYeFO42kwWge1iUjpbPzb2avZfPqNsXebY50HJ0gIMfPsT0ubM1fO/t3BSTEHvC5Syq+yi1FzmFu//3DxqzeP/aKzaUCra7n7ZBSmlr+ZXb1z7sg7TfXtyexuc31HXbgRZQhNhhUqjfdoO2PANNWYbm3qyjhYnup8JMe3G48/YoJdPPErN9maFNdQH7cjlIV2jKe35tYfZPOpaDj2fG85mdm5cvbv68INsCBm5QZABoI5Ytdhn5uKLx79V0/LkaO9rx+qGowxlshsX7v/7++d/2e4n6jiioeAVBocnAtWAjo+Dv6Lhx8Odoy/CgPAGGuItl48/qsvHv6ngleWEWqRXzyTPGPJHpeXjBIEXAJlhHSCdVLlW5Mzv+9oGhjuPEUoqmMr6wP7EtygvfJnR9NANp9OZLYhK1eQHG+hAoqv5FCvKODiLQZUURytyxOKMEUbnWbu5cbuUjK7Oz5wUelCAOF0pTs0B72F2n609/WFjUeKzqgtXBoShmVQ10scGwAXr931QBUhnuhIEHPOhbBvzvzPpRPvE3wqB5S5Z1gf7jq1+HyKMdPoD/2rU0B3a//cFOVOFDaemhEl7Or2XFtDbzQcqzDRyd3R0os4DdPxDAUiLbHu9d3FruYhl4+ui6eLTFy3vw7gMpcLLHS0FXoFKa87hf+3s1fPjfwYTXRydx0edkEV0/FXyKCIU4Nv3Zu/rgQcLgG0XXERZEv4LSh3huyg9xUzZC0hK4XSgaJdEMKuizRyxtFh1vHRiYaepQ2RYzFK1ljXns2nifnrKUK+dG3UKa+tTf2Cea+Hi18d6TrDmUdeqVAfoqMnQ855NFSfK2TQ+VEtNVyo6CSyPNhJrg90nKi9XF/QXN+x+HyqNrIsuBtgpfWW0sGl13XR8XEhX8w11rWixEQKRfWkNfQlQoG2xt691CZBbMLHs7ujjwVjqC5GK3sTE6kcJOSind9Nrls84NLrtqCQFSpXh1Hwshqo5gplQ10rw8xnmsyHgpyBdLc45yW1qesyYj5yqd5AlwIxVTnnmVyyJdaNWoWKQ9uyqoago+ea4jIUiNiiiJ7HmbBi0lDJbuGl1ZqDD8rXLpFuEimdlbbCipV637lc3Xna1tADeTJysiizxJ3pCn8GZoluJrp84Ox2GpYV2NhdRK2QOZjgZVnoICG1qcl6h4IhAQMjyjm37WJLQ7fiMh0TAc6BGXA3LRHy0VWKCn/OmGACpVEmAdTHMDy6l0FfK7o8kEWkc4nmWBcRZNC+JsGKxst8DNNpJFjnN0iW50y1NvXccXji3byH0u8mN8LBKNRD7msym6CeJrPbHGxRbGnogvx1ZsrZHrZhX/kySKtLuBuGCAGOVGWpL+g5DwZCRHCTA7T5MCjqoetAF1JQyoJd4KUHOQz4DtWE4Mmw2PsiH3iCrjxQ7tIKvWxztzBFAQoy1ArlQFDSzkpn4zoaQ9FoG40NRvtk3WpAL03YGRNSlJ6zz/AuShlPbxOdfJtMwov9gW5SEOLl2o6XlsxwiUh3hRC2Uk7olINsPUtMEz5od15aU+6lnve3H1NKSbhG0aJZtgvi4V383NTlSxvGNIsLcpDvFor5sqcwEVWZxk2QlW7Y5OmSyu61N/YRBupyEhTn6RmPWFT1yrUu3JjLpzzJPOc1Sk8ESdimE3syu1cfafQVc8oOUB5jUN3Axxhrru9IZHY8yfzKrVBPWDJFw7EKH281hyAa0A8OouHY6vbTke6zNZBVNhSKuXQ2XhuHsNp/f9DTOrIZf1ZjoX6hYOcjofqaiXsxBrpDNxPwRR+0QvliVgibeWWtQ4RisaAkAyWFGFYx9LbAvUSeL4LjQWy+uOb4UKeWZQUao63xzDbzn/BRZVyP0JmW5qaAYHYoEIHHn1AuVEPXht53MUFPA9AaVHfeaTIMzbHO9Z2F5voOSIPW1LpK1KTsQTciKDcm1aycW/liFnLWHTmg5yu6igu6t5xzU8/TR05unTqbh1a3nxLdIX9zJXUnpjSGlbomaIXc4k0xBDZY6QQqw5/qd5meMRqtxFFjdJQdTf1cIjZhRROY5xVCnOzBcDCKPvZhEmRkrdDABXtZaGeGfSMhs3b9K7OWb6FaOo0nK7dDwSh7uVx0IYKBuQZtkJWUI5jOQbLayl3ZFssK1EealjdnoC3uJazp0QF2kfDQxZWo5mRosHJKqtPJNRI1Xr58tvXdaM85ZeQIpyhDi7KV15w8PLKpkL/iehl/afz9b6Y/toWNulVmhVrqq5f3/gD1tQkxemttZy4SqmuItvjlgLrPlyaeyssQDkZP9L/5dO2ueZeywZKjgQMyRrwEFC8TyBilo4y8/fSTC0d/DgUprCBnmKLR7vAu5AN1Q9vH+i7cmr3qSaa4Tuc34pb2ezRBnoLJ611RgohFQti5QqY+0oROSR0rAZ7rhysaXayKkgI7W4Z9XXw4GI2E6oWwOQ8IzREsYQIdrOQ29fsDorM5RiVgXFbOM3Yxs8gjgzJ7TPylk9va0LOX3vQlnWaOQm3PizjPFtLVY+btXDli+PUjY6wl1pXKxsvQzRfsf5+sBDg0IonSDQsHBxso/T4B49l8SmaLRlUaj7pSgH21HIIgH113WX8hRH2kqWjnUVt0AF1EqOqAdp8McyDdli8Jmr62MZRMJxrizRX2xR/V2eIlNYuOoTJpCPNRpOVyQbmXB0SgDwYi+WIO0pctqJLuNFvGWL6QVZ4CQZNZGRlbBkvp7LLWMdWVPUoUFuAniezFfLFT2V0TzUxsEJpTKUMveNYU8cy2+zQU7RC3rQwS2ldxi/a3UMTY6mYfGq+VUNvZNJDM7LbEuty7OnfIBGiRI9fBaLDm4PwVCtINg/OZSG+5D8GjZbeM8XSXkqhcGvVRMuVSFwHNQXFfKBjd2F30dL3c3WRS0650MX7NSWR26qUXifjqC0E3d5GcTGQYZjA2tJ397cfclxH49Ygu7PjigxZyTGPXXmrL/WZfKZnk7gqSgfUNK0kZH4QLWdcB3oLL3LOWDQciO8l1xS+0DTAcwUUtY6BihC2oOAdZtAuxaBMvXcdKWxfZiIgHb3m8M0QOBboM4aZflx4uHZcgEAi1NvQUijkFDz2l8ER10+mMioaylLYySNuJNTdvyaALEug81oEsS/0fEMiORtLd0S7RUGw3taHjU3nYLRsU0XNr94Y7T9Nk5j4hCA7ht7GDneNPVu/UXq4vsIX9ZPV2f/uxGsgq51lHdEdqvvkc6ji59Hza/SE8SiMAKOKgArq7bneFFaqn21jYeDjYMR6wtGc5tLEEAVJWlPEeL89SRE6PKMHS5vTc+v3LJ/9a1x3VtSq6mUAyu/vp3X/96cQ/RkOx8kTr1EDx6vfJJpnAxEjaFwPtx4NWaH7jAXpXnq1+KxCdzoSecqNQzH09/fHnD/5DGQA6mbtq06q6lyoGGiwXmnKtpuBdwRyrspWG0maM2Xbxs/u/yRey4VBdLNJ84djPnQMyWVdYMqK1ptIwoUf1306sfvHowzfG3utrOwpNpq2TWaGfhGPx55OUsa1KrYKW7fliNhgIT878fqTrta6WIV9MKqGBsJ1YuzH10bsTv3bexFwek/KgZJ+six6VR1gdH+cNit0tw6mc6XPOcPMBO/pV2BbFG4//+92JXwcDYZifDxosw12MjDQJjmi81vUNWuFUds9TV3kDAZcUeteQ59rOXHfzsPNeZ0igc5HOHL/0+O/RlAjINHEf9tWFUTkCKjOXcx4MhJwxoKMndC4cCcUXuoisMNlKrPa0jsDxg2tOaRBtc3rtuxJMkCgGla10Vxo7yY10Nk7TQNVdt8qTDqVBfSFDfbixAL5ZIuirC9qz61rCcNepsvtWRe1sPm1ZRj/VPgjYf4eUsh0lgHntRU3wMkEoEMnkUzQNKlf5VPCoAqI05Tr4VHYvFAij3VFxaAPioZdQV+///kCYfSkK71betriVyu7p8hstl4hCQvMTYmip89pxyBaK9ozGnppDPB6LahOXJLWsdK76j/HAQdJ92kzEIs1lMK8KHMK5KQTOOXpSXzPI5pI1+yUshFdiDBhjnFu2XTxQEUrgdqFoF7YSq4HDy8m1eIeUCcQizXvpLeVHalUH1Njp5T+dHvwL3d0aQDnvbSkbT/A/M3T5xtRHglHHU9USJ8NuauO7lW/HBy4aMizDNE8a5KxCBh0vOcvDvpAATYYuXgjR0tA10HH8/vx15vUlrWc5ZOwfVijmrt3/4N2Jf1L+5U5nl840xV3wUuGp4Kl1IKQtqFzh6eyXO0I84Tvn8szQDzfjK2s7c4q66JwgALoMGu9cfvHow7dP/lU0XI9SCv3RKXQLiodtRYrTsOCWAW5t4DaEBgZ2OjoaBfPDU3/zzfTHmXySoPH89DTBuVzZno0E69ob+801JGiUhnxJO1ag7/mlQVQpcaF8Albwytl/uP7gt2gXw1XFzMy5v/D562PvoSLQRUPLde8Kg9esKbaX/MctA0FARsrLB7JWFjJqBowwsj1OIxZpEsKOp7dQOwkXuwuf6OJ+2qKYL2RDwbD8Ml8OzndREaj5OpPdttAks/17CugGUwd+6VHI5JLXH/w2kdnubRu7eOyXzh8pHhAIIW7O/G5jdyEaboynN4/1vXFm6PLBiaOhRq8t8gQhxGf3f3N68O3O5kHGmfMz+YOWyBhzXuh7/cEHp4cudzT1H7RQFCxWmtNk/YjkI7NA8XJGkpmgtxhjz/eWbLvY2TzIGGMCp1FY6YTqiJUkyZw4wDhj7LXhv7w3fx21GloKHYXqqXQk6LW/02cgUisRvMQSqZ6TOShkurYQ4tbsH39w/BcKf5mbbr2i0Z9JhTUHR6cypUPW2tCdySVzhYxrji4fwHQoM5RzgKwwnSar+T47qB+Nd2F1e7Yu0thY18ZKBx7PYJqpACkVxXQTiDHGuXV66PKt2avmxhLm0HgIJWOArmsFmCZGEWQKQ6ZOcHvyuz9cGHuPScsTLnmhjzxlEENVBztOrGzPZnL7WxOXAxRRHui4Hfp/lrLZtTtb8RX3BQqHCCvbTxY2pi4e/yVBI0ewykfFgUM+uy7ahduzn0yMXDlcNRzobR1LpLfgT1RkQBdZhaD+LpP5zAEVwvSzyRP9Pwi+/C73EMGx+tL4+9cffOC88lC5RTsHdaOSpXXE6u+TueZJHkimCCM0Q7MrYyyV3Xu8PHly8C1CRRkJk7zCUFcF0Po74Fgdi7Yc73vz7tw1aKMAJR8q3b2Ugz7HzjAcJYUQ2gcF5cCH3vIEua+QnrLaTW1kcqn13fnlzZkfnflb53+7TfpCfVB6EzxxVwjx6b1/620dHeudQP8uo3JQ5OJjUN1wJIRIZncfLd7YSqzGU5utDT1N9e09raP9bUd1BxJQB79a+aJXiIt2cWrpxtTSzeZYZyRYN9h5crjz5MF94fyiLuKlx1VowjGvBGTKheePHi3eCFjBk4OXeltGKnmUqoqliMuQSYsbMi/Y+d3kxtO1u5t7z6Lh2PmxnzbVtcPSiIMdGR1L1Eu5FlaWPBrOlHCk9HLpi8X81PLk7Nqdjsb+M8OXG6L7v3ZXFFWUVgRBBWT10Dip3NV5R3GiwlYx0xb25t6zh4tfZfLJ/vbjJ/ouwEfkiUBNh0qPmUXEYh3fbD59a/bqxu7i0d7Xj/aelx9mLi+yV5gb5MGoPMYWirmFjUePlycjobrxgbd6W0fLyEMKTdVWtxBibWfu5szv6iNNp4fe7m45Yh3eEzsHDUKIRGb7/sKXq9uzA+3HJ0auoM/NG0IVxiCbTz9Zvf14ebKreXBi5IrudXX/L6FQzC8+f/Rw8UZDtPXM8GXnr0P8grYugjEXxr5sPnX76ScrW7MnB9862ns+YIVeMNXEepRPVeJJhVUTzHZKFqFFM8a2Eiu3n36ay6cnRq/0tIz4UubFbwJ9FYJCiI29xVtProaCkdNDb3c1D6F1W+U1vm4e0JzN6c3BkEMqG783//nm3tJY7/mxnnOG+39/sSibT00t31zcmOpqHjo99DYddirPgWj9Uwb/qu94aMgXc7Mrtx8ufd3dMjzS/ZrnslBrU2XVu2szkd6e/O4PmVxirOf8aM855elMWAXKt1DOLgHhIJOoSGPQT6ih0oVpSkxUQ4aVzk5jK7H6cOHLeHqrp3VkYvQn7ntF5UDNPNeBEGJ5c+bW7B8jobrzoz/paOpnLxmZ6FdeTPcbG83B75KqylLOF7Ozq3ceL082xzrPHflxS6xL4an9/kAIe/rZn2fX7rQ39p4d/lE03EBMpX121d7KHihzmHt1S5mRh9WGfDbjz+7MfSbs4mjPuZHu19jL5xZKfqfPGIunt+4vfL659ywcqhvrmRjpfs15sSEMULQqyo5Up30ZfOBWFrWf9ouOrXuXgYghxyi4xAm1Fb/li9knK7efrt8LWqFL4+83RFu5bducc9suPlm9c2/+WltD7/jAxfam/lAgjMZHmDCUWK/oTQR0IuUSxsh4gqEy8OgQopmPSDyomWhHWivOuXP4cW/+WjqX4LZtzzz786Olr0d7zo4PvBW08D/WfQXh4IJ4zcDJFvx/v/2XtsbeiZF3AlbIJG4YrnFPUBY43au8TOCrF72waBq/iqmid5IbznksumRcOnRpE4HSV4yG40HEa1gCygwJ7xA+pfGyOGgytJqO2xBvOowVLnxdSjARfVj0NYtpB1hKfg+GUPK+NnSSEiHbc+3Ll8Rg63KDrsygmehoiHoRyiWWBRE/obEw/EKfaPdoVck2VeTzKkOFNmq/ZqmW416FAZBnn65dCZRnoyvd453jnlxcMrktd4cNlN5TUQXj6VZ0b8VK/UVECVlJnZl029XTc9Tx/2pE/SUzpTMHA8FdZqv01amLukmJ2tAFLk9lbsJcJcuFglzlHXDxShvNYTJeMRNNOdpABotZc/Csl+k21LJCgJWxuQllCPJLWZKT4UCZizen98v5VYCq6AwXnAM+cjIaphR6YhaYREYToDuas4XxlrilC4AyMQyqujCrRlHoa5NNOdHWgXkg0i1HN57QRwsEjew7Q3182WUCkP7/AKNQiRXlsR2fAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./images/image1.jpg":
/*!***************************!*\
  !*** ./images/image1.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/image1-78ff01152f04ca50d0546b039438d8c2.jpg";

/***/ }),

/***/ "./images/pk.png":
/*!***********************!*\
  !*** ./images/pk.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHLSURBVHjaYvz48yMDGHz59UV6mjTDFwaGfwwMf8AIyPgFZvyCMVgYAAKIBaiUj40PSLIxs9Xb13/9/fUPw9+///78+fvnDwOQ/P37H5j8++f3v9+bZmwCCCAWiPH/////9+/f46+PP/389Pff3/8M/6W5ZR6+v/v97/dfv3/9+vcLqFqWRxZoD0AAMUFUQ8g///4AVf/68ytbO9tG3Pr7z+8sjCylBqWSnJJAQaAeoKsAAoiJAQaApgI1ACWsJK3UBNR2PN75899PGW4ZTSHNGPUYkIa/v4E2AAQQC9AlEOOBACgEBLysvJzMnM++PP3199fZV+faz7Q/+vzo1/9ff/7/AWoACCAmoPr/MADUAJR49e0lMADi1OJ+/fz16+fPw08OP/j8AOgekA1/GAACiIXh3z8kDSD/7Xiw00DY0EfRBxjin399VuBV2HBnw54ne4BBB9QAEEAs/xgQTvr17zfQGUBL6k/WPfn8xEHKgYeNZ+L5iTfe3fjx98efv3+BTgIIIJAfIKHEyMgoyS3Jzcz9+z/I9k13N62/vx4YaD9//2RmZVYRUPn7/y/QBoAAYnz+/vk/MPjx54dqiSrDG4wIRo54LgaAAAMAh8pAjKSRbocAAAAASUVORK5CYII="

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_headercomponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/headercomponent */ "./components/headercomponent.js");
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/tabs */ "./components/tabs.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Content */ "./components/Content.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_small__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/small */ "./components/small.js");
/* harmony import */ var _components_endorsements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/endorsements */ "./components/endorsements.js");
/* harmony import */ var _components_footer1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/footer1 */ "./components/footer1.js");
/* harmony import */ var _components_footer2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/footer2 */ "./components/footer2.js");
/* harmony import */ var _components_projecthistory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/projecthistory */ "./components/projecthistory.js");
/* harmony import */ var _components_userdetails__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/userdetails */ "./components/userdetails.js");
var _jsxFileName = "/home/shivam/Warrior@99/truelancerassignment/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({}));
function Index() {
  const classes = useStyles();
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(_components_headercomponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: {
      backgroundColor: '#F4F6F7'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(_components_small__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx(_components_userdetails__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: {
      float: 'left',
      margin: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(_components_tabs__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  })), __jsx("div", {
    style: {
      overflow: 'hidden',
      margin: 10,
      backgroundColor: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(_components_Content__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx(_components_projecthistory__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx(_components_endorsements__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  })), __jsx(_components_footer1__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: {
      marginTop: 10,
      backgroundColor: 'black'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(_components_footer2__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }))));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/shivam/Warrior@99/truelancerassignment/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActionArea":
/*!***************************************************!*\
  !*** external "@material-ui/core/CardActionArea" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActionArea");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "@material-ui/core/Chip":
/*!*****************************************!*\
  !*** external "@material-ui/core/Chip" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Chip");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/LinearProgress":
/*!***************************************************!*\
  !*** external "@material-ui/core/LinearProgress" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/LinearProgress");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/SvgIcon":
/*!********************************************!*\
  !*** external "@material-ui/core/SvgIcon" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SvgIcon");

/***/ }),

/***/ "@material-ui/core/Tab":
/*!****************************************!*\
  !*** external "@material-ui/core/Tab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ "@material-ui/core/Table":
/*!******************************************!*\
  !*** external "@material-ui/core/Table" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ "@material-ui/core/TableBody":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableBody" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ "@material-ui/core/TableCell":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableCell" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),

/***/ "@material-ui/core/TableContainer":
/*!***************************************************!*\
  !*** external "@material-ui/core/TableContainer" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableContainer");

/***/ }),

/***/ "@material-ui/core/TableHead":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableHead" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),

/***/ "@material-ui/core/TableRow":
/*!*********************************************!*\
  !*** external "@material-ui/core/TableRow" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),

/***/ "@material-ui/core/Tabs":
/*!*****************************************!*\
  !*** external "@material-ui/core/Tabs" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/CheckBoxOutlineBlankSharp":
/*!***************************************************************!*\
  !*** external "@material-ui/icons/CheckBoxOutlineBlankSharp" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CheckBoxOutlineBlankSharp");

/***/ }),

/***/ "@material-ui/icons/CheckCircle":
/*!*************************************************!*\
  !*** external "@material-ui/icons/CheckCircle" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CheckCircle");

/***/ }),

/***/ "@material-ui/icons/CheckCircleOutline":
/*!********************************************************!*\
  !*** external "@material-ui/icons/CheckCircleOutline" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CheckCircleOutline");

/***/ }),

/***/ "@material-ui/icons/Facebook":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Facebook" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Facebook");

/***/ }),

/***/ "@material-ui/icons/LinkedIn":
/*!**********************************************!*\
  !*** external "@material-ui/icons/LinkedIn" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LinkedIn");

/***/ }),

/***/ "@material-ui/icons/Money":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Money" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Money");

/***/ }),

/***/ "@material-ui/icons/People":
/*!********************************************!*\
  !*** external "@material-ui/icons/People" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/People");

/***/ }),

/***/ "@material-ui/icons/PermIdentityTwoTone":
/*!*********************************************************!*\
  !*** external "@material-ui/icons/PermIdentityTwoTone" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PermIdentityTwoTone");

/***/ }),

/***/ "@material-ui/icons/PersonOutlineOutlined":
/*!***********************************************************!*\
  !*** external "@material-ui/icons/PersonOutlineOutlined" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PersonOutlineOutlined");

/***/ }),

/***/ "@material-ui/icons/ShoppingCartOutlined":
/*!**********************************************************!*\
  !*** external "@material-ui/icons/ShoppingCartOutlined" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShoppingCartOutlined");

/***/ }),

/***/ "@material-ui/icons/StarRate":
/*!**********************************************!*\
  !*** external "@material-ui/icons/StarRate" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/StarRate");

/***/ }),

/***/ "@material-ui/icons/Twitter":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Twitter" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Twitter");

/***/ }),

/***/ "@material-ui/icons/VerifiedUser":
/*!**************************************************!*\
  !*** external "@material-ui/icons/VerifiedUser" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VerifiedUser");

/***/ }),

/***/ "@material-ui/icons/WatchLater":
/*!************************************************!*\
  !*** external "@material-ui/icons/WatchLater" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/WatchLater");

/***/ }),

/***/ "@material-ui/icons/WorkOutline":
/*!*************************************************!*\
  !*** external "@material-ui/icons/WorkOutline" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/WorkOutline");

/***/ }),

/***/ "@material-ui/lab/Rating":
/*!******************************************!*\
  !*** external "@material-ui/lab/Rating" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Rating");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map