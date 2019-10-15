<?php

namespace App\Providers;

use Firebase\JWT\JWT;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Env;
use Illuminate\Support\Facades\Gate;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;


class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Auth::viaRequest('custom_token', function ($request) {
            $token = $request->headers->get('Authorization');
            $token = str_replace('Bearer ', '', $token);
            if(!$token) {
                throw new HttpResponseException(response()->json(['error' => 'Bearer token required'], 403));
            }

            try {
                $decoded = JWT::decode($token, Env::get('JWT_SECRET'), array('HS256'));
            } catch(\Exception $e) {
                throw new HttpResponseException(response()->json(['error' => $e->getMessage()], 403));
            }

            return User::where('email', $decoded->email)->first();
        });
    }
}
