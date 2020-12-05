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
/* harmony import */ var vue_json_to_csv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-json-to-csv */ "./node_modules/vue-json-to-csv/dist/vue-json-to-csv.js");
/* harmony import */ var vue_json_to_csv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_json_to_csv__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _basic_loading_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../basic/loading.vue */ "./resources/js/basic/loading.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      formatDate: moment__WEBPACK_IMPORTED_MODULE_3___default()(new Date()).format("MM/DD/YYYY Hh:mm"),
      modalData: [],
      dataInDB: [],
      search: null,
      cupName: null,
      headersForCup: [],
      loadingShow: false,
      toCsv: [],
      dialogForCupSize: false,
      dates: []
    };
  },
  components: {
    VueJsonToCsv: vue_json_to_csv__WEBPACK_IMPORTED_MODULE_1___default.a,
    loading: _basic_loading_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mounted: function mounted() {
    this.tableForAllCups();
  },
  computed: {
    dateRangeText: function dateRangeText() {
      return this.dates.join(" ~ ");
    }
  },
  methods: {
    close: function close() {
      this.dialogForCupSize = false;
      this.tableForAllCups();
    },
    searchData: function searchData() {
      this.toCsv = [], this.dialogForCupSize = true, this.tableForUpcomingCups();
    },
    tableForCupsOnrackModal: function tableForCupsOnrackModal() {
      this.tableForCupsOnrack();
    },
    tableForUpcomingCupsModal: function tableForUpcomingCupsModal() {
      this.tableForUpcomingCups();
    },
    tableForUsedCupsModal: function tableForUsedCupsModal() {
      this.tableForUsedCups();
    },
    tableForRemainingCupsModal: function tableForRemainingCupsModal() {
      this.tableForRemainingCups();
    },
    tableForAllCups: function tableForAllCups() {
      var _this = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveCupSize", {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this.dataInDB = response.data.quantityCupsInDB.reverse();
        _this.headersForCup = [{
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
        _this.cupName = "Cups Onrack";
        _this.loadingShow = false;
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
      var _this2 = this;

      this.loadingShow = true;
      var params = {
        dateFrom: this.dates[0] > this.dates[1] ? this.dates[1] : this.dates[0],
        dateTo: this.dates[1] ? this.dates[0] > this.dates[1] ? this.dates[0] : this.dates[1] : this.dates[0]
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveCupForInventory", params, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        console.log(_this2.dates[0], _this2.dates[1]);

        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this2.modalData = response.data.quantityCupsInDB.reverse();
        response.data.quantityCupsInDB.forEach(function (element) {
          var thisDate = _this2.getDate(element.created_at);

          _this2.toCsv.push({
            Date: thisDate,
            "Incoming Low Dose": element.incomingLowDose,
            "Incoming High Dose": element.incomingHighDose,
            "Incoming Over Dose": element.incomingOverDose,
            "Total Incoming Cups": element.incomingLowDose + element.incomingHighDose + element.incomingOverDose,
            "Cups Onrack Low Dose": element.onRockLowDose,
            "Cups Onrack High Dose": element.onRockHighDose,
            "Cups Onrack Over Dose": element.onRockOverDose,
            "Total Cups Onrack": element.onRockLowDose + element.onRockHighDose + element.onRockOverDose,
            "Used Cups Low Dose": element.usedCupsLowDose,
            "Used Cups High Dose": element.usedCupsHighDose,
            "Used Cups Over Dose": element.usedCupsOverDose,
            "Total Used Cups": element.usedCupsLowDose + element.usedCupsHighDose + element.usedCupsOverDose,
            "Remaining Cups Low Dose": element.remainingLowDose,
            "Remaining Cups High Dose": element.remainingHighDose,
            "Remaining Cups Over Dose": element.remainingOverDose,
            "Total Remaining Cups": element.remainingLowDose + element.remainingHighDose + element.remainingOverDose
          });
        });
        _this2.headersForCup = [{
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
        _this2.cupName = "Upcoming Cups";
        _this2.loadingShow = false;
      });
    },
    tableForCupsOnrack: function tableForCupsOnrack() {
      var _this3 = this;

      this.loadingShow = true;
      var params = {
        dateFrom: this.dates[0] > this.dates[1] ? this.dates[1] : this.dates[0],
        dateTo: this.dates[1] ? this.dates[0] > this.dates[1] ? this.dates[0] : this.dates[1] : this.dates[0]
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveCupForInventory", params, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this3.modalData = response.data.quantityCupsInDB.reverse();
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
    tableForUsedCups: function tableForUsedCups() {
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
        _this4.headersForCup = [{
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
        _this4.cupName = "Used Cups";
        _this4.loadingShow = false;
      });
    },
    tableForRemainingCups: function tableForRemainingCups() {
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
        _this5.cupName = "Remaining Cups";
        _this5.loadingShow = false;
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


// module
exports.push([module.i, "\n.table[data-v-2d64b2de] {\r\n  margin-left: 50px;\r\n  width: 90%;\n}\ntd[data-v-2d64b2de] {\r\n  text-align: center;\n}\r\n", ""]);

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
                          on: { click: _vm.close }
                        },
                        [_vm._v("×")]
                      ),
                      _vm._v(" "),
                      _c("br")
                    ]),
                    _vm._v(" "),
                    _c("v-card-text", [
                      _c(
                        "div",
                        { staticClass: "my-custom-scrollbar" },
                        [
                          _c(
                            "v-toolbar-title",
                            { staticClass: "col pa-3 py-4 black--text" },
                            [
                              _vm._v(
                                "Cups Inventory (" +
                                  _vm._s(_vm.dates[0]) +
                                  " ~ " +
                                  _vm._s(
                                    _vm.dates[1] ? _vm.dates[1] : _vm.dates[0]
                                  ) +
                                  ")"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-data-table", {
                            staticClass: "elevation-3",
                            attrs: {
                              headers: _vm.headersForCup,
                              items: _vm.modalData,
                              search: _vm.search,
                              "items-per-page": 5
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "item.created_at",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _c("span", [
                                      _vm._v(
                                        _vm._s(_vm.getDate(item.created_at))
                                      )
                                    ])
                                  ]
                                }
                              },
                              {
                                key: "item.totalIncoming",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _c("span", [
                                      _vm._v(_vm._s(_vm.getTotal(item)))
                                    ])
                                  ]
                                }
                              },
                              {
                                key: "top",
                                fn: function() {
                                  return [
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
                                                  click:
                                                    _vm.tableForUpcomingCupsModal
                                                }
                                              },
                                              [_vm._v("Incoming Cups")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-tab",
                                              {
                                                on: {
                                                  click:
                                                    _vm.tableForCupsOnrackModal
                                                }
                                              },
                                              [_vm._v("Cups Onrack")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-tab",
                                              {
                                                on: {
                                                  click:
                                                    _vm.tableForUsedCupsModal
                                                }
                                              },
                                              [_vm._v("Used Cups")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-tab",
                                              {
                                                on: {
                                                  click:
                                                    _vm.tableForRemainingCupsModal
                                                }
                                              },
                                              [_vm._v("Remaining Cups")]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v("      \n                    "),
                                        _c(
                                          "VueJsonToCsv",
                                          {
                                            attrs: {
                                              "json-data": _vm.toCsv,
                                              F: "",
                                              "csv-title":
                                                _vm.formatDate + " Sales"
                                            }
                                          },
                                          [
                                            _c(
                                              "v-btn",
                                              {
                                                staticClass: "mr-6",
                                                attrs: { color: "success" }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                        Export\n                        "
                                                ),
                                                _c("i", {
                                                  staticClass:
                                                    "mdi mdi-export-variant",
                                                  attrs: {
                                                    "aria-hidden": "true"
                                                  }
                                                })
                                              ]
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
                          })
                        ],
                        1
                      )
                    ]),
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
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cupsInventory_vue_vue_type_style_index_0_id_2d64b2de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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