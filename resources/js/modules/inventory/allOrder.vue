<template>
    <div class="container">
       <center>
            <v-card class="mt-10">
                <v-tabs
                background-color="deep-orange"
                color="white accent-4"
                right
                >
                    <v-tab @click="tableDataCompleteOrder=true,tableDataPendingOrders=false,tableProcessOrders=false,tableCancelled=false">Completed Orders</v-tab>
                    <v-tab @click="tableDataCompleteOrder=false,tableDataPendingOrders=false,tableProcessOrders=true,tableCancelled=false">Processing Orders</v-tab>
                    <v-tab @click="tableDataCompleteOrder=false,tableDataPendingOrders=true,tableProcessOrders=false,tableCancelled=false">Pending Orders</v-tab>
                    <v-tab @click="tableDataCompleteOrder=false,tableDataPendingOrders=false,tableProcessOrders=false,tableCancelled=true">Cancelled Orders</v-tab>
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
                        <th>Customer Name</th>
                        <th>Address</th>
                        <th>Contact#</th>
                        <th>Order #</th>
                        <th>Product&nbsp;Ordered</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                        <div v-else>
                            <empty :title="'No Completed Orders!'"></empty>
                        </div>
                    </thead>
                   <tbody>
                       <tr v-for="(item, index) in tableData" :key="index">
                           <td>{{getDate(item[0])}}</td>
                           <td>{{item[0].get_customer ? item[0].get_customer[0].customerName : ''}}</td>
                           <td>{{item[0].get_customer ? item[0].get_customer[0].customerAddress : ''}}</td>
                           <td>{{item[0].get_customer ? item[0].get_customer[0].customerContactNumber : ''}}</td>
                           <td>{{item[0].get_checkouts ? item[0].get_checkouts[0].customerId : ''}}</td>
                           <td>{{getProduct(item)}}</td>
                           <td>{{item[0].get_checkouts[0].total}}</td>
                           <td>
                               <v-icon medium data-toggle="modal" data-target="#myModal" @click="viewOrder(item), title = 'Completed Orders'">mdi-eye</v-icon>
                           </td>
                       </tr>
                   </tbody>
               </v-simple-table>
            </div>
            <div v-if="tableProcessOrders">
                <v-simple-table
                :items-per-page="5"
                class="elevation-3"
                >
                    <thead >
                    <tr v-if="tableProcess !== null && tableProcess.length > 0">
                        <th>Date</th>
                        <th>Customer Name</th>
                        <th>Address</th>
                        <th>Contact#</th>
                        <th>Order #</th>
                        <th>Product&nbsp;Ordered</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                        <div v-else>
                        <empty :title="'No Processing Orders!'"></empty>
                    </div>
                    </thead>
                   <tbody>
                       <tr v-for="(item, index) in tableProcess" :key="index">
                           <td>{{getDate(item[0])}}</td>
                           <td>{{item[0].get_customer ? item[0].get_customer[0].customerName : ''}}</td>
                           <td>{{item[0].get_customer ? item[0].get_customer[0].customerAddress : ''}}</td>
                           <td>{{item[0].get_customer ? item[0].get_customer[0].customerContactNumber : ''}}</td>
                           <td>{{item[0].get_checkouts ? item[0].get_checkouts[0].customerId : ''}}</td>
                           <td>{{getProduct(item)}}</td>
                           <td>{{item[0].get_checkouts[0].total}}</td>
                           <td style="width: 13%;">
                               <v-icon @click="toComplete(item)">mdi-check</v-icon>
                               <v-icon medium data-toggle="modal" data-target="#myModal" @click="viewOrder(item), title = 'Processing Orders'">mdi-eye</v-icon>
                               <!-- <v-icon medium @click="deleteOrder(item, 'processing')">mdi-window-close</v-icon> -->
                           </td>
                       </tr>
                   </tbody>
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
                       <th>Customer Name</th>
                       <th>Address</th>
                       <th>Contact#</th>
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
                           <td>{{items[0].get_customer ? items[0].get_customer[0].customerName : ''}}</td>
                           <td>{{items[0].get_customer ? items[0].get_customer[0].customerAddress : ''}}</td>
                           <td>{{items[0].get_customer ? items[0].get_customer[0].customerContactNumber : ''}}</td>
                           <td>{{items[0].id}}</td>
                           <td>{{getProduct(items)}}</td>
                           <td>₱ {{getTotal(items)}}</td>
                           <td>Pending Order</td>
                           <td style="width: 10%;">
                               <v-icon medium data-toggle="modal" data-target="#myModal" @click="viewOrder(items), title = 'Pending Orders'">mdi-eye</v-icon>
                               <v-icon medium @click="deleteOrder(items, 'pending')">mdi-window-close</v-icon>
                           </td>
                       </tr>
                   </tbody>
               </v-simple-table>
               </div>
           <div v-if="tableCancelled">
                <v-simple-table
               :items-per-page="5"
               class="elevation-3"
               >
                    <thead>
                        <tr v-if="tableDataCancelled !== null && tableDataCancelled.length > 0">
                            <th>Date</th>
                            <th>Customer Name</th>
                            <th>Address</th>
                            <th>Contact#</th>
                            <th>Order #</th>
                            <th>Product&nbsp;Ordered</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th style="width: 15px;">Action</th>
                        </tr>
                            <div v-else>
                            <empty :title="'No Cancelled Orders!'"></empty>
                        </div>
                   </thead>
                    <tbody>
                        <tr v-for="(items, index) in tableDataCancelled" :key="index">
                            <td>{{getDate(items[0])}}</td>
                            <td>{{items[0].get_customer ? items[0].get_customer[0].customerName : ''}}</td>
                            <td>{{items[0].get_customer ? items[0].get_customer[0].customerAddress : ''}}</td>
                            <td>{{items[0].get_customer ? items[0].get_customer[0].customerContactNumber : ''}}</td>
                            <td>{{items[0].id}}</td>
                            <td>{{getProduct(items)}}</td>
                            <td>₱ {{getTotal(items)}}</td>
                            <td>Cancelled Order</td>
                            <td style="width: 10%;">
                                <v-icon medium data-toggle="modal" data-target="#myModal" @click="viewOrder(items), title = 'Cancelled Orders'">mdi-eye</v-icon>
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
                                    <v-toolbar-title class="col pa-3 py-4 white--text">{{title}}</v-toolbar-title>
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
import swal from "sweetalert";
import $ from 'jquery'
export default {
  data() {
    return {
      tableData: [],
      tableProcess: [],
      tableDataCompleteOrder: true,
      tableDataPendingOrders: false,
      tableProcessOrders: false,
      tableCancelled: false,
      config: config,
      loadingShow: false,
      tableDataPending: [],
      tableDataCancelled: [],
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
      cupData: null,
      title: null,
    };
  },
  mounted() {
    this.retrievePending();
    this.retrieve();
    this.retrieveAddOns();
    this.retrieveCupType();
    this.retrieveProcessed();
    this.retrieveCancelled();
    this.tableDataCompleteOrder = true;
    let pusher = new Pusher(this.config.PUSHER_APP_KEY, {
      cluster: this.config.PUSHER_APP_CLUSTER,
      secret: this.config.PUSHER_APP_SECRET,
      encrypted: false
    });
    let channel = pusher.subscribe("driptea-channel");
    let obj = this;
    pusher.logToConsole = true;
    channel.bind("driptea-data", data => {
        this.retrievePending();
        this.retrieve();
        this.retrieveAddOns();
        this.retrieveCupType();
        this.retrieveProcessed();
        this.retrieveCancelled();
        $("#myModal").modal("hide");
        this.tableDataCompleteOrder = true
        this.tableDataPendingOrders = false
        this.tableProcessOrders = false
    });
  },
  components: {
    empty,
    loading
  },
  methods: {
    deleteOrder(item, param){
        let id = []
        let low = 0
        let high = 0
        let over = 0
        item.forEach(element => {
            id.push(element.id)
            if(element.size === 'lowDose'){
                low += element.quantity
            }else if(element.size === 'highDose'){
                high += element.quantity
            }else if(element.size === 'overDose'){
                over += element.quantity
            }
        });
        swal({
            text: "Are you sure you want to Cancel this order?",
            icon: "warning",
            buttons: {
                no: 'No',
                yes: 'Yes'
            }
        }).then(el => {
            if(el === 'yes'){
                if(param === 'pending'){
                    this.loadingShow = true
                    let params = {
                        id: id,
                        status: 'cancel',
                        cashierId: localStorage.getItem('cashierId') ? localStorage.getItem('cashierId') : localStorage.getItem('adminId'),
                    }
                    this.$axios.post(AUTH.url + 'updateCancelOrder', params, AUTH.config).then(res => {
                        this.loadingShow = false
                        if(res.data.status){
                            AUTH.deauthenticate()
                        }
                        swal({
                            title: "Order successfully Cancelled",
                            icon: "success",
                        }).then(e => {
                            this.retrievePending();
                            this.retrieve();
                            this.retrieveAddOns();
                            this.retrieveCupType();
                            this.retrieveProcessed();
                            this.tableDataCompleteOrder = false
                            this.tableDataPendingOrders = true
                            this.tableProcessOrders = false
                        })
                    })
                }
            }
        })
    },
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
    toComplete(item){
        swal({
            text: "Are you sure you want to Complete this order?",
            icon: "warning",
            buttons: {
                no: 'No',
                yes: 'Yes'
            }
        }).then(el => {
            if(el === 'yes'){
                this.loadingShow = true
                let params = {
                    data: item,
                    status: 'complete',
                    cashierId: localStorage.getItem('cashierId') ? localStorage.getItem('cashierId') : localStorage.getItem('adminId'),
                }
                this.$axios.post(AUTH.url + 'updateStatus', params, AUTH.config).then(res => {
                    this.loadingShow = false
                    if (res.data.status) {
                        AUTH.deauthenticate();
                    }
                    swal({
                        title: "Successfully Completed!",
                        icon: "success",
                    }).then(e => {
                        this.retrievePending();
                        this.retrieve();
                        this.retrieveAddOns();
                        this.retrieveCupType();
                        this.retrieveProcessed();
                        this.tableDataCompleteOrder = false
                        this.tableDataPendingOrders = false
                        this.tableProcessOrders = true
                    })
                })
            }
        })
    },
    retrieve() {
      this.loadingShow = true;
      this.$axios
        .post(AUTH.url + "retrieveAllCheckouts", {}, AUTH.config)
        .then(response => {
            if (response.data.status) {
                AUTH.deauthenticate();
            }
            this.tableData = []
            this.loadingShow = false;
            Object.keys(response.data.storeOrder).forEach(element => {
                this.tableData.push(response.data.storeOrder[element]);
            });
            this.tableData.reverse()
        });
    },
    retrieveProcessed() {
      this.loadingShow = true;
      this.$axios
        .post(AUTH.url + "retrieveProcessing", {}, AUTH.config)
        .then(response => {
            if (response.data.status) {
                AUTH.deauthenticate();
            }
            this.tableProcess = []
            this.loadingShow = false;
            Object.keys(response.data.storeOrder).forEach(element => {
                this.tableProcess.push(response.data.storeOrder[element]);
            });
            this.tableProcess.reverse()
        });
    },
    retrievePending() {
        this.loadingShow = true;
        this.$axios.post(AUTH.url + "retrievePendingOrders", {}, AUTH.config)
        .then(response => {
            if (response.data.status) {
                AUTH.deauthenticate();
            }
            this.tableDataPending = []
            this.loadingShow = false;
            Object.keys(response.data.order).forEach(element => {
                this.tableDataPending.push(response.data.order[element]);
            });
            this.tableDataPending.reverse()
        });
    },
    retrieveCancelled() {
        this.loadingShow = true;
        this.$axios.post(AUTH.url + "retrieveAllCancelled", {}, AUTH.config)
        .then(response => {
            if (response.data.status) {
                AUTH.deauthenticate();
            }
            this.tableDataCancelled = []
            this.loadingShow = false;
            Object.keys(response.data.order).forEach(element => {
                this.tableDataCancelled.push(response.data.order[element]);
            });
            this.tableDataCancelled.reverse()
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
