<?php

namespace App\Http\Controllers\Records;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Records;
use Illuminate\Support\Collection;
use App\Http\Resources\RecordCollection;

class SuggestionsController extends Controller
{
    /**
     * Get random restaurant or place suggestions.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getRandomSuggestions(Request $request)
    {
        // Number of random suggestions to return (default is 5)
        $limit = intval($request->query('limit', 5));
    
        // Fetch random records
        $randomSuggestions = Records::inRandomOrder()
            ->take($limit)
            ->get(); // Adjusted columns
    
        if ($randomSuggestions->isEmpty()) {
            return response()->json([
                'message' => 'No suggestions available at the moment.'
            ], 404);
        }
    
        return new RecordCollection($randomSuggestions);
    }
}
