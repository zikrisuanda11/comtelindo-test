<?php

namespace Tests\Feature;

use App\Models\Tank;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TankTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testGetTankData()
    {
        $this->get('/data-tank')->assertStatus(200);
    }

    public function testGetTankDataById()
    {
        $tank = Tank::factory()->create();

        $this->get("/get-tank/$tank->id", $tank->getRawOriginal())->assertStatus(200);
    }

    public function testStoreData()
    {
        $data = Tank::factory()->create();

        $this->post('/add-tank', $data->getRawOriginal())->assertStatus(201);
    }

    public function testUpdateData()
    {
        $tank = Tank::factory()->create();

        $data = Tank::factory()->create();

        $this->put("/update-tank/$tank->id", $data->getRawOriginal())->assertStatus(200);
    }

    public function testDeleteData()
    {
        $tank = Tank::factory()->create();
        $this->delete("/delete-tank/$tank->id")->assertStatus(200);
    }
}
