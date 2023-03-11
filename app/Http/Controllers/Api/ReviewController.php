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
        Reviews::create($request->validated());
        return response()->json("Review Created");
    }

    public function update(ReviewRequest $request, Reviews $review){
        $review->update($request->validated());
        return response()->json("Pending Record Updated");
    }

    public function destroy(Reviews $review){
        $review->delete();
        return response()->json("Review Deleted");
    }
}
