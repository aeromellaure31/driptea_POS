require('./bootstrap');

import Vue from 'vue'
import App from '@/js/App.vue'
import Router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)
Vue.prototype.$axios = axios
const app = new Vue({
    el: '#app',
    vuetify: new Vuetify({
        icons: {
            iconfont: 'mdi',
        },
    }),
    router: Router,
    render: h => h(App)
});

export default app;
