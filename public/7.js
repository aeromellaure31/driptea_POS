(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/adminDashboard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/dashboard/adminDashboard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth */ "./resources/js/services/auth/index.js");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! os */ "./node_modules/os-browserify/browser.js");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_noDatatoShow_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/noDatatoShow.png */ "./resources/assets/noDatatoShow.png");
/* harmony import */ var _assets_noDatatoShow_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_noDatatoShow_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _basic_loading_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../basic/loading.vue */ "./resources/js/basic/loading.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







 // import index from "../../services/auth";

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      //------------- for product summary -------
      // v models
      thedate2: null,
      thefilter2: "Daily",
      yrvalueS: null,
      Multiyrvalue2: [],
      MonthLabel2: null,
      // sa chart
      options2: {
        colors: [],
        chart: {
          id: "sales-summary"
        },
        xaxis: {
          categories: []
        },
        stroke: {
          width: 2,
          curve: "smooth"
        }
      },
      series2: [],
      secondpoints: [],
      productName: [],
      //-------------- for sales summary --------
      tempimg: _assets_noDatatoShow_png__WEBPACK_IMPORTED_MODULE_6___default.a,
      Multiyrvalue: [],
      date: ["2019-09-10", "2019-09-20"],
      menu: false,
      modal: false,
      YearEnd: null,
      YearStart: null,
      ok: true,
      ok2: false,
      ok3: false,
      yrfrmdb: null,
      yrvalue: null,
      theMonth: null,
      theYear: null,
      lastDate: null,
      thefilter: "Daily",
      xlabels: [],
      options: {
        colors: ["#ff5b04"],
        chart: {
          id: "sales-summary"
        },
        xaxis: {
          categories: []
        },
        stroke: {
          width: 2,
          curve: "smooth"
        }
      },
      series: [{
        name: "Sales",
        data: []
      }],
      options0: {},
      series0: [],
      points: [],
      thedate: null,
      years: [],
      MonthLabel: null,
      mnths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      quarter: ["Jan-Mar", "Apr-Jun", "Jul-Sept", "Oct-Dec"],
      semi: ["Jan-Jun", "Jul-Dec"],
      annualLabels: [],
      firstQ: [],
      secondQ: [],
      thirdQ: [],
      forthQ: [],
      QauterData: [],
      first_Half: null,
      second_Half: null,
      semi_Data: [],
      topprodarr: [{
        img: _assets_noDatatoShow_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        name: ""
      }, {
        img: _assets_noDatatoShow_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        name: ""
      }, {
        img: _assets_noDatatoShow_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        name: ""
      }],
      defaultDate: null,
      DatePickerFormat: "yyyy",
      loadingShow: false
    };
  },
  components: {
    salesChart: vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default.a,
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_3__["default"],
    loading: _basic_loading_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  computed: {},
  mounted: function mounted() {
    // console.log("-------------- ",nodataImg);
    var date = new Date();
    var month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
    this.thedate = date.getFullYear() + "-" + month;
    this.thedate2 = date.getFullYear() + "-" + month;
    this.MonthLabel = this.mnths[month - 1];
    this.MonthLabel2 = this.mnths[month - 1];
    this.yrvalue = new Date().getFullYear();
    this.yrvalueS = new Date().getFullYear();
    this.getYears();
    this.getDate();
    this.xvalues();
    this.options2.categories = this.xlabels;
    this.getDailySummary();
    this.getProductNames();
    this.dailyProductSale();
    this.getRandomColor();
  },
  created: function created() {
    this.getTop3();
  },
  methods: {
    getRandomColor: function getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";

      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      } // console.log("ang color", color)


      return color;
    },
    getProductNames: function getProductNames() {
      var _this = this;

      var params = {
        month: null
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].url + "getProducts", params, _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].config).then(function (response) {
        // console.log("jsakjfkfksaf ", response);
        response.data.product.forEach(function (element) {
          _this.productName.push(element.productName);
        }); // console.log("jsakjfkfksaf --------- ", this.productName);
      });
    },
    //...................  for Product sales graph ....................
    dailyProductSale: function dailyProductSale() {
      var _this2 = this;

      this.loadingShow = true;
      this.secondpoints = [];
      var params = {
        month: this.theMonth,
        year: this.theYear
      };
      var i;
      var ldate = this.lastDate;
      var PRODUCT = "";
      var forSeries = [];
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].url + "getDailyProductSales", params, _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].config).then(function (response) {
        console.log("heloooooooo ", response);

        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].deauthenticate();
        }

        _this2.loadingShow = false;
        console.log("nag length sa prod name bruh ..", ldate);

        _this2.productName.forEach(function (name) {
          var color = _this2.getRandomColor();

          _this2.options2.colors.push(color);

          for (i = 1; i < ldate + 1; i++) {
            _this2.secondpoints.push(0);
          }

          forSeries.push({
            name: name,
            data: _this2.secondpoints
          });
          _this2.secondpoints = [];
        });

        forSeries.forEach(function (obj) {
          response.data.prods.forEach(function (prod) {
            if (prod.ProductName === obj.name) {
              var index = prod.date - 1;
              obj.data.splice(index, 1, parseInt(prod.quan));
            }
          });
        });

        if (response.data.prods.length > 0) {
          _this2.series2 = forSeries;
        } else {
          _this2.series2 = [];
        }

        console.log("forseries array bruh ", forSeries);
      });
      this.secondpoints = [];
      this.options2.colors = [];
    },
    MonthlyProductSale: function MonthlyProductSale(yyyy) {
      var _this3 = this;

      this.loadingShow = true;
      this.secondpoints = [];
      var params = {
        year: yyyy
      };
      var monthsfrmDB = [];
      var i;
      var totalfrmDB = [];
      var ldate = this.lastDate;
      var namesfromDB = [];
      var PRODUCT = "";
      var forSeries = [];
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].url + "getMonthlyProductSales", params, _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].config).then(function (response) {
        // console.log("heloooooooo ", response);
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].deauthenticate();
        }

        _this3.loadingShow = false;
        response.data.prods.forEach(function (element) {
          namesfromDB.push(element.ProductName);
          var d = element.month;
          var tots = element.quan;
          monthsfrmDB.push(d);
          totalfrmDB.push(tots);
        });

        _this3.productName.forEach(function (name) {
          if (namesfromDB.includes(name)) {
            response.data.prods.forEach(function (prod) {
              if (prod.ProductName === name) {
                PRODUCT = name;

                for (i = 1; i < _this3.mnths.length + 1; i++) {
                  if (prod.month === i) {
                    _this3.secondpoints.push(parseInt(prod.quan));
                  } else {
                    _this3.secondpoints.push(0);
                  }
                }

                forSeries.push({
                  name: PRODUCT,
                  data: _this3.secondpoints
                });

                var color = _this3.getRandomColor();

                _this3.options2.colors.push(color); // console.log("secondpoints ===", this.secondpoints);


                PRODUCT = "";
                _this3.secondpoints = [];
              }
            });
          } else {
            PRODUCT = name;

            for (i = 1; i < _this3.mnths.length + 1; i++) {
              _this3.secondpoints.push(0);
            }

            forSeries.push({
              name: PRODUCT,
              data: _this3.secondpoints
            });

            var color = _this3.getRandomColor();

            _this3.options2.colors.push(color);

            PRODUCT = "";
            _this3.secondpoints = [];
          }
        });

        if (response.data.prods.length > 0) {
          _this3.series2 = forSeries; // console.log("ang series 2", this.series2);
        } else {
          _this3.series2 = [];
        }
      });
      this.secondpoints = [];
      this.options2.colors = [];
    },
    QuarterlyProductSale: function QuarterlyProductSale(yyyy) {
      var _this4 = this;

      this.loadingShow = true;
      this.secondpoints = [];
      var params = {
        year: yyyy
      };
      var monthsfrmDB = [];
      var i;
      var totalfrmDB = []; // let xs = this.xlabels;

      var ldate = this.lastDate;
      var namesfromDB = [];
      var PRODUCT = "";
      var forSeries = [];
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].url + "getQuarterlyProductSales", params, _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].config).then(function (response) {
        // console.log("heloooooooo ", response);
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].deauthenticate();
        }

        _this4.loadingShow = false;
        response.data.prods.forEach(function (element) {
          namesfromDB.push(element.ProductName);
          var d = element.month;
          var tots = element.quan;
          monthsfrmDB.push(d);
          totalfrmDB.push(tots);
        });

        _this4.productName.forEach(function (name) {
          if (namesfromDB.includes(name)) {
            response.data.prods.forEach(function (prod) {
              if (prod.ProductName === name) {
                PRODUCT = name;

                for (i = 1; i < _this4.mnths.length + 1; i++) {
                  if (prod.month === i) {
                    _this4.secondpoints.push(parseInt(prod.quan));
                  } else {
                    _this4.secondpoints.push(0);
                  }
                }

                console.log("Quarter data bruh ", _this4.secondpoints);

                for (var i = 0; i < _this4.secondpoints.length; i++) {
                  if (i == 0 || i == 1 || i == 2) {
                    _this4.firstQ.push(_this4.secondpoints[i]);
                  } else if (i == 3 || i == 4 || i == 5) {
                    _this4.secondQ.push(_this4.secondpoints[i]);
                  } else if (i == 6 || i == 7 || i == 8) {
                    _this4.thirdQ.push(_this4.secondpoints[i]);
                  } else if (i == 9 || i == 10 || i == 11) {
                    _this4.forthQ.push(_this4.secondpoints[i]);
                  }
                }

                _this4.QauterData = [];

                var one = _this4.firstQ.reduce(function (total, num) {
                  return total + num;
                });

                _this4.QauterData.push(one);

                console.log("Quarter data bruh ", _this4.QauterData);

                var two = _this4.secondQ.reduce(function (total, num) {
                  return total + num;
                });

                _this4.QauterData.push(two);

                var three = _this4.thirdQ.reduce(function (total, num) {
                  return total + num;
                });

                _this4.QauterData.push(three);

                var four = _this4.forthQ.reduce(function (total, num) {
                  return total + num;
                });

                _this4.QauterData.push(four);

                _this4.secondpoints = _this4.QauterData;
                forSeries.push({
                  name: PRODUCT,
                  data: _this4.secondpoints
                });

                var color = _this4.getRandomColor();

                _this4.options2.colors.push(color); // console.log("secondpoints ===", this.secondpoints);


                PRODUCT = "";
                _this4.secondpoints = [];
              }
            });
            _this4.firstQ = [];
            _this4.secondQ = [];
            _this4.thirdQ = [];
            _this4.forthQ = [];
            _this4.QauterData = [];
          } else {
            PRODUCT = name;

            for (i = 1; i < _this4.mnths.length + 1; i++) {
              _this4.secondpoints.push(0);
            }

            for (var i = 0; i < _this4.secondpoints.length; i++) {
              if (i == 0 || i == 1 || i == 2) {
                _this4.firstQ.push(_this4.secondpoints[i]);
              } else if (i == 3 || i == 4 || i == 5) {
                _this4.secondQ.push(_this4.secondpoints[i]);
              } else if (i == 6 || i == 7 || i == 8) {
                _this4.thirdQ.push(_this4.secondpoints[i]);
              } else if (i == 9 || i == 10 || i == 11) {
                _this4.forthQ.push(_this4.secondpoints[i]);
              }
            }

            _this4.QauterData = [];

            var one = _this4.firstQ.reduce(function (total, num) {
              return total + num;
            });

            _this4.QauterData.push(one);

            var two = _this4.secondQ.reduce(function (total, num) {
              return total + num;
            });

            _this4.QauterData.push(two);

            var three = _this4.thirdQ.reduce(function (total, num) {
              return total + num;
            });

            _this4.QauterData.push(three);

            var four = _this4.forthQ.reduce(function (total, num) {
              return total + num;
            });

            _this4.QauterData.push(four);

            _this4.secondpoints = _this4.QauterData;
            forSeries.push({
              name: PRODUCT,
              data: _this4.secondpoints
            });

            var color = _this4.getRandomColor();

            _this4.options2.colors.push(color);

            PRODUCT = "";
            _this4.secondpoints = [];
          }

          _this4.firstQ = [];
          _this4.secondQ = [];
          _this4.thirdQ = [];
          _this4.forthQ = [];
          _this4.QauterData = [];
        });

        if (response.data.prods.length > 0) {
          _this4.series2 = forSeries; // console.log("ang series 2", this.series2);
        } else {
          _this4.series2 = [];
        }
      });
      this.firstQ = [];
      this.secondQ = [];
      this.thirdQ = [];
      this.forthQ = [];
      this.QauterData = [];
      this.options2.colors = [];
    },
    SemiProductSale: function SemiProductSale(yyyy) {
      var _this5 = this;

      this.loadingShow = true;
      this.secondpoints = [];
      var params = {
        year: yyyy
      };
      var monthsfrmDB = [];
      var i;
      var totalfrmDB = []; // let xs = this.xlabels;

      var ldate = this.lastDate;
      var namesfromDB = [];
      var PRODUCT = "";
      var forSeries = [];
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].url + "getSemiProductSales", params, _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].config).then(function (response) {
        // console.log("heloooooooo ", response);
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].deauthenticate();
        }

        _this5.loadingShow = false;
        response.data.prods.forEach(function (element) {
          namesfromDB.push(element.ProductName);
          var d = element.month;
          var tots = element.quan;
          monthsfrmDB.push(d);
          totalfrmDB.push(tots);
        });

        _this5.productName.forEach(function (name) {
          if (namesfromDB.includes(name)) {
            response.data.prods.forEach(function (prod) {
              if (prod.ProductName === name) {
                PRODUCT = name;

                for (i = 1; i < _this5.mnths.length + 1; i++) {
                  if (prod.month === i) {
                    _this5.secondpoints.push(parseInt(prod.quan));
                  } else {
                    _this5.secondpoints.push(0);
                  }
                }

                for (var i = 0; i < _this5.secondpoints.length; i++) {
                  if (i == 0 || i == 1 || i == 2) {
                    _this5.firstQ.push(_this5.secondpoints[i]);
                  } else if (i == 3 || i == 4 || i == 5) {
                    _this5.secondQ.push(_this5.secondpoints[i]);
                  } else if (i == 6 || i == 7 || i == 8) {
                    _this5.thirdQ.push(_this5.secondpoints[i]);
                  } else if (i == 9 || i == 10 || i == 11) {
                    _this5.forthQ.push(_this5.secondpoints[i]);
                  }
                }

                _this5.QauterData = [];

                var one = _this5.firstQ.reduce(function (total, num) {
                  return total + num;
                });

                var two = _this5.secondQ.reduce(function (total, num) {
                  return total + num;
                });

                var three = _this5.thirdQ.reduce(function (total, num) {
                  return total + num;
                });

                var four = _this5.forthQ.reduce(function (total, num) {
                  return total + num;
                });

                _this5.first_Half = one + two;
                _this5.second_Half = three + four;

                _this5.semi_Data.push(_this5.first_Half);

                _this5.semi_Data.push(_this5.second_Half); // this.points = this.semi_Data;


                _this5.secondpoints = _this5.semi_Data;
                forSeries.push({
                  name: PRODUCT,
                  data: _this5.secondpoints
                }); // console.log("secondpoints ===", this.secondpoints);

                PRODUCT = "";
                _this5.secondpoints = [];
              }
            });
            _this5.firstQ = [];
            _this5.secondQ = [];
            _this5.thirdQ = [];
            _this5.forthQ = [];
            _this5.QauterData = [];
            _this5.semi_Data = [];
          } else {
            PRODUCT = name;

            for (i = 1; i < _this5.mnths.length + 1; i++) {
              _this5.secondpoints.push(0);
            }

            for (var i = 0; i < _this5.secondpoints.length; i++) {
              if (i == 0 || i == 1 || i == 2) {
                _this5.firstQ.push(_this5.secondpoints[i]);
              } else if (i == 3 || i == 4 || i == 5) {
                _this5.secondQ.push(_this5.secondpoints[i]);
              } else if (i == 6 || i == 7 || i == 8) {
                _this5.thirdQ.push(_this5.secondpoints[i]);
              } else if (i == 9 || i == 10 || i == 11) {
                _this5.forthQ.push(_this5.secondpoints[i]);
              }
            }

            _this5.QauterData = [];

            var one = _this5.firstQ.reduce(function (total, num) {
              return total + num;
            });

            var two = _this5.secondQ.reduce(function (total, num) {
              return total + num;
            });

            var three = _this5.thirdQ.reduce(function (total, num) {
              return total + num;
            });

            var four = _this5.forthQ.reduce(function (total, num) {
              return total + num;
            });

            _this5.first_Half = one + two;
            _this5.second_Half = three + four;

            _this5.semi_Data.push(_this5.first_Half);

            _this5.semi_Data.push(_this5.second_Half); // this.points = this.semi_Data;


            _this5.secondpoints = _this5.semi_Data;
            forSeries.push({
              name: PRODUCT,
              data: _this5.secondpoints
            });

            var color = _this5.getRandomColor();

            _this5.options2.colors.push(color);

            PRODUCT = "";
            _this5.secondpoints = [];
          }

          _this5.firstQ = [];
          _this5.secondQ = [];
          _this5.thirdQ = [];
          _this5.forthQ = [];
          _this5.QauterData = [];
          _this5.semi_Data = [];
        });

        if (response.data.prods.length > 0) {
          _this5.series2 = forSeries; // console.log("ang series 2", this.series2);
        } else {
          _this5.series2 = [];
        }
      });
      this.firstQ = [];
      this.secondQ = [];
      this.thirdQ = [];
      this.forthQ = [];
      this.QauterData = [];
      this.semi_Data = [];
      this.options2.colors = [];
    },
    onFilter2: function onFilter2() {
      if (this.thefilter2 == "Daily") {
        this.options2.xaxis.categories = [];
        this.MonthLabel2 = this.mnths[this.theMonth - 1];
        this.options2.xaxis.categories = this.xlabels;
        this.dailyProductSale();
        this.ok = true;
        this.ok2 = false;
        this.ok3 = false;
      } else if (this.thefilter2 == "Weekly") {} else if (this.thefilter2 == "Monthly") {
        console.log("ang colors bruh ", this.options2.colors); // console.log("ang year value ", this.yrvalueS);

        this.MonthLabel2 = new Date(this.thedate2).getFullYear();
        this.options2.xaxis.categories = this.mnths;
        this.ok = false;
        this.ok2 = true;
        this.ok3 = false;
        this.MonthlyProductSale(this.yrvalueS); // console.log("ang colors bruh ", this.options2.colors);
      } else if (this.thefilter2 == "Quarterly") {
        this.MonthLabel2 = new Date(this.thedate2).getFullYear();
        this.options2.xaxis.categories = this.quarter;
        this.QuarterlyProductSale(this.yrvalueS);
        this.ok = false;
        this.ok2 = true;
        this.ok3 = false;
      } else if (this.thefilter2 == "Semi-Annual") {
        this.MonthLabel2 = new Date(this.thedate2).getFullYear();
        this.options2.xaxis.categories = this.semi;
        this.SemiProductSale(this.yrvalueS);
        this.ok = false;
        this.ok2 = true;
        this.ok3 = false;
      } else if (this.thefilter2 == "Annual") {
        this.ok = false;
        this.ok2 = false;
        this.ok3 = true;
        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
          title: "Ctrl + click(select)",
          text: "After Selecting Year start, Press Ctrl + Click to Select Year End",
          icon: "warning",
          dangerMode: true
        });
      }
    },
    onChangeYear2: function onChangeYear2() {
      if (this.thefilter2 == "Monthly") {
        this.MonthlyProductSale(this.yrvalue2);
        this.MonthLabel2 = this.yrvalue2;
      } else if (this.thefilter2 == "Quarterly") {
        this.QuarterlyProductSale(this.yrvalue2);
        this.MonthLabel2 = this.yrvalue2;
      } else if (this.thefilter2 == "Semi-Annual") {
        this.SemiProductSale(this.yrvalueS);
        this.MonthLabel2 = this.yrvalueS;
      } else if (this.thefilter2 == "Annual") {}
    },
    // --------------------- for sales summary graph -----------------------------------
    getDailySummary: function getDailySummary() {
      var _this6 = this;

      this.loadingShow = true;
      this.points = [];
      var params = {
        month: this.theMonth,
        year: this.theYear
      };
      var i;
      var dateFrmDBarr = [];
      var totalfrmDB = []; // let xs = this.xlabels;

      var ldate = this.lastDate;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].url + "getDailySales", params, _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].deauthenticate();
        }

        _this6.loadingShow = false;
        response.data.total.forEach(function (element) {
          var d = element.date;
          var tots = element.sub;
          dateFrmDBarr.push(d);
          totalfrmDB.push(tots);
        });

        for (i = 1; i < ldate + 1; i++) {
          if (dateFrmDBarr.includes(i)) {
            response.data.total.forEach(function (element) {
              if (element.date == i) {
                _this6.points.push(element.sub);
              }
            });
          } else {
            _this6.points.push(0);
          }
        }

        if (response.data.total.length > 0) {
          _this6.series = [{
            data: _this6.points
          }];
        } else {
          _this6.series = [];
        }
      });
      this.points = [];
    },
    getDate: function getDate() {
      var date = new Date();
      this.theMonth = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
      this.theYear = date.getFullYear();
      this.lastDate = new Date(this.theYear, this.theMonth, 0).getDate();
      this.xvalues();
    },
    xvalues: function xvalues() {
      this.xlabels = [];
      var i;

      for (i = 1; i < this.lastDate + 1; i++) {
        this.xlabels.push(i);
      }

      this.categories = this.xlabels;
    },
    onFilter: function onFilter() {
      if (this.thefilter == "Daily") {
        this.MonthLabel = this.mnths[this.theMonth - 1];
        this.options = {
          colors: ["#ff5b04"],
          chart: {
            id: "sales-summary"
          },
          xaxis: {
            categories: this.xlabels
          },
          stroke: {
            width: 2,
            curve: "smooth"
          }
        };
        this.getDailySummary();
        this.ok = true;
        this.ok2 = false;
        this.ok3 = false;
        this.options.xaxis.categories = [];
      } else if (this.thefilter == "Weekly") {} else if (this.thefilter == "Monthly") {
        this.getMonthlySummary(this.yrvalue);
        this.MonthLabel = new Date(this.thedate).getFullYear();
        this.options = {
          colors: ["#ff5b04"],
          chart: {
            id: "sales-summary"
          },
          xaxis: {
            categories: this.mnths
          },
          stroke: {
            width: 2,
            curve: "smooth"
          }
        };
        this.ok = false;
        this.ok2 = true;
        this.ok3 = false;
      } else if (this.thefilter == "Quarterly") {
        this.MonthLabel = new Date(this.thedate).getFullYear();
        this.getQuarterlySummary(this.yrvalue);
        this.options = {
          colors: ["#ff5b04"],
          chart: {
            id: "sales-summary"
          },
          xaxis: {
            categories: this.quarter
          },
          stroke: {
            width: 2,
            curve: "smooth"
          }
        };
        this.ok = false;
        this.ok2 = true;
        this.ok3 = false;
      } else if (this.thefilter == "Semi-Annual") {
        this.MonthLabel = new Date(this.thedate).getFullYear();
        this.getSemi_AnnualSummary(this.yrvalue);
        this.options = {
          colors: ["#ff5b04"],
          chart: {
            id: "sales-summary"
          },
          xaxis: {
            categories: this.semi
          },
          stroke: {
            width: 2,
            curve: "smooth"
          }
        };
        this.ok = false;
        this.ok2 = true;
        this.ok3 = false;
      } else if (this.thefilter == "Annual") {
        this.ok = false;
        this.ok2 = false;
        this.ok3 = true;
        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
          title: "Ctrl + click(select)",
          text: "After Selecting Year start, Press Ctrl + Click to Select Year End",
          icon: "warning",
          dangerMode: true
        });
      }
    },
    onChangeDate: function onChangeDate() {
      this.lastDate = null;
      var d = new Date(this.thedate);
      this.theMonth = d.getMonth() + 1 > 9 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1);
      this.theYear = d.getFullYear();
      this.MonthLabel = this.mnths[this.theMonth - 1];
      var lastDate = new Date(this.theYear, this.theMonth, 0).getDate();
      this.lastDate = lastDate;
      this.xvalues();
      this.getDailySummary();
    },
    onChangeDatePS: function onChangeDatePS() {
      this.lastDate = null;
      var d = new Date(this.thedate2);
      this.theMonth = d.getMonth() + 1 > 9 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1);
      this.theYear2 = d.getFullYear();
      this.MonthLabel2 = this.mnths[this.theMonth - 1];
      var lastDate = new Date(this.theYear, this.theMonth, 0).getDate();
      this.lastDate = lastDate;
      this.xvalues();
      this.dailyProductSale();
    },
    onChangeYear: function onChangeYear() {
      if (this.thefilter == "Monthly") {
        this.getMonthlySummary(this.yrvalue);
        this.MonthLabel = this.yrvalue;
      } else if (this.thefilter == "Quarterly") {
        this.getQuarterlySummary(this.yrvalue);
        this.MonthLabel = this.yrvalue;
      } else if (this.thefilter == "Semi-Annual") {
        this.getSemi_AnnualSummary(this.yrvalue);
        this.MonthLabel = this.yrvalue;
      } else if (this.thefilter == "Annual") {}
    },
    onChanging: function onChanging() {
      this.getAnnualSummary(this.Multiyrvalue);
    },
    onChanging2: function onChanging2() {
      this.getAnnualSummary(this.Multiyrvalue);
    },
    getYears: function getYears() {
      var _this7 = this;

      this.loadingShow = true;
      var params = {
        year: this.yrvalue
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].url + "getyears", params, _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].deauthenticate();
        }

        _this7.loadingShow = false; // console.log("pre years array ",this.years)

        response.data.years.forEach(function (element) {
          console.log("years bruh ", element);
          var yr = element.year.substring(0, 4);

          if (_this7.years.includes(yr)) {} else {
            _this7.years.push(yr);
          }

          console.log("substring bruh ", yr); // // this.years.push({ text: yr, value: yr });
        });
      });
      console.log("years array ", this.years);
    },
    getMonthlySummary: function getMonthlySummary(yyyy) {
      var _this8 = this;

      this.loadingShow = true;
      this.points = [];
      var monthsfrmDB = [];
      var i;
      var params = {
        year: yyyy
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].url + "getmonthlySales", params, _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].deauthenticate();
        }

        _this8.loadingShow = false;
        response.data.subtotal.forEach(function (element) {
          var sub = element.sub;
          var month = element.month;
          monthsfrmDB.push(month);
        });

        for (i = 1; i < _this8.mnths.length + 1; i++) {
          if (monthsfrmDB.includes(i)) {
            response.data.subtotal.forEach(function (element) {
              if (element.month == i) {
                _this8.points.push(element.sub);
              }
            });
          } else {
            _this8.points.push(0);
          }
        }

        _this8.series = [{
          data: _this8.points
        }];
      });
    },
    getQuarterlySummary: function getQuarterlySummary(yyyy) {
      var _this9 = this;

      this.loadingShow = true;
      this.points = [];
      var monthsfrmDB = [];
      var i;
      var params = {
        year: yyyy
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].url + "getQuarterlySales", params, _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].deauthenticate();
        }

        _this9.loadingShow = false;
        response.data.subtotal.forEach(function (element) {
          var sub = element.sub;
          var month = element.month;
          monthsfrmDB.push(month);
        });

        for (i = 1; i < _this9.mnths.length + 1; i++) {
          if (monthsfrmDB.includes(i)) {
            response.data.subtotal.forEach(function (element) {
              if (element.month == i) {
                _this9.points.push(element.sub);
              }
            });
          } else {
            _this9.points.push(0);
          }
        }

        for (var i = 0; i < _this9.points.length; i++) {
          if (i == 0 || i == 1 || i == 2) {
            _this9.firstQ.push(_this9.points[i]);
          } else if (i == 3 || i == 4 || i == 5) {
            _this9.secondQ.push(_this9.points[i]);
          } else if (i == 6 || i == 7 || i == 8) {
            _this9.thirdQ.push(_this9.points[i]);
          } else if (i == 9 || i == 10 || i == 11) {
            _this9.forthQ.push(_this9.points[i]);
          }
        }

        _this9.QauterData = [];

        var one = _this9.firstQ.reduce(function (total, num) {
          return total + num;
        });

        _this9.QauterData.push(one);

        var two = _this9.secondQ.reduce(function (total, num) {
          return total + num;
        });

        _this9.QauterData.push(two);

        var three = _this9.thirdQ.reduce(function (total, num) {
          return total + num;
        });

        _this9.QauterData.push(three);

        var four = _this9.forthQ.reduce(function (total, num) {
          return total + num;
        });

        _this9.QauterData.push(four);

        _this9.points = _this9.QauterData;
        _this9.series = [{
          data: _this9.points
        }];
      });
      this.firstQ = [];
      this.secondQ = [];
      this.thirdQ = [];
      this.forthQ = [];
      this.QauterData = [];
    },
    getSemi_AnnualSummary: function getSemi_AnnualSummary(yyyy) {
      var _this10 = this;

      this.loadingShow = true;
      this.semi_Data = [];
      this.points = [];
      var monthsfrmDB = [];
      var i;
      var params = {
        year: yyyy
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].url + "getSemi-AnnualSales", params, _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].deauthenticate();
        }

        _this10.loadingShow = false;
        response.data.subtotal.forEach(function (element) {
          var sub = element.sub;
          var month = element.month;
          monthsfrmDB.push(month);
        });

        for (i = 1; i < _this10.mnths.length + 1; i++) {
          if (monthsfrmDB.includes(i)) {
            response.data.subtotal.forEach(function (element) {
              if (element.month == i) {
                _this10.points.push(element.sub);
              }
            });
          } else {
            _this10.points.push(0);
          }
        }

        for (var i = 0; i < _this10.points.length; i++) {
          if (i == 0 || i == 1 || i == 2) {
            _this10.firstQ.push(_this10.points[i]);
          } else if (i == 3 || i == 4 || i == 5) {
            _this10.secondQ.push(_this10.points[i]);
          } else if (i == 6 || i == 7 || i == 8) {
            _this10.thirdQ.push(_this10.points[i]);
          } else if (i == 9 || i == 10 || i == 11) {
            _this10.forthQ.push(_this10.points[i]);
          }
        }

        _this10.QauterData = [];

        var one = _this10.firstQ.reduce(function (total, num) {
          return total + num;
        });

        var two = _this10.secondQ.reduce(function (total, num) {
          return total + num;
        });

        var three = _this10.thirdQ.reduce(function (total, num) {
          return total + num;
        });

        var four = _this10.forthQ.reduce(function (total, num) {
          return total + num;
        });

        _this10.first_Half = one + two;
        _this10.second_Half = three + four;

        _this10.semi_Data.push(_this10.first_Half);

        _this10.semi_Data.push(_this10.second_Half);

        _this10.points = _this10.semi_Data;
        _this10.series = [{
          data: _this10.points
        }];
      });
      this.firstQ = [];
      this.secondQ = [];
      this.thirdQ = [];
      this.forthQ = [];
      this.first_Half = [];
      this.second_Half = [];
    },
    getAnnualSummary: function getAnnualSummary(values) {
      var _this11 = this;

      this.loadingShow = true;
      this.points = [];
      var startingYR = values[0];
      var endYear = values[1];
      var graphLabel = startingYR + " - " + endYear;
      this.MonthLabel = graphLabel;
      var gap = endYear - startingYR;
      var array = [];
      var labelsArr = [];
      var params = {
        from: startingYR,
        to: endYear
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].url + "getAnnualSales", params, _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].deauthenticate();
        }

        _this11.loadingShow = false;
        response.data.subtotal.forEach(function (element) {
          if (element.year <= endYear && element.year == startingYR) {
            array.push(element.sub);
            labelsArr.push(startingYR);
            startingYR++;
          }
        });
        _this11.points = array;
        _this11.annualLabels = labelsArr;
        _this11.series = [{
          data: _this11.points
        }];
        _this11.options = {
          colors: ["#ff5b04"],
          chart: {
            id: "sales-summary"
          },
          xaxis: {
            categories: _this11.annualLabels
          },
          stroke: {
            width: 2,
            curve: "smooth"
          }
        };
      });
    },
    getTop3: function getTop3() {
      var _this12 = this;

      this.loadingShow = true;
      var params = {
        year: null
      };
      var top3 = [];
      var indexes = [];
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].url + "getTopProd", params, _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].deauthenticate();
        } // let resLen = response.data.prods;


        response.data.prods.forEach(function (element) {
          indexes.push(response.data.prods.indexOf(element));
        });

        for (var i = 0; i < 3; i++) {
          if (indexes.includes(i)) {
            top3.push({
              img: response.data.prods[i].img,
              name: response.data.prods[i].pName
            });
          } else {
            // console.log("sa else ni sulod");
            top3.push({
              img: _this12.tempimg,
              name: ""
            });
          } // console.log("----------------------------- ", top3[0].name);
          // console.log("================ ", this.tempimg);

        }

        _this12.loadingShow = false;
      });
      this.topprodarr = top3;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/adminDashboard.vue?vue&type=style&index=0&id=124112e6&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/dashboard/adminDashboard.vue?vue&type=style&index=0&id=124112e6&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.prodNAme[data-v-124112e6] {\r\n  color: #ff5b04;\n}\n.welcome[data-v-124112e6] {\r\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,\r\n    Helvetica Neue, Arial, sans-serif;\r\n  font-size: 25px;\r\n  margin-bottom: 10px;\r\n  margin-left: 4%;\r\n  font-weight: bold;\r\n  margin-top: 5%;\n}\n.insideToolbar[data-v-124112e6] {\r\n  margin-top: 25px;\n}\n.GraphLabel[data-v-124112e6] {\r\n  margin-left: 45%;\r\n  font-weight: bold;\n}\n.annualDateCal1[data-v-124112e6],\r\n.annualDateCal2[data-v-124112e6],\r\n.yearMenu[data-v-124112e6],\r\n.graphTitle[data-v-124112e6] {\r\n  color: black;\n}\n.graphTitle[data-v-124112e6],\r\n.text1[data-v-124112e6] {\r\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,\r\n    Helvetica Neue, Arial, sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: bold;\n}\n.YRcal[data-v-124112e6] {\r\n  color: black;\n}\n.Cname[data-v-124112e6],\r\n.GraphLabel[data-v-124112e6] {\r\n  color: #ff5b04;\n}\n.text1[data-v-124112e6] {\r\n  margin-left: 10%;\r\n  text-align: center;\r\n  color:black;\n}\n.TB3[data-v-124112e6] {\r\n  margin-bottom: 20px;\r\n  justify-content: center;\r\n  border-radius: 1%;\n}\n.theimageCard[data-v-124112e6] {\r\n  align-content: center;\r\n  border: 1px solid #999999;\r\n  border-radius: 1%;\n}\n.prods[data-v-124112e6] {\r\n  border: 1px solid #999999;\r\n  border-radius: 1%;\n}\n.subhead[data-v-124112e6] {\r\n  margin-bottom: 20px;\n}\r\n/* .chart {\r\n  width: 50%;\r\n} */\n.body[data-v-124112e6] {\r\n  margin-left: 3%;\r\n  margin-right: 3%;\r\n  height: 100%;\r\n  margin-bottom: 5%;\n}\n.top3[data-v-124112e6] {\r\n  width: 20%;\r\n  height: 50%;\r\n  border: 1px solid #999999;\r\n  border-radius: 1%;\n}\n.thetop3[data-v-124112e6] {\r\n  height: 200px;\r\n  width: 90%;\n}\n.theimage[data-v-124112e6] {\r\n  margin: 2%;\r\n  height: 210px;\r\n  width: 100%;\n}\n.Prod_name[data-v-124112e6] {\r\n  color: black;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/adminDashboard.vue?vue&type=style&index=0&id=124112e6&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/dashboard/adminDashboard.vue?vue&type=style&index=0&id=124112e6&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./adminDashboard.vue?vue&type=style&index=0&id=124112e6&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/adminDashboard.vue?vue&type=style&index=0&id=124112e6&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/adminDashboard.vue?vue&type=template&id=124112e6&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/dashboard/adminDashboard.vue?vue&type=template&id=124112e6&scoped=true& ***!
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
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row body" },
      [
        _c("div", { staticClass: "col-sm-7" }, [
          _c(
            "div",
            [
              _c(
                "v-card",
                { staticClass: "subhead" },
                [
                  _c("v-toolbar", { attrs: { color: "#f2f2f2", dark: "" } }, [
                    _c("div", { staticClass: "row insideToolbar" }, [
                      _c(
                        "div",
                        { staticClass: "col-sm-4" },
                        [
                          _c("v-toolbar-title", { staticClass: "graphTitle" }, [
                            _vm._v("Summary of Sales")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c("div", { staticClass: "form-group filter" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.thefilter,
                                  expression: "thefilter"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { name: "filter", id: "filters" },
                              on: {
                                change: [
                                  function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.thefilter = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  },
                                  _vm.onFilter
                                ]
                              }
                            },
                            [
                              _c("option", { attrs: { value: "Daily" } }, [
                                _vm._v("Daily")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "Monthly" } }, [
                                _vm._v("Monthly")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "Quarterly" } }, [
                                _vm._v("Quarterly")
                              ]),
                              _vm._v(" "),
                              _c(
                                "option",
                                { attrs: { value: "Semi-Annual" } },
                                [_vm._v("Semi-Annual")]
                              ),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "Annual" } }, [
                                _vm._v("Annual")
                              ])
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.ok,
                                expression: "ok"
                              }
                            ],
                            staticClass: "form-group firstOpt"
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.thedate,
                                  expression: "thedate"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "month", id: "calendar" },
                              domProps: { value: _vm.thedate },
                              on: {
                                change: _vm.onChangeDate,
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.thedate = $event.target.value
                                }
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.ok2,
                                expression: "ok2"
                              }
                            ],
                            staticClass: "form-group secondOpt"
                          },
                          [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.yrvalue,
                                    expression: "yrvalue"
                                  }
                                ],
                                staticClass: "form-control",
                                on: {
                                  change: [
                                    function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.yrvalue = $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    },
                                    _vm.onChangeYear
                                  ]
                                }
                              },
                              _vm._l(_vm.years, function(year) {
                                return _c(
                                  "option",
                                  { key: year, domProps: { value: year } },
                                  [_vm._v(_vm._s(year))]
                                )
                              }),
                              0
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.ok3,
                                expression: "ok3"
                              }
                            ],
                            staticClass: "forannualInput"
                          },
                          [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.Multiyrvalue,
                                    expression: "Multiyrvalue"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { multiple: "" },
                                on: {
                                  click: function($event) {
                                    if (!$event.ctrlKey) {
                                      return null
                                    }
                                    if (
                                      $event.shiftKey ||
                                      $event.altKey ||
                                      $event.metaKey
                                    ) {
                                      return null
                                    }
                                    return _vm.onChanging($event)
                                  },
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.Multiyrvalue = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  }
                                }
                              },
                              _vm._l(_vm.years, function(year) {
                                return _c(
                                  "option",
                                  { key: year, domProps: { value: year } },
                                  [_vm._v(_vm._s(year))]
                                )
                              }),
                              0
                            )
                          ]
                        )
                      ])
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c("salesChart", {
                    ref: "realtimeChart",
                    attrs: {
                      height: "300px",
                      type: "line",
                      options: _vm.options,
                      series: _vm.series
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "title" },
                    [
                      _c(
                        "v-toolbar",
                        { attrs: { color: "#f2f2f2" } },
                        [
                          _c(
                            "v-toolbar-title",
                            {
                              staticClass: "GraphLabel",
                              attrs: { name: "theTitle" }
                            },
                            [_vm._v(_vm._s(_vm.MonthLabel))]
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
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "div",
            [
              _c(
                "v-card",
                { staticClass: "subhead" },
                [
                  _c("v-toolbar", { attrs: { color: "#f2f2f2", dark: "" } }, [
                    _c("div", { staticClass: "row insideToolbar" }, [
                      _c(
                        "div",
                        { staticClass: "col-sm-4" },
                        [
                          _c("v-toolbar-title", { staticClass: "graphTitle" }, [
                            _vm._v("Product Sales")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c("div", { staticClass: "form-group filter" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.thefilter2,
                                  expression: "thefilter2"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { name: "filter", id: "filters" },
                              on: {
                                change: [
                                  function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.thefilter2 = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  },
                                  _vm.onFilter2
                                ]
                              }
                            },
                            [
                              _c("option", { attrs: { value: "Daily" } }, [
                                _vm._v("Daily")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "Monthly" } }, [
                                _vm._v("Monthly")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "Quarterly" } }, [
                                _vm._v("Quarterly")
                              ]),
                              _vm._v(" "),
                              _c(
                                "option",
                                { attrs: { value: "Semi-Annual" } },
                                [_vm._v("Semi-Annual")]
                              ),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "Annual" } }, [
                                _vm._v("Annual")
                              ])
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.ok,
                                expression: "ok"
                              }
                            ],
                            staticClass: "form-group firstOpt"
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.thedate2,
                                  expression: "thedate2"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "month", id: "calendar" },
                              domProps: { value: _vm.thedate2 },
                              on: {
                                change: _vm.onChangeDatePS,
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.thedate2 = $event.target.value
                                }
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.ok2,
                                expression: "ok2"
                              }
                            ],
                            staticClass: "form-group secondOpt"
                          },
                          [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.yrvalueS,
                                    expression: "yrvalueS"
                                  }
                                ],
                                staticClass: "form-control",
                                on: {
                                  change: [
                                    function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.yrvalueS = $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    },
                                    _vm.onChangeYear2
                                  ]
                                }
                              },
                              _vm._l(_vm.years, function(year) {
                                return _c(
                                  "option",
                                  { key: year, domProps: { value: year } },
                                  [_vm._v(_vm._s(year))]
                                )
                              }),
                              0
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.ok3,
                                expression: "ok3"
                              }
                            ],
                            staticClass: "forannualInput"
                          },
                          [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.Multiyrvalue2,
                                    expression: "Multiyrvalue2"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { multiple: "" },
                                on: {
                                  click: function($event) {
                                    if (!$event.ctrlKey) {
                                      return null
                                    }
                                    if (
                                      $event.shiftKey ||
                                      $event.altKey ||
                                      $event.metaKey
                                    ) {
                                      return null
                                    }
                                    return _vm.onChanging($event)
                                  },
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.Multiyrvalue2 = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  }
                                }
                              },
                              _vm._l(_vm.years, function(year) {
                                return _c(
                                  "option",
                                  { key: year, domProps: { value: year } },
                                  [_vm._v(_vm._s(year))]
                                )
                              }),
                              0
                            )
                          ]
                        )
                      ])
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c("salesChart", {
                    ref: "realtimeChart",
                    attrs: {
                      height: "300px",
                      type: "line",
                      options: _vm.options2,
                      series: _vm.series2
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "title" },
                    [
                      _c(
                        "v-toolbar",
                        { attrs: { color: "#f2f2f2" } },
                        [
                          _c(
                            "v-toolbar-title",
                            {
                              staticClass: "GraphLabel",
                              attrs: { name: "theTitle" }
                            },
                            [_vm._v(_vm._s(_vm.MonthLabel2))]
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
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-1" }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-sm-4 top3" },
          [
            _c(
              "v-toolbar",
              { staticClass: "TB3", attrs: { color: "#f2f2f2", dark: "" } },
              [
                _c("v-toolbar-title", { staticClass: "text1" }, [
                  _vm._v("TOP 3 SALABLE PRODUCTS")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "prods" },
              [
                _c("v-card", { staticClass: "theimageCard" }, [
                  _c(
                    "div",
                    { staticClass: "theimage" },
                    [
                      _c(
                        "v-img",
                        {
                          staticClass: "white--text align-end thetop3",
                          attrs: { src: _vm.topprodarr[0].img }
                        },
                        [
                          _c("v-card-title", { staticClass: "Prod_name" }, [
                            _c("i", { staticClass: "prodNAme" }, [
                              _vm._v(_vm._s(_vm.topprodarr[0].name))
                            ])
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "theimage" },
                    [
                      _c(
                        "v-img",
                        {
                          staticClass: "white--text align-end thetop3",
                          attrs: { src: _vm.topprodarr[1].img }
                        },
                        [
                          _c("v-card-title", { staticClass: "Prod_name" }, [
                            _c("i", { staticClass: "prodNAme" }, [
                              _vm._v(_vm._s(_vm.topprodarr[1].name))
                            ])
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "theimage" },
                    [
                      _c(
                        "v-img",
                        {
                          staticClass: "white--text align-end thetop3",
                          attrs: { src: _vm.topprodarr[2].img }
                        },
                        [
                          _c("v-card-title", { staticClass: "Prod_name" }, [
                            _c("i", { staticClass: "prodNAme" }, [
                              _vm._v(_vm._s(_vm.topprodarr[2].name))
                            ])
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ])
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _vm.loadingShow ? _c("loading") : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "welcome" }, [
      _c("b", [
        _c("i", [
          _vm._v("\n        WELCOME,\n        "),
          _c("span", { staticClass: "Cname" }, [_vm._v("DRIPTEA ADMIN")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/noDatatoShow.png":
/*!*******************************************!*\
  !*** ./resources/assets/noDatatoShow.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/noDatatoShow.png?7157d933173a9aecbe367776d59eaed5";

/***/ }),

/***/ "./resources/js/modules/dashboard/adminDashboard.vue":
/*!***********************************************************!*\
  !*** ./resources/js/modules/dashboard/adminDashboard.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adminDashboard_vue_vue_type_template_id_124112e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminDashboard.vue?vue&type=template&id=124112e6&scoped=true& */ "./resources/js/modules/dashboard/adminDashboard.vue?vue&type=template&id=124112e6&scoped=true&");
/* harmony import */ var _adminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminDashboard.vue?vue&type=script&lang=js& */ "./resources/js/modules/dashboard/adminDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _adminDashboard_vue_vue_type_style_index_0_id_124112e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adminDashboard.vue?vue&type=style&index=0&id=124112e6&scoped=true&lang=css& */ "./resources/js/modules/dashboard/adminDashboard.vue?vue&type=style&index=0&id=124112e6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _adminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _adminDashboard_vue_vue_type_template_id_124112e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _adminDashboard_vue_vue_type_template_id_124112e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "124112e6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/dashboard/adminDashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/dashboard/adminDashboard.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/modules/dashboard/adminDashboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./adminDashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/adminDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/dashboard/adminDashboard.vue?vue&type=style&index=0&id=124112e6&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/modules/dashboard/adminDashboard.vue?vue&type=style&index=0&id=124112e6&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDashboard_vue_vue_type_style_index_0_id_124112e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./adminDashboard.vue?vue&type=style&index=0&id=124112e6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/adminDashboard.vue?vue&type=style&index=0&id=124112e6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDashboard_vue_vue_type_style_index_0_id_124112e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDashboard_vue_vue_type_style_index_0_id_124112e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDashboard_vue_vue_type_style_index_0_id_124112e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDashboard_vue_vue_type_style_index_0_id_124112e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDashboard_vue_vue_type_style_index_0_id_124112e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/dashboard/adminDashboard.vue?vue&type=template&id=124112e6&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/modules/dashboard/adminDashboard.vue?vue&type=template&id=124112e6&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDashboard_vue_vue_type_template_id_124112e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./adminDashboard.vue?vue&type=template&id=124112e6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/adminDashboard.vue?vue&type=template&id=124112e6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDashboard_vue_vue_type_template_id_124112e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDashboard_vue_vue_type_template_id_124112e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);