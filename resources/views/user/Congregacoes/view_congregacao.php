<div class="modal" tabindex="-1" role="dialog" id="dlgViewCongregacao" data-backdrop="static">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <form class="form-horizontal" id="formCongregacao">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">

                    <input type="hidden" id="id" class="form-control">

                    <ul class="nav nav-tabs" id="viewTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#view_regional" role="tab" aria-controls="dados_pessoais">Congregação:</a>
                        </li>
                    </ul>

                    <div class="tab-content" id="viewTabContent" id="formMembro">

                        <div class="tab-pane fade show active p-3" id="view_regional" role="tabpanel" aria-labelledby="one-tab">

                        <div class="card border">
                                <div class="card-body">
                                <div class="form-row">
                                <div class="form-group col-md-6">
                                                <label for="regional">Regional:</label>
                                                <label type="text" class="form-control border border-success" id="view_regional_nome" autocomplete="off"></label>
                                            </div>

                                            </div>
                                    <div class="form-row">

                                            
                                            <div class="form-group col-md-6">
                                                <label for="congregacao">Congregação</label>
                                                <label type="text" class="form-control border border-success" id="view_congregacao_nome" autocomplete="off"></label>
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label for="regional">Pastor Local</label>
                                                <label type="text" class="form-control border border-success" id="view_pastor_local" autocomplete="off"></label>
                                            </div>

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
                                                <label for="complemento">Ponto de Referencia:</label>
                                                <label name="view_ponto_referencia" type="text" class="form-control border border-success" id="view_ponto_referencia" autocomplete="off"></label>

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
