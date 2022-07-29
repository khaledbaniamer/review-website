<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CommentController extends Controller
{
    //
    public function index(){
        if(Comment::exists()){

              $reviews = Comment::join('users', 'comments.user_id', '=', 'users.id')->get(['users.user_name','users.user_image','comments.comment_body','comments.comment_rate','comments.created_at','comments.id']);
        $ratingSum = Comment::pluck('comment_rate')->sum();
        $ratingCount = Comment::pluck('comment_rate')->count();
        $overall = $ratingSum/$ratingCount;
        if($reviews){
            return response()->json([
                'reviews'=> $reviews,
                'overall'=> $overall,
                'ratingCount'=> $ratingCount,
                'status'=> 200,
            ]);
        }
        }else{
            return response()->json([
                'errors'=> 'There is no reviews',
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

            $reviewAdd = Comment::where('comments.id', $review->id)->join('users', 'comments.user_id', '=', 'users.id')->select(['users.user_name','users.user_image','comments.comment_body','comments.comment_rate','comments.created_at','comments.id'])->first();
            $ratingSum = Comment::pluck('comment_rate')->sum();
            $ratingCount = Comment::pluck('comment_rate')->count();
            $overall = $ratingSum/$ratingCount;
            return response()->json([
                'status' => 200,
                'review' => $reviewAdd,
                'overall'=> $overall,
                'ratingCount'=> $ratingCount,
                'message' => 'your review was added successfully'
            ]);
        }

    }


    public function update(Request $request){
        $validator = Validator::make($request->all(),[
            'review_rate' => 'required',
            'review_body' => 'required',
        ]);
    }


    public function destroy(Comment $comment){
        $reviewDeleted = $comment;
        $comment->delete();
        $ratingSum = Comment::pluck('comment_rate')->sum()?? 0;
        $ratingCount = Comment::pluck('comment_rate')->count()?? 0;
        if (!Comment::exists()) {
            $overall = 0;
            $ratingCount =0;
        }else {
            $overall = $ratingSum/$ratingCount;
        }
        // return $reviewDeleted;

        if($reviewDeleted){
            return response()->json([
                'review'=> $reviewDeleted,
                'overall'=> $overall,
                'ratingCount'=> $ratingCount,
                'message' => 'your review was deleted successfully',
                'status'=> 200,
            ]);
        }else {
            return response()->json([
                'errors'=> 'somthing went wrong',
                'status'=> 400,
            ]);
        }
    }
}
