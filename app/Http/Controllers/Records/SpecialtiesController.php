<?php

namespace App\Http\Controllers\Records;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Records;
use Illuminate\Support\Collection;

class SpecialtiesController extends Controller
{
    /**
     * Get all specialties as suggestions.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getSpecialtiesSuggestions(Request $request)
    {
        $town = strtolower(trim($request->query('town')));
        $query = Records::query();

        if ($town) {
            $query->where('town', $town);
        }

        // Fetch and process specialties
        $specialties = $query->pluck('specialties')
            ->map(function ($specialty) {
                return array_map('trim', explode(',', strtolower($specialty))); // Convert to lowercase
            })
            ->flatten()
            ->unique()
            ->filter(fn($item) => !empty($item));

        $suggestions = $specialties->take(25); // Limit to 20 results

        return response()->json($suggestions->values()->toArray());
    }

    /**
     * Search specialties based on a query term.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function searchSpecialties(Request $request)
    {
        $searchTerm = strtolower(trim($request->query('search')));
        $town = strtolower(trim($request->query('town')));


        $query = Records::query();

        if ($town) {
            $query->where('town', $town);
        }


        // Fetch and process specialties
        $specialties = $query->pluck('specialties')
            ->map(function ($specialty) {
                return array_map('trim', explode(',', strtolower($specialty))); // Convert to lowercase
            })
            ->flatten()
            ->unique()
            ->filter(fn($item) => !empty($item));

        if ($searchTerm) {
            $specialties = $specialties->filter(fn($item) => stripos(strtolower($item), $searchTerm) !== false);
        }

        $results = $specialties->take(25); // Limit to 20 results

        return response()->json($results->values()->toArray());
    }


    /**
     * Get the top 5 or 10 most popular specialties across all towns.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getTopSpecialties()
    {
        $query = Records::query();

        // Fetch and process specialties with counts
        $specialtyCounts = $query->pluck('specialties')
            ->map(function ($specialty) {
                return array_map('trim', explode(',', strtolower($specialty))); // Convert to lowercase
            })
            ->flatten()
            ->filter(fn($item) => !empty($item))
            ->countBy(); // Count occurrences of each specialty

        // Get top 10 specialties by count
        $topSpecialties = $specialtyCounts
            ->sortDesc() // Sort by count in descending order
            ->take(25);  // Take top 10

        return response()->json($topSpecialties);
    }
}
