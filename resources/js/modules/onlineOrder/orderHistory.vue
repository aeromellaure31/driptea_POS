<template>
    <div class="container">
       <center>
            <v-card class="mt-10">
                <v-tabs
                color="deep-orange accent-4"
                right
                >
                <v-tab @click="tableDataCompleteOrder=true,tableDataPendingOrders=false">Completed Orders</v-tab>
                <v-tab @click="tableDataCompleteOrder=false,tableDataPendingOrders=true">Pending Orders</v-tab>
                </v-tabs>
            </v-card>
 
            <div v-if="tableDataCompleteOrder">
            <v-simple-table
               :items-per-page="5"
               class="elevation-3"
               >
                 <thead >
                   <tr v-if="tableData !== null && tableData.length > 0">
                       <th>Date</th>
                       <th>Order #</th>
                       <th>Product&nbsp;Ordered</th>
                       <th>Total</th>
                       <th style="width: 15px;">Action</th>
                   </tr>
                    <div v-else>
                       <empty :title="'No Complete Orders!'"></empty>
                   </div>
                 </thead>
                   <tbody>
                       <tr v-for="(item, index) in tableData" :key="index">
                           <td>{{getDate(item[0])}}</td>
                           <td>{{item[0].get_checkouts ? item[0].get_checkouts[0].customerId : ''}}</td>
                           <td>{{getProduct(item)}}</td>
                           <td>{{item[0].get_checkouts[0].total}}</td>
                           <td>
                               <button class="btn btn-primary"  data-toggle="modal" data-target="#myModal" @click="viewOrder(item)">View</button>
                           </td>
                       </tr>
                   </tbody>
               <template>
               </template>
               </v-simple-table>
               </div>
               
           <div v-if="tableDataPendingOrders">
            <v-simple-table
               :items-per-page="5"
               class="elevation-3"
               >
                 <thead>
                   <tr v-if="tableDataPending !== null && tableDataPending.length > 0">
                       <th>Date</th>
                       <th>Order #</th>
                       <th>Product&nbsp;Ordered</th>
                       <th>Total</th>
                       <th>Status</th>
                       <th style="width: 15px;">Action</th>
                   </tr>
                     <div v-else>
                       <empty :title="'No Pending Orders!'"></empty>
                   </div>
                   </thead>
                   <tbody>
                       <tr v-for="(items, index) in tableDataPending" :key="index">
                           <td>{{getDate(items[0])}}</td>
                           <td>{{items[0].id}}</td>
                           <td>{{getProduct(items)}}</td>
 
                           <!-- <td>{{items.order_product[0].productName}}</td> -->
                           <td>₱ {{getTotal(items)}}</td>
                           <td>Pending Order</td>
                           <td>
                               <button class="btn btn-primary"  data-toggle="modal" data-target="#myModal" @click="viewOrder(items)">View</button>
                           </td>
                       </tr>
                   </tbody>
               </v-simple-table>
               </div>
       </center>
       <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <v-simple-table :items-per-page="5" class="elevation-3">
                            <template v-slot:top>
                            <center>
                                <v-toolbar class="mb-2" color="#ff5b04" dark flat>
                                    <v-toolbar-title class="col pa-3 py-4 white--text">Completed Order</v-toolbar-title>
                                </v-toolbar>
                            </center>
                            </template>
                            <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Add Ons</th>
                                <th>Cup Type</th>
                                <th>Unit Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(item, index) in showOrderData" :key="index">
                                <td>{{item.order_product ? item.order_product[0].productName : ''}}</td>
                                <td>{{item.same_order ? getAddOns(item.same_order) : ''}}</td>
                                <td>{{getCup(item.cupType)}}</td>
                                <td>{{item.choosenPrice}}</td>
                                <td>{{item.quantity}}</td>
                                <td>{{item.subTotal}}</td>
                            </tr>
                            </tbody>
                            <template></template>
                        </v-simple-table>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal" >Okay</button>
                    </div>
                </div>
            </div>
        </div>
        <loading v-if="loadingShow"></loading>
   </div>
