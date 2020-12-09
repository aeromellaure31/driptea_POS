<template>
  <div>
    <v-toolbar flat>
      <template v-slot:extension>
        <v-tabs dark background-color="#ff5b04" fixed-tabs>
          <v-tabs-slider></v-tabs-slider>
          <v-tab @click="tableForUpcomingCups">Incoming Cups</v-tab>
          <v-tab @click="tableForCupsOnrack">Cups Onrack</v-tab>
          <v-tab @click="tableForUsedCups">Used Cups</v-tab>
          <v-tab @click="tableForRemainingCups">Remaining Cups</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <v-data-table
      :headers="headersForCup"
      :items="dataInDB"
      :search="search"
      :items-per-page="5"
      class="elevation-3"
    >
      <template v-slot:top>
        <v-toolbar class="mb-2" color="#ff5b04" dark flat>
          <v-toolbar-title class="col pa-3 py-4 white--text">{{cupName}}</v-toolbar-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
            <v-date-picker v-model="dates" range></v-date-picker>
          </v-menu>
          <v-btn color="success" class="mr-6" @click="searchData">Find</v-btn>
        </v-toolbar>
      </template>
      <template v-slot:item.created_at="{ item }">
        <span>{{getDate(item.created_at)}}</span>
      </template>
      <template v-slot:item.totalIncoming="{ item }">
        <span>{{getTotal(item)}}</span>
      </template>
    </v-data-table>

    <!-- Modal For exporting -->

    <template>
      <v-row justify="center">
        <v-dialog v-model="dialogForCupSize" persistent max-width="1000px">
          <v-card>
            <div class="modal-header">
                <span class="headline">Export as Excel</span>
                <button type="button" class="close" @click="dialogForCupSize = false">&times;</button><br>
            </div>
            <v-card-text>
                <ejs-grid ref='grid' id='Grid' :dataSource='dataInDB' :toolbar='toolbarOptions' height='270px' :allowPaging='true' :allowExcelExport='true' :toolbarClick='toolbarClick'>
                    <e-columns>
                        <e-column field='Date' headerText='Date' width=120></e-column>
                        <e-column field='incomingLowDose' headerText='Incoming (LD)' width=150></e-column>
                        <e-column field='incomingHighDose' headerText='Incoming (HD)' width=150></e-column>
                        <e-column field='incomingOverDose' headerText='Incoming (OD)' width=150></e-column>
                        <e-column field='TotalIncoming' headerText='Total Incoming Cups' width=180></e-column>

                        <e-column field='onRockLowDose' headerText='Cups Onrack (LD)' width=150></e-column>
                        <e-column field='onRockHighDose' headerText='Cups Onrack (HD)' width=150></e-column>
                        <e-column field='onRockOverDose' headerText='Cups Onrack (OD)' width=150></e-column>
                        <e-column field='TotalOnRock' headerText='Total Cups Onrack' width=150></e-column>

                        <e-column field='usedCupsLowDose' headerText='Used Cups (LD)' width=150></e-column>
                        <e-column field='usedCupsHighDose' headerText='Used Cups (HD)' width=150></e-column>
                        <e-column field='usedCupsOverDose' headerText='Used Cups (OD)' width=150></e-column>
                        <e-column field='TotalUsed' headerText='Total Used Cups' width=150></e-column>

                        <e-column field='remainingLowDose' headerText='Remaining Cups (LD)' width=180></e-column>
                        <e-column field='remainingHighDose' headerText='Remaining Cups (HD)' width=180></e-column>
                        <e-column field='remainingOverDose' headerText='Remaining Cups (OD)' width=180></e-column>
                        <e-column field='TotalRemaining' headerText='Total Remaining Cups' width=180></e-column>
                    </e-columns>
                </ejs-grid>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-row>
    </template>

    <loading v-if="loadingShow"></loading>
  </div>
