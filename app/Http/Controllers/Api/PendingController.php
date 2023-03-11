<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\http\Requests\PendingRequest;
use App\http\Resources\PendingsResource;
use App\http\Resources\PendingCollection;
use App\Models\Pendings;

use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use File;

class PendingController extends Controller
{
    public function index(){
        return new PendingCollection(Pendings::all());
    }

    public function show(Pendings $pending){
        return new PendingsResource($pending);
    }

    public function store(PendingRequest $request){
        $pending = new Pendings;
        $pending->business_name=$request->input('business_name');
        $pending->description=$request->input('description');
        $pending->type=$request->input('type');
        $pending->price_range=$request->input('price_range');
        $pending->operating_from=$request->input('operating_from');
        $pending->operating_to=$request->input('operating_to');
        $pending->open_from=$request->input('open_from');
        $pending->open_to=$request->input('open_to');
        $pending->rating=$request->input('rating');
        $pending->service_options=$request->input('service_options');
        $pending->category=$request->input('category');
        $pending->specialties=$request->input('specialties');
        $pending->phone_number_one=$request->input('phone_number_one');
        $pending->phone_number_two=$request->input('phone_number_two');
        $pending->email=$request->input('email');
        $pending->socials=$request->input('socials');

        if($request->hasFile('imagedata'))
        {
            $pending->cover_image=$request->file('imagedata')->store('pending_records');
            $pending->image_name=$request->file('imagedata')->hashName();
        }
        else{
            $pending->cover_image=('');
            $pending->image_name=('');
        }

        $pending->town=$request->input('town');
        $pending->address=$request->input('address');
        $pending->latitude=$request->input('latitude');
        $pending->longitude=$request->input('longitude');
        $pending->date_applied=$request->input('date_applied');
        $pending->save();

        return response()->json("Pending Created");
    }

    public function update(PendingRequest $request, Pendings $pending){
        $pending->update($request->validated());
        return response()->json("Pending Record Updated");
    }

    public function destroy(Pendings $pending){
        $file = $pending->cover_image;
        if (File::exists(public_path($file))) {
            File::delete(public_path($file));
        }

        $pending->delete();
        return response()->json("Pending Record Deleted");
    }
}
