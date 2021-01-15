<template>
    <v-row justify="center">
        <v-dialog v-model="dialogForCupSize" persistent max-width="850px">
            <v-card>
                <div class="modal-header">
                    <span class="headline">INGREDIENTS</span>
                    <button type="button" class="close" @click="closeModal()">&times;</button><br>
                </div>
                <v-card-text>
                    NOTE: <span class="text-danger text-center">All fields are required</span>
                    <v-form>
                        <!-- <i><span class="errorColor" v-if="errorMessage6 !== null">{{errorMessage6}}</span></i> -->
                        <v-container>
                            <v-row>
                                <v-col cols="12"  md="5" style="margin-left: -1% !important;">
                                    <v-text-field label="Ingredients Name" outlined dense v-model="ingredientsName" type="text" @keyup="validate('ingredientsName')" id="ingredientsName"></v-text-field>
                                    <i><span class="errorColor" v-if="errorMessage1 !== null">{{errorMessage1}}</span></i>
                                </v-col>
                                <v-col cols="12"  md="5" style="margin-left: -1.5% !important;">
                                    <v-select :items="typeIngredients" label="Ingredients Type" dense outlined v-model="ingredientsType" @change="validate('ingredientsType')"></v-select>
                                    <i><span class="errorColor" v-if="errorMessage5 !== null">{{errorMessage5}}</span></i>
                                </v-col>
                                <v-col cols="12"  md="1">
                                    <v-btn v-if="addShow" color="blue darken-1" type="button" class="btn btn-primary white--text addStyle" @click="addIngredient">Add</v-btn>
                                    <v-btn v-if="!addShow" color="blue darken-1" type="button" class="btn btn-primary white--text addStyle" @click="updateIngredient">Update</v-btn>
                                </v-col>
                                <v-col cols="12"  md="1">
                                    <v-btn v-if="addShow" color="blue darken-1" type="button" class="btn btn-primary white--text addStyle" @click="clear">Clear</v-btn>
                                    <v-btn v-if="!addShow" color="blue darken-1" type="button" class="btn btn-primary white--text addStyle" @click="cancelUpdate">Cancel</v-btn>
                                </v-col>
                                <!-- <v-col cols="12"  md="4">
                                    <v-text-field label="Lowdose(scope/ml)" outlined dense v-model="lowdose" type="number" @keyup="validate('lowdose')" id="lowdose"></v-text-field>
                                    <i><span class="errorColor" v-if="errorMessage2 !== null">{{errorMessage2}}</span></i>
                                </v-col>
                                <v-col cols="12"  md="4">
                                    <v-text-field label="Highdose(scope/ml)" outlined dense v-model="highdose" type="number" @keyup="validate('highdose')" id="highdose"></v-text-field>
                                    <i><span class="errorColor" v-if="errorMessage3 !== null">{{errorMessage3}}</span></i>
                                </v-col>
                                <v-col cols="12"  md="4">
                                    <v-text-field label="Overdose(scope/ml)" outlined dense v-model="overdose" type="number" @keyup="validate('overdose')" id="overdose"></v-text-field>
                                    <i><span class="errorColor" v-if="errorMessage4 !== null">{{errorMessage4}}</span></i>
                                </v-col> -->
                            </v-row>
                        </v-container>
                    </v-form>
                    <v-data-table
                        :headers="headersForIngredients"
                        :items="ingredientsData"
                        :search="search"
                        :items-per-page="5"
                        class="elevation-3">
                        <template v-slot:item.actions="{ item }">
                            <v-icon small class="mr-2" @click="editIngredient(item)">mdi-pencil</v-icon>
                            <!-- <v-icon small>mdi-delete</v-icon> -->
                        </template>
                    </v-data-table>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
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
.addStyle{
    margin-top: 2px;
    width: 50%;
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
            loadingShow: false,
            addShow: true,
            ingredientsName: '',
            ingredientsType: '',
            // lowdose: '',
            // highdose: '',
            // overdose: '',
            search: '',
            headersForIngredients: [
                { text: "Ingredient's Name", value: "ingredientsName" },
                { text: "Ingredient's Type", value: "type" },
                // { text: "Lowdose Quantity", value: "lowdoseQuantity" },
                // { text: "Highdose Quantity", value: "highdoseQuantity" },
                // { text: "Overdose Quantity", value: "overdoseQuantity" },
                { text: "ACTION", value: "actions", sortable: false }
            ],
            ingredientsData: [],
            typeIngredients: ['Pack of Pearl', 'Can of Fructose', 'Bottle of Dough Syrup', 'Pack of Tea', 'Can of Wintermelon Syrup', 'Bottle of Cream Milk', 'Pack of Powder'],
        }
    },
    mounted(){
        this.clear()
        this.retrieve()
    },
    components: {
        loading,
    },
    methods: {
        cancelUpdate(){
            this.clear()
            this.addShow = true
        },
        clear(){
            this.errorMessage1 =  null
            this.errorMessage2 =  null
            this.errorMessage3 =  null
            this.errorMessage4 =  null
            this.errorMessage5 =  null
            this.ingredientsName = ''
            this.ingredientsType = ''
            // this.lowdose = ''
            // this.highdose = ''
            // this.overdose = ''
        },
        retrieve(){
            this.loadingShow = true
            this.$axios.post(AUTH.url + "retrieveIngredients", {}, AUTH.config).then(response => {
                this.loadingShow = false
                if(response.data.status === 'Token is Expired'){
                    AUTH.deauthenticate()
                }
                this.ingredientsData = response.data.ingredients
            });
        },
        editIngredient(item){
            this.addShow = false
            this.ingredientsName = item.ingredientsName
            this.ingredientsType = item.type
            // this.lowdose = item.lowdoseQuantity
            // this.highdose = item.highdoseQuantity
            // this.overdose = item.overdoseQuantity
        },
        updateIngredient(){
            this.validate('ingredientsName')
            this.validate('ingredientsType')
            // this.validate('lowdose')
            // this.validate('highdose')
            // this.validate('overdose')
            if(this.errorMessage1 === null && this.errorMessage2 === null  && this.errorMessage3 === null  && this.errorMessage4 === null  && this.errorMessage5 === null){
                this.loadingShow = true
                let param = {
                    id: localStorage.getItem('adminId'),
                    ingredientsName: this.ingredientsName,
                    type: this.ingredientsType,
                    // lowdoseQuantity: this.lowdose,
                    // highdoseQuantity: this.highdose,
                    // overdoseQuantity: this.overdose,
                };
                this.$axios.post(AUTH.url + "updateIngredients", param, AUTH.config).then(response => {
                    this.loadingShow = false
                    if(response.data.status === 'Token is Expired'){
                        AUTH.deauthenticate()
                    }
                    this.addShow = true
                    this.clear()
                    this.retrieve()
                    this.$parent.retrieveIngredients()
                    swal({
                        title: "You successfully updated the ingredient",
                        icon: "success"
                    });
                });
            }
        },
        addIngredient(){
            this.validate('ingredientsName')
            this.validate('ingredientsType')
            // this.validate('lowdose')
            // this.validate('highdose')
            // this.validate('overdose')
            if(this.errorMessage1 === null && this.errorMessage2 === null  && this.errorMessage3 === null  && this.errorMessage4 === null  && this.errorMessage5 === null){
                this.loadingShow = true
                let param = {
                    id: localStorage.getItem('adminId'),
                    ingredientsName: this.ingredientsName,
                    type: this.ingredientsType,
                    // lowdoseQuantity: this.lowdose,
                    // highdoseQuantity: this.highdose,
                    // overdoseQuantity: this.overdose,
                };
                this.$axios.post(AUTH.url + "addIngredients", param, AUTH.config).then(response => {
                    this.loadingShow = false
                    if(response.data.status === 'Token is Expired'){
                        AUTH.deauthenticate()
                    }
                    this.clear()
                    this.retrieve()
                    this.$parent.retrieveIngredients()
                    swal({
                        title: "You successfully added an ingredient",
                        icon: "success"
                    });
                });
            }
        },
        closeModal(){
            this.$parent.closeModal()
        },
        validate(param){
            if(param === 'ingredientsName'){
                if(this.ingredientsName ===  ''){
                    this.errorMessage1 = 'Ingredients Name is required'
                }else{
                    this.errorMessage1 = null
                }
            // }else if(param === 'lowdose'){
            //     if(this.lowdose ===  ''){
            //         this.errorMessage2 = 'Lowdose Quantity is required'
            //     }else if(this.lowdose < 1){
            //         this.errorMessage2 = 'Lowdose Quantity must be grater than 1'
            //     }else{
            //         this.errorMessage2 = null
            //     }
            // }else if(param === 'highdose'){
            //     if(this.highdose ===  ''){
            //         this.errorMessage3 = 'Highdose Quantity is required'
            //     }else if(this.highdose < 1){
            //         this.errorMessage3 = 'Highdose Quantity must be grater than 1'
            //     }else{
            //         this.errorMessage3 = null
            //     }
            // }else if(param === 'overdose'){
            //     if(this.overdose ===  ''){
            //         this.errorMessage4 = 'Overdose Quantity is required'
            //     }else if(this.overdose < 1){
            //         this.errorMessage4 = 'Overdose Quantity must be grater than 1'
            //     }else{
            //         this.errorMessage4 = null
            //     }
            }else if(param === 'ingredientsType'){
                if(this.ingredientsType ===  ''){
                    this.errorMessage5 = 'ingredients Type is required'
                }else{
                    this.errorMessage5 = null
                }
            }
        }
    }
}
</script>
