<template>
<div>
        <div class="header" style="background-color:#ff5b04">
           <div class="container" >
               <div class="row">
                   <div class="col-6">
                       <v-avatar>
                        <v-img  :src="imageLogo"></v-img>
                        </v-avatar>
                       DRIPTEA
                   </div>
                   <div class="col-6 text-right">
                   <v-btn icon style="margin-right: 2%;"  @click="home()">
                        <v-icon >mdi-home</v-icon>
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
           </div>
        </div>
       <center>
        
     
          
            <div v-if="tableDataCompleteOrder">
            <v-simple-table
 
               :items-per-page="5"
               class="elevation-3"
               >
               <template v-slot:top>
                   <v-toolbar class="mb-2" color="#ff5b04" dark flat>
                   <v-toolbar-title class="col pa-3 py-4 white--text">Complete Orders</v-toolbar-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                    <v-btn
                       color="primary"
                       type="button"
                       class="btn btn-primary btnModal"
                       dark
                       @click="tableDataPendingOrders = true,tableDataCompleteOrder=false"
                   >+ Pending Orders</v-btn>
                 
                   </v-toolbar>
               </template>
              
                 <thead >
                   <tr v-if="tableData !== null && tableData.length > 0">
                       <th style="width: 30%;">Date</th>
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
                               <button class="btn btn-primary">View</button>
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
               <template v-slot:top>
                   <v-toolbar class="mb-2" color="#ff5b04" dark flat>
                   <v-toolbar-title class="col pa-3 py-4 white--text">Pending Orders</v-toolbar-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                    <v-btn
                       color="primary"
                       type="button"
                       class="btn btn-primary btnModal"
                       dark
                       @click="tableDataCompleteOrder = true, tableDataPendingOrders = false"
                   >+ Completed Orders</v-btn>
                 
                   </v-toolbar>
               </template>
                 <thead>
                   <tr v-if="tableDataPending !== null && tableDataPending.length > 0">
                       <th scope="2">Date</th>
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
                           <td scope="2">{{getDate(items[0])}}</td>
                           <td>{{items[0].id}}</td>
                           <td>{{getProduct(items)}}</td>
 
                           <!-- <td>{{items.order_product[0].productName}}</td> -->
                           <td>₱ {{getTotal(items)}}</td>
                           <td>Pending Order</td>
                           <td>
                               <button class="btn btn-primary">View</button>
                           </td>
                       </tr>
                   </tbody>
               <template>
                 
               </template>
             
               </v-simple-table>
               </div>
             
          
       </center>
 
 <loading v-if="loadingShow"></loading>
 
   </div>
 
 
</template>
<style scoped>
.table {
   width: 70%;
   margin-left:5%
}
</style>
<script>
import AUTH from '../../services/auth'
import ROUTER from '../../router'
import config from '../../config.js'
import empty from '../../basic/empty.vue'
import loading from '../../basic/loading.vue';
import profilePic from '../../../assets/profile.jpg'
import imageLogo from '../../../assets/logo.png'

import moment from 'moment'
export default {
   data(){
       return{
           tableData:[],
           tableDataCompleteOrder:true,
           tableDataPendingOrders:false,
           config: config,
           loadingShow:false,
           tableDataPending:[],
           search:null,
           profilePic:profilePic,
           imageLogo:imageLogo
       }
   },
   mounted(){
       this.retrievePending()
       this.retrieve()
   },
   components: {
       empty,
       loading
   },
   methods: {
       getDate(item){
           return moment(item.updated_at).format('MM/DD/YYYY')
       },
       getTotal(item){
           let total = 0
           let index = item.length
           item.forEach(el => {
               if(item.indexOf(el) >= (index - 1)){
                   total += el.subTotal
               }else{
                   total += el.subTotal
               }
           })
           return total
       },
        getProduct(item){
           let product = ""
           let index = item.length
           item.forEach(el => {
               if(item.indexOf(el) >= (index - 1)){
                   product += el.order_product[0].productName
               }else{
                   product += el.order_product[0].productName + ", "
               }
           })
           return product
       },
      
       retrieve(){
           this.loadingShow = true
           let parameter = {
               id: localStorage.getItem('customerId'),
           }
           this.$axios.post(AUTH.url + 'retrieveOnlineCheckouts', parameter, AUTH.config).then(response => {
               if(response.data.status){
                   AUTH.deauthenticate()
               }
                   this.loadingShow = false
               Object.keys(response.data.storeOrder).forEach(element => {
                   this.tableData.push(response.data.storeOrder[element])
               });
           })
       },
       retrievePending(){
           let parameter = {
               id: localStorage.getItem('customerId'),
           }
           this.$axios.post(AUTH.url + 'retrieveCustomerPendingOrders', parameter, AUTH.config).then(response => {
               if(response.data.status){
                   AUTH.deauthenticate()
               }
               this.loadingShow = false
           // this.tableDataPending = response.data.order
 
               Object.keys(response.data.order).forEach(element => {
                   this.tableDataPending.push(response.data.order[element])
               });
           })
       },
       getAddOns(item){
           let storeAddOns = ""
           let index = item.length
           item.forEach(el => {
               if(item.indexOf(el) >= (index - 1)){
                   storeAddOns += el.addOns
               }else{
                   storeAddOns += el.addOns + ", "
               }
           })
           return storeAddOns
       },
       home(){
           ROUTER.push('/onlineDashboard').catch(()=>{})
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
}
</script>
