$.ajaxSetup({

    headers: {
        'X-CSRF-TOKEN': "{{  csrf_token() }}"
    }

});

$(document).ready(function() {

    $('#dlgCadastroFamilia').on('hide.bs.modal', function (event) {
        
        console.log('fechou o modal');

        
    });

    removeCampos();
    
});

$(document).ready(function($){
 
    $('#data_casamento').mask('00/00/0000');
   
  });

$(document).ready(function($) {


    

    $("#formCadastroFamilia").submit(function(event) {
        event.preventDefault();
        if ($("#id").val() == "") {
            criarFamilia();
            console.log('chameiii');
        } else {
            salvarFamilia();
        }
    });

    carregarFamilias(1);


   

});

// VARIAVEIS GLOBAIS:

var idContador = 0; // CONTROLE DOS INPUTS DINAMICOS 
var num; // PASSAR VARIAVEL PARA FUNÇAO AJAX (LOOP)

function carregarPessoas(pg) {

    console.log(pg);

    
    filtro = {
        nome: $("#pesquisar").val(),
    }
    
    $.getJSON('/buscar/pessoas/familia', {
        page: pg,
        filtro
    }, function(resp) {
        montarTabela(resp);
    });

}

function carregarFamilias(pg) {

    $.getJSON('/api/familias', {
        page: pg
    }, function(resp) {
        montarTabelaFamilia(resp);
        montarPaginationFamilia(resp);
    });

}

function showViewCadastro() {

    removeCampos();

    $('#id').val('');


    $('#sobrenome_familia').val('');
    $('#nome_pai').val('');
    $('#nome_mae').val('');
    $('#data_casamento').val('');

    $('#sobrenome_familia').removeClass('is-valid');
    $('#nome_pai').removeClass('is-valid');
    $('#nome_mae').removeClass('is-valid');
    $('#data_casamento').removeClass('is-valid');

    $('#sobrenome_familia').removeClass('is-invalid');
    $('#nome_pai').removeClass('is-invalid');
    $('#nome_mae').removeClass('is-invalid');
    $('#data_casamento').removeClass('is-invalid');




    $('#dlgCadastroFamilia').modal('show');





}

function buscarMembros(tipo,form) {

    $('#form_busca').show();
    $('.nav-tabs a[href="#buscar"]').tab('show');

    if(tipo=='1'){
        
        filtro = {
             nome: $("#nome_pai").val(),
        }

    }

    else if(tipo=='2'){
        
        filtro = {
        nome: $("#nome_mae").val(),
        }

    }else{

        filtro = {
        nome: $("#nome_"+form).val(),
        }

        console.log(filtro);
    
    }


    $('#tabelaPessoasFamilia2>tbody>tr').remove();

    $.ajax({

        type: "GET",
        url: "/buscar/pessoas/familia",
        context: this,
        data: filtro,
        success: function(data) {
            montarTabela(data,tipo,form);
            console.log(data);

            console.log(data);

            $('#paginator_familia2>ul>li').remove();

            $('#paginator_familia2>ul').append(getItemAnterior(data));

            for (i = 1; i <= data.last_page; i++) {
                s = getItemFamilia(data, i);
                $('#paginator_familia2>ul').append(s);
            }

            $('#paginator_familia2>ul').append(getItemProximo(data));

        },
        error: function(error) {
            console.log(error);
        }
    });

}


function montarLista(p,tipo,form) {

    linha =

        '<tr>' +

            '<td width="10%;" >' + p.id + '</td>' +
            '<td width="50%;" >' + p.nome + '</td>' +
            '<td>' + p.telefone + '</td>' +

            '<td>';
                
               
                    linha +=
                    '<div>' +
                    '<button type="button"' + 'class="btn btn-sm btn-success mr-1"' + 'onclick="selecionaPessoa(' + p.id + ',' + tipo + ',' + form +')"> Selecionar </button>' +
                     '</div>' +
                     '</td>'

        "<tr>";
            

    return linha;

}

