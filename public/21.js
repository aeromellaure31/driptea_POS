(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/profile/personalInfo.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/profile/personalInfo.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_empty_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/empty.png */ "./resources/assets/empty.png");
/* harmony import */ var _assets_empty_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_empty_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/logo.png */ "./resources/assets/logo.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router */ "./resources/js/router/index.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth */ "./resources/js/services/auth/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _basic_loading_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../basic/loading.vue */ "./resources/js/basic/loading.vue");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_7__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    var _ref;

    return _ref = {
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
      modalShow: true,
      profilepic: _assets_empty_png__WEBPACK_IMPORTED_MODULE_0___default.a,
      firstname: null,
      lastname: null,
      username: null,
      show: false,
      emailAdd: null,
      contactnum: null,
      address: null,
      Fname: null,
      password: null,
      userID: null,
      newpassword: null,
      newemailAdd: null,
      newcontactnum: null,
      newaddress: null,
      newfirstname: null,
      newlastname: null,
      newusername: null,
      Cpassword: null,
      theEmail: "email",
      add: "address",
      dbcontact: "contactNumber",
      pwd: "password",
      forNameUpdate: "forNameUpdate",
      forAddressUpdate: "forAddressUpdate",
      forCNUpdate: "forCNUpdate",
      forEmailUpdate: "forEmailUpdate",
      forPWDupdate: "forPWDupdate",
      loadingShow: false,
      img: null,
      imgURL: null
    }, _defineProperty(_ref, "show", false), _defineProperty(_ref, "output", null), _defineProperty(_ref, "toSaveImage", null), _ref;
  },
  components: {
    loading: _basic_loading_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  mounted: function mounted() {
    this.userID = this.$route.params.id;
    this.retrieveUserDatas(this.userID);
  },
  methods: {
    imageUpdate: function imageUpdate(e) {
      this.loadingShow = true;
      e.preventDefault();
      var currentObj = this;
      var config = {
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: 'Bearer ' + localStorage.getItem('userToken')
        }
      };
      var formData = new FormData();
      formData.append('id', this.userID); // formData.append('image', this.img)

      formData.append('image', this.toSaveImage);
      this.$axios.post('/updateImage', formData, config).then(function (response) {
        currentObj.loadingShow = false;
        currentObj.show = false;

        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_3__["default"].deauthenticate();
        }

        sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
          title: "You have successfully edited your profile picture",
          icon: "success"
        });
      })["catch"](function (error) {
        currentObj.output = error;
        currentObj.loadingShow = false;
      });
    },
    onImgChange: function onImgChange(e) {
      var _this = this;

      this.show = true;
      this.img = e.target.files[0];
      this.imgURL = URL.createObjectURL(e.target.files[0]);
      this.loadingShow = true;
      var data = new FormData();
      data.append('file', e.target.files[0]);
      this.$axios.post('http://ec2-34-205-139-231.compute-1.amazonaws.com:3232/api/file/upload', data).then(function (res) {
        _this.toSaveImage = res.data.result.body.file_url;
        _this.loadingShow = false;
      });
    },
    retrieveUserDatas: function retrieveUserDatas(id) {
      var _this2 = this;

      this.loadingShow = true;
      var params = {
        uname: id
      };
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(_services_auth__WEBPACK_IMPORTED_MODULE_3__["default"].url + "getUserData", params, _services_auth__WEBPACK_IMPORTED_MODULE_3__["default"].config).then(function (response) {
        _this2.loadingShow = false;

        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_3__["default"].deauthenticate();
        }

        _this2.imgURL = response.data.userdata[0].img;

        if (response.data.userdata[0].email == null) {
          _this2.emailAdd = "No email registered.";
        } else {
          _this2.emailAdd = response.data.userdata[0].email;
        }

        if (response.data.userdata[0].CN === null) {
          _this2.contactnum = "No registered contact number available.";
        } else {
          _this2.contactnum = response.data.userdata[0].CN;
        }

        if (response.data.userdata[0].address === null) {
          _this2.address = "No registered address available.";
        } else {
          _this2.address = response.data.userdata[0].address;
        }

        if (response.data.userdata[0].fname === null) {
          _this2.firstname = "No registered firstname available.";
        } else {
          _this2.firstname = response.data.userdata[0].fname;
        }

        if (response.data.userdata[0].lname === null) {
          _this2.lastname = "No registered lastname available.";
        } else {
          _this2.lastname = response.data.userdata[0].lname;
        }

        if (response.data.userdata[0].username === null) {
          _this2.username = "No registered username available.";
        } else {
          _this2.username = response.data.userdata[0].username;
        }

        if (response.data.userdata[0].pwd === null) {
          _this2.password = "No registered Password available.";
        } else {
          _this2.password = "********";
        }
      });
    },
    emptyData: function emptyData() {
      this.newpassword = null;
      this.newemailAdd = null;
      this.newcontactnum = null;
      this.newaddress = null;
      this.newfirstname = null;
      this.newlastname = null;
      this.newusername = null;
      this.Cpassword = null;
    },
    Save: function Save(data, colname, modalID) {
      var _this3 = this;

      if (colname === 'firstname') {
        this.validate("firstname");
      } else if (colname === 'lastname') {
        this.validate("lastname");
      } else if (colname === 'name') {
        this.validate("username");
      } else if (colname === 'address') {
        this.validate("address");
      } else if (colname === 'email') {
        this.validate("email");
      } else if (colname === 'contactNumber') {
        this.validate("contact");
      } else if (colname === 'password') {
        this.validate("password");
        this.validate("confirmPass");
      }

      if (this.errorMessage1 === null && this.errorMessage2 === null && this.errorMessage3 === null && this.errorMessage4 === null && this.errorMessage5 === null && this.errorMessage6 === null && this.errorMessage7 === null && this.errorMessage8 === null && this.errorMessage9 === null && this.errorMessage10 === null && this.errorMessage11 === null && this.errorMessage12 === null && this.errorMessage13 === null && this.errorMessage14 === null && this.errorMessage15 === null) {
        this.loadingShow = true;
        var params = {
          ID: this.userID,
          data: data,
          col: colname
        };
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(_services_auth__WEBPACK_IMPORTED_MODULE_3__["default"].url + "SaveNEWdata", params, _services_auth__WEBPACK_IMPORTED_MODULE_3__["default"].config).then(function (response) {
          _this3.loadingShow = false;

          if (response.data.status) {
            _services_auth__WEBPACK_IMPORTED_MODULE_3__["default"].deauthenticate();
          }

          sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
            title: "You have successfully edited your information",
            icon: "success"
          });

          _this3.retrieveUserDatas(_this3.userID);

          _this3.newpassword = null;
          _this3.newemailAdd = null;
          _this3.newcontactnum = null;
          _this3.newaddress = null;
          _this3.newfirstname = null;
          _this3.newlastname = null;
          _this3.newusername = null;
          _this3.Cpassword = null;
          jquery__WEBPACK_IMPORTED_MODULE_5___default()("#" + modalID).modal("hide");
        })["catch"](function (error) {
          if (error.response.status === 300) {
            _this3.errorMessage14 = "Username already exist";
          }

          if (error.response.status === 301) {
            _this3.errorMessage3 = "Email already exist";
          }

          _this3.loadingShow = false;
        });
      }
    },
    validate: function validate(input) {
      this.successMessage = null;
      var reqWhiteSpace = /\d/;
      var specialChar = /^[A-Za-z0-9 ]+$/;

      if (input === "firstname") {
        this.errorMessage1 = null;

        if (this.newfirstname === '' || this.newfirstname === null) {
          this.errorMessage2 = "firstname is required.";
        } else if (reqWhiteSpace.test(this.newfirstname)) {
          this.errorMessage1 = "firstname should not contain a number.";
        } else if (!specialChar.test(this.newfirstname)) {
          this.errorMessage2 = "firstname should not contain a special character.";
        } else {
          this.errorMessage1 = null;
          this.errorMessage2 = null;
        }
      } else if (input === "lastname") {
        this.errorMessage12 = null;

        if (reqWhiteSpace.test(this.newlastname)) {
          this.errorMessage12 = "lastname should not contain a number.";
        } else if (this.newlastname === "" || this.newlastname === null) {
          this.errorMessage13 = "lastname is required.";
        } else if (!specialChar.test(this.newlastname)) {
          this.errorMessage13 = "lastname should not contain a special character.";
        } else {
          this.errorMessage12 = null;
          this.errorMessage13 = null;
        }
      } else if (input === "username") {
        this.errorMessage14 = null;

        if (reqWhiteSpace.test(this.newusername)) {
          this.errorMessage14 = "Username should not contain a space.";
        } else if (this.newusername === "" || this.newusername === null) {
          this.errorMessage15 = "Username is required.";
        } else if (this.newusername.length < 6) {
          this.errorMessage16 = "Username must be atleast 6 characters";
        } else {
          this.errorMessage14 = null;
          this.errorMessage15 = null;
          this.errorMessage16 = null;
        }
      } else if (input === "email") {
        this.errorMessage3 = null;

        if (this.newemailAdd === '' || this.newemailAdd === null) {
          this.errorMessage3 = "Email address is required";
        } else if (this.validateEmail(this.newemailAdd) === false) {
          this.errorMessage3 = "You have entered an invalid email address.";
        } else {
          this.errorMessage3 = null;
        }
      } else if (input === "password") {
        this.errorMessage4 = null;

        if (this.newpassword === null || this.newpassword === '') {
          this.errorMessage4 = "Password is required";
        } else if (this.newpassword.length < 8) {
          this.errorMessage4 = "Password must be atleast 8 characters.";
        } else if (/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/.test(this.newpassword)) {
          this.successMessage = "Strong password.";
          this.errorMessage4 = null;
          this.errorMessage5 = null;
        } else {
          this.errorMessage5 = "Password must be alphanumeric characters. It should contain 1 number, 1 special character and 1 capital letter.";
        }
      } else if (input === "confirmPass") {
        this.errorMessage6 = null;
        this.successMessage = null;

        if (this.Cpassword === '' || this.Cpassword === null) {
          this.errorMessage6 = "Confirm password is required";
        } else if (this.password.localeCompare(this.Cpassword) !== 0) {
          this.errorMessage6 = "Password did not match.";
        } else {
          this.errorMessage6 = null;
        }
      } else if (input === "address") {
        this.errorMessage10 = null;

        if (this.newaddress === "" || this.newaddress === null) {
          this.errorMessage10 = "Address is required.";
        } else {
          this.errorMessage10 = null;
        }
      } else if (input === "contact") {
        this.errorMessage8 = null;
        this.successMessage9 = null;

        if (this.newcontactnum === '' || this.newcontactnum === null) {
          this.errorMessage8 = "Contact number is required";
        } else if (this.newcontactnum.length > 11) {
          this.errorMessage8 = "Contact number must not exceed 11 numbers.";
        } else if (this.newcontactnum.slice(0, 2) != "09") {
          this.errorMessage9 = "Contact number must start with 09";
        } else {
          this.errorMessage8 = null;
          this.errorMessage9 = null;
        }
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/profile/personalInfo.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/profile/personalInfo.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.image-upload > input {\r\n  visibility:hidden;\r\n  width:0;\r\n  height:0\n}\n.cursorText{\r\n  cursor: pointer;\n}\n.updateText {\r\n  width: auto;\r\n  vertical-align: middle;\n}\n.theUpdatebtn {\r\n  background-color: #ff5b04;\r\n  width: 100%;\r\n  height: 30px;\r\n  border-radius: 2px;\r\n  padding: 0%;\n}\n.savebtn {\r\n  color: #ff5b04;\n}\n.thetitle {\r\n  margin-top: 3%;\r\n  font-family: \"Google Sans\", Roboto, Arial, sans-serif;\r\n  font-weight: 400;\n}\n.title {\r\n  font-family: \"Google Sans\", Roboto, Arial, sans-serif;\r\n  font-weight: 400;\n}\n.subtitle {\r\n  font-size: 15px;\n}\n.container1 {\r\n  border: 1px solid gray;\r\n  border-radius: 1%;\r\n  width: 70%;\r\n  margin-bottom: 5%;\n}\n.profilePic {\r\n  height: 150px;\r\n  width: 150px;\r\n  border-radius: 100%;\n}\n.thelabel {\r\n  font-size: 13px;\n}\n.text-danger{\r\n  font-size: 12px\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/profile/personalInfo.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/profile/personalInfo.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./personalInfo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/profile/personalInfo.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/profile/personalInfo.vue?vue&type=template&id=3354c4ba&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/profile/personalInfo.vue?vue&type=template&id=3354c4ba& ***!
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
    "div",
    [
      _c(
        "div",
        { staticClass: "thetitle" },
        [
          _c("center", [
            _c("div", { staticClass: "image-upload" }, [
              _c(
                "label",
                { attrs: { for: "file-input" } },
                [
                  _c("img", {
                    staticClass: "profilePic cursorText",
                    attrs: { src: _vm.imgURL ? _vm.imgURL : _vm.profilepic }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-icon",
                    { staticClass: "cursorText", attrs: { medium: "" } },
                    [_vm._v("mdi-pencil")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("input", {
                attrs: {
                  id: "file-input",
                  type: "file",
                  accept: "image/*",
                  name: "profile_image"
                },
                on: { change: _vm.onImgChange }
              })
            ]),
            _vm._v(" "),
            _vm.show
              ? _c(
                  "button",
                  {
                    staticClass: "btn",
                    staticStyle: {
                      height: "25px",
                      padding: "0",
                      "background-color": "#ff5b04",
                      color: "white"
                    },
                    on: {
                      click: function($event) {
                        return _vm.imageUpdate($event)
                      }
                    }
                  },
                  [_vm._v("Update")]
                )
              : _vm._e(),
            _c("br"),
            _vm._v(" "),
            _c("span", { staticClass: "title" }, [
              _vm._v("Personal Information")
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("span", { staticClass: "subtitle" }, [
              _vm._v(
                "Basic Information that you provided upon registration name and contact information"
              )
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "container container1" }, [
        _c("span", { staticClass: "title" }, [_vm._v("Profile")]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "text-left Fname" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-3 thelabel" }, [
              _vm._v("USERNAME")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-6" }, [
              _c("span", [_vm._v(_vm._s(_vm.username))])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-sm-3 text-right" },
              [
                _c(
                  "v-icon",
                  {
                    staticClass: "cursorText",
                    attrs: {
                      "data-toggle": "modal",
                      "data-target": "#forUsernameUpdate"
                    },
                    on: {
                      click: function($event) {
                        return _vm.emptyData()
                      }
                    }
                  },
                  [_vm._v("mdi-chevron-right")]
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "text-left Fname" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-3 thelabel" }, [
              _vm._v("FIRSTNAME")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-6" }, [
              _c("span", [_vm._v(_vm._s(_vm.firstname))])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-sm-3 text-right" },
              [
                _c(
                  "v-icon",
                  {
                    staticClass: "cursorText",
                    attrs: {
                      "data-toggle": "modal",
                      "data-target": "#forFirstnameUpdate"
                    },
                    on: {
                      click: function($event) {
                        return _vm.emptyData()
                      }
                    }
                  },
                  [_vm._v("mdi-chevron-right")]
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "text-left Fname" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-3 thelabel" }, [
              _vm._v("LASTNAME")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-6" }, [
              _c("span", [_vm._v(_vm._s(_vm.lastname))])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-sm-3 text-right" },
              [
                _c(
                  "v-icon",
                  {
                    staticClass: "cursorText",
                    attrs: {
                      "data-toggle": "modal",
                      "data-target": "#forLastnameUpdate"
                    },
                    on: {
                      click: function($event) {
                        return _vm.emptyData()
                      }
                    }
                  },
                  [_vm._v("mdi-chevron-right")]
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "text-left Address" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-3 thelabel" }, [
              _vm._v("ADDRESS")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-6" }, [
              _c("span", [_vm._v(_vm._s(_vm.address))])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-sm-3 text-right" },
              [
                _c(
                  "v-icon",
                  {
                    staticClass: "cursorText",
                    attrs: {
                      "data-toggle": "modal",
                      "data-target": "#forAddressUpdate"
                    },
                    on: {
                      click: function($event) {
                        return _vm.emptyData()
                      }
                    }
                  },
                  [_vm._v("mdi-chevron-right")]
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "text-left ContactNum" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-3 thelabel" }, [
              _vm._v("CONTACT NUMBER")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-6" }, [
              _c("span", [_vm._v(_vm._s(_vm.contactnum))])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-sm-3 text-right" },
              [
                _c(
                  "v-icon",
                  {
                    staticClass: "cursorText",
                    attrs: {
                      "data-toggle": "modal",
                      "data-target": "#forCNUpdate"
                    },
                    on: {
                      click: function($event) {
                        return _vm.emptyData()
                      }
                    }
                  },
                  [_vm._v("mdi-chevron-right")]
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "text-left Email" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-3 thelabel" }, [
              _vm._v("EMAIL ADDRESS")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-6" }, [
              _c("span", [_vm._v(_vm._s(_vm.emailAdd))])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-sm-3 text-right" },
              [
                _c(
                  "v-icon",
                  {
                    staticClass: "cursorText",
                    attrs: {
                      "data-toggle": "modal",
                      "data-target": "#forEmailUpdate"
                    },
                    on: {
                      click: function($event) {
                        return _vm.emptyData()
                      }
                    }
                  },
                  [_vm._v("mdi-chevron-right")]
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "text-left Password" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-3 thelabel" }, [
              _vm._v("PASSWORD")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-6" }, [
              _c("span", { attrs: { type: "password" } }, [
                _vm._v(_vm._s(_vm.password))
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-sm-3 text-right" },
              [
                _c(
                  "v-icon",
                  {
                    staticClass: "cursorText",
                    attrs: {
                      "data-toggle": "modal",
                      "data-target": "#forPWDupdate"
                    },
                    on: {
                      click: function($event) {
                        return _vm.emptyData()
                      }
                    }
                  },
                  [_vm._v("mdi-chevron-right")]
                )
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "forFirstnameUpdate",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "Updatename",
            "aria-hidden": "true"
          }
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c("form", [
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
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "usrF" } }, [
                        _vm._v("Firstname:")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.newfirstname,
                            expression: "newfirstname"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          placeholder: _vm.firstname,
                          type: "text",
                          id: "usrF"
                        },
                        domProps: { value: _vm.newfirstname },
                        on: {
                          keyup: function($event) {
                            return _vm.validate("firstname")
                          },
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.newfirstname = $event.target.value
                          }
                        }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn closebtn",
                      attrs: { type: "button", "data-dismiss": "modal" }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn savebtn",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.Save(
                            _vm.newfirstname,
                            "firstname",
                            "forFirstnameUpdate"
                          )
                        }
                      }
                    },
                    [_vm._v("Save changes")]
                  )
                ])
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "forLastnameUpdate",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "Updatename",
            "aria-hidden": "true"
          }
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c("form", [
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
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "usrL" } }, [
                        _vm._v("Lastname:")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.newlastname,
                            expression: "newlastname"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          placeholder: _vm.lastname,
                          type: "text",
                          id: "usrL"
                        },
                        domProps: { value: _vm.newlastname },
                        on: {
                          keyup: function($event) {
                            return _vm.validate("lastname")
                          },
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.newlastname = $event.target.value
                          }
                        }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn closebtn",
                      attrs: { type: "button", "data-dismiss": "modal" }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn savebtn",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.Save(
                            _vm.newlastname,
                            "lastname",
                            "forLastnameUpdate"
                          )
                        }
                      }
                    },
                    [_vm._v("Save changes")]
                  )
                ])
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "forUsernameUpdate",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "Updatename",
            "aria-hidden": "true"
          }
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c("form", [
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
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "usrU" } }, [
                        _vm._v("Username:")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.newusername,
                            expression: "newusername"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          placeholder: _vm.username,
                          type: "text",
                          id: "usrU"
                        },
                        domProps: { value: _vm.newusername },
                        on: {
                          keyup: function($event) {
                            return _vm.validate("username")
                          },
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.newusername = $event.target.value
                          }
                        }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn closebtn",
                      attrs: { type: "button", "data-dismiss": "modal" }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn savebtn",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.Save(
                            _vm.newusername,
                            "name",
                            "forUsernameUpdate"
                          )
                        }
                      }
                    },
                    [_vm._v("Save changes")]
                  )
                ])
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: _vm.forAddressUpdate,
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "UpdateAddress",
            "aria-hidden": "true"
          }
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _vm._m(3),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c("form", [
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
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "adr" } }, [
                        _vm._v("Address:")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.newaddress,
                            expression: "newaddress"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          placeholder: _vm.address,
                          type: "text",
                          id: "adr"
                        },
                        domProps: { value: _vm.newaddress },
                        on: {
                          keyup: function($event) {
                            return _vm.validate("address")
                          },
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.newaddress = $event.target.value
                          }
                        }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn closebtn",
                      attrs: { type: "button", "data-dismiss": "modal" }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn savebtn",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.Save(
                            _vm.newaddress,
                            _vm.add,
                            _vm.forAddressUpdate
                          )
                        }
                      }
                    },
                    [_vm._v("Save changes")]
                  )
                ])
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: _vm.forCNUpdate,
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "UpdateCN",
            "aria-hidden": "true"
          }
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _vm._m(4),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c("form", [
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
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "cn" } }, [
                        _vm._v("Contact Number:")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.newcontactnum,
                            expression: "newcontactnum"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          placeholder: _vm.contactnum,
                          type: "text",
                          id: "cn"
                        },
                        domProps: { value: _vm.newcontactnum },
                        on: {
                          keyup: function($event) {
                            return _vm.validate("contact")
                          },
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.newcontactnum = $event.target.value
                          }
                        }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn closebtn",
                      attrs: { type: "button", "data-dismiss": "modal" }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn savebtn",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.Save(
                            _vm.newcontactnum,
                            _vm.dbcontact,
                            _vm.forCNUpdate
                          )
                        }
                      }
                    },
                    [_vm._v("Save changes")]
                  )
                ])
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: _vm.forEmailUpdate,
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "UpdateEmailAddress"
          }
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _vm._m(5),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c("form", [
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
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "usrE" } }, [
                        _vm._v("Email Address:")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.newemailAdd,
                            expression: "newemailAdd"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          placeholder: _vm.emailAdd,
                          type: "text",
                          id: "usrE"
                        },
                        domProps: { value: _vm.newemailAdd },
                        on: {
                          keyup: function($event) {
                            return _vm.validate("email")
                          },
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.newemailAdd = $event.target.value
                          }
                        }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn closebtn",
                      attrs: { type: "button", "data-dismiss": "modal" }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn savebtn",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.Save(
                            _vm.newemailAdd,
                            _vm.theEmail,
                            _vm.forEmailUpdate
                          )
                        }
                      }
                    },
                    [_vm._v("Save changes")]
                  )
                ])
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: _vm.forPWDupdate,
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "UpdatePWD"
          }
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _vm._m(6),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c("form", [
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
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "passw" } }, [
                        _vm._v("Password:")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.newpassword,
                            expression: "newpassword"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          placeholder: _vm.password,
                          type: "password",
                          id: "passw"
                        },
                        domProps: { value: _vm.newpassword },
                        on: {
                          keyup: function($event) {
                            return _vm.validate("password")
                          },
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.newpassword = $event.target.value
                          }
                        }
                      })
                    ]),
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
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "cpass" } }, [
                        _vm._v("Confirm Password:")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.Cpassword,
                            expression: "Cpassword"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          placeholder: "Type new password here...",
                          type: "password",
                          id: "cpass"
                        },
                        domProps: { value: _vm.Cpassword },
                        on: {
                          keyup: function($event) {
                            return _vm.validate("confirmPass")
                          },
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.Cpassword = $event.target.value
                          }
                        }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn closebtn",
                      attrs: { type: "button", "data-dismiss": "modal" }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn savebtn",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.Save(
                            _vm.newpassword,
                            _vm.pwd,
                            _vm.forPWDupdate
                          )
                        }
                      }
                    },
                    [_vm._v("Save changes")]
                  )
                ])
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _vm.loadingShow ? _c("loading") : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title", attrs: { id: "Updatename" } }, [
        _vm._v("Update Firstname")
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title", attrs: { id: "Updatename" } }, [
        _vm._v("Update Lastname")
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title", attrs: { id: "Updatename" } }, [
        _vm._v("Update Username")
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title", attrs: { id: "UpdateAddress" } }, [
        _vm._v("Update Address")
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title", attrs: { id: "UpdateCN" } }, [
        _vm._v("Update Contact Number")
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "UpdateEmailAddress" } },
        [_vm._v("Email")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title", attrs: { id: "UpdatePWD" } }, [
        _vm._v("Update Password")
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/modules/profile/personalInfo.vue":
/*!*******************************************************!*\
  !*** ./resources/js/modules/profile/personalInfo.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _personalInfo_vue_vue_type_template_id_3354c4ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personalInfo.vue?vue&type=template&id=3354c4ba& */ "./resources/js/modules/profile/personalInfo.vue?vue&type=template&id=3354c4ba&");
