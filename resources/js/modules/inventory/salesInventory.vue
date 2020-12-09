<template>
    <v-card class="top">
        <div class="my-custom-scrollbar">
            <v-simple-table :items-per-page="5" class="elevation-3">
                <template v-slot:top>
                    <v-toolbar class="mb-2" color="#ff5b04" dark flat>
                        <v-toolbar-title class="col pa-3 py-4 white--text">Sales Inventory</v-toolbar-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <v-menu
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                class="calendarDate"
                                v-model="dateRangeText"
                                chips
                                label="DATE"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                v-model="dates"
                                range
                            ></v-date-picker>
                        </v-menu>
                        <v-btn color="success" class="mr-6" @click="showModal()">Find</v-btn>
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
                        <td scope="row" v-for="(i, ind) in item" :key="ind">{{format(i.value)}}</td>
                        <td>₱ {{getAddOns(index)}}</td>
                        <td>₱ {{getDeliveryFee(index)}}</td>
                        <td>₱ {{getCupType(index)}}</td>
                        <td>₱ {{getTotal(index)}}</td>
                    </tr>
                </tbody>
           </v-simple-table>
        </div>
        <template>
            <v-row justify="center">
                <v-dialog v-model="dialogConfirmation" persistent max-width="600px">
                    <v-card>
                        <div class="modal-header">
                          <span class="headline">Confirmation</span>
                          <button type="button" class="close" @click="dialogConfirmation = false">&times;</button><br>
                        </div>
                        <empty :title="'No Order in this Date/s'"></empty>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </template>
        <template>
            <v-row justify="center">
                <v-dialog v-model="choosenDate" persistent max-width="1000px">
                    <v-card>
                        <div class="modal-header">
                            <span class="headline">Export as Excel</span>
                            <button type="button" class="close" @click="choosenDate = false">&times;</button><br>
                        </div>
                        <v-card-text>
                            <ejs-grid ref='grid' id='Grid' :dataSource='toDownload' :toolbar='toolbarOptions' height='270px' :allowPaging='true' :allowExcelExport='true' :toolbarClick='toolbarClick'>
                                <e-columns>
                                    <e-column field='Date' headerText='Date' width=120></e-column>
                                    <e-column field='Products' headerText='All Products' width=150></e-column>
                                    <e-column field='Add_ons' headerText='Add-Ons' width=150></e-column>
                                    <e-column field='DeliveryFee' headerText='Delivery Fee' width=150></e-column>
                                    <e-column field='CupType' headerText='Cup Type' width=150></e-column>
                                    <e-column field='TotalSales' headerText='Total Sales' width=150></e-column>
                                </e-columns>
                            </ejs-grid>
                        </v-card-text>
                        <v-spacer></v-spacer>
                        <h4 style="text-align: right; margin-right: 3%;">Total: ₱ {{overAllTotal}}</h4><br>
                        <v-spacer></v-spacer>
                    </v-card>
                </v-dialog>
            </v-row>
        </template>
    </v-card>
