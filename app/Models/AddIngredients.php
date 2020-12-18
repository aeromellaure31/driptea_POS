<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AddIngredients extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'add_ingredients';
    protected $fillable = [
        'ingredients', 'quantity', 'usedQuantity', 'remainingQuantity'

    ];
}
