<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::insert([
            'name' => 'Zulistia',
            'email' => 'zulistiamukh@gmail.com',
            'password' => Hash::make('zulizuli'),
            'created_at' => Carbon::parse('2025-02-15')
        ]);
    }
}
