<?php

namespace App\Http\Controllers;

use App\Models\Cadastro\Familia;
use App\Models\Cadastro\Casais;
use App\Models\Cadastro\Pessoa;

use Illuminate\Http\Request;

class FamiliaController extends Controller
{
    public function index(){
     
        return Familia::paginate(20);
     }
    
    public function show($id)
    {
        $familias =  Familia::find($id);
                
        if(isset($familias)){
            
            return json_encode($familias);
       }
         
       return response('Familia não encontrado.',404);
          
    }

    public function carregaFamilias(){

        return Familia::paginate(20);

    }

    public function update(Request $request, $id){

        $familia = Familia::find($id);
        
        $familia->situacao_relacionamento = $request->estado_relacionamento;
      
      if($request->id_parente!=NULL){
        
      	$familiares = explode(",", $request->id_parente);

            for ($i=0; $i < count($familiares); $i++) { 
                
                $pess = Pessoa::find($familiares[$i]);

                $pess->familia_id = $familia->id;
    
                $pess->save();
    

            };
      };
      
        if($request->estado_relacionamento=='Casados'){
				
          		$casal = Casais::where('id_esposo', $request->input('id_pai'))->get()->first();
          		
          		      
        if(!isset($casal)){
          
                $casal = new Casais();
                  
                }

                $casal->situacao = 'A';
    
                $casal->Esposo = $request->pai;
          		$casal->id_esposo = $request->id_pai;
                $casal->Esposa = $request->mae;
          	$casal->id_esposa = $request->id_mae;
    
                $casal->data_casamento = $request->data_casamento;
          
           $pess = Pessoa::find($request->id_pai);

            $pess->conjuge_id = $familia->id_mae;

            $pess->save();
          
          $pess = Pessoa::find($request->id_mae);

            $pess->conjuge_id = $familia->id_pai;

            $pess->save();
    
                $casal->save();
                
            }
      
      	 if($request->estado_relacionamento=='Divorciados'){
           
           $casal = Casais::where('id_esposo', $request->input('id_pai'))->get()->first();
           
           $pai = Pessoa::where('id', $request->input('id_pai'))->get()->first();
           
           $pai->estado_civil = 'Solteiro(a)';
           
           $pai->conjuge_id = null;
           
           $pai->save();
           
           $mae = Pessoa::where('id', $request->input('id_mae'))->get()->first();
           
           $mae->estado_civil = 'Solteiro(a)';
           
           $mae->conjuge_id = null;
           
           $mae->save();
           
           
           if(isset($casal)){
             
              $casal->situacao = 'D';
             $casal->save();
             
           }
           
           
         }
      
        $familia->sobrenome = $request->sobrenome_familia;
        $familia->pai = $request->pai;
        $familia->mae = $request->mae;
        $familia->id_parente = $request->id_parente;
        $familia->nome_parente = $request->nome_parente;
        $familia->tipo = $request->tipo;
      
       $pess = Pessoa::find($request->id_mae);

            $pess->familia_id = $familia->id;

            $pess->save();
      
      $pess = Pessoa::find($request->id_pai);

            $pess->familia_id = $familia->id;

            $pess->save();
      
      

        $familia->save();  
    
        return json_encode($familia);

    }
    
     public function store(Request $request){
         
            $familia = new Familia();

            $familia->situacao = 'A';

            $familia->sobrenome = $request->sobrenome_familia;

            $familia->pai = $request->pai;
            $familia->id_pai = $request->id_pai;

            $familia->mae = $request->mae;
            $familia->id_mae = $request->id_mae;

             if($request->estado_relacionamento=='Casados'){

                $casal = new Casais();

                $casal->situacao = 'A';
    
                $casal->Esposo = $request->pai;
          		$casal->id_esposo = $request->id_pai;
                $casal->Esposa = $request->mae;
          	$casal->id_esposa = $request->id_mae;
    
                $casal->data_casamento = $request->data_casamento;
               
               $pess = Pessoa::find($request->id_pai);

            $pess->conjuge_id = $familia->id_mae;

            $pess->save();
          
          $pess = Pessoa::find($request->id_mae);

            $pess->conjuge_id = $familia->id_pai;

            $pess->save();
    
                $casal->save();
    
                $casal->save();
                
            }
			
        $familia->situacao_relacionamento = $request->estado_relacionamento;

            $familia->id_parente = $request->id_parente;
            $familia->nome_parente = $request->nome_parente;

            $familia->tipo = $request->tipo;

            $familia->save();  

            $pess = Pessoa::find($request->id_pai);

            $pess->familia_id = $familia->id;

            $pess->save();

            $pess = Pessoa::find($request->id_mae);

            $pess->familia_id = $familia->id;

            $pess->save();
			
       if($request->id_parente!=NULL){
         
            $familiares = explode(",", $request->id_parente);

            for ($i=0; $i < count($familiares) -1; $i++) { 
                
                $pess = Pessoa::find($familiares[$i]);

                $pess->familia_id = $familia->id;
    
                $pess->save();
    

            }
       };
           
        
            return json_encode($familia);
    }

    public function buscar(Request $request){


        return Familia::where('sobrenome', 'LIKE', '%' . $request->sobrenome . '%')->paginate(20);
  
        
    }

}




