

$.ajaxSetup({
	headers: {
		'X-CSRF-TOKEN': "{{  csrf_token() }}"
	}
});


$(document).ready(function ($) {


	$('#telefone').mask('(00) 0000-0000');
	$('#celular').mask('(00) 00000-0000');
	$('#data_nasc').mask('00/00/0000');
	$('#cep').mask('00000-000');

	$("#formCadastro").submit(function (event) {
		event.preventDefault();
		if ($("#id").val() == "") {
			criarPessoa();
		} else {
			salvarPessoa();
		}
	});

	carregarPessoas();
	carregaRegionais();
	carregaFuncoes();

});

function carregaRegionais() {

	$("#regional").empty();

	$.getJSON('/api/regionais', function (reg) {

		for (i = 0; i < reg.data.length; i++) {

			if (i == 0) {
				$('#regional').append("<option value='' disabled selected hidden></option>");
			}

			$('#regional').append($('<option>', {
				value: reg.data[i].id,
				text: reg.data[i].regional
			}));

		}

	});

}

function carregaFuncoes() {

	$.getJSON('/api/funcoes', function (fun) {

		for (i = 0; i < fun.data.length; i++) {

			if (i == 0) {
				$('#relacao_igreja').append("<option value='' disabled selected hidden></option>");
			}

			$('#relacao_igreja').append($('<option>', {
				value: fun.data[i].id,
				text: fun.data[i].funcao
			}));


		}

	});

}

function showViewCadastro() {

	$("#regional").val('')
	$("#congregacao").val('');
	$("#relacao_igreja").val('');

	$("#id").val('');
	$("#nome").val('');
	$("#data_nasc").val('');
	$("#sexo").val('');
	$("#estado_civil").val('');
	$("#data_casamento").val('');
	$("#input_data_casamento").hide();
	$("#email").val('');
	$("#telefone").val('');
	$("#celular").val('');

	$("#cep").val('');
	$("#rua").text('');
	$("#bairro").text('');
	$("#estado").text('');
	$("#cidade").text('');
	$("#uf").text('');
	$("#complemento").val('');
	$("#tipo").val('');
	$("#endereco_nro").val('');

	$("#situacao_membro").val('')
	$("#regional").val('');
	$("#congregacao").val('');
	$("#relacao_igreja").val('');

	$("#form_regional").hide();
	$("#form_congregacao").hide();
	$("#form_relacao").hide();

	$("#pai").val('');
	$("#mae").val('');

	//______________________________________

	$("#nome").removeClass('is-valid');
	$("#data_nasc").removeClass('is-valid');
	$("#sexo").removeClass('is-valid');
	$("#estado_civil").removeClass('is-valid');
	$("#data_casamento").removeClass('is-valid');
	$("#email").removeClass('is-valid');
	$("#telefone").removeClass('is-valid');
	$("#celular").removeClass('is-valid');

	$("#cep").removeClass('is-valid');
	$("#rua").removeClass('is-valid');
	$("#bairro").removeClass('is-valid');
	$("#estado").removeClass('is-valid');
	$("#cidade").removeClass('is-valid');
	$("#uf").removeClass('is-valid');
	$("#complemento").removeClass('is-valid');
	$("#tipo").removeClass('is-valid');
	$("#endereco_nro").removeClass('is-valid');

	$("#situacao_membro").removeClass('is-valid');
	$("#regional").removeClass('is-valid');
	$("#congregacao").removeClass('is-valid');
	$("#relacao_igreja").removeClass('is-valid');

	$("#form_regional").removeClass('is-valid');
	$("#form_congregacao").removeClass('is-valid');
	$("#form_relacao").removeClass('is-valid');

	$("#pai").removeClass('is-valid');
	$("#mae").removeClass('is-valid');

	//__________________________________  


	$("#nome").removeClass('is-invalid');
	$("#data_nasc").removeClass('is-invalid');
	$("#sexo").removeClass('is-invalid');
	$("#estado_civil").removeClass('is-invalid');
	$("#data_casamento").removeClass('is-invalid');
	$("#email").removeClass('is-invalid');
	$("#telefone").removeClass('is-invalid');
	$("#celular").removeClass('is-invalid');

	$("#cep").removeClass('is-invalid');
	$("#rua").removeClass('is-invalid');
	$("#bairro").removeClass('is-invalid');
	$("#estado").removeClass('is-invalid');
	$("#cidade").removeClass('is-invalid');
	$("#uf").removeClass('is-invalid');
	$("#complemento").removeClass('is-invalid');
	$("#tipo").removeClass('is-invalid');
	$("#endereco_nro").removeClass('is-invalid');

	$("#situacao_membro").removeClass('is-invalid');
	$("#regional").removeClass('is-invalid');
	$("#congregacao").removeClass('is-invalid');
	$("#relacao_igreja").removeClass('is-invalid');

	$("#form_regional").removeClass('is-invalid');
	$("#form_congregacao").removeClass('is-invalid');
	$("#form_relacao").removeClass('is-invalid');

	$("#pai").removeClass('is-invalid');
	$("#mae").removeClass('is-invalid');

	$('.nav-tabs a[href="#dados_pessoais"]').tab('show')

	$('#dlgCadastro').modal('show');

}

