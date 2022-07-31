<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

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
}
