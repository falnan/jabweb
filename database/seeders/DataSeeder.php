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
            'resi'=>'123xxx',
            'customer'=>'asd',
            'courier'=>'jnt',
            'note'=>'',
            'created_at'=> Carbon::now()
        ]);
        Data::insert([
            'resi'=>'321xxx',
            'customer'=>'dsa',
            'courier'=>'jnt',
            'note'=>'hehe',
            'created_at'=> Carbon::now()
        ]);
        Data::insert([
            'resi'=>'321xxx',
            'customer'=>'dsa',
            'courier'=>'jnt',
            'note'=>'hehe',
            'created_at'=> Carbon::now()
        ]);
        Data::insert([
            'resi'=>'321xxx',
            'customer'=>'dsa',
            'courier'=>'jnt',
            'note'=>'hehe',
            'created_at'=> Carbon::now()
        ]);
        Data::insert([
            'resi'=>'321xxx',
            'customer'=>'dsa',
            'courier'=>'jnt',
            'note'=>'hehe',
            'created_at'=> Carbon::now()
        ]);
        Data::insert([
            'resi'=>'321xxx',
            'customer'=>'dsa',
            'courier'=>'jnt',
            'note'=>'hehe',
            'created_at'=> Carbon::now()
        ]);
        Data::insert([
            'resi'=>'321xxx',
            'customer'=>'dsa',
            'courier'=>'jnt',
            'note'=>'hehe',
            'created_at'=> Carbon::now()
        ]);
    }

}
