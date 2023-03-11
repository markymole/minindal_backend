<?php

namespace App\Http\Controllers\api;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\http\Requests\ArchiveRecordRequest;
use App\http\Resources\ArchiveResource;
use App\http\Resources\ArchiveCollection;
use App\Models\Archives;

use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use File;

class ArchiveController extends Controller
{
    public function index(){
        return new ArchiveCollection(Archives::all());
    }

    public function show(Archives $archive){
        return new ArchiveResource($archive);
    }

    public function store(ArchiveRecordRequest $request){

        $archive = new Archives;
        $archive->business_name=$request->input('business_name');
        $archive->description=$request->input('description');

        $archive->type=$request->input('type');
        $archive->price_range=$request->input('price_range');
        $archive->operating_from=$request->input('operating_from');
        $archive->operating_to=$request->input('operating_to');
        $archive->open_from=$request->input('open_from');
        $archive->open_to=$request->input('open_to');
        $archive->rating=$request->input('rating');
        $archive->service_options=$request->input('service_options');

        $archive->category=$request->input('category');
        $archive->specialties=$request->input('specialties');
        $archive->phone_number_one=$request->input('phone_number_one');
        $archive->phone_number_two=$request->input('phone_number_two');
        $archive->email=$request->input('email');
        $archive->socials=$request->input('socials');

        if($request->input('cover_image') == "")
        {
            $archive->cover_image=('');
            $archive->image_name=('');
        }
        else{
            $prev_path = $request->input('cover_image');
            $img_name = $request->input('image_name');
            File::move(public_path($prev_path), public_path('archived_records/'.$img_name));
 
            $archive->cover_image=("archived_records/".$img_name);
            $archive->image_name=$request->input('image_name');

        }

        $archive->town=$request->input('town');
        $archive->address=$request->input('address');
        $archive->latitude=$request->input('latitude');
        $archive->longitude=$request->input('longitude');
        $archive->date_applied=$request->input('date_applied');
        $archive->date_approved=$request->input('date_approved');
        $archive->date_archived=$request->input('date_archived');
        $archive->save();

        return response()->json("Archive Record Created");
    }

    public function update(ArchiveRecordRequest $request, Archives $archive){
        $archive->update($request->validated());
        return response()->json("Archive Record Updated");
    }

    public function destroy(Archives $archive){
        $file = $archive->cover_image;
        if (File::exists(public_path($file))) {
            File::delete(public_path($file));
        }

        $archive->delete();
        return response()->json("Archive Record Deleted");
    }
}
