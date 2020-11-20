<template>
  <v-container fill-height fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" md="4" sm="12">
        <v-hover v-slot:default="{ hover }" open-delay="200">
          <v-card
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            height="250"
            max-width="350"
          >
            <v-img
            max-width="350"
              height="250"
              :src="require('@/assets/walkin.jpg')"
              @click="redirect('walkin')"
            ></v-img>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" md="4" sm="12">
        <v-hover v-slot:default="{ hover }" open-delay="200">
          <v-card
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            height="250"
            max-width="350"
          >
            <v-img
              max-width="350"
              height="250"
              data-toggle="modal" 
              data-target="#viewDetails"
              :src="require('@/assets/fb1.png')"
            ></v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col  cols="12" md="4" sm="12">
        <v-hover v-slot:default="{ hover }" open-delay="200">
          <v-card
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            height="250"
            max-width="350"
          >
            <v-img
            max-width="350"
              height="250"
              :src="require('@/assets/foodpanda1.png')"
              @click="redirect('foodpanda')"
            ></v-img>
          </v-card>
        </v-hover>
      </v-col>
      <v-col  cols="12" md="4" sm="12">
        <v-hover v-slot:default="{ hover }" open-delay="200">
          <v-card
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            height="250"
            max-width="350"
          >
            <v-img
            max-width="350"
              height="250"
              :src="require('@/assets/grab2.png')"
              @click="redirect('grab')"
            ></v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <div class="modal fade" id="viewDetails" role="dialog">
      <div class="modal-dialog modal-lg">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <h3>Customer's Information</h3>
            <button type="button" class="close" data-dismiss="modal">
              &times;</button
            ><br />
          </div>
          <div class="modal-body">
            <div>
              <form>
                <div class="form-group">
                  <label for="fName" style="font-size: 15px; font-weight: bold"
                    >Fullname:</label
                  >
                  <input class="form-control" type="text" v-model="fullName" />
                </div>
                <div class="form-group">
                  <label
                    for="address"
                    style="font-size: 15px; font-weight: bold"
                    >Address:</label
                  >
                  <input class="form-control" type="text" v-model="address" />
                </div>
                <div class="form-group">
                  <label
                    for="contactNumber"
                    style="font-size: 15px; font-weight: bold"
                    >Contact Number:</label
                  >
                  <input
                    class="form-control"
                    type="text"
                    v-model="contactNumber"
                  />
                </div>
              </form>
            </div>
          </div>
          <div class="modal-footer">
            <!-- <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button> -->
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              @click="continueFb()"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
    <loading v-if="loadingShow"></loading>
  </v-container>
</template>

<script>
import AUTH from "../../services/auth";
import ROUTER from "../../router";
import loading from '../../basic/loading.vue';
export default {
  data() {
    return {
      fullName: null,
      address: null,
      contactNumber: null,
      loadingShow: false
    };
  },
  components: {
    loading
  },
  methods: {
    redirect(type) {
      if (type !== "fb") {
        this.loadingShow = true
        let parameter = {
          customerType: type,
        };
        this.$axios.post(AUTH.url + "addCustomer", parameter, AUTH.config).then((res) => {
          if(res.data.status){
              AUTH.deauthenticate()
          }
          localStorage.setItem("customer", res.data.customerDetails.id);
          localStorage.setItem(
            "customerType", res.data.customerDetails.customerType
          );
          this.loadingShow = false
          ROUTER.push("/productCategory/" + res.data.customerDetails.customerType).catch(() => {});
        });
      }
    },
    continueFb() {
      this.loadingShow = true
      let param = {
        customerType: "fb",
        customerName: this.fullName,
        customerAddress: this.address,
        customerContactNumber: this.contactNumber,
      };
      this.$axios.post(AUTH.url + "addCustomer", param, AUTH.config).then((response) => {
        if(response.data.status){
            AUTH.deauthenticate()
        }
        localStorage.setItem("customer", response.data.customerDetails.id);
        localStorage.setItem(
          "customerType",
          response.data.customerDetails.customerType
        );
        this.loadingShow = false
        ROUTER.push("/productCategory/fb").catch(() => {});
      });
    },
  },
};
</script>

<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
