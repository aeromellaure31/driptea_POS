<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Ingredients extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'ingredients';
    protected $fillable = [
        // 'adminId', 'type', 'ingredientsName', 'lowdoseQuantity', 'highdoseQuantity', 'overdoseQuantity', 'onRockQuantity', 'convertionQuantity', 'usedQuantity'
        'adminId', 'type', 'ingredientsName', 'onRockQuantity', 'convertionQuantity'
    ];
}
