<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AddCategory extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'add_categories';
    protected $fillable = [
        'image', 'productCategory', 'remove'
    ];
}