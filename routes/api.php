<?php

use App\Http\Controllers\OfertasController;
use App\Http\Controllers\CuponesController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});




/*Abarca todos las solicitudes HTPP referente a las api's */
Route::apiResource('cupon',CuponesController::class);

/*Se pasa 2 parametros para identificar a cual cupon se le va a actualizar el estado*/
Route::put('cupon/{id}/{estado}/', [CuponesController::class, 'update']);


