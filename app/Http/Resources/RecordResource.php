<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Request;
class RecordResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'business_name' => $this->business_name,
            'description' => $this->description,
            'specialties' => $this->specialties,
            
            // Updated to reflect the operating_hours object
            'operating_hours' => [
                'from' => json_decode($this->operating_hours, true)['from'] ?? null,
                'to' => json_decode($this->operating_hours, true)['to'] ?? null,
            ],

            'open' => [
                'from' => json_decode($this->open, true)['from'] ?? null,
                'to' => json_decode($this->open, true)['to'] ?? null,
            ],
            
            'rating' => $this->rating,
            'categories' => $this->categories,
            'phone_numbers' => $this->phone_numbers,
            'cover_image' => $this->cover_image,
            'images' => $this->images,
            'town' => $this->town,
            'address' => $this->address,
            
            // Updated to reflect the coordinates object
            'coordinates' => [
                'latitude' => json_decode($this->coordinates, true)['latitude'] ?? null,
                'longitude' => json_decode($this->coordinates, true)['longitude'] ?? null,
            ],
            
            'date_applied' => $this->date_applied,
            'date_approved' => $this->date_approved,
            'status' => $this->status,
        ];
    }
}
