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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/builder.js":
/*!************************!*\
  !*** ./src/builder.js ***!
  \************************/
/*! exports provided: Builder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Builder\", function() { return Builder; });\n\n\nclass Builder {\n\tstatic createNewElement(tag, innerContent = null, classStr = null, attr = null) {\n\t\tvar el = document.createElement(tag);\n\t\tel.innerHTML = (innerContent) ? innerContent : \"\";\n\t\tel.className = (classStr) ? classStr : \"\";\n\n\t\tif (attr) {\n\t\t\tattr.map((attr_rl) => el.setAttribute(attr_rl.name, attr_rl.value));\n\t\t}\n\n\t\treturn el;\n\t};\n\n\n\tstatic attachChilderToParent(html, array_el) {\n\t\tarray_el.map((el) => html.appendChild(el));\n\t\treturn html;\n\t};\n}\n\n\n//# sourceURL=webpack:///./src/builder.js?");

/***/ }),

/***/ "./src/catalog.js":
/*!************************!*\
  !*** ./src/catalog.js ***!
  \************************/
/*! exports provided: Catalog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Catalog\", function() { return Catalog; });\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder */ \"./src/builder.js\");\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination */ \"./src/pagination.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _pageData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageData */ \"./src/pageData.js\");\n\n\n\n\n\n\nclass Catalog {\n\tconstructor(per_page){\n\t\tthis.element = document.getElementById(\"catalog\");\n\t\tthis.per_page = per_page;\n\t\tthis.catalog = catalog;\n\t}\n\n\tcreateCard(product) {\n\n\t\tlet link = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"a\", \"Add to cart\", \"btn btn-primary add_card\", [{\"name\": \"href\", \"value\": \"#\"}]);\n\t\tlink.setAttribute(\"name\",product.data);\n\n\n\t\tlet p = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"p\", product.description, \"card-text\");\n\t\tlet title = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"h5\", product.name, \"card-title\");\n\t\tlet coast = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"h3\", \"$ \" + product.price, \"\");\n\n\n\t\tlet cardBody = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"div\", null, \"card-body\"), [title, p, coast,link]);\n\n\t\t// cardBody.appendChild(link)\n\n\n\t\tlet image = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"img\", null, \"card-img-top\", [{\n\t\t\t\"name\": \"src\",\n\t\t\t\"value\": \"images/\" + product.image\n\t\t}, {\"name\": \"alt\", \"value\": product.name}]);\n\n\t\tlet card = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"div\", null, \"card\"), [image, cardBody]);\n\n\t\tlet catalogItem = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"div\", null, \"col-lg-3 col-md-6 mb-2 catalog-item\"), [card]);\n\n\t\treturn catalogItem;\n\t};\n\n\tfirstI() {\n\t\treturn this.current * this.per_page;\n\t};\n\n\tsecondI(i,array_products) {\n\t\treturn i < this.current * this.per_page + this.per_page && i < array_products.length;\n\t};\n\n\trenderProducts(array_products,current) {\n\t\tthis.element.innerHTML = \"\";\n\t\tthis.current = current;\n\t\tfor (let i = this.firstI(); this.secondI(i,array_products); i++) {\n\t\t\tthis.element.appendChild(this.createCard(array_products[i]));\n\t\t};\n\t\tconst pagination = new _pagination__WEBPACK_IMPORTED_MODULE_1__[\"Pagination\"](this.per_page);\n\t\tpagination.createPag(_data__WEBPACK_IMPORTED_MODULE_2__[\"Data\"].getProducts(),_pageData__WEBPACK_IMPORTED_MODULE_3__[\"PageData\"].getCurrentPage())\n\n\n\t\t////POU-PAP\n\t\t// CreatePouPap()\n\t};\n}\n\n\n\n\n//# sourceURL=webpack:///./src/catalog.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: loud_products, Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loud_products\", function() { return loud_products; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Data\", function() { return Data; });\nconst loud_products = [\n\t{\n\t\t\"name\": \"Snikers #1\",\n\t\t\"price\": 103.50,\n\t\t\"data\":1,\n\t\t\"sex\":\"women\",\n\t\t\"data-check\":1,\n\t\t\"image\": \"bg-01.jpg\",\n\t\t\"description\": \"This is very cool snikers. Nice colorfull and quality\",\n\t\t\"more_description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae debitis dolor ducimus hic, maxime officia, quam qui quis repellendus similique tempore veniam? Commodi eaque laudantium officia totam vel. Odio, unde voluptates? Alias corporis dignissimos dolore eveniet ex expedita magnam molestias rerum sunt tempore! Ab, cumque quis. Laudantium vero voluptatem voluptatum!\"\n\t},\n\t{\n\t\t\"name\": \"Snikers #2\",\n\t\t\"price\": 152.14,\n\t\t\"data\":2,\n\t\t\"sex\":\"men\",\n\t\t\"data-check\":2,\n\t\t\"image\": \"bg-02.jpg\",\n\t\t\"description\": \"This is very cool snikers. Nice colorfull and quality\",\n\t\t\"more_description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae debitis dolor ducimus hic, maxime officia, quam qui quis repellendus similique tempore veniam? Commodi eaque laudantium officia totam vel. Odio, unde voluptates? Alias corporis dignissimos dolore eveniet ex expedita magnam molestias rerum sunt tempore! Ab, cumque quis. Laudantium vero voluptatem voluptatum!\"\n\t},\n\t{\n\t\t\"name\": \"Snikers #3\",\n\t\t\"price\": 202.22,\n\t\t\"data\":3,\n\t\t\"sex\":\"women\",\n\t\t\"data-check\":3,\n\t\t\"image\": \"bg-03.jpg\",\n\t\t\"description\": \"This is very cool snikers. Nice colorfull and quality\",\n\t\t\"more_description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae debitis dolor ducimus hic, maxime officia, quam qui quis repellendus similique tempore veniam? Commodi eaque laudantium officia totam vel. Odio, unde voluptates? Alias corporis dignissimos dolore eveniet ex expedita magnam molestias rerum sunt tempore! Ab, cumque quis. Laudantium vero voluptatem voluptatum!\"\n\t},\n\t{\n\t\t\"name\": \"Snikers #4\",\n\t\t\"price\": 240.00,\n\t\t\"data\":4,\n\t\t\"sex\":\"women\",\n\t\t\"data-check\":4,\n\t\t\"image\": \"bg-04.jpg\",\n\t\t\"description\": \"This is very cool snikers. Nice colorfull and quality\",\n\t\t\"more_description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae debitis dolor ducimus hic, maxime officia, quam qui quis repellendus similique tempore veniam? Commodi eaque laudantium officia totam vel. Odio, unde voluptates? Alias corporis dignissimos dolore eveniet ex expedita magnam molestias rerum sunt tempore! Ab, cumque quis. Laudantium vero voluptatem voluptatum!\"\n\t},\n\t{\n\t\t\"name\": \"Snikers #5\",\n\t\t\"price\": 180.30,\n\t\t\"data\":5,\n\t\t\"sex\":\"women\",\n\t\t\"data-check\":5,\n\t\t\"image\": \"bg-05.jpg\",\n\t\t\"description\": \"This is very cool snikers. Nice colorfull and quality\",\n\t\t\"more_description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae debitis dolor ducimus hic, maxime officia, quam qui quis repellendus similique tempore veniam? Commodi eaque laudantium officia totam vel. Odio, unde voluptates? Alias corporis dignissimos dolore eveniet ex expedita magnam molestias rerum sunt tempore! Ab, cumque quis. Laudantium vero voluptatem voluptatum!\"\n\n\t},\n\t{\n\t\t\"name\": \"Snikers #6\",\n\t\t\"price\": 186.50,\n\t\t\"data\":6,\n\t\t\"sex\":\"children\",\n\t\t\"data-check\":6,\n\t\t\"image\": \"bg-06.jpg\",\n\t\t\"description\": \"This is very cool snikers. Nice colorfull and quality\",\n\t\t\"more_description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae debitis dolor ducimus hic, maxime officia, quam qui quis repellendus similique tempore veniam? Commodi eaque laudantium officia totam vel. Odio, unde voluptates? Alias corporis dignissimos dolore eveniet ex expedita magnam molestias rerum sunt tempore! Ab, cumque quis. Laudantium vero voluptatem voluptatum!\"\n\n\t},\n\n\t{\n\t\t\"name\": \"Snikers #7\",\n\t\t\"price\": 111.60,\n\t\t\"data\":7,\n\t\t\"sex\":\"men\",\n\t\t\"data-check\":7,\n\t\t\"image\": \"bg-07.jpg\",\n\t\t\"description\": \"This is very cool snikers. Nice colorfull and quality\",\n\t\t\"more_description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae debitis dolor ducimus hic, maxime officia, quam qui quis repellendus similique tempore veniam? Commodi eaque laudantium officia totam vel. Odio, unde voluptates? Alias corporis dignissimos dolore eveniet ex expedita magnam molestias rerum sunt tempore! Ab, cumque quis. Laudantium vero voluptatem voluptatum!\"\n\n\t},\n\t{\n\t\t\"name\": \"Snikers #8\",\n\t\t\"price\": 169.64,\n\t\t\"data\":8,\n\t\t\"sex\":\"women\",\n\t\t\"data-check\":8,\n\t\t\"image\": \"bg-08.jpg\",\n\t\t\"description\": \"This is very cool snikers. Nice colorfull and quality\",\n\t\t\"more_description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae debitis dolor ducimus hic, maxime officia, quam qui quis repellendus similique tempore veniam? Commodi eaque laudantium officia totam vel. Odio, unde voluptates? Alias corporis dignissimos dolore eveniet ex expedita magnam molestias rerum sunt tempore! Ab, cumque quis. Laudantium vero voluptatem voluptatum!\"\n\n\t},\n\t{\n\t\t\"name\": \"LeBron 16 #9\",\n\t\t\"price\": 215.20,\n\t\t\"data\":9,\n\t\t\"sex\":\"women\",\n\t\t\"data-check\":9,\n\t\t\"image\": \"bg-09.jpg\",\n\t\t\"description\": \"This is very cool snikers. Nice colorfull and quality\",\n\t\t\"more_description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae debitis dolor ducimus hic, maxime officia, quam qui quis repellendus similique tempore veniam? Commodi eaque laudantium officia totam vel. Odio, unde voluptates? Alias corporis dignissimos dolore eveniet ex expedita magnam molestias rerum sunt tempore! Ab, cumque quis. Laudantium vero voluptatem voluptatum!\"\n\n\t},\n\t{\n\t\t\"name\": \"Nike Zoom KD11 #10\",\n\t\t\"price\": 245.00,\n\t\t\"data\":10,\n\t\t\"sex\":\"men\",\n\t\t\"data-check\":10,\n\t\t\"image\": \"bg-10.jpg\",\n\t\t\"description\": \"This is very cool snikers. Nice colorfull and quality\",\n\t\t\"more_description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae debitis dolor ducimus hic, maxime officia, quam qui quis repellendus similique tempore veniam? Commodi eaque laudantium officia totam vel. Odio, unde voluptates? Alias corporis dignissimos dolore eveniet ex expedita magnam molestias rerum sunt tempore! Ab, cumque quis. Laudantium vero voluptatem voluptatum!\"\n\n\t},\n\t{\n\t\t\"name\": \"Snikers #11\",\n\t\t\"price\": 109.30,\n\t\t\"data\":11,\n\t\t\"sex\":\"children\",\n\t\t\"data-check\":11,\n\t\t\"image\": \"bg-05.jpg\",\n\t\t\"description\": \"This is very cool snikers. Nice colorfull and quality\",\n\t\t\"more_description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae debitis dolor ducimus hic, maxime officia, quam qui quis repellendus similique tempore veniam? Commodi eaque laudantium officia totam vel. Odio, unde voluptates? Alias corporis dignissimos dolore eveniet ex expedita magnam molestias rerum sunt tempore! Ab, cumque quis. Laudantium vero voluptatem voluptatum!\"\n\n\t},\n\t{\n\t\t\"name\": \"Snikers #12\",\n\t\t\"price\": 198.50,\n\t\t\"data\":12,\n\t\t\"sex\":\"women\",\n\t\t\"data-check\":12,\n\t\t\"image\": \"bg-06.jpg\",\n\t\t\"description\": \"This is very cool snikers. Nice colorfull and quality\",\n\t\t\"more_description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae debitis dolor ducimus hic, maxime officia, quam qui quis repellendus similique tempore veniam? Commodi eaque laudantium officia totam vel. Odio, unde voluptates? Alias corporis dignissimos dolore eveniet ex expedita magnam molestias rerum sunt tempore! Ab, cumque quis. Laudantium vero voluptatem voluptatum!\"\n\n\t},\n\n\t{\n\t\t\"name\": \"Snikers #13\",\n\t\t\"price\": 128.69,\n\t\t\"data\":13,\n\t\t\"sex\":\"women\",\n\t\t\"data-check\":13,\n\t\t\"image\": \"bg-01.jpg\",\n\t\t\"description\": \"These are very cool snikers. Nice colorfull and quality\",\n\t\t\"more_description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae debitis dolor ducimus hic, maxime officia, quam qui quis repellendus similique tempore veniam? Commodi eaque laudantium officia totam vel. Odio, unde voluptates? Alias corporis dignissimos dolore eveniet ex expedita magnam molestias rerum sunt tempore! Ab, cumque quis. Laudantium vero voluptatem voluptatum!\"\n\n\t},\n\t{\n\t\t\"name\": \"Snikers #14\",\n\t\t\"price\": 179.00,\n\t\t\"data\":14,\n\t\t\"sex\":\"men\",\n\t\t\"data-check\":14,\n\t\t\"image\": \"bg-02.jpg\",\n\t\t\"description\": \"This is very cool snikers. Nice colorfull and quality\",\n\t\t\"more_description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae debitis dolor ducimus hic, maxime officia, quam qui quis repellendus similique tempore veniam? Commodi eaque laudantium officia totam vel. Odio, unde voluptates? Alias corporis dignissimos dolore eveniet ex expedita magnam molestias rerum sunt tempore! Ab, cumque quis. Laudantium vero voluptatem voluptatum!\"\n\n\t},\n\t{\n\t\t\"name\": \"Snikers #15\",\n\t\t\"price\": 260.20,\n\t\t\"data\":15,\n\t\t\"sex\":\"children\",\n\t\t\"data-check\":15,\n\t\t\"image\": \"bg-03.jpg\",\n\t\t\"description\": \"This is very cool snikers. Nice beautiful and quality\",\n\t\t\"more_description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae debitis dolor ducimus hic, maxime officia, quam qui quis repellendus similique tempore veniam? Commodi eaque laudantium officia totam vel. Odio, unde voluptates? Alias corporis dignissimos dolore eveniet ex expedita magnam molestias rerum sunt tempore! Ab, cumque quis. Laudantium vero voluptatem voluptatum!\"\n\n\t},\n\n\t{\n\t\t\"name\": \"Snikers #16\",\n\t\t\"price\": 301.20,\n\t\t\"data\":16,\n\t\t\"sex\":\"men\",\n\t\t\"data-check\":16,\n\t\t\"image\": \"bg-03.jpg\",\n\t\t\"description\": \"This is very cool snikers. Nice colorfull and quality\",\n\t\t\"more_description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae debitis dolor ducimus hic, maxime officia, quam qui quis repellendus similique tempore veniam? Commodi eaque laudantium officia totam vel. Odio, unde voluptates? Alias corporis dignissimos dolore eveniet ex expedita magnam molestias rerum sunt tempore! Ab, cumque quis. Laudantium vero voluptatem voluptatum!\"\n\n\t},\n];\n\nlet products =[];\n\nclass Data {\n\t// static getProducts(){\n\t// \treturn loud_products;\n\t// }\n\n\tstatic loadProducts(){\n\t\treturn\tloud_products;\n\t}\n\n\tstatic getProducts(){\n\t\treturn products;\n\t}\n\n\tstatic setProducts(data){\n\t\treturn products = data;\n\t}\n}\n\n//# sourceURL=webpack:///./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ \"./src/catalog.js\");\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination */ \"./src/pagination.js\");\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./builder */ \"./src/builder.js\");\n/* harmony import */ var _pageData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pageData */ \"./src/pageData.js\");\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login */ \"./src/login.js\");\n\n\n\n\n\n\n\n\nif (localStorage.getItem(\"isLogin\")) {\n\tconst per_page = 6;\n\n\tconst catalog = new _catalog__WEBPACK_IMPORTED_MODULE_1__[\"Catalog\"](per_page);\n\tcatalog.renderProducts(_data__WEBPACK_IMPORTED_MODULE_0__[\"Data\"].setProducts(_data__WEBPACK_IMPORTED_MODULE_0__[\"Data\"].loadProducts()),_pageData__WEBPACK_IMPORTED_MODULE_4__[\"PageData\"].getCurrentPage());\n\n\tconst pagination = new _pagination__WEBPACK_IMPORTED_MODULE_2__[\"Pagination\"](per_page);\n\tpagination.createPag(_data__WEBPACK_IMPORTED_MODULE_0__[\"Data\"].getProducts(),_pageData__WEBPACK_IMPORTED_MODULE_4__[\"PageData\"].getCurrentPage())\n}else{\n\tconst login = new _login__WEBPACK_IMPORTED_MODULE_5__[\"Login\"]();\n\tlogin.createHtmlElement();\n}\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/login.js":
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Login\", function() { return Login; });\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder */ \"./src/builder.js\");\n\n\n\n\nclass Login {\n\tconstructor(per_page){\n\t\tthis.element = document.getElementById(\"login_container\");\n\t}\n\n\tcreateHtmlElement() {\n\n\t\tlet labelEmail = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"label\", \"Email address\", \"\", [{\"name\": \"for\", \"value\": \"exampleInputEmail1\"}]);\n\t\tlet emailInputEmail = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"input\", \"\", \"form-control\", [\n\t\t\t{\"name\": \"type\", \"value\": \"email\"},\n\t\t\t{\"name\": \"id\", \"value\": \"exampleInputEmail1\"},\n\t\t\t{\"name\": \"aria-describedby\", \"value\": \"emailHelp\"},\n\t\t\t{\"name\": \"placeholder\", \"value\": \"Enter email\"}\n\t\t]);\n\t\tlet smallEmail = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"small\", \"We'll never share your email with anyone else.\", \"form-text text-muted\", [{\"name\": \"id\", \"value\": \"emailHelp\"}]);\n\t\tlet divEmail = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"div\", null, \"form-group\"), [labelEmail, emailInputEmail, smallEmail]);\n\n\n\n\t\tlet labelPass = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"label\", \"Password\", \"\", [{\"name\": \"for\", \"value\": \"exampleInputPassword1\"}]);\n\t\tlet emailInputPass = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"input\", \"\", \"form-control\", [\n\t\t\t{\"name\": \"type\", \"value\": \"password\"},\n\t\t\t{\"name\": \"id\", \"value\": \"exampleInputPassword1\"},\n\t\t\t{\"name\": \"placeholder\", \"value\": \"Password\"},\n\n\t\t]);\n\t\tlet divPass = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"div\", null, \"form-group\"), [labelPass, emailInputPass]);\n\t\tconst button = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"button\", \"Login\", \"btn btn-primary\", [{\"name\": \"type\", \"value\": \"submit\"}]);\n\n\n\t\tlet form = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"form\", null, null,[{\"name\": \"id\", \"value\": \"login_form\"}]), [divEmail, divPass, button]);\n\n\t\tthis.element.appendChild(form);\n\n\t\tdocument.getElementById(\"login_form\").addEventListener(\"submit\", this.submit, false);\n\t}\n\n\tsubmit(e){\n\t\te.preventDefault();\n\n\t\tconsole.log(e.target[0].value);\n\t\t// console.log(e.target[1].value);\n\n\t\tconsole.log(/[a-zA-Z]/.test(e.target[0].value));\n\t\t// console.log(/^\\w{3,12}$/i.test(e.target[1].value));\n\n\n\n\t\t// localStorage.setItem(\"isLogin\", true); // // сохраняем данные в local storage\n\t}\n}\n\n// /^\\w{2,12}$/i.test(\"azaa\") ////test на кол символов\n\n//# sourceURL=webpack:///./src/login.js?");

