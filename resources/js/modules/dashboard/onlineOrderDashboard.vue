<template >
    <div>   
        <template >
            <v-tabs
            align-with-title
            >
            <v-tabs-slider color="yellow"></v-tabs-slider>
                <v-tab v-for="(item, index) in data" :key="index">
                    <a class="nav-link" :href="'#'+item.productCategory" style="color: black;">{{item.productCategory}}</a>
                </v-tab>
            </v-tabs>
        </template>
        <div class="sudlanan" fluid>
            <center>
                <h1 style="margin-top: -4%; margin-bottom: -5%;">Products</h1>
            </center>
            <div class="row">
                <div class="col-12 py-4">
                    <div :id="item.productCategory"  class="categoryStorage" v-for="(item, index) in data" :key="index" >
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
                                        <h3>Price (₱ {{total}}.00)</h3>
                                        <h3>{{productName}}</h3>
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
                                                <option v-if="lowdoseQuantity > 5" value="lowDose" selected>Low Dose ({{lowdoseQuantity}} available quantity)</option>
                                                <option v-if="highdoseQuantity > 5" value="highDose">High Dose ({{highdoseQuantity}} available quantity)</option>
                                                <option v-if="overdoseQuantity > 5" value="overDose">Over Dose ({{overdoseQuantity}} available quantity)</option>
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
                        <button type="button" id="cancel" class="btn btn-danger" data-dismiss="modal" @click="cancel">Cancel</button>
                        <center><button type="submit" id="addCart" class="btn btn-success btnRegister" @click="addToCart()">Add to Cart</button></center>                        
                    </div>
                </div>
            </div>
        </div>
        <loading v-if="loadingShow"></loading>
    </div>
</template>
<style scoped>
span{
    font-size: 13px;
}
.sudlanan{
    padding: 5%;
}
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
.fixed-tabs-bar .v-tabs__bar {
    top: 4rem;
  z-index: 2;
    position: -webkit-sticky;
    position: sticky;}
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
import swal from "sweetalert";
import AUTH from '../../services/auth'
import ROUTER from '../../router'
import $ from 'jquery'
import config from '../../config.js'
import loading from '../../basic/loading.vue';
export default {
    data(){
        return{
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
            price: 0,
            highprice: 0,
            overprice: 0,
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
            errorMessage: null,
            errorMessage1: null,
            errorMessage2: null,
            errorMessage3: null,
            lowdoseQuantity: 0,
            highdoseQuantity: 0,
            overdoseQuantity: 0,
            buySize: 0
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
        this.retrieveCupsQuantity()
    },
    methods: {
        retrieveCupsQuantity(){
            this.$axios.post(AUTH.url + 'retrieveCupSize', {}, AUTH.config).then(res => {
                if(res.data.status){
                    AUTH.deauthenticate()
                }
                this.lowdoseQuantity = res.data.quantityCupsInDB[0].remainingLowDose
                this.highdoseQuantity = res.data.quantityCupsInDB[0].remainingHighDose
                this.overdoseQuantity = res.data.quantityCupsInDB[0].remainingOverDose
            })
        },
        direct(){
            ROUTER.push('/customerCart').catch(()=>{})
        },
        getSizePrice(){
            if(this.size === 'highDose'){
                this.total = this.highprice
                this.buySize = this.highdoseQuantity
            }else if(this.size === 'overDose'){
                this.total = this.overprice
                this.buySize = this.overdoseQuantity
            }else if(this.size === 'lowDose'){
                this.total = this.price
                this.buySize = this.lowdoseQuantity
            }
            this.priceShown = parseInt(this.quantity) * (parseInt(this.total) + parseInt(this.totalAddOns) + parseInt(this.cupTypePrice))
        },
        getCupPrice(){
            this.$axios.post(AUTH.url + 'retrieveOneCupType', {cupType: this.cupType}, AUTH.config).then(res => {
                if(res.data.status){
                    AUTH.deauthenticate()
                }
                this.cupTypePrice = parseInt(res.data.cupType[0].inputCupOnlinePrice)
                this.priceShown = parseInt(this.quantity) * (parseInt(this.total) + parseInt(this.totalAddOns) + parseInt(this.cupTypePrice))
            })
        },
        getQuantity(){
            this.priceShown = parseInt(this.quantity) * (parseInt(this.total) + parseInt(this.totalAddOns) + parseInt(this.cupTypePrice))
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
                this.addOnsPrice = parseInt(response.data.addons.onlineAddOnsPrice)
                if(event.target.checked){
                    this.totalAddOns += this.addOnsPrice
                }else{
                    this.totalAddOns -= this.addOnsPrice
                }
                this.priceShown = parseInt(this.quantity) * (parseInt(this.total) + parseInt(this.totalAddOns) + parseInt(this.cupTypePrice))
            })
        },
        addToCart(){
            $('#addCart').prop('disabled', true)
            $('#cancel').prop('disabled', true)
            if(this.size === 'lowDose' && this.lowdoseQuantity <= 5){
                this.size = null
            }
            if(this.quantity <= 0){
                this.errorMessage3 = 'quantity must be greater than 0'
                $('#addCart').prop('disabled', false)
                $('#cancel').prop('disabled', false)
            }else if(this.quantity > this.buySize){
                this.errorMessage3 = 'quantity is too much'
                $('#addCart').prop('disabled', false)
                $('#cancel').prop('disabled', false)
            }else{
                this.errorMessage3 = null
            }
            if(this.size === null){
                this.errorMessage = 'cup size is required'
                $('#addCart').prop('disabled', false)
                $('#cancel').prop('disabled', false)
            }else{
                this.errorMessage = null
            }
            if(this.sugarLevel === null){
                this.errorMessage2 = 'sugar level is required'
                $('#addCart').prop('disabled', false)
                $('#cancel').prop('disabled', false)
            }else{
                this.errorMessage2 = null
            }
            if(this.cupType === null){
                this.errorMessage1 = 'cup type is required'
                $('#addCart').prop('disabled', false)
                $('#cancel').prop('disabled', false)
            }else{
                this.errorMessage1 = null
            }
            if(this.errorMessage === null && this.errorMessage1 === null &&  this.errorMessage2 === null && 
            this.errorMessage3 === null && this.quantity > 0 && this.size !== null &&
            this.sugarLevel !== null && this.cupType !== null){
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
                            $('#addCart').prop('disabled', false)
                            $('#cancel').prop('disabled', false)
                            swal({
                                title: "Order successfully added to cart",
                                icon: "success"
                            })
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
                        $('#addCart').prop('disabled', false)
                        $('#cancel').prop('disabled', false)
                        swal({
                            title: "Order successfully added to cart",
                            icon: "success"
                        })
                    })
                }
            }
        },
        cancel(){
            this.addOns = []
        },
        showModal(item){
            this.errorMessage = null
            this.errorMessage1 = null
            this.errorMessage2 = null
            this.errorMessage3 = null
            this.size = 'lowDose'
            this.sugarLevel = null
            this.cupType = null
            this.addOns = []
            this.quantity = 1
            this.total = 0
            this.totalAddOns = 0
            this.cupTypePrice = 0
            this.price = parseInt(item.onlinelowPrice)
            this.highprice = parseInt(item.onlinehighPrice)
            this.overprice = parseInt(item.onlineoverPrice)
            this.productName = item.productName
            this.image = item.image
            this.description = item.description
            this.itemId = item.id
            this.getSizePrice()
        }
    }
}
</script>