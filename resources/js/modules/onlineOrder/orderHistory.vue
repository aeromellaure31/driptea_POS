<template>
<div>
       <center>
            <v-card>
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
                               <button class="btn btn-primary"  data-toggle="modal" data-target="#myModal" @click="viewOrderComplete(item)">View</button>
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
                               <button class="btn btn-primary"  data-toggle="modal" data-target="#myModal" @click="viewOrderPending(items)">View</button>
                           </td>
                       </tr>
                   </tbody>
               <template>
                 
               </template>
             
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
                        <div class="row">
                            <div class="col-md-6" >
                                <center>
                                    <img class="imageSize2" :src="image">
                                    <div ><br>
                                        <h3>Base Price (₱{{basePrice}})</h3>
                                        <h3>{{productName}}</h3>
                                        <p class="productDescription">{{description}}</p>
                                    </div>
                                </center>
                            </div>
                            <div class="col-md-6">
                                <div class="modalDiv">
                                    <div style="float:left" >
                                        <label for="sizdatee" style="font-size: 15px; font-weight: bold" >Date :</label>


                                        <p>{{getDate(orderDate)}}</p>
                                  
                                        <label for="size" style="font-size: 15px; font-weight: bold" >Cup Size:</label>
                                            
                                            <p>{{sizeName}}</p>
                                            
                                           
                                            <label for="cupType" style="font-size: 15px; font-weight: bold">Cup Type :</label>
                                            <p>{{cupType}}</p>

                                          
                                            <label for="sugarLevel" style="font-size: 15px; font-weight: bold">Sugar Level:</label>
                                            <p>{{sugarLevel}}</p>
                                           
                                            <label for="size" style="font-size: 15px; font-weight: bold">Add&nbsp;Ons(Optional):</label><br>
                                            <p>{{addOns}}</p>

                                            <label for="quantity" style="font-size: 15px; font-weight: bold; display: inline;">Quantity:</label>
                                            <p>{{quantity}}</p>

                                            <label v-if="tableDataCompleteOrder" for="delivery" style="font-size: 15px; font-weight: bold; display: inline;">Delivery Fee:</label>
                                            <p v-if="tableDataCompleteOrder">{{deliveryFee}}</p>

                                            <p style="float:right;margin-right:5%;font-size:20px">TOTAL: <b> ₱{{priceShown}}.00</b></p> 



                                    </div>

                                </div>
                            </div>
                        </div>
                       
                        <br>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal" >Okay</button>
                        <!-- <center><button type="submit" class="btn btn-success btnRegister" @click="updateCustomerOrder()">Save Change</button></center>                         -->
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
   margin-left:5%
}
.imageSize2{
    height: 300px;
    width: 300px;
    margin-top: 2%;
}
</style>
<script>
import AUTH from '../../services/auth'
import ROUTER from '../../router'
import config from '../../config.js'
import empty from '../../basic/empty.vue'
import loading from '../../basic/loading.vue';
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
            productName:null,
            description:null,
            image:null,
            cupType:null,
            cupSize:null,
            size:null,
            sugarLevel:null,
            addOns:null,
            priceShown:null,
            quantity:null,
            basePrice:null,
            sizeName:null,
            orderDate:null,
            deliveryFee:null,
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
         getSizePrice(){
            if(this.size === 'highDose'){
                this.sizeName = "High Dose"
                this.basePrice = this.highPrice
            }else if(this.size === 'overDose'){
                this.sizeName = "Over Dose"
                this.basePrice = this.overPrice
            }else if(this.size === 'lowDose'){
                this.sizeName = "Low Dose"
                this.basePrice = this.price

            }
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
            this.tableDataCompleteOrder=true

            })
        },
        retrievePending(){
            let parameter = {
                id: localStorage.getItem('customerId'),
            }
            this.$axios.post(AUTH.url + 'retrievePendingOrders', parameter, AUTH.config).then(response => {
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
      viewOrderPending(item){
            this.size = item[0].size
            this.sugarLevel = item[0].sugarLevel
            this.cupType = item[0].cupType
            this.addOns = item[0].same_order[0].addOns
            this.quantity = item[0].quantity
            this.priceShown = item[0].subTotal
            this.orderDate = item[0].created_at
            // this.cupTypePrice = 0
            this.price = item[0].order_product[0].onlinelowPrice
            this.highPrice = item[0].order_product[0].onlinehighPrice
            this.overPrice = item[0].order_product[0].onlineoverPrice
            this.productName = item[0].order_product[0].productName
            this.image = item[0].order_product[0].image
            this.description = item[0].order_product[0].description
           
            // this.itemId = item.id
            this.getSizePrice()
            //  });
      },
       viewOrderComplete(item){
            this.size = item[0].size
            this.sugarLevel = item[0].sugarLevel
            this.cupType = item[0].cupType
            this.addOns = item[0].same_order[0].addOns
            this.quantity = item[0].quantity
            // this.priceShown = item[0].subTotal
            this.orderDate = item[0].get_checkouts[0].created_at
            // this.cupTypePrice = 0
            this.price = item[0].order_product[0].onlinelowPrice
            this.highPrice = item[0].order_product[0].onlinehighPrice
            this.overPrice = item[0].order_product[0].onlineoverPrice
            this.productName = item[0].order_product[0].productName
            this.image = item[0].order_product[0].image
            this.description = item[0].order_product[0].description
            this.deliveryFee= item[0].get_checkouts[0].deliveryFee
            this.priceShown= item[0].get_checkouts[0].total

            // this.itemId = item.id
            this.getSizePrice()
            //  });
      },
       getDate(date){
      return moment(date).format('MM/DD/YYYY')
    },
 
   }
}
</script>
