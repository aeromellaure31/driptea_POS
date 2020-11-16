<template>
  <v-app id="inspire">
    <v-navigation-drawer v-if="admin !== null" v-model="drawer" app color="#ff5b04">
      <center>
        <v-sheet color="#ff5b04" class="pa-5">
          <v-avatar class="mb-10" color="grey darken-1" size="64"></v-avatar>
          <div style="color:white">Aeromel Laure</div>
        </v-sheet>
      </center>
      <v-divider></v-divider>
      <v-list>
        <v-list-item-group active-class="#ff5b04">
          <v-list-item
            v-for="(item, index) in employee"
            :key="index"
            link
            @click="redirect(item.route)"
          >
            <v-list-item-icon>
              <v-icon color="white darken-2">{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="white--text lighten-1--text">{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="#ff5b04" v-if="admin !== null" app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-img max-height="64" max-width="42" :src="image"></v-img>
      <v-app-bar-title app name="thetitle">DRIPTEA</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-app-bar-items name="theitem" class="hidden-sm-and-down" app>
        <div>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" icon>
                <v-icon medium color="black" right>mdi-bell-ring</v-icon>
                <span style="background-color: white; color: red; border-radius: 50%; font-size: 15px; margin-left: -5%; margin-top: -25%; z-index: 9999">{{count > 0 ? '&nbsp;' + count + '&nbsp;' : ''}}</span>
              </v-btn>
            </template>
            <v-list
              style="max-height: 300px; max-width: 300px"
              class="overflow-y-auto notifDropdown"
            >
              <v-list-item
                v-for="(item, index) in storeOrder"
                :key="index"
                @click="getOrder(item, $event)"
              >
                <v-list-item-title>{{ item[0].get_customer[0].customerName }} has order</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-app-bar-items>
      <v-app-bar-items>
        <div>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" icon>
                <v-icon medium color="black" right>mdi-arrow-down-drop-circle</v-icon>
              </v-btn>
            </template>
            <v-list
              style="max-height: 300px; max-width: 300px"
              class="overflow-y-auto notifDropdown"
            >
              <!-- ang Click kay wala pay nay method -->
              <!-- <product ref="product"></product> -->
              <v-list-item
                v-for="(item, index) in account"
                :key="index"
                @click="redirect(item.route+admin)"
              >
                <v-list-item-icon>
                  <v-icon color="black darken-2">{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-app-bar-items>
    </v-app-bar>
    <v-app-bar class="cashierNav" color="#ff5b04" v-if="cashier !== null">
      <a>
        <v-img max-height="64" max-width="42" :src="image" @click="redirect('/casherDashboard')"></v-img>
      </a>
      <v-app-bar-title app name="thetitle">DRIPTEA</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-app-bar-items name="theitem" class="hidden-sm-and-down" app>
        <div>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" icon>
                <v-icon medium color="black" right>mdi-bell-ring</v-icon>
                <span style="background-color: white; color: red; border-radius: 50%; font-size: 15px; margin-left: -5%; margin-top: -25%; z-index: 9999">{{count > 0 ? '&nbsp;' + count + '&nbsp;' : ''}}</span>
              </v-btn>
            </template>
            <v-list
              style="max-height: 300px; max-width: 300px"
              class="overflow-y-auto notifDropdown"
            >
              <v-list-item
                v-for="(item, index) in storeOrder"
                :key="index"
                @click="getOrder(item, $event)"
              >
                <v-list-item-title>{{ item[0].get_customer[0].customerName }} has order</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-app-bar-items>
      <v-app-bar-items>
        <div>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" icon>
                <v-icon medium color="black" right>mdi-arrow-down-drop-circle</v-icon>
              </v-btn>
            </template>
            <!-- <v-list
              style="max-height: 300px; max-width: 300px"
              class="overflow-y-auto notifDropdown"
            >
              <v-list-item
                v-for="(item, index) in account"
                :key="index"
                @click="redirect(item.route+cashier)"
              >
                <v-list-item-title>{{ item[0].get_customer[0].customerName }} has order</v-list-item-title>
              </v-list-item>
            </v-list> -->
          </v-menu>
        </div>
      </v-app-bar-items>
      <v-app-bar-items>
        <button class="btn" @click="logout()">Logout</button>
      </v-app-bar-items>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style>
.logo {
  width: 60px;
  height: 60px;
}
.cashierNav {
  max-height: 65px;
}
.color {
  background: #89afe8;
}
</style>
<script>
import image from "../assets/logo.png";
import AUTH from "./services/auth";
import ROUTER from "./router";
import { mdiAccount } from "@mdi/js";
import { App } from "@/js/App.vue";
import config from "./config.js";
import product from "./modules/products/productCategory.vue";
export default {
  data: () => ({
    username: null,
    admin: localStorage.getItem("adminId"),
    cashier: localStorage.getItem("cashierId"),
    drawer: null,
    show: false,
    image: image,
    auth: AUTH,
    token: null,
    dialog: false,
    config: config,
    tableData: [],
    storeOrder: [],
    nav: [
      {
        icon: "home",
        text: "Home",
        title: "Back to Home page",
        active: true
      },
      {
        icon: "info",
        text: "About",
        title: "About this demo",
        active: false
      },
      {
        icon: "assignment_turned_in",
        text: "Todos",
        title: "Some stuff that needs doing",
        active: false
      },
      {
        icon: "email",
        text: "Contact",
        title: "Our Contact info",
        active: false
      }
    ],
    account: [
      { icon: "mdi-account", text: "My Account", route: "/myprofile/" },
      { icon: "mdi-logout", text: "Logout", route: "/logout/" }
    ],
    employee: [
      { icon: "mdi-apps", text: "Dashboard", route: "/adminDashboard" },
      {
        icon: "mdi-poll",
        text: "Sales Inventory",
        route: "/salesInventory"
      },
      {
        icon: "mdi-calendar-account",
        text: "Order Inventory",
        route: "/orderInventory"
      },
      {
        icon: "mdi-cup",
        text: "Cups Inventory",
        route: "/cupsInventory"
      },
      {
        icon: "mdi-plus-box",
        text: "Adding",
        route: "/addProductCategoryAddOns"
      },
      {
        icon: "mdi-point-of-sale",
        text: "POS",
        route: "/casherDashboard"
      },
      {
        icon: "mdi-account-multiple-plus",
        text: "Register Account",
        route: "/registerAccount"
      }
    ],
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2...................." }
    ],
    count: 0
  }),
  components: {},
  mounted() {
    this.admin = localStorage.getItem("adminId");
    this.cashier = localStorage.getItem("cashierId");
    if(this.admin || this.cashier){
      this.retrieve();
    }
    let pusher = new Pusher(this.config.PUSHER_APP_KEY, {
      cluster: this.config.PUSHER_APP_CLUSTER,
      encrypted: true
    });
    let channel = pusher.subscribe("driptea-channel");
    let obj = this;
    channel.bind("driptea-data", data => {
      this.retrieve();
    });
  },
  components: {
    product
  },
  methods: {
    menuItems() {
      return this.menu;
    },
    redirect(route) {
      if (this.admin != null) {
        if (route === "/logout/" + this.admin) {
          this.logout();
        } else {
          ROUTER.push(route).catch(() => {});
        }
      }else if (this.cashier != null) {
        if (route === "/logout/" + this.cashier) {
          this.logout();
        } else {
          ROUTER.push(route).catch(() => {});
        }
      }
    },
    getOrder(item, event) {
      event.target.classList.add("color");
      localStorage.setItem("customerId", item[0].customerId);
      localStorage.setItem("customerType", "online");
      ROUTER.push("/productCategory/online").catch(() => {});
    },
    retrieve() {
      let storage = [];
      this.$axios.post(AUTH.url + "retrieveOnlineOrder", {}, AUTH.config).then(res => {
        if(res.data.status){
            AUTH.deauthenticate()
        }
        this.tableData = res.data.order;
        Object.keys(this.tableData).forEach(element => {
          storage.push(this.tableData[element]);
        });
        this.storeOrder = storage;
        this.count = this.storeOrder.length
      });
    },
    logout() {
      AUTH.deauthenticate();
    }
  }
};
</script>