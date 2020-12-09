(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/landing.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/landing.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/logo.png */ "./resources/assets/logo.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router */ "./resources/js/router/index.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth */ "./resources/js/services/auth/index.js");
/* harmony import */ var _loading_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading.vue */ "./resources/js/basic/loading.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    loading: _loading_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    el: "#app";

    return {
      image: _assets_logo_png__WEBPACK_IMPORTED_MODULE_0___default.a,
      show3: false,
      userName: "",
      password: "",
      errorMessage: null,
      errorMessage2: null,
      errorMessage3: null,
      loadingShow: false
    };
  },
  methods: {
    redirect: function redirect(route) {
      _router__WEBPACK_IMPORTED_MODULE_1__["default"].push(route)["catch"](function () {});
    },
    login: function login(e) {
      e.preventDefault();
      this.loadingShow = true;
      this.validate("userName");
      this.validate("password");
      var parameter = {
        name: this.userName,
        password: this.password
      };

      if (this.userName === "" && this.password === "") {
        this.errorMessage = "Please fill in all required fields";
        this.loadingShow = false;
      } else {
        this.authenticate(this.userName, this.password);
        this.loadingShow = false;
      }
    },
    authenticate: function authenticate(name, password) {
      var _this = this;

      this.loadingShow = true;
      var credentials = {
        name: name,
        password: password
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].url + "login", credentials).then(function (response) {
        _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].setToken(response.data.token);
        _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].authenticateForAll();
        _this.loadingShow = false;
      })["catch"](function (err) {
        if (err.response.status === 400) {
          _this.errorMessage = "Invalid credentials!";
        }

        _this.loadingShow = false;
      });
    },
    validate: function validate(input) {
      this.successMessage = null;

      if (input === "userName") {
        this.errorMessage2 = null;

        if (this.userName === "") {
          this.errorMessage2 = "Username is required.";
        } else {
          this.errorMessage2 = null;
        }
      } else if (input === "password") {
        this.errorMessage3 = null;

        if (this.password === "") {
          this.errorMessage3 = "Password is required.";
        } else {
          this.errorMessage3 = null;
        }
      } else {
        this.errorMessage = null;
        this.errorMessage = "Please fill in all required fields.";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/landing.vue?vue&type=style&index=0&id=23355ca8&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/landing.vue?vue&type=style&index=0&id=23355ca8&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.logo[data-v-23355ca8]{\r\n  height: 150px;\r\n  width: 150px;\n}\n.design[data-v-23355ca8]{\r\n  margin-top: 20%;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/landing.vue?vue&type=style&index=0&id=23355ca8&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/landing.vue?vue&type=style&index=0&id=23355ca8&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./landing.vue?vue&type=style&index=0&id=23355ca8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/landing.vue?vue&type=style&index=0&id=23355ca8&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/landing.vue?vue&type=template&id=23355ca8&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/landing.vue?vue&type=template&id=23355ca8&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-img",
    {
      staticStyle: { width: "100%", height: "100%" },
      attrs: { src: __webpack_require__(/*! @/assets/landing1.jpg */ "./resources/assets/landing1.jpg") }
    },
    [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-7" }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-5" },
            [
              _c(
                "v-card",
                { staticClass: "design", attrs: { width: "400" } },
                [
                  _c("center", [
                    _c("img", {
                      staticClass: "logo",
                      attrs: { src: _vm.image }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticStyle: {
                        "padding-left": "10%",
                        "padding-right": "10%",
                        "padding-top": "2%",
                        "padding-bottom": "2%"
                      }
                    },
                    [
                      _c("i", [
                        _vm.errorMessage !== null
                          ? _c(
                              "span",
                              { staticClass: "text-danger text-center" },
                              [_vm._v(_vm._s(_vm.errorMessage))]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("i", [
                        _vm.errorMessage2 !== null
                          ? _c(
                              "span",
                              { staticClass: "text-danger text-center" },
                              [_vm._v(_vm._s(_vm.errorMessage2))]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-form",
                        {
                          ref: "form",
                          staticClass: "mx-auto",
                          attrs: { "lazy-validation": "" }
                        },
                        [
                          _c("v-text-field", {
                            attrs: {
                              color: "orange",
                              label: "Username*",
                              outlined: "",
                              type: "text",
                              id: "userName",
                              required: ""
                            },
                            on: {
                              keyup: function($event) {
                                return _vm.validate("userName")
                              }
                            },
                            model: {
                              value: _vm.userName,
                              callback: function($$v) {
                                _vm.userName = $$v
                              },
                              expression: "userName"
                            }
                          }),
                          _vm._v(" "),
                          _c("i", [
                            _vm.errorMessage3 !== null
                              ? _c(
                                  "span",
                                  { staticClass: "text-danger text-center" },
                                  [_vm._v(_vm._s(_vm.errorMessage3))]
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              color: "orange",
                              label: "Password*",
                              outlined: "",
                              "append-icon": _vm.show3
                                ? "visibility"
                                : "visibility_off",
                              type: _vm.show3 ? "text" : "password",
                              id: "password",
                              required: ""
                            },
                            on: {
                              keyup: function($event) {
                                return _vm.validate("password")
                              },
                              "click:append": function($event) {
                                _vm.show3 = !_vm.show3
                              }
                            },
                            model: {
                              value: _vm.password,
                              callback: function($$v) {
                                _vm.password = $$v
                              },
                              expression: "password"
                            }
                          }),
                          _vm._v(" "),
                          _c("i", [
                            _c(
                              "a",
                              {
                                staticClass: "FP",
                                staticStyle: { "font-size": "13px" },
                                on: {
                                  click: function($event) {
                                    return _vm.redirect("/forgotPass")
                                  }
                                }
                              },
                              [_vm._v("Forgot Password")]
                            )
                          ]),
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "center",
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "ma-2",
                                  attrs: { type: "submit", color: "orange" },
                                  on: { click: _vm.login }
                                },
                                [_vm._v("Login")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("hr"),
                          _vm._v(" "),
                          _c(
                            "center",
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "ma-2",
                                  attrs: {
                                    type: "button",
                                    outlined: "",
                                    color: "orange"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.redirect("/register")
                                    }
                                  }
                                },
                                [_vm._v("Create New Account")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/landing1.jpg":
/*!***************************************!*\
  !*** ./resources/assets/landing1.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/landing1.jpg?a0e09369cbf15672a2f2914033ce9f0b";

/***/ }),

/***/ "./resources/js/basic/landing.vue":
/*!****************************************!*\
  !*** ./resources/js/basic/landing.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _landing_vue_vue_type_template_id_23355ca8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.vue?vue&type=template&id=23355ca8&scoped=true& */ "./resources/js/basic/landing.vue?vue&type=template&id=23355ca8&scoped=true&");
/* harmony import */ var _landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.vue?vue&type=script&lang=js& */ "./resources/js/basic/landing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _landing_vue_vue_type_style_index_0_id_23355ca8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing.vue?vue&type=style&index=0&id=23355ca8&scoped=true&lang=css& */ "./resources/js/basic/landing.vue?vue&type=style&index=0&id=23355ca8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _landing_vue_vue_type_template_id_23355ca8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _landing_vue_vue_type_template_id_23355ca8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "23355ca8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/basic/landing.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/basic/landing.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/basic/landing.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./landing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/landing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/basic/landing.vue?vue&type=style&index=0&id=23355ca8&scoped=true&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/basic/landing.vue?vue&type=style&index=0&id=23355ca8&scoped=true&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_style_index_0_id_23355ca8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./landing.vue?vue&type=style&index=0&id=23355ca8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/landing.vue?vue&type=style&index=0&id=23355ca8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_style_index_0_id_23355ca8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_style_index_0_id_23355ca8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_style_index_0_id_23355ca8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_style_index_0_id_23355ca8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/basic/landing.vue?vue&type=template&id=23355ca8&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/basic/landing.vue?vue&type=template&id=23355ca8&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_template_id_23355ca8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./landing.vue?vue&type=template&id=23355ca8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/landing.vue?vue&type=template&id=23355ca8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_template_id_23355ca8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_template_id_23355ca8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);