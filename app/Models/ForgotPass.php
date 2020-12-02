<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ForgotPass extends Model
{
    use HasFactory;
    protected $table = 'forgot_pass';
    protected $fillable = [
        'email', 'code'
    ];
}
