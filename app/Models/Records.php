<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Records extends Model
{
    use HasFactory;

    protected $fillable = [
        'business_name', 
        'description', 
        'specialties', 
        'category', 
        'open',
        'operating_hours', // JSON field for operating hours
        'coordinates',
        'rating', 
        'phone_numbers', 
        'cover_image', 
        'image_name', 
        'town', 
        'address', 
        'date_applied', 
        'date_approved', 
        'status'
    ];

    public function setOperatingHoursAttribute($value)
    {
        $this->attributes['operating_hours'] = json_encode($value);
    }

    public function setOpenDaysAttribute($value)
    {
        $this->attributes['open'] = json_encode($value);
    }

    public function getOpenDaysAttribute($value)
    {
        return json_decode($value, true);
    }

    public function getOperatingHoursAttribute($value)
    {
        return json_decode($value, true);
    }

    public function setCoordinatesAttribute($value)
    {
        $this->attributes['coordinates'] = json_encode($value);
    }

    public function getCoordinatesAttribute($value)
    {
        return json_decode($value, true);
    }
}

