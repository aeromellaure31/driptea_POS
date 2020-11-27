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
                    <br>
                    <br>
                    <i>
                      <span
                        v-if="errorMessage !== null"
                        class="text-danger text-center"
                      >{{errorMessage}}</span>
                    </i>
                    <i>
                      <span
                        v-if="errorMessage2 !== null"
                        class="text-danger text-center"
                      >{{errorMessage2}}</span>
                    </i>
                    <v-row>
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
                    </v-row>
                    <v-btn type="button" class="btn btnRegister" @click="login" color="orange">Login</v-btn>
                    <i class="FP" @click="redirect()">Forgot Password</i>
                    <hr>
                    <center>
                      <v-btn
                        type="button"
                        class="ma-2"
                        outlined
                        color="orange"
                        @click="redirect('/register')"
                      >Create New Account</v-btn>
                    </center>
                  </v-form>
                </div><br>
              </center>
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
  font-size: 11px;
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
/* @media screen and (max-width: 600px) {
  .containerWidth {
    text-align: left;
    width: 100%;
    margin-left: 0px !important;
    margin-right: 0px !important;
  }
}
@media screen and (max-width: 900px) {
  .containerWidth {
    text-align: left;
    width: 70%;
  }
}
@media screen and (max-width: 1000px) {
  .containerWidth {
    text-align: left;
    width: 60%;
  }
} */
</style>
<script>
import ROUTER from "../router";
import AUTH from "../services/auth";
import image from "../../assets/logo.png";
import loading from "./loading.vue";
export default {
  name: "app",
  data() {
    return {
      show3: false,
      image: image,
      userName: "",
      password: "",
      errorMessage: null,
      errorMessage2: null,
      errorMessage3: null,
      loadingShow: false
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
    login(e) {
      e.preventDefault()
      this.loadingShow = true;
      this.validate("userName");
      this.validate("password");
      let parameter = {
        name: this.userName,
        password: this.password
      };
      if (this.userName === "" && this.password === "") {
        this.errorMessage = "Please fill in all required fields";
        this.loadingShow = false
      } else {
        this.authenticate(this.userName, this.password);
        this.loadingShow = false
      }
    },
    authenticate(name, password) {
      this.loadingShow = true;
      let credentials = {
        name: name,
        password: password
      };
      this.$axios
        .post(AUTH.url + "login", credentials)
        .then(response => {
          AUTH.setToken(response.data.token);
          AUTH.authenticateForAll();
          this.loadingShow = false;
        })
        .catch(err => {
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
    }
  }
};
</script>



