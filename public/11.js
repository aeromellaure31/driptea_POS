(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      datetime: moment__WEBPACK_IMPORTED_MODULE_0___default()().format('MMMM Do YYYY, h:mm:ss a'),
      myTable: [{
        ProductName: 'Okinawa',
        Unit_price: '79',
        Qty: '2',
        Price: '158'
      }, {
        ProductName: 'Hokkaido',
        Unit_price: '79',
        Qty: '3',
        Price: '158'
      }, {
        ProductName: 'Pearl Milktea',
        Unit_price: '79',
        Qty: '4',
        Price: '158'
      }],
      summary: [{
        Subtotal: '1422',
        Delivery_Fee: '79',
        Total: '9',
        Incash: '1501',
        Change: '0'
      }]
    };
  },
  mounted: function mounted() {
    console.log('Sample gawas');
  },
  methods: {
    hide: function hide() {
      console.log('sadfsadfsdaf');
      this.$parent.hideReceipt();
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      deliveryFee: 0,
      totalPrice: 0,
      incash: 0,
      change: 0,
      subTotalPrice: 0,
      cash: null,
      fee: null,
      receiptShow: false
    };
  },
  components: {
    receipt: _order_receipt_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mounted: function mounted() {
    this.retrieveCategory();
    this.retrieveProduct();
  },
  methods: {
    hideReceipt: function hideReceipt() {
      this.receiptShow = false;
    },
    addingFee: function addingFee() {
      this.deliveryFee = this.fee;
    },
    addingIncash: function addingIncash() {
      this.incash = this.cash;
    },
    convertFee: function convertFee() {
      return parseInt(this.deliveryFee).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    },
    convertTotalPrice: function convertTotalPrice() {
      var total = this.subTotalPrice + parseInt(this.deliveryFee);
      this.totalPrice = total;
      return parseInt(total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    },
    convertIncash: function convertIncash() {
      return parseInt(this.incash).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    },
    convertChange: function convertChange() {
      if (this.incash > this.totalPrice) {
        var amountChange = this.incash - this.totalPrice;
        return amountChange.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      } else {
        return this.change.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      }
    },
    retrieveCategory: function retrieveCategory() {
      var _this = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'retrieveCategory').then(function (res) {
        _this.data = res.data.addCategory;
      });
    },
    getSubTotal: function getSubTotal() {
      if (this.tableData != null) {
        var total = 0;
        this.tableData.forEach(function (element) {
          total += element.subTotal;
        });
        this.subTotalPrice = total;
        return parseInt(total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      }
    },
    redirect: function redirect(param) {
      _router__WEBPACK_IMPORTED_MODULE_1__["default"].push('/chosenCategory/' + param)["catch"](function () {});
    },
    retrieveProduct: function retrieveProduct() {
      var _this2 = this;

      var params = {
        id: localStorage.getItem('customerId')
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'retrieveOrder', params).then(function (res) {
        _this2.tableData = res.data.order;
      });
    },
    deleteOrder: function deleteOrder(prodId) {
      var _this3 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'deleteOrder', {
        id: prodId
      }).then(function (res) {
        _this3.retrieveProduct();
      });
    },
    checkoutOrder: function checkoutOrder() {
      var params = {
        id: localStorage.getItem('customerId'),
        status: 'complete'
      };
      this.receiptShow = true; // this.$axios.post(AUTH.url + 'updateStatus', params).then(res => {
      //     this.retrieveProduct()
      //     this.receiptShow = true
      // localStorage.removeItem('customerId')
      // localStorage.removeItem('customerType')
      // ROUTER.push('/casherDashboard').catch(()=>{})
      // })
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/productCategory.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/products/productCategory.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.checkout{\r\n    margin-top: 3%;\r\n    height: 40% !important;\r\n    font-size: 20px; width: 200px;\n}\n.btn{\r\n    height: 33px;\r\n    width: 150px;\n}\ninput{\r\n    height: 35px;\r\n    border-radius: 5px;\n}\n::-webkit-scrollbar {\r\n  width: 1px;\n}\n.pStyle{\r\n    font-weight: bold;\n}\np{\r\n    margin-top: -10%;\n}\n.firstRow{\r\n    margin-bottom: 5%;\r\n    margin-top: 3%;\n}\n.sudlanan{\r\n    background-color: black;\r\n    height: 92.8vh;\r\n    overflow: hidden;\n}\ntable{\r\n    height: 450px;\n}\n.table tr th{\r\n   text-align: center;\n}\n.firstCol{\r\n    border-radius: 5px;\r\n    box-shadow: 5px 5px gray;\r\n    width: 90%;\r\n    margin-top: 5%;\r\n    background-color:white;\r\n    height: 650px;\n}\n.secondCol{\r\n    border-radius: 5px;\r\n    box-shadow: 5px 5px gray;\r\n    margin-top: 5%;\r\n    margin-right: 2%;\r\n    margin-left: 3%;\r\n    height: 150px;\r\n    background-color: white;\n}\n.imgItem{\r\n    height: 150px;\r\n    width: 100%;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/productCategory.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/products/productCategory.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./productCategory.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/productCategory.vue?vue&type=style&index=0&lang=css&");

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
              attrs: { src: __webpack_require__(/*! @/assets/driptea.png */ "./resources/assets/driptea.png") }
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
                _vm._v(
                  "\r\n               " +
                    _vm._s(_vm.datetime) +
                    "\r\n            "
                )
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
              _vm._l(_vm.myTable, function(item, i) {
                return _c("tr", { key: i }, [
                  _c("td", { staticStyle: { "font-size": "12px" } }, [
                    _vm._v(_vm._s(item.ProductName))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticStyle: { "font-size": "12px" } }, [
                    _vm._v(_vm._s(item.Unit_price))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticStyle: { "font-size": "12px" } }, [
                    _vm._v(_vm._s(item.Qty))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticStyle: { "font-size": "12px" } }, [
                    _vm._v(_vm._s(item.Price))
                  ])
                ])
              })
            ],
            2
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6", attrs: { id: "summary" } }),
          _vm._v(" "),
          _vm._l(_vm.summary, function(items, i) {
            return _c("div", { key: i, staticStyle: { "font-size": "12px" } }, [
              _c("p", [_vm._v("Change: " + _vm._s(items.Change))]),
              _vm._v(" "),
              _c("p", [_vm._v("Incash: " + _vm._s(items.Incash))]),
              _vm._v(" "),
              _c("p", [_vm._v("Total: " + _vm._s(items.Total))]),
              _vm._v(" "),
              _c("p", [_vm._v("Delivery Fee: " + _vm._s(items.Delivery_Fee))]),
              _vm._v(" "),
              _c("p", [_vm._v("Subtotal: " + _vm._s(items.Subtotal))])
            ])
          }),
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
            [_vm._v("Close")]
          )
        ],
        2
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/productCategory.vue?vue&type=template&id=3cd12d30&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/products/productCategory.vue?vue&type=template&id=3cd12d30& ***!
  \************************************************************************************************************************************************************************************************************************/
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
      { staticClass: "row firstRow" },
      [
        _c(
          "div",
          { staticClass: "col-md-6" },
          [
            _c("center", [
              _c(
                "div",
                { staticClass: "firstCol row" },
                [
                  _c("center", [
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
                          attrs: { src: __webpack_require__(/*! @/assets/foodpanda.png */ "./resources/assets/foodpanda.png") }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.customerType === "grab"
                      ? _c("img", {
                          staticStyle: { width: "70px", height: "50px" },
                          attrs: { src: __webpack_require__(/*! @/assets/grab.png */ "./resources/assets/grab.png") }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.customerType === "fb"
                      ? _c("img", {
                          staticStyle: { width: "70px", height: "50px" },
                          attrs: { src: __webpack_require__(/*! @/assets/fb.jpeg */ "./resources/assets/fb.jpeg") }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "table",
                      {
                        staticClass: "table table-responsive table-bordered",
                        attrs: { id: "myTable" }
                      },
                      [
                        _c("tr", [
                          _c("th", { staticStyle: { width: "200px" } }, [
                            _vm._v("Product Name")
                          ]),
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
                          _vm._l(_vm.tableData, function(item, index) {
                            return _c("tr", { key: index }, [
                              _c("td", [
                                _vm._v(
                                  _vm._s(item.order_product[0].productName)
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.choosenPrice))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.quantity))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.subTotal))]),
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
                  _c("div", { staticClass: "col-md-6" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-md-3",
                      staticStyle: { "text-align": "left" }
                    },
                    [
                      _c("p", [_vm._v("Subtotal:")]),
                      _vm._v(" "),
                      _c("p", [_vm._v("Delivery Fee: ")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "pStyle" }, [_vm._v("Total: ")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "pStyle" }, [_vm._v("Incash: ")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "pStyle" }, [_vm._v("Change: ")])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-md-3",
                      staticStyle: { "text-align": "left" }
                    },
                    [
                      _c("p", [_vm._v("₱ " + _vm._s(_vm.getSubTotal()))]),
                      _vm._v(" "),
                      _c("p", [_vm._v("₱ " + _vm._s(_vm.convertFee()))]),
                      _vm._v(" "),
                      _c("p", { staticClass: "pStyle" }, [
                        _vm._v("₱ " + _vm._s(_vm.convertTotalPrice()))
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "pStyle" }, [
                        _vm._v("₱ " + _vm._s(_vm.convertIncash()))
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "pStyle" }, [
                        _vm._v("₱ " + _vm._s(_vm.convertChange()))
                      ])
                    ]
                  )
                ],
                1
              )
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-6" },
          [
            _c(
              "div",
              {
                staticClass: "row",
                staticStyle: { height: "600px", "overflow-y": "scroll" }
              },
              _vm._l(_vm.data, function(item, index) {
                return _c(
                  "div",
                  { key: index, staticClass: "col-md-5 secondCol" },
                  [
                    _c("img", {
                      staticClass: "imgItem",
                      attrs: { src: item.image },
                      on: {
                        click: function($event) {
                          return _vm.redirect(item.productCategory)
                        }
                      }
                    })
                  ]
                )
              }),
              0
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row", staticStyle: { "margin-top": "5%" } },
              [
                _c(
                  "div",
                  { staticClass: "col-md-6" },
                  [
                    _c("center", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.cash,
                            expression: "cash"
                          }
                        ],
                        attrs: {
                          type: "number",
                          placeholder: "enter cash paid..."
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
                      }),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          on: { click: _vm.addingIncash }
                        },
                        [_vm._v("Add Cash")]
                      )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-md-6" },
                  [
                    _c("center", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.fee,
                            expression: "fee"
                          }
                        ],
                        attrs: {
                          type: "number",
                          placeholder: "enter delivery fee..."
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
                      }),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          on: { click: _vm.addingFee }
                        },
                        [_vm._v("Add Delivery Fee")]
                      )
                    ])
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _c("center", [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary checkout",
                  on: { click: _vm.checkoutOrder }
                },
                [_vm._v("Checkout")]
              )
            ])
          ],
          1
        ),
        _vm._v(" "),
        _vm.receiptShow ? _c("receipt") : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/driptea.png":
/*!**************************************!*\
  !*** ./resources/assets/driptea.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/driptea.png?88c09b718fd37631ba2a7a374b7a58c6";

/***/ }),

/***/ "./resources/assets/fb.jpeg":
/*!**********************************!*\
  !*** ./resources/assets/fb.jpeg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/fb.jpeg?7e0e07d9d8d59c08fb811c51b0e3338b";

/***/ }),

/***/ "./resources/assets/foodpanda.png":
/*!****************************************!*\
  !*** ./resources/assets/foodpanda.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/foodpanda.png?844b251b92d883a0725a4e8275450576";

/***/ }),

