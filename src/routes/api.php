<?php

use Illuminate\Http\Request;

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

Route::post('/asd/login', 'ApiAuthController@login');
Route::middleware('auth:api')->group(function () {
    Route::prefix('user')->group(function () {
        Route::get('/', function (Request $request) {
            return $request->user();
        });
    });
    Route::prefix('tasks')->group(function() {
       Route::get('/', 'TasksController@getAll');
       Route::get('/my', 'TasksController@getMy');
    });
});
