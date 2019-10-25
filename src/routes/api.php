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

Route::post('/login', 'ApiAuthController@login');
Route::post('/register', 'ApiAuthController@register');
Route::middleware('auth:api')->group(function () {
    Route::get('/me', function(Request $request) {
       return  response()->json(['user' => $request->user()]);
    });
    Route::prefix('files')->group(function () {
        Route::post('/', 'FilesController@uploadFiles');
        Route::get('/', 'FilesController@getUserFiles');
        Route::patch('/{id}', 'FilesController@convertFileToPdf');
    });
});
