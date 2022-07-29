<?php

namespace App\Http\Controllers;
use App\Models\Business;
use Illuminate\Http\Request;

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
}
