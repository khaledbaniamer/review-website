<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    public function category()
    {
        $categories = Category::all();
        return $categories;
    }
    public function addcategory(Request $request)
    {
        $validator = Validator::make($request->all(),[
                'category_name'=>'required',
                'category_image'=>'required'
        ]);

        if($validator->fails()){
            return response()->json(['errors'=>$validator->errors()]);
        }

        $category = new Category();
        $category->category_name = $request->category_name;
        // $category->category_image = $request->category_image;

        if($request->has('category_image')) {
            $image= $request->file('category_image');
            $filename =time().'.'.$image->getClientOriginalExtension();
            $image->move('category_image/', $filename);
            $category->category_image = $filename;
            }

        $category->save();
        return $category;
    }
    public function updatecategory(Request $request , $id)
    {
        $category =Category::find($id);
        $category->category_name = $request->category_name;
        if($request->has('category_image')) {
            $image= $request->file('category_image');
            $filename =time().'.'.$image->getClientOriginalExtension();
            $image->move('category_image/', $filename);
            $category->category_image = $filename;
            }

        $category->save();
    }
    public function singlecategory($id)
    {
        $category =Category::find($id);

        return $category;
    }
    public function deletecategory($id)
    {
        $category =Category::find($id);

        $category->delete();
    }

    public function single_category($id)
    {
        $category = Category::find($id);
        return $category;
    }
}
