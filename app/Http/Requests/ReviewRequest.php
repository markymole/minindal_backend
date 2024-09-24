<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ReviewRequest extends FormRequest
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
            'business_id' => ['required', 'string'],
            'description' => ['nullable', 'string'],
            'rating' => ['required', 'numeric'],
            'author' => ['nullable', 'string'],
            'images' => ['nullable', 'string'],
            'imagedata' => ['nullable', 'image', 'mimes:jpeg,jpg,png,svg,gif'],
        ];
    }
}
