<?php

namespace App\Http\Controllers\api;

use App\Models\User;
use Illuminate\Http\Response;
use App\http\Resources\UserCollection;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(){
        return new UserCollection(User::all());
    }

    public function update(Request $request, $id){
        $user = User::find($id);

        $user->status = $request->status;
        $user->update();
        return response()->json([
            'status' => 200,
            'message' => 'Admin Blocked'
        ]
        );

    }

}
