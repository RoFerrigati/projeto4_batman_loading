window.onload = function () {
    setTimeout(function () {
        $('#loading').fadeOut(500, function () {
            $(this).remove();  // Remove o elemento completamente do DOM
        });
    }, 3000); // Espera 5 segundos antes de remover o carregamento
};
