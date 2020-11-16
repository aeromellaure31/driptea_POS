<template>
  <v-img
    :src="require('@/assets/landing1.jpg')"
    class="pr-16 pt-16"
    height="100vh"
  >
    <v-card class="float-right mr-16 pa-5 mt-16" width="400">
      <center>
        <img class="logo" :src="image" />
        <br />
      </center>
      <i>
        <span v-if="errorMessage !== null" class="text-danger text-center">{{
          errorMessage
        }}</span>
      </i>
      <i>
        <span v-if="errorMessage2 !== null" class="text-danger text-center">{{
          errorMessage2
        }}</span>
      </i>

      <v-form ref="form" lazy-validation class="mx-auto">
        <v-text-field
          color="orange"
          label="Username*"
          outlined
          v-model="userName"
          v-on:keyup="validate('userName')"
          type="text"
          id="userName"
          required
        ></v-text-field>

        <i>
          <span v-if="errorMessage3 !== null" class="text-danger text-center">{{
            errorMessage3
          }}</span>
        </i>

        <v-text-field
          color="orange"
          label="Password*"
          outlined
          v-model="password"
          v-on:keyup="validate('password')"
          :append-icon="show3 ? 'visibility' : 'visibility_off'"
          :type="show3 ? 'text' : 'password'"
          id="password"
          required
          @click:append="show3 = !show3"
        ></v-text-field>
        <a href class="FP">Forgot Password</a><br />
        <center>
          <v-btn
            type="button"
            class="btn btnRegister ml-12"
            @click="login"
            color="orange"
            >Login</v-btn
          >
        </center>

        <hr />
        <center>
          <v-btn
            type="button"
            class="ma-2"
            outlined
            color="orange"
            @click="redirect('/register')"
            >Create New Account</v-btn
          >
        </center>
      </v-form>
    </v-card>
  </v-img>
</template>


<script>
import image from "../../assets/logo.png";
import ROUTER from "../router";
import AUTH from "../services/auth";
import loading from "./loading.vue";
export default {
  components: {
    loading,
  },
  data() {
    el: "#app";
    return {
      image: image,
      show3: false,
      userName: "",
      password: "",
      errorMessage: null,
      errorMessage2: null,
      errorMessage3: null,
      loadingShow: false,
    };
  },
  methods: {
    redirect(route) {
      ROUTER.push(route).catch(() => {});
    },

    login(e) {
      e.preventDefault();
      this.loadingShow = true;
      this.validate("userName");
      this.validate("password");
      let parameter = {
        name: this.userName,
        password: this.password,
      };
      if (this.userName === "" && this.password === "") {
        this.errorMessage = "Please fill in all required fields";
        this.loadingShow = false;
      } else {
        this.authenticate(this.userName, this.password);
        this.loadingShow = false;
      }
    },
    authenticate(name, password) {
      this.loadingShow = true;
      let credentials = {
        name: name,
        password: password,
      };
      this.$axios
        .post(AUTH.url + "login", credentials)
        .then((response) => {
          AUTH.setToken(response.data.token);
          AUTH.authenticateForAll();
          this.loadingShow = false;
        })
        .catch((err) => {
          if (err.response.status === 400) {
            this.errorMessage = "Invalid credentials!";
          }
          this.loadingShow = false;
        });
    },
    validate(input) {
      this.successMessage = null;
      if (input === "userName") {
        this.errorMessage2 = null;
        if (this.userName === "") {
          this.errorMessage2 = "Username is required.";
        } else {
          this.errorMessage2 = null;
        }
      } else if (input === "password") {
        this.errorMessage3 = null;
        if (this.password === "") {
          this.errorMessage3 = "Password is required.";
        } else {
          this.errorMessage3 = null;
        }
      } else {
        this.errorMessage = null;
        this.errorMessage = "Please fill in all required fields.";
      }
    },
  },
};
</script>
<style>
</style>
