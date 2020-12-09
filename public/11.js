(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/order/order.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/order/order.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth */ "./resources/js/services/auth/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router */ "./resources/js/router/index.js");
/* harmony import */ var vm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vm */ "./node_modules/vm-browserify/index.js");
/* harmony import */ var vm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _basic_loading_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../basic/loading.vue */ "./resources/js/basic/loading.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      itemSelected: null,
      itemId: this.$route.params.item,
      quantity: 1,
      cupSize: null,
      sugarLevel: null,
      addOns: [],
      cupType: null,
      cupEvent: "",
      sugarEvent: "",
      cupTypeEvent: "",
      addOnsEvent: "",
      addOnsAmount: 0,
      subTotal: 0,
      total: null,
      lowPrice: null,
      highPrice: null,
      overPrice: null,
      onlinelowPrice: null,
      onlinehighPrice: null,
      onlineoverPrice: null,
      productData: null,
      addOnsData: null,
      cupData: null,
      addOnsPrice: null,
      cupPrice: null,
      errorMessage: null,
      errorMessage1: null,
      errorMessage2: null,
      errorMessage3: null,
      customerType: localStorage.getItem("customerType"),
      loadingShow: false
    };
  },
  components: {
    loading: _basic_loading_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  mounted: function mounted() {
    this.getProduct();
    this.retrieveProducts();
    this.retrieveAddOns();
    this.retrieveCupType();
  },
  methods: {
    getAddOnsName: function getAddOnsName(item) {
      var value = "";

      if (this.customerType === "foodpanda" || this.customerType === "grab") {
        value = item.addons_name + " (+" + item.onlineAddOnsPrice + ")";
      } else {
        value = item.addons_name + " (+" + item.addons_price + ")";
      }

      return value;
    },
    retrieveCupType: function retrieveCupType() {
      var _this = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveCupType", {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this.cupData = response.data.cupType;
        _this.loadingShow = false;
      });
    },
    getCupSize: function getCupSize(params, event) {
      var a = 0;

      if (this.cupEvent !== event.target) {
        event.target.classList.remove("normalColor");
        event.target.classList.add("color");
        this.cupSize = params;

        if (this.customerType === "foodpanda" || this.customerType === "grab") {
          if (params === "highDose") {
            this.total = this.onlinehighPrice;
          } else if (params === "overDose") {
            this.total = this.onlineoverPrice;
          } else if (params === "lowDose") {
            this.total = this.onlinelowPrice;
          }
        } else {
          if (params === "highDose") {
            this.total = this.highPrice;
          } else if (params === "overDose") {
            this.total = this.overPrice;
          } else if (params === "lowDose") {
            this.total = this.lowPrice;
          }
        }

        if (this.cupEvent !== "") {
          this.cupEvent.classList.add("normalColor");
          this.cupEvent.classList.remove("color");
        }
      }

      this.cupEvent = event.target;
      this.errorMessage = null;
    },
    getCupTypeName: function getCupTypeName(item) {
      var value = '';

      if (this.customerType === 'foodpanda' || this.customerType === 'grab') {
        value = item.cupTypeName + ' (+' + item.inputCupOnlinePrice + ')';
      } else {
        if (item.cupTypePrice === 0) {
          value = item.cupTypeName;
        } else {
          value = item.cupTypeName + ' (+' + item.cupTypePrice + ')';
        }
      }

      return value;
    },
    retrieveProducts: function retrieveProducts() {
      var _this2 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveAllProduct", {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this2.productData = response.data.product;
        _this2.loadingShow = false;
      });
    },
    retrieveAddOns: function retrieveAddOns() {
      var _this3 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrievingAddOns", {}, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this3.addOnsData = response.data.addons;
        _this3.loadingShow = false;
      });
    },
    getProduct: function getProduct() {
      var _this4 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'retrieveOneProduct', {
        id: this.itemId
      }, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        _this4.itemSelected = response.data.product[0].productName;
        _this4.lowPrice = response.data.product[0].lowPrice;
        _this4.highPrice = response.data.product[0].highPrice;
        _this4.overPrice = response.data.product[0].overPrice;
        _this4.onlinelowPrice = response.data.product[0].onlinelowPrice;
        _this4.onlinehighPrice = response.data.product[0].onlinehighPrice;
        _this4.onlineoverPrice = response.data.product[0].onlineoverPrice;
        _this4.loadingShow = false;
      });
    },
    getSugarLevel: function getSugarLevel(params, event) {
      if (this.sugarEvent !== event.target) {
        event.target.classList.remove('normalColor');
        event.target.classList.add('color');
        this.sugarLevel = params;

        if (this.sugarEvent !== '') {
          this.sugarEvent.classList.add('normalColor');
          this.sugarEvent.classList.remove('color');
        }
      }

      this.sugarEvent = event.target;
      this.errorMessage2 = null;
    },
    getCupType: function getCupType(params, event) {
      if (this.cupTypeEvent !== event.target) {
        event.target.classList.remove('normalColor');
        event.target.classList.add('color');
        this.cupType = params.cupTypeName;

        if (this.cupTypeEvent !== '') {
          this.cupTypeEvent.classList.add('normalColor');
          this.cupTypeEvent.classList.remove('color');
        }

        if (this.customerType === 'foodpanda' || this.customerType === 'grab') {
          this.cupPrice = params.inputCupOnlinePrice;
        } else {
          this.cupPrice = params.cupTypePrice;
        }
      }

      this.cupTypeEvent = event.target;
      this.errorMessage1 = null;
    },
    addAddOns: function addAddOns(params, event) {
      var _this5 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveOneAddOn", {
        id: params.id
      }, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
        }

        if (_this5.customerType === 'foodpanda' || _this5.customerType === 'grab') {
          _this5.addOnsPrice = response.data.addons.onlineAddOnsPrice;
        } else {
          _this5.addOnsPrice = response.data.addons.addons_price;
        }

        if (_this5.addOns.includes(params.addons_name)) {
          event.target.classList.remove('color');

          _this5.addOns.splice(_this5.addOns.indexOf(params.addons_name), 1);

          _this5.addOnsAmount -= _this5.addOnsPrice;
        } else {
          event.target.classList.add('color');

          _this5.addOns.push(params.addons_name);

          _this5.addOnsAmount += _this5.addOnsPrice;
        }
      });
    },
    addToCart: function addToCart() {
      var _this6 = this;

      if (this.quantity <= 0) {
        this.errorMessage3 = 'Quantity must be greater than 0!';
      } else {
        this.errorMessage3 = null;
      }

      if (this.cupSize === null) {
        this.errorMessage = 'Cup size is required!';
      }

      if (this.sugarLevel === null) {
        this.errorMessage2 = 'Sugar level is required!';
      }

      if (this.cupType === null) {
        this.errorMessage1 = 'Cup type is required!';
      }

      if (this.quantity > 0 && this.cupSize !== null && this.sugarLevel !== null && this.cupType !== null) {
        this.loadingShow = true;
        var parameter = {
          customerId: localStorage.getItem('customer'),
          cashierId: localStorage.getItem('cashierId') ? localStorage.getItem('cashierId') : localStorage.getItem('adminId'),
          productId: this.itemId,
          customerType: this.customerType,
          quantity: this.quantity,
          size: this.cupSize,
          sugarLevel: this.sugarLevel,
          choosenPrice: this.total,
          cupType: this.cupType,
          status: 'pending',
          addOns: this.addOns,
          subTotal: parseInt(this.quantity) * (parseInt(this.total) + parseInt(this.addOnsAmount) + parseInt(this.cupPrice))
        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'addOrder', parameter, _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].config).then(function (response) {
          _this6.loadingShow = false;

          if (response.data.status) {
            _services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].deauthenticate();
          }

          _router__WEBPACK_IMPORTED_MODULE_1__["default"].push('/productCategory/' + localStorage.getItem('customerType'))["catch"](function () {});
        });
      }

      this.cupTypeEvent = event.target;
    },
    previous: function previous() {
      var type = localStorage.getItem("customerType");
      _router__WEBPACK_IMPORTED_MODULE_1__["default"].push('/productCategory/' + type)["catch"](function () {});
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/order/order.vue?vue&type=style&index=0&id=766d0737&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/order/order.vue?vue&type=style&index=0&id=766d0737&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.errorColor[data-v-766d0737] {\r\n  color: red;\n}\n.addCart[data-v-766d0737]{\r\n    /* margin-top: 20% !important; */\r\n    width: 300px !important;\r\n    height: 45px !important;\r\n    /* margin-top: -150px !important; */\r\n    background-color: #11c408 !important;\n}\n.quantity[data-v-766d0737] {\r\n  margin-top: 9%;\r\n  margin-bottom: 5%;\n}\n.form-control[data-v-766d0737] {\r\n  text-align: center;\r\n  width: 90%;\r\n  font-weight: bold;\r\n  font-size: 20px;\n}\n[data-v-766d0737]::-webkit-scrollbar {\r\n  width: 1px;\n}\n.cupType[data-v-766d0737] {\r\n  margin-top: 25%;\n}\n.row[data-v-766d0737]{\r\n    width: 90%;\r\n    /* height: 650px; */\r\n    overflow-y: scroll;\r\n    margin-top: 3%;\r\n    /* background-color: white; */\n}\n.btn[data-v-766d0737]{\r\n    margin-top: 5%;\r\n    width: 35px;\r\n    width: 90%;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    background-color: #E65100;\n}\n.sudlanan[data-v-766d0737]{\r\n    background-color: white;\r\n    height: 92.8vh;\r\n    color:white;\r\n    font-family: Roboto Slab;\n}\n.color[data-v-766d0737] {\r\n  background: #89afe8;\n}\n.normalColor[data-v-766d0737] {\r\n  background: #E65100;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/order/order.vue?vue&type=style&index=0&id=766d0737&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/order/order.vue?vue&type=style&index=0&id=766d0737&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./order.vue?vue&type=style&index=0&id=766d0737&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/order/order.vue?vue&type=style&index=0&id=766d0737&scoped=true&lang=css&");

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

/***/ "./node_modules/vm-browserify/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vm-browserify/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var indexOf = function (xs, item) {
    if (xs.indexOf) return xs.indexOf(item);
    else for (var i = 0; i < xs.length; i++) {
        if (xs[i] === item) return i;
    }
    return -1;
};
var Object_keys = function (obj) {
    if (Object.keys) return Object.keys(obj)
    else {
        var res = [];
        for (var key in obj) res.push(key)
        return res;
    }
};

var forEach = function (xs, fn) {
    if (xs.forEach) return xs.forEach(fn)
    else for (var i = 0; i < xs.length; i++) {
        fn(xs[i], i, xs);
    }
};

var defineProp = (function() {
    try {
        Object.defineProperty({}, '_', {});
        return function(obj, name, value) {
            Object.defineProperty(obj, name, {
                writable: true,
                enumerable: false,
                configurable: true,
                value: value
            })
        };
    } catch(e) {
        return function(obj, name, value) {
            obj[name] = value;
        };
    }
}());

var globals = ['Array', 'Boolean', 'Date', 'Error', 'EvalError', 'Function',
'Infinity', 'JSON', 'Math', 'NaN', 'Number', 'Object', 'RangeError',
'ReferenceError', 'RegExp', 'String', 'SyntaxError', 'TypeError', 'URIError',
'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape',
'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'undefined', 'unescape'];

function Context() {}
Context.prototype = {};

var Script = exports.Script = function NodeScript (code) {
    if (!(this instanceof Script)) return new Script(code);
    this.code = code;
};

Script.prototype.runInContext = function (context) {
    if (!(context instanceof Context)) {
        throw new TypeError("needs a 'context' argument.");
    }
    
    var iframe = document.createElement('iframe');
    if (!iframe.style) iframe.style = {};
    iframe.style.display = 'none';
    
    document.body.appendChild(iframe);
    
    var win = iframe.contentWindow;
    var wEval = win.eval, wExecScript = win.execScript;

    if (!wEval && wExecScript) {
        // win.eval() magically appears when this is called in IE:
        wExecScript.call(win, 'null');
        wEval = win.eval;
    }
    
    forEach(Object_keys(context), function (key) {
        win[key] = context[key];
    });
    forEach(globals, function (key) {
        if (context[key]) {
            win[key] = context[key];
        }
    });
    
    var winKeys = Object_keys(win);

    var res = wEval.call(win, this.code);
    
    forEach(Object_keys(win), function (key) {
        // Avoid copying circular objects like `top` and `window` by only
        // updating existing context properties or new properties in the `win`
        // that was only introduced after the eval.
        if (key in context || indexOf(winKeys, key) === -1) {
            context[key] = win[key];
        }
    });

    forEach(globals, function (key) {
        if (!(key in context)) {
            defineProp(context, key, win[key]);
        }
    });
    
    document.body.removeChild(iframe);
    
    return res;
};

Script.prototype.runInThisContext = function () {
    return eval(this.code); // maybe...
};

Script.prototype.runInNewContext = function (context) {
    var ctx = Script.createContext(context);
    var res = this.runInContext(ctx);

    if (context) {
        forEach(Object_keys(ctx), function (key) {
            context[key] = ctx[key];
        });
    }

    return res;
};

forEach(Object_keys(Script.prototype), function (name) {
    exports[name] = Script[name] = function (code) {
        var s = Script(code);
        return s[name].apply(s, [].slice.call(arguments, 1));
    };
});

exports.isContext = function (context) {
    return context instanceof Context;
};

exports.createScript = function (code) {
    return exports.Script(code);
};

exports.createContext = Script.createContext = function (context) {
    var copy = new Context();
    if(typeof context === 'object') {
        forEach(Object_keys(context), function (key) {
            copy[key] = context[key];
        });
    }
    return copy;
};


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/order/order.vue?vue&type=template&id=766d0737&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/order/order.vue?vue&type=template&id=766d0737&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "sudlanan" },
    [
      _c(
        "div",
        [
          _c(
            "v-btn",
            {
              staticClass: "warning",
              staticStyle: { "margin-left": "3%", "margin-top": "10px" },
              on: {
                click: function($event) {
                  return _vm.previous()
                }
              }
            },
            [_c("v-icon", [_vm._v("mdi-home")]), _vm._v("  Back\n    ")],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "center",
        [
          _c("h1", { staticStyle: { "margin-top": "2%", color: "black" } }, [
            _vm._v(_vm._s(_vm.itemSelected))
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-md-4" },
              [
                _c(
                  "center",
                  [
                    _c("h3", { staticClass: "black--text " }, [
                      _vm._v("Cup's Size")
                    ]),
                    _vm._v(" "),
                    _vm.errorMessage !== null
                      ? _c("span", { staticClass: "errorColor" }, [
                          _vm._v(_vm._s(_vm.errorMessage))
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn overline ",
                        on: {
                          click: function($event) {
                            return _vm.getCupSize("lowDose", $event)
                          }
                        }
                      },
                      [_vm._v("Low Dose")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn overline",
                        on: {
                          click: function($event) {
                            return _vm.getCupSize("highDose", $event)
                          }
                        }
                      },
                      [_vm._v("High Dose")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn overline",
                        on: {
                          click: function($event) {
                            return _vm.getCupSize("overDose", $event)
                          }
                        }
                      },
                      [_vm._v("Over Dose")]
                    ),
                    _vm._v(" "),
                    _c("h3", { staticClass: "cupType black--text" }, [
                      _vm._v("Cup Type")
                    ]),
                    _vm._v(" "),
                    _vm.errorMessage1 !== null
                      ? _c("span", { staticClass: "errorColor" }, [
                          _vm._v(_vm._s(_vm.errorMessage1))
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(_vm.cupData, function(item, index) {
                      return _c(
                        "button",
                        {
                          key: index,
                          staticClass: "btn",
                          on: {
                            click: function($event) {
                              return _vm.getCupType(item, $event)
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.getCupTypeName(item)))]
                      )
                    })
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-4" },
              [
                _c("center", [
                  _c("h3", { staticClass: "black--text" }, [
                    _vm._v("Sugar Level")
                  ]),
                  _vm._v(" "),
                  _vm.errorMessage2 !== null
                    ? _c("span", { staticClass: "errorColor" }, [
                        _vm._v(_vm._s(_vm.errorMessage2))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn overline ",
                      on: {
                        click: function($event) {
                          return _vm.getSugarLevel("0%", $event)
                        }
                      }
                    },
                    [_vm._v("0%")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn overline",
                      on: {
                        click: function($event) {
                          return _vm.getSugarLevel("25%", $event)
                        }
                      }
                    },
                    [_vm._v("25%")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn overline",
                      on: {
                        click: function($event) {
                          return _vm.getSugarLevel("50%", $event)
                        }
                      }
                    },
                    [_vm._v("50%")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn overline",
                      on: {
                        click: function($event) {
                          return _vm.getSugarLevel("75%", $event)
                        }
                      }
                    },
                    [_vm._v("75%")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn overline",
                      on: {
                        click: function($event) {
                          return _vm.getSugarLevel("100%", $event)
                        }
                      }
                    },
                    [_vm._v("100%")]
                  ),
                  _vm._v(" "),
                  _c("h3", { staticClass: "quantity black--text" }, [
                    _vm._v("Quantity of Order")
                  ]),
                  _vm._v(" "),
                  _vm.errorMessage3 !== null
                    ? _c("span", { staticClass: "errorColor" }, [
                        _vm._v(_vm._s(_vm.errorMessage3))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.quantity,
                        expression: "quantity"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "number", min: "1" },
                    domProps: { value: _vm.quantity },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.quantity = $event.target.value
                      }
                    }
                  })
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-4" },
              [
                _c(
                  "center",
                  [
                    _c("h3", { staticClass: "black--text" }, [
                      _vm._v("Add-ons"),
                      _c(
                        "span",
                        {
                          staticClass: "black--text",
                          staticStyle: { "font-size": "15px" }
                        },
                        [_vm._v("(Optional)")]
                      )
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.addOnsData, function(item, index) {
                      return _c(
                        "button",
                        {
                          key: index,
                          staticClass: "btn overline",
                          on: {
                            click: function($event) {
                              return _vm.addAddOns(item, $event)
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.getAddOnsName(item)))]
                      )
                    })
                  ],
                  2
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("center", [
            _c(
              "button",
              {
                staticClass: "btn addCart overline",
                on: {
                  click: function($event) {
                    return _vm.addToCart()
                  }
                }
              },
              [_vm._v("Add to Cart")]
            )
          ]),
          _vm._v(" "),
          _vm.loadingShow ? _c("loading") : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/modules/order/order.vue":
/*!**********************************************!*\
  !*** ./resources/js/modules/order/order.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_vue_vue_type_template_id_766d0737_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.vue?vue&type=template&id=766d0737&scoped=true& */ "./resources/js/modules/order/order.vue?vue&type=template&id=766d0737&scoped=true&");
/* harmony import */ var _order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.vue?vue&type=script&lang=js& */ "./resources/js/modules/order/order.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _order_vue_vue_type_style_index_0_id_766d0737_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order.vue?vue&type=style&index=0&id=766d0737&scoped=true&lang=css& */ "./resources/js/modules/order/order.vue?vue&type=style&index=0&id=766d0737&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _order_vue_vue_type_template_id_766d0737_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _order_vue_vue_type_template_id_766d0737_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "766d0737",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/order/order.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/order/order.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/modules/order/order.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./order.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/order/order.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/order/order.vue?vue&type=style&index=0&id=766d0737&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/modules/order/order.vue?vue&type=style&index=0&id=766d0737&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_style_index_0_id_766d0737_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./order.vue?vue&type=style&index=0&id=766d0737&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/order/order.vue?vue&type=style&index=0&id=766d0737&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_style_index_0_id_766d0737_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_style_index_0_id_766d0737_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_style_index_0_id_766d0737_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_style_index_0_id_766d0737_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/modules/order/order.vue?vue&type=template&id=766d0737&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/modules/order/order.vue?vue&type=template&id=766d0737&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_template_id_766d0737_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./order.vue?vue&type=template&id=766d0737&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/order/order.vue?vue&type=template&id=766d0737&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_template_id_766d0737_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_template_id_766d0737_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);