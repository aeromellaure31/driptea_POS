<template>
    <div class="sudlanan">
        <div>
            <v-btn  style="margin-left: 3%;margin-top:10px" class= "warning" @click="previous()">
                <v-icon >mdi-home</v-icon>&nbsp;&nbsp;Back
            </v-btn>
        </div>
        <div class="row firstRow">
            <div class="col-md-7">
                <center>
                    <v-card class="ml-10">
                        <center>
                            <div class="row" style="margin-bottom: -8%" v-if="customerType === 'online' || customerType === 'fb'" >
                                <div class="col-md-6" style="text-align: left">
                                    <p style="margin-left: 2%; margin-top: 2%;">Name: {{name}}</p><br>
                                    <p style="margin-left: 2%;">Address: {{address}}</p>
                                </div>
                                <div class="col-md-6" style="text-align: left">
                                    <p style="margin-top: 2%;">Contact#: {{contact}}</p><br>
                                    <p v-if="customerType === 'online'">Not Available: {{notAvailable}}</p>
                                </div>
                            </div>
                            <img v-if="customerType === 'walkin'" style="width: 70px; height: 50px; border: solid 1px black" src="@/assets/walkin.jpg">
                            <img v-if="customerType === 'foodpanda'" style="width: 70px; height: 50px;" src="@/assets/foodpanda1.png">
                            <img v-if="customerType === 'grab'" style="width: 70px; height: 50px;" src="@/assets/grab2.png">
                            <img v-if="customerType === 'fb'" style="width: 70px; height: 50px;" src="@/assets/fb1.png"><br>
                            <img v-if="customerType === 'online'" style="width: 70px; height: 50px;" src="@/assets/logo.png"><br>
                            <span v-if="error !== null" style="color: red; font-style: italic">{{error}}</span>
                            <table class="table table-responsive table-bordered " id="myTable">
                                <tr class="overline">
                                    <th style="width: 45%;">Product Name</th>
                                    <th>Add-ons</th>
                                    <th>Cup Type</th>
                                    <th>Unit Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th v-if="customerType === 'online'">Status Check</th>
                                    <th style="width: 15px;" >❌</th>
                                </tr>
                                <tbody class="Caption">
                                    <tr v-for="(item, index) in tableData" :key="index">
                                        <td>{{item.order_product[0].productName}}</td>
                                        <td>{{getAddOns(item.same_order)}}</td>
                                        <td>{{getCup(item.cupType)}}</td>
                                        <td>{{convert(item.choosenPrice)}}</td>
                                        <td>{{item.quantity}}</td>
                                        <td>{{convert(item.subTotal)}}</td>
                                        <td v-if="customerType === 'online'">
                                            <button :class="item.status === 'Not Available' ? 'btnClick' : 'btnAvailability'" @click="checkAvailability('Not Available', item)">N/A</button>
                                            <button :class="item.status === 'Available' ? 'btnClick' : 'btnAvailability'" @click="checkAvailability('Available', item)">Available</button>
                                        </td>
                                        <td>
                                            <button style="font-size: 10px" type="button" aria-expanded="false" @click="deleteOrder(item.id)">❌</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </center>
                        <div class="row">
                            <div class="col-md-3"></div>
                            <div class="col-md-6 overline" style="text-align:left;">
                                <center>
                                    <p v-if="customerType === 'fb' || customerType === 'online'" style="display: inline;">Subtotal:&emsp;&emsp;</p>
                                    <p v-if="customerType === 'fb' || customerType === 'online'" style="display: inline;">₱ {{getSubTotal()}}</p><br>
                                    <p v-if="customerType === 'fb' || customerType === 'online'" style="display: inline;">Del.&nbsp;Fee:&emsp;</p>
                                    <input disabled v-if="customerType === 'fb' || customerType === 'online'" style="display: inline;" type="text" placeholder="₱ 0.00" v-model="feeDeliver"><br>
                                    <p style="display: inline;" class="pStyle">Total:&emsp;&emsp;&emsp;&emsp;</p>
                                    <p style="display: inline;" class="pStyle">₱ {{convertTotalPrice()}}</p><br>
                                    <p v-if="customerType !== 'fb'  && customerType !== 'online'" style="display: inline;" class="pStyle">Amount:&emsp;&emsp;&nbsp;&nbsp;&nbsp;</p>
                                    <input v-if="customerType !== 'fb'  && customerType !== 'online'" style="display: inline;" type="number" placeholder="₱ 0.00" v-model="cash"><br>
                                    <p v-if="customerType !== 'fb'  && customerType !== 'online'" style="display: inline;" class="pStyle">Change:&emsp;&emsp;&emsp;</p>
                                    <p v-if="customerType !== 'fb'  && customerType !== 'online'" style="display: inline;" class="pStyle">₱ {{convertChange()}}</p>
                                    <div>
                                        <button class="btn btn-primary checkout overline" @click="checkoutOrder">Checkout</button>
                                        <button v-if="customerType === 'online'" class="btn btn-danger checkout overline" @click="cancelOrder">Cancel</button>
                                    </div>
                                </center>
                            </div>
                            <div class="col-md-3"></div>
                        </div>
                    </v-card>
                </center>
            </div>
            <div class="col-md-5">
                <div class="dataStyle">
                    <div class="row">
                        <div class="col-md-5 secondCol" v-for="(item, index) in data" :key="index">
                          <v-card class="elevation-5" max-width="250" height="250">
                            <v-img  max-width="250" height="250" :src="item.image" @click="redirect(item.productCategory)"></v-img>
                          </v-card>

                        </div>
                    </div>
                </div>
            </div>
            <receipt v-if="receiptShow" :showData="receiptData"></receipt>
            <loading v-if="loadingShow"></loading>
       </div>
    </div>
