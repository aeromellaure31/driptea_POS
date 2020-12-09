<template>
  <div class="container">
    <v-data-table
      :headers="headersForCup"
      :items="userData"
      :search="search"
      :items-per-page="5"
      class="elevation-3">
      <template v-slot:top>
        <v-toolbar class="mb-2" color="#ff5b04" dark flat>
          <v-toolbar-title class="col pa-3 py-4 white--text">User Details</v-toolbar-title>
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            prepend-inner-icon="mdi-magnify"
            class="mt-10"
            label="Search"
          ></v-text-field>
          <v-divider class="mx-4" vertical></v-divider>
          <v-btn color="primary" class="mr-6" @click="addAccount()">+ Account</v-btn>
        </v-toolbar>
      </template>
    </v-data-table>
    <center>
      <div class="containerWidth">
        <template>
            <v-row justify="center">
                <v-dialog v-model="showModal" persistent max-width="600px">
                    <v-card>
                        <div class="modal-header">
                          <span class="headline">ADD USER</span>
                          <button type="button" class="close" @click="showModal = false">&times;</button><br>
                        </div>
                        <v-card-text>
                        NOTE: <span class="text-danger text-center">All fields are required</span>
                        <div class="row">
                          <div class="col-sm-3"></div>
                          <div class="col-sm-6">
                            <i>
                              <span
                                v-if="errorMessage17 !== null"
                                class="text-danger text-center"
                              >{{errorMessage17}}</span>
                            </i>
                            <v-row>
                              <v-flex xs12 sm11>
                                <v-select
                                style="height: 56px"
                                :items="['Customer', 'Cashier', 'Admin']"
                                label="User Type"
                                dense
                                outlined
                                v-model="userType"
                                ></v-select>
                              </v-flex>
                            </v-row>
                          </div>
                          <div class="col-sm-3"></div>
                        </div>
                        <v-form>
                          <div class="row">
                            <div class="col-sm-6">
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
                                <v-row>
                                  <v-flex xs12 sm11>
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
                                </v-row>
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
                                <v-row>
                                  <v-flex xs12 sm11>
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
                                </v-row>
                                <i>
                                  <span
                                    v-if="errorMessage10 !== null"
                                    class="text-danger text-center"
                                  >{{errorMessage10}}</span>
                                </i>
                                <v-row>
                                  <v-flex xs12 sm11>
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
                                </v-row>
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
                                <v-row>
                                  <v-flex xs12 sm11>
                                    <v-text-field
                                      color="orange"
                                      label="Contact number"
                                      outlined
                                      v-model="contactNum"
                                      v-on:keyup="validate('contact')"
                                      type="number"
                                      id="contactNum"
                                      required
                                    ></v-text-field>
                                  </v-flex>
                                </v-row>
                              </center>
                            </div>
                            <div class="col-sm-6">
                              <center>
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
                                <v-row>
                                  <v-flex xs12 sm11>
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
                                </v-row>
                                <i>
                                  <span
                                    v-if="errorMessage3 !== null"
                                    class="text-danger text-center"
                                  >{{errorMessage3}}</span>
                                </i>
                                <v-row>
                                  <v-flex xs12 sm11>
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
                                </v-row>
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
                                <v-row>
                                  <v-flex xs12 sm11>
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
                                </v-row>
                                <i>
                                  <span
                                    v-if="errorMessage6 !== null"
                                    class="text-danger text-center"
                                  >{{errorMessage6}}</span>
                                </i>
                                <v-row>
                                  <v-flex xs12 sm11>
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
                                </v-row>
                              </center>
                            </div>
                          </div>
                          <v-btn
                            type="button"
                            outlined
                            color="orange"
                            @click="register"
                            class="btn register"
                          >Register</v-btn>
                        </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="showModal = false"> Close</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </template>
      </div>
    </center>
    <loading v-if="loadingShow"></loading>
  </div>
