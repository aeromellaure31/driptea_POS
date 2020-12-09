<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActivityLog extends Model
{
    use HasFactory;

    protected $table = 'activitylog';
    protected $fillable = [
        'cashierId', 'activity', 'amount'
    ];

    public function getCashier(){
        return $this->hasMany('App\Models\User','id','cashierId');
    }

}
