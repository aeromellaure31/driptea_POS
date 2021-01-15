(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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
/* harmony import */ var _addingQuantityIngredients_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addingQuantityIngredients.vue */ "./resources/js/modules/addingAdmin/addingQuantityIngredients.vue");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ingredients_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ingredients.vue */ "./resources/js/modules/addingAdmin/ingredients.vue");
/* harmony import */ var _calculation_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calculation.vue */ "./resources/js/modules/addingAdmin/calculation.vue");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_noImage_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/noImage.jpg */ "./resources/assets/noImage.jpg");
/* harmony import */ var _assets_noImage_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_noImage_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      noImage: _assets_noImage_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
      toSaveImage: null,
      toSaveImage2: null,
      auth: _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"],
      dialogConfirmation: false,
      dialogQuantityIngredients: false,
      editCat: false,
      tableForCategory: true,
      tableForProduct: false,
      tableForAddOns: false,
      tableForCupType: false,
      tableForCupSize: false,
      tableForIngredients: false,
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
      categoryOld: null,
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
      ingredientsData: [],
      storeIngredients: [],
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
    }, _defineProperty(_ref, "online", false), _defineProperty(_ref, "errorMessage", null), _defineProperty(_ref, "lowDoseCup", null), _defineProperty(_ref, "highDoseCup", null), _defineProperty(_ref, "overDoseCup", null), _defineProperty(_ref, "cupSizeData", []), _defineProperty(_ref, "search", null), _defineProperty(_ref, "title", null), _defineProperty(_ref, "dialogForCupType", false), _defineProperty(_ref, "dialogForProduct", false), _defineProperty(_ref, "dialogForCategory", false), _defineProperty(_ref, "dialogForAddOns", false), _defineProperty(_ref, "dialogForCupSize", false), _defineProperty(_ref, "dialogForIngredients", false), _defineProperty(_ref, "dialogForNewIngredients", false), _defineProperty(_ref, "dialogForCalculation", false), _defineProperty(_ref, "dataHeader", null), _defineProperty(_ref, "catId", null), _defineProperty(_ref, "exampleRules", {
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
    }, {
      text: "ACTION",
      value: "actions",
      sortable: false
    }]), _defineProperty(_ref, "headersForIngredients", [// { text: "", value: "", sortable: false },
    // { text: "", value: "", sortable: false },
    {
      text: "",
      value: "",
      sortable: false
    }, {
      text: "#",
      value: "id"
    }, {
      text: "Ingredients",
      value: "ingredientsName"
    }, {
      text: "Ingredient's Type",
      value: "type"
    }, {
      text: "Action",
      value: "actions",
      sortable: false
    }, {
      text: "",
      value: "",
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
      value: "onlinehighPrice"
    }, {
      text: "Over Dose Online Price",
      value: "onlineoverPrice"
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
    }]), _defineProperty(_ref, "loadingShow", false), _defineProperty(_ref, "errorMessage1", null), _defineProperty(_ref, "errorMessage2", null), _defineProperty(_ref, "errorMessage3", null), _defineProperty(_ref, "errorMessage4", null), _defineProperty(_ref, "errorMessage5", null), _defineProperty(_ref, "errorMessage6", null), _defineProperty(_ref, "errorMessage7", null), _defineProperty(_ref, "errorMessage8", null), _defineProperty(_ref, "errorMessage9", null), _defineProperty(_ref, "deleteID", null), _defineProperty(_ref, "deleteParam", null), _defineProperty(_ref, "quantityRetrieve", []), _defineProperty(_ref, "packOfPearl", ''), _defineProperty(_ref, "canOfFructose", ''), _defineProperty(_ref, "bottleSyrup", ''), _defineProperty(_ref, "packOfTea", ''), _defineProperty(_ref, "canOfWintermelon", ''), _defineProperty(_ref, "bottleCreamMilk", ''), _defineProperty(_ref, "packOfPowder", ''), _defineProperty(_ref, "value", []), _defineProperty(_ref, "options", []), _ref;
  },
  mounted: function mounted() {
    this.retrieveCategories();
    this.retrieveProducts();
    this.retrieveAddOns();
    this.retrieveCupType();
    this.retrieveCupSize();
    this.retrieveIngredients();
    this.retrieveAddedIngredients();
  },
  components: {
    loading: _basic_loading_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    addingIngredients: _addingQuantityIngredients_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    calculation: _calculation_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    newIngredients: _ingredients_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_4___default.a,
    updateIng: updateIng
  },
  methods: {
    showEditIngredients: function showEditIngredients(item) {
      var _this = this;

      setTimeout(function () {
        _this.dialogForNewIngredients = true;

        _this.$nextTick(function () {
          return _this.$refs.show.editIngredient(item);
        });
      }, 1000);
    },
    getData: function getData(param) {
      if (param.type === 'Pack of Pearl') {
        return this.quantityRetrieve[param.id - 1] ? this.quantityRetrieve[param.id - 1] + ' scopes of pearl available' : 'No available scopes of powder';
      } else if (param.type === 'Can of Fructose') {
        return this.quantityRetrieve[param.id - 1] ? this.quantityRetrieve[param.id - 1] + ' ml of fructose available' : 'No available scopes of powder';
      } else if (param.type === 'Bottle of Dough Syrup') {
        return this.quantityRetrieve[param.id - 1] ? this.quantityRetrieve[param.id - 1] + ' ml of cookie dough syrup available' : 'No available scopes of powder';
      } else if (param.type === 'Pack of Tea') {
        return this.quantityRetrieve[param.id - 1] ? this.quantityRetrieve[param.id - 1] + ' ml of tea available' : 'No available scopes of powder';
      } else if (param.type === 'Can of Wintermelon Syrup') {
        return this.quantityRetrieve[param.id - 1] ? this.quantityRetrieve[param.id - 1] + ' ml of wintermelon syrup available' : 'No available scopes of powder';
      } else if (param.type === 'Bottle of Cream Milk') {
        return this.quantityRetrieve[param.id - 1] ? this.quantityRetrieve[param.id - 1] + ' ml of cream milk available' : 'No available scopes of powder';
      } else if (param.type === 'Pack of Powder') {
        return this.quantityRetrieve[param.id - 1] ? this.quantityRetrieve[param.id - 1] + ' scopes of powder available' : 'No available scopes of powder';
      } else {
        return 0;
      }
    },
    retrieveCalculation: function retrieveCalculation() {
      var _this2 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveCalculation", {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        _this2.loadingShow = false;

        if (response.data.status === 'Token is Expired') {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this2.packOfPearl = response.data.calculations[0].packOfPearl;
        _this2.canOfFructose = response.data.calculations[0].canOfFructose;
        _this2.bottleSyrup = response.data.calculations[0].bottleSyrup;
        _this2.packOfTea = response.data.calculations[0].packOfTea;
        _this2.canOfWintermelon = response.data.calculations[0].canOfWintermelon;
        _this2.bottleCreamMilk = response.data.calculations[0].bottleCreamMilk;
        _this2.packOfPowder = response.data.calculations[0].packOfPowder;
      });
    },
    retrieveAddedIngredients: function retrieveAddedIngredients() {
      var _this3 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveRemainingData", {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        _this3.loadingShow = false;

        if (response.data.status === 'Token is Expired') {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this3.quantityRetrieve = JSON.parse(response.data.addIngredient[0].remainingQuantity);
      });
    },
    retrieveIngredients: function retrieveIngredients() {
      var _this4 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveIngredients", {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        _this4.loadingShow = false;

        if (response.data.status === 'Token is Expired') {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this4.options = [];
        _this4.ingredientsData = response.data.ingredients;

        _this4.ingredientsData.forEach(function (el) {
          _this4.options.push({
            ingredientsName: el.ingredientsName
          });
        });

        console.log(_this4.options);
      });
    },
    closeModal: function closeModal() {
      this.dialogForCalculation = false;
      this.dialogForIngredients = false;
      this.dialogForNewIngredients = false; // this.ingredientsToAdd = false
    },
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
      } else if (param === 'multiSelect') {
        if (this.storeIngredients === [] && this.storeIngredients.length <= 0) {
          this.errorMessage9 = 'Ingredients is required';
        } else {
          this.errorMessage9 = null;
        }
      }
    },
    getNumberDate: function getNumberDate(date, id) {
      return moment__WEBPACK_IMPORTED_MODULE_9___default()(date).format('MMDDYY') + id;
    },
    getDate: function getDate(date) {
      return moment__WEBPACK_IMPORTED_MODULE_9___default()(date).format('MM/DD/YYYY');
    },
    deleteCupType: function deleteCupType(id) {
      var _this5 = this;

      this.loadingShow = true;
      var param = {
        id: id
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "deleteCupType", param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status === 'Token is Expired') {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this5.deleteID = null;
        _this5.deleteParam = null;
        _this5.dialogConfirmation = false;
        _this5.loadingShow = false;
        sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
          title: "You successfully deleted the cup type",
          icon: "success"
        });

        _this5.retrieveCupType();
      });
    },
    deleteAddOns: function deleteAddOns(id) {
      var _this6 = this;

      this.loadingShow = true;
      var param = {
        id: id
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "deleteAddOns", param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status === 'Token is Expired') {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this6.deleteID = null;
        _this6.deleteParam = null;
        _this6.dialogConfirmation = false;
        _this6.loadingShow = false;
        sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
          title: "You successfully deleted the add-ons",
          icon: "success"
        });

        _this6.retrieveAddOns();
      });
    },
    deleteProduct: function deleteProduct(id) {
      var _this7 = this;

      this.loadingShow = true;
      var param = {
        id: id
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "deleteProduct", param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status === 'Token is Expired') {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this7.deleteID = null;
        _this7.deleteParam = null;
        _this7.dialogConfirmation = false;
        _this7.loadingShow = false;
        sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
          title: "You successfully deleted the product",
          icon: "success"
        });

        _this7.retrieveProducts();
      });
    },
    deleteCategory: function deleteCategory(id) {
      var _this8 = this;

      this.loadingShow = true;
      var param = {
        id: id
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "deleteCategory", param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status === 'Token is Expired') {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this8.deleteID = null;
        _this8.deleteParam = null;
        _this8.dialogConfirmation = false;
        _this8.loadingShow = false;
        sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
          title: "You successfully deleted the category",
          icon: "success"
        });

        _this8.retrieveCategories();
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
      var _this9 = this;

      this.loadingShow = true;
      var param = {
        id: id,
        status: "Not Available"
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateAvailableCupType", param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        _this9.retrieveCupType();

        _this9.loadingShow = false;

        if (response.data.status === 'Token is Expired') {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }
      });
    },
    availableCupUpdate: function availableCupUpdate(id) {
      var _this10 = this;

      this.loadingShow = true;
      var param = {
        id: id,
        status: "Available"
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateAvailableCupType", param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this10.retrieveCupType();

        _this10.loadingShow = false;
      });
    },
    retrieveCupType: function retrieveCupType() {
      var _this11 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveAllCupType", {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this11.cupData = response.data.cupType;
        _this11.loadingShow = false;
      });
    },
    retrieveCupSize: function retrieveCupSize() {
      var _this12 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveCupSize", {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this12.loadingShow = false;
        _this12.cupSizeData = response.data.quantityCupsInDB.reverse();
        response.data.quantityCupsInDB.forEach(function (element) {});
        var totalCup = response.data.quantityCupsInDB.incomingOverDose;
      });
    },
    addingCupType: function addingCupType() {
      var _this13 = this;

      this.loadingShow = true;

      if (this.inputCupPrice !== null && this.inputCup !== null && this.inputCupOnlinePrice !== null && this.inputCupPrice !== '' && this.inputCup !== '' && this.inputCupOnlinePrice !== '' && this.errorMessage4 === null && this.errorMessage5 === null) {
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

          _this13.loadingShow = false;
          sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
            title: "You have successfully added a cup type",
            icon: "success"
          });

          _this13.retrieveCupType();

          _this13.dialogForCupType = false;
        });
      } else {
        this.errorMessage = "Please fill up all fields";
        this.loadingShow = false;
      }
    },
    addingCupSize: function addingCupSize() {
      var _this14 = this;

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

          _this14.loadingShow = false;
          sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
            title: "You have successfully added cups",
            icon: "success"
          });

          _this14.retrieveCupSize();

          _this14.hide();
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
      var _this15 = this;

      this.loadingShow = true;

      if (this.inputCupPrice !== null && this.inputCup !== null && this.inputCupOnlinePrice !== null && this.inputCupPrice !== '' && this.inputCup !== '' && this.inputCupOnlinePrice !== '' && this.errorMessage4 === null && this.errorMessage5 === null) {
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

          _this15.loadingShow = false;
          sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
            title: "You have successfully updated the cup type",
            icon: "success"
          });

          _this15.retrieveCupType();

          _this15.hide();
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
      var _this16 = this;

      this.img = e.target.files[0];

      if (this.img.size > 1024 * 1024) {
        this.img = null;
        this.imgURL = this.noImage;
        this.errorMessage7 = 'Size too large. It must not exceed 1MB';
      } else {
        this.errorMessage7 = null;
        this.imgURL = URL.createObjectURL(e.target.files[0]);
        this.loadingShow = true;
        var data = new FormData();
        data.append('file', this.img);
        this.$axios.post('http://ec2-34-205-139-231.compute-1.amazonaws.com:3232/api/file/upload', data).then(function (res) {
          _this16.toSaveImage = res.data.result.body.file_url;
          _this16.loadingShow = false;
        });
      }
    },
    formSubmitProduct: function formSubmitProduct(e) {
      e.preventDefault();
      this.loadingShow = true;
      this.validate('multiSelect');

      if (this.storeIngredients.length < 1) {
        this.errorMessage9 = 'Ingredients is required';
      } else {
        this.errorMessage9 = null;
      }

      if (this.toSaveImage !== '' && this.prodType !== '' && this.productName !== '' && this.lowPrice !== '' && this.highPrice !== '' && this.overPrice !== '' && this.onlinelowPrice !== '' && this.onlinehighPrice !== '' & this.onlineoverPrice !== '' && this.lowPrice !== '' && this.highPrice !== '' && this.overPrice !== '' && this.onlinelowPrice !== '' && this.onlinehighPrice !== '' && this.onlineoverPrice !== '' && this.toSaveImage !== null && this.prodType !== null && this.productName !== null && this.lowPrice !== null && this.highPrice !== null && this.overPrice !== null && this.onlinelowPrice !== null && this.onlinehighPrice !== null && this.onlineoverPrice !== null && parseInt(this.lowPrice) > 0 && parseInt(this.highPrice) > 0 && parseInt(this.overPrice) > 0 && parseInt(this.onlinelowPrice) > 0 && parseInt(this.onlinehighPrice) > 0 && parseInt(this.onlineoverPrice) > 0 && this.errorMessage1 === null && this.errorMessage7 === null && this.errorMessage8 === null && this.errorMessage9 === null) {
        var value = [];
        this.value.forEach(function (el) {
          value.push(el.ingredientsName);
        });
        var currentObj = this;
        var config = {
          headers: {
            'content-type': 'multipart/form-data',
            Authorization: 'Bearer ' + localStorage.getItem('userToken')
          }
        };
        var formData = new FormData();
        formData.append('image', this.toSaveImage);
        formData.append('productCategory', this.prodType);
        formData.append('productName', this.productName);
        formData.append('ingredients', value);
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
          sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
            title: "You have successfully added a product",
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
      var _this17 = this;

      this.value = [];
      var selected = JSON.parse(item.ingredients).split(',');
      selected.forEach(function (el) {
        _this17.value.push({
          ingredientsName: el
        });
      });
      this.errorMessage = null;
      this.dialogForProduct = true;
      this.productName = item.productName;
      this.description = item.description;
      this.prodType = item.productCategory;
      this.toSaveImage = item.image;
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

      if (this.toSaveImage !== '' && this.prodType !== '' && this.productName !== '' && this.lowPrice !== '' && this.highPrice !== '' && this.overPrice !== '' && this.onlinelowPrice !== '' && this.onlinehighPrice !== '' & this.onlineoverPrice !== '' && this.lowPrice !== '' && this.highPrice !== '' && this.overPrice !== '' && this.onlinelowPrice !== '' && this.onlinehighPrice !== '' && this.onlineoverPrice !== '' && this.toSaveImage !== null && this.prodType !== null && this.productName !== null && this.lowPrice !== null && this.highPrice !== null && this.overPrice !== null && this.onlinelowPrice !== null && this.onlinehighPrice !== null & this.onlineoverPrice !== null && this.lowPrice > 0 && this.highPrice > 0 && this.overPrice > 0 && this.onlinelowPrice > 0 && this.onlinehighPrice > 0 && this.onlineoverPrice > 0 && this.errorMessage1 === null && this.errorMessage7 === null && this.errorMessage8 === null) {
        e.preventDefault();
        var value = [];
        this.value.forEach(function (el) {
          value.push(el.ingredientsName);
        });
        var currentObj = this;
        var config = {
          headers: {
            'content-type': 'multipart/form-data',
            Authorization: 'Bearer ' + localStorage.getItem('userToken')
          }
        };
        var formData = new FormData();
        formData.append('id', this.prodId);
        formData.append('image', this.toSaveImage);
        formData.append('ingredients', value);
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
          sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
            title: "You have successfully updated the product",
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
      var _this18 = this;

      this.loadingShow = true;
      var param = {
        id: id,
        status: "Not Available"
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateStatusProduct", param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this18.retrieveProducts();

        _this18.loadingShow = false;
      });
    },
    productStatusAvailable: function productStatusAvailable(id) {
      var _this19 = this;

      this.loadingShow = true;
      var param = {
        id: id,
        status: "Available"
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateStatusProduct", param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this19.retrieveProducts();

        _this19.loadingShow = false;
      });
    },
    onImageChange: function onImageChange(e) {
      var _this20 = this;

      this.image = e.target.files[0];

      if (this.image.size > 1024 * 1024) {
        this.image.name = '';
        this.imageURL = this.noImage;
        this.errorMessage8 = 'Size too large. It must not exceed 1MB';
      } else {
        this.errorMessage8 = null;
        this.imageURL = URL.createObjectURL(e.target.files[0]);
        this.loadingShow = true;
        var data = new FormData();
        data.append('file', this.image);
        this.$axios.post('http://ec2-34-205-139-231.compute-1.amazonaws.com:3232/api/file/upload', data).then(function (res) {
          _this20.toSaveImage2 = res.data.result.body.file_url;
          _this20.loadingShow = false;
        });
      }
    },
    editCategories: function editCategories(item) {
      this.errorMessage = null;
      this.dialogForCategory = true;
      this.editCat = true; // this.image = item.image

      this.toSaveImage2 = item.image;
      this.imageURL = item.image;
      this.productType = item.productCategory;
      this.categoryOld = item.productCategory;
      this.catId = item.id;
    },
    updateCategory: function updateCategory(e) {
      this.loadingShow = true;

      if (this.toSaveImage2 !== '' && this.productType !== '' && this.toSaveImage2 !== null && this.productType !== null && this.errorMessage7 === null && this.errorMessage8 === null) {
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
          sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
            title: "You have successfully updated the category",
            icon: "success"
          }).then(function (el) {
            var param = {
              oldType: currentObj.categoryOld,
              productCategory: currentObj.productType
            };
            axios.post('/updateProductCategory', param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
              if (response.data.status) {
                _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
              }
            });
            currentObj.success = response.data.success;
            currentObj.retrieveCategories();
            currentObj.retrieveProducts();
            currentObj.hide();
          });
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
      if (this.toSaveImage2 !== '' && this.productType !== '' && this.toSaveImage2 !== null && this.productType !== null && this.image !== null && this.productType !== null && this.errorMessage7 === null && this.errorMessage8 === null) {
        this.loadingShow = true;
        e.preventDefault();
        var currentObj = this;
        var config = {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: 'Bearer ' + localStorage.getItem('userToken')
          }
        };
        var formData = new FormData();
        formData.append("image", this.toSaveImage2);
        formData.append("productCategory", this.productType);
        axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "addCategory", formData, config).then(function (response) {
          if (response.data.status) {
            _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
          }

          currentObj.loadingShow = false;
          sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
            title: "You have successfully added a category",
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
      this.imgURL = this.noImage;
      this.img = null;
      this.storeIngredients = [];
    },
    showIngredients: function showIngredients() {
      this.dialogForIngredients = true;
    },
    showNewIngredients: function showNewIngredients() {
      this.dialogForNewIngredients = true;
    },
    showCalculation: function showCalculation() {
      this.dialogForCalculation = true;
    },
    showCategory: function showCategory() {
      this.editCat = false;
      this.image = null;
      this.productType = null;
      this.dialogForCategory = true;
      this.imageURL = this.noImage;
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
      this.showIngredientsModal = false;
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
      var _this21 = this;

      this.loadingShow = true;

      if (this.addOnsPrice !== null && this.inputAddOns !== null && this.onlineAddOnsPrice !== null && this.errorMessage2 === null && this.errorMessage3 === null && this.addOnsPrice !== '' && this.inputAddOns !== '' && this.onlineAddOnsPrice !== '') {
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

          _this21.loadingShow = false;
          sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
            title: "You have successfully added an add-ons",
            icon: "success"
          });

          _this21.retrieveAddOns();

          _this21.dialogForAddOns = false;
        });
      } else {
        this.errorMessage = "Please fill up all fields";
        this.loadingShow = false;
      }
    },
    retrieveAddOns: function retrieveAddOns() {
      var _this22 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveAllAddOns", {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this22.datas = response.data.addons;
        _this22.loadingShow = false;
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
      var _this23 = this;

      this.loadingShow = true;

      if (this.addOnsPrice !== null && this.inputAddOns !== null && this.onlineAddOnsPrice !== null && this.addOnsPrice !== '' && this.inputAddOns !== '' && this.onlineAddOnsPrice !== '' && this.errorMessage2 === null && this.errorMessage3 === null) {
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

          _this23.loadingShow = false;
          sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
            title: "You have successfully updated the add-ons",
            icon: "success"
          });

          _this23.retrieveAddOns();

          _this23.hide();
        });
      } else {
        this.errorMessage = "Please fill up all fields";
        this.loadingShow = false;
      }
    },
    NAStatusUpdate: function NAStatusUpdate(id) {
      var _this24 = this;

      this.loadingShow = true;
      var param = {
        id: id,
        status: "Not Available"
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateStatusAddOns", param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this24.loadingShow = false;

        _this24.retrieveAddOns();
      });
    },
    availableStatusUpdate: function availableStatusUpdate(id) {
      var _this25 = this;

      this.loadingShow = true;
      var param = {
        id: id,
        status: "Available"
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateStatusAddOns", param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this25.loadingShow = false;

        _this25.retrieveAddOns();
      });
    },
    retrieveProducts: function retrieveProducts() {
      var _this26 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveAllProduct", {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this26.loadingShow = false;
        _this26.productData = response.data.product;
      });
    },
    retrieveCategories: function retrieveCategories() {
      var _this27 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveCategory", {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this27.loadingShow = false;
        _this27.categoryData = response.data.addCategory;
        _this27.categoryName = [];
        response.data.addCategory.forEach(function (element) {
          _this27.categoryName.push(element.productCategory);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addingQuantityIngredients.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/addingQuantityIngredients.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth */ "./resources/js/services/auth/index.js");
/* harmony import */ var _basic_loading_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../basic/loading.vue */ "./resources/js/basic/loading.vue");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return {
      dialogForCupSize: false,
      errorMessage1: null,
      packPearl: '',
      packTea: '',
      canMilktea: '',
      wintermelonSyrup: '',
      doughSyrup: '',
      creamMilk: '',
      okinawa: '',
      hokkaido: '',
      thai: '',
      matcha: '',
      ingredientsData: []
    };
  },
  mounted: function mounted() {
    this.errorMessage1 = null;
    this.packPearl = '';
    this.packTea = '';
    this.canMilktea = '';
    this.wintermelonSyrup = '';
    this.doughSyrup = '';
    this.creamMilk = '';
    this.loadingShow = true;
    this.retrieve();
  },
  methods: {
    retrieveCalculation: function retrieveCalculation() {
      var _this = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveCalculation", {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        _this.loadingShow = false;

        if (response.data.status === 'Token is Expired') {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this.ingredientsData.forEach(function (el) {
          if (el.type === 'Pack of Pearl') {
            el.convertionQuantity = el.onRockQuantity * response.data.calculations[0].packOfPearl;
          } else if (el.type === 'Can of Fructose') {
            el.convertionQuantity = el.onRockQuantity * response.data.calculations[0].canOfFructose;
          } else if (el.type === 'Bottle of Dough Syrup') {
            el.convertionQuantity = el.onRockQuantity * response.data.calculations[0].bottleSyrup;
          } else if (el.type === 'Pack of Tea') {
            el.convertionQuantity = el.onRockQuantity * response.data.calculations[0].packOfTea;
          } else if (el.type === 'Can of Wintermelon Syrup') {
            el.convertionQuantity = el.onRockQuantity * response.data.calculations[0].canOfWintermelon;
          } else if (el.type === 'Bottle of Cream Milk') {
            el.convertionQuantity = el.onRockQuantity * response.data.calculations[0].bottleCreamMilk;
          } else if (el.type === 'Pack of Powder') {
            el.convertionQuantity = el.onRockQuantity * response.data.calculations[0].packOfPowder;
          }
        });

        _this.addQuantity();
      });
    },
    addQuantity: function addQuantity() {
      var _this2 = this;

      var ing = [];
      var quant = [];
      this.ingredientsData.forEach(function (el) {
        ing.push(el.ingredientsName);
        quant.push(el.convertionQuantity);

        if (el.onRockQuantity <= 0 || el.onRockQuantity === null) {
          _this2.errorMessage1 = 'Invalid Inputs';
        }
      });

      if (this.errorMessage1 === null) {
        this.loadingShow = true;
        var params = {
          ingredients: ing,
          quantity: quant
        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "addIngredientQuantity", params, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
          _this2.loadingShow = false;

          if (response.data.status === 'Token is Expired') {
            _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
          }

          _this2.$parent.retrieveCalculation();

          _this2.$parent.retrieveIngredients();

          _this2.closeModal();

          sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
            title: "You successfully added quantity of ingredients",
            icon: "success"
          });
        });
      }
    },
    retrieve: function retrieve() {
      var _this3 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveIngredients", {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        _this3.loadingShow = false;

        if (response.data.status === 'Token is Expired') {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this3.dialogForCupSize = true, _this3.ingredientsData = response.data.ingredients;
      });
    },
    closeModal: function closeModal() {
      this.$parent.closeModal();
    },
    validate: function validate(param) {
      if (param <= 0) {
        this.errorMessage1 = 'Invalid input';
      } else {
        this.errorMessage1 = null;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/calculation.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/calculation.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth */ "./resources/js/services/auth/index.js");
/* harmony import */ var _basic_loading_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../basic/loading.vue */ "./resources/js/basic/loading.vue");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return {
      dialogForCupSize: true,
      errorMessage1: null,
      errorMessage2: null,
      errorMessage3: null,
      errorMessage4: null,
      errorMessage5: null,
      errorMessage6: null,
      errorMessage7: null,
      packPearl: '',
      packTea: '',
      canFructose: '',
      wintermelonSyrup: '',
      doughSyrup: '',
      creamMilk: '',
      powder: '',
      loadingShow: false
    };
  },
  mounted: function mounted() {
    this.errorMessage1 = null;
    this.errorMessage2 = null;
    this.errorMessage3 = null;
    this.errorMessage4 = null;
    this.errorMessage5 = null;
    this.errorMessage6 = null;
    this.errorMessage7 = null;
    this.retrieve();
  },
  components: {
    loading: _basic_loading_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    retrieve: function retrieve() {
      var _this = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveCalculation", {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        _this.loadingShow = false;

        if (response.data.status === 'Token is Expired') {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        response.data.calculations[0] ? _this.packPearl = response.data.calculations[0].packOfPearl : _this.packPearl = '';
        response.data.calculations[0] ? _this.packTea = response.data.calculations[0].packOfTea : _this.packTea = '';
        response.data.calculations[0] ? _this.canFructose = response.data.calculations[0].canOfFructose : _this.canFructose = '';
        response.data.calculations[0] ? _this.wintermelonSyrup = response.data.calculations[0].canOfWintermelon : _this.wintermelonSyrup = '';
        response.data.calculations[0] ? _this.doughSyrup = response.data.calculations[0].bottleSyrup : _this.doughSyrup = '';
        response.data.calculations[0] ? _this.creamMilk = response.data.calculations[0].bottleCreamMilk : _this.creamMilk = '';
        response.data.calculations[0] ? _this.powder = response.data.calculations[0].packOfPowder : _this.powder = '';
      });
    },
    updateCalculation: function updateCalculation() {
      var _this2 = this;

      this.validate('pearl');
      this.validate('packTea');
      this.validate('canFructose');
      this.validate('wintermelonSyrup');
      this.validate('doughSyrup');
      this.validate('creamMilk');
      this.validate('powder');

      if (this.errorMessage1 === null && this.errorMessage2 === null && this.errorMessage3 === null && this.errorMessage4 === null && this.errorMessage5 === null && this.errorMessage6 === null && this.errorMessage7 === null) {
        this.loadingShow = true;
        var param = {
          id: localStorage.getItem('adminId'),
          packOfPearl: this.packPearl,
          canOfFructose: this.canFructose,
          bottleSyrup: this.doughSyrup,
          packOfTea: this.packTea,
          canOfWintermelon: this.wintermelonSyrup,
          bottleCreamMilk: this.creamMilk,
          packOfPowder: this.powder
        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateCalculation", param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
          _this2.loadingShow = false;

          if (response.data.status === 'Token is Expired') {
            _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
          }

          _this2.closeModal();

          sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
            title: "You successfully updated the calculations",
            icon: "success"
          });
        });
      }
    },
    closeModal: function closeModal() {
      this.$parent.closeModal();
    },
    validate: function validate(param) {
      if (param === 'pearl') {
        if (this.packPearl === '') {
          this.errorMessage1 = 'Pack of Pearl is required';
        } else if (this.packPearl < 1) {
          this.errorMessage1 = 'Pack of Pearl must be grater than 1';
        } else {
          this.errorMessage1 = null;
        }
      } else if (param === 'packTea') {
        if (this.packTea === '') {
          this.errorMessage2 = 'Pack of Tea is required';
        } else if (this.packTea < 1) {
          this.errorMessage2 = 'Pack of Tea must be grater than 1';
        } else {
          this.errorMessage2 = null;
        }
      } else if (param === 'canFructose') {
        if (this.canFructose === '') {
          this.errorMessage3 = 'Can of Milktea is required';
        } else if (this.canFructose < 1) {
          this.errorMessage3 = 'Can of Milktea must be grater than 1';
        } else {
          this.errorMessage3 = null;
        }
      } else if (param === 'wintermelonSyrup') {
        if (this.wintermelonSyrup === '') {
          this.errorMessage4 = 'Can of Wintermelon Syrup is required';
        } else if (this.wintermelonSyrup < 1) {
          this.errorMessage4 = 'Can of Wintermelon must be grater than 1';
        } else {
          this.errorMessage4 = null;
        }
      } else if (param === 'doughSyrup') {
        if (this.doughSyrup === '') {
          this.errorMessage5 = 'Bottle of Cookie Dough Syrup is required';
        } else if (this.doughSyrup < 1) {
          this.errorMessage5 = 'Bottle of Cookie Dough Syrup must be grater than 1';
        } else {
          this.errorMessage5 = null;
        }
      } else if (param === 'creamMilk') {
        if (this.creamMilk === '') {
          this.errorMessage6 = 'Bottle of Cream Milk is required';
        } else if (this.creamMilk < 1) {
          this.errorMessage6 = 'Bottle of Cream Milk must be grater than 1';
        } else {
          this.errorMessage6 = null;
        }
      } else if (param === 'powder') {
        if (this.powder === '') {
          this.errorMessage7 = 'Pack of Powder Milk is required';
        } else if (this.powder < 1) {
          this.errorMessage7 = 'Pack of Powder must be grater than 1';
        } else {
          this.errorMessage7 = null;
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/ingredients.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/ingredients.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth */ "./resources/js/services/auth/index.js");
/* harmony import */ var _basic_loading_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../basic/loading.vue */ "./resources/js/basic/loading.vue");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return {
      dialogForCupSize: true,
      errorMessage1: null,
      errorMessage2: null,
      errorMessage3: null,
      errorMessage4: null,
      errorMessage5: null,
      loadingShow: false,
      addShow: true,
      ingredientsName: '',
      ingredientsType: '',
      // lowdose: '',
      // highdose: '',
      // overdose: '',
      search: '',
      headersForIngredients: [{
        text: "Ingredient's Name",
        value: "ingredientsName"
      }, {
        text: "Ingredient's Type",
        value: "type"
      }, // { text: "Lowdose Quantity", value: "lowdoseQuantity" },
      // { text: "Highdose Quantity", value: "highdoseQuantity" },
      // { text: "Overdose Quantity", value: "overdoseQuantity" },
      {
        text: "ACTION",
        value: "actions",
        sortable: false
      }],
      ingredientsData: [],
      typeIngredients: ['Pack of Pearl', 'Can of Fructose', 'Bottle of Dough Syrup', 'Pack of Tea', 'Can of Wintermelon Syrup', 'Bottle of Cream Milk', 'Pack of Powder']
    };
  },
  mounted: function mounted() {
    this.clear();
    this.retrieve();
  },
  components: {
    loading: _basic_loading_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    cancelUpdate: function cancelUpdate() {
      this.clear();
      this.addShow = true;
    },
    clear: function clear() {
      this.errorMessage1 = null;
      this.errorMessage2 = null;
      this.errorMessage3 = null;
      this.errorMessage4 = null;
      this.errorMessage5 = null;
      this.ingredientsName = '';
      this.ingredientsType = ''; // this.lowdose = ''
      // this.highdose = ''
      // this.overdose = ''
    },
    retrieve: function retrieve() {
      var _this = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveIngredients", {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        _this.loadingShow = false;

        if (response.data.status === 'Token is Expired') {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this.ingredientsData = response.data.ingredients;
      });
    },
    editIngredient: function editIngredient(item) {
      this.addShow = false;
      this.ingredientsName = item.ingredientsName;
      this.ingredientsType = item.type; // this.lowdose = item.lowdoseQuantity
      // this.highdose = item.highdoseQuantity
      // this.overdose = item.overdoseQuantity
    },
    updateIngredient: function updateIngredient() {
      var _this2 = this;

      this.validate('ingredientsName');
      this.validate('ingredientsType'); // this.validate('lowdose')
      // this.validate('highdose')
      // this.validate('overdose')

      if (this.errorMessage1 === null && this.errorMessage2 === null && this.errorMessage3 === null && this.errorMessage4 === null && this.errorMessage5 === null) {
        this.loadingShow = true;
        var param = {
          id: localStorage.getItem('adminId'),
          ingredientsName: this.ingredientsName,
          type: this.ingredientsType // lowdoseQuantity: this.lowdose,
          // highdoseQuantity: this.highdose,
          // overdoseQuantity: this.overdose,

        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateIngredients", param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
          _this2.loadingShow = false;

          if (response.data.status === 'Token is Expired') {
            _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
          }

          _this2.addShow = true;

          _this2.clear();

          _this2.retrieve();

          _this2.$parent.retrieveIngredients();

          sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
            title: "You successfully updated the ingredient",
            icon: "success"
          });
        });
      }
    },
    addIngredient: function addIngredient() {
      var _this3 = this;

      this.validate('ingredientsName');
      this.validate('ingredientsType'); // this.validate('lowdose')
      // this.validate('highdose')
      // this.validate('overdose')

      if (this.errorMessage1 === null && this.errorMessage2 === null && this.errorMessage3 === null && this.errorMessage4 === null && this.errorMessage5 === null) {
        this.loadingShow = true;
        var param = {
          id: localStorage.getItem('adminId'),
          ingredientsName: this.ingredientsName,
          type: this.ingredientsType // lowdoseQuantity: this.lowdose,
          // highdoseQuantity: this.highdose,
          // overdoseQuantity: this.overdose,

        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "addIngredients", param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
          _this3.loadingShow = false;

          if (response.data.status === 'Token is Expired') {
            _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
          }

          _this3.clear();

          _this3.retrieve();

          _this3.$parent.retrieveIngredients();

          sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
            title: "You successfully added an ingredient",
            icon: "success"
          });
        });
      }
    },
    closeModal: function closeModal() {
      this.$parent.closeModal();
    },
    validate: function validate(param) {
      if (param === 'ingredientsName') {
        if (this.ingredientsName === '') {
          this.errorMessage1 = 'Ingredients Name is required';
        } else {
          this.errorMessage1 = null;
        } // }else if(param === 'lowdose'){
        //     if(this.lowdose ===  ''){
        //         this.errorMessage2 = 'Lowdose Quantity is required'
        //     }else if(this.lowdose < 1){
        //         this.errorMessage2 = 'Lowdose Quantity must be grater than 1'
        //     }else{
        //         this.errorMessage2 = null
        //     }
        // }else if(param === 'highdose'){
        //     if(this.highdose ===  ''){
        //         this.errorMessage3 = 'Highdose Quantity is required'
        //     }else if(this.highdose < 1){
        //         this.errorMessage3 = 'Highdose Quantity must be grater than 1'
        //     }else{
        //         this.errorMessage3 = null
        //     }
        // }else if(param === 'overdose'){
        //     if(this.overdose ===  ''){
        //         this.errorMessage4 = 'Overdose Quantity is required'
        //     }else if(this.overdose < 1){
        //         this.errorMessage4 = 'Overdose Quantity must be grater than 1'
        //     }else{
        //         this.errorMessage4 = null
        //     }

      } else if (param === 'ingredientsType') {
        if (this.ingredientsType === '') {
          this.errorMessage5 = 'ingredients Type is required';
        } else {
          this.errorMessage5 = null;
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=1&id=62e92aac&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=1&id=62e92aac&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.multiSelectDesign[data-v-62e92aac] .multiselect__tags{\r\n  border: 1px solid #9e9e9e !important;\n}\n.ingredientSpan[data-v-62e92aac]{\r\n  font-style: italic;\r\n  color: blue;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  padding: 5%;\n}\n.v-input__slot[data-v-62e92aac] {\r\n  margin-bottom: -35px;\n}\n.errorColor[data-v-62e92aac] {\r\n  color: red;\n}\n[data-v-62e92aac]::-webkit-scrollbar {\r\n  width: 2px;\n}\n.my-custom-scrollbar[data-v-62e92aac][data-v-62e92aac] {\r\n  position: relative;\r\n  height: 500px;\r\n  width: 100%;\r\n  overflow: auto;\n}\n.fileStyle[data-v-62e92aac] {\r\n  font-size: 17px !important;\r\n  width: 97px;\r\n  margin-top: 3%;\r\n  margin-bottom: 3%;\n}\n.addOnsImage[data-v-62e92aac] {\r\n  width: 250px !important;\r\n  height: 250px !important;\r\n  margin-top: 2% !important;\n}\n.navButton[data-v-62e92aac] {\r\n  float: left;\r\n  width: 200px;\n}\n.borderStyle1[data-v-62e92aac] {\r\n  border-left: 1px solid #d8dce3;\r\n  border-top: 1px solid #d8dce3;\r\n  border-right: 1px solid #d8dce3;\n}\n.btnBorderStyle[data-v-62e92aac] {\r\n  margin-top: -0.7%;\r\n  border-bottom: 1px solid #d8dce3;\n}\n.borderStyle[data-v-62e92aac] {\r\n  border-left: 3px solid grey;\r\n  border-top: 3px solid grey;\r\n  border-right: 3px solid grey;\n}\n.btnBorderStyle1[data-v-62e92aac] {\r\n  border-bottom: 3px solid grey;\n}\n.table tr[data-v-62e92aac] {\r\n  text-align: center;\n}\nimg[data-v-62e92aac] {\r\n  height: 50px;\r\n  width: 100px;\n}\nhr[data-v-62e92aac] {\r\n  border: 1px solid gray;\n}\nh1[data-v-62e92aac]{\r\n  text-align: center;\r\n  margin-top: 3%;\n}\nth[data-v-62e92aac] {\r\n  text-align: center;\r\n  font-size: 30px;\n}\nlabel[data-v-62e92aac] {\r\n  font-size: 20px !important;\n}\n.blurred-background[data-v-62e92aac] {\r\n  position: fixed;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  text-align: center;\r\n  background: rgb(54, 54, 54, 0.7);\n}\n.table[data-v-62e92aac] {\r\n  width: 90%;\r\n  margin-top: 60px;\n}\n.searchInput[data-v-62e92aac] {\r\n  width: 50%;\n}\n#alert-box[data-v-62e92aac] {\r\n  width: 400px;\r\n  background: white;\r\n  display: inline-block;\r\n  margin-top: 180px;\r\n  font-weight: lighter;\r\n  border-radius: 3px;\r\n  font-size: 30px;\r\n  padding: 20px;\r\n  transition: 0.2s;\r\n  text-align: left;\r\n  box-shadow: 5px 5px gray;\n}\n.alert-box2[data-v-62e92aac] {\r\n  width: 550px;\r\n  background: white;\r\n  display: inline-block;\r\n  margin-top: 150px;\r\n  font-weight: lighter;\r\n  border-radius: 3px;\r\n  font-size: 30px;\r\n  padding: 20px;\r\n  transition: 0.2s;\r\n  text-align: left;\r\n  box-shadow: 5px 5px gray;\n}\n#alert-box3[data-v-62e92aac] {\r\n  width: 550px;\r\n  background: white;\r\n  display: inline-block;\r\n  margin-top: 50px;\r\n  font-weight: lighter;\r\n  border-radius: 3px;\r\n  font-size: 20px;\r\n  padding: 20px;\r\n  transition: 0.2s;\r\n  text-align: left;\r\n  box-shadow: 5px 5px gray;\n}\n.productTable[data-v-62e92aac] {\r\n  width: 100%;\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\n}\n.categoryTable[data-v-62e92aac] {\r\n  width: 70%;\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\n}\n.addOnsTable[data-v-62e92aac] {\r\n  width: 50%;\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\n}\n.cupTable[data-v-62e92aac] {\r\n  width: 60%;\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\n}\n.my-custom-scrollbar[data-v-62e92aac] {\r\n  position: relative;\r\n  height: 500px;\r\n  width: 70%;\r\n  overflow: auto;\n}\n.table-wrapper-scroll-y[data-v-62e92aac] {\r\n  display: contents;\n}\n.div[data-v-62e92aac] {\r\n  /* border-style: solid; */\r\n  margin-top: 3%;\r\n  margin-bottom: 5%;\n}\n.btnModal[data-v-62e92aac] {\r\n  float: right;\r\n  margin-right: 1%;\n}\n#buttonAdd[data-v-62e92aac] {\r\n  float: right;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addingQuantityIngredients.vue?vue&type=style&index=0&id=5dae969f&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/addingQuantityIngredients.vue?vue&type=style&index=0&id=5dae969f&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.errorColor[data-v-5dae969f] {\r\n  color: red;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/calculation.vue?vue&type=style&index=0&id=0469fbd2&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/calculation.vue?vue&type=style&index=0&id=0469fbd2&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.errorColor[data-v-0469fbd2] {\r\n  color: red;\n}\n.spanDesign[data-v-0469fbd2]{\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    margin-top: 5px;\n}\n.rowDesign[data-v-0469fbd2]{\r\n    margin-bottom: -5%\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/ingredients.vue?vue&type=style&index=0&id=0f54414b&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/ingredients.vue?vue&type=style&index=0&id=0f54414b&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.errorColor[data-v-0f54414b] {\r\n  color: red;\n}\n.spanDesign[data-v-0f54414b]{\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    margin-top: 5px;\n}\n.rowDesign[data-v-0f54414b]{\r\n    margin-bottom: -5%\n}\n.addStyle[data-v-0f54414b]{\r\n    margin-top: 2px;\r\n    width: 50%;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=1&id=62e92aac&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=1&id=62e92aac&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=style&index=1&id=62e92aac&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=1&id=62e92aac&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addingQuantityIngredients.vue?vue&type=style&index=0&id=5dae969f&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/addingQuantityIngredients.vue?vue&type=style&index=0&id=5dae969f&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./addingQuantityIngredients.vue?vue&type=style&index=0&id=5dae969f&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addingQuantityIngredients.vue?vue&type=style&index=0&id=5dae969f&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/calculation.vue?vue&type=style&index=0&id=0469fbd2&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/calculation.vue?vue&type=style&index=0&id=0469fbd2&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./calculation.vue?vue&type=style&index=0&id=0469fbd2&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/calculation.vue?vue&type=style&index=0&id=0469fbd2&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/ingredients.vue?vue&type=style&index=0&id=0f54414b&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/ingredients.vue?vue&type=style&index=0&id=0f54414b&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ingredients.vue?vue&type=style&index=0&id=0f54414b&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/ingredients.vue?vue&type=style&index=0&id=0f54414b&scoped=true&lang=css&");

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
          _c("v-toolbar", {
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
                                  (_vm.tableForCupType = false),
                                  (_vm.tableForIngredients = false)
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
                                  (_vm.tableForCupType = false),
                                  (_vm.tableForIngredients = false)
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
                                  (_vm.tableForCupType = false),
                                  (_vm.tableForIngredients = false)
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
                                  (_vm.tableForCupType = true),
                                  (_vm.tableForIngredients = false)
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
                                  (_vm.tableForCupType = false),
                                  (_vm.tableForIngredients = false)
                              }
                            }
                          },
                          [_vm._v("Cup Size Quantity")]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-tab",
                          {
                            on: {
                              click: function($event) {
                                _vm.changeName("ingredients"),
                                  (_vm.tableForAddOns = false),
                                  (_vm.tableForCupSize = false),
                                  (_vm.tableForProduct = false),
                                  (_vm.tableForCategory = false),
                                  (_vm.tableForCupType = false),
                                  (_vm.tableForIngredients = true)
                              }
                            }
                          },
                          [_vm._v("Ingredients")]
                        )
                      ],
                      1
                    )
                  ]
                },
                proxy: true
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _vm.tableForIngredients
        ? _c("v-data-table", {
            staticClass: "elevation-3",
            staticStyle: { "text-align": "center" },
            attrs: {
              headers: _vm.headersForIngredients,
              items: _vm.ingredientsData,
              search: _vm.search,
              "items-per-page": 10
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
                            [_vm._v("Ingredients")]
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
                              on: { click: _vm.showCalculation }
                            },
                            [_vm._v("Calculation")]
                          ),
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
                              on: { click: _vm.showIngredients }
                            },
                            [_vm._v("+Quantity Ing")]
                          ),
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
                              on: { click: _vm.showNewIngredients }
                            },
                            [_vm._v("+Ingredients")]
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
                  key: "item.onRockQuantity",
                  fn: function(ref) {
                    var item = ref.item
                    return [_c("span", [_vm._v(_vm._s(_vm.getData(item)))])]
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
                              return _vm.showEditIngredients(item)
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
              3511265465
            )
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.tableForCategory
        ? _c("v-data-table", {
            staticClass: "elevation-3",
            attrs: {
              headers: _vm.headersForCategory,
              items: _vm.categoryData,
              search: _vm.search,
              "items-per-page": 10
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
              "items-per-page": 10
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
              "items-per-page": 10
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
              "items-per-page": 10
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
              "items-per-page": 10
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
                                        label: "Product Category Name",
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
                                      _c("i", [
                                        _vm.errorMessage8 !== null
                                          ? _c(
                                              "span",
                                              { staticClass: "errorColor" },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.errorMessage8)
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ]),
                                      _vm._v(" "),
                                      _c("i", [
                                        _c(
                                          "span",
                                          { staticClass: "errorColor" },
                                          [
                                            _vm._v(
                                              "*Image size must not exceed 1MB"
                                            )
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("center", [
                                        _c("img", {
                                          staticClass: "addOnsImage",
                                          attrs: { src: _vm.imageURL }
                                        }),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c("input", {
                                          staticClass: "fileStyle",
                                          attrs: {
                                            type: "file",
                                            accept: "image/*",
                                            required: ""
                                          },
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
                                      [_vm._v("Update Category")]
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
                attrs: { persistent: "", "max-width": "800px" },
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
                                      { attrs: { cols: "12", sm: "4" } },
                                      [
                                        _c("v-select", {
                                          attrs: {
                                            solo: "",
                                            height: "55",
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
                                      { attrs: { cols: "12", sm: "4" } },
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
                                        }),
                                        _vm._v(" "),
                                        _c("i", [
                                          _vm.errorMessage9 !== null
                                            ? _c(
                                                "span",
                                                { staticClass: "errorColor" },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.errorMessage9)
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          {
                                            staticClass: "btn btn-primary",
                                            staticStyle: { width: "100%" },
                                            on: {
                                              click: function($event) {
                                                ;(_vm.dialogQuantityIngredients = true),
                                                  (_vm.dialogForProduct = false)
                                              }
                                            }
                                          },
                                          [_vm._v("Add Ingredients")]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12", sm: "4" } },
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
                                  { staticStyle: { "margin-top": "5%" } },
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
                                              "\n                                  Normal Price\n                              "
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
                                              "\n                                  Online Price \n                              "
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
                                          "margin-top": "5%"
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
                                                attrs: { cols: "12", sm: "4" }
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
                                                attrs: { cols: "12", sm: "4" }
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
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              {
                                                attrs: { cols: "12", sm: "4" }
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
                                          "margin-top": "5%"
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
                                                attrs: { cols: "12", sm: "4" }
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
                                                attrs: { cols: "12", sm: "4" }
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
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              {
                                                attrs: { cols: "12", sm: "4" }
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
                                    _c("i", [
                                      _vm.errorMessage7 !== null
                                        ? _c(
                                            "span",
                                            { staticClass: "errorColor" },
                                            [_vm._v(_vm._s(_vm.errorMessage7))]
                                          )
                                        : _vm._e()
                                    ]),
                                    _vm._v(" "),
                                    _c("i", [
                                      _c(
                                        "span",
                                        { staticClass: "errorColor" },
                                        [
                                          _vm._v(
                                            "*Image size must not exceed 1MB"
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("center", [
                                      _c("img", {
                                        staticClass: "addOnsImage",
                                        attrs: { src: _vm.imgURL }
                                      }),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass: "fileStyle",
                                        attrs: {
                                          type: "file",
                                          accept: "image/*",
                                          required: ""
                                        },
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
                                          [_vm._v("Update Product")]
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
      [
        _c(
          "v-row",
          { attrs: { justify: "center" } },
          [
            _c(
              "v-dialog",
              {
                attrs: { persistent: "", "max-width": "700px" },
                model: {
                  value: _vm.dialogQuantityIngredients,
                  callback: function($$v) {
                    _vm.dialogQuantityIngredients = $$v
                  },
                  expression: "dialogQuantityIngredients"
                }
              },
              [
                _c(
                  "v-card",
                  [
                    _c("div", { staticClass: "modal-header" }, [
                      _c("span", { staticClass: "headline" }, [
                        _vm._v("Ingredients for " + _vm._s(_vm.productName))
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "close",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              ;(_vm.dialogQuantityIngredients = false),
                                (_vm.dialogForProduct = true),
                                _vm.storeIngredients.length > 0
                                  ? ""
                                  : (_vm.storeIngredients = [])
                            }
                          }
                        },
                        [_vm._v("×")]
                      ),
                      _c("br")
                    ]),
                    _vm._v(" "),
                    _c("v-card-text", { staticStyle: { "margin-top": "5%" } }, [
                      _c("form", [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          _vm._l(_vm.options, function(item, index) {
                            return _c("div", { key: index }, [
                              _c("div", { staticClass: "row" }, [
                                _c("div", { staticClass: "col-md-6" }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.storeIngredients,
                                        expression: "storeIngredients"
                                      }
                                    ],
                                    attrs: { type: "checkbox" },
                                    domProps: {
                                      value: item.ingredientsName,
                                      checked: Array.isArray(
                                        _vm.storeIngredients
                                      )
                                        ? _vm._i(
                                            _vm.storeIngredients,
                                            item.ingredientsName
                                          ) > -1
                                        : _vm.storeIngredients
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$a = _vm.storeIngredients,
                                          $$el = $event.target,
                                          $$c = $$el.checked ? true : false
                                        if (Array.isArray($$a)) {
                                          var $$v = item.ingredientsName,
                                            $$i = _vm._i($$a, $$v)
                                          if ($$el.checked) {
                                            $$i < 0 &&
                                              (_vm.storeIngredients = $$a.concat(
                                                [$$v]
                                              ))
                                          } else {
                                            $$i > -1 &&
                                              (_vm.storeIngredients = $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1)))
                                          }
                                        } else {
                                          _vm.storeIngredients = $$c
                                        }
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    { attrs: { for: item.ingredientsName } },
                                    [_vm._v(_vm._s(item.ingredientsName))]
                                  )
                                ])
                              ])
                            ])
                          }),
                          0
                        )
                      ])
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
                                ;(_vm.dialogQuantityIngredients = false),
                                  (_vm.dialogForProduct = true),
                                  _vm.storeIngredients.length > 0
                                    ? ""
                                    : (_vm.storeIngredients = [])
                              }
                            }
                          },
                          [_vm._v("Close")]
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
                                ;(_vm.dialogQuantityIngredients = false),
                                  (_vm.dialogForProduct = true)
                              }
                            }
                          },
                          [_vm._v("Save")]
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
      _vm.dialogForCalculation ? _c("calculation") : _vm._e(),
      _vm._v(" "),
      _vm.dialogForIngredients ? _c("addingIngredients") : _vm._e(),
      _vm._v(" "),
      _vm.dialogForNewIngredients
        ? _c("newIngredients", { ref: "show" })
        : _vm._e(),
      _vm._v(" "),
      _vm.loadingShow ? _c("loading") : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addingQuantityIngredients.vue?vue&type=template&id=5dae969f&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/addingQuantityIngredients.vue?vue&type=template&id=5dae969f&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
                  _vm._v("ADD QUANTITY OF INGREDIENTS")
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.closeModal()
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
                  _c(
                    "v-form",
                    [
                      _c(
                        "v-container",
                        [
                          _c("i", [
                            _vm.errorMessage1 !== null
                              ? _c("span", { staticClass: "errorColor" }, [
                                  _vm._v(_vm._s(_vm.errorMessage1))
                                ])
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            _vm._l(_vm.ingredientsData, function(item, index) {
                              return _c(
                                "v-col",
                                { key: index, attrs: { cols: "12", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label:
                                        item.ingredientsName +
                                        " (" +
                                        item.type +
                                        ")",
                                      outlined: "",
                                      dense: "",
                                      type: "number",
                                      id: item.ingredientsName
                                    },
                                    on: {
                                      keyup: function($event) {
                                        return _vm.validate(
                                          _vm.ingredientsData[index]
                                            .onRockQuantity
                                        )
                                      }
                                    },
                                    model: {
                                      value:
                                        _vm.ingredientsData[index]
                                          .onRockQuantity,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.ingredientsData[index],
                                          "onRockQuantity",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "ingredientsData[index].onRockQuantity"
                                    }
                                  })
                                ],
                                1
                              )
                            }),
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
                          return _vm.closeModal()
                        }
                      }
                    },
                    [_vm._v("Close")]
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
                          return _vm.retrieveCalculation()
                        }
                      }
                    },
                    [_vm._v("Add Quantity Ing")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/calculation.vue?vue&type=template&id=0469fbd2&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/calculation.vue?vue&type=template&id=0469fbd2&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
                  _vm._v("UPDATE CALCULATIONS")
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.closeModal()
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
                  _vm._v("\n                NOTE: "),
                  _c("span", { staticClass: "text-danger text-center" }, [
                    _vm._v("All fields are required")
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-form",
                    [
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("i", [
                                    _vm.errorMessage1 !== null
                                      ? _c(
                                          "span",
                                          { staticClass: "errorColor" },
                                          [_vm._v(_vm._s(_vm.errorMessage1))]
                                        )
                                      : _vm._e()
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-row",
                                    { staticClass: "rowDesign" },
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { col: "12", md: "6" } },
                                        [
                                          _c(
                                            "label",
                                            { staticClass: "spanDesign" },
                                            [_vm._v("1 Pack of Pearl")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { col: "12", md: "1" } },
                                        [
                                          _c(
                                            "label",
                                            { staticClass: "spanDesign" },
                                            [_vm._v("=")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { col: "12", md: "5" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "Scope of pearl",
                                              outlined: "",
                                              dense: "",
                                              type: "number",
                                              id: "pearl"
                                            },
                                            on: {
                                              keyup: function($event) {
                                                return _vm.validate("pearl")
                                              }
                                            },
                                            model: {
                                              value: _vm.packPearl,
                                              callback: function($$v) {
                                                _vm.packPearl = $$v
                                              },
                                              expression: "packPearl"
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
                                          { staticClass: "errorColor" },
                                          [_vm._v(_vm._s(_vm.errorMessage3))]
                                        )
                                      : _vm._e()
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-row",
                                    { staticClass: "rowDesign" },
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { col: "12", md: "6" } },
                                        [
                                          _c(
                                            "label",
                                            { staticClass: "spanDesign" },
                                            [_vm._v("1 Can of Fructose")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { col: "12", md: "1" } },
                                        [
                                          _c(
                                            "label",
                                            { staticClass: "spanDesign" },
                                            [_vm._v("=")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { col: "12", md: "5" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "ml of Fructose",
                                              outlined: "",
                                              dense: "",
                                              type: "number",
                                              id: "canFructose"
                                            },
                                            on: {
                                              keyup: function($event) {
                                                return _vm.validate(
                                                  "canFructose"
                                                )
                                              }
                                            },
                                            model: {
                                              value: _vm.canFructose,
                                              callback: function($$v) {
                                                _vm.canFructose = $$v
                                              },
                                              expression: "canFructose"
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
                                    { staticClass: "rowDesign" },
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { col: "12", md: "6" } },
                                        [
                                          _c(
                                            "label",
                                            { staticClass: "spanDesign" },
                                            [_vm._v("1 Bottle Syrup")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { col: "12", md: "1" } },
                                        [
                                          _c(
                                            "label",
                                            { staticClass: "spanDesign" },
                                            [_vm._v("=")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { col: "12", md: "5" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "ml of cookie dough syrup",
                                              outlined: "",
                                              dense: "",
                                              type: "number",
                                              id: "doughSyrup"
                                            },
                                            on: {
                                              keyup: function($event) {
                                                return _vm.validate(
                                                  "doughSyrup"
                                                )
                                              }
                                            },
                                            model: {
                                              value: _vm.doughSyrup,
                                              callback: function($$v) {
                                                _vm.doughSyrup = $$v
                                              },
                                              expression: "doughSyrup"
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
                                    { staticClass: "rowDesign" },
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { col: "12", md: "6" } },
                                        [
                                          _c(
                                            "label",
                                            { staticClass: "spanDesign" },
                                            [_vm._v("1 Pack of Tea")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { col: "12", md: "1" } },
                                        [
                                          _c(
                                            "label",
                                            { staticClass: "spanDesign" },
                                            [_vm._v("=")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { col: "12", md: "5" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "ml of tea",
                                              outlined: "",
                                              dense: "",
                                              type: "number",
                                              id: "packTea"
                                            },
                                            on: {
                                              keyup: function($event) {
                                                return _vm.validate("packTea")
                                              }
                                            },
                                            model: {
                                              value: _vm.packTea,
                                              callback: function($$v) {
                                                _vm.packTea = $$v
                                              },
                                              expression: "packTea"
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
                                    { staticClass: "rowDesign" },
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { col: "12", md: "6" } },
                                        [
                                          _c(
                                            "label",
                                            { staticClass: "spanDesign" },
                                            [
                                              _vm._v(
                                                "1 Can of Wintermelon Syrup"
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { col: "12", md: "1" } },
                                        [
                                          _c(
                                            "label",
                                            { staticClass: "spanDesign" },
                                            [_vm._v("=")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { col: "12", md: "5" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "ml of wintermelon syrup",
                                              outlined: "",
                                              dense: "",
                                              type: "number",
                                              id: "wintermelonSyrup"
                                            },
                                            on: {
                                              keyup: function($event) {
                                                return _vm.validate(
                                                  "wintermelonSyrup"
                                                )
                                              }
                                            },
                                            model: {
                                              value: _vm.wintermelonSyrup,
                                              callback: function($$v) {
                                                _vm.wintermelonSyrup = $$v
                                              },
                                              expression: "wintermelonSyrup"
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
                                          { staticClass: "errorColor" },
                                          [_vm._v(_vm._s(_vm.errorMessage6))]
                                        )
                                      : _vm._e()
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-row",
                                    { staticClass: "rowDesign" },
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { col: "12", md: "6" } },
                                        [
                                          _c(
                                            "label",
                                            { staticClass: "spanDesign" },
                                            [_vm._v("1 Bottle Cream Milk")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { col: "12", md: "1" } },
                                        [
                                          _c(
                                            "label",
                                            { staticClass: "spanDesign" },
                                            [_vm._v("=")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { col: "12", md: "5" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "ml of cream milk",
                                              outlined: "",
                                              dense: "",
                                              type: "number",
                                              id: "creamMilk"
                                            },
                                            on: {
                                              keyup: function($event) {
                                                return _vm.validate("creamMilk")
                                              }
                                            },
                                            model: {
                                              value: _vm.creamMilk,
                                              callback: function($$v) {
                                                _vm.creamMilk = $$v
                                              },
                                              expression: "creamMilk"
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
                                    _vm.errorMessage7 !== null
                                      ? _c(
                                          "span",
                                          { staticClass: "errorColor" },
                                          [_vm._v(_vm._s(_vm.errorMessage7))]
                                        )
                                      : _vm._e()
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-row",
                                    { staticClass: "rowDesign" },
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { col: "12", md: "6" } },
                                        [
                                          _c(
                                            "label",
                                            { staticClass: "spanDesign" },
                                            [_vm._v("1 Pack of Powder")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { col: "12", md: "1" } },
                                        [
                                          _c(
                                            "label",
                                            { staticClass: "spanDesign" },
                                            [_vm._v("=")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { col: "12", md: "5" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "scopes of powder",
                                              outlined: "",
                                              dense: "",
                                              type: "number",
                                              id: "powder"
                                            },
                                            on: {
                                              keyup: function($event) {
                                                return _vm.validate("powder")
                                              }
                                            },
                                            model: {
                                              value: _vm.powder,
                                              callback: function($$v) {
                                                _vm.powder = $$v
                                              },
                                              expression: "powder"
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
                          return _vm.closeModal()
                        }
                      }
                    },
                    [_vm._v("Close")]
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
                          return _vm.updateCalculation()
                        }
                      }
                    },
                    [_vm._v("Save")]
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
      _vm.loadingShow ? _c("loading") : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/ingredients.vue?vue&type=template&id=0f54414b&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/ingredients.vue?vue&type=template&id=0f54414b&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    "v-row",
    { attrs: { justify: "center" } },
    [
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "850px" },
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
                  _vm._v("INGREDIENTS")
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.closeModal()
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
                  _vm._v("\n                NOTE: "),
                  _c("span", { staticClass: "text-danger text-center" }, [
                    _vm._v("All fields are required")
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-form",
                    [
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                {
                                  staticStyle: {
                                    "margin-left": "-1% !important"
                                  },
                                  attrs: { cols: "12", md: "5" }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Ingredients Name",
                                      outlined: "",
                                      dense: "",
                                      type: "text",
                                      id: "ingredientsName"
                                    },
                                    on: {
                                      keyup: function($event) {
                                        return _vm.validate("ingredientsName")
                                      }
                                    },
                                    model: {
                                      value: _vm.ingredientsName,
                                      callback: function($$v) {
                                        _vm.ingredientsName = $$v
                                      },
                                      expression: "ingredientsName"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("i", [
                                    _vm.errorMessage1 !== null
                                      ? _c(
                                          "span",
                                          { staticClass: "errorColor" },
                                          [_vm._v(_vm._s(_vm.errorMessage1))]
                                        )
                                      : _vm._e()
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticStyle: {
                                    "margin-left": "-1.5% !important"
                                  },
                                  attrs: { cols: "12", md: "5" }
                                },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.typeIngredients,
                                      label: "Ingredients Type",
                                      dense: "",
                                      outlined: ""
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.validate("ingredientsType")
                                      }
                                    },
                                    model: {
                                      value: _vm.ingredientsType,
                                      callback: function($$v) {
                                        _vm.ingredientsType = $$v
                                      },
                                      expression: "ingredientsType"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("i", [
                                    _vm.errorMessage5 !== null
                                      ? _c(
                                          "span",
                                          { staticClass: "errorColor" },
                                          [_vm._v(_vm._s(_vm.errorMessage5))]
                                        )
                                      : _vm._e()
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "1" } },
                                [
                                  _vm.addShow
                                    ? _c(
                                        "v-btn",
                                        {
                                          staticClass:
                                            "btn btn-primary white--text addStyle",
                                          attrs: {
                                            color: "blue darken-1",
                                            type: "button"
                                          },
                                          on: { click: _vm.addIngredient }
                                        },
                                        [_vm._v("Add")]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  !_vm.addShow
                                    ? _c(
                                        "v-btn",
                                        {
                                          staticClass:
                                            "btn btn-primary white--text addStyle",
                                          attrs: {
                                            color: "blue darken-1",
                                            type: "button"
                                          },
                                          on: { click: _vm.updateIngredient }
                                        },
                                        [_vm._v("Update")]
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "1" } },
                                [
                                  _vm.addShow
                                    ? _c(
                                        "v-btn",
                                        {
                                          staticClass:
                                            "btn btn-primary white--text addStyle",
                                          attrs: {
                                            color: "blue darken-1",
                                            type: "button"
                                          },
                                          on: { click: _vm.clear }
                                        },
                                        [_vm._v("Clear")]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  !_vm.addShow
                                    ? _c(
                                        "v-btn",
                                        {
                                          staticClass:
                                            "btn btn-primary white--text addStyle",
                                          attrs: {
                                            color: "blue darken-1",
                                            type: "button"
                                          },
                                          on: { click: _vm.cancelUpdate }
                                        },
                                        [_vm._v("Cancel")]
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
                  ),
                  _vm._v(" "),
                  _c("v-data-table", {
                    staticClass: "elevation-3",
                    attrs: {
                      headers: _vm.headersForIngredients,
                      items: _vm.ingredientsData,
                      search: _vm.search,
                      "items-per-page": 5
                    },
                    scopedSlots: _vm._u([
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
                                    return _vm.editIngredient(item)
                                  }
                                }
                              },
                              [_vm._v("mdi-pencil")]
                            )
                          ]
                        }
                      }
                    ])
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("v-card-actions", [_c("v-spacer")], 1)
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.loadingShow ? _c("loading") : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/noImage.jpg":
/*!**************************************!*\
  !*** ./resources/assets/noImage.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/noImage.jpg?8a2be71f17a537717b3f731660e3e62b";

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
/* empty/unused harmony star reexport *//* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _add_vue_vue_type_style_index_1_id_62e92aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add.vue?vue&type=style&index=1&id=62e92aac&scoped=true&lang=css& */ "./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=1&id=62e92aac&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
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

/***/ "./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=1&id=62e92aac&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=1&id=62e92aac&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_1_id_62e92aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=style&index=1&id=62e92aac&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=1&id=62e92aac&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_1_id_62e92aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_1_id_62e92aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_1_id_62e92aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_1_id_62e92aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


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



/***/ }),

/***/ "./resources/js/modules/addingAdmin/addingQuantityIngredients.vue":
/*!************************************************************************!*\
  !*** ./resources/js/modules/addingAdmin/addingQuantityIngredients.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addingQuantityIngredients_vue_vue_type_template_id_5dae969f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addingQuantityIngredients.vue?vue&type=template&id=5dae969f&scoped=true& */ "./resources/js/modules/addingAdmin/addingQuantityIngredients.vue?vue&type=template&id=5dae969f&scoped=true&");
/* harmony import */ var _addingQuantityIngredients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addingQuantityIngredients.vue?vue&type=script&lang=js& */ "./resources/js/modules/addingAdmin/addingQuantityIngredients.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _addingQuantityIngredients_vue_vue_type_style_index_0_id_5dae969f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addingQuantityIngredients.vue?vue&type=style&index=0&id=5dae969f&scoped=true&lang=css& */ "./resources/js/modules/addingAdmin/addingQuantityIngredients.vue?vue&type=style&index=0&id=5dae969f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _addingQuantityIngredients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addingQuantityIngredients_vue_vue_type_template_id_5dae969f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addingQuantityIngredients_vue_vue_type_template_id_5dae969f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5dae969f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/addingAdmin/addingQuantityIngredients.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/addingAdmin/addingQuantityIngredients.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/modules/addingAdmin/addingQuantityIngredients.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addingQuantityIngredients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./addingQuantityIngredients.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addingQuantityIngredients.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addingQuantityIngredients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/addingAdmin/addingQuantityIngredients.vue?vue&type=style&index=0&id=5dae969f&scoped=true&lang=css&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/modules/addingAdmin/addingQuantityIngredients.vue?vue&type=style&index=0&id=5dae969f&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addingQuantityIngredients_vue_vue_type_style_index_0_id_5dae969f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./addingQuantityIngredients.vue?vue&type=style&index=0&id=5dae969f&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addingQuantityIngredients.vue?vue&type=style&index=0&id=5dae969f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addingQuantityIngredients_vue_vue_type_style_index_0_id_5dae969f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addingQuantityIngredients_vue_vue_type_style_index_0_id_5dae969f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addingQuantityIngredients_vue_vue_type_style_index_0_id_5dae969f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addingQuantityIngredients_vue_vue_type_style_index_0_id_5dae969f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/modules/addingAdmin/addingQuantityIngredients.vue?vue&type=template&id=5dae969f&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/modules/addingAdmin/addingQuantityIngredients.vue?vue&type=template&id=5dae969f&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addingQuantityIngredients_vue_vue_type_template_id_5dae969f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./addingQuantityIngredients.vue?vue&type=template&id=5dae969f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addingQuantityIngredients.vue?vue&type=template&id=5dae969f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addingQuantityIngredients_vue_vue_type_template_id_5dae969f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addingQuantityIngredients_vue_vue_type_template_id_5dae969f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/modules/addingAdmin/calculation.vue":
/*!**********************************************************!*\
  !*** ./resources/js/modules/addingAdmin/calculation.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calculation_vue_vue_type_template_id_0469fbd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculation.vue?vue&type=template&id=0469fbd2&scoped=true& */ "./resources/js/modules/addingAdmin/calculation.vue?vue&type=template&id=0469fbd2&scoped=true&");
/* harmony import */ var _calculation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculation.vue?vue&type=script&lang=js& */ "./resources/js/modules/addingAdmin/calculation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _calculation_vue_vue_type_style_index_0_id_0469fbd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculation.vue?vue&type=style&index=0&id=0469fbd2&scoped=true&lang=css& */ "./resources/js/modules/addingAdmin/calculation.vue?vue&type=style&index=0&id=0469fbd2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _calculation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _calculation_vue_vue_type_template_id_0469fbd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _calculation_vue_vue_type_template_id_0469fbd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0469fbd2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/addingAdmin/calculation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/addingAdmin/calculation.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/modules/addingAdmin/calculation.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_calculation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./calculation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/calculation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_calculation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/addingAdmin/calculation.vue?vue&type=style&index=0&id=0469fbd2&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/modules/addingAdmin/calculation.vue?vue&type=style&index=0&id=0469fbd2&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_calculation_vue_vue_type_style_index_0_id_0469fbd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./calculation.vue?vue&type=style&index=0&id=0469fbd2&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/calculation.vue?vue&type=style&index=0&id=0469fbd2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_calculation_vue_vue_type_style_index_0_id_0469fbd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_calculation_vue_vue_type_style_index_0_id_0469fbd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_calculation_vue_vue_type_style_index_0_id_0469fbd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_calculation_vue_vue_type_style_index_0_id_0469fbd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/modules/addingAdmin/calculation.vue?vue&type=template&id=0469fbd2&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/modules/addingAdmin/calculation.vue?vue&type=template&id=0469fbd2&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_calculation_vue_vue_type_template_id_0469fbd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./calculation.vue?vue&type=template&id=0469fbd2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/calculation.vue?vue&type=template&id=0469fbd2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_calculation_vue_vue_type_template_id_0469fbd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_calculation_vue_vue_type_template_id_0469fbd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/modules/addingAdmin/ingredients.vue":
/*!**********************************************************!*\
  !*** ./resources/js/modules/addingAdmin/ingredients.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ingredients_vue_vue_type_template_id_0f54414b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingredients.vue?vue&type=template&id=0f54414b&scoped=true& */ "./resources/js/modules/addingAdmin/ingredients.vue?vue&type=template&id=0f54414b&scoped=true&");
/* harmony import */ var _ingredients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ingredients.vue?vue&type=script&lang=js& */ "./resources/js/modules/addingAdmin/ingredients.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ingredients_vue_vue_type_style_index_0_id_0f54414b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ingredients.vue?vue&type=style&index=0&id=0f54414b&scoped=true&lang=css& */ "./resources/js/modules/addingAdmin/ingredients.vue?vue&type=style&index=0&id=0f54414b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ingredients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ingredients_vue_vue_type_template_id_0f54414b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ingredients_vue_vue_type_template_id_0f54414b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0f54414b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/addingAdmin/ingredients.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/addingAdmin/ingredients.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/modules/addingAdmin/ingredients.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ingredients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ingredients.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/ingredients.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ingredients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/addingAdmin/ingredients.vue?vue&type=style&index=0&id=0f54414b&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/modules/addingAdmin/ingredients.vue?vue&type=style&index=0&id=0f54414b&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ingredients_vue_vue_type_style_index_0_id_0f54414b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ingredients.vue?vue&type=style&index=0&id=0f54414b&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/ingredients.vue?vue&type=style&index=0&id=0f54414b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ingredients_vue_vue_type_style_index_0_id_0f54414b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ingredients_vue_vue_type_style_index_0_id_0f54414b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ingredients_vue_vue_type_style_index_0_id_0f54414b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ingredients_vue_vue_type_style_index_0_id_0f54414b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/modules/addingAdmin/ingredients.vue?vue&type=template&id=0f54414b&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/modules/addingAdmin/ingredients.vue?vue&type=template&id=0f54414b&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ingredients_vue_vue_type_template_id_0f54414b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ingredients.vue?vue&type=template&id=0f54414b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/ingredients.vue?vue&type=template&id=0f54414b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ingredients_vue_vue_type_template_id_0f54414b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ingredients_vue_vue_type_template_id_0f54414b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);