function montarTabela(data,tipo,form) {

    $('#tabelaPessoasFamilia2>tbody>tr').remove();

    for (i = 0; i < data.data.length; i++) {
        s = montarLista(data.data[i],tipo,form);
        $('#tabelaPessoasFamilia2>tbody').append(s);
    }
}

function verificaEstaNaLista(id){

    for(i=1;i<=idContador;i++){

        if($("#nome_"+i).length){

            if($("#nome_"+i).text()==id){
                return false;
            }
        }
    }

    return true;    
}

function selecionaPessoa(id,tipo,form) {

    $('.nav-tabs a[href="#familia"]').tab('show');

    $.getJSON('/api/pessoas/' + id, function(data) {
    
    if($("#nome_pai").text()==id){
        alert('Esta pessoa já foi adicionada a familia.');
    }else if($("#nome_mae").text()==id){
        alert('Esta pessoa já foi adicionada a familia.');
    }else if(data.conjuge_id!=null||data.familia_id!=null){
     	alert('Esta pessoa já faz parte de uma familia.');
    }else if(!verificaEstaNaLista(id)){

        alert('Esta pessoa já foi adicionada a familia.');

    }else{

        
        if(tipo==1){
            $('#nome_pai').val(data.nome);
            $('#nome_pai').text(data.id);
            $('#nome_pai').removeClass('is-invalid');
            $('#nome_pai').addClass('is-valid');
            $('#nome_pai').attr('readonly', true);
            $("#nome_pai").css("background","white");


        }else if(tipo==2){
            $('#nome_mae').val(data.nome);
            $('#nome_mae').text(data.id);
            $('#nome_mae').removeClass('is-invalid');
            $('#nome_mae').addClass('is-valid');
            $('#nome_mae').attr('readonly', true);
            $("#nome_mae").css("background","white");

        }else{
            $('#nome_'+form).val(data.nome);
            $('#nome_'+form).text(data.id);
            $('#nome_'+form).removeClass('is-invalid');
            $('#nome_'+form).addClass('is-valid');
            $('#nome_'+form).attr('readonly', true);
            $("#nome_"+form).css("background","white");
            
        }
    }

    });
}

function criarFamilia() {

    familia = [];

    id_parente = [];
    nome_parente = [];
    tipo = [];

    if (idContador > 0) {

        for (i = 0; i <= idContador; i++) {

            if ($("#formExtra" + i + "").length == 1) {

                id_parente.push($("#nome_" + i).text());

                nome_parente.push($("#nome_" + i).val());

                tipo.push($("#parentesco_" + i).val());

            }

        }

    }

    familia = {

        sobrenome_familia: $("#sobrenome_familia").val(),
        pai: $("#nome_pai").val(),
        id_pai: $("#nome_pai").text(),
        mae: $("#nome_mae").val(),
        id_mae: $("#nome_mae").text(),
        estado_relacionamento: $("#estado_relacionamento").val(),
        data_casamento: $("#data_casamento").val(),
        id_parente: id_parente.join(),
        nome_parente: nome_parente.join(),
        tipo: tipo.join(),
    }

    if(validaFamilia()){ 

        $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        type: "POST",
        url: "/api/familias",
        context: this,
        data: familia,

        success: function(data) {

            console.log('Estou em criar Familia.');

            s = montarListaFamilia(data);
            $('#tabelaFamilias>tbody').append(s);

            console.log(data);

            pessoa_id = [];

            for(i=0;i<id_parente.length;i++){

                pessoa_id.push(id_parente[i]);

            }

            request = {
                familia_id: data.id,
                pessoa_id: pessoa_id
            }


            $('#dlgCadastroFamilia').modal('hide');
            

        },
        error: function(error) {
            console.log(error);
        }
    });

    removeCampos();




    }
  
}

function getItemFamilia(data, i) {

    if (i == data.current_page)
        s = '<li class="page-item active">';
    else
        s = '<li class="page-item">';

    s += '<a class="page-link"' + ' onClick = "carregarFamilias(' + i + ')">' + i + '</a></li>';

    return s;

}

