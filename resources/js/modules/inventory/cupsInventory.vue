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

          <VueJsonToCsv :json-data="toCsv" :csv-title="'myCups'">
            <v-btn color="success" class="mr-6">
              Export
              <i class="mdi mdi-export-variant" aria-hidden="true"></i>
            </v-btn>
          </VueJsonToCsv>
        </v-toolbar>
      </template>
      <template v-slot:item.created_at="{ item }">
        <span>{{getDate(item.created_at)}}</span>
      </template>
      <template v-slot:item.totalIncoming="{ item }">
        <span>{{getTotal(item)}}</span>
      </template>
    </v-data-table>
    <loading v-if="loadingShow"></loading>
  </div>
</template>
<script>
import AUTH from "../../services/auth";
import VueJsonToCsv from "vue-json-to-csv";
import loading from "../../basic/loading.vue";
import moment from "moment";
export default {
  data() {
    return {
      dataInDB: [],
      search: null,
      cupName: null,
      headersForCup: [],
      loadingShow: false,
      toCsv: [],
      dates: [new Date().toISOString().substr(0, 10), ],
    };
  },
  components: {
    VueJsonToCsv,
    loading
  },
  mounted() {
    this.tableForUpcomingCups();
  },
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    }
  },

  methods: {
    searchData() {

      this.toCsv=[],
      this.tableForUpcomingCups();
      
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
      this.$axios
        .post(
          AUTH.url + "retrieveCupForInventory",
          { dateFrom: this.dates[0], dateTo: this.dates[1] },
          AUTH.config
        )
        .then(response => {
          console.log(this.dates[0], this.dates[1]);

          if (response.data.status) {
            AUTH.deauthenticate();
          }
          this.dataInDB = response.data.quantityCupsInDB.reverse();
          response.data.quantityCupsInDB.forEach(element => {
            let thisDate = this.getDate(element.created_at);
            this.toCsv.push({
              Date: thisDate,
              "Incoming Low Dose": element.incomingLowDose,
              "Incoming High Dose": element.incomingHighDose,
              "Incoming Over Dose": element.incomingOverDose,
              "Total Incoming Cups":
                element.incomingLowDose +
                element.incomingHighDose +
                element.incomingOverDose,
              "Cups Onrack Low Dose": element.onRockLowDose,
              "Cups Onrack High Dose": element.onRockHighDose,
              "Cups Onrack Over Dose": element.onRockOverDose,
              "Total Cups Onrack":
                element.onRockLowDose +
                element.onRockHighDose +
                element.onRockOverDose,
              "Used Cups Low Dose": element.usedCupsLowDose,
              "Used Cups High Dose": element.usedCupsHighDose,
              "Used Cups Over Dose": element.usedCupsOverDose,
              "Total Used Cups":
                element.usedCupsLowDose +
                element.usedCupsHighDose +
                element.usedCupsOverDose,
              "Remaining Cups Low Dose": element.incomingLowDose,
              "Remaining Cups High Dose": element.incomingHighDose,
              "Remaining Cups Over Dose": element.incomingOverDose,
              "Total Remaining Cups":
                element.incomingLowDose +
                element.incomingHighDose +
                element.incomingOverDose
            });
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
      this.$axios
        .post(AUTH.url + "retrieveCupForInventory", { dateFrom: this.dates[0], dateTo: this.dates[1] }, AUTH.config)
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
    tableForUsedCups() {
      this.loadingShow = true;
      this.$axios
        .post(AUTH.url + "retrieveCupForInventory", { dateFrom: this.dates[0], dateTo: this.dates[1] }, AUTH.config)
        .then(response => {
          if (response.data.status) {
            AUTH.deauthenticate();
          }
          this.dataInDB = response.data.quantityCupsInDB.reverse();
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
      this.$axios
        .post(AUTH.url + "retrieveCupForInventory", { dateFrom: this.dates[0], dateTo: this.dates[1] }, AUTH.config)
        .then(response => {
          if (response.data.status) {
            AUTH.deauthenticate();
          }
          this.dataInDB = response.data.quantityCupsInDB.reverse();
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
.table {
  margin-left: 50px;
  width: 90%;
}
td {
  text-align: center;
}
</style>