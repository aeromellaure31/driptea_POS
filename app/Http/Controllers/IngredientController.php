<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Models\Ingredients;
use App\Models\Calculations;
use Illuminate\Http\Request;

class IngredientController extends Controller
{
    public function getId(){
        $calculation = Calculations::get();
        $id = 0;
        foreach($calculation as $value) {
            $id = $value['id'];
        }
        return $id;
    }

    public function addIngredients(Request $request){
        $ingredients = new Ingredients();
        $ingredients->adminId = $request->id;
        $ingredients->type = $request->type;
        $ingredients->ingredientsName = $request->ingredientsName;
        $ingredients->save();
        return response()->json(compact('ingredients'));
    }

    public function updateIngredients(Request $request){
        $ingredients = Ingredients::firstOrCreate(['id' => $request->id]);
        $ingredients->adminId = $request->id;
        $ingredients->type = $request->type;
        $ingredients->ingredientsName = $request->ingredientsName;
        $ingredients->save();
        return response()->json(compact('ingredients'));
    }

    public function updateOnRockQuantityQuantity(Request $request){
        $data = $request->param;
        foreach ($data as $val) {
            $ingredients = Ingredients::firstOrCreate(['id' => $val['id']]);
            $ingredients['onRockQuantity'] = $val['onRockQuantity'];
            $ingredients['convertionQuantity'] = $val['convertionQuantity'];
            $ingredients->save();
        }
        return response()->json(compact('ingredients'));
    }

    public function retrieveIngredients(Request $request){
        $ingredients = Ingredients::where('deleted_at', null)->get();
        return response()->json(compact('ingredients'));
    }
}
