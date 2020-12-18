(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/ingredientsInventory.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventory/ingredientsInventory.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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





/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      toolbarOptions: ['ExcelExport', 'Search'],
      formatDate: moment__WEBPACK_IMPORTED_MODULE_3___default()(new Date()).format("MM/DD/YYYY Hh:mm"),
      dataInDB: [],
      downloadData: [],
      search: null,
      headersForCup: [],
      loadingShow: false,
      dialogForCupSize: false,
      adminName: '',
      dates: [new Date().toISOString().substr(0, 10)],
      type: '',
      ingredientsData: []
    };
  },
  components: {
    loading: _basic_loading_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    this.retrieveIngredients();
    this.retrieveAddedIngredients();
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
    putDataRemaining: function putDataRemaining(e) {
      var output = '';
      this.ingredientsData.forEach(function (elem) {
        if (e.ingredient === elem.ingredientsName) {
          if (elem.type === 'Pack of Pearl') {
            output = e.remaining + ' scope';
          } else if (elem.type === 'Can of Fructose') {
            output = e.remaining + ' ml';
          } else if (elem.type === 'Bottle of Dough Syrup') {
            output = e.remaining + ' ml';
          } else if (elem.type === 'Pack of Tea') {
            output = e.remaining + ' ml';
          } else if (elem.type === 'Can of Wintermelon Syrup') {
            output = e.remaining + ' ml';
          } else if (elem.type === 'Bottle of Cream Milk') {
            output = e.remaining + ' ml';
          } else if (elem.type === 'Pack of Powder') {
            output = e.remaining + ' scope';
          }
        }
      });
      return output;
    },
    putData: function putData(e) {
      var output = '';
      this.ingredientsData.forEach(function (elem) {
        if (e.ingredient === elem.ingredientsName) {
          if (elem.type === 'Pack of Pearl') {
            output = e.quantity + ' scope';
          } else if (elem.type === 'Can of Fructose') {
            output = e.quantity + ' ml';
          } else if (elem.type === 'Bottle of Dough Syrup') {
            output = e.quantity + ' ml';
          } else if (elem.type === 'Pack of Tea') {
            output = e.quantity + ' ml';
          } else if (elem.type === 'Can of Wintermelon Syrup') {
            output = e.quantity + ' ml';
          } else if (elem.type === 'Bottle of Cream Milk') {
            output = e.quantity + ' ml';
          } else if (elem.type === 'Pack of Powder') {
            output = e.quantity + ' scope';
          }
        }
      });
      return output;
    },
    putUsedData: function putUsedData(e) {
      var output = '';
      this.ingredientsData.forEach(function (elem) {
        if (e.ingredient === elem.ingredientsName) {
          if (elem.type === 'Pack of Pearl') {
            e.used ? output = e.used + ' scope' : output = '0 scope';
          } else if (elem.type === 'Can of Fructose') {
            e.used ? output = e.used + ' ml' : output = '0 ml';
          } else if (elem.type === 'Bottle of Dough Syrup') {
            e.used ? output = e.used + ' ml' : output = '0 ml';
          } else if (elem.type === 'Pack of Tea') {
            e.used ? output = e.used + ' ml' : output = '0 ml';
          } else if (elem.type === 'Can of Wintermelon Syrup') {
            e.used ? output = e.used + ' ml' : output = '0 ml';
          } else if (elem.type === 'Bottle of Cream Milk') {
            e.used ? output = e.used + ' ml' : output = '0 ml';
          } else if (elem.type === 'Pack of Powder') {
            e.used ? output = e.used + ' scope' : output = '0 scope';
          }
        }
      });
      return output;
    },
    retrieveIngredients: function retrieveIngredients() {
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
    retrieveAddedIngredients: function retrieveAddedIngredients() {
      var _this2 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveData", {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        _this2.loadingShow = false;

        if (response.data.status === 'Token is Expired') {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        var list = [];
        var a = [],
            b = [],
            c = [],
            d = [],
            f = [];
        response.data.addIngredient.forEach(function (el) {
          var w = el.usedQuantity;
          var x = el.ingredients;
          var y = el.quantity;
          var z = el.remainingQuantity;

          if (el.usedQuantity) {
            JSON.parse(w).forEach(function (e) {
              f.push(e);
            });
          }

          JSON.parse(x).forEach(function (e) {
            a.push(e);
            d.push(el.created_at);
          });
          JSON.parse(y).forEach(function (e) {
            b.push(e);
          });
          JSON.parse(z).forEach(function (e) {
            c.push(e);
          });
        });
        a.forEach(function (el, index) {
          list.push({
            date: d[index],
            ingredient: el,
            used: f[index],
            quantity: b[index],
            remaining: c[index]
          });
        });
        _this2.dataInDB = list.reverse();
        _this2.headersForCup = [{
          text: "Date",
          value: "date"
        }, {
          text: "Ingredient's Name",
          value: "ingredient"
        }, {
          text: "On Store Ingredients",
          value: "quantity"
        }, {
          text: "Used Ingredients",
          value: "used"
        }, {
          text: "Remaining Ingredients",
          value: "remaining"
        }];
      });
    },
    toolbarClick: function toolbarClick(args) {
      if (args.item.id === 'Grid_excelexport') {
        // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
        var excelExportProperties = {
          fileName: this.formatDate + ' Cups.xlsx',
          header: {
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
    getDate: function getDate(date) {
      return moment__WEBPACK_IMPORTED_MODULE_3___default()(date).format("LLL");
    },
    searchData: function searchData() {
      var _this3 = this;

      this.dialogForCupSize = true;
      this.loadingShow = true;
      var params = {
        start: this.dates[0] > this.dates[1] ? this.dates[1] : this.dates[0],
        end: this.dates[1] ? this.dates[0] > this.dates[1] ? this.dates[0] : this.dates[1] : this.dates[0]
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveDataChosen", params, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        _this3.loadingShow = false;

        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        var list = [];
        var a = [],
            b = [],
            c = [],
            d = [],
            f = [];
        response.data.addIngredient.forEach(function (el) {
          var w = el.usedQuantity;
          var x = el.ingredients;
          var y = el.quantity;
          var z = el.remainingQuantity;

          if (el.usedQuantity) {
            JSON.parse(w).forEach(function (e) {
              f.push(e);
            });
          }

          JSON.parse(x).forEach(function (e) {
            a.push(e);
            d.push(el.created_at);
          });
          JSON.parse(y).forEach(function (e) {
            b.push(e);
          });
          JSON.parse(z).forEach(function (e) {
            c.push(e);
          });
        });
        a.forEach(function (el, index) {
          list.push({
            date: moment__WEBPACK_IMPORTED_MODULE_3___default()(d[index]).format('MM/DD/YYYY'),
            ingredient: el,
            used: f[index],
            quantity: b[index],
            remaining: c[index]
          });
        });
        _this3.downloadData = list.reverse();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/ingredientsInventory.vue?vue&type=style&index=0&id=34521293&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventory/ingredientsInventory.vue?vue&type=style&index=0&id=34521293&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://cdn.syncfusion.com/ej2/material.css);", ""]);

// module
exports.push([module.i, "\n.top[data-v-34521293]{\r\n    margin-top: 6%;\n}\n.table[data-v-34521293] {\r\n  margin-left: 50px;\r\n  width: 90%;\n}\ntd[data-v-34521293] {\r\n  text-align: center;\n}\n.calendarDate[data-v-34521293]{\r\n  width: 0%;\r\n  margin-top: 2.3%;\r\n  margin-right: 3%;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/ingredientsInventory.vue?vue&type=style&index=0&id=34521293&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventory/ingredientsInventory.vue?vue&type=style&index=0&id=34521293&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ingredientsInventory.vue?vue&type=style&index=0&id=34521293&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/ingredientsInventory.vue?vue&type=style&index=0&id=34521293&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/ingredientsInventory.vue?vue&type=template&id=34521293&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventory/ingredientsInventory.vue?vue&type=template&id=34521293&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "top" },
    [
      _c("v-data-table", {
        staticClass: "elevation-3",
        attrs: {
          headers: _vm.headersForCup,
          items: _vm.dataInDB,
          search: _vm.search,
          "items-per-page": 7
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
                      [_vm._v("Ingredients Inventory")]
                    ),
                    _vm._v("      \n            "),
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
            key: "item.date",
            fn: function(ref) {
              var item = ref.item
              return [_c("span", [_vm._v(_vm._s(_vm.getDate(item.date)))])]
            }
          },
          {
            key: "item.quantity",
            fn: function(ref) {
              var item = ref.item
              return [_c("span", [_vm._v(_vm._s(_vm.putData(item)))])]
            }
          },
          {
            key: "item.remaining",
            fn: function(ref) {
              var item = ref.item
              return [_c("span", [_vm._v(_vm._s(_vm.putDataRemaining(item)))])]
            }
          },
          {
            key: "item.used",
            fn: function(ref) {
              var item = ref.item
              return [_c("span", [_vm._v(_vm._s(_vm.putUsedData(item)))])]
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
                              dataSource: _vm.downloadData,
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
                                    field: "date",
                                    headerText: "Date",
                                    width: "120"
                                  }
                                }),
                                _vm._v(" "),
                                _c("e-column", {
                                  attrs: {
                                    field: "ingredient",
                                    headerText: "Ingredients name",
                                    width: "150"
                                  }
                                }),
                                _vm._v(" "),
                                _c("e-column", {
                                  attrs: {
                                    field: "quantity",
                                    headerText: "On store Ingredients",
                                    width: "150"
                                  }
                                }),
                                _vm._v(" "),
                                _c("e-column", {
                                  attrs: {
                                    field: "used",
                                    headerText: "Used Ingredients",
                                    width: "150"
                                  }
                                }),
                                _vm._v(" "),
                                _c("e-column", {
                                  attrs: {
                                    field: "remaining",
                                    headerText: "Remaining Ingredients",
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

/***/ "./resources/js/modules/inventory/ingredientsInventory.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/modules/inventory/ingredientsInventory.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ingredientsInventory_vue_vue_type_template_id_34521293_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingredientsInventory.vue?vue&type=template&id=34521293&scoped=true& */ "./resources/js/modules/inventory/ingredientsInventory.vue?vue&type=template&id=34521293&scoped=true&");
/* harmony import */ var _ingredientsInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ingredientsInventory.vue?vue&type=script&lang=js& */ "./resources/js/modules/inventory/ingredientsInventory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ingredientsInventory_vue_vue_type_style_index_0_id_34521293_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ingredientsInventory.vue?vue&type=style&index=0&id=34521293&scoped=true&lang=css& */ "./resources/js/modules/inventory/ingredientsInventory.vue?vue&type=style&index=0&id=34521293&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ingredientsInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ingredientsInventory_vue_vue_type_template_id_34521293_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ingredientsInventory_vue_vue_type_template_id_34521293_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "34521293",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/inventory/ingredientsInventory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/inventory/ingredientsInventory.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/modules/inventory/ingredientsInventory.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ingredientsInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ingredientsInventory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/ingredientsInventory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ingredientsInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/inventory/ingredientsInventory.vue?vue&type=style&index=0&id=34521293&scoped=true&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/modules/inventory/ingredientsInventory.vue?vue&type=style&index=0&id=34521293&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ingredientsInventory_vue_vue_type_style_index_0_id_34521293_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ingredientsInventory.vue?vue&type=style&index=0&id=34521293&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/ingredientsInventory.vue?vue&type=style&index=0&id=34521293&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ingredientsInventory_vue_vue_type_style_index_0_id_34521293_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ingredientsInventory_vue_vue_type_style_index_0_id_34521293_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ingredientsInventory_vue_vue_type_style_index_0_id_34521293_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ingredientsInventory_vue_vue_type_style_index_0_id_34521293_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/modules/inventory/ingredientsInventory.vue?vue&type=template&id=34521293&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/modules/inventory/ingredientsInventory.vue?vue&type=template&id=34521293&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ingredientsInventory_vue_vue_type_template_id_34521293_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ingredientsInventory.vue?vue&type=template&id=34521293&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/ingredientsInventory.vue?vue&type=template&id=34521293&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ingredientsInventory_vue_vue_type_template_id_34521293_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ingredientsInventory_vue_vue_type_template_id_34521293_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);