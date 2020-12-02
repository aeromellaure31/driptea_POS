<template>
    <div class="sudlanan">
        <div>
          <v-btn  style="margin-left: 3%;margin-top:10px" class= "warning" @click="previous()">
            <v-icon >mdi-home</v-icon>&nbsp;&nbsp;Back
        </v-btn>
    </div>
        <center>
            <h1 style="margin-top: 2%; color: black">{{itemSelected}}</h1>
            <div class="row">
                <div class="col-md-4">
                    <center>
                        <h3  class="black--text ">Cup's Size</h3>
                        <span class="errorColor" v-if="errorMessage !== null">{{errorMessage}}</span>
                        <button  class="btn overline " @click="getCupSize('lowDose', $event)">Low Dose</button>
                        <button class="btn overline" @click="getCupSize('highDose', $event)">High Dose</button>
                        <button class="btn overline" @click="getCupSize('overDose', $event)">Over Dose</button>
                        <h3 class="cupType black--text">Cup Type</h3>
                        <span class="errorColor" v-if="errorMessage1 !== null">{{errorMessage1}}</span>
                        <button class="btn" v-for="(item, index) in cupData" :key="index" @click="getCupType(item, $event)">{{getCupTypeName(item)}}</button>
                    </center>
                </div>
                <div class="col-md-4">
                    <center>
                        <h3 class="black--text">Sugar Level</h3>
                        <span class="errorColor" v-if="errorMessage2 !== null">{{errorMessage2}}</span>
                        <button class="btn overline " @click="getSugarLevel('0%', $event)">0%</button>
                        <button class="btn overline" @click="getSugarLevel('25%', $event)">25%</button>
                        <button class="btn overline" @click="getSugarLevel('50%', $event)">50%</button>
                        <button class="btn overline" @click="getSugarLevel('75%', $event)">75%</button>
                        <button class="btn overline" @click="getSugarLevel('100%', $event)">100%</button>

                        <h3 class="quantity black--text">Quantity of Order</h3>
                        <span class="errorColor" v-if="errorMessage3 !== null">{{errorMessage3}}</span>
                        <input type="number" class="form-control" min="1" v-model="quantity">
                    </center>
                </div>
                <div class="col-md-4">
                    <center>
                        <h3 class="black--text">Add-ons<span class="black--text" style="font-size: 15px;">(Optional)</span></h3>
                        <button class="btn overline" v-for="(item, index) in addOnsData" :key="index" @click="addAddOns(item, $event)">{{getAddOnsName(item)}}</button>
                    </center>
                </div>
            </div>
            <center>
                <button class="btn addCart overline" @click="addToCart()">Add to Cart</button>
            </center>
            <loading v-if="loadingShow"></loading>
        </center>
    </div>
