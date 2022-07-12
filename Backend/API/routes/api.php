<?php
use App\Http\Controllers\User_c;
use App\Http\Controllers\Auth_c;
use App\Http\Controllers\floor_type_c;
use App\Http\Controllers\Table_c;
use App\Http\Controllers\Reservation_c;
use App\Http\Controllers\Contact_c;
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
// Route::post('users/register', [Auth_c::class ,'register']); //register user and return token

Route::get('users/search/{name}', [User_c::class, 'search']); // search for user by name
Route::get('floor_type', [floor_type_c::class, 'index']); // get all floor_types
Route::get('floor_type/{id}', [floor_type_c::class, 'show']); // get all tables of a floor type
Route::post('reservation', [floor_type_c::class, 'store']); // create reservation
Route::put('user/update/{id}', [User_c::class, 'update']); // update user profile
Route::post('/users', [User_c::class, 'store']); //register

Route::post('/contact', [Contact_c::class, 'store']); //contact us

//  Route::get('/users', [User_c::class, 'index']); // get all users
Route::post('/users/login', [User_c::class, 'Login']); // login


Route::group(['middleware' => [ 'auth:sanctum' ]], function () { // auth:sanctum is the token
    Route::post('users/logout', [Auth_c::class ,'logout']); // logout
}); // end of group
