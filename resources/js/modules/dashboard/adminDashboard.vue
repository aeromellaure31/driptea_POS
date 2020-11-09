<template>
  <div>
    <div class="welcome">
      <b>
        <i>
          WELCOME,
          <span class="Cname">DRIPTEA ADMIN</span>
        </i>
      </b>
    </div>
    <div class="row body">
      <div class="col-sm-8">
        <v-card class="subhead">
          <v-toolbar color="#f2f2f2" dark>
            <div class="row insideToolbar">
              <div class="col-sm-4">
                <v-toolbar-title class="graphTitle">Summary of Sales</v-toolbar-title>
              </div>
              <div class="col-sm-4">
                <div class="form-group filter">
                  <select
                    class="form-control"
                    v-model="thefilter"
                    name="filter"
                    id="filters"
                    v-on:change="onFilter"
                  >
                    <option value="Daily">Daily</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Quarterly">Quarterly</option>
                    <option value="Semi-Annual">Semi-Annual</option>
                    <option value="Annual">Annual</option>
                  </select>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="form-group firstOpt" v-show="ok">
                  <input
                    class="form-control"
                    type="month"
                    v-model="thedate"
                    id="calendar"
                    v-on:change="onChangeDate"
                  >
                </div>
                <div class="form-group secondOpt" v-show="ok2">
                  <select class="form-control" v-on:change="onChangeYear" v-model="yrvalue">
                    <option
                      v-for="year in years"
                      v-bind:value="year.value"
                      v-bind:key="year.value"
                    >{{ year.text }}</option>
                  </select>
                </div>
                <div v-show="ok3" class="forannualInput">
                  <select
                    class="form-control"
                    v-on:click.ctrl.exact="onChanging"
                    v-model="Multiyrvalue"
                    multiple
                  >
                    <option
                      v-for="year in years"
                      v-bind:value="year.value"
                      v-bind:key="year.value"
                    >{{ year.text }}</option>
                  </select>
                </div>
              </div>
            </div>
          </v-toolbar>
        </v-card>
        <div>
          <salesChart
            class="chart"
            ref="realtimeChart"
            type="line"
            :options="options"
            :series="series"
          ></salesChart>
          <div class="title">
            <v-toolbar color="#f2f2f2">
              <v-toolbar-title name="theTitle" class="GraphLabel">{{MonthLabel}}</v-toolbar-title>
            </v-toolbar>
          </div>
        </div>
      </div>
      <div class="col-sm-4 top3">
        <v-toolbar color="#f2f2f2" dark class="TB3">
          <v-toolbar-title class="text1">TOP 3 SALABLE PRODUCTS</v-toolbar-title>
        </v-toolbar>
        <div class="prods">
          <v-card>
            <div class="theimage">
              <v-img class="white--text align-end thetop3" :src="topProdArr[0].img">
                <v-card-title class="Prod_name">
                  <i>{{topProdArr[0].pName}}</i>
                </v-card-title>
              </v-img>
            </div>
            <div class="theimage">
              <v-img class="white--text align-end thetop3" :src="topProdArr[1].img">
                <v-card-title class="Prod_name">
                  <i>{{topProdArr[1].pName}}</i>
                </v-card-title>
              </v-img>
            </div>
            <div class="theimage">
              <v-img class="white--text align-end thetop3" :src="topProdArr[2].img">
                <v-card-title class="Prod_name">
                  <i>{{topProdArr[2].pName}}</i>
                </v-card-title>
              </v-img>
            </div>
          </v-card>
        </div>
      </div>
      <loading v-if="loadingShow"></loading>
    </div>
  </div>
</template>

