(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

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







 // import index from "../../services/auth";

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      tempIMG: _assets_noDatatoShow_png__WEBPACK_IMPORTED_MODULE_6___default.a,
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
      topProdArr: [],
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
    console.log("...................... ", _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].user.fullname);
    this.getTop3();
    console.log("ang top3 ", this.topProdArr);
    var date = new Date();
    var month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
    this.thedate = date.getFullYear() + "-" + month;
    this.MonthLabel = this.mnths[month - 1];
    this.yrvalue = new Date().getFullYear();
    this.getYears();
    this.getDate();
    this.xvalues();
    this.getDailySummary();
  },
  created: function created() {},
  methods: {
    getDailySummary: function getDailySummary() {
      var _this = this;

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

        _this.loadingShow = false;
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
                _this.points.push(element.sub);
              }
            });
          } else {
            _this.points.push(0);
          }
        }

        if (response.data.total.length > 0) {
          _this.series = [{
            data: _this.points
          }];
        } else {
          _this.series = [];
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

      this.categories = this.xlabels; // console.log("........ " + this.categories);
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
        }; // console.log("monthly cat bruh " + this.categories);

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
    getYears: function getYears() {
      var _this2 = this;

      this.loadingShow = true;
      var params = {
        year: this.yrvalue
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].url + "getyears", params, _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].deauthenticate();
        }

        _this2.loadingShow = false;
        response.data.years.forEach(function (element) {
          var yr = element.year;

          _this2.years.push({
            text: yr,
            value: yr
          });
        });
      });
    },
    getMonthlySummary: function getMonthlySummary(yyyy) {
      var _this3 = this;

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

        _this3.loadingShow = false;
        response.data.subtotal.forEach(function (element) {
          var sub = element.sub;
          var month = element.month;
          monthsfrmDB.push(month);
        });

        for (i = 1; i < _this3.mnths.length + 1; i++) {
          if (monthsfrmDB.includes(i)) {
            response.data.subtotal.forEach(function (element) {
              if (element.month == i) {
                _this3.points.push(element.sub);
              }
            });
          } else {
            _this3.points.push(0);
          }
        }

        _this3.series = [{
          data: _this3.points
        }];
      });
    },
    getQuarterlySummary: function getQuarterlySummary(yyyy) {
      var _this4 = this;

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

        _this4.loadingShow = false;
        response.data.subtotal.forEach(function (element) {
          var sub = element.sub;
          var month = element.month;
          monthsfrmDB.push(month);
        });

        for (i = 1; i < _this4.mnths.length + 1; i++) {
          if (monthsfrmDB.includes(i)) {
            response.data.subtotal.forEach(function (element) {
              if (element.month == i) {
                _this4.points.push(element.sub);
              }
            });
          } else {
            _this4.points.push(0);
          }
        }

        for (var i = 0; i < _this4.points.length; i++) {
          if (i == 0 || i == 1 || i == 2) {
            _this4.firstQ.push(_this4.points[i]);
          } else if (i == 3 || i == 4 || i == 5) {
            _this4.secondQ.push(_this4.points[i]);
          } else if (i == 6 || i == 7 || i == 8) {
            _this4.thirdQ.push(_this4.points[i]);
          } else if (i == 9 || i == 10 || i == 11) {
            _this4.forthQ.push(_this4.points[i]);
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

        _this4.points = _this4.QauterData;
        _this4.series = [{
          data: _this4.points
        }];
      });
      this.firstQ = [];
      this.secondQ = [];
      this.thirdQ = [];
      this.forthQ = [];
    },
    getSemi_AnnualSummary: function getSemi_AnnualSummary(yyyy) {
      var _this5 = this;

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

        _this5.loadingShow = false;
        response.data.subtotal.forEach(function (element) {
          var sub = element.sub;
          var month = element.month;
          monthsfrmDB.push(month);
        });

        for (i = 1; i < _this5.mnths.length + 1; i++) {
          if (monthsfrmDB.includes(i)) {
            response.data.subtotal.forEach(function (element) {
              if (element.month == i) {
                _this5.points.push(element.sub);
              }
            });
          } else {
            _this5.points.push(0);
          }
        }

        for (var i = 0; i < _this5.points.length; i++) {
          if (i == 0 || i == 1 || i == 2) {
            _this5.firstQ.push(_this5.points[i]);
          } else if (i == 3 || i == 4 || i == 5) {
            _this5.secondQ.push(_this5.points[i]);
          } else if (i == 6 || i == 7 || i == 8) {
            _this5.thirdQ.push(_this5.points[i]);
          } else if (i == 9 || i == 10 || i == 11) {
            _this5.forthQ.push(_this5.points[i]);
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

        _this5.semi_Data.push(_this5.second_Half);

        _this5.points = _this5.semi_Data;
        _this5.series = [{
          data: _this5.points
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
      var _this6 = this;

      this.loadingShow = true;
      this.points = [];
      var startingYR = values[0];
      var endYear = values[1];
      var graphLabel = startingYR + " - " + endYear;
      this.MonthLabel = graphLabel; // console.log("************* 1 " + startingYR);

      var gap = endYear - startingYR; // console.log("************* 2 " + gap);

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

        _this6.loadingShow = false;
        response.data.subtotal.forEach(function (element) {
          if (element.year <= endYear && element.year == startingYR) {
            array.push(element.sub);
            labelsArr.push(startingYR);
            startingYR++;
          }
        });
        _this6.points = array;
        _this6.annualLabels = labelsArr; // console.log("--------------- " + this.points);

        _this6.series = [{
          data: _this6.points
        }];
        _this6.options = {
          colors: ["#ff5b04"],
          chart: {
            id: "sales-summary"
          },
          xaxis: {
            categories: _this6.annualLabels
          },
          stroke: {
            width: 2,
            curve: "smooth"
          }
        };
      });
    },
    getTop3: function getTop3() {
      var _this7 = this;

      this.loadingShow = true;
      var params = {
        year: null
      };
      var indexes = [];
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].url + "getTopProd", params, _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].deauthenticate();
        }

        _this7.loadingShow = false;
        var resLen = response.data.prods.length;
        response.data.prods.forEach(function (element) {
          indexes.push(response.data.prods.indexOf(element));
        }); // console.log(",,,,,, ", indexes);

        for (var i = 0; i < 3; i++) {
          if (indexes.includes(i)) {
            _this7.topProdArr.push({
              img: response.data.prods[i].img,
              name: response.data.prods[i].pName
            });
          } else {
            _this7.topProdArr.push({
              img: _this7.tempIMG,
              name: " "
            });
          }
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/adminDashboard.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/dashboard/adminDashboard.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.welcome {\r\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,\r\n    Helvetica Neue, Arial, sans-serif;\r\n  font-size: 25px;\r\n  margin-bottom: 10px;\r\n  margin-left: 4%;\r\n  font-weight: bold;\r\n  margin-top: 5%;\n}\n.insideToolbar {\r\n  margin-top: 25px;\n}\n.GraphLabel {\r\n  margin-left: 45%;\r\n  font-weight: bold;\n}\n.annualDateCal1,\r\n.annualDateCal2,\r\n.yearMenu,\r\n.graphTitle {\r\n  color: black;\n}\n.graphTitle,\r\n.text1 {\r\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,\r\n    Helvetica Neue, Arial, sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: bold;\n}\n.YRcal {\r\n  color: black;\n}\n.Cname,\r\n.GraphLabel {\r\n  color: #ff5b04;\n}\n.text1 {\r\n  margin-left: 10%;\r\n  text-align: center;\r\n  color: #ff5b04;\n}\n.TB3 {\r\n  margin-bottom: 20px;\r\n  justify-content: center;\r\n  border-radius: 1%;\n}\n.prods {\r\n  border: 1px solid #999999;\r\n  border-radius: 1%;\n}\n.subhead {\r\n  margin-bottom: 20px;\n}\n.chart {\r\n  width: 100%;\n}\n.body {\r\n  margin-left: 3%;\r\n  margin-right: 3%;\r\n  height: 100%;\r\n  margin-bottom: 5%;\n}\n.top3 {\r\n  width: 20%;\r\n  height: 50%;\r\n  border: 1px solid #999999;\r\n  border-radius: 1%;\n}\n.thetop3{\r\n  height: 180px;\r\n  width: auto;\n}\n.theimage {\r\n  margin: 2%;\r\n  height: 200px;\r\n  width: auto;\n}\n.Prod_name {\r\n  color: black;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/adminDashboard.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/dashboard/adminDashboard.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./adminDashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/adminDashboard.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/adminDashboard.vue?vue&type=template&id=124112e6&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/dashboard/adminDashboard.vue?vue&type=template&id=124112e6& ***!
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
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row body" },
      [
        _c(
          "div",
          { staticClass: "col-sm-8" },
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
                            _c("option", { attrs: { value: "Semi-Annual" } }, [
                              _vm._v("Semi-Annual")
                            ]),
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
                                      .call($event.target.options, function(o) {
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
                                {
                                  key: year.value,
                                  domProps: { value: year.value }
                                },
                                [_vm._v(_vm._s(year.text))]
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
                                {
                                  key: year.value,
                                  domProps: { value: year.value }
                                },
                                [_vm._v(_vm._s(year.text))]
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
                  staticClass: "chart",
                  attrs: {
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
                _c("v-card", [
                  _c(
                    "div",
                    { staticClass: "theimage" },
                    [
                      _c(
                        "v-img",
                        {
                          staticClass: "white--text align-end thetop3",
                          attrs: { src: _vm.topProdArr[0].img }
                        },
                        [
                          _c("v-card-title", { staticClass: "Prod_name" }, [
                            _c("i", [_vm._v(_vm._s(_vm.topProdArr[0].pName))])
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
                          attrs: { src: _vm.topProdArr[1].img }
                        },
                        [
                          _c("v-card-title", { staticClass: "Prod_name" }, [
                            _c("i", [_vm._v(_vm._s(_vm.topProdArr[1].pName))])
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
                          attrs: { src: _vm.topProdArr[2].img }
                        },
                        [
                          _c("v-card-title", { staticClass: "Prod_name" }, [
                            _c("i", [_vm._v(_vm._s(_vm.topProdArr[2].pName))])
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
/* harmony import */ var _adminDashboard_vue_vue_type_template_id_124112e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminDashboard.vue?vue&type=template&id=124112e6& */ "./resources/js/modules/dashboard/adminDashboard.vue?vue&type=template&id=124112e6&");
/* harmony import */ var _adminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminDashboard.vue?vue&type=script&lang=js& */ "./resources/js/modules/dashboard/adminDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _adminDashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adminDashboard.vue?vue&type=style&index=0&lang=css& */ "./resources/js/modules/dashboard/adminDashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _adminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _adminDashboard_vue_vue_type_template_id_124112e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _adminDashboard_vue_vue_type_template_id_124112e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
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

/***/ "./resources/js/modules/dashboard/adminDashboard.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************!*\
  !*** ./resources/js/modules/dashboard/adminDashboard.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./adminDashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/adminDashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/modules/dashboard/adminDashboard.vue?vue&type=template&id=124112e6&":
/*!******************************************************************************************!*\
  !*** ./resources/js/modules/dashboard/adminDashboard.vue?vue&type=template&id=124112e6& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDashboard_vue_vue_type_template_id_124112e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./adminDashboard.vue?vue&type=template&id=124112e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/adminDashboard.vue?vue&type=template&id=124112e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDashboard_vue_vue_type_template_id_124112e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDashboard_vue_vue_type_template_id_124112e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);