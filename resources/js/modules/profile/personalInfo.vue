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
      <div class="text-left DP">
        <div class="row">
          <div class="col-sm-3 thelabel">PHOTO</div>
          <div class="col-sm-6">
            <span>This helps you personalize your account</span>
          </div>
          <div class="col-sm-3 text-right">
            <img class="profilePic" :src="profilepic">
          </div>
        </div>
      </div>
      <hr>
      <div class="text-left Fname">
        <div class="row">
          <div class="col-sm-3 thelabel">NAME</div>
          <div class="col-sm-6">
            <span>{{Fname}}</span>
          </div>
          <div class="col-sm-3 text-right">
            <v-button type="button" data-toggle="modal" data-target="#forNameUpdate">
              <v-icon>mdi-chevron-right</v-icon>
            </v-button>
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
            <v-button type="button" data-toggle="modal" data-target="#forAddressUpdate">
              <v-icon>mdi-chevron-right</v-icon>
            </v-button>
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
            <v-button type="button" data-toggle="modal" data-target="#forCNUpdate">
              <v-icon>mdi-chevron-right</v-icon>
            </v-button>
          </div>
        </div>
      </div>
      <hr>
      <div class="text-left Email">
        <div class="row">
          <div class="col-sm-3 thelabel">USERNAME/EMAIL ADDRESS</div>
          <div class="col-sm-6">
            <span>{{emailAdd}}</span>
          </div>
          <div class="col-sm-3 text-right">
            <v-button type="button" data-toggle="modal" data-target="#forEmailUpdate">
              <v-icon>mdi-chevron-right</v-icon>
            </v-button>
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
            <v-button type="button" data-toggle="modal" data-target="#forPWDupdate">
              <v-icon>mdi-chevron-right</v-icon>
            </v-button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      :id="forNameUpdate"
      tabindex="-1"
      role="dialog"
      aria-labelledby="Updatename"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="Updatename">Update Name</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="usr">Name:</label>
                <input
                  :placeholder="Fname"
                  v-model="newName"
                  type="text"
                  class="form-control"
                  id="usr"
                >
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn closebtn" data-dismiss="modal">Cancel</button>
            <button
              type="button"
              class="btn savebtn"
              @click="Save(newName,fn,forNameUpdate)"
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
              <div class="form-group">
                <label for="adr">Address:</label>
                <input
                  :placeholder="address"
                  v-model="newaddress"
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
              <div class="form-group">
                <label for="cn">Contact Number:</label>
                <input
                  :placeholder="contactnum"
                  v-model="newcontactnum"
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
              @click="Save(newcontactnum,dbcontact,forCNUpdate)"
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
            <h5 class="modal-title" id="UpdateEmailAddress">Update Username/Email</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="usrE">Username/Email Address:</label>
                <input
                  :placeholder="emailAdd"
                  v-model="newemailAdd"
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
              <div class="form-group">
                <label for="passw">Password:</label>
                <input
                  :placeholder="password"
                  v-model="newpassword"
                  type="password"
                  class="form-control"
                  id="passw"
                >
              </div>
              <i>
                <span v-if="errorMessage !== null" class="text-danger text-center">{{errorMessage}}</span>
              </i>
              <div class="form-group">
                <label for="cpass">Confirm Password:</label>
                <input
                  placeholder="Type new password here..."
                  v-model="Cpassword"
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
              @click="Save(newpassword,pwd,forPWDupdate)"
            >Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  height: 60px;
  width: 60px;
  border-radius: 100%;
}
.thelabel {
  font-size: 13px;
}
</style>

<script>
import ProfilePic from "../../../assets/profile.jpg";
import imageLogo from "../../../assets/logo.png";
import ROUTER from '../../router'
import AUTH from "../../services/auth";
import Axios from "axios";
import $ from "jquery";
// import imongAccount from "./myAccounts";

export default {
  data() {
    return {
      imageLogo:imageLogo,
      errorMessage: null,
      modalShow: true,
      profilepic: ProfilePic,
      fullname: "churva",
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
      newName: null,
      Cpassword: null,
      theEmail: "name",
      fn: "fullname",
      add: "address",
      dbcontact: "contactNumber",
      pwd: "password",
      forNameUpdate: "forNameUpdate",
      forAddressUpdate: "forAddressUpdate",
      forCNUpdate: "forCNUpdate",
      forEmailUpdate: "forEmailUpdate",
      forPWDupdate: "forPWDupdate"
    };
  },
  components: {
    // imongAccount
  },
  mounted() {
    this.userID = this.$route.params.id;
    this.retrieveUserDatas(this.userID);
    console.log("ang response ", this.userID);
  },

  methods: {
    retrieveUserDatas(id) {
      let params = {
        uname: id
      };
      Axios.post(AUTH.url + "getUserData", params).then(response => {
        // console.log("ang response ", response);
        response.data.userdata.forEach(element => {
          if (element.email == null) {
            this.emailAdd = "No email registered.";
          } else {
            this.emailAdd = element.email;
          }
          if (element.CN == null) {
            this.contactnum = "No registered contact number available.";
          } else {
            this.contactnum = element.CN;
          }
          if (element.address == null) {
            this.address = "No registered address available.";
          } else {
            this.address = element.address;
          }
          if (element.fullname == null) {
            this.Fname = "No registered name available.";
          } else {
            this.Fname = element.fullname;
          }
          if (element.pwd == null) {
            this.password = "No registered Password available.";
          } else {
            this.password = "********";
          }
        });
        console.log(
          "------- ",
          this.emailAdd,
          this.contactnum,
          this.address,
          this.Fname,
          this.password
        );
      });
    },
    Save(data, colname, modalID) {
      if (modalID === "forPWDupdate") {
        if (this.Cpassword === this.newpassword) {
          let params = {
            ID: this.userID,
            data: data,
            col: colname
          };
          Axios.post(AUTH.url + "SaveNEWdata", params)
            .then(response => {
              this.retrieveUserDatas(this.userID);
              $("#" + modalID).modal("hide");
            })
            .catch(err => {
              console.log("error imong pag update ", err);
            });
        } else {
          this.errorMessage = "Password did not match";
        }
      } else {
        let params = {
          ID: this.userID,
          data: data,
          col: colname
        };
        Axios.post(AUTH.url + "SaveNEWdata", params)
          .then(response => {
            this.retrieveUserDatas(this.userID);
            $("#" + modalID).modal("hide");
          })
          .catch(err => {
            console.log("error imong pag update ", err);
          });
      }
      this.errorMessage = null;
      this.newpassword = null;
      this.newemailAdd = null;
      this.newcontactnum = null;
      this.newaddress = null;
      this.newName = null;
      this.Cpassword = null;
    },
  //   direct() {
  //    ROUTER.push("/customerCart").catch(() => {});
  //  },
  //  viewProfile(){
  //    let id = localStorage.getItem("customerId")
  //     ROUTER.push('/personalInfo/'+ id).catch(()=>{})
  //  },
  //  orderHistory(){
  //     ROUTER.push('/orderHistory').catch(()=>{})
  //  }
  }
};
</script>

