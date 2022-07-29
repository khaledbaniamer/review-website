<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function ownerAddProduct(){
        $request->validate([
            'product_name'=>'required',
            'product_description'=>'required',
            'product_image'=>'required',
            'category_id'=>'required'



        ]);
        $imageName = time().'-'.$request->post('product_name').'-'.$request->file('product_image')->extension();
        $request->file('product_image')->move(public_path('PostsImage'), $imageName);
        $product = Product::create([
        'product_name'=>$request->product_name,
        'product_description'=>$request->product_description,
        'product_image'=>$imageName,
        'category_id'=>$request->catrgory_id,
        'business_id'=>$request->business_id
    ]);
    }
}