function getItemAnteriorFamilia(data) {

    if (1 == data.current_page)
        s = '<li class="page-item disabled">';
    else
        s = '<li class="page-item">';

    s += '<a class="page-link"' + ' " onClick = carregarFamilias(' + (data.current_page - 1) + ')>' + "Anterior</a></li>";

    return s;

}

function getItemAnteriorFamilia2(data) {

    if (1 == data.current_page)
        s = '<li class="page-item disabled">';
    else
        s = '<li class="page-item">';

    s += '<a class="page-link"' + ' " onClick = carregarPessoas(' + (data.current_page - 1) + ')>' + "Anterior</a></li>";

    return s;

}

function getItemProximoFamilia2(data) {

    if (data.last_page == data.current_page)
        s = '<li class="page-item disabled">';
    else
        s = '<li class="page-item">';

    s += '<a class="page-link"' + ' " onClick = carregarPessoas(' + (data.current_page + 1) + ')>' + "Proximo</a></li>";

    return s;

}

function getItemProximoFamilia(data) {

    if (data.last_page == data.current_page)
        s = '<li class="page-item disabled">';
    else
        s = '<li class="page-item">';

    s += '<a class="page-link"' + ' " onClick = carregarFamilias(' + (data.current_page + 1) + ')>' + "Proximo</a></li>";

    return s;

}

function montarPaginationFamilia(data) {

    $('#paginator_familia>ul>li').remove();

    $('#paginator_familia>ul').append(getItemAnterior(data));

    for (i = 1; i <= data.last_page; i++) {
        s = getItemFamilia(data, i);
        $('#paginator_familia>ul').append(s);
    }

    $('#paginator_familia>ul').append(getItemProximo(data));

}

function montarListaFamilia(p) {
    
    pessoa = p;

    linha = '<tr>' +
        '<td >' + p.id + '</td>' +
        '<td >' + p.sobrenome + '</td>' +
        '<td >' + p.mae + '</td>' +
        '<td >' + p.pai + '</td>' +
        '<td>' +

        '<div>' +

        '<button type="button"' + 'class="btn btn-sm btn-primary mr-1"' + 'onclick="viewFamilia(' + p.id + ')"> Visualizar </button>' +

        '<button type="button"' + 'class="btn btn-sm btn-success"' + 'onclick="editarFamilia(' + p.id + ')"> Editar </button>' +


        '</div>' +
        '</td>'

    "<tr>";

    return linha;

}

function montarTabelaFamilia(data) {

    $('#tabelaFamilias>tbody>tr').remove();

    for (i = 0; i < data.data.length; i++) {
        s = montarListaFamilia(data.data[i]);
        $('#tabelaFamilias>tbody').append(s);
    }

}

function viewFamilia(id) {

    for(i=0;i<idContador;i++){
      console.log('entrou aqui o');
        $('#form_viewParente'+i).remove();
    }

    idContador = 0;

    $.getJSON('/api/familias/' + id, function(fam) {


        $('#dlgViewFamilia').modal('show');
      
        $('#view_sobrenome').text(fam.sobrenome);
        $('#view_pai').text('Pai: ' + fam.pai);
        $('#view_mae').text('Mãe: ' + fam.mae);
        $('#view_data_casamento').text(fam.data_casamento);
	
      	if(fam.id_parente!=null){

        parente_id = fam.id_parente.split(",");
        parente_nome = fam.nome_parente.split(",");
        tipo = fam.tipo.split(",");
          


        for (i = 0; i < parente_id.length; i++) {

            ++idContador;
            

            html = " <div id='form_viewParente" + i + "'>" +

                "<label type='text' class='form-control mr-2 border border-success' id='view_nomeParente" + idContador + "'>" + tipo[i].bold() + ':  '+ parente_nome[i] + "</label>" +

                "</div>";

            $('#imendaHTMLfamilia').append(html);

        }
          
          
        };
      

    });

}

