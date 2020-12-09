<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Models\StoreOrder;
use App\Models\StoreAddOn;
use App\Models\StoreCheckouts;
use App\Models\ActivityLog;
use App\Events\pusherEvent;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;

class StoreCheckoutsController extends Controller
{
    public function addCheckout(Request $request){
        $data = $request->all();
        $storeCheckouts = new StoreCheckouts();
        $storeCheckouts->customerId = $data['customerId'];
        $storeCheckouts->subTotal = $data['subTotal'];
        $storeCheckouts->deliveryFee = $data['deliveryFee'];
        $storeCheckouts->total = $data['total'];
        $storeCheckouts->incash = $data['incash'];
        $storeCheckouts->change = $data['change'];
        $storeCheckouts->save();
        $dataOrder = $data['order'];
        foreach($dataOrder as $value) {
            $storeOrder = new StoreOrder();
            $dataAddOns = $value['same_order'];
            $storeOrder->storeCheckoutsId = $storeCheckouts['id'];
            $storeOrder->customerId = $value['customerId'];
            $storeOrder->cashierId = $data['cashierId'];
            $storeOrder->productId = $value['productId'];
            $storeOrder->onlineId = $value['onlineId'];
            $storeOrder->customerType = $value['customerType'];
            $storeOrder->quantity = $value['quantity'];
            $storeOrder->size = $value['size'];
            $storeOrder->sugarLevel = $value['sugarLevel'];
            $storeOrder->cupType = $value['cupType'];
            $storeOrder->choosenPrice = $value['choosenPrice'];
            $storeOrder->subTotal = $value['subTotal'];
            $storeOrder->status = $data['status'];
            $storeOrder->save();
            foreach ($dataAddOns as $val) {
                $storeAddOns = new StoreAddOn();
                $storeAddOns->storeOrderId = $storeOrder['id'];
                $storeAddOns->addOns = $val['addOns'];
                $storeAddOns->save();
            }
        }

        $activityLog = new ActivityLog();
        $activityLog->cashierId = $data['cashierId'];
        $activityLog->activity = 'Checkout ' . $data['orderHistory'];
        $activityLog->amount = $data['total'];
        $activityLog->save();

        event(new pusherEvent($storeCheckouts));
        return response()->json(compact('storeCheckouts'));
    }
    
    public function retrieveCheckouts(Request $request){
        $storeOrder = StoreOrder::with('orderProduct')->with('sameOrder')->with('getCashier')->with('getCheckouts')->where('storeCheckoutsId', $request->id)->where('status', $request->stat)->where('deleted_at', null)->get();
        return response()->json(compact('storeOrder'));
    }

    public function retrieveOnlineCheckouts(Request $request){
        $storeOrder = StoreOrder::with('orderProduct')->with('sameOrder')->with('getCashier')->with('getCheckouts')->where('onlineId', $request->id)->where('status', 'complete')->where('deleted_at', null)->get()->groupBy('storeCheckoutsId');
        return response()->json(compact('storeOrder'));
    }

    public function retrieveOnlineProcessing(Request $request){
        $storeOrder = StoreOrder::with('orderProduct')->with('sameOrder')->with('getCashier')->with('getCheckouts')->where('onlineId', $request->id)->where('status', 'processing')->where('deleted_at', null)->get()->groupBy('storeCheckoutsId');
        return response()->json(compact('storeOrder'));
    }
    
    public function retrieveAllCheckouts(Request $request){
        $storeOrder = StoreOrder::with('getCustomer')->with('orderProduct')
        ->with('sameOrder')->with('getCashier')->with('getCheckouts')
        ->where('status', 'complete')->where('deleted_at', null)->get()
        ->groupBy('storeCheckoutsId');
        return response()->json(compact('storeOrder'));
    }

    public function retrieveChoosenCheckouts(Request $request){
        $storeOrder = StoreOrder::with('getCustomer')->with('orderProduct')
        ->with('sameOrder')->with('getCashier')->with('getCheckouts')
        ->where('status', 'complete')->where('deleted_at', null)
        ->whereBetween(DB::raw('DATE(created_at)'), array($request->start, $request->end))->get()
        ->groupBy('storeCheckoutsId');
        return response()->json(compact('storeOrder'));
    }

    public function retrieveProcessing(Request $request){
        $storeOrder = StoreOrder::with('getCustomer')->with('orderProduct')->with('sameOrder')->with('getCashier')->with('getCheckouts')->where('status', 'processing')->where('deleted_at', null)->get()->groupBy('storeCheckoutsId');
        return response()->json(compact('storeOrder'));
    }

