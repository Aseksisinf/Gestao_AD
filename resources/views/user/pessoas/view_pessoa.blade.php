<div class="modal" tabindex="-1" role="dialog" id="dlgViewPessoa" data-backdrop="static">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <form class="form-horizontal" id="formMembro">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">

                    <input type="hidden" id="id" class="form-control">

                    <ul class="nav nav-tabs" id="viewTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#view_dados_pessoais" role="tab" aria-controls="dados_pessoais">Dados     Pessoais</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#view_endereco" role="tab" aria-controls="endereco">Endereço</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#view_igreja" role="tab" aria-controls="igreja">Igreja</a>
                        </li>
                    </ul>

                    <div class="tab-content" id="viewTabContent" id="formMembro">

                        <div class="tab-pane fade show active p-3" id="view_dados_pessoais" role="tabpanel" aria-labelledby="one-tab">
                            
                            
                        <div class="card border">
                                <div class="card-body">
                                    <div class="form-row">

                                        <div class="form-group col-md-6">
                                            <label for="nome">Nome:</label>
                                            <label type="text" class="form-control border border-success" id="view_nome"></label>
                                        </div>

                                        <div class="form-group col-md-3">
                                            <label for="dataNascMembro">Data Nascimento:</label>
                                            <label type="date" class="form-control border border-success" id="view_data_nasc"></label>
                                        </div>

                                        <div class="form-group col-md-3">
                                            <label class="mr-sm-1" for="sexoMembro">Sexo:</label>
                                            <label class="form-control border border-success" id="view_sexo"></label>
                                        </div>

                                        
                                        <div class="form-group col-md-6">
                                                <label for="nome_pai">Pai:</label>
                                                <label type="text" class="form-control border border-success" id="view_pai"></label>   
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label for="nome_mae">Mãe:</label>
                                                <label type="text" class="form-control border border-success" id="view_mae"></label>   
                                            </div>
                                    
                                        <div class="form-group col-md-6">
                                            <label for="emailMembro">Email:</label>
                                            <label type="text" class="form-control border border-success" id="view_email"></label>
                                        </div>

                                        <div class="form-group col-md-3">
                                            <label for="telefoneMembro">Telefone:</label>
                                            <label type="text" class="form-control border border-success" id="view_telefone"></label>
                                        </div>

                                        <div class="form-group col-md-3">
                                            <label for="celularMembro">Celular:</label>
                                            <label type="text" class="form-control border border-success" id="view_celular"></label>
                                        </div>

                                        <div class="form-group col-md-3">
                                            <label for="estado_civil">Estado Civil</label>
                                            <label type="text" class="form-control border border-success" id="view_estado_civil"></label>
                                        </div>

                                        <div class="form-group col-md-3" id="view_form_data_casamento" style="display:none;">
                                            <label for="data_Casamento">Data do Casamento:</label>
                                            <label type="date" class="form-control border border-success" id="view_data_casamento"></label>
                                        </div>

                                        <div class="form-group col-md-6" id="view_form_nome_conjuge" style="display:none">
                                            <label for="nome_conjuge">Conjuge:</label>
                                            <label type="text" class="form-control border border-success" id="view_nome_conjuge" placeholder="Nome Completo" autocomplete="off"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade p-3" id="view_endereco" role="tabpanel" aria-labelledby="two-tab">
                            <div class="card border">
                                <div class="card-body">
                                    <form>
                                        <div class="form-row">

                                            <div class="form-group col-md-2">
                                                <label for="cep">CEP</label>
                                                <label type="text" class="form-control border border-success" id="view_cep" autocomplete="off"></label>
                                            </div>

                                            <div class="form-group col-md-4">
                                                <label for="rua">Rua</label>
                                                <label type="text" class="form-control border border-success" id="view_rua"></label>
                                            </div>

                                            <div class="form-group col-md-4">
                                                <label for="bairro">Bairro</label>
                                                <label name="bairro" type="text" class="form-control border border-success" id="view_bairro"></label>
                                            </div>

                                            <div class="form-group col-md-2">
                                                <label for="numero">Numero:</label>
                                                <label type="int" class="form-control border border-success" id="view_endereco_nro" autocomplete="off"></label>
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label for="complemento">Complemento:</label>
                                                <label name="view_endereco_complemento" type="text" class="form-control border border-success" id="view_endereco_complemento" autocomplete="off"></label>

                                            </div>

                                            <div class="form-group col-md-4">
                                                <label for="cidade">Cidade:</label>
                                                <label name="cidade" type="text" class="form-control border border-success" id="view_cidade" autocomplete="off"></label>

                                            </div>

                                            <div class="form-group col-md-2">
                                                <label for="estado">Estado:</label>
                                                <label name="uf" type="text" class="form-control border border-success" id="view_uf"></label>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade p-3" id="view_igreja" role="tabpanel" aria-labelledby="three-tab">

                            <div class="card border">
                                <div class="card-body">
                                    <form>

                                        <div class="form-row">
                                            <div class="form-group col-md-4">
                                                <label for="view_situacao">Situção:</label>
                                                <label type="text" class="form-control border border-success "id="view_situacao"></label>
                                            </div>
                                            
                                            <div class="form-group col-md-4" id="form_view_codigoTc" style="display:none;">
                                                <label for="view_codigoTc">Codigo Tc:</label>
                                                <label type="text" class="form-control border border-success "id="view_codigoTc"></label>
                                            </div>
                                            
                                        </div>

                                        <div class="form-row">

                                            <div class="form-group col-md-4" id = "form_view_regional"  style="display:none;">
                                                <label for="view_regional">Regional:</label>
                                                <label type="text" class="form-control border border-success" id="view_regional"></label>
                                            </div>

                                            <div class="form-group col-md-4"id = "form_view_congregracao"  style="display:none;">
                                                <label for="view_congregacao">Congregação:</label>
                                                <label type="text" class="form-control border border-success" id="view_congregacao"></label>
                                            </div>

                                            <div class="form-group col-md-4"id = "form_view_relacao_igreja"  style="display:none;">
                                                <label for="view_relacao_igreja">Relação Igreja:</label>
                                                <label type="text" class="form-control border border-success" id="view_relacao_igreja"></label>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade p-1" id="familia" role="tabpanel" aria-labelledby="two-tab">
                        <div class="card border">
                            <div class="card-body">
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
