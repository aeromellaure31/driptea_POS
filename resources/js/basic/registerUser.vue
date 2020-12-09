<template>
  <v-img :src="require('@/assets/landing1.jpg')" style="width: 100%; height: 100%;">
    <div class="container">
      <v-card class="mx-auto" width="400" max-height="2000">
        <center>
          <img style="height: 150px; margin-top: 1%;" :src="image" v-on:click="redirect('/')">
          <p>
            Register to
            <b class="bRegister" @click="redirect('/')">Driptea</b>
          </p>
          <div>
            <i>
              <span v-if="errorMessage7 !== null" class="text-danger text-center">{{errorMessage7}}</span>
            </i>
          </div>
        </center>
        <center>
          <div class="containerWidth">
            <v-form>
              <center>
                <i>
                  <span
                    v-if="errorMessage1 !== null"
                    class="text-danger text-center"
                  >{{errorMessage1}}</span>
                </i>
                <i>
                  <span
                    v-if="errorMessage2 !== null"
                    class="text-danger text-center"
                  >{{errorMessage2}}</span>
                </i>

                <v-flex>
                  <v-text-field
                    color="orange"
                    label="First name"
                    outlined
                    v-model="firstname"
                    v-on:keyup="validate('firstname')"
                    type="text"
                    id="firstname"
                    required
                  ></v-text-field>
                </v-flex>

                <i>
                  <span
                    v-if="errorMessage12 !== null"
                    class="text-danger text-center"
                  >{{errorMessage12}}</span>
                </i>
                <i>
                  <span
                    v-if="errorMessage13 !== null"
                    class="text-danger text-center"
                  >{{errorMessage13}}</span>
                </i>

                <v-flex>
                  <v-text-field
                    color="orange"
                    label="Last name"
                    outlined
                    v-model="lastname"
                    v-on:keyup="validate('lastname')"
                    type="text"
                    id="lastname"
                    required
                  ></v-text-field>
                </v-flex>

                <i>
                  <span
                    v-if="errorMessage10 !== null"
                    class="text-danger text-center"
                  >{{errorMessage10}}</span>
                </i>

                <v-flex>
                  <v-text-field
                    color="orange"
                    label="Address"
                    outlined
                    v-model="address"
                    v-on:keyup="validate('address')"
                    type="text"
                    id="address"
                    required
                  ></v-text-field>
                </v-flex>
                <i>
                  <span
                    v-if="errorMessage8 !== null"
                    class="text-danger text-center"
                  >{{errorMessage8}}</span>
                </i>
                <i>
                  <span
                    v-if="errorMessage9 !== null"
                    class="text-danger text-center"
                  >{{errorMessage9}}</span>
                </i>

                <v-flex>
                  <v-text-field
                    color="orange"
                    label="Phone number"
                    outlined
                    v-model="contactNum"
                    v-on:keyup="validate('contact')"
                    type="number"
                    id="contactNum"
                    required
                  ></v-text-field>
                </v-flex>

                <i>
                  <span
                    v-if="errorMessage14 !== null"
                    class="text-danger text-center"
                  >{{errorMessage14}}</span>
                </i>
                <i>
                  <span
                    v-if="errorMessage15 !== null"
                    class="text-danger text-center"
                  >{{errorMessage15}}</span>
                </i>
                <i>
                  <span
                    v-if="errorMessage16 !== null"
                    class="text-danger text-center"
                  >{{errorMessage16}}</span>
                </i>
                <v-flex>
                  <v-text-field
                    color="orange"
                    label="Username"
                    outlined
                    v-model="username"
                    v-on:keyup="validate('username')"
                    type="text"
                    id="username"
                    required
                  ></v-text-field>
                </v-flex>
                <i>
                  <span
                    v-if="errorMessage3 !== null"
                    class="text-danger text-center"
                  >{{errorMessage3}}</span>
                </i>
                <v-flex>
                  <v-text-field
                    color="orange"
                    label="Email"
                    outlined
                    v-model="email"
                    v-on:keyup="validate('email')"
                    type="email"
                    id="email"
                    required
                  ></v-text-field>
                </v-flex>
                <span
                  v-if="successMessage !== null"
                  class="text-success text-center"
                >{{successMessage}}</span>
                <i>
                  <span
                    v-if="errorMessage4 !== null"
                    class="text-danger text-center"
                  >{{errorMessage4}}</span>
                </i>
                <i>
                  <span
                    v-if="errorMessage5 !== null"
                    class="text-danger text-center"
                  >{{errorMessage5}}</span>
                </i>
                <v-flex>
                  <v-text-field
                    color="orange"
                    :append-icon="show3 ? 'visibility' : 'visibility_off'"
                    :type="show3 ? 'text' : 'password'"
                    label="Password"
                    outlined
                    v-model="password"
                    v-on:keyup="validate('password')"
                    id="password"
                    required
                    @click:append="show3 = !show3"
                  ></v-text-field>
                </v-flex>
                <i>
                  <span
                    v-if="errorMessage6 !== null"
                    class="text-danger text-center"
                  >{{errorMessage6}}</span>
                </i>
                <v-flex>
                  <v-text-field
                    color="orange"
                    label="Confirm password"
                    outlined
                    v-model="confirmPass"
                    v-on:keyup="validate('confirmPass')"
                    :append-icon="show4 ? 'visibility' : 'visibility_off'"
                    :type="show4 ? 'text' : 'password'"
                    id="confirmPassword"
                    required
                    @click:append="show4 = !show4"
                  ></v-text-field>
                </v-flex>
                <v-btn
                  type="submit"
                  outlined
                  color="orange"
                  @click="register"
                  class="btn register"
                >Register</v-btn>
              </center>
            </v-form>
          </div>
          <div>
            <center>
              <label class="termsCondition">
                By signing up, you agree to our
                <b class="bRegister" @click="redirect('/')">Terms</b> and
                <b class="bRegister" @click="redirect('/')">Conditions</b>
              </label>
              <hr>
              <label class="termsCondition">
                Already have an account?
                <b class="bRegister" v-on:click="redirect('/login')">Login</b>
              </label>
            </center>
          </div>
        </center>
      </v-card>
      <loading v-if="loadingShow"></loading>
    </div>
  </v-img>