<style>
.welcome {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, sans-serif;
  font-size: 25px;
  margin-bottom: 10px;
  margin-left: 4%;
  font-weight: bold;
  margin-top: 5%;
}
.insideToolbar {
  margin-top: 25px;
}
.GraphLabel {
  margin-left: 45%;
  font-weight: bold;
}
.annualDateCal1,
.annualDateCal2,
.yearMenu,
.graphTitle {
  color: black;
}
.graphTitle,
.text1 {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, sans-serif;
  font-size: 1rem;
  font-weight: bold;
}
.YRcal {
  color: black;
}
.Cname,
.GraphLabel {
  color: #ff5b04;
}
.text1 {
  margin-left: 10%;
  text-align: center;
  color: #ff5b04;
}
.TB3 {
  margin-bottom: 20px;
  justify-content: center;
  border-radius: 1%;
}
.prods {
  border: 1px solid #999999;
  border-radius: 1%;
}
.subhead {
  margin-bottom: 20px;
}
.chart {
  width: 100%;
}
.body {
  margin-left: 3%;
  margin-right: 3%;
  height: 100%;
  margin-bottom: 5%;
}
.top3 {
  width: 20%;
  height: 50%;
  border: 1px solid #999999;
  border-radius: 1%;
}
.thetop3{
  height: 180px;
  width: auto;
}
.theimage {
  margin: 2%;
  height: 200px;
  width: auto;
}
.Prod_name {
  color: black;
}
</style>

<script>
import salesChart from "vue-apexcharts";
import Axios from "axios";
import AUTH from "../../services/auth";
import Datepicker from "vuejs-datepicker";
import { arch } from "os";
import swal from "sweetalert";
import nodataImg from "../../../assets/noDatatoShow.png";
import loading from '../../basic/loading.vue';
// import index from "../../services/auth";

