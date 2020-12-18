<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Calculations extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'calculations';
    protected $fillable = [
        'adminId', 'packOfPearl', 'canOfFructose', 'bottleSyrup', 'packOfTea', 'canOfWintermelon', 'bottleCreamMilk', 'packOfPowder'
    ];
}