</template>
<style scoped>
.register {
  width: 50%;
}
/* .container {
  border: orange solid 1px;
  margin-bottom: 2%;
  margin-top: 2%;
  width: 60%;
  background-color: white;
} */
span {
  font-size: 12px;
}
/* // hr{
//     border: 1px solid #17D817;
// } */
.termsCondition {
  margin-top: 6%;
  font-size: 15px;
  text-align: center;
}
/* // .form-control {
//   border: 1px solid #17d817;
//   border-radius: 5px;
// } */
.bRegister {
  color: orange;
  cursor: pointer;
}
p {
  font-size: 20px;
}
/* // .btnRegister {
//   margin-top: 2%;
//   margin-bottom: 2%;
//   background-color: #17d817;
//   font-weight: bold;
//   width: 100%;
// } */
.containerWidth {
  width: 80%;
  text-align: left;
  margin-left: 5%;
  margin-right: 5%;
}
</style>
<script>
import swal from "sweetalert";
import ROUTER from "../router";
import AUTH from "../services/auth";
import image from "../../assets/logo.png";
import loading from "./loading.vue";
export default {
  name: "app",
  data() {
    return {
      show3: false,
      show4: false,
      type: "Customer",
      image: image,
      firstname: "",
      lastname: "",
      username: "",
      address: "",
      contactNum: "",
      email: "",
      password: "",
      confirmPass: "",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match"
      },
      successMessage: null,
      errorMessage1: null,
      errorMessage2: null,
      errorMessage3: null,
      errorMessage4: null,
      errorMessage5: null,
      errorMessage6: null,
      errorMessage7: null,
      errorMessage8: null,
      errorMessage9: null,
      errorMessage10: null,
      errorMessage11: null,
      errorMessage12: null,
      errorMessage13: null,
      errorMessage14: null,
      errorMessage15: null,
      errorMessage16: null,
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
    register(e) {
      e.preventDefault();
      this.loadingShow = true;
      this.validate("firstname");
      this.validate("lastname");
      this.validate("username");
      this.validate("address");
      this.validate("contact");
      this.validate("email");
      this.validate("password");
      this.validate("confirmPass");
      let parameter = {
        account_type: this.type,
        firstname: this.firstname,
        lastname: this.lastname,
        address: this.address,
        contactNumber: this.contactNum,
        email: this.email,
        name: this.username,
        password: this.password,
        password_confirmation: this.confirmPass
      };
      if (
        this.errorMessage1 === null &&
        this.errorMessage2 === null &&
        this.errorMessage3 === null &&
        this.errorMessage4 === null &&
        this.errorMessage5 === null &&
        this.errorMessage6 === null &&
        this.errorMessage7 === null &&
        this.errorMessage8 === null &&
        this.errorMessage9 === null &&
        this.errorMessage10 === null &&
        this.errorMessage11 === null &&
        this.errorMessage12 === null &&
        this.errorMessage13 === null &&
        this.errorMessage14 === null &&
        this.errorMessage15 === null &&
        this.errorMessage16 === null
      ) {
        this.$axios
          .post(AUTH.url + "register", parameter)
          .then(response => {
            this.loadingShow = false;
            swal({
              title: "You have successfully registered!",
              icon: "success"
            }).then(el => {
              this.authenticate(this.username, this.password);
            });
          })
          .catch(error => {
            if (error.response.status === 300) {
              this.errorMessage14 = "Username already exist";
            }
            if (error.response.status === 301) {
              this.errorMessage3 = "Email already exist";
            }
            this.loadingShow = false;
          });
      } else {
        // this.errorMessage1 = "Please fill up all fields";
        this.loadingShow = false;
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
      let reqWhiteSpace = /\d/;
      let reqSpace = /\s/;
      let specialChar = /^[A-Za-z0-9 ]+$/;
      if (input === "firstname") {
        this.errorMessage1 = null;
        if (reqWhiteSpace.test(this.firstname)) {
          this.errorMessage1 = "First name should not contain a number.";
        } else if (this.firstname === "") {
          this.errorMessage2 = "First name is required.";
        } else if (!specialChar.test(this.firstname)) {
          this.errorMessage2 =
            "First name should not contain a special character.";
        } else {
          this.errorMessage1 = null;
          this.errorMessage2 = null;
        }
      } else if (input === "lastname") {
        this.errorMessage12 = null;
        if (reqWhiteSpace.test(this.lastname)) {
          this.errorMessage12 = "Last name should not contain a number.";
        } else if (this.lastname === "") {
          this.errorMessage13 = "Last name is required.";
        } else if (!specialChar.test(this.lastname)) {
          this.errorMessage13 =
            "Last name should not contain a special character.";
        } else {
          this.errorMessage12 = null;
          this.errorMessage13 = null;
        }
      } else if (input === "username") {
        this.errorMessage14 = null;
        if (reqSpace.test(this.username)) {
          this.errorMessage14 = "Username should not contain a space.";
        } else if (this.username === "") {
          this.errorMessage14 = "Username is required.";
        } else if (this.username.length < 6) {
          this.errorMessage14 = "Username must be atleast 6 characters";
        } else {
          this.errorMessage14 = null;
          this.errorMessage14 = null;
          this.errorMessage14 = null;
        }
      } else if (input === "email") {
        this.errorMessage3 = null;
        if(this.email === ''){
          this.errorMessage3 = "Email is required";
        } else if (this.validateEmail(this.email) === false) {
          this.errorMessage3 = "You have entered an invalid email address";
        } else {
          this.errorMessage3 = null;
        }
      } else if (input === "password") {
        this.errorMessage4 = null;
        if(this.password === ''){
          this.errorMessage4 = "Password is required";
        } else if (this.password.length < 8) {
          this.errorMessage4 = "Password must be atleast 8 characters.";
        } else if (
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/.test(
            this.password
          )
        ) {
          this.successMessage = "Strong password.";
          this.errorMessage4 = null;
          this.errorMessage5 = null;
        } else {
          this.errorMessage5 =
            "Password must be alphanumeric characters. It should contain 1 number, 1 special character and 1 capital letter.";
        }
      } else if (input === "confirmPass") {
        this.errorMessage6 = null;
        this.successMessage = null;
        if(this.confirmPass === ''){
          this.errorMessage6 = "Confirm password is required";
        } else if (this.password.localeCompare(this.confirmPass) !== 0) {
          this.errorMessage6 = "Password did not match.";
        } else {
          this.errorMessage6 = null;
        }
      } else if (input === "address") {
        this.errorMessage10 = null;
        if (this.address === "") {
          this.errorMessage10 = "Address is required.";
        } else {
          this.errorMessage10 = null;
        }
      } else if (input === "contact") {
        this.errorMessage8 = null;
        this.successMessage9 = null;
        if (this.contactNum === ''){
          this.errorMessage8 = "Phone number is required";
        } else if (this.contactNum.length > 11) {
          this.errorMessage8 = "Phone number must be 11 digits";
        } else if (this.contactNum.length < 11) {
          this.errorMessage9 = "Phone number must be 11 digits";
        } else if (this.contactNum.slice(0, 2) != "09") {
          this.errorMessage9 = "Phone number must start with 09";
        } else {
          this.errorMessage8 = null;
          this.errorMessage9 = null;
        }
      } else if (
        this.contactNum != null &&
        this.address != null &&
        this.firstname.length >= 6 &&
        this.email !== null &&
        this.password !== null &&
        this.password.length >= 6 &&
        this.password.localeCompare(this.confirmPass) === 0 &&
        this.type !== null &&
        this.validateEmail(this.email) === true
      ) {
        this.errorMessage1 = null;
      } else {
        // this.errorMessage7 = "Please fill in all required fields.";
        this.errorMessage7 = null;
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
