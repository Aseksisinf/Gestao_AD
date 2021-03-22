$.ajaxSetup({

    headers: {
        'X-CSRF-TOKEN': "{{  csrf_token() }}"
    }

});

$(document).ready(function($) {

    $('#cep').mask('00000-000');

    $("#formCadastroRegional").submit(function(event) {
        event.preventDefault();
        if ($("#id").val() == "") {
            criarRegional();
        } else {
            salvarRegional();
        }
    });

    carregarRegionais(1);

    $('#dlgCadastroFamilia').on('hide.bs.modal', function(event) {

        console.log('O Modal Fechou');

    })

});

function montarLista(r) {


    linha = '<tr>' +
        '<td >' + r.id + '</td>' +
        '<td>' + r.situacao + '</td>' +
        '<td>' + r.regional + '</td>' +
        '<td>' + r.pastor_regional + '</td>' +
        '<td>' +

        '<div>' +

        '<button type="button"' + 'class="btn btn-sm btn-success mr-1"' + 'onclick="editarRegional(' + r.id + ')"> Editar </button>' +
        '<button type="button"' + 'class="btn btn-sm btn-primary"' + 'onclick="viewRegional(' + r.id + ')"> Visualizar </button>' +
        '</div>' +
        '</td>'

    "<tr>";

    return linha;

}

function salvarRegional() {

    regional = {

        regional: $("#regional_nome").val(),
        pastor_regional: $("#pastor_regional").val(),

        cep: $("#cep").val(),
        rua: $("#rua").text(),
        bairro: $("#bairro").text(),
        cidade: $("#cidade").text(),
        uf: $("#uf").text(),

        endereco_nro: $("#endereco_nro").val(),
        ponto_referencia: $("#ponto_referencia").val(),


    }

    if (validaRegional()) {

        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type: "PUT",
            url: "/api/regionais/" + $("#id").val(),
            context: this,
            data: regional,
            success: function(data) {

                $("#dlgCadastro").modal('hide');

                regional = JSON.parse(data);

                linhas = $("#tabelaRegionais>tbody>tr");


                e = linhas.filter(function(i, e) {
                    return (e.cells[0].textContent == regional.id);
                });

                console.log(regional);

                if (e) {
                    e[0].cells[0].textContent = regional.id;
                    e[0].cells[1].textContent = regional.situacao;
                    e[0].cells[2].textContent = regional.regional;
                    e[0].cells[3].textContent = regional.pastor_regional;

                }

            },
            error: function(error) {
                console.log(error);
            }
        });

    }

}

function criarRegional() {

    novaRegional = {

        regional: $("#regional_nome").val(),
        pastor_regional: $("#pastor_regional").val(),

        cep: $("#cep").val(),
        rua: $("#rua").text(),
        bairro: $("#bairro").text(),
        cidade: $("#cidade").text(),
        uf: $("#uf").text(),

        endereco_nro: $("#endereco_nro").val(),
        ponto_referencia: $("#ponto_referencia").val(),

    }

    if (validaRegional()) {


        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type: "POST",
            url: "/api/regionais",
            context: this,
            data: novaRegional,
            success: function(data) {

                $("#dlgCadastro").modal('hide');
                s = montarLista(data);
                $('#tabelaRegionais>tbody').append(s);

            },
            error: function(error) {
                console.log(error);
            }
        });

    }



}

function viewRegional(id) {

    $("#dlgViewRegional").modal('show');

    $.getJSON('/api/regionais/' + id, function(data) {

        $("#view_regional_nome").text(data.regional);
        $("#view_pastor_regional").text(data.pastor_regional);
        $("#view_endereco_nro").text(data.endereco_nro);
        $("#view_ponto_referencia").text(data.ponto_referencia);

        $.getJSON('/api/enderecos/' + data.endereco_id, function(end) {

            $("#view_cep").text(end.cep);
            $("#view_rua").text(end.rua);
            $("#view_bairro").text(end.bairro);
            $("#view_cidade").text(end.cidade);
            $("#view_uf").text(end.estado);

        });



    });

}

function editarRegional(id) {

    $('#dlgCadastro').modal('show');

    $.getJSON('/api/regionais/' + id, function(data) {

        $("#id").val(data.id);
        $("#regional_nome").val(data.regional);
        $("#pastor_regional").val(data.pastor_regional);
        $("#ponto_referencia").val(data.ponto_referencia);
        $("#endereco_nro").val(data.endereco_nro);

        $.getJSON('/api/enderecos/' + data.endereco_id, function(data) {

            $("#cep").val(data.cep);
            $("#rua").text(data.rua);
            $("#bairro").text(data.bairro);
            $("#uf").text(data.estado);
            $("#cidade").text(data.cidade);

        });

    });
}

function montarTabela(data) {

    $('#tabelaRegionais>tbody>tr').remove();

    for (i = 0; i < data.data.length; i++) {
        s = montarLista(data.data[i]);
        $('#tabelaRegionais>tbody').append(s);
    }
}

