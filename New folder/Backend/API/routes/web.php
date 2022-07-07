<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User_c;


Route::get('/', function () {
    return view('welcome');
});

