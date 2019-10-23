<?php

namespace App\Http\Controllers;

use App\Http\Requests\ApiLoginRequest;
use App\Http\Requests\ApiRegisterRequest;
use App\User;
use Firebase\JWT\JWT;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Env;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

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
        return $token;
    }

    public function register(ApiRegisterRequest $request) {
        $body = $request->only(['name', 'email', 'password']);
        $user = new User();
        $user->name = $body['name'];
        $user->email = $body['email'];
        $user->password = Hash::make($body['password']);
        $user->save();

        $dataToEncode = [
            'email' => $user->email,
            'id' => $user->id
        ];
        Storage::disk('local')->makeDirectory('/users/' . $user->id);
        $token = JWT::encode($dataToEncode, Env::get('JWT_SECRET'));

        return $token;
    }
}
