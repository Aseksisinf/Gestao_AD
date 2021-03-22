<?php

namespace App\Http\Controllers;

use App\Models\Cadastro\Endereco;

use Illuminate\Http\Request;

class EnderecoController extends Controller
{
    public function index(){
     
        $enderecos = Endereco::all();
        
        return $enderecos->toJson();
     }
    
    public function show($id)
    {
        $endereco =  Endereco::find($id);
                
        if(isset($endereco)){
            
            return json_encode($endereco);
       }
         
       return response('Endereco não encontrado.',404);
          
    }
}
