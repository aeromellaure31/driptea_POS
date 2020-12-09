<?php

namespace App\Http\Controllers;
use App\Http\Controllers\MailController;
use App\Models\User;
use App\Models\ActivityLog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\DB;
use App\Events\pusherEvent;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Mail;
use App\Models\ForgotPass;

class UserController extends Controller
{
    public function reset(Request $request) {
        $pass = Hash::make($request->password);
        $user = User::where('email', $request->email)->get();
        $user[0]->password = $pass;
        $user[0]->save();
        return response()->json(['data' => 'true']);
    }

    public function updateCode(Request $request){
        $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $pin = mt_rand(1000000, 9999999)
            . mt_rand(1000000, 9999999)
            . $characters[rand(0, strlen($characters) - 1)];
        $code = str_shuffle($pin);
        $forgotPass = ForgotPass::firstOrCreate(['id' => $request->id]);
        $forgotPass->code = $code;
        $forgotPass->save();
        $forgotPass['status'] = 'success';
        $account = User::where('email', $forgotPass['email'])->get();
        $emailTo = $forgotPass['email'];
        $message = "Hi, ".$account[0]->firstname. " ".$account[0]->lastname.". Your code is ".$code;
        $subject = 'Driptea Verification Code';
        Mail::to($emailTo)->send(new MailController($message, $emailTo, $subject));
        return response()->json(compact('forgotPass'));
    }

    public function sendCode(Request $request){
        $data = null;
        $account = User::where('email', $request->email)->get();
        if(count($account) != 0) {
            $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            $pin = mt_rand(1000000, 9999999)
                . mt_rand(1000000, 9999999)
                . $characters[rand(0, strlen($characters) - 1)];
            $code = str_shuffle($pin);
            $emailTo = $request->email;
            $message = "Hi, ".$account[0]->firstname. " ".$account[0]->lastname.". Your code is ".$code;
            $subject = 'Driptea Verification Code';

            $forgotPass = new ForgotPass;
            $forgotPass->email = $request->email;
            $forgotPass->code = $code;
            $forgotPass->save();
            
            $data['status'] =  "true";
            $data['id'] = $forgotPass->id;
            $data['email'] = $request->email;
            $data['code'] = $code;
            Mail::to($emailTo)
                ->send(new MailController($message, $emailTo, $subject));
            return response()->json(compact('data'));
        } else {
            return response()->json(['data' => 'false']);
        }
    }

    public function checkCode(Request $request) {
        $item = ForgotPass::where('id', $request->id)->get();
        if($item[0]->code === $request->code) {
            $item['status'] = 'true';
            return response()->json(compact('item'));
        } else {
            $item['status'] = 'false';
            return response()->json(compact('item'));
        }
    }

    public function updateImage(Request $request){
        $user = User::firstOrCreate(['id' => $request->id]);
        // $imageName = time().'.'.$request->image->getClientOriginalExtension();
        // $request->image->move(public_path('images'), $imageName);
        // $user->image = 'images/'.$imageName;
        $user->image = $request->image;
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
        // $name = $request->only('uname');
        $userdata = DB::table('users')->select('firstname as fname', 'lastname as lname', 'address as address', 
        'contactNumber as CN', 'email as email', 'name as username', 'password as pwd', 'image as img')
            ->where('id', $request->uname)
            ->get();
        return response()->json(compact('userdata'));
    }
    public function getUserName(Request $request){
        // $name = $request->only('uname');
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
        }
        $userdata = DB::table('users')->where('id', $request->ID)->update([$request->col => $request->data]);
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