function editarFamilia(id) {

  
    $('#id').val(id);
    
    $('.nav-tabs a[href="#familia"]').tab('show');

    removeCampos();

    $.getJSON('/api/familias/' + id, function(fam) {
        
        $('#sobrenome_familia').val(fam.sobrenome);
        $('#nome_pai').val(fam.pai);
        $('#nome_pai').text(fam.id_pai);
        $('#nome_mae').val(fam.mae);
        $('#nome_mae').text(fam.id_mae);
        
      
      $.getJSON('/api/casais/' + id, function(cas) {
        
        $('#data_casamento').val(cas.data_casamento);
      
      
      });
      
    	$('#estado_relacionamento').val(fam.situacao_relacionamento);
      
      mostrarCampos();
       
        id_parentes = [];
        parentes = [];
        tipo = [];
      
      console.log(fam.id_parente);
      
      	if(fam.id_parente!=null){

        id_parentes = fam.id_parente.split(",");
        parentes = fam.nome_parente.split(",");
        tipo = fam.tipo.split(",");
          
        };

        idContador = id_parentes.length;
        
        for (i = 0; i < idContador; i++) {

        var nome = "nome_" + i;

        var parentesco = "parentesco_" + i;

        var idForm = "formExtra" + i;

        var html = "";

          html += "<div style='margin-top: 8px;' class='form-group' id='" + idForm + "'>";

        html +=


        '<div class="row">' +

        '<div id="group-3" style="margin-left:15px; padding-right:0px;" ' + ' style="margin-right:0px;">' +

        "<div class='input-group mb-3'>"+
                                                
                                                "<input type='text' class='form-control' onBlur='validaMembro(" + idContador+ ")'  id='" + nome + "'>"+
                                                "<div class='input-group-append'>"+
                                                "<button class='btn mr-2 border border-primary' style='height:100%;' value='3' onClick='buscarMembros(this.value,idContador)' type='button'><span class='fa fa-search'></span></button>"+
                                                
                                                "<button class='btn border border-primary' style='height:100%;' onClick='limparCampo("+idContador+")' type='button'><span class='fa fa-eraser'></span></button>"+
                                                '<div class="invalid-feedback">' +
                           ' Use a busca para selecionar uma pessoa.' +
                                                '</div>'+
                                                
                                             
        '</div>' +
                                            '</div>'+


                                           
        '</div>' +

        '<div class="col-md-3"' + ' style="padding-left:10px; padding-right:5px;">' +

        "<select id='" + parentesco + "' class='form-control' onchange='mostrarCampos()'" + "onBlur=validaTipoParente(" + idContador + ")>" +

        '<option value="" disabled selected hidden></option>' +
        '<option value="Avô(ó)">Avô(ó)</option>' +
        '<option value="Filho(a)">Filho(a)</option>' +
        '<option value="Irmão(ã)">Irmão(ã)</option>' +
        '<option value="Mãe">Mãe</option>' +
        '<option value="Neto(a)">Neto(a)</option>' +
        '<option value="Pai">Pai</option>' +
        '<option value="Primo(a)">Primo(a)</option>' +
        '<option value="Sobrinho(a)">Sobrinho(a)</option>' +
        '<option value="Tio(a)">Tio(a)</option>' +
        '</select>' +

        '<div class="invalid-feedback">' +
        ' Selecione uma opção.' +
        '</div>' +

        '</div>' +

        "<span  id='btn-exclui' class='input-group-btn'>" +
        "<button class='btn  border border-danger rounded-0'onclick='exclui(" + idForm + ")' type='button'><span class='fa fa-trash'></span></button>" +
        "</span>" +

        '</div>';


    $("#imendaHTMLmembro").append(html);

    $('#nome_'+i).val(parentes[i]);

    $('#nome_'+i).text(id_parentes[i]);

    $('#nome_'+i).attr('readonly', true);

    $("#nome_"+i).css("background","white");

    $("#parentesco_"+i).val(tipo[i]);

    }});
    
    
    $('#dlgCadastroFamilia').modal('show');

}

