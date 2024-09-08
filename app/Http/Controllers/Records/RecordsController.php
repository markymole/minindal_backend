<?php

namespace App\Http\Controllers\Records;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreRecordRequest;
use App\Http\Resources\RecordResource;
use App\Http\Resources\RecordCollection;
use App\Models\Records;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Pagination\LengthAwarePaginator;

class RecordsController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth')->only(['update', 'destroy']);
    }
    /**
     * Display a listing of the records with pagination or all records.
     *
     * This method supports pagination by default, but if the 'all' query parameter is set to true,
     * it will return all records without pagination. You can also apply additional filters using 
     * query parameters such as 'city', 'type', and 'rating'.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
    */
    public function index(Request $request)
    {

        $fetchAll = $request->query('all') === 'true';

        $perPage = $request->input('per_page', 15);

        $query = Records::query();

        if ($town = $request->query('town')) {
            $query->where('town', $town);
        }

        if ($status = $request->query('status')) {
            $query->where('status', $status);
        }

        if ($food = $request->query('food')) {
            $query->where('specialties', 'LIKE', '%' . $food . '%');
        }
    
        if ($fetchAll) {
            $records = $query->get();
            return new RecordCollection($records);
        } else {
            $records = $query->paginate($perPage);
            return new RecordCollection($records);
        }
    }

    /**
     * Display the specified record.
     *
     * @param \App\Models\Records $record
     * @return \App\Http\Resources\RecordResource
     */
    public function show(Records $record)
    {
        return new RecordResource($record);
    }

    /**
     * Store a newly created record in storage.
     *
     * @param \App\Http\Requests\StoreRecordRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreRecordRequest $request)
    {
        $data = $request->validated();
        
        $data['operating_hours'] = json_encode([
            'from' => $request->input('operating_hours.from'),
            'to' => $request->input('operating_hours.to'),
        ]);
    
        $data['open'] = json_encode([
            'from' => $request->input('open.from'),
            'to' => $request->input('open.to'),
        ]);
    
        $data['coordinates'] = json_encode([
            'latitude' => $request->input('coordinates.latitude'),
            'longitude' => $request->input('coordinates.longitude'),
        ]);

        // Handle file upload
        if ($request->hasFile('imagedata')) {
            $path = $request->file('imagedata')->store('records', 'public');
        
            $data['cover_image'] = $path; 
            $data['image_name'] = $request->file('imagedata')->hashName();
        }

        $record = Records::create($data);

        return response()->json(['message' => 'Record Created', 'data' => new RecordResource($record)], 200);
    }

    /**
     * Update the specified record in storage.
     *
     * @param \App\Http\Requests\StoreRecordRequest $request
     * @param \App\Models\Records $record
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(StoreRecordRequest $request, Records $record)
    {
        $data = $request->validated();

        $data['operating_hours'] = json_encode([
            'from' => $request->input('operating_hours.from'),
            'to' => $request->input('operating_hours.to'),
        ]);
    
        $data['open'] = json_encode([
            'from' => $request->input('open.from'),
            'to' => $request->input('open.to'),
        ]);
    
        $data['coordinates'] = json_encode([
            'latitude' => $request->input('coordinates.latitude'),
            'longitude' => $request->input('coordinates.longitude'),
        ]);

        if ($request->hasFile('imagedata')) {
            // Remove old image if it exists
            if ($record->cover_image) {
                Storage::delete($record->cover_image);
            }

            $path = $request->file('imagedata')->store('records', 'public');
        
            $data['cover_image'] = $path; 
            $data['image_name'] = $request->file('imagedata')->hashName();
        }

        $record->update($data);

        return response()->json(['message' => 'Record Updated', 'data' => new RecordResource($record)], 200);
    }

    /**
     * Remove the specified record from storage.
     *
     * @param \App\Models\Records $record
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Records $record)
    {
        // Delete the cover image if it exists
        if ($record->cover_image) {
            Storage::delete($record->cover_image);
        }

        $record->delete();

        return response()->json(['message' => 'Record Deleted']);
    }

}
