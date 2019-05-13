// Service Worker
if ('serviceWorker' in navigator) {
    console.log('Posible usar service Worker en navegador');
    navigator.serviceWorker.register('js/sw.js')
        .then(res => console.log('serviceWorker cargado correctamente', res))
        .catch(err => console.log('NO se cargo serviceWorker', err));

} else {
    console.log('NO es Posible usar service Worker en navegador');
}

//Scroll suavizado
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