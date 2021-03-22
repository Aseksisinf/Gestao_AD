<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFamiliasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('familias', function (Blueprint $table) {
                
            $table->increments('id');

            $table->char('situacao',1);

            $table->string('sobrenome');

            $table->string('pai');
            $table->integer('id_pai');
            $table->string('mae');
            $table->integer('id_mae');

            $table->string('situacao_relacionamento');
            
            $table->string('id_parente')->nullable();
            $table->string('nome_parente')->nullable();
            $table->string('tipo')->nullable();
            
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
        Schema::dropIfExists('familias');
    }
}
