<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CommentController extends Controller
{
    //
    public function index($id){
        $product = Product::where('products.id', $id)->join('categories', 'products.catrgory_id', '=', 'categories.id')->join('businesses', 'products.business_id', '=', 'businesses.id')->get(['categories.category_name','businesses.owner_name','products.*'])->first();
        // return $product;
        if(Comment::exists()){
              $reviews = Comment::join('users', 'comments.user_id', '=', 'users.id')->where('comments.product_id', $id)->get(['users.user_name','users.user_image','comments.*']);
        $ratingSum = Comment::where('comments.product_id', $id)->pluck('comment_rate')->sum();
        $ratingCount = Comment::where('comments.product_id', $id)->pluck('comment_rate')->count();
        // $overall = $ratingSum/$ratingCount;
        if (count($reviews) > 0) {
            $overall = $ratingSum/$ratingCount;
        }else {
            $overall = 0;
        };
        // return $ratingCount;
        if($reviews){
            return response()->json([
                'product'=> $product,
                'reviews'=> $reviews,
                'overall'=> $overall,
                'ratingCount'=> $ratingCount,

            ]);
        }
        }else{
            return response()->json([
                'product'=> $product,
                'reviews'=> [],
                'overall'=> 0,
                'ratingCount'=> 0,
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
            // return $request->all();
            $review = new Comment();
            $review->comment_body = $request->review_body;
            $review->comment_rate = $request->review_rate;
            $review->user_id = $request->user_id;
            $review->product_id = $request->product_id;
            $review->save();
            // return $review;
            $reviewAdd = Comment::where('comments.id', $review->id)->join('users', 'comments.user_id', '=', 'users.id')->select(['users.user_name','users.user_image','comments.*'])->first();
            $ratingSum = Comment::where('comments.product_id', $request->product_id)->pluck('comment_rate')->sum();
            $ratingCount = Comment::where('comments.product_id', $request->product_id)->pluck('comment_rate')->count();
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


    public function update(Request $request, Comment $comment){
        // return $request;
        // return $comment;
        $validator = Validator::make($request->all(),[
            'review_rate_edit' => 'required',
            'review_body_edit' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()]);

        }else {
            // return $request->all();
            // return $comment->product_id;
            $comment->comment_body = $request->review_body_edit;
            $comment->comment_rate = $request->review_rate_edit;
            $comment->update();
            // return $comment->id;
            $reviewUpdate = Comment::where('comments.id', $comment->id)->join('users', 'comments.user_id', '=', 'users.id')->select(['users.user_name','users.user_image','comments.*'])->first();
            // return $reviewUpdate;
            $ratingSum = Comment::where('comments.product_id', $comment->product_id)->pluck('comment_rate')->sum();
            $ratingCount = Comment::where('comments.product_id', $comment->product_id)->pluck('comment_rate')->count();
            $overall = $ratingSum/$ratingCount;
            return response()->json([
                'status' => 200,
                'review' => $reviewUpdate,
                'overall'=> $overall,
                'ratingCount'=> $ratingCount,
                'message' => 'your review was updated successfully'
            ]);
        }
    }


    public function destroy(Comment $comment){
        $reviewDeleted = $comment;
        $comment->delete();
        $ratingSum = Comment::where('comments.product_id', $comment->product_id)->pluck('comment_rate')->sum()?? 0;
        $ratingCount = Comment::where('comments.product_id', $comment->product_id)->pluck('comment_rate')->count()?? 0;
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
//Admin Comments
public function ShowallComments(){

    return Comment::join('users', 'comments.user_id', '=', 'users.id')
    ->join('products', 'comments.product_id', '=', 'products.id')
    ->get(['comments.*', 'users.user_name','product_name']);



    // return Comment::all();

}

public function deleteComment($id){

    $user = Comment::find($id);
    $user->delete($id);


}


}
