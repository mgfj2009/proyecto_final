(self["webpackChunkproyecto_final01"] = self["webpackChunkproyecto_final01"] || []).push([["src_components_about_index_js"],{

/***/ "./src/components/about/FormInput.js":
/*!*******************************************!*\
  !*** ./src/components/about/FormInput.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n */ "./src/components/about/i18n.js");




var FormInput = function FormInput(_ref) {
  var city = _ref.city,
      setCity = _ref.setCity,
      lang = _ref.lang;

  var onChangeHandler = function onChangeHandler(e) {
    setCity(e.target.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, _i18n__WEBPACK_IMPORTED_MODULE_2__.default[lang].city_place), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    value: city,
    onChange: onChangeHandler
  }));
};

FormInput.propTypes = {
  setCity: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  city: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (FormInput);

/***/ }),

/***/ "./src/components/about/Formfields.js":
/*!********************************************!*\
  !*** ./src/components/about/Formfields.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _contexts_MainContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/MainContext */ "./src/contexts/MainContext.js");
/* harmony import */ var _FormInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormInput */ "./src/components/about/FormInput.js");
/* harmony import */ var _SelectInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectInput */ "./src/components/about/SelectInput.js");
/* harmony import */ var _constant_langOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constant/langOptions */ "./src/constant/langOptions.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n */ "./src/components/about/i18n.js");







var FormFields = function FormFields() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_MainContext__WEBPACK_IMPORTED_MODULE_1__.MyConfigContext),
      lang = _useContext.lang,
      setLang = _useContext.setLang,
      city1 = _useContext.city1,
      setCity1 = _useContext.setCity1,
      city2 = _useContext.city2,
      setCity2 = _useContext.setCity2,
      city3 = _useContext.city3,
      setCity3 = _useContext.setCity3;

  var handleChange = function handleChange(e) {
    setLang(e.target.value);
    console.log(lang);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    role: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, _i18n__WEBPACK_IMPORTED_MODULE_5__.default[lang].select_language, ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SelectInput__WEBPACK_IMPORTED_MODULE_3__.default, {
    handleChange: handleChange,
    options: _constant_langOptions__WEBPACK_IMPORTED_MODULE_4__.default,
    lang: lang
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, _i18n__WEBPACK_IMPORTED_MODULE_5__.default[lang].favorite_places, ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormInput__WEBPACK_IMPORTED_MODULE_2__.default, {
    city: city1,
    setCity: setCity1,
    lang: lang
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormInput__WEBPACK_IMPORTED_MODULE_2__.default, {
    city: city2,
    setCity: setCity2,
    lang: lang
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormInput__WEBPACK_IMPORTED_MODULE_2__.default, {
    city: city3,
    setCity: setCity3,
    lang: lang
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (FormFields);

/***/ }),

/***/ "./src/components/about/SelectInput.js":
/*!*********************************************!*\
  !*** ./src/components/about/SelectInput.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n */ "./src/components/about/i18n.js");




var SelectInput = function SelectInput(_ref) {
  var handleChange = _ref.handleChange,
      options = _ref.options,
      lang = _ref.lang;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, _i18n__WEBPACK_IMPORTED_MODULE_2__.default[lang].choose_language), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    className: "form-control",
    value: lang,
    onChange: handleChange
  }, options.map(function (option) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: option.value,
      value: option.value
    }, option.label);
  })));
};

SelectInput.propTypes = {
  handleChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  options: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
  })).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SelectInput);

/***/ }),

/***/ "./src/components/about/i18n.js":
/*!**************************************!*\
  !*** ./src/components/about/i18n.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var i18n = {
  'en': {
    'select_language': 'Select your language',
    'favorite_places': 'Your favorite places',
    'choose_language': 'Choose Language',
    'city_place': 'City / Place'
  },
  'es': {
    'select_language': 'Seleccione su lenguaje',
    'favorite_places': 'Tus lugares favoritos',
    'choose_language': 'Elija el lenguaje',
    'city_place': 'Ciudad / Lugar'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (i18n);

/***/ }),

/***/ "./src/components/about/index.js":
/*!***************************************!*\
  !*** ./src/components/about/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Formfields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Formfields */ "./src/components/about/Formfields.js");
/* harmony import */ var _common_MyErrorBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/MyErrorBoundary */ "./src/components/common/MyErrorBoundary.js");




var About = function About() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card bg-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_MyErrorBoundary__WEBPACK_IMPORTED_MODULE_2__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Formfields__WEBPACK_IMPORTED_MODULE_1__.default, null))))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/constant/langOptions.js":
/*!*************************************!*\
  !*** ./src/constant/langOptions.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var options = [{
  label: "English",
  value: "en"
}, {
  label: "Español",
  value: "es"
}];
/* harmony default export */ __webpack_exports__["default"] = (options);

/***/ })

}]);
//# sourceMappingURL=src_components_about_index_js.bundle.js.map