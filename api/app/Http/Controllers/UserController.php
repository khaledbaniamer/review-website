<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
   public function register(Request $request) {

        $user = User::create([
            'user_name' => $request->user_name,
            'user_email' => $request->user_email,
            'user_password' => Hash::make($request->user_password)
        ]);

        return $user;
    }

  public  function login(Request $request) {
       $user = User::where('user_email',$request->user_email)->first();


        $error = "ERROR!";

       if (!$user || !Hash::check($request->user_password, $user->user_password)){
            return $error;
       }

       return $user;
    }

}