function criarPessoa() {


	novaPessoa = {

		nome: $("#nome").val(),
		data_nasc: $("#data_nasc").val(),
		sexo: $("#sexo").val(),
		estado_civil: $("#estado_civil").val(),
		data_casamento: $("#data_casamento").val(),
		email: $("#email").val(),
		telefone: $("#telefone").val(),
		celular: $("#celular").val(),
		codigoTc: $("#codigoTc").val(),

		endereco_nro: $("#endereco_nro").val(),
		endereco_tipo: $("#tipo").val(),
		endereco_complemento: $("#complemento").val(),

		cep: $("#cep").val(),
		rua: $("#rua").text(),
		bairro: $("#bairro").text(),
		cidade: $("#cidade").text(),
		uf: $("#uf").text(),

		pai: $("#pai").val(),
		mae: $("#mae").val(),

		situacao_membro: $("#situacao_membro").val(),
		congregacao: $("#congregacao").val(),
		regional: $("#regional").val(),
		relacao_igreja: $("#relacao_igreja").val(),

	};

	if (validaDados()) {
		$.ajax({

			type: "POST",
			url: "/api/pessoas",
			context: this,
			data: novaPessoa,
			success: function (data) {


				if (data == 'Codigo já existe') {

					$('#codigoTc').addClass('is-invalid');
				} else {


					$('#dlgCadastro').modal('hide');

					s = montarLista(data);
					$('#tabelaPessoas>tbody').append(s);

				}


			},
			error: function (error) {
				console.log(error);
			}
		});
	}


}

function viewPessoa(id) {

	$('.nav-tabs a[href="#view_dados_pessoais"]').tab('show');

	$.getJSON('/api/pessoas/' + id, function (data) {

		$("#view_nome").text(data.nome),
			$("#view_data_nasc").text(data.data_nasc),
			$("#view_sexo").text(data.sexo),

			$("#view_pai").text(data.pai),
			$("#view_mae").text(data.mae),

			$("#view_estado_civil").text(data.estado_civil),
			$("#view_email").text(data.email),
			$("#view_telefone").text(data.telefone),
			$("#view_celular").text(data.celular),
			$("#view_endereco_nro").text(data.endereco_nro),
			$("#view_endereco_tipo").text(data.endereco_tipo),
			$("#view_endereco_complemento").text(data.endereco_complemento),
			$("#view_codigoTc").text(data.codigo_tc)

		if (data.situacao_membro == 'MC') {
			$("#view_situacao").text('Membro (Congregando)');
		}

		if (data.situacao_membro == 'MNC') {
			$("#view_situacao").text('Membro (Não Congregando)');
		}
		if (data.situacao_membro == 'NMC') {
			$("#view_situacao").text('Não Membro (Congregando)');
		}
		if (data.situacao_membro == 'NM') {
			$("#view_situacao").text('Não Membro');
		}


		if (data.congregacao_id == null) {

			$("#form_view_regional").hide();
			$("#form_view_congregracao").hide()
			$("#form_view_relacao_igreja").hide()
			$("#form_view_codigoTc").hide();
		} else {

			$("#form_view_congregracao").show();
			$("#form_view_relacao_igreja").show()
			$("#form_view_regional").show();
			$("#form_view_codigoTc").show();


			$.getJSON('/api/congregacoes/' + data.congregacao_id, function (cong) {

				$.getJSON('/api/regionais/' + cong.regional_id, function (reg) {

					$("#view_regional").text(reg.regional);
					$("#form_view_regional").show();


				});

				$("#view_congregacao").text(cong.congregação);
				$("#form_view_congregracao").show();

			});

			$.getJSON('/api/funcoes/' + data.funcao_id, function (func) {

				$("#view_relacao_igreja").text(func.funcao);
				$("#form_view_relacao_igreja").show();

			});


		}


		$.getJSON('/api/enderecos/' + data.endereco_id, function (end) {

			$("#view_cep").text(end.cep);
			$("#view_rua").text(end.rua);
			$("#view_bairro").text(end.bairro);
			$("#view_cidade").text(end.cidade);
			$("#view_uf").text(end.estado);

		});

	});

	$("#dlgViewPessoa").modal('show');

}

