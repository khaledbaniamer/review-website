<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CommentController extends Controller
{
    //
    public function index(){
        $reviews = Comment::join('users', 'comments.user_id', '=', 'users.id')->get(['users.user_name','users.user_image','comments.comment_body','comments.comment_rate','comments.created_at']);
        if($reviews){
            return response()->json([
                'reviews'=> $reviews,
                'status'=> 200,
            ]);
        }else {
            return response()->json([
                'errors'=> 'somthing went wrong',
                'status'=> 400,
            ]);
        }
    }

    public function store(Request $request){
        $validator = Validator::make($request->all(),[
            'review_rate' => 'required',
            'review_body' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()]);

        }else {

            $review = new Comment();
            $review->comment_rate = $request->review_rate;
            $review->comment_body = $request->review_body;
            $review->user_id = $request->user_id;
            $review->product_id = $request->product_id;
            $review->save();
            return response()->json([
                'status' => 200,
                'review' => $review,
                'message' => 'your review was added successfully'
            ]);
        }

    }
}
