var resp;

$.ajax({

    type: "GET",
    url: "/gestaoInfo/",
    context: this,
    data: resp,
    success: function(resp) {


        $("#Qpessoas").text(resp[0]);
        $("#Qfamilias").text(resp[1]);
        $("#Qusuarios").text(resp[2]);
        $("#Qregionais").text(resp[3]);
        $("#Qcongregacoes").text(resp[4]);

    },
    error: function(error) {
        console.log(error);
    }
});