<template>
  
    <div class="my-custom-scrollbar">
      <v-toolbar flat>
        <template v-slot:extension>
          <v-tabs dark background-color="#ff5b04" fixed-tabs>
            <v-tabs-slider></v-tabs-slider>
            <v-tab
              v-for="(items, indexes) in categoryData"
              :key="indexes"
              @click="changeCategory(items.productCategory)"
            >{{items.productCategory}}</v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
      <!-- <button class="btn btn-primary" v-for="(items, indexes) in categoryData" :key="indexes" @click="changeCategory(items.productCategory)">{{items.productCategory}}</button> -->

      <v-simple-table :items-per-page="5" class="elevation-3 zui-table" id="table">
        <template v-slot:top>
          <v-toolbar class="mb-2" color="#ff5b04" dark flat>
            <v-toolbar-title class="col pa-3 py-4 white--text">{{categoryName}}</v-toolbar-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <v-menu
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="290px"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                    class="calendarDate"
                    v-model="dateRangeText"
                    chips
                    label="DATE"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    ></v-text-field>
                </template>
                <v-date-picker
                    v-model="dates"
                    range
                ></v-date-picker>
            </v-menu>
            <v-btn color="success" class="mr-6" @click="showModal()">Find</v-btn>
          </v-toolbar>
        </template>
        <div class="zui-wrapper">
          <div class="zui-scroller">
            <thead>
              <tr>
                <th style="text-align: center" rowspan="3" class="zui-sticky-col2">Date</th>
                <th style="text-align: center" rowspan="3" class="zui-sticky-col3">Name</th>
                <th style="text-align: center" rowspan="3" class="zui-sticky-col4">Address</th>
                <th
                  :colspan="oneProd.length"
                  style="text-align: center"
                  v-for="(item, index) in category"
                  :key="index"
                >
                  {{item}}
                  <tr>
                    <th
                      style="text-align: center"
                      v-if="categoryName === i.productCategory"
                      v-for="(i, ind) in productData"
                      :key="ind"
                    >{{i.productName}}</th>
                  </tr>
                </th>
                <th rowspan="3" class="zui-sticky-col5">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(items, indexes) in finalData" :key="indexes">
                <td
                  style="text-align: center"
                  class="zui-sticky-col2"
                >{{getDate(items[0].get_customer[0].created_at)}}</td>
                <td
                  style="text-align: center"
                  class="zui-sticky-col3"
                >{{items[0].get_customer[0].customerName ? items[0].get_customer[0].customerName : '&nbsp;'}}</td>
                <td
                  style="text-align: center"
                  class="zui-sticky-col4"
                >{{items[0].get_customer[0].customerAddress ? items[0].get_customer[0].customerAddress : '&nbsp;'}}</td>

                <td
                  style="text-align: center"
                  v-for="(item, index) in prod"
                  :key="index"
                >{{getAllValue(item, items, index)}}</td>
                <td
                  class="zui-sticky-col5"
                  style="text-align: center; font-weight: bold"
                >{{getTotal(items)}} quantity</td>
              </tr>
            </tbody>
          </div>
        </div>
      </v-simple-table>
      <template>
            <v-row justify="center">
                <v-dialog v-model="dialogConfirmation" persistent max-width="600px">
                    <v-card>
                        <div class="modal-header">
                          <span class="headline">Confirmation</span>
                          <button type="button" class="close" @click="dialogConfirmation = false">&times;</button><br>
                        </div>
                        <empty :title="'No Order in this Date/s'"></empty>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </template>
        <template>
            <v-row justify="center">
                <v-dialog v-model="choosenDate" persistent max-width="1000px">
                    <v-card>
                        <div class="modal-header">
                          <span class="headline">Export as Excel</span>
                          <button type="button" class="close" @click="choosenDate = false">&times;</button><br>
                        </div>
                        <v-card-text>
                          <ejs-grid ref='grid' id='Grid' :dataSource='storeData' :toolbar='toolbarOptions' height='270px' :allowPaging='true' :allowExcelExport='true' :toolbarClick='toolbarClick'>
                            <e-columns>
                              <e-column field='Date' headerText='Date' width=120></e-column>
                              <e-column field='Name' headerText="Customer's Name" width=150></e-column>
                              <e-column field='Address' headerText='Address' width=150></e-column>
                              <e-column v-for="(i, ind)  in categoryAll" :key="ind" :field='i' :headerText='i' width=150></e-column>
                              <e-column field='Total' headerText='Total Quantity' width=150></e-column>
                            </e-columns>
                          </ejs-grid>
                        </v-card-text>
                        <v-spacer></v-spacer>
                    </v-card>
                </v-dialog>
            </v-row>
        </template>
       <loading v-if="loadingShow"></loading>
    </div>
