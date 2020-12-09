<template>
    <div class="container">
        <v-data-table
        :headers="logHeader"
        :items="data"
        :search="search"
        :items-per-page="10"
        class="elevation-3 mt-10">
            <template v-slot:top>
                <v-toolbar class="mb-2" color="#ff5b04" dark flat>
                <v-toolbar-title class="col pa-3 py-4 white--text">Cashier Logs</v-toolbar-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <v-text-field
                    v-model="search"
                    clearable
                    flat
                    solo-inverted
                    prepend-inner-icon="mdi-magnify"
                    class="mt-7"
                    label="Search"
                ></v-text-field>
                </v-toolbar>
            </template>
            <template v-slot:item.id="{ item }"><span>{{getNumber(item.id)}}</span></template>
            <template v-slot:item.get_cashier[0]="{ item }"><span>{{getCashier(item.get_cashier[0])}}</span></template>
            <template v-slot:item.created_at="{ item }"><span>{{getDate(item.created_at)}}</span></template>
        </v-data-table>
    </div>
</template>
<style scoped>

</style>
<script>
import config from "../../config.js";
import AUTH from "../../services/auth";
import ROUTER from "../../router";
import loading from '../../basic/loading.vue';
import moment from 'moment'
export default {
    data(){
        return{
            config:config,
            logHeader: [
                { text: "No.", value: "id" },
                { text: "Cashier's Assign", value: "get_cashier[0]" },
                { text: "Activity", value: "activity" },
                { text: "Amount", value: "amount" },
                { text: "Date", value: "created_at", }
            ],
            data: [],
            search: '',
            loadingShow: false
        }
    },
    mounted(){
        this.retrieve()
        let pusher = new Pusher(this.config.PUSHER_APP_KEY, {
        cluster: this.config.PUSHER_APP_CLUSTER,
        secret: this.config.PUSHER_APP_SECRET,
        encrypted: false
        });
        let channel = pusher.subscribe("driptea-channel");
        let obj = this;
        pusher.logToConsole = true;

        channel.bind("driptea-data", data => {
            this.retrieve()
        });
    },
    components: {
        loading
    },
    methods:{
        getNumber(id){
            return (this.data.length + 1) - id
        },
        getCashier(param){
            return param.firstname + ' ' + param.lastname
        },
        getDate(date) {
            return moment(date).format('LLL');
        },
        retrieve(){
            this.loadingShow = true;
            this.$axios.post(AUTH.url + "getActivityLog", {}, AUTH.config)
                .then(res => {
                this.loadingShow = false;
                if (res.data.status) {
                    AUTH.deauthenticate();
                }
                this.data = (res.data.activityLog).reverse()
            });
        }
    }
}
</script>

