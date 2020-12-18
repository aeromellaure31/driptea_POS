(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/empty.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/empty.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return {};
  },
  props: ['title']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/onlineOrder/orderHistory.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/onlineOrder/orderHistory.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth */ "./resources/js/services/auth/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router */ "./resources/js/router/index.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config.js */ "./resources/js/config.js");
/* harmony import */ var _basic_empty_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../basic/empty.vue */ "./resources/js/basic/empty.vue");
/* harmony import */ var _basic_loading_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../basic/loading.vue */ "./resources/js/basic/loading.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      tableData: [],
      tableDataCompleteOrder: true,
      tableDataPendingOrders: false,
      tableCancelledOrders: false,
      tableProccessOrders: false,
      config: _config_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      loadingShow: false,
      tableDataPending: [],
      tableProcess: [],
      tableCancelled: [],
      search: null,
      productName: null,
      description: null,
      image: null,
      cupType: null,
      cupSize: null,
      size: null,
      sugarLevel: null,
      addOns: null,
      priceShown: null,
      quantity: null,
      basePrice: null,
      sizeName: null,
      orderDate: null,
      deliveryFee: null,
      showOrderData: null,
      addOnsData: null,
      cupData: null,
      saveItem: null,
      tableName: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.retrievePending();
    this.retrieveCancelled();
    this.retrieveProcess();
    this.retrieve();
    this.retrieveAddOns();
    this.retrieveCupType();
    var pusher = new Pusher(this.config.PUSHER_APP_KEY, {
      cluster: this.config.PUSHER_APP_CLUSTER,
      secret: this.config.PUSHER_APP_SECRET,
      encrypted: false
    });
    var channel = pusher.subscribe("driptea-channel");
    var obj = this;
    pusher.logToConsole = true;
    channel.bind("driptea-data", function (data) {
      jquery__WEBPACK_IMPORTED_MODULE_6___default()("#myModal").modal("hide");

      _this.retrievePending();

      _this.retrieveProcess();

      _this.retrieveCancelled();

      _this.retrieve();
    });
  },
  components: {
    empty: _basic_empty_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    loading: _basic_loading_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  methods: {
    getStatus: function getStatus(item) {
      if (item === 'pendingCustomer') {
        return 'pending';
      } else if (item === 'cancel') {
        return 'Cancelled';
      } else {
        return item;
      }
    },
    getCup: function getCup(item) {
      var cup = "";
      this.cupData.forEach(function (el) {
        if (item === el.cupTypeName) {
          if (parseInt(el.inputCupOnlinePrice) === 0) {
            cup = item;
          } else {
            cup = item + "(+" + el.inputCupOnlinePrice + ".00)";
          }
        }
      });
      return cup;
    },
    retrieveCupType: function retrieveCupType() {
      var _this2 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveCupType", {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this2.cupData = response.data.cupType;
      });
    },
    getDate: function getDate(item) {
      return moment__WEBPACK_IMPORTED_MODULE_5___default()(item.updated_at).format("MM/DD/YYYY");
    },
    getTotal: function getTotal(item) {
      var total = 50;
      var index = item.length;
      item.forEach(function (el) {
        if (el.status !== 'Not Available') {
          total += el.subTotal;
        }
      });
      return total;
    },
    getProduct: function getProduct(item) {
      var product = "";
      var index = item.length;
      item.forEach(function (el) {
        if (item.indexOf(el) >= index - 1) {
          product += el.order_product[0].productName;
        } else {
          product += el.order_product[0].productName + ", ";
        }
      });
      return product;
    },
    getSizePrice: function getSizePrice() {
      if (this.size === "highDose") {
        this.sizeName = "High Dose";
        this.basePrice = this.highPrice;
      } else if (this.size === "overDose") {
        this.sizeName = "Over Dose";
        this.basePrice = this.overPrice;
      } else if (this.size === "lowDose") {
        this.sizeName = "Low Dose";
        this.basePrice = this.price;
      }
    },
    retrieve: function retrieve() {
      var _this3 = this;

      this.loadingShow = true;
      var parameter = {
        id: localStorage.getItem("customerId")
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveOnlineCheckouts", parameter, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this3.tableData = [];
        _this3.loadingShow = false;
        Object.keys(response.data.storeOrder).forEach(function (element) {
          _this3.tableData.push(response.data.storeOrder[element]);
        });

        _this3.tableData.reverse(); // this.tableDataCompleteOrder = true;

      });
    },
    retrievePending: function retrievePending() {
      var _this4 = this;

      this.loadingShow = true;
      var parameter = {
        id: localStorage.getItem("customerId")
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveOneOnlineOrder", parameter, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this4.tableDataPending = [];
        _this4.loadingShow = false;
        Object.keys(response.data.order).forEach(function (element) {
          _this4.tableDataPending.push(response.data.order[element]);
        });

        _this4.tableDataPending.reverse();
      });
    },
    retrieveProcess: function retrieveProcess() {
      var _this5 = this;

      this.loadingShow = true;
      var parameter = {
        id: localStorage.getItem("customerId")
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveOnlineProcessing", parameter, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this5.tableProcess = [];
        _this5.loadingShow = false;
        Object.keys(response.data.storeOrder).forEach(function (element) {
          _this5.tableProcess.push(response.data.storeOrder[element]);
        });

        _this5.tableProcess.reverse();
      });
    },
    retrieveCancelled: function retrieveCancelled() {
      var _this6 = this;

      this.loadingShow = true;
      var parameter = {
        id: localStorage.getItem("customerId")
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveCancelled", parameter, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this6.tableCancelled = [];
        _this6.loadingShow = false;
        Object.keys(response.data.order).forEach(function (element) {
          _this6.tableCancelled.push(response.data.order[element]);
        });

        _this6.tableCancelled.reverse();
      });
    },
    retrieveAddOns: function retrieveAddOns() {
      var _this7 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrievingAddOns", {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this7.addOnsData = response.data.addons;
      });
    },
    getAddOns: function getAddOns(item) {
      var _this8 = this;

      var storeAddOns = "";
      var index = item.length;
      item.forEach(function (el) {
        _this8.addOnsData.forEach(function (e) {
          if (el.addOns === e.addons_name) {
            if (item.indexOf(el) >= index - 1) {
              storeAddOns += el.addOns + " (+" + e.onlineAddOnsPrice + ".00)";
            } else {
              storeAddOns += el.addOns + " (+" + e.onlineAddOnsPrice + ".00), ";
            }
          }
        });
      });
      return storeAddOns;
    },
    viewOrder: function viewOrder(item, param) {
      this.tableName = param;
      this.saveItem = item;
      this.showOrderData = item;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/empty.vue?vue&type=style&index=0&id=2b20b1c4&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/empty.vue?vue&type=style&index=0&id=2b20b1c4&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.empty[data-v-2b20b1c4]{\r\n    width: 100%;\r\n    margin-top: 25px;\r\n    margin-bottom: 25px;\r\n    float: left;\r\n    min-height: 450px;\r\n    overflow-y: hidden;\r\n    text-align: center;\r\n    border: solid 1px #ddd;\n}\n.empty i[data-v-2b20b1c4]{\r\n    font-size: 100px;\r\n    padding-top: 150px;\n}\n.empty span[data-v-2b20b1c4]{\r\n    width: 100%;\r\n    float: left;\n}\n.empty .description[data-v-2b20b1c4]{\r\n    font-size: 24px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/onlineOrder/orderHistory.vue?vue&type=style&index=0&id=0f3ac740&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/onlineOrder/orderHistory.vue?vue&type=style&index=0&id=0f3ac740&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.successColor[data-v-0f3ac740]{\r\n  color: green;\n}\n.errorColor[data-v-0f3ac740]{\r\n  color: red;\n}\n.table[data-v-0f3ac740] {\r\n  width: 70%;\r\n  margin-left: 5%;\n}\n.imageSize2[data-v-0f3ac740] {\r\n  height: 300px;\r\n  width: 300px;\r\n  margin-top: 2%;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/empty.vue?vue&type=style&index=0&id=2b20b1c4&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/empty.vue?vue&type=style&index=0&id=2b20b1c4&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./empty.vue?vue&type=style&index=0&id=2b20b1c4&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/empty.vue?vue&type=style&index=0&id=2b20b1c4&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/onlineOrder/orderHistory.vue?vue&type=style&index=0&id=0f3ac740&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/onlineOrder/orderHistory.vue?vue&type=style&index=0&id=0f3ac740&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./orderHistory.vue?vue&type=style&index=0&id=0f3ac740&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/onlineOrder/orderHistory.vue?vue&type=style&index=0&id=0f3ac740&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/empty.vue?vue&type=template&id=2b20b1c4&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/empty.vue?vue&type=template&id=2b20b1c4&scoped=true& ***!
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
    "div",
    { staticClass: "empty" },
    [
      _c("i", { staticClass: "fas fa-hourglass-start text-danger" }),
      _vm._v(" "),
      _c("v-icon", { attrs: { color: "red darken-2" } }, [
        _vm._v("mdi-database")
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "description text-danger" }, [
        _c("b", [_vm._v(_vm._s(_vm.title))])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/onlineOrder/orderHistory.vue?vue&type=template&id=0f3ac740&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/onlineOrder/orderHistory.vue?vue&type=template&id=0f3ac740&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "center",
        [
          _c(
            "v-card",
            { staticClass: "mt-10" },
            [
              _c(
                "v-tabs",
                {
                  attrs: {
                    "background-color": "deep-orange",
                    color: "white accent-4",
                    right: ""
                  }
                },
                [
                  _c(
                    "v-tab",
                    {
                      on: {
                        click: function($event) {
                          ;(_vm.tableDataCompleteOrder = true),
                            (_vm.tableDataPendingOrders = false),
                            (_vm.tableCancelledOrders = false),
                            (_vm.tableProccessOrders = false)
                        }
                      }
                    },
                    [_vm._v("Completed Orders")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-tab",
                    {
                      on: {
                        click: function($event) {
                          ;(_vm.tableDataCompleteOrder = false),
                            (_vm.tableDataPendingOrders = false),
                            (_vm.tableCancelledOrders = false),
                            (_vm.tableProccessOrders = true)
                        }
                      }
                    },
                    [_vm._v("Processing Orders")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-tab",
                    {
                      on: {
                        click: function($event) {
                          ;(_vm.tableDataCompleteOrder = false),
                            (_vm.tableDataPendingOrders = true),
                            (_vm.tableCancelledOrders = false),
                            (_vm.tableProccessOrders = false)
                        }
                      }
                    },
                    [_vm._v("Pending Orders")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-tab",
                    {
                      on: {
                        click: function($event) {
                          ;(_vm.tableDataCompleteOrder = false),
                            (_vm.tableCancelledOrders = true),
                            (_vm.tableDataPendingOrders = false),
                            (_vm.tableProccessOrders = false)
                        }
                      }
                    },
                    [_vm._v("Cancelled Orders")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.tableDataCompleteOrder
            ? _c(
                "div",
                [
                  _c(
                    "v-simple-table",
                    {
                      staticClass: "elevation-3",
                      attrs: { "items-per-page": 5 }
                    },
                    [
                      _c("thead", [
                        _vm.tableData !== null && _vm.tableData.length > 0
                          ? _c("tr", [
                              _c("th", [_vm._v("Date")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Order #")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Product Ordered")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Total")]),
                              _vm._v(" "),
                              _c("th", { staticStyle: { width: "15px" } }, [
                                _vm._v("Action")
                              ])
                            ])
                          : _c(
                              "div",
                              [
                                _c("empty", {
                                  attrs: { title: "No Complete Orders!" }
                                })
                              ],
                              1
                            )
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.tableData, function(item, index) {
                          return _c("tr", { key: index }, [
                            _c("td", [_vm._v(_vm._s(_vm.getDate(item[0])))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(
                                  item[0].get_checkouts
                                    ? item[0].get_checkouts[0].customerId
                                    : ""
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.getProduct(item)))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(item[0].get_checkouts[0].total))
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: {
                                    "data-toggle": "modal",
                                    "data-target": "#myModal"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.viewOrder(
                                        item,
                                        "Completed Order"
                                      )
                                    }
                                  }
                                },
                                [_vm._v("View")]
                              )
                            ])
                          ])
                        }),
                        0
                      )
                    ]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.tableDataPendingOrders
            ? _c(
                "div",
                [
                  _c(
                    "v-simple-table",
                    {
                      staticClass: "elevation-3",
                      attrs: { "items-per-page": 5 }
                    },
                    [
                      _c("thead", [
                        _vm.tableDataPending !== null &&
                        _vm.tableDataPending.length > 0
                          ? _c("tr", [
                              _c("th", [_vm._v("Date")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Order #")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Product Ordered")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Delivery Fee")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Total")]),
                              _vm._v(" "),
                              _c("th", { staticStyle: { width: "15px" } }, [
                                _vm._v("Action")
                              ])
                            ])
                          : _c(
                              "div",
                              [
                                _c("empty", {
                                  attrs: { title: "No Pending Orders!" }
                                })
                              ],
                              1
                            )
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.tableDataPending, function(items, index) {
                          return _c("tr", { key: index }, [
                            _c("td", [_vm._v(_vm._s(_vm.getDate(items[0])))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(items[0].id))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.getProduct(items)))]),
                            _vm._v(" "),
                            _c("td", [_vm._v("₱ 50.00")]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v("₱ " + _vm._s(_vm.getTotal(items)) + ".00")
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: {
                                    "data-toggle": "modal",
                                    "data-target": "#myModal"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.viewOrder(
                                        items,
                                        "Pending Order"
                                      )
                                    }
                                  }
                                },
                                [_vm._v("View")]
                              )
                            ])
                          ])
                        }),
                        0
                      )
                    ]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.tableProccessOrders
            ? _c(
                "div",
                [
                  _c(
                    "v-simple-table",
                    {
                      staticClass: "elevation-3",
                      attrs: { "items-per-page": 5 }
                    },
                    [
                      _c("thead", [
                        _vm.tableProcess !== null && _vm.tableProcess.length > 0
                          ? _c("tr", [
                              _c("th", [_vm._v("Date")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Order #")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Product Ordered")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Delivery Fee")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Total")]),
                              _vm._v(" "),
                              _c("th", { staticStyle: { width: "15px" } }, [
                                _vm._v("Action")
                              ])
                            ])
                          : _c(
                              "div",
                              [
                                _c("empty", {
                                  attrs: { title: "No Processing Orders!" }
                                })
                              ],
                              1
                            )
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.tableProcess, function(items, index) {
                          return _c("tr", { key: index }, [
                            _c("td", [_vm._v(_vm._s(_vm.getDate(items[0])))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(items[0].id))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.getProduct(items)))]),
                            _vm._v(" "),
                            _c("td", [_vm._v("₱ 50.00")]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v("₱ " + _vm._s(_vm.getTotal(items)) + ".00")
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: {
                                    "data-toggle": "modal",
                                    "data-target": "#myModal"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.viewOrder(
                                        items,
                                        "Processing Order"
                                      )
                                    }
                                  }
                                },
                                [_vm._v("View")]
                              )
                            ])
                          ])
                        }),
                        0
                      )
                    ]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.tableCancelledOrders
            ? _c(
                "div",
                [
                  _c(
                    "v-simple-table",
                    {
                      staticClass: "elevation-3",
                      attrs: { "items-per-page": 5 }
                    },
                    [
                      _c("thead", [
                        _vm.tableCancelled !== null &&
                        _vm.tableCancelled.length > 0
                          ? _c("tr", [
                              _c("th", [_vm._v("Date")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Order #")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Product Ordered")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Delivery Fee")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Total")]),
                              _vm._v(" "),
                              _c("th", { staticStyle: { width: "15px" } }, [
                                _vm._v("Action")
                              ])
                            ])
                          : _c(
                              "div",
                              [
                                _c("empty", {
                                  attrs: { title: "No Cancelled Orders!" }
                                })
                              ],
                              1
                            )
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.tableCancelled, function(items, index) {
                          return _c("tr", { key: index }, [
                            _c("td", [_vm._v(_vm._s(_vm.getDate(items[0])))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(items[0].id))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.getProduct(items)))]),
                            _vm._v(" "),
                            _c("td", [_vm._v("₱ 50.00")]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v("₱ " + _vm._s(_vm.getTotal(items)) + ".00")
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: {
                                    "data-toggle": "modal",
                                    "data-target": "#myModal"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.viewOrder(
                                        items,
                                        "Cancelled Order"
                                      )
                                    }
                                  }
                                },
                                [_vm._v("View")]
                              )
                            ])
                          ])
                        }),
                        0
                      )
                    ]
                  )
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "modal fade", attrs: { id: "myModal", role: "dialog" } },
        [
          _c("div", { staticClass: "modal-dialog modal-lg" }, [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-body" },
                [
                  _c(
                    "v-simple-table",
                    {
                      staticClass: "elevation-3",
                      attrs: { "items-per-page": 5 },
                      scopedSlots: _vm._u([
                        {
                          key: "top",
                          fn: function() {
                            return [
                              _c(
                                "center",
                                [
                                  _c(
                                    "v-toolbar",
                                    {
                                      staticClass: "mb-2",
                                      attrs: {
                                        color: "#ff5b04",
                                        dark: "",
                                        flat: ""
                                      }
                                    },
                                    [
                                      _c(
                                        "v-toolbar-title",
                                        {
                                          staticClass:
                                            "col pa-3 py-4 white--text"
                                        },
                                        [_vm._v(_vm._s(_vm.tableName))]
                                      )
                                    ],
                                    1
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
                    [
                      _vm._v(" "),
                      _c("thead", [
                        _c("tr", [
                          _c("th", [_vm._v("Product Name")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Add Ons")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Cup Type")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Unit Price")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Quantity")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Status")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Total")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.showOrderData, function(item, index) {
                          return _c("tr", { key: index }, [
                            _c("td", [
                              _vm._v(
                                _vm._s(
                                  item.order_product
                                    ? item.order_product[0].productName
                                    : ""
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(
                                  item.same_order
                                    ? _vm.getAddOns(item.same_order)
                                    : ""
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(_vm.getCup(item.cupType)))
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v("₱ " + _vm._s(item.choosenPrice) + ".00")
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.quantity))]),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                class:
                                  item.status === "Not Available"
                                    ? "errorColor"
                                    : item.status === "Available"
                                    ? "successColor"
                                    : ""
                              },
                              [_vm._v(_vm._s(_vm.getStatus(item.status)))]
                            ),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v("₱ " + _vm._s(item.subTotal) + ".00")
                            ])
                          ])
                        }),
                        0
                      ),
                      _vm._v(" "),
                      void 0
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm._m(1)
            ])
          ])
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
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("×")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Okay")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/basic/empty.vue":
/*!**************************************!*\
  !*** ./resources/js/basic/empty.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _empty_vue_vue_type_template_id_2b20b1c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty.vue?vue&type=template&id=2b20b1c4&scoped=true& */ "./resources/js/basic/empty.vue?vue&type=template&id=2b20b1c4&scoped=true&");
/* harmony import */ var _empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty.vue?vue&type=script&lang=js& */ "./resources/js/basic/empty.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _empty_vue_vue_type_style_index_0_id_2b20b1c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empty.vue?vue&type=style&index=0&id=2b20b1c4&scoped=true&lang=css& */ "./resources/js/basic/empty.vue?vue&type=style&index=0&id=2b20b1c4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _empty_vue_vue_type_template_id_2b20b1c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _empty_vue_vue_type_template_id_2b20b1c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2b20b1c4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/basic/empty.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/basic/empty.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/basic/empty.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./empty.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/empty.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/basic/empty.vue?vue&type=style&index=0&id=2b20b1c4&scoped=true&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/basic/empty.vue?vue&type=style&index=0&id=2b20b1c4&scoped=true&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_empty_vue_vue_type_style_index_0_id_2b20b1c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./empty.vue?vue&type=style&index=0&id=2b20b1c4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/empty.vue?vue&type=style&index=0&id=2b20b1c4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_empty_vue_vue_type_style_index_0_id_2b20b1c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_empty_vue_vue_type_style_index_0_id_2b20b1c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_empty_vue_vue_type_style_index_0_id_2b20b1c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_empty_vue_vue_type_style_index_0_id_2b20b1c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/basic/empty.vue?vue&type=template&id=2b20b1c4&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./resources/js/basic/empty.vue?vue&type=template&id=2b20b1c4&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_empty_vue_vue_type_template_id_2b20b1c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./empty.vue?vue&type=template&id=2b20b1c4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/empty.vue?vue&type=template&id=2b20b1c4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_empty_vue_vue_type_template_id_2b20b1c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_empty_vue_vue_type_template_id_2b20b1c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/modules/onlineOrder/orderHistory.vue":
/*!***********************************************************!*\
  !*** ./resources/js/modules/onlineOrder/orderHistory.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _orderHistory_vue_vue_type_template_id_0f3ac740_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderHistory.vue?vue&type=template&id=0f3ac740&scoped=true& */ "./resources/js/modules/onlineOrder/orderHistory.vue?vue&type=template&id=0f3ac740&scoped=true&");
/* harmony import */ var _orderHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderHistory.vue?vue&type=script&lang=js& */ "./resources/js/modules/onlineOrder/orderHistory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _orderHistory_vue_vue_type_style_index_0_id_0f3ac740_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orderHistory.vue?vue&type=style&index=0&id=0f3ac740&scoped=true&lang=css& */ "./resources/js/modules/onlineOrder/orderHistory.vue?vue&type=style&index=0&id=0f3ac740&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _orderHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _orderHistory_vue_vue_type_template_id_0f3ac740_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _orderHistory_vue_vue_type_template_id_0f3ac740_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0f3ac740",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/onlineOrder/orderHistory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/onlineOrder/orderHistory.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/modules/onlineOrder/orderHistory.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orderHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./orderHistory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/onlineOrder/orderHistory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orderHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/onlineOrder/orderHistory.vue?vue&type=style&index=0&id=0f3ac740&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/modules/onlineOrder/orderHistory.vue?vue&type=style&index=0&id=0f3ac740&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_orderHistory_vue_vue_type_style_index_0_id_0f3ac740_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./orderHistory.vue?vue&type=style&index=0&id=0f3ac740&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/onlineOrder/orderHistory.vue?vue&type=style&index=0&id=0f3ac740&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_orderHistory_vue_vue_type_style_index_0_id_0f3ac740_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_orderHistory_vue_vue_type_style_index_0_id_0f3ac740_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_orderHistory_vue_vue_type_style_index_0_id_0f3ac740_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_orderHistory_vue_vue_type_style_index_0_id_0f3ac740_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/modules/onlineOrder/orderHistory.vue?vue&type=template&id=0f3ac740&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/modules/onlineOrder/orderHistory.vue?vue&type=template&id=0f3ac740&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orderHistory_vue_vue_type_template_id_0f3ac740_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./orderHistory.vue?vue&type=template&id=0f3ac740&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/onlineOrder/orderHistory.vue?vue&type=template&id=0f3ac740&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orderHistory_vue_vue_type_template_id_0f3ac740_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orderHistory_vue_vue_type_template_id_0f3ac740_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);