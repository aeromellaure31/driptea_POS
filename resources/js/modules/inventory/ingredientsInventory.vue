<template>
    <div class="top">
        <v-data-table
            :headers="headersForCup"
            :items="dataInDB"
            :search="search"
            :items-per-page="7"    
            class="elevation-3"
        >
            <template v-slot:top>
                <v-toolbar class="mb-2" color="#ff5b04" dark flat>
                <v-toolbar-title class="col pa-3 py-4 white--text">Ingredients Inventory</v-toolbar-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                    <v-date-picker v-model="dates" range></v-date-picker>
                </v-menu>
                <v-btn color="success" class="mr-6" @click="searchData">Find</v-btn>
                </v-toolbar>
            </template>
            <template v-slot:item.date="{ item }">
                <span>{{getDate(item.date)}}</span>
            </template>
            <template v-slot:item.quantity="{ item }">
                <span>{{putData(item)}}</span>
            </template>
            <template v-slot:item.remaining="{ item }">
                <span>{{putDataRemaining(item)}}</span>
            </template>
            <template v-slot:item.used="{ item }">
                <span>{{putUsedData(item)}}</span>
            </template>
        </v-data-table>

        <!-- Modal For exporting -->
        <template>
            <v-row justify="center">
                <v-dialog v-model="dialogForCupSize" persistent max-width="1000px">
                    <v-card>
                        <div class="modal-header">
                            <span class="headline">Export as Excel</span>
                            <button type="button" class="close" @click="dialogForCupSize = false">&times;</button><br>
                        </div>
                        <v-card-text>
                            <ejs-grid ref='grid' id='Grid' :dataSource='downloadData' :toolbar='toolbarOptions' height='270px' :allowPaging='true' :allowExcelExport='true' :toolbarClick='toolbarClick'>
                                <e-columns>
                                    <e-column field='date' headerText='Date' width=120></e-column>
                                    <e-column field='ingredient' headerText='Ingredients name' width=150></e-column>
                                    <e-column field='quantity' headerText='On store Ingredients' width=150></e-column>
                                    <e-column field='used' headerText='Used Ingredients' width=150></e-column>
                                    <e-column field='remaining' headerText='Remaining Ingredients' width=180></e-column>
                                </e-columns>
                            </ejs-grid>
                        </v-card-text>
                    </v-card>
                </v-dialog>
            </v-row>
        </template>
        <loading v-if="loadingShow"></loading>
    </div>
