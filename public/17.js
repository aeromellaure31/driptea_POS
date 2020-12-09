(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/cupsInventory.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventory/cupsInventory.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth */ "./resources/js/services/auth/index.js");
/* harmony import */ var _basic_loading_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../basic/loading.vue */ "./resources/js/basic/loading.vue");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/logo.png */ "./resources/assets/logo.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-vue-grids */ "./node_modules/@syncfusion/ej2-vue-grids/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      toolbarOptions: ['ExcelExport', 'Search'],
      formatDate: moment__WEBPACK_IMPORTED_MODULE_3___default()(new Date()).format("MM/DD/YYYY Hh:mm"),
      modalData: [],
      downLoadData: [],
      dataInDB: [],
      search: null,
      cupName: null,
      headersForCup: [],
      loadingShow: false,
      dialogForCupSize: false,
      adminName: '',
      dates: [new Date().toISOString().substr(0, 10)]
    };
  },
  components: {
    loading: _basic_loading_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    this.tableForUpcomingCups();
    this.tableForAllCups();
    this.getAdmin();
  },
  computed: {
    dateRangeText: function dateRangeText() {
      return this.dates.join(" ~ ");
    }
  },
  provide: {
    grid: [_syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_4__["Toolbar"], _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_4__["ExcelExport"]]
  },
  methods: {
    getAdmin: function getAdmin() {
      var _this = this;

      this.loadingShow = true;
      var params = {
        uname: localStorage.getItem('adminId')
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "getUserData", params, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        _this.loadingShow = false;

        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this.adminName = response.data.userdata[0].fname + ' ' + response.data.userdata[0].lname;
      });
    },
    toolbarClick: function toolbarClick(args) {
      if (args.item.id === 'Grid_excelexport') {
        // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
        var excelExportProperties = {
          fileName: this.formatDate + ' Cups.xlsx',
          header: {
            fromTop: 0,
            height: 130,
            contents: [{
              type: 'Image',
              src: this.image,
              position: {
                x: 435,
                y: 10
              },
              size: {
                height: 100,
                width: 250
              }
            }],
            headerRows: 7,
            rows: [{
              cells: [{
                colSpan: 17,
                value: "Driptea System",
                style: {
                  fontColor: '#C67878',
                  fontSize: 25,
                  hAlign: 'Center',
                  bold: true
                }
              }]
            }, {
              cells: [{
                colSpan: 17,
                value: "A.C. Cortes Ave., Looc",
                style: {
                  fontColor: '#C67878',
                  fontSize: 20,
                  hAlign: 'Center',
                  bold: true
                }
              }]
            }, {
              cells: [{
                colSpan: 17,
                value: "6014 Mandaue City, Philippine",
                style: {
                  fontColor: '#C67878',
                  fontSize: 20,
                  hAlign: 'Center',
                  bold: true
                }
              }]
            }, {
              cells: [{
                colSpan: 17,
                value: "0917 329 7269",
                style: {
                  fontColor: '#C67878',
                  fontSize: 20,
                  hAlign: 'Center',
                  bold: true
                }
              }]
            }, {
              cells: [{
                colSpan: 17,
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
                colSpan: 17,
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
            footerRows: 2,
            rows: [{
              cells: [{
                colSpan: 2,
                value: "Print By: " + this.adminName + '  ' + moment__WEBPACK_IMPORTED_MODULE_3___default()(new Date()).format('MM/DD/YYYY'),
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
    close: function close() {
      this.dialogForCupSize = false;
      this.tableForAllCups();
    },
    searchData: function searchData() {
      var _this2 = this;

      this.dialogForCupSize = true;
      this.downLoadData = this.dataInDB;
      this.downLoadData[0]['Date'] = moment__WEBPACK_IMPORTED_MODULE_3___default()(this.dataInDB[0]['created_at']).format('MM/DD/YYYY');
      this.downLoadData.forEach(function (el, index) {
        _this2.downLoadData[index]['Date'] = moment__WEBPACK_IMPORTED_MODULE_3___default()(el.created_at).format('MM/DD/YYYY');
        _this2.downLoadData[index]['TotalOnRock'] = el.onRockLowDose + el.onRockHighDose + el.onRockOverDose;
        _this2.downLoadData[index]['TotalIncoming'] = el.incomingHighDose + el.incomingLowDose + el.incomingOverDose;
        _this2.downLoadData[index]['TotalRemaining'] = el.remainingLowDose + el.remainingHighDose + el.remainingOverDose;
        _this2.downLoadData[index]['TotalUsed'] = el.usedCupsLowDose + el.usedCupsHighDose + el.usedCupsLowDose;
      });
    },
    tableForAllCups: function tableForAllCups() {
      var _this3 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveCupSize", {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this3.dataInDB = response.data.quantityCupsInDB.reverse();
        _this3.headersForCup = [{
          text: "Date",
          value: "created_at"
        }, {
          text: "Low Dose (LD)",
          value: "onRockLowDose"
        }, {
          text: "High Dose (HD)",
          value: "onRockHighDose"
        }, {
          text: "Over Dose (OD)",
          value: "onRockOverDose"
        }, {
          text: "Total",
          value: "totalIncoming"
        }];
        _this3.cupName = "Cups Onrack";
        _this3.loadingShow = false;
      });
    },
    getTotal: function getTotal(item) {
      if (this.cupName === "Upcoming Cups") {
        return item.incomingLowDose + item.incomingHighDose + item.incomingOverDose;
      } else if (this.cupName === "Cups Onrack") {
        return item.onRockLowDose + item.onRockHighDose + item.onRockOverDose;
      } else if (this.cupName === "Used Cups") {
        return item.usedCupsLowDose + item.usedCupsHighDose + item.usedCupsOverDose;
      } else if (this.cupName === "Remaining Cups") {
        return item.remainingLowDose + item.remainingHighDose + item.remainingOverDose;
      }
    },
    getDate: function getDate(date) {
      return moment__WEBPACK_IMPORTED_MODULE_3___default()(date).format("MM/DD/YYYY");
    },
    tableForUpcomingCups: function tableForUpcomingCups() {
      var _this4 = this;

      this.loadingShow = true;
      var params = {
        dateFrom: this.dates[0] > this.dates[1] ? this.dates[1] : this.dates[0],
        dateTo: this.dates[1] ? this.dates[0] > this.dates[1] ? this.dates[0] : this.dates[1] : this.dates[0]
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveCupForInventory", params, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this4.modalData = response.data.quantityCupsInDB.reverse();
        response.data.quantityCupsInDB.forEach(function (element) {
          var thisDate = _this4.getDate(element.created_at);
        });
        _this4.headersForCup = [{
          text: "Date",
          value: "created_at"
        }, {
          text: "Low Dose (LD)",
          value: "incomingLowDose"
        }, {
          text: "High Dose (HD)",
          value: "incomingHighDose"
        }, {
          text: "Over Dose (OD)",
          value: "incomingOverDose"
        }, {
          text: "Total",
          value: "totalIncoming"
        }];
        _this4.cupName = "Upcoming Cups";
        _this4.loadingShow = false;
      });
    },
    tableForCupsOnrack: function tableForCupsOnrack() {
      var _this5 = this;

      this.loadingShow = true;
      var params = {
        dateFrom: this.dates[0] > this.dates[1] ? this.dates[1] : this.dates[0],
        dateTo: this.dates[1] ? this.dates[0] > this.dates[1] ? this.dates[0] : this.dates[1] : this.dates[0]
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveCupForInventory", params, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this5.modalData = response.data.quantityCupsInDB.reverse();
        _this5.headersForCup = [{
          text: "Date",
          value: "created_at"
        }, {
          text: "Low Dose (LD)",
          value: "onRockLowDose"
        }, {
          text: "High Dose (HD)",
          value: "onRockHighDose"
        }, {
          text: "Over Dose (OD)",
          value: "onRockOverDose"
        }, {
          text: "Total",
          value: "totalIncoming"
        }];
        _this5.cupName = "Cups Onrack";
        _this5.loadingShow = false;
      });
    },
    tableForUsedCups: function tableForUsedCups() {
      var _this6 = this;

      this.loadingShow = true;
      var params = {
        dateFrom: this.dates[0] > this.dates[1] ? this.dates[1] : this.dates[0],
        dateTo: this.dates[1] ? this.dates[0] > this.dates[1] ? this.dates[0] : this.dates[1] : this.dates[0]
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveCupForInventory", params, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this6.modalData = response.data.quantityCupsInDB.reverse();
        _this6.headersForCup = [{
          text: "Date",
          value: "created_at"
        }, {
          text: "Low Dose (LD)",
          value: "usedCupsLowDose"
        }, {
          text: "High Dose (HD)",
          value: "usedCupsHighDose"
        }, {
          text: "Over Dose (OD)",
          value: "usedCupsOverDose"
        }, {
          text: "Total",
          value: "totalIncoming"
        }];
        _this6.cupName = "Used Cups";
        _this6.loadingShow = false;
      });
    },
    tableForRemainingCups: function tableForRemainingCups() {
      var _this7 = this;

      this.loadingShow = true;
      var params = {
        dateFrom: this.dates[0] > this.dates[1] ? this.dates[1] : this.dates[0],
        dateTo: this.dates[1] ? this.dates[0] > this.dates[1] ? this.dates[0] : this.dates[1] : this.dates[0]
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveCupForInventory", params, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this7.modalData = response.data.quantityCupsInDB.reverse();
        _this7.headersForCup = [{
          text: "Date",
          value: "created_at"
        }, {
          text: "Low Dose (LD)",
          value: "remainingLowDose"
        }, {
          text: "High Dose (HD)",
          value: "remainingHighDose"
        }, {
          text: "Remaining Cups Over Dose (OD)",
          value: "remainingOverDose"
        }, {
          text: "Total",
          value: "totalIncoming"
        }];
        _this7.cupName = "Remaining Cups";
        _this7.loadingShow = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/cupsInventory.vue?vue&type=style&index=0&id=2d64b2de&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventory/cupsInventory.vue?vue&type=style&index=0&id=2d64b2de&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://cdn.syncfusion.com/ej2/material.css);", ""]);

// module
exports.push([module.i, "\n.table[data-v-2d64b2de] {\r\n  margin-left: 50px;\r\n  width: 90%;\n}\ntd[data-v-2d64b2de] {\r\n  text-align: center;\n}\n.calendarDate[data-v-2d64b2de]{\r\n  width: 0%;\r\n  margin-top: 2.3%;\r\n  margin-right: 3%;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/cupsInventory.vue?vue&type=style&index=0&id=2d64b2de&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventory/cupsInventory.vue?vue&type=style&index=0&id=2d64b2de&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./cupsInventory.vue?vue&type=style&index=0&id=2d64b2de&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/cupsInventory.vue?vue&type=style&index=0&id=2d64b2de&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/cupsInventory.vue?vue&type=template&id=2d64b2de&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventory/cupsInventory.vue?vue&type=template&id=2d64b2de&scoped=true& ***!
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
    "div",
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
                    _c("v-tab", { on: { click: _vm.tableForUpcomingCups } }, [
                      _vm._v("Incoming Cups")
                    ]),
                    _vm._v(" "),
                    _c("v-tab", { on: { click: _vm.tableForCupsOnrack } }, [
                      _vm._v("Cups Onrack")
                    ]),
                    _vm._v(" "),
                    _c("v-tab", { on: { click: _vm.tableForUsedCups } }, [
                      _vm._v("Used Cups")
                    ]),
                    _vm._v(" "),
                    _c("v-tab", { on: { click: _vm.tableForRemainingCups } }, [
                      _vm._v("Remaining Cups")
                    ])
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
      _c("v-data-table", {
        staticClass: "elevation-3",
        attrs: {
          headers: _vm.headersForCup,
          items: _vm.dataInDB,
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
                      [_vm._v(_vm._s(_vm.cupName))]
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
                        on: { click: _vm.searchData }
                      },
                      [_vm._v("Find")]
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
          },
          {
            key: "item.totalIncoming",
            fn: function(ref) {
              var item = ref.item
              return [_c("span", [_vm._v(_vm._s(_vm.getTotal(item)))])]
            }
          }
        ])
      }),
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
                        _c(
                          "ejs-grid",
                          {
                            ref: "grid",
                            attrs: {
                              id: "Grid",
                              dataSource: _vm.dataInDB,
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
                                    field: "incomingLowDose",
                                    headerText: "Incoming (LD)",
                                    width: "150"
                                  }
                                }),
                                _vm._v(" "),
                                _c("e-column", {
                                  attrs: {
                                    field: "incomingHighDose",
                                    headerText: "Incoming (HD)",
                                    width: "150"
                                  }
                                }),
                                _vm._v(" "),
                                _c("e-column", {
                                  attrs: {
                                    field: "incomingOverDose",
                                    headerText: "Incoming (OD)",
                                    width: "150"
                                  }
                                }),
                                _vm._v(" "),
                                _c("e-column", {
                                  attrs: {
                                    field: "TotalIncoming",
                                    headerText: "Total Incoming Cups",
                                    width: "180"
                                  }
                                }),
                                _vm._v(" "),
                                _c("e-column", {
                                  attrs: {
                                    field: "onRockLowDose",
                                    headerText: "Cups Onrack (LD)",
                                    width: "150"
                                  }
                                }),
                                _vm._v(" "),
                                _c("e-column", {
                                  attrs: {
                                    field: "onRockHighDose",
                                    headerText: "Cups Onrack (HD)",
                                    width: "150"
                                  }
                                }),
                                _vm._v(" "),
                                _c("e-column", {
                                  attrs: {
                                    field: "onRockOverDose",
                                    headerText: "Cups Onrack (OD)",
                                    width: "150"
                                  }
                                }),
                                _vm._v(" "),
                                _c("e-column", {
                                  attrs: {
                                    field: "TotalOnRock",
                                    headerText: "Total Cups Onrack",
                                    width: "150"
                                  }
                                }),
                                _vm._v(" "),
                                _c("e-column", {
                                  attrs: {
                                    field: "usedCupsLowDose",
                                    headerText: "Used Cups (LD)",
                                    width: "150"
                                  }
                                }),
                                _vm._v(" "),
                                _c("e-column", {
                                  attrs: {
                                    field: "usedCupsHighDose",
                                    headerText: "Used Cups (HD)",
                                    width: "150"
                                  }
                                }),
                                _vm._v(" "),
                                _c("e-column", {
                                  attrs: {
                                    field: "usedCupsOverDose",
                                    headerText: "Used Cups (OD)",
                                    width: "150"
                                  }
                                }),
                                _vm._v(" "),
                                _c("e-column", {
                                  attrs: {
                                    field: "TotalUsed",
                                    headerText: "Total Used Cups",
                                    width: "150"
                                  }
                                }),
                                _vm._v(" "),
                                _c("e-column", {
                                  attrs: {
                                    field: "remainingLowDose",
                                    headerText: "Remaining Cups (LD)",
                                    width: "180"
                                  }
                                }),
                                _vm._v(" "),
                                _c("e-column", {
                                  attrs: {
                                    field: "remainingHighDose",
                                    headerText: "Remaining Cups (HD)",
                                    width: "180"
                                  }
                                }),
                                _vm._v(" "),
                                _c("e-column", {
                                  attrs: {
                                    field: "remainingOverDose",
                                    headerText: "Remaining Cups (OD)",
                                    width: "180"
                                  }
                                }),
                                _vm._v(" "),
                                _c("e-column", {
                                  attrs: {
                                    field: "TotalRemaining",
                                    headerText: "Total Remaining Cups",
                                    width: "180"
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
      _vm._v(" "),
      _vm.loadingShow ? _c("loading") : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/modules/inventory/cupsInventory.vue":
/*!**********************************************************!*\
  !*** ./resources/js/modules/inventory/cupsInventory.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cupsInventory_vue_vue_type_template_id_2d64b2de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cupsInventory.vue?vue&type=template&id=2d64b2de&scoped=true& */ "./resources/js/modules/inventory/cupsInventory.vue?vue&type=template&id=2d64b2de&scoped=true&");
/* harmony import */ var _cupsInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cupsInventory.vue?vue&type=script&lang=js& */ "./resources/js/modules/inventory/cupsInventory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _cupsInventory_vue_vue_type_style_index_0_id_2d64b2de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cupsInventory.vue?vue&type=style&index=0&id=2d64b2de&scoped=true&lang=css& */ "./resources/js/modules/inventory/cupsInventory.vue?vue&type=style&index=0&id=2d64b2de&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _cupsInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cupsInventory_vue_vue_type_template_id_2d64b2de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cupsInventory_vue_vue_type_template_id_2d64b2de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2d64b2de",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/inventory/cupsInventory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/inventory/cupsInventory.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/modules/inventory/cupsInventory.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cupsInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./cupsInventory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/cupsInventory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cupsInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/inventory/cupsInventory.vue?vue&type=style&index=0&id=2d64b2de&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/modules/inventory/cupsInventory.vue?vue&type=style&index=0&id=2d64b2de&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cupsInventory_vue_vue_type_style_index_0_id_2d64b2de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./cupsInventory.vue?vue&type=style&index=0&id=2d64b2de&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/cupsInventory.vue?vue&type=style&index=0&id=2d64b2de&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cupsInventory_vue_vue_type_style_index_0_id_2d64b2de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cupsInventory_vue_vue_type_style_index_0_id_2d64b2de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cupsInventory_vue_vue_type_style_index_0_id_2d64b2de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cupsInventory_vue_vue_type_style_index_0_id_2d64b2de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/modules/inventory/cupsInventory.vue?vue&type=template&id=2d64b2de&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/modules/inventory/cupsInventory.vue?vue&type=template&id=2d64b2de&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cupsInventory_vue_vue_type_template_id_2d64b2de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./cupsInventory.vue?vue&type=template&id=2d64b2de&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/cupsInventory.vue?vue&type=template&id=2d64b2de&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cupsInventory_vue_vue_type_template_id_2d64b2de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cupsInventory_vue_vue_type_template_id_2d64b2de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);