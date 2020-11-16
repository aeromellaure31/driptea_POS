(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/landing.vue?vue&type=template&id=23355ca8&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/landing.vue?vue&type=template&id=23355ca8& ***!
  \*****************************************************************************************************************************************************************************************************/
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
      staticClass: "pr-16 pt-16",
      attrs: { src: __webpack_require__(/*! @/assets/landing1.jpg */ "./resources/assets/landing1.jpg"), height: "100vh" }
    },
    [
      _c(
        "v-card",
        {
          staticClass: "float-right mr-16 pa-5 mt-16",
          attrs: { width: "400" }
        },
        [
          _c("center", [
            _c("img", { staticClass: "logo", attrs: { src: _vm.image } }),
            _vm._v(" "),
            _c("br")
          ]),
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
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage3))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  color: "orange",
                  label: "Password*",
                  outlined: "",
                  "append-icon": _vm.show3 ? "visibility" : "visibility_off",
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
              _c("a", { staticClass: "FP", attrs: { href: "" } }, [
                _vm._v("Forgot Password")
              ]),
              _c("br"),
              _vm._v(" "),
              _c(
                "center",
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "btn btnRegister ml-12",
                      attrs: { type: "button", color: "orange" },
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
                      attrs: { type: "button", outlined: "", color: "orange" },
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
/* harmony import */ var _landing_vue_vue_type_template_id_23355ca8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.vue?vue&type=template&id=23355ca8& */ "./resources/js/basic/landing.vue?vue&type=template&id=23355ca8&");
/* harmony import */ var _landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.vue?vue&type=script&lang=js& */ "./resources/js/basic/landing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _landing_vue_vue_type_template_id_23355ca8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _landing_vue_vue_type_template_id_23355ca8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
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

/***/ "./resources/js/basic/landing.vue?vue&type=template&id=23355ca8&":
/*!***********************************************************************!*\
  !*** ./resources/js/basic/landing.vue?vue&type=template&id=23355ca8& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_template_id_23355ca8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./landing.vue?vue&type=template&id=23355ca8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/landing.vue?vue&type=template&id=23355ca8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_template_id_23355ca8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_template_id_23355ca8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);