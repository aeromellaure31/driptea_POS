<template>
    <v-card>
        <div class="my-custom-scrollbar">
                <v-simple-table :items-per-page="5" class="elevation-3">
             <template v-slot:top>
               <v-toolbar class="mb-2" color="#ff5b04" dark flat>
                 <v-toolbar-title class="col pa-3 py-4 white--text">Sales Inventory</v-toolbar-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <v-text-field
                   clearable
                   flat
                   solo-inverted
                   prepend-inner-icon="mdi-magnify"
                   class="mt-7"
                   label="Search"
                 ></v-text-field>
                 <v-divider class="mx-4" vertical></v-divider>
                <VueJsonToCsv
                :json-data="toDownload"
                :csv-title="formatDate + ' Sales'"
                >
                    <v-btn color="success" class="mr-6" @click="excelDownload()">
                        Export <i class="mdi mdi-export-variant" aria-hidden="true"></i>
                    </v-btn>
                </VueJsonToCsv>
               </v-toolbar>
             </template>
                <thead >
                    <tr class="header">
                        <th scope="col">Date</th>
                        <th scope="col" v-for="(item, index) in categoryData" :key="index">{{item.productCategory}}</th>
                        <th scope="col">Add Ons</th>
                        <th scope="col">Delivery Fee</th>
                        <th scope="col">Cup Type</th>
                        <th scope="col">Total Sales</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in storage2" :key="index">
                        <td>{{getDate(index)}}</td>
                        <td scope="row" v-for="(i, ind) in item" :key="ind">₱ {{i.value}}</td>
                        <td>₱ {{getAddOns(index)}}</td>
                        <td>₱ {{getDeliveryFee(index)}}</td>
                        <td>₱ {{getCupType(index)}}</td>
                        <td>₱ {{getTotal(index)}}</td>
                    </tr>
                </tbody>
           </v-simple-table>
        </div>
    </v-card>
</template>
<script>
import AUTH from '../../services/auth'
import VueJsonToCsv from 'vue-json-to-csv'
import loading from '../../basic/loading.vue';
import moment from 'moment'
export default {
    data(){
        return{
            formatDate: moment(new Date()).format('MM/DD/YYYY Hh:mm'),
            categoryData: [],
            search: '',
            loadingShow: false,
            store: [],
            storage: [],
            storage2: [],
            storeAmount: [],
            dataAddOns: [],
            cupType: [],
            toDownload: [],
        }
    },
    mounted(){
        this.retrieveCategory()
        this.retrieveCupType()
        this.retrieveSale()
        this.retrieveAddOns()
    },
    components: {
        VueJsonToCsv,
        loading
    },
    methods:{
        excelDownload(){
            this.storage2.forEach((el, index) => {
                var list = {
                    Date: '',
                    Products: 0,
                    Add_ons: '',
                    DeliveryFee: '',
                    CupType: '',
                    TotalSales: ''
                }
                el.forEach(e => {
                    list.Products += e.value
                })
                list.Date = this.getDate(index)
                list.Add_ons = this.getAddOns(index)
                list.DeliveryFee = this.getDeliveryFee(index)
                list.CupType = this.getCupType(index)
                list.TotalSales = this.getTotal(index)
                this.toDownload.push(list)
            })
        },
        getTotal(index){
            let amount = 0
            let id = 0
            this.store[index].forEach(el => {
                if(el.get_checkouts[0].id !== id){
                    id = el.get_checkouts[0].id
                    amount +=  parseInt(el.get_checkouts[0].total)
                }
            })
            return parseInt(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        },
        getCupType(index){
            let amount = 0 
            this.store[index].forEach(el => {
                this.cupType.forEach(cup => {
                    if(el.cupType === cup.cupTypeName){
                        if(el.customerType !== 'fb' && el.customerType !== 'walkin'){
                            amount += (cup.inputCupOnlinePrice * el.quantity)
                        }else{
                            amount += (cup.cupTypePrice * el.quantity)
                        }
                    }
                })
            })
            return parseInt(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        },
        getDeliveryFee(index){
            let amount = 0
            this.store[index].forEach(el => {
                amount +=  el.get_checkouts[0].deliveryFee
            })
            return parseInt(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        },
        getAddOns(index){
            let amount = 0
            this.store[index].forEach(el => {
                el.same_order.forEach(e => {
                    this.dataAddOns.forEach(add => {
                        if(e.addOns === add.addons_name){
                            if(el.customerType !== 'fb' && el.customerType !== 'walkin'){
                                amount += (add.onlineAddOnsPrice * el.quantity)
                            }else{
                                amount += (add.addons_price * el.quantity)
                            }
                        }
                    })
                })
            })
            return parseInt(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        },
        retrieveCupType(){
            this.loadingShow = true
            this.$axios.post(AUTH.url + "retrieveAllCupType", {}, AUTH.config).then(response => {
                if(response.data.status){
                    AUTH.deauthenticate()
                }
                this.cupType = response.data.cupType
                this.loadingShow = false
            });
        },
        retrieveAddOns() {
            this.loadingShow = true
            this.$axios.post(AUTH.url + "retrieveWithDeleteAddOns", {}, AUTH.config).then(response => {
                if(response.data.status){
                    AUTH.deauthenticate()
                }
                this.dataAddOns = response.data.addons
                this.loadingShow = false
            });
        },
        getDate(index){
            return moment(this.store[index][0].created_at).format('MM/DD/YYYY')
        },
        retrieveCategory(){
            this.loadingShow = true
            this.$axios.post(AUTH.url + 'retrieveCategoryAscending', {}, AUTH.config).then(res => {
                if(res.data.status){
                    AUTH.deauthenticate()
                }
                this.loadingShow = false
                this.categoryData = res.data.addCategory
            })
        },
        retrieveSale(){
            this.loadingShow = true
            this.$axios.post(AUTH.url + "retrieveAllSales", {}, AUTH.config).then(response => {
                if(response.data.status){
                    AUTH.deauthenticate()
                }
                this.loadingShow = false
                let store = []
                Object.keys(response.data.storeOrder).forEach(element => {
                    store.push(response.data.storeOrder[element])
                });
                this.store = store.reverse()
                this.storage2 = []
                this.store.forEach(el => {
                    this.storage = []
                    this.categoryData.forEach(cat => {
                        let amount = 0
                        el.forEach(e => {
                            if(e.order_product[0].productCategory === cat.productCategory){
                                amount += (e.choosenPrice * e.quantity)
                            }
                        })
                        this.storage.push({'category': cat.productCategory, 'value': parseInt(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')})
                    })
                    this.storage2.push(this.storage)
                })
            });
        }
    }
}
</script>