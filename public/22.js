(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/order/receipt.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/order/receipt.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth */ "./resources/js/services/auth/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router */ "./resources/js/router/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      data: null,
      datetime: moment__WEBPACK_IMPORTED_MODULE_0___default()().format('MMMM Do YYYY, h:mm:ss a'),
      Change: null,
      Subtotal: null,
      Delivery_Fee: null,
      Total: null,
      Amount: null,
      customerType: localStorage.getItem('customerType')
    };
  },
  props: ['showData'],
  mounted: function mounted() {
    this.Change = this.showData[0].get_checkouts[0].change;
    this.Subtotal = this.showData[0].get_checkouts[0].subTotal;
    this.Delivery_Fee = this.showData[0].get_checkouts[0].deliveryFee;
    this.Total = this.showData[0].get_checkouts[0].total;
    this.Amount = this.showData[0].get_checkouts[0].incash;
  },
  methods: {
    hide: function hide() {
      this.$parent.hideReceipt();
      this.$parent.retrieveProduct();
      localStorage.removeItem('customerId');
      localStorage.removeItem('customerType');
      _router__WEBPACK_IMPORTED_MODULE_2__["default"].push('/casherDashboard')["catch"](function () {});
    },
    getAddOns: function getAddOns(item) {
      var storeAddOns = "";
      var index = item.length;
      item.forEach(function (el) {
        if (item.indexOf(el) >= index - 1) {
          storeAddOns += el.addOns;
        } else {
          storeAddOns += el.addOns + ", ";
        }
      });
      return storeAddOns;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/productCategory.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/products/productCategory.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth */ "./resources/js/services/auth/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router */ "./resources/js/router/index.js");
/* harmony import */ var _order_receipt_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../order/receipt.vue */ "./resources/js/modules/order/receipt.vue");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config.js */ "./resources/js/config.js");
/* harmony import */ var _basic_loading_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../basic/loading.vue */ "./resources/js/basic/loading.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      data: null,
      tableData: null,
      customerType: this.$route.params.image,
      config: _config_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      deliveryFee: 0,
      totalPrice: 0,
      incash: 0,
      change: 0,
      subTotalPrice: 0,
      cash: null,
      fee: 0,
      error: false,
      receiptShow: false,
      receiptData: null,
      loadingShow: false,
      name: '',
      address: '',
      contact: '',
      addOnsData: [],
      cupData: []
    };
  },
  components: {
    receipt: _order_receipt_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    loading: _basic_loading_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  mounted: function mounted() {
    this.retrieveCategory();
    this.retrieveProduct();
    this.retrieveAddOns();
    this.retrieveCupType();
  },
  methods: {
    convert: function convert(item) {
      return parseInt(item).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    },
    getCup: function getCup(item) {
      var _this = this;

      var cup = "";
      this.cupData.forEach(function (el) {
        if (item === el.cupTypeName) {
          if (_this.customerType === 'foodpanda' || _this.customerType === 'grab' || _this.customerType === 'online') {
            if (parseInt(el.inputCupOnlinePrice) === 0) {
              cup = item;
            } else {
              cup = item + '(+' + el.inputCupOnlinePrice + '.00)';
            }
          } else {
            if (parseInt(el.cupTypePrice === 0)) {
              cup = item;
            } else {
              cup = item + '(+' + el.cupTypePrice + '.00)';
            }
          }
        }
      });
      return cup;
    },
    retrieveCupType: function retrieveCupType() {
      var _this2 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveAllCupType", {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this2.cupData = response.data.cupType;
        _this2.loadingShow = false;
      });
    },
    hideReceipt: function hideReceipt() {
      this.receiptShow = false;
    },
    addingFee: function addingFee() {
      this.deliveryFee = this.fee;
    },
    addingIncash: function addingIncash() {
      this.incash = this.cash;
    },
    convertTotalPrice: function convertTotalPrice() {
      if (this.subTotalPrice === 0) {
        this.getSubTotal();
      }

      if (this.fee !== '' || this.fee > 0) {
        var total = this.subTotalPrice + parseInt(this.fee);
        this.totalPrice = total;
        return parseInt(total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      } else {
        var _total = this.subTotalPrice;
        this.totalPrice = _total;
        return parseInt(_total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      }
    },
    convertChange: function convertChange() {
      if (this.cash > this.totalPrice) {
        var amountChange = this.cash - this.totalPrice;
        return amountChange.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      } else {
        return this.change.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      }
    },
    retrieveCategory: function retrieveCategory() {
      var _this3 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'retrieveCategory', {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (res) {
        if (res.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this3.data = res.data.addCategory;
        _this3.loadingShow = false;
      });
    },
    getSubTotal: function getSubTotal() {
      if (this.tableData != null) {
        var total = 0;
        this.tableData.forEach(function (element) {
          total += parseInt(element.subTotal);
        });
        this.subTotalPrice = total;
        return parseInt(total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      }
    },
    redirect: function redirect(param) {
      _router__WEBPACK_IMPORTED_MODULE_1__["default"].push('/chosenCategory/' + param)["catch"](function () {});
    },
    retrieveProduct: function retrieveProduct() {
      var _this4 = this;

      this.loadingShow = true;

      if (this.customerType === 'online') {
        var params = {
          id: localStorage.getItem('customer')
        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'getOrder', params, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (res) {
          if (res.data.status) {
            _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
          }

          _this4.tableData = res.data.order;
          _this4.fee = 50;
        });
      } else {
        var _params = {
          id: localStorage.getItem('customer')
        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'retrieveOrder', _params, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (res) {
          if (res.data.status) {
            _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
          }

          _this4.tableData = res.data.order;
        });
      }

      if (this.customerType === 'online' || this.customerType === 'fb') {
        var param = {
          id: localStorage.getItem('customer')
        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'retrieveCustomer', param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (res) {
          if (res.data.status) {
            _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
          }

          _this4.name = res.data.customerDetails.customerName;
          _this4.address = res.data.customerDetails.customerAddress;
          _this4.contact = res.data.customerDetails.customerContactNumber;
          _this4.loadingShow = false;
        });
      } else {
        this.loadingShow = false;
      }
    },
    retrieveAddOns: function retrieveAddOns() {
      var _this5 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveAllAddOns", {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this5.addOnsData = response.data.addons;
        _this5.loadingShow = false;
      });
    },
    getAddOns: function getAddOns(item) {
      var _this6 = this;

      var storeAddOns = "";
      var index = item.length;
      item.forEach(function (el) {
        _this6.addOnsData.forEach(function (e) {
          if (el.addOns === e.addons_name) {
            if (item.indexOf(el) >= index - 1) {
              if (_this6.customerType === 'foodpanda' || _this6.customerType === 'grab' || _this6.customerType === 'online') {
                storeAddOns += el.addOns + ' (+' + e.onlineAddOnsPrice + '.00)';
              } else {
                storeAddOns += el.addOns + ' (+' + e.addons_price + '.00)';
              }
            } else {
              if (_this6.customerType === 'foodpanda' || _this6.customerType === 'grab' || _this6.customerType === 'online') {
                storeAddOns += el.addOns + ' (+' + e.onlineAddOnsPrice + '.00), ';
              } else {
                storeAddOns += el.addOns + ' (+' + e.addons_price + '.00), ';
              }
            }
          }
        });
      });
      return storeAddOns;
    },
    deleteOrder: function deleteOrder(prodId) {
      var _this7 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'deleteOrder', {
        id: prodId
      }, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (res) {
        if (res.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this7.retrieveProduct();

        _this7.loadingShow = false;
      });
    },
    checkoutMethod: function checkoutMethod() {
      var _this8 = this;

      this.loadingShow = true;
      var params = {
        id: localStorage.getItem('customer'),
        status: 'complete'
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'updateStatus', params, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (res) {
        if (res.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        var params = {
          customerId: localStorage.getItem('customer'),
          cashierId: localStorage.getItem('cashierId') ? localStorage.getItem('cashierId') : localStorage.getItem('adminId'),
          subTotal: parseInt(_this8.getSubTotal()),
          deliveryFee: _this8.fee,
          total: parseInt(_this8.convertTotalPrice()),
          incash: _this8.cash,
          change: parseInt(_this8.convertChange()),
          order: _this8.tableData
        };

        _this8.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'addCheckout', params, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (res) {
          if (res.data.status) {
            _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
          }

          var low = 0;
          var high = 0;
          var over = 0;

          _this8.tableData.forEach(function (el) {
            if (el.size === 'lowDose') {
              low += el.quantity;
            } else if (el.size === 'highDose') {
              high += el.quantity;
            } else if (el.size === 'overDose') {
              over += el.quantity;
            }
          });

          var param = {
            usedCupsLowDose: low,
            usedCupsHighDose: high,
            usedCupsOverDose: over
          };

          _this8.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'updateRemainingCups', param, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
            if (response.data.status) {
              _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
            }

            var parameter = {
              id: res.data.storeCheckouts.id
            };

            _this8.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'retrieveCheckouts', parameter, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
              if (response.data.status) {
                _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
              }

              _this8.loadingShow = false;
              _this8.receiptData = response.data.storeOrder;
              _this8.receiptShow = true;
            });
          });
        });
      });
    },
    checkoutOrder: function checkoutOrder() {
      if (this.customerType !== 'fb' && this.customerType !== 'online') {
        if (this.cash > parseInt(this.convertTotalPrice()) && this.convertTotalPrice() !== null && this.cash !== null && this.convertChange() >= 0) {
          this.error = false;
          this.checkoutMethod();
        } else {
          this.error = true;
        }
      } else {
        if (this.getSubTotal() > 0 && this.fee !== '' && this.convertTotalPrice() > 0) {
          this.error = false;
          this.checkoutMethod();
        } else {
          this.error = true;
        }
      }
    },
    previous: function previous() {
      var type = localStorage.getItem("customerType");
      _router__WEBPACK_IMPORTED_MODULE_1__["default"].push('/casherDashboard')["catch"](function () {});
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/order/receipt.vue?vue&type=style&index=0&id=337ac63e&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/order/receipt.vue?vue&type=style&index=0&id=337ac63e&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nhr[data-v-337ac63e] {\r\n    border: 1px solid gray;\n}\nlabel[data-v-337ac63e] {\r\n    font-size: 20px !important;\n}\n.blurred-background[data-v-337ac63e] {\r\n    position: fixed;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    text-align: center;\r\n    background: rgb(54, 54, 54, .7);\n}\n.alert-box[data-v-337ac63e] {\r\n    width: 500px;\r\n    background: white;\r\n    display: inline-block;\r\n    margin-top: 150px;\r\n    font-weight: lighter;\r\n    border-radius: 3px;\r\n    font-size: 30px;\r\n    padding: 20px;\r\n    transition: .2s;\r\n    text-align: left;\r\n    box-shadow: 5px 5px gray;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/productCategory.vue?vue&type=style&index=0&id=3cd12d30&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/products/productCategory.vue?vue&type=style&index=0&id=3cd12d30&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.dataStyle[data-v-3cd12d30]{\r\n    height: 700px;\r\n    overflow-y: scroll;\n}\n.checkout[data-v-3cd12d30]{\r\n    margin-top: 3%;\r\n    height: 40% !important;\r\n    font-size: 20px; width: 200px;\n}\n.btn[data-v-3cd12d30]{\r\n    height: 33px;\r\n    width: 150px;\n}\ninput[data-v-3cd12d30]{\r\n    /* height: 35px; */\r\n    /* margin-top: -50px; */\r\n    /* margin-bottom: 15px; */\r\n    width: 80px;\r\n    border-radius: 5px;\n}\n[data-v-3cd12d30]::-webkit-scrollbar {\r\n  width: 1px;\n}\n.pStyle[data-v-3cd12d30]{\r\n    font-weight: bold;\n}\np[data-v-3cd12d30]{\r\n    margin-top: -10%;\n}\n.firstRow[data-v-3cd12d30]{\r\n    margin-bottom: 5%;\r\n    margin-top: 1%;\n}\n.sudlanan[data-v-3cd12d30]{\r\n    background-color:white;\n}\ntable[data-v-3cd12d30]{\r\n    height: 450px;\r\n    width: 100%;\n}\n.table tr[data-v-3cd12d30]{\r\n   text-align: center;\n}\nth[data-v-3cd12d30] {\r\n   width: 100%;\n}\n@media screen and (max-width: 800px) {\ninput[data-v-3cd12d30]{\r\n        width: 60px;\r\n        margin-left: -15px;\n}\ntable[data-v-3cd12d30]{\r\n        height: 350px;\r\n        width: 100%;\n}\n.dataStyle[data-v-3cd12d30]{\r\n        height: 490px !important;\r\n        overflow-y: scroll;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/order/receipt.vue?vue&type=style&index=0&id=337ac63e&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/order/receipt.vue?vue&type=style&index=0&id=337ac63e&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./receipt.vue?vue&type=style&index=0&id=337ac63e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/order/receipt.vue?vue&type=style&index=0&id=337ac63e&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/productCategory.vue?vue&type=style&index=0&id=3cd12d30&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/products/productCategory.vue?vue&type=style&index=0&id=3cd12d30&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./productCategory.vue?vue&type=style&index=0&id=3cd12d30&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/productCategory.vue?vue&type=style&index=0&id=3cd12d30&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/order/receipt.vue?vue&type=template&id=337ac63e&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/order/receipt.vue?vue&type=template&id=337ac63e&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "blurred-background", attrs: { id: "modal" } },
    [
      _c(
        "div",
        { staticClass: "alert-box" },
        [
          _c("center", [
            _c("img", {
              staticStyle: { width: "80px" },
              attrs: { src: __webpack_require__(/*! @/assets/logo.png */ "./resources/assets/logo.png") }
            }),
            _vm._v(" "),
            _c("h6", [_c("b", [_vm._v("Driptea")])]),
            _vm._v(" "),
            _c("h6", [
              _vm._v("A.C. Cortes Avenue Across UCLM, Mandaue City, 6014 Cebu")
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "float-right",
                staticStyle: { "font-size": "12px" },
                attrs: { id: "app" }
              },
              [
                _c("b", [
                  _vm._v(
                    "\r\n               " +
                      _vm._s(_vm.datetime) +
                      "\r\n            "
                  )
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "table",
            { staticClass: "table table-responsive", attrs: { id: "myTable" } },
            [
              _vm._m(0),
              _vm._v(" "),
              _vm._l(_vm.showData, function(item, i) {
                return _c("tr", { key: i }, [
                  _c("td", { staticStyle: { "font-size": "12px" } }, [
                    _c("b", [
                      _vm._v(
                        _vm._s(
                          item.order_product
                            ? item.order_product[0].productName
                            : ""
                        )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", { staticStyle: { "font-size": "12px" } }, [
                    _c("b", [
                      _vm._v(
                        _vm._s(
                          item.same_order ? _vm.getAddOns(item.same_order) : ""
                        )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", { staticStyle: { "font-size": "12px" } }, [
                    _c("b", [
                      _vm._v(_vm._s(item.choosenPrice ? item.choosenPrice : ""))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", { staticStyle: { "font-size": "12px" } }, [
                    _c("b", [
                      _vm._v(_vm._s(item.quantity ? item.quantity : ""))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", { staticStyle: { "font-size": "12px" } }, [
                    _c("b", [
                      _vm._v(_vm._s(item.subTotal ? item.subTotal : ""))
                    ])
                  ])
                ])
              })
            ],
            2
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6", attrs: { id: "summary" } }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "text-end  display:block",
              staticStyle: { "font-size": "12px" }
            },
            [
              _vm.customerType === "fb"
                ? _c("p", [
                    _c("b", [_vm._v("Subtotal: " + _vm._s(_vm.Subtotal))])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.customerType === "fb"
                ? _c("p", [
                    _c("b", [
                      _vm._v("Delivery Fee: " + _vm._s(_vm.Delivery_Fee))
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("p", [_c("b", [_vm._v("Total: " + _vm._s(_vm.Total))])]),
              _vm._v(" "),
              _vm.customerType !== "fb"
                ? _c("p", [_c("b", [_vm._v("Amount: " + _vm._s(_vm.Amount))])])
                : _vm._e(),
              _vm._v(" "),
              _vm.customerType !== "fb"
                ? _c("p", [_c("b", [_vm._v("Change: " + _vm._s(_vm.Change))])])
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary float-right",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  return _vm.hide()
                }
              }
            },
            [_vm._v("OK")]
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", { staticStyle: { width: "260px", "font-size": "12px" } }, [
        _vm._v("Product Name")
      ]),
      _vm._v(" "),
      _c("th", { staticStyle: { width: "260px", "font-size": "12px" } }, [
        _vm._v("Add-ons")
      ]),
      _vm._v(" "),
      _c("th", { staticStyle: { "font-size": "12px" } }, [
        _vm._v("Unit Price")
      ]),
      _vm._v(" "),
      _c("th", { staticStyle: { "font-size": "12px" } }, [_vm._v("Quantity")]),
      _vm._v(" "),
      _c("th", { staticStyle: { "font-size": "12px" } }, [_vm._v("Total")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/productCategory.vue?vue&type=template&id=3cd12d30&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/products/productCategory.vue?vue&type=template&id=3cd12d30&scoped=true& ***!
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
  return _c("div", { staticClass: "sudlanan" }, [
    _c(
      "div",
      [
        _c(
          "v-btn",
          {
            staticStyle: { "margin-right": "1%" },
            attrs: { icon: "" },
            on: {
              click: function($event) {
                return _vm.previous()
              }
            }
          },
          [_c("v-icon", [_vm._v("mdi-home")])],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row firstRow" },
      [
        _c(
          "div",
          { staticClass: "col-md-6" },
          [
            _c(
              "center",
              [
                _c(
                  "v-card",
                  { staticClass: "ml-10" },
                  [
                    _c("center", [
                      _vm.customerType === "online" || _vm.customerType === "fb"
                        ? _c("div", [
                            _c("p", [_vm._v("Name: " + _vm._s(_vm.name))]),
                            _c("br"),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v("Contact#: " + _vm._s(_vm.contact))
                            ]),
                            _c("br"),
                            _vm._v(" "),
                            _c("p", [_vm._v("Address: " + _vm._s(_vm.address))])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.customerType === "walkin"
                        ? _c("img", {
                            staticStyle: {
                              width: "70px",
                              height: "50px",
                              border: "solid 1px black"
                            },
                            attrs: { src: __webpack_require__(/*! @/assets/walkin.jpg */ "./resources/assets/walkin.jpg") }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.customerType === "foodpanda"
                        ? _c("img", {
                            staticStyle: { width: "70px", height: "50px" },
                            attrs: { src: __webpack_require__(/*! @/assets/foodpanda1.png */ "./resources/assets/foodpanda1.png") }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.customerType === "grab"
                        ? _c("img", {
                            staticStyle: { width: "70px", height: "50px" },
                            attrs: { src: __webpack_require__(/*! @/assets/grab2.png */ "./resources/assets/grab2.png") }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.customerType === "fb"
                        ? _c("img", {
                            staticStyle: { width: "70px", height: "50px" },
                            attrs: { src: __webpack_require__(/*! @/assets/fb1.png */ "./resources/assets/fb1.png") }
                          })
                        : _vm._e(),
                      _c("br"),
                      _vm._v(" "),
                      _vm.customerType === "online"
                        ? _c("img", {
                            staticStyle: { width: "70px", height: "50px" },
                            attrs: { src: __webpack_require__(/*! @/assets/logo.png */ "./resources/assets/logo.png") }
                          })
                        : _vm._e(),
                      _c("br"),
                      _vm._v(" "),
                      _vm.error
                        ? _c(
                            "span",
                            {
                              staticStyle: {
                                color: "red",
                                "font-style": "italic"
                              }
                            },
                            [_vm._v("All data are required!")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "table",
                        {
                          staticClass: "table table-responsive table-bordered ",
                          attrs: { id: "myTable" }
                        },
                        [
                          _c("tr", { staticClass: "overline" }, [
                            _c("th", { staticStyle: { width: "45%" } }, [
                              _vm._v("Product Name")
                            ]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Add-ons")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Cup Type")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Unit Price")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Quantity")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Total")]),
                            _vm._v(" "),
                            _c("th", { staticStyle: { width: "15px" } }, [
                              _vm._v("❌")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            { staticClass: "Caption" },
                            _vm._l(_vm.tableData, function(item, index) {
                              return _c("tr", { key: index }, [
                                _c("td", [
                                  _vm._v(
                                    _vm._s(item.order_product[0].productName)
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.getAddOns(item.same_order)))
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.getCup(item.cupType)))
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.convert(item.choosenPrice)))
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.quantity))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.convert(item.subTotal)))
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "button",
                                    {
                                      staticStyle: { "font-size": "10px" },
                                      attrs: {
                                        type: "button",
                                        "aria-expanded": "false"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.deleteOrder(item.id)
                                        }
                                      }
                                    },
                                    [_vm._v("❌")]
                                  )
                                ])
                              ])
                            }),
                            0
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-6" }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-md-6 overline",
                          staticStyle: { "text-align": "left" }
                        },
                        [
                          _vm.customerType === "fb" ||
                          _vm.customerType === "online"
                            ? _c("p", { staticStyle: { display: "inline" } }, [
                                _vm._v("Subtotal:   ")
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.customerType === "fb" ||
                          _vm.customerType === "online"
                            ? _c("p", { staticStyle: { display: "inline" } }, [
                                _vm._v("₱ " + _vm._s(_vm.getSubTotal()))
                              ])
                            : _vm._e(),
                          _c("br"),
                          _vm._v(" "),
                          _vm.customerType === "fb" ||
                          _vm.customerType === "online"
                            ? _c("p", { staticStyle: { display: "inline" } }, [
                                _vm._v("Delivery Fee: ")
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.customerType === "fb" ||
                          _vm.customerType === "online"
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.fee,
                                    expression: "fee"
                                  }
                                ],
                                staticStyle: { display: "inline" },
                                attrs: {
                                  type: "number",
                                  placeholder: "₱ 0.00"
                                },
                                domProps: { value: _vm.fee },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.fee = $event.target.value
                                  }
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "pStyle",
                              staticStyle: { display: "inline" }
                            },
                            [_vm._v("Total:    ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "pStyle",
                              staticStyle: { display: "inline" }
                            },
                            [_vm._v("₱ " + _vm._s(_vm.convertTotalPrice()))]
                          ),
                          _c("br"),
                          _vm._v(" "),
                          _vm.customerType !== "fb" &&
                          _vm.customerType !== "online"
                            ? _c(
                                "p",
                                {
                                  staticClass: "pStyle",
                                  staticStyle: { display: "inline" }
                                },
                                [_vm._v("Amount:     ")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.customerType !== "fb" &&
                          _vm.customerType !== "online"
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.cash,
                                    expression: "cash"
                                  }
                                ],
                                staticStyle: { display: "inline" },
                                attrs: {
                                  type: "number",
                                  placeholder: "₱ 0.00"
                                },
                                domProps: { value: _vm.cash },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.cash = $event.target.value
                                  }
                                }
                              })
                            : _vm._e(),
                          _c("br"),
                          _vm._v(" "),
                          _vm.customerType !== "fb" &&
                          _vm.customerType !== "online"
                            ? _c(
                                "p",
                                {
                                  staticClass: "pStyle",
                                  staticStyle: { display: "inline" }
                                },
                                [_vm._v("Change:   ")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.customerType !== "fb" &&
                          _vm.customerType !== "online"
                            ? _c(
                                "p",
                                {
                                  staticClass: "pStyle",
                                  staticStyle: { display: "inline" }
                                },
                                [_vm._v("₱ " + _vm._s(_vm.convertChange()))]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-primary checkout overline",
                                on: { click: _vm.checkoutOrder }
                              },
                              [_vm._v("Checkout")]
                            )
                          ])
                        ]
                      )
                    ])
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
        _c("div", { staticClass: "col-md-6" }, [
          _c("div", { staticClass: "dataStyle" }, [
            _c(
              "div",
              { staticClass: "row" },
              _vm._l(_vm.data, function(item, index) {
                return _c(
                  "div",
                  { key: index, staticClass: "col-md-5 secondCol" },
                  [
                    _c(
                      "v-card",
                      {
                        staticClass: "elevation-5",
                        attrs: { "max-width": "250", height: "250" }
                      },
                      [
                        _c("v-img", {
                          attrs: {
                            "max-width": "250",
                            height: "250",
                            src: item.image
                          },
                          on: {
                            click: function($event) {
                              return _vm.redirect(item.productCategory)
                            }
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              }),
              0
            )
          ])
        ]),
        _vm._v(" "),
        _vm.receiptShow
          ? _c("receipt", { attrs: { showData: _vm.receiptData } })
          : _vm._e(),
        _vm._v(" "),
        _vm.loadingShow ? _c("loading") : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/fb1.png":
/*!**********************************!*\
  !*** ./resources/assets/fb1.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/fb1.png?ffcb5b5d03e7882102366b4575c806bd";

/***/ }),

/***/ "./resources/assets/foodpanda1.png":
/*!*****************************************!*\
  !*** ./resources/assets/foodpanda1.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/foodpanda1.png?e1e21d0133255c394f0b0ca4478eacb9";

/***/ }),

/***/ "./resources/assets/grab2.png":
/*!************************************!*\
  !*** ./resources/assets/grab2.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/grab2.png?d1e18818f91ee4817d8719b3b72b33de";

/***/ }),

/***/ "./resources/assets/logo.png":
/*!***********************************!*\
  !*** ./resources/assets/logo.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo.png?0bd4e3a1c79c8ebe08534e67d74f332d";

/***/ }),

/***/ "./resources/assets/walkin.jpg":
/*!*************************************!*\
  !*** ./resources/assets/walkin.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/walkin.jpg?e225ba36f9a7baac8aac3abe6dac6ddd";

/***/ }),

/***/ "./resources/js/config.js":
/*!********************************!*\
  !*** ./resources/js/config.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  PUSHER_APP_ID: '1095899',
  PUSHER_APP_KEY: '426e9e5cd2a694fa7c40',
  PUSHER_APP_SECRET: '4f62e10c794a3d0f2161',
  PUSHER_APP_CLUSTER: 'ap1'
});

/***/ }),

/***/ "./resources/js/modules/order/receipt.vue":
/*!************************************************!*\
  !*** ./resources/js/modules/order/receipt.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _receipt_vue_vue_type_template_id_337ac63e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./receipt.vue?vue&type=template&id=337ac63e&scoped=true& */ "./resources/js/modules/order/receipt.vue?vue&type=template&id=337ac63e&scoped=true&");
/* harmony import */ var _receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./receipt.vue?vue&type=script&lang=js& */ "./resources/js/modules/order/receipt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _receipt_vue_vue_type_style_index_0_id_337ac63e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./receipt.vue?vue&type=style&index=0&id=337ac63e&scoped=true&lang=css& */ "./resources/js/modules/order/receipt.vue?vue&type=style&index=0&id=337ac63e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _receipt_vue_vue_type_template_id_337ac63e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _receipt_vue_vue_type_template_id_337ac63e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "337ac63e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/order/receipt.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/order/receipt.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/modules/order/receipt.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./receipt.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/order/receipt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/order/receipt.vue?vue&type=style&index=0&id=337ac63e&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/modules/order/receipt.vue?vue&type=style&index=0&id=337ac63e&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_vue_vue_type_style_index_0_id_337ac63e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./receipt.vue?vue&type=style&index=0&id=337ac63e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/order/receipt.vue?vue&type=style&index=0&id=337ac63e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_vue_vue_type_style_index_0_id_337ac63e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_vue_vue_type_style_index_0_id_337ac63e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_vue_vue_type_style_index_0_id_337ac63e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_vue_vue_type_style_index_0_id_337ac63e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_vue_vue_type_style_index_0_id_337ac63e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/order/receipt.vue?vue&type=template&id=337ac63e&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/modules/order/receipt.vue?vue&type=template&id=337ac63e&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_vue_vue_type_template_id_337ac63e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./receipt.vue?vue&type=template&id=337ac63e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/order/receipt.vue?vue&type=template&id=337ac63e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_vue_vue_type_template_id_337ac63e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_vue_vue_type_template_id_337ac63e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/modules/products/productCategory.vue":
/*!***********************************************************!*\
  !*** ./resources/js/modules/products/productCategory.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _productCategory_vue_vue_type_template_id_3cd12d30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productCategory.vue?vue&type=template&id=3cd12d30&scoped=true& */ "./resources/js/modules/products/productCategory.vue?vue&type=template&id=3cd12d30&scoped=true&");
/* harmony import */ var _productCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productCategory.vue?vue&type=script&lang=js& */ "./resources/js/modules/products/productCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _productCategory_vue_vue_type_style_index_0_id_3cd12d30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productCategory.vue?vue&type=style&index=0&id=3cd12d30&scoped=true&lang=css& */ "./resources/js/modules/products/productCategory.vue?vue&type=style&index=0&id=3cd12d30&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _productCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _productCategory_vue_vue_type_template_id_3cd12d30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _productCategory_vue_vue_type_template_id_3cd12d30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3cd12d30",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/products/productCategory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/products/productCategory.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/modules/products/productCategory.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./productCategory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/productCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/products/productCategory.vue?vue&type=style&index=0&id=3cd12d30&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/modules/products/productCategory.vue?vue&type=style&index=0&id=3cd12d30&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_style_index_0_id_3cd12d30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./productCategory.vue?vue&type=style&index=0&id=3cd12d30&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/productCategory.vue?vue&type=style&index=0&id=3cd12d30&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_style_index_0_id_3cd12d30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_style_index_0_id_3cd12d30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_style_index_0_id_3cd12d30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_style_index_0_id_3cd12d30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_style_index_0_id_3cd12d30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/products/productCategory.vue?vue&type=template&id=3cd12d30&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/modules/products/productCategory.vue?vue&type=template&id=3cd12d30&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_template_id_3cd12d30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./productCategory.vue?vue&type=template&id=3cd12d30&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/productCategory.vue?vue&type=template&id=3cd12d30&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_template_id_3cd12d30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_template_id_3cd12d30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);