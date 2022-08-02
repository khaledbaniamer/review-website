<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Business;
use App\Models\User;
use App\Models\Comment;
use App\Models\Product;

class ProfileController extends Controller
{
    public function getUser($id){
        $user = User::find($id);
        return $user;
    }
public function allUser(){

    $user = User::all();
    return $user;

}

public function deleteUser($id){

    $user = User::find($id);
    $user->delete($id);


}
public function count(){

    $users=User::all()->count();
    $businesses=Business::all()->count();
    $products=Product::all()->count();
    $comments=Comment::all()->count();
return response()->json([
    'users'=>$users,
    'businesses' => $businesses,
    'products' => $products,
    'comments'=> $comments
]);
}

}
