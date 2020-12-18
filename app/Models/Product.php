<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = [
        'productName', 'ingredients', 'description', 'lowPrice', 'highPrice', 'overPrice', 'onlinelowPrice', 'onlinehighPrice', 'onlineoverPrice', 'image', 'productCategory', 'status', 'remove'
    ];
}
