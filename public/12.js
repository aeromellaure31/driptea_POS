(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/add.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/add.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth */ "./resources/js/services/auth/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router */ "./resources/js/router/index.js");
/* harmony import */ var _basic_loading_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../basic/loading.vue */ "./resources/js/basic/loading.vue");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      toSaveImage: null,
      toSaveImage2: null,
      auth: _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"],
      dialogConfirmation: false,
      editCat: false,
      tableForCategory: true,
      tableForProduct: false,
      tableForAddOns: false,
      tableForCupType: false,
      tableForCupSize: false,
      normal: true,
      online: false,
      productName: null,
      img: null,
      imgURL: null,
      lowPrice: null,
      highPrice: null,
      overPrice: null,
      onlinelowPrice: null,
      onlinehighPrice: null,
      onlineoverPrice: null,
      prodType: null,
      image: null,
      imageURL: null,
      productType: null,
      inputAddOns: null,
      addOnsPrice: null,
      onlineAddOnsPrice: null,
      addOnsStat: null,
      editAddOnsShow: false,
      addonsShow: false,
      idAddOns: null,
      datas: [],
      productData: [],
      categoryData: [],
      categoryName: [],
      btnCupType: false,
      btnEditCupType: false,
      inputCupPrice: null,
      inputCupOnlinePrice: null,
      inputCup: null,
      inputCupQuantity: null,
      cupStatus: null,
      idCup: null,
      cupData: [],
      prod: false,
      description: null,
      cat: true,
      ons: false,
      cup: false,
      size: false,
      secondEvent: "",
      productAdd: true,
      productEdit: false,
      status: null,
      prodId: null,
      priceEvent: ""
    }, _defineProperty(_ref, "online", false), _defineProperty(_ref, "errorMessage", null), _defineProperty(_ref, "lowDoseCup", null), _defineProperty(_ref, "highDoseCup", null), _defineProperty(_ref, "overDoseCup", null), _defineProperty(_ref, "cupSizeData", []), _defineProperty(_ref, "search", null), _defineProperty(_ref, "title", null), _defineProperty(_ref, "dialogForCupType", false), _defineProperty(_ref, "dialogForProduct", false), _defineProperty(_ref, "dialogForCategory", false), _defineProperty(_ref, "dialogForAddOns", false), _defineProperty(_ref, "dialogForCupSize", false), _defineProperty(_ref, "dataHeader", null), _defineProperty(_ref, "catId", null), _defineProperty(_ref, "exampleRules", {
      min: function min(value) {
        return value >= 0;
      }
    }), _defineProperty(_ref, "headersForAddOns", [{
      text: "#",
      value: "id"
    }, {
      text: "Add Ons Name",
      value: "addons_name"
    }, {
      text: "Add Ons Price",
      value: "addons_price"
    }, {
      text: "Online Add Ons Price",
      value: "onlineAddOnsPrice"
    }, {
      text: "Status",
      value: "status"
    }, {
      text: "ACTION",
      value: "actions",
      sortable: false
    }]), _defineProperty(_ref, "headersForCupType", [{
      text: "#",
      value: "id"
    }, {
      text: "Cup Type",
      value: "cupTypeName"
    }, {
      text: "Additional Price",
      value: "cupTypePrice"
    }, {
      text: "Cup Online Price",
      value: "inputCupOnlinePrice"
    }, {
      text: "Status",
      value: "status"
    }, {
      text: "ACTION",
      value: "actions",
      sortable: false
    }]), _defineProperty(_ref, "headersForCategory", [{
      text: "#",
      value: "id"
    }, {
      text: "images",
      value: "image"
    }, {
      text: "Product Category",
      value: "productCategory"
    }, // { text: "Status", value: "status" },
    {
      text: "ACTION",
      value: "actions",
      sortable: false
    }]), _defineProperty(_ref, "headersForProduct", [{
      text: "#",
      value: "id"
    }, {
      text: "images",
      value: "image"
    }, {
      text: "Name",
      value: "productName"
    }, {
      text: "Description",
      value: "description"
    }, {
      text: "Category",
      value: "productCategory"
    }, {
      text: "Low Dose Price",
      value: "lowPrice"
    }, {
      text: "High Dose Price",
      value: "highPrice"
    }, {
      text: "Over Dose Price",
      value: "overPrice"
    }, {
      text: "Low Dose Online Price",
      value: "onlinelowPrice"
    }, {
      text: "High Dose Online Price",
      value: "onlineoverPrice"
    }, {
      text: "Over Dose Online Price",
      value: "overPrice"
    }, {
      text: "Status",
      value: "status"
    }, {
      text: "ACTION",
      value: "actions",
      sortable: false
    }]), _defineProperty(_ref, "headersForCupSize", [{
      text: "Date",
      value: "created_at"
    }, {
      text: "Low Dose Cup",
      value: "incomingLowDose"
    }, {
      text: "High Dose Cup",
      value: "incomingHighDose"
    }, {
      text: "Over Dose Cup",
      value: "incomingOverDose"
    }, {
      text: "Total IncomingCup",
      value: "incomingOverDose" + ""
    }]), _defineProperty(_ref, "loadingShow", false), _defineProperty(_ref, "errorMessage1", null), _defineProperty(_ref, "errorMessage2", null), _defineProperty(_ref, "errorMessage3", null), _defineProperty(_ref, "errorMessage4", null), _defineProperty(_ref, "errorMessage5", null), _defineProperty(_ref, "errorMessage6", null), _defineProperty(_ref, "deleteID", null), _defineProperty(_ref, "deleteParam", null), _ref;
  },
  mounted: function mounted() {
    this.retrieveCategories();
    this.retrieveProducts();
    this.retrieveAddOns();
    this.retrieveCupType();
    this.retrieveCupSize();
  },
  components: {
    loading: _basic_loading_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  methods: {
    deleteNow: function deleteNow() {
      if (this.deleteParam === 'category') {
        this.deleteCategory(this.deleteID);
      } else if (this.deleteParam === 'product') {
        this.deleteProduct(this.deleteID);
      } else if (this.deleteParam === 'addOns') {
        this.deleteAddOns(this.deleteID);
      } else if (this.deleteParam === 'cupType') {
        this.deleteCupType(this.deleteID);
      }
    },
    showDelete: function showDelete(id, param) {
      this.dialogConfirmation = true;
      this.deleteID = id;
      this.deleteParam = param;
    },
    validate: function validate(param) {
      if (param === 'lowDose') {
        if (parseInt(this.lowPrice) < 1) {
          this.errorMessage1 = 'Low Dose Price must be greater than 0';
        } else {
          this.errorMessage1 = null;
        }
      } else if (param === 'highDose') {
        if (parseInt(this.highPrice) <= parseInt(this.lowPrice)) {
          this.errorMessage1 = 'High Dose Price must be greater than Low Dose Price';
        } else {
          this.errorMessage1 = null;
        }
      } else if (param === 'overDose') {
        if (parseInt(this.overPrice) <= parseInt(this.highPrice)) {
          this.errorMessage1 = 'Over Dose Price must be greater than High Dose Price';
        } else {
          this.errorMessage1 = null;
        }
      } else if (param === 'onlineLowDose') {
        if (parseInt(this.onlinelowPrice) <= 0) {
          this.errorMessage1 = 'Over Dose Online Price must be greater than High Dose Price';
        } else {
          this.errorMessage1 = null;
        }
      } else if (param === 'onlineHighDose') {
        if (parseInt(this.onlinehighPrice) <= parseInt(this.onlinelowPrice)) {
          this.errorMessage1 = 'Over Dose Online Price must be greater than High Dose Price';
        } else {
          this.errorMessage1 = null;
        }
      } else if (param === 'onlineOverDose') {
        if (parseInt(this.onlineoverPrice) <= parseInt(this.onlinehighPrice)) {
          this.errorMessage1 = 'Over Dose Online Price must be greater than High Dose Price';
        } else {
          this.errorMessage1 = null;
        }
      } else if (param === 'addOnsPrice') {
        if (parseInt(this.addOnsPrice) < 0) {
          this.errorMessage2 = 'Add-ons Price must be greater than 0';
        } else {
          this.errorMessage2 = null;
        }
      } else if (param === 'onlineAddOnsPrice') {
        if (parseInt(this.onlineAddOnsPrice) < parseInt(this.addOnsPrice)) {
          this.errorMessage3 = 'Online Add-ons Price must be greater than Add-ons Price';
        } else {
          this.errorMessage3 = null;
        }
      } else if (param === 'cupTypePrice') {
        if (parseInt(this.inputCupPrice) < 0) {
          this.errorMessage4 = 'Cup Type Price must be greater 0';
        } else {
          this.errorMessage4 = null;
        }
      } else if (param === 'onlineCupTypePrice') {
        if (parseInt(this.inputCupOnlinePrice) < parseInt(this.inputCupPrice)) {
          this.errorMessage5 = 'Online Cup Type Price must be greater than Cup Type Price';
        } else {
          this.errorMessage5 = null;
        }
      } else if (param === 'cupSize') {
        if (parseInt(this.lowDoseCup) <= 0 || parseInt(this.highDoseCup) <= 0 || parseInt(this.overDoseCup) <= 0) {
          this.errorMessage6 = 'Cup Size Quantity must be greater than 0';
        } else {
          this.errorMessage6 = null;
        }
      }
    },
    getNumberDate: function getNumberDate(date, id) {
      return moment__WEBPACK_IMPORTED_MODULE_4___default()(date).format('MMDDYY') + id;
    },
    getDate: function getDate(date) {
      return moment__WEBPACK_IMPORTED_MODULE_4___default()(date).format('MM/DD/YYYY');
    },
    deleteCupType: function deleteCupType(id) {
      var _this = this;

      this.loadingShow = true;
      var param = {
        id: id
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "deleteCupType", param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status === 'Token is Expired') {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this.deleteID = null;
        _this.deleteParam = null;
        _this.dialogConfirmation = false;
        _this.loadingShow = false;
        sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
          title: "Congrats!",
          text: "You successfully deleted the cup type",
          icon: "success"
        });

        _this.retrieveCupType();
      });
    },
    deleteAddOns: function deleteAddOns(id) {
      var _this2 = this;

      this.loadingShow = true;
      var param = {
        id: id
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "deleteAddOns", param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status === 'Token is Expired') {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this2.deleteID = null;
        _this2.deleteParam = null;
        _this2.dialogConfirmation = false;
        _this2.loadingShow = false;
        sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
          title: "Congrats!",
          text: "You successfully deleted the add-ons",
          icon: "success"
        });

        _this2.retrieveAddOns();
      });
    },
    deleteProduct: function deleteProduct(id) {
      var _this3 = this;

      this.loadingShow = true;
      var param = {
        id: id
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "deleteProduct", param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status === 'Token is Expired') {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this3.deleteID = null;
        _this3.deleteParam = null;
        _this3.dialogConfirmation = false;
        _this3.loadingShow = false;
        sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
          title: "Congrats!",
          text: "You successfully deleted the product",
          icon: "success"
        });

        _this3.retrieveProducts();
      });
    },
    deleteCategory: function deleteCategory(id) {
      var _this4 = this;

      this.loadingShow = true;
      var param = {
        id: id
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "deleteCategory", param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status === 'Token is Expired') {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this4.deleteID = null;
        _this4.deleteParam = null;
        _this4.dialogConfirmation = false;
        _this4.loadingShow = false;
        sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
          title: "Congrats!",
          text: "You successfully deleted the category",
          icon: "success"
        });

        _this4.retrieveCategories();
      });
    },
    changeName: function changeName(param) {
      if (param === 'category') {
        this.cat = true;
        this.prod = false;
        this.size = false;
        this.ons = false;
        this.cup = false;
      } else if (param === 'product') {
        this.cat = false;
        this.prod = true;
        this.size = false;
        this.ons = false;
        this.cup = false;
      } else if (param === 'cupSize') {
        this.cat = false;
        this.prod = false;
        this.size = true;
        this.ons = false;
        this.cup = false;
      } else if (param === 'cupType') {
        this.cat = false;
        this.prod = false;
        this.size = false;
        this.ons = false;
        this.cup = true;
      } else if (param === 'addOns') {
        this.cat = false;
        this.prod = false;
        this.size = false;
        this.ons = true;
        this.cup = false;
      }
    },
    NACupUpdate: function NACupUpdate(id) {
      var _this5 = this;

      this.loadingShow = true;
      var param = {
        id: id,
        status: "Not Available"
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateAvailableCupType", param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        _this5.retrieveCupType();

        _this5.loadingShow = false;

        if (response.data.status === 'Token is Expired') {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }
      });
    },
    availableCupUpdate: function availableCupUpdate(id) {
      var _this6 = this;

      this.loadingShow = true;
      var param = {
        id: id,
        status: "Available"
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateAvailableCupType", param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this6.retrieveCupType();

        _this6.loadingShow = false;
      });
    },
    retrieveCupType: function retrieveCupType() {
      var _this7 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveAllCupType", {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this7.cupData = response.data.cupType;
        _this7.loadingShow = false;
      });
    },
    retrieveCupSize: function retrieveCupSize() {
      var _this8 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveCupSize", {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this8.loadingShow = false;
        _this8.cupSizeData = response.data.quantityCupsInDB.reverse();
        response.data.quantityCupsInDB.forEach(function (element) {});
        var totalCup = response.data.quantityCupsInDB.incomingOverDose;
      });
    },
    addingCupType: function addingCupType() {
      var _this9 = this;

      this.loadingShow = true;
      var config = {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('userToken')
        }
      };

      if (this.inputCupPrice !== null && this.inputCup !== null && this.errorMessage4 === null && this.errorMessage5 === null) {
        var param = {
          cupType: this.inputCup,
          inputCupOnlinePrice: this.inputCupOnlinePrice,
          price: this.inputCupPrice,
          status: "Available"
        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "addingCupType", param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
          if (response.data.status) {
            _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
          }

          _this9.loadingShow = false;
          sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
            title: "Congrats!",
            text: "You have successfully added a cup type!",
            icon: "success"
          });

          _this9.retrieveCupType();

          _this9.dialogForCupType = false;
        });
      } else {
        this.errorMessage = "Please fill up all fields";
        this.loadingShow = false;
      }
    },
    addingCupSize: function addingCupSize() {
      var _this10 = this;

      this.loadingShow = true;

      if (this.lowDoseCup !== null && this.highDoseCup !== null && this.overDoseCup !== null && this.lowDoseCup !== "" && this.highDoseCup !== "" && this.overDoseCup !== "" && this.lowDoseCup >= 0 && this.highDoseCup >= 0 && this.overDoseCup >= 0 && this.errorMessage6 === null) {
        var param = {
          incomingLowDose: this.lowDoseCup,
          incomingHighDose: this.highDoseCup,
          incomingOverDose: this.overDoseCup
        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "addIncomingCups", param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
          if (response.data.status) {
            _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
          }

          _this10.loadingShow = false;
          sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
            title: "Congrats!",
            text: "You have successfully added cups!",
            icon: "success"
          });

          _this10.retrieveCupSize();

          _this10.hide();
        });
      } else if (this.lowDoseCup < 0 && this.highDoseCup < 0 && this.overDoseCup < 0) {
        this.loadingShow = false;
        this.errorMessage = "Fields must be atleast 0";
      } else {
        this.loadingShow = false;
        this.errorMessage = "Please fill up all fields";
      }
    },
    editingCupType: function editingCupType() {
      var _this11 = this;

      this.loadingShow = true;

      if (this.inputCupPrice !== null && this.inputCup !== null && this.errorMessage4 === null && this.errorMessage5 === null) {
        var param = {
          id: this.idCup,
          cupType: this.inputCup,
          inputCupOnlinePrice: this.inputCupOnlinePrice,
          price: this.inputCupPrice,
          status: this.cupStatus
        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "editingCupType", param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
          if (response.data.status) {
            _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
          }

          _this11.loadingShow = false;
          sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
            title: "Congrats!",
            text: "You have successfully updated the cup type!",
            icon: "success"
          });

          _this11.retrieveCupType();

          _this11.hide();
        });
      } else {
        this.errorMessage = "Please fill up all fields";
        this.loadingShow = false;
      }
    },
    normalPrice: function normalPrice(event) {
      if (this.priceEvent !== event.target) {
        event.target.classList.add("borderStyle1");
        event.target.classList.remove("btnBorderStyle");

        if (this.priceEvent !== "") {
          this.priceEvent.classList.add("btnBorderStyle");
          this.priceEvent.classList.remove("borderStyle1");
        }
      }

      this.priceEvent = event.target;
      this.online = false;
    },
    onlinePrice: function onlinePrice(event) {
      if (this.priceEvent !== event.target) {
        event.target.classList.add("borderStyle1");
        event.target.classList.remove("btnBorderStyle");

        if (this.priceEvent !== "") {
          this.priceEvent.classList.add("btnBorderStyle");
          this.priceEvent.classList.remove("borderStyle1");
        }
      }

      this.online = true;
      this.priceEvent = event.target;
    },
    onImgChange: function onImgChange(e) {
      var _this12 = this;

      this.img = e.target.files[0];
      this.imgURL = URL.createObjectURL(e.target.files[0]);
      this.loadingShow = true;
      var data = new FormData();
      data.append('file', this.img);
      this.$axios.post('http://ec2-34-205-139-231.compute-1.amazonaws.com:3232/api/file/upload', data).then(function (res) {
        _this12.toSaveImage = res.data.result.body.file_url;
        _this12.loadingShow = false;
      });
    },
    formSubmitProduct: function formSubmitProduct(e) {
      e.preventDefault();
      this.loadingShow = true;

      if (this.img !== null && this.prodType !== null && this.productName !== null && this.lowPrice !== null && this.highPrice !== null && this.overPrice !== null && this.onlinelowPrice !== null && this.onlinehighPrice !== null & this.onlineoverPrice !== null && this.lowPrice > 0 && this.highPrice > 0 && this.overPrice > 0 && this.onlinelowPrice > 0 && this.onlinehighPrice > 0 && this.onlineoverPrice > 0 && this.errorMessage1 === null) {
        var currentObj = this;
        var config = {
          headers: {
            'content-type': 'multipart/form-data',
            Authorization: 'Bearer ' + localStorage.getItem('userToken')
          }
        };
        var formData = new FormData(); // formData.append('image', this.img)

        formData.append('image', this.toSaveImage);
        formData.append('productCategory', this.prodType);
        formData.append('productName', this.productName);
        formData.append('description', this.description);
        formData.append('status', 'Available');
        formData.append('lowPrice', this.lowPrice);
        formData.append('highPrice', this.highPrice);
        formData.append('overPrice', this.overPrice);
        formData.append('onlinelowPrice', this.onlinelowPrice);
        formData.append('onlinehighPrice', this.onlinehighPrice);
        formData.append('onlineoverPrice', this.onlineoverPrice);
        this.$axios.post('/formSubmit', formData, config).then(function (response) {
          currentObj.loadingShow = false;
          sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
            title: "Congrats!",
            text: "You have successfully added a product!",
            icon: "success"
          });
          currentObj.success = response.data.success;
          currentObj.retrieveCategories();
          currentObj.retrieveProducts();
          currentObj.hide();

          if (response.data.status) {
            _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
          }
        })["catch"](function (error) {
          currentObj.output = error;
          currentObj.loadingShow = false;
        });
      } else {
        this.errorMessage = 'Please fill up all fields';
        this.loadingShow = false;
      }
    },
    editProduct: function editProduct(item) {
      this.errorMessage = null;
      this.dialogForProduct = true;
      this.productName = item.productName;
      this.description = item.description;
      this.prodType = item.productCategory;
      this.toSaveImage = item.image; // this.img = item.image

      this.lowPrice = item.lowPrice;
      this.highPrice = item.highPrice;
      this.overPrice = item.overPrice;
      this.onlinelowPrice = item.onlinelowPrice;
      this.onlinehighPrice = item.onlinehighPrice;
      this.onlineoverPrice = item.onlineoverPrice;
      this.imgURL = item.image;
      this.productAdd = false;
      this.productEdit = true;
      this.status = item.status;
      this.prodId = item.id;
    },
    updateProduct: function updateProduct(e) {
      this.loadingShow = true;

      if (this.img !== null && this.prodType !== null && this.productName !== null && this.lowPrice !== null && this.highPrice !== null && this.overPrice !== null && this.onlinelowPrice !== null && this.onlinehighPrice !== null && this.onlineoverPrice !== null && this.errorMessage1 === null) {
        e.preventDefault();
        var currentObj = this;
        var config = {
          headers: {
            'content-type': 'multipart/form-data',
            Authorization: 'Bearer ' + localStorage.getItem('userToken')
          }
        };
        var formData = new FormData();
        formData.append('id', this.prodId);
        formData.append('image', this.toSaveImage); // formData.append('image', this.img)

        formData.append('status', this.status);
        formData.append('productCategory', this.prodType);
        formData.append('productName', this.productName);
        formData.append('description', this.description);
        formData.append('lowPrice', this.lowPrice);
        formData.append('highPrice', this.highPrice);
        formData.append('overPrice', this.overPrice);
        formData.append('onlinelowPrice', this.onlinelowPrice);
        formData.append('onlinehighPrice', this.onlinehighPrice);
        formData.append('onlineoverPrice', this.onlineoverPrice);
        this.$axios.post('/updateProduct', formData, config).then(function (response) {
          if (response.data.status) {
            _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
          }

          currentObj.loadingShow = false;
          sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
            title: "Congrats!",
            text: "You have successfully updated the product!",
            icon: "success"
          });
          currentObj.success = response.data.success;
          currentObj.retrieveCategories();
          currentObj.retrieveProducts();
          currentObj.hide();
        })["catch"](function (error) {
          currentObj.output = error;
          currentObj.loadingShow = false;
        });
      } else {
        this.errorMessage = 'Please fill up all fields';
        this.loadingShow = false;
      }
    },
    productStatusUpdate: function productStatusUpdate(id) {
      var _this13 = this;

      this.loadingShow = true;
      var param = {
        id: id,
        status: "Not Available"
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateStatusProduct", param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this13.retrieveProducts();

        _this13.loadingShow = false;
      });
    },
    productStatusAvailable: function productStatusAvailable(id) {
      var _this14 = this;

      this.loadingShow = true;
      var param = {
        id: id,
        status: "Available"
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateStatusProduct", param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this14.retrieveProducts();

        _this14.loadingShow = false;
      });
    },
    onImageChange: function onImageChange(e) {
      var _this15 = this;

      this.image = e.target.files[0];
      this.imageURL = URL.createObjectURL(e.target.files[0]);
      this.loadingShow = true;
      var data = new FormData();
      data.append('file', this.image);
      this.$axios.post('http://ec2-34-205-139-231.compute-1.amazonaws.com:3232/api/file/upload', data).then(function (res) {
        _this15.toSaveImage2 = res.data.result.body.file_url;
        _this15.loadingShow = false;
      });
    },
    editCategories: function editCategories(item) {
      this.errorMessage = null;
      this.dialogForCategory = true;
      this.editCat = true; // this.image = item.image

      this.toSaveImage2 = item.image;
      this.imageURL = item.image;
      this.productType = item.productCategory;
      this.catId = item.id;
    },
    updateCategory: function updateCategory(e) {
      this.loadingShow = true;

      if (this.image !== null && this.productType !== null) {
        e.preventDefault();
        var currentObj = this;
        var config = {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: 'Bearer ' + localStorage.getItem('userToken')
          }
        };
        var formData = new FormData();
        formData.append("id", this.catId); // formData.append("image", this.image);

        formData.append("image", this.toSaveImage2);
        formData.append("productCategory", this.productType);
        axios.post("/updateCategory", formData, config).then(function (response) {
          if (response.data.status) {
            _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
          }

          currentObj.loadingShow = false;
          sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
            title: "Congrats!",
            text: "You have successfully updated the category",
            icon: "success"
          });
          currentObj.success = response.data.success;
          currentObj.retrieveCategories();
          currentObj.retrieveProducts();
          currentObj.hide();
        })["catch"](function (error) {
          currentObj.loadingShow = false;
          currentObj.output = error;
        });
      } else {
        this.errorMessage = "Please fill up all fields";
        this.loadingShow = false;
      }
    },
    formSubmit: function formSubmit(e) {
      this.loadingShow = true;

      if (this.image !== null && this.productType !== null) {
        e.preventDefault();
        var currentObj = this;
        var config = {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: 'Bearer ' + localStorage.getItem('userToken')
          }
        };
        var formData = new FormData(); // formData.append("image", this.image);

        formData.append("image", this.toSaveImage2);
        formData.append("productCategory", this.productType);
        axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "addCategory", formData, config).then(function (response) {
          if (response.data.status) {
            _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
          }

          currentObj.loadingShow = false;
          sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
            title: "Congrats!",
            text: "You have successfully added a category",
            icon: "success"
          });
          currentObj.success = response.data.success;
          currentObj.retrieveCategories();
          currentObj.retrieveProducts();
          currentObj.hide();
        })["catch"](function (error) {
          currentObj.loadingShow = false;
          currentObj.output = error;
        });
      } else {
        this.errorMessage = "Please fill up all fields";
        this.loadingShow = false;
      }
    },
    product: function product(event) {
      if (this.secondEvent !== event.target) {
        event.target.classList.add("borderStyle");
        event.target.classList.remove("btnBorderStyle1");

        if (this.secondEvent !== "") {
          this.secondEvent.classList.add("btnBorderStyle1");
          this.secondEvent.classList.remove("borderStyle");
        }
      }

      this.secondEvent = event.target;
      this.prod = true;
      this.cat = false;
      this.ons = false;
      this.cup = false;
      this.size = false;
    },
    cupSize: function cupSize(event) {
      if (this.secondEvent !== event.target) {
        event.target.classList.add("borderStyle");
        event.target.classList.remove("btnBorderStyle1");

        if (this.secondEvent !== "") {
          this.secondEvent.classList.add("btnBorderStyle1");
          this.secondEvent.classList.remove("borderStyle");
        }
      }

      this.secondEvent = event.target;
      this.size = true;
      this.prod = false;
      this.cat = false;
      this.ons = false;
      this.cup = false;
    },
    category: function category(event) {
      this.dataHeader = [{
        text: "#",
        value: "id"
      }, {
        text: "images",
        value: "image"
      }, {
        text: "Product Category",
        value: "productCategory"
      }, {
        text: "Status",
        value: "status"
      }, {
        text: "ACTION",
        value: "actions",
        sortable: false
      }];

      if (this.secondEvent !== event.target) {
        event.target.classList.add("borderStyle");
        event.target.classList.remove("btnBorderStyle1");

        if (this.secondEvent !== "") {
          this.secondEvent.classList.add("btnBorderStyle1");
          this.secondEvent.classList.remove("borderStyle");
        }
      }

      this.secondEvent = event.target;
      this.prod = false;
      this.cat = true;
      this.ons = false;
      this.cup = false;
      this.size = false;
    },
    addOnsShow: function addOnsShow(event) {
      if (this.secondEvent !== event.target) {
        event.target.classList.add("borderStyle");
        event.target.classList.remove("btnBorderStyle1");

        if (this.secondEvent !== "") {
          this.secondEvent.classList.add("btnBorderStyle1");
          this.secondEvent.classList.remove("borderStyle");
        }
      }

      this.secondEvent = event.target;
      this.prod = false;
      this.cat = false;
      this.ons = true;
      this.cup = false;
      this.size = false;
    },
    addCupType: function addCupType(event) {
      if (this.secondEvent !== event.target) {
        event.target.classList.add("borderStyle");
        event.target.classList.remove("btnBorderStyle1");

        if (this.secondEvent !== "") {
          this.secondEvent.classList.add("btnBorderStyle1");
          this.secondEvent.classList.remove("borderStyle");
        }
      }

      this.secondEvent = event.target;
      this.prod = false;
      this.cat = false;
      this.ons = false;
      this.cup = true;
      this.size = false;
    },
    showAddOns: function showAddOns() {
      this.errorMessage = null;
      this.dialogForAddOns = true;
      this.editAddOnsShow = false;
      this.addonsShow = true;
      this.inputAddOns = null;
      this.onlineAddOnsPrice = null;
      this.addOnsPrice = null;
    },
    showCupSize: function showCupSize() {
      this.errorMessage = null;
      this.dialogForCupSize = true;
      this.cupSizeShow = true;
      this.lowDoseCup = null;
      this.highDoseCup = null;
      this.overDoseCup = null;
    },
    showProduct: function showProduct() {
      this.errorMessage = null;
      this.dialogForProduct = true;
      this.productAdd = true;
      this.productEdit = false;
      this.prodType = null;
      this.productName = null;
      this.description = null;
      this.lowPrice = null;
      this.highPrice = null;
      this.overPrice = null;
      this.onlinelowPrice = null;
      this.onlinehighPrice = null;
      this.onlineoverPrice = null;
      this.imgURL = null;
      this.img = null;
    },
    showCategory: function showCategory() {
      this.editCat = false;
      this.image = null;
      this.productType = null;
      this.dialogForCategory = true;
      this.imageURL = null;
      this.productType = null;
      this.errorMessage = null;
    },
    showCupType: function showCupType() {
      this.errorMessage = null;
      this.dialogForCupType = true;
      this.btnCupType = true;
      this.btnEditCupType = false;
      this.inputCupPrice = null;
      this.inputCupOnlinePrice = null;
      this.inputCup = null;
      this.inputCupQuantity = null;
    },
    editCup: function editCup(item) {
      this.errorMessage = null;
      this.dialogForCupType = true;
      this.btnEditCupType = true;
      this.btnCupType = false;
      this.idCup = item.id;
      this.inputCup = item.cupTypeName;
      this.inputCupOnlinePrice = item.inputCupOnlinePrice;
      this.inputCupPrice = item.cupTypePrice;
      this.cupStatus = item.status;
    },
    hide: function hide() {
      this.dialogForCategory = false;
      this.dialogForProduct = false;
      this.dialogForAddOns = false;
      this.dialogForCupType = false;
      this.dialogForCupSize = false;
      this.showProductModal = false;
      this.showCategoryModal = false;
      this.editAddOnsShow = false;
      this.addonsShow = false;
      this.showCupTypeModal = false;
      this.btnCupType = false;
      this.btnEditCupType = false;
      this.showCupSizeModal = false;
    },
    redirect: function redirect(route) {
      _router__WEBPACK_IMPORTED_MODULE_1__["default"].push(route)["catch"](function () {});
    },
    addAddOns: function addAddOns() {
      var _this16 = this;

      this.loadingShow = true;

      if (this.addOnsPrice !== null && this.inputAddOns !== null && this.onlineAddOnsPrice !== null && this.errorMessage2 === null && this.errorMessage3 === null) {
        var param = {
          addOns: this.inputAddOns,
          onlineAddOnsPrice: this.onlineAddOnsPrice,
          price: this.addOnsPrice,
          status: "Available"
        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "addingAddOns", param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
          if (response.data.status) {
            _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
          }

          _this16.loadingShow = false;
          sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
            title: "Congrats!",
            text: "You have successfully added an add-ons!",
            icon: "success"
          });

          _this16.retrieveAddOns();

          _this16.dialogForAddOns = false;
        });
      } else {
        this.errorMessage = "Please fill up all fields";
        this.loadingShow = false;
      }
    },
    retrieveAddOns: function retrieveAddOns() {
      var _this17 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveAllAddOns", {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this17.datas = response.data.addons;
        _this17.loadingShow = false;
      });
    },
    editAddOns: function editAddOns(item) {
      this.errorMessage = null;
      this.dialogForAddOns = true;
      this.inputAddOns = item.addons_name;
      this.addOnsPrice = item.addons_price;
      this.onlineAddOnsPrice = item.onlineAddOnsPrice;
      this.addOnsStat = item.status;
      this.addonsShow = false;
      this.editAddOnsShow = true;
      this.addAddOns = false;
      this.idAddOns = item.id;
    },
    editAddOnsData: function editAddOnsData() {
      var _this18 = this;

      this.loadingShow = true;

      if (this.addOnsPrice !== null && this.inputAddOns !== null && this.errorMessage2 === null && this.errorMessage3 === null) {
        var param = {
          id: this.idAddOns,
          addOns: this.inputAddOns,
          onlineAddOnsPrice: this.onlineAddOnsPrice,
          price: this.addOnsPrice,
          status: this.addOnsStat
        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateAddOns", param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
          if (response.data.status) {
            _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
          }

          _this18.loadingShow = false;
          sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
            title: "Congrats!",
            text: "You have successfully updated the add-ons!",
            icon: "success"
          });

          _this18.retrieveAddOns();

          _this18.hide();
        });
      } else {
        this.errorMessage = "Please fill up all fields";
        this.loadingShow = false;
      }
    },
    NAStatusUpdate: function NAStatusUpdate(id) {
      var _this19 = this;

      this.loadingShow = true;
      var param = {
        id: id,
        status: "Not Available"
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateStatusAddOns", param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this19.loadingShow = false;

        _this19.retrieveAddOns();
      });
    },
    availableStatusUpdate: function availableStatusUpdate(id) {
      var _this20 = this;

      this.loadingShow = true;
      var param = {
        id: id,
        status: "Available"
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateStatusAddOns", param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this20.loadingShow = false;

        _this20.retrieveAddOns();
      });
    },
    retrieveProducts: function retrieveProducts() {
      var _this21 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveAllProduct", {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this21.loadingShow = false;
        _this21.productData = response.data.product;
      });
    },
    retrieveCategories: function retrieveCategories() {
      var _this22 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveCategory", {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this22.loadingShow = false;
        _this22.categoryData = response.data.addCategory;
        response.data.addCategory.forEach(function (element) {
          _this22.categoryName.push(element.productCategory);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-input__slot[data-v-62e92aac] {\r\n  margin-bottom: -35px;\n}\n.errorColor[data-v-62e92aac] {\r\n  color: red;\n}\n[data-v-62e92aac]::-webkit-scrollbar {\r\n  width: 2px;\n}\n.my-custom-scrollbar[data-v-62e92aac][data-v-62e92aac] {\r\n  position: relative;\r\n  height: 500px;\r\n  width: 100%;\r\n  overflow: auto;\n}\n.fileStyle[data-v-62e92aac] {\r\n  font-size: 17px !important;\r\n  width: 97px;\r\n  margin-top: 3%;\r\n  margin-bottom: 3%;\n}\n.addOnsImage[data-v-62e92aac] {\r\n  width: 250px !important;\r\n  height: 250px !important;\r\n  margin-top: 2% !important;\n}\n.navButton[data-v-62e92aac] {\r\n  float: left;\r\n  width: 200px;\n}\n.borderStyle1[data-v-62e92aac] {\r\n  border-left: 1px solid #d8dce3;\r\n  border-top: 1px solid #d8dce3;\r\n  border-right: 1px solid #d8dce3;\n}\n.btnBorderStyle[data-v-62e92aac] {\r\n  margin-top: -0.7%;\r\n  border-bottom: 1px solid #d8dce3;\n}\n.borderStyle[data-v-62e92aac] {\r\n  border-left: 3px solid grey;\r\n  border-top: 3px solid grey;\r\n  border-right: 3px solid grey;\n}\n.btnBorderStyle1[data-v-62e92aac] {\r\n  border-bottom: 3px solid grey;\n}\n.table tr[data-v-62e92aac] {\r\n  text-align: center;\n}\nimg[data-v-62e92aac] {\r\n  height: 50px;\r\n  width: 100px;\n}\nhr[data-v-62e92aac] {\r\n  border: 1px solid gray;\n}\nh1[data-v-62e92aac]{\r\n  text-align: center;\r\n  margin-top: 3%;\n}\nth[data-v-62e92aac] {\r\n  text-align: center;\r\n  font-size: 30px;\n}\nlabel[data-v-62e92aac] {\r\n  font-size: 20px !important;\n}\n.blurred-background[data-v-62e92aac] {\r\n  position: fixed;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  text-align: center;\r\n  background: rgb(54, 54, 54, 0.7);\n}\n.table[data-v-62e92aac] {\r\n  width: 90%;\r\n  margin-top: 60px;\n}\n.searchInput[data-v-62e92aac] {\r\n  width: 50%;\n}\n#alert-box[data-v-62e92aac] {\r\n  width: 400px;\r\n  background: white;\r\n  display: inline-block;\r\n  margin-top: 180px;\r\n  font-weight: lighter;\r\n  border-radius: 3px;\r\n  font-size: 30px;\r\n  padding: 20px;\r\n  transition: 0.2s;\r\n  text-align: left;\r\n  box-shadow: 5px 5px gray;\n}\n.alert-box2[data-v-62e92aac] {\r\n  width: 550px;\r\n  background: white;\r\n  display: inline-block;\r\n  margin-top: 150px;\r\n  font-weight: lighter;\r\n  border-radius: 3px;\r\n  font-size: 30px;\r\n  padding: 20px;\r\n  transition: 0.2s;\r\n  text-align: left;\r\n  box-shadow: 5px 5px gray;\n}\n#alert-box3[data-v-62e92aac] {\r\n  width: 550px;\r\n  background: white;\r\n  display: inline-block;\r\n  margin-top: 50px;\r\n  font-weight: lighter;\r\n  border-radius: 3px;\r\n  font-size: 20px;\r\n  padding: 20px;\r\n  transition: 0.2s;\r\n  text-align: left;\r\n  box-shadow: 5px 5px gray;\n}\n.productTable[data-v-62e92aac] {\r\n  width: 100%;\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\n}\n.categoryTable[data-v-62e92aac] {\r\n  width: 70%;\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\n}\n.addOnsTable[data-v-62e92aac] {\r\n  width: 50%;\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\n}\n.cupTable[data-v-62e92aac] {\r\n  width: 60%;\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\n}\n.my-custom-scrollbar[data-v-62e92aac] {\r\n  position: relative;\r\n  height: 500px;\r\n  width: 70%;\r\n  overflow: auto;\n}\n.table-wrapper-scroll-y[data-v-62e92aac] {\r\n  display: contents;\n}\n.div[data-v-62e92aac] {\r\n  /* border-style: solid; */\r\n  margin-top: 3%;\r\n  margin-bottom: 5%;\n}\n.btnModal[data-v-62e92aac] {\r\n  float: right;\r\n  margin-right: 1%;\n}\n#buttonAdd[data-v-62e92aac] {\r\n  float: right;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/add.vue?vue&type=template&id=62e92aac&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/add.vue?vue&type=template&id=62e92aac&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
        "center",
        [
          _c(
            "v-toolbar",
            {
              attrs: { flat: "" },
              scopedSlots: _vm._u([
                {
                  key: "extension",
                  fn: function() {
                    return [
                      _c(
                        "v-tabs",
                        {
                          attrs: {
                            dark: "",
                            "background-color": "#ff5b04",
                            "fixed-tabs": ""
                          }
                        },
                        [
                          _c("v-tabs-slider"),
                          _vm._v(" "),
                          _c(
                            "v-tab",
                            {
                              on: {
                                click: function($event) {
                                  _vm.changeName("category"),
                                    (_vm.tableForAddOns = false),
                                    (_vm.tableForCupSize = false),
                                    (_vm.tableForProduct = false),
                                    (_vm.tableForCategory = true),
                                    (_vm.tableForCupType = false)
                                }
                              }
                            },
                            [_vm._v("Category")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tab",
                            {
                              on: {
                                click: function($event) {
                                  _vm.changeName("product"),
                                    (_vm.tableForAddOns = false),
                                    (_vm.tableForCupSize = false),
                                    (_vm.tableForProduct = true),
                                    (_vm.tableForCategory = false),
                                    (_vm.tableForCupType = false)
                                }
                              }
                            },
                            [_vm._v("Product")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tab",
                            {
                              on: {
                                click: function($event) {
                                  _vm.changeName("addOns"),
                                    (_vm.tableForAddOns = true),
                                    (_vm.tableForCupSize = false),
                                    (_vm.tableForProduct = false),
                                    (_vm.tableForCategory = false),
                                    (_vm.tableForCupType = false)
                                }
                              }
                            },
                            [_vm._v("Add Ons")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tab",
                            {
                              on: {
                                click: function($event) {
                                  _vm.changeName("cupType"),
                                    (_vm.tableForAddOns = false),
                                    (_vm.tableForCupSize = false),
                                    (_vm.tableForProduct = false),
                                    (_vm.tableForCategory = false),
                                    (_vm.tableForCupType = true)
                                }
                              }
                            },
                            [_vm._v("Cup Type")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tab",
                            {
                              on: {
                                click: function($event) {
                                  _vm.changeName("cupSize"),
                                    (_vm.tableForAddOns = false),
                                    (_vm.tableForCupSize = true),
                                    (_vm.tableForProduct = false),
                                    (_vm.tableForCategory = false),
                                    (_vm.tableForCupType = false)
                                }
                              }
                            },
                            [_vm._v("Cup Size")]
                          )
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            },
            [_c("v-toolbar-title")],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.tableForCategory
        ? _c("v-data-table", {
            staticClass: "elevation-3",
            attrs: {
              headers: _vm.headersForCategory,
              items: _vm.categoryData,
              search: _vm.search,
              "items-per-page": 5
            },
            scopedSlots: _vm._u(
              [
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
                            [_vm._v("MILK TEA CATEGORY")]
                          ),
                          _vm._v("      \n        "),
                          _c("v-text-field", {
                            staticClass: "mt-7",
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
                              staticClass: "btn btn-primary btnModal",
                              attrs: {
                                color: "primary",
                                type: "button",
                                dark: ""
                              },
                              on: { click: _vm.showCategory }
                            },
                            [_vm._v("+CATEGORY")]
                          )
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                },
                {
                  key: "item.id",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _c("span", [
                        _vm._v(
                          _vm._s(_vm.getNumberDate(item.created_at, item.id))
                        )
                      ])
                    ]
                  }
                },
                {
                  key: "item.image",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _c("v-img", {
                        staticStyle: { width: "50px", hieght: "50px" },
                        attrs: { src: item.image }
                      })
                    ]
                  }
                },
                {
                  key: "item.actions",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _c(
                        "v-icon",
                        {
                          staticClass: "mr-2",
                          attrs: { small: "" },
                          on: {
                            click: function($event) {
                              return _vm.editCategories(item)
                            }
                          }
                        },
                        [_vm._v("mdi-pencil")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-icon",
                        {
                          attrs: { small: "" },
                          on: {
                            click: function($event) {
                              return _vm.showDelete(item.id, "category")
                            }
                          }
                        },
                        [_vm._v("mdi-delete")]
                      )
                    ]
                  }
                }
              ],
              null,
              false,
              3083376748
            )
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.tableForProduct
        ? _c("v-data-table", {
            staticClass: "elevation-3",
            attrs: {
              headers: _vm.headersForProduct,
              items: _vm.productData,
              search: _vm.search,
              "items-per-page": 5
            },
            scopedSlots: _vm._u(
              [
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
                            [_vm._v("MILK TEA PRODUCT")]
                          ),
                          _vm._v("      \n        "),
                          _c("v-text-field", {
                            staticClass: "mt-7",
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
                              staticClass: "btn btn-primary btnModal",
                              attrs: {
                                color: "primary",
                                type: "button",
                                dark: ""
                              },
                              on: {
                                click: function($event) {
                                  return _vm.showProduct()
                                }
                              }
                            },
                            [_vm._v("+ PRODUCT")]
                          )
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                },
                {
                  key: "item.id",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _c("span", [
                        _vm._v(
                          _vm._s(_vm.getNumberDate(item.created_at, item.id))
                        )
                      ])
                    ]
                  }
                },
                {
                  key: "item.image",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _c("v-img", {
                        staticStyle: { width: "50px", hieght: "50px" },
                        attrs: { src: item.image }
                      })
                    ]
                  }
                },
                {
                  key: "item.actions",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _c(
                        "v-icon",
                        {
                          staticClass: "mr-2",
                          attrs: { small: "" },
                          on: {
                            click: function($event) {
                              return _vm.editProduct(item)
                            }
                          }
                        },
                        [_vm._v("mdi-pencil")]
                      ),
                      _vm._v(" "),
                      item.status === "Available"
                        ? _c(
                            "v-icon",
                            {
                              attrs: { small: "" },
                              on: {
                                click: function($event) {
                                  return _vm.productStatusUpdate(item.id)
                                }
                              }
                            },
                            [_vm._v("mdi-window-close")]
                          )
                        : _c(
                            "v-icon",
                            {
                              attrs: { small: "" },
                              on: {
                                click: function($event) {
                                  return _vm.productStatusAvailable(item.id)
                                }
                              }
                            },
                            [_vm._v("mdi-check")]
                          ),
                      _vm._v(" "),
                      _c(
                        "v-icon",
                        {
                          attrs: { small: "" },
                          on: {
                            click: function($event) {
                              return _vm.showDelete(item.id, "product")
                            }
                          }
                        },
                        [_vm._v("mdi-delete")]
                      )
                    ]
                  }
                }
              ],
              null,
              false,
              1315124137
            )
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.tableForAddOns
        ? _c("v-data-table", {
            staticClass: "elevation-3",
            attrs: {
              headers: _vm.headersForAddOns,
              items: _vm.datas,
              search: _vm.search,
              "items-per-page": 5
            },
            scopedSlots: _vm._u(
              [
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
                            [_vm._v("MILK TEA ADDONS")]
                          ),
                          _vm._v("      \n        "),
                          _c("v-text-field", {
                            staticClass: "mt-7",
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
                              staticClass: "btn btn-primary btnModal",
                              attrs: {
                                color: "primary",
                                type: "button",
                                dark: ""
                              },
                              on: { click: _vm.showAddOns }
                            },
                            [_vm._v("+ ADD ONS")]
                          )
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                },
                {
                  key: "item.id",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _c("span", [
                        _vm._v(
                          _vm._s(_vm.getNumberDate(item.created_at, item.id))
                        )
                      ])
                    ]
                  }
                },
                {
                  key: "item.actions",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _c(
                        "v-icon",
                        {
                          staticClass: "mr-2",
                          attrs: { small: "" },
                          on: {
                            click: function($event) {
                              return _vm.editAddOns(item)
                            }
                          }
                        },
                        [_vm._v("mdi-pencil")]
                      ),
                      _vm._v(" "),
                      item.status === "Available"
                        ? _c(
                            "v-icon",
                            {
                              attrs: { small: "" },
                              on: {
                                click: function($event) {
                                  return _vm.NAStatusUpdate(item.id)
                                }
                              }
                            },
                            [_vm._v("mdi-window-close")]
                          )
                        : _c(
                            "v-icon",
                            {
                              attrs: { small: "" },
                              on: {
                                click: function($event) {
                                  return _vm.availableStatusUpdate(item.id)
                                }
                              }
                            },
                            [_vm._v("mdi-check")]
                          ),
                      _vm._v(" "),
                      _c(
                        "v-icon",
                        {
                          attrs: { small: "" },
                          on: {
                            click: function($event) {
                              return _vm.showDelete(item.id, "addOns")
                            }
                          }
                        },
                        [_vm._v("mdi-delete")]
                      )
                    ]
                  }
                }
              ],
              null,
              false,
              3622054763
            )
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.tableForCupType
        ? _c("v-data-table", {
            staticClass: "elevation-3",
            attrs: {
              headers: _vm.headersForCupType,
              items: _vm.cupData,
              search: _vm.search,
              "items-per-page": 5
            },
            scopedSlots: _vm._u(
              [
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
                            [_vm._v("TYPE OF CUP")]
                          ),
                          _vm._v("      \n        "),
                          _c("v-text-field", {
                            staticClass: "mt-7",
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
                              staticClass: "btn btn-primary btnModal",
                              attrs: {
                                color: "primary",
                                type: "button",
                                dark: ""
                              },
                              on: { click: _vm.showCupType }
                            },
                            [_vm._v("+ CUP TYPE")]
                          )
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                },
                {
                  key: "item.id",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _c("span", [
                        _vm._v(
                          _vm._s(_vm.getNumberDate(item.created_at, item.id))
                        )
                      ])
                    ]
                  }
                },
                {
                  key: "item.actions",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _c(
                        "v-icon",
                        {
                          staticClass: "mr-2",
                          attrs: { small: "" },
                          on: {
                            click: function($event) {
                              return _vm.editCup(item)
                            }
                          }
                        },
                        [_vm._v("mdi-pencil")]
                      ),
                      _vm._v(" "),
                      item.status === "Available"
                        ? _c(
                            "v-icon",
                            {
                              attrs: { small: "" },
                              on: {
                                click: function($event) {
                                  return _vm.NACupUpdate(item.id)
                                }
                              }
                            },
                            [_vm._v("mdi-window-close")]
                          )
                        : _c(
                            "v-icon",
                            {
                              attrs: { small: "" },
                              on: {
                                click: function($event) {
                                  return _vm.availableCupUpdate(item.id)
                                }
                              }
                            },
                            [_vm._v("mdi-check")]
                          ),
                      _vm._v(" "),
                      _c(
                        "v-icon",
                        {
                          attrs: { small: "" },
                          on: {
                            click: function($event) {
                              return _vm.showDelete(item.id, "cupType")
                            }
                          }
                        },
                        [_vm._v("mdi-delete")]
                      )
                    ]
                  }
                }
              ],
              null,
              false,
              2736671972
            )
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.tableForCupSize
        ? _c("v-data-table", {
            staticClass: "elevation-3",
            attrs: {
              headers: _vm.headersForCupSize,
              items: _vm.cupSizeData,
              search: _vm.search,
              "items-per-page": 5
            },
            scopedSlots: _vm._u(
              [
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
                            [_vm._v("MILK TEA CUP SIZE")]
                          ),
                          _vm._v("      \n        "),
                          _c("v-text-field", {
                            staticClass: "mt-7",
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
                              staticClass: "btn btn-primary btnModal",
                              attrs: {
                                color: "primary",
                                type: "button",
                                dark: ""
                              },
                              on: { click: _vm.showCupSize }
                            },
                            [_vm._v("+ CUP SIZE")]
                          )
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                },
                {
                  key: "item.created_at",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _c("span", [_vm._v(_vm._s(_vm.getDate(item.created_at)))])
                    ]
                  }
                }
              ],
              null,
              false,
              2770599221
            )
          })
        : _vm._e(),
      _vm._v(" "),
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
                  value: _vm.dialogForCategory,
                  callback: function($$v) {
                    _vm.dialogForCategory = $$v
                  },
                  expression: "dialogForCategory"
                }
              },
              [
                _c(
                  "v-card",
                  [
                    _c("div", { staticClass: "modal-header" }, [
                      _c("span", { staticClass: "headline" }, [
                        _vm._v("ADD CATEGORY")
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "close",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              _vm.dialogForCategory = false
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
                        _vm._v("\n                        NOTE: "),
                        _c("span", { staticClass: "text-danger text-center" }, [
                          _vm._v("All fields are required")
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-form",
                          {
                            attrs: {
                              enctype: "multipart/form-data",
                              action: ""
                            },
                            on: { submit: _vm.formSubmit }
                          },
                          [
                            _c("i", [
                              _vm.errorMessage !== null
                                ? _c("span", { staticClass: "errorColor" }, [
                                    _vm._v(_vm._s(_vm.errorMessage))
                                  ])
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-container",
                              [
                                _c(
                                  "v-row",
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        label: "ProductCategory Name",
                                        outlined: "",
                                        dense: "",
                                        type: "text",
                                        required: ""
                                      },
                                      model: {
                                        value: _vm.productType,
                                        callback: function($$v) {
                                          _vm.productType = $$v
                                        },
                                        expression: "productType"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("v-row", [
                                  _c(
                                    "div",
                                    { staticClass: "form-group" },
                                    [
                                      _c("center", [
                                        _c("img", {
                                          staticClass: "addOnsImage",
                                          attrs: { src: _vm.imageURL }
                                        }),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c("input", {
                                          staticClass: "fileStyle",
                                          attrs: { type: "file", required: "" },
                                          on: { change: _vm.onImageChange }
                                        }),
                                        _c("br")
                                      ])
                                    ],
                                    1
                                  )
                                ])
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
                                        _vm.dialogForCategory = false
                                      }
                                    }
                                  },
                                  [_vm._v(" Close")]
                                ),
                                _vm._v(" "),
                                !_vm.editCat
                                  ? _c(
                                      "v-btn",
                                      {
                                        staticClass: "btn btn-primary",
                                        attrs: {
                                          color: "blue darken-1",
                                          text: "",
                                          type: "submit"
                                        }
                                      },
                                      [_vm._v("Add Category")]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.editCat
                                  ? _c(
                                      "v-btn",
                                      {
                                        staticClass: "btn btn-primary",
                                        attrs: {
                                          color: "blue darken-1",
                                          text: "",
                                          type: "button"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.updateCategory($event)
                                          }
                                        }
                                      },
                                      [_vm._v("Edit Category")]
                                    )
                                  : _vm._e()
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
          ],
          1
        )
      ],
      _vm._v(" "),
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
                  value: _vm.dialogForProduct,
                  callback: function($$v) {
                    _vm.dialogForProduct = $$v
                  },
                  expression: "dialogForProduct"
                }
              },
              [
                _c(
                  "v-card",
                  [
                    _c("div", { staticClass: "modal-header" }, [
                      _c("span", { staticClass: "headline" }, [
                        _vm._v("PRODUCT")
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "close",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              _vm.dialogForProduct = false
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
                        _c("span", { staticClass: "text-danger text-center" }, [
                          _vm._v("All fields are required")
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-form",
                          {
                            attrs: {
                              enctype: "multipart/form-data",
                              action: ""
                            },
                            on: { submit: _vm.formSubmitProduct }
                          },
                          [
                            _c("i", [
                              _vm.errorMessage !== null
                                ? _c("span", { staticClass: "errorColor" }, [
                                    _vm._v(_vm._s(_vm.errorMessage))
                                  ])
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-container",
                              [
                                _c(
                                  "v-row",
                                  [
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12", sm: "6" } },
                                      [
                                        _c("v-select", {
                                          attrs: {
                                            items: _vm.categoryName,
                                            label: "Product Category",
                                            dense: "",
                                            outlined: ""
                                          },
                                          model: {
                                            value: _vm.prodType,
                                            callback: function($$v) {
                                              _vm.prodType = $$v
                                            },
                                            expression: "prodType"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12", sm: "6" } },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            label: "Product Name",
                                            outlined: ""
                                          },
                                          model: {
                                            value: _vm.productName,
                                            callback: function($$v) {
                                              _vm.productName = $$v
                                            },
                                            expression: "productName"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            label: "Description",
                                            outlined: ""
                                          },
                                          model: {
                                            value: _vm.description,
                                            callback: function($$v) {
                                              _vm.description = $$v
                                            },
                                            expression: "description"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-row",
                                  [
                                    _c(
                                      "v-tabs",
                                      {
                                        attrs: {
                                          dark: "",
                                          "background-color": "secondary",
                                          "fixed-tabs": ""
                                        }
                                      },
                                      [
                                        _c("v-tabs-slider"),
                                        _vm._v(" "),
                                        _c(
                                          "v-tab",
                                          {
                                            on: {
                                              click: function($event) {
                                                ;(_vm.normal = true),
                                                  (_vm.online = false)
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                              Normal Price\n                          "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-tab",
                                          {
                                            on: {
                                              click: function($event) {
                                                ;(_vm.online = true),
                                                  (_vm.normal = false)
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                              Online Price \n                          "
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _vm.normal
                                  ? _c(
                                      "div",
                                      {
                                        staticStyle: {
                                          border: "1px solid #d8dce3",
                                          "margin-top": "-0.5%"
                                        }
                                      },
                                      [
                                        _c("i", [
                                          _vm.errorMessage1 !== null
                                            ? _c(
                                                "span",
                                                { staticClass: "errorColor" },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.errorMessage1)
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
                                              "v-col",
                                              {
                                                attrs: { cols: "12", sm: "6" }
                                              },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Low Dose Price",
                                                    outlined: "",
                                                    min: "1",
                                                    type: "number",
                                                    required: ""
                                                  },
                                                  on: {
                                                    keyup: function($event) {
                                                      return _vm.validate(
                                                        "lowDose"
                                                      )
                                                    }
                                                  },
                                                  model: {
                                                    value: _vm.lowPrice,
                                                    callback: function($$v) {
                                                      _vm.lowPrice = $$v
                                                    },
                                                    expression: "lowPrice"
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              {
                                                attrs: { cols: "12", sm: "6" }
                                              },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "High Dose Price",
                                                    outlined: "",
                                                    min: "1",
                                                    type: "number",
                                                    required: ""
                                                  },
                                                  on: {
                                                    keyup: function($event) {
                                                      return _vm.validate(
                                                        "highDose"
                                                      )
                                                    }
                                                  },
                                                  model: {
                                                    value: _vm.highPrice,
                                                    callback: function($$v) {
                                                      _vm.highPrice = $$v
                                                    },
                                                    expression: "highPrice"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-row",
                                          [
                                            _c(
                                              "v-col",
                                              {
                                                attrs: { cols: "12", sm: "6" }
                                              },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Over Dose Price",
                                                    outlined: "",
                                                    min: "1",
                                                    type: "number",
                                                    required: ""
                                                  },
                                                  on: {
                                                    keyup: function($event) {
                                                      return _vm.validate(
                                                        "overDose"
                                                      )
                                                    }
                                                  },
                                                  model: {
                                                    value: _vm.overPrice,
                                                    callback: function($$v) {
                                                      _vm.overPrice = $$v
                                                    },
                                                    expression: "overPrice"
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
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.online
                                  ? _c(
                                      "div",
                                      {
                                        staticStyle: {
                                          border: "1px solid #d8dce3",
                                          "margin-top": "-0.5%"
                                        }
                                      },
                                      [
                                        _c("i", [
                                          _vm.errorMessage1 !== null
                                            ? _c(
                                                "span",
                                                { staticClass: "errorColor" },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.errorMessage1)
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
                                              "v-col",
                                              {
                                                attrs: { cols: "12", sm: "6" }
                                              },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label:
                                                      "Online Low Dose Price",
                                                    min: "1",
                                                    outlined: "",
                                                    type: "number",
                                                    required: ""
                                                  },
                                                  on: {
                                                    keyup: function($event) {
                                                      return _vm.validate(
                                                        "onlineLowDose"
                                                      )
                                                    }
                                                  },
                                                  model: {
                                                    value: _vm.onlinelowPrice,
                                                    callback: function($$v) {
                                                      _vm.onlinelowPrice = $$v
                                                    },
                                                    expression: "onlinelowPrice"
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              {
                                                attrs: { cols: "12", sm: "6" }
                                              },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label:
                                                      "Online High Dose Price",
                                                    min: "1",
                                                    outlined: "",
                                                    type: "number",
                                                    required: ""
                                                  },
                                                  on: {
                                                    keyup: function($event) {
                                                      return _vm.validate(
                                                        "onlineHighDose"
                                                      )
                                                    }
                                                  },
                                                  model: {
                                                    value: _vm.onlinehighPrice,
                                                    callback: function($$v) {
                                                      _vm.onlinehighPrice = $$v
                                                    },
                                                    expression:
                                                      "onlinehighPrice"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-row",
                                          [
                                            _c(
                                              "v-col",
                                              {
                                                attrs: { cols: "12", sm: "6" }
                                              },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label:
                                                      "Online Over Dose Price",
                                                    min: "1",
                                                    outlined: "",
                                                    type: "number",
                                                    required: ""
                                                  },
                                                  on: {
                                                    keyup: function($event) {
                                                      return _vm.validate(
                                                        "onlineOverDose"
                                                      )
                                                    }
                                                  },
                                                  model: {
                                                    value: _vm.onlineoverPrice,
                                                    callback: function($$v) {
                                                      _vm.onlineoverPrice = $$v
                                                    },
                                                    expression:
                                                      "onlineoverPrice"
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
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _c("center", [
                                      _c("img", {
                                        staticClass: "addOnsImage",
                                        attrs: { src: _vm.imgURL }
                                      }),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass: "fileStyle",
                                        attrs: { type: "file", required: "" },
                                        on: { change: _vm.onImgChange }
                                      }),
                                      _c("br")
                                    ])
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
                                        attrs: {
                                          color: "blue darken-1",
                                          text: ""
                                        },
                                        on: {
                                          click: function($event) {
                                            _vm.dialogForProduct = false
                                          }
                                        }
                                      },
                                      [_vm._v(" Close")]
                                    ),
                                    _vm._v(" "),
                                    _vm.productAdd
                                      ? _c(
                                          "v-btn",
                                          {
                                            staticClass: "btn btn-primary",
                                            attrs: { type: "submit" }
                                          },
                                          [_vm._v("Add Product")]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.productEdit
                                      ? _c(
                                          "v-btn",
                                          {
                                            staticClass: "btn btn-primary",
                                            attrs: { type: "button" },
                                            on: {
                                              click: function($event) {
                                                return _vm.updateProduct($event)
                                              }
                                            }
                                          },
                                          [_vm._v("Edit Product")]
                                        )
                                      : _vm._e()
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
              ],
              1
            )
          ],
          1
        )
      ],
      _vm._v(" "),
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
                  value: _vm.dialogForAddOns,
                  callback: function($$v) {
                    _vm.dialogForAddOns = $$v
                  },
                  expression: "dialogForAddOns"
                }
              },
              [
                _c(
                  "v-card",
                  [
                    _c("div", { staticClass: "modal-header" }, [
                      _c("span", { staticClass: "headline" }, [
                        _vm._v("ADD ADD ONS")
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "close",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              _vm.dialogForAddOns = false
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
                        _c("span", { staticClass: "text-danger text-center" }, [
                          _vm._v("All fields are required")
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-form",
                          [
                            _c("i", [
                              _vm.errorMessage !== null
                                ? _c("span", { staticClass: "errorColor" }, [
                                    _vm._v(_vm._s(_vm.errorMessage))
                                  ])
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-container",
                              [
                                _c(
                                  "v-row",
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        label: "Add Ons Name",
                                        outlined: "",
                                        dense: "",
                                        type: "text",
                                        id: "cupName"
                                      },
                                      model: {
                                        value: _vm.inputAddOns,
                                        callback: function($$v) {
                                          _vm.inputAddOns = $$v
                                        },
                                        expression: "inputAddOns"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("i", [
                                  _vm.errorMessage2 !== null
                                    ? _c(
                                        "span",
                                        { staticClass: "errorColor" },
                                        [_vm._v(_vm._s(_vm.errorMessage2))]
                                      )
                                    : _vm._e()
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-row",
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        label: "Addons Price",
                                        outlined: "",
                                        dense: "",
                                        type: "number"
                                      },
                                      on: {
                                        keyup: function($event) {
                                          return _vm.validate("addOnsPrice")
                                        }
                                      },
                                      model: {
                                        value: _vm.addOnsPrice,
                                        callback: function($$v) {
                                          _vm.addOnsPrice = $$v
                                        },
                                        expression: "addOnsPrice"
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
                                        { staticClass: "errorColor" },
                                        [_vm._v(_vm._s(_vm.errorMessage3))]
                                      )
                                    : _vm._e()
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-row",
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        label: "Online Addons Price",
                                        outlined: "",
                                        dense: "",
                                        type: "number"
                                      },
                                      on: {
                                        keyup: function($event) {
                                          return _vm.validate(
                                            "onlineAddOnsPrice"
                                          )
                                        }
                                      },
                                      model: {
                                        value: _vm.onlineAddOnsPrice,
                                        callback: function($$v) {
                                          _vm.onlineAddOnsPrice = $$v
                                        },
                                        expression: "onlineAddOnsPrice"
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
                                _vm.dialogForAddOns = false
                              }
                            }
                          },
                          [_vm._v(" Close")]
                        ),
                        _vm._v(" "),
                        _vm.addonsShow
                          ? _c(
                              "v-btn",
                              {
                                staticClass: "btn btn-primary",
                                attrs: {
                                  color: "blue darken-1",
                                  text: "",
                                  type: "button"
                                },
                                on: { click: _vm.addAddOns }
                              },
                              [_vm._v("Add Add Ons")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.editAddOnsShow
                          ? _c(
                              "v-btn",
                              {
                                staticClass: "btn btn-primary",
                                attrs: {
                                  color: "blue darken-1",
                                  text: "",
                                  type: "button"
                                },
                                on: { click: _vm.editAddOnsData }
                              },
                              [_vm._v("Save")]
                            )
                          : _vm._e()
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
      _vm._v(" "),
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
                  value: _vm.dialogForCupType,
                  callback: function($$v) {
                    _vm.dialogForCupType = $$v
                  },
                  expression: "dialogForCupType"
                }
              },
              [
                _c(
                  "v-card",
                  [
                    _c("div", { staticClass: "modal-header" }, [
                      _c("span", { staticClass: "headline" }, [
                        _vm._v("ADD CUP TYPE")
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "close",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              _vm.dialogForCupType = false
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
                        _c("span", { staticClass: "text-danger text-center" }, [
                          _vm._v("All fields are required")
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-form",
                          [
                            _c("i", [
                              _vm.errorMessage !== null
                                ? _c("span", { staticClass: "errorColor" }, [
                                    _vm._v(_vm._s(_vm.errorMessage))
                                  ])
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-container",
                              [
                                _c(
                                  "v-row",
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        label: "Cup Type Name",
                                        outlined: "",
                                        dense: "",
                                        type: "text",
                                        id: "cupName"
                                      },
                                      model: {
                                        value: _vm.inputCup,
                                        callback: function($$v) {
                                          _vm.inputCup = $$v
                                        },
                                        expression: "inputCup"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("i", [
                                  _vm.errorMessage4 !== null
                                    ? _c(
                                        "span",
                                        { staticClass: "errorColor" },
                                        [_vm._v(_vm._s(_vm.errorMessage4))]
                                      )
                                    : _vm._e()
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-row",
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        label: "Normal Price",
                                        outlined: "",
                                        dense: "",
                                        type: "number"
                                      },
                                      on: {
                                        keyup: function($event) {
                                          return _vm.validate("cupTypePrice")
                                        }
                                      },
                                      model: {
                                        value: _vm.inputCupPrice,
                                        callback: function($$v) {
                                          _vm.inputCupPrice = $$v
                                        },
                                        expression: "inputCupPrice"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("i", [
                                  _vm.errorMessage5 !== null
                                    ? _c(
                                        "span",
                                        { staticClass: "errorColor" },
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
                                        label: "Online Price",
                                        outlined: "",
                                        dense: "",
                                        type: "number",
                                        id: "price"
                                      },
                                      on: {
                                        keyup: function($event) {
                                          return _vm.validate(
                                            "onlineCupTypePrice"
                                          )
                                        }
                                      },
                                      model: {
                                        value: _vm.inputCupOnlinePrice,
                                        callback: function($$v) {
                                          _vm.inputCupOnlinePrice = $$v
                                        },
                                        expression: "inputCupOnlinePrice"
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
                                _vm.dialogForCupType = false
                              }
                            }
                          },
                          [_vm._v(" Close")]
                        ),
                        _vm._v(" "),
                        _vm.btnCupType
                          ? _c(
                              "v-btn",
                              {
                                staticClass: "btn btn-primary",
                                attrs: {
                                  color: "blue darken-1",
                                  text: "",
                                  type: "button"
                                },
                                on: { click: _vm.addingCupType }
                              },
                              [_vm._v("Add Cup Type")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.btnEditCupType
                          ? _c(
                              "v-btn",
                              {
                                staticClass: "btn btn-primary",
                                attrs: {
                                  color: "blue darken-1",
                                  text: "",
                                  type: "button"
                                },
                                on: { click: _vm.editingCupType }
                              },
                              [_vm._v("Save")]
                            )
                          : _vm._e()
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
      _vm._v(" "),
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
                  value: _vm.dialogForCupSize,
                  callback: function($$v) {
                    _vm.dialogForCupSize = $$v
                  },
                  expression: "dialogForCupSize"
                }
              },
              [
                _c(
                  "v-card",
                  [
                    _c("div", { staticClass: "modal-header" }, [
                      _c("span", { staticClass: "headline" }, [
                        _vm._v("ADD CUP QUANTITY")
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "close",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              _vm.dialogForCupSize = false
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
                        _c("span", { staticClass: "text-danger text-center" }, [
                          _vm._v("All fields are required")
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-form",
                          [
                            _c("i", [
                              _vm.errorMessage !== null
                                ? _c("span", { staticClass: "errorColor" }, [
                                    _vm._v(_vm._s(_vm.errorMessage))
                                  ])
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c("i", [
                              _vm.errorMessage6 !== null
                                ? _c("span", { staticClass: "errorColor" }, [
                                    _vm._v(_vm._s(_vm.errorMessage6))
                                  ])
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-container",
                              [
                                _c(
                                  "v-row",
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        label: "Low Dose Cup",
                                        outlined: "",
                                        dense: "",
                                        type: "number",
                                        id: "lowDoseCup"
                                      },
                                      on: {
                                        keyup: function($event) {
                                          return _vm.validate("cupSize")
                                        }
                                      },
                                      model: {
                                        value: _vm.lowDoseCup,
                                        callback: function($$v) {
                                          _vm.lowDoseCup = $$v
                                        },
                                        expression: "lowDoseCup"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-row",
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        label: "High Dose Cup",
                                        outlined: "",
                                        dense: "",
                                        type: "number",
                                        id: "highDoseCup"
                                      },
                                      on: {
                                        keyup: function($event) {
                                          return _vm.validate("cupSize")
                                        }
                                      },
                                      model: {
                                        value: _vm.highDoseCup,
                                        callback: function($$v) {
                                          _vm.highDoseCup = $$v
                                        },
                                        expression: "highDoseCup"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-row",
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        label: "Over Dose Cup",
                                        outlined: "",
                                        dense: "",
                                        type: "number",
                                        id: "overDoseCup"
                                      },
                                      on: {
                                        keyup: function($event) {
                                          return _vm.validate("cupSize")
                                        }
                                      },
                                      model: {
                                        value: _vm.overDoseCup,
                                        callback: function($$v) {
                                          _vm.overDoseCup = $$v
                                        },
                                        expression: "overDoseCup"
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
                                _vm.dialogForCupSize = false
                              }
                            }
                          },
                          [_vm._v(" Close")]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            staticClass: "btn btn-primary",
                            attrs: {
                              color: "blue darken-1",
                              text: "",
                              type: "button"
                            },
                            on: { click: _vm.addingCupSize }
                          },
                          [_vm._v("Add Cup Size")]
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
      _vm._v(" "),
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
                  value: _vm.dialogConfirmation,
                  callback: function($$v) {
                    _vm.dialogConfirmation = $$v
                  },
                  expression: "dialogConfirmation"
                }
              },
              [
                _c(
                  "v-card",
                  [
                    _c("div", { staticClass: "modal-header" }, [
                      _c("span", { staticClass: "headline" }, [
                        _vm._v("Confirmation")
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "close",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              _vm.dialogConfirmation = false
                            }
                          }
                        },
                        [_vm._v("×")]
                      ),
                      _c("br")
                    ]),
                    _vm._v(" "),
                    _c("v-card-text", [
                      _vm._v(
                        "\n                        Are you sure you want to delete?\n                      "
                      )
                    ]),
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
                                _vm.dialogConfirmation = false
                              }
                            }
                          },
                          [_vm._v("No")]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            staticClass: "btn btn-primary",
                            attrs: {
                              color: "blue darken-1",
                              text: "",
                              type: "button"
                            },
                            on: {
                              click: function($event) {
                                return _vm.deleteNow()
                              }
                            }
                          },
                          [_vm._v("Yes")]
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
      _vm._v(" "),
      _vm.loadingShow ? _c("loading") : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/modules/addingAdmin/add.vue":
/*!**************************************************!*\
  !*** ./resources/js/modules/addingAdmin/add.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_vue_vue_type_template_id_62e92aac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=62e92aac&scoped=true& */ "./resources/js/modules/addingAdmin/add.vue?vue&type=template&id=62e92aac&scoped=true&");
/* harmony import */ var _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js& */ "./resources/js/modules/addingAdmin/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _add_vue_vue_type_style_index_0_id_62e92aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css& */ "./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_62e92aac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_vue_vue_type_template_id_62e92aac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "62e92aac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/addingAdmin/add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/addingAdmin/add.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/modules/addingAdmin/add.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_62e92aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_62e92aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_62e92aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_62e92aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_62e92aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_62e92aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/addingAdmin/add.vue?vue&type=template&id=62e92aac&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/modules/addingAdmin/add.vue?vue&type=template&id=62e92aac&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_62e92aac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=template&id=62e92aac&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/add.vue?vue&type=template&id=62e92aac&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_62e92aac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_62e92aac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);