<template>
  <div>
      <!-- <div class="header" style="background-color:#ff5b04" v-if="">
           <div class="container" >
               <div class="row">
                   <div class="col-6">
                        <v-avatar>
                        <v-img  :src="imageLogo"></v-img>
                        </v-avatar>DRIPTEA</div>
                   
                   <div class="col-6 text-right">
                   <v-btn icon style="margin-right: 2%;"  @click="home()">
                        <v-icon >mdi-home</v-icon>
                    </v-btn>
                     <v-btn icon @click="direct()" style="margin-right: 5%;">
                        <v-icon>mdi-cart</v-icon>
                        <span style="margin-left: -3%;">Cart</span>
                    </v-btn>
                 <v-menu bottom left>
             <template v-slot:activator="{ on, attrs }">
               <v-avatar>
               <v-img :src="profilepic" v-bind="attrs" v-on="on">
               </v-img>
             </v-avatar>
             </template>
             <v-list>
               <v-list-item>
                 <v-list-item-title @click="viewProfile">Profile</v-list-item-title>
               </v-list-item>
               <v-list-item>
                 <v-list-item-title @click="orderHistory">Order History</v-list-item-title>
               </v-list-item>
             </v-list>
           </v-menu>
                   </div>
               </div>
           </div>
      </div> -->
    <div class="thetitle">
      <center>
        <div class="image-upload">
          <label for="file-input">
            <img class="profilePic cursorText" :src="imgURL ? imgURL : profilepic">
            <v-icon class="cursorText" medium>mdi-pencil</v-icon>
          </label>
          <input id="file-input" type="file" accept="image/*" name="profile_image" v-on:change="onImgChange"/>
        </div>
        <button v-if="show" class="btn" style="height: 25px; padding: 0; background-color: #ff5b04; color:white" @click="imageUpdate($event)">Update</button><br>
        <span class="title">Personal Information</span>
        <br>
        <span
          class="subtitle"
        >Basic Information that you provided upon registration name and contact information</span>
      </center>
    </div>
    <div class="container container1">
      <span class="title">Profile</span>
      <hr>
      <div class="text-left Fname">
        <div class="row">
          <div class="col-sm-3 thelabel">USERNAME</div>
          <div class="col-sm-6">
            <span>{{username}}</span>
          </div>
          <div class="col-sm-3 text-right">
            <v-icon class="cursorText" data-toggle="modal" data-target="#forUsernameUpdate" @click="emptyData()">mdi-chevron-right</v-icon>
          </div>
        </div>
      </div>
      <hr>
      <div class="text-left Fname">
        <div class="row">
          <div class="col-sm-3 thelabel">FIRSTNAME</div>
          <div class="col-sm-6">
            <span>{{firstname}}</span>
          </div>
          <div class="col-sm-3 text-right">
            <v-icon class="cursorText" data-toggle="modal" data-target="#forFirstnameUpdate" @click="emptyData()">mdi-chevron-right</v-icon>
          </div>
        </div>
      </div>
      <hr>
      <div class="text-left Fname">
        <div class="row">
          <div class="col-sm-3 thelabel">LASTNAME</div>
          <div class="col-sm-6">
            <span>{{lastname}}</span>
          </div>
          <div class="col-sm-3 text-right">
            <v-icon class="cursorText" data-toggle="modal" data-target="#forLastnameUpdate" @click="emptyData()">mdi-chevron-right</v-icon>
          </div>
        </div>
      </div>
      <hr>
      <div class="text-left Address">
        <div class="row">
          <div class="col-sm-3 thelabel">ADDRESS</div>
          <div class="col-sm-6">
            <span>{{address}}</span>
          </div>
          <div class="col-sm-3 text-right">
            <v-icon class="cursorText" data-toggle="modal" data-target="#forAddressUpdate" @click="emptyData()">mdi-chevron-right</v-icon>
          </div>
        </div>
      </div>
      <hr>
      <div class="text-left ContactNum">
        <div class="row">
          <div class="col-sm-3 thelabel">CONTACT NUMBER</div>
          <div class="col-sm-6">
            <span>{{contactnum}}</span>
          </div>
          <div class="col-sm-3 text-right">
            <v-icon class="cursorText" data-toggle="modal" data-target="#forCNUpdate" @click="emptyData()">mdi-chevron-right</v-icon>
          </div>
        </div>
      </div>
      <hr>
      <div class="text-left Email">
        <div class="row">
          <div class="col-sm-3 thelabel">EMAIL ADDRESS</div>
          <div class="col-sm-6">
            <span>{{emailAdd}}</span>
          </div>
          <div class="col-sm-3 text-right">
            <v-icon class="cursorText" data-toggle="modal" data-target="#forEmailUpdate" @click="emptyData()">mdi-chevron-right</v-icon>
          </div>
        </div>
      </div>
      <hr>
      <div class="text-left Password">
        <div class="row">
          <div class="col-sm-3 thelabel">PASSWORD</div>
          <div class="col-sm-6">
            <span type="password">{{password}}</span>
          </div>
          <div class="col-sm-3 text-right">
            <v-icon class="cursorText" data-toggle="modal" data-target="#forPWDupdate" @click="emptyData()">mdi-chevron-right</v-icon>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="forFirstnameUpdate"
      tabindex="-1"
      role="dialog"
      aria-labelledby="Updatename"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="Updatename">Update Firstname</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
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
              <div class="form-group">
                <label for="usrF">Firstname:</label>
                <input
                  :placeholder="firstname"
                  v-model="newfirstname"
                  v-on:keyup="validate('firstname')"
                  type="text"
                  class="form-control"
                  id="usrF"
                >
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn closebtn" data-dismiss="modal">Cancel</button>
            <button
              type="button"
              class="btn savebtn"
              @click="Save(newfirstname, 'firstname', 'forFirstnameUpdate')"
            >Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="forLastnameUpdate"
      tabindex="-1"
      role="dialog"
      aria-labelledby="Updatename"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="Updatename">Update Lastname</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
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
              <div class="form-group">
                <label for="usrL">Lastname:</label>
                <input
                  :placeholder="lastname"
                  v-model="newlastname"
                  v-on:keyup="validate('lastname')"
                  type="text"
                  class="form-control"
                  id="usrL"
                >
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn closebtn" data-dismiss="modal">Cancel</button>
            <button
              type="button"
              class="btn savebtn"
              @click="Save(newlastname, 'lastname', 'forLastnameUpdate')"
            >Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="forUsernameUpdate"
      tabindex="-1"
      role="dialog"
      aria-labelledby="Updatename"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="Updatename">Update Username</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
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
              <div class="form-group">
                <label for="usrU">Username:</label>
                <input
                  :placeholder="username"
                  v-model="newusername"
                  v-on:keyup="validate('username')"
                  type="text"
                  class="form-control"
                  id="usrU"
                >
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn closebtn" data-dismiss="modal">Cancel</button>
            <button
              type="button"
              class="btn savebtn"
              @click="Save(newusername, 'name', 'forUsernameUpdate')"
            >Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      :id="forAddressUpdate"
      tabindex="-1"
      role="dialog"
      aria-labelledby="UpdateAddress"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="UpdateAddress">Update Address</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <i>
                <span
                  v-if="errorMessage10 !== null"
                  class="text-danger text-center"
                >{{errorMessage10}}</span>
              </i>
              <div class="form-group">
                <label for="adr">Address:</label>
                <input
                  :placeholder="address"
                  v-model="newaddress"
                  v-on:keyup="validate('address')"
                  type="text"
                  class="form-control"
                  id="adr"
                >
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn closebtn" data-dismiss="modal">Cancel</button>
            <button
              type="button"
              class="btn savebtn"
              @click="Save(newaddress,add,forAddressUpdate)"
            >Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      :id="forCNUpdate"
      tabindex="-1"
      role="dialog"
      aria-labelledby="UpdateCN"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="UpdateCN">Update Contact Number</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
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
              <div class="form-group">
                <label for="cn">Contact Number:</label>
                <input
                  :placeholder="contactnum"
                  v-model="newcontactnum"
                  v-on:keyup="validate('contact')"
                  type="text"
                  class="form-control"
                  id="cn"
                >
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn closebtn" data-dismiss="modal">Cancel</button>
            <button
              type="button"
              class="btn savebtn"
              @click="Save(newcontactnum, dbcontact, forCNUpdate)"
            >Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      :id="forEmailUpdate"
      tabindex="-1"
      role="dialog"
      aria-labelledby="UpdateEmailAddress"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="UpdateEmailAddress">Email</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <i>
                <span
                  v-if="errorMessage3 !== null"
                  class="text-danger text-center"
                >{{errorMessage3}}</span>
              </i>
              <div class="form-group">
                <label for="usrE">Email Address:</label>
                <input
                  :placeholder="emailAdd"
                  v-model="newemailAdd"
                  v-on:keyup="validate('email')"
                  type="text"
                  class="form-control"
                  id="usrE"
                >
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn closebtn" data-dismiss="modal">Cancel</button>
            <button
              type="button"
              class="btn savebtn"
              @click="Save(newemailAdd,theEmail,forEmailUpdate)"
            >Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      :id="forPWDupdate"
      tabindex="-1"
      role="dialog"
      aria-labelledby="UpdatePWD"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="UpdatePWD">Update Password</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
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
              <div class="form-group">
                <label for="passw">Password:</label>
                <input
                  :placeholder="password"
                  v-model="newpassword"
                  v-on:keyup="validate('password')"
                  type="password"
                  class="form-control"
                  id="passw"
                >
              </div>
              <i>
                <span
                  v-if="errorMessage6 !== null"
                  class="text-danger text-center"
                >{{errorMessage6}}</span>
              </i>
              <div class="form-group">
                <label for="cpass">Confirm Password:</label>
                <input
                  placeholder="Type new password here..."
                  v-model="Cpassword"
                  v-on:keyup="validate('confirmPass')"
                  type="password"
                  class="form-control"
                  id="cpass"
                >
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn closebtn" data-dismiss="modal">Cancel</button>
            <button
              type="button"
              class="btn savebtn"
              @click="Save(newpassword, pwd, forPWDupdate)"
            >Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <loading v-if="loadingShow"></loading>
  </div>
