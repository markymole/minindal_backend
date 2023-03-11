<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TownListRequest;
use App\http\Resources\TownListCollection;
use App\http\Resources\TownListResource;
use App\Models\Towns;
use Illuminate\Http\Request;

class TownController extends Controller
{
    public function index(){
        return new TownListCollection(Towns::all());
    }

    public function show(Towns $town){
        return new TownListResource($town);
    }

    public function store(TownListRequest $request){
        Towns::create($request->validated());
        return response()->json("Town Created");
    }

    public function update(TownListRequest $request, Towns $town){
        $town->update($request->validated());
        return response()->json("Town Updated");
    }

    public function destroy(Towns $town){
        $town->delete();
        return response()->json("Town Record Deleted");
    }
}
