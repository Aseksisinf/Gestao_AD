<?php

namespace App\Http\Controllers;

use App\Models\Cadastro\Congregacao;
use App\Models\Cadastro\Endereco;
use App\Models\Cadastro\Regional;
use Illuminate\Http\Request;

class CongregacaoController extends Controller
{
    public function index(){
     
        return Congregacao::paginate(20);
    }
    
    public function regionalCongregacoes(Request $request){

        return $request->regional;
    }

    public function store(Request $request){

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
         
        $congregacao = new Congregacao();

        $congregacao->situacao = 'A';

        $congregacao->congregação = $request->congregacao;
        $congregacao->regional_id = $request->regional;
        $congregacao->pastor_local = $request->pastor_local;

        $congregacao->endereco_id = $results->id;
        $congregacao->endereco_nro = $request->endereco_nro;
        $congregacao->ponto_referencia = $request->ponto_referencia;

        $congregacao->save();  
    
        return $congregacao;
    }

    public function update(Request $request,$id){
         
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
         
        $congregacao = Congregacao::find($id);

        $congregacao->situacao = 'A';

        $congregacao->congregação = $request->congregacao;
        $congregacao->regional_id = $request->regional;
        $congregacao->pastor_local = $request->pastor_local;

        $congregacao->endereco_id = $results->id;
        $congregacao->endereco_nro = $request->endereco_nro;
        $congregacao->ponto_referencia = $request->ponto_referencia;

        $congregacao->save();  
    
        return json_encode($congregacao);

    }


    public function show($id)
    {
        $congregacao =  Congregacao::find($id);
                
        if(isset($congregacao)){
            
            return json_encode($congregacao);
       }
         
       return response('Congregacao não encontrado.',404);
          
    }

    public function buscar(Request $request){


        return Congregacao::where('congregação', 'LIKE', '%' . $request->congregacao . '%')->paginate(20);
  
        
      }
}
