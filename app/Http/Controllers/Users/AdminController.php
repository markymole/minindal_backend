<?php

namespace App\Http\Controllers\Users;

use App\Models\User;
use App\http\Resources\UserCollection;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    public function index(Request $request)
    {
        $fetchAll = $request->query('all') === 'true';
        $perPage = $request->input('per_page', 15);

        $query = User::where('role', '!=', 'User');

        if ($fetchAll) {
            $admins = $query->get();
            return new UserCollection($admins);
        } else {
            $admins = $query->paginate($perPage);
            return new UserCollection($admins);
        }
    }

    public function show($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        return response()->json($user, 200);
    }

    public function store(Request $request)
    {
        $fields = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'role' => ['required', 'string', 'max:255'],
            'town' => ['required', 'string', 'max:255'],
        ]);

        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password']),
            'remember_token' => Str::random(60),
            'role' => $fields['role'],
            'town' => $fields['town']
        ]);

        $user->markEmailAsVerified();

        return response()->json(['message' => 'Admin user created successfully', 'user' => $user], 200);
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $fields = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email,' . $user->id],
            'password' => ['sometimes', 'confirmed', Rules\Password::defaults()],
            'role' => ['required', 'string', 'max:255'],
            'town' => ['required', 'string', 'max:255'],
        ]);

        $user->name = $fields['name'];
        $user->email = $fields['email'];
        if (isset($fields['password'])) {
            $user->password = bcrypt($fields['password']);
        }
        $user->role = $fields['role'];
        $user->town = $fields['town'];
        $user->save();

        return response()->json(['message' => 'Admin user updated successfully', 'user' => $user], 200);
    }

    public function destroy($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $user->delete();

        return response()->json(['message' => 'User deleted successfully'], 200);
    }
    
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);
    
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
    
        $credentials = $request->only('email', 'password');
    
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
    
            if ($user->isAdmin()) {
                return response()->json(['message' => 'Login successful', 'role' => 'Admin']);
            } else {
                Auth::logout();
                return response()->json(['message' => 'Unauthorized access', 'role' => 'User'], 403);
            }
        }
    
        return response()->json(['message' => 'Invalid credentials'], 401);
    }

}
