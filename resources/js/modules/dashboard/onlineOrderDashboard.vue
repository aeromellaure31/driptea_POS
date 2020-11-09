<template >
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
                    <v-btn icon style="margin-right: 2%;" @click="home()">
                        <v-icon>mdi-home</v-icon>
                    </v-btn>
                    <v-btn icon @click="direct()" style="margin-right: 5%;">
                        <v-icon>mdi-cart</v-icon>
                        <span style="margin-left: -3%;">Cart</span>
                        <span style="background-color: red; color: white; border-radius: 20%; font-size: 10px; margin-left: -10%; margin-top: -20%;">{{count > 0 ? 'New' : ''}}</span>
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
                 <v-list-item-title @click="direct">Order History</v-list-item-title>
               </v-list-item>
             </v-list>
           </v-menu>
                    </div>
                </div>
                <!--/row-->
            </div>
            <!--container-->
        </div>
        <nav class="navbar navbar-expand-sm sticky-top navbar-light " style="background-color:#ff5b04">
                    <div class="container">
                            <ul class="nav nav-tabs justify-content-center">
                                <li class="nav-item"  v-for="(item, index) in data" :key="index">
                                    <a class="nav-link" :href="'#'+item.productCategory" style="color: white;">{{item.productCategory}}</a>
                                </li>
                            
                            </ul>
                    </div>
                </nav>


        <div class="container" fluid>
            <div class="row">
                <div class="col-12 py-4">
                    
                    <div  :id="item.productCategory"  class="categoryStorage" v-for="(item, index) in data" :key="index" >
                            <br>
                        
                            <h3>{{item.productCategory}}</h3>
                            <br>
                            <div v-if="productData !== null && data.length > 0" class="row"   >
                                <div v-if="item.productCategory === items.productCategory" class="col-md-3 imageSize" v-for="(items, ind) in productData" :key="ind">
                                    <center>
                                        <img class="imgItem" data-toggle="modal" data-target="#viewDetails" :src="items.image" @click="showModal(items)">
                                        <br>
                                        <h4>{{items.productName}}</h4>
                                    </center>
                                </div>
                            </div>
                            <div v-else class="secRow">
                                <center>
                                    <img class="noImage" src="@/assets/data.png">
                                    <h2>No Product Yet</h2>
                                </center>   
                            </div>
                        </div>

                </div>
            </div>
            <!--/row-->
        </div>
       
          
        <div class="modal fade" id="viewDetails" role="dialog">
            <div class="modal-dialog modal-lg">
            <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div v-if="success !== null" class="alert alert-success" role="alert">
                          {{success}}
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <center>
                                    <img class="imageSize2" :src="image">
                                    <div><br>
                                        <h3>Base Price (₱{{price}})</h3>
                                        <h3>{{productName}}</h3>
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
                                                <option v-for="(item, index) in cupData" :key="index" :value="item.cupTypeName">{{item.cupTypeName}} (+ ₱{{item.inputCupOnlinePrice}})</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
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
                                <label for="quantity" style="font-size: 15px; font-weight: bold; display: inline;">Quantity:</label>
                                <input v-model="quantity" type="number" min="1" style="width:100px; display: inline;" class="form-control" @change="getQuantity()">
                            </div>
                        </center>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal" @click="cancel">Cancel</button>
                        <center><button type="submit" class="btn btn-success btnRegister" @click="addToCart()">Add to Cart - {{priceShown}}</button></center>                        
                    </div>
                </div>
            </div>
        </div>
        <loading v-if="loadingShow"></loading>
    </div>
</template>
<style scoped>

.categoryStorage{
    margin-top: 3%;
    border-radius: 5px;
    box-shadow: 5px 5px gray;
}
.imageSize{
    height: 250px;
    margin-top: 2%;
}
.imageSize2{
    height: 300px;
    width: 300px;
    margin-top: 2%;
}
.dripteaImage{
    width: 100%;
    height: 300px;
}
/* .imgItem{
    height: 150px;
    width: 100%;
} */
.imgItem{
    height: 170px;
    width: 70%;
}
@media screen and (max-width: 900px) {
    .imageSize2{
        height: 300px;
        width: 200px;
        margin-top: 2%;
    }
}
@media screen and (max-width: 1000px) {
    .imageSize2{
        height: 300px;
        width: 200px;
        margin-top: 2%;
    }
}
@media screen and (max-width: 400px) {
    .imgItem{
        height: 170px;
        width: 50%;
    }
}

