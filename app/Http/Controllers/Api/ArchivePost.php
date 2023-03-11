<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\http\Requests\ArchiveRecordRequest;
use App\Models\Archives;
use Illuminate\Http\Request;

use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use File;

class ArchivePost extends Controller
{
    public function store(ArchiveRecordRequest $request){

        $archive = new Archives;
        $archive->business_name=$request->input('business_name');
        $archive->description=$request->input('description');
        $archive->category=$request->input('category');
        $archive->specialties=$request->input('specialties');
        $archive->phone_number_one=$request->input('phone_number_one');
        $archive->phone_number_two=$request->input('phone_number_two');
        $archive->email=$request->input('email');
        $archive->socials=$request->input('socials');

        if($request->has('cover_image'))
        {
            $prev_path = $request->input('cover_image');
            $img_name = $request->input('image_name');
            File::move(public_path($prev_path), public_path('archived_records/'.$img_name));

            $archive->cover_image=("archived_records/".$img_name);
            $archive->image_name=$request->input('image_name');
        }
        else{
            $archive->cover_image=('');
            $archive->image_name=('');
        }
        
        $archive->town=$request->input('town');
        $archive->address=$request->input('address');
        $archive->latitude=$request->input('latitude');
        $archive->longitude=$request->input('longitude');
        $archive->date_applied=$request->input('date_applied');
        $archive->date_approved=$request->input('date_approved');
        $archive->save();

        return response()->json("Record Archived");
    }
}
