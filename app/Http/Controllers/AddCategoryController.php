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
        $data = $request->all();
        $addCategory = new AddCategory();
        $addCategory->productCategory = $data['productCategory'];
        $addCategory->image = $data['image'];
        $addCategory->save();
        
    	return response()->json(['success'=>'You have successfully upload image.']);
    }

    public function updateCategory(Request $request){
        $addCategory = AddCategory::firstOrCreate(['id' => $request->id]);
        $addCategory->image = $request->image;
        $addCategory->productCategory = $request['productCategory'];
        $addCategory->save();
        return response()->json(compact('addCategory'));
    }

    // public function addCategory(Request $request)
    // {
    //     $validator = Validator::make($request->all(), [
    //         'productCategory' => 'required|string|max:255',
    //     ]);
    //     if($validator->fails()){
    //         return response()->json($validator->errors()->toJson(), 400);
    //     }

    //     $imageName = time().'.'.$request->image->getClientOriginalExtension();
    //     $request->image->move(public_path('images'), $imageName);
    //     $data = $request->all();
    //     $addCategory = new AddCategory();
    //     $addCategory->productCategory = $request['productCategory'];
    //     $addCategory->image = 'images/'.$imageName;
    //     $addCategory->save();
        
    // 	return response()->json(['success'=>'You have successfully upload image.']);
    // }

    // public function updateCategory(Request $request){
    //     $addCategory = AddCategory::firstOrCreate(['id' => $request->id]);
    //     if($addCategory->image === $request->image){
    //         $addCategory->image = $request->image;
    //     }else{
    //         $imageName = time().'.'.$request->image->getClientOriginalExtension();
    //         $request->image->move(public_path('images'), $imageName);
    //         $addCategory->image = 'images/'.$imageName;
    //     }
    //     $addCategory->productCategory = $request['productCategory'];
    //     $addCategory->save();
    //     return response()->json(compact('addCategory'));
    // }

    public function retrieveCategory(Request $request){
        $addCategory = AddCategory::where('remove', null)->orderBy('productCategory','ASC')->get();
        return response()->json(compact('addCategory'));
    }

    public function retrieveCategoryAscending(Request $request){
        $addCategory = AddCategory::orderBy('productCategory','ASC')->get();
        return response()->json(compact('addCategory'));
    }

    public function retrieveCategoryById(Request $request){
        $addCategory = AddCategory::orderBy('id','ASC')->get();
        return response()->json(compact('addCategory'));
    }
    
    public function deleteCategory(Request $request){
        $addCategory = AddCategory::firstOrCreate(['id' => $request->id]);
        $addCategory->remove = 'deleted';
        $addCategory->save();
        return response()->json(['success' => 'successfully updated!']);
    }
}
