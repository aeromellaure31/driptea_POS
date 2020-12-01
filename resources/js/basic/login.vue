<template>
  <v-card color="grey lighten-4" flat height="100%" max-width="100%">
    <center>
      <div class="row body">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <center>
            <img class="logo" :src="image">
            <br>
            <span class="quote">Your Daily Dose of Milktea.</span>
          </center>
          <v-card class="mx-auto" max-width="400">
              <center>
                <div class="containerWidth">
                  <v-form ref="form" lazy-validation>
                    <br><br>
                    <i>
                      <span
                        v-if="errorMessage !== null"
                        class="text-danger text-center"
                      >{{errorMessage}}</span>
                    </i>
                    <v-row>
                      <v-text-field
                        color="orange"
                        label="Email address*"
                        outlined
                        v-model="email"
                        v-on:keyup="validate('email')"
                        type="text"
                        required
                      ></v-text-field>
                    </v-row>
                    <v-btn type="button" class="btn btnRegister" color="orange" @click="sendCode()">Continue</v-btn>
                  </v-form>
                </div>
              </center><br>
          </v-card>
        </div>
        <div class="col-sm-3"></div>
      </div>
      <loading v-if="loadingShow"></loading>
    </center>
  </v-card>
</template>
<style scoped>
.body {
  width: 80%;
}
.col-sm-6 {
  margin-top: 7%;
}
.quote {
  font-size: 25px;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
}
.FP {
  font-style: italic;
  font-size: 15px;
}
/* .whole {
  background-color: gray;
} */
.logo {
  height: 30%;
  width: 30%;
}
img {
  cursor: default;
}
span {
  font-size: 12px;
}
.termsCondition {
  margin-top: 6%;
  font-size: 15px;
  text-align: center;
}
p {
  font-size: 20px;
}
.btnRegister {
  margin-top: 2%;
  margin-bottom: 2%;
  font-weight: bold;
  width: 100%;
}
.containerWidth {
  width: 80%;
  text-align: left;
}
</style>
<script>
import ROUTER from "../router";
import AUTH from "../services/auth";
import image from "../../assets/logo.png";
import loading from "./loading.vue";
import swal from "sweetalert";
export default {
  name: "app",
  data() {
    return {
      show3: false,
      show4: false,
      image: image,
      email: '',
      errorMessage: null,
      successMessage: null,
      loadingShow: false,
    };
  },
  mounted() {},
  components: {
    loading
  },
  methods: {
    redirect(route) {
      ROUTER.push(route).catch(() => {});
    },
    sendCode(){
      if(this.errorMessage === null && this.email !== ''){
        this.loadingShow = true;
        let params = {
          email: this.email
        }
        this.$axios
          .post(AUTH.url + "sendCode", params)
          .then(res => {
            this.loadingShow = false;
            if(res.data.data.status === 'true'){
              swal({
                text: "Verification Sent to " + this.email,
                icon: "success",
                dangerMode: true
              }).then(e => {
                this.email = ''
                this.redirect('/verifyCode/' + res.data.data.id)
              })
            }else{
              this.errorMessage = 'Email not recognize'
            }
        });
      }else{
         this.errorMessage = "Please input your email address"
      }
    },
    validate(input) {
      this.successMessage = null;
      let reqWhiteSpace = /\d/;
      let specialChar = /^[A-Za-z0-9 ]+$/;
      if (input === "email") {
        this.errorMessage = null;
        if(this.email === ''){
          this.errorMessage = "Email is required";
        } else if (this.validateEmail(this.email) === false) {
          this.errorMessage = "You have entered an invalid email address.";
        } else {
          this.errorMessage = null;
        }
      } else if (
        this.email !== null &&
        this.validateEmail(this.email) === true
      ) {
        this.errorMessage = null;
      }
    },
    validateEmail(email) {
      let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+.[a-zA-Z0-9]*$/;
      if (reg.test(email) === false) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>



