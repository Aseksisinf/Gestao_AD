<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class AdminLoginController extends Controller
{
    public function __construct(){
      
        $this->middleware('guest:admin');
    }

    public function username()
    {
        return 'email';
    }
    
    public function login(Request $request){
        
        $this->validate($request, [
             'email' => 'required|string',
            'password' => 'required|string',
        ]);
        
        $credentials = [
            
            'email' => $request->email,
            'password' => $request->password
        ];
        
        $authOK = Auth::guard('admin')->attempt($credentials,$request->remember);
        
        if($authOK){
            return redirect('/admin');
        }else{

            throw ValidationException::withMessages([
                $this->username() => [trans('auth.failed')],
            ]);
            return redirect('/admin/login')->withInputs($request->only('email','remember'));
        }
        
    }
    
    public function index(){
        
        return view('auth/login_admin');
    }
    
}




