<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Models\AddCategory;

use Illuminate\Http\Request;

class AddCategoryController extends Controller
{
    public function addCategory(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'productCategory' => 'required|string|max:255',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $imageName = time().'.'.$request->image->getClientOriginalExtension();
        $request->image->move(public_path('images'), $imageName);
        $data = $request->all();
        $addCategory = new AddCategory();
        $addCategory->productCategory = $request['productCategory'];
        $addCategory->image = 'images/'.$imageName;
        $addCategory->save();
        
    	return response()->json(['success'=>'You have successfully upload image.']);
    }

    public function updateCategory(Request $request){
        $imageName = time().'.'.$request->image->getClientOriginalExtension();
        $addCategory = AddCategory::firstOrCreate(['id' => $request->id]);
        $addCategory->productCategory = $request['productCategory'];
        $addCategory->image = 'images/'.$imageName;
        $addCategory->save();
        return response()->json(compact('addCategory'));
    }

    public function retrieveCategory(Request $request){
        $addCategory = AddCategory::orderBy('id','DESC')->get();
        return response()->json(compact('addCategory'));
    }
}
