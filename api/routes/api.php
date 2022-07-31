<?php


use App\Http\Controllers\BusinessController;
use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ProfileController;





use App\Http\Controllers\UserController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('viewuser/{id}', [ProfileController::class, 'getUser']);

//reviews
Route::get('/comments/{id}', [CommentController::class, 'index']);
Route::post('/comments', [CommentController::class, 'store']);
Route::put('/comments/{comment}' , [CommentController::class , 'update']);
Route::delete('/comments/{comment}' , [CommentController::class , 'destroy']);





Route::post('register',[UserController::class,'register']);
Route::post('login',[UserController::class,'login']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// {  add product form from bussiness owner}
Route::post('add_product',[ProductController::class ,'ownerAddProduct']);
Route::get('business' , [BusinessController::class ,'getBusiness']);
Route::get('business/{id}' , [BusinessController::class ,'getSingleBusiness']);
Route::post('addbusiness' , [BusinessController::class , 'addBusiness']);
// get all user*************************
Route::get('allproducts' , [ProductController::class ,'allProducts']);
// get all user*************************

Route::get('singlebusiness_products/{id}' , [ProductController::class, 'products_business']);

//category api
Route::get('category' , [CategoryController::class , 'category']);
Route::post('addcategory' , [CategoryController::class , 'addcategory']);
Route::post('updatecategory/{id}' , [CategoryController::class , 'updatecategory']);
Route::get('deletecategory/{id}' , [CategoryController::class , 'deletecategory']);
Route::get('singlecategory/{id}' , [CategoryController::class , 'singlecategory']);
Route::post('deletecategory/{id}' , [CategoryController::class , 'deletecategory']);

// user profile
// Route::get('user_profile',[UserController::class,'UserProfile']);
// Route::post('/getUser/{id}',[UserController::class,'getUser']);


Route::get('deletecategory/{id}' , [CategoryController::class , 'deletecategory']);
Route::get('singlecategory/{id}' , [CategoryController::class , 'single_category']);
