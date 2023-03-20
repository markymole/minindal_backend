<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReviewResource extends JsonResource
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
            'comments' => $this->comments,
            'star_rating' => $this->star_rating,
            'author' => $this->author,
            'review_image' => $this->review_image,
            'image_name' => $this->image_name,
            'created_at' => $this->created_at

        ];
    }
}
