<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/{any}', 'App\Http\Controllers\PageController@index')->where('any', '.*');
Route::post('register', 'App\Http\Controllers\UserController@register');
Route::post('login', 'App\Http\Controllers\UserController@authenticate');
Route::post('tokenRefresh', 'App\Http\Controllers\UserController@tokenRefresh');
Route::post('deaunthenticate', 'App\Http\Controllers\UserController@deaunthenticate');
Route::post('sendCode', 'App\Http\Controllers\UserController@sendCode');
Route::post('checkCode', 'App\Http\Controllers\UserController@checkCode');
Route::post('reset', 'App\Http\Controllers\UserController@reset');
Route::post('updateCode', 'App\Http\Controllers\UserController@updateCode');

Route::group(['middleware' => ['jwt.verify']], function() {
    Route::post('updateImage', 'App\Http\Controllers\UserController@updateImage');
    Route::post('getUserData', 'App\Http\Controllers\UserController@userdata');
    Route::post('getUserName', 'App\Http\Controllers\UserController@getUserName');
    Route::post('SaveNEWdata', 'App\Http\Controllers\UserController@SaveNEWdata');
    Route::post('user', 'App\Http\Controllers\UserController@getAuthenticatedUser');
    Route::post('retrieve', 'App\Http\Controllers\UserController@retrieve');
    Route::post('getImage', 'App\Http\Controllers\UserController@getImage');

    Route::post('getActivityLog', 'App\Http\Controllers\ActivityLogController@getActivityLog');

    Route::post('formSubmit','App\Http\Controllers\ProductController@formSubmit');
    Route::post('updateProduct','App\Http\Controllers\ProductController@updateProduct');
    Route::post('retrieveProduct','App\Http\Controllers\ProductController@retrieveProduct');
    Route::post('retrieveOneProduct','App\Http\Controllers\ProductController@retrieveOneProduct');
    Route::post('retrieveAllProduct','App\Http\Controllers\ProductController@retrieveAllProduct');
    Route::post('retrieveAllProductAscending','App\Http\Controllers\ProductController@retrieveAllProductAscending');
    Route::post('updateStatusProduct','App\Http\Controllers\ProductController@updateStatusProduct');
    Route::post('deleteProduct','App\Http\Controllers\ProductController@deleteProduct');
    Route::post('getProducts','App\Http\Controllers\ProductController@retrieveAllProductAscending');
    Route::post('RetrieveWithDelete','App\Http\Controllers\ProductController@RetrieveWithDelete');
    Route::post('updateProductCategory','App\Http\Controllers\ProductController@updateProductCategory');

    Route::post('addCategory','App\Http\Controllers\AddCategoryController@addCategory');
    Route::post('updateCategory','App\Http\Controllers\AddCategoryController@updateCategory');
    Route::post('retrieveCategory','App\Http\Controllers\AddCategoryController@retrieveCategory');
    Route::post('retrieveCategoryAscending','App\Http\Controllers\AddCategoryController@retrieveCategoryAscending');
    Route::post('retrieveCategoryForSales','App\Http\Controllers\AddCategoryController@retrieveCategoryAscending');
    Route::post('deleteCategory','App\Http\Controllers\AddCategoryController@deleteCategory');
    Route::post('retrieveCategoryById','App\Http\Controllers\AddCategoryController@retrieveCategoryById');

    Route::post('addCustomer','App\Http\Controllers\CustomerDetailsController@insertCustomer');
    Route::post('retrieveCustomer','App\Http\Controllers\CustomerDetailsController@retrieveCustomer');

    Route::post('addOrder','App\Http\Controllers\OrderController@addOrder');
    Route::post('onlineUpdate','App\Http\Controllers\OrderController@onlineUpdate');
    Route::post('updateCancelOrder','App\Http\Controllers\OrderController@updateCancelOrder');
    Route::post('updateStatusOrder','App\Http\Controllers\OrderController@updateStatusOrder');
    Route::post('updateOne','App\Http\Controllers\OrderController@updateOne');
    Route::post('updateOnlineStatus','App\Http\Controllers\OrderController@updateOnlineStatus');
    Route::post('deleteOrder','App\Http\Controllers\OrderController@deleteOrder');
    Route::post('updateCustomerOrder','App\Http\Controllers\OrderController@updateCustomerOrder');
    Route::post('retrieveCancelled','App\Http\Controllers\OrderController@retrieveCancelled');
    Route::post('retrieveAllCancelled','App\Http\Controllers\OrderController@retrieveAllCancelled');
    Route::post('retrieveOrder','App\Http\Controllers\OrderController@retrieveOrder');
    Route::post('retrieveCustomerOrder','App\Http\Controllers\OrderController@retrieveCustomerOrder');
    Route::post('retrieveOnlineOrder','App\Http\Controllers\OrderController@retrieveCustomerPending');
    Route::post('retrieveWholeOrder','App\Http\Controllers\OrderController@retrieveWholeOrder');
    Route::post('getOrder','App\Http\Controllers\OrderController@getOrder');
    Route::post('getDailyProductSales','App\Http\Controllers\OrderController@DailyProductSales');
    Route::post('getMonthlyProductSales','App\Http\Controllers\OrderController@MonthlyProductSales');
    Route::post('getQuarterlyProductSales','App\Http\Controllers\OrderController@QuarterlyProductSales');
    Route::post('getSemiProductSales','App\Http\Controllers\OrderController@SemiProductSales');
    Route::post('getAnnualProductSales','App\Http\Controllers\OrderController@AnnualProductSales');
    Route::post('retrieveSalesReportPerCategory','App\Http\Controllers\OrderController@retrieveSalesReportPerCategory');
    Route::post('retrievePendingOrders','App\Http\Controllers\OrderController@retrieveOnlineOrder');
    Route::post('retrieveOneOnlineOrder','App\Http\Controllers\OrderController@retrieveOneOnlineOrder');
    Route::post('retrieveCustomersOrdersForEdit','App\Http\Controllers\OrderController@retrieveCustomersOrdersForEdit');
    Route::post('deleteManyOrder','App\Http\Controllers\OrderController@deleteManyOrder');

    Route::post('addingAddOns','App\Http\Controllers\AddAddOnsController@addAddons');
    Route::post('retrievingAddOns','App\Http\Controllers\AddAddOnsController@retrieveAddOns');
    Route::post('updateStatusAddOns','App\Http\Controllers\AddAddOnsController@updateStatusAvailable');
    Route::post('updateAddOns','App\Http\Controllers\AddAddOnsController@updateAddOns');
    Route::post('retrieveOneAddOn','App\Http\Controllers\AddAddOnsController@retrieveOneAddOn');
    Route::post('retrieveAllAddOns','App\Http\Controllers\AddAddOnsController@retrieveAllAddOns');
    Route::post('retrieveOneAddOnName','App\Http\Controllers\AddAddOnsController@retrieveOneAddOnName');
    Route::post('deleteAddOns','App\Http\Controllers\AddAddOnsController@deleteAddOns');
    Route::post('retrieveWithDeleteAddOns','App\Http\Controllers\AddAddOnsController@retrieveWithDeleteAddOns');

    Route::post('addingCupType','App\Http\Controllers\CupTypeController@addingCupType');
    Route::post('retrieveCupType','App\Http\Controllers\CupTypeController@retrieveCupType');
    Route::post('retrieveOneCupType','App\Http\Controllers\CupTypeController@retrieveOneCupType');
    Route::post('updateAvailableCupType','App\Http\Controllers\CupTypeController@updateAvailableCupType');
    Route::post('editingCupType','App\Http\Controllers\CupTypeController@editingCupType');
    Route::post('retrieveAllCupType','App\Http\Controllers\CupTypeController@retrieveAllCupType');
    Route::post('deleteCupType','App\Http\Controllers\CupTypeController@deleteCupType');

    Route::post('addCheckout','App\Http\Controllers\StoreCheckoutsController@addCheckout');
    Route::post('retrieveCheckouts','App\Http\Controllers\StoreCheckoutsController@retrieveCheckouts');
    Route::post('retrieveAllCheckouts','App\Http\Controllers\StoreCheckoutsController@retrieveAllCheckouts');
    Route::post('retrieveChoosenCheckouts','App\Http\Controllers\StoreCheckoutsController@retrieveChoosenCheckouts');
    Route::post('retrieveOnlineCheckouts','App\Http\Controllers\StoreCheckoutsController@retrieveOnlineCheckouts');
    Route::post('retrieveAllSales','App\Http\Controllers\StoreCheckoutsController@retrieveAllSales');
    Route::post('retrieveProcessing','App\Http\Controllers\StoreCheckoutsController@retrieveProcessing');
    Route::post('getDailySales','App\Http\Controllers\StoreCheckoutsController@retrieveDailySales');
    Route::post('getmonthlySales','App\Http\Controllers\StoreCheckoutsController@retrieveMonthlySales');
    Route::post('getQuarterlySales','App\Http\Controllers\StoreCheckoutsController@retrieveQuarterSales');
    Route::post('getSemi-AnnualSales','App\Http\Controllers\StoreCheckoutsController@retrieveSemiSales');
    Route::post('getAnnualSales','App\Http\Controllers\StoreCheckoutsController@retrieveAnnualSales');
    Route::post('getyears','App\Http\Controllers\StoreCheckoutsController@retrieveYears');
    Route::post('retrieveYear','App\Http\Controllers\StoreCheckoutsController@retrieveYear');
    Route::post('retrieveDailySales','App\Http\Controllers\StoreCheckoutsController@retrieveDailySales');
    Route::post('deleteCheckout','App\Http\Controllers\StoreCheckoutsController@deleteCheckout');
    Route::post('retrieveOnlineProcessing','App\Http\Controllers\StoreCheckoutsController@retrieveOnlineProcessing');
    Route::post('updateStatus','App\Http\Controllers\StoreCheckoutsController@updateStatus');
    Route::post('retrieveChosenSales','App\Http\Controllers\StoreCheckoutsController@retrieveChosenSales');
    
    Route::post('getTopProd','App\Http\Controllers\OrderController@retrieveTopProducts');
    Route::post('addIncomingCups','App\Http\Controllers\QuantityCupsController@addIncomingCups');
    Route::post('updateRemainingCups','App\Http\Controllers\QuantityCupsController@updateRemainingCups');
    Route::post('updateDeletedCups','App\Http\Controllers\QuantityCupsController@updateDeletedCups');
    Route::post('retrieveCupSize','App\Http\Controllers\QuantityCupsController@retrieveCupSize');
    Route::post('retrieveCupForInventory','App\Http\Controllers\QuantityCupsController@retrieveCupForInventory');

    Route::post('updateCalculation','App\Http\Controllers\CalculationsController@updateCalculation');
    Route::post('retrieveCalculation','App\Http\Controllers\CalculationsController@retrieveCalculation');

    Route::post('addIngredients','App\Http\Controllers\IngredientController@addIngredients');
    Route::post('updateOnRockQuantityQuantity','App\Http\Controllers\IngredientController@updateOnRockQuantityQuantity');
    Route::post('updateIngredients','App\Http\Controllers\IngredientController@updateIngredients');
    Route::post('retrieveIngredients','App\Http\Controllers\IngredientController@retrieveIngredients');

    Route::post('addIngredientQuantity','App\Http\Controllers\AddIngredientController@addIngredientQuantity');
    Route::post('retrieveData','App\Http\Controllers\AddIngredientController@retrieveData');
    Route::post('retrieveDataChosen','App\Http\Controllers\AddIngredientController@retrieveDataChosen');
    Route::post('retrieveRemainingData','App\Http\Controllers\AddIngredientController@retrieveRemainingData');
    Route::post('updateUsedIngredients','App\Http\Controllers\AddIngredientController@updateUsedIngredients');
});
 