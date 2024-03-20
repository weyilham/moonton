<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $Movie = [
            [
                'name' => 'Avenger End Game',
                'slug' => 'avenger-end-game',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=6ZfuNTqbHE8',
                'thumbnail' => 'https://i.ytimg.com/vi/6ZfuNTqbHE8/maxresdefault.jpg',
                'rating' => 4.5,
                'is_featured' => 1,
            ],
            [
                'name' => 'Avenger Infinity War',
                'slug' => 'avenger-infinity-war',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=6ZfuNTqbHE8',
                'thumbnail' => 'https://i.ytimg.com/vi/6ZfuNTqbHE8/maxresdefault.jpg',
                'rating' => 4.5,
                'is_featured' => 0,
            ],
            [
                'name' => 'Batmen The Dark Knight',
                'slug' => 'batmen-the-dark-knight',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=6ZfuNTqbHE8',
                'thumbnail' => 'https://i.ytimg.com/vi/6ZfuNTqbHE8/maxresdefault.jpg',
                'rating' => 4.5,
                'is_featured' => 0,
            ]
        ];

        Movie::insert($Movie);
    }
}
