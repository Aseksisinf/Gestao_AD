@extends('layouts.app')

@section('content')

<script type="text/javascript" src="<?php echo asset('js/User-Relatorios-Aniversariantes.js')?>"></script>

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
  <strong>Relatório - Anivesariantes!</strong>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
      

        <div style="margin-left:0px;padding-left:0px;" class="form-group">
                                            <label  style="margin-left:0px;padding-right:2%;"for="mes">Mês: </label>
                                            <select id="mes" class="form-control" onchange="buscarAnv(this.value)">
                                                <option value="" disabled selected hidden></option>
                                                <option value="1">Janeiro</option>
                                                <option value="2">Fevereiro</option>
                                                <option value="3">Março</option>
                                                <option value="4">Abril</option>
                                                <option value="5">Maio</option>
                                                <option value="6">Junho</option>
                                                <option value="7">Julho</option>
                                                <option value="8">Agosto</option>
                                                <option value="9">Setembro</option>
                                                <option value="10">Outubro</option>
                                                <option value="11">Novembro</option>
                                                <option value="12">Dezembro</option>
                                              
                                            </select>
                                            <div class="invalid-feedback">
                                                Selecione uma opção.
                                            </div>
                                        </div>
         
      
       <div class="table-responsive">
  <table class="table" style=" text-align: center; zoom:88%;"   id="tabelaAniversariantes">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nome</th>
        <th scope="col">Data</th>
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


    
    @component('Admin/Paginas/Pessoas/view_pessoa')
    @endcomponent
    
    @component('.../layouts/alert')
    @endcomponent
    

@endSection
























