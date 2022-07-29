<?php

namespace App\Http\Controllers;
// use Hash ;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class Auth_c extends Controller
{
     public function register(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name' => 'required|regex:/^[a-z ]+$/i',
            'email' => 'required|email|unique:users',
            'phone' => 'required|unique:users|regex:/^([0-9\s\-\+\(\)]*)$/|min:10',
            'password' => ['required',  'min:8', 'regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/'],
        ]);

        if($validator->fails()){
            return response()->json(['validation_errors' => $validator->errors()]);
        }

        $user = User::create(
            [
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'phone' => $request->input('phone'),
                'password' => Hash::make($request->input('password')),
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
