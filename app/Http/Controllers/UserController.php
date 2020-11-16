<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\DB;
use App\Events\pusherEvent;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function updateImage(Request $request){
        // if($request->hasFile('profile_image')) {
            $filenamewithextension = $request->image->getClientOriginalName();
            $filename = pathinfo($filenamewithextension, PATHINFO_FILENAME);
            $extension = $request->image->getClientOriginalExtension();
            $filenametostore = $filename.'_'.time().'.'.$extension;
            dd($filenametostore);
            Storage::disk('s3')->put($filenametostore, fopen($request->image, 'r+'), 'public');
        // }

        $user = User::firstOrCreate(['id' => $request->id]);
        $imageName = time().'.'.$request->image->getClientOriginalExtension();
        $request->image->move(public_path('images'), $imageName);
        $user->image = 'images/'.$imageName;
        $user->save();
        event(new pusherEvent($user));
        return response()->json(compact('user')); 
    }

    public function authenticate(Request $request)
    {
        $credentials = $request->only('name', 'password');
        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        return response()->json(compact('token'));
    }

    public function userdata(Request $request){
        $name = $request->only('uname');
        $userdata = DB::table('users')->select('firstname as fname', 'lastname as lname', 'address as address', 
        'contactNumber as CN', 'email as email', 'name as username', 'password as pwd', 'image as img')
            ->where('id', $request->uname)
            ->get();
        return response()->json(compact('userdata'));
    }
    public function getUserName(Request $request){
        $name = $request->only('uname');
        $userdata = DB::table('users')->select('name as fullname')
            ->where('id', $request->uname)
            ->get();
        return response()->json(compact('userdata'));
    }
    public function SaveNEWdata(Request $request){
        if($request->col === 'name'){
            $input['name'] = $request->data;
            $rules = array('name' => 'unique:users,name');
            $validate = Validator::make($input, $rules);
            if ($validate->fails()) {
                return response()->json($validate->errors()->toJson(), 300);
            }
        }else if($request->col === 'email'){
            $inp['email'] = $request->data;
            $rule = array('email' => 'unique:users,email');
            $validate = Validator::make($inp, $rule);
            if ($validate->fails()) {
                return response()->json($validate->errors()->toJson(), 301);
            }
        }else {
            $userdata = DB::table('users')->where('id', $request->ID)->update([$request->col => $request->data]);
        }
        // return $this->userdata($request);
        // $this.userdata();
    }

    public function retrieve(Request $request){
        $user = User::where('deleted_at', null)->get();
        return response()->json(compact('user'));
    }

    public function register(Request $request)
    {
        //validate if email already exist
        $input['name'] = $request->get('name');
        $rules = array('name' => 'unique:users,name');
        $validate = Validator::make($input, $rules);
        if ($validate->fails()) {
            return response()->json($validate->errors()->toJson(), 300);
        }
        $inp['email'] = $request->get('email');
        $rule = array('email' => 'unique:users,email');
        $validate = Validator::make($inp, $rule);
        if ($validate->fails()) {
            return response()->json($validate->errors()->toJson(), 301);
        }

        $validator = Validator::make($request->all(), [
            'account_type' => 'required|string|max:255',
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'contactNumber' => 'required|string|max:255',
            'name' => 'required|string|max:255|unique:users',
            'email' => 'required|string|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }
        $user = User::create([
            'account_type' => $request->get('account_type'),
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'firstname' => $request->get('firstname'),
            'lastname' => $request->get('lastname'),
            'address' => $request->get('address'),
            'contactNumber' => $request->get('contactNumber'),
            'password' => Hash::make($request->get('password')),
        ]);
        if($request['adminRegister']){
            return response()->json(compact('user'),201);
        }else{
            $token = JWTAuth::fromUser($user);
            return response()->json(compact('user','token'),201);
        }
    }

    public function getAuthenticatedUser()
    {
        try {
            if (! $user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['token_expired'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['token_invalid'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['token_absent'], $e->getStatusCode());
        }
        return response()->json(compact('user'));
    }

    public function tokenRefresh(){
        $current_token = JWTAuth::getToken();
        $token = JWTAuth::refresh($current_token);
        return response()->json(compact('token'));
    }

    public function deauthenticate(){
        JWTAuth::invalidate(JWTAuth::getToken());
        return response()->json(['token' => NULL]);
    }
    
}