</template>
<style scoped>
.btnAvailability{
    background-color: rgb(243, 243, 243);
    padding: 5px;
    border-radius: 5px;
}
.btnClick{
    background-color: #ff5b04;
    padding: 5px;
    border-radius: 5px;
}
.dataStyle{
    height: 700px;
    overflow-y: scroll;
}
.checkout{
    margin-top: 3%;
    height: 40% !important;
    font-size: 20px; width: 200px;
}
.btn{
    height: 33px;
    width: 150px;
}
input{
    /* height: 35px; */
    /* margin-top: -50px; */
    /* margin-bottom: 15px; */
    width: 80px;
    border-radius: 5px;
}
::-webkit-scrollbar {
  width: 1px;
}
.pStyle{
    font-weight: bold;
}
p{
    margin-top: -10%;
}
.firstRow{
    margin-bottom: 5%;
    margin-top: 1%;
}
.sudlanan{
    background-color:white;
}
table{
    height: 450px;
    width: 100%;
}
.table tr{
   text-align: center;
}
th {
   width: 100%;
}
@media screen and (max-width: 800px) {
    input{
        width: 60px;
        margin-left: -15px;
    }
    
    table{
        height: 350px;
        width: 100%;
    }
    .dataStyle{
        height: 490px !important;
        overflow-y: scroll;
    }
}
</style>
<script>
import AUTH from '../../services/auth'
import ROUTER from '../../router'
import receipt from '../order/receipt.vue'
import config from '../../config.js'
import loading from '../../basic/loading.vue';
import swal from "sweetalert";
export default {
    data(){
        return{
            data: null,
            tableData: null,
            newTableData: null,
            customerType: this.$route.params.image,
            config: config,
            deliveryFee: 0,
            totalPrice: 0,
            incash: 0,
            change: 0,
            subTotalPrice: 0,
            cash: null,
            fee: 0,
            error: null,
            receiptShow: false,
            receiptData: null,
            loadingShow: false,
            name: '',
            address: '',
            contact: '',
            addOnsData: [],
            cupData: [],
            notAvailable: null,
            feeDeliver: 0,
            btnClick: false,
            packOfPearl: 0,
            canOfFructose: 0,
            bottleSyrup: 0,
            packOfTea: 0,
            canOfWintermelon: 0,
            bottleCreamMilk: 0,
            packOfPowder: 0,
            ingredientsAvailable: [],
            quantityAvailable: [],
            ingredientsData: [],
            storeData: [],
            modifyFinalData: [],
            finalData: [],
            finalQuantity: [],
        }
    },
    components: {
        receipt,
        loading
    },
    mounted(){
        this.retrieveCalculation()
        this.retrieveIngredients()
        this.retrieveAddedIngredients()
        this.retrieveCategory()
        this.retrieveProduct()
        this.retrieveAddOns()
        this.retrieveCupType()
        let pusher = new Pusher(this.config.PUSHER_APP_KEY, {
        cluster: this.config.PUSHER_APP_CLUSTER,
        secret: this.config.PUSHER_APP_SECRET,
        encrypted: false
        });
        let channel = pusher.subscribe("driptea-channel");
        let obj = this;
        pusher.logToConsole = true;
        channel.bind("driptea-data", data => {
            this.retrieveCalculation()
            this.retrieveIngredients()
            this.retrieveAddedIngredients()
            this.retrieveCategory()
            this.retrieveProduct()
            this.retrieveAddOns()
            this.retrieveCupType()
        });
    },
    methods: {
        checkAvailability(item, param){
            this.loadingShow = true
            let params = {
                id: param.id,
                status: item
            }
            this.$axios.post(AUTH.url + 'updateOne', params, AUTH.config).then(res => {
                this.loadingShow = false
                if(res.data.status){
                    AUTH.deauthenticate()
                }
                this.retrieveProduct()
            })
        },
        convert(item){
            return parseInt(item).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        },
        getCup(item){
            let cup = ""
            this.cupData.forEach(el => {
                if(item === el.cupTypeName){
                    if(this.customerType === 'foodpanda' || this.customerType === 'grab' || this.customerType === 'online'){
                        if(parseInt(el.inputCupOnlinePrice) === 0){
                            cup = (item)
                        }else{
                            cup = (item + '(+' + el.inputCupOnlinePrice + '.00)')
                        }
                    }else{
                        if(parseInt(el.cupTypePrice === 0)){
                            cup = (item)
                        }else{
                            cup = (item + '(+' + el.cupTypePrice + '.00)')
                        }
                    }
                }
            })
            return cup
        },
        retrieveCupType() {
            this.loadingShow = true
            this.$axios.post(AUTH.url + "retrieveAllCupType", {}, AUTH.config).then(response => {
                if(response.data.status){
                    AUTH.deauthenticate()
                }
                this.cupData = response.data.cupType;
                this.loadingShow = false
            });
        },
        hideReceipt(){
            this.receiptShow = false
        },
        addingFee(){
            this.deliveryFee = this.fee
        },
        addingIncash(){
            this.incash = this.cash
        },
        convertTotalPrice(){
            if(this.subTotalPrice === 0){
                this.getSubTotal()
            }
            if(this.fee !== '' || this.fee > 0){
                let total = this.subTotalPrice + parseInt(this.fee)
                this.totalPrice = total
                return parseInt(total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
            }else{
                let total = this.subTotalPrice
                this.totalPrice = total
                return parseInt(total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
            }
        },
        convertChange(){
            if(this.cash > this.totalPrice){
                let amountChange = this.cash - this.totalPrice
                return amountChange.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
            }else{
                return this.change.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
            }
        },
        retrieveCategory(){
            this.loadingShow = true
            this.$axios.post(AUTH.url + 'retrieveCategory', {}, AUTH.config).then(res => {
                if(res.data.status){
                    AUTH.deauthenticate()
                }
                this.data = res.data.addCategory
                this.loadingShow = false
            })
        },
        getSubTotal(){
            if(this.tableData != null){
                let total = 0
                this.tableData.forEach(element => {
                    if(element.status !== 'Not Available'){
                        total += parseInt(element.subTotal)
                    }
                });
                this.subTotalPrice = total
                return parseInt(total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
            }
        },
        redirect(param){
            ROUTER.push('/chosenCategory/'+param).catch(()=>{})
        },
        retrieveProduct(){
            this.loadingShow = true
            if(this.customerType === 'online'){
                let params = {
                    id: localStorage.getItem('customer')
                }
                this.$axios.post(AUTH.url + 'getOrder', params, AUTH.config).then(res => {
                    if(res.data.status){
                        AUTH.deauthenticate()
                    }
                    this.notAvailable = res.data.order[0] ? res.data.order[0].ifNotAvailable : ''
                    this.tableData = res.data.order
                    this.fee = 50
                    this.feeDeliver = "        ₱   " + parseInt(50).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
                })
            }else{
                let params = {
                    id: localStorage.getItem('customer')
                }
                this.$axios.post(AUTH.url + 'retrieveOrder', params, AUTH.config).then(res => {
                    if(res.data.status){
                        AUTH.deauthenticate()
                    }
                    this.tableData = res.data.order
                })
            }
            if(this.customerType === 'online' || this.customerType === 'fb'){
                let param = {
                    id: localStorage.getItem('customer')
                }
                this.$axios.post(AUTH.url + 'retrieveCustomer', param, AUTH.config).then(res => {
                    if(res.data.status){
                        AUTH.deauthenticate()
                    }
                    this.name = res.data.customerDetails.customerName
                    this.address = res.data.customerDetails.customerAddress
                    this.contact = res.data.customerDetails.customerContactNumber
                    this.loadingShow = false
                })
            }
            else{
                this.loadingShow = false
            }
        },
        retrieveAddOns(){
            this.loadingShow = true
            this.$axios.post(AUTH.url + "retrieveAllAddOns", {}, AUTH.config).then(response => {
                if(response.data.status){
                    AUTH.deauthenticate()
                }
                this.addOnsData = response.data.addons
                this.loadingShow = false
            });
        },
        getAddOns(item){
            let storeAddOns = ""
            let index = item.length
            item.forEach(el => {
                this.addOnsData.forEach(e => {
                    if(el.addOns === e.addons_name){
                        if(item.indexOf(el) >= (index - 1)){
                            if(this.customerType === 'foodpanda' || this.customerType === 'grab' || this.customerType === 'online'){
                                storeAddOns += (el.addOns + ' (+' + e.onlineAddOnsPrice + '.00)')
                            }else{
                                storeAddOns += (el.addOns + ' (+' + e.addons_price + '.00)')
                            }
                        }else{
                            if(this.customerType === 'foodpanda' || this.customerType === 'grab' || this.customerType === 'online'){
                                 storeAddOns += (el.addOns + ' (+' + e.onlineAddOnsPrice + '.00), ')
                            }else{
                                storeAddOns += (el.addOns + ' (+' + e.addons_price + '.00), ')
                            }
                        }
                    }
                })
            })
            return storeAddOns
        },
        deleteOrder(prodId){
            this.loadingShow = true
            this.$axios.post(AUTH.url + 'deleteOrder', {id: prodId}, AUTH.config).then(res => {
                if(res.data.status){
                    AUTH.deauthenticate()
                }
                this.retrieveProduct()
                this.loadingShow = false
            })
        },
        checkoutMethod(){
            this.loadingShow = true
            let params = {
                id: localStorage.getItem('customer'),
                status: 'complete'
            }
            this.$axios.post(AUTH.url + 'updateStatusOrder', params, AUTH.config).then(res => {
                if(res.data.status){
                    AUTH.deauthenticate()
                }
                let params = {
                    customerId: localStorage.getItem('customer'),
                    cashierId: localStorage.getItem('cashierId') ? localStorage.getItem('cashierId') : localStorage.getItem('adminId'),
                    subTotal: parseInt(this.getSubTotal()),
                    deliveryFee: this.fee,
                    total: parseInt(this.convertTotalPrice()),
                    incash: this.cash,
                    change: parseInt(this.convertChange()),
                    order: this.newTableData,
                    status: this.customerType === 'online' || this.customerType === 'fb' ? 'processing' : 'complete',
                    orderHistory: this.customerType
                }
                this.$axios.post(AUTH.url + 'addCheckout', params, AUTH.config).then(res => {
                    if(res.data.status){
                        AUTH.deauthenticate()
                    }
                    let low = 0
                    let high = 0
                    let over = 0
                    let store = []
                    this.newTableData.forEach(el => {
                        if(el.size === 'lowDose'){
                            low += el.quantity
                        }else if(el.size === 'highDose'){
                            high += el.quantity
                        }else if(el.size === 'overDose'){
                            over += el.quantity
                        }
                        var ing = JSON.parse(el.order_product[0].ingredients).split(',')
                        ing.forEach(element => {
                            this.storeData.forEach(elem => {
                                if(element === elem.name){
                                    this.ingredientsData.forEach(e => {
                                        if(elem.name === e.ingredientsName){
                                            let quantConsume = 0
                                            if(el.size === 'lowDose'){
                                                quantConsume = (el.quantity * e.lowdoseQuantity)
                                            }else if(el.size === 'highDose'){
                                                quantConsume = (el.quantity * e.highdoseQuantity)
                                            }else if(el.size === 'overDose'){
                                                quantConsume = (el.quantity * e.overdoseQuantity)
                                            }
                                            store.push({name: elem.name, quantityConsume: quantConsume})
                                            this.modifyFinalData = store
                                        }
                                    })
                                }
                            })
                        })
                    })
                    this.finalData = []
                    this.finalQuantity = []
                    var a = [], b = []
                    this.modifyFinalData.forEach((el, index) => {
                        this.storeData.forEach(element => {
                            if(element.name === el.name){
                                if(a.includes(element.name)){
                                    a[a.indexOf(element.name) + 1] = a[a.indexOf(element.name) + 1] - el.quantityConsume
                                    b[b.indexOf(element.name) + 1] = b[b.indexOf(element.name) + 1] + el.quantityConsume
                                }else{
                                    a.push(element.name)
                                    b.push(element.name)
                                    a[a.indexOf(element.name) + 1] = element.quantity - el.quantityConsume
                                    b[b.indexOf(element.name) + 1] = el.quantityConsume
                                }
                            }else{
                                if(a.includes(element.name)){
                                    a[a.indexOf(element.name) + 1] = a[a.indexOf(element.name) + 1]
                                    b[b.indexOf(element.name) + 1] = b[b.indexOf(element.name) + 1]
                                }else{
                                    a.push(element.name)
                                    b.push(element.name)
                                    a[a.indexOf(element.name) + 1] = element.quantity
                                    b[b.indexOf(element.name) + 1] = 0
                                }
                            }
                        })
                    })
                    this.finalData = b
                    this.finalQuantity = a
                    this.updateUsedIngredients()
                    let param = {
                        usedCupsLowDose: low,
                        usedCupsHighDose: high,
                        usedCupsOverDose: over
                    }
                    this.$axios.post(AUTH.url + 'updateRemainingCups', param, AUTH.config).then(response => {
                        if(response.data.status){
                            AUTH.deauthenticate()
                        }
                        let parameter = {
                            id: res.data.storeCheckouts.id,
                            stat: this.customerType === 'online' || this.customerType === 'fb' ? 'processing' : 'complete'
                        }
                        this.$axios.post(AUTH.url + 'retrieveCheckouts', parameter, AUTH.config).then(response => {
                            if(response.data.status){
                                AUTH.deauthenticate()
                            }
                            this.loadingShow = false
                            this.receiptData = response.data.storeOrder
                            this.receiptShow = true
                        })
                    })
                })
            })
        },
        updateUsedIngredients(){
            this.loadingShow = true
            var used = [], remain = []
            this.finalData.forEach((el, index) => {
                if(index % 2 !== 0){
                    used.push(el)
                    remain.push(this.finalQuantity[index])
                }
            })
            var params = {
                usedQuantity: used,
                remaining: remain
            }
            this.$axios.post(AUTH.url + "updateUsedIngredients", params, AUTH.config).then(response => {
                this.loadingShow = false
                if(response.data.status === 'Token is Expired'){
                    AUTH.deauthenticate()
                }
                this.retrieveIngredients()
                this.retrieveAddedIngredients()
                this.retrieveCalculation()
            });
        },
        retrieveCalculation(){
            this.loadingShow = true
            this.$axios.post(AUTH.url + "retrieveCalculation", {}, AUTH.config).then(response => {
                this.loadingShow = false
                if(response.data.status === 'Token is Expired'){
                    AUTH.deauthenticate()
                }
                this.packOfPearl = response.data.calculations[0].packOfPearl
                this.canOfFructose = response.data.calculations[0].canOfFructose
                this.bottleSyrup = response.data.calculations[0].bottleSyrup
                this.packOfTea = response.data.calculations[0].packOfTea
                this.canOfWintermelon = response.data.calculations[0].canOfWintermelon
                this.bottleCreamMilk = response.data.calculations[0].bottleCreamMilk
                this.packOfPowder = response.data.calculations[0].packOfPowder
            });
        },
        retrieveAddedIngredients(){
            this.loadingShow = true
            this.$axios.post(AUTH.url + "retrieveData", {}, AUTH.config).then(response => {
                this.loadingShow = false
                if(response.data.status === 'Token is Expired'){
                    AUTH.deauthenticate()
                }
                this.ingredientsAvailable = JSON.parse(response.data.addIngredient[0].ingredients)
                this.quantityAvailable = JSON.parse(response.data.addIngredient[0].remainingQuantity)
                this.storeData = []
                this.ingredientsAvailable.forEach((el, index) => {
                    this.storeData.push({name: el, quantity: this.quantityAvailable[index]})
                })
            });
        },
        retrieveIngredients(){
            this.loadingShow = true
            this.$axios.post(AUTH.url + "retrieveIngredients", {}, AUTH.config).then(response => {
                this.loadingShow = false
                if(response.data.status === 'Token is Expired'){
                    AUTH.deauthenticate()
                }
                this.ingredientsData = response.data.ingredients
            });
        },
        cancelOrder(){
            this.tableData.forEach(el => {
                var table = []
                if(el.status !== 'Not Available'){
                    table.push(el)
                }
                this.newTableData = table
            })
            if(this.newTableData.length <= 0){
                this.loadingShow = true
                let params = {
                    id: localStorage.getItem('customer'),
                    status: 'cancel',
                    cashierId: localStorage.getItem('cashierId') ? localStorage.getItem('cashierId') : localStorage.getItem('adminId'),
                }
                this.$axios.post(AUTH.url + 'updateStatusOrder', params, AUTH.config).then(res => {
                    this.loadingShow = false
                    if(res.data.status){
                        AUTH.deauthenticate()
                    }
                    swal({
                        title: "Order successfully Cancelled",
                        icon: "success",
                    }).then(e => {
                        this.retrieveProduct()
                        localStorage.removeItem('customerId')
                        localStorage.removeItem('customerType')
                        ROUTER.push('/casherDashboard').catch(()=>{})
                    })
                })
            }else{
                swal({
                    title: "You cannot Cancel with Available Data",
                    icon: "error"
                });
            }
        },
        checkoutOrder(){
            var table = []
            this.tableData.forEach(el => {
                if(el.status !== 'Not Available'){
                    table.push(el)
                }
                this.newTableData = table
            })
            if(this.newTableData.length > 0){
                if(this.customerType !== 'fb' && this.customerType !== 'online'){
                    if(this.cash === null){
                        this.error = 'Amount is required'
                    }else if(this.cash >= parseInt(this.convertTotalPrice()) && this.convertTotalPrice() !== null && this.convertChange() >= 0){
                        this.error = null
                        this.checkoutMethod()
                    }else{
                        this.error = 'All data is required'
                    }
                }else{
                    if(parseInt(this.getSubTotal()) > 0 && this.fee !== '' && parseInt(this.convertTotalPrice()) >= 0){
                        this.error = null
                        this.checkoutMethod()
                    }else{
                        this.error = 'All data is required'
                    }
                }
            }else{
                swal({
                    title: "No Available Data to Checkout!",
                    icon: "error"
                });
            }
        },
         previous(){
            let type = localStorage.getItem("customerType");
            ROUTER.push('/casherDashboard').catch(() => {})
        }
    }
}
</script>
