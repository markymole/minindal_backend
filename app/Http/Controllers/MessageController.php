<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMessage;

class MessageController extends Controller
{
    public function send(Request $request)
    {
        // Validate incoming form data
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'subject' => 'required|string|max:255',
            'email' => 'nullable|email',
            'message' => 'required|string',
        ]);

        // Send the email
        Mail::to('ckskapampangancuisine@gmail.com')->send(new ContactMessage($validated));

        return response()->json(['message' => 'Message sent successfully'], 200);
    }
}