function mostrarCampos() {

	if ($("#situacao_membro").val() === 'MC' || $("#situacao_membro").val() === 'MNC') {

		$("#form_codigoTc").show('slow');

		if ($("#codigoTc").val() != '') {

			$("#form_regional").show('slow');

			if ($("#regional").val() != null) {

				$("#form_congregacao").show('slow');
			}

			if ($("#congregacao").val() != null) {
				$("#form_relacao").show('slow');
			}
		}


	} else {

		$("#regional").val('');
		$("#congregacao").val('');
		$("#relacao_igreja").val('');
		$("#codigoTc").val('');

		$("#form_regional").hide();
		$("#form_congregacao").hide();
		$("#form_relacao").hide();
		$("#form_codigoTc").hide();


	}

}


function editarPessoa(id) {

  
	$('.nav-tabs a[href="#dados_pessoais"]').tab('show');

	$("#regional").val('')
	$("#congregacao").val('')
	$("#relacao_igreja").val('')

	$("#nome").removeClass('is-valid');
	$("#data_nasc").removeClass('is-valid');
	$("#sexo").removeClass('is-valid');
	$("#estado_civil").removeClass('is-valid');
	$("#data_casamento").removeClass('is-valid');
	$("#email").removeClass('is-valid');
	$("#telefone").removeClass('is-valid');
	$("#celular").removeClass('is-valid');

	$("#cep").removeClass('is-valid');
	$("#rua").removeClass('is-valid');
	$("#bairro").removeClass('is-valid');
	$("#estado").removeClass('is-valid');
	$("#cidade").removeClass('is-valid');
	$("#uf").removeClass('is-valid');
	$("#complemento").removeClass('is-valid');
	$("#tipo").removeClass('is-valid');
	$("#endereco_nro").removeClass('is-valid');

	$("#situacao_membro").removeClass('is-valid');

	$("#regional").removeClass('is-valid');
	$("#congregacao").removeClass('is-valid');
	$("#relacao_igreja").removeClass('is-valid');
 	 $("#codigoTc").removeClass('is-valid');

	$("#form_regional").removeClass('is-valid');
	$("#form_congregacao").removeClass('is-valid');
	$("#form_relacao").removeClass('is-valid');

	$("#form_regional").hide();
	$("#form_congregacao").hide();
	$("#form_relacao").hide();

	$("#pai").removeClass('is-valid');
	$("#mae").removeClass('is-valid');

	$.getJSON('/api/pessoas/' + id, function (data) {


		$("#id").val(data.id),
			$("#nome").val(data.nome),
			$("#data_nasc").val(data.data_nasc),
			$("#sexo").val(data.sexo),
			$("#pai").val(data.pai),
			$("#mae").val(data.mae),
			$("#estado_civil").val(data.estado_civil);

		$("#email").val(data.email),
			$("#telefone").val(data.telefone),
			$("#celular").val(data.celular),
			$("#endereco_nro").val(data.endereco_nro),
			$("#tipo").val(data.endereco_tipo),
			$("#complemento").val(data.endereco_complemento);

		$("#situacao_membro").val(data.situacao_membro);

		if (data.situacao_membro == 'MC' || data.situacao_membro == 'MNC' ) {

			$("#form_regional").show();
			$("#form_codigoTc").show();
			$("#form_congregacao").show();
			$("#form_relacao").show();

			$("#codigoTc").val(data.codigo_tc),

				$("#relacao_igreja").val(data.funcao_id);

			$("#regional").val(data.regional_id);

			$("#congregacao").empty();

			congregacao = {
				regional: $("#regional").val()
			}


			$.ajax({


				type: "GET",
				url: "/regional/congregacoes/",
				context: this,
				data: congregacao,
				success: function (data) {

					for (i = 0; i < data.length; i++) {

						if (i == 0) {
							$('#congregacao').append("<option value='' disabled selected hidden></option>");
						}

						$('#congregacao').append(($('<option>', {
							value: data[i].id,
							text: data[i].congregação
						})));
					}


					if (congregacao != null) {
						$('#congregacao').val(congregacao.congregacao);
					}


				},
				error: function (error) {
					console.log(error);
				}


			}).done(function () {


				$("#congregacao").val(data.congregacao_id);


			});


		} else {

			$("#form_codigoTc").hide();
			$("#form_regional").hide();
			$("#form_codigoTc").hide();
			$("#form_congregacao").hide();
			$("#form_relacao").hide();

		}


		$.getJSON('/api/enderecos/' + data.endereco_id, function (end) {

			$("#cep").val(end.cep);
			$("#rua").text(end.rua);
			$("#bairro").text(end.bairro);
			$("#cidade").text(end.cidade);
			$("#uf").text(end.estado);

		});

	});

	$('#dlgCadastro').modal('show')

}


