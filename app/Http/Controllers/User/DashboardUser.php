<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;
use Inertia\Inertia;


class DashboardUser extends Controller
{
    //
    public function index()
    {
        $isFeature = Movie::where('is_featured', 1)->get();
        $movies = Movie::all();

        // dd($isFeature);

        return Inertia::render('Dashboard/User/index', [
            'isFeature' => $isFeature,
            'movies' => $movies
        ]);
    }
}
