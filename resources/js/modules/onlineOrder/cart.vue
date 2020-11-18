 
<template>
  <div>
    <div class="header" style="background-color:#ff5b04">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <v-avatar>
              <v-img :src="imageLogo"></v-img>
            </v-avatar>DRIPTEA
          </div>
          <div class="col-6 text-right">
            <v-btn icon style="margin-right: 2%;" @click="home()">
              <v-icon>mdi-home</v-icon>
            </v-btn>
            <v-btn icon @click="direct()" style="margin-right: 5%;">
              <v-icon>mdi-cart</v-icon>
              <span style="margin-left: -3%;">Cart</span>
            </v-btn>
            <v-menu bottom left>
              <template v-slot:activator="{ on, attrs }">
                <v-avatar>
                  <v-img :src="profilePic" v-bind="attrs" v-on="on"></v-img>
                </v-avatar>
              </template>
              <v-list>
                <v-list-item>
                  <v-list-item-title @click="viewProfile">Profile</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title @click="orderHistory">Order History</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
        <!--/row-->
      </div>
      <v-card mb="20px">
        <v-container fluid>
          <center>
            <div v-if="tableData !== null && tableData.length > 0">
              <v-simple-table :items-per-page="5" class="elevation-3">
                <template v-slot:top>
                  <v-toolbar class="mb-2" color="#ff5b04" dark flat>
                    <v-toolbar-title class="col pa-3 py-4 white--text">Orders in Cart</v-toolbar-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <v-text-field
                      v-model="search"
                      clearable
                      flat
                      solo-inverted
                      prepend-inner-icon="mdi-magnify"
                      class="mt-7"
                      label="Search"
                    ></v-text-field>
                    <v-divider class="mx-4" vertical></v-divider>
                  </v-toolbar>
                </template>
                <thead>
                  <tr>
                    <th style="width: 30%;">Product Name</th>
                    <th>Add&nbsp;ons</th>
                    <th>Cup Type</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in tableData" :key="index">
                    <td>{{item.order_product ? item.order_product[0].productName : ''}}</td>
                    <td>{{item.same_order ? getAddOns(item.same_order) : ''}}</td>
                    <td>{{getCup(item.cupType)}}</td>
                    <td>{{item.choosenPrice}}</td>
                    <td>{{item.quantity}}</td>
                    <td>{{item.subTotal}}</td>
                    <td>
                      <v-icon
                        small
                        data-toggle="modal"
                        data-target="#myModal"
                        @click="showModal(item)"
                      >mdi-pencil</v-icon>
                      <v-icon small @click="deleteOrder(item.id)">mdi-delete</v-icon>
                    </td>
                  </tr>
                </tbody>
                <template></template>
              </v-simple-table>
            </div>
            <div v-if="tableData !== null && tableData.length > 0">
              <table class="table table-responsive" id="myTable"></table>
              <div class="row">
                <v-col cols="12" md="4">
                  <span style="color:red" v-if="error !== null">{{error}}</span>

                  <v-select
                    :items="payments"
                    label="Mode of Payment"
                    dense
                    outlined
                    v-model="payment"
                  ></v-select>
                  <v-select
                    :items="availability"
                    label="If not availabe"
                    dense
                    outlined
                    v-model="available"
                  ></v-select>
                </v-col>

                <v-col cols="12" md="8">
                  <p>Subtotal: ₱{{getSubTotal()}}</p>
                  <p>Delivery Fee: ₱{{getDeliveryFee()}}</p>
                  <h5>Total: ₱{{getTotal()}}</h5>
                </v-col>
              </div>
              <button type="button" class="btn btn-success" @click="orderNow()">Order Now</button>
            </div>
            <div v-else>
              <empty :title="'No Data in you Cart'"></empty>
            </div>
          </center>
        </v-container>
      </v-card>
    </div>

    <!-- This is a modal for processing -->

    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <div v-if="success !== null" class="alert alert-success" role="alert">{{success}}</div>
            <div class="row">
              <div class="col-md-6">
                <center>
                  <img class="imageSize2" :src="image">
                  <div>
                    <br>
                    <h3>Base Price (₱{{basePrice}}.00)</h3>
                    <h3>{{productNameOrder}}</h3>
                    <p class="productDescription">{{description}}</p>
                  </div>
                </center>
              </div>
              <div class="col-md-6">
                <div class="modalDiv">
                  <form>
                    <div class="form-group">
                      <label for="size" style="font-size: 15px; font-weight: bold">Size :</label>
                      <select class="form-control" v-model="size" @change="getSizePrice()">
                        <option value="lowDose" selected>Low Dose</option>
                        <option value="highDose">High Dose</option>
                        <option value="overDose">Over Dose</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="cupType" style="font-size: 15px; font-weight: bold">Cup Type :</label>
                      <select class="form-control" v-model="cupType" @change="getCupPrice()">
                        <option
                          v-for="(item, index) in cupData"
                          :key="index"
                          :value="item.cupTypeName"
                        >{{item.cupTypeName}} (+ ₱{{item.inputCupOnlinePrice}})</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label
                        for="sugarLevel"
                        style="font-size: 15px; font-weight: bold"
                      >Sugar Level:</label>
                      <select class="form-control" v-model="sugarLevel">
                        <option value="extra">100%(Normal Sugar)</option>
                        <option value="normal">75%(Three fourth Sugar)</option>
                        <option value="less">50%(Half Sugar)</option>
                        <option value="half">25%(One fourth Sugar)</option>
                        <option value="no">0%(No Sugar)</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label
                        for="size"
                        style="font-size: 15px; font-weight: bold"
                      >Add&nbsp;Ons(Optional):</label>
                      <br>
                      <div class="checkboxStyle">
                        <div v-for="(item, index) in addOnsData" :key="index">
                          <input
                            type="checkbox"
                            :id="item.addons_name"
                            :value="item.addons_name"
                            v-model="addOns"
                            @click="addTotalPrice(item, $event)"
                          >
                          <label
                            :for="item.addons_name"
                          >{{item.addons_name}} (+ ₱{{item.onlineAddOnsPrice}})</label>
                          <br>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <center>
              <div style="text-align: center;">
                <label
                  for="quantity"
                  style="font-size: 15px; font-weight: bold; display: inline;"
                >Quantity:</label>
                <input
                  v-model="quantity"
                  type="number"
                  min="1"
                  style="width:100px; display: inline;"
                  class="form-control"
                  @change="getQuantity()"
                >
              </div>
            </center>
            <br>
            <p style="float:right;margin-right:5%">
              TOTAL:
              <b>₱{{priceShown}}.00</b>
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
            <center>
              <button
                type="submit"
                class="btn btn-success btnRegister"
                @click="updateCustomerOrder()"
              >Save Change</button>
            </center>
          </div>
        </div>
      </div>
    </div>
    <loading v-if="loadingShow"></loading>
  </div>
