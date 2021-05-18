<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Models\AddIngredients;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AddIngredientController extends Controller
{
    public function getId(){
        $addIngredient = AddIngredients::get();
        $id = 0;
        foreach($addIngredient as $value) {
            $id = $value['id'];
        }
        return $id;
    }

    public function addIngredientQuantity(Request $request){
        $addIng = AddIngredients::where('deleted_at', null)->whereDate('created_at', '=', date("Y-m-d"))->get();
        if(count($addIng) > 0){
            $ingredients_array = [];
            foreach ($addIng as $ingredient){
                array_push($ingredients_array, $ingredient['ingredients']);
            }
            foreach ($request->ingredients as $key => $value) {
                foreach ($addIng as $key_ingredients => $ingredients){
                    $current_date = date("d/m/Y");
                    $database_date = $ingredients->created_at->format('d/m/Y');
                    if($ingredients['ingredients'] === $value && $current_date === $database_date){
                        $addIngredient = AddIngredients::firstOrCreate(['id' => $ingredients['id']]);
                        $addIngredient->quantity = $ingredients['quantity'] + $request->quantity[$key];
                        $addIngredient->remainingQuantity = $ingredients['remainingQuantity'] + $request->quantity[$key];
                        $addIngredient->save();
                    }else if($ingredients['ingredients'] === $value && $current_date !== $database_date){
                        $addIngredient = new AddIngredients();
                        $addIngredient->ingredients = $value;
                        $addIngredient->quantity = $request->quantity[$key];
                        $addIngredient->remainingQuantity = $request->quantity[$key];
                        $addIngredient->save();
                    }else if(!in_array($value, $ingredients_array)){
                        $addIngredient = new AddIngredients();
                        $addIngredient->ingredients = $value;
                        $addIngredient->quantity = $request->quantity[$key];
                        $addIngredient->remainingQuantity = $request->quantity[$key];
                        $addIngredient->save();
                        array_push($ingredients_array, $value);
                    }
                }
            }
        }else{
            $allIngredients = AddIngredients::where('deleted_at', null)->get();
            // $storeLastIngredient = end($allIngredients);
            $storeLastIngredient = '';
            foreach ($allIngredients as $key => $value){
                $storeLastIngredient = $value;
            }
            if(count($allIngredients) > 0){
                $add_ingredient = AddIngredients::where('deleted_at', null)->whereDate('updated_at', '=', $storeLastIngredient->updated_at->format("Y-m-d"))->get();
                $ingredients_array = [];
                foreach ($add_ingredient as $ingredient){
                    array_push($ingredients_array, $ingredient['ingredients']);
                }
                foreach ($request->ingredients as $key => $value){
                    foreach ($add_ingredient as $key_ingredients => $ingredients){
                        if($ingredients['ingredients'] === $value){
                            $addIngredient = new AddIngredients();
                            $addIngredient->ingredients = $value;
                            $addIngredient->quantity = $ingredients['quantity'] + $request->quantity[$key];
                            $addIngredient->remainingQuantity = $ingredients['remainingQuantity'] + $request->quantity[$key];
                            $addIngredient->save();
                        }else if(!in_array($value, $ingredients_array)){
                            $addIngredient = new AddIngredients();
                            $addIngredient->ingredients = $value;
                            $addIngredient->quantity = $request->quantity[$key];
                            $addIngredient->remainingQuantity = $request->quantity[$key];
                            $addIngredient->save();
                            array_push($ingredients_array, $value);
                        }
                    }
                }
            }else{                
                foreach ($request->ingredients as $key => $value){
                    $addIngredient = new AddIngredients();
                    $addIngredient->ingredients = $value;
                    $addIngredient->quantity = $request->quantity[$key];
                    $addIngredient->remainingQuantity = $request->quantity[$key];
                    $addIngredient->save();
                }
            }
        }
        return response()->json('success');
    }

    public function retrieveData(Request $request){
        $addIngredient = AddIngredients::where('deleted_at', null)->whereDate('created_at', '=', date("Y-m-d"))->get();
        return response()->json(compact('addIngredient'));
    }

    public function retrieveAllData(Request $request){
        $addIngredient = AddIngredients::where('deleted_at', null)->get();
        return response()->json(compact('addIngredient'));
    }

    public function retrieveDataChosen(Request $request){
        $addIngredient = AddIngredients::where('deleted_at', null)->whereBetween(DB::raw('DATE(created_at)'), array($request->start, $request->end))->get();
        return response()->json(compact('addIngredient'));
    }

    public function retrieveRemainingData(Request $request){
        $id = $this->getId();
        $addIngredient = AddIngredients::where('id', $id)->whereDate('created_at', '=', date("Y-m-d"))->where('deleted_at', null)->get();
        return response()->json(compact('addIngredient'));
    }

    public function updateUsedIngredients(Request $request){
        $current_date = date("d/m/Y");
        $allIngredients = AddIngredients::where('deleted_at', null)->get();
        // $storeLastIngredient = end($allIngredients);
        $storeLastIngredient = '';
        foreach ($allIngredients as $key => $value){
            $storeLastIngredient = $value;
        }
        $addIng = AddIngredients::where('deleted_at', null)->whereDate('updated_at', '=', $storeLastIngredient->updated_at->format("Y-m-d"))->get();
        if(count($addIng) > 0){
            foreach ($request->ingredients as $key => $value) {
                foreach ($addIng as $key_ingredients => $ingredients){
                    $database_date = $ingredients->updated_at->format('d/m/Y');
                    if($ingredients['ingredients'] === $value && $current_date === $database_date){
                        $addIngredient = AddIngredients::firstOrCreate(['id' => $ingredients['id']]);
                        $addIngredient->usedQuantity = ($ingredients['usedQuantity'] ? $ingredients['usedQuantity'] : 0) + $request->usedQuantity[$key];
                        $addIngredient->remainingQuantity = $ingredients['remainingQuantity'] - $request->usedQuantity[$key];
                        $addIngredient->save();
                    }
                }
            }
        }
        return response()->json('success');
    }
}
