<?php

use App\Http\Controllers\BusinessController;
use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;





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














Route::post('register',[UserController::Class,'register']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('business' , [BusinessController::class ,'getBusiness']);
Route::get('business/{id}' , [BusinessController::class ,'getSingleBusiness']);

//category api 
Route::get('category' , [CategoryController::class , 'category']);
Route::post('addcategory' , [CategoryController::class , 'addcategory']);
Route::post('updatecategory/{id}' , [CategoryController::class , 'updatecategory']);
Route::post('deletecategory/{id}' , [CategoryController::class , 'deletecategory']);