function salvarFamilia(){
  
    $.getJSON('/api/familias/' + $("#id").val(), function(fam) {
   
    id_parentes = [];
    parentes = [];
    tipo = [];
    
      if(fam.id_parente!=null){
      
    id_parentes = fam.id_parente.split(",");
    parentes = fam.nome_parente.split(",");
    tipo = fam.tipo.split(",");
    
    }
  
   for(i=0;i<id_parentes.length;i++){
  
    pessoa = {
        id: id_parentes[i]
        };

    $.ajax({

                type: "GET",
                url: "/relacionameno/pessoa-familia/excluir",
                context: this,
                data: pessoa,
                success: function(data) {


                },
                error: function(error) {
                    console.log(error);
                }
            });

  }
  
}).done(function(){

    id_parente = [];
    nome_parente = [];
    tipo = [];

    for (i = 0; i <= idContador; i++) {

        if ($("#formExtra" + i + "").length == 1) {

            id_parente.push($("#nome_" + i).text());

            nome_parente.push($("#nome_" + i).val());

            e = document.getElementById("parentesco_"+i);
            itemSelecionado = e.options[e.selectedIndex].value;

            tipo.push(itemSelecionado);

        }

    }

    familia = {

        sobrenome_familia: $('#sobrenome_familia').val(),
        pai:$('#nome_pai').val(),
        mae: $('#nome_mae').val(),
        data_casamento: $('#data_casamento').val(),
        id_parente: id_parente.join(),
        nome_parente: nome_parente.join(),
      id_mae: $("#nome_mae").text(),
      id_pai: $("#nome_pai").text(),
      estado_relacionamento: $("#estado_relacionamento").val(),
        tipo: tipo.join(),
    }

    if(validaFamilia()){  
            
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type: "PUT",
            url: "/api/familias/"+ $("#id").val(),
            context: this,
            data: familia,

            success: function(data) {

                $('#dlgCadastroFamilia').modal('hide');

                fam = JSON.parse(data);

                linhas = $("#tabelaFamilias>tbody>tr");


                e = linhas.filter(function(i, e) {
                    return (e.cells[0].textContent == fam.id);
                });

                if (e) {
                    e[0].cells[1].textContent = fam.sobrenome;
                }
                
                $("#nome_pai").val('');
                $("#nome_pai").text('');
                
                
                $("#nome_mae").text('');
                $("#nome_mae").val('');
                

                
                
            },
            error: function(error) {
                console.log(error);
            }
        });

    }
      
    });

    
}

function exclui(id) {

    var campo = $("#" + id.id);
    campo.remove();
}

function adicionaCampo(){

         
    idContador++;

    var nome = "nome_" + idContador;

    var parentesco = "parentesco_" + idContador;

    var idForm = "formExtra" + idContador;

    var html = "";
   html += "<div style='margin-top: 8px;' class='form-group' id='" + idForm + "'>";

    html +=

        '<div class="row">' +

        '<div id="group-3" style="margin-left:15px; padding-right:0px;" ' + ' style="margin-right:0px;">' +

        "<div class='input-group mb-3'>"+
                                                
                                                "<input type='text' class='form-control' onBlur='validaMembro(" + idContador+ ")'  id='" + nome + "'>"+
                                                "<div class='input-group-append'>"+
                                                "<button class='btn mr-2 border border-primary' style='height:100%;' value='3' onClick='buscarMembros(this.value,idContador)' type='button'><span class='fa fa-search'></span></button>"+
                                                
                                                "<button class='btn border border-primary' style='height:100%;' onClick='limparCampo("+idContador+")' type='button'><span class='fa fa-eraser'></span></button>"+
                                                '<div class="invalid-feedback">' +
                           ' Use a busca para selecionar uma pessoa.' +
                                                '</div>'+
                                                
                                             
        '</div>' +
                                            '</div>'+


                                           
        '</div>' +

        '<div class="col-md-3"' + ' style="padding-left:10px; padding-right:5px;">' +

        "<select id='" + parentesco + "' class='form-control' onchange='mostrarCampos()'" + "onBlur=validaTipoParente(" + idContador + ")>" +

        '<option value="" disabled selected hidden></option>' +
        '<option value="Avô(ó)">Avô(ó)</option>' +
        '<option value="Filho(a)">Filho(a)</option>' +
        '<option value="Irmão(ã)">Irmão(ã)</option>' +
        '<option value="Mãe">Mãe</option>' +
        '<option value="Neto(a)">Neto(a)</option>' +
        '<option value="Pai">Pai</option>' +
        '<option value="Primo(a)">Primo(a)</option>' +
        '<option value="Sobrinho(a)">Sobrinho(a)</option>' +
        '<option value="Tio(a)">Tio(a)</option>' +
        '</select>' +

        '<div class="invalid-feedback">' +
        ' Selecione uma opção.' +
        '</div>' +

        '</div>' +

        "<span  id='btn-exclui' class='input-group-btn'>" +
        "<button class='btn  border border-danger rounded-0'onclick='exclui(" + idForm + ")' type='button'><span class='fa fa-trash'></span></button>" +
        "</span>" +

        '</div>';




    html += "</div>";

    $("#imendaHTMLmembro").append(html);

}

