<?php

namespace App\Http\Controllers\Reviews;

use App\Models\Reviews;
use App\Models\Records;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ReviewsController extends Controller {

    public function index(Request $request) {
        $businessName = $request->input('business_name');
    
        $business = Records::where('business_name', $businessName)->first();
    
        if (!$business) {
            return response()->json(['message' => 'Business not found'], 404);
        }
    
        $reviews = Reviews::with('user')
            ->where('business_id', $business->id)
            ->get();
    
        $formattedReviews = $reviews->map(function($review) {
            return [
                'rating' => $review->rating,
                'comment' => $review->comment,
                'images' => !empty($review->images) ? explode(',', $review->images) : null,
                'created_at' => $review->created_at,
                'user' => [
                    'id' => $review->user->id,
                    'name' => $review->user->name,
                    'email' => $review->user->email, //
                ],
            ];
        });
    
        return response()->json($formattedReviews);
    }
    

    public function store(Request $request)
    {
        // Validate the request data
        $request->validate([
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'required|string',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif|max:2048', 
        ]);

        $review = Reviews::create([
            'rating' => $request->input('rating'),
            'comment' => $request->input('comment'),
            'business_id' => $request->input('business_id'),
            'author_id' => $request->input('author_id'),
        ]);

        if ($request->hasFile('images')) {
            $imageNames = []; 
            foreach ($request->file('images') as $image) {
                $path = $image->store('reviews', 'public');
                
                $fileName = basename($path);
                
                $imageNames[] = $fileName;
            }
            
 
            $review->update(['images' => implode(',', $imageNames)]);
        }

        return response()->json(['message' => 'Review created successfully']);
    }
}