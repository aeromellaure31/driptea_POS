<template>
    <v-row justify="center">
        <v-dialog v-model="dialogForCupSize" persistent max-width="600px">
            <v-card>
                <div class="modal-header">
                    <span class="headline">ADD QUANTITY OF INGREDIENTS</span>
                    <button type="button" class="close" @click="closeModal()">&times;</button><br>
                </div>
                <v-card-text>
                    <v-form>
                        <v-container>
                            <i><span class="errorColor" v-if="errorMessage1 !== null">{{errorMessage1}}</span></i>
                            <v-row>
                                <v-col cols="12" md="6" v-for="(item, index) in ingredientsData" :key="index">
                                    <v-text-field :label="item.ingredientsName + ' (' + item.type + ')'" outlined dense v-model="ingredientsData[index].onRockQuantity" type="number" :id="item.ingredientsName" @keyup="validate(ingredientsData[index].onRockQuantity)"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeModal()">Close</v-btn>
                    <v-btn color="blue darken-1" text  type="button" class="btn btn-primary" @click="retrieveCalculation()">Add Quantity Ing</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<style scoped>
.errorColor {
  color: red;
}
</style>
<script>
import AUTH from "../../services/auth";
import loading from '../../basic/loading.vue';
import swal from "sweetalert";
export default {
    data(){
        return {
            dialogForCupSize: false,
            errorMessage1: null,
            packPearl: '',
            packTea: '',
            canMilktea: '',
            wintermelonSyrup: '',
            doughSyrup: '',
            creamMilk: '',
            okinawa: '',
            hokkaido: '',
            thai: '',
            matcha: '',
            ingredientsData: [],
        }
    },
    mounted(){
        this.errorMessage1 =  null
        this.packPearl =  ''
        this.packTea =  ''
        this.canMilktea =  ''
        this.wintermelonSyrup =  ''
        this.doughSyrup =  ''
        this.creamMilk =  ''
        this.loadingShow = true
        this.retrieve()
    },
    methods: {
        retrieveCalculation(){
            this.loadingShow = true
            this.$axios.post(AUTH.url + "retrieveCalculation", {}, AUTH.config).then(response => {
                this.loadingShow = false
                if(response.data.status === 'Token is Expired'){
                    AUTH.deauthenticate()
                }
                this.ingredientsData.forEach(el => {
                    if(el.type === 'Pack of Pearl'){
                        el.convertionQuantity = el.onRockQuantity * response.data.calculations[0].packOfPearl
                    }else if(el.type === 'Can of Fructose'){
                        el.convertionQuantity = el.onRockQuantity * response.data.calculations[0].canOfFructose
                    }else if(el.type === 'Bottle of Dough Syrup'){
                        el.convertionQuantity = el.onRockQuantity * response.data.calculations[0].bottleSyrup
                    }else if(el.type === 'Pack of Tea'){
                        el.convertionQuantity = el.onRockQuantity * response.data.calculations[0].packOfTea
                    }else if(el.type === 'Can of Wintermelon Syrup'){
                        el.convertionQuantity = el.onRockQuantity * response.data.calculations[0].canOfWintermelon
                    }else if(el.type === 'Bottle of Cream Milk'){
                        el.convertionQuantity = el.onRockQuantity * response.data.calculations[0].bottleCreamMilk
                    }else if(el.type === 'Pack of Powder'){
                        el.convertionQuantity = el.onRockQuantity * response.data.calculations[0].packOfPowder
                    }
                })
                this.addQuantity()
            });
        },
        addQuantity(){
            var ing = []
            var quant = []
            this.ingredientsData.forEach(el => {
                ing.push(el.ingredientsName)
                quant.push(el.convertionQuantity)
                if(el.onRockQuantity <= 0 || el.onRockQuantity === null){
                    this.errorMessage1 = 'Invalid Inputs'
                }
            })
            if(this.errorMessage1 === null){
                this.loadingShow = true
                var params = {
                    ingredients: ing,
                    quantity: quant
                }
                this.$axios.post(AUTH.url + "addIngredientQuantity", params, AUTH.config).then(response => {
                    this.loadingShow = false
                    if(response.data.status === 'Token is Expired'){
                        AUTH.deauthenticate()
                    }
                    this.$parent.retrieveCalculation()
                    this.$parent.retrieveIngredients()
                    this.closeModal()
                    swal({
                        title: "You successfully added quantity of ingredients",
                        icon: "success"
                    });
                });
            }
        },
        retrieve(){
            this.$axios.post(AUTH.url + "retrieveIngredients", {}, AUTH.config).then(response => {
                this.loadingShow = false
                if(response.data.status === 'Token is Expired'){
                    AUTH.deauthenticate()
                }
                this.dialogForCupSize = true,
                this.ingredientsData = response.data.ingredients
            });
        },
        closeModal(){
            this.$parent.closeModal()
        },
        validate(param){
            if(param <= 0){
                this.errorMessage1 = 'Invalid input'
            }else{
                this.errorMessage1 = null
            }
        }
    }
}
</script>
