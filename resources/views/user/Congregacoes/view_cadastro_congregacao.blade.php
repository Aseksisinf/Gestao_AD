<div class="modal" tabindex="-1" role="dialog" id="dlgCadastro" data-backdrop="static">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <form class="form-horizontal" id="formCadastroCongregacao">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <input type="hidden" id="id" class="form-control">

                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#regional" role="tab" aria-controls="dados_pessoais">Congregação:</a>
                        </li>
                    </ul>

                    <div class="tab-content" id="myTabContent">

                        <div class="tab-pane fade show active p-3" id="regional" role="tabpanel" aria-labelledby="one-tab">

                            
                        <div class="card border">
                                <div class="card-body">
                                    <div class="form-row">
                                       
                                            
                                        <div class="form-group col-md-6">
                                            <label for="nome">Pastor Local:</label>
                                            <input type="text" class="form-control" id="pastor_local" onBlur="validaPastorLocal()" autocomplete="off">
                                            <div class="invalid-feedback">
                                                O nome deve ter no minimo 10 caracteres.
                                            </div>

                                        </div>

                                         <div class="form-row">

                                         <div class="form-group col-md-6">
                                            <label for="nome">Congregação:</label>
                                            <input type="text" class="form-control" id="congregacao_nome" onBlur="validaCongregacaoNome()" autocomplete="off">
                                            <div class="invalid-feedback">
                                                O nome deve ter no minimo 10 caracteres.
                                            </div>

                                        </div>

                                        <div class="form-group col-md-4 mr-3">
                                            <label for="regional">Regional:</label>
                                            <select id="regional_nome" class="form-control" onchange="mostrarCampos() " onBlur="validaRegionalNome()">
                    
                                            </select>
                                            <div class="invalid-feedback">
                                                Selecione uma opção.
                                            </div>
                                        </div>

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
                                                    <input type="number" class="form-control" id="endereco_nro" autocomplete="off" onblur="validaNumeroEnd();">
                                                    <div class="invalid-feedback">
                                                        Numero Invalido.
                                                    </div>
                                                </div>

                                                <div class="form-group col-md-6">
                                                    <label for="complemento">Ponto de Referência:</label>
                                                    <input name="complemento" type="text" class="form-control" id="ponto_referencia" autocomplete="off">
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

                                    </div>
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
