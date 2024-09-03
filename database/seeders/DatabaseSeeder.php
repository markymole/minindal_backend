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

        \App\Models\User::factory()->create([
            'name' => 'Mark Raphael D Nuguid',
            'email' => 'nmark.raphael07@gmail.com',
            'role' => 'Admin',
            'town' => null,
            'status' => null
        ]);

        \App\Models\User::factory()->create([
            'name' => 'Center for Kapampangan Studies',
            'email' => 'kapampangancentergmail.com',
            'role' => 'Admin',
            'town' => null,
            'status' => null
        ]);

        \App\Models\User::factory()->create([
            'name' => 'user',
            'email' => 'user@example.com',
            'role' => 'User',
            'town' => null,
            'status' => null
        ]);
    }
}
