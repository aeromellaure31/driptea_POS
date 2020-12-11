<template>
<div id="modal" class="blurred-background">
    <div class="alert-box">
        <center>
            <img style="width: 80px" src="@/assets/logo.png">
            <h6><b>Driptea</b></h6>
            <h6>A.C. Cortes Avenue Across UCLM, Mandaue City, 6014 Cebu</h6>
           <div id="app" style="font-size:12px" class="float-right"><b>
               {{ datetime }}
            </b></div>
        </center>
        <table class="table table-responsive" id="myTable">
            <tr>
                <th style="width: 260px; font-size:12px">Product Name</th>
                <th style="width: 260px; font-size:12px">Add-ons</th>
                <th style="font-size:12px">Unit Price</th>
                <th style="font-size:12px">Quantity</th>
                <th style="font-size:12px">Total</th>
            </tr>
            <tr v-for="(item, i) in showData" :key="i">
                <td style="font-size:12px"><b>{{item.order_product ? item.order_product[0].productName : ''}}</b></td>
                <td style="font-size:12px"><b>{{item.same_order ? getAddOns(item.same_order) : ''}}</b></td>
                <td style="font-size:12px"><b>{{item.choosenPrice ? item.choosenPrice : ''}}</b></td>
                <td style="font-size:12px"><b>{{item.quantity ? item.quantity : ''}}</b></td>
                <td style="font-size:12px"><b>{{item.subTotal ? item.subTotal : ''}}</b></td>
            </tr>
        </table>
        <div class="col-md-6" id="summary"></div>
        <div style="font-size:12px;" class="text-end  display:block">
            <p class="styleReceipt" v-if="customerType === 'fb' || customerType === 'online'"><b>Subtotal: ₱ {{Subtotal}}.00</b></p>
            <p class="styleReceipt" v-if="customerType === 'fb' || customerType === 'online'"><b>Delivery Fee: ₱ {{Delivery_Fee}}.00</b></p>
            <p class="styleTotal">Total: ₱ {{Total}}.00</p>
            <p class="styleReceipt" v-if="customerType !== 'fb' && customerType !== 'online'"><b>Amount: ₱ {{Amount}}.00</b></p>
            <p class="styleReceipt" v-if="customerType !== 'fb' && customerType !== 'online'"><b>Change: ₱ {{Change}}.00</b></p>
        </div>
        <button type="button" class="btn btn-primary float-right" style="width:100px" @click="hide()">OK</button>
    </div>
</div>
</template>
<style scoped>
.styleReceipt{
    font-weight: bold;
}
.styleTotal{
    font-weight: bold;
    font-size: 15px;
}
hr {
    border: 1px solid gray;
}

label {
    font-size: 20px !important;
}

.blurred-background {
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    text-align: center;
    background: rgb(54, 54, 54, .7);
}

.alert-box {
    width: 500px;
    background: white;
    display: inline-block;
    margin-top: 150px;
    font-weight: lighter;
    border-radius: 3px;
    font-size: 30px;
    padding: 20px;
    transition: .2s;
    text-align: left;
    box-shadow: 5px 5px gray;
}
</style>
<script>
import moment from 'moment'
import AUTH from '../../services/auth'
import ROUTER from '../../router'
export default {
    data() {
        return {
            data: null,
            datetime:moment().format('MMMM Do YYYY, h:mm:ss a'),
            Change: null,
            Subtotal: null,
            Delivery_Fee: null,
            Total: null,
            Amount: null,
            customerType: localStorage.getItem('customerType')
        }
    },
    props: ['showData'],
    mounted() {
        this.Change = this.showData[0].get_checkouts[0].change
        this.Subtotal = this.showData[0].get_checkouts[0].subTotal
        this.Delivery_Fee =this.showData[0].get_checkouts[0].deliveryFee
        this.Total = this.showData[0].get_checkouts[0].total
        this.Amount = this.showData[0].get_checkouts[0].incash
    },

    methods: {
        hide() {
            this.$parent.hideReceipt()
            this.$parent.retrieveProduct()
            localStorage.removeItem('customerId')
            localStorage.removeItem('customerType')
            ROUTER.push('/casherDashboard').catch(()=>{})
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
        }
    },

}
</script>
