<?php

namespace Database\Seeders;

use App\Models\Data;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class DataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Data::insert([
            'resi' => '123xxx',
            'customer' => 'aa',
            'courier' => 'jnt',
            'note' => '',
            'created_at' => Carbon::parse('2025-02-15')
        ]);
        Data::insert([
            'resi' => '321xxx',
            'customer' => 'ab',
            'courier' => 'jnt',
            'note' => 'hehe',
            'created_at' => Carbon::parse('2025-02-16')
        ]);
        Data::insert([
            'resi' => '321xxx',
            'customer' => 'bb',
            'courier' => 'jnt',
            'note' => 'hehe',
            'created_at' => Carbon::parse('2025-02-17')
        ]);
        Data::insert([
            'resi' => '321xxx',
            'customer' => 'bc',
            'courier' => 'jnt',
            'note' => 'hehe',
            'created_at' => Carbon::parse('2025-02-18')
        ]);
        Data::insert([
            'resi' => '321xxx',
            'customer' => 'cc',
            'courier' => 'jnt',
            'note' => 'hehe',
            'created_at' => Carbon::parse('2025-02-19')
        ]);
        Data::insert([
            'resi' => '321xxx',
            'customer' => 'cd',
            'courier' => 'jnt',
            'note' => 'hehe',
            'created_at' => Carbon::parse('2025-02-20')
        ]);
        Data::insert([
            'resi' => '321xxx',
            'customer' => 'dd',
            'courier' => 'jnt',
            'note' => 'hehe',
            'created_at' => Carbon::parse('2025-02-21')
        ]);
    }
}
