<?php

namespace App\Http\Controllers;

use App\Models\Cadastro\Funcao;

use Illuminate\Http\Request;

class FuncaoController extends Controller
{
    public function index(){
     
        $funcoes = Funcao::paginate(20);
        
        return $funcoes;
     }

     public function show($id)
    {
        $funcao =  Funcao::find($id);
                
        if(isset($funcao)){
            
            return json_encode($funcao);
       }
         
       return response('Funcao não encontrado.',404);
          
    }
    
   
}
