<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;

use  App\Notifications\NotificarNovoUsuario;

use App\User;
use App\Admin;


use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function index(){
      
      $usuarios = User::paginate(20);

      return $usuarios;

    }

    public function buscar(Request $request){

      return User::where('name', 'LIKE', '%' . $request->nome . '%')->paginate(20);
      
    }

    public function store(Request $request){

        $usuario = new User();

        $usuario->situacao = 'A';

        $usuario->name = $request->nome;
        $usuario->email = $request->email;

        $usuario->congregacao_id = $request->congregacao;
        $usuario->password = Hash::make($request->senha);
      
    //  	$usuario->notify(new NotificarNovoUsuario($usuario->name,$request->senha));

        $usuario->save();  
    
        return $usuario;
    }

    public function show($id)
    {
        $user =  User::find($id);
                
        if(isset($user)){
            
            return json_encode($user);
       }
         
       return response('Usuario não encontrado.',404);
          
    }
}



