(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/salesInventory.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventory/salesInventory.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      categoryData: [],
      search: '',
      loadingShow: false,
      store: [],
      storage: [],
      storage2: [],
      storeAmount: [],
      dataAddOns: [],
      cupType: []
    };
  },
  mounted: function mounted() {
    this.retrieveCategory();
    this.retrieveCupType();
    this.retrieveSale();
    this.retrieveAddOns();
  },
  components: {
    VueJsonToCsv: vue_json_to_csv__WEBPACK_IMPORTED_MODULE_1___default.a,
    loading: _basic_loading_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  methods: {
    getTotal: function getTotal(index) {
      var amount = 0;
      var id = 0;
      this.store[index].forEach(function (el) {
        if (el.get_checkouts[0].id !== id) {
          id = el.get_checkouts[0].id;
          amount += parseInt(el.get_checkouts[0].total);
        }
      });
      return parseInt(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    },
    getCupType: function getCupType(index) {
      var _this = this;

      var amount = 0;
      this.store[index].forEach(function (el) {
        _this.cupType.forEach(function (cup) {
          if (el.cupType === cup.cupTypeName) {
            if (el.customerType !== 'fb' && el.customerType !== 'walkin') {
              amount += cup.inputCupOnlinePrice * el.quantity;
            } else {
              amount += cup.cupTypePrice * el.quantity;
            }
          }
        });
      });
      return parseInt(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    },
    getDeliveryFee: function getDeliveryFee(index) {
      var amount = 0;
      this.store[index].forEach(function (el) {
        amount += el.get_checkouts[0].deliveryFee;
      });
      return parseInt(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    },
    getAddOns: function getAddOns(index) {
      var _this2 = this;

      var amount = 0;
      this.store[index].forEach(function (el) {
        el.same_order.forEach(function (e) {
          _this2.dataAddOns.forEach(function (add) {
            if (e.addOns === add.addons_name) {
              if (el.customerType !== 'fb' && el.customerType !== 'walkin') {
                amount += add.onlineAddOnsPrice * el.quantity;
              } else {
                amount += add.addons_price * el.quantity;
              }
            }
          });
        });
      });
      return parseInt(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    },
    retrieveCupType: function retrieveCupType() {
      var _this3 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveAllCupType", {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this3.cupType = response.data.cupType;
        _this3.loadingShow = false;
      });
    },
    retrieveAddOns: function retrieveAddOns() {
      var _this4 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveWithDeleteAddOns", {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this4.dataAddOns = response.data.addons;
        _this4.loadingShow = false;
      });
    },
    getDate: function getDate(index) {
      return moment__WEBPACK_IMPORTED_MODULE_3___default()(this.store[index][0].created_at).format('MM/DD/YYYY');
    },
    retrieveCategory: function retrieveCategory() {
      var _this5 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'retrieveCategoryAscending', {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (res) {
        if (res.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this5.loadingShow = false;
        _this5.categoryData = res.data.addCategory;
      });
    },
    retrieveSale: function retrieveSale() {
      var _this6 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveAllSales", {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this6.loadingShow = false;
        var store = [];
        Object.keys(response.data.storeOrder).forEach(function (element) {
          store.push(response.data.storeOrder[element]);
        });
        _this6.store = store.reverse();
        _this6.storage2 = [];

        _this6.store.forEach(function (el) {
          _this6.storage = [];

          _this6.categoryData.forEach(function (cat) {
            var amount = 0;
            el.forEach(function (e) {
              if (e.order_product[0].productCategory === cat.productCategory) {
                amount += e.choosenPrice * e.quantity;
              }
            });

            _this6.storage.push({
              'category': cat.productCategory,
              'value': parseInt(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
            });
          });

          _this6.storage2.push(_this6.storage);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/salesInventory.vue?vue&type=template&id=d32a416e&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventory/salesInventory.vue?vue&type=template&id=d32a416e& ***!
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
  return _c("v-card", [
    _c(
      "div",
      { staticClass: "my-custom-scrollbar" },
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
                      "v-toolbar",
                      {
                        staticClass: "mb-2",
                        attrs: { color: "#ff5b04", dark: "", flat: "" }
                      },
                      [
                        _c(
                          "v-toolbar-title",
                          { staticClass: "col pa-3 py-4 white--text" },
                          [_vm._v("Sales Inventory")]
                        ),
                        _vm._v("      \n             "),
                        _c("v-text-field", {
                          staticClass: "mt-7",
                          attrs: {
                            clearable: "",
                            flat: "",
                            "solo-inverted": "",
                            "prepend-inner-icon": "mdi-magnify",
                            label: "Search"
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
                          { staticClass: "mr-6", attrs: { color: "success" } },
                          [
                            _vm._v("\n                Export "),
                            _c("i", {
                              staticClass: "mdi mdi-export-variant",
                              attrs: { "aria-hidden": "true" }
                            })
                          ]
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
              _c(
                "tr",
                { staticClass: "header" },
                [
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Date")]),
                  _vm._v(" "),
                  _vm._l(_vm.categoryData, function(item, index) {
                    return _c("th", { key: index, attrs: { scope: "col" } }, [
                      _vm._v(_vm._s(item.productCategory))
                    ])
                  }),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Add Ons")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [
                    _vm._v("Delivery Fee")
                  ]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Cup Type")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Total Sales")])
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.storage2, function(item, index) {
                return _c(
                  "tr",
                  { key: index },
                  [
                    _c("td", [_vm._v(_vm._s(_vm.getDate(index)))]),
                    _vm._v(" "),
                    _vm._l(item, function(i, ind) {
                      return _c("td", { key: ind, attrs: { scope: "row" } }, [
                        _vm._v("₱ " + _vm._s(i.value))
                      ])
                    }),
                    _vm._v(" "),
                    _c("td", [_vm._v("₱ " + _vm._s(_vm.getAddOns(index)))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v("₱ " + _vm._s(_vm.getDeliveryFee(index)))
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v("₱ " + _vm._s(_vm.getCupType(index)))]),
                    _vm._v(" "),
                    _c("td", [_vm._v("₱ " + _vm._s(_vm.getTotal(index)))])
                  ],
                  2
                )
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
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/modules/inventory/salesInventory.vue":
/*!***********************************************************!*\
  !*** ./resources/js/modules/inventory/salesInventory.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _salesInventory_vue_vue_type_template_id_d32a416e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salesInventory.vue?vue&type=template&id=d32a416e& */ "./resources/js/modules/inventory/salesInventory.vue?vue&type=template&id=d32a416e&");
/* harmony import */ var _salesInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salesInventory.vue?vue&type=script&lang=js& */ "./resources/js/modules/inventory/salesInventory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _salesInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _salesInventory_vue_vue_type_template_id_d32a416e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _salesInventory_vue_vue_type_template_id_d32a416e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/inventory/salesInventory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/inventory/salesInventory.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/modules/inventory/salesInventory.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_salesInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./salesInventory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/salesInventory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_salesInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/inventory/salesInventory.vue?vue&type=template&id=d32a416e&":
/*!******************************************************************************************!*\
  !*** ./resources/js/modules/inventory/salesInventory.vue?vue&type=template&id=d32a416e& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_salesInventory_vue_vue_type_template_id_d32a416e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./salesInventory.vue?vue&type=template&id=d32a416e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/salesInventory.vue?vue&type=template&id=d32a416e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_salesInventory_vue_vue_type_template_id_d32a416e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_salesInventory_vue_vue_type_template_id_d32a416e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);