<?php

namespace App\Http\Requests;

class ApiRegisterRequest extends Request
{

    public function messages()
    {
        return [
            'email.required' => 'Email is required field',
            'password.required' => 'Password is required field'
        ];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required'
        ];
    }
}
