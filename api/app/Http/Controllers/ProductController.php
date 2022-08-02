<?php

namespace App\Http\Controllers;

use App\Models\Business;
use App\Models\Comment;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Validator;
class ProductController extends Controller
{
    public function ownerAddProduct(Request $request){


        $validator = Validator::make($request->all(),[
            // 'credential_photo'=>'required|image|max:2048',
            // 'profile_photo'=>'required|image|max:2048',
            'product_name'=>'required',
            'product_description'=>'required',
            'catrgory_id'=>'required',
            'business_id'=>'required',
            'product_image'=>'required|image',
            'product_image1'=>'required|image',
            'product_image2'=>'required|image',

    ]);

    if($validator->fails()){
        return response()->json(['errors'=>$validator->errors(),'status'=>400]);
    }
        $product = new Product();
        $product->product_name = $request->product_name;
        $product->product_description = $request->product_description;
        $product->catrgory_id = $request->catrgory_id;
        $product->business_id = $request->business_id;


        if($request->has('product_image')) {
            $image= $request->file('product_image');
            $filename =time().'1.'.$image->getClientOriginalExtension();
            $image->move('product_image', $filename);
            $product->product_image = $filename;
            }
        if($request->has('product_image1')) {
            $image= $request->file('product_image1');
            $filename =time().'2.'.$image->getClientOriginalExtension();
            $image->move('product_image', $filename);
            $product->product_image1 = $filename;
            }
        if($request->has('product_image2')) {
            $image= $request->file('product_image2');
            $filename =time().'3.'.$image->getClientOriginalExtension();
            $image->move('product_image', $filename);
            $product->product_image2 = $filename;
            }
        $product->save();
        return $product;
    }

    public function products_business($id)
    {
        // $assoc = Association::select('associations.*', 'managers.manager_name')
        // ->join('managers', 'managers.id', '=', 'associations.assoc_manager_id')->get();
        $products = Product::select('products.*' ,'products.id as prodID', 'businesses.*' ,'categories.category_name')->join('businesses','businesses.id' , '=' ,'products.business_id')->join('categories','categories.id' , '=' ,'products.catrgory_id')->where('businesses.id' , $id)->get();

        if(count($products)==0){
            $business = Business::select('businesses.*' ,'categories.category_name')->join('categories','categories.id' , '=' ,'businesses.catrgory_id')->where('businesses.id' , $id)->get();

            return $business;
        }

        $comment_product = Product::where('business_id' , $id)->get();

        $comment_array = [];
        foreach ($comment_product as  $comm_prr) {
            $count = Comment::where('product_id', $comm_prr->id)->pluck('comment_rate')->count();
            if($count ==0){
                break;
            }else{
                $comment_array[] = ['prod_id'=> $comm_prr->id ,'ava_rate'=>Comment::where('product_id', $comm_prr->id)->pluck('comment_rate')->sum()/$count];
            }

        }



        return [$products , $comment_array];
    }

    public function allproducts_business()
    {
        // $assoc = Association::select('associations.*', 'managers.manager_name')
        // ->join('managers', 'managers.id', '=', 'associations.assoc_manager_id')->get();
        $products = Product::select('products.*', 'businesses.*' ,'categories.category_name')->join('businesses','businesses.id' , '=' ,'products.business_id')->join('categories','categories.id' , '=' ,'products.catrgory_id')->get();

        if(count($products)==0){
            $business = Business::select('businesses.*' ,'categories.category_name')->join('categories','categories.id' , '=' ,'businesses.catrgory_id')->get();

            return $business;
        }

        return $products;
    }


    public function allProducts(){
        return Product::all();
    }
    public function deleteproduct($id)
    {
        $Product =Product::find($id);
        $deleted = $Product;
        $Product->delete();

        return $deleted;
    }



    public function getLastesProducts()
    {
        $products = Product::latest()->take(6)->get();

        $comment_array = [];
        foreach ($products as  $comm_prr) {
            $count = Comment::where('product_id', $comm_prr->id)->pluck('comment_rate')->count();
            if($count ==0){
                continue;
            }else{
                $comment_array[] = ['prod_id'=> $comm_prr->id ,'ava_rate'=>Comment::where('product_id', $comm_prr->id)->pluck('comment_rate')->sum()/$count];
            }


        }
        return [$products , $comment_array];
    }

    public function business_products($id)
    {
        $products = Product::where('business_id' , $id)->get();

        return $products;
    }
}
