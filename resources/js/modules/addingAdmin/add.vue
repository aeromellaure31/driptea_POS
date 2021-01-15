<template>
  <div>
    <center>
    <v-toolbar flat>
      <template v-slot:extension>
        <v-tabs dark background-color="#ff5b04" fixed-tabs>
          <v-tabs-slider></v-tabs-slider>
          <v-tab
            @click="changeName('category'), tableForAddOns = false, tableForCupSize = false, tableForProduct = false, tableForCategory = true, tableForCupType = false, tableForIngredients = false"
          >Category</v-tab>
          <v-tab
            @click="changeName('product'), tableForAddOns = false, tableForCupSize = false, tableForProduct = true, tableForCategory = false, tableForCupType = false, tableForIngredients = false"
          >Product</v-tab>
          <v-tab
            @click="changeName('addOns'), tableForAddOns = true, tableForCupSize = false, tableForProduct = false, tableForCategory = false, tableForCupType = false, tableForIngredients = false"
          >Add Ons</v-tab>
          <v-tab
            @click="changeName('cupType'), tableForAddOns = false, tableForCupSize = false, tableForProduct = false, tableForCategory = false, tableForCupType = true, tableForIngredients = false"
          >Cup Type</v-tab>
          <v-tab
            @click="changeName('cupSize'), tableForAddOns = false, tableForCupSize = true, tableForProduct = false, tableForCategory = false, tableForCupType = false, tableForIngredients = false"
          >Cup Size Quantity</v-tab>
          <v-tab
            @click="changeName('ingredients'), tableForAddOns = false, tableForCupSize = false, tableForProduct = false, tableForCategory = false, tableForCupType = false, tableForIngredients = true"
          >Ingredients</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    </center>

    <!-- Table for Ingredients -->
    <v-data-table
      v-if="tableForIngredients"
      :headers="headersForIngredients"
      :items="ingredientsData"
      :search="search"
      :items-per-page="10"
      style="text-align: center"
      class="elevation-3">
      <template v-slot:top>
        <v-toolbar class="mb-2" color="#ff5b04" dark flat>
          <v-toolbar-title class="col pa-3 py-4 white--text">Ingredients</v-toolbar-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            prepend-inner-icon="mdi-magnify"
            class="mt-7"
            label="Search"
          ></v-text-field>
          <v-divider class="mx-4" vertical></v-divider>
          <v-btn
            color="primary"
            type="button"
            class="btn btn-primary btnModal"
            dark
            @click="showCalculation"
          >Calculation</v-btn>
          <v-btn
            color="primary"
            type="button"
            class="btn btn-primary btnModal"
            dark
            @click="showIngredients"
          >+Quantity Ing</v-btn>
          <v-btn
            color="primary"
            type="button"
            class="btn btn-primary btnModal"
            dark
            @click="showNewIngredients"
          >+Ingredients</v-btn>
        </v-toolbar>
      </template>
      <template v-slot:item.id="{ item }"><span>{{getNumberDate(item.created_at, item.id)}}</span></template>
      <template v-slot:item.onRockQuantity="{ item }"><span>{{getData(item)}}</span></template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="showEditIngredients(item)">mdi-pencil</v-icon>
        <v-icon small @click="showDelete(item.id, 'category')">mdi-delete</v-icon>
      </template>
    </v-data-table>

    <!-- Table for Category -->
    <v-data-table
      v-if="tableForCategory"
      :headers="headersForCategory"
      :items="categoryData"
      :search="search"
      :items-per-page="10"
      class="elevation-3">
      <template v-slot:top>
        <v-toolbar class="mb-2" color="#ff5b04" dark flat>
          <v-toolbar-title class="col pa-3 py-4 white--text">MILK TEA CATEGORY</v-toolbar-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            prepend-inner-icon="mdi-magnify"
            class="mt-7"
            label="Search"
          ></v-text-field>
          <v-divider class="mx-4" vertical></v-divider>
          <v-btn
            color="primary"
            type="button"
            class="btn btn-primary btnModal"
            dark
            @click="showCategory"
          >+CATEGORY</v-btn>
        </v-toolbar>
      </template>
      <template v-slot:item.id="{ item }"><span>{{getNumberDate(item.created_at, item.id)}}</span> </template>
      <template v-slot:item.image="{ item }">
        <v-img :src="item.image" style="width:50px;hieght:50px"></v-img>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editCategories(item)">mdi-pencil</v-icon>
        <v-icon small @click="showDelete(item.id, 'category')">mdi-delete</v-icon>
      </template>
    </v-data-table>

    <!-- Table For Product -->
    <v-data-table
      v-if="tableForProduct"
      :headers="headersForProduct"
      :items="productData"
      :search="search"
      :items-per-page="10"
      class="elevation-3">
      <template v-slot:top>
        <v-toolbar class="mb-2" color="#ff5b04" dark flat>
          <v-toolbar-title class="col pa-3 py-4 white--text">MILK TEA PRODUCT</v-toolbar-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <v-text-field
            class="mt-7"
            v-model="search"
            clearable
            flat
            solo-inverted
            prepend-inner-icon="mdi-magnify"
            label="Search"
          ></v-text-field>
          <v-divider class="mx-4" vertical></v-divider>
          <v-btn
            color="primary"
            type="button"
            class="btn btn-primary btnModal"
            dark
            @click="showProduct()"
          >+ PRODUCT</v-btn>
        </v-toolbar>
      </template>
      <template v-slot:item.id="{ item }"><span>{{getNumberDate(item.created_at, item.id)}}</span> </template>
      <template v-slot:item.image="{ item }">
        <v-img :src="item.image" style="width:50px;hieght:50px"></v-img>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editProduct(item)">mdi-pencil</v-icon>
        <v-icon
          v-if="item.status === 'Available'"
          small
          @click="productStatusUpdate(item.id)"
        >mdi-window-close</v-icon>
        <v-icon
          v-else
          small
          @click="productStatusAvailable(item.id)"
        >mdi-check</v-icon>
        <v-icon small @click="showDelete(item.id, 'product')">mdi-delete</v-icon>
      </template>
    </v-data-table>

    <!-- Table for addons -->
    <v-data-table
      v-if="tableForAddOns"
      :headers="headersForAddOns"
      :items="datas"
      :search="search"
      :items-per-page="10"
      class="elevation-3">
      <template v-slot:top>
        <v-toolbar class="mb-2" color="#ff5b04" dark flat>
          <v-toolbar-title class="col pa-3 py-4 white--text">MILK TEA ADDONS</v-toolbar-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <v-text-field
            class="mt-7"
            v-model="search"
            clearable
            flat
            solo-inverted
            prepend-inner-icon="mdi-magnify"
            label="Search"
          ></v-text-field>
          <v-divider class="mx-4" vertical></v-divider>
          <v-btn
            color="primary"
            type="button"
            class="btn btn-primary btnModal"
            dark
            @click="showAddOns"
          >+ ADD ONS</v-btn>
        </v-toolbar>
      </template>
      <template v-slot:item.id="{ item }"><span>{{getNumberDate(item.created_at, item.id)}}</span> </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editAddOns(item)">mdi-pencil</v-icon>
        <v-icon
          v-if="item.status === 'Available'"
          small
          @click="NAStatusUpdate(item.id)"
        >mdi-window-close</v-icon>
        <v-icon
          v-else
        
          small
          @click="availableStatusUpdate(item.id)"
        >mdi-check</v-icon>
        <v-icon small @click="showDelete(item.id, 'addOns')">mdi-delete</v-icon>
      </template>
    </v-data-table>

    <!-- Table for cupType -->
    <v-data-table
      v-if="tableForCupType"
      :headers="headersForCupType"
      :items="cupData"
      :search="search"
      :items-per-page="10"
      class="elevation-3">
      <template v-slot:top>
        <v-toolbar class="mb-2" color="#ff5b04" dark flat>
          <v-toolbar-title class="col pa-3 py-4 white--text">TYPE OF CUP</v-toolbar-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <v-text-field
            class="mt-7"
            v-model="search"
            clearable
            flat
            solo-inverted
            prepend-inner-icon="mdi-magnify"
            label="Search"
          ></v-text-field>
          <v-divider class="mx-4" vertical></v-divider>
          <v-btn
            color="primary"
            type="button"
            class="btn btn-primary btnModal"
            dark
            @click="showCupType"
          >+ CUP TYPE</v-btn>
        </v-toolbar>
      </template>
      <template v-slot:item.id="{ item }"><span>{{getNumberDate(item.created_at, item.id)}}</span> </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editCup(item)">mdi-pencil</v-icon>
        <v-icon
          v-if="item.status === 'Available'"
          small
          @click="NACupUpdate(item.id)"
        >mdi-window-close</v-icon>
        <v-icon v-else small @click="availableCupUpdate(item.id)">mdi-check</v-icon>
        <v-icon small @click="showDelete(item.id, 'cupType')">mdi-delete</v-icon>
      </template>
    </v-data-table>

    <!-- Table for cupSize -->
    <v-data-table
      v-if="tableForCupSize"
      :headers="headersForCupSize"
      :items="cupSizeData"
      :search="search"
      :items-per-page="10"
      class="elevation-3"
    >
      <template v-slot:top>
        <v-toolbar class="mb-2" color="#ff5b04" dark flat>
          <v-toolbar-title class="col pa-3 py-4 white--text">MILK TEA CUP SIZE</v-toolbar-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            prepend-inner-icon="mdi-magnify"
            class="mt-7"
            label="Search"
          ></v-text-field>
          <v-divider class="mx-4" vertical></v-divider>
          <v-btn
            color="primary"
            type="button"
            class="btn btn-primary btnModal"
            dark
            @click="showCupSize"
          >+ CUP SIZE</v-btn>
        </v-toolbar>
      </template>
      <template v-slot:item.created_at="{ item }"><span>{{getDate(item.created_at)}}</span> </template>  
    </v-data-table>

        <!-- Dialog for Category -->
        <template>
            <v-row justify="center">
                <v-dialog v-model="dialogForCategory" persistent max-width="600px">
                    <v-card>
                        <div class="modal-header">
                          <span class="headline">ADD CATEGORY</span>
                          <button type="button" class="close" @click="dialogForCategory = false">&times;</button><br>
                        </div>
                        <v-card-text>
                          NOTE: <span class="text-danger text-center">All fields are required</span>
                          <v-form @submit="formSubmit" enctype="multipart/form-data" action>
                            <i><span class="errorColor" v-if="errorMessage !== null">{{errorMessage}}</span></i>
                            <v-container>
                                <v-row>
                                    <v-text-field label="Product Category Name" outlined dense v-model="productType" type="text" required></v-text-field>
                                </v-row>
                                <v-row>
                                <div class="form-group">
                                  <i><span class="errorColor" v-if="errorMessage8 !== null">{{errorMessage8}}</span></i>
                                  <i><span class="errorColor">*Image size must not exceed 1MB</span></i>
                                  <center>
                                    <img class="addOnsImage" :src="imageURL"><br>
                                    <input type="file" accept="image/*" class="fileStyle" v-on:change="onImageChange" required><br>
                                  </center>
                                </div>
                                </v-row>  
                            </v-container>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="dialogForCategory = false"> Close</v-btn>
                                <v-btn v-if="!editCat" color="blue darken-1" text  type="submit" class="btn btn-primary">Add Category</v-btn>
                                <v-btn v-if="editCat" color="blue darken-1" text  type="button" class="btn btn-primary" @click="updateCategory($event)">Update Category</v-btn>
                            </v-card-actions>
                          </v-form>
                        </v-card-text>
                    </v-card>
                </v-dialog>
            </v-row>
        </template>

        <!-- Dialog for Product -->
         <template>
            <v-row justify="center">
                <v-dialog v-model="dialogForProduct" persistent max-width="800px">
                    <v-card>
                        <div class="modal-header">
                          <span class="headline">PRODUCT</span>
                          <button type="button" class="close" @click="dialogForProduct = false">&times;</button><br>
                        </div>
                        <v-card-text>
                        NOTE: <span class="text-danger text-center">All fields are required</span>
                        <v-form @submit="formSubmitProduct" enctype="multipart/form-data" action>
                          <i><span class="errorColor" v-if="errorMessage !== null">{{errorMessage}}</span></i>
                          <v-container>
                            <v-row>
                                <v-col cols="12" sm="4"> 
                                    <v-select
                                    solo
                                    height="55"
                                    :items="categoryName"
                                    label="Product Category"
                                    dense
                                    outlined
                                    v-model="prodType"
                                    ></v-select>
                                </v-col>
                                <v-col cols="12" sm="4"> 
                                    <v-text-field label="Product Name" outlined  v-model="productName"></v-text-field>
                                    <i><span class="errorColor" v-if="errorMessage9 !== null">{{errorMessage9}}</span></i>
                                    <v-btn class="btn btn-primary" style="width: 100%" @click="dialogQuantityIngredients = true, dialogForProduct = false">Add Ingredients</v-btn>
                                </v-col>
                                <v-col cols="12" sm="4">
                                    <v-text-field label="Description" outlined  v-model="description"></v-text-field>
                                </v-col>
                                <!-- <v-col cols="12" sm="6">
                                    <div>
                                      <multiselect class="multiSelectDesign" v-on:change="validate('multiSelect')" v-model="value" :options="options" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Choose Ingredients" label="ingredientsName" track-by="ingredientsName">
                                        <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                                      </multiselect>
                                    </div>
                                </v-col> -->
                            </v-row>
                            <v-row style="margin-top: 5%;">
                              <v-tabs dark background-color="secondary" fixed-tabs >
                                <v-tabs-slider></v-tabs-slider>
                                <v-tab @click="normal = true, online = false">
                                    Normal Price
                                </v-tab>
                                <v-tab @click="online = true, normal = false">
                                    Online Price 
                                </v-tab>
                              </v-tabs>                            
                            </v-row>
                            <div v-if="normal" style="border: 1px solid #d8dce3; margin-top: 5%;"> 
                                <i><span class="errorColor" v-if="errorMessage1 !== null">{{errorMessage1}}</span></i>
                                <v-row>
                                    <v-col cols="12" sm="4" >
                                      <v-text-field v-model="lowPrice" label="Low Dose Price" outlined v-on:keyup="validate('lowDose')" min="1" type="number" required ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="4" >
                                      <v-text-field v-model="highPrice" label="High Dose Price" outlined v-on:keyup="validate('highDose')" min="1"  type="number" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="4" >
                                      <v-text-field v-model="overPrice" label="Over Dose Price" outlined v-on:keyup="validate('overDose')" min="1"  type="number" required></v-text-field>
                                    </v-col>
                                </v-row>
                            </div>
                              <div v-if="online" style="border: 1px solid #d8dce3; margin-top: 5%;"> 
                                <i><span class="errorColor" v-if="errorMessage1 !== null">{{errorMessage1}}</span></i>
                                <v-row>
                                    <v-col cols="12" sm="4" >
                                      <v-text-field v-model="onlinelowPrice" label="Online Low Dose Price" v-on:keyup="validate('onlineLowDose')" min="1" outlined type="number" required ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="4" >
                                      <v-text-field v-model="onlinehighPrice" label="Online High Dose Price" v-on:keyup="validate('onlineHighDose')" min="1" outlined  type="number" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="4" >
                                      <v-text-field v-model="onlineoverPrice" label="Online Over Dose Price" v-on:keyup="validate('onlineOverDose')" min="1" outlined  type="number" required></v-text-field>
                                    </v-col>
                                </v-row>
                            </div>
                            <div class="form-group">
                                <i><span class="errorColor" v-if="errorMessage7 !== null">{{errorMessage7}}</span></i>
                                <i><span class="errorColor">*Image size must not exceed 1MB</span></i>
                                <center>
                                    <img class="addOnsImage" :src="imgURL"><br>
                                    <input type="file" accept="image/*" class="fileStyle" v-on:change="onImgChange" required><br>
                                </center>
                            </div>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="dialogForProduct = false"> Close</v-btn>
                                <v-btn v-if="productAdd" type="submit" class="btn btn-primary" >Add Product</v-btn>
                                <v-btn v-if="productEdit" type="button" class="btn btn-primary" @click="updateProduct($event)">Update Product</v-btn>
                            </v-card-actions>
                          </v-container>
                        </v-form>
                        </v-card-text>
                    </v-card>
                </v-dialog>
            </v-row>
        </template>

        <!-- Dialog for AddOns -->
        <template>
            <v-row justify="center">
                <v-dialog v-model="dialogForAddOns" persistent max-width="600px">
                    <v-card>
                        <div class="modal-header">
                          <span class="headline">ADD ADD ONS</span>
                          <button type="button" class="close" @click="dialogForAddOns = false">&times;</button><br>
                        </div>
                        <v-card-text>
                        NOTE: <span class="text-danger text-center">All fields are required</span>
                        <v-form>
                            <i><span class="errorColor" v-if="errorMessage !== null">{{errorMessage}}</span></i>
                                <v-container>
                                <v-row>
                                    <v-text-field label="Add Ons Name" outlined dense v-model="inputAddOns" type="text" id="cupName"></v-text-field>
                                </v-row>
                                <i><span class="errorColor" v-if="errorMessage2 !== null">{{errorMessage2}}</span></i>
                                <v-row>
                                  <v-text-field label="Addons Price" outlined dense v-model="addOnsPrice" @keyup="validate('addOnsPrice')" type="number"></v-text-field>
                                </v-row>  
                                <i><span class="errorColor" v-if="errorMessage3 !== null">{{errorMessage3}}</span></i>
                                <v-row>
                                  <v-text-field label="Online Addons Price" outlined dense v-model="onlineAddOnsPrice" @keyup="validate('onlineAddOnsPrice')" type="number"></v-text-field>
                                </v-row>  
                            </v-container>
                        </v-form>
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialogForAddOns = false"> Close</v-btn>
                            <v-btn color="blue darken-1" text v-if="addonsShow" type="button" class="btn btn-primary" @click="addAddOns">Add Add Ons</v-btn>
                            <v-btn color="blue darken-1" text  v-if="editAddOnsShow" type="button" class="btn btn-primary" @click="editAddOnsData">Save</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </template>

        <!-- Dialog for Cup Type -->
        <template>
            <v-row justify="center">
                <v-dialog v-model="dialogForCupType" persistent max-width="600px">
                    <v-card>
                        <div class="modal-header">
                          <span class="headline">ADD CUP TYPE</span>
                          <button type="button" class="close" @click="dialogForCupType = false">&times;</button><br>
                        </div>
                        <v-card-text>
                        NOTE: <span class="text-danger text-center">All fields are required</span>
                        <v-form>
                            <i><span class="errorColor" v-if="errorMessage !== null">{{errorMessage}}</span></i>
                            <v-container>
                              <v-row>
                                  <v-text-field label="Cup Type Name" outlined dense v-model="inputCup" type="text" id="cupName"></v-text-field>
                              </v-row>
                              <i><span class="errorColor" v-if="errorMessage4 !== null">{{errorMessage4}}</span></i>
                              <v-row>    
                                  <v-text-field label="Normal Price" outlined dense v-model="inputCupPrice" @keyup="validate('cupTypePrice')" type="number"></v-text-field>
                              </v-row>
                              <i><span class="errorColor" v-if="errorMessage5 !== null">{{errorMessage5}}</span></i>
                              <v-row>    
                                  <v-text-field label="Online Price" outlined dense v-model="inputCupOnlinePrice" type="number" @keyup="validate('onlineCupTypePrice')" id="price"></v-text-field> 
                              </v-row>
                            </v-container>
                        </v-form>
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialogForCupType = false"> Close</v-btn>
                            <v-btn color="blue darken-1" text v-if="btnCupType" type="button" class="btn btn-primary" @click="addingCupType">Add Cup Type</v-btn>
                            <v-btn color="blue darken-1" text  v-if="btnEditCupType" type="button" class="btn btn-primary" @click="editingCupType">Save</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </template>

        <!-- Dialog for Cup Size -->
        <template>
            <v-row justify="center">
                <v-dialog v-model="dialogForCupSize" persistent max-width="600px">
                    <v-card>
                        <div class="modal-header">
                          <span class="headline">ADD CUP QUANTITY</span>
                          <button type="button" class="close" @click="dialogForCupSize = false">&times;</button><br>
                        </div>
                        <v-card-text>
                        NOTE: <span class="text-danger text-center">All fields are required</span>
                        <v-form>
                            <i><span class="errorColor" v-if="errorMessage !== null">{{errorMessage}}</span></i>
                            <i><span class="errorColor" v-if="errorMessage6 !== null">{{errorMessage6}}</span></i>
                            <v-container>
                              <v-row>
                                  <v-text-field label="Low Dose Cup" outlined dense v-model="lowDoseCup" type="number" @keyup="validate('cupSize')" id="lowDoseCup"></v-text-field>
                              </v-row>
                              <v-row>    
                                  <v-text-field label="High Dose Cup" outlined dense v-model="highDoseCup" type="number" @keyup="validate('cupSize')" id="highDoseCup"></v-text-field>
                              </v-row>  
                              <v-row>    
                                  <v-text-field label="Over Dose Cup" outlined dense v-model="overDoseCup" type="number" @keyup="validate('cupSize')" id="overDoseCup"></v-text-field> 
                              </v-row>
                            </v-container>
                        </v-form>
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialogForCupSize = false"> Close</v-btn>
                            <v-btn color="blue darken-1" text  type="button" class="btn btn-primary" @click="addingCupSize">Add Cup Size</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </template>
        <template>
            <v-row justify="center">
                <v-dialog v-model="dialogConfirmation" persistent max-width="600px">
                    <v-card>
                        <div class="modal-header">
                          <span class="headline">Confirmation</span>
                          <button type="button" class="close" @click="dialogConfirmation = false">&times;</button><br>
                        </div>
                        <v-card-text>
                          Are you sure you want to delete?
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialogConfirmation = false">No</v-btn>
                            <v-btn color="blue darken-1" text  type="button" class="btn btn-primary" @click="deleteNow()">Yes</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </template>
        <template>
            <v-row justify="center">
                <v-dialog v-model="dialogQuantityIngredients" persistent max-width="700px">
                    <v-card>
                        <div class="modal-header">
                          <span class="headline">Ingredients for {{productName}}</span>
                          <button type="button" class="close" @click="dialogQuantityIngredients = false, dialogForProduct = true, storeIngredients.length > 0 ? '' : storeIngredients = []">&times;</button><br>
                        </div>
                        <v-card-text style="margin-top: 5%;">
                          <form>
                            <div class="form-group">
                              <div v-for="(item, index) in options" :key="index">
                                <div class="row">
                                  <div class="col-md-6">
                                    <input type="checkbox" :value="item.ingredientsName" v-model="storeIngredients">
                                    <label :for="item.ingredientsName">{{item.ingredientsName}}</label>
                                  </div>
                                  <!-- <div class="col-md-2">
                                    <v-text-field label="Lowdose Quantity" outlined dense v-model="lowDose" type="number" @keyup="validate('')"></v-text-field> 
                                  </div>
                                  <div class="col-md-2">
                                    <v-text-field label="Highdose Quantity" outlined dense v-model="highDose" type="number" @keyup="validate('')"></v-text-field> 
                                  </div>
                                  <div class="col-md-2">
                                    <v-text-field label="Overdose Quantity" outlined dense v-model="overDose" type="number" @keyup="validate('')"></v-text-field> 
                                  </div> -->
                                </div>
                              </div>
                            </div>
                          </form>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="dialogQuantityIngredients = false, dialogForProduct = true, storeIngredients.length > 0 ? '' : storeIngredients = []">Close</v-btn>
                          <v-btn color="blue darken-1" text  type="button" class="btn btn-primary" @click="dialogQuantityIngredients = false, dialogForProduct = true">Save</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </template>
        <calculation v-if="dialogForCalculation"></calculation>
        <addingIngredients v-if="dialogForIngredients"></addingIngredients>
        <newIngredients ref="show" v-if="dialogForNewIngredients"></newIngredients>
        <loading v-if="loadingShow"></loading>
  </div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css">
