<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class User_c extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name' => 'required|regex:/^[a-z ]+$/i',
            'email' => 'required|email|unique:users',
            'phone' => 'required|unique:users|regex:/^([0-9\s\-\+\(\)]*)$/|min:10',
            'password' => ['required', 'confirmed', 'min:8', 'regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/'],
        ]);

        if($validator->fails()){
            return response()->json(['validation_errors' => $validator->errors()]);
        }else {

            $user = new User();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->phone = $request->phone;
            $user->password = Hash::make($request->password);
            $user->save();

            // $token = $user->createToken($user->email.'_Token')->plainTextToken;

            return response()->json([
                'status' => 200,
                // 'token' => $token,
                'user' => $user,
                'message' => 'Registration successful'
            ]);
        }


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);
        if( $user ){
            return response()->json($user);
        }else{
            return response()->json(['message' => 'User not found'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::find($id);
        if( $user ){
            $user->update($request->all());
            return response()->json($user);
        }else{
            return response()->json(['message' => 'User not found'], 404);
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        if( $user ){
            $user->delete();
            return response()->json(['message' => 'User deleted']);
        }else{
            return response()->json(['message' => 'User not found'], 404);
        }
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  str  $name
     * @return \Illuminate\Http\Response
     */
    public function search($name)
    {
        $user = User::where('name' , 'like' , '%'.$name.'%')->get();
        if( $user ){
            return response()->json($user);
        }else{
            return response()->json(['message' => 'User not found'], 404);
        }
    }
}
