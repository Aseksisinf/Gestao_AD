<div class="modal" tabindex="-1" role="dialog" id="dlgCadastroFamilia" data-backdrop="static">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <form class="form-horizontal" id="formCadastroFamilia">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <meta name="csrf-token" content="{{ csrf_token() }}">
                    <input type="hidden" id="id" class="form-control">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link " data-toggle="tab" href="#buscar" role="tab" aria-controls="familia">Buscar</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#familia" role="tab" aria-controls="familia">Familia</a>
                        </li>
                    </ul>

                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade p-3" id="buscar" role="tabpanel" aria-labelledby="three-tab">
                            <div class="card border">
                                <div class="card-body">
                                   <div class="table-responsive">
  <table class="table" style=" text-align: center; zoom:88%;"   id="tabelaPessoasFamilia2">
    <thead class="thead-dark">
      <tr>
      <th>#</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Açoes</th>
      </tr>
    </thead>
    <tbody>

    </tbody>
  </table>
</div>
                                </div>

                                <nav id="paginator_familia2">

                                    <ul style=" margin-left:30px; zoom:80%;" class="pagination">

                                        <!-- Links Pag 'Busca Membro Fam' (Add Javascript) !-->

                                    </ul>
                                </nav>
                            </div>
                        </div>

                        <div class="tab-pane  show active fade p-3" id="familia" role="tabpanel" aria-labelledby="two-tab">
                            <div class="card border">
                                <div class="card-body">
                            
                                    <div class = "form-group">

                                        <div class="form-group">
                                            
                                            <label for="nome">Sobrenome Familia:</label>
                                            <input type="text" class="form-control" id="sobrenome_familia" onBlur="validaSobrenomeF()" autocomplete="off">
                                            
                                            <div class="invalid-feedback">
                                                O sobrenome deve ter no minimo 10 caracteres.
                                            </div>

                                        </div>

                                

                                        <div class="form-row">
                                        
                                           <div  id ='pai-group'  class="form-group">
                                            
                                                <label>Pai:</label>

                                                <div class="input-group mb-3">
                                                        
                                                    <input type="text" class="form-control"  id="nome_pai" onBlur="validaPai()" autocomplete="off">
                                                    
                                                    <div class="input-group-append">
                                                        <button class='btn mr-2  border border-primary' style='height:100%;' value='1' onClick='buscarMembros(this.value)' type='button'><span class='fa fa-search'></span></button>
                                                        <button class='btn  border border-primary' style='height:100%; ' value='1' onClick='limparPai()'  type='button'><span class='fa fa-eraser'></span></button>
                                                    </div>
                                                    
                                                    <div class="invalid-feedback">
                                                        Use a busca para selecionar uma pessoa.
                                                    </div>

                                                </div>
                                        
                                            </div>
                                            
                                            <div class="form-group col-md-3">
                                                <label for="situacao">Situação</label>
                                                <select id="estado_relacionamento" class="form-control" onchange="mostrarCampos() " onBlur="validaSituacao()">
                                                    <option value="" disabled selected hidden></option>
                                                    <option value="Casados">Casados</option>
                                                    <option value="Divorciados">Divorciados</option>
                                                </select>
                                                <div class="invalid-feedback">
                                                    Selecione uma opção.
                                                </div>
                                            </div>

                                        </div>
                                
                                    </div>

                                    <div class="form-row">
                                    
                                        <div id ='mae-group'class="form-group">
                                            
                                            <label>Mãe:</label>

                                            <div class="input-group mb-3">
                                                
                                                <input type="text" class="form-control"  id="nome_mae" onBlur="validaMae()" autocomplete="off">
                                                <div class="input-group-append">
                                                <button class='btn mr-2  border border-primary' style='height:100%;' value='2' onClick='buscarMembros(this.value)' type='button'><span class='fa fa-search'></span></button>
                                                <button class='btn  border border-primary' style='height:100%; ' value='1' onClick='limparMae()'  type='button'><span class='fa fa-eraser'></span></button>
                                                </div>
                                                <div class="invalid-feedback">
                                                    Use a busca para selecionar uma pessoa.
                                                </div>

                                            </div>
                                        
                                        </div>
                                            
                                        <div style="margin-left:5px; display: none;" id="form_data_casamento" class="form-group col-md-3" >
                                            <label>Data de Casamento:</label>
                                            <input  class="form-control" onBlur="validaDataCasamento()" id="data_casamento" autocomplete="off">
                                            <div class="invalid-feedback">
                                                Data de casamento Invalida.
                                            </div>
                                        </div>

                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Familiares:</label>
                                        <div id="imendaHTMLmembro"></div>
                                        <button onClick='adicionaCampo()' type="button" class="btn btn-sm btn-outline-primary">Adicionar</button>
                                    </div>
                                    

                                </div>

                                    
                            </div>
                        </div>
                    </div>

                    <div  class="text-right">
                        <button type="cancel" class="btn btn-danger" data-dismiss="modal">Fechar</button>
                        <button type="submit" class="btn btn-primary">Salvar</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>



