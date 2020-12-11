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
                    <i>
                      <span
                        v-if="errorMessage2 !== null"
                        class="text-danger text-center"
                      >{{errorMessage2}}</span>
                    </i>
                    <v-row>
                      <v-text-field
                        color="orange"
                        label="New Password*"
                        outlined
                        v-model="password"
                        v-on:keyup="validate('password')"
                        :append-icon="show3 ? 'visibility' : 'visibility_off'"
                        :type="show3 ? 'text' : 'password'"
                        id="password"
                        required
                        @click:append="show3 = !show3"
                      ></v-text-field>
                    </v-row>
                    <i>
                      <span
                        v-if="errorMessage3 !== null"
                        class="text-danger text-center"
                      >{{errorMessage3}}</span>
                    </i>
                    <v-row>
                      <v-text-field
                        color="orange"
                        label="Confirm password*"
                        outlined
                        v-model="confirmPass"
                        v-on:keyup="validate('confirmPass')"
                        :append-icon="show4 ? 'visibility' : 'visibility_off'"
                        :type="show4 ? 'text' : 'password'"
                        id="confirm_password"
                        required
                        @click:append="show4 = !show4"
                      ></v-text-field>
                    </v-row>
                    <v-btn type="button" class="btn btnRegister" color="orange" @click="changePass()">Change Password</v-btn>
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
      email: this.$route.params.email,
      password: "",
      confirmPass: "",
      errorMessage: null,
      errorMessage2: null,
      errorMessage3: null,
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
    changePass(){
      this.validate('email')
      this.validate('password')
      this.validate('confirmPass')
      if(this.email !== this.$route.params.email){
        this.errorMessage2 = 'Email did not match'
      } else if(this.password !== '' && this.confirmPass !== '' && this.errorMessage === null &&
      this.errorMessage2 === null && this.errorMessage3 === null){
        this.loadingShow = true;
        let params = {
          email: this.email,
          password: this.password,
          confirmPass: this.confirmPass,
        }
        this.$axios
          .post(AUTH.url + "reset", params)
          .then(res => {
            this.loadingShow = false;
            if(res.data.data === 'true'){
              swal({
                text: "Successfully Changed Password",
                icon: "success"
              }).then(e => {
                this.redirect('/login');
              })
            }else{
              this.errorMessage = 'Email not recognize'
            }
        });
      }
    },
    validate(input) {
      this.successMessage = null;
      let reqWhiteSpace = /\d/;
      let specialChar = /^[A-Za-z0-9 ]+$/;
      if (input === "email") {
        this.errorMessage = null;
        if(this.email === ''){
          this.errorMessage === 'Email required'
        } else if (this.validateEmail(this.email) === false) {
          this.errorMessage = "You have entered an invalid email address.";
        } else {
          this.errorMessage = null;
        }
      } else if (input === "password") {
        this.errorMessage2 = null;
        if(this.password === ''){
          this.errorMessage2 = 'Password is required'
        } else if (this.password.length < 8) {
          this.errorMessage2 = "Password must be atleast 8 characters.";
        } else if (
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/.test(
            this.password
          )
        ) {
          this.successMessage = "Strong password.";
          this.errorMessage2 = null;
          this.errorMessage2 = null;
        } else {
          this.errorMessage2 =
            "Password must be alphanumeric characters. It should contain 1 number, 1 special character and 1 capital letter.";
        }
      } else if (input === "confirmPass") {
        this.errorMessage3 = null;
        this.successMessage = null;
        if (this.password.localeCompare(this.confirmPass) !== 0) {
          this.errorMessage3 = "Password did not match.";
        } else {
          this.errorMessage3 = null;
        }
      } else if (
        this.email !== null &&
        this.password !== null &&
        this.password.length >= 6 &&
        this.password.localeCompare(this.confirmPass) === 0 &&
        this.validateEmail(this.email) === true
      ) {
        this.errorMessage4 = null;
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



