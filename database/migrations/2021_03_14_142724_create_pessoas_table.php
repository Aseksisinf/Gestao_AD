<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePessoasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pessoas', function (Blueprint $table) {
            
            $table->increments('id');
           
            $table->char('situacao',1);

            $table->integer('congregacao_id')->unsigned()->nullable();
            $table->foreign('congregacao_id')->references('id')->on('congregacoes');

            $table->integer('endereco_id')->unsigned();
            $table->foreign('endereco_id')->references('id')->on('enderecos');
     
            $table->integer('familia_id')->unsigned()->nullable();
            $table->foreign('familia_id')->references('id')->on('familias');
            
            

            $table->integer('regional_id')->unsigned()->nullable();
            $table->foreign('regional_id')->references('id')->on('regionais');
            
            $table->integer('funcao_id')->unsigned()->nullable();
            $table->foreign('funcao_id')->references('id')->on('funcoes');

            $table->string('codigo_tc')->nullable()->unique();

            $table->string('situacao_membro')->nullable();

            $table->string('nome',70);
            $table->string('pai',70);
            $table->string('mae',70);
            
            $table->string('data_nasc');
            $table->char('sexo',11);
            $table->char('celular',15)->nullable();
            $table->char('telefone',14)->nullable();
            $table->string('email',100)->nullable();
            $table->char('estado_civil',12);
            
            $table->integer('endereco_nro');
            $table->string('endereco_complemento',40);
           
            $table->timestamps();
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pessoas');
    }
}