</template>
<style scoped>
@import url('https://cdn.syncfusion.com/ej2/material.css');
.top{
    margin-top: 6%;
}
.colorstyle{
    width: 25%;
    color: white;
    background-color: #ff5b04;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: white;
}
.calendarDate{
    width: 0%;
    margin-top: 2.3%;
    margin-right: 3%;
}
</style>
<script>
import AUTH from '../../services/auth'
import VueJsonToCsv from 'vue-json-to-csv'
import loading from '../../basic/loading.vue';
import empty from "../../basic/empty.vue";
import { GridPlugin, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids";
import moment from 'moment'
export default {
    data(){
        return{
            toolbarOptions: ['ExcelExport'],
            formatDate: moment(new Date()).format('MM/DD/YYYY Hh:mm'),
            categoryData: [],
            search: '',
            loadingShow: false,
            store: [],
            store2: [],
            storage: [],
            storage2: [],
            storeAmount: [],
            dataAddOns: [],
            cupType: [],
            toDownload: [],
            choosenDate: false,
            dialogConfirmation: false,
            newDateStorage: [],
            dates: [new Date().toISOString().substr(0, 10), ],
            overAllTotal: 0,
            adminName: ''
        }
    },
    mounted(){
        this.retrieveCategory()
        this.retrieveCupType()
        this.retrieveSale()
        this.retrieveAddOns()
        this.getAdmin()
    },
    provide: {
        grid: [Toolbar, ExcelExport]
    },
    components: {
        VueJsonToCsv,
        loading,
        empty
    },
    computed: {
        dateRangeText () {
            return this.dates.join(' ~ ')
        },
    },
    methods:{
        toolbarClick(args) {
            if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
                let excelExportProperties = {
                    fileName: this.formatDate + ' Sales.xlsx',
                    header: {
                        headerRows: 7,
                        rows: [
                            { cells: [{ colSpan: 6, value: "Driptea System", style: { fontColor: '#C67878', fontSize: 20, hAlign: 'Center', bold: true, } }] },
                            { cells: [{ colSpan: 6, value: "A.C. Cortes Ave., Looc", style: { fontColor: '#C67878', fontSize: 15, hAlign: 'Center', bold: true, } }] },
                            { cells: [{ colSpan: 6, value: "6014 Mandaue City, Philippine", style: { fontColor: '#C67878', fontSize: 15, hAlign: 'Center', bold: true, } }] },
                            { cells: [{ colSpan: 6, value: "0917 329 7269", style: { fontColor: '#C67878', fontSize: 15, hAlign: 'Center', bold: true, } }] },
                            { cells: [{ colSpan: 6, hyperlink: { target: 'https://www.facebook.com/driptealoocmandaue/', displayText: 'www.facebook.com/driptealoocmandaue' }, style: { hAlign: 'Center' } }] },
                            { cells: [{ colSpan: 6, hyperlink: { target: 'samuelazurajr@gmail.com' }, style: { hAlign: 'Center' } }] },
                        ]
                    },
                    footer: {
                        footerRows: 3,
                        rows: [
                            { cells: [{ colSpan: 6, value: ("Total Sales: " + this.overAllTotal), style: { hAlign: 'Right', bold: true } }] },
                            { cells:  [{ colSpan: 2, value: "Print By: " + this.adminName + '  ' +  moment(new Date()).format('MM/DD/YYYY'), style: {fontSize: 15, hAlign: 'Left', bold: true, }},]},
                        ]
                    }
                };
                this.$refs.grid.excelExport(excelExportProperties);
            }
        },
        showModal(){
            this.retrieveChoosen()
        },
        format(item){
            return '₱ ' + parseInt(item).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        },
        excelDownload(){
            this.overAllTotal = 0
            this.toDownload = []
            this.newDateStorage.forEach((el, index) => {
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
                list.Date = this.getDate2(index)
                list.Add_ons = this.getAddOns2(index)
                list.DeliveryFee = this.getDeliveryFee2(index)
                list.CupType = this.getCupType2(index)
                list.TotalSales = this.getTotal2(index)
                list.Products = parseInt(list.Products).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
                this.toDownload.push(list)
                this.overAllTotal += parseInt(this.getTotal3(index))
            })
            this.overAllTotal = parseInt(this.overAllTotal).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
            this.choosenDate = true
        },
        getAdmin(){
            this.loadingShow = true
            let params = {
                uname: localStorage.getItem('adminId')
            };
            this.$axios.post(AUTH.url + "getUserData", params, AUTH.config).then(response => {
                this.loadingShow = false
                if(response.data.status){
                    AUTH.deauthenticate()
                }
                this.adminName = response.data.userdata[0].fname + ' ' + response.data.userdata[0].lname
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
        getTotal2(index){
            let amount = 0
            let id = 0
            this.store2[index].forEach(el => {
                if(el.get_checkouts[0].id !== id){
                    id = el.get_checkouts[0].id
                    amount +=  parseInt(el.get_checkouts[0].total)
                }
            })
            return parseInt(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        },
        getTotal3(index){
            let amount = 0
            let id = 0
            this.store2[index].forEach(el => {
                if(el.get_checkouts[0].id !== id){
                    id = el.get_checkouts[0].id
                    amount +=  parseInt(el.get_checkouts[0].total)
                }
            })
            return amount
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
        getCupType2(index){
            let amount = 0 
            this.store2[index].forEach(el => {
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
        getDeliveryFee2(index){
            let amount = 0
            this.store2[index].forEach(el => {
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
        getAddOns2(index){
            let amount = 0
            this.store2[index].forEach(el => {
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
        getDate2(index){
            return moment(this.store2[index][0].created_at).format('MM/DD/YYYY')
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
                        this.storage.push({'category': cat.productCategory, 'value': parseInt(amount)})
                    })
                    this.storage2.push(this.storage)
                })
            });
        },
        retrieveChoosen(){
            this.loadingShow = true
            let params = {
                start: this.dates[0] > this.dates[1] ? this.dates[1] : this.dates[0],
                end: this.dates[1] ? (this.dates[0] > this.dates[1] ? this.dates[0] : this.dates[1]) : this.dates[0]
            }
            this.$axios.post(AUTH.url + "retrieveChosenSales", params, AUTH.config).then(response => {
                this.loadingShow = false
                if(response.data.status){
                    AUTH.deauthenticate()
                }
                let store = []
                Object.keys(response.data.storeOrder).forEach(element => {
                    store.push(response.data.storeOrder[element])
                });
                this.store2 = store.reverse()
                this.newDateStorage = []
                this.store2.forEach(el => {
                    let storage = []
                    this.categoryData.forEach(cat => {
                        let amount = 0
                        el.forEach(e => {
                            if(e.order_product[0].productCategory === cat.productCategory){
                                amount += (parseInt(e.choosenPrice) * parseInt(e.quantity))
                            }
                        })
                        storage.push({'category': cat.productCategory, 'value': parseInt(amount)})
                    })
                    this.newDateStorage.push(storage)
                })
                if(this.newDateStorage.length > 0){
                    this.excelDownload()
                }else{
                    this.dialogConfirmation = true
                }
            });
        }
    }
}
</script>