</style>
<script>
import AUTH from '../../services/auth'
import imageLogo from "../../../assets/logo.png";
import profilePic from "../../../assets/profile.jpg";

import ROUTER from '../../router'
import $ from 'jquery'
import config from '../../config.js'
import loading from '../../basic/loading.vue';

export default {
    data(){
        return{
            imageLogo:imageLogo,
            config: config,
            data: null,
            productData: null,
            image: null,
            success: null,
            size: 'lowDose',
            cupType: null,
            sugarLevel: null,
            addOns: [],
            quantity: 1,
            productName: null,
            price: null,
            highprice: null,
            overprice: null,
            addOnsData: null,
            cupData: null,
            total: 0,
            description: null,
            addOnsPrice: 0,
            totalAddOns: 0,
            totalPrice: 0,
            cupTypePrice: 0,
            priceShown: 0,
            count: 0,
            loadingShow:false,
            loading:false,
            profilePic:profilePic
        }
    },
    components:{
        loading
    },
    mounted(){
        this.count = 0
        this.retrieveCategory()
        this.retrieveProduct()
        this.retrieveAddOns()
        this.retrieveCupType()

        let pusher = new Pusher(this.config.PUSHER_APP_KEY, {
            cluster: this.config.PUSHER_APP_CLUSTER,
            encrypted: true
        });
        let channel = pusher.subscribe('driptea-channel')
        channel.bind('driptea-data', (data) => {
            if(data.order.status === 'incart'){
                this.count++
            }
        })
    },
    methods: {
        direct(){
            ROUTER.push('/customerCart').catch(()=>{})
        },
        getSizePrice(){
            if(this.size === 'highDose'){
                this.total = this.highprice
            }else if(this.size === 'overDose'){
                this.total = this.overprice
            }else if(this.size === 'lowDose'){
                this.total = this.price
            }
            this.priceShown = this.quantity * (this.total + this.totalAddOns + this.cupTypePrice)
        },
        getCupPrice(){
            this.$axios.post(AUTH.url + 'retrieveOneCupType', {cupType: this.cupType}, AUTH.config).then(res => {
                if(res.data.status){
                    AUTH.deauthenticate()
                }
                this.cupTypePrice = res.data.cupType[0].inputCupOnlinePrice
                this.priceShown = this.quantity * (this.total + this.totalAddOns + this.cupTypePrice)
            })
        },
        getQuantity(){
            this.priceShown = this.quantity * (this.total + this.totalAddOns + this.cupTypePrice)
        },
        retrieveCupType(){
            this.$axios.post(AUTH.url + "retrieveCupType", {}, AUTH.config).then(response => {
                if(response.data.status){
                    AUTH.deauthenticate()
                }
                this.cupData = response.data.cupType
            });
        },
        retrieveAddOns() {
            this.$axios.post(AUTH.url + "retrievingAddOns", {}, AUTH.config).then(response => {
                if(response.data.status){
                    AUTH.deauthenticate()
                }
                this.addOnsData = response.data.addons;
            });
        },
        retrieveCategory(){
            this.loadingShow = true
            this.$axios.post(AUTH.url + 'retrieveCategoryAscending', {}, AUTH.config).then(res => {
                if(res.data.status){
                    AUTH.deauthenticate()
                }
                this.data = res.data.addCategory
                this.loadingShow = false
            })
        },
        redirect(param){
            ROUTER.push('/productOnline/'+param).catch(()=>{})
        },
        retrieveProduct(){
            this.loadingShow = true
            this.$axios.post(AUTH.url + "retrieveAllProductAscending", {}, AUTH.config).then(res => {
                if(res.data.status){
                    AUTH.deauthenticate()
                }
                this.productData = res.data.product
                this.loadingShow = false
            })
        },
        addTotalPrice(item, event){
            this.$axios.post(AUTH.url + "retrieveOneAddOn", {id: item.id}, AUTH.config).then(response => {
                if(response.data.status){
                    AUTH.deauthenticate()
                }
                this.addOnsPrice = response.data.addons.onlineAddOnsPrice
                if(event.target.checked){
                    this.totalAddOns += this.addOnsPrice
                }else{
                    this.totalAddOns -= this.addOnsPrice
                }
                this.priceShown = this.quantity * (this.total + this.totalAddOns + this.cupTypePrice)
            })
        },
        addToCart(){
            if(this.quantity <= 0){
                this.errorMessage3 = 'quantity must be greater than 0!'
            }
            if(this.size === null){
                this.errorMessage = 'cup size is required!'
            }
            if(this.sugarLevel === null){
                this.errorMessage2 = 'sugar level is required!'
            }
            if(this.cupType === null){
                this.errorMessage1 = 'cup type is required!'
            }
            if(this.quantity > 0 && this.size !== null && this.sugarLevel !== null && this.cupType !== null){
                if(localStorage.getItem('customerOnlineId') === null){
                    let param = {
                        customerType: "onlineOrder",
                        customerName: localStorage.getItem('fullName'),
                        customerAddress: localStorage.getItem('address'),
                        customerContactNumber: localStorage.getItem('contactNumber'),
                    };
                    this.$axios.post(AUTH.url + "addCustomer", param, AUTH.config).then(res => {
                        if(res.data.status){
                            AUTH.deauthenticate()
                        }
                        localStorage.setItem('customerOnlineId', res.data.customerDetails.id)
                        let parameter = {
                            customerId: res.data.customerDetails.id,
                            onlineId: localStorage.getItem('customerId'),
                            productId: this.itemId,
                            quantity: this.quantity,
                            customerType: 'online',
                            size: this.size,
                            sugarLevel: this.sugarLevel,
                            choosenPrice: this.total,
                            cupType: this.cupType,
                            status: 'incart',
                            addOns: this.addOns,
                            subTotal: this.priceShown
                        }
                        this.$axios.post(AUTH.url + 'addOrder', parameter, AUTH.config).then(response => {
                            if(response.data.status){
                                AUTH.deauthenticate()
                            }
                            $('#viewDetails').modal('hide')
                        })
                    })
                }else{

                    let parameter = {
                        customerId: localStorage.getItem('customerOnlineId'),
                        onlineId: localStorage.getItem('customerId'),
                        productId: this.itemId,
                        quantity: this.quantity,
                        customerType: 'online',
                        size: this.size,
                        sugarLevel: this.sugarLevel,
                        choosenPrice: this.total,
                        cupType: this.cupType,
                        status: 'incart',
                        addOns: this.addOns,
                        subTotal: this.priceShown
                    }
                    this.$axios.post(AUTH.url + 'addOrder', parameter, AUTH.config).then(response => {
                        if(response.data.status){
                            AUTH.deauthenticate()
                        }
                        $('#viewDetails').modal('hide')
                    })
                }
            }
        },
        cancel(){
            this.addOns = []
        },
        showModal(item){
            this.size = 'lowDose'
            this.sugarLevel = null
            this.cupType = null
            this.addOns = []
            this.quantity = 1
            this.total = 0
            this.totalAddOns = 0
            this.cupTypePrice = 0
            this.price = item.onlinelowPrice
            this.highprice = item.onlinehighPrice
            this.overprice = item.onlineoverPrice
            this.productName = item.productName
            this.image = item.image
            this.description = item.description
            this.itemId = item.id
            this.getSizePrice()
        },
        viewProfile(){
     let id = localStorage.getItem("customerId")
      ROUTER.push('/personalInfo/'+ id).catch(()=>{})
   },
    home() {
     ROUTER.push("/onlineDashboard").catch(() => {});
   },
    }
}
</script>