.multiselect__tags [data-v-0e00f27e] {
    min-height: 40px;
    display: block;
    padding: 8px 40px 0 8px;
    border-radius: 5px;
    border: 1px solid #9e9e9e !important;
    background: #fff;
    font-size: 14px;
}
</style>
<style scoped>
.multiSelectDesign >>> .multiselect__tags{
  border: 1px solid #9e9e9e !important;
}
.ingredientSpan{
  font-style: italic;
  color: blue;
  text-align: center;
  cursor: pointer;
  padding: 5%;
}
.v-input__slot {
  margin-bottom: -35px;
}
.errorColor {
  color: red;
}
::-webkit-scrollbar {
  width: 2px;
}
.my-custom-scrollbar[data-v-62e92aac] {
  position: relative;
  height: 500px;
  width: 100%;
  overflow: auto;
}
.fileStyle {
  font-size: 17px !important;
  width: 97px;
  margin-top: 3%;
  margin-bottom: 3%;
}
.addOnsImage {
  width: 250px !important;
  height: 250px !important;
  margin-top: 2% !important;
}
.navButton {
  float: left;
  width: 200px;
}
.borderStyle1 {
  border-left: 1px solid #d8dce3;
  border-top: 1px solid #d8dce3;
  border-right: 1px solid #d8dce3;
}
.btnBorderStyle {
  margin-top: -0.7%;
  border-bottom: 1px solid #d8dce3;
}
.borderStyle {
  border-left: 3px solid grey;
  border-top: 3px solid grey;
  border-right: 3px solid grey;
}
.btnBorderStyle1 {
  border-bottom: 3px solid grey;
}
.table tr {
  text-align: center;
}
img {
  height: 50px;
  width: 100px;
}
hr {
  border: 1px solid gray;
}
h1{
  text-align: center;
  margin-top: 3%;
}
th {
  text-align: center;
  font-size: 30px;
}
label {
  font-size: 20px !important;
}
.blurred-background {
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  text-align: center;
  background: rgb(54, 54, 54, 0.7);
}
.table {
  width: 90%;
  margin-top: 60px;
}
.searchInput {
  width: 50%;
}
#alert-box {
  width: 400px;
  background: white;
  display: inline-block;
  margin-top: 180px;
  font-weight: lighter;
  border-radius: 3px;
  font-size: 30px;
  padding: 20px;
  transition: 0.2s;
  text-align: left;
  box-shadow: 5px 5px gray;
}
.alert-box2 {
  width: 550px;
  background: white;
  display: inline-block;
  margin-top: 150px;
  font-weight: lighter;
  border-radius: 3px;
  font-size: 30px;
  padding: 20px;
  transition: 0.2s;
  text-align: left;
  box-shadow: 5px 5px gray;
}
#alert-box3 {
  width: 550px;
  background: white;
  display: inline-block;
  margin-top: 50px;
  font-weight: lighter;
  border-radius: 3px;
  font-size: 20px;
  padding: 20px;
  transition: 0.2s;
  text-align: left;
  box-shadow: 5px 5px gray;
}
.productTable {
  width: 100%;
  margin-top: 5%;
  margin-bottom: 5%;
}
.categoryTable {
  width: 70%;
  margin-top: 5%;
  margin-bottom: 5%;
}
.addOnsTable {
  width: 50%;
  margin-top: 5%;
  margin-bottom: 5%;
}
.cupTable {
  width: 60%;
  margin-top: 5%;
  margin-bottom: 5%;
}
.my-custom-scrollbar {
  position: relative;
  height: 500px;
  width: 70%;
  overflow: auto;
}
.table-wrapper-scroll-y {
  display: contents;
}
.div {
  /* border-style: solid; */
  margin-top: 3%;
  margin-bottom: 5%;
}
.btnModal {
  float: right;
  margin-right: 1%;
}
#buttonAdd {
  float: right;
}
</style>
<script>
import AUTH from "../../services/auth";
import ROUTER from "../../router";
import loading from '../../basic/loading.vue';
import addingIngredients from './addingQuantityIngredients.vue';
import Multiselect from 'vue-multiselect'
import newIngredients from './ingredients.vue';
import calculation from './calculation.vue';
import swal from "sweetalert";
import noImage from '../../../assets/noImage.jpg'
import moment from 'moment'
export default {
  data() {
    return {
      noImage: noImage,
      toSaveImage: null,
      toSaveImage2: null,
      auth: AUTH,
      dialogConfirmation: false,
      dialogQuantityIngredients: false,
      editCat: false,
      tableForCategory: true,
      tableForProduct: false,
      tableForAddOns: false,
      tableForCupType: false,
      tableForCupSize: false,
      tableForIngredients: false,
      normal:true,
      online:false,
      productName: null,
      img: null,
      imgURL: null,
      lowPrice: null,
      highPrice: null,
      overPrice: null,
      onlinelowPrice: null,
      onlinehighPrice: null,
      onlineoverPrice: null,
      prodType: null,
      image: null,
      categoryOld: null,
      imageURL: null,
      productType: null,
      inputAddOns: null,
      addOnsPrice: null,
      onlineAddOnsPrice: null,
      addOnsStat: null,
      editAddOnsShow: false,
      addonsShow: false,
      idAddOns: null,
      datas: [],
      productData: [],
      categoryData: [],
      ingredientsData: [],
      storeIngredients: [],
      categoryName: [],
      btnCupType: false,
      btnEditCupType: false,
      inputCupPrice: null,
      inputCupOnlinePrice: null,
      inputCup: null,
      inputCupQuantity: null,
      cupStatus: null,
      idCup: null,
      cupData: [],
      prod: false,
      description: null,
      cat: true,
      ons: false,
      cup: false,
      size: false,
      secondEvent: "",
      productAdd: true,
      productEdit: false,
      status: null,
      prodId: null,
      priceEvent: "",
      online: false,
      errorMessage: null,
      lowDoseCup: null,
      highDoseCup: null,
      overDoseCup: null,
      cupSizeData: [],
      search: null,
      title: null,
      dialogForCupType: false,
      dialogForProduct: false,
      dialogForCategory: false,
      dialogForAddOns: false,
      dialogForCupSize: false,
      dialogForIngredients: false,
      dialogForNewIngredients: false,
      dialogForCalculation: false,
      dataHeader: null,
      catId: null,
      exampleRules : {
        min: value => value >= 0
      },
      headersForAddOns: [
        { text: "#", value: "id" },
        { text: "Add Ons Name", value: "addons_name" },
        { text: "Add Ons Price", value: "addons_price" },
        { text: "Online Add Ons Price", value: "onlineAddOnsPrice" },
        { text: "Status", value: "status" },
        { text: "ACTION", value: "actions", sortable: false }
      ],
      headersForCupType: [
        { text: "#", value: "id" },
        { text: "Cup Type", value: "cupTypeName" },
        { text: "Additional Price", value: "cupTypePrice" },
        { text: "Cup Online Price", value: "inputCupOnlinePrice" },
        { text: "Status", value: "status" },
        { text: "ACTION", value: "actions", sortable: false }
      ],
      headersForCategory: [
        { text: "#", value: "id" },
        { text: "images", value: "image" },
        { text: "Product Category", value: "productCategory" },
        { text: "ACTION", value: "actions", sortable: false }
      ],
      headersForIngredients: [
        // { text: "", value: "", sortable: false },
        // { text: "", value: "", sortable: false },
        { text: "", value: "", sortable: false },
        { text: "#", value: "id" },
        { text: "Ingredients", value: "ingredientsName" },
        { text: "Ingredient's Type", value: "type" },
        { text: "Action", value: "actions", sortable: false },
        { text: "", value: "", sortable: false },
      ],
      headersForProduct: [
        { text: "#", value: "id" },
        { text: "images", value: "image" },
        { text: "Name", value: "productName" },
        { text: "Description", value: "description" },
        { text: "Category", value: "productCategory" },
        { text: "Low Dose Price", value: "lowPrice" },
        { text: "High Dose Price", value: "highPrice" },
        { text: "Over Dose Price", value: "overPrice" },
        { text: "Low Dose Online Price", value: "onlinelowPrice" },
        { text: "High Dose Online Price", value: "onlinehighPrice" },
        { text: "Over Dose Online Price", value: "onlineoverPrice" },
        { text: "Status", value: "status" },
        { text: "ACTION", value: "actions", sortable: false }
      ],
      headersForCupSize: [
        { text: "Date", value: "created_at" },
        { text: "Low Dose Cup", value: "incomingLowDose" },
        { text: "High Dose Cup", value: "incomingHighDose" },
        { text: "Over Dose Cup", value: "incomingOverDose" },
        { text: "Total IncomingCup", value: "incomingOverDose" + "" }
      ],
      loadingShow: false,
      errorMessage1: null,
      errorMessage2: null,
      errorMessage3: null,
      errorMessage4: null,
      errorMessage5: null,
      errorMessage6: null,
      errorMessage7: null,
      errorMessage8: null,
      errorMessage9: null,
      deleteID: null,
      deleteParam: null,
      quantityRetrieve: [],
      packOfPearl: '',
      canOfFructose: '',
      bottleSyrup: '',
      packOfTea: '',
      canOfWintermelon: '',
      bottleCreamMilk: '',
      packOfPowder: '',
      value: [],
      options: []
    };
  },
  mounted() {
    this.retrieveCategories();
    this.retrieveProducts();
    this.retrieveAddOns();
    this.retrieveCupType();
    this.retrieveCupSize();
    this.retrieveIngredients();
    this.retrieveAddedIngredients();
  },
  components: {
    loading,
    addingIngredients,
    calculation,
    newIngredients,
    Multiselect,
    updateIng
  },
  methods: {
    showEditIngredients(item){
      setTimeout(()=> {
        this.dialogForNewIngredients = true
        this.$nextTick(() => 
          this.$refs.show.editIngredient(item)
        )
      }, 1000)
    },
    getData(param){
      if(param.type === 'Pack of Pearl'){
        return this.quantityRetrieve[param.id-1] ? this.quantityRetrieve[param.id-1] + ' scopes of pearl available' : 'No available scopes of powder'
      }else if(param.type === 'Can of Fructose'){
        return this.quantityRetrieve[param.id-1] ? this.quantityRetrieve[param.id-1] + ' ml of fructose available' : 'No available scopes of powder'
      }else if(param.type === 'Bottle of Dough Syrup'){
        return this.quantityRetrieve[param.id-1] ? this.quantityRetrieve[param.id-1] + ' ml of cookie dough syrup available' : 'No available scopes of powder'
      }else if(param.type === 'Pack of Tea'){
        return this.quantityRetrieve[param.id-1] ? this.quantityRetrieve[param.id-1] + ' ml of tea available' : 'No available scopes of powder'
      }else if(param.type === 'Can of Wintermelon Syrup'){
        return this.quantityRetrieve[param.id-1] ? this.quantityRetrieve[param.id-1] + ' ml of wintermelon syrup available' : 'No available scopes of powder'
      }else if(param.type === 'Bottle of Cream Milk'){
        return this.quantityRetrieve[param.id-1] ? this.quantityRetrieve[param.id-1] + ' ml of cream milk available' : 'No available scopes of powder'
      }else if(param.type === 'Pack of Powder'){
        return this.quantityRetrieve[param.id-1] ? this.quantityRetrieve[param.id-1] + ' scopes of powder available' : 'No available scopes of powder'
      }else{
        return 0
      }
    },
    retrieveCalculation(){
      this.loadingShow = true
      this.$axios.post(AUTH.url + "retrieveCalculation", {}, AUTH.config).then(response => {
          this.loadingShow = false
          if(response.data.status === 'Token is Expired'){
              AUTH.deauthenticate()
          }
          this.packOfPearl = response.data.calculations[0].packOfPearl
          this.canOfFructose = response.data.calculations[0].canOfFructose
          this.bottleSyrup = response.data.calculations[0].bottleSyrup
          this.packOfTea = response.data.calculations[0].packOfTea
          this.canOfWintermelon = response.data.calculations[0].canOfWintermelon
          this.bottleCreamMilk = response.data.calculations[0].bottleCreamMilk
          this.packOfPowder = response.data.calculations[0].packOfPowder
      });
    },
    retrieveAddedIngredients(){
      this.loadingShow = true
      this.$axios.post(AUTH.url + "retrieveRemainingData", {}, AUTH.config).then(response => {
        this.loadingShow = false
        if(response.data.status === 'Token is Expired'){
          AUTH.deauthenticate()
        }
        this.quantityRetrieve = JSON.parse(response.data.addIngredient[0].remainingQuantity)
      });
    },
    retrieveIngredients(){
      this.loadingShow = true
      this.$axios.post(AUTH.url + "retrieveIngredients", {}, AUTH.config).then(response => {
        this.loadingShow = false
        if(response.data.status === 'Token is Expired'){
          AUTH.deauthenticate()
        }
        this.options = []
        this.ingredientsData = response.data.ingredients
        this.ingredientsData.forEach(el => {
          this.options.push({ingredientsName: el.ingredientsName})
        })
        console.log(this.options)
      });
    },
    closeModal(){
      this.dialogForCalculation = false
      this.dialogForIngredients = false
      this.dialogForNewIngredients = false
      // this.ingredientsToAdd = false
    },
    deleteNow(){
      if(this.deleteParam === 'category'){
        this.deleteCategory(this.deleteID)
      }else if(this.deleteParam === 'product'){
        this.deleteProduct(this.deleteID)
      }else if(this.deleteParam === 'addOns'){
        this.deleteAddOns(this.deleteID)
      }else if(this.deleteParam === 'cupType'){
        this.deleteCupType(this.deleteID)
      }
    },
    showDelete(id, param){
      this.dialogConfirmation = true
      this.deleteID = id
      this.deleteParam = param
    },
    validate(param){
      if(param === 'lowDose'){
        if(parseInt(this.lowPrice) < 1){
          this.errorMessage1 = 'Low Dose Price must be greater than 0'
        }else{
          this.errorMessage1 = null
        }
      }else if(param === 'highDose'){
        if(parseInt(this.highPrice) <= parseInt(this.lowPrice)){
          this.errorMessage1 = 'High Dose Price must be greater than Low Dose Price'
        }else{
          this.errorMessage1 = null
        }
      }else if(param === 'overDose'){
        if(parseInt(this.overPrice) <= parseInt(this.highPrice)){
          this.errorMessage1 = 'Over Dose Price must be greater than High Dose Price'
        }else{
          this.errorMessage1 = null
        }
      }else if(param === 'onlineLowDose'){
        if(parseInt(this.onlinelowPrice) <= 0){
          this.errorMessage1 = 'Over Dose Online Price must be greater than High Dose Price'
        }else{
          this.errorMessage1 = null
        }
      }else if(param === 'onlineHighDose'){
        if(parseInt(this.onlinehighPrice) <= parseInt(this.onlinelowPrice)){
          this.errorMessage1 = 'Over Dose Online Price must be greater than High Dose Price'
        }else{
          this.errorMessage1 = null
        }
      }else if(param === 'onlineOverDose'){
        if(parseInt(this.onlineoverPrice) <= parseInt(this.onlinehighPrice)){
          this.errorMessage1 = 'Over Dose Online Price must be greater than High Dose Price'
        }else{
          this.errorMessage1 = null
        }
      }else if(param === 'addOnsPrice'){
        if(parseInt(this.addOnsPrice) < 0){
          this.errorMessage2 = 'Add-ons Price must be greater than 0'
        }else{
          this.errorMessage2 = null
        }
      }else if(param === 'onlineAddOnsPrice'){
        if(parseInt(this.onlineAddOnsPrice) < parseInt(this.addOnsPrice)){
          this.errorMessage3 = 'Online Add-ons Price must be greater than Add-ons Price'
        }else{
          this.errorMessage3 = null
        }
      }else if(param === 'cupTypePrice'){
        if(parseInt(this.inputCupPrice) < 0){
          this.errorMessage4 = 'Cup Type Price must be greater 0'
        }else{
          this.errorMessage4 = null
        }
      }else if(param === 'onlineCupTypePrice'){
        if(parseInt(this.inputCupOnlinePrice) < parseInt(this.inputCupPrice)){
          this.errorMessage5 = 'Online Cup Type Price must be greater than Cup Type Price'
        }else{
          this.errorMessage5 = null
        }
      }else if(param === 'cupSize'){
        if(parseInt(this.lowDoseCup) <= 0 || parseInt(this.highDoseCup) <= 0 || parseInt(this.overDoseCup) <= 0){
          this.errorMessage6 = 'Cup Size Quantity must be greater than 0'
        }else{
          this.errorMessage6 = null
        }
      }else if(param === 'multiSelect'){
        if(this.storeIngredients === [] && this.storeIngredients.length <= 0){
          this.errorMessage9 = 'Ingredients is required'
        }else{
          this.errorMessage9 = null
        }
      }
    },
    getNumberDate(date, id){
      return moment(date).format('MMDDYY') + id
    },
    getDate(date){
      return moment(date).format('MM/DD/YYYY')
    },
    deleteCupType(id){
      this.loadingShow = true
      let param = {
        id: id
      };
      this.$axios
        .post(AUTH.url + "deleteCupType", param, AUTH.config)
        .then(response => {
          if(response.data.status === 'Token is Expired'){
            AUTH.deauthenticate()
          }
          this.deleteID = null
          this.deleteParam = null
          this.dialogConfirmation = false
          this.loadingShow = false
          swal({
            title: "You successfully deleted the cup type",
            icon: "success"
          });
          this.retrieveCupType();
      });
    },
    deleteAddOns(id){
      this.loadingShow = true
      let param = {
        id: id
      };
      this.$axios
        .post(AUTH.url + "deleteAddOns", param, AUTH.config)
        .then(response => {
          if(response.data.status === 'Token is Expired'){
            AUTH.deauthenticate()
          }
          this.deleteID = null
          this.deleteParam = null
          this.dialogConfirmation = false
          this.loadingShow = false
          swal({
            title: "You successfully deleted the add-ons",
            icon: "success"
          });
          this.retrieveAddOns();
      });
    },
    deleteProduct(id){
      this.loadingShow = true
      let param = {
        id: id
      };
      this.$axios
        .post(AUTH.url + "deleteProduct", param, AUTH.config)
        .then(response => {
          if(response.data.status === 'Token is Expired'){
            AUTH.deauthenticate()
          }
          this.deleteID = null
          this.deleteParam = null
          this.dialogConfirmation = false
          this.loadingShow = false
          swal({
            title: "You successfully deleted the product",
            icon: "success"
          });
          this.retrieveProducts();
      });
    },
    deleteCategory(id){
      this.loadingShow = true
      let param = {
        id: id
      };
      this.$axios
        .post(AUTH.url + "deleteCategory", param, AUTH.config)
        .then(response => {
          if(response.data.status === 'Token is Expired'){
            AUTH.deauthenticate()
          }
          this.deleteID = null
          this.deleteParam = null
          this.dialogConfirmation = false
          this.loadingShow = false
          swal({
            title: "You successfully deleted the category",
            icon: "success"
          });
          this.retrieveCategories();
      });
    },
    changeName(param){
      if(param === 'category'){
        this.cat = true
        this.prod = false
        this.size = false
        this.ons = false
        this.cup = false
      }else if(param === 'product'){
        this.cat = false
        this.prod = true
        this.size = false
        this.ons = false
        this.cup = false
      }else if(param === 'cupSize'){
        this.cat = false
        this.prod = false
        this.size = true
        this.ons = false
        this.cup = false
      }else if(param === 'cupType'){
        this.cat = false
        this.prod = false
        this.size = false
        this.ons = false
        this.cup = true
      }else if(param === 'addOns'){
        this.cat = false
        this.prod = false
        this.size = false
        this.ons = true
        this.cup = false
      }
    },
    NACupUpdate(id) {
      this.loadingShow = true
      let param = {
        id: id,
        status: "Not Available"
      };
      this.$axios
        .post(AUTH.url + "updateAvailableCupType", param, AUTH.config)
        .then(response => {
          this.retrieveCupType();
          this.loadingShow = false
          if(response.data.status === 'Token is Expired'){
            AUTH.deauthenticate()
          }
        });
    },
    availableCupUpdate(id) {
      this.loadingShow = true
      let param = {
        id: id,
        status: "Available"
      };
      this.$axios
        .post(AUTH.url + "updateAvailableCupType", param, AUTH.config)
        .then(response => {
          if(response.data.status){
            AUTH.deauthenticate()
          }
          this.retrieveCupType();
          this.loadingShow = false
        });
    },
    retrieveCupType() {
      this.loadingShow = true
      this.$axios.post(AUTH.url + "retrieveAllCupType", {}, AUTH.config).then(response => {
        if(response.data.status){
          AUTH.deauthenticate()
        }
        this.cupData = response.data.cupType;
        this.loadingShow = false
      });
    },
    retrieveCupSize() {
      this.loadingShow = true
      this.$axios.post(AUTH.url + "retrieveCupSize", {}, AUTH.config).then(response => {
        if(response.data.status){
          AUTH.deauthenticate()
        }
        this.loadingShow = false
        this.cupSizeData = response.data.quantityCupsInDB.reverse();
            
        response.data.quantityCupsInDB.forEach(element => {
            
        });

        let totalCup = response.data.quantityCupsInDB.incomingOverDose;
      });
    },
    addingCupType() {
      this.loadingShow = true
      if (this.inputCupPrice !== null && this.inputCup !== null && this.inputCupOnlinePrice !== null &&
      this.inputCupPrice !== '' && this.inputCup !== '' && this.inputCupOnlinePrice !== '' &&
      this.errorMessage4 === null && this.errorMessage5 === null) {
        let param = {
          cupType: this.inputCup,
          inputCupOnlinePrice: this.inputCupOnlinePrice,
          price: this.inputCupPrice,
          status: "Available"
        };
        this.$axios.post(AUTH.url + "addingCupType", param, AUTH.config).then(response => {
          if(response.data.status){
            AUTH.deauthenticate()
          }
          this.loadingShow = false
          swal({
            title: "You have successfully added a cup type",
            icon: "success"
          });
          this.retrieveCupType();
          this.dialogForCupType = false;
        });
      } else {
        this.errorMessage = "Please fill up all fields";
        this.loadingShow = false
      }
    },
    addingCupSize() {
      this.loadingShow = true
      if (
        this.lowDoseCup !== null &&
        this.highDoseCup !== null &&
        this.overDoseCup !== null && 
        this.lowDoseCup !== "" &&
        this.highDoseCup !== "" &&
        this.overDoseCup !== "" && 
        this.lowDoseCup >= 0  &&
        this.highDoseCup >= 0  &&
        this.overDoseCup >= 0  && 
        this.errorMessage6 === null
      ) {
        let param = {
          incomingLowDose: this.lowDoseCup,
          incomingHighDose: this.highDoseCup,
          incomingOverDose: this.overDoseCup
        };
        this.$axios.post(AUTH.url + "addIncomingCups", param, AUTH.config).then(response => {
          if(response.data.status){
            AUTH.deauthenticate()
          }
          this.loadingShow = false
          swal({
            title: "You have successfully added cups",
            icon: "success"
          });
          this.retrieveCupSize();
          this.hide();
        });
      } else if(
        this.lowDoseCup < 0  &&
        this.highDoseCup < 0  &&
        this.overDoseCup < 0
      ){
        this.loadingShow = false
        this.errorMessage = "Fields must be atleast 0";
      } else {
        this.loadingShow = false
        this.errorMessage = "Please fill up all fields";
      }
    },
    editingCupType() {
      this.loadingShow = true
      if (this.inputCupPrice !== null && this.inputCup !== null && this.inputCupOnlinePrice !== null &&
      this.inputCupPrice !== '' && this.inputCup !== '' && this.inputCupOnlinePrice !== '' &&
      this.errorMessage4 === null && this.errorMessage5 === null) {
        let param = {
          id: this.idCup,
          cupType: this.inputCup,
          inputCupOnlinePrice: this.inputCupOnlinePrice,
          price: this.inputCupPrice,
          status: this.cupStatus
        };
        this.$axios.post(AUTH.url + "editingCupType", param, AUTH.config).then(response => {
          if(response.data.status){
            AUTH.deauthenticate()
          }
          this.loadingShow = false
          swal({
              title: "You have successfully updated the cup type",
              icon: "success"
            });
          this.retrieveCupType();
          this.hide()
        });
      } else {
        this.errorMessage = "Please fill up all fields";
        this.loadingShow = false
      }
    },
    normalPrice(event) {
      if (this.priceEvent !== event.target) {
        event.target.classList.add("borderStyle1");
        event.target.classList.remove("btnBorderStyle");
        if (this.priceEvent !== "") {
          this.priceEvent.classList.add("btnBorderStyle");
          this.priceEvent.classList.remove("borderStyle1");
        }
      }
      this.priceEvent = event.target;
      this.online = false;
    },
    onlinePrice(event) {
      if (this.priceEvent !== event.target) {
        event.target.classList.add("borderStyle1");
        event.target.classList.remove("btnBorderStyle");
        if (this.priceEvent !== "") {
          this.priceEvent.classList.add("btnBorderStyle");
          this.priceEvent.classList.remove("borderStyle1");
        }
      }
      this.online = true;
      this.priceEvent = event.target;
    },
    onImgChange(e) {
        this.img = e.target.files[0]
        if (this.img.size > 1024 * 1024) {
          this.img = null
          this.imgURL = this.noImage
          this.errorMessage7 = 'Size too large. It must not exceed 1MB'
        }else{
          this.errorMessage7 = null
          this.imgURL = URL.createObjectURL(e.target.files[0])
          this.loadingShow = true
          let data = new FormData()
          data.append('file', this.img)
          this.$axios.post('http://ec2-34-205-139-231.compute-1.amazonaws.com:3232/api/file/upload', data).then(res => {
            this.toSaveImage = res.data.result.body.file_url
            this.loadingShow = false
          })
        }
    },
    formSubmitProduct(e) {
      e.preventDefault();
      this.loadingShow = true
      this.validate('multiSelect')
      if(this.storeIngredients.length < 1){
        this.errorMessage9 = 'Ingredients is required'
      }else{
        this.errorMessage9 = null
      }
      if (this.toSaveImage !== '' && this.prodType !== '' && this.productName !== '' &&
        this.lowPrice !== '' && this.highPrice !== '' && this.overPrice !== '' &&
        this.onlinelowPrice !== '' && this.onlinehighPrice !== '' & this.onlineoverPrice !== '' &&
        this.lowPrice !== '' && this.highPrice !== '' && this.overPrice !== '' &&
        this.onlinelowPrice !== '' && this.onlinehighPrice !== '' && this.onlineoverPrice !== '' &&
        this.toSaveImage !== null && this.prodType !== null && this.productName !== null &&
        this.lowPrice !== null && this.highPrice !== null && this.overPrice !== null &&
        this.onlinelowPrice !== null && this.onlinehighPrice !== null && this.onlineoverPrice !== null &&
        parseInt(this.lowPrice) > 0 && parseInt(this.highPrice) > 0 && parseInt(this.overPrice) > 0 &&
        parseInt(this.onlinelowPrice) > 0 && parseInt(this.onlinehighPrice) > 0 && parseInt(this.onlineoverPrice) > 0 && this.errorMessage1 === null &&
        this.errorMessage7 === null && this.errorMessage8 === null && this.errorMessage9 === null){
          let value = []
          this.value.forEach(el => {
            value.push(el.ingredientsName)
          })
          let currentObj = this;
          const config = {
            headers: {
                'content-type': 'multipart/form-data',
                Authorization: 'Bearer ' + localStorage.getItem('userToken')
              }
          }
          let formData = new FormData();
          formData.append('image', this.toSaveImage)
          formData.append('productCategory', this.prodType)
          formData.append('productName', this.productName)
          formData.append('ingredients', value)
          formData.append('description', this.description)
          formData.append('status', 'Available')
          formData.append('lowPrice', this.lowPrice)
          formData.append('highPrice', this.highPrice)
          formData.append('overPrice', this.overPrice)
          formData.append('onlinelowPrice', this.onlinelowPrice)
          formData.append('onlinehighPrice', this.onlinehighPrice)
          formData.append('onlineoverPrice', this.onlineoverPrice)
          this.$axios.post('/formSubmit', formData, config).then(function (response) {
            currentObj.loadingShow = false
            swal({
              title: "You have successfully added a product",
              icon: "success"
            });
            currentObj.success = response.data.success
            currentObj.retrieveCategories()
            currentObj.retrieveProducts()
            currentObj.hide()
            if(response.data.status){
              AUTH.deauthenticate()
            }
          })
          .catch(function (error) {
            currentObj.output = error;
            currentObj.loadingShow = false
          });
      }else{
          this.errorMessage = 'Please fill up all fields'
          this.loadingShow = false
      }
    },
    editProduct(item) {
      this.value = []
      var selected = JSON.parse(item.ingredients).split(',')
      selected.forEach(el => {
        this.value.push({ingredientsName: el})
      })
      this.errorMessage = null;
      this.dialogForProduct = true;
      this.productName = item.productName
      this.description = item.description
      this.prodType = item.productCategory
      this.toSaveImage = item.image
      this.lowPrice = item.lowPrice
      this.highPrice = item.highPrice
      this.overPrice = item.overPrice
      this.onlinelowPrice = item.onlinelowPrice
      this.onlinehighPrice = item.onlinehighPrice
      this.onlineoverPrice = item.onlineoverPrice
      this.imgURL = item.image
      this.productAdd = false
      this.productEdit = true
      this.status = item.status
      this.prodId = item.id
    },
    updateProduct(e) {
      this.loadingShow = true
      if (this.toSaveImage !== '' && this.prodType !== '' && this.productName !== '' &&
        this.lowPrice !== '' && this.highPrice !== '' && this.overPrice !== '' &&
        this.onlinelowPrice !== '' && this.onlinehighPrice !== '' & this.onlineoverPrice !== '' &&
        this.lowPrice !== '' && this.highPrice !== '' && this.overPrice !== '' &&
        this.onlinelowPrice !== '' && this.onlinehighPrice !== '' && this.onlineoverPrice !== '' &&
        this.toSaveImage !== null && this.prodType !== null && this.productName !== null &&
        this.lowPrice !== null && this.highPrice !== null && this.overPrice !== null &&
        this.onlinelowPrice !== null && this.onlinehighPrice !== null & this.onlineoverPrice !== null &&
        this.lowPrice > 0 && this.highPrice > 0 && this.overPrice > 0 &&
        this.onlinelowPrice > 0 && this.onlinehighPrice > 0 && this.onlineoverPrice > 0 && this.errorMessage1 === null &&
        this.errorMessage7 === null && this.errorMessage8 === null){
          e.preventDefault();
          var value = []
          this.value.forEach(el => {
            value.push(el.ingredientsName)
          })
          let currentObj = this;
          const config = {
              headers: {
                'content-type': 'multipart/form-data',
                Authorization: 'Bearer ' + localStorage.getItem('userToken')
              }
          }
          let formData = new FormData();
          formData.append('id', this.prodId)
          formData.append('image', this.toSaveImage)
          formData.append('ingredients', value)
          formData.append('status', this.status)
          formData.append('productCategory', this.prodType)
          formData.append('productName', this.productName)
          formData.append('description', this.description)
          formData.append('lowPrice', this.lowPrice)
          formData.append('highPrice', this.highPrice)
          formData.append('overPrice', this.overPrice)
          formData.append('onlinelowPrice', this.onlinelowPrice)
          formData.append('onlinehighPrice', this.onlinehighPrice)
          formData.append('onlineoverPrice', this.onlineoverPrice)
          this.$axios.post('/updateProduct', formData, config)
          .then(function (response) {
            if(response.data.status){
              AUTH.deauthenticate()
            }
            currentObj.loadingShow = false
            swal({
              title: "You have successfully updated the product",
              icon: "success"
            });
            currentObj.success = response.data.success
            currentObj.retrieveCategories()
            currentObj.retrieveProducts()
            currentObj.hide()
          })
          .catch(function (error) {
              currentObj.output = error;
              currentObj.loadingShow = false
          });
      }else{
          this.errorMessage = 'Please fill up all fields'
          this.loadingShow = false
      }
    },
    productStatusUpdate(id) {
      this.loadingShow = true
      let param = {
        id: id,
        status: "Not Available"
      };
      this.$axios
        .post(AUTH.url + "updateStatusProduct", param, AUTH.config)
        .then(response => {
          if(response.data.status){
            AUTH.deauthenticate()
          }
          this.retrieveProducts();
          this.loadingShow = false
        });
    },
    productStatusAvailable(id) {
      this.loadingShow = true
      let param = {
        id: id,
        status: "Available"
      };
      this.$axios
        .post(AUTH.url + "updateStatusProduct", param, AUTH.config)
        .then(response => {
          if(response.data.status){
            AUTH.deauthenticate()
          }
          this.retrieveProducts();
          this.loadingShow = false
        });
    },
    onImageChange(e) {
      this.image = e.target.files[0];
      if (this.image.size > 1024 * 1024) {
        this.image.name = ''
        this.imageURL = this.noImage
        this.errorMessage8 = 'Size too large. It must not exceed 1MB'
      }else{
        this.errorMessage8 = null
        this.imageURL = URL.createObjectURL(e.target.files[0]);
        this.loadingShow = true
        let data = new FormData()
        data.append('file', this.image)
        this.$axios.post('http://ec2-34-205-139-231.compute-1.amazonaws.com:3232/api/file/upload', data).then(res => {
          this.toSaveImage2 = res.data.result.body.file_url
          this.loadingShow = false
        })
      }
    },
    editCategories(item){
      this.errorMessage = null;
      this.dialogForCategory = true;
      this.editCat = true;
      // this.image = item.image
      this.toSaveImage2 = item.image
      this.imageURL = item.image;
      this.productType = item.productCategory;
      this.categoryOld = item.productCategory;
      this.catId = item.id
    },
    updateCategory(e){
      this.loadingShow = true
      if (this.toSaveImage2 !== '' && this.productType !== '' && this.toSaveImage2 !== null && this.productType !== null && this.errorMessage7 === null && this.errorMessage8 === null) {
        e.preventDefault();
        let currentObj = this;

        const config = {
          headers: {
              "content-type": "multipart/form-data",
              Authorization: 'Bearer ' + localStorage.getItem('userToken')
            }
        }
        let formData = new FormData();
        formData.append("id", this.catId);
        // formData.append("image", this.image);
        formData.append("image", this.toSaveImage2);
        formData.append("productCategory", this.productType);
        axios
          .post("/updateCategory", formData, config)
          .then(function(response) {
            if(response.data.status){
              AUTH.deauthenticate()
            }
            currentObj.loadingShow = false
            swal({
              title: "You have successfully updated the category",
              icon: "success"
            }).then(el => {
              let param = {
                oldType: currentObj.categoryOld,
                productCategory: currentObj.productType
              }
              axios.post('/updateProductCategory', param, AUTH.config)
              .then(function (response) {
                if(response.data.status){
                  AUTH.deauthenticate()
                }
              })
              currentObj.success = response.data.success;
              currentObj.retrieveCategories();
              currentObj.retrieveProducts();
              currentObj.hide();
  
            })
            
          })
          .catch(function(error) {
            currentObj.loadingShow = false
            currentObj.output = error;
          });
      } else {
        this.errorMessage = "Please fill up all fields";
        this.loadingShow = false
      }
    },
    formSubmit(e) {
      if (this.toSaveImage2 !== '' && this.productType !== '' && this.toSaveImage2 !== null && this.productType !== null && this.image !== null && this.productType !== null && this.errorMessage7 === null && this.errorMessage8 === null) {
        this.loadingShow = true
        e.preventDefault();
        let currentObj = this;

        const config = {
          headers: {
              "content-type": "multipart/form-data",
              Authorization: 'Bearer ' + localStorage.getItem('userToken')
            }
        }
        let formData = new FormData();
        formData.append("image", this.toSaveImage2);
        formData.append("productCategory", this.productType);
        axios
          .post(AUTH.url + "addCategory", formData, config)
          .then(function(response) {
            if(response.data.status){
              AUTH.deauthenticate()
            }
            currentObj.loadingShow = false
            swal({
              title: "You have successfully added a category",
              icon: "success"
            });
            currentObj.success = response.data.success;
            currentObj.retrieveCategories();
            currentObj.retrieveProducts();
            currentObj.hide();
          })
          .catch(function(error) {
            currentObj.loadingShow = false
            currentObj.output = error;
          });
      } else {
        this.errorMessage = "Please fill up all fields";
      }
    },
    product(event) {
      if (this.secondEvent !== event.target) {
        event.target.classList.add("borderStyle");
        event.target.classList.remove("btnBorderStyle1");
        if (this.secondEvent !== "") {
          this.secondEvent.classList.add("btnBorderStyle1");
          this.secondEvent.classList.remove("borderStyle");
        }
      }
      this.secondEvent = event.target;
      this.prod = true;
      this.cat = false;
      this.ons = false;
      this.cup = false;
      this.size = false;
    },
    cupSize(event) {
      if (this.secondEvent !== event.target) {
        event.target.classList.add("borderStyle");
        event.target.classList.remove("btnBorderStyle1");
        if (this.secondEvent !== "") {
          this.secondEvent.classList.add("btnBorderStyle1");
          this.secondEvent.classList.remove("borderStyle");
        }
      }
      this.secondEvent = event.target;
      this.size = true;
      this.prod = false;
      this.cat = false;
      this.ons = false;
      this.cup = false;
    },
    category(event) {
      this.dataHeader = [
        { text: "#", value: "id" },
        { text: "images", value: "image" },
        { text: "Product Category", value: "productCategory" },
        { text: "Status", value: "status" },
        { text: "ACTION", value: "actions", sortable: false }
      ];
      if (this.secondEvent !== event.target) {
        event.target.classList.add("borderStyle");
        event.target.classList.remove("btnBorderStyle1");
        if (this.secondEvent !== "") {
          this.secondEvent.classList.add("btnBorderStyle1");
          this.secondEvent.classList.remove("borderStyle");
        }
      }
      this.secondEvent = event.target;
      this.prod = false;
      this.cat = true;
      this.ons = false;
      this.cup = false;
      this.size = false;
    },
    addOnsShow(event) {
      if (this.secondEvent !== event.target) {
        event.target.classList.add("borderStyle");
        event.target.classList.remove("btnBorderStyle1");
        if (this.secondEvent !== "") {
          this.secondEvent.classList.add("btnBorderStyle1");
          this.secondEvent.classList.remove("borderStyle");
        }
      }
      this.secondEvent = event.target;
      this.prod = false;
      this.cat = false;
      this.ons = true;
      this.cup = false;
      this.size = false;
    },
    addCupType(event) {
      if (this.secondEvent !== event.target) {
        event.target.classList.add("borderStyle");
        event.target.classList.remove("btnBorderStyle1");
        if (this.secondEvent !== "") {
          this.secondEvent.classList.add("btnBorderStyle1");
          this.secondEvent.classList.remove("borderStyle");
        }
      }
      this.secondEvent = event.target;
      this.prod = false;
      this.cat = false;
      this.ons = false;
      this.cup = true;
      this.size = false;
    },
    showAddOns() {
      this.errorMessage = null
      this.dialogForAddOns = true;
      this.editAddOnsShow = false;
      this.addonsShow = true;
      this.inputAddOns = null;
      this.onlineAddOnsPrice = null;
      this.addOnsPrice = null;
    },
    showCupSize() {
      this.errorMessage = null;
      this.dialogForCupSize = true;
      this.cupSizeShow = true;
      this.lowDoseCup = null;
      this.highDoseCup = null;
      this.overDoseCup = null;
    },
    showProduct() {
      this.errorMessage = null;
      this.dialogForProduct = true;
      this.productAdd = true;
      this.productEdit = false;
      this.prodType = null;
      this.productName = null;
      this.description = null;
      this.lowPrice = null;
      this.highPrice = null;
      this.overPrice = null;
      this.onlinelowPrice = null;
      this.onlinehighPrice = null;
      this.onlineoverPrice = null;
      this.imgURL = this.noImage;
      this.img = null;
      this.storeIngredients = []
    },
    showIngredients() {
      this.dialogForIngredients = true;
    },
    showNewIngredients() {
      this.dialogForNewIngredients = true;
    },
    showCalculation() {
      this.dialogForCalculation = true;
    },
    showCategory() {
      this.editCat = false
      this.image = null
      this.productType = null
      this.dialogForCategory = true;
      this.imageURL = this.noImage;
      this.productType = null;
      this.errorMessage = null;
    },
    showCupType() {
      this.errorMessage = null
      this.dialogForCupType = true;
      this.btnCupType = true;
      this.btnEditCupType = false;
      this.inputCupPrice = null;
      this.inputCupOnlinePrice = null;
      this.inputCup = null;
      this.inputCupQuantity = null;
    },
    editCup(item) {
      this.errorMessage = null;
      this.dialogForCupType = true;
      this.btnEditCupType = true;
      this.btnCupType    = false;
      this.idCup = item.id;
      this.inputCup = item.cupTypeName;
      this.inputCupOnlinePrice = item.inputCupOnlinePrice;
      this.inputCupPrice = item.cupTypePrice;
      this.cupStatus = item.status;
    },
    hide() {
      this.dialogForCategory = false;
      this.dialogForProduct = false;
      this.dialogForAddOns = false;
      this.dialogForCupType = false;
      this.dialogForCupSize = false;
      this.showProductModal = false;
      this.showCategoryModal = false;
      this.showIngredientsModal = false;
      this.editAddOnsShow = false;
      this.addonsShow = false;
      this.showCupTypeModal = false;
      this.btnCupType = false;
      this.btnEditCupType = false;
      this.showCupSizeModal = false;
    },
    redirect(route) {
      ROUTER.push(route).catch(() => {});
    },
    addAddOns() {
      this.loadingShow = true
      if (
        this.addOnsPrice !== null &&
        this.inputAddOns !== null &&
        this.onlineAddOnsPrice !== null && 
        this.errorMessage2 === null && 
        this.errorMessage3 === null &&
        this.addOnsPrice !== '' &&
        this.inputAddOns !== '' &&
        this.onlineAddOnsPrice !== ''
      ) {
        let param = {
          addOns: this.inputAddOns,
          onlineAddOnsPrice: this.onlineAddOnsPrice,
          price: this.addOnsPrice,
          status: "Available"
        };
        this.$axios.post(AUTH.url + "addingAddOns", param, AUTH.config).then(response => {
          if(response.data.status){
            AUTH.deauthenticate()
          }
          this.loadingShow = false
          swal({
            title: "You have successfully added an add-ons",
            icon: "success"
          });
          this.retrieveAddOns();
          this.dialogForAddOns = false;

        });
      } else {
        this.errorMessage = "Please fill up all fields";
        this.loadingShow = false
      }
    },
    retrieveAddOns() {
      this.loadingShow = true
      this.$axios.post(AUTH.url + "retrieveAllAddOns", {}, AUTH.config).then(response => {
        if(response.data.status){
          AUTH.deauthenticate()
        }
        this.datas = response.data.addons
        this.loadingShow = false
      });
    },
    editAddOns(item) {
      this.errorMessage = null;
      this.dialogForAddOns = true;
      this.inputAddOns = item.addons_name;
      this.addOnsPrice = item.addons_price;
      this.onlineAddOnsPrice = item.onlineAddOnsPrice;
      this.addOnsStat = item.status;
      this.addonsShow = false;
      this.editAddOnsShow = true;
      this.addAddOns = false;
      this.idAddOns = item.id;
    },
    editAddOnsData() {
      this.loadingShow = true
      if (this.addOnsPrice !== null && this.inputAddOns !== null &&
        this.onlineAddOnsPrice !== null && this.addOnsPrice !== '' &&
        this.inputAddOns !== '' && this.onlineAddOnsPrice !== '' &&
        this.errorMessage2 === null && this.errorMessage3 === null) {
        let param = {
          id: this.idAddOns,
          addOns: this.inputAddOns,
          onlineAddOnsPrice: this.onlineAddOnsPrice,
          price: this.addOnsPrice,
          status: this.addOnsStat
        };
        this.$axios.post(AUTH.url + "updateAddOns", param, AUTH.config).then(response => {
          if(response.data.status){
            AUTH.deauthenticate()
          }
          this.loadingShow = false
          swal({
            title: "You have successfully updated the add-ons",
            icon: "success"
          });
          this.retrieveAddOns();
          this.hide();
        });
      } else {
        this.errorMessage = "Please fill up all fields";
        this.loadingShow = false
      }
    },
    NAStatusUpdate(id) {
      this.loadingShow = true
      let param = {
        id: id,
        status: "Not Available"
      };
      this.$axios
        .post(AUTH.url + "updateStatusAddOns", param, AUTH.config)
        .then(response => {
          if(response.data.status){
            AUTH.deauthenticate()
          }
          this.loadingShow = false
          this.retrieveAddOns();
        });
    },
    availableStatusUpdate(id) {
      this.loadingShow = true
      let param = {
        id: id,
        status: "Available"
      };
      this.$axios
        .post(AUTH.url + "updateStatusAddOns", param, AUTH.config)
        .then(response => {
          if(response.data.status){
            AUTH.deauthenticate()
          }
          this.loadingShow = false
          this.retrieveAddOns();
        });
    },
    retrieveProducts() {
      this.loadingShow = true
      this.$axios.post(AUTH.url + "retrieveAllProduct", {}, AUTH.config).then(response => {
        if(response.data.status){
          AUTH.deauthenticate()
        }
        this.loadingShow = false
        this.productData = response.data.product;
      });
    },
    retrieveCategories() {
      this.loadingShow = true
      this.$axios.post(AUTH.url + "retrieveCategory", {}, AUTH.config).then(response => {
        if(response.data.status){
          AUTH.deauthenticate()
        }
        this.loadingShow = false
        this.categoryData = response.data.addCategory;
        this.categoryName = []
        response.data.addCategory.forEach(element => {
          this.categoryName.push(element.productCategory);
        });
      });
    }
  }
};
</script>
