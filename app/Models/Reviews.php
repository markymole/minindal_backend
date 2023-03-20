<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reviews extends Model
{
    use HasFactory;

    protected $fillable = ['business_name', 'comments', 'star_rating', 'author', 'review_image', 'image_name', 'created_at'];
}
