@extends('layouts.app')

@section('content')

<script type="text/javascript" src="<?php echo asset('js/User-Congregacoes.js')?>"></script>

<div id="wrapper">

    <!-- Sidebar -->
    <div id="sidebar-wrapper">
        <ul class="sidebar-nav">
            <li>
                <a href="/home/">Inicio</a>
            </li>

            <li>
                <a href="/pessoas">Pessoas</a>
            </li>
            <li>
                <a href="/familias">Familias</a>
            </li>
            <li>
                <a href="/regionais">Regionais</a>
            </li>
            <li>
                <a href="/congregacoes">Congregacoes</a>
            </li>
                 <div class="panel-group" role="tablist">
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="collapseListGroupHeading1">
        <a class="collapsed" data-toggle="collapse" href="#collapseListGroup1" aria-expanded="false" aria-controls="collapseListGroup1" style='text-decoration: none; color:white; margin-left: 20px;'>
          Relatórios
        </a>
    
    <div id="collapseListGroup1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="collapseListGroupHeading1">
      <ul class="list-group">
                       <li>
                      <a href="/relatorios/aniversariantes" style='text-decoration: none; color:#aaaaad; margin-left: 20px;'>Aniversariantes</a>
                </li>
           <li>
                    <a href="/relatorios/aniversarios/casamentos" style='text-decoration: none; color:#aaaaad; margin-left: 20px;'>Casamentos</a>
                </li>
           <li>
                    <a href="/relatorios/membros" style='text-decoration: none; color:#aaaaad; margin-left: 20px;'>Membros</a>
                </li>
           <li>
                    <a href="/relatorios/nao-membros" style='text-decoration: none; color:#aaaaad; margin-left: 20px;'>Não Membros</a>
                </li>
      </ul>
    </div>
  </div>
</div>
        
        </div>
        </ul>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
      
      
      <div class="alert alert-light alert-dismissible fade show" role="alert">
  <strong>Cadastro de Congregações!</strong>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>


        <div  id='btnCadastra' onclick="showViewCadastro()" class="card  border-top-0  border-right-0 border-left-0 rounded-0"
style='border-color:#ffe019;background:white; border-bottom-width:5px; width:100px; height:90px; margin-right:2%; margin-bottom:1%'>
<div class="card-body">
    <a href="/congregacoes#cadastro" class="stretched-link"></a>
    <img src="\imagens/plus.png" class="img-responsive" style="width: 100%">
</div>
</div>
</div>

       <div class="table-responsive">
  <table class="table" style=" text-align: center; zoom:88%;"   id="tabelaCongregacoes">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Situação</th>
        <th scope="col">Congregação</th>
        <th scope="col">Pastor Local</th>
        <th scope="col">Ações</th>
      </tr>
    </thead>
    <tbody>

    </tbody>
  </table>
</div>

        <div style="zoom:88%;" class="card-footer position-static-bottom">

            <nav id="paginator">

                <ul class="pagination">

                </ul>
            </nav>

        </div>
    </div>

    <!-- /#page-content-wrapper -->

</div>
<!-- /#wrapper -->


    @component('user/Congregacoes/view_cadastro_congregacao')
    @endcomponent 

    @component('user/Congregacoes/view_congregacao')
    @endcomponent 
    

@endSection




