</template>
<script>
import AUTH from "../../services/auth";
import loading from "../../basic/loading.vue";
import image from "../../../assets/logo.png";
import moment from "moment";
import { GridPlugin, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids";
export default {
  data() {
    return {
            toolbarOptions: ['ExcelExport', 'Search'],

      formatDate: moment(new Date()).format("MM/DD/YYYY Hh:mm"),
      modalData: [],
      downLoadData: [],
      dataInDB: [],
      search: null,
      cupName: null,
      headersForCup: [],
      loadingShow: false,
      dialogForCupSize: false,
      adminName: '',
      dates: [new Date().toISOString().substr(0, 10), ]
    };
  },
  components: {
    loading
  },
  mounted() {
    this.tableForUpcomingCups();
    this.tableForAllCups();
    this.getAdmin();
  },
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    }
  },
   provide: {
        grid: [Toolbar, ExcelExport]
    },

  methods: {
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
    toolbarClick(args) {
      if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
        let excelExportProperties = {
          fileName: this.formatDate + ' Cups.xlsx',
          header: {
            fromTop: 0,
            height: 130,
            contents: [
              {
                type: 'Image',
                src: this.image,
                position: { x: 435, y: 10 },
                size: { height: 100, width: 250 },
              }
            ],
            headerRows: 7,
            rows: [
              { cells: [{ colSpan: 17, value: "Driptea System", style: { fontColor: '#C67878', fontSize: 25, hAlign: 'Center', bold: true, } }] },
              { cells: [{ colSpan: 17, value: "A.C. Cortes Ave., Looc", style: { fontColor: '#C67878', fontSize: 20, hAlign: 'Center', bold: true, } }] },
              { cells: [{ colSpan: 17, value: "6014 Mandaue City, Philippine", style: { fontColor: '#C67878', fontSize: 20, hAlign: 'Center', bold: true, } }] },
              { cells: [{ colSpan: 17, value: "0917 329 7269", style: { fontColor: '#C67878', fontSize: 20, hAlign: 'Center', bold: true, } }] },
              { cells: [{ colSpan: 17, hyperlink: { target: 'https://www.facebook.com/driptealoocmandaue/', displayText: 'www.facebook.com/driptealoocmandaue' }, style: { hAlign: 'Center' } }] },
              { cells: [{ colSpan: 17, hyperlink: { target: 'samuelazurajr@gmail.com' }, style: { hAlign: 'Center' } }] },
            ]
          },
          footer: {
            footerRows: 2,
            rows: [
              { cells:  [{ colSpan: 2, value: "Print By: " + this.adminName + '  ' +  moment(new Date()).format('MM/DD/YYYY'), style: {fontSize: 15, hAlign: 'Left', bold: true, }},]},
            ]
          }
        };
        this.$refs.grid.excelExport(excelExportProperties);
      }
    },
    close() {
      this.dialogForCupSize = false;
      this.tableForAllCups();
    },
    searchData() {
      this.dialogForCupSize = true
      this.downLoadData = this.dataInDB
      this.downLoadData[0]['Date'] = moment(this.dataInDB[0]['created_at']).format('MM/DD/YYYY')
      this.downLoadData.forEach((el, index) => {
        this.downLoadData[index]['Date'] = moment(el.created_at).format('MM/DD/YYYY')
        this.downLoadData[index]['TotalOnRock'] = el.onRockLowDose + el.onRockHighDose + el.onRockOverDose
        this.downLoadData[index]['TotalIncoming'] = el.incomingHighDose + el.incomingLowDose + el.incomingOverDose
        this.downLoadData[index]['TotalRemaining'] = el.remainingLowDose + el.remainingHighDose + el.remainingOverDose
        this.downLoadData[index]['TotalUsed'] = el.usedCupsLowDose + el.usedCupsHighDose + el.usedCupsLowDose
      })
    },
    tableForAllCups() {
      this.loadingShow = true;
      this.$axios
        .post(AUTH.url + "retrieveCupSize", {}, AUTH.config)
        .then(response => {
          if (response.data.status) {
            AUTH.deauthenticate();
          }
          this.dataInDB = response.data.quantityCupsInDB.reverse();
          this.headersForCup = [
            { text: "Date", value: "created_at" },
            { text: "Low Dose (LD)", value: "onRockLowDose" },
            { text: "High Dose (HD)", value: "onRockHighDose" },
            { text: "Over Dose (OD)", value: "onRockOverDose" },
            { text: "Total", value: "totalIncoming" }
          ];
          this.cupName = "Cups Onrack";
          this.loadingShow = false;
        });
    },
    getTotal(item) {
      if (this.cupName === "Upcoming Cups") {
        return (
          item.incomingLowDose + item.incomingHighDose + item.incomingOverDose
        );
      } else if (this.cupName === "Cups Onrack") {
        return item.onRockLowDose + item.onRockHighDose + item.onRockOverDose;
      } else if (this.cupName === "Used Cups") {
        return (
          item.usedCupsLowDose + item.usedCupsHighDose + item.usedCupsOverDose
        );
      } else if (this.cupName === "Remaining Cups") {
        return (
          item.remainingLowDose +
          item.remainingHighDose +
          item.remainingOverDose
        );
      }
    },
    getDate(date) {
      return moment(date).format("MM/DD/YYYY");
    },
    tableForUpcomingCups() {
      this.loadingShow = true;
      let params = {
        dateFrom: this.dates[0] > this.dates[1] ? this.dates[1] : this.dates[0],
        dateTo: this.dates[1]
          ? this.dates[0] > this.dates[1]
            ? this.dates[0]
            : this.dates[1]
          : this.dates[0]
      };
      this.$axios
        .post(AUTH.url + "retrieveCupForInventory", params, AUTH.config)
        .then(response => {
          if (response.data.status) {
            AUTH.deauthenticate();
          }
          this.modalData = response.data.quantityCupsInDB.reverse();
          response.data.quantityCupsInDB.forEach(element => {
            let thisDate = this.getDate(element.created_at);
          });
          this.headersForCup = [
            { text: "Date", value: "created_at" },
            { text: "Low Dose (LD)", value: "incomingLowDose" },
            { text: "High Dose (HD)", value: "incomingHighDose" },
            { text: "Over Dose (OD)", value: "incomingOverDose" },
            { text: "Total", value: "totalIncoming" }
          ];
          this.cupName = "Upcoming Cups";
          this.loadingShow = false;
        });
    },
    tableForCupsOnrack() {
      this.loadingShow = true;
      let params = {
        dateFrom: this.dates[0] > this.dates[1] ? this.dates[1] : this.dates[0],
        dateTo: this.dates[1]
          ? this.dates[0] > this.dates[1]
            ? this.dates[0]
            : this.dates[1]
          : this.dates[0]
      };
      this.$axios
        .post(AUTH.url + "retrieveCupForInventory", params, AUTH.config)
        .then(response => {
          if (response.data.status) {
            AUTH.deauthenticate();
          }
          this.modalData = response.data.quantityCupsInDB.reverse();
          this.headersForCup = [
            { text: "Date", value: "created_at" },
            { text: "Low Dose (LD)", value: "onRockLowDose" },
            { text: "High Dose (HD)", value: "onRockHighDose" },
            { text: "Over Dose (OD)", value: "onRockOverDose" },
            { text: "Total", value: "totalIncoming" }
          ];
          this.cupName = "Cups Onrack";
          this.loadingShow = false;
        });
    },
    tableForUsedCups() {
      this.loadingShow = true;
      let params = {
        dateFrom: this.dates[0] > this.dates[1] ? this.dates[1] : this.dates[0],
        dateTo: this.dates[1]
          ? this.dates[0] > this.dates[1]
            ? this.dates[0]
            : this.dates[1]
          : this.dates[0]
      };
      this.$axios
        .post(AUTH.url + "retrieveCupForInventory", params, AUTH.config)
        .then(response => {
          if (response.data.status) {
            AUTH.deauthenticate();
          }
          this.modalData = response.data.quantityCupsInDB.reverse();
          this.headersForCup = [
            { text: "Date", value: "created_at" },
            { text: "Low Dose (LD)", value: "usedCupsLowDose" },
            { text: "High Dose (HD)", value: "usedCupsHighDose" },
            { text: "Over Dose (OD)", value: "usedCupsOverDose" },
            { text: "Total", value: "totalIncoming" }
          ];
          this.cupName = "Used Cups";
          this.loadingShow = false;
        });
    },
    tableForRemainingCups() {
      this.loadingShow = true;
      let params = {
        dateFrom: this.dates[0] > this.dates[1] ? this.dates[1] : this.dates[0],
        dateTo: this.dates[1]
          ? this.dates[0] > this.dates[1]
            ? this.dates[0]
            : this.dates[1]
          : this.dates[0]
      };
      this.$axios
        .post(AUTH.url + "retrieveCupForInventory", params, AUTH.config)
        .then(response => {
          if (response.data.status) {
            AUTH.deauthenticate();
          }
          this.modalData = response.data.quantityCupsInDB.reverse();
          this.headersForCup = [
            { text: "Date", value: "created_at" },
            { text: "Low Dose (LD)", value: "remainingLowDose" },
            { text: "High Dose (HD)", value: "remainingHighDose" },
            {
              text: "Remaining Cups Over Dose (OD)",
              value: "remainingOverDose"
            },
            { text: "Total", value: "totalIncoming" }
          ];
          this.cupName = "Remaining Cups";
          this.loadingShow = false;
        });
    }
  }
};
</script>
<style scoped>
@import url("https://cdn.syncfusion.com/ej2/material.css");
.table {
  margin-left: 50px;
  width: 90%;
}
td {
  text-align: center;
}
.calendarDate{
  width: 0%;
  margin-top: 2.3%;
  margin-right: 3%;
}
</style>
