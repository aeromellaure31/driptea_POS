(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      userType: '',
      image: _assets_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      firstname: "",
      lastname: "",
      username: "",
      address: "",
      contactNum: "",
      email: "",
      password: "",
      confirmPass: "",
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
      errorMessage17: null,
      showSuccess: false,
      newPass: null,
      newName: null,
      headersForCup: [{
        text: "Firstname",
        value: "firstname"
      }, {
        text: "Lastname",
        value: "lastname"
      }, {
        text: "Username",
        value: "name"
      }, {
        text: "Email",
        value: "email"
      }, {
        text: "Account Type",
        value: "account_type"
      }, {
        text: "Contact#",
        value: "contactNumber"
      }, {
        text: "Address",
        value: "address"
      }],
      loadingShow: false,
      userData: [],
      search: '',
      showModal: false
    };
  },
  mounted: function mounted() {
    this.retrieve();
  },
  components: {
    loading: _loading_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  methods: {
    addAccount: function addAccount() {
      this.userType = "", this.image = _assets_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a, this.firstname = "", this.lastname = "", this.username = "", this.address = "", this.contactNum = "", this.email = "", this.password = "", this.confirmPass = "", this.successMessage = null, this.errorMessage1 = null, this.errorMessage2 = null, this.errorMessage3 = null, this.errorMessage4 = null, this.errorMessage5 = null, this.errorMessage6 = null, this.errorMessage7 = null, this.errorMessage8 = null, this.errorMessage9 = null, this.errorMessage10 = null, this.errorMessage11 = null, this.errorMessage12 = null, this.errorMessage13 = null, this.errorMessage14 = null, this.errorMessage15 = null, this.errorMessage16 = null, this.errorMessage17 = null, this.showSuccess = false, this.showModal = true;
    },
    retrieve: function retrieve() {
      var _this = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_1__["default"].url + "retrieve", {}, _services_auth__WEBPACK_IMPORTED_MODULE_1__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_1__["default"].deauthenticate();
        }

        _this.loadingShow = false;
        _this.userData = response.data.user;
      });
    },
    hide: function hide() {
      this.showSuccess = false;
    },
    redirect: function redirect(route) {
      _router__WEBPACK_IMPORTED_MODULE_0__["default"].push(route)["catch"](function () {});
    },
    register: function register(e) {
      var _this2 = this;

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
      this.validate("userType");
      var parameter = {
        account_type: this.userType,
        firstname: this.firstname,
        lastname: this.lastname,
        address: this.address,
        contactNumber: this.contactNum,
        email: this.email,
        name: this.username,
        password: this.password,
        password_confirmation: this.confirmPass,
        adminRegister: 'register'
      };

      if (this.errorMessage1 === null && this.errorMessage2 === null && this.errorMessage3 === null && this.errorMessage4 === null && this.errorMessage5 === null && this.errorMessage6 === null && this.errorMessage7 === null && this.errorMessage8 === null && this.errorMessage9 === null && this.errorMessage10 === null && this.errorMessage11 === null && this.errorMessage12 === null && this.errorMessage13 === null && this.errorMessage14 === null && this.errorMessage15 === null && this.errorMessage16 === null && this.errorMessage17 === null) {
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_1__["default"].url + "register", parameter).then(function (response) {
          _this2.loadingShow = false;
          sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
            title: "You successfully created an account",
            icon: "success"
          });
          _this2.showModal = false;

          _this2.retrieve();
        })["catch"](function (error) {
          if (error.response.status === 300) {
            _this2.errorMessage14 = "Username already exist";
          }

          if (error.response.status === 301) {
            _this2.errorMessage3 = "Email already exist";
          }

          _this2.loadingShow = false;
        });
      } else {
        this.errorMessage17 = "Please fill up all fields";
        this.loadingShow = false;
      }
    },
    validate: function validate(input) {
      this.successMessage = null;
      var reqWhiteSpace = /\d/;
      var reqSpace = /\s/;
      var specialChar = /^[A-Za-z0-9 ]+$/;

      if (input === "firstname") {
        this.errorMessage1 = null;

        if (reqWhiteSpace.test(this.firstname)) {
          this.errorMessage1 = "firstname should not contain a number.";
        } else if (this.firstname === "") {
          this.errorMessage2 = "firstname is required.";
        } else if (!specialChar.test(this.firstname)) {
          this.errorMessage2 = "firstname should not contain a special character.";
        } else {
          this.errorMessage1 = null;
          this.errorMessage2 = null;
        }
      } else if (input === "lastname") {
        this.errorMessage12 = null;

        if (reqWhiteSpace.test(this.lastname)) {
          this.errorMessage12 = "lastname should not contain a number.";
        } else if (this.lastname === "") {
          this.errorMessage13 = "lastname is required.";
        } else if (!specialChar.test(this.lastname)) {
          this.errorMessage13 = "lastname should not contain a special character.";
        } else {
          this.errorMessage12 = null;
          this.errorMessage13 = null;
        }
      } else if (input === "userType") {
        this.errorMessage17 = null;

        if (this.userType === "") {
          this.errorMessage17 = "User type is required.";
        } else {
          this.errorMessage17 = null;
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

        if (this.validateEmail(this.email) === false) {
          this.errorMessage3 = "You have entered an invalid email address.";
        } else {
          this.errorMessage3 = null;
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

        if (this.contactNum.length > 11) {
          this.errorMessage8 = "Contact number must be 11 digits";
        } else if (this.contactNum.slice(0, 2) != "09") {
          this.errorMessage9 = "Contact number must start with 09";
        } else if (this.contactNum.length < 11) {
          this.errorMessage9 = "Contact number must be 11 digits";
        } else {
          this.errorMessage8 = null;
          this.errorMessage9 = null;
        }
      } else if (this.contactNum != null && this.address != null && this.firstname.length >= 6 && this.email !== null && this.password !== null && this.password.length >= 6 && this.password.localeCompare(this.confirmPass) === 0 && this.type !== null && this.validateEmail(this.email) === true) {
        this.errorMessage1 = null;
      } else {
        this.errorMessage17 = "Please fill in all required fields.";
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.register[data-v-48ebf362] {\r\n  width: 100%;\n}\n.container[data-v-48ebf362] {\r\n  margin-top: 2%;\r\n  margin-bottom: 2%;\r\n  width: 100%;\r\n  /* border: orange solid 1px; */\n}\n.btnModal[data-v-48ebf362] {\r\n  width: 100px;\n}\n.modalFont[data-v-48ebf362] {\r\n  font-size: 15px;\n}\n.alert-box[data-v-48ebf362] {\r\n  background: white;\r\n  display: inline-block;\r\n  margin-top: 20%;\r\n  font-weight: lighter;\r\n  border-radius: 3px;\r\n  font-size: 30px;\r\n  padding-left: 50px;\r\n  padding-right: 50px;\r\n  padding-top: 30px;\r\n  padding-bottom: 10px;\r\n  transition: 0.2s;\n}\n.blurred-background[data-v-48ebf362] {\r\n  position: fixed;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n  text-align: center;\r\n  background: rgba(54, 54, 54, 0.7);\n}\nimg[data-v-48ebf362] {\r\n  cursor: default;\n}\nspan[data-v-48ebf362] {\r\n  font-size: 12px;\n}\nhr[data-v-48ebf362] {\r\n  border: 1px solid #17d817;\n}\n.termsCondition[data-v-48ebf362] {\r\n  margin-top: 6%;\r\n  font-size: 15px;\r\n  text-align: center;\n}\n.form-control[data-v-48ebf362] {\r\n  border: 1px solid #17d817;\r\n  border-radius: 5px;\r\n  width: 50%;\n}\n.bRegister[data-v-48ebf362] {\r\n  color: orange;\r\n  cursor: pointer;\n}\np[data-v-48ebf362] {\r\n  font-size: 20px;\n}\n.btnRegister[data-v-48ebf362] {\r\n  margin-top: 2%;\r\n  margin-bottom: 2%;\r\n  background-color: #17d817;\r\n  font-weight: bold;\r\n  width: 100%;\n}\n.containerWidth[data-v-48ebf362] {\r\n  width: 40%;\r\n  text-align: left;\r\n  margin-left: 0px !important;\r\n  margin-right: 0px !important;\n}\n@media screen and (max-width: 600px) {\n.containerWidth[data-v-48ebf362] {\r\n    text-align: left;\r\n    width: 100%;\r\n    margin-left: 0px !important;\r\n    margin-right: 0px !important;\n}\n}\n@media screen and (max-width: 900px) {\n.containerWidth[data-v-48ebf362] {\r\n    text-align: left;\r\n    width: 70%;\n}\n}\n@media screen and (max-width: 1000px) {\n.containerWidth[data-v-48ebf362] {\r\n    text-align: left;\r\n    width: 60%;\n}\n}\r\n", ""]);

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
      _c("v-data-table", {
        staticClass: "elevation-3",
        attrs: {
          headers: _vm.headersForCup,
          items: _vm.userData,
          search: _vm.search,
          "items-per-page": 5
        },
        scopedSlots: _vm._u([
          {
            key: "top",
            fn: function() {
              return [
                _c(
                  "v-toolbar",
                  {
                    staticClass: "mb-2",
                    attrs: { color: "#ff5b04", dark: "", flat: "" }
                  },
                  [
                    _c(
                      "v-toolbar-title",
                      { staticClass: "col pa-3 py-4 white--text" },
                      [_vm._v("User Details")]
                    ),
                    _vm._v(" "),
                    _c("v-text-field", {
                      staticClass: "mt-10",
                      attrs: {
                        clearable: "",
                        flat: "",
                        "solo-inverted": "",
                        "prepend-inner-icon": "mdi-magnify",
                        label: "Search"
                      },
                      model: {
                        value: _vm.search,
                        callback: function($$v) {
                          _vm.search = $$v
                        },
                        expression: "search"
                      }
                    }),
                    _vm._v(" "),
                    _c("v-divider", {
                      staticClass: "mx-4",
                      attrs: { vertical: "" }
                    }),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        staticClass: "mr-6",
                        attrs: { color: "primary" },
                        on: {
                          click: function($event) {
                            return _vm.addAccount()
                          }
                        }
                      },
                      [_vm._v("+ Account")]
                    )
                  ],
                  1
                )
              ]
            },
            proxy: true
          }
        ])
      }),
      _vm._v(" "),
      _c("center", [
        _c(
          "div",
          { staticClass: "containerWidth" },
          [
            [
              _c(
                "v-row",
                { attrs: { justify: "center" } },
                [
                  _c(
                    "v-dialog",
                    {
                      attrs: { persistent: "", "max-width": "600px" },
                      model: {
                        value: _vm.showModal,
                        callback: function($$v) {
                          _vm.showModal = $$v
                        },
                        expression: "showModal"
                      }
                    },
                    [
                      _c(
                        "v-card",
                        [
                          _c("div", { staticClass: "modal-header" }, [
                            _c("span", { staticClass: "headline" }, [
                              _vm._v("ADD USER")
                            ]),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "close",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    _vm.showModal = false
                                  }
                                }
                              },
                              [_vm._v("×")]
                            ),
                            _c("br")
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _vm._v("\n                      NOTE: "),
                              _c(
                                "span",
                                { staticClass: "text-danger text-center" },
                                [_vm._v("All fields are required")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c("div", { staticClass: "col-sm-3" }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-sm-6" },
                                  [
                                    _c("i", [
                                      _vm.errorMessage17 !== null
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "text-danger text-center"
                                            },
                                            [_vm._v(_vm._s(_vm.errorMessage17))]
                                          )
                                        : _vm._e()
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "v-row",
                                      [
                                        _c(
                                          "v-flex",
                                          { attrs: { xs12: "", sm11: "" } },
                                          [
                                            _c("v-select", {
                                              staticStyle: { height: "56px" },
                                              attrs: {
                                                items: [
                                                  "Customer",
                                                  "Cashier",
                                                  "Admin"
                                                ],
                                                label: "User Type",
                                                dense: "",
                                                outlined: ""
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
                                        )
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
                              _c(
                                "v-form",
                                [
                                  _c("div", { staticClass: "row" }, [
                                    _c(
                                      "div",
                                      { staticClass: "col-sm-6" },
                                      [
                                        _c(
                                          "center",
                                          [
                                            _c("i", [
                                              _vm.errorMessage1 !== null
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "text-danger text-center"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.errorMessage1
                                                        )
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]),
                                            _vm._v(" "),
                                            _c("i", [
                                              _vm.errorMessage2 !== null
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "text-danger text-center"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.errorMessage2
                                                        )
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "v-row",
                                              [
                                                _c(
                                                  "v-flex",
                                                  {
                                                    attrs: {
                                                      xs12: "",
                                                      sm11: ""
                                                    }
                                                  },
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
                                                        keyup: function(
                                                          $event
                                                        ) {
                                                          return _vm.validate(
                                                            "firstname"
                                                          )
                                                        }
                                                      },
                                                      model: {
                                                        value: _vm.firstname,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.firstname = $$v
                                                        },
                                                        expression: "firstname"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c("i", [
                                              _vm.errorMessage12 !== null
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "text-danger text-center"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.errorMessage12
                                                        )
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]),
                                            _vm._v(" "),
                                            _c("i", [
                                              _vm.errorMessage13 !== null
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "text-danger text-center"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.errorMessage13
                                                        )
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "v-row",
                                              [
                                                _c(
                                                  "v-flex",
                                                  {
                                                    attrs: {
                                                      xs12: "",
                                                      sm11: ""
                                                    }
                                                  },
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
                                                        keyup: function(
                                                          $event
                                                        ) {
                                                          return _vm.validate(
                                                            "lastname"
                                                          )
                                                        }
                                                      },
                                                      model: {
                                                        value: _vm.lastname,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.lastname = $$v
                                                        },
                                                        expression: "lastname"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c("i", [
                                              _vm.errorMessage10 !== null
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "text-danger text-center"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.errorMessage10
                                                        )
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "v-row",
                                              [
                                                _c(
                                                  "v-flex",
                                                  {
                                                    attrs: {
                                                      xs12: "",
                                                      sm11: ""
                                                    }
                                                  },
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
                                                        keyup: function(
                                                          $event
                                                        ) {
                                                          return _vm.validate(
                                                            "address"
                                                          )
                                                        }
                                                      },
                                                      model: {
                                                        value: _vm.address,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.address = $$v
                                                        },
                                                        expression: "address"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c("i", [
                                              _vm.errorMessage8 !== null
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "text-danger text-center"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.errorMessage8
                                                        )
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]),
                                            _vm._v(" "),
                                            _c("i", [
                                              _vm.errorMessage9 !== null
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "text-danger text-center"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.errorMessage9
                                                        )
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "v-row",
                                              [
                                                _c(
                                                  "v-flex",
                                                  {
                                                    attrs: {
                                                      xs12: "",
                                                      sm11: ""
                                                    }
                                                  },
                                                  [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        color: "orange",
                                                        label: "Contact number",
                                                        outlined: "",
                                                        type: "number",
                                                        id: "contactNum",
                                                        required: ""
                                                      },
                                                      on: {
                                                        keyup: function(
                                                          $event
                                                        ) {
                                                          return _vm.validate(
                                                            "contact"
                                                          )
                                                        }
                                                      },
                                                      model: {
                                                        value: _vm.contactNum,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.contactNum = $$v
                                                        },
                                                        expression: "contactNum"
                                                      }
                                                    })
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
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-sm-6" },
                                      [
                                        _c(
                                          "center",
                                          [
                                            _c("i", [
                                              _vm.errorMessage14 !== null
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "text-danger text-center"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.errorMessage14
                                                        )
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]),
                                            _vm._v(" "),
                                            _c("i", [
                                              _vm.errorMessage15 !== null
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "text-danger text-center"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.errorMessage15
                                                        )
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]),
                                            _vm._v(" "),
                                            _c("i", [
                                              _vm.errorMessage16 !== null
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "text-danger text-center"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.errorMessage16
                                                        )
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "v-row",
                                              [
                                                _c(
                                                  "v-flex",
                                                  {
                                                    attrs: {
                                                      xs12: "",
                                                      sm11: ""
                                                    }
                                                  },
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
                                                        keyup: function(
                                                          $event
                                                        ) {
                                                          return _vm.validate(
                                                            "username"
                                                          )
                                                        }
                                                      },
                                                      model: {
                                                        value: _vm.username,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.username = $$v
                                                        },
                                                        expression: "username"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c("i", [
                                              _vm.errorMessage3 !== null
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "text-danger text-center"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.errorMessage3
                                                        )
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "v-row",
                                              [
                                                _c(
                                                  "v-flex",
                                                  {
                                                    attrs: {
                                                      xs12: "",
                                                      sm11: ""
                                                    }
                                                  },
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
                                                        keyup: function(
                                                          $event
                                                        ) {
                                                          return _vm.validate(
                                                            "email"
                                                          )
                                                        }
                                                      },
                                                      model: {
                                                        value: _vm.email,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.email = $$v
                                                        },
                                                        expression: "email"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _vm.successMessage !== null
                                              ? _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "text-success text-center"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(_vm.successMessage)
                                                    )
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _c("i", [
                                              _vm.errorMessage4 !== null
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "text-danger text-center"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.errorMessage4
                                                        )
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]),
                                            _vm._v(" "),
                                            _c("i", [
                                              _vm.errorMessage5 !== null
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "text-danger text-center"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.errorMessage5
                                                        )
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "v-row",
                                              [
                                                _c(
                                                  "v-flex",
                                                  {
                                                    attrs: {
                                                      xs12: "",
                                                      sm11: ""
                                                    }
                                                  },
                                                  [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        color: "orange",
                                                        "append-icon": _vm.show3
                                                          ? "visibility"
                                                          : "visibility_off",
                                                        type: _vm.show3
                                                          ? "text"
                                                          : "password",
                                                        label: "Password",
                                                        outlined: "",
                                                        id: "password",
                                                        required: ""
                                                      },
                                                      on: {
                                                        keyup: function(
                                                          $event
                                                        ) {
                                                          return _vm.validate(
                                                            "password"
                                                          )
                                                        },
                                                        "click:append": function(
                                                          $event
                                                        ) {
                                                          _vm.show3 = !_vm.show3
                                                        }
                                                      },
                                                      model: {
                                                        value: _vm.password,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.password = $$v
                                                        },
                                                        expression: "password"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c("i", [
                                              _vm.errorMessage6 !== null
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "text-danger text-center"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.errorMessage6
                                                        )
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "v-row",
                                              [
                                                _c(
                                                  "v-flex",
                                                  {
                                                    attrs: {
                                                      xs12: "",
                                                      sm11: ""
                                                    }
                                                  },
                                                  [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        color: "orange",
                                                        label:
                                                          "Confirm password",
                                                        outlined: "",
                                                        "append-icon": _vm.show4
                                                          ? "visibility"
                                                          : "visibility_off",
                                                        type: _vm.show4
                                                          ? "text"
                                                          : "password",
                                                        id: "confirmPassword",
                                                        required: ""
                                                      },
                                                      on: {
                                                        keyup: function(
                                                          $event
                                                        ) {
                                                          return _vm.validate(
                                                            "confirmPass"
                                                          )
                                                        },
                                                        "click:append": function(
                                                          $event
                                                        ) {
                                                          _vm.show4 = !_vm.show4
                                                        }
                                                      },
                                                      model: {
                                                        value: _vm.confirmPass,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.confirmPass = $$v
                                                        },
                                                        expression:
                                                          "confirmPass"
                                                      }
                                                    })
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
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "btn register",
                                      attrs: {
                                        type: "button",
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
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "blue darken-1", text: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.showModal = false
                                    }
                                  }
                                },
                                [_vm._v(" Close")]
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
            ]
          ],
          2
        )
      ]),
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