<?php

namespace App\Http\Controllers\Records;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Records;
use App\Http\Resources\RecordResource;

class GeneralController extends Controller
{
    public function findByBusinessName(Request $request)
    {
        $business_name = $request->query('business_name');
    
        if (!$business_name) {
            return response()->json(['message' => 'Business name is required'], 400);
        }
    
        $business_name = urldecode($business_name);
    
        $record = Records::whereRaw('LOWER(business_name) = ?', [strtolower($business_name)])->first();
    
        if (!$record) {
            return response()->json(['message' => 'Record not found'], 404);
        }
    
        return response()->json(new RecordResource($record), 200);
    }
    
}
