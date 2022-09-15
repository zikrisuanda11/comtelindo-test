<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tank extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';

    protected $fillable = [
        'status',
        'volume',
        'temperature',
        'kapasitas_maksimum'
    ];
}