// Importamos JQuery
const $ = require('jquery')
// Lo declaramos globalmente
window.$ = $

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
  });

// agrega el efecto affix al nav(barra cambia de color al bajar)
$(window).scroll(function() {
    if ($(document).scrollTop() > 150) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});