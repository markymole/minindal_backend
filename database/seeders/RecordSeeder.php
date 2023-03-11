<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
        
class RecordSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      
        DB::table('records')->insert([
            'business_name' => Str::random(10),
            'description' => Str::random(10),
            'category' => Str::random(10),
            'Specialties' => Str::random(10),
            'town' => Str::random(10),
            'address' => Str::random(10),
            'latitude' => random(1, 50),
            'longitude' => random(1, 50),
        ]);
    }
}
