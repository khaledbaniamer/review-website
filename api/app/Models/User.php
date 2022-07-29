<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_name',
        'user_email',
        'user_password',
        'user_image',
        'user_role',
        'user_status'
    ];

    protected $hidden = [ // Hidden Attribute For Arrays
        'user_password'
    ];
}