</template>
<style>
.image-upload > input {
  visibility:hidden;
  width:0;
  height:0
}
.cursorText{
  cursor: pointer;
}
.updateText {
  width: auto;
  vertical-align: middle;
}
.theUpdatebtn {
  background-color: #ff5b04;
  width: 100%;
  height: 30px;
  border-radius: 2px;
  padding: 0%;
}
.savebtn {
  color: #ff5b04;
}
.thetitle {
  margin-top: 3%;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-weight: 400;
}
.title {
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-weight: 400;
}
.subtitle {
  font-size: 15px;
}
.container1 {
  border: 1px solid gray;
  border-radius: 1%;
  width: 70%;
  margin-bottom: 5%;
}
.profilePic {
  height: 150px;
  width: 150px;
  border-radius: 100%;
}
.thelabel {
  font-size: 13px;
}
.text-danger{
  font-size: 12px
}
</style>

<script>
import ProfilePic from "../../../assets/empty.png";
import imageLogo from "../../../assets/logo.png";
import ROUTER from '../../router'
import AUTH from "../../services/auth";
import Axios from "axios";
import $ from "jquery";
import loading from '../../basic/loading.vue';
import swal from "sweetalert";

export default {
  data() {
    return {
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
      modalShow: true,
      profilepic: ProfilePic,
      firstname: null,
      lastname: null,
      username: null,
      show: false,
      emailAdd: null,
      contactnum: null,
      address: null,
      Fname: null,
      password: null,
      userID: null,
      newpassword: null,
      newemailAdd: null,
      newcontactnum: null,
      newaddress: null,
      newfirstname: null,
      newlastname: null,
      newusername: null,
      Cpassword: null,
      theEmail: "email",
      add: "address",
      dbcontact: "contactNumber",
      pwd: "password",
      forNameUpdate: "forNameUpdate",
      forAddressUpdate: "forAddressUpdate",
      forCNUpdate: "forCNUpdate",
      forEmailUpdate: "forEmailUpdate",
      forPWDupdate: "forPWDupdate",
      loadingShow: false,
      img: null,
      imgURL: null,
      show: false,
      output: null,
      toSaveImage: null
    };
  },
  components: {
    loading
  },
  mounted() {
    this.userID = this.$route.params.id;
    this.retrieveUserDatas(this.userID);
  },
  methods: {
    imageUpdate(e){
      this.loadingShow = true
      e.preventDefault()
      let currentObj = this;
      const config = {
          headers: {
            'content-type': 'multipart/form-data',
            Authorization: 'Bearer ' + localStorage.getItem('userToken')
          }
      }
      let formData = new FormData();
      formData.append('id', this.userID)
      // formData.append('image', this.img)
      formData.append('image', this.toSaveImage)
      this.$axios.post('/updateImage', formData, config).then(function (response) {
        currentObj.loadingShow = false
        currentObj.show = false
        if(response.data.status){
          AUTH.deauthenticate()
        }
        swal({
          title: "You have successfully edited your profile picture",
          icon: "success"
        });
      })
      .catch(function (error) {
        currentObj.output = error;
        currentObj.loadingShow = false
      });
    },
    onImgChange(e) {
      this.show = true
      this.img = e.target.files[0]
      this.imgURL = URL.createObjectURL(e.target.files[0])
      this.loadingShow = true
      let data = new FormData()
      data.append('file', e.target.files[0])
      this.$axios.post('http://ec2-34-205-139-231.compute-1.amazonaws.com:3232/api/file/upload', data).then(res => {
        this.toSaveImage = res.data.result.body.file_url
        this.loadingShow = false
      })
    },
    retrieveUserDatas(id) {
      this.loadingShow = true
      let params = {
        uname: id
      };
      Axios.post(AUTH.url + "getUserData", params, AUTH.config).then(response => {
        this.loadingShow = false
        if(response.data.status){
          AUTH.deauthenticate()
        }
        this.imgURL = response.data.userdata[0].img
        if (response.data.userdata[0].email == null) {
          this.emailAdd = "No email registered.";
        } else {
          this.emailAdd = response.data.userdata[0].email;
        }
        if (response.data.userdata[0].CN === null) {
          this.contactnum = "No registered contact number available.";
        } else {
          this.contactnum = response.data.userdata[0].CN;
        }
        if (response.data.userdata[0].address === null) {
          this.address = "No registered address available.";
        } else {
          this.address = response.data.userdata[0].address;
        }
        if (response.data.userdata[0].fname === null) {
          this.firstname = "No registered firstname available.";
        } else {
          this.firstname = response.data.userdata[0].fname;
        }
        if (response.data.userdata[0].lname === null) {
          this.lastname = "No registered lastname available.";
        } else {
          this.lastname = response.data.userdata[0].lname;
        }
        if (response.data.userdata[0].username === null) {
          this.username = "No registered username available.";
        } else {
          this.username = response.data.userdata[0].username;
        }
        if (response.data.userdata[0].pwd === null) {
          this.password = "No registered Password available.";
        } else {
          this.password = "********";
        }
      });
    },
    emptyData(){
      this.newpassword = null;
      this.newemailAdd = null;
      this.newcontactnum = null;
      this.newaddress = null;
      this.newfirstname = null;
      this.newlastname = null;
      this.newusername = null;
      this.Cpassword = null;
    },
    Save(data, colname, modalID) {
      if(colname === 'firstname'){
        this.validate("firstname");
      }else if(colname === 'lastname'){
        this.validate("lastname");
      }else if(colname === 'name'){
        this.validate("username");
      }else if(colname === 'address'){
        this.validate("address");
      }else if(colname === 'email'){
        this.validate("email");
      }else if(colname === 'contactNumber'){
        this.validate("contact");
      }else if(colname === 'password'){
        this.validate("password");
        this.validate("confirmPass");
      }
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
        this.errorMessage15 === null
      ){
        this.loadingShow = true
        let params = {
          ID: this.userID,
          data: data,
          col: colname
        };
        Axios.post(AUTH.url + "SaveNEWdata", params, AUTH.config)
          .then(response => {
            this.loadingShow = false
            if(response.data.status){
              AUTH.deauthenticate()
            }
            swal({
              title: "You have successfully edited your information",
              icon: "success"
            });
            this.retrieveUserDatas(this.userID);
            this.newpassword = null;
            this.newemailAdd = null;
            this.newcontactnum = null;
            this.newaddress = null;
            this.newfirstname = null;
            this.newlastname = null;
            this.newusername = null;
            this.Cpassword = null;
            $("#" + modalID).modal("hide");
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
      }
    },
    validate(input) {
      this.successMessage = null;
      let reqWhiteSpace = /\d/;
      let specialChar = /^[A-Za-z0-9 ]+$/;
      if (input === "firstname") {
        this.errorMessage1 = null;
        if(this.newfirstname === '' || this.newfirstname === null){
          this.errorMessage2 = "firstname is required.";
        } else if (reqWhiteSpace.test(this.newfirstname)) {
          this.errorMessage1 = "firstname should not contain a number.";
        } else if (!specialChar.test(this.newfirstname)) {
          this.errorMessage2 =
            "firstname should not contain a special character.";
        } else {
          this.errorMessage1 = null;
          this.errorMessage2 = null;
        }
      } else if (input === "lastname") {
        this.errorMessage12 = null;
        if (reqWhiteSpace.test(this.newlastname)) {
          this.errorMessage12 = "lastname should not contain a number.";
        } else if (this.newlastname === "" || this.newlastname === null) {
          this.errorMessage13 = "lastname is required.";
        } else if (!specialChar.test(this.newlastname)) {
          this.errorMessage13 =
            "lastname should not contain a special character.";
        } else {
          this.errorMessage12 = null;
          this.errorMessage13 = null;
        }
      } else if (input === "username") {
        this.errorMessage14 = null;
        if (reqWhiteSpace.test(this.newusername)) {
          this.errorMessage14 = "Username should not contain a space.";
        } else if (this.newusername === "" || this.newusername === null) {
          this.errorMessage15 = "Username is required.";
        } else if (this.newusername.length < 6) {
          this.errorMessage16 = "Username must be atleast 6 characters";
        } else {
          this.errorMessage14 = null;
          this.errorMessage15 = null;
          this.errorMessage16 = null;
        }
      } else if (input === "email") {
        this.errorMessage3 = null;
        if(this.newemailAdd === '' || this.newemailAdd === null){
          this.errorMessage3 = "Email address is required";
        } else if (this.validateEmail(this.newemailAdd) === false) {
          this.errorMessage3 = "You have entered an invalid email address.";
        } else {
          this.errorMessage3 = null;
        }
      } else if (input === "password") {
        this.errorMessage4 = null;
        if(this.newpassword === null || this.newpassword === ''){
          this.errorMessage4 = "Password is required";
        } else if (this.newpassword.length < 8) {
          this.errorMessage4 = "Password must be atleast 8 characters.";
        } else if (
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/.test(
            this.newpassword
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
        if(this.Cpassword === '' || this.Cpassword === null){
          this.errorMessage6 = "Confirm password is required";
        } else if (this.password.localeCompare(this.Cpassword) !== 0) {
          this.errorMessage6 = "Password did not match.";
        } else {
          this.errorMessage6 = null;
        }
      } else if (input === "address") {
        this.errorMessage10 = null;
        if (this.newaddress === "" || this.newaddress === null) {
          this.errorMessage10 = "Address is required.";
        } else {
          this.errorMessage10 = null;
        }
      } else if (input === "contact") {
        this.errorMessage8 = null;
        this.successMessage9 = null;
        if(this.newcontactnum === '' || this.newcontactnum === null){
          this.errorMessage8 = "Contact number is required";
        } else if (this.newcontactnum.length > 11) {
          this.errorMessage8 = "Contact number must not exceed 11 numbers.";
        } else if (this.newcontactnum.slice(0, 2) != "09") {
          this.errorMessage9 = "Contact number must start with 09";
        } else {
          this.errorMessage8 = null;
          this.errorMessage9 = null;
        }
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

