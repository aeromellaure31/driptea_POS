(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/register.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/register.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../router */ "./resources/js/router/index.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth */ "./resources/js/services/auth/index.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/logo.png */ "./resources/assets/logo.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_png__WEBPACK_IMPORTED_MODULE_2__);
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
      userType: null,
      image: _assets_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      userName: "",
      password: "",
      confirmPass: "",
      successMessage: null,
      errorMessage: null,
      errorMessage2: null,
      errorMessage3: null,
      errorMessage4: null,
      errorMessage5: null,
      errorMessage6: null,
      errorMessage7: null,
      errorMessage8: null,
      showSuccess: false,
      newPass: null,
      newName: null,
      loadingShow: false
    };
  },
  components: {
    loading: _loading_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  methods: {
    hide: function hide() {
      this.showSuccess = false;
    },
    redirect: function redirect(route) {
      _router__WEBPACK_IMPORTED_MODULE_0__["default"].push(route)["catch"](function () {});
    },
    register: function register() {
      var _this = this;

      this.loadingShow = true;
      this.validate("userType");
      this.validate("userName");
      this.validate("password");
      this.validate("confirmPass");
      var parameter = {
        account_type: this.userType.toUpperCase(),
        name: this.userName,
        password: this.password,
        password_confirmation: this.confirmPass
      };

      if (this.errorMessage === null && this.errorMessage2 === null && this.errorMessage3 === null && this.errorMessage4 === null && this.errorMessage5 === null && this.errorMessage6 === null && this.errorMessage7 === null) {
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_1__["default"].url + "register", parameter).then(function (response) {
          _this.showSuccess = true;
          _this.loadingShow = false;
        })["catch"](function (error) {
          if (error.response.status === 300) {
            _this.errorMessage3 = "Username already exist";
          }

          _this.loadingShow = false;
        });
      } else {
        this.errorMessage = "Please fill up all fields";
        this.loadingShow = false;
      }
    },
    validate: function validate(input) {
      this.successMessage = null;
      var reqWhiteSpace = /\s/;

      if (input === "userName") {
        this.errorMessage = null;

        if (reqWhiteSpace.test(this.userName)) {
          this.errorMessage = "Username should not contain a space.";
        } else if (this.userName === "") {
          this.errorMessage2 = "Username is required.";
        } else if (this.userName.length < 6) {
          this.errorMessage3 = "Username must be atleast 6 characters";
        } else {
          this.errorMessage = null;
          this.errorMessage2 = null;
          this.errorMessage3 = null;
        }
      } else if (input === "userType") {
        this.errorMessage8 = null;

        if (this.userType === "") {
          this.errorMessage8 = "Usertype is required.";
        } else if (this.userType.toLowerCase() !== "admin" && this.userType.toLowerCase() !== "cashier") {
          this.errorMessage8 = "Usertype should only be Admin or Cashier.";
        } else {
          this.errorMessage8 = null;
        }
      } else if (input === "password") {
        this.errorMessage4 = null;

        if (this.password.length < 8) {
          this.errorMessage4 = "Password must be atleast 8 characters.";
        } else if (/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/.test(this.password)) {
          this.successMessage = "Strong password.";
          this.errorMessage4 = null;
          this.errorMessage5 = null;
        } else {
          this.errorMessage5 = "Password must be alphanumeric characters. It should contain 1 number, 1 special character and 1 capital letter.";
        }
      } else if (input === "confirmPass") {
        this.errorMessage6 = null;
        this.successMessage = null;

        if (this.password.localeCompare(this.confirmPass) !== 0) {
          this.errorMessage6 = "Password did not match.";
        } else {
          this.errorMessage6 = null;
        }
      } else if (this.userType !== null && this.userName.length >= 6 && this.email !== null && this.password !== null && this.password.length >= 6 && this.password.localeCompare(this.confirmPass) === 0 && this.type !== null) {
        this.errorMessage = null;
      } else {
        this.errorMessage7 = "Please fill in all required fields.";
        this.errorMessage7 = null;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.register[data-v-48ebf362] {\r\n  width: 100%;\n}\n.container[data-v-48ebf362] {\r\n  margin-top: 2%;\r\n  margin-bottom: 2%;\r\n  width: 50%;\r\n  border: orange solid 1px;\n}\n.btnModal[data-v-48ebf362] {\r\n  width: 100px;\n}\n.modalFont[data-v-48ebf362] {\r\n  font-size: 15px;\n}\n.alert-box[data-v-48ebf362] {\r\n  background: white;\r\n  display: inline-block;\r\n  margin-top: 20%;\r\n  font-weight: lighter;\r\n  border-radius: 3px;\r\n  font-size: 30px;\r\n  padding-left: 50px;\r\n  padding-right: 50px;\r\n  padding-top: 30px;\r\n  padding-bottom: 10px;\r\n  transition: 0.2s;\n}\n.blurred-background[data-v-48ebf362] {\r\n  position: fixed;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n  text-align: center;\r\n  background: rgba(54, 54, 54, 0.7);\n}\nimg[data-v-48ebf362] {\r\n  cursor: default;\n}\nspan[data-v-48ebf362] {\r\n  font-size: 12px;\n}\nhr[data-v-48ebf362] {\r\n  border: 1px solid #17d817;\n}\n.termsCondition[data-v-48ebf362] {\r\n  margin-top: 6%;\r\n  font-size: 15px;\r\n  text-align: center;\n}\n.form-control[data-v-48ebf362] {\r\n  border: 1px solid #17d817;\r\n  border-radius: 5px;\r\n  width: 50%;\n}\n.bRegister[data-v-48ebf362] {\r\n  color: orange;\r\n  cursor: pointer;\n}\np[data-v-48ebf362] {\r\n  font-size: 20px;\n}\n.btnRegister[data-v-48ebf362] {\r\n  margin-top: 2%;\r\n  margin-bottom: 2%;\r\n  background-color: #17d817;\r\n  font-weight: bold;\r\n  width: 100%;\n}\n.containerWidth[data-v-48ebf362] {\r\n  width: 40%;\r\n  text-align: left;\r\n  margin-left: 0px !important;\r\n  margin-right: 0px !important;\n}\n@media screen and (max-width: 600px) {\n.containerWidth[data-v-48ebf362] {\r\n    text-align: left;\r\n    width: 100%;\r\n    margin-left: 0px !important;\r\n    margin-right: 0px !important;\n}\n}\n@media screen and (max-width: 900px) {\n.containerWidth[data-v-48ebf362] {\r\n    text-align: left;\r\n    width: 70%;\n}\n}\n@media screen and (max-width: 1000px) {\n.containerWidth[data-v-48ebf362] {\r\n    text-align: left;\r\n    width: 60%;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/register.vue?vue&type=template&id=48ebf362&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/register.vue?vue&type=template&id=48ebf362&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "container" },
    [
      _c("center", [
        _c("img", {
          staticStyle: { height: "150px", "margin-top": "5%" },
          attrs: { src: _vm.image }
        }),
        _vm._v(" "),
        _c("p", [
          _vm._v("\n      Register to\n      "),
          _c(
            "b",
            {
              staticClass: "bRegister",
              on: {
                click: function($event) {
                  return _vm.redirect("/")
                }
              }
            },
            [_vm._v("Driptea")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("center", [
        _c("div", { staticClass: "containerWidth" }, [
          _c("i", [
            _vm.errorMessage7 !== null
              ? _c("span", { staticClass: "text-danger text-center" }, [
                  _vm._v(_vm._s(_vm.errorMessage7))
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c(
            "form",
            { staticClass: "theForm" },
            [
              _c("i", [
                _vm.errorMessage8 !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage8))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c("v-text-field", {
                    attrs: {
                      color: "orange",
                      label: "Account Type",
                      outlined: "",
                      type: "text",
                      id: "userType",
                      required: ""
                    },
                    on: {
                      keyup: function($event) {
                        return _vm.validate("userType")
                      }
                    },
                    model: {
                      value: _vm.userType,
                      callback: function($$v) {
                        _vm.userType = $$v
                      },
                      expression: "userType"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("i", [
                _vm.errorMessage !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("i", [
                _vm.errorMessage2 !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage2))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("i", [
                _vm.errorMessage3 !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage3))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c("v-text-field", {
                    attrs: {
                      color: "orange",
                      label: "Username",
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
                  })
                ],
                1
              ),
              _vm._v(" "),
              _vm.successMessage !== null
                ? _c("span", { staticClass: "text-success text-center" }, [
                    _vm._v(_vm._s(_vm.successMessage))
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("i", [
                _vm.errorMessage4 !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage4))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("i", [
                _vm.errorMessage5 !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage5))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c("v-text-field", {
                    attrs: {
                      color: "orange",
                      label: "Password",
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
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("i", [
                _vm.errorMessage6 !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage6))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c("v-text-field", {
                    attrs: {
                      color: "orange",
                      label: "Confirm Password",
                      outlined: "",
                      "append-icon": _vm.show4
                        ? "visibility"
                        : "visibility_off",
                      type: _vm.show4 ? "text" : "password",
                      id: "confirmPassword",
                      required: ""
                    },
                    on: {
                      keyup: function($event) {
                        return _vm.validate("confirmPass")
                      },
                      "click:append": function($event) {
                        _vm.show4 = !_vm.show4
                      }
                    },
                    model: {
                      value: _vm.confirmPass,
                      callback: function($$v) {
                        _vm.confirmPass = $$v
                      },
                      expression: "confirmPass"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "btn register",
                  attrs: { type: "submit", color: "orange" },
                  on: { click: _vm.register }
                },
                [_vm._v("Register")]
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _vm.showSuccess
        ? _c(
            "div",
            { staticClass: "blurred-background", attrs: { id: "modal" } },
            [
              _c("div", { staticClass: "alert-box" }, [
                _c("h5", { staticClass: "text-success" }, [
                  _vm._v("Registered Successfully")
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("p", { staticClass: "modalFont" }, [
                  _vm._v("Username: " + _vm._s(_vm.userName))
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "modalFont" }, [
                  _vm._v("Password: " + _vm._s(_vm.password))
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary btnModal",
                    on: { click: _vm.hide }
                  },
                  [_vm._v("OK")]
                )
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.loadingShow ? _c("loading") : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/basic/register.vue":
/*!*****************************************!*\
  !*** ./resources/js/basic/register.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_vue_vue_type_template_id_48ebf362_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=48ebf362&scoped=true& */ "./resources/js/basic/register.vue?vue&type=template&id=48ebf362&scoped=true&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./resources/js/basic/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _register_vue_vue_type_style_index_0_id_48ebf362_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css& */ "./resources/js/basic/register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_48ebf362_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _register_vue_vue_type_template_id_48ebf362_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "48ebf362",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/basic/register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/basic/register.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/basic/register.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/basic/register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/basic/register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_48ebf362_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_48ebf362_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_48ebf362_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_48ebf362_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_48ebf362_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/basic/register.vue?vue&type=template&id=48ebf362&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/basic/register.vue?vue&type=template&id=48ebf362&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_48ebf362_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=template&id=48ebf362&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/register.vue?vue&type=template&id=48ebf362&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_48ebf362_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_48ebf362_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);