function adicionaMembro(pessoa,tipo) {

    $('.nav-tabs a[href="#familia"]').tab('show');

    if(tipo=='1'){
        $('#nome_pai').val(pessoa.nome);
    }else if(tipo=='2'){
        $('#nome_mae').val(pessoa.nome);
    }
    else {
   

    $('#nome_' + idContador).val(pessoa.id);

    }
    

}

function removeCampos(){

    

    for (i = 0; i <= idContador; i++) {

        console.log('removeu'+i);
        $('#formExtra' + i).remove();

    }

    idContador = 0;
}


function getItem(data, i) {

    if (i == data.current_page)
        s = '<li class="page-item active">';
    else
        s = '<li class="page-item">';

    s += '<a class="page-link"' + ' onClick = "carregarPessoas(' + i + ')">' + i + '</a></li>';

    return s;

}

function getItemAnterior(data) {

if (1 == data.current_page)
    s = '<li class="page-item disabled">';
else
    s = '<li class="page-item">';

s += '<a class="page-link"' + ' " onClick = carregarPessoas(' + (data.current_page - 1) + ')>' + "Anterior</a></li>";

return s;

}

function mostrarCampos(){

if($("#estado_relacionamento").val()=='Casados'){

    $("#form_data_casamento").show();
}else{

    $("#form_data_casamento").hide();
    $("#data_casamento").val('');
}

}


function getItemProximo(data) {

if (data.last_page == data.current_page)
    s = '<li class="page-item disabled">';
else
    s = '<li class="page-item">';

s += '<a class="page-link"' + ' " onClick = carregarPessoas(' + (data.current_page + 1) + ')>' + "Proximo</a></li>";

return s;

}

function montarPagination(data) {


$('#paginator_familia2>ul>li').remove();

    $('#paginator_familia2>ul').append(getItemAnterior(data));

    for (i = 1; i <= data.last_page; i++) {
        s = getItem(data, i);
        $('#paginator_familia2>ul').append(s);
    }

    $('#paginator_familia2>ul').append(getItemProximo(data));

}

function validaSobrenomeF(qErrors){

    if($('#sobrenome_familia').val().length<10){

        $('#sobrenome_familia').removeClass('is-valid');
        $('#sobrenome_familia').addClass('is-invalid');
        qErrors++;
    }else{

        $('#sobrenome_familia').removeClass('is-invalid');
        $('#sobrenome_familia').addClass('is-valid');

    }

    return qErrors;
}

function validaPai(qErrors){

if($('#nome_pai').val().length<10){

    $('#nome_pai').removeClass('is-valid');
    $('#nome_pai').addClass('is-invalid');
    qErrors++;
}else{

    $('#nome_pai').removeClass('is-invalid');
    $('#nome_pai').addClass('is-valid');

}

return qErrors;
}

