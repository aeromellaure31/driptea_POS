<template>
  <div class="container">
     <v-card mb="20px" class="mt-10">
       <v-container fluid>
        <div class="row px-3">
            <div class="col-md-4">
              <center>
                <v-icon color="black darken-2">mdi-account</v-icon><p>Name: {{name}}</p>
              </center>
            </div>
            <div class="col-md-4">
              <center>
                <v-icon color="black darken-2">mdi-google-maps</v-icon><p>Address: {{address}}</p>
              </center>
            </div>
            <div class="col-md-4">
              <center>
                <v-icon color="black darken-2">mdi-contacts</v-icon><p>Contact#: {{contact}}</p>
              </center>
            </div>
        </div>
        <center>
         <div v-if="tableData !== null && tableData.length > 0">
           <v-simple-table :items-per-page="5" class="elevation-3">
             <template v-slot:top>
               <v-toolbar class="mb-2" color="#ff5b04" dark flat>
                 <v-toolbar-title class="col pa-3 py-4 white--text">Orders in Cart</v-toolbar-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <!-- <v-text-field
                   v-model="search"
                   clearable
                   flat
                   solo-inverted
                   prepend-inner-icon="mdi-magnify"
                   class="mt-7"
                   label="Search"
                 ></v-text-field>
                 <v-divider class="mx-4" vertical></v-divider> -->
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
                   data-toggle="modal" data-target="#myModal" @click="showModal(item)"
                  >mdi-pencil</v-icon>
                  <v-icon
                    small
                   @click="deleteOrder(item.id)"
                  >mdi-delete</v-icon> 
                 </td>
               </tr>
             </tbody>
             <template></template>
           </v-simple-table>
         </div><br>
          <div v-if="tableData !== null && tableData.length > 0">
             <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-4">
                  <span style="color:red" v-if="error !== null">{{error}}</span>
                  <v-select class="selectWidth" :items="payments" label="Mode of Payment" dense outlined v-model="payment" @change="modePayment()"></v-select>
                  <v-select class="selectWidth" :items="availability" label="If not availabe" dense outlined v-model="available"></v-select>
                  <p>Subtotal: ₱{{getSubTotal()}}</p>
                  <p>Delivery Fee: ₱{{getDeliveryFee()}}</p>
                  <h5>Total: ₱{{getTotal()}}</h5>
                </div>
                <div class="col-md-4"></div>
             </div>
             <button type="button" class="btn btn-success" @click="orderNow()">Order Now</button>
            
           </div>
           <div v-else>
             <empty :title="'No Data in you Cart'"></empty>
           </div>
            </center>
       </v-container>
     </v-card>
  
   <!-- This is a modal for processing -->
 
  <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div v-if="success !== null" class="alert alert-success" role="alert">
                          {{success}}
                        </div>
                        <div class="row">
                            <div class="col-md-6" >
                                <center>
                                    <img class="imageSize2" :src="image">
                                    <div ><br>
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
                                            <i>
                                                <span
                                                    v-if="errorMessage !== null"
                                                    class="text-danger text-center"
                                                >{{errorMessage}}</span>
                                            </i><br>
                                            <label for="size" style="font-size: 15px; font-weight: bold">Size :</label>
                                            <select class="form-control" v-model="size" @change="getSizePrice()">
                                                <option value="lowDose" selected>Low Dose</option>
                                                <option value="highDose">High Dose</option>
                                                <option value="overDose">Over Dose</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <i>
                                                <span
                                                    v-if="errorMessage1 !== null"
                                                    class="text-danger text-center"
                                                >{{errorMessage1}}</span>
                                            </i><br>
                                            <label for="cupType" style="font-size: 15px; font-weight: bold">Cup Type :</label>
                                            <select class="form-control" v-model="cupType" @change="getCupPrice()">
                                                <option v-for="(item, index) in cupData" :key="index" :value="item.cupTypeName">{{item.cupTypeName}} (+ ₱{{item.inputCupOnlinePrice}})</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <i>
                                                <span
                                                    v-if="errorMessage2 !== null"
                                                    class="text-danger text-center"
                                                >{{errorMessage2}}</span>
                                            </i><br>
                                            <label for="sugarLevel" style="font-size: 15px; font-weight: bold">Sugar Level:</label>
                                            <select class="form-control" v-model="sugarLevel">
                                                <option value="extra">100%(Normal Sugar)</option>
                                                <option value="normal">75%(Three fourth Sugar)</option>
                                                <option value="less">50%(Half Sugar)</option>
                                                <option value="half">25%(One fourth Sugar)</option>
                                                <option value="no">0%(No Sugar)</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="size" style="font-size: 15px; font-weight: bold">Add&nbsp;Ons(Optional):</label><br>
                                            <div class="checkboxStyle">
                                                <div v-for="(item, index) in addOnsData" :key="index">
                                                    <input type="checkbox" :id="item.addons_name" :value="item.addons_name" v-model="addOns" @click="addTotalPrice(item, $event)">
                                                    <label :for="item.addons_name">{{item.addons_name}} (+ ₱{{item.onlineAddOnsPrice}})</label><br>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <center>
                            <div style="text-align: center;">
                              <i>
                                <span
                                    v-if="errorMessage3 !== null"
                                    class="text-danger text-center"
                                >{{errorMessage3}}</span>
                              </i><br>
                              <label for="quantity" style="font-size: 15px; font-weight: bold; display: inline;">Quantity:</label>
                              <input v-model="quantity" type="number" min="1" style="width:100px; display: inline;" class="form-control" @change="getQuantity()">
                            </div>
                        </center>
                        <br>
                           <p style="float:right;margin-right:5%">TOTAL: <b> ₱{{priceShown}}.00</b></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal" >Cancel</button>
                        <center><button type="submit" class="btn btn-success btnRegister" @click="updateCustomerOrder()">Save Change</button></center>                        
                    </div>
                </div>
            </div>
        </div>
            <loading v-if="loadingShow"></loading>
        </div>
