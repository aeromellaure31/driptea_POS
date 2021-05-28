<?php

namespace App\Http\Controllers;
use App\Models\IngredientType;

use Illuminate\Http\Request;

class IngredientTypeController extends Controller
{
    public function addIngredientType(Request $request){
        $ingredientType = new IngredientType();
        $ingredientType->ingredientType = $request->ingredientType;
        $ingredientType->save();
        return response()->json(compact('ingredientType'));
    }

    public function updateIngredientType(Request $request){
        $ingredientType = IngredientType::firstOrCreate(['id' => $request->id]);
        $ingredientType->ingredientType = $request->ingredientType;
        $ingredientType->save();
        return response()->json(compact('ingredientType'));
    }

    public function deleteIngredientType(Request $request){
        $ingredientType = IngredientType::find($request->id);
        $ingredientType->delete();
        return response()->json(['success' => 'successfully deleted!']);
    }

    public function retrieveIngredientType(Request $request){
        $ingredientType = IngredientType::where('deleted_at', null)->get();
        return response()->json(compact('ingredientType'));
    }
}
