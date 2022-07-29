<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    function register(Request $request) {
        
        $user = User::create([
            'user_name' => $request->user_name,
            'user_email' => $request->user_email,
            'user_password' => Hash::make($request->user_password)
        ]);

        return $user;
    }

    function login() {
        return "login";
    }
}