export default {
  data() {
    return {
      tempIMG: nodataImg,
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
      series: [
        {
          name: "Sales",
          data: []
        }
      ],
      options0: {},
      series0: [],
      points: [],
      thedate: null,
      years: [],
      MonthLabel: null,
      mnths: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
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
    salesChart,
    Datepicker,
    loading
  },
  computed: {},
  mounted() {
    this.getTop3();
    let date = new Date();
    let month =
      date.getMonth() + 1 > 9
        ? date.getMonth() + 1
        : "0" + (date.getMonth() + 1);
    this.thedate = date.getFullYear() + "-" + month;
    this.MonthLabel = this.mnths[month - 1];
    this.yrvalue = new Date().getFullYear();
    this.getYears();
    this.getDate();
    this.xvalues();
    this.getDailySummary();
  },
  created() {},
  methods: {
    getDailySummary() {
      this.loadingShow = true
      this.points = [];
      let params = {
        month: this.theMonth,
        year: this.theYear
      };
      let i;
      let dateFrmDBarr = [];
      let totalfrmDB = [];
      // let xs = this.xlabels;
      let ldate = this.lastDate;
      Axios.post(AUTH.url + "getDailySales", params, AUTH.config).then(response => {
        if(response.data.status){
          AUTH.deauthenticate()
        }
        this.loadingShow = false
        response.data.total.forEach(element => {
          let d = element.date;
          let tots = element.sub;
          dateFrmDBarr.push(d);
          totalfrmDB.push(tots);
        });
        for (i = 1; i < ldate + 1; i++) {
          if (dateFrmDBarr.includes(i)) {
            response.data.total.forEach(element => {
              if (element.date == i) {
                this.points.push(element.sub);
              }
            });
          } else {
            this.points.push(0);
          }
        }

        if (response.data.total.length > 0) {
          this.series = [
            {
              data: this.points
            }
          ];
        } else {
          this.series = [];
        }
      });
      this.points = [];
    },

    getDate() {
      let date = new Date();
      this.theMonth =
        date.getMonth() + 1 > 9
          ? date.getMonth() + 1
          : "0" + (date.getMonth() + 1);
      this.theYear = date.getFullYear();
      this.lastDate = new Date(this.theYear, this.theMonth, 0).getDate();
      this.xvalues();
    },
    xvalues() {
      this.xlabels = [];
      let i;
      for (i = 1; i < this.lastDate + 1; i++) {
        this.xlabels.push(i);
      }
      this.categories = this.xlabels;
    },
    onFilter() {
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
      } else if (this.thefilter == "Weekly") {
      } else if (this.thefilter == "Monthly") {
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
        swal({
          title: "Ctrl + click(select)",
          text:
            "After Selecting Year start, Press Ctrl + Click to Select Year End",
          icon: "warning",
          dangerMode: true
        });
      }
    },
    onChangeDate() {
      this.lastDate = null;
      let d = new Date(this.thedate);
      this.theMonth =
        d.getMonth() + 1 > 9 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1);
      this.theYear = d.getFullYear();
      this.MonthLabel = this.mnths[this.theMonth - 1];
      let lastDate = new Date(this.theYear, this.theMonth, 0).getDate();
      this.lastDate = lastDate;
      this.xvalues();
      this.getDailySummary();
    },
    onChangeYear() {
      if (this.thefilter == "Monthly") {
        this.getMonthlySummary(this.yrvalue);
        this.MonthLabel = this.yrvalue;
      } else if (this.thefilter == "Quarterly") {
        this.getQuarterlySummary(this.yrvalue);
        this.MonthLabel = this.yrvalue;
      } else if (this.thefilter == "Semi-Annual") {
        this.getSemi_AnnualSummary(this.yrvalue);
        this.MonthLabel = this.yrvalue;
      } else if (this.thefilter == "Annual") {
      }
    },
    onChanging() {
      this.getAnnualSummary(this.Multiyrvalue);
    },
    getYears() {
      this.loadingShow = true
      let params = {
        year: this.yrvalue
      };
      Axios.post(AUTH.url + "getyears", params, AUTH.config).then(response => {
        if(response.data.status){
          AUTH.deauthenticate()
        }
        this.loadingShow = false
        response.data.years.forEach(element => {
          let yr = element.year;
          this.years.push({ text: yr, value: yr });
        });
      });
    },
    getMonthlySummary(yyyy) {
      this.loadingShow = true
      this.points = [];
      let monthsfrmDB = [];
      let i;
      let params = {
        year: yyyy
      };
      Axios.post(AUTH.url + "getmonthlySales", params, AUTH.config).then(response => {
        if(response.data.status){
          AUTH.deauthenticate()
        }
        this.loadingShow = false
        response.data.subtotal.forEach(element => {
          let sub = element.sub;
          let month = element.month;
          monthsfrmDB.push(month);
        });
        for (i = 1; i < this.mnths.length + 1; i++) {
          if (monthsfrmDB.includes(i)) {
            response.data.subtotal.forEach(element => {
              if (element.month == i) {
                this.points.push(element.sub);
              }
            });
          } else {
            this.points.push(0);
          }
        }
        this.series = [
          {
            data: this.points
          }
        ];
      });
    },
    getQuarterlySummary(yyyy) {
      this.loadingShow = true
      this.points = [];
      let monthsfrmDB = [];
      let i;
      let params = {
        year: yyyy
      };
      Axios.post(AUTH.url + "getQuarterlySales", params, AUTH.config).then(response => {
        if(response.data.status){
          AUTH.deauthenticate()
        }
        this.loadingShow = false
        response.data.subtotal.forEach(element => {
          let sub = element.sub;
          let month = element.month;
          monthsfrmDB.push(month);
        });
        for (i = 1; i < this.mnths.length + 1; i++) {
          if (monthsfrmDB.includes(i)) {
            response.data.subtotal.forEach(element => {
              if (element.month == i) {
                this.points.push(element.sub);
              }
            });
          } else {
            this.points.push(0);
          }
        }
        for (var i = 0; i < this.points.length; i++) {
          if (i == 0 || i == 1 || i == 2) {
            this.firstQ.push(this.points[i]);
          } else if (i == 3 || i == 4 || i == 5) {
            this.secondQ.push(this.points[i]);
          } else if (i == 6 || i == 7 || i == 8) {
            this.thirdQ.push(this.points[i]);
          } else if (i == 9 || i == 10 || i == 11) {
            this.forthQ.push(this.points[i]);
          }
        }
        this.QauterData = [];
        let one = this.firstQ.reduce((total, num) => {
          return total + num;
        });
        this.QauterData.push(one);
        let two = this.secondQ.reduce((total, num) => {
          return total + num;
        });
        this.QauterData.push(two);
        let three = this.thirdQ.reduce((total, num) => {
          return total + num;
        });
        this.QauterData.push(three);
        let four = this.forthQ.reduce((total, num) => {
          return total + num;
        });
        this.QauterData.push(four);
        this.points = this.QauterData;
        this.series = [
          {
            data: this.points
          }
        ];
      });
      this.firstQ = [];
      this.secondQ = [];
      this.thirdQ = [];
      this.forthQ = [];
    },
    getSemi_AnnualSummary(yyyy) {
      this.loadingShow = true
      this.semi_Data = [];
      this.points = [];
      let monthsfrmDB = [];
      let i;
      let params = {
        year: yyyy
      };
      Axios.post(AUTH.url + "getSemi-AnnualSales", params, AUTH.config).then(response => {
        if(response.data.status){
          AUTH.deauthenticate()
        }
        this.loadingShow = false
        response.data.subtotal.forEach(element => {
          let sub = element.sub;
          let month = element.month;
          monthsfrmDB.push(month);
        });
        for (i = 1; i < this.mnths.length + 1; i++) {
          if (monthsfrmDB.includes(i)) {
            response.data.subtotal.forEach(element => {
              if (element.month == i) {
                this.points.push(element.sub);
              }
            });
          } else {
            this.points.push(0);
          }
        }
        for (var i = 0; i < this.points.length; i++) {
          if (i == 0 || i == 1 || i == 2) {
            this.firstQ.push(this.points[i]);
          } else if (i == 3 || i == 4 || i == 5) {
            this.secondQ.push(this.points[i]);
          } else if (i == 6 || i == 7 || i == 8) {
            this.thirdQ.push(this.points[i]);
          } else if (i == 9 || i == 10 || i == 11) {
            this.forthQ.push(this.points[i]);
          }
        }
        this.QauterData = [];
        let one = this.firstQ.reduce((total, num) => {
          return total + num;
        });
        let two = this.secondQ.reduce((total, num) => {
          return total + num;
        });
        let three = this.thirdQ.reduce((total, num) => {
          return total + num;
        });
        let four = this.forthQ.reduce((total, num) => {
          return total + num;
        });
        this.first_Half = one + two;
        this.second_Half = three + four;
        this.semi_Data.push(this.first_Half);
        this.semi_Data.push(this.second_Half);
        this.points = this.semi_Data;
        this.series = [
          {
            data: this.points
          }
        ];
      });
      this.firstQ = [];
      this.secondQ = [];
      this.thirdQ = [];
      this.forthQ = [];
      this.first_Half = [];
      this.second_Half = [];
    },
    getAnnualSummary(values) {
      this.loadingShow = true
      this.points = [];
      let startingYR = values[0];
      let endYear = values[1];
      let graphLabel = startingYR + " - " + endYear;
      this.MonthLabel = graphLabel;
      let gap = endYear - startingYR;

      let array = [];
      let labelsArr = [];
      let params = {
        from: startingYR,
        to: endYear
      };
      Axios.post(AUTH.url + "getAnnualSales", params, AUTH.config).then(response => {
        if(response.data.status){
          AUTH.deauthenticate()
        }
        this.loadingShow = false
        response.data.subtotal.forEach(element => {
          if (element.year <= endYear && element.year == startingYR) {
            array.push(element.sub);
            labelsArr.push(startingYR);
            startingYR++;
          }
        });
        this.points = array;
        this.annualLabels = labelsArr;
        this.series = [
          {
            data: this.points
          }
        ];
        this.options = {
          colors: ["#ff5b04"],
          chart: {
            id: "sales-summary"
          },
          xaxis: {
            categories: this.annualLabels
          },
          stroke: {
            width: 2,
            curve: "smooth"
          }
        };
      });
    },
    getTop3() {
      this.loadingShow = true
      let params = {
        year: null
      };
      let indexes = [];
      Axios.post(AUTH.url + "getTopProd", params, AUTH.config).then(response => {
        if(response.data.status){
          AUTH.deauthenticate()
        }
        this.loadingShow = false
        let resLen = response.data.prods.length;
        response.data.prods.forEach(element => {
          indexes.push(response.data.prods.indexOf(element));
        });
        for (var i = 0; i < 3; i++) {
          if (indexes.includes(i)) {
            this.topProdArr.push({
              img: response.data.prods[i].img,
              name: response.data.prods[i].pName
            });
          } else {
            this.topProdArr.push({
              img: this.tempIMG,
              name: " "
            });
          }
        }
      });
    }
  }
};
</script>
