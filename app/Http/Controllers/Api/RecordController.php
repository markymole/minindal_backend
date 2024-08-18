<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreRecordRequest;
use App\Http\Resources\RecordResource;
use App\Http\Resources\RecordCollection;
use App\Models\Records;
use Illuminate\Http\Request;

use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use File;

class RecordController extends Controller
{
    // public function index(){
    //     return new RecordCollection(Records::all());
    // }

    public function index(Request $request)
    {
        // You can set a default number of items per page, e.g., 15
        $perPage = $request->input('per_page', 15);

        // Use the paginate method and pass the per-page value
        $records = Records::paginate($perPage);

        // Return the paginated results
        return new RecordCollection($records);
    }

    public function show(Records $record){
        return new RecordResource($record);
    }

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

        if($request->hasFile('imagedata'))
        {
            $record->cover_image=$request->file('imagedata')->store('records');
            $record->image_name=$request->file('imagedata')->hashName();
        }
        else{
            $record->cover_image=('');
            $record->image_name=('');
        }
 
        $record->town=$request->input('town');
        $record->address=$request->input('address');
        $record->latitude=$request->input('latitude');
        $record->longitude=$request->input('longitude');
        $record->date_applied=$request->input('date_applied');
        $record->date_approved=$request->input('date_approved');
        $record->save();

        return response()->json("Record Created");
    }

    public function update(StoreRecordRequest $request, Records $record){
        $record->update($request->validated());
        return response()->json("Record Updated");
    }

    public function destroy(Records $record){
        $file = $record->cover_image;
        if (File::exists(public_path($file))) {
            File::delete(public_path($file));
        }

        $record->delete();
        return response()->json("Record Deleted");
    }
}