function carregarRegionais(r) {

    $.getJSON('/api/regionais', function(reg) {

        montarTabela(reg);
        montarPagination(reg);

    });

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

    function getItemProximo(data) {

        if (data.last_page == data.current_page)
            s = '<li class="page-item disabled">';
        else
            s = '<li class="page-item">';

        s += '<a class="page-link"' + ' " onClick = carregarPessoas(' + (data.current_page + 1) + ')>' + "Proximo</a></li>";

        return s;

    }

    function montarPagination(data) {

        $('#paginator>ul>li').remove();

        $('#paginator>ul').append(getItemAnterior(data));

        for (i = 1; i <= data.last_page; i++) {
            s = getItem(data, i);
            $('#paginator>ul').append(s);
        }

        $('#paginator>ul').append(getItemProximo(data));

    }
}

function showViewCadastroRegional() {

    $("#id").val('');
    $("#regional_nome").val('');
    $("#pastor_regional").val(''),
        $("#cep").val(''),
        $("#rua").text(''),
        $("#bairro").text(''),
        $("#cidade").text(''),
        $("#uf").text(''),
        $("#endereco_nro").val(''),
        $("#ponto_referencia").val(''),


        $('#dlgCadastro').modal('show');

}

function pesquisacep(valor) {


    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.


    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if (validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('rua').value = "...";
        document.getElementById('bairro').value = "...";
        document.getElementById('cidade').value = "...";
        document.getElementById('uf').value = "...";

        //Cria um elemento javascript.
        var script = document.createElement('script');

        //Sincroniza com o callback.
        script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

        //Insere script no documento e carrega o conteúdo.
        document.body.appendChild(script);

    } //end if.
    else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");

        $('#cep').removeClass('is-valid');
        $('#cep').addClass('is-invalid');

        $('#rua').removeClass('is-valid');
        $('#bairro').removeClass('is-valid');
        $('#endereco_tipo').removeClass('is-valid');
        $('#endereco_complemento').removeClass('is-valid');
        $('#cidade').removeClass('is-valid');
        $('#uf').removeClass('is-valid');

    }

};

function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    $("#rua").text('');
    $("#bairro").text('');
    $("#cidade").text('');
    $("#uf").text('');

}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {

        $('#cep').removeClass('is-invalid');
        $('#cep').addClass('is-valid');
        $('#rua').addClass('is-valid');
        $('#bairro').addClass('is-valid');
        $('#endereco_tipo').addClass('is-valid');
        $('#endereco_complemento').addClass('is-valid');
        $('#cidade').addClass('is-valid');
        $('#uf').addClass('is-valid');

        //Atualiza os campos com os valores.
        $("#rua").text(conteudo.logradouro);
        $("#bairro").text(conteudo.bairro);
        $("#cidade").text(conteudo.localidade);
        $("#uf").text(conteudo.uf);

    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
        $('#rua').removeClass('is-valid');
        $('#bairro').removeClass('is-valid');
        $('#endereco_tipo').removeClass('is-valid');
        $('#endereco_complemento').removeClass('is-valid');
        $('#cidade').removeClass('is-valid');
        $('#uf').removeClass('is-valid');

    }
}


function buscarRegional() {

    filtro = {
        regional: $("#pesquisar").val()
    }

    $.ajax({

        type: "GET",
        url: "/buscar/regional",
        context: this,
        data: filtro,
        success: function(data) {

            if (data.total == 0) {

                alert('Regional Não Encontrada!');

            } else {

                montarTabela(data);
                montarPagination(data);

            }


        },
        error: function(error) {
            console.log(error);
        }
    });

}

function validaRegional() {

    qErrors = 0;

    qErrors = validaRegionalNome(qErrors);

    qErrors = validaNumeroEnd(qErrors);

    qErrors = validaPastorRegional(qErrors);

    return qErrors == 0;

}

function validaRegionalNome(qErrors) {

    if ($('#regional_nome').val().length < 5) {
        $('#regional_nome').removeClass('is-valid');
        $('#regional_nome').addClass('is-invalid');
        qErrors += 1;
    } else {
        $('#regional_nome').removeClass('is-invalid');
        $('#regional_nome').addClass('is-valid');
    }

    return qErrors;

}

function validaPastorRegional(qErrors) {

    if ($('#pastor_regional').val().length < 10) {
        $('#pastor_regional').removeClass('is-valid');
        $('#pastor_regional').addClass('is-invalid');
        qErrors += 1;
    } else {
        $('#pastor_regional').removeClass('is-invalid');
        $('#pastor_regional').addClass('is-valid');
    }

    return qErrors;

}



function validaNumeroEnd(qErrors) {


    if ($('#endereco_nro').val().length == '') {
        $('#endereco_nro').removeClass('is-valid');
        $('#endereco_nro').addClass('is-invalid');
        qErrors += 1;
    } else {
        $('#endereco_nro').removeClass('is-invalid');
        $('#endereco_nro').addClass('is-valid');
    }

    if (!($("#cep").val().length == 9 && $("#rua").text() != '')) {

        $('#cep').removeClass('is-valid');
        $('#cep').addClass('is-invalid');

        qErrors += 1;
    }

    return qErrors;

}