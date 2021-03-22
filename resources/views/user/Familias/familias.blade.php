@extends('layouts.app')

@section('content')

<script type="text/javascript" src="<?php echo asset('js/User-Familias.js')?>"></script>

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
        </ul>

    </div>

<!-- /#sidebar-wrapper -->

<!-- Page Content -->
<div id="page-content-wrapper">


    <div class="alert alert-light alert-dismissible fade show" role="alert">
        <strong>Cadastro de familias!</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
     
    <div id='btnCadastra' onclick="showViewCadastro()"
    class="card  border-top-0  border-right-0 border-left-0 rounded-0"
    style='border-color:#38c172;background:white; border-bottom-width:5px; width:100px; height:90px; margin-right:2%; margin-bottom:1%'>
    <div class="card-body">
        <a href="/familias#cadastro" class="stretched-link"></a>
        <img src="\imagens/plus.png" class="img-responsive" style="width: 100%">
    </div>
    </div>

    <div class="table-responsive">
        <table class="table" style=" text-align: center; zoom:88%;" id="tabelaFamilias">
            <thead class="thead-dark">
                <tr>
                    <th>#</th>
                    <th width="15%;">Sobrenome</th>
                    <th width="28%;">Mãe</th>
                    <th width="28%;">Pai</th>
                    <th>Açoes</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>

    <div style="zoom:88%;" class="card-footer position-static-bottom">

        <nav id="paginator_familia">

            <ul class="pagination">

            </ul>
        </nav>

    </div>
</div>

<!-- /#page-content-wrapper -->

</div>
<!-- /#wrapper -->


@component('user/Familias/view_cadastro_familia')
@endcomponent

@component('user/Familias/view_familia')
@endcomponent


@endSection
