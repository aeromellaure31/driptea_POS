<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CupType extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'cup_type';
    protected $fillable = [
        'cupTypeName', 'cupTypePrice', 'inputCupOnlinePrice', 'status', 'remove'
    ];
}
