<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function ownerAddProduct(Request $request){
        // $request->validate([
        //     'product_name'=>'required',
        //     'product_description'=>'required',
        //     'product_image'=>'required',
        //     'category_id'=>'required'



        // ]);
        $imageName = time().'-'.'-'.$request->file('product_image')->extension();
        $request->file('product_image')->move(public_path('PostsImage'), $imageName);
        $product = Product::create([
        'product_name'=>$request->product_name,
        'product_description'=>$request->product_description,
        'product_image'=>$imageName,
        'catrgory_id'=>$request->category_id,
        'business_id'=>$request->business_id

    ]);
    return $product;
    }
}
