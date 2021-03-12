<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Admin;

class AdminController extends Controller
{
    
   public function __construct(){
       
       $this->middleware('auth:admin');
   }
    
    public function index(){
     
        return view('admin/inicio/home');
    
    }

    public function viewAdmins(){
        return view('administrador/paginas/administradores/administradores');
    }

    public function admins(){

        return Admin::paginate(20);

    }
    
    public function paginaPessoas(){
        
        return view('Admin/Paginas/Pessoas/principal');
        
    }

    public function paginaFamilias(){
        
        return view('Admin/Paginas/Familias/familias');
        
    }

    public function paginaRegionais(){
        
        return view('Admin/Paginas/Regionais/regionais');
        
    }

    public function paginaCongregacoes(){
        
        return view('Admin/Paginas/Congregacoes/congregacoes');
        
    }


    public function paginaUsuarios(){
        
        return view('Admin/Paginas/Usuarios/usuarios');
        
    }

    public function paginaAdministradores(){
        
        return view('Admin/Paginas/Administradores/administradores');
        
    }
    
  public function paginaRelatorios(){
        
        return view('Admin/Paginas/Relatorios/Inicio/principal');
        
    }
  
  public function paginaAniversariantes(){
  
    return view('Admin/Paginas/Relatorios/Aniversariantes/aniversariantes');
  }
            
  public function logout(Request $request) {
      
        return redirect('admin/login')->with(Auth::logout());

    }
  
  
}