/***/ }),

/***/ "./src/pageData.js":
/*!*************************!*\
  !*** ./src/pageData.js ***!
  \*************************/
/*! exports provided: PageData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PageData\", function() { return PageData; });\nlet current = 0;\n\nclass PageData {\n\tstatic getCurrentPage(){\n\t\treturn current;\n\t}\n\n\tstatic setCurrentPage(current_page){\n\t\treturn current = current_page;\n\t}\n}\n\n//# sourceURL=webpack:///./src/pageData.js?");

/***/ }),

/***/ "./src/pagination.js":
/*!***************************!*\
  !*** ./src/pagination.js ***!
  \***************************/
/*! exports provided: Pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Pagination\", function() { return Pagination; });\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder */ \"./src/builder.js\");\n/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ \"./src/catalog.js\");\n/* harmony import */ var _pageData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageData */ \"./src/pageData.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n\n\n\n\n\n\nclass Pagination {\n\n\tconstructor(per_page) {\n\t\tthis.element = document.getElementById(\"pagination\");\n\t\tthis.pag_buttons = document.getElementsByClassName(\"page-link\");\n\t\tthis.per_page = per_page;\n\t}\n\n\n\tcreatePag(array_products, current) {\n\t\tlet link, li, ul;\n\t\tlet activeEl;\n\n\t\tthis.element.innerHTML = \"\"; // add\n\n\t\tul = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"ul\", null, \"pagination\");\n\t\tfor (let i = 0; i < Math.ceil(array_products.length / this.per_page); i++) {\n\t\t\tlink = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"a\", i + 1, \"page-link\", [{\"name\": \"data-link\", \"value\": i}]);\n\n\t\t\tactiveEl = (i == current) ? \"page-item active\" : \"page-item\";\n\t\t\tli = _builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].attachChilderToParent(_builder__WEBPACK_IMPORTED_MODULE_0__[\"Builder\"].createNewElement(\"li\", null, activeEl), [link]);\n\t\t\tul.appendChild(li);\n\t\t};\n\n\t\tthis.element.appendChild(ul);\n\t\tconst catalog = new _catalog__WEBPACK_IMPORTED_MODULE_1__[\"Catalog\"](this.per_page);\n\n\t\tArray.from(this.pag_buttons).map((el) => {\n\t\t\tel.addEventListener(\"click\", (e) => {\n\t\t\t\tconsole.log(e.target.dataset.link);\n\t\t\t\t_pageData__WEBPACK_IMPORTED_MODULE_2__[\"PageData\"].setCurrentPage(e.target.dataset.link);\n\t\t\t\tcatalog.renderProducts(_data__WEBPACK_IMPORTED_MODULE_3__[\"Data\"].setProducts(_data__WEBPACK_IMPORTED_MODULE_3__[\"Data\"].loadProducts()),_pageData__WEBPACK_IMPORTED_MODULE_2__[\"PageData\"].getCurrentPage());\n\t\t\t});\n\t\t});\n\t};\n}\n\n//# sourceURL=webpack:///./src/pagination.js?");

/***/ })

/******/ });