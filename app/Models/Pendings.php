<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pendings extends Model
{
    use HasFactory;
    
    protected $fillable = ['business_name', 'description', 'type', 'category', 'specialties', 'price_range',  'operating_from', 'operating_to', 'open_from', 'open_to', 'rating', 'service_options', 'phone_number_one', 'phone_number_two', 'email', 'socials', 'cover_image', 'image_name', 'town', 'address', 'latitude', 'longitude', 'date_applied'];
}
    