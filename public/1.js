(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/casherDashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/dashboard/casherDashboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth */ "./resources/js/services/auth/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router */ "./resources/js/router/index.js");
//
//
//
//
//
//
//
//
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
      items: [{
        img: 'https://www.freeiconspng.com/thumbs/walking-icon/walking-icon-6.jpg',
        link: '/walkin'
      }, {
        img: 'https://dustinstout.com/wp-content/uploads/2016/04/facebook-icon-1920x1080-920x518.jpg',
        link: '/fb'
      }, {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKtrva2NAQo7PXmhWITqpeRGDiql1U6u2DIQ&usqp=CAU',
        link: '/grab'
      }, {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbzIv9yJMCwep7bOqWOMiW9mcY9jh6o-UttA&usqp=CAU',
        link: '/foodpanda'
      }],
      transparent: 'rgba(255, 255, 255, 0)'
    };
  },
  methods: {
    redirect: function redirect(type) {
      if (type !== 'fb') {
        var parameter = {
          customerType: type
        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'addCustomer', parameter).then(function (res) {
          localStorage.setItem('customerId', res.data.customerDetails.id);
          localStorage.setItem('customerType', res.data.customerDetails.customerType);
          _router__WEBPACK_IMPORTED_MODULE_1__["default"].push('/productCategory/' + res.data.customerDetails.customerType)["catch"](function () {});
        });
      } else {
        _router__WEBPACK_IMPORTED_MODULE_1__["default"].push('/productCategory/' + param)["catch"](function () {});
      }
    },
    goTo: function goTo(link) {
      this.$router.push(link);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/casherDashboard.vue?vue&type=style&index=0&id=418d2e43&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/dashboard/casherDashboard.vue?vue&type=style&index=0&id=418d2e43&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-card[data-v-418d2e43] {\r\n  transition: opacity .4s ease-in-out;\n}\n.v-card[data-v-418d2e43]:not(.on-hover) {\r\n  opacity: 0.6;\n}\n.show-btns[data-v-418d2e43] {\r\n  color: rgba(255, 255, 255, 1) !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/casherDashboard.vue?vue&type=style&index=0&id=418d2e43&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/dashboard/casherDashboard.vue?vue&type=style&index=0&id=418d2e43&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./casherDashboard.vue?vue&type=style&index=0&id=418d2e43&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/casherDashboard.vue?vue&type=style&index=0&id=418d2e43&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/casherDashboard.vue?vue&type=template&id=418d2e43&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/dashboard/casherDashboard.vue?vue&type=template&id=418d2e43&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    "v-container",
    { staticClass: "pa-4 text-center" },
    [
      _c(
        "v-row",
        { staticClass: "fill-height" },
        [
          _vm._l(_vm.items, function(item, i) {
            return [
              _c(
                "v-col",
                { key: i, attrs: { cols: "12", md: "3" } },
                [
                  _c("v-hover", {
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "default",
                          fn: function(ref) {
                            var hover = ref.hover
                            return [
                              _c(
                                "v-card",
                                {
                                  class: { "on-hover": hover },
                                  attrs: {
                                    elevation: hover ? 12 : 2,
                                    height: "320",
                                    "max-width": "320"
                                  }
                                },
                                [
                                  _c("v-img", {
                                    attrs: { src: item.img, height: "320px" },
                                    on: {
                                      click: function($event) {
                                        return _vm.goTo(item.link)
                                      }
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
                  })
                ],
                1
              )
            ]
          })
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/modules/dashboard/casherDashboard.vue":
/*!************************************************************!*\
  !*** ./resources/js/modules/dashboard/casherDashboard.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _casherDashboard_vue_vue_type_template_id_418d2e43_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./casherDashboard.vue?vue&type=template&id=418d2e43&scoped=true& */ "./resources/js/modules/dashboard/casherDashboard.vue?vue&type=template&id=418d2e43&scoped=true&");
/* harmony import */ var _casherDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./casherDashboard.vue?vue&type=script&lang=js& */ "./resources/js/modules/dashboard/casherDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _casherDashboard_vue_vue_type_style_index_0_id_418d2e43_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./casherDashboard.vue?vue&type=style&index=0&id=418d2e43&scoped=true&lang=css& */ "./resources/js/modules/dashboard/casherDashboard.vue?vue&type=style&index=0&id=418d2e43&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _casherDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _casherDashboard_vue_vue_type_template_id_418d2e43_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _casherDashboard_vue_vue_type_template_id_418d2e43_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "418d2e43",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/dashboard/casherDashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/dashboard/casherDashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/modules/dashboard/casherDashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_casherDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./casherDashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/casherDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_casherDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/dashboard/casherDashboard.vue?vue&type=style&index=0&id=418d2e43&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/modules/dashboard/casherDashboard.vue?vue&type=style&index=0&id=418d2e43&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_casherDashboard_vue_vue_type_style_index_0_id_418d2e43_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./casherDashboard.vue?vue&type=style&index=0&id=418d2e43&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/casherDashboard.vue?vue&type=style&index=0&id=418d2e43&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_casherDashboard_vue_vue_type_style_index_0_id_418d2e43_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_casherDashboard_vue_vue_type_style_index_0_id_418d2e43_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_casherDashboard_vue_vue_type_style_index_0_id_418d2e43_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_casherDashboard_vue_vue_type_style_index_0_id_418d2e43_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_casherDashboard_vue_vue_type_style_index_0_id_418d2e43_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/dashboard/casherDashboard.vue?vue&type=template&id=418d2e43&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/modules/dashboard/casherDashboard.vue?vue&type=template&id=418d2e43&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_casherDashboard_vue_vue_type_template_id_418d2e43_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./casherDashboard.vue?vue&type=template&id=418d2e43&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/casherDashboard.vue?vue&type=template&id=418d2e43&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_casherDashboard_vue_vue_type_template_id_418d2e43_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_casherDashboard_vue_vue_type_template_id_418d2e43_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);