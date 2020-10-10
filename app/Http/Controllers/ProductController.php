<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function formSubmit(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'productCategory' => 'required|string|max:255',
            'productName' => 'required|string|max:255',
            'lowPrice' => 'required|regex:/^\d+(\.\d{1,2})?$/',
            'highPrice' => 'required|regex:/^\d+(\.\d{1,2})?$/',
            'overPrice' => 'required|regex:/^\d+(\.\d{1,2})?$/',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }
        $imageName = time().'.'.$request->image->getClientOriginalExtension();
        $request->image->move(public_path('images'), $imageName);
        $data = $request->all();
        $product = new Product();
        $product->lowPrice = $data['lowPrice'];
        $product->highPrice = $data['highPrice'];
        $product->overPrice = $data['overPrice'];
        $product->onlinelowPrice = $data['onlinelowPrice'];
        $product->onlinehighPrice = $data['onlinehighPrice'];
        $product->onlineoverPrice = $data['onlineoverPrice'];
        $product->productCategory = $data['productCategory'];
        $product->productName = $data['productName'];
        $product->status = 'Available';
        $product->image = 'images/'.$imageName;
        $product->save();
        
    	return response()->json(['success'=>'You have successfully upload image.']);
    }

    public function updateProduct(Request $request){
        // $imageName = time().'.'.$request->image->getClientOriginalExtension();
        $data = $request->all();
        $product = Product::firstOrCreate(['id' => $request->id]);
        $product->lowPrice = $data['lowPrice'];
        $product->highPrice = $data['highPrice'];
        $product->overPrice = $data['overPrice'];
        $product->onlinelowPrice = $data['onlinelowPrice'];
        $product->onlinehighPrice = $data['onlinehighPrice'];
        $product->onlineoverPrice = $data['onlineoverPrice'];
        $product->productCategory = $data['productCategory'];
        $product->productName = $data['productName'];
        $product->status = $data['productName'];
        $product->image = $data['image'];
        $product->save();
        return response()->json(compact('product'));
    }

    public function retrieveProduct(Request $request){
        $type = $request['type'];
        $product = Product::where('productCategory', $type)->get();
        return response()->json(compact('product'));
    }

    public function retrieveAllProduct(Request $request){
        $product = Product::orderBy('id','DESC')->get();
        return response()->json(compact('product'));
    }

    public function retrieveOneProduct(Request $request){
        $product = Product::where('id', $request->id)->get();
        return response()->json(compact('product'));
    }

    public function updateStatusProduct(Request $request){
        $product = Product::firstOrCreate(['id' => $request->id]);
        $product->status = $request['status'];
        $product->save();
        return response()->json(['success' => 'successfully updated!']);
    }
}
