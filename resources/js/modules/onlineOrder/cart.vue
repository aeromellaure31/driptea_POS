 
<template>
 <div>
   <div class="header" style="background-color:#ff5b04">
     <div class="container">
       <div class="row">
         <div class="col-6">
           <v-avatar>
                        <v-img  :src="imageLogo"></v-img>
                        </v-avatar>DRIPTEA</div>
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
               <v-img :src="profilePic" v-bind="attrs" v-on="on">
               </v-img>
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
                 <th style="width: 15px;">❌</th>
               </tr>
             </thead>
             <tbody>
               <tr v-for="(item, index) in tableData" :key="index">
                 <td>{{item.order_product ? item.order_product[0].productName : ''}}</td>
                 <td>{{item.same_order ? getAddOns(item.same_order) : ''}}</td>
                 <td>{{item.cupType ? item.cupType : ''}}</td>
                 <td>{{item.choosenPrice}}</td>
                 <td>{{item.quantity}}</td>
                 <td>{{item.subTotal}}</td>
                 <td>
                   <button
                     style="font-size: 10px"
                     type="button"
                     aria-expanded="false"
                     @click="deleteOrder(item.id)"
                   >❌</button>
                 </td>
               </tr>
             </tbody>
             <template></template>
           </v-simple-table>
         </div>
          <div v-if="tableData !== null && tableData.length > 0">
             <table class="table table-responsive" id="myTable"></table>
             <div class="row">
                <v-col
                  cols="12"
                  md="4"
                >
                <span style="color:red" v-if="error !== null">{{error}}</span>
               
                  <v-select :items="payments" label="Mode of Payment" dense outlined v-model="payment"></v-select>
                  <v-select :items="availability" label="If not availabe" dense outlined v-model="available"></v-select>

                </v-col>
               
            <v-col  cols="12"
                  md="8">
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
 
   <template>
     
     <div class="text-center">
       <v-dialog v-model="processModal" width="500">
         <v-card-title class="headline grey lighten-2">Order</v-card-title>
         <v-row class="fill-height" align-content="center" justify="center">
           <v-col class="subtitle-1 text-center" cols="12">Processing your order .......</v-col>
           <v-col cols="6">
             <v-progress-linear color="deep-purple accent-4" indeterminate rounded height="6"></v-progress-linear>
           </v-col>
         </v-row>
         <v-divider></v-divider>
 
         <v-card-actions>
           <v-spacer></v-spacer>
           <v-btn color="primary" text @click="processModal = false">Okay</v-btn>
         </v-card-actions>
       </v-dialog>
     </div>
   </template>




 <loading v-if="loadingShow"></loading>
 
 
 
          </div>
</template>
<style scoped>
.table {
 width: 70%;
}
</style>
<script>
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
       search:null,
     tableData: null,
     config: config,
     count: 0,
     subTotal: 0,
     total: 0,
     deliveryFee: 0,
     processModal: false,
     loadingShow: false,
     payment:null,
     available:null,
     error:'',
     profilePic:profilePic,
     imageLogo:imageLogo,
 
     payments: [ "Cash on Delivery", "G-cash"],
     availability:["Call me","Cancel Order"]
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
     this.$axios.post(AUTH.url + "retrieveCustomerOrder", params, AUTH.config).then(res => {
       if(res.data.status){
           AUTH.deauthenticate()
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
  
     this.$axios.post(AUTH.url + "deleteOrder", { id: prodId }, AUTH.config).then(res => {
       if(res.data.status){
           AUTH.deauthenticate()
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
     if(this.payment !== null){
       this.loadingShow = true;
 
     let params = {
       id: localStorage.getItem("customerOnlineId"),
       status: "pendingCustomer"
     };
     this.$axios.post(AUTH.url + "updateStatus", params, AUTH.config).then(res => {
       if(res.data.status){
           AUTH.deauthenticate()
       }
       this.retrieveProduct();
       localStorage.removeItem("customerOnlineId");
       this.loadingShow = false;
 
       this.processModal = true;
     });

     }
     else{
       this.error = "This filed is required"
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
     let deliveryFee = 100;
     this.deliveryFee = deliveryFee;
     return parseInt(deliveryFee)
       .toFixed(2)
       .replace(/\d(?=(\d{3})+\.)/g, "$&,");
   },
   direct() {
     ROUTER.push("/customerCart").catch(() => {});
   },
   viewProfile(){
     let id = localStorage.getItem("customerId")
      ROUTER.push('/personalInfo/'+ id).catch(()=>{})
   },
   orderHistory(){
      ROUTER.push('/orderHistory').catch(()=>{})
   }
   
 }
};
</script>
