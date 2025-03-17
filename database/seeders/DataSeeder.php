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
            'customer' => 'a',
            'courier' => 'jnt',
            'note' => '',
            'created_at' => Carbon::parse('2025-03-10')
        ]);
        Data::insert([
            'resi' => '123xxx',
            'customer' => 'aa',
            'courier' => 'jnt',
            'note' => '',
            'created_at' => Carbon::parse('2025-03-11')
        ]);
        Data::insert([
            'resi' => '123xxx',
            'customer' => 'aaa',
            'courier' => 'jnt',
            'note' => '',
            'created_at' => Carbon::parse('2025-03-12')
        ]);
        Data::insert([
            'resi' => '123xxx',
            'customer' => 'b',
            'courier' => 'jnt',
            'note' => '',
            'created_at' => Carbon::parse('2025-03-13')
        ]);
        Data::insert([
            'resi' => '123xxx',
            'customer' => 'bb',
            'courier' => 'jnt',
            'note' => '',
            'created_at' => Carbon::parse('2025-03-14')
        ]);
        Data::insert([
            'resi' => '123xxx',
            'customer' => 'bbb',
            'courier' => 'jnt',
            'note' => '',
            'created_at' => Carbon::parse('2025-03-14')
        ]);
        Data::insert([
            'resi' => '321xxx',
            'customer' => 'c',
            'courier' => 'jnt',
            'note' => 'hehe',
            'created_at' => Carbon::parse('2025-03-15')
        ]);
        Data::insert([
            'resi' => '321xxx',
            'customer' => 'cc',
            'courier' => 'jnt',
            'note' => 'hehe',
            'created_at' => Carbon::parse('2025-03-15')
        ]);
        Data::insert([
            'resi' => '321xxx',
            'customer' => 'ccc',
            'courier' => 'jnt',
            'note' => 'hehe',
            'created_at' => Carbon::parse('2025-03-15')
        ]);
        Data::insert([
            'resi' => '321xxx',
            'customer' => 'd',
            'courier' => 'jnt',
            'note' => 'hehe',
            'created_at' => Carbon::parse('2025-03-16')
        ]);
        Data::insert([
            'resi' => '321xxx',
            'customer' => 'dd',
            'courier' => 'jnt',
            'note' => 'hehe',
            'created_at' => Carbon::parse('2025-03-17')
        ]);
        Data::insert([
            'resi' => '321xxx',
            'customer' => 'ddd',
            'courier' => 'jnt',
            'note' => 'hehe',
            'created_at' => Carbon::parse('2025-03-18')
        ]);
        Data::insert([
            'resi' => '321xxx',
            'customer' => 'e',
            'courier' => 'jnt',
            'note' => 'hehe',
            'created_at' => Carbon::parse('2025-03-19')
        ]);
        Data::insert([
            'resi' => '321xxx',
            'customer' => 'ee',
            'courier' => 'jnt',
            'note' => 'hehe',
            'created_at' => Carbon::parse('2025-03-20')
        ]);
    }
}
