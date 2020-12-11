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
              @click="dialogFB = true"
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
    <template>
      <v-row justify="center">
          <v-dialog v-model="dialogFB" persistent max-width="600px">
              <v-card>
                  <div class="modal-header">
                    <span class="headline">Customer's Information</span>
                    <button type="button" class="close" @click="dialogFB = false">&times;</button><br>
                  </div>
                  <v-card-text>
                  NOTE: <span class="text-danger text-center">All fields are required</span>
                  <v-form>
                    <v-container>
                      <i><span v-if="error !== null" class="text-danger text-center">{{error}}</span></i><br>
                      <v-row>
                        <v-text-field label="Full name" outlined dense v-model="fullName" type="text" @keyup="validate('fullname')"></v-text-field>
                      </v-row>
                      <i><span v-if="error2 !== null" class="text-danger text-center">{{error2}}</span></i> <br>
                      <v-row>
                        <v-text-field label="Address" outlined dense v-model="address" type="text" @keyup="validate('address')"></v-text-field>
                      </v-row>  
                      <i><span v-if="error3 !== null" class="text-danger text-center">{{error3}}</span></i><br>
                      <v-row>
                        <v-text-field label="Phone number" outlined dense v-model="contactNumber" type="number" @keyup="validate('contactNumber')"></v-text-field> 
                      </v-row>
                    </v-container>
                  </v-form>
                  </v-card-text>
                  <v-card-actions>
                  <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialogFB = false"> Close</v-btn>
                    <v-btn color="blue darken-1" text  type="button" class="btn btn-primary" @click="continueFb()">Continue</v-btn>
                  </v-card-actions>
              </v-card>
          </v-dialog>
      </v-row>
    </template>
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
      loadingShow: false,
      error: null,
      error2: null,
      error3: null,
      dialogFB: false
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
    validate(param){
      let reqWhiteSpace = /\d/;
      let specialChar = /^[A-Za-z0-9 ]+$/;
      if(param === 'fullname'){
        this.error = null
        if (this.fullName === null || this.fullName === ''){
          this.error = 'Full name is required'
        } else if (reqWhiteSpace.test(this.fullName)) {
          this.error = "Full name should not contain a number.";
        } else if (!specialChar.test(this.fullName)) {
          this.error = "Full name should not contain a special character.";
        } else {
          this.error = null;
        }
      }else if(param === 'address'){
        this.error2 = null
        if (this.address === null || this.address === ''){
          this.error2 = 'Address is required'
        }else{
          this.error2 = null
        }
      }else if(param === 'contactNumber'){
        this.error3 = null
        if (this.contactNumber === '' || this.contactNumber === null){
          this.error3 = "Phone number is required";
        } else if (this.contactNumber.length > 11) {
          this.error3 = "Phone number must be 11 digits";
        } else if (this.contactNumber.length < 11) {
          this.error3 = "Phone number must be 11 digits";
        } else if (this.contactNumber.slice(0, 2) != "09") {
          this.error3 = "Phone number must start with 09";
        } else {
          this.error3 = null;
        }
      }
    },
    continueFb() {
      this.validate('fullname')
      this.validate('address')
      this.validate('contactNumber')
      if(this.fullName !== null && this.address !== null && this.contactNumber !== null &&
      this.fullName !== '' && this.address !== '' && this.contactNumber !== '' &&
      this.error === null && this.error2 === null && this.error3 === null){
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
      }
    },
  },
};
</script>

<style scoped>
/* .v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
} */

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
