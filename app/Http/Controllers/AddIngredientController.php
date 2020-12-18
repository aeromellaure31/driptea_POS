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
        $id = $this->getId();
        $addIng = AddIngredients::where('id', $id)->where('deleted_at', null)->get();
        if(sizeof($addIng) > 0){
            $new = json_decode($addIng[0]['remainingQuantity']);
            $a = [];
            $count = 0;
            foreach ($request->quantity as $val) {
                if($count < sizeof($new)){
                    array_push($a, ($val + $new[$count]));
                }else{
                    array_push($a, $val);
                }
                $count++;
            }
            $addIngredient = new AddIngredients();
            $addIngredient->ingredients = json_encode($request->ingredients);
            $addIngredient->quantity = json_encode($a);
            $addIngredient->remainingQuantity = json_encode($a);
            $addIngredient->save();
            return response()->json(compact('addIngredient'));
        }else{
            $addIngredient = new AddIngredients();
            $addIngredient->ingredients = json_encode($request->ingredients);
            $addIngredient->quantity = json_encode($request->quantity);
            $addIngredient->remainingQuantity = json_encode($request->quantity);
            $addIngredient->save();
            return response()->json(compact('addIngredient'));
        }
    }

    public function retrieveData(Request $request){
        $addIngredient = AddIngredients::where('deleted_at', null)->get();
        return response()->json(compact('addIngredient'));
    }

    public function retrieveDataChosen(Request $request){
        $addIngredient = AddIngredients::where('deleted_at', null)->whereBetween(DB::raw('DATE(created_at)'), array($request->start, $request->end))->get();
        return response()->json(compact('addIngredient'));
    }

    public function retrieveRemainingData(Request $request){
        $id = $this->getId();
        $addIngredient = AddIngredients::where('id', $id)->where('deleted_at', null)->get();
        return response()->json(compact('addIngredient'));
    }

    public function updateUsedIngredients(Request $request){
        $id = $this->getId();
        $addIng = AddIngredients::where('id', $id)->get();
        $addIngredient = AddIngredients::firstOrCreate(['id' => $id]);
        $addIngredient['remainingQuantity'] = json_encode($request->remaining);
        if($addIngredient['usedQuantity']){
            $new = json_decode($addIngredient['usedQuantity']);
            $a = [];
            $count = 0;
            foreach ($request->usedQuantity as $val) {
                if($count < sizeof($new)){
                    array_push($a, ($val + $new[$count]));
                }else{
                    array_push($a, $val);
                }
                $count++;
            }
            $addIngredient['usedQuantity'] = json_encode($a);
        }else{
            $addIngredient['usedQuantity'] = json_encode($request->usedQuantity);
        }
        $addIngredient->save();
        return response()->json(compact('addIngredient'));
    }
}
