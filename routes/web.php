<?php

use App\Http\Controllers\DataController;
use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/login', [MainController::class, 'login'])->name('login');
Route::post('/login', [MainController::class, 'auth']);
Route::post('/logout', [MainController::class, 'logout']);


Route::middleware('auth')->group(function () {
    Route::get('/', [DataController::class, 'index']);
    Route::get('/input-data', [DataController::class, 'add']);
    Route::post('/input-data', [DataController::class, 'store']);
    Route::get('/edit-data/{id}', [DataController::class, 'edit']);
    Route::put('/edit-data/{id}', [DataController::class, 'update']);
    Route::delete('/delete-data/{id}', [DataController::class, 'delete']);
    Route::delete('/deletebetween', [DataController::class, 'deleteBetween']);

    Route::get('/export', [MainController::class, 'export']);
});
