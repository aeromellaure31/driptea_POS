<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class IngredientType extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'ingredient_type';
    protected $fillable = ['ingredientType'];
}