</template>
<style scoped>
.errorColor {
  color: red;
}
.addCart{
    /* margin-top: 20% !important; */
    width: 300px !important;
    height: 45px !important;
    /* margin-top: -150px !important; */
    background-color: #11c408 !important;
}
.quantity {
  margin-top: 9%;
  margin-bottom: 5%;
}
.form-control {
  text-align: center;
  width: 90%;
  font-weight: bold;
  font-size: 20px;
}
::-webkit-scrollbar {
  width: 1px;
}
.cupType {
  margin-top: 25%;
}
.row{
    width: 90%;
    /* height: 650px; */
    overflow-y: scroll;
    margin-top: 3%;
    /* background-color: white; */
}
.btn{
    margin-top: 5%;
    width: 35px;
    width: 90%;
    font-weight: bold;
    font-size: 20px;
    background-color: #E65100;
   
}
.sudlanan{
    background-color: white;
    height: 92.8vh;
    color:white;
    font-family: Roboto Slab;
}
.color {
  background: #89afe8;
}
.normalColor {
  background: #E65100;
}
</style>
<script>
import AUTH from "../../services/auth";
import ROUTER from "../../router";
import { compileFunction } from "vm";
import loading from '../../basic/loading.vue';
export default {
    data() {
        return {
            itemSelected: null,
            itemId: this.$route.params.item,
            quantity: 1,
            cupSize: null,
            sugarLevel: null,
            addOns: [],
            cupType: null,
            cupEvent: "",
            sugarEvent: "",
            cupTypeEvent: "",
            addOnsEvent: "",
            addOnsAmount: 0,
            subTotal: 0,
            total: null,
            lowPrice: null,
            highPrice: null,
            overPrice: null,
            onlinelowPrice: null,
            onlinehighPrice: null,
            onlineoverPrice: null,
            productData: null,
            addOnsData: null,
            cupData: null,
            addOnsPrice: null,
            cupPrice: null,
            errorMessage: null,
            errorMessage1: null,
            errorMessage2: null,
            errorMessage3: null,
            customerType: localStorage.getItem("customerType"),
            loadingShow: false
        };
    },
    components: {
        loading
    },
    mounted() {
        this.getProduct();
        this.retrieveProducts();
        this.retrieveAddOns();
        this.retrieveCupType();
    },
    methods: {
        getAddOnsName(item) {
            let value = "";
            if (this.customerType === "foodpanda" || this.customerType === "grab") {
                value = item.addons_name + " (+" + item.onlineAddOnsPrice + ")";
            } else {
                value = item.addons_name + " (+" + item.addons_price + ")";
            }
            return value;
        },
        retrieveCupType() {
            this.loadingShow = true
            this.$axios.post(AUTH.url + "retrieveCupType", {}, AUTH.config).then(response => {
                if(response.data.status){
                    AUTH.deauthenticate()
                }
                this.cupData = response.data.cupType;
                this.loadingShow = false
            });
        },
        getCupSize(params, event) {
            let a = 0;
            if (this.cupEvent !== event.target) {
                event.target.classList.remove("normalColor");
                event.target.classList.add("color");
                this.cupSize = params;
                if (this.customerType === "foodpanda" || this.customerType === "grab") {
                    if (params === "highDose") {
                        this.total = this.onlinehighPrice;
                    } else if (params === "overDose") {
                        this.total = this.onlineoverPrice;
                    } else if (params === "lowDose") {
                        this.total = this.onlinelowPrice;
                    }
                }else {
                    if (params === "highDose") {
                        this.total = this.highPrice;
                    } else if (params === "overDose") {
                        this.total = this.overPrice;
                    } else if (params === "lowDose") {
                        this.total = this.lowPrice;
                    }
                }
                if (this.cupEvent !== "") {
                    this.cupEvent.classList.add("normalColor");
                    this.cupEvent.classList.remove("color");
                }
            }
            this.cupEvent = event.target;
            this.errorMessage = null
        },
        getCupTypeName(item){
            let value = ''
            if(this.customerType === 'foodpanda' || this.customerType === 'grab'){
                value = (item.cupTypeName + ' (+' + item.inputCupOnlinePrice + ')')
            }else{
                if(item.cupTypePrice === 0){
                    value = (item.cupTypeName)
                }else{
                    value = (item.cupTypeName + ' (+' + item.cupTypePrice + ')')
                }
            }
            return value
        },
        retrieveProducts() {
            this.loadingShow = true
            this.$axios.post(AUTH.url + "retrieveAllProduct", {}, AUTH.config).then(response => {
                if(response.data.status){
                    AUTH.deauthenticate()
                }
                this.productData = response.data.product;
                this.loadingShow = false
            });
        },
        retrieveAddOns() {
            this.loadingShow = true
            this.$axios.post(AUTH.url + "retrievingAddOns", {}, AUTH.config).then(response => {
                if(response.data.status){
                    AUTH.deauthenticate()
                }
                this.addOnsData = response.data.addons;
                this.loadingShow = false
            });
        },
        getProduct(){
            this.loadingShow = true
            this.$axios.post(AUTH.url + 'retrieveOneProduct', {id: this.itemId}, AUTH.config).then(response => {
                if(response.data.status){
                    AUTH.deauthenticate()
                }
                this.itemSelected = response.data.product[0].productName
                this.lowPrice = response.data.product[0].lowPrice
                this.highPrice = response.data.product[0].highPrice
                this.overPrice = response.data.product[0].overPrice
                this.onlinelowPrice = response.data.product[0].onlinelowPrice
                this.onlinehighPrice = response.data.product[0].onlinehighPrice
                this.onlineoverPrice = response.data.product[0].onlineoverPrice
                this.loadingShow = false
            })
        },
        getSugarLevel(params, event){
            if(this.sugarEvent !== event.target){
                event.target.classList.remove('normalColor')
                event.target.classList.add('color')
                this.sugarLevel = params
                if(this.sugarEvent !== ''){
                    this.sugarEvent.classList.add('normalColor')
                    this.sugarEvent.classList.remove('color')
                }
            }
            this.sugarEvent = event.target
            this.errorMessage2 = null
        },
        getCupType(params, event){
            if(this.cupTypeEvent !== event.target){
                event.target.classList.remove('normalColor')
                event.target.classList.add('color')
                this.cupType = params.cupTypeName
                if(this.cupTypeEvent !== ''){
                    this.cupTypeEvent.classList.add('normalColor')
                    this.cupTypeEvent.classList.remove('color')
                }
                if(this.customerType === 'foodpanda' || this.customerType === 'grab'){
                    this.cupPrice = params.inputCupOnlinePrice
                }else{
                    this.cupPrice = params.cupTypePrice
                }
            }
            this.cupTypeEvent = event.target
            this.errorMessage1 = null
        },
        addAddOns(params, event){
            this.$axios.post(AUTH.url + "retrieveOneAddOn", {id: params.id}, AUTH.config).then(response => {
                if(response.data.status){
                    AUTH.deauthenticate()
                }
                if(this.customerType === 'foodpanda' || this.customerType === 'grab'){
                    this.addOnsPrice = response.data.addons.onlineAddOnsPrice
                }else{
                    this.addOnsPrice = response.data.addons.addons_price
                }
                if(this.addOns.includes(params.addons_name)){
                    event.target.classList.remove('color')
                    this.addOns.splice(this.addOns.indexOf(params.addons_name), 1)
                    this.addOnsAmount -= this.addOnsPrice
                }else{
                    event.target.classList.add('color')
                    this.addOns.push(params.addons_name)
                    this.addOnsAmount += this.addOnsPrice
                }
            });
        },
        addToCart(){
            if(this.quantity <= 0){
                this.errorMessage3 = 'Quantity must be greater than 0!'
            }else{
                this.errorMessage3 = null
            }
            if(this.cupSize === null){
                this.errorMessage = 'Cup size is required!'
            }
            if(this.sugarLevel === null){
                this.errorMessage2 = 'Sugar level is required!'
            }
            if(this.cupType === null){
                this.errorMessage1 = 'Cup type is required!'
            }
            if(this.quantity > 0 && this.cupSize !== null && this.sugarLevel !== null && this.cupType !== null){
                this.loadingShow = true
                let parameter = {
                    customerId: localStorage.getItem('customer'),
                    cashierId: localStorage.getItem('cashierId') ? localStorage.getItem('cashierId') : localStorage.getItem('adminId'),
                    productId: this.itemId,
                    customerType: this.customerType,
                    quantity: this.quantity,
                    size: this.cupSize,
                    sugarLevel: this.sugarLevel,
                    choosenPrice: this.total,
                    cupType: this.cupType,
                    status: 'pending',
                    addOns: this.addOns,
                    subTotal: parseInt(this.quantity) * (parseInt(this.total) + parseInt(this.addOnsAmount) + parseInt(this.cupPrice))
                }
                this.$axios.post(AUTH.url + 'addOrder', parameter, AUTH.config).then(response => {
                    this.loadingShow = false
                    if(response.data.status){
                        AUTH.deauthenticate()
                    }
                    ROUTER.push('/productCategory/'+localStorage.getItem('customerType')).catch(()=>{})
                })
            
            }
            this.cupTypeEvent = event.target;
        },
        previous(){
            let type = localStorage.getItem("customerType");
            ROUTER.push('/productCategory/' + type).catch(() => {})
        }
    }
}
</script>
