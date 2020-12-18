<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Models\Calculations;
use Illuminate\Http\Request;

class CalculationsController extends Controller
{
    public function getId(){
        $calculation = Calculations::get();
        $id = 0;
        foreach($calculation as $value) {
            $id = $value['id'];
        }
        return $id;
    }

    public function updateCalculation(Request $request){
        $calculations = new Calculations();
        $calculations->adminId = $request->id;
        $calculations->packOfPearl = $request->packOfPearl;
        $calculations->canOfFructose = $request->canOfFructose;
        $calculations->bottleSyrup = $request->bottleSyrup;
        $calculations->packOfTea = $request->packOfTea;
        $calculations->canOfWintermelon = $request->canOfWintermelon;
        $calculations->bottleCreamMilk = $request->bottleCreamMilk;
        $calculations->packOfPowder = $request->packOfPowder;
        $calculations->save();
        return response()->json(compact('calculations'));
    }

    public function retrieveCalculation(){
        $id = $this->getId();
        $calculations = Calculations::where('id', $id)->where('deleted_at', null)->get();
        return response()->json(compact('calculations'));
    }
}