/***/ "./resources/assets/grab.png":
/*!***********************************!*\
  !*** ./resources/assets/grab.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/grab.png?8779ede2cc6b005dedfdc4b8cc05f2aa";

/***/ }),

/***/ "./resources/assets/walkin.jpg":
/*!*************************************!*\
  !*** ./resources/assets/walkin.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/walkin.jpg?e225ba36f9a7baac8aac3abe6dac6ddd";

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
/* harmony import */ var _productCategory_vue_vue_type_template_id_3cd12d30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productCategory.vue?vue&type=template&id=3cd12d30& */ "./resources/js/modules/products/productCategory.vue?vue&type=template&id=3cd12d30&");
/* harmony import */ var _productCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productCategory.vue?vue&type=script&lang=js& */ "./resources/js/modules/products/productCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _productCategory_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productCategory.vue?vue&type=style&index=0&lang=css& */ "./resources/js/modules/products/productCategory.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _productCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _productCategory_vue_vue_type_template_id_3cd12d30___WEBPACK_IMPORTED_MODULE_0__["render"],
  _productCategory_vue_vue_type_template_id_3cd12d30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
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

/***/ "./resources/js/modules/products/productCategory.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************!*\
  !*** ./resources/js/modules/products/productCategory.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./productCategory.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/productCategory.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/products/productCategory.vue?vue&type=template&id=3cd12d30&":
/*!******************************************************************************************!*\
  !*** ./resources/js/modules/products/productCategory.vue?vue&type=template&id=3cd12d30& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_template_id_3cd12d30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./productCategory.vue?vue&type=template&id=3cd12d30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/productCategory.vue?vue&type=template&id=3cd12d30&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_template_id_3cd12d30___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_template_id_3cd12d30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);