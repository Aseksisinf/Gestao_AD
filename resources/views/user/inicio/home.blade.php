@extends('layouts.app')

@section('content')

<script type="text/javascript" src="<?php echo asset('js/User-Inicio.js')?>"></script>

<div id="wrapper">

    <!-- Sidebar -->
    <div id="sidebar-wrapper">
        <ul class="sidebar-nav">
            <li>
                <a href="/home">Inicio</a>
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
                <a href="/congregacoes">Congregaçoes</a>
            </li>
        </ul>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
        <div class="container-fluid">
            <div class="row">

                <div>
                    <div class="card-deck">
                        <div class="card  border-top-0  border-right-0 border-left-0 rounded-0"
                            style='border-color:#3490dc; border-bottom-width:5px;'>
                            <div class="card-body">
                                <a href="/pessoas" class="stretched-link"></a>
                                <p class="text-left"
                                    style='color:#a4a8ab; font-family: monospace; letter-spacing: .1rem; margin-bottom:1%;'>
                                    <strong>   <img src="\imagens/pessoas.png" class="img-responsive"
                                        style="width: 20%"> PESSOAS</strong></p>

                                <div class='form-inline'>
                                    <div class="spinner-grow text-primary spinner-grow-sm" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                    <p id='Qpessoas'
                                        style='margin-left:2%;padding-left:8%; margin-bottom:0px; font-size:40px;'></p>
                                  


                                </div>

                            </div>


                        </div>
                        <div class="card  border-top-0  border-right-0 border-left-0 rounded-0"
                            style='border-color:#38c172; border-bottom-width:5px;'>
                            <div class="card-body">
                                <a href="/familias" class="stretched-link"></a>
                                <p class="text-left"
                                    style='color:#a4a8ab; font-family: monospace; letter-spacing: .1rem; margin-bottom:1%;'>
                                    <strong> 
                                        <img src="\imagens/familia.png" class="img-responsive"
                                            style="width: 20%"> FAMILIAS</strong></p>
                                <div class='form-inline'>
                                    <div class="spinner-grow  spinner-grow-sm" style='color:#38c172; ' role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                    <p id='Qfamilias'
                                        style='margin-left:2%; padding-left:8%; margin-bottom:0px; font-size:40px;'>
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div class="card   border-top-0  border-right-0 border-left-0 rounded-0"
                            style='border-color:#ff9933; border-bottom-width:5px;'>
                            <div class="card-body">
                                <a href="/usuarios" class="stretched-link"></a>
                                <p class="text-left"
                                    style='color:#a4a8ab; font-family: monospace; letter-spacing: .1rem; margin-bottom:1%;'>
                                    <strong> 
                                        <img src="\imagens/user.png" class="img-responsive"
                                            style="width: 20%"> USUÁRIOS</strong></p>
                                <div class='form-inline'>
                                    <div class="spinner-grow spinner-grow-sm" style='color:#ff9933' role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                    <p id='Qusuarios'
                                        style='margin-left:2%; padding-left:8%; margin-bottom:0px; font-size:40px;'>
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div class="card  border-top-0  border-right-0 border-left-0 rounded-0"
                            style='border-color:#e3342f; border-bottom-width:5px;'>
                            <div class="card-body">
                                <a href="/regionais" class="stretched-link"></a>
                                <p class="text-left"
                                    style='color:#a4a8ab; font-family: monospace; letter-spacing: .1rem; margin-bottom:1%;'>
                                    <strong>
                                        <img src="\imagens/localizacao.png" class="img-responsive"
                                            style="width: 20%"> REGIONAIS</strong></p>
                                <div class='form-inline'>
                                    <div class="spinner-grow spinner-grow-sm" style='color:#e3342f;' role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                    <p id='Qregionais'
                                        style='margin-left:2%;padding-left:8%; margin-bottom:0px; font-size:40px;'>
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div class="card  border-top-0  border-right-0 border-left-0 rounded-0"
                            style='border-color:#ffe019; border-bottom-width:5px;'>
                            <div class="card-body">
                                <a href="/congregacoes" class="stretched-link"></a>
                                <p class="text-left"
                                    style='color:#a4a8ab; font-family: monospace; letter-spacing: .1rem; margin-bottom:1%;'>
                                    <strong>  <img src="\imagens/congregacao.png" class="img-responsive"
                                        style="width: 20%"> CONGREGAÇÕES</strong></p>
                                <div class='form-inline'>
                                    <div class="spinner-grow  spinner-grow-sm" style='color:#ffe019;' role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                    <p id='Qcongregacoes'
                                        style='margin-left:2%;padding-left:8%; margin-bottom:0px; font-size:40px;'></p>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
<!-- /#page-content-wrapper -->

<!-- /#wrapper -->

@endsection
