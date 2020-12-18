(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/orderInventory.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventory/orderInventory.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basic_loading_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../basic/loading.vue */ "./resources/js/basic/loading.vue");
/* harmony import */ var vue_json_to_csv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-json-to-csv */ "./node_modules/vue-json-to-csv/dist/vue-json-to-csv.js");
/* harmony import */ var vue_json_to_csv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_json_to_csv__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth */ "./resources/js/services/auth/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../router */ "./resources/js/router/index.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config.js */ "./resources/js/config.js");
/* harmony import */ var _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-vue-grids */ "./node_modules/@syncfusion/ej2-vue-grids/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      toolbarOptions: ['ExcelExport'],
      formatDate: moment__WEBPACK_IMPORTED_MODULE_6___default()(new Date()).format('MM/DD/YYYY Hh:mm'),
      tableData: [],
      productData: [],
      categoryAll: [],
      category: ["Low Dose", "High Dose", "Over Dose"],
      loadingShow: false,
      categoryData: [],
      oneProd: [],
      prod: [],
      categoryName: "",
      finalData: [],
      newDataStorage: [],
      changeName: "lowDose",
      storeData: [],
      choosenDate: false,
      dialogConfirmation: false,
      newDateStorage: [],
      adminName: '',
      dates: [new Date().toISOString().substr(0, 10)],
      overAllTotal: 0
    };
  },
  components: {
    loading: _basic_loading_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    VueJsonToCsv: vue_json_to_csv__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  provide: {
    grid: [_syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_5__["Toolbar"], _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_5__["ExcelExport"]]
  },
  computed: {
    dateRangeText: function dateRangeText() {
      return this.dates.join(' ~ ');
    }
  },
  mounted: function mounted() {
    this.retrieveCategory();
    this.retrieveCheckout();
    this.retrieveProducts();
    this.getAdmin();
  },
  methods: {
    toolbarClick: function toolbarClick(args) {
      if (args.item.id === 'Grid_excelexport') {
        var excelExportProperties = {
          fileName: this.formatDate + ' Order inventory.xlsx',
          header: {
            headerRows: 7,
            rows: [{
              cells: [{
                colSpan: this.categoryAll.length + 4,
                value: "Driptea System",
                style: {
                  fontColor: '#C67878',
                  fontSize: 20,
                  hAlign: 'Center',
                  bold: true
                }
              }]
            }, {
              cells: [{
                colSpan: this.categoryAll.length + 4,
                value: "A.C. Cortes Ave., Looc",
                style: {
                  fontColor: '#C67878',
                  fontSize: 15,
                  hAlign: 'Center',
                  bold: true
                }
              }]
            }, {
              cells: [{
                colSpan: this.categoryAll.length + 4,
                value: "6014 Mandaue City, Philippine",
                style: {
                  fontColor: '#C67878',
                  fontSize: 15,
                  hAlign: 'Center',
                  bold: true
                }
              }]
            }, {
              cells: [{
                colSpan: this.categoryAll.length + 4,
                value: "0917 329 7269",
                style: {
                  fontColor: '#C67878',
                  fontSize: 15,
                  hAlign: 'Center',
                  bold: true
                }
              }]
            }, {
              cells: [{
                colSpan: this.categoryAll.length + 4,
                hyperlink: {
                  target: 'https://www.facebook.com/driptealoocmandaue/',
                  displayText: 'www.facebook.com/driptealoocmandaue'
                },
                style: {
                  hAlign: 'Center'
                }
              }]
            }, {
              cells: [{
                colSpan: this.categoryAll.length + 4,
                hyperlink: {
                  target: 'samuelazurajr@gmail.com'
                },
                style: {
                  hAlign: 'Center'
                }
              }]
            }]
          },
          footer: {
            footerRows: 3,
            rows: [{
              cells: [{
                colSpan: this.categoryAll.length + 4,
                value: "Total Quantity Used: " + this.overAllTotal,
                style: {
                  fontSize: 15,
                  hAlign: 'Right',
                  bold: true
                }
              }]
            }, {
              cells: [{
                colSpan: this.categoryAll.length + 4,
                value: "Print By: " + this.adminName + '  ' + moment__WEBPACK_IMPORTED_MODULE_6___default()(new Date()).format('MM/DD/YYYY'),
                style: {
                  fontSize: 15,
                  hAlign: 'Left',
                  bold: true
                }
              }]
            }]
          }
        };
        this.$refs.grid.excelExport(excelExportProperties);
      }
    },
    getAdmin: function getAdmin() {
      var _this = this;

      this.loadingShow = true;
      var params = {
        uname: localStorage.getItem('adminId')
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].url + "getUserData", params, _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].config).then(function (response) {
        _this.loadingShow = false;

        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].deauthenticate();
        }

        _this.adminName = response.data.userdata[0].fname + ' ' + response.data.userdata[0].lname;
      });
    },
    showModal: function showModal() {
      this.retrieveChoosenData();
    },
    downloadData: function downloadData() {
      var _this2 = this;

      this.storeData = [];
      this.overAllTotal = 0;
      this.newDataStorage.forEach(function (items) {
        var list = {
          Date: _this2.getDate(items[0].get_customer[0].created_at),
          Name: items[0].get_customer[0].customerName ? items[0].get_customer[0].customerName : '',
          Address: items[0].get_customer[0].customerAddress ? items[0].get_customer[0].customerAddress : ''
        };
        var productName = [];

        _this2.category.forEach(function (element) {
          _this2.productData.forEach(function (e) {
            if (e.productCategory === _this2.categoryName) {
              productName.push(e.productName);
            }
          });
        });

        var categoryAllStore = [];

        _this2.prod.forEach(function (item, index) {
          var lowLength = productName.length / 3;
          var highLength = lowLength + lowLength;
          var overLength = highLength + lowLength;

          var a = _this2.getAllValue(item, items, index);

          if (index < lowLength) {
            list['LowDose ' + productName[index]] = a;
            categoryAllStore.push('LowDose ' + productName[index]);
          } else if (index < highLength && index >= lowLength) {
            list['HighDose ' + productName[index]] = a;
            categoryAllStore.push('HighDose ' + productName[index]);
          } else if (index < overLength && index >= highLength) {
            list['OverDose ' + productName[index]] = a;
            categoryAllStore.push('OverDose ' + productName[index]);
          }
        });

        list['Total'] = _this2.getTotal(items);
        _this2.categoryAll = categoryAllStore;
        _this2.overAllTotal += _this2.getTotal(items);

        _this2.storeData.push(list);
      });
      this.choosenDate = true;
    },
    getAllValue: function getAllValue(item, items, index) {
      var total = 0;
      var category = "lowDose";
      var lowLength = this.prod.length / 3;
      var highLength = lowLength + lowLength;
      var overLength = highLength + lowLength;
      var a = 0;

      for (var i = 0; i < this.prod.length; i++) {
        if (a < lowLength) {
          if (index === a) {
            category = "lowDose";
            break;
          } else {
            a++;
          }
        } else if (a < highLength && a >= lowLength) {
          if (index === a) {
            category = "highDose";
            break;
          } else {
            a++;
          }
        } else if (a < overLength && a >= highLength) {
          if (index === a) {
            category = "overDose";
            break;
          } else {
            a++;
          }
        }
      }

      items.forEach(function (el) {
        if (el.size === category) {
          if (el.order_product[0].id === item.id) {
            total += el.quantity;
          }
        }
      });
      return total;
    },
    getTotal: function getTotal(items) {
      var subTotal = 0;
      items.forEach(function (el) {
        subTotal += el.quantity;
      });
      return subTotal;
    },
    getDate: function getDate(date) {
      return moment__WEBPACK_IMPORTED_MODULE_6___default()(date).format("MM/DD/YYYY");
    },
    retrieveCheckout: function retrieveCheckout() {
      var _this3 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].url + "retrieveAllCheckouts", {}, _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].config).then(function (res) {
        _this3.loadingShow = false;

        if (res.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].deauthenticate();
        }

        _this3.dataMethod(res.data.storeOrder);
      });
    },
    dataMethod: function dataMethod(item) {
      var data = [];
      Object.keys(item).forEach(function (element) {
        data.push(item[element]);
      });
      this.finalData = data.reverse();
    },
    retrieveChoosenData: function retrieveChoosenData() {
      var _this4 = this;

      this.loadingShow = true;
      var params = {
        start: this.dates[0] > this.dates[1] ? this.dates[1] : this.dates[0],
        end: this.dates[1] ? this.dates[0] > this.dates[1] ? this.dates[0] : this.dates[1] : this.dates[0]
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].url + "retrieveChoosenCheckouts", params, _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].config).then(function (res) {
        _this4.loadingShow = false;

        if (res.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].deauthenticate();
        }

        var data = [];
        Object.keys(res.data.storeOrder).forEach(function (element) {
          data.push(res.data.storeOrder[element]);
        });
        _this4.newDataStorage = data.reverse();

        _this4.downloadData();
      });
    },
    retrieveCategory: function retrieveCategory() {
      var _this5 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].url + "retrieveCategoryAscending", {}, _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].config).then(function (res) {
        if (res.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].deauthenticate();
        }

        _this5.categoryData = res.data.addCategory;
        _this5.categoryName = res.data.addCategory[0].productCategory;
        _this5.loadingShow = false;
      });
    },
    retrieveProducts: function retrieveProducts() {
      var _this6 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].url + "RetrieveWithDelete", {}, _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].deauthenticate();
        }

        _this6.productData = response.data.product;
        _this6.loadingShow = false;

        _this6.getProdLength();
      });
    },
    getProdLength: function getProdLength() {
      var _this7 = this;

      this.loadingShow = true;
      var storeOneProd = [];
      this.productData.forEach(function (e) {
        if (e.productCategory === _this7.categoryName) {
          storeOneProd.push(e);
        }
      });
      this.oneProd = storeOneProd;
      var storeProd = [];

      for (var i = 0; i < this.category.length; i++) {
        this.productData.forEach(function (el) {
          if (el.productCategory === _this7.categoryName) {
            storeProd.push(el);
          }
        });
      }

      this.prod = storeProd;
      this.loadingShow = false;
    },
    changeCategory: function changeCategory(param) {
      this.categoryName = param;
      this.getProdLength();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/orderInventory.vue?vue&type=style&index=0&id=1e034772&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventory/orderInventory.vue?vue&type=style&index=0&id=1e034772&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://cdn.syncfusion.com/ej2/material.css);", ""]);

// module
exports.push([module.i, "\n.colorstyle[data-v-1e034772]{\r\n    width: 25%;\r\n    color: white;\r\n    background-color: #ff5b04;\r\n    border-top-style: hidden;\r\n    border-right-style: hidden;\r\n    border-left-style: hidden;\r\n    border-bottom-style: white;\n}\n.calendarDate[data-v-1e034772]{\r\n    width: 0%;\r\n    margin-top: 2.3%;\r\n    margin-right: 3%;\n}\n.zui-table[data-v-1e034772] {\r\n  border: none;\r\n  /* border-right: solid 1px #DDEFEF; */\r\n  border-collapse: separate;\r\n  border-spacing: 0;\r\n  font: normal 13px Arial, sans-serif;\n}\n.zui-table thead th[data-v-1e034772] {\r\n  /* background-color: #DDEFEF; */\r\n  border: none;\r\n  color: #336b6b;\r\n  padding: 10px;\r\n  text-align: left;\r\n  /* text-shadow: 1px 1px 1px #fff; */\r\n  white-space: nowrap;\n}\n.zui-table tbody td[data-v-1e034772] {\r\n  /* border-bottom: solid 1px #DDEFEF; */\r\n  color: #333;\r\n  padding: 10px;\r\n  /* text-shadow: 1px 1px 1px #fff; */\r\n  white-space: nowrap;\n}\n.zui-wrapper[data-v-1e034772] {\r\n  position: relative;\n}\n.zui-scroller[data-v-1e034772] {\r\n  margin-left: 490px;\r\n  overflow-x: scroll;\r\n  overflow-y: visible;\r\n  padding-bottom: 5px;\r\n  width: 600px;\n}\n.zui-table .zui-sticky-col2[data-v-1e034772] {\r\n  /* border-right: solid 1px #DDEFEF; */\r\n  left: 0;\r\n  position: absolute;\r\n  top: auto;\r\n  width: 110px;\n}\n.zui-table .zui-sticky-col3[data-v-1e034772] {\r\n  /* border-right: solid 1px #DDEFEF; */\r\n  left: 110px;\r\n  position: absolute;\r\n  top: auto;\r\n  width: 180px;\n}\n.zui-table .zui-sticky-col4[data-v-1e034772] {\r\n  /* border-right: solid 1px #DDEFEF; */\r\n  left: 290px;\r\n  position: absolute;\r\n  top: auto;\r\n  width: 200px;\n}\n.zui-table .zui-sticky-col5[data-v-1e034772] {\r\n  /* border-right: solid 1px #DDEFEF; */\r\n  left: 1090px;\r\n  position: absolute;\r\n  top: auto;\r\n  width: 100px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/orderInventory.vue?vue&type=style&index=0&id=1e034772&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventory/orderInventory.vue?vue&type=style&index=0&id=1e034772&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./orderInventory.vue?vue&type=style&index=0&id=1e034772&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/orderInventory.vue?vue&type=style&index=0&id=1e034772&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/orderInventory.vue?vue&type=template&id=1e034772&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventory/orderInventory.vue?vue&type=template&id=1e034772&scoped=true& ***!
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
    { staticClass: "my-custom-scrollbar" },
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
                    _vm._l(_vm.categoryData, function(items, indexes) {
                      return _c(
                        "v-tab",
                        {
                          key: indexes,
                          on: {
                            click: function($event) {
                              return _vm.changeCategory(items.productCategory)
                            }
                          }
                        },
                        [_vm._v(_vm._s(items.productCategory))]
                      )
                    })
                  ],
                  2
                )
              ]
            },
            proxy: true
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "v-simple-table",
        {
          staticClass: "elevation-3 zui-table",
          attrs: { "items-per-page": 5, id: "table" },
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
                        [_vm._v(_vm._s(_vm.categoryName))]
                      ),
                      _vm._v("      \n        "),
                      _c(
                        "v-menu",
                        {
                          attrs: {
                            "close-on-content-click": false,
                            transition: "scale-transition",
                            "offset-y": "",
                            "min-width": "290px"
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "activator",
                              fn: function(ref) {
                                var on = ref.on
                                var attrs = ref.attrs
                                return [
                                  _c(
                                    "v-text-field",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          staticClass: "calendarDate",
                                          attrs: {
                                            chips: "",
                                            label: "DATE",
                                            "prepend-icon": "mdi-calendar",
                                            readonly: ""
                                          },
                                          model: {
                                            value: _vm.dateRangeText,
                                            callback: function($$v) {
                                              _vm.dateRangeText = $$v
                                            },
                                            expression: "dateRangeText"
                                          }
                                        },
                                        "v-text-field",
                                        attrs,
                                        false
                                      ),
                                      on
                                    )
                                  )
                                ]
                              }
                            }
                          ])
                        },
                        [
                          _vm._v(" "),
                          _c("v-date-picker", {
                            attrs: { range: "" },
                            model: {
                              value: _vm.dates,
                              callback: function($$v) {
                                _vm.dates = $$v
                              },
                              expression: "dates"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "mr-6",
                          attrs: { color: "success" },
                          on: {
                            click: function($event) {
                              return _vm.showModal()
                            }
                          }
                        },
                        [_vm._v("Find")]
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
          _c("div", { staticClass: "zui-wrapper" }, [
            _c("div", { staticClass: "zui-scroller" }, [
              _c("thead", [
                _c(
                  "tr",
                  [
                    _c(
                      "th",
                      {
                        staticClass: "zui-sticky-col2",
                        staticStyle: { "text-align": "center" },
                        attrs: { rowspan: "3" }
                      },
                      [_vm._v("Date")]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass: "zui-sticky-col3",
                        staticStyle: { "text-align": "center" },
                        attrs: { rowspan: "3" }
                      },
                      [_vm._v("Name")]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass: "zui-sticky-col4",
                        staticStyle: { "text-align": "center" },
                        attrs: { rowspan: "3" }
                      },
                      [_vm._v("Address")]
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.category, function(item, index) {
                      return _c(
                        "th",
                        {
                          key: index,
                          staticStyle: { "text-align": "center" },
                          attrs: { colspan: _vm.oneProd.length }
                        },
                        [
                          _vm._v(
                            "\n              " +
                              _vm._s(item) +
                              "\n              "
                          ),
                          _c(
                            "tr",
                            _vm._l(_vm.productData, function(i, ind) {
                              return _vm.categoryName === i.productCategory
                                ? _c(
                                    "th",
                                    {
                                      key: ind,
                                      staticStyle: { "text-align": "center" }
                                    },
                                    [_vm._v(_vm._s(i.productName))]
                                  )
                                : _vm._e()
                            }),
                            0
                          )
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass: "zui-sticky-col5",
                        attrs: { rowspan: "3" }
                      },
                      [_vm._v("Total")]
                    )
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.finalData, function(items, indexes) {
                  return _c(
                    "tr",
                    { key: indexes },
                    [
                      _c(
                        "td",
                        {
                          staticClass: "zui-sticky-col2",
                          staticStyle: { "text-align": "center" }
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.getDate(items[0].get_customer[0].created_at)
                            )
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "zui-sticky-col3",
                          staticStyle: { "text-align": "center" }
                        },
                        [
                          _vm._v(
                            _vm._s(
                              items[0].get_customer[0].customerName
                                ? items[0].get_customer[0].customerName
                                : " "
                            )
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "zui-sticky-col4",
                          staticStyle: { "text-align": "center" }
                        },
                        [
                          _vm._v(
                            _vm._s(
                              items[0].get_customer[0].customerAddress
                                ? items[0].get_customer[0].customerAddress
                                : " "
                            )
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.prod, function(item, index) {
                        return _c(
                          "td",
                          {
                            key: index,
                            staticStyle: { "text-align": "center" }
                          },
                          [_vm._v(_vm._s(_vm.getAllValue(item, items, index)))]
                        )
                      }),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "zui-sticky-col5",
                          staticStyle: {
                            "text-align": "center",
                            "font-weight": "bold"
                          }
                        },
                        [_vm._v(_vm._s(_vm.getTotal(items)) + " quantity")]
                      )
                    ],
                    2
                  )
                }),
                0
              )
            ])
          ])
        ]
      ),
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
                    _c("empty", {
                      attrs: { title: "No Order in this Date/s" }
                    }),
                    _vm._v(" "),
                    _c("v-card-actions", [_c("v-spacer")], 1)
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
                attrs: { persistent: "", "max-width": "1000px" },
                model: {
                  value: _vm.choosenDate,
                  callback: function($$v) {
                    _vm.choosenDate = $$v
                  },
                  expression: "choosenDate"
                }
              },
              [
                _c(
                  "v-card",
                  [
                    _c("div", { staticClass: "modal-header" }, [
                      _c("span", { staticClass: "headline" }, [
                        _vm._v("Export as Excel")
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "close",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              _vm.choosenDate = false
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
                          "ejs-grid",
                          {
                            ref: "grid",
                            attrs: {
                              id: "Grid",
                              dataSource: _vm.storeData,
                              toolbar: _vm.toolbarOptions,
                              height: "270px",
                              allowPaging: true,
                              allowExcelExport: true,
                              toolbarClick: _vm.toolbarClick
                            }
                          },
                          [
                            _c(
                              "e-columns",
                              [
                                _c("e-column", {
                                  attrs: {
                                    field: "Date",
                                    headerText: "Date",
                                    width: "120"
                                  }
                                }),
                                _vm._v(" "),
                                _c("e-column", {
                                  attrs: {
                                    field: "Name",
                                    headerText: "Customer's Name",
                                    width: "150"
                                  }
                                }),
                                _vm._v(" "),
                                _c("e-column", {
                                  attrs: {
                                    field: "Address",
                                    headerText: "Address",
                                    width: "150"
                                  }
                                }),
                                _vm._v(" "),
                                _vm._l(_vm.categoryAll, function(i, ind) {
                                  return _c("e-column", {
                                    key: ind,
                                    attrs: {
                                      field: i,
                                      headerText: i,
                                      width: "150"
                                    }
                                  })
                                }),
                                _vm._v(" "),
                                _c("e-column", {
                                  attrs: {
                                    field: "Total",
                                    headerText: "Total Quantity",
                                    width: "150"
                                  }
                                })
                              ],
                              2
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-spacer")
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

/***/ "./resources/js/modules/inventory/orderInventory.vue":
/*!***********************************************************!*\
  !*** ./resources/js/modules/inventory/orderInventory.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _orderInventory_vue_vue_type_template_id_1e034772_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderInventory.vue?vue&type=template&id=1e034772&scoped=true& */ "./resources/js/modules/inventory/orderInventory.vue?vue&type=template&id=1e034772&scoped=true&");
/* harmony import */ var _orderInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderInventory.vue?vue&type=script&lang=js& */ "./resources/js/modules/inventory/orderInventory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _orderInventory_vue_vue_type_style_index_0_id_1e034772_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orderInventory.vue?vue&type=style&index=0&id=1e034772&scoped=true&lang=css& */ "./resources/js/modules/inventory/orderInventory.vue?vue&type=style&index=0&id=1e034772&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _orderInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _orderInventory_vue_vue_type_template_id_1e034772_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _orderInventory_vue_vue_type_template_id_1e034772_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1e034772",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/inventory/orderInventory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/inventory/orderInventory.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/modules/inventory/orderInventory.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orderInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./orderInventory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/orderInventory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orderInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/inventory/orderInventory.vue?vue&type=style&index=0&id=1e034772&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/modules/inventory/orderInventory.vue?vue&type=style&index=0&id=1e034772&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_orderInventory_vue_vue_type_style_index_0_id_1e034772_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./orderInventory.vue?vue&type=style&index=0&id=1e034772&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/orderInventory.vue?vue&type=style&index=0&id=1e034772&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_orderInventory_vue_vue_type_style_index_0_id_1e034772_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_orderInventory_vue_vue_type_style_index_0_id_1e034772_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_orderInventory_vue_vue_type_style_index_0_id_1e034772_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_orderInventory_vue_vue_type_style_index_0_id_1e034772_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/modules/inventory/orderInventory.vue?vue&type=template&id=1e034772&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/modules/inventory/orderInventory.vue?vue&type=template&id=1e034772&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orderInventory_vue_vue_type_template_id_1e034772_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./orderInventory.vue?vue&type=template&id=1e034772&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/orderInventory.vue?vue&type=template&id=1e034772&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orderInventory_vue_vue_type_template_id_1e034772_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orderInventory_vue_vue_type_template_id_1e034772_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);