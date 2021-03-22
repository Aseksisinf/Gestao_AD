<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


//MULTIUSUARIOS:


Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login');

Route::get('/admin/login', 'Auth\AdminLoginController@index')->name('admin.login');
Route::post('/admin/login', 'Auth\AdminLoginController@login')->name('admin.login.submit');


Route::get('logout', 'Auth\LoginController@logout')->name('logout');



// Rotas Paginas Usuarios

Route::get('/admin', 'AdminController@index')->name('admin');

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/gestaoInfo','HomeController@gestaoInfo');

Route::get('/pessoas', 'HomeController@paginaPessoas')->name('pessoas');

Route::get('/regionais', 'HomeController@paginaRegionais')->name('regionais');

Route::get('/congregacoes', 'HomeController@paginaCongregacoes')->name('congregacoes');

Route::get('/familias', 'HomeController@paginaFamilias')->name('familias');
Route::get('/buscar/pessoas/familia','PessoaController@buscarPessoasFamilia'); // Busca Membros da familia.

