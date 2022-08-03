<?php

namespace App\Http\Controllers;
use App\Models\Business;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BusinessController extends Controller
{
    public function getBusiness()
    {
        $busniesses = Business::where('business_status',1)->get();
        return $busniesses;
    }
    public function getAllBusiness()
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
        // return $request->all();
    $validator = Validator::make($request->all(),[
            // 'credential_photo'=>'required|image|max:2048',
            // 'profile_photo'=>'required|image|max:2048',
            'owner_name'=>'required',
            'owner_email'=>'required',
            'description'=>'required',
            'password'=>'required',
            'address'=>'required',
            'category_id'=>'required',
            'credential_photo'=>'required|image|max:2048',
            'profile_photo'=>'required|image|max:2048',

    ]);

    if($validator->fails()){
        return response()->json(['errors'=>$validator->errors(),'status'=>400]);
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

    public function single_business_category($id)
    {
        $business = Business::where('catrgory_id' , $id)->where('business_status',1)->get();

        return $business;
    }

    public function active($id){

      $business= Business::find($id);
           if($business->business_status==0){
            $bb=Business::where('id', $id)->update(['business_status'=>1]);
            $dd='Active';
          return  response()->json([$bb,'s'=>$dd]);
           }else{
            $bb=Business::where('id', $id)->update(['business_status'=>0]);
            $dd='Not Active';
          return  response()->json([$bb,'s'=>$dd]);

           }



        // $busines->save();

// return $busines;
    }
    public function notactive($id){

        return  Business::where('id', $id)->update(['business_status'=>0]);

          // $busines->save();

  // return $busines;
      }

      public function deleteBusiness($id){

        $user = Business::find($id);
        $user->delete($id);


    }

}
