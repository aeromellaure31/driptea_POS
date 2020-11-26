<template>
  <v-app id="inspire">
    <v-navigation-drawer v-if="admin !== null" v-model="drawer" app color="#ff5b04">
      <center>
        <v-sheet color="#ff5b04" class="pa-5">
          <v-avatar class="mb-10" size="100">
            <img :src="emptyImage">
          </v-avatar>
          <div style="color:white; margin-top:-10%;">{{username}}</div>
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
      <!-- <v-btn @click="playSound('file://resources/audio/notify.mp3')">Click</v-btn> -->
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
              v-if="storeOrder.length > 0"
              style="max-height: 300px; max-width: 300px"
              class="overflow-y-auto notifDropdown"
            >
              <v-list-item
                v-for="(item, index) in storeOrder"
                :key="index"
                @click="getOrder(item, $event)"
              >
                <v-list-item-title>{{notif(item)}}</v-list-item-title>
              </v-list-item>
            </v-list>
            <v-list
              v-if="storeOrder.length <= 0"
              style="max-height: 300px; max-width: 300px"
              class="overflow-y-auto notifDropdown"
            >
              <v-list-item>
                <v-list-item-title>- - - - No Order - - - -</v-list-item-title>
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
              v-if="storeOrder.length > 0"
              style="max-height: 300px; max-width: 300px"
              class="overflow-y-auto notifDropdown"
            >
              <v-list-item
                v-for="(item, index) in storeOrder"
                :key="index"
                @click="getOrder(item, $event)"
              >
                <v-list-item-title>{{notif(item)}}</v-list-item-title>
              </v-list-item>
            </v-list>
            <v-list
              v-if="storeOrder.length <= 0"
              style="max-height: 300px; max-width: 300px"
              class="overflow-y-auto notifDropdown"
            >
              <v-list-item>
                <v-list-item-title>- - - - No Order - - - -</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-app-bar-items>
      <v-app-bar-items>
        <div>
          <v-menu offset-y>
            <v-list
              style="max-height: 300px; max-width: 300px"
              class="overflow-y-auto notifDropdown"
            >
              <!-- ang Click kay wala pay nay method -->
              <!-- <product ref="product"></product> -->
              <v-list-item
                v-for="(item, index) in account"
                :key="index"
                @click="redirect(item.route+ (admin ? admin : cashier))"
              >
                <v-list-item-icon>
                  <v-icon color="black darken-2">{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" icon>
                <v-icon medium color="black" right>mdi-arrow-down-drop-circle</v-icon>
              </v-btn>
            </template>
          </v-menu>
        </div>
      </v-app-bar-items>
      <!-- <v-app-bar-items>
        <button class="btn" @click="logout()">Logout</button>
      </v-app-bar-items> -->
    </v-app-bar>

 <!-- online -->
     <v-app-bar class="onlineNav" color="#ff5b04" v-if="online !== null" fixed app>
      <a>
        <v-img max-height="64" max-width="42" :src="image" @click="redirect('/onlineDashboard')"></v-img>
      </a>
      <v-app-bar-title app name="thetitle">DRIPTEA</v-app-bar-title>
      <v-spacer></v-spacer>
          <v-btn icon style="margin-right: 3%;" @click="redirect('/onlineDashboard')">
              <v-icon>mdi-home</v-icon>
          </v-btn>
          <v-btn icon @click="redirect('/customerCart')" style="margin-right: 2%;">
              <v-icon>mdi-cart</v-icon>
              <span style="margin-left: -3%;">Cart</span>
              <span style="background-color: red; color: white; border-radius: 20%; font-size: 10px; margin-left: -10%; margin-top: -20%;">{{onlineCount > 0 ? 'New' : ''}}</span>
          </v-btn>
          <v-avatar>
            <v-img :src="emptyImage"></v-img>
          </v-avatar>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" icon>
                <v-icon medium color="black" right>mdi-arrow-down-drop-circle</v-icon>
              </v-btn>
            </template>
            <v-list>
                <v-list-item >
                    <v-list-item-title class="clickCursor" @click="viewProfile">Profile</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title class="clickCursor" @click="redirect('/orderHistory')">Order History</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title class="clickCursor" @click="logout()">Logout</v-list-item-title>
                </v-list-item>
            </v-list>
          </v-menu>
    </v-app-bar>

    <!-- Basic Header -->
    <v-app-bar class="onlineNav" color="#ff5b04" v-if="online === null && admin === null && cashier === null" fixed app>
      <a>
        <v-img max-height="64" max-width="42" :src="image" @click="redirect('/onlineDashboard')"></v-img>
      </a>
      <v-app-bar-title app name="thetitle">DRIPTEA</v-app-bar-title>
      <v-spacer></v-spacer>
         <div class="col-6 text-right">
          <v-btn icon style="margin-right: 3%;" @click="redirect('/login')">Login</v-btn>
          <v-btn icon @click="redirect('/register')" style="margin-right: 2%;">Register</v-btn>
        </div>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<style>
.clickCursor{
  cursor: pointer;
}
.logo {
  width: 60px;
  height: 60px;
}
.cashierNav {
  max-height: 65px;
}
.onlineNav {
  max-height: 65px;
  display: none;
  position: absolute;
}
.color {
  background: #89afe8;
}
</style>
<script>
import image from "../assets/logo.png";
// import profileImage from "../assets/logo.png";
import emptyImage from "../assets/empty.png";
import AUTH from "./services/auth";
import ROUTER from "./router";
import { mdiAccount } from "@mdi/js";
import { App } from "@/js/App.vue";
import config from "./config.js";
import product from "./modules/products/productCategory.vue";
import moment from 'moment'
export default {
  data: () => ({
    username: null,
    admin: localStorage.getItem("adminId"),
    cashier: localStorage.getItem("cashierId"),
    online: localStorage.getItem("customerId"),
    drawer: null,
    show: false,
    image: image,
    emptyImage: emptyImage,
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
      { icon: "mdi-account", text: "My Account", route: "/personalInfo/" },
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
        icon: "mdi-calendar-account",
        text: "Customers' Orders",
        route: "/allOrder"
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
    items: [],
    count: 0,
    onlineCount: 0
  }),
  components: {},
  mounted() {
    this.admin = localStorage.getItem("adminId");
    this.cashier = localStorage.getItem("cashierId");
    this.online = localStorage.getItem("customerId");
    if (this.admin || this.cashier || this.online) {
      this.retrieveImage();
      this.retrieve();
      this.loadingShow = true
      let params = {
        uname: this.admin ? this.admin : this.cashier ? this.cashier : this.online
      };
      this.$axios.post(AUTH.url + "getUserData", params, AUTH.config).then(response => {
        this.loadingShow = false
        this.username = response.data.userdata[0].fname + ' ' + response.data.userdata[0].lname;
      })
    }
    let pusher = new Pusher(this.config.PUSHER_APP_KEY, {
      cluster: this.config.PUSHER_APP_CLUSTER,
      secret: this.config.PUSHER_APP_SECRET,
      encrypted: false
    });
    let channel = pusher.subscribe("driptea-channel");
    let obj = this;
    pusher.logToConsole = true;

    channel.bind("driptea-data", data => {
      console.log('bolbol ate jess', data)
      if (data.order === "pendingCustomer") {
        // this.playSound('file://resources/audio/notify.mp3')
        this.playSound(
          "http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3"
        );
        this.retrieve();
      }
      if (data.order.image) {
        this.retrieveImage();
      }
      if (data.order.status === "incart") {
        this.onlineCount++;
      }
      if (data.order === "complete") {
        this.retrieve();
      }
    });
  },
  components: {
    product
  },
  methods: {
    notif(item){
      let date = moment(item.created_at).format('MM/DD/YYYY HH:mm');
      return item[0].get_customer[0].customerName + ' ' + date
    },
    playSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
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
      } else if (this.cashier != null) {
        if (route === "/logout/" + this.cashier) {
          this.logout();
        } else {
          ROUTER.push(route).catch(() => {});
        }
      } else if (this.online != null) {
        ROUTER.push(route).catch(() => {});
      }else{
        ROUTER.push(route).catch(() => {});
      }
    },
    getOrder(item, event) {
      localStorage.setItem("customer", item[0].customerId);
      localStorage.setItem("customerType", "online");
      ROUTER.push("/productCategory/online").catch(() => {});
    },
    retrieve() {
      let storage = [];
      this.$axios
        .post(AUTH.url + "retrieveOnlineOrder", {}, AUTH.config)
        .then(res => {
          if (res.data.status) {
            AUTH.deauthenticate();
          }
          this.tableData = res.data.order;
          Object.keys(this.tableData).forEach(element => {
            storage.push(this.tableData[element]);
          });
          this.storeOrder = storage;
          this.count = this.storeOrder.length;
        });
    },
    logout() {
      AUTH.deauthenticate();
    },
    viewProfile() {
      let id = localStorage.getItem("customerId");
      ROUTER.push("/personalInfo/" + id).catch(() => {});
    },
    retrieveImage() {
      this.loadingShow = true;
      let params = {
        uname: this.admin
          ? this.admin
          : this.cashier ? this.cashier : this.online
      };
      this.$axios
        .post(AUTH.url + "getUserData", params, AUTH.config)
        .then(res => {
          this.loadingShow = false;
          if (res.data.status) {
            AUTH.deauthenticate();
          }
          if (res.data.userdata[0].img) {
            this.emptyImage = res.data.userdata[0].img;
          }
        });
    }
  }
};
</script>