function salvarPessoa(id) {

	info = {
		id: $("#id").val(),
		nome: $("#nome").val(),
		data_nasc: $("#data_nasc").val(),
		sexo: $("#sexo").val(),
		estado_civil: $("#estado_civil").val(),
		data_casamento: $("#data_casamento").val(),
		email: $("#email").val(),
		telefone: $("#telefone").val(),
		celular: $("#celular").val(),
		codigoTc: $("#codigoTc").val(),

		situacao: $("#situacao_membro").val(),

		endereco_nro: $("#endereco_nro").val(),
		endereco_tipo: $("#tipo").val(),
		endereco_complemento: $("#complemento").val(),

		cep: $("#cep").val(),
		rua: $("#rua").text(),
		bairro: $("#bairro").text(),
		cidade: $("#cidade").text(),
		uf: $("#uf").text(),

		pai: $("#pai").val(),
		mae: $("#mae").val(),

		situacao_membro: $("#situacao_membro").val(),
		congregacao: $("#congregacao").val(),
		regional: $("#regional").val(),
		relacao_igreja: $("#relacao_igreja").val(),

	};

	if (validaDados()) {

		$.ajax({

			type: "PUT",
			url: "/api/pessoas/" + info.id,
			context: this,
			data: info,
			success: function (data) {

				pessoa = JSON.parse(data);
              
				linhas = $("#tabelaPessoas>tbody>tr");

              
				e = linhas.filter(function (i, e) {
					return (e.cells[0].textContent == pessoa.id);
				});

				if (e) {
					e[0].cells[0].textContent = pessoa.id;
					e[0].cells[1].textContent = pessoa.nome;
					e[0].cells[2].textContent = pessoa.telefone;
				}


				$('#dlgCadastro').modal('hide');

			},
			error: function (error) {
				console.log(error);
			}
		});


	}


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

function montarLista(p) {

	linha = '<tr>' +
		'<td >' + p.id + '</td>' +
		'<td>' + p.nome + '</td>' +
		'<td>' + p.celular + '</td>' +
		'<td>' + p.telefone + '</td>' +
		'<td>' +

		'<div>' +

		'<button type="button"' + 'class="btn btn-sm btn-primary mr-1"' + 'onclick="viewPessoa(' + p.id + ')"> Visualizar </button>' +

		'<button type="button"' + 'class="btn btn-sm btn-success"' + 'onclick="editarPessoa(' + p.id + ')"> Editar </button>' +

		'</div>' +
		'</td>'

	"<tr>";

	return linha;

}

function montarTabela(data) {

	$('#tabelaPessoas>tbody>tr').remove();

	for (i = 0; i < data.data.length; i++) {
		s = montarLista(data.data[i]);
		$('#tabelaPessoas>tbody').append(s);
	}
}

function carregarPessoas(pg) {

	filtro = {
		nome: $("#pesquisar").val()
	}

	$.getJSON('/api/pessoas', {
		page: pg,
		data: filtro
	}, function (resp) {
		console.log(resp);
		montarTabela(resp);
		montarPagination(resp);
	});

}

function validaNome(qErrors) {

	if ($("#nome").val().length < 10) {
		qErrors += 1;
		$('#nome').removeClass('is-valid');
		$('#nome').addClass('is-invalid');
	} else {
		$('#nome').removeClass('is-invalid');
		$('#nome').addClass('is-valid');
	}

	return qErrors;
}

function validaEmail(qErrors) {

	if ($("#email").val().length < 10) {
		qErrors += 1;
		$('#email').removeClass('is-valid');
		$('#email').addClass('is-invalid');
	} else {
		$('#email').removeClass('is-invalid');
		$('#email').addClass('is-valid');
	}

	return qErrors;
}

function validaTelefone(qErrors) {

	if ($("#telefone").val().length != 14) {
		qErrors += 1;
		$('#telefone').removeClass('is-valid');
		$('#telefone').addClass('is-invalid');

	} else {
		$('#telefone').removeClass('is-invalid');
		$('#telefone').addClass('is-valid');
	}

	return qErrors;
}

function validaSexo(qErrors) {

	if (($("#sexo").val() != "Masculino") && ($("#sexo").val() != "Feminino")) {
		qErrors += 1;
		$('#sexo').removeClass('is-valid');
		$('#sexo').addClass('is-invalid');

	} else {
		$('#sexo').removeClass('is-invalid');
		$('#sexo').addClass('is-valid');
	}

	return qErrors;
}

function validaCelular(qErrors) {

	if ($("#celular").val().length != 15) {

		qErrors += 1;
		$('#celular').removeClass('is-valid');
		$('#celular').addClass('is-invalid');
	} else {
		$('#celular').removeClass('is-invalid');
		$('#celular').addClass('is-valid');
	}

	return qErrors;
}

function validaEstadoCivil(qErrors) {

	if (($("#estado_civil").val() != "Viuvo(a)") && ($("#estado_civil").val() != "Casado(a)") && ($("#estado_civil").val() != "Solteiro(a)")) {
		qErrors += 1;
		$('#estado_civil').removeClass('is-valid');
		$('#estado_civil').addClass('is-invalid');

	} else {

		$('#estado_civil').removeClass('is-invalid');
		$('#estado_civil').addClass('is-valid');

	}

	return qErrors;
}

function validaDataNasc(qErrors) {

	data = $("#data_nasc").val();

	dtArray = data.split("/");

	if (dtArray == null)
		return false;

	// Checks for dd/mm/yyyy format.

	dtDay = dtArray[0];
	dtMonth = dtArray[1];
	dtYear = dtArray[2];

	dAtual = new Date;

	if (dtMonth < 1 || dtMonth > 12) {

		qErrors += 1;
		$('#data_nasc').removeClass('is-valid');
		$('#data_nasc').addClass('is-invalid');

	} else if (dtDay < 1 || dtDay > 31) {

		qErrors += 1;
		$('#data_nasc').removeClass('is-valid');
		$('#data_nasc').addClass('is-invalid');

	} else if ((dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31) {

		qErrors += 1;
		$('#data_nasc').removeClass('is-valid');
		$('#data_nasc').addClass('is-invalid');
	} else if (dtMonth == 2) {
		var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
		if (dtDay > 29 || (dtDay == 29 && !isleap)) {
			qErrors += 1;
			$('#data_nasc').removeClass('is-valid');
			$('#data_nasc').addClass('is-invalid');
		}

	} else if ($("#data_nasc").val().length != 10) {

		qErrors += 1;
		$('#data_nasc').removeClass('is-valid');
		$('#data_nasc').addClass('is-invalid');

	} else if (dtYear > dAtual.getFullYear() || dtYear < 1900) {

		qErrors += 1;
		$('#data_nasc').removeClass('is-valid');
		$('#data_nasc').addClass('is-invalid');


	} else {

		$('#data_nasc').removeClass('is-invalid');
		$('#data_nasc').addClass('is-valid');
	}

	return qErrors;
}

function validaNomePai(qErrors) {

	if ($('#pai').val().length < 10) {
		qErrors += 1;
		$('#pai').removeClass('is-valid');
		$('#pai').addClass('is-invalid');

	} else {

		$('#pai').removeClass('is-invalid');
		$('#pai').addClass('is-valid');
	}

	return qErrors;
}

function validaNomeMae(qErrors) {

	if ($('#mae').val().length < 10) {
		qErrors += 1;
		$('#mae').removeClass('is-valid');
		$('#mae').addClass('is-invalid');

	} else {

		$('#mae').removeClass('is-invalid');
		$('#mae').addClass('is-valid');
	}

	return qErrors;
}

function validaEnderecoNro(qErrors) {

	if ($('#endereco_nro').val() == '') {
		qErrors += 1;
		$('#endereco_nro').removeClass('is-valid');
		$('#endereco_nro').addClass('is-invalid');

	} else {

		$('#endereco_nro').removeClass('is-invalid');
		$('#endereco_nro').addClass('is-valid');
	}

	return qErrors;
}

function validaEnderecoComplemento(qErrors) {

	if ($('#complemento').val() == '') {
		qErrors += 1;
		$('#complemento').removeClass('is-valid');
		$('#complemento').addClass('is-invalid');

	} else {

		$('#complemento').removeClass('is-invalid');
		$('#complemento').addClass('is-valid');
	}

	return qErrors;
}

function validaDadosPessoais(qErrors) {

	qErrors += validaNome(qErrors);

	qErrors += validaNomePai(qErrors);

	qErrors += validaNomeMae(qErrors);

	qErrors += validaDataNasc(qErrors);

	qErrors += validaSexo(qErrors);

	qErrors += validaEmail(qErrors);

	qErrors += validaTelefone(qErrors);

	qErrors += validaCelular(qErrors);

	qErrors += validaEstadoCivil(qErrors);


	return qErrors == 0;

}

function validaEndereco(qErrors) {

	qErrors = validaEnderecoNro(qErrors);
	qErrors = validaEnderecoComplemento(qErrors);


	if (!($("#cep").val().length == 9 && $("#rua").text() != '')) {

		$('#cep').removeClass('is-valid');
		$('#cep').addClass('is-invalid');

		qErrors += 1;
	}

	return qErrors == 0;

}

function validaSituacaoMembro(qErrors) {

	if ($('#situacao_membro').val() != null) {

		$('#situacao_membro').removeClass('is-invalid');
		$('#situacao_membro').addClass('is-valid');

	} else {

		qErrors += 1;
		$('#situacao_membro').removeClass('is-valid');
		$('#situacao_membro').addClass('is-invalid');

	}

	return qErrors;
}

function validaRegional(qErrors) {

	if ($('#situacao_membro').val() == 'MC' || $('#situacao_membro').val() == 'MNC') {

		if ($('#regional').val() == null) {

			qErrors += 1;

			$('#regional').removeClass('is-valid');
			$('#regional').addClass('is-invalid');

		} else {

			$('#regional').removeClass('is-invalid');
			$('#regional').addClass('is-valid');

		}

	}

	return qErrors;
}

function validaCongregacao(qErrors) {

	if ($('#regional').val() != null) {

		if ($('#congregacao').val() == null) {

			qErrors += 1;

			$('#congregacao').removeClass('is-valid');
			$('#congregacao').addClass('is-invalid');

		} else {

			$('#congregacao').removeClass('is-invalid');
			$('#congregacao').addClass('is-valid');

		}

	}

	return qErrors;
}

function validaRelacaoIgreja(qErrors) {

	if ($('#congregacao').val() != null) {

		if ($('#relacao_igreja').val() == null) {

			qErrors += 1;

			$('#relacao_igreja').removeClass('is-valid');
			$('#relacao_igreja').addClass('is-invalid');

		} else {

			$('#relacao_igreja').removeClass('is-invalid');
			$('#relacao_igreja').addClass('is-valid');

		}

	}

	return qErrors;
}

function validaMembro(qErrors) {

	qErrors += validaSituacaoMembro(qErrors);

	if ($('#situacao_membro').val() == "MC" || $('#situacao_membro').val() == "MNC") {

		qErrors += validaRegional(qErrors);

		qErrors += validaCongregacao(qErrors);

		qErrors += validaRelacaoIgreja(qErrors);

		qErrors += validaCodigoTc(qErrors);

	}


	return qErrors == 0;

}

function validaCodigoTc(qErrors) {

	if ($("#codigoTc").val() == '') {

		$('#codigoTc').removeClass('is-valid');
		$('#codigoTc').addClass('is-invalid');
		qErrors++;

	} else {

		$('#codigoTc').removeClass('is-invalid');
		$('#codigoTc').addClass('is-valid');

	}

	return qErrors;
}

function validaDados() {

	var qErrors1 = 0;
	var qErrors2 = 0;
	var qErrors3 = 0;

	if (!(qErrors1 = validaDadosPessoais(qErrors1))) {

		$('.nav-tabs a[href="#dados_pessoais"]').tab('show');

	} else if (!(qErrors = validaEndereco(qErrors2))) {

		$('.nav-tabs a[href="#endereco"]').tab('show');

	} else if (!(qErrors = validaMembro(qErrors3))) {

		$('.nav-tabs a[href="#igreja"]').tab('show');

	} else {

		return true;
	}

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

function carregarCongregacoes(congregacao) {

	$("#congregacao").empty()

	congregacao = {
		regional: $("#regional").val(),
		congregacao: congregacao
	}

	$.ajax({

		type: "GET",
		url: "/regional/congregacoes/",
		context: this,
		data: congregacao,
		success: function (data) {
			for (i = 0; i < data.length; i++) {

				if (i == 0) {
					$('#congregacao').append("<option value='' disabled selected hidden></option>");
				}

				$('#congregacao').append(($('<option>', {
					value: data[i].id,
					text: data[i].congregação
				})));
			}

			if (congregacao != null) {
				$('#congregacao').val(congregacao.congregacao);
			}

		},
		error: function (error) {
			console.log(error);
		}
	});

}

function congregacaoFiltro() {

	filtro = {
		congregacao: $("#congregacao_filtro").val()
	}
	$.ajax({

		type: "GET",
		url: "/filtro/congregacao/",
		context: this,
		data: filtro,
		success: function (data) {

			montarTabela(data);
			montarPagination(data);

		},
		error: function (error) {
			console.log(error);
		}
	});
}


function buscarPessoa() {

	filtro = {
		nome: $("#pesquisar").val()
	}

	$.ajax({

		type: "GET",
		url: "/buscar/pessoa",
		context: this,
		data: filtro,
		success: function (data) {

			if (data.total == 0) {

				alert('Pessoa Não Encontrada!');

			} else {

				montarTabela(data);
				montarPagination(data);

			}


		},
		error: function (error) {
			console.log(error);
		}
	});

}


function carregarCongregacoes(congregacao) {

	$("#congregacao").empty()

	congregacao = {
		regional: $("#regional").val(),
		congregacao: congregacao
	}

	$.ajax({

		type: "GET",
		url: "/regional/congregacoes/",
		context: this,
		data: congregacao,
		success: function (data) {
			for (i = 0; i < data.length; i++) {

				if (i == 0) {
					$('#congregacao').append("<option value='' disabled selected hidden></option>");
				}

				$('#congregacao').append(($('<option>', {
					value: data[i].id,
					text: data[i].congregação
				})));
			}

			if (congregacao != null) {
				$('#congregacao').val(congregacao.congregacao);
			}

		},
		error: function (error) {
			console.log(error);
		}
	});

}

function congregacaoFiltro() {

	filtro = {
		congregacao: $("#congregacao_filtro").val()
	}
	$.ajax({

		type: "GET",
		url: "/filtro/congregacao/",
		context: this,
		data: filtro,
		success: function (data) {

			montarTabela(data);
			montarPagination(data);

		},
		error: function (error) {
			console.log(error);
		}
	});
}

function buscarPessoa() {

	filtro = {
		nome: $("#pesquisar").val()
	}

	$.ajax({

		type: "GET",
		url: "/buscar/pessoa",
		context: this,
		data: filtro,
		success: function (data) {

			if (data.total == 0) {

				alert('Pessoa Não Encontrada!');

			} else {

				montarTabela(data);
				montarPagination(data);

			}


		},
		error: function (error) {
			console.log(error);
		}
	});

}

function chamaDuas() {

	mostrarCampos();
	carregarCongregacoes();

}



