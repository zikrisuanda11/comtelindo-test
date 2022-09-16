<?php

namespace Database\Factories;

use App\Models\Tank;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tank>
 */
class TankFactory extends Factory
{
    protected $model = Tank::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $status = collect([
            'normal',
            'refuelling',
            'kurang_dari_target'
        ]);

        return [
            'nama' => $this->faker->name(),
            'status' => $status->random(),
            'volume' => $this->faker->numberBetween(100, 10000),
            'temperature' => $this->faker->randomNumber(2, false),
            'kapasitas_maksimum' => $this->faker->numberBetween(10000, 11000),
        ];
    }
}