    public function updateStatus(Request $request){
        foreach ($request->data as $value) {
            $ord = StoreOrder::firstOrCreate(['id' => $value['id']]);
            $ord->status = $request['status'];
            $ord->save();
        }

        $activityLog = new ActivityLog();
        $activityLog->cashierId = $request['cashierId'];
        $activityLog->activity = 'Complete Order';
        $activityLog->save();

        event(new pusherEvent($request['status']));
        return response()->json(['success' => 'successfully updated!']);
    }

    public function retrieveYears(Request $request)
    {
        $years = StoreCheckouts::select('created_at as year')
        ->groupBy('year')
        ->get();
        return response()->JSON(compact('years'));
    }

    public function deleteCheckout(Request $request){
        foreach ($request->id as $val) {
            $storeOrder = StoreOrder::find($val);
            $storeOrder->delete();
        }
        $storeOrder = StoreCheckouts::find($request->checkoutId);
        $storeOrder->delete();
        event(new pusherEvent($storeOrder));
        return response()->json(['success' => 'successfully deleted!']);
    }

    public function retrieveAllSales(Request $request){
        $storeOrder = StoreOrder::with('orderProduct')->with('sameOrder')->with('getCheckouts')->where('status', 'complete')->where('deleted_at', null)->get()->groupBy(function($item)
        {
          return $item->created_at->format('d-M-y');
        });
        return response()->json(compact('storeOrder'));
    }

    public function retrieveChosenSales(Request $request){
        $storeOrder = StoreOrder::with('orderProduct')
        ->with('sameOrder')->with('getCheckouts')
        ->where('status', 'complete')->where('deleted_at', null)
        ->whereBetween(DB::raw('DATE(created_at)'), array($request->start, $request->end))->get()
        ->groupBy(function($item)
        {
          return $item->created_at->format('d-M-y');
        });
        return response()->json(compact('storeOrder'));
    }
    
    public function retrieveDailySales(Request $request)
    {
        $total = DB::table('store_checkouts')->select(DB::raw('SUM(total) as sub'),DB::raw('extract(DAY from created_at) as date'),DB::raw('extract(YEAR from created_at)  as year'),DB::raw('extract(MONTH from created_at)  as month'))
        // $total = StoreCheckouts::select(array(DB::raw('SUM(total) as sub'),DB::raw('DAY(created_at) as date'),DB::raw('YEAR(created_at) as year'),DB::raw('MONTH(created_at) as month')))
        ->whereMonth('created_at', '=', $request->month)
        ->whereYear('created_at', '=', $request->year)
        ->where('deleted_at', null)
        ->groupBy('year','month','date')
        ->get();
        return response()->JSON(compact('total'));
    }
    
    public function retrieveMonthlySales(Request $request)
    {
        $subtotal = StoreCheckouts::select(array(DB::raw('SUM(total) as sub'),DB::raw('extract(MONTH from created_at) as month')))
        ->whereYear('created_at', '=', $request->year)
        ->where('deleted_at', null)
        ->groupBy('month')
        ->get();

        return response()->JSON(compact('subtotal'));
    }

    public function retrieveQuarterSales(Request $request)
    {
        $subtotal = StoreCheckouts::select(array(DB::raw('SUM(total) as sub'),DB::raw('extract(MONTH from created_at) as month')))
                    ->whereYear('created_at', '=', $request->year)
                    ->where('deleted_at', null)
                    ->groupBy('month')
                    ->get();

        return response()->JSON(compact('subtotal'));
    }

    public function retrieveSemiSales(Request $request)
    {
        $subtotal = StoreCheckouts::select(array(DB::raw('SUM(total) as sub'),DB::raw('extract(MONTH from created_at) as month')))
        ->whereYear('created_at', '=', $request->year)
        ->where('deleted_at', null)
        ->groupBy('month')
        ->get();

        return response()->JSON(compact('subtotal'));
    }

    public function retrieveAnnualSales(Request $request)
    {
        $from = $request->from;
        $to = $request->to;
        $subtotal = StoreCheckouts::select(array(DB::raw('SUM(total) as sub'),DB::raw('extract(YEAR from created_at) as year')))
            // ->whereBetween('created_at', [$from, $to])
            ->where('deleted_at', null)
            ->groupBy('year')
            // ->orderBy('year', 'asc')
            ->get();
        // dd($subtotal);
        return response()->JSON(compact('subtotal'));
    }
}
