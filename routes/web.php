<?php

use App\Http\Controllers\TankController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('/dashboard');
});

Route::get('/dashboard', [TankController::class, 'dashboard']);
Route::get('/chart', [TankController::class, 'chart']);
Route::get('/tank', [TankController::class, 'index']);
Route::get('/data-tank', [TankController::class, 'show']);
Route::get('/get-tank/{id}', [TankController::class, 'edit']);
Route::post('/add-tank', [TankController::class, 'store']);
Route::put('/update-tank/{id}', [TankController::class, 'update']);
Route::delete('/delete-tank/{id}', [TankController::class, 'destroy']);


