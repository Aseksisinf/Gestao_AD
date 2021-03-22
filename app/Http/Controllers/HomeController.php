<?php

namespace App\Http\Controllers;

use App\Models\Cadastro\Pessoa;
use App\Models\Cadastro\Regional;
use App\Models\Cadastro\Congregacao;
use App\Models\Cadastro\Familia;
use App\Models\Users\Users;

use App\User;

use Illuminate\Http\Request;
use phpDocumentor\Reflection\DocBlock\Tags\Uses;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        
        return view('user/inicio/home');
    }

    public function paginaPessoas(){
        
        return view('user/pessoas/principal');
        
    }


    public function paginaRegionais(){
        
        return view('user/Regionais/regionais');
        
    }

    public function paginaCongregacoes(){
        
        return view('user/Congregacoes/congregacoes');
        
    }

    public function paginaFamilias(){
        
        return view('user/Familias/familias');
        
    }

    public function gestaoInfo(){

     $infoGestao = array();
        

     $infoGestao[0] =  Pessoa::count();
     $infoGestao[1] =  Familia::count();
     $infoGestao[2] =  Users::count();
     $infoGestao[3] =  Regional::count();
     $infoGestao[4] =  Congregacao::count();

      return $infoGestao;
  
      }
}
