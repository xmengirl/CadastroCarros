// This is a JavaScript file
$(document).on('click','#botao',function(){
    var parametros = {
      "marca": $("#caixa1").val(),
      "modelo": $("#caixa2").val(),
      "ano": $("#caixa3").val(),
      "cor": $("#caixa4").val(),
      "valor": $("#caixa5").val()
    }
    $.ajax({
      type:"post",
      url:"https://cadastro-carros-usagik.c9users.io/cadastrar.php",
      data: parametros,
      success: function(data){
        $("#caixa1").val("");
        $("#caixa2").val("");
        $("#caixa3").val("");
        $("#caixa4").val("");
        $("#caixa5").val("");
         navigator.notification.alert(data);
      },
      erro: function(data){
        navigator.notification.alert(data);
      }
    })
    
});

