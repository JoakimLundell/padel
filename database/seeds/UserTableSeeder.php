<?php

use Illuminate\Database\Seeder;
use App\User;

class UserTableSeeder extends Seeder {

    public function run()
    {
        DB::table('users')->delete();

        User::create([
            'name' => 'admin',
            'email' => 'info@bluestripes.se',
            'password' => Hash::make('padel'),
            'api_token' => Str::random(60)
         ]);
    }

}