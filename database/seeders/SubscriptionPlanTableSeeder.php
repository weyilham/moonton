<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubscribtionPlan;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $subscription = [
            [
                'name' => 'Basic',
                'price' => 200000,
                'active_period_in_mounth' => 3,
                'features' => json_encode(
                    [
                        'Features 1',
                        'Features 2',
                        'Features 3',
                        'Features 4',
                        'Features 5'
                    ]
                )
            ],
            [
                'name' => 'Premium',
                'price' => 800000,
                'active_period_in_mounth' => 6,
                'features' => json_encode([
                    'Features 1',
                    'Features 2',
                    'Features 3',

                ])
            ],
        ];

        SubscribtionPlan::insert($subscription);
    }
}
