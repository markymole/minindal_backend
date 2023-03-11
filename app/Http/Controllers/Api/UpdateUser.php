<?php

namespace App\Http\Controllers\api;

use App\Models\User;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UpdateUser extends Controller
{
    public function update(Request $request, $id){
        $user = User::find($id);

        $user->name = $request->name;
        $user->email = $request->email;
        $user->update();
        return response()->json("User Record Updated!");

    }
}
