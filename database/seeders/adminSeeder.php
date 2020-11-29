<?php

namespace Database\Seeders;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

use Illuminate\Database\Seeder;

class adminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'account_type' => 'Admin',
            'name' => 'laurex',
            'email' => 'aeromel.laure@student.passerellesnumeriques.org',
            'firstname' => 'Aero',
            'lastname' => 'Laure',
            'address' => 'Talamban',
            'contactNumber' => '09161571895',
            'password' => Hash::make('Aero@mel31'),
            'remember_token' => Str::random(10)
        ]);
    }
}
