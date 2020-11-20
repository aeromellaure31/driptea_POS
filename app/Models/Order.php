<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = [
        'customerId', 'productId', 'onlineId', 'customerType', 'quantity', 'size', 'cupType', 'sugarLevel', 'subTotal', 'choosenPrice', 'status', 'modeOfPayment', 'ifNotAvailable'
    ];

    public function orderProduct(){
        return $this->hasMany('App\Models\Product','id','productId');
    }

    public function sameOrder(){
        return $this->hasMany('App\Models\AddOns','orderId','id');
    }

    public function getCashier(){
        return $this->hasMany('App\Models\User','id','cashierId');
    }

    public function getCustomer(){
        return $this->hasMany('App\Models\CustomerDetails','id','customerId');
    }
}
