<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Hash ;
class Auth_c extends Controller
{
     public function register(Request $request)
    {
        $filed = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'phone' => 'required|unique:users',
            'password' => 'required|min:6',
        ]);
        $user = User::create(
            [
                'name' => $filed['name'],
                'email' => $filed['email'],
                'phone' => $filed['phone'],
                'password' => Hash::make($filed['password']),
                ]

        );
    }
}
