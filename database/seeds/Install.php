<?php

use Illuminate\Database\Seeder;

class Install extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(){
     
        DB::table('admins')->insert([
             
            'situacao' => 'A',
            'name' => 'Administrador',
            'email' => 'admin@gmail.com',
            'password' =>  bcrypt('admin123'),
        
        ]);

        DB::table('enderecos')->insert([
             
            'situacao' => 'A',
            'cep' =>  '30570-470',
            'rua' => 'Tito Dias de Assis',
            'bairro' => 'Palmeiras',
            'cidade' => 'Belo Horizonte',
            'estado' => 'MG'
        
        ]);

        DB::table('regionais')->insert([
             
            'situacao' => 'A',
            'regional' =>  'Salgado Filho',
            'Pastor_regional' => 'Agnaldo',
            'endereco_id' => '1',
            'endereco_nro' => '670',
            'ponto_referencia' => 'Vazio(a)'
        
        ]);

        DB::table('congregacoes')->insert([
             
            'situacao' => 'A',
            'congregação' => 'Parque São José',
            'regional_id' =>  '1',
            'Pastor_Local' => 'Fernando',
            'endereco_id' => '1',
            'endereco_nro' => '670',
            'ponto_referencia' => 'Vazio(a)'
        
        ]);

        for ($i=0; $i < 100; $i++) { 

            DB::table('pessoas')->insert([
             
                'situacao'=> 'A',
                'endereco_id' => '1',
                'nome' => "Pessoa n $i",
                'sexo' => 'Masculino',
                'email' => "$i teste@gmail.com",
                'telefone' =>  '(00)0000-0000)',
                'celular' => '(00)00000-0000',
                'estado_civil' => 'Casado(a)',
                'pai' => "pai n $i",
                'mae' => "mae n $i",
                'data_nasc' => '00/00/0000',
                'endereco_nro' => '1',
                'endereco_complemento' =>'Vazio(a)',
    
            
            ]);
            
        }
      

        DB::table('users')->insert([
            
            'situacao' => 'A',
            'name' => 'Usuario',
            'email' => 'user@gmail.com',
            'password' =>  bcrypt('user1234'),
        
        ]);

        $funcoes = [

            'Cooperador','Diácono', 'Evangelista', 'Membro', 'Obreiro', 'Pastor', ' Presbítero',

        ];

        for($i=0; $i<count($funcoes); $i++){

            DB::table('funcoes')->insert([
             
                'situacao' => 'A',
                'funcao' => $funcoes[$i],
            
            ]);

        }    
    }
}
