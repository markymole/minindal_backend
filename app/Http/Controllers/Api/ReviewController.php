<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ReviewRequest;
use App\http\Resources\ReviewCollection;
use App\http\Resources\ReviewResource;
use App\Models\Reviews;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function index(){
        return new ReviewCollection(Reviews::all());
    }

    public function show(Reviews $review){
        return new ReviewResource($review);
    }

    public function store(ReviewRequest $request){

        
        $review = new Reviews;
        $review->business_name=$request->input('business_name');
        $review->comments=$request->input('comments');
        $review->star_rating=$request->input('star_rating');
        $review->author=$request->input('author');

        if($request->hasFile('imagedata'))
        {
            $review->review_image=$request->file('imagedata')->store('reviews');
            $review->image_name=$request->file('imagedata')->hashName();
        }
        else{
            $review->review_image=('');
            $review->image_name=('');
        }
        $review->save();
        return response()->json("Review Created");
    }

    public function update(ReviewRequest $request, Reviews $review){
        $review->update($request->validated());
        return response()->json("Pending Record Updated");
    }

    public function destroy(Reviews $review){
        // $review->delete();
        // return response()->json("Review Deleted");

        $file = $review->review_image;
        if (File::exists(public_path($file))) {
            File::delete(public_path($file));
        }

        $review->delete();
        return response()->json("Review Deleted");
    }
}
