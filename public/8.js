(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/registerUser.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/registerUser.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router */ "./resources/js/router/index.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth */ "./resources/js/services/auth/index.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/logo.png */ "./resources/assets/logo.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loading_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading.vue */ "./resources/js/basic/loading.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      type: "Customer",
      image: _assets_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      firstname: "",
      lastname: "",
      username: "",
      address: "",
      contactNum: "",
      email: "",
      password: "",
      confirmPass: "",
      rules: {
        required: function required(value) {
          return !!value || "Required.";
        },
        min: function min(v) {
          return v.length >= 8 || "Min 8 characters";
        },
        emailMatch: function emailMatch() {
          return "The email and password you entered don't match";
        }
      },
      successMessage: null,
      errorMessage1: null,
      errorMessage2: null,
      errorMessage3: null,
      errorMessage4: null,
      errorMessage5: null,
      errorMessage6: null,
      errorMessage7: null,
      errorMessage8: null,
      errorMessage9: null,
      errorMessage10: null,
      errorMessage11: null,
      errorMessage12: null,
      errorMessage13: null,
      errorMessage14: null,
      errorMessage15: null,
      errorMessage16: null,
      loadingShow: false
    };
  },
  mounted: function mounted() {},
  components: {
    loading: _loading_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  methods: {
    redirect: function redirect(route) {
      _router__WEBPACK_IMPORTED_MODULE_1__["default"].push(route)["catch"](function () {});
    },
    register: function register(e) {
      var _this = this;

      e.preventDefault();
      this.loadingShow = true;
      this.validate("firstname");
      this.validate("lastname");
      this.validate("username");
      this.validate("address");
      this.validate("contact");
      this.validate("email");
      this.validate("password");
      this.validate("confirmPass");
      var parameter = {
        account_type: this.type,
        firstname: this.firstname,
        lastname: this.lastname,
        address: this.address,
        contactNumber: this.contactNum,
        email: this.email,
        name: this.username,
        password: this.password,
        password_confirmation: this.confirmPass
      };

      if (this.errorMessage1 === null && this.errorMessage2 === null && this.errorMessage3 === null && this.errorMessage4 === null && this.errorMessage5 === null && this.errorMessage6 === null && this.errorMessage7 === null && this.errorMessage8 === null && this.errorMessage9 === null && this.errorMessage10 === null && this.errorMessage11 === null && this.errorMessage12 === null && this.errorMessage13 === null && this.errorMessage14 === null && this.errorMessage15 === null && this.errorMessage16 === null) {
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].url + "register", parameter).then(function (response) {
          _this.loadingShow = false;
          sweetalert__WEBPACK_IMPORTED_MODULE_0___default()({
            title: "You have successfully registered!",
            icon: "success"
          }).then(function (el) {
            _this.authenticate(_this.username, _this.password);
          });
        })["catch"](function (error) {
          if (error.response.status === 300) {
            _this.errorMessage14 = "Username already exist";
          }

          if (error.response.status === 301) {
            _this.errorMessage3 = "Email already exist";
          }

          _this.loadingShow = false;
        });
      } else {
        // this.errorMessage1 = "Please fill up all fields";
        this.loadingShow = false;
      }
    },
    authenticate: function authenticate(name, password) {
      var _this2 = this;

      this.loadingShow = true;
      var credentials = {
        name: name,
        password: password
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].url + "login", credentials).then(function (response) {
        _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].setToken(response.data.token);
        _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].authenticateForAll();
        _this2.loadingShow = false;
      })["catch"](function (err) {
        if (err.response.status === 400) {
          _this2.errorMessage = "Invalid credentials!";
        }

        _this2.loadingShow = false;
      });
    },
    validate: function validate(input) {
      this.successMessage = null;
      var reqWhiteSpace = /\d/;
      var reqSpace = /\s/;
      var specialChar = /^[A-Za-z0-9 ]+$/;

      if (input === "firstname") {
        this.errorMessage1 = null;

        if (reqWhiteSpace.test(this.firstname)) {
          this.errorMessage1 = "First name should not contain a number.";
        } else if (this.firstname === "") {
          this.errorMessage2 = "First name is required.";
        } else if (!specialChar.test(this.firstname)) {
          this.errorMessage2 = "First name should not contain a special character.";
        } else {
          this.errorMessage1 = null;
          this.errorMessage2 = null;
        }
      } else if (input === "lastname") {
        this.errorMessage12 = null;

        if (reqWhiteSpace.test(this.lastname)) {
          this.errorMessage12 = "Last name should not contain a number.";
        } else if (this.lastname === "") {
          this.errorMessage13 = "Last name is required.";
        } else if (!specialChar.test(this.lastname)) {
          this.errorMessage13 = "Last name should not contain a special character.";
        } else {
          this.errorMessage12 = null;
          this.errorMessage13 = null;
        }
      } else if (input === "username") {
        this.errorMessage14 = null;

        if (reqSpace.test(this.username)) {
          this.errorMessage14 = "Username should not contain a space.";
        } else if (this.username === "") {
          this.errorMessage14 = "Username is required.";
        } else if (this.username.length < 6) {
          this.errorMessage14 = "Username must be atleast 6 characters";
        } else {
          this.errorMessage14 = null;
          this.errorMessage14 = null;
          this.errorMessage14 = null;
        }
      } else if (input === "email") {
        this.errorMessage3 = null;

        if (this.email === '') {
          this.errorMessage3 = "Email is required";
        } else if (this.validateEmail(this.email) === false) {
          this.errorMessage3 = "You have entered an invalid email address";
        } else {
          this.errorMessage3 = null;
        }
      } else if (input === "password") {
        this.errorMessage4 = null;

        if (this.password === '') {
          this.errorMessage4 = "Password is required";
        } else if (this.password.length < 8) {
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

        if (this.confirmPass === '') {
          this.errorMessage6 = "Confirm password is required";
        } else if (this.password.localeCompare(this.confirmPass) !== 0) {
          this.errorMessage6 = "Password did not match.";
        } else {
          this.errorMessage6 = null;
        }
      } else if (input === "address") {
        this.errorMessage10 = null;

        if (this.address === "") {
          this.errorMessage10 = "Address is required.";
        } else {
          this.errorMessage10 = null;
        }
      } else if (input === "contact") {
        this.errorMessage8 = null;
        this.successMessage9 = null;

        if (this.contactNum === '') {
          this.errorMessage8 = "Phone number is required";
        } else if (this.contactNum.length > 11) {
          this.errorMessage8 = "Phone number must be 11 digits";
        } else if (this.contactNum.length < 11) {
          this.errorMessage9 = "Phone number must be 11 digits";
        } else if (this.contactNum.slice(0, 2) != "09") {
          this.errorMessage9 = "Phone number must start with 09";
        } else {
          this.errorMessage8 = null;
          this.errorMessage9 = null;
        }
      } else if (this.contactNum != null && this.address != null && this.firstname.length >= 6 && this.email !== null && this.password !== null && this.password.length >= 6 && this.password.localeCompare(this.confirmPass) === 0 && this.type !== null && this.validateEmail(this.email) === true) {
        this.errorMessage1 = null;
      } else {
        // this.errorMessage7 = "Please fill in all required fields.";
        this.errorMessage7 = null;
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/registerUser.vue?vue&type=style&index=0&id=5b3af0cd&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/registerUser.vue?vue&type=style&index=0&id=5b3af0cd&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.register[data-v-5b3af0cd] {\r\n  width: 50%;\n}\r\n/* .container {\r\n  border: orange solid 1px;\r\n  margin-bottom: 2%;\r\n  margin-top: 2%;\r\n  width: 60%;\r\n  background-color: white;\r\n} */\nspan[data-v-5b3af0cd] {\r\n  font-size: 12px;\n}\r\n/* // hr{\r\n//     border: 1px solid #17D817;\r\n// } */\n.termsCondition[data-v-5b3af0cd] {\r\n  margin-top: 6%;\r\n  font-size: 15px;\r\n  text-align: center;\n}\r\n/* // .form-control {\r\n//   border: 1px solid #17d817;\r\n//   border-radius: 5px;\r\n// } */\n.bRegister[data-v-5b3af0cd] {\r\n  color: orange;\r\n  cursor: pointer;\n}\np[data-v-5b3af0cd] {\r\n  font-size: 20px;\n}\r\n/* // .btnRegister {\r\n//   margin-top: 2%;\r\n//   margin-bottom: 2%;\r\n//   background-color: #17d817;\r\n//   font-weight: bold;\r\n//   width: 100%;\r\n// } */\n.containerWidth[data-v-5b3af0cd] {\r\n  width: 80%;\r\n  text-align: left;\r\n  margin-left: 5%;\r\n  margin-right: 5%;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/registerUser.vue?vue&type=style&index=0&id=5b3af0cd&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/registerUser.vue?vue&type=style&index=0&id=5b3af0cd&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./registerUser.vue?vue&type=style&index=0&id=5b3af0cd&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/registerUser.vue?vue&type=style&index=0&id=5b3af0cd&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/registerUser.vue?vue&type=template&id=5b3af0cd&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/registerUser.vue?vue&type=template&id=5b3af0cd&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
      _c(
        "div",
        { staticClass: "container" },
        [
          _c(
            "v-card",
            {
              staticClass: "mx-auto",
              attrs: { width: "400", "max-height": "2000" }
            },
            [
              _c("center", [
                _c("img", {
                  staticStyle: { height: "150px", "margin-top": "1%" },
                  attrs: { src: _vm.image },
                  on: {
                    click: function($event) {
                      return _vm.redirect("/")
                    }
                  }
                }),
                _vm._v(" "),
                _c("p", [
                  _vm._v("\n          Register to\n          "),
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
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("i", [
                    _vm.errorMessage7 !== null
                      ? _c("span", { staticClass: "text-danger text-center" }, [
                          _vm._v(_vm._s(_vm.errorMessage7))
                        ])
                      : _vm._e()
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("center", [
                _c(
                  "div",
                  { staticClass: "containerWidth" },
                  [
                    _c(
                      "v-form",
                      [
                        _c(
                          "center",
                          [
                            _c("i", [
                              _vm.errorMessage1 !== null
                                ? _c(
                                    "span",
                                    { staticClass: "text-danger text-center" },
                                    [_vm._v(_vm._s(_vm.errorMessage1))]
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
                              "v-flex",
                              [
                                _c("v-text-field", {
                                  attrs: {
                                    color: "orange",
                                    label: "First name",
                                    outlined: "",
                                    type: "text",
                                    id: "firstname",
                                    required: ""
                                  },
                                  on: {
                                    keyup: function($event) {
                                      return _vm.validate("firstname")
                                    }
                                  },
                                  model: {
                                    value: _vm.firstname,
                                    callback: function($$v) {
                                      _vm.firstname = $$v
                                    },
                                    expression: "firstname"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("i", [
                              _vm.errorMessage12 !== null
                                ? _c(
                                    "span",
                                    { staticClass: "text-danger text-center" },
                                    [_vm._v(_vm._s(_vm.errorMessage12))]
                                  )
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c("i", [
                              _vm.errorMessage13 !== null
                                ? _c(
                                    "span",
                                    { staticClass: "text-danger text-center" },
                                    [_vm._v(_vm._s(_vm.errorMessage13))]
                                  )
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-flex",
                              [
                                _c("v-text-field", {
                                  attrs: {
                                    color: "orange",
                                    label: "Last name",
                                    outlined: "",
                                    type: "text",
                                    id: "lastname",
                                    required: ""
                                  },
                                  on: {
                                    keyup: function($event) {
                                      return _vm.validate("lastname")
                                    }
                                  },
                                  model: {
                                    value: _vm.lastname,
                                    callback: function($$v) {
                                      _vm.lastname = $$v
                                    },
                                    expression: "lastname"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("i", [
                              _vm.errorMessage10 !== null
                                ? _c(
                                    "span",
                                    { staticClass: "text-danger text-center" },
                                    [_vm._v(_vm._s(_vm.errorMessage10))]
                                  )
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-flex",
                              [
                                _c("v-text-field", {
                                  attrs: {
                                    color: "orange",
                                    label: "Address",
                                    outlined: "",
                                    type: "text",
                                    id: "address",
                                    required: ""
                                  },
                                  on: {
                                    keyup: function($event) {
                                      return _vm.validate("address")
                                    }
                                  },
                                  model: {
                                    value: _vm.address,
                                    callback: function($$v) {
                                      _vm.address = $$v
                                    },
                                    expression: "address"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("i", [
                              _vm.errorMessage8 !== null
                                ? _c(
                                    "span",
                                    { staticClass: "text-danger text-center" },
                                    [_vm._v(_vm._s(_vm.errorMessage8))]
                                  )
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c("i", [
                              _vm.errorMessage9 !== null
                                ? _c(
                                    "span",
                                    { staticClass: "text-danger text-center" },
                                    [_vm._v(_vm._s(_vm.errorMessage9))]
                                  )
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-flex",
                              [
                                _c("v-text-field", {
                                  attrs: {
                                    color: "orange",
                                    label: "Phone number",
                                    outlined: "",
                                    type: "number",
                                    id: "contactNum",
                                    required: ""
                                  },
                                  on: {
                                    keyup: function($event) {
                                      return _vm.validate("contact")
                                    }
                                  },
                                  model: {
                                    value: _vm.contactNum,
                                    callback: function($$v) {
                                      _vm.contactNum = $$v
                                    },
                                    expression: "contactNum"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("i", [
                              _vm.errorMessage14 !== null
                                ? _c(
                                    "span",
                                    { staticClass: "text-danger text-center" },
                                    [_vm._v(_vm._s(_vm.errorMessage14))]
                                  )
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c("i", [
                              _vm.errorMessage15 !== null
                                ? _c(
                                    "span",
                                    { staticClass: "text-danger text-center" },
                                    [_vm._v(_vm._s(_vm.errorMessage15))]
                                  )
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c("i", [
                              _vm.errorMessage16 !== null
                                ? _c(
                                    "span",
                                    { staticClass: "text-danger text-center" },
                                    [_vm._v(_vm._s(_vm.errorMessage16))]
                                  )
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-flex",
                              [
                                _c("v-text-field", {
                                  attrs: {
                                    color: "orange",
                                    label: "Username",
                                    outlined: "",
                                    type: "text",
                                    id: "username",
                                    required: ""
                                  },
                                  on: {
                                    keyup: function($event) {
                                      return _vm.validate("username")
                                    }
                                  },
                                  model: {
                                    value: _vm.username,
                                    callback: function($$v) {
                                      _vm.username = $$v
                                    },
                                    expression: "username"
                                  }
                                })
                              ],
                              1
                            ),
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
                            _c(
                              "v-flex",
                              [
                                _c("v-text-field", {
                                  attrs: {
                                    color: "orange",
                                    label: "Email",
                                    outlined: "",
                                    type: "email",
                                    id: "email",
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
                            _vm.successMessage !== null
                              ? _c(
                                  "span",
                                  { staticClass: "text-success text-center" },
                                  [_vm._v(_vm._s(_vm.successMessage))]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c("i", [
                              _vm.errorMessage4 !== null
                                ? _c(
                                    "span",
                                    { staticClass: "text-danger text-center" },
                                    [_vm._v(_vm._s(_vm.errorMessage4))]
                                  )
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c("i", [
                              _vm.errorMessage5 !== null
                                ? _c(
                                    "span",
                                    { staticClass: "text-danger text-center" },
                                    [_vm._v(_vm._s(_vm.errorMessage5))]
                                  )
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-flex",
                              [
                                _c("v-text-field", {
                                  attrs: {
                                    color: "orange",
                                    "append-icon": _vm.show3
                                      ? "visibility"
                                      : "visibility_off",
                                    type: _vm.show3 ? "text" : "password",
                                    label: "Password",
                                    outlined: "",
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
                                ? _c(
                                    "span",
                                    { staticClass: "text-danger text-center" },
                                    [_vm._v(_vm._s(_vm.errorMessage6))]
                                  )
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-flex",
                              [
                                _c("v-text-field", {
                                  attrs: {
                                    color: "orange",
                                    label: "Confirm password",
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
                                attrs: {
                                  type: "submit",
                                  outlined: "",
                                  color: "orange"
                                },
                                on: { click: _vm.register }
                              },
                              [_vm._v("Register")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("center", [
                      _c("label", { staticClass: "termsCondition" }, [
                        _vm._v(
                          "\n              By signing up, you agree to our\n              "
                        ),
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
                          [_vm._v("Terms")]
                        ),
                        _vm._v(" and\n              "),
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
                          [_vm._v("Conditions")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("label", { staticClass: "termsCondition" }, [
                        _vm._v(
                          "\n              Already have an account?\n              "
                        ),
                        _c(
                          "b",
                          {
                            staticClass: "bRegister",
                            on: {
                              click: function($event) {
                                return _vm.redirect("/login")
                              }
                            }
                          },
                          [_vm._v("Login")]
                        )
                      ])
                    ])
                  ],
                  1
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _vm.loadingShow ? _c("loading") : _vm._e()
        ],
        1
      )
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

/***/ "./resources/js/basic/registerUser.vue":
/*!*********************************************!*\
  !*** ./resources/js/basic/registerUser.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _registerUser_vue_vue_type_template_id_5b3af0cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registerUser.vue?vue&type=template&id=5b3af0cd&scoped=true& */ "./resources/js/basic/registerUser.vue?vue&type=template&id=5b3af0cd&scoped=true&");
/* harmony import */ var _registerUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registerUser.vue?vue&type=script&lang=js& */ "./resources/js/basic/registerUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _registerUser_vue_vue_type_style_index_0_id_5b3af0cd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registerUser.vue?vue&type=style&index=0&id=5b3af0cd&scoped=true&lang=css& */ "./resources/js/basic/registerUser.vue?vue&type=style&index=0&id=5b3af0cd&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _registerUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _registerUser_vue_vue_type_template_id_5b3af0cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _registerUser_vue_vue_type_template_id_5b3af0cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5b3af0cd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/basic/registerUser.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/basic/registerUser.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/basic/registerUser.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./registerUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/registerUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/basic/registerUser.vue?vue&type=style&index=0&id=5b3af0cd&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/basic/registerUser.vue?vue&type=style&index=0&id=5b3af0cd&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_style_index_0_id_5b3af0cd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./registerUser.vue?vue&type=style&index=0&id=5b3af0cd&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/registerUser.vue?vue&type=style&index=0&id=5b3af0cd&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_style_index_0_id_5b3af0cd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_style_index_0_id_5b3af0cd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_style_index_0_id_5b3af0cd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_style_index_0_id_5b3af0cd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/basic/registerUser.vue?vue&type=template&id=5b3af0cd&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/basic/registerUser.vue?vue&type=template&id=5b3af0cd&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_template_id_5b3af0cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./registerUser.vue?vue&type=template&id=5b3af0cd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/registerUser.vue?vue&type=template&id=5b3af0cd&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_template_id_5b3af0cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_template_id_5b3af0cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);