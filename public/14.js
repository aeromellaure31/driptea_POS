(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/login.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/login.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../router */ "./resources/js/router/index.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth */ "./resources/js/services/auth/index.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/logo.png */ "./resources/assets/logo.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _loading_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading.vue */ "./resources/js/basic/loading.vue");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
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
  name: "app",
  data: function data() {
    return {
      show3: false,
      show4: false,
      image: _assets_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      email: '',
      errorMessage: null,
      successMessage: null,
      loadingShow: false
    };
  },
  mounted: function mounted() {},
  components: {
    loading: _loading_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  methods: {
    redirect: function redirect(route) {
      _router__WEBPACK_IMPORTED_MODULE_0__["default"].push(route)["catch"](function () {});
    },
    sendCode: function sendCode() {
      var _this = this;

      if (this.errorMessage === null && this.email !== '') {
        this.loadingShow = true;
        var params = {
          email: this.email
        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_1__["default"].url + "sendCode", params).then(function (res) {
          _this.loadingShow = false;

          if (res.data.data.status === 'true') {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
              text: "Verification Sent to " + _this.email,
              icon: "success",
              dangerMode: true
            }).then(function (e) {
              _this.email = '';

              _this.redirect('/verifyCode/' + res.data.data.id);
            });
          } else {
            _this.errorMessage = 'Email not recognize';
          }
        });
      } else {
        this.errorMessage = "Please input your email address";
      }
    },
    validate: function validate(input) {
      this.successMessage = null;
      var reqWhiteSpace = /\d/;
      var specialChar = /^[A-Za-z0-9 ]+$/;

      if (input === "email") {
        this.errorMessage = null;

        if (this.email === '') {
          this.errorMessage = "Email is required";
        } else if (this.validateEmail(this.email) === false) {
          this.errorMessage = "You have entered an invalid email address.";
        } else {
          this.errorMessage = null;
        }
      } else if (this.email !== null && this.validateEmail(this.email) === true) {
        this.errorMessage = null;
      }
    },
    validateEmail: function validateEmail(email) {
      var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+.[a-zA-Z0-9]*$/;

      if (reg.test(email) === false) {
        return false;
      } else {
        return true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/login.vue?vue&type=style&index=0&id=4eceb98c&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/login.vue?vue&type=style&index=0&id=4eceb98c&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.body[data-v-4eceb98c] {\r\n  width: 80%;\n}\n.col-sm-6[data-v-4eceb98c] {\r\n  margin-top: 7%;\n}\n.quote[data-v-4eceb98c] {\r\n  font-size: 25px;\r\n  font-family: \"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif;\n}\n.FP[data-v-4eceb98c] {\r\n  font-style: italic;\r\n  font-size: 15px;\n}\r\n/* .whole {\r\n  background-color: gray;\r\n} */\n.logo[data-v-4eceb98c] {\r\n  height: 30%;\r\n  width: 30%;\n}\nimg[data-v-4eceb98c] {\r\n  cursor: default;\n}\nspan[data-v-4eceb98c] {\r\n  font-size: 12px;\n}\n.termsCondition[data-v-4eceb98c] {\r\n  margin-top: 6%;\r\n  font-size: 15px;\r\n  text-align: center;\n}\np[data-v-4eceb98c] {\r\n  font-size: 20px;\n}\n.btnRegister[data-v-4eceb98c] {\r\n  margin-top: 2%;\r\n  margin-bottom: 2%;\r\n  font-weight: bold;\r\n  width: 100%;\n}\n.containerWidth[data-v-4eceb98c] {\r\n  width: 80%;\r\n  text-align: left;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/login.vue?vue&type=style&index=0&id=4eceb98c&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/login.vue?vue&type=style&index=0&id=4eceb98c&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=style&index=0&id=4eceb98c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/login.vue?vue&type=style&index=0&id=4eceb98c&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/login.vue?vue&type=template&id=4eceb98c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/login.vue?vue&type=template&id=4eceb98c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    "v-card",
    {
      attrs: {
        color: "grey lighten-4",
        flat: "",
        height: "100%",
        "max-width": "100%"
      }
    },
    [
      _c(
        "center",
        [
          _c("div", { staticClass: "row body" }, [
            _c("div", { staticClass: "col-sm-3" }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-sm-6" },
              [
                _c("center", [
                  _c("img", { staticClass: "logo", attrs: { src: _vm.image } }),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("span", { staticClass: "quote" }, [
                    _vm._v("Your Daily Dose of Milktea.")
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "v-card",
                  { staticClass: "mx-auto", attrs: { "max-width": "400" } },
                  [
                    _c("center", [
                      _c(
                        "div",
                        { staticClass: "containerWidth" },
                        [
                          _c(
                            "v-form",
                            { ref: "form", attrs: { "lazy-validation": "" } },
                            [
                              _c("br"),
                              _c("br"),
                              _vm._v(" "),
                              _c("i", [
                                _vm.errorMessage !== null
                                  ? _c(
                                      "span",
                                      {
                                        staticClass: "text-danger text-center"
                                      },
                                      [_vm._v(_vm._s(_vm.errorMessage))]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      color: "orange",
                                      label: "Email address*",
                                      outlined: "",
                                      type: "text",
                                      required: ""
                                    },
                                    on: {
                                      keyup: function($event) {
                                        return _vm.validate("email")
                                      }
                                    },
                                    model: {
                                      value: _vm.email,
                                      callback: function($$v) {
                                        _vm.email = $$v
                                      },
                                      expression: "email"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  staticClass: "btn btnRegister",
                                  attrs: { type: "button", color: "orange" },
                                  on: {
                                    click: function($event) {
                                      return _vm.sendCode()
                                    }
                                  }
                                },
                                [_vm._v("Continue")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]),
                    _c("br")
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-3" })
          ]),
          _vm._v(" "),
          _vm.loadingShow ? _c("loading") : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/basic/login.vue":
/*!**************************************!*\
  !*** ./resources/js/basic/login.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_4eceb98c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=4eceb98c&scoped=true& */ "./resources/js/basic/login.vue?vue&type=template&id=4eceb98c&scoped=true&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/basic/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _login_vue_vue_type_style_index_0_id_4eceb98c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&id=4eceb98c&scoped=true&lang=css& */ "./resources/js/basic/login.vue?vue&type=style&index=0&id=4eceb98c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_4eceb98c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_4eceb98c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4eceb98c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/basic/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/basic/login.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/basic/login.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/basic/login.vue?vue&type=style&index=0&id=4eceb98c&scoped=true&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/basic/login.vue?vue&type=style&index=0&id=4eceb98c&scoped=true&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_4eceb98c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=style&index=0&id=4eceb98c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/login.vue?vue&type=style&index=0&id=4eceb98c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_4eceb98c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_4eceb98c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_4eceb98c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_4eceb98c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/basic/login.vue?vue&type=template&id=4eceb98c&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./resources/js/basic/login.vue?vue&type=template&id=4eceb98c&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_4eceb98c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=4eceb98c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/login.vue?vue&type=template&id=4eceb98c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_4eceb98c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_4eceb98c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);