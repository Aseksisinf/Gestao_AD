<div class="modal" tabindex="-1" role="dialog" id="dlgViewFamilia">
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
                            <a class="nav-link active" data-toggle="tab" href="#familia" role="tab" aria-controls="view_familia">Familia</a>
                        </li>
                    </ul>

                    <div class="tab-content" id="viewTabContent" id="formMembro">

                        <div class="tab-pane fade show active p-3" id="view_familia" role="tabpanel" aria-labelledby="one-tab">
                            <div class="card border">
                                <div class="card-body">

                                    <div class="form-group">
                                        <label for="sobrenome">Sobrenome:</label>
                                        <label type="text" class="form-control border border-success" id="view_sobrenome"></label>
                                    </div>

                                        <label type="text" class="form-control border border-success" id="view_pai"></label>
                                     

                                        <label type="text" class="form-control border border-success" id="view_mae"></label>
                                      

                                    <div id="imendaHTMLfamilia"></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
