<?php
use App\Http\Controllers\User_c;
use App\Http\Controllers\Auth_c;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
Route::post('users/register', [Auth_c::class ,'register']);
Route::get('users/search/{name}', [User_c::class, 'search']);
Route::group(['middleware' => [ 'auth:sanctum' ]], function () {
    Route::post('users/logout', [Auth_c::class ,'logout']);
});
