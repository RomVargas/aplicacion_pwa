$(document).ready(function() {
    console.log("Hola JQuery");

    $("#menu a").click(function(e) {
        e.preventDefault(); //previene el link a pagina anterior

        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top //para conceguir la posiscion del elemento
        });
        return false;
    });
});