</template>
<style scoped>
.table {
  width: 170%;
}
.imageSize2 {
  height: 300px;
  width: 300px;
  margin-top: 2%;
}
</style>
<script>
import $ from "jquery";
import swal from "sweetalert";
import loading from "../../basic/loading.vue";
import AUTH from "../../services/auth";
import ROUTER from "../../router";
import config from "../../config.js";
import empty from "../../basic/empty.vue";
import imageLogo from "../../../assets/logo.png";
import profilePic from "../../../assets/profile.jpg";

export default {
  data() {
    return {
      search: null,
      tableData: null,
      config: config,
      count: 0,
      subTotal: 0,
      total: 0,
      deliveryFee: 0,
      processModal: false,
      loadingShow: false,
      payment: null,
      available: null,
      error: "",
      profilePic: profilePic,
      imageLogo: imageLogo,

      payments: ["Cash on Delivery", "G-cash"],
      availability: ["Call me", "Cancel Order"]
    };
  },
  components: {
    empty,
    loading
  },
  mounted() {
    this.count = 0;
    this.retrieveProduct();
    let pusher = new Pusher(this.config.PUSHER_APP_KEY, {
      cluster: this.config.PUSHER_APP_CLUSTER,
      encrypted: true
    });

    //Subscribe to the channel we specified in our Adonis Application
    let channel = pusher.subscribe("driptea-channel");

    channel.bind("driptea-data", data => {
      this.count++;
      this.retrieveProduct();
    });
  },
  methods: {
    home() {
      ROUTER.push("/onlineDashboard").catch(() => {});
    },
    retrieveProduct() {
      this.loadingShow = true;
      let params = {
        id: localStorage.getItem("customerOnlineId")
      };
      this.$axios
        .post(AUTH.url + "retrieveCustomerOrder", params, AUTH.config)
        .then(res => {
          if (res.data.status) {
            AUTH.deauthenticate();
          }
          this.tableData = res.data.order;
          this.loadingShow = false;
        });
    },
    getAddOns(item) {
      let storeAddOns = "";
      let index = item.length;
      item.forEach(el => {
        if (item.indexOf(el) >= index - 1) {
          storeAddOns += el.addOns;
        } else {
          storeAddOns += el.addOns + ", ";
        }
      });
      return storeAddOns;
    },
    deleteOrder(prodId) {
      this.$axios
        .post(AUTH.url + "deleteOrder", { id: prodId }, AUTH.config)
        .then(res => {
          if (res.data.status) {
            AUTH.deauthenticate();
          }
          swal({
            title: "Deleted!",
            text: "Your order is successfully deleted",
            icon: "success"
          });
          this.retrieveProduct();
        });
    },
    orderNow() {
      if (this.payment !== null) {
        this.loadingShow = true;

        let params = {
          id: localStorage.getItem("customerOnlineId"),
          status: "pendingCustomer"
        };
        this.$axios
          .post(AUTH.url + "updateStatus", params, AUTH.config)
          .then(res => {
            if (res.data.status) {
              AUTH.deauthenticate();
            }
            this.retrieveProduct();
            localStorage.removeItem("customerOnlineId");
            this.loadingShow = false;

            this.processModal = true;
          });
      } else {
        this.error = "This filed is required";
      }
    },
    getSubTotal() {
      let total = 0;
      this.tableData.forEach(element => {
        total += element.subTotal;
      });
      this.subTotal = total;
      return parseInt(total)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
    getTotal() {
      let total = 0;
      let subTotal = this.subTotal;
      total = subTotal + 100;
      this.total = total;
      return parseInt(total)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
    getDeliveryFee() {
      let deliveryFee = 50;
      this.deliveryFee = deliveryFee;
      return parseInt(deliveryFee)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
    direct() {
      ROUTER.push("/customerCart").catch(() => {});
    },
    viewProfile() {
      let id = localStorage.getItem("customerId");
      ROUTER.push("/personalInfo/" + id).catch(() => {});
    },
    orderHistory() {
      ROUTER.push("/orderHistory").catch(() => {});
    }
  }
};
</script>
