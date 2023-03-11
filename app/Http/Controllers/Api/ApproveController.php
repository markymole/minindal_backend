<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\http\Requests\StoreRecordRequest;
use App\Models\Records;
use Illuminate\Http\Request;

use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use File;

class ApproveController extends Controller
{
    public function store(StoreRecordRequest $request){

        $record = new Records;
        $record->business_name=$request->input('business_name');
        $record->description=$request->input('description');
        
        $record->type=$request->input('type');
        $record->price_range=$request->input('price_range');
        $record->operating_from=$request->input('operating_from');
        $record->operating_to=$request->input('operating_to');
        $record->open_from=$request->input('open_from');
        $record->open_to=$request->input('open_to');
        $record->service_options=$request->input('service_options');
        $record->rating=$request->input('rating');

        $record->category=$request->input('category');
        $record->specialties=$request->input('specialties');
        $record->phone_number_one=$request->input('phone_number_one');
        $record->phone_number_two=$request->input('phone_number_two');
        $record->email=$request->input('email');
        $record->socials=$request->input('socials');
        
        if($request->input('cover_image') == "")
        {
            $record->cover_image=('');
            $record->image_name=('');
        }
        else{
            $prev_path = $request->input('cover_image');
            $img_name = $request->input('image_name');
            File::move(public_path($prev_path), public_path('records/'.$img_name));
 
            $record->cover_image=("records/".$img_name);
            $record->image_name=$request->input('image_name');

        }
 

        $record->town=$request->input('town');
        $record->address=$request->input('address');
        $record->latitude=$request->input('latitude');
        $record->longitude=$request->input('longitude');
        $record->date_applied=$request->input('date_applied');
        $record->date_approved=$request->input('date_approved');
        $record->save();

        return response()->json("Record Unarchived");
    }
}
