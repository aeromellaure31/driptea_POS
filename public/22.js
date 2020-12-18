(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/logs/log.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/logs/log.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "./resources/js/config.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth */ "./resources/js/services/auth/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router */ "./resources/js/router/index.js");
/* harmony import */ var _basic_loading_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../basic/loading.vue */ "./resources/js/basic/loading.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      config: _config_js__WEBPACK_IMPORTED_MODULE_0__["default"],
      logHeader: [{
        text: "No.",
        value: "id"
      }, {
        text: "Cashier's Assign",
        value: "get_cashier[0]"
      }, {
        text: "Activity",
        value: "activity"
      }, {
        text: "Amount",
        value: "amount"
      }, {
        text: "Date",
        value: "created_at"
      }],
      data: [],
      search: '',
      loadingShow: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.retrieve();
    var pusher = new Pusher(this.config.PUSHER_APP_KEY, {
      cluster: this.config.PUSHER_APP_CLUSTER,
      secret: this.config.PUSHER_APP_SECRET,
      encrypted: false
    });
    var channel = pusher.subscribe("driptea-channel");
    var obj = this;
    pusher.logToConsole = true;
    channel.bind("driptea-data", function (data) {
      _this.retrieve();
    });
  },
  components: {
    loading: _basic_loading_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  methods: {
    getNumber: function getNumber(id) {
      return this.data.length + 1 - id;
    },
    getCashier: function getCashier(param) {
      return param.firstname + ' ' + param.lastname;
    },
    getDate: function getDate(date) {
      return moment__WEBPACK_IMPORTED_MODULE_4___default()(date).format('LLL');
    },
    retrieve: function retrieve() {
      var _this2 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_1__["default"].url + "getActivityLog", {}, _services_auth__WEBPACK_IMPORTED_MODULE_1__["default"].config).then(function (res) {
        _this2.loadingShow = false;

        if (res.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_1__["default"].deauthenticate();
        }

        _this2.data = res.data.activityLog.reverse();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/logs/log.vue?vue&type=template&id=e77d122c&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/logs/log.vue?vue&type=template&id=e77d122c&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
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
      _c("v-data-table", {
        staticClass: "elevation-3 mt-10",
        attrs: {
          headers: _vm.logHeader,
          items: _vm.data,
          search: _vm.search,
          "items-per-page": 10
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
                      [_vm._v("Cashier Logs")]
                    ),
                    _vm._v("      \n            "),
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
                    })
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
              return [_c("span", [_vm._v(_vm._s(_vm.getNumber(item.id)))])]
            }
          },
          {
            key: "item.get_cashier[0]",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("span", [
                  _vm._v(_vm._s(_vm.getCashier(item.get_cashier[0])))
                ])
              ]
            }
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
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/modules/logs/log.vue":
/*!*******************************************!*\
  !*** ./resources/js/modules/logs/log.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _log_vue_vue_type_template_id_e77d122c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log.vue?vue&type=template&id=e77d122c&scoped=true& */ "./resources/js/modules/logs/log.vue?vue&type=template&id=e77d122c&scoped=true&");
/* harmony import */ var _log_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log.vue?vue&type=script&lang=js& */ "./resources/js/modules/logs/log.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _log_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _log_vue_vue_type_template_id_e77d122c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _log_vue_vue_type_template_id_e77d122c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e77d122c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/logs/log.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/logs/log.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/modules/logs/log.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_log_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./log.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/logs/log.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_log_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/logs/log.vue?vue&type=template&id=e77d122c&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/modules/logs/log.vue?vue&type=template&id=e77d122c&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_log_vue_vue_type_template_id_e77d122c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./log.vue?vue&type=template&id=e77d122c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/logs/log.vue?vue&type=template&id=e77d122c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_log_vue_vue_type_template_id_e77d122c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_log_vue_vue_type_template_id_e77d122c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);