<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Reviews extends Model
{
    use HasFactory;

    protected $fillable = ['business_id', 'comment', 'rating', 'author_id', 'images', 'created_at'];

    public function user() {
        return $this->belongsTo(User::class, 'author_id');
    }

    public function business() {
        return $this->belongsTo(Business::class, 'business_id');
    }
}
