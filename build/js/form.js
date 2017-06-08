/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	eval("\"use strict\";\n\nwindow.handlers = {};\n\n// service form handlers\nwindow.handlers.service = function (data, successCallback, errorCallback) {\n    console.log(\"service handler\", data);\n    successCallback();\n};\n\n// service form handlers\nwindow.handlers.price = function (data, successCallback, errorCallback) {\n    console.log(\"price handler\", data);\n    successCallback();\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvZm9ybS5qcz8xZjA4Il0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5oYW5kbGVycyA9IHt9O1xuXG4vLyBzZXJ2aWNlIGZvcm0gaGFuZGxlcnNcbndpbmRvdy5oYW5kbGVycy5zZXJ2aWNlID0gZnVuY3Rpb24gKGRhdGEsIHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuICAgIGNvbnNvbGUubG9nKFwic2VydmljZSBoYW5kbGVyXCIsIGRhdGEpO1xuICAgIHN1Y2Nlc3NDYWxsYmFjaygpO1xufTtcblxuLy8gc2VydmljZSBmb3JtIGhhbmRsZXJzXG53aW5kb3cuaGFuZGxlcnMucHJpY2UgPSBmdW5jdGlvbiAoZGF0YSwgc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgY29uc29sZS5sb2coXCJwcmljZSBoYW5kbGVyXCIsIGRhdGEpO1xuICAgIHN1Y2Nlc3NDYWxsYmFjaygpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvZm9ybS5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);