</template>
<style scoped>
.register {
  width: 100%;
}
.container {
  margin-top: 2%;
  margin-bottom: 2%;
  width: 100%;
  /* border: orange solid 1px; */
}
.btnModal {
  width: 100px;
}
.modalFont {
  font-size: 15px;
}
.alert-box {
  background: white;
  display: inline-block;
  margin-top: 20%;
  font-weight: lighter;
  border-radius: 3px;
  font-size: 30px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 30px;
  padding-bottom: 10px;
  transition: 0.2s;
}
.blurred-background {
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  background: rgba(54, 54, 54, 0.7);
}
img {
  cursor: default;
}
span {
  font-size: 12px;
}
hr {
  border: 1px solid #17d817;
}
.termsCondition {
  margin-top: 6%;
  font-size: 15px;
  text-align: center;
}
.form-control {
  border: 1px solid #17d817;
  border-radius: 5px;
  width: 50%;
}
.bRegister {
  color: orange;
  cursor: pointer;
}
p {
  font-size: 20px;
}
.btnRegister {
  margin-top: 2%;
  margin-bottom: 2%;
  background-color: #17d817;
  font-weight: bold;
  width: 100%;
}
.containerWidth {
  width: 40%;
  text-align: left;
  margin-left: 0px !important;
  margin-right: 0px !important;
}
@media screen and (max-width: 600px) {
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
}
</style>
<script>
import ROUTER from "../router";
import AUTH from "../services/auth";
import image from "../../assets/logo.png";
import loading from './loading.vue';
import swal from "sweetalert";
export default {
  name: "app",
  data() {
    return {
      show3: false,
      show4: false,
      userType: '',
      image: image,
      firstname: "",
      lastname: "",
      username: "",
      address: "",
      contactNum: "",
      email: "",
      password: "",
      confirmPass: "",
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
      errorMessage17: null,
      showSuccess: false,
      newPass: null,
      newName: null,
      headersForCup: [
        {text: "Firstname" ,value:"firstname"},
        {text: "Lastname" ,value:"lastname"},
        {text: "Username" ,value:"name"},
        {text: "Email" ,value:"email"},
        {text: "Account Type" ,value:"account_type"},
        {text: "Contact#" ,value:"contactNumber"},
        {text: "Address" ,value:"address"},
      ],
      loadingShow: false,
      userData: [],
      search: '',
      showModal: false
    };
  },
  mounted(){
    this.retrieve()
  },
  components: {
    loading
  },
  methods: {
    addAccount(){
      this.userType = "",
      this.image = image,
      this.firstname = "",
      this.lastname = "",
      this.username = "",
      this.address = "",
      this.contactNum = "",
      this.email = "",
      this.password = "",
      this.confirmPass = "",
      this.successMessage =  null,
      this.errorMessage1 =  null,
      this.errorMessage2 =  null,
      this.errorMessage3 =  null,
      this.errorMessage4 =  null,
      this.errorMessage5 =  null,
      this.errorMessage6 =  null,
      this.errorMessage7 =  null,
      this.errorMessage8 =  null,
      this.errorMessage9 =  null,
      this.errorMessage10 =  null,
      this.errorMessage11 =  null,
      this.errorMessage12 =  null,
      this.errorMessage13 =  null,
      this.errorMessage14 =  null,
      this.errorMessage15 =  null,
      this.errorMessage16 =  null,
      this.errorMessage17 =  null,
      this.showSuccess =  false,
      this.showModal = true
    },
    retrieve(){
      this.loadingShow = true
      this.$axios.post(AUTH.url + "retrieve", {}, AUTH.config).then(response => {
        if(response.data.status){
          AUTH.deauthenticate()
        }
        this.loadingShow = false
        this.userData = response.data.user
      })
    },
    hide() {
      this.showSuccess = false;
    },
    redirect(route) {
      ROUTER.push(route).catch(() => {});
    },
    register(e) {
      e.preventDefault()
      this.loadingShow = true
      this.validate("firstname");
      this.validate("lastname");
      this.validate("username");
      this.validate("address");
      this.validate("contact");
      this.validate("email");
      this.validate("password");
      this.validate("confirmPass");
      this.validate("userType");
      let parameter = {
        account_type: this.userType,
        firstname: this.firstname,
        lastname: this.lastname,
        address: this.address,
        contactNumber: this.contactNum,
        email: this.email,
        name: this.username,
        password: this.password,
        password_confirmation: this.confirmPass,
        adminRegister: 'register'
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
        this.errorMessage16 === null &&
        this.errorMessage17 === null
      ) {
        this.$axios
          .post(AUTH.url + "register", parameter)
          .then(response => {
            this.loadingShow = false
            swal({
              title: "You successfully created an account",
              icon: "success"
            });
            this.showModal = false
            this.retrieve()
          })
          .catch(error => {
            if (error.response.status === 300) {
              this.errorMessage14 = "Username already exist";
            }
            if (error.response.status === 301) {
              this.errorMessage3 = "Email already exist";
            }
            this.loadingShow = false
          });
      } else {
        this.errorMessage17 = "Please fill up all fields";
        this.loadingShow = false
      }
    },
    validate(input) {
      this.successMessage = null;
      let reqWhiteSpace = /\d/;
      let reqSpace = /\s/;
      let specialChar = /^[A-Za-z0-9 ]+$/;
      if (input === "firstname") {
        this.errorMessage1 = null;
        if (reqWhiteSpace.test(this.firstname)) {
          this.errorMessage1 = "firstname should not contain a number.";
        } else if (this.firstname === "") {
          this.errorMessage2 = "firstname is required.";
        } else if (!specialChar.test(this.firstname)) {
          this.errorMessage2 =
            "firstname should not contain a special character.";
        } else {
          this.errorMessage1 = null;
          this.errorMessage2 = null;
        }
      } else if (input === "lastname") {
        this.errorMessage12 = null;
        if (reqWhiteSpace.test(this.lastname)) {
          this.errorMessage12 = "lastname should not contain a number.";
        } else if (this.lastname === "") {
          this.errorMessage13 = "lastname is required.";
        } else if (!specialChar.test(this.lastname)) {
          this.errorMessage13 =
            "lastname should not contain a special character.";
        } else {
          this.errorMessage12 = null;
          this.errorMessage13 = null;
        }
      } else if (input === "userType") {
        this.errorMessage17 = null;
        if (this.userType === "") {
          this.errorMessage17 = "User type is required.";
        } else {
          this.errorMessage17 = null;
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
        if (this.validateEmail(this.email) === false) {
          this.errorMessage3 = "You have entered an invalid email address.";
        } else {
          this.errorMessage3 = null;
        }
      } else if (input === "password") {
        this.errorMessage4 = null;
        if (this.password.length < 8) {
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
        if (this.password.localeCompare(this.confirmPass) !== 0) {
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
        if (this.contactNum.length > 11) {
          this.errorMessage8 = "Contact number must be 11 digits";
        } else if (this.contactNum.slice(0, 2) != "09") {
          this.errorMessage9 = "Contact number must start with 09";
        } else if (this.contactNum.length < 11) {
          this.errorMessage9 = "Contact number must be 11 digits";
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
        this.errorMessage17 = "Please fill in all required fields.";
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
