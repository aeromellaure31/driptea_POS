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
        $data = $request->all();
        $product = new Product();
        $product->lowPrice = $data['lowPrice'];
        $product->highPrice = $data['highPrice'];
        $product->overPrice = $data['overPrice'];
        $product->onlinelowPrice = $data['onlinelowPrice'];
        $product->onlinehighPrice = $data['onlinehighPrice'];
        $product->onlineoverPrice = $data['onlineoverPrice'];
        $product->productCategory = $data['productCategory'];
        $product->ingredients = json_encode($data['ingredients']);
        $product->description = $data['description'];
        $product->productName = $data['productName'];
        $product->status = 'Available';
        $product->image = $data['image'];
        $product->save();
        
    	return response()->json(['success'=>'You have successfully upload image.']);
    }

    public function updateProduct(Request $request){
        $data = $request->all();
        $product = Product::firstOrCreate(['id' => $request->id]);
        $product->image = $data['image'];
        $product->lowPrice = $data['lowPrice'];
        $product->highPrice = $data['highPrice'];
        $product->overPrice = $data['overPrice'];
        $product->onlinelowPrice = $data['onlinelowPrice'];
        $product->onlinehighPrice = $data['onlinehighPrice'];
        $product->onlineoverPrice = $data['onlineoverPrice'];
        $product->productCategory = $data['productCategory'];
        $product->ingredients = json_encode($data['ingredients']);
        $product->description = $data['description'];
        $product->productName = $data['productName'];
        $product->status = $data['status'];
        $product->save();
        return response()->json(compact('product'));
    }

    public function updateProductCategory(Request $request){
        $product = Product::where('productCategory', $request->oldType)->get();
        foreach($product as $value){
            $prod = Product::firstOrCreate(['id' => $value['id']]);
            $prod['productCategory'] = $request->productCategory;
            $prod->save();
        }
        return response()->json(['stat' => 'success']);
    }

    public function retrieveProduct(Request $request){
        $type = $request['type'];
        $product = Product::where('productCategory', $type)->where('status', 'Available')->where('remove', null)->get();
        return response()->json(compact('product'));
    }

    public function retrieveAllProduct(Request $request){
        $product = Product::orderBy('productName','ASC')->where('remove', null)->get();
        return response()->json(compact('product'));
    }

    public function RetrieveWithDelete(Request $request){
        $product = Product::orderBy('productName','ASC')->get();
        return response()->json(compact('product'));
    }

    public function retrieveAllProductAscending(Request $request){
        $product = Product::orderBy('id','ASC')->where('remove', null)->get();
        return response()->json(compact('product'));
    }

    public function retrieveOneProduct(Request $request){
        $product = Product::where('id', $request->id)->where('remove', null)->get();
        return response()->json(compact('product'));
    }

    public function updateStatusProduct(Request $request){
        $product = Product::firstOrCreate(['id' => $request->id]);
        $product->status = $request['status'];
        $product->save();
        return response()->json(['success' => 'successfully updated!']);
    }

    public function deleteProduct(Request $request){
        $product = Product::firstOrCreate(['id' => $request->id]);
        $product->remove = 'deleted';
        $product->save();
        return response()->json(['success' => 'successfully updated!']);
    }
}