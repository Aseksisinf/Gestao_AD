<?php

namespace App\Http\Controllers;

use App\Models\Cadastro\Parentesco;
use Illuminate\Http\Request;

class ParentescoController extends Controller
{
    public function index(){
     
        return Parentesco::all();
    }

    public function store(Request $request){

        $parentesco = new Parentesco;

        $parentesco->tipo = $request->parentesco;

        $parentesco->save();

        return $parentesco;

    }
    

    public function show($id)
    {
        $parentesco =  Parentesco::find($id);
                
        if(isset($parentesco)){
            
            return json_encode($parentesco);
       }
         
       return response('Parentesco não encontrado.',404);
          
    }
}