</template>
<script>
import AUTH from "../../services/auth";
import loading from "../../basic/loading.vue";
import image from "../../../assets/logo.png";
import moment from "moment";
import { GridPlugin, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids";
export default {
    data() {
        return {
            toolbarOptions: ['ExcelExport', 'Search'],
            formatDate: moment(new Date()).format("MM/DD/YYYY Hh:mm"),
            dataInDB: [],
            downloadData: [],
            search: null,
            headersForCup: [],
            loadingShow: false,
            dialogForCupSize: false,
            adminName: '',
            dates: [new Date().toISOString().substr(0, 10), ],
            type: '',
            ingredientsData: []
        };
    },
    components: {
        loading
    },
    mounted() {
        this.retrieveIngredients()
        this.retrieveAddedIngredients()
    },
    computed: {
        dateRangeText() {
            return this.dates.join(" ~ ");
        }
    },
    provide: {
        grid: [Toolbar, ExcelExport]
    },
    methods: {
        putDataRemaining(e){
            var output = ''
            this.ingredientsData.forEach(elem => {
                if(e.ingredient === elem.ingredientsName){
                    if(elem.type === 'Pack of Pearl'){
                        output = e.remaining + ' scope'
                    }else if(elem.type === 'Can of Fructose'){
                        output = e.remaining + ' ml'
                    }else if(elem.type === 'Bottle of Dough Syrup'){
                        output = e.remaining + ' ml'
                    }else if(elem.type === 'Pack of Tea'){
                        output = e.remaining + ' ml'
                    }else if(elem.type === 'Can of Wintermelon Syrup'){
                        output = e.remaining + ' ml'
                    }else if(elem.type === 'Bottle of Cream Milk'){
                        output = e.remaining + ' ml'
                    }else if(elem.type === 'Pack of Powder'){
                        output = e.remaining + ' scope'
                    }
                }
            })
            return output
        },
        putData(e){
            var output = ''
            this.ingredientsData.forEach(elem => {
                if(e.ingredient === elem.ingredientsName){
                    if(elem.type === 'Pack of Pearl'){
                        output = e.quantity + ' scope'
                    }else if(elem.type === 'Can of Fructose'){
                        output = e.quantity + ' ml'
                    }else if(elem.type === 'Bottle of Dough Syrup'){
                        output = e.quantity + ' ml'
                    }else if(elem.type === 'Pack of Tea'){
                        output = e.quantity + ' ml'
                    }else if(elem.type === 'Can of Wintermelon Syrup'){
                        output = e.quantity + ' ml'
                    }else if(elem.type === 'Bottle of Cream Milk'){
                        output = e.quantity + ' ml'
                    }else if(elem.type === 'Pack of Powder'){
                        output = e.quantity + ' scope'
                    }
                }
            })
            return output
        },
        putUsedData(e){
            var output = ''
            this.ingredientsData.forEach(elem => {
                if(e.ingredient === elem.ingredientsName){
                    if(elem.type === 'Pack of Pearl'){
                        e.used ? output = e.used + ' scope' : output = '0 scope'
                    }else if(elem.type === 'Can of Fructose'){
                        e.used ? output = e.used + ' ml' : output = '0 ml'
                    }else if(elem.type === 'Bottle of Dough Syrup'){
                        e.used ? output = e.used + ' ml' : output = '0 ml'
                    }else if(elem.type === 'Pack of Tea'){
                        e.used ? output = e.used + ' ml' : output = '0 ml'
                    }else if(elem.type === 'Can of Wintermelon Syrup'){
                        e.used ? output = e.used + ' ml' : output = '0 ml'
                    }else if(elem.type === 'Bottle of Cream Milk'){
                        e.used ? output = e.used + ' ml' : output = '0 ml'
                    }else if(elem.type === 'Pack of Powder'){
                        e.used ? output = e.used + ' scope' :  output = '0 scope'
                    }
                }
            })
            return output
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
        retrieveAddedIngredients(){
            this.loadingShow = true
            this.$axios.post(AUTH.url + "retrieveData", {}, AUTH.config).then(response => {
                this.loadingShow = false
                if(response.data.status === 'Token is Expired'){
                    AUTH.deauthenticate()
                }
                var list = []
                var a = [], b = [], c = [], d = [], f = []
                response.data.addIngredient.forEach(el => {
                    var w = el.usedQuantity
                    var x = el.ingredients
                    var y = el.quantity
                    var z = el.remainingQuantity
                    if(el.usedQuantity){
                        JSON.parse(w).forEach(e => {
                            f.push(e)
                        })
                    }
                    JSON.parse(x).forEach(e => {
                        a.push(e)
                        d.push(el.created_at)
                    })
                    JSON.parse(y).forEach(e => {
                        b.push(e)
                    })
                    JSON.parse(z).forEach(e => {
                        c.push(e)
                    })
                })
                a.forEach((el, index) => {
                    list.push({
                        date: d[index],
                        ingredient: el,
                        used: f[index],
                        quantity: b[index],
                        remaining: c[index]
                    })
                })
                this.dataInDB = list.reverse()
                this.headersForCup = [
                    { text: "Date", value: "date" },
                    { text: "Ingredient's Name", value: "ingredient" },
                    { text: "On Store Ingredients", value: "quantity" },
                    { text: "Used Ingredients", value: "used" },
                    { text: "Remaining Ingredients", value: "remaining" }
                ];
            });
        },
        toolbarClick(args) {
            if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
                let excelExportProperties = {
                    fileName: this.formatDate + ' Cups.xlsx',
                    header: {
                        headerRows: 7,
                        rows: [
                            { cells: [{ colSpan: 17, value: "Driptea System", style: { fontColor: '#C67878', fontSize: 25, hAlign: 'Center', bold: true, } }] },
                            { cells: [{ colSpan: 17, value: "A.C. Cortes Ave., Looc", style: { fontColor: '#C67878', fontSize: 20, hAlign: 'Center', bold: true, } }] },
                            { cells: [{ colSpan: 17, value: "6014 Mandaue City, Philippine", style: { fontColor: '#C67878', fontSize: 20, hAlign: 'Center', bold: true, } }] },
                            { cells: [{ colSpan: 17, value: "0917 329 7269", style: { fontColor: '#C67878', fontSize: 20, hAlign: 'Center', bold: true, } }] },
                            { cells: [{ colSpan: 17, hyperlink: { target: 'https://www.facebook.com/driptealoocmandaue/', displayText: 'www.facebook.com/driptealoocmandaue' }, style: { hAlign: 'Center' } }] },
                            { cells: [{ colSpan: 17, hyperlink: { target: 'samuelazurajr@gmail.com' }, style: { hAlign: 'Center' } }] },
                        ]
                    },
                    footer: {
                        footerRows: 2,
                        rows: [
                            { cells:  [{ colSpan: 2, value: "Print By: " + this.adminName + '  ' +  moment(new Date()).format('MM/DD/YYYY'), style: {fontSize: 15, hAlign: 'Left', bold: true, }},]},
                        ]
                    }
                };
                this.$refs.grid.excelExport(excelExportProperties);
            }
        },
        getDate(date) {
            return moment(date).format("LLL");
        },
        searchData() {
            this.dialogForCupSize = true
            this.loadingShow = true
            let params = {
                start: this.dates[0] > this.dates[1] ? this.dates[1] : this.dates[0],
                end: this.dates[1] ? (this.dates[0] > this.dates[1] ? this.dates[0] : this.dates[1]) : this.dates[0]
            }
            this.$axios.post(AUTH.url + "retrieveDataChosen", params, AUTH.config).then(response => {
                this.loadingShow = false
                if(response.data.status){
                    AUTH.deauthenticate()
                }
                var list = []
                var a = [], b = [], c = [], d = [], f = []
                response.data.addIngredient.forEach(el => {
                    var w = el.usedQuantity
                    var x = el.ingredients
                    var y = el.quantity
                    var z = el.remainingQuantity
                    if(el.usedQuantity){
                        JSON.parse(w).forEach(e => {
                            f.push(e)
                        })
                    }
                    JSON.parse(x).forEach(e => {
                        a.push(e)
                        d.push(el.created_at)
                    })
                    JSON.parse(y).forEach(e => {
                        b.push(e)
                    })
                    JSON.parse(z).forEach(e => {
                        c.push(e)
                    })
                })
                a.forEach((el, index) => {
                    list.push({
                        date: moment(d[index]).format('MM/DD/YYYY'),
                        ingredient: el,
                        used: f[index],
                        quantity: b[index],
                        remaining: c[index]
                    })
                })
                this.downloadData = list.reverse()
            });
        },
    }
};
</script>
<style scoped>
@import url("https://cdn.syncfusion.com/ej2/material.css");
.top{
    margin-top: 6%;
}
.table {
  margin-left: 50px;
  width: 90%;
}
td {
  text-align: center;
}
.calendarDate{
  width: 0%;
  margin-top: 2.3%;
  margin-right: 3%;
}
</style>
