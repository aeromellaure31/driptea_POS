<?php

namespace App\Http\Controllers;
use App\Models\QuantityCups;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class QuantityCupsController extends Controller
{
    public function getId(){
        $quantityAll = QuantityCups::get();
        $id = 0;
        foreach($quantityAll as $value) {
            $id = $value['id'];
        }
        return $id;
    }

    public function addIncomingCups(Request $request){
        $id = $this->getId();
        $quantity = QuantityCups::where('id', $id)->get();
        if(sizeof($quantity) > 0){
            $data = $request->all();
            $quantityCups = new QuantityCups();
            $quantityCups->incomingLowDose = ($data['incomingLowDose']);
            $quantityCups->incomingHighDose = ($data['incomingHighDose']);
            $quantityCups->incomingOverDose = ($data['incomingOverDose']);
            $quantityCups->onRockLowDose = ($data['incomingLowDose'] + $quantity[0]['remainingLowDose']);
            $quantityCups->onRockHighDose = ($data['incomingHighDose'] + $quantity[0]['remainingHighDose']);
            $quantityCups->onRockOverDose = ($data['incomingOverDose'] + $quantity[0]['remainingOverDose']);
            $quantityCups->usedCupsLowDose = 0;
            $quantityCups->usedCupsHighDose = 0;
            $quantityCups->usedCupsOverDose = 0;
            $quantityCups->remainingLowDose = ($data['incomingLowDose'] + $quantity[0]['remainingLowDose']);
            $quantityCups->remainingHighDose = ($data['incomingHighDose'] + $quantity[0]['remainingHighDose']);
            $quantityCups->remainingOverDose = ($data['incomingOverDose'] + $quantity[0]['remainingOverDose']);
            $quantityCups->save();
        }else{
            $data = $request->all();
            $quantityCups = new QuantityCups();
            $quantityCups->incomingLowDose = $data['incomingLowDose'];
            $quantityCups->incomingHighDose = $data['incomingHighDose'];
            $quantityCups->incomingOverDose = $data['incomingOverDose'];
            $quantityCups->onRockLowDose = $data['incomingLowDose'];
            $quantityCups->onRockHighDose = $data['incomingHighDose'];
            $quantityCups->onRockOverDose = $data['incomingOverDose'];
            $quantityCups->usedCupsLowDose = 0;
            $quantityCups->usedCupsHighDose = 0;
            $quantityCups->usedCupsOverDose = 0;
            $quantityCups->remainingLowDose = $data['incomingLowDose'];
            $quantityCups->remainingHighDose = $data['incomingHighDose'];
            $quantityCups->remainingOverDose = $data['incomingOverDose'];
            $quantityCups->save();
        }
        dd($quantityCups);
        return response()->json(compact('quantityCups'));
    }

    public function updateRemainingCups(Request $request){
        $id = $this->getId();
        $data = $request->all();
        $quantity = QuantityCups::where('id', $id)->get();
        $quantityCups = QuantityCups::firstOrCreate(['id' => $id]);
        $quantityCups->usedCupsLowDose = ($data['usedCupsLowDose'] + $quantity[0]['usedCupsLowDose']);
        $quantityCups->usedCupsHighDose = ($data['usedCupsHighDose'] + $quantity[0]['usedCupsHighDose']);
        $quantityCups->usedCupsOverDose = ($data['usedCupsOverDose'] + $quantity[0]['usedCupsOverDose']);
        $quantityCups->remainingLowDose = ($quantity[0]['onRockLowDose'] - $quantityCups->usedCupsLowDose);
        $quantityCups->remainingHighDose = ($quantity[0]['onRockHighDose'] - $quantityCups->usedCupsHighDose);
        $quantityCups->remainingOverDose = ($quantity[0]['onRockOverDose'] - $quantityCups->usedCupsOverDose);
        $quantityCups->save();
        return response()->json(compact('quantityCups'));
    }

    public function updateDeletedCups(Request $request){
        $id = $this->getId();
        $data = $request->all();
        $quantity = QuantityCups::where('id', $id)->get();
        $quantityCups = QuantityCups::firstOrCreate(['id' => $id]);
        $quantityCups->usedCupsLowDose = ($quantity[0]['usedCupsLowDose'] - $data['usedCupsLowDose']);
        $quantityCups->usedCupsHighDose = ($quantity[0]['usedCupsHighDose'] - $data['usedCupsHighDose']);
        $quantityCups->usedCupsOverDose = ($quantity[0]['usedCupsOverDose'] - $data['usedCupsOverDose']);
        $quantityCups->remainingLowDose = ($quantityCups->usedCupsLowDose + $quantity[0]['onRockLowDose']);
        $quantityCups->remainingHighDose = ($quantityCups->usedCupsHighDose + $quantity[0]['onRockHighDose']);
        $quantityCups->remainingOverDose = ($quantityCups->usedCupsOverDose + $quantity[0]['onRockOverDose']);
        $quantityCups->save();
        return response()->json(compact('quantityCups'));
    }

    public function retrieveCupSize(Request $request){
        $quantityCupsInDB = QuantityCups::get();
        return response()->json(compact('quantityCupsInDB'));
    }

    public function retrieveCupForInventory(Request $request){
        $quantityCupsInDB = QuantityCups::whereBetween(DB::raw('DATE(created_at)'), array($request->dateFrom, $request->dateTo))->get();
        return response()->json(compact('quantityCupsInDB'));
    }
}
