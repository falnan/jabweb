<?php

use App\Http\Controllers\DataController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/belajar', function(){
    return Inertia::render('Belajar');
});

Route::get('/', [DataController::class, 'index']);
Route::get('/input-data', [DataController::class, 'add']);
Route::post('/input-data', [DataController::class, 'store']);
Route::get('/edit-data/{id}', [DataController::class, 'edit']);
Route::put('/edit-data/{id}', [DataController::class, 'update']);
Route::delete('/delete-data/{id}', [DataController::class, 'delete']);