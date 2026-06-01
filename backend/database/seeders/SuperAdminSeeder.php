<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class SuperAdminSeeder extends Seeder
{
    public function run(): void
    {
        $user = User::updateOrCreate(
            ['email' => 'admin@crm.com'],
            [
                'name' => 'Super Admin',
                'password' => Hash::make('Admin@123')
            ]
        );

        $user->assignRole('Super Admin');
    }
}