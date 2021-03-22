

<div class="modal" tabindex="-1" role="dialog" id="dlgCadastro" data-backdrop="static">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <form class="form-horizontal" id="formCadastro">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <input type="hidden" id="id" class="form-control">

                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#dados_pessoais" role="tab" aria-controls="dados_pessoais">Dados Pessoais</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#endereco" role="tab" aria-controls="endereco">Endereço</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#igreja" role="tab" aria-controls="igreja">Igreja</a>
                        </li>
                    </ul>

                    <div class="tab-content" id="myTabContent">

                        <div class="tab-pane fade show active p-3" id="dados_pessoais" role="tabpanel" aria-labelledby="one-tab">

                            <div class="card border">
                                <div class="card-body">
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="nome">Nome:</label>
                                            <input type="text" class="form-control" id="nome" onBlur="validaNome()" autocomplete="off">
                                            <div class="invalid-feedback">
                                                O nome deve ter no minimo 10 caracteres.
                                            </div>

                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="data_nasc">Data de Nascimento:</label>
                                            <input type="text" class="form-control" onBlur="validaDataNasc()" id="data_nasc" autocomplete="off">
                                            <div class="invalid-feedback">
                                                Data Invalida.
                                            </div>
                                        </div>

                                        <div class="form-group col-md-3">
                                            <label for="sexo">Sexo:</label>
                                            <select id="sexo" class="form-control" onBlur="validaSexo()">
                                                <option value="" disabled selected hidden></option>
                                                <option value="Masculino">Masculino</option>
                                                <option value="Feminino">Feminino</option>
                                            </select>
                                            <div class="invalid-feedback">
                                                Selecione uma opção.
                                            </div>
                                        </div>

                                        <div class="form-group col-md-6">
                                            <label for="nome_pai">Pai:</label>
                                            <input type="text" class="form-control" id="pai" onBlur="validaNomePai()" autocomplete="off">
                                            <div class="invalid-feedback">
                                                O nome deve ter no minimo 10 caracteres.
                                            </div>
                                        </div>

                                        <div class="form-group col-md-6">
                                            <label for="nome_mae">Mae:</label>
                                            <input type="text" class="form-control" id="mae" onBlur="validaNomeMae()" autocomplete="off">
                                            <div class="invalid-feedback">
                                                O nome deve ter no minimo 10 caracteres.
                                            </div>
                                        </div>

                                        <div class="form-group col-md-6">
                                            <label for="email">Email:</label>
                                            <input type="text" class="form-control" id="email" autocomplete="off" onBlur="validaEmail()">
                                            <div class="invalid-feedback">
                                                Email Invalido.
                                            </div>
                                        </div>

                                        <div class="form-group col-md-3">
                                            <label for="telefone">Telefone:</label>
                                            <input type="text" class="form-control" maxlength="14" id="telefone" autocomplete="off" onBlur="validaTelefone()">
                                            <div class="invalid-feedback">
                                                Telefone Invalido.
                                            </div>

                                        </div>

                                        <div class="form-group col-md-3">
                                            <label for="Membro">Celular:</label>
                                            <input type="text" class="form-control" id="celular" autocomplete="off" onBlur="validaCelular()">
                                            <div class="invalid-feedback">
                                                Celular Invalido.
                                            </div>
                                        </div>

                                        <div class="form-group col-md-3">
                                            <label for="estado_civil">Estado Civil</label>
                                            <select id="estado_civil" class="form-control" onchange="mostrarCampos() " onBlur="validaEstadoCivil()">
                                                <option value="" disabled selected hidden></option>
                                                <option value="Casado(a)">Casado(a)</option>
                                                <option value="Solteiro(a)">Solteiro(a)</option>
                                                <option value="Viuvo(a)">Viuvo(a)</option>
                                            </select>
                                            <div class="invalid-feedback">
                                                Selecione uma opção.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="tab-pane fade p-3" id="endereco" role="tabpanel" aria-labelledby="two-tab">
                            <div class="card border">
                                <div class="card-body">
                                    <form>
                                        <div class="form-row">

                                            <form method="get" action=".">

                                                <div class="form-group col-md-2">
                                                    <label for="cep">CEP</label>
                                                    <input type="text" class="form-control" id="cep" autocomplete="off" onblur="pesquisacep(this.value);">
                                                    <div class="invalid-feedback">
                                                        CEP Invalido.
                                                    </div>
                                                </div>

                                                <div class="form-group col-md-4">
                                                    <label for="rua">Rua</label>
                                                    <label style="height: 38px;" type="text" class="form-control" id="rua"></label>
                                                </div>

                                                <div class="form-group col-md-4">
                                                    <label for="bairro">Bairro</label>
                                                    <label style="height: 38px;" name="bairro" type="text" class="form-control" id="bairro"></label>
                                                </div>

                                                <div class="form-group col-md-2">
                                                    <label for="numero">Numero:</label>
                                                    <input type="number" class="form-control" id="endereco_nro" autocomplete="off" onblur="validaEnderecoNro();">
                                                    <div class="invalid-feedback">
                                                        Numero Invalido.
                                                    </div>
                                                </div>

                                                <div class="form-group col-md-6">
                                                    <label for="complemento">Complemento:</label>
                                                    <input name="complemento" type="text" class="form-control" id="complemento" autocomplete="off" onblur="validaEnderecoComplemento()">
                                                    <div class="invalid-feedback">
                                                        Complemento Invalido.
                                                    </div>

                                                </div>

                                                <div class="form-group col-md-4">
                                                    <label for="cidade">Cidade:</label>
                                                    <label style="height: 38px;" name="cidade" type="text" class="form-control" id="cidade" autocomplete="off"></label>

                                                </div>

                                                <div class="form-group col-md-2">
                                                    <label for="estado">Estado:</label>
                                                    <label style="height: 38px;" name="uf" type="text" class="form-control" id="uf"></label>
                                                </div>

                                            </form>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade p-3" id="igreja" role="tabpanel" aria-labelledby="three-tab">

                            <div class="card border">
                                <div class="card-body">

                                <div class='form-row'>
                                    
                                    <div class="form-group col-md-4">
                                    <label for="situacao_membro">Situação:</label>
                                            <select id="situacao_membro"  onBlur="validaSituacaoMembro()" class="form-control" onchange="mostrarCampos()">
                                                <option value="" disabled selected hidden></option>
                                                <option value='MC'>Membro (Congregrando)</option>
                                                <option value='MNC'>Membro (Não Congregrando)</option>
                                                <option value='NMC'>Não Membro (Congregrando)</option>
                                               <option value='NM'>Não Membro</option>
                                            </select>
                                        <div class="invalid-feedback">
                                            Selecione uma Opção.
                                        </div>
                                    </div>

                                    <div class="form-group col-md-4"  id="form_codigoTc"  style= "display:none;">
                                                    <label for="Codigo">Codigo Tc:</label>
                                                    <input name="complemento" type="text" class="form-control"onchange="mostrarCampos()"  id="codigoTc" autocomplete="off" onblur="validaCodigoTc()">
                                                    <div class="invalid-feedback">
                                                        Codigo Invalido ou Existente.
                                                    </div>

                                                </div>


                                </div>



                                
                                    <form>

                                        <div class="form-row" id="info_membro">

                                            <div class="form-group col-md-4" id="form_regional"  onChange="chamaDuas()" style= "display:none;">
                                                <label for="regional">Regional:</label>
                                                <select id="regional" onBlur="validaRegional()" class="form-control">
                                                    <option value="" disabled selected hidden></option>
                                                </select>
                                                <div class="invalid-feedback">

                                                </div>
                                            </div>

                                            <div class="form-group col-md-4" id="form_congregacao"  onchange="mostrarCampos()" style= "display:none;">
                                                <label for="congregacao">Congregação:</label>
                                                <select id="congregacao"  onBlur="validaCongregacao()" class="form-control" onchange="mostrarCampos()">
                                                </select>
                                                <div class="invalid-feedback">

                                                </div>
                                            </div>

                                            <div class="form-group col-md-4"  id="form_relacao"  onchange="mostrarCampos()" style= "display:none;">
                                                <label for="relacao_igreja">Relação Igreja:</label>
                                                <select onBlur="validaRelacaoIgreja()" id="relacao_igreja" class="form-control">
                                                    <option value="" disabled selected hidden></option>
                                                </select>

                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="text-right">
                        <button type="cancel" class="btn btn-danger" data-dismiss="modal">Fechar</button>
                        <button type="submit" class="btn btn-primary">Salvar</button>

                    </div>
                </div>
            </form>
        </div>
    </div>
</div>







