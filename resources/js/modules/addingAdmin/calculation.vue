<template>
    <v-row justify="center">
        <v-dialog v-model="dialogForCupSize" persistent max-width="600px">
            <v-card>
                <div class="modal-header">
                    <span class="headline">UPDATE CALCULATIONS</span>
                    <button type="button" class="close" @click="closeModal()">&times;</button><br>
                </div>
                <v-card-text>
                    NOTE: <span class="text-danger text-center">All fields are required</span>
                    <v-form>
                        <!-- <i><span class="errorColor" v-if="errorMessage6 !== null">{{errorMessage6}}</span></i> -->
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <i><span class="errorColor" v-if="errorMessage1 !== null">{{errorMessage1}}</span></i>
                                    <v-row class="rowDesign">
                                        <v-col col="12" md="6">
                                            <label class="spanDesign">1 Pack of Pearl</label>
                                        </v-col>
                                        <v-col col="12" md="1">
                                            <label class="spanDesign">=</label>
                                        </v-col>
                                        <v-col col="12" md="5">
                                            <v-text-field label="Scope of pearl" outlined dense v-model="packPearl" type="number" @keyup="validate('pearl')" id="pearl"></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <i><span class="errorColor" v-if="errorMessage3 !== null">{{errorMessage3}}</span></i>
                                    <v-row class="rowDesign">
                                        <v-col col="12" md="6">
                                            <label class="spanDesign">1 Can of Fructose</label>
                                        </v-col>
                                        <v-col col="12" md="1">
                                            <label class="spanDesign">=</label>
                                        </v-col>
                                        <v-col col="12" md="5">
                                            <v-text-field label="ml of Fructose" outlined dense v-model="canFructose" type="number" @keyup="validate('canFructose')" id="canFructose"></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <i><span class="errorColor" v-if="errorMessage5 !== null">{{errorMessage5}}</span></i>
                                    <v-row class="rowDesign">
                                        <v-col col="12" md="6">
                                            <label class="spanDesign">1 Bottle Syrup</label>
                                        </v-col>
                                        <v-col col="12" md="1">
                                            <label class="spanDesign">=</label>
                                        </v-col>
                                        <v-col col="12" md="5">
                                            <v-text-field label="ml of cookie dough syrup" outlined dense v-model="doughSyrup" type="number" @keyup="validate('doughSyrup')" id="doughSyrup"></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <i><span class="errorColor" v-if="errorMessage2 !== null">{{errorMessage2}}</span></i>
                                    <v-row class="rowDesign">
                                        <v-col col="12" md="6">
                                            <label class="spanDesign">1 Pack of Tea</label>
                                        </v-col>
                                        <v-col col="12" md="1">
                                            <label class="spanDesign">=</label>
                                        </v-col>
                                        <v-col col="12" md="5">
                                            <v-text-field label="ml of tea" outlined dense v-model="packTea" type="number" @keyup="validate('packTea')" id="packTea"></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <i><span class="errorColor" v-if="errorMessage4 !== null">{{errorMessage4}}</span></i>
                                    <v-row class="rowDesign">
                                        <v-col col="12" md="6">
                                            <label class="spanDesign">1 Can of Wintermelon Syrup</label>
                                        </v-col>
                                        <v-col col="12" md="1">
                                            <label class="spanDesign">=</label>
                                        </v-col>
                                        <v-col col="12" md="5">
                                            <v-text-field label="ml of wintermelon syrup" outlined dense v-model="wintermelonSyrup" type="number" @keyup="validate('wintermelonSyrup')" id="wintermelonSyrup"></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <i><span class="errorColor" v-if="errorMessage6 !== null">{{errorMessage6}}</span></i>
                                    <v-row class="rowDesign">
                                        <v-col col="12" md="6">
                                            <label class="spanDesign">1 Bottle Cream Milk</label>
                                        </v-col>
                                        <v-col col="12" md="1">
                                            <label class="spanDesign">=</label>
                                        </v-col>
                                        <v-col col="12" md="5">
                                            <v-text-field label="ml of cream milk" outlined dense v-model="creamMilk" type="number" @keyup="validate('creamMilk')" id="creamMilk"></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <i><span class="errorColor" v-if="errorMessage7 !== null">{{errorMessage7}}</span></i>
                                    <v-row class="rowDesign">
                                        <v-col col="12" md="6">
                                            <label class="spanDesign">1 Pack of Powder</label>
                                        </v-col>
                                        <v-col col="12" md="1">
                                            <label class="spanDesign">=</label>
                                        </v-col>
                                        <v-col col="12" md="5">
                                            <v-text-field label="scopes of powder" outlined dense v-model="powder" type="number" @keyup="validate('powder')" id="powder"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeModal()">Close</v-btn>
                    <v-btn color="blue darken-1" text  type="button" class="btn btn-primary" @click="updateCalculation()">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <loading v-if="loadingShow"></loading>
    </v-row>
