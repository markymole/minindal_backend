<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreRecordRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'business_name' => ['required', 'string', Rule::unique('records')->ignore($this->record)],
            'description' => ['required', 'string'],
            'specialties' => ['required', 'string'], // Assuming specialties is a JSON string
            
            // Updated for operating_hours
            // 'operating_hours' => ['required', 'array'],
            'operating_hours.from' => ['required'],
            'operating_hours.to' => ['required'],

            // Updated for operating_hours
            // 'open' => ['required', 'array'],
            'open.from' => ['required'],
            'open.to' => ['required'],
        
            'category' => ['nullable', 'string'],
            'rating' => ['nullable', 'numeric'],
            'phone_numbers' => ['required', 'string'],
            'town' => ['required', 'string'],
            'address' => ['required', 'string'],
            
            // Updated for coordinates
            // 'coordinates' => ['required', 'array'],
            'coordinates.latitude' => ['required'],
            'coordinates.longitude' => ['required'],
            
            'cover_image' => ['nullable'],
            'image_name' => ['nullable'],
            'imagedata' => ['nullable', 'image', 'mimes:jpeg,jpg,png,svg,gif'],
            'date_applied' => ['nullable', 'date'],
            'date_approved' => ['nullable', 'date'],
            'status' => ['nullable', 'string']
        ];
    }
    
}
