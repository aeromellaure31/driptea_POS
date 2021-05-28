<template>
    <v-row justify="center">
        <v-dialog v-model="dialogForIngredientsType" persistent max-width="850px">
            <v-card>
                <div class="modal-header">
                    <span class="headline">ADD TYPE OF INGREDIENTS</span>
                    <button type="button" class="close" @click="closeModal()">&times;</button><br>
                </div>
                <v-card-text>
                    NOTE: <span class="text-danger text-center">All fields are required</span>
                    <v-form>
                        <!-- <i><span class="errorColor" v-if="errorMessage6 !== null">{{errorMessage6}}</span></i> -->
                        <v-container>
                            <v-row>
                                <v-col cols="12"  md="5" style="margin-left: -1% !important;">
                                    <v-text-field label="Ingredient's Type" outlined dense v-model="ingredientsType" type="text" @keyup="validate('ingredientsType')" id="ingredientsType"></v-text-field>
                                    <i><span class="errorColor" v-if="errorMessage1 !== null">{{errorMessage1}}</span></i>
                                </v-col>
                                <v-col cols="12"  md="1">
                                    <v-btn v-if="addShow" color="blue darken-1" type="button" class="btn btn-primary white--text addStyle" @click="addIngredientType">Add</v-btn>
                                    <v-btn v-if="!addShow" color="blue darken-1" type="button" class="btn btn-primary white--text addStyle" @click="updateIngredientType">Update</v-btn>
                                </v-col>
                                <v-col cols="12"  md="1">
                                    <v-btn v-if="addShow" color="blue darken-1" type="button" class="btn btn-primary white--text addStyle" @click="clear">Clear</v-btn>
                                    <v-btn v-if="!addShow" color="blue darken-1" type="button" class="btn btn-primary white--text addStyle" @click="cancelUpdate">Cancel</v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                    <v-data-table
                        :headers="headersForIngredients"
                        :items="ingredientsTypeData"
                        :search="search"
                        :items-per-page="5"
                        class="elevation-3">
                        <template v-slot:item.actions="{ item }">
                            <v-icon small class="mr-2" @click="editIngredientType(item)">mdi-pencil</v-icon>
                            <!-- <v-icon small>mdi-delete</v-icon> -->
                        </template>
                        <template v-slot:item.created_at="{ item }"><span>{{getDate(item.created_at)}}</span></template>
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
            dialogForIngredientsType: true,
            errorMessage1: null,
            loadingShow: false,
            addShow: true,
            ingredientsType: '',
            search: '',
            headersForIngredients: [
                { text: "Date", value: "date" },
                { text: "Ingredient's Type", value: "type" },
                { text: "ACTION", value: "actions", sortable: false }
            ],
            // typeIngredients: ['Pack of Pearl', 'Can of Fructose', 'Bottle of Dough Syrup', 'Pack of Tea', 'Can of Wintermelon Syrup', 'Bottle of Cream Milk', 'Pack of Powder'],
            ingredientsTypeData: [],
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
        getDate(date){
            return moment(date).format('MM/DD/YYYY')
        },
        cancelUpdate(){
            this.clear()
            this.addShow = true
        },
        clear(){
            this.errorMessage1 =  null
            this.ingredientsType = ''
        },
        retrieve(){
            this.loadingShow = true
            this.$axios.post(AUTH.url + "retrieveIngredientType", {}, AUTH.config).then(response => {
                this.loadingShow = false
                if(response.data.status === 'Token is Expired'){
                    AUTH.deauthenticate()
                }
                this.ingredientsTypeData = response.data.ingredientType
            });
        },
        editIngredientType(item){
            this.addShow = false
            this.ingredientsType = item.type
        },
        updateIngredientType(){
            this.validate('ingredientsType')
            if(this.errorMessage1 === null && this.errorMessage2 === null  && this.errorMessage3 === null  && this.errorMessage4 === null  && this.errorMessage5 === null){
                this.loadingShow = true
                let param = {
                    id: localStorage.getItem('adminId'),
                    type: this.ingredientsType
                };
                this.$axios.post(AUTH.url + "updateIngredientType", param, AUTH.config).then(response => {
                    this.loadingShow = false
                    if(response.data.status === 'Token is Expired'){
                        AUTH.deauthenticate()
                    }
                    this.addShow = true
                    this.clear()
                    this.retrieve()
                    swal({
                        title: "You successfully updated the ingredient's type",
                        icon: "success"
                    });
                });
            }
        },
        addIngredientType(){
            this.validate('ingredientsType')
            if(this.errorMessage1 === null){
                this.loadingShow = true
                let param = {
                    id: localStorage.getItem('adminId'),
                    ingredientsName: this.ingredientsName,
                    type: this.ingredientsType
                };
                this.$axios.post(AUTH.url + "addIngredientType", param, AUTH.config).then(response => {
                    this.loadingShow = false
                    if(response.data.status === 'Token is Expired'){
                        AUTH.deauthenticate()
                    }
                    this.clear()
                    this.retrieve()
                    swal({
                        title: "You successfully added an Ingredient Type",
                        icon: "success"
                    });
                });
            }
        },
        closeModal(){
            this.$parent.closeModal()
        },
        validate(param){
            if(param === 'ingredientsType'){
                if(this.ingredientsType ===  ''){
                    this.errorMessage1 = 'ingredients Type is required'
                }else{
                    this.errorMessage1 = null
                }
            }
        }
    }
}
</script>