</template>
<style scoped>
.errorColor {
  color: red;
}
.spanDesign{
    font-size: 15px;
    font-weight: bold;
    margin-top: 5px;
}
.rowDesign{
    margin-bottom: -5%
}
</style>
<script>
import AUTH from "../../services/auth";
import loading from '../../basic/loading.vue';
import swal from "sweetalert";
export default {
    data(){
        return {
            dialogForCupSize: true,
            errorMessage1: null,
            errorMessage2: null,
            errorMessage3: null,
            errorMessage4: null,
            errorMessage5: null,
            errorMessage6: null,
            errorMessage7: null,
            packPearl: '',
            packTea: '',
            canFructose: '',
            wintermelonSyrup: '',
            doughSyrup: '',
            creamMilk: '',
            powder: '',
            loadingShow: false
        }
    },
    mounted(){
        this.errorMessage1 =  null
        this.errorMessage2 =  null
        this.errorMessage3 =  null
        this.errorMessage4 =  null
        this.errorMessage5 =  null
        this.errorMessage6 =  null
        this.errorMessage7 =  null
        this.retrieve()
    },
    components: {
        loading,
    },
    methods: {
        retrieve(){
            this.loadingShow = true
            this.$axios.post(AUTH.url + "retrieveCalculation", {}, AUTH.config).then(response => {
                this.loadingShow = false
                if(response.data.status === 'Token is Expired'){
                    AUTH.deauthenticate()
                }
                response.data.calculations[0] ? this.packPearl = response.data.calculations[0].packOfPearl : this.packPearl =  ''
                response.data.calculations[0] ? this.packTea = response.data.calculations[0].packOfTea : this.packTea =  ''
                response.data.calculations[0] ? this.canFructose = response.data.calculations[0].canOfFructose : this.canFructose =  ''
                response.data.calculations[0] ? this.wintermelonSyrup = response.data.calculations[0].canOfWintermelon : this.wintermelonSyrup =  ''
                response.data.calculations[0] ? this.doughSyrup = response.data.calculations[0].bottleSyrup : this.doughSyrup =  ''
                response.data.calculations[0] ? this.creamMilk = response.data.calculations[0].bottleCreamMilk : this.creamMilk =  ''
                response.data.calculations[0] ? this.powder = response.data.calculations[0].packOfPowder : this.powder =  ''
            });
        },
        updateCalculation(){
            this.validate('pearl')
            this.validate('packTea')
            this.validate('canFructose')
            this.validate('wintermelonSyrup')
            this.validate('doughSyrup')
            this.validate('creamMilk')
            this.validate('powder')
            if(this.errorMessage1 === null && this.errorMessage2 === null  && this.errorMessage3 === null  && this.errorMessage4 === null &&
            this.errorMessage5 === null  && this.errorMessage6 === null  && this.errorMessage7 === null ){
                this.loadingShow = true
                let param = {
                    id: localStorage.getItem('adminId'),
                    packOfPearl: this.packPearl,
                    canOfFructose: this.canFructose,
                    bottleSyrup: this.doughSyrup,
                    packOfTea: this.packTea,
                    canOfWintermelon: this.wintermelonSyrup,
                    bottleCreamMilk: this.creamMilk,
                    packOfPowder: this.powder
                };
                this.$axios.post(AUTH.url + "updateCalculation", param, AUTH.config).then(response => {
                    this.loadingShow = false
                    if(response.data.status === 'Token is Expired'){
                        AUTH.deauthenticate()
                    }
                    this.closeModal();
                    swal({
                        title: "You successfully updated the calculations",
                        icon: "success"
                    });
                });
            }
        },
        closeModal(){
            this.$parent.closeModal()
        },
        validate(param){
            if(param === 'pearl'){
                if(this.packPearl ===  ''){
                    this.errorMessage1 = 'Pack of Pearl is required'
                }else if(this.packPearl < 1){
                    this.errorMessage1 = 'Pack of Pearl must be grater than 1'
                }else{
                    this.errorMessage1 = null
                }
            }else if(param === 'packTea'){
                if(this.packTea ===  ''){
                    this.errorMessage2 = 'Pack of Tea is required'
                }else if(this.packTea < 1){
                    this.errorMessage2 = 'Pack of Tea must be grater than 1'
                }else{
                    this.errorMessage2 = null
                }
            }else if(param === 'canFructose'){
                if(this.canFructose ===  ''){
                    this.errorMessage3 = 'Can of Milktea is required'
                }else if(this.canFructose < 1){
                    this.errorMessage3 = 'Can of Milktea must be grater than 1'
                }else{
                    this.errorMessage3 = null
                }
            }else if(param === 'wintermelonSyrup'){
                if(this.wintermelonSyrup ===  ''){
                    this.errorMessage4 = 'Can of Wintermelon Syrup is required'
                }else if(this.wintermelonSyrup < 1){
                    this.errorMessage4 = 'Can of Wintermelon must be grater than 1'
                }else{
                    this.errorMessage4 = null
                }
            }else if(param === 'doughSyrup'){
                if(this.doughSyrup ===  ''){
                    this.errorMessage5 = 'Bottle of Cookie Dough Syrup is required'
                }else if(this.doughSyrup < 1){
                    this.errorMessage5 = 'Bottle of Cookie Dough Syrup must be grater than 1'
                }else{
                    this.errorMessage5 = null
                }
            }else if(param === 'creamMilk'){
                if(this.creamMilk ===  ''){
                    this.errorMessage6 = 'Bottle of Cream Milk is required'
                }else if(this.creamMilk < 1){
                    this.errorMessage6 = 'Bottle of Cream Milk must be grater than 1'
                }else{
                    this.errorMessage6 = null
                }
            }else if(param === 'powder'){
                if(this.powder ===  ''){
                    this.errorMessage7 = 'Pack of Powder Milk is required'
                }else if(this.powder < 1){
                    this.errorMessage7 = 'Pack of Powder must be grater than 1'
                }else{
                    this.errorMessage7 = null
                }
            }
        }
    }
}
</script>
