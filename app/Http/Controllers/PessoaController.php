<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

use App\Models\Cadastro\Endereco;
use App\Models\Cadastro\Familia;
use App\Models\Cadastro\Pessoa;
use App\Models\Cadastro\Funcao;

use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;

use Auth;

class PessoaController extends Controller
{
   public function index(Request $request){
     
    return Pessoa::where('nome', 'LIKE', '%' . $request->nome . '%')->paginate(20);


     }

    public function buscarPessoasFamilia(Request $request){


      return Pessoa::where('nome', 'LIKE', '%' . $request->nome . '%')->paginate(20);

      
    }
  
  public function all(Request $request){


      return Pessoa::all();

      
    }

    public function store(Request $request)
    {
        
       $results = Pessoa::where('codigo_tc', $request->codigoTc)->get()->first();
      	
        if(isset($results) && $results->codigo_tc != null){

           return 'Codigo já existe';
          
          }
      
      $results = Endereco::where('cep', $request->input('cep'))->get()->first();
         
      
        if(!isset($results)){
            
            $results = new Endereco();
                $results->situacao = 'A';
                $results->cep = $request->cep;
                $results->rua = $request->rua;
                $results->bairro = $request->bairro;
                $results->cidade = $request->cidade;
                $results->estado = $request->uf;
                $results->save();
        }

        $pessoa = new Pessoa();
        
        $pessoa->endereco_id = $results->id;
        
        $pessoa->nome = $request->input('nome');
        $pessoa->pai = $request->input('pai');
        $pessoa->mae = $request->input('mae');
        $pessoa->situacao = 'A';
        $pessoa->codigo_tc = $request->codigoTc;
        
        $pessoa->data_nasc = $request->input('data_nasc');
        $pessoa->sexo = $request->input('sexo');
        $pessoa->estado_civil = $request->input('estado_civil');
        $pessoa->email = $request->input("email");   
        $pessoa->celular = $request->input('celular');
        $pessoa->telefone = $request->input('telefone');
        
        $pessoa->endereco_nro = $request->input('endereco_nro');
        $pessoa->endereco_complemento = $request->input('endereco_complemento');
        
      $pessoa->situacao_membro = $request->situacao_membro;
        $pessoa->congregacao_id = $request->congregacao;
        $pessoa->funcao_id = $request->relacao_igreja;
        $pessoa->regional_id = $request->regional;
    
        $pessoa->save();
        
        return $pessoa;
    }
     
  
  
    public function show($id){
  
      $pessoa =  Pessoa::find($id);
                  
      if(isset($pessoa)){
        
        return json_encode($pessoa);
      
      }
           
      return response('Pessoa não encontradA.',404);
            
    }
      
    public function update(Request $request, $id){
  
      
      $pessoa = Pessoa::find($id);
        
      
        $results = Pessoa::where('codigo_tc', $request->codigoTc)->get()->first();
      	
      if(isset($results) && $pessoa->codigo_tc != $request->codigoTc){
  
         return 'Codigo já existe';
        }
      
         
      if(isset($pessoa)){
          
        $results = Endereco::where('cep', $request->input('cep'))->get()->first();
            
        if(!isset($results)){
  
          $results = new Endereco();
          $results->situacao = 'A';
          $results->cep = $request->cep;
          $results->rua = $request->rua;
          $results->bairro = $request->bairro;
          $results->cidade = $request->cidade;
          $results->estado = $request->uf;
          $results->save();
        }
  
        $pessoa->endereco_id = $results->id;
  
        $pessoa->situacao='A';
  
        
      	$pessoa->situacao_membro = $request->situacao_membro;
        $pessoa->nome = $request->input('nome');
        $pessoa->data_nasc = $request->input('data_nasc');
        $pessoa->sexo = $request->input('sexo');
        $pessoa->estado_civil = $request->input('estado_civil');
        $pessoa->email = $request->input("email");
        $pessoa->celular = $request->input('celular');
        $pessoa->telefone = $request->input('telefone');
              
        $pessoa->endereco_nro = $request->input('endereco_nro');
        $pessoa->endereco_complemento = $request->input('endereco_complemento');
  
        if($request->codigoTc!=null||$request->situacao=='Não Membro'){
  
          $pessoa->codigo_tc = $request->codigoTc;
           $pessoa->regional_id = $request->regional;
           $pessoa->congregacao_id = $request->congregacao;
           $pessoa->funcao_id = $request->relacao_igreja;
        }
       
              
        $pessoa->save();
          
        return json_encode($pessoa);
              
      }
    }
    
    public function buscar(Request $request){


      return Pessoa::where('nome', 'LIKE', '%' . $request->nome . '%')->paginate();

      
    }
  
    public function excluiFamilia(Request $request){
		
      $pessoa = Pessoa::find($request->id);
      
	  $pessoa->familia_id = null;
      
      $pessoa->save();
      
      return $request;
      
    }
  
  public function aniversariantes_mes(Request $request){
    
    $teste = Pessoa::where('id', 'LIKE', '%' . '3' . '%')->get()->first();
    
    
    $data = explode("/", $teste->data_nasc);
    
    
    
      return $data;

   
    }

}











