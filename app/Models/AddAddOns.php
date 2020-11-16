<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AddAddOns extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'add_add_ons';
    protected $fillable = [
        'addons_name', 'addons_price', 'status', 'onlineAddOnsPrice', 'remove'
    ];
}
