<?php

namespace App\Http\Controllers;
  

use Illuminate\Http\Request;

use App\Relatorios\Excel\Membros;


use App\Relatorios\Excel\Nmembros;
use Maatwebsite\Excel\Facades\Excel;

  
class Excel_Controller extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    /**

    * @return \Illuminate\Support\Collection

    */

    public function nMembrosExcel() 

    {

        return Excel::download(new Nmembros, 'Relatorio_Não_Membros.xlsx');

    }

    public function membrosCExcel($regional, $congregacao) 
{

    \Debugbar::info($regional);
	return Excel::download(new Membros($regional, $congregacao), 'Relatorio_Membros.xlsx');
}


   

    /**

    * @return \Illuminate\Support\Collection

    */



}