</template>
<style scoped>
.selectWidth {
  width: 70%;
}
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
export default {
  data() {
    return {
      size: null,
      cupSize: null,
      cupType: null,
      quantity: null,
      sugarLevel: null,
      priceShown: 0,
      addOnsData: [],
      cupData: [],
      price: null,
      image: null,
      basePrice: 0,
      description: null,
      addOns: [],
      success: null,
      productNameOrder: null,
      search: null,
      tableData: null,
      config: config,
      count: 0,
      subTotal: 0,
      total: 0,
      deliveryFee: 0,
      processModal: false,
      loadingShow: false,
      payment: "Cash on Delivery",
      available: 'Cancel Order',
      error: "",
      idForProduct: null,
      tableDataForEdit: [],
      itemId: null,
      payments: ["Cash on Delivery", "G-cash"],
      availability: ["Call me", "Cancel Order"],
      totalAddOns: 0,
      errorMessage: null,
      errorMessage1: null,
      errorMessage2: null,
      errorMessage3: null,
      name: null,
      address: null,
      contact: null
    };
  },
  components: {
    empty,
    loading
  },
  mounted() {
    this.count = 0;
    this.retrieveProduct();
    this.retrieveCupType();
    this.retrieveAddOns();
    this.getDetails();
  },
  methods: {
    getDetails(){
      this.loadingShow = true;
      let params = {
        uname: localStorage.getItem("customerId")
      };
      this.$axios
        .post(AUTH.url + "getUserData", params, AUTH.config)
        .then(res => {
          this.loadingShow = false;
          if (res.data.status) {
            AUTH.deauthenticate();
          }
          this.name = res.data.userdata[0].fname + ' ' + res.data.userdata[0].lname
          this.contact = res.data.userdata[0].CN
          this.address = res.data.userdata[0].address
        });
    },
    modePayment(){
      if(this.payment === 'G-cash'){
        // swal("Oops!", "G-cash not available this time", "warning");
        swal({
          title: "Oops!",
          text: "G-cash not available this time",
          icon: "warning",
          dangerMode: true
        }).then(willDelete => {
          this.payment = 'Cash on Delivery'
        })
      }
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
    home() {
      ROUTER.push("/onlineDashboard").catch(() => {});
    },
    retrieveProduct() {
      this.loadingShow = true;
      let params = {
        id: localStorage.getItem("customerId")
      };
      this.$axios
        .post(AUTH.url + "retrieveCustomerOrder", params, AUTH.config)
        .then(res => {
          this.loadingShow = false;
          if (res.data.status) {
            AUTH.deauthenticate();
          }
          this.tableData = res.data.order;
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
    deleteOrder(prodId) {
      swal({
        title: "Are you sure you want to remove in you Cart?",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          this.loadingShow = true;
          this.$axios
            .post(AUTH.url + "deleteOrder", { id: prodId }, AUTH.config)
            .then(res => {
              this.loadingShow = false
              if (res.data.status) {
                AUTH.deauthenticate();
              }
            });
          this.retrieveProduct();
          swal("Your order is succssfully deleted!", {
            icon: "success"
          });
        } else {
          swal("Your order remains to cart");
        }
      });
    },
    updateCustomerOrder() {
      if(this.quantity <= 0){
          this.errorMessage3 = 'quantity must be greater than 0!'
      }else{
          this.errorMessage3 = null
      }
      if(this.size === null){
          this.errorMessage = 'cup size is required!'
      }else{
          this.errorMessage = null
      }
      if(this.sugarLevel === null){
          this.errorMessage2 = 'sugar level is required!'
      }else{
          this.errorMessage2 = null
      }
      if(this.cupType === null){
          this.errorMessage1 = 'cup type is required!'
      }else{
          this.errorMessage1 = null
      }
      if(this.quantity > 0 && this.size !== null && this.sugarLevel !== null && this.cupType !== null){
        this.loadingShow = true;
        let param = {
          id: this.itemId,
          size: this.size,
          cupType: this.cupType,
          addOns: this.addOns,
          quantity: this.quantity,
          sugarLevel: this.sugarLevel,
          subTotal: this.priceShown,
          choosenPrice: this.basePrice
        };
        this.$axios
          .post(AUTH.url + "updateCustomerOrder", param, AUTH.config)
          .then(res => {
            this.loadingShow = false
            if (res.data.status) {
              AUTH.deauthenticate();
            }
            this.retrieveProduct();
            $("#myModal").modal("hide");
            swal("Order Updated!", "Successfully", "success");
          });
      }
    },
    getSizePrice() {
      if (this.size === "highDose") {
        this.basePrice = this.highprice;
      } else if (this.size === "overDose") {
        this.basePrice = this.overprice;
      } else if (this.size === "lowDose") {
        this.basePrice = this.price;
      }
      this.priceShown = parseInt(this.quantity) * (parseInt(this.basePrice) + parseInt(this.totalAddOns) + parseInt(this.cupTypePrice))
    },
    getCupPrice() {
      this.$axios
        .post(
          AUTH.url + "retrieveOneCupType",
          { cupType: this.cupType },
          AUTH.config
        )
        .then(res => {
          if (res.data.status) {
            AUTH.deauthenticate();
          }
          this.cupTypePrice = parseInt(res.data.cupType[0].inputCupOnlinePrice)
          this.priceShown = parseInt(this.quantity) * (parseInt(this.basePrice) + parseInt(this.totalAddOns) + parseInt(this.cupTypePrice))
        });
    },
    getQuantity() {
      this.priceShown = parseInt(this.quantity) * (parseInt(this.basePrice) + parseInt(this.totalAddOns) + parseInt(this.cupTypePrice))
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
    retrieveAddOns() {
      this.loadingShow = true;
      this.$axios
        .post(AUTH.url + "retrievingAddOns", {}, AUTH.config)
        .then(response => {
          this.loadingShow = false
          if (response.data.status) {
            AUTH.deauthenticate();
          }
          this.addOnsData = response.data.addons;
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
          this.data = res.data.addCategory;
          this.loadingShow = false;
        });
    },
    redirect(param) {
      ROUTER.push("/productOnline/" + param).catch(() => {});
    },
    addTotalPrice(item, event) {
      this.$axios
        .post(AUTH.url + "retrieveOneAddOn", { id: item.id }, AUTH.config)
        .then(response => {
          if (response.data.status) {
            AUTH.deauthenticate();
          }
          this.addOnsPrice = response.data.addons.onlineAddOnsPrice;
          if (event.target.checked) {
            this.totalAddOns += parseInt(this.addOnsPrice)
          } else {
            this.totalAddOns -= parseInt(this.addOnsPrice)
          }
          this.priceShown = parseInt(this.quantity) * (parseInt(this.basePrice) + parseInt(this.totalAddOns) + parseInt(this.cupTypePrice))
        });
    },
    showModal(item) {
      this.totalAddOns = 0
      this.size = item.size;
      this.sugarLevel = item.sugarLevel;
      this.cupType = item.cupType;
      this.addOns = [];
      item.same_order.forEach(el => {
        this.addOns.push(el.addOns);
        this.addOnsData.forEach(e => {
            if(el.addOns === e.addons_name){
                this.totalAddOns += parseInt(e.onlineAddOnsPrice)
            }
        })
      });
      this.cupType = item.cupType
      this.quantity = item.quantity;
      this.total = 0;
      this.cupTypePrice = 0
      this.cupData.forEach(el => {
          if(el.cupTypeName === item.cupType){
              this.cupTypePrice = parseInt(el.inputCupOnlinePrice)
          }
      })
      this.price = parseInt(item.order_product[0].onlinelowPrice);
      this.highprice = parseInt(item.order_product[0].onlinehighPrice);
      this.overprice = parseInt(item.order_product[0].onlineoverPrice);
      this.productNameOrder = item.order_product[0].productName;
      this.image = item.order_product[0].image;
      this.description = item.description;
      this.itemId = item.id;
      this.getSizePrice();
    },
    orderNow() {
      if (this.payment !== null) {
        this.loadingShow = true
        let params = {
          data: this.tableData,
          ifNotAvailable: this.available,
          modeOfPayment: this.payment,
          status: "pendingCustomer"
        };
        this.$axios
          .post(AUTH.url + "onlineUpdate", params, AUTH.config)
          .then(res => {
            this.loadingShow = false
            if (res.data.status) {
              AUTH.deauthenticate();
            }
            swal({
              text: "Order Successfully!",
              icon: "success",
            }).then(el => {
              this.retrieveProduct();
              localStorage.removeItem("customerOnlineId");
            })
          });
      } else {
        this.error = "This filed is required";
      }
    },
    getSubTotal() {
      let total = 0;
      this.tableData.forEach(element => {
        total += parseInt(element.subTotal);
      });
      this.subTotal = total;
      return parseInt(total)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
    getTotal() {
      let total = 0;
      let subTotal = parseInt(this.subTotal);
      total = subTotal + this.deliveryFee;
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
    }
  }
};
</script>
