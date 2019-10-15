<?php

namespace App\Http\Controllers;

use App\Http\Requests\ApiLoginRequest;
use App\User;
use Firebase\JWT\JWT;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Env;
use Illuminate\Support\Facades\Hash;

class ApiAuthController extends Controller
{
    public function login(ApiLoginRequest $request) {
        $body = $request->only(['email', 'password']);
        $user = User::where('email', $body['email'])->first();
        $verifyPassword = Hash::check($body['password'], $user->password);

        if(!$verifyPassword) {
            throw new HttpResponseException(response()->json(['password' => 'Password incorrect'], 403));
        }

        $dataToEncode = [
            'email' => $user->email,
            'id' => $user->id
        ];
        $token = JWT::encode($dataToEncode, Env::get('JWT_SECRET'));
        return response()->json(['success' => true, 'token' => $token]);
    }

    public function register() {

    }
}
