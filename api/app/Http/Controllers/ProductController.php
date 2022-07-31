<?php

namespace App\Http\Controllers;

use App\Models\Business;
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
            'product_image'=>'required|image|max:2048',
            'product_image1'=>'required|image|max:2048',
            'product_image2'=>'required|image|max:2048',

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
            $filename =time().'.'.$image->getClientOriginalExtension();
            $image->move('product_image', $filename);
            $product->product_image = $filename;
            }
        if($request->has('product_image1')) {
            $image= $request->file('product_image1');
            $filename =time().'.'.$image->getClientOriginalExtension();
            $image->move('product_image', $filename);
            $product->product_image1 = $filename;
            }
        if($request->has('product_image2')) {
            $image= $request->file('product_image2');
            $filename =time().'.'.$image->getClientOriginalExtension();
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
        $products = Product::select('products.*', 'businesses.*' ,'categories.category_name')->join('businesses','businesses.id' , '=' ,'products.business_id')->join('categories','categories.id' , '=' ,'products.catrgory_id')->where('businesses.id' , $id)->get();

        if(count($products)==0){
            $business = Business::select('businesses.*' ,'categories.category_name')->join('categories','categories.id' , '=' ,'businesses.catrgory_id')->where('businesses.id' , $id)->get();

            return $business;
        }

        return $products;
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

        $Product->delete();
    }
}
