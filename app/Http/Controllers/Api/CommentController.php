<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Requests\CommentRequest;
use App\http\Resources\CommentCollection;
use App\http\Resources\CommentResource;
use App\Models\Comments;


class CommentController extends Controller
{
    public function index(){
        return new CommentCollection(Comments::all());
    }

    public function show(Comments $comment){
        return new CommentResource($comment);
    }

    public function store(CommentRequest $request){
        Comments::create($request->validated());
        return response()->json("Comment Created");
    }

    public function update(CommentRequest $request, Comments $comment){
        $comment->update($request->validated());
        return response()->json("Comment Updated");
    }

    public function destroy(Comments $comment){
        $comment->delete();
        return response()->json("Comment Deleted");
    }

}
