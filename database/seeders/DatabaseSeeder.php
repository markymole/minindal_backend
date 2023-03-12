<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        \App\Models\Towns::factory()->create([
            'town' => 'Angeles',
            'Slug' => 'Angeles',
            'latitude' => 15.144985,
            'longitude' => 120.588699
        ]);
        \App\Models\Towns::factory()->create([
            'town' => 'Mabalacat',
            'Slug' => 'Mabalacat',
            'latitude' => 15.222660,
            'longitude' => 120.574089
        ]);
        \App\Models\Towns::factory()->create([
            'town' => 'San Fernando',
            'Slug' => 'San Fernando',
            'latitude' => 15.067630,
            'longitude' => 120.648918
        ]);
        \App\Models\Towns::factory()->create([
            'town' => 'Porac',
            'Slug' => 'Porac',
            'latitude' => 15.068016,
            'longitude' => 120.540223
        ]);
        \App\Models\Towns::factory()->create([
            'town' => 'Magalang',
            'Slug' => 'Magalang',
            'latitude' => 15.210852,
            'longitude' => 120.660346
        ]);
        

        \App\Models\User::factory()->create([
            'name' => 'Center for Kapampangan Studies',
            'email' => 'ckskapampangancuisine@gmail.com',
            'role' => 'Super Admin',
            'town' => 'CKS'
        ]);

        \App\Models\User::factory()->create([
            'name' => 'user',
            'email' => 'user@example.com',
            'role' => 'user',
            'town' => 'N/A'
        ]);
    }
}
