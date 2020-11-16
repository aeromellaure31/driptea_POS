<?php

namespace App\Http\Controllers;
use App\Models\CupType;

use Illuminate\Http\Request;

class CupTypeController extends Controller
{
    public function addingCupType(Request $request){
        $cupType = CupType::create([
            'cupTypeName' => $request['cupType'],
            'inputCupOnlinePrice' => $request['inputCupOnlinePrice'],
            'cupTypePrice'=> $request['price'],
            'status'=> $request['status']
        ]);
        return response()->json(compact('cupType'));
    }
    
    public function retrieveCupType(Request $request){
        $cupType = CupType::where('status', 'Available')->where('remove', null)->get();
        return response()->json(compact('cupType'));
    }

    public function retrieveOneCupType(Request $request){
        $cupType = CupType::where('cupTypeName', $request['cupType'])->where('remove', null)->get();
        return response()->json(compact('cupType'));
    }

    public function retrieveAllCupType(Request $request){
        $cupType = CupType::orderBy('cupTypeName','ASC')->where('remove', null)->get();
        return response()->json(compact('cupType'));
    }

    public function updateAvailableCupType(Request $request){
        $data = $request->all();
        $cupType = CupType::firstOrCreate(['id' => $data['id']]);
        $cupType->status = $data['status'];
        $cupType->save();
        return response()->json(['success' => 'successfully updated!']);
    }

    public function editingCupType(Request $request){
        $cupType = CupType::firstOrCreate(['id' => $request->id]);
        $cupType->cupTypeName = $request['cupType'];
        $cupType->inputCupOnlinePrice = $request['inputCupOnlinePrice'];
        $cupType->cupTypePrice = $request['price'];
        $cupType->status = $request['status'];
        $cupType->save();
        return response()->json(['success' => 'successfully updated!']);
    }

    public function deleteCupType(Request $request){
        $cupType = CupType::firstOrCreate(['id' => $request->id]);
        $cupType->remove = 'deleted';
        $cupType->save();
        return response()->json(['success' => 'successfully updated!']);
    }
}