(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/forgotPass.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/forgotPass.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "app",
  data: function data() {
    return {
      id: this.$route.params.id,
      show3: false,
      show4: false,
      image: _assets_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      code: '',
      errorMessage5: null,
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
    validate: function validate() {
      if (this.code === '') {
        this.errorMessage5 = "Verification code required";
      } else {
        this.errorMessage5 = null;
      }
    },
    resend: function resend() {
      var _this = this;

      this.loadingShow = true;
      var params = {
        id: this.id
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_1__["default"].url + "updateCode", params).then(function (res) {
        _this.loadingShow = false;

        if (res.data.forgotPass.status === 'success') {
          sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
            text: "Verification Sent to " + res.data.forgotPass.email,
            icon: "success"
          });
        }
      });
    },
    verifyCode: function verifyCode() {
      var _this2 = this;

      if (this.errorMessage5 === null && this.code !== '') {
        this.loadingShow = true;
        var params = {
          id: this.id,
          code: this.code
        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_1__["default"].url + "checkCode", params).then(function (res) {
          _this2.loadingShow = false;

          if (res.data.item.status === 'true') {
            _this2.redirect('/changePass/' + res.data.item[0].email);
          } else {
            _this2.errorMessage5 = 'Verification code not recognize';
          }
        });
      } else {
        this.errorMessage5 = "Verification code required";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/forgotPass.vue?vue&type=style&index=0&id=3ed9e853&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/forgotPass.vue?vue&type=style&index=0&id=3ed9e853&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.body[data-v-3ed9e853] {\r\n  width: 80%;\n}\n.col-sm-6[data-v-3ed9e853] {\r\n  margin-top: 7%;\n}\n.quote[data-v-3ed9e853] {\r\n  font-size: 25px;\r\n  font-family: \"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif;\n}\n.FP[data-v-3ed9e853] {\r\n  font-style: italic;\r\n  font-size: 15px;\n}\n.logo[data-v-3ed9e853] {\r\n  height: 30%;\r\n  width: 30%;\n}\nimg[data-v-3ed9e853] {\r\n  cursor: default;\n}\nspan[data-v-3ed9e853] {\r\n  font-size: 12px;\n}\n.termsCondition[data-v-3ed9e853] {\r\n  margin-top: 6%;\r\n  font-size: 15px;\r\n  text-align: center;\n}\np[data-v-3ed9e853] {\r\n  font-size: 20px;\n}\n.btnRegister[data-v-3ed9e853] {\r\n  margin-top: 2%;\r\n  margin-bottom: 2%;\r\n  font-weight: bold;\r\n  width: 100%;\n}\n.containerWidth[data-v-3ed9e853] {\r\n  width: 80%;\r\n  text-align: left;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/forgotPass.vue?vue&type=style&index=0&id=3ed9e853&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/forgotPass.vue?vue&type=style&index=0&id=3ed9e853&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./forgotPass.vue?vue&type=style&index=0&id=3ed9e853&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/forgotPass.vue?vue&type=style&index=0&id=3ed9e853&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/forgotPass.vue?vue&type=template&id=3ed9e853&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/forgotPass.vue?vue&type=template&id=3ed9e853&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
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
                                _vm.errorMessage5 !== null
                                  ? _c(
                                      "span",
                                      {
                                        staticClass: "text-danger text-center"
                                      },
                                      [_vm._v(_vm._s(_vm.errorMessage5))]
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
                                      label: "Verification code*",
                                      outlined: "",
                                      type: "text",
                                      autocomplete: "off",
                                      required: ""
                                    },
                                    on: {
                                      keyup: function($event) {
                                        return _vm.validate()
                                      }
                                    },
                                    model: {
                                      value: _vm.code,
                                      callback: function($$v) {
                                        _vm.code = $$v
                                      },
                                      expression: "code"
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
                                      return _vm.verifyCode()
                                    }
                                  }
                                },
                                [_vm._v("Verify")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("i", [
                        _c(
                          "a",
                          {
                            staticClass: "FP",
                            on: {
                              click: function($event) {
                                return _vm.resend()
                              }
                            }
                          },
                          [_vm._v("Resend Code")]
                        )
                      ])
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

/***/ "./resources/js/basic/forgotPass.vue":
/*!*******************************************!*\
  !*** ./resources/js/basic/forgotPass.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forgotPass_vue_vue_type_template_id_3ed9e853_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotPass.vue?vue&type=template&id=3ed9e853&scoped=true& */ "./resources/js/basic/forgotPass.vue?vue&type=template&id=3ed9e853&scoped=true&");
/* harmony import */ var _forgotPass_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotPass.vue?vue&type=script&lang=js& */ "./resources/js/basic/forgotPass.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _forgotPass_vue_vue_type_style_index_0_id_3ed9e853_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgotPass.vue?vue&type=style&index=0&id=3ed9e853&scoped=true&lang=css& */ "./resources/js/basic/forgotPass.vue?vue&type=style&index=0&id=3ed9e853&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _forgotPass_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _forgotPass_vue_vue_type_template_id_3ed9e853_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _forgotPass_vue_vue_type_template_id_3ed9e853_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3ed9e853",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/basic/forgotPass.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/basic/forgotPass.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/basic/forgotPass.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forgotPass_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./forgotPass.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/forgotPass.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forgotPass_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/basic/forgotPass.vue?vue&type=style&index=0&id=3ed9e853&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/basic/forgotPass.vue?vue&type=style&index=0&id=3ed9e853&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_forgotPass_vue_vue_type_style_index_0_id_3ed9e853_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./forgotPass.vue?vue&type=style&index=0&id=3ed9e853&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/forgotPass.vue?vue&type=style&index=0&id=3ed9e853&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_forgotPass_vue_vue_type_style_index_0_id_3ed9e853_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_forgotPass_vue_vue_type_style_index_0_id_3ed9e853_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_forgotPass_vue_vue_type_style_index_0_id_3ed9e853_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_forgotPass_vue_vue_type_style_index_0_id_3ed9e853_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/basic/forgotPass.vue?vue&type=template&id=3ed9e853&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/basic/forgotPass.vue?vue&type=template&id=3ed9e853&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_forgotPass_vue_vue_type_template_id_3ed9e853_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./forgotPass.vue?vue&type=template&id=3ed9e853&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/forgotPass.vue?vue&type=template&id=3ed9e853&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_forgotPass_vue_vue_type_template_id_3ed9e853_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_forgotPass_vue_vue_type_template_id_3ed9e853_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);