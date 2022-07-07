<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
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
        $token = $user->createToken('AppRes')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];
        return response($response, 200);

    }

    public function logout( Request $request )
    {
        $request->user()->token()->revoke();
        return response()->json(['message' => 'Successfully logged out']);
    }

}
