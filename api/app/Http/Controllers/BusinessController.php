<?php

namespace App\Http\Controllers;
use App\Models\Business;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BusinessController extends Controller
{
    public function getBusiness()
    {
        $busniesses = Business::all();
        return $busniesses;
    }

    public function getSingleBusiness($id)
    {
        $singleBusiness = Business::find($id);
        return $singleBusiness;
    }
    
    public function addBusiness(Request $request)
    {
    $validator = Validator::make($request->all(),[
            'owner_name'=>'required',
            'owner_email'=>'required',
            'description'=>'required',
            'password'=>'required',
            'address'=>'required',
            'category_id'=>'required',
            'credential_photo'=>'required|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
            'profile_photo'=>'required|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
    ]);

    if($validator->fails()){
        return response()->json(['errors'=>$validator->errors()]);
    }
        $business = new Business();
        $business->owner_name = $request->owner_name;
        $business->owner_email = $request->owner_email;
        $business->description = $request->description;
        $business->password = $request->password;
        $business->address = $request->address;
        $business->catrgory_id  = $request->category_id;

        if($request->has('credential_photo')) {
            $image= $request->file('credential_photo');
            $filename =time().'.'.$image->getClientOriginalExtension();
            $image->move('business_image/', $filename);
            $business->credential_photo = $filename;
            }
        if($request->has('profile_photo')) {
            $image= $request->file('profile_photo');
            $filename =time().'.'.$image->getClientOriginalExtension();
            $image->move('profile_photo/', $filename);
            $business->profile_photo = $filename;
            }
        $business->save();
    }
    

}
