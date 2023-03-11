<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ArchiveResource extends JsonResource
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
            'type' => $this->type,
            'price_range' => $this->price_range,
            'operating_from' => $this->operating_from,
            'operating_to' => $this->operating_to,
            'open_from' => $this->open_from,
            'open_to' => $this->open_to,
            'rating' => $this->rating,
            'service_options' => $this->service_options,
            'category' => $this->category,
            'specialties' => $this->specialties,
            'phone_number_one' => $this->phone_number_one,
            'phone_number_two' => $this->phone_number_two,
            'email' => $this->email,
            'socials' => $this->socials,
            'town' => $this->town,
            'address' => $this->address,
            'latitude' => $this->latitude,
            'longitude' => $this->longitude,
            'cover_image' => $this->cover_image,
            'image_name' => $this->image_name,
            'date_applied' => $this->date_applied,
            'date_approved' => $this->date_approved,
            'date_archived' => $this->date_archived
        ];
    }
}