</template>
<style scoped>
@import url('https://cdn.syncfusion.com/ej2/material.css');
.colorstyle{
    width: 25%;
    color: white;
    background-color: #ff5b04;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: white;
}
.calendarDate{
    width: 0%;
    margin-top: 2.3%;
    margin-right: 3%;
}
.zui-table {
  border: none;
  /* border-right: solid 1px #DDEFEF; */
  border-collapse: separate;
  border-spacing: 0;
  font: normal 13px Arial, sans-serif;
}
.zui-table thead th {
  /* background-color: #DDEFEF; */
  border: none;
  color: #336b6b;
  padding: 10px;
  text-align: left;
  /* text-shadow: 1px 1px 1px #fff; */
  white-space: nowrap;
}
.zui-table tbody td {
  /* border-bottom: solid 1px #DDEFEF; */
  color: #333;
  padding: 10px;
  /* text-shadow: 1px 1px 1px #fff; */
  white-space: nowrap;
}
.zui-wrapper {
  position: relative;
}
.zui-scroller {
  margin-left: 490px;
  overflow-x: scroll;
  overflow-y: visible;
  padding-bottom: 5px;
  width: 600px;
}
.zui-table .zui-sticky-col2 {
  /* border-right: solid 1px #DDEFEF; */
  left: 0;
  position: absolute;
  top: auto;
  width: 110px;
}
.zui-table .zui-sticky-col3 {
  /* border-right: solid 1px #DDEFEF; */
  left: 110px;
  position: absolute;
  top: auto;
  width: 180px;
}
.zui-table .zui-sticky-col4 {
  /* border-right: solid 1px #DDEFEF; */
  left: 290px;
  position: absolute;
  top: auto;
  width: 200px;
}
.zui-table .zui-sticky-col5 {
  /* border-right: solid 1px #DDEFEF; */
  left: 1090px;
  position: absolute;
  top: auto;
  width: 100px;
}
</style>
<script>
import loading from "../../basic/loading.vue";
import VueJsonToCsv from 'vue-json-to-csv'
import AUTH from "../../services/auth";
import ROUTER from "../../router";
import config from "../../config.js";
import { GridPlugin, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids";
import moment from "moment";
export default {
  data() {
    return {
      toolbarOptions: ['ExcelExport'],
      formatDate: moment(new Date()).format('MM/DD/YYYY Hh:mm'),
      tableData: [],
      productData: [],
      categoryAll: [],
      category: ["Low Dose", "High Dose", "Over Dose"],
      loadingShow: false,
      categoryData: [],
      oneProd: [],
      prod: [],
      categoryName: "",
      finalData: [],
      newDataStorage: [],
      changeName: "lowDose",
      storeData: [],
      choosenDate: false,
      dialogConfirmation: false,
      newDateStorage: [],
      adminName: '',
      dates: [new Date().toISOString().substr(0, 10), ],
      overAllTotal: 0
    };
  },
  components: {
    loading,
    VueJsonToCsv
  },
  provide: {
    grid: [Toolbar, ExcelExport]
  },
  computed: {
    dateRangeText () {
      return this.dates.join(' ~ ')
    },
  },
  mounted() {
    this.retrieveCategory();
    this.retrieveCheckout();
    this.retrieveProducts();
    this.getAdmin();
  },
  methods: {
    toolbarClick(args) {
      if (args.item.id === 'Grid_excelexport') {
        let excelExportProperties = {
          fileName: this.formatDate + ' Order inventory.xlsx',
          header: {
            headerRows: 7,
            rows: [
              { cells: [{ colSpan: this.categoryAll.length + 4, value: "Driptea System", style: { fontColor: '#C67878', fontSize: 20, hAlign: 'Center', bold: true, } }] },
              { cells: [{ colSpan: this.categoryAll.length + 4, value: "A.C. Cortes Ave., Looc", style: { fontColor: '#C67878', fontSize: 15, hAlign: 'Center', bold: true, } }] },
              { cells: [{ colSpan: this.categoryAll.length + 4, value: "6014 Mandaue City, Philippine", style: { fontColor: '#C67878', fontSize: 15, hAlign: 'Center', bold: true, } }] },
              { cells: [{ colSpan: this.categoryAll.length + 4, value: "0917 329 7269", style: { fontColor: '#C67878', fontSize: 15, hAlign: 'Center', bold: true, } }] },
              { cells: [{ colSpan: this.categoryAll.length + 4, hyperlink: { target: 'https://www.facebook.com/driptealoocmandaue/', displayText: 'www.facebook.com/driptealoocmandaue' }, style: { hAlign: 'Center' } }] },
              { cells: [{ colSpan: this.categoryAll.length + 4, hyperlink: { target: 'samuelazurajr@gmail.com' }, style: { hAlign: 'Center' } }] },
            ]
          },
          footer: {
            footerRows: 3,
            rows: [
              { cells: [{ colSpan: this.categoryAll.length + 4, value: ("Total Quantity Used: " + this.overAllTotal), style: { fontSize: 15, hAlign: 'Right', bold: true } }] },
              { cells:  [{ colSpan: this.categoryAll.length + 4, value: "Print By: " + this.adminName + '  ' +  moment(new Date()).format('MM/DD/YYYY'), style: {fontSize: 15, hAlign: 'Left', bold: true, }},]},
            ]
          }
        };
        this.$refs.grid.excelExport(excelExportProperties);
      }
    },
    getAdmin(){
      this.loadingShow = true
      let params = {
        uname: localStorage.getItem('adminId')
      };
      this.$axios.post(AUTH.url + "getUserData", params, AUTH.config).then(response => {
        this.loadingShow = false
        if(response.data.status){
          AUTH.deauthenticate()
        }
        this.adminName = response.data.userdata[0].fname + ' ' + response.data.userdata[0].lname
      })
    },
    showModal(){
      this.retrieveChoosenData()
    },
    downloadData(){
      this.storeData = []
      this.overAllTotal = 0
      this.newDataStorage.forEach(items => {
        var list = {
          Date: this.getDate(items[0].get_customer[0].created_at),
          Name: items[0].get_customer[0].customerName ? items[0].get_customer[0].customerName : '',
          Address: items[0].get_customer[0].customerAddress ? items[0].get_customer[0].customerAddress : '',
        }
        var productName = []
        this.category.forEach(element => {
          this.productData.forEach(e => {
            if (e.productCategory === this.categoryName) {
              productName.push(e.productName);
            }
          });
        })
        var categoryAllStore = []
        this.prod.forEach((item, index) => {
          let lowLength = productName.length / 3;
          let highLength = lowLength + lowLength;
          let overLength = highLength + lowLength;
          var a = this.getAllValue(item, items, index)
          if(index < lowLength){
            list['LowDose ' + productName[index]] = a
            categoryAllStore.push('LowDose ' + productName[index])
          } else if(index < highLength && index >= lowLength){
            list['HighDose ' + productName[index]] = a
            categoryAllStore.push('HighDose ' + productName[index])
          } else if(index < overLength && index >= highLength){
            list['OverDose ' + productName[index]] = a
            categoryAllStore.push('OverDose ' + productName[index])
          }
        })
        list['Total'] = this.getTotal(items)
        this.categoryAll = categoryAllStore
        this.overAllTotal += this.getTotal(items)
        this.storeData.push(list)
      })
      this.choosenDate = true
    },
    getAllValue(item, items, index) {
      let total = 0;
      let category = "lowDose";
      let lowLength = this.prod.length / 3;
      let highLength = lowLength + lowLength;
      let overLength = highLength + lowLength;
      let a = 0;
      for (let i = 0; i < this.prod.length; i++) {
        if (a < lowLength) {
          if (index === a) {
            category = "lowDose";
            break;
          } else {
            a++;
          }
        } else if (a < highLength && a >= lowLength) {
          if (index === a) {
            category = "highDose";
            break;
          } else {
            a++;
          }
        } else if (a < overLength && a >= highLength) {
          if (index === a) {
            category = "overDose";
            break;
          } else {
            a++;
          }
        }
      }
      items.forEach(el => {
        if (el.size === category) {
          if (el.order_product[0].id === item.id) {
            total += el.quantity;
          }
        }
      });
      return total;
    },
    getTotal(items) {
      let subTotal = 0;
      items.forEach(el => {
        subTotal += el.quantity;
      });
      return subTotal;
    },
    getDate(date) {
      return moment(date).format("MM/DD/YYYY");
    },
    retrieveCheckout() {
      this.loadingShow = true;
      this.$axios
        .post(AUTH.url + "retrieveAllCheckouts", {}, AUTH.config)
        .then(res => {
          this.loadingShow = false;
          if (res.data.status) {
            AUTH.deauthenticate();
          }
          this.dataMethod(res.data.storeOrder);
        });
    },
    dataMethod(item) {
      let data = [];
      Object.keys(item).forEach(element => {
        data.push(item[element]);
      });
      this.finalData = data.reverse();
    },
    retrieveChoosenData(){
      this.loadingShow = true;
      let params = {
        start: this.dates[0] > this.dates[1] ? this.dates[1] : this.dates[0],
        end: this.dates[1] ? (this.dates[0] > this.dates[1] ? this.dates[0] : this.dates[1]) : this.dates[0]
      }
      this.$axios
        .post(AUTH.url + "retrieveChoosenCheckouts", params, AUTH.config)
        .then(res => {
          this.loadingShow = false;
          if (res.data.status) {
            AUTH.deauthenticate();
          }
          let data = [];
          Object.keys(res.data.storeOrder).forEach(element => {
            data.push(res.data.storeOrder[element]);
          });
          this.newDataStorage = data.reverse();
          this.downloadData()
        });
    },
    retrieveCategory() {
      this.loadingShow = true;
      this.$axios
        .post(AUTH.url + "retrieveCategoryAscending", {}, AUTH.config)
        .then(res => {
          if (res.data.status) {
            AUTH.deauthenticate();
          }
          this.categoryData = res.data.addCategory;
          this.categoryName = res.data.addCategory[0].productCategory
          this.loadingShow = false;
        });
    },
    retrieveProducts() {
      this.loadingShow = true;
      this.$axios
        .post(AUTH.url + "RetrieveWithDelete", {}, AUTH.config)
        .then(response => {
          if (response.data.status) {
            AUTH.deauthenticate();
          }
          this.productData = response.data.product;
          this.loadingShow = false;
          this.getProdLength();
        });
    },
    getProdLength() {
      this.loadingShow = true;
      let storeOneProd = [];
      this.productData.forEach(e => {
        if (e.productCategory === this.categoryName) {
          storeOneProd.push(e);
        }
      });
      this.oneProd = storeOneProd;
      let storeProd = [];
      for (let i = 0; i < this.category.length; i++) {
        this.productData.forEach(el => {
          if (el.productCategory === this.categoryName) {
            storeProd.push(el);
          }
        });
      }
      this.prod = storeProd;
      this.loadingShow = false;
    },
    changeCategory(param) {
      this.categoryName = param;
      this.getProdLength();
    }
  }
};
</script>
