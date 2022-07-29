<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function category()
    {
        $categories = Category::all();
        return $categories;
    }
    public function addcategory(Request $request)
    {
        $category = new Category();
        $category->category_name = $request->category_name;
        $category->category_image = $request->category_image;

        $category->save();
    }
    public function updatecategory(Request $request , $id)
    {
        $category =Category::find($id);
        $category->category_name = $request->category_name;
        $category->category_image = $request->category_image;

        $category->save();
    }
    public function deletecategory($id)
    {
        $category =Category::find($id);

        $category->delete();
    }
}
