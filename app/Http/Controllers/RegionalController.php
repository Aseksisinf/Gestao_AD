<?php

namespace App\Http\Controllers;

use App\Models\Cadastro\Regional;
use App\Models\Cadastro\Congregacao;
use App\Models\Cadastro\Endereco;

use Illuminate\Http\Request;

class RegionalController extends Controller
{
    public function index(){
     
        return Regional::paginate(20);
    }

    public function Congregacoes(Request $request){

        return Congregacao::where('regional_id', 'LIKE', '%' . $request->regional . '%')->get();

    }
   

    public function show($id)
    {
        $regional =  Regional::find($id);
                
        if(isset($regional)){
            
            return json_encode($regional);
       }
         
       return response('Regional não encontrada.',404);
          
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
         
        $regional = new Regional();

        $regional->situacao = 'A';

        $regional->regional = $request->regional;
        $regional->pastor_regional = $request->pastor_regional;

        $regional->endereco_id = $results->id;
        $regional->endereco_nro = $request->endereco_nro;
        $regional->ponto_referencia = $request->ponto_referencia;

        $regional->save();  
    
        return $regional;
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
         
        $regional = Regional::find($id);

        $regional->situacao = 'A';

        $regional->regional = $request->regional;
        $regional->pastor_regional = $request->pastor_regional;

        $regional->endereco_id = $results->id;
        $regional->endereco_nro = $request->endereco_nro;
        $regional->ponto_referencia = $request->ponto_referencia;

        $regional->save();  
    
        return json_encode($regional);

    }

    public function buscar(Request $request){


        return Regional::where('regional', 'LIKE', '%' . $request->regional . '%')->paginate(20);
  
        
      }
  
}
