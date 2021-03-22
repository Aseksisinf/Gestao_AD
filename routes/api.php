<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::resource('/pessoas','PessoaController');

Route::resource('/familias','FamiliaController');

Route::resource('/casais','CasaisController');

Route::resource('/enderecos','EnderecoController');

Route::resource('/regionais','RegionalController');

Route::resource('/congregacoes','CongregacaoController');

Route::resource('/funcoes','FuncaoController');

Route::resource('/users','UsersController');

Route::resource('/admins','AdminsController');






