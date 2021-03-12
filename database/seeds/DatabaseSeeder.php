<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);

        DB::table('users')->insert([
            'name' => 'Vitor J',
            'email' => 'vitordejesus2017@outlook.com',
            'password' => Hash::make('corporativo1'),
            
        ]);

       
        DB::table('admins')->insert([
            'name' => 'Vitor J',
            'email' => 'vitordejesus2017@outlook.com',
            'password' => Hash::make('corporativo1'),
            
        ]);

    }
}
