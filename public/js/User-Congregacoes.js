    $.ajaxSetup({

        headers: {
            'X-CSRF-TOKEN': "{{  csrf_token() }}"
        }

    });

    $(document).ready(function($) {


        $('#cep').mask('00000-000');

        $("#formCadastroCongregacao").submit(function(event) {
            event.preventDefault();
            if ($("#id").val() == "") {
                criarCongregacao();
            } else {
                salvarCongregacao();
            }
        });

        carregarRegionais();
        carregarCongregacoes(1);

        $('#dlgCadastroFamilia').on('hide.bs.modal', function(event) {

            console.log('O Modal Fechou');

        })

    });

    function montarLista(c) {

        linha = '<tr>' +
            '<td >' + c.id + '</td>' +
            '<td>' + c.situacao + '</td>' +
            '<td>' + c.congregação + '</td>' +
            '<td>' + c.pastor_local + '</td>' +
            '<td>' +

            '<div>' +

            '<button type="button"' + 'class="btn btn-sm btn-success mr-2"' + 'onclick="editarCongregacao(' + c.id + ')"> Editar </button>' +

            '<button type="button"' + 'class="btn btn-sm btn-primary"' + 'onclick="viewCongregacao(' + c.id + ')"> Visualizar</button>' +

            '</div>' +
            '</td>'

        "<tr>";

        return linha;

    }

    function montarTabela(data) {

        $('#tabelaCongregacoes>tbody>tr').remove();

        for (i = 0; i < data.data.length; i++) {
            s = montarLista(data.data[i]);
            $('#tabelaCongregacoes>tbody').append(s);
        }
    }

    function salvarCongregacao() {

        congregacao = {

            congregacao: $("#congregacao_nome").val(),
            regional: $("#regional_nome").val(),

            pastor_local: $("#pastor_local").val(),

            cep: $("#cep").val(),
            rua: $("#rua").text(),
            bairro: $("#bairro").text(),
            cidade: $("#cidade").text(),
            uf: $("#uf").text(),

            endereco_nro: $("#endereco_nro").val(),
            ponto_referencia: $("#ponto_referencia").val(),


        }

        if (validaCongregacao()) {

            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                type: "PUT",
                url: "/api/congregacoes/" + $("#id").val(),
                context: this,
                data: congregacao,
                success: function(data) {

                    $("#dlgCadastro").modal('hide');

                    congregacao = JSON.parse(data);

                    linhas = $("#tabelaCongregacoes>tbody>tr");


                    e = linhas.filter(function(i, e) {
                        return (e.cells[0].textContent == congregacao.id);
                    });

                    if (e) {
                        e[0].cells[0].textContent = congregacao.id;
                        e[0].cells[1].textContent = congregacao.situacao;
                        e[0].cells[2].textContent = congregacao.congregação;
                        e[0].cells[3].textContent = congregacao.pastor_local;
                    }

                },
                error: function(error) {
                    console.log(error);
                }
            });

        }

    }


    function carregarCongregacoes(c) {



        $.getJSON('/api/congregacoes', function(cong) {

            montarTabela(cong);
            montarPagination(cong);

        });

    }

    function showViewCadastro() {

        $("#id").val('');

        $("#congregacao_nome").val('');
        $("#regional_nome").val('');
        $("#pastor_local").val(''),
            $("#cep").val(''),
            $("#rua").text(''),
            $("#bairro").text(''),
            $("#cidade").text(''),
            $("#uf").text(''),
            $("#endereco_nro").val(''),
            $("#ponto_referencia").val(''),


            $('#dlgCadastro').modal('show');

    }

    function criarCongregacao() {

        console.log('entrou aqui');

        novaCongregacao = {

            congregacao: $("#congregacao_nome").val(),
            regional: $("#regional_nome").val(),
            pastor_local: $("#pastor_local").val(),

            cep: $("#cep").val(),
            rua: $("#rua").text(),
            bairro: $("#bairro").text(),
            cidade: $("#cidade").text(),
            uf: $("#uf").text(),

            endereco_nro: $("#endereco_nro").val(),
            ponto_referencia: $("#ponto_referencia").val(),

        }

        if (validaCongregacao()) {

            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                type: "POST",
                url: "/api/congregacoes",
                context: this,
                data: novaCongregacao,
                success: function(data) {

                    $("#dlgCadastro").modal('hide');
                    s = montarLista(data);
                    $('#tabelaCongregacoes>tbody').append(s);

                },
                error: function(error) {
                    console.log(error);
                }
            });



        }


    }

    function viewCongregacao(id) {

        $("#dlgViewCongregacao").modal('show');

        $.getJSON('/api/congregacoes/' + id, function(data) {

            $("#view_congregacao_nome").text(data.congregação);
            $("#view_pastor_local").text(data.pastor_local);
            $("#view_endereco_nro").text(data.endereco_nro);
            $("#view_ponto_referencia").text(data.ponto_referencia);

            $.getJSON('/api/regionais/' + data.regional_id, function(reg) {

                $("#view_regional_nome").text(reg.regional);

                console.log(reg);

            });

            $.getJSON('/api/enderecos/' + data.endereco_id, function(end) {

                $("#view_cep").text(end.cep);
                $("#view_rua").text(end.rua);
                $("#view_bairro").text(end.bairro);
                $("#view_cidade").text(end.cidade);
                $("#view_uf").text(end.estado);

            });

        });

    }


    function editarCongregacao(id) {

        $('#dlgCadastro').modal('show');

        $.getJSON('/api/congregacoes/' + id, function(data) {

            $("#id").val(data.id);

            $("#pastor_local").val(data.pastor_local);

            $("#congregacao_nome").val(data.congregação);
            $("#regional_nome").val(data.regional_id);

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

    function carregarRegionais() {

        $("#regional_nome").empty();

        $.getJSON('/api/regionais', function(reg) {

            console.log(reg);

            for (i = 0; i < reg.data.length; i++) {

                if (i == 0) {
                    $('#regional_nome').append("<option value='' disabled selected hidden></option>");
                }

                $('#regional_nome').append($('<option>', {
                    value: reg.data[i].id,
                    text: reg.data[i].regional
                }));

            }

        });

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


    function validaCongregacao() {

        qErrors = 0;

        qErrors = validaCongregacaoNome(qErrors);

        qErrors = validaRegionalNome(qErrors);

        qErrors = validaNumeroEnd(qErrors);

        qErrors = validaPastorLocal(qErrors);

        return qErrors == 0;

    }

    function validaCongregacaoNome(qErrors) {

        if ($('#congregacao_nome').val().length < 5) {
            $('#congregacao_nome').removeClass('is-valid');
            $('#congregacao_nome').addClass('is-invalid');
            qErrors += 1;
        } else {
            $('#congregacao_nome').removeClass('is-invalid');
            $('#congregacao_nome').addClass('is-valid');
        }

        return qErrors;

    }

    function validaRegionalNome(qErrors) {

        if ($('#regional_nome').val() == null) {
            $('#regional_nome').removeClass('is-valid');
            $('#regional_nome').addClass('is-invalid');
            qErrors += 1;
        } else {
            $('#regional_nome').removeClass('is-invalid');
            $('#regional_nome').addClass('is-valid');
        }

        return qErrors;

    }

    function validaPastorLocal(qErrors) {

        if ($('#pastor_local').val().length < 10) {
            $('#pastor_local').removeClass('is-valid');
            $('#pastor_local').addClass('is-invalid');
            qErrors += 1;
        } else {
            $('#pastor_local').removeClass('is-invalid');
            $('#pastor_local').addClass('is-valid');
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

    function getItem(data, i) {

        if (i == data.current_page)
            s = '<li class="page-item active">';
        else
            s = '<li class="page-item">';

        s += '<a class="page-link"' + ' onClick = "carregarCongregacoes(' + i + ')">' + i + '</a></li>';

        return s;

    }

    function getItemAnterior(data) {

        if (1 == data.current_page)
            s = '<li class="page-item disabled">';
        else
            s = '<li class="page-item">';

        s += '<a class="page-link"' + ' " onClick = carregarCongregacoes(' + (data.current_page - 1) + ')>' + "Anterior</a></li>";

        return s;

    }

    function getItemProximo(data) {

        if (data.last_page == data.current_page)
            s = '<li class="page-item disabled">';
        else
            s = '<li class="page-item">';

        s += '<a class="page-link"' + ' " onClick = carregarCongregacoes(' + (data.current_page + 1) + ')>' + "Proximo</a></li>";

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


    function buscarCongregacao() {

        filtro = {
            congregacao: $("#pesquisar").val()
        }

        $.ajax({

            type: "GET",
            url: "/buscar/congregacao",
            context: this,
            data: filtro,
            success: function(data) {


                console.log(data);

                if (data.total == 0) {

                    alert('Congregacao Não Encontrada!');

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