function validaMae(qErrors){

if($('#nome_mae').val().length<10){

$('#nome_mae').removeClass('is-valid');
$('#nome_mae').addClass('is-invalid');
qErrors++;

}else{

$('#nome_mae').removeClass('is-invalid');
$('#nome_mae').addClass('is-valid');

}

return qErrors;
}

function validaDataCasamento(){


if($('#data_casamento').val().length < 10 ){

$('#data_casamento').removeClass('is-valid');
$('#data_casamento').addClass('is-invalid');

}else{

$('#data_casamento').removeClass('is-invalid');
$('#data_casamento').addClass('is-valid');

}
}

function validaTipoParente(id,qErrors){

if($("#parentesco_"+id).val()==null){
    qErrors++;
    $('#parentesco_'+id).removeClass('is-valid');
    $('#parentesco_'+id).addClass('is-invalid');

}else{

    $('#parentesco_'+id).removeClass('is-invalid');
    $('#parentesco_'+id).addClass('is-valid');

}

return qErrors;
}

function limparCampo(id){

console.log('estou limpando'+id);

$('#nome_'+id).val('');
$('#nome_'+id).text('');
$('#nome_'+id).attr('readonly', false);
$("#nome_"+id).css("background","white");
$('#nome_'+id).removeClass('is-invalid');
$('#nome_'+id).removeClass('is-valid');

}

function limparPai(){

$('#nome_pai').val('');
$('#nome_pai').text('');
$('#nome_pai').attr('readonly', false);
$("#nome_pai").css("background","white");
$('#nome_pai').removeClass('is-invalid');
$('#nome_pai').removeClass('is-valid');

}


function limparMae(){

$('#nome_mae').val('');
$('#nome_mae').text('');
$('#nome_mae').attr('readonly', false);
$("#nome_mae").css("background","white");
$('#nome_mae').removeClass('is-invalid');
$('#nome_mae').removeClass('is-valid');

}

function validaDataCasamento(qErrors){

if($("#data_casamento").val().length != 10){
    qErrors++;
    $('#data_casamento').removeClass('is-valid');
    $('#data_casamento').addClass('is-invalid');

}else{

    $('#data_casamento').removeClass('is-invalid');
    $('#data_casamento').addClass('is-valid');

}

return qErrors;
}

function validaSituacao(qErrors){
  
  console.log('entrei aqui');

if($('#estado_relacionamento').val()==null){
    
    qErrors++;        
  
   $('#estado_relacionamento').removeClass('is-valid');
   $('#estado_relacionamento').addClass('is-invalid');

}else{
  
    $('#estado_relacionamento').removeClass('is-invalid');
    $('#estado_relacionamento').addClass('is-valid');
  
}

return qErrors;


}

function validaFamilia(){

var qErrors;

qErrors = 0;

qErrors += validaMae(qErrors);
qErrors += validaPai(qErrors);
qErrors += validaSobrenomeF(qErrors);
qErrors += validaSituacao(qErrors);

for(i=0;i<=idContador;i++){

    if($("#nome_"+i).length){

        qErrors += validaMembro(i,qErrors);
        qErrors += validaTipoParente(i,qErrors);
    }
}

console.log(qErrors==0);

return qErrors == 0;

}


function validaMembro(id,qErrors){

if($("#nome_"+id).text()==''){

$('#nome_'+id).removeClass('is-valid');
$('#nome_'+id).addClass('is-invalid');
qErrors++;
}else{

$('#nome_'+id).removeClass('is-invalid');
$('#nome_'+id).addClass('is-valid');

}

return qErrors;

}

function buscarFamilia(){

filtro = {
sobrenome: $("#pesquisar").val()
}

$.ajax({

type: "GET",
url: "/buscar/familia",
context: this,
data: filtro,
success: function(data) {

    
    if(data.total==0){

        alert('Familia Não Encontrada!');

     }else{
 
        console.log(data);

        montarTabelaFamilia(data);
        montarPaginationFamilia(data);
    }

},
error: function(error) {
    console.log(error);
}
});

}






