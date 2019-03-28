$(window).on('load', function () {
    var description = $('#banner-content > div > div > h3')
    var preSaleContent = "A pré venda para clientes cartão Elo das novas datas de São Paulo e Rio de Janeiro acabou."
    if(description.html().indexOf(preSaleContent) >= 0) {
        setTimeout(function(){
            location.reload()
        }, 500);
    }
});
