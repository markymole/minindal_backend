<?php

namespace App\Http\Controllers\Records;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Records;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth')->only(['updateImage']);
    }
    /**
     * Get all specialties as suggestions.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateImage(Request $request, $id)
    {
        $request->validate([
            'image' => 'required|image',
        ]);

        $record = Records::findOrFail($id);

        if ($request->hasFile('image')) {
            // Remove old image if it exists
            if ($record->cover_image && Storage::disk('public')->exists($record->cover_image)) {
                Storage::disk('public')->delete($record->cover_image);
            }
    

            // Store the new image and get its path and name
            $path = $request->file('image')->store('records', 'public');
            $imageName = $request->file('image')->hashName();

            // Update the record with new image details
            $record->cover_image = $path;
            $record->image_name = $imageName;
            $record->save();
        }

        return response()->json($record);
    }

    /**
     * Search specialties based on a query term.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
}

