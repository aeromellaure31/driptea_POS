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
                        v-if="errorMessage5 !== null"
                        class="text-danger text-center"
                      >{{errorMessage5}}</span>
                    </i>
                    <v-row>
                      <v-text-field
                        @keyup="validate()"
                        color="orange"
                        label="Verification code*"
                        outlined
                        v-model="code"
                        type="text"
                        autocomplete="off"
                        required
                      ></v-text-field>
                    </v-row>
                    <v-btn type="button" class="btn btnRegister" color="orange" @click="verifyCode()">Verify</v-btn>
                  </v-form>
                </div>
                <i><a class="FP" @click="resend()">Resend Code</a></i>
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
      id: this.$route.params.id,
      show3: false,
      show4: false,
      image: image,
      code: '',
      errorMessage5: null,
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
    validate(){
      if(this.code === ''){
        this.errorMessage5 = "Verification code required"
      }else{
         this.errorMessage5 = null
      }
    },
    resend(){
      this.loadingShow = true;
      let params = {
        id: this.id
      }
      this.$axios
        .post(AUTH.url + "updateCode", params)
        .then(res => {
          this.loadingShow = false;
          if(res.data.forgotPass.status === 'success'){
            swal({
              text: "Verification Sent to " + res.data.forgotPass.email,
              icon: "success",
            })
          }
      });
    },
    verifyCode(){
      if(this.errorMessage5 === null && this.code !== ''){
        this.loadingShow = true;
        let params = {
          id: this.id,
          code: this.code
        }
        this.$axios
          .post(AUTH.url + "checkCode", params)
          .then(res => {
            this.loadingShow = false;
            if(res.data.item.status === 'true'){
              this.redirect('/changePass/' + res.data.item[0].email)
            }else{
              this.errorMessage5 = 'Verification code not recognize'
            }
        });
      }else{
         this.errorMessage5 = "Verification code required"
      }
    },
  }
};
</script>



