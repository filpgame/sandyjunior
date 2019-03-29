$(window).on('load', function () {
    var sectorList = $('#sectorList')
    var preSaleContent = "Esgotado"
    if (sectorList.html().indexOf(preSaleContent) < 3) {
        setTimeout(function () {
            location.reload()
        }, 500);
    } else {
        //TODO GRITAR alguma coisa
    }
});
