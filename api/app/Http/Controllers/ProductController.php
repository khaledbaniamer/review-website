<?php

namespace App\Http\Controllers;

use App\Models\Business;
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

    public function products_business($id)
    {
        // $assoc = Association::select('associations.*', 'managers.manager_name')
        // ->join('managers', 'managers.id', '=', 'associations.assoc_manager_id')->get();
        $products = Product::select('products.*', 'businesses.*' ,'categories.category_name')->join('businesses','businesses.id' , '=' ,'products.business_id')->join('categories','categories.id' , '=' ,'products.catrgory_id')->where('businesses.id' , $id)->get();

        if(count($products)==0){
            $business = Business::select('businesses.*' ,'categories.category_name')->join('categories','categories.id' , '=' ,'businesses.catrgory_id')->where('businesses.id' , $id)->get();
            
            return $business;
        }   
        return $products;
    }
}
