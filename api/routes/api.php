<?php

use App\Http\Controllers\BusinessController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// {  add product form from bussiness owner}
Route::post('add_product',[ProductController::class ,'ownerAddProduct']);
Route::get('business' , [BusinessController::class ,'getBusiness']);
Route::get('business/{id}' , [BusinessController::class ,'getSingleBusiness']);