</template>
<style scoped>
.table {
  width: 70%;
  margin-left: 5%;
}
.imageSize2 {
  height: 300px;
  width: 300px;
  margin-top: 2%;
}
</style>
<script>
import AUTH from "../../services/auth";
import ROUTER from "../../router";
import config from "../../config.js";
import empty from "../../basic/empty.vue";
import loading from "../../basic/loading.vue";
import moment from "moment";
export default {
  data() {
    return {
      tableData: [],
      tableDataCompleteOrder: true,
      tableDataPendingOrders: false,
      config: config,
      loadingShow: false,
      tableDataPending: [],
      search: null,
      productName: null,
      description: null,
      image: null,
      cupType: null,
      cupSize: null,
      size: null,
      sugarLevel: null,
      addOns: null,
      priceShown: null,
      quantity: null,
      basePrice: null,
      sizeName: null,
      orderDate: null,
      deliveryFee: null,
      showOrderData: null,
      addOnsData: null,
      cupData: null
    };
  },
  mounted() {
    this.retrievePending();
    this.retrieve();
    this.retrieveAddOns();
    this.retrieveCupType();
  },
  components: {
    empty,
    loading
  },
  methods: {
    getCup(item) {
      let cup = "";
      this.cupData.forEach(el => {
        if (item === el.cupTypeName) {
          if (parseInt(el.inputCupOnlinePrice) === 0) {
            cup = item;
          } else {
            cup = item + "(+" + el.inputCupOnlinePrice + ".00)";
          }
        }
      });
      return cup;
    },
    retrieveCupType() {
      this.$axios
        .post(AUTH.url + "retrieveCupType", {}, AUTH.config)
        .then(response => {
          if (response.data.status) {
            AUTH.deauthenticate();
          }
          this.cupData = response.data.cupType;
        });
    },
    getDate(item) {
      return moment(item.updated_at).format("MM/DD/YYYY");
    },
    getTotal(item) {
      let total = 0;
      let index = item.length;
      item.forEach(el => {
        if (item.indexOf(el) >= index - 1) {
          total += el.subTotal;
        } else {
          total += el.subTotal;
        }
      });
      return total;
    },
    getProduct(item) {
      let product = "";
      let index = item.length;
      item.forEach(el => {
        if (item.indexOf(el) >= index - 1) {
          product += el.order_product[0].productName;
        } else {
          product += el.order_product[0].productName + ", ";
        }
      });
      return product;
    },
    getSizePrice() {
      if (this.size === "highDose") {
        this.sizeName = "High Dose";
        this.basePrice = this.highPrice;
      } else if (this.size === "overDose") {
        this.sizeName = "Over Dose";
        this.basePrice = this.overPrice;
      } else if (this.size === "lowDose") {
        this.sizeName = "Low Dose";
        this.basePrice = this.price;
      }
    },
    retrieve() {
      this.loadingShow = true;
      let parameter = {
        id: localStorage.getItem("customerId")
      };
      this.$axios
        .post(AUTH.url + "retrieveOnlineCheckouts", parameter, AUTH.config)
        .then(response => {
          if (response.data.status) {
            AUTH.deauthenticate();
          }
          this.loadingShow = false;
          Object.keys(response.data.storeOrder).forEach(element => {
            this.tableData.push(response.data.storeOrder[element]);
          });
          this.tableDataCompleteOrder = true;
        });
    },
    retrievePending() {
      this.tableDataPending = []
      this.loadingShow = true;
      let parameter = {
        id: localStorage.getItem("customerId")
      };
      this.$axios
        .post(AUTH.url + "retrieveOneOnlineOrder", parameter, AUTH.config)
        .then(response => {
          if (response.data.status) {
            AUTH.deauthenticate();
          }
          this.loadingShow = false;
          Object.keys(response.data.order).forEach(element => {
            this.tableDataPending.push(response.data.order[element]);
          }); 
        });
    },
    retrieveAddOns() {
      this.$axios
        .post(AUTH.url + "retrievingAddOns", {}, AUTH.config)
        .then(response => {
          if (response.data.status) {
            AUTH.deauthenticate();
          }
          this.addOnsData = response.data.addons;
        });
    },
    getAddOns(item) {
      let storeAddOns = "";
      let index = item.length;
      item.forEach(el => {
        this.addOnsData.forEach(e => {
          if (el.addOns === e.addons_name) {
            if (item.indexOf(el) >= index - 1) {
              storeAddOns += el.addOns + " (+" + e.onlineAddOnsPrice + ".00)";
            } else {
              storeAddOns += el.addOns + " (+" + e.onlineAddOnsPrice + ".00), ";
            }
          }
        });
      });
      return storeAddOns;
    },
    viewOrder(item) {
        this.showOrderData = item
    },
  }
};
</script>
