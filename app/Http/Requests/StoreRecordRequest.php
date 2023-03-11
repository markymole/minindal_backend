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
            'type' => ['required', 'string'],
            'operating_from' => ['required', 'string'],
            'operating_to' => ['required', 'string'],
            'open_from' => ['required', 'string'],
            'open_to' => ['required', 'string'],
            'price_range' => ['required', 'string'],
            'service_options' => ['required', 'string'],
            'category' => ['required', 'string'],
            'specialties' => ['required', 'string'],
            'rating' => ['nullable', 'numeric'],
            'phone_number_one' => ['required', 'string'],
            'phone_number_two' => ['nullable', 'string'],
            'email' => ['nullable', 'email'],
            'socials' => ['nullable', 'string'],
            'town' => ['required', 'string'],
            'address' => ['required', 'string'],
            'latitude' => ['required', 'numeric'],
            'longitude' => ['required', 'numeric'],
            'cover_image' => ['nullable'],
            'image_name' => ['nullable'],
            'imagedata' => ['nullable', 'image', 'mimes:jpeg,jpg,png,svg,gif'],
            'date_applied' => ['nullable', 'date'],
            'date_approved' => ['nullable', 'date']
        ];
    }
    
}
