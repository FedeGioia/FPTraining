$(document).ready(function() {
    $('.day').click(function() {
      $('.day').removeClass('selected'); // Elimina todas las selecciones anteriores
      $(this).addClass('selected'); // Añade la clase "selected" al día seleccionado
    });
  });
  