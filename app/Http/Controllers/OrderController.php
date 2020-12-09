<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Models\Order;
use App\Models\Product;
use App\Models\AddOns;
use App\Models\ActivityLog;
use App\Models\StoreOrder;
use Illuminate\Support\Facades\DB;
use App\Events\pusherEvent;

use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function addOrder(Request $request){
        $data = $request->all();
        $dataAddOns = $data['addOns'];
        $order = new Order();
        $order->customerId = $request['customerId'];
        $order->onlineId = $request['onlineId'];
        $order->productId = $request['productId'];
        $order->customerType = $request['customerType'];
        $order->quantity = $request['quantity'];
        $order->size = $request['size'];
        $order->sugarLevel = $request['sugarLevel'];
        $order->cupType = $request['cupType'];
        $order->choosenPrice = $request['choosenPrice'];
        $order->subTotal = $request['subTotal'];
        $order->status = $request['status'];
        $order->save();
        $this->addAddOns($dataAddOns, $order->id);
        event(new pusherEvent($order));
        return response()->json(compact('order'));
    }

    public function addAddOns($dataParams, $id){
        foreach ($dataParams as $value) {
            $addOns = new AddOns();
            $addOns['orderId'] = $id;
            $addOns['addOns'] = $value;
            $addOns->save();
        }
    }

    public function deleteOrder(Request $request){
        $order = Order::find($request->id);
        $order->delete();
        return response()->json(['success' => 'deleted successfully']);
    }

    public function retrieveOrder(Request $request){
        $order = Order::with('orderProduct')->with('sameOrder')->where('customerId', $request->id)->where('status', 'pending')->where('deleted_at', null)->orderBy('id','DESC')->get();
        return response()->json(compact('order'));
    }

    public function getOrder(Request $request){
        $order = Order::with('getCustomer')->with('orderProduct')->with('sameOrder')->where('customerId', $request->id)->where('status', '!=', 'complete')->where('deleted_at', null)->orderBy('id','DESC')->get();
        return response()->json(compact('order'));
    }

    public function retrieveOnlineOrder(Request $request){
        $order = Order::with('getCustomer')->with('orderProduct')->with('sameOrder')->where('status', '!=', 'pending')->where('status', '!=', 'complete')->where('status', '!=', 'cancel')->where('deleted_at', null)->orderBy('id','ASC')->get()->groupBy('customerId');
        return response()->json(compact('order'));
    }

    public function retrieveCustomerPending(Request $request){
        $order = Order::with('getCustomer')->with('orderProduct')->with('sameOrder')->where('status', '=', 'pendingCustomer')->where('deleted_at', null)->orderBy('id','ASC')->get()->groupBy('customerId');
        return response()->json(compact('order'));
    }

    public function retrieveOneOnlineOrder(Request $request){
        $order = Order::with('getCustomer')->with('orderProduct')->with('sameOrder')->where('onlineId', $request->id)->where('status', '!=', 'complete')->where('status', '!=', 'cancel')->where('deleted_at', null)->orderBy('id','DESC')->get()->groupBy('customerId');
        return response()->json(compact('order'));
    }

    public function retrieveCancelled(Request $request){
        $order = Order::with('getCustomer')->with('orderProduct')->with('sameOrder')->where('onlineId', $request->id)->where('status', '=', 'cancel')->where('deleted_at', null)->orderBy('id','DESC')->get()->groupBy('customerId');
        return response()->json(compact('order'));
    }

    public function retrieveAllCancelled(Request $request){
        $order = Order::with('getCustomer')->with('orderProduct')->with('sameOrder')->where('status', '=', 'cancel')->where('deleted_at', null)->orderBy('id','DESC')->get()->groupBy('customerId');
        return response()->json(compact('order'));
    }

    public function retrieveCustomerOrder(Request $request){
        $order = Order::with('orderProduct')->with('sameOrder')->where('onlineId', $request->id)->where('status', 'incart')->where('deleted_at', null)->orderBy('id','DESC')->get();
        return response()->json(compact('order'));
    }
    // public function retrieveCustomersOrdersForEdit(Request $request){
    //     $order = Order::with('orderProduct')->with('sameOrder')->where('id', $request->id)->where('status', 'incart')->where('deleted_at', null)->orderBy('id','DESC')->get();
    //     // dd($order);
    //     return response()->json(compact('order'));
    // }

    public function updateOne(Request $request){
        $ord = Order::firstOrCreate(['id' => $request->id]);
        $ord->status = $request['status'];
        $ord->save();
        event(new pusherEvent($request['status']));
        return response()->json(['success' => 'successfully updated!']);
    }

    public function onlineUpdate(Request $request){
        foreach ($request->data as $value) {
            $ord = Order::firstOrCreate(['id' => $value['id']]);
            $ord->modeOfPayment = $request['modeOfPayment'];
            $ord->ifNotAvailable = $request['ifNotAvailable'];
            $ord->status = $request['status'];
            $ord->save();
        }
        event(new pusherEvent($request['status']));
        return response()->json(['success' => 'successfully updated!']);
    }

    public function updateStatusOrder(Request $request){
        if($request['status'] === 'cancel' ||$request['status'] === 'complete' || $request['status'] === 'Available' || $request['status'] === 'Not Available'){
            $order = Order::where('customerId', $request->id)->where('deleted_at', null)->get();
        }else{
            $order = Order::where('onlineId', $request->id)->where('deleted_at', null)->get();
        }
        foreach ($order as $value) {
            $ord = Order::firstOrCreate(['id' => $value->id]);
            $ord->modeOfPayment = $request['modeOfPayment'];
            if($request['ifNotAvailable']){
                $ord->ifNotAvailable = $request['ifNotAvailable'];
            }
            $ord->status = $request['status'];
            $ord->save();
        }
        
        if($request['status'] === 'cancel'){
            $activityLog = new ActivityLog();
            $activityLog->cashierId = $request['cashierId'];
            $activityLog->activity = 'Cancel Order';
            $activityLog->save();
        }

        event(new pusherEvent($request['status']));
        return response()->json(['success' => 'successfully updated!']);
    }

    public function updateCancelOrder(Request $request){
        foreach ($request['id'] as $value) {
            $ord = Order::firstOrCreate(['id' => $value]);
            $ord->status = $request['status'];
            $ord->save();
        }

        $activityLog = new ActivityLog();
        $activityLog->cashierId = $request['cashierId'];
        $activityLog->activity = 'Cancel Order';
        $activityLog->save();

        event(new pusherEvent($request['status']));
        return response()->json(['success' => 'successfully updated!']);
    }

    public function retrieveWholeOrder(Request $request){
        $order = Order::with('orderProduct')->find($request->id)->get();
        $addOns = AddOns::where('orderId', $request->id)->get(['addOns']);
        return response()->json(compact('order', 'addOns'));
    }

    public function retrieveSalesReportPerCategory(Request $request){
        $totalSalesPerCategory = DB::table('orders')->leftJoin('products', 'orders.productId', '=', 'products.id')
            ->select(DB::raw('products.productCategory as productCategory'),DB::raw('SUM(orders.subTotal) as subTotal'),DB::raw('orders.created_at as date'))
            ->groupBy('productCategory','date')
            ->orderBy('date', 'desc')
            ->get();
            // dd($prods);
        return response()->JSON(compact('totalSalesPerCategory'));
    }

    public function retrieveTopProducts(Request $request){
        $prods = DB::table('store_orders')->leftJoin('products', 'store_orders.productId', '=', 'products.id')
            ->select(DB::raw('products.image as img'),DB::raw('SUM(store_orders.quantity) as quan'),DB::raw('products.productName as pName'))
            ->where('store_orders.deleted_at', null)
            ->where('store_orders.status', 'complete' )
            ->groupBy('img','pName')
            ->orderBy('quan', 'desc')
            ->get();
        return response()->JSON(compact('prods'));
    }

    public function DailyProductSales(Request $request){
        $prods = DB::table('store_orders')->leftJoin('products', 'store_orders.productId', '=', 'products.id')
            ->select(DB::raw('products.productName as ProductName'),DB::raw('SUM(store_orders.quantity) as quan'),DB::raw('extract(DAY from store_orders.created_at) as date'),DB::raw('extract(YEAR from store_orders.created_at) as year'),DB::raw('extract(MONTH from store_orders.created_at) as month'))
            ->whereMonth('store_orders.created_at', '=', $request->month)
            ->whereYear('store_orders.created_at', '=', $request->year)
            ->where('store_orders.deleted_at', null)
            ->where('store_orders.status', 'complete')
            ->groupBy('year','month','date','ProductName')
            // ->orderBy('quan', 'desc')
            ->get();
        return response()->JSON(compact('prods'));
    }

    public function MonthlyProductSales(Request $request){
        $prods = DB::table('store_orders')->leftJoin('products', 'store_orders.productId', '=', 'products.id')
            ->select(DB::raw('products.productName as ProductName'),DB::raw('SUM(store_orders.quantity) as quan'),DB::raw('extract(MONTH from store_orders.created_at) as month'))
            ->whereYear('store_orders.created_at', '=', $request->year)
            ->where('store_orders.deleted_at', null)
            ->where('store_orders.status', 'complete')
            ->groupBy('month','ProductName')
            // ->orderBy('quan', 'desc')
            ->get();
        return response()->JSON(compact('prods'));
    }

    public function QuarterlyProductSales(Request $request){
        $prods = DB::table('store_orders')->leftJoin('products', 'store_orders.productId', '=', 'products.id')
            ->select(DB::raw('products.productName as ProductName'),DB::raw('SUM(store_orders.quantity) as quan'),DB::raw('extract(MONTH from store_orders.created_at) as month'))
            ->whereYear('store_orders.created_at', '=', $request->year)
            ->where('store_orders.deleted_at', null)
            ->where('store_orders.status', 'complete')
            ->groupBy('month','ProductName')
            // ->orderBy('quan', 'desc')
            ->get();
        return response()->JSON(compact('prods'));
    }

    public function SemiProductSales(Request $request){
        $prods = DB::table('store_orders')->leftJoin('products', 'store_orders.productId', '=', 'products.id')
            ->select(DB::raw('products.productName as ProductName'),DB::raw('SUM(store_orders.quantity) as quan'),DB::raw('extract(MONTH from store_orders.created_at) as month'))
            ->whereYear('store_orders.created_at', '=', $request->year)
            ->where('store_orders.deleted_at', null)
            ->where('store_orders.status', 'complete')
            ->groupBy('month','ProductName')
            // ->orderBy('quan', 'desc')
            ->get();
        return response()->JSON(compact('prods'));
    }

    public function AnnualProductSales(Request $request){
        $prods = DB::table('store_orders')->leftJoin('products', 'store_orders.productId', '=', 'products.id')
            ->select(DB::raw('products.productName as ProductName'),DB::raw('SUM(store_orders.quantity) as quan'),DB::raw('extract(YEAR from store_orders.created_at) as year'))
            ->where('store_orders.deleted_at', null)
            ->where('store_orders.status', 'complete')
            ->groupBy('year','ProductName')
            // ->orderBy('quan', 'desc')
            ->get();
        return response()->JSON(compact('prods'));
    }

    public function updateCustomerOrder(Request $request){
        $data = $request->all();
        $product = Order::firstOrCreate(['id' => $request->id]);
        $dataAddOns = $data['addOns'];
        $this->updateAddOns($dataAddOns, $product->id);
        $product->quantity = $data['quantity'];
        $product->size = $data['size'];
        $product->sugarLevel = $data['sugarLevel'];
        $product->cupType = $data['cupType'];
        $product->choosenPrice = $data['choosenPrice'];
        $product->subTotal = $data['subTotal'];
        $product->save();
    }

    public function updateAddOns($dataParams, $id){
        $Ons = AddOns::where('orderId', $id);
        $Ons->delete();
        foreach ($dataParams as $value) {
            $addOns = new AddOns();
            $addOns['orderId'] = $id;
            $addOns['addOns'] = $value;
            $addOns->save();
        }
    }

    public function deleteManyOrder(Request $request){
        foreach ($request->id as $val) {
            $order = Order::find($val);
            $order->delete();
        }
        return response()->json(['success' => 'successfully deleted!']);
    }
}