/* harmony import */ var _personalInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personalInfo.vue?vue&type=script&lang=js& */ "./resources/js/modules/profile/personalInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _personalInfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personalInfo.vue?vue&type=style&index=0&lang=css& */ "./resources/js/modules/profile/personalInfo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _personalInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _personalInfo_vue_vue_type_template_id_3354c4ba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _personalInfo_vue_vue_type_template_id_3354c4ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/profile/personalInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/profile/personalInfo.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/modules/profile/personalInfo.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_personalInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./personalInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/profile/personalInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_personalInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/profile/personalInfo.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************!*\
  !*** ./resources/js/modules/profile/personalInfo.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_personalInfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./personalInfo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/profile/personalInfo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_personalInfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_personalInfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_personalInfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_personalInfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/modules/profile/personalInfo.vue?vue&type=template&id=3354c4ba&":
/*!**************************************************************************************!*\
  !*** ./resources/js/modules/profile/personalInfo.vue?vue&type=template&id=3354c4ba& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_personalInfo_vue_vue_type_template_id_3354c4ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./personalInfo.vue?vue&type=template&id=3354c4ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/profile/personalInfo.vue?vue&type=template&id=3354c4ba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_personalInfo_vue_vue_type_template_id_3354c4ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_personalInfo_vue_vue_type_template_id_3354c4ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);