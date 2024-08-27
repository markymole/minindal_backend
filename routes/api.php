<?php

use App\Http\Controllers\Records\RecordsController;
use App\Http\Controllers\Records\SpecialtiesController;

use App\Http\Controllers\Api\ArchiveController;
use App\Http\Controllers\Api\PendingController;
use App\Http\Controllers\Api\UnarchiveController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ApproveController;
use App\Http\Controllers\Api\ArchivePost;
use App\Http\Controllers\Api\TownController;
use App\Http\Controllers\Api\ReviewController;
use App\Http\Controllers\Api\CommentController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UpdateUser;
use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('active_user', 'auth:sanctum');

//API's for record move and deletion

Route::group(['prefix' => 'data'], function() {
    Route::post('/create-user', [AuthController::class, 'register']);
});

Route::group(['prefix' => 'data'], function() {
    Route::apiResource('unarchive', UnarchiveController::class);
});

Route::group(['prefix' => 'data'], function() {
    Route::apiResource('reviews', ReviewController::class);
});

Route::group(['prefix' => 'data'], function() {
    Route::apiResource('comments', CommentController::class);
});

Route::group(['prefix' => 'data'], function() {
    Route::apiResource('archive', ArchivePost::class);
});

Route::group(['prefix' => 'data'], function() {
    Route::apiResource('approve', ApproveController::class);
});

//API for user data update , only for name and email. Password are requested thrue email
Route::group(['prefix' => 'data'], function() {
    Route::apiResource('update-user', UpdateUser::class);
});


//--------------------- api's -----------------------------
// Route::group(['middleware' => ['auth:sanctum']], function (){
//     Route::apiResource('records', RecordController::class);
// });
// Route::group(['prefix' => 'data'], function() {
//     Route::apiResource('usergroup', UserController::class);
// });

Route::group(['middleware' => ['auth:sanctum']], function() {
    Route::apiResource('usergroup', UserController::class);
});

Route::apiResource('records', RecordsController::class);

// Specialties routes
Route::get('/specialties/suggestions', [SpecialtiesController::class, 'getSpecialtiesSuggestions']);

Route::get('/specialties/search', [SpecialtiesController::class, 'searchSpecialties']);



Route::group(['prefix' => 'data'], function() {
    Route::apiResource('archives', ArchiveController::class);
});

Route::group(['prefix' => 'data'], function() {
    Route::apiResource('pendings', PendingController::class);
});

Route::group(['prefix' => 'data'], function() {
    Route::apiResource('towns', TownController::class);
});

