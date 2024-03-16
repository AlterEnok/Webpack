/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/profile/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/profile/gateway.js":
/*!********************************!*\
  !*** ./src/profile/gateway.js ***!
  \********************************/
/*! exports provided: fetchUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchUser\", function() { return fetchUser; });\nasync function fetchUser(userId) {\r\n    try {\r\n        const response = await fetch(`https://api.github.com/users/${userId}`);\r\n        return await response.json();\r\n    } catch (error) {\r\n        throw new Error('Failed to get user data');\r\n    }\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHJvZmlsZS9nYXRld2F5LmpzP2MyMzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQSxxRUFBcUUsT0FBTztBQUM1RTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvcHJvZmlsZS9nYXRld2F5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlcih1c2VySWQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXJJZH1gKTtcclxuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBnZXQgdXNlciBkYXRhJyk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/profile/gateway.js\n");

/***/ }),

/***/ "./src/profile/index.js":
/*!******************************!*\
  !*** ./src/profile/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gateway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gateway */ \"./src/profile/gateway.js\");\n/* harmony import */ var _printProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printProfile */ \"./src/profile/printProfile.js\");\n\r\n\r\n\r\nObject(_gateway__WEBPACK_IMPORTED_MODULE_0__[\"fetchUser\"])('github').then(({ name, location }) =>\r\n    Object(_printProfile__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n        name,\r\n        location,\r\n    }),\r\n);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHJvZmlsZS9pbmRleC5qcz9hNjkyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFzQztBQUNJOztBQUUxQywwREFBUyxrQkFBa0IsaUJBQWlCO0FBQzVDLElBQUksNkRBQVk7QUFDaEI7QUFDQTtBQUNBLEtBQUs7QUFDTCIsImZpbGUiOiIuL3NyYy9wcm9maWxlL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmV0Y2hVc2VyIH0gZnJvbSAnLi9nYXRld2F5JztcclxuaW1wb3J0IHByaW50UHJvZmlsZSBmcm9tICcuL3ByaW50UHJvZmlsZSc7XHJcblxyXG5mZXRjaFVzZXIoJ2dpdGh1YicpLnRoZW4oKHsgbmFtZSwgbG9jYXRpb24gfSkgPT5cclxuICAgIHByaW50UHJvZmlsZSh7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBsb2NhdGlvbixcclxuICAgIH0pLFxyXG4pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/profile/index.js\n");

/***/ }),

/***/ "./src/profile/printProfile.js":
/*!*************************************!*\
  !*** ./src/profile/printProfile.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return printProfile; });\nfunction printProfile(profileData) {\r\n    const { name, company } = profileData;\r\n    console.log(`${name} from ${company}`);\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHJvZmlsZS9wcmludFByb2ZpbGUuanM/YjIzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQWU7QUFDZixXQUFXLGdCQUFnQjtBQUMzQixtQkFBbUIsS0FBSyxRQUFRLFFBQVE7QUFDeEMiLCJmaWxlIjoiLi9zcmMvcHJvZmlsZS9wcmludFByb2ZpbGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludFByb2ZpbGUocHJvZmlsZURhdGEpIHtcclxuICAgIGNvbnN0IHsgbmFtZSwgY29tcGFueSB9ID0gcHJvZmlsZURhdGE7XHJcbiAgICBjb25zb2xlLmxvZyhgJHtuYW1lfSBmcm9tICR7Y29tcGFueX1gKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/profile/printProfile.js\n");

/***/ })

/******/ });