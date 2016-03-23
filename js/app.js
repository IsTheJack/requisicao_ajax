(function($, jQuery) {
    'use strict';
    // Ao carregar e renderizar todos os elementos da página, fazer:
    $(window).load(function() {
        // Adicionando evento de clique no botão e inserindo a lógica
        $('.btnSearch').click(function() {
            $.ajax({
                method: 'GET',
                // url recebe a chamada de uma função anônima para deixar a string flexível às mudanças de valores do textbox
                url: 'http://republicavirtual.com.br/web_cep.php?cep=' + $('.txtCEP').val() + '&formato=json',
                // Antes de enviar, mostrar o gif de carregamento
                beforeSend: function() {
                    $('.img-loading').toggle('slow');
                }
            }).done(function(data) { // A função done recebe um callback com o argumento 'data', que é um object com os valores de retorno da requisição
                console.log(data.resultado);
                if (data.resultado == 1) { // Se a pesquisa teve um resultado
                    $('.cidade').text(data.cidade);
                    $('.uf').text(data.uf);
                    $('.bairro').text(data.bairro);
                    $('.img-loading').toggle('slow');
                    $('.result').show();
                }
                else { // Se a pesquisa não deu resultado
                    $('.img-loading').toggle();
                    alert('CEP inválido ou inexistente!');
                    $('.result').hide();
                }
            });
        });
    })
})($, jQuery);