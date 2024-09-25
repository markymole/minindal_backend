<?php

use App\Http\Controllers\Records\RecordsController;
use App\Http\Controllers\Records\GeneralController;
use App\Http\Controllers\Records\SpecialtiesController;
use App\Http\Controllers\Records\ImageController;
use App\Http\Controllers\Users\AdminController;
use App\Http\Controllers\Users\UsersController;

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
})->middleware('active', 'auth:sanctum');

// auth routes
Route::middleware('auth')->get('/auth/check-session', function () {
    return response()->json(['message' => 'Session valid']);
});

Route::post('/auth/login', [UsersController::class, 'login']);

Route::post('/auth/admin/login', [AdminController::class, 'login']);

// routess for record move and deletion
Route::group(['prefix' => 'data'], function() {
    Route::post('/create-user', [AuthController::class, 'register']);
});

Route::group(['prefix' => 'data'], function() {
    Route::apiResource('reviews', ReviewController::class);
});

Route::group(['prefix' => 'data'], function() {
    Route::apiResource('comments', CommentController::class);
});

//API for user data update , only for name and email. Password are requested thrue email
Route::group(['prefix' => 'data'], function() {
    Route::apiResource('update-user', UpdateUser::class);
});


Route::apiResource('records', RecordsController::class);

Route::apiResource('admins', AdminController::class)->middleware('auth:sanctum');

Route::apiResource('users', UsersController::class)->middleware('auth:sanctum');

Route::post('/record/image/{id}/update', [ImageController::class, 'updateImage']);

Route::get('/record', [GeneralController::class, 'findByBusinessName']);


// Specialties routes
Route::get('/specialties/suggestions', [SpecialtiesController::class, 'getSpecialtiesSuggestions']);

Route::get('/specialties/search', [SpecialtiesController::class, 'searchSpecialties']);

