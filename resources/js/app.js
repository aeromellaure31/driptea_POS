require('./bootstrap');

import Vue from 'vue'
import App from '@/js/App.vue'
import Router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import axios from 'axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vue-json-csv'
import bus from './bus'
import { GridPlugin, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids";

Vue.prototype.$bus = bus
Vue.use(GridPlugin);
Vue.use(Vuetify)
Vue.prototype.$axios = axios
const app = new Vue({
    el: '#app',
    vuetify: new Vuetify({
        icons: {
            iconfont: 'mdi',
        },
        components: { App },
    }),
    router: Router,
    render: h => h(App)
});

 
Vue.component('downloadCsv')